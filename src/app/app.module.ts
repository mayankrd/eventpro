import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Routing} from "./routing";
import {EventService} from "./services/event.client.service";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CategoryComponent } from './category/category.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {TruncatePipe} from "./home/truncate.pipe";
import {SharedDataService} from "./services/shared.data.service";
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import {UserService} from "./services/user.client.service";
import { ManageeventComponent } from './manageevent/manageevent.component';
import { ListCreatedEventsComponent } from './list-created-events/list-created-events.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    EventComponent,
    HeaderComponent,
    ProfileComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    TruncatePipe,
    EventdetailComponent,
    ManageeventComponent,
    ListCreatedEventsComponent,
    AllUsersComponent,
    AllCategoriesComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    FormsModule
  ],
  providers: [EventService, SharedDataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
