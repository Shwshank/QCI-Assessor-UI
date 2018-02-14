import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class APIService {

  // projectURL: string = 'http://192.168.15.187:8000'
  // projectURL: string = 'http://192.168.15.221:8000';
  projectURL: string = 'https://qcitech.org:8083';

  userID: any;

  constructor( private http: Http, ) {}

  createAuthorizationHeader(headers: Headers) {
    this.userID = localStorage.getItem('token');
    // console.log(this.userID);
    headers.append('Authorization', this.userID);
  }

  Login(data) {
    return this.http.post(this.projectURL+'/assesorLogin', data).map(res=>res.json());
  }

  SyncAll() {
    return this.http.get(this.projectURL+'/gettestforms').map(res=>res.json());
  }

  GetFormArray() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.projectURL+'/getAssesorForms',{headers: headers}).map(res=>res.json());
  }

  GetFlaggedResponses() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.projectURL+'/getFlaggedResponses',{headers: headers}).map(res=>res.json());
  }

  SubmitResponse(formArray: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    formArray = JSON.stringify(formArray);
    formArray = JSON.parse(formArray);
    formArray = JSON.stringify(formArray);
    let formData = new FormData();
    formData.append('resArray',formArray);
    return this.http.post(this.projectURL+'/submitAssesorResponse', formData,{headers: headers}).map(res=>res.json());
  }

  CheckImage(image: any){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(this.projectURL+'/check',image).map(res=>res.json());
  }

}
