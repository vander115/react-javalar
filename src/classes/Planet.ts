import { Position } from './Position';
import { Time } from './Time';

class Planet {
    private _name: string;
    private _index: number;
    private _velocity: number;
    private _color: string;

    private _time: Time;
    private _position: Position;

    constructor(
        name: string,
        index: number,
        velocity: number,
        color: string,
        instantDuration: number,
    ) {
        this._name = name;
        this._index = index;
        this._velocity = velocity;
        this._color = color;

        let initialY: number = 8;
        let initialX: number = 8 + this._index;

        this._position = new Position(initialX, initialY);
        this._time = new Time(instantDuration);
    }

    public getName(): string {
        return this._name;
    }

    public getIndex(): number {
        return this._index;
    }

    public getVelocity(): number {
        return this._velocity;
    }

    public getPosition(): Position {
        return this._position;
    }

    public getTime(): Time {
        return this._time;
    }

    public getColor(): string {
        return this._color;
    }

    public moveOnePosition(): void {
        if (
            this._position.getY() > 7 - this._index &&
            this._position.getX() == 8 + this._index
        ) {
            this._position.decrementY();
        } else if (
            this._position.getX() > 7 - this._index &&
            this._position.getY() == 7 - this._index
        ) {
            this._position.decrementX();
        } else if (this._position.getY() < 9 + this._index) {
            this._position.incrementY();
        } else if (this._position.getX() < 9 + this._index) {
            this._position.incrementX();
        }
    }
}
