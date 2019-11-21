import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ILoginRequest, ILoginResponse } from "../models/login.model";

const Path = "login";

@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) {}

    login(data: ILoginRequest): Observable<ILoginResponse> {
        return this.httpClient.post<ILoginResponse>(Path, data);
    }
}
