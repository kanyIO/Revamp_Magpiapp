import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { MustMatchValidator } from "src/shared/validators/must-match.validator";

import { AppState } from "src/app/store/app.state";
import { ResetPasswordRequest } from "./store/reset-password.actions";

@Component({
    templateUrl: "./reset-password.component.html",
})
export class ResetPasswordComponent implements OnInit {
    @Select(AppState.version) version$: Observable<string>;

    formGroup: FormGroup;
    password: AbstractControl;
    confirmPassword: AbstractControl;
    recaptcha: AbstractControl;

    constructor(private store: Store, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group(
            {
                password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
                confirmPassword: new FormControl("", [Validators.required]),
                recaptcha: new FormControl(
                    null,
                    (this.store.selectSnapshot(AppState.production) && [Validators.required]) || [],
                ),
            },
            {
                validators: MustMatchValidator("password", "confirmPassword"),
            },
        );
        this.password = this.formGroup.controls.password;
        this.confirmPassword = this.formGroup.controls.confirmPassword;
        this.recaptcha = this.formGroup.controls.recaptcha;
    }

    onResetPasswordButtonClick() {
        if (this.formGroup.valid) {
            this.store.dispatch(
                new ResetPasswordRequest({
                    token: this.activatedRoute.snapshot.queryParams.token,
                    password: this.password.value,
                }),
            );
        }
    }
}
