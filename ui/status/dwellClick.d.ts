declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const St: any;
declare const PanelMenu: any;
declare const MOUSE_A11Y_SCHEMA: "org.gnome.desktop.a11y.mouse";
declare const KEY_DWELL_CLICK_ENABLED: "dwell-click-enabled";
declare const KEY_DWELL_MODE: "dwell-mode";
declare const DWELL_MODE_WINDOW: "window";
declare namespace DWELL_CLICK_MODES {
    namespace primary {
        const name: any;
        const icon: string;
        const type: any;
    }
    namespace double {
        const name_1: any;
        export { name_1 as name };
        const icon_1: string;
        export { icon_1 as icon };
        const type_1: any;
        export { type_1 as type };
    }
    namespace drag {
        const name_2: any;
        export { name_2 as name };
        const icon_2: string;
        export { icon_2 as icon };
        const type_2: any;
        export { type_2 as type };
    }
    namespace secondary {
        const name_3: any;
        export { name_3 as name };
        const icon_3: string;
        export { icon_3 as icon };
        const type_3: any;
        export { type_3 as type };
    }
}
declare var DwellClickIndicator: any;
//# sourceMappingURL=dwellClick.d.ts.map