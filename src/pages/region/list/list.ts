import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'region-list',
  templateUrl: 'list.html'
})
export class RegionList {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	// showRegions() {
	// 	this.navCtrl.push(RegionsList);
	// }
}
