declare function _fileEqual0(file1: any, file2: any): any;
declare function getBackgroundCache(): any;
declare const Clutter: any;
declare const GDesktopEnums: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const GnomeDesktop: any;
declare const Meta: any;
declare const Signals: any;
declare const LoginManager: any;
declare const Main: any;
declare const Params: any;
declare var DEFAULT_BACKGROUND_COLOR: any;
declare const BACKGROUND_SCHEMA: "org.gnome.desktop.background";
declare const PRIMARY_COLOR_KEY: "primary-color";
declare const SECONDARY_COLOR_KEY: "secondary-color";
declare const COLOR_SHADING_TYPE_KEY: "color-shading-type";
declare const BACKGROUND_STYLE_KEY: "picture-options";
declare const PICTURE_URI_KEY: "picture-uri";
declare const PICTURE_URI_DARK_KEY: "picture-uri-dark";
declare const INTERFACE_SCHEMA: "org.gnome.desktop.interface";
declare const COLOR_SCHEME_KEY: "color-scheme";
declare var FADE_ANIMATION_TIME: number;
declare var ANIMATION_OPACITY_STEP_INCREMENT: number;
declare var ANIMATION_MIN_WAKEUP_INTERVAL: number;
declare let _backgroundCache: any;
declare var BackgroundCache: {
    new (): {
        _fileMonitors: {};
        _backgroundSources: {};
        _animations: {};
        monitorFile(file: any): void;
        getAnimation(params: any): void;
        getBackgroundSource(layoutManager: any, settingsSchema: any): any;
        releaseBackgroundSource(settingsSchema: any): void;
    };
};
declare var Background: any;
declare let _systemBackground: any;
declare var SystemBackground: any;
declare var BackgroundSource: {
    new (layoutManager: any, settingsSchema: any): {
        _layoutManager: any;
        _overrideImage: any;
        _settings: any;
        _backgrounds: any[];
        _monitorsChangedId: any;
        _interfaceSettings: any;
        _onMonitorsChanged(): void;
        getBackground(monitorIndex: any): any;
        destroy(): void;
    };
};
declare var Animation: any;
declare var BackgroundManager: {
    new (params: any): {
        _settingsSchema: any;
        _backgroundSource: any;
        _container: any;
        _layoutManager: any;
        _vignette: any;
        _monitorIndex: any;
        _controlPosition: any;
        _useContentSize: any;
        backgroundActor: any;
        _newBackgroundActor: any;
        destroy(): void;
        _swapBackgroundActor(): void;
        _updateBackgroundActor(): void;
        _createBackgroundActor(): any;
    };
};
//# sourceMappingURL=background.d.ts.map