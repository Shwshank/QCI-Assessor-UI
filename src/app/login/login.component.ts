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

    this.projectService.checkLogin();

    this.projectService.emitUserLogin.subscribe((res)=>{
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
