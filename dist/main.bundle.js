webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_ZAuthGuard__ = __webpack_require__("./src/app/service/ZAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_dashboard_dashboard_component__ = __webpack_require__("./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_forms_forms_component__ = __webpack_require__("./src/app/home/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_form_listing_form_listing_component__ = __webpack_require__("./src/app/home/form-listing/form-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_APIService__ = __webpack_require__("./src/app/service/APIService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_forms_form_builder_form_builder_component__ = __webpack_require__("./src/app/home/forms/form-builder/form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_forms_form_builder_input_text_input_text_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-text/input-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_forms_form_builder_input_password_input_password_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-password/input-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_forms_form_builder_input_email_input_email_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-email/input-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_forms_form_builder_input_break_input_break_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-break/input-break.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_forms_form_builder_input_checkbox_input_checkbox_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_forms_form_builder_input_date_input_date_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-date/input-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_forms_form_builder_input_dropdown_input_dropdown_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_forms_form_builder_input_file_input_file_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-file/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_forms_form_builder_input_number_input_number_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-number/input-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_forms_form_builder_input_phone_input_phone_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-phone/input-phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_forms_form_builder_input_radio_input_radio_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-radio/input-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_forms_form_builder_input_slider_input_slider_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-slider/input-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_forms_form_builder_input_textarea_input_textarea_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-textarea/input-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_forms_form_builder_input_time_input_time_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-time/input-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_templates_templates_component__ = __webpack_require__("./src/app/home/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__home_forms_form_builder_input_camera_input_camera_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-camera/input-camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_forms_form_builder_input_video_input_video_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-video/input-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__home_flagged_form_listing_flagged_form_listing_component__ = __webpack_require__("./src/app/home/flagged-form-listing/flagged-form-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__home_forms_form_builder_input_location_input_location_component__ = __webpack_require__("./src/app/home/forms/form-builder/input-location/input-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__home_form_listing_graph1_graph1_component__ = __webpack_require__("./src/app/home/form-listing/graph1/graph1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_form_listing_graph2_graph2_component__ = __webpack_require__("./src/app/home/form-listing/graph2/graph2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__home_help_help_component__ = __webpack_require__("./src/app/home/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__home_user_profile_user_profile_component__ = __webpack_require__("./src/app/home/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_forms_forms_component__["a" /* FormsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_form_listing_form_listing_component__["a" /* FormListingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_forms_form_builder_form_builder_component__["a" /* FormBuilderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_forms_form_builder_input_text_input_text_component__["a" /* InputTextComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_forms_form_builder_input_password_input_password_component__["a" /* InputPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_forms_form_builder_input_email_input_email_component__["a" /* InputEmailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_forms_form_builder_input_break_input_break_component__["a" /* InputBreakComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_forms_form_builder_input_checkbox_input_checkbox_component__["a" /* InputCheckboxComponent */],
            __WEBPACK_IMPORTED_MODULE_24__home_forms_form_builder_input_date_input_date_component__["a" /* InputDateComponent */],
            __WEBPACK_IMPORTED_MODULE_25__home_forms_form_builder_input_dropdown_input_dropdown_component__["a" /* InputDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_26__home_forms_form_builder_input_file_input_file_component__["a" /* InputFileComponent */],
            __WEBPACK_IMPORTED_MODULE_27__home_forms_form_builder_input_number_input_number_component__["a" /* InputNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_28__home_forms_form_builder_input_phone_input_phone_component__["a" /* InputPhoneComponent */],
            __WEBPACK_IMPORTED_MODULE_29__home_forms_form_builder_input_radio_input_radio_component__["a" /* InputRadioComponent */],
            __WEBPACK_IMPORTED_MODULE_30__home_forms_form_builder_input_slider_input_slider_component__["a" /* InputSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_31__home_forms_form_builder_input_textarea_input_textarea_component__["a" /* InputTextareaComponent */],
            __WEBPACK_IMPORTED_MODULE_32__home_forms_form_builder_input_time_input_time_component__["a" /* InputTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_33__home_templates_templates_component__["a" /* TemplatesComponent */],
            __WEBPACK_IMPORTED_MODULE_34__home_forms_form_builder_input_camera_input_camera_component__["a" /* InputCameraComponent */],
            __WEBPACK_IMPORTED_MODULE_35__home_forms_form_builder_input_video_input_video_component__["a" /* InputVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_36__home_flagged_form_listing_flagged_form_listing_component__["a" /* FlaggedFormListingComponent */],
            __WEBPACK_IMPORTED_MODULE_37__home_forms_form_builder_input_location_input_location_component__["a" /* InputLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_38__home_form_listing_graph1_graph1_component__["a" /* Graph1Component */],
            __WEBPACK_IMPORTED_MODULE_39__home_form_listing_graph2_graph2_component__["a" /* Graph2Component */],
            __WEBPACK_IMPORTED_MODULE_40__home_help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_41__home_user_profile_user_profile_component__["a" /* UserProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__service_ZAuthGuard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__service_ProjectService__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_17__service_APIService__["a" /* APIService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__ = __webpack_require__("./src/app/service/ZAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_form_listing_form_listing_component__ = __webpack_require__("./src/app/home/form-listing/form-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_forms_forms_component__ = __webpack_require__("./src/app/home/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_templates_templates_component__ = __webpack_require__("./src/app/home/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_dashboard_dashboard_component__ = __webpack_require__("./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_flagged_form_listing_flagged_form_listing_component__ = __webpack_require__("./src/app/home/flagged-form-listing/flagged-form-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_help_help_component__ = __webpack_require__("./src/app/home/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_user_profile_user_profile_component__ = __webpack_require__("./src/app/home/user-profile/user-profile.component.ts");









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_form_listing_form_listing_component__["a" /* FormListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'formListing', component: __WEBPACK_IMPORTED_MODULE_1__home_form_listing_form_listing_component__["a" /* FormListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'flaggedFormListing', component: __WEBPACK_IMPORTED_MODULE_6__home_flagged_form_listing_flagged_form_listing_component__["a" /* FlaggedFormListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'form', component: __WEBPACK_IMPORTED_MODULE_2__home_forms_forms_component__["a" /* FormsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'help', component: __WEBPACK_IMPORTED_MODULE_7__home_help_help_component__["a" /* HelpComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'template', component: __WEBPACK_IMPORTED_MODULE_4__home_templates_templates_component__["a" /* TemplatesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__home_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '/login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/home/dashboard/allscript.js":
/***/ (function(module, exports) {

// Notification.requestPermission().then(function(result) {
//   console.log(result);
// });
//
// Notification.requestPermission(function(res) {
//   console.log(res);
// });


/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<style media=\"screen\">\n\n  .numberButton{\n    background-color: #5f5f5f;\n    color: white;\n    border: 1px solid #5f5f5f;\n    border-radius:3px;\n  }\n\n  .mdl-layout__drawer-button{\n    max-height:2.5rem !important;\n    height:2.5rem !important;\n    min-height:2.5rem !important;\n    margin-top: -0.5rem !important;\n  }\n  .mdl-button{\n    /*text-align: left !important;\n    padding-left: 50px !important;\n    */\n  }\n\n</style>\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer\n            mdl-layout--fixed-header\" >\n  <header class=\"mdl-layout__header\" style=\"max-height:2.5rem !important;height:2.5rem !important; min-height:2.5rem !important;\">\n    <div class=\"mdl-layout__header-row\">\n      <div class=\"mdl-layout-spacer\"></div>\n      <button id=\"demo-menu-lower-right\" class=\"mdl-button mdl-js-button mdl-button--icon\" style=\"margin-top:-1.4rem !important; max-height:2.5rem !important; height:2.5rem !important; min-height:2.5rem !important;\">\n        <i class=\"material-icons\">more_vert</i>\n      </button>\n      <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu \"\n          for=\"demo-menu-lower-right\">\n        <li class=\"mdl-menu__item\" (click)=\"refresh()\"> Refresh <i class=\"material-icons\">update</i> </li>\n        <li class=\"mdl-menu__item\" [routerLink]=\"['/profile']\">User profile <i class=\"material-icons\">perm_identity</i> </li>\n      </ul>\n    </div>\n  </header>\n\n  <div class=\"mdl-layout__drawer mdl-shadow--4dp\">\n    <span class=\"mdl-layout-title\">QCI - Survey</span>\n    <nav class=\"mdl-navigation\">\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" style=\"text-align: left !important; padding-left: 50px !important;\" [routerLink]=\"['/formListing']\"> <b> <i class=\"material-icons\">store</i> Home </b> </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" style=\"text-align: left !important; padding-left: 50px !important;\" [routerLink]=\"['/flaggedFormListing']\"> <b> <i class=\"material-icons\">assistant_photo</i> Flag <span *ngIf=\"flag > 0\" class=\"numberButton\"> &nbsp; {{flag}} &nbsp;  </span></b> </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" [routerLink]=\"['/']\" (click)='sync()'  style=\"text-align: left !important; padding-left: 50px !important;\"  >\n\n        <b> <i class=\"material-icons\">sync</i> {{syncStatus}} &nbsp; <span *ngIf=\"num > 0\" class=\"numberButton\" > &nbsp; {{num}} &nbsp;  </span> </b>\n        <div *ngIf=\"sending\"  class=\"load-bar\">\n          <div class=\"bar\"></div>\n          <div class=\"bar\"></div>\n          <div class=\"bar\"></div>\n        </div>\n      </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" style=\"text-align: left !important; padding-left: 50px !important;\" style=\"text-align: left !important; padding-left: 50px !important;\" [routerLink]=\"['/help']\"  > <i class=\"material-icons\">security</i> <b> SOS </b> </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" style=\"text-align: left !important; padding-left: 50px !important;\"  style=\"text-align: left !important; padding-left: 50px !important;\"  (click)=\"logout()\"> <i class=\"material-icons\">lock</i> <b> Logout </b> </a>\n    </nav>\n  </div>\n\n  <main class=\"mdl-layout__content commonProp \" >\n\n    <router-outlet></router-outlet>\n\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454;\n  overscroll-behavior: contain; }\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n.margin-top-prop {\n  margin-top: -15px !important; }\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n.mdl-textfield {\n  width: 90% !important; }\n.flagged {\n  color: #5f5f5f;\n  font-size: 16px; }\n.mdl-radio {\n  display: content !important; }\n/*$primary-color: #2196f3;\n$primary-text: #fff;\n$accent-color: #ffd740;\n$accent-text: gray;*/\n.infoBox {\n  height: 200px;\n  background-color: lightgray;\n  max-width: 400px;\n  min-width: 300px;\n  margin: auto;\n  margin-bottom: 20px; }\n.infoGraph {\n  height: 100px;\n  background-color: lightgray; }\n.commonProp {\n  background-color: #f7f7f7; }\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n  background-color: #ffd740 !important;\n  color: gray !important; }\n.mdl-navigation__link {\n  color: #fff !important; }\n.load-bar {\n  position: relative;\n  margin-top: 20px;\n  width: 100%;\n  height: 6px;\n  background-color: #fdba2c; }\n.bar {\n  content: \"\";\n  display: inline;\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 50%;\n  text-align: center; }\n.bar:nth-child(1) {\n  background-color: #da4733;\n  -webkit-animation: loading 3s linear infinite;\n          animation: loading 3s linear infinite; }\n.bar:nth-child(2) {\n  background-color: #3b78e7;\n  -webkit-animation: loading 3s linear 1s infinite;\n          animation: loading 3s linear 1s infinite; }\n.bar:nth-child(3) {\n  background-color: #fdba2c;\n  -webkit-animation: loading 3s linear 2s infinite;\n          animation: loading 3s linear 2s infinite; }\n@-webkit-keyframes loading {\n  from {\n    left: 50%;\n    width: 0;\n    z-index: 100; }\n  33.3333% {\n    left: 0;\n    width: 100%;\n    z-index: 10; }\n  to {\n    left: 0;\n    width: 100%; } }\n@keyframes loading {\n  from {\n    left: 50%;\n    width: 0;\n    z-index: 100; }\n  33.3333% {\n    left: 0;\n    width: 100%;\n    z-index: 10; }\n  to {\n    left: 0;\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allscript_js__ = __webpack_require__("./src/app/home/dashboard/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(route, projectService) {
        var _this = this;
        this.route = route;
        this.projectService = projectService;
        this.sending = false;
        this.syncStatus = "Sync";
        this.num = 0;
        this.flag = 0;
        this.sub1 = this.projectService.emitOfflineResponse.subscribe(function (res) {
            _this.num = res;
        });
        this.sub2 = this.projectService.emitFlaggedFormArray.subscribe(function (res) {
            _this.flag = res.length;
        });
        this.sub3 = this.projectService.emitSyncResponse.subscribe(function (res) {
            if (res.success) {
                _this.num--;
                if (_this.num == 0) {
                    alert('All forms are synced successfully ');
                    _this.syncStatus = "Sync";
                    _this.sending = false;
                    window.location.reload();
                }
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.projectService.initializeIndexDB();
        // this.projectService.getFlaggedResponses();
    };
    DashboardComponent.prototype.refresh = function () {
        window.location.reload();
    };
    DashboardComponent.prototype.sync = function () {
        if (this.num > 0) {
            if (navigator.onLine) {
                this.projectService.syncAll();
                this.syncStatus = "Syncing...";
                this.sending = true;
            }
            else {
                alert('You are now offline, please connect to a network and try again');
            }
        }
        else {
        }
    };
    DashboardComponent.prototype.logout = function () {
        if (window.confirm('All offline data & forms will be deteled. Are sure to logout ?')) {
            this.projectService.logout();
        }
        else {
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/home/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/home/dashboard/dashboard.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/home/flagged-form-listing/flagged-form-listing.component.css":
/***/ (function(module, exports) {

module.exports = ".graph2div{\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/graph22.jpg\");\n  background-position:bottom;\n  background-color: $primary-color;\n  color:#fff;\n  margin: auto;\n  display: block;\n  text-align: center;\n}\n.graph1text{\n  padding-top: 1.3rem;\n  font-size: 2.5rem;\n  font-weight: bold;\n  text-shadow: 4px 4px 2px #e91e62;\n}\n.graph1text2{\n  // padding-top: .1rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 4px\n}\n.graph2icon{\n  font-size: 2.5rem;\n}\n"

/***/ }),

/***/ "./src/app/home/flagged-form-listing/flagged-form-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Three Line List with secondary info and action -->\n<style>\n.demo-list-three {\n  width: 90%\n}\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"\" style=\"width:90vw\">\n    <div class=\"graph2div\">\n\n      <div style=\"width:100%; float:left\" >\n        <p class=\"graph1text\" > <i class=\"material-icons graph2icon\">assistant_photo</i> {{flag}}</p>\n        <p class=\"graph1text2\" >Flagged</p>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<ul class=\"demo-list-three mdl-list \" style=\"margin: auto\">\n\n  <span  *ngFor=\"let form  of flaggedArray\" >\n    <hr>\n    <li class=\"mdl-list__item mdl-list__item--three-line\" (click)=\"flaggedForm(form.Details.rid)\" >\n      <span class=\"mdl-list__item-primary-content\">\n        <i class=\"material-icons mdl-list__item-avatar\">description</i>\n        <span>{{form.Details.project}}</span>\n        <span class=\"mdl-list__item-text-body\">\n          {{form.Details.name}} &nbsp;<br> Flagged: {{form.Details.flagged_on}}\n        </span>\n      </span>\n      <span class=\"mdl-list__item-secondary-content\">\n        <span class=\"mdl-list__item-secondary-action\"><i class=\"material-icons\">create</i></span>\n      </span>\n    </li>\n  </span>\n  <hr>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/home/flagged-form-listing/flagged-form-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlaggedFormListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlaggedFormListingComponent = (function () {
    function FlaggedFormListingComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.flag = 0;
        this.flaggedArray = [];
        this.sub1 = this.projectService.emitFlaggedFormArray.subscribe(function (res) {
            console.log(res);
            _this.flag = res.length;
            _this.flaggedArray = res;
            if (_this.flag > 0 && _this.flag < 10) {
                _this.flag = '0' + _this.flag;
            }
        });
    }
    FlaggedFormListingComponent.prototype.flaggedForm = function (rid) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/form'], { queryParams: { flagResId: rid } });
        }, 100);
    };
    FlaggedFormListingComponent.prototype.ngOnInit = function () {
        this.projectService.getFlaggedResponses();
    };
    FlaggedFormListingComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    FlaggedFormListingComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    return FlaggedFormListingComponent;
}());
FlaggedFormListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-flagged-form-listing',
        template: __webpack_require__("./src/app/home/flagged-form-listing/flagged-form-listing.component.html"),
        styles: [__webpack_require__("./src/app/home/flagged-form-listing/flagged-form-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FlaggedFormListingComponent);

var _a, _b;
//# sourceMappingURL=flagged-form-listing.component.js.map

/***/ }),

/***/ "./src/app/home/form-listing/app.js":
/***/ (function(module, exports) {




/***/ }),

/***/ "./src/app/home/form-listing/form-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone infoGraph\"> <app-graph1></app-graph1> </div>\n    <div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone infoGraph\"> <app-graph2></app-graph2> </div>\n  </div>\n\n\n  <div class=\"mdl-grid\">\n\n    <div *ngIf='cardArray.length==0'>\n      <h3 class=\"updatingText\" > Updating... </h3>\n    </div>\n\n    <div *ngFor='let card of cardArray; let i = index' class=\"mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-phone infoBox \">\n      <div class=\"demo-card-square backgroundImage\" >\n        <div class=\"mdl-card__title mdl-card--expand \" (click)='form(card.Details.cid)'>\n          <h2 class=\"mdl-card__title-text custom-header\">{{card.Details.project}}</h2>\n        </div>\n        <div class=\"mdl-card__supporting-text\" (click)='form(card.Details.cid)'>\n          {{card.Details.name}}\n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\">\n\n          <span class=\"mdl-chip mdl-chip--contact\">\n              <span class=\"mdl-chip__contact mdl-color--primary mdl-color-text--white\">{{onlineCount[i].online}}</span>\n              <span class=\"mdl-chip__text\">Online</span>\n          </span>\n\n          <span class=\"mdl-chip mdl-chip--contact\">\n              <span class=\"mdl-chip__contact mdl-color--accent mdl-color-text--lightgray\">{{offlineFormCount(card.Details.cid)}}</span>\n              <span class=\"mdl-chip__text\">Offline</span>\n          </span>\n\n          <!-- <span class=\"mdl-chip mdl-chip--contact\" (click)=\"flaggedForm()\" >\n              <span class=\"mdl-chip__contact mdl-color--primary mdl-color-text--white\">0</span>\n              <span class=\"mdl-chip__text\">Flagged</span>\n          </span> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/form-listing/form-listing.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454;\n  overscroll-behavior: contain; }\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n.margin-top-prop {\n  margin-top: -15px !important; }\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n.mdl-textfield {\n  width: 90% !important; }\n.flagged {\n  color: #5f5f5f;\n  font-size: 16px; }\n.mdl-radio {\n  display: content !important; }\n.infoBox {\n  background-color: lightgray;\n  max-width: 400px;\n  min-width: 300px;\n  margin: auto;\n  margin-bottom: 20px;\n  padding: auto; }\n.infoGraph {\n  height: 100px;\n  background-color: lightgray; }\n.demo-card-square.mdl-card {\n  width: 100%;\n  height: 100%; }\n.demo-card-square > .mdl-card__title {\n  color: gray;\n  /*background-color: #46B6AC*/\n  /*background:\n    url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;*/ }\n.backgroundImage {\n  background-image: url(\"/assets/pink3.jpg\");\n  background-position: left;\n  height: 100% !important; }\n.custom-header {\n  color: #272727; }\n.updatingText {\n  color: #e91e62;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/home/form-listing/form-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_js__ = __webpack_require__("./src/app/home/form-listing/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormListingComponent = (function () {
    function FormListingComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.cardArray = [];
        this.offlineFormIdArrray = [];
        this.onlineCount = [{ online: '', last_updated: '' }];
        this.sub1 = this.projectService.emitFormArray.subscribe(function (res) {
            // console.log(res);
            _this.cardArray = res;
        });
        this.sub2 = this.projectService.emitofflineFormIdArrray.subscribe(function (res) {
            _this.offlineFormIdArrray = res;
        });
        this.sub3 = this.projectService.emitOnlineFormCount.subscribe(function (res) {
            _this.onlineCount = res;
            console.log(res);
        });
    }
    FormListingComponent.prototype.ngOnInit = function () {
        this.projectService.getFormArray();
        this.flaggedForm();
    };
    FormListingComponent.prototype.form = function (cid) {
        // console.log("here1");
        this.router.navigate(['/form'], { queryParams: { id: cid } });
    };
    FormListingComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    FormListingComponent.prototype.flaggedForm = function () {
    };
    FormListingComponent.prototype.offlineFormCount = function (id) {
        // console.log(this.offlineFormIdArrray);
        var c = 0;
        for (var i = 0; i < this.offlineFormIdArrray.length; i++) {
            if (id == this.offlineFormIdArrray[i]) {
                c++;
            }
        }
        return c;
    };
    FormListingComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
    };
    return FormListingComponent;
}());
FormListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-listing',
        template: __webpack_require__("./src/app/home/form-listing/form-listing.component.html"),
        styles: [__webpack_require__("./src/app/home/form-listing/form-listing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FormListingComponent);

var _a, _b;
//# sourceMappingURL=form-listing.component.js.map

/***/ }),

/***/ "./src/app/home/form-listing/graph1/graph1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"graph1\" >\n  <p class=\"graph1text2\" > -    Last Updated</p>\n    <!-- <p class=\"graph1text\" > <i class=\"material-icons\">sync</i> Jan 15, 2018 at 18:34  </p> -->\n    <p class=\"graph1text\" > <i class=\"material-icons\">sync</i> {{form_sync}}  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/home/form-listing/graph1/graph1.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454;\n  overscroll-behavior: contain; }\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n.margin-top-prop {\n  margin-top: -15px !important; }\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n.mdl-textfield {\n  width: 90% !important; }\n.flagged {\n  color: #5f5f5f;\n  font-size: 16px; }\n.mdl-radio {\n  display: content !important; }\n.graph1 {\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/bg6.jpg\");\n  background-position: top;\n  text-align: center;\n  color: #e91e62;\n  font-weight: bold;\n  position: relative;\n  opacity: 0.9; }\n.graph1text {\n  font-size: 1.7rem;\n  font-weight: 550; }\n.graph1text2 {\n  padding-top: 1.1rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  letter-spacing: 4px; }\n"

/***/ }),

/***/ "./src/app/home/form-listing/graph1/graph1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Graph1Component = (function () {
    function Graph1Component(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.sub1 = this.projectService.emitForm_sync.subscribe(function (res) {
            _this.form_sync = res;
        });
    }
    Graph1Component.prototype.ngOnInit = function () { };
    Graph1Component.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    return Graph1Component;
}());
Graph1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph1',
        template: __webpack_require__("./src/app/home/form-listing/graph1/graph1.component.html"),
        styles: [__webpack_require__("./src/app/home/form-listing/graph1/graph1.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Graph1Component);

var _a;
//# sourceMappingURL=graph1.component.js.map

/***/ }),

/***/ "./src/app/home/form-listing/graph2/graph2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"graph2div\">\n  <div style=\"width:50%;  float:left\" >\n    <p class=\"graph1text\" > <i class=\"material-icons graph2icon\">cloud_off</i> {{numOffline}}</p>\n    <p class=\"graph1text2\" >Offline</p>\n  </div>\n\n  <div style=\"width:50%; float:left\" >\n    <p class=\"graph1text\" > <i class=\"material-icons graph2icon\">assistant_photo</i> {{numFlag}}</p>\n    <p class=\"graph1text2\" >Flagged</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/form-listing/graph2/graph2.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454;\n  overscroll-behavior: contain; }\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n.margin-top-prop {\n  margin-top: -15px !important; }\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n.mdl-textfield {\n  width: 90% !important; }\n.flagged {\n  color: #5f5f5f;\n  font-size: 16px; }\n.mdl-radio {\n  display: content !important; }\n.graph2div {\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/graph22.jpg\");\n  background-position: bottom;\n  background-color: #e91e62;\n  color: #fff;\n  position: relative;\n  margin: auto;\n  text-align: center; }\n.graph1text {\n  padding-top: 1.3rem;\n  font-size: 2.5rem;\n  font-weight: bold;\n  text-shadow: 4px 4px 2px #e91e62; }\n.graph1text2 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 4px; }\n.graph2icon {\n  font-size: 2.5rem; }\n"

/***/ }),

/***/ "./src/app/home/form-listing/graph2/graph2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Graph2Component = (function () {
    function Graph2Component(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.numOffline = 0;
        this.numFlag = 0;
        this.sub1 = this.projectService.emitOfflineResponse.subscribe(function (res) {
            _this.numOffline = res;
            if (_this.numOffline > 0 && _this.numOffline < 10) {
                _this.numOffline = '0' + _this.numOffline;
            }
            // console.log(res);
        });
        this.sub2 = this.projectService.emitFlaggedFormArray.subscribe(function (res) {
            _this.numFlag = res.length;
            if (_this.numFlag > 0 && _this.numFlag < 10) {
                _this.numFlag = '0' + _this.numFlag;
            }
            // console.log(res.length);
        });
    }
    Graph2Component.prototype.ngOnInit = function () {
        this.projectService.initializeIndexDB();
        this.projectService.getFlaggedResponses();
    };
    Graph2Component.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    return Graph2Component;
}());
Graph2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph2',
        template: __webpack_require__("./src/app/home/form-listing/graph2/graph2.component.html"),
        styles: [__webpack_require__("./src/app/home/form-listing/graph2/graph2.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Graph2Component);

var _a;
//# sourceMappingURL=graph2.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/allscript.js":
/***/ (function(module, exports) {

try{
  window.document.onload = (function() {

        var dialog = document.querySelector('#modal-example');
        var closeButton = dialog.querySelector('button');
        var showButton = document.querySelector('#show-modal-example');
        if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        var closeClickHandler = function(event) {
            dialog.close();
        };
        var showClickHandler = function(event) {
            dialog.showModal();
        };
        showButton.addEventListener('click', showClickHandler);
        closeButton.addEventListener('click', closeClickHandler);
    }());
}
catch(exp){}


/***/ }),

/***/ "./src/app/home/forms/form-builder/form-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-card-square mdl-card \" style=\"margin-top:-1.3rem\">\n\n  <div *ngIf=\"disableSubmitButton\" style=\"width:100%\">\n    <div id=\"p\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" style=\"width:100%\"></div>\n  </div>\n\n  <!-- <div   class=\"mdl-card__title \">\n    <h2 class=\"mdl-card__title-text\">{{formDetails.project}}</h2>\n  </div> -->\n  <div class=\"mdl-card__supporting-text background-secondary\">\n    <b>{{formDetails.project}} <br> {{formDetails.name}}</b> &nbsp;  &nbsp;  &nbsp;\n\n    <span *ngIf='formError' class=\"mdl-chip\" style=\"float : right; margin-top: -15px\" >\n        <span class=\"mdl-chip__text errorMsg\"><b> # </b> </span>\n    </span>\n\n    <span *ngIf=\"displayRequired>0\" style=\"float : right; margin-top: -15px\"  class=\"mdl-chip margin-top-prop\">\n        <span class=\"mdl-chip__text requiredMsg\"> <b>*  <span style=\"font-size:0.8rem\"> Required </span> </b> </span>\n    </span>\n\n    <span *ngIf=\"flags>0\" style=\"float : right; margin-top: -15px\"  class=\"mdl-chip margin-top-prop\">\n        <span class=\"mdl-chip__text flagged \"><b>  {{flags}}  <i class=\"material-icons flag-icon\">assistant_photo</i></b> </span>\n    </span>\n\n  </div>\n\n  <div  class=\"mdl-card__actions mdl-card--border formBoxHeight\">\n\n    <div  *ngFor='let json of jsonArray; let i = index'>\n\n      <div *ngIf=\"json.type == 'text'\" >\n        <app-input-text [json]=json  id={{i}} (responseData)=\"responseData($event)\"></app-input-text>\n      </div>\n\n      <div *ngIf=\"json.type == 'password'\" >\n        <app-input-password [json]=json id={{i}} (responseData)=\"responseData($event)\"></app-input-password>\n      </div>\n\n      <div *ngIf=\"json.type == 'email'\" >\n        <app-input-email [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-email>\n      </div>\n\n      <div *ngIf=\"json.type == 'number'\" >\n        <app-input-number [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-number>\n      </div>\n\n      <div *ngIf=\"json.type == 'phone'\" >\n        <app-input-phone [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-phone>\n      </div>\n\n      <div *ngIf=\"json.type == 'textarea'\" >\n        <app-input-textarea [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-textarea>\n      </div>\n\n      <div *ngIf=\"json.type == 'date'\" >\n        <app-input-date [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-date>\n      </div>\n\n      <div *ngIf=\"json.type == 'time'\" >\n        <app-input-time [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-time>\n      </div>\n\n      <div *ngIf=\"json.type == 'radio'\" >\n        <app-input-radio [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-radio>\n      </div>\n\n      <div *ngIf=\"json.type == 'checkbox'\" >\n        <app-input-checkbox [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-checkbox>\n      </div>\n\n      <div *ngIf=\"json.type == 'dropdown'\" >\n        <app-input-dropdown [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-dropdown>\n      </div>\n\n      <div *ngIf=\"json.type == 'slider'\" >\n        <app-input-slider [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-slider>\n      </div>\n\n      <div *ngIf=\"json.type == 'file'\" >\n        <app-input-file [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-file>\n      </div>\n\n      <div *ngIf=\"json.type == 'camera'\" >\n        <app-input-camera [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-camera>\n      </div>\n\n      <div *ngIf=\"json.type == 'video'\" >\n        <app-input-video [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-video>\n      </div>\n\n      <div *ngIf=\"json.type == 'location'\" >\n        <!-- &nbsp; &nbsp; {{(i+1)}}. Location :: {{getCurrentLocation()}} <br><br> -->\n        <app-input-location [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-location>\n      </div>\n\n      <div *ngIf=\"json.type == 'break'\">\n        <br>\n        <div class=\"mdl-cell mdl-cell--11-col sectionBreak \"> <b class=\"backgroundColorClass\"> {{json.name}} </b></div>\n        <br>\n      </div>\n\n    </div>\n\n    <div *ngIf='jsonArray.length > 0' class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--12-col\" style=\"margin: auto;\">\n\n        <button *ngIf=\"button1\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" (click)='proceedForSumbit()' >\n         <b>{{submitButton}}  <i class=\"material-icons\">send</i></b>\n        </button>\n\n        <button *ngIf=\"button2\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" (click)='saveFormReaponce()' >\n         <b>{{submitButton2}}  <i class=\"material-icons\">send</i></b>\n        </button>\n\n      </div>\n    </div>\n\n    <div *ngIf=\"!formResponse\" >\n      <!-- <div class=\"mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active\"></div> -->\n      <div class=\"load-bar\">\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n      </div>\n\n      <h4>  Just a moment ... </h4>\n\n    </div>\n\n    <div *ngIf='jsonArray.length == 0' class=\"mdl-grid\">\n\n      <div class=\"mdl-cell mdl-cell--12-col finishMsg\" >\n\n        <span *ngIf=\"send\">\n          <h3>Thanks! Form submitted... <b> <i class=\"material-icons\">done_all</i> </b> </h3>\n          <br>\n          <br>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" (click)=\"backToDashboard()\">\n            <b><i class=\"material-icons\">arrow_back</i> dashboard</b>\n          </button>\n        </span>\n\n        <span *ngIf=\"responseError\">\n          <h3> Opps! something went wrong. Please try again </h3>\n          <br>\n          <br>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" (click)=\"backToDashboard()\">\n            <b><i class=\"material-icons\">arrow_back</i> dashboard</b>\n          </button>\n        </span>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/form-builder.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454;\n  overscroll-behavior: contain; }\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n.margin-top-prop {\n  margin-top: -15px !important; }\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n.mdl-textfield {\n  width: 90% !important; }\n.flagged {\n  color: #5f5f5f;\n  font-size: 16px; }\n.mdl-radio {\n  display: content !important; }\n.background-secondary {\n  background-color: #ffd740;\n  width: 96%;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding-bottom: 2px;\n  padding-top: 7px; }\n.mdl-grid {\n  padding: 0px !important; }\n.demo-card-square.mdl-card {\n  width: 100%;\n  height: 100%; }\n.demo-card-square > .mdl-card__title {\n  color: gray;\n  /*background:\n    url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;*/ }\n.formBox {\n  margin-top: 3px !important; }\n.formBoxHeight {\n  min-height: 84vh;\n  max-height: 84vh;\n  overflow-y: auto; }\n.sectionBreak {\n  margin: auto;\n  height: 18px;\n  text-align: center;\n  color: #424242;\n  background-color: #ffd740;\n  background: #ffd740 !important; }\n.backgroundColorClass {\n  background: #ffd740 !important; }\n.finishMsg {\n  margin: auto;\n  text-align: center;\n  color: #e91e62; }\n.load-bar {\n  position: relative;\n  margin-top: 20px;\n  width: 100%;\n  height: 6px;\n  background-color: #fdba2c; }\n.bar {\n  content: \"\";\n  display: inline;\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 50%;\n  text-align: center; }\n.bar:nth-child(1) {\n  background-color: #da4733;\n  -webkit-animation: loading 3s linear infinite;\n          animation: loading 3s linear infinite; }\n.bar:nth-child(2) {\n  background-color: #3b78e7;\n  -webkit-animation: loading 3s linear 1s infinite;\n          animation: loading 3s linear 1s infinite; }\n.bar:nth-child(3) {\n  background-color: #fdba2c;\n  -webkit-animation: loading 3s linear 2s infinite;\n          animation: loading 3s linear 2s infinite; }\n@-webkit-keyframes loading {\n  from {\n    left: 50%;\n    width: 0;\n    z-index: 100; }\n  33.3333% {\n    left: 0;\n    width: 100%;\n    z-index: 10; }\n  to {\n    left: 0;\n    width: 100%; } }\n@keyframes loading {\n  from {\n    left: 50%;\n    width: 0;\n    z-index: 100; }\n  33.3333% {\n    left: 0;\n    width: 100%;\n    z-index: 10; }\n  to {\n    left: 0;\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/form-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allscript_js__ = __webpack_require__("./src/app/home/forms/form-builder/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormBuilderComponent = (function () {
    function FormBuilderComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.completeArray = [];
        this.jsonArray = [];
        this.formDetails = [];
        this.rules = [];
        this.act_data = [];
        this.display = false;
        this.formError = false;
        this.rule = false;
        this.submitButton = '...';
        this.submitButton2 = 'Are you sure to Submit';
        this.disableSubmitButton = true;
        this.formResponse = false;
        this.displayRequired = 0;
        this.flags = 0;
        this.chunk = { responseTimeStamp: '', formID: '', version: '' };
        this.submitFlag = false;
        this.button1 = true;
        this.button2 = true;
        this.controller = false;
        this.createResponseTimeStamp();
        this.s1 = this.projectService.emitFormResponse.subscribe(function (res) {
            if (res.success) {
                _this.send = true;
                _this.formResponse = true;
                _this.displayRequired = 0;
                _this.flags = 0;
                // POP form form flagged form array
                if (_this.completeArray.Details.rid) {
                    localStorage.removeItem('rules');
                    _this.projectService.popFromFlaggedArray(_this.completeArray.Details.rid);
                }
            }
            else {
                _this.responseError = true;
            }
        });
        this.s2 = this.projectService.emitFormElement.subscribe(function (res) {
            _this.formResponse = true;
            _this.disableSubmitButton = false;
            _this.rule = false;
            console.log(res);
            _this.completeArray = res;
            _this.jsonArray = res.Elements;
            // SKIP FORM IS FLAGGED
            if (res.Details.rid) {
                localStorage.setItem('rules', 'true');
                for (var _i = 0, _a = _this.jsonArray; _i < _a.length; _i++) {
                    var cr = _a[_i];
                    _this.checkForFlag(cr);
                    _this.checkForRequired(cr);
                }
            }
            else {
                localStorage.removeItem('rules');
                for (var _b = 0, _c = _this.jsonArray; _b < _c.length; _b++) {
                    var cr = _c[_b];
                    _this.checkForRules(cr);
                    _this.checkForRequired(cr);
                }
            }
            _this.formDetails = res.Details;
            _this.rules = res.Rules;
            _this.display = true;
        });
        if (!this.rule) {
            this.submitButton = "Proceed";
        }
        this.s3 = this.projectService.emitChunkSuccess.subscribe(function (res) {
            _this.disableSubmitButton = false;
            componentHandler.upgradeDom();
            // Update chunk status
            for (var i = 0; i < _this.completeArray.Elements.length; i++) {
                if (res == _this.completeArray.Elements[i].cid) {
                    _this.completeArray.Elements[i].chunkStatus = true;
                    break;
                }
            }
            // Check if user has submit all elements
            _this.checkForSubmit();
        });
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        this.button2 = false;
    };
    FormBuilderComponent.prototype.createResponseTimeStamp = function () {
        var d = new Date();
        var cid = d.getTime() + "" + Math.floor(1000 + Math.random() * 8999);
        localStorage.setItem('responseTimeStamp', cid);
    };
    FormBuilderComponent.prototype.responseData = function (data) {
        this.button1 = true;
        this.button2 = false;
        componentHandler.upgradeDom();
        console.log(data);
        this.sendChunk(data);
        this.flag = 0;
        this.pos = 0;
        for (var i = 0; i < (this.act_data.length); i++) {
            if (this.act_data[i].cid === data.cid) {
                this.flag = 1;
                this.pos = i;
                break;
            }
        }
        if (this.flag == 1) {
            this.act_data[this.pos].value = data.value;
            this.checkError(data);
            if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
                this.checkForRules(data);
            }
        }
        if (this.flag == 0) {
            this.act_data.push(data);
            this.checkError(data);
            if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
                this.checkForRules(data);
            }
        }
    };
    FormBuilderComponent.prototype.checkForRules = function (data) {
        var flag = 0;
        if (this.completeArray.Rules) {
            if (this.completeArray.Rules.length > 0) {
                var _loop_1 = function (r) {
                    // this.deleteRuleFromJsonArray(data.cid);
                    if (data.cid == this_1.completeArray.Rules[r].elementCid) {
                        var tempDataArray = [];
                        var tempElementValueArray_1 = [];
                        data.value += "";
                        if ((data.value).includes(",")) {
                            tempDataArray = data.value.split(",");
                        }
                        else {
                            if (data.value.length) {
                                var d = (data.value).toString();
                                if (d.includes(",")) {
                                    tempDataArray = d.split(",");
                                }
                                else {
                                    tempDataArray.push(d);
                                }
                            }
                            else {
                                tempDataArray.push(data.value);
                            }
                        }
                        if ((this_1.completeArray.Rules[r].elementValue).includes(",")) {
                            tempElementValueArray_1 = this_1.completeArray.Rules[r].elementValue.split(",");
                        }
                        else {
                            // tempElementValueArray.push(temp.elementValue);
                            if (this_1.completeArray.Rules[r].length) {
                                var d = (this_1.completeArray.Rules[r].elementValue).toString();
                                if (d.includes(",")) {
                                    tempElementValueArray_1 = d.split(",");
                                }
                                else {
                                    tempElementValueArray_1.push(d);
                                }
                            }
                            else {
                                tempElementValueArray_1.push(this_1.completeArray.Rules[r].elementValue);
                            }
                        }
                        if (this_1.completeArray.Rules[r].satisfyAll) {
                            // ----> AND condition starts here <-----
                            //
                            tempDataArray = tempDataArray.sort();
                            tempElementValueArray_1 = tempElementValueArray_1.sort();
                            console.log(tempDataArray);
                            console.log(tempElementValueArray_1);
                            if (tempDataArray.length == tempElementValueArray_1.length && tempDataArray.every(function (v, i) { return v === tempElementValueArray_1[i]; })) {
                                console.log("match");
                                var tempArray = this_1.projectService.getTemplateElement(this_1.completeArray.Rules[r].tempCid);
                                this_1.updateJsonArray(data.cid, tempArray);
                                return "break";
                            }
                            else {
                                console.log(data);
                                this_1.deleteRuleFromJsonArray2(data);
                            }
                            //
                            // ----> AND condition ends here <-----
                        }
                        else {
                            // ----> or condition starts here <-----
                            //
                            for (var m = 0; m < tempDataArray.length; m++) {
                                for (var n = 0; n < tempElementValueArray_1.length; n++) {
                                    if (tempDataArray[m] === tempElementValueArray_1[n]) {
                                        flag = 1;
                                        var tempArray = this_1.projectService.getTemplateElement(this_1.completeArray.Rules[r].tempCid);
                                        this_1.updateJsonArray(data.cid, tempArray);
                                    }
                                    else {
                                        if (flag == 1) {
                                            // break;
                                        }
                                    }
                                }
                            }
                            if (flag == 1) {
                                console.log(data.name + ' matched!');
                                // console.log(data);
                            }
                            else {
                                console.log(data.name + ' not matched!');
                                console.log(data);
                                this_1.deleteRuleFromJsonArray2(data);
                            }
                            //
                            // ----> or condition ends here <-----
                        }
                    }
                };
                var this_1 = this;
                for (var r = 0; r < this.completeArray.Rules.length; r++) {
                    var state_1 = _loop_1(r);
                    if (state_1 === "break")
                        break;
                }
            }
        }
    };
    FormBuilderComponent.prototype.updateJsonArray = function (cid, tempArray) {
        // console.log(tempArray);
        var index;
        var temp1 = [];
        var temp2 = [];
        for (var i = 0; i < this.jsonArray.length; i++) {
            if (this.jsonArray[i].cid == cid) {
                index = i;
                // console.log(index);
            }
        }
        for (var i = 0; i <= index; i++) {
            temp1.push(this.jsonArray[i]);
            // console.log(this.jsonArray[i]);
        }
        for (var i = (index + 1); i < this.jsonArray.length; i++) {
            temp2.push(this.jsonArray[i]);
            // console.log(this.jsonArray[i]);
        }
        this.jsonArray = temp1;
        this.jsonArray = this.jsonArray.concat(tempArray);
        this.jsonArray = this.jsonArray.concat(temp2);
        // console.log(this.jsonArray);
        var temp = this.jsonArray;
        this.jsonArray = Array.from(new Set(this.jsonArray));
        if (this.flags > 0) {
            localStorage.setItem('rules', 'false');
        }
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.deleteRuleFromJsonArray2 = function (data) {
        var tempArray = [];
        var tempArray2 = [];
        for (var r = 0; r < this.completeArray.Rules.length; r++) {
            if (data.cid == this.completeArray.Rules[r].elementCid) {
                tempArray = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
                console.log(tempArray);
                console.log(this.jsonArray);
                for (var r1 = 0; r1 < this.jsonArray.length; r1++) {
                    for (var r2 = 0; r2 < tempArray.length; r2++) {
                        if (this.jsonArray[r1].cid == tempArray[r2].cid) {
                            // console.log(this.jsonArray[r1].name);
                            this.jsonArray.splice(r1, 1);
                        }
                    }
                }
            }
        }
    };
    FormBuilderComponent.prototype.deleteRuleFromJsonArray = function (cid) {
        var index;
        var temp1 = [];
        var temp2 = [];
        for (var i = 0; i < this.jsonArray.length; i++) {
            if (this.jsonArray[i].cid == cid) {
                index = i;
                // console.log(index);
            }
        }
        for (var i = 0; i <= index; i++) {
            temp1.push(this.jsonArray[i]);
            // console.log(this.jsonArray[i]);
        }
        for (var i = (index + 1); i < this.completeArray.Elements.length; i++) {
            temp2.push(this.completeArray.Elements[i]);
            // console.log(this.completeArray.Elements[i]);
            componentHandler.upgradeDom();
        }
        this.jsonArray = temp1;
        this.jsonArray = this.jsonArray.concat(temp2);
        // console.log(this.jsonArray);
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.checkForFlag = function (data) {
        if (data.flagged) {
            this.flags++;
        }
    };
    FormBuilderComponent.prototype.checkForRequired = function (data) {
        if (data.required) {
            this.displayRequired++;
        }
    };
    FormBuilderComponent.prototype.checkError = function (data) {
        if (data.type == 'break') {
            data.value = "N.A";
        }
        if (data.required && data.value == "") {
            for (var i = 0; i <= this.jsonArray.length; i++) {
                if (this.jsonArray[i].cid === data.cid) {
                    this.jsonArray[i].errorMsg = "This feild can't be empty, please provide a valid input!";
                    this.formError = true;
                    console.log(data.name);
                    break;
                }
            }
        }
        else if (data.type != "video" && data.type != "camera" && data.type != "file" && data.type != "location" && data.value.length > 1024) {
            for (var i = 0; i <= this.jsonArray.length; i++) {
                if (this.jsonArray[i].cid === data.cid) {
                    this.jsonArray[i].errorMsg = "Input size should be less than 1024 characters!";
                    this.formError = true;
                    console.log(data.name);
                    break;
                }
            }
        }
        else if ((data.type == "video" || data.type == "camera" || data.type == "file") && data.value.length > 58208800) {
            console.log(data.value.length);
            for (var i = 0; i <= this.jsonArray.length; i++) {
                if (this.jsonArray[i].cid === data.cid) {
                    this.jsonArray[i].errorMsg = "File size should be less than 50 MB!";
                    this.formError = true;
                    console.log(data.name);
                    break;
                }
            }
        }
        else {
            for (var i = 0; i <= this.jsonArray.length; i++) {
                if (data.required && data.value != "") {
                    for (var j = 0; j <= this.jsonArray.length; j++) {
                        if (this.jsonArray[j].cid === data.cid) {
                            this.jsonArray[j].errorMsg = false;
                            if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
                                this.formError = false;
                                // console.log(data.name);
                            }
                            // console.log(this.formError);
                            break;
                        }
                    }
                }
            }
        }
    };
    FormBuilderComponent.prototype.setMetaChunk = function () {
        if (this.completeArray.Details.rid) {
            this.chunk.responseTimeStamp = this.completeArray.Details.rid; // flagged response
        }
        else {
            this.chunk.responseTimeStamp = localStorage.getItem('responseTimeStamp'); // new response
        }
        this.chunk.formID = this.completeArray.Details.cid;
        this.chunk.version = this.completeArray.Details.version;
        console.log(this.chunk.version);
    };
    FormBuilderComponent.prototype.proceedForSumbit = function () {
        this.completeArray.Elements = this.jsonArray;
        // check error start here
        for (var _i = 0, _a = this.jsonArray; _i < _a.length; _i++) {
            var json = _a[_i];
            if (this.flags <= 0) {
                this.checkError(json);
            }
        }
        for (var _b = 0, _c = this.jsonArray; _b < _c.length; _b++) {
            var json = _c[_b];
            if (json.errorMsg) {
                this.formError = true;
            }
        }
        if (!this.formError) {
            this.button1 = false;
            this.button2 = true;
            // check error start here
            for (var _d = 0, _e = this.jsonArray; _d < _e.length; _d++) {
                var json = _e[_d];
                if (this.flags <= 0) {
                    this.checkError(json);
                }
            }
            for (var _f = 0, _g = this.jsonArray; _f < _g.length; _f++) {
                var json = _g[_f];
                if (json.errorMsg) {
                    this.formError = true;
                }
            }
            this.submitFlag = true;
            this.checkAllChunks();
        }
        else {
            this.button1 = true;
            this.button2 = false;
        }
    };
    FormBuilderComponent.prototype.sendChunk = function (data) {
        this.setMetaChunk();
        this.projectService.syncChunk(data, this.chunk);
        this.disableSubmitButton = true;
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.checkAllChunks = function () {
        for (var i = 0; i < this.completeArray.Elements.length; i++) {
            if (!this.completeArray.Elements[i].chunkStatus && this.completeArray.Elements[i].required) {
                this.sendChunk(this.completeArray.Elements[i]);
            }
            else {
                this.checkForSubmit();
            }
        }
    };
    FormBuilderComponent.prototype.checkForSubmit = function () {
        // console.log(" Here ");
        this.controller = true;
        // Check if user has click submit button
        if (this.submitFlag) {
            for (var i = 0; i < this.completeArray.Elements.length; i++) {
                if (this.completeArray.Elements[i].chunkStatus || !this.completeArray.Elements[i].required) {
                    this.controller = true;
                    console.log(i + " Passed ");
                }
                else {
                    this.controller = false;
                    console.log(i + " failed ");
                    break;
                }
            }
        }
    };
    FormBuilderComponent.prototype.saveFormReaponce = function () {
        var id;
        if (this.controller) {
            // emit success
            console.log('data send');
            // Send final submit Response ID
            if (this.completeArray.Details.rid) {
                id = this.completeArray.Details.rid; // flagged response
            }
            else {
                id = localStorage.getItem('responseTimeStamp'); // new response
            }
            this.projectService.sendSubmitResponseID(this.completeArray, id);
            //  this.projectService.emitFormResponse.emit({success: true});
        }
        else {
            // this.responseError = true;
            // data not sync
            // save data offline
            console.log('data not send');
            this.projectService.submitFormArray(this.completeArray);
        }
        this.formResponse = false;
        this.jsonArray = [];
        this.submitButton = "Just a moment";
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.getCurrentLocation = function () {
        this.position = { coords: {
                accuracy: 100,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                latitude: 28.620370899999998,
                longitude: 77.2462516,
                speed: null
            }, timestamp: 1515754375594 };
        // position = navigator.geolocation.getCurrentPosition(showPosition);
        return ("Lat : " + this.position.coords.latitude + ", Lng : " + this.position.coords.longitude);
    };
    FormBuilderComponent.prototype.backToDashboard = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/dash']);
        }, 300);
    };
    FormBuilderComponent.prototype.ngOnDestroy = function () {
        this.s1.unsubscribe();
        this.s2.unsubscribe();
        this.s3.unsubscribe();
    };
    return FormBuilderComponent;
}());
FormBuilderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-builder',
        template: __webpack_require__("./src/app/home/forms/form-builder/form-builder.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/form-builder.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FormBuilderComponent);

var _a, _b;
//# sourceMappingURL=form-builder.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-break/input-break.component.css":
/***/ (function(module, exports) {

module.exports = ".sectionBreak{\n  margin: auto;\n  height:18px;\n  text-align: center;\n  color: #424242;\n  background-color: #ffd740;\n}\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-break/input-break.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--11-col sectionBreak marginAuto\"  > <b> {{json.name}} </b></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-break/input-break.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBreakComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBreakComponent = (function () {
    function InputBreakComponent() {
        this.renponseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputBreakComponent.prototype.ngOnInit = function () {
    };
    return InputBreakComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputBreakComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputBreakComponent.prototype, "renponseData", void 0);
InputBreakComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-break',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-break/input-break.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-break/input-break.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputBreakComponent);

//# sourceMappingURL=input-break.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-camera/input-camera.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-camera/input-camera.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n  body {\n  display: flex;\n  }\n\n  .file_input_div {\n  margin: auto;\n  width: 250px;\n  height: 40px;\n  }\n\n  .file_input {\n  float: left;\n  }\n\n  #file_input_text_div {\n  width: 200px;\n  margin-top: -8px;\n  margin-left: 5px;\n  }\n\n  .none {\n    display: none;\n  }\n\n  img{\n    width: 40%;\n    height: auto;\n    margin: auto;\n  }\n\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col\">{{funID(id)}} . {{json.name}}\n    <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n  </div>\n  <div class=\"mdl-cell mdl-cell--7-col\">\n\n    <span  *ngIf=\"json.helptext\" style=\"float: right\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <div class=\"file_input_div\">\n      <div class=\"file_input\">\n\n        <label class=\"image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n          <i class=\"material-icons\">photo_camera</i>\n          <input id=\"file_input_file101\"  type=\"file\" class=\"none\" accept=\"image/*\" capture=\"camera\"  (change)=\"getVal($event);\" [disabled]='disabled'/>\n          <!-- <input (change)=\"send($event);\" type=\"file\" accept=\"image/*\" capture=\"camera\" /> -->\n\n        </label>\n\n        <div *ngIf=\"name\" style=\"float: right\">\n          <i class=\"material-icons\" style=\"float: right; cursor: pointer;\" (click)=\"deleteFile()\">clear</i>\n\n        </div>\n        <br> <br>\n        <img [src]=\"url\" style=\"\">\n\n        <div *ngIf=\"name\" style=\"float: right; margin: auto;\">\n          {{name}} <br>\n\n          <span *ngIf=\"json.location\">\n            <span  *ngIf=\"!waitingFlag\">\n              <b> Acc - {{json.location.acc}} meters</b>\n              <span class=\"mdl-chip mdl-chip--deletable\" (click)=\"getLocation()\" >\n                  <span class=\"mdl-chip__text\">Refresh location</span>\n                  <button type=\"button\" class=\"mdl-chip__action\"><i class=\"material-icons\">location_on</i></button>\n              </span>\n            </span>\n          </span>\n\n          <span *ngIf=\"waitingFlag\" >\n            Waiting for location...\n          </span>\n\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n\n  <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}} </b> </span>\n  </span>\n\n  <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n  </span>\n\n  <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-camera/input-camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import './allscript.js';
var InputCameraComponent = (function () {
    function InputCameraComponent(projectService) {
        this.projectService = projectService;
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formData = new FormData();
        this.url = "";
        this.disabled = false;
        this.waitingFlag = false;
    }
    ;
    InputCameraComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputCameraComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputCameraComponent.prototype.getVal = function ($event) {
        var _this = this;
        this.formData.delete('file');
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        var fileName = file.name;
        this.name = file.name;
        this.formData = new FormData();
        this.json.fileName = this.name;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            _this.url = event.target.result;
            _this.json.value = reader.result;
            _this.json.location = { lat: 28.622635, lng: 77.247129, acc: 9999 };
            _this.json.location = _this.getLocation();
        };
    };
    InputCameraComponent.prototype.deleteFile = function () {
        this.formData = new FormData();
        this.url = "";
        this.name = "";
        this.json.value = "";
        this.json.fileName = "";
        this.responseData.emit(this.json);
    };
    InputCameraComponent.prototype.getLocation = function () {
        var _this = this;
        this.waitingFlag = true;
        var value;
        var lat;
        var lng;
        var accuracy;
        this.json.location = { lat: 28.622635, lng: 77.247129, acc: 9999 };
        navigator.geolocation.getCurrentPosition(function (res) {
            _this.waitingFlag = false;
            console.log(res);
            value = res;
            lat = value.coords.latitude;
            lng = value.coords.longitude;
            accuracy = value.coords.accuracy;
            _this.json.location = { lat: lat, lng: lng, acc: accuracy };
            console.log(_this.json.location);
            _this.responseData.emit(_this.json);
        }, function (err) {
            console.log(err);
            _this.json.location = { lat: 28.622635, lng: 77.247129, acc: 9999 };
            _this.responseData.emit(_this.json);
        }, {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 10000
        });
    };
    return InputCameraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "responseData", void 0);
InputCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-camera',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-camera/input-camera.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-camera/input-camera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputCameraComponent);

var _a;
//# sourceMappingURL=input-camera.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid  \">\n  <div class=\"mdl-cell mdl-cell--4-col \"> {{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n\n  <div class=\"mdl-cell mdl-cell--8-col marginAuto\">\n    <div *ngFor='let opt of json.option; let i=i' >\n\n\n      <label class = \"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n         <input #flag type = \"checkbox\"  class = \"mdl-checkbox__input\" name=\"checkbox\" value={{opt}} (change)='getVal(flag.checked,opt)' [checked]='checkVal(opt)' [disabled]='disabled' >\n         <span class = \"mdl-checkbox__label\"> {{opt}}</span>\n      </label>\n\n    </div>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputCheckboxComponent = (function () {
    function InputCheckboxComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.resultArray = [];
        this.disabled = false;
    }
    InputCheckboxComponent.prototype.checkVal = function (opt) {
        var flg = false;
        for (var j = 0; j < this.json.values.length; j++) {
            if (opt == this.json.values[j]) {
                flg = true;
            }
        }
        if (flg) {
            return true;
        }
        else {
            return false;
        }
    };
    InputCheckboxComponent.prototype.ngOnInit = function () {
        this.json.value = this.json.values;
        this.resultArray = this.json.values;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputCheckboxComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputCheckboxComponent.prototype.getVal = function (flag, opt) {
        this.json.value = '';
        this.responseData.emit(this.json);
        var temp = 0;
        var pos = 0;
        if (flag) {
            for (var i = 0; i <= this.resultArray.length; i++) {
                if (this.resultArray[i] == opt) {
                    temp = 1;
                }
            }
            if (temp == 0) {
                this.resultArray.push(opt);
            }
            // console.log(this.resultArray);
        }
        else {
            for (var i = 0; i <= this.resultArray.length; i++) {
                if (this.resultArray[i] == opt) {
                    pos = i;
                    break;
                }
            }
            this.resultArray.splice(pos, 1);
            // console.log(this.resultArray);
        }
        this.json.value = this.resultArray;
        this.responseData.emit(this.json);
    };
    return InputCheckboxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "responseData", void 0);
InputCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-checkbox',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputCheckboxComponent);

//# sourceMappingURL=input-checkbox.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-date/input-date.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-date/input-date.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n{{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n<br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"date\" id=\"sample3\" (change)=\"getVal()\" [(ngModel)]='value' min={{json.rangeFrom}} max={{json.rangeTo}}  [disabled]='disabled' >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n        <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n        <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n            <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n        </span>\n\n        <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n            <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n        </span>\n\n        <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-date/input-date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDateComponent = (function () {
    function InputDateComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputDateComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputDateComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputDateComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputDateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "responseData", void 0);
InputDateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-date',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-date/input-date.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-date/input-date.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputDateComponent);

//# sourceMappingURL=input-date.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n  {{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n  <br>\n\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <label class=\"mdl-textfield__label\" ></label>\n      <select [(ngModel)]=\"selectedValue\" class=\"mdl-textfield__input\" id=\"octane\" name=\"octane\" (change)='getVal()'  [disabled]='disabled' >\n\n        <option *ngFor='let opt of json.option; let i=i' [ngValue]=opt  [selected]=\"opt == json.value\">{{opt}}</option>\n      </select>\n      <!-- <label class=\"mdl-textfield__label\" for=\"octane\">{{json.name}}</label> -->\n\n    </div>\n    <span  *ngIf=\"json.helptext\"  class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDropdownComponent = (function () {
    function InputDropdownComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputDropdownComponent.prototype.ngOnInit = function () {
        this.selectedValue = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputDropdownComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputDropdownComponent.prototype.getVal = function () {
        this.json.value = this.selectedValue;
        this.responseData.emit(this.json);
    };
    return InputDropdownComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "responseData", void 0);
InputDropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-dropdown',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputDropdownComponent);

//# sourceMappingURL=input-dropdown.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-email/input-email.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-email/input-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}} <span *ngIf='json.required' class=\"requiredMsg\"> <b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"email\" id=\"sample13\" (change)=\"getVal()\" [(ngModel)]='value'  [disabled]='disabled' >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}}</b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-email/input-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputEmailComponent = (function () {
    function InputEmailComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputEmailComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputEmailComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputEmailComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputEmailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "responseData", void 0);
InputEmailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-email',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-email/input-email.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-email/input-email.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputEmailComponent);

//# sourceMappingURL=input-email.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-file/allscript.js":
/***/ (function(module, exports) {

try{
var fileInputTextDiv = document.getElementById('file_input_text_div');
var fileInput = document.getElementById('file_input_file');
var fileInputText = document.getElementById('file_input_text');

fileInput.addEventListener('change', changeInputText);
fileInput.addEventListener('change', changeState);

function changeInputText() {
  var str = fileInput.value;
  var i;
  if (str.lastIndexOf('\\')) {
    i = str.lastIndexOf('\\') + 1;
  } else if (str.lastIndexOf('/')) {
    i = str.lastIndexOf('/') + 1;
  }
  fileInputText.value = str.slice(i, str.length);
}

function changeState() {
  if (fileInputText.value.length != 0) {
    if (!fileInputTextDiv.classList.contains("is-focused")) {
      fileInputTextDiv.classList.add('is-focused');
    }
  } else {
    if (fileInputTextDiv.classList.contains("is-focused")) {
      fileInputTextDiv.classList.remove('is-focused');
    }
  }
}
}
catch(e){
  
}


/***/ }),

/***/ "./src/app/home/forms/form-builder/input-file/input-file.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-file/input-file.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n  body {\n  display: flex;\n  }\n\n  .file_input_div {\n  margin: auto;\n  width: 250px;\n  height: 40px;\n  }\n\n  .file_input {\n  float: left;\n  }\n\n  #file_input_text_div {\n  width: 200px;\n  margin-top: -8px;\n  margin-left: 5px;\n  }\n\n  .none {\n  display: none;\n  }\n\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col\">{{funID(id)}} . {{json.name}}\n    <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n  </div>\n  <div class=\"mdl-cell mdl-cell--7-col\">\n    <!-- <input type=\"file\"  [accept]=json.fileTypes /> -->\n    <div class=\"file_input_div\">\n  <div class=\"file_input\">\n    <label class=\"image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n      <i class=\"material-icons\">attach_file</i>\n      <input id=\"file_input_file\" class=\"none\" type=\"file\" (change)=\"getVal($event);\" [accept]=json.fileTypes  [disabled]='disabled' />\n\n    </label>\n    {{name}}\n  </div>\n  <!-- <div id=\"file_input_text_div\" class=\"mdl-textfield mdl-js-textfield textfield-demo\">\n\n    <input class=\"file_input_text mdl-textfield__input\" type=\"text\" disabled readonly id=\"file_input_text\" style=\"color:gray\"\n     [(ngModel)]='name'   />\n\n    <label class=\"mdl-textfield__label\" for=\"file_input_text\"></label>\n\n  </div> -->\n</div>\n  </div>\n\n  <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}} </b> </span>\n  </span>\n\n  <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n  </span>\n\n  <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-file/input-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js__ = __webpack_require__("./src/app/home/forms/form-builder/input-file/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFileComponent = (function () {
    function InputFileComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formData = new FormData();
        this.disabled = false;
    }
    ;
    InputFileComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputFileComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputFileComponent.prototype.getVal = function ($event) {
        var _this = this;
        // console.log('1');
        this.formData.delete('file');
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        var fileName = file.name;
        this.name = file.name;
        this.formData = new FormData();
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            _this.json.value = reader.result;
            _this.json.fileName = _this.name;
            _this.responseData.emit(_this.json);
        };
        // this.name = file.name;
        // this.formData = new FormData();
        // let reader = new FileReader();
        // reader.onload = (event:any) => {
        //   this.url = event.target.result;
        //   this.json.value = reader.result;
        // }
        // reader.readAsDataURL(file);
        // this.json.fileName = this.name;
        // this.responseData.emit(this.json);
    };
    return InputFileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "responseData", void 0);
InputFileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-file',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-file/input-file.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-file/input-file.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputFileComponent);

//# sourceMappingURL=input-file.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-location/input-location.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-location/input-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <span *ngIf=\"json.location\">\n      {{funID(id)}} .\n      <span  *ngIf=\"!waitingFlag\">\n         Location:    <b> Acc - {{json.location.acc}} meters</b>\n        <span class=\"mdl-chip mdl-chip--deletable\" (click)=\"getLocation()\" >\n            <span class=\"mdl-chip__text\">Refresh location</span>\n            <button type=\"button\" class=\"mdl-chip__action\"><i class=\"material-icons\">location_on</i></button>\n        </span>\n      </span>\n    </span>\n\n    <span *ngIf=\"waitingFlag\" >\n      Waiting for location...\n    </span>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}}</b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-location/input-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputLocationComponent = (function () {
    function InputLocationComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
        this.waitingFlag = false;
    }
    InputLocationComponent.prototype.ngOnInit = function () {
        this.getLocation();
    };
    InputLocationComponent.prototype.getLocation = function () {
        var _this = this;
        this.waitingFlag = true;
        var value;
        var lat;
        var lng;
        var accuracy;
        this.json.location = { lat: 28.622635, lng: 77.247129, acc: 9999 };
        navigator.geolocation.getCurrentPosition(function (res) {
            _this.waitingFlag = false;
            console.log(res);
            value = res;
            lat = value.coords.latitude;
            lng = value.coords.longitude;
            accuracy = value.coords.accuracy;
            _this.json.location = { lat: lat, lng: lng, acc: accuracy };
            _this.json.value = 'some location';
            console.log(_this.json.location);
            _this.responseData.emit(_this.json);
        }, function (err) {
            console.log(err);
            _this.json.location = { lat: 28.622635, lng: 77.247129, acc: 9999 };
            _this.json.value = 'some location';
            _this.responseData.emit(_this.json);
        }, {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 10000
        });
    };
    InputLocationComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    return InputLocationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputLocationComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputLocationComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputLocationComponent.prototype, "responseData", void 0);
InputLocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-location',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-location/input-location.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-location/input-location.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputLocationComponent);

//# sourceMappingURL=input-location.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-number/input-number.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-number/input-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n{{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"number\" id=\"sample3\" (change)=\"getVal()\" [(ngModel)]='value' min={{json.rangeFrom}} max={{json.rangeTo}}  [disabled]='disabled' >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n          <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n          <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n              <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n          </span>\n\n          <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n              <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n          </span>\n\n          <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-number/input-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputNumberComponent = (function () {
    function InputNumberComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputNumberComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputNumberComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputNumberComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputNumberComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "responseData", void 0);
InputNumberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-number',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-number/input-number.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-number/input-number.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputNumberComponent);

//# sourceMappingURL=input-number.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-password/input-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span *ngIf='json.required' class=\" requiredMsg\"><b> * </b> </span>\n\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"password\" id=\"sample113\"  (change)=\"getVal()\" [(ngModel)]='value'  [disabled]='disabled' >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-password/input-password.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-password/input-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputPasswordComponent = (function () {
    function InputPasswordComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputPasswordComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputPasswordComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputPasswordComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputPasswordComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "responseData", void 0);
InputPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-password',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-password/input-password.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-password/input-password.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InputPasswordComponent);

//# sourceMappingURL=input-password.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-phone/input-phone.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-phone/input-phone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\"  (change)=\"getVal()\" [(ngModel)]='value'  [disabled]='disabled' >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-phone/input-phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputPhoneComponent = (function () {
    function InputPhoneComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputPhoneComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputPhoneComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputPhoneComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputPhoneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "responseData", void 0);
InputPhoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-phone',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-phone/input-phone.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-phone/input-phone.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputPhoneComponent);

//# sourceMappingURL=input-phone.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-radio/input-radio.component.css":
/***/ (function(module, exports) {

module.exports = ".mdl-radio{\n  display: content !important;\n}\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-radio/input-radio.component.html":
/***/ (function(module, exports) {

module.exports = "<style media=\"screen\">\n.mdl-radio{\n  display: content !important;\n}\n</style>\n<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\"> {{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col\" >\n    <div *ngFor='let opt of json.option; let i=i' (change)='getVal(opt)'>\n\n      <label class = \"mdl-radio mdl-js-radio mdl-js-ripple-effect\" style=\"display: content !important;\">\n        <input type = \"radio\" class = \"mdl-radio__button\" value={{opt.trim()}}   name=\"radiogroup{{funID(id)}}\"  [checked]='opt.trim() == json.value.trim()' [disabled]='disabled' >\n        <span class = \"mdl-radio__label\">{{opt}}</span>\n      </label>\n\n    </div>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n  </div>\n</div>\n\n\n<!-- <div *ngFor='let opt of option; let i=i' >\n\n  <input type=\"radio\" value={{opt}} name=\"radiogroup\"  [checked]='opt == value' >  {{opt}}\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-radio/input-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputRadioComponent = (function () {
    function InputRadioComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputRadioComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputRadioComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputRadioComponent.prototype.getVal = function (opt) {
        // console.log(opt);
        this.json.value = "";
        this.responseData.emit(this.json);
        this.json.value = opt;
        this.responseData.emit(this.json);
    };
    return InputRadioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "responseData", void 0);
InputRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-radio',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-radio/input-radio.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-radio/input-radio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputRadioComponent);

//# sourceMappingURL=input-radio.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-slider/input-slider.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-slider/input-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--4-col\">{{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n  <div class=\"mdl-cell mdl-cell--6-col\">\n    <!-- <form oninput=\"x.value=parseInt(a.value)\" >\n      {{rangeFrom}}<input class=\" form-control-sm\"  type=\"range\"  min={{rangeFrom}} max={{rangeTo}} id=\"a\" (change)='getVal()'  >{{rangeTo}}\n\n     &nbsp; &nbsp; value =  <output #val name=\"x\" for=\"a \" > {{value}} </output>\n\n    </form> -->\n    <form oninput=\"x.value=parseInt(a.value)\">\n\n      {{json.rangeFrom}} to {{json.rangeTo}}\n      <input id = \"slider2\" class = \"mdl-slider mdl-js-slider\" type = \"range\"\n              min = {{json.rangeFrom}} max = {{json.rangeTo}} id=\"a\" (change)='getVal()'  [disabled]='disabled' >\n\n\n\n      &nbsp; &nbsp; value =  <output #val name=\"x\" for=\"a \" > {{json.value}} </output>\n\n    </form>\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-slider/input-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputSliderComponent = (function () {
    function InputSliderComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputSliderComponent.prototype.ngOnInit = function () {
        this.val = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputSliderComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputSliderComponent.prototype.getVal = function () {
        this.json.value = this.output.nativeElement.value;
        this.responseData.emit(this.json);
    };
    return InputSliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "responseData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('val'),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "output", void 0);
InputSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-slider',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-slider/input-slider.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-slider/input-slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputSliderComponent);

//# sourceMappingURL=input-slider.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-text/input-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" >\n      <input class=\"mdl-textfield__input\" type=\"text\" (change)=\"getVal()\" [(ngModel)]='value' [disabled]='disabled'>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n      <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n      <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n          <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n      </span>\n\n      <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n          <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n      </span>\n\n      <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-text/input-text.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454;\n  overscroll-behavior: contain; }\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n.margin-top-prop {\n  margin-top: -15px !important; }\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n.mdl-textfield {\n  width: 90% !important; }\n.flagged {\n  color: #5f5f5f;\n  font-size: 16px; }\n.mdl-radio {\n  display: content !important; }\n.requiredMsg {\n  color: #e91e62;\n  font-size: .9rem; }\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-text/input-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputTextComponent = (function () {
    function InputTextComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputTextComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputTextComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputTextComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputTextComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "responseData", void 0);
InputTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-text',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-text/input-text.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-text/input-text.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InputTextComponent);

//# sourceMappingURL=input-text.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-textarea/input-textarea.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-textarea/input-textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield\">\n      <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"3\" id=\"sample5\"  (change)=\"getVal()\" [(ngModel)]='value'  [disabled]='disabled' ></textarea>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n    <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n    </span>\n\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-textarea/input-textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputTextareaComponent = (function () {
    function InputTextareaComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputTextareaComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputTextareaComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputTextareaComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputTextareaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "responseData", void 0);
InputTextareaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-textarea',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-textarea/input-textarea.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-textarea/input-textarea.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputTextareaComponent);

//# sourceMappingURL=input-textarea.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-time/input-time.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-time/input-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n{{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n<br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"time\" id=\"sample3\"  (change)=\"getVal()\" [(ngModel)]='value'  min={{json.rangeFrom}} max={{json.rangeTo}}  [disabled]='disabled' >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n        <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n        <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n            <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n        </span>\n        <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n            <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n        </span>\n\n        <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-time/input-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputTimeComponent = (function () {
    function InputTimeComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    InputTimeComponent.prototype.ngOnInit = function () {
        this.value = this.json.value;
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputTimeComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputTimeComponent.prototype.getVal = function () {
        this.json.value = this.value;
        this.responseData.emit(this.json);
    };
    return InputTimeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "responseData", void 0);
InputTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-time',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-time/input-time.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-time/input-time.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputTimeComponent);

//# sourceMappingURL=input-time.component.js.map

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-video/input-video.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-video/input-video.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n  body {\n  display: flex;\n  }\n\n  .file_input_div {\n  margin: auto;\n  width: 250px;\n  height: 40px;\n  }\n\n  .file_input {\n  float: left;\n  }\n\n  #file_input_text_div {\n  width: 200px;\n  margin-top: -8px;\n  margin-left: 5px;\n  }\n\n  .none {\n    display: none;\n  }\n\n  img{\n    width: 40%;\n    height: auto;\n    margin: auto;\n  }\n\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col\">{{funID(id)}} . {{json.name}}\n    <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n  </div>\n  <div class=\"mdl-cell mdl-cell--7-col\">\n\n    <span  *ngIf=\"json.helptext\" style=\"float: right\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <div class=\"file_input_div\">\n      <div class=\"file_input\">\n\n        <label class=\"image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n          <i class=\"material-icons\">videocam</i>\n          <input id=\"file_input_file101{{funID(id)}}\"  type=\"file\" class=\"none\" accept=\"video/*\" capture=\"camcorder\"  (change)=\"getVal($event);\"  [disabled]='disabled'  />\n        </label>\n\n        <div *ngIf=\"name\" style=\"float: right\">\n          <i class=\"material-icons\" style=\"float: right; cursor: pointer;\" (click)=\"deleteFile()\">clear</i>\n        </div>\n        <br> <br>\n\n        <video *ngIf=\"url\" width=\"230vbh\" height=\"140vbh\" controls style=\"margin-left:-0px !important\">\n          <source [src]=\"url\" >\n          Browser does not support the video tag.\n        </video>\n\n        <div *ngIf=\"name\" style=\"float: right; margin: auto;\">\n          {{name}}\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n\n  <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}} </b> </span>\n  </span>\n  <span *ngIf='json.flagged' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text flagged\"><b>  <i class=\"material-icons\">assistant_photo</i> {{json.flagMsg}} </b> </span>\n  </span>\n\n  <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/form-builder/input-video/input-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import './allscript.js';
var InputVideoComponent = (function () {
    function InputVideoComponent() {
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formData = new FormData();
        this.url = "";
        this.disabled = false;
    }
    ;
    InputVideoComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('rules') && !this.json.flagged) {
            this.disabled = true;
        }
    };
    InputVideoComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputVideoComponent.prototype.getVal = function ($event) {
        var _this = this;
        // console.log('1');
        this.formData.delete('file');
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        var fileName = file.name;
        this.name = file.name;
        console.log(file);
        this.formData = new FormData();
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            _this.url = event.target.result;
            _this.json.value = reader.result;
            _this.json.fileName = _this.name;
            _this.responseData.emit(_this.json);
        };
    };
    InputVideoComponent.prototype.deleteFile = function () {
        this.formData = new FormData();
        this.url = "";
        this.name = "";
        this.json.value = "";
        this.responseData.emit(this.json);
    };
    return InputVideoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "responseData", void 0);
InputVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-video',
        template: __webpack_require__("./src/app/home/forms/form-builder/input-video/input-video.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/form-builder/input-video/input-video.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputVideoComponent);

//# sourceMappingURL=input-video.component.js.map

/***/ }),

/***/ "./src/app/home/forms/forms.component.css":
/***/ (function(module, exports) {

module.exports = ".formBox{\n  background-color: #fff;\n\n  margin: auto;\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/home/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet mdl-cell--11-col-phone formBox mdl-shadow--4dp\">\n    <app-form-builder></app-form-builder>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsComponent = (function () {
    function FormsComponent(projectService, route, activatedRoute) {
        this.projectService = projectService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.projectService.emitFormElement.subscribe(function (res) {
            // console.log(res);
        });
    }
    FormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("here2");
        var sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.fcid = params.id;
            _this.templateCid = params.templateCid;
            _this.flaggedResponseid = params.flagResId;
            if (_this.fcid != undefined) {
                _this.projectService.getFormByCid(_this.fcid);
            }
            if (_this.templateCid != undefined) {
                _this.projectService.getTemplateByCid(_this.templateCid);
            }
            if (_this.flaggedResponseid != undefined) {
                _this.projectService.getFlaggedResponseid(_this.flaggedResponseid);
            }
        });
    };
    FormsComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forms',
        template: __webpack_require__("./src/app/home/forms/forms.component.html"),
        styles: [__webpack_require__("./src/app/home/forms/forms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], FormsComponent);

var _a, _b, _c;
//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ "./src/app/home/help/help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n.demo-card-wide.mdl-card {\n  margin:  auto;\n  width: 94%;\n  margin-top: 1rem;\n  height:86vh;\n}\n.demo-card-wide > .mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('/assets/help.jpg') center / cover;\n}\n.demo-card-wide > .mdl-card__menu {\n  color: #fff;\n}\n.mdl-card__supporting-text{\n  color:#404040;\n}\n</style>\n\n<div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n  <div class=\"mdl-card__title\">\n    <h2 class=\"mdl-card__title-text\">We are here to help you</h2>\n  </div>\n  <div class=\"mdl-card__supporting-text\">\n    Please select the category under which you are calling for help followed by optional description.\n    We will get back to you ASAP.\n  </div>\n\n  <div class=\"mdl-card__supporting-text\">\n    <div *ngFor='let opt of options; let i=i' >\n      <label class = \"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n         <input #flag type = \"checkbox\"  class = \"mdl-checkbox__input\" name=\"checkbox\" value={{opt}} (change)='getVal(flag.checked,opt)' [disabled]='disabled'>\n         <span class = \"mdl-checkbox__label\"> {{opt}}</span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"mdl-card__supporting-text\" style=\"width:100%\">\n    <div class=\"mdl-textfield mdl-js-textfield\" style=\"width:100%\">\n      <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"2\"  ></textarea>\n      <label class=\"mdl-textfield__label\" >Description (Optional)</label>\n    </div>\n  </div>\n\n  <div class=\"mdl-card__actions mdl-card--border\" style=\"margin: auto\">\n    <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored\" style=\"margin-left:35%;     height: 43px;\">\n     <i class=\"material-icons \" style=\"font-size:3rem\">nature_people</i>  <b style=\"letter-spacing:3px\"> SOS </b>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
        this.options = ["App Issue", "Location Issue", "Device Malfunction", "Other"];
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help',
        template: __webpack_require__("./src/app/home/help/help.component.html"),
        styles: [__webpack_require__("./src/app/home/help/help.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard></app-dashboard> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, toastr, vcr) {
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
        this.router.navigate(['/']);
    }
    HomeComponent.prototype.ngOnInit = function () {
        // toaster works!
        // this.toastr.success('You are awesome!', 'Success!');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/home/templates/templates.component.css":
/***/ (function(module, exports) {

module.exports = ".formBox{\n  background-color: #fff;\n\n  margin: auto;\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/home/templates/templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet mdl-cell--11-col-phone formBox mdl-shadow--4dp\">\n    <app-form-builder></app-form-builder>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/templates/templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplatesComponent = (function () {
    function TemplatesComponent(projectService, route, activatedRoute) {
        this.projectService = projectService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.projectService.emitFormElement.subscribe(function (res) {
            // console.log(res);
        });
    }
    TemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.fcid = params.id;
            _this.templateCid = params.templateCid;
            if (_this.fcid != undefined) {
                _this.projectService.getFormByCid(_this.fcid);
            }
            if (_this.templateCid != undefined) {
                _this.projectService.getTemplateByCid(_this.templateCid);
            }
        });
    };
    TemplatesComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    return TemplatesComponent;
}());
TemplatesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-templates',
        template: __webpack_require__("./src/app/home/templates/templates.component.html"),
        styles: [__webpack_require__("./src/app/home/templates/templates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], TemplatesComponent);

var _a, _b, _c;
//# sourceMappingURL=templates.component.js.map

/***/ }),

/***/ "./src/app/home/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet  \"  style=\"\"></div>\n  <div class=\"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet  demo-card-square mdl-card mdl-shadow--2dp\"  style=\" height:80vh; text-align:center\">\n      <br>\n      <i class=\"material-icons\" style=\"font-size: 5rem\" >face</i>\n\n      +91 - {{phone}}\n    <hr>\n\n    <h4 style=\"text-align:left\" > &nbsp; Change Password  </h4>\n\n    <div style=\"text-align: center\" >\n\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" type=\"password\" id=\"sample3\" [(ngModel)]='oldPwd'>\n        <label class=\"mdl-textfield__label\" for=\"sample3\">Old password</label>\n      </div>\n\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" type=\"password\" id=\"sample1\" [(ngModel)]='newPwd1'>\n        <label class=\"mdl-textfield__label\" for=\"sample1\">New password</label>\n      </div>\n\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input\" type=\"password\" id=\"sample2\" [(ngModel)]='newPwd2'  (change)=\"checkNewPassword()\">\n        <label class=\"mdl-textfield__label\" for=\"sample2\">New password</label>\n      </div>\n\n      <span *ngIf=\"errorFlag\">\n        <p style=\"color: red\" >* New password doesn't match</p>\n      </span>\n\n    </div>\n\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" (click)=\"updatePassword()\">\n     <b>Update  <i class=\"material-icons\">send</i></b>\n    </button>\n\n  </div>\n  <div class=\"mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet  \"  style=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(projectService) {
        this.projectService = projectService;
        this.errorFlag = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.phone = localStorage.getItem('phone');
    };
    UserProfileComponent.prototype.updatePassword = function () {
        this.checkNewPassword();
        if (!this.errorFlag) {
            this.checkNewPassword();
            this.projectService.updatePassword(this.oldPwd, this.newPwd1);
        }
    };
    UserProfileComponent.prototype.checkNewPassword = function () {
        if (this.newPwd1 === this.newPwd2) {
            this.errorFlag = false;
        }
        else {
            this.errorFlag = true;
        }
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("./src/app/home/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("./src/app/home/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".mdl-layout {\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-layout__content {\n\tpadding: 1vh;\n\t-webkit-box-flex: 0;\n\t    -ms-flex: none;\n\t        flex: none;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-color--grey-100\" style=\"justify-content: center !important;\">\n\t<main class=\"mdl-layout__content\">\n\t\t<div class=\"mdl-card mdl-shadow--6dp\">\n\t\t\t<div class=\"mdl-card__title mdl-color--primary mdl-color-text--white\">\n\t\t\t\t<h2 class=\"mdl-card__title-text\">QCI Survey </h2>\n\t\t\t</div>\n\t  \t<div class=\"mdl-card__supporting-text\">\n        <h5>Assessor module</h5>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield\">\n\t\t\t\t\t\t<input class=\"mdl-textfield__input\" type=\"text\" id=\"username\" [(ngModel)]='phone'/>\n\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"username\"  >Phone No.</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield\">\n\t\t\t\t\t\t<input class=\"mdl-textfield__input\" type=\"password\" id=\"userpass\" [(ngModel)]='password'/>\n\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"userpass\"  >Password</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"mdl-card__actions mdl-card--border\">\n\t\t\t\t<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored \" (click)='login()'>Log in </button>\n\t\t\t</div>\n\t\t</div>\n\t</main>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("./src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.projectService.checkLogin();
        this.projectService.emitUserLogin.subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.phone);
        console.log(this.password);
        var formData = new FormData();
        formData.append('phone', this.phone);
        formData.append('pwd', this.password);
        this.projectService.login(formData);
        localStorage.setItem('phone', this.phone);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/service/APIService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APIService = (function () {
    function APIService(http) {
        this.http = http;
        // projectURL: string = 'http://192.168.15.187:8000';
        this.projectURL = 'https://qcitech.org:8083';
    }
    APIService.prototype.createAuthorizationHeader = function (headers) {
        this.userID = localStorage.getItem('token');
        // console.log(this.userID);
        headers.append('Authorization', this.userID);
    };
    APIService.prototype.Login = function (data) {
        return this.http.post(this.projectURL + '/assesorLogin', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.SyncAll = function () {
        return this.http.get(this.projectURL + '/gettestforms').map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdatePassword = function (oldpwd, newpwd) {
        var formData = new FormData();
        formData.append('oldpwd', oldpwd);
        formData.append('newpwd', newpwd);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/changeAsrPassword', formData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetFormArray = function (form_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var formData = new FormData();
        formData.append('form_token', form_token);
        return this.http.post(this.projectURL + '/getAssesorForms', formData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetFlaggedResponses = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getFlaggedResponses', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.SubmitResponse = function (formArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        formArray = JSON.stringify(formArray);
        formArray = JSON.parse(formArray);
        formArray = JSON.stringify(formArray);
        var formData = new FormData();
        formData.append('resArray', formArray);
        return this.http.post(this.projectURL + '/submitAssesorResponse', formData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.SyncChunk = function (data, chunk) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        data = JSON.stringify(data);
        data = JSON.parse(data);
        data = JSON.stringify(data);
        var chunkData = new FormData();
        chunkData.append('data', data);
        chunk = JSON.stringify(chunk);
        chunk = JSON.parse(chunk);
        chunk = JSON.stringify(chunk);
        chunkData.append('chunk', chunk);
        return this.http.post(this.projectURL + '/submitChunkResponse', chunkData, { headers: headers }).map(function (res) { return res.json(); });
        // setTimeout( () => {}, 5000)
    };
    APIService.prototype.SyncMeta = function (meta) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        meta = JSON.stringify(meta);
        meta = JSON.parse(meta);
        meta = JSON.stringify(meta);
        var metaData = new FormData();
        metaData.append('meta', meta);
        return this.http.post(this.projectURL + '/startResponse', metaData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.SendSubmitResponseID = function (id, flag) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var responseID = new FormData();
        responseID.append('id', id);
        responseID.append('flag', flag);
        return this.http.post(this.projectURL + '/submitResponseID', responseID, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.CheckImage = function (image) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/check', image).map(function (res) { return res.json(); });
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=APIService.js.map

/***/ }),

/***/ "./src/app/service/ProjectService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__APIService__ = __webpack_require__("./src/app/service/APIService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_indexeddb__ = __webpack_require__("./node_modules/angular2-indexeddb/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = (function () {
    function ProjectService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.vibrateDuration0 = 100;
        this.vibrateDuration1 = 200;
        this.emitFormElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormCard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitSyncResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUserLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOfflineResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitIndexedDBInitializedRes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFlaggedFormArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitForm_sync = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitofflineFormIdArrray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitChunkSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOfflineChunkSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOnlineFormCount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formArray = [];
        this.offlineFormIdArrray = [];
        this.flaggedFormArray = [];
        this.formCard = [];
        this.templateArray = [];
        this.storeFormArrayTemp = [];
        this.chunk = { responseTimeStamp: '', formID: '', version: '' };
        this.db = new __WEBPACK_IMPORTED_MODULE_3_angular2_indexeddb__["a" /* AngularIndexedDB */]('responseDB', 1);
    }
    ProjectService.prototype.cid = function () {
        var d = new Date();
        var cid = d.getTime() + "" + Math.floor(1000 + Math.random() * 8999);
        return cid;
    };
    ProjectService.prototype.cdate = function () {
        var d = new Date();
        var cdate = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours();
        var min = d.getMinutes();
        var min2 = "";
        if (min < 10) {
            min2 = "0" + min;
        }
        else {
            min2 = "" + min;
        }
        cdate += ":" + min2;
        return cdate;
    };
    ProjectService.prototype.login = function (data) {
        var _this = this;
        this.apiService.Login(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                localStorage.setItem('token', res.token);
                localStorage.setItem('form_token', res.form_token);
                _this.emitUserLogin.emit({ success: true, msg: res.message });
            }
            else { }
        }, function (err) {
            console.log(err);
            alert("Invalid credentials!");
        });
    };
    ProjectService.prototype.checkLogin = function () {
        if (localStorage.getItem('token')) {
            // normal notification example
            // Notification.requestPermission(function(permission){
            //     let notification = new Notification("Title",{body:'Form updated!',icon:'./assets/icons/icon-256x256', dir:'auto'});
            //     setTimeout(function(){
            //         notification.close();
            //     },6000);
            // });
            // navigator.serviceWorker.register('worker-basic.min.js');
            // Notification.requestPermission(function(result) {
            //   if (result === 'granted') {
            //     navigator.serviceWorker.ready.then(function(registration) {
            //       registration.showNotification("Form updated!",{body:'Looks like a form was recently updated. ',icon:'./assets/icons/icon-256x256', dir:'auto'});
            //     });
            //   }
            // });
            this.router.navigate(['./']);
        }
    };
    ProjectService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('flaggedForms');
        localStorage.removeItem('formArray');
        localStorage.removeItem('form_online_count');
        localStorage.removeItem('form_sync');
        localStorage.removeItem('form_token');
        localStorage.removeItem('phone');
        localStorage.removeItem('responseTimeStamp');
        localStorage.removeItem('tempArray');
        localStorage.removeItem('tempArray2');
        var request = indexedDB.deleteDatabase('responseDB');
        window.location.reload(true);
        this.router.navigate(['./login']);
    };
    ProjectService.prototype.updatePassword = function (oldpwd, newpwd) {
        var _this = this;
        this.apiService.UpdatePassword(oldpwd, newpwd).subscribe(function (res) {
            if (res.success) {
                console.log(res);
                alert('Password changed!');
                _this.logout();
            }
            else {
                console.log(res);
                alert(res.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.checkImage = function (image) {
        this.apiService.CheckImage(image).subscribe(function (res) {
            console.log(res);
        });
    };
    ProjectService.prototype.getFormCards = function () {
        this.emitFormCard.emit(this.formCard);
    };
    ProjectService.prototype.getFormByCid = function (cid) {
        for (var _i = 0, _a = this.formArray; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.Details.cid == cid) {
                this.emitFormElement.emit(i);
                break;
            }
        }
    };
    ProjectService.prototype.getFlaggedResponseid = function (rid) {
        for (var _i = 0, _a = this.flaggedFormArray; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.Details.rid == rid) {
                this.emitFormElement.emit(i);
                break;
            }
        }
    };
    ProjectService.prototype.popFromFlaggedArray = function (rid) {
        for (var i = 0; i < this.flaggedFormArray.length; i++) {
            if (this.flaggedFormArray[i].Details.rid == rid) {
                this.flaggedFormArray.splice(i, 1);
                break;
            }
        }
    };
    ProjectService.prototype.getTemplateElement = function (tempCid) {
        // console.log(tempCid);
        for (var _i = 0, _a = this.templateArray; _i < _a.length; _i++) {
            var temp = _a[_i];
            if (temp.Details.cid == tempCid) {
                // console.log(temp.Elements);
                return temp.Elements;
            }
        }
    };
    ProjectService.prototype.getTemplateByCid = function (tempCid) {
        for (var _i = 0, _a = this.templateArray; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.Details.cid == tempCid) {
                this.emitFormElement.emit(i);
                break;
            }
        }
    };
    ProjectService.prototype.storeFormArray = function (formArray) {
        this.storeFormArrayTemp = formArray;
    };
    ProjectService.prototype.syncAll = function () {
        var _this = this;
        this.db.getAll('asrResponse').then(function (response) {
            // console.log(response);
            if (response.length) {
                for (var i = 0; i < response.length; i++) {
                    console.log(response[i]);
                    for (var j = 0; j < response[i].response.ResElements.length; j++) {
                        response[i].response.ResElements[j].chunkStatus = false;
                        // console.log(response[i].response.ResElements[j]);
                    }
                    _this.syncOffline1(response[i]);
                    // let sub1 = this.apiService.SubmitResponse(response[i].response).subscribe(res=>{
                    //   // console.log(res);
                    //   if(res.success){
                    //     this.emitSyncResponse.emit({success:true, msg:"synced!"});
                    //     this.db.delete('asrResponse', response[i].id).then(() => {
                    //       navigator.vibrate(this.vibrateDuration0);
                    //       // console.log('response deleted at position ', +i, response[i].id);
                    //     }, (error) => {
                    //         console.log(error);
                    //         alert("Some error detected! Please try again");
                    //         window.location.reload();
                    //     });
                    //     sub1.unsubscribe();
                    //   } else {
                    //     this.emitSyncResponse.emit({success:false, msg:"not-synced!"});
                    //   }
                    // },err=> {
                    //   console.log(err);
                    //   this.emitSyncResponse.emit({success:false, msg:"not-synced!"});
                    //   sub1.unsubscribe();
                    // });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProjectService.prototype.syncOffline1 = function (res) {
        var _this = this;
        this.sub1 = this.emitOfflineChunkSuccess.subscribe(function (cid) {
            for (var i = 0; i < res.response.ResElements.length; i++) {
                if (cid == res.response.ResElements[i].cid) {
                    res.response.ResElements[i].chunkStatus = true;
                    _this.checkAllOfflineChunk4(res);
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.setMetaChunk2(res);
    };
    ProjectService.prototype.setMetaChunk2 = function (res) {
        var _this = this;
        this.chunk.responseTimeStamp = res.response.ResCid;
        this.chunk.formID = res.response.ResDetails.cid;
        this.chunk.version = res.response.ResDetails.version;
        this.apiService.SyncMeta(this.chunk).subscribe(function (res2) {
            console.log(_this.chunk);
            if (res2.success) {
                for (var i = 0; i < res.response.ResElements.length; i++) {
                    // console.log(res.response.ResElements[i].chunkStatus);
                    if (!res.response.ResElements[i].chunkStatus) {
                        // setTimeout( () => this.syncChunkOffline(res.response.ResElements[i], this.chunk), 5000);
                        _this.syncChunkOffline3(res, res.response.ResElements[i]);
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.syncChunkOffline3 = function (res, data) {
        var _this = this;
        var chunk = { responseTimeStamp: '', formID: '', version: '' };
        chunk.responseTimeStamp = res.response.ResCid;
        chunk.formID = res.response.ResDetails.cid;
        chunk.version = res.response.ResDetails.version;
        console.log(data);
        console.log(chunk);
        var sub1 = this.apiService.SyncChunk(data, chunk).subscribe(function (res) {
            // console.log(sum);
            // console.log(res);
            if (res.success) {
                _this.emitOfflineChunkSuccess.emit(data.cid);
            }
            sub1.unsubscribe();
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.checkAllOfflineChunk4 = function (res) {
        var syncFlag = false;
        for (var i = 0; i < res.response.ResElements.length; i++) {
            if (res.response.ResElements[i].chunkStatus) {
                syncFlag = true;
            }
            else {
                syncFlag = false;
                break;
            }
        }
        if (syncFlag) {
            this.sendSubmitOfflineResponseID5(res);
        }
    };
    ProjectService.prototype.sendSubmitOfflineResponseID5 = function (res) {
        var _this = this;
        console.log(res);
        this.apiService.SendSubmitResponseID(res.response.ResCid, 'Offline').subscribe(function (res2) {
            // console.log(res2);
            if (res2.success) {
                _this.emitSyncResponse.emit({ success: true, msg: "synced!" });
                _this.db.delete('asrResponse', res.id).then(function () {
                    // navigator.vibrate(this.vibrateDuration0);
                }, function (error) {
                    console.log(error);
                    alert("Some error detected! Please try again");
                    window.location.reload();
                });
            }
            else {
                alert('Some error occurs!');
            }
        }, function (err) {
            console.log(err);
            alert('Some error occurs!');
        });
    };
    ProjectService.prototype.getFormArray = function () {
        var _this = this;
        this.formArray = [];
        if (navigator.onLine) {
            var form_token = localStorage.getItem('form_token');
            this.apiService.GetFormArray(form_token).subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.emitForm_sync.emit(res.form_sync);
                    localStorage.setItem('form_sync', JSON.stringify(res.form_sync));
                    localStorage.setItem('form_online_count', JSON.stringify(res.onlineResponses));
                    if (res.form_token != localStorage.getItem('form_token')) {
                        // token dosen't match
                        // navigator.vibrate(this.vibrateDuration1);
                        localStorage.setItem('form_token', res.form_token);
                        _this.saveOfflineFormAndTemplate(res.formArray, res.tempArray);
                        _this.getOfflineFormAndTemplate();
                    }
                    else {
                        // token matches
                        _this.getOfflineFormAndTemplate();
                    }
                }
                else { }
            }, function (err) {
                console.log(err);
                _this.getOfflineFormAndTemplate();
            });
        }
        else {
            this.getOfflineFormAndTemplate();
        }
    };
    ProjectService.prototype.saveOfflineFormAndTemplate = function (formArray, tempArray) {
        localStorage.setItem('formArray', JSON.stringify(formArray));
        localStorage.setItem('tempArray', JSON.stringify(tempArray));
        if (!('Notification' in window)) {
            console.log('Web Notification not supported');
        }
        else {
            console.log('Web Notification is supported');
            Notification.requestPermission(function (permission) {
                // let notification = new Notification("Title",{body:'Form updated!',icon:'http://i.stack.imgur.com/Jzjhz.png?s=48&g=1', dir:'auto'});
                // setTimeout(function(){
                //     notification.close();
                // },6000);
                navigator.serviceWorker.register('worker-basic.min.js');
                Notification.requestPermission(function (result) {
                    if (result === 'granted') {
                        navigator.serviceWorker.ready.then(function (registration) {
                            registration.showNotification("Form updated!", { body: 'Looks like a form was recently updated. ', icon: './assets/icons/icon-256x256.png', dir: 'auto' });
                        });
                    }
                });
            });
        }
    };
    ProjectService.prototype.getOfflineFormAndTemplate = function () {
        var formArray = JSON.parse(localStorage.getItem('formArray'));
        var tempArray = JSON.parse(localStorage.getItem('tempArray'));
        var onlineCount = JSON.parse(localStorage.getItem('form_online_count'));
        this.emitForm_sync.emit(localStorage.getItem('form_sync'));
        if (formArray.length) {
            for (var i = 0; i < formArray.length; i++) {
                this.formArray.push(formArray[i].form_json);
            }
        }
        if (tempArray.length) {
            for (var i = 0; i < tempArray.length; i++) {
                this.templateArray.push(tempArray[i].temp_json);
            }
        }
        this.emitFormArray.emit(this.formArray);
        this.emitOnlineFormCount.emit(onlineCount);
    };
    ProjectService.prototype.getFlaggedResponses = function () {
        var _this = this;
        this.flaggedFormArray = [];
        this.apiService.GetFlaggedResponses().subscribe(function (res) {
            console.log(res);
            if (res) {
                if (res.formArray.length) {
                    for (var i = 0; i < res.formArray.length; i++) {
                        _this.flaggedFormArray.push(res.formArray[i].form_json);
                    }
                }
                // save data in offline storage
                localStorage.setItem('flaggedForms', JSON.stringify(_this.flaggedFormArray));
                _this.emitFlaggedFormArray.emit(_this.flaggedFormArray);
            }
            else {
                var temp = void 0;
                temp = localStorage.getItem('flaggedForms');
                _this.flaggedFormArray = JSON.parse(temp);
                _this.emitFlaggedFormArray.emit(_this.flaggedFormArray);
            }
        }, function (err) {
            console.log(err);
            var temp;
            temp = localStorage.getItem('flaggedForms');
            _this.flaggedFormArray = JSON.parse(temp);
            _this.emitFlaggedFormArray.emit(_this.flaggedFormArray);
        });
    };
    ProjectService.prototype.submitFormArray = function (tempArray) {
        if (this.storeFormArrayTemp.Elements) {
            for (var _i = 0, _a = this.storeFormArrayTemp.Rules; _i < _a.length; _i++) {
                var temp = _a[_i];
                if (temp.tempCid == tempArray.Details.cid) {
                    this.storeFormArrayTemp.Elements = this.storeFormArrayTemp.Elements.concat(tempArray.Elements);
                    this.submittedForm = this.storeFormArrayTemp;
                    console.log(this.submittedForm);
                    this.saveResponseOffline(this.submittedForm);
                    this.storeFormArrayTemp = [];
                }
            }
        }
        else {
            this.submittedForm = tempArray;
            this.saveResponseOffline(this.submittedForm);
            console.log(this.submittedForm);
        }
    };
    ProjectService.prototype.saveResponseOffline = function (formArray) {
        console.log(formArray);
        // check if response is flagged or not. If flagged, pop the saved flagged response
        if (formArray.Details.rid) {
            console.log('yer');
            var temp1 = void 0;
            var temp2 = void 0;
            var temp3 = void 0;
            temp1 = localStorage.getItem('flaggedForms');
            temp2 = JSON.parse(temp1);
            for (var i = 0; i < temp2.length; i++) {
                if (formArray.Details.rid == temp2[i].Details.rid) {
                    temp3 = i;
                    break;
                }
            }
            temp2.splice(temp3, 1);
            this.flaggedFormArray = temp2;
            localStorage.setItem('flaggedForms', JSON.stringify(this.flaggedFormArray));
            this.emitFlaggedFormArray.emit(this.flaggedFormArray);
        }
        var asrName;
        var asrID;
        asrName = localStorage.getItem('asrName');
        asrID = localStorage.getItem('asrID');
        asrName = "5vy5y5";
        asrID = "15150728168562338";
        var response = {};
        if (formArray.Details.rid) {
            response.ResCid = formArray.Details.rid; // flagged response
        }
        else {
            response.ResCid = this.cid(); // new response
        }
        response.ResDetails = formArray.Details;
        response.ResElements = formArray.Elements;
        response.ResExtra = { asrName: asrName, asrID: asrID, resDate: this.cdate() };
        // console.log(response);
        for (var i = 0; i < response.ResElements.length; i++) {
            if (response.ResElements[i].chunkStatus) {
                delete response.ResElements[i].chunkStatus;
            }
        }
        console.log(' --> ' + response);
        this.addResponseToIndexDB(response);
        // update in chunk version
        // if(navigator.onLine) {
        //   this.syncOnline(response);                      // Sysnc Online
        // } else {
        //   this.addResponseToIndexDB(response);            // save data in IndexedDB
        // }
    };
    ProjectService.prototype.syncChunk = function (data, chunk) {
        var _this = this;
        console.log("----");
        console.log(data);
        console.log("____");
        var sub1 = this.apiService.SyncChunk(data, chunk).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitChunkSuccess.emit(data.cid);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.syncOnline = function (response) {
        var _this = this;
        var sub1 = this.apiService.SubmitResponse(response).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                // sync form
                _this.emitFormResponse.emit({ success: true, msg: "submitted" });
                sub1.unsubscribe();
            }
            else {
                _this.emitFormResponse.emit({ success: false, msg: "not-submitted" });
            }
        }, function (err) {
            console.log(err);
            _this.emitFormResponse.emit({ success: false, msg: "not-submitted" });
            _this.addResponseToIndexDB(response);
            sub1.unsubscribe();
        });
    };
    ProjectService.prototype.sendSubmitResponseID = function (response, id) {
        var _this = this;
        console.log(response);
        this.apiService.SendSubmitResponseID(id, 'Online').subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.emitFormResponse.emit({ success: true }); // Submit form final form
                // this.saveResponseOffline(response);
            }
            else {
                _this.emitFormResponse.emit({ success: false, msg: "not-submitted" });
                _this.saveResponseOffline(response);
            }
        }, function (err) {
            console.log(err);
            _this.saveResponseOffline(response);
        });
    };
    ProjectService.prototype.initializeIndexDB = function () {
        var _this = this;
        this.offlineFormIdArrray = [];
        this.db.openDatabase(1, function (evt) {
            var objectStore = evt.currentTarget.result.createObjectStore('asrResponse', { keyPath: "id", autoIncrement: true });
            objectStore.createIndex("response", "response", { unique: false });
        });
        var temp = 0;
        // initialize IndexDB
        var db = new __WEBPACK_IMPORTED_MODULE_3_angular2_indexeddb__["a" /* AngularIndexedDB */]('responseDB', 1);
        // open IndexDB
        db.openDatabase(1, function (evt) {
            var objectStore = evt.currentTarget.result.createObjectStore('asrResponse', { keyPath: "id", autoIncrement: true });
            objectStore.createIndex("response", "response", { unique: false });
        }).then(function () {
            db.getAll('asrResponse').then(function (response) {
                temp = response.length;
                // offline responses corresponding to formID
                if (response.length) {
                    for (var i = 0; i < response.length; i++) {
                        _this.offlineFormIdArrray.push(response[i].response.ResDetails.cid);
                    }
                }
                _this.emitOfflineResponse.emit(temp);
                _this.emitofflineFormIdArrray.emit(_this.offlineFormIdArrray);
                // console.log(this.offlineFormIdArrray);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProjectService.prototype.addResponseToIndexDB = function (response) {
        // get size of response
        var tempStorage = JSON.stringify(response).length;
        tempStorage += (1024 * 1024 * 200);
        console.log(tempStorage);
        console.log(response);
        // request for space as per size of response
        navigator.webkitPersistentStorage.requestQuota(tempStorage, function (grantedBytes) {
            var _this = this;
            console.log(response);
            console.log(grantedBytes);
            window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes, function (res) {
                // initialize IndexDB
                var db = new __WEBPACK_IMPORTED_MODULE_3_angular2_indexeddb__["a" /* AngularIndexedDB */]('responseDB', 1);
                // open IndexDB
                db.openDatabase(1, function (evt) {
                    var objectStore = evt.currentTarget.result.createObjectStore('asrResponse', { keyPath: "id", autoIncrement: true });
                    objectStore.createIndex("response", "response", { unique: false });
                }).then(function () {
                    // add response in Indexed
                    db.add('asrResponse', { response: response }).then(function () {
                        alert('Form stored in offline storage');
                        window.location.reload();
                        _this.router.navigate(['/']);
                    }, function (error) {
                        alert('Some error occurs while storing the form. Please try again');
                        window.location.reload();
                    });
                });
            }, function (err) {
                alert("Insufficient storage! Please try again after having free space.");
                window.location.reload();
                // this.emitFormResponse.emit({success:false, msg:"not-submitted"});
            });
        }, function (e) { console.log('Error', e); });
    };
    ProjectService.prototype.saveIntoIndexed = function (response) {
        var _this = this;
        // add response in IndexedDB
        this.db.add('asrResponse', { response: response }).then(function () {
            console.log("Response added in Indexed DB!");
            _this.emitFormResponse.emit({ success: true, msg: "Response stored in Indexed DB submitted" });
        }, function (error) {
            console.log(error);
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectService);

var _a, _b;
//# sourceMappingURL=ProjectService.js.map

/***/ }),

/***/ "./src/app/service/ZAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=ZAuthGuard.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map