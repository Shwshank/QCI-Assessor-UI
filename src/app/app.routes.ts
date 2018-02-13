import { Routes } from '@angular/router';

import { AuthGuard } from './service/ZAuthGuard';
import { HomeComponent } from './home/home.component';
import { FormListingComponent } from './home/form-listing/form-listing.component';
import { FormsComponent } from './home/forms/forms.component';
import { LoginComponent } from './login/login.component';
import { TemplatesComponent } from './home/templates/templates.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FlaggedFormListingComponent } from './home/flagged-form-listing/flagged-form-listing.component';
import { HelpComponent } from './home/help/help.component';

export const routes: Routes = [

  { path: '', component:  DashboardComponent, children: [
    { path: '', component: FormListingComponent, canActivate: [AuthGuard]},
    { path: 'formListing', component: FormListingComponent, canActivate: [AuthGuard]},
    { path: 'flaggedFormListing', component: FlaggedFormListingComponent, canActivate: [AuthGuard]},
    { path: 'form', component: FormsComponent, canActivate: [AuthGuard]},
    { path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
    { path: 'template', component: TemplatesComponent, canActivate: [AuthGuard]},
  ]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo:'/login' }

];
