import { Router } from "@angular/router";
import { State, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";

import { AuthService } from "src/core/services/auth.service";
import { LoginService } from "../services/login.service";
import { Login } from "./login.actions";

@State<any>({
    name: "login",
    defaults: {},
})
export class LoginState {
    constructor(private router: Router, private authService: AuthService, private loginService: LoginService) {}

    @Action(Login)
    login(ctx: StateContext<any>, { data }: Login) {
        return this.loginService.login(data).pipe(
            tap(response => {
                if (response.data) {
                    this.authService.token = response.data.accessToken;
                    this.router.navigate(["/home"]);
                }
            }),
        );
    }
}
