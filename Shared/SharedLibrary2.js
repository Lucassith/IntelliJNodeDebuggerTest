"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SharedLibrary2 {
    get lib() {
        return this._lib;
    }
    echo(model) {
        console.error(model.numb, model.test);
    }
    echo2(lib, model) {
        lib.echoLog(model);
    }
}
exports.SharedLibrary2 = SharedLibrary2;
//# sourceMappingURL=SharedLibrary2.js.map