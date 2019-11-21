import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { GetCurrentUser, Logout } from "src/user/store/user.actions";
import { AppState } from "src/app/store/app.state";
import { UserState } from "src/user/store/user.state";

@Component({
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    @Select(AppState.version) version$: Observable<string>;
    @Select(AppState.currentLanguage) currentLanguage$: Observable<string>;
    @Select(UserState.currentUserName) currentUserName$: Observable<string>;

    collapsed = false;

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(new GetCurrentUser());
    }

    onLogoutButtonClick() {
        this.store.dispatch(new Logout());
    }
}
