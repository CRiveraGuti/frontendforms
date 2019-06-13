import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tercersetderadios',
  templateUrl: './tercersetderadios.component.html',
  styleUrls: ['./tercersetderadios.component.css']
})
export class TercersetderadiosComponent implements OnInit {

  @Input () setradio3;
  pregunta1=[];pregunta2=[];pregunta3=[];pregunta4=[]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.separar();
    }, 2000);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['NO', 'SI'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [  ], label: ''},
  ];
  public barChartData2:any[] = [
    {data: [ ], label: ''},
  ];
  public barChartData3:any[] = [
    {data: [ ], label: ''},
  ];
  public barChartData4:any[] = [
    {data: [ ], label: ''},
  ];

  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: '#ecac0d',
      hoverBackgroundColor: '#c28e0a',
      borderColor: '#2e2e1f',
      borderWidth: 3,
      hoverBorderColor: '#ffffff',
      hoverBorderWidth: 2
    },
  ];

  separar(){
    if( this.setradio3 == undefined){
      return;
     }
     this.pregunta1[0] = this.setradio3[0].PREGUNTA1no;
     this.pregunta1[1] = this.setradio3[1].PREGUNTA1si;
     this.barChartData = [{ data: this.pregunta1 , label: 'numero de veces que marco'}]
     this.pregunta2[0] = this.setradio3[2].PREGUNTA2no;
     this.pregunta2[1] = this.setradio3[3].PREGUNTA2si;
     this.barChartData2 = [{ data: this.pregunta2 , label: 'numero de veces que marco'}]
     this.pregunta3[0] = this.setradio3[4].PREGUNTA3no;
     this.pregunta3[1]= this.setradio3[5].PREGUNTA3si;
     this.barChartData3 = [{ data: this.pregunta3 , label: 'numero de veces que marco'}]
     this.pregunta4[0] = this.setradio3[6].PREGUNTA4no;
     this.pregunta4[1] = this.setradio3[7].PREGUNTA4si;
     this.barChartData4 = [{ data: this.pregunta4 , label: 'numero de veces que marco'}]
  }

}
