import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManage } from 'src/app/pages/Entities/OrderManage';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { orderGridColumn } from './orderGridColumn';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatDividerModule ,CommonModule , HttpClientJsonpModule , MatExpansionModule , MatIconModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  panelOpenState = false;
  manage : OrderManage = new OrderManage(); //The class in which the empty property is located
  data : any[] = [];
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.manage.empty = false; 
    this.http.post(this.datasource,{}).subscribe(r=>{
      this.data = r as any[];

      if (this.data.length === 0) {
        this.manage.empty = true;
      }
    })
  }

@Input() datasource:string = '';
@Input() columns: orderGridColumn[] = [];

@Output() onEdit=new EventEmitter<any>();
@Output() onDelete=new EventEmitter<any>();
}
