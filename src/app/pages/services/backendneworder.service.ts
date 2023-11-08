import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendneworderService extends BackendService{

  newOrder(){
    return this.http.post(this.securityAPI + 'newOrder' , 
    {
      
    })
  }
}
