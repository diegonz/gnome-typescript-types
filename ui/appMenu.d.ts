declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const AppFavorites: any;
declare const Main: any;
declare const ParentalControlsManager: any;
declare const PopupMenu: any;
declare var AppMenu: {
    new (sourceActor: Clutter.Actor, side?: St.Side, params?: {
        favoritesSection: bool;
        showSingleWindow: bool;
    }): {
        _app: any;
        _appSystem: any;
        _parentalControlsManager: any;
        _appFavorites: any;
        _enableFavorites: any;
        _showSingleWindows: any;
        _windowsChangedId: number;
        _updateWindowsLaterId: number;
        _openWindowsHeader: any;
        _windowSection: any;
        _newWindowItem: any;
        _actionSection: any;
        _onGpuMenuItem: any;
        _toggleFavoriteItem: any;
        _detailsItem: any;
        _quitItem: any;
        _onAppStateChanged(sys: any, app: any): void;
        _updateQuitItem(): void;
        _updateNewWindowItem(): void;
        _updateFavoriteItem(): void;
        _updateGpuItem(): void;
        _updateDetailsVisibility(): void;
        _animateLaunch(): void;
        _getNonDefaultLaunchGpu(): any;
        /** */
        destroy(): void;
        /**
         * @returns {bool} - true if the menu is empty
         */
        isEmpty(): bool;
        /**
         * @param {Shell.App} app - the app the menu represents
         */
        setApp(app: Shell.App): void;
        _queueUpdateWindowsSection(): void;
        _updateWindowsSection(): void;
    };
};
//# sourceMappingURL=appMenu.d.ts.map