import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';

import { RegionListPage } from '../pages/region/list-page/list-page';
// import { RegionCreate } from '../pages/region/create/create';
// import { RegionShow } from '../pages/region/show/show';
// import { RegionEdit } from '../pages/region/edit/edit';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') nav: NavController;

	// свойства
	homePage = HomePage;
	regionListPage = RegionListPage;

	rootPage = this.homePage;

	// методы
	constructor(public menuCtrl: MenuController){}

	ngAfterViewInit(){
		// console.log('ngAfterViewInit(), MyApp');
		// this.menuCtrl.open();
		this.nav.push(this.regionListPage);
	}

	goHomePage() {
		this.openPage(RegionListPage);
	}

	goRegionListPage(){
		this.openPage(RegionListPage);
	}

	private openPage(page){
		console.info('MyApp.openPage()');
		this.nav.push(page);
		this.menuCtrl.close();
	}
}
