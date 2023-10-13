import { Position } from '../Position';
import { CelestialBody } from './CelestialBody';

export class Cell {
    position: Position;
    celestialBody: CelestialBody | null;

    constructor(position: Position) {
        this.position = position;
        this.celestialBody = null;
    }

    setCelestialBody(celestialBody: CelestialBody) {
        this.celestialBody = celestialBody;
    }

    getCelestialBody(): CelestialBody | null {
        return this.celestialBody;
    }

    hasCelestialBody(): boolean {
        return this.celestialBody !== null;
    }

    removeCelestialBody(): void {
        this.celestialBody = null;
    }

    getPosition(): Position {
        return this.position;
    }
}
