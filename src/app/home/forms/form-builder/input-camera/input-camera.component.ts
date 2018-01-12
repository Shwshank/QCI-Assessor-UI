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
  disabled: any = false;
  position: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    if(localStorage.getItem('rules') && !this.json.flagged){
      this.disabled = true;
    }
  }

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

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      this.url = event.target.result;
      this.json.value = reader.result;
    }

    this.position = {coords : {
      accuracy: 100,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: 28.620370899999998,
      longitude: 77.2462516,
      speed: null
    },timestamp: 1515754375594}

    // this.json.location = navigator.geolocation.getCurrentPosition(showPosition);

    this.json.location = this.position;

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
