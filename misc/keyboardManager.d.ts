declare function getXkbInfo(): any;
declare function getKeyboardManager(): any;
declare function releaseKeyboard(): void;
declare function holdKeyboard(): void;
declare const GLib: any;
declare const GnomeDesktop: any;
declare const Main: any;
declare var DEFAULT_LOCALE: string;
declare var DEFAULT_LAYOUT: string;
declare var DEFAULT_VARIANT: string;
declare let _xkbInfo: any;
declare let _keyboardManager: any;
declare var KeyboardManager: {
    new (): {
        MAX_LAYOUTS_PER_GROUP: number;
        _xkbInfo: any;
        _current: any;
        _localeLayoutInfo: {
            layout: any;
            variant: any;
        };
        _layoutInfos: {};
        _currentKeymap: {
            layouts: any;
            variants: any;
            options: any;
        };
        _applyLayoutGroup(group: any): void;
        _applyLayoutGroupIndex(idx: any): void;
        apply(id: any): void;
        reapply(): void;
        setUserLayouts(ids: any): void;
        _getLocaleLayout(): {
            layout: any;
            variant: any;
        };
        _buildGroupStrings(_group: any): any[];
        setKeyboardOptions(options: any): void;
        _xkbOptions: any;
        _buildOptionsString(): any;
        readonly currentLayout: any;
    };
};
//# sourceMappingURL=keyboardManager.d.ts.map