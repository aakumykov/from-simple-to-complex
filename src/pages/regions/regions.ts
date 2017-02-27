import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Region } from './region';
import { RegionsService } from './regions.service';

@Component({
  selector: 'regions',
  templateUrl: 'regions.html'
})

export class RegionsPage {
	regions: Region[];

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private regionsService: RegionsService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad, RegionsPage');
    this.regions = this.regionsService.qwerty();
  }

  ngOnInit(): void {
  	console.log('ngOnInit, RegionsPage');
  }

}
