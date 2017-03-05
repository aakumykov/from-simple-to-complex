import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { RegionsList } from '../pages/regions/regions-list/regions-list';
import { RegionDetails } from '../pages/regions/region-details/region-details'
import { RegionsService } from '../pages/regions/regions.service'; // => region.service


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionsList,
    RegionDetails,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionsList,
    RegionDetails,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionsService,
  ]
})

export class AppModule {}
