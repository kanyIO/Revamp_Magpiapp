import { ICreateUserRequest } from "../models/user.model";

export class CreateUser {
    static readonly type = "[User] CreateUser";
    constructor(public data: ICreateUserRequest) {}
}

export class GetCurrentUser {
    static readonly type = "[User] GetCurrentUser";
}

export class Logout {
    static readonly type = "[User] Logout";
}
