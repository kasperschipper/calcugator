import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {CalculationsComponent} from "./calculations/calculations.component";

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: 'calculations',
    component: CalculationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
