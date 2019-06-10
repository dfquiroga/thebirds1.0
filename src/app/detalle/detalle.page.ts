import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
	pajaro;
  constructor(

    private httpClient:HttpClient
  ) {
  	this.getBird();
  }

  ngOnInit() {
  }
  getBird(){
    this.httpClient.get(`http://dev.contanimacion.com/birds/public/getBirdDetails/2`)
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
