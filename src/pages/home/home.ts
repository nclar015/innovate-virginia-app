import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionsPage } from '../sessions/sessions';
import { RoomsPage } from '../rooms/rooms';
import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sessionsRoot = SessionsPage;

  constructor(public navCtrl: NavController) {

  }

}
