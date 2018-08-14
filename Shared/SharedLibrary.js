"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SharedLibrary {
    echoLog(model) {
        console.log(model.numb, model.test);
    }
    echoWarn(model) {
        let x = 1;
        let y = 12;
        const z = 6;
        let loremIpsum = x + y + z;
        console.warn(model.test, model.numb);
    }
}
exports.SharedLibrary = SharedLibrary;
//# sourceMappingURL=SharedLibrary.js.map