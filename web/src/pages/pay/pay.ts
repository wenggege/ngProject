import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular'
import {LoadingController} from 'ionic-angular'


/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private myLoading:LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');

  }

  //关闭模态窗口(ViewController)
  closeModal(){
    this.viewCtrl.dismiss(false) //传参
  }

  //显示一个3s的loading显示窗口,3s之后关闭模态窗口，并传值true
  showLoading(){
    var myLoading=this.myLoading.create({
      content:'支付中...'
    })
    myLoading.present()
    setTimeout(()=>{
      myLoading.dismiss()
      this.viewCtrl.dismiss(true)
    },3000)
  }
}
