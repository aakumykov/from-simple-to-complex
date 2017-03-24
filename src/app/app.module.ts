import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Region } from '../pages/region/region.class';

import { RegionService } from '../services/region.service';
import { RegionList } from '../pages/region/list/list';
import { RegionCreate } from '../pages/region/create/create';
import { RegionShow } from '../pages/region/show/show';
import { RegionEdit } from '../pages/region/edit/edit';

import { PlaceService } from '../services/place.service';
import { PlaceList } from '../pages/place/list/list';
import { PlaceCreate } from '../pages/place/create/create';
import { PlaceShow } from '../pages/place/show/show';
import { PlaceEdit } from '../pages/place/edit/edit';

import { LoadingSplashService } from '../services/loading-splash.service';

// Partials
import { List } from '../partials/list/list';
import { PlacesOfRegion } from '../partials/places-of-region/places-of-region';
import { OneRegion } from '../partials/one-region/one-region';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    RegionList,
    RegionCreate,
    RegionShow,
    RegionEdit,
    
    PlaceList,
    PlaceCreate,
    PlaceShow,
    PlaceEdit,

    List,
    PlacesOfRegion,
    OneRegion,
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
    
    PlaceList,
    PlaceCreate,
    PlaceShow,
    PlaceEdit,

    List,
    PlacesOfRegion,
    OneRegion,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingSplashService,
    RegionService,
    PlaceService,
    Region,
    // Place,
  ]
})

export class AppModule {}
