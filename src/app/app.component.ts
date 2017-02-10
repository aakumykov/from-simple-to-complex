import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { TitlePage } from '../pages/title/title';
import { GridPage } from '../pages/grid/grid';
import { CardsPage } from '../pages/cards/cards';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') nav: NavController;

	homePage = HomePage;
	titlePage = TitlePage;
	blankPage = BlankPage;
	gridPage = GridPage;
	cardsPage = CardsPage;

	rootPage = this.homePage;

	constructor(public menuCtrl: MenuController){}

	ngAfterViewInit(){
		console.log('ngAfterViewInit()');
		// this.menuCtrl.open();
		this.nav.push(this.cardsPage);
	}

	openPage(page){
		// console.info('openPage()');
		// console.info(page);
		this.nav.push(page);
		this.menuCtrl.close();
	}
}
