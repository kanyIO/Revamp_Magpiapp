import { Injectable } from "@angular/core";

const AuthToken = "auth-token";

@Injectable({ providedIn: "root" })
export class AuthService {
    private storage: Storage = localStorage.getItem(AuthToken) ? localStorage : sessionStorage;
    private authToken: string = null;

    set token(value: string) {
        if (value) {
            this.storage.setItem(AuthToken, value);
        } else {
            this.storage.removeItem(AuthToken);
        }
        this.authToken = value;
    }

    get token(): string {
        if (!this.authToken) {
            this.authToken = this.storage.getItem(AuthToken);
        }
        return this.authToken;
    }

    set persistent(value: boolean) {
        this.storage = value ? localStorage : sessionStorage;
    }

    get persistent(): boolean {
        return this.storage === localStorage;
    }
}
