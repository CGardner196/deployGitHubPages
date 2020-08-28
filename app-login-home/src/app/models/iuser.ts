import { IProfile } from './iprofile';

export interface IUser {
    id: number;
    name: string;
    token: string;
    file: string;
    fileSrc: string;
    photo: string;
    login: string;
    pwd: string;
    profiles: Array<IProfile>;
}
