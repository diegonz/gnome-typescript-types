/**
 * Flatpak 1.0
 *
 * Generated from 1.10.0
 */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function error_quark(): GLib.Quark;

export function get_default_arch(): string;

export function get_supported_arches(): string[];

export function get_system_installations(cancellable?: Gio.Cancellable | null): Installation[];

export function portal_error_quark(): GLib.Quark;

export function transaction_operation_type_to_string(kind: TransactionOperationType): string;

export type ProgressCallback = (status: string, progress: number, estimating: boolean) => void;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static ALREADY_INSTALLED: number;
    static NOT_INSTALLED: number;
    static ONLY_PULLED: number;
    static DIFFERENT_REMOTE: number;
    static ABORTED: number;
    static SKIPPED: number;
    static NEED_NEW_FLATPAK: number;
    static REMOTE_NOT_FOUND: number;
    static RUNTIME_NOT_FOUND: number;
    static DOWNGRADE: number;
    static INVALID_REF: number;
    static INVALID_DATA: number;
    static UNTRUSTED: number;
    static SETUP_FAILED: number;
    static EXPORT_FAILED: number;
    static REMOTE_USED: number;
    static RUNTIME_USED: number;
    static INVALID_NAME: number;
    static OUT_OF_SPACE: number;
    static WRONG_USER: number;
    static NOT_CACHED: number;
    static REF_NOT_FOUND: number;
    static PERMISSION_DENIED: number;
    static AUTHENTICATION_FAILED: number;
    static NOT_AUTHORIZED: number;

    // Members
    static quark(): GLib.Quark;
}

export class PortalError extends GLib.Error {
    static $gtype: GObject.GType<PortalError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PortalError);

    // Properties
    static FAILED: number;
    static INVALID_ARGUMENT: number;
    static NOT_FOUND: number;
    static EXISTS: number;
    static NOT_ALLOWED: number;
    static CANCELLED: number;
    static WINDOW_DESTROYED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace RefKind {
    export const $gtype: GObject.GType<RefKind>;
}

export enum RefKind {
    APP = 0,
    RUNTIME = 1,
}

export namespace RemoteType {
    export const $gtype: GObject.GType<RemoteType>;
}

export enum RemoteType {
    STATIC = 0,
    USB = 1,
    LAN = 2,
}

export namespace StorageType {
    export const $gtype: GObject.GType<StorageType>;
}

export enum StorageType {
    DEFAULT = 0,
    HARD_DISK = 1,
    SDCARD = 2,
    MMC = 3,
    NETWORK = 4,
}

export namespace TransactionOperationType {
    export const $gtype: GObject.GType<TransactionOperationType>;
}

export enum TransactionOperationType {
    INSTALL = 0,
    UPDATE = 1,
    INSTALL_BUNDLE = 2,
    UNINSTALL = 3,
    LAST_TYPE = 4,
}

export namespace TransactionRemoteReason {
    export const $gtype: GObject.GType<TransactionRemoteReason>;
}

export enum TransactionRemoteReason {
    GENERIC_REPO = 0,
    RUNTIME_DEPS = 1,
}

export namespace InstallFlags {
    export const $gtype: GObject.GType<InstallFlags>;
}

export enum InstallFlags {
    NONE = 0,
    NO_STATIC_DELTAS = 1,
    NO_DEPLOY = 4,
    NO_PULL = 8,
    NO_TRIGGERS = 16,
}

export namespace LaunchFlags {
    export const $gtype: GObject.GType<LaunchFlags>;
}

export enum LaunchFlags {
    NONE = 0,
    DO_NOT_REAP = 1,
}

export namespace QueryFlags {
    export const $gtype: GObject.GType<QueryFlags>;
}

export enum QueryFlags {
    NONE = 0,
    ONLY_CACHED = 1,
    ONLY_SIDELOADED = 2,
}

export namespace TransactionErrorDetails {
    export const $gtype: GObject.GType<TransactionErrorDetails>;
}

export enum TransactionErrorDetails {
    FATAL = 1,
}

export namespace TransactionResult {
    export const $gtype: GObject.GType<TransactionResult>;
}

export enum TransactionResult {
    CHANGE = 1,
}

export namespace UninstallFlags {
    export const $gtype: GObject.GType<UninstallFlags>;
}

export enum UninstallFlags {
    NONE = 0,
    NO_PRUNE = 1,
    NO_TRIGGERS = 2,
}

export namespace UpdateFlags {
    export const $gtype: GObject.GType<UpdateFlags>;
}

export enum UpdateFlags {
    NONE = 0,
    NO_DEPLOY = 1,
    NO_PULL = 2,
    NO_STATIC_DELTAS = 4,
    NO_PRUNE = 8,
    NO_TRIGGERS = 16,
}

export namespace BundleRef {
    export interface ConstructorProperties extends Ref.ConstructorProperties {
        [key: string]: any;

        file: Gio.File;
    }
}

export class BundleRef extends Ref {
    static $gtype: GObject.GType<BundleRef>;

    constructor(properties?: Partial<BundleRef.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BundleRef.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file: Gio.File;

    // Constructors

    static ['new'](file: Gio.File): BundleRef;

    // Members

    get_appstream(): GLib.Bytes;

    get_file(): Gio.File;

    get_icon(size: number): GLib.Bytes;

    get_installed_size(): number;

    get_metadata(): GLib.Bytes;

    get_origin(): string;

    get_runtime_repo_url(): string;
}

export namespace Installation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Installation extends GObject.Object {
    static $gtype: GObject.GType<Installation>;

    constructor(properties?: Partial<Installation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Installation.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_for_path(path: Gio.File, user: boolean, cancellable?: Gio.Cancellable | null): Installation;

    static new_system(cancellable?: Gio.Cancellable | null): Installation;

    static new_system_with_id(id?: string | null, cancellable?: Gio.Cancellable | null): Installation;

    static new_user(cancellable?: Gio.Cancellable | null): Installation;

    // Members

    add_remote(remote: Remote, if_needed: boolean, cancellable?: Gio.Cancellable | null): boolean;

    cleanup_local_refs_sync(cancellable?: Gio.Cancellable | null): boolean;

    create_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

    drop_caches(cancellable?: Gio.Cancellable | null): boolean;

    fetch_remote_metadata_sync(remote_name: string, ref: Ref, cancellable?: Gio.Cancellable | null): GLib.Bytes;

    fetch_remote_ref_sync(
        remote_name: string,
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        cancellable?: Gio.Cancellable | null
    ): RemoteRef;

    fetch_remote_ref_sync_full(
        remote_name: string,
        kind: RefKind,
        name: string,
        arch: string | null,
        branch: string | null,
        flags: QueryFlags,
        cancellable?: Gio.Cancellable | null
    ): RemoteRef;

    fetch_remote_size_sync(
        remote_name: string,
        ref: Ref,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number, number];

    get_config(key: string, cancellable?: Gio.Cancellable | null): string;

    get_current_installed_app(name: string, cancellable?: Gio.Cancellable | null): InstalledRef;

    get_default_languages(): string[];

    get_default_locales(): string[];

    get_display_name(): string;

    get_id(): string;

    get_installed_ref(
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        cancellable?: Gio.Cancellable | null
    ): InstalledRef;

    get_is_user(): boolean;

    get_min_free_space_bytes(): [boolean, number];

    get_no_interaction(): boolean;

    get_path(): Gio.File;

    get_priority(): number;

    get_remote_by_name(name: string, cancellable?: Gio.Cancellable | null): Remote;

    get_storage_type(): StorageType;

    install(
        remote_name: string,
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        cancellable?: Gio.Cancellable | null
    ): InstalledRef;

    install_bundle(file: Gio.File, cancellable?: Gio.Cancellable | null): InstalledRef;

    install_full(
        flags: InstallFlags,
        remote_name: string,
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        subpaths?: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): InstalledRef;

    install_ref_file(ref_file_data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): RemoteRef;

    launch(
        name: string,
        arch?: string | null,
        branch?: string | null,
        commit?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    launch_full(
        flags: LaunchFlags,
        name: string,
        arch?: string | null,
        branch?: string | null,
        commit?: string | null,
        instance_out?: Instance | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    list_installed_refs(cancellable?: Gio.Cancellable | null): InstalledRef[];

    list_installed_refs_by_kind(kind: RefKind, cancellable?: Gio.Cancellable | null): InstalledRef[];

    list_installed_refs_for_update(cancellable?: Gio.Cancellable | null): InstalledRef[];

    list_installed_related_refs_sync(
        remote_name: string,
        ref: string,
        cancellable?: Gio.Cancellable | null
    ): RelatedRef[];

    list_pinned_refs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[];

    list_remote_refs_sync(remote_or_uri: string, cancellable?: Gio.Cancellable | null): RemoteRef[];

    list_remote_refs_sync_full(
        remote_or_uri: string,
        flags: QueryFlags,
        cancellable?: Gio.Cancellable | null
    ): RemoteRef[];

    list_remote_related_refs_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[];

    list_remotes(cancellable?: Gio.Cancellable | null): Remote[];

    list_remotes_by_type(types: RemoteType[], cancellable?: Gio.Cancellable | null): Remote[];

    list_unused_refs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[];

    list_unused_refs_with_options(
        arch?: string | null,
        metadata_injection?: GLib.HashTable<any, any> | null,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): InstalledRef[];

    load_app_overrides(app_id: string, cancellable?: Gio.Cancellable | null): string;

    modify_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean;

    prune_local_repo(cancellable?: Gio.Cancellable | null): boolean;

    remove_local_ref_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): boolean;

    remove_remote(name: string, cancellable?: Gio.Cancellable | null): boolean;

    run_triggers(cancellable?: Gio.Cancellable | null): boolean;

    set_config_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;

    set_no_interaction(no_interaction: boolean): void;

    uninstall(
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    uninstall_full(
        flags: UninstallFlags,
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    update(
        flags: UpdateFlags,
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        cancellable?: Gio.Cancellable | null
    ): InstalledRef;

    update_appstream_full_sync(
        remote_name: string,
        arch?: string | null,
        out_changed?: boolean | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    update_appstream_sync(
        remote_name: string,
        arch?: string | null,
        out_changed?: boolean | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    update_full(
        flags: UpdateFlags,
        kind: RefKind,
        name: string,
        arch?: string | null,
        branch?: string | null,
        subpaths?: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): InstalledRef;

    update_remote_sync(name: string, cancellable?: Gio.Cancellable | null): boolean;
}

export namespace InstalledRef {
    export interface ConstructorProperties extends Ref.ConstructorProperties {
        [key: string]: any;

        appdata_content_rating: GLib.HashTable<any, any>;
        appdataContentRating: GLib.HashTable<any, any>;
        appdata_content_rating_type: string;
        appdataContentRatingType: string;
        appdata_license: string;
        appdataLicense: string;
        appdata_name: string;
        appdataName: string;
        appdata_summary: string;
        appdataSummary: string;
        appdata_version: string;
        appdataVersion: string;
        deploy_dir: string;
        deployDir: string;
        end_of_life: string;
        endOfLife: string;
        end_of_life_rebase: string;
        endOfLifeRebase: string;
        installed_size: number;
        installedSize: number;
        is_current: boolean;
        isCurrent: boolean;
        latest_commit: string;
        latestCommit: string;
        origin: string;
        subpaths: string[];
    }
}

export class InstalledRef extends Ref {
    static $gtype: GObject.GType<InstalledRef>;

    constructor(properties?: Partial<InstalledRef.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InstalledRef.ConstructorProperties>, ...args: any[]): void;

    // Properties
    appdata_content_rating: GLib.HashTable<any, any>;
    appdataContentRating: GLib.HashTable<any, any>;
    appdata_content_rating_type: string;
    appdataContentRatingType: string;
    appdata_license: string;
    appdataLicense: string;
    appdata_name: string;
    appdataName: string;
    appdata_summary: string;
    appdataSummary: string;
    appdata_version: string;
    appdataVersion: string;
    deploy_dir: string;
    deployDir: string;
    end_of_life: string;
    endOfLife: string;
    end_of_life_rebase: string;
    endOfLifeRebase: string;
    installed_size: number;
    installedSize: number;
    is_current: boolean;
    isCurrent: boolean;
    latest_commit: string;
    latestCommit: string;
    origin: string;
    subpaths: string[];

    // Members

    get_appdata_content_rating(): GLib.HashTable<string, string> | null;

    get_appdata_content_rating_type(): string | null;

    get_appdata_license(): string;

    get_appdata_name(): string;

    get_appdata_summary(): string;

    get_appdata_version(): string;

    get_deploy_dir(): string;

    get_eol(): string;

    get_eol_rebase(): string;

    get_installed_size(): number;

    get_is_current(): boolean;

    get_latest_commit(): string | null;

    get_origin(): string;

    get_subpaths(): string[];

    load_appdata(cancellable?: Gio.Cancellable | null): GLib.Bytes;

    load_metadata(cancellable?: Gio.Cancellable | null): GLib.Bytes;
}

export namespace Instance {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Instance extends GObject.Object {
    static $gtype: GObject.GType<Instance>;

    constructor(properties?: Partial<Instance.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Instance.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_app(): string | null;

    get_arch(): string;

    get_branch(): string;

    get_child_pid(): number;

    get_commit(): string;

    get_id(): string;

    get_info(): GLib.KeyFile;

    get_pid(): number;

    get_runtime(): string;

    get_runtime_commit(): string;

    is_running(): boolean;

    static get_all(): Instance[];
}

export namespace Ref {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        arch: string;
        branch: string;
        collection_id: string;
        collectionId: string;
        commit: string;
        kind: RefKind;
        name: string;
    }
}

export class Ref extends GObject.Object {
    static $gtype: GObject.GType<Ref>;

    constructor(properties?: Partial<Ref.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Ref.ConstructorProperties>, ...args: any[]): void;

    // Properties
    arch: string;
    branch: string;
    collection_id: string;
    collectionId: string;
    commit: string;
    kind: RefKind;
    name: string;

    // Members

    format_ref(): string;

    format_ref_cached(): string;

    get_arch(): string;

    get_branch(): string;

    get_collection_id(): string;

    get_commit(): string;

    get_kind(): RefKind;

    get_name(): string;

    static parse(ref: string): Ref;
}

export namespace RelatedRef {
    export interface ConstructorProperties extends Ref.ConstructorProperties {
        [key: string]: any;

        should_autoprune: boolean;
        shouldAutoprune: boolean;
        should_delete: boolean;
        shouldDelete: boolean;
        should_download: boolean;
        shouldDownload: boolean;
        subpaths: string[];
    }
}

export class RelatedRef extends Ref {
    static $gtype: GObject.GType<RelatedRef>;

    constructor(properties?: Partial<RelatedRef.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RelatedRef.ConstructorProperties>, ...args: any[]): void;

    // Properties
    should_autoprune: boolean;
    shouldAutoprune: boolean;
    should_delete: boolean;
    shouldDelete: boolean;
    should_download: boolean;
    shouldDownload: boolean;
    subpaths: string[];

    // Members

    get_subpaths(): string[];
}

export namespace Remote {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
        type: RemoteType;
    }
}

export class Remote extends GObject.Object {
    static $gtype: GObject.GType<Remote>;

    constructor(properties?: Partial<Remote.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Remote.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    type: RemoteType;

    // Constructors

    static ['new'](name: string): Remote;

    static new_from_file(name: string, data: GLib.Bytes | Uint8Array): Remote;

    // Members

    get_appstream_dir(arch?: string | null): Gio.File;

    get_appstream_timestamp(arch?: string | null): Gio.File;

    get_collection_id(): string | null;

    get_comment(): string;

    get_default_branch(): string;

    get_description(): string;

    get_disabled(): boolean;

    get_filter(): string;

    get_gpg_verify(): boolean;

    get_homepage(): string;

    get_icon(): string;

    get_main_ref(): string;

    get_name(): string;

    get_nodeps(): boolean;

    get_noenumerate(): boolean;

    get_prio(): number;

    get_remote_type(): RemoteType;

    get_title(): string;

    get_url(): string;

    set_collection_id(collection_id?: string | null): void;

    set_comment(comment: string): void;

    set_default_branch(default_branch: string): void;

    set_description(description: string): void;

    set_disabled(disabled: boolean): void;

    set_filter(filter_path: string): void;

    set_gpg_key(gpg_key: GLib.Bytes | Uint8Array): void;

    set_gpg_verify(gpg_verify: boolean): void;

    set_homepage(homepage: string): void;

    set_icon(icon: string): void;

    set_main_ref(main_ref: string): void;

    set_nodeps(nodeps: boolean): void;

    set_noenumerate(noenumerate: boolean): void;

    set_prio(prio: number): void;

    set_title(title: string): void;

    set_url(url: string): void;
}

export namespace RemoteRef {
    export interface ConstructorProperties extends Ref.ConstructorProperties {
        [key: string]: any;

        download_size: number;
        downloadSize: number;
        end_of_life: string;
        endOfLife: string;
        end_of_life_rebase: string;
        endOfLifeRebase: string;
        installed_size: number;
        installedSize: number;
        metadata: GLib.Bytes;
        remote_name: string;
        remoteName: string;
    }
}

export class RemoteRef extends Ref {
    static $gtype: GObject.GType<RemoteRef>;

    constructor(properties?: Partial<RemoteRef.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RemoteRef.ConstructorProperties>, ...args: any[]): void;

    // Properties
    download_size: number;
    downloadSize: number;
    end_of_life: string;
    endOfLife: string;
    end_of_life_rebase: string;
    endOfLifeRebase: string;
    installed_size: number;
    installedSize: number;
    metadata: GLib.Bytes;
    remote_name: string;
    remoteName: string;

    // Members

    get_download_size(): number;

    get_eol(): string;

    get_eol_rebase(): string;

    get_installed_size(): number;

    get_metadata(): GLib.Bytes | null;

    get_remote_name(): string;
}

export namespace Transaction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        installation: Installation;
    }
}

export class Transaction extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Transaction>;

    constructor(properties?: Partial<Transaction.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Transaction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    installation: Installation;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'add-new-remote',
        callback: (
            _source: this,
            reason: TransactionRemoteReason,
            from_id: string,
            suggested_remote_name: string,
            url: string
        ) => boolean
    ): number;

    connect_after(
        signal: 'add-new-remote',
        callback: (
            _source: this,
            reason: TransactionRemoteReason,
            from_id: string,
            suggested_remote_name: string,
            url: string
        ) => boolean
    ): number;

    emit(
        signal: 'add-new-remote',
        reason: TransactionRemoteReason,
        from_id: string,
        suggested_remote_name: string,
        url: string
    ): void;

    connect(
        signal: 'basic-auth-start',
        callback: (_source: this, remote: string, realm: string, options: GLib.Variant, id: number) => boolean
    ): number;

    connect_after(
        signal: 'basic-auth-start',
        callback: (_source: this, remote: string, realm: string, options: GLib.Variant, id: number) => boolean
    ): number;

    emit(signal: 'basic-auth-start', remote: string, realm: string, options: GLib.Variant, id: number): void;

    connect(
        signal: 'choose-remote-for-ref',
        callback: (_source: this, for_ref: string, runtime_ref: string, remotes: string[]) => number
    ): number;

    connect_after(
        signal: 'choose-remote-for-ref',
        callback: (_source: this, for_ref: string, runtime_ref: string, remotes: string[]) => number
    ): number;

    emit(signal: 'choose-remote-for-ref', for_ref: string, runtime_ref: string, remotes: string[]): void;

    connect(
        signal: 'end-of-lifed',
        callback: (_source: this, ref: string, reason: string, rebase: string) => void
    ): number;

    connect_after(
        signal: 'end-of-lifed',
        callback: (_source: this, ref: string, reason: string, rebase: string) => void
    ): number;

    emit(signal: 'end-of-lifed', ref: string, reason: string, rebase: string): void;

    connect(
        signal: 'end-of-lifed-with-rebase',
        callback: (
            _source: this,
            remote: string,
            ref: string,
            reason: string,
            rebased_to_ref: string,
            previous_ids: string[]
        ) => boolean
    ): number;

    connect_after(
        signal: 'end-of-lifed-with-rebase',
        callback: (
            _source: this,
            remote: string,
            ref: string,
            reason: string,
            rebased_to_ref: string,
            previous_ids: string[]
        ) => boolean
    ): number;

    emit(
        signal: 'end-of-lifed-with-rebase',
        remote: string,
        ref: string,
        reason: string,
        rebased_to_ref: string,
        previous_ids: string[]
    ): void;

    connect(
        signal: 'install-authenticator',
        callback: (_source: this, remote: string, authenticator_ref: string) => void
    ): number;

    connect_after(
        signal: 'install-authenticator',
        callback: (_source: this, remote: string, authenticator_ref: string) => void
    ): number;

    emit(signal: 'install-authenticator', remote: string, authenticator_ref: string): void;

    connect(
        signal: 'new-operation',
        callback: (_source: this, operation: TransactionOperation, progress: TransactionProgress) => void
    ): number;

    connect_after(
        signal: 'new-operation',
        callback: (_source: this, operation: TransactionOperation, progress: TransactionProgress) => void
    ): number;

    emit(signal: 'new-operation', operation: TransactionOperation, progress: TransactionProgress): void;

    connect(
        signal: 'operation-done',
        callback: (
            _source: this,
            operation: TransactionOperation,
            commit: string | null,
            result: TransactionResult
        ) => void
    ): number;

    connect_after(
        signal: 'operation-done',
        callback: (
            _source: this,
            operation: TransactionOperation,
            commit: string | null,
            result: TransactionResult
        ) => void
    ): number;

    emit(
        signal: 'operation-done',
        operation: TransactionOperation,
        commit: string | null,
        result: TransactionResult
    ): void;

    connect(
        signal: 'operation-error',
        callback: (
            _source: this,
            operation: TransactionOperation,
            error: GLib.Error,
            details: TransactionErrorDetails
        ) => boolean
    ): number;

    connect_after(
        signal: 'operation-error',
        callback: (
            _source: this,
            operation: TransactionOperation,
            error: GLib.Error,
            details: TransactionErrorDetails
        ) => boolean
    ): number;

    emit(
        signal: 'operation-error',
        operation: TransactionOperation,
        error: GLib.Error,
        details: TransactionErrorDetails
    ): void;

    connect(signal: 'ready', callback: (_source: this) => boolean): number;

    connect_after(signal: 'ready', callback: (_source: this) => boolean): number;

    emit(signal: 'ready'): void;

    connect(signal: 'ready-pre-auth', callback: (_source: this) => boolean): number;

    connect_after(signal: 'ready-pre-auth', callback: (_source: this) => boolean): number;

    emit(signal: 'ready-pre-auth'): void;

    connect(signal: 'webflow-done', callback: (_source: this, options: GLib.Variant, id: number) => void): number;

    connect_after(signal: 'webflow-done', callback: (_source: this, options: GLib.Variant, id: number) => void): number;

    emit(signal: 'webflow-done', options: GLib.Variant, id: number): void;

    connect(
        signal: 'webflow-start',
        callback: (_source: this, remote: string, url: string, options: GLib.Variant, id: number) => boolean
    ): number;

    connect_after(
        signal: 'webflow-start',
        callback: (_source: this, remote: string, url: string, options: GLib.Variant, id: number) => boolean
    ): number;

    emit(signal: 'webflow-start', remote: string, url: string, options: GLib.Variant, id: number): void;

    // Constructors

    static new_for_installation(installation: Installation, cancellable?: Gio.Cancellable | null): Transaction;

    // Members

    abort_webflow(id: number): void;

    add_default_dependency_sources(): void;

    add_dependency_source(installation: Installation): void;

    add_install(remote: string, ref: string, subpaths?: string[] | null): boolean;

    add_install_bundle(file: Gio.File, gpg_data?: GLib.Bytes | null): boolean;

    add_install_flatpakref(flatpakref_data: GLib.Bytes | Uint8Array): boolean;

    add_rebase(remote: string, ref: string, subpaths?: string | null, previous_ids?: string[] | null): boolean;

    add_sideload_repo(path: string): void;

    add_uninstall(ref: string): boolean;

    add_update(ref: string, subpaths?: string[] | null, commit?: string | null): boolean;

    complete_basic_auth(id: number, user: string, password: string, options: GLib.Variant): void;

    get_current_operation(): TransactionOperation;

    get_include_unused_uninstall_ops(): boolean;

    get_installation(): Installation;

    get_no_deploy(): boolean;

    get_no_pull(): boolean;

    get_operations(): TransactionOperation[];

    get_parent_window(): string;

    is_empty(): boolean;

    run(cancellable?: Gio.Cancellable | null): boolean;

    set_default_arch(arch: string): void;

    set_disable_auto_pin(disable_pin: boolean): void;

    set_disable_dependencies(disable_dependencies: boolean): void;

    set_disable_prune(disable_prune: boolean): void;

    set_disable_related(disable_related: boolean): void;

    set_disable_static_deltas(disable_static_deltas: boolean): void;

    set_force_uninstall(force_uninstall: boolean): void;

    set_include_unused_uninstall_ops(include_unused_uninstall_ops: boolean): void;

    set_no_deploy(no_deploy: boolean): void;

    set_no_interaction(no_interaction: boolean): void;

    set_no_pull(no_pull: boolean): void;

    set_parent_window(parent_window: string): void;

    set_reinstall(reinstall: boolean): void;

    vfunc_add_new_remote(reason: TransactionRemoteReason, from_id: string, remote_name: string, url: string): boolean;

    vfunc_basic_auth_start(remote: string, realm: string, options: GLib.Variant, id: number): boolean;

    vfunc_choose_remote_for_ref(for_ref: string, runtime_ref: string, remotes: string): number;

    vfunc_end_of_lifed(ref: string, reason: string, rebase: string): void;

    vfunc_end_of_lifed_with_rebase(
        remote: string,
        ref: string,
        reason: string,
        rebased_to_ref: string,
        previous_ids: string
    ): boolean;

    vfunc_install_authenticator(remote: string, authenticator_ref: string): void;

    vfunc_new_operation(operation: TransactionOperation, progress: TransactionProgress): void;

    vfunc_operation_done(operation: TransactionOperation, commit: string, details: TransactionResult): void;

    vfunc_operation_error(operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails): boolean;

    vfunc_ready(): boolean;

    vfunc_ready_pre_auth(): boolean;

    vfunc_run(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_webflow_done(options: GLib.Variant, id: number): void;

    vfunc_webflow_start(remote: string, url: string, options: GLib.Variant, id: number): boolean;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace TransactionOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TransactionOperation extends GObject.Object {
    static $gtype: GObject.GType<TransactionOperation>;

    constructor(properties?: Partial<TransactionOperation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TransactionOperation.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bundle_path(): Gio.File;

    get_commit(): string;

    get_download_size(): number;

    get_installed_size(): number;

    get_is_skipped(): boolean;

    get_metadata(): GLib.KeyFile;

    get_old_metadata(): GLib.KeyFile;

    get_operation_type(): TransactionOperationType;

    get_ref(): string;

    get_related_to_ops(): TransactionOperation[] | null;

    get_remote(): string;

    get_requires_authentication(): boolean;

    get_subpaths(): string[];
}

export namespace TransactionProgress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TransactionProgress extends GObject.Object {
    static $gtype: GObject.GType<TransactionProgress>;

    constructor(properties?: Partial<TransactionProgress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TransactionProgress.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Members

    get_bytes_transferred(): number;

    get_is_estimating(): boolean;

    get_progress(): number;

    get_start_time(): number;

    get_status(): string;

    set_update_frequency(update_interval: number): void;
}
