import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionListPage } from '../list-page/list-page';
import { RegionShow } from '../show/show';
import { RegionEdit } from '../edit/edit';

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

	removeItem(item: Region, slidingItem) {
		console.info('ListItem.removeItem(), item.id: '+item.id+')');

		this.regionService.removeRegion(item.id).subscribe(
			() => { 
				this.infoMsg = 'объект удалён';
				this.navCtrl.push(RegionListPage);
			},
			error => this.errorMsg = error
		);
	}

	editItem(item: Region, slidingItem) {
		console.info('ListItem.editItem('+item.id+')');

		this.navCtrl.push(RegionEdit, {
			id: item.id,
			name: item.name,
			description: item.description,
		});
	}
}
