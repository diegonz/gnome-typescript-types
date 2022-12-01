/**
 * @private
 * @param {Object} obj - an object
 * @returns {bool} - true if obj has a 'destroy' GObject signal
 */
declare function _hasDestroySignal(obj: any): bool;
/**
 * Connect one or more signals, and associate the handlers
 * with a tracked object.
 *
 * All handlers for a particular object can be disconnected
 * by calling disconnectObject(). If object is a {Clutter.widget},
 * this is done automatically when the widget is destroyed.
 *
 * @param {object} thisObj - the emitter object
 * @param {...any} args - a sequence of signal-name/handler pairs
 * with an optional flags value, followed by an object to track
 * @returns {void}
 */
declare function connectObject(thisObj: object, ...args: any[]): void;
/**
 * Disconnect all signals that were connected for
 * the specified tracked object
 *
 * @param {Object} thisObj - the emitter object
 * @param {Object} obj - the tracked object
 * @returns {void}
 */
declare function disconnectObject(thisObj: any, obj: any): void;
/**
 * Register a GObject type as having a 'destroy' signal
 * that should disconnect all handlers
 *
 * @param {GObject.Type} gtype - a GObject type
 */
declare function registerDestroyableType(gtype: GObject.Type): void;
declare const GObject: any;
declare const destroyableTypes: any[];
declare var TransientSignalHolder: any;
declare class SignalManager {
    /**
     * @returns {SignalManager} - the SignalManager singleton
     */
    static getDefault(): SignalManager;
    _signalTrackers: Map<any, any>;
    /**
     * @param {Object} obj - object to get signal tracker for
     * @returns {SignalTracker} - the signal tracker for object
     */
    getSignalTracker(obj: any): SignalTracker;
    /**
     * @param {Object} obj - object to get signal tracker for
     * @returns {?SignalTracker} - the signal tracker for object if it exists
     */
    maybeGetSignalTracker(obj: any): SignalTracker | null;
    removeSignalTracker(obj: any): void;
}
declare class SignalTracker {
    /**
     * @param {Object=} owner - object that owns the tracker
     */
    constructor(owner?: any | undefined);
    _ownerDestroyId: any;
    _owner: any;
    _map: Map<any, any>;
    /**
     * @typedef SignalData
     * @property {number[]} ownerSignals - a list of handler IDs
     * @property {number} destroyId - destroy handler ID of tracked object
     */
    /**
     * @private
     * @param {Object} obj - a tracked object
     * @returns {SignalData} - signal data for object
     */
    private _getSignalData;
    /**
     * @private
     * @param {GObject.Object} obj - tracked widget
     */
    private _trackDestroy;
    _disconnectSignalForProto(proto: any, obj: any, id: any): void;
    _getObjectProto(obj: any): any;
    _disconnectSignal(obj: any, id: any): void;
    _removeTracker(): void;
    /**
     * @param {Object} obj - tracked object
     * @param {...number} handlerIds - tracked handler IDs
     * @returns {void}
     */
    track(obj: any, ...handlerIds: number[]): void;
    /**
     * @param {Object} obj - tracked object instance
     * @returns {void}
     */
    untrack(obj: any): void;
    /**
     * @returns {void}
     */
    clear(): void;
    /**
     * @returns {void}
     */
    destroy(): void;
}
type SignalData = {
    /**
     * - a list of handler IDs
     */
    ownerSignals: number[];
    /**
     * - destroy handler ID of tracked object
     */
    destroyId: number;
};
//# sourceMappingURL=signalTracker.d.ts.map