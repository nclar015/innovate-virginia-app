import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeakerData } from '../../providers/speakers'

@Component({
  selector: 'page-speakerDetail',
  templateUrl: 'speakerDetail.html'
})
export class SpeakerDetailPage {

  constructor(
    public navCtrl: NavController,
    public SpeakerData: SpeakerData
    ) {

  }
  speakerInfo = JSON.parse(localStorage.speakerView);
  
}
