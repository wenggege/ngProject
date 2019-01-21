import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {PayPage} from '../pay/pay'
import {ModalController} from 'ionic-angular'


/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  myList=[]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private myService:MyHttpService,
    private myModal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    var url="http://127.0.0.1:8080/cart/list"
    this.myService.sendRequest(url,(res)=>{
      //console.log(res)
      this.myList=res.data
    })
  }
  
  //显示支付模态窗口
  showModal(){
    //将paypage作为模态窗口
    var myModal=this.myModal.create(PayPage)
    myModal.present()

    //指定模态窗口在被关闭之后要执行的处理：如果传的是true，跳转到首页
    myModal.onDidDismiss((data)=>{
      if(data){
        //跳转到首页这个tab
        //this.navCtrl.push(IndexPage)
        this.navCtrl.parent.select(0)
      }
    })
  }
}
