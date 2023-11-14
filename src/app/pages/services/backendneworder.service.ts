import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendneworderService extends BackendService{

  newOrder(ordertype:string , ordercolor:string , ordercount:number , boxcount:number , boxtype : string , customername :string , customerphone :string , customeraddress : string , edge : boolean , twocolor : boolean , lable : boolean ){
    return this.http.post(this.securityAPI + 'newOrder' , 
    {
      ordertype : ordertype ,
      ordercolor : ordercolor,
      ordercount : ordercount ,
      boxcount: boxcount ,
      boxtype : boxtype ,
      customername : customername,
      customerphone : customerphone,
      customeraddress : customeraddress,
      edge : edge,
      twocolor : twocolor,
      lable : lable,

    })
  }
}
