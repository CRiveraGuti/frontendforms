import { Component, OnInit, Input } from '@angular/core';
import { Informe1BVService } from '../../servicios/informe1-bv.service'

@Component({
  selector: 'app-primersetderadios',
  templateUrl: './primersetderadios.component.html',
  styleUrls: ['./primersetderadios.component.css']
})
export class PrimersetderadiosComponent implements OnInit {

  @Input() setradio1;
  public PREGUNTA1= [];pregunta2=[]; pregunta3=[];pregunta4=[];pregunta5=[];pregunta6=[];pregunta7=[];pregunta8=[]

  constructor(private informebv: Informe1BVService) { }

  ngOnInit() {
      setTimeout(() => {
        this.separar(); 
      }, 2000);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['NO', 'SI',''];
  public barChartLabels2:string[] = ['NO', 'SI', 'N/R',''];
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
  public barChartData5:any[] = [
    {data: [ ], label: ''},
  ];
  public barChartData6:any[] = [
    {data: [ ], label: ''},
  ];
  public barChartData7:any[] = [
    {data: [ ], label: ''},
  ];
  public barChartData8:any[] = [
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
    if( this.setradio1 == undefined){
        return;
    }
    this.PREGUNTA1[0]= this.setradio1[0].PREGUNTA1no;
    this.PREGUNTA1[1]= this.setradio1[1].PREGUNTA1si; 
    this.PREGUNTA1[2]= 0
    this.barChartData = [{ data: this.PREGUNTA1 , label: 'numero de veces que marco'}]
    this.pregunta2[0] = this.setradio1[2].PREGUNTA2no;
    this.pregunta2[1] = this.setradio1[3].PREGUNTA2si;
    this.pregunta2[2] = this.setradio1[4].PREGUNTA2norespondio;
    this.pregunta2[3]= 0
    this.barChartData2 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta3[0] = this.setradio1[5].PREGUNTA3no;
    this.pregunta3[1] = this.setradio1[6].PREGUNTA3si;
    this.pregunta3[3]= 0
    this.barChartData3 = [{ data: this.pregunta3, label: 'numero de veces que marco'}]
    this.pregunta4[0] = this.setradio1[7].PREGUNTA4no;
    this.pregunta4[1] = this.setradio1[8].PREGUNTA4si;
    this.pregunta4[2] = this.setradio1[9].PREGUNTA4norespondio;
    this.pregunta4[3]= 0
    this.barChartData4 = [{ data: this.pregunta4, label: 'numero de veces que marco'}]
    this.pregunta5[0] = this.setradio1[10].PREGUNTA5no;
    this.pregunta5[1] = this.setradio1[11].PREGUNTA5si;
    this.pregunta5[2]= 0
    this.barChartData5 = [{ data: this.pregunta5, label: 'numero de veces que marco'}]
    this.pregunta6[0] = this.setradio1[12].PREGUNTA6no;
    this.pregunta6[1] = this.setradio1[13].PREGUNTA6si;
    this.pregunta6[2]= 0
    this.barChartData6 = [{ data: this.pregunta6, label: 'numero de veces que marco'}]
    this.pregunta7[0] = this.setradio1[14].PREGUNTA7no;
    this.pregunta7[1] = this.setradio1[15].PREGUNTA7si;
    this.pregunta7[2]= 0
    this.barChartData7 = [{ data: this.pregunta7, label: 'numero de veces que marco'}]
    this.pregunta8[0] = this.setradio1[16].PREGUNTA8no;
    this.pregunta8[1] = this.setradio1[17].PREGUNTA8si;
    this.pregunta8[2] = this.setradio1[18].PREGUNTA8norespondio;
    this.pregunta8[3]= 0
    this.barChartData8 = [{ data: this.pregunta8, label: 'numero de veces que marco'}]

  }



}
