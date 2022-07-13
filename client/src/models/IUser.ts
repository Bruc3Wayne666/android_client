import {IPost} from "./IPost";

export interface IUser {
    _id: string;
    email: string;
    username:string;
    posts: IPost[];
    profileImage?: string;
}
