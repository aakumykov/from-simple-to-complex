import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';

import { RegionService } from '../region.service';

import { RegionList } from '../list/list';
import { RegionCreate } from '../create/create';

@Component({
  selector: 'region-list-page',
  templateUrl: 'list-page.html'
})

export class RegionListPage {

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		// public navParams: NavParams,
  		private regionService: RegionService,
  	) {}

	create() {
		console.info('RegionListPage.create()');
		this.navCtrl.push(RegionCreate);
	}
}
