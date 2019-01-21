import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {DetailPage} from '../detail/detail'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  myRes={}
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private myHttp:HttpClient
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.myHttp.get('http://127.0.0.1:8080/index').subscribe((res)=>{
      console.log(res)
      //将res保存起来,然后在模板当中进行调用
      this.myRes=res
    })
  }

  jump(index){
    this.navCtrl.push(DetailPage,{pid:index})
  }

}
