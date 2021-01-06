import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import the feature module here so you can add it to the imports array below
import { RandomUserModule } from './random-user/random-user.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RandomUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
