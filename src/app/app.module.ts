import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { RegionService } from '../pages/region/region.service';
import { RegionList } from '../pages/region/list/list';
import { RegionListPage } from '../pages/region/list-page/list-page';
import { RegionCreate } from '../pages/region/create/create';
import { RegionShow } from '../pages/region/show/show';
import { RegionEdit } from '../pages/region/edit/edit';

import { PlaceService } from '../pages/place/place.service';
import { PlaceList } from '../pages/place/list/list';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionList,
    RegionListPage,
    RegionCreate,
    RegionShow,
    RegionEdit,
    PlaceList,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionList,
    RegionListPage,
    RegionCreate,
    RegionShow,
    RegionEdit,
    PlaceList,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionService,
    PlaceService,
  ]
})

export class AppModule {}
