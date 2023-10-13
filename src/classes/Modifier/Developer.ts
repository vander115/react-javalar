import { Position } from '../Position';
import { Modifier } from './Modifier';
import DevIcon from '../../assets/modifiers-icons/developer.svg';

export class Developer extends Modifier {
    constructor(position: Position) {
        super('Desenvolvedor', '#41C665', DevIcon, position, 1);
    }
}
