import { Position } from '../Position';
import { Modifier } from './Modifier';
import BugIcon from '../../assets/modifiers-icons/bug.svg';

export class Bug extends Modifier {
    constructor(position: Position) {
        super('Bug', '#DA20A6', BugIcon, position, -1);
    }
}
