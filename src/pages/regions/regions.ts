import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from './region';
import { RegionsService } from './regions.service';

@Component({
	selector: 'regions',
	templateUrl: 'regions.html'
})

export class RegionsPage {
	// конструктор
	constructor(private regionsService: RegionsService){}

	// переменные
	regions: Region[];
	errorMsg: string;
	infoMsg: string = 'инфа 100%';

	// внешние методы
	ngOnInit(){
		this.getRegions();
	}

	// внутренние методы
	private getRegions(){
		this.regionsService.getRegions().subscribe(
			regions => this.regions = regions,
			error => this.errorMsg = <any>error//,
			// () => this.infoMsg = 'RegionsPage.getRegions() отработал'
		);
	}
}
