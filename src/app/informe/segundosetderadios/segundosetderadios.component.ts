import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-segundosetderadios',
  templateUrl: './segundosetderadios.component.html',
  styleUrls: ['./segundosetderadios.component.css']
})
export class SegundosetderadiosComponent implements OnInit {

  @Input()  setradio2;
  pregunta1=[]; pregunta2=[];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.separar(); 
    }, 2000);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales :{ yAxes: [{ ticks : { beginAtZero :true}}]},
    
  };
  public barChartLabels:string[] = ['NO', 'SI','.'];
  public barChartLabels2:string[] = ['NO', 'SI', 'N/R','.'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [  ], label: ''},
  ];
  public barChartData2:any[] = [
    {data: [ ], label: ''},
  ];
  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: '#ecac0d',
      hoverBackgroundColor: '#c28e0a',
      borderColor: '#2e2e1f',
      borderWidth: 3,
      hoverBorderColor: '#ffffff',
      hoverBorderWidth: 2,
    },
  ];
  
  separar(){
    if( this.setradio2 == undefined){
      return;
     }
    this.pregunta1[0] = this.setradio2[0].PREGUNTA1no;
    this.pregunta1[1] = this.setradio2[1].PREGUNTA1si;
    this.pregunta1[2] = 0;
    this.barChartData = [{ data: this.pregunta1 , label: 'numero de veces que marco'}]
    this.pregunta2[0] = this.setradio2[2].PREGUNTA2no;
    this.pregunta2[1] = this.setradio2[3].PREGUNTA2si;
    this.pregunta2[2] = this.setradio2[4].PREGUNTA2norespondio
    this.barChartData2 = [{ data: this.pregunta2 , label: 'numero de veces que marco'}]
  }

}
