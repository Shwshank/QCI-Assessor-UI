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

  constructor(private projectService: ProjectService) {}

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
      this.json.location = this.getLocation();
      this.responseData.emit(this.json);
    }

  }

  deleteFile() {
    this.formData = new FormData();
    this.url = "";
    this.name = "";
    this.json.value = "";
    this.json.fileName = "";
    this.responseData.emit(this.json);
  }

  getLocation(){
    let value;
    let lat;
    let lng;
    let accuracy;

    navigator.geolocation.getCurrentPosition(res=>{
      console.log(res);
      value = res;
      lat = value.coords.latitude;
      lng = value.coords.longitude;
      accuracy = value.coords.accuracy;

      this.json.location = {lat: lat, lng: lng, acc : accuracy};
      console.log(this.json.location);

    }, err=>{
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

}
