import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public displayLoader: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  show() {
    this.displayLoader.next(true);
  }

  hide() {
    this.displayLoader.next(false);
  }
}
