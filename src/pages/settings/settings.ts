import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  emptySchedule() {
    localStorage.removeItem("firstSlot");
    localStorage.removeItem("secondSlot");
    localStorage.removeItem("thirdSlot");
    localStorage.removeItem("fourthSlot");
    console.log(localStorage.getItem("firstSlot"));
  }

}
