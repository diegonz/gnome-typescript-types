declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Polkit: any;
declare const Shell: any;
declare const Signals: any;
declare const Main: any;
declare const MessageTray: any;
declare const SystemIndicator: any;
declare const loadInterfaceXML: any;
declare const BoltClientInterface: any;
declare const BoltDeviceInterface: any;
declare const BoltDeviceProxy: any;
declare namespace Status {
    const DISCONNECTED: string;
    const CONNECTING: string;
    const CONNECTED: string;
    const AUTHORIZING: string;
    const AUTH_ERROR: string;
    const AUTHORIZED: string;
}
declare namespace Policy {
    const DEFAULT: string;
    const MANUAL: string;
    const AUTO: string;
}
declare namespace AuthCtrl {
    const NONE: string;
}
declare namespace AuthMode {
    const DISABLED: string;
    const ENABLED: string;
}
declare const BOLT_DBUS_CLIENT_IFACE: "org.freedesktop.bolt1.Manager";
declare const BOLT_DBUS_NAME: "org.freedesktop.bolt";
declare const BOLT_DBUS_PATH: "/org/freedesktop/bolt";
declare var Client: {
    new (): {
        _proxy: any;
        probing: boolean;
        _getProxy(): Promise<void>;
        _deviceAddedId: any;
        _onPropertiesChanged(proxy: any, properties: any): void;
        _onDeviceAdded(proxy: any, emitter: any, params: any): void;
        close(): void;
        enrollDevice(id: any, policy: any): Promise<any>;
        readonly authMode: any;
    };
};
declare var AuthRobot: {
    new (client: any): {
        _client: any;
        _devicesToEnroll: any[];
        _enrolling: boolean;
        close(): void;
        _onDeviceAdded(cli: any, dev: any): void;
        _enrollDevices(): void;
        _enrollDevicesIdle(): Promise<any>;
    };
};
declare var Indicator: any;
//# sourceMappingURL=thunderbolt.d.ts.map