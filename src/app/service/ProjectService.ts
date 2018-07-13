import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';
import { AngularIndexedDB } from 'angular2-indexeddb';
import { Ng2ImgMaxService } from 'ng2-img-max';

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

  constructor(private apiService: APIService, private router: Router, private ng2ImgMax: Ng2ImgMaxService) {}

  vibrateDuration0: any = 100;
  vibrateDuration1: any = 200;
  emitFormElement = new EventEmitter<any>();
  emitFormCard = new EventEmitter<any>();
  emitFormArray = new EventEmitter<any>();
  emitFormResponse = new EventEmitter<any>();
  emitSyncResponse = new EventEmitter<any>();
  emitSyncResponseId = new EventEmitter<any>();
  emitUserLogin = new EventEmitter<any>();
  emitOfflineResponse = new EventEmitter<any>();
  emitOfflineResponseArray = new EventEmitter<any>();
  emitDraftCount =  new EventEmitter<any>();
  emitDraftArray =  new EventEmitter<any>();
  emitIndexedDBInitializedRes = new EventEmitter<any>();
  emitFlaggedFormArray = new EventEmitter<any>();
  emitForm_sync = new EventEmitter<any>();
  emitofflineFormIdArrray = new EventEmitter<any>();
  emitChunkSuccess = new EventEmitter<any>();
  emitOfflineChunkSuccess = new EventEmitter<any>();
  emitOnlineFormCount  = new EventEmitter<any>();
  emitImageCompressionStart  = new EventEmitter<any>();
  emitImageCompressionDone  = new EventEmitter<any>();
  emitCompressedImage = new EventEmitter<any>();
  emitChunkError  = new EventEmitter<any>();
  emitOfflineSyncChunkError = new EventEmitter<any>();
  formArray = [];
  offlineFormIdArrray = [];
  flaggedFormArray = [];
  formCard= [];
  templateArray = [];
  storeFormArrayTemp :any = [];
  submittedForm: any = [];
  draftFormIdArrray : any = [];
  draftArray: any = [];
  alldraftArray : any = [];
  offlineResponseArray: any = [];
  chunk:any= {responseTimeStamp:'', formID:'', version:''};
  sub1 : any;

  db = new AngularIndexedDB('responseDB', 1);
  dbDraft = new AngularIndexedDB('draftDB', 1);

  appVersion() {
    return this.apiService.appVersion;
  }

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
        this.getOfflineDataFromServer();
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
    let request1 = indexedDB.deleteDatabase('responseDB');
    let request2 = indexedDB.deleteDatabase('draftDB');
    window.location.reload(true);
    this.router.navigate(['./login']);

  }

  prepareForLogout() {
    let flag = 0;

    if(this.offlineResponseArray.length) {

      alert('Please sync offline forms before logout!');
    } else {
      flag = 1;
      if(this.draftArray.length) {

        this.apiService.PrepareForLogout(this.draftArray).subscribe(res=>{
          console.log(res);
          if(res.success) {
            flag = 1;
          } else {
            flag = 0;
            alert('unable to process');
          }
        }, err=>{
          flag = 0;
          console.log(err);
          alert('unable to process');
        });
      }

      if(flag == 1) {
        this.logout();
      }
    }
  }

  getOfflineDataFromServer() {

    this.apiService.GetOfflineDataFromServer().subscribe(res=>{
      if(res.success) {

        console.log(res);
        for(let i of res.data) {
          console.log(i);
          this.saveDraftDataReceivedFromServer(i);
        }
        this.initializeDraftIndexDB();
      }else {

        console.log(res);
      }
    }, err=>{

      console.log(err);
    });

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

  getDraftByCid(draftID) {

    for(let i of this.draftArray) {
      if(i.Details.draftID == draftID) {
        this.emitFormElement.emit(i);
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

  imageCompressionStarts(length) {
    this.emitImageCompressionStart.emit(
      {overlay:true, dataLength: length}
    )
  }

  imageCompressionDone() {
    this.emitImageCompressionDone.emit(
      {overlay:false}
    )
  }

  syncAll() {
    this.db.getAll('asrResponse').then((response) => {
        // console.log(response);
        if(response.length) {
            for(let i=0; i<response.length; i++) {

              console.log(response[i]);

              // for(let j=0; j<response[i].response.ResElements.length; j++) {
              //   response[i].response.ResElements[j].chunkStatus = false;
              // }
              let syncFlag = false;
              for(let j = 0; j< response[i].response.ResElements.length; j++) {
                if(response[i].response.ResElements[j].synced) {

                  syncFlag = true;
                } else {
                  syncFlag = false;
                  break;
                }
              }

              if(syncFlag) {
                this.sendSubmitOfflineResponseID5(response[i]);
              } else {
                this.syncOffline1(response[i]);
              }

            }
        }
    }, (error) => {
        console.log(error);
    });
  }

  syncThisFirst(data) {

    let syncFlag = false;


    if(data.response.ResElements.length) {

      // If All Elements already synced and no element present in response array

      for(let j = 0; j< data.response.ResElements.length; j++) {
        if(data.response.ResElements[j].synced) {

          syncFlag = true;
        } else {
          syncFlag = false;
          break;
        }
      }

    } else {
      syncFlag = true;
    }

    if(syncFlag) {
      this.sendSubmitOfflineResponseID5(data);
    } else {
      this.syncOffline1(data);
    }

  }

  syncOffline1(res: any) {

    this.sub1 = this.emitOfflineChunkSuccess.subscribe(cid=>{

      for( let i =0; i<res.response.ResElements.length; i++) {
        if(cid==res.response.ResElements[i].cid) {

          console.log(res.response.ResCid+' <--> '+cid);
          this.updateOfflineResponseSyncStatus(res, cid, i);

          res.response.ResElements[i].synced = true;
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
          console.log(res.response.ResElements[i].synced);

          if(!res.response.ResElements[i].synced) {
            // setTimeout( () => this.syncChunkOffline(res.response.ResElements[i], this.chunk), 5000);
            this.syncChunkOffline3(res, res.response.ResElements[i]);
          }
        }
      } else {
        console.log(res);
        alert('Some Error occurs');
        window.location.reload();
      }
    }, err=>{
      console.log(err);
      alert('Some Error occurs');
      window.location.reload();
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
      console.log(res);
      if(res.success) {
        this.emitOfflineChunkSuccess.emit(data.cid);
      } else {
        console.log(res);
        this.emitOfflineSyncChunkError.emit(res);
      }
      sub1.unsubscribe();
    } , err=>{
      sub1.unsubscribe();
      console.log(err);
      this.emitOfflineSyncChunkError.emit(res);
      // window.location.reload();
      // alert(err);
    });
  }

  checkAllOfflineChunk4(res) {
    console.log(res);
    let syncFlag = false;
    for(let i = 0; i< res.response.ResElements.length; i++) {
      if(res.response.ResElements[i].synced) {

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
        // this.emitSyncResponse.emit({success:true, msg:"synced!"});

          this.emitSyncResponseId.emit({success:true, id:res.response.ResCid})
          this.db.delete('asrResponse', res.id).then(() => {
            // navigator.vibrate(this.vibrateDuration0);

          }, (error) => {
              console.log(error);
              alert("Some error detected! Please try again");
              window.location.reload();

          });
      } else {
        console.log(res2);
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

    if(navigator.onLine) {
      let flagged_form_token = localStorage.getItem('flagged_form_token');

      this.apiService.GetFlaggedResponses().subscribe((res)=>{
        console.log(res);
        if(res){

          if(res.formArray.length) {
            for(let i = 0; i< res.formArray.length; i++) {
              this.flaggedFormArray.push(res.formArray[i].form_json);
            }
          }
          console.log(this.flaggedFormArray);
          // save data in offline storage
          localStorage.setItem('flaggedForms', JSON.stringify(this.flaggedFormArray));
          // this.emitFlaggedFormArray.emit(this.flaggedFormArray);
          this.emitFlaggedForms(this.flaggedFormArray);
        } else {
          let temp;
          temp = localStorage.getItem('flaggedForms');
          this.flaggedFormArray = JSON.parse(temp);
          // this.emitFlaggedFormArray.emit(this.flaggedFormArray);
          this.emitFlaggedForms(this.flaggedFormArray);
        }
      },err=> {
        console.log(err);
      });
    } else {

      let temp;
      temp = localStorage.getItem('flaggedForms');
      this.flaggedFormArray = JSON.parse(temp);
      // this.emitFlaggedFormArray.emit(this.flaggedFormArray);
      this.emitFlaggedForms(this.flaggedFormArray);
    }
  }

  emitFlaggedForms(flaggedFormArray) {
    // console.log(this.flaggedFormArray);
    // console.log(this.offlineResponseArray);
    // console.log(this.draftArray);

    let temp1 = [];
    let temp2 = [];

    for(let i=0; i< this.flaggedFormArray.length; i++) {

      for(let j=0; j< this.offlineResponseArray.length; j++) {

        if(this.offlineResponseArray[j].ResDetails.flagged_on) {

          if(this.flaggedFormArray[i].Details.flagged_on == this.offlineResponseArray[j].ResDetails.flagged_on
            && this.flaggedFormArray[i].Details.cid == this.offlineResponseArray[j].ResDetails.cid) {

              temp1.push(i);
          }
        }
      }
    }

    if(temp1.length) {
      for(let i=0; i<temp1.length; i++) {
        this.flaggedFormArray.splice(temp1[i],1);
      }
    }

    for(let i=0; i< this.flaggedFormArray.length; i++) {

      for(let j=0; j< this.draftArray.length; j++) {

        if(this.draftArray[j].Details.flagged_on) {

          if(this.flaggedFormArray[i].Details.flagged_on == this.draftArray[j].Details.flagged_on
            && this.flaggedFormArray[i].Details.cid == this.draftArray[j].Details.cid) {

              temp2.push(i);
          }
        }
      }
    }

    if(temp2.length) {
      for(let i=0; i<temp2.length; i++) {
        this.flaggedFormArray.splice(temp2[i],1);
      }
    }

    this.emitFlaggedFormArray.emit(flaggedFormArray);
  }

  submitFormArray(tempArray: any, id) {
    if(this.storeFormArrayTemp.Elements) {

      for(let temp of this.storeFormArrayTemp.Rules) {

        if(temp.tempCid == tempArray.Details.cid) {

          this.storeFormArrayTemp.Elements = this.storeFormArrayTemp.Elements.concat(tempArray.Elements);
          this.submittedForm = this.storeFormArrayTemp;
          console.log(this.submittedForm);
          this.saveResponseOffline(this.submittedForm, id);
          this.storeFormArrayTemp = [];
        }
      }
    } else {
      this.submittedForm = tempArray;
      this.saveResponseOffline(this.submittedForm, id);
      console.log(this.submittedForm)
    }

  }

  saveResponseOffline(formArray: any, id) {
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

    let asrPhone: any;

    asrPhone = localStorage.getItem('phone');

    let response : any = {};

    if(formArray.Details.rid) {
      response.ResCid = formArray.Details.rid // flagged response
    } else {
      response.ResCid = id; // new response
    }

    response.ResDetails = formArray.Details;
    response.ResElements = formArray.Elements;
    response.ResExtra = {asrPhone: asrPhone, resDate: this.cdate()};

    // console.log(response);
    // Don't know what this block is doing
    for(let i = 0; i< response.ResElements.length; i++) {
      if(response.ResElements[i].chunkStatus) {
        delete response.ResElements[i].chunkStatus;
      }
    }

    // Remove synced Elements from response
    // store Elements pos in a temp array
    let elementsToBeDeletedArray = [];

    for(let i = 0; i< response.ResElements.length; i++) {
      if(response.ResElements[i].synced) {
        elementsToBeDeletedArray.push(i);
      }
    }

    // Delete Elements of temp array
    if(elementsToBeDeletedArray.length) {
      for(let i=0; i<elementsToBeDeletedArray.length;i++) {
        response.ResElements.splice(i,1);
      }
    }
    // Remove synced Elements from response  * * * * * ends here

    // Remove Elements if value = "" and element not required  and type != location
    let elementsToBeDeletedArray2 = [];

    for(let i = 0; i< response.ResElements.length; i++) {
      if(response.ResElements[i].type!="location" && (response.ResElements[i].value=="" && !response.ResElements[i].required)) {
        elementsToBeDeletedArray2.push(response.ResElements[i].cid);
      }
    }

    // console.log(elementsToBeDeletedArray2);

    if(elementsToBeDeletedArray2.length) {
      for(let i=0; i<elementsToBeDeletedArray2.length;i++) {
        for(let j = 0; j< response.ResElements.length; j++) {
          if(elementsToBeDeletedArray2[i] == response.ResElements[j].cid) {
            response.ResElements.splice(j,1);
            break;
          }
        }
      }
    }
    // Remove Elements if value = "" and element not required  and type != location * * * * *  ends here

    // console.log(' --> '+response);
    // console.log(' --> '+response.ResElements);

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
      } else {
        console.log(res);
      }
    }, err=>{
      console.log(err);
      this.emitChunkError.emit(data.cid);
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

    // this.saveResponseOffline(response, id);


    this.apiService.SendSubmitResponseID(id, 'Online').subscribe(res=>{
      // console.log(res);
      if(res.success) {
        this.emitFormResponse.emit({success: true}); // Submit form final form
        // this.saveResponseOffline(response);
      } else {
        this.saveResponseOffline(response, id);
        this.emitFormResponse.emit({success:false, msg:"not-submitted"});
      }
    }, err=>{
      console.log(err);
      this.saveResponseOffline(response, id);
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
          this.offlineResponseArray = [];
          if(response.length) {

            for(let  i=0; i<response.length; i++ ) {
              this.offlineFormIdArrray.push(response[i].response.ResDetails.cid);
              this.offlineResponseArray.push(response[i].response);
            }

          }
          this.emitOfflineResponseArray.emit(response);
          this.emitOfflineResponse.emit(temp);
          this.emitofflineFormIdArrray.emit(this.offlineFormIdArrray);
          // console.log(this.offlineFormIdArrray);
      }, (error) => {
          console.log(error);
      });
    });
  }

  initializeDraftIndexDB() {
    this.draftFormIdArrray = [];
    this.dbDraft.openDatabase(1, (evt) => {
        let objectStore = evt.currentTarget.result.createObjectStore(
            'asrDraft', { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("draft", "draft", { unique: false });
    });

    let temp = 0;
    // initialize IndexDB
    let db = new AngularIndexedDB('draftDB', 1);
    // open IndexDB
    db.openDatabase(1, (evt) => {
        let objectStore = evt.currentTarget.result.createObjectStore(
            'asrDraft', { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("draft", "draft", { unique: false });
    }).then(()=>{

      db.getAll('asrDraft').then((response) => {
          temp = response.length;

          // offline responses corresponding to formID

          this.draftArray = [];
          if(response.length) {
            // console.log(response.length);
            for(let i = 0; i<response.length; i++) {
              this.draftArray.push(response[i].draft);
            }
          }
          console.log(response.length);
          this.alldraftArray = response;
          this.emitDraftCount.emit(response.length);
          this.emitDraftArray.emit(this.draftArray);

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

  saveDraft(response) {

    // console.log(response);

    // get size of response
    let tempStorage = JSON.stringify(response).length;
    tempStorage += (1024 * 1024 * 200);
    console.log(tempStorage);

    if(response.Details.rid) {
      console.log('yer')
      let temp1;
      let temp2;
      let temp3;
      temp1 = localStorage.getItem('flaggedForms');
      temp2 = JSON.parse(temp1);

      for(let i = 0; i<temp2.length; i++) {
        if(response.Details.rid == temp2[i].Details.rid) {
          temp3  = i;
          break;
        }
      }

      temp2.splice(temp3,1);
      this.flaggedFormArray = temp2;
      localStorage.setItem('flaggedForms', JSON.stringify(this.flaggedFormArray));
      this.emitFlaggedFormArray.emit(this.flaggedFormArray);

    }

    console.log(response);
    // request for space as per size of response
    (<any>navigator).webkitPersistentStorage.requestQuota (
        tempStorage, function(grantedBytes) {
          console.log(response);
          console.log(grantedBytes);
          (<any>window).webkitRequestFileSystem((<any>window).PERSISTENT, grantedBytes, res=>{

            // initialize IndexDB
            let db = new AngularIndexedDB('draftDB', 1);

            // open IndexDB
            db.openDatabase(1, (evt) => {
                let objectStore = evt.currentTarget.result.createObjectStore(
                    'asrDraft', { keyPath: "id", autoIncrement: true });
                objectStore.createIndex("draft", "draft", { unique: false });

            }).then(()=>{

              // add response in Indexed
              db.add('asrDraft', { draft: response }).then(() => {
                alert('Draft saved in offline storage');
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

  saveDraftDataReceivedFromServer(response) {

    // console.log(response);

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
            let db = new AngularIndexedDB('draftDB', 1);

            // open IndexDB
            db.openDatabase(1, (evt) => {
                let objectStore = evt.currentTarget.result.createObjectStore(
                    'asrDraft', { keyPath: "id", autoIncrement: true });
                objectStore.createIndex("draft", "draft", { unique: false });

            }).then(()=>{

              // add response in Indexed
              db.add('asrDraft', { draft: response }).then(() => {
                console.log('draft added');
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

  deleteDraft(draftID) {
    console.log(draftID);

    for(let i=0; i<this.alldraftArray.length; i++) {

      if(this.alldraftArray[i].draft.Details.draftID === draftID ) {

          this.dbDraft.delete('asrDraft', this.alldraftArray[i].id).then(() => {

            console.log('deleted');
            this.initializeDraftIndexDB();
            // window.location.reload();
          }, (error) => {
              console.log(error);
              alert("Some error detected! Please try again");
              window.location.reload();
          });

        break;
      }
    }
  }

  deleteDraftFormSubmit(draftID) {
    console.log(draftID);

    for(let i=0; i<this.alldraftArray.length; i++) {

      if(this.alldraftArray[i].draft.Details.draftID === draftID ) {

          this.dbDraft.delete('asrDraft', this.alldraftArray[i].id).then(() => {

            console.log('deleted');
            this.initializeDraftIndexDB();
          }, (error) => {
              console.log(error);
              alert("Some error detected! Please try again");
              window.location.reload();
          });

        break;
      }
    }
  }

  updateDraft(draftID, responseArray) {

    console.log(draftID);
    console.log(responseArray);
    console.log(this.draftArray);
    let temp;
    for(let i=0; i<this.alldraftArray.length; i++) {

      if(this.alldraftArray[i].draft.Details.draftID === draftID ) {
        this.alldraftArray[i].draft.Elements = responseArray.Elements

          this.dbDraft.delete('asrDraft', this.alldraftArray[i].id).then(() => {
            // this.saveDraft(this.draftArray[i]);
            this.dbDraft.add('asrDraft', { draft : this.draftArray[i] } ).then(()=>{
                console.log('draft Updated!');

            }, (error) =>{
              console.log(error);
            });
          }, (error) => {
              console.log(error);
              alert("Some error detected! Please try again");
              window.location.reload();
          });

        break;

      }

    }

  }

  updateOfflineResponseSyncStatus(res, cid, i) {

    console.log(res);
    console.log(cid);

    res.response.ResElements[i].synced = true;

    this.db.update('asrResponse', {id: res.id, response: res.response}).then(()=>{
      console.log('Offline response updated');
    }, (error)=>{
      console.log(error);
    });
  }

}
