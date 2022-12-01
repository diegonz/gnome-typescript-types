declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Graphene: any;
declare const IBus: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Signals: any;
declare const EdgeDragAction: any;
declare const InputSourceManager: any;
declare const IBusManager: any;
declare const BoxPointer: any;
declare const Main: any;
declare const PageIndicators: any;
declare const PopupMenu: any;
declare const SwipeTracker: any;
declare var KEYBOARD_ANIMATION_TIME: number;
declare var KEYBOARD_REST_TIME: number;
declare var KEY_LONG_PRESS_TIME: number;
declare const A11Y_APPLICATIONS_SCHEMA: "org.gnome.desktop.a11y.applications";
declare const SHOW_KEYBOARD: "screen-keyboard-enabled";
declare const EMOJI_PAGE_SEPARATION: 32;
declare const KEY_SIZE: 2;
declare const KEY_RELEASE_TIMEOUT: 50;
declare const BACKSPACE_WORD_DELETE_THRESHOLD: 50;
declare var AspectContainer: any;
declare var KeyContainer: any;
declare var Suggestions: any;
declare var LanguageSelectionPopup: {
    new (actor: any): {
        _onCapturedEvent(actor: any, event: any): any;
        open(animate: any): void;
        close(animate: any): void;
        destroy(): void;
    };
};
declare var Key: any;
declare var KeyboardModel: {
    new (groupName: any): {
        _model: any;
        _loadModel(groupName: any): any;
        getLevels(): any;
        getKeysForLevel(levelName: any): any;
    };
};
declare var FocusTracker: {
    new (): {
        _rect: any;
        _ibusManager: any;
        destroy(): void;
        readonly currentWindow: any;
        _setCurrentWindow(window: any): void;
        _currentWindow: any;
        _setCurrentRect(rect: any): void;
        getCurrentRect(): {
            x: any;
            y: any;
            width: any;
            height: any;
        };
    };
};
declare var EmojiPager: any;
declare var EmojiSelection: any;
declare var Keypad: any;
declare var KeyboardManager: {
    new (): {
        _keyboard: any;
        _a11yApplicationsSettings: any;
        _seat: any;
        _lastDevice: any;
        _bottomDragAction: any;
        _lastDeviceIsTouchscreen(): boolean;
        _syncEnabled(): void;
        readonly keyboardActor: any;
        readonly visible: any;
        open(monitor: any): void;
        close(): void;
        addSuggestion(text: any, callback: any): void;
        resetSuggestions(): void;
        setSuggestionsVisible(visible: any): void;
        maybeHandleEvent(event: any): boolean;
    };
};
declare var Keyboard: any;
declare var KeyboardController: {
    new (): {
        _virtualDevice: any;
        _inputSourceManager: any;
        _currentSource: any;
        destroy(): void;
        _onSourcesModified(): void;
        _onSourceChanged(inputSourceManager: any, _oldSource: any): void;
        _onContentPurposeHintsChanged(method: any): void;
        getGroups(): any[];
        getCurrentGroup(): any;
        commitString(string: any, fromKey: any): boolean;
        keyvalPress(keyval: any): void;
        keyvalRelease(keyval: any): void;
    };
};
//# sourceMappingURL=keyboard.d.ts.map