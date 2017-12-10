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
    EventdetailComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    FormsModule
  ],
  providers: [EventService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
