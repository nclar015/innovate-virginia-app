import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings'
import { SchedulePage } from '../schedule/schedule';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SchedulePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
