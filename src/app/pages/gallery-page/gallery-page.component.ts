import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from 'src/app/services/gallery/gallery-service.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  url: string; 
  images: Array<any>;

  constructor(
    private galleryService: GalleryServiceService,
    private loaderService: LoaderService) { 
  }

  ngOnInit() {
    this.getGalleryObject();
  } 
  
  getGalleryObject () {
    this.loaderService.show();
    this.galleryService.getGalleryImages().then(data => {
      this.images = JSON.parse(data['images']);
      this.loaderService.hide();
    }).catch(err => {
      console.log(err);
      this.loaderService.hide();
    });
  }

}
 