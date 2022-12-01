declare function accuracyLevelToString(accuracyLevel: any): string;
declare function _getGeoclueAgent(): any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Shell: any;
declare const St: any;
declare const Dialog: any;
declare const ModalDialog: any;
declare const PermissionStore: any;
declare const SystemIndicator: any;
declare const loadInterfaceXML: any;
declare const LOCATION_SCHEMA: "org.gnome.system.location";
declare const MAX_ACCURACY_LEVEL: "max-accuracy-level";
declare const ENABLED: "enabled";
declare const APP_PERMISSIONS_TABLE: "location";
declare const APP_PERMISSIONS_ID: "location";
declare namespace GeoclueAccuracyLevel {
    const NONE: number;
    const COUNTRY: number;
    const CITY: number;
    const NEIGHBORHOOD: number;
    const STREET: number;
    const EXACT: number;
}
declare var GeoclueIface: any;
declare const GeoclueManager: any;
declare var AgentIface: any;
declare let _geoclueAgent: any;
declare var GeoclueAgent: any;
declare var Indicator: any;
declare var AppAuthorizer: {
    new (desktopId: any, reqAccuracyLevel: any, permStoreProxy: any, maxAccuracyLevel: any): {
        desktopId: any;
        reqAccuracyLevel: any;
        _permStoreProxy: any;
        _maxAccuracyLevel: any;
        _permissions: {};
        _accuracyLevel: number;
        authorize(): Promise<number>;
        _app: any;
        _userAuthorizeApp(): Promise<any>;
        _dialog: any;
        _completeAuth(): number;
        _saveToPermissionStore(): Promise<void>;
    };
};
declare var GeolocationDialog: any;
//# sourceMappingURL=location.d.ts.map