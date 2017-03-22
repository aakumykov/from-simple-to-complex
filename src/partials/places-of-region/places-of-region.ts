import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Place } from '../../pages/place/place.class';

import { List } from '../list/list';
import { PlaceService } from '../../services/place.service';
import { PlaceShow } from '../../pages/place/show/show';
import { PlaceCreate } from '../../pages/place/create/create';

@Component({
  selector: 'places-of-region',
  templateUrl: './places-of-region.html',
  providers: [Place],
})

export class PlacesOfRegion {

	@Input() 
		region_id: number;

	// не нужно здесь
	// @Output() 
		// showEvent: EventEmitter<number> = new EventEmitter<number>();
		// addEvent: EventEmitter<number> = new EventEmitter<number>();

	public list: Place[];
	public title: string = 'Места:';

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		private placeService:PlaceService,
		private navCtrl: NavController,
	){}

	ngOnInit(){
		console.info('*ngOnInit*, PlacesOfRegion');
		this.getList(this.region_id);
		// console.info(this.list);
		// console.info('title: '+this.title);
	}

	show(id: number) {
		console.info('PlacesOfRegion.show('+id+')');
		this.navCtrl.push(PlaceShow, {id: id});
	}

	addPlace() {
		console.info('PlacesOfRegion.addPlace('+this.region_id+')');
		this.navCtrl.push(PlaceCreate, {region_id: this.region_id});
	}

	private getList(id: number) {
		console.info('PlacesOfRegion.getList('+id+')');
		this.placeService.getListFor(id).subscribe(
			list => this.list = list,
			error => this.errorMsg = error
		);
	}
}
