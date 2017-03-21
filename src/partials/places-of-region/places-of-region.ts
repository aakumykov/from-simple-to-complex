import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Place } from '../../pages/place/place.class';

import { List } from '../list/list';
import { PlaceService } from '../../services/place.service';
import { PlaceShow } from '../../pages/place/show/show';

@Component({
  selector: 'places-of-region',
  templateUrl: './places-of-region.html',
  providers: [Place],
})

export class PlacesOfRegion {

	@Input() 
		region_id: number;
	
	@Output() 
		showEvent: EventEmitter<number> = new EventEmitter<number>();

	public list: Place[];

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		private placeService:PlaceService,
		private navCtrl: NavController,
	){}

	ngOnInit(){
		console.info('*ngOnInit*, PlacesOfRegion');
		this.getList(this.region_id);
	}

	show(id: number) {
		console.info('PlacesOfRegion.show('+id+')');
		this.navCtrl.push(PlaceShow, {id: id});
	}

	private getList(id: number) {
		console.info('PlacesOfRegion.getList('+id+')');
		this.placeService.getListFor(id).subscribe(
			list => {
				console.info('----- place list -----');
				console.info(list);
				console.info('----------------------');
				this.list = list;
			},
			error => this.errorMsg = error
		);
	}
}
