declare const Clutter: any;
declare const Gio: any;
declare const GObject: any;
declare const Meta: any;
declare const St: any;
declare const Main: any;
declare var OsdMonitorLabel: any;
declare var OsdMonitorLabeler: {
    new (): {
        _monitorManager: any;
        _client: any;
        _clientWatchId: number;
        _osdLabels: any[];
        _monitorLabels: Map<any, any>;
        _reset(): void;
        _trackClient(client: any): boolean;
        _untrackClient(client: any): boolean;
        show(client: any, params: any): void;
        hide(client: any): void;
    };
};
//# sourceMappingURL=osdMonitorLabeler.d.ts.map