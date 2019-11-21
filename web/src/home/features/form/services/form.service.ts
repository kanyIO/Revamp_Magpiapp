import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IListRequest } from "src/common/models/response.model";
import { IFormListResponse } from "../models/form.model";
import { MetaHttpParams } from "src/core/interceptors/meta-http-params";

@Injectable()
export class FormService {
    constructor(private httpClient: HttpClient) {}

    getAll(data: IListRequest): Observable<IFormListResponse> {
        return this.httpClient.get<IFormListResponse>("forms", {
            params: new MetaHttpParams(
                {
                    fromObject: data,
                },
                false,
                true,
            ),
        });
    }
}
