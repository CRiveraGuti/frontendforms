import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import {global} from '../global'
 
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  
  public url:string

  constructor(private http: HttpClient) { 
    this.url = global.URL;
  }

  consultarformularios(){
    return this.http.get(this.url+'/consultarformularios')
  }

  guardarformulario(formulario){
    return this.http.post(this.url+'/addform',formulario)
  }

  eliminarformulario(codigo){
    return this.http.delete(this.url+'/eliminarformulario/'+codigo)
  }

  consultarformulario(id){
    return this.http.get(this.url+'/consultarform/'+id)
  }

  actualizarform(datos,id){
    return this.http.put(this.url+'/actualizarform/'+id,datos)
  }

  savedata(datos){
    return this.http.post(this.url+'/adddata',datos)
  }

}
