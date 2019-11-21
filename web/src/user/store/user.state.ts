import { Router } from "@angular/router";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";

import { IUserData } from "../models/user.model";
import { IUserStateModel } from "../models/user-state.model";

import { AuthService } from "src/core/services/auth.service";
import { UserService } from "../services/user.service";
import { CreateUser, GetCurrentUser, Logout } from "./user.actions";

@State<IUserStateModel>({
    name: "user",
    defaults: {
        currentUser: null,
    },
})
export class UserState {
    @Selector()
    static currentUser(state: IUserStateModel): IUserData {
        return state.currentUser;
    }

    @Selector([UserState.currentUser])
    static currentUserName(state: IUserStateModel, currentUser: IUserData): string {
        if (currentUser) {
            return currentUser.username;
        }
    }

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private translateService: TranslateService,
        private toastrService: ToastrService,
    ) {}

    @Action(CreateUser)
    createUser(ctx: StateContext<IUserStateModel>, { data }: CreateUser) {
        return this.userService.create(data).pipe(
            tap(response => {
                if (response.data) {
                    if (!this.authService.token) {
                        this.toastrService.success(this.translateService.instant("signup.success"));
                        this.router.navigate(["/login"]);
                    }
                }
            }),
        );
    }

    @Action(GetCurrentUser)
    getCurrentUser(ctx: StateContext<IUserStateModel>) {
        return this.userService.getCurrent().pipe(
            tap(response => {
                const currentUser = response.data;
                if (currentUser) {
                    ctx.patchState({
                        currentUser,
                    });
                }
            }),
        );
    }

    @Action(Logout)
    logout(ctx: StateContext<IUserStateModel>) {
        ctx.patchState({ currentUser: null });
        this.authService.token = null;
        this.router.navigate(["/login"]);
    }
}
