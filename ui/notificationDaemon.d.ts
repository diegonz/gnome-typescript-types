declare function objectPathFromAppId(appId: any): string;
declare function getPlatformData(): {
    "desktop-startup-id": any;
};
declare function InvalidAppError(): void;
declare const GdkPixbuf: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Shell: any;
declare const St: any;
declare const Config: any;
declare const Main: any;
declare const MessageTray: any;
declare const Params: any;
declare const loadInterfaceXML: any;
declare const FdoNotificationsIface: any;
declare namespace NotificationClosedReason {
    const EXPIRED: number;
    const DISMISSED: number;
    const APP_CLOSED: number;
    const UNDEFINED: number;
}
declare namespace Urgency {
    const LOW: number;
    const NORMAL: number;
    const CRITICAL: number;
}
declare var FdoNotificationDaemon: {
    new (): {
        _dbusImpl: any;
        _sources: any[];
        _notifications: {};
        _nextNotificationId: number;
        _imageForNotificationData(hints: any): any;
        _fallbackIconForNotificationData(hints: any): any;
        _iconForNotificationData(icon: any): any;
        _lookupSource(title: any, pid: any): any;
        _getSource(title: any, pid: any, ndata: any, sender: any): any;
        NotifyAsync(params: any, invocation: any): any;
        _notifyForSource(source: any, ndata: any): void;
        CloseNotification(id: any): void;
        GetCapabilities(): string[];
        GetServerInformation(): any[];
        _emitNotificationClosed(id: any, reason: any): void;
        _emitActionInvoked(id: any, action: any): void;
    };
};
declare var FdoNotificationDaemonSource: any;
declare namespace PRIORITY_URGENCY_MAP {
    const low: any;
    const normal: any;
    const high: any;
    const urgent: any;
}
declare var GtkNotificationDaemonNotification: any;
declare const FdoApplicationIface: any;
declare const FdoApplicationProxy: any;
declare var GtkNotificationDaemonAppSource: any;
declare const GtkNotificationsIface: any;
declare var GtkNotificationDaemon: {
    new (): {
        _sources: {};
        _dbusImpl: any;
        _ensureAppSource(appId: any): any;
        _loadNotifications(): void;
        _isLoading: boolean;
        _saveNotifications(): void;
        AddNotificationAsync(params: any, invocation: any): void;
        RemoveNotificationAsync(params: any, invocation: any): void;
    };
};
declare var NotificationDaemon: {
    new (): {
        _fdoNotificationDaemon: {
            _dbusImpl: any;
            _sources: any[];
            _notifications: {};
            _nextNotificationId: number;
            _imageForNotificationData(hints: any): any;
            _fallbackIconForNotificationData(hints: any): any;
            _iconForNotificationData(icon: any): any;
            _lookupSource(title: any, pid: any): any;
            _getSource(title: any, pid: any, ndata: any, sender: any): any;
            NotifyAsync(params: any, invocation: any): any;
            _notifyForSource(source: any, ndata: any): void;
            CloseNotification(id: any): void;
            GetCapabilities(): string[];
            GetServerInformation(): any[];
            _emitNotificationClosed(id: any, reason: any): void;
            _emitActionInvoked(id: any, action: any): void;
        };
        _gtkNotificationDaemon: {
            _sources: {};
            _dbusImpl: any;
            _ensureAppSource(appId: any): any;
            _loadNotifications(): void;
            _isLoading: boolean;
            _saveNotifications(): void;
            AddNotificationAsync(params: any, invocation: any): void;
            RemoveNotificationAsync(params: any, invocation: any): void;
        };
    };
};
//# sourceMappingURL=notificationDaemon.d.ts.map