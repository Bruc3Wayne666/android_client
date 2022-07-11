import {IUser} from "./IUser";

export interface IPost {
    _id: string;
    title: string;
    text: string;
    author: IUser;
    image_url?: string;
    __v: number;
}