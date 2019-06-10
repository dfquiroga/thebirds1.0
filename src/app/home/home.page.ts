import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
	Title: string = 'The birds!';
  	loginstatus: string ='';
  	public idUser: number =1;
  constructor(
 
    private httpClient:HttpClient
  ) {
  	let key = 'Item 1';
	

    
  }

 
  postProfile(form){
  	console.log(form.user);
  	console.log(form.pass);
    this.httpClient.post(`http://dev.contanimacion.com/birds/public/login/`,
    {
      user:form.user,
      password: form.pass
    })
    .subscribe(
      (data:any) => {
        console.log(data.status);
        if(data.status=="OK"){this.loginstatus="LOGGED IN"; console.log(this.loginstatus); this.idUser=data.id;localStorage.setItem('idUser', data.id);}
        if(data.status=="KO"){this.loginstatus="ERROR in login data"; console.log(this.loginstatus)}

      }
    )
  }

  

}
