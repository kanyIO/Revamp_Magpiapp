import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IForgotPasswordRequest, IResponse } from "../models/forgot-password.model";

const Path = "forgotPassword";

@Injectable()
export class ForgotPasswordService {
    constructor(private httpClient: HttpClient) {}

    request(data: IForgotPasswordRequest): Observable<IResponse> {
        return this.httpClient.post<IResponse>(Path, data);
    }
}
