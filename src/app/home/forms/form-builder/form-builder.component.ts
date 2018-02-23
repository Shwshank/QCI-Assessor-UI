import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../../service/ProjectService';
import './allscript.js';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  completeArray : any = [];
  jsonArray: any = [];
  formDetails: any = [];
  rules: any = [];
  act_data: any = [];
  flag: any;
  pos: any;
  display = false;
  formError = false;
  rule = false;
  submitButton = 'Submit';
  templateCid: any;
  disableSubmitButton : any = true;
  send : any;
  responseError: any;
  formResponse : any = false;
  displayRequired : any = 0;
  flags : any = 0;
  position: any;

  constructor(private projectService: ProjectService, private router: Router) {

    this.projectService.emitFormResponse.subscribe((res)=>{

      if(res.success) {
        this.send = true;

        this.formResponse = true;
        this.displayRequired = 0;
        this.flags = 0;
        // POP form form flagged form array
        if(this.completeArray.Details.rid) {
          localStorage.removeItem('rules');
          this.projectService.popFromFlaggedArray(this.completeArray.Details.rid);
        }

      } else {
        this.responseError = true;
      }
    });

    this.projectService.emitFormElement.subscribe((res)=>{
      this.formResponse = true;
      this.disableSubmitButton = false;
      this.rule = false;
      console.log(res);
      this.completeArray = res;
      this.jsonArray = res.Elements;

      // SKIP FORM IS FLAGGED
      if(res.Details.rid) {
        localStorage.setItem('rules','true');
        for(let cr of this.jsonArray) {
          this.checkForFlag(cr);
          this.checkForRequired(cr);
        }
      } else {
        localStorage.removeItem('rules');
        for(let cr of this.jsonArray) {
          this.checkForRules(cr);
          this.checkForRequired(cr);
        }
      }

      this.formDetails = res.Details;
      this.rules = res.Rules;
      this.display = true;
    });

    if(!this.rule) {
        this.submitButton = "Submit";
    }

  }

  ngOnInit() {}

  responseData(data: any) {
    console.log(data);
    componentHandler.upgradeDom();

    this.flag = 0;
    this.pos = 0;

    for(let i =0; i <(this.act_data.length); i++) {

      if (this.act_data[i].cid === data.cid) {
        this.flag = 1;
        this.pos = i;
        break;
      }
    }

    if(this.flag == 1) {
        this.act_data[this.pos].value = data.value;
        this.checkError(data);
        if(data.type !="video" || data.type != "camera" || data.type != "file" || data.type != "location") {
          this.checkForRules(data);
        }

    }
    if(this.flag == 0) {
      this.act_data.push(data);
      this.checkError(data);
      if(data.type !="video" || data.type != "camera" || data.type != "file" || data.type != "location") {
        this.checkForRules(data);
      }

    }

  }

  checkForRules(data) {
    let flag  = 0;
    if(this.completeArray.Rules) {
      if(this.completeArray.Rules.length > 0) {
        for(let r = 0; r< this.completeArray.Rules.length; r ++) {

          // this.deleteRuleFromJsonArray(data.cid);
          if(data.cid ==  this.completeArray.Rules[r].elementCid) {
            let tempDataArray = [];
            let tempElementValueArray = [];

            data.value+="";
            if((data.value).includes(",")) {
              tempDataArray = data.value.split(",");
            } else {
              if(data.value.length) {
                let d = (data.value).toString();
                if(d.includes(",")) {
                  tempDataArray = d.split(",");
                }
                else {
                  tempDataArray.push(d);
                }
              } else {
                tempDataArray.push(data.value);
              }
            }

            if((this.completeArray.Rules[r].elementValue).includes(",")) {
              tempElementValueArray = this.completeArray.Rules[r].elementValue.split(",");
            } else {
              // tempElementValueArray.push(temp.elementValue);
              if(this.completeArray.Rules[r].length) {
                let d = (this.completeArray.Rules[r].elementValue).toString();
                if(d.includes(",")) {
                  tempElementValueArray = d.split(",");
                }
                else {
                  tempElementValueArray.push(d);
                }
              } else {
                tempElementValueArray.push(this.completeArray.Rules[r].elementValue);
              }
            }

            if(this.completeArray.Rules[r].satisfyAll) {

              // ----> AND condition starts here <-----
              //
              tempDataArray = tempDataArray.sort();
              tempElementValueArray = tempElementValueArray.sort();
              console.log(tempDataArray);
              console.log(tempElementValueArray);
              if(tempDataArray.length==tempElementValueArray.length && tempDataArray.every((v,i)=> v === tempElementValueArray[i]))
              {
                console.log("match");
                let tempArray  = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
                this.updateJsonArray(data.cid, tempArray);
                break;
              } else {
                this.deleteRuleFromJsonArray2(data);
              }
              //
              // ----> AND condition ends here <-----

            } else {

              // ----> or condition starts here <-----
              //
              for( let m = 0; m< tempDataArray.length; m++) {
                for(let n = 0; n< tempElementValueArray.length; n++) {

                  if(tempDataArray[m] === tempElementValueArray[n]) {
                    flag = 1;
                    let tempArray  = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
                    this.updateJsonArray(data.cid, tempArray);
                  } else {
                    if(flag ==1) {
                      // break;
                    }
                  }
                }
              }
              if(flag == 1) {
                console.log(data.name+' matched!');
                // console.log(data);
              } else {
                console.log(data.name+' not matched!');
                // console.log(data);
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
    // console.log(tempArray);

    let index: any;
    let temp1 : any=[];
    let temp2 : any=[];
    for( let i=0; i<this.jsonArray.length; i++) {
      if(this.jsonArray[i].cid == cid) {
        index = i;
        // console.log(index);
      }
    }
    for(let i=0; i<=index; i++) {
      temp1.push(this.jsonArray[i]);
      // console.log(this.jsonArray[i]);
    }
    for(let i=(index+1); i<this.jsonArray.length; i++) {
      temp2.push(this.jsonArray[i]);
      // console.log(this.jsonArray[i]);
    }
    this.jsonArray = temp1;
    this.jsonArray = this.jsonArray.concat(tempArray);
    this.jsonArray = this.jsonArray.concat(temp2);
    // console.log(this.jsonArray);

    let temp = this.jsonArray;
    this.jsonArray = Array.from(new Set(this.jsonArray));

    if(this.flags>0) {
      localStorage.setItem('rules','false');
    }

    componentHandler.upgradeDom();
  }

  deleteRuleFromJsonArray2(data) {

    let tempArray: any = []
    let tempArray2: any = []

    for(let r = 0; r< this.completeArray.Rules.length; r ++) {

      if(data.cid == this.completeArray.Rules[r].elementCid) {
        tempArray = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
        // console.log(tempArray);

        for(let r1 = 0; r1< this.jsonArray.length; r1 ++) {
          for(let r2 =0; r2< tempArray.length; r2++) {
            if(this.jsonArray[r1].cid == tempArray[r2].cid) {

              // console.log(this.jsonArray[r1].name);
              this.jsonArray.splice(r1,1);
            }
          }
        }
      }
    }
  }

  deleteRuleFromJsonArray(cid) {
    let index : any;
    let temp1 : any=[];
    let temp2 : any=[];
    for( let i=0; i<this.jsonArray.length; i++) {
      if(this.jsonArray[i].cid == cid) {
        index = i;
        // console.log(index);
      }
    }
    for(let i=0; i<=index; i++) {
      temp1.push(this.jsonArray[i]);
      // console.log(this.jsonArray[i]);
    }
    for(let i=(index+1); i<this.completeArray.Elements.length; i++) {
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
    if(data.flagged) {
      this.flags++;
    }
  }

  checkForRequired(data) {
    if(data.required) {
      this.displayRequired++;
    }
  }

  checkError(data) {
    if(data.type == 'break'){
      data.value = "N.A";
    }

    if(data.required && data.value == "") {

      for(let i = 0 ; i<= this.jsonArray.length; i++) {

        if(this.jsonArray[i].cid === data.cid ) {
          this.jsonArray[i].errorMsg = "This feild can't be empty, please provide a valid input!";
          this.formError = true;
          console.log(data.name);

          break;
        }
      }
    } else {

      for(let i = 0; i<= this.jsonArray.length; i++) {
        if(data.required && data.value != "") {

          for(let j= 0; j<= this.jsonArray.length; j++) {

            if(this.jsonArray[j].cid === data.cid) {
              this.jsonArray[j].errorMsg = false;
              if(data.type !="video" || data.type != "camera" || data.type != "file" || data.type != "location") {
                this.formError = false;
                // console.log(data.name);
              }
              // console.log(this.formError);
              break;
            }
          }
        }
      }
    }
  }

  saveFormReaponce() {
    for(let json of this.jsonArray) {
      if(this.flags<=0) {
        this.checkError(json);
      }
    }

    for(let json of this.jsonArray) {
      if(json.errorMsg){
        this.formError = true;
      }
    }

    if(!this.formError){
      componentHandler.upgradeDom();
      this.completeArray.Elements = this.jsonArray;
      this.projectService.submitFormArray(this.completeArray);

      this.formResponse = false;
      this.jsonArray = [];
      this.disableSubmitButton = true;
      this.submitButton = "Just a moment";
      componentHandler.upgradeDom();
    }
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  getCurrentLocation() {

    this.position = {coords : {
          accuracy: 100,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          latitude: 28.620370899999998,
          longitude: 77.2462516,
          speed: null
        },timestamp: 1515754375594};

    // position = navigator.geolocation.getCurrentPosition(showPosition);
    return ("Lat : "+this.position.coords.latitude +", Lng : "+this.position.coords.longitude);
  }

  backToDashboard() {
    setTimeout(()=>{
      this.router.navigate(['/dash']);
    }, 300);
  }

}
