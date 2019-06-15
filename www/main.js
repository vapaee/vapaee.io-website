(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_root_root_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/root/root.page */ "./src/app/pages/root/root.page.ts");
/* harmony import */ var _pages_wp_wp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/wp/wp.page */ "./src/app/pages/wp/wp.page.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_trade_trade_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/trade/trade.page */ "./src/app/pages/trade/trade.page.ts");
/* harmony import */ var _pages_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tokens/tokens.page */ "./src/app/pages/tokens/tokens.page.ts");
/* harmony import */ var _pages_account_account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/account/account.page */ "./src/app/pages/account/account.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/pages/not-found/not-found.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', data: { state: "root" }, redirectTo: '/exchange/home', pathMatch: 'full' },
    { path: 'exchange', data: { state: "root" }, component: _pages_root_root_page__WEBPACK_IMPORTED_MODULE_2__["RootPage"],
        children: [
            { path: '', data: { state: "root" }, redirectTo: '/exchange/home', pathMatch: 'full' },
            { path: 'wp', data: { state: "wp" }, component: _pages_wp_wp_page__WEBPACK_IMPORTED_MODULE_3__["WPPage"] },
            { path: 'home', data: { state: "home" }, component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"] },
            { path: 'trade/:scope', data: { state: "trade" }, component: _pages_trade_trade_page__WEBPACK_IMPORTED_MODULE_5__["TradePage"] },
            { path: 'tokens', data: { state: "tokens" }, component: _pages_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_6__["TokensPage"], children: [
                    { path: ':symbol', data: { state: "edit" }, component: _pages_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_6__["TokensPage"] }
                ] },
            { path: 'account', data: { state: "guest" }, component: _pages_account_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"] },
            { path: 'account/:name', data: { state: "account" }, component: _pages_account_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"] }
        ]
    },
    { path: '**', data: { state: "404" }, component: _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_8__["NotFoundPage"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var _components_vpe_components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/vpe-components.service */ "./src/app/components/vpe-components.service.ts");
/* harmony import */ var _services_coingecko_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/coingecko.service */ "./src/app/services/coingecko.service.ts");
/* harmony import */ var _services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(app, components, coingecko, vapaee) {
        this.app = app;
        this.components = components;
        this.coingecko = coingecko;
        this.vapaee = vapaee;
        // @HostBinding('class.hola') deviceClass: boolean = true;
        this.class = 'box';
        this.app.init();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.onWindowResize.subscribe(function (d) {
            _this.components.windowHasResized(d);
        });
        this.onWindowsResize();
        this.coingecko.onUpdate.subscribe(function (p) {
            _this.vapaee.waitReady.then(function (_) {
                var prices = {};
                for (var curreny in p) {
                    var price = p[curreny];
                    var token = _this.vapaee.getTokenNow(curreny.toUpperCase());
                    if (token) {
                        prices[curreny] = {
                            price: price,
                            token: token
                        };
                    }
                }
                _this.components.setTelosPrices(prices);
            });
        });
        this.vapaee.addFiatToken({ symbol: "USD", appname: "US Dollar", precision: 4 });
        this.vapaee.addFiatToken({ symbol: "EUR", appname: "Euro", precision: 4 });
        this.vapaee.addFiatToken({ symbol: "BTC", appname: "Bitcoin", precision: 8 });
        this.vapaee.addFiatToken({ symbol: "EOS", appname: "EOS", precision: 4 });
        this.vapaee.addFiatToken({ symbol: "TLOS", appname: "Telos", precision: 4 });
        this.vapaee.onTokensReady.subscribe(function (tokens) {
            var tokenPrices = {};
            if (!_this.vapaee.scopes)
                return;
            for (var i in tokens) {
                if (_this.vapaee.scopes[tokens[i].scope]) {
                    tokenPrices[tokens[i].symbol] = {
                        price: _this.vapaee.scopes[tokens[i].scope].summary.price.toNumber(),
                        token: tokens[i]
                    };
                }
            }
            _this.components.setTokensPrices(tokenPrices);
        });
    };
    AppComponent.prototype.onWindowsResize = function () {
        this.app.onWindowsResize();
        this.class = this.app.device.class;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowsResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: ['display: block;']
        }),
        __metadata("design:paramtypes", [_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _components_vpe_components_service__WEBPACK_IMPORTED_MODULE_2__["VpeComponentsService"],
            _services_coingecko_service__WEBPACK_IMPORTED_MODULE_3__["CoingeckoService"],
            _services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__["VapaeeService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/common/common.module */ "./src/app/services/common/common.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
/* harmony import */ var _services_common_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var _services_scatter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _services_vapaee_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var _services_coingecko_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/coingecko.service */ "./src/app/services/coingecko.service.ts");
/* harmony import */ var _components_vpe_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/vpe-components.module */ "./src/app/components/vpe-components.module.ts");
/* harmony import */ var _pages_wp_wp_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/wp/wp.page */ "./src/app/pages/wp/wp.page.ts");
/* harmony import */ var _pages_root_root_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/root/root.page */ "./src/app/pages/root/root.page.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_trade_trade_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/trade/trade.page */ "./src/app/pages/trade/trade.page.ts");
/* harmony import */ var _pages_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/tokens/tokens.page */ "./src/app/pages/tokens/tokens.page.ts");
/* harmony import */ var _pages_account_account_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/account/account.page */ "./src/app/pages/account/account.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/pages/not-found/not-found.page.ts");
/* harmony import */ var _pages_coming_soon_coming_soon_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/coming-soon/coming-soon.page */ "./src/app/pages/coming-soon/coming-soon.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_root_root_page__WEBPACK_IMPORTED_MODULE_15__["RootPage"],
                _pages_wp_wp_page__WEBPACK_IMPORTED_MODULE_14__["WPPage"],
                _pages_home_home_page__WEBPACK_IMPORTED_MODULE_16__["HomePage"],
                _pages_trade_trade_page__WEBPACK_IMPORTED_MODULE_17__["TradePage"],
                _pages_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_18__["TokensPage"],
                _pages_account_account_page__WEBPACK_IMPORTED_MODULE_19__["AccountPage"],
                _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_20__["NotFoundPage"],
                _pages_coming_soon_coming_soon_page__WEBPACK_IMPORTED_MODULE_21__["ComingSoonPage"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _services_common_app_service__WEBPACK_IMPORTED_MODULE_9__["LoadingOverall"],
            ],
            entryComponents: [
                _services_common_app_service__WEBPACK_IMPORTED_MODULE_9__["LoadingOverall"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _services_common_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonServicesModule"],
                _components_vpe_components_module__WEBPACK_IMPORTED_MODULE_13__["VpeComponentsModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
                _services_scatter_service__WEBPACK_IMPORTED_MODULE_10__["ScatterService"],
                _services_vapaee_service__WEBPACK_IMPORTED_MODULE_11__["VapaeeService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
                _services_coingecko_service__WEBPACK_IMPORTED_MODULE_12__["CoingeckoService"],
                _services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_8__["EosioTokenMathService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/eosio-account/eosio-account.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/eosio-account/eosio-account.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-dark mb-3\">\n    <div class=\"card-header\">\n        <identicon-comp [value]=\"account.account_name\"></identicon-comp>\n        <div class=\"pull-right text-right\">\n            <div class=\"text-xl\">{{account.account_name}}</div>\n            <!--div class=\"text-xl\" [hidden]=\"!account.dummie\">\n                <div class=\"input-group col-sm-12\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"account.account_name\" (input)=\"account.account_name = $event.target.value\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"searchBtn()\">search</button>\n                    </div>\n                </div>                \n            </div-->\n            <div class=\"text-md nowrap\">total balance:\n                <span class=\"text-lg color-green\">{{account.total_balance}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"text-lg text-center\">Balance Breakdown</div>\n                <table class=\"table right-aligned margin-top\">\n                    <tbody>\n                        <tr><td>Available:</td><td>{{account.core_liquid_balance}}</td></tr>\n                        <tr><td>Refunding:</td><td>{{account.refund_request.total}}</td></tr>\n                        <tr><td>CPU Staked:</td><td>{{account.total_resources.cpu_weight}}</td></tr>\n                        <tr><td>NET Staked:</td><td>{{account.total_resources.net_weight}}</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"col\">\n                <div class=\"text-lg text-center\">Resources</div>\n                <div class=\"text-md margin-top\">RAM <span class=\"text-xs color-grey\">{{account.ram_limit.percentStr}} available</span></div>\n                <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                        role=\"progressbar\" [ngStyle]=\"{'width': account.ram_limit.percentStr}\"></div>\n                </div>\n                <div class=\"text-sm text-center\">RAM used - {{account.ram_limit.used}} Bytes / {{account.ram_limit.max}} Bytes</div>\n                <div class=\"text-md margin-top\">NET <span class=\"text-xs color-grey\">{{account.net_limit.percentStr}} available</span></div>\n                <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                        role=\"progressbar\" [ngStyle]=\"{'width': account.net_limit.percentStr}\"></div>\n                </div>\n                <div class=\"text-sm text-center\">NET used - {{account.net_limit.used}} Bytes / {{account.net_limit.max}} Bytes</div>\n                <div class=\"text-md margin-top\">CPU <span class=\"text-xs color-grey\">{{account.cpu_limit.percentStr}} available</span></div>\n                <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                        role=\"progressbar\" [ngStyle]=\"{'width': account.cpu_limit.percentStr}\"></div>\n                </div>\n                <div class=\"text-sm text-center\">CPU used - {{account.cpu_limit.used}} µs / {{account.cpu_limit.max}} µs</div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- \n<div class=\"text-left margin-top-xxxl\">\n    <pre>{{account|json}}</pre>\n</div>\n-->"

/***/ }),

/***/ "./src/app/components/eosio-account/eosio-account.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/eosio-account/eosio-account.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/eosio-account/eosio-account.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/eosio-account/eosio-account.component.ts ***!
  \*********************************************************************/
/*! exports provided: EosioAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EosioAccountComponent", function() { return EosioAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EosioAccountComponent = /** @class */ (function () {
    /*
    @Output() search: EventEmitter<string> = new EventEmitter<string>();
    searchBtn() {
        console.log("searchBtn() this.account.account_name", this.account.account_name);
        this.search.emit(this.account.account_name);
    }
    */
    function EosioAccountComponent(tokenMath) {
        this.tokenMath = tokenMath;
        this.symbol = "EOS";
    }
    EosioAccountComponent.prototype.extractNumber = function (balance) {
        if (typeof balance != "string") {
            // console.log("extractNumber() " , balance);
            return 0;
        }
        return parseFloat(balance.split(" ")[0]);
    };
    EosioAccountComponent.prototype.add = function (balance1, balance2) {
        // console.log("add(",balance1, balance2, ")");
        var v1 = this.extractNumber(balance1), v2 = this.extractNumber(balance2);
        var tot = (v1 + v2) + "";
        if (tot.indexOf(".") != -1) {
            tot = (tot + "0000").substr(0, tot.length + 4 - tot.indexOf("."));
        }
        else {
            tot += ".0000";
        }
        tot += " " + this.symbol;
        // console.log("add(",balance1, balance2, ") --> ", tot);
        return tot;
    };
    EosioAccountComponent.prototype.calculateTotalBalance = function (account) {
        /*
        var liquid = this.extractNumber(account.core_liquid_balance);
        var refund_net = this.extractNumber(account.refund_request.net_amount);
        var refund_cpu = this.extractNumber(account.refund_request.cpu_amount);
        var self_cpu = this.extractNumber(account.self_delegated_bandwidth.cpu_weight);
        var self_net = this.extractNumber(account.self_delegated_bandwidth.net_weight);
        // console.log("TOTAL:", liquid, refund_net, refund_cpu, self_cpu, self_net);
        return liquid + refund_net + refund_cpu + self_cpu + self_net;
        */
        return this.tokenMath.addAll([
            account.core_liquid_balance,
            account.refund_request.net_amount,
            account.refund_request.cpu_amount,
            account.self_delegated_bandwidth.cpu_weight,
            account.self_delegated_bandwidth.net_weight
        ]);
    };
    EosioAccountComponent.prototype.calculateResourceLimit = function (limit) {
        limit = Object.assign({
            max: 0, used: 0
        }, limit);
        if (limit.max != 0) {
            limit.percent = 1 - (Math.min(limit.used, limit.max) / limit.max);
        }
        else {
            limit.percent = 0;
        }
        limit.percentStr = Math.round(limit.percent * 100) + "%";
        return limit;
    };
    EosioAccountComponent.prototype.ngOnChanges = function () {
        /*
        console.log("EosioAccountComponent.ngOnChanges()", this.account, typeof this.account);
        if (this.account && typeof this.account == "object" && typeof this.account.core_liquid_balance == "string") {
            this.account.total_balance = this.calculateTotalBalance(this.account);
            this.account.loading = false;
        } else {
            this.account.loading = true;
        }
        */
        if (!this.account)
            return;
        if (this.account.core_liquid_balance) {
            this.symbol = this.account.core_liquid_balance.split(" ")[1];
        }
        else {
            this.account.core_liquid_balance = "0.0000 " + this.symbol;
        }
        // --
        this.account.refund_request = Object.assign({
            total: "0.0000 " + this.symbol,
            net_amount: "0.0000 " + this.symbol,
            cpu_amount: "0.0000 " + this.symbol,
            request_time: "2018-11-18T18:09:53"
        }, this.account.refund_request);
        this.account.refund_request.total =
            this.add(this.account.refund_request.net_amount, this.account.refund_request.cpu_amount);
        // --
        this.account.self_delegated_bandwidth = Object.assign({
            total: "0.0000 " + this.symbol,
            net_weight: "0.0000 " + this.symbol,
            cpu_weight: "0.0000 " + this.symbol
        }, this.account.self_delegated_bandwidth);
        this.account.self_delegated_bandwidth.total =
            this.add(this.account.self_delegated_bandwidth.net_weight, this.account.self_delegated_bandwidth.cpu_weight);
        // --
        this.account.total_resources = Object.assign({
            net_weight: "0.0000 " + this.symbol,
            cpu_weight: "0.0000 " + this.symbol
        }, this.account.total_resources);
        this.account.total_balance = this.calculateTotalBalance(this.account);
        this.account.cpu_limit = this.calculateResourceLimit(this.account.cpu_limit);
        this.account.net_limit = this.calculateResourceLimit(this.account.net_limit);
        this.account.ram_limit = this.calculateResourceLimit({
            max: this.account.ram_quota, used: this.account.ram_usage
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EosioAccountComponent.prototype, "account", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EosioAccountComponent.prototype, "symbol", void 0);
    EosioAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eosio-account',
            template: __webpack_require__(/*! ./eosio-account.component.html */ "./src/app/components/eosio-account/eosio-account.component.html"),
            styles: [__webpack_require__(/*! ./eosio-account.component.scss */ "./src/app/components/eosio-account/eosio-account.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_1__["EosioTokenMathService"]])
    ], EosioAccountComponent);
    return EosioAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/identicon/identicon.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg #svg width=\"80\" height=\"80\">\n{{value}}\n</svg>"

/***/ }),

/***/ "./src/app/components/identicon/identicon.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  width: 90px;\n  height: 90px;\n  padding: 5px;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/components/identicon/identicon.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.ts ***!
  \*************************************************************/
/*! exports provided: IdenticonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdenticonComponent", function() { return IdenticonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdenticonComponent = /** @class */ (function () {
    function IdenticonComponent() {
    }
    IdenticonComponent.prototype.ngOnChanges = function () {
        if (typeof this.value == "string") {
            $(this.svg.nativeElement).attr("data-jdenticon-value", this.value);
            jdenticon();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svg'),
        __metadata("design:type", Object)
    ], IdenticonComponent.prototype, "svg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IdenticonComponent.prototype, "value", void 0);
    IdenticonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'identicon-comp',
            template: __webpack_require__(/*! ./identicon.component.html */ "./src/app/components/identicon/identicon.component.html"),
            styles: [__webpack_require__(/*! ./identicon.component.scss */ "./src/app/components/identicon/identicon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IdenticonComponent);
    return IdenticonComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-components.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/vpe-components.module.ts ***!
  \*****************************************************/
/*! exports provided: VpeComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeComponentsModule", function() { return VpeComponentsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _vpe_panel_chart_google_chart_service_google_charts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vpe-panel-chart/google-chart-service/google-charts.module */ "./src/app/components/vpe-panel-chart/google-chart-service/google-charts.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vpe-components.service */ "./src/app/components/vpe-components.service.ts");
/* harmony import */ var _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _eosio_account_eosio_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eosio-account/eosio-account.component */ "./src/app/components/eosio-account/eosio-account.component.ts");
/* harmony import */ var _vpe_panel_vpe_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vpe-panel/vpe-panel.component */ "./src/app/components/vpe-panel/vpe-panel.component.ts");
/* harmony import */ var _vpe_panel_orders_vpe_panel_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vpe-panel-orders/vpe-panel-orders.component */ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.ts");
/* harmony import */ var _vpe_panel_user_orders_vpe_panel_user_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vpe-panel-user-orders/vpe-panel-user-orders.component */ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.ts");
/* harmony import */ var _vpe_panel_tokens_card_deck_vpe_panel_tokens_card_deck_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component */ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.ts");
/* harmony import */ var _vpe_panel_history_vpe_panel_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vpe-panel-history/vpe-panel-history.component */ "./src/app/components/vpe-panel-history/vpe-panel-history.component.ts");
/* harmony import */ var _vpe_panel_wallet_vpe_panel_wallet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vpe-panel-wallet/vpe-panel-wallet.component */ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.ts");
/* harmony import */ var _vpe_panel_balance_breakdown_vpe_panel_balance_breakdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component */ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.ts");
/* harmony import */ var _vpe_panel_account_resources_vpe_panel_account_resources_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vpe-panel-account-resources/vpe-panel-account-resources.component */ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.ts");
/* harmony import */ var _vpe_panel_account_header_vpe_panel_account_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vpe-panel-account-header/vpe-panel-account-header.component */ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.ts");
/* harmony import */ var _vpe_panel_chart_vpe_panel_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vpe-panel-chart/vpe-panel-chart.component */ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.ts");
/* harmony import */ var _vpe_panel_tokens_vpe_panel_tokens_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vpe-panel-tokens/vpe-panel-tokens.component */ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.ts");
/* harmony import */ var _vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vpe-panel-order-editor/vpe-panel-order-editor.component */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.ts");
/* harmony import */ var _vpe_token_input_vpe_token_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vpe-token-input/vpe-token-input.component */ "./src/app/components/vpe-token-input/vpe-token-input.component.ts");
/* harmony import */ var _vpe_fiat_combobox_vpe_fiat_combobox_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vpe-fiat-combobox/vpe-fiat-combobox.component */ "./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.ts");
/* harmony import */ var _vpe_panel_activity_log_vpe_panel_activity_log_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vpe-panel-activity-log/vpe-panel-activity-log.component */ "./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// perfect scrollbar


var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};



















var VpeComponentsModule = /** @class */ (function () {
    function VpeComponentsModule() {
    }
    VpeComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_9__["IdenticonComponent"],
                _eosio_account_eosio_account_component__WEBPACK_IMPORTED_MODULE_10__["EosioAccountComponent"],
                _vpe_panel_vpe_panel_component__WEBPACK_IMPORTED_MODULE_11__["VpePanelComponent"],
                _vpe_panel_orders_vpe_panel_orders_component__WEBPACK_IMPORTED_MODULE_12__["VpePanelOrdersComponent"],
                _vpe_panel_user_orders_vpe_panel_user_orders_component__WEBPACK_IMPORTED_MODULE_13__["VpePanelUserOrdersComponent"],
                _vpe_panel_tokens_card_deck_vpe_panel_tokens_card_deck_component__WEBPACK_IMPORTED_MODULE_14__["VpePanelTokensCardDeckComponent"],
                _vpe_panel_history_vpe_panel_history_component__WEBPACK_IMPORTED_MODULE_15__["VpePanelHistoryComponent"],
                _vpe_panel_wallet_vpe_panel_wallet_component__WEBPACK_IMPORTED_MODULE_16__["VpePanelWalletComponent"],
                _vpe_panel_balance_breakdown_vpe_panel_balance_breakdown_component__WEBPACK_IMPORTED_MODULE_17__["VpePanelBalanceBreakdawnComponent"],
                _vpe_panel_account_resources_vpe_panel_account_resources_component__WEBPACK_IMPORTED_MODULE_18__["VpePanelAccountResourcesComponent"],
                _vpe_panel_account_header_vpe_panel_account_header_component__WEBPACK_IMPORTED_MODULE_19__["VpePanelAccountHeaderComponent"],
                _vpe_panel_chart_vpe_panel_chart_component__WEBPACK_IMPORTED_MODULE_20__["VpePanelChartComponent"],
                _vpe_panel_tokens_vpe_panel_tokens_component__WEBPACK_IMPORTED_MODULE_21__["VpePanelTokensComponent"],
                _vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_22__["VpePanelOrderEditorComponent"],
                _vpe_fiat_combobox_vpe_fiat_combobox_component__WEBPACK_IMPORTED_MODULE_24__["VpeFIatComboboxComponent"],
                _vpe_token_input_vpe_token_input_component__WEBPACK_IMPORTED_MODULE_23__["VpeTokenInputComponent"],
                _vpe_panel_activity_log_vpe_panel_activity_log_component__WEBPACK_IMPORTED_MODULE_25__["VpePanelActivityLogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"],
                _vpe_panel_chart_google_chart_service_google_charts_module__WEBPACK_IMPORTED_MODULE_4__["VapaeeGoogleChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
                _vpe_components_service__WEBPACK_IMPORTED_MODULE_8__["VpeComponentsService"],
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            exports: [
                _identicon_identicon_component__WEBPACK_IMPORTED_MODULE_9__["IdenticonComponent"],
                _eosio_account_eosio_account_component__WEBPACK_IMPORTED_MODULE_10__["EosioAccountComponent"],
                _vpe_panel_vpe_panel_component__WEBPACK_IMPORTED_MODULE_11__["VpePanelComponent"],
                _vpe_panel_orders_vpe_panel_orders_component__WEBPACK_IMPORTED_MODULE_12__["VpePanelOrdersComponent"],
                _vpe_panel_user_orders_vpe_panel_user_orders_component__WEBPACK_IMPORTED_MODULE_13__["VpePanelUserOrdersComponent"],
                _vpe_panel_tokens_card_deck_vpe_panel_tokens_card_deck_component__WEBPACK_IMPORTED_MODULE_14__["VpePanelTokensCardDeckComponent"],
                _vpe_panel_history_vpe_panel_history_component__WEBPACK_IMPORTED_MODULE_15__["VpePanelHistoryComponent"],
                _vpe_panel_wallet_vpe_panel_wallet_component__WEBPACK_IMPORTED_MODULE_16__["VpePanelWalletComponent"],
                _vpe_panel_balance_breakdown_vpe_panel_balance_breakdown_component__WEBPACK_IMPORTED_MODULE_17__["VpePanelBalanceBreakdawnComponent"],
                _vpe_panel_account_resources_vpe_panel_account_resources_component__WEBPACK_IMPORTED_MODULE_18__["VpePanelAccountResourcesComponent"],
                _vpe_panel_account_header_vpe_panel_account_header_component__WEBPACK_IMPORTED_MODULE_19__["VpePanelAccountHeaderComponent"],
                _vpe_panel_chart_vpe_panel_chart_component__WEBPACK_IMPORTED_MODULE_20__["VpePanelChartComponent"],
                _vpe_panel_tokens_vpe_panel_tokens_component__WEBPACK_IMPORTED_MODULE_21__["VpePanelTokensComponent"],
                _vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_22__["VpePanelOrderEditorComponent"],
                _vpe_fiat_combobox_vpe_fiat_combobox_component__WEBPACK_IMPORTED_MODULE_24__["VpeFIatComboboxComponent"],
                _vpe_token_input_vpe_token_input_component__WEBPACK_IMPORTED_MODULE_23__["VpeTokenInputComponent"],
                _vpe_panel_activity_log_vpe_panel_activity_log_component__WEBPACK_IMPORTED_MODULE_25__["VpePanelActivityLogComponent"]
            ]
        })
    ], VpeComponentsModule);
    return VpeComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/vpe-components.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/vpe-components.service.ts ***!
  \******************************************************/
/*! exports provided: VpeComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeComponentsService", function() { return VpeComponentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var VpeComponentsService = /** @class */ (function () {
    function VpeComponentsService(vapaee, cookie) {
        this.vapaee = vapaee;
        this.cookie = cookie;
        this.onResize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onPricesUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onTokenPricesUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Quesries -----------------------------------
        this.cacheTIC = {};
        this.prices = {};
        this.currencies = [];
        this.tokens_prices = {};
        this.current = this.cookie.get("fiat") || "usd";
    }
    Object.defineProperty(VpeComponentsService.prototype, "currency", {
        // Getters ------------------------------------
        get: function () {
            // var token = this.prices[this.current] ? this.prices[this.current].token : new 
            if (this.prices[this.current]) {
                return this.prices[this.current].token;
            }
            else {
                return { appname: "" };
            }
        },
        enumerable: true,
        configurable: true
    });
    // enter events ------------------------------
    VpeComponentsService.prototype.windowHasResized = function (e) {
        this.onResize.next(e);
    };
    VpeComponentsService.prototype.setTelosPrices = function (prices) {
        this.prices = prices;
        this.currencies = [];
        for (var i in this.prices) {
            var token = this.prices[i].token;
            this.currencies.push(token);
        }
        this.onPricesUpdate.next(this.prices);
        this.cacheTIC = {};
        // console.log("VpeComponentsService.setTelosPrices() ------------------->", this.prices);
    };
    VpeComponentsService.prototype.setTokensPrices = function (prices) {
        this.tokens_prices = prices;
        this.onTokenPricesUpdate.next(this.tokens_prices);
        this.cacheTIC = {};
        // console.log("VpeComponentsService.setTokensPrices() ------------------->", this.tokens_prices);
    };
    // Change State -----------------------------------
    VpeComponentsService.prototype.setCurrentCurrency = function (currency) {
        this.current = currency;
        this.cookie.set("fiat", currency);
        this.setTelosPrices(this.prices);
    };
    VpeComponentsService.prototype.getTelosInCurrentCurrency = function (value) {
        var asset;
        if (value == "")
            return new _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"]();
        if (value instanceof _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"]) {
            asset = value;
            value = asset.toString();
        }
        if (typeof value == "string") {
            if (this.cacheTIC[value])
                return this.cacheTIC[value];
            asset = new _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"](value, this.vapaee);
        }
        var cur_price = this.getCurrentPrice();
        var amount = asset.amount.toNumber();
        // console.log("*********** VpeComponentsService.getTelosInCurrentCurrency() amount", amount, "cur_price", cur_price);
        var number = amount * cur_price;
        asset = new _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"](number, this.getCurrentToken());
        this.cacheTIC[value] = asset;
        return asset;
    };
    VpeComponentsService.prototype.getTokenInCurrentCurrency = function (value) {
        var asset;
        var telos;
        if (value == "")
            return new _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"]();
        if (value instanceof _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"]) {
            asset = value;
            value = asset.toString();
        }
        if (typeof value == "string") {
            if (this.cacheTIC[value])
                return this.cacheTIC[value];
            asset = new _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"](value, this.vapaee);
        }
        if (asset.token == this.vapaee.telos) {
            telos = asset;
        }
        else {
            var cur_price = this.getTokenCurrentPrice(asset.token.symbol);
            var amount = asset.amount.toNumber();
            var number = amount * cur_price;
            telos = new _services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["Asset"](number, this.vapaee.telos);
        }
        asset = this.getTelosInCurrentCurrency(telos);
        this.cacheTIC[value] = asset;
        return asset;
    };
    // private auxiliar functions -----------------
    VpeComponentsService.prototype.getTokenCurrentPrice = function (symbol) {
        if (!this.tokens_prices[symbol]) {
            return 0;
        }
        else {
            return this.tokens_prices[symbol].price;
        }
    };
    VpeComponentsService.prototype.getCurrentPrice = function () {
        if (!this.prices[this.current]) {
            return 0;
        }
        else {
            return this.prices[this.current].price;
        }
    };
    VpeComponentsService.prototype.getCurrentToken = function () {
        if (!this.prices[this.current]) {
            return {
                symbol: "AUX",
                appname: "Auxiliar Token",
                fiat: true,
                verified: false
            };
        }
        else {
            return this.prices[this.current].token;
        }
    };
    VpeComponentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_vapaee_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], VpeComponentsService);
    return VpeComponentsService;
}());



/***/ }),

