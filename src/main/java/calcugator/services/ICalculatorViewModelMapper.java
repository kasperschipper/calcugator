package calcugator.services;

import calcugator.models.CalculationViewModel;
import calcugator.persistence.Calculation;

public interface ICalculatorViewModelMapper
{
    Calculation mapFromViewModel(CalculationViewModel calculationViewModel);

    CalculationViewModel mapToViewModel(Double calculationResult, CalculationViewModel oldModel);
}
