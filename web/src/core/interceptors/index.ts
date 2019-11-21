import { ClassProvider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppDefaultsInterceptor } from "./app-defaults.interceptor";
import { ErrorHandlerInterceptor } from "./error-handler.interceptor";
import { LoadingInterceptor } from "./loading.interceptor";

export const interceptors: ClassProvider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AppDefaultsInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true,
    },
];
