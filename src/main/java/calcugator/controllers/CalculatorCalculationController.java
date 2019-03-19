package calcugator.controllers;

import calcugator.models.CalculationViewModel;
import calcugator.persistence.Calculation;
import calcugator.repositories.CalculationRepository;
import calcugator.services.ICalculatorService;
import calcugator.services.ICalculatorViewModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class CalculatorCalculationController
{
    private CalculationRepository calculationRepository;

    private ICalculatorService calculatorService;

    private ICalculatorViewModelMapper mapper;

    @Autowired
    public CalculatorCalculationController(CalculationRepository calculationRepository, ICalculatorService calculatorService,
            ICalculatorViewModelMapper mapper)
    {
        this.calculationRepository = calculationRepository;
        this.calculatorService = calculatorService;
        this.mapper = mapper;
    }

    @RequestMapping(value = "/calculations/", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Calculation>> index()
    {
        Iterable<Calculation> calculations = calculationRepository.findAll();

        return new ResponseEntity<>(calculations, HttpStatus.OK);
    }

    @RequestMapping(value = "/calculator/", method = RequestMethod.PUT)
    public ResponseEntity<CalculationViewModel> performCalculation(@RequestBody CalculationViewModel calculationViewModel)
    {
        Calculation calculation = mapper.mapFromViewModel(calculationViewModel);

        Double result = calculatorService.calculate(calculation);

        CalculationViewModel resultModel = mapper.mapToViewModel(result, calculationViewModel);

        return new ResponseEntity<>(resultModel, HttpStatus.OK);
    }
}
