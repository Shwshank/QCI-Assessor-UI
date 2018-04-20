import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef ) {
    this.toastr.setRootViewContainerRef(vcr);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    // toaster works!
    // this.toastr.success('You are awesome!', 'Success!');
  }

}
