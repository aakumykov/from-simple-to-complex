import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionShow } from '../show/show';
import { RegionCreate } from '../create/create';


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

	show(id: number) {
		console.info('RegionListPage.show('+id+')');
		this.navCtrl.push(RegionShow, {id: id});
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
				// console.info('----- this.list -----');
				// console.info(this.list);
				// console.info('----------------------------------');
			},
			error => this.errorMsg = error,
		);
	}
}


	// editItem(arg: Region) {
	// 	console.info('RegionList.editItem('+arg.id+')');
	// 	let data = {
	// 		id: arg.id,
	// 		name: arg.name,
	// 		description: arg.description,
	// 	}
	// 	this.navCtrl.push(RegionEdit, data);
	// }

	// removeItem(arg: number) {
	// 	console.info('RegionList.removeItem('+arg+')');
	// 	this.regionService.removeRegion(arg).subscribe(
	// 		() => {
	// 			this.infoMsg = 'Район '+arg+' удалён';
	// 			console.info(this.infoMsg);
	// 		},
	// 		error => this.errorMsg = error
	// 	);
	// }