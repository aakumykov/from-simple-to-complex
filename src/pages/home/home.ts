import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { TitlePage } from '../title/title';
import { RegionListPage } from '../region/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	// titlePage = TitlePage;
  	
  	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	// openPage(){
	// 	console.log('openPage()');
	// 	this.navCtrl.push(this.titlePage);
	// }

	showRegions() {
		this.navCtrl.push(RegionListPage);
	}
}
