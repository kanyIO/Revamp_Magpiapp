import { Component } from "@angular/core";
import { Store } from "@ngxs/store";

import { InitLanguage } from "./store/app.actions";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    constructor(store: Store) {
        store.dispatch(new InitLanguage());
    }
}