/***/ "./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-item dropdown\" ngbDropdown>\n    <a class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\" id=\"language\">\n        {{service.currency.appname}} ({{service.getTelosInCurrentCurrency(\"1.0000 TLOS\")}})\n        <span class=\"caret\"></span>\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"language\">\n        <span *ngFor=\"let currency of service.currencies\"\n            class=\"cursor-pointer dropdown-item\" (click)=\"service.setCurrentCurrency(currency.symbol ? currency.symbol.toLowerCase() : '');\">\n            {{currency.appname}} ({{currency.symbol}})\n        </span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VpeFIatComboboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeFIatComboboxComponent", function() { return VpeFIatComboboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VpeFIatComboboxComponent = /** @class */ (function () {
    function VpeFIatComboboxComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
    }
    VpeFIatComboboxComponent.prototype.ngOnChanges = function () {
    };
    VpeFIatComboboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-fiat-combobox',
            template: __webpack_require__(/*! ./vpe-fiat-combobox.component.html */ "./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.html"),
            styles: [__webpack_require__(/*! ./vpe-fiat-combobox.component.scss */ "./src/app/components/vpe-fiat-combobox/vpe-fiat-combobox.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpeFIatComboboxComponent);
    return VpeFIatComboboxComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-dark margin-top\">\n    <div class=\"card-header vpe-background-card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-auto col-padding-right\">\n                <identicon-comp [value]=\"current.name\"></identicon-comp>\n            </div>\n            <div class=\"col col-padding-left\">\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-scatter'}\">\n                    <div class=\"pull-right text-center\" [hidden]=\"!current.data.total_balance\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"scatter.connectApp()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.retry | titlecase}}\n                        </span><br>\n                        <span>{{local.string.noWallet}}</span>\n                        <br>\n                        <br>\n                        <vpe-fiat-combobox></vpe-fiat-combobox>\n                    </div>\n                </div>\n\n                <!-- current != guest - Wallet detected but not logged -->\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-logged'}\">\n                    <div class=\"pull-right text-right\"  [hidden]=\"!current.data.total_balance\">\n                        <span class=\"btn btn-sm btn-success\" (click)=\"vapaee.login()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.LoginWScOrSq}}\n                        </span>\n                        <!-- \n                        <br>\n                        <span>{{local.string.NotLogged}}</span>\n                        -->\n                        <br>\n                        <br>\n                        <vpe-fiat-combobox></vpe-fiat-combobox>         \n                    </div>\n                </div>\n\n\n                <div class=\"text-xl\">\n                    {{current.name}}\n                    <span [ngClass]=\"{'d-none':!vapaee.logged}\">\n                        <span class=\"btn btn-sm btn-primary margin-left\" (click)=\"vapaee.logout()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('logout') && !vapaee.feed.loading('log-state')\"></span> \n                            <span> {{local.string.logout}} </span>\n                        </span>\n                    </span>\n                </div>\n\n                <!-- Fake tokens -->\n                <!--div [hidden]=\"!vapaee.logged\">\n                    <div class=\"pull-right\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"freeFakeTokens()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading_fake\"></span>\n                            {{local.string.getfftokens | titlecase}}\n                        </span>\n                    </div>\n                </div--> \n                \n                <!-- No Wallet detected -->\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-scatter'}\" [hidden]=\"current.data.total_balance\">\n                    <div class=\"pull-right text-center\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"scatter.connectApp()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!scatter.feed.loading('connect')\"></span>\n                            {{local.string.retry | titlecase}}\n                        </span>\n                    </div>\n                    <span>{{local.string.noWallet}}</span>\n                </div>\n\n                <!-- Wallet detected but not logged -->\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-logged'}\" [hidden]=\"current.data.total_balance\">\n                    <div class=\"pull-right text-center\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.LoginWScOrSq}}\n                        </span>\n                    </div>\n                    <span>{{local.string.NotLogged}}</span>\n                </div>\n\n                <!-- Total balance (if any) -->\n                <div class=\"text-md nowrap\" [hidden]=\"!current.data.total_balance\">\n                    <small>total balance: </small>\n                    <span class=\"text-md\"> {{current.data.total_balance}} </span>\n                    <span class=\"text-sm color-yellow d-none d-md-inline\"> ({{service.getTelosInCurrentCurrency(current.data.total_balance)}}) </span>\n\n                    <div class=\"pull-right\" [hidden]=\"!vapaee.logged\">\n                        <vpe-fiat-combobox></vpe-fiat-combobox>\n                    </div>                    \n                </div>\n                <div class=\"text-md nowrap\" [hidden]=\"!current.data.total_balance\">\n                    <span class=\"text-sm color-yellow d-sm d-md-none\"> ({{service.getTelosInCurrentCurrency(current.data.total_balance)}}) </span>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: VpePanelAccountHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelAccountHeaderComponent", function() { return VpePanelAccountHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VpePanelAccountHeaderComponent = /** @class */ (function () {
    function VpePanelAccountHeaderComponent(vapaee, scatter, local, service) {
        this.vapaee = vapaee;
        this.scatter = scatter;
        this.local = local;
        this.service = service;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideuser = false;
        this.hideheader = false;
        this.loading_fake = false;
        this.current = this.vapaee.default;
    }
    VpePanelAccountHeaderComponent.prototype.ngOnChanges = function () {
    };
    VpePanelAccountHeaderComponent.prototype.onChange = function () {
    };
    VpePanelAccountHeaderComponent.prototype.freeFakeTokens = function () {
        var _this = this;
        this.loading_fake = true;
        this.vapaee.getSomeFreeFakeTokens().then(function (_) {
            _this.loading_fake = false;
        }).catch(function (_) {
            _this.loading_fake = false;
        });
    };
    VpePanelAccountHeaderComponent.prototype.setCurrency = function (currency) {
        this.service.setCurrentCurrency(currency);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelAccountHeaderComponent.prototype, "hideuser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelAccountHeaderComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelAccountHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelAccountHeaderComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelAccountHeaderComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelAccountHeaderComponent.prototype, "current", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelAccountHeaderComponent.prototype, "confirmDeposit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelAccountHeaderComponent.prototype, "confirmWithdraw", void 0);
    VpePanelAccountHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-account-header',
            template: __webpack_require__(/*! ./vpe-panel-account-header.component.html */ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-account-header.component.scss */ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_4__["VpeComponentsService"]])
    ], VpePanelAccountHeaderComponent);
    return VpePanelAccountHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [title]=\"local.string.resources\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\" >\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-primary\" (click)=\"current_mode = !current_mode\">\n                    <i class=\"material-icons\" [hidden]=\"current_mode\">autorenew</i>\n                    <i class=\"material-icons\" [hidden]=\"!current_mode\">cached</i>\n                </span>\n            </div>            \n            <div class=\"text-lg text-center\" [hidden]=\"!title\">\n                {{title | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('account')\"></span>\n            </div>\n        </div>    \n    </div>    \n\n    <div class=\"row\" [ngClass]=\"{'d-none':!current_mode}\">\n        <div class=\"col\">\n            <div class=\"text-md margin-top\">RAM <span class=\"text-xs color-grey\">{{current.data.ram_limit.percentStr}} available</span></div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                    role=\"progressbar\" [ngStyle]=\"{'width': current.data.ram_limit.percentStr}\"></div>\n            </div>\n            <div class=\"text-sm text-center\">RAM used - {{current.data.ram_limit.used}} Bytes / {{current.data.ram_limit.max}} Bytes</div>\n            <div class=\"text-md margin-top\">NET <span class=\"text-xs color-grey\">{{current.data.net_limit.percentStr}} available</span></div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                    role=\"progressbar\" [ngStyle]=\"{'width': current.data.net_limit.percentStr}\"></div>\n            </div>\n            <div class=\"text-sm text-center\">NET used - {{current.data.net_limit.used}} Bytes / {{current.data.net_limit.max}} Bytes</div>\n            <div class=\"text-md margin-top\">CPU <span class=\"text-xs color-grey\">{{current.data.cpu_limit.percentStr}} available</span></div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                    role=\"progressbar\" [ngStyle]=\"{'width': current.data.cpu_limit.percentStr}\"></div>\n            </div>\n            <div class=\"text-sm text-center\">CPU used - {{current.data.cpu_limit.used}} µs / {{current.data.cpu_limit.max}} µs</div>\n        </div>\n    </div>\n\n\n    <div class=\"row\" [ngClass]=\"{'d-none':current_mode}\">\n        <div class=\"col col-padding-right\">\n            <div class=\"text-md margin-top\">RAM <span class=\"text-xs color-grey\">{{current.data.ram_limit.percentStr}} available</span></div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                    role=\"progressbar\" [ngStyle]=\"{'width': current.data.ram_limit.percentStr}\"></div>\n            </div>\n            <div class=\"text-muted text-xs margin-top-xs text-center\">{{current.data.ram_limit.max}} Bytes</div>\n        </div>\n        <div class=\"col col-padding-left col-padding-right\">\n            <div class=\"text-md margin-top\">NET <span class=\"text-xs color-grey\">{{current.data.net_limit.percentStr}} available</span></div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                    role=\"progressbar\" [ngStyle]=\"{'width': current.data.net_limit.percentStr}\"></div>\n            </div>\n            <div class=\"text-muted text-xs margin-top-xs text-center\">{{current.data.net_limit.max}} Bytes</div>\n        </div>\n        <div class=\"col col-padding-left\">\n            <div class=\"text-md margin-top\">CPU <span class=\"text-xs color-grey\">{{current.data.cpu_limit.percentStr}} available</span></div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                    role=\"progressbar\" [ngStyle]=\"{'width': current.data.cpu_limit.percentStr}\"></div>\n            </div>\n            <div class=\"text-muted text-xs margin-top-xs text-center\">{{current.data.cpu_limit.max}} µs</div>\n        </div>\n    </div> \n\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: VpePanelAccountResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelAccountResourcesComponent", function() { return VpePanelAccountResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelAccountResourcesComponent = /** @class */ (function () {
    function VpePanelAccountResourcesComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideuser = false;
        this.hideheader = false;
        this.current = this.vapaee.default;
    }
    VpePanelAccountResourcesComponent.prototype.ngOnChanges = function () {
    };
    VpePanelAccountResourcesComponent.prototype.onChange = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelAccountResourcesComponent.prototype, "hideuser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelAccountResourcesComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelAccountResourcesComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelAccountResourcesComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelAccountResourcesComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelAccountResourcesComponent.prototype, "current", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelAccountResourcesComponent.prototype, "confirmDeposit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelAccountResourcesComponent.prototype, "confirmWithdraw", void 0);
    VpePanelAccountResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-account-resources',
            template: __webpack_require__(/*! ./vpe-panel-account-resources.component.html */ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-account-resources.component.scss */ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelAccountResourcesComponent);
    return VpePanelAccountResourcesComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.activitylog\">\n\n    <div class=\"row\">\n        <div class=\"nowrap text-bold text-sm col-2 col-padding-right\">\n            Activity\n            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('activity')\"></span>\n        </div>\n        <div class=\"nowrap text-bold text-sm-left col-2 col-padding-right col-padding-left\">User</div>\n        <div class=\"nowrap text-bold text-sm-left col-6 col-padding-right col-padding-left\">Detail</div>\n        <div class=\"nowrap text-bold text-sm-left col-2 col-padding-left\">Date</div>\n    </div>\n    <div class=\"row margin-top\">\n        <div class=\"col-12\">\n            <perfect-scrollbar #sp style=\"max-height: 250px; max-width: 100%\" (psYReachEnd)=\"psYReachEnd()\">\n            \n                <div class=\"row padding-top margin-bottom activity-event\" \n                    [ngClass]=\"{'text-success': event.event=='transaction' && getOrdertype(event) == 'buy', 'text-danger':  event.event=='transaction' && getOrdertype(event) == 'sell'}\"\n                    *ngFor=\"let event of vapaee.activity.list\"\n                >\n                    <div class=\"text-sm      col-2 col-padding-right text-bold\"\n                    >\n                        {{local.string[\"log.\" + event.event] | titlecase}}\n                    </div>\n                    <div class=\"text-sm-left col-2 col-padding-right col-padding-left\">\n                        <span class=\"cursor-pointer account-name\" (click)=\"clickOnAccount(event.user)\">{{event.user}}</span>\n                    </div>\n                    <div class=\"text-sm-left col-6 col-padding-right col-padding-left\"\n                        [ngClass]=\"{'cursor-pointer': event.event=='transaction'}\"\n                        (click)=\"event.event=='transaction' ? clickOnScope(getOrderScope(event)) : null;\">{{eventDetail(event)}}</div>\n                    \n                    \n                    <div class=\"text-sm-left col-2 col-padding-left d-block d-lg-none\">{{event.date | date : \"HH:mm:ss\"}}</div>\n                    <div class=\"text-sm-left col-2 col-padding-left d-none d-lg-block\">{{event.date | date : \"MMM d, HH:mm:ss\"}}</div>\n                    \n                </div>\n            \n            </perfect-scrollbar>\n        </div>\n    </div>\n    \n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\n.activity-event {\n  border-top: 1px solid #333; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VpePanelActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelActivityLogComponent", function() { return VpePanelActivityLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VpePanelActivityLogComponent = /** @class */ (function () {
    function VpePanelActivityLogComponent(vapaee, local, service, cdr) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.cdr = cdr;
        this.gotoAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gotoScope = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detail = {};
        this.data = {};
        this.onLocalChangeSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscriber"](this.onLocalChange.bind(this));
    }
    VpePanelActivityLogComponent.prototype.ngOnChanges = function () {
        // this.vapaee.activity.events[""].processed
    };
    Object.defineProperty(VpePanelActivityLogComponent.prototype, "activity", {
        get: function () {
            return this.vapaee.activity.list;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelActivityLogComponent.prototype.onLocalChange = function () {
        this.detail = {};
    };
    VpePanelActivityLogComponent.prototype.ngOnDestroy = function () {
        this.onLocalChangeSubscriber.unsubscribe();
    };
    VpePanelActivityLogComponent.prototype.ngOnInit = function () {
        this.local.onLocalChange.subscribe(this.onLocalChangeSubscriber);
    };
    VpePanelActivityLogComponent.prototype.getCanonicalScope = function (scope) {
        var parts = scope.split(".");
        if (parts[1] == "tlos")
            return scope;
        if (parts[0] == "tlos")
            return parts[1] + "." + parts[0];
        if (parts[0] < parts[1])
            return scope;
        return parts[1] + "." + parts[0];
    };
    VpePanelActivityLogComponent.prototype.mergeDataToTemplateString = function (template, data) {
        var str = template;
        for (var prop in data) {
            var key = "{{" + prop + "}}";
            str = str.split(key).join(data[prop]);
        }
        return str;
    };
    VpePanelActivityLogComponent.prototype.getOrdertype = function (e) {
        var data = this.extractEventData(e);
        return data.ordertype;
    };
    VpePanelActivityLogComponent.prototype.getOrderScope = function (e) {
        var data = this.extractEventData(e);
        return data.scope;
    };
    VpePanelActivityLogComponent.prototype.extractEventData = function (e) {
        var id = "id-" + e.id;
        if (!this.data[id]) {
            var parts = e.params.split("|");
            ;
            var data = { user: e.user };
            switch (e.event) {
                case "deposit":
                    // kate|900.00000000 CNT
                    data.amount = parts[1];
                    break;
                case "withdraw":
                    // 900.00000000 CNT
                    data.amount = parts[0];
                    break;
                case "sell.order":
                    // 10.00000000 CNT|0.29000000 TLOS
                    data.ordertype = this.local.string.sellorder;
                    data.amount = parts[0];
                    data.price = parts[1];
                    break;
                case "buy.order":
                    // 20.00000000 CNT|0.40000000 TLOSç
                    data.ordertype = this.local.string.buyorder;
                    data.amount = parts[0];
                    data.price = parts[1];
                    break;
                case "transaction":
                    // user: kate
                    // compra: cnt.tlos|kate|alice|10.00000000 CNT|4.00000000 TLOS|0.40000000 TLOS
                    // venta:  cnt.tlos|alice|kate|10.00000000 CNT|2.90000000 TLOS|0.29000000 TLOS
                    data.scope = parts[0];
                    data.buyer = parts[1];
                    data.seller = parts[2];
                    data.amount = parts[3];
                    data.payment = parts[4];
                    data.price = parts[5];
                    data.ordertype = (e.user == data.seller) ? "sell" : "buy";
                    break;
                case "cancel.order":
                    // cancel sell order: cnt.tlos|1
                    // cancel buy order: tlos.cnt|1
                    data.scope = parts[0];
                    data.canonical = this.getCanonicalScope(data.scope);
                    data.comodity = data.canonical.split(".")[0].toUpperCase();
                    data.currency = data.canonical.split(".")[1].toUpperCase();
                    data.quantity = parts[1];
                    if (data.quantity == "1") {
                        if (data.scope == data.canonical) {
                            data.ordertype = this.local.string.sellorder;
                        }
                        else {
                            data.ordertype = this.local.string.buyorder;
                        }
                    }
                    else {
                        if (data.scope == data.canonical) {
                            data.ordertype = this.local.string.sellorders;
                        }
                        else {
                            data.ordertype = this.local.string.buyorders;
                        }
                    }
                    break;
                default:
            }
            this.data[id] = data;
        }
        return this.data[id];
    };
    VpePanelActivityLogComponent.prototype.eventDetail = function (e) {
        var id = "id-" + e.id;
        if (!this.detail[id]) {
            var str;
            var parts = e.params.split("|");
            ;
            var data = this.extractEventData(e);
            switch (e.event) {
                case "deposit":
                    str = this.local.string.logDeposit;
                    break;
                case "withdraw":
                    str = this.local.string.logWithdraw;
                    break;
                case "sell.order":
                    str = this.local.string.logOrder;
                    break;
                case "buy.order":
                    str = this.local.string.logOrder;
                    break;
                case "transaction":
                    if (data.ordertype == "sell") {
                        str = this.local.string.logTrxSell;
                    }
                    else {
                        str = this.local.string.logTrxBuy;
                    }
                    break;
                case "cancel.order":
                    if (data.quantity == "1") {
                        str = this.local.string.logCancel;
                    }
                    else {
                        str = this.local.string.logCancelN;
                    }
                    break;
                default:
                    str = e.params;
            }
            this.detail[id] = this.mergeDataToTemplateString(str, data);
        }
        return this.detail[id];
    };
    VpePanelActivityLogComponent.prototype.clickOnAccount = function (name) {
        this.gotoAccount.next(name);
    };
    VpePanelActivityLogComponent.prototype.clickOnScope = function (scope) {
        this.gotoScope.next(scope);
    };
    VpePanelActivityLogComponent.prototype.psYReachEnd = function () {
        var _this = this;
        this.vapaee.loadMoreActivity().then(function (_) {
            _this.cdr.detectChanges();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelActivityLogComponent.prototype, "gotoAccount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelActivityLogComponent.prototype, "gotoScope", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sp'),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"])
    ], VpePanelActivityLogComponent.prototype, "sp", void 0);
    VpePanelActivityLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-activity-log',
            template: __webpack_require__(/*! ./vpe-panel-activity-log.component.html */ "./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-activity-log.component.scss */ "./src/app/components/vpe-panel-activity-log/vpe-panel-activity-log.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], VpePanelActivityLogComponent);
    return VpePanelActivityLogComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [title]=\"local.string.balbreak\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\" [hidden]=\"!title\">\n            <div class=\"text-lg text-center\">\n                {{title | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('account')\"></span>\n            </div>\n        </div>                \n        <div class=\"col-sm-12\">\n            <table class=\"table right-aligned margin-top\">\n                <tbody>\n                    <tr><td>Available:</td><td>{{current.data.core_liquid_balance}}</td></tr>\n                    <tr><td>Refunding:</td><td>{{current.data.refund_request.total}}</td></tr>\n                    <tr><td>CPU Staked:</td><td>{{current.data.total_resources.cpu_weight}}</td></tr>\n                    <tr><td>NET Staked:</td><td>{{current.data.total_resources.net_weight}}</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: VpePanelBalanceBreakdawnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelBalanceBreakdawnComponent", function() { return VpePanelBalanceBreakdawnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelBalanceBreakdawnComponent = /** @class */ (function () {
    function VpePanelBalanceBreakdawnComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideuser = false;
        this.hideheader = false;
        this.current = this.vapaee.default;
    }
    VpePanelBalanceBreakdawnComponent.prototype.ngOnChanges = function () {
    };
    VpePanelBalanceBreakdawnComponent.prototype.onChange = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelBalanceBreakdawnComponent.prototype, "hideuser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelBalanceBreakdawnComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelBalanceBreakdawnComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelBalanceBreakdawnComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelBalanceBreakdawnComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelBalanceBreakdawnComponent.prototype, "current", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelBalanceBreakdawnComponent.prototype, "confirmDeposit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelBalanceBreakdawnComponent.prototype, "confirmWithdraw", void 0);
    VpePanelBalanceBreakdawnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-balance-breakdown',
            template: __webpack_require__(/*! ./vpe-panel-balance-breakdown.component.html */ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-balance-breakdown.component.scss */ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelBalanceBreakdawnComponent);
    return VpePanelBalanceBreakdawnComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-chart/google-chart-service/google-chart/chart-html-tooltip.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/google-chart-service/google-chart/chart-html-tooltip.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChartHTMLTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
var ChartHTMLTooltip = /** @class */ (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    ChartHTMLTooltip.PIXELS = 'px';
    return ChartHTMLTooltip;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-chart/google-chart-service/google-chart/google-chart.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/google-chart-service/google-chart/google-chart.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-charts-loader.service */ "./src/app/components/vpe-panel-chart/google-chart-service/google-charts-loader.service.ts");
/* harmony import */ var _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-html-tooltip */ "./src/app/components/vpe-panel-chart/google-chart-service/google-chart/chart-html-tooltip.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OnResizeHandlerSelf;
var OnResizeHandler = {
    handleEvent: function (evt) {
        OnResizeHandlerSelf.onResize(evt);
    }
};



var GoogleChartComponent = /** @class */ (function () {
    function GoogleChartComponent(el, loaderService) {
        var _this = this;
        this.mouseOverListener = function (item) {
            var event = _this.parseMouseEvent(item);
            event.tooltip = _this.getHTMLTooltip();
            return event;
        };
        this.mouseOutListener = function (item) {
            var event = _this.parseMouseEvent(item);
            return event;
        };
        this.selectListener = function () {
            var event = {
                message: 'select',
                row: null,
                column: null,
                selectedRowValues: [],
                selectedRowFormattedValues: [],
                columnLabel: ''
            };
            var s = _this.wrapper.visualization.getSelection();
            var gs = s[s.length - 1];
            if (!gs) {
                event.message = 'deselect';
                return event;
            }
            var selection = gs;
            if (gs.row != null) {
                event.row = selection.row;
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                var dataTable = _this.wrapper.getDataTable();
                var numberOfColumns = dataTable.getNumberOfColumns();
                for (var i = 0; i < numberOfColumns; i++) {
                    selectedRowValues.push(dataTable.getValue(selection.row, i));
                    selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                }
                event.selectedRowValues = selectedRowValues;
                event.selectedRowFormattedValues = selectedRowFormattedValues;
            }
            if (selection.column != null) {
                event.column = selection.column;
                event.columnLabel = _this.getColumnLabelAtPosition(selection);
            }
            if (gs.name) {
                event.columnLabel = gs.name;
            }
            return event;
        };
        this.instance_id = Math.floor(Math.random() * 1000);
        this.el = el;
        this.loaderService = loaderService;
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseWheel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseWheelOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GoogleChartComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    GoogleChartComponent.prototype.destroy = function () {
        this.unregisterChartEvents();
    };
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // console.log("GoogleChartComponent.ngOnChanges()", changes, [this.data.dataTable]);
        if (!this.wrapper) {
            var key = 'data';
            if (changes[key]) {
                if (!this.data) {
                    return;
                }
                else {
                    this.innerdata = {
                        dataTable: this.data.dataTable,
                        chartType: this.data.chartType,
                        opt_firstRowIsData: this.data.opt_firstRowIsData,
                        opt_onresize: this.data.opt_onresize,
                        options: this.data.options,
                        formatters: this.data.formatters
                    };
                }
                this.options = this.innerdata.options;
                if (!this.options) {
                    this.options = {};
                }
                this.innerdata.component = this;
                this.loaderService.load().then(function () {
                    if (_this.wrapper === undefined || _this.wrapper.getChartType() !== _this.data.chartType) {
                        _this.convertOptions();
                        if (_this.innerdata.opt_firstRowIsData && Array.isArray(_this.innerdata.dataTable)) {
                            _this.innerdata.dataTable = google.visualization.arrayToDataTable(_this.innerdata.dataTable, true);
                        }
                        _this.wrapper = new google.visualization.ChartWrapper(_this.innerdata);
                        _this.registerChartWrapperEvents();
                    }
                    else {
                        // this.unregisterEvents();
                    }
                    _this.draw();
                });
            }
        }
        else {
            this.redraw(this.data.dataTable);
        }
    };
    GoogleChartComponent.prototype.redraw = function (dataTable, options) {
        if (dataTable === void 0) { dataTable = null; }
        if (options === void 0) { options = null; }
        // console.log("GoogleChartComponent.redraw()", dataTable);
        this.innerdata.options = options || this.innerdata.options;
        this.innerdata.dataTable = dataTable || this.innerdata.dataTable;
        if (this.innerdata.opt_firstRowIsData && Array.isArray(this.innerdata.dataTable)) {
            this.innerdata.dataTable = google.visualization.arrayToDataTable(this.innerdata.dataTable, true);
        }
        this.draw();
    };
    GoogleChartComponent.prototype.draw = function () {
        // console.log("GoogleChartComponent.draw()");
        this.wrapper.setDataTable(this.innerdata.dataTable);
        this.convertOptions();
        this.wrapper.setOptions(this.options);
        this.reformat();
        this.wrapper.draw(this.el.nativeElement.querySelector('div'));
    };
    /**
     * Applies formatters to data columns, if defined
     */
    GoogleChartComponent.prototype.reformat = function () {
        if (!this.innerdata) {
            return;
        }
        if (this.innerdata.formatters !== undefined) {
            for (var _i = 0, _a = this.innerdata.formatters; _i < _a.length; _i++) {
                var formatterConfig = _a[_i];
                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                var formatter = new formatterConstructor(formatterOptions);
                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                    for (var _b = 0, _c = formatterOptions.ranges; _b < _c.length; _b++) {
                        var range = _c[_b];
                        if (typeof (range.fromBgColor) !== 'undefined' && typeof (range.toBgColor) !== 'undefined') {
                            formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                        }
                        else {
                            formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                        }
                    }
                }
                var dt = this.wrapper.getDataTable();
                for (var _d = 0, _f = formatterConfig.columns; _d < _f.length; _d++) {
                    var col = _f[_d];
                    formatter.format(dt, col);
                }
            }
        }
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    GoogleChartComponent.prototype.getSeriesByColumn = function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row == null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__["ChartHTMLTooltip"](tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var chartType = this.wrapper.getChartType();
        var eventColumn = item.column;
        if (eventColumn == null) {
            switch (chartType) {
                case 'Timeline':
                    eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                    break;
                default:
                    eventColumn = 0;
            }
        }
        var eventRow = item.row;
        var myItem = {
            row: eventRow,
            column: eventColumn
        };
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(myItem),
            value: this.getValueAtPosition(myItem),
            columnType: this.getColumnTypeAtPosition(myItem),
            columnLabel: this.getColumnLabelAtPosition(myItem)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterEvents = function () {
        try {
            if (!google)
                return;
            if (!google.visualization)
                return;
            if (!google.visualization.events)
                return;
            google.visualization.events.removeAllListeners(this.wrapper.getChart());
            google.visualization.events.removeAllListeners(this.wrapper);
        }
        catch (e) {
            console.error("ERROR CATCHED: ", [e]);
        }
    };
    GoogleChartComponent.prototype.onResize = function (e) {
        console.log("RESIZE", this.instance_id);
        this.redraw(this.data.dataTable);
    };
    GoogleChartComponent.prototype.unregisterChartEvents = function () {
        // console.log("GoogleChartComponent.unregisterChartEvents() ----------- ");
        this.regUnregOnResizeEvent(false);
        this.unregisterEvents();
    };
    GoogleChartComponent.prototype.regUnregOnResizeEvent = function (doit) {
        OnResizeHandlerSelf = this;
        if (doit) {
            if (window['attachEvent']) {
                window['attachEvent']('onresize', OnResizeHandler);
            }
            else if (window['addEventListener']) {
                window['addEventListener']('resize', OnResizeHandler);
                // console.log("window['addEventListener']('resize', OnResizeHandler);", this.instance_id);         
            }
        }
        else {
            if (window['detachEvent']) {
                window['detachEvent']('onresize', OnResizeHandler);
            }
            else if (window['removeEventListener']) {
                window.removeEventListener('resize', OnResizeHandler);
                // console.log("window.removeEventListener('resize', OnResizeHandler,false);", this.instance_id);
            }
        }
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        // console.log("GoogleChartComponent.registerChartEvents() ----------- ");
        var chart = this.wrapper.getChart();
        // console.log("*******************************************************");
        // console.log(google);
        // console.log(chart);
        // console.log("*******************************************************");
        // https://stackoverflow.com/a/26067800/2274525
        var self = this;
        function MouseWheelHandler(_e) {
            // cross-browser wheel delta
            var e = window.event || _e; // old IE support
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            self.mouseWheel.emit({ delta: delta });
            if (typeof e.stopPropagation == "function") {
                // console.log("calling e.stopPropagation()")
                e.stopPropagation();
            }
            if (typeof e.stopImmediatePropagation == "function") {
                // console.log("calling e.stopImmediatePropagation()")
                e.stopImmediatePropagation();
            }
            if (typeof e.preventDefault == "function") {
                // console.log("calling e.preventDefault()")
                e.preventDefault();
            }
            return false;
        }
        if (this.mouseWheel.observers.length > 0) {
            var myitem = chart.container;
            if (myitem.addEventListener) {
                // IE9, Chrome, Safari, Opera
                myitem.addEventListener("mousewheel", MouseWheelHandler, false);
                // Firefox
                myitem.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
            }
            else {
                // IE 6/7/8
                myitem.attachEvent("onmousewheel", MouseWheelHandler);
            }
        }
        // resize event   
        if (this.innerdata.opt_onresize) {
            this.regUnregOnResizeEvent(true);
        }
        this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
        if (this.mouseOver.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOverOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOverOneTime.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
        if (this.mouseOutOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOutOneTime.emit(event);
            });
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready', component: _this });
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
            _this.chartReadyOneTime.emit({ message: 'Chart ready (one time)', component: _this });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'error', function (error) {
            _this.chartErrorOneTime.emit(error);
        });
        this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
        this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
    };
    GoogleChartComponent.prototype.addListener = function (source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addListener(source, eventType, function () {
            evEmitter.emit(listenerFn());
        });
    };
    GoogleChartComponent.prototype.addOneTimeListener = function (source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addOneTimeListener(source, eventType, function () {
            evEmitter.emit(listenerFn());
        });
    };
    GoogleChartComponent.prototype.convertOptions = function () {
        try {
            this.options = google.charts[this.innerdata.chartType].convertOptions(this.options);
        }
        catch (error) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleChartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseWheel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseWheelOneTime", void 0);
    GoogleChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-chart',
            template: '<div></div>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartsLoaderService"]])
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-chart/google-chart-service/google-charts-loader.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/google-chart-service/google-charts-loader.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: GoogleChartsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var GoogleChartsLoaderService = /** @class */ (function () {
    function GoogleChartsLoaderService(localeId, googleChartsVersion, mapsApiKey) {
        this.googleChartsVersion = googleChartsVersion;
        this.mapsApiKey = mapsApiKey;
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
        if (this.googleChartsVersion === null) {
            this.googleChartsVersion = '46';
        }
    }
    GoogleChartsLoaderService.prototype.load = function (packages) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            _this.loadGoogleChartsScript().then(function () {
                var initializer = {
                    language: _this.localeId,
                    callback: resolve,
                    packages: packages
                };
                if (_this.mapsApiKey) {
                    initializer.mapsApiKey = _this.mapsApiKey;
                }
                google.charts.load(_this.googleChartsVersion, initializer);
            }).catch(function (err) { return reject(); });
        });
    };
    GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    GoogleChartsLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('googleChartsVersion')), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('mapsApiKey')), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [String, String, String])
    ], GoogleChartsLoaderService);
    return GoogleChartsLoaderService;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-chart/google-chart-service/google-charts.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/google-chart-service/google-charts.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: VapaeeGoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VapaeeGoogleChartsModule", function() { return VapaeeGoogleChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./src/app/components/vpe-panel-chart/google-chart-service/google-chart/google-chart.component.ts");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-charts-loader.service */ "./src/app/components/vpe-panel-chart/google-chart-service/google-charts-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VapaeeGoogleChartsModule = /** @class */ (function () {
    function VapaeeGoogleChartsModule() {
    }
    VapaeeGoogleChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
            ],
            providers: [
                _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsLoaderService"]
            ],
            exports: [
                _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
            ]
        })
    ], VapaeeGoogleChartsModule);
    return VapaeeGoogleChartsModule;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/vpe-panel-chart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.chart\" (onResize)=\"onResize($event)\" (onClose)=\"onClose($event)\">\n        \n    <div class=\"background\">\n        <!-- \n            <div class=\"text-lg text-center\"><br>{{local.string.chart}}<br>{{local.string.comingsoon}}<br><br></div>\n            *ngIf=\"chartData && chartData.dataTable && chartData.dataTable.length > 0\"\n        -->\n        <google-chart\n            *ngIf=\"!closed && chartData && chartData.dataTable && chartData.dataTable.length > 0\"\n            [data]=\"chartData\"\n            (chartReady)='ready($event)'\n            (mouseWheel)=\"mouseWheel($event)\"\n        ></google-chart>\n            <!--\n            (chartReady)=\"ready($event)\"\n            (chartError)=\"error($event)\"\n            (chartSelect)=\"select($event)\"\n            (mouseOver)=\"mouseOver($event)\"\n            (mouseOut)=\"mouseOut($event)\"\n        -->\n\n    </div>\n</vpe-panel>\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/vpe-panel-chart.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\ndiv.background {\n  height: 290px;\n  background-color: #0e1110; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/vpe-panel-chart.component.ts ***!
  \*************************************************************************/
