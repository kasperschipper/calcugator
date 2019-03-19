import {Component, Input, OnInit} from '@angular/core';
import {CalculatorOperation} from "../calculator/calculator.operation";
import {CalculatorState} from "../calculator/calculator.state";

@Component({
             selector: 'app-calculator-button-operation',
             templateUrl: './calculator-button-operation.component.html',
             styleUrls: ['./calculator-button-operation.component.scss']
           })
export class CalculatorButtonOperationComponent implements OnInit
{
  @Input() operation: CalculatorOperation;

  calculatorState: CalculatorState;

  constructor(calculatorState: CalculatorState)
  {
    this.calculatorState = calculatorState;
  }

  ngOnInit()
  {
  }

  performOperation()
  {
    this.calculatorState.newOperation(this.operation);
  }
}
