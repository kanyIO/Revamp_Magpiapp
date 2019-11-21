export { IResponse } from "src/common/models/response.model";

export interface IResetPasswordRequest {
    token: string;
    password: string;
}
