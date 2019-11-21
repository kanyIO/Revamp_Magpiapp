import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { AuthService } from "src/core/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { Login } from "./store/login.actions";

@Component({
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    @Select(AppState.version) version$: Observable<string>;

    formGroup: FormGroup;
    username: AbstractControl;
    password: AbstractControl;
    persistent: AbstractControl;

    constructor(private store: Store, private formBuilder: FormBuilder, private authService: AuthService) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required]),
            persistent: new FormControl(false),
        });
        this.username = this.formGroup.controls.username;
        this.password = this.formGroup.controls.password;
        this.persistent = this.formGroup.controls.persistent;
    }

    onLoginButtonClick() {
        if (this.formGroup.valid) {
            this.authService.persistent = this.persistent.value;
            this.store.dispatch(
                new Login({
                    username: this.username.value,
                    password: this.password.value,
                }),
            );
        }
    }
}
