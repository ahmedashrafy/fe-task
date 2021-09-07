import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TotalFactsComponent } from './components/total-facts/total-facts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFormComponent,
    SummaryComponent,
    TotalFactsComponent
  ],
  imports: 
  [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
