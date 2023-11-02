import { Component, OnInit,  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-insertneworder',
  templateUrl: './insertneworder.component.html',
  styleUrls: ['./insertneworder.component.css'],
})
export class InsertneworderComponent  {
  dateValue = new FormControl();
  
  constructor(private fb: FormBuilder) { }


  order = this.fb.group({
    ordertype: [''],
    ordercolor: [''],
    ordercount: [''],
    boxtype: [''],
    boxcount: [''],
    edge: [false],
    lable: [false],
    twocolor: [false],
    customername: [''],
    customeraddress: [''],
    customerphone: [''],
    date: [this.dateValue],
    
  });



  keyNumber(event : KeyboardEvent){
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)){
      event.preventDefault();
    }
  }
  
  }

  

  
