import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { enUS, faIR } from 'date-fns/esm/locale';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendneworderService } from '../services/backendneworder.service';
import { OrderManage } from '../Entities/OrderManage';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-insertneworder',
  templateUrl: './insertneworder.component.html',
  styleUrls: ['./insertneworder.component.css'],
})
export class InsertneworderComponent {
  //dateValue = new FormControl(); //date to go in DB
  manage : OrderManage = new OrderManage
  busy:boolean = false;

  constructor(private fb: FormBuilder,
    private backend:BackendneworderService,
    private router:Router , private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) public locale: any
    ) {}

  changeLocale(value: any): void {
    switch (value) {
      case 'fa-IR':
        this._adapter.setLocale(faIR);
        break;
    }

  }
 

  changeDate(value: Date) {
    const locale =
      typeof this.locale === 'string' ? this.locale : this.locale?.code;

    console.log(
      `Change:
      Date: ${value}
      ISO : ${value?.toISOString()}
      Local(${locale}): ${value.toLocaleString(locale)}`
    );

    
  }
  
  order = this.fb.group({
    ordertype: [''],
    ordercolor: [''],
    ordercount: [''],
    boxtype: [''],
    boxcount: [''],
    edge: [''],
    lable: [''],
    twocolor: [''],
    customername: [''],
    customeraddress: [''],
    customerphone: [''],
    date: [''],
  });

public import(){
  this.busy = true;
  let ordertype : string | undefined = this.order.controls.ordertype.value?.toString();
  let ordercolor : string | undefined = this.order.controls.ordercolor.value?.toString();
  let ordercount : number | undefined = Number(this.order.controls.ordercount.value?.toString());

  let boxcount : number | undefined = Number(this.order.controls.boxcount.value?.toString());
  let boxtype : string | undefined = this.order.controls.boxtype.value?.toString();

  let customername : string | undefined = this.order.controls.customername.value?.toString();
  let customerphone : string | undefined = this.order.controls.customerphone.value?.toString();
  let customeraddress : string | undefined = this.order.controls.customeraddress.value?.toString();

  let edge : boolean | undefined = Boolean(this.order.controls.edge.value?.toString());
  let twocolor : boolean | undefined = Boolean(this.order.controls.twocolor.value?.toString());
  let lable : boolean | undefined = Boolean(this.order.controls.lable.value?.toString());

  let date : string | undefined  = this.order.controls.date.value?.toString()

  this.backend.newOrder(ordertype??'' , ordercolor??'', ordercount??'' , boxcount??'', date??'' , boxtype??'' , customername??'' , customerphone??'' , customeraddress??'' , edge??false , twocolor??false , lable??false ).subscribe(r=>
    { 
      this.busy = false;
      let result = r as any;
    });
}
  
  

  keyNumber(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
