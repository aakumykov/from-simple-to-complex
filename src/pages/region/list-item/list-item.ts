import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';

import { RegionListPage } from '../list-page/list-page';
import { RegionShow } from '../show/show';
// import { RegionCreate } from '../create/create';

@Component({
	selector: 'list-item',
	templateUrl: 'list-item.html'
})

export class ListItem {

	@Input() item: Region;
	
	public infoMsg: string;
	public errorMsg: string;

	constructor(
		public navCtrl: NavController, 
		// public navParams: NavParams,
		private regionService: RegionService,
	) {}

	showItem(id: number) {
		console.info('ListItem.showRegion('+id+')');
		
		this.navCtrl.push(RegionShow, { id: id });
	}

	removeItem(item: Region) {
		console.info('ListItem.removeItem(), item.id: '+item.id+')');

		this.regionService.removeRegion(item.id).subscribe(
			() => { 
				this.infoMsg = 'объект удалён';
				this.navCtrl.push(RegionListPage);
			},
			error => this.errorMsg = error
		);
	}
}
