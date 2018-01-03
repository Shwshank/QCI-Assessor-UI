import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ProjectService } from '../../../../service/ProjectService';
// import './allscript.js';

@Component({
  selector: 'app-input-camera',
  templateUrl: './input-camera.component.html',
  styleUrls: ['./input-camera.component.css']
})
export class InputCameraComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  formData = new FormData();;
  files: any;
  selectedValue: any;
  name: any;
  url: any = "";
  geolocationPosition: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {}

  funID(id) {
    return (parseInt(id)+1);
  }

  getVal($event) {

    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    let fileName = file.name;
    this.name = file.name;
    this.formData = new FormData();
    this.json.fileName = this.name;

    // image url for preview
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // reader.readAsBinaryString(file)
    reader.onload = (event:any) => {
      this.url = event.target.result;
      this.json.value = reader.result;
    }
    // image url for preview

    this.responseData.emit(this.json);

  }

  deleteFile() {
    this.formData = new FormData();
    this.url = "";
    this.name = "";
    this.json.value = "";
    this.responseData.emit(this.json);
  }

}
