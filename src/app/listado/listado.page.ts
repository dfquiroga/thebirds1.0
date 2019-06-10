import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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
   // public navCtrl: NavController

  ) {
  }
  ngOnInit() {
  this.getList();
  
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


  /*goTo(pajaro) {
    pajaro = pajaro || 'No bird Entered';

    this.navCtrl.push(DetallePage, {
      id: pajaro
    });
  }
*/
}
