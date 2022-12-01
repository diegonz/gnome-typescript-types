/**
 * GnomeAutoar 0.1
 *
 * Generated from 0.1
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from "./glib";
import * as GObject from "./gobject";
import * as Gio from "./gio";

export function check_mime_type_supported(mime_type: string): boolean;

export function filter_get_description(filter: Filter): string;

export function filter_get_description_libarchive(filter: Filter): string;

export function filter_get_extension(filter: Filter): string;

export function filter_get_filter_libarchive(filter: Filter): number;

export function filter_get_mime_type(filter: Filter): string;

export function filter_is_valid(filter: Filter): boolean;

export function filter_last(): number;

export function format_filter_get_description(format: Format, filter: Filter): string;

export function format_filter_get_extension(format: Format, filter: Filter): string;

export function format_filter_get_mime_type(format: Format, filter: Filter): string;

export function format_get_description(format: Format): string;

export function format_get_description_libarchive(format: Format): string;

export function format_get_extension(format: Format): string;

export function format_get_format_libarchive(format: Format): number;

export function format_get_mime_type(format: Format): string;

export function format_is_valid(format: Format): boolean;

export function format_last(): number;

export function libarchive_quark(): GLib.Quark;

export function query_mime_type_supported(file: Gio.File): boolean;

export type FilterFunc = (a?: any | null) => number;
export type FormatFunc = (a?: any | null) => number;

export namespace ConflictAction {
    export const $gtype: GObject.GType<ConflictAction>;
}

export enum ConflictAction {
    SKIP = 0,
    OVERWRITE = 1,
    CHANGE_DESTINATION = 2,
}

export namespace Filter {
    export const $gtype: GObject.GType<Filter>;
}

export enum Filter {
    NONE = 1,
    COMPRESS = 2,
    GZIP = 3,
    BZIP2 = 4,
    XZ = 5,
    LZMA = 6,
    LZIP = 7,
    LZOP = 8,
    GRZIP = 9,
    LRZIP = 10,
}

export namespace Format {
    export const $gtype: GObject.GType<Format>;
}

export enum Format {
    ZIP = 1,
    TAR = 2,
    CPIO = 3,
    "7ZIP" = 4,
    AR_BSD = 5,
    AR_SVR4 = 6,
    CPIO_NEWC = 7,
    GNUTAR = 8,
    ISO9660 = 9,
    PAX = 10,
    USTAR = 11,
    XAR = 12,
}

export module Compressor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        completed_files: number;
        completedFiles: number;
        completed_size: number;
        completedSize: number;
        create_top_level_directory: boolean;
        createTopLevelDirectory: boolean;
        files: number;
        notify_interval: number;
        notifyInterval: number;
        output_file: Gio.File;
        outputFile: Gio.File;
        output_is_dest: boolean;
        outputIsDest: boolean;
        size: number;
        source_files: any;
        sourceFiles: any;
    }
}

export class Compressor extends GObject.Object {
    static $gtype: GObject.GType<Compressor>;

    constructor(properties?: Partial<Compressor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Compressor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    completed_files: number;
    completedFiles: number;
    completed_size: number;
    completedSize: number;
    create_top_level_directory: boolean;
    createTopLevelDirectory: boolean;
    files: number;
    notify_interval: number;
    notifyInterval: number;
    output_file: Gio.File;
    outputFile: Gio.File;
    output_is_dest: boolean;
    outputIsDest: boolean;
    size: number;
    source_files: any;
    sourceFiles: any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "cancelled", callback: (_source: this) => void): number;

    connect_after(signal: "cancelled", callback: (_source: this) => void): number;

    emit(signal: "cancelled"): void;

    connect(signal: "completed", callback: (_source: this) => void): number;

    connect_after(signal: "completed", callback: (_source: this) => void): number;

    emit(signal: "completed"): void;

    connect(signal: "decide-dest", callback: (_source: this, destination: Gio.File) => void): number;

    connect_after(signal: "decide-dest", callback: (_source: this, destination: Gio.File) => void): number;

    emit(signal: "decide-dest", destination: Gio.File): void;

    connect(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;

    connect_after(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;

    emit(signal: "error", error: GLib.Error): void;

    connect(
        signal: "progress",
        callback: (_source: this, completed_size: number, completed_files: number) => void
    ): number;

    connect_after(
        signal: "progress",
        callback: (_source: this, completed_size: number, completed_files: number) => void
    ): number;

    emit(signal: "progress", completed_size: number, completed_files: number): void;

    // Members

    get_completed_files(): number;

    get_completed_size(): number;

    get_create_top_level_directory(): boolean;

    get_files(): number;

    get_filter(): Filter;

    get_format(): Format;

    get_notify_interval(): number;

    get_output_file(): Gio.File;

    get_output_is_dest(): boolean;

    get_size(): number;

    set_notify_interval(notify_interval: number): void;

    set_output_is_dest(output_is_dest: boolean): void;

    start(cancellable?: Gio.Cancellable | null): void;

    start_async(cancellable?: Gio.Cancellable | null): void;

    static quark(): GLib.Quark;
}

export module Extractor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        completed_files: number;
        completedFiles: number;
        completed_size: number;
        completedSize: number;
        delete_after_extraction: boolean;
        deleteAfterExtraction: boolean;
        notify_interval: number;
        notifyInterval: number;
        output_file: Gio.File;
        outputFile: Gio.File;
        output_is_dest: boolean;
        outputIsDest: boolean;
        source_file: Gio.File;
        sourceFile: Gio.File;
        total_files: number;
        totalFiles: number;
        total_size: number;
        totalSize: number;
    }
}

export class Extractor extends GObject.Object {
    static $gtype: GObject.GType<Extractor>;

    constructor(properties?: Partial<Extractor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Extractor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    completed_files: number;
    completedFiles: number;
    completed_size: number;
    completedSize: number;
    delete_after_extraction: boolean;
    deleteAfterExtraction: boolean;
    notify_interval: number;
    notifyInterval: number;
    output_file: Gio.File;
    outputFile: Gio.File;
    output_is_dest: boolean;
    outputIsDest: boolean;
    source_file: Gio.File;
    sourceFile: Gio.File;
    total_files: number;
    totalFiles: number;
    total_size: number;
    totalSize: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "cancelled", callback: (_source: this) => void): number;

    connect_after(signal: "cancelled", callback: (_source: this) => void): number;

    emit(signal: "cancelled"): void;

    connect(signal: "completed", callback: (_source: this) => void): number;

    connect_after(signal: "completed", callback: (_source: this) => void): number;

    emit(signal: "completed"): void;

    connect(signal: "conflict", callback: (_source: this, file: Gio.File, new_file: any | null) => number): number;

    connect_after(
        signal: "conflict",
        callback: (_source: this, file: Gio.File, new_file: any | null) => number
    ): number;

    emit(signal: "conflict", file: Gio.File, new_file: any | null): void;

    connect(
        signal: "decide-destination",
        callback: (_source: this, destination: Gio.File, files: any | null) => GObject.Object
    ): number;

    connect_after(
        signal: "decide-destination",
        callback: (_source: this, destination: Gio.File, files: any | null) => GObject.Object
    ): number;

    emit(signal: "decide-destination", destination: Gio.File, files: any | null): void;

    connect(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;

    connect_after(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;

    emit(signal: "error", error: GLib.Error): void;

    connect(
        signal: "progress",
        callback: (_source: this, completed_size: number, completed_files: number) => void
    ): number;

    connect_after(
        signal: "progress",
        callback: (_source: this, completed_size: number, completed_files: number) => void
    ): number;

    emit(signal: "progress", completed_size: number, completed_files: number): void;

    connect(signal: "scanned", callback: (_source: this, files: number) => void): number;

    connect_after(signal: "scanned", callback: (_source: this, files: number) => void): number;

    emit(signal: "scanned", files: number): void;

    // Constructors

    static ["new"](source_file: Gio.File, output_file: Gio.File): Extractor;

    // Members

    get_completed_files(): number;

    get_completed_size(): number;

    get_delete_after_extraction(): boolean;

    get_notify_interval(): number;

    get_output_file(): Gio.File;

    get_output_is_dest(): boolean;

    get_source_file(): Gio.File;

    get_total_files(): number;

    get_total_size(): number;

    set_delete_after_extraction(delete_if_succeed: boolean): void;

    set_notify_interval(notify_interval: number): void;

    set_output_is_dest(output_is_dest: boolean): void;

    start(cancellable?: Gio.Cancellable | null): void;

    start_async(cancellable?: Gio.Cancellable | null): void;

    static quark(): GLib.Quark;
}
