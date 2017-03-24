import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';
import { RegionList } from '../pages/region/list/list';
import { PlaceList } from '../pages/place/list/list';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') navCtrl: NavController;

	// свойства
	rootPage = HomePage;

	// методы
	constructor(public menuCtrl: MenuController){}

	ngAfterViewInit(){
		console.log('*ngAfterViewInit*, MyApp');
		// this.menuCtrl.open();
		// this.goRegionListPage();
	}

	goHomePage() {
		console.info('MyApp.goHomePage()');
		this.openPage(HomePage);
		// this.navCtrl.push(HomePage);
	}

	goRegionListPage(){
		console.info('MyApp.goRegionListPage()');
		this.openPage(RegionList);
	}

	goPlaceListPage(){
		console.info('MyApp.goPlaceListPage()');
		this.openPage(PlaceList);
	}

	private openPage(page){
		console.info('MyApp.openPage()');
		this.navCtrl.push(page);
		this.menuCtrl.close();
	}
}
