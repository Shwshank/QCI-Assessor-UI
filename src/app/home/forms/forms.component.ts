import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


///////////////////////////////////////////////////////////////////////////////////////d1
//
//    FormsComponent takes form id as input and get the form
//    array by subscribing 'emitFormElement'.
//
//    <app-form-builder> build the form from json array.
//
//
/////////////////////////////////////////////////////////////////////////////////////////

export class FormsComponent implements OnInit {

  fcid : any;
  templateCid: any;
  flaggedResponseid: any;
  draftcid: any;
  sub1 : any;

  constructor(private projectService: ProjectService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.sub1 = this.projectService.emitFormElement.subscribe((res)=>{

    });

  }

  ngOnInit() {
    // console.log("here2");
    let sub = this.activatedRoute.queryParams.subscribe(params=>{
        this.fcid = params.id;
        this.templateCid = params.templateCid;
        this.flaggedResponseid = params.flagResId;
        this.draftcid = params.draftID;

        if(this.fcid != undefined) {
          this.projectService.getFormByCid(this.fcid);
        }
        if(this.templateCid != undefined) {
          this.projectService.getTemplateByCid(this.templateCid);
        }
        if(this.flaggedResponseid != undefined) {
          this.projectService.getFlaggedResponseid(this.flaggedResponseid);
        }
        if(this.draftcid != undefined) {
          this.projectService.getDraftByCid(this.draftcid);
        }
    });
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  canDeactivate() {

    let submitFlag = localStorage.getItem('submitFlag');
    let draftID = localStorage.getItem('draftID');

    if(submitFlag==='false' && draftID === 'false') {
      return window.confirm('Form data will be lost!');
    }

    return true;
  }
}
