import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
	Title: string = 'The birds!';
  
  
  constructor(
 
    private httpClient:HttpClient
  ) {
    
  }

  updateMyValue(){

  this.postProfile();
  }
 
  postProfile(){
    this.httpClient.post(`http://dev.contanimacion.com/birds/public/login/`,
    {
      user:'ivan',
      password: 'cuadros'
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

}
