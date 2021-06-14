import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from "@angular/common/http";
import { SwiftapiService } from "./service/swiftapi.service";
import { TechnewsComponent } from './technews/technews.component';
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    SwiftapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
