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
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/pages/not-found/not-found.page.ts");
/* harmony import */ var _pages_account_account_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/account/account.page */ "./src/app/pages/account/account.page.ts");
/* harmony import */ var _pages_video_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/video/video.page */ "./src/app/pages/video/video.page.ts");
/* harmony import */ var _pages_bgbox_bgbox_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/bgbox/bgbox.page */ "./src/app/pages/bgbox/bgbox.page.ts");
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _pages_cnt_root_cntroot_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages-cnt/root/cntroot.page */ "./src/app/pages-cnt/root/cntroot.page.ts");
/* harmony import */ var _pages_cnt_cards_cards_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages-cnt/cards/cards.page */ "./src/app/pages-cnt/cards/cards.page.ts");
/* harmony import */ var _pages_cnt_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages-cnt/inventory/inventory.page */ "./src/app/pages-cnt/inventory/inventory.page.ts");
/* harmony import */ var _pages_cnt_albums_albums_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages-cnt/albums/albums.page */ "./src/app/pages-cnt/albums/albums.page.ts");
/* harmony import */ var _pages_cnt_profile_profile_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages-cnt/profile/profile.page */ "./src/app/pages-cnt/profile/profile.page.ts");
/* harmony import */ var _pages_vpe_root_vpe_root_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages-vpe/root/vpe-root.page */ "./src/app/pages-vpe/root/vpe-root.page.ts");
/* harmony import */ var _pages_vpe_trade_trade_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages-vpe/trade/trade.page */ "./src/app/pages-vpe/trade/trade.page.ts");
/* harmony import */ var _pages_vpe_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages-vpe/tokens/tokens.page */ "./src/app/pages-vpe/tokens/tokens.page.ts");
/* harmony import */ var _pages_vpe_home_home_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages-vpe/home/home.page */ "./src/app/pages-vpe/home/home.page.ts");
/* harmony import */ var _pages_vpe_account_account_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages-vpe/account/account.page */ "./src/app/pages-vpe/account/account.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', data: { state: "root" }, redirectTo: '/exchange/home', pathMatch: 'full' },
    { path: 'cnt', data: { state: "root" }, component: _pages_cnt_root_cntroot_page__WEBPACK_IMPORTED_MODULE_9__["CntRootPage"],
        children: [
            { path: 'cards', data: { state: "cards" }, component: _pages_cnt_cards_cards_page__WEBPACK_IMPORTED_MODULE_10__["CardsPage"] },
            { path: 'inventory/:profile', data: { state: "inventory" }, component: _pages_cnt_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_11__["InventoryPage"] },
            { path: 'albums', data: { state: "albums" }, component: _pages_cnt_albums_albums_page__WEBPACK_IMPORTED_MODULE_12__["AlbumsPage"] },
            { path: 'profile/:profile', data: { state: "profile" }, component: _pages_cnt_profile_profile_page__WEBPACK_IMPORTED_MODULE_13__["ProfilePage"] }
        ]
    },
    { path: 'exchange', data: { state: "root" }, component: _pages_vpe_root_vpe_root_page__WEBPACK_IMPORTED_MODULE_14__["VpeRootPage"],
        children: [
            { path: '', data: { state: "root" }, redirectTo: '/exchange/home', pathMatch: 'full' },
            { path: 'home', data: { state: "home" }, component: _pages_vpe_home_home_page__WEBPACK_IMPORTED_MODULE_17__["VpeHomePage"] },
            { path: 'trade/:scope', data: { state: "trade" }, component: _pages_vpe_trade_trade_page__WEBPACK_IMPORTED_MODULE_15__["TradePage"] },
            { path: 'tokens', data: { state: "tokens" }, component: _pages_vpe_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_16__["TokensPage"], children: [
                    { path: ':symbol', data: { state: "edit" }, component: _pages_vpe_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_16__["TokensPage"] }
                ] },
            { path: 'account', data: { state: "guest" }, component: _pages_vpe_account_account_page__WEBPACK_IMPORTED_MODULE_18__["VpeAccountPage"] },
            { path: 'account/:name', data: { state: "account" }, component: _pages_vpe_account_account_page__WEBPACK_IMPORTED_MODULE_18__["VpeAccountPage"] }
        ]
    },
    { path: ':network', data: { state: "root" }, component: _pages_root_root_page__WEBPACK_IMPORTED_MODULE_2__["RootPage"],
        children: [
            { path: 'home', data: { state: "home" }, component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"] },
            { path: 'video', data: { state: "video" }, component: _pages_video_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"] },
            { path: 'bgbox', data: { state: "bgbox" }, component: _pages_bgbox_bgbox_page__WEBPACK_IMPORTED_MODULE_7__["BGBoxPage"], children: [
                    { path: 'register', data: { state: "register" }, component: _pages_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"] }
                ] },
            { path: 'account', data: { state: "account" }, component: _pages_account_account_page__WEBPACK_IMPORTED_MODULE_5__["AccountPage"] },
            { path: 'account/:name', data: { state: "account_name" }, component: _pages_account_account_page__WEBPACK_IMPORTED_MODULE_5__["AccountPage"] }
        ]
    },
    { path: '**', data: { state: "404" }, component: _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_4__["NotFoundPage"] }
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
    function AppComponent(app) {
        this.app = app;
        this.app.init();
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: ['']
        }),
        __metadata("design:paramtypes", [_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/pages/not-found/not-found.page.ts");
/* harmony import */ var _pages_root_root_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/root/root.page */ "./src/app/pages/root/root.page.ts");
/* harmony import */ var _pages_account_account_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/account/account.page */ "./src/app/pages/account/account.page.ts");
/* harmony import */ var _services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
/* harmony import */ var _services_common_app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var _pages_video_video_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/video/video.page */ "./src/app/pages/video/video.page.ts");
/* harmony import */ var _pages_bgbox_bgbox_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/bgbox/bgbox.page */ "./src/app/pages/bgbox/bgbox.page.ts");
/* harmony import */ var _pages_apps_apps_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/apps/apps.page */ "./src/app/pages/apps/apps.page.ts");
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/register/register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _services_scatter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _services_bgbox_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _services_vapaee_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var _pages_cnt_root_cntroot_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages-cnt/root/cntroot.page */ "./src/app/pages-cnt/root/cntroot.page.ts");
/* harmony import */ var _pages_vpe_root_vpe_root_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages-vpe/root/vpe-root.page */ "./src/app/pages-vpe/root/vpe-root.page.ts");
/* harmony import */ var _pages_vpe_account_account_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages-vpe/account/account.page */ "./src/app/pages-vpe/account/account.page.ts");
/* harmony import */ var _pages_vpe_trade_trade_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages-vpe/trade/trade.page */ "./src/app/pages-vpe/trade/trade.page.ts");
/* harmony import */ var _pages_vpe_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages-vpe/tokens/tokens.page */ "./src/app/pages-vpe/tokens/tokens.page.ts");
/* harmony import */ var _pages_vpe_home_home_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages-vpe/home/home.page */ "./src/app/pages-vpe/home/home.page.ts");
/* harmony import */ var _pages_cnt_profile_profile_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages-cnt/profile/profile.page */ "./src/app/pages-cnt/profile/profile.page.ts");
/* harmony import */ var _pages_cnt_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages-cnt/inventory/inventory.page */ "./src/app/pages-cnt/inventory/inventory.page.ts");
/* harmony import */ var _pages_cnt_cards_cards_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages-cnt/cards/cards.page */ "./src/app/pages-cnt/cards/cards.page.ts");
/* harmony import */ var _pages_cnt_albums_albums_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages-cnt/albums/albums.page */ "./src/app/pages-cnt/albums/albums.page.ts");
/* harmony import */ var _components_identicon_identicon_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _components_eosio_account_eosio_account_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/eosio-account/eosio-account.component */ "./src/app/components/eosio-account/eosio-account.component.ts");
/* harmony import */ var _components_vpe_panel_vpe_panel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/vpe-panel/vpe-panel.component */ "./src/app/components/vpe-panel/vpe-panel.component.ts");
/* harmony import */ var _components_vpe_panel_orders_vpe_panel_orders_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/vpe-panel-orders/vpe-panel-orders.component */ "./src/app/components/vpe-panel-orders/vpe-panel-orders.component.ts");
/* harmony import */ var _components_vpe_panel_user_orders_vpe_panel_user_orders_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/vpe-panel-user-orders/vpe-panel-user-orders.component */ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.ts");
/* harmony import */ var _components_vpe_panel_tokens_card_deck_vpe_panel_tokens_card_deck_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component */ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.ts");
/* harmony import */ var _components_vpe_panel_history_vpe_panel_history_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/vpe-panel-history/vpe-panel-history.component */ "./src/app/components/vpe-panel-history/vpe-panel-history.component.ts");
/* harmony import */ var _components_vpe_panel_wallet_vpe_panel_wallet_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/vpe-panel-wallet/vpe-panel-wallet.component */ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.ts");
/* harmony import */ var _components_vpe_panel_balance_breakdown_vpe_panel_balance_breakdown_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component */ "./src/app/components/vpe-panel-balance-breakdown/vpe-panel-balance-breakdown.component.ts");
/* harmony import */ var _components_vpe_panel_account_resources_vpe_panel_account_resources_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/vpe-panel-account-resources/vpe-panel-account-resources.component */ "./src/app/components/vpe-panel-account-resources/vpe-panel-account-resources.component.ts");
/* harmony import */ var _components_vpe_panel_account_header_vpe_panel_account_header_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/vpe-panel-account-header/vpe-panel-account-header.component */ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.ts");
/* harmony import */ var _components_vpe_panel_chart_vpe_panel_chart_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/vpe-panel-chart/vpe-panel-chart.component */ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.ts");
/* harmony import */ var _components_vpe_panel_tokens_vpe_panel_tokens_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/vpe-panel-tokens/vpe-panel-tokens.component */ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.ts");
/* harmony import */ var _components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/vpe-panel-order-editor/vpe-panel-order-editor.component */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.ts");
/* harmony import */ var _components_vpe_token_input_vpe_token_input_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/vpe-token-input/vpe-token-input.component */ "./src/app/components/vpe-token-input/vpe-token-input.component.ts");
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








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_home_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"],
                _pages_video_video_page__WEBPACK_IMPORTED_MODULE_15__["VideoPage"],
                _pages_bgbox_bgbox_page__WEBPACK_IMPORTED_MODULE_16__["BGBoxPage"],
                _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_10__["NotFoundPage"],
                _pages_apps_apps_page__WEBPACK_IMPORTED_MODULE_17__["AppsPage"],
                _pages_register_register_page__WEBPACK_IMPORTED_MODULE_18__["RegisterPage"],
                _pages_root_root_page__WEBPACK_IMPORTED_MODULE_11__["RootPage"],
                _pages_account_account_page__WEBPACK_IMPORTED_MODULE_12__["AccountPage"],
                _components_identicon_identicon_component__WEBPACK_IMPORTED_MODULE_33__["IdenticonComponent"],
                _components_eosio_account_eosio_account_component__WEBPACK_IMPORTED_MODULE_34__["EosioAccountComponent"],
                _components_vpe_panel_vpe_panel_component__WEBPACK_IMPORTED_MODULE_35__["VpePanelComponent"],
                _components_vpe_panel_orders_vpe_panel_orders_component__WEBPACK_IMPORTED_MODULE_36__["VpePanelOrdersComponent"],
                _components_vpe_panel_user_orders_vpe_panel_user_orders_component__WEBPACK_IMPORTED_MODULE_37__["VpePanelUserOrdersComponent"],
                _components_vpe_panel_tokens_card_deck_vpe_panel_tokens_card_deck_component__WEBPACK_IMPORTED_MODULE_38__["VpePanelTokensCardDeckComponent"],
                _components_vpe_panel_history_vpe_panel_history_component__WEBPACK_IMPORTED_MODULE_39__["VpePanelHistoryComponent"],
                _components_vpe_panel_wallet_vpe_panel_wallet_component__WEBPACK_IMPORTED_MODULE_40__["VpePanelWalletComponent"],
                _components_vpe_panel_balance_breakdown_vpe_panel_balance_breakdown_component__WEBPACK_IMPORTED_MODULE_41__["VpePanelBalanceBreakdawnComponent"],
                _components_vpe_panel_account_resources_vpe_panel_account_resources_component__WEBPACK_IMPORTED_MODULE_42__["VpePanelAccountResourcesComponent"],
                _components_vpe_panel_account_header_vpe_panel_account_header_component__WEBPACK_IMPORTED_MODULE_43__["VpePanelAccountHeaderComponent"],
                _components_vpe_panel_chart_vpe_panel_chart_component__WEBPACK_IMPORTED_MODULE_44__["VpePanelChartComponent"],
                _components_vpe_panel_tokens_vpe_panel_tokens_component__WEBPACK_IMPORTED_MODULE_45__["VpePanelTokensComponent"],
                _components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_46__["VpePanelOrderEditorComponent"],
                _components_vpe_token_input_vpe_token_input_component__WEBPACK_IMPORTED_MODULE_47__["VpeTokenInputComponent"],
                _services_common_app_service__WEBPACK_IMPORTED_MODULE_14__["LoadingOverall"],
                _pages_cnt_root_cntroot_page__WEBPACK_IMPORTED_MODULE_23__["CntRootPage"],
                _pages_vpe_root_vpe_root_page__WEBPACK_IMPORTED_MODULE_24__["VpeRootPage"],
                _pages_cnt_profile_profile_page__WEBPACK_IMPORTED_MODULE_29__["ProfilePage"],
                _pages_vpe_account_account_page__WEBPACK_IMPORTED_MODULE_25__["VpeAccountPage"],
                _pages_vpe_trade_trade_page__WEBPACK_IMPORTED_MODULE_26__["TradePage"],
                _pages_vpe_tokens_tokens_page__WEBPACK_IMPORTED_MODULE_27__["TokensPage"],
                _pages_vpe_home_home_page__WEBPACK_IMPORTED_MODULE_28__["VpeHomePage"],
                _pages_cnt_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_30__["InventoryPage"],
                _pages_cnt_cards_cards_page__WEBPACK_IMPORTED_MODULE_31__["CardsPage"],
                _pages_cnt_albums_albums_page__WEBPACK_IMPORTED_MODULE_32__["AlbumsPage"]
            ],
            entryComponents: [
                _services_common_app_service__WEBPACK_IMPORTED_MODULE_14__["LoadingOverall"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _services_common_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonServicesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                _services_scatter_service__WEBPACK_IMPORTED_MODULE_19__["ScatterService"],
                _services_bgbox_service__WEBPACK_IMPORTED_MODULE_20__["BGBoxService"],
                _services_vapaee_service__WEBPACK_IMPORTED_MODULE_22__["VapaeeService"],
                _services_cnt_service__WEBPACK_IMPORTED_MODULE_21__["CntService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
                _services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_13__["EosioTokenMathService"],
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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

/***/ "./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/vpe-panel-account-header/vpe-panel-account-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-dark margin-top\">\n    <div class=\"card-header vpe-background-card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-auto col-padding-right\">\n                <identicon-comp [value]=\"current.name\"></identicon-comp>\n            </div>\n            <div class=\"col col-padding-left\">\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-scatter'}\">\n                    <div class=\"pull-right text-center\" [hidden]=\"!current.data.total_balance\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"scatter.connectApp()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.retry | titlecase}}\n                        </span><br>\n                        <span>{{local.string.noScatter}}</span>\n                    </div>\n                </div>\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-logged'}\">\n                    <div class=\"pull-right text-center\"  [hidden]=\"!current.data.total_balance\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.LoginWScatter}}\n                        </span>\n                        <br>\n                        <span>{{local.string.NotLogged}}</span>\n                    </div>\n                </div>\n                <div class=\"text-xl\">\n                    {{current.name}}\n                    <span [ngClass]=\"{'d-none':!vapaee.logged}\">\n                        <span class=\"btn btn-sm btn-primary margin-left\" (click)=\"vapaee.logout()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('logout') && !vapaee.feed.loading('log-state')\"></span> \n                            <span> {{local.string.logout}} </span>\n                        </span>\n                    </span>\n                </div>\n\n<div [hidden]=\"!vapaee.logged\">\n    <div class=\"pull-right\">\n        <span class=\"btn btn-sm btn-primary\" (click)=\"freeFakeTokens()\">\n            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading_fake\"></span>\n            {{local.string.getfftokens | titlecase}}\n        </span>\n    </div>\n</div> \n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-scatter'}\" [hidden]=\"current.data.total_balance\">\n                    <div class=\"pull-right text-center\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"scatter.connectApp()\">\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.retry | titlecase}}\n                        </span>\n                    </div>\n                    <span>{{local.string.noScatter}}</span>\n                </div>\n                <div [ngClass]=\"{'d-none':vapaee.loginState != 'no-logged'}\" [hidden]=\"current.data.total_balance\">\n                    <div class=\"pull-right text-center\">\n                        <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                            {{local.string.LoginWScatter}}\n                        </span>\n                    </div>\n                    <span>{{local.string.NotLogged}}</span>\n                </div>\n                <div class=\"text-md nowrap\" [hidden]=\"!current.data.total_balance\">\n                    <small>total balance: </small>\n                    <span class=\"text-md color-green\"> {{current.data.total_balance}} </span>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>"

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
    function VpePanelAccountHeaderComponent(vapaee, scatter, local) {
        this.vapaee = vapaee;
        this.scatter = scatter;
        this.local = local;
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
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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
    function VpePanelAccountResourcesComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
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
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
    ], VpePanelAccountResourcesComponent);
    return VpePanelAccountResourcesComponent;
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
    function VpePanelBalanceBreakdawnComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
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
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
    ], VpePanelBalanceBreakdawnComponent);
    return VpePanelBalanceBreakdawnComponent;
}());



/***/ }),

/***/ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/vpe-panel-chart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vpe-panel [title]=\"local.string.chart\">\n    <div class=\"background\">\n        <div class=\"text-lg text-center\"><br>{{local.string.chart}}<br>{{local.string.comingsoon}}<br><br></div>\n    </div>\n</vpe-panel>\n"

/***/ }),

/***/ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/vpe-panel-chart/vpe-panel-chart.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\ndiv.background {\n  background-color: rgba(255, 255, 255, 0.2); }\n"

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



var VpePanelChartComponent = /** @class */ (function () {
    function VpePanelChartComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
    }
    VpePanelChartComponent.prototype.ngOnChanges = function () {
    };
    VpePanelChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-chart',
            template: __webpack_require__(/*! ./vpe-panel-chart.component.html */ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-chart.component.scss */ "./src/app/components/vpe-panel-chart/vpe-panel-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [title]=\"local.string.history\">\n    <div class=\"row\">\n        <div class=\"nowrap text-bold text-sm col-sm-4 col-padding-right\">{{local.string.time | titlecase}}\n            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('history.'+scope)\"></span>\n        </div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-4 col-padding-right col-padding-left\">{{local.string.price | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-4 col-padding-left\">{{local.string.amount | titlecase}}</div>\n    </div>\n    <div class=\"row margin-top\">\n        <div class=\"col-sm-12\">\n            <perfect-scrollbar style=\"max-height: 250px; max-width: 100%\">\n                <div class=\"row margin-bottom\" \n                    *ngFor=\"let tx of history\"\n                    [ngClass]=\"{'text-success': tx.isbuy, 'text-danger':!tx.isbuy}\"\n                >\n                    <div class=\"nowrap col-sm-4 col-padding-right\">\n                            {{tx.date | date : \"HH:mm:ss\"}}                   \n                    </div>\n                    <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">{{tx.price.valueToString(8)}}</div>\n                    <div class=\"nowrap col-sm-4 text-right padding-right-lg \">{{tx.amount.valueToString(8)}}</div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    </div>\n</vpe-panel>"

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
    function VpePanelHistoryComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
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
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [title]=\"local.string.OrderForm\">\n    <div class=\"row\">\n  \n        <!--div class=\"col-sm-12\">\n            <div class=\"pull-right\">\n                <small class=\"text-muted cursor-pointer\" (click)=\"debug()\">\n                    debug\n                </small>\n            </div>\n        </div-->\n\n        <!--\n\n            <div class=\"form-row\">\n                <div class=\"col-sm-4\">{{local.string.deposits | titlecase}}:</div>\n                <div class=\"col-sm-4 nowrap\">\n                    <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"deposits_comodity.token.logo\">\n                    {{deposits_comodity.toString(8)}}\n                </div>\n                <div class=\"col-sm-4 nowrap\">\n                    <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"deposits_currency.token.logo\">\n                    {{deposits_currency.toString(8)}}\n                </div>\n            </div>\n\n        -->\n        \n        <div class=\"col-sm-12\" [hidden]=\"vapaee.logged\">\n            <div  class=\"pull-right margin-top\">\n                <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                    {{local.string.LoginWScatter}}\n                </span>\n            </div>\n        </div>\n\n\n        <div class=\"col-sm-12\" [hidden]=\"!vapaee.logged\">\n            <div class=\"form-row\">\n                <div class=\"col-sm-4\">\n                    {{local.string.Price | titlecase}}\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"row\">\n                        <div class=\"col col-sm-auto\">\n                            <label [ngClass]=\"{'text-danger':!can_sell && wants=='sell'}\">{{local.string.Amount}}</label>\n                        </div>\n                        <div class=\"col text-right nowrap\">\n                            <span class=\"cursor-pointer\" (click)=\"sellAll()\">\n                                <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"deposits_comodity.token.logo\">\n                                <span [ngClass]=\"{'text-danger': !can_sell && wants=='sell'}\"> {{deposits_comodity.toString()}} </span>\n                            </span>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm-4 text-right nowrap\">\n                    <span class=\"cursor-pointer\" (click)=\"buyAll()\">\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"deposits_currency.token.logo\">\n                        <span [ngClass]=\"{'text-danger': !can_buy && wants=='buy'}\"> {{deposits_currency.toString()}} </span>\n                    </span>\n                </div>\n            </div>\n        \n            <div class=\"form-row margin-top\">\n                <div class=\"col-sm-4\">\n                    <vpe-token-input [(asset)]=\"price\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Price}}\"></vpe-token-input>\n                </div>\n                <div class=\"col-sm-4\">\n                    <vpe-token-input [(asset)]=\"amount\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Amount}}\"></vpe-token-input>\n                </div>\n                <div class=\"col-sm-4\">\n                    <!-- Buy -->\n                    <div [hidden]=\"wants=='sell' || !can_buy\">\n                        <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-success\" [ngClass]=\"{disabled: payment ? payment.amount.toNumber() == 0:true}\" (click)=\"buy()\" >\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                            {{local.string.Buy}}\n                        </span>\n                    </div>\n                    <div class=\"text-right\" [hidden]=\"!(wants=='buy' && !can_buy)\">\n                        <label> {{local.string.needtodep}} &nbsp; </label>\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"money ? money.token.logo : ''\">\n                        <label> &nbsp; {{money ? money.token.symbol : \"\"}}</label>\n                    </div>\n                    <!--div [hidden]=\"!(wants=='buy' && !can_buy)\">\n                        <label class=\"text-danger\">{{local.string.ycntpay}} {{payment ? payment.toString(8) : \"\"}}</label>\n                        <label class=\"text-danger\" >{{local.string.yohave}} {{money ? money.toString(8) : \"\"}}</label>\n                    </div-->\n    \n                    <!-- Sell -->\n                    <div [hidden]=\"wants=='buy' || !can_sell\">\n                        <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-danger\" [ngClass]=\"{disabled: payment ? payment.amount.toNumber() == 0:true}\" (click)=\"sell()\" >\n                            <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                            {{local.string.Sell}} {{payment?payment.str:''}}\n                        </span>\n                    </div>\n                    <div class=\"text-right\" [hidden]=\"!(wants=='sell' && !can_sell)\">\n                        <label> {{local.string.needtodep}} &nbsp; </label>\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"amount ? amount.token.logo : ''\">\n                        <label> &nbsp; {{amount ? amount.token.symbol : \"\"}}</label>\n                    </div>                    \n                    <!--div [hidden]=\"!(wants=='sell' && !can_sell)\">\n                        <label class=\"text-danger\">{{local.string.ycntsell}} {{amount ? amount.toString(8) : \"\"}}</label>\n                        <label class=\"text-danger\" >{{local.string.yohave}} {{asset ? asset.toString(8) : \"\"}}</label>\n                    </div-->                    \n\n                </div>\n            </div>\n            <div class=\"form-row margin-top\">\n                <div class=\"col-sm-2 col-padding-right\">\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='buy', 'btn-success': can_buy, 'disabled': !can_buy}\" (click)=\"wantsTo('buy')\" >\n                        <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_buy}}\n                    </span>\n                </div>\n                <div class=\"col-sm-2 col-padding-left\">\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='sell', 'btn-danger': can_sell, 'disabled': !can_sell}\" (click)=\"wantsTo('sell')\" >\n                        <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_sell}}\n                    </span>\n                </div>\n                <div class=\"col-sm-8 text-right\">\n                    <div class=\"row\">\n                        <div class=\"col text-right nowrap\" [hidden]=\"wants=='buy'\">\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_amount.token.logo\">\n                            <span [ngClass]=\"{'text-danger': !can_sell}\"> {{get_amount.str}} </span>\n                            &nbsp; <i style=\"vertical-align: bottom;\" class=\"material-icons\"> trending_flat </i> &nbsp;\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_payment.token.logo\">\n                            {{get_payment.str}}\n                        </div>\n                        <div class=\"col text-right nowrap\" [hidden]=\"wants=='sell'\">\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_payment.token.logo\">\n                            <span [ngClass]=\"{'text-danger': !can_buy}\"> {{get_payment.str}} </span>\n                            &nbsp; <i style=\"vertical-align: bottom;\" class=\"material-icons\"> trending_flat </i> &nbsp;\n                            <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"get_amount.token.logo\">\n                            {{get_amount.str}}\n                        </div>                        \n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--\n        <div class=\"col-sm-12\" [hidden]=\"!vapaee.logged\">\n            <div class=\"form-row\">\n                <div class=\"col-sm-3\">\n                    <label>{{local.string.wdywdo}}</label>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 col-padding-right\">\n                            <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='buy', 'btn-success': can_buy, 'disabled': !can_buy}\" (click)=\"wantsTo('buy')\" >\n                                <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_buy}}\n                            </span>\n                        </div>\n                        <div class=\"col-sm-6 col-padding-left\">\n                            <span type=\"text\" class=\"form-control form-control-sm btn btn-sm\" [ngClass]=\"{active: wants=='sell', 'btn-danger': can_sell, 'disabled': !can_sell}\" (click)=\"wantsTo('sell')\" >\n                                <i class=\"material-icons\"> done_outline </i> {{local.string.wanna_sell}}\n                            </span>    \n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label>{{local.string.Price}}</label>\n                    <vpe-token-input [(asset)]=\"price\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Price}}\"></vpe-token-input>\n                </div> \n                <div class=\"form-group col-sm-3\">\n                    <label [ngClass]=\"{'text-danger':!can_sell && wants=='sell'}\">{{local.string.Amount}}</label>\n                    <vpe-token-input [(asset)]=\"amount\" (valueChange)=\"onChange($event)\" precision=\"8\" placeholder=\"{{local.string.Amount}}\"></vpe-token-input>\n                </div>\n\n                <div [hidden]=\"wants=='sell' || !can_buy\" class=\"form-group col-sm-3\">\n                    <label>{{local.string.Payment}} {{payment ? payment.toString(8) : \"\"}}</label>\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-success\" (click)=\"buy()\" >\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                        {{local.string.Buy}}\n                    </span>\n                </div>\n                <div [hidden]=\"!(wants=='buy' && !can_buy)\" class=\"form-group col-sm-3\">\n                    <label class=\"text-danger\">{{local.string.ycntpay}} {{payment ? payment.toString(8) : \"\"}}</label>\n                    <label class=\"text-danger\" >{{local.string.yohave}} {{money ? money.toString(8) : \"\"}}</label>\n                </div>\n\n\n                <div [hidden]=\"wants=='buy' || !can_sell\" class=\"form-group col-sm-3\">\n                    <label>{{local.string.Payment}} {{payment ? payment.toString(8) : \"\"}}</label>\n                    <span type=\"text\" class=\"form-control form-control-sm btn btn-sm btn-danger\" (click)=\"sell()\" >\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading\"></span>\n                        {{local.string.Sell}}\n                    </span>\n                </div>\n                <div [hidden]=\"!(wants=='sell' && !can_sell)\" class=\"form-group col-sm-3\">\n                    <label class=\"text-danger\">{{local.string.ycntsell}} {{amount ? amount.toString(8) : \"\"}}</label>\n                    <label class=\"text-danger\" >{{local.string.yohave}} {{asset ? asset.toString(8) : \"\"}}</label>\n                </div>\n            </div>\n        </div>\n        -->\n\n        <!-- ------------------ orders ------------------- -->\n        \n        <div class=\"col-sm-12\" [hidden]=\"!vapaee.logged || own.length == 0\">\n            <hr class=\"line\">\n        </div>\n\n        <div class=\"col-sm-12 margin-top\" [hidden]=\"!error\">\n            <div class=\"alert alert-danger\">\n                <div class=\"pull-right\">\n                    <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                    </button>                \n                </div>\n                {{error}}\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 d-lg-none margin-top\" [hidden]=\"!vapaee.logged || own.length == 0\">\n            <label>{{local.string.orders | titlecase}}</label>\n            <div class=\"row\">\n                <div class=\"nowrap col-sm-4 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n            </div>\n            <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of own\"\n                    (click)=\"cancel(order)\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol == get_currency.symbol, 'text-success':order.deposit.token.symbol == get_comodity.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol == get_currency.symbol, 'text-success':order.deposit.token.symbol == get_comodity.symbol}\"\n                        >\n                        {{order.total.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.id]\"></span>\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n\n        <div class=\"d-sm-none d-lg-block col-lg-12 margin-top\">\n            <div class=\"row\" [hidden]=\"!vapaee.logged || own.length == 0\">\n                <div class=\"col-sm-6\">\n                    <label>{{local.string.sell_orders | titlecase}}</label>\n                    <div class=\"row\">\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n                    </div>\n                    <perfect-scrollbar style=\"max-height: 200px; max-width: 100%\">\n                        <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                            [ngClass]=\"{'d-none':order.deposit.token.symbol != get_comodity.symbol}\"\n                            *ngFor=\"let order of own\"\n                            (click)=\"cancel(order)\"\n                        >\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg text-danger\">{{order.price.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left text-danger\">{{order.total.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\">\n                                <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.id]\">cancel</i>\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.id]\"></span>\n                            </div>\n                        </div>\n                    </perfect-scrollbar>                    \n                </div>\n                <div class=\"col-sm-6\">\n                    <label>{{local.string.sell_orders | titlecase}}</label>\n                    <div class=\"row\">\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                        <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n                    </div>\n                    <perfect-scrollbar style=\"max-height: 200px; max-width: 100%\">\n                        <div class=\"row margin-bottom danger active-on-hover cursor-pointer\" \n                            [ngClass]=\"{'d-none':order.deposit.token.symbol != get_currency.symbol}\"\n                            *ngFor=\"let order of own\"\n                            (click)=\"cancel(order)\"\n                        >\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg text-success\">{{order.price.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left text-success\">{{order.total.toString(8)}}</div>\n                            <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\">\n                                <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[order.id]\">cancel</i>\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[order.id]\"></span>\n                            </div>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n\n        </div>        \n\n    </div>\n</vpe-panel>\n\n\n"

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
    function VpePanelOrderEditorComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
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
        this.amount = a;
        this.ngOnChanges();
    };
    VpePanelOrderEditorComponent.prototype.sellAll = function () {
        this.setAmount(this.deposits_comodity);
        this.wantsTo("sell");
    };
    VpePanelOrderEditorComponent.prototype.buyAll = function () {
        this.wantsTo("buy");
    };
    VpePanelOrderEditorComponent.prototype.onChange = function (event) {
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
        if (this.orders && this.own.length == 0) {
            // console.log("this.orders.sell.length", this.orders.sell.length);
            for (var i = 0; i < this.orders.sell.length; i++) {
                var sell = this.orders.sell[i];
                for (var j = 0; j < sell.orders.length; j++) {
                    var order = sell.orders[j];
                    if (order.owner == this.owner) {
                        this.own.push(order);
                    }
                }
            }
            // console.log("this.orders.buy.length", this.orders.buy.length);
            for (var i = 0; i < this.orders.buy.length; i++) {
                var buy = this.orders.buy[i];
                for (var j = 0; j < buy.orders.length; j++) {
                    var order = buy.orders[j];
                    if (order.owner == this.owner) {
                        this.own.push(order);
                    }
                }
            }
        }
    };
    VpePanelOrderEditorComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // console.log("VpePanelOrderEditorComponent.ngOnChanges()");
        this.own = [];
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
        __metadata("design:type", Object)
    ], VpePanelOrderEditorComponent.prototype, "orders", void 0);
    VpePanelOrderEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-order-editor',
            template: __webpack_require__(/*! ./vpe-panel-order-editor.component.html */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-order-editor.component.scss */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [title]=\"local.string.orders\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <div class=\"pull-right\">\n                        <span class=\"text-muted\">\n                            {{headers.sell ? headers.sell.orders : 0}} {{local.string.orders}} -\n                            {{headers.sell.total ? headers.sell.total.toString() : \"\"}}\n                        </span>\n                    </div>\n                    {{local.string.sell_orders | titlecase}}\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('sellorders')\"></span>\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"nowrap text-bold text-sm col-sm-3 col-padding-right padding-left-lg\">{{local.string.price | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.amount | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.total | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-left padding-right-lg\">{{local.string.sum | titlecase}}</div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                        <div class=\"row margin-bottom danger active-on-hover cursor-pointer\" \n                            [ngClass]=\"{'owner':row.owners[vapaee.account.name]}\"\n                            *ngFor=\"let row of orders.sell\"\n                        >\n                            <div class=\"nowrap col-sm-3 col-padding-right text-danger padding-left-lg\" (click)=\"clickPrice('sell', row)\">{{row.price.valueToString(8)}}</div>\n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('sell', row)\">{{row.total.valueToString(8)}}</div>\n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('sell', row)\">{{row.telos.valueToString()}}</div>\n                            <div class=\"nowrap col-sm-3 text-right padding-right-lg\" (click)=\"clickRow('sell', row)\">{{row.sumtelos.valueToString()}}</div>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <div class=\"pull-right\">\n                        <span class=\"text-muted\">\n                            {{headers.buy ? headers.buy.orders : 0}} {{local.string.orders}} -\n                            {{headers.buy.total ? headers.buy.total.toString() : \"\"}}\n                        </span>\n                    </div>\n                    {{local.string.buy_orders | titlecase}}\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('buyorders')\"></span>\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"nowrap text-bold text-sm col-sm-3 col-padding-right padding-left-lg\">{{local.string.price | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.amount | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-right col-padding-left\">{{local.string.total | titlecase}}</div>\n                <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-left padding-right-lg\">{{local.string.sum | titlecase}}</div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                        <div class=\"row margin-bottom success active-on-hover cursor-pointer\"\n                            [ngClass]=\"{'owner':row.owners[vapaee.account.name]}\"\n                            *ngFor=\"let row of orders.buy\"\n                        >\n                            <div class=\"nowrap col-sm-3 col-padding-right text-success padding-left-lg\" (click)=\"clickPrice('buy', row)\">{{row.price.valueToString(8)}}</div>    \n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('buy', row)\">{{row.total.valueToString(8)}}</div>\n                            <div class=\"nowrap col-sm-3 text-right col-padding-right col-padding-left\" (click)=\"clickRow('buy', row)\">{{row.telos.valueToString()}}</div>\n                            <div class=\"nowrap col-sm-3 text-right padding-right-lg \" (click)=\"clickRow('buy', row)\">{{row.sumtelos.valueToString()}}</div>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n    </div>\n</vpe-panel>"

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
    function VpePanelOrdersComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
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
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [hidebackground]=\"hidebackground\" [title]=\"local.string.tokens\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12\">\n            <div class=\"text-lg text-center\">{{title | titlecase}}</div>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <div class=\"card-deck\">\n                <div class=\"row\" style=\"flex-grow: 1;\">\n                    <div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let token of get_tokens; let i=index\">\n                        <div class=\"card token-card text-white bg-dark margin-top\" *ngIf=\"i<limit\">\n                            <div class=\"card-body vpe-background-card-body\">\n                                <h4 class=\"card-title\">\n                                    <div class=\"pull-right\" [hidden]=\"token.symbol == 'TLOS'\">\n                                        <div\n                                            class=\"nowrap text-right\"\n                                            [ngClass]=\"{'text-success': summary(token.scope).percent > 0, 'text-danger': summary(token.scope).percent < 0, 'text-muted': summary(token.scope).percent  == 0}\"\n                                        >\n                                            <small><b>{{summary(token.scope).percent_str}}</b></small>\n                                        </div>\n                                    </div>                            \n                                    <img style=\"height:20px; width: 20px; margin-top:-3px\" [src]=\"token.logo\">\n                                    {{token.appname}}\n                                </h4>\n                                <div class=\"card-text\">\n                                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('token-stat-'+token.symbol) && !vapaee.feed.loading('summary.'+token.scope)\"></span>\n                                    <span class=\"nowrap\"> {{token.stat ? token.stat.max_supply : ('0 ' + token.symbol)}} </span>\n                                    <br>\n                                    <a [href]=\"token.website\" target=\"_blank\"><small class=\"text-muted\">{{token.website}} &nbsp;</small></a><br>\n                                </div>\n                                <div>\n                                    <div class=\"pull-right\" [hidden]=\"token.symbol == 'TLOS'\">\n                                        <div class=\"nowrap text-right\">\n                                            <small class=\"text-muted\">{{local.string.price}}: </small> <small>{{summary(token.scope).price.valueToString(4)}}  {{summary(token.scope).price.token.symbol}}</small><br>\n                                            <small class=\"text-muted\">{{local.string.volume}}: {{summary(token.scope).volume.valueToString(4)}}  {{summary(token.scope).volume.token.symbol}}</small>\n                                        </div>\n                                    </div>\n                                    <span [hidden]=\"token.symbol != 'TLOS'\"\n                                        class=\"btn disabled btn-primary btn-sm margin-top\">trade</span>                            \n                                    <span [hidden]=\"token.symbol == 'TLOS'\"\n                                        class=\"btn btn-primary btn-sm margin-top\"\n                                        routerLink=\"{{'/exchange/trade/'+token.symbol.toLowerCase()+'.tlos'}}\">trade</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</vpe-panel>"

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
    function VpePanelTokensCardDeckComponent(vapaee, local) {
        var _this = this;
        this.vapaee = vapaee;
        this.local = local;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
                if (token.verified) {
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
        }, scope ? scope.summary : {});
        return _summary;
    };
    VpePanelTokensCardDeckComponent.prototype.onConfirmWithdraw = function () {
        this.confirmWithdraw.next(this.withdraw);
    };
    VpePanelTokensCardDeckComponent.prototype.onConfirmDeposit = function () {
        this.confirmDeposit.next(this.deposit);
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
    VpePanelTokensCardDeckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-tokens-card-deck',
            template: __webpack_require__(/*! ./vpe-panel-tokens-card-deck.component.html */ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-tokens-card-deck.component.scss */ "./src/app/components/vpe-panel-tokens-card-deck/vpe-panel-tokens-card-deck.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [title]=\"local.string.Tokenlist\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 input-group\">\n            <input\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                placeholder=\"{{local.string.searchtk}}\"\n                [value]=\"token_filter\"\n                (input)=\"token_filter = $event.target.value\"\n                >\n            <div class=\"input-group-append\">\n                <span class=\"input-group-text form-control-sm padding-xs\">\n                    <i class=\"material-icons\">search</i>\n                </span>\n            </div>\n        </div>            \n    </div>\n    <hr class=\"line\">\n    <div class=\"row margin-top\">\n        <div class=\"nowrap text-bold text-sm col-sm-3 col-padding-right\">{{local.string.token | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-2 col-padding-right col-padding-left\">{{local.string.vol | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-4 col-padding-right col-padding-left\">{{local.string.price | titlecase}}</div>\n        <div class=\"nowrap text-bold text-sm-right col-sm-3 col-padding-left\">{{local.string.change | titlecase}}</div>\n    </div>\n    <div class=\"row margin-top\">\n        <div class=\"col-sm-12\">\n            <perfect-scrollbar style=\"max-height: 250px; max-width: 100%\">\n                <div class=\"row cursor-pointer margin-bottom active-on-hover\" \n                    *ngFor=\"let token of get_tokens | filter:token_filter\"\n                    [hidden]=\"token.symbol == 'TLOS'\"\n                    routerLink=\"{{'/exchange/trade/' + token.scope}}\"\n                >\n                    <div class=\"nowrap col-sm-3 col-padding-right\">\n                        <img style=\"height:16px; width: 16px; margin-top:-2px\" [src]=\"token.logo\">\n                        {{token.symbol}}\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('token-stat-'+token.symbol) && !vapaee.feed.loading('summary.'+token.scope)\"></span>\n                    </div>\n                    <div class=\"nowrap col-sm-2 text-right col-padding-right col-padding-left\">\n                        {{summary(token.scope).volume.valueToString(2)}}\n                    </div>\n                    <div class=\"nowrap col-sm-4 text-right col-padding-right col-padding-left\">\n                        {{summary(token.scope).price.valueToString(4)}}\n                    </div>\n                    <div\n                        class=\"nowrap col-sm-3 text-right padding-right-lg\"\n                        [ngClass]=\"{'text-success': summary(token.scope).percent > 0, 'text-danger': summary(token.scope).percent < 0, 'text-muted': summary(token.scope).percent  == 0}\"\n                    >\n                        {{summary(token.scope).percent_str}}\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    </div>\n</vpe-panel>"

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
    function VpePanelTokensComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
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
    VpePanelTokensComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-tokens',
            template: __webpack_require__(/*! ./vpe-panel-tokens.component.html */ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-tokens.component.scss */ "./src/app/components/vpe-panel-tokens/vpe-panel-tokens.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [title]=\"local.string.orders\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"text-lg text-center\">\n                {{title | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('userorders')\"></span>\n            </div>\n        </div>\n        <div class=\"col-sm-12\" *ngFor=\"let scope of user_orders\">\n            <label class=\"cursor-pointer\" routerLink=\"{{'/exchange/trade/' + scope.table}}\">\n                {{local.string.table | titlecase}} {{getSymbols(scope.table)}}\n            </label>\n            <div class=\"row\">\n                <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\">{{local.string.price}}</div>\n                <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\">{{local.string.total}}</div>\n            </div>\n            <perfect-scrollbar style=\"max-height: 300px; max-width: 100%\">\n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of scope.buy.orders\"\n                    (click)=\"cancel(scope.buy.table, order)\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.deposit.toString(8)}}\n                    </div>\n                    \n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\" [hidden]=\"!vapaee.logged\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[scope.buy.table + order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[scope.buy.table + order.id]\"></span>\n                    </div>\n                \n                    <div class=\"col-sm-12\" [hidden]=\"!error\">\n                        <div class=\"alert alert-danger\">\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                </button>                \n                            </div>\n                            {{error}}\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"row margin-bottom active-on-hover cursor-pointer\" \n                    *ngFor=\"let order of scope.sell.orders\"\n                    (click)=\"cancel(scope.sell.table, order)\"\n                >\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right padding-left-lg\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.price.toString(8)}}\n                    </div>\n                    <div class=\"nowrap col-sm-5 text-right col-padding-right col-padding-left\"\n                        [ngClass]=\"{'text-danger':order.deposit.token.symbol != order.telos.token.symbol, 'text-success':order.deposit.token.symbol == order.telos.token.symbol}\"\n                        >\n                        {{order.deposit.toString(8)}}\n                    </div>\n                    \n                    <div class=\"nowrap col-sm-1 text-right col-padding-left padding-right-lg\" [hidden]=\"!vapaee.logged\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\" [hidden]=\"c_loading[scope.sell.table + order.id]\">cancel</i>\n                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!c_loading[scope.sell.table + order.id]\"></span>\n                    </div>\n                \n                    <div class=\"col-sm-12\" [hidden]=\"!error\">\n                        <div class=\"alert alert-danger\">\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"close text-white\" (click)=\"error = null\">\n                                    <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                                </button>                \n                            </div>\n                            {{error}}\n                        </div>\n                    </div>\n\n                </div>\n            </perfect-scrollbar>\n        </div>        \n    </div>\n</vpe-panel>"

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
    function VpePanelUserOrdersComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
        this.onClickRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.c_loading = {};
    }
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
    VpePanelUserOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-user-orders',
            template: __webpack_require__(/*! ./vpe-panel-user-orders.component.html */ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-user-orders.component.scss */ "./src/app/components/vpe-panel-user-orders/vpe-panel-user-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<vpe-panel [hideheader]=\"hideheader\" [title]=\"local.string.wallet\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12\">\n            <div class=\"text-lg text-center\">{{title | titlecase}}</div>\n        </div>\n\n        <div class=\"col-sm-12\" [hidden]=\"vapaee.logged || hideuser\">\n            <div class=\"pull-right margin-top\">\n                <span class=\"btn btn-sm btn-primary\" (click)=\"vapaee.login()\">\n                    <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('login') && !vapaee.feed.loading('log-state')\"></span>\n                    {{local.string.LoginWScatter}}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <div class=\"pull-right\" [hidden]=\"hideuser || !vapaee.logged\">\n                <small class=\"text-muted cursor-pointer\" [routerLink]=\"'/exchange/account/' + vapaee.current.name\">\n                    {{local.string.LoggedAs}} '{{vapaee.logged}}'\n                </small>\n            </div>            \n            <div class=\"text-md\">\n                {{local.string.deposits | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('deposits')\"></span>\n            </div>\n            <table class=\"table complete margin-top\">\n                <tbody>\n                    <tr [hidden]=\"!deposits || deposits.length > 0\"><td>\n                        <div class=\"col-sm-12 margin-top text-center text-danger\">\n                            <label>{{local.string.thesnodeps}}</label>\n                        </div>                        \n                    </td></tr>\n                    <tr\n                        [ngClass]=\"{'active-on-hover':actions}\"\n                        *ngFor=\"let deposit of deposits\">\n                        <td>\n                            <div (click)=\"withdrawForm(deposit)\" [ngClass]=\"{'cursor-pointer': actions}\">\n                                <img [src]=\"deposit.token.logo\" style=\"width: 20px; height: 20px; margin-top:-1px\">\n                                {{deposit.toString(8)}}\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('deposits')\"></span>\n                            </div>\n                            <div class=\"row\" [hidden]=\"deposit.token.symbol != withdraw.token.symbol\">\n                                <div class=\"col-sm-12 margin-top\">\n                                    <label>{{local.string.withdraw | titlecase}}</label>\n                                    <vpe-token-input\n                                        [(asset)]=\"withdraw\"\n                                        (valueChange)=\"onChange($event)\"\n                                        (valueEnter)=\"onConfirmWithdraw($event)\"\n                                        precision=\"4\"\n                                        [button]=\"local.string.withdraw\"\n                                        [loading]=\"loading\"\n                                        [error]=\"error\"\n                                        placeholder=\"{{local.string.withdraw | titlecase}}\"></vpe-token-input>\n                                </div>\n                            </div>                            \n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        \n        <div class=\"col-sm-12\" [hidden]=\"hasNoFake()\">\n            <div class=\"text-md\">\n                {{local.string.faketokens | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances')\"></span>\n            </div>\n            <table class=\"table complete margin-top\">\n                <tbody>\n                    <tr [hidden]=\"!get_fake_balances || (get_fake_balances.length > 0 && get_fake_tlos_balance.amount.toNumber() > 0)\"><td>\n                        <div class=\"col-sm-12 margin-top text-center text-danger\">\n                            <label [hidden]=\"get_fake_balances.length > 0\">{{local.string.thesnofaket}}</label>\n                            <label [hidden]=\"get_fake_balances.length == 0\">{{local.string.thesnofaketelos}}</label>\n\n                            <div [hidden]=\"!vapaee.logged\">\n                                <div class=\"pull-right col-sm-6\" [hidden]=\"get_fake_tlos_balance.amount.toNumber() > 0\">\n                                    <span class=\"btn btn-sm btn-primary\" (click)=\"freeFakeTelos()\">\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading_fake_tlos\"></span>\n                                        {{local.string.getfftelos }}\n                                    </span>\n                                </div>\n\n                                <div class=\"pull-right col-sm-6\" [hidden]=\"!get_fake_balances || get_fake_balances.length > 0\">\n                                    <span class=\"btn btn-sm btn-secondary\" (click)=\"freeFakeTokens()\">\n                                        <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!loading_fake\"></span>\n                                        {{local.string.getfftokens | titlecase}}\n                                    </span>\n                                </div>\n                            </div>                            \n                        </div>                        \n                    </td></tr>                    \n                    <tr \n                        [ngClass]=\"{'active-on-hover':actions}\"\n                        [hidden]=\"balance.amount.toNumber() == 0\"\n                        *ngFor=\"let balance of get_fake_balances\"\n                        >\n                        <td>\n                            <div (click)=\"depositForm(balance)\" [ngClass]=\"{'cursor-pointer': actions}\">\n                                <img [src]=\"balance.token.logo\" style=\"width: 20px; height: 20px; margin-top:-1px\">\n                                {{balance.toString()}}\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances-'+balance.token.contract) && !vapaee.feed.loading('token-stat-'+balance.token.symbol)\"></span>\n                            </div>\n                            <div class=\"row\" [hidden]=\"balance.token.symbol != deposit.token.symbol\">\n                                <div class=\"col-sm-12 margin-top\">\n                                    <label>{{local.string.deposit | titlecase}}</label>\n                                    <vpe-token-input\n                                        [(asset)]=\"deposit\"\n                                        (valueChange)=\"onChange($event)\"\n                                        (valueEnter)=\"onConfirmDeposit($event)\"\n                                        precision=\"4\"\n                                        [button]=\"local.string.deposit\"\n                                        [loading]=\"loading\"\n                                        [error]=\"error\"\n                                        placeholder=\"{{local.string.deposit | titlecase}}\"></vpe-token-input>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n            <div class=\"text-md\">\n                {{local.string.balances | titlecase}}\n                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances')\"></span>\n            </div>\n            <div class=\"alert alert-info\" [hidden]=\"!alert_msg\">\n                <div class=\"pull-right\">\n                    <button type=\"button\" class=\"close text-white\" (click)=\"alert_msg = null\">\n                        <i class=\"material-icons\" style=\"font-size: 100%;\">cancel</i>\n                    </button>                \n                </div>\n                {{alert_msg}}\n            </div>    \n            <table class=\"table complete margin-top\">\n                <tbody>\n                    <tr \n                        [ngClass]=\"{'active-on-hover':actions}\"\n                        [hidden]=\"balance.amount.toNumber() == 0\"\n                        *ngFor=\"let balance of get_non_fake_balances\"\n                        >\n                        <td>\n                            <div (click)=\"depositForm(balance)\" [ngClass]=\"{'cursor-pointer': actions}\">\n                                <img [src]=\"balance.token.logo\" style=\"width: 20px; height: 20px; margin-top:-1px\">\n                                {{balance.toString()}}\n                                <span class=\"spinner-border spinner-border-sm\" [hidden]=\"!vapaee.feed.loading('balances-'+balance.token.contract) && !vapaee.feed.loading('token-stat-'+balance.token.symbol)\"></span>\n                            </div>\n                            <div class=\"row\" [hidden]=\"balance.token.symbol != deposit.token.symbol\">\n                                <div class=\"col-sm-12 margin-top\">\n                                    <label>{{local.string.deposit | titlecase}}</label>\n                                    <vpe-token-input\n                                        [(asset)]=\"deposit\"\n                                        (valueChange)=\"onChange($event)\"\n                                        (valueEnter)=\"onConfirmDeposit($event)\"\n                                        precision=\"4\"\n                                        [button]=\"local.string.deposit\"\n                                        [loading]=\"loading\"\n                                        [error]=\"error\"\n                                        placeholder=\"{{local.string.deposit | titlecase}}\"></vpe-token-input>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>        \n\n    </div>\n</vpe-panel>"

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
    function VpePanelWalletComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
        this.confirmDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            return this._nonfake_balances;
        },
        enumerable: true,
        configurable: true
    });
    VpePanelWalletComponent.prototype.depositForm = function (asset) {
        this.alert_msg = "";
        if (!this.vapaee.logged)
            return;
        if (!this.actions)
            return;
        if (!asset.token.verified) {
            this.alert_msg = "This token is not allowed yet in vapaee.io DEX";
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
    VpePanelWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel-wallet',
            template: __webpack_require__(/*! ./vpe-panel-wallet.component.html */ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel-wallet.component.scss */ "./src/app/components/vpe-panel-wallet/vpe-panel-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

module.exports = "<div class=\"margin-top\" [ngClass]=\"{'card text-white bg-dark vpe-background-panel':!hidebackground}\">\n    <label class=\"title vpe-background-panel-title\" [hidden]=\"hideheader\">\n        <i class=\"tiny material-icons\">brightness_1</i>\n        {{title | titlecase}}\n    </label>\n    <div [ngClass]=\"{'card-body padding':!hidebackground}\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/vpe-panel/vpe-panel.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/vpe-panel/vpe-panel.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\nlabel.title {\n  border-radius: 0px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: #535960;\n  padding: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: white;\n  font-weight: bold; }\n"

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
    function VpePanelComponent(vapaee, local) {
        this.vapaee = vapaee;
        this.local = local;
        this.hideheader = false;
        this.hidebackground = false;
    }
    VpePanelComponent.prototype.ngOnChanges = function () {
    };
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
    VpePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-panel',
            template: __webpack_require__(/*! ./vpe-panel.component.html */ "./src/app/components/vpe-panel/vpe-panel.component.html"),
            styles: [__webpack_require__(/*! ./vpe-panel.component.scss */ "./src/app/components/vpe-panel/vpe-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"]])
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

/***/ "./src/app/pages-cnt/albums/albums.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages-cnt/albums/albums.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <h1>Albums</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages-cnt/albums/albums.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages-cnt/albums/albums.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-cnt/albums/albums.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages-cnt/albums/albums.page.ts ***!
  \*************************************************/
/*! exports provided: AlbumsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsPage", function() { return AlbumsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumsPage = /** @class */ (function () {
    function AlbumsPage(app, local, scatter, bgbox, cnt) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.cnt = cnt;
    }
    AlbumsPage.prototype.ngOnDestroy = function () {
    };
    AlbumsPage.prototype.ngOnInit = function () {
    };
    AlbumsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'albums-page',
            template: __webpack_require__(/*! ./albums.page.html */ "./src/app/pages-cnt/albums/albums.page.html"),
            styles: [__webpack_require__(/*! ./albums.page.scss */ "./src/app/pages-cnt/albums/albums.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-cnt/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"]])
    ], AlbumsPage);
    return AlbumsPage;
}());



/***/ }),

/***/ "./src/app/pages-cnt/cards/cards.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages-cnt/cards/cards.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <h1>Cards</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages-cnt/cards/cards.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages-cnt/cards/cards.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-cnt/cards/cards.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages-cnt/cards/cards.page.ts ***!
  \***********************************************/
/*! exports provided: CardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPage", function() { return CardsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardsPage = /** @class */ (function () {
    function CardsPage(app, local, scatter, bgbox, cnt) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.cnt = cnt;
    }
    CardsPage.prototype.ngOnDestroy = function () {
    };
    CardsPage.prototype.ngOnInit = function () {
    };
    CardsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cards-page',
            template: __webpack_require__(/*! ./cards.page.html */ "./src/app/pages-cnt/cards/cards.page.html"),
            styles: [__webpack_require__(/*! ./cards.page.scss */ "./src/app/pages-cnt/cards/cards.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-cnt/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"]])
    ], CardsPage);
    return CardsPage;
}());



/***/ }),

/***/ "./src/app/pages-cnt/common.page.scss":
/*!********************************************!*\
  !*** ./src/app/pages-cnt/common.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: calc(100% - 51px);\n  display: block;\n  overflow: auto;\n  position: relative; }\n\n@media (min-width: 576px) {\n  :host {\n    height: calc(100% - 51px); } }\n\n@media (min-width: 768px) {\n  :host {\n    height: calc(100% - 51px); } }\n\n@media (min-width: 992px) {\n  :host {\n    height: calc(100% - 55.8px); } }\n\n@media (min-width: 1200px) {\n  :host {\n    height: calc(100% - 57px); } }\n"

/***/ }),

