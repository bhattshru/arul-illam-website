import { Component, OnInit } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { LoaderService } from 'src/app/services/loader/loader.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  contactViewType = "CONTACT_WITHOUT_MAP";
  private _aboutUsContentURL = '//arulillam-cms.herokuapp.com/our-story';

  @Input()
  aboutContent: string;
  aboutImage: string;



  constructor(private http: Http, private loaderService: LoaderService) {
  }

  public ping() {

    let headers = new Headers();
    this.loaderService.show();
    headers.append("Authorization", "Basic " + btoa("siva:P@ssw0rd"));
    headers.append("Content-Type", "application/json");

    let body = null;
    let options = new RequestOptions({ headers: headers });
    this.http.get(this._aboutUsContentURL, options).subscribe(response => {
      console.log(response);
      let jsonData = response.json();
      this.aboutImage = jsonData['aboutImage'];
      this.aboutContent = jsonData['aboutContent'];


      var img = new Image();
      img.onload = function() {


      }
      img.src = this.aboutImage;

      this.loaderService.hide();

    }, err => {
      console.log("User authentication failed!");
      this.loaderService.hide();
    });
  }



  ngOnInit() {
    this.ping();
  }

  closeOverlay() {
    this.loaderService.hide();
  }

}
