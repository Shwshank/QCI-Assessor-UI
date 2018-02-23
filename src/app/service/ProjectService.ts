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
  vibrateDuration0: any = 100;
  vibrateDuration1: any = 200;
  emitFormElement = new EventEmitter<any>();
  emitFormCard = new EventEmitter<any>();
  emitFormArray = new EventEmitter<any>();
  emitFormResponse = new EventEmitter<any>();
  emitSyncResponse = new EventEmitter<any>();
  emitUserLogin = new EventEmitter<any>();
  emitOfflineResponse = new EventEmitter<any>();
  emitIndexedDBInitializedRes = new EventEmitter<any>();
  emitFlaggedFormArray = new EventEmitter<any>();
  emitForm_sync = new EventEmitter<any>();

  db = new AngularIndexedDB('responseDB', 1);

  formArray = [];

  flaggedFormArray = [];

  formCard= [];

  templateArray = [];

  storeFormArrayTemp :any = [];

  submittedForm: any[];

  login(data: any) {
    this.apiService.Login(data).subscribe(res=>{
      console.log(res);
      if(res.success){
        localStorage.setItem('token',res.token);
        localStorage.setItem('form_token',res.form_token);
        this.emitUserLogin.emit({success: true, msg: res.message});
      } else {}
    }, err=>{
      console.log(err);
    });
  }

  checkLogin() {

    if(localStorage.getItem('token')) {
      // normal notification example
      // Notification.requestPermission(function(permission){
      //     let notification = new Notification("Title",{body:'Form updated!',icon:'./assets/icons/icon-256x256', dir:'auto'});
      //     setTimeout(function(){
      //         notification.close();
      //     },6000);
      // });

      // navigator.serviceWorker.register('worker-basic.min.js');
      // Notification.requestPermission(function(result) {
      //   if (result === 'granted') {
      //     navigator.serviceWorker.ready.then(function(registration) {
      //       registration.showNotification("Form updated!",{body:'Looks like a form was recently updated. ',icon:'./assets/icons/icon-256x256', dir:'auto'});
      //     });
      //   }
      // });

      this.router.navigate(['./']);

    }
  }

  logout() {
    localStorage.removeItem('token');
    // navigator.vibrate(this.vibrateDuration1);
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

  getFlaggedResponseid(rid) {
    for(let i of this.flaggedFormArray) {
      if(i.Details.rid == rid) {
        this.emitFormElement.emit(i);
        break;
      }
    }
  }

  popFromFlaggedArray(rid) {
    for(let i= 0; i< this.flaggedFormArray.length; i++) {
      if(this.flaggedFormArray[i].Details.rid == rid) {
        this.flaggedFormArray.splice(i,1);
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
                    navigator.vibrate(this.vibrateDuration0);
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

    if(navigator.onLine) {
      let form_token = localStorage.getItem('form_token');

      this.apiService.GetFormArray(form_token).subscribe((res)=>{
        console.log(res);
        if(res){

          this.emitForm_sync.emit(res.form_sync);
          localStorage.setItem('form_sync',JSON.stringify(res.form_sync));

          if(res.form_token != localStorage.getItem('form_token')) {
            // token dosen't match

            // navigator.vibrate(this.vibrateDuration1);

            localStorage.setItem('form_token',res.form_token);

            this.saveOfflineFormAndTemplate(res.formArray, res.tempArray);
            this.getOfflineFormAndTemplate();

          } else {
            // token matches

            this.getOfflineFormAndTemplate()

          }

        } else {}
      },err=> {
        console.log(err);
        this.getOfflineFormAndTemplate();
      });
    } else {
      this.getOfflineFormAndTemplate();
    }
  }

  saveOfflineFormAndTemplate(formArray, tempArray){

    localStorage.setItem('formArray', JSON.stringify(formArray));
    localStorage.setItem('tempArray', JSON.stringify(tempArray));

    if(! ('Notification' in window) ){

        console.log('Web Notification not supported');

    } else {

      console.log('Web Notification is supported');

      Notification.requestPermission(function(permission){
          // let notification = new Notification("Title",{body:'Form updated!',icon:'http://i.stack.imgur.com/Jzjhz.png?s=48&g=1', dir:'auto'});
          // setTimeout(function(){
          //     notification.close();
          // },6000);

          navigator.serviceWorker.register('worker-basic.min.js');
          Notification.requestPermission(function(result) {
            if (result === 'granted') {
              navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification("Form updated!",{body:'Looks like a form was recently updated. ',icon:'./assets/icons/icon-256x256.png', dir:'auto'});
              });
            }
          });
      });

    }

  }

  getOfflineFormAndTemplate() {
    let formArray = JSON.parse(localStorage.getItem('formArray'));
    let tempArray = JSON.parse(localStorage.getItem('tempArray'));

    this.emitForm_sync.emit(localStorage.getItem('form_sync'));

    if(formArray.length) {
      for(let i = 0; i< formArray.length; i++) {
        this.formArray.push(formArray[i].form_json);
      }
    }

    if(tempArray.length) {
      for(let i = 0; i< tempArray.length; i++) {
        this.templateArray.push(tempArray[i].temp_json);
      }
    }
    this.emitFormArray.emit(this.formArray);
  }

  getFlaggedResponses() {
    this.flaggedFormArray = [];
    this.apiService.GetFlaggedResponses().subscribe((res)=>{
      console.log(res);
      if(res){

        if(res.formArray.length) {
          for(let i = 0; i< res.formArray.length; i++) {
            this.flaggedFormArray.push(res.formArray[i].form_json);
          }
        }
        this.emitFlaggedFormArray.emit(this.flaggedFormArray);
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
      this.addResponseToIndexDB(response);
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
            window.location.reload();
            // this.emitFormResponse.emit({success:false, msg:"not-submitted"});
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
