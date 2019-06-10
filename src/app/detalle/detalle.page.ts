import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
	pajaro;
  constructor(

    private httpClient:HttpClient,
    private router: Router
  ) {
    this.idBird= localStorage.getItem('idBird');
  	this.getBird();
  	console.log(this.idBird);

  }

  onAvistamiento(id){
    localStorage.setItem('idBirdAvistada', id)
    this.router.navigate(['/avistamientoagregar']);
  }

  ngOnInit() {
  }
  getBird(){
    this.httpClient.get(`http://dev.contanimacion.com/birds/public/getBirdDetails/`+this.idBird)
    .subscribe(
      (data:any[]) => {
      		console.log(data[0]);
        if(data.length) {
          this.pajaro=data[0];
        }
      }
    )
  }


}
