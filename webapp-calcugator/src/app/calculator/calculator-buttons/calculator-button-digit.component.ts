import {Component, Input, OnInit} from '@angular/core';
import {CalculatorState} from "../calculator.state";

@Component({
             selector: 'app-calculator-button-digit',
             templateUrl: './calculator-button-digit.component.html',
             styleUrls: ['./calculator-button-digit.component.scss']
           })
export class CalculatorButtonDigitComponent implements OnInit
{
  @Input() digit: string;

  calculatorState: CalculatorState;

  constructor(calculatorState: CalculatorState)
  {
    this.calculatorState = calculatorState;
  }

  ngOnInit()
  {
    this.digit = this.digit + ''; // force conversion to string from template even if you used number
  }

  newDigitInput()
  {
    this.calculatorState.newInput(this.digit);
  }
}
