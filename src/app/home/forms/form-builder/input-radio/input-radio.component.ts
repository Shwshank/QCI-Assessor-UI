import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  disabled : any = false;

  constructor() { }

  ngOnInit() {

    if(localStorage.getItem('rules') && !this.json.flagged){
        this.disabled = true;
    }
  }

  funID(id) {
    return (parseInt(id)+1);
  }

  getVal(opt) {
    // console.log(opt);

    this.json.value = "";
    this.responseData.emit(this.json);

    this.json.value = opt;
    this.responseData.emit(this.json);
  }
}
