import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';
import { AngularIndexedDB } from 'angular2-indexeddb';

@Injectable()
export class ProjectService {
  size: any;
  constructor(private apiService: APIService, private router: Router) {}

  cid() {
    let d = new Date();
    let cid = d.getTime() +""+ Math.floor(1000 + Math.random() * 8999);
    return cid;
  }

  cdate() {
    let d = new Date();
    let cdate = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours();
    let min  = d.getMinutes();
    let min2 = "";
    if(min<10) {
      min2 = "0"+min;
    } else{
      min2 = ""+min;
    }
    cdate += ":"+min2;
    return cdate;
  }

  emitFormElement = new EventEmitter<any>();
  emitFormCard = new EventEmitter<any>();
  emitFormArray = new EventEmitter<any>();
  emitFormResponse = new EventEmitter<any>();
  emitSyncResponse = new EventEmitter<any>();
  emitUserLogin = new EventEmitter<any>();
  emitOfflineResponse = new EventEmitter<any>();
  emitIndexedDBInitializedRes = new EventEmitter<any>();

  db = new AngularIndexedDB('responseDB', 1);

  formArray = [];

  formCard= [];

  templateArray = [];

  storeFormArrayTemp :any = [];
  submittedForm: any[];

  login(data: any) {
    this.apiService.Login(data).subscribe(res=>{
      console.log(res);
      if(res.success){
        localStorage.setItem('token',res.token);
        this.emitUserLogin.emit({success: true, msg: res.message});
      } else {}
    }, err=>{
      console.log(err);
    });
  }

