webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-company/add-company.component.css":
/***/ (function(module, exports) {

module.exports = ".new_company{\n    width: 400px;\n}\n"

/***/ }),

/***/ "./src/app/add-company/add-company.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass=\"content new_company\">\n    <div ngClass=\"content_title\">\n        Create New Company\n    </div>\n    <div ngClass=\"content_body\">\n        <form action=\"\" ngClass=\"add_company_form\" #company_form=\"ngForm\">\n            <h3>Create New Company</h3>\n            <div class=\"form_group\">\n                <label for=\"name\">Name:</label>\n                <input [(ngModel)]=\"model.name\" name=\"name\" id=\"name\" required=\"\" #name=\"ngModel\"\n                       ngClass=\"form-control\"\n                >\n                <div [hidden]=\"name.valid || name.pristine\" class=\"form_error\">\n                    Name is required\n                </div>\n                <app-form-field-error [errors]=\"server_error\" [name]='name' >\n                </app-form-field-error>\n            </div>\n            <button pButton  class=\"to-right\" type=\"button \"\n                    [disabled]=\"!company_form.form.valid\"\n                    (click)=\"create_new()\" label=\"Create\">\n            </button>\n            <br>\n            <br>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-company/add-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_row_service__ = __webpack_require__("./src/app/data-row.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_company_models__ = __webpack_require__("./src/app/models/company-models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(service, router) {
        this.service = service;
        this.router = router;
        this.server_error = {};
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_company_models__["a" /* Company */](0, '');
    };
    AddCompanyComponent.prototype.create_new = function () {
        var _this = this;
        var formData = JSON.stringify(this.model);
        this.service.create_company(formData).subscribe(function (res) { return _this.router.navigate(['/main_page']); }, function (error) { return _this.server_error = error.error; });
    };
    AddCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__("./src/app/add-company/add-company.component.html"),
            styles: [__webpack_require__("./src/app/add-company/add-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_row_service__["a" /* DataRowService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_company_add_company_component__ = __webpack_require__("./src/app/add-company/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_data_set_new_data_set_component__ = __webpack_require__("./src/app/new-data-set/new-data-set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_set_edit_data_set_edit_component__ = __webpack_require__("./src/app/data-set-edit/data-set-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_page_main_page_component__ = __webpack_require__("./src/app/main-page/main-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'new_company',
        component: __WEBPACK_IMPORTED_MODULE_2__add_company_add_company_component__["a" /* AddCompanyComponent */]
    },
    {
        path: 'new_data_set',
        component: __WEBPACK_IMPORTED_MODULE_3__new_data_set_new_data_set_component__["a" /* NewDataSetComponent */]
    },
    {
        path: 'edit_data_set/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__data_set_edit_data_set_edit_component__["a" /* DataSetEditComponent */]
    },
    { path: 'main_page', component: __WEBPACK_IMPORTED_MODULE_5__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: '', redirectTo: 'main_page', pathMatch: 'full' },
    { path: '**', redirectTo: 'main_page' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(appRoutes)
                // other imports here
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".outlet_wrapper{\n    margin-top: 50px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;\">\n  <app-main-menu></app-main-menu>\n  <div ngClass=\"outlet_wrapper\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_prettyjson__ = __webpack_require__("./node_modules/angular2-prettyjson/esm5/angular2-prettyjson.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_tree__ = __webpack_require__("./node_modules/primeng/tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_menubar__ = __webpack_require__("./node_modules/primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_multiselect__ = __webpack_require__("./node_modules/primeng/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_row_service__ = __webpack_require__("./src/app/data-row.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_menu_main_menu_component__ = __webpack_require__("./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_company_add_company_component__ = __webpack_require__("./src/app/add-company/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__new_data_set_new_data_set_component__ = __webpack_require__("./src/app/new-data-set/new-data-set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__data_set_edit_data_set_edit_component__ = __webpack_require__("./src/app/data-set-edit/data-set-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__main_page_main_page_component__ = __webpack_require__("./src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__form_field_error_form_field_error_component__ = __webpack_require__("./src/app/form-field-error/form-field-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__data_set_form_data_set_form_component__ = __webpack_require__("./src/app/data-set-form/data-set-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// PrimeNG


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__add_company_add_company_component__["a" /* AddCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__new_data_set_new_data_set_component__["a" /* NewDataSetComponent */],
                __WEBPACK_IMPORTED_MODULE_22__data_set_edit_data_set_edit_component__["a" /* DataSetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_23__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__form_field_error_form_field_error_component__["a" /* FormFieldErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__data_set_form_data_set_form_component__["a" /* DataSetFormComponent */],
            ],
            imports: [
                // PrimeNG
                __WEBPACK_IMPORTED_MODULE_11_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_tree__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_multiselect__["MultiSelectModule"],
                // -------
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_prettyjson__["a" /* PrettyJsonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__data_row_service__["a" /* DataRowService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-row.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataRowService = /** @class */ (function () {
    function DataRowService(http) {
        this.http = http;
        this.base_url = '/api/';
        this.module_base = 'ml_data/';
        this.company_base = 'company/';
    }
    DataRowService.prototype.get_data_set = function (id) {
        return this.http.get("" + this.base_url + this.module_base + "data_set/" + id);
    };
    DataRowService.prototype.create_data_set = function (formData) {
        return this.http.post("" + this.base_url + this.module_base + "data_set/0/", formData);
    };
    DataRowService.prototype.update_data_set = function (formData, id) {
        return this.http.put("" + this.base_url + this.module_base + "data_set/" + id + "/", formData);
    };
    DataRowService.prototype.update_data_set_row = function (formData, id) {
        return this.http.put("" + this.base_url + this.module_base + "data_set_row/" + id + "/", formData);
    };
    DataRowService.prototype.all_data_sets = function () {
        return this.http.get("" + this.base_url + this.module_base + "all_data_sets/");
    };
    DataRowService.prototype.create_company = function (formData) {
        return this.http.post("" + this.base_url + this.company_base + "create/", formData);
    };
    DataRowService.prototype.get_company_names = function () {
        return this.http.get("" + this.base_url + this.company_base + "company_names/");
    };
    DataRowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataRowService);
    return DataRowService;
}());



/***/ }),

/***/ "./src/app/data-set-edit/data-set-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".data_set_table .ui-table .ui-table-thead > tr > th,\n.ui-table .ui-table-tbody > tr > td,\n.ui-table .ui-table-tfoot > tr > td{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border: 1px solid #ddd;\n}\n.ui-table .ui-table-thead > tr > th{\n    font-size: 13px;\n    color: #676a6c;\n    font-weight: bold;\n    text-align: center;\n    padding: 5px;\n    border: 1px solid #ddd;\n    background: #eef1f4;\n}\n.ui-table .ui-paginator-bottom{\n    /*position: fixed;*/\n    /*width: 100%;*/\n    /*bottom: 0px;*/\n    margin-top: 7px;\n    margin-bottom: -5px;\n}\n.main_block{\n    width: 100%;\n    overflow: scroll;\n}\n.data_set_tabs.ui-tabview{\n    background: transparent;\n    border: 0;\n}\n.data_set_tabs.ui-tabview.ui-tabview-top > .ui-tabview-nav{\n    background: transparent;\n    padding: 0px;\n}\n.data_set_tabs .ui-tabview-panels{\n    background: #fff;\n    border: 1px solid #ddd;\n}\n.data_set_tabs.ui-tabview.ui-tabview-top > .ui-tabview-nav li.ui-state-active{\n    border-bottom: 1px solid #fff;\n    background: #fff;\n}\n.data_set_tabs.ui-tabview.ui-tabview-top > .ui-tabview-nav li{\n    top: 2px;\n    background: transparent;\n}\n.data_set_table .table_multiselect{\n    float: left;\n    text-align: left;\n}\n.export_csv .ui-button{\n    margin-top: 0px;\n    margin-left: 10px;\n}\n.ui-multiselect-label-container{\n    padding: 3px;\n}\n.data_set_table .ui-table-caption{\n    padding-left: 0px;\n}\n"

/***/ }),

/***/ "./src/app/data-set-edit/data-set-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView styleClass=\"data_set_tabs\">\n    <p-tabPanel header=\"Data Set\">\n       <p-table [columns]=\"cols\"\n                [value]=\"model.data\"\n                [paginator]=\"true\"\n                [rows]=\"50\"\n                styleClass=\"data_set_table\"\n                [scrollable]=\"true\" [style]=\"{width:'100%'}\" scrollHeight=\"{{scroll_height}}\"\n                #dt\n                [resizableColumns]=\"true\"\n                [loading]=\"loading\"\n       >\n           <ng-template pTemplate=\"caption\">\n\n               <div ngClass=\"table_multiselect\">\n                   <p-multiSelect [options]=\"cols\"\n                                  [(ngModel)]=\"selectedColumns\"\n                                  selectedItemsLabel=\"{0} columns selected\"\n                                  [style]=\"{minWidth: '200px'}\"\n                                  defaultLabel=\"Choose Columns\"\n                                  optionLabel=\"name\"\n                   ></p-multiSelect>\n               </div>\n               <div class=\"ui-helper-clearfix export_csv\">\n                   <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\"\n                           label=\"Export to CSV\" (click)=\"dt.exportCSV()\"\n                   ></button>\n               </div>\n           </ng-template>\n           <ng-template pTemplate=\"colgroup\" let-columns>\n               <colgroup>\n                   <col *ngFor=\"let col of selectedColumns\" style=\"width:250px\" >\n               </colgroup>\n           </ng-template>\n           <ng-template pTemplate=\"header\" let-columns >\n               <tr>\n                   <th *ngFor=\"let col of selectedColumns\" pResizableColumn>\n                       {{ col.name }}\n                   </th>\n               </tr>\n           </ng-template>\n           <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n               <tr>\n                   <td *ngFor=\"let col of selectedColumns\" pEditableColumn>\n                       <p-cellEditor>\n                           <ng-template pTemplate=\"input\">\n                               <input type=\"text\" #cell [(ngModel)]=\"rowData[col.name]\"\n                                      (change)=\"handleEdit(cell.value, col.name, rowData)\" >\n                           </ng-template>\n                           <ng-template pTemplate=\"output\">\n                               {{rowData[col.name]}}\n                           </ng-template>\n                       </p-cellEditor>\n                   </td>\n               </tr>\n           </ng-template>\n       </p-table>\n    </p-tabPanel>\n    <p-tabPanel header=\"Properties\">\n        <app-data-set-form (formSubmit)=\"save_data_set(model)\" [model]=\"model\" [server_error]=\"server_error\">\n        </app-data-set-form>\n    </p-tabPanel>\n</p-tabView>\n\n"

/***/ }),

/***/ "./src/app/data-set-edit/data-set-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_row_service__ = __webpack_require__("./src/app/data-row.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_data_set_models__ = __webpack_require__("./src/app/models/data-set.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
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






var DataSetEditComponent = /** @class */ (function () {
    function DataSetEditComponent(service, route, spinnerService) {
        this.service = service;
        this.route = route;
        this.spinnerService = spinnerService;
        this.server_error = {};
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_data_set_models__["a" /* DataSetModels */](0, '', null, []);
    }
    DataSetEditComponent.prototype.ngOnInit = function () {
        this.get_data_set();
        this.scroll_height = window.innerHeight - 250 + "px";
    };
    DataSetEditComponent.prototype.set_data_for_table = function (data) {
        this.cols = this.prepare_cols(data);
        this.selectedColumns = this.cols;
    };
    DataSetEditComponent.prototype.get_data_set = function () {
        var _this = this;
        this.data_set_id = +this.route.snapshot.paramMap.get('id');
        this.service.get_data_set(this.data_set_id).subscribe(function (res) {
            _this.model = res;
            _this.set_data_for_table(res.data);
        }, function (error) { return error.error; });
    };
    DataSetEditComponent.prototype.prepare_cols = function (data) {
        var data_cols = [];
        if (data.length > 0) {
            Object.keys(data[0]).forEach(function (col) { return data_cols.push({ 'name': col }); });
        }
        return data_cols;
    };
    DataSetEditComponent.prototype.save_data_set = function (model) {
        var _this = this;
        var file = model.file;
        var formData = new FormData();
        formData.append('company', model.company.id.toString());
        formData.append('name', model.name);
        if (file) {
            formData.append('file', file, file.name);
        }
        this.service.update_data_set(formData, this.data_set_id)
            .subscribe(function (res) {
            _this.model.data = res.data;
            _this.set_data_for_table(res.data);
            _this.spinnerService.hide();
            _this.server_error = {};
        }, function (error) {
            _this.server_error = error.error;
            _this.spinnerService.hide();
        });
        this.spinnerService.show();
    };
    DataSetEditComponent.prototype.handleEdit = function (value, col_name, row) {
        var formData = new FormData();
        formData.append('value', value);
        formData.append('col_name', col_name);
        formData.append('row_index', row['row_index']);
        this.service.update_data_set_row(formData, this.data_set_id).subscribe();
    };
    DataSetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-set-edit',
            template: __webpack_require__("./src/app/data-set-edit/data-set-edit.component.html"),
            styles: [__webpack_require__("./src/app/data-set-edit/data-set-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_row_service__["a" /* DataRowService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], DataSetEditComponent);
    return DataSetEditComponent;
}());



/***/ }),

/***/ "./src/app/data-set-form/data-set-form.component.css":
/***/ (function(module, exports) {

module.exports = ".company_select.ui-dropdown{\n    display: block;\n    height: 30px;\n}\n.company_select.ui-dropdown label.ui-dropdown-label{\n    height: 28px;\n}\n.new_company_file_upload .ui-fileupload-buttonbar{\n    background: #fff;\n    border-color: #fff;\n    padding: 0px;\n}\n"

/***/ }),

/***/ "./src/app/data-set-form/data-set-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\" ngClass=\"add_data_set_form\" #data_set_form=\"ngForm\"  (ngSubmit)=\"handleSubmit(upLoader);\">\n    <div class=\"form_group\">\n        <label for=\"name\">Name:</label>\n        <input [(ngModel)]=\"model.name\" name=\"name\" id=\"name\" required=\"\" #name=\"ngModel\"\n               ngClass=\"form-control\" required=\"\"\n        >\n        <div [hidden]=\"name.valid || name.pristine\" class=\"form_error\">\n            Name is required\n        </div>\n        <app-form-field-error [errors]=\"server_error\" [name]='name' >\n        </app-form-field-error>\n    </div>\n    <div class=\"form_group\">\n        <label for=\"company\">Select a company:</label>\n        <p-dropdown [options]=\"companies\"\n                    placeholder=\"Select a Company\" optionLabel=\"name\"\n                    styleClass=\"company_select\"\n                    [(ngModel)]=\"model.company\"\n                    name=\"company\"\n                    id=\"company\"\n                    #company=\"ngModel\"\n                    required=\"\"\n                    [style]=\"{width:'100%'}\"\n                    [filter]=\"true\"\n        ></p-dropdown>\n        <div [hidden]=\"company.valid || company.pristine\" class=\"form_error\">\n            Company is required\n        </div>\n        <app-form-field-error [errors]=\"server_error\" [name]='company' >\n        </app-form-field-error>\n    </div>\n    <div class=\"form_group\">\n        <label for=\"file_to_load\">Load CSV file with data:</label>\n        <p-fileUpload name=\"myfile[]\"\n                      files=\"files\"\n                      customUpload=\"True\"\n                      (uploadHandler)=\"get_files($event)\"\n                      accept=\".csv\"\n                      auto=\"auto\"\n                      id=\"file_to_load\"\n                      styleClass=\"new_company_file_upload\"\n                      #upLoader\n        ></p-fileUpload>\n        <app-form-field-error [errors]=\"server_error\" [name]='{\"name\": \"file_to_load\"}' >\n        </app-form-field-error>\n    </div>\n    <app-form-field-error [errors]=\"server_error\" [name]='{\"name\": \"__all__\"}' >\n    </app-form-field-error>\n    <button pButton  class=\"to-right\" label=\"Save\" [disabled]=\"!data_set_form.form.valid\">\n    </button>\n    <br>\n    <br>\n</form>\n"

/***/ }),

/***/ "./src/app/data-set-form/data-set-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSetFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_row_service__ = __webpack_require__("./src/app/data-row.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataSetFormComponent = /** @class */ (function () {
    function DataSetFormComponent(service) {
        this.service = service;
        this.formSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DataSetFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get_company_names().subscribe(function (data) {
            _this.companies = data;
        });
    };
    DataSetFormComponent.prototype.get_files = function (event) {
        this.file = event.files[0];
    };
    DataSetFormComponent.prototype.handleSubmit = function (upLoader) {
        this.model.file = this.file;
        this.formSubmit.emit(this.model);
        upLoader.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('model'),
        __metadata("design:type", Object)
    ], DataSetFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('server_error'),
        __metadata("design:type", Object)
    ], DataSetFormComponent.prototype, "server_error", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DataSetFormComponent.prototype, "formSubmit", void 0);
    DataSetFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-set-form',
            template: __webpack_require__("./src/app/data-set-form/data-set-form.component.html"),
            styles: [__webpack_require__("./src/app/data-set-form/data-set-form.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_row_service__["a" /* DataRowService */]])
    ], DataSetFormComponent);
    return DataSetFormComponent;
}());



/***/ }),

/***/ "./src/app/form-field-error/form-field-error.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-field-error/form-field-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let error of field_errors\" class=\"form_error\">\n  {{error.message}}\n</div>\n"

/***/ }),

/***/ "./src/app/form-field-error/form-field-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormFieldErrorComponent = /** @class */ (function () {
    function FormFieldErrorComponent() {
        this.field_errors = [];
    }
    FormFieldErrorComponent.prototype.ngOnInit = function () { };
    FormFieldErrorComponent.prototype.show_message = function () {
        var field_name = this.name.name;
        if (Object.keys(this.errors).indexOf(field_name) > -1) {
            this.field_errors = this.errors[field_name];
        }
    };
    FormFieldErrorComponent.prototype.ngOnChanges = function (changes) {
        this.show_message();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('errors'),
        __metadata("design:type", Object)
    ], FormFieldErrorComponent.prototype, "errors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", Object)
    ], FormFieldErrorComponent.prototype, "name", void 0);
    FormFieldErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-field-error',
            template: __webpack_require__("./src/app/form-field-error/form-field-error.component.html"),
            styles: [__webpack_require__("./src/app/form-field-error/form-field-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormFieldErrorComponent);
    return FormFieldErrorComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".main_toolbar.ui-menubar {\n    position: fixed;\n    width: 100%;\n    top: 0px;\n    left: 0px;\n    border: none;\n    border-radius: 0px;\n    background: #fff;\n    -webkit-box-shadow: 0px 4px 7px #f0f0f3fa;\n            box-shadow: 0px 4px 7px #f0f0f3fa;\n    z-index: 99999;\n    padding-left: 15px;\n}\n.main_toolbar.ui-menubar .ui-menubar-custom {\n    float: left;\n}\n.page_logo{\n    width: 106px;\n    cursor: pointer;\n}\n\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\" styleClass=\"main_toolbar\">\n    <img ngClass=\"page_logo\" src=\"/assets/proxy.conf.svg\" alt=\"\" [routerLink]=\"['/main_page']\">\n</p-menubar>\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'New Company',
                icon: 'fa-plus',
                routerLink: ['/new_company']
            },
            {
                label: 'New Data Set',
                icon: 'fa-plus',
                routerLink: ['/new_data_set']
            }
        ];
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__("./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("./src/app/main-menu/main-menu.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\n    width: 300px;\n}\n.main_page .ui-tree{\n    width: 100%;\n}\n.main_page .ui-tree .ui-tree-container{\n    padding: 15px;\n}\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass=\"content main_page\">\n    <div ngClass=\"content_title\">\n        Company/Data set\n    </div>\n    <p-tree *ngIf=\"data_sets_tree.length>0\" [value]=\"data_sets_tree\" selectionMode=\"single\" [(selection)]=\"selected_set\"\n            (onNodeSelect)=\"select_data_set()\"\n    ></p-tree>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_row_service__ = __webpack_require__("./src/app/data-row.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(service, router) {
        this.service = service;
        this.router = router;
        this.data_sets_tree = [];
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.all_data_sets();
    };
    MainPageComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    MainPageComponent.prototype.all_data_sets = function () {
        var _this = this;
        this.service.all_data_sets().subscribe(function (res) {
            _this.data_sets_tree = res;
            setTimeout(function () {
                _this.data_sets_tree.forEach(function (node) {
                    _this.expandRecursive(node, true);
                });
            }, 200);
        }, function (error) { return error.error; });
    };
    MainPageComponent.prototype.select_data_set = function () {
        if (Object.keys(this.selected_set).indexOf('children') > -1) {
            return;
        }
        this.router.navigate(['/edit_data_set', this.selected_set.data]);
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__("./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__("./src/app/main-page/main-page.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_row_service__["a" /* DataRowService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/models/company-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name) {
        this.id = id;
        this.name = name;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/models/data-set.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSetModels; });
var DataSetModels = /** @class */ (function () {
    function DataSetModels(id, name, company, data) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.data = data;
    }
    return DataSetModels;
}());



/***/ }),

/***/ "./src/app/new-data-set/new-data-set.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\n    width: 400px;\n}\n"

/***/ }),

/***/ "./src/app/new-data-set/new-data-set.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass=\"content\">\n    <div ngClass=\"content_title\">\n        Create New Data Set\n    </div>\n    <div ngClass=\"content_body\">\n        <app-data-set-form (formSubmit)=\"create_new_data_set(model)\" [model]=\"model\" [server_error]=\"server_error\">\n        </app-data-set-form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-data-set/new-data-set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDataSetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_row_service__ = __webpack_require__("./src/app/data-row.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_data_set_models__ = __webpack_require__("./src/app/models/data-set.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
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






var NewDataSetComponent = /** @class */ (function () {
    function NewDataSetComponent(service, spinnerService, router) {
        this.service = service;
        this.spinnerService = spinnerService;
        this.router = router;
        this.server_error = {};
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_data_set_models__["a" /* DataSetModels */](0, '', null, []);
    }
    NewDataSetComponent.prototype.ngOnInit = function () {
    };
    NewDataSetComponent.prototype.create_new_data_set = function (model) {
        var _this = this;
        var file = model.file;
        var formData = new FormData();
        formData.append('company', model.company.id.toString());
        formData.append('name', model.name);
        if (file) {
            formData.append('file', file, file.name);
        }
        this.service.create_data_set(formData)
            .subscribe(function (res) {
            _this.router.navigate(['/edit_data_set', res.id]);
        }, function (error) {
            _this.server_error = error.error;
            _this.spinnerService.hide();
        });
        this.spinnerService.show();
    };
    NewDataSetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-data-set',
            template: __webpack_require__("./src/app/new-data-set/new-data-set.component.html"),
            styles: [__webpack_require__("./src/app/new-data-set/new-data-set.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_row_service__["a" /* DataRowService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], NewDataSetComponent);
    return NewDataSetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map