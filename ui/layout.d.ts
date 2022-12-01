declare function isPopupMetaWindow(actor: any): boolean;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Signals: any;
declare const Background: any;
declare const BackgroundMenu: any;
declare const DND: any;
declare const Main: any;
declare const Params: any;
declare const Ripples: any;
declare var STARTUP_ANIMATION_TIME: number;
declare var BACKGROUND_FADE_ANIMATION_TIME: number;
declare var HOT_CORNER_PRESSURE_THRESHOLD: number;
declare var HOT_CORNER_PRESSURE_TIMEOUT: number;
declare const SCREEN_TRANSITION_DELAY: 250;
declare const SCREEN_TRANSITION_DURATION: 500;
declare var MonitorConstraint: any;
declare var Monitor: {
    new (index: any, geometry: any, geometryScale: any): {
        index: any;
        x: any;
        y: any;
        width: any;
        height: any;
        geometry_scale: any;
        readonly inFullscreen: any;
    };
};
declare const UiActor: any;
declare namespace defaultParams {
    const trackFullscreen: boolean;
    const affectsStruts: boolean;
    const affectsInputRegion: boolean;
}
declare var LayoutManager: any;
declare var HotCorner: any;
declare var PressureBarrier: {
    new (threshold: any, timeout: any, actionMode: any): {
        _threshold: any;
        _timeout: any;
        _actionMode: any;
        _barriers: any[];
        _eventFilter: any;
        _isTriggered: boolean;
        addBarrier(barrier: any): void;
        _disconnectBarrier(barrier: any): void;
        removeBarrier(barrier: any): void;
        destroy(): void;
        setEventFilter(filter: any): void;
        _reset(): void;
        _barrierEvents: any;
        _currentPressure: number;
        _lastTime: any;
        _isHorizontal(barrier: any): boolean;
        _getDistanceAcrossBarrier(barrier: any, event: any): number;
        _getDistanceAlongBarrier(barrier: any, event: any): number;
        _trimBarrierEvents(): void;
        _onBarrierLeft(barrier: any, _event: any): void;
        _trigger(): void;
        _onBarrierHit(barrier: any, event: any): void;
    };
};
declare var ScreenTransition: any;
//# sourceMappingURL=layout.d.ts.map