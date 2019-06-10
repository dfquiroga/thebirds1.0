import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-avistamientoagregar',
  templateUrl: './avistamientoagregar.page.html',
  styleUrls: ['./avistamientoagregar.page.scss'],
})
export class AvistamientoagregarPage implements OnInit {

 constructor(
 
    private httpClient:HttpClient
  ){}
  ngOnInit() {
  }

 agregarAvistamiento(form){
  	console.log(form.user);
  	console.log(form.pass);
    this.httpClient.post(`http://dev.contanimacion.com/birds/public/addSighting/`,
    {
      idAve:form.idAve,
      place: form.place,
      lat:form.lat,
      long:form.long
    })
    .subscribe(
      (data:any) => {
        console.log(data.status);
        if(data.status=="OK"){this.loginstatus="Agregado"; console.log(this.loginstatus); }
        if(data.status=="KO"){this.loginstatus="ERROR in  data"; console.log(this.loginstatus)}

      }
    )
  }

}



