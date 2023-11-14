import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendneworderService } from '../services/backendneworder.service';

@Component({
  selector: 'app-insertneworder',
  templateUrl: './insertneworder.component.html',
  styleUrls: ['./insertneworder.component.css'],
})
export class InsertneworderComponent {
  dateValue = new FormControl();

  constructor(private fb: FormBuilder , private backend:BackendneworderService , private router:Router) {}

  order = this.fb.group({
    ordertype: [''],
    ordercolor: [''],
    ordercount: [0],
    boxtype: [''],
    boxcount: [0],
    edge: [false],
    lable: [false],
    twocolor: [false],
    customername: [''],
    customeraddress: [''],
    customerphone: [''],
    date: [this.dateValue],
  });

public import(){

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

  this.backend.newOrder(ordertype??'' , ordercolor??'', ordercount??0 , boxcount??0 , boxtype??'' , customername??'' , customerphone??'' , customeraddress??'' , edge??false , twocolor??false , lable??false ).subscribe(r=>
    { 
      this.router.navigate(['/newtask'])
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
