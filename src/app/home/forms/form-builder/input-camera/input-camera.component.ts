import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ProjectService } from '../../../../service/ProjectService';
import { Ng2ImgMaxService } from 'ng2-img-max';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';

@Component({
  selector: 'app-input-camera',
  templateUrl: './input-camera.component.html',
  styleUrls: ['./input-camera.component.css']
})
export class InputCameraComponent implements OnInit {

  @Input() json:any;
  @Input() id: any;
  @Output() responseData = new EventEmitter<any>();
  formData = new FormData();
  files: any;
  selectedValue: any;
  name: any;
  url: any = "";
  geolocationPosition: any;
  disabled: any = false;
  position: any;
  waitingFlag = false;
  uploadedImage : Blob;
  sub1 : any;
  sub2 : any;
  tempVal : any;

  selectedImage: any;
  processedImages: any = [];
  showTitle: boolean = false;

  constructor(private projectService: ProjectService, private ng2ImgMax: Ng2ImgMaxService, private imgCompressService: ImageCompressService) {}

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
     this.name = file.name;
     this.formData = new FormData();
     this.json.fileName = this.files[0].name;

    //  let reader = new FileReader();
    //  reader.readAsDataURL(file);
    //  reader.onload = (event:any) => {
    //     this.url = event.target.result;
    //     this.tempVal = reader.result+"";
    //     // this.json.value = reader.result;
    //     // this.json.location = {lat: 28.622635, lng: 77.247129, acc : 9999};
    //     // this.json.location = this.getLocation();
    //  }
     this.compressImage1($event);
   }

  compressImage1(fileInput: any) {
     let fileList: FileList;

     let images: Array<IImage> = [];

     ImageCompressService.filesToCompressedImageSource(fileInput.target.files).then(observableImages => {
       observableImages.subscribe((image) => {
         images.push(image);
       }, (error) => {
         console.log("Error while converting");
       }, () => {
                 this.processedImages = images;
                 this.showTitle = true;
                 console.log(this.processedImages);
                 this.json.value = this.processedImages[0].compressedImage.imageDataUrl;
                 this.json.location = {lat: 28.622635, lng: 77.247129, acc : 9999};
                 this.json.location = this.getLocation();
       });
     });


   }

  compressImage2($event) {
       // https://alligator.io/angular/resizing-images-in-browser-ng2-img-max/


       let files = $event.target.files || $event.srcElement.files;

       let image = files[0];
       // console.log(image);

       this.projectService.imageCompressionStarts(this.tempVal.length);
       this.sub2 = this.ng2ImgMax.compressImage(image, 0.20, false).subscribe(
         result => {
           console.log(result);
           this.projectService.imageCompressionDone();

           this.uploadedImage = new File([result], result.name);
           // console.log(result);

           let reader = new FileReader();
           reader.readAsDataURL(this.uploadedImage);
           reader.onload = (event:any) => {

             this.json.value = reader.result;
             this.json.fileName = image.name;
             this.json.location = {lat: 28.622635, lng: 77.247129, acc : 9999};
             this.json.location = this.getLocation();
             this.sub2.unsubscribe();
           }
         },
         error => {
           console.log('😢 Oh no!', error);
           this.sub2.unsubscribe();
           this.projectService.imageCompressionDone();
         });
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

    this.waitingFlag = true;

    let value;
    let lat;
    let lng;
    let accuracy;

    this.json.location = {lat: 28.622635, lng: 77.247129, acc : 9999};

    navigator.geolocation.getCurrentPosition(res=>{
      this.waitingFlag = false;
      console.log(res);
      value = res;
      lat = value.coords.latitude;
      lng = value.coords.longitude;
      accuracy = value.coords.accuracy;

      this.json.location = {lat: lat, lng: lng, acc : accuracy};
      console.log(this.json.location);
      this.responseData.emit(this.json);
    }, err=>{
      console.log(err);
      this.json.location = {lat: 28.622635, lng: 77.247129, acc : 9999};
      this.responseData.emit(this.json);
    }, {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 10000
    });
  }

  resendJson() {
    this.responseData.emit(this.json);
  }

}
