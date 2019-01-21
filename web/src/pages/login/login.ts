import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {HttpClient} from '@angular/common/http'
import {MyHttpService} from '../../app/utility/service/myhttp.service'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname=""
  upwd=""
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     //private myHttp:HttpClient,
     private myService:MyHttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //登录
  login(){
    var url="http://127.0.0.1:8080/user/login"
    var data={uname:this.uname,upwd:this.upwd}
    this.myService.sendPostRequest(url,data,(res:any)=>{  //调用服务类中的post方法
      console.log(res)
      if(res.code==200){
        //返回上一页
        this.navCtrl.pop()
      }else{
        //显示一个通知：登录失败 （因为很多地方用通知，所以放在服务类中toast）
        this.myService.showToast("登录失败")
      }
    })
    // this.myHttp.post(url,{uname:this.uname,upwd:this.upwd}).subscribe((res:any)=>{
    //   console.log(res)
    //   if(res.code==200){
    //     var myToast=this.toastCtrl.create({
    //       message:'登录成功'
    //     })
    //     myToast.present()
    //   }
    // })
  }
}
