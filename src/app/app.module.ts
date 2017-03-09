import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { RegionList } from '../pages/region/list/list';
import { RegionShow } from '../pages/region/show/show';
import { RegionService } from '../pages/region/region.service'; // => region.service


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionList,
    RegionShow,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionList,
    RegionShow,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionService,
  ]
})

export class AppModule {}