/***/ "./src/app/pages-cnt/inventory/inventory.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages-cnt/inventory/inventory.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <h1>Inventory</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages-cnt/inventory/inventory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages-cnt/inventory/inventory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-cnt/inventory/inventory.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages-cnt/inventory/inventory.page.ts ***!
  \*******************************************************/
/*! exports provided: InventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPage", function() { return InventoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InventoryPage = /** @class */ (function () {
    function InventoryPage(app, local, route, scatter, bgbox, cnt) {
        this.app = app;
        this.local = local;
        this.route = route;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.cnt = cnt;
        this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscriber"](this.onCntCurrentProfileChange.bind(this));
    }
    InventoryPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    InventoryPage.prototype.ngOnInit = function () {
        this.cnt.onCurrentProfileChange.subscribe(this.subscriber);
        var profile = this.route.snapshot.paramMap.get('profile');
        if (profile != "guest") {
            this.cnt.fetchProfile(profile).then(this.cnt.setCurrentProfile.bind(this.cnt));
        }
    };
    InventoryPage.prototype.onCntCurrentProfileChange = function (profile) {
        var url = "/cnt/inventory/" + profile.slugid.str;
        console.log("InventoryPage.onCntCurrentProfileChange()", [profile], " --> ", url);
        this.app.navigate(url);
    };
    InventoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-page',
            template: __webpack_require__(/*! ./inventory.page.html */ "./src/app/pages-cnt/inventory/inventory.page.html"),
            styles: [__webpack_require__(/*! ./inventory.page.scss */ "./src/app/pages-cnt/inventory/inventory.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-cnt/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"]])
    ], InventoryPage);
    return InventoryPage;
}());



/***/ }),

/***/ "./src/app/pages-cnt/profile/profile.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages-cnt/profile/profile.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <h1>Profile</h1>\n        </div>\n    </div>\n    <div class=\"card text-white bg-dark margin-top\">\n        <div class=\"card-body\" [ngClass]=\"{'d-none':cnt.loginState != 'no-scatter'}\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-secondary\" (click)=\"scatter.connectApp()\">retry</span>\n            </div>\n            <span>Scatter not detected</span>\n        </div>\n        <div class=\"card-body\" [ngClass]=\"{'d-none':cnt.loginState != 'no-logged'}\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-secondary\" (click)=\"cnt.login()\">\n                    {{local.string.LoginWScatter}}\n                </span>\n            </div>\n            <span>You are not logged in</span>\n        </div>\n        <div class=\"card-body\" [ngClass]=\"{'d-none':cnt.loginState != 'no-profiles'}\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-secondary\" [routerLink]=\"'/local/bgbox/register'\" [queryParams]=\"{ type: 'profile'}\">Create a profile</span>\n            </div>\n            <span>You have no profiles on BG-Box</span>\n        </div>\n        <div class=\"card-body\" [ngClass]=\"{'d-none':cnt.loginState != 'no-selected'}\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-secondary margin-left\" [routerLink]=\"'/local/bgbox/register'\"  [queryParams]=\"{ type: 'profile', back: ''}\">Create another profile</span>\n            </div>\n            <span>Please select a profile</span>\n        </div>\n\n        <div class=\"card text-white bg-dark\" [ngClass]=\"{'d-none':cnt.loginState != 'no-selected'}\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"input-group col-sm-12\">\n                        <h2>profiles</h2>\n                    </div>\n                    <div class=\"input-group col-sm-12\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <td>Name</td>\n                                    <td>owner</td>\n                                    <td>namespace</td>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let profile of cnt.profiles\" class=\"cursor-pointer\" (click)=\"selectProfile(profile)\">\n                                    <td>{{profile.username}}</td>\n                                    <td>{{profile.owner}}</td>\n                                    <td>{{profile.slugid.str}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n            \n\n        <div class=\"card-body\" *ngIf=\"cnt.loginState == 'no-registered'\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-danger\" (click)=\"cnt.resetProfiles()\">Deselect Profile</span>\n                <span class=\"btn btn-sm btn-success margin-left\" (click)=\"cnt.registerProfile()\">Register profile in C&T</span>\n            </div>\n            <span>In order to use C&T you must first register your '{{cnt.selected.username}}' profile</span>\n        </div>\n        <div class=\"card-body\" *ngIf=\"cnt.loginState == 'profile-ok'\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-secondary\" (click)=\"cnt.logout()\">Logout from C&T</span>\n                <span class=\"btn btn-sm btn-secondary margin-left\" (click)=\"scatter.logout()\">Logout from Scatter</span>\n            </div>\n            <span>Logged as '{{cnt.logged.username}}'</span>\n        </div>        \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages-cnt/profile/profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages-cnt/profile/profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-cnt/profile/profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages-cnt/profile/profile.page.ts ***!
  \***************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = /** @class */ (function () {
    function ProfilePage(app, local, scatter, route, bgbox, cnt) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.bgbox = bgbox;
        this.cnt = cnt;
        this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscriber"](this.onCntCurrentProfileChange.bind(this));
    }
    ProfilePage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    ProfilePage.prototype.ngOnInit = function () {
        console.log("ProfilePage.ngOnInit()");
        // this.cnt.updateLogState();
        this.cnt.onCurrentProfileChange.subscribe(this.subscriber);
        var profile = this.route.snapshot.paramMap.get('profile');
        if (profile != "guest") {
            this.cnt.fetchProfile(profile).then(this.cnt.setCurrentProfile.bind(this.cnt));
        }
    };
    ProfilePage.prototype.onCntCurrentProfileChange = function (profile) {
        var url = "/cnt/profile/" + profile.slugid.str;
        console.log("ProfilePage.onCntCurrentProfileChange()", [profile], " --> ", url);
        this.app.navigate(url);
    };
    ProfilePage.prototype.selectProfile = function (user) {
        this.cnt.selectProfile(user);
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-page',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages-cnt/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages-cnt/profile/profile.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-cnt/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/pages-cnt/root/cntroot.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages-cnt/root/cntroot.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar drop-shadow navbar-expand-lg navbar-dark bg-primary\" (click)=\"collapseMenu()\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"http://cardsandtokens.com\" target=\"_blank\">\n            <img src=\"/assets/img/cards-and-tokens.png\" alt=\"\" class=\"cnt-logo\">\n        </a>        \n        \n        <div class=\"flex-grow-1\">\n            <div class=\"fb-like-container\">\n                <!--div class=\"fb-like fb_iframe_widget\" data-href=\"https://www.facebook.com/cardsandtokens\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"false\" fb-xfbml-state=\"rendered\" fb-iframe-plugin-query=\"action=like&amp;app_id=294648343906769&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=false\"><span style=\"vertical-align: bottom; width: 100px; height: 20px;\"><iframe name=\"f7e211683f293c\" width=\"1000px\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\" allow=\"encrypted-media\" title=\"fb:like Facebook Social Plugin\" src=\"https://www.facebook.com/v2.5/plugins/like.php?action=like&amp;app_id=294648343906769&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Dfdbcae6fad0228%26domain%3Dpresale.cardsandtokens.com%26origin%3Dhttp%253A%252F%252Fpresale.cardsandtokens.com%252Ff2aab638e0f2e3%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false\" style=\"border: none; visibility: visible; width: 100px; height: 20px;\" class=\"\"></iframe></span></div-->\n            </div>\n        </div>\n\n        <button class=\"navbar-toggler margin-xs\" id=\"toggle-btn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>        \n\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav ml-auto\">\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"'/local/home'\" >EOS.IO</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('cards')}\">\n                    <a class=\"nav-link\" routerLink=\"{{'/cnt/cards'}}\" >{{local.string.Cards}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('inventory')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/cnt/inventory/' + cnt.current.slugid.str\" >{{local.string.Inventory}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('albums')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/cnt/albums'\" >{{local.string.Albums}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('profile')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/cnt/profile/' + cnt.current.slugid.str\" >{{local.string.Profile}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"debug()\">DEBUG</a>\n                </li>\n                <li class=\"nav-item dropdown\" dropdown>\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"language\">{{local.string.Language}} <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"language\">\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('en_US')\">English</span>\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('es_ES')\">Español</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages-cnt/root/cntroot.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages-cnt/root/cntroot.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%; }\n\n.cnt-logo {\n  height: 37px; }\n\n.fb-like-container {\n  margin-top: 5px; }\n\n.navbar-brand {\n  border-right-width: 0px; }\n\n.navbar-brand {\n  padding: 5px 20px 5px 10px; }\n\n.navbar {\n  z-index: 10;\n  background: #3a3a3a;\n  background: linear-gradient(to bottom, #3a3a3a 0%, #545454 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a3a3a', endColorstr='#545454',GradientType=0 ); }\n"

/***/ }),

/***/ "./src/app/pages-cnt/root/cntroot.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages-cnt/root/cntroot.page.ts ***!
  \************************************************/
/*! exports provided: CntRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CntRootPage", function() { return CntRootPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CntRootPage = /** @class */ (function () {
    function CntRootPage(app, local, elRef, scatter, cnt, bgbox) {
        this.app = app;
        this.local = local;
        this.elRef = elRef;
        this.scatter = scatter;
        this.cnt = cnt;
        this.bgbox = bgbox;
        console.error("NOT AUTHORIZED !! redirect -->  https://vapaee.io");
        window.location.href = "https://vapaee.io";
    }
    CntRootPage.prototype.ngOnInit = function () {
        if (this.scatter.network.slug != "local" || !this.scatter.connected) {
            this.scatter.setNetwork("local");
            this.scatter.connectApp("Cards & Tokens").catch(function (err) { return console.error(err); });
        }
    };
    CntRootPage.prototype.collapseMenu = function () {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    };
    CntRootPage.prototype.debug = function () {
        console.log("--------------------------------");
        console.log("CNT", [this.cnt]);
        console.log("BOX", [this.bgbox]);
        console.log("--------------------------------");
    };
    CntRootPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cntroot-page',
            template: __webpack_require__(/*! ./cntroot.page.html */ "./src/app/pages-cnt/root/cntroot.page.html"),
            styles: [__webpack_require__(/*! ./cntroot.page.scss */ "./src/app/pages-cnt/root/cntroot.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_5__["BGBoxService"]])
    ], CntRootPage);
    return CntRootPage;
}());



/***/ }),

/***/ "./src/app/pages-vpe/account/account.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages-vpe/account/account.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-lg-none\">\n\n    <vpe-panel-account-header [current]=\"vapaee.current\"></vpe-panel-account-header>\n\n    <vpe-panel-account-resources  [title]=\"local.string.resources\" [hideheader]=\"true\" [current]=\"vapaee.current\"> </vpe-panel-account-resources>\n        \n    <vpe-panel-balance-breakdown [title]=\"local.string.balbreak\" [hideheader]=\"true\" [current]=\"vapaee.current\"></vpe-panel-balance-breakdown>\n\n    <vpe-panel-user-orders [userorders]=\"userorders\" [hideheader]=\"true\" [title]=\"local.string.orders\"></vpe-panel-user-orders>\n\n\n    <vpe-panel-user-orders [hidden]=\"vapaee.current.name == vapaee.default.name\" [userorders]=\"userorders\" [hideheader]=\"true\" [title]=\"local.string.orders\"></vpe-panel-user-orders>\n\n    <vpe-panel-wallet [hidden]=\"vapaee.current.name == vapaee.default.name\" (confirmWithdraw)=\"onWalletConfirmWithdraw($event)\" (confirmDeposit)=\"onWalletConfirmDeposit($event)\" [error]=\"error\" [loading]=\"loading\" [actions]=\"true\" [hideuser]=\"true\" [hideheader]=\"true\" [title]=\"local.string.wallet\" [deposits]=\"deposits\" [balances]=\"balances\"></vpe-panel-wallet>\n    \n</div>\n\n\n<!-- ---------------------------------------------------------------------------- -->\n\n<div class=\"container d-none d-lg-block\">\n\n    <vpe-panel-account-header [current]=\"vapaee.current\"></vpe-panel-account-header>\n    \n    <div class=\"row\" [hidden]=\"vapaee.current.name == vapaee.default.name\">\n        <div class=\"col-lg-6 col-padding-right\">\n            <vpe-panel-account-resources  [title]=\"local.string.resources\" [hideheader]=\"true\" [current]=\"vapaee.current\"> </vpe-panel-account-resources>\n            <vpe-panel-balance-breakdown [title]=\"local.string.balbreak\" [hideheader]=\"true\" [current]=\"vapaee.current\"></vpe-panel-balance-breakdown>\n            <vpe-panel-user-orders [userorders]=\"userorders\" [hideheader]=\"true\" [title]=\"local.string.orders\"></vpe-panel-user-orders>\n        </div>\n        <div class=\"col-lg-6 col-padding-left\">\n            <vpe-panel-wallet (confirmWithdraw)=\"onWalletConfirmWithdraw($event)\" (confirmDeposit)=\"onWalletConfirmDeposit($event)\" [error]=\"error\" [loading]=\"loading\" [actions]=\"true\" [hideuser]=\"true\" [hideheader]=\"true\" [title]=\"local.string.wallet\" [deposits]=\"deposits\" [balances]=\"balances\"></vpe-panel-wallet>\n        </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages-vpe/account/account.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages-vpe/account/account.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-vpe/account/account.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages-vpe/account/account.page.ts ***!
  \***************************************************/
