import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {global} from '../global';

@Injectable({
  providedIn: 'root'
})
export class Informe1BVService {

  public url:string

  constructor(private http: HttpClient) {
    this.url = global.URL;
   }

   consultarporoperador(operador){
      return this.http.get(this.url+'/consultarporoperador/'+operador);
   }

   consultarporfecha(fecha){
      return this.http.get(this.url+'/consultarporfecha/'+fecha);
   }

   consultarporproducto(producto){
      return this.http.get(this.url+'/consultarporproducto/'+producto);
   }

}
