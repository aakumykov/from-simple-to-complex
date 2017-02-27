import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { TitlePage } from '../pages/title/title';
import { GridPage } from '../pages/grid/grid';
import { CardsPage } from '../pages/cards/cards';
import { VideoPage } from '../pages/video/video';
import { VideoGridPage } from '../pages/video-grid/video-grid';
import { GifGridPage } from '../pages/gif-grid/gif-grid';
import { RegionsPage } from '../pages/regions/regions';

import { RegionsService } from '../pages/regions/regions.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlankPage,
    TitlePage,
    GridPage,
    CardsPage,
    VideoPage,
    VideoGridPage,
    GifGridPage,
    RegionsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlankPage,
    TitlePage,
    GridPage,
    CardsPage,
    VideoPage,
    VideoGridPage,
    GifGridPage,
    RegionsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegionsService,
  ]
})

export class AppModule {}
