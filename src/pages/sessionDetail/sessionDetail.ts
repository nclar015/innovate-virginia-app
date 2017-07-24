import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionData } from '../../providers/sessions';
import { SpeakerData } from '../../providers/speakers';
import { SpeakerDetailPage } from '../speakerDetail/speakerDetail';
import { AlertController } from 'ionic-angular';
    
@Component({
  selector: 'page-sessionDetail',
  templateUrl: 'sessionDetail.html'
})
export class SessionDetailPage {

    speakerDetailRoot = SpeakerDetailPage;

  constructor(
      public navCtrl: NavController,
      public alerCtrl: AlertController,
      public SpeakerData: SpeakerData,
      public SessionData: SessionData
      ) {
  }
    scheduled: boolean = false;
    sessionInfo = JSON.parse(localStorage.sessionView);
      
    goToSpeaker(speakerName) {
        
        var keynote = [];
        var agileTransformation = [];
        var ux = [];
        var devOps = [];
        var businessAnylsis = [];

        var speakerFound = false;

        keynote = this.SpeakerData.allSpeakers.speakers.keyNote;
        agileTransformation = this.SpeakerData.allSpeakers.speakers.agileTransformation;
        ux = this.SpeakerData.allSpeakers.speakers.ux;
        devOps = this.SpeakerData.allSpeakers.speakers.devOps;
        businessAnylsis = this.SpeakerData.allSpeakers.speakers.businessAnalysis;

          for(var key of keynote){
            if(speakerName == key.name){
                speakerFound = true;
                localStorage.setItem("speakerView",JSON.stringify(key));
            }
          } 
          for(var agile of agileTransformation){
            if(speakerName == agile.name){
                speakerFound = true;
                localStorage.setItem("speakerView",JSON.stringify(agile));
            }
          } 
          for(var u of ux){
            if(speakerName == u.name){
                speakerFound = true;
                localStorage.setItem("speakerView",JSON.stringify(u));
            }
          } 
          for(var dev of devOps){
            if(speakerName == dev.name){
                speakerFound = true;
                localStorage.setItem("speakerView",JSON.stringify(dev));
            }
          } 
          for(var bu of businessAnylsis){
            if(speakerName == bu.name){
                speakerFound = true;
                localStorage.setItem("speakerView",JSON.stringify(bu));
            }
          } 
        if(speakerFound){
            this.navCtrl.push(this.speakerDetailRoot);
        }
    }

    removeFromSchedule(session){
        this.scheduled = false;
        switch(session.time){
            case "9:30 am - 10:30 am": {
                localStorage.removeItem("firstSlot");
                break;
            }
            case "10:45 am - 11:45 am": {
                localStorage.removeItem("secondSlot");
                break;
            }
            case "1:00 pm - 2:00 pm": {
                localStorage.removeItem("thirdSlot");
                break;
            }
            case "2:15 pm - 3:15 pm": {
                localStorage.removeItem("fourthSlot");
                break;
            }
            default: {
                console.log("Default Selected");
                break;
            }
        }
    }

    addToSchedule(session) {

        var sessionSelected = JSON.stringify(session);
        var noSlot = false;

        switch(session.time){
            case "9:30 am - 10:30 am": {
                if(localStorage.getItem("firstSlot") != null){
                    var confirm = this.alerCtrl.create({
                        title: 'Double Booked..',
                        message: 'Looks like you are booked for this time. Would you like this event to replace it?',
                        buttons: [
                            {
                            text: 'No',
                            handler: () => {
                                console.log('Disagree clicked');
                            }
                            },
                            {
                            text: 'Yes',
                            handler: () => {
                                console.log('Agree clicked');
                                localStorage.setItem("firstSlot",sessionSelected);
                                this.scheduled = true;
                            }
                            }
                        ]
                    });
                    
                    confirm.present();
                    
                } else {
                    this.scheduled = true;
                    localStorage.setItem("firstSlot",sessionSelected);
                }
                break;
            }
            case "10:45 am - 11:45 am": {
                localStorage.setItem("secondSlot",sessionSelected);
                break;
            }
            case "1:00 pm - 2:00 pm": {
                localStorage.setItem("thirdSlot",sessionSelected);
                break;
            }
            case "2:15 pm - 3:15 pm": {
                localStorage.setItem("fourthSlot",sessionSelected);
                break;
            }
            default: {
                noSlot = true;
                console.log("Default Selected");
                break;
            }
        }
    }

    ionViewWillEnter() {
        var first = localStorage.getItem("firstSlot");
        var second = localStorage.getItem("secondSlot");
        var third = localStorage.getItem("thirdSlot");
        var fourth = localStorage.getItem("fourthSlot");

        if(first !== null){
            first = JSON.parse(first);
                if(first["id"] == this.sessionInfo.id){
                    this.scheduled = true;
                }
        }
        if(second !== null){
            second = JSON.parse(second);
                if(second["id"] == this.sessionInfo.id){
                    this.scheduled = true;
                }
        }
        if(third !== null){
            third = JSON.parse(third);
                if(third["id"] == this.sessionInfo.id){
                    this.scheduled = true;
                }
        }
        if(fourth !== null){
            fourth = JSON.parse(fourth);
                if(fourth["id"] == this.sessionInfo.id){
                    this.scheduled = true;
                }
        }
    }




    

}

