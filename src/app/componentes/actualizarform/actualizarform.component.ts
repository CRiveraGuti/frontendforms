import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formulario } from '../../modelos/forms'
import { FormserviceService} from '../../servicios/formservice.service';

@Component({
  selector: 'app-actualizarform',
  templateUrl: './actualizarform.component.html',
})
export class ActualizarformComponent implements OnInit {
   
  public actu:formulario; alertmessage; alerterror;
  public myForm; refreshForm; datos:object ; id; respuestaser; formulario; almacenar; name 

  constructor(private formservice: FormserviceService, private router: ActivatedRoute) {
    this.actu = new formulario('',[]);
    let id= this.router.snapshot.paramMap.get('id');
    this.id = id;
    this.consultarform();
   }

   public form = {
    components : this.almacenar
  }

  @ViewChild('json') jsonElement?: ElementRef;

 
  ngOnInit() {  
  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.datos = this.jsonElement.nativeElement.textContent;
  }


  consultarform(){
    this.formservice.consultarformulario(this.id).subscribe(
      response=>{
        this.respuestaser = response;
        this.almacenar = JSON.parse(this.respuestaser.dato)
        this.form = {components : this.almacenar}
      },error=>{
      }
    )
  }

  actualizar(){
    this.actu = new formulario(this.name, this.datos);
    this.formservice.actualizarform(this.actu,this.id).subscribe(
    response=>{
          this.respuestaser = response
          this.alertmessage = this.respuestaser.message;
      },error=>{
          this.alerterror = error;
      }
    )
  }




}


