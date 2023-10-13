export abstract class CelestialBody {
    protected _name: string;
    protected _color: string;
    protected _iconUrl: string;

    constructor(name: string, color: string, iconUrl: string) {
        this._name = name;
        this._color = color;
        this._iconUrl = iconUrl;
    }

    public getName(): string {
        return this._name;
    }

    public getColor(): string {
        return this._color;
    }

    public getIconUrl(): string {
        return this._iconUrl;
    }
}
