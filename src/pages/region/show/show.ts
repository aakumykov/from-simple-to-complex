import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Region } from '../region.class';

import { RegionService } from '../region.service';

import { RegionEdit } from '../edit/edit';
import { RegionListPage } from '../list-page/list-page';
// import { PlaceList } from '../../place/list/list';


@Component({
  selector: 'region-show',
  templateUrl: 'show.html'
})

export class RegionShow {

	// public region: Region;

	public id: number;
	public name: string;
	public description: string;

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {
  		this.id = this.navParams.get('id');
  		console.info('RegionShow.constructor(), id='+this.id);
  	}
	
	ngOnInit(){
		console.info('*ngOnInit* (RegionShow)');
		this.getRegion();
	}

	getRegion() {
		console.info('RegionShow.getRegion('+this.id+')');

		this.regionService.getRegion(this.id).subscribe(
			region => {

				this.id = region.id;
				this.name = region.name;
				this.description = region.description;
			},
			error => this.errorMsg = error,
		);
	}


	

	//  ionViewCanLoad(arg)   { console.info('*ionViewCanLoad*'+arg); }
	//  ionViewWillLoad(arg)   { console.info('*ionViewWillLoad*'+arg); }
	// ionViewDidLoad(arg)   { console.info('*ionViewDidLoad*'+arg); }

	// ionViewCanEnter(arg)  { console.info('*ionViewCanEnter*'+arg); }	
	// ionViewWillEnter(arg) { console.info('*ionViewWillEnter*'+arg); }
	// ionViewDidEnter(arg)  { console.info('*ionViewDidEnter*'+arg); }
	
	// ionViewCanLeave(arg)  { console.info('*ionViewCanLeave*'+arg); }
	// ionViewWillLeave(arg) { console.info('*ionViewWillLeave*'+arg); }
	// ionViewDidLeave(arg)  { console.info('*ionViewDidLeave*'+arg); }
}
