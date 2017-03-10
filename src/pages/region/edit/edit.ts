import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionShow } from '../show/show';

@Component({
	selector: 'region-edit',
	templateUrl: 'edit.html'
})

export class RegionEdit {
	
	// переменные
	public errorMsg: string;
	public infoMsg: string;

	public id: number;
	public name: string;
	public description: string;

	// конструктор
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private regionService: RegionService
	){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
		this.description = this.navParams.get('description');

		console.info('RegionEdit.constructor()');
		console.info('id: '+this.id);
		console.info('name: '+this.name);
		console.info('description: '+this.description);
	}

	save(){
		console.info('RegionShow.save()');
		console.info('id: '+this.id);
		console.info('new name: '+this.name);
		console.info('new description: '+this.description);
	}
}
