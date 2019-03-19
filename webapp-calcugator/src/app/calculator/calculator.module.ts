import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import {CalculatorState} from "./calculator.state";
import {CalculatorButtonOperationComponent} from "./calculator-buttons/calculator-button-operation.component";
import {CalculatorService} from "./calculator.service";
import {CalculatorButtonDigitComponent} from "./calculator-buttons/calculator-button-digit.component";

@NgModule({
  declarations: [CalculatorComponent, CalculatorButtonDigitComponent, CalculatorButtonOperationComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CalculatorState,
    CalculatorService
  ]
})
export class CalculatorModule { }
