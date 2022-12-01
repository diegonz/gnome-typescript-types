declare function isPopupMenuItemVisible(child: any): any;
/**
 * arrowIcon
 * @param {St.Side} side - Side to which the arrow points.
 * @returns {St.Icon} a new arrow icon
 */
declare function arrowIcon(side: St.Side): St.Icon;
declare const Atk: any;
declare const Clutter: any;
declare const Gio: any;
declare const GObject: any;
declare const Graphene: any;
declare const Shell: any;
declare const St: any;
declare const Signals: any;
declare const BoxPointer: any;
declare const Main: any;
declare const Params: any;
declare namespace Ornament {
    const NONE: number;
    const DOT: number;
    const CHECK: number;
    const HIDDEN: number;
}
declare var PopupBaseMenuItem: any;
declare var PopupMenuItem: any;
declare var PopupSeparatorMenuItem: any;
declare var Switch: any;
declare var PopupSwitchMenuItem: any;
declare var PopupImageMenuItem: any;
declare var PopupMenuBase: {
    new (sourceActor: any, styleClass: any): {
        sourceActor: any;
        focusActor: any;
        _parent: any;
        box: any;
        length: number;
        isOpen: boolean;
        _activeMenuItem: any;
        _settingsActions: {};
        _sensitive: boolean;
        _getTopMenu(): any;
        _setParent(parent: any): void;
        getSensitive(): any;
        setSensitive(sensitive: any): void;
        sensitive: any;
        _sessionUpdated(): void;
        addAction(title: any, callback: any, icon: any): any;
        addSettingsAction(title: any, desktopFile: any): any;
        _setSettingsVisibility(visible: any): void;
        isEmpty(): boolean;
        itemActivated(animate: any): void;
        _subMenuActiveChanged(submenu: any, submenuItem: any): void;
        _connectItemSignals(menuItem: any): void;
        _updateSeparatorVisibility(menuItem: any): void;
        moveMenuItem(menuItem: any, position: any): void;
        addMenuItem(menuItem: any, position: any): void;
        _getMenuItems(): any;
        readonly firstMenuItem: any;
        readonly numMenuItems: any;
        removeAll(): void;
        toggle(): void;
        destroy(): void;
    };
};
declare var PopupMenu: {
    new (sourceActor: any, arrowAlignment: any, arrowSide: any): {
        _arrowAlignment: any;
        _arrowSide: any;
        _boxPointer: any;
        actor: any;
        _systemModalOpenedId: number;
        _openedSubMenu: any;
        _setOpenedSubMenu(submenu: any): void;
        _onKeyPress(actor: any, event: any): any;
        setArrowOrigin(origin: any): void;
        setSourceAlignment(alignment: any): void;
        open(animate: any): void;
        isOpen: boolean;
        close(animate: any): void;
        destroy(): void;
        sourceActor: any;
        focusActor: any;
        _parent: any;
        box: any;
        length: number;
        _activeMenuItem: any;
        _settingsActions: {};
        _sensitive: boolean;
        _getTopMenu(): any;
        _setParent(parent: any): void;
        getSensitive(): any;
        setSensitive(sensitive: any): void;
        sensitive: any;
        _sessionUpdated(): void;
        addAction(title: any, callback: any, icon: any): any;
        addSettingsAction(title: any, desktopFile: any): any;
        _setSettingsVisibility(visible: any): void;
        isEmpty(): boolean;
        itemActivated(animate: any): void;
        _subMenuActiveChanged(submenu: any, submenuItem: any): void;
        _connectItemSignals(menuItem: any): void;
        _updateSeparatorVisibility(menuItem: any): void;
        moveMenuItem(menuItem: any, position: any): void;
        addMenuItem(menuItem: any, position: any): void;
        _getMenuItems(): any;
        readonly firstMenuItem: any;
        readonly numMenuItems: any;
        removeAll(): void;
        toggle(): void;
    };
};
declare var PopupDummyMenu: {
    new (sourceActor: any): {
        sourceActor: any;
        actor: any;
        getSensitive(): boolean;
        readonly sensitive: boolean;
        open(): void;
        isOpen: boolean;
        close(): void;
        toggle(): void;
        destroy(): void;
    };
};
declare var PopupSubMenu: {
    new (sourceActor: any, sourceArrow: any): {
        _arrow: any;
        actor: any;
        _needsScrollbar(): boolean;
        getSensitive(): any;
        readonly sensitive: any;
        open(animate: any): void;
        isOpen: boolean;
        close(animate: any): void;
        _onKeyPressEvent(actor: any, event: any): any;
        sourceActor: any;
        focusActor: any;
        _parent: any;
        box: any;
        length: number;
        _activeMenuItem: any;
        _settingsActions: {};
        _sensitive: boolean;
        _getTopMenu(): any;
        _setParent(parent: any): void;
        setSensitive(sensitive: any): void;
        _sessionUpdated(): void;
        addAction(title: any, callback: any, icon: any): any;
        addSettingsAction(title: any, desktopFile: any): any;
        _setSettingsVisibility(visible: any): void;
        isEmpty(): boolean;
        itemActivated(animate: any): void;
        _subMenuActiveChanged(submenu: any, submenuItem: any): void;
        _connectItemSignals(menuItem: any): void;
        _updateSeparatorVisibility(menuItem: any): void;
        moveMenuItem(menuItem: any, position: any): void;
        addMenuItem(menuItem: any, position: any): void;
        _getMenuItems(): any;
        readonly firstMenuItem: any;
        readonly numMenuItems: any;
        removeAll(): void;
        toggle(): void;
        destroy(): void;
    };
};
/**
 * PopupMenuSection:
 *
 * A section of a PopupMenu which is handled like a submenu
 * (you can add and remove items, you can destroy it, you
 * can add it to another menu), but is completely transparent
 * to the user
 */
