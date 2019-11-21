import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { MetaHttpParams } from "src/core/interceptors/meta-http-params";
import { ICreateUserRequest, ICreateUserResponse, ICurrentUserResponse } from "../models/user.model";

const Path = "user";

@Injectable({ providedIn: "root" })
export class UserService {
    constructor(private httpClient: HttpClient) {}

    create(data: ICreateUserRequest): Observable<ICreateUserResponse> {
        return this.httpClient.post<ICreateUserResponse>(Path, data);
    }

    getCurrent(): Observable<ICurrentUserResponse> {
        return this.httpClient.get<ICurrentUserResponse>(Path, {
            params: new MetaHttpParams(void 0, false, true),
        });
    }
}
