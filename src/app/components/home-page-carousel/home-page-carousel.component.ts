import { Component, OnInit } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-home-page-carousel',
  templateUrl: './home-page-carousel.component.html',
  styleUrls: ['./home-page-carousel.component.scss']
})
export class HomePageCarouselComponent implements OnInit {

  private _aboutUsContentURL = '//arulillam-cms.herokuapp.com/carousel-data';
  image1: string;
  image2: string;
  image3: string;
  

  constructor(private http: Http, private loaderService: LoaderService) {

  }

  public ping() {

    this.loaderService.show();

    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("siva:P@ssw0rd"));
    headers.append("Content-Type", "application/json");

    let body = null;
    let options = new RequestOptions({ headers: headers });
    this.http.get(this._aboutUsContentURL, options).subscribe(response => {
      console.log(response);
      let jsonData = response.json();
      
        this.image1 = jsonData[0].imageurl;
        this.image2 = jsonData[1].imageurl;
        this.image3 = jsonData[2].imageurl;
        
        this.loaderService.hide();
    }, err => {
      console.log("User authentication failed!");
      this.loaderService.hide();
    });
  }

  ngOnInit() {
    this.ping();
  }
}
