import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';
import { AngularIndexedDB } from 'angular2-indexeddb';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////d1
//
//    ProjectService acts as intermidiate between UI-components and backend APIS.
//
//
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //
//   //
//   //    # Functions
//   //
//   //    1. cid() : Returns 8 digit unique token followed by the timestamp and 4 -
//   //              digits number. Used for generating uniques IDs.
//   //
//   //    2. cdate() : Returns current date in dd/mm/yyyy HH:MM format
//   //
//   //    3. login() : Passes credentials to login API 'assesorLogin'.
//   //
//   //    4. checkLogin() : Checkes token, else navigate to login page.
//   //
//   //    5. logout() : logs  user out, delete tokens and browser wide storage n forms.
//   //
//   //    6. updatePassword() : Updates password. API 'changeAsrPassword'.
//   //
//   //    7. getFormCards() : @$@$@$@
//   //
//   //    8. getFormByCid() : Emit complete form Array to FormsComponent.ts
//   //
//   //    9. getFlaggedResponseid() : Emit flagged Form Array to FormsComponent.ts
//   //
//   //    10. popFromFlaggedArray() : @$@$@$@
//   //
//   //    11. getTemplateElement() : @$@$@$@
//   //
//   //    12. storeFormArray() : store form temp. in variable storeFormArrayTemp.
//   //
//   //    13. syncAll() : Pulls form Array from IndexedDB and passes array to syncOffline1().
//   //
//   //    14. syncOffline1() : Extract responce array, add meta data by setMetaChunk2() and
//   //                        passes individual responce to sync. Checks if all response
//   //                        chunks are synced or not by checkAllOfflineChunk4().
//   //
//   //    15. setMetaChunk2() : set metaData and passed to syncChunkOffline3().
//   //
//   //    16. syncChunkOffline3() : sync chunk to API 'submitChunkResponse'.
//   //                              If chunk submitted, emit sync msg to syncOffline1().
//   //                              checkAllOfflineChunk4() will be called to check all sync
//   //                              status of all response.
//   //
//   //    17. checkAllOfflineChunk4(): If complete form synced, passes all synced msg to
//   //                                 sendSubmitOfflineResponseID5() to notify backend.
//   //
//   //    18. sendSubmitOfflineResponseID5() : send footer flag of response. Server acknoledges
//   //                                         that all chunks are synced. Form deleted from offline
//   //                                         storage, count updated.
//   //    19. getFormArray() : called by FormListingComponent to get the form array.
//   //                         If internet available, API will be called 'getAssesorForms'
//   //                         else offline stored forms will be emited by getOfflineFormAndTemplate().
//   //
//   //    20. saveOfflineFormAndTemplate() ; Maintains a copy of forms in the local storage.
//   //                                       Shows notification when new form get synced.
//   //
//   //    21. getOfflineFormAndTemplate() : emit offline saved forms.
//   //
//   //    22. getFlaggedResponses() : Repuest for fresh copy of Flagged Forms on API
//   //                                'getFlaggedResponses', if fails emits the offline stored.
//   //
//   //    23. submitFormArray() : If Online form responces didn't synced, data will
//   //                            be stored offline by saveResponseOffline().
//   //
//   //    24. saveResponseOffline() : format the from array and passes form json to
//   //                                addResponseToIndexDB() to store in indexed DB.
//   //
//   //    25. syncChunk() : called by FormBuilderComponent to syncChunk to API 'submitChunkResponse'.
//   //
//   //    26. syncOnline() : @$@$@$@
//   //
//   //    27. sendSubmitResponseID() : Send final responce to server to send acknoledge
//   //                                 to server. If fails, data goes to saveResponseOffline().
//   //
//   //    28. initializeIndexDB() : initialize indexd DB 'asrResponse'
//   //
//   //    29. addResponseToIndexDB(): ask for storage permission, if space not available.
//   //
//   //    30. saveIntoIndexed(): save data to db
//   //
//   //
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

  updatePassword(oldpwd, newpwd) {
    this.apiService.UpdatePassword(oldpwd, newpwd).subscribe(res=>{
        if(res.success) {
          console.log(res);
          alert('Password changed!');
          this.logout();
        } else {
          console.log(res);
          alert(res.message);
        }
      }, err=>{
        console.log(err);
      })
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
              }

              this.syncOffline1(response[i]);
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

    this.apiService.SendSubmitResponseID(res.response.ResCid, 'Offline').subscribe(res2=>{
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

      // Notification.requestPermission(function(permission){
      //     // let notification = new Notification("Title",{body:'Form updated!',icon:'http://i.stack.imgur.com/Jzjhz.png?s=48&g=1', dir:'auto'});
      //     // setTimeout(function(){
      //     //     notification.close();
      //     // },6000);
      //
      //     navigator.serviceWorker.register('worker-basic.min.js');
      //     Notification.requestPermission(function(result) {
      //       if (result === 'granted') {
      //         navigator.serviceWorker.ready.then(function(registration) {
      //           registration.showNotification("Form updated!",{body:'Looks like a form was recently updated. ',icon:'./assets/icons/icon-256x256.png', dir:'auto'});
      //         });
      //       }
      //     });
      // });

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

    // obsolute code

    // let sub1 = this.apiService.SubmitResponse(response).subscribe(res=>{
    //   console.log(res);
    //   if(res.success){
    //     // sync form
    //     this.emitFormResponse.emit({success:true, msg:"submitted"});
    //     sub1.unsubscribe();
    //   } else {
    //     this.emitFormResponse.emit({success:false, msg:"not-submitted"});
    //   }
    // },err=> {
    //   console.log(err);
    //   this.emitFormResponse.emit({success:false, msg:"not-submitted"});
    //   this.addResponseToIndexDB(response);
    //   sub1.unsubscribe();
    // });
  }

  sendSubmitResponseID(response , id) {

    console.log(response);

    this.apiService.SendSubmitResponseID(id, 'Online').subscribe(res=>{
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
