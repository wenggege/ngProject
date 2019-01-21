import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from '../index/index'
import {CartPage} from '../cart/cart'
import {UserCenterPage} from '../user-center/user-center'
import {NotFoundPage} from '../not-found/not-found';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  //将引入的page保存在类的内部成员变量中
  tab1=IndexPage
  tab2=CartPage
  tab3=UserCenterPage
  tab4=NotFoundPage
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

}
