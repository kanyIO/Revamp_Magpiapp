import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { ReportRoutingModule } from "./report-routing.module";

import { ReportComponent } from "./report.component";

@NgModule({
    imports: [SharedModule, ReportRoutingModule],
    declarations: [ReportComponent],
})
export class ReportModule {}
