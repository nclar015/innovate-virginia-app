import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionData } from '../../providers/sessions';
import { SessionDetailPage } from '../sessionDetail/sessionDetail';
import { SessionsPage } from '../sessions/sessions';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

    sessionDetailRoot = SessionDetailPage;
    allSessionsRoot = SessionsPage;

  constructor(
      public navCtrl: NavController,
      public SessionData: SessionData
      ) {

  }

    track: string = "All";
    inSession: any;
    sessions = this.SessionData.allSessions.sessions;
    openingKeynotes = this.SessionData.allSessions.openingKeynote;
    closingKeynotes = this.SessionData.allSessions.closingKeynote;
   
    goToSession(sessionInfo) {
        localStorage.setItem("sessionView",JSON.stringify(sessionInfo));
        this.navCtrl.push(this.sessionDetailRoot);
    }

    goToAllSessions() {
        this.navCtrl.push(this.allSessionsRoot);
    }

    noSessionFirstSlot: boolean = true;
    noSessionSecondSlot: boolean = true;
    noSessionThirdSlot: boolean = true;
    noSessionFourthSlot: boolean = true;
    
    firstSession = {};
    secondSession = {};
    thirdSession = {};
    fourthSession = {};

    ionViewWillEnter() {

        var first = localStorage.getItem("firstSlot");
        var second = localStorage.getItem("secondSlot");
        var third = localStorage.getItem("thirdSlot");
        var fourth = localStorage.getItem("fourthSlot");

        if(first !== null){
            this.firstSession = JSON.parse(first);
            this.noSessionFirstSlot = false;
        } else {
            this.noSessionFirstSlot = true;
        }

        if(second !== null){
            this.secondSession = JSON.parse(second);
            this.noSessionSecondSlot = false;
        } else {
            this.noSessionSecondSlot = true;
        }

        if(third !== null){
            this.thirdSession = JSON.parse(third);
            this.noSessionThirdSlot = false;
        } else {
            this.noSessionThirdSlot = true;
        }

        if(fourth !== null){
            this.fourthSession = JSON.parse(fourth);
            this.noSessionFourthSlot = false;
        } else {
            this.noSessionFourthSlot = true;
        }

    }
}
