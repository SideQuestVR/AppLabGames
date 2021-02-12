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
        console.log(this.app);
    }
}
AppLabGameComponent.ɵfac = function AppLabGameComponent_Factory(t) { return new (t || AppLabGameComponent)(); };
AppLabGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLabGameComponent, selectors: [["app-app-lab-game"]], inputs: { app: "app" }, decls: 13, vars: 16, consts: [[1, "z-depth-5", 3, "mouseenter", "mouseleave"], ["target", "_blank", 1, "relative", 3, "href"], [1, "home-app-image"], [1, "home-community-img", 3, "ngClass", "ngStyle"], [1, "bottom-stats-container", "community-small-text", 3, "ngClass"], [1, "community-name-text", "truncate"], [1, "clearfix"], [1, "bottom-stats"]], template: function AppLabGameComponent_Template(rf, ctx) { if (rf & 1) {
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


function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SideQuest App Lab Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-app-lab-game", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("app", app_r1);
} }
class AppComponent {
    constructor() {
        this.title = 'AppLab Games';
        this.apps = [];
        this.loadApps();
    }
    loadApps() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const resp = yield fetch('https://api.sidequestvr.com/v2/apps?limit=200&is_app_lab=true&has_oculus_url=true&sortOn=hot_sort_rating');
                this.apps = yield resp.json();
            }
            catch (e) {
                alert(e);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "col s12 m4 relative", 4, "ngFor", "ngForOf"], [1, "col", "s12", "m4", "relative"], [1, "white-text", "title-spacing", "center-align"], [1, "white-text", "center-align"], ["href", "https://sidequestvr.com"], [3, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.apps);
    } }, styles: [".title-spacing[_ngcontent-%COMP%] {\n  margin-top: 3em;\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNwYWNpbmd7XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _app_lab_game_app_lab_game_component__WEBPACK_IMPORTED_MODULE_2__["AppLabGameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _app_lab_game_app_lab_game_component__WEBPACK_IMPORTED_MODULE_2__["AppLabGameComponent"]], []);


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