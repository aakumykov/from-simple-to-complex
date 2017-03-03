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

	// внешние методы
	ngOnInit(){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');

		console.info( 'id: ' + this.id );
		console.info( 'name: ' + this.name );
	}
}
