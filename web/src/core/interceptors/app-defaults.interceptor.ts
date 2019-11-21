import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { AppState } from "src/app/store/app.state";
import { MetaHttpParams } from "./meta-http-params";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AppDefaultsInterceptor implements HttpInterceptor {
    constructor(private store: Store, private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = request.url;
        const params = request.params as MetaHttpParams;
        const update: any = {};

        if (url.indexOf("assets") === -1) {
            if (!url.startsWith("http")) {
                update.url = `${this.store.selectSnapshot(AppState.apiUrl)}${url}`;
            }

            if (!params.preventDefault && this.authService.token) {
                update.headers = request.headers.set("Authorization", this.authService.token);
            }
        }

        return next.handle(request.clone(update));
    }
}
