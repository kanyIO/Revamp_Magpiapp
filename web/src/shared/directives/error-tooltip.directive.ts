import { Directive, OnInit, Input, ElementRef } from "@angular/core";
import { NgControl } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";

import { BaseComponent } from "src/common/components/base/base.component";
import { IKeyValue } from "src/common/models/base.model";

const DefaultErrors: IKeyValue = {
    required: "common.form.error.required",
    minlength: "common.form.error.min.length",
    maxlength: "common.form.error.max.length",
    email: "common.form.error.email",
    mustmatch: "common.form.error.must.match",
};

@Directive({
    selector: "[appErrorTooltip]",
})
export class ErrorTooltipDirective extends BaseComponent implements OnInit {
    private errors: IKeyValue = { ...DefaultErrors };

    constructor(
        private elementRef: ElementRef,
        private ngControl: NgControl,
        private ngbTooltip: NgbTooltip,
        private translateService: TranslateService,
    ) {
        super();
    }

    @Input()
    set appErrorTooltip(value: IKeyValue) {
        Object.assign(this.errors, value);
    }

    get appErrorTooltip(): IKeyValue {
        return this.errors;
    }

    ngOnInit() {
        this.ngControl.statusChanges.pipe(takeUntil(this.destory)).subscribe(() => {
            const ctrlErrors = this.ngControl.errors;
            const errors = this.errors;

            let error = "";
            for (const prop in ctrlErrors) {
                if (ctrlErrors.hasOwnProperty(prop) && errors.hasOwnProperty(prop)) {
                    error = this.translateService.instant(errors[prop], {
                        name: this.elementRef.nativeElement.placeholder,
                        requiredLength: ctrlErrors[prop].requiredLength,
                    });
                    break;
                }
            }

            this.ngbTooltip.close();
            this.ngbTooltip.ngbTooltip = error;

            if (error) {
                this.ngbTooltip.open();
            } else {
                this.ngbTooltip.close();
            }
        });
    }
}
