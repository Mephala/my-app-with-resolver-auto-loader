import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import {AddressResolver} from './address.resolver';
import { HttpClientModule} from '@angular/common/http';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AddressResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
