package calcugator.repositories;

import calcugator.persistence.PerformedCalculation;
import org.springframework.data.repository.CrudRepository;

public interface PerformedCalculationRepository extends CrudRepository<PerformedCalculation, Long>
{
}
