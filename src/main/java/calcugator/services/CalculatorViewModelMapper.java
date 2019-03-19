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
        calculation.setFirstValue(Double.parseDouble(calculationViewModel.getPreviousDisplayValue()));
        calculation.setSecondValue(Double.parseDouble(calculationViewModel.getCurrentDisplayValue()));
        calculation.setOperation(calculationViewModel.getDesiredOperation());

        return calculation;
    }

    @Override
    public CalculationViewModel mapToViewModel(Double calculationResult, CalculationViewModel oldModel)
    {
        CalculationViewModel result = new CalculationViewModel();
        result.setCurrentDisplayValue("0");
        result.setPreviousDisplayValue(calculationResult.toString());
        result.setDesiredOperation(oldModel.getDesiredOperation());
        result.setNextOperation(oldModel.getNextOperation());
        result.setEvaluate(false);
        return result;
    }
}
