import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {
  headers: Headers;
  galleryImagesUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers(); 
    this.headers.append("Authorization", "Basic " + btoa("siva:P@ssw0rd"));
    this.headers.append("Content-Type", "application/json");
    this.galleryImagesUrl = "//arulillam-cms.herokuapp.com/gallery";
    //this.galleryImagesUrl = "https://api.myjson.com/bins/ha69k";
  }

  getGalleryImages = () => {
    let body = new RequestOptions({ headers: this.headers });
    return new Promise((resolve, reject) => {
      this.http.get(this.galleryImagesUrl, body).subscribe((data) => {
        if(data.status === 200) {
          let res = {
            images: data['_body']
          }
          resolve(res);
        } else {
          resolve({});
        }
        }, (err) => {
          reject(err);
        });
    });
  }
}
 