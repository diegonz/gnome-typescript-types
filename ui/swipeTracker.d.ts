declare const Clutter: any;
declare const Gio: any;
declare const GObject: any;
declare const Meta: any;
declare const Main: any;
declare const Params: any;
declare const TOUCHPAD_BASE_HEIGHT: 300;
declare const TOUCHPAD_BASE_WIDTH: 400;
declare const EVENT_HISTORY_THRESHOLD_MS: 150;
declare const SCROLL_MULTIPLIER: 10;
declare const MIN_ANIMATION_DURATION: 100;
declare const MAX_ANIMATION_DURATION: 400;
declare const VELOCITY_THRESHOLD_TOUCH: 0.3;
declare const VELOCITY_THRESHOLD_TOUCHPAD: 0.6;
declare const DECELERATION_TOUCH: 0.998;
declare const DECELERATION_TOUCHPAD: 0.997;
declare const VELOCITY_CURVE_THRESHOLD: 2;
declare const DECELERATION_PARABOLA_MULTIPLIER: 0.35;
declare const DRAG_THRESHOLD_DISTANCE: 16;
declare const DURATION_MULTIPLIER: 3;
declare const ANIMATION_BASE_VELOCITY: 0.002;
declare const EPSILON: 0.005;
declare const GESTURE_FINGER_COUNT: 3;
declare namespace State {
    const NONE: number;
    const SCROLLING: number;
}
declare namespace TouchpadState {
    const NONE_1: number;
    export { NONE_1 as NONE };
    export const PENDING: number;
    export const HANDLING: number;
    export const IGNORED: number;
}
declare const EventHistory: {
    new (): {
        reset(): void;
        _data: any[];
        trim(time: any): void;
        append(time: any, delta: any): void;
        calculateVelocity(): number;
    };
};
declare const TouchpadSwipeGesture: any;
declare const TouchSwipeGesture: any;
declare const ScrollGesture: any;
/** A class for handling swipe gestures */
declare var SwipeTracker: any;
//# sourceMappingURL=swipeTracker.d.ts.map