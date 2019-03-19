import {Injectable} from "@angular/core";
import {CalculatorOperation} from "./calculator.operation";
import {CalculatorStateModel} from "./calculator.state.model";
import {HttpService} from "../services/http.service";
import {Observable, of} from "rxjs";

@Injectable()
export class CalculatorService
{
  public static EMPTY_MODEL: CalculatorStateModel = {
    currentDisplayValue: '',
    previousDisplayValue: '',
    desiredOperation: CalculatorOperation.NONE,
    nextOperation: CalculatorOperation.NONE,
    evaluate: false
  };

  constructor(private httpService: HttpService)
  {

  }

  handleNewValueOrOperation(currentState: CalculatorStateModel, newValueOrOperation: string | CalculatorOperation): CalculatorStateModel
  {
    if (this.isOperation(newValueOrOperation))
    {
      return this.handleOperation(currentState, newValueOrOperation);
    }
    else if (typeof newValueOrOperation === 'string')
    {
      return this.handleNewValue(currentState, newValueOrOperation);
    }
    throw new Error("not a value or known operation");
  }

  handleOperation(currentState: CalculatorStateModel, operation: CalculatorOperation): CalculatorStateModel
  {
    switch (operation)
    {
    case CalculatorOperation.DECIMAL:
      return this.handleDecimalOperator(currentState);
    default:
      return this.handleDefaultOperation(currentState, operation);
    }
  }

  handleNewValue(currentState: CalculatorStateModel, newValue: string): CalculatorStateModel
  {
    if (currentState.currentDisplayValue === '0')
    {
      return {
        currentDisplayValue: newValue,
        previousDisplayValue: currentState.previousDisplayValue,
        desiredOperation: currentState.desiredOperation,
        nextOperation: currentState.nextOperation,
        evaluate: false
      };
    }

    return {
      currentDisplayValue: '' + currentState.currentDisplayValue + newValue,
      previousDisplayValue: currentState.previousDisplayValue,
      desiredOperation: currentState.desiredOperation,
      nextOperation: currentState.nextOperation,
      evaluate: false
    };
  }

  isOperation(valueOrOperation: string | CalculatorOperation): valueOrOperation is CalculatorOperation
  {
    return Object.values(CalculatorOperation).includes(valueOrOperation);
  }

  handleDecimalOperator(currentState: CalculatorStateModel): CalculatorStateModel
  {
    if (currentState.currentDisplayValue.indexOf(CalculatorOperation.DECIMAL) === -1)
    {
      return {
        currentDisplayValue: currentState.currentDisplayValue + CalculatorOperation.DECIMAL,
        previousDisplayValue: currentState.previousDisplayValue,
        desiredOperation: currentState.desiredOperation,
        nextOperation: currentState.nextOperation,
        evaluate: false
      };
    }
    return currentState;
  }

  handleDefaultOperation(currentState: CalculatorStateModel, operation: CalculatorOperation): CalculatorStateModel
  {
    if (!currentState.previousDisplayValue && currentState.previousDisplayValue !== '0')
    {
      // only the first time: update the previous value since no call to backend is made
      return {
        currentDisplayValue: '0',
        previousDisplayValue: currentState.currentDisplayValue,
        desiredOperation: currentState.nextOperation,
        nextOperation: operation,
        evaluate: false
      };
    }
    return {
      currentDisplayValue: currentState.currentDisplayValue,
      previousDisplayValue: currentState.previousDisplayValue,
      desiredOperation: currentState.nextOperation,
      nextOperation: operation,
      evaluate: true
    };
  }

  handleOperationCall(stateModel: CalculatorStateModel): Observable<CalculatorStateModel>
  {
    if (!stateModel.evaluate)
    {
      return of(stateModel);
    }
    else
    {
      return this.httpService.performPutRequest('/api/calculator/', stateModel);
    }
  }
}
