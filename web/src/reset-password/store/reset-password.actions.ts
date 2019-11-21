import { IResetPasswordRequest } from "../models/reset-password.model";

export class ResetPasswordRequest {
    static readonly type = "[ResetPassword] ResetPasswordRequest";
    constructor(public data: IResetPasswordRequest) {}
}
