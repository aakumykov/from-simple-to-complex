import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { TitlePage } from '../pages/title/title';
import { GridPage } from '../pages/grid/grid';
import { CardsPage } from '../pages/cards/cards';
import { VideoPage } from '../pages/video/video';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlankPage,
    TitlePage,
    GridPage,
    CardsPage,
    VideoPage,
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
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
