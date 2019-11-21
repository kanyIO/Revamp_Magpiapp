import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
} from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { Observable, TimeoutError, throwError } from "rxjs";
import { tap, timeout, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

import { IResponse } from "src/common/models/response.model";
import { MetaHttpParams } from "./meta-http-params";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    private requestTimeout = 120 * 1000;

    constructor(private toastrService: ToastrService, private translateService: TranslateService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const params = request.params as MetaHttpParams;

        return next.handle(request).pipe(
            timeout(this.requestTimeout),
            tap((event: HttpEvent<any>) => {
                if (!params.supressError && event instanceof HttpResponse) {
                    const response = event.body as IResponse;
                    if (response.error) {
                        const errorCode = `http.error.${response.error.code}`;
                        let errorMsg = this.translateService.instant(errorCode);
                        if (errorMsg === errorCode) {
                            errorMsg = response.error.trace;
                        }
                        this.showToast(errorMsg);
                    }
                }
            }),
            catchError((event: HttpEvent<any>) => {
                if (!params.supressError) {
                    if (event instanceof TimeoutError) {
                        this.showToast(this.translateService.instant("http.error.timeout"));
                    } else if (event instanceof HttpErrorResponse) {
                        this.showToast(this.translateService.instant("http.error.common"));
                    }
                }
                return throwError(event);
            }),
        );
    }

    private showToast(message: string) {
        this.toastrService.error(message);
    }
}