declare var PopupMenuSection: {
    new (): {
        actor: any;
        isOpen: boolean;
        open(): void;
        close(): void;
        sourceActor: any;
        focusActor: any;
        _parent: any;
        box: any;
        length: number;
        _activeMenuItem: any;
        _settingsActions: {};
        _sensitive: boolean;
        _getTopMenu(): any;
        _setParent(parent: any): void;
        getSensitive(): any;
        setSensitive(sensitive: any): void;
        sensitive: any;
        _sessionUpdated(): void;
        addAction(title: any, callback: any, icon: any): any;
        addSettingsAction(title: any, desktopFile: any): any;
        _setSettingsVisibility(visible: any): void;
        isEmpty(): boolean;
        itemActivated(animate: any): void;
        _subMenuActiveChanged(submenu: any, submenuItem: any): void;
        _connectItemSignals(menuItem: any): void;
        _updateSeparatorVisibility(menuItem: any): void;
        moveMenuItem(menuItem: any, position: any): void;
        addMenuItem(menuItem: any, position: any): void;
        _getMenuItems(): any;
        readonly firstMenuItem: any;
        readonly numMenuItems: any;
        removeAll(): void;
        toggle(): void;
        destroy(): void;
    };
};
declare var PopupSubMenuMenuItem: any;
declare var PopupMenuManager: {
    new (owner: any, grabParams: any): {
        _grabParams: any;
        _menus: any[];
        addMenu(menu: any, position: any): void;
        removeMenu(menu: any): void;
        _grab: any;
        ignoreRelease(): void;
        _onMenuOpenState(menu: any, open: any): void;
        activeMenu: any;
        _changeMenu(newMenu: any): void;
        _onCapturedEvent(actor: any, event: any): any;
        _findMenuForSource(source: any): any;
        _closeMenu(isUser: any, menu: any): void;
    };
};
//# sourceMappingURL=popupMenu.d.ts.map