import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Informe1BVService} from '../../servicios/informe1-bv.service';

@Component({
  selector: 'app-panelproducto',
  templateUrl: './panelproducto.component.html',
  styleUrls: ['./panelproducto.component.css']
})
export class PanelproductoComponent implements OnInit {

  public producto:String;
  public datos:any;
  setradio1:any;
  setradio2:any;
  setradio3:any;
  setradio4:any;
  porcentaje:any;
  defecto:any;
  mensajedeerror: any = null;

  constructor(private router: ActivatedRoute, private servicio: Informe1BVService) { 
    let producto= this.router.snapshot.paramMap.get('producto');
    this.producto = producto;
  }

  ngOnInit() {
    this.mostrarproducto();
  }

  
  mostrarproducto(){
    this.servicio.consultarporproducto(this.producto).subscribe(
      response =>{
        this.datos = response;
        this.setradio1 = this.datos.resultado;
        this.setradio2 = this.datos.resultado2;
        this.setradio3 = this.datos.resultado3;
        this.setradio4 = this.datos.resultado4;
        this.porcentaje = this.datos.conteo;
        this.defecto = this.datos.errorpor
      },error=>{
        this.mensajedeerror = error.error.message
      }

    )
  }

}
