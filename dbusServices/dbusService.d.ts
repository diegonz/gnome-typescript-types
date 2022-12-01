/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars */
// noinspection JSUnusedGlobalSymbols,ES6UnusedImports,SpellCheckingInspection

import * as Gio from '../../@types/gio';

// declare const Gio: any;
// declare const GLib: any;
// declare const Signals: any;
export const IDLE_SHUTDOWN_TIME: 2;
export const programArgs: any;
export const ServiceImplementation: {
    new (info: any, objectPath: any): {
        _objectPath: any;
        _dbusImpl: any;
        _senders: Map<any, any>;
        _holdCount: number;
        _hasSignals: boolean;
        _shutdownTimeoutId: number;
        _autoShutdown: boolean;
        register(): void;
        export(): void;
        unexport(): void;
        hold(): void;
        release(): void;
        /**
         * _handleError:
         *
         * @param {Gio.DBusMethodInvocation} invocation
         * @param {Error} error
         *
         * Complete @invocation with an appropriate error if @error is set;
         * useful for implementing early returns from method implementations.
         *
         * @returns {boolean} - true if @invocation was completed
         */
        _handleError(invocation: any, error: any): boolean;
        _maybeShutdown(): void;
        _queueShutdownCheck(): void;
        _trackSender(sender: any): void;
        _untrackSender(sender: any): void;
        _injectTracking(methodName: any): void;
    };
};
export const DBusService: {
    new (name: any, service: any): {
        _name: any;
        _service: any;
        _loop: any;
        run(): void;
    };
};
// # sourceMappingURL=dbusService.d.ts.map
