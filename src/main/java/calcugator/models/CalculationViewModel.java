package calcugator.models;

public class CalculationViewModel
{
    private String currentDisplayValue;

    private String previousDisplayValue;

    private CalculationOperation desiredOperation;

    private CalculationOperation nextOperation;

    private boolean evaluate;

    public String getCurrentDisplayValue()
    {
        return currentDisplayValue;
    }

    public void setCurrentDisplayValue(String currentDisplayValue)
    {
        this.currentDisplayValue = currentDisplayValue;
    }

    public String getPreviousDisplayValue()
    {
        return previousDisplayValue;
    }

    public void setPreviousDisplayValue(String previousDisplayValue)
    {
        this.previousDisplayValue = previousDisplayValue;
    }

    public CalculationOperation getDesiredOperation()
    {
        return desiredOperation;
    }

    public void setDesiredOperation(CalculationOperation desiredOperation)
    {
        this.desiredOperation = desiredOperation;
    }

    public CalculationOperation getNextOperation()
    {
        return nextOperation;
    }

    public void setNextOperation(CalculationOperation nextOperation)
    {
        this.nextOperation = nextOperation;
    }

    public boolean isEvaluate()
    {
        return evaluate;
    }

    public void setEvaluate(boolean evaluate)
    {
        this.evaluate = evaluate;
    }
}
