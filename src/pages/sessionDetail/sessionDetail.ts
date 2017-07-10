import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionData } from '../../providers/sessions';
import { SpeakerData } from '../../providers/speakers';
import { SpeakerDetailPage } from '../speakerDetail/speakerDetail';
    
@Component({
  selector: 'page-sessionDetail',
  templateUrl: 'sessionDetail.html'
})
export class SessionDetailPage {

    speakerDetailRoot = SpeakerDetailPage;

  constructor(
      public navCtrl: NavController,
      public SpeakerData: SpeakerData,
      public SessionData: SessionData
      ) {
  }

      sessionInfo = JSON.parse(localStorage.sessionView);
      
    goToSpeaker(speakerName) {
        
        var keynote = [];
        var agileTransformation = [];
        var ux = [];
        var devOps = [];
        var businessAnylsis = [];

        keynote = this.SpeakerData.allSpeakers.speakers.keyNote;
        agileTransformation = this.SpeakerData.allSpeakers.speakers.agileTransformation;
        ux = this.SpeakerData.allSpeakers.speakers.ux;
        devOps = this.SpeakerData.allSpeakers.speakers.devOps;
        businessAnylsis = this.SpeakerData.allSpeakers.speakers.businessAnalysis;

          for(var key of keynote){
            if(speakerName == key.name){
                localStorage.setItem("speakerView",JSON.stringify(key));
            }
          } 
          for(var agile of agileTransformation){
            if(speakerName == agile.name){
                localStorage.setItem("speakerView",JSON.stringify(agile));
            }
          } 
          for(var u of ux){
            if(speakerName == u.name){
                localStorage.setItem("speakerView",JSON.stringify(u));
            }
          } 
          for(var dev of devOps){
            if(speakerName == dev.name){
                localStorage.setItem("speakerView",JSON.stringify(dev));
            }
          } 
          for(var bu of businessAnylsis){
            if(speakerName == bu.name){
                localStorage.setItem("speakerView",JSON.stringify(bu));
            }
          } 
          
        this.navCtrl.push(this.speakerDetailRoot);
    }

}

