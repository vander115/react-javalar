import { System } from '../../components/System';
import { PlanForm } from './components/PlanForm';

import JavalarImg from '../../assets/javalar.png';

import { HomeContainer, JavalarLogo } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <JavalarLogo>
                <img src={JavalarImg} />
            </JavalarLogo>
            <System />
            <PlanForm />
        </HomeContainer>
    );
}
