import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  imports: [MatSelectModule,MatMomentDateModule,MatInputModule,MatCardModule,MatDatepickerModule,MatFormFieldModule,MatExpansionModule],
  exports: [MatSelectModule,MatMomentDateModule,MatInputModule,MatCardModule,MatDatepickerModule,MatFormFieldModule,MatExpansionModule]
})
export class materialmodule { }