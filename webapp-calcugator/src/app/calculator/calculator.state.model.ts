import {CalculatorOperation} from "./calculator.operation";

export interface CalculatorStateModel
{
  currentDisplayValue: string;
  previousDisplayValue: string;
  desiredOperation: CalculatorOperation;
  nextOperation: CalculatorOperation;
  evaluate: boolean;
}
