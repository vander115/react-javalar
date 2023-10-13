import { CelestialBody } from '../CelestialBody/CelestialBody';
import { Position } from '../Position';

export class Star extends CelestialBody {
    protected _positions: Position[];

    constructor(
        name: string,
        positions: Position[],
        color: string,
        iconUrl: string,
    ) {
        super(name, color, iconUrl);
        this._positions = positions;
    }

    public getPositions(): Position[] {
        return this._positions;
    }
}
