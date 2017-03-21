import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { Region } from '../region.class';
import { RegionService } from '../region.service';
import { RegionEdit } from '../edit/edit';
import { RegionList } from '../list/list';

@Component({
  selector: 'region-show',
  templateUrl: 'show.html'
})

export class RegionShow {

	public id: number;
	public name: string;
	public description: string;

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private regionService: RegionService,
  		private actionSheetCtrl: ActionSheetController,
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

	editItem(){
		console.info('RegionShow.editItem()');
		let data = {
			id: this.id,
			name: this.name,
			description: this.description,
		}
		this.navCtrl.push(RegionEdit,data);
	}

	removeItem() {
		console.info('RegionShow.removeItem()');
		this.presentActionSheet();
	}

	private presentActionSheet(){
		console.info('RegionShow.presentActionSheet()');
		
		let actionSheet = this.actionSheetCtrl.create({
		  title: 'Удалить «'+this.name+'»?',
		  buttons: [
		    {
		      text: 'Да',
		      role: 'destructive',
		      handler: () => {
		        console.info('Destructive clicked');
		        this.removeItemReal();
		      }
		    },{
		      text: 'Нет',
		      role: 'cancel',
		      handler: () => {
		        console.info('Cancel clicked');
		      }
		    }
		  ]
		});
		actionSheet.present();
	}

	private removeItemReal(){
		console.info('RegionShow.removeItemReal(), id='+this.id);

		this.regionService.removeRegion(this.id).subscribe(
			()=>{
				this.infoMsg = 'Удалено «'+this.name+'»';
				this.navCtrl.push(RegionList);
			},
			error => this.errorMsg = error
		);
	}
}
