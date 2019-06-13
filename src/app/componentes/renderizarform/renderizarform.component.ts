import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormserviceService} from '../../servicios/formservice.service'
import {data} from '../../modelos/data'


@Component({
  selector: 'app-renderizarform',
  templateUrl: './renderizarform.component.html'
})
export class RenderizarformComponent implements OnInit {

  public id; respuestaser; datos; infoform:data;
  refreshForm: any;


  public myForm = { 
    components : []
  };

  constructor(private router: ActivatedRoute, private formsservicios: FormserviceService) {
    this.infoform = new data ('',[]);
    let id= this.router.snapshot.paramMap.get('id');
    this.id = id;
    this.consultarrender();
   }

  ngOnInit() {
  }

 
    consultarrender(){
    this.formsservicios.consultarformulario(this.id).subscribe(
      response=>{
        this.respuestaser = response;
        this.datos = JSON.parse(this.respuestaser.dato)
        this.myForm = {components : this.datos}
      },error=>{
      }
    )
  }

  onSubmit(submission: any) {
    var datos = submission.data
    this.infoform = new data (this.id, datos);
    this.formsservicios.savedata(this.infoform).subscribe(
      response=>{
          
      },error=>{
        
      }
    )
    
  }

}
