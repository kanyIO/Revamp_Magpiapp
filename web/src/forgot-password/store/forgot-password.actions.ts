import { IForgotPasswordRequest } from "../models/forgot-password.model";

export class ForgotPasswordRequest {
    static readonly type = "[ForgotPassword] ForgotPasswordRequest";
    constructor(public data: IForgotPasswordRequest) {}
}
