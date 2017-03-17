import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Region } from '../region.class';


@Component({
	selector: 'list-item',
	templateUrl: 'list-item.html'
})

export class ListItem {

	/*public*/ @Input() item: Region;
	@Output() show: EventEmitter<number> = new EventEmitter<number>();
	@Output() edit: EventEmitter<number> = new EventEmitter<number>();
	@Output() remove: EventEmitter<number> = new EventEmitter<number>();
	
	public infoMsg: string;
	public errorMsg: string;

	showRequest(item: Region, slidingItem) {
		console.info('ListItem.showRequest('+item.id+')');
		this.show.emit(item.id);
	}

	editRequest(item: Region, slidingItem) {
		console.info('ListItem.editRequest('+item.id+')');
		this.edit.emit(item.id);
	}

	removeRequest(item: Region, slidingItem) {
		console.info('ListItem.removeRequest(), item.id: '+item.id+')');
		this.remove.emit(item.id);
	}
}
