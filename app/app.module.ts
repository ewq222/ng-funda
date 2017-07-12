import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

//Barrel where all the other imports come from
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'

@NgModule({
 imports: [BrowserModule,
 RouterModule.forRoot(appRoutes)],
 declarations: [
  EventsAppComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  NavBarComponent,
  CreateEventComponent,
  Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule{}

function checkDirtyState(component:CreateEventComponent) {
  //Determine if an event has changed
  if(component.isDirty)
    return window.confirm ('You have not saved this event, do you really want to cancel?')
  return true

}
