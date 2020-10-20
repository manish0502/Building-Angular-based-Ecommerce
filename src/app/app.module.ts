import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrdersModule } from './orders/orders.module'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SiteFrameworkModule } from './site-framework/site-framework.module';
import { FormsModule } from '@angular/forms';

//import { HttpClient }

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