/*! exports provided: VpePanelChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelChartComponent", function() { return VpePanelChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// https://www.devrandom.it/software/ng2-google-charts/
// import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
var VpePanelChartComponent = /** @class */ (function () {
    // @ViewContainerRef('vpe-panel-chart', {read: ElementRef}) elref: ElementRef;
    function VpePanelChartComponent(vapaee, local, _element, renderer) {
        this.vapaee = vapaee;
        this.local = local;
        this._element = _element;
        this.renderer = renderer;
        this.zomm_min = 5;
        this.zoom = 24;
        this.closed = false;
    }
    Object.defineProperty(VpePanelChartComponent.prototype, "chartData", {
        // counter = 0;
        get: function () {
            return this._chartData;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelChartComponent.prototype.onResize = function (device) {
        this.closed = false;
        if (this.component)
            this.component.redraw(this.recreateDataTable(), null);
        // console.log(this._element.nativeElement.offsetWidth);
        // console.log(this._element.nativeElement.offsetHeight);
    };
    VpePanelChartComponent.prototype.onClose = function (device) {
        if (this.component)
            this.component.destroy();
        this.closed = true;
        // console.log(this._element.nativeElement.offsetHeight);
    };
    VpePanelChartComponent.prototype.ready = function (event) {
        this.component = event.component;
        // console.assert(!!this.component, "ERROR: ", event);
    };
    VpePanelChartComponent.prototype.error = function (event) {
        //console.log("error", event);
    };
    VpePanelChartComponent.prototype.select = function (event) {
        //console.log("select", event);
    };
    VpePanelChartComponent.prototype.mouseOver = function (event) {
        //console.log("mouseOver", event);
    };
    VpePanelChartComponent.prototype.mouseOut = function (event) {
        //console.log("mouseOut", event);
    };
    VpePanelChartComponent.prototype.recreateDataTable = function () {
        var data = [];
        var zoom = this.zoom;
        if (zoom > this.data.length) {
            zoom = this.data.length;
        }
        for (var i = 0; i < zoom; i++) {
            data.push(this.data[this.data.length - zoom + i]);
        }
        // console.log("********************* recreateDataTable()", data);
        return data;
    };
    VpePanelChartComponent.prototype.prepareChartDataStyles = function () {
        var current = "green";
        for (var i = 0; i < this.data.length; i++) {
            var row = this.data[i];
            // console.log("--->", this.data[i]);
            if (row[2] > row[3]) {
                current = "red";
            }
            else if (row[2] < row[3]) {
                current = "green";
            }
            // this.data[i].push("color: blue");
        }
    };
    VpePanelChartComponent.prototype.mouseWheel = function (event) {
        //console.log("mouseWheel", event);
        this.zoom -= Math.floor(event.delta * (this.zoom / 10));
        if (this.zoom < this.zomm_min)
            this.zoom = this.zomm_min;
        if (this.zoom > this.data.length)
            this.zoom = this.data.length;
        // this.recreateChartData();
        //console.log(this._chartData);
        if (this.component)
            this.component.redraw(this.recreateDataTable(), null);
    };
    VpePanelChartComponent.prototype.ngOnDestroy = function () {
        if (this.component)
            this.component.destroy();
    };
    VpePanelChartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //console.log("********************* ngOnChanges()", this.data);
        // if (this.data && this.data.length > 0) {
        if (this.data) {
            this._chartData = null;
            clearTimeout(this.timer);
            this.timer = setTimeout(function (_) {
                if (_this.data.length > 0 && _this.data[0].length == 5) {
                    _this.prepareChartDataStyles();
                }
                var data = _this.recreateDataTable();
                var baseline = 0;
                if (data.length > 0) {
                    baseline = data[data.length - 1][3];
                    // console.log("--------------------------------------->", data[data.length-1], baseline);
                }
                _this._chartData = {
                    chartType: 'CandlestickChart',
                    dataTable: data,
                    opt_firstRowIsData: true,
                    // opt_onresize: true,
                    // https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#data-format
                    options: {
                        legend: 'none',
                        backgroundColor: "#0e1110",
                        candlestick: {
                            fallingColor: { strokeWidth: 0, fill: '#a52714' },
                            risingColor: { strokeWidth: 0, fill: '#0f9d58' } // green
                        },
                        colors: ["#444400"],
                        height: 290,
                        bar: {
                            groupWidth: "80%"
                        },
                        hAxis: {
                            textStyle: {
                                color: "#AAA"
                            }
                        },
                        vAxis: {
                            gridlines: {
                                color: '#888',
                            },
                            minorGridlines: {
                                color: '#222',
                            },
                            textStyle: {
                                color: "white"
                            },
                            baseline: baseline,
                            baselineColor: "#dddd00",
                            // format: "#,### TLOS",
                            title: 'Price',
                            titleTextStyle: {
                                color: 'white'
                            }
                        }
                    }
                };
            }, 20);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelChartComponent.prototype, "data", void 0);
    VpePanelChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-chart',
            template: __webpack_require__(/*! ./vpe-panel-chart.component.html */ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-chart.component.scss */ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], VpePanelChartComponent);
    return VpePanelChartComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-history/vpe-panel-history.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/vpe-panel-history/vpe-panel-history.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.history\">\n    <div class=\"row\">\n        <div class=\"nowrap text-bold text-sm col-sm-4 col-padding-right\">{{local.string.time | titlecase}}\n            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('history.'+scope)\"></span>\n        </div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-4 col-padding-right col-padding-left\">{{local.string.price | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-4 col-padding-left\">{{local.string.amount | titlecase}}</div>\n    </div>\n    <div class=\"row margin-top\">\n        <div class=\"col-sm-12\">\n            <perfect-scrollbar style=\"max-height: 250px; max-width: 100%\">\n                <div class=\"row margin-bottom\" \n                    *ngFor=\"let tx of history\"\n                    [ngClass]=\"{'text-success': tx.isbuy, 'text-danger':!tx.isbuy}\"\n                >\n                    <div class=\"nowrap col-sm-4 col-padding-right\">\n                        {{tx.date | date : \"HH:mm:ss\"}}\n                    </div>\n                    <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">{{tx.price.valueToString(8)}}</div>\n                    <div class=\"nowrap col-sm-4 text-right padding-right-lg \">{{tx.amount.valueToString(8)}}</div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-history/vpe-panel-history.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/vpe-panel-history/vpe-panel-history.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-history/vpe-panel-history.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-history/vpe-panel-history.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VpePanelHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelHistoryComponent", function() { return VpePanelHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VpePanelHistoryComponent = /** @class */ (function () {
    function VpePanelHistoryComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
    }
    VpePanelHistoryComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelHistoryComponent.prototype, "history", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelHistoryComponent.prototype, "scope", void 0);
    VpePanelHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-history',
            template: __webpack_require__(/*! ./vpe-panel-history.component.html */ "./src/app/components/vpe-panel-history/vpe-panel-history.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-history.component.scss */ "./src/app/components/vpe-panel-history/vpe-panel-history.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelHistoryComponent);
    return VpePanelHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.OrderForm\">\n    <div class=\"row\">\n  \n        <div class=\"col-sm-12\" [hidden]=\"vapaee.logged\">\n            <div  class=\"pull-right margin-top\">\n                <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                    {{local.string.LoginWScatter}}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12\" [hidden]=\"!vapaee.logged\">\n            <div class=\"form-row\">\n                <div class=\"col-sm-4\">\n                    {{local.string.Price | titlecase}}\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"row\">\n                        <div class=\"col col-sm-auto\">\n                            <label [ngClass]=\"{'text-danger':!can_sell && wants=='sell'}\">{{local.string.Amount}}</label>\n                        </div>\n                        <div class=\"col text-right nowrap\">\n                            <span class=\"cursor-pointer\" (click)=\"sellAll()\">\n                                <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"deposits_comodity.token.logo ? deposits_comodity.token.logo : '#'\">\n                                <span [ngClass]=\"{'text-danger': !can_sell && wants=='sell'}\"> {{deposits_comodity.toString()}} </span>\n                            </span>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm-4 text-right nowrap\">\n                    <span class=\"cursor-pointer\" (click)=\"buyAll()\">\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"deposits_currency.token.logo ? deposits_currency.token.logo : '#'\">\n                        <span [ngClass]=\"{'text-danger': !can_buy && wants=='buy'}\"> {{deposits_currency.toString()}} </span>\n                    </span>\n                </div>\n            </div>\n        \n            <div class=\"form-row margin-top\">\n                <div class=\"col-sm-4\">\n                    <vpe-token-input [(asset)]=\"price\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Price}}\"></vpe-token-input>\n                </div>\n                <div class=\"col-sm-4\">\n                    <vpe-token-input [(asset)]=\"amount\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Amount}}\"></vpe-token-input>\n                </div>\n                <div class=\"col-sm-4\">\n                    <!-- Buy -->\n                    <div [hidden]=\"wants=='sell' || !can_buy\">\n                        <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-success\" [ngClass]=\"{disabled: payment ? payment.amount.toNumber() == 0:true}\" (click)=\"buy()\" >\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                            {{local.string.Buy}}\n                        </span>\n                    </div>\n                    <div class=\"text-right\" [hidden]=\"!(wants=='buy' && !can_buy)\">\n                        <label> {{local.string.needtodep}} &nbsp; </label>\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" src=\"#\" src-data=\"money ? money.token.logo : ''\">\n                        <label> &nbsp; {{money ? money.token.symbol : \"\"}}</label>\n                    </div>\n    \n                    <!-- Sell -->\n                    <div [hidden]=\"wants=='buy' || !can_sell\">\n                        <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-danger\" [ngClass]=\"{disabled: payment ? payment.amount.toNumber() == 0:true}\" (click)=\"sell()\" >\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                            {{local.string.Sell}}\n                        </span>\n                    </div>\n                    <div class=\"text-right\" [hidden]=\"!(wants=='sell' && !can_sell)\">\n                        <label> {{local.string.needtodep}} &nbsp; </label>\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" src=\"#\" src-data=\"get_amount.token.logo\">\n                        <label> &nbsp; {{get_amount.token.symbol}}</label>\n                    </div>                 \n\n                </div>\n            </div>\n            <div class=\"form-row margin-top\">\n                <div class=\"col-sm-2 col-padding-right\">\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='buy', 'btn-success': can_buy, 'disabled': !can_buy}\" (click)=\"wantsTo('buy')\" >\n                        <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_buy}}\n                    </span>\n                </div>\n                <div class=\"col-sm-2 col-padding-left\">\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='sell', 'btn-danger': can_sell, 'disabled': !can_sell}\" (click)=\"wantsTo('sell')\" >\n                        <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_sell}}\n                    </span>\n                </div>\n                <!-- Arrow -->\n                <!-- 0.0000 AAA   ==>   0.0000 TLOS -->\n                <div class=\"col-sm-8 text-right\">\n                    <div class=\"row\">\n                        <div class=\"col text-right nowrap\" [hidden]=\"wants=='buy'\">\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_amount.token.logo ? get_amount.token.logo : '#'\">\n                            <span [ngClass]=\"{'text-danger': !can_sell}\"> {{get_amount.str}} </span>\n                            &nbsp; <i style=\"vertical-align: bottom;\" class=\"material-icons\"> trending_flat </i> &nbsp;\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_payment.token.logo ? get_payment.token.logo : '#'\">\n                            {{get_payment.str}}\n                        </div>\n                        <div class=\"col text-right nowrap\" [hidden]=\"wants=='sell'\">\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_payment.token.logo ? get_payment.token.logo : '#'\">\n                            <span [ngClass]=\"{'text-danger': !can_buy}\"> {{get_payment.str}} </span>\n                            &nbsp; <i style=\"vertical-align: bottom;\" class=\"material-icons\"> trending_flat </i> &nbsp;\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_amount.token.logo ? get_amount.token.logo : '#'\">\n                            {{get_amount.str}}\n                        </div>                        \n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--\n        <div class=\"col-sm-12\" [hidden]=\"!vapaee.logged\">\n            <div class=\"form-row\">\n                <div class=\"col-sm-3\">\n                    <label>{{local.string.wdywdo}}</label>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 col-padding-right\">\n                            <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='buy', 'btn-success': can_buy, 'disabled': !can_buy}\" (click)=\"wantsTo('buy')\" >\n                                <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_buy}}\n                            </span>\n                        </div>\n                        <div class=\"col-sm-6 col-padding-left\">\n                            <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='sell', 'btn-danger': can_sell, 'disabled': !can_sell}\" (click)=\"wantsTo('sell')\" >\n                                <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_sell}}\n                            </span>    \n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label>{{local.string.Price}}</label>\n                    <vpe-token-input [(asset)]=\"price\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Price}}\"></vpe-token-input>\n                </div> \n                <div class=\"form-group col-sm-3\">\n                    <label [ngClass]=\"{'text-danger':!can_sell && wants=='sell'}\">{{local.string.Amount}}</label>\n                    <vpe-token-input [(asset)]=\"amount\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Amount}}\"></vpe-token-input>\n                </div>\n\n                <div [hidden]=\"wants=='sell' || !can_buy\" class=\"form-group col-sm-3\">\n                    <label>{{local.string.Payment}} {{payment ? payment.toString(8) : \"\"}}</label>\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-success\" (click)=\"buy()\" >\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                        {{local.string.Buy}}\n                    </span>\n                </div>\n                <div [hidden]=\"!(wants=='buy' && !can_buy)\" class=\"form-group col-sm-3\">\n                    <label class=\"text-danger\">{{local.string.ycntpay}} {{payment ? payment.toString(8) : \"\"}}</label>\n                    <label class=\"text-danger\" >{{local.string.yohave}} {{money ? money.toString(8) : \"\"}}</label>\n                </div>\n\n\n                <div [hidden]=\"wants=='buy' || !can_sell\" class=\"form-group col-sm-3\">\n                    <label>{{local.string.Payment}} {{payment ? payment.toString(8) : \"\"}}</label>\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-danger\" (click)=\"sell()\" >\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                        {{local.string.Sell}}\n                    </span>\n                </div>\n                <div [hidden]=\"!(wants=='sell' && !can_sell)\" class=\"form-group col-sm-3\">\n                    <label class=\"text-danger\">{{local.string.ycntsell}} {{amount ? amount.toString(8) : \"\"}}</label>\n                    <label class=\"text-danger\" >{{local.string.yohave}} {{asset ? asset.toString(8) : \"\"}}</label>\n                </div>\n            </div>\n        </div>\n        -->\n\n        <!-- ------------------ orders ------------------- -->\n        \n        <div class=\"col-sm-12\" [hidden]=\"!vapaee.logged || (own.sell.length == 0 && own.buy.length == 0)\">\n            <hr class=\"line\">\n        </div>\n\n        <div class=\"col-sm-12 margin-top\" [hidden]=\"!error\">\n            <div class=\"alert alert-danger\">\n                <div class=\"pull-right\">\n                    <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                    </button>                \n                </div>\n                {{error}}\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 d-lg-none margin-top\" [hidden]=\"!vapaee.logged || (own.sell.length == 0 && own.buy.length == 0)\">\n            <label>{{local.string.orders | titlecase}}</label>\n            <div class=\"row\">\n                <div class=\"nowrap col-sm-4 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n            </div>\n            <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                \n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of own.buy\"\n                    \n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.deposit.toString(8)}}\n                    </div>\n                \n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\" [hidden]=\"!vapaee.logged\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.price.token.table + order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.price.token.table + order.id]\"></span>\n                    </div>\n                \n                    <div class=\"col-sm-12\" [hidden]=\"!error\">\n                        <div class=\"alert alert-danger\">\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                </button>                \n                            </div>\n                            {{error}}\n                        </div>\n                    </div>\n    \n                </div>\n                \n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of own.sell\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.deposit.toString(8)}}\n                    </div>\n                \n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\" [hidden]=\"!vapaee.logged\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.price.token.table + order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.price.token.table + order.id]\"></span>\n                    </div>\n                \n                    <div class=\"col-sm-12\" [hidden]=\"!error\">\n                        <div class=\"alert alert-danger\">\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                </button>                \n                            </div>\n                            {{error}}\n                        </div>\n                    </div>\n                </div>\n                \n            </perfect-scrollbar>\n        </div>        \n\n\n<!--\n        <div class=\"col-sm-12 d-lg-none margin-top\" [hidden]=\"!vapaee.logged || own.length == 0\">\n            <label>{{local.string.orders | titlecase}}</label>\n            <div class=\"row\">\n                <div class=\"nowrap col-sm-4 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n            </div>\n            <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of own\"\n                    (click)=\"cancel(order)\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol == get_currency.symbol, 'text-success':order.deposit.token.symbol == get_comodity.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol == get_currency.symbol, 'text-success':order.deposit.token.symbol == get_comodity.symbol}\"\n                        >\n                        {{order.total.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.id]\"></span>\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    -->\n\n        <div class=\"d-sm-none d-lg-block col-lg-12 margin-top\">\n            <div class=\"row\" [hidden]=\"!vapaee.logged || (own.sell.length == 0 && own.buy.length == 0)\">\n                <div class=\"col-sm-6\">\n                    <label>{{local.string.sell_orders | titlecase}}</label>\n                    <div class=\"row\">\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n                    </div>\n                    <perfect-scrollbar style=\"max-height: 200px; max-width: 100%\">\n                        <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                            [ngClass]=\"{'d-none':order.deposit.token.symbol != get_comodity.symbol}\"\n                            *ngFor=\"let order of own.sell\"\n                            (click)=\"cancel(order)\"\n                        >\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg text-danger\">{{order.price.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left text-danger\">{{order.total.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\">\n                                <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.id]\">cancel</i>\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.id]\"></span>\n                            </div>\n                        </div>\n                    </perfect-scrollbar>                    \n                </div>\n                <div class=\"col-sm-6\">\n                    <label>{{local.string.sell_orders | titlecase}}</label>\n                    <div class=\"row\">\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n                    </div>\n                    <perfect-scrollbar style=\"max-height: 200px; max-width: 100%\">\n                        <div class=\"row margin-bottom danger active-on-hover cursor-pointer\" \n                            [ngClass]=\"{'d-none':order.deposit.token.symbol != get_currency.symbol}\"\n                            *ngFor=\"let order of own.buy\"\n                            (click)=\"cancel(order)\"\n                        >\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg text-success\">{{order.price.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left text-success\">{{order.total.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\">\n                                <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.id]\">cancel</i>\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.id]\"></span>\n                            </div>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n\n        </div>        \n\n    </div>\n</vpe-panel>\n\n\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\nspan.form-control i.material-icons {\n  display: none; }\n\nspan.form-control.active i.material-icons {\n  font-size: 15px;\n  display: inline-block;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VpePanelOrderEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelOrderEditorComponent", function() { return VpePanelOrderEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VpePanelOrderEditorComponent = /** @class */ (function () {
    function VpePanelOrderEditorComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.error = "";
        this.loading = false;
        this.c_loading = {};
        this.deposits_comodity = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        this.deposits_currency = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
    }
    Object.defineProperty(VpePanelOrderEditorComponent.prototype, "get_currency", {
        get: function () {
            return this.currency || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpePanelOrderEditorComponent.prototype, "get_comodity", {
        get: function () {
            return this.comodity || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpePanelOrderEditorComponent.prototype, "get_amount", {
        get: function () {
            return this.amount || new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpePanelOrderEditorComponent.prototype, "get_payment", {
        get: function () {
            return this.payment || new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        },
        enumerable: true,
        configurable: true
    });
    VpePanelOrderEditorComponent.prototype.calculate = function () {
        var _this = this;
        setTimeout(function (_) {
            if (!_this.price)
                _this.restaure();
            if (!_this.price)
                return;
            _this.deposits_comodity = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0 " + _this.comodity.symbol, _this.vapaee);
            _this.deposits_currency = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0 " + _this.currency.symbol, _this.vapaee);
            var a = _this.price.amount;
            _this.payment.amount = _this.price.amount.multipliedBy(_this.amount.amount);
            // check if the user can sell. Does he/she have comodity?
            _this.asset = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0.0 " + _this.comodity.symbol, _this.vapaee);
            _this.can_sell = false;
            for (var i in _this.deposits) {
                if (_this.deposits[i].token == _this.comodity) {
                    _this.deposits_comodity = _this.deposits[i].clone();
                    if (_this.deposits[i].amount.toNumber() > 0) {
                        _this.can_sell = true;
                        _this.asset = _this.deposits[i];
                    }
                }
            }
            // Does he/she have enough comodity?
            if (_this.can_sell) {
                if (_this.asset.amount.isLessThan(_this.amount.amount)) {
                    _this.can_sell = false;
                }
            }
            // check if the user can buy. Does he/she have currency?
            _this.money = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0.0 " + _this.currency.symbol, _this.vapaee);
            _this.can_buy = false;
            for (var i in _this.deposits) {
                if (_this.deposits[i].token == _this.currency) {
                    _this.deposits_currency = _this.deposits[i].clone();
                    if (_this.deposits[i].amount.toNumber() > 0) {
                        _this.can_buy = true;
                        _this.money = _this.deposits[i];
                    }
                }
            }
            // Does he/she have enough currency?
            if (_this.can_buy) {
                if (_this.money.amount.isLessThan(_this.payment.amount)) {
                    _this.can_buy = false;
                }
            }
            if (!_this.wants) {
                if (_this.can_buy) {
                    _this.wantsTo("buy");
                }
                else {
                    _this.wantsTo("sell");
                }
            }
            /*if (!this.can_buy && !this.can_sell) {
                this.wants = "";
            }*/
            // console.log("VpeOrderEditorComponent.calculate() ---->", [this.deposits, this.money, this.asset]);    
        });
    };
    VpePanelOrderEditorComponent.prototype.wantsTo = function (what) {
        console.assert(what == "sell" || what == "buy", "ERROR: wantsTo what??", what);
        // if (what == "sell" && !this.can_sell) return;
        // if (what == "buy" && !this.can_buy) return;
        this.wants = what;
        this.calculate();
    };
    VpePanelOrderEditorComponent.prototype.setPrice = function (a) {
        this.price = a;
        this.ngOnChanges();
    };
    VpePanelOrderEditorComponent.prototype.setAmount = function (a) {
        this.error = "";
        this.amount = a;
        this.ngOnChanges();
    };
    VpePanelOrderEditorComponent.prototype.sellAll = function () {
        this.error = "";
        this.setAmount(this.deposits_comodity);
        this.wantsTo("sell");
    };
    VpePanelOrderEditorComponent.prototype.buyAll = function () {
        this.error = "";
        console.log("buyAll()", this.payment);
        this.wantsTo("buy");
        if (this.price.amount.toNumber() == 0) {
            this.error = this.local.string.priceNotZero;
        }
        else {
            this.payment.amount = this.deposits_currency.amount.minus(0.0001);
            var amount = this.payment.amount.dividedBy(this.price.amount);
            this.setAmount(new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"](amount, this.deposits_comodity.token));
        }
    };
    VpePanelOrderEditorComponent.prototype.onChange = function (event) {
        this.error = "";
        this.calculate();
    };
    VpePanelOrderEditorComponent.prototype.reset = function () {
        this.amount = null;
        this.payment = null;
        this.comodity = null;
        this.currency = null;
        this.price = null;
        this.ngOnChanges();
    };
    VpePanelOrderEditorComponent.prototype.restaure = function () {
        if (this.comodity && !this.amount) {
            this.amount = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0.0000 " + this.comodity.symbol, this.vapaee);
        }
        if (this.currency && !this.payment) {
            this.payment = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0.0000 " + this.currency.symbol, this.vapaee);
        }
        if (this.currency && !this.price) {
            this.price = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]("0.0000 " + this.currency.symbol, this.vapaee);
        }
        if (this.price && this.amount && this.deposits && this.deposits.length > 0) {
            this.calculate();
        }
        // console.log("this.orders ------------------>", this.sellorders, this.buyorders);
        if (this.sellorders && this.own.sell.length == 0) {
            // console.log("this.sellorders.length", this.sellorders.length);
            for (var i = 0; i < this.sellorders.length; i++) {
                var sell = this.sellorders[i];
                for (var j = 0; j < sell.orders.length; j++) {
                    var order = sell.orders[j];
                    if (order.owner == this.owner) {
                        this.own.sell.push(order);
                    }
                }
            }
        }
        if (this.buyorders && this.own.buy.length == 0) {
            // console.log("this.buyorders.length", this.buyorders.length);
            for (var i = 0; i < this.buyorders.length; i++) {
                var buy = this.buyorders[i];
                for (var j = 0; j < buy.orders.length; j++) {
                    var order = buy.orders[j];
                    if (order.owner == this.owner) {
                        this.own.buy.push(order);
                    }
                }
            }
        }
    };
    VpePanelOrderEditorComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // console.log("VpePanelOrderEditorComponent.ngOnChanges()");
        this.own = { sell: [], buy: [] };
        // changes from outside
        return this.vapaee.waitReady.then(function (_) { return _this.restaure(); });
    };
    VpePanelOrderEditorComponent.prototype.debug = function () {
        console.log("-------");
        console.log(this);
        console.log("-------");
    };
    VpePanelOrderEditorComponent.prototype.buy = function () {
        var _this = this;
        if (!this.can_buy)
            return;
        if (this.payment.amount.toNumber() == 0)
            return;
        console.log("BUY");
        this.loading = true;
        this.error = "";
        this.vapaee.createOrder("buy", this.amount, this.price).then(function (_) {
            // success
            _this.loading = false;
        }).catch(function (e) {
            console.log(e);
            if (typeof e == "string") {
                _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
            }
            else {
                _this.error = null;
            }
            _this.loading = false;
        });
    };
    VpePanelOrderEditorComponent.prototype.sell = function () {
        var _this = this;
        if (!this.can_sell)
            return;
        // if (this.payment.amount.toNumber() == 0) return;
        console.log("SELL");
        this.loading = true;
        this.error = "";
        this.vapaee.createOrder("sell", this.amount, this.price).then(function (_) {
            // success
            _this.loading = false;
        }).catch(function (e) {
            console.log(e);
            if (typeof e == "string") {
                _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
            }
            else {
                _this.error = null;
            }
            _this.loading = false;
        });
    };
    VpePanelOrderEditorComponent.prototype.cancel = function (order) {
        var _this = this;
        var key = order.id;
        if (order.deposit.token.symbol != order.telos.token.symbol) {
            this.c_loading[key] = true;
            this.vapaee.cancelOrder("sell", order.deposit.token, order.telos.token, [order.id]).then(function (_) {
                // success
                _this.c_loading[key] = false;
            }).catch(function (e) {
                console.log(e);
                if (typeof e == "string") {
                    _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
                }
                else {
                    _this.error = null;
                }
                _this.c_loading[key] = false;
            });
            ;
        }
        if (order.deposit.token.symbol == order.telos.token.symbol) {
            this.c_loading[key] = true;
            this.vapaee.cancelOrder("buy", order.total.token, order.telos.token, [order.id]).then(function (_) {
                // success
                _this.c_loading[key] = false;
            }).catch(function (e) {
                console.log(e);
                if (typeof e == "string") {
                    _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
                }
                else {
                    _this.error = null;
                }
                _this.c_loading[key] = false;
            });
            ;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelOrderEditorComponent.prototype, "owner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelOrderEditorComponent.prototype, "comodity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelOrderEditorComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelOrderEditorComponent.prototype, "deposits", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelOrderEditorComponent.prototype, "buyorders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelOrderEditorComponent.prototype, "sellorders", void 0);
    VpePanelOrderEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-order-editor',
            template: __webpack_require__(/*! ./vpe-panel-order-editor.component.html */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-order-editor.component.scss */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelOrderEditorComponent);
    return VpePanelOrderEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-orders/vpe-panel-orders.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.orders\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <div class=\"pull-right\">\n                        <span class=\"text-muted\">\n                            {{headers.sell ? headers.sell.orders : 0}} {{local.string.orders}} -\n                            {{headers.sell.total ? headers.sell.total.toString() : \"\"}}\n                        </span>\n                    </div>\n                    {{local.string.sell_orders | titlecase}}\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('sellorders')\"></span>\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"nowrap text-bold text-sm col-sm-3 col-padding-right padding-left-lg\">{{local.string.price | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.amount | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.total | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-left padding-right-lg\">{{local.string.sum | titlecase}}</div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                        <div class=\"row margin-bottom danger active-on-hover cursor-pointer\" \n                            [ngClass]=\"{'owner':row.owners[vapaee.account.name]}\"\n                            *ngFor=\"let row of orders.sell\"\n                        >\n                            <div class=\"nowrap col-sm-3 col-padding-right text-danger padding-left-lg\" (click)=\"clickPrice('sell', row)\">{{row.price.valueToString(8)}}</div>\n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('sell', row)\">{{row.total.valueToString(8)}}</div>\n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('sell', row)\">{{row.telos.valueToString()}}</div>\n                            <div class=\"nowrap col-sm-3 text-right padding-right-lg\" (click)=\"clickRow('sell', row)\">{{row.sumtelos.valueToString()}}</div>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <div class=\"pull-right\">\n                        <span class=\"text-muted\">\n                            {{iheaders.sell ? iheaders.sell.orders : 0}} {{local.string.orders}} -\n                            {{iheaders.sell.total ? iheaders.sell.total.toString() : \"\"}}\n                        </span>\n                    </div>\n                    {{local.string.buy_orders | titlecase}}\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('buyorders')\"></span>\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"nowrap text-bold text-sm col-sm-3 col-padding-right padding-left-lg\">{{local.string.price | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.amount | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.total | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-left padding-right-lg\">{{local.string.sum | titlecase}}</div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                        <div class=\"row margin-bottom success active-on-hover cursor-pointer\"\n                            [ngClass]=\"{'owner':row.owners[vapaee.account.name]}\"\n                            *ngFor=\"let row of orders.buy\"\n                        >\n                            <div class=\"nowrap col-sm-3 col-padding-right text-success padding-left-lg\" (click)=\"clickPrice('buy', row)\">{{row.price.valueToString(8)}}</div>    \n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('buy', row)\">{{row.total.valueToString(8)}}</div>\n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('buy', row)\">{{row.telos.valueToString()}}</div>\n                            <div class=\"nowrap col-sm-3 text-right padding-right-lg \" (click)=\"clickRow('buy', row)\">{{row.sumtelos.valueToString()}}</div>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-orders/vpe-panel-orders.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\ndiv.owner.danger {\n  background-color: #796e6e61; }\n\ndiv.owner.success {\n  background-color: #6e796e61; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-orders/vpe-panel-orders.component.ts ***!
  \***************************************************************************/
/*! exports provided: VpePanelOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelOrdersComponent", function() { return VpePanelOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelOrdersComponent = /** @class */ (function () {
    function VpePanelOrdersComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.onClickRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VpePanelOrdersComponent.prototype.ngOnChanges = function () {
    };
    VpePanelOrdersComponent.prototype.clickRow = function (type, row) {
        this.onClickRow.next({ type: type, row: row });
    };
    VpePanelOrdersComponent.prototype.clickPrice = function (type, row) {
        this.onClickPrice.next({ type: type, row: row });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelOrdersComponent.prototype, "orders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelOrdersComponent.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelOrdersComponent.prototype, "iheaders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelOrdersComponent.prototype, "onClickRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelOrdersComponent.prototype, "onClickPrice", void 0);
    VpePanelOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-orders',
            template: __webpack_require__(/*! ./vpe-panel-orders.component.html */ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-orders.component.scss */ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelOrdersComponent);
    return VpePanelOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [hidebackground]=\"hidebackground\" [title]=\"local.string.tokens\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12\">\n            <div class=\"text-lg text-center\">{{title | titlecase}}</div>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <div class=\"card-deck\">\n                <div class=\"row\" style=\"flex-grow: 1;\">\n                    <div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let token of get_tokens; let i=index\">\n<!-- \n                        <div class=\"text-left\"><pre>{{summary(token.scope)|json}}</pre></div>\n-->\n                        <div class=\"card token-card text-white bg-dark margin-top\" *ngIf=\"i<limit\">\n                            <div class=\"card-body vpe-background-card-body\">\n                                <h4 class=\"card-title\">\n                                    <div class=\"pull-right\" [hidden]=\"token.symbol == 'TLOS'\">\n                                        <div\n                                            class=\"nowrap text-right\"\n                                            [ngClass]=\"{'text-success': summary(token.scope).percent > 0, 'text-danger': summary(token.scope).percent < 0, 'text-muted': summary(token.scope).percent  == 0}\"\n                                        >\n                                            <small><b>{{summary(token.scope).percent_str}}</b></small>\n                                        </div>\n                                    </div>                            \n                                    <img style=\"height:20px; width: 20px; margin-top:-3px\" [src]=\"token.logo\">\n                                    {{token.appname}}\n                                </h4>\n                                <div class=\"card-text\">\n                                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('token-stat-'+token.symbol) && !vapaee.feed.loading('summary.'+token.scope)\"></span>\n                                    <span class=\"nowrap\"> {{token.stat ? token.stat.max_supply : ('0 ' + token.symbol)}} </span>\n                                    <br>\n                                    <a [href]=\"token.website\" target=\"_blank\"><small class=\"text-muted\">{{token.website}} &nbsp;</small></a><br>\n                                </div>\n                                <div>\n                                    <div class=\"pull-right\">\n                                        <div class=\"nowrap text-right\" *ngIf=\"token.symbol != 'TLOS' && token.verified\">\n                                                <small class=\"text-muted\">max: {{summary(token.scope).max_price.valueToString(4)}} {{summary(token.scope).max_price.token.symbol}}</small><br>\n                                                <small class=\"text-muted\">min: {{summary(token.scope).min_price.valueToString(4)}} {{summary(token.scope).min_price.token.symbol}}</small>\n                                            <!-- \n                                            <small class=\"text-muted\">{{local.string.price}}: </small> <small>{{summary(token.scope).price.valueToString(4)}}  {{summary(token.scope).price.token.symbol}}</small><br>\n                                            <small class=\"text-muted\">{{local.string.volume}}: {{summary(token.scope).volume.valueToString(4)}}  {{summary(token.scope).volume.token.symbol}}</small>\n                                            -->\n                                        </div>\n                                        <div *ngIf=\"token.symbol == 'TLOS' || !token.verified\">&nbsp;<br>&nbsp;</div>\n                                    </div>\n                                    <span [hidden]=\"token.symbol != 'TLOS' && token.verified\"\n                                        class=\"btn disabled btn-primary btn-sm margin-top\">trade</span>                            \n                                    <span [hidden]=\"token.symbol == 'TLOS' || !token.verified\"\n                                        class=\"btn btn-primary btn-sm margin-top\"\n                                        (click)=\"goToTradeToken(token)\"\n                                        >trade</span>\n                                </div>\n\n                                <div class=\"col-xs-12 margin-top\">\n                                    <div class=\"row\" style=\"flex-grow: 1\">\n                                        <div class=\"col-6 text-left col-padding-right\" *ngIf=\"token.symbol != 'TLOS' && token.verified\">\n                                            <small class=\"text-muted\">{{local.string.vol}}: {{summary(token.scope).volume.valueToString(4)}}  {{summary(token.scope).volume.token.symbol}}</small>\n                                            <!-- \n                                            <small class=\"text-muted\">min: {{summary(token.scope).min_price.valueToString(4)}} {{summary(token.scope).min_price.token.symbol}}</small>\n                                            -->\n                                        </div>\n                                        <div class=\"col-6 text-right col-padding-left\" *ngIf=\"token.symbol != 'TLOS' && token.verified\">\n                                            <!--\n                                            <small class=\"text-muted\">{{local.string.price}}: </small>\n                                             -->\n                                            <small class=\"bold\">{{summary(token.scope).price.valueToString(4)}}  {{summary(token.scope).price.token.symbol}}</small>\n                                            <!-- \n                                            <small class=\"text-muted\">max: {{summary(token.scope).max_price.valueToString(4)}} {{summary(token.scope).max_price.token.symbol}}</small>\n                                            -->\n                                        </div>\n                                        <div class=\"col-12 text-right\" *ngIf=\"token.symbol == 'TLOS'\"> &nbsp; </div>\n                                        <div class=\"col-12 text-right\" *ngIf=\"!token.verified\"> {{local.string.cantbtraded}} </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VpePanelTokensCardDeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelTokensCardDeckComponent", function() { return VpePanelTokensCardDeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelTokensCardDeckComponent = /** @class */ (function () {
    function VpePanelTokensCardDeckComponent(vapaee, local, service) {
        var _this = this;
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tradeToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideheader = false;
        this.hidebackground = false;
        this.limit = 0;
        this.vapaee.waitReady.then(function (_) {
            setTimeout(function (_) {
                if (_this.limit == 0) {
                    _this.limit = _this.vapaee.tokens.length;
                }
            });
        });
    }
    Object.defineProperty(VpePanelTokensCardDeckComponent.prototype, "get_tokens", {
        get: function () {
            var tokens = [];
            for (var i in this.tokens) {
                var token = this.tokens[i];
                if (!token.fiat) {
                    tokens.push(token);
                }
            }
            return tokens;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelTokensCardDeckComponent.prototype.ngOnChanges = function () {
    };
    VpePanelTokensCardDeckComponent.prototype.onChange = function () {
    };
    VpePanelTokensCardDeckComponent.prototype.summary = function (_scope) {
        var scope = this.vapaee.scopes[_scope];
        var _summary = Object.assign({
            percent: 0,
            percent_str: "0%",
            price: this.vapaee.zero_telos.clone(),
            records: [],
            volume: this.vapaee.zero_telos.clone()
        }, scope ? scope.summary : {
            volume: new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"](),
            price: new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"](),
            max_price: new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"](),
            min_price: new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"](),
        });
        return _summary;
    };
    VpePanelTokensCardDeckComponent.prototype.onConfirmWithdraw = function () {
        this.confirmWithdraw.next(this.withdraw);
    };
    VpePanelTokensCardDeckComponent.prototype.onConfirmDeposit = function () {
        this.confirmDeposit.next(this.deposit);
    };
    VpePanelTokensCardDeckComponent.prototype.goToTradeToken = function (token) {
        this.tradeToken.next(token);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelTokensCardDeckComponent.prototype, "tokens", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelTokensCardDeckComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelTokensCardDeckComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelTokensCardDeckComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelTokensCardDeckComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelTokensCardDeckComponent.prototype, "hidebackground", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], VpePanelTokensCardDeckComponent.prototype, "limit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelTokensCardDeckComponent.prototype, "confirmDeposit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelTokensCardDeckComponent.prototype, "confirmWithdraw", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelTokensCardDeckComponent.prototype, "tradeToken", void 0);
    VpePanelTokensCardDeckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-tokens-card-deck',
            template: __webpack_require__(/*! ./vpe-panel-tokens-card-deck.component.html */ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-tokens-card-deck.component.scss */ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelTokensCardDeckComponent);
    return VpePanelTokensCardDeckComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.Tokenlist\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 input-group\">\n            <input\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                placeholder=\"{{local.string.searchtk}}\"\n                [value]=\"token_filter\"\n                (input)=\"token_filter = $event.target.value\"\n                >\n            <div class=\"input-group-append\">\n                <span class=\"input-group-text form-control-sm padding-xs\">\n                    <i class=\"material-icons\">search</i>\n                </span>\n            </div>\n        </div>            \n    </div>\n    <hr class=\"line\">\n    <div class=\"row margin-top\">\n        <div class=\"nowrap text-bold text-sm col-sm-3 col-padding-right\">{{local.string.token | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-2 col-padding-right col-padding-left\">{{local.string.vol | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-4 col-padding-right col-padding-left\">{{local.string.price | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-left\">{{local.string.change | titlecase}}</div>\n    </div>\n    <div class=\"row margin-top\">\n        <div class=\"col-sm-12\">\n            <perfect-scrollbar style=\"max-height: 206px; max-width: 100%\">\n                <div class=\"row cursor-pointer margin-bottom active-on-hover\" \n                    *ngFor=\"let token of get_tokens | filter:token_filter\"\n                    [hidden]=\"token.symbol == 'TLOS'\"\n                    (click)=\"clockOnToken(token.scope)\"\n                >\n                    <div class=\"nowrap col-sm-3 col-padding-right\">\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"token.logo\">\n                        {{token.symbol}}\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('token-stat-'+token.symbol) && !vapaee.feed.loading('summary.'+token.scope)\"></span>\n                    </div>\n                    <div class=\"nowrap col-sm-2 text-right col-padding-right col-padding-left\">\n                        {{summary(token.scope).volume.valueToString(2)}}\n                    </div>\n                    <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">\n                        {{summary(token.scope).price.valueToString(4)}}\n                    </div>\n                    <div\n                        class=\"nowrap col-sm-3 text-right padding-right-lg\"\n                        [ngClass]=\"{'text-success': summary(token.scope).percent > 0, 'text-danger': summary(token.scope).percent < 0, 'text-muted': summary(token.scope).percent  == 0}\"\n                    >\n                        {{summary(token.scope).percent_str}}\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.ts ***!
  \***************************************************************************/
/*! exports provided: VpePanelTokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelTokensComponent", function() { return VpePanelTokensComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelTokensComponent = /** @class */ (function () {
    function VpePanelTokensComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.selectToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.token_filter = "";
    }
    Object.defineProperty(VpePanelTokensComponent.prototype, "get_tokens", {
        get: function () {
            var tokens = [];
            for (var i in this.tokens) {
                var token = this.tokens[i];
                if (token.verified) {
                    tokens.push(token);
                }
            }
            return tokens;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelTokensComponent.prototype.summary = function (_scope) {
        var scope = this.scopes[_scope];
        var _summary = Object.assign({
            percent: 0,
            percent_str: "0%",
            price: this.vapaee.zero_telos.clone(),
            records: [],
            volume: this.vapaee.zero_telos.clone()
        }, scope ? scope.summary : {});
        return _summary;
    };
    VpePanelTokensComponent.prototype.clockOnToken = function (scope) {
        this.selectToken.next(scope);
    };
    VpePanelTokensComponent.prototype.ngOnChanges = function () {
    };
    VpePanelTokensComponent.prototype.onStateChange = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelTokensComponent.prototype, "tokens", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelTokensComponent.prototype, "scopes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelTokensComponent.prototype, "selectToken", void 0);
    VpePanelTokensComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-tokens',
            template: __webpack_require__(/*! ./vpe-panel-tokens.component.html */ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-tokens.component.scss */ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelTokensComponent);
    return VpePanelTokensComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [title]=\"local.string.orders\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"text-lg text-center\">\n                {{title | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('userorders')\"></span>\n            </div>\n        </div>\n        <div class=\"col-sm-12\" *ngFor=\"let scope of user_orders\">\n            <label class=\"cursor-pointer\" (click)=\"selectTable(scope.table)\">\n                {{local.string.table | titlecase}} {{getSymbols(scope.table)}}\n            </label>\n            <div class=\"row\">\n                <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n            </div>\n            <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of scope.buy.orders\"\n                    (click)=\"cancel(scope.buy.table, order)\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.deposit.toString(8)}}\n                    </div>\n                    \n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\" [hidden]=\"!vapaee.logged\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[scope.buy.table + order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[scope.buy.table + order.id]\"></span>\n                    </div>\n                \n                    <div class=\"col-sm-12\" [hidden]=\"!error\">\n                        <div class=\"alert alert-danger\">\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                </button>                \n                            </div>\n                            {{error}}\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of scope.sell.orders\"\n                    (click)=\"cancel(scope.sell.table, order)\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.deposit.toString(8)}}\n                    </div>\n                    \n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\" [hidden]=\"!vapaee.logged\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[scope.sell.table + order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[scope.sell.table + order.id]\"></span>\n                    </div>\n                \n                    <div class=\"col-sm-12\" [hidden]=\"!error\">\n                        <div class=\"alert alert-danger\">\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                </button>                \n                            </div>\n                            {{error}}\n                        </div>\n                    </div>\n\n                </div>\n            </perfect-scrollbar>\n        </div>        \n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\ndiv.owner.danger {\n  background-color: #796e6e61; }\n\ndiv.owner.success {\n  background-color: #6e796e61; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VpePanelUserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelUserOrdersComponent", function() { return VpePanelUserOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelUserOrdersComponent = /** @class */ (function () {
    function VpePanelUserOrdersComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.onClickRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTableSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.c_loading = {};
    }
    VpePanelUserOrdersComponent.prototype.selectTable = function (scope) {
        this.onTableSelected.next(scope);
    };
    VpePanelUserOrdersComponent.prototype.ngOnChanges = function () {
        this._user_orders = null;
    };
    VpePanelUserOrdersComponent.prototype.clickRow = function (type, row) {
        this.onClickRow.next({ type: type, row: row });
    };
    VpePanelUserOrdersComponent.prototype.clickPrice = function (type, row) {
        this.onClickPrice.next({ type: type, row: row });
    };
    Object.defineProperty(VpePanelUserOrdersComponent.prototype, "user_orders", {
        get: function () {
            if (this._user_orders)
                return this._user_orders;
            var result = [];
            var tables = {};
            for (var i in this.userorders) {
                var scope = this.userorders[i];
                var table = scope.table;
                var sell_scope = table;
                var buy_scope = table.split(".")[1] + "." + table.split(".")[0];
                if (table.split(".")[0] == "tlos") {
                    sell_scope = buy_scope;
                    buy_scope = table;
                }
                table = sell_scope;
                tables[table] = tables[table] || {
                    table: table,
                    sell: {
                        scope: sell_scope,
                        orders: []
                    },
                    buy: {
                        scope: buy_scope,
                        orders: []
                    }
                };
                if (scope.table == buy_scope) {
                    tables[table].buy.orders = scope.orders;
                }
                if (scope.table == sell_scope) {
                    tables[table].sell.orders = scope.orders;
                }
            }
            for (var t in tables) {
                result.push(tables[t]);
            }
            this._user_orders = result;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelUserOrdersComponent.prototype.getSymbols = function (scope) {
        if (scope.split(".")[0] == "tlos")
            return scope.split(".")[1].toUpperCase();
        return scope.split(".")[0].toUpperCase();
    };
    VpePanelUserOrdersComponent.prototype.cancel = function (scope, order) {
        var _this = this;
        console.log("scope", scope, "order", order);
        var key = scope + order.id;
        if (order.deposit.token.symbol != order.telos.token.symbol) {
            this.c_loading[key] = true;
            this.vapaee.cancelOrder("sell", order.deposit.token, order.telos.token, [order.id]).then(function (_) {
                // success
                _this.c_loading[key] = false;
            }).catch(function (e) {
                console.log(e);
                if (typeof e == "string") {
                    _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
                }
                else {
                    _this.error = null;
                }
                _this.c_loading[key] = false;
            });
            ;
        }
        if (order.deposit.token.symbol == order.telos.token.symbol) {
            this.c_loading[key] = true;
            this.vapaee.cancelOrder("buy", order.total.token, order.telos.token, [order.id]).then(function (_) {
                // success
                _this.c_loading[key] = false;
            }).catch(function (e) {
                console.log(e);
                if (typeof e == "string") {
                    _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
                }
                else {
                    _this.error = null;
                }
                _this.c_loading[key] = false;
            });
            ;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelUserOrdersComponent.prototype, "orders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VpePanelUserOrdersComponent.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelUserOrdersComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelUserOrdersComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Map)
    ], VpePanelUserOrdersComponent.prototype, "userorders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelUserOrdersComponent.prototype, "onClickRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelUserOrdersComponent.prototype, "onClickPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelUserOrdersComponent.prototype, "onTableSelected", void 0);
    VpePanelUserOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-user-orders',
            template: __webpack_require__(/*! ./vpe-panel-user-orders.component.html */ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-user-orders.component.scss */ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelUserOrdersComponent);
    return VpePanelUserOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [title]=\"local.string.wallet\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12\">\n            <div class=\"text-lg text-center\">{{title | titlecase}}</div>\n        </div>\n\n        <div class=\"col-sm-12\" [hidden]=\"vapaee.logged || hideuser\">\n            <div class=\"pull-right margin-top\">\n                <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                    {{local.string.LoginWScOrSq}}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <div>\n                <div class=\"pull-right\" [hidden]=\"hideuser || !vapaee.logged\">\n                    <small class=\"text-muted cursor-pointer\" (click)=\"clickOnAccount()\">\n                        {{local.string.LoggedAs}} '{{vapaee.logged}}'\n                    </small>\n                </div>\n            </div>\n            <div class=\"text-md\">\n                {{local.string.deposits | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('deposits')\"></span>\n                <div class=\"pull-right\" [hidden]=\"!hideuser || !deposits || deposits.length == 0\">\n                    <span class=\"btn btn-sm btn-primary\" [hidden]=\"!show_prices_top || (hideuser && !vapaee.logged)\" (click)=\"show_prices_top=false\">\n                        {{local.string.withdraw | titlecase}}\n                        <i class=\"material-icons\">arrow_downward</i>\n                    </span>\n                    <span class=\"btn btn-sm btn-primary\" [hidden]=\"show_prices_top\" (click)=\"show_prices_top=true\">\n                        {{local.string.hidebtns}}\n                        <i class=\"material-icons\">replay</i>\n                    </span>\n                </div>                \n            </div>\n            <table class=\"table complete margin-top\">\n                <tbody>\n                    <tr [hidden]=\"!deposits || deposits.length > 0\"><td>\n                        <div class=\"col-sm-12 margin-top text-center text-danger\">\n                            <label>{{local.string.thesnodeps}}</label>\n                        </div>\n                        <div class=\"col-sm-12 margin-top text-center text-danger\">\n                            <span class=\"btn btn-sm btn-primary\" [hidden]=\"!show_prices_bottom || !vapaee.logged\"\n                                  (click)=\"first_deposit()\">{{local.string.deposit | titlecase}}</span>\n                            <div class=\"col-sm-12 margin-top\" [hidden]=\"!feed.error('first_deposit')\">\n                                <div class=\"alert alert-danger\">\n                                    <div class=\"pull-right\">\n                                        <button type=\"button\" class=\"close text-white\" (click)=\"feed.setError('first_deposit', '')\">\n                                            <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                        </button>                \n                                    </div>\n                                    {{feed.error('first_deposit')}}\n                                </div>\n                            </div>                                  \n                        </div>\n                    </td></tr>\n                    <tr\n                        [ngClass]=\"{'active-on-hover':actions}\"\n                        *ngFor=\"let deposit of deposits\">\n                        \n                        <td>\n                            <div (click)=\"withdrawForm(deposit)\" [ngClass]=\"{'cursor-pointer': actions}\">\n                                <div class=\"pull-right\">\n                                    <span class=\"text-xs color-yellow\" [hidden]=\"!show_prices_top\"> {{service.getTokenInCurrentCurrency(deposit)}} </span>\n                                    <span class=\"btn btn-xs btn-primary\" [hidden]=\"withdraw.token.symbol != 'SYS' || show_prices_top || !hideuser\">{{local.string.withdraw | titlecase}}</span>\n                                </div>                                 \n                                <img [src]=\"deposit.token.logo\" style=\"width: 20px; height: 20px; margin-top:-1px\">\n                                {{deposit.toString(8)}}\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('deposits')\"></span>\n                            </div>\n                            <div class=\"row\" [hidden]=\"deposit.token.symbol != withdraw.token.symbol\">\n                                <div class=\"col-sm-12 margin-top\">\n                                    <label>{{local.string.withdraw | titlecase}}</label>\n                                    <vpe-token-input\n                                        [(asset)]=\"withdraw\"\n                                        (valueChange)=\"onChange($event)\"\n                                        (valueEnter)=\"onConfirmWithdraw($event)\"\n                                        precision=\"4\"\n                                        [button]=\"local.string.withdraw\"\n                                        [loading]=\"loading\"\n                                        [error]=\"error\"\n                                        placeholder=\"{{local.string.withdraw | titlecase}}\"></vpe-token-input>\n                                </div>\n                            </div>                            \n                        </td>\n                        \n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <!-- Fake tokens -->\n        <div class=\"col-sm-12\" [hidden]=\"hasNoFake()\">\n            <div class=\"text-md\">\n                {{local.string.faketokens | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances')\"></span>\n            </div>\n            <table class=\"table complete margin-top\">\n                <tbody>\n                    <tr [hidden]=\"!get_fake_balances || (get_fake_balances.length > 0 && get_fake_tlos_balance.amount.toNumber() > 0)\"><td>\n                        <div class=\"col-sm-12 margin-top text-center text-danger\">\n                            <label [hidden]=\"get_fake_balances.length > 0\">{{local.string.thesnofaket}}</label>\n                            <label [hidden]=\"get_fake_balances.length == 0\">{{local.string.thesnofaketelos}}</label>\n\n                            <div [hidden]=\"!vapaee.logged\">\n                                <div class=\"pull-right col-sm-6\" [hidden]=\"get_fake_tlos_balance.amount.toNumber() > 0\">\n                                    <span class=\"btn btn-sm btn-primary\" (click)=\"freeFakeTelos()\">\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading_fake_tlos\"></span>\n                                        {{local.string.getfftelos }}\n                                    </span>\n                                </div>\n\n                                <div class=\"pull-right col-sm-6\" [hidden]=\"!get_fake_balances || get_fake_balances.length > 0\">\n                                    <span class=\"btn btn-sm btn-secondary\" (click)=\"freeFakeTokens()\">\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading_fake\"></span>\n                                        {{local.string.getfftokens | titlecase}}\n                                    </span>\n                                </div>\n                            </div>                            \n                        </div>                        \n                    </td></tr>                    \n                    <tr \n                        [ngClass]=\"{'active-on-hover':actions}\"\n                        [hidden]=\"balance.amount.toNumber() == 0\"\n                        *ngFor=\"let balance of get_fake_balances\"\n                        >\n                        <td>\n                            <div (click)=\"depositForm(balance)\" [ngClass]=\"{'cursor-pointer': actions}\">\n                                <img [src]=\"balance.token.logo\" style=\"width: 20px; height: 20px; margin-top:-1px\">\n                                {{balance.toString()}}\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances-'+balance.token.contract) && !vapaee.feed.loading('token-stat-'+balance.token.symbol)\"></span>\n                            </div>\n                            <div class=\"row\" [hidden]=\"balance.token.symbol != deposit.token.symbol\">\n                                <div class=\"col-sm-12 margin-top\">\n                                    <label>{{local.string.deposit | titlecase}}</label>\n                                    <vpe-token-input\n                                        [(asset)]=\"deposit\"\n                                        (valueChange)=\"onChange($event)\"\n                                        (valueEnter)=\"onConfirmDeposit($event)\"\n                                        precision=\"4\"\n                                        [button]=\"local.string.deposit\"\n                                        [loading]=\"loading\"\n                                        [error]=\"error\"\n                                        placeholder=\"{{local.string.deposit | titlecase}}\"></vpe-token-input>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n            <div class=\"text-md\">\n                {{local.string.balances | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances')\"></span>\n                <div class=\"pull-right\" [hidden]=\"!deposits || deposits.length == 0\">\n                    <span class=\"btn btn-sm btn-primary\" [hidden]=\"!show_prices_bottom || hideuser || vapaee.logged\" (click)=\"clickOnAccount()\">\n                        {{local.string.deposit | titlecase}}\n                        <i class=\"material-icons\">call_made</i>\n                    </span>\n                    <span class=\"btn btn-sm btn-primary\" [hidden]=\"!show_prices_bottom || !vapaee.logged\" (click)=\"show_prices_bottom=false\">\n                        {{local.string.deposit | titlecase}}\n                        <i class=\"material-icons\">arrow_downward</i>\n                    </span>\n                    <span class=\"btn btn-sm btn-primary\" [hidden]=\"show_prices_bottom\" (click)=\"show_prices_bottom=true\">\n                        {{local.string.hidebtns}}\n                        <i class=\"material-icons\">replay</i>\n                    </span>\n                </div>\n            </div>\n            <div class=\"alert alert-info margin-top\" [hidden]=\"!alert_msg\">\n                <div class=\"pull-right\">\n                    <button type=\"button\" class=\"close text-white\" (click)=\"alert_msg = null\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                    </button>                \n                </div>\n                {{alert_msg}}\n            </div>    \n            <table class=\"table complete margin-top\">\n                <tbody>\n                    <tr \n                        [ngClass]=\"{'active-on-hover':actions}\"\n                        [hidden]=\"balance.amount.toNumber() == 0\"\n                        *ngFor=\"let balance of get_non_fake_balances\"\n                        >\n                        <td>\n                            <div (click)=\"depositForm(balance)\" [ngClass]=\"{'cursor-pointer': actions}\">\n                                <div class=\"pull-right\">\n                                    <span class=\"text-xs color-yellow\" [hidden]=\"!show_prices_bottom\"> {{service.getTokenInCurrentCurrency(balance)}} </span>\n                                    <span class=\"btn btn-xs btn-primary\" [hidden]=\"deposit.token.symbol != 'SYS' || show_prices_bottom || !balance.token.verified\">{{local.string.deposit | titlecase}}</span>\n                                </div>                                \n                                <img [src]=\"balance.token.logo\" style=\"width: 20px; height: 20px; margin-top:-1px\">\n                                {{balance.toString()}}\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances-'+balance.token.contract) && !vapaee.feed.loading('token-stat-'+balance.token.symbol)\"></span>\n                            </div>\n                            <div class=\"row\" [hidden]=\"balance.token.symbol != deposit.token.symbol\">\n                                <div class=\"col-sm-12 margin-top\">\n                                    <label>{{local.string.deposit | titlecase}}</label>\n                                    <vpe-token-input\n                                        [(asset)]=\"deposit\"\n                                        (valueChange)=\"onChange($event)\"\n                                        (valueEnter)=\"onConfirmDeposit($event)\"\n                                        precision=\"4\"\n                                        [button]=\"local.string.deposit\"\n                                        [loading]=\"loading\"\n                                        [error]=\"error\"\n                                        placeholder=\"{{local.string.deposit | titlecase}}\"></vpe-token-input>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>        \n\n    </div>\n</vpe-panel>"

/***/ }),

/***/ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.ts ***!
  \***************************************************************************/
/*! exports provided: VpePanelWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelWalletComponent", function() { return VpePanelWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/feedback.service */ "./src/app/services/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VpePanelWalletComponent = /** @class */ (function () {
    function VpePanelWalletComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gotoAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.feed = new src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_4__["Feedback"]();
        this.show_prices_top = true;
        this.show_prices_bottom = true;
        this._fake_tlos_balance = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        this.hideuser = false;
        this.hideheader = false;
        this.actions = false;
        this.alert_msg = "";
        this.deposit = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        this.withdraw = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
    }
    Object.defineProperty(VpePanelWalletComponent.prototype, "get_fake_tlos_balance", {
        get: function () {
            if (this._fake_tlos_balance && this._fake_tlos_balance.amount.toNumber() > 0)
                return this._fake_tlos_balance;
            for (var i in this.balances) {
                if (this.balances[i].token.fake) {
                    if (!this._fake_tlos_balance && this.balances[i].token.symbol == "TLOS") {
                        this._fake_tlos_balance = this.balances[i];
                    }
                }
            }
            return this._fake_tlos_balance || new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpePanelWalletComponent.prototype, "get_fake_balances", {
        get: function () {
            if (this._fake_balances)
                return this._fake_balances;
            this._fake_balances = this._fake_balances || [];
            for (var i in this.balances) {
                if (this.balances[i].token.fake) {
                    this._fake_balances.push(this.balances[i]);
                }
            }
            return this._fake_balances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpePanelWalletComponent.prototype, "get_non_fake_balances", {
        get: function () {
            if (this._nonfake_balances)
                return this._nonfake_balances;
            this._nonfake_balances = this._nonfake_balances || [];
            for (var i in this.balances) {
                if (!this.balances[i].token.fake) {
                    this._nonfake_balances.push(this.balances[i]);
                }
            }
            // console.log(this._nonfake_balances);
            return this._nonfake_balances;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelWalletComponent.prototype.first_deposit = function () {
        this.feed.setError("first_deposit", "");
        if (!this.balances) {
            console.error("ERROR: deposits not ready", this.deposits);
            return;
        }
        if (this.balances.length == 0) {
            this.feed.setError("first_deposit", this.local.string.udhavetoken);
            return;
        }
        if (this.balances.length == 1) {
            var asset = this.balances[0];
            this.depositForm(asset);
        }
        if (this.balances.length > 1) {
            this.show_prices_bottom = false;
        }
    };
    VpePanelWalletComponent.prototype.depositForm = function (asset) {
        this.alert_msg = "";
        if (!this.vapaee.logged)
            return;
        if (!this.actions)
            return;
        if (!asset.token.verified) {
            this.alert_msg = this.local.string.tinallowed;
            this.deposit = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
            return;
        }
        if (this.deposit.token.symbol == asset.token.symbol) {
            this.deposit = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        }
        else {
            this.deposit = asset.clone();
        }
        this.withdraw = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
    };
    VpePanelWalletComponent.prototype.withdrawForm = function (asset) {
        if (!this.vapaee.logged)
            return;
        if (!this.actions)
            return;
        if (this.withdraw.token.symbol == asset.token.symbol) {
            this.withdraw = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        }
        else {
            this.withdraw = asset.clone();
        }
        this.deposit = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
    };
    VpePanelWalletComponent.prototype.hasNoFake = function () {
        var resutl = true;
        for (var i in this.vapaee.tokens) {
            if (this.vapaee.tokens[i].fake) {
                resutl = false;
                break;
            }
        }
        return resutl;
    };
    VpePanelWalletComponent.prototype.setquiet = function (name) {
        this.deposit = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"]();
        this.loading_fake = false;
        this.loading_fake_tlos = false;
    };
    VpePanelWalletComponent.prototype.freeFakeTokens = function () {
        var _this = this;
        this.loading_fake = true;
        this.vapaee.getSomeFreeFakeTokens().then(function (_) {
            _this.loading_fake = false;
        }).catch(function (_) {
            _this.loading_fake = false;
        });
    };
    VpePanelWalletComponent.prototype.freeFakeTelos = function () {
        var _this = this;
        console.log("freeFakeTelos()");
        this.loading_fake_tlos = true;
        this.vapaee.getSomeFreeFakeTokens("TLOS").then(function (_) {
            _this.loading_fake_tlos = false;
        }).catch(function (_) {
            _this.loading_fake_tlos = false;
        });
    };
    VpePanelWalletComponent.prototype.ngOnChanges = function () {
        this._nonfake_balances = null;
        this._fake_balances = null;
        this._fake_tlos_balance = null;
    };
    VpePanelWalletComponent.prototype.onChange = function () {
    };
    VpePanelWalletComponent.prototype.clickOnAccount = function () {
        this.gotoAccount.next();
    };
    VpePanelWalletComponent.prototype.onConfirmWithdraw = function () {
        this.confirmWithdraw.next(this.withdraw);
    };
    VpePanelWalletComponent.prototype.onConfirmDeposit = function () {
        this.confirmDeposit.next(this.deposit);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelWalletComponent.prototype, "deposits", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelWalletComponent.prototype, "balances", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelWalletComponent.prototype, "_fake_balances", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VpePanelWalletComponent.prototype, "_nonfake_balances", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"])
    ], VpePanelWalletComponent.prototype, "_fake_tlos_balance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelWalletComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelWalletComponent.prototype, "hideuser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelWalletComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelWalletComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelWalletComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelWalletComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelWalletComponent.prototype, "confirmDeposit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelWalletComponent.prototype, "confirmWithdraw", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpePanelWalletComponent.prototype, "gotoAccount", void 0);
    VpePanelWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-wallet',
            template: __webpack_require__(/*! ./vpe-panel-wallet.component.html */ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-wallet.component.scss */ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_3__["VpeComponentsService"]])
    ], VpePanelWalletComponent);
    return VpePanelWalletComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel/vpe-panel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/vpe-panel/vpe-panel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\" [ngClass]=\"{'card text-white bg-dark vpe-background-panel':!hidebackground}\">\n    <div class=\"title vpe-background-panel-title\" [hidden]=\"hideheader\">\n        <div class=\"pull-right\">\n            <i class=\"material-icons cursor-pointer\" [ngClass]=\"{'rotated-180':expanded}\" (click)=\"turn(!expanded)\" > expand_more </i> \n        </div>\n        <label>\n            <i class=\"tiny material-icons\">brightness_1</i>\n            {{title | titlecase}} \n        </label>\n    </div>\n\n    <div #body class=\"body\" [ngClass]=\"{'card-body padding':!hidebackground, 'closed':!expanded}\">\n        <ng-content></ng-content>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/vpe-panel/vpe-panel.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/vpe-panel/vpe-panel.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n  :host div.body {\n    transition: height .5s ease-out;\n    transition-property: height, padding;\n    transition-property: height;\n    overflow: hidden; }\n  :host div.body.closed {\n      padding: 0px;\n      height: 0px; }\n  :host div.title {\n    margin-bottom: 5px;\n    border-radius: 0px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    padding: 3px;\n    padding-left: 10px;\n    padding-right: 10px;\n    color: white;\n    font-weight: bold; }\n  :host div.title > .pull-right {\n      height: 24px; }\n  :host div.title > label {\n      margin-bottom: 0px; }\n  :host div.title i {\n      transition: -webkit-transform .5s ease-out;\n      transition: transform .5s ease-out;\n      transition: transform .5s ease-out, -webkit-transform .5s ease-out; }\n  :host div.title i.rotated-180 {\n        transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n        -webkit-transform: rotate(180deg); }\n"

/***/ }),

/***/ "./src/app/components/vpe-panel/vpe-panel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/vpe-panel/vpe-panel.component.ts ***!
  \*************************************************************/
/*! exports provided: VpePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpePanelComponent", function() { return VpePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _vpe_components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VpePanelComponent = /** @class */ (function () {
    function VpePanelComponent(vapaee, local, service) {
        this.vapaee = vapaee;
        this.local = local;
        this.service = service;
        this.onResize = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onExpand = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.expanded = !this.initclosed;
        this.hideheader = false;
        this.hidebackground = false;
        this.onResizeSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscriber"](this.triggerResize.bind(this));
    }
    VpePanelComponent.prototype.triggerResize = function (device) {
        this.devicecache = device;
        this.onResize.next(device);
        this.updateBodyMesurements();
    };
    VpePanelComponent.prototype.ngOnChanges = function () {
        this.updateBodyMesurements();
    };
    VpePanelComponent.prototype.ngOnDestroy = function () {
        this.onResizeSubscriber.unsubscribe();
    };
    VpePanelComponent.prototype.updateBodyMesurements = function () {
        // delete this.body.nativeElement.style.height;
        // delete this.body.nativeElement.style.padding;
        // delete this.body.nativeElement.style.width;
    };
    VpePanelComponent.prototype.ngAfterViewInit = function () {
        this.service.onResize.subscribe(this.onResizeSubscriber);
        this.updateBodyMesurements();
    };
    VpePanelComponent.prototype.turn = function (offon) {
        var _this = this;
        // console.log("this.expanded", this.expanded, " -- > ", offon);
        this.expanded = offon;
        if (this.expanded) {
            this.onExpand.next(this.devicecache);
            setTimeout(function (_) {
                _this.body.nativeElement.style.height = "unset";
                // this.body.nativeElement.style.padding = "unset";
                _this.onResize.next(_this.devicecache);
            }, 510);
            /// this.body.nativeElement.style.height = this.bodyh + "px";
            /// this.body.nativeElement.style.padding = this.bodyp + "px";
        }
        else {
            this.bodyh = this.body.nativeElement.offsetHeight;
            this.bodyw = this.body.nativeElement.offsetWidth;
            this.bodyp = parseInt(window.getComputedStyle(this.body.nativeElement, null).getPropertyValue('padding'));
            console.log(this.bodyh, this.bodyp, window.getComputedStyle(this.body.nativeElement, null).getPropertyValue('padding'));
            this.onClose.next(this.devicecache);
            setTimeout(function (_) {
                _this.body.nativeElement.style.height = "0px";
                _this.body.nativeElement.style.paddingTop = "0px";
                _this.body.nativeElement.style.paddingBottom = "0px";
                _this.body.nativeElement.style.paddingLeft = _this.bodyp + "px";
                _this.body.nativeElement.style.paddingRight = _this.bodyp + "px";
            }, 0);
        }
        this.body.nativeElement.style.height = this.bodyh + "px";
        this.body.nativeElement.style.paddingTop = this.bodyp + "px";
        this.body.nativeElement.style.paddingBottom = this.bodyp + "px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('body'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VpePanelComponent.prototype, "body", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpePanelComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelComponent.prototype, "hideheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelComponent.prototype, "hidebackground", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelComponent.prototype, "initclosed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpePanelComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], VpePanelComponent.prototype, "onResize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], VpePanelComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], VpePanelComponent.prototype, "onExpand", void 0);
    VpePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel',
            template: __webpack_require__(/*! ./vpe-panel.component.html */ "./src/app/components/vpe-panel/vpe-panel.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel.component.scss */ "./src/app/components/vpe-panel/vpe-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _vpe_components_service__WEBPACK_IMPORTED_MODULE_4__["VpeComponentsService"]])
    ], VpePanelComponent);
    return VpePanelComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-token-input/vpe-token-input.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-token-input/vpe-token-input.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\" [hidden]=\"button\">\n    <input\n        type=\"text\"\n        class=\"form-control form-control-sm\"\n        [ngClass]=\"{'disabled': disabled}\"\n        (ngModelChange)=\"onChange(ctrl,$event)\"\n        (blur)=\"onBlur(ctrl,$event)\"\n        #ctrl=\"ngModel\"\n        [(ngModel)]=\"text\"\n        onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46\"\n        placeholder=\"{{placeholder}}\"\n    >\n    <div class=\"input-group-append\">\n        <span class=\"input-group-text form-control-sm padding-xs\">{{asset ? asset.token.symbol : ' '}}</span>\n    </div>\n</div>\n\n<div class=\"input-group\" [hidden]=\"!button\">\n    <input\n        type=\"text\"\n        class=\"form-control form-control-sm\"\n        [ngClass]=\"{'disabled': disabled}\"\n        (ngModelChange)=\"onChange(ctrl,$event)\"\n        (blur)=\"onBlur(ctrl,$event)\"\n        #ctrl=\"ngModel\"\n        [(ngModel)]=\"text\"\n        onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46\"\n        placeholder=\"{{placeholder}}\"\n        (keyup.enter)=\"onEnter()\"\n    >\n    <div class=\"input-group-append\">\n        <span class=\"input-group-text form-control-sm padding-xs\">{{asset ? asset.token.symbol : ' '}}</span>\n        <button [hidden]=\"!button\" class=\"action btn btn-sm btn-primary\" type=\"button\" (click)=\"onEnter()\">\n            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n            {{button | titlecase}}\n        </button>\n    </div>\n\n    <div class=\"input-group margin-top\" [hidden]=\"!error\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n            <div class=\"pull-right\">\n                <button type=\"button\" class=\"close text-white\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"error = null\">\n                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                </button>                \n            </div>\n            {{error}}\n        </div>\n    </div>    \n</div>\n"

/***/ }),

/***/ "./src/app/components/vpe-token-input/vpe-token-input.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-token-input/vpe-token-input.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\nbutton.btn.action {\n  border-color: #CCC; }\n"

/***/ }),

/***/ "./src/app/components/vpe-token-input/vpe-token-input.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/vpe-token-input/vpe-token-input.component.ts ***!
  \*************************************************************************/
/*! exports provided: VpeTokenInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeTokenInputComponent", function() { return VpeTokenInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VpeTokenInputComponent = /** @class */ (function () {
    function VpeTokenInputComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.precision = -1;
    }
    VpeTokenInputComponent.prototype.init = function () {
    };
    VpeTokenInputComponent.prototype.updateAsset = function (ctrl, text) {
        try {
            if (this.asset && text.length > 0) {
                var newAsset = new src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"](text + " " + this.asset.token.symbol, this.vapaee);
                this.asset.amount = newAsset.amount;
                this.ngOnChanges();
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    VpeTokenInputComponent.prototype.onEnter = function () {
        var _this = this;
        this.ngOnChanges();
        setTimeout(function (_) {
            _this.valueEnter.emit(_this.asset);
        }, 0);
    };
    VpeTokenInputComponent.prototype.onChange = function (ctrl, text) {
        if (text == "")
            text = "0.0";
        this.updateAsset(ctrl, text);
    };
    VpeTokenInputComponent.prototype.onBlur = function (ctrl, event) {
        this.ngOnChanges();
    };
    VpeTokenInputComponent.prototype.ngOnChanges = function () {
        if (this.asset) {
            var precision = this.asset.token.precision;
            if (this.precision != -1)
                precision = this.precision;
            this.text = this.asset.toString(precision).split(" ")[0];
            if (this.text != this.prev) {
                this.prev = this.text;
                this.valueChange.emit(this.asset);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["Asset"])
    ], VpeTokenInputComponent.prototype, "asset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpeTokenInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VpeTokenInputComponent.prototype, "button", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], VpeTokenInputComponent.prototype, "precision", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpeTokenInputComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VpeTokenInputComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], VpeTokenInputComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpeTokenInputComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VpeTokenInputComponent.prototype, "valueEnter", void 0);
    VpeTokenInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-token-input',
            template: __webpack_require__(/*! ./vpe-token-input.component.html */ "./src/app/components/vpe-token-input/vpe-token-input.component.html"),
            styles: [__webpack_require__(/*! ./vpe-token-input.component.scss */ "./src/app/components/vpe-token-input/vpe-token-input.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
    ], VpeTokenInputComponent);
    return VpeTokenInputComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/account.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-lg-none\">\n\n    <vpe-panel-account-header [current]=\"vapaee.current\"></vpe-panel-account-header>\n\n    <div class=\"row\" [hidden]=\"vapaee.current.name == vapaee.default.name\">\n        <div class=\"col-lg-12\">\n            <vpe-panel-account-resources  [title]=\"local.string.resources\" [hideheader]=\"true\" [current]=\"vapaee.current\"> </vpe-panel-account-resources>\n                \n            <vpe-panel-balance-breakdown [title]=\"local.string.balbreak\" [hideheader]=\"true\" [current]=\"vapaee.current\"></vpe-panel-balance-breakdown>\n\n            <vpe-panel-user-orders [userorders]=\"userorders\" [hideheader]=\"true\" [title]=\"local.string.orders\"></vpe-panel-user-orders>\n\n            <vpe-panel-wallet (confirmWithdraw)=\"onWalletConfirmWithdraw($event)\" (confirmDeposit)=\"onWalletConfirmDeposit($event)\" [error]=\"error\" [loading]=\"loading\" [actions]=\"true\" [hideuser]=\"true\" [hideheader]=\"true\" [title]=\"local.string.wallet\" [deposits]=\"deposits\" [balances]=\"balances\"></vpe-panel-wallet>\n        </div>\n    </div>\n</div>\n\n\n<!-- ---------------------------------------------------------------------------- -->\n\n<div class=\"container d-none d-lg-block\">\n\n    <vpe-panel-account-header [current]=\"vapaee.current\"></vpe-panel-account-header>\n\n    <div class=\"row\" [hidden]=\"vapaee.current.name == vapaee.default.name\">\n        <div class=\"col-lg-6 col-padding-right\">\n            <vpe-panel-account-resources  [title]=\"local.string.resources\" [hideheader]=\"true\" [current]=\"vapaee.current\"> </vpe-panel-account-resources>\n            <vpe-panel-balance-breakdown [title]=\"local.string.balbreak\" [hideheader]=\"true\" [current]=\"vapaee.current\"></vpe-panel-balance-breakdown>\n            <vpe-panel-user-orders (onTableSelected)=\"navigateToTable($event)\" [userorders]=\"userorders\" [hideheader]=\"true\" [title]=\"local.string.orders\"></vpe-panel-user-orders>\n        </div>\n        <div class=\"col-lg-6 col-padding-left\">\n            <vpe-panel-wallet (confirmWithdraw)=\"onWalletConfirmWithdraw($event)\" (confirmDeposit)=\"onWalletConfirmDeposit($event)\" [error]=\"error\" [loading]=\"loading\" [actions]=\"true\" [hideuser]=\"true\" [hideheader]=\"true\" [title]=\"local.string.wallet\" [deposits]=\"deposits\" [balances]=\"balances\"></vpe-panel-wallet>\n        </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/account/account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/account/account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = /** @class */ (function () {
    function AccountPage(app, local, scatter, route, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.vapaee = vapaee;
        this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscriber"](this.onCntCurrentAccountChange.bind(this));
        this.current_mode = true;
    }
    Object.defineProperty(AccountPage.prototype, "deposits", {
        get: function () {
            return this.vapaee.deposits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountPage.prototype, "balances", {
        get: function () {
            return this.vapaee.balances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountPage.prototype, "userorders", {
        get: function () {
            return this.vapaee.userorders;
        },
        enumerable: true,
        configurable: true
    });
    AccountPage.prototype.updateAccount = function () {
    };
    AccountPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    AccountPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("VpeAccountPage.ngOnInit()");
        this.vapaee.onCurrentAccountChange.subscribe(this.subscriber);
        var name = this.route.snapshot.paramMap.get('name');
        setTimeout(function (_) {
            if (!name) {
                name = "guest";
                _this.onCntCurrentAccountChange(name);
            }
            else {
                _this.vapaee.resetCurrentAccount(name);
            }
            ;
            var utils = new src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["Utils"]("", null);
            var encodedName = utils.encodeName(name);
            console.log(name, encodedName.toString());
        }, 0);
    };
    AccountPage.prototype.onCntCurrentAccountChange = function (account) {
        console.log("VaeProfilePage.onCntCurrentAccountChange() ----------------->", account);
        var url = "/exchange/account/";
        if (account) {
            url += account;
        }
        else {
            url += "guest";
        }
        ;
        console.log("accountPage.onCntCurrentAccountChange()", [account], " --> ", url);
        this.app.navigate(url);
    };
    AccountPage.prototype.onWalletConfirmDeposit = function (amount) {
        var _this = this;
        console.log("------------------>", amount.toString());
        this.loading = true;
        this.error = null;
        this.vapaee.deposit(amount).then(function (_) {
            console.log("------------------>", amount.toString());
            _this.loading = false;
        }).catch(function (e) {
            console.error(typeof e, e);
            // this.error = "ERROR: " + JSON.stringify(typeof e == "string" ? JSON.parse(e) : e, null, 4);
            if (typeof e == "string") {
                _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
            }
            else {
                _this.error = null;
            }
            _this.loading = false;
        });
    };
    AccountPage.prototype.onWalletConfirmWithdraw = function (amount) {
        var _this = this;
        console.log("------------------>", amount.toString());
        this.loading = true;
        this.error = null;
        this.vapaee.withdraw(amount).then(function (_) {
            console.log("------------------>", amount.toString());
            _this.loading = false;
        }).catch(function (e) {
            console.error(typeof e, e);
            // this.error = "ERROR: " + JSON.stringify(typeof e == "string" ? JSON.parse(e) : e, null, 4);
            if (typeof e == "string") {
                _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
            }
            else {
                _this.error = null;
            }
            _this.loading = false;
        });
    };
    AccountPage.prototype.navigateToTable = function (event) {
        console.log("-------------->", event);
        this.app.navigate('/exchange/trade/' + event);
    };
    AccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account-page',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/pages/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/pages/account/account.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_7__["VapaeeService"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ }),

/***/ "./src/app/pages/coming-soon/coming-soon.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron vpe-background-jumbotron margin-top-xxl\">\n    <div class=\"container text-center\">\n        <img class=\"img-fluid\" src=\"/assets/img/soon.png\">\n    </div>  \n</div>"

/***/ }),

/***/ "./src/app/pages/coming-soon/coming-soon.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/coming-soon/coming-soon.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.page.ts ***!
  \*******************************************************/
/*! exports provided: ComingSoonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPage", function() { return ComingSoonPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComingSoonPage = /** @class */ (function () {
    function ComingSoonPage(app, local, scatter, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.vapaee = vapaee;
    }
    ComingSoonPage.prototype.ngOnDestroy = function () {
    };
    ComingSoonPage.prototype.ngOnInit = function () {
    };
    ComingSoonPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coming-soon-page',
            template: __webpack_require__(/*! ./coming-soon.page.html */ "./src/app/pages/coming-soon/coming-soon.page.html"),
            styles: [__webpack_require__(/*! ./coming-soon.page.scss */ "./src/app/pages/coming-soon/coming-soon.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__["VapaeeService"]])
    ], ComingSoonPage);
    return ComingSoonPage;
}());



/***/ }),

/***/ "./src/app/pages/common.page.scss":
/*!****************************************!*\
  !*** ./src/app/pages/common.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: calc(100% - 51px);\n  display: block;\n  overflow: auto;\n  position: relative; }\n\n@media (min-width: 576px) {\n  :host {\n    height: calc(100% - 51px); } }\n\n@media (min-width: 768px) {\n  :host {\n    height: calc(100% - 51px); } }\n\n@media (min-width: 992px) {\n  :host {\n    height: calc(100% - 55.8px); } }\n\n@media (min-width: 1200px) {\n  :host {\n    height: calc(100% - 57px); } }\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron vpe-background-jumbotron margin-top-xxl\">\n    <div class=\"container text-center\">\n        <img class=\"img-fluid\" src=\"/assets/img/Logo.png\">\n    </div>    \n    <div class=\"container margin-top text-lg text-center\">\n        <div>Tokens Exchange - Telos DEX</div>\n    </div>    \n    <div class=\"container margin-top text-xs text-muted text-center\">\n        <div>BASIC (v1.6.1)</div>\n    </div>    \n</div>\n<div class=\"container margin-top\">\n    <vpe-panel-tokens-card-deck (tradeToken)=\"tradeToken($event)\" [limit]=\"3\" [hidebackground]=\"true\" [hideheader]=\"true\" [tokens]=\"tokens\"></vpe-panel-tokens-card-deck>\n</div>\n\n<div class=\"container margin-top-lg\">\n    <vpe-panel-activity-log (gotoAccount)=\"gotoAccount($event)\" (gotoScope)=\"gotoScope($event)\"></vpe-panel-activity-log>\n</div>\n\n<br>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(app, local, scatter, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.vapaee = vapaee;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.vapaee.updateActivity();
        this.timer = window.setInterval(function (_) { _this.vapaee.updateActivity(); }, 30000);
    };
    HomePage.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    Object.defineProperty(HomePage.prototype, "tokens", {
        get: function () {
            return this.vapaee.tokens;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.tradeToken = function (token) {
        this.app.navigate('/exchange/trade/' + token.symbol.toLowerCase() + '.tlos');
    };
    HomePage.prototype.gotoAccount = function (name) {
        this.app.navigate('/exchange/account/' + name);
    };
    HomePage.prototype.gotoScope = function (scope) {
        this.app.navigate('/exchange/trade/' + scope);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__["VapaeeService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-grow-1 align-self-center justify-content-center\">\n    <h1 class=\"animated fadeIn mb-4\">{{local.string.code404}}</h1>\n</div>"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100vh;\n  background-color: black;\n  color: white; }\n\n.flex-center.flex-column {\n  flex-grow: 1; }\n\n.animated {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundPage = /** @class */ (function () {
    function NotFoundPage(app, local) {
        this.app = app;
        this.local = local;
    }
    NotFoundPage.prototype.ngOnInit = function () {
        console.log("NOT FOUND 404: ", window.location.href);
    };
    NotFoundPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found-page',
            template: __webpack_require__(/*! ./not-found.page.html */ "./src/app/pages/not-found/not-found.page.html"),
            styles: [__webpack_require__(/*! ./not-found.page.scss */ "./src/app/pages/not-found/not-found.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ }),

/***/ "./src/app/pages/root/root.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/root/root.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar vpe-background-navbar drop-shadow navbar-expand-lg navbar-dark bg-primary\" (click)=\"collapseMenu()\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"http://cardsandtokens.com\" target=\"_blank\">\n            <img src=\"/assets/img/cards-and-tokens.png\" alt=\"\" class=\"cnt-logo\">\n        </a>        \n        \n        <div class=\"flex-grow-1\">\n            <div class=\"fb-like-container\">\n                <!--div class=\"fb-like fb_iframe_widget\" data-href=\"https://www.facebook.com/cardsandtokens\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"false\" fb-xfbml-state=\"rendered\" fb-iframe-plugin-query=\"action=like&amp;app_id=294648343906769&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=false\"><span style=\"vertical-align: bottom; width: 100px; height: 20px;\"><iframe name=\"f7e211683f293c\" width=\"1000px\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\" allow=\"encrypted-media\" title=\"fb:like Facebook Social Plugin\" src=\"https://www.facebook.com/v2.5/plugins/like.php?action=like&amp;app_id=294648343906769&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Dfdbcae6fad0228%26domain%3Dpresale.cardsandtokens.com%26origin%3Dhttp%253A%252F%252Fpresale.cardsandtokens.com%252Ff2aab638e0f2e3%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false\" style=\"border: none; visibility: visible; width: 100px; height: 20px;\" class=\"\"></iframe></span></div-->\n            </div>\n        </div>\n\n        <button class=\"navbar-toggler margin-xs\" id=\"toggle-btn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>        \n\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('home')}\">\n                    <a class=\"nav-link\" routerLink=\"{{'/exchange/home'}}\" >{{local.string.Home}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('tokens')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/exchange/tokens'\" >{{local.string.Tokens}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('trade')}\">\n                    <a class=\"nav-link\" routerLink=\"{{'/exchange/trade/' + (app.getGlobal('last-market') || 'cnt.tlos') }}\" >{{local.string.Trade}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('account')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/exchange/account/' + vapaee.current.name\" >{{local.string.Account}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('wp')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/exchange/wp'\" >WP</a>\n                </li>\n               <!-- \n                <li class=\"nav-item\">\n                    <a class=\"nav-link cursor-pointer\" (click)=\"debug()\">DEBUG</a>\n                </li>\n                -->\n                <li class=\"nav-item dropdown\" ngbDropdown>\n                    <a ngbDropdownToggle class=\"nav-link dropdown-toggle cursor-pointer\" data-toggle=\"dropdown\" id=\"language\">{{local.string.Language}} <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"language\">\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('en_US'); debug();\">English</span>\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('es_ES'); debug();\">Español</span>\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('pt_BR'); debug();\">Português</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/root/root.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/root/root.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%; }\n\n.cnt-logo {\n  height: 37px; }\n\n.fb-like-container {\n  margin-top: 5px; }\n\n.navbar-brand {\n  border-right-width: 0px; }\n\n.navbar-brand {\n  padding: 5px 20px 5px 10px; }\n\n.navbar {\n  z-index: 10;\n  background: #3a3a3a;\n  background: linear-gradient(to bottom, #3a3a3a 0%, #545454 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a3a3a', endColorstr='#545454',GradientType=0 ); }\n"

/***/ }),

/***/ "./src/app/pages/root/root.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/root/root.page.ts ***!
  \*****************************************/
/*! exports provided: RootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPage", function() { return RootPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_components_vpe_components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/vpe-components.service */ "./src/app/components/vpe-components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RootPage = /** @class */ (function () {
    function RootPage(app, local, elRef, scatter, vapaee, components) {
        this.app = app;
        this.local = local;
        this.elRef = elRef;
        this.scatter = scatter;
        this.vapaee = vapaee;
        this.components = components;
    }
    RootPage.prototype.ngOnInit = function () {
        var network = "telos-testnet";
        network = "telos";
        // network = "eos";
        // network = "local";
        if (this.scatter.network.slug != network || !this.scatter.connected) {
            this.scatter.setNetwork(network);
            this.scatter.connectApp("Vapaée - Telos DEX").catch(function (err) { return console.error(err); });
        }
    };
    RootPage.prototype.collapseMenu = function () {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    };
    RootPage.prototype.debug = function () {
        console.log("--------------------------------");
        console.log("VPE", [this.vapaee]);
        console.log("Scatter", [this.scatter]);
        console.log("Components", [this.components]);
        console.log("--------------------------------");
    };
    RootPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-page',
            template: __webpack_require__(/*! ./root.page.html */ "./src/app/pages/root/root.page.html"),
            styles: [__webpack_require__(/*! ./root.page.scss */ "./src/app/pages/root/root.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__["VapaeeService"],
            src_app_components_vpe_components_service__WEBPACK_IMPORTED_MODULE_5__["VpeComponentsService"]])
    ], RootPage);
    return RootPage;
}());



/***/ }),

/***/ "./src/app/pages/tokens/tokens.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/tokens/tokens.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card text-white bg-dark margin-top-md\">\n        <div class=\"card-header vpe-background-card-header\">\n            <h1><img style=\"height:32px; width: 32px;\" src=\"/assets/logos/telos.png\"> Telos tokens</h1>\n        </div>\n    </div>\n\n    <vpe-panel-tokens-card-deck (tradeToken)=\"tradeToken($event)\" [hidebackground]=\"true\" [hideheader]=\"true\" [tokens]=\"tokens\"></vpe-panel-tokens-card-deck>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/tokens/tokens.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/tokens/tokens.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".token-card {\n  min-width: 220px; }\n"

/***/ }),

/***/ "./src/app/pages/tokens/tokens.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tokens/tokens.page.ts ***!
  \*********************************************/
/*! exports provided: TokensPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensPage", function() { return TokensPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokensPage = /** @class */ (function () {
    function TokensPage(app, local, scatter, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.vapaee = vapaee;
    }
    Object.defineProperty(TokensPage.prototype, "tokens", {
        get: function () {
            return this.vapaee.tokens;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokensPage.prototype, "scopes", {
        get: function () {
            return this.vapaee.scopes;
        },
        enumerable: true,
        configurable: true
    });
    /*
    summary(_scope) {
        console.error("DEPRECATED");
        var scope = this.scopes[_scope];
        var _summary = Object.assign({
            percent: 0,
            percent_str: "0%",
            price: this.vapaee.zero_telos.clone(),
            records: [],
            volume: this.vapaee.zero_telos.clone()
        }, scope ? scope.summary : {});
        return _summary;
    }
    */
    TokensPage.prototype.tradeToken = function (token) {
        this.app.navigate('/exchange/trade/' + token.symbol.toLowerCase() + '.tlos');
    };
    TokensPage.prototype.ngOnDestroy = function () {
    };
    TokensPage.prototype.ngOnInit = function () {
    };
    TokensPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tokens-page',
            template: __webpack_require__(/*! ./tokens.page.html */ "./src/app/pages/tokens/tokens.page.html"),
            styles: [__webpack_require__(/*! ./tokens.page.scss */ "./src/app/pages/tokens/tokens.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__["VapaeeService"]])
    ], TokensPage);
    return TokensPage;
}());



/***/ }),

/***/ "./src/app/pages/trade/trade.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/trade/trade.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-top\">\n    <!--\n    <div class=\"row\">\n        <div class=\"col\">\n            <vpe-panel-chart></vpe-panel-chart>\n        </div>\n    </div>\n    -->\n    \n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-header vpe-background-card-header padding\">\n            <div class=\"row\">\n                <div class=\"col-sm-4 col-md-3 col-padding-right margin-top\">\n                    \n                </div>\n                <div class=\"col-sm-8 col-md-9 col-padding-left margin-top\">\n                    <span class=\"text-xl\">\n                        <img style=\"height:40px; width: 40px; margin-top:-6px\" [src]=\"comodity ? comodity.logolg : '#'\">\n                        <span> {{comodity ? comodity.appname : local.string.loading}} </span>\n                        <small class=\"text-muted\">({{scope}})</small>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-md-3  col-padding-right\">\n            <vpe-panel-tokens [tokens]=\"tokens\" [scopes]=\"scopes\" (selectToken)=\"selectToken($event)\"></vpe-panel-tokens>\n            <vpe-panel-wallet [deposits]=\"deposits\" [balances]=\"balances\" (confirmWithdraw)=\"onWalletConfirmWithdraw($event)\" (confirmDeposit)=\"onWalletConfirmDeposit($event)\" (gotoAccount)=\"gotoAccount()\" [error]=\"error\" [loading]=\"loading\" [actions]=\"true\"></vpe-panel-wallet>\n        </div>\n        <div class=\"col-sm-8 col-md-9 col-padding-left\">\n            <vpe-panel-chart [data]=\"chartData\"></vpe-panel-chart>\n            <vpe-panel-order-editor [hidden]=\"!vapaee.logged\" #orderform [deposits]=\"deposits\" [comodity]=\"comodity\" [currency]=\"currency\" [buyorders]=\"buyorders\" [sellorders]=\"sellorders\" [owner]=\"vapaee.logged\"></vpe-panel-order-editor>\n            <div class=\"row\">\n                <div class=\"col-sm-8 col-md-9 col-padding-right\">\n                    <vpe-panel-orders (onClickRow)=\"onClickRow($event)\" (onClickPrice)=\"onClickPrice($event)\" [headers]=\"headers\" [iheaders]=\"iheaders\" [orders]=\"orders\"></vpe-panel-orders>\n                </div>\n                <div class=\"col-sm-4 col-md-3 col-padding-left\">\n                    <vpe-panel-history [scope]=\"comodity ? comodity.scope : ''\" [history]=\"history\"></vpe-panel-history>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/pages/trade/trade.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/trade/trade.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/trade/trade.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/trade/trade.page.ts ***!
  \*******************************************/
/*! exports provided: TradePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradePage", function() { return TradePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TradePage = /** @class */ (function () {
    function TradePage(app, local, scatter, vapaee, route) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.vapaee = vapaee;
        this.route = route;
        this.loading = false;
        this.error = "";
        this._orders = { sell: [], buy: [] };
        this.onStateSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscriber"](this.onStateChange.bind(this));
        this.onBlocklistSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscriber"](this.onBlocklistChange.bind(this));
    }
    TradePage.prototype.updateAll = function (updateUser) {
        return __awaiter(this, void 0, void 0, function () {
            var com, cur, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.scope = this.route.snapshot.paramMap.get('scope');
                        com = this.scope.split(".")[0];
                        cur = this.scope.split(".")[1];
                        _a = this;
                        return [4 /*yield*/, this.vapaee.getToken(com)];
                    case 1:
                        _a.comodity = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.vapaee.getToken(cur)];
                    case 2:
                        _b.currency = _c.sent();
                        this.vapaee.updateTrade(this.comodity, this.currency, updateUser);
                        this.app.setGlobal("last-market", this.scope);
                        return [2 /*return*/];
                }
            });
        });
    };
    TradePage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // console.log("TradePage.init() <-- ");
                this.orderform ? this.orderform.reset() : null;
                this.comodity = null;
                this.currency = null;
                this._chartData = [];
                setTimeout(function (_) { _this.updateAll(true); }, 0);
                this.timer = window.setInterval(function (_) { _this.updateAll(false); }, 15000);
                return [2 /*return*/];
            });
        });
    };
    TradePage.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log("TradePage.destroy() <-- ");
                clearInterval(this.timer);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(TradePage.prototype, "deposits", {
        get: function () {
            return this.vapaee.deposits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "balances", {
        get: function () {
            return this.vapaee.balances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "history", {
        get: function () {
            var scope = this.vapaee.scopes[this.scope];
            return scope ? scope.history : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "orders", {
        get: function () {
            var scope = this.vapaee.scopes[this.scope];
            return scope ? scope.orders : this._orders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "buyorders", {
        get: function () {
            var scope = this.vapaee.scopes[this.scope];
            return scope ? scope.orders.buy : this._orders.buy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "sellorders", {
        get: function () {
            var scope = this.vapaee.scopes[this.scope];
            return scope ? scope.orders.sell : this._orders.sell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "headers", {
        get: function () {
            var scope = this.vapaee.scopes[this.scope];
            var header = {
                sell: { total: null, orders: 0 },
                buy: { total: null, orders: 0 }
            };
            return scope ? (scope.header ? scope.header : header) : header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "iheaders", {
        get: function () {
            var scope = this.vapaee.scopes[this.vapaee.inverseScope(this.scope)];
            var header = {
                sell: { total: null, orders: 0 },
                buy: { total: null, orders: 0 }
            };
            return scope ? (scope.header ? scope.header : header) : header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "summary", {
        get: function () {
            var scope = this.vapaee.scopes[this.scope];
            var _summary = Object.assign({
                percent: 0,
                percent_str: "0%",
                price: this.vapaee.zero_telos.clone(),
                records: [],
                volume: this.vapaee.zero_telos.clone()
            }, scope ? scope.summary : {});
            return _summary;
            // return scope ? (scope.summary ? scope.summary : _summary) : _summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "chartData", {
        get: function () {
            if (!this._chartData)
                this.regenerateChartData();
            return this._chartData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "scopes", {
        get: function () {
            return this.vapaee.scopes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradePage.prototype, "tokens", {
        get: function () {
            return this.vapaee.tokens;
        },
        enumerable: true,
        configurable: true
    });
    TradePage.prototype.regenerateChartData = function () {
        if (this.vapaee.scopes[this.scope]) {
            // console.log("-----------------------------------------");
            // console.log(this.scope, this.vapaee.scopes[this.scope].blocklist);
            // console.log("-----------------------------------------");
            this._chartData = this.vapaee.scopes[this.scope].blocklist;
            // console.log("this._chartData", this._chartData);
        }
        else {
            // console.error("No existe todavía el scope ", this.scope);
        }
    };
    TradePage.prototype.ngOnDestroy = function () {
        this.onStateSubscriber.unsubscribe();
        this.onBlocklistSubscriber.unsubscribe();
        this.destroy();
    };
    TradePage.prototype.ngOnInit = function () {
        this.init();
        this.app.onStateChange.subscribe(this.onStateSubscriber);
        this.vapaee.onBlocklistChange.subscribe(this.onBlocklistSubscriber);
    };
    TradePage.prototype.onClickRow = function (e) {
        // console.log("**************** onClickRow", e);
        this.orderform.setPrice(e.row.price.clone());
        this.orderform.setAmount(e.row.sum.clone());
        this.orderform.wantsTo(e.type == "sell" ? "buy" : "sell");
    };
    TradePage.prototype.onClickPrice = function (e) {
        // console.log("**************** onClickPrice", e);
        this.orderform.setPrice(e.row.price.clone());
    };
    TradePage.prototype.onStateChange = function (state) {
        // console.log("TradePage.onStateChange("+state+")");
        if (state == "trade") {
            this.destroy();
            this.init();
        }
    };
    TradePage.prototype.onBlocklistChange = function (blocks) {
        // console.log("TradePage.onBlocklistChange()",blocks);
        this.regenerateChartData();
    };
    // wallet actions 
    TradePage.prototype.onWalletConfirmDeposit = function (amount) {
        var _this = this;
        console.log("------------------>", amount.toString());
        this.loading = true;
        this.error = null;
        this.vapaee.deposit(amount).then(function (_) {
            console.log("------------------>", amount.toString());
            _this.loading = false;
        }).catch(function (e) {
            console.error(typeof e, e);
            // this.error = "ERROR: " + JSON.stringify(typeof e == "string" ? JSON.parse(e) : e, null, 4);
            if (typeof e == "string") {
                _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
            }
            else {
                _this.error = null;
            }
            _this.loading = false;
        });
    };
    TradePage.prototype.onWalletConfirmWithdraw = function (amount) {
        var _this = this;
        console.log("------------------>", amount.toString());
        this.loading = true;
        this.error = null;
        this.vapaee.withdraw(amount).then(function (_) {
            console.log("------------------>", amount.toString());
            _this.loading = false;
        }).catch(function (e) {
            console.error(typeof e, e);
            // this.error = "ERROR: " + JSON.stringify(typeof e == "string" ? JSON.parse(e) : e, null, 4);
            if (typeof e == "string") {
                _this.error = "ERROR: " + JSON.stringify(JSON.parse(e), null, 4);
            }
            else {
                _this.error = null;
            }
            _this.loading = false;
        });
    };
    TradePage.prototype.gotoAccount = function () {
        this.app.navigate('/exchange/account/' + this.vapaee.current.name);
    };
    TradePage.prototype.selectToken = function (scope) {
        this.app.navigate('/exchange/trade/' + scope);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_7__["VpePanelOrderEditorComponent"]),
        __metadata("design:type", src_app_components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_7__["VpePanelOrderEditorComponent"])
    ], TradePage.prototype, "orderform", void 0);
    TradePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trade-page',
            template: __webpack_require__(/*! ./trade.page.html */ "./src/app/pages/trade/trade.page.html"),
            styles: [__webpack_require__(/*! ./trade.page.scss */ "./src/app/pages/trade/trade.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_5__["VapaeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TradePage);
    return TradePage;
}());



/***/ }),

/***/ "./src/app/pages/wp/wp.page.html":
/*!***************************************!*\
  !*** ./src/app/pages/wp/wp.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-lg container\">\n    <div class=\"row\">\n        <div class=\"col\">\n\n\n            <div class=\"card text-white bg-dark vpe-background-panel margin-top\">\n                <div class=\"card-body padding-lg\">\n                        \n    \n                    <div class=\"margin-top-lg\">\n                        <div class=\"row\">\n                            <div class=\"col text-center\">\n                                <img src=\"/assets/img/vapaee-telos-dex-shadow.png\" style=\"max-width:100%;\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col text-center text-md\" id=\"vapaée---worker-proposal-2\" >\n                                Vapaée - worker proposal 2\n                            </div>\n                        </div>\n                        <div class=\"row margin-top\">\n                            <div class=\"col text-center text-xl\" id=\"financing-the-development-of-dex-vapaeeio-and-the-production-of-its-review-video\" >\n                                Financing Vapaee.io DEX development <span strike>and its review video.</span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"line\">\n\n\n                    <!--div class=\"margin-top-lg\">\n                        user: {{vapaee.current.name|json}}<br>\n                        user_is_registered: {{user_is_registered|json}}<br>\n                        user_voted_us: {{user_voted_us|json}}<br>\n                    </div-->\n\n                    <div class=\"margin-top\">\n                        <div class=\"row margin-top\">\n                            <div class=\"col-sm-12\" [hidden]=\"!feed.error('voting')\">\n                                <div class=\"alert alert-danger\">\n                                    <div class=\"pull-right\">\n                                        <button type=\"button\" class=\"close text-white\" (click)=\"resetError()\">\n                                            <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                        </button>\n                                    </div>\n                                    {{feed.error(\"voting\")}}\n                                </div>\n                            </div>                                 \n                            <div class=\"col-sm-12 margin-top\" [hidden]=\"!this.user_voted_us || this.user_dismiss\">\n                                <div class=\"alert alert-success text-center text-md\" role=\"alert\">\n                                    <div class=\"pull-right\">\n                                        <button type=\"button\" class=\"close text-white\" data-dismiss=\"alert\" (click)=\"dismiss()\">\n                                            <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                        </button>                \n                                    </div>\n                                    <b>Thank you for supporting this proposal !!</b>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 text-center margin-top-lg\" [hidden]=\"this.user_voted_us || feed.loading('voting')\">\n                                <button type=\"button\" class=\"btn btn-warning text-md\" (click)=\"voteForUs()\">\n                                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!feed.loading('user-voted')\"></span>\n                                    <span>Please, support this project !!</span>\n                                </button>\n                            </div>\n\n                            <div class=\"col-sm-12 text-center margin-top-lg\" [hidden]=\"this.user_voted_us || !feed.loading('voting')\">\n                                <div class=\"alert alert-info text-left text-md\" role=\"alert\">\n                                    <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-logged'}\" [hidden]=\"vapaee.current.data.total_balance\">\n                                        <div class=\"pull-right text-center\">\n                                            <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                                                {{local.string.LoginWScatter}}\n                                            </span>\n                                        </div>\n                                        <span>{{local.string.NotLogged}}</span>\n                                    </div>                                    \n                                    <span class=\"nowrap\"> Step 1: Register voter\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!feed.loading('regvoter')\"></span>\n                                        <span [hidden]=\"feed.loading('regvoter')\">\n                                            <i style=\"vertical-align: sub;\" class=\"material-icons\"> check </i>\n                                        </span>\n                                    </span><br>\n                                    <span class=\"nowrap\"> Step 2: Update voting power\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!feed.loading('mirrorcast')\"></span>\n                                        <span [hidden]=\"feed.loading('mirrorcast')\">\n                                            <i style=\"vertical-align: sub;\" class=\"material-icons\"> check </i>\n                                        </span>\n                                    </span><br>\n                                    <span class=\"nowrap\"> Step 3: Vote for this project\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!feed.loading('voting')\"></span>\n                                    </span><br>                                    \n                                </div>\n                            </div>                            \n                        </div>\n                    </div>\n\n                    <!--div class=\"margin-top-lg\">\n                        <pre>{{feed.scopes|json}}</pre>\n                    </div-->\n\n                    <div class=\"margin-top-lg\">                      \n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-sm\" id=\"intro\">\n                                <strong>Note:</strong> if you prefer a version of this same document in black text with a white background,\n                                you can read it from <a href=\"https://github.com/vapaee/worker-proposal-2-Vapaee.io-DEX-and-review-video\" target=\"_blanck\">this page on github.</a>\n                            </div>\n                        </div>\n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-lg\" id=\"intro\">\n                                Intro\n                            </div>\n                        </div>\n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-sm\">\n                                <p>Hello, everybody. My name is <a target=\"_blank\"\n                                    href=\"https://steemit.com/introduceyourself/@viterbo/i-am-an-entrepreneur-and-i-m-going-to-build-a-dapp-over-eos\"\n                                    target=\"_blank\">Viterbo</a> and if you don't know me already from the Telegram Telos groups, I'm responsible for the\n                                    <a target=\"_blank\" href=\"http://cardsandtokens.com\" target=\"_blank\">Cards &amp; Tokens</a> platform that will run on Telos,\n                                    and also I'm the creator of <a target=\"_blank\" href=\"https://vapaee.io\" target=\"_blank\">Vapaée.io</a> Telos first DEX already deployed on\n                                    the main net (in an alpha version with fake tokens to test without risks).<br>\n                                    Please <a target=\"_blank\" href=\"https://vapaee.io/exchange/account/\" target=\"_blank\">login with scatter</a> and try it.</p>\n                                \n                                <p>This <a target=\"_blank\" href=\"https://vapaee.io\" target=\"_blank\">Vapaée.io</a> DEX was planned as a submodule of the <a\n                                    href=\"http://cardsandtokens.com\" target=\"_blank\">Cards &amp; Tokens</a> platform (that covers the \"Tokens\" part)\n                                    and bring a lot of token services to other Dapps and users (including token exchange). Although it had low priority,\n                                    <a target=\"_blank\" href=\"https://steemit.com/telos/@viterbo/vapaee-first-telos-dex\" target=\"_blank\">something made me change my\n                                    mind</a> and I decide to start on this module.</p>\n                                \n                            </div>\n                        </div>\n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-lg\" id=\"budget-summary\">\n                                Budget Summary\n                            </div>\n                        </div>\n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-sm\">\n                                <p>This worker proposal is for <strong>3 cycles of 140K TLOS each</strong>. <span strike>Only 30K of the first cycle will be sold\n                                    in the market. The rest will remain as a future personal investment and, hopefully, will never be sold,\n                                    but used as currency.</span></p>\n                                <ul>\n                                    <li class=\"checked subtitle\">\n                                        <p><strong>Cycle 1</strong> - 140K TLOS</p>\n                                        <ul>\n                                            <li class=\"checked\">Development of the <strong>Premium</strong> version of <a target=\"_blank\" href=\"https://vapaee.io\"\n                                                target=\"_blank\">Vapaée.io</a></li>\n                                            <li class=\"checked\">30K TLOS will be returned to the eosio.saving account because of impossibility to make the promised review video</li>\n                                            <li><span strike>Plus one review video of <a target=\"_blank\" href=\"http://cardsandtokens.com\" target=\"_blank\">Cards &amp; Tokens</a>, <a\n                                                href=\"https://vapaee.io\" target=\"_blank\">Vapaée.io</a> and Telos blockchain by <a\n                                                href=\"https://www.youtube.com/channel/UCpceefaJ9vs4RYUTsO9Y3FA\" target=\"_blank\">Louis Thomas</a> from the UK.</span>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"margin-top\">\n                                        <p><strong>Cycle 2</strong> - 140K TLOS</p>\n                                        <ul>\n                                            <li>Development of the <strong>Deluxe</strong> version of <a target=\"_blank\" href=\"https://vapaee.io\"\n                                                target=\"_blank\">Vapaée.io</a></li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"margin-top\">\n                                        <p><strong>Cycle 3</strong> - 140K TLOS</p>\n                                        <ul>\n                                            <li>Develoment and delivery of the <strong>Golden</strong> final version of <a target=\"_blank\" href=\"https://vapaee.io\"\n                                                target=\"_blank\">Vapaée.io</a></li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                \n                \n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-lg\" id=\"versions\">\n                                Versions\n                            </div>\n                        </div>\n                \n                \n                        <div class=\"row\">\n                            <div class=\"col text-justify text-sm\">\n                \n                                <p>I separated the hole development of the <a target=\"_blank\" href=\"https://vapaee.io\" target=\"_blank\">Vapaée.io</a> DEX in four\n                                    different parts: <strong>Basic</strong>, <strong>Premium</strong>, <strong>Deluxe</strong>, and <strong>Golden</strong>.</p>\n                                    <p>The <strong>Basic</strong> version is the one that is already up and running on Telos MainNet (although it's\n                                    missing a couple of features). This version is my way to say <span class=\"text-success\"><strong>THANK YOU, Telos community!!</strong></span>\n                                    And at the same time, return the value that you already had given to me with the approval of my last WP <a\n                                        href=\"https://chainspector.io/dashboard/worker-proposals/7\" target=\"_blank\">(number #7)</a>. So I will finish this <strong>Basic</strong>\n                                        version independently if this current WP is approved or not.<br>\n                                        You will get a finished DEX, I think I owe you that.</p>\n                                    <p>For the <strong>Premium</strong>, <strong>Deluxe</strong>, and <strong>Golden</strong> versions, you will be able to choose if you want them separately.\n                                        If you approve this WP, you will get the next version upgrade. If not, I will go back to work on the \"Cards\" part of the\n                                         <a target=\"_blank\" href=\"http://cardsandtokens.com\" target=\"_blank\">Cards &amp; Tokens</a> platform.</p>\n                                    <ul>\n\n\n\n                                    <li class=\"margin-top-lg checked title\">\n                                        <p><span class=\"text-lg \"><strong>Basic</strong> (v1.x.x)</span><br>\n                                            This one is already deployed and ready to test. It only requires 2 more important features such as trading\n                                            history chart and Sqrl wallet support. The rest is already up and running on Telos main net.\n                                            The completion of this version does not depend on the approval of this worker proposal.\n                                            <strong>I will finish it because we need it</strong>.<br>\n                                        This verison includes:</p>\n                                        <ul>\n                                        <li class=\"checked\"><strong>Test period</strong>: currently there is a testing period when you can use fake Tokens to try this DEX without using real ones.</li>\n                                        <li class=\"checked\"><strong>No restrictions</strong>: all standard tokens on Telos network will be listed (with the exception of FLAME), and no restriction will exist to list new ones.</li>\n                                        <li class=\"checked\"><strong>Orders</strong>: users already can create trade-orders or match existing ones to trade tokens for TLOS, p2p with another Telos user using the <strong>vapaeetokens</strong> contract as DEX.</li>\n                                        <li class=\"checked\"><strong>Chart</strong>: an appropriate chart will be implemented to display graphically the trading transaction history of any token.</li>\n                                        <li class=\"checked\"><strong>Sqrl support</strong>: actually only Scatter is supported. I will add Sqrl support too.</li>\n                                        </ul>\n                                    </li>\n\n\n\n                                    <li class=\"margin-top-lg\">\n                                        <p><span class=\"text-lg\"><strong>Premium</strong> (v2.x.x)</span><br>\n                                            This one is a refined and more polished version than the previous one, which includes basically a lot\n                                            of work in the presentation layer or the front-end, that in this case would be the website. In this cycle, I have\n                                            included a separated work of a review video by <a\n                                            href=\"https://www.youtube.com/channel/UCpceefaJ9vs4RYUTsO9Y3FA\" target=\"_blank\">Louis Thomas</a>.<br>\n                                        This version includes:</p>\n                                        <ul>\n                                        <li><strong>Responsive Design</strong>: currently the trade page has a lot of components on stage at the same time,\n                                            and they all do not fit when the screen is lower than full-HD. I will create a better and more responsive design\n                                            for this page (and the other pages too). In fact, I will make it work as a <a\n                                            href=\"https://www.youtube.com/watch?v=fuhAmUpEEHA\" target=\"_blank\">PWA (Progresive Web Application)</a> to\n                                            fit on cell phone screens.</li>\n                                        <li class=\"checked\"><strong>Last 24h info</strong>: add more information about the token movement of the last 24h\n                                             (like min price, max price, transactions count).</li>\n                                        <li class=\"checked\"><strong>Prices in TLOS/USD/XXX</strong>: Display all prices of all tokens in your preferred currency.\n                                            You will have a combo box to choose your preferred currency and all the prices will be expressed in that currency.\n                                            The list will include TLOS, EOS, BTC, ETH, USD, EUR, etc.</li>\n                                        <li><strong>Activity feedback</strong>: display feedback on DEX activity on the home page (how many users,\n                                            transactions per day, deposits, withdraws, earnings, etc).</li>\n                                        <li><span strike><strong>REVIEW VIDEO</strong>: work in coordination with <a\n                                            href=\"https://www.youtube.com/channel/UCpceefaJ9vs4RYUTsO9Y3FA\" target=\"_blank\">Louis Thomas</a> to make a\n                                            review video of this project and the Telos itself.</span></li>\n                                        </ul>\n                                    </li>\n\n\n\n                                    <li class=\"margin-top-lg\">\n                                        <p><span class=\"text-lg\"><strong>Deluxe</strong> (v3.x.x)</span><br>\n                                            This advanced version aims to have an independent software, managed by its own users (and not so much by me).\n                                            Again, there will be a lot of work in the interface but also modifications in the contract to be able to support these features.<br>\n                                        This version includes:</p>\n                                        <ul>\n                                        <li><strong>Free to join</strong>: The contract <strong>vapaeetokens</strong> already admit anyone to create\n                                            and/or register any standard token on Telos but the website has no interface for that. I will create\n                                            a very intuitive page to create a new token on the <strong>vapaeetoken</strong> smart contract or register\n                                            an existing one along with all the token info. All registered tokens will get listed in the exchange automatically.</li>\n                                        <li><strong>Token info page</strong>: each token will have its own page with all its info (title, description,\n                                            links, video, contacts, transaction history, top N holders, etc). This information will be submitted and maintained\n                                            by each token's manager. In this Token page I will add a basic form to execute standard token's actions like\n                                            \"transfer\", \"issue\", \"claim\", \"open\", \"close\", \"retire\", etc.</li>\n                                        <li><strong>Timezone</strong>: currently the time displayed for the transactions is the blockchain date time. I will implement\n                                            an easy way to set the user's local timezone to display the date times in local time. In fact, I will\n                                            make the website to detect and set automatically the local timezone for the user.</li>\n                                        <li><strong>Invert tokens pair</strong>: something that I came across when I developed the first version is that you \n                                            can see a sell-order (you have X and wants to sell it for Y) as an inverse of a buy-order (where you have X and\n                                            wants to use it as payment for Y). It's the same trade but with two different points of view. The smart contract \n                                            already models the trading market this way. Now I can implement a button, that if you press it, you will invert the \n                                            XXX / YYY trading pair for YYY / XXX, and all the buy-orders will convert to sell-orders and the opposite will happen \n                                            with the sell-orders.<br>\n                                            At this time we may have IBC running and we may have an EOS representative token on Telos network that can be \n                                            added to this DEX. Then you will be able to see the TLOS being priced in EOS and vice versa in Vapaée.io.</li>\n                                        <li><strong>Trade any pair</strong>: currently, all trading pairs have TLOS as currency and the other token as a commodity.\n                                            For this <strong>Deluxe</strong> version, anyone will be able to create a new market buy simply create an order (requiring token X\n                                            and offering token Y). This feature will be especially useful when we have EOS representative token on Telos or even a\n                                            new stable coin (based on the dollar, for example).</li>\n                                        <li><strong>Contract Events</strong>: to be a really useful tool, all Dapps owning any token being traded in this\n                                            DEX should be able to 'react' when any event involving its token occurs. eg: deposits, withdraws, order, transaction, etc.\n                                            So the <strong>vapaeetokens</strong> smart contract should be modified to send a signal to the Dapp contract owning\n                                            the token involved in the event.<br>\n                                            This will allow, for example, the current Telos voting system to update your \"voting power\" taking in account your\n                                            deposits and earnings in the DEX, without you to actually having to withdraw your TLOS for that.</li>\n                                        <li><strong>Skins</strong>: I will create a skin system and will add a few different skins for you to choose.</li>\n                                        </ul>\n                                    </li>\n\n\n\n                                    <li class=\"margin-top-lg\">\n                                        <p><span class=\"text-lg\"><strong>Golden</strong> (v4.x.x)</span><br>\n                                            This last version will include two new major token related features plus a proper final product \n                                            delivery. It will require big tech changes on the smart contract and a lot of work on tutorials, \n                                            source code preparation and documentation. If you support this WP until this final stage, we all\n                                             will be enjoying a <strong>Golden DEX</strong>.<br>\n                                        This version includes:</p>\n                                        <ul>\n                                        <li><strong>Token Auction</strong>: users will be able to put any amount of any token to be auctioned and get\n                                            paid in a specific currency and have all tokens sold in a specific time. This allows you to automatically\n                                            convert any amount of token X to the best amount of token Y in a specific period of time, having the smart\n                                            contract selling little amounts of X periodically in your name to the best Y offer each time.<br>\n                                            This feature allows anyone to perform a long-term ICO (something similar to what it was the EOS ICO in 2017-2018).</li>\n                                        <li><strong>Vapaée Token / Passive Income</strong>: as you can imagine there's a very little fee that both\n                                            parts of the deal have to pay on each transaction and that determines the earnings of the contract.\n                                            I will create a Vapaée Token that can be staked for <strong>passive income</strong> funded by these earnings.</li>\n                                        <li><strong>Internationalization</strong>: this project already implements a \"text localization\" system,\n                                            which allows the easy integration of more languages. Currently, we only have Spanish and English but\n                                            we will have a lot more languages to be more suitable for everyone.</li>\n                                        <li><strong>More Skins</strong>: in this version, we will have a skin system already functional, \n                                            so I will add some more skins to have more variety.</li>\n                                        <li><strong>Source Code Delivery</strong>: The whole work is open source but currently, it is not in a proper presentation. \n                                            For this final version, I will prepare the source code in a separated repository along with all its documentation. \n                                            This will help other developers to quickly understand the code and be able to develop their own UI, \n                                            add-ons or whatever they like.</li>\n                                        <li><strong>Help / Tutorials</strong>: finally, no good software is finished if it does not have a proper contextual help. \n                                            I will create some short video tutorials on how to use the system on every posible feature.</li>\n                                        </ul>\n                                    </li>\n\n\n\n\n\n                                </ul>\n                \n                            </div>\n                        </div>            \n                \n                \n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-lg\" id=\"review-video-by-louis-thomas\">\n                                <span strike>Review Video by Louis Thomas</span>\n                            </div>\n                        </div>\n                \n                \n                        <div class=\"row margin-top\">\n                            <div strike class=\"col text-justify text-sm\">\n                                <p>If you don't know him, Louis Thomas is a very well known crypto influencer who has a very popular <a\n                                    href=\"https://www.youtube.com/channel/UCpceefaJ9vs4RYUTsO9Y3FA\" target=\"_blank\">channel on youtube</a> where he \n                                    talks about crypto projects like this one. He has an enormous amount of followers (almost 100K users) all \n                                    around the world (Asia 50%, Europe 35% . America 10%, Africa 5%).</p>\n                                <p>We have been talking about working together to create a review video to publicize this project and the Telos \n                                    blockchain itself. He estimates that a review video for this project can have over 35k views in the first 3 weeks.</p>\n                                <p>If you approve the first cycle, you will be funding the Premium version development plus this review video. \n                                    At the time this video hits the public, we will have this Premium version released and running, \n                                    ready to receive all new investors that come from the video post.</p>            \n                            </div>\n                        </div>                \n                \n                \n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-lg\" id=\"readmap\">\n                                Roadmap\n                            </div>\n                        </div>\n                \n                \n                        <div class=\"row margin-top\">\n                            <div class=\"col text-justify text-sm\">\n                                \n                                <p>The following are estimated release dates for each version:</p>\n                                <ul>\n                                    <li><strong>May 20th - Basic</strong>: this day will be enabled the trading with real tokens.\n                                        We will have a functional chart and Sqrl wallet support.</li>\n                                    <li><strong>June 10th - Premium</strong>: at this day we will have a much better interface website.\n                                        It will become a reference site because telos users will be able to check their balances expressed in USD (or any other preferred currency).<br>\n                                        <span strike>We also have a great review video by <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCpceefaJ9vs4RYUTsO9Y3FA\"\n                                        target=\"_blank\">Louis Thomas</a> that will bring a lot of users to the DEX and the blockchain.</span></li>\n                                    <li><strong>July 08th - Delux</strong>: at this point, we will have an independent software managed by\n                                        its users. The more relevant feature will be the possibility to trade in any token pair market.</li>\n                                    <li><strong>July 29th - Golden</strong>: finally, we will have an excellent competitive product, with \n                                        lots of new and innovative features, such as token auctioning or Vapaée token passive income.</li>\n                                </ul>\n                            </div>\n                        </div>                \n                \n                        <!--div style=\"height: 50px\"></div-->\n                    </div>\n                        \n                </div>\n            </div>\n\n\n\n\n        </div>\n    </div>\n</div>\n<br><br><br><br>\n\n"

/***/ }),

/***/ "./src/app/pages/wp/wp.page.scss":
/*!***************************************!*\
  !*** ./src/app/pages/wp/wp.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100vw !important;\n  height: 100vh !important;\n  overflow: auto;\n  display: block; }\n\nli.checked {\n  display: block;\n  position: relative; }\n\nli.checked:before {\n    content: \" \";\n    position: absolute;\n    left: -19px;\n    top: 0px;\n    background-image: url(/assets/img/vapaee-check.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 19px;\n    display: inline-block; }\n\nli.checked.title:before {\n    left: -28px;\n    height: 30px;\n    width: 30px; }\n\nli.checked.subtitle:before {\n    left: -21px;\n    height: 24px;\n    width: 26px;\n    top: -6px; }\n"

/***/ }),

/***/ "./src/app/pages/wp/wp.page.ts":
/*!*************************************!*\
  !*** ./src/app/pages/wp/wp.page.ts ***!
  \*************************************/
/*! exports provided: WPPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WPPage", function() { return WPPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var WPPage = /** @class */ (function () {
    function WPPage(app, local, scatter, vapaee, cookie) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.vapaee = vapaee;
        this.cookie = cookie;
        this.proposalID = "17";
        this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscriber"](this.onAccountChange.bind(this));
        this.user_dismiss = !!this.cookie.get("user_dismiss");
        this.utils = new src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"]("eosio.trail", this.scatter);
        this.feed = new src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_6__["Feedback"]();
        this.onAccountChange(null);
    }
    WPPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    WPPage.prototype.ngOnInit = function () {
        this.vapaee.onCurrentAccountChange.subscribe(this.subscriber);
    };
    WPPage.prototype.resetError = function () {
        this.feed.setError("voting", null);
    };
    Object.defineProperty(WPPage.prototype, "error", {
        get: function () {
            return this.feed.error("voting");
        },
        enumerable: true,
        configurable: true
    });
    WPPage.prototype._voteForUs = function () {
        var _this = this;
        this.feed.setError("voting", "");
        this.feed.setLoading("voting", true);
        this.feed.setLoading("mirrorcast", true);
        this.feed.setLoading("regvoter", true);
        // mirrorcast	{ "voter" : "gqydoobuhege", "token_symbol" : "4,TLOS" }
        // telosmain push action eosio.trail castvote '["viterbotelos",16,1]' -p viterbotelos
        // { "voter" : "viterbotelos", "ballot_id" : 16, "direction" : 1 }
        var wait_registered = new Promise(function (resolve) {
        });
        if (this.user_is_registered) {
            wait_registered = Promise.resolve();
            this.feed.setLoading("regvoter", false);
        }
        else {
            if (this.user_voted_us)
                return this.feed.setLoading("voting", false);
            wait_registered = this.utils.excecute("regvoter", {
                voter: this.scatter.account.name,
                token_symbol: "4,VOTE"
            }).then(function (_) {
                _this.feed.setLoading("regvoter", false);
                return _;
            }).catch(function (e) {
                if (typeof e == "string") {
                    _this.feed.setError("voting", e);
                }
                else {
                    _this.feed.setError("voting", JSON.stringify(e));
                }
                _this.feed.setLoading("voting", false);
                _this.feed.setLoading("regvoter", false);
                throw e;
            });
        }
        return wait_registered.then(function (_) {
            if (_this.user_voted_us)
                return _this.feed.setLoading("voting", false);
            return _this.utils.excecute("mirrorcast", {
                voter: _this.scatter.account.name,
                token_symbol: "4,TLOS"
            }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.feed.setLoading("mirrorcast", false);
                    if (this.user_voted_us)
                        return [2 /*return*/, this.feed.setLoading("voting", false)];
                    return [2 /*return*/, this.utils.excecute("castvote", {
                            voter: this.scatter.account.name,
                            ballot_id: this.proposalID,
                            direction: 1
                        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                            var _;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.findOutIfUserVotedUs()];
                                    case 1:
                                        _ = _a.sent();
                                        this.feed.setLoading("voting", false);
                                        return [2 /*return*/, result];
                                }
                            });
                        }); }).catch(function (e) {
                            if (typeof e == "string") {
                                _this.feed.setError("voting", e);
                            }
                            else {
                                _this.feed.setError("voting", JSON.stringify(e));
                            }
                            _this.feed.setLoading("voting", false);
                        })];
                });
            }); }).catch(function (e) {
                if (typeof e == "string") {
                    _this.feed.setError("voting", e);
                }
                else {
                    _this.feed.setError("voting", JSON.stringify(e));
                }
                _this.feed.setLoading("mirrorcast", false);
                _this.feed.setLoading("voting", false);
                throw e;
            });
        });
    };
    WPPage.prototype.voteForUs = function () {
        var _this = this;
        this.feed.setError("voting", "");
        console.log("voteForUs()");
        if (this.feed.loading("voting")) {
            console.log("cancel voteForUs()");
            return;
        }
        this.feed.setLoading("voting", true);
        this.feed.setLoading("mirrorcast", true);
        this.feed.setLoading("regvoter", true);
        if (this.vapaee.logged) {
            return this._voteForUs();
        }
        return this.vapaee.login().then(function (_) {
            _this.onAccountChange(_this.vapaee.logged).then(function (_) {
                if (_this.user_voted_us)
                    return _this.feed.setLoading("voting", false);
                return _this._voteForUs();
            });
        }).catch(function (e) {
            if (typeof e == "string") {
                _this.feed.setError("voting", e);
            }
            else {
                _this.feed.setError("voting", JSON.stringify(e));
            }
            _this.feed.setLoading("voting", false);
            _this.feed.setLoading("mirrorcast", false);
            _this.feed.setLoading("regvoter", false);
        });
        ;
    };
    WPPage.prototype.dismiss = function () {
        this.user_dismiss = true;
        // this.cookie.set("user_dismiss", "dismiss");
    };
    WPPage.prototype.findOutIfUserIsRegistered = function (account) {
        var _this = this;
        if (account === void 0) { account = null; }
        console.log("findOutIfUserIsRegistered(", account, ")");
        this.user_is_registered = false;
        this.feed.setLoading("user-registered", true);
        var encodedName = this.utils.encodeName(account || this.vapaee.current.name);
        console.assert(encodedName.toString() == "4399453885987553280", encodedName.toString(), "4399453885987553280");
        return this.utils.getTable("balances", {
            scope: "VOTE",
            lower_bound: encodedName.toString(),
            upper_bound: encodedName.toString(),
            limit: 1
        }).then(function (result) {
            if (result.rows.length > 0) {
                console.log(result.rows[0]);
                _this.user_is_registered = true;
            }
            _this.feed.setLoading("user-registered", false);
        }).catch(function (e) {
            console.error(e);
            _this.feed.setLoading("user-registered", false);
        });
    };
    WPPage.prototype.findOutIfUserVotedUs = function (account) {
        var _this = this;
        if (account === void 0) { account = null; }
        console.log("findOutIfUserVotedUs(", account, ")");
        this.user_voted_us = false;
        this.feed.setLoading("user-voted", true);
        return this.utils.getTable("votereceipts", { scope: account || this.vapaee.current.name, limit: 1, lower_bound: this.proposalID }).then(function (result) {
            // console.log("**********************", result);
            if (result.rows.length > 0) {
                console.assert(result.rows[0].ballot_id == _this.proposalID, result.rows[0].ballot_id, typeof result.rows[0].ballot_id, _this.proposalID, typeof _this.proposalID);
                if (result.rows[0].directions.length == 1 && result.rows[0].directions[0] == 1 && result.rows[0].expiration > 1559488802) {
                    _this.user_voted_us = true;
                }
                else {
                    _this.cookie.delete("user_dismiss");
                }
            }
            _this.feed.setLoading("user-voted", false);
        }).catch(function (e) {
            console.error(e);
            _this.feed.setLoading("user-voted", false);
        });
    };
    WPPage.prototype.onAccountChange = function (account) {
        console.log("onAccountChange()", account);
        this.feed.setError("voting", "");
        return Promise.all([
            this.findOutIfUserVotedUs(account),
            this.findOutIfUserIsRegistered(account)
        ]);
    };
    WPPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-wp-page',
            template: __webpack_require__(/*! ./wp.page.html */ "./src/app/pages/wp/wp.page.html"),
            styles: [__webpack_require__(/*! ./wp.page.scss */ "./src/app/pages/wp/wp.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_4__["VapaeeService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], WPPage);
    return WPPage;
}());



/***/ }),

/***/ "./src/app/services/coingecko.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/coingecko.service.ts ***!
  \***********************************************/
/*! exports provided: CoingeckoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoingeckoService", function() { return CoingeckoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CoingeckoService = /** @class */ (function () {
    function CoingeckoService(http) {
        var _this = this;
        this.http = http;
        this.onUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.waitReady = new Promise(function (resolve) {
            _this.setReady = resolve;
        });
        this.currency_list = ["usd", "eur", "btc", "eos"];
        this.init();
        this.update().then(function (_) {
            _this.setReady();
        });
    }
    CoingeckoService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setInterval(function (_) { return _this.update(); }, 60 * 1000);
                return [2 /*return*/];
            });
        });
    };
    CoingeckoService.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var api_endpoint, action, url;
            return __generator(this, function (_a) {
                api_endpoint = "https://api.coingecko.com/api/v3";
                action = "/simple/price?ids=telos&vs_currencies=";
                url = api_endpoint + action + this.currency_list.join(",");
                this.http.get(url).toPromise().then(function (result) {
                    _this.prices = result.telos;
                    _this.prices.tlos = 1;
                    _this.onUpdate.next(_this.prices);
                });
                return [2 /*return*/];
            });
        });
    };
    CoingeckoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CoingeckoService);
    return CoingeckoService;
}());



/***/ }),

/***/ "./src/app/services/common/analytics.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/common/analytics.service.ts ***!
  \******************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsService = /** @class */ (function () {
    function AnalyticsService() {
        console.log("Analytics()");
        this.waitReady = new Promise(function (resolve) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new i.Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', ga_id, 'auto');
            var interval = 0;
            window.setTimeout(function () {
                if (typeof ga === 'function') {
                    resolve(ga);
                }
                else {
                    console.error("ERROR: AnalyticsService() ga not found");
                }
                window.clearInterval(interval);
            }, 10000);
            interval = window.setInterval(function () {
                if (typeof ga === 'function') {
                    resolve(ga);
                    window.clearInterval(interval);
                }
                else {
                    console.log("Analytics() not ga found");
                }
            }, 250);
        });
    }
    AnalyticsService.prototype.setUserId = function (id) {
        this.waitReady.then(function (ga) {
            console.log("Analytics::UserId --> ", id);
            ga('set', 'userId', id);
        });
    };
    AnalyticsService.prototype.sendPageView = function (url) {
        var _this = this;
        this.waitReady.then(function (ga) {
            if (_this.pageviewTimer) {
                window.clearTimeout(_this.pageviewTimer);
                _this.pageviewTimer = 0;
            }
            ;
            _this.pageviewTimer = window.setTimeout(function () {
                console.log("Analytics::Pageview --> ", url);
                ga('set', 'page', url);
                ga('send', 'pageview');
            }, 1000);
        });
    };
    AnalyticsService.prototype.emitEvent = function (category, action, label, value) {
        if (label === void 0) { label = null; }
        if (value === void 0) { value = null; }
        this.waitReady.then(function (ga) {
            console.log("Analytics::Event --> ", category, action, label, value);
            ga('send', 'event', category, action, label, value);
        });
    };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/services/common/app.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/common/app.service.ts ***!
  \************************************************/
/*! exports provided: AppService, LoadingOverall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingOverall", function() { return LoadingOverall; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.service */ "./src/app/services/common/analytics.service.ts");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/common/dom.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(router, route, analytics, dom) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.analytics = analytics;
        this.dom = dom;
        this.onStateChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onWindowResize = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.prev_state = "none";
        this.device = {};
        this.onInit = new Promise(function (resolve) {
            _this.triggerOnInit = resolve;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.prev_state = _this.state;
                _this.path = _this.router.url;
                _this.state = _this.getDeepestChild(_this.route.root).snapshot.data.state;
                console.log("AppService. onRoute()", [_this]);
                _this.analytics.sendPageView(window.location.href);
                _this.onStateChange.next(_this.state);
                window.document.body.classList.add(_this.state);
                window.document.body.classList.remove(_this.prev_state);
            }
        });
        window.document.body.removeAttribute("loading");
    }
    AppService.prototype.detectBrowser = function () {
        var _window = window;
        // Opera 8.0+
        this.isOpera = (!!_window.opr && !!_window.opr.addons) || !!_window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
        this.isFirefox = typeof _window.InstallTrigger !== 'undefined';
        // Safari 3.0+ "[object HTMLElementConstructor]" 
        this.isSafari = /constructor/i.test(_window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!_window['safari'] || _window.safari.pushNotification);
        // Internet Explorer 6-11
        this.isIE = /*@cc_on!@*/ false || !!_window.document.documentMode;
        // Edge 20+
        this.isEdge = !_window.isIE && !!_window.StyleMedia;
        // Chrome 1+
        this.isChrome = !!_window.chrome && !!_window.chrome.webstore;
        // Blink engine detection
        this.isBlink = (this.isChrome || this.isOpera) && !!_window.CSS;
        console.log("isOpera", this.isOpera);
        console.log("isFirefox", this.isFirefox);
        console.log("isSafari", this.isSafari);
        console.log("isIE", this.isIE);
        console.log("isEdge", this.isEdge);
        console.log("isChrome", this.isChrome);
        console.log("isBlink", this.isBlink);
    };
    AppService.prototype.getGlobal = function (key) {
        if (!this.global)
            return undefined;
        return this.global[key];
    };
    AppService.prototype.setGlobal = function (key, value) {
        if (!this.global)
            this.global = {};
        this.global[key] = value;
    };
    AppService.prototype.init = function () {
        this.detectBrowser();
        this.dom.appendComponentToBody(LoadingOverall);
        this.triggerOnInit();
    };
    AppService.prototype.getDeepestChild = function (node) {
        if (node.firstChild) {
            return this.getDeepestChild(node.firstChild);
        }
        else {
            return node;
        }
    };
    AppService.prototype.onWindowsResize = function () {
        this.device.fullhd = false;
        this.device.full = false;
        this.device.big = false;
        this.device.normal = false;
        this.device.medium = false;
        this.device.small = false;
        this.device.tiny = false;
        this.device.height = window.innerHeight;
        this.device.width = window.innerWidth;
        this.device.class = "";
        var w = this.device.width;
        var h = this.device.height;
        if (w / h > 1) {
            this.device.portrait = false;
            this.device.wide = true;
            this.device.class += "wide ";
            if (1600 <= w) {
                this.device.fullhd = true;
                this.device.class += "fullhd ";
            }
            if (1200 <= w && w < 1600) {
                this.device.full = true;
                this.device.class += "full ";
            }
            if (992 <= w && w < 1200) {
                this.device.big = true;
                this.device.class += "big ";
            }
            if (768 <= w && w < 992) {
                this.device.normal = true;
                this.device.class += "normal ";
            }
            if (576 <= w && w < 768) {
                this.device.medium = true;
                this.device.class += "medium ";
            }
            if (420 <= w && w < 576) {
                this.device.small = true;
                this.device.class += "small ";
            }
            if (w < 420) {
                this.device.tiny = true;
                this.device.class += "tiny ";
            }
        }
        else {
            this.device.portrait = true;
            this.device.wide = false;
            this.device.class += "portrait ";
        }
        // console.log("onWindowsResize()", this.device);
        this.device.class = this.device.class.trim();
        this.onWindowResize.next(this.device);
    };
    AppService.prototype.navigatePrefix = function (prefix) {
        var words = this.path.split("/");
        for (var i in words) {
            if (words[i]) {
                words[i] = prefix;
                break;
            }
        }
        var path = words.join("/");
        this.navigate(path);
    };
    AppService.prototype.navigate = function (path) {
        if (path != this.path) {
            console.log("AppService.navigate()", path);
            this.router.navigate([path]);
        }
        return path;
    };
    AppService.prototype.onCardClose = function () {
        this.router.navigate(['cards']);
    };
    AppService.prototype.setLoading = function (turn) {
        if (turn === void 0) { turn = true; }
        this.loading = turn;
    };
    AppService.prototype.urlStartsWith = function (str) {
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            return window.location.pathname.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.urlEndsWith = function (str) {
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            var len = window.location.pathname.length;
            var substr = window.location.pathname.substr(len - str.length, str.length);
            return substr.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.stateStartsWith = function (str) {
        if (!this.state)
            return false;
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            return this.state.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.prevStateStartsWith = function (str) {
        if (!this.prev_state)
            return false;
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            return this.prev_state.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.getStateData = function (name) {
        name = name || this.getDeepestChild(this.route.root).snapshot.data.state;
        var data = this.getRouteData(name, this.router.config);
        return data;
    };
    AppService.prototype.getRouteData = function (name, obj) {
        var found = null;
        for (var i = 0; !found && i < obj.length; i++) {
            if (obj[i].data.state === name) {
                found = obj[i].data;
            }
            else if (obj[i].children) {
                found = this.getRouteData(name, obj[i].children);
            }
        }
        return found;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"],
            _dom_service__WEBPACK_IMPORTED_MODULE_3__["DomService"]])
    ], AppService);
    return AppService;
}());

