import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Place } from '../place.class';

import { PlaceService } from '../place.service';

import { PlaceNew } from '../new/new';
import { PlaceShow } from '../show/show';

@Component({
  selector: 'place-list',
  templateUrl: 'list.html'
})

export class PlaceList {

	// свойства
	@Input() region_id: number;
	
	public list: Place[];
	
	public infoMsg: string;
	public errorMsg: string;


	// системные методы
  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private placeService: PlaceService,
  	) {}

	ngOnInit(){
		console.info('*ngOnInit* (PlaceList), region_id: '+this.region_id);
		this.getListFor();
	}


  	// главные методы
  	newPlace() {
  		console.info('PlaceList.newPlace()');

  		this.navCtrl.push(PlaceNew, {region_id: this.region_id});
  	}

  	showPlace(id: number) {
  		console.info('PlaceList.showPlace('+id+')');

  		this.navCtrl.push(PlaceShow, { id: id});
  	}


  	// вспомогательные методы
  	noPlaces(){
  		return (undefined==this.list) || (0==this.list.length);
  	}


  	// скрытые методы
	private getListFor() {
		console.info('PlaceList.getListFor()');

		this.placeService.getListFor(this.region_id).subscribe(
			list => {
				// console.info('----- PlaceList.getListFor() -----');
				// console.info(list);
				// console.info('----------------------------------');
				this.list = list;
			},
			error => this.errorMsg = error,
		);
	}
}
