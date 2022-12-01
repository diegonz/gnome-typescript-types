declare function _getEventHandlerActor(): any;
declare function _getRealActorScale(actor: any): number;
declare function addDragMonitor(monitor: any): void;
declare function removeDragMonitor(monitor: any): void;
/**
 * makeDraggable:
 * @param {Clutter.Actor} actor: Source actor
 * @param {Object=} params: Additional parameters
 * @returns {Object} a new Draggable
 *
 * Create an object which controls drag and drop for the given actor.
 *
 * If %manualMode is %true in @params, do not automatically start
 * drag and drop on click
 *
 * If %dragActorMaxSize is present in @params, the drag actor will
 * be scaled down to be no larger than that size in pixels.
 *
 * If %dragActorOpacity is present in @params, the drag actor will
 * will be set to have that opacity during the drag.
 *
 * Note that when the drag actor is the source actor and the drop
 * succeeds, the actor scale and opacity aren't reset; if the drop
 * target wants to reuse the actor, it's up to the drop target to
 * reset these values.
 */
declare function makeDraggable(actor: Clutter.Actor, params?: any | undefined): any;
declare const Clutter: any;
declare const GLib: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Signals: any;
declare const Main: any;
declare const Params: any;
declare var SCALE_ANIMATION_TIME: number;
declare var SNAP_BACK_ANIMATION_TIME: number;
declare var REVERT_ANIMATION_TIME: number;
declare namespace DragMotionResult {
    const NO_DROP: number;
    const COPY_DROP: number;
    const MOVE_DROP: number;
    const CONTINUE: number;
}
declare namespace DragState {
    const INIT: number;
    const DRAGGING: number;
    const CANCELLED: number;
}
declare var DRAG_CURSOR_MAP: {
    0: any;
    1: any;
    2: any;
};
declare namespace DragDropResult {
    export const FAILURE: number;
    export const SUCCESS: number;
    const CONTINUE_1: number;
    export { CONTINUE_1 as CONTINUE };
}
declare var dragMonitors: any[];
declare let eventHandlerActor: any;
declare let currentDraggable: any;
declare var _Draggable: {
    new (actor: any, params: any): {
        actor: any;
        _dragState: number;
        _actorDestroyed: boolean;
        _onEventId: any;
        _touchSequence: any;
        _restoreOnSuccess: any;
        _dragActorMaxSize: any;
        _dragActorOpacity: any;
        _dragTimeoutThreshold: any;
        _buttonDown: boolean;
        _animationInProgress: boolean;
        _dragCancellable: boolean;
        _onButtonPress(actor: any, event: any): any;
        _dragStartX: any;
        _dragStartY: any;
        _dragStartTime: any;
        _dragThresholdIgnored: boolean;
        _onTouchEvent(actor: any, event: any): any;
        _grabDevice(actor: any, pointer: any, touchSequence: any): void;
        _grab: any;
        _grabbedDevice: any;
        _ungrabDevice(): void;
        _grabActor(device: any, touchSequence: any): void;
        _ungrabActor(): void;
        _grabEvents(device: any, touchSequence: any): void;
        _eventsGrab: any;
        _ungrabEvents(): void;
        _eventIsRelease(event: any): any;
        _onEvent(actor: any, event: any): any;
        /**
         * fakeRelease:
         *
         * Fake a release event.
         * Must be called if you want to intercept release events on draggable
         * actors for other purposes (for example if you're using
         * PopupMenu.ignoreRelease())
         */
        fakeRelease(): void;
        /**
         * startDrag:
         * @param {number} stageX: X coordinate of event
         * @param {number} stageY: Y coordinate of event
         * @param {number} time: Event timestamp
         * @param {Clutter.EventSequence=} sequence: Event sequence
         * @param {Clutter.InputDevice=} device: device that originated the event
         *
         * Directly initiate a drag and drop operation from the given actor.
         * This function is useful to call if you've specified manualMode
         * for the draggable.
         */
        startDrag(stageX: number, stageY: number, time: number, sequence?: Clutter.EventSequence, device?: Clutter.InputDevice): void;
        _dragX: any;
        _dragY: any;
        _dragActor: any;
        _dragActorSource: any;
        _dragOrigParent: any;
        _dragOffsetX: number;
        _dragOffsetY: number;
        _dragActorHadFixedPos: any;
        _dragOrigX: any;
        _dragOrigY: any;
        _dragActorHadNatWidth: any;
        _dragActorHadNatHeight: any;
        _dragOrigWidth: any;
        _dragOrigHeight: any;
        _dragOrigScale: any;
        _dragOrigParentDestroyId: any;
        _dragActorDestroyId: any;
        _dragOrigOpacity: any;
        _snapBackX: any;
        _snapBackY: any;
        _snapBackScale: any;
        _updateActorPosition(origScale: any, origDragOffsetX: any, origDragOffsetY: any, transX: any, transY: any): void;
        _maybeStartDrag(event: any): any;
        _pickTargetActor(): any;
        _updateDragHover(): any;
        _updateHoverId: any;
        _queueUpdateDragHover(): void;
        _updateDragPosition(event: any): boolean;
        _dragActorDropped(event: any): boolean;
        _getRestoreLocation(): any[];
        _cancelDrag(eventTime: any): void;
        _restoreDragActor(eventTime: any): void;
        _animateDragEnd(eventTime: any, params: any): void;
        _finishAnimation(): void;
        _onAnimationComplete(dragActor: any, eventTime: any): void;
        _dragComplete(): void;
    };
};
//# sourceMappingURL=dnd.d.ts.map