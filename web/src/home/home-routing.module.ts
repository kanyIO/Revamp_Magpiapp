import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "src/core/guards/auth.guard";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "form",
                loadChildren: () => import("src/home/features/form/form.module").then(m => m.FormModule),
            },
            {
                path: "report",
                loadChildren: () => import("src/home/features/report/report.module").then(m => m.ReportModule),
            },
            {
                path: "messaging",
                loadChildren: () => import("src/home/features/messaging/messaging.module").then(m => m.MessagingModule),
            },
            {
                path: "outbox",
                loadChildren: () => import("src/home/features/outbox/outbox.module").then(m => m.OutboxModule),
            },
            {
                path: "contact",
                loadChildren: () => import("src/home/features/contact/contact.module").then(m => m.ContactModule),
            },
            {
                path: "mobile",
                loadChildren: () => import("src/home/features/mobile/mobile.module").then(m => m.MobileModule),
            },
            {
                path: "**",
                redirectTo: "form",
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
