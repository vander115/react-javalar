import { System } from '../../components/System';
import { PlanForm } from './components/PlanForm';
import { HomeContainer } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <System />
            <PlanForm />
        </HomeContainer>
    );
}
