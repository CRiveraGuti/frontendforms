import { Component} from '@angular/core';
import { FormserviceService} from '../../servicios/formservice.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html'
})
export class FormbuilderComponent  {

  p: number = 1;
  public Respuesta
  public Forms; id; alertmessage
  public filtrar;

 constructor(private formservice: FormserviceService, private route: Router){
 }

 ngOnInit() {
   this.obtenerformularios();
 }

 obtenerformularios(){
   this.formservice.consultarformularios().subscribe(
    response=>{
      this.Respuesta = response
      this.Forms =  this.Respuesta.forms
    },error=>{
      console.log(error)
    }
  )
}

crear(){
  this.route.navigate(['/construir']);
}

renderizar(id){
  this.route.navigate(['/renderizar',id]);
}

actualizar(id){
  this.route.navigate(['/actualizar',id]);
}

reporte(){
  this.route.navigate(['/dashboard']);
}

 eliminar(id){
  this.id = id
  var r = confirm("Esta seguro de eliminar este formulario");
  if (r == true) {
     this.formservice.eliminarformulario(this.id).subscribe(
       response=>{
          this.Respuesta = response
          this.alertmessage = this.Respuesta.message
          this.obtenerformularios()
          setTimeout(() => {
            this.alertmessage = ""
          }, 4000);
       },error=>{
          console.log(error);
       }
     )
  } else {
       
  }
 }
   
}


