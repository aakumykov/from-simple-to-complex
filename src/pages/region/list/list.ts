import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionShow } from '../show/show';

@Component({
  selector: 'region-list',
  templateUrl: 'list.html'
})

export class RegionList {

	public list: Region[];
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {}

	ngOnInit(){
		console.info('*ngOnInit* (RegionList)');
		this.getRegionList();
	}

	showRegion(id: number) {
		console.info('RegionList.showRegion('+id+')');
		
		this.navCtrl.push(RegionShow, { id: id });
	}

	private getRegionList() {
		console.info('RegionList.getRegionList()');

		this.regionService.getRegionList().subscribe(
			list => {
				this.list = list;
				// console.info('----- this.list -----');
				// console.info(this.list);
				// console.info('----------------------------------');
			},
			error => this.errorMsg = error,
		);
	}
}
