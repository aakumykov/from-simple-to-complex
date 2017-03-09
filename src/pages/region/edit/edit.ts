import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';

@Component({
	selector: 'region-edit',
	templateUrl: 'edit.html'
})

export class RegionEdit {
	// конструктор
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private regionService: RegionService
	){}

	// переменные
	errorMsg: string;
	infoMsg: string;

	// внешние методы
	ngOnInit(){
		
	}

	
}
