import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../../../services/region.service';
import { RegionCreate } from '../create/create';
import { RegionShow } from '../show/show';


@Component({
  selector: 'region-list-page',
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

	show(id: number){
		// console.info('------- RegionList.show() ------');
		// console.info(arg);
		// console.info('------------------------------------');
		this.navCtrl.push(RegionShow, {id:id});
	}

	create() {
		console.info('RegionList.create()');
		this.navCtrl.push(RegionCreate);
	}

	private getRegionList() {
		console.info('RegionList.getRegionList()');

		this.regionService.getRegionList().subscribe(
			list => {
				this.list = list;
				console.info('RegionList.getRegionList(), list recieved');
			},
			error => this.errorMsg = error,
		);
	}
}
