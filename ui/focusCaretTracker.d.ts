/** -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */
declare const Atspi: any;
declare const Signals: any;
declare const CARETMOVED: "object:text-caret-moved";
declare const STATECHANGED: "object:state-changed";
declare var FocusCaretTracker: {
    new (): {
        _atspiListener: any;
        _atspiInited: boolean;
        _focusListenerRegistered: boolean;
        _caretListenerRegistered: boolean;
        _onChanged(event: any): void;
        _initAtspi(): boolean;
        registerFocusListener(): void;
        registerCaretListener(): void;
        deregisterFocusListener(): void;
        deregisterCaretListener(): void;
    };
};
//# sourceMappingURL=focusCaretTracker.d.ts.map