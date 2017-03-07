import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';

import { RegionList } from '../pages/region/list/list';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') nav: NavController;

	// свойства
	homePage = HomePage;
	regionListPage = RegionList;

	rootPage = this.homePage;

	// методы
	constructor(public menuCtrl: MenuController){}

	ngOnInit(): void {
		console.log('ngOnInit(), MyApp');
	}

	ngAfterViewInit(){
		console.log('ngAfterViewInit(), MyApp');
		// this.menuCtrl.open();
		this.nav.push(this.homePage);
	}

	openPage(page){
		this.nav.push(page);
		this.menuCtrl.close();
	}
}
