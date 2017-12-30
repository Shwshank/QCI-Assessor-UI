import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-form-listing',
  templateUrl: './form-listing.component.html',
  styleUrls: ['./form-listing.component.css']
})
export class FormListingComponent implements OnInit {

  cardArray : any = [];
  sub1: any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub1 = this.projectService.emitFormArray.subscribe(res=>{
        console.log(res);
        this.cardArray = res;
    });
  }

  ngOnInit() {
    this.projectService.getFormArray();
  }

  form(cid) {
    setTimeout(()=>{
      this.router.navigate(['/dash/form'], { queryParams: {id: cid}})
    }, 100);
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
