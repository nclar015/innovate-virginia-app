import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';
import { SessionsPage } from '../pages/sessions/sessions';
import { SurveyPage } from '../pages/survey/survey';
import { SettingsPage } from '../pages/settings/settings';
import { RoomsPage } from '../pages/rooms/rooms';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SocialPage } from '../pages/social/social';
import { LocationPage } from '../pages/location/location';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    SchedulePage,
    SessionsPage,
    SurveyPage,
    RoomsPage,
    LocationPage,
    SponsorsPage,
    SpeakersPage,
    SettingsPage,
    SurveyPage,
    SocialPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    SchedulePage,
    SessionsPage,
    SurveyPage,
    RoomsPage,
    LocationPage,
    SponsorsPage,
    SpeakersPage,
    SettingsPage,
    SurveyPage,
    SocialPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
