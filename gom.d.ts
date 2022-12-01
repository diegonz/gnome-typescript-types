/**
 * Gom 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export function error_quark(): GLib.Quark;

export type AdapterCallback = (adapter: Adapter) => void;
export type RepositoryMigrator = (repository: Repository, adapter: Adapter, version: number) => boolean;
export type ResourceFromBytesFunc = (bytes: GLib.Bytes | Uint8Array, value: any) => void;
export type ResourceToBytesFunc = (value: any) => GLib.Bytes;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static ADAPTER_OPEN: number;
    static COMMAND_NO_SQL: number;
    static COMMAND_SQLITE: number;
    static REPOSITORY_EMPTY_RESULT: number;
    static RESOURCE_CURSOR: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace FilterMode {
    export const $gtype: GObject.GType<FilterMode>;
}

export enum FilterMode {
    SQL = 1,
    OR = 2,
    AND = 3,
    EQ = 4,
    NEQ = 5,
    GT = 6,
    GTE = 7,
    LT = 8,
    LTE = 9,
    LIKE = 10,
    GLOB = 11,
    IS_NULL = 12,
    IS_NOT_NULL = 13,
}

export namespace SortingMode {
    export const $gtype: GObject.GType<SortingMode>;
}

export enum SortingMode {
    ASCENDING = 1,
    DESCENDING = 2,
}

export namespace Adapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Adapter extends GObject.Object {
    static $gtype: GObject.GType<Adapter>;

    constructor(properties?: Partial<Adapter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Adapter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Adapter;

    // Members

    close_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    close_finish(result: Gio.AsyncResult): boolean;

    close_sync(): boolean;

    execute_sql(sql: string): boolean;

    get_handle(): any | null;

    open_async(uri: string, callback?: Gio.AsyncReadyCallback<this> | null): void;

    open_finish(result: Gio.AsyncResult): boolean;

    open_sync(uri: string): boolean;

    queue_read(callback: AdapterCallback): void;

    queue_write(callback: AdapterCallback): void;
}

export namespace Command {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        adapter: Adapter;
        sql: string;
    }
}

export class Command extends GObject.Object {
    static $gtype: GObject.GType<Command>;

    constructor(properties?: Partial<Command.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Command.ConstructorProperties>, ...args: any[]): void;

    // Properties
    adapter: Adapter;
    sql: string;

    // Members

    execute(cursor: Cursor): boolean;

    get_param_index(param_name: string): number;

    reset(): void;

    set_param(param: number, value: any): void;

    set_param_double(param: number, value: number): void;

    set_param_float(param: number, value: number): void;

    set_param_int(param: number, value: number): void;

    set_param_int64(param: number, value: number): void;

    set_param_string(param: number, value: string): void;

    set_param_uint(param: number, value: number): void;

    set_param_uint64(param: number, value: number): void;

    set_sql(sql: string): void;
}

export namespace CommandBuilder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        adapter: Adapter;
        filter: Filter;
        limit: number;
        m2m_table: string;
        m2mTable: string;
        m2m_type: GObject.GType;
        m2mType: GObject.GType;
        offset: number;
        resource_type: GObject.GType;
        resourceType: GObject.GType;
        sorting: Sorting;
    }
}

export class CommandBuilder extends GObject.Object {
    static $gtype: GObject.GType<CommandBuilder>;

    constructor(properties?: Partial<CommandBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CommandBuilder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    adapter: Adapter;
    filter: Filter;
    limit: number;
    m2m_table: string;
    m2mTable: string;
    m2m_type: GObject.GType;
    m2mType: GObject.GType;
    offset: number;
    resource_type: GObject.GType;
    resourceType: GObject.GType;
    sorting: Sorting;

    // Members

    build_count(): Command;

    build_create(version: number): Command[];

    build_delete(): Command;

    build_insert(resource: Resource): Command;

    build_select(): Command;

    build_update(resource: Resource): Command;
}

export namespace Cursor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        statement: any;
    }
}

export class Cursor extends GObject.Object {
    static $gtype: GObject.GType<Cursor>;

    constructor(properties?: Partial<Cursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Cursor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    statement: any;

    // Members

    get_column(column: number, value: any): void;

    get_column_boolean(column: number): boolean;

    get_column_double(column: number): number;

    get_column_float(column: number): number;

    get_column_int(column: number): number;

    get_column_int64(column: number): number;

    get_column_name(column: number): string;

    get_column_string(column: number): string;

    get_column_uint(column: number): number;

    get_column_uint64(column: number): number;

    get_n_columns(): number;

    next(): boolean;
}

export namespace Filter {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        mode: FilterMode;
        sql: string;
    }
}

export class Filter extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Filter>;

    constructor(properties?: Partial<Filter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Filter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mode: FilterMode;
    sql: string;

    // Constructors

    static new_and(left: Filter, right: Filter): Filter;

    static new_and_fullv(filter_array: Filter): Filter;

    static new_eq(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_glob(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_gt(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_gte(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_is_not_null(resource_type: GObject.GType, property_name: string): Filter;

    static new_is_null(resource_type: GObject.GType, property_name: string): Filter;

    static new_like(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_lt(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_lte(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_neq(resource_type: GObject.GType, property_name: string, value: any): Filter;

    static new_or(left: Filter, right: Filter): Filter;

    static new_or_fullv(filter_array: Filter): Filter;

    static new_sql(sql: string, values: GObject.Value[]): Filter;

    // Members

    get_sql(table_map: GLib.HashTable<any, any>): string;

    get_values(): GObject.Value[];
}

export namespace Repository {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        adapter: Adapter;
    }
}

export class Repository extends GObject.Object {
    static $gtype: GObject.GType<Repository>;

    constructor(properties?: Partial<Repository.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Repository.ConstructorProperties>, ...args: any[]): void;

    // Properties
    adapter: Adapter;

    // Constructors

    static ['new'](adapter: Adapter): Repository;

    // Members

    automatic_migrate_async(
        version: number,
        object_types: GObject.GType[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    automatic_migrate_finish(result: Gio.AsyncResult): boolean;

    automatic_migrate_sync(version: number, object_types: GObject.GType[]): boolean;

    find_async(resource_type: GObject.GType, filter: Filter, callback?: Gio.AsyncReadyCallback<this> | null): void;

    find_finish(result: Gio.AsyncResult): ResourceGroup;

    find_one_async(resource_type: GObject.GType, filter: Filter, callback?: Gio.AsyncReadyCallback<this> | null): void;

    find_one_finish(result: Gio.AsyncResult): Resource;

    find_one_sync(resource_type: GObject.GType, filter?: Filter | null): Resource;

    find_sorted_async(
        resource_type: GObject.GType,
        filter: Filter,
        sorting: Sorting,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    find_sorted_sync(resource_type: GObject.GType, filter?: Filter | null, sorting?: Sorting | null): ResourceGroup;

    find_sync(resource_type: GObject.GType, filter?: Filter | null): ResourceGroup;

    get_adapter(): Adapter;

    migrate_async(version: number, migrator: RepositoryMigrator, callback?: Gio.AsyncReadyCallback<this> | null): void;

    migrate_finish(result: Gio.AsyncResult): boolean;

    migrate_sync(version: number, migrator: RepositoryMigrator): boolean;
}

export namespace Resource {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        repository: Repository;
    }
}

export abstract class Resource extends GObject.Object {
    static $gtype: GObject.GType<Resource>;

    constructor(properties?: Partial<Resource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Resource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    repository: Repository;

    // Members

    delete_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    delete_finish(result: Gio.AsyncResult): boolean;

    delete_sync(): boolean;

    fetch_m2m_async(
        resource_type: GObject.GType,
        m2m_table: string,
        filter: Filter,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    fetch_m2m_finish(result: Gio.AsyncResult): ResourceGroup;

    save_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    save_finish(result: Gio.AsyncResult): boolean;

    save_sync(): boolean;

    static from_bytes_func_quark(): GLib.Quark;

    static new_in_version_quark(): GLib.Quark;

    static not_mapped_quark(): GLib.Quark;

    static notnull(): GLib.Quark;

    static ref_property_name(): GLib.Quark;

    static ref_table_class(): GLib.Quark;

    static to_bytes_func_quark(): GLib.Quark;

    static unique(): GLib.Quark;
}

export namespace ResourceGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        count: number;
        filter: Filter;
        is_writable: boolean;
        isWritable: boolean;
        m2m_table: string;
        m2mTable: string;
        m2m_type: GObject.GType;
        m2mType: GObject.GType;
        repository: Repository;
        resource_type: GObject.GType;
        resourceType: GObject.GType;
        sorting: Sorting;
    }
}

export class ResourceGroup extends GObject.Object {
    static $gtype: GObject.GType<ResourceGroup>;

    constructor(properties?: Partial<ResourceGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ResourceGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    count: number;
    filter: Filter;
    is_writable: boolean;
    isWritable: boolean;
    m2m_table: string;
    m2mTable: string;
    m2m_type: GObject.GType;
    m2mType: GObject.GType;
    repository: Repository;
    resource_type: GObject.GType;
    resourceType: GObject.GType;
    sorting: Sorting;

    // Constructors

    static ['new'](repository: Repository): ResourceGroup;

    // Members

    append(resource: Resource): boolean;

    delete_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    delete_finish(result: Gio.AsyncResult): boolean;

    delete_sync(): boolean;

    fetch_async(index_: number, count: number, callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_finish(result: Gio.AsyncResult): boolean;

    fetch_sync(index_: number, count: number): boolean;

    get_count(): number;

    get_index(index_: number): Resource;

    get_m2m_table(): string;

    write_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    write_finish(result: Gio.AsyncResult): boolean;

    write_sync(): boolean;
}

export namespace Sorting {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}

export class Sorting extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Sorting>;

    constructor(properties?: Partial<Sorting.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Sorting.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SortingPrivate;

    // Members

    add(resource_type: GObject.GType, property_name: string, sorting_mode: SortingMode): void;

    get_sql(table_map: GLib.HashTable<any, any>): string;
}

export class AdapterPrivate {
    static $gtype: GObject.GType<AdapterPrivate>;

    constructor(copy: AdapterPrivate);
}

export class CommandBuilderPrivate {
    static $gtype: GObject.GType<CommandBuilderPrivate>;

    constructor(copy: CommandBuilderPrivate);
}

export class CommandPrivate {
    static $gtype: GObject.GType<CommandPrivate>;

    constructor(copy: CommandPrivate);
}

export class CursorPrivate {
    static $gtype: GObject.GType<CursorPrivate>;

    constructor(copy: CursorPrivate);
}

export class FilterPrivate {
    static $gtype: GObject.GType<FilterPrivate>;

    constructor(copy: FilterPrivate);
}

export class RepositoryPrivate {
    static $gtype: GObject.GType<RepositoryPrivate>;

    constructor(copy: RepositoryPrivate);
}

export class ResourceGroupPrivate {
    static $gtype: GObject.GType<ResourceGroupPrivate>;

    constructor(copy: ResourceGroupPrivate);
}

export class ResourcePrivate {
    static $gtype: GObject.GType<ResourcePrivate>;

    constructor(copy: ResourcePrivate);
}

export class SortingPrivate {
    static $gtype: GObject.GType<SortingPrivate>;

    constructor(copy: SortingPrivate);
}
