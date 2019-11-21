import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { AppState } from "src/app/store/app.state";
import { ForgotPasswordRequest } from "./store/forgot-password.actions";

@Component({
    templateUrl: "./forgot-password.component.html",
})
export class ForgotPasswordComponent implements OnInit {
    @Select(AppState.version) version$: Observable<string>;

    formGroup: FormGroup;
    username: AbstractControl;
    recaptcha: AbstractControl;

    constructor(private store: Store, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl("", [Validators.required]),
            recaptcha: new FormControl(
                null,
                (this.store.selectSnapshot(AppState.production) && [Validators.required]) || [],
            ),
        });
        this.username = this.formGroup.controls.username;
        this.recaptcha = this.formGroup.controls.recaptcha;
    }

    onForgotPasswordButtonClick() {
        if (this.formGroup.valid) {
            this.store.dispatch(
                new ForgotPasswordRequest({
                    username: this.username.value,
                }),
            );
        }
    }
}
