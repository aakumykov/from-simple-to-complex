import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionShow } from '../show/show';

@Component({
	selector: 'region-create',
	templateUrl: '../edit/edit.html'
})

export class RegionCreate {
	public title = 'Добавление нового района';

	public name: string;
	public description: string;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private regionService: RegionService,
	){}

	save() { // общее имя с компонентом edit
		console.info('RegionCreate.save()');

		let data = {
			name: this.name,
			description: this.description,
		}

		this.regionService.create(data).subscribe(
			region => {
				// this.infoMsg = 'Район <?> создан '+region.id;
				this.navCtrl.push(RegionShow, {id:region.id});

				// let active = this.navCtrl.getActive()
				// let currentIndex = this.navCtrl.indexOf(active);
				// let createView = this.navCtrl.getByIndex(currentIndex-1);
				
				// this.navCtrl.removeView(createView);
				// this.navCtrl.remove(currentIndex-2, 1);
			},
			error => this.errorMsg = error
		);
	}

	cancel() {
		console.info('RegionCreate.cancel()');
		this.navCtrl.pop();
	}
}