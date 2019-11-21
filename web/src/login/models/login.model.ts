import { IResponse } from "src/common/models/response.model";

export interface ILoginRequest {
    username: string;
    password: string;
}

export interface ILoginData {
    accessToken: string;
    message: string;
}

export interface ILoginResponse extends IResponse {
    data?: ILoginData;
}
