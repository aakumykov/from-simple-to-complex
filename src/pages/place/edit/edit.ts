import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceService } from '../place.service';
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

		this.title = 'Изменение местности «'+this.name+'»';
	}

	save(){
		console.info('PlaceEdit.save()');
		
		this.placeService.updatePlace(
			{
				id: this.id, 
				name: this.name, 
				description: this.description
			}
		).subscribe(
			place => { 
				this.infoMsg = 'сохранено'; 

				this.navCtrl.push(PlaceShow,{id:this.id});

				// this.clearNavHistory(2);

				// let active = this.navCtrl.getActive()
				// let currentIndex = this.navCtrl.indexOf(active);
				// let editView = this.navCtrl.getByIndex(currentIndex-1);
				
				// this.navCtrl.removeView(editView);
				// this.navCtrl.remove(currentIndex-2, 1);

			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('PlaceEdit.cancel()');
		this.navCtrl.pop();
	}

}
