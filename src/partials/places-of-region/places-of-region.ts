import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

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

	}
}
