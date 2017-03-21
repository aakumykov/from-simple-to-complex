import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RegionList } from '../region/list/list';
import { PlaceList } from '../place/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  	
  	
  	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	showRegions() {
		this.navCtrl.push(RegionList);
	}

	showPlaces() {
		this.navCtrl.push(PlaceList);
	}
}
