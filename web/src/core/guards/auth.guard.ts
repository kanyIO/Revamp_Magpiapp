import { Injectable } from "@angular/core";
import {
    CanLoad,
    Router,
    Route,
    UrlSegment,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanLoad, CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canLoad(route: Route, segments: UrlSegment[]): boolean {
        return this.canDo();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canDo();
    }

    private canDo(): boolean {
        if (this.authService.token) {
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
    }
}
