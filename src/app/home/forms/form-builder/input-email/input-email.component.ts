import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.css']
})
export class InputEmailComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  disabled : any = false;

  value: any;

  constructor() {}

  ngOnInit() {
    this.value = this.json.value;
    if(localStorage.getItem('rules') && !this.json.flagged){
      this.disabled = true;
    }
  }

  funID(id) {
    return (parseInt(id)+1);
  }

  getVal() {
    this.json.value = this.value;
    this.responseData.emit(this.json);
  }

}
