import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Place } from '../place.class';
import { PlaceService } from '../place.service';
// import { RegionService } from '../../region/region.service';

@Component({
  selector: 'place-list',
  templateUrl: 'list.html'
})

export class PlaceList {

	list: Place[];
	@Input() region_id: number;
	
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private placeService: PlaceService,
  		// private regionService: RegionService,
  	) {}

	ngOnInit(){
		console.info('*ngOnInit* (PlaceList)');
		this.getListFor();
	}

	// showPlace(id: number) {
	// 	console.info('PlaceList.showPlace('+id+')');
		
	// 	this.navCtrl.push(PlaceShow, { id: id });
	// }

	private getListFor() {
		console.info('PlaceList.getListFor()');

		this.placeService.getListFor(this.region_id).subscribe(
			list => this.list = list,
			error => this.errorMsg = error,
		);
	}
}
