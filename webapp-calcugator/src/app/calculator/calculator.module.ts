import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorButtonNumberComponent } from '../calculator-buttons/calculator-button-number.component';
import {CalculatorState} from "./calculator.state";
import {CalculatorButtonOperationComponent} from "../calculator-buttons/calculator-button-operation.component";
import {CalculatorService} from "./calculator.service";

@NgModule({
  declarations: [CalculatorComponent, CalculatorButtonNumberComponent, CalculatorButtonOperationComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CalculatorState,
    CalculatorService
  ]
})
export class CalculatorModule { }
