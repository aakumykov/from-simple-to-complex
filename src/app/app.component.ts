import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';

import { RegionList } from '../pages/region/list/list';
import { RegionShow } from '../pages/region/show/show';
import { RegionEdit } from '../pages/region/edit/edit';

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

	ngAfterViewInit(){
		// console.log('ngAfterViewInit(), MyApp');
		// this.menuCtrl.open();
		this.nav.push(this.regionListPage);
	}

	goHomePage() {
		this.openPage(RegionList);
	}

	goRegionList(){
		this.openPage(RegionList);
	}

	private openPage(page){
		console.info('MyApp.openPage()');
		this.nav.push(page);
		this.menuCtrl.close();
	}
}
