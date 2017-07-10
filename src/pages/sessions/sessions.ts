import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionData } from '../../providers/sessions';
import { SessionDetailPage } from '../sessionDetail/sessionDetail';
@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {

    sessionDetailRoot = SessionDetailPage;

  constructor(
      public navCtrl: NavController,
      public SessionData: SessionData
      ) {

  }

    track: string = "All";
    inSession: any;
    sessions = this.SessionData.allSessions.sessions;
    keynotes = this.SessionData.allSessions.keynote;
   
    goToSession(sessionInfo) {
        localStorage.setItem("sessionView",JSON.stringify(sessionInfo));
        this.navCtrl.push(this.sessionDetailRoot);
    }
}

