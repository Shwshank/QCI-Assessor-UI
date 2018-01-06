webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_ZAuthGuard__ = __webpack_require__("../../../../../src/app/service/ZAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_forms_forms_component__ = __webpack_require__("../../../../../src/app/home/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_form_listing_form_listing_component__ = __webpack_require__("../../../../../src/app/home/form-listing/form-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_graph_graph_component__ = __webpack_require__("../../../../../src/app/home/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_APIService__ = __webpack_require__("../../../../../src/app/service/APIService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_forms_form_builder_form_builder_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_forms_form_builder_input_text_input_text_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-text/input-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_forms_form_builder_input_password_input_password_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-password/input-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_forms_form_builder_input_email_input_email_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-email/input-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_forms_form_builder_input_break_input_break_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-break/input-break.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_forms_form_builder_input_checkbox_input_checkbox_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_forms_form_builder_input_date_input_date_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-date/input-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_forms_form_builder_input_dropdown_input_dropdown_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_forms_form_builder_input_file_input_file_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-file/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_forms_form_builder_input_number_input_number_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-number/input-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_forms_form_builder_input_phone_input_phone_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-phone/input-phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_forms_form_builder_input_radio_input_radio_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-radio/input-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_forms_form_builder_input_slider_input_slider_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-slider/input-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_forms_form_builder_input_textarea_input_textarea_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-textarea/input-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_forms_form_builder_input_time_input_time_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-time/input-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_templates_templates_component__ = __webpack_require__("../../../../../src/app/home/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_forms_form_builder_input_camera_input_camera_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-camera/input-camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__home_forms_form_builder_input_video_input_video_component__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-video/input-video.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_forms_forms_component__["a" /* FormsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_form_listing_form_listing_component__["a" /* FormListingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_graph_graph_component__["a" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_forms_form_builder_form_builder_component__["a" /* FormBuilderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_forms_form_builder_input_text_input_text_component__["a" /* InputTextComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_forms_form_builder_input_password_input_password_component__["a" /* InputPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_forms_form_builder_input_email_input_email_component__["a" /* InputEmailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_forms_form_builder_input_break_input_break_component__["a" /* InputBreakComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_forms_form_builder_input_checkbox_input_checkbox_component__["a" /* InputCheckboxComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_forms_form_builder_input_date_input_date_component__["a" /* InputDateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__home_forms_form_builder_input_dropdown_input_dropdown_component__["a" /* InputDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_25__home_forms_form_builder_input_file_input_file_component__["a" /* InputFileComponent */],
            __WEBPACK_IMPORTED_MODULE_26__home_forms_form_builder_input_number_input_number_component__["a" /* InputNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_27__home_forms_form_builder_input_phone_input_phone_component__["a" /* InputPhoneComponent */],
            __WEBPACK_IMPORTED_MODULE_28__home_forms_form_builder_input_radio_input_radio_component__["a" /* InputRadioComponent */],
            __WEBPACK_IMPORTED_MODULE_29__home_forms_form_builder_input_slider_input_slider_component__["a" /* InputSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_30__home_forms_form_builder_input_textarea_input_textarea_component__["a" /* InputTextareaComponent */],
            __WEBPACK_IMPORTED_MODULE_31__home_forms_form_builder_input_time_input_time_component__["a" /* InputTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_32__home_templates_templates_component__["a" /* TemplatesComponent */],
            __WEBPACK_IMPORTED_MODULE_33__home_forms_form_builder_input_camera_input_camera_component__["a" /* InputCameraComponent */],
            __WEBPACK_IMPORTED_MODULE_34__home_forms_form_builder_input_video_input_video_component__["a" /* InputVideoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */], { useHash: true }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__service_ZAuthGuard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_15__service_ProjectService__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_16__service_APIService__["a" /* APIService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__ = __webpack_require__("../../../../../src/app/service/ZAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_form_listing_form_listing_component__ = __webpack_require__("../../../../../src/app/home/form-listing/form-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_forms_forms_component__ = __webpack_require__("../../../../../src/app/home/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_templates_templates_component__ = __webpack_require__("../../../../../src/app/home/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_form_listing_form_listing_component__["a" /* FormListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'formListing', component: __WEBPACK_IMPORTED_MODULE_1__home_form_listing_form_listing_component__["a" /* FormListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'form', component: __WEBPACK_IMPORTED_MODULE_2__home_forms_forms_component__["a" /* FormsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'template', component: __WEBPACK_IMPORTED_MODULE_4__home_templates_templates_component__["a" /* TemplatesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '/login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/dashboard/allscript.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer\n            mdl-layout--fixed-header\">\n  <header class=\"mdl-layout__header\">\n    <div class=\"mdl-layout__header-row\">\n      <div class=\"mdl-layout-spacer\"></div>\n      <button id=\"demo-menu-lower-right\" class=\"mdl-button mdl-js-button mdl-button--icon\">\n        <i class=\"material-icons\">more_vert</i>\n      </button>\n      <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n          for=\"demo-menu-lower-right\">\n        <li class=\"mdl-menu__item\">Logout <i class=\"material-icons\">lock</i> </li>\n        <li class=\"mdl-menu__item\">User profile <i class=\"material-icons\">perm_identity</i> </li>\n      </ul>\n    </div>\n  </header>\n  <div class=\"mdl-layout__drawer mdl-shadow--4dp\">\n    <span class=\"mdl-layout-title\">QCI - Collect</span>\n    <nav class=\"mdl-navigation\">\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" [routerLink]=\"['/']\"> <b> <i class=\"material-icons\">store</i> Home </b> </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" [routerLink]=\"['/']\"> <b> <i class=\"material-icons\">perm_identity</i> Profile </b> </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" [routerLink]=\"['/']\" (click)='sync()'> <b> <i class=\"material-icons\">sync</i> Sync </b> </a>\n      <a class=\"mdl-navigation__link mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" (click)=\"logout()\"> <i class=\"material-icons\">lock</i> <b> Logout </b> </a>\n    </nav>\n  </div>\n  <main class=\"mdl-layout__content commonProp \" >\n\n    <router-outlet></router-outlet>\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454; }\n\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n\n.requiredMsg {\n  color: #2196f3;\n  font-size: .9rem; }\n\n.margin-top-prop {\n  margin-top: -15px !important; }\n\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n\n.mdl-textfield {\n  width: 90% !important; }\n\n/*$primary-color: #2196f3;\n$primary-text: #fff;\n$accent-color: #ffd740;\n$accent-text: gray;*/\n.infoBox {\n  height: 200px;\n  background-color: lightgray;\n  max-width: 400px;\n  min-width: 300px;\n  margin: auto;\n  margin-bottom: 20px; }\n\n.infoGraph {\n  height: 100px;\n  background-color: lightgray; }\n\n.commonProp {\n  background-color: #f7f7f7; }\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n  background-color: #ffd740 !important;\n  color: gray !important; }\n\n.mdl-navigation__link {\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allscript_js__ = __webpack_require__("../../../../../src/app/home/dashboard/allscript.js");
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
        this.route = route;
        this.projectService = projectService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.projectService.getFormArray();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    DashboardComponent.prototype.sync = function () {
        this.projectService.syncAll();
    };
    DashboardComponent.prototype.logout = function () {
        this.projectService.logout();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form-listing/form-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infoBox{\n  height:200px;\n  background-color: lightgray;\n  max-width:400px;\n  min-width:300px;\n  margin: auto;\n  margin-bottom: 20px;\n  padding: auto;\n  \n}\n\n.infoGraph{\n  height:100px;\n  background-color: lightgray;\n}\n\n.demo-card-square.mdl-card {\n  width: 100%;\n  height: 100%;\n}\n.demo-card-square > .mdl-card__title {\n  color: gray;\n  /*background-color: #46B6AC*/\n  /*background:\n    url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form-listing/form-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone infoGraph\">Graph1</div>\n    <div class=\"mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone infoGraph\">Graph2</div>\n  </div>\n\n  <div class=\"mdl-grid\">\n\n    <div *ngFor='let card of cardArray' class=\"mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-phone infoBox \">\n      <div class=\"demo-card-square mdl-card mdl-shadow--2dp  mdl-js-button mdl-js-ripple-effect\" (click)='form(card.Details.cid)'>\n        <div class=\"mdl-card__title mdl-card--expand\">\n          <h2 class=\"mdl-card__title-text\">{{card.Details.project}}</h2>\n        </div>\n        <div class=\"mdl-card__supporting-text\">\n          {{card.Details.name}}\n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\">\n\n          <span class=\"mdl-chip mdl-chip--contact\">\n              <span class=\"mdl-chip__contact mdl-color--primary mdl-color-text--white\">10</span>\n              <span class=\"mdl-chip__text\">Online</span>\n          </span>\n\n          <span class=\"mdl-chip mdl-chip--contact\">\n              <span class=\"mdl-chip__contact mdl-color--accent mdl-color-text--lightgray\">0</span>\n              <span class=\"mdl-chip__text\">Offline</span>\n          </span>\n\n          <span class=\"mdl-chip mdl-chip--contact\">\n              <span class=\"mdl-chip__contact mdl-color--primary mdl-color-text--white\">0</span>\n              <span class=\"mdl-chip__text\">Draft</span>\n          </span>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form-listing/form-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
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
        this.sub1 = this.projectService.emitFormArray.subscribe(function (res) {
            console.log(res);
            _this.cardArray = res;
        });
    }
    FormListingComponent.prototype.ngOnInit = function () {
        this.projectService.getFormArray();
    };
    FormListingComponent.prototype.form = function (cid) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/form'], { queryParams: { id: cid } });
        }, 100);
    };
    FormListingComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    FormListingComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    return FormListingComponent;
}());
FormListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-listing',
        template: __webpack_require__("../../../../../src/app/home/form-listing/form-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form-listing/form-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FormListingComponent);

var _a, _b;
//# sourceMappingURL=form-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/allscript.js":
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

/***/ "../../../../../src/app/home/forms/form-builder/form-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-card-square mdl-card \">\n\n  <div *ngIf=\"disableSubmitButton\" style=\"width:100%\">\n    <div id=\"p\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" style=\"width:100%\"></div>\n  </div>\n\n  <div   class=\"mdl-card__title \">\n    <h2 class=\"mdl-card__title-text\">{{formDetails.project}}</h2>\n  </div>\n  <div class=\"mdl-card__supporting-text\">\n    <b>{{formDetails.name}}</b> &nbsp;  &nbsp;  &nbsp;\n\n    <span *ngIf='formError' class=\"mdl-chip\" style=\"float : right; margin-top: -15px\" >\n        <span class=\"mdl-chip__text errorMsg\"><b> # Invalid input/s detected!</b> </span>\n    </span>\n    <span *ngIf=\"displayRequired\" style=\"float : right; margin-top: -15px\"  class=\"mdl-chip margin-top-prop\">\n        <span class=\"mdl-chip__text requiredMsg\"><b> * Required </b> </span>\n    </span>\n\n  </div>\n\n  <div  class=\"mdl-card__actions mdl-card--border formBoxHeight\">\n\n    <div  *ngFor='let json of jsonArray; let i = index'>\n\n      <div *ngIf=\"json.type == 'text'\" >\n        <app-input-text [json]=json  id={{i}} (responseData)=\"responseData($event)\"></app-input-text>\n      </div>\n\n      <div *ngIf=\"json.type == 'password'\" >\n        <app-input-password [json]=json id={{i}} (responseData)=\"responseData($event)\"></app-input-password>\n      </div>\n\n      <div *ngIf=\"json.type == 'email'\" >\n        <app-input-email [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-email>\n      </div>\n\n      <div *ngIf=\"json.type == 'number'\" >\n        <app-input-number [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-number>\n      </div>\n\n      <div *ngIf=\"json.type == 'phone'\" >\n        <app-input-phone [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-phone>\n      </div>\n\n      <div *ngIf=\"json.type == 'textarea'\" >\n        <app-input-textarea [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-textarea>\n      </div>\n\n      <div *ngIf=\"json.type == 'date'\" >\n        <app-input-date [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-date>\n      </div>\n\n      <div *ngIf=\"json.type == 'time'\" >\n        <app-input-time [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-time>\n      </div>\n\n      <div *ngIf=\"json.type == 'radio'\" >\n        <app-input-radio [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-radio>\n      </div>\n\n      <div *ngIf=\"json.type == 'checkbox'\" >\n        <app-input-checkbox [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-checkbox>\n      </div>\n\n      <div *ngIf=\"json.type == 'dropdown'\" >\n        <app-input-dropdown [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-dropdown>\n      </div>\n\n      <div *ngIf=\"json.type == 'slider'\" >\n        <app-input-slider [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-slider>\n      </div>\n\n      <div *ngIf=\"json.type == 'file'\" >\n        <app-input-file [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-file>\n      </div>\n\n      <div *ngIf=\"json.type == 'camera'\" >\n        <app-input-camera [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-camera>\n      </div>\n\n      <div *ngIf=\"json.type == 'video'\" >\n        <app-input-video [json]=json  id={{i}}  (responseData)=\"responseData($event)\"></app-input-video>\n      </div>\n\n      <div *ngIf=\"json.type == 'location'\" >\n       &nbsp; &nbsp; {{(i+1)}}. Location will be shown here <br>\n        <!-- <app-input-text [json]=json  id={{i}} (responseData)=\"responseData($event)\"></app-input-text> -->\n      </div>\n\n      <div *ngIf=\"json.type == 'break'\" >\n        <br>\n        <div class=\"mdl-cell mdl-cell--11-col sectionBreak \"> <b class=\"backgroundColorClass\"> {{json.name}} </b></div>\n\n        <br>\n      </div>\n\n    </div>\n\n    <div *ngIf='jsonArray.length > 0' class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--12-col\" style=\"margin: auto;\">\n        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" (click)='saveFormReaponce()' [ngClass]=\"{disabled : disableSubmitButton}\">\n         <b>{{submitButton}}  <i class=\"material-icons\">send</i></b>\n        </button>\n        <div *ngIf=\"disableSubmitButton\" style=\"float:right\" >\n          <div class=\"mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!formResponse\" >\n      <!-- <div class=\"mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active\"></div> -->\n      <div class=\"load-bar\">\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n      </div>\n\n      <h4>  Just a moment ... </h4>\n\n    </div>\n\n    <div *ngIf='jsonArray.length == 0' class=\"mdl-grid\">\n\n\n      <div class=\"mdl-cell mdl-cell--12-col finishMsg\" >\n\n        <span *ngIf=\"send\">\n          <h3>Thanks! Form submitted... <b> <i class=\"material-icons\">done_all</i> </b> </h3>\n          <br>\n          <br>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" (click)=\"backToDashboard()\">\n            <b><i class=\"material-icons\">arrow_back</i> dashboard</b>\n          </button>\n        </span>\n\n        <span *ngIf=\"responseError\">\n          <h3> Opps! something went wrong. Please try again </h3>\n          <br>\n          <br>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" (click)=\"backToDashboard()\">\n            <b><i class=\"material-icons\">arrow_back</i> dashboard</b>\n          </button>\n        </span>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/form-builder.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454; }\n\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n\n.requiredMsg {\n  color: #2196f3;\n  font-size: .9rem; }\n\n.margin-top-prop {\n  margin-top: -15px !important; }\n\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n\n.mdl-textfield {\n  width: 90% !important; }\n\n.demo-card-square.mdl-card {\n  width: 100%;\n  height: 100%; }\n\n.demo-card-square > .mdl-card__title {\n  color: gray;\n  /*background:\n    url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;*/ }\n\n.formBoxHeight {\n  min-height: 73vh;\n  max-height: 73vh;\n  overflow-y: auto; }\n\n.sectionBreak {\n  margin: auto;\n  height: 18px;\n  text-align: center;\n  color: #424242;\n  background-color: #ffd740;\n  background: #ffd740 !important; }\n\n.backgroundColorClass {\n  background: #ffd740 !important; }\n\n.finishMsg {\n  margin: auto;\n  text-align: center;\n  color: #2196f3; }\n\n.load-bar {\n  position: relative;\n  margin-top: 20px;\n  width: 100%;\n  height: 6px;\n  background-color: #fdba2c; }\n\n.bar {\n  content: \"\";\n  display: inline;\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 50%;\n  text-align: center; }\n\n.bar:nth-child(1) {\n  background-color: #da4733;\n  -webkit-animation: loading 3s linear infinite;\n          animation: loading 3s linear infinite; }\n\n.bar:nth-child(2) {\n  background-color: #3b78e7;\n  -webkit-animation: loading 3s linear 1s infinite;\n          animation: loading 3s linear 1s infinite; }\n\n.bar:nth-child(3) {\n  background-color: #fdba2c;\n  -webkit-animation: loading 3s linear 2s infinite;\n          animation: loading 3s linear 2s infinite; }\n\n@-webkit-keyframes loading {\n  from {\n    left: 50%;\n    width: 0;\n    z-index: 100; }\n  33.3333% {\n    left: 0;\n    width: 100%;\n    z-index: 10; }\n  to {\n    left: 0;\n    width: 100%; } }\n\n@keyframes loading {\n  from {\n    left: 50%;\n    width: 0;\n    z-index: 100; }\n  33.3333% {\n    left: 0;\n    width: 100%;\n    z-index: 10; }\n  to {\n    left: 0;\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/form-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allscript_js__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/allscript.js");
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
        this.submitButton = 'Submit';
        this.disableSubmitButton = true;
        this.formResponse = false;
        this.displayRequired = true;
        this.projectService.emitFormResponse.subscribe(function (res) {
            _this.formResponse = true;
            if (res.success) {
                _this.send = true;
            }
            else {
                _this.responseError = true;
            }
        });
        this.projectService.emitFormElement.subscribe(function (res) {
            _this.formResponse = true;
            _this.disableSubmitButton = false;
            _this.rule = false;
            console.log(res);
            _this.completeArray = res;
            _this.jsonArray = res.Elements;
            for (var _i = 0, _a = _this.jsonArray; _i < _a.length; _i++) {
                var cr = _a[_i];
                _this.checkForRules(cr);
            }
            _this.formDetails = res.Details;
            _this.rules = res.Rules;
            _this.display = true;
        });
        if (!this.rule) {
            this.submitButton = "Submit";
        }
    }
    FormBuilderComponent.prototype.ngOnInit = function () { };
    FormBuilderComponent.prototype.responseData = function (data) {
        console.log(data);
        componentHandler.upgradeDom();
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
                                // console.log(data);
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
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.deleteRuleFromJsonArray2 = function (data) {
        var tempArray = [];
        var tempArray2 = [];
        for (var r = 0; r < this.completeArray.Rules.length; r++) {
            if (data.cid == this.completeArray.Rules[r].elementCid) {
                tempArray = this.projectService.getTemplateElement(this.completeArray.Rules[r].tempCid);
                // console.log(tempArray);
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
    FormBuilderComponent.prototype.checkError = function (data) {
        if (data.type == 'location' || data.type == 'break') {
            data.value = "N.A";
        }
        if (data.required && data.value == "") {
            for (var i = 0; i <= this.jsonArray.length; i++) {
                if (this.jsonArray[i].cid === data.cid) {
                    this.jsonArray[i].errorMsg = "This feild can't be empty, please provide a valid input!";
                    if (data.type != "video" || data.type != "camera" || data.type != "file" || data.type != "location") {
                        this.formError = true;
                    }
                    console.log(data.name);
                    console.log(data.cid);
                    // console.log(this.formError);
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
    FormBuilderComponent.prototype.saveFormReaponce = function () {
        for (var _i = 0, _a = this.jsonArray; _i < _a.length; _i++) {
            var json = _a[_i];
            this.checkError(json);
        }
        for (var _b = 0, _c = this.jsonArray; _b < _c.length; _b++) {
            var json = _c[_b];
            if (json.errorMsg) {
                this.formError = true;
            }
        }
        if (!this.formError) {
            componentHandler.upgradeDom();
            this.completeArray.Elements = this.jsonArray;
            this.projectService.submitFormArray(this.completeArray);
            this.displayRequired = false;
            this.formResponse = false;
            this.jsonArray = [];
            this.disableSubmitButton = true;
            this.submitButton = "Just a moment";
            componentHandler.upgradeDom();
        }
    };
    FormBuilderComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.backToDashboard = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/']);
        }, 300);
    };
    return FormBuilderComponent;
}());
FormBuilderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-builder',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/form-builder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/form-builder.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FormBuilderComponent);

var _a, _b;
//# sourceMappingURL=form-builder.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-break/input-break.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sectionBreak{\n  margin: auto;\n  height:18px;\n  text-align: center;\n  color: #424242;\n  background-color: #ffd740;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-break/input-break.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--11-col sectionBreak marginAuto\"  > <b> {{json.name}} </b></div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-break/input-break.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBreakComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.renponseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputBreakComponent.prototype.ngOnInit = function () {
    };
    return InputBreakComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputBreakComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputBreakComponent.prototype, "renponseData", void 0);
InputBreakComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-break',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-break/input-break.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-break/input-break.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputBreakComponent);

//# sourceMappingURL=input-break.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-camera/input-camera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-camera/input-camera.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n  body {\n  display: flex;\n  }\n\n  .file_input_div {\n  margin: auto;\n  width: 250px;\n  height: 40px;\n  }\n\n  .file_input {\n  float: left;\n  }\n\n  #file_input_text_div {\n  width: 200px;\n  margin-top: -8px;\n  margin-left: 5px;\n  }\n\n  .none {\n    display: none;\n  }\n\n  img{\n    width: 40%;\n    height: auto;\n    margin: auto;\n  }\n\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col\">{{funID(id)}} . {{json.name}}\n    <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n  </div>\n  <div class=\"mdl-cell mdl-cell--7-col\">\n\n    <span  *ngIf=\"json.helptext\" style=\"float: right\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <div class=\"file_input_div\">\n      <div class=\"file_input\">\n\n        <label class=\"image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n          <i class=\"material-icons\">photo_camera</i>\n          <input id=\"file_input_file101\"  type=\"file\" class=\"none\" accept=\"image/*\" capture=\"camera\"  (change)=\"getVal($event);\"/>\n          <!-- <input (change)=\"send($event);\" type=\"file\" accept=\"image/*\" capture=\"camera\" /> -->\n\n        </label>\n\n        <div *ngIf=\"name\" style=\"float: right\">\n          <i class=\"material-icons\" style=\"float: right; cursor: pointer;\" (click)=\"deleteFile()\">clear</i>\n        </div>\n        <br> <br>\n        <img [src]=\"url\" style=\"\">\n\n        <!-- <video *ngIf=\"url\" width=\"320\" height=\"240\" controls>\n          <source [src]=\"url\" >\n          Your browser does not support the video tag.\n        </video> -->\n\n        <div *ngIf=\"name\" style=\"float: right; margin: auto;\">\n          {{name}}\n        </div>\n        <br>\n        <!-- <div *ngIf=\"name\">\n          {{name}}  <i class=\"material-icons\">clear</i>\n        </div> -->\n      </div>\n    </div>\n  </div>\n\n  <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}} </b> </span>\n  </span>\n  <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-camera/input-camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formData = new FormData();
        this.url = "";
    }
    ;
    InputCameraComponent.prototype.ngOnInit = function () { };
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
        };
        this.responseData.emit(this.json);
    };
    InputCameraComponent.prototype.deleteFile = function () {
        this.formData = new FormData();
        this.url = "";
        this.name = "";
        this.json.value = "";
        this.responseData.emit(this.json);
    };
    return InputCameraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "responseData", void 0);
InputCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-camera',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-camera/input-camera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-camera/input-camera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputCameraComponent);

var _a;
//# sourceMappingURL=input-camera.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid  \">\n  <div class=\"mdl-cell mdl-cell--4-col \"> {{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n\n  <div class=\"mdl-cell mdl-cell--8-col marginAuto\">\n    <div *ngFor='let opt of json.option; let i=i' >\n\n\n      <label class = \"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n         <input #flag type = \"checkbox\"  class = \"mdl-checkbox__input\" name=\"checkbox\" value={{opt}} (change)='getVal(flag.checked,opt)' [checked]='checkVal(opt)' >\n         <span class = \"mdl-checkbox__label\"> {{opt}}</span>\n      </label>\n\n    </div>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.resultArray = [];
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
    };
    InputCheckboxComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputCheckboxComponent.prototype.getVal = function (flag, opt) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "responseData", void 0);
InputCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-checkbox',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-checkbox/input-checkbox.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputCheckboxComponent);

//# sourceMappingURL=input-checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-date/input-date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-date/input-date.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n{{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n<br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"date\" id=\"sample3\" (change)=\"getVal()\" [(ngModel)]='value' min={{json.rangeFrom}} max={{json.rangeTo}}>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n        <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n        <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n            <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n        </span>\n\n        <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-date/input-date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputDateComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "responseData", void 0);
InputDateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-date',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-date/input-date.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-date/input-date.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputDateComponent);

//# sourceMappingURL=input-date.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n  {{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n  <br>\n\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <label class=\"mdl-textfield__label\" ></label>\n      <select [(ngModel)]=\"selectedValue\" class=\"mdl-textfield__input\" id=\"octane\" name=\"octane\" (change)='getVal()'>\n\n        <option *ngFor='let opt of json.option; let i=i' [ngValue]=opt  [selected]=\"opt == json.value\">{{opt}}</option>\n      </select>\n      <!-- <label class=\"mdl-textfield__label\" for=\"octane\">{{json.name}}</label> -->\n\n    </div>\n    <span  *ngIf=\"json.helptext\"  class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputDropdownComponent.prototype.ngOnInit = function () {
        this.selectedValue = this.json.value;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "responseData", void 0);
InputDropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-dropdown',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-dropdown/input-dropdown.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputDropdownComponent);

//# sourceMappingURL=input-dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-email/input-email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-email/input-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}} <span *ngIf='json.required' class=\"requiredMsg\"> <b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"email\" id=\"sample13\" (change)=\"getVal()\" [(ngModel)]='value'>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}}</b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-email/input-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputEmailComponent.prototype.ngOnInit = function () {
        // console.log(this.json);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "responseData", void 0);
InputEmailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-email',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-email/input-email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-email/input-email.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputEmailComponent);

//# sourceMappingURL=input-email.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-file/allscript.js":
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

/***/ "../../../../../src/app/home/forms/form-builder/input-file/input-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-file/input-file.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n  body {\n  display: flex;\n  }\n\n  .file_input_div {\n  margin: auto;\n  width: 250px;\n  height: 40px;\n  }\n\n  .file_input {\n  float: left;\n  }\n\n  #file_input_text_div {\n  width: 200px;\n  margin-top: -8px;\n  margin-left: 5px;\n  }\n\n  .none {\n  display: none;\n  }\n\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col\">{{funID(id)}} . {{json.name}}\n    <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n  </div>\n  <div class=\"mdl-cell mdl-cell--7-col\">\n    <!-- <input type=\"file\"  [accept]=json.fileTypes /> -->\n    <div class=\"file_input_div\">\n  <div class=\"file_input\">\n    <label class=\"image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n      <i class=\"material-icons\">attach_file</i>\n      <input id=\"file_input_file\" class=\"none\" type=\"file\" (change)=\"getVal($event);\" [accept]=json.fileTypes/>\n\n    </label>\n    {{name}}\n  </div>\n  <!-- <div id=\"file_input_text_div\" class=\"mdl-textfield mdl-js-textfield textfield-demo\">\n\n    <input class=\"file_input_text mdl-textfield__input\" type=\"text\" disabled readonly id=\"file_input_text\" style=\"color:gray\"\n     [(ngModel)]='name'   />\n\n    <label class=\"mdl-textfield__label\" for=\"file_input_text\"></label>\n\n  </div> -->\n</div>\n  </div>\n\n  <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}} </b> </span>\n  </span>\n  <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-file/input-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js__ = __webpack_require__("../../../../../src/app/home/forms/form-builder/input-file/allscript.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formData = new FormData();
    }
    ;
    InputFileComponent.prototype.ngOnInit = function () {
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
        reader.onload = function (event) {
            _this.json.value = reader.result;
        };
        reader.readAsDataURL(file);
        this.json.fileName = this.name;
        this.responseData.emit(this.json);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "responseData", void 0);
InputFileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-file',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-file/input-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-file/input-file.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputFileComponent);

//# sourceMappingURL=input-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-number/input-number.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-number/input-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n{{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"number\" id=\"sample3\" (change)=\"getVal()\" [(ngModel)]='value' min={{json.rangeFrom}} max={{json.rangeTo}} >\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n          <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n          <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n              <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n          </span>\n\n          <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-number/input-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputNumberComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "responseData", void 0);
InputNumberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-number',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-number/input-number.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-number/input-number.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputNumberComponent);

//# sourceMappingURL=input-number.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-password/input-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span *ngIf='json.required' class=\" requiredMsg\"><b> * </b> </span>\n\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"password\" id=\"sample113\"  (change)=\"getVal()\" [(ngModel)]='value'>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-password/input-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-password/input-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputPasswordComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "responseData", void 0);
InputPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-password',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-password/input-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-password/input-password.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InputPasswordComponent);

//# sourceMappingURL=input-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-phone/input-phone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-phone/input-phone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\"  (change)=\"getVal()\" [(ngModel)]='value'>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-phone/input-phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputPhoneComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "responseData", void 0);
InputPhoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-phone',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-phone/input-phone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-phone/input-phone.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputPhoneComponent);

//# sourceMappingURL=input-phone.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-radio/input-radio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-radio/input-radio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--4-col\"> {{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n  <div class=\"mdl-cell mdl-cell--8-col\">\n    <div *ngFor='let opt of json.option; let i=i' (change)='getVal(opt)'>\n\n      <label class = \"mdl-radio mdl-js-radio mdl-js-ripple-effect\" >\n        <input type = \"radio\" class = \"mdl-radio__button\" value={{opt.trim()}}   name=\"radiogroup{{funID(id)}}\"  [checked]='opt.trim() == json.value.trim()'>\n        <span class = \"mdl-radio__label\">{{opt}}</span>\n      </label>\n\n    </div>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n  </div>\n</div>\n\n\n<!-- <div *ngFor='let opt of option; let i=i' >\n\n  <input type=\"radio\" value={{opt}} name=\"radiogroup\"  [checked]='opt == value' >  {{opt}}\n\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-radio/input-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputRadioComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "responseData", void 0);
InputRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-radio',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-radio/input-radio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-radio/input-radio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputRadioComponent);

