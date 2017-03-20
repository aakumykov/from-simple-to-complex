import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionCreate } from '../create/create';
import { RegionShow } from '../show/show';

import { List } from '../../partials/list/list';

@Component({
  selector: 'region-list-page',
  templateUrl: 'list-page.html'
})

export class RegionListPage {

	public list: Region[];
	
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {}


	ngOnInit(){
		console.info('*ngOnInit* (RegionListPage)');
		this.getRegionList();
	}

	show(id: number){
		// console.info('------- RegionListPage.show() ------');
		// console.info(arg);
		// console.info('------------------------------------');
		this.navCtrl.push(RegionShow, {id:id});
	}

	create() {
		console.info('RegionListPage.create()');

		this.navCtrl.push(RegionCreate);
	}

	private getRegionList() {
		console.info('RegionListPage.getRegionList()');

		this.regionService.getRegionList().subscribe(
			list => {
				this.list = list;

			},
			error => this.errorMsg = error,
		);
	}
}
