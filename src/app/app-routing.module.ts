import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormbuilderComponent } from './componentes/formbuilder/formbuilder.component';
import { ConstruccionforComponent } from './componentes/construccionfor/construccionfor.component'
import { ActualizarformComponent} from './componentes/actualizarform/actualizarform.component';
import { RenderizarformComponent} from './componentes/renderizarform/renderizarform.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component'
import { OpcionesfiltradoComponent } from './informe/opcionesfiltrado/opcionesfiltrado.component';
import { PaneloperarioComponent} from './informe/paneloperario/paneloperario.component';
import { PanelfechaComponent} from './informe/panelfecha/panelfecha.component';
import { PanelproductoComponent} from './informe/panelproducto/panelproducto.component'

const routes: Routes=[
 {path:'construir', component: ConstruccionforComponent},
 {path:'crear', component: FormbuilderComponent},
 {path:'actualizar/:id', component: ActualizarformComponent},
 {path:'renderizar/:id', component: RenderizarformComponent},
 {path:'dashboard', component: DashboardComponent},
 {path: 'filtrado', component: OpcionesfiltradoComponent},
 {path: 'Componenteoperario/:operario', component: PaneloperarioComponent},
 {path: 'Componentefecha/:fecha', component: PanelfechaComponent},
 {path: 'Componenteproducto/:producto', component: PanelproductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
