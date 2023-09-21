import { System } from '../../components/System';
import { usePlanet } from '../../hooks/planets';
import { HomeContainer } from './styles';

export function Home() {
    const { handleMove } = usePlanet();
    return (
        <HomeContainer>
            <System />
            <button onClick={() => handleMove(1)}>andar</button>
        </HomeContainer>
    );
}