var LoadingOverall = /** @class */ (function () {
    function LoadingOverall(app) {
        this.app = app;
    }
    LoadingOverall = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-overall',
            template: "\n    <div [hidden]=\"!app.loading\" class=\"animated fadeIn\" id=\"loading-overlay\" style=\"position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); z-index: 10000; color: white;\">\n        <div style=\"text-align: center; width: 100%; position: absolute; top: 40%; margin-top: -50px;\">\n            <h1>Proccessing...</h1>\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [AppService])
    ], LoadingOverall);
    return LoadingOverall;
}());



/***/ }),

/***/ "./src/app/services/common/broadcast.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/common/broadcast.service.ts ***!
  \******************************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        this._eventBus = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    BroadcastService.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    BroadcastService.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    BroadcastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BroadcastService);
    return BroadcastService;
}());



/***/ }),

/***/ "./src/app/services/common/common.module.ts":
/*!**************************************************!*\
  !*** ./src/app/services/common/common.module.ts ***!
  \**************************************************/
/*! exports provided: CommonServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServicesModule", function() { return CommonServicesModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.service */ "./src/app/services/common/analytics.service.ts");
/* harmony import */ var _local_strings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-strings.service */ "./src/app/services/common/local-strings.service.ts");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/common/dom.service.ts");
/* harmony import */ var _broadcast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./broadcast.service */ "./src/app/services/common/broadcast.service.ts");
/* harmony import */ var _facebook_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facebook.service */ "./src/app/services/common/facebook.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/services/common/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CommonServicesModule = /** @class */ (function () {
    function CommonServicesModule() {
    }
    CommonServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [
                _analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"],
                _local_strings_service__WEBPACK_IMPORTED_MODULE_4__["LocalStringsService"],
                _dom_service__WEBPACK_IMPORTED_MODULE_5__["DomService"],
                _broadcast_service__WEBPACK_IMPORTED_MODULE_6__["BroadcastService"],
                _facebook_service__WEBPACK_IMPORTED_MODULE_7__["FacebookService"],
                _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]
            ]
        })
    ], CommonServicesModule);
    return CommonServicesModule;
}());



