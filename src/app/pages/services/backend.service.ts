import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public http:HttpClient) { }

  securityAPI='https://localhost:7255/'
}
