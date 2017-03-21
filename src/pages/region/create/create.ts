import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { @Name@ } from '../@name@.class';
import { @Name@Service } from '../../../services/@name@.service';
import { @Name@Show } from '../show/show';

@Component({
	selector: '@name@-create',
	templateUrl: '../edit/edit.html',
	providers: [ @Name@ ],
})

export class @Name@Create {
	public title = 'Добавление нового района';

	public name: string;
	public description: string;

	public infoMsg: string;
	public errorMsg: string;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private @name@Service: @Name@Service,
	){}

	save() { // общее имя с компонентом edit
		console.info('@Name@Create.save()');

		let data = {
			name: this.name,
			description: this.description,
		}

		this.@name@Service.create@Name@(data).subscribe(
			@name@ => {
				// this.infoMsg = 'Район <?> создан '+@name@.id;
				this.navCtrl.push(@Name@Show, {id:@name@.id});

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
		console.info('@Name@Create.cancel()');
		this.navCtrl.pop();
	}
}