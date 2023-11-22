import { Component, Input, OnInit } from '@angular/core';
import { OrderManage } from '../Entities/OrderManage'; 
import { HttpClient } from '@angular/common/http';
import { orderGridColumn } from './shared/orders/orderGridColumn';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {
constructor() {}
   manage : OrderManage = new OrderManage
   columns : orderGridColumn[] = [
    {
      field:'customername',
      title:'نام خریدار',
      type:'text'
    },
    {
      field:'customerphone',
      title:'شماره خریدار',
      type:'text'
    },
    
    // {
    //   field:'customeraddress',
    //   title:'آدرس خریدار',
    //   type:'text'
    // },
    // {
    //   field:'ordercolor',
    //   title:'رنگ محصول',
    //   type:'text'
    // },
    // {
    //   field:'ordertype',
    //   title:'نوع محصول',
    //   type:'text'
    // },
    // {
    //   field:'ordercount',
    //   title:'تعداد محصول',
    //   type:'text'
    // },
    // {
    //   field:'boxcount',
    //   title:'تعداد جعبه',
    //   type:'text'
    // },
    // {
    //   field:'boxtype',
    //   title:'نوع جعبه',
    //   type:'text'
    // },
    // {
    //   field:'edge',
    //   title:'لبه دار',
    //   type:'check'
    // },
    // {
    //   field:'lable',
    //   title:'طرح دار',
    //   type:'check'
    // },
    // {
    //   field:'twocolor',
    //   title:'دو رنگ',
    //   type:'check'
    // },
    
  ];


  
}
