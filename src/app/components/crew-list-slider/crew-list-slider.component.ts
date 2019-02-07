import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew-list-slider',
  templateUrl: './crew-list-slider.component.html',
  styleUrls: ['./crew-list-slider.component.scss']
})
export class CrewListSliderComponent implements OnInit {


  crewProfileList: Object[] = [{

    "name": "Mr. S Arul Dass",
    "thumbnailURL": "../../../assets/images/arul_doss.jpg",
    "designation": "Founder"

  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
