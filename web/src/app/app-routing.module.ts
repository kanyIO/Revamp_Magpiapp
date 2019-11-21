import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "src/core/guards/auth.guard";

const routes: Routes = [
    {
        path: "login",
        loadChildren: () => import("src/login/login.module").then(m => m.LoginModule),
    },
    {
        path: "forgot-password",
        loadChildren: () => import("src/forgot-password/forgot-password.module").then(m => m.ForgotPasswordModule),
    },
    {
        path: "reset-password",
        loadChildren: () => import("src/reset-password/reset-password.module").then(m => m.ResetPasswordModule),
    },
    {
        path: "signup",
        loadChildren: () => import("src/signup/signup.module").then(m => m.SignupModule),
    },
    {
        path: "home",
        loadChildren: () => import("src/home/home.module").then(m => m.HomeModule),
        canLoad: [AuthGuard],
    },
    {
        path: "**",
        redirectTo: "home",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
