"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Library {
    run() {
        let model = new _1.SharedModel(5, 'test 123 - 321');
        let lib = new _1.SharedLibrary();
        let lib2 = new _1.SharedLibrary2();
        console.log('--------------SHARED LIBRARY--------------\n\n');
        lib.echoLog(model);
        lib.echoWarn(model);
        console.log('--------------SHARED LIBRARY 2--------------\n\n');
        lib2.echo(model);
        lib2.echo2(lib, model);
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map