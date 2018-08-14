"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SharedModel {
    get numb() {
        return this._numb;
    }
    set numb(value) {
        this._numb = value;
    }
    get test() {
        return this._test;
    }
    set test(value) {
        this._test = value;
    }
    constructor(numb, test) {
        this._numb = numb;
        this._test = test;
    }
}
exports.SharedModel = SharedModel;
//# sourceMappingURL=SharedModel.js.map