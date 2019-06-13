import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { NavegacionComponent } from './estructura/navegacion/navegacion.component';
import { FormbuilderComponent } from './componentes/formbuilder/formbuilder.component';
import { FormioModule } from 'angular-formio'
import { NgxPaginationModule } from 'ngx-pagination';
import { ConstruccionforComponent } from './componentes/construccionfor/construccionfor.component';
import { ActualizarformComponent } from './componentes/actualizarform/actualizarform.component';
import { RenderizarformComponent } from './componentes/renderizarform/renderizarform.component';
import { FilterPipe } from './filter.pipe';
import { DashboardComponent } from './componentes/dashboard/dashboard.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {materialmodule} from '../app/appmaterial'
import { ChartsModule } from 'ng2-charts';
import { PrimersetderadiosComponent } from './informe/primersetderadios/primersetderadios.component';
import { OpcionesfiltradoComponent } from './informe/opcionesfiltrado/opcionesfiltrado.component';
import { PaneloperarioComponent } from './informe/paneloperario/paneloperario.component';
import { PanelfechaComponent } from './informe/panelfecha/panelfecha.component';
import { PanelproductoComponent } from './informe/panelproducto/panelproducto.component';
import { SegundosetderadiosComponent } from './informe/segundosetderadios/segundosetderadios.component';
import { TercersetderadiosComponent } from './informe/tercersetderadios/tercersetderadios.component';
import { IndicadordeturnoComponent } from './informe/indicadordeturno/indicadordeturno.component';
import { TipoderechazoComponent } from './informe/tipoderechazo/tipoderechazo.component';
import { ErrorporComponent } from './informe/errorpor/errorpor.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormbuilderComponent,
    ConstruccionforComponent,
    ActualizarformComponent,
    RenderizarformComponent,
    FilterPipe,
    DashboardComponent,
    PrimersetderadiosComponent,
    OpcionesfiltradoComponent,
    PaneloperarioComponent,
    PanelfechaComponent,
    PanelproductoComponent,
    SegundosetderadiosComponent,
    TercersetderadiosComponent,
    IndicadordeturnoComponent,
    TipoderechazoComponent,
    ErrorporComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    NgxPaginationModule,
    FormioModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    materialmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
