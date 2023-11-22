import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManage } from 'src/app/pages/Entities/OrderManage';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { orderGridColumn } from './orderGridColumn';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatDividerModule ,CommonModule , HttpClientJsonpModule , MatExpansionModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  panelOpenState = false;
  manage : OrderManage = new OrderManage
  data : any[] = [];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.post(this.datasource,{}).subscribe(r=>{
      this.data = r as any[];
    })
  }
@Input() datasource:string = '';
@Input() columns: orderGridColumn[] = [];
}
