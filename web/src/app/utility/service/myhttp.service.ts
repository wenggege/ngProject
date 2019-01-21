// 实现一个服务类，
import {LoadingController} from 'ionic-angular'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ToastController} from 'ionic-angular'

// 之前angular讲过的providedIn，是用来指定要注入到根模块中，然后在根模块中任何一个组件都可以引入使用
@Injectable()

export class MyHttpService{
  
  constructor(
    private toastCtrl:ToastController,
    private myHttp:HttpClient,
    private loadingCtrl:LoadingController){}

  // 在此类中要封装一个方法，处理网络请求(请求前显示一个loading ，请求结束关闭loading)
  sendRequest(url,callback){
    //显示loading
    var myLoading=this.loadingCtrl.create({
       content:'正在加载数据...'
     });
    myLoading.present();
    
    //发送请求 HttpClient
    this.myHttp.get(url,{withCredentials:true}).subscribe((result)=>{
      //关闭loading
      myLoading.dismiss()
      console.log(result)
      //如何来处理请求来的数据呢？
      callback(result)
    })
    
  }

  //封装post方法
  sendPostRequest(url,data,callback){
    //显示loading
    var myLoading=this.loadingCtrl.create({
       content:'正在登录...'
     });
    myLoading.present();

    this.myHttp.post(url,data,{withCredentials:true}).subscribe((res)=>{
        //关闭loading
        myLoading.dismiss()
        //如何来处理请求来的数据呢？
        callback(res)
      })
  }


  //显示通知
  /**
   * 
   * @param msg 通知的内容
   */
  showToast(msg){
    var myToast=this.toastCtrl.create({
        message:msg,
        duration:3000
    }).present()
  }
}