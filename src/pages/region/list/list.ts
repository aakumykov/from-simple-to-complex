import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { @Name@ } from '../@name@.class';
import { @Name@Service } from '../../../services/@name@.service';
import { @Name@Create } from '../create/create';
import { @Name@Show } from '../show/show';


@Component({
  selector: '@name@-list-page',
  templateUrl: 'list.html',
  providers: [ @Name@ ],
})

export class @Name@List {

	public list: @Name@[];
	
	public infoMsg: string;
	public errorMsg: string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private @name@Service: @Name@Service,
  	) {}


	ngOnInit(){
		console.info('*ngOnInit* (@Name@List)');
		this.get@Name@List();
	}

	show(id: number){
		// console.info('------- @Name@List.show() ------');
		// console.info(arg);
		// console.info('------------------------------------');
		this.navCtrl.push(@Name@Show, {id:id});
	}

	create() {
		console.info('@Name@List.create()');
		this.navCtrl.push(@Name@Create);
	}

	private get@Name@List() {
		console.info('@Name@List.get@Name@List()');

		this.@name@Service.get@Name@List().subscribe(
			list => {
				this.list = list;
			},
			error => this.errorMsg = error,
		);
	}
}
