import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { RegionService } from '../../services/region.service';

@Component({
  selector: 'one-region',
  templateUrl: 'one-region.html',
})

export class OneRegion {

	@Input() id: number;
	@Output() showEvent: EventEmitter<number> = new EventEmitter<number>();

	public name: string;
	// public region_id: number;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		private regionService: RegionService,
		private navCtrl: NavController,
	){
		console.info('OneRegion.constructor('+this.id+')');
		console.info(' id: '+this.id);
	}

	ngOnInit(){
		console.info('*ngOnInit*, OneRegion, id='+this.id);
		// this.getRegion(this.id);
	}



	makeShowEvent(id: number) {
		console.info('OneRegion.makeShowEvent('+id+')');
	}

	private getRegion(id: number) {
		console.info('OneRegion.getRegion('+id+')');
		this.regionService.getRegion(id).subscribe(
			region => {
				this.name = region.name;
			},
			error => this.errorMsg = error
		);
	}
}
