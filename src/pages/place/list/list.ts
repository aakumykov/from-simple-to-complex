import { Component } from '@angular/core';
// import { Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Place } from '../place.class';
import { PlaceService } from '../../../services/place.service';
import { PlaceCreate } from '../create/create';
import { PlaceShow } from '../show/show';


@Component({
  selector: 'place-list-page',
  templateUrl: 'list.html'
})

export class PlaceList {

	// @Input() region_id: number;
	
	public list: Place[];
	
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private placeService: PlaceService,
  	) {}


	ngOnInit(){
		console.info('*ngOnInit* (PlaceList)');
		this.getPlaceList();
	}

	show(id: number){
		// console.info('------- PlaceList.show() ------');
		// console.info(arg);
		// console.info('------------------------------------');
		this.navCtrl.push(PlaceShow, {id:id});
	}

	create() {
		console.info('PlaceList.create()');
		this.navCtrl.push(PlaceCreate);
	}

	private getPlaceList() {
		console.info('PlaceList.getPlaceList()');

		this.placeService.getPlaceList().subscribe(
			list => {
				this.list = list;
			},
			error => this.errorMsg = error,
		);
	}
}
