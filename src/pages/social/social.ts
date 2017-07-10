import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage {

  constructor(public navCtrl: NavController) {

  }

  goToUrl(url){
    window.open(url);
  }
}
