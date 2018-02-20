import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.scss']

})
export class Graph1Component implements OnInit {

  sub1: any;
  form_sync: any;

  constructor(private projectService: ProjectService) {
      this.sub1 = this.projectService.emitForm_sync.subscribe(res=>{
          this.form_sync = res;
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
