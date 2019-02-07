import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

 contactViewType = "CONTACT_WITH_MAP";
 
  ourStoryContent1:string;
  ourStoryContent2:string;
  constructor() { 

    this.ourStoryContent1 = 'The founder (Mr. S Arul Dass) was working as a Volunteer in one of the Children’s Home and he got inspired & decided to set up a New Home. Because he thought it would be an effective way to raise a fund and help the children. He also believe that it is essential to work with local organizations as this will ensure that we provide the right help depending on the children’s needs, and will also allow development to be sustainable. Being in a small Charity, he is able to work very closely with the organizations we support, and can then really see the differences that are being made. he wants to thank everyone who supported us so far, and would love to hear from anyone who would like to get involved with making a real difference to the lives of these children. We place on records our appreciation and commendable commitments for all staff in various capacity who have sacrificed and elevated service in the professional realm. With gained experience we are going to plunge ourselves in conservation of Humanity, nature etc. We are open to accommodate all relevant strategies to reach our end result of empowering.It is encouraging to witness the resourcefulness of the Home which has been helping the kids in all practical opportunities.';

    this.ourStoryContent2 = 'Arul IllamTrust (Thambi Illam Children Home) was started in the year 2011 with the focus of eradicating the poverty and enables the needy kids to shine in their future.';

  }

  ngOnInit() {
  }

}