//# sourceMappingURL=input-radio.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-slider/input-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-slider/input-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--4-col\">{{funID(id)}} . {{json.name}} <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n    <span  *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n  <div class=\"mdl-cell mdl-cell--6-col\">\n    <!-- <form oninput=\"x.value=parseInt(a.value)\" >\n      {{rangeFrom}}<input class=\" form-control-sm\"  type=\"range\"  min={{rangeFrom}} max={{rangeTo}} id=\"a\" (change)='getVal()'  >{{rangeTo}}\n\n     &nbsp; &nbsp; value =  <output #val name=\"x\" for=\"a \" > {{value}} </output>\n\n    </form> -->\n    <form oninput=\"x.value=parseInt(a.value)\">\n\n      {{json.rangeFrom}} to {{json.rangeTo}}\n      <input id = \"slider2\" class = \"mdl-slider mdl-js-slider\" type = \"range\"\n              min = {{json.rangeFrom}} max = {{json.rangeTo}} id=\"a\" (change)='getVal()'>\n\n              \n\n      &nbsp; &nbsp; value =  <output #val name=\"x\" for=\"a \" > {{json.value}} </output>\n\n    </form>\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-slider/input-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputSliderComponent.prototype.ngOnInit = function () {
        this.val = this.json.value;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "responseData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('val'),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "output", void 0);
InputSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-slider',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-slider/input-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-slider/input-slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputSliderComponent);

//# sourceMappingURL=input-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-text/input-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" >\n      <input class=\"mdl-textfield__input\" type=\"text\" (change)=\"getVal()\" [(ngModel)]='value'>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n      <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n      <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n          <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n      </span>\n\n      <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-text/input-text.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #545454; }\n\n.errorMsg {\n  color: red;\n  font-size: .9rem; }\n\n.requiredMsg {\n  color: #2196f3;\n  font-size: .9rem; }\n\n.margin-top-prop {\n  margin-top: -15px !important; }\n\n.marginAuto {\n  margin: auto !important;\n  padding: auto !important; }\n\n.mdl-textfield {\n  width: 90% !important; }\n\n.requiredMsg {\n  color: #2196f3;\n  font-size: .9rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-text/input-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputTextComponent.prototype.ngOnInit = function () { };
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], InputTextComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "responseData", void 0);
InputTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-text',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-text/input-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-text/input-text.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InputTextComponent);

//# sourceMappingURL=input-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-textarea/input-textarea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-textarea/input-textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    {{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n    <br>\n    <div class=\"mdl-textfield mdl-js-textfield\">\n      <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"3\" id=\"sample5\"  (change)=\"getVal()\" [(ngModel)]='value'></textarea>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n    <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n        <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n    </span>\n\n    <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-textarea/input-textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputTextareaComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "responseData", void 0);
InputTextareaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-textarea',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-textarea/input-textarea.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-textarea/input-textarea.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputTextareaComponent);

