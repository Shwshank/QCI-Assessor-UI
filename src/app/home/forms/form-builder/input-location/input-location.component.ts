import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css']
})
export class InputLocationComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  disabled : any = false;
  waitingFlag = false;
  value: any ;
  lat : any;
  lng: any;
  accuracy: any;

  constructor() { }

  ngOnInit() {
      this.getLocation();
  }

  getLocation(){

    this.waitingFlag = true;

    let value;
    let lat;
    let lng;
    let accuracy;

    this.json.location = {lat: 0, lng: 0, acc : 9999};

    navigator.geolocation.getCurrentPosition(res=>{
      this.waitingFlag = false;
      console.log(res);
      value = res;
      lat = value.coords.latitude;
      lng = value.coords.longitude;
      accuracy = value.coords.accuracy;

      this.json.location = {lat: lat, lng: lng, acc : accuracy};
      this.json.value= 'some location';
      console.log(this.json.location);
      this.responseData.emit(this.json);
    }, err=>{
      console.log(err);
      this.json.location = {lat: 0, lng: 0, acc : 9999};
      this.json.value= 'some location';
      this.responseData.emit(this.json);
    }, {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 10000
    });
  }

  funID(id) {
    return (parseInt(id)+1);
  }

}