  checkLogin() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['./']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['./login']);
  }

  checkImage(image: any) {
    this.apiService.CheckImage(image).subscribe(res=>{
      console.log(res);
    });
  }

  getFormCards() {
    this.emitFormCard.emit(this.formCard);
  }

  getFormByCid(cid) {

    for(let i of this.formArray) {
      if(i.Details.cid == cid) {
        this.emitFormElement.emit(i);
        break;
      }
    }
  }

  getTemplateElement(tempCid : any) {
    // console.log(tempCid);
    for(let temp of this.templateArray) {
      if( temp.Details.cid == tempCid ) {
        // console.log(temp.Elements);
        return temp.Elements;
      }
    }
  }

  getTemplateByCid(tempCid: any) {
    for(let i of this.templateArray) {
      if(i.Details.cid == tempCid) {
        this.emitFormElement.emit(i);
        break;
      }
    }
  }

  storeFormArray(formArray: any) {
    this.storeFormArrayTemp = formArray;
  }

  syncAll() {
    this.db.getAll('asrResponse').then((response) => {
        // console.log(response);
        if(response.length) {
            for(let i=0; i<response.length; i++) {
              // console.log(response[i]);

              let sub1 = this.apiService.SubmitResponse(response[i].response).subscribe(res=>{
                // console.log(res);
                if(res.success){
                  this.emitSyncResponse.emit({success:true, msg:"synced!"});
                  this.db.delete('asrResponse', response[i].id).then(() => {
                    // console.log('response deleted at position ', +i, response[i].id);
                  }, (error) => {
                      console.log(error);
                      alert("Some error detected! Please try again");
                      window.location.reload();
                  });
                  sub1.unsubscribe();
                } else {
                  this.emitSyncResponse.emit({success:false, msg:"not-synced!"});
                }
              },err=> {
                console.log(err);
                this.emitSyncResponse.emit({success:false, msg:"not-synced!"});
                sub1.unsubscribe();
              });
            }
        }
    }, (error) => {
        console.log(error);
    });
  }

  getFormArray() {
    this.formArray = [];
    this.apiService.GetFormArray().subscribe((res)=>{
      console.log(res);
      if(res){

        if(res.formArray.length) {
          for(let i = 0; i< res.formArray.length; i++) {
            this.formArray.push(res.formArray[i].form_json);
          }
        }

        if(res.tempArray.length) {
          for(let i = 0; i< res.tempArray.length; i++) {
            this.templateArray.push(res.tempArray[i].temp_json);
          }
        }

        this.emitFormArray.emit(this.formArray);
      } else {}
    },err=> {
      console.log(err);
      // this.emitFormArray.emit(this.formArray);
    });
  }

  submitFormArray(tempArray: any) {
    if(this.storeFormArrayTemp.Elements) {

      for(let temp of this.storeFormArrayTemp.Rules) {

        if(temp.tempCid == tempArray.Details.cid) {

          this.storeFormArrayTemp.Elements = this.storeFormArrayTemp.Elements.concat(tempArray.Elements);
          this.submittedForm = this.storeFormArrayTemp;
          console.log(this.submittedForm);
          this.submitResponse(this.submittedForm);
          this.storeFormArrayTemp = [];
        }
      }
    } else {
      this.submittedForm = tempArray;
      this.submitResponse(this.submittedForm);
      console.log(this.submittedForm)
    }

  }

  submitResponse(formArray: any) {
    console.log(formArray);

    let asrName: any;
    let asrID: any;

    asrName = localStorage.getItem('asrName');
    asrID = localStorage.getItem('asrID');

    asrName = "5vy5y5";
    asrID = "15150728168562338";

    let response : any = {};

    response.ResCid = this.cid();
    response.ResDetails = formArray.Details;
    response.ResElements = formArray.Elements;
    response.ResExtra = {asrName: asrName, asrID: asrID, resDate: this.cdate()};

    console.log(response);

    if(navigator.onLine) {
      this.syncOnline(response);                      // Sysnc Online
    } else {
      this.addResponseToIndexDB(response);            // save data in IndexedDB
    }
  }

  syncOnline(response) {
    let sub1 = this.apiService.SubmitResponse(response).subscribe(res=>{
      console.log(res);
      if(res.success){
        this.emitFormResponse.emit({success:true, msg:"submitted"});
        sub1.unsubscribe();
      } else {
        this.emitFormResponse.emit({success:false, msg:"not-submitted"});
      }
    },err=> {
      console.log(err);
      this.emitFormResponse.emit({success:false, msg:"not-submitted"});
      sub1.unsubscribe();
    });
  }

  initializeIndexDB() {

    this.db.openDatabase(1, (evt) => {
        let objectStore = evt.currentTarget.result.createObjectStore(
            'asrResponse', { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("response", "response", { unique: false });
    });

    let temp = 0;
    // initialize IndexDB
    let db = new AngularIndexedDB('responseDB', 1);
    // open IndexDB
    db.openDatabase(1, (evt) => {
        let objectStore = evt.currentTarget.result.createObjectStore(
            'asrResponse', { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("response", "response", { unique: false });
    }).then(()=>{

      db.getAll('asrResponse').then((response) => {
          temp = response.length;
          this.emitOfflineResponse.emit(temp);
      }, (error) => {
          console.log(error);
      });
    });
  }

  addResponseToIndexDB(response) {

    // get size of response
    let tempStorage = JSON.stringify(response).length;
    tempStorage += (1024 * 1024 * 200);
    console.log(tempStorage);

    console.log(response);
    // request for space as per size of response
    (<any>navigator).webkitPersistentStorage.requestQuota (
        tempStorage, function(grantedBytes) {
          console.log(response);
          console.log(grantedBytes);
          (<any>window).webkitRequestFileSystem((<any>window).PERSISTENT, grantedBytes, res=>{

            // initialize IndexDB
            let db = new AngularIndexedDB('responseDB', 1);

            // open IndexDB
            db.openDatabase(1, (evt) => {
                let objectStore = evt.currentTarget.result.createObjectStore(
                    'asrResponse', { keyPath: "id", autoIncrement: true });
                objectStore.createIndex("response", "response", { unique: false });

            }).then(()=>{

              // add response in Indexed
              db.add('asrResponse', { response: response }).then(() => {
                alert('Form stored in offline storage');
                window.location.reload();
                }, (error) => {
                  alert('Some error occurs while storing the form. Please try again');
                  window.location.reload();
              });
            });
          }, err =>{
            alert("Insufficient storage! Please try again after having free space." );
          });
        }, function(e) { console.log('Error', e); }
    );
  }

  saveIntoIndexed(response) {
    // add response in IndexedDB
    this.db.add('asrResponse', { response: response }).then(() => {
      console.log("Response added in Indexed DB!");

      this.emitFormResponse.emit({success:true, msg:"Response stored in Indexed DB submitted"});
    }, (error) => {
      console.log(error);
    });
  }


}
