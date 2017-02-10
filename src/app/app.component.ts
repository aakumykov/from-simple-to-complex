import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { TitlePage } from '../pages/title/title';
import { GridPage } from '../pages/grid/grid';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') nav: NavController;

	homePage = HomePage;
	titlePage = TitlePage;
	blankPage = BlankPage;
	gridPage = GridPage;

	rootPage = this.gridPage;

	constructor(public menuCtrl: MenuController){}

	openPage(page){
		this.nav.push(page);
		this.menuCtrl.close();
	}
}
