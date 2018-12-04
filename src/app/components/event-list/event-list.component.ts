import { Component, OnInit } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  private _eventsContentURL = '//arulillam-cms.herokuapp.com/events';

  constructor(private http: Http) {
  }
  @Input()
  events : events[];

  

  public ping() {

    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("siva:P@ssw0rd"));
    headers.append("Content-Type", "application/json");

    let body = null;
    let options = new RequestOptions({ headers: headers });
    this.http.get(this._eventsContentURL, options).subscribe(response => {
      console.log(response);
      let jsonData = response.json();
      this.events = jsonData;

    }, err => {
      console.log("User authentication failed!");
    });
  }

  ngOnInit() {
    this.ping();
  }
  
  
}
interface events{
  date: string;
  shortDescription: string;
  longDescription: string;
}
