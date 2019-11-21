import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecaptchaFormsModule, RecaptchaModule } from "ng-recaptcha";
import { NgbDropdownModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { AgGridModule } from "@ag-grid-community/angular";

import { PageSizeStatusPanelComponent } from "./components/ag-grid/page-size-status-panel/page-size-status-panel.component";

import { LanguageDropdownComponent } from "./components/language-dropdown/language-dropdown.component";
import { ErrorTooltipDirective } from "./directives/error-tooltip.directive";

const modules = [
    CommonModule,
    FormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    TranslateModule,
    NgxSpinnerModule,
    ToastrModule,
];
const agGridComponents = [PageSizeStatusPanelComponent];
const components = [LanguageDropdownComponent, ErrorTooltipDirective, ...agGridComponents];

@NgModule({
    imports: [...modules, AgGridModule.withComponents([...agGridComponents])],
    declarations: [...components],
    exports: [...modules, AgGridModule, ...components],
})
export class SharedModule {}
