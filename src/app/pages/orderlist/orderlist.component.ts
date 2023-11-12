import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {

  }
  
  @Input()datasource : string = ''
}
