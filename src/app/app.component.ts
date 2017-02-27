import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';
import { RegionsPage } from '../pages/regions/regions';


@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') nav: NavController;

	homePage = HomePage;
	regionsPage = RegionsPage;

	rootPage = this.homePage;

	constructor(public menuCtrl: MenuController){}

	ngOnInit(): void {
		console.log('ngOnInit(), MyApp');
	}

	ngAfterViewInit(){
		console.log('ngAfterViewInit(), MyApp');
		// this.menuCtrl.open();
		this.nav.push(this.regionsPage);
	}

	openPage(page){
		// console.info('openPage()');
		// console.info(page);
		this.nav.push(page);
		this.menuCtrl.close();
	}
}
