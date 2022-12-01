declare const Gio: any;
declare const Signals: any;
declare const loadInterfaceXML: any;
declare const ProviderIface: any;
declare const Provider: any;
declare const ServiceIface: any;
declare const Service: any;
declare const RealmIface: any;
declare const Realm: any;
declare var Manager: {
    new (): {
        _aggregateProvider: any;
        _realms: {};
        _loginFormat: any;
        _reloadRealms(): void;
        _reloadRealm(realm: any): void;
        _onRealmLoaded(realm: any, error: any): void;
        _updateLoginFormat(): void;
        readonly loginFormat: any;
        release(): void;
    };
};
//# sourceMappingURL=realmd.d.ts.map