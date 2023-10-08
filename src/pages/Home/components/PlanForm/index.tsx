import { Button } from '../../../../components/Button';

import { NumberInput } from '../../../../components/NumberInput/indext';
import { usePlanet } from '../../../../hooks/planets';
import { PlanFormContainer } from './styles';

export function PlanForm() {
    const { handleMove, setNumberOfInstants } = usePlanet();
    return (
        <PlanFormContainer>
            <NumberInput
                type="number"
                min={0}
                handleChange={(value) => setNumberOfInstants(value)}
            />
            <Button onClick={handleMove}>Mover</Button>
        </PlanFormContainer>
    );
}
