import { Planet } from './Planet';
import CIcon from '../../assets/planet-icons/c.svg';

export class C extends Planet {
    constructor() {
        super('C', 7, 10, 0.1, '#00599C', CIcon);
    }
}
