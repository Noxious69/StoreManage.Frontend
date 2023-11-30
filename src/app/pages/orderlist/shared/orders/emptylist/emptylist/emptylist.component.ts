import { Component } from '@angular/core';
import { OrderManage } from 'src/app/pages/Entities/OrderManage';

@Component({
  selector: 'app-emptylist',
  templateUrl: './emptylist.component.html',
  styleUrls: ['./emptylist.component.css']
})
export class EmptylistComponent {
  manage : OrderManage = new OrderManage();
}
