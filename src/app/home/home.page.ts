import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
	Title: string = 'The birds!';
  constructor(private httpClient:HttpClient) {}
   updateMyValue() {
    this.Title = this.checkLogin();
  }
  
checkLogin(){
	    const ParseHeaders = {
		 headers: new HttpHeaders({
		  'Content-Type'  : 'application/x-www-form-urlencoded'
		 })
		};
  let _Url = 'http://dev.contanimacion.com/birds/public/login/';
	let FormData = "user=ivan"+"&password=cuadros"
this.httpClient.post(_URL,FormData,ParseHeaders).subscribe((res) => {
 console.log(res);
});
	}

}
