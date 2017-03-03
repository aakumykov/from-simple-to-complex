import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { RegionsPage } from '../pages/regions/regions.component';
import { RegionDetailsPage } from '../pages/regions/region-details.component'

import { RegionsService } from '../pages/regions/regions.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionsPage,
    RegionDetailsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionsPage,
    RegionDetailsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionsService,
  ]
})

export class AppModule {}
