import {Injectable} from "@angular/core";
import {CalculatorOperation} from "./calculator.operation";
import {CalculatorStateModel} from "./calculator.state.model";
import {HttpService} from "../services/http.service";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class CalculatorService
{
  public static EMPTY_MODEL: CalculatorStateModel = {
    currentDisplayValue: '0',
    previousDisplayValue: ''
  };

  public static DECIMAL: string = '.';

  constructor(private httpService: HttpService)
  {

  }

  handleNewValue(currentState: CalculatorStateModel, newValue: string | CalculatorStateModel): CalculatorStateModel
  {
    if (typeof newValue === 'string')
    {
      return this.handleNewStringValue(currentState, newValue);
    }

    return newValue as CalculatorStateModel;
  }

  handleNewStringValue(currentState: CalculatorStateModel, newValue: string): CalculatorStateModel
  {
    if (currentState.currentDisplayValue === '0' && newValue !== CalculatorService.DECIMAL)
    {
      return {
        currentDisplayValue: newValue,
        previousDisplayValue: currentState.previousDisplayValue
      };
    }
    else if (newValue === CalculatorService.DECIMAL
      && currentState.currentDisplayValue.indexOf(CalculatorService.DECIMAL) !== -1)
    {
      return currentState;
    }

    return {
      currentDisplayValue: '' + currentState.currentDisplayValue + newValue,
      previousDisplayValue: currentState.previousDisplayValue
    };
  }

  handleNewOperation(currentOperation: CalculatorOperation, nextOperation: CalculatorOperation,
    currentState: CalculatorStateModel): Observable<CalculatorStateModel>
  {
    if (currentOperation === CalculatorOperation.NONE || currentOperation === CalculatorOperation.EVALUATE)
    {
      return of({
                  currentDisplayValue: '0',
                  previousDisplayValue: currentState.currentDisplayValue
                });
    }
    return this.handleOperationCall(currentState, currentOperation);
  }

  handleOperationCall(stateModel: CalculatorStateModel, operation: CalculatorOperation): Observable<CalculatorStateModel>
  {
    return this.httpService.performPutRequest<any>('/api/calculator/', {
      firstValue: stateModel.previousDisplayValue,
      secondValue: stateModel.currentDisplayValue,
      operation: operation
    }).pipe(map(result =>
                {
                  return {
                    currentDisplayValue: result.secondValue,
                    previousDisplayValue: result.firstValue
                  };
                }));
  }
}
