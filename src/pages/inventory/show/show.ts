import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../../../services/inventory.service';
import { InventoryEdit } from '../edit/edit';
import { InventoryList } from '../list/list';


@Component({
  selector: 'inventory-show',
  templateUrl: 'show.html',
  providers: [ Inventory ],
})

export class InventoryShow {

	public id: number;
	public name: string;
	public description: string;


	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private inventoryService: InventoryService,
  		private actionSheetCtrl: ActionSheetController,
  	) {
  		this.id = this.navParams.get('id');
  		console.info('InventoryShow.constructor(), id='+this.id);
  	}
	
	ngOnInit(){
		console.info('*ngOnInit* (InventoryShow)');
		this.getInventory();
	}

	editItem(){
		console.info('InventoryShow.editItem()');
		let data = {
			id: this.id,
			name: this.name,
			description: this.description,
		}
		this.navCtrl.push(InventoryEdit,data);
	}

	removeItem() {
		console.info('InventoryShow.removeItem()');
		this.presentActionSheet();
	}


	private getInventory() {
		console.info('InventoryShow.getInventory('+this.id+')');

		this.inventoryService.getInventory(this.id).subscribe(
			inventory => {
				this.id = inventory.id;
				this.name = inventory.name;
				this.description = inventory.description;
			},
			error => this.errorMsg = error,
		);
	}

	private presentActionSheet(){
		console.info('InventoryShow.presentActionSheet()');
		
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
		console.info('InventoryShow.removeItemReal(), id='+this.id);

		this.inventoryService.removeInventory(this.id).subscribe(
			()=>{
				this.infoMsg = 'Удалено «'+this.name+'»';
				this.navCtrl.push(InventoryList);
			},
			error => this.errorMsg = error
		);
	}
}
