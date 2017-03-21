import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../../../services/inventory.service';
import { InventoryShow } from '../show/show';

@Component({
	selector: 'inventory-edit',
	templateUrl: 'edit.html',
	providers: [ Inventory ],
})

export class InventoryEdit {
	
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
		private inventoryService: InventoryService,
	){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
		this.description = this.navParams.get('description');

		this.title = 'Изменение района «'+this.name+'»';
	}

	save(){
		console.info('InventoryEdit.save()');
		
		this.inventoryService.updateInventory(
			{
				id: this.id, 
				name: this.name, 
				description: this.description
			}
		).subscribe(
			inventory => { 
				this.infoMsg = 'сохранено'; 

				this.navCtrl.push(InventoryShow,{id:this.id});
			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('InventoryEdit.cancel()');
		this.navCtrl.pop();
	}
	
	ionViewDidLeave()  { 
		console.info('edit: *ionViewDidLeave*'); 
		// this.clearNavHistory();
	}
}
