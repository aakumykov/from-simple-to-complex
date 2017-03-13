import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';

import { RegionList } from '../list/list';
import { RegionShow } from '../show/show';
import { RegionCreate } from '../create/create';

@Component({
  selector: 'region-list-page',
  templateUrl: 'list-page.html'
})

export class RegionListPage {

	public list: Region[];
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  	) {}

	// -- события angular2 --
	ngOnInit(){
		console.info('*ngOnInit* (RegionListPage)');
		this.getList();
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

	getList() {
		console.info('RegionListPage.getList()');

		this.regionService.getList().subscribe(
			list => {
				this.list = list;
				// console.info('----- this.list -----');
				// console.info(this.list);
				// console.info('----------------------------------');
			},
			error => this.errorMsg = error,
		);
	}

	create() {
		console.info('RegionListPage.create()');

		this.navCtrl.push(RegionCreate);
	}
}
