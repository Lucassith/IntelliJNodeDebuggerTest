import { SharedModel } from '..';

export class SharedLibrary {
    public echoLog(model: SharedModel) {
        console.log(model.numb, model.test);
    }

    public echoWarn(model: SharedModel) {
        let x = 1;
        let y = 12;
        const z = 6;

        let loremIpsum = x+y+z;

        console.warn(model.test, model.numb);
    }
}
