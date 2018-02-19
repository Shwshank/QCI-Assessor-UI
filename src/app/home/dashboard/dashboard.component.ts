import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';
import './allscript.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  sending : any = false;
  syncStatus: any = "Sync";
  num : any = 0;
  flag: any = 0;
  sub1: any;
  sub2: any;
  sub3: any;

  constructor(private route: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitOfflineResponse.subscribe(res=>{
      this.num = res;
    });

    this.sub2 = this.projectService.emitFlaggedFormArray.subscribe(res=>{
      this.flag = res.length;
    });

    this.sub3 = this.projectService.emitSyncResponse.subscribe(res=>{
      if(res.success) {
        this.num--;
        if(this.num == 0) {
          alert('All forms are synced successfully ');
          this.syncStatus = "Sync";
          this.sending = false;
        }
      }
    });
  }

  ngOnInit() {
    // this.projectService.initializeIndexDB();
    // this.projectService.getFlaggedResponses();
  }

  sync() {
    if(this.num>0) {
      if(navigator.onLine) {
        this.projectService.syncAll();
        this.syncStatus = "Syncing..."
        this.sending = true;
      } else {
        alert('You are now offline, please connect to a network and try again');
      }
    } else {
    }
  }

  logout(){
    this.projectService.logout();
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

}
