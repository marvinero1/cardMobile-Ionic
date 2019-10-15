import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServerExternalService {

  constructor(public http:HttpClient) {
    console.log("Hola provedor externo");
   }

   getInfo(){
     return this.http.get('https://jsonplaceholder.typicode.com/users');
   }

   getInfoIonic(){
    return this.http.get('http://localhost:5959/cardmobile/empresa/2');
  }
}
