import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


//////////////////////////////////////////////////////////////////////////////d1
//
//                      Parent page
//   If logged in routed to Home else routed to login
//
////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////d1
//
//   Project consists of * * * * `3` * * *  main project folders
//
//    1. Home
//    2. Login
//    3. Service
//
//    "Home" is the dashboard page accessed after login
//    "Login" for login
//    "Service" Application wide services provider
//
////////////////////////////////////////////////////////////////////////////////


export class AppComponent {
  title = 'app';
}
