import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Region } from '../region.class';
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

				// this.clearNavHistory(2);

				// let active = this.navCtrl.getActive()
				// let currentIndex = this.navCtrl.indexOf(active);
				// let editView = this.navCtrl.getByIndex(currentIndex-1);
				
				// this.navCtrl.removeView(editView);
				// this.navCtrl.remove(currentIndex-2, 1);

			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('RegionEdit.cancel()');
		this.navCtrl.pop();
	}


	// --- события ionic2 ---
	// ionViewCanEnter()  { console.info('edit: *ionViewCanEnter*'); }
	// ionViewWillEnter() { console.info('edit: *ionViewWillEnter*'); }
	// ionViewDidEnter()  { console.info('edit: *ionViewDidEnter*'); }
	
	// ionViewCanLoad()   { console.info('edit: *ionViewCanLoad*'); }
	// ionViewWillLoad()   { console.info('edit: *ionViewWillLoad*'); }
	// ionViewDidLoad()   { console.info('edit: *ionViewDidLoad*'); }
	
	// ionViewCanLeave()  { console.info('edit: *ionViewCanLeave*'); }
	// ionViewWillLeave() { console.info('edit: *ionViewWillLeave*'); }
	
	ionViewDidLeave()  { 
		console.info('edit: *ionViewDidLeave*'); 
		// this.clearNavHistory();
	}

	// ionViewCanUnload(){ console.info('edit: *ionViewCanUnload*'); }
	// ionViewWillUnload(){ console.info('edit: *ionViewWillUnload*'); }
	// ionViewDidUnload(){ console.info('edit: *ionViewDidUnload*'); }

	// private clearNavHistory(depth: number = 1){
	// 	console.info('RegionEdit.clearNavHistory()');

	// 	// let active = this.navCtrl.getActive();
	// 	// let currentIndex = this.navCtrl.indexOf(active);
		
	// 	let previous1View = this.navCtrl.getPrevious();
	// 	console.info(previous1View);
	// 	this.navCtrl.removeView(previous1View);
		
	// 	if (2==depth) {
	// 		let previous2View = this.navCtrl.getPrevious(previous1View);
	// 		console.info(previous2View);
	// 		this.navCtrl.removeView(previous2View);
	// 	}
	// }
}
