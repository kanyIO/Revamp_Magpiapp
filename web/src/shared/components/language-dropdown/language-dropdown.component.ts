import { Component } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { AppState } from "src/app/store/app.state";
import { SetCurrentLanguage } from "src/app/store/app.actions";

@Component({
    selector: "app-language-dropdown",
    templateUrl: "./language-dropdown.component.html",
})
export class LanguageDropdownComponent {
    @Select(AppState.languages) languages$: Observable<string[]>;
    @Select(AppState.currentLanguage) currentLanguage$: Observable<string>;

    constructor(private store: Store) {}

    onLanguageButtonClick(language: string) {
        this.store.dispatch(new SetCurrentLanguage(language));
    }
}
