import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  sec=5
  timer=null
  isShow=true //是否显示倒计时
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    this.timer=setInterval(()=>{
      this.sec--
      if(this.sec==0){
        if(this.navCtrl.canGoBack()){ //能否返回
          this.navCtrl.pop() //返回上一页
        }else{
          //不可以返回，倒计时不显示
          this.isShow=false
        }
      }
    },1000)
  }

  ionViewWillLeave(){ //当页面离开时，执行清理工作：关闭定时器
    clearInterval(this.timer)
  }
}
