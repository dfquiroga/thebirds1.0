import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DetallePage } from '@../detalle/detalle.page';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

	listadoPajaros;
	idUser= localStorage.getItem('idUser');
  constructor(
 
    private httpClient:HttpClient,
   private router: Router

  ) {
  }
  ngOnInit() {
  this.getList();
  
  }

  onDetail(id){
    localStorage.setItem('idBird', id)
    this.router.navigate(['/detalle']);
  }

  	getList(){
    this.httpClient.get(`http://dev.contanimacion.com/birds/public/getBirds/`+this.idUser)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.listadoPajaros=data;
        }
      }
    )
  }


 
}
