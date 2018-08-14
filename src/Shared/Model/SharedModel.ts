export class SharedModel {
    private _numb: number;
    private _test: string;

    get numb(): number {
        return this._numb;
    }

    set numb(value: number) {
        this._numb = value;
    }

    get test(): string {
        return this._test;
    }

    set test(value: string) {
        this._test = value;
    }

    public constructor(numb: number, test: string) {
        this._numb = numb;
        this._test = test;
    }
}
