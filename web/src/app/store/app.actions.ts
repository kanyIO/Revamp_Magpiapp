export class InitLanguage {
    static readonly type = "[App] InitLanguage";
}

export class SetCurrentLanguage {
    static readonly type = "[App] SetCurrentLanguage";
    constructor(public language: string) {}
}
