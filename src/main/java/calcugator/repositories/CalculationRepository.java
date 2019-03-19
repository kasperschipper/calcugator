package calcugator.repositories;

import calcugator.persistence.Calculation;
import org.springframework.data.repository.CrudRepository;

public interface CalculationRepository extends CrudRepository<Calculation, Long>
{
}
