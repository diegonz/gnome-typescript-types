declare function haveSystemd(): boolean;
declare function versionCompare(required: any, reference: any): boolean;
declare function canLock(): boolean;
declare function registerSessionWithGDM(): Promise<void>;
/**
 * getLoginManager:
 * An abstraction over systemd/logind and ConsoleKit.
 * @returns {object} - the LoginManager singleton
 *
 */
declare function getLoginManager(): object;
declare const GLib: any;
declare const Gio: any;
declare const Signals: any;
declare const loadInterfaceXML: any;
declare const SystemdLoginManagerIface: any;
declare const SystemdLoginSessionIface: any;
declare const SystemdLoginUserIface: any;
declare const SystemdLoginManager: any;
declare const SystemdLoginSession: any;
declare const SystemdLoginUser: any;
declare let _loginManager: any;
declare var LoginManagerSystemd: {
    new (): {
        _proxy: any;
        _userProxy: any;
        getCurrentSessionProxy(): Promise<any>;
        _currentSession: any;
        canSuspend(): Promise<{
            canSuspend: boolean;
            needsAuth: boolean;
        }>;
        canRebootToBootLoaderMenu(): Promise<{
            canRebootToBootLoaderMenu: boolean;
            needsAuth: boolean;
        }>;
        setRebootToBootLoaderMenu(): void;
        listSessions(): Promise<any>;
        suspend(): void;
        inhibit(reason: any, cancellable: any): Promise<any>;
        _prepareForSleep(proxy: any, sender: any, [aboutToSuspend]: [any]): void;
    };
};
declare var LoginManagerDummy: {
    new (): {
        getCurrentSessionProxy(): Promise<any>;
        canSuspend(): Promise<any>;
        canRebootToBootLoaderMenu(): Promise<any>;
        setRebootToBootLoaderMenu(): void;
        listSessions(): Promise<any>;
        suspend(): void;
        inhibit(): Promise<any>;
    };
};
//# sourceMappingURL=loginManager.d.ts.map