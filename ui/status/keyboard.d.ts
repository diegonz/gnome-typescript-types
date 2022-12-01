declare function getInputSourceManager(): any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const IBus: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Gettext: any;
declare const Signals: any;
declare const IBusManager: any;
declare const KeyboardManager: any;
declare const Main: any;
declare const PopupMenu: any;
declare const PanelMenu: any;
declare const SwitcherPopup: any;
declare const Util: any;
declare var INPUT_SOURCE_TYPE_XKB: string;
declare var INPUT_SOURCE_TYPE_IBUS: string;
declare var LayoutMenuItem: any;
declare var InputSource: {
    new (type: any, id: any, displayName: any, shortName: any, index: any): {
        type: any;
        id: any;
        displayName: any;
        _shortName: any;
        index: any;
        properties: any;
        xkbId: any;
        shortName: any;
        activate(interactive: any): void;
        _getXkbId(): any;
    };
};
declare var InputSourcePopup: any;
declare var InputSourceSwitcher: any;
declare var InputSourceSettings: {
    new (): {
        _emitInputSourcesChanged(): void;
        _emitKeyboardOptionsChanged(): void;
        _emitPerWindowChanged(): void;
        readonly inputSources: any[];
        mruSources: any[];
        readonly keyboardOptions: any[];
        readonly perWindow: boolean;
    };
};
declare var InputSourceSystemSettings: {
    new (): {
        _BUS_NAME: string;
        _BUS_PATH: string;
        _BUS_IFACE: string;
        _BUS_PROPS_IFACE: string;
        _layouts: string;
        _variants: string;
        _options: string;
        _reload(): Promise<void>;
        readonly inputSources: {
            type: string;
            id: string;
        }[];
        readonly keyboardOptions: string[];
        _emitInputSourcesChanged(): void;
        _emitKeyboardOptionsChanged(): void;
        _emitPerWindowChanged(): void;
        mruSources: any[];
        readonly perWindow: boolean;
    };
};
declare var InputSourceSessionSettings: {
    new (): {
        _DESKTOP_INPUT_SOURCES_SCHEMA: string;
        _KEY_INPUT_SOURCES: string;
        _KEY_MRU_SOURCES: string;
        _KEY_KEYBOARD_OPTIONS: string;
        _KEY_PER_WINDOW: string;
        _settings: any;
        _getSourcesList(key: any): {
            type: any;
            id: any;
        }[];
        readonly inputSources: {
            type: any;
            id: any;
        }[];
        mruSources: {
            type: any;
            id: any;
        }[];
        readonly keyboardOptions: any;
        readonly perWindow: any;
        _emitInputSourcesChanged(): void;
        _emitKeyboardOptionsChanged(): void;
        _emitPerWindowChanged(): void;
    };
};
declare var InputSourceManager: {
    new (): {
        _inputSources: {};
        _ibusSources: {};
        _currentSource: any;
        _mruSources: any[];
        _mruSourcesBackup: any[];
        _keybindingAction: any;
        _keybindingActionBackward: any;
        _settings: {
            _BUS_NAME: string;
            _BUS_PATH: string;
            _BUS_IFACE: string;
            _BUS_PROPS_IFACE: string;
            _layouts: string;
            _variants: string;
            _options: string;
            _reload(): Promise<void>;
            readonly inputSources: {
                type: string;
                id: string;
            }[];
            readonly keyboardOptions: string[];
            _emitInputSourcesChanged(): void;
            _emitKeyboardOptionsChanged(): void;
            _emitPerWindowChanged(): void;
            mruSources: any[];
            readonly perWindow: boolean;
        } | {
            _DESKTOP_INPUT_SOURCES_SCHEMA: string;
            _KEY_INPUT_SOURCES: string;
            _KEY_MRU_SOURCES: string;
            _KEY_KEYBOARD_OPTIONS: string;
            _KEY_PER_WINDOW: string;
            _settings: any;
            _getSourcesList(key: any): {
                type: any;
                id: any;
            }[];
            readonly inputSources: {
                type: any;
                id: any;
            }[];
            mruSources: {
                type: any;
                id: any;
            }[];
            readonly keyboardOptions: any;
            readonly perWindow: any;
            _emitInputSourcesChanged(): void;
            _emitKeyboardOptionsChanged(): void;
            _emitPerWindowChanged(): void;
        };
        _xkbInfo: any;
        _keyboardManager: any;
        _ibusReady: boolean;
        _ibusManager: any;
        _sourcesPerWindow: boolean;
        _focusWindowNotifyId: number;
        _disableIBus: boolean;
        _reloading: boolean;
        reload(): void;
        _ibusReadyCallback(im: any, ready: any): void;
        _modifiersSwitcher(): boolean;
        _switchInputSource(display: any, window: any, binding: any): void;
        _keyboardOptionsChanged(): void;
        _updateMruSettings(): void;
        _currentInputSourceChanged(newSource: any): void;
        activateInputSource(is: any, interactive: any): void;
        _updateMruSources(): void;
        _inputSourcesChanged(): void;
        _makeEngineShortName(engineDesc: any): any;
        _ibusPropertiesRegistered(im: any, engineName: any, props: any): void;
        _ibusPropertyUpdated(im: any, engineName: any, prop: any): void;
        _updateSubProperty(props: any, prop: any): boolean;
        _ibusSetContentType(im: any, purpose: any, _hints: any): void;
        _getNewInputSource(current: any): any;
        _getCurrentWindow(): any;
        _setPerWindowInputSource(): void;
        _sourcesPerWindowChanged(): void;
        _changePerWindowSource(): void;
        readonly currentSource: any;
        readonly inputSources: {};
        readonly keyboardManager: any;
    };
};
declare let _inputSourceManager: any;
declare var InputSourceIndicatorContainer: any;
declare var InputSourceIndicator: any;
//# sourceMappingURL=keyboard.d.ts.map