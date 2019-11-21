import { Router } from "@angular/router";
import { State, Action, StateContext } from "@ngxs/store";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs/operators";

import { ResetPasswordService } from "../services/reset-password.service";
import { ResetPasswordRequest } from "./reset-password.actions";

@State<any>({
    name: "resetPassword",
    defaults: {},
})
export class ResetPasswordState {
    constructor(
        private router: Router,
        private resetPasswordService: ResetPasswordService,
        private translateService: TranslateService,
        private toastrService: ToastrService,
    ) {}

    @Action(ResetPasswordRequest)
    request(ctx: StateContext<any>, { data }: ResetPasswordRequest) {
        return this.resetPasswordService.request(data).pipe(
            tap(response => {
                if (response.data) {
                    this.toastrService.success(this.translateService.instant("reset.password.success"));
                    this.router.navigate(["/login"]);
                }
            }),
        );
    }
}
