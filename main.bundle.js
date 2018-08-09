webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module"
	],
	"app/features/opportunity/opportunity.module": [
		"../../../../../src/app/features/opportunity/opportunity.module.ts",
		"opportunity.module"
	],
	"app/features/upload-file/upload-file.module": [
		"../../../../../src/app/features/upload-file/upload-file.module.ts",
		"upload-file.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  font-weight: 400;\r\n  color: #3b3b3b;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  background: #2b2b2b;\r\n}\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n/* can also use viewport units or \"height: 100vh\" */\r\n\r\n#container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; /* displays flex-items (children) inline */\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column; /* stacks them vertically */\r\n  height: 100vh;\r\n}\r\n\r\n#header {\r\n  background-color: #38547b;\r\n  height: 50px\r\n}\r\n\r\n#header a {\r\n    color: white;\r\n  }\r\n\r\n#header .company-name {\r\n    margin-left: 5px;\r\n  }\r\n\r\n#header .nav-wrapper {\r\n    color: white;\r\n  }\r\n\r\n#header ul {\r\n    margin-top: 20px;\r\n  }\r\n\r\n#footer {\r\n  height: 50px;\r\n  background-color: #38547b;\r\n  text-align: center;\r\n  color: white;\r\n  line-height: 50px;\r\n}\r\n\r\n#logout {\r\n  margin-right: 1%;\r\n  list-style: none;\r\n  text-align: right;\r\n  font-weight: bolder;\r\n  font-size: 14px;\r\n}\r\n\r\n#logout li {\r\n    display: inline;\r\n    list-style: none;\r\n    margin-left: auto;\r\n    margin-right: 5px;\r\n    color: white;\r\n  }\r\n\r\n#logout li a {\r\n      color: white;\r\n    }\r\n\r\n#main {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1; /* takes the remaining height */\r\n  overflow: hidden;\r\n}\r\n\r\n#content {\r\n  /* height: 100%;  */\r\n  /* takes the visible area of the \"main\" div */\r\n  /* recommended */\r\n  -webkit-box-shadow: inset 0 1px 1px #000;\r\n          box-shadow: inset 0 1px 1px #000; /* just for demo */\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  body {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n  }\r\n}\r\n\r\n.form-control {\r\n  display: block !important;\r\n  width: 90% !important;\r\n  padding: .375rem .75rem !important;\r\n  font-size: 1.3rem !important;\r\n  line-height: 1.5 !important;\r\n  color: #495057 !important;\r\n  background-color: #fff !important;\r\n  background-clip: padding-box !important;\r\n  border: 1px solid #ced4da !important;\r\n  border-radius: .25rem !important;\r\n  -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out !important;\r\n  transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out !important;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out !important;\r\n  margin: 0 0 0px 0 !important;\r\n}\r\n\r\n.row:after, .row:before {\r\n  display: none;\r\n  content: none;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  border: 1px solid transparent;\r\n  padding: .375rem .75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: .25rem;\r\n  outline: none;\r\n  -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\r\n}\r\n\r\n.btn-group-sm > .btn, .btn-sm {\r\n  padding: .25rem .5rem;\r\n  font-size: .875rem;\r\n  line-height: 1.5;\r\n  border-radius: .2rem;\r\n}\r\n\r\n.btn-danger:not(:disabled):not(.disabled):active, .show > .btn-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #bd2130;\r\n  border-color: #b21f2d;\r\n}\r\n\r\n.btn-danger:active {\r\n  color: #fff;\r\n  background-color: #bd2130;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #0062cc;\r\n  border-color: #005cbf;\r\n}\r\n\r\n.btn:not(:disabled):not(.disabled):active {\r\n  background-image: none;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  border-color: #0062cc;\r\n}\r\n\r\n[type=reset], [type=submit], button, html [type=button] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n.btn-outline-primary {\r\n  color: #007bff;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #007bff;\r\n}\r\n\r\n.wrapper {\r\n  overflow-x: scroll;\r\n  padding: 2%;\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.table {\r\n  margin: 10px 0 40px 0;\r\n  width: 100%;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.row:nth-of-type(odd) {\r\n    background: #e9e9e9;\r\n  }\r\n\r\n.row.header {\r\n    font-weight: 900;\r\n    color: #ffffff;\r\n    background: #ea6153;\r\n  }\r\n\r\n.row.green {\r\n    background: #27ae60;\r\n  }\r\n\r\n.row.blue {\r\n    background: #2980b9;\r\n  }\r\n\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n\r\n    .row.header {\r\n      padding: 0;\r\n      height: 6px;\r\n    }\r\n\r\n      .row.header .cell {\r\n        display: none;\r\n      }\r\n\r\n    .row .cell {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n      .row .cell:before {\r\n        margin-bottom: 3px;\r\n        content: attr(data-title);\r\n        min-width: 98px;\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        color: #969696;\r\n        display: block;\r\n      }\r\n}\r\n\r\n.cell {\r\n  padding: 6px 12px;\r\n  display: table-cell;\r\n  width: 145px;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n    width: 145px;\r\n  }\r\n}\r\n\r\n.ag-theme-balham .ag-header-cell {\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.bg-green {\r\n  background-color: #27ae60 !important;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.ag-theme-balham .sick-days-warning {\r\n  background-color: sandybrown !important;\r\n}\r\n\r\n.ag-theme-balham .sick-days-breach {\r\n  background-color: lightcoral !important;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.button-bar {\r\n  padding-top: 10px;\r\n  text-align: left;\r\n  padding-left: 1%;\r\n}\r\n\r\n.btn {\r\n  font-weight: bolder;\r\n  font-size: 12px;\r\n  border-radius: 5px;\r\n  border-width: 2px;\r\n  border-style: outset;\r\n  border-color: buttonface;\r\n}\r\n\r\n.navbar-brand {\r\n  height: 25px !important;\r\n  padding: 10px 10px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/ag-grid/18.0.1/styles/ag-grid.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/ag-grid/18.0.1/styles/ag-theme-balham.css\">\r\n<div id=\"container\">\r\n  <div id=\"header\">\r\n    <nav class=\"navbar header-top fixed-top navbar-expand-lg\">\r\n      <a class=\"navbar-brand\">\r\n        <i class=\"material-icons\">cloud</i>\r\n        <span class=\"company-name\">\r\n          HCL Opportunity Tracker\r\n        </span>\r\n      </a>\r\n\r\n      <ul id=\"logout\" class=\"right hide-on-med-and-down\">\r\n        <li class=\"nav-item\">\r\n          {{userFullName}}\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isUserLogged\">\r\n          |\r\n          <a (click)=\"Logout()\" style=\"cursor:pointer;\"> Logout</a>\r\n        </li>\r\n\r\n      </ul>\r\n\r\n\r\n      <!--<ul id=\"logout\" class=\"right hide-on-med-and-down\">\r\n        <li id=\"userName\">\r\n          {{userFullName}}\r\n        </li>\r\n        <li *ngIf=\"isUserLogged\">\r\n          |\r\n          <a (click)=\"Logout()\" style=\"cursor:pointer;\"> Logout</a>\r\n        </li>\r\n      </ul>-->\r\n\r\n    </nav>\r\n  </div>\r\n\r\n  <div id=\"main\">\r\n    <div id=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n  <div id=\"footer\">\r\n    &copy; Copyrights at ERS group HCL\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    Object.defineProperty(AppComponent.prototype, "isUserLogged", {
        get: function () {
            return localStorage.getItem('userToken') != null ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "userFullName", {
        get: function () {
            var userDetails = localStorage.getItem('userWorkFlow') != null ? JSON.parse(localStorage.getItem('userWorkFlow')) : { firstName: 'Welcome', lastName: 'Guest' };
            var name = userDetails.firstName + ' ' + userDetails.lastName;
            return name;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.Logout = function () {
        localStorage.removeItem('userName');
        localStorage.removeItem('userToken');
        localStorage.removeItem('userWorkFlow');
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_user_user_component__ = __webpack_require__("../../../../../src/app/common/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_user_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/common/user/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_user_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/common/user/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_controls_components_numericCell_numeric_cell_component__ = __webpack_require__("../../../../../src/app/common/controls/components/numericCell/numeric-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_controls_components_datePickerCell_date_picker_component__ = __webpack_require__("../../../../../src/app/common/controls/components/datePickerCell/date-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_directives_number_directive__ = __webpack_require__("../../../../../src/app/common/directives/number.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__common_user_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_14__common_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__common_user_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_17__common_controls_components_numericCell_numeric_cell_component__["a" /* NumericCellComponent */],
                __WEBPACK_IMPORTED_MODULE_18__common_controls_components_datePickerCell_date_picker_component__["a" /* DatePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_directives_number_directive__["a" /* NumberOnlyDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__["AgGridModule"].withComponents([__WEBPACK_IMPORTED_MODULE_17__common_controls_components_numericCell_numeric_cell_component__["a" /* NumericCellComponent */], __WEBPACK_IMPORTED_MODULE_18__common_controls_components_datePickerCell_date_picker_component__["a" /* DatePickerComponent */]])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appSettings.setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    //public static BaseAPIUrl: string = 'http://localhost:1283/api/';
    //public static BaseAPIUrl: string = 'http://hclopportunitytrackerwebapi.codingalmanac.com/api/';
    //public static BaseAPIUrl: string = 'https://ersopportunityapi.azurewebsites.net/api/';
    AppSettings.BaseAPIUrl = 'https://ersopportunityapi.azurewebsites.net/api/';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/common/controls/components/datePickerCell/date-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.selectedDate = new Date();
        this.userSelectedDate = null;
    }
    DatePickerComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    DatePickerComponent.prototype.refresh = function (params) {
        return true;
    };
    DatePickerComponent.prototype.getValue = function () {
        //let date = moment(this.selectedDate).format('DD/MM/YYYY')
        //return `${date}`;
        if (this.userSelectedDate) {
            var date = __WEBPACK_IMPORTED_MODULE_1_moment__(this.userSelectedDate).format('DD/MM/YYYY');
            return "" + date;
        }
        else {
            //let date = moment(this.selectedDate).format('DD/MM/YYYY')
            //return `${date}`;
            return " ";
        }
    };
    DatePickerComponent.prototype.isPopup = function () {
        return true;
    };
    DatePickerComponent.prototype.onClick = function (date) {
        //this.selectedDate = date;
        this.userSelectedDate = date;
        this.params.api.stopEditing();
    };
    DatePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-picker-cell',
            template: "<i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n        <datepicker (selectionDone)=\"onClick($event)\" ></datepicker>\n    "
        })
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/controls/components/numericCell/numeric-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumericCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumericCellComponent = (function () {
    function NumericCellComponent() {
        this.cancelBeforeStart = false;
    }
    NumericCellComponent.prototype.agInit = function (params) {
        this.params = params;
        this.value = this.params.value;
        // only start edit if key pressed is a number, not a letter
        this.cancelBeforeStart = params.charPress && ('1234567890'.indexOf(params.charPress) < 0);
    };
    NumericCellComponent.prototype.getValue = function () {
        return this.value;
    };
    NumericCellComponent.prototype.isCancelBeforeStart = function () {
        return this.cancelBeforeStart;
    };
    // will reject the number if it greater than 1,000,000
    // not very practical, but demonstrates the method.
    NumericCellComponent.prototype.isCancelAfterEnd = function () {
        return this.value > 1000000;
    };
    ;
    NumericCellComponent.prototype.onKeyDown = function (event) {
        if (!this.isKeyPressedNumeric(event)) {
            if (event.preventDefault)
                event.preventDefault();
        }
    };
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    NumericCellComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.input.element.nativeElement.focus();
        });
    };
    NumericCellComponent.prototype.getCharCodeFromEvent = function (event) {
        event = event || window.event;
        return (typeof event.which == "undefined") ? event.keyCode : event.which;
    };
    NumericCellComponent.prototype.isCharNumeric = function (charStr) {
        return !!/\d/.test(charStr);
    };
    NumericCellComponent.prototype.isKeyPressedNumeric = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode == 8 || event.keyCode == 46
            || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        var charCode = this.getCharCodeFromEvent(event);
        var charStr = event.key ? event.key : String.fromCharCode(charCode);
        return this.isCharNumeric(charStr);
    };
    NumericCellComponent.prototype.validateKey = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode == 8 || event.keyCode == 46
            || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else if (key < 48 || key > 57) {
            return false;
        }
        else
            return true;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], NumericCellComponent.prototype, "input", void 0);
    NumericCellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'numeric-cell',
            template: "<input #input (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"value\" style=\"width: 100%\">"
        })
    ], NumericCellComponent);
    return NumericCellComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/directives/number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberOnlyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberOnlyDirective = (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[numberOnly]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form input {\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 15px;\r\n    padding: 15px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    font-size: 14px;\r\n  }\r\n\r\n.form button {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    outline: 0;\r\n    background: #38547b;\r\n    width: 100%;\r\n    border: 0;\r\n    padding: 15px;\r\n    color: #FFFFFF;\r\n    font-size: 14px;\r\n    -webkit-transition: all 0.3 ease;\r\n    transition: all 0.3 ease;\r\n    cursor: pointer;\r\n  }\r\n\r\n.form button:hover, .form button:active, .form button:focus {\r\n      background: #1b3456;\r\n    }\r\n\r\n.form button:disabled {\r\n      background: #6a717a;\r\n    }\r\n\r\n.form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n\r\n.form .message a {\r\n      color: #4CAF50;\r\n      text-decoration: none;\r\n    }\r\n\r\n.form .register-form {\r\n    display: none;\r\n  }\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n  }\r\n\r\n.container .info {\r\n    margin: 50px auto;\r\n    text-align: center;\r\n  }\r\n\r\n.container .info h1 {\r\n      margin: 0 0 15px;\r\n      padding: 0;\r\n      font-size: 36px;\r\n      font-weight: 300;\r\n      color: #1a1a1a;\r\n    }\r\n\r\n.container .info span {\r\n      color: #4d4d4d;\r\n      font-size: 12px;\r\n    }\r\n\r\n.container .info span a {\r\n        color: #000000;\r\n        text-decoration: none;\r\n      }\r\n\r\n.container .info span .fa {\r\n        color: #EF3B3A;\r\n      }\r\n\r\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.red-text {\r\n  margin-top: 10px;\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/user/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\">\r\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\r\n    <i class=\"material-icons\">error</i> Incorrect username or password\r\n</div>\r\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(UserName.value,Password.value)\">\r\n  <ng4-loading-spinner [timeout]=\"80000\" [template]=\"template\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"> </ng4-loading-spinner>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <i class=\"material-icons prefix\">account_circle</i>\r\n      <input type=\"text\" #UserName ngModel name=\"UserName\" placeholder=\"Username\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <i class=\"material-icons prefix\">vpn_key</i>\r\n      <input type=\"password\" #Password ngModel name=\"Password\" placeholder=\"Password\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\r\n    </div>\r\n  </div>\r\n</form>-->\r\n<ng4-loading-spinner [timeout]=\"80000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"> </ng4-loading-spinner>\r\n<div class=\"login-page\">\r\n  <div class=\"form\">\r\n    <form class=\"register-form\">\r\n      <input type=\"text\" placeholder=\"name\" />\r\n      <input type=\"password\" placeholder=\"password\" />\r\n      <input type=\"text\" placeholder=\"email address\" />\r\n      <button>create</button>\r\n      <p class=\"message\">Already registered? <a href=\"#\">Sign In</a></p>\r\n    </form>\r\n    <form class=\"login-form\" #loginForm=\"ngForm\" (ngSubmit)=\"OnSubmit(UserName.value,Password.value)\">\r\n      <input type=\"text\" #UserName ngModel name=\"UserName\" placeholder=\"Username\" required />\r\n      <input type=\"password\" #Password ngModel name=\"Password\" placeholder=\"Password\" required />\r\n      <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\r\n      <!--<p class=\"message\">Not registered? <a href=\"#\">Create an account</a></p>-->\r\n      <div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\r\n        <i class=\"material-icons\">error</i> Incorrect username or password\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/user/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    // public template: string = `<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;
    //public static user: User = new User();
    function SignInComponent(authService, userService, router, spinnerService) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.isLoginError = false;
        this.loading = true;
        this.template = undefined;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.spinnerService.hide();
        if (localStorage.getItem('userToken') != null) {
            var navigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true
            };
            this.router.navigate(['opportunitylist'], navigationExtras);
        }
    };
    SignInComponent.prototype.OnSubmit = function (userName, password) {
        var _this = this;
        this.isLoginError = false;
        //this.userService.userAuthentication(userName, password).subscribe((data: any) => {
        //  localStorage.setItem('userToken', data.access_token);
        //  this.router.navigate(['/opportunitylist']);
        //},
        //  (err: HttpErrorResponse) => {
        //    this.isLoginError = true;
        //  });
        this.spinnerService.show();
        this.loading = true;
        this.userService.userAuthentication(userName, password)
            .subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            _this.authService.isLoggedIn = true;
            _this.authService.token = data.access_token;
            _this.authService.userName = userName;
            var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : 'opportunitylist';
            var navigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true
            };
            _this.userService.getUserWorkFlowDataById(userName).subscribe(function (userdata) {
                localStorage.setItem('userWorkFlow', JSON.stringify(userdata));
                _this.authService.userWorkFlow = userdata;
                _this.spinnerService.hide();
                _this.router.navigate(['opportunitylist'], navigationExtras);
            }, function (err) {
                _this.spinnerService.hide();
                _this.isLoginError = true;
            });
        }, function (err) {
            _this.spinnerService.hide();
            _this.isLoginError = true;
        });
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/common/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/user/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\">\n<form class=\"col s12 white\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"text\" name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"user.UserName\" required>\n      <label data-error=\"Required field!\">UserName</label>\n    </div>\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.Password\" required minlength=\"3\">\n      <label [attr.data-error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"user.Email\" [pattern]=\"emailPattern\">\n      <label data-error=\"Invalid email!\">Email</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"user.FirstName\">\n      <label>First Name</label>\n    </div>\n    <div class=\"input-field col s6\">\n      <input type=\"text\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"user.LastName\">\n      <label>Last Name</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <button [disabled]=\"!userRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Submit</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/common/user/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.userService.registerUser(form.value)
            .subscribe(function (data) {
            if (data.Succeeded == true) {
                _this.resetForm(form);
                _this.toastr.success('User registration successful');
            }
            else
                _this.toastr.error(data.Errors[0]);
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/common/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/common/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_appSettings_setting__ = __webpack_require__("../../../../../src/app/appSettings.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService_1 = UserService;
    UserService.prototype.registerUser = function (user) {
        var body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'No-Auth': 'True' });
        return this.http.post(UserService_1.AccountUrl + 'Register', body, { headers: reqHeader });
    };
    UserService.prototype.userAuthentication = function (userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post('https://ersopportunityapi.azurewebsites.net/token', data, { headers: reqHeader });
    };
    UserService.prototype.getUserClaims = function () {
        return this.http.get(UserService_1.AccountUrl + 'GetUserClaims');
    };
    UserService.prototype.getUserWorkFlowDataById = function (userId) {
        return this.http.get(UserService_1.WorkFlowUrl + 'userdetails/' + userId + '/');
    };
    UserService.prototype.getUserWorkFlowData = function () {
        return this.http.get(UserService_1.WorkFlowUrl + 'userdetails');
    };
    UserService.AccountUrl = __WEBPACK_IMPORTED_MODULE_3__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'Account/';
    UserService.WorkFlowUrl = __WEBPACK_IMPORTED_MODULE_3__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'WorkFlowUser/';
    UserService = UserService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
    var UserService_1;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_user_user_component__ = __webpack_require__("../../../../../src/app/common/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_user_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/common/user/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/common/user/sign-in/sign-in.component.ts");



var appRoutes = [
    //{ path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    {
        path: 'opportunitylist',
        loadChildren: 'app/features/opportunity/opportunity.module#OpportunityModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: 'uploadfiles',
        loadChildren: 'app/features/upload-file/upload-file.module#UploadFileModule'
    },
    {
        path: 'signup', component: __WEBPACK_IMPORTED_MODULE_0__common_user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_1__common_user_sign_up_sign_up_component__["a" /* SignUpComponent */] }]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__common_user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__common_user_sign_in_sign_in_component__["a" /* SignInComponent */] }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];


/***/ }),

/***/ "../../../../../src/app/shared/services/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
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
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        // console.log('AuthGuard#canActivate called');
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        // console.log('canLoad');
        // console.log(this.authService.isLoggedIn);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (localStorage.getItem('userToken') != null)
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('/login');
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/services/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appSettings_setting__ = __webpack_require__("../../../../../src/app/appSettings.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // testUserData: Array<User> = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
    // { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];
    // End TestData Section  
    function AuthService(webApiService) {
        this.webApiService = webApiService;
        this.isLoggedIn = false;
        this.userData = null;
        this.userName = 'Guest';
    }
    AuthService_1 = AuthService;
    //TODO -- remove this code after Web API implementation
    // public static loginUrl = 'src/assets/userdata.json';
    // public static navMenuUrl = 'assets/userdata.json';
    AuthService.prototype.login = function (id, password) {
        //TODO: Need to implement Actual login logic
        // return Observable.of(true).delay(1000).do(val => this.verifuser(id, password));
        var param = {
            userId: id,
            password: password
        };
        this.userData = this.webApiService.Post(AuthService_1.loginUrl, param);
        return this.userData;
    };
    AuthService.prototype.setUserDetails = function (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.token = null;
        this.isLoggedIn = false;
        this.currentUser = undefined;
        this.userName = 'Guest';
        localStorage.removeItem('currentUser');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true).delay(1000).do(function (val) { return _this.isLoggedIn = false; });
    };
    //TODO -- uncomment this code after Web API implementation
    AuthService.loginUrl = __WEBPACK_IMPORTED_MODULE_6__appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'login';
    AuthService = AuthService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__webApiManager_service__["a" /* WebApiManager */]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/webApiManager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebApiManager = (function () {
    function WebApiManager(http) {
        this.http = http;
        this.headerObj = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'No-Auth': 'True'
        });
    }
    WebApiManager.prototype.Post = function (url, dataToPost) {
        console.log("Angular2 - Making HTTP POST -> URL: " + url + ", with DATA: " + JSON.stringify(dataToPost));
        return this.http.post(url, dataToPost)
            .catch(this.handleError);
    };
    WebApiManager.prototype.Get = function (url) {
        return this.http.get(url)
            .catch(this.handleError);
    };
    WebApiManager.prototype.PostWithNoAuthentication = function (url, dataToPost) {
        console.log("Angular2 - Making HTTP POST -> URL: " + url + ", with DATA: " + JSON.stringify(dataToPost));
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(url, dataToPost, { headers: reqHeader })
            .catch(this.handleError);
    };
    WebApiManager.prototype.GetWithNoAuthentication = function (url) {
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.get(url, { headers: reqHeader })
            .catch(this.handleError);
    };
    WebApiManager.prototype.handleError = function (error) {
        // TODO - Do proper logging
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    WebApiManager.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    WebApiManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], WebApiManager);
    return WebApiManager;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/services/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_interceptor__ = __webpack_require__("../../../../../src/app/shared/services/auth.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_10__services_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                }]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* ReactiveFormsModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_webApiManager_service__["a" /* WebApiManager */], __WEBPACK_IMPORTED_MODULE_9__common_user_user_service__["a" /* UserService */]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map