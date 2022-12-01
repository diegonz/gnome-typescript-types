declare const Signals: any;
declare const Clutter: any;
declare const Params: any;
declare var DEFAULT_LIMIT: number;
declare var HistoryManager: {
    new (params: any): {
        _key: any;
        _limit: any;
        _historyIndex: number;
        _history: any;
        _entry: any;
        _historyChanged(): void;
        _setPrevItem(text: any): boolean;
        _setNextItem(text: any): boolean;
        lastItem(): any;
        addItem(input: any): any;
        _onEntryKeyPress(entry: any, event: any): any;
        _indexChanged(): void;
        _save(): void;
    };
};
//# sourceMappingURL=history.d.ts.map