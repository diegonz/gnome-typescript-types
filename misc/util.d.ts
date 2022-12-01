declare function findUrls(str: any): {
    url: string;
    pos: number;
}[];
declare function spawn(argv: any): void;
declare function spawnCommandLine(commandLine: any): void;
declare function spawnApp(argv: any): void;
declare function trySpawn(argv: any): void;
declare function trySpawnCommandLine(commandLine: any): void;
declare function _handleSpawnError(command: any, err: any): void;
declare function formatTimeSpan(date: any): any;
declare function formatTime(time: any, params: any): any;
declare function createTimeLabel(date: any, params: any): any;
declare function lowerBound(array: any, val: any, cmp: any): any;
declare function insertSorted(array: any, val: any, cmp: any): any;
declare function ensureActorVisibleInScrollView(scrollView: any, actor: any): void;
declare function wiggle(actor: any, params: any): void;
declare function lerp(start: any, end: any, progress: any): any;
declare function _GNOMEversionToNumber(version: any): number;
declare function GNOMEversionCompare(version1: any, version2: any): 0 | 1 | -1;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const Shell: any;
declare const St: any;
declare const GnomeDesktop: any;
declare const Gettext: any;
declare const Main: any;
declare const Params: any;
declare var SCROLL_TIME: number;
declare const WIGGLE_OFFSET: 6;
declare const WIGGLE_DURATION: 65;
declare const N_WIGGLES: 3;
declare const _balancedParens: "\\([^\\s()<>]+\\)";
declare const _leadingJunk: "[\\s`(\\[{'\\\"<«“‘]";
declare const _notTrailingJunk: "[^\\s`!()\\[\\]{};:'\\\".,<>?«»‎‏“”‘’‪‬]";
declare const _urlRegexp: RegExp;
declare let _desktopSettings: any;
declare var DBusSenderChecker: {
    new (allowList: string[]): {
        _allowlistMap: Map<any, any>;
        _uninitializedNames: Set<string>;
        _initializedPromise: Promise<any>;
        _resolveInitialized: (value: any) => void;
        _watchList: any[];
        /**
         * @param {string} name - bus name for which the watcher got initialized
         */
        _checkAndResolveInitialized(name: string): void;
        /**
         * @async
         * @param {string} sender - the bus name that invoked the checked method
         * @returns {bool}
         */
        _isSenderAllowed(sender: string): bool;
        /**
         * Check whether the bus name that invoked @invocation maps
         * to an entry in the allow list.
         *
         * @async
         * @throws
         * @param {Gio.DBusMethodInvocation} invocation - the invocation
         * @returns {void}
         */
        checkInvocation(invocation: Gio.DBusMethodInvocation): void;
        /**
         * @returns {void}
         */
        destroy(): void;
    };
};
declare var Highlighter: {
    new (terms: string[] | null): {
        _highlightRegex: RegExp;
        /**
         * Highlight all occurences of the terms defined for this
         * highlighter in the provided text using markup.
         *
         * @param {string} text - text to highlight the defined terms in
         * @returns {string}
         */
        highlight(text: string): string;
    };
};
//# sourceMappingURL=util.d.ts.map