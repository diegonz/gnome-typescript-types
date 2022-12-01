declare const Clutter: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Main: any;
declare const SwitcherPopup: any;
declare const Params: any;
declare var POPUP_APPICON_SIZE: number;
declare namespace SortGroup {
    const TOP: number;
    const MIDDLE: number;
    const BOTTOM: number;
}
declare var CtrlAltTabManager: {
    new (): {
        _items: any[];
        addGroup(root: any, name: any, icon: any, params: any): void;
        removeGroup(root: any): void;
        focusGroup(item: any, timestamp: any): void;
        _sortItems(a: any, b: any): number;
        popup(backward: any, binding: any, mask: any): void;
        _popup: any;
        _focusWindows(timestamp: any): void;
    };
};
declare var CtrlAltTabPopup: any;
declare var CtrlAltTabSwitcher: any;
//# sourceMappingURL=ctrlAltTab.d.ts.map