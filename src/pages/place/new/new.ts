import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceService } from '../place.service';

@Component({
	selector: 'place-new',
	templateUrl: '../edit/edit.html'
})

export class PlaceNew {
	public title = 'Добавление места в район ...';

	public name: string;
	public description: string;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private placeService: PlaceService,
	){}

	save() { // общее имя с компонентом edit
		console.info('PlaceNew.save()');

		let data = {
			name: this.name,
			description: this.description,
		}

		this.placeService.addPlace(data).subscribe(
			place => {
				this.infoMsg = 'Место <?> создано '+place.id;
				// this.navCtrl.push(PlaceShow, {id: place.id});
			},
			error => this.errorMsg = error
		);
	}

	cancel() {
		console.info('PlaceNew.cancel()');
		this.navCtrl.pop();
	}
}