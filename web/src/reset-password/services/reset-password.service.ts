import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IResetPasswordRequest, IResponse } from "../models/reset-password.model";

const Path = "resetPassword";

@Injectable()
export class ResetPasswordService {
    constructor(private httpClient: HttpClient) {}

    request(data: IResetPasswordRequest): Observable<IResponse> {
        return this.httpClient.post<IResponse>(Path, data);
    }
}
