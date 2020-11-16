import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
