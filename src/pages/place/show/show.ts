import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

// import { Place } from '../place.class';
import { PlaceService } from '../../../services/place.service';
import { PlaceEdit } from '../edit/edit';
import { PlaceList } from '../list/list';

import { OneRegion } from '../../../partials/one-region/one-region';

@Component({
  selector: 'place-show',
  templateUrl: 'show.html'
})

export class PlaceShow {

	public id: number;
	public name: string;
	public description: string;
	public region_id: number;

	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private placeService: PlaceService,
  		private actionSheetCtrl: ActionSheetController,
  	) {
  		this.id = this.navParams.get('id');
  		console.info('PlaceShow.constructor(), id='+this.id);
  	}
	
	ngOnInit(){
		console.info('*ngOnInit* (PlaceShow)');
		this.getPlace();
	}

	editItem() {
		console.info('PlaceShow.editItem('+this.id+')');
		let data = {
			id: this.id,
			name: this.name,
			description: this.description,
			region_id: this.region_id,
		}
		this.navCtrl.push(PlaceEdit,data);
	}

	removeItem() {
		console.info('PlaceShow.removeItem()');
		this.presentActionSheet();
	}


	private getPlace() {
		console.info('PlaceShow.getPlace('+this.id+')');

		this.placeService.getPlace(this.id).subscribe(
			place => {
				this.id = place.id;
				this.name = place.name;
				this.description = place.description;
				this.region_id = place.region_id;
				console.info('region_id: '+this.region_id);
			},
			error => this.errorMsg = error,
		);
	}

	private presentActionSheet(){
		console.info('PlaceShow.presentActionSheet()');
		
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
		console.info('PlaceShow.removeItemReal(), id='+this.id);

		this.placeService.removePlace(this.id).subscribe(
			()=>{
				this.infoMsg = 'Удалено «'+this.name+'»';
				this.navCtrl.push(PlaceList);
			},
			error => this.errorMsg = error
		);
	}
}
