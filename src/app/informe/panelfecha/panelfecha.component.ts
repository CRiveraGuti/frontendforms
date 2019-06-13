import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Informe1BVService } from 'src/app/servicios/informe1-bv.service';

@Component({
  selector: 'app-panelfecha',
  templateUrl: './panelfecha.component.html',
  styleUrls: ['./panelfecha.component.css']
})
export class PanelfechaComponent implements OnInit {

  public fecha;
  public datos:any;
  setradio1:any;
  setradio2:any;
  setradio3:any;
  setradio4:any;
  porcentaje:any;
  defecto:any;
  mensajedeerror = null;

  constructor(private router: ActivatedRoute,  private servicio: Informe1BVService) {
    let fecha= this.router.snapshot.paramMap.get('fecha');
    this.fecha = fecha;
   }

  ngOnInit() {
    this.mostrarfecha()
  }

  mostrarfecha(){
    this.servicio.consultarporfecha(this.fecha).subscribe(
      response =>{
        this.datos = response;
        this.setradio1 = this.datos.resultado;
        this.setradio2 = this.datos.resultado2;
        this.setradio3 = this.datos.resultado3;
        this.setradio4 = this.datos.resultado4;
        this.porcentaje = this.datos.conteo;
        this.defecto = this.datos.errorpor
        this.mensajedeerror = null;
      },error=>{
        this.mensajedeerror = error.error.message
      }

    )
  }

}
