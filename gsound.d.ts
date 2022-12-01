/**
 * GSound 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const ATTR_APPLICATION_ICON: string;
export const ATTR_APPLICATION_ICON_NAME: string;
export const ATTR_APPLICATION_ID: string;
export const ATTR_APPLICATION_LANGUAGE: string;
export const ATTR_APPLICATION_NAME: string;
export const ATTR_APPLICATION_PROCESS_BINARY: string;
export const ATTR_APPLICATION_PROCESS_HOST: string;
export const ATTR_APPLICATION_PROCESS_ID: string;
export const ATTR_APPLICATION_PROCESS_USER: string;
export const ATTR_APPLICATION_VERSION: string;
export const ATTR_CANBERRA_CACHE_CONTROL: string;
export const ATTR_CANBERRA_ENABLE: string;
export const ATTR_CANBERRA_FORCE_CHANNEL: string;
export const ATTR_CANBERRA_VOLUME: string;
export const ATTR_CANBERRA_XDG_THEME_NAME: string;
export const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string;
export const ATTR_EVENT_DESCRIPTION: string;
export const ATTR_EVENT_ID: string;
export const ATTR_EVENT_MOUSE_BUTTON: string;
export const ATTR_EVENT_MOUSE_HPOS: string;
export const ATTR_EVENT_MOUSE_VPOS: string;
export const ATTR_EVENT_MOUSE_X: string;
export const ATTR_EVENT_MOUSE_Y: string;
export const ATTR_MEDIA_ARTIST: string;
export const ATTR_MEDIA_FILENAME: string;
export const ATTR_MEDIA_ICON: string;
export const ATTR_MEDIA_ICON_NAME: string;
export const ATTR_MEDIA_LANGUAGE: string;
export const ATTR_MEDIA_NAME: string;
export const ATTR_MEDIA_ROLE: string;
export const ATTR_MEDIA_TITLE: string;
export const ATTR_WINDOW_DESKTOP: string;
export const ATTR_WINDOW_HEIGHT: string;
export const ATTR_WINDOW_HPOS: string;
export const ATTR_WINDOW_ICON: string;
export const ATTR_WINDOW_ICON_NAME: string;
export const ATTR_WINDOW_ID: string;
export const ATTR_WINDOW_NAME: string;
export const ATTR_WINDOW_VPOS: string;
export const ATTR_WINDOW_WIDTH: string;
export const ATTR_WINDOW_X: string;
export const ATTR_WINDOW_X11_DISPLAY: string;
export const ATTR_WINDOW_X11_MONITOR: string;
export const ATTR_WINDOW_X11_SCREEN: string;
export const ATTR_WINDOW_X11_XID: string;
export const ATTR_WINDOW_Y: string;

export function error_quark(): GLib.Quark;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static NOTSUPPORTED: number;
    static INVALID: number;
    static STATE: number;
    static OOM: number;
    static NODRIVER: number;
    static SYSTEM: number;
    static CORRUPT: number;
    static TOOBIG: number;
    static NOTFOUND: number;
    static DESTROYED: number;
    static CANCELED: number;
    static NOTAVAILABLE: number;
    static ACCESS: number;
    static IO: number;
    static INTERNAL: number;
    static DISABLED: number;
    static FORKED: number;
    static DISCONNECTED: number;
}

export namespace Context {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Context extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Context>;

    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](cancellable?: Gio.Cancellable | null): Context;

    // Members

    cache(attrs: GLib.HashTable<string, string>): boolean;

    open(): boolean;

    play_full_finish(result: Gio.AsyncResult): boolean;

    play_full(
        attrs: GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    play_simple(attrs: GLib.HashTable<string, string>, cancellable?: Gio.Cancellable | null): boolean;

    set_attributes(attrs: GLib.HashTable<string, string>): boolean;

    set_driver(driver: string): boolean;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
