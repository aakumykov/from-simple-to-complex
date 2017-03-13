import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { RegionService } from '../region.service';


@Component({
  selector: 'region-card',
  templateUrl: 'card.html'
})

export class RegionCard {

	@Input() id: number;

	name: string;
	description: string;
	
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {
  	}

	ngOnInit(){
		console.info('*ngOnInit* (RegionCard), id='+this.id);
		this.getRegion();
	}

	edit(){
		console.info('RegionCard.edit()');
	}

	remove(){
		console.info('RegionCard.remove()');
	}

	private getRegion() {
		console.info('RegionCard.getRegion()');

		this.regionService.getRegion(this.id).subscribe(
			region => {
				this.name = region.name;
				this.description = region.description;
			},
			error => this.errorMsg = error,
		);
	}
}
