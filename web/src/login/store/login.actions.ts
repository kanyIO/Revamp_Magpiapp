import { ILoginRequest } from "../models/login.model";

export class Login {
    static readonly type = "[Login] Login";
    constructor(public data: ILoginRequest) {}
}
