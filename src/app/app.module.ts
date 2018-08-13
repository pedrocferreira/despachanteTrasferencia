import { CaminhaoPage } from './../pages/caminhao/caminhao';
import { CarroPage } from './../pages/carro/carro';

import { OrcamentoPage } from './../pages/orcamento/orcamento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MotoPage } from '../pages/moto/moto';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrcamentoPage,
    MotoPage,
    CarroPage,
    CaminhaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrcamentoPage,
    MotoPage,
    CarroPage,
    CaminhaoPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
