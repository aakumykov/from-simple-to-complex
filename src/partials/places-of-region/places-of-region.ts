import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { PlaceService } from '../../services/place.service';
import { List } from '../list/list';

import { Place } from '../../pages/place/place.class';

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

	constructor(private placeService:PlaceService){}

	ngOnInit(){
		console.info('*ngOnInit*, PlacesOfRegion');
		this.getList(this.region_id);
	}

	show(arg) {
		console.info('PlacesOfRegion.show('+arg+')');
		// this.showEvent.emit(arg);
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
