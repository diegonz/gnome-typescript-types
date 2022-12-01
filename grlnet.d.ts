/**
 * GrlNet 0.3
 *
 * Generated from 0.3
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Soup from './soup';
import * as GLib from './glib';

export namespace WcError {
    export const $gtype: GObject.GType<WcError>;
}

export enum WcError {
    UNAVAILABLE = 1,
    PROTOCOL_ERROR = 2,
    AUTHENTICATION_REQUIRED = 3,
    NOT_FOUND = 4,
    CONFLICT = 5,
    FORBIDDEN = 6,
    NETWORK_ERROR = 7,
    PROXY_ERROR = 8,
    CANCELLED = 9,
}

export namespace Wc {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        cache: boolean;
        cache_size: number;
        cacheSize: number;
        loglevel: number;
        throttling: number;
        user_agent: string;
        userAgent: string;
    }
}

export class Wc extends GObject.Object {
    static $gtype: GObject.GType<Wc>;

    constructor(properties?: Partial<Wc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Wc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache: boolean;
    cache_size: number;
    cacheSize: number;
    loglevel: number;
    throttling: number;
    user_agent: string;
    userAgent: string;

    // Constructors

    static ['new'](): Wc;

    // Members

    flush_delayed_requests(): void;

    request_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    request_finish(result: Gio.AsyncResult): [boolean, Uint8Array | null];

    request_with_headers_async(
        uri: string,
        headers?: GLib.HashTable<string, string> | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_cache(use_cache: boolean): void;

    set_cache_size(cache_size: number): void;

    set_log_level(log_level: number): void;

    set_throttling(throttling: number): void;

    static error_quark(): GLib.Quark;
}

export class WcPrivate {
    static $gtype: GObject.GType<WcPrivate>;

    constructor(copy: WcPrivate);
}
