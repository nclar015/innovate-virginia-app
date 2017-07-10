import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomsPage } from '../rooms/rooms';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  roomsRoot = RoomsPage;

  constructor(public navCtrl: NavController) {

  }

  goToAnotherPage(pageName) {
    this.navCtrl.push(pageName);
  }

  callWyndham(){
    window.open("tel:+18042381494");
  }

  googleMapsWyndham(){
    window.open("https://www.google.com/maps/place/Wyndham+Virginia+Crossings+Hotel+%26+Conference+Center");
  }

  wyndhamHotel(){
    window.open("https://www.wyndhamhotels.com/hotels/glen-allen-virginia?brand_id=WY&brand_tier=HR");
  }
}
