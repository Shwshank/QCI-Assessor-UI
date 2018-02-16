import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  fcid : any;
  templateCid: any;
  flaggedResponseid: any;

  constructor(private projectService: ProjectService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.projectService.emitFormElement.subscribe((res)=>{
      // console.log(res);
    });

  }

  ngOnInit() {
    console.log("here2");
    let sub = this.activatedRoute.queryParams.subscribe(params=>{
        this.fcid = params.id;
        this.templateCid = params.templateCid;
        this.flaggedResponseid = params.flagResId;

        if(this.fcid != undefined) {
          this.projectService.getFormByCid(this.fcid);
        }
        if(this.templateCid != undefined) {
          this.projectService.getTemplateByCid(this.templateCid);
        }
        if(this.flaggedResponseid != undefined) {
          this.projectService.getFlaggedResponseid(this.flaggedResponseid);
        }
    });
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

}
