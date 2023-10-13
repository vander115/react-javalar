import { CelestialBody } from '../CelestialBody/CelestialBody';
import { Position } from '../Position';
import { Time } from '../Time';

export abstract class Planet extends CelestialBody {
    protected _index: number;
    protected _velocity: number;

    protected _time: Time;
    protected _position: Position;

    constructor(
        name: string,
        index: number,
        velocity: number,
        instantDuration: number,
        color: string,
        iconUrl: string,
    ) {
        super(name, color, iconUrl);
        this._index = index;
        this._velocity = velocity;

        let initialY: number = 8;
        let initialX: number = 8 + this._index;

        this._position = new Position(initialX, initialY);
        this._time = new Time(instantDuration);
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

    public move(numberOfInstants: number): void {
        for (let i = 0; i < numberOfInstants * this._velocity; i++) {
            this.moveOnePosition();
        }
    }
}
