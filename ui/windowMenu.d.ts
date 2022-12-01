declare const GLib: any;
declare const Meta: any;
declare const St: any;
declare const BoxPointer: any;
declare const Main: any;
declare const PopupMenu: any;
declare const Screenshot: any;
declare var WindowMenu: {
    new (window: any, sourceActor: any): {
        _buildMenu(window: any): void;
        _grabAction(window: any, grabOp: any, time: any): void;
    };
};
declare var WindowMenuManager: {
    new (): {
        _manager: any;
        _sourceActor: any;
        showWindowMenuForWindow(window: any, type: any, rect: any): void;
    };
};
//# sourceMappingURL=windowMenu.d.ts.map