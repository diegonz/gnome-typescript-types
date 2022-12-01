declare function getPointerWatcher(): any;
declare const GLib: any;
declare var IDLE_TIME: number;
declare let _pointerWatcher: any;
declare var PointerWatch: {
    new (watcher: any, interval: any, callback: any): {
        watcher: any;
        interval: any;
        callback: any;
        remove(): void;
    };
};
declare var PointerWatcher: {
    new (): {
        _idleMonitor: any;
        _idle: boolean;
        _watches: any[];
        pointerX: any;
        pointerY: any;
        addWatch(interval: any, callback: any): {
            watcher: any;
            interval: any;
            callback: any;
            remove(): void;
        };
        _removeWatch(watch: any): void;
        _onIdleMonitorBecameActive(): void;
        _onIdleMonitorBecameIdle(): void;
        _updateTimeout(): void;
        _timeoutId: any;
        _onTimeout(): any;
        _updatePointer(): void;
    };
};
//# sourceMappingURL=pointerWatcher.d.ts.map