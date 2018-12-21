import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from 'src/app/services/gallery/gallery-service.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  url: string; 
  galleryObject: any;
  images: Array<any>;

  constructor(private galleryService: GalleryServiceService) { 
    this.galleryObject = [];
  }

  ngOnInit() {
    this.getGalleryObject();
  } 
  
  getGalleryObject () {
    this.galleryService.getGalleryImages().then(data => {
      this.images = JSON.parse(data['images']);
    }).catch(err => {
      console.log(err);
    });
  }

}
 