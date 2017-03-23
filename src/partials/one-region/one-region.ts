import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { RegionService } from '../../services/region.service';
import { RegionShow } from '../../pages/region/show/show';

@Component({
  selector: 'one-region',
  templateUrl: 'one-region.html',
})

export class OneRegion {

	@Input() id: number;

	public name: string;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		private regionService: RegionService,
		private navCtrl: NavController,
	){}

	ngOnInit(){
		console.info('*ngOnInit*, OneRegion, id='+this.id);
		this.getRegion(this.id);
	}

	showRegion() {
		console.info('OneRegion.showRegion(), id: '+this.id);
		this.navCtrl.push(RegionShow, {id:this.id});
	}

	private getRegion(id: number) {
		console.info('OneRegion.getRegion('+id+')');
		this.regionService.getRegion(id).subscribe(
			region => {
				this.name = region.name;
				console.info('OneRegion.getRegion('+id+'), data recived');
			},
			error => this.errorMsg = error
		);
	}
}
