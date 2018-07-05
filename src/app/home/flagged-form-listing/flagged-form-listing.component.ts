import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-flagged-form-listing',
  templateUrl: './flagged-form-listing.component.html',
  styleUrls: ['./flagged-form-listing.component.css']
})


///////////////////////////////////////////////////////////////////////////////////////d1
//
//
//    FlaggedFormListingComponent lists flagged forms, click action on form naviagets to
//    '/form' url with form rid as query parameter.
//
//
/////////////////////////////////////////////////////////////////////////////////////////

export class FlaggedFormListingComponent implements OnInit {

  flag : any =0;
  flaggedArray: any = [];
  sub1 : any;

  constructor(private projectService: ProjectService, private router: Router) {

    this.sub1 = this.projectService.emitFlaggedFormArray.subscribe(res=>{
      console.log(res);
      this.flag = res.length;
      this.flaggedArray = res;

      if(this.flag>0 && this.flag<10){
        this.flag = '0'+ this.flag;
      }
    });
  }

  flaggedForm(rid) {
    setTimeout(()=>{
      this.router.navigate(['/form'], { queryParams: {flagResId: rid}})
    }, 1);
  }

  ngOnInit() {
    this.projectService.getFlaggedResponses();
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
