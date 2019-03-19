import {Component, OnDestroy, OnInit} from '@angular/core';
import {CalculatorState} from "./calculator.state";
import {Observable} from "rxjs";
import {CalculatorOperation} from "./calculator.operation";
import {CalculatorStateModel} from "./calculator.state.model";
import {AutoUnsubscribe} from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
             selector: 'app-calculator',
             templateUrl: './calculator.component.html',
             styleUrls: ['./calculator.component.scss']
           })
export class CalculatorComponent implements OnInit, OnDestroy
{
  OperationType = CalculatorOperation;

  calculatorState$: Observable<CalculatorStateModel>;

  constructor(calculatorState: CalculatorState)
  {
    this.calculatorState$ = calculatorState.currentState$;
  }

  ngOnInit()
  {
  }

  ngOnDestroy(): void
  {
  }

  getStream()
  {
    return this.calculatorState$;
  }
}
