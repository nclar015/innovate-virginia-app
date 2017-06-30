import { Component } from '@angular/core';

import { SessionsPage } from '../sessions/sessions';
import { RoomsPage } from '../rooms/rooms';
import { SchedulePage } from '../schedule/schedule';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SessionsPage;
  tab3Root = RoomsPage;
  tab4Root = SchedulePage;

  constructor() {

  }
}
