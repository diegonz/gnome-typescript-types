declare function _getCategories(info: any): any;
declare function _listsIntersect(a: any, b: any): boolean;
declare function _getFolderName(folder: any): any;
declare function _getViewFromIcon(icon: any): any;
declare function _findBestFolderName(apps: any): any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Graphene: any;
declare const Pango: any;
declare const Shell: any;
declare const St: any;
declare const AppFavorites: any;
declare const AppMenu: any;
declare const BoxPointer: any;
declare const DND: any;
declare const GrabHelper: any;
declare const IconGrid: any;
declare const Layout: any;
declare const Main: any;
declare const PageIndicators: any;
declare const ParentalControlsManager: any;
declare const PopupMenu: any;
declare const Search: any;
declare const SwipeTracker: any;
declare const Params: any;
declare const SystemActions: any;
declare var MENU_POPUP_TIMEOUT: number;
declare var POPDOWN_DIALOG_TIMEOUT: number;
declare var FOLDER_SUBICON_FRACTION: number;
declare var VIEWS_SWITCH_TIME: number;
declare var VIEWS_SWITCH_ANIMATION_DELAY: number;
declare var SCROLL_TIMEOUT_TIME: number;
declare var APP_ICON_SCALE_IN_TIME: number;
declare var APP_ICON_SCALE_IN_DELAY: number;
declare var APP_ICON_TITLE_EXPAND_TIME: number;
declare var APP_ICON_TITLE_COLLAPSE_TIME: number;
declare const FOLDER_DIALOG_ANIMATION_TIME: 200;
declare const PAGE_PREVIEW_ANIMATION_TIME: 150;
declare const PAGE_INDICATOR_FADE_TIME: 200;
declare const PAGE_PREVIEW_RATIO: 0.2;
declare const OVERSHOOT_THRESHOLD: 20;
declare const OVERSHOOT_TIMEOUT: 1000;
declare const DELAYED_MOVE_TIMEOUT: 200;
declare const DIALOG_SHADE_NORMAL: any;
declare const DIALOG_SHADE_HIGHLIGHT: any;
declare namespace DEFAULT_FOLDERS {
    namespace Utilities {
        const name: string;
        const categories: string[];
        const apps: string[];
    }
    namespace YaST {
        const name_1: string;
        export { name_1 as name };
        const categories_1: string[];
        export { categories_1 as categories };
    }
}
declare const AppGrid: any;
declare const BaseAppViewGridLayout: any;
declare var BaseAppView: any;
declare var PageManager: any;
declare var AppDisplay: any;
declare var AppSearchProvider: {
    new (): {
        _appSys: any;
        id: string;
        isRemoteProvider: boolean;
        canLaunchSearch: boolean;
        _systemActions: any;
        _parentalControlsManager: any;
        getResultMetas(apps: any): Promise<any>;
        filterResults(results: any, maxNumber: any): any;
        getInitialResultSet(terms: any, cancellable: any): Promise<any>;
        getSubsearchResultSet(previousResults: any, terms: any, cancellable: any): Promise<any>;
        createResultObject(resultMeta: any): any;
    };
};
declare var AppViewItem: any;
declare var FolderGrid: any;
declare var FolderView: any;
declare var FolderIcon: any;
declare var AppFolderDialog: any;
declare var AppIcon: any;
declare var SystemActionIcon: any;
//# sourceMappingURL=appDisplay.d.ts.map