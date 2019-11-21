import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

export class BaseComponent implements OnDestroy {
    private mDestroy: Subject<boolean>;

    get destory(): Subject<boolean> {
        if (!this.mDestroy) {
            this.mDestroy = new Subject();
        }
        return this.mDestroy;
    }

    ngOnDestroy() {
        if (this.mDestroy) {
            this.mDestroy.next(true);
            this.mDestroy.complete();
        }
    }
}
