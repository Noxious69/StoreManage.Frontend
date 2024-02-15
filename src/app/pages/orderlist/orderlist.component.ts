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
       field:'date',
       title:'تاریخ ',
       type:'text'
     },
    {
      field:'customerName',
      title:'نام ',
      type:'text'
    },
    {
      field:'customerPhone',
      title:'شماره تماس',
      type:'text'
    },
    
    {
      field:'customerAddress',
      title:'آدرس ',
      type:'text'
    },
    {
      field:'orderColor',
      title:'رنگ محصول',
      type:'text'
    },
    {
      field:'orderType',
      title:'نوع محصول',
      type:'text'
    },
    {
      field:'orderCount',
      title:'تعداد محصول',
      type:'text'
    },
    {
      field:'boxCount',
      title:'تعداد جعبه',
      type:'text'
    },
    {
      field:'boxType',
      title:'نوع جعبه',
      type:'text'
    },
    {
      field:'edge',
      title:'لبه دار',
      type:'check'
    },
    {
      field:'lable',
      title:'طرح دار',
      type:'check'
    },
    {
      field:'twoColor',
      title:'دو رنگ',
      type:'check'
    },
    
    
  ];
  
  edit(edit:any){
    console.log(edit);
  }
  remove(remove:any){
    console.log(remove);
  }

  
}
