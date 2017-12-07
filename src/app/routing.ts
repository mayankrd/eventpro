/**
 * Created by mayankrd on 12/7/17.
 */

// Import components
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {EventComponent} from "./event/event.component";

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'new/category', component : CategoryComponent},
  {path: 'new/event', component : EventComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
