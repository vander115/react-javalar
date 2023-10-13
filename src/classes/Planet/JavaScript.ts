import { Planet } from './Planet';
import JavaScriptIcon from '../../assets/planet-icons/javascript.svg';

export class JavaScript extends Planet {
    constructor() {
        super('JavaScript', 2, 3, 10.0, '#FFD43B', JavaScriptIcon);
    }
}
