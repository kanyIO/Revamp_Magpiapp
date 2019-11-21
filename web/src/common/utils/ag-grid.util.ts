import { ValueGetterParams } from "@ag-grid-community/core";

export function PropertyValueGetter(
    field: string,
    properties: string | string[],
    separator: string = " ",
): (params: ValueGetterParams) => string {
    if (!(properties instanceof Array)) {
        properties = [properties];
    }
    return params => {
        const { data } = params;
        if (data) {
            if (data.hasOwnProperty(field)) {
                const value = data[field];
                let newValue = "";
                (properties as string[]).forEach(property => {
                    if (value.hasOwnProperty(property)) {
                        if (newValue) {
                            newValue = `${newValue}${separator}${value[property]}`;
                        } else {
                            newValue = value[property];
                        }
                    }
                });
                return newValue;
            }
        }
    };
}

export function ArrayValueGetter(field: string, separator: string = ","): (params: ValueGetterParams) => string {
    return params => {
        const { data } = params;
        if (data) {
            if (data.hasOwnProperty(field)) {
                const value = data[field];
                let newValue = "";
                value.forEach(item => {
                    if (newValue) {
                        newValue = `${newValue}${separator}${item}`;
                    } else {
                        newValue = value[item];
                    }
                });
                return newValue;
            }
        }
    };
}
