import { Component, OnInit, Input } from '@angular/core';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-errorpor',
  templateUrl: './errorpor.component.html',
  styleUrls: ['./errorpor.component.css']
})
export class ErrorporComponent implements OnInit {

  @Input() setradio4;
  public PREGUNTA1= [];pregunta2=[]; pregunta3=[];pregunta4=[];pregunta5=[];pregunta6=[];pregunta7=[];pregunta8=[]

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
  public barChartLabels2:string[] = ['NO', 'SI', 'N/R'];
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
  public barChartColors:Array<any> = [ { // grey
    backgroundColor: '#ecac0d',
    hoverBackgroundColor: '#c28e0a',
    borderColor: '#2e2e1f',
    borderWidth: 3,
    hoverBorderColor: '#ffffff',
    hoverBorderWidth: 2
  },
];


  separar(){
    if( this.setradio4 == undefined){
    return;
   }

    this.PREGUNTA1[0]= this.setradio4[0].PREGUNTA1no;
    this.PREGUNTA1[1]= this.setradio4[1].PREGUNTA1si; 
    this.barChartData = [{ data: this.PREGUNTA1 , label: 'numero de veces que marco'}]
    this.pregunta2[0] = this.setradio4[2].PREGUNTA2no;
    this.pregunta2[1] = this.setradio4[3].PREGUNTA2si;
    this.barChartData2 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta3[0] = this.setradio4[4].PREGUNTA3no;
    this.pregunta3[1] = this.setradio4[5].PREGUNTA3si;
    this.barChartData3 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta4[0] = this.setradio4[6].PREGUNTA4no;
    this.pregunta4[1] = this.setradio4[7].PREGUNTA4si;
    this.barChartData4 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta5[0] = this.setradio4[8].PREGUNTA5no;
    this.pregunta5[1] = this.setradio4[9].PREGUNTA5si;
    this.barChartData5 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta6[0] = this.setradio4[10].PREGUNTA6no;
    this.pregunta6[1] = this.setradio4[11].PREGUNTA6si;
    this.barChartData6 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta7[0] = this.setradio4[12].PREGUNTA7no;
    this.pregunta7[1] = this.setradio4[13].PREGUNTA7si;
    this.barChartData7 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]
    this.pregunta8[0] = this.setradio4[14].PREGUNTA8no;
    this.pregunta8[1] = this.setradio4[15].PREGUNTA8si;
    this.barChartData8 = [{ data: this.pregunta2, label: 'numero de veces que marco'}]  
  }

}
