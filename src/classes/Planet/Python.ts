import { Planet } from './Planet';
import PythonIcon from '../../assets/planet-icons/python.svg';

export class Python extends Planet {
    constructor() {
        super('Python', 1, 4, 24.0, '#FFE873', PythonIcon);
    }
}
