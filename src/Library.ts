import { SharedModel, SharedLibrary2, SharedLibrary } from '.';

export class Library {
    public run() {
        let model = new SharedModel(5, 'test 123 - 321');
        let lib = new SharedLibrary();
        let lib2 = new SharedLibrary2();

        console.log('--------------SHARED LIBRARY--------------\n\n');

        lib.echoLog(model);
        lib.echoWarn(model);

        console.log('--------------SHARED LIBRARY 2--------------\n\n');

        lib2.echo(model);
        lib2.echo2(lib, model);
    }
}
