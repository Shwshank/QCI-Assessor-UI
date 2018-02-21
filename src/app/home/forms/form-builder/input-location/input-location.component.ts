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
      this.refreshLocation();
  }

  refreshLocation() {
    navigator.geolocation.getCurrentPosition(res=>{
      console.log(res);
      this.value = res;
      this.lat = this.value.coords.latitude;
      this.lng = this.value.coords.longitude;
      this.accuracy = this.value.coords.accuracy;
      this.json.value = {lat: this.lat, lng: this.lng, acc : this.accuracy};
      this.responseData.emit(this.json);

    }, err=>{
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  funID(id) {
    return (parseInt(id)+1);
  }

}
