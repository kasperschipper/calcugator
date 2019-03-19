package calcugator.services;

import calcugator.models.CalculationViewModel;
import calcugator.persistence.Calculation;
import calcugator.repositories.CalculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService implements ICalculatorService
{
    private CalculationRepository calculationRepository;

    @Autowired
    public CalculatorService(CalculationRepository calculationRepository)
    {
        this.calculationRepository = calculationRepository;
    }

    @Override
    public Double calculate(Calculation calculation)
    {
        this.calculationRepository.save(calculation);

        switch (calculation.getOperation())
        {
        case ADDITION:
            return performAddition(calculation.getFirstValue(), calculation.getSecondValue());
        case SUBTRACTION:
            return performSubtraction(calculation.getFirstValue(), calculation.getSecondValue());
        case MULTIPLICATION:
            return performMultiplication(calculation.getFirstValue(), calculation.getSecondValue());
        case DIVISION:
            return performDivision(calculation.getFirstValue(), calculation.getSecondValue());
        default:
            throw new IllegalArgumentException("invalid operation type requested");
        }
    }

    private Double performDivision(Double firstValue, Double secondValue)
    {
        return firstValue / secondValue;
    }

    private Double performMultiplication(Double firstValue, Double secondValue)
    {
        return firstValue * secondValue;
    }

    private Double performSubtraction(Double firstValue, Double secondValue)
    {
        return firstValue - secondValue;
    }

    private Double performAddition(Double firstValue, Double secondValue)
    {
        return firstValue + secondValue;
    }
}
