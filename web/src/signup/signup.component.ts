import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { MustMatchValidator } from "src/shared/validators/must-match.validator";

import { AppState } from "src/app/store/app.state";
import { CreateUser } from "src/user/store/user.actions";

@Component({
    templateUrl: "./signup.component.html",
})
export class SignupComponent implements OnInit {
    @Select(AppState.version) version$: Observable<string>;

    formGroup: FormGroup;
    username: AbstractControl;
    email: AbstractControl;
    password: AbstractControl;
    confirmPassword: AbstractControl;
    recaptcha: AbstractControl;

    constructor(private store: Store, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group(
            {
                username: new FormControl("", [Validators.required, Validators.minLength(4)]),
                email: new FormControl("", [Validators.required, Validators.email]),
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
        this.username = this.formGroup.controls.username;
        this.email = this.formGroup.controls.email;
        this.password = this.formGroup.controls.password;
        this.confirmPassword = this.formGroup.controls.confirmPassword;
        this.recaptcha = this.formGroup.controls.recaptcha;
    }

    onSignupButtonClick() {
        if (this.formGroup.valid) {
            this.store.dispatch(
                new CreateUser({
                    username: this.username.value,
                    email: this.email.value,
                    password: this.password.value,
                }),
            );
        }
    }
}
