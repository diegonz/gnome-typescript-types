/**
 * TotemPlParser 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const PARSER_FIELD_ABSTRACT: string;
export const PARSER_FIELD_ALBUM: string;
export const PARSER_FIELD_AUDIO_TRACK: string;
export const PARSER_FIELD_AUTHOR: string;
export const PARSER_FIELD_AUTOPLAY: string;
export const PARSER_FIELD_BASE: string;
export const PARSER_FIELD_CONTACT: string;
export const PARSER_FIELD_CONTENT_TYPE: string;
export const PARSER_FIELD_COPYRIGHT: string;
export const PARSER_FIELD_DESCRIPTION: string;
export const PARSER_FIELD_DOWNLOAD_URI: string;
export const PARSER_FIELD_DURATION: string;
export const PARSER_FIELD_DURATION_MS: string;
export const PARSER_FIELD_ENDTIME: string;
export const PARSER_FIELD_FILESIZE: string;
export const PARSER_FIELD_GENRE: string;
export const PARSER_FIELD_ID: string;
export const PARSER_FIELD_IMAGE_URI: string;
export const PARSER_FIELD_IS_PLAYLIST: string;
export const PARSER_FIELD_LANGUAGE: string;
export const PARSER_FIELD_MOREINFO: string;
export const PARSER_FIELD_PLAYING: string;
export const PARSER_FIELD_PUB_DATE: string;
export const PARSER_FIELD_SCREENSIZE: string;
export const PARSER_FIELD_STARTTIME: string;
export const PARSER_FIELD_SUBTITLE_URI: string;
export const PARSER_FIELD_TITLE: string;
export const PARSER_FIELD_UI_MODE: string;
export const PARSER_FIELD_URI: string;
export const PARSER_FIELD_VOLUME: string;
export const PARSER_VERSION_MAJOR: number;
export const PARSER_VERSION_MICRO: number;
export const PARSER_VERSION_MINOR: number;

export function parser_error_quark(): GLib.Quark;

export function parser_metadata_get_type(): GObject.GType;

export class ParserError extends GLib.Error {
    static $gtype: GObject.GType<ParserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ParserError);

    // Properties
    static NO_DISC: number;
    static MOUNT_FAILED: number;
    static EMPTY_PLAYLIST: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ParserResult {
    export const $gtype: GObject.GType<ParserResult>;
}

export enum ParserResult {
    UNHANDLED = 0,
    ERROR = 1,
    SUCCESS = 2,
    IGNORED = 3,
    CANCELLED = 4,
}

export namespace ParserType {
    export const $gtype: GObject.GType<ParserType>;
}

export enum ParserType {
    PLS = 0,
    M3U = 1,
    M3U_DOS = 2,
    XSPF = 3,
    IRIVER_PLA = 4,
}

export namespace Parser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        debug: boolean;
        disable_unsafe: boolean;
        disableUnsafe: boolean;
        force: boolean;
        recurse: boolean;
    }
}

export class Parser extends GObject.Object {
    static $gtype: GObject.GType<Parser>;

    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    debug: boolean;
    disable_unsafe: boolean;
    disableUnsafe: boolean;
    force: boolean;
    recurse: boolean;

    // Fields
    priv: ParserPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'entry-parsed',
        callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void
    ): number;

    connect_after(
        signal: 'entry-parsed',
        callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void
    ): number;

    emit(signal: 'entry-parsed', uri: string, metadata: GLib.HashTable<string, string>): void;

    connect(signal: 'playlist-ended', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'playlist-ended', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'playlist-ended', uri: string): void;

    connect(
        signal: 'playlist-started',
        callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void
    ): number;

    connect_after(
        signal: 'playlist-started',
        callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void
    ): number;

    emit(signal: 'playlist-started', uri: string, metadata: GLib.HashTable<string, string>): void;

    // Constructors

    static ['new'](): Parser;

    // Members

    add_ignored_glob(glob: string): void;

    add_ignored_mimetype(mimetype: string): void;

    add_ignored_scheme(scheme: string): void;

    parse(uri: string, fallback: boolean): ParserResult;

    parse_async(
        uri: string,
        fallback: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    parse_finish(async_result: Gio.AsyncResult): ParserResult;

    parse_with_base(uri: string, base: string | null, fallback: boolean): ParserResult;

    parse_with_base_async(
        uri: string,
        base: string | null,
        fallback: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType): boolean;

    save_async(
        playlist: Playlist,
        dest: Gio.File,
        title: string,
        type: ParserType,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_finish(result: Gio.AsyncResult): boolean;

    vfunc_entry_parsed(uri: string, metadata: GLib.HashTable<any, any>): void;

    vfunc_playlist_ended(uri: string): void;

    vfunc_playlist_started(uri: string, metadata: GLib.HashTable<any, any>): void;

    static can_parse_from_data(data: string, len: number, debug: boolean): boolean;

    static can_parse_from_filename(filename: string, debug: boolean): boolean;

    static can_parse_from_uri(uri: string, debug: boolean): boolean;

    static parse_date(date_str: string, debug: boolean): number;

    static parse_duration(duration: string, debug: boolean): number;
}

export namespace Playlist {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Playlist extends GObject.Object {
    static $gtype: GObject.GType<Playlist>;

    constructor(properties?: Partial<Playlist.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Playlist.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Playlist;

    // Members

    append(): PlaylistIter;

    get_value(iter: PlaylistIter, key: string, value: any): boolean;

    insert(position: number): PlaylistIter;

    iter_first(): [boolean, PlaylistIter];

    iter_next(iter: PlaylistIter): boolean;

    iter_prev(iter: PlaylistIter): boolean;

    prepend(): PlaylistIter;

    set_value(iter: PlaylistIter, key: string, value: any): boolean;

    size(): number;
}

export class ParserPrivate {
    static $gtype: GObject.GType<ParserPrivate>;

    constructor(copy: ParserPrivate);
}

export class PlaylistIter {
    static $gtype: GObject.GType<PlaylistIter>;

    constructor(
        properties?: Partial<{
            data1?: any;
            data2?: any;
        }>
    );

    constructor(copy: PlaylistIter);

    // Fields
    data1: any;
    data2: any;
}
