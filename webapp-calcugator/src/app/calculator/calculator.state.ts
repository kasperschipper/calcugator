import {Injectable} from "@angular/core";
import {merge, Observable, Subject} from "rxjs";
import {mergeMap, scan, shareReplay, startWith} from "rxjs/operators";
import {CalculatorOperation} from "./calculator.operation";
import {CalculatorService} from "./calculator.service";
import {CalculatorStateModel} from "./calculator.state.model";

@Injectable()
export class CalculatorState
{
  currentInput$: Subject<string>;
  operationInput$: Subject<CalculatorOperation>;

  currentState$: Observable<CalculatorStateModel>;

  constructor(calculatorService: CalculatorService)
  {
    this.currentInput$ = new Subject<string>();
    this.operationInput$ = new Subject<CalculatorOperation>();

    this.currentState$ = merge(this.currentInput$.pipe(startWith('0')), this.operationInput$)
      .pipe(
        scan((accumulate: CalculatorStateModel, newValueOrOperator: string | CalculatorOperation) =>
               calculatorService.handleNewValueOrOperation(accumulate, newValueOrOperator),
             CalculatorService.EMPTY_MODEL
             ),
        startWith(CalculatorService.EMPTY_MODEL),
        mergeMap((stateModel: CalculatorStateModel) => calculatorService.handleOperationCall(stateModel)),
        shareReplay(1)
      );
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