/***/ }),

/***/ "./src/app/services/common/common.services.ts":
/*!****************************************************!*\
  !*** ./src/app/services/common/common.services.ts ***!
  \****************************************************/
/*! exports provided: CommonServicesModule, AnalyticsService, LocalStringsService, DomService, BroadcastService, FacebookService, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.module */ "./src/app/services/common/common.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonServicesModule", function() { return _common_module__WEBPACK_IMPORTED_MODULE_0__["CommonServicesModule"]; });

/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.service */ "./src/app/services/common/analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return _analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]; });

/* harmony import */ var _local_strings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-strings.service */ "./src/app/services/common/local-strings.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStringsService", function() { return _local_strings_service__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]; });

/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/common/dom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return _dom_service__WEBPACK_IMPORTED_MODULE_3__["DomService"]; });

/* harmony import */ var _broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broadcast.service */ "./src/app/services/common/broadcast.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return _broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]; });

/* harmony import */ var _facebook_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facebook.service */ "./src/app/services/common/facebook.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return _facebook_service__WEBPACK_IMPORTED_MODULE_5__["FacebookService"]; });

/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/services/common/app.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]; });










/***/ }),

/***/ "./src/app/services/common/dom.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/common/dom.service.ts ***!
  \************************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentToBody = function (component) {
        // 1. Create a component reference from the component 
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        // 5. Wait some time and remove it from the component tree and from the DOM
        /*
        setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 3000);
        */
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/services/common/facebook.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/common/facebook.service.ts ***!
  \*****************************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacebookService = /** @class */ (function () {
    function FacebookService() {
        console.log("Facebook()");
        this.init();
    }
    FacebookService.prototype.init = function (local) {
        if (local === void 0) { local = null; }
        this.waitReady = new Promise(function (resolve) {
            var userLang = local || navigator.language || navigator.userLanguage;
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/" + userLang + "/sdk.js#xfbml=1&version=v2.5&appId=" + fb_id;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            (function (_f, b, e, v, n, t, s) {
                var f = _f;
                if (f.fbq)
                    return;
                n = f.fbq = function () {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/' + userLang + '/fbevents.js');
            fbq('init', fb_id);
            fbq('track', 'PageView');
            resolve();
        });
    };
    FacebookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FacebookService);
    return FacebookService;
}());



/***/ }),

