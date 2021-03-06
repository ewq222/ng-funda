"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
//Barrel where all the other imports come from
var index_1 = require("./events/index");
var events_app_component_1 = require("./events-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var toastr_service_1 = require("./common/toastr.service");
var routes_1 = require("./routes");
var _404_component_1 = require("./errors/404.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)],
        declarations: [
            events_app_component_1.EventsAppComponent,
            index_1.EventsListComponent,
            index_1.EventThumbnailComponent,
            index_1.EventDetailsComponent,
            navbar_component_1.NavBarComponent,
            index_1.CreateEventComponent,
            _404_component_1.Error404Component,
        ],
        providers: [
            index_1.EventService,
            toastr_service_1.ToastrService,
            index_1.EventListResolver,
            index_1.EventRouteActivator,
            { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    //Determine if an event has changed
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}
//# sourceMappingURL=app.module.js.map