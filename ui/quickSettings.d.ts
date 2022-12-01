declare const Atk: any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Graphene: any;
declare const Meta: any;
declare const Pango: any;
declare const St: any;
declare const Main: any;
declare const PopupMenu: any;
declare const Slider: any;
declare const PopupAnimation: any;
declare const DIM_BRIGHTNESS: -0.4;
declare const POPUP_ANIMATION_TIME: 400;
declare var QuickSettingsItem: any;
declare var QuickToggle: any;
declare var QuickMenuToggle: any;
declare var QuickSlider: any;
declare class QuickToggleMenu {
    constructor(sourceActor: any);
    actor: any;
    _header: any;
    _headerIcon: any;
    _headerTitle: any;
    _headerSubtitle: any;
    _headerSpacer: any;
    setHeader(icon: any, title: any, subtitle?: string): void;
    addHeaderSuffix(actor: any): void;
    open(animate: any): void;
    isOpen: boolean;
    close(animate: any): void;
    _syncChecked(): void;
    _setOpenedSubMenu(submenu: any): void;
    _openedSubMenu: any;
}
declare const QuickSettingsLayoutMeta: any;
declare const QuickSettingsLayout: any;
declare var QuickSettingsMenu: {
    new (sourceActor: any, nColumns?: number): {
        actor: any;
        _dimEffect: any;
        _overlay: any;
        _grid: any;
        addItem(item: any, colSpan?: number): void;
        _activeMenu: any;
        open(animate: any): void;
        close(animate: any): void;
        _setDimmed(dim: any): void;
    };
};
declare var SystemIndicator: any;
//# sourceMappingURL=quickSettings.d.ts.map