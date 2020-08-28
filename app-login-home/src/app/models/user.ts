import { IProfile } from "./iprofile";
import { IUser } from "./iuser";
import { Profile } from './profile';

export class User implements IUser {
    id: number;
    name: string;
    token: string;
    file: string;
    fileSrc: string;
    photo: string;
    login: string;
    pwd: string;
    profiles: Array<Profile> = new Array();
    constructor(
        id: number, name: string, token: string, file: string, fileSrc: string, photo: string, login: string, 
        pwd: string, profiles: Array<Profile>
    ) {
        this.id = id;
        this.name = name;
        this.token = token;
        this.file = file;
        this.fileSrc = fileSrc;
        this.photo = photo;
        this.login = login;
        this.pwd = pwd;
        for(let profile of profiles) {
            this.profiles.push(new Profile(profile.code, profile.name));
        }
        
    }
    
}
