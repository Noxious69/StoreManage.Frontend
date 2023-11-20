import { Component, Input, OnInit } from '@angular/core';
import { OrderManage } from '../Entities/OrderManage'; 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
[x: string]: any;
  manage : OrderManage = new OrderManage

  data : any[] = [];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.post(this.datasource,{}).subscribe(r=>{
      this.data = r as any[];
    })
  }
  
  @Input()datasource : string = ''
}
