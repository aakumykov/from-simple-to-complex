import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { RegionsPage } from '../pages/regions/regions.component';
import { RegionDetailPage } from '../pages/regions/region-detail.component'

import { RegionsService } from '../pages/regions/regions.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionsPage,
    RegionDetailPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionsPage,
    RegionDetailPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionsService,
  ]
})

export class AppModule {}
