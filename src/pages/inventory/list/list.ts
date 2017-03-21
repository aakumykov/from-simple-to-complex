import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../../../services/inventory.service';
import { InventoryCreate } from '../create/create';
import { InventoryShow } from '../show/show';


@Component({
  selector: 'inventory-list-page',
  templateUrl: 'list.html',
  providers: [ Inventory ],
})

export class InventoryList {

	public list: Inventory[];
	
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private inventoryService: InventoryService,
  	) {}


	ngOnInit(){
		console.info('*ngOnInit* (InventoryList)');
		this.getInventoryList();
	}

	show(id: number){
		// console.info('------- InventoryList.show() ------');
		// console.info(arg);
		// console.info('------------------------------------');
		this.navCtrl.push(InventoryShow, {id:id});
	}

	create() {
		console.info('InventoryList.create()');
		this.navCtrl.push(InventoryCreate);
	}

	private getInventoryList() {
		console.info('InventoryList.getInventoryList()');

		this.inventoryService.getInventoryList().subscribe(
			list => {
				this.list = list;
			},
			error => this.errorMsg = error,
		);
	}
}
