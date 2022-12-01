declare const Gio: any;
declare const GLib: any;
declare const loadInterfaceXML: any;
declare const ServiceImplementation: any;
declare const NotificationsIface: any;
declare const NotificationsProxy: any;
declare var NotificationDaemon: {
    new (): {
        _autoShutdown: boolean;
        _activeNotifications: Map<any, any>;
        _proxy: any;
        _emitSignal(sender: any, signalName: any, params: any): void;
        _untrackSender(sender: any): void;
        _checkNotificationId(invocation: any, id: any): boolean;
        register(): void;
        NotifyAsync(params: any, invocation: any): Promise<void>;
        CloseNotificationAsync(params: any, invocation: any): Promise<void>;
        GetCapabilitiesAsync(params: any, invocation: any): Promise<void>;
        GetServerInformationAsync(params: any, invocation: any): Promise<void>;
        _getSenderPid(sender: any): Promise<any>;
        _objectPath: any;
        _dbusImpl: any;
        _senders: Map<any, any>;
        _holdCount: number;
        _hasSignals: boolean;
        _shutdownTimeoutId: number;
        export(): void;
        unexport(): void;
        hold(): void;
        release(): void;
        _handleError(invocation: any, error: any): bool;
        _maybeShutdown(): void;
        _queueShutdownCheck(): void;
        _trackSender(sender: any): void;
        _injectTracking(methodName: any): void;
    };
};
//# sourceMappingURL=notificationDaemon.d.ts.map