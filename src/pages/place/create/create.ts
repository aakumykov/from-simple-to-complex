import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceService } from '../../../services/place.service';

import { RegionShow } from '../../region/show/show';


@Component({
	selector: 'place-create',
	templateUrl: '../edit/edit.html'
})

export class PlaceCreate {
	public title = 'Добавление места в район ...';

	public name: string;
	public description: string;

	private region_id: number;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private placeService: PlaceService,
	){
		this.region_id = this.navParams.get('region_id');
	}

	save() { // общее имя с компонентом edit
		console.info('PlaceCreate.save()');
		 // console.info(' name: '+this.name);
		 // console.info(' description: '+this.description);

		let data = {
			name: this.name,
			description: this.description,
			region_id: this.region_id,
		}

		this.placeService.createPlace(data).subscribe(
			place => {
				this.infoMsg = 'Место "'+place.name+'" создано, id '+place.id;
				this.navCtrl.push(RegionShow, {id: this.region_id});
			},
			error => this.errorMsg = error
		);
	}

	cancel() {
		console.info('PlaceCreate.cancel()');
		this.navCtrl.pop();
	}
}