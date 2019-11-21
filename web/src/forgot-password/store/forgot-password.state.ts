import { Router } from "@angular/router";
import { State, Action, StateContext } from "@ngxs/store";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs/operators";

import { ForgotPasswordService } from "../services/forgot-password.service";
import { ForgotPasswordRequest } from "./forgot-password.actions";

@State<any>({
    name: "forgotPassword",
    defaults: {},
})
export class ForgotPasswordState {
    constructor(
        private router: Router,
        private forgotPasswordService: ForgotPasswordService,
        private translateService: TranslateService,
        private toastrService: ToastrService,
    ) {}

    @Action(ForgotPasswordRequest)
    request(ctx: StateContext<any>, { data }: ForgotPasswordRequest) {
        return this.forgotPasswordService.request(data).pipe(
            tap(response => {
                if (response.data) {
                    this.toastrService.success(this.translateService.instant("forgot.password.success"));
                    this.router.navigate(["/login"]);
                }
            }),
        );
    }
}
