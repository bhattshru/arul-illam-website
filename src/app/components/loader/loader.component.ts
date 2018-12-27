import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loaderSub: Subscription;
  show: boolean;

  constructor(public loaderService: LoaderService) {
    this.show = true;
  }

  ngOnInit() {
    this.loaderSub = this.loaderService.displayLoader
    .subscribe((showLoader: boolean) => {
      this.show = showLoader;
    });
  }

  ngOnDestroy() {
    this.loaderSub.unsubscribe();
  }
}
