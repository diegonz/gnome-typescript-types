/**
 * TrackerMiner 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from "./glib";
import * as GObject from "./gobject";
import * as Gio from "./gio";

export const MINER_DBUS_INTERFACE: string;
export const MINER_DBUS_NAME_PREFIX: string;
export const MINER_DBUS_PATH_PREFIX: string;
export const MINER_ERROR_DOMAIN: string;

export namespace DecoratorError {
    export const $gtype: GObject.GType<DecoratorError>;
}

export enum DecoratorError {
    EMPTY = 0,
    PAUSED = 1,
}

export namespace FilterPolicy {
    export const $gtype: GObject.GType<FilterPolicy>;
}

export enum FilterPolicy {
    DENY = 0,
    ACCEPT = 1,
}

export namespace FilterType {
    export const $gtype: GObject.GType<FilterType>;
}

export enum FilterType {
    FILE = 0,
    DIRECTORY = 1,
    PARENT_DIRECTORY = 2,
}

export namespace MinerError {
    export const $gtype: GObject.GType<MinerError>;
}

export enum MinerError {
    NAME_MISSING = 0,
    NAME_UNAVAILABLE = 1,
    PAUSED = 2,
    PAUSED_ALREADY = 3,
    INVALID_COOKIE = 4,
}

export namespace MinerFSError {
    export const $gtype: GObject.GType<MinerFSError>;
}

export enum MinerFSError {
    MINER_FS_ERROR_INIT = 0,
}

export namespace MinerFSEventType {
    export const $gtype: GObject.GType<MinerFSEventType>;
}

export enum MinerFSEventType {
    CREATED = 0,
    UPDATED = 1,
    DELETED = 2,
    MOVED = 3,
}

export namespace NetworkType {
    export const $gtype: GObject.GType<NetworkType>;
}

export enum NetworkType {
    NONE = 0,
    UNKNOWN = 1,
    GPRS = 2,
    EDGE = 3,
    "3G" = 4,
    LAN = 5,
}

export namespace DirectoryFlags {
    export const $gtype: GObject.GType<DirectoryFlags>;
}

export enum DirectoryFlags {
    NONE = 0,
    RECURSE = 2,
    CHECK_MTIME = 4,
    MONITOR = 8,
    IGNORE = 16,
    PRESERVE = 32,
    PRIORITY = 64,
    NO_STAT = 128,
    CHECK_DELETED = 256,
}

export module Decorator {
    export interface ConstructorProperties extends Miner.ConstructorProperties {
        [key: string]: any;

        class_names: string[];
        classNames: string[];
        commit_batch_size: number;
        commitBatchSize: number;
        data_source: string;
        dataSource: string;
        priority_rdf_types: string[];
        priorityRdfTypes: string[];
    }
}

export abstract class Decorator extends Miner implements Gio.Initable {
    static $gtype: GObject.GType<Decorator>;

    constructor(properties?: Partial<Decorator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Decorator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    class_names: string[];
    classNames: string[];
    commit_batch_size: number;
    commitBatchSize: number;
    data_source: string;
    dataSource: string;
    priority_rdf_types: string[];
    priorityRdfTypes: string[];

    // Fields
    priv: any | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "finished", callback: (_source: this) => void): number;

    connect_after(signal: "finished", callback: (_source: this) => void): number;

    emit(signal: "finished"): void;

    connect(signal: "items-available", callback: (_source: this) => void): number;

    connect_after(signal: "items-available", callback: (_source: this) => void): number;

    emit(signal: "items-available"): void;

    // Members

    delete_id(id: number): void;

    get_class_names(): string[];

    get_data_source(): string;

    get_n_items(): number;

    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    next_finish(result: Gio.AsyncResult): DecoratorInfo;

    prepend_id(id: number, class_name_id: number): void;

    set_priority_rdf_types(rdf_types: string): void;

    vfunc_finished(): void;

    vfunc_items_available(): void;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module DecoratorFS {
    export interface ConstructorProperties extends Decorator.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DecoratorFS extends Decorator implements Gio.Initable {
    static $gtype: GObject.GType<DecoratorFS>;

    constructor(properties?: Partial<DecoratorFS.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DecoratorFS.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: any | any;

    // Members

    prepend_file(file: Gio.File): number;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module IndexingTree {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        filter_hidden: boolean;
        filterHidden: boolean;
        root: Gio.File;
    }
}

export class IndexingTree extends GObject.Object {
    static $gtype: GObject.GType<IndexingTree>;

    constructor(properties?: Partial<IndexingTree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IndexingTree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter_hidden: boolean;
    filterHidden: boolean;
    root: Gio.File;

    // Fields
    priv: any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "child-updated", callback: (_source: this, root: Gio.File, child: Gio.File) => void): number;

    connect_after(signal: "child-updated", callback: (_source: this, root: Gio.File, child: Gio.File) => void): number;

    emit(signal: "child-updated", root: Gio.File, child: Gio.File): void;

    connect(signal: "directory-added", callback: (_source: this, directory: Gio.File) => void): number;

    connect_after(signal: "directory-added", callback: (_source: this, directory: Gio.File) => void): number;

    emit(signal: "directory-added", directory: Gio.File): void;

    connect(signal: "directory-removed", callback: (_source: this, directory: Gio.File) => void): number;

    connect_after(signal: "directory-removed", callback: (_source: this, directory: Gio.File) => void): number;

    emit(signal: "directory-removed", directory: Gio.File): void;

    connect(signal: "directory-updated", callback: (_source: this, directory: Gio.File) => void): number;

    connect_after(signal: "directory-updated", callback: (_source: this, directory: Gio.File) => void): number;

    emit(signal: "directory-updated", directory: Gio.File): void;

    // Constructors

    static ["new"](): IndexingTree;

    static new_with_root(root: Gio.File): IndexingTree;

    // Members

    add(directory: Gio.File, flags: DirectoryFlags): void;

    add_filter(filter: FilterType, glob_string: string): void;

    clear_filters(type: FilterType): void;

    file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean;

    file_is_root(file: Gio.File): boolean;

    file_matches_filter(type: FilterType, file: Gio.File): boolean;

    get_default_policy(filter: FilterType): FilterPolicy;

    get_filter_hidden(): boolean;

    get_master_root(): Gio.File;

    get_root(file: Gio.File): [Gio.File, DirectoryFlags];

    list_roots(): Gio.File[];

    notify_update(file: Gio.File, recursive: boolean): boolean;

    parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean;

    remove(directory: Gio.File): void;

    set_default_policy(filter: FilterType, policy: FilterPolicy): void;

    set_filter_hidden(filter_hidden: boolean): void;

    vfunc_child_updated(root: Gio.File, child: Gio.File): void;

    vfunc_directory_added(directory: Gio.File): void;

    vfunc_directory_removed(directory: Gio.File): void;

    vfunc_directory_updated(directory: Gio.File): void;
}

export module Miner {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        progress: number;
        remaining_time: number;
        remainingTime: number;
        status: string;
    }
}

export abstract class Miner extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Miner>;

    constructor(properties?: Partial<Miner.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Miner.ConstructorProperties>, ...args: any[]): void;

    // Properties
    progress: number;
    remaining_time: number;
    remainingTime: number;
    status: string;

    // Fields
    priv: MinerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "paused", callback: (_source: this) => void): number;

    connect_after(signal: "paused", callback: (_source: this) => void): number;

    emit(signal: "paused"): void;

    connect(
        signal: "progress",
        callback: (_source: this, status: string, progress: number, remaining_time: number) => void
    ): number;

    connect_after(
        signal: "progress",
        callback: (_source: this, status: string, progress: number, remaining_time: number) => void
    ): number;

    emit(signal: "progress", status: string, progress: number, remaining_time: number): void;

    connect(signal: "resumed", callback: (_source: this) => void): number;

    connect_after(signal: "resumed", callback: (_source: this) => void): number;

    emit(signal: "resumed"): void;

    connect(signal: "started", callback: (_source: this) => void): number;

    connect_after(signal: "started", callback: (_source: this) => void): number;

    emit(signal: "started"): void;

    connect(signal: "stopped", callback: (_source: this) => void): number;

    connect_after(signal: "stopped", callback: (_source: this) => void): number;

    emit(signal: "stopped"): void;

    // Members

    is_paused(): boolean;

    is_started(): boolean;

    pause(): void;

    resume(): boolean;

    start(): void;

    stop(): void;

    vfunc_paused(): void;

    vfunc_progress(status: string, progress: number, remaining_time: number): void;

    vfunc_resumed(): void;

    vfunc_started(): void;

    vfunc_stopped(): void;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module MinerFS {
    export interface ConstructorProperties extends Miner.ConstructorProperties {
        [key: string]: any;

        data_provider: DataProvider;
        dataProvider: DataProvider;
        processing_pool_ready_limit: number;
        processingPoolReadyLimit: number;
        processing_pool_wait_limit: number;
        processingPoolWaitLimit: number;
        root: Gio.File;
        throttle: number;
    }
}

export abstract class MinerFS extends Miner implements Gio.Initable {
    static $gtype: GObject.GType<MinerFS>;

    constructor(properties?: Partial<MinerFS.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MinerFS.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_provider: DataProvider;
    dataProvider: DataProvider;
    processing_pool_ready_limit: number;
    processingPoolReadyLimit: number;
    processing_pool_wait_limit: number;
    processingPoolWaitLimit: number;
    root: Gio.File;
    throttle: number;

    // Fields
    priv: MinerFSPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: "finished",
        callback: (
            _source: this,
            elapsed: number,
            directories_found: number,
            directories_ignored: number,
            files_found: number,
            files_ignored: number
        ) => void
    ): number;

    connect_after(
        signal: "finished",
        callback: (
            _source: this,
            elapsed: number,
            directories_found: number,
            directories_ignored: number,
            files_found: number,
            files_ignored: number
        ) => void
    ): number;

    emit(
        signal: "finished",
        elapsed: number,
        directories_found: number,
        directories_ignored: number,
        files_found: number,
        files_ignored: number
    ): void;

    connect(signal: "finished-root", callback: (_source: this, file: Gio.File) => void): number;

    connect_after(signal: "finished-root", callback: (_source: this, file: Gio.File) => void): number;

    emit(signal: "finished-root", file: Gio.File): void;

    connect(
        signal: "move-file",
        callback: (_source: this, object: Gio.File, p0: Gio.File, p1: boolean) => string
    ): number;

    connect_after(
        signal: "move-file",
        callback: (_source: this, object: Gio.File, p0: Gio.File, p1: boolean) => string
    ): number;

    emit(signal: "move-file", object: Gio.File, p0: Gio.File, p1: boolean): void;

    connect(signal: "process-file", callback: (_source: this, file: Gio.File, builder: Gio.Task) => boolean): number;

    connect_after(
        signal: "process-file",
        callback: (_source: this, file: Gio.File, builder: Gio.Task) => boolean
    ): number;

    emit(signal: "process-file", file: Gio.File, builder: Gio.Task): void;

    connect(
        signal: "process-file-attributes",
        callback: (_source: this, file: Gio.File, builder: Gio.Task) => boolean
    ): number;

    connect_after(
        signal: "process-file-attributes",
        callback: (_source: this, file: Gio.File, builder: Gio.Task) => boolean
    ): number;

    emit(signal: "process-file-attributes", file: Gio.File, builder: Gio.Task): void;

    connect(signal: "remove-children", callback: (_source: this, object: Gio.File) => string): number;

    connect_after(signal: "remove-children", callback: (_source: this, object: Gio.File) => string): number;

    emit(signal: "remove-children", object: Gio.File): void;

    connect(signal: "remove-file", callback: (_source: this, file: Gio.File) => string): number;

    connect_after(signal: "remove-file", callback: (_source: this, file: Gio.File) => string): number;

    emit(signal: "remove-file", file: Gio.File): void;

    // Members

    check_file(file: Gio.File, priority: number, check_parents: boolean): void;

    get_data_provider(): DataProvider;

    get_indexing_tree(): IndexingTree;

    get_throttle(): number;

    get_urn(file: Gio.File): string | null;

    has_items_to_process(): boolean;

    notify_finish(task: Gio.Task, sparql: string | null, error: GLib.Error): void;

    query_urn(file: Gio.File): string;

    set_throttle(throttle: number): void;

    vfunc_filter_event(type: MinerFSEventType, file: Gio.File, source_file: Gio.File): boolean;

    vfunc_finished(
        elapsed: number,
        directories_found: number,
        directories_ignored: number,
        files_found: number,
        files_ignored: number
    ): void;

    vfunc_finished_root(
        root: Gio.File,
        directories_found: number,
        directories_ignored: number,
        files_found: number,
        files_ignored: number
    ): void;

    vfunc_move_file(dest: Gio.File, source: Gio.File, recursive: boolean): string;

    vfunc_process_file(file: Gio.File, task: Gio.Task): boolean;

    vfunc_process_file_attributes(file: Gio.File, task: Gio.Task): boolean;

    vfunc_remove_children(file: Gio.File): string;

    vfunc_remove_file(file: Gio.File): string;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module MinerOnline {
    export interface ConstructorProperties extends Miner.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class MinerOnline extends Miner implements Gio.Initable {
    static $gtype: GObject.GType<MinerOnline>;

    constructor(properties?: Partial<MinerOnline.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MinerOnline.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "connected", callback: (_source: this, type: unknown) => boolean): number;

    connect_after(signal: "connected", callback: (_source: this, type: unknown) => boolean): number;

    emit(signal: "connected", type: unknown): void;

    connect(signal: "disconnected", callback: (_source: this) => void): number;

    connect_after(signal: "disconnected", callback: (_source: this) => void): number;

    emit(signal: "disconnected"): void;

    // Members

    get_network_type(): NetworkType;

    vfunc_connected(network: NetworkType): boolean;

    vfunc_disconnected(): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module MinerProxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        dbus_connection: Gio.DBusConnection;
        dbusConnection: Gio.DBusConnection;
        dbus_path: string;
        dbusPath: string;
        miner: Miner;
    }
}

export class MinerProxy extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<MinerProxy>;

    constructor(properties?: Partial<MinerProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MinerProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dbus_connection: Gio.DBusConnection;
    dbusConnection: Gio.DBusConnection;
    dbus_path: string;
    dbusPath: string;
    miner: Miner;

    // Constructors

    static ["new"](
        miner: Miner,
        connection: Gio.DBusConnection,
        dbus_path: string,
        cancellable?: Gio.Cancellable | null
    ): MinerProxy;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export class DecoratorInfo {
    static $gtype: GObject.GType<DecoratorInfo>;

    constructor(copy: DecoratorInfo);

    // Members
    complete(sparql: string): void;

    complete_error(error: GLib.Error): void;

    get_mimetype(): string;

    get_task(): Gio.Task;

    get_url(): string;

    get_urn(): string;

    ref(): DecoratorInfo;

    unref(): void;
}

export class MinerFSPrivate {
    static $gtype: GObject.GType<MinerFSPrivate>;

    constructor(copy: MinerFSPrivate);
}

export class MinerPrivate {
    static $gtype: GObject.GType<MinerPrivate>;

    constructor(copy: MinerPrivate);
}

export interface DataProviderNamespace {
    $gtype: GObject.GType<DataProvider>;
    prototype: DataProviderPrototype;
}

export type DataProvider = DataProviderPrototype;

export interface DataProviderPrototype extends GObject.Object {
    // Members

    begin(
        url: Gio.File,
        attributes: string,
        flags: DirectoryFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileEnumerator;

    begin_async(
        url: Gio.File,
        attributes: string,
        flags: DirectoryFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator;

    vfunc_begin(
        url: Gio.File,
        attributes: string,
        flags: DirectoryFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileEnumerator;

    vfunc_begin_async(
        url: Gio.File,
        attributes: string,
        flags: DirectoryFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator;
}

export const DataProvider: DataProviderNamespace;
