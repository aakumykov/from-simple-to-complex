import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceService } from '../../../services/place.service';
import { PlaceShow } from '../show/show';

@Component({
	selector: 'place-edit',
	templateUrl: 'edit.html'
})

export class PlaceEdit {
	
	// переменные
	public errorMsg: string;
	public infoMsg: string;

	public id: number;
	public name: string;
	public description: string;
	public region_id: string;

	public title: string;

	// конструктор
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private placeService: PlaceService,
	){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
		this.description = this.navParams.get('description');
		this.region_id = this.navParams.get('region_id');

		this.title = 'Изменение местности «'+this.name+'»';
	}

	save(){
		console.info('PlaceEdit.save()');
		
		this.placeService.updatePlace(
			{
				id: this.id, 
				name: this.name, 
				description: this.description,
				region_id: this.region_id,
			}
		).subscribe(
			place => { 
				this.infoMsg = 'сохранено'; 

				this.navCtrl.push(PlaceShow,{id:this.id});
			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('PlaceEdit.cancel()');
		this.navCtrl.pop();
	}

}
