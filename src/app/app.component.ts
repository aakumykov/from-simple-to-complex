import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage  } from '../pages/home/home';

// import { BlankPage } from '../pages/blank/blank';
// import { TitlePage } from '../pages/title/title';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  
  // homePage = HomePage;
  // blankPage = BlankPage;
  // titlePage = TitlePage;

  constructor(
    platform: Platform,
    // public navCtrl: NavController, 
    // public navParams: NavParams
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
