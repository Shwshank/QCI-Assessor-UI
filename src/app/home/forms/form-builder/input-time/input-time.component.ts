import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {

  @Input() json:any;
  
  constructor() { }

  ngOnInit() {
  }

}
