webpackJsonp(["opportunity.module"],{

/***/ "../../../../../src/app/features/opportunity/components/SelectList/selectList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-theme-balham .ag-cell-inline-editing select {\r\n    height: unset !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/SelectList/selectList.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n    {{value}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/SelectList/selectList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectListComponent = (function () {
    function SelectListComponent() {
    }
    SelectListComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    SelectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-list',
            template: __webpack_require__("../../../../../src/app/features/opportunity/components/SelectList/selectList.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/opportunity/components/SelectList/selectList.component.css")]
        })
    ], SelectListComponent);
    return SelectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit {\r\n  visibility: visible;\r\n}\r\n\r\n.save {\r\n}\r\n\r\n.cancel {\r\n}\r\n\r\n.btn {\r\n  font-weight: bolder;\r\n  font-size: 9px;\r\n  border-radius: 5px;\r\n  border-width: 2px;\r\n  border-style: outset;\r\n  border-color: buttonface;\r\n  height: 90%;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.isDisabled {\r\n  color: currentColor;\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button class=\"btn\" (click)=\"Edit($event)\" *ngIf=\"(!isEdit) && (!isNew)\"> Edit</button>-->\r\n<!--<button class=\"btn save\" (click)=\"Save($event)\" *ngIf=\"isEdit||isNew\">Save</button>-->\r\n<!--<button class=\"btn cancel\" (click)=\"Cancel($event)\" *ngIf=\"isEdit||isNew\">Cancel</button>-->\r\n<!--<a (click)=\"Delete($event)\" class=\"isDisabled\" *ngIf=\"!isSelected\"> Delete</a>-->\r\n<!--<a (click)=\"Delete($event)\"> Delete</a>-->\r\n<!--<span *ngIf=\"isNew && !isAdded\">|</span>\r\n<a (click)=\"Undo($event)\" *ngIf=\"isNew && !isAdded\"> Undo</a>-->\r\n\r\n<a (click)=\"Submit($event)\" *ngIf=\"!isApproved && isAssignedToSelf\"> Submit</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActionRenderer = (function () {
    function ActionRenderer() {
        this.rowsOldState = [];
        this.rowSeletedData = [];
        this.isEdit = false;
        this.isNew = false;
        this.isAdded = false;
        this.isSelected = false;
        this.isApproved = false;
        this.isAssignedToSelf = false;
        this.user = [];
    }
    ActionRenderer.prototype.agInit = function (params) {
        this.mainGrid = params;
        this.rowsOldState = params.rowsOldStateData;
        this.rowSeletedData = params.rowSeletedData;
        this.submitRow = params.submitRow;
        this.isSelected = params.node.selected;
        this.user = params.userWorkFlow;
        if (params.data.approvedStatus == "Approved") {
            this.isApproved = true;
        }
        if (params.data.assignedToUserEmail == this.user.email) {
            this.isAssignedToSelf = true;
        }
        this.isNew = params.data.IsNewOrUpdated;
    };
    ActionRenderer.prototype.refresh = function (params) {
        this.isNew = params.data.IsNewOrUpdated;
        return true;
    };
    ActionRenderer.prototype.Submit = function (params) {
        var currentCell = this.mainGrid.api.getFocusedCell();
        this.submitRow(currentCell.rowIndex);
    };
    ActionRenderer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'action-cell',
            template: __webpack_require__("../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.css")]
        })
    ], ActionRenderer);
    return ActionRenderer;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#opportunitycontent {\r\n  overflow: auto;\r\n}\r\n\r\n.button-nav {\r\n  padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner [timeout]=\"80000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"> </ng4-loading-spinner>\r\n<div id=\"opportunitycontent\">\r\n  <div class=\"button-bar button-nav \">\r\n    <button (click)=\"addNewOpportunity()\" class=\"btn\">Add New Opportunity</button>\r\n    <button (click)=\"saveOpportunity()\" class=\"btn\">Save Opportunities</button>\r\n    <button (click)=\"autoSizeAll()\" class=\"btn\">Auto-Size All</button>\r\n    <button (click)=\"exportToExcel()\" class=\"btn\">Export to Excel</button>\r\n    <button (click)=\"getOpportunities(false)\" class=\"btn\">All Opportunities</button>\r\n    <button (click)=\"filterMyPendingApprovals()\" class=\"btn\">Pending for My Approval</button>\r\n    <button (click)=\"onRemoveOpportunity()\" class=\"btn\">Delete All Selected</button>\r\n    <button (click)=\"onUndo()\" class=\"btn\">Undo All Changes</button>\r\n    <button (click)=\"onDeselectAll()\" class=\"btn\">Deselect All</button>\r\n  </div>\r\n\r\n  <div class=\"OpportunityTracker\">\r\n    <ag-grid-angular #agGrid style=\"height:475px; width: 98%;margin:10px auto;\" class=\"ag-theme-balham\"\r\n    [enableSorting]=\"true\"\r\n    [pagination]=\"true\"\r\n    [paginationPageSize]=\"50\"\r\n    [enableFilter]=\"true\" [columnDefs]=\"columnDefs\"\r\n    [rowData]=\"rowData\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [enableColResize]=\"true\"\r\n    [floatingFilter]=\"true\"\r\n    [frameworkComponents]=\"frameworkComponents\"\r\n    [editType]=\"editType\"\r\n    (modelUpdated)=\"onModelUpdated()\"\r\n    rowSelection=\"multiple\"\r\n    (gridReady)=\"onGridReady($event)\"\r\n    (rowSelected)=\"rowClick($event)\"\r\n    (cellValueChanged)=\"onCellValueChanged($event)\"\r\n    (cellEditingStarted)=\"onRowEditing($event)\"\r\n    [enableCellChangeFlash]=\"true\"\r\n    [rowClassRules]=\"rowClassRules\">\r\n    </ag-grid-angular>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opportunity_service__ = __webpack_require__("../../../../../src/app/features/opportunity/opportunity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectList_selectList_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/SelectList/selectList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sr_editor_sr_editor_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sr_renderer_sr_renderer_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__action_renderer_action_renderer_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_controls_components_numericCell_numeric_cell_component__ = __webpack_require__("../../../../../src/app/common/controls/components/numericCell/numeric-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_controls_components_datePickerCell_date_picker_component__ = __webpack_require__("../../../../../src/app/common/controls/components/datePickerCell/date-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OpportunityListComponent = (function () {
    function OpportunityListComponent(router, opportunityService, userService, authService, spinnerService) {
        this.router = router;
        this.opportunityService = opportunityService;
        this.userService = userService;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.rowData = [];
        this.rowsOldStateData = [];
        this.rowsDeletedData = [];
        this.columnDefs = [];
        this.defaultColDef = [];
        this.template = undefined;
        this.rowClassRules = {
            "bg-in-progress": function (params) {
                var stat = params.data.status;
                return stat.toLowerCase() == "in progress";
            },
            "bg-won": function (params) {
                var stat = params.data.status;
                return stat.toLowerCase() == "won";
            },
            "bg-in-discussion": function (params) {
                var stat = params.data.status;
                return stat.toLowerCase() == "in discussion";
            },
            "bg-on-hold": function (params) {
                var stat = params.data.status;
                return stat.toLowerCase() == "on hold";
            },
            "bg-lost": function (params) {
                var stat = params.data.status;
                return stat.toLowerCase() == "lost";
            },
        };
        this.frameworkComponents = {
            selectList: __WEBPACK_IMPORTED_MODULE_4__SelectList_selectList_component__["a" /* SelectListComponent */],
            sreditor: __WEBPACK_IMPORTED_MODULE_5__sr_editor_sr_editor_component__["a" /* SREditorComponent */],
            srRenderer: __WEBPACK_IMPORTED_MODULE_6__sr_renderer_sr_renderer_component__["a" /* SRRenderer */],
            actionRenderer: __WEBPACK_IMPORTED_MODULE_7__action_renderer_action_renderer_component__["a" /* ActionRenderer */],
            numericEditor: __WEBPACK_IMPORTED_MODULE_8__common_controls_components_numericCell_numeric_cell_component__["a" /* NumericCellComponent */],
            datePickerEditor: __WEBPACK_IMPORTED_MODULE_9__common_controls_components_datePickerCell_date_picker_component__["a" /* DatePickerComponent */]
        };
        //this.editType = "fullRow";
        this.user = __WEBPACK_IMPORTED_MODULE_3__common_user_user_service__["a" /* UserService */].user;
        if (localStorage.getItem('userWorkFlow') != null) {
            this.userWorkFlow = JSON.parse(localStorage.getItem('userWorkFlow'));
        }
    }
    OpportunityListComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.columnDefs = [];
        this.rowsOldStateData = [];
        this.getLookUpData();
        this.getOpportunities(true);
    };
    OpportunityListComponent.prototype.Logout = function () {
        localStorage.removeItem('userName');
        localStorage.removeItem('userToken');
        localStorage.removeItem('userWorkFlow');
        this.router.navigate(['/login']);
    };
    // Grid rows actions
    OpportunityListComponent.prototype.onUndo = function () {
        var _this = this;
        this.rowData = [];
        this.rowsOldStateData.forEach(function (element) {
            element['IsNewOrUpdated'] = false;
            _this.rowData.push(Object.assign({}, element));
        });
        this.gridApi.updateRowData(this.rowData);
    };
    OpportunityListComponent.prototype.removeCurrentRow = function (gridAPI, selectedData) {
        var res = this.gridApi.updateRowData({ remove: selectedData });
    };
    OpportunityListComponent.prototype.onDeselectAll = function () {
        this.gridApi.deselectAll();
    };
    // Opportunities actions
    OpportunityListComponent.prototype.addNewOpportunity = function () {
        var opportunity = {};
        this.rowsOldStateData.forEach(function (data) {
            data.index++;
        });
        this.columnDefs.forEach(function (header) {
            opportunity[header.field] = '';
        });
        opportunity['IsNewOrUpdated'] = true;
        opportunity['isEditable'] = true;
        opportunity['IsAdded'] = true;
        opportunity['createdBy'] = this.userWorkFlow.email;
        opportunity['assignedToUserEmail'] = this.userWorkFlow.email;
        opportunity['assignedToUserName'] = this.userWorkFlow.firstName;
        var res = this.gridApi.updateRowData({ add: [opportunity], addIndex: 0 });
    };
    OpportunityListComponent.prototype.onRemoveOpportunity = function () {
        var _this = this;
        var deletedData = [];
        this.gridApi.getSelectedRows().forEach(function (row) {
            _this.rowsDeletedData.push(row);
            deletedData.push(row);
        });
        var res = this.gridApi.updateRowData({ remove: deletedData });
    };
    OpportunityListComponent.prototype.saveOpportunity = function () {
        var _this = this;
        this.spinnerService.show();
        var rowData = [];
        this.gridApi.forEachNode(function (node) {
            if (node.data['IsNewOrUpdated']) {
                var element = node.data;
                _this.userWorkFlow.reportingManager.forEach(function (element) {
                    if ((element.firstName + ' ' + element.lastName) == element['assignedToUserName']) {
                        element['assignedToUserEmail'] = element.email;
                        element['updatedBy'] = _this.userWorkFlow.email;
                    }
                });
                rowData.push(_this.setOpportunityDefaultDataToSave(element, false));
            }
        });
        this.rowsDeletedData.forEach(function (element) {
            rowData.push(_this.setOpportunityDefaultDataToSave(element, true));
        });
        this.opportunityService.SaveOpportunity(rowData).subscribe(function (data) {
            _this.getOpportunities(false);
        });
    };
    OpportunityListComponent.prototype.submitOpportunity = function (opportunity) {
        var _this = this;
        var isValid = true;
        for (var property in opportunity) {
            var currentField = opportunity[property];
            var currentColumdef = this.defaultColDef.find(function (element) {
                return element.name == property;
            });
            if (currentColumdef != undefined && currentColumdef.isRequired && (currentField == undefined || currentField == '')) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            this.spinnerService.show();
            var assignedToUserFirstName = opportunity['assignedToUserName'].substr(0, opportunity['assignedToUserName'].indexOf(' '));
            ;
            var reportingManagers = this.userWorkFlow.reportingManager;
            console.log("assignedToUserFirstName:", assignedToUserFirstName);
            console.log("reposrtingManagers:", reportingManagers);
            opportunity['updatedBy'] = this.userWorkFlow.email;
            //If Assigned to Self
            if (assignedToUserFirstName.trim() === this.userWorkFlow.firstName.trim()) {
                opportunity['assignedToUserEmail'] = this.userWorkFlow.email;
            }
            else {
                opportunity['assignedToUserEmail'] = reportingManagers.find(function (x) { return x.firstName.trim() == assignedToUserFirstName.trim(); }).email;
                console.log("assignedToUserEmail", opportunity['assignedToUserEmail']);
            }
            this.opportunityService.SubmitOpportunity(opportunity).subscribe(function (data) {
                _this.spinnerService.hide();
                alert("Opportunity Submitted Successfully!");
                _this.getOpportunities(false);
            });
        }
        else {
            alert('Please fill all required field/ fields');
        }
    };
    OpportunityListComponent.prototype.setOpportunityDefaultDataToSave = function (opportunity, isDeleted) {
        for (var property in opportunity) {
            var currentField = opportunity[property];
            var currentColumdef = this.defaultColDef.find(function (element) {
                return element.name == property;
            });
            if (currentColumdef != undefined && currentColumdef.type == 5) {
                opportunity[property] = this.getSaveDatewithFormat(currentField);
            }
        }
        opportunity['updatedBy'] = this.userWorkFlow.email;
        if (isDeleted) {
            opportunity['isActive'] = false;
        }
        return opportunity;
    };
    // Grid data initialisation
    OpportunityListComponent.prototype.initialiseDynamicGridHeaders = function (headers) {
        var _this = this;
        headers.forEach(function (element) {
            if (element.isDisplay) {
                switch (element.type) {
                    case 2:
                        _this.columnDefs.push(_this.getDropDownColumn(element));
                        break;
                    case 3:
                        _this.columnDefs.push(_this.getPopupColumn(element));
                        break;
                    case 4:
                        _this.columnDefs.push(_this.getNumericColumn(element));
                        break;
                    case 5:
                        _this.columnDefs.push(_this.getDatePickerColumn(element));
                        break;
                    case 6:
                        _this.columnDefs.push(_this.getRichTextEditorColumn(element));
                        break;
                    default:
                        _this.columnDefs.push(_this.getDefaultColumn(element));
                        break;
                }
            }
        });
    };
    OpportunityListComponent.prototype.initialiseGridRows = function (rows) {
        var _this = this;
        this.rowData = [];
        rows.forEach(function (element) {
            for (var property in element) {
                var currentField = element[property];
                var currentColumdef = _this.defaultColDef.find(function (field) {
                    return field.name == property;
                });
                if (currentColumdef != undefined && currentColumdef.type == 5) {
                    element[property] = _this.getDisplayDatewithFormat(currentField);
                }
            }
            element['IsNewOrUpdated'] = false;
            if (_this.userWorkFlow.reportingManager != undefined) {
                _this.userWorkFlow.reportingManager.forEach(function (element) {
                    if ((element.firstName + ' ' + element.lastName) == element['assignedToUserName']) {
                        element['assignedToUserEmail'] = element.email;
                    }
                });
            }
            _this.rowData.push(element);
            _this.rowsOldStateData.push(Object.assign({}, element));
            var res = _this.gridApi.setRowData(_this.rowData);
        });
    };
    // To filter Opportunities Waiting for Logged In User Approval
    OpportunityListComponent.prototype.filterMyPendingApprovals = function () {
        var _this = this;
        var data = this.rowData;
        this.rowData = [];
        data.forEach(function (element) {
            element['IsNewOrUpdated'] = false;
            if (element.assignedToUserEmail == _this.userWorkFlow.email && element.approvedStatus == "Pending") {
                _this.rowData.push(element);
            }
        });
    };
    OpportunityListComponent.prototype.getOpportunities = function (isFirstTime) {
        var _this = this;
        // Enable loader
        this.spinnerService.show();
        this.opportunityService.getOpportunityData().subscribe(function (data) {
            if (isFirstTime) {
                _this.defaultColDef = data.headers;
                _this.rowData = [];
                _this.columnDefs = [];
                // Create Static Columns
                _this.columnDefs.push(_this.getCheckBoxColumn());
                _this.columnDefs.push(_this.getActionColumn());
                _this.columnDefs.push(_this.getIdentityColumn());
                // Create Dynamic Columns
                _this.initialiseDynamicGridHeaders(data.headers);
            }
            _this.initialiseGridRows(data.rows);
            // Disable Loader
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
        });
    };
    OpportunityListComponent.prototype.getLookUpData = function () {
        var _this = this;
        this.opportunityService.getLookUpData().subscribe(function (data) {
            _this.lookUpData = data;
        }, function (err) {
            _this.spinnerService.hide();
        });
    };
    OpportunityListComponent.prototype.getSaveDatewithFormat = function (value) {
        if (value != undefined) {
            return __WEBPACK_IMPORTED_MODULE_12_moment__(value, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }
        return undefined;
    };
    OpportunityListComponent.prototype.getDisplayDatewithFormat = function (value) {
        if (value != undefined) {
            var validDate = new Date(value);
            return __WEBPACK_IMPORTED_MODULE_12_moment__(validDate).format('DD/MM/YYYY');
        }
        return undefined;
    };
    OpportunityListComponent.prototype.getSpecificLookUpData = function (lookUpType) {
        var rmNameList = [];
        if (lookUpType === 'AssignedToUserName') {
            this.userWorkFlow.reportingManager.forEach(function (element) {
                rmNameList.push(element.firstName + ' ' + element.lastName);
            });
            return { values: rmNameList };
        }
        var lookUpObjects = this.lookUpData.filter(function (obj) {
            return obj.lookUpType === lookUpType;
        });
        var lookUpData = lookUpObjects.map(function (item) {
            return item['value'];
        });
        lookUpData.forEach(function (item) {
            rmNameList.push(item);
        });
        return { values: rmNameList };
    };
    OpportunityListComponent.prototype.getCheckBoxColumn = function () {
        return {
            headerName: '#',
            width: 30,
            checkboxSelection: true,
            suppressSorting: true,
            suppressMenu: true,
            pinned: true,
            suppressFilter: true
        };
    };
    OpportunityListComponent.prototype.getActionColumn = function () {
        var _this = this;
        return {
            headerName: "Actions",
            field: "id",
            editable: false,
            width: 90,
            suppressFilter: true,
            pinned: true,
            cellRenderer: "actionRenderer",
            cellRendererParams: {
                userWorkFlow: this.userWorkFlow,
                rowsOldStateData: this.rowsOldStateData,
                deleteRow: function (rowIndex) {
                    var selectedData = _this.gridApi.getRowNode(rowIndex);
                    var deletedData = [];
                    deletedData.push(selectedData.data);
                    _this.rowsDeletedData.push(selectedData.data);
                    var res = _this.gridApi.updateRowData({ remove: deletedData });
                },
                undoRow: function (rowIndex) {
                },
                submitRow: function (rowIndex) {
                    var selectedData = _this.gridApi.getRowNode(rowIndex);
                    _this.submitOpportunity(selectedData.data);
                },
            },
            cellEditorParams: function (params) {
                return params.value;
            }
        };
    };
    OpportunityListComponent.prototype.getIdentityColumn = function () {
        return {
            headerName: "ID",
            field: "id",
            editable: false,
            width: 60
        };
    };
    OpportunityListComponent.prototype.getDropDownColumn = function (column) {
        var _this = this;
        return {
            headerName: column.title,
            field: column.name,
            editable: !column.isReadOnly,
            cellRenderer: "selectList",
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: function (params) {
                return _this.getSpecificLookUpData(column.lookUpType);
            },
            headerTooltip: column.title,
            width: 100
        };
    };
    OpportunityListComponent.prototype.getPopupColumn = function (column) {
        return {
            headerName: column.title,
            field: column.name,
            editable: !column.isReadOnly,
            cellRenderer: "srRenderer",
            cellEditor: 'sreditor',
            headerTooltip: column.title,
            width: 100
        };
    };
    OpportunityListComponent.prototype.getNumericColumn = function (column) {
        return {
            headerName: column.title,
            field: column.name,
            editable: !column.isReadOnly,
            cellEditor: "numericEditor",
            headerTooltip: column.title,
            width: 100
        };
    };
    OpportunityListComponent.prototype.getDatePickerColumn = function (column) {
        return {
            headerName: column.title,
            field: column.name,
            editable: !column.isReadOnly,
            cellEditor: "datePickerEditor",
            cellRendererParams: {},
            cellEditorParams: function (params) {
                return params.value;
            },
            headerTooltip: column.title,
            width: 100
        };
    };
    OpportunityListComponent.prototype.getRichTextEditorColumn = function (column) {
        return {
            headerName: column.title,
            field: column.name,
            editable: !column.isReadOnly,
            cellEditor: 'agLargeTextCellEditor',
            cellEditorParams: {
                maxLength: '300',
                cols: '50',
                rows: '6'
            },
            width: 100,
            headerTooltip: column.title,
            tooltip: function (params) {
                return params.value;
            }
        };
    };
    OpportunityListComponent.prototype.getDefaultColumn = function (column) {
        return {
            headerName: column.title,
            field: column.name,
            editable: !column.isReadOnly,
            width: 100,
            headerTooltip: column.title,
            tooltip: function (params) {
                return params.value;
            }
        };
    };
    //Grid Functions ----Start
    OpportunityListComponent.prototype.onRowEditing = function (row) {
    };
    OpportunityListComponent.prototype.rowClick = function (param) {
    };
    OpportunityListComponent.prototype.onCellValueChanged = function (row) {
        row.data['IsNewOrUpdated'] = true;
        var params = {
            force: true,
            rowNodes: row.node.RowNode
        };
        this.gridApi.refreshCells(params);
    };
    OpportunityListComponent.prototype.changeEdit = function (row) {
        row.isEditable = true;
    };
    OpportunityListComponent.prototype.changeSave = function (row) {
        row.isEditable = false;
    };
    OpportunityListComponent.prototype.onGridReady = function (params) {
        this.gridRowData = params.rowData;
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    OpportunityListComponent.prototype.sizeToFit = function () {
        this.gridApi.sizeColumnsToFit();
    };
    OpportunityListComponent.prototype.autoSizeAll = function () {
        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds);
    };
    OpportunityListComponent.prototype.exportToExcel = function () {
        var params = {
            fileName: "Test",
            sheetName: "TestSheet"
        };
        //this.gridApi.exportDataAsExcel();
        this.gridApi.exportDataAsCsv();
    };
    OpportunityListComponent.prototype.onModelUpdated = function () {
    };
    OpportunityListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'opportunity-list',
            template: __webpack_require__("../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__opportunity_service__["a" /* OpportunityService */], __WEBPACK_IMPORTED_MODULE_3__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], OpportunityListComponent);
    return OpportunityListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#srList {\r\n    height: 480px;\r\n    width: 700px;\r\n}\r\n\r\n\r\n#srListGrid {\r\n    margin: 5px auto;\r\n    height: 90%;\r\n    width: 99%;\r\n}\r\n\r\n\r\n.btn {\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n    border-width: 2px;\r\n    border-style: outset;\r\n    border-color: buttonface;\r\n}\r\n\r\n\r\n.btn-bar {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"srList\">\r\n  <ag-grid-angular #agGrid id=\"srListGrid\"\r\n                   class=\"ag-theme-balham\"\r\n                   [enableSorting]=\"true\"\r\n                   [pagination]=\"true\"\r\n                   [paginationPageSize]=\"50\"\r\n                   [enableFilter]=\"true\"\r\n                   [columnDefs]=\"columnDefs\"\r\n                   [rowData]=\"rowData\"\r\n                   [defaultColDef]=\"defaultColDef\"\r\n                   [enableColResize]=\"true\"\r\n                   [floatingFilter]=\"true\"\r\n                   [rowSelection]=\"rowSelection\"\r\n                   (selectionChanged)=\"onSelectionChanged()\"\r\n                   (gridReady)=\"onGridReady($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <div class=\"btn-bar\">\r\n    <button class=\"btn\" (click)=\"onOK()\">OK - Selected Items</button>\r\n    <button class=\"btn\" (click)=\"onCancel()\">Cancel</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SREditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sr_service__ = __webpack_require__("../../../../../src/app/features/opportunity/sr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SREditorComponent = (function () {
    function SREditorComponent(router, srService) {
        this.router = router;
        this.srService = srService;
        this.defaultColDef = [];
        this.rowSelection = 'single';
    }
    //public happy: boolean = false;
    SREditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.container.element.nativeElement.focus();
        });
    };
    SREditorComponent.prototype.agInit = function (params) {
        this.params = params;
        this.srID = params.node.data["sr"];
        ////To Select the Row with RowID in the grid
        //console.log("CEllEditor Node:", params.node);
        //console.log("CEllEditor Data:", params.node.data);
        //console.log("CEllEditor Selected Cell SR:", this.srID);
    };
    SREditorComponent.prototype.getValue = function () {
        //this.params.api.stopEditing();
        return this.srID;
    };
    SREditorComponent.prototype.isPopup = function () {
        return true;
    };
    SREditorComponent.prototype.ngOnInit = function () {
        this.getSRList();
    };
    //Grid Functions ----Start
    SREditorComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    //To get SR List
    SREditorComponent.prototype.getSRList = function () {
        var _this = this;
        this.srService.getSRData().subscribe(function (data) {
            //console.log(data);
            _this.columnDefs = [
                {
                    headerName: "ID",
                    field: "id",
                    width: 130
                },
            ];
            _this.rowData = [];
            data.headers.forEach(function (element) {
                _this.columnDefs.push({
                    headerName: element.title,
                    field: element.name,
                    width: 130
                });
            });
            data.rows.forEach(function (element) {
                element['IsNewOrUpdated'] = false;
                _this.rowData.push(element);
            });
        });
    };
    //To Select the SR Data
    SREditorComponent.prototype.onSelectionChanged = function () {
        //console.log("On Selection Changed");
        var selectedRows = this.gridApi.getSelectedRows();
        var selectedRowsString = "";
        selectedRows.forEach(function (selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.id;
        });
        //console.log("selectedRowsString:", selectedRowsString);
        this.srID = selectedRowsString;
    };
    SREditorComponent.prototype.onOK = function () {
        this.isSelected = true;
        this.onSelectionChanged();
        this.params.stopEditing();
        //alert("OK Button Clicked!");
    };
    SREditorComponent.prototype.onCancel = function () {
        this.isSelected = false;
        this.params.stopEditing();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], SREditorComponent.prototype, "container", void 0);
    SREditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'editor-cell',
            template: __webpack_require__("../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__sr_service__["a" /* SRService */]])
    ], SREditorComponent);
    return SREditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../../../assets/imgs/search.png\" alt=\"Search SR\" style=\"height:24px;width:24px;\" />\r\n{{srID}}\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SRRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SRRenderer = (function () {
    function SRRenderer() {
    }
    SRRenderer.prototype.agInit = function (params) {
        this.params = params;
        this.setSR(params);
    };
    SRRenderer.prototype.refresh = function (params) {
        this.params = params;
        this.setSR(params);
        return true;
    };
    SRRenderer.prototype.setSR = function (params) {
        if (params.value == null) {
            this.srID = params.data.sr;
        }
        else {
            this.srID = params.value;
        }
    };
    SRRenderer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sr-cell',
            template: __webpack_require__("../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.css")]
        })
    ], SRRenderer);
    return SRRenderer;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/opportunity.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityModule", function() { return OpportunityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opportunity_routing__ = __webpack_require__("../../../../../src/app/features/opportunity/opportunity.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opportunity_service__ = __webpack_require__("../../../../../src/app/features/opportunity/opportunity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sr_service__ = __webpack_require__("../../../../../src/app/features/opportunity/sr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_opportunityList_opportunityList_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_SelectList_selectList_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/SelectList/selectList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sr_editor_sr_editor_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/sr-editor/sr-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sr_renderer_sr_renderer_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/sr-renderer/sr-renderer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_action_renderer_action_renderer_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/action-renderer/action-renderer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// ag-grid






var OpportunityModule = (function () {
    function OpportunityModule() {
    }
    OpportunityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //BrowserModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__opportunity_routing__["a" /* OpportunityRouting */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular__["AgGridModule"].withComponents([__WEBPACK_IMPORTED_MODULE_11__components_SelectList_selectList_component__["a" /* SelectListComponent */], __WEBPACK_IMPORTED_MODULE_12__components_sr_editor_sr_editor_component__["a" /* SREditorComponent */], __WEBPACK_IMPORTED_MODULE_13__components_sr_renderer_sr_renderer_component__["a" /* SRRenderer */], __WEBPACK_IMPORTED_MODULE_14__components_action_renderer_action_renderer_component__["a" /* ActionRenderer */]])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__components_opportunityList_opportunityList_component__["a" /* OpportunityListComponent */], __WEBPACK_IMPORTED_MODULE_11__components_SelectList_selectList_component__["a" /* SelectListComponent */], __WEBPACK_IMPORTED_MODULE_12__components_sr_editor_sr_editor_component__["a" /* SREditorComponent */], __WEBPACK_IMPORTED_MODULE_13__components_sr_renderer_sr_renderer_component__["a" /* SRRenderer */], __WEBPACK_IMPORTED_MODULE_14__components_action_renderer_action_renderer_component__["a" /* ActionRenderer */]],
            exports: [__WEBPACK_IMPORTED_MODULE_10__components_opportunityList_opportunityList_component__["a" /* OpportunityListComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__components_opportunityList_opportunityList_component__["a" /* OpportunityListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__opportunity_service__["a" /* OpportunityService */], __WEBPACK_IMPORTED_MODULE_8__sr_service__["a" /* SRService */]]
        })
    ], OpportunityModule);
    return OpportunityModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/opportunity.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_opportunityList_opportunityList_component__ = __webpack_require__("../../../../../src/app/features/opportunity/components/opportunityList/opportunityList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.guard.service.ts");



var opportunityRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_opportunityList_opportunityList_component__["a" /* OpportunityListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    { path: 'opportunitylist', component: __WEBPACK_IMPORTED_MODULE_1__components_opportunityList_opportunityList_component__["a" /* OpportunityListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_guard_service__["a" /* AuthGuard */]] }
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
var OpportunityRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(opportunityRoutes);


/***/ }),

/***/ "../../../../../src/app/features/opportunity/opportunity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/services/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__ = __webpack_require__("../../../../../src/app/appSettings.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpportunityService = (function () {
    function OpportunityService(webApiService, authService) {
        this.webApiService = webApiService;
        this.authService = authService;
        this.opportunityCollection = null;
    }
    OpportunityService_1 = OpportunityService;
    OpportunityService.prototype.getOpportunityData = function () {
        this.opportunityCollection = this.webApiService.Get(OpportunityService_1.OpportunityUrl + 'Dashboard');
        return this.opportunityCollection;
    };
    OpportunityService.prototype.SaveOpportunity = function (opportunity) {
        return this.webApiService.Post(OpportunityService_1.OpportunityUrl + 'BulkAddUpdate', opportunity);
    };
    OpportunityService.prototype.SubmitOpportunity = function (opportunity) {
        return this.webApiService.Post(OpportunityService_1.OpportunityUrl + 'Submit', opportunity);
    };
    OpportunityService.prototype.getLookUpData = function () {
        return this.webApiService.Get(__WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'LookUpData');
    };
    OpportunityService.OpportunityUrl = __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'OpportunityData/';
    OpportunityService = OpportunityService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_webApiManager_service__["a" /* WebApiManager */], __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]])
    ], OpportunityService);
    return OpportunityService;
    var OpportunityService_1;
}());



/***/ }),

/***/ "../../../../../src/app/features/opportunity/sr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SRService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/services/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__ = __webpack_require__("../../../../../src/app/appSettings.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SRService = (function () {
    function SRService(webApiService, authService) {
        this.webApiService = webApiService;
        this.authService = authService;
        this.srCollection = null;
    }
    SRService_1 = SRService;
    SRService.prototype.getSRData = function () {
        this.srCollection = this.webApiService.Get(SRService_1.OpportunityUrl + 'Dashboard');
        return this.srCollection;
    };
    SRService.prototype.SaveOpportunity = function (opportunity) {
        return this.webApiService.Post(SRService_1.OpportunityUrl + 'BulkAddUpdate', opportunity);
    };
    //To Be Udpated As per SR API
    SRService.OpportunityUrl = __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'OpportunityData/';
    SRService = SRService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_webApiManager_service__["a" /* WebApiManager */], __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]])
    ], SRService);
    return SRService;
    var SRService_1;
}());



/***/ })

});
//# sourceMappingURL=opportunity.module.chunk.js.map