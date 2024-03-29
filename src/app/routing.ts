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
import {AllUsersComponent} from "./all-users/all-users.component";
import {AllCategoriesComponent} from "./all-categories/all-categories.component";
import {LocalEventsComponent} from "./local-events/local-events.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {MyEventsComponent} from "./my-events/my-events.component";

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'events', component : LocalEventsComponent},
  {path: 'myevents', component : MyEventsComponent},
  {path: 'new/category', component : CategoryComponent},
  {path: 'new/event', component : EventComponent},
  {path: 'new/user', component : CreateUserComponent},
  {path: 'profile', component : ProfileComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'events/:eventId', component : EventdetailComponent},
  {path: 'manage/list/events', component : ListCreatedEventsComponent},
  {path: 'manage/event/:eventId', component : ManageeventComponent},
  {path: 'manage/list/users', component : AllUsersComponent},
  {path: 'manage/list/categories', component : AllCategoriesComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
