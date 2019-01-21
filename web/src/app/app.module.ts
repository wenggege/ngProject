import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IndexPage} from '../pages/index/index';
import {CartPage} from '../pages/cart/cart';
import {DetailPage} from '../pages/detail/detail';
import {LoginPage} from '../pages/login/login';
import {NotFoundPage} from '../pages/not-found/not-found';
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import {PayPage} from '../pages/pay/pay';
import {UserCenterPage} from '../pages/user-center/user-center'
import {MyHttpService} from './utility/service/myhttp.service' //引入服务类


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    CartPage,
    DetailPage,
    LoginPage,
    NotFoundPage,
    OrderConfirmPage,
    PayPage,
    UserCenterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    CartPage,
    DetailPage,
    LoginPage,
    NotFoundPage,
    OrderConfirmPage,
    PayPage,
    UserCenterPage
  ],
  providers: [
    MyHttpService,   //引入服务类
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
