import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-title',
  templateUrl: 'title.html'
})
export class TitlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TitlePage');
  }

}
