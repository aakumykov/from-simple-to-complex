import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';

import { ListItem } from '../list-item/list-item';
import { Region } from '../region.class';
import { RegionShow } from '../show/show';
import { RegionEdit } from '../edit/edit';
import { RegionService } from '../region.service';

@Component({
  selector: 'region-list',
  templateUrl: 'list.html'
})

export class RegionList {

	public list: Region[];

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		private regionService: RegionService,
  		private navCtrl: NavController,
  		// private navParams: NavParams,
  	) {}

	ngOnInit() {
		console.info('*ngOnInit* (RegionList)');
		this.getRegionList();
	}


	showItem(arg) {
		console.info('RegionList.showItem('+arg+')');
		this.navCtrl.push(RegionShow, {id: arg});
	}

	editItem(arg: Region) {
		console.info('RegionList.editItem('+arg.id+')');
		let data = {
			id: arg.id,
			name: arg.name,
			description: arg.description,
		}
		this.navCtrl.push(RegionEdit, data);
	}

	removeItem(arg) {
		console.info('RegionList.removeItem('+arg+')');
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
