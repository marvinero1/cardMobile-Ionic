import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerExternalService } from '../server-external.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IEmpresa } from 'src/app/models/models'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  empresas: IEmpresa[]=[];
  //public empresas:any;
  url = 'http://localhost:5959/cardmobile/empresa/';

  constructor(public navCtrl:NavController,public server:ServerExternalService, public http:HttpClient) {
  }

  ngOnInit(){
    
  }

  viewInfo(){
     this.server.getInfo().subscribe(data=>{
      console.log("Informacion");
      console.log(data);
    })
  }

  viewInfoIonic(){    
    let data: Observable<any> = this.http.get(this.url);
     data.subscribe(result=>{
      this.empresas = result;
      console.log(result);
   })
 }
 
}
