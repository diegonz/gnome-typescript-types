declare const Gio: any;
declare const GLib: any;
declare const Meta: any;
declare const Shell: any;
declare const Config: any;
declare const ExtensionDownloader: any;
declare const ExtensionUtils: any;
declare const Main: any;
declare const Screenshot: any;
declare const loadInterfaceXML: any;
declare const DBusSenderChecker: any;
declare const ControlsState: any;
declare const GnomeShellIface: any;
declare const ScreenSaverIface: any;
declare var GnomeShell: {
    new (): {
        _dbusImpl: any;
        _senderChecker: any;
        _extensionsService: {
            _dbusImpl: any;
            _userExtensionsEnabled: boolean;
            ListExtensions(): {};
            GetExtensionInfo(uuid: any): any;
            GetExtensionErrors(uuid: any): any;
            InstallRemoteExtensionAsync([uuid]: [any], invocation: any): any;
            UninstallExtension(uuid: any): any;
            EnableExtension(uuid: any): any;
            DisableExtension(uuid: any): any;
            LaunchExtensionPrefs(uuid: any): void;
            OpenExtensionPrefs(uuid: any, parentWindow: any, options: any): void;
            ReloadExtensionAsync(params: any, invocation: any): void;
            CheckForUpdates(): void;
            readonly ShellVersion: any;
            UserExtensionsEnabled: boolean;
            _extensionStateChanged(_: any, newState: any): void;
        };
        _screenshotService: any;
        _grabbedAccelerators: Map<any, any>;
        _grabbers: Map<any, any>;
        _cachedOverviewVisible: boolean;
        /**
         * Eval:
         * @param {string} code: A string containing JavaScript code
         * @returns {Array}
         *
         * This function executes arbitrary code in the main
         * loop, and returns a boolean success and
         * JSON representation of the object as a string.
         *
         * If evaluation completes without throwing an exception,
         * then the return value will be [true, JSON.stringify(result)].
         * If evaluation fails, then the return value will be
         * [false, JSON.stringify(exception)];
         *
         */
        Eval(code: string): any[];
        /**
         * Focus the overview's search entry
         *
         * @async
         * @param {...any: any[]} params - method parameters
         * @param {Gio.DBusMethodInvocation} invocation - the invocation
         * @returns {void}
         */
        FocusSearchAsync(params: any, invocation: Gio.DBusMethodInvocation): void;
        /**
         * Show OSD with the specified parameters
         *
         * @async
         * @param {...any} params - method parameters
         * @param {Gio.DBusMethodInvocation} invocation - the invocation
         * @returns {void}
         */
        ShowOSDAsync([params]: any[], invocation: Gio.DBusMethodInvocation): void;
        /**
         * Focus specified app in the overview's app grid
         *
         * @async
         * @param {string} id - an application ID
         * @param {Gio.DBusMethodInvocation} invocation - the invocation
         * @returns {void}
         */
        FocusAppAsync([id]: string, invocation: Gio.DBusMethodInvocation): void;
        /**
         * Show the overview's app grid
         *
         * @async
         * @param {...any: any[]} params - method parameters
         * @param {Gio.DBusMethodInvocation} invocation - the invocation
         * @returns {void}
         */
        ShowApplicationsAsync(params: any, invocation: Gio.DBusMethodInvocation): void;
        GrabAcceleratorAsync(params: any, invocation: any): Promise<void>;
        GrabAcceleratorsAsync(params: any, invocation: any): Promise<void>;
        UngrabAcceleratorAsync(params: any, invocation: any): Promise<void>;
        UngrabAcceleratorsAsync(params: any, invocation: any): Promise<void>;
        ScreenTransitionAsync(params: any, invocation: any): Promise<void>;
        _emitAcceleratorActivated(action: any, device: any, timestamp: any): void;
        _grabAcceleratorForSender(accelerator: any, modeFlags: any, grabFlags: any, sender: any): any;
        _ungrabAccelerator(action: any): any;
        _ungrabAcceleratorForSender(action: any, sender: any): any;
        _onGrabberBusNameVanished(connection: any, name: any): void;
        ShowMonitorLabelsAsync(params: any, invocation: any): Promise<void>;
        HideMonitorLabelsAsync(params: any, invocation: any): Promise<void>;
        _checkOverviewVisibleChanged(): void;
        readonly Mode: any;
        OverviewActive: boolean;
        readonly ShellVersion: any;
    };
};
declare const GnomeShellExtensionsIface: any;
declare var GnomeShellExtensions: {
    new (): {
        _dbusImpl: any;
        _userExtensionsEnabled: boolean;
        ListExtensions(): {};
        GetExtensionInfo(uuid: any): any;
        GetExtensionErrors(uuid: any): any;
        InstallRemoteExtensionAsync([uuid]: [any], invocation: any): any;
        UninstallExtension(uuid: any): any;
        EnableExtension(uuid: any): any;
        DisableExtension(uuid: any): any;
        LaunchExtensionPrefs(uuid: any): void;
        OpenExtensionPrefs(uuid: any, parentWindow: any, options: any): void;
        ReloadExtensionAsync(params: any, invocation: any): void;
        CheckForUpdates(): void;
        readonly ShellVersion: any;
        UserExtensionsEnabled: boolean;
        _extensionStateChanged(_: any, newState: any): void;
    };
};
declare var ScreenSaverDBus: {
    new (screenShield: any): {
        _screenShield: any;
        _dbusImpl: any;
        LockAsync(parameters: any, invocation: any): void;
        SetActive(active: any): void;
        GetActive(): any;
        GetActiveTime(): number;
    };
};
//# sourceMappingURL=shellDBus.d.ts.map