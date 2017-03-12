import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { RegionList } from '../pages/region/list/list';
import { RegionCreate } from '../pages/region/create/create';
import { RegionShow } from '../pages/region/show/show';
import { RegionEdit } from '../pages/region/edit/edit';
import { RegionService } from '../pages/region/region.service';

import { PlaceService } from '../pages/place/place.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionList,
    RegionCreate,
    RegionShow,
    RegionEdit,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionList,
    RegionCreate,
    RegionShow,
    RegionEdit,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionService,
    PlaceService,
  ]
})

export class AppModule {}
