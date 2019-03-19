package calcugator.services;

import calcugator.models.CalculationViewModel;
import calcugator.persistence.Calculation;
import org.springframework.stereotype.Service;

@Service
public class CalculatorViewModelMapper implements ICalculatorViewModelMapper
{
    @Override
    public Calculation mapFromViewModel(CalculationViewModel calculationViewModel)
    {
        Calculation calculation = new Calculation();
        calculation.setFirstValue(Double.parseDouble(calculationViewModel.getSecondValue()));
        calculation.setSecondValue(Double.parseDouble(calculationViewModel.getFirstValue()));
        calculation.setOperation(calculationViewModel.getOperation());

        return calculation;
    }

    @Override
    public CalculationViewModel mapToViewModel(Double calculationResult, CalculationViewModel oldModel)
    {
        CalculationViewModel result = new CalculationViewModel();
        result.setFirstValue(calculationResult.toString());
        result.setSecondValue("0");
        result.setOperation(oldModel.getOperation());
        return result;
    }
}
