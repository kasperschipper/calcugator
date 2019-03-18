package calcugator.controllers;

import calcugator.models.CalculationModel;
import calcugator.services.ICalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class CalculatorCalculationController
{
    private ICalculatorService calculatorService;

    @Autowired
    public CalculatorCalculationController(ICalculatorService calculatorService)
    {
        this.calculatorService = calculatorService;
    }

    @RequestMapping(value = "/calculator/", method = RequestMethod.PUT)
    public ResponseEntity<CalculationModel> performCalculation(@RequestBody CalculationModel calculation)
    {
        CalculationModel result = calculatorService.calculate(calculation);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
