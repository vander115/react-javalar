import { Position } from '../Position';

export abstract class Modifier {
    protected _position: Position;
    protected _value: number;

    constructor(position: Position, value: number) {
        this._position = position;
        this._value = value;
    }
}
