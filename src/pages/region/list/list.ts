import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
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
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {}

	ngOnInit(){
		console.log('RegionList.ngOnInit()');

		this.regionService.getList().subscribe(
			list => {
				console.info('----- Получен список районов -----');
				console.info(list);
				console.info('----------------------------------');
				this.list = list;
			},
			error => this.errorMsg = error,
		);
	}
}
