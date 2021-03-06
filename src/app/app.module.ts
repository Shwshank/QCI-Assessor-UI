import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { NGXLogger } from 'ngx-logger';
import { ImageCompressService,ResizeOptions,ImageUtilityService } from 'ng2-image-compress';


import { routes } from './app.routes';
import { AuthGuard } from './service/ZAuthGuard';
import { CanDeactivateGuard } from './service/ZCanDeactivate';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FormsComponent } from './home/forms/forms.component';
import { LoginComponent } from './login/login.component';
import { FormListingComponent } from './home/form-listing/form-listing.component';
import { ProjectService } from './service/ProjectService';
import { APIService } from './service/APIService';
import { FormBuilderComponent } from './home/forms/form-builder/form-builder.component';
import { InputTextComponent } from './home/forms/form-builder/input-text/input-text.component';
import { InputPasswordComponent } from './home/forms/form-builder/input-password/input-password.component';
import { InputEmailComponent } from './home/forms/form-builder/input-email/input-email.component';
import { InputBreakComponent } from './home/forms/form-builder/input-break/input-break.component';
import { InputCheckboxComponent } from './home/forms/form-builder/input-checkbox/input-checkbox.component';
import { InputDateComponent } from './home/forms/form-builder/input-date/input-date.component';
import { InputDropdownComponent } from './home/forms/form-builder/input-dropdown/input-dropdown.component';
import { InputFileComponent } from './home/forms/form-builder/input-file/input-file.component';
import { InputNumberComponent } from './home/forms/form-builder/input-number/input-number.component';
import { InputPhoneComponent } from './home/forms/form-builder/input-phone/input-phone.component';
import { InputRadioComponent } from './home/forms/form-builder/input-radio/input-radio.component';
import { InputSliderComponent } from './home/forms/form-builder/input-slider/input-slider.component';
import { InputTextareaComponent } from './home/forms/form-builder/input-textarea/input-textarea.component';
import { InputTimeComponent } from './home/forms/form-builder/input-time/input-time.component';
import { TemplatesComponent } from './home/templates/templates.component';
import { InputCameraComponent } from './home/forms/form-builder/input-camera/input-camera.component';
import { InputVideoComponent } from './home/forms/form-builder/input-video/input-video.component';
import { FlaggedFormListingComponent } from './home/flagged-form-listing/flagged-form-listing.component';
import { InputLocationComponent } from './home/forms/form-builder/input-location/input-location.component';
import { Graph1Component } from './home/form-listing/graph1/graph1.component';
import { Graph2Component } from './home/form-listing/graph2/graph2.component';
import { HelpComponent } from './home/help/help.component';
import { UserProfileComponent } from './home/user-profile/user-profile.component';
import { SyncComponent } from './home/sync/sync.component';
import { DraftComponent } from './home/draft/draft.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FormsComponent,
    LoginComponent,
    FormListingComponent,
    FormBuilderComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputEmailComponent,
    InputBreakComponent,
    InputCheckboxComponent,
    InputDateComponent,
    InputDropdownComponent,
    InputFileComponent,
    InputNumberComponent,
    InputPhoneComponent,
    InputRadioComponent,
    InputSliderComponent,
    InputTextareaComponent,
    InputTimeComponent,
    TemplatesComponent,
    InputCameraComponent,
    InputVideoComponent,
    FlaggedFormListingComponent,
    InputLocationComponent,
    Graph1Component,
    Graph2Component,
    HelpComponent,
    UserProfileComponent,
    SyncComponent,
    DraftComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ToastModule.forRoot(),
    Ng2ImgMaxModule,
    LoggerModule.forRoot({serverLoggingUrl: 'http://192.168.15.187:8000/assessorActivityLog',
    level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.INFO}),
  ],
  providers: [
    NGXLogger,
    AuthGuard,
    APIService,
    ProjectService,
    CanDeactivateGuard,
    ImageCompressService,
    ResizeOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
