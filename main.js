(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n  <div class=\"container\">\n\n    <header class=\"section-header\">\n      <h3>{{title}}</h3>\n      <p>{{shortDescription}}</p>\n    </header>\n\n    <div class=\"row about-container\">\n\n      <div class=\"col-lg-6 content order-lg-1 order-2\">\n        <p>\n          {{description}}\n        </p>\n\n        <div class=\"icon-box wow fadeInUp\">\n          <div class=\"icon\"><i class=\"fa fa-shopping-bag\"></i></div>\n          <h4 class=\"title\"><a href=\"\" >Vision</a></h4>\n          <p class=\"description\">{{vision}}</p>\n        </div>\n\n        <div class=\"icon-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n          <div class=\"icon\"><i class=\"fa fa-photo\"></i></div>\n          <h4 class=\"title\"><a href=\"\" >Mission</a></h4>\n          <p class=\"description\">{{mission}}</p>\n        </div>\n\n        <div class=\"icon-box wow fadeInUp\" data-wow-delay=\"0.4s\">\n          <div class=\"icon\"><i class=\"fa fa-bar-chart\"></i></div>\n          <h4 class=\"title\"><a href=\"\" >Core Values</a></h4>\n          <p class=\"description\">{{other}}</p>\n        </div>\n\n      </div>\n\n      <div class=\"col-lg-6 background order-lg-2 order-1 wow fadeInUp\">\n        <img src=\"assets/img/about-img.jpg\" class=\"img-fluid\" alt=\"\">\n      </div>\n    </div>\n\n    <!--<div class=\"row about-extra\">\n      <div class=\"col-lg-6 wow fadeInUp\">\n        <img src=\"img/about-extra-1.svg\" class=\"img-fluid\" alt=\"\">\n      </div>\n      <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\n        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>\n        <p>\n          Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.\n        </p>\n        <p>\n          Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row about-extra\">\n      <div class=\"col-lg-6 wow fadeInUp order-1 order-lg-2\">\n        <img src=\"img/about-extra-2.svg\" class=\"img-fluid\" alt=\"\">\n      </div>\n\n      <div class=\"col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1\">\n        <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>\n        <p>\n         Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.\n        </p>\n        <p>\n          Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.\n        </p>\n        <p>\n          Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.\n        </p>\n      </div>\n\n    </div>-->\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice */ "./src/app/dataservice.ts");



var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(dataService) {
        this.dataService = dataService;
        this.title = "About Us";
        this.shortDescription = "We are aiming to provide IT services and software solutions to small and medium size enterprises and help their business add efficiency.";
        /*description: string[] = [
          "We are a UK based software company with offshore office in Islamabad, Pakistan.",
          "Office Address: 5, 26 wheler street, Central London.",
          "Offshore office:  36, Street 7, Sector D, DHA Phase 2, Islamabad.",
          "Ph: +44-7476-956222, +92-340-0008766, +92-300-5245306"
        ]; */
        this.description = "NexTech UK is an IT startup founded by industry experts. We have few great minds from the industry and we have a few great ideas so we want to give it a go.";
        this.vision = "To transform complex engineering task into simple clicks. Combining leading-edge business strategy and IT knowledge, to develop efficient and effective solutions that keep businesses one-step ahead.";
        this.mission = "Our mission is simple: make technology an asset for your business. We work around your business and strive to make technology integrate seamlessly with your business so your business can grow. As your technology partner, when your business grows ours will grow with you, therefore, we will work hand in hand with you to support your growth.";
        this.other = "We believe in honesty and hard work. Customer first, business together and win together.";
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent.prototype.modifyPopupData = function (serviceId, imageUrl, shortDesc, detailDesc) {
        this.dataService.modifyData(serviceId, imageUrl, shortDesc, detailDesc);
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-aboutus",
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [" #about { background: #fff;  padding: 60px 0;}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice__WEBPACK_IMPORTED_MODULE_2__["Dataservice"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/allfunctionalities/allfunctionalities.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/allfunctionalities/allfunctionalities.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n <app-header></app-header>\n <main id=\"main\">\n   <app-services></app-services>\n   <!-- <app-portfolio></app-portfolio>  -->  \n   <!-- <app-our-group></app-our-group> -->\n   <app-technologies></app-technologies>\n   <app-aboutus></app-aboutus>\n   <app-contactus></app-contactus>\n </main>\n <app-footer></app-footer> \n <app-dialog-popup></app-dialog-popup>\n \n</div>\n<!--<app-footer></app-footer>-->\n \n \n    \n\n  \n\n"

/***/ }),

/***/ "./src/app/allfunctionalities/allfunctionalities.component.styl":
/*!**********************************************************************!*\
  !*** ./src/app/allfunctionalities/allfunctionalities.component.styl ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/allfunctionalities/allfunctionalities.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZnVuY3Rpb25hbGl0aWVzL2FsbGZ1bmN0aW9uYWxpdGllcy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0YiLCJmaWxlIjoic3JjL2FwcC9hbGxmdW5jdGlvbmFsaXRpZXMvYWxsZnVuY3Rpb25hbGl0aWVzLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/allfunctionalities/allfunctionalities.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/allfunctionalities/allfunctionalities.component.ts ***!
  \********************************************************************/
/*! exports provided: AllfunctionalitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllfunctionalitiesComponent", function() { return AllfunctionalitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllfunctionalitiesComponent = /** @class */ (function () {
    function AllfunctionalitiesComponent() {
    }
    AllfunctionalitiesComponent.prototype.ngOnInit = function () {
    };
    AllfunctionalitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allfunctionalities',
            template: __webpack_require__(/*! ./allfunctionalities.component.html */ "./src/app/allfunctionalities/allfunctionalities.component.html"),
            styles: [__webpack_require__(/*! ./allfunctionalities.component.styl */ "./src/app/allfunctionalities/allfunctionalities.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllfunctionalitiesComponent);
    return AllfunctionalitiesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allfunctionalities/allfunctionalities.component */ "./src/app/allfunctionalities/allfunctionalities.component.ts");




var routes = [{ path: "", component: _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_3__["AllfunctionalitiesComponent"] },];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NextexhUK';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allfunctionalities/allfunctionalities.component */ "./src/app/allfunctionalities/allfunctionalities.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_project_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/project-card.component */ "./src/app/portfolio/project-card.component.ts");
/* harmony import */ var _portfolio_project_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/project-detail.component */ "./src/app/portfolio/project-detail.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _services_service_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/service-card.component */ "./src/app/services/service-card.component.ts");
/* harmony import */ var _our_group_our_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./our-group/our-group.component */ "./src/app/our-group/our-group.component.ts");
/* harmony import */ var _our_group_group_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./our-group/group-detail.component */ "./src/app/our-group/group-detail.component.ts");
/* harmony import */ var _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./technologies/technologies.component */ "./src/app/technologies/technologies.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialog_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog-popup.component */ "./src/app/dialog-popup.component.ts");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dataservice */ "./src/app/dataservice.ts");
/* harmony import */ var _technologies_technologies_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./technologies/technologies-card.component */ "./src/app/technologies/technologies-card.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _allfunctionalities_allfunctionalities_component__WEBPACK_IMPORTED_MODULE_5__["AllfunctionalitiesComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _portfolio_project_card_component__WEBPACK_IMPORTED_MODULE_9__["ProjectCardComponent"],
                _portfolio_project_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDetailComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"],
                _services_service_card_component__WEBPACK_IMPORTED_MODULE_12__["ServiceCardComponent"],
                _our_group_our_group_component__WEBPACK_IMPORTED_MODULE_13__["OurGroupComponent"],
                _our_group_group_detail_component__WEBPACK_IMPORTED_MODULE_14__["GroupDetailComponent"],
                _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_15__["TechnologiesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__["ContactusComponent"],
                _dialog_popup_component__WEBPACK_IMPORTED_MODULE_20__["DialogPopupComponent"],
                _technologies_technologies_card_component__WEBPACK_IMPORTED_MODULE_22__["TechnologiesCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            providers: [_dataservice__WEBPACK_IMPORTED_MODULE_21__["Dataservice"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n  <div class=\"container-fluid\">\n\n    <div class=\"section-header\">\n      <h3>Contact Us</h3>\n    </div>\n\n    <div class=\"row wow fadeInUp\">\n\n      <div class=\"col-lg-6\">\n        <div class=\"map mb-4 mb-lg-0\">\n          <iframe src=\"https://maps.google.com/maps?q=55%2C%20Brigham%20Road%2C%20RG1%208QS&t=&z=15&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" style=\"border:0; width: 100%; height: 312px;\" allowfullscreen></iframe>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6\">\n        <div class=\"row\">\n          <div class=\"col-md-5 info\">\n            <i class=\"ion-ios-location-outline\"></i>\n            <p>55, Brigham Road, RG1 8QS</p>\n          </div>\n          <div class=\"col-md-4 info\">\n            <i class=\"ion-ios-email-outline\"></i>\n            <!-- <p>info@example.com</p> -->\n            <p><a href=\"mailto:info@example.com\">info@example.com</a></p>\n          </div>\n          <div class=\"col-md-3 info\">\n            <i class=\"ion-ios-telephone-outline\"></i>\n            <p><a href=\"tel:+44 1527 525635\">+44 7426 0109 96</a></p>\n            <!-- <p>+44 7426 0109 96</p> -->\n          </div>\n        </div>\n\n        <div class=\"form\">\n          <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n          <div id=\"errormessage\"></div>\n          <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmitForm()\" role=\"form\" class=\"contactForm\">\n            <p *ngIf=\"mailSend \" style=\"margin-left: 3px;color: #47a447\">{{message}}</p>\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-6\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\"  />\n                <!-- <div class=\"validation\"></div> -->\n              </div>\n              <div class=\"form-group col-lg-6\">\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Your Email\" data-rule=\"email\"  />\n               <!--  <div class=\"validation\"></div> -->\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"subject\"  placeholder=\"Subject\" data-rule=\"minlen:4\" />\n              <!-- <div class=\"validation\"></div> -->\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\" data-rule=\"required\" placeholder=\"Message\"></textarea>\n              <!-- <div class=\"validation\"></div> -->\n            </div>\n            <div class=\"text-center\"><button type=\"submit\" title=\"Send Message\">Send Message</button></div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.formSubmitted = false;
        this.mailSend = false;
        this.message = "";
    }
    ContactusComponent.prototype.buildForm = function () {
        this.formGroup = this.formBuilder.group({
            "email": [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            "subject": [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "description": [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "validate": ""
        });
    };
    ContactusComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ContactusComponent.prototype.onSubmitForm = function () {
        this.mailSend = false;
        this.message = "";
        if (this.formGroup.valid) {
            this.sendMail(this.formGroup.get("email").value, this.formGroup.get("subject").value, this.formGroup.get("description").value);
            this.formSubmitted = true;
            this.formGroup.reset();
        }
        else {
            this.mailSend = true;
            this.message = "Please fill all  fields";
            return;
        }
    };
    ContactusComponent.prototype.sendMail = function (email, subject, queryDescription) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ "Content-Type": "application/json" });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post("https://techzolainc.herokuapp.com/send", JSON.stringify({ "to": "sardarrahyeem@gmail.com; hamidsayeedkhan@gmail.com; engineer_mubarak@hotmail.com", "from": "" + email, "subject": subject, "description": queryDescription }), options)
            .subscribe(function (data) {
            console.log(data);
            if (data.text() === "sent") {
                _this.mailSend = true;
                _this.message = "Your Query has been sent";
            }
            else {
                _this.message = "Your Query has been sent";
            }
        });
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/dataservice.ts":
/*!********************************!*\
  !*** ./src/app/dataservice.ts ***!
  \********************************/
/*! exports provided: Dataservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataservice", function() { return Dataservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popup_data_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-data-detail */ "./src/app/popup-data-detail.ts");



var Dataservice = /** @class */ (function () {
    function Dataservice() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Dataservice.prototype.modifyData = function (_detailId, _detaileImage, _shortDesc, _detaileDesc) {
        if (this.popupDataDetail == null)
            this.popupDataDetail = new _popup_data_detail__WEBPACK_IMPORTED_MODULE_2__["PopupDataDetail"](_detailId, _detaileImage, _shortDesc, _detaileDesc);
        this.popupDataDetail.detaileId = _detailId;
        this.popupDataDetail.detaileImage = _detaileImage;
        this.popupDataDetail.shortDesc = _shortDesc;
        this.popupDataDetail.detaileDesc = _detaileDesc;
        this.change.emit(this.popupDataDetail);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Dataservice.prototype, "change", void 0);
    Dataservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Dataservice);
    return Dataservice;
}());



/***/ }),

/***/ "./src/app/dialog-popup.component.html":
/*!*********************************************!*\
  !*** ./src/app/dialog-popup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"myprojectModal\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n\n\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">{{popupDataDetail.shortDesc}}</h4>\n            </div>\n            \n            <div class=\"modal-body\">\n                <img src=\"{{popupDataDetail.detaileImage}}\"  width=\"25%\" class=\"rounded float-left pull-left mr-2 img-fluid\" >               \n                <p>{{popupDataDetail.detaileDesc}}</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dialog-popup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/dialog-popup.component.ts ***!
  \*******************************************/
/*! exports provided: DialogPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPopupComponent", function() { return DialogPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataservice */ "./src/app/dataservice.ts");
/* harmony import */ var _popup_data_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-data-detail */ "./src/app/popup-data-detail.ts");




