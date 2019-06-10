import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aveagregar',
  templateUrl: './aveagregar.page.html',
  styleUrls: ['./aveagregar.page.scss'],
})
export class AveagregarPage implements OnInit {
constructor(
 
    private httpClient:HttpClient
  ){}

  ngOnInit() {
  }
  agregarAve(form){
  	
    this.httpClient.post(`http://dev.contanimacion.com/birds/public/addBird/`,
    {
      	idUser: localStorage.setItem('idUser', id),
		bird_name: form.bird_name,
		bird_description: form.bird_description,
		place: form.place,
		long: form.long,
		lat: form.lat,
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
