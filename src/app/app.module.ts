import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './app.login';
import { AdminComponent } from './app.admin';
import {loginService} from './app.loginService';
import { HttpModule} from '@angular/http';
import {RouteComponent} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,AdminComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouteComponent
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
