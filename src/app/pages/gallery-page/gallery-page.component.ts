import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  url: string;
  constructor() { 
    this.url = location.origin + "/assets/images/gallery-processed-images/data.json";
  }

  ngOnInit() {
  } 

}
