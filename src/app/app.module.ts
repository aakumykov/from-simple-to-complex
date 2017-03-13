import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { RegionList } from '../pages/region/list/list';
import { RegionCard } from '../pages/region/card/card';
import { RegionListPage } from '../pages/region/list-page/list-page';
import { RegionCreate } from '../pages/region/create/create';
import { RegionShow } from '../pages/region/show/show';
import { RegionEdit } from '../pages/region/edit/edit';
import { RegionService } from '../pages/region/region.service'; // => region.service


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionList,
    RegionCard,
    RegionListPage,
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
    RegionCard,
    RegionListPage,
    RegionCreate,
    RegionShow,
    RegionEdit,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionService,
  ]
})

export class AppModule {}
