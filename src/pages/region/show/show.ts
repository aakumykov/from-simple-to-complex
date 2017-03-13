import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RegionService } from '../region.service';


@Component({
  selector: 'region-show',
  templateUrl: 'show.html'
})

export class RegionShow {

	public id: number;
	public name: string;

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {
  		this.id = this.navParams.get('id');
  		// this.name = this.navParams.get('name');
  		console.info('RegionShow.constructor(), id='+this.id);
  		// console.info('RegionShow.constructor(), name='+this.name);
  	}

	// getRegion() {
	// 	console.info('RegionShow.getRegion('+this.id+')');

	// 	this.regionService.getRegion(this.id).subscribe(
	// 		region => {

	// 			this.id = region.id;
	// 			this.name = region.name;
	// 			this.description = region.description;
	// 		},
	// 		error => this.errorMsg = error,
	// 	);
	// }

	// editItem(id: number) {
	// 	console.info('RegionShow.editItem('+this.id+')');

	// 	this.navCtrl.push(RegionEdit, {
	// 		// region: this.region
	// 		id: this.id,
	// 		name: this.name,
	// 		description: this.description,
	// 	});
	// }

	// removeItem(id: number) {
	// 	console.info('RegionShow.removeItem(), id: '+id+')');
	// 	console.info('RegionShow.removeItem(), this.id: '+this.id+')');

	// 	this.regionService.removeRegion(id).subscribe(
	// 		() => { 
	// 			this.infoMsg = 'объект удалён';
	// 			this.navCtrl.push(RegionListPage);

	// 			let currentIndex = this.navCtrl.indexOf(this.navCtrl.getActive());
				
	// 			let prevView = this.navCtrl.getPrevious();
	// 			let prevPrevView = this.navCtrl.getPrevious(prevView);
				
	// 			// console.info('prevView: '+prevView.component.name);
	// 			// console.info('prevPrevView: '+prevPrevView.component.name);

	// 			this.navCtrl.removeView(prevView);
	// 			this.navCtrl.removeView(prevPrevView);
	// 		},
	// 		error => this.errorMsg = error
	// 	);
	// }
}
