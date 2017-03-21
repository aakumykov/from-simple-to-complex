import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { @Name@ } from '../@name@.class';
import { @Name@Service } from '../../../services/@name@.service';
import { @Name@Show } from '../show/show';

@Component({
	selector: '@name@-edit',
	templateUrl: 'edit.html',
	providers: [ @Name@ ],
})

export class @Name@Edit {
	
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
		private @name@Service: @Name@Service,
	){
		this.id = this.navParams.get('id');
		this.name = this.navParams.get('name');
		this.description = this.navParams.get('description');

		this.title = 'Изменение района «'+this.name+'»';
	}

	save(){
		console.info('@Name@Edit.save()');
		
		this.@name@Service.update@Name@(
			{
				id: this.id, 
				name: this.name, 
				description: this.description
			}
		).subscribe(
			@name@ => { 
				this.infoMsg = 'сохранено'; 

				this.navCtrl.push(@Name@Show,{id:this.id});
			},
			error => { this.errorMsg = error }
		);
	}

	cancel(){
		console.info('@Name@Edit.cancel()');
		this.navCtrl.pop();
	}
	
	ionViewDidLeave()  { 
		console.info('edit: *ionViewDidLeave*'); 
		// this.clearNavHistory();
	}
}
