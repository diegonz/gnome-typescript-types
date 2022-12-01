/**
 * EBackend 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as EDataServer from './edataserver';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as Soup from './soup';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export const CACHE_COLUMN_OBJECT: string;
export const CACHE_COLUMN_REVISION: string;
export const CACHE_COLUMN_STATE: string;
export const CACHE_COLUMN_UID: string;
export const CACHE_TABLE_KEYS: string;
export const CACHE_TABLE_OBJECTS: string;
export const EDS_REGISTRY_MODULES: string;
export const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string;
export const USER_PROMPTER_SERVER_OBJECT_PATH: string;

export function cache_column_info_free(info?: any | null): void;

export function cache_offline_change_free(change?: any | null): void;

export function sqlite3_vfs_init(): void;

export type CacheForeachFunc = (
    cache: Cache,
    uid: string,
    revision: string,
    object: string,
    offline_state: OfflineState,
    column_names: string[],
    column_values: string[]
) => boolean;
export type CacheSelectFunc = (cache: Cache, column_names: string[], column_values: string[]) => boolean;
export type CacheUpdateFunc = (
    cache: Cache,
    uid: string,
    revision: string,
    object: string,
    offline_state: OfflineState,
    column_names: string[],
    column_values: string[]
) => boolean;

export namespace AuthenticationSessionResult {
    export const $gtype: GObject.GType<AuthenticationSessionResult>;
}

export enum AuthenticationSessionResult {
    ERROR = 0,
    SUCCESS = 1,
    DISMISSED = 2,
}

export namespace CacheDeletedFlag {
    export const $gtype: GObject.GType<CacheDeletedFlag>;
}

export enum CacheDeletedFlag {
    EXCLUDE_DELETED = 0,
    INCLUDE_DELETED = 1,
}

export namespace CacheError {
    export const $gtype: GObject.GType<CacheError>;
}

export enum CacheError {
    ENGINE = 0,
    CONSTRAINT = 1,
    NOT_FOUND = 2,
    INVALID_QUERY = 3,
    UNSUPPORTED_FIELD = 4,
    UNSUPPORTED_QUERY = 5,
    END_OF_LIST = 6,
    LOAD = 7,
}

export namespace CacheLockType {
    export const $gtype: GObject.GType<CacheLockType>;
}

export enum CacheLockType {
    READ = 0,
    WRITE = 1,
}

export namespace CacheOfflineFlag {
    export const $gtype: GObject.GType<CacheOfflineFlag>;
}

export enum CacheOfflineFlag {
    OFFLINE_UNKNOWN = -1,
    IS_ONLINE = 0,
    IS_OFFLINE = 1,
}

export namespace CacheUnlockAction {
    export const $gtype: GObject.GType<CacheUnlockAction>;
}

export enum CacheUnlockAction {
    NONE = 0,
    COMMIT = 1,
    ROLLBACK = 2,
}

export namespace DBusServerExitCode {
    export const $gtype: GObject.GType<DBusServerExitCode>;
}

export enum DBusServerExitCode {
    NONE = 0,
    NORMAL = 1,
    RELOAD = 2,
}

export namespace OfflineState {
    export const $gtype: GObject.GType<OfflineState>;
}

export enum OfflineState {
    UNKNOWN = -1,
    SYNCED = 0,
    LOCALLY_CREATED = 1,
    LOCALLY_MODIFIED = 2,
    LOCALLY_DELETED = 3,
}

export namespace CollectionBackendParts {
    export const $gtype: GObject.GType<CollectionBackendParts>;
}

export enum CollectionBackendParts {
    NONE = 0,
    CALENDAR = 1,
    CONTACTS = 2,
    MAIL = 4,
    ANY = -1,
}

export namespace SourcePermissionFlags {
    export const $gtype: GObject.GType<SourcePermissionFlags>;
}

export enum SourcePermissionFlags {
    NONE = 0,
    WRITABLE = 1,
    REMOVABLE = 2,
}

export namespace Backend {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connectable: Gio.SocketConnectable;
        main_context: GLib.MainContext;
        mainContext: GLib.MainContext;
        online: boolean;
        source: EDataServer.Source;
        user_prompter: UserPrompter;
        userPrompter: UserPrompter;
    }
}

export abstract class Backend extends GObject.Object {
    static $gtype: GObject.GType<Backend>;

    constructor(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connectable: Gio.SocketConnectable;
    main_context: GLib.MainContext;
    mainContext: GLib.MainContext;
    online: boolean;
    source: EDataServer.Source;
    user_prompter: UserPrompter;
    userPrompter: UserPrompter;

    // Members

    credentials_required(
        reason: EDataServer.SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error?: GLib.Error | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    credentials_required_finish(result: Gio.AsyncResult): boolean;

    credentials_required_sync(
        reason: EDataServer.SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error?: GLib.Error | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void;

    ensure_source_status_connected(): void;

    get_destination_address(): [boolean, string, number];

    get_online(): boolean;

    get_source(): EDataServer.Source;

    get_user_prompter(): any | null;

    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean;

    prepare_shutdown(): void;

    ref_connectable(): Gio.SocketConnectable | null;

    ref_main_context(): GLib.MainContext;

    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void;

    schedule_credentials_required(
        reason: EDataServer.SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error?: GLib.Error | null,
        cancellable?: Gio.Cancellable | null,
        who_calls?: string | null
    ): void;

    set_connectable(connectable: Gio.SocketConnectable): void;

    set_online(online: boolean): void;

    trust_prompt(
        parameters: EDataServer.NamedParameters,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse;

    trust_prompt_sync(
        parameters: EDataServer.NamedParameters,
        cancellable?: Gio.Cancellable | null
    ): EDataServer.TrustPromptResponse;

    vfunc_authenticate_sync(
        credentials: EDataServer.NamedParameters,
        out_certificate_pem: string,
        out_certificate_errors: Gio.TlsCertificateFlags,
        cancellable?: Gio.Cancellable | null
    ): EDataServer.SourceAuthenticationResult;

    vfunc_get_destination_address(): [boolean, string, number];

    vfunc_prepare_shutdown(): void;
}

export namespace BackendFactory {
    export interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class BackendFactory extends EDataServer.Extension {
    static $gtype: GObject.GType<BackendFactory>;

    constructor(properties?: Partial<BackendFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BackendFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_hash_key(): string;

    get_module_filename(): string;

    new_backend(source: EDataServer.Source): Backend;

    share_subprocess(): boolean;

    vfunc_get_hash_key(): string;

    vfunc_new_backend(source: EDataServer.Source): Backend;
}

export namespace Cache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Cache extends GObject.Object {
    static $gtype: GObject.GType<Cache>;

    constructor(properties?: Partial<Cache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Cache.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'before-put',
        callback: (
            _source: this,
            object: string,
            p0: string,
            p1: string,
            p2: CacheColumnValues,
            p3: boolean,
            p4: Gio.Cancellable | null,
            p5: any | null
        ) => boolean
    ): number;

    connect_after(
        signal: 'before-put',
        callback: (
            _source: this,
            object: string,
            p0: string,
            p1: string,
            p2: CacheColumnValues,
            p3: boolean,
            p4: Gio.Cancellable | null,
            p5: any | null
        ) => boolean
    ): number;

    emit(
        signal: 'before-put',
        object: string,
        p0: string,
        p1: string,
        p2: CacheColumnValues,
        p3: boolean,
        p4: Gio.Cancellable | null,
        p5: any | null
    ): void;

    connect(
        signal: 'before-remove',
        callback: (_source: this, object: string, p0: Gio.Cancellable | null, p1: any | null) => boolean
    ): number;

    connect_after(
        signal: 'before-remove',
        callback: (_source: this, object: string, p0: Gio.Cancellable | null, p1: any | null) => boolean
    ): number;

    emit(signal: 'before-remove', object: string, p0: Gio.Cancellable | null, p1: any | null): void;

    connect(signal: 'revision-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'revision-changed', callback: (_source: this) => void): number;

    emit(signal: 'revision-changed'): void;

    // Members

    change_revision(): void;

    clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean;

    contains(uid: string, deleted_flag: CacheDeletedFlag): boolean;

    copy_missing_to_column_values(
        column_names: string[],
        column_values: string[],
        other_columns: CacheColumnValues
    ): CacheColumnValues;

    dup_key(key: string): string;

    dup_revision(): string;

    erase(): void;

    foreach(
        deleted_flag: CacheDeletedFlag,
        where_clause: string | null,
        func: CacheForeachFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    foreach_update(
        deleted_flag: CacheDeletedFlag,
        where_clause: string | null,
        func: CacheUpdateFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    freeze_revision_change(): void;

    get(uid: string, cancellable?: Gio.Cancellable | null): [string | null, string | null, CacheColumnValues | null];

    get_count(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number;

    get_filename(): string;

    get_key_int(key: string): number;

    get_object_include_deleted(
        uid: string,
        cancellable?: Gio.Cancellable | null
    ): [string | null, string | null, CacheColumnValues | null];

    get_objects(
        deleted_flag: CacheDeletedFlag,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[], string[] | null];

    get_offline_changes(cancellable?: Gio.Cancellable | null): CacheOfflineChange[];

    get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): OfflineState;

    get_sqlitedb(): any | null;

    get_uids(
        deleted_flag: CacheDeletedFlag,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[], string[] | null];

    get_version(): number;

    initialize_sync(
        filename: string,
        other_columns?: CacheColumnInfo[] | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    is_revision_change_frozen(): boolean;

    lock(lock_type: CacheLockType): void;

    put(
        uid: string,
        revision: string | null,
        object: string,
        other_columns: CacheColumnValues | null,
        offline_flag: CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove(uid: string, offline_flag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean;

    remove_all(cancellable?: Gio.Cancellable | null): boolean;

    set_key(key: string, value?: string | null): boolean;

    set_key_int(key: string, value: number): boolean;

    set_offline_state(uid: string, state: OfflineState, cancellable?: Gio.Cancellable | null): boolean;

    set_revision(revision?: string | null): void;

    set_version(version: number): void;

    sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean;

    sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean;

    sqlite_select(sql_stmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean;

    thaw_revision_change(): void;

    unlock(action: CacheUnlockAction): void;

    vfunc_before_put(
        uid: string,
        revision: string,
        object: string,
        other_columns: CacheColumnValues,
        is_replace: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_erase(): void;

    vfunc_put_locked(
        uid: string,
        revision: string,
        object: string,
        other_columns: CacheColumnValues,
        offline_state: OfflineState,
        is_replace: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_revision_changed(): void;

    static error_quark(): GLib.Quark;

    static sqlite_stmt_free(stmt: string): void;
}

export namespace CacheReaper {
    export interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
        [key: string]: any;
    }
}

export class CacheReaper extends EDataServer.Extension implements EDataServer.Extensible {
    static $gtype: GObject.GType<CacheReaper>;

    constructor(properties?: Partial<CacheReaper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CacheReaper.ConstructorProperties>, ...args: any[]): void;

    // Members

    add_private_directory(name: string): void;

    remove_private_directory(name: string): void;

    static type_register(type_module: GObject.TypeModule): void;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace CollectionBackend {
    export interface ConstructorProperties extends Backend.ConstructorProperties {
        [key: string]: any;

        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        server: SourceRegistryServer;
    }
}

export class CollectionBackend extends Backend {
    static $gtype: GObject.GType<CollectionBackend>;

    constructor(properties?: Partial<CollectionBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CollectionBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    server: SourceRegistryServer;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'child-added', callback: (_source: this, child_source: ServerSideSource) => void): number;

    connect_after(signal: 'child-added', callback: (_source: this, child_source: ServerSideSource) => void): number;

    emit(signal: 'child-added', child_source: ServerSideSource): void;

    connect(signal: 'child-removed', callback: (_source: this, child_source: ServerSideSource) => void): number;

    connect_after(signal: 'child-removed', callback: (_source: this, child_source: ServerSideSource) => void): number;

    emit(signal: 'child-removed', child_source: ServerSideSource): void;

    // Members

    authenticate_children(credentials: EDataServer.NamedParameters): void;

    claim_all_resources(): EDataServer.Source[];

    create_resource(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_resource_finish(result: Gio.AsyncResult): boolean;

    create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;

    delete_resource(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_resource_finish(result: Gio.AsyncResult): boolean;

    delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;

    dup_resource_id(child_source: EDataServer.Source): string;

    freeze_populate(): boolean;

    get_cache_dir(): string;

    get_part_enabled(parts: CollectionBackendParts): boolean;

    get_populate_frozen(): boolean;

    is_new_source(source: EDataServer.Source): boolean;

    list_calendar_sources(): EDataServer.Source[];

    list_contacts_sources(): EDataServer.Source[];

    list_mail_sources(): EDataServer.Source[];

    new_child(resource_id: string): EDataServer.Source;

    ref_proxy_resolver(): Gio.ProxyResolver | null;

    ref_server(): SourceRegistryServer;

    schedule_populate(): void;

    thaw_populate(): void;

    vfunc_child_added(child_source: EDataServer.Source): void;

    vfunc_child_removed(child_source: EDataServer.Source): void;

    vfunc_create_resource(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_create_resource_finish(result: Gio.AsyncResult): boolean;

    vfunc_create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_delete_resource(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_delete_resource_finish(result: Gio.AsyncResult): boolean;

    vfunc_delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_dup_resource_id(child_source: EDataServer.Source): string;

    vfunc_populate(): void;
}

export namespace CollectionBackendFactory {
    export interface ConstructorProperties extends BackendFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class CollectionBackendFactory extends BackendFactory {
    static $gtype: GObject.GType<CollectionBackendFactory>;

    constructor(properties?: Partial<CollectionBackendFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CollectionBackendFactory.ConstructorProperties>, ...args: any[]): void;

    // Members

    prepare_mail(
        mail_account_source: EDataServer.Source,
        mail_identity_source: EDataServer.Source,
        mail_transport_source: EDataServer.Source
    ): void;

    vfunc_prepare_mail(
        mail_account_source: EDataServer.Source,
        mail_identity_source: EDataServer.Source,
        mail_transport_source: EDataServer.Source
    ): void;
}

export namespace DBusServer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DBusServer extends GObject.Object implements EDataServer.Extensible {
    static $gtype: GObject.GType<DBusServer>;

    constructor(properties?: Partial<DBusServer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DBusServer.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'bus-acquired', callback: (_source: this, connection: Gio.DBusConnection) => void): number;

    connect_after(signal: 'bus-acquired', callback: (_source: this, connection: Gio.DBusConnection) => void): number;

    emit(signal: 'bus-acquired', connection: Gio.DBusConnection): void;

    connect(signal: 'bus-name-acquired', callback: (_source: this, connection: Gio.DBusConnection) => void): number;

    connect_after(
        signal: 'bus-name-acquired',
        callback: (_source: this, connection: Gio.DBusConnection) => void
    ): number;

    emit(signal: 'bus-name-acquired', connection: Gio.DBusConnection): void;

    connect(signal: 'bus-name-lost', callback: (_source: this, connection: Gio.DBusConnection) => void): number;

    connect_after(signal: 'bus-name-lost', callback: (_source: this, connection: Gio.DBusConnection) => void): number;

    emit(signal: 'bus-name-lost', connection: Gio.DBusConnection): void;

    connect(signal: 'quit-server', callback: (_source: this, code: DBusServerExitCode) => void): number;

    connect_after(signal: 'quit-server', callback: (_source: this, code: DBusServerExitCode) => void): number;

    emit(signal: 'quit-server', code: DBusServerExitCode): void;

    connect(signal: 'run-server', callback: (_source: this) => DBusServerExitCode): number;

    connect_after(signal: 'run-server', callback: (_source: this) => DBusServerExitCode): number;

    emit(signal: 'run-server'): void;

    // Members

    hold(): void;

    load_modules(): void;

    quit(code: DBusServerExitCode): void;

    release(): void;

    run(wait_for_client: boolean): DBusServerExitCode;

    vfunc_bus_acquired(connection: Gio.DBusConnection): void;

    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void;

    vfunc_bus_name_lost(connection: Gio.DBusConnection): void;

    vfunc_quit_server(code: DBusServerExitCode): void;

    vfunc_run_server(): DBusServerExitCode;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace DataFactory {
    export interface ConstructorProperties extends DBusServer.ConstructorProperties {
        [key: string]: any;

        backend_per_process: number;
        backendPerProcess: number;
        registry: EDataServer.SourceRegistry;
        reload_supported: boolean;
        reloadSupported: boolean;
    }
}

export class DataFactory extends DBusServer implements EDataServer.Extensible, Gio.Initable {
    static $gtype: GObject.GType<DataFactory>;

    constructor(properties?: Partial<DataFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataFactory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend_per_process: number;
    backendPerProcess: number;
    registry: EDataServer.SourceRegistry;
    reload_supported: boolean;
    reloadSupported: boolean;

    // Members

    backend_closed(backend: Backend): void;

    backend_closed_by_sender(backend: Backend, sender: string): void;

    construct_path(): string;

    create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend;

    get_backend_per_process(): number;

    get_registry(): EDataServer.SourceRegistry;

    get_reload_supported(): boolean;

    list_opened_backends(): Backend[];

    open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string;

    ref_backend_factory(backend_name: string, extension_name: string): BackendFactory;

    spawn_subprocess_backend(
        invocation: Gio.DBusMethodInvocation,
        uid: string,
        extension_name: string,
        subprocess_path: string
    ): void;

    use_backend_per_process(): boolean;

    vfunc_complete_open(
        invocation: Gio.DBusMethodInvocation,
        object_path: string,
        bus_name: string,
        extension_name: string
    ): void;

    vfunc_create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend;

    vfunc_open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace FileCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        filename: string;
    }
}

export class FileCache extends GObject.Object {
    static $gtype: GObject.GType<FileCache>;

    constructor(properties?: Partial<FileCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;

    // Constructors

    static ['new'](filename: string): FileCache;

    // Members

    add_object(key: string, value: string): boolean;

    clean(): boolean;

    freeze_changes(): void;

    get_filename(): string;

    get_keys(): string[];

    get_object(key: string): string;

    get_objects(): string[];

    remove(): boolean;

    remove_object(key: string): boolean;

    replace_object(key: string, new_value: string): boolean;

    thaw_changes(): void;
}

export namespace ServerSideSource {
    export interface ConstructorProperties extends EDataServer.Source.ConstructorProperties {
        [key: string]: any;

        exported: boolean;
        file: Gio.File;
        oauth2_support: OAuth2Support;
        oauth2Support: OAuth2Support;
        remote_creatable: boolean;
        remoteCreatable: boolean;
        remote_deletable: boolean;
        remoteDeletable: boolean;
        removable: boolean;
        server: SourceRegistryServer;
        writable: boolean;
        write_directory: string;
        writeDirectory: string;
    }
}

export class ServerSideSource extends EDataServer.Source implements Gio.Initable, Gio.ProxyResolver {
    static $gtype: GObject.GType<ServerSideSource>;

    constructor(properties?: Partial<ServerSideSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServerSideSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    exported: boolean;
    file: Gio.File;
    oauth2_support: OAuth2Support;
    oauth2Support: OAuth2Support;
    remote_creatable: boolean;
    remoteCreatable: boolean;
    remote_deletable: boolean;
    remoteDeletable: boolean;
    removable: boolean;
    server: SourceRegistryServer;
    writable: boolean;
    write_directory: string;
    writeDirectory: string;

    // Constructors

    static ['new'](server: SourceRegistryServer, file: Gio.File): ServerSideSource;
    static ['new'](...args: never[]): never;

    static new_memory_only(server: SourceRegistryServer, uid: string): ServerSideSource;

    // Members

    get_exported(): boolean;

    get_file(): Gio.File | null;

    get_node(): GLib.Node | null;

    get_server(): SourceRegistryServer;

    get_write_directory(): string;

    load(cancellable?: Gio.Cancellable | null): boolean;

    ref_oauth2_support(): OAuth2Support | null;

    set_oauth2_support(oauth2_support: OAuth2Support): void;

    set_remote_creatable(remote_creatable: boolean): void;

    set_remote_deletable(remote_deletable: boolean): void;

    set_removable(removable: boolean): void;

    set_writable(writable: boolean): void;

    set_write_directory(write_directory: string): void;

    static get_user_dir(): string;

    static new_user_file(uid: string): Gio.File;

    static uid_from_file(file: Gio.File): string;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    is_supported(): boolean;

    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];

    lookup_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    lookup_finish(result: Gio.AsyncResult): string[];

    vfunc_is_supported(): boolean;

    vfunc_lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];

    vfunc_lookup_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_lookup_finish(result: Gio.AsyncResult): string[];
}

export namespace ServerSideSourceCredentialsProvider {
    export interface ConstructorProperties extends EDataServer.SourceCredentialsProvider.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServerSideSourceCredentialsProvider
    extends EDataServer.SourceCredentialsProvider
    implements EDataServer.Extensible {
    static $gtype: GObject.GType<ServerSideSourceCredentialsProvider>;

    constructor(properties?: Partial<ServerSideSourceCredentialsProvider.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServerSideSourceCredentialsProvider.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](registry: SourceRegistryServer): ServerSideSourceCredentialsProvider;
    static ['new'](...args: never[]): never;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace SourceRegistryServer {
    export interface ConstructorProperties extends DataFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceRegistryServer extends DataFactory implements EDataServer.Extensible, Gio.Initable {
    static $gtype: GObject.GType<SourceRegistryServer>;

    constructor(properties?: Partial<SourceRegistryServer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceRegistryServer.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'files-loaded', callback: (_source: this) => void): number;

    connect_after(signal: 'files-loaded', callback: (_source: this) => void): number;

    emit(signal: 'files-loaded'): void;

    connect(signal: 'load-error', callback: (_source: this, file: Gio.File, error: GLib.Error) => void): number;

    connect_after(signal: 'load-error', callback: (_source: this, file: Gio.File, error: GLib.Error) => void): number;

    emit(signal: 'load-error', file: Gio.File, error: GLib.Error): void;

    connect(signal: 'source-added', callback: (_source: this, source: ServerSideSource) => void): number;

    connect_after(signal: 'source-added', callback: (_source: this, source: ServerSideSource) => void): number;

    emit(signal: 'source-added', source: ServerSideSource): void;

    connect(signal: 'source-removed', callback: (_source: this, source: ServerSideSource) => void): number;

    connect_after(signal: 'source-removed', callback: (_source: this, source: ServerSideSource) => void): number;

    emit(signal: 'source-removed', source: ServerSideSource): void;

    connect(
        signal: 'tweak-key-file',
        callback: (_source: this, key_file: GLib.KeyFile, uid: string) => boolean
    ): number;

    connect_after(
        signal: 'tweak-key-file',
        callback: (_source: this, key_file: GLib.KeyFile, uid: string) => boolean
    ): number;

    emit(signal: 'tweak-key-file', key_file: GLib.KeyFile, uid: string): void;

    // Constructors

    static ['new'](): SourceRegistryServer;

    // Members

    add_source(source: EDataServer.Source): void;

    find_extension(source: EDataServer.Source, extension_name: string): EDataServer.Source | null;

    get_oauth2_services(): EDataServer.OAuth2Services;

    list_sources(extension_name: string): EDataServer.Source[];

    load_directory(path: string, flags: SourcePermissionFlags): boolean;

    load_error(file: Gio.File, error: GLib.Error): void;

    load_file(file: Gio.File, flags: SourcePermissionFlags): EDataServer.Source | null;

    load_resource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags): boolean;

    ref_backend(source: EDataServer.Source): CollectionBackend | null;

    ref_backend_factory(source: EDataServer.Source): CollectionBackendFactory | null;
    ref_backend_factory(...args: never[]): never;

    ref_credentials_provider(): EDataServer.SourceCredentialsProvider;

    ref_source(uid: string): EDataServer.Source | null;

    remove_source(source: EDataServer.Source): void;

    vfunc_files_loaded(): void;

    vfunc_load_error(file: Gio.File, error: GLib.Error): void;

    vfunc_source_added(source: EDataServer.Source): void;

    vfunc_source_removed(source: EDataServer.Source): void;

    vfunc_tweak_key_file(key_file: GLib.KeyFile, uid: string): boolean;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace SubprocessFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        registry: EDataServer.SourceRegistry;
    }
}

export class SubprocessFactory extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<SubprocessFactory>;

    constructor(properties?: Partial<SubprocessFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SubprocessFactory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    registry: EDataServer.SourceRegistry;

    // Members

    call_backends_prepare_shutdown(): void;

    get_backends_list(): Backend[];

    get_registry(): EDataServer.SourceRegistry;

    open_backend(
        connection: Gio.DBusConnection,
        uid: string,
        backend_factory_type_name: string,
        module_filename: string,
        proxy: Gio.DBusInterfaceSkeleton,
        cancellable?: Gio.Cancellable | null
    ): string;

    ref_initable_backend(
        uid: string,
        backend_factory_type_name: string,
        module_filename: string,
        cancellable?: Gio.Cancellable | null
    ): Backend | null;

    set_backend_callbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void;

    vfunc_backend_closed(backend: Backend): void;

    vfunc_backend_created(backend: Backend): void;

    vfunc_open_data(
        backend: Backend,
        connection: Gio.DBusConnection,
        data?: any | null,
        cancellable?: Gio.Cancellable | null
    ): string;

    static construct_path(): string;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace UserPrompter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class UserPrompter extends GObject.Object {
    static $gtype: GObject.GType<UserPrompter>;

    constructor(properties?: Partial<UserPrompter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserPrompter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): UserPrompter;

    // Members

    extension_prompt(
        dialog_name: string,
        in_parameters?: EDataServer.NamedParameters | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    extension_prompt_finish(result: Gio.AsyncResult, out_values?: EDataServer.NamedParameters | null): number;

    extension_prompt_sync(
        dialog_name: string,
        in_parameters?: EDataServer.NamedParameters | null,
        out_values?: EDataServer.NamedParameters | null,
        cancellable?: Gio.Cancellable | null
    ): number;

    prompt(
        type: string | null,
        title: string | null,
        primary_text: string | null,
        secondary_text: string | null,
        use_markup: boolean,
        button_captions?: string[] | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    prompt_finish(result: Gio.AsyncResult): number;

    prompt_sync(
        type: string | null,
        title: string | null,
        primary_text: string | null,
        secondary_text: string | null,
        use_markup: boolean,
        button_captions?: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): number;
}

export namespace UserPrompterServer {
    export interface ConstructorProperties extends DBusServer.ConstructorProperties {
        [key: string]: any;
    }
}

export class UserPrompterServer extends DBusServer implements EDataServer.Extensible {
    static $gtype: GObject.GType<UserPrompterServer>;

    constructor(properties?: Partial<UserPrompterServer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserPrompterServer.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'prompt',
        callback: (
            _source: this,
            prompt_id: number,
            type: string | null,
            title: string | null,
            primary_text: string | null,
            secondary_text: string | null,
            use_markup: boolean,
            button_captions: string[] | null
        ) => void
    ): number;

    connect_after(
        signal: 'prompt',
        callback: (
            _source: this,
            prompt_id: number,
            type: string | null,
            title: string | null,
            primary_text: string | null,
            secondary_text: string | null,
            use_markup: boolean,
            button_captions: string[] | null
        ) => void
    ): number;

    emit(
        signal: 'prompt',
        prompt_id: number,
        type: string | null,
        title: string | null,
        primary_text: string | null,
        secondary_text: string | null,
        use_markup: boolean,
        button_captions: string[] | null
    ): void;

    // Constructors

    static ['new'](): UserPrompterServer;

    // Members

    register(extension: EDataServer.Extension, dialog_name: string): boolean;

    response(prompt_id: number, response: number, extension_values?: EDataServer.NamedParameters | null): void;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace UserPrompterServerExtension {
    export interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class UserPrompterServerExtension extends EDataServer.Extension {
    static $gtype: GObject.GType<UserPrompterServerExtension>;

    constructor(properties?: Partial<UserPrompterServerExtension.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserPrompterServerExtension.ConstructorProperties>, ...args: any[]): void;

    // Members

    prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean;

    response(prompt_id: number, response: number, values?: EDataServer.NamedParameters | null): void;

    vfunc_prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean;
}

export namespace WebDAVCollectionBackend {
    export interface ConstructorProperties extends CollectionBackend.ConstructorProperties {
        [key: string]: any;
    }
}

export class WebDAVCollectionBackend extends CollectionBackend {
    static $gtype: GObject.GType<WebDAVCollectionBackend>;

    constructor(properties?: Partial<WebDAVCollectionBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebDAVCollectionBackend.ConstructorProperties>, ...args: any[]): void;

    // Members

    discover_sync(
        calendar_url: string | null,
        contacts_url: string | null,
        credentials: EDataServer.NamedParameters,
        cancellable?: Gio.Cancellable | null
    ): [EDataServer.SourceAuthenticationResult, string | null, Gio.TlsCertificateFlags | null];

    get_resource_id(source: EDataServer.Source): string | null;

    is_custom_source(source: EDataServer.Source): boolean;

    vfunc_get_resource_id(source: EDataServer.Source): string | null;

    vfunc_is_custom_source(source: EDataServer.Source): boolean;
}

export class BackendFactoryPrivate {
    static $gtype: GObject.GType<BackendFactoryPrivate>;

    constructor(copy: BackendFactoryPrivate);
}

export class BackendPrivate {
    static $gtype: GObject.GType<BackendPrivate>;

    constructor(copy: BackendPrivate);
}

export class CacheColumnInfo {
    static $gtype: GObject.GType<CacheColumnInfo>;

    constructor(name: string, type: string, index_name?: string | null);
    constructor(
        properties?: Partial<{
            name?: string;
            type?: string;
            index_name?: string;
        }>
    );

    constructor(copy: CacheColumnInfo);

    // Fields
    name: string;
    type: string;
    index_name: string;

    // Constructors
    static ['new'](name: string, type: string, index_name?: string | null): CacheColumnInfo;

    // Members
    copy(): CacheColumnInfo;

    static free(info?: any | null): void;
}

export class CacheColumnValues {
    static $gtype: GObject.GType<CacheColumnValues>;

    constructor();
    constructor(copy: CacheColumnValues);

    // Constructors
    static ['new'](): CacheColumnValues;

    // Members
    contains(name: string): boolean;

    copy(): CacheColumnValues;

    free(): void;

    get_size(): number;

    init_iter(iter: GLib.HashTableIter): void;

    lookup(name: string): string;

    put(name: string, value?: string | null): void;

    remove(name: string): boolean;

    remove_all(): void;

    take(name: string, value?: string | null): void;

    take_value(name: string, value?: string | null): void;
}

export class CacheOfflineChange {
    static $gtype: GObject.GType<CacheOfflineChange>;

    constructor(uid: string, revision: string | null, object: string | null, state: OfflineState);
    constructor(copy: CacheOfflineChange);

    // Fields
    uid: string;
    revision: string;
    object: string;
    state: OfflineState;

    // Constructors
    static ['new'](
        uid: string,
        revision: string | null,
        object: string | null,
        state: OfflineState
    ): CacheOfflineChange;

    // Members
    copy(): CacheOfflineChange;

    static free(change?: any | null): void;
}

export class CachePrivate {
    static $gtype: GObject.GType<CachePrivate>;

    constructor(copy: CachePrivate);
}

export class CollectionBackendFactoryPrivate {
    static $gtype: GObject.GType<CollectionBackendFactoryPrivate>;

    constructor(copy: CollectionBackendFactoryPrivate);
}

export class CollectionBackendPrivate {
    static $gtype: GObject.GType<CollectionBackendPrivate>;

    constructor(copy: CollectionBackendPrivate);
}

export class DBusServerPrivate {
    static $gtype: GObject.GType<DBusServerPrivate>;

    constructor(copy: DBusServerPrivate);
}

export class DataFactoryPrivate {
    static $gtype: GObject.GType<DataFactoryPrivate>;

    constructor(copy: DataFactoryPrivate);
}

export class FileCachePrivate {
    static $gtype: GObject.GType<FileCachePrivate>;

    constructor(copy: FileCachePrivate);
}

export class ServerSideSourceCredentialsProviderPrivate {
    static $gtype: GObject.GType<ServerSideSourceCredentialsProviderPrivate>;

    constructor(copy: ServerSideSourceCredentialsProviderPrivate);
}

export class ServerSideSourcePrivate {
    static $gtype: GObject.GType<ServerSideSourcePrivate>;

    constructor(copy: ServerSideSourcePrivate);
}

export class SourceRegistryServerPrivate {
    static $gtype: GObject.GType<SourceRegistryServerPrivate>;

    constructor(copy: SourceRegistryServerPrivate);
}

export class SubprocessFactoryPrivate {
    static $gtype: GObject.GType<SubprocessFactoryPrivate>;

    constructor(copy: SubprocessFactoryPrivate);
}

export class UserPrompterPrivate {
    static $gtype: GObject.GType<UserPrompterPrivate>;

    constructor(copy: UserPrompterPrivate);
}

export class UserPrompterServerExtensionPrivate {
    static $gtype: GObject.GType<UserPrompterServerExtensionPrivate>;

    constructor(copy: UserPrompterServerExtensionPrivate);
}

export class UserPrompterServerPrivate {
    static $gtype: GObject.GType<UserPrompterServerPrivate>;

    constructor(copy: UserPrompterServerPrivate);
}

export class WebDAVCollectionBackendPrivate {
    static $gtype: GObject.GType<WebDAVCollectionBackendPrivate>;

    constructor(copy: WebDAVCollectionBackendPrivate);
}

export interface OAuth2SupportNamespace {
    $gtype: GObject.GType<OAuth2Support>;
    prototype: OAuth2SupportPrototype;
}

export type OAuth2Support = OAuth2SupportPrototype;

export interface OAuth2SupportPrototype extends GObject.Object {
    // Members

    get_access_token(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_access_token_finish(result: Gio.AsyncResult): [boolean, string | null, number | null];

    get_access_token_sync(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, number | null];

    vfunc_get_access_token(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_access_token_finish(result: Gio.AsyncResult): [boolean, string | null, number | null];

    vfunc_get_access_token_sync(
        source: EDataServer.Source,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, number | null];
}

export const OAuth2Support: OAuth2SupportNamespace;