/***/ "./src/app/services/common/local-strings.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/common/local-strings.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStringsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStringsService", function() { return LocalStringsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LocalStringsService = /** @class */ (function () {
    function LocalStringsService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.onLocalChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.string = {};
        this.locals = {};
        var userLang = navigator.language || navigator.userLanguage;
        var cached = this.cookie.get("locals");
        if (cached) {
            this.localKey = cached;
        }
        else {
            switch (userLang.substr(0, 2)) {
                case "es":
                    this.localKey = "es_ES";
                    break;
                default:
                    this.localKey = "en_US";
            }
        }
        this.waitReady = this.fetchLocals(this.localKey);
    }
    LocalStringsService.prototype.fetchLocals = function (localKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get("assets/locals/" + localKey + ".json").toPromise().then(function (response) {
                        _this.string = response;
                        _this.locals[_this.localKey] = _this.string;
                    })];
            });
        });
    };
    LocalStringsService.prototype.setLocal = function (localKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.localKey != localKey) {
                    this.localKey = localKey;
                    this.cookie.set("locals", this.localKey);
                    return [2 /*return*/, this.fetchLocals(this.localKey).then(function (_) {
                            _this.onLocalChange.next(_this.localKey);
                            return _this.localKey;
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    LocalStringsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], LocalStringsService);
    return LocalStringsService;
}());



/***/ }),

/***/ "./src/app/services/eosio.token-math.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/eosio.token-math.service.ts ***!
  \******************************************************/
/*! exports provided: EosioTokenMathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EosioTokenMathService", function() { return EosioTokenMathService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EosioTokenMathService = /** @class */ (function () {
    function EosioTokenMathService() {
    }
    EosioTokenMathService.prototype.add = function (num1, num2) {
        console.assert(typeof num1 == "string", "ERROR: EosioTokenMathService.add() num1 is not a string. got: ", typeof num1, num1);
        console.assert(typeof num2 == "string", "ERROR: EosioTokenMathService.add() num2 is not a string. got: ", typeof num2, num2);
        console.assert(num1.split(" ")[1] == num2.split(" ")[1], "ERROR: EosioTokenMathService.add() you can't add two values of different Token Simbol: "
            + num1.split(" ")[1] + " !== " + num2.split(" ")[1]);
        var symbol = num2.split(" ")[1];
        var v1 = Math.floor(parseFloat(num1.split(" ")[0]) * 10000);
        var v2 = Math.floor(parseFloat(num2.split(" ")[0]) * 10000);
        var t = v1 + v2;
        var tt = t / 10000;
        var str = tt + "";
        var i = str.indexOf(".");
        if (i == -1) {
            str += ".0000";
        }
        else {
            var digits = str.length - i - 1;
            if (digits < 4) {
                str += "0".repeat(4 - digits);
            }
        }
        return str + " " + symbol;
    };
    EosioTokenMathService.prototype.addAll = function (array) {
        // console.log("EOS-math.addAll()",array);
        var total = array[0];
        for (var i = 1; i < array.length; i++) {
            total = this.add(total, array[i]);
        }
        return total;
    };
    EosioTokenMathService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EosioTokenMathService);
    return EosioTokenMathService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: Feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
var Feedback = /** @class */ (function () {
    function Feedback(keys) {
        if (keys === void 0) { keys = []; }
        this.keys = keys;
        this.scopes = {};
    }
    Feedback.prototype.updateScopes = function () {
        for (var i in this.keys) {
            this.scopes[this.keys[i]] = this.scopes[this.keys[i]] || {
                loading: false,
                msg: "",
                msgtype: ""
            };
        }
    };
    Feedback.prototype.addKey = function (key) {
        this.keys.push(key);
        this.updateScopes();
    };
    Feedback.prototype.setLoading = function (key, value) {
        if (this.scopes[key]) {
            this.scopes[key].loading = value;
        }
        else {
            this.addKey(key);
            this.setLoading(key, value);
        }
    };
    Feedback.prototype.loading = function (key) {
        if (this.scopes[key]) {
            return this.scopes[key].loading;
        }
        return false;
    };
    Feedback.prototype.setError = function (key, err) {
        if (err === void 0) { err = ""; }
        if (this.scopes[key]) {
            this.scopes[key].msg = err;
            this.scopes[key].msgtype = "error";
        }
        else {
            this.addKey(key);
            this.setError(key, err);
        }
    };
    Feedback.prototype.error = function (key) {
        if (this.scopes[key]) {
            return this.scopes[key].msg;
        }
        return "";
    };
    Feedback.prototype.setMessage = function (key, msg, msgtype) {
        if (this.scopes[key]) {
            this.scopes[key].msg = msg;
            this.scopes[key].msgtype = msgtype;
        }
        else {
            this.addKey(key);
            this.setMessage(key, msg, msgtype);
        }
    };
    Feedback.prototype.message = function (key) {
        return this.error(key);
    };
    Feedback.prototype.msgType = function (key) {
        if (this.scopes[key]) {
            return this.scopes[key].msgtype;
        }
        else {
            // console.error("ERROR", key, [this.scopes]);
        }
        return "";
    };
    return Feedback;
}());



/***/ }),

/***/ "./src/app/services/scatter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/scatter.service.ts ***!
  \*********************************************/
/*! exports provided: ScatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterService", function() { return ScatterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _eosio_token_math_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scatterjs-core */ "./node_modules/scatterjs-core/dist/index.js");
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scatterjs_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scatterjs-plugin-eosjs2 */ "./node_modules/scatterjs-plugin-eosjs2/dist/index.js");
/* harmony import */ var scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scatterjs-plugin-lynx */ "./node_modules/scatterjs-plugin-lynx/dist/index.js");
/* harmony import */ var scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/dist/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// scatter libraries




