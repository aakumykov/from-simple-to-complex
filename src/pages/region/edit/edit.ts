import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionShow } from '../show/show';

@Component({
	selector: 'region-edit',
	templateUrl: 'edit.html'
})

export class RegionEdit {
	
	// переменные
	public errorMsg: string;
	public infoMsg: string;

	public id: number;
	public name: string;
	public description: string;

	public title: string;

	// конструктор
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private regionService: RegionService,
	){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
		this.description = this.navParams.get('description');

		this.title = 'Изменение района «'+this.name+'»';
	}

	save(){
		console.info('RegionEdit.save()');
		
		this.regionService.updateRegion(
			{
				id: this.id, 
				name: this.name, 
				description: this.description
			}
		).subscribe(
			region => { 
				this.infoMsg = 'сохранено'; 

				this.navCtrl.push(RegionShow,{id:this.id});

				let active = this.navCtrl.getActive()
				let currentIndex = this.navCtrl.indexOf(active);
				let editView = this.navCtrl.getByIndex(currentIndex-1);
				
				this.navCtrl.removeView(editView);
				this.navCtrl.remove(currentIndex-2, 1);

			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('RegionEdit.cancel()');
		this.navCtrl.pop();
	}

	// private inspectNav(){
	// 	let nc = this.navCtrl;

	// 	let first = nc.first();
	// 	let last = nc.last();
	// 	let active = nc.getActive();
	// 	let previous = nc.getPrevious();

	// 	console.info('first: '+first.component.name+', '+nc.indexOf(first));
	// 	console.info('last: '+last.component.name+', '+nc.indexOf(last));
	// 	console.info('active: '+active.component.name+', '+nc.indexOf(active));
	// 	console.info('previous: '+previous.component.name+', '+nc.indexOf(previous));

	// 	console.info('--- vews: ---');
	// 	console.info( nc.getViews() );

	// 	for (let i in nc.getViews()) {
	// 		console.info(i);
	// 	}
	// }
}
