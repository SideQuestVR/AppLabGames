(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\autoc\Documents\workspace\AppLabGames\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Lp1O":
/*!********************************************************!*\
  !*** ./src/app/app-lab-game/app-lab-game.component.ts ***!
  \********************************************************/
/*! exports provided: AppLabGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLabGameComponent", function() { return AppLabGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "hovered": a0 }; };
const _c1 = function (a0) { return { "background-image": a0 }; };
class AppLabGameComponent {
    constructor() {
        this.isHovered = false;
    }
    ngOnInit() {
    }
}
AppLabGameComponent.ɵfac = function AppLabGameComponent_Factory(t) { return new (t || AppLabGameComponent)(); };
AppLabGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLabGameComponent, selectors: [["app-app-lab-game"]], inputs: { app: "app" }, decls: 13, vars: 16, consts: [[1, "z-depth-5", 3, "mouseenter", "mouseleave"], ["target", "_top", 1, "relative", 3, "href"], [1, "home-app-image"], [1, "home-community-img", 3, "ngClass", "ngStyle"], [1, "bottom-stats-container", "community-small-text", 3, "ngClass"], [1, "community-name-text", "truncate"], [1, "clearfix"], [1, "bottom-stats"]], template: function AppLabGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppLabGameComponent_Template_div_mouseenter_0_listener() { return ctx.isHovered = true; })("mouseleave", function AppLabGameComponent_Template_div_mouseleave_0_listener() { return ctx.isHovered = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.app.external_listing_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isHovered))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, "url('" + ctx.app.image_url + "')"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.isHovered));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.app.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx.app.sort_rating || 0, "1.2-2"), " / 5.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.app.number_of_rating || 0, " Reviews ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".small-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.bottom-stats[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 1em;\n  margin-left: 16px;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: #7289DA;\n}\n\n.bottom-stats-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.community-small-text[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(180deg, rgba(17, 17, 36, 0) 0%, #1A1D3C 61.17%);\n}\n\n.community-name-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 44px;\n  color: #FFFFFF;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.community-name-text-main[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: white;\n  background: #1a1d3c;\n  padding: 10px;\n  height: 170px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.community-name-text-main.hovered[_ngcontent-%COMP%] {\n  background: linear-gradient(85.39deg, #1A1D3C 0%, #E51253 100%);\n}\n\n.community-small-text.hovered[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, rgba(17, 17, 36, 0) 0%, #E51253 70%);\n}\n\n.community-small-text.hovered[_ngcontent-%COMP%]   .bottom-stats[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.home-community-img[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 100%;\n  padding-top: 80%;\n  transition: transform 2000ms;\n  transform: scale(1);\n  background-position: center center;\n}\n\n.home-app-image[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  background-color: #100e11;\n  transition: background-size 350ms ease-in;\n  -moz-transition: background-size 350ms ease-in;\n  -o-transition: background-size 350ms ease-in;\n  -webkit-transition: background-size 350ms ease-in;\n  margin-bottom: 1rem;\n}\n\n.home-community-img.hovered[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC1sYWItZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwyRUFBQTtBQUlGOztBQUZBO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUtGOztBQUhBO0VBQ0UsK0RBQUE7QUFNRjs7QUFIQTtFQUNFLHdFQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7O0FBSkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFDQSw0Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFMQTtFQUNFLHFCQUFBO0FBUUYiLCJmaWxlIjoiYXBwLWxhYi1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsLXRleHR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uYm90dG9tLXN0YXRze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGNvbG9yOiAjNzI4OURBO1xyXG59XHJcbi5ib3R0b20tc3RhdHMtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29tbXVuaXR5LXNtYWxsLXRleHR7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsIDE3LCAzNiwgMCkgMCUsICMxQTFEM0MgNjEuMTclKTtcclxufVxyXG4uY29tbXVuaXR5LW5hbWUtdGV4dHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uY29tbXVuaXR5LW5hbWUtdGV4dC1tYWlue1xyXG4gIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMxYTFkM2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5jb21tdW5pdHktbmFtZS10ZXh0LW1haW4uaG92ZXJlZHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODUuMzlkZWcsICMxQTFEM0MgMCUsICNFNTEyNTMgMTAwJSk7XHJcbn1cclxuXHJcbi5jb21tdW5pdHktc21hbGwtdGV4dC5ob3ZlcmVke1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsIDE3LCAzNiwgMCkgMCUsICNFNTEyNTMgNzAlKTtcclxufVxyXG4uY29tbXVuaXR5LXNtYWxsLXRleHQuaG92ZXJlZCAuYm90dG9tLXN0YXRze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWUtY29tbXVuaXR5LWltZ3tcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDgwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwMG1zO1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcbi5ob21lLWFwcC1pbWFnZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDBlMTE7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDM1MG1zIGVhc2UtaW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMzUwbXMgZWFzZS1pbjtcclxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMzUwbXMgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAzNTBtcyBlYXNlLWluO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5ob21lLWNvbW11bml0eS1pbWcuaG92ZXJlZHtcclxuICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 12);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 13);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "App Lab Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-app-lab-game", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("app", app_r6);
} }
function AppComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " <iframe src=\"https://applab.games/?embed=1\" frameborder=\"0\" class=\"iframe\" width=\"100%\" height=\"500px\"></iframe> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Embed on Your Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_13_div_3_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isEmbed);
} }
function AppComponent_app_footer_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-footer");
} }
const _c0 = function (a0) { return { "white-text": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'AppLab Games';
        this.apps = [];
        const url = new URL(window.location.href);
        this.isEmbed = !!url.searchParams.get('embed');
        this.isLight = !!url.searchParams.get('light');
        this.loadApps();
    }
    loadApps() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const resp = yield fetch('https://api.sidequestvr.com/v2/apps?limit=500&is_app_lab=true&has_oculus_url=true&sortOn=hot_sort_rating');
                this.apps = yield resp.json();
            }
            catch (e) {
                alert(e);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 11, consts: [["class", "background", 4, "ngIf"], ["class", "background-color", 4, "ngIf"], [1, "container"], ["class", "center-align", 4, "ngIf"], [1, "row"], ["class", "col s12 m4 relative", 4, "ngFor", "ngForOf"], [1, "center-align", "more-spacing"], ["href", "https://sidequestvr.com/suggest-app", "target", "_blank", 1, "suggest-link", "btn", "btn-flat", "pink", "white-text"], [1, "center-align", "title-spacing", "white-text", 3, "ngClass"], ["href", "https://sidequestvr.com", "target", "_top"], [1, "responsive-img", "logo-max-width", 3, "src"], [4, "ngIf"], [1, "background"], [1, "background-color"], [1, "center-align"], ["src", "../../assets/images/logo.png", 1, "title-spacing", "responsive-img", "logo-max-width"], [1, "white-text", "sub-title-spacing"], [1, "col", "s12", "m4", "relative"], [3, "app"], [1, "white-text", "title-spacing"], ["class", "embed-code", 4, "ngIf"], [1, "embed-code"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_3_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Suggest An App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_div_13_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_app_footer_14_Template, 1, 0, "app-footer", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEmbed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmbed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEmbed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.apps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, !ctx.isLight));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEmbed ? "powered with love by" : "more games & apps on", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.isLight ? "../../assets/images/logo-black.png" : "../../assets/images/logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEmbed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEmbed);
    } }, styles: [".title-spacing[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n\n.sub-title-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n\n.more-spacing[_ngcontent-%COMP%] {\n  margin-top: 4em;\n  margin-bottom: 0em;\n}\n\n.background[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, rgba(20, 20, 43, 0.4) 0%, rgba(20, 20, 43, 0.4) 100%) left center/cover no-repeat, url(\"https://sidequestvr.com/assets/images/Onboard.jpg\") right center/cover no-repeat;\n  background-attachment: fixed;\n}\n\n.background-color[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}\n\n.embed-code[_ngcontent-%COMP%] {\n  background: #36393f;\n  border-radius: 5px;\n  padding: 40px;\n  color: white;\n}\n\n.less-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.suggest-link[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhNQUFBO0VBQ0EsNEJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFRRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtc3BhY2luZ3tcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLnN1Yi10aXRsZS1zcGFjaW5ne1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG4ubW9yZS1zcGFjaW5ne1xyXG4gIG1hcmdpbi10b3A6IDRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6LTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyMCwgMjAsIDQzLCAwLjQpIDAlLCByZ2JhKDIwLCAyMCwgNDMsIDAuNCkgMTAwJSkgbGVmdCBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQsIHVybCgnaHR0cHM6Ly9zaWRlcXVlc3R2ci5jb20vYXNzZXRzL2ltYWdlcy9PbmJvYXJkLmpwZycpIHJpZ2h0IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4Oi0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZW1iZWQtY29kZXtcclxuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGVzcy1tYXJnaW4tYm90dG9te1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uc3VnZ2VzdC1saW5re1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_lab_game_app_lab_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-lab-game/app-lab-game.component */ "Lp1O");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _app_lab_game_app_lab_game_component__WEBPACK_IMPORTED_MODULE_2__["AppLabGameComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _app_lab_game_app_lab_game_component__WEBPACK_IMPORTED_MODULE_2__["AppLabGameComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], []);


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
    openLink(url) {
        window.location.href = url;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 76, vars: 0, consts: [[1, "footer-lining"], [1, "footer-bottom"], [1, "row", "no-margin"], [1, "col", "s6", "right-align", "padding"], ["href", "https://www.khronos.org/"], ["src", "../../assets/images/khronos.png", 1, "responsive-img"], [1, "col", "s6", "padding"], ["href", "https://www.thevrara.com/"], ["src", "../../assets/images/vrar.png", 1, "responsive-img"], [1, "footer-container"], [1, "padding", "white-text"], [1, "row"], [1, "col", "s12", "m6", "extra-padding-right"], ["src", "../../assets/images/logo.png", 1, "responsive-img", "logo-max-width"], [1, "col", "s12", "m6", "extra-padding-left"], [1, "col", "s6"], [1, "title-under"], [1, "col", "s12", "no-padding"], [1, "footer-item"], ["href", "https://sidequestvr.com"], ["href", "https://sidequestvr.com/setup-howto"], ["href", "https://sidequestvr.com/branding"], ["href", "https://sdq.st/devnews", "target", "_blank"], ["href", "https://sdq.st/roster", "target", "_blank"], ["href", "https://sdq.st/getpaid", "target", "_blank"], ["href", "https://sidequestvr.com/privacy"], [1, "col", "s12", "m6", "no-padding"], ["href", "https://sdq.st/discord", "target", "_blank"], ["src", "../../assets/images/Discord.svg", 1, "category-icon", "vertical-align"], ["href", "https://www.twitter.com/SideQuestVR", "target", "_blank"], ["src", "../../assets/images/Twitter.svg", 1, "category-icon", "vertical-align"], ["href", "https://www.reddit.com/r/sidequest", "target", "_blank"], ["src", "../../assets/images/Reddit.svg", 1, "category-icon", "vertical-align"], ["href", "https://www.patreon.com/SideQuestVR", "target", "_blank"], ["src", "../../assets/images/Patreon.svg", 1, "category-icon", "vertical-align"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SideQuest is a place to get more apps for your Oculus Quest, it is a completely safe way to enjoy some cutting edge content in VR and expand the capability of your standalone VR headset. We make it easier for users to access content that is not yet available on the Oculus Store and as a proving ground for developers to validate their content and kick start their communities. SideQuest is completely free for users and developers and always will be. We are committed to supporting the VR industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Proud members of the Khronos Group and The VR/AR Association.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Get SideQuest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Brand Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Developer Mailing List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Legends Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Play Games & Earn Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Follow Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Reddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Patreon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-container[_ngcontent-%COMP%] {\n  background: #1A1D3C;\n  padding-top: 6em;\n  padding-bottom: 6em;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  width: 100%;\n  background: #101227;\n}\n\n.footer-lining[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n  background: linear-gradient(90deg, #E51253 0%, #02E5EF 62.5%, #FF3ABC 100%);\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  margin-right: 15px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  width: 120px;\n}\n\n.footer-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.footer-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7289DA;\n}\n\n.footer-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.max-height[_ngcontent-%COMP%] {\n  max-height: 60px;\n  margin-left: 1em;\n}\n\n.logo-max-width[_ngcontent-%COMP%] {\n  max-width: 20em;\n}\n\n.extra-padding-right[_ngcontent-%COMP%] {\n  padding-right: 4em;\n}\n\n.extra-padding-left[_ngcontent-%COMP%] {\n  padding-left: 4em;\n}\n\n@media screen and (max-width: 912px) {\n  .extra-padding-right[_ngcontent-%COMP%] {\n    padding-right: 0.75rem;\n  }\n\n  .extra-padding-left[_ngcontent-%COMP%] {\n    padding-left: 0.75rem;\n  }\n}\n\n.title-under[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 5px;\n  background: #F00075;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyRUFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSwwQkFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0FBWUY7O0FBVkE7RUFDRTtJQUNFLHNCQUFBO0VBYUY7O0VBWEE7SUFDRSxxQkFBQTtFQWNGO0FBQ0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBY0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogIzFBMUQzQztcclxuICBwYWRkaW5nLXRvcDogNmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2ZW07XHJcbn1cclxuLmZvb3Rlci1ib3R0b217XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzEwMTIyNztcclxufVxyXG4uZm9vdGVyLWxpbmluZ3tcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRTUxMjUzIDAlLCAjMDJFNUVGIDYyLjUlLCAjRkYzQUJDIDEwMCUpO1xyXG59XHJcbi5jYXRlZ29yeS1pY29ue1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4ubG9nbyBpbWd7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLmZvb3Rlci1pdGVte1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvb3Rlci1pdGVtIGF7XHJcbiAgY29sb3I6ICM3Mjg5REE7XHJcbn1cclxuLmZvb3Rlci1pdGVtIGE6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLm1heC1oZWlnaHR7XHJcbiAgbWF4LWhlaWdodDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcbi5sb2dvLW1heC13aWR0aHtcclxuICBtYXgtd2lkdGg6IDIwZW07XHJcbn1cclxuLmV4dHJhLXBhZGRpbmctcmlnaHR7XHJcbiAgcGFkZGluZy1yaWdodDogNGVtO1xyXG59XHJcbi5leHRyYS1wYWRkaW5nLWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiA0ZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEycHgpIHtcclxuICAuZXh0cmEtcGFkZGluZy1yaWdodHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XHJcbiAgfVxyXG4gIC5leHRyYS1wYWRkaW5nLWxlZnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XHJcbiAgfVxyXG59XHJcbi50aXRsZS11bmRlcntcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjRjAwMDc1O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map