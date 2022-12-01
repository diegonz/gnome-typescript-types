declare function _loadMode(file: any, info: any): void;
declare function _loadModes(): void;
declare function listModes(): void;
declare const GLib: any;
declare const Signals: any;
declare const FileUtils: any;
declare const Params: any;
declare const Config: any;
declare const DEFAULT_MODE: "restrictive";
declare const USER_SESSION_COMPONENTS: string[];
declare const _modes: {
    restrictive: {
        parentMode: any;
        stylesheetName: string;
        themeResourceName: string;
        hasOverview: boolean;
        showCalendarEvents: boolean;
        showWelcomeDialog: boolean;
        allowSettings: boolean;
        allowScreencast: boolean;
        enabledExtensions: any[];
        hasRunDialog: boolean;
        hasWorkspaces: boolean;
        hasWindows: boolean;
        hasNotifications: boolean;
        hasWmMenus: boolean;
        isLocked: boolean;
        isGreeter: boolean;
        isPrimary: boolean;
        unlockDialog: any;
        components: any[];
        panel: {
            left: any[];
            center: any[];
            right: any[];
        };
        panelStyle: any;
    };
    gdm: {
        hasNotifications: boolean;
        isGreeter: boolean;
        isPrimary: boolean;
        unlockDialog: any;
        components: string[];
        panel: {
            left: any[];
            center: string[];
            right: string[];
        };
        panelStyle: string;
    };
    'unlock-dialog': {
        isLocked: boolean;
        unlockDialog: any;
        components: string[];
        panel: {
            left: any[];
            center: any[];
            right: string[];
        };
        panelStyle: string;
    };
    user: {
        hasOverview: boolean;
        showCalendarEvents: boolean;
        showWelcomeDialog: boolean;
        allowSettings: boolean;
        allowScreencast: boolean;
        hasRunDialog: boolean;
        hasWorkspaces: boolean;
        hasWindows: boolean;
        hasWmMenus: boolean;
        hasNotifications: boolean;
        isLocked: boolean;
        isPrimary: boolean;
        unlockDialog: any;
        components: string[];
        panel: {
            left: string[];
            center: string[];
            right: string[];
        };
    };
};
declare var SessionMode: {
    new (): {
        _modeStack: any[];
        pushMode(mode: any): void;
        popMode(mode: any): void;
        switchMode(to: any): void;
        readonly currentMode: any;
        _sync(): void;
    };
};
//# sourceMappingURL=sessionMode.d.ts.map