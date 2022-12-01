declare const GObject: any;
declare const Shell: any;
declare const Main: any;
declare const MessageTray: any;
declare var WindowAttentionHandler: {
    new (): {
        _tracker: any;
        _getTitleAndBanner(app: any, window: any): any[];
        _onWindowDemandsAttention(display: any, window: any): void;
    };
};
declare var WindowAttentionSource: any;
//# sourceMappingURL=windowAttentionHandler.d.ts.map