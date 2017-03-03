import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from './region.class';
import { RegionsService } from './regions.service';
import { RegionDetailPage } from './region-detail.component'

@Component({
	selector: 'regions',
	templateUrl: 'regions.template.html'
})

export class RegionsPage {
	// конструктор
	constructor(
		public navCtrl: NavController,
		public vanParams: NavParams,
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

	regionDetails(id: number){
		let msg = 'regionDetails('+id+')';
		console.info(msg);
		this.navCtrl.push(RegionDetailPage);
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
