import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.css']
})
export class InputSliderComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  disabled : any = false;

  val:any;
  @ViewChild('val') output;

  constructor() {}

  ngOnInit() {
    this.val = this.json.value;
    if(localStorage.getItem('rules') && !this.json.flagged){
      this.disabled = true;
    }
  }

  funID(id) {
    return (parseInt(id)+1);
  }

  getVal() {

    this.json.value = this.output.nativeElement.value;
    this.responseData.emit(this.json);

  }

}
