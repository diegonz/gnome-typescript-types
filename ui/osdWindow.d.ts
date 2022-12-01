declare const Clutter: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const St: any;
declare const BarLevel: any;
declare const Layout: any;
declare const Main: any;
declare var HIDE_TIMEOUT: number;
declare var FADE_TIME: number;
declare var LEVEL_ANIMATION_TIME: number;
declare var OsdWindow: any;
declare var OsdWindowManager: {
    new (): {
        _osdWindows: any[];
        _monitorsChanged(): void;
        _showOsdWindow(monitorIndex: any, icon: any, label: any, level: any, maxLevel: any): void;
        show(monitorIndex: any, icon: any, label: any, level: any, maxLevel: any): void;
        hideAll(): void;
    };
};
//# sourceMappingURL=osdWindow.d.ts.map