declare const Atk: any;
declare const Clutter: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Animation: any;
declare const AppMenu: any;
declare const Config: any;
declare const CtrlAltTab: any;
declare const DND: any;
declare const Overview: any;
declare const PopupMenu: any;
declare const PanelMenu: any;
declare const QuickSettingsMenu: any;
declare const SystemIndicator: any;
declare const Main: any;
declare var PANEL_ICON_SIZE: number;
declare var APP_MENU_ICON_MARGIN: number;
declare var BUTTON_DND_ACTIVATION_TIMEOUT: number;
declare const N_QUICK_SETTINGS_COLUMNS: 2;
/**
 * AppMenuButton:
 *
 * This class manages the "application menu" component.  It tracks the
 * currently focused application.  However, when an app is launched,
 * this menu also handles startup notification for it.  So when we
 * have an active startup notification, we switch modes to display that.
 */
declare var AppMenuButton: any;
declare var ActivitiesButton: any;
declare const UnsafeModeIndicator: any;
declare var QuickSettings: any;
declare namespace PANEL_ITEM_IMPLEMENTATIONS {
    export { ActivitiesButton as activities };
    export { AppMenuButton as appMenu };
    export { QuickSettings as quickSettings };
    export const dateMenu: any;
    export const a11y: any;
    export const keyboard: any;
    export const dwellClick: any;
    export const screenRecording: any;
    export const screenSharing: any;
}
declare var Panel: any;
//# sourceMappingURL=panel.d.ts.map