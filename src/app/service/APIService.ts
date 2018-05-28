import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class APIService {

  // projectURL: string = 'http://192.168.15.187:8000';
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

  UpdatePassword(oldpwd, newpwd) {
    let formData = new FormData();
    formData.append('oldpwd', oldpwd);
    formData.append('newpwd', newpwd);

    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.projectURL+'/changeAsrPassword', formData,{headers: headers}).map(res=>res.json());
  }

  GetFormArray(form_token) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    let formData = new FormData();
    formData.append('form_token',form_token);

    return this.http.post(this.projectURL+'/getAssesorForms', formData, {headers: headers}).map(res=>res.json());
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

  SyncChunk(data: any, chunk: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    data = JSON.stringify(data);
    data = JSON.parse(data);
    data = JSON.stringify(data);
    let chunkData = new FormData();
    chunkData.append('data',data);

    chunk = JSON.stringify(chunk);
    chunk = JSON.parse(chunk);
    chunk = JSON.stringify(chunk);
    chunkData.append('chunk',chunk);

    return this.http.post(this.projectURL+'/submitChunkResponse', chunkData,{headers: headers}).map(res=>res.json());
    // setTimeout( () => {}, 5000)
  }


  SyncMeta(meta: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    meta = JSON.stringify(meta);
    meta = JSON.parse(meta);
    meta = JSON.stringify(meta);
    let metaData = new FormData();
    metaData.append('meta',meta);

    return this.http.post(this.projectURL+'/startResponse', metaData,{headers: headers}).map(res=>res.json());

  }


  SendSubmitResponseID(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    let responseID = new FormData();
    responseID.append('id',id);
    return this.http.post(this.projectURL+'/submitResponseID', responseID,{headers: headers}).map(res=>res.json());
  }

  CheckImage(image: any){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(this.projectURL+'/check',image).map(res=>res.json());
  }

}
