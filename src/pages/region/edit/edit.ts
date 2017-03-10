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
		// public regionShow: RegionShow,
		
		private regionService: RegionService,
	){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
		this.description = this.navParams.get('description');
	}

	save(){
		console.info('RegionEdit.save()');
		
		this.regionService.updateRegion(
			{
				id: this.id, 
				name: this.name, 
				description: this.description
			}
		).subscribe(
			region => { 
				this.infoMsg = 'сохранено'; 
				// this.navCtrl.pop();
				// this.regionShow.showRegion(this.id);
			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('RegionEdit.cancel()');
		this.navCtrl.pop();
	}
}
