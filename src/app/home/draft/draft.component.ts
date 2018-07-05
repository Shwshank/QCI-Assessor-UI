import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {

  sub1 : any;
  draftArray: any = [];

  constructor(private projectService: ProjectService, private router: Router) {

    this.sub1 = this.projectService.emitDraftArray.subscribe(res=>{
      console.log(res);
      this.draftArray = res;
    });

  }

  ngOnInit() {
    this.projectService.initializeDraftIndexDB();
  }

  openDraft(draftID) {
    this.router.navigate(['/form'], { queryParams: {draftID: draftID}});
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
