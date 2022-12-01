declare function zoomOutActor(actor: any): void;
declare function zoomOutActorAtPos(actor: any, x: any, y: any): void;
declare function animateIconPosition(icon: any, box: any, nChangedIcons: any): boolean;
declare function swap(value: any, length: any): number;
declare const Clutter: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Params: any;
declare const Main: any;
declare var ICON_SIZE: number;
declare var PAGE_SWITCH_TIME: number;
declare namespace IconSize {
    const LARGE: number;
    const MEDIUM: number;
    const MEDIUM_SMALL: number;
    const SMALL: number;
    const SMALLER: number;
    const TINY: number;
}
declare var APPICON_ANIMATION_OUT_SCALE: number;
declare var APPICON_ANIMATION_OUT_TIME: number;
declare const ICON_POSITION_DELAY: 10;
declare const defaultGridModes: {
    rows: number;
    columns: number;
}[];
declare var LEFT_DIVIDER_LEEWAY: number;
declare var RIGHT_DIVIDER_LEEWAY: number;
declare namespace DragLocation {
    const INVALID: number;
    const START_EDGE: number;
    const ON_ICON: number;
    const END_EDGE: number;
    const EMPTY_SPACE: number;
}
declare var BaseIcon: any;
declare var IconGridLayout: any;
declare var IconGrid: any;
//# sourceMappingURL=iconGrid.d.ts.map