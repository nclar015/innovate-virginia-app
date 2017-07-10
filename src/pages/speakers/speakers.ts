import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeakerData } from '../../providers/speakers';
import { SpeakerDetailPage } from '../speakerDetail/speakerDetail';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

    speakerDetailRoot = SpeakerDetailPage;

  constructor(
    public navCtrl: NavController,
    public SpeakerData: SpeakerData
    ) {

  }

  speakers = this.SpeakerData.allSpeakers.speakers;

  goToSpeaker(speaker) {
    localStorage.setItem("speakerView",JSON.stringify(speaker));
        this.navCtrl.push(this.speakerDetailRoot);
  }
}
