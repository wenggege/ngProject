import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {CartPage} from '../cart/cart'
import {NotFoundPage} from '../not-found/not-found'
import {LoginPage} from '../login/login'
import {MyHttpService} from '../../app/utility/service/myhttp.service'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cart = CartPage
  notFound = NotFoundPage

  details = {}

  constructor(
    private myService:MyHttpService,
    private loadingCtrl:LoadingController,
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    // 获取跳转时存在id中的值
    var myId = this.navParams.get('pid')

    var url = "http://127.0.0.1:8080/product/detail?lid="+myId;
    // 向指定的url发送请求
    this.myService.sendRequest(url,(res:any)=>{  //引入服务类  用服务类中封装的方法
      console.log(res)
      //将result中的details保存
      this.details = res.details;
    })
   /* var url = "http://127.0.0.1:8080/product/detail?lid="+myId;
    
    this.myHttp.get(url)
    .subscribe((result:any)=>{
      console.log(result)
      //将result中的details保存
      this.details = result.details;
    }) */
 

  }

  addToCart(){
    //显示一个loading
    var myLoading = 
      this.loadingCtrl.create({
        content:'正在加载...'
      })
    myLoading.present()

    //发送网络请求 cart/add
    var myId = this.navParams.get('pid')
    var url = "http://127.0.0.1:8080/cart/add?buyCount=1&lid="+myId;
    
    this.myHttp.get(url,{withCredentials:true})
    .subscribe((result:any)=>{
      //关闭loading
      myLoading.dismiss()

      console.log(result)
      if(result.code == 300){
        //跳转到login
        this.navCtrl.push(LoginPage)
      }else if(result.code==200){
        this.myService.showToast("添加成功")
      }else{
        this.myService.showToast("添加失败")
      }
    })

  }

}
