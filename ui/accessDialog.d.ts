declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Pango: any;
declare const Shell: any;
declare const St: any;
declare const CheckBox: any;
declare const Dialog: any;
declare const ModalDialog: any;
declare const loadInterfaceXML: any;
declare const RequestIface: any;
declare const AccessIface: any;
declare namespace DialogResponse {
    const OK: number;
    const CANCEL: number;
    const CLOSED: number;
}
declare var AccessDialog: any;
declare var AccessDialogDBus: {
    new (): {
        _accessDialog: any;
        _windowTracker: any;
        _dbusImpl: any;
        AccessDialogAsync(params: any, invocation: any): void;
    };
};
//# sourceMappingURL=accessDialog.d.ts.map