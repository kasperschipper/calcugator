package calcugator.models;

import calcugator.models.serialization.CalculationOperationDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.apache.commons.lang3.StringUtils;

import java.util.Arrays;
import java.util.Optional;

@JsonDeserialize(using = CalculationOperationDeserializer.class)
public enum CalculationOperation
{
    DECIMAL("."),
    ADDITION("+"),
    SUBTRACTION("-"),
    MULTIPLICATION("*"),
    DIVISION("/"),
    EXPONENT("^"),
    ROOT("v"),
    EVALUATE("="),
    NONE("NONE");

    private String jsonValue;

    CalculationOperation(String jsonValue)
    {
        this.jsonValue = jsonValue;
    }

    @Override
    public String toString()
    {
        return this.jsonValue;
    }

    public static CalculationOperation fromJsonValue(String jsonValue)
    {
        Optional<CalculationOperation> possibleEnumValue =
                Arrays.stream(CalculationOperation.values())
                      .filter(operation -> StringUtils.equals(operation.jsonValue, jsonValue))
                      .findFirst();

        return possibleEnumValue.orElseThrow();
    }
}
