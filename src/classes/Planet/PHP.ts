import { Planet } from './Planet';
import PHPIcon from '../../assets/planet-icons/php.svg';

export class PHP extends Planet {
    constructor() {
        super('PHP', 4, 2, 60.0, '#6281EE', PHPIcon);
    }
}
