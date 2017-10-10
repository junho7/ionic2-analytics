import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { QuotesListPage } from '../pages/quotes-list/quotes-list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = QuotesListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private googleAnalytics: GoogleAnalytics) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.googleAnalytics.debugMode();
      this.googleAnalytics.startTrackerWithId("UA-107836931-1");
      this.googleAnalytics.enableUncaughtExceptionReporting(true).then((_success) => {
        console.log("Successful enabling of uncaught exception reporting " + _success)
      }).catch((_error) => {
        console.log("error occured " + _error)
      });
    });
  }
}

