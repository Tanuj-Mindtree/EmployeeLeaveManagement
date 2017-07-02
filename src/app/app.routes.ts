import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app.login';
import { AppComponent } from './app.component';
import { AdminComponent } from './app.admin';
const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app',  component:AppComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouteComponent{

}