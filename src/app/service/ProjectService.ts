import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';

@Injectable()
export class ProjectService {

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
  emitUserLogin = new EventEmitter<any>();

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

  syncAll() {}

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
    // {
    //   ResCid:'1',
    //   ResDetails:{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },
    //   ResElements:[
    //     {type: "text", required: false, name: "Name", value:"sammy", cid:"a1", hepltext: "", alias:" Username "},
    //     {type: "password", required: false, name: "SecretKey", value:"sammy_password", cid:"a2", hepltext: "", alias:" Password "}
    //   ],
    //   ResExtra:{}
    // }

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

}
