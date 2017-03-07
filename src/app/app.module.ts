import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { RegionList } from '../pages/region/list/list';
// import { RegionDetails } from '../pages/regions/region-details/region-details'
import { RegionService } from '../pages/region/region.service'; // => region.service


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionList,
    // RegionDetails,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionList,
    // RegionDetails,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionService,
  ]
})

export class AppModule {}
