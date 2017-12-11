/**
 * Created by mayankrd on 12/7/17.
 */

// Import components
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {EventComponent} from "./event/event.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {EventdetailComponent} from "./eventdetail/eventdetail.component";
import {ManageeventComponent} from "./manageevent/manageevent.component";
import {ListCreatedEventsComponent} from "./list-created-events/list-created-events.component";

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'new/category', component : CategoryComponent},
  {path: 'new/event', component : EventComponent},
  {path: 'profile', component : ProfileComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'eventdetail', component : EventdetailComponent},
  {path: 'manage/list/events', component : ListCreatedEventsComponent},
  {path: 'manage/event/:eventId', component : ManageeventComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
