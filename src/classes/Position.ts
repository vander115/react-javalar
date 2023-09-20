export class Position {
    private _x: number;
    private _y: number;

    constructor(public externalX: number, public externalY: number) {
        this._x = externalX;
        this._y = externalY;
    }

    public getX(): number {
        return this._x;
    }

    public getY(): number {
        return this._y;
    }

    public incrementX(): void {
        this._x++;
    }

    public incrementY(): void {
        this._y++;
    }

    public decrementX(): void {
        this._x--;
    }

    public decrementY(): void {
        this._y--;
    }
}
