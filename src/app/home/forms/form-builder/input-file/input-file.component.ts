import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import './allscript.js';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  formData = new FormData();;
  files: any;
  selectedValue: any;
  name: any;
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

  getVal($event) {

    // console.log('1');
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    let fileName = file.name;
    this.name = file.name;
    this.formData = new FormData();
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.json.value = reader.result;
      reader.readAsDataURL(file);
      this.json.fileName = this.name;
      this.responseData.emit(this.json);
    }

    // this.name = file.name;
    // this.formData = new FormData();
    // let reader = new FileReader();
    // reader.onload = (event:any) => {
    //   this.url = event.target.result;
    //   this.json.value = reader.result;
    // }
    // reader.readAsDataURL(file);
    // this.json.fileName = this.name;
    // this.responseData.emit(this.json);

  }

}