/*! exports provided: VpeAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeAccountPage", function() { return VpeAccountPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var VpeAccountPage = /** @class */ (function () {
    function VpeAccountPage(app, local, scatter, route, bgbox, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.bgbox = bgbox;
        this.vapaee = vapaee;
        this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscriber"](this.onCntCurrentAccountChange.bind(this));
        this.current_mode = true;
        // this.onCntCurrentAccountChange('guest');
    }
    Object.defineProperty(VpeAccountPage.prototype, "deposits", {
        get: function () {
            return this.vapaee.deposits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpeAccountPage.prototype, "balances", {
        get: function () {
            return this.vapaee.balances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpeAccountPage.prototype, "userorders", {
        get: function () {
            return this.vapaee.userorders;
        },
        enumerable: true,
        configurable: true
    });
    VpeAccountPage.prototype.updateAccount = function () {
    };
    VpeAccountPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    VpeAccountPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("VpeAccountPage.ngOnInit()");
        // this.cnt.updateLogState();
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
        }, 0);
    };
    VpeAccountPage.prototype.onCntCurrentAccountChange = function (account) {
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
    VpeAccountPage.prototype.onWalletConfirmDeposit = function (amount) {
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
    VpeAccountPage.prototype.onWalletConfirmWithdraw = function (amount) {
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
    VpeAccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-account-page',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/pages-vpe/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/pages-vpe/account/account.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-vpe/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_7__["VapaeeService"]])
    ], VpeAccountPage);
    return VpeAccountPage;
}());



/***/ }),

/***/ "./src/app/pages-vpe/common.page.scss":
/*!********************************************!*\
  !*** ./src/app/pages-vpe/common.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: calc(100% - 51px);\n  display: block;\n  overflow: auto;\n  position: relative; }\n\n@media (min-width: 576px) {\n  :host {\n    height: calc(100% - 51px); } }\n\n@media (min-width: 768px) {\n  :host {\n    height: calc(100% - 51px); } }\n\n@media (min-width: 992px) {\n  :host {\n    height: calc(100% - 55.8px); } }\n\n@media (min-width: 1200px) {\n  :host {\n    height: calc(100% - 57px); } }\n"

/***/ }),

/***/ "./src/app/pages-vpe/home/home.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages-vpe/home/home.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron vpe-background-jumbotron margin-top-xxl\">\n    <div class=\"container text-center\">\n        <img class=\"img-fluid\" src=\"/assets/img/Logo.png\">\n    </div>    \n    <div class=\"container margin-top text-lg text-center\">\n        <div>Tokens Exchange - Telos DEX</div>\n    </div>    \n</div>\n<div class=\"container margin-top\">\n    <vpe-panel-tokens-card-deck [limit]=\"3\" [hidebackground]=\"true\" [hideheader]=\"true\" [tokens]=\"tokens\"></vpe-panel-tokens-card-deck>\n</div>\n"

/***/ }),

/***/ "./src/app/pages-vpe/home/home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages-vpe/home/home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-vpe/home/home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages-vpe/home/home.page.ts ***!
  \*********************************************/
/*! exports provided: VpeHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeHomePage", function() { return VpeHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VpeHomePage = /** @class */ (function () {
    function VpeHomePage(app, local, scatter, bgbox, cnt, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.cnt = cnt;
        this.vapaee = vapaee;
    }
    VpeHomePage.prototype.ngOnDestroy = function () {
    };
    VpeHomePage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(VpeHomePage.prototype, "tokens", {
        get: function () {
            return this.vapaee.tokens;
        },
        enumerable: true,
        configurable: true
    });
    VpeHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-home-page',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages-vpe/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages-vpe/home/home.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-vpe/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_6__["VapaeeService"]])
    ], VpeHomePage);
    return VpeHomePage;
}());



/***/ }),

/***/ "./src/app/pages-vpe/root/vpe-root.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages-vpe/root/vpe-root.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar vpe-background-navbar drop-shadow navbar-expand-lg navbar-dark bg-primary\" (click)=\"collapseMenu()\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"http://cardsandtokens.com\" target=\"_blank\">\n            <img src=\"/assets/img/cards-and-tokens.png\" alt=\"\" class=\"cnt-logo\">\n        </a>        \n        \n        <div class=\"flex-grow-1\">\n            <div class=\"fb-like-container\">\n                <!--div class=\"fb-like fb_iframe_widget\" data-href=\"https://www.facebook.com/cardsandtokens\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"false\" fb-xfbml-state=\"rendered\" fb-iframe-plugin-query=\"action=like&amp;app_id=294648343906769&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=false\"><span style=\"vertical-align: bottom; width: 100px; height: 20px;\"><iframe name=\"f7e211683f293c\" width=\"1000px\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\" allow=\"encrypted-media\" title=\"fb:like Facebook Social Plugin\" src=\"https://www.facebook.com/v2.5/plugins/like.php?action=like&amp;app_id=294648343906769&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Dfdbcae6fad0228%26domain%3Dpresale.cardsandtokens.com%26origin%3Dhttp%253A%252F%252Fpresale.cardsandtokens.com%252Ff2aab638e0f2e3%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false\" style=\"border: none; visibility: visible; width: 100px; height: 20px;\" class=\"\"></iframe></span></div-->\n            </div>\n        </div>\n\n        <button class=\"navbar-toggler margin-xs\" id=\"toggle-btn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>        \n\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('home')}\">\n                    <a class=\"nav-link\" routerLink=\"{{'/exchange/home'}}\" >{{local.string.Home}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('tokens')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/exchange/tokens'\" >{{local.string.Tokens}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('trade')}\">\n                    <a class=\"nav-link\" routerLink=\"{{'/exchange/trade/aaa.tlos'}}\" >{{local.string.Trade}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('account')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/exchange/account/' + vapaee.current.name\" >{{local.string.Account}}</a>\n                </li>\n                <!-- \n                <li class=\"nav-item\">\n                    <a class=\"nav-link cursor-pointer\" (click)=\"debug()\">DEBUG</a>\n                </li>\n                -->\n                <li class=\"nav-item dropdown\" ngbDropdown>\n                    <a ngbDropdownToggle class=\"nav-link dropdown-toggle cursor-pointer\" data-toggle=\"dropdown\" id=\"language\">{{local.string.Language}} <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"language\">\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('en_US')\">English</span>\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('es_ES')\">Español</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages-vpe/root/vpe-root.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages-vpe/root/vpe-root.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%; }\n\n.cnt-logo {\n  height: 37px; }\n\n.fb-like-container {\n  margin-top: 5px; }\n\n.navbar-brand {\n  border-right-width: 0px; }\n\n.navbar-brand {\n  padding: 5px 20px 5px 10px; }\n\n.navbar {\n  z-index: 10;\n  background: #3a3a3a;\n  background: linear-gradient(to bottom, #3a3a3a 0%, #545454 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a3a3a', endColorstr='#545454',GradientType=0 ); }\n"

/***/ }),

/***/ "./src/app/pages-vpe/root/vpe-root.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages-vpe/root/vpe-root.page.ts ***!
  \*************************************************/
/*! exports provided: VpeRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpeRootPage", function() { return VpeRootPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VpeRootPage = /** @class */ (function () {
    function VpeRootPage(app, local, elRef, scatter, cnt, bgbox, vapaee) {
        this.app = app;
        this.local = local;
        this.elRef = elRef;
        this.scatter = scatter;
        this.cnt = cnt;
        this.bgbox = bgbox;
        this.vapaee = vapaee;
    }
    VpeRootPage.prototype.ngOnInit = function () {
        var network = "telos-testnet";
        network = "telos";
        if (this.scatter.network.slug != network || !this.scatter.connected) {
            this.scatter.setNetwork(network);
            this.scatter.connectApp("Cards & Tokens").catch(function (err) { return console.error(err); });
        }
    };
    VpeRootPage.prototype.collapseMenu = function () {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    };
    VpeRootPage.prototype.debug = function () {
        console.log("--------------------------------");
        console.log("CNT", [this.cnt]);
        console.log("BOX", [this.bgbox]);
        console.log("VPE", [this.vapaee]);
        console.log("--------------------------------");
    };
    VpeRootPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vpe-root-page',
            template: __webpack_require__(/*! ./vpe-root.page.html */ "./src/app/pages-vpe/root/vpe-root.page.html"),
            styles: [__webpack_require__(/*! ./vpe-root.page.scss */ "./src/app/pages-vpe/root/vpe-root.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_5__["BGBoxService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_6__["VapaeeService"]])
    ], VpeRootPage);
    return VpeRootPage;
}());



/***/ }),

/***/ "./src/app/pages-vpe/tokens/tokens.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages-vpe/tokens/tokens.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card text-white bg-dark margin-top-md\">\n        <div class=\"card-header vpe-background-card-header\">\n            <h1><img style=\"height:32px; width: 32px;\" src=\"/assets/logos/telos.png\"> Telos tokens</h1>\n        </div>\n    </div>\n\n    <vpe-panel-tokens-card-deck [hidebackground]=\"true\" [hideheader]=\"true\" [tokens]=\"tokens\"></vpe-panel-tokens-card-deck>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages-vpe/tokens/tokens.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages-vpe/tokens/tokens.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".token-card {\n  min-width: 220px; }\n"

/***/ }),

/***/ "./src/app/pages-vpe/tokens/tokens.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages-vpe/tokens/tokens.page.ts ***!
  \*************************************************/
/*! exports provided: TokensPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensPage", function() { return TokensPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
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
    function TokensPage(app, local, scatter, bgbox, cnt, vapaee) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.cnt = cnt;
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
    TokensPage.prototype.ngOnDestroy = function () {
    };
    TokensPage.prototype.ngOnInit = function () {
    };
    TokensPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tokens-page',
            template: __webpack_require__(/*! ./tokens.page.html */ "./src/app/pages-vpe/tokens/tokens.page.html"),
            styles: [__webpack_require__(/*! ./tokens.page.scss */ "./src/app/pages-vpe/tokens/tokens.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-vpe/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_6__["VapaeeService"]])
    ], TokensPage);
    return TokensPage;
}());



/***/ }),

/***/ "./src/app/pages-vpe/trade/trade.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages-vpe/trade/trade.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-top\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-header vpe-background-card-header padding\">\n            <div class=\"row\">\n                <div class=\"col-sm-4 col-md-3 col-padding-right margin-top\">\n                    \n                </div>\n                <div class=\"col-sm-8 col-md-9 col-padding-left margin-top\">\n                    <span class=\"text-xl\">\n                        <img style=\"height:40px; width: 40px; margin-top:-6px\" [src]=\"comodity ? comodity.logolg : '#'\">\n                        <span> {{comodity ? comodity.appname : local.string.loading}} </span>\n                        <small class=\"text-muted\">({{scope}})</small>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-md-3  col-padding-right\">\n            <vpe-panel-tokens [tokens]=\"tokens\" [scopes]=\"scopes\"></vpe-panel-tokens>\n            <vpe-panel-wallet [deposits]=\"deposits\" [balances]=\"balances\"></vpe-panel-wallet>\n        </div>\n        <div class=\"col-sm-8 col-md-9 col-padding-left\">\n            <vpe-panel-chart></vpe-panel-chart>\n            <vpe-panel-order-editor [hidden]=\"!vapaee.logged\" #orderform [deposits]=\"deposits\" [comodity]=\"comodity\" [currency]=\"currency\" [orders]=\"orders\" [owner]=\"vapaee.logged\"></vpe-panel-order-editor>\n            <div class=\"row\">\n                <div class=\"col-sm-8 col-md-9 col-padding-right\">\n                    <vpe-panel-orders (onClickRow)=\"onClickRow($event)\" (onClickPrice)=\"onClickPrice($event)\" [headers]=\"headers\" [orders]=\"orders\"></vpe-panel-orders>\n                </div>\n                <div class=\"col-sm-4 col-md-3 col-padding-left\">\n                    <vpe-panel-history [scope]=\"comodity ? comodity.scope : ''\" [history]=\"history\"></vpe-panel-history>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages-vpe/trade/trade.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages-vpe/trade/trade.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages-vpe/trade/trade.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages-vpe/trade/trade.page.ts ***!
  \***********************************************/
/*! exports provided: TradePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradePage", function() { return TradePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/vapaee.service */ "./src/app/services/vapaee.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component */ "./src/app/components/vpe-panel-order-editor/vpe-panel-order-editor.component.ts");
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
    function TradePage(app, local, scatter, bgbox, cnt, vapaee, route) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.cnt = cnt;
        this.vapaee = vapaee;
        this.route = route;
        this._orders = { sell: [], buy: [] };
        this.onStateSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscriber"](this.onStateChange.bind(this));
    }
    TradePage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("TradePage.init() <-- ");
                this.orderform.reset();
                this.comodity = null;
                this.currency = null;
                setTimeout(function (_) { return __awaiter(_this, void 0, void 0, function () {
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
                                this.vapaee.updateTrade(this.comodity, this.currency).then(function (_) {
                                });
                                return [2 /*return*/];
                        }
                    });
                }); }, 0);
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
    TradePage.prototype.ngOnDestroy = function () {
        this.onStateSubscriber.unsubscribe();
    };
    TradePage.prototype.ngOnInit = function () {
        this.init();
        this.app.onStateChange.subscribe(this.onStateSubscriber);
    };
    TradePage.prototype.onClickRow = function (e) {
        console.log("**************** onClickRow", e);
        this.orderform.setPrice(e.row.price.clone());
        this.orderform.setAmount(e.row.sum.clone());
        this.orderform.wantsTo(e.type == "sell" ? "buy" : "sell");
    };
    TradePage.prototype.onClickPrice = function (e) {
        console.log("**************** onClickPrice", e);
        this.orderform.setPrice(e.row.price.clone());
    };
    TradePage.prototype.onStateChange = function (state) {
        console.log("TradePage.onStateChange(" + state + ")");
        if (state == "trade") {
            this.init();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_9__["VpePanelOrderEditorComponent"]),
        __metadata("design:type", src_app_components_vpe_panel_order_editor_vpe_panel_order_editor_component__WEBPACK_IMPORTED_MODULE_9__["VpePanelOrderEditorComponent"])
    ], TradePage.prototype, "orderform", void 0);
    TradePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trade-page',
            template: __webpack_require__(/*! ./trade.page.html */ "./src/app/pages-vpe/trade/trade.page.html"),
            styles: [__webpack_require__(/*! ./trade.page.scss */ "./src/app/pages-vpe/trade/trade.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages-vpe/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_4__["BGBoxService"],
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"],
            src_app_services_vapaee_service__WEBPACK_IMPORTED_MODULE_7__["VapaeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], TradePage);
    return TradePage;
}());



/***/ }),

/***/ "./src/app/pages/account/account.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"text-left margin-top-xxxl\">\n    <pre>{{account|json}}</pre>\n</div>\n-->\n\n\n<div class=\"container margin-top-xxl\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"input-group col-sm-12\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"account.account_name\" (input)=\"account.account_name = $event.target.value\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"search(account.account_name)\">search</button>\n                    </div>\n                </div>            \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container margin-top-xxl\">\n    <eosio-account [account]=\"account\"></eosio-account>\n</div>    \n\n<div class=\"container margin-top-xxl\">\n\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-header\">\n            <span class=\"text-lg color-green\">Transfer EOS</span>\n        </div>\n        \n        <div class=\"card-body\">\n\n            <div [hidden]=\"scatter.logged\" class=\"text-center margin-top\">\n                <span class=\"btn btn-primary\" (click)=\"login()\">\n                    {{local.string.LoginWScatter}}\n                </span>\n            </div>\n\n            <div [hidden]=\"!scatter.logged\" class=\"form-group row\">\n                <div class=\"input-group col-sm-12\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text form-control-sm\">transfer</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.amount\" (input)=\"data.amount = $event.target.value\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text form-control-sm\">to</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.to\" (input)=\"data.to = $event.target.value\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text form-control-sm\">saying</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.memo\" (input)=\"data.memo = $event.target.value\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"transfer()\">now</button>\n                    </div>\n                </div>\n\n                <div class=\"input-group col-sm-12  margin-top\" [hidden]=\"!last_trx || !scatter.network.explorer\">\n                    <a target=\"_blank\" href=\"{{scatter.network.explorer}}/transaction/{{last_trx}}\">{{last_trx}}</a>\n                </div>\n            \n            </div>\n\n            <!--\n            <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                    <button class=\"btn btn-secondary btn-sm\" (click)=\"gas()\">Dale Gas</button>\n                </div>\n        \n                <div class=\"text-left margin-top\">\n                    <pre>{{response|json}}</pre>\n                </div>                \n            </div>\n            -->\n\n        \n        </div>\n    </div>    \n</div>\n<br><br><br>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
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
    function AccountPage(app, local, scatter, route, tokenMath) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.tokenMath = tokenMath;
    }
    AccountPage.prototype.onNetworkChange = function (network) {
        var _this = this;
        console.log("AccountPage.onNetworkChange()");
        this.app.loading = true;
        this.scatter.queryAccountData(this.account.account_name).then(function (account) {
            if (account) {
                _this.account = account;
            }
            _this.app.loading = false;
        }).catch(function (err) {
            _this.app.loading = false;
        });
        this.data.amount = "0.0001 " + this.scatter.network.symbol;
    };
    AccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data = {
            to: "gqydoobuhege",
            amount: "0.0001 EOS",
            memo: "testing"
        };
        this.account = this.scatter.default.data;
        var name = this.route.snapshot.paramMap.get('name');
        // console.log("name", name);
        if (name) {
            this.account.account_name = name;
            if (this.scatter.account && this.scatter.account.name == name) {
                if (this.scatter.account.data) {
                    this.account = this.scatter.account.data;
                }
            }
            this.scatter.onNetworkChange.subscribe(this.onNetworkChange.bind(this));
            setTimeout(function () {
                _this.scatter.setNetwork(_this.scatter.network.slug, _this.scatter.network.index);
            }, 300);
        }
        else {
            this.scatter.waitReady.then(function () {
                if (_this.scatter.logged) {
                    _this.app.navigate("/" + _this.scatter.network.slug + "/account/" + _this.scatter.account.name);
                }
            });
        }
    };
    AccountPage.prototype.search = function (account_name) {
        var _this = this;
        console.log("AccountPage.search()", this.app.state, this.app.path);
        this.app.navigate("/" + this.scatter.network.slug + "/account/" + account_name);
        setTimeout(function () {
            _this.scatter.setNetwork(_this.scatter.network.slug, _this.scatter.network.index);
        }, 300);
    };
    AccountPage.prototype.login = function () {
        var _this = this;
        this.scatter.login().then(function () {
            if (_this.scatter.logged) {
                _this.app.navigate("/" + _this.scatter.network.slug + "/account/" + _this.scatter.account.name);
            }
        });
    };
    AccountPage.prototype.transfer = function () {
        var _this = this;
        // this.scatter.transfer(this.scatter.account.name, this.data.to, this.data.amount, this.data.memo);        
        this.app.loading = true;
        try {
            this.scatter.getContract("eosio.token").then(function (contract) {
                contract.transfer({
                    from: _this.scatter.account ? _this.scatter.account.name : _this.account.account_name,
                    memo: _this.data.memo,
                    quantity: _this.data.amount,
                    to: _this.data.to
                }, _this.scatter.authorization).then((function (response) {
                    console.log("response", response);
                    _this.last_trx = response.transaction_id;
                    _this.app.loading = false;
                })).catch(function (err) {
                    console.error(err);
                    _this.app.loading = false;
                });
            }).catch(function (err) {
                console.error(err);
                _this.app.loading = false;
            });
        }
        catch (e) {
            console.error("err", e);
            this.app.loading = false;
        }
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__["EosioTokenMathService"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ }),

/***/ "./src/app/pages/apps/apps.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/apps/apps.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"text-left margin-top-xxxl\">\n    <pre>{{account|json}}</pre>\n</div>\n-->\n\n\n<div class=\"container margin-top-xxl\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"input-group col-sm-12\">\n                    <input type=\"text\" class=\"form-control form-control-sm\">\n                </div>            \n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/apps/apps.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/apps/apps.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/apps/apps.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/apps/apps.page.ts ***!
  \*****************************************/
/*! exports provided: AppsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsPage", function() { return AppsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppsPage = /** @class */ (function () {
    function AppsPage(app, local, scatter, route, tokenMath) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.tokenMath = tokenMath;
    }
    AppsPage.prototype.ngOnInit = function () {
    };
    AppsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apps-page',
            template: __webpack_require__(/*! ./apps.page.html */ "./src/app/pages/apps/apps.page.html"),
            styles: [__webpack_require__(/*! ./apps.page.scss */ "./src/app/pages/apps/apps.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__["EosioTokenMathService"]])
    ], AppsPage);
    return AppsPage;
}());



/***/ }),

/***/ "./src/app/pages/bgbox/bgbox.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/bgbox/bgbox.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top\" [ngClass]=\"{'d-none': !app.stateStartsWith('bgbox')}\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <div class=\"pull-right\">\n                <span class=\"btn btn-sm btn-danger margin-left\" (click)=\"droptables()\">Drop Tables</span>\n            </div>                      \n            <div class=\"row\">\n                <div class=\"input-group col-sm-12\">\n                    <ul class=\"nav nav-pills\" id=\"pills-tab\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active cursor-pointer\" [routerLink]=\"'/' + scatter.network.slug + '/bgbox/register'\">Register</a>\n                        </li>\n                    </ul>\n                </div>              \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container margin-top\" [ngClass]=\"{'d-none': !app.stateStartsWith('bgbox')}\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"input-group col-sm-12\">\n                    <h2>DApps</h2>\n                </div>\n                <div class=\"input-group col-sm-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <td>Title</td>\n                                <td>owner</td>\n                                <td>contract</td>\n                                <td>namespace</td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let app of apps\">\n                                <td>{{app.title}}</td>\n                                <td>{{app.owner}}</td>\n                                <td>{{app.contract}}</td>\n                                <td>{{app.slugid.str}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container margin-top\" [ngClass]=\"{'d-none': !app.stateStartsWith('bgbox')}\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"input-group col-sm-12\">\n                    <h2>Profiles</h2>\n                </div>\n                <div class=\"input-group col-sm-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <td>Name</td>\n                                <td>owner</td>\n                                <td>namespace</td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let app of profiles\">\n                                <td>{{app.username}}</td>\n                                <td>{{app.owner}}</td>\n                                <td>{{app.slugid.str}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/bgbox/bgbox.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/bgbox/bgbox.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/bgbox/bgbox.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/bgbox/bgbox.page.ts ***!
  \*******************************************/
/*! exports provided: BGBoxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BGBoxPage", function() { return BGBoxPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BGBoxPage = /** @class */ (function () {
    function BGBoxPage(app, local, scatter, route, tokenMath, bgbox) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.tokenMath = tokenMath;
        this.bgbox = bgbox;
        this.apps = [];
        this.profiles = [];
        this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscriber"](this.onStateChange.bind(this));
    }
    BGBoxPage.prototype.onStateChange = function (state) {
        console.log("BGBoxPage.onStateChange(" + state + ")");
        if (state == "bgbox") {
            this.update();
        }
    };
    BGBoxPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    BGBoxPage.prototype.ngOnInit = function () {
        this.update();
        this.app.onStateChange.subscribe(this.subscriber);
    };
    BGBoxPage.prototype.update = function () {
        var _this = this;
        console.log("BGBoxPage.update()");
        this.loading = true;
        this.bgbox.getAuthors().then(function (result) {
            console.log("this.bgbox.getAuthors() authors: ", result.authors);
            console.log("this.bgbox.getAuthors() profiles: ", result.profiles);
            console.log("this.bgbox.getAuthors() apps: ", result.apps);
            _this.apps = result.apps;
            _this.profiles = result.profiles;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    BGBoxPage.prototype.droptables = function () {
        var _this = this;
        console.log("BGBoxPage.droptables()");
        this.app.loading = true;
        this.bgbox.droptables().then(function () {
            _this.app.loading = false;
            _this.update();
        }).catch(function () {
            _this.app.loading = false;
        });
        ;
    };
    BGBoxPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bgbox-page',
            template: __webpack_require__(/*! ./bgbox.page.html */ "./src/app/pages/bgbox/bgbox.page.html"),
            styles: [__webpack_require__(/*! ./bgbox.page.scss */ "./src/app/pages/bgbox/bgbox.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__["EosioTokenMathService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_6__["BGBoxService"]])
    ], BGBoxPage);
    return BGBoxPage;
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

module.exports = "\n    <div class=\"container text-center margin-top-xxxl\">\n        <p class=\"text-subtitle\">{{local.string.Disclaimer}}</p>\n        <p class=\"\">{{local.string.DisclaimerText}}</p>\n        <div class=\" margin-top-xxl\">\n            <div [hidden]=\"!scatter.logged\">\n                <h1>\n                    {{local.string.Hello}} {{scatter.username}} !!\n                </h1>\n                <span class=\"btn btn-primary\" (click)=\"logout()\">\n                    Logout\n                </span>\n            </div>\n\n            <span [hidden]=\"scatter.logged\" class=\"btn btn-primary\" (click)=\"login()\">\n                {{local.string.LoginWScatter}}\n            </span>\n        </div>\n\n\n    </div>\n    \n\n    "

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function HomePage(app, local, scatter, http) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.http = http;
        this.numblock = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        console.log("HomePage.this.scatter.network: ---> ", this.scatter.network);
    };
    HomePage.prototype.login = function () {
        this.scatter.login().then(function (identity) {
            console.log("identity", identity);
        });
    };
    HomePage.prototype.logout = function () {
        this.scatter.logout();
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
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

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"input-group col-sm-12\">\n                    <span class=\"btn btn-sm margin-right\" [ngClass]=\"{'btn-secondary': !data.isapp, 'btn-primary': data.isapp}\" (click)=\"setProfile()\">New Profile</span>\n                    <span class=\"btn btn-sm margin-right\" [ngClass]=\"{'btn-secondary': data.isapp, 'btn-primary': !data.isapp}\" (click)=\"setApp()\">New App</span>\n                    <span class=\"btn btn-sm margin-right btn-primary\" (click)=\"prueba()\">Prueba</span>\n                    <span class=\"btn btn-sm margin-right btn-primary\" (click)=\"consultar_tablas()\">Tablas Prueba</span>\n                </div>              \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container margin-top-xxl\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-header\">\n            <span class=\"text-lg color-green\">Register New {{data.isapp ? \"App\" : \"Profile\"}}</span>\n        </div>        \n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"input-group col-sm-2\">\n                    <span class=\"label\">owner:</span>\n                </div>\n                <div class=\"input-group col-sm-10\">\n                    <input type=\"text disabled\" class=\"form-control form-control-sm\" [value]=\"data.owner\">\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"input-group col-sm-2\">\n                    <span class=\"label\">Title:</span>\n                </div>\n                <div class=\"input-group col-sm-10\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.title || ''\" (input)=\"data.title = $event.target.value\">\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"input-group col-sm-2\">\n                    <span class=\"label\">namespace:</span>\n                </div>\n                <div class=\"input-group col-sm-10\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.nick || ''\" (input)=\"data.nick = $event.target.value\">\n                </div>\n            </div>\n            <div class=\"row margin-top\" [ngClass]=\"{'d-none': !data.isapp}\">\n                <div class=\"input-group col-sm-2\">\n                    <span class=\"label\">contract account:</span>\n                </div>\n                <div class=\"input-group col-sm-10\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.contract || ''\" (input)=\"data.contract = $event.target.value\">\n                </div>\n            </div>\n            <div class=\"row margin-top\" [ngClass]=\"{'d-none': !data.isapp}\">\n                <div class=\"input-group col-sm-2\">\n                    <span class=\"label\">inventory space:</span>\n                </div>\n                <div class=\"input-group col-sm-10\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [value]=\"data.inventory || ''\" (input)=\"data.inventory = $event.target.value\">\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"col-sm-12\">\n                    <div class=\"pull-right\">\n                        <span class=\"btn btn-primary\" (click)=\"register()\">Register</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row margin-top\">\n                <div class=\"input-group col-sm-12\">\n                    <pre>{{data|json}}</pre>\n                </div>            \n            </div>            \n        </div>\n    </div>\n</div>\n\n\n\n<!--div class=\"container margin-top-xxl\">\n    <div class=\"card text-white bg-dark\">\n        <div class=\"card-body\">\n            <div class=\"row margin-top\">\n                <div class=\"input-group col-sm-12\">\n                    <pre>{{scatter.account|json}}</pre>\n                </div>            \n            </div>            \n        </div>\n    </div>\n</div-->\n\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
/* harmony import */ var src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/bgbox.service */ "./src/app/services/bgbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(app, local, scatter, route, tokenMath, bgbox) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
        this.route = route;
        this.tokenMath = tokenMath;
        this.bgbox = bgbox;
        this.data = {};
        this.data.owner = "unknown";
        this.data.nick = "unknown";
        this.data.title = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.scatter.waitReady.then(function () {
            var owner = _this.scatter.account ? _this.scatter.account.name : "unknown";
            _this.data = {
                owner: owner,
                isapp: false,
                nick: owner,
                title: _this.scatter.username,
                contract: _this.bgbox.contract,
                inventory: -1,
            };
            // ---------------------------------------
            var type = _this.route.snapshot.paramMap.get('type');
            _this.data = {
                owner: owner,
                isapp: type == "app",
                nick: "cards-and-tokens",
                title: "Cards & Tokens",
                contract: "cardsntokens",
                inventory: 8,
            };
            // ---------------------------------------
        });
    };
    RegisterPage.prototype.setProfile = function () {
        this.data.isapp = false;
        this.data.contract = this.bgbox.contract;
        this.data.inventory = -1;
    };
    RegisterPage.prototype.setApp = function () {
        this.data.isapp = true;
        this.data.contract = (this.data.contract == this.bgbox.contract) ? "" : this.data.contract;
        this.data.inventory = this.data.inventory < 0 ? 8 : this.data.inventory;
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.data.isapp) {
                _this.bgbox.registerApp(_this.data.owner, _this.data.contract, _this.data.nick, _this.data.title, _this.data.inventory).then(function (result) {
                    _this.app.loading = false;
                    if (result.transaction_id) {
                        console.log("OK ??", [result]);
                        resolve(result.transaction_id);
                    }
                    else {
                        console.log("NOT OK ??", [result]);
                        reject(result);
                    }
                }).catch(function (err) {
                    console.log("NOT OK", [err]);
                    reject(err);
                    _this.app.loading = false;
                });
            }
            else {
                _this.bgbox.registerProfile(_this.data.owner, _this.data.nick, _this.data.title).then(function (result) {
                    _this.app.loading = false;
                    if (result.transaction_id) {
                        console.log("OK ??", [result]);
                        resolve(result.transaction_id);
                    }
                    else {
                        console.log("NOT OK ??", [result]);
                        reject(result);
                    }
                }).catch(function (err) {
                    console.log("NOT OK", [err]);
                    reject(err);
                    _this.app.loading = false;
                });
            }
        });
    };
    RegisterPage.prototype.consultar_addressbook = function () {
        var _this = this;
        var contract = "addressbook";
        var scope = "addressbook";
        var table = "people";
        var table_key = "0";
        var lower_bound = "0";
        var upper_bound = "-1";
        var limit = 10;
        var key_type = "i64";
        var index_position = "1";
        return new Promise(function (resolve) {
            _this.scatter.getTableRows(contract, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position).then(function (result) {
                console.log("-----------", contract, "-----------");
                for (var j = 0, row = null; j < result.rows.length; j++) {
                    console.log(result.rows[j]);
                }
                ;
                resolve();
            });
        });
    };
    RegisterPage.prototype.consultar_abcounter = function () {
        var _this = this;
        var contract = "abcounter";
        var scope = "abcounter";
        var table = "counts";
        var table_key = "0";
        var lower_bound = "0";
        var upper_bound = "-1";
        var limit = 10;
        var key_type = "i64";
        var index_position = "1";
        return new Promise(function (resolve) {
            _this.scatter.getTableRows(contract, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position).then(function (result) {
                console.log("-----------", contract, "-----------");
                for (var j = 0, row = null; j < result.rows.length; j++) {
                    console.log(result.rows[j]);
                }
                ;
                resolve();
            });
        });
    };
    RegisterPage.prototype.consultar_tablas = function () {
        this.consultar_addressbook().then(this.consultar_abcounter.bind(this));
    };
    RegisterPage.prototype.prueba = function () {
        var _this = this;
        console.log("prueba()");
        return new Promise(function (resolve, reject) {
            try {
                _this.scatter.getContract("addressbook").then(function (smart_contract) {
                    try {
                        smart_contract.upsert({
                            user: _this.scatter.account.name,
                            first_name: "first_name",
                            last_name: "last_name",
                            street: "street",
                            city: "city",
                            state: "state",
                            age: 1
                        }, _this.scatter.authorization).then((function (response) {
                            console.log("response", response);
                            resolve(response);
                        })).catch(function (err) {
                            console.error(err);
                            reject(err);
                        });
                    }
                    catch (err) {
                        console.error(err);
                        reject(err);
                    }
                }).catch(function (err) {
                    console.error(err);
                    reject(err);
                });
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-page',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__["EosioTokenMathService"],
            src_app_services_bgbox_service__WEBPACK_IMPORTED_MODULE_6__["BGBoxService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/pages/root/root.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/root/root.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar drop-shadow navbar-expand-lg navbar-dark bg-primary\" (click)=\"collapseMenu()\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"http://cardsandtokens.com\" target=\"_blank\">\n            <img src=\"/assets/img/cards-and-tokens.png\" alt=\"\" class=\"cnt-logo\">\n        </a>        \n        \n        <div class=\"flex-grow-1\">\n            <div class=\"fb-like-container\">\n                <!--div class=\"fb-like fb_iframe_widget\" data-href=\"https://www.facebook.com/cardsandtokens\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"false\" fb-xfbml-state=\"rendered\" fb-iframe-plugin-query=\"action=like&amp;app_id=294648343906769&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=es_LA&amp;sdk=joey&amp;share=true&amp;show_faces=false\"><span style=\"vertical-align: bottom; width: 100px; height: 20px;\"><iframe name=\"f7e211683f293c\" width=\"1000px\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\" allow=\"encrypted-media\" title=\"fb:like Facebook Social Plugin\" src=\"https://www.facebook.com/v2.5/plugins/like.php?action=like&amp;app_id=294648343906769&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Dfdbcae6fad0228%26domain%3Dpresale.cardsandtokens.com%26origin%3Dhttp%253A%252F%252Fpresale.cardsandtokens.com%252Ff2aab638e0f2e3%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcardsandtokens&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false\" style=\"border: none; visibility: visible; width: 100px; height: 20px;\" class=\"\"></iframe></span></div-->\n            </div>\n        </div>\n\n        <button class=\"navbar-toggler margin-xs\" id=\"toggle-btn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>        \n\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav ml-auto\">\n                \n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('home')}\">\n                    <a class=\"nav-link\" routerLink=\"{{'/' + scatter.network.slug + '/home'}}\" >{{local.string.Home}}</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('video')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/' + scatter.network.slug + '/video'\" >{{local.string.Video}}</a>\n                </li>\n                <!--li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('faq')}\">\n                    <a class=\"nav-link\" routerLink=\"/faq\" >{{local.string.FAQ}}</a>\n                </li-->\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('bgbox')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/' + scatter.network.slug + '/bgbox'\" >BG-Box</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('cnt')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/cnt/profile/' + cnt.current.slugid.str\" >C&T</a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('exchange')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/exchange/tokens'\" >{{local.string.Exchange}}</a>\n                </li>\n\n                <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('account')}\">\n                    <a class=\"nav-link\" [routerLink]=\"'/' + scatter.network.slug + '/account'\" >{{local.string.Account}}</a>\n                </li>\n                <li class=\"nav-item dropdown\" dropdown>\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"network\">{{scatter.network.name}} <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"network\">\n                        <span *ngFor=\"let slug of scatter.networks\"\n                            class=\"cursor-pointer dropdown-item\" (click)=\"setNetwork(slug)\">{{scatter.getNetwork(slug).name}}</span>\n                        \n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" dropdown>\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"language\">{{local.string.Language}} <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"language\">\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('en_US')\">English</span>\n                        <span class=\"cursor-pointer dropdown-item\" (click)=\"local.setLocal('es_ES')\">Español</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cnt.service */ "./src/app/services/cnt.service.ts");
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
    function RootPage(app, local, elRef, scatter, cnt, route) {
        this.app = app;
        this.local = local;
        this.elRef = elRef;
        this.scatter = scatter;
        this.cnt = cnt;
        this.route = route;
        console.error("NOT AUTHORIZED !! redirect -->  https://vapaee.io");
        window.location.href = "https://vapaee.io";
    }
    RootPage.prototype.ngOnInit = function () {
        var _this = this;
        var network = this.route.snapshot.paramMap.get('network');
        console.log("RootPage.network: ---> ", network);
        if (network) {
            if (this.scatter.network.slug != network || !this.scatter.connected) {
                this.scatter.setNetwork(network).then(function () {
                    if (_this.scatter.network.slug != network) {
                        _this.app.navigate("/eos/home");
                    }
                });
                this.scatter.connectApp("Cards & Tokens").catch(function (err) { return console.error(err); });
            }
        }
        else {
            this.scatter.setNetwork("eos");
            this.scatter.connectApp("Cards & Tokens").catch(function (err) { return console.error(err); });
        }
    };
    RootPage.prototype.collapseMenu = function () {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    };
    RootPage.prototype.setNetwork = function (slug, index) {
        if (index === void 0) { index = 0; }
        // this.app.getRouteData()
        this.app.navigatePrefix(slug);
        this.scatter.setNetwork(slug, index);
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
            src_app_services_cnt_service__WEBPACK_IMPORTED_MODULE_5__["CntService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RootPage);
    return RootPage;
}());



/***/ }),

/***/ "./src/app/pages/video/video.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/video/video.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container text-center margin-top-xxxl\">\n        <div class=\"margin-top-xl text-center embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BtSm8smioPg\" allowfullscreen></iframe>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/video/video.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/video/video.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/video/video.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/video/video.page.ts ***!
  \*******************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/app.service */ "./src/app/services/common/app.service.ts");
/* harmony import */ var src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.services */ "./src/app/services/common/common.services.ts");
/* harmony import */ var src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scatter.service */ "./src/app/services/scatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoPage = /** @class */ (function () {
    function VideoPage(app, local, scatter) {
        this.app = app;
        this.local = local;
        this.scatter = scatter;
    }
    VideoPage.prototype.ngOnInit = function () {
        console.log("VideoPage.this.scatter.network: ---> ", this.scatter.network);
    };
    VideoPage.prototype.login = function () {
        this.scatter.login().then(function (identity) {
            console.log("identity", identity);
        });
    };
    VideoPage.prototype.logout = function () {
        this.scatter.logout();
    };
    VideoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-page',
            template: __webpack_require__(/*! ./video.page.html */ "./src/app/pages/video/video.page.html"),
            styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/pages/video/video.page.scss"), __webpack_require__(/*! ../common.page.scss */ "./src/app/pages/common.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_common_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            src_app_services_common_common_services__WEBPACK_IMPORTED_MODULE_2__["LocalStringsService"],
            src_app_services_scatter_service__WEBPACK_IMPORTED_MODULE_3__["ScatterService"]])
    ], VideoPage);
    return VideoPage;
}());



/***/ }),

/***/ "./src/app/services/bgbox.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/bgbox.service.ts ***!
  \*******************************************/
/*! exports provided: BGBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BGBoxService", function() { return BGBoxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _scatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BGBoxService = /** @class */ (function () {
    function BGBoxService(scatter) {
        var _this = this;
        this.scatter = scatter;
        this.boardgamebox = "boardgamebox";
        this.vapaeetokens = "vapaeetokens";
        this.onEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.waitReady = new Promise(function (resolve) {
            _this.setReady = resolve;
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
        this.contract = this.boardgamebox;
        this.authors = {};
        this.utils = new _utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"](this.contract, this.scatter);
    }
    BGBoxService.prototype.decodeSlug = function (nick) {
        return this.utils.decodeSlug(nick);
    };
    // auxiliar functions -------------------------------------------
    // --------------------------------------------------------------
    // API
    BGBoxService.prototype.getAuthors = function () {
        var _this = this;
        console.log("BGBoxService.getAuthors()");
        return Promise.all([
            this.utils.getTable("authors"),
            this.utils.getTable("profiles"),
            this.utils.getTable("apps"),
        ]).then(function (result) {
            var data = {
                map: {},
                authors: result[0].rows,
                profiles: result[1].rows,
                apps: result[2].rows,
            };
            for (var i in data.authors) {
                data.authors[i].slugid = _this.decodeSlug(data.authors[i].slugid);
                var key = "id-" + data.authors[i].id;
                data.map[key] = Object.assign({}, data.authors[i]);
                data.authors[i] = data.map[key];
            }
            for (var i in data.profiles) {
                Object.assign(data.map["id-" + data.profiles[i].id], data.profiles[i]);
                data.profiles[i] = data.map["id-" + data.profiles[i].id];
            }
            for (var i in data.apps) {
                Object.assign(data.map["id-" + data.apps[i].id], data.apps[i]);
                data.apps[i] = data.map["id-" + data.apps[i].id];
            }
            for (var i in data.authors) {
                var key = "id-" + data.authors[i].id;
                _this.authors[data.map[key].slugid.str] = data.map[key];
            }
            console.log("getAuthors() ----------> ", result, data);
            return data;
        });
    };
    BGBoxService.prototype.getAuthorsFor = function (account) {
        var _this = this;
        console.log("BGBoxService.getAuthorsFor()", account);
        return new Promise(function (resolve, reject) {
            // https://eosio.stackexchange.com/questions/813/eosjs-gettablerows-lower-and-upper-bound-on-account-name
            var encodedName = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(eosjs__WEBPACK_IMPORTED_MODULE_4___default.a.modules.format.encodeName(account, false));
            var params = {
                lower_bound: encodedName.toString(),
                upper_bound: encodedName.plus(1).toString(),
                limit: 25,
                key_type: "i64",
                index_position: "2"
            };
            // console.log("---------------------------------------------");
            // console.log("BGBoxService.getAuthorsFor() params ", params);
            _this.utils.getTable("authors", params).then(function (result) {
                // console.log("BGBoxService.getAuthorsFor() --> ", result.rows);
                var data = { map: {}, authors: result.rows, profiles: [] };
                var promises = [];
                for (var i in result.rows) {
                    var author = result.rows[i];
                    author.slugid = _this.decodeSlug(author.slugid);
                    data.map["id-" + author.id] = author;
                    var id_p1 = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(author.id).plus(1);
                    var i_params = { lower_bound: author.id, upper_bound: author.id };
                    var promise = _this.utils.getTable("profiles", i_params).then(function (i_result) {
                        // console.log("BGBoxService.getAuthorsFor() --> ", i_result.rows);
                        if (i_result.rows.length == 1) {
                            var profile = i_result.rows[0];
                            var key = "id-" + profile.id;
                            data.map[key] = Object.assign(data.map[key], profile);
                            data.profiles.push(data.map[key]);
                            _this.authors[data.map[key].slugid.str] = data.map[key];
                        }
                    });
                    promises.push(promise);
                }
                Promise.all(promises).then(function () {
                    // console.log("BGBoxService.getAuthorsFor() [", account, "] --> ",data);
                    // console.log("data: ", data);
                    // console.log("---------------------------------------------");
                    resolve(data);
                }).catch(function (err) {
                    console.error("ERROR: ", err);
                    reject(err);
                });
            });
        });
    };
    BGBoxService.prototype.getAuthorBySlug = function (slugid) {
        var _this = this;
        console.log("BGBoxService.getAuthorBySlug()", slugid);
        if (this.authors[slugid])
            return Promise.resolve(this.authors[slugid]);
        return new Promise(function (resolve, reject) {
            var author = null;
            var slug = _this.utils.encodeSlug(slugid);
            console.log("---> ", [slug]);
            var big = _this.utils.slugTo128bits(slug);
            console.log("---> ", [big.toString()]);
            var params = {
                lower_bound: big,
                upper_bound: big,
                limit: 1,
                key_type: "i128",
                index_position: "3"
            };
            _this.utils.getTable("authors", params).then(function (result) {
                // console.log("BGBoxService.getAuthorsFor() --> ", result.rows);
                var data = { map: {}, authors: result.rows, profiles: [] };
                var promises = [];
                for (var i in result.rows) {
                    var author = result.rows[i];
                    author.slugid = _this.decodeSlug(author.slugid);
                    data.map["id-" + author.id] = author;
                    var id_p1 = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(author.id).plus(1);
                    var i_params = { lower_bound: author.id, upper_bound: author.id };
                    var promise = _this.utils.getTable("profiles", i_params).then(function (i_result) {
                        // console.log("BGBoxService.getAuthorsFor() --> ", i_result.rows);
                        if (i_result.rows.length == 1) {
                            var profile = i_result.rows[0];
                            data.map["id-" + profile.id] = Object.assign(data.map["id-" + profile.id], profile);
                            data.profiles.push(data.map["id-" + profile.id]);
                        }
                    });
                    promises.push(promise);
                }
                Promise.all(promises).then(function () {
                    // console.log("data: ", data);
                    console.log("---------------------------------------------", data.authors[0]);
                    resolve(data.authors[0]);
                }).catch(function (err) {
                    console.error("ERROR: ", err);
                    reject(err);
                });
            });
        });
    };
    BGBoxService.prototype.registerProfile = function (owner, slugid, name) {
        console.log("BGBoxService.registerProfile()", owner, slugid, name);
        return this.utils.excecute("newprofile", { owner: owner, slugid: slugid, name: name });
    };
    BGBoxService.prototype.registerApp = function (owner, contract, slugid, title, inventory) {
        console.log("BGBoxService.registerApp()", owner, contract, slugid, title, inventory);
        return this.utils.excecute("newapp", {
            owner: owner,
            contract: contract,
            slugid: slugid,
            title: title,
            inventory: inventory
        });
    };
    BGBoxService.prototype.signUpProfileForApp = function (owner, profileid, appid, rampayer) {
        console.log("BGBoxService.signUpProfileForApp()", owner, profileid, appid, rampayer);
        return this.utils.excecute("profile4app", { owner: owner, profile: profileid, app: appid, ram_payer: rampayer });
    };
    BGBoxService.prototype.getProfileContainers = function (profileid, appid) {
        console.log("BGBoxService.getProfileContainers() profileid: ", profileid, "appid:", appid);
        return Promise.all([
            // all containers for this profile
            this.utils.getTable("containers", {
                scope: profileid,
                limit: 50
            }),
            // all container assets that were registered by the app (and not by another profile/user)
            this.utils.getTable("contasset", {
                lower_bound: appid,
                upper_bound: appid,
                key_type: "i64",
                index_position: "3" // by publisher
            })
        ]).then(function (result) {
            var data = {
                containers: result[0].rows,
                app_containers: result[1].rows
            };
            var map = {};
            for (var i in data.app_containers) {
                map["id-" + data.app_containers[i].id] = data.app_containers[i];
            }
            for (var i in data.containers) {
                var asset = map["id-" + data.containers[i].asset];
                if (asset) {
                    data.containers[i].asset_ref = asset;
                }
            }
            // console.log("getProfileContainers() ----------> ", result, data);
            return data;
        });
    };
    // -------------------------
    BGBoxService.prototype.droptables = function () {
        console.log("BGBoxService.droptables()");
        return this.utils.excecute("droptables", {});
    };
    BGBoxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_scatter_service__WEBPACK_IMPORTED_MODULE_2__["ScatterService"]])
    ], BGBoxService);
    return BGBoxService;
}());



/***/ }),

/***/ "./src/app/services/cnt.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/cnt.service.ts ***!
  \*****************************************/
/*! exports provided: CntService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CntService", function() { return CntService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _scatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatter.service */ "./src/app/services/scatter.service.ts");
/* harmony import */ var _bgbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bgbox.service */ "./src/app/services/bgbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CntService = /** @class */ (function () {
    function CntService(scatter, bgbox) {
        var _this = this;
        this.scatter = scatter;
        this.bgbox = bgbox;
        this.onLoggedProfileChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onCurrentProfileChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cardsntokens = "cardsntokens";
        this.waitReady = new Promise(function (resolve) {
            _this.setReady = resolve;
        });
        this.logged = null;
        this.current = null;
        this.contract = this.cardsntokens;
        this.scatter.onLogggedStateChange.subscribe(this.updateLogState.bind(this));
        this.resetCurrentProfile();
        this.updateLogState();
        // get the author id for this Dapp --------------------------------
        var encodedName = this.bgbox.utils.encodeName(this.cardsntokens);
        var params = {
            lower_bound: encodedName.toString(),
            upper_bound: encodedName.toString(),
            limit: 1,
            key_type: "i64",
            index_position: "2"
        };
        this.bgbox.utils.getTable("apps", params).then(function (result) {
            if (result.rows.length > 0) {
                _this.cntAuthorId = result.rows[0].id;
            }
        });
    }
    // --
    CntService.prototype.resetCurrentProfile = function () {
        this.profiles = [];
        this.current = { slugid: { str: "guest" }, account: this.contract };
        this.onCurrentProfileChange.next(this.profile);
    };
    CntService.prototype.login = function () {
        var _this = this;
        this.logout();
        this.scatter.login().then(function () {
            _this.updateLogState();
        });
    };
    CntService.prototype.logout = function () {
        this.resetCurrentProfile();
        this.logged = null;
        this.onLoggedProfileChange.next(this.logged);
    };
    CntService.prototype.fetchProfile = function (profile) {
        return this.bgbox.getAuthorBySlug(profile);
    };
    CntService.prototype.setCurrentProfile = function (profile) {
        this.current = profile;
        this.onCurrentProfileChange.next(this.current);
    };
    CntService.prototype.selectProfile = function (profile) {
        console.log("CntService.selectProfile(", [profile], ")");
        if (this.selected.slugid.str != profile.slugid.str) {
            for (var i in this.profiles) {
                if (this.profiles[i].slugid.str == profile.slugid.str) {
                    this.selected = profile;
                }
            }
        }
        this.updateLogState();
    };
    /*
    selectProfile(profile:any) {
        console.log("-------- CntService.selectProfile(",[profile],") ---------");
        if (typeof profile  == "string") {
            for (var i in this.profiles) {
                if (this.profiles[i].slugid.str == profile) {
                    if (this.profile != this.profiles[i]) {
                        this.profile = this.profiles[i];
                        this.onProfileChange.next(this.profile);
                    }
                }
            }
        } else {
            if (this.profile != profile) {
                this.profile = profile;
                this.profiles.push(profile);
                this.onProfileChange.next(this.profile);
            }
        }
        this.updateLogState();
    }
    */
    CntService.prototype.registerProfile = function () {
        console.log("CntService.registerProfile()");
        return this.bgbox.signUpProfileForApp(this.scatter.account.name, this.selected.id, this.cntAuthorId, this.bgbox.contract);
    };
    CntService.prototype.updateRegisteredState = function () {
        var _this = this;
        console.log("CntService.updateRegisteredState()");
        return this.bgbox.getProfileContainers(this.selected.id, this.cntAuthorId).then(function (data) {
            var registered = false;
            for (var i in data.containers) {
                if (data.containers[i].asset_ref && data.containers[i].asset_ref.publisher == _this.cntAuthorId) {
                    registered = true;
                    break;
                }
            }
            if (registered) {
                _this.logged = _this.selected;
                _this.onLoggedProfileChange.next(_this.logged);
                //this.onProfileChange.next(this.profile);
            }
            return _this.logged;
        });
    };
    CntService.prototype.updateLogState = function () {
        var _this = this;
        console.log("CntService.updateLogState()", [this]);
        this.loginState = "no-scatter";
        this.scatter.waitConnected.then(function () {
            _this.loginState = "no-logged";
            console.log("this.scatter", [_this.scatter]);
            if (_this.scatter.logged) {
                _this.loginState = "no-profiles";
                if (_this.profiles.length == 0) {
                    _this.bgbox.getAuthorsFor(_this.scatter.account.name).then(function (data) {
                        if (data.profiles.length > 0) {
                            _this.loginState = "no-selected";
                            _this.profiles = [];
                            for (var i in data.authors) {
                                _this.profiles.push(data.authors[i]);
                            }
                        }
                        if (_this.profiles.length == 1 && _this.profile != _this.profiles[0]) {
                            _this.selected = _this.profiles[0];
                            _this.loginState = "no-registered";
                        }
                        if (_this.loginState == "no-registered") {
                            _this.updateRegisteredState().then(function () {
                                if (_this.logged)
                                    _this.loginState = "profile-ok";
                            });
                        }
                    });
                }
                else {
                    if (!_this.selected) {
                        _this.loginState = "no-selected";
                    }
                    else {
                        _this.loginState = "no-registered";
                        _this.updateRegisteredState().then(function () {
                            if (_this.logged)
                                _this.loginState = "profile-ok";
                        });
                    }
                }
            }
        });
    };
    CntService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_scatter_service__WEBPACK_IMPORTED_MODULE_2__["ScatterService"],
            _bgbox_service__WEBPACK_IMPORTED_MODULE_3__["BGBoxService"]])
    ], CntService);
    return CntService;
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
        console.error("onWindowsResize()");
        this.device.small = false;
        this.device.tiny = false;
        this.device.height = window.innerHeight;
        this.device.width = window.innerWidth;
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (w / h > 1) {
            this.device.portrait = false;
            this.device.wide = true;
        }
        else {
            this.device.portrait = true;
            this.device.wide = false;
        }
        if (this.device.portrait && h < 700) {
            this.device.small = true;
        }
        if (this.device.wide && w < 800) {
            this.device.small = true;
        }
        if (w < 650 || h < 700) {
            this.device.small = true;
        }
        if (w < 560 || h < 650) {
            this.device.tiny = true;
        }
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStringsService = /** @class */ (function () {
    function LocalStringsService(http) {
        this.http = http;
        this.string = {};
        this.locals = {};
        var userLang = navigator.language || navigator.userLanguage;
        switch (userLang.substr(0, 2)) {
            case "es":
                this.localKey = "es_ES";
                break;
            default:
                this.localKey = "en_US";
        }
        this.waitReady = this.fetchLocals(this.localKey);
    }
    LocalStringsService.prototype.fetchLocals = function (localKey) {
        var _this = this;
        return this.http.get("assets/locals/" + localKey + ".json").toPromise().then(function (response) {
            _this.string = response;
            _this.locals[_this.localKey] = _this.string;
        });
    };
    LocalStringsService.prototype.setLocal = function (localKey) {
        this.localKey = localKey;
        return this.fetchLocals(this.localKey);
    };
    LocalStringsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scatterjs-plugin-eosjs */ "./node_modules/scatterjs-plugin-eosjs/dist/index.js");
/* harmony import */ var scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eosio.token-math.service */ "./src/app/services/eosio.token-math.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScatterService = /** @class */ (function () {
    function ScatterService(http, tokenMath) {
        var _this = this;
        this.http = http;
        this.tokenMath = tokenMath;
        this.onNetworkChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onLogggedStateChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
            this.lib = this.ScatterJS.scatter;
            this.ScatterJS.plugins(new scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_1___default.a());
            window.ScatterJS = null;
        }
        console.log("EOSJS()", [this.network.eosconf]);
        this.eos = this.lib.eos(this.network.eosconf, eosjs__WEBPACK_IMPORTED_MODULE_2___default.a, { expireInSeconds: 60 });
        this.setEosjs("eosjs");
    };
    // connect_count: number = 0;
    ScatterService.prototype.connectApp = function (appTitle) {
        var _this = this;
        if (appTitle === void 0) { appTitle = ""; }
        // this.connect_count++;
        // var resolve_num = this.connect_count;    
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
                _this.lib.connect(_this.appTitle, connectionOptions).then(function (connected) {
                    // si está logueado this.lib.identity se carga sólo y ya está disponible
                    console.log("this.lib.connect()", connected);
                    _this._connected = connected;
                    if (!connected) {
                        _this.error = "ERROR: can not connect to Scatter. Is it up and running?";
                        console.error(_this.error);
                        reject(_this.error);
                        return false;
                    }
                    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
                    console.log("ScatterService.setConnected()");
                    _this.setConnected("connected");
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
        this.account = this.lib.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
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
                _this.eos.getAccount({ account_name: name }).then(function (response) {
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
                        total: "20.0000 " + _this.symbol,
                        net_weight: "10.0000 " + _this.symbol,
                        cpu_weight: "10.0000 " + _this.symbol
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
    ScatterService.prototype.getContract = function (account_name) {
        var _this = this;
        console.log("ScatterService.getContract(" + account_name + ")");
        return new Promise(function (resolve, reject) {
            _this.login().then(function (a) {
                console.log("this.login().then((a) => { -->", a);
                _this.waitReady.then(function () {
                    _this.eos.contract(account_name).then(function (contract) {
                        console.log("-- contract " + account_name + " --");
                        for (var i in contract) {
                            if (typeof contract[i] == "function")
                                console.log("contract." + i + "()", [contract[i]]);
                        }
                        resolve(contract);
                    }).catch(function (error) {
                        console.error(error);
                    });
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    ScatterService.prototype.transfer = function (from, to, amount, memo) {
        var _this = this;
        console.log("ScatterService.transfer()", from, to, amount, memo);
        return new Promise(function (resolve, reject) {
            _this.waitEosjs.then(function () {
                console.log("Scatter.transfer():", from, to, amount, memo, _this.authorization);
                _this.eos.transfer(from, to, amount, memo, _this.authorization).then(function (trx) {
                    // That's it!
                    console.log("Transaction ID: " + trx.transaction_id, trx);
                    // en Notas está el json que describe el objeto trx
                    resolve(trx);
                }).catch(function (error) {
                    console.error(error);
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    ScatterService.prototype.login = function () {
        var _this = this;
        console.log("ScatterService.login()");
        return new Promise(function (resolve, reject) {
            if (_this.lib.identity) {
                _this.setIdentity(_this.lib.identity);
                resolve(_this.lib.identity);
            }
            else {
                _this.connectApp().then(function () {
                    _this.lib.getIdentity({ "accounts": [_this.network.eosconf] })
                        .then(function (identity) {
                        _this.setIdentity(identity);
                        _this.setLogged();
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
        return new Promise(function (resolve, reject) {
            _this.connectApp().then(function () {
                _this.lib.forgotten = true;
                _this.lib.forgetIdentity()
                    .then(function (err) {
                    console.log("disconnect", err);
                    _this.resetIdentity();
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
                _this.eos.getTableRows(true, contract, scope, table, tkey, lowerb, upperb, limit, ktype, ipos).then(function (_data) {
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
    ScatterService.prototype.testScatterOnLocalNetwork = function () {
        var _this = this;
        console.log("ScatterService.testScatterOnLocalNetwork()");
        if (window.ScatterJS) {
            this.ScatterJS = window.ScatterJS;
            this.lib = this.ScatterJS.scatter;
            this.ScatterJS.plugins(new scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_1___default.a());
            window.ScatterJS = null;
        }
        var network = {
            blockchain: "eos",
            chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
            host: "127.0.0.1",
            port: 8888,
            protocol: "http",
        };
        this.eos = this.ScatterJS.scatter.eos(network, eosjs__WEBPACK_IMPORTED_MODULE_2___default.a, { expireInSeconds: 60 });
        this.ScatterJS.scatter.connect("Cards & Tokens", { initTimeout: 3000 }).then(function (connected) {
            if (!connected)
                return console.error(_this.error);
            return _this.ScatterJS.scatter.getIdentity({ "accounts": [network] }).then(function (identity) {
                var account = identity.accounts[0];
                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                console.log("Scatter.transfer() authority:", transactionOptions);
                _this.eos.transfer(account.name, "bob", "0.0000 SYS", "memo", transactionOptions).then(function (trx) {
                    // That's it!
                    console.log("Transaction ID: " + trx.transaction_id, trx);
                    // en Notas está el json que describe el objeto trx
                }).catch(function (error) {
                    console.error(error);
                });
            }).catch(function (err) { console.error(err); });
        });
    };
    ScatterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _eosio_token_math_service__WEBPACK_IMPORTED_MODULE_5__["EosioTokenMathService"]])
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
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_1__);


var Utils = /** @class */ (function () {
    function Utils(contract, scatter) {
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
    Utils.prototype.encodeName = function (name) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(eosjs__WEBPACK_IMPORTED_MODULE_1___default.a.modules.format.encodeName(name, false));
    };
    // smart contract ---------------------
    Utils.prototype.excecute = function (action, params) {
        var _this = this;
        console.log("Utils.excecute()", action, [params]);
        return new Promise(function (resolve, reject) {
            try {
                _this.scatter.getContract(_this.contract).then(function (contract) {
                    try {
                        contract[action](params, _this.scatter.authorization).then((function (response) {
                            console.log("Utils.excecute() ---> ", [response]);
                            resolve(response);
                        })).catch(function (err) { reject(err); });
                    }
                    catch (err) {
                        reject(err);
                    }
                }).catch(function (err) { reject(err); });
            }
            catch (err) {
                reject(err);
            }
        }); // .catch(err => console.error(err) );
    };
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
    function VapaeeService(scatter) {
        var _this = this;
        this.scatter = scatter;
        this.onLoggedAccountChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onCurrentAccountChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onHistoryChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSummaryChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.vapaeetokens = "vapaeetokens";
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
        this.current = this.default;
        this.contract = this.vapaeetokens;
        this.utils = new _utils_service__WEBPACK_IMPORTED_MODULE_3__["Utils"](this.contract, this.scatter);
        this.feed = new _feedback_service__WEBPACK_IMPORTED_MODULE_5__["Feedback"]();
        this.scatter.onLogggedStateChange.subscribe(this.onLoggedChange.bind(this));
        this.updateLogState();
        this.fetchTokens().then(function (data) {
            _this.tokens = data.tokens;
            _this.tokens.sort(function (a, b) {
                if (a.appname < b.appname)
                    return -1;
                if (a.appname > b.appname)
                    return 1;
                return 0;
            });
            _this.zero_telos = new Asset("0.0000 TLOS", _this);
            _this.setReady();
            _this.fetchTokensStats();
            _this.getAllTablesSumaries();
        });
    }
    Object.defineProperty(VapaeeService.prototype, "default", {
        // getters ------------
        get: function () {
            return this.scatter.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeService.prototype, "logged", {
        get: function () {
            if (this.scatter.logged && !this.scatter.account) {
                console.error("WARNING!!!");
                console.log(this.scatter);
                console.log(this.scatter.username);
                console.error("*******************");
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
            return this.scatter.logged ? this.scatter.account : {};
        },
        enumerable: true,
        configurable: true
    });
    // --
    VapaeeService.prototype.login = function () {
        var _this = this;
        this.feed.setLoading("login", true);
        this.logout();
        this.feed.setLoading("logout", false);
        this.scatter.login().then(function () {
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
                        if (!(this.current.name != profile && (this.current.name == this.last_logged || profile != "guest"))) return [3 /*break*/, 3];
                        this.feed.setLoading("account", true);
                        this.current = this.default;
                        this.current.name = profile;
                        if (!(profile != "guest")) return [3 /*break*/, 2];
                        _a = this.current;
                        return [4 /*yield*/, this.getAccountData(this.current.name)];
                    case 1:
                        _a.data = _b.sent();
                        _b.label = 2;
                    case 2:
                        // this.scopes = {};
                        this.balances = [];
                        this.userorders = {};
                        console.log("this.onCurrentAccountChange.next(this.current.name) !!!!!!");
                        this.onCurrentAccountChange.next(this.current.name);
                        this.updateCurrentUser();
                        this.feed.setLoading("account", false);
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VapaeeService.prototype.updateLogState = function () {
        var _this = this;
        console.log("VapaeeService.updateLogState()", [this]);
        this.loginState = "no-scatter";
        this.feed.setLoading("log-state", true);
        this.scatter.waitConnected.then(function () {
            _this.loginState = "no-logged";
            if (_this.scatter.logged) {
                _this.loginState = "account-ok";
            }
            _this.feed.setLoading("log-state", false);
        }).catch(function (e) {
            _this.feed.setLoading("log-state", false);
            throw e;
        });
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
            var _;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateTrade(amount.token, price.token)];
                    case 1:
                        _ = _a.sent();
                        return [2 /*return*/, result];
                }
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
            var _;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateTrade(comodity, currency)];
                    case 1:
                        _ = _a.sent();
                        return [2 /*return*/, result];
                }
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
    // --------------------------------------------------------------
    // Getters 
    VapaeeService.prototype.getSomeFreeFakeTokens = function (symbol) {
        if (symbol === void 0) { symbol = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _token;
            return __generator(this, function (_a) {
                _token = symbol;
                this.feed.setLoading("freefake-" + _token || "token", true);
                return [2 /*return*/, this.waitTokenstats.then(function (_) {
                        var token = null;
                        for (var i = 0; true; i++) {
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
                                    console.log("VapaeeService balances updated");
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
    VapaeeService.prototype.updateTrade = function (comodity, currency) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("**** VapaeeService.updateCurrentUser() ****");
                return [2 /*return*/, Promise.all([
                        this.getTransactionHistory(comodity, currency, -1, -1, true),
                        this.getSellOrders(comodity, currency, true),
                        this.getBuyOrders(comodity, currency, true),
                        this.getTableSummary(comodity, currency, true),
                        this.getOrderTables(),
                        this.updateCurrentUser()
                    ])];
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
    VapaeeService.prototype.getHistoryPagesFor = function (scope, pagesize) {
        if (!this.scopes || !this.scopes[scope])
            return 0;
        var total = this.scopes[scope].deals;
        var mod = total % pagesize;
        var dif = total - mod;
        var pages = dif / pagesize;
        return pages;
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
                            pagesize = 4;
                        }
                        if (page == -1) {
                            pages = this.getHistoryPagesFor(scope, pagesize);
                            page = pages - 2;
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
                    case 0:
                        console.log("VapaeeService.getOrderTables()");
                        return [4 /*yield*/, this.fetchOrderTables()];
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
                    var summary, now, now_sec, now_hour, start_hour, ZERO_TLOS, price, crude, last_hh, i, hh, last_24h, volume, first, i, current, current_date, vol, last, diff, ratio, percent;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.fetchSummary(scope)];
                            case 1:
                                summary = _a.sent();
                                console.log(scope, "---------------------------------------------------");
                                console.log("Summary crudo:", summary.rows);
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
                                console.log("now_hour:", now_hour);
                                console.log("start_hour:", start_hour);
                                ZERO_TLOS = "0.00000000 TLOS";
                                price = ZERO_TLOS;
                                crude = {};
                                last_hh = 0;
                                for (i = 0; i < summary.rows.length; i++) {
                                    hh = summary.rows[i].hour;
                                    crude[hh] = summary.rows[i];
                                    if (last_hh < hh && hh < start_hour) {
                                        last_hh = hh;
                                        price = summary.rows[i].price;
                                    }
                                }
                                console.log("crude:", crude);
                                last_24h = {};
                                volume = new Asset(ZERO_TLOS, this);
                                first = null;
                                for (i = 0; i < 24; i++) {
                                    current = start_hour + i;
                                    current_date = new Date(current * 3600 * 1000);
                                    // console.log("current_date:", current_date.toISOString());
                                    last_24h[current] = crude[current] || {
                                        label: this.auxGetLabelForHour(current % 24),
                                        price: price,
                                        volume: ZERO_TLOS,
                                        date: current_date.toISOString().split(".")[0],
                                        hour: current
                                    };
                                    price = last_24h[current].price;
                                    vol = new Asset(last_24h[current].volume, this);
                                    volume.amount = volume.amount.plus(vol.amount);
                                    if (price != ZERO_TLOS && !first) {
                                        first = new Asset(price, this);
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
                                console.log("last_24h:", [last_24h]);
                                console.log("first:", first.toString(8));
                                console.log("last:", last.toString(8));
                                console.log("diff:", diff.toString(8));
                                console.log("percent:", percent);
                                console.log("ratio:", ratio);
                                console.log("volume:", volume.str);
                                this.scopes[scope].summary.price = last;
                                this.scopes[scope].summary.percent_str = (isNaN(percent) ? 0 : percent) + "%";
                                this.scopes[scope].summary.percent = isNaN(percent) ? 0 : percent;
                                this.scopes[scope].summary.volume = volume;
                                console.log("Summary final:", this.scopes[scope].summary);
                                console.log("---------------------------------------------------");
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
                                    _this.tokens.sort(function (a, b) {
                                        if (_this.scopes[a.scope] && _this.scopes[b.scope]) {
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
            deals: 0,
            orders: { sell: [], buy: [] },
            history: [],
            tx: {},
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
    VapaeeService.prototype.fetchHistory = function (scope, page, pagesize) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (pagesize === void 0) { pagesize = 25; }
        var pages = this.getHistoryPagesFor(scope, pagesize);
        var id = page * pagesize;
        if (page < pages) {
            if (this.scopes[scope].tx["id-" + id]) {
                var result = { more: false, rows: [] };
                for (var i = 0; i < pagesize; i++) {
                    var id_i = id + i;
                    var trx = this.scopes[scope].tx["id-" + id_i];
                    if (trx) {
                        result.rows.push(trx);
                    }
                }
                return Promise.resolve(result);
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
    VapaeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_scatter_service__WEBPACK_IMPORTED_MODULE_2__["ScatterService"]])
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
        if (b instanceof VapaeeService) {
            this.parse(a, b);
        }
    }
    Asset.prototype.clone = function () {
        return new Asset(this.amount, this.token);
    };
    Asset.prototype.parse = function (text, vapaee) {
        var sym = text.split(" ")[1];
        this.token = vapaee.getTokenNow(sym);
        var amount_str = text.split(" ")[0];
        this.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(amount_str);
        console.assert(!!this.token, "ERROR: string malformed of token not found:", text);
    };
    Asset.prototype.valueToString = function (decimals) {
        if (decimals === void 0) { decimals = -1; }
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
    Object.defineProperty(Asset.prototype, "str", {
        get: function () {
            return this.toString();
        },
        enumerable: true,
        configurable: true
    });
    Asset.prototype.toString = function (decimals) {
        if (decimals === void 0) { decimals = -1; }
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

module.exports = __webpack_require__(/*! /var/www/eosio-angular-app/src/main.ts */"./src/main.ts");


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

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map