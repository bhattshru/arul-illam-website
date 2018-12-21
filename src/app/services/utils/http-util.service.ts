import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from './logger.service'; 

@Injectable()
export class HttpUtilService {

  constructor(private http: HttpClient, private _logger: LoggerService) { }

  servicePost(url: string, body?: {}, headers?: {}) {
    this._logger.log("HttpUtilService: serviceGet - start");
    this._logger.log("HttpUtilService: serviceGet - parameters: ", url, headers);
    console.log("Service Post body = ", body);
    let promise = new Promise((resolve, reject) => {
      let options = {
        headers: headers
      }
      this.http.post(url, body, headers).subscribe(response => {
        this._logger.log("HttpUtilService: servicePost - response: ", response);
        resolve(response);
      }, err => {
        reject(err);
      })
    });

    this._logger.log("HttpUtilService: serviceGet - end");
    return promise;
  }

  serviceGet(url: string, headers?: {}, params?: {}) {
    this._logger.log("HttpUtilService: serviceGet - start");
    this._logger.log("HttpUtilService: serviceGet - parameters: ", url, headers, params);

    let promise = new Promise((resolve, reject) => {
      let options = {
        headers: headers,
        params: params
      }
      this.http.get(url, options).subscribe(response => {
        this._logger.log("HttpUtilService: serviceGet - response: ", response);
        resolve(response);
      }, err => {
        reject(err);
      })
    });

    this._logger.log("HttpUtilService: serviceGet - end");
    return promise;
  }

  servicePut(url: string, body?: {}, headers?: {}, params?: {}) {
    this._logger.log("HttpUtilService: servicePut - start");
    this._logger.log("HttpUtilService: servicePut - parameters: ", url, headers, params);

    let promise = new Promise((resolve, reject) => {

      let options = {
        headers: headers,
        params: params
      }
      this.http.put(url, body, options).subscribe(response => {
        this._logger.log("HttpUtilService: servicePut - response: ", response);
        resolve(response);
      }, err => {
        reject(err);
      })
    });

    this._logger.log("HttpUtilService: servicePut - end");
    return promise;
  }

  serviceDelete(url: string, headers?: {}, params?: {}) {
    this._logger.log("HttpUtilService: serviceDelete - start");
    this._logger.log("HttpUtilService: serviceDelete - parameters: ", url, headers, params);

    let promise = new Promise((resolve, reject) => {
      let options = {
        headers: headers,
        params: params
      }
      this.http.delete(url, options).subscribe(response => {
        this._logger.log("HttpUtilService: serviceDelete - response: ", response);
        resolve(response);
      }, err => {
        reject(err);
      })
    });

    this._logger.log("HttpUtilService: serviceDelete - end");
    return promise;
  }
}
