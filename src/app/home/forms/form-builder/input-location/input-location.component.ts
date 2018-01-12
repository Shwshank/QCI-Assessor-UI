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

  value: any ;
  lat : any;
  lng: any;
  accuracy: any;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(res=>{
      console.log(res);
      this.value = res;
      this.lat = this.value.coords.latitude;
      this.lng = this.value.coords.longitude;
      this.accuracy = this.value.coords.accuracy;

    }, err=>{
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });

    if(localStorage.getItem('rules') && !this.json.flagged){
      this.disabled = true;
    }

    this.json.value = this.value;
    this.responseData.emit(this.json);

  }

  refreshLocation() {
    navigator.geolocation.getCurrentPosition(res=>{
      console.log(res);
      this.value = res;
      this.lat = this.value.coords.latitude;
      this.lng = this.value.coords.longitude;
      this.accuracy = this.value.coords.accuracy;

    }, err=>{
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
    this.json.value = this.value;
    this.responseData.emit(this.json);
  }

  funID(id) {
    return (parseInt(id)+1);
  }

}
