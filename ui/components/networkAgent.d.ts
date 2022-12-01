declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const NM: any;
declare const Pango: any;
declare const Shell: any;
declare const St: any;
declare const Signals: any;
declare const Dialog: any;
declare const Main: any;
declare const MessageTray: any;
declare const ModalDialog: any;
declare const ShellEntry: any;
declare const VPN_UI_GROUP: "VPN Plugin UI";
declare var NetworkSecretDialog: any;
declare var VPNRequestHandler: {
    new (agent: any, requestId: any, authHelper: any, serviceType: any, connection: any, hints: any, flags: any): {
        _agent: any;
        _requestId: any;
        _connection: any;
        _flags: any;
        _pluginOutBuffer: any[];
        _title: any;
        _description: any;
        _content: any[];
        _shellDialog: any;
        _newStylePlugin: any;
        _childPid: any;
        _stdin: any;
        _stdout: any;
        _dataStdout: any;
        _childWatch: any;
        cancel(respond: any): void;
        destroy(): void;
        _destroyed: boolean;
        _vpnChildFinished(pid: any, status: any, _requestObj: any): void;
        _vpnChildProcessLineOldStyle(line: any): void;
        _previousLine: any;
        _readStdoutOldStyle(): Promise<void>;
        _readStdoutNewStyle(): Promise<void>;
        _showNewStyleDialog(): void;
        _writeConnection(): void;
    };
};
declare var NetworkAgent: {
    new (): {
        _native: any;
        _dialogs: {};
        _vpnRequests: {};
        _notifications: {};
        _initialized: boolean;
        _initNative(): Promise<void>;
        enable(): void;
        disable(): void;
        _showNotification(requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
        _newRequest(agent: any, requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
        _handleRequest(requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
        _cancelRequest(agent: any, requestId: any): void;
        _vpnRequest(requestId: any, connection: any, hints: any, flags: any): Promise<void>;
        _findAuthBinary(serviceType: any): Promise<{
            fileName: any;
            supportsHints: any;
            externalUIMode: any;
        }>;
    };
};
declare var Component: {
    new (): {
        _native: any;
        _dialogs: {};
        _vpnRequests: {};
        _notifications: {};
        _initialized: boolean;
        _initNative(): Promise<void>;
        enable(): void;
        disable(): void;
        _showNotification(requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
        _newRequest(agent: any, requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
        _handleRequest(requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
        _cancelRequest(agent: any, requestId: any): void;
        _vpnRequest(requestId: any, connection: any, hints: any, flags: any): Promise<void>;
        _findAuthBinary(serviceType: any): Promise<{
            fileName: any;
            supportsHints: any;
            externalUIMode: any;
        }>;
    };
};
//# sourceMappingURL=networkAgent.d.ts.map