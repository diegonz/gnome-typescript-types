declare const Main: any;
declare var ComponentManager: {
    new (): {
        _allComponents: {};
        _enabledComponents: any[];
        _sessionUpdated(): void;
        _importComponent(name: any): any;
        _ensureComponent(name: any): any;
        _enableComponent(name: any): void;
        _disableComponent(name: any): void;
    };
};
//# sourceMappingURL=__init__.d.ts.map