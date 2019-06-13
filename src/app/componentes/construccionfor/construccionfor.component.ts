import { Component, ViewChild, ElementRef } from '@angular/core';
import {formulario} from '../../modelos/forms'
import { FormserviceService } from '../../servicios/formservice.service'

@Component({
  selector: 'app-construccionfor',
  templateUrl: './construccionfor.component.html',
})
export class ConstruccionforComponent {

  public formu:formulario;
  public nombre; respuesta; alertmessage; alerterror
  public datos;

  @ViewChild('json') jsonElement?: ElementRef;
  
  public form: Object = {
  components: [] 
  }

    onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.datos = this.jsonElement.nativeElement.textContent;
  }

  constructor(private formservices:FormserviceService){
   
  }

  ngOnInit() {
  }

  guardar(){
     this.formu = new formulario(this.nombre,this.datos);
     this.formservices.guardarformulario(this.formu).subscribe(
       response=>{
         this.respuesta = response;
         this.alertmessage = this.respuesta.message
         setTimeout(() => {
         this.alertmessage = "";
         }, 5000);
       },error=>{
        this.alerterror = error.error.message
        setTimeout(() => {
          this.alerterror = "";
          }, 5000);
       }
     )
  }
}
