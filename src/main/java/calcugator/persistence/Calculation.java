package calcugator.persistence;

import calcugator.models.CalculationOperation;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "performedcalculations")
public class Calculation
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Double firstValue;

    private Double secondValue;

    @Enumerated(EnumType.STRING)
    private CalculationOperation operation;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Double getFirstValue()
    {
        return firstValue;
    }

    public void setFirstValue(Double firstValue)
    {
        this.firstValue = firstValue;
    }

    public Double getSecondValue()
    {
        return secondValue;
    }

    public void setSecondValue(Double secondValue)
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
