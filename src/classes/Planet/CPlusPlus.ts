import { Planet } from './Planet';
import CPlusPlusIcon from '../../assets/planet-icons/cplusplus.svg';

export class CPlusPlus extends Planet {
    constructor() {
        super('C++', 6, 2, 0.5, '#3470AB', CPlusPlusIcon);
    }
}
