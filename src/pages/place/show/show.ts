import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceService } from '../../../services/place.service';

import { PlaceEdit } from '../edit/edit';
import { RegionShow } from '../../region/show/show';


@Component({
  selector: 'place-show',
  templateUrl: 'show.html'
})

export class PlaceShow {

	public id: number;
	public name: string;
	public description: string;
	public region_id: number;

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private placeService: PlaceService,
  	) {
  		this.id = this.navParams.get('id');
  		console.info('PlaceShow.constructor(), id='+this.id);
  	}
	
	ngOnInit(){
		console.info('*ngOnInit* (PlaceShow)');
		this.getPlace();
	}

	editItem() {
		console.info('PlaceShow.editItem('+this.id+')');

		this.navCtrl.push(PlaceEdit, {
			id: this.id,
			name: this.name,
			description: this.description,
			region_id: this.region_id,
		});
	}

	removeItem() {
		console.info('PlaceShow.removeItem(), this.id: '+this.id+')');

		this.placeService.removePlace(this.id).subscribe(
			() => { 
				this.infoMsg = 'объект удалён';
				this.navCtrl.push(RegionShow, { id: this.region_id });
			},
			error => this.errorMsg = error
		);
	}

	private getPlace() {
		console.info('PlaceShow.getPlace('+this.id+')');

		this.placeService.getPlace(this.id).subscribe(
			place => {

				this.id = place.id;
				this.name = place.name;
				this.description = place.description;
				this.region_id = place.region_id;
			},
			error => this.errorMsg = error,
		);
	}
}
