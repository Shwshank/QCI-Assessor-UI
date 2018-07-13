import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../service/ProjectService';
import { NGXLogger } from 'ngx-logger';
import './allscript.js';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  completeArray: any = [];
  jsonArray: any = [];
  formDetails: any = [];
  rules: any = [];
  act_data: any = [];
  flag: any;
  pos: any;
  display = false;
  formError = false;
  rule = false;
  submitButton = '...';
  submitButton2 = 'Are you sure to Submit';
  templateCid: any;
  disableSubmitButton: any = true;
  send: any;
  responseError: any;
  formResponse: any = false;
  displayRequired: any = 0;
  flags: any = 0;
  position: any;
  showErrorMsgOnSubmit = [];
  chunk: any = { responseTimeStamp: '', formID: '', version: '' };
  submitFlag = false;
  button1: any = true;
  button2: any = true;
  controller: any = false;
  deleteDraftFlag : any = false;
  s1: any;
  s2: any;
  s3: any;
  s4: any;
  s5: any;
  unSyncCount = 0;
  syncCount = 0;
  syncedArray = [];

  constructor(private projectService: ProjectService, private router: Router, private logger: NGXLogger) {

    this.createResponseTimeStamp();

    this.s1 = this.projectService.emitFormResponse.subscribe((res) => {

      if (res.success) {
        this.send = true;

        this.formResponse = true;
        this.displayRequired = 0;
        this.flags = 0;
        // POP form form flagged form array
        if (this.completeArray.Details.rid) {
          localStorage.removeItem('rules');
          this.projectService.popFromFlaggedArray(this.completeArray.Details.rid);
        }

      } else {
        this.responseError = true;
      }
    });

    this.s2 = this.projectService.emitFormElement.subscribe((res) => {
      let d = new Date();

      // this.logger.debug("Form name : " +res.Details.name + ",  Time :"+d.getTime());
      //
      // this.logger.info("Form name : " +res.Details.name + ",  Time :"+d.getTime());
      //
      // this.logger.error("Form name : " +res.Details.name + ",  Time :"+d.getTime());
      //
      // this.logger.log("Form name : " +res.Details.name + ",  Time :"+d.getTime());

      if(res.Details.draftID) {
        localStorage.setItem('draftID','true');
      } else {
        localStorage.setItem('draftID','false');
      }

      console.log("Form name : " + res.Details.name + ",  Time :" + d.getTime());
      this.formResponse = true;
      this.disableSubmitButton = false;
      this.rule = false;
      console.log(res);

      // Mark elemts synced if form is flagged
      if(res.Details.no_flagged > 0) {
        for(let i=0; i<res.Elements.length; i++) {

          // remove synced cloud if element is flagged
          if(res.Elements[i].flagged) {
            res.Elements[i].synced = false;
            res.Elements[i].notSynced = false;
            res.Elements[i].syncWaiting = false;
          } else {

            // Sync is true id not flagged
            res.Elements[i].chunkStatus = true;
            res.Elements[i].synced = true;
            res.Elements[i].notSynced = false;
            res.Elements[i].syncWaiting = false;
          }
        }
      }

      this.completeArray = res;
      this.jsonArray = res.Elements;

      this.unSyncCount = this.jsonArray.length;
      // update sysnced count if type = break

      for(let i=0; i<this.jsonArray.length; i++) {
        if(this.jsonArray[i].type==="break") {
          this.syncCount++;
        }
      }


      // SKIP FORM IS FLAGGED
      if (res.Details.rid && !res.Details.draftID) {
        localStorage.setItem('rules', 'true');
        for (let cr of this.jsonArray) {
          this.checkForFlag(cr);
          this.checkForRequired(cr);
        }
      } else {
        localStorage.removeItem('rules');
        for (let cr of this.jsonArray) {
          this.checkForRules(cr);
          this.checkForRequired(cr);
        }
      }

      this.formDetails = res.Details;
      this.rules = res.Rules;
      this.display = true;
    });

    if (!this.rule) {
      this.submitButton = "Proceed";
    }

    this.s3 = this.projectService.emitChunkSuccess.subscribe(res => {

      this.disableSubmitButton = false;
      componentHandler.upgradeDom();
      console.log(res);
      this.updateJsonArrayAfterSync(res);
      // Update chunk status
      for (let i = 0; i < this.completeArray.Elements.length; i++) {
        if (res == this.completeArray.Elements[i].cid) {
          this.completeArray.Elements[i].chunkStatus = true;
          break;
        }
      }
      // Check if user has submit all elements
      this.checkForSubmit();
    });

    this.s4 = this.projectService.emitChunkError.subscribe(res => {
      this.updateJsonArrayAfterNotSync(res);
    })
  }

  ngOnInit() {
    localStorage.setItem('submitFlag', 'false');
    this.button2 = false;
  }

  updateJsonArrayAfterSync(id) {
    let temp = 0;
    for (let i = 0; i < this.jsonArray.length; i++) {
      if (id == this.jsonArray[i].cid) {
        this.jsonArray[i].synced = true;
        this.jsonArray[i].notSynced = false;
        this.jsonArray[i].syncWaiting = false;
        for(let j=0; j<this.syncedArray.length; j++) {
          if(this.syncedArray[j]==id) {
            temp = 1;
            break;
          }
        }
        if(temp != 1) {
          this.syncedArray.push(id);
        }

        // for removing the cloud in case no value is in the field
        if (this.jsonArray[i].type != "location") {
          if (this.jsonArray[i].value == "") {
            this.jsonArray[i].synced = false;
          }
        }

        break;
      } else { }
    }
  }

  updateJsonArrayAfterNotSync(id) {

    let temp;
    for (let i = 0; i < this.jsonArray.length; i++) {
      if (id == this.jsonArray[i].cid) {
        this.jsonArray[i].synced = false;
        this.jsonArray[i].notSynced = true;
        this.jsonArray[i].syncWaiting = false;
        for(let j=0; j<this.syncedArray.length; j++) {
          if(this.syncedArray[j]==id) {
            temp = j;
            break;
          }
        }
        if(temp) {
          this.syncedArray.splice(temp,1);
        }


        // for removing the cloud in case no value is in the field
        if (this.jsonArray[i].type != "location") {
          if (this.jsonArray[i].value == "") {
            this.jsonArray[i].notSynced = false;
          }
        }

        break;
      } else { }
    }
  }

  updateJsonArrayWaitingMsg(id) {
    let temp;
    for (let i = 0; i < this.jsonArray.length; i++) {
      if (id == this.jsonArray[i].cid) {
        this.jsonArray[i].syncWaiting = true;
        this.jsonArray[i].synced = false;
        this.jsonArray[i].notSynced = false;
        for(let j=0; j<this.syncedArray.length; j++) {
          if(this.syncedArray[j]==id) {
            temp = j;
            break;
          }
        }
        if(temp) {
          this.syncedArray.splice(temp,1);
        }


        // for removing the cloud in case no value is in the field
        if (this.jsonArray[i].type != "location") {
          if (this.jsonArray[i].value == "") {
            this.jsonArray[i].syncWaiting = false;
          }
        }

        break;
      } else { }
    }
  }

  createResponseTimeStamp() {
    let d = new Date();
    let cid = d.getTime() + "" + Math.floor(1000 + Math.random() * 8999);
    localStorage.setItem('responseTimeStamp', cid);
  }

  responseData(data: any) {

    this.button1 = true;
    this.button2 = false;

    componentHandler.upgradeDom();
    console.log(data);

    this.sendChunk(data);

    this.flag = 0;
    this.pos = 0;

    for (let i = 0; i < (this.act_data.length); i++) {

      if (this.act_data[i].cid === data.cid) {
        this.flag = 1;
        this.pos = i;
        break;
      }
    }

    if (this.flag == 1) {
      this.act_data[this.pos].value = data.value;
      this.checkError(data);
      if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
        this.checkForRules(data);
      }

    }
    if (this.flag == 0) {
      this.act_data.push(data);
      this.checkError(data);
      if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
        this.checkForRules(data);
      }

    }

  }

  checkForRules(data) {
    let flag = 0;
    if (this.completeArray.Rules) {
      if (this.completeArray.Rules.length > 0) {
        for (let r = 0; r < this.completeArray.Rules.length; r++) {

          // this.deleteRuleFromJsonArray(data.cid);
          if (data.cid == this.completeArray.Rules[r].elementCid) {
            let tempDataArray = [];
            let tempElementValueArray = [];

            data.value += "";
            if ((data.value).includes(",")) {
              tempDataArray = data.value.split(",");
            } else {
              if (data.value.length) {
                let d = (data.value).toString();
                if (d.includes(",")) {
                  tempDataArray = d.split(",");
                }
                else {
                  tempDataArray.push(d);
                }
              } else {
                tempDataArray.push(data.value);
              }
            }

            if ((this.completeArray.Rules[r].elementValue).includes(",")) {
              tempElementValueArray = this.completeArray.Rules[r].elementValue.split(",");
            } else {
              // tempElementValueArray.push(temp.elementValue);
              if (this.completeArray.Rules[r].length) {
                let d = (this.completeArray.Rules[r].elementValue).toString();
                if (d.includes(",")) {
                  tempElementValueArray = d.split(",");
                }
                else {
                  tempElementValueArray.push(d);
                }
              } else {
                tempElementValueArray.push(this.completeArray.Rules[r].elementValue);
              }
            }

            if (this.completeArray.Rules[r].satisfyAll) {

              // ----> AND condition starts here <-----
              //
              tempDataArray = tempDataArray.sort();
              tempElementValueArray = tempElementValueArray.sort();
              console.log(tempDataArray);
              console.log(tempElementValueArray);
              if (tempDataArray.length == tempElementValueArray.length && tempDataArray.every((v, i) => v === tempElementValueArray[i])) {
                console.log("match");
                let tempArray = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
                this.updateJsonArray(data.cid, tempArray);
                break;
              } else {
                console.log(data);
                this.deleteRuleFromJsonArray2(data);
              }
              //
              // ----> AND condition ends here <-----

            } else {

              // ----> or condition starts here <-----
              //
              for (let m = 0; m < tempDataArray.length; m++) {
                for (let n = 0; n < tempElementValueArray.length; n++) {

                  if (tempDataArray[m] === tempElementValueArray[n]) {
                    flag = 1;
                    let tempArray = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
                    this.updateJsonArray(data.cid, tempArray);
                  } else {
                    if (flag == 1) {
                      // break;
                    }
                  }
                }
              }
              if (flag == 1) {
                console.log(data.name + ' matched!');
                // console.log(data);
              } else {
                console.log(data.name + ' not matched!');
                console.log(data);
                this.deleteRuleFromJsonArray2(data);
              }
              //
              // ----> or condition ends here <-----

            }
          }
        }
      }
    }
  }

  updateJsonArray(cid, tempArray) {
    console.log(tempArray);

    let index: any;
    let temp1: any = [];
    let temp2: any = [];
    for (let i = 0; i < this.jsonArray.length; i++) {
      if (this.jsonArray[i].cid == cid) {
        index = i;
        // console.log(index);
      }
    }
    for (let i = 0; i <= index; i++) {
      temp1.push(this.jsonArray[i]);
      // console.log(this.jsonArray[i]);
    }
    for (let i = (index + 1); i < this.jsonArray.length; i++) {
      temp2.push(this.jsonArray[i]);
      // console.log(this.jsonArray[i]);
    }
    this.jsonArray = temp1;
    this.jsonArray = this.jsonArray.concat(tempArray);
    this.jsonArray = this.jsonArray.concat(temp2);
    // console.log(this.jsonArray);

    let temp = this.jsonArray;
    this.jsonArray = Array.from(new Set(this.jsonArray));

    this.unSyncCount = this.jsonArray.length;

    if (this.flags > 0) {
      localStorage.setItem('rules', 'false');
    }

    componentHandler.upgradeDom();
  }

  deleteRuleFromJsonArray2(data) {

    let tempArray: any = []
    let tempArray2: any = []

    for (let r = 0; r < this.completeArray.Rules.length; r++) {

      if (data.cid == this.completeArray.Rules[r].elementCid) {
        tempArray = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);

        console.log(tempArray);
        console.log(this.jsonArray);

        this.unSyncCount = this.jsonArray.length;

        for (let r1 = 0; r1 < this.jsonArray.length; r1++) {
          for (let r2 = 0; r2 < tempArray.length; r2++) {
            if (this.jsonArray[r1].cid == tempArray[r2].cid) {

              // console.log(this.jsonArray[r1].name);
              this.jsonArray.splice(r1, 1);
            }
          }
        }
      }
    }
  }

  deleteRuleFromJsonArray(cid) {
    let index: any;
    let temp1: any = [];
    let temp2: any = [];
    for (let i = 0; i < this.jsonArray.length; i++) {
      if (this.jsonArray[i].cid == cid) {
        index = i;
        // console.log(index);
      }
    }
    for (let i = 0; i <= index; i++) {
      temp1.push(this.jsonArray[i]);
      // console.log(this.jsonArray[i]);
    }
    for (let i = (index + 1); i < this.completeArray.Elements.length; i++) {
      temp2.push(this.completeArray.Elements[i]);
      // console.log(this.completeArray.Elements[i]);
      componentHandler.upgradeDom();
    }
    this.jsonArray = temp1;
    this.jsonArray = this.jsonArray.concat(temp2);
    // console.log(this.jsonArray);
    componentHandler.upgradeDom();
  }

  checkForFlag(data) {
    if (data.flagged) {
      this.flags++;
    }
  }

  checkForRequired(data) {
    if (data.required) {
      this.displayRequired++;
    }
  }

  checkError(data) {

    if (data.type == 'break') {
      data.value = "N.A";
    }

    if (data.required && data.value == "") {

      for (let i = 0; i <= this.jsonArray.length; i++) {

        if (this.jsonArray[i].cid === data.cid) {
          this.formError = true;
          this.jsonArray[i].errorMsg = "This feild can't be empty, please provide a valid input!";
          this.showErrorOnSubmit(i, " Please provide a valid input!")
          console.log(data.name);

          break;
        }
      }
    } else {

      for (let i = 0; i <= this.jsonArray.length; i++) {
        if (data.required && data.value != "") {

          for (let j = 0; j <= this.jsonArray.length; j++) {

            if (this.jsonArray[j].cid === data.cid) {
              this.jsonArray[j].errorMsg = false;
              this.removeErrorOnSubmit(j);
              if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
                this.formError = false;
                // console.log(data.name);
              }
              // console.log(this.formError);
              break;
            }
          }
        }
      }

      if (data.type != "video" && data.type != "camera" && data.type != "file" && data.type != "location" && data.value.length > 1024) {

        for (let i = 0; i <= this.jsonArray.length; i++) {

          if (this.jsonArray[i].cid === data.cid) {
            this.formError = true;
            this.jsonArray[i].errorMsg = "Input size should be less than 1024 characters!";
            this.showErrorOnSubmit(i, " Input size should be less than 1024 characters!");
            console.log(data.name);
            break;
          }
        }

      } else {
        for (let i = 0; i <= this.jsonArray.length; i++) {

          if (this.jsonArray[i].cid === data.cid) {
            this.formError = false;
            this.removeErrorOnSubmit(i);
            this.jsonArray[i].errorMsg = false;
            break;
          }
        }
      }

      if ((data.type == "video" || data.type == "camera" || data.type == "file") && data.value.length > 58208800) {
        console.log(data.value.length);
        for (let i = 0; i <= this.jsonArray.length; i++) {

          if (this.jsonArray[i].cid === data.cid) {
            this.formError = true;
            this.jsonArray[i].errorMsg = "File size should be less than 50 MB!";
            this.showErrorOnSubmit(i, " File size should be less than 50 MB!");
            console.log(data.name);

            break;
          }
        }

      } else {
        for (let i = 0; i <= this.jsonArray.length; i++) {

          if (this.jsonArray[i].cid === data.cid) {
            this.formError = false;
            this.removeErrorOnSubmit(i);
            this.jsonArray[i].errorMsg = false;
            break;
          }
        }
      }
    }
  }

  showErrorOnSubmit(pos, msg) {
    this.showErrorMsgOnSubmit.push({ ques: (pos + 1), msg: msg });
  }

  removeErrorOnSubmit(pos) {
    for (let i = 0; i < this.showErrorMsgOnSubmit.length; i++) {
      if (this.showErrorMsgOnSubmit[i].ques == (pos + 1)) {
        this.showErrorMsgOnSubmit.splice(i, 1);
        break;
      } else { }
    }
  }

  setMetaChunk() {

    if (this.completeArray.Details.rid) {
      this.chunk.responseTimeStamp = this.completeArray.Details.rid  // flagged response
    } else {
      this.chunk.responseTimeStamp = localStorage.getItem('responseTimeStamp'); // new response
    }

    this.chunk.formID = this.completeArray.Details.cid;
    this.chunk.version = this.completeArray.Details.version;
    console.log(this.chunk.version);
  }

  proceedForSumbit() {

    this.completeArray.Elements = this.jsonArray;

    // check error start here
    for (let json of this.jsonArray) {
      if (this.flags <= 0) {
        this.checkError(json);
      }
    }

    for (let json of this.jsonArray) {
      if (json.errorMsg) {
        this.formError = true;
      }
    }

    if (!this.formError) {
      this.button1 = false;
      this.button2 = true;

      // check error start here
      for (let json of this.jsonArray) {
        if (this.flags <= 0) {
          this.checkError(json);
        }
      }

      for (let json of this.jsonArray) {
        if (json.errorMsg) {
          this.formError = true;
        }
      }

      this.submitFlag = true;
      localStorage.setItem('submitFlag', this.submitFlag+"");
      this.checkAllChunks();
    } else {
      this.button1 = true;
      this.button2 = false;
    }
  }

  sendChunk(data) {
    this.setMetaChunk();
    this.updateJsonArrayWaitingMsg(data.cid);
    this.projectService.syncChunk(data, this.chunk);
    this.disableSubmitButton = true;
    componentHandler.upgradeDom();
  }

  checkAllChunks() {
    this.button2 = false;

    for (let i = 0; i < this.completeArray.Elements.length; i++) {
      if (!this.completeArray.Elements[i].chunkStatus && this.completeArray.Elements[i].required) {
        this.sendChunk(this.completeArray.Elements[i]);
      } else {
        this.checkForSubmit();
      }
    }
    this.button2 = true;
  }

  checkForSubmit() {

    console.log(this.completeArray);

    this.controller = true;

    // Check if user has click submit button
    if (this.submitFlag) {
      for (let i = 0; i < this.completeArray.Elements.length; i++) {
        if (this.completeArray.Elements[i].chunkStatus || (!this.completeArray.Elements[i].required && this.completeArray.Elements[i].value == "")) {
          this.controller = true;
          console.log(i + " Passed ");
        } else {
          this.controller = false;
          console.log(i + " failed ");
          break;
        }

      }
    }
  }

  saveFormReaponce() {

    if(this.completeArray.Details.draftID) {
      this.projectService.deleteDraftFormSubmit(this.completeArray.Details.draftID);
    }

    let id;
    if (this.controller) {

      // emit success
      console.log('data send');
      // Send final submit Response ID

      if (this.completeArray.Details.rid) {
        id = this.completeArray.Details.rid // flagged response
      } else {
        id = localStorage.getItem('responseTimeStamp'); // new response
      }

      this.projectService.sendSubmitResponseID(this.completeArray, id);
      //  this.projectService.emitFormResponse.emit({success: true});
    } else {

      // this.responseError = true;
      // data not sync
      // save data offline
      console.log('data not send');
      id = localStorage.getItem('responseTimeStamp'); // new response
      this.projectService.submitFormArray(this.completeArray, id);
    }

    this.formResponse = false;
    this.jsonArray = [];
    this.submitButton = "Just a moment";
    componentHandler.upgradeDom();

  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  getCurrentLocation() {

    this.position = {
      coords: {
        accuracy: 100,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 28.620370899999998,
        longitude: 77.2462516,
        speed: null
      }, timestamp: 1515754375594
    };

    // position = navigator.geolocation.getCurrentPosition(showPosition);
    return ("Lat : " + this.position.coords.latitude + ", Lng : " + this.position.coords.longitude);
  }

  backToDashboard() {
    setTimeout(() => {
      this.router.navigate(['/dash']);
    }, 300);
  }

  totalSynced(array, count) {
    if(array.length) {
      return array.length+count;
    } else {
      return count;
    }
  }

  saveDraft() {
    this.completeArray.Details.rid = this.chunk.responseTimeStamp;
    this.completeArray.Details.draftID = new Date().toLocaleString('en-GB');
    this.projectService.saveDraft(this.completeArray);

  }

  deleteDraft() {

    if(window.confirm('Are you sure to delete this draft?')) {
        this.deleteDraftFlag = true;
        this.projectService.deleteDraft(this.completeArray.Details.draftID);
    }
  }

  canDeactivate() {}

  ngOnDestroy() {

    if(this.completeArray.Details.draftID && !this.submitFlag  ) {
      this.projectService.updateDraft(this.completeArray.Details.draftID, this.completeArray);
    }

    this.s1.unsubscribe();
    this.s2.unsubscribe();
    this.s3.unsubscribe();
    this.s4.unsubscribe();
  }

}
