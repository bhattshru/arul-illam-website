import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { RoutedPages, CustomComponents, AppRoutingModule } from './app.routes';
import { MaterialModule } from './app.material-ui.module';
import { HttpModule } from '@angular/http';

import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { HomePageCarouselComponent } from './components/home-page-carousel/home-page-carousel.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { OverallInfoComponent } from './components/overall-info/overall-info.component';
import { GalleryServiceService } from './services/gallery/gallery-service.service';
import { HttpUtilService } from './services/utils/http-util.service';
import { LoggerService } from './services/utils/logger.service';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutedPages,
    CustomComponents,
    ContactUsComponent,
    HomePageCarouselComponent,
    EventListComponent,
    OverallInfoComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [
    GalleryServiceService,
    HttpUtilService,
    LoggerService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
