import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendneworderService extends BackendService{

  newOrder(ordertype:string , ordercolor:string , ordercount:number , boxcount:number, date:string , boxtype : string , customername :string , customerphone :string , customeraddress : string , edge : boolean , twocolor : boolean , lable : boolean ){
    return this.http.post(this.inventoriAPI + 'neworder' , 
    {
      ordertype : ordertype ,
      ordercolor : ordercolor,
      ordercount : ordercount ,
      boxcount: boxcount ,
      date:date,
      boxtype : boxtype ,
      customername : customername,
      customerphone : customerphone,
      customeraddress : customeraddress,
      edge : edge,
      twocolor : twocolor,
      lable : lable,

    })
  }

  // listOfOrders(){
  //   return this.http.post(this.inventoriAPI + 'list' , {})
  // }
}
