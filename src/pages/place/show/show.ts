import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceService } from '../place.service';

import { PlaceEdit } from '../edit/edit';


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

	// editItem(id: number) {
	// 	console.info('PlaceShow.editItem('+this.id+')');

	// 	this.navCtrl.push(PlaceEdit, {
	// 		// place: this.place
	// 		id: this.id,
	// 		name: this.name,
	// 		description: this.description,
	// 	});
	// }

	// removeItem(id: number) {
	// 	console.info('PlaceShow.removeItem(), id: '+id+')');
	// 	console.info('PlaceShow.removeItem(), this.id: '+this.id+')');

	// 	this.placeService.removePlace(id).subscribe(
	// 		() => { 
	// 			this.infoMsg = 'объект удалён';
	// 			// this.navCtrl.push(PlaceListPage);
	// 		},
	// 		error => this.errorMsg = error
	// 	);
	// }

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
