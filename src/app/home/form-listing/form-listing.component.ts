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

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitFormArray.subscribe(res=>{
        this.cardArray = res;
    });

  }

  ngOnInit() {
    this.projectService.getFormArray();
    this.flaggedForm();
  }

  form(cid) {
    console.log("here1");
      this.router.navigate(['/form'], { queryParams: {id: cid}})
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  flaggedForm() {
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
