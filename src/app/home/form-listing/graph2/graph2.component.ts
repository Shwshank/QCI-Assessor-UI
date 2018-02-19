import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.scss']
})
export class Graph2Component implements OnInit {

  sub1: any;
  sub2: any;
  numOffline: any = 0;
  numFlag: any = 0;

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitOfflineResponse.subscribe(res=>{
      this.numOffline = res;
      if(this.numOffline>0 && this.numOffline<10){
        this.numOffline = '0'+ this.numOffline;
      }
      // console.log(res);
    });

    this.sub2 = this.projectService.emitFlaggedFormArray.subscribe(res=>{
      this.numFlag = res.length;
      if(this.numFlag>0 && this.numFlag<10){
        this.numFlag = '0'+ this.numFlag;
      }
      // console.log(res.length);
    });
  }

  ngOnInit() {
    this.projectService.initializeIndexDB();
    this.projectService.getFlaggedResponses();
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
