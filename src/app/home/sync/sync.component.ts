import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnInit {

  cardArray : any = [];
  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  numOffline: any = 0;
  unsyncedElementsCounts: any;
  unsyncedResponseID: any;
  unsyncedArray : any = [];

  constructor(private projectService: ProjectService, private router: Router) {

    this.sub1 = this.projectService.emitOfflineResponseArray.subscribe(res=>{
      this.cardArray = [];
      this.cardArray = res;
      console.log(res);
      this.numOffline = this.cardArray.length;
      for(let i=0; i<this.cardArray.length; i++) {
        this.cardArray[i].response.offline = true;
        this.cardArray[i].response.synced = false;
        this.cardArray[i].response.syncingStatus = false;
      }
    });

    this.sub2 = this.projectService.emitSyncResponseId.subscribe(res=>{
      console.log(res);

      for(let i=0; i<this.cardArray.length; i++) {
        if(res.id == this.cardArray[i].response.ResCid) {
          this.numOffline--;
          this.cardArray[i].response.synced = true;
          this.cardArray[i].response.syncingStatus = false;
          this.cardArray[i].response.offline = false;
          break;
        }
      }
    });

    this.sub3 = this.projectService.emitOfflineSyncChunkError.subscribe(res=>{
      console.log(res);
      let temp = res.response.ResCid;
      for(let i=0; i<this.cardArray.length; i++) {
        if(this.cardArray[i].response.ResCid==temp) {
          this.cardArray[i].response.syncingStatus = false;
          this.cardArray[i].response.synced = false;
          this.cardArray[i].response.offline = true;
        }
      }
    });
    
  }

  ngOnInit() {
    this.projectService.initializeIndexDB();
  }

  sync(data) {
    let temp = data.response.ResCid;
    for(let i=0; i<this.cardArray.length; i++) {
      if(this.cardArray[i].response.ResCid==temp) {
        this.cardArray[i].response.syncingStatus = true;
        this.cardArray[i].response.offline = false;
      }
    }
    this.projectService.syncThisFirst(data);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

}
