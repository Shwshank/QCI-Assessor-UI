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

///////////////////////////////////////////////////////////////////////////////////////////////d1
//
//     DashboardComponent is the landing page of the application
//
//     //////////////////////////////////////////////////////////////////////////////////////////
//     //
//     //    #Routing
//     //
//     //    1. formListing : FormListingComponent ( * * * Deafult * * * )
//     //       Display LastUpdate, offline and flagged tags
//     //       Display form cards
//     //
//     //    2. flaggedFormListing : FlaggedFormListingComponent
//     //       Display Flagged count
//     //       Display Flagged form cards
//     //
//     //    3. form : FormsComponent
//     //       Display form elements
//     //
//     //    4. help : HelpComponent
//     //       Help panel
//     //
//     //    5. template : TemplatesComponent
//     //
//     //    6. profile : UserProfileComponent
//     //
//     //////////////////////////////////////////////////////////////////////////////////////////
//
//
//     //////////////////////////////////////////////////////////////////////////////////////////
//     //
//     //   #Functions
//     //
//     //   1. emitOfflineResponse observable : count number of offline responses stored
//     //
//     //   2. emitFlaggedFormArray observable : Count no. of flagged responses.
//     //
//     //   3. emitSyncResponse observable : update offline response count after each sync.
//     //
//     //   4. refresh(): refresh page to get updated content.
//     //
//     //   5. sync() : Initialize online syncing of forms.
//     //
//     //   6. logout() : delelte all browser-wide storage
//     //
//     //////////////////////////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////////////////////////////////


export class DashboardComponent implements OnInit {

  sending : any = false;
  syncStatus: any = "Sync";
  num : any = 0;
  draft : any = 0;
  flag: any = 0;
  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  sub5: any;
  imageProcessing : any = false;
  dataLength : any;
  appVersion: any;

  constructor(private route: Router, private projectService: ProjectService) {

    this.sub1 = this.projectService.emitOfflineResponse.subscribe(res=>{
      this.num = res;
    });

    this.sub1 = this.projectService.emitDraftCount.subscribe(res=>{
      this.draft = res;
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
          window.location.reload();
        }
      }
    });

   this.sub4 =  this.projectService.emitImageCompressionStart.subscribe(res=>{
      this.imageProcessing = res.overlay;
      this.dataLength = res.dataLength;
    });

    this.sub5 = this.projectService.emitImageCompressionDone.subscribe(res=>{
      this.imageProcessing = res.overlay;
    });
  }

  ngOnInit() {
    // this.projectService.initializeDraftIndexDB();
    // this.projectService.getFlaggedResponses();
    this.appVersion = this.projectService.appVersion();
  }

  refresh() {
     window.location.reload();
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

    if(window.confirm('Are sure to logout ?')) {
      this.projectService.prepareForLogout();
    } else {

    }
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
  }

}
