declare function _setMenuAlignment(entry: any, stageX: any): void;
declare function _onButtonPressEvent(actor: any, event: any, entry: any): any;
declare function _onPopup(actor: any, entry: any): void;
declare function addContextMenu(entry: any, params: any): void;
declare const Clutter: any;
declare const GObject: any;
declare const Pango: any;
declare const Shell: any;
declare const St: any;
declare const BoxPointer: any;
declare const Main: any;
declare const Params: any;
declare const PopupMenu: any;
declare var EntryMenu: {
    new (entry: any): {
        _entry: any;
        _clipboard: any;
        _copyItem: any;
        _pasteItem: any;
        _makePasswordItem(): void;
        _passwordItem: any;
        open(animate: any): void;
        _updateCopyItem(): void;
        _updatePasteItem(): void;
        _updatePasswordItem(): void;
        _onCopyActivated(): void;
        _onPasteActivated(): void;
        _onPasswordActivated(): void;
    };
};
declare var CapsLockWarning: any;
//# sourceMappingURL=shellEntry.d.ts.map