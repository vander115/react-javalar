import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input/indext';
import { usePlanet } from '../../../../hooks/planets';
import { PlanFormContainer } from './styles';

export function PlanForm() {
    const { handleMove, setNumberOfInstants, numberOfInstants } = usePlanet();
    return (
        <PlanFormContainer>
            <Input
                type="number"
                min={0}
                value={numberOfInstants}
                onChange={(event) => {
                    event.target.value &&
                        setNumberOfInstants(Number(event.target.value));
                }}
            />
            <Button onClick={handleMove}>Mover</Button>
        </PlanFormContainer>
    );
}