//# sourceMappingURL=input-textarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-time/input-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-time/input-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n{{funID(id)}} . {{json.name}}   <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n\n<br>\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n      <input class=\"mdl-textfield__input\" type=\"time\" id=\"sample3\"  (change)=\"getVal()\" [(ngModel)]='value'  min={{json.rangeFrom}} max={{json.rangeTo}}>\n      <label class=\"mdl-textfield__label\" ></label>\n    </div>\n\n\n        <span *ngIf=\"json.helptext\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n        <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n            <span class=\"mdl-chip__text errorMsg\"><b>  # {{json.errorMsg}} </b> </span>\n        </span>\n\n        <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-time/input-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    InputTimeComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "responseData", void 0);
InputTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-time',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-time/input-time.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-time/input-time.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputTimeComponent);

//# sourceMappingURL=input-time.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-video/input-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-video/input-video.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n\n  body {\n  display: flex;\n  }\n\n  .file_input_div {\n  margin: auto;\n  width: 250px;\n  height: 40px;\n  }\n\n  .file_input {\n  float: left;\n  }\n\n  #file_input_text_div {\n  width: 200px;\n  margin-top: -8px;\n  margin-left: 5px;\n  }\n\n  .none {\n    display: none;\n  }\n\n  img{\n    width: 40%;\n    height: auto;\n    margin: auto;\n  }\n\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--3-col\">{{funID(id)}} . {{json.name}}\n    <span  *ngIf=\"json.required\" class=\" requiredMsg\"><b> * </b> </span>\n  </div>\n  <div class=\"mdl-cell mdl-cell--7-col\">\n\n    <span  *ngIf=\"json.helptext\" style=\"float: right\" class=\"mdl-badge\" data-badge=\"i\" id=\"Tsample{{funID(id)}}\"  ></span>\n\n    <div class=\"file_input_div\">\n      <div class=\"file_input\">\n\n        <label class=\"image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n          <i class=\"material-icons\">videocam</i>\n          <input id=\"file_input_file101{{funID(id)}}\"  type=\"file\" class=\"none\" accept=\"video/*\" capture=\"camcorder\"  (change)=\"getVal($event);\"/>\n        </label>\n\n        <div *ngIf=\"name\" style=\"float: right\">\n          <i class=\"material-icons\" style=\"float: right; cursor: pointer;\" (click)=\"deleteFile()\">clear</i>\n        </div>\n        <br> <br>\n\n        <video *ngIf=\"url\" width=\"230vbh\" height=\"140vbh\" controls style=\"margin-left:-0px !important\">\n          <source [src]=\"url\" >\n          Browser does not support the video tag.\n        </video>\n\n        <div *ngIf=\"name\" style=\"float: right; margin: auto;\">\n          {{name}}\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n\n  <span *ngIf='json.errorMsg' class=\"mdl-chip  margin-top-prop\">\n      <span class=\"mdl-chip__text errorMsg\"><b> # {{json.errorMsg}} </b> </span>\n  </span>\n  <label class=\"mdl-tooltip mdl-tooltip--large\" for=\"Tsample{{funID(id)}}\">{{json.helptext}}</label>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/form-builder/input-video/input-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.responseData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formData = new FormData();
        this.url = "";
    }
    ;
    InputVideoComponent.prototype.ngOnInit = function () { };
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
        reader.onload = function (event) {
            _this.url = event.target.result;
            _this.json.value = reader.result;
        };
        reader.readAsDataURL(file);
        this.json.fileName = this.name;
        this.responseData.emit(this.json);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "responseData", void 0);
InputVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-video',
        template: __webpack_require__("../../../../../src/app/home/forms/form-builder/input-video/input-video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/form-builder/input-video/input-video.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputVideoComponent);

//# sourceMappingURL=input-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formBox{\n  background-color: #fff;\n\n  margin: auto;\n  margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet mdl-cell--11-col-phone formBox mdl-shadow--4dp\">\n    <app-form-builder></app-form-builder>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
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
    FormsComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-forms',
        template: __webpack_require__("../../../../../src/app/home/forms/forms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/forms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], FormsComponent);

var _a, _b, _c;
//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  graph works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphComponent = (function () {
    function GraphComponent() {
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-graph',
        template: __webpack_require__("../../../../../src/app/home/graph/graph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/graph/graph.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GraphComponent);

//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard></app-dashboard> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function HomeComponent(router) {
        this.router = router;
        this.router.navigate(['/']);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/templates/templates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formBox{\n  background-color: #fff;\n\n  margin: auto;\n  margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/templates/templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n  <div class=\"mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet mdl-cell--11-col-phone formBox mdl-shadow--4dp\">\n    <app-form-builder></app-form-builder>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/templates/templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-templates',
        template: __webpack_require__("../../../../../src/app/home/templates/templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/templates/templates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], TemplatesComponent);

var _a, _b, _c;
//# sourceMappingURL=templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdl-layout {\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-layout__content {\n\tpadding: 1vh;\n\t-webkit-box-flex: 0;\n\t    -ms-flex: none;\n\t        flex: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-color--grey-100\">\n\t<main class=\"mdl-layout__content\">\n\t\t<div class=\"mdl-card mdl-shadow--6dp\">\n\t\t\t<div class=\"mdl-card__title mdl-color--primary mdl-color-text--white\">\n\t\t\t\t<h2 class=\"mdl-card__title-text\">QCI Collect </h2>\n\t\t\t</div>\n\t  \t<div class=\"mdl-card__supporting-text\">\n        <h5>Assessor module</h5>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield\">\n\t\t\t\t\t\t<input class=\"mdl-textfield__input\" type=\"text\" id=\"username\" [(ngModel)]='phone'/>\n\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"username\"  >Phone No.</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield\">\n\t\t\t\t\t\t<input class=\"mdl-textfield__input\" type=\"password\" id=\"userpass\" [(ngModel)]='password'/>\n\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"userpass\"  >Password</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"mdl-card__actions mdl-card--border\">\n\t\t\t\t<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored \" (click)='login()'>Log in </button>\n\t\t\t</div>\n\t\t</div>\n\t</main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/APIService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        // projectURL: string = 'http://192.168.15.221:8000';
        this.projectURL = 'http://qcitech.org:8083';
    }
    APIService.prototype.createAuthorizationHeader = function (headers) {
        this.userID = localStorage.getItem('token');
        console.log(this.userID);
        headers.append('Authorization', this.userID);
    };
    APIService.prototype.Login = function (data) {
        return this.http.post(this.projectURL + '/assesorLogin', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.SyncAll = function () {
        return this.http.get(this.projectURL + '/gettestforms').map(function (res) { return res.json(); });
    };
    APIService.prototype.GetFormArray = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getAssesorForms', { headers: headers }).map(function (res) { return res.json(); });
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
    APIService.prototype.CheckImage = function (image) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/check', image).map(function (res) { return res.json(); });
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=APIService.js.map

/***/ }),

/***/ "../../../../../src/app/service/ProjectService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__APIService__ = __webpack_require__("../../../../../src/app/service/APIService.ts");
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
        this.emitFormElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.emitFormCard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.emitFormArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.emitFormResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.emitUserLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formArray = [];
        this.formCard = [];
        this.templateArray = [];
        this.storeFormArrayTemp = [];
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
                _this.emitUserLogin.emit({ success: true, msg: res.message });
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.checkLogin = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['./']);
        }
    };
    ProjectService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['./login']);
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
    ProjectService.prototype.syncAll = function () { };
    ProjectService.prototype.getFormArray = function () {
        var _this = this;
        this.formArray = [];
        this.apiService.GetFormArray().subscribe(function (res) {
            console.log(res);
            if (res) {
                if (res.formArray.length) {
                    for (var i = 0; i < res.formArray.length; i++) {
                        _this.formArray.push(res.formArray[i].form_json);
                    }
                }
                if (res.tempArray.length) {
                    for (var i = 0; i < res.tempArray.length; i++) {
                        _this.templateArray.push(res.tempArray[i].temp_json);
                    }
                }
                _this.emitFormArray.emit(_this.formArray);
            }
            else { }
        }, function (err) {
            console.log(err);
            // this.emitFormArray.emit(this.formArray);
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
                    this.submitResponse(this.submittedForm);
                    this.storeFormArrayTemp = [];
                }
            }
        }
        else {
            this.submittedForm = tempArray;
            this.submitResponse(this.submittedForm);
            console.log(this.submittedForm);
        }
    };
    ProjectService.prototype.submitResponse = function (formArray) {
        // {
        //   ResCid:'1',
        //   ResDetails:{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },
        //   ResElements:[
        //     {type: "text", required: false, name: "Name", value:"sammy", cid:"a1", hepltext: "", alias:" Username "},
        //     {type: "password", required: false, name: "SecretKey", value:"sammy_password", cid:"a2", hepltext: "", alias:" Password "}
        //   ],
        //   ResExtra:{}
        // }
        var _this = this;
        console.log(formArray);
        var asrName;
        var asrID;
        asrName = localStorage.getItem('asrName');
        asrID = localStorage.getItem('asrID');
        asrName = "5vy5y5";
        asrID = "15150728168562338";
        var response = {};
        response.ResCid = this.cid();
        response.ResDetails = formArray.Details;
        response.ResElements = formArray.Elements;
        response.ResExtra = { asrName: asrName, asrID: asrID, resDate: this.cdate() };
        console.log(response);
        var sub1 = this.apiService.SubmitResponse(response).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitFormResponse.emit({ success: true, msg: "submitted" });
                sub1.unsubscribe();
            }
            else {
                _this.emitFormResponse.emit({ success: false, msg: "not-submitted" });
            }
        }, function (err) {
            console.log(err);
            _this.emitFormResponse.emit({ success: false, msg: "not-submitted" });
            sub1.unsubscribe();
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectService);

var _a, _b;
//# sourceMappingURL=ProjectService.js.map

/***/ }),

/***/ "../../../../../src/app/service/ZAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=ZAuthGuard.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map