var DialogPopupComponent = /** @class */ (function () {
    function DialogPopupComponent(_dataService) {
        this._dataService = _dataService;
        this.popupDataDetail = new _popup_data_detail__WEBPACK_IMPORTED_MODULE_3__["PopupDataDetail"](0, "", "", "");
        this.dataService = _dataService;
    }
    DialogPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.change.subscribe(function (popupDataDetail) {
            _this.popupDataDetail = popupDataDetail;
        });
    };
    DialogPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-popup',
            template: __webpack_require__(/*! ./dialog-popup.component.html */ "./src/app/dialog-popup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice__WEBPACK_IMPORTED_MODULE_2__["Dataservice"]])
    ], DialogPopupComponent);
    return DialogPopupComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"footer-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-5 col-md-6 footer-info\">\n          <h3>{{title}}</h3>\n          <p>{{description}}</p>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 footer-links\">\n          <h4>Useful Links</h4>\n          <ul>\n            <li><a href=\"#intro\">Home</a></li>\n            <li><a href=\"#about\">About us</a></li>\n            <li><a href=\"#services\">Services</a></li>\n            <li><a href=\"#\" (click)=\"modifyPopupData(0,'','Terms of Service','Test Data')\" data-toggle=\"modal\" data-target=\"#myprojectModal\" >Terms of service</a></li>\n            <li><a href=\"#\" (click)=\"modifyPopupData(0,'','Privacy policy','Test Data')\" data-toggle=\"modal\" data-target=\"#myprojectModal\">Privacy policy</a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 footer-contact\">\n          <h4>Contact Us</h4>\n          <p>\n            55, Brigham Road, RG1 8QS,<br>\n            Reading, Berkshire<br>\n            United Kingdom <br>\n            \n            <strong>Phone: </strong> <a href=\"tel:+44 1527 525635\">+44 7426 0109 96</a><br>\n            <!-- <p><a href=\"tel:+44 1527 525635\">+44 7426 0109 96</a></p> -->\n            <strong>Email: </strong> <a href=\"mailto:info@example.com\">info@example.com</a><br>\n            <!-- <p><a href=\"mailto:info@example.com\">info@example.com</a></p> -->\n          </p>\n\n          <div class=\"social-links\">\n            <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n            <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n            <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n            <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n          </div>\n\n        </div>\n\n        \n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; Copyright <strong>{{title}}</strong>. All Rights Reserved\n    </div>\n    \n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice */ "./src/app/dataservice.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(dataService) {
        this.dataService = dataService;
        this.title = "NexTech UK";
        this.description = "NexTech UK is an IT startup that is established with a vision to utilize the potential of the brilliant and skillful IT professionals. To build a good reputation and a sense of trust is our highest priority as a technology service provider. We focus on software development, process automation, graphic designing, search engine optimization (SEO).";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.modifyPopupData = function (serviceId, imageUrl, shortDesc, serviceDesc) {
        this.dataService.modifyData(serviceId, imageUrl, shortDesc, serviceDesc);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice__WEBPACK_IMPORTED_MODULE_2__["Dataservice"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\" class=\"clearfix\">\n  <div class=\"container\">  \n      <div class=\"intro-img\">\n          <img src=\"assets/img/intro-img.svg\" alt=\"\" class=\"img-fluid\">\n      </div>\n  \n      <div class=\"intro-info\">\n          <h2 [innerHTML]=\"description\"> </h2>\n          <div>\n            <a href=\"#about\" class=\"btn-get-started scrollto\">Get Started</a>\n            <a href=\"#services\" class=\"btn-services scrollto\">Our Services</a>\n          </div>\n      </div>     \n    </div>\n  </section>\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.description = "The place<br><span>where we</span><br>Innovate, Automate and Develop";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/our-group/employee.ts":
/*!***************************************!*\
  !*** ./src/app/our-group/employee.ts ***!
  \***************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, employeeDesignation, contact, description, skills, image, projects, carouselItem) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
        this.contact = contact;
        this.description = description;
        this.skills = skills;
        this.image = image;
        this.projects = projects;
        this.carouselItem = carouselItem;
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/our-group/group-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/our-group/group-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"pic\">\n    <img src=\"assets/img/team-1.jpg\" alt=\"Card image cap\">\n</div>\n<h4>{{employee.employeeName}}</h4>\n<p>{{employee.employeeDesignation}}</p>\n<p>{{employee.contact}}</p>\n<p><strong>Skill Set:</strong> {{ employee.skills[0] +','+ employee.skills[1] +', ' + employee.skills[2] +', ' + employee.skills[3] +', ' + employee.skills[4] }}</p> "

/***/ }),

/***/ "./src/app/our-group/group-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/our-group/group-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: GroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee */ "./src/app/our-group/employee.ts");
/* harmony import */ var _our_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-group.component */ "./src/app/our-group/our-group.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GroupDetailComponent = /** @class */ (function () {
    function GroupDetailComponent(router) {
        this.router = router;
        this.ourGroupComponent = new _our_group_component__WEBPACK_IMPORTED_MODULE_3__["OurGroupComponent"]();
        localStorage.clear();
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
    };
    GroupDetailComponent.prototype.setEmployee = function (employeeId) {
        this.employeeId = employeeId;
        console.log(this.employeeId);
        localStorage.setItem("employee", JSON.stringify({ "employee": this.ourGroupComponent.employees[this.employeeId] }));
        this.router.navigate(["emp-details"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"])
    ], GroupDetailComponent.prototype, "employee", void 0);
    GroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-detail',
            template: __webpack_require__(/*! ./group-detail.component.html */ "./src/app/our-group/group-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());



/***/ }),

/***/ "./src/app/our-group/our-group.component.html":
/*!****************************************************!*\
  !*** ./src/app/our-group/our-group.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\">\n  <div class=\"container\">\n       <div class=\"row\">\n          <div class=\"col-md-12\">\n    <!-- <div class=\"section-header\">\n      <h3>{{title}}</h3>\n      <p>{{description}}</p>\n    </div> -->\n    <div id=\"testimonial-slider\" class=\"owl-carousel\">\n    <div class=\"testimonial\" *ngFor=\"let employee of employees;let i=index\">\n     \n        <app-group-detail [employee]=\"employee\"></app-group-detail>\n         \n    </div>\n    \n    </div>\n    </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/our-group/our-group.component.ts":
/*!**************************************************!*\
  !*** ./src/app/our-group/our-group.component.ts ***!
  \**************************************************/
/*! exports provided: OurGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurGroupComponent", function() { return OurGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio/project */ "./src/app/portfolio/project.ts");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee */ "./src/app/our-group/employee.ts");




var OurGroupComponent = /** @class */ (function () {
    function OurGroupComponent() {
        this.title = "Our Team";
        this.description = "NexTech believes in team work that fosters a flexible and collaborative work environment."
            + " The delegation of authority enables the employees to work with an endless drive to achieve goals.";
        this.employees = [
            new _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](0, "Hamid Sayeed Khan", "Co-founder & Software Project Manager", "+92 340 0008766, +92 300 5245306", "A highly proficient IT professional with 10 years of professional work experience of IT infrastructure, software projects/team management and all phases of Software Development Life Cycle.An Oracle Certified Java Programmer and Teradata Database Certified Professional. Possesses a sound experience of Design & Development of medium to large scale Software Applications / ERPs using Java & Dot Net MVC frameworks and Database systems using IBM DB2, Oracle, MS SQL Server, MySQL and Teradata databases. An expert web services developer using SOAP/REST architecture. A proficient mobile application developer using Android SDK and SQLite database.", ["Project Planning", "Requirement Gathering", "Documentation", "Atlassian JIRA", "Data Warehousing ETL/ELT", "Data Stage", "Tableau", "IBM Watson", "IBM SPSS", "Teradata SQL and Load Utilities", "C/C++", "DOT NET", "ASP.NET", "C#", "MVC framework", "Web Forms", "Java", "J2EE", "Struts", "Spring", "Hibernate", "JSF Frameworks", "Servlets", "JSP", "JDBC", "JUnit Testing Framework", "Google-Guice", "JSTL", "JAXB", "SAP-Hybris", "Core Java", "Java Swing for GUI Programming", "Android", "Web Development", "Perl", "PHP", "XML", "XSLT", "XSD", "HTML", "JavaScript", "JQuery", "JSON", "CSS", "AJAX", "Web Services", "Big-WS(JAX-WS, SOAP, WSDL)", "RESTful-WS(JAX-RS)"], "../../assets/img/Hamid.png", [
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](0, "OneView", ["J2EE", "Struts 2", "EJB 3.1", "JSP", "Java script", "XML", "Rest Web services", "SQL", "DB2", "IBM WebSphere Application Server"], "Senior Application Developer/Architect, Company: IBM OneView is a web-based tool to facilitate the efficient closure of Major Incidents (high severity) across IBM Delivery clients worldwide, providing notifications of incidents to senior IBM & Customer executives. The tool can accept incident tickets either manually or, in some centers, automatically from other incident tools. It tracks incident closure milestones, facilitating the sending of progressive alerts and displaying current major incidents on a dashboard. OneView facilitates the execution of Major Incident Management processes including:" +
                    "-	Tracking completion of key process milestones "
                    + "-	Notifying pre-defined groups of users in the event of a major incident via SMS or Email"
                    + "-	Notifying IBM users of a major incident using the standard Executive Alert template"
                    + "-	Displaying the current status of major incidents via a real-time dashboard"
                    + "-	Managing distribution lists through a built-in request/approval process"
                    + "-	Providing reports based on the process information recorded", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](1, "Telenor Digital Global Backend", ["Java, Android", "Html", "Javascript", "JQuery", "Restful WebServices"], "As Operations Engineer:"
                    + "- Surveilling re-actively Telenor Digital products and system performance, such as:"
                    + "o	Telenor Global ID (Connect)"
                    + "o	Payment (incl. Direct Operator Billing)"
                    + "o	Infrastructure o	Executing troubleshooting / fixes according to SOP-s (Playbooks)"
                    + "- Reactive and respond to alarms from automated or manual systems, including incident reports received by phone during shifts."
                    + "- During incident handling, responsible for:"
                    + "o	Triage the failure to determine that it meets the bar for 24x7 operations."
                    + "o	Follow playbooks to confirm the failure and attempt a resolution."
                    + "o	Coordinate with upstream and downstream partners if the failure is caused by or causing failures in external systems operated by partners."
                    + "o	Escalate unresolved failures to the responsible development team."
                    + "o	Escalate severe failures to management for crisis management."
                    + "o	Record information about alarm handling, such as root cause analysis and cost (time) of resolution."
                    + "***As Development Engineer:"
                    + "- Develop new and improve existing functionality of the Telenor Digital Global Backend. Tasks range from front end development, RESTful web services, android app development and hard core back-end systems with distributed systems and related challenges."
                    + "- Participate in the full process, starting with understanding the requirements, creating effective designs, writing efficient code and ending with testing the finished feature.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](2, "Service Tracking and Calculations (STAC) ", ["Java", "Oracle, Eclipse", "SVN, Drools", "Junit", "Mockito", "Easy Mock", "Oracle SQL Developer"], "Application used to validate and perform calculations of the census and remittance data of the payroll"
                    + "-	Develop modules to calculate the years of service and employer contribution amount in JAVA"
                    + "-	Design and Develop PL/SQL scripts in Oracle SQL Developer to correct the state of the database according to business requirements"
                    + "-	Create rules using Drools to define the business rules to calculate services and contribution"
                    + " Design and document technical specifications for new functionalities.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](3, "Teradata Global Control Framework (GCFR) ", ["Data Stage", "Informatica", "ODI", "SAS DI"], "Control Framework (CTLFW) is a common set of architectural standards, processing patterns, and code libraries to track processing including the capture, maintaining, and reporting of operational metadata. The framework aims to provide a standard interface with DI tools (like Data Stage, Informatica, ODI, SAS DI etc.), which accelerates the whole ELT process and facilitate documentation effort. The goal of the project is to enhance user productivity by integrating and standardizing the best functionalities of various ETL frameworks, which are used by Teradata Consultants in different regions of the world.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](4, "Teradata Mapping Manager (TMM)  ", ["Java", "Swing", "MVC"], "The Teradata Mapping Manager (TMM) is java based desktop application and is being developed for Teradata Clients and field associates to create mapping specifications between different types of Data Representations. These representations include (but are not limited to) logical, physical and semantic data models. By providing a drag-and-drop interface, a relational mapping metadata repository and cross mapping functionality, TMM will help reduce time to solution an Integrated Analytics environment. ", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](5, "Teradata Migration Accelerator (TMA) ", ["Java"], "The objective of developing the Teradata Migration Accelerator (TMA) is to use an automated tool which will help the project team to convert the code base from non-Teradata based system according to Teradata compliant code. This will provide a uniform approach for migration across different databases. By adopting this tool, Teradata can target prospect customers with the aim of gaining competitive advantage over its competitors. Hence, by reducing the time spent on converting the code base, significant time and resources can be dedicated to testing of the required system ", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](7, "Seventh Billion", ["Java", "Spring Framework", "Hibernate", "Html", "Css", "Javascript", "JDBC", "SQL"], "Participated in the development of www.7thbillion.com using JSPs, Spring, Hibernate, JDBC, AJAX and SQL. It is a social networking website showing the progressive attitude of the Middle East’s youth. This site has been built on J2EE platform using Spring Framework and SQL Server.", "www.7thbillion.com"),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](8, "Hieroglyphics Drill Book  ", ["Android"], "A general purpose android application for learning characters in which the user traces a hieroglyph character which is paled out with the figure. Upon successful trace of almost the whole character on the Game Playing Screen, the current character’s scene will finish with an admiration message and the next character’s scene will appear. Ultimately, it will go to the Game Performed Screen if the sequence of characters is finished. This application can be applied to multiple character sets like alphabets, Japanese characters and so on.", "www.7thbillion.com"),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](9, "SMS Appliance Controller ", ["C/C++"], "An ideal project for controlling electronic appliances in any sort of emergency from far off places through an sms."
                    + "The project comprised of:"
                    + "-	A Mobile Handset"
                    + "-	AVR Micro controller"
                    + "-	Transistors, diodes, capacitors and resistors."
                    + "-	Relays used as switches."
                    + "-	A mobile set connected through serial data cable."
                    + "Functionality: Any sender mobile sends sms to receiver mobile (attached to the Circuit). Receiver mobile receives data (in zero-one format). Micro-controller continuously reads the mobile’s memory for a new sms via the circuitry. Relays are activated/deactivated according to the sequence of 1s and 0s sent in the sms. These relays work as on/off switches for the electronic appliances.", "")
            ], "carousel-item col-md-4 active"),
            new _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](1, "Muhammad Danish Khan", "Application Consultant / Full Stack Developer", "+92 340 0008879", "Experienced Application Developer with a demonstrated history of working in the information technology and services industry. Skilled in Java, Struts, Spring Framework, Hibernate , Go, Angular, Swift ,Hadoop and It's eco system And Web Services. Having experience in E-Commerce and Incident Management Domain.", ["Java/JavaEE", "Spring Framework", "Angular 1.x/4.x", "Struts2", "SQL", "NodeJs", "JavaFx", "Go", "Swift", "Hibernate", "Jsp", "Servlets", "Javascript/Jquery"], "../../assets/img/danish.jpg", [
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](0, "Point Of Sales System", ["Java", "JavaFx", "Spring", "Hibernate", "IReport", "SQL"], "A computer based system which has the ability to track stock,sales and Borrowers. It has just One admin which will control the whole application. This system do functions like login to the system, changing password, can do CRUD (Create, Retrieve, Update, Delete ) on stocks, borrowers details and their billing, and creating and deleting common customer billings. It also shows charts of profit and loss based on daily, monthly and yearly. (Desktop Based Application)", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](1, "Employee Management System (EMS)", ["Java", "Spring framework", "Spring Security", "JDBC", "SQL"], "•	In this system we have two modules HR (Human Resource) and LMS (Leave Management System). HR can do CRUD on Departments, Designations, Employees. In LMS employee can apply for leave. A notification and mail will be send to it's direct PM (Project Manager). Then upon his acceptance or rejection a notification and mail will be send to employee and HR.This application has also a News Feed module. In which employee can update his status like “going for prayer” , “going for dinner” etc and when he/she comes back, he/she will click on i'm back button and his/her notification will be 	removed from the feed. (Internal Tool)", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](2, "Data Entry and Data Visulatization of Revenue for Directorate General of Immigration & Passports (Islamabad)", ["Java", "Jsp", "Servlet", "Spring Boot", "AngularJs", "Angular Charts", "SQL", "Restful WebServices"], "This project has two parts --Data Entry --Data Visualization. Data Entry project is developed using Jsp and Servlets. This project also contains the User View of Data Visualization project. In Data Entry project User can Enters any number of records which are saved in session. User can edit or delete that records also. When Entry is done then User click on Save the entries button and the entries entered by user are stored in database. Based on those entries data is visualized. Data Visualization User view can only be accessed by Islamabad RPO admin.For data visualization the client side view is integrated with in Data Entry Project.  And back-end is  developed in Spring Boot as restful service. In this restful service there are only fetching of records no insertion or deletion or updating.   From this service data comes as JSON objects and then using AngualrJs and Angular-Charts it is visualized based on day, month, year and between.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](3, "SanMar E-Commerce Web Application Using Hybris Framwork", ["Java", "Spring Mvc", "Spring Security", "Spring Integration", "Restful WebServices", "Angular 1.x", "SQL"], "This is an e-commerce web application. It is first developed in Jsp and Servlets and JDBC. Now conversion of this in progress to hybris. Hybris is an E-Commerce platform which provides most built in features for E-commerce appliction. Hybris framework is based on Spring Framework of Java And It's front end is in AngularJs ", "https://www.sanmar.com/"),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](4, "Incident Management Tool", ["Java", "Struts 2", "EJB 3.1", "JSP", "Java script", "XML", "Rest Web services", "SQL", "DB2", "IBM WebSphere Application Server"], "Application Developer, Company: IBM OneView is a web-based tool to facilitate the efficient closure of Major Incidents (high severity) across IBM Delivery clients worldwide, providing notifications of incidents to senior IBM & Customer executives. The tool can accept incident tickets either manually or, in some centers, automatically from other incident tools. It tracks incident closure milestones, facilitating the sending of progressive alerts and displaying current major incidents on a dashboard. OneView facilitates the execution of Major Incident Management processes including:"
                    + "-	Tracking completion of key process milestones "
                    + "-	Notifying pre-defined groups of users in the event of a major incident via SMS or Email"
                    + "-	Notifying IBM users of a major incident using the standard Executive Alert template"
                    + "-	Displaying the current status of major incidents via a real-time dashboard"
                    + "-	Managing distribution lists through a built-in request/approval process"
                    + "-	Providing reports based on the process information recorded", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](5, "TechZola Inc", ["NodeJs", "Angular 4"], "The main purpose of this site is to expose our profile to the clients about Our Projects and Our Team", "techzolainc.com")
            ], "carousel-item col-md-4"),
            new _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](2, "Sadiq Ullah", "Mobile App Developer", "+92 307 8047743", "I am Microsoft SharePoint developer and administrator having more than eight years of experience. I have been mainly involved in developing web parts, custom solutions and packages for SharePoint 2013, SharePoint 2010 and MOSS 2007. I have skills in SharePoint administration as well and I am responsible for our company SharePoint Farms and mainly involved in performing installations, configuration, security, performance enhancements and deploying solutions on the Farms. I have sound experience of .NET Framework especially ASP.NET with C#. I hold Microsoft Certified Professional (MCP) certificate in SharePoint 2013 and Microsoft Certified Technology Specialist (MCTS) certificate in SharePoint 2007", ["Andriod", "I-OS", "Unity", "Javascript", "XML"], "../../assets/img/imageforproject.jpg", [
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](0, "Safeer Program - Safeer Al A'amal Project", ["SharePoint"], "Safeer Program is an e-gov platform created to address the critical need to support Saudi students and Cultural Missions around the world. This effort was designed to further develop Saudi's Information Society commitment to gender equality, citizens education and empowerment, and social justice among citizens.The main target of Safeer Program is to provide services for more than 100000 Saudi student with the best quality in terms of BPM solutions to speed up the process with in the Ministry and its attaches in order to fully automate all the student's needs with just some clicks on his student portal.", "https://safeer.moe.gov.sa/"),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](1, "Student Portal", ["SharePoint 2013", "Custom WebParts with Visual Studio 2012", "C#", "Jquery"], "Student Portal is one of the main application in Ministry of Higher Education. It's a gateway for providing E-Services to more than 200000 Saudi students studying abroad from Saudi Arabia. The multilingual portal is based on SharePoint 2013 publishing template with Claim based authentication.I have been mainly involved in managing the SharePoint Farm, developing new web parts and solutions, deploying solutions and packages, customizing the portal , managing SharePoint groups and permissions, and everything related to the portal.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](2, "Safeer Program - Safeer+ Social Network", ["SharePoint"], "Safeer+ is a part of the whole Safeer Program for the Saudi student all over the world, it is a social networking portal providing a huge set of articles and videos to the Saudi students abroad in various fields and scopes with which they can interact, like and share.In addition to online video broad casting for any live events held by the ministry of higher education so that any student can attend the even from any part of the world by just logging in to his account on the Safeer+ !", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](3, "Safeer Program - Safeer Alumni", ["SharePoint"], "Safeer Alumni is a part of the whole Safeer Program for the Saudi student all over the world, it is a profissional network administrated by the Saudi Ministry of Higher Education.Its main target is to be the main hub between the graduated saudi students inside and outside the Kingdom and registered Employments, and to provide high quality internships in all fields.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](4, "Ministry Employees Portal", ["SharePoint 2010", "C#", "Visual Studio 2010"], "The Ministry Employees Portal is SharePoint 2010 publishing portal used by the Ministry employees for their communication with the ministry. It contains forms for requesting vacations, inquire about the salaries and balances, honors and awards etc.I have been responsible for developing visual web parts solutions and reports for the portal.", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](5, "ClientPoint", ["MOSS 2007", "Quest Web Parts 2007", "Quest Charts 2007", "Visual C#"], "Sales Automation system which contains all the information related to leads, opportunities, accounts and sales. ", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](6, "Virtual Pensions Manager", ["MOSS 2007", "Quest Web Parts for SharePoint 2007", "Nintex Workflows 2007", " Visual C#"], "A comprehensive Document Management System which includes movement of documents to different locations using workflows. System also includes documents approval and reject procedure with comprehensive security implementation.", "")
            ], "carousel-item col-md-4"),
            new _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](3, "Muhammad Haris", "UI/UX & Front End Developer", "+92 332 7689024", "", ["Front End Design", "Graphics Design", "Javascript", "JQuery", "BootStrap"], "../../assets/img/imageforproject.jpg", [new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](0, "", [""], "", "")], "carousel-item col-md-4"),
            /* new Employee(4, "Khalil Khan", "SEO & Business Development Executive", "", "", ["Master of Google Keyword Planner tool", "Master of Open Site Explorer tool", "Master of Ahrefs tool", "Microsoft Office", "SQL", "Data conversion Tool", "HTML", "XML", "PHP", "C#", ".Net development", "Testing & Troubleshooting", "Data Processing", "Quality Assurance", "Effective Communication", "Customer Care", "Programming", "Braille Transcribing (Electronic Braille, US & UEB formats)", "Article Writing"], "../../assets/img/imageforproject.jpg",
              [new Project(0, "", [""], "", "")], "carousel-item col-md-4"
            ), */
            new _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"](5, "Sardar Khan", "Technical Lead", "+92 306 8060492", "", ["C/C++", "C#", "VB/VB.NET", "VBA for Microsoft Office", ".NET Framework", "Entity Framework and Linq", "ASP.NET", "Microsoft SQL Server", "WPF", "Microsoft Silverlight", "Windows Form", "Windows Services",
                "Web Service ( SOAP + REST)", "Windows SharePoint Service (WSS3.0)", "Microsoft Office SharePoint Services(MOSS 2007)", "Microsoft SharePoint Foundation Services(MSFS 2010)", "Ajax", "HTML/DHTL", "JavaScript", "JQuery", "CSS", "PHP", "MySQL", "Drupal 6,7", "CodeIgniter", "Strong OOP and database concepts", "Handy with interpersonal communication and positive team working approach"], "../../assets/img/imageforproject.jpg", [new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](0, "Point of Sale (POS) Application for an Australian Company ServIT", ["Microsoft .NET 4.0 ", "Entity Framework ", "DevForce Ideablade", "Microsoft SQL Server 2008 "], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](1, "Local Intranet website for an Austrailian pharmaceutical company", ["Windows SharePoint Services (WSS 3.0)"], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](2, " Customization of Microsoft Office 365 Cloud Services SharePoint Online, Lync Online and Office Web App", [], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](3, " Attendance and report of employees, visitors and residents of PAF (Pakistan Air Force) (2011)", [".NET Framework 2.0", "SQL Server 2005."], "This system is used for attendance and report of employees, visitors and residents of PAF Complex and different bases. The system is also used in the Entry Control Points (ECP) from where the people pass to enter or exit to or from a specific area of PAF bases. The admin creates users and define Entry Control Points for different bases and Unit, assign rights to the users. The users then enroll fingers of the employees, visitors and residents of different bases and apply ECP settings. Then the registered individuals can easily pass through an ECP by placing the finger on the scanner. Later it was integrated with Fuel Management System and Hospital Management System", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](4, " Traffic control software for Bahria town using the sirit Rfid reader SDK.(2008)", [".NET Framework 2.0", "SQL Server 2005."], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](5, " Car Parking system for CDGK Plaza Karachi .(2008)", [".NET Framework 2.0", "SQL Server 2005."], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](6, " Asset Tracking system for Standard Charted bank Karachi .(2009)", [".NET Framework 2.0", "SQL Server 2005."], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](7, " Access Control system for FIA , Islamabad .(2009)", [".NET Framework 2.0", "SQL Server 2005."], "", ""),
                new _portfolio_project__WEBPACK_IMPORTED_MODULE_2__["Project"](8, " Web Mobile Synchronizer", ["Java", "JavaEE"], "A simple project for the synchronization of mobile data to the website. The mobile data i.e. contact list, messages, calendar events are stored and retrieved from the website everywhere. An administrator assigns username and password to the users who want to register for this service. Every user can access his information directly from the web or through mobile phone that support GPRS. Every user must load the mobile application in his mobile for accessing this service from mobile.", "")
            ], "carousel-item col-md-4")
        ];
    }
    OurGroupComponent.prototype.ngOnInit = function () {
    };
    OurGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-our-group",
            template: __webpack_require__(/*! ./our-group.component.html */ "./src/app/our-group/our-group.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurGroupComponent);
    return OurGroupComponent;
}());



/***/ }),

/***/ "./src/app/popup-data-detail.ts":
/*!**************************************!*\
  !*** ./src/app/popup-data-detail.ts ***!
  \**************************************/
/*! exports provided: PopupDataDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDataDetail", function() { return PopupDataDetail; });
var PopupDataDetail = /** @class */ (function () {
    function PopupDataDetail(detaileId, detaileImage, shortDesc, detaileDesc) {
        this.detaileId = detaileId;
        this.detaileImage = detaileImage;
        this.shortDesc = shortDesc;
        this.detaileDesc = detaileDesc;
    }
    return PopupDataDetail;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\" class=\"clearfix\">\n  <div class=\"container\">\n\n    <header class=\"section-header\">\n      <h3 class=\"section-title\">{{title}}</h3>\n    </header>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul id=\"portfolio-flters\">\n          <li data-filter=\".filter-app\">App</li>\n          <li data-filter=\".filter-card\">Card</li>\n          <li data-filter=\".filter-web\">Web</li>\n          <li data-filter=\"*\" class=\"filter-active\">All</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"row portfolio-container\">\n\n      <div [class]='portfolio.cssFilter' *ngFor=\"let portfolio of portfolios; let i = index\">\n        <app-project-card [portfolio]=\"portfolio\"></app-project-card>\n      </div>      \n\n    </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ "./src/app/portfolio/portfolio.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.title = "OUR PROJECTS";
        this.portfolios = [
            /*new Portfolio(0, "Point Of Sales System      ", "Muhammad Danish Khan" , ["Java" , "JavaFx", "Spring", "Hibernate" , "IReport"] , "A computer based system which has the ability to track stock,sales and Borrowers. It has just One admin which will control the whole application. This system do functions like login to the system, changing password, can do CRUD (Create, Retrieve, Update, Delete ) on stocks, borrowers details and their billing, and creating and deleting common customer billings. (Desktop Based Application)", ""), */
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](1, "Employee Management System ", "Muhammad Danish Khan", ["Java", "Spring", "SpringMVC", "JDBC", "Servlets", "Angular Charts", "HTML5"], "In this system we have two modules HR (Human Resource) and LMS (Leave Management System). HR can do CRUD on Departments, Designations, Employees. In LMS employee can apply for leave. A notification and mail will be send to it''s direct PM (Project Manager). Then upon his acceptance or rejection a notification and mail will be send to employee and HR. This application has also a News Feed module. In which employee can update his status like “going for prayer” , “going for dinner” etc and when he/she comes back, he/she will click on i''m back button and his/her notification will be 	removed from the feed (Internal Application)", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](2, "Data Entry and Visulatization of Revenue ", "Muhammad Danish Khan", ["Java", "Jsp", "Servlets", "AngularJs", "Angular Charts", "Restful WebServices", "JDBC "], "This project has two parts 1:- Data Entry 2:-Data Visualization Data Entry project is developed using Jsp and Servlets. This project also contains the User View of Data Visualization project. In Data Entry project User can Enters any number of records which are saved in session. User can edit or delete that records also. When Entry is done then User click on Save the entries button and the entries user entered are stored in database. Based on those entries data is visualized. Data Visualization User view can only be accessed by Islamabad RPO admin. For data visualization the client side view is integrated with in Data Entryproject.  And back-end is  developed in Spring Boot as restful service. In this restful service there are only fetching of records no insertion or deletion or updating.   From this service data comes as JSON objects and then using AngualrJs and Angular-Charts it is visualized. (Internal Application)", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](3, "SanMar E-Commerce Web Application ", "Muhammad Danish Khan", ["Java", "Spring Mvc, Security,Integration", "WebServices, AngularJs"], "This is an e-commerce web application. It is first developed in Jsp and Servlets and JDBC. Now conversion of this in progress to hybris. Hybris is an E-Commerce platform which provides most built in features for E-commerce appliction. Hybris framework is based on Spring Framework of Java And It's front end is in AngularJs (Under Construction)", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](4, "Safeer Program - Safeer Al A'amal Project ", "Sami Ullah", ["SharePoint", "Custom WebParts", "Jquery "], "Safeer Program is an e-gov platform created to address the critical need to support Saudi students and Cultural Missions around the world. This effort was designed to further develop Saudi's Information Society commitment to gender equality, citizens education and empowerment, and social justice among citizens.The main target of Safeer Program is to provide services for more than 100000 Saudi student with the best quality in terms of BPM solutions to speed up the process with in the Ministry and its attaches in order to fully automate all the student's needs with just some clicks on his student portal. ", "https://safeer.moe.gov.sa/", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](5, "Safeer Program - Student Portal ", "Sami Ullah", ["SharePoint 2013", "Custom WebParts", "C#", "Jquery "], "Student Portal is one of the main application in Ministry of Higher Education. It's a gateway for providing E-Services to more than 200000 Saudi students studying abroad from Saudi Arabia. The multilingual portal is based on SharePoint 2013 publishing template with Claim based authentication.I have been mainly involved in managing the SharePoint Farm, developing new web parts and solutions, deploying solutions and packages, customizing the portal , managing SharePoint groups and permissions, and everything related to the portal.", "https://safeer.moe.gov.sa/", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](6, "Safeer Program - Safeer+ Social Network ", "Sami Ullah", ["SharePoint", "Custom WebParts", "Jquery "], "Safeer+ is a part of the whole Safeer Program for the Saudi student all over the world, it is a social networking portal providing a huge set of articles and videos to the Saudi students abroad in various fields and scopes with which they can interact, like and share.In addition to online video broad casting for any live events held by the ministry of higher education so that any student can attend the even from any part of the world by just logging in to his account on the Safeer+ ! ", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](7, "Safeer Program - Safeer Alumni ", "Sami Ullah", ["SharePoint"], "Safeer Alumni is a part of the whole Safeer Program for the Saudi student all over the world, it is a profissional network administrated by the Saudi Ministry of Higher Education.Its main target is to be the main hub between the graduated saudi students inside and outside the Kingdom and registered Employments, and to provide high quality internships in all fields.", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](8, "Ministry Employees Portal ", "Sami Ullah", ["SharePoint 2010", "C#", "Visual Studio 2010"], "The Ministry Employees Portal is SharePoint 2010 publishing portal used by the Ministry employees for their communication with the ministry. It contains forms for requesting vacations, inquire about the salaries and balances, honors and awards etc.I have been responsible for developing visual web parts solutions and reports for the portal.", "https://safeer.moe.gov.sa/", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](9, "ClientPoint ", "Sami Ullah", ["MOSS 2007", "Quest Web Parts 2007", "Quest Charts 2007"], "Sales Automation system which contains all the information related to leads, opportunities, accounts and sales.", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](10, "Virtual Pensions Manager ", "Sami Ullah", ["MOSS 2007", "Quest Web Parts for SharePoint 2007", "Nintex Workflows 2007", "Visual C#"], "A comprehensive Document Management System which includes movement of documents to different locations using workflows. System also includes documents approval and reject procedure with comprehensive security implementation.", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](11, "OneView", "Hamid Sayeed Khan / Muhammad Danish Khan", ["J2EE", "Perl", "Web services", "Struts 2", "EJB 3.1", "JSP", "Java script", "DOM4J", "SQL", "DB2", "Shell script"], "IBM OneView is a web-based tool to facilitate the efficient closure of Major Incidents (high severity) across IBM Delivery clients worldwide, providing notifications of incidents to senior IBM & Customer executives. The tool can accept incident tickets either manually or, in some centers, automatically from other incident tools. It tracks incident closure milestones, facilitating the sending of progressive alerts and displaying current major incidents on a dashboard. OneView facilitates the execution of Major Incident Management processes including:" +
                "-	Tracking completion of key process milestones "
                + "-	Notifying pre-defined groups of users in the event of a major incident via SMS or Email"
                + "-	Notifying IBM users of a major incident using the standard Executive Alert template"
                + "-	Displaying the current status of major incidents via a real-time dashboard"
                + "-	Managing distribution lists through a built-in request/approval process"
                + "-	Providing reports based on the process information recorded", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](12, "Telenor Digital Global Backend", "Hamid Sayeed Khan", ["Java", "Android", "Html", "Javascript", "JQuery"], "- Surveilling re-actively Telenor Digital products and system performance, such as:"
                + "o	Telenor Global ID (Connect)"
                + "o	Payment (incl. Direct Operator Billing)"
                + "o	Infrastructure o	Executing troubleshooting / fixes according to SOP-s (Playbooks)"
                + "- Reactive and respond to alarms from automated or manual systems, including incident reports received by phone during shifts."
                + "- During incident handling, responsible for:"
                + "o	Triage the failure to determine that it meets the bar for 24x7 operations."
                + "o	Follow playbooks to confirm the failure and attempt a resolution."
                + "o	Coordinate with upstream and downstream partners if the failure is caused by or causing failures in external systems operated by partners."
                + "o	Escalate unresolved failures to the responsible development team."
                + "o	Escalate severe failures to management for crisis management."
                + "o	Record information about alarm handling, such as root cause analysis and cost (time) of resolution."
                + "***As Development Engineer:"
                + "- Develop new and improve existing functionality of the Telenor Digital Global Backend. Tasks range from front end development, RESTful web services, android app development and hard core back-end systems with distributed systems and related challenges."
                + "- Participate in the full process, starting with understanding the requirements, creating effective designs, writing efficient code and ending with testing the finished feature.", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](13, "Service Tracking and Calculations (STAC) ", "Hamid Sayeed Khan", ["Java", "Oracle", "Eclipse", "Drools", "Junit", "Mockito", "Easy Mock"], "Application used to validate and perform calculations of the census and remittance data of the payroll"
                + "-	Develop modules to calculate the years of service and employer contribution amount in JAVA"
                + "-	Design and Develop PL/SQL scripts in Oracle SQL Developer to correct the state of the database according to business requirements"
                + "-	Create rules using Drools to define the business rules to calculate services and contribution"
                + " Design and document technical specifications for new functionalities.", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](14, "Teradata Global Control Framework (GCFR) ", "Hamid Sayeed Khan", ["Data Stage", "Informatica", "ODI", "SAS DI"], "Control Framework (CTLFW) is a common set of architectural standards, processing patterns, and code libraries to track processing including the capture, maintaining, and reporting of operational metadata. The framework aims to provide a standard interface with DI tools (like Data Stage, Informatica, ODI, SAS DI etc.), which accelerates the whole ELT process and facilitate documentation effort. The goal of the project is to enhance user productivity by integrating and standardizing the best functionalities of various ETL frameworks, which are used by Teradata Consultants in different regions of the world.", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](15, "Teradata Mapping Manager (TMM)  ", "Hamid Sayeed Khan", ["Java", "Swing", "MVC"], "The Teradata Mapping Manager (TMM) is java based desktop application and is being developed for Teradata Clients and field associates to create mapping specifications between different types of Data Representations. These representations include (but are not limited to) logical, physical and semantic data models. By providing a drag-and-drop interface, a relational mapping metadata repository and cross mapping functionality, TMM will help reduce time to solution an Integrated Analytics environment. ", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](16, "Teradata Migration Accelerator (TMA) ", "Hamid Sayeed Khan", ["Java"], "The objective of developing the Teradata Migration Accelerator (TMA) is to use an automated tool which will help the project team to convert the code base from non-Teradata based system according to Teradata compliant code. This will provide a uniform approach for migration across different databases. By adopting this tool, Teradata can target prospect customers with the aim of gaining competitive advantage over its competitors. Hence, by reducing the time spent on converting the code base, significant time and resources can be dedicated to testing of the required system ", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](17, "Hieroglyphics Drill Book  ", "Hamid Sayeed Khan", ["Android", "html", "css", "JavaScript"], "A general purpose android application for learning characters in which the user traces a hieroglyph character which is paled out with the figure. Upon successful trace of almost the whole character on the Game Playing Screen, the current character’s scene will finish with an admiration message and the next character’s scene will appear. Ultimately, it will go to the Game Performed Screen if the sequence of characters is finished. This application can be applied to multiple character sets like alphabets, Japanese characters and so on.", "www.7thbillion.com", "col-lg-4 col-md-6 portfolio-item filter-app"),
            // new Portfolio(18,
            //   "SMS Appliance Controller ", "Hamid Sayeed Khan",
            //   ["C/C++"],
            //   "An ideal project for controlling electronic appliances in any sort of emergency from far off places through an sms."
            //   + "The project comprised of:"
            //   + "-	A Mobile Handset"
            //   + "-	AVR Micro controller"
            //   + "-	Transistors, diodes, capacitors and resistors."
            //   + "-	Relays used as switches."
            //   + "-	A mobile set connected through serial data cable."
            //   + "Functionality: Any sender mobile sends sms to receiver mobile (attached to the Circuit). Receiver mobile receives data (in zero-one format). Micro-controller continuously reads the mobile’s memory for a new sms via the circuitry. Relays are activated/deactivated according to the sequence of 1s and 0s sent in the sms. These relays work as on/off switches for the electronic appliances.",
            //   "","col-lg-4 col-md-6 portfolio-item filter-app"
            // ),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](19, "Point of Sale (POS)- ServIT  ", "Sardar Khan", ["Microsoft .NET 4.0 ", "Entity Framework ", "SQL Server 2008 "], "", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](20, "Seventh Billion", "Hamid Sayeed Khan", ["Java", "Spring Framework", "Hibernate", "Html", "Css", "Javascript", "JDBC", "SQL"], "Participated in the development of www.7thbillion.com using JSPs, Spring, Hibernate, JDBC, AJAX and SQL. It is a social networking website showing the progressive attitude of the Middle East’s youth. This site has been built on J2EE platform using Spring Framework and SQL Server.", "www.7thbillion.com", "col-lg-4 col-md-6 portfolio-item filter-web"),
            /*new Portfolio(21,
              "Local Intranet website for an Austrailian pharmaceutical company  ", "Sardar Khan",
              ["Windows SharePoint Services (WSS 3.0)"],
              "",
              "","col-lg-4 col-md-6 portfolio-item filter-web"
            ), */
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](22, "MATB ", "Sardar Khan", ["Office 365", "SharePoint Online", "Lync ", "Office Web App", "Css", "Html", "SharePoint Designer"], "", "", "col-lg-4 col-md-6 portfolio-item filter-web"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](23, "Attendance and Visitors Management System ", "Sardar Khan", [".NET Framework 2.0", "SQL Server 2005.", "NetGen"], "This system is used for attendance and report of employees, visitors and residents of PAF Complex and different bases. The system is also used in the Entry Control Points (ECP) from where the people pass to enter or exit to or from a specific area of PAF bases. The admin creates users and define Entry Control Points for different bases and Unit, assign rights to the users. The users then enroll fingers of the employees, visitors and residents of different bases and apply ECP settings. Then the registered individuals can easily pass through an ECP by placing the finger on the scanner. Later it was integrated with Fuel Management System and Hospital Management System", "", "col-lg-4 col-md-6 portfolio-item filter-web") /* ,
            new Portfolio(24,
              "Traffic control software for Bahria town using the sirit Rfid reader SDK.(2008)  ", "Sardar Khan",
              [".NET Framework 2.0", "SQL Server 2005."],
              "",
              "","col-lg-4 col-md-6 portfolio-item filter-app"
            ) */,
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](25, "Car Parking system for CDGK Plaza Karachi .(2008)", "Sardar Khan", [".NET Framework 2.0", "SQL Server 2005."], "", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](26, "Asset Tracking system for Standard Charted bank Karachi .(2009) ", "Sardar Khan", [".NET Framework 2.0", "SQL Server 2005."], "", "", "col-lg-4 col-md-6 portfolio-item filter-app"),
            new _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"](27, "Access Control system for FIA , Islamabad .(2009)", "Sardar Khan", [".NET Framework 2.0", "SQL Server 2005."], "", "", "col-lg-4 col-md-6 portfolio-item filter-app") /* ,
            new Portfolio(28,
              "Web Mobile Synchronizer ", "Sardar Khan",
              ["Java", "JavaEE "],
              "A simple project for the synchronization of mobile data to the website. The mobile data i.e. contact list, messages, calendar events are stored and retrieved from the website everywhere. An administrator assigns username and password to the users who want to register for this service. Every user can access his information directly from the web or through mobile phone that support GPRS. Every user must load the mobile application in his mobile for accessing this service from mobile.",
              "","col-lg-4 col-md-6 portfolio-item filter-app"
            ) */
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-portfolio",
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            preserveWhitespaces: true,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.ts":
/*!****************************************!*\
  !*** ./src/app/portfolio/portfolio.ts ***!
  \****************************************/
/*! exports provided: Portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
var Portfolio = /** @class */ (function () {
    function Portfolio(portfolioId, projectName, developedBy, languageAndFrameWork, projectDescription, link, cssFilter) {
        this.portfolioId = portfolioId;
        this.projectName = projectName;
        this.developedBy = developedBy;
        this.languageAndFrameWork = languageAndFrameWork;
        this.projectDescription = projectDescription;
        this.link = link;
        this.cssFilter = cssFilter;
    }
    return Portfolio;
}());



/***/ }),

/***/ "./src/app/portfolio/project-card.component.html":
/*!*******************************************************!*\
  !*** ./src/app/portfolio/project-card.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"portfolio-wrap\">\n    <img src=\"assets/img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\n    <div class=\"portfolio-info\">\n      <h4><a href=\"#\"> {{'Web' + portfolio.portfolioId}}</a></h4>\n      <p>Web</p>\n      <div>\n        <a href=\"assets/img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n        <a href=\"#\" (click)=\"modifyPopupData(portfolio.portfolioId,'',portfolio.projectName,portfolio.projectDescription)\" class=\"link-details\" title=\"More Details\" data-toggle=\"modal\" data-target=\"#myprojectModal\"><i class=\"ion ion-android-open\"></i></a>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"project-des\">\n    <p><b>Project Name:</b> {{portfolio.projectName}} </p>\n    <p><b>Language And Framework:</b> {{languageAndFrameWork}} \n      <span *ngFor=\"let lang of portfolio.languageAndFrameWork; let i=index;\">\n        <span>\n          {{lang}} <span *ngIf=\"i != portfolio.languageAndFrameWork.length-1\">, </span>\n        </span>\n      </span>\n    </p>\n  </div>\n"

/***/ }),

/***/ "./src/app/portfolio/project-card.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/portfolio/project-card.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ "./src/app/portfolio/portfolio.ts");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice */ "./src/app/dataservice.ts");






var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.portfoliosComponent = new _portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]();
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    ProjectCardComponent.prototype.setProject = function (portfolioId) {
        console.log(portfolioId);
        localStorage.setItem("portfolio", JSON.stringify({ "portfolio": this.portfoliosComponent.portfolios[portfolioId] }));
        this.router.navigate(["project-details"]);
    };
    ProjectCardComponent.prototype.modifyPopupData = function (serviceId, imageUrl, shotDesc, serviceDesc) {
        this.dataService.modifyData(serviceId, imageUrl, shotDesc, serviceDesc);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _portfolio__WEBPACK_IMPORTED_MODULE_2__["Portfolio"])
    ], ProjectCardComponent.prototype, "portfolio", void 0);
    ProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-card',
            template: __webpack_require__(/*! ./project-card.component.html */ "./src/app/portfolio/project-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _dataservice__WEBPACK_IMPORTED_MODULE_5__["Dataservice"]])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/project-detail.component.html":
/*!*********************************************************!*\
  !*** ./src/app/portfolio/project-detail.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  project-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/portfolio/project-detail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/portfolio/project-detail.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent() {
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/portfolio/project-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/project.ts":
/*!**************************************!*\
  !*** ./src/app/portfolio/project.ts ***!
  \**************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(projectId, projectName, languageAndFramework, description, projectLink) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.languageAndFramework = languageAndFramework;
        this.description = description;
        this.projectLink = projectLink;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/services/service-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/services/service-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"box\">\n    <div class=\"icon\"><img src=\"{{service.iconImage}}\" width=\"60\"></div>\n    <!-- <div class=\"icon\"><i [class]=\"service.icon\" [ngStyle]=\"{'color': service.styleColor }\"></i></div> -->\n    <h4 class=\"title\"><a (click)=\"modifyPopupData(service.serviceId,service.serviceImage,service.serviceName,service.serviceDetail)\" href=\"assets/img/portfolio/web3.jpg\" class=\"link-preview\" data-toggle=\"modal\" data-target=\"#myprojectModal\" >{{service.serviceName}}</a></h4>\n    <p class=\"description\">{{service.serviceDescription}}</p>    \n  </div>\n"

/***/ }),

/***/ "./src/app/services/service-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/services/service-card.component.ts ***!
  \****************************************************/
/*! exports provided: ServiceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCardComponent", function() { return ServiceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/services/service.ts");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice */ "./src/app/dataservice.ts");






var ServiceCardComponent = /** @class */ (function () {
    function ServiceCardComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.servicesComponent = new _services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"]();
    }
    ServiceCardComponent.prototype.ngOnInit = function () {
    };
    ServiceCardComponent.prototype.setService = function (serviceId) {
        console.log(serviceId);
        localStorage.setItem("service", JSON.stringify({ "service": this.servicesComponent.services[serviceId] }));
        this.router.navigate(["service-details"]);
    };
    ServiceCardComponent.prototype.modifyPopupData = function (serviceId, imageUrl, shortDesc, serviceDesc) {
        this.dataService.modifyData(serviceId, imageUrl, shortDesc, serviceDesc);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _service__WEBPACK_IMPORTED_MODULE_2__["Service"])
    ], ServiceCardComponent.prototype, "service", void 0);
    ServiceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-card',
            template: __webpack_require__(/*! ./service-card.component.html */ "./src/app/services/service-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _dataservice__WEBPACK_IMPORTED_MODULE_5__["Dataservice"]])
    ], ServiceCardComponent);
    return ServiceCardComponent;
}());



/***/ }),

/***/ "./src/app/services/service.ts":
/*!*************************************!*\
  !*** ./src/app/services/service.ts ***!
  \*************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
var Service = /** @class */ (function () {
    function Service(serviceId, serviceName, serviceDescription, serviceDetail, link, cssClass, dataWowDelay, dataWowDuration, styleColor, icon, //icon
    serviceImage, iconImage) {
        if (iconImage === void 0) { iconImage = null; }
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.serviceDescription = serviceDescription;
        this.serviceDetail = serviceDetail;
        this.link = link;
        this.cssClass = cssClass;
        this.dataWowDelay = dataWowDelay;
        this.dataWowDuration = dataWowDuration;
        this.styleColor = styleColor;
        this.icon = icon;
        this.serviceImage = serviceImage;
        this.iconImage = iconImage;
    }
    return Service;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"services\" class=\"section-bg\">\n  <div class=\"container\">\n\n    <header class=\"section-header\">\n      <h3>{{title}}</h3>\n      <p>{{description}}</p>\n    </header>\n\n    <div class=\"row\">\n      <div [class]='service.cssClass' attr.data-wow-delay=\"{{dataWowDelay}}\" attr.data-wow-duration=\"{{dataWowDuration}}\" *ngFor=\"let service of services; let i = index\">\n        <app-service-card [service]=\"service\"></app-service-card>        \n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/services/service.ts");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.title = "Services";
        this.description = "NexTech UK is an IT company providing IT Solutions and Services";
        this.services = [
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](1, "Web Design & Development", "Responsive Design Content Management System ERP & Ecommerce Solution CRM Application Development", "Responsive Design Content Management System ERP & Ecommerce Solution CRM Application Development", "", "col-md-6 col-lg-5 offset-lg-1 wow bounceInUp", "0s", "1.4s", "#ff689b", "ion-ios-analytics-outline", "assets/img/rpa2.png", "assets/img/serviceImgs/web-design.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](2, "Apps Design & Development", "iPhone App Development iPhad App Development Android App Development Mobile App UI/UX Design", "NexTech UK specialize in the art of merging elegance with logical navigation structuring. We ensure that your website acts as store front of your company and optimizes the market potential of the website.", "", "col-md-6 col-lg-5 wow bounceInUp", "0s", "1.4s", "#e9bf06", "ion-ios-bookmarks-outline", "", "assets/img/serviceImgs/software-dev.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](3, "Custom Software Developpment!", "Small and Medium Enterprises Development Desktop Applications Real-Time Applications", "Graphic designs have the ability to attract the attention of the users resulting in more positive feedback and revisits. We carry the competency of merging creative ideas with the latest technology to develop outrageous solutions for you.", "", "col-md-6 col-lg-5 offset-lg-1 wow bounceInUp", "0.1s", "1.4s", "#3fcdc7", "ion-ios-paper-outline", "", "assets/img/serviceImgs/web-graphics.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](4, "Digital Marketing", "Branding  SEO  Services  Socal   Media  Marketing", "At NexTech UK software developers work as partners along with the clients and gain deep insights into their project requirements. They also provide support and maintenance of the introduced solution in an expert way.", "", "col-md-6 col-lg-5 wow bounceInUp", "0.1s", "1.4s", "#41cf2e", "ion-ios-speedometer-outline", "", "assets/img/serviceImgs/software-dev.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](5, "Robotics Process Automation", "Automated Web & Desktop solutions Business process flow implementation", "We offer highly tailored web development services for the business owners around the world. Our custom web solutions have the ability to streamline business processes and prove a cutting edge source for enhancing your business success.", "", "col-md-6 col-lg-5 offset-lg-1 wow bounceInUp", "0.2s", "1.4s", "#d6ff22", "ion-ios-world-outline", "", "assets/img/serviceImgs/robotic-automation.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](6, "Fron End Development", "Angular JS, React JS, VUE JS JaveScript/jQuery ERP and ecommerce solution HTML5/CSS3/Bootsrap", "We follow a very comprehensive and vibrant model of SEO and SMM in order to move systematically and reach the desired results. SEO is an iterative and continuous process of building and maintaining pathways from your website to Internet users.", "", "col-md-6 col-lg-5 wow bounceInUp", "0.2s", "1.4s", "#4680ff", "ion-ios-clock-outline", "", "assets/img/serviceImgs/seo-img.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](7, "Serch Engine Optimization", "Extensive Reporting Longer Lasting Results Quality links", "Extensive Reporting Longer Lasting Results Quality links", "", "col-md-6 col-lg-5 offset-lg-1 wow bounceInUp", "", "", "", "", "", "assets/img/serviceImgs/seo-img.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](8, "IT Support staff services", "Infrastructure maintenance Service availability per SLA/SLOs Application Deployment & Release Management System Backups & Disaster Recovery", "We follow a very comprehensive and vibrant model of SEO and SMM in order to move systematically and reach the desired results. SEO is an iterative and continuous process of building and maintaining pathways from your website to Internet users.", "", "col-md-6 col-lg-5 wow bounceInUp", "0.2s", "1.4s", "#4680ff", "ion-ios-clock-outline", "", "assets/img/serviceImgs/seo-img.png"),
            new _service__WEBPACK_IMPORTED_MODULE_2__["Service"](9, "Resource Hiring", "Graphics Designer Software Developer(Front-end & Back-end) SEO Engineer IT Support", "Descrippption here with separate tab", "", "col-md-6 col-lg-5 offset-lg-1 wow bounceInUp", "", "", "", "", "", "assets/img/serviceImgs/seo-img.png")
        ];
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/technologies/technologies-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/technologies/technologies-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"client-logo\">\n    <a (click)=\"modifyPopupData(technology.technologyId, technology.technologyImage, technology.technologyName,technology.technologyDetail)\" href=\"{{technology.technologyImage}}\" class=\"link-preview\" data-toggle=\"modal\" data-target=\"#myprojectModal\">\n      <img src=\"{{technology.technologyImage}}\" class=\"img-fluid\" alt=\"\">\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/technologies/technologies-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/technologies/technologies-card.component.ts ***!
  \*************************************************************/
/*! exports provided: TechnologiesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesCardComponent", function() { return TechnologiesCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _technology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technology */ "./src/app/technologies/technology.ts");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataservice */ "./src/app/dataservice.ts");




var TechnologiesCardComponent = /** @class */ (function () {
    function TechnologiesCardComponent(dataService) {
        this.dataService = dataService;
    }
    TechnologiesCardComponent.prototype.ngOnInit = function () {
    };
    TechnologiesCardComponent.prototype.modifyPopupData = function (serviceId, imageUrl, shortDesc, detailDesc) {
        this.dataService.modifyData(serviceId, imageUrl, shortDesc, detailDesc);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _technology__WEBPACK_IMPORTED_MODULE_2__["Technology"])
    ], TechnologiesCardComponent.prototype, "technology", void 0);
    TechnologiesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technologies-card',
            template: __webpack_require__(/*! ./technologies-card.component.html */ "./src/app/technologies/technologies-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice__WEBPACK_IMPORTED_MODULE_3__["Dataservice"]])
    ], TechnologiesCardComponent);
    return TechnologiesCardComponent;
}());



/***/ }),

/***/ "./src/app/technologies/technologies.component.html":
/*!**********************************************************!*\
  !*** ./src/app/technologies/technologies.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"clients\" class=\"section-bg\">\n\n  <div class=\"container\">\n\n    <div class=\"section-header\">\n      <h3>{{title}}</h3>\n      <p>{{description}}</p>\n    </div>\n\n    <div class=\"row no-gutters clients-wrap clearfix wow fadeInUp\"> \n      <div class=\"col-lg-3 col-md-4 col-xs-6\" *ngFor=\"let technology of technologies; let i = index\">\n          <app-technologies-card [technology]=\"technology\"></app-technologies-card>\n      </div>\n    </div>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/technologies/technologies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/technologies/technologies.component.ts ***!
  \********************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice */ "./src/app/dataservice.ts");
/* harmony import */ var _technology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology */ "./src/app/technologies/technology.ts");




var TechnologiesComponent = /** @class */ (function () {
    function TechnologiesComponent(dataService) {
        this.dataService = dataService;
        this.title = "Technologies";
        this.description = "We employ highly the following dynamic technologies. These technologies have played a leading role in shaping flexible solutions to our valued customers.";
        this.technologies = [
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](0, "Automation Anywhere", "Automation Anywhere", "Next Technologes", "assets/img/clients/AA logo.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](0, "Adobe XD", "Adobe XD", "Adobe XD Detail", "assets/img/clients/adobe XD logo.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](0, "Adobe Dreamweaver", "Adobe Dreamweaver", "Adobe Dreamweaver Detail", "assets/img/clients/Adobe_Dreamweaver_CS5 logo.jpg"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](0, "Angular", "Angular", "Angular Detail", "assets/img/clients/angular.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](0, "BluePrism", "BluePrism", "BluePrism Detail", "assets/img/clients/BP logo.jpg"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](1, "Java", "Java", "Java Detail", "assets/img/clients/client-1.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](2, "SQL", "SQL Server", "SQL Server Detail", "assets/img/clients/client-2.png"),
            // new Technology (3,"Ionic","Ionic", "Ionic Detail","assets/img/clients/client-3.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](4, "JavaScript", "JavaScript", "JavaScript Detail", "assets/img/clients/client-4.png"),
            // new Technology (5,"iPhone","iPhone", "iPhone Detail","assets/img/clients/client-5.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](6, "DotNet", "DotNet", ".NET Framework", "assets/img/clients/client-6.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](7, "Andriod", "Andriod", "Andriod Detail", "assets/img/clients/client-7.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](8, "CSharp", "CSharp", "C# Detail", "assets/img/clients/client-8.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](9, "Hibernate", "Hibernate", "Hibernate Detail", "assets/img/clients/client-9.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](10, "Node", "Node", "Node Detail", "assets/img/clients/client-10.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](11, "SharePoint", "SharePoint", "SharePoint Detail", "assets/img/clients/client-11.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](12, "XML", "XML", "XML Detail", "assets/img/clients/client-12.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](12, "Illustrator", "Illustrator", "Illustrator Detail", "assets/img/clients/Illustrator logo.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](12, "Photoshop", "Photoshop", "Photoshop Detail", "assets/img/clients/Photoshop logo.jpg"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](12, "Python", "Python", "Python Detail", "assets/img/clients/Python logo.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](12, "UI Path", "UI Path", "UI Path Detail", "assets/img/clients/UI Path logo.png"),
            new _technology__WEBPACK_IMPORTED_MODULE_3__["Technology"](12, "XD", "XD", "XD Detail", "assets/img/clients/XD logo.png")
        ];
    }
    TechnologiesComponent.prototype.ngOnInit = function () {
    };
    TechnologiesComponent.prototype.modifyPopupData = function (technologyId, imageUrl, shortDesc, detailDesc) {
        this.dataService.modifyData(technologyId, imageUrl, shortDesc, detailDesc);
    };
    TechnologiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technologies',
            template: __webpack_require__(/*! ./technologies.component.html */ "./src/app/technologies/technologies.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice__WEBPACK_IMPORTED_MODULE_2__["Dataservice"]])
    ], TechnologiesComponent);
    return TechnologiesComponent;
}());



/***/ }),

/***/ "./src/app/technologies/technology.ts":
/*!********************************************!*\
  !*** ./src/app/technologies/technology.ts ***!
  \********************************************/
/*! exports provided: Technology */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Technology", function() { return Technology; });
var Technology = /** @class */ (function () {
    function Technology(technologyId, technologyName, technologyDescription, technologyDetail, technologyImage) {
        this.technologyId = technologyId;
        this.technologyName = technologyName;
        this.technologyDescription = technologyDescription;
        this.technologyDetail = technologyDetail;
        this.technologyImage = technologyImage;
    }
    return Technology;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dir Technologies\WebDevelopment\Projects\NextechUK\NextexhUK\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map