package calcugator.models.serialization;

import calcugator.models.CalculationOperation;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public class CalculationOperationDeserializer extends JsonDeserializer<CalculationOperation>
{
    @Override
    public CalculationOperation deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
            throws IOException, JsonProcessingException
    {
        ObjectCodec oc = jsonParser.getCodec();
        JsonNode node = oc.readTree(jsonParser);

        if (node == null)
        {
            return null;
        }

        String text = node.textValue();

        if (text == null)
        {
            return null;
        }

        return CalculationOperation.fromJsonValue(text);
    }
}
