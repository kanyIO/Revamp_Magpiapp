import { State, Selector, Action, StateContext } from "@ngxs/store";
import { TranslateService } from "@ngx-translate/core";
import { tap } from "rxjs/operators";

import { Environment } from "src/environments/config";
import { environment } from "src/environments/environment";
import { IAppStateModel } from "../models/app-state.model";
import { InitLanguage, SetCurrentLanguage } from "./app.actions";

const CurrentLanguage = "current-language";

@State<IAppStateModel>({
    name: "app",
    defaults: {
        environment,
        currentLanguage: null,
        languages: ["en", "es", "fr", "pt", "zh"],
    },
})
export class AppState {
    @Selector()
    static environment(state: IAppStateModel): Environment {
        return state.environment;
    }

    @Selector([AppState.environment])
    static version(state: IAppStateModel, env: Environment): string {
        return env.version;
    }

    @Selector([AppState.environment])
    static production(state: IAppStateModel, env: Environment): boolean {
        return env.production;
    }

    @Selector([AppState.environment])
    static apiUrl(state: IAppStateModel, env: Environment): string {
        return env.apiUrl;
    }

    @Selector()
    static currentLanguage(state: IAppStateModel): string {
        return state.currentLanguage;
    }

    @Selector()
    static languages(state: IAppStateModel): string[] {
        return state.languages;
    }

    constructor(private translateService: TranslateService) {}

    @Action(InitLanguage)
    initLanguage({ getState, dispatch }: StateContext<IAppStateModel>) {
        const state = getState();
        this.translateService.addLangs(state.languages);
        this.translateService.setDefaultLang(state.languages[0]);
        return dispatch(
            new SetCurrentLanguage(localStorage.getItem(CurrentLanguage) || this.translateService.getDefaultLang()),
        );
    }

    @Action(SetCurrentLanguage)
    setCurrentLanguage({ patchState }: StateContext<IAppStateModel>, { language }: SetCurrentLanguage) {
        localStorage.setItem(CurrentLanguage, language);
        return this.translateService.use(language).pipe(
            tap(() => {
                patchState({
                    currentLanguage: language,
                });
            }),
        );
    }
}
