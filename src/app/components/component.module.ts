import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { ComponentRoutes } from './component.router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { LengthUnitConverterComponent } from './length-unit-converter/length-unit-converter.component';
import { CurrencyConverterPipe } from '../pipes/currency-converter.pipe';



@NgModule({
  declarations: [
    LengthUnitConverterComponent,
    CurrencyConverterPipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(ComponentRoutes),
    HttpClientModule,
    MatTableModule
  ],
  providers: [CurrencyConverterService],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
