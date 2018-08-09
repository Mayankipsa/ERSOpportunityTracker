webpackJsonp(["upload-file.module"],{

/***/ "../../../../../src/app/features/upload-file/details-upload/details-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/upload-file/details-upload/details-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"{{fileUpload}}\">{{fileUpload}}</a>"

/***/ }),

/***/ "../../../../../src/app/features/upload-file/details-upload/details-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsUploadComponent; });
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

var DetailsUploadComponent = (function () {
    function DetailsUploadComponent() {
    }
    DetailsUploadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DetailsUploadComponent.prototype, "fileUpload", void 0);
    DetailsUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'details-upload',
            template: __webpack_require__("../../../../../src/app/features/upload-file/details-upload/details-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/upload-file/details-upload/details-upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsUploadComponent);
    return DetailsUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/upload-file/form-upload/form-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/upload-file/form-upload/form-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentFileUpload\" class=\"progress\">\r\n  <div class=\"progress-bar progress-bar-info progress-bar-striped\"\r\n       role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\r\n       aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n       [ngStyle]=\"{width:progress.percentage+'%'}\">\r\n    {{progress.percentage}}%\r\n  </div>\r\n</div>\r\n<div>\r\n  <label class=\"btn btn-default\">\r\n    <input type=\"file\" (change)=\"selectFile($event)\">\r\n  </label>\r\n  <br /><br />\r\n\r\n  <div>\r\n    <div class=\"form-group\">\r\n      <label for=\"status\">FileType</label>\r\n      <select name=\"profile\" [(ngModel)]=\"currentFileType\">\r\n        <option *ngFor=\"let fileType of fileTypes\" [ngValue]=\"fileType\">\r\n          {{ fileType.name }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <br /><br />\r\n    <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\r\n            (click)=\"upload()\">\r\n      Upload\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/features/upload-file/form-upload/form-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_service__ = __webpack_require__("../../../../../src/app/features/upload-file/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormUploadComponent = (function () {
    function FormUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.value = {};
        this.progress = { percentage: 0 };
    }
    FormUploadComponent.prototype.ngOnInit = function () {
        this.fileTypes = [
            { name: 'Opportunity Data', type: 'opportunity' },
            { name: 'SR Data', type: 'srdata' },
            { name: 'Excalibur Data', type: 'excaliburdata' }
        ];
        this.currentFileType = this.fileTypes[0];
    };
    FormUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FormUploadComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        var fileUploadModel = {
            fileType: this.currentFileType['type']
        };
        this.uploadService.pushFileToStorage(this.currentFileUpload, fileUploadModel).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpResponse */]) {
                //console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    };
    FormUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-upload',
            template: __webpack_require__("../../../../../src/app/features/upload-file/form-upload/form-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/upload-file/form-upload/form-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__upload_file_service__["a" /* UploadFileService */]])
    ], FormUploadComponent);
    return FormUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/upload-file/list-upload/list-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/upload-file/list-upload/list-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"button btn-info\" *ngIf='showFile'\n\t(click)='showFiles(false)'>Hide Files</button>\n\n<button class=\"button btn-info\" *ngIf='!showFile'\n\t(click)='showFiles(true)'>Show Files</button>\n\n<div [hidden]=\"!showFile\">\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">List of Files</div>\n\t\t<div *ngFor=\"let file of fileUploads | async\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<details-upload [fileUpload]='file'></details-upload>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/upload-file/list-upload/list-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_file_service__ = __webpack_require__("../../../../../src/app/features/upload-file/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListUploadComponent = (function () {
    function ListUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.showFile = false;
    }
    ListUploadComponent.prototype.ngOnInit = function () {
    };
    ListUploadComponent.prototype.showFiles = function (enable) {
        this.showFile = enable;
        if (enable) {
            // this.fileUploads = this.uploadService.getFiles();
        }
    };
    ListUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-upload',
            template: __webpack_require__("../../../../../src/app/features/upload-file/list-upload/list-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/upload-file/list-upload/list-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_file_service__["a" /* UploadFileService */]])
    ], ListUploadComponent);
    return ListUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/upload-file/upload-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/upload-file/upload-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:400px\">\r\n  <div style=\"color: blue; margin-bottom: 20px\">\r\n    <h6>{{title}}</h6>\r\n    <h6>{{description}}</h6>\r\n  </div>\r\n  <form-upload></form-upload>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/upload-file/upload-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UploadFileComponent = (function () {
    function UploadFileComponent() {
        this.title = 'Opportunity Upload';
        this.description = 'Upload Opportunity file in excel format';
    }
    UploadFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'upload-files',
            template: __webpack_require__("../../../../../src/app/features/upload-file/upload-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/upload-file/upload-file.component.css")]
        })
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/upload-file/upload-file.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileModule", function() { return UploadFileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_file_routing__ = __webpack_require__("../../../../../src/app/features/upload-file/upload-file.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_file_component__ = __webpack_require__("../../../../../src/app/features/upload-file/upload-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_upload_details_upload_component__ = __webpack_require__("../../../../../src/app/features/upload-file/details-upload/details-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_upload_form_upload_component__ = __webpack_require__("../../../../../src/app/features/upload-file/form-upload/form-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_upload_list_upload_component__ = __webpack_require__("../../../../../src/app/features/upload-file/list-upload/list-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_file_service__ = __webpack_require__("../../../../../src/app/features/upload-file/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UploadFileModule = (function () {
    function UploadFileModule() {
    }
    UploadFileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__upload_file_routing__["a" /* UploadFileRouting */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__upload_file_component__["a" /* UploadFileComponent */], __WEBPACK_IMPORTED_MODULE_8__details_upload_details_upload_component__["a" /* DetailsUploadComponent */], __WEBPACK_IMPORTED_MODULE_9__form_upload_form_upload_component__["a" /* FormUploadComponent */], __WEBPACK_IMPORTED_MODULE_10__list_upload_list_upload_component__["a" /* ListUploadComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_7__upload_file_component__["a" /* UploadFileComponent */], __WEBPACK_IMPORTED_MODULE_8__details_upload_details_upload_component__["a" /* DetailsUploadComponent */], __WEBPACK_IMPORTED_MODULE_9__form_upload_form_upload_component__["a" /* FormUploadComponent */], __WEBPACK_IMPORTED_MODULE_10__list_upload_list_upload_component__["a" /* ListUploadComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__upload_file_component__["a" /* UploadFileComponent */], __WEBPACK_IMPORTED_MODULE_8__details_upload_details_upload_component__["a" /* DetailsUploadComponent */], __WEBPACK_IMPORTED_MODULE_9__form_upload_form_upload_component__["a" /* FormUploadComponent */], __WEBPACK_IMPORTED_MODULE_10__list_upload_list_upload_component__["a" /* ListUploadComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__upload_file_service__["a" /* UploadFileService */]]
        })
    ], UploadFileModule);
    return UploadFileModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/upload-file/upload-file.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_file_component__ = __webpack_require__("../../../../../src/app/features/upload-file/upload-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.guard.service.ts");



var uploadFileRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__upload_file_component__["a" /* UploadFileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    { path: 'uploadfiles', component: __WEBPACK_IMPORTED_MODULE_1__upload_file_component__["a" /* UploadFileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_guard_service__["a" /* AuthGuard */]] }
                    //{
                    //  path: '',
                    //  canActivateChild: [AuthGuard],
                    //  component: SelfSpeechComponent
                    //},
                    //{ path: 'allspeech', component: AllSpeechComponent },
                    //{ path: 'filterspeech', component: SearchResultSpeechComponent },
                    //{ path: 'newspeech', component: NewSpeechComponent, canDeactivate: [CanDeactivateService] },
                    //{ path: 'userspeech', component: SelfSpeechComponent }
                ]
            }
        ]
    }
];
var UploadFileRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(uploadFileRoutes);


/***/ }),

/***/ "../../../../../src/app/features/upload-file/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/services/webApiManager.service.ts");
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




var UploadFileService = (function () {
    function UploadFileService(webApiService, http) {
        this.webApiService = webApiService;
        this.http = http;
    }
    UploadFileService_1 = UploadFileService;
    UploadFileService.prototype.pushFileToStorage = function (file, fileUploadModel) {
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('filetype', fileUploadModel.fileType);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpRequest */]('POST', UploadFileService_1.OpportunityUploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadFileService.OpportunityUploadUrl = __WEBPACK_IMPORTED_MODULE_3__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'Fileupload/';
    UploadFileService = UploadFileService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_webApiManager_service__["a" /* WebApiManager */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UploadFileService);
    return UploadFileService;
    var UploadFileService_1;
}());



/***/ })

});
//# sourceMappingURL=upload-file.module.chunk.js.map