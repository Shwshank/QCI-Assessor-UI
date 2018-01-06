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


  constructor(private route: Router, private projectService: ProjectService) { }

  ngOnInit() {
    // this.projectService.getFormArray();
  }
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  sync() {
    this.projectService.syncAll();
  }

  logout(){
    this.projectService.logout();
  }
}