var ScatterService = /** @class */ (function () {
    function ScatterService(http, tokenMath) {
        var _this = this;
        this.http = http;
        this.tokenMath = tokenMath;
        this.onNetworkChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onLogggedStateChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.waitReady = new Promise(function (resolve) {
            _this.setReady = resolve;
        });
        this.waitLogged = new Promise(function (resolve) {
            _this.setLogged = resolve;
        });
        this.waitConnected = new Promise(function (resolve) {
            _this.setConnected = resolve;
        });
        this.waitEosjs = new Promise(function (resolve) {
            _this.setEosjs = resolve;
        });
        this.waitEndpoints = new Promise(function (resolve) {
            _this.setEndpoints = resolve;
        });
        this.reconnectTime = 100;
        this.feed = new _feedback_service__WEBPACK_IMPORTED_MODULE_4__["Feedback"]();
        this._networks_slugs = [];
        this._networks = {};
        this._network = {
            "name": "EOS MainNet",
            "symbol": "EOS",
            "explorer": "https://www.bloks.io",
            "chainId": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
            "endpoints": [{
                    "protocol": "https",
                    "host": "nodes.get-scatter.com",
                    "port": 443
                }]
        };
        this.symbol = "EOS";
        //this.waitReady.then(() => console.log("ScatterService.setReady()"));
        // console.error("scatter interrumpido --------------------------------");
        this.http.get("assets/endpoints.json").toPromise().then(function (response) {
            _this._networks = response;
            for (var i in _this._networks) {
                _this._networks_slugs.push(i);
            }
            _this.setEndpoints();
        });
        this._account_queries = {};
    }
    Object.defineProperty(ScatterService.prototype, "account", {
        get: function () {
            if (!this._account || !this._account.name) {
                if (this.lib && this.lib.identity && this.lib.identity.accounts) {
                    this._account = this.lib.identity.accounts.find(function (x) { return x.blockchain === "eos" || x.blockchain === "tlos"; });
                }
            }
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterService.prototype, "default", {
        get: function () {
            return {
                name: 'guest',
                data: {
                    total_balance: "",
                    cpu_limit: {},
                    net_limit: {},
                    ram_limit: {},
                    refund_request: {},
                    total_resources: {}
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    ScatterService.prototype.setNetwork = function (name, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        console.log("ScatterService.setNetwork(" + name + "," + index + ")");
        return this.waitEndpoints.then(function () {
            var n = _this.getNetwork(name, index);
            if (n) {
                if (_this._network.name != n.name) {
                    _this._network = n;
                    _this.resetIdentity();
                    _this.initScatter();
                    _this.onNetworkChange.next(_this.getNetwork(name));
                }
            }
            else {
                console.error("ERROR: Scatter.setNetwork() unknown network name-index. Got ("
                    + name + ", " + index + "). Availables are:", _this._networks);
                console.error("Falling back to eos mainnet");
                return _this.setNetwork("eos");
            }
        });
    };
    ScatterService.prototype.getNetwork = function (slug, index) {
        if (index === void 0) { index = 0; }
        if (this._networks[slug]) {
            if (this._networks[slug].endpoints.length > index && index >= 0) {
                var network = this._networks[slug];
                var endpoint = network.endpoints[index];
                network.slug = slug;
                network.index = index;
                network.eosconf = {
                    blockchain: "eos",
                    chainId: network.chainId,
                    host: endpoint.host,
                    port: endpoint.port,
                    protocol: endpoint.protocol,
                };
                return network;
            }
            else {
                console.error("ERROR: Scatter.getNetwork() index out of range. Got "
                    + index + " expected number between [0.." + this._networks[slug].endpoints.length + "]");
            }
        }
        else {
            console.error("ERROR: Scatter.getNetwork() unknown network slug. Got "
                + slug + " expected one of", this.networks);
        }
        return null;
    };
    Object.defineProperty(ScatterService.prototype, "networks", {
        get: function () {
            return this._networks_slugs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterService.prototype, "network", {
        get: function () {
            return this._network;
        },
        enumerable: true,
        configurable: true
    });
    ScatterService.prototype.resetIdentity = function () {
        console.log("ScatterService.resetIdentity()");
        this.error = "";
        if (this.lib) {
            this.lib.identity = null;
            if (!this.lib.forgotten) {
                this.lib.forgotten = true;
                this.lib.forgetIdentity();
            }
        }
        this.onLogggedStateChange.next(true);
    };
    ScatterService.prototype.resetPromises = function () {
        var _this = this;
        console.error("ScatterService.resetPromises()");
        this.waitEosjs.then(function (r) {
            _this.waitEosjs = null;
            var p = new Promise(function (resolve) {
                if (_this.waitEosjs)
                    return;
                _this.waitEosjs = p;
                _this.setEosjs = resolve;
                _this.resetPromises();
            });
        });
        this.waitConnected.then(function (r) {
            _this.waitConnected = null;
            var p = new Promise(function (resolve) {
                if (_this.waitConnected)
                    return;
                _this.waitConnected = p;
                _this.setConnected = resolve;
                _this.resetPromises();
            });
        });
        this.waitReady.then(function (r) {
            _this.waitReady = null;
            var p = new Promise(function (resolve) {
                if (_this.waitReady)
                    return;
                _this.waitReady = p;
                _this.setReady = resolve;
                _this.resetPromises();
                //this.waitReady.then(() => console.log("ScatterService.setReady()"));                
            });
        });
        this.waitLogged.then(function (r) {
            _this.waitLogged = null;
            var p = new Promise(function (resolve) {
                if (_this.waitLogged)
                    return;
                _this.waitLogged = p;
                _this.setLogged = resolve;
                _this.resetPromises();
            });
        });
    };
    ScatterService.prototype.initScatter = function () {
        console.log("ScatterService.initScatter()");
        this.error = "";
        if (window.ScatterJS) {
            this.ScatterJS = window.ScatterJS;
            this.ScatterJS.plugins(new scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_6___default.a(), new scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_7___default.a({ Api: eosjs__WEBPACK_IMPORTED_MODULE_8__["Api"], JsonRpc: eosjs__WEBPACK_IMPORTED_MODULE_8__["JsonRpc"] }));
            this.lib = this.ScatterJS.scatter;
            window.ScatterJS = null;
        }
        var network = scatterjs_core__WEBPACK_IMPORTED_MODULE_5___default.a.Network.fromJson(this.network.eosconf);
        this.rpc = new eosjs__WEBPACK_IMPORTED_MODULE_8__["JsonRpc"](network.fullhost());
        this.eos = this.lib.eos(network, eosjs__WEBPACK_IMPORTED_MODULE_8__["Api"], { rpc: this.rpc, beta3: true });
        var str = "";
        for (var i in this.rpc) {
            str += i + ": " + typeof this.rpc[i] + ";\n";
        }
        // console.log("-----------------------------------------");
        // console.log(str);
        // console.log("-----------------------------------------");
        this.setEosjs("eosjs");
    };
    ScatterService.prototype.retryConnectingApp = function () {
        var _this = this;
        clearInterval(this.reconnectTimer);
        this.reconnectTimer = setInterval(function (_) {
            // console.log("ScatterService.reconnectTimer()");
            if (_this._connected) {
                // console.error("ScatterService.retryConnectingApp() limpio el intervalo");
                clearInterval(_this.reconnectTimer);
            }
            else {
                if (_this.account) {
                    // console.error("ScatterService.retryConnectingApp()  existe account pero no está conectado");
                    _this.connectApp();
                }
            }
        }, this.reconnectTime);
        this.reconnectTime += 1000 * Math.random();
        if (this.reconnectTime > 4000)
            this.reconnectTime = 4000;
    };
    // connect_count: number = 0;
    ScatterService.prototype.connectApp = function (appTitle) {
        var _this = this;
        if (appTitle === void 0) { appTitle = ""; }
        // this.connect_count++;
        // var resolve_num = this.connect_count;
        this.feed.setLoading("connect", true);
        if (appTitle != "")
            this.appTitle = appTitle;
        console.log("ScatterService.connectApp(" + this.appTitle + ")");
        var connectionOptions = { initTimeout: 1800 };
        if (this._connected)
            return Promise.resolve(); // <---- avoids a loop
        var promise = new Promise(function (resolve, reject) {
            _this.waitConnected.then(resolve);
            if (_this._connected)
                return; // <---- avoids a loop
            _this.waitEosjs.then(function () {
                console.log("ScatterService.waitEosjs() eos OK");
                _this.lib.connect(_this.appTitle, connectionOptions).then(function (connected) {
                    // si está logueado this.lib.identity se carga sólo y ya está disponible
                    console.log("ScatterService.lib.connect()", connected);
                    _this._connected = connected;
                    if (!connected) {
                        _this.feed.setError("connect", "ERROR: can not connect to Scatter. Is it up and running?");
                        console.error(_this.feed.error("connect"));
                        reject(_this.feed.error("connect"));
                        _this.feed.setLoading("connect", false);
                        _this.retryConnectingApp();
                        return false;
                    }
                    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
                    console.log("ScatterService.setConnected()");
                    _this.setConnected("connected");
                    _this.feed.setLoading("connect", false);
                    if (_this.logged) {
                        _this.login().then(function () {
                            console.log("ScatterService.setReady()");
                            _this.setReady("ready");
                        }).catch(reject);
                    }
                    else {
                        console.log("ScatterService.setReady()");
                        _this.setReady("ready");
                    }
                }).catch(function (e) {
                    console.error(e);
                    _this.feed.setLoading("connect", false);
                    throw e;
                });
            });
        });
        return promise;
    };
    ScatterService.prototype.setIdentity = function (identity) {
        var _this = this;
        console.log("ScatterService.setIdentity()", [identity]);
        console.assert(!!this.lib, "ERROR: no instance of scatter found");
        this.error = "";
        this.lib.identity = identity;
        this.lib.forgotten = false;
        this._account = this.lib.identity.accounts.find(function (x) { return x.blockchain === "eos" || x.blockchain === "tlos"; });
        if (!this.account) {
            console.error("ScatterService.setIdentity()", [identity]);
        }
        console.log("ScatterService.setIdentity() -> ScatterService.queryAccountData() : ", [this.account.name]);
        this.queryAccountData(this.account.name).then(function (account) {
            _this.account.data = account;
            _this.onLogggedStateChange.next(true);
        }).catch(function (_) {
            _this.account.data = _this.default.data;
            _this.onLogggedStateChange.next(true);
        });
    };
    // ----- account data (resources, staking, refunding) -------
    // extract the float part of an valid asset string representation like: "123.2424 EOS" -> returns 123.2424
    ScatterService.prototype.extractNumber = function (balance) {
        if (typeof balance != "string") {
            // console.log("extractNumber() " , balance);
            return 0;
        }
        return parseFloat(balance.split(" ")[0]);
    };
    // add balance1 to balance2 and return de result
    ScatterService.prototype.add = function (balance1, balance2) {
        // console.log("add(",balance1, balance2, ")");
        var symbol = balance1.split(" ")[1];
        var sym2 = balance2.split(" ")[1];
        console.assert(sym2 == symbol, "ERROR: adding two different Tokens", balance1, balance2);
        var v1 = this.extractNumber(balance1), v2 = this.extractNumber(balance2);
        var tot = (v1 + v2) + "";
        if (tot.indexOf(".") != -1) {
            tot = (tot + "0000").substr(0, tot.length + 4 - tot.indexOf("."));
        }
        else {
            tot += ".0000";
        }
        tot += " " + symbol;
        // console.log("add(",balance1, balance2, ") --> ", tot);
        return tot;
    };
    ScatterService.prototype.calculateTotalBalance = function (account) {
        return this.tokenMath.addAll([
            account.core_liquid_balance,
            account.refund_request.net_amount,
            account.refund_request.cpu_amount,
            account.self_delegated_bandwidth.cpu_weight,
            account.self_delegated_bandwidth.net_weight
        ]);
    };
    ScatterService.prototype.calculateResourceLimit = function (limit) {
        limit = Object.assign({
            max: 0, used: 0
        }, limit);
        if (limit.max != 0) {
            limit.percent = 1 - (Math.min(limit.used, limit.max) / limit.max);
        }
        else {
            limit.percent = 0;
        }
        limit.percentStr = Math.round(limit.percent * 100) + "%";
        return limit;
    };
    // ----- account data (end) -------
    ScatterService.prototype.queryAccountData = function (name) {
        var _this = this;
        /*
        // get_table_rows
            code: "eosio"
            index_position: 1
            json: true
            key_type: "i64"
            limit: -1
            lower_bound: null
            scope: "gqydoobuhege"
            table: "delband"
            table_key: ""
        */
        console.log("ScatterService.queryAccountData(" + name + ") ");
        this._account_queries[name] = this._account_queries[name] || new Promise(function (resolve, reject) {
            // console.log("PASO 1 ------", [this._account_queries])
            _this.waitEosjs.then(function () {
                // console.log("PASO 2 (eosjs) ------");
                _this.rpc.get_account(name).then(function (response) {
                    // console.log("PASO 3 (eosjs.getAccount) ------", response);
                    var accountdata = response;
                    if (accountdata.core_liquid_balance) {
                        _this.symbol = accountdata.core_liquid_balance.split(" ")[1];
                    }
                    else {
                        accountdata.core_liquid_balance = "0.0000 " + _this.symbol;
                    }
                    // --
                    accountdata.refund_request = accountdata.refund_request || {
                        total: "0.0000 " + _this.symbol,
                        net_amount: "0.0000 " + _this.symbol,
                        cpu_amount: "0.0000 " + _this.symbol,
                        request_time: "2018-11-18T18:09:53"
                    };
                    accountdata.refund_request.total =
                        _this.add(accountdata.refund_request.net_amount, accountdata.refund_request.cpu_amount);
                    // --
                    accountdata.self_delegated_bandwidth = accountdata.self_delegated_bandwidth || {
                        total: "0.0000 " + _this.symbol,
                        net_weight: "0.0000 " + _this.symbol,
                        cpu_weight: "0.0000 " + _this.symbol
                    };
                    accountdata.self_delegated_bandwidth.total =
                        _this.add(accountdata.self_delegated_bandwidth.net_weight, accountdata.self_delegated_bandwidth.cpu_weight);
                    // --
                    accountdata.total_resources = accountdata.total_resources || {
                        net_weight: "0.0000 " + _this.symbol,
                        cpu_weight: "0.0000 " + _this.symbol
                    };
                    accountdata.total_balance = _this.calculateTotalBalance(accountdata);
                    accountdata.cpu_limit = _this.calculateResourceLimit(accountdata.cpu_limit);
                    accountdata.net_limit = _this.calculateResourceLimit(accountdata.net_limit);
                    accountdata.ram_limit = _this.calculateResourceLimit({
                        max: accountdata.ram_quota, used: accountdata.ram_usage
                    });
                    resolve(accountdata);
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        var promise = this._account_queries[name];
        promise.then(function (r) {
            setTimeout(function () {
                delete _this._account_queries[r.account_name];
            });
        });
        return promise;
    };
    ScatterService.prototype.executeTransaction = function (contract, action, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.login().then(function (_) {
                            _this.waitReady.then(function () {
                                _this.eos.transact({
                                    actions: [{
                                            account: contract,
                                            name: action,
                                            data: data,
                                            authorization: [{
                                                    actor: _this.account.name,
                                                    permission: _this.account.authority
                                                }],
                                        }]
                                }, {
                                    blocksBehind: 3,
                                    expireSeconds: 30
                                }).then(function (result) {
                                    console.log("EXITO !!!!", result);
                                    resolve(result);
                                });
                            });
                        }).catch(function (error) {
                            console.error(error);
                            reject(error);
                        });
                    })];
            });
        });
    };
    /*
    
    {
        actions: [{
            account: this.contractAccount,
            name: action,
            authorization: [{
                actor: this.account.name,
                permission: this.account.authority
            }],
            data: {
              ...data
            }
        }]
    },
    {
        blocksBehind: 3,
        expireSeconds: 30
    }
    */
    /*
    getContract(account_name): Promise<any> {
        console.log(`ScatterService.getContract(${account_name})`);
        return new Promise((resolve, reject) => {
            this.login().then((a) => {
                console.log("this.login().then((a) => { -->", a );
                this.waitReady.then(() => {
                    
                    this.eos.getContract(account_name).then(contract => {
                        console.log(`-- contract ${account_name} --`);
                        for (var i in contract) {
                            if(typeof contract[i] == "function") console.log("contract."+i+"()", [contract[i]]);
                        }
                        resolve(contract);
                    }).catch(error => {
                        console.error(error);
                    });
                    
                });
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    */
    /*
    transfer(from:string, to:string, amount:string, memo:string) {
        console.log("ScatterService.transfer()", from, to, amount, memo);
        return new Promise((resolve, reject) => {
            this.waitEosjs.then(() => {
                console.log("Scatter.transfer():", from, to, amount, memo, this.authorization);
                
                this.eos.transfer(from, to, amount, memo, this.authorization).then(trx => {
                    // That's it!
                    console.log(`Transaction ID: ${trx.transaction_id}`, trx);
                    // en Notas está el json que describe el objeto trx
                    resolve(trx);
                }).catch(error => {
                    console.error(error);
                });
                
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    */
    // loginTimer;
    ScatterService.prototype.login = function () {
        var _this = this;
        console.log("ScatterService.login()");
        this.feed.setLoading("login", true);
        return new Promise(function (resolve, reject) {
            if (_this.lib.identity) {
                _this.setIdentity(_this.lib.identity);
                resolve(_this.lib.identity);
            }
            else {
                var loginTimer = setTimeout(function (_) {
                    _this.feed.setLoading("login", false);
                    reject("connection timeout");
                }, 5000);
                _this.connectApp().then(function () {
                    _this.lib.getIdentity({ "accounts": [_this.network.eosconf] })
                        .then(function (identity) {
                        clearTimeout(loginTimer);
                        _this.setIdentity(identity);
                        _this.setLogged();
                        _this.feed.setLoading("login", false);
                        resolve(identity);
                    })
                        .catch(reject);
                }).catch(reject);
            }
        });
    };
    ScatterService.prototype.logout = function () {
        var _this = this;
        console.log("ScatterService.logout()");
        this.feed.setLoading("login", false);
        return new Promise(function (resolve, reject) {
            _this.connectApp().then(function () {
                _this.lib.forgotten = true;
                _this.lib.forgetIdentity()
                    .then(function (err) {
                    console.log("disconnect", err);
                    _this.resetIdentity();
                    _this.feed.setLoading("login", false);
                    resolve("logout");
                })
                    .catch(reject);
            }).catch(reject);
        });
    };
    Object.defineProperty(ScatterService.prototype, "logged", {
        get: function () {
            if (!this.lib)
                return false;
            return !!this.lib.identity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterService.prototype, "username", {
        get: function () {
            if (!this.lib)
                return "";
            return this.lib.identity ? this.lib.identity.name : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterService.prototype, "authorization", {
        get: function () {
            if (!this.account) {
                console.error("ScatterService.authorization()");
                return { authorization: ["unknown@unknown"] };
            }
            return {
                authorization: [this.account.name + "@" + this.account.authority]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterService.prototype, "connected", {
        get: function () {
            return this._connected;
        },
        enumerable: true,
        configurable: true
    });
    ScatterService.prototype.getTableRows = function (contract, scope, table, tkey, lowerb, upperb, limit, ktype, ipos) {
        var _this = this;
        // console.log("ScatterService.getTableRows()");
        // https://github.com/EOSIO/eosjs-api/blob/master/docs/api.md#eos.getTableRows
        return new Promise(function (resolve, reject) {
            _this.waitEosjs.then(function () {
                var json = {
                    code: contract,
                    index_position: ipos,
                    json: true,
                    key_type: ktype,
                    limit: limit,
                    lower_bound: lowerb,
                    scope: scope,
                    table: table,
                    table_key: tkey,
                    upper_bound: upperb
                };
                _this.rpc.get_table_rows(json).then(function (_data) {
                    resolve(_data);
                }).catch(function (error) {
                    console.error(error);
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    ScatterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _eosio_token_math_service__WEBPACK_IMPORTED_MODULE_3__["EosioTokenMathService"]])
    ], ScatterService);
    return ScatterService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! long */ "./node_modules/long/dist/long.js");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_1__);


var Utils = /** @class */ (function () {
    function Utils(contract, scatter) {
        if (contract === void 0) { contract = ""; }
        if (scatter === void 0) { scatter = null; }
        var _this = this;
        // OLD eosjs encodeName solution ------------------------------------------------------
        this.charmap = '.12345abcdefghijklmnopqrstuvwxyz';
        this.charidx = function (ch) {
            var idx = _this.charmap.indexOf(ch);
            if (idx === -1)
                throw new TypeError("Invalid character: '" + ch + "'");
            return idx;
        };
        this.contract = contract;
        this.scatter = scatter;
        this.code_0 = "0".charCodeAt(0);
        this.code_1 = "1".charCodeAt(0);
        this.code_4 = "4".charCodeAt(0);
        this.code_9 = "9".charCodeAt(0);
        this.code_a = "a".charCodeAt(0);
        this.code_f = "f".charCodeAt(0);
        this.code_z = "z".charCodeAt(0);
    }
    Utils.prototype.decodeNibble = function (nib) {
        var nibble = [0, 0, 0, 0];
        var value = 0;
        if (this.code_0 <= nib && nib <= this.code_9) {
            value = nib - this.code_0;
        }
        else if (this.code_a <= nib && nib <= this.code_f) {
            value = nib - this.code_a + 10;
        }
        nibble[0] = (value & 8) > 0 ? 1 : 0;
        nibble[1] = (value & 4) > 0 ? 1 : 0;
        nibble[2] = (value & 2) > 0 ? 1 : 0;
        nibble[3] = (value & 1) > 0 ? 1 : 0;
        return nibble;
    };
    Utils.prototype.encodeNibble = function (index, bits) {
        var value = 0;
        value += bits[index + 0] == 1 ? 8 : 0;
        value += bits[index + 1] == 1 ? 4 : 0;
        value += bits[index + 2] == 1 ? 2 : 0;
        value += bits[index + 3] == 1 ? 1 : 0;
        if (0 <= value && value <= 9) {
            return "" + value;
        }
        switch (value) {
            case 10: return "a";
            case 11: return "b";
            case 12: return "c";
            case 13: return "d";
            case 14: return "e";
            case 15: return "f";
        }
        return "?";
    };
    // _num is an hexa
    Utils.prototype.decodeUint64 = function (_num) {
        var bits = [];
        var num = _num.substr(2);
        for (var i = 0; i < num.length; i++) {
            bits = bits.concat(this.decodeNibble(num.charCodeAt(i)));
        }
        return bits;
    };
    Utils.prototype.encodeUnit64 = function (bits) {
        var slugid = { top: "0x", low: "0x" };
        var str = "top";
        for (var i = 0; i < bits.length; i += 4) {
            if (i >= 128)
                str = "low";
            slugid[str] += this.encodeNibble(i, bits);
        }
        return slugid;
    };
    Utils.prototype.extractLength = function (bits) {
        if (bits.length != 256)
            console.error("ERROR: extractLength(bits) bits must be an array of 256 bits");
        return bits[250] * 32 + bits[251] * 16 + bits[252] * 8 + bits[253] * 4 + bits[254] * 2 + bits[255] * 1;
    };
    Utils.prototype.insertLength = function (bits, length) {
        if (bits.length != 256)
            console.error("ERROR: extractLength(bits) bits must be an array of 256 bits");
        bits[250] = (length & 32) ? 1 : 0;
        bits[251] = (length & 16) ? 1 : 0;
        bits[252] = (length & 8) ? 1 : 0;
        bits[253] = (length & 4) ? 1 : 0;
        bits[254] = (length & 2) ? 1 : 0;
        bits[255] = (length & 1) ? 1 : 0;
    };
    Utils.prototype.valueToChar = function (v) {
        if (v == 0)
            return '.';
        if (v == 1)
            return '-';
        if (v < 6)
            return String.fromCharCode(v + this.code_0 - 1);
        if (v < 32)
            return String.fromCharCode(v + this.code_a - 6);
        console.assert(false, "ERROR: value out of range [0-31]", v);
        return '?';
    };
    Utils.prototype.charToValue = function (c) {
        console.assert(c.length == 1, "ERROR: c MUST be a character (string with length == 1). Got", typeof c, c);
        if (c == ".")
            return 0;
        if (c == "-")
            return 1;
        if (this.code_0 < c.charCodeAt(0) && c.charCodeAt(0) <= this.code_4)
            return c.charCodeAt(0) - this.code_1 + 2;
        if (this.code_a <= c.charCodeAt(0) && c.charCodeAt(0) <= this.code_z)
            return c.charCodeAt(0) - this.code_a + 6;
        console.assert(false, "ERROR: character '" + c + "' is not in allowed character set for slugid ");
        return -1;
    };
    Utils.prototype.extractChar = function (c, bits) {
        var encode = 5;
        var pot = Math.pow(2, encode - 1); // 16
        var value = 0;
        var index = c * encode;
        for (var i = 0; i < encode; i++, pot = pot / 2) {
            value += bits[index + i] * pot;
        }
        var char = this.valueToChar(value);
        return char;
    };
    Utils.prototype.insertChar = function (value, j, bits) {
        var encode = 5;
        var index = j * encode;
        bits[index + 0] = (value & 16) > 0 ? 1 : 0;
        bits[index + 1] = (value & 8) > 0 ? 1 : 0;
        bits[index + 2] = (value & 4) > 0 ? 1 : 0;
        bits[index + 3] = (value & 2) > 0 ? 1 : 0;
        bits[index + 4] = (value & 1) > 0 ? 1 : 0;
    };
    Utils.prototype.decodeSlug = function (sluig) {
        // decodeSlug() 0x41ae9c04d34873482a78000000000000 0x00000000000000000000000000000010
        // console.log("decodeSlug()", nick.top, nick.low);
        var bits = [];
        bits = this.decodeUint64(sluig.top).concat(this.decodeUint64(sluig.low));
        var length = bits[250] * 32 + bits[251] * 16 + bits[252] * 8 + bits[253] * 4 + bits[254] * 2 + bits[255] * 1;
        // console.log("length: ", length);
        var str = "";
        for (var i = 0; i < length; i++) {
            str += this.extractChar(i, bits);
        }
        // console.log("str: ", str);
        sluig.str = str;
        return sluig;
    };
    Utils.prototype.encodeSlug = function (name) {
        var bits = [];
        for (var i = 0; i < 256; i++) {
            bits.push(0);
        }
        for (var i = 0; i < name.length; i++) {
            var value = this.charToValue(name[i]);
            this.insertChar(value, i, bits);
        }
        this.insertLength(bits, name.length);
        var slug = this.encodeUnit64(bits);
        slug = this.decodeSlug(slug);
        console.assert(slug.str == name, "ERROR: slug.str: ", slug.str, [slug.str], [name]);
        return slug;
    };
    Utils.prototype.slugTo128bits = function (slug) {
        var str = "0x";
        var topbits = this.decodeUint64(slug.top);
        var lowbits = this.decodeUint64(slug.low);
        var mixbits = [];
        for (var i = 0; i < topbits.length; i++) {
            mixbits.push(topbits[i] ^ lowbits[i] ? 1 : 0);
        }
        for (var i = 0; i < mixbits.length; i += 4) {
            str += this.encodeNibble(i, mixbits);
        }
        return str;
    };
    Utils.prototype.oldEosjsEncodeName = function (name, littleEndian) {
        if (littleEndian === void 0) { littleEndian = false; }
        if (typeof name !== 'string')
            throw new TypeError('name parameter is a required string');
        if (name.length > 12)
            throw new TypeError('A name can be up to 12 characters long');
        var bitstr = '';
        for (var i = 0; i <= 12; i++) {
            var c = i < name.length ? this.charidx(name[i]) : 0;
            var bitlen = i < 12 ? 5 : 4;
            var bits = Number(c).toString(2);
            if (bits.length > bitlen) {
                throw new TypeError('Invalid name ' + name);
            }
            bits = '0'.repeat(bitlen - bits.length) + bits;
            bitstr += bits;
        }
        var value = long__WEBPACK_IMPORTED_MODULE_1__["fromString"](bitstr, true, 2);
        // convert to LITTLE_ENDIAN
        var leHex = '';
        var bytes = littleEndian ? value.toBytesLE() : value.toBytesBE();
        for (var _i = 0, bytes_1 = bytes; _i < bytes_1.length; _i++) {
            var b = bytes_1[_i];
            var n = Number(b).toString(16);
            leHex += (n.length === 1 ? '0' : '') + n;
        }
        var ulName = long__WEBPACK_IMPORTED_MODULE_1__["fromString"](leHex, true, 16).toString();
        // console.log('encodeName', name, value.toString(), ulName.toString(), JSON.stringify(bitstr.split(/(.....)/).slice(1)))
        return ulName.toString();
    };
    // -------------------------------------------------------
    Utils.prototype.encodeName = function (name) {
        /*
        const buffer: Serialize.SerialBuffer = new Serialize.SerialBuffer();
        buffer.pushName(name);
        var number = buffer.getUint64AsNumber();
        */
        var number = this.oldEosjsEncodeName(name);
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(number);
    };
    // smart contract ---------------------
    Utils.prototype.excecute = function (action, params) {
        var _this = this;
        console.log("Utils.excecute()", action, [params]);
        return new Promise(function (resolve, reject) {
            try {
                _this.scatter.executeTransaction(_this.contract, action, params).then(function (result) {
                    resolve(result);
                }).catch(function (err) { console.error(err); reject(err); });
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        }); // .catch(err => console.error(err) );
    };
    /*
    excecute(action: string, params: any) {
        console.log("Utils.excecute()", action, [params]);
        return new Promise<any>((resolve, reject) => {
            try {
                this.scatter.getContract(this.contract).then(contract => {
                    try {
console.log("*************************************************");
console.log("https://eosio.github.io/eosjs/guides/2.-Transaction-Examples.html");
console.log("*************************************************");
                        contract[action](params, this.scatter.authorization).then((response => {
                            console.log("Utils.excecute() ---> ", [response]);
                            resolve(response);
                        })).catch(err => { reject(err); });
                    } catch (err) { reject(err); }
                }).catch(err => { reject(err); });
            } catch (err) { reject(err); }
        }); // .catch(err => console.error(err) );
    }
    */
    Utils.prototype.getTable = function (table, params) {
        if (params === void 0) { params = {}; }
        var _p = Object.assign({
            contract: this.contract,
            scope: this.contract,
            table_key: "0",
            lower_bound: "0",
            upper_bound: "-1",
            limit: 25,
            key_type: "i64",
            index_position: "1"
        }, params);
        return this.scatter.getTableRows(_p.contract, _p.scope, table, _p.table_key, _p.lower_bound, _p.upper_bound, _p.limit, _p.key_type, _p.index_position);
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/services/vapaee.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/vapaee.service.ts ***!
  \********************************************/
/*! exports provided: VapaeeService, Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VapaeeService", function() { return VapaeeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _scatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _common_common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var VapaeeService = /** @class */ (function () {
    function VapaeeService(scatter, cookies, analytics, datePipe) {
        var _this = this;
        this.scatter = scatter;
        this.cookies = cookies;
        this.analytics = analytics;
        this.datePipe = datePipe;
        this.onLoggedAccountChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onCurrentAccountChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onHistoryChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSummaryChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onBlocklistChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onTokensReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.vapaeetokens = "vapaeetokens";
        this.activityPagesize = 10;
        this.waitOrdertables = new Promise(function (resolve) {
            _this.setOrdertables = resolve;
        });
        this.waitTokenstats = new Promise(function (resolve) {
            _this.setTokenstats = resolve;
        });
        this.waitReady = new Promise(function (resolve) {
            _this.setReady = resolve;
        });
        this.scopes = {};
        this.activity = { total: 0, events: {}, list: [] };
        this.current = this.default;
        this.contract = this.vapaeetokens;
        this.utils = new _utils_service__WEBPACK_IMPORTED_MODULE_3__["Utils"](this.contract, this.scatter);
        this.feed = new _feedback_service__WEBPACK_IMPORTED_MODULE_5__["Feedback"]();
        this.scatter.onLogggedStateChange.subscribe(this.onLoggedChange.bind(this));
        this.updateLogState();
        this.fetchTokens().then(function (data) {
            _this.tokens = data.tokens;
            _this.tokens.push({
                appname: "Viitasphere",
                contract: "viitasphere1",
                logo: "/assets/logos/viitasphere.png",
                logolg: "/assets/logos/viitasphere-lg.png",
                precision: 4,
                scope: "viitct.tlos",
                symbol: "VIITA",
                verified: false,
                website: "https://viitasphere.com"
            });
            _this.tokens.push({
                appname: "Viitasphere",
                contract: "viitasphere1",
                logo: "/assets/logos/viitasphere.png",
                logolg: "/assets/logos/viitasphere-lg.png",
                precision: 0,
                scope: "viitct.tlos",
                symbol: "VIICT",
                verified: false,
                website: "https://viitasphere.com"
            });
            _this.resortTokens();
            _this.zero_telos = new Asset("0.0000 TLOS", _this);
            _this.setReady();
            _this.fetchTokensStats();
            _this.getAllTablesSumaries();
        });
    }
    Object.defineProperty(VapaeeService.prototype, "default", {
        // getters -------------------------------------------------------------
        get: function () {
            return this.scatter.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeService.prototype, "logged", {
        get: function () {
            if (this.scatter.logged && !this.scatter.account) {
                /*
                console.error("WARNING!!!");
                console.log(this.scatter);
                console.log(this.scatter.username);
                console.error("*******************");
                */
            }
            return this.scatter.logged ?
                (this.scatter.account ? this.scatter.account.name : this.scatter.default.name) :
                null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeService.prototype, "account", {
        get: function () {
            return this.scatter.logged ?
                this.scatter.account :
                this.scatter.default;
        },
        enumerable: true,
        configurable: true
    });
    VapaeeService.prototype.inverseScope = function (scope) {
        if (!scope)
            return scope;
        console.assert(typeof scope == "string", "ERROR: string scope expected, got ", typeof scope, scope);
        var parts = scope.split(".");
        console.assert(parts.length == 2, "ERROR: scope format expected is xxx.yyy, got: ", typeof scope, scope);
        var inverse = parts[1] + "." + parts[0];
        return inverse;
    };
    // -- User Log State ---------------------------------------------------
    VapaeeService.prototype.login = function () {
        var _this = this;
        this.feed.setLoading("login", true);
        this.logout();
        this.feed.setLoading("logout", false);
        return this.scatter.login().then(function () {
            _this.updateLogState();
            _this.feed.setLoading("login", false);
        }).catch(function (e) {
            _this.feed.setLoading("login", false);
            throw e;
        });
    };
    VapaeeService.prototype.logout = function () {
        this.feed.setLoading("logout", true);
        this.scatter.logout();
    };
    VapaeeService.prototype.onLogout = function () {
        var _this = this;
        this.feed.setLoading("logout", false);
        console.log("VapaeeService.onLogout()");
        this.resetCurrentAccount(this.default.name);
        this.updateLogState();
        this.onLoggedAccountChange.next(this.logged);
        this.analytics.setUserId(0);
        this.cookies.delete("login");
        setTimeout(function (_) { _this.last_logged = _this.logged; }, 400);
    };
    VapaeeService.prototype.onLogin = function (name) {
        console.log("VapaeeService.onLogin()", name);
        this.resetCurrentAccount(name);
        this.getDeposits();
        this.getBalances();
        this.updateLogState();
        this.getUserOrders();
        this.onLoggedAccountChange.next(this.logged);
        this.last_logged = this.logged;
        this.analytics.setUserId(this.logged);
        this.cookies.set("login", this.logged);
    };
    VapaeeService.prototype.onLoggedChange = function () {
        console.log("VapaeeService.onLoggedChange()");
        if (this.scatter.logged) {
            this.onLogin(this.scatter.account.name);
        }
        else {
            this.onLogout();
        }
    };
    VapaeeService.prototype.resetCurrentAccount = function (profile) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("VapaeeService.resetCurrentAccount() current:", this.current, "next:", profile);
                        if (!(this.current.name != profile && (this.current.name == this.last_logged || profile != "guest"))) return [3 /*break*/, 4];
                        this.feed.setLoading("account", true);
                        this.current = this.default;
                        this.current.name = profile;
                        if (!(profile != "guest")) return [3 /*break*/, 2];
                        _a = this.current;
                        return [4 /*yield*/, this.getAccountData(this.current.name)];
                    case 1:
                        _a.data = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.error("------------------------------------------");
                        console.error("------------------------------------------");
                        console.error("WARNING!!! current is guest", [profile, this.account, this.current]);
                        console.error("------------------------------------------");
                        console.error("------------------------------------------");
                        _b.label = 3;
                    case 3:
                        // this.scopes = {};
                        this.balances = [];
                        this.userorders = {};
                        // console.log("this.onCurrentAccountChange.next(this.current.name) !!!!!!");
                        this.onCurrentAccountChange.next(this.current.name);
                        this.updateCurrentUser();
                        this.feed.setLoading("account", false);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VapaeeService.prototype.updateLogState = function () {
        var _this = this;
        this.loginState = "no-scatter";
        this.feed.setLoading("log-state", true);
        // console.error("VapaeeService.updateLogState() ", this.loginState);
        this.scatter.waitConnected.then(function () {
            _this.loginState = "no-logged";
            // console.error("VapaeeService.updateLogState()   ", this.loginState);
            if (_this.scatter.logged) {
                _this.loginState = "account-ok";
                // console.error("VapaeeService.updateLogState()     ", this.loginState);
            }
            _this.feed.setLoading("log-state", false);
        });
        var timer = setInterval(function (_) {
            if (!_this.feed.loading("connect")) {
                _this.feed.setLoading("log-state", false);
                clearInterval(timer);
            }
        }, 200);
    };
    VapaeeService.prototype.getAccountData = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.scatter.queryAccountData(name).catch(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.default.data];
                        });
                    }); })];
            });
        });
    };
    // Actions --------------------------------------------------------------
    VapaeeService.prototype.createOrder = function (type, amount, price) {
        var _this = this;
        // "alice", "buy", "2.50000000 CNT", "0.40000000 TLOS"
        // name owner, name type, const asset & total, const asset & price
        return this.utils.excecute("order", {
            owner: this.scatter.account.name,
            type: type,
            total: amount.toString(8),
            price: price.toString(8)
        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateTrade(amount.token, price.token);
                return [2 /*return*/, result];
            });
        }); });
    };
    VapaeeService.prototype.cancelOrder = function (type, comodity, currency, orders) {
        var _this = this;
        // '["alice", "buy", "CNT", "TLOS", [1,0]]'
        // name owner, name type, const asset & total, const asset & price
        return this.utils.excecute("cancel", {
            owner: this.scatter.account.name,
            type: type,
            comodity: comodity.symbol,
            currency: currency.symbol,
            orders: orders
        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateTrade(comodity, currency);
                return [2 /*return*/, result];
            });
        }); });
    };
    VapaeeService.prototype.deposit = function (quantity) {
        var _this = this;
        // name owner, name type, const asset & total, const asset & price
        var util = new _utils_service__WEBPACK_IMPORTED_MODULE_3__["Utils"](quantity.token.contract, this.scatter);
        return util.excecute("transfer", {
            from: this.scatter.account.name,
            to: this.vapaeetokens,
            quantity: quantity.toString(),
            memo: "deposit"
        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeposits()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getBalances()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); });
    };
    VapaeeService.prototype.withdraw = function (quantity) {
        var _this = this;
        return this.utils.excecute("withdraw", {
            owner: this.scatter.account.name,
            quantity: quantity.toString()
        }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeposits()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getBalances()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); });
    };
    // Tokens --------------------------------------------------------------
    VapaeeService.prototype.addFiatToken = function (fiat) {
        var _this = this;
        // console.log("VapaeeService.addFiatToken()", fiat);
        this.waitReady.then(function (_) {
            _this.tokens.push({
                symbol: fiat.symbol,
                precision: fiat.precision || 4,
                contract: "nocontract",
                appname: fiat.appname,
                website: "",
                logo: "",
                logolg: "",
                scope: "",
                stat: null,
                verified: false,
                fiat: true
            });
        });
    };
    // --------------------------------------------------------------
    // Getters 
    VapaeeService.prototype.getBalance = function (token) {
        for (var i in this.balances) {
            if (this.balances[i].token.symbol == token.symbol) {
                return this.balances[i];
            }
        }
        return new Asset("0 " + token.symbol, this);
    };
    VapaeeService.prototype.getSomeFreeFakeTokens = function (symbol) {
        if (symbol === void 0) { symbol = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _token;
            return __generator(this, function (_a) {
                console.log("VapaeeService.getSomeFreeFakeTokens()");
                _token = symbol;
                this.feed.setLoading("freefake-" + _token || "token", true);
                return [2 /*return*/, this.waitTokenstats.then(function (_) {
                        var token = null;
                        var counts = 0;
                        for (var i = 0; i < 100; i++) {
                            if (symbol) {
                                if (_this.tokens[i].symbol == symbol) {
                                    token = _this.tokens[i];
                                }
                            }
                            var random = Math.random();
                            // console.log(i, "Random: ", random);
                            if (!token && random > 0.5) {
                                token = _this.tokens[i % _this.tokens.length];
                                if (token.fake) {
                                    random = Math.random();
                                    if (random > 0.5) {
                                        token = _this.telos;
                                    }
                                }
                                else {
                                    token = null;
                                }
                            }
                            if (i < 100 && token && _this.getBalance(token).amount.toNumber() > 0) {
                                token = null;
                            }
                            // console.log(i, "token: ", token);
                            if (token) {
                                random = Math.random();
                                var monto = Math.floor(10000 * random) / 100;
                                var quantity = new Asset("" + monto + " " + token.symbol, _this);
                                var memo = "you get " + quantity.valueToString() + " free fake " + token.symbol + " tokens to play on vapaee.io DEX";
                                return _this.utils.excecute("issue", {
                                    to: _this.scatter.account.name,
                                    quantity: quantity.toString(),
                                    memo: memo
                                }).then(function (_) {
                                    _this.getBalances();
                                    _this.feed.setLoading("freefake-" + _token || "token", false);
                                    return memo;
                                }).catch(function (e) {
                                    _this.feed.setLoading("freefake-" + _token || "token", false);
                                    throw e;
                                });
                            }
                        }
                    })];
            });
        });
    };
    VapaeeService.prototype.getTokenNow = function (sym) {
        for (var i in this.tokens) {
            if (this.tokens[i].symbol.toUpperCase() == sym.toUpperCase()) {
                return this.tokens[i];
            }
        }
        return null;
    };
    VapaeeService.prototype.getToken = function (sym) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.waitReady.then(function (_) {
                        return _this.getTokenNow(sym);
                    })];
            });
        });
    };
    VapaeeService.prototype.getDeposits = function (account) {
        if (account === void 0) { account = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("VapaeeService.getDeposits()");
                this.feed.setLoading("deposits", true);
                return [2 /*return*/, this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var deposits, result, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    deposits = [];
                                    if (!account && this.current.name) {
                                        account = this.current.name;
                                    }
                                    if (!account) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.fetchDeposits(account)];
                                case 1:
                                    result = _a.sent();
                                    for (i in result.rows) {
                                        deposits.push(new Asset(result.rows[i].amount, this));
                                    }
                                    _a.label = 2;
                                case 2:
                                    this.deposits = deposits;
                                    this.feed.setLoading("deposits", false);
                                    return [2 /*return*/, this.deposits];
                            }
                        });
                    }); })];
            });
        });
    };
    VapaeeService.prototype.getBalances = function (account) {
        if (account === void 0) { account = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("VapaeeService.getBalances()");
                this.feed.setLoading("balances", true);
                return [2 /*return*/, this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var balances;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!account && this.current.name) {
                                        account = this.current.name;
                                    }
                                    if (!account) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.fetchBalances(account)];
                                case 1:
                                    balances = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    this.balances = balances;
                                    // console.log("VapaeeService balances updated");
                                    this.feed.setLoading("balances", false);
                                    return [2 /*return*/, this.balances];
                            }
                        });
                    }); })];
            });
        });
    };
    VapaeeService.prototype.getThisSellOrders = function (table, ids) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.feed.setLoading("thisorders", true);
                return [2 /*return*/, this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b, _i, i, id, gotit, j, res;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    result = [];
                                    _a = [];
                                    for (_b in ids)
                                        _a.push(_b);
                                    _i = 0;
                                    _c.label = 1;
                                case 1:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    i = _a[_i];
                                    id = ids[i];
                                    gotit = false;
                                    for (j in result) {
                                        if (result[j].id == id) {
                                            gotit = true;
                                            break;
                                        }
                                    }
                                    if (gotit) {
                                        return [3 /*break*/, 3];
                                    }
                                    return [4 /*yield*/, this.fetchOrders({ scope: table, limit: 1, lower_bound: id.toString() })];
                                case 2:
                                    res = _c.sent();
                                    result = result.concat(res.rows);
                                    _c.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    this.feed.setLoading("thisorders", false);
                                    return [2 /*return*/, result];
                            }
                        });
                    }); })];
            });
        });
    };
    VapaeeService.prototype.getUserOrders = function (account) {
        if (account === void 0) { account = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("VapaeeService.getUserOrders()");
                this.feed.setLoading("userorders", true);
                return [2 /*return*/, this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var userorders, list, map, i, ids, table, orders;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!account && this.current.name) {
                                        account = this.current.name;
                                    }
                                    if (!account) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.fetchUserOrders(account)];
                                case 1:
                                    userorders = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    list = userorders.rows;
                                    map = {};
                                    i = 0;
                                    _a.label = 3;
                                case 3:
                                    if (!(i < list.length)) return [3 /*break*/, 6];
                                    ids = list[i].ids;
                                    table = list[i].table;
                                    return [4 /*yield*/, this.getThisSellOrders(table, ids)];
                                case 4:
                                    orders = _a.sent();
                                    map[table] = {
                                        table: table,
                                        orders: this.auxProcessRowsToOrders(orders),
                                        ids: ids
                                    };
                                    _a.label = 5;
                                case 5:
                                    i++;
                                    return [3 /*break*/, 3];
                                case 6:
                                    this.userorders = map;
                                    // console.log(this.userorders);
                                    this.feed.setLoading("userorders", false);
                                    return [2 /*return*/, this.userorders];
                            }
                        });
                    }); })];
            });
        });
    };
    VapaeeService.prototype.updateActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pagesize, pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.feed.setLoading("activity", true);
                        pagesize = this.activityPagesize;
                        return [4 /*yield*/, this.getActivityTotalPages(pagesize)];
                    case 1:
                        pages = _a.sent();
                        return [4 /*yield*/, Promise.all([
                                this.fetchActivity(pages - 2, pagesize),
                                this.fetchActivity(pages - 1, pagesize),
                                this.fetchActivity(pages - 0, pagesize)
                            ])];
                    case 2:
                        _a.sent();
                        this.feed.setLoading("activity", false);
                        return [2 /*return*/];
                }
            });
        });
    };
    VapaeeService.prototype.loadMoreActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pagesize, first, id, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.activity.list.length == 0)
                            return [2 /*return*/];
                        this.feed.setLoading("activity", true);
                        pagesize = this.activityPagesize;
                        first = this.activity.list[this.activity.list.length - 1];
                        id = first.id - pagesize;
                        page = Math.floor((id - 1) / pagesize);
                        return [4 /*yield*/, this.fetchActivity(page, pagesize)];
                    case 1:
                        _a.sent();
                        this.feed.setLoading("activity", false);
                        return [2 /*return*/];
                }
            });
        });
    };
    VapaeeService.prototype.updateTrade = function (comodity, currency, updateUser) {
        if (updateUser === void 0) { updateUser = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("VapaeeService.updateTrade()");
                return [2 /*return*/, Promise.all([
                        this.getTransactionHistory(comodity, currency, -1, -1, true),
                        this.getBlockHistory(comodity, currency, -1, -1, true),
                        this.getSellOrders(comodity, currency, true),
                        this.getBuyOrders(comodity, currency, true),
                        this.getTableSummary(comodity, currency, true),
                        this.getOrderTables(),
                        updateUser ? this.updateCurrentUser() : null
                    ]).then(function (r) {
                        _this.resortTokens();
                        return r;
                    })];
            });
        });
    };
    VapaeeService.prototype.updateCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("VapaeeService.updateCurrentUser()");
                this.feed.setLoading("current", true);
                return [2 /*return*/, Promise.all([
                        this.getUserOrders(),
                        this.getDeposits(),
                        this.getBalances()
                    ]).then(function (_) {
                        _this.feed.setLoading("current", false);
                        return _;
                    }).catch(function (e) {
                        _this.feed.setLoading("current", false);
                        throw e;
                    })];
            });
        });
    };
    VapaeeService.prototype.getBlockHistoryTotalPagesFor = function (scope, pagesize) {
        if (!this.scopes || !this.scopes[scope])
            return 0;
        var total = this.scopes[scope].blocks;
        var mod = total % pagesize;
        var dif = total - mod;
        var pages = dif / pagesize;
        if (mod > 0) {
            pages += 1;
        }
        return pages;
    };
    VapaeeService.prototype.getHistoryTotalPagesFor = function (scope, pagesize) {
        if (!this.scopes || !this.scopes[scope])
            return 0;
        var total = this.scopes[scope].deals;
        var mod = total % pagesize;
        var dif = total - mod;
        var pages = dif / pagesize;
        if (mod > 0) {
            pages += 1;
        }
        return pages;
    };
    VapaeeService.prototype.getActivityTotalPages = function (pagesize) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.utils.getTable("events", {
                        limit: 1
                    }).then(function (result) {
                        var params = result.rows[0].params;
                        var total = parseInt(params.split(" ")[0]) - 1;
                        var mod = total % pagesize;
                        var dif = total - mod;
                        var pages = dif / pagesize;
                        if (mod > 0) {
                            pages += 1;
                        }
                        _this.activity.total = total;
                        console.log("VapaeeService.getActivityTotalPages() total: ", total, " pages: ", pages);
                        return pages;
                    })];
            });
        });
    };
    VapaeeService.prototype.getTransactionHistory = function (comodity, currency, page, pagesize, force) {
        if (page === void 0) { page = -1; }
        if (pagesize === void 0) { pagesize = -1; }
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scope, aux, result;
            return __generator(this, function (_a) {
                scope = comodity.symbol.toLowerCase() + "." + currency.symbol.toLowerCase();
                if (comodity == this.telos) {
                    scope = currency.symbol.toLowerCase() + "." + comodity.symbol.toLowerCase();
                }
                aux = null;
                result = null;
                this.feed.setLoading("history." + scope, true);
                aux = this.waitOrdertables.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var pages;
                    return __generator(this, function (_a) {
                        if (pagesize == -1) {
                            pagesize = 10;
                        }
                        if (page == -1) {
                            pages = this.getHistoryTotalPagesFor(scope, pagesize);
                            page = pages - 3;
                            if (page < 0)
                                page = 0;
                        }
                        return [2 /*return*/, Promise.all([
                                this.fetchHistory(scope, page + 0, pagesize),
                                this.fetchHistory(scope, page + 1, pagesize),
                                this.fetchHistory(scope, page + 2, pagesize)
                            ]).then(function (_) {
                                _this.feed.setLoading("history." + scope, false);
                                return _this.scopes[scope].history;
                            }).catch(function (e) {
                                _this.feed.setLoading("history." + scope, false);
                                throw e;
                            })];
                    });
                }); });
                if (this.scopes[scope] && !force) {
                    result = this.scopes[scope].history;
                }
                else {
                    result = aux;
                }
                this.onHistoryChange.next(result);
                return [2 /*return*/, result];
            });
        });
    };
    VapaeeService.prototype.auxHourToLabel = function (hour) {
        var d = new Date(hour * 1000 * 60 * 60);
        var label = d.getHours() == 0 ? this.datePipe.transform(d, 'dd/MM') : d.getHours() + "h";
        return label;
    };
    VapaeeService.prototype.getBlockHistory = function (comodity, currency, page, pagesize, force) {
        if (page === void 0) { page = -1; }
        if (pagesize === void 0) { pagesize = -1; }
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scope, aux, result;
            return __generator(this, function (_a) {
                console.log("VapaeeService.getBlockHistory()", comodity.symbol);
                scope = comodity.symbol.toLowerCase() + "." + currency.symbol.toLowerCase();
                if (comodity == this.telos) {
                    scope = currency.symbol.toLowerCase() + "." + comodity.symbol.toLowerCase();
                }
                aux = null;
                result = null;
                this.feed.setLoading("block-history." + scope, true);
                aux = this.waitOrdertables.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var pages, promises, i, promise;
                    return __generator(this, function (_a) {
                        if (pagesize == -1) {
                            pagesize = 10;
                        }
                        if (page == -1) {
                            pages = this.getBlockHistoryTotalPagesFor(scope, pagesize);
                            page = pages - 3;
                            if (page < 0)
                                page = 0;
                        }
                        promises = [];
                        for (i = 0; i < pages; i++) {
                            promise = this.fetchBlockHistory(scope, i, pagesize);
                            promises.push(promise);
                        }
                        return [2 /*return*/, Promise.all(promises).then(function (_) {
                                _this.feed.setLoading("block-history." + scope, false);
                                _this.scopes[scope].blocklist = [];
                                var now = new Date();
                                var hora = 1000 * 60 * 60;
                                var hour = Math.floor(now.getTime() / hora);
                                // console.log("->", hour);
                                var last_block = null;
                                var last_hour = null;
                                for (var i in _this.scopes[scope].block) {
                                    var block = _this.scopes[scope].block[i];
                                    var label = _this.auxHourToLabel(block.hour);
                                    // console.log("->", i, label, block);
                                    var obj = [label];
                                    if (last_block) {
                                        var dif = block.hour - last_block.hour;
                                        for (var j = 1; j < dif; j++) {
                                            var label_i = _this.auxHourToLabel(last_block.hour + j);
                                            // console.log("-->", j, label_i, block);
                                            var price = last_block.price.amount.toNumber();
                                            var aux = [label_i, price, price, price, price];
                                            _this.scopes[scope].blocklist.push(aux);
                                        }
                                    }
                                    obj.push(block.max.amount.toNumber());
                                    obj.push(block.entrance.amount.toNumber());
                                    obj.push(block.price.amount.toNumber());
                                    obj.push(block.min.amount.toNumber());
                                    _this.scopes[scope].blocklist.push(obj);
                                    last_block = block;
                                }
                                if (last_block && hour != last_block.hour) {
                                    var dif = hour - last_block.hour;
                                    for (var j = 1; j <= dif; j++) {
                                        var label_i = _this.auxHourToLabel(last_block.hour + j);
                                        var price = last_block.price.amount.toNumber();
                                        var aux = [label_i, price, price, price, price];
                                        _this.scopes[scope].blocklist.push(aux);
                                    }
                                }
                                // console.log("---------------->", this.scopes[scope].blocklist);
                                _this.onBlocklistChange.next(_this.scopes[scope].blocklist);
                                return _this.scopes[scope].block;
                            }).catch(function (e) {
                                _this.feed.setLoading("block-history." + scope, false);
                                throw e;
                            })];
                    });
                }); });
                if (this.scopes[scope] && !force) {
                    result = this.scopes[scope].block;
                }
                else {
                    result = aux;
                }
                this.onHistoryChange.next(result);
                return [2 /*return*/, result];
            });
        });
    };
    VapaeeService.prototype.getSellOrders = function (comodity, currency, force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scope, aux, result;
            return __generator(this, function (_a) {
                scope = comodity.symbol.toLowerCase() + "." + currency.symbol.toLowerCase();
                aux = null;
                result = null;
                this.feed.setLoading("sellorders", true);
                aux = this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                    var orders, sell, list, row, i, order, sum, sumtelos, j, order_row;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.fetchOrders({ scope: scope, limit: 50, index_position: "2", key_type: "i64" })];
                            case 1:
                                orders = _a.sent();
                                this.scopes[scope] = this.auxAssertScope(scope);
                                sell = this.auxProcessRowsToOrders(orders.rows);
                                sell.sort(function (a, b) {
                                    if (a.price.amount.isLessThan(b.price.amount))
                                        return -11;
                                    if (a.price.amount.isGreaterThan(b.price.amount))
                                        return 1;
                                    return 0;
                                });
                                list = [];
                                if (sell.length > 0) {
                                    for (i = 0; i < sell.length; i++) {
                                        order = sell[i];
                                        if (list.length > 0) {
                                            row = list[list.length - 1];
                                            if (row.price.amount.eq(order.price.amount)) {
                                                row.total.amount = row.total.amount.plus(order.total.amount);
                                                row.telos.amount = row.telos.amount.plus(order.telos.amount);
                                                row.owners[order.owner] = true;
                                                row.orders.push(order);
                                                continue;
                                            }
                                        }
                                        row = {
                                            str: order.price.toString(),
                                            price: order.price,
                                            orders: [],
                                            total: order.total.clone(),
                                            telos: order.telos.clone(),
                                            inverse: order.inverse,
                                            sum: null,
                                            sumtelos: null,
                                            owners: {}
                                        };
                                        row.owners[order.owner] = true;
                                        row.orders.push(order);
                                        list.push(row);
                                    }
                                }
                                sum = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(0);
                                sumtelos = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(0);
                                for (j in list) {
                                    order_row = list[j];
                                    sumtelos = sumtelos.plus(order_row.telos.amount);
                                    sum = sum.plus(order_row.total.amount);
                                    order_row.sumtelos = new Asset(sumtelos, order_row.telos.token);
                                    order_row.sum = new Asset(sum, order_row.total.token);
                                }
                                this.scopes[scope].orders.sell = list;
                                // if(scope=="vpe.tlos" || scope=="cnt.tlos")console.log("Sell final:", this.scopes[scope].orders.sell);
                                // if(scope=="vpe.tlos" || scope=="cnt.tlos")console.log("-------------");
                                this.feed.setLoading("sellorders", false);
                                return [2 /*return*/, orders];
                        }
                    });
                }); });
                if (this.scopes[scope] && !force) {
                    result = this.scopes[scope].orders.sell;
                }
                else {
                    result = aux;
                }
                return [2 /*return*/, result];
            });
        });
    };
    VapaeeService.prototype.getBuyOrders = function (comodity, currency, force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var invere_scope, scope, aux, result;
            return __generator(this, function (_a) {
                invere_scope = currency.symbol.toLowerCase() + "." + comodity.symbol.toLowerCase();
                scope = comodity.symbol.toLowerCase() + "." + currency.symbol.toLowerCase();
                aux = null;
                result = null;
                this.feed.setLoading("buyorders", true);
                aux = this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                    var orders, buy, list, row, i, order, sum, sumtelos, j, order_row;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.fetchOrders({ scope: invere_scope, limit: 50, index_position: "2", key_type: "i64" })];
                            case 1: return [4 /*yield*/, _a.sent()];
                            case 2:
                                orders = _a.sent();
                                this.scopes[scope] = this.auxAssertScope(scope);
                                buy = this.auxProcessRowsToOrders(orders.rows);
                                buy.sort(function (a, b) {
                                    if (a.price.amount.isLessThan(b.price.amount))
                                        return 1;
                                    if (a.price.amount.isGreaterThan(b.price.amount))
                                        return -1;
                                    return 0;
                                });
                                list = [];
                                if (buy.length > 0) {
                                    for (i = 0; i < buy.length; i++) {
                                        order = buy[i];
                                        if (list.length > 0) {
                                            row = list[list.length - 1];
                                            if (row.price.amount.eq(order.price.amount)) {
                                                row.total.amount = row.total.amount.plus(order.total.amount);
                                                row.telos.amount = row.telos.amount.plus(order.telos.amount);
                                                row.owners[order.owner] = true;
                                                row.orders.push(order);
                                                continue;
                                            }
                                        }
                                        row = {
                                            str: order.price.toString(),
                                            price: order.price,
                                            orders: [],
                                            total: order.total.clone(),
                                            telos: order.telos.clone(),
                                            inverse: order.inverse,
                                            sum: null,
                                            sumtelos: null,
                                            owners: {}
                                        };
                                        row.owners[order.owner] = true;
                                        row.orders.push(order);
                                        list.push(row);
                                    }
                                }
                                sum = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(0);
                                sumtelos = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(0);
                                for (j in list) {
                                    order_row = list[j];
                                    sumtelos = sumtelos.plus(order_row.telos.amount);
                                    sum = sum.plus(order_row.total.amount);
                                    order_row.sumtelos = new Asset(sumtelos, order_row.telos.token);
                                    order_row.sum = new Asset(sum, order_row.total.token);
                                }
                                this.scopes[scope].orders.buy = list;
                                // console.log("Buy final:", this.scopes[scope].orders.buy);
                                // console.log("-------------");
                                this.feed.setLoading("buyorders", false);
                                return [2 /*return*/, orders];
                        }
                    });
                }); });
                if (this.scopes[scope] && !force) {
                    result = this.scopes[scope].orders.buy;
                }
                else {
                    result = aux;
                }
                return [2 /*return*/, result];
            });
        });
    };
    VapaeeService.prototype.getOrderTables = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tables, i, scope, comodity, currency;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchOrderTables()];
                    case 1:
                        tables = _a.sent();
                        for (i in tables.rows) {
                            scope = tables.rows[i].table;
                            comodity = scope.split(".")[0].toUpperCase();
                            currency = scope.split(".")[1].toUpperCase();
                            this.scopes[scope] = this.auxAssertScope(scope);
                            if (tables.rows[i].pay == comodity && tables.rows[i].sell == currency) {
                                this.scopes[scope].header.buy.total = new Asset(tables.rows[i].total, this);
                                this.scopes[scope].header.buy.orders = tables.rows[i].orders;
                            }
                            if (tables.rows[i].pay == currency && tables.rows[i].sell == comodity) {
                                this.scopes[scope].header.sell.total = new Asset(tables.rows[i].total, this);
                                this.scopes[scope].header.sell.orders = tables.rows[i].orders;
                                this.scopes[scope].deals = tables.rows[i].deals;
                                this.scopes[scope].blocks = tables.rows[i].blocks;
                            }
                        }
                        // if (tables.rows.length > 0) {
                        this.setOrdertables();
                        this.waitOrdertables = new Promise(function (resolve) {
                            _this.setOrdertables = resolve;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VapaeeService.prototype.getTableSummary = function (comodity, currency, force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scope, aux, result;
            return __generator(this, function (_a) {
                scope = comodity.symbol.toLowerCase() + "." + currency.symbol.toLowerCase();
                if (comodity == this.telos) {
                    scope = currency.symbol.toLowerCase() + "." + comodity.symbol.toLowerCase();
                }
                this.feed.setLoading("summary." + scope, true);
                aux = null;
                result = null;
                aux = this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                    var summary, now, now_sec, now_hour, start_hour, ZERO_TLOS, price, crude, last_hh, i, hh, last_24h, volume, price_asset, max_price, min_price, first, i, current, current_date, vol, last, diff, ratio, percent;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.fetchSummary(scope)];
                            case 1:
                                summary = _a.sent();
                                // if(scope=="olive.tlos")console.log(scope, "---------------------------------------------------");
                                // if(scope=="olive.tlos")console.log("Summary crudo:", summary.rows);
                                this.scopes[scope] = this.auxAssertScope(scope);
                                this.scopes[scope].summary = {
                                    price: new Asset("0.0000 TLOS", this),
                                    volume: new Asset("0.0000 TLOS", this),
                                    percent: 0.3,
                                    records: summary.rows
                                };
                                now = new Date();
                                now_sec = Math.floor(now.getTime() / 1000);
                                now_hour = Math.floor(now_sec / 3600);
                                start_hour = now_hour - 23;
                                ZERO_TLOS = "0.00000000 TLOS";
                                price = ZERO_TLOS;
                                crude = {};
                                last_hh = 0;
                                for (i = 0; i < summary.rows.length; i++) {
                                    hh = summary.rows[i].hour;
                                    if (summary.rows[i].label == "lastone") {
                                        // price = summary.rows[i].price;
                                    }
                                    else {
                                        crude[hh] = summary.rows[i];
                                        if (last_hh < hh && hh < start_hour) {
                                            last_hh = hh;
                                            price = summary.rows[i].price;
                                            // if(scope=="olive.tlos")console.log("hh:", hh, "last_hh:", last_hh, "price:", price);
                                        }
                                    }
                                    /*
                                    */
                                }
                                last_24h = {};
                                volume = new Asset(ZERO_TLOS, this);
                                price_asset = new Asset(price, this);
                                max_price = price_asset.clone();
                                min_price = price_asset.clone();
                                first = null;
                                for (i = 0; i < 24; i++) {
                                    current = start_hour + i;
                                    current_date = new Date(current * 3600 * 1000);
                                    last_24h[current] = crude[current] || {
                                        label: this.auxGetLabelForHour(current % 24),
                                        price: price,
                                        volume: ZERO_TLOS,
                                        date: current_date.toISOString().split(".")[0],
                                        hour: current
                                    };
                                    // if(scope=="olive.tlos")console.log("current_date:", current_date.toISOString(), current, last_24h[current]);
                                    price = last_24h[current].price;
                                    vol = new Asset(last_24h[current].volume, this);
                                    volume.amount = volume.amount.plus(vol.amount);
                                    if (price != ZERO_TLOS && !first) {
                                        first = new Asset(price, this);
                                    }
                                    price_asset = new Asset(price, this);
                                    if (price_asset.amount.isGreaterThan(max_price.amount)) {
                                        max_price = price_asset.clone();
                                    }
                                    if (price_asset.amount.isLessThan(min_price.amount)) {
                                        min_price = price_asset.clone();
                                    }
                                }
                                if (!first) {
                                    first = new Asset(last_24h[start_hour].price, this);
                                }
                                last = new Asset(last_24h[now_hour].price, this);
                                diff = last.clone();
                                // diff.amount 
                                diff.amount = last.amount.minus(first.amount);
                                ratio = 0;
                                if (first.amount.toNumber() != 0) {
                                    ratio = diff.amount.dividedBy(first.amount).toNumber();
                                }
                                percent = Math.floor(ratio * 10000) / 100;
                                // if(scope=="olive.tlos")console.log("last_24h:", [last_24h]);
                                // if(scope=="olive.tlos")console.log("first:", first.toString(8));
                                // if(scope=="olive.tlos")console.log("last:", last.toString(8));
                                // if(scope=="olive.tlos")console.log("diff:", diff.toString(8));
                                // if(scope=="olive.tlos")console.log("percent:", percent);
                                // if(scope=="olive.tlos")console.log("ratio:", ratio);
                                // if(scope=="olive.tlos")console.log("volume:", volume.str);
                                this.scopes[scope].summary.price = last;
                                this.scopes[scope].summary.percent_str = (isNaN(percent) ? 0 : percent) + "%";
                                this.scopes[scope].summary.percent = isNaN(percent) ? 0 : percent;
                                this.scopes[scope].summary.volume = volume;
                                this.scopes[scope].summary.min_price = min_price;
                                this.scopes[scope].summary.max_price = max_price;
                                // if(scope=="olive.tlos")console.log("Summary final:", this.scopes[scope].summary);
                                // if(scope=="olive.tlos")console.log("---------------------------------------------------");
                                this.feed.setLoading("summary." + scope, false);
                                return [2 /*return*/, summary];
                        }
                    });
                }); });
                if (this.scopes[scope] && !force) {
                    result = this.scopes[scope].summary;
                }
                else {
                    result = aux;
                }
                this.onSummaryChange.next(result);
                return [2 /*return*/, result];
            });
        });
    };
    VapaeeService.prototype.getAllTablesSumaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        var promises, i, token, p;
                        return __generator(this, function (_a) {
                            promises = [];
                            for (i in this.tokens) {
                                token = this.tokens[i];
                                if (token != this.telos) {
                                    p = this.getTableSummary(token, this.telos, true);
                                    promises.push(p);
                                }
                            }
                            return [2 /*return*/, Promise.all(promises).then(function (_) {
                                    _this.resortTokens();
                                })];
                        });
                    }); })];
            });
        });
    };
    //
    // --------------------------------------------------------------
    // Aux functions
    VapaeeService.prototype.auxProcessRowsToOrders = function (rows) {
        var result = [];
        for (var i = 0; i < rows.length; i++) {
            var price = new Asset(rows[i].price, this);
            var inverse = new Asset(rows[i].inverse, this);
            var selling = new Asset(rows[i].selling, this);
            var total = new Asset(rows[i].total, this);
            var order;
            if (this.telos.symbol == price.token.symbol) {
                order = {
                    id: rows[i].id,
                    price: price,
                    inverse: inverse,
                    total: selling,
                    deposit: selling,
                    telos: total,
                    owner: rows[i].owner
                };
            }
            else {
                order = {
                    id: rows[i].id,
                    price: inverse,
                    inverse: price,
                    total: total,
                    deposit: selling,
                    telos: selling,
                    owner: rows[i].owner
                };
            }
            result.push(order);
        }
        return result;
    };
    VapaeeService.prototype.auxGetLabelForHour = function (hh) {
        var hours = [
            "h.zero",
            "h.one",
            "h.two",
            "h.three",
            "h.four",
            "h.five",
            "h.six",
            "h.seven",
            "h.eight",
            "h.nine",
            "h.ten",
            "h.eleven",
            "h.twelve",
            "h.thirteen",
            "h.fourteen",
            "h.fifteen",
            "h.sixteen",
            "h.seventeen",
            "h.eighteen",
            "h.nineteen",
            "h.twenty",
            "h.twentyone",
            "h.twentytwo",
            "h.twentythree"
        ];
        return hours[hh];
    };
    VapaeeService.prototype.auxAssertScope = function (scope) {
        var comodity_sym = scope.split(".")[0].toUpperCase();
        var currency_sym = scope.split(".")[1].toUpperCase();
        return this.scopes[scope] || {
            scope: scope,
            orders: { sell: [], buy: [] },
            deals: 0,
            history: [],
            tx: {},
            blocks: 0,
            block: {},
            blocklist: [],
            summary: {},
            header: {
                sell: { total: new Asset("0.0 " + comodity_sym, this), orders: 0 },
                buy: { total: new Asset("0.0 " + currency_sym, this), orders: 0 }
            },
        };
    };
    VapaeeService.prototype.fetchDeposits = function (account) {
        return this.utils.getTable("deposits", { scope: account }).then(function (result) {
            return result;
        });
    };
    VapaeeService.prototype.fetchBalances = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.waitReady.then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var contracts, balances, i, contract, _a, _b, _i, contract, result, i;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    contracts = {};
                                    balances = [];
                                    for (i in this.tokens) {
                                        if (this.tokens[i].fiat)
                                            continue;
                                        contracts[this.tokens[i].contract] = true;
                                    }
                                    for (contract in contracts) {
                                        this.feed.setLoading("balances-" + contract, true);
                                    }
                                    _a = [];
                                    for (_b in contracts)
                                        _a.push(_b);
                                    _i = 0;
                                    _c.label = 1;
                                case 1:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    contract = _a[_i];
                                    return [4 /*yield*/, this.utils.getTable("accounts", {
                                            contract: contract,
                                            scope: account || this.current.name
                                        })];
                                case 2:
                                    result = _c.sent();
                                    for (i in result.rows) {
                                        balances.push(new Asset(result.rows[i].balance, this));
                                    }
                                    this.feed.setLoading("balances-" + contract, false);
                                    _c.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/, balances];
                            }
                        });
                    }); })];
            });
        });
    };
    VapaeeService.prototype.fetchOrders = function (params) {
        return this.utils.getTable("sellorders", params).then(function (result) {
            return result;
        });
    };
    VapaeeService.prototype.fetchOrderTables = function () {
        return this.utils.getTable("ordertables").then(function (result) {
            return result;
        });
    };
    VapaeeService.prototype.fetchBlockHistory = function (scope, page, pagesize) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (pagesize === void 0) { pagesize = 25; }
        var pages = this.getBlockHistoryTotalPagesFor(scope, pagesize);
        var id = page * pagesize;
        // console.log("VapaeeService.fetchBlockHistory(", scope, ",",page,",",pagesize,"): id:", id, "pages:", pages);
        if (page < pages) {
            if (this.scopes[scope].block["id-" + id]) {
                var result = { more: false, rows: [] };
                for (var i = 0; i < pagesize; i++) {
                    var id_i = id + i;
                    var block = this.scopes[scope].block["id-" + id_i];
                    if (block) {
                        result.rows.push(block);
                    }
                    else {
                        break;
                    }
                }
                if (result.rows.length == pagesize) {
                    // we have the complete page in memory
                    // console.log("VapaeeService.fetchHistory(", scope, ",",page,",",pagesize,"): result:", result.rows.map(({ id }) => id));
                    return Promise.resolve(result);
                }
            }
        }
        return this.utils.getTable("blockhistory", { scope: scope, limit: pagesize, lower_bound: "" + (page * pagesize) }).then(function (result) {
            // console.log("**************");
            // console.log("block History crudo:", result);
            _this.scopes[scope] = _this.auxAssertScope(scope);
            _this.scopes[scope].block = _this.scopes[scope].block || {};
            // console.log("this.scopes[scope].block:", this.scopes[scope].block);
            for (var i = 0; i < result.rows.length; i++) {
                var block = {
                    id: result.rows[i].id,
                    hour: result.rows[i].hour,
                    price: new Asset(result.rows[i].price, _this),
                    entrance: new Asset(result.rows[i].entrance, _this),
                    max: new Asset(result.rows[i].max, _this),
                    min: new Asset(result.rows[i].min, _this),
                    volume: new Asset(result.rows[i].volume, _this),
                    date: new Date(result.rows[i].date)
                };
                _this.scopes[scope].block["id-" + block.id] = block;
            }
            // console.log("block History final:", this.scopes[scope].block);
            // console.log("-------------");
            return result;
        });
    };
    VapaeeService.prototype.fetchHistory = function (scope, page, pagesize) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (pagesize === void 0) { pagesize = 25; }
        var pages = this.getHistoryTotalPagesFor(scope, pagesize);
        var id = page * pagesize;
        // console.log("VapaeeService.fetchHistory(", scope, ",",page,",",pagesize,"): id:", id, "pages:", pages);
        if (page < pages) {
            if (this.scopes[scope].tx["id-" + id]) {
                var result = { more: false, rows: [] };
                for (var i = 0; i < pagesize; i++) {
                    var id_i = id + i;
                    var trx = this.scopes[scope].tx["id-" + id_i];
                    if (trx) {
                        result.rows.push(trx);
                    }
                    else {
                        break;
                    }
                }
                if (result.rows.length == pagesize) {
                    // we have the complete page in memory
                    // console.log("VapaeeService.fetchHistory(", scope, ",",page,",",pagesize,"): result:", result.rows.map(({ id }) => id));
                    return Promise.resolve(result);
                }
            }
        }
        return this.utils.getTable("history", { scope: scope, limit: pagesize, lower_bound: "" + (page * pagesize) }).then(function (result) {
            // console.log("**************");
            // console.log("History crudo:", result);
            _this.scopes[scope] = _this.auxAssertScope(scope);
            _this.scopes[scope].history = [];
            _this.scopes[scope].tx = _this.scopes[scope].tx || {};
            // console.log("this.scopes[scope].tx:", this.scopes[scope].tx);
            for (var i = 0; i < result.rows.length; i++) {
                var transaction = {
                    id: result.rows[i].id,
                    amount: new Asset(result.rows[i].amount, _this),
                    payment: new Asset(result.rows[i].payment, _this),
                    buyfee: new Asset(result.rows[i].buyfee, _this),
                    sellfee: new Asset(result.rows[i].sellfee, _this),
                    price: new Asset(result.rows[i].price, _this),
                    buyer: result.rows[i].buyer,
                    seller: result.rows[i].seller,
                    date: new Date(result.rows[i].date),
                    isbuy: !!result.rows[i].isbuy
                };
                _this.scopes[scope].tx["id-" + transaction.id] = transaction;
            }
            for (var j in _this.scopes[scope].tx) {
                _this.scopes[scope].history.push(_this.scopes[scope].tx[j]);
            }
            _this.scopes[scope].history.sort(function (a, b) {
                if (a.date < b.date)
                    return 1;
                if (a.date > b.date)
                    return -1;
                if (a.id < b.id)
                    return 1;
                if (a.id > b.id)
                    return -1;
            });
            // console.log("History final:", this.scopes[scope].history);
            // console.log("-------------");
            return result;
        });
    };
    VapaeeService.prototype.fetchActivity = function (page, pagesize) {
        if (page === void 0) { page = 0; }
        if (pagesize === void 0) { pagesize = 25; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, pageEvents, i, id_i, event;
            return __generator(this, function (_a) {
                id = page * pagesize + 1;
                // console.log("VapaeeService.fetchActivity(", page,",",pagesize,"): id:", id);
                if (this.activity.events["id-" + id]) {
                    pageEvents = [];
                    for (i = 0; i < pagesize; i++) {
                        id_i = id + i;
                        event = this.activity.events["id-" + id_i];
                        if (!event) {
                            break;
                        }
                    }
                    if (pageEvents.length == pagesize) {
                        return [2 /*return*/];
                    }
                }
                return [2 /*return*/, this.utils.getTable("events", { limit: pagesize, lower_bound: "" + id }).then(function (result) {
                        // console.log("**************");
                        // console.log("Activity crudo:", result);
                        var list = [];
                        for (var i = 0; i < result.rows.length; i++) {
                            var id = result.rows[i].id;
                            var event = result.rows[i];
                            if (!_this.activity.events["id-" + id]) {
                                _this.activity.events["id-" + id] = event;
                                list.push(event);
                                // console.log("**************>>>>>", id);
                            }
                        }
                        _this.activity.list = [].concat(_this.activity.list).concat(list);
                        _this.activity.list.sort(function (a, b) {
                            if (a.date < b.date)
                                return 1;
                            if (a.date > b.date)
                                return -1;
                            if (a.id < b.id)
                                return 1;
                            if (a.id > b.id)
                                return -1;
                        });
                    })];
            });
        });
    };
    VapaeeService.prototype.fetchUserOrders = function (user) {
        return this.utils.getTable("userorders", { scope: user, limit: 200 }).then(function (result) {
            return result;
        });
    };
    VapaeeService.prototype.fetchSummary = function (scope) {
        return this.utils.getTable("tablesummary", { scope: scope }).then(function (result) {
            return result;
        });
    };
    VapaeeService.prototype.fetchTokenStats = function (token) {
        var _this = this;
        this.feed.setLoading("token-stat-" + token.symbol, true);
        return this.utils.getTable("stat", { contract: token.contract, scope: token.symbol }).then(function (result) {
            token.stat = result.rows[0];
            if (token.stat.issuers && token.stat.issuers[0] == "everyone") {
                token.fake = true;
            }
            _this.feed.setLoading("token-stat-" + token.symbol, false);
            return token;
        });
    };
    VapaeeService.prototype.fetchTokensStats = function (extended) {
        var _this = this;
        if (extended === void 0) { extended = true; }
        console.log("Vapaee.fetchTokens()");
        this.feed.setLoading("token-stats", true);
        return this.waitReady.then(function (_) {
            var priomises = [];
            for (var i in _this.tokens) {
                if (_this.tokens[i].fiat)
                    continue;
                priomises.push(_this.fetchTokenStats(_this.tokens[i]));
            }
            return Promise.all(priomises).then(function (result) {
                _this.setTokenstats(_this.tokens);
                _this.feed.setLoading("token-stats", false);
                return _this.tokens;
            });
        });
    };
    VapaeeService.prototype.fetchTokens = function (extended) {
        var _this = this;
        if (extended === void 0) { extended = true; }
        console.log("Vapaee.fetchTokens()");
        return this.utils.getTable("tokens").then(function (result) {
            var data = {
                tokens: result.rows
            };
            for (var i in data.tokens) {
                data.tokens[i].scope = data.tokens[i].symbol.toLowerCase() + ".tlos";
                if (data.tokens[i].symbol == "TLOS") {
                    _this.telos = data.tokens[i];
                }
            }
            return data;
        });
    };
    VapaeeService.prototype.resortTokens = function () {
        var _this = this;
        this.tokens.sort(function (a, b) {
            if (_this.scopes && _this.scopes[a.scope] && _this.scopes[b.scope]) {
                var a_vol = _this.scopes[a.scope].summary.volume;
                var b_vol = _this.scopes[b.scope].summary.volume;
                if (a_vol.amount.isGreaterThan(b_vol.amount))
                    return -1;
                if (a_vol.amount.isLessThan(b_vol.amount))
                    return 1;
            }
            if (a.appname < b.appname)
                return -1;
            if (a.appname > b.appname)
                return 1;
            return 0;
        });
        this.onTokensReady.next(this.tokens);
    };
    VapaeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_scatter_service__WEBPACK_IMPORTED_MODULE_2__["ScatterService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
            _common_common_services__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], VapaeeService);
    return VapaeeService;
}());

