import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tipoderechazo',
  templateUrl: './tipoderechazo.component.html',
  styleUrls: ['./tipoderechazo.component.css']
})
export class TipoderechazoComponent implements OnInit {

  @Input() defecto;
  porcentaje1:number;porcentaje2:number;porcentaje3:number;porcentaje4:number;porcentaje5:number;

  constructor() { }

  public doughnutChartLabels:string[] = ['Botellas Rotas', 'Foraneo','Relavado','Scuffing' ];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors:Array<any> = [
    { // second color
      backgroundColor: '#ffffff',
      borderColor: 'rgba(225,10,24,0.2)',   
    },
    { // grey
      backgroundColor: '#ecac0d',
      hoverBackgroundColor: '#c28e0a',
      borderColor: '#2e2e1f',
      borderWidth: 3,
      hoverBorderColor: '#ffffff',
      hoverBorderWidth: 2
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.separar();
    }, 2000);
  }


  separar(){
    if( this.defecto == undefined){
      return;
     }
    this.porcentaje1=  this.defecto.porcentajederechazobotellarotas;
    this.porcentaje2 = this.defecto.porcentajederechazoforaneo;
    this.porcentaje3 = this.defecto.porcentajederechazorelavado;
    this.porcentaje4 = this.defecto.porcentajederechazoscuffing;
    this.porcentaje5 = this.defecto.porcentajederechazoporcentarechazo;
    this.doughnutChartData = [this.porcentaje1 , this.porcentaje2, this.porcentaje3,this.porcentaje4  ];
  }

}
