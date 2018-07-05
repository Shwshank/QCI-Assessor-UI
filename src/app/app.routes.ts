import { Routes } from '@angular/router';

import { AuthGuard } from './service/ZAuthGuard';
import { CanDeactivateGuard } from './service/ZCanDeactivate';
import { HomeComponent } from './home/home.component';
import { FormListingComponent } from './home/form-listing/form-listing.component';
import { FormsComponent } from './home/forms/forms.component';
import { SyncComponent } from './home/sync/sync.component';
import { LoginComponent } from './login/login.component';
import { DraftComponent } from './home/draft/draft.component';
import { TemplatesComponent } from './home/templates/templates.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FlaggedFormListingComponent } from './home/flagged-form-listing/flagged-form-listing.component';
import { HelpComponent } from './home/help/help.component';
import { UserProfileComponent } from './home/user-profile/user-profile.component';

export const routes: Routes = [

  { path: '', component:  DashboardComponent, children: [
    { path: '', component: FormListingComponent, canActivate: [AuthGuard]},
    { path: 'formListing', component: FormListingComponent, canActivate: [AuthGuard]},
    { path: 'flaggedFormListing', component: FlaggedFormListingComponent, canActivate: [AuthGuard]},
    { path: 'form', component: FormsComponent, canActivate: [AuthGuard], canDeactivate:[CanDeactivateGuard]},
    { path: 'sync', component: SyncComponent, canActivate: [AuthGuard]},
    { path: 'draft', component: DraftComponent, canActivate: [AuthGuard]},
    { path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
    { path: 'template', component: TemplatesComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  ]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo:'/login' }

];
