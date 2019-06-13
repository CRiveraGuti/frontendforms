import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicadordeturno',
  templateUrl: './indicadordeturno.component.html',
  styleUrls: ['./indicadordeturno.component.css']
})
export class IndicadordeturnoComponent implements OnInit {

  @Input() porcentaje;
  botellasbuenas:number
  botellasmalas:number
  totalbotellas:number
  porcentajerechazo:number

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.separar()
    }, 2000);
  }

  public doughnutChartLabels:string[] = ['Botellas Aceptadas', 'Botellas rechazadas'];
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

  separar(){
    if( this.porcentaje == undefined){
      return;
     }
    this.totalbotellas = this.porcentaje.totalbotellas;
    this.botellasbuenas = this.porcentaje.botellasbuenas;
    this.botellasmalas = this.porcentaje.botellasmalas;
    this.porcentajerechazo = this.porcentaje.porcentajederechazo;
    this.doughnutChartData = [this.botellasbuenas , this.botellasmalas];
  }

}
