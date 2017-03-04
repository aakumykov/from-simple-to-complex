import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from './region.class';
import { RegionsService } from './regions.service';

@Component({
	selector: 'region-detail',
	templateUrl: 'region-details.template.html'
})

export class RegionDetailsPage {
	// конструктор
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private regionsService: RegionsService
	){}

	// переменные
	errorMsg: string;
	infoMsg: string;

	id: number;
	name: string;
	places: number[];

	// внешние методы
	ngOnInit(){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
			console.info( 'id: ' + this.id );
			console.info( 'name: ' + this.name );
	}

	ngAfterViewInit() {
		console.info('ngAfterViewInit(), RegionDetailsPage');
		this.getRegionPlaces();
	}

	addPlace(name: string) {
		console.info('RegionDetailsPage.addPlace('+name+')');

		this.regionsService.addPlace(this.id, name).subscribe(
			place => this.places.push(place),
			error => this.errorMsg = <any>error,
		);
	}

	// внутренние методы
	private getRegionPlaces(){
		this.regionsService.getRegionPlaces(this.id).subscribe(
			places => {
				this.places = places;
				console.info(this.places);
			},
			error => this.errorMsg = <any>error//,
			// () => this.infoMsg = 'RegionsPage.getRegions() отработал'
		);
	}
}
