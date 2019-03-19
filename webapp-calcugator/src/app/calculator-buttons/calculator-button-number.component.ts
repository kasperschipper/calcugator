import {Component, Input, OnInit} from '@angular/core';
import {CalculatorState} from "../calculator/calculator.state";

@Component({
             selector: 'app-calculator-button-number',
             templateUrl: './calculator-button-number.component.html',
             styleUrls: ['./calculator-button-number.component.scss']
           })
export class CalculatorButtonNumberComponent implements OnInit
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
