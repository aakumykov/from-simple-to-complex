import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
// import { RegionList } from '../list/list';

@Component({
  selector: 'region-show',
  templateUrl: 'show.html'
})

export class RegionShow {

	public id: number;
	public name: string;
	public description: string;

	// public region: Region;

	public infoMsg: string = 'инфа 100%';
	public errorMsg: string = 'юлин, ошибка';

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {
  		this.id = this.navParams.get('id');
  		console.info('RegionShow.constructor(), id='+this.id);
  	}
	
	// -- события angular2 --
	ngOnInit(){
		console.info('*ngOnInit* (RegionShow)');
		this.getRegion();
	}
	// ngAfterContentInit(){ console.info('*ngAfterContentInit*'); }
	// ngAfterViewInit(){ console.info('*ngAfterViewInit*'); }
	// ngOnDestroy(){ console.info('*ngOnDestroy*'); }

	// --- события ionic2 ---
	// ionViewDidLoad()   { console.info('*ionViewDidLoad*'); }
	// ionViewWillEnter() { console.info('*ionViewWillEnter*'); }
	// ionViewDidEnter()  { console.info('*ionViewDidEnter*'); }
	// ionViewWillLeave() { console.info('*ionViewWillLeave*'); }
	// ionViewDidLeave()  { console.info('*ionViewDidLeave*'); }
	// ionViewWillUnload(){ console.info('*ionViewWillUnload*'); }
	// ionViewCanEnter()  { console.info('*ionViewCanEnter*'); }
	// ionViewCanLeave()  { console.info('*ionViewCanLeave*'); }


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
}
