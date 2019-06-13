import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Forms: any, filtrar: any): any {
    if(filtrar === undefined) return Forms;
    return Forms.filter(function(form){
      return form.nombre.toLowerCase().includes(filtrar.toLowerCase());
    })
    
  }

}
