import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  @Input() type: string;

  CONTACT_WITH_MAP = "CONTACT_WITH_MAP";
  CONTACT_WITHOUT_MAP = "CONTACT_WITHOUT_MAP";

  constructor() { }

  ngOnInit() {
  }

}
