import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Region } from '../region.class';
import { ListItem } from '../list-item/list-item';

@Component({
  selector: 'region-list',
  templateUrl: 'list.html'
})

export class RegionList {

	@Input() list: Region[];

	@Output() show: EventEmitter<number> = new EventEmitter<number>();

	public infoMsg: string;
	public errorMsg: string;

	showRequest(id: number) {
		console.info('RegionList.showRequest('+id+')');
		this.show.emit(id);
	}
}