var Asset = /** @class */ (function () {
    function Asset(a, b) {
        if (a === void 0) { a = null; }
        if (b === void 0) { b = null; }
        if (a == null && b == null) {
            this.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(0);
            this.token = { symbol: "SYS" };
            return;
        }
        if (a instanceof bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a) {
            this.amount = a;
            this.token = b;
            return;
        }
        if (typeof a == "number") {
            this.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(a);
            this.token = b;
            return;
        }
        if (b instanceof VapaeeService) {
            this.parse(a, b);
        }
    }
    Asset.prototype.clone = function () {
        return new Asset(this.amount, this.token);
    };
    Asset.prototype.parse = function (text, vapaee) {
        if (text == "")
            return;
        var sym = text.split(" ")[1];
        this.token = vapaee.getTokenNow(sym);
        var amount_str = text.split(" ")[0];
        this.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(amount_str);
        console.assert(!!this.token, "ERROR: string malformed of token not found:", text);
    };
    Asset.prototype.valueToString = function (decimals) {
        if (decimals === void 0) { decimals = -1; }
        if (!this.token)
            return "0";
        var parts = ("" + this.amount).split(".");
        var integer = parts[0];
        var precision = this.token.precision;
        var decimal = (parts.length == 2 ? parts[1] : "");
        if (decimals != -1) {
            precision = decimals;
        }
        for (var i = decimal.length; i < precision; i++) {
            decimal += "0";
        }
        if (decimal.length > precision) {
            decimal = decimal.substr(0, precision);
        }
        if (precision == 0) {
            return integer;
        }
        else {
            return integer + "." + decimal;
        }
    };
    Asset.prototype.toNumber = function () {
        if (!this.token)
            return 0;
        return parseFloat(this.valueToString(8));
    };
    Object.defineProperty(Asset.prototype, "str", {
        get: function () {
            return this.toString();
        },
        enumerable: true,
        configurable: true
    });
    Asset.prototype.toString = function (decimals) {
        if (decimals === void 0) { decimals = -1; }
        if (!this.token)
            return "0.0000";
        return this.valueToString(decimals) + " " + this.token.symbol.toUpperCase();
    };
    Asset.prototype.inverse = function (token) {
        var result = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(1).dividedBy(this.amount);
        var asset = new Asset(result, token);
        return asset;
    };
    return Asset;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/vapaee.io-source/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map