import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'convert/currency',
    pathMatch: 'full',
  }, {
    path: 'convert',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/component.module').then(m => m.ComponentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
