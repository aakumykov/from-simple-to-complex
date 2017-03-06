import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region';
import { RegionDetails } from '../region-details/region-details'
import { RegionsService } from '../regions.service';

@Component({
	selector: 'regions',
	templateUrl: 'regions-list.html'
})

export class RegionsList {
	// конструктор
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private regionsService: RegionsService
	){}

	// переменные
	regions: Region[];
	errorMsg: string;
	infoMsg: string;

	// внешние методы
	ngOnInit(){
		this.getRegions();
	}

	regionDetails(id: number, name: string){
		console.info('regionDetails('+id+')');

		this.navCtrl.push(RegionDetails,{ id:id, name:name });
	}

	addRegion(name: string) {
		console.info('regionDetails('+name+')');

		if (!name) { return false; }

		this.regionsService.addRegion(name).subscribe(
				region => {
					console.info('region: ');
					console.info(region);
					this.regions.push(region);
				},
				error => this.errorMsg = <any>error
		);
	}

	editRegion(id: number) {
		console.info('RegionsList.editRegion('+id+')');
	}

	removeRegion(id: number) {
		console.info('RegionsList.removeRegion('+id+')');

		console.log('----- this.regions -----');
		console.log(this.regions);
		console.log('------------------------');

		this.regionsService.removeRegion(id).subscribe(
			region => {
				//this.regions.splice(this.regions.indexOf(region),1)
				console.info('----- success -----');
				console.info(region);
				console.info('-------------------');
			},
			error => this.errorMsg = <any>error
		);
	}

	// внутренние методы
	private getRegions(){
		this.regionsService.getRegions().subscribe(
			regions => this.regions = regions,
			error => this.errorMsg = <any>error//,
			// () => this.infoMsg = 'RegionsList.getRegions() отработал'
		);
	}
}
