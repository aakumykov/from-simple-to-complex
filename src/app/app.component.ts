import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController } from 'ionic-angular';

import { HomePage  } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { TitlePage } from '../pages/title/title';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild('content') nav: NavController;
	rootPage = HomePage;

	constructor(){}

	// ngAfterViewInit() {
	// 	console.info('ngAfterViewInit()');
	// 	//console.info(this.rootPage);
	// 	// this.nav.push(TitlePage);
	// }

	openPage(page){
		console.info('openPage(), page:');
		console.info(page);
		this.nav.push(page);
	}
}
