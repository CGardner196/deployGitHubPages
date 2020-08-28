import { IProfile } from './iprofile';

export class Profile implements IProfile {
    code: string;
    name: string;
    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
    
}
