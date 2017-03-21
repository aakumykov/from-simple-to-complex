import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../../../services/inventory.service';
import { InventoryShow } from '../show/show';

@Component({
	selector: 'inventory-create',
	templateUrl: '../edit/edit.html',
	providers: [ Inventory ],
})

export class InventoryCreate {
	public title = 'Добавление нового района';

	public name: string;
	public description: string;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private inventoryService: InventoryService,
	){}

	save() { // общее имя с компонентом edit
		console.info('InventoryCreate.save()');

		let data = {
			name: this.name,
			description: this.description,
		}

		this.inventoryService.createInventory(data).subscribe(
			inventory => {
				// this.infoMsg = 'Район <?> создан '+inventory.id;
				this.navCtrl.push(InventoryShow, {id:inventory.id});

				// let active = this.navCtrl.getActive()
				// let currentIndex = this.navCtrl.indexOf(active);
				// let createView = this.navCtrl.getByIndex(currentIndex-1);
				
				// this.navCtrl.removeView(createView);
				// this.navCtrl.remove(currentIndex-2, 1);
			},
			error => this.errorMsg = error
		);
	}

	cancel() {
		console.info('InventoryCreate.cancel()');
		this.navCtrl.pop();
	}
}