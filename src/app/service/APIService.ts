import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/timeout';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////d1
//
//
//     Only file in the project that access API URLs.
//
//     All APIs are called by functions in ProjectService.ts file.
//
//    //////////////////////////////////////////////////////////////////////////////////////////////////////////
//    //
//    //      #Functions
//    //
//    //   1. createAuthorizationHeader() : Initialize header
//    //
//    //   2. Login() :
//    //
//    //   3. UpdatePassword() :
//    //
//    //   4. GetFormArray() :
//    //
//    //   5. GetFlaggedResponses() :
//    //
//    //   6. SyncMeta() :                  Sends handshek request
//    //
//    //   7. SyncChunk() :                 Send form responce with handshek ID
//    //
//    //   8. SendSubmitResponseID() :      Response synced msg. Handshek window closed
//    //
//    //
//    //////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.187:8000';
  // Local server

  // projectURL: string = 'https://qcitech.org:8083';
  // Staging server

  // projectURL: string = 'https://api-collect.qcitech.org';
  // Production server

  public appVersion: string = "App Version - 0.7.04 Beta";
  // App Version

  timeout : any = 60000;

  userID: any;

  constructor( private http: Http, ) {}

  createAuthorizationHeader(headers: Headers) {
    let d = new Date();
    this.userID = localStorage.getItem('token');
    headers.append('Authorization', this.userID);
    headers.append('Time',''+d.getTime() );
  }

  Login(data) {
    return this.http.post(this.projectURL+'/assesorLogin', data).map(res=>res.json());
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

  SyncMeta(meta: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    meta = JSON.stringify(meta);
    meta = JSON.parse(meta);
    meta = JSON.stringify(meta);
    let metaData = new FormData();
    metaData.append('meta',meta);

    return this.http.post(this.projectURL+'/startResponse', metaData,{headers: headers}).timeout(this.timeout).map(res=>res.json());
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

    return this.http.post(this.projectURL+'/submitChunkResponse', chunkData,{headers: headers}).timeout(this.timeout).map(res=>res.json());
  }

  SendSubmitResponseID(id, flag) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    let responseID = new FormData();
    responseID.append('id',id);
    responseID.append('flag',flag);
    return this.http.post(this.projectURL+'/submitResponseID', responseID,{headers: headers}).timeout(this.timeout).map(res=>res.json());
  }

}
