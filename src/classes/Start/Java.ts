import { Position } from '../Position';
import { Star } from './Star';
import JavaIcon from '../../assets/star-icons/java.svg';

const JAVA_POSITIONS: Position[] = [
    new Position(8, 7),
    new Position(8, 8),
    new Position(8, 9),
    new Position(7, 7),
    new Position(7, 8),
    new Position(7, 9),
];

export class Java extends Star {
    constructor() {
        super('Java', JAVA_POSITIONS, '#E11F21', JavaIcon);
    }
}
