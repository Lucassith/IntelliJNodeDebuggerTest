import { SharedModel, SharedLibrary } from '..'

export class SharedLibrary2 {
    private _lib: SharedLibrary2;

    get lib(): SharedLibrary2 {
        return this._lib;
    }

    public echo(model: SharedModel) {
        console.error(model.numb, model.test);
    }

    public echo2(lib: SharedLibrary, model: SharedModel) {
        lib.echoLog(model);
    }
}
