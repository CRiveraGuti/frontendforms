import { Component, OnInit } from '@angular/core';
import {Informe1BVService} from '../../servicios/informe1-bv.service';
import { Router} from '@angular/router';

export interface producto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-opcionesfiltrado',
  templateUrl: './opcionesfiltrado.component.html',
  styleUrls: ['./opcionesfiltrado.component.css']
})

export class OpcionesfiltradoComponent implements OnInit {

  public operario:String;
  public producto:String;
  public fecha;

  Productos: producto[] = [
    {value: 'Aguila', viewValue: 'Cerveza Aguila Original'},
    {value: 'aguilaL', viewValue: 'Aguila Light'},
    {value: 'aguilaC', viewValue: 'Aguila Cero'},
    {value: 'clubColombia', viewValue: 'Club Colombia'},
    {value: 'costena', viewValue: 'Costeña'},
    {value: 'stella', viewValue: 'Stella Artois'},
    {value: 'pilsen', viewValue: 'Pilsen'},
    {value: 'poker', viewValue: 'Poker'},
    {value: "redds", viewValue: "Redd's"},
    {value: 'costenita', viewValue: 'Costeñita'},
    {value: 'ponyMalta', viewValue: 'Pony Malta'},
    {value: 'colaYPola', viewValue: 'Cola y Pola'},
    {value: 'budweiser', viewValue: 'Budweiser'},
    {value: 'corona', viewValue: 'Corona'}
  ];

  constructor(private informebavaria: Informe1BVService , private route: Router) { }

  ngOnInit() {
  }

  mostraroperario(){
    if(this.operario != undefined){
      this.route.navigate(['/Componenteoperario/'+ this.operario]); 
    }else if(this.producto != undefined){
      this.route.navigate(['/Componenteproducto/'+ this.producto]); 
    }else{
      var mes = (this.fecha._a[1]);
      var mesr = mes + 1;
      var dia = (this.fecha._a[2]);
      if(mes < 10){
        mes = '0'+mesr;
      }else{
        mes = mes;
      }
      var año = this.fecha._a[0];
      var fechabien = año + '-' + (mes) + '-' + dia + 'T00:00:00-05:00'
      this.route.navigate(['/Componentefecha/'+ fechabien ]);
    }
  
  }

}
