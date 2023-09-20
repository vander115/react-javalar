export class Time {
    private _instantDuration: number;
    private _passedHours: number;
    private _passedDays: number;

    constructor(instantDuration: number) {
        this._instantDuration = instantDuration;
        this._passedHours = 0;
        this._passedDays = 0;
    }

    public getInstantDuration(): number {
        return this._instantDuration;
    }

    public getPassedHours(): number {
        return this._passedHours;
    }

    public getPassedDays(): number {
        return this._passedDays;
    }

    public incrementHours(numberOfIntants: number): void {
        this._passedHours += numberOfIntants;

        while (this._passedHours >= 24) {
            this._passedHours -= 24;
            this._passedDays++;
        }
    }
}
