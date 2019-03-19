package calcugator.services;

import calcugator.models.CalculationViewModel;
import calcugator.persistence.Calculation;

public interface ICalculatorService
{
    Double calculate(Calculation calculation);
}
