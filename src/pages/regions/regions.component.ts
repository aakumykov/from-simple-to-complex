import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from './region.class';
import { RegionsService } from './regions.service';
import { RegionDetailsPage } from './region-details.component'

@Component({
	selector: 'regions',
	templateUrl: 'regions.template.html'
})

export class RegionsPage {
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

		this.navCtrl.push(RegionDetailsPage,{ id:id, name:name });
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

	// внутренние методы
	private getRegions(){
		this.regionsService.getRegions().subscribe(
			regions => this.regions = regions,
			error => this.errorMsg = <any>error//,
			// () => this.infoMsg = 'RegionsPage.getRegions() отработал'
		);
	}
}
