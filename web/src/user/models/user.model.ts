import { IResponse } from "src/common/models/response.model";

export interface ICreateUserRequest {
    username: string;
    email: string;
    password: string;
}

export interface ICreateUserData {
    message: string;
}

export interface IUserData {
    id: number;
    uuid: string;
    username: string;
    email: string;
    enabled: boolean;
    mobile: string;
    role: string;
    dateCreated: string;
    profile: { firstName: string; lastName: string };
}

export interface ICreateUserResponse extends IResponse {
    data?: ICreateUserData;
}

export interface ICurrentUserResponse extends IResponse {
    data?: IUserData;
}
