/**
 * Jcat 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Json from './json';
import * as GLib from './glib';

export namespace BlobKind {
    export const $gtype: GObject.GType<BlobKind>;
}

export enum BlobKind {
    UNKNOWN = 0,
    SHA256 = 1,
    GPG = 2,
    PKCS7 = 3,
    SHA1 = 4,
}

export namespace BlobMethod {
    export const $gtype: GObject.GType<BlobMethod>;
}

export enum BlobMethod {
    UNKNOWN = 0,
    CHECKSUM = 1,
    SIGNATURE = 2,
}

export namespace ImportFlags {
    export const $gtype: GObject.GType<ImportFlags>;
}

export enum ImportFlags {
    NONE = 0,
}

export namespace BlobFlags {
    export const $gtype: GObject.GType<BlobFlags>;
}

export enum BlobFlags {
    NONE = 0,
    IS_UTF8 = 1,
}

export namespace ExportFlags {
    export const $gtype: GObject.GType<ExportFlags>;
}

export enum ExportFlags {
    NONE = 0,
    NO_TIMESTAMP = 2,
}

export namespace SignFlags {
    export const $gtype: GObject.GType<SignFlags>;
}

export enum SignFlags {
    NONE = 0,
    ADD_TIMESTAMP = 1,
    ADD_CERT = 2,
}

export namespace VerifyFlags {
    export const $gtype: GObject.GType<VerifyFlags>;
}

export enum VerifyFlags {
    NONE = 0,
    DISABLE_TIME_CHECKS = 4,
    REQUIRE_CHECKSUM = 8,
    REQUIRE_SIGNATURE = 16,
}

export namespace Blob {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Blob extends GObject.Object {
    static $gtype: GObject.GType<Blob>;

    constructor(properties?: Partial<Blob.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Blob.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](kind: BlobKind, data: GLib.Bytes | Uint8Array): Blob;

    static new_full(kind: BlobKind, data: GLib.Bytes | Uint8Array, flags: BlobFlags): Blob;

    static new_utf8(kind: BlobKind, data: string): Blob;

    // Members

    get_appstream_id(): string;

    get_data(): GLib.Bytes;
    get_data(...args: never[]): never;

    get_data_as_string(): string;

    get_kind(): BlobKind;

    get_timestamp(): number;

    set_appstream_id(appstream_id?: string | null): void;

    set_timestamp(timestamp: number): void;

    to_string(): string;

    static kind_from_string(kind: string): BlobKind;

    static kind_to_filename_ext(kind: BlobKind): string;

    static kind_to_string(kind: BlobKind): string;
}

export namespace Context {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Context extends GObject.Object {
    static $gtype: GObject.GType<Context>;

    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Context;

    // Members

    add_public_key(filename: string): void;

    add_public_keys(path: string): void;

    get_engine(kind: BlobKind): Engine;

    get_keyring_path(): string | null;

    set_keyring_path(path: string): void;

    verify_blob(data: GLib.Bytes | Uint8Array, blob: Blob, flags: VerifyFlags): Result;

    verify_item(data: GLib.Bytes | Uint8Array, item: Item, flags: VerifyFlags): Result[];
}

export namespace Engine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: Context;
        kind: number;
        method: number;
        verify_kind: number;
        verifyKind: number;
    }
}

export class Engine extends GObject.Object {
    static $gtype: GObject.GType<Engine>;

    constructor(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: Context;
    kind: number;
    method: number;
    verify_kind: number;
    verifyKind: number;

    // Members

    get_kind(): BlobKind;

    get_method(): BlobMethod;

    pubkey_sign(
        blob: GLib.Bytes | Uint8Array,
        cert: GLib.Bytes | Uint8Array,
        privkey: GLib.Bytes | Uint8Array,
        flags: SignFlags
    ): Blob;

    pubkey_verify(blob: GLib.Bytes | Uint8Array, blob_signature: GLib.Bytes | Uint8Array, flags: VerifyFlags): Result;

    self_sign(blob: GLib.Bytes | Uint8Array, flags: SignFlags): Blob;

    self_verify(blob: GLib.Bytes | Uint8Array, blob_signature: GLib.Bytes | Uint8Array, flags: VerifyFlags): Result;

    vfunc_add_public_key(filename: string): boolean;

    vfunc_pubkey_sign(
        blob: GLib.Bytes | Uint8Array,
        cert: GLib.Bytes | Uint8Array,
        privkey: GLib.Bytes | Uint8Array,
        flags: SignFlags
    ): Blob;

    vfunc_pubkey_verify(
        blob: GLib.Bytes | Uint8Array,
        blob_signature: GLib.Bytes | Uint8Array,
        flags: VerifyFlags
    ): Result;

    vfunc_self_sign(blob: GLib.Bytes | Uint8Array, flags: SignFlags): Blob;

    vfunc_self_verify(
        blob: GLib.Bytes | Uint8Array,
        blob_signature: GLib.Bytes | Uint8Array,
        flags: VerifyFlags
    ): Result;

    vfunc_setup(): boolean;
}

export namespace File {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class File extends GObject.Object {
    static $gtype: GObject.GType<File>;

    constructor(properties?: Partial<File.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<File.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): File;

    // Members

    add_item(item: Item): void;

    export_file(gfile: Gio.File, flags: ExportFlags, cancellable?: Gio.Cancellable | null): boolean;

    export_json(flags: ExportFlags): string;

    export_stream(ostream: Gio.OutputStream, flags: ExportFlags, cancellable?: Gio.Cancellable | null): boolean;

    get_item_by_id(id: string): Item;

    get_item_default(): Item;

    get_items(): Item[];

    get_version_major(): number;

    get_version_minor(): number;

    import_file(gfile: Gio.File, flags: ImportFlags, cancellable?: Gio.Cancellable | null): boolean;

    import_json(json: string, flags: ImportFlags): boolean;

    import_stream(istream: Gio.InputStream, flags: ImportFlags, cancellable?: Gio.Cancellable | null): boolean;

    to_string(): string;
}

export namespace Item {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Item extends GObject.Object {
    static $gtype: GObject.GType<Item>;

    constructor(properties?: Partial<Item.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Item.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](id: string): Item;

    // Members

    add_alias_id(id: string): void;

    add_blob(blob: Blob): void;

    get_alias_ids(): string[];

    get_blobs(): Blob[];

    get_blobs_by_kind(kind: BlobKind): Blob[];

    get_id(): string;

    remove_alias_id(id: string): void;

    to_string(): string;
}

export namespace Result {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        authority: string;
        engine: Engine;
        timestamp: number;
    }
}

export class Result extends GObject.Object {
    static $gtype: GObject.GType<Result>;

    constructor(properties?: Partial<Result.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Result.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authority: string;
    engine: Engine;
    timestamp: number;

    // Members

    get_authority(): string;

    get_kind(): BlobKind;

    get_method(): BlobMethod;

    get_timestamp(): number;

    to_string(): string;
}
