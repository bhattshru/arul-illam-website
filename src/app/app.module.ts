import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { RoutedPages, CustomComponents, AppRoutingModule } from './app.routes';
import { MaterialModule } from './app.material-ui.module';
import { ContactUsComponent } from './common/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedPages,
    CustomComponents,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
     AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
