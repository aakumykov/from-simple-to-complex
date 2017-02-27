import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Region } from './region';
import { RegionsService } from './regions.service';

@Component({
	selector: 'regions',
	templateUrl: 'regions.html'
})

export class RegionsPage {
	public regions; //:any ?

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private regionsService: RegionsService,
	) {}

	ionViewDidLoad() {
			console.log('ionViewDidLoad, RegionsPage');
		this.regions = this.getRegions();
	}

	ngOnInit(): void {
			console.log('ngOnInit, RegionsPage');
		//this.regions = this.getRegions();
	}

	getRegions() {
		console.info('RegionsPage.getRegions()');
		
		this.regionsService.regions().subscribe(
			data => {
				console.log('----- data -----');
				console.log(data);
				console.log('----------------');

				this.regions = data.json();
				//this.regions = [{"id":1,"name":"Западная Сибирь"},{"id":2,"name":"Восточная Сибирь"},{"id":3,"name":"Восточная Сибирь"},{"id":4,"name":"Дальний Восток"}];

				console.info('----- this.regions -----')
				console.info(this.regions);
				console.info('------------------------')
			},
			err => {
				console.log('----- error -----');
				console.log(err)
				console.log('-----------------');
			},
			() => console.info('getRegions выполнено')
		);
	}
}
