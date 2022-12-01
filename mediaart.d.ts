/**
 * MediaArt 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export function buffer_to_jpeg(buffer: Uint8Array | string, buffer_mime: string, target: string): boolean;

export function error_quark(): GLib.Quark;

export function file_to_jpeg(filename: string, target: string): boolean;

export function get_file(
    artist?: string | null,
    title?: string | null,
    prefix?: string | null
): [boolean, Gio.File | null];

export function get_path(
    artist?: string | null,
    title?: string | null,
    prefix?: string | null
): [boolean, string | null];

export function plugin_init(max_width: number): void;

export function plugin_shutdown(): void;

export function remove(artist: string, album?: string | null, cancellable?: Gio.Cancellable | null): boolean;

export function remove_async(
    artist: string,
    album: string | null,
    io_priority: number,
    source_object?: GObject.Object | null,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<string> | null
): void;

export function remove_finish(source_object: GObject.Object | null, result: Gio.AsyncResult): boolean;

export function strip_invalid_entities(original: string): string;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static NO_STORAGE: number;
    static NO_TITLE: number;
    static SYMLINK_FAILED: number;
    static RENAME_FAILED: number;
    static NO_CACHE_DIR: number;
}

export namespace Type {
    export const $gtype: GObject.GType<Type>;
}

export enum Type {
    NONE = 0,
    ALBUM = 1,
    VIDEO = 2,
}

export namespace ProcessFlags {
    export const $gtype: GObject.GType<ProcessFlags>;
}

export enum ProcessFlags {
    NONE = 0,
    FORCE = 1,
}

export namespace Process {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Process extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Process>;

    constructor(properties?: Partial<Process.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Process.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Process;

    // Members

    buffer(
        type: Type,
        flags: ProcessFlags,
        related_file: Gio.File,
        buffer?: Uint8Array | null,
        mime?: string | null,
        artist?: string | null,
        title?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    buffer_async(
        type: Type,
        flags: ProcessFlags,
        related_file: Gio.File,
        buffer: Uint8Array | null,
        mime: string,
        artist: string | null,
        title: string | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    buffer_finish(result: Gio.AsyncResult): boolean;

    file(
        type: Type,
        flags: ProcessFlags,
        file: Gio.File,
        artist?: string | null,
        title?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    file_async(
        type: Type,
        flags: ProcessFlags,
        file: Gio.File,
        artist: string | null,
        title: string | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    file_finish(result: Gio.AsyncResult): boolean;

    uri(
        type: Type,
        flags: ProcessFlags,
        uri: string,
        artist?: string | null,
        title?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    uri_async(
        type: Type,
        flags: ProcessFlags,
        uri: string,
        artist: string | null,
        title: string | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uri_finish(result: Gio.AsyncResult): boolean;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
