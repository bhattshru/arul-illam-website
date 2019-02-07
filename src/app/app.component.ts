import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  webShow = true;
  ngOnInit() {
    if (window.screen.width <= 600) { // 768px portrait
        this.webShow = false;
    }
  }
  
}
