declare function shouldAutorunMount(mount: any): boolean;
declare function isMountRootHidden(root: any): any;
declare function isMountNonLocal(mount: any): boolean;
declare function startAppForMount(app: any, mount: any): boolean;
declare function HotplugSniffer(): any;
declare const Clutter: any;
declare const Gio: any;
declare const GObject: any;
declare const St: any;
declare const GnomeSession: any;
declare const Main: any;
declare const MessageTray: any;
declare const loadInterfaceXML: any;
declare const SETTINGS_SCHEMA: "org.gnome.desktop.media-handling";
declare const SETTING_DISABLE_AUTORUN: "autorun-never";
declare const SETTING_START_APP: "autorun-x-content-start-app";
declare const SETTING_IGNORE: "autorun-x-content-ignore";
declare const SETTING_OPEN_FOLDER: "autorun-x-content-open-folder";
declare namespace AutorunSetting {
    const RUN: number;
    const IGNORE: number;
    const FILES: number;
    const ASK: number;
}
declare const HotplugSnifferIface: any;
declare const HotplugSnifferProxy: any;
declare var ContentTypeDiscoverer: {
    new (): {
        _settings: any;
        guessContentTypes(mount: any): Promise<any[]>;
    };
};
declare var AutorunManager: {
    new (): {
        _session: any;
        _volumeMonitor: any;
        _dispatcher: {
            _manager: any;
            _sources: any[];
            _settings: any;
            _getAutorunSettingForType(contentType: any): number;
            _getSourceForMount(mount: any): any;
            _addSource(mount: any, apps: any): void;
            addMount(mount: any, apps: any, contentTypes: any): void;
            removeMount(mount: any): void;
        };
        enable(): void;
        disable(): void;
        _onMountAdded(monitor: any, mount: any): Promise<void>;
        _onMountRemoved(monitor: any, mount: any): void;
    };
};
declare var AutorunDispatcher: {
    new (manager: any): {
        _manager: any;
        _sources: any[];
        _settings: any;
        _getAutorunSettingForType(contentType: any): number;
        _getSourceForMount(mount: any): any;
        _addSource(mount: any, apps: any): void;
        addMount(mount: any, apps: any, contentTypes: any): void;
        removeMount(mount: any): void;
    };
};
declare var AutorunSource: any;
declare var AutorunNotification: any;
declare var Component: {
    new (): {
        _session: any;
        _volumeMonitor: any;
        _dispatcher: {
            _manager: any;
            _sources: any[];
            _settings: any;
            _getAutorunSettingForType(contentType: any): number;
            _getSourceForMount(mount: any): any;
            _addSource(mount: any, apps: any): void;
            addMount(mount: any, apps: any, contentTypes: any): void;
            removeMount(mount: any): void;
        };
        enable(): void;
        disable(): void;
        _onMountAdded(monitor: any, mount: any): Promise<void>;
        _onMountRemoved(monitor: any, mount: any): void;
    };
};
//# sourceMappingURL=autorunManager.d.ts.map