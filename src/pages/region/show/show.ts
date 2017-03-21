import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { @Name@ } from '../@name@.class';
import { @Name@Service } from '../../../services/@name@.service';
import { @Name@Edit } from '../edit/edit';
import { @Name@List } from '../list/list';


@Component({
  selector: '@name@-show',
  templateUrl: 'show.html',
  providers: [ @Name@ ],
})

export class @Name@Show {

	public id: number;
	public name: string;
	public description: string;


	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private @name@Service: @Name@Service,
  		private actionSheetCtrl: ActionSheetController,
  	) {
  		this.id = this.navParams.get('id');
  		console.info('@Name@Show.constructor(), id='+this.id);
  	}
	
	ngOnInit(){
		console.info('*ngOnInit* (@Name@Show)');
		this.get@Name@();
	}

	editItem(){
		console.info('@Name@Show.editItem()');
		let data = {
			id: this.id,
			name: this.name,
			description: this.description,
		}
		this.navCtrl.push(@Name@Edit,data);
	}

	removeItem() {
		console.info('@Name@Show.removeItem()');
		this.presentActionSheet();
	}


	private get@Name@() {
		console.info('@Name@Show.get@Name@('+this.id+')');

		this.@name@Service.get@Name@(this.id).subscribe(
			@name@ => {
				this.id = @name@.id;
				this.name = @name@.name;
				this.description = @name@.description;
			},
			error => this.errorMsg = error,
		);
	}

	private presentActionSheet(){
		console.info('@Name@Show.presentActionSheet()');
		
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
		console.info('@Name@Show.removeItemReal(), id='+this.id);

		this.@name@Service.remove@Name@(this.id).subscribe(
			()=>{
				this.infoMsg = 'Удалено «'+this.name+'»';
				this.navCtrl.push(@Name@List);
			},
			error => this.errorMsg = error
		);
	}
}
