import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';
import { AngularIndexedDB } from 'angular2-indexeddb';

@Injectable()
export class ProjectService {
  size: any;
  constructor(private apiService: APIService, private router: Router) {}

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
  emitofflineFormIdArrray = new EventEmitter<any>();
  emitChunkSuccess = new EventEmitter<any>();
  emitOfflineChunkSuccess = new EventEmitter<any>();
  emitOnlineFormCount  = new EventEmitter<any>();
  formArray = [];
  offlineFormIdArrray = [];
  flaggedFormArray = [];
  formCard= [];
  templateArray = [];
  storeFormArrayTemp :any = [];
  submittedForm: any[];
  chunk:any= {responseTimeStamp:'', formID:'', version:''};
  sub1 : any;

  db = new AngularIndexedDB('responseDB', 1);

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
      alert("Invalid credentials!");
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
    localStorage.removeItem('flaggedForms');
    localStorage.removeItem('formArray');
    localStorage.removeItem('form_online_count');
    localStorage.removeItem('form_sync');
    localStorage.removeItem('form_token');
    localStorage.removeItem('phone');
    localStorage.removeItem('responseTimeStamp');
    localStorage.removeItem('tempArray');
    localStorage.removeItem('tempArray2');
    let request = indexedDB.deleteDatabase('responseDB');
    window.location.reload(true);
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

              console.log(response[i]);

              for(let j=0; j<response[i].response.ResElements.length; j++) {
                response[i].response.ResElements[j].chunkStatus = false;
                // console.log(response[i].response.ResElements[j]);
              }

              this.syncOffline1(response[i]);

              // let sub1 = this.apiService.SubmitResponse(response[i].response).subscribe(res=>{
              //   // console.log(res);
              //   if(res.success){
              //     this.emitSyncResponse.emit({success:true, msg:"synced!"});
              //     this.db.delete('asrResponse', response[i].id).then(() => {
              //       navigator.vibrate(this.vibrateDuration0);
              //       // console.log('response deleted at position ', +i, response[i].id);
              //     }, (error) => {
              //         console.log(error);
              //         alert("Some error detected! Please try again");
              //         window.location.reload();
              //     });
              //     sub1.unsubscribe();
              //   } else {
              //     this.emitSyncResponse.emit({success:false, msg:"not-synced!"});
              //   }
              // },err=> {
              //   console.log(err);
              //   this.emitSyncResponse.emit({success:false, msg:"not-synced!"});
              //   sub1.unsubscribe();
              // });
            }
        }
    }, (error) => {
        console.log(error);
    });
  }

  syncOffline1(res: any) {

    this.sub1 = this.emitOfflineChunkSuccess.subscribe(cid=>{

        for( let i =0; i<res.response.ResElements.length; i++) {
          if(cid==res.response.ResElements[i].cid) {

            res.response.ResElements[i].chunkStatus = true;
            this.checkAllOfflineChunk4(res);
          }
        }

    }, err=>{
      console.log(err);

    });

    this.setMetaChunk2(res);
  }

  setMetaChunk2(res: any){
    this.chunk.responseTimeStamp = res.response.ResCid;
    this.chunk.formID = res.response.ResDetails.cid;
    this.chunk.version = res.response.ResDetails.version;

    this.apiService.SyncMeta(this.chunk).subscribe(res2=>{
      console.log(this.chunk);
      if(res2.success) {
        for(let i = 0; i<res.response.ResElements.length; i++) {
          // console.log(res.response.ResElements[i].chunkStatus);

          if(!res.response.ResElements[i].chunkStatus) {
            // setTimeout( () => this.syncChunkOffline(res.response.ResElements[i], this.chunk), 5000);
            this.syncChunkOffline3(res, res.response.ResElements[i]);
          }
        }
      }
    }, err=>{
      console.log(err);
    })

  }

  syncChunkOffline3(res, data: any) {
    let chunk = {responseTimeStamp:'', formID:'', version:''};
    chunk.responseTimeStamp = res.response.ResCid;
    chunk.formID = res.response.ResDetails.cid;
    chunk.version = res.response.ResDetails.version;

    console.log(data);
    console.log(chunk);


    let sub1 = this.apiService.SyncChunk(data, chunk).subscribe(res=>{

      // console.log(sum);
      // console.log(res);
      if(res.success) {
        this.emitOfflineChunkSuccess.emit(data.cid);
      }
      sub1.unsubscribe();
    }, err=>{
      console.log(err);
    });
  }

  checkAllOfflineChunk4(res) {

    let syncFlag = false;
    for(let i = 0; i< res.response.ResElements.length; i++) {
      if(res.response.ResElements[i].chunkStatus) {

        syncFlag = true;
      } else {
        syncFlag = false;
        break;
      }
    }

    if(syncFlag) {
      this.sendSubmitOfflineResponseID5(res);
    }
  }

  sendSubmitOfflineResponseID5(res) {
    console.log(res);

    this.apiService.SendSubmitResponseID(res.response.ResCid).subscribe(res2=>{
      // console.log(res2);

      if(res2.success) {
        this.emitSyncResponse.emit({success:true, msg:"synced!"});
          this.db.delete('asrResponse', res.id).then(() => {
            // navigator.vibrate(this.vibrateDuration0);

          }, (error) => {
              console.log(error);
              alert("Some error detected! Please try again");
              window.location.reload();

          });
      } else {
        alert('Some error occurs!');
      }
    }, err=>{
      console.log(err);
      alert('Some error occurs!');
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
          localStorage.setItem('form_online_count',JSON.stringify(res.onlineResponses));

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
    let onlineCount = JSON.parse(localStorage.getItem('form_online_count'));

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
    this.emitOnlineFormCount.emit(onlineCount);
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

        // save data in offline storage
        localStorage.setItem('flaggedForms', JSON.stringify(this.flaggedFormArray));
        this.emitFlaggedFormArray.emit(this.flaggedFormArray);
      } else {
        let temp;
        temp = localStorage.getItem('flaggedForms');
        this.flaggedFormArray = JSON.parse(temp);
        this.emitFlaggedFormArray.emit(this.flaggedFormArray);
      }
    },err=> {
      console.log(err);
      let temp;
      temp = localStorage.getItem('flaggedForms');
      this.flaggedFormArray = JSON.parse(temp);
      this.emitFlaggedFormArray.emit(this.flaggedFormArray);

    });
  }

  submitFormArray(tempArray: any) {
    if(this.storeFormArrayTemp.Elements) {

      for(let temp of this.storeFormArrayTemp.Rules) {

        if(temp.tempCid == tempArray.Details.cid) {

          this.storeFormArrayTemp.Elements = this.storeFormArrayTemp.Elements.concat(tempArray.Elements);
          this.submittedForm = this.storeFormArrayTemp;
          console.log(this.submittedForm);
          this.saveResponseOffline(this.submittedForm);
          this.storeFormArrayTemp = [];
        }
      }
    } else {
      this.submittedForm = tempArray;
      this.saveResponseOffline(this.submittedForm);
      console.log(this.submittedForm)
    }

  }

  saveResponseOffline(formArray: any) {
    console.log(formArray);

    // check if response is flagged or not. If flagged, pop the saved flagged response
    if(formArray.Details.rid) {
      console.log('yer')
      let temp1;
      let temp2;
      let temp3;
      temp1 = localStorage.getItem('flaggedForms');
      temp2 = JSON.parse(temp1);

      for(let i = 0; i<temp2.length; i++) {
        if(formArray.Details.rid == temp2[i].Details.rid) {
          temp3  = i;
          break;
        }
      }

      temp2.splice(temp3,1);
      this.flaggedFormArray = temp2;
      localStorage.setItem('flaggedForms', JSON.stringify(this.flaggedFormArray));
      this.emitFlaggedFormArray.emit(this.flaggedFormArray);

    }

    let asrName: any;
    let asrID: any;

    asrName = localStorage.getItem('asrName');
    asrID = localStorage.getItem('asrID');

    asrName = "5vy5y5";
    asrID = "15150728168562338";

    let response : any = {};

    if(formArray.Details.rid) {
      response.ResCid = formArray.Details.rid // flagged response
    } else {
      response.ResCid = this.cid(); // new response
    }

    response.ResDetails = formArray.Details;
    response.ResElements = formArray.Elements;
    response.ResExtra = {asrName: asrName, asrID: asrID, resDate: this.cdate()};

    // console.log(response);

    for(let i = 0; i< response.ResElements.length; i++) {
      if(response.ResElements[i].chunkStatus) {
        delete response.ResElements[i].chunkStatus;
      }
    }

    console.log(' --> '+response);

    this.addResponseToIndexDB(response);

    // update in chunk version

    // if(navigator.onLine) {
    //   this.syncOnline(response);                      // Sysnc Online
    // } else {
    //   this.addResponseToIndexDB(response);            // save data in IndexedDB
    // }
  }

  syncChunk(data: any, chunk: any) {
    console.log("----");
    console.log(data);
    console.log("____");
    let sub1 = this.apiService.SyncChunk(data, chunk).subscribe(res=>{
      console.log(res);
      if(res.success) {
        this.emitChunkSuccess.emit(data.cid);
      }
    }, err=>{
      console.log(err);
    });
  }

  syncOnline(response) {
    let sub1 = this.apiService.SubmitResponse(response).subscribe(res=>{
      console.log(res);
      if(res.success){
        // sync form
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

  sendSubmitResponseID(response , id) {

    this.apiService.SendSubmitResponseID(id).subscribe(res=>{
      // console.log(res);
      if(res.success) {
        this.emitFormResponse.emit({success: true}); // Submit form final form
        // this.saveResponseOffline(response);
      } else {
        this.emitFormResponse.emit({success:false, msg:"not-submitted"});
        this.saveResponseOffline(response);
      }
    }, err=>{
      console.log(err);
      this.saveResponseOffline(response);
    });
  }

  initializeIndexDB() {
    this.offlineFormIdArrray = [];
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

          // offline responses corresponding to formID

          if(response.length) {

            for(let  i=0; i<response.length; i++ ) {
              this.offlineFormIdArrray.push(response[i].response.ResDetails.cid);
            }

          }
          this.emitOfflineResponse.emit(temp);
          this.emitofflineFormIdArrray.emit(this.offlineFormIdArrray);
          // console.log(this.offlineFormIdArrray);
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
                this.router.navigate(['/']);
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
