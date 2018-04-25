import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;
import './app.js';

@Component({
  selector: 'app-form-listing',
  templateUrl: './form-listing.component.html',
  styleUrls: ['./form-listing.component.scss']
})
export class FormListingComponent implements OnInit {

  cardArray : any = [{Details:{project:'Project name', name:"Form Name..."}, }, {Details:{project:'Project name', name:"Form Name..."}, }, {Details:{project:'Project name', name:"Form Name..."}, }, {Details:{project:'Project name', name:"Form Name..."}, }, {Details:{project:'Project name', name:"Form Name..."}, }];
  sub1: any;
  sub2: any;
  numOffline: any;
  offlineFormIdArrray: any = [];

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitFormArray.subscribe(res=>{
      console.log(res);
        this.cardArray = res;
    });

    this.sub2 = this.projectService.emitofflineFormIdArrray.subscribe(res=>{
      this.offlineFormIdArrray = res;
    });

  }

  ngOnInit() {
    this.projectService.getFormArray();
    this.flaggedForm();
  }

  form(cid) {
    // console.log("here1");
      this.router.navigate(['/form'], { queryParams: {id: cid}})
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  flaggedForm() {
  }

  offlineFormCount(id) {
    // console.log(this.offlineFormIdArrray);
    let c = 0;
    for(let i=0; i<this.offlineFormIdArrray.length; i++) {
      if(id==this.offlineFormIdArrray[i]){

        c++;
      }
    }

    return c;
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
