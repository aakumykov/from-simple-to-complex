import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { ListItem } from '../list-item/list-item';

@Component({
  selector: 'region-list',
  templateUrl: 'list.html'
})

export class RegionList {

	public list: Region[];

	public infoMsg: string;
	public errorMsg: string;

  	constructor(private regionService: RegionService) {}

	ngOnInit() {
		console.info('*ngOnInit* (RegionList)');
		this.getRegionList();
	}


	showItem(ev) {
		console.info('RegionList.showItem('+ev+')');
	}

	editItem(ev) {
		console.info('RegionList.editItem('+ev+')');
	}

	removeItem(ev) {
		console.info('RegionList.removeItem('+ev+')');
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
