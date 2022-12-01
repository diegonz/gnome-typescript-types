declare const Gio: any;
declare const GLib: any;
declare const loadInterfaceXML: any;
declare const ServiceImplementation: any;
declare const ScreenSaverIface: any;
declare const ScreenSaverProxy: any;
declare var ScreenSaverService: {
    new (): {
        _autoShutdown: boolean;
        _proxy: any;
        LockAsync(params: any, invocation: any): Promise<void>;
        GetActiveAsync(params: any, invocation: any): Promise<void>;
        SetActiveAsync(params: any, invocation: any): Promise<void>;
        GetActiveTimeAsync(params: any, invocation: any): Promise<void>;
        _objectPath: any;
        _dbusImpl: any;
        _senders: Map<any, any>;
        _holdCount: number;
        _hasSignals: boolean;
        _shutdownTimeoutId: number;
        register(): void;
        export(): void;
        unexport(): void;
        hold(): void;
        release(): void;
        _handleError(invocation: any, error: any): bool;
        _maybeShutdown(): void;
        _queueShutdownCheck(): void;
        _trackSender(sender: any): void;
        _untrackSender(sender: any): void;
        _injectTracking(methodName: any): void;
    };
};
//# sourceMappingURL=screenSaverService.d.ts.map