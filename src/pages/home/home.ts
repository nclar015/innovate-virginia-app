import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SessionsPage } from '../sessions/sessions';
import { SurveyPage } from '../survey/survey';
import { RoomsPage } from '../rooms/rooms';
import { SpeakersPage } from '../speakers/speakers';
import { SocialPage } from '../social/social';
import { LocationPage } from '../location/location';
import { SponsorsPage } from '../sponsors/sponsors';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sessionsRoot = SessionsPage;
  speakersRoot = SpeakersPage;
  surveyRoot = SurveyPage;
  locationRoot = LocationPage;
  roomsRoot = RoomsPage;
  sponsorsRoot = SponsorsPage;
  socialRoot = SocialPage;
  aboutRoot = AboutPage;
  contactRoot = ContactPage;

  constructor(public navCtrl: NavController) {

  }

  goToAnotherPage(pageName) {
    this.navCtrl.push(pageName);
  }
}
