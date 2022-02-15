import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './components/component.module';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
