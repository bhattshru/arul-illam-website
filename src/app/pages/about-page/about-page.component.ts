import { Component, OnInit } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  contactViewType = "CONTACT_WITHOUT_MAP";
  private _aboutUsContentURL = '//arulillam-cms.herokuapp.com/AboutScreen';

  @Input()
  aboutContent: string;
  aboutImage: string;



  constructor(private http: Http) {
  }

  public ping() {

    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("siva:P@ssw0rd"));
    headers.append("Content-Type", "application/json");

    let body = null;
    let options = new RequestOptions({ headers: headers });
    this.http.get(this._aboutUsContentURL, options).subscribe(response => {
      console.log(response);
      let jsonData = response.json();
      this.aboutImage = jsonData['aboutImage'];
      this.aboutContent = jsonData['aboutContent'];

    }, err => {
      console.log("User authentication failed!");
    });
  }



  ngOnInit() {
    this.ping();
  }

}
