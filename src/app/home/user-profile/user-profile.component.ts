import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  phone: any;
  oldPwd : any;
  newPwd1 : any;
  newPwd2 : any;
  errorFlag : any = false;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.phone = localStorage.getItem('phone');
  }

  updatePassword() {
    this.checkNewPassword();
    if(!this.errorFlag) {
      this.checkNewPassword();
      this.projectService.updatePassword(this.oldPwd, this.newPwd1);
    }
  }

  checkNewPassword(){
    if(this.newPwd1 === this.newPwd2) {
      this.errorFlag = false;
    } else {
      this.errorFlag = true;
    }
  }

}
