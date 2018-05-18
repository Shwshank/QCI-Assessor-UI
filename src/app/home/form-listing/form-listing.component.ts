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

  cardArray : any = [];
  sub1: any;
  sub2: any;
  sub3: any;
  numOffline: any;
  offlineFormIdArrray: any = [];
  onlineCount: any = [{online:'', last_updated:''}];

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitFormArray.subscribe(res=>{
      // console.log(res);
        this.cardArray = res;
    });

    this.sub2 = this.projectService.emitofflineFormIdArrray.subscribe(res=>{
      this.offlineFormIdArrray = res;
    });

    this.sub3 = this.projectService.emitOnlineFormCount.subscribe(res=>{
      this.onlineCount = res;
      console.log(res);
    })
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
    this.sub3.unsubscribe();
  }

}
