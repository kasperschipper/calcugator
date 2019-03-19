import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalculatorModule} from "./calculator/calculator.module";
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              CalculatorModule,
              HttpClientModule
            ],
            providers: [
              HttpService
            ],
            bootstrap: [AppComponent]
          })
export class AppModule
{
}
