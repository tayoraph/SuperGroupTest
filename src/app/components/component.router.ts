import { Routes } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { LengthUnitConverterComponent } from './length-unit-converter/length-unit-converter.component';

export const ComponentRoutes: Routes = [
  { path: 'currency', component: CurrencyConverterComponent },
  { path: 'length', component: LengthUnitConverterComponent },
];
