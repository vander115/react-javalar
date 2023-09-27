import { Position } from '../Position';
import { Modifier } from './Modifier';

export class Developer extends Modifier {
    constructor(position: Position) {
        super(position, 1);
    }
}
