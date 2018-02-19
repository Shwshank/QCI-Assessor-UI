import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/ProjectService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone : any;
  password: any;

  constructor(private projectService: ProjectService, private router: Router) {

    console.log('1');
    this.projectService.checkLogin();
    console.log('2');
    this.projectService.emitUserLogin.subscribe((res)=>{
      console.log('3');
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.phone);
    console.log(this.password);
    let formData = new FormData();
    formData.append('phone',this.phone);
    formData.append('pwd',this.password);
    this.projectService.login(formData);
    localStorage.setItem('phone',this.phone);

  }

}
