import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from "ng-recaptcha";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxsModule, NoopNgxsExecutionStrategy } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { ToastrModule } from "ngx-toastr";

import { environment } from "src/environments/environment";
import { AppState } from "src/app/store/app.state";
import { UserState } from "src/user/store/user.state";
import { interceptors } from "./interceptors";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
    }),
    NgxsModule.forRoot([AppState, UserState], {
        developmentMode: !environment.production,
        executionStrategy: NoopNgxsExecutionStrategy,
    }),
];

if (!environment.production) {
    modules.push(NgxsReduxDevtoolsPluginModule.forRoot());
}

@NgModule({
    imports: [...modules],
    providers: [
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: environment.recaptcha as RecaptchaSettings,
        },
        ...interceptors,
    ],
})
export class CoreModule {}
