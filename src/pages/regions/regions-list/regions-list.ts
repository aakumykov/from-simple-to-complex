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
				region => this.regions.push(region),
				error => this.errorMsg = <any>error
		);
	}

	editRegion(id: number) {
		console.info('RegionsList.editRegion('+id+')');
	}

	removeRegion(region: Region) {
		console.info('RegionsList.removeRegion('+region+')');

		this.regionsService.removeRegion(region.id).subscribe(
			() => {
				for (let r in this.regions) {
					if (region == this.regions[r]) {
						this.regions.splice(Number(r),1);
					}
				}
				this.infoMsg = 'район "'+region.name+'" удалён';
			},
			error => this.errorMsg = <any>error,
			() => this.infoMsg = 'операция выполнена'
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
