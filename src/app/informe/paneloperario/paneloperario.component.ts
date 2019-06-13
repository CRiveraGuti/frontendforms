import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Informe1BVService } from 'src/app/servicios/informe1-bv.service';

@Component({
  selector: 'app-paneloperario',
  templateUrl: './paneloperario.component.html',
  styleUrls: ['./paneloperario.component.css']
})
export class PaneloperarioComponent implements OnInit {

  public operario
  public datos:any;
  setradio1:any;
  setradio2:any;
  setradio3:any;
  setradio4:any;
  porcentaje:any;
  defecto:any;
  mensajedeerror: any = null;

  constructor(private router: ActivatedRoute,private servicio: Informe1BVService) { 
    let operario= this.router.snapshot.paramMap.get('operario');
    this.operario = operario;
  }

  ngOnInit() {
    this.mostraroperario();
  }

  
  mostraroperario(){
    this.servicio.consultarporoperador(this.operario).subscribe(
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
      });
    }


 
  
}
