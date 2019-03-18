package calcugator.services;

import calcugator.models.CalculationModel;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService implements ICalculatorService
{
    @Override
    public CalculationModel calculate(CalculationModel calculation)
    {
        Double calculationResult = calculateResult(calculation);

        CalculationModel result = createResultCalculation(calculation);

        result.setPreviousDisplayValue(calculationResult.toString());

        return result;
    }

    private Double calculateResult(CalculationModel calculation)
    {
        switch (calculation.getDesiredOperation())
        {
        case ADDITION:
            return performAddition(calculation.getPreviousDisplayValue(), calculation.getCurrentDisplayValue());
        case SUBTRACTION:
            return performSubtraction(calculation.getPreviousDisplayValue(), calculation.getCurrentDisplayValue());
        case MULTIPLICATION:
            return performMultiplication(calculation.getPreviousDisplayValue(), calculation.getCurrentDisplayValue());
        case DIVISION:
            return performDivision(calculation.getPreviousDisplayValue(), calculation.getCurrentDisplayValue());
        default:
            throw new IllegalArgumentException("invalid operation type requested");
        }
    }

    // TODO rewrite these so parsing happens before operation
    private Double performDivision(String firstValue, String secondValue)
    {
        return Double.parseDouble(firstValue) / Double.parseDouble(secondValue);
    }

    private Double performMultiplication(String firstValue, String secondValue)
    {
        return Double.parseDouble(firstValue) * Double.parseDouble(secondValue);
    }

    private Double performSubtraction(String firstValue, String secondValue)
    {
        return Double.parseDouble(firstValue) - Double.parseDouble(secondValue);
    }

    private Double performAddition(String firstValue, String secondValue)
    {
        return Double.parseDouble(firstValue) + Double.parseDouble(secondValue);
    }

    private CalculationModel createResultCalculation(CalculationModel calculation)
    {
        CalculationModel result = new CalculationModel();
        result.setCurrentDisplayValue("0");
        result.setDesiredOperation(calculation.getDesiredOperation());
        result.setNextOperation(calculation.getNextOperation());
        result.setEvaluate(false);
        return result;
    }
}
