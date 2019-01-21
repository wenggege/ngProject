import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {LoginPage} from '../login/login'
import {OrderConfirmPage} from '../order-confirm/order-confirm'


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  myList = []
  isAllSelected = false//记录全选的复选框有没有被选中

  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');   
  }

  // 每一次进入页面都会执行的一个钩子函数
  ionViewWillEnter(){

    var url = "http://127.0.0.1:8080/cart/list";
    this.myService.sendRequest(url,(result)=>{
      console.log(result)
      // 条件判断
      if(result.code == 300){
        //未登录，跳转到登录页面
        this.navCtrl.push(LoginPage)
      }else if(result.code == 200){
        //result.data 就是购物车列表，保存，到视图中进行渲染
        this.myList = result.data
        //遍历this.myList,给每一个商品添加一个isSelected属性 用来记录此商品有没有被选中
        for(var i=0;i<this.myList.length;i++){
          this.myList[i].isSelected = false
        }
      }
    })
  }

  //处理全选
  handleSelectAll(){
    //将每一个商品的复选框的选中的值 修改为当前全选的值一致
    for(var i=0;i<this.myList.length;i++){
      this.myList[i].isSelected = this.isAllSelected
    }
  }

  //处理选中某一个商品
  handleSelectOne(){
    //将当前的购物车列表所有的isSelected执行一个逻辑与运算
    var result = true
    for(var i=0;i<this.myList.length;i++){
      result = 
      result && this.myList[i].isSelected
    }
    //将与运算的结果赋值给全选的isAllSelected
    this.isAllSelected = result

  }
  

  //计算选中的商品的总价格
  calcAll(){
    var result = 0
    for(var i=0;i<this.myList.length;i++){
      if(this.myList[i].isSelected){
        result+=(this.myList[i].count*this.myList[i].price)
      }
    }
    return result
  }

  //跳转到订单确认页面
  jump(){
    this.navCtrl.push(OrderConfirmPage)
  }
}

