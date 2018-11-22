import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { AppComponent } from './app.component';
import { RoutedPages, CustomComponents, AppRoutingModule } from './app.routes';
import { MaterialModule } from './app.material-ui.module';
import { HttpModule } from '@angular/http';


import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { HomePageCarouselComponent } from './components/home-page-carousel/home-page-carousel.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { OverallInfoComponent } from './components/overall-info/overall-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedPages,
    CustomComponents,
    ContactUsComponent,
    HomePageCarouselComponent,
    EventListComponent,
    OverallInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFontAwesomeModule,
    Angular2ImageGalleryModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
