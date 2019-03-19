package calcugator.models;

public class CalculationViewModel
{
    private String firstValue;

    private String secondValue;

    private CalculationOperation operation;

    public String getFirstValue()
    {
        return firstValue;
    }

    public void setFirstValue(String firstValue)
    {
        this.firstValue = firstValue;
    }

    public String getSecondValue()
    {
        return secondValue;
    }

    public void setSecondValue(String secondValue)
    {
        this.secondValue = secondValue;
    }

    public CalculationOperation getOperation()
    {
        return operation;
    }

    public void setOperation(CalculationOperation operation)
    {
        this.operation = operation;
    }
}
