declare const Gio: any;
declare const GLib: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const APP_ALLOWLIST: string[];
declare const INTROSPECT_DBUS_API_VERSION: 3;
declare const loadInterfaceXML: any;
declare const DBusSenderChecker: any;
declare const IntrospectDBusIface: any;
declare var IntrospectService: {
    new (): {
        _dbusImpl: any;
        _runningApplications: {};
        _runningApplicationsDirty: boolean;
        _activeApplication: any;
        _activeApplicationDirty: boolean;
        _animationsEnabled: boolean;
        _appSystem: any;
        _senderChecker: any;
        _settings: any;
        _isStandaloneApp(app: any): any;
        _getSandboxedAppId(app: any): any;
        _syncRunningApplications(): void;
        _isEligibleWindow(window: any): boolean;
        GetRunningApplicationsAsync(params: any, invocation: any): Promise<void>;
        GetWindowsAsync(params: any, invocation: any): Promise<void>;
        _syncAnimationsEnabled(): void;
        _syncScreenSize(): void;
        _screenWidth: any;
        _screenHeight: any;
        readonly AnimationsEnabled: boolean;
        readonly ScreenSize: any[];
        readonly version: number;
    };
};
//# sourceMappingURL=introspect.d.ts.map