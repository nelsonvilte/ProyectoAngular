import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {DestinoViaje} from './../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output()  onItemAdded: EventEmitter<DestinoViaje>;
  //destinos:DestinoViaje[];
  updates:string[];
//inicializacion
   constructor(public destinosApiClient:DestinosApiClient) { 
    this.onItemAdded=new EventEmitter();
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d:DestinoViaje) =>{
      if(d != null){
        this.updates.push('Se ha elegido a '+ d.nombre);
      }
    });
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
    //this.destinos.push(new DestinoViaje(nombre,url));
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e:DestinoViaje){
    //this.destinos.forEach(function (x){x.setSelected(false);});
    //d.setSelected(true);
    //this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    //e.setSelected(true);
    this.destinosApiClient.elegir(e);
  }

}
;