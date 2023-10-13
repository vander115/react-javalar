import { CelestialBody } from '../CelestialBody/CelestialBody';
import { Position } from '../Position';

export abstract class Modifier extends CelestialBody {
    protected _position: Position;
    protected _value: number;

    constructor(
        name: string,
        color: string,
        iconUrl: string,
        position: Position,
        value: number,
    ) {
        // super('Modifier', '#DA20A6', '');
        super(name, color, iconUrl);
        this._position = position;
        this._value = value;
    }
}
