import {Injectable} from "@angular/core";
import {merge, Observable, Subject} from "rxjs";
import {CalculatorOperation} from "./calculator.operation";
import {CalculatorService} from "./calculator.service";
import {CalculatorStateModel} from "./calculator.state.model";
import {mergeMap, pairwise, scan, shareReplay, startWith, tap, withLatestFrom} from "rxjs/operators";
import {tag} from "rxjs-spy/operators";
import {create} from "rxjs-spy";

@Injectable()
export class CalculatorState
{
  currentInput$: Subject<string>;
  operationInput$: Subject<CalculatorOperation>;

  lastInput$: Subject<CalculatorStateModel>;

  operator$: Observable<CalculatorStateModel>;
  currentState$: Observable<CalculatorStateModel>;

  constructor(private calculatorService: CalculatorService)
  {
    this.currentInput$ = new Subject<string>();
    this.operationInput$ = new Subject<CalculatorOperation>();
    this.lastInput$ = new Subject<CalculatorStateModel>();

    this.operator$ = this.operationInput$.pipe(
      startWith(CalculatorOperation.NONE), // at least one value for pairwise to start emitting
      pairwise(),
      withLatestFrom(this.lastInput$),
      mergeMap(([[currentOperation, nextOperation], lastState]) =>
               {
                 return this.calculatorService.handleNewOperation(currentOperation, nextOperation, lastState);
               }
      ),
      tag('operatorstream')
    );

    this.currentState$ = merge(this.currentInput$, this.operator$).pipe(
      scan<string | CalculatorStateModel, CalculatorStateModel>(
        (resultState: CalculatorStateModel, newValue: string | CalculatorStateModel) =>
        {
          return this.calculatorService.handleNewValue(resultState, newValue);
        }, CalculatorService.EMPTY_MODEL),
      startWith(CalculatorService.EMPTY_MODEL),
      tap(value =>
          {
            console.log(value);
            this.lastInput$.next(value)
          }),
      shareReplay(1),
      tag('statestream')
    );

    const spy = create();
    spy.log('operatorstream');
    spy.log('statestream');
  }

  newInput(newValue: string)
  {
    this.currentInput$.next(newValue);
  }

  newOperation(newOperation: CalculatorOperation)
  {
    this.operationInput$.next(newOperation);
  }
}
