/**
 * OSTree 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gio from './gio';
import * as GObject from './gobject';
import * as GLib from './glib';

export const BUILT_FEATURES: string;
export const COMMIT_GVARIANT_STRING: string;
export const COMMIT_META_KEY_ARCHITECTURE: string;
export const COMMIT_META_KEY_COLLECTION_BINDING: string;
export const COMMIT_META_KEY_ENDOFLIFE: string;
export const COMMIT_META_KEY_ENDOFLIFE_REBASE: string;
export const COMMIT_META_KEY_REF_BINDING: string;
export const COMMIT_META_KEY_SOURCE_TITLE: string;
export const COMMIT_META_KEY_VERSION: string;
export const DIRMETA_GVARIANT_STRING: string;
export const FILEMETA_GVARIANT_STRING: string;
export const MAX_METADATA_SIZE: number;
export const MAX_METADATA_WARN_SIZE: number;
export const META_KEY_DEPLOY_COLLECTION_ID: string;
export const ORIGIN_TRANSIENT_GROUP: string;
export const RELEASE_VERSION: number;
export const REPO_METADATA_REF: string;
export const SHA256_DIGEST_LEN: number;
export const SHA256_STRING_LEN: number;
export const SIGN_NAME_ED25519: string;
export const SUMMARY_GVARIANT_STRING: string;
export const SUMMARY_SIG_GVARIANT_STRING: string;
export const TIMESTAMP: number;
export const TREE_GVARIANT_STRING: string;
export const VERSION: number;
export const VERSION_S: string;
export const YEAR_VERSION: number;

export function break_hardlink(
    dfd: number,
    path: string,
    skip_xattrs: boolean,
    cancellable?: Gio.Cancellable | null
): boolean;

export function check_version(required_year: number, required_release: number): boolean;

export function checksum_b64_from_bytes(csum: Uint8Array | string): string;

export function checksum_b64_to_bytes(checksum: string): Uint8Array;

export function checksum_bytes_peek(bytes: GLib.Variant): Uint8Array;

export function checksum_bytes_peek_validate(bytes: GLib.Variant): Uint8Array;

export function checksum_file(
    f: Gio.File,
    objtype: ObjectType,
    cancellable?: Gio.Cancellable | null
): [boolean, Uint8Array];

export function checksum_file_async(
    f: Gio.File,
    objtype: ObjectType,
    io_priority: number,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gio.File> | null
): void;

export function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [boolean, Uint8Array];

export function checksum_file_at(
    dfd: number,
    path: string,
    stbuf: any | null,
    objtype: ObjectType,
    flags: ChecksumFlags,
    out_checksum: string,
    cancellable?: Gio.Cancellable | null
): boolean;

export function checksum_file_from_input(
    file_info: Gio.FileInfo,
    xattrs: GLib.Variant | null,
    _in: Gio.InputStream | null,
    objtype: ObjectType,
    cancellable?: Gio.Cancellable | null
): [boolean, Uint8Array];

export function checksum_from_bytes(csum: Uint8Array | string): string;

export function checksum_from_bytes_v(csum_v: GLib.Variant): string;

export function checksum_inplace_to_bytes(checksum: string, buf: number): void;

export function checksum_to_bytes(checksum: string): Uint8Array;

export function checksum_to_bytes_v(checksum: string): GLib.Variant;

export function cmd__private__(): CmdPrivateVTable;

export function cmp_checksum_bytes(a: number, b: number): number;

export function collection_ref_dupv(refs: CollectionRef[]): CollectionRef[];

export function collection_ref_equal(ref1: any, ref2: any): boolean;

export function collection_ref_freev(refs: CollectionRef[]): void;

export function collection_ref_hash(ref: any): number;

export function commit_get_content_checksum(commit_variant: GLib.Variant): string | null;

export function commit_get_object_sizes(commit_variant: GLib.Variant): [boolean, CommitSizesEntry[] | null];

export function commit_get_parent(commit_variant: GLib.Variant): string;

export function commit_get_timestamp(commit_variant: GLib.Variant): number;

export function content_file_parse(
    compressed: boolean,
    content_path: Gio.File,
    trusted: boolean,
    cancellable?: Gio.Cancellable | null
): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];

export function content_file_parse_at(
    compressed: boolean,
    parent_dfd: number,
    path: string,
    trusted: boolean,
    cancellable?: Gio.Cancellable | null
): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];

export function content_stream_parse(
    compressed: boolean,
    input: Gio.InputStream,
    input_length: number,
    trusted: boolean,
    cancellable?: Gio.Cancellable | null
): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];

export function create_directory_metadata(dir_info: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant;

export function diff_dirs(
    flags: DiffFlags,
    a: Gio.File,
    b: Gio.File,
    modified: DiffItem[],
    removed: Gio.File[],
    added: Gio.File[],
    cancellable?: Gio.Cancellable | null
): boolean;

export function diff_dirs_with_options(
    flags: DiffFlags,
    a: Gio.File,
    b: Gio.File,
    modified: DiffItem[],
    removed: Gio.File[],
    added: Gio.File[],
    options?: DiffDirsOptions | null,
    cancellable?: Gio.Cancellable | null
): boolean;

export function diff_print(
    a: Gio.File,
    b: Gio.File,
    modified: DiffItem[],
    removed: Gio.File[],
    added: Gio.File[]
): void;

export function gpg_error_quark(): GLib.Quark;

export function hash_object_name(a?: any | null): number;

export function kernel_args_cleanup(loc?: any | null): void;

export function metadata_variant_type(objtype: ObjectType): GLib.VariantType;

export function object_from_string(str: string): [string, ObjectType];

export function object_name_deserialize(variant: GLib.Variant): [string, ObjectType];

export function object_name_serialize(checksum: string, objtype: ObjectType): GLib.Variant;

export function object_to_string(checksum: string, objtype: ObjectType): string;

export function object_type_from_string(str: string): ObjectType;

export function object_type_to_string(objtype: ObjectType): string;

export function parse_refspec(refspec: string): [boolean, string | null, string | null];

export function raw_file_to_archive_z2_stream(
    input: Gio.InputStream,
    file_info: Gio.FileInfo,
    xattrs: GLib.Variant | null,
    cancellable?: Gio.Cancellable | null
): [boolean, Gio.InputStream];

export function raw_file_to_archive_z2_stream_with_options(
    input: Gio.InputStream,
    file_info: Gio.FileInfo,
    xattrs: GLib.Variant | null,
    options: GLib.Variant | null,
    cancellable?: Gio.Cancellable | null
): [boolean, Gio.InputStream];

export function raw_file_to_content_stream(
    input: Gio.InputStream,
    file_info: Gio.FileInfo,
    xattrs: GLib.Variant | null,
    cancellable?: Gio.Cancellable | null
): [boolean, Gio.InputStream, number];

export function repo_commit_traverse_iter_cleanup(p?: any | null): void;

export function repo_finder_resolve_all_async(
    finders: RepoFinder[],
    refs: CollectionRef[],
    parent_repo: Repo,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<RepoFinder[]> | null
): void;

export function repo_finder_resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];

export function repo_finder_result_freev(results: RepoFinderResult[]): void;

export function sign_get_all(): Sign[];

export function sign_get_by_name(name: string): Sign;

export function validate_checksum_string(sha256: string): boolean;

export function validate_collection_id(collection_id?: string | null): boolean;

export function validate_remote_name(remote_name: string): boolean;

export function validate_rev(rev: string): boolean;

export function validate_structureof_checksum_string(checksum: string): boolean;

export function validate_structureof_commit(commit: GLib.Variant): boolean;

export function validate_structureof_csum_v(checksum: GLib.Variant): boolean;

export function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean;

export function validate_structureof_dirtree(dirtree: GLib.Variant): boolean;

export function validate_structureof_file_mode(mode: number): boolean;

export function validate_structureof_objtype(objtype: number): boolean;

export type RepoCheckoutFilter = (repo: Repo, path: string, stbuf?: any | null) => RepoCheckoutFilterResult;
export type RepoCommitFilter = (repo: Repo, path: string, file_info: Gio.FileInfo) => RepoCommitFilterResult;
export type RepoCommitModifierXattrCallback = (repo: Repo, path: string, file_info: Gio.FileInfo) => GLib.Variant;
export type RepoImportArchiveTranslatePathname = (repo: Repo, stbuf: any | null, src_path: string) => string;

export namespace DeploymentUnlockedState {
    export const $gtype: GObject.GType<DeploymentUnlockedState>;
}

export enum DeploymentUnlockedState {
    NONE = 0,
    DEVELOPMENT = 1,
    HOTFIX = 2,
    TRANSIENT = 3,
}

export class GpgError extends GLib.Error {
    static $gtype: GObject.GType<GpgError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GpgError);

    // Properties
    static NO_SIGNATURE: number;
    static INVALID_SIGNATURE: number;
    static MISSING_KEY: number;
    static EXPIRED_SIGNATURE: number;
    static EXPIRED_KEY: number;
    static REVOKED_KEY: number;
}

export namespace GpgSignatureAttr {
    export const $gtype: GObject.GType<GpgSignatureAttr>;
}

export enum GpgSignatureAttr {
    VALID = 0,
    SIG_EXPIRED = 1,
    KEY_EXPIRED = 2,
    KEY_REVOKED = 3,
    KEY_MISSING = 4,
    FINGERPRINT = 5,
    TIMESTAMP = 6,
    EXP_TIMESTAMP = 7,
    PUBKEY_ALGO_NAME = 8,
    HASH_ALGO_NAME = 9,
    USER_NAME = 10,
    USER_EMAIL = 11,
    FINGERPRINT_PRIMARY = 12,
    KEY_EXP_TIMESTAMP = 13,
    KEY_EXP_TIMESTAMP_PRIMARY = 14,
}

export namespace ObjectType {
    export const $gtype: GObject.GType<ObjectType>;
}

export enum ObjectType {
    FILE = 1,
    DIR_TREE = 2,
    DIR_META = 3,
    COMMIT = 4,
    TOMBSTONE_COMMIT = 5,
    COMMIT_META = 6,
    PAYLOAD_LINK = 7,
}

export namespace RepoCheckoutFilterResult {
    export const $gtype: GObject.GType<RepoCheckoutFilterResult>;
}

export enum RepoCheckoutFilterResult {
    ALLOW = 0,
    SKIP = 1,
}

export namespace RepoCheckoutMode {
    export const $gtype: GObject.GType<RepoCheckoutMode>;
}

export enum RepoCheckoutMode {
    NONE = 0,
    USER = 1,
}

export namespace RepoCheckoutOverwriteMode {
    export const $gtype: GObject.GType<RepoCheckoutOverwriteMode>;
}

export enum RepoCheckoutOverwriteMode {
    NONE = 0,
    UNION_FILES = 1,
    ADD_FILES = 2,
    UNION_IDENTICAL = 3,
}

export namespace RepoCommitFilterResult {
    export const $gtype: GObject.GType<RepoCommitFilterResult>;
}

export enum RepoCommitFilterResult {
    ALLOW = 0,
    SKIP = 1,
}

export namespace RepoCommitIterResult {
    export const $gtype: GObject.GType<RepoCommitIterResult>;
}

export enum RepoCommitIterResult {
    ERROR = 0,
    END = 1,
    FILE = 2,
    DIR = 3,
}

export namespace RepoMode {
    export const $gtype: GObject.GType<RepoMode>;
}

export enum RepoMode {
    BARE = 0,
    ARCHIVE = 1,
    ARCHIVE_Z2 = 1,
    BARE_USER = 2,
    BARE_USER_ONLY = 3,
}

export namespace RepoRemoteChange {
    export const $gtype: GObject.GType<RepoRemoteChange>;
}

export enum RepoRemoteChange {
    ADD = 0,
    ADD_IF_NOT_EXISTS = 1,
    DELETE = 2,
    DELETE_IF_EXISTS = 3,
    REPLACE = 4,
}

export namespace StaticDeltaGenerateOpt {
    export const $gtype: GObject.GType<StaticDeltaGenerateOpt>;
}

export enum StaticDeltaGenerateOpt {
    LOWLATENCY = 0,
    MAJOR = 1,
}

export namespace StaticDeltaIndexFlags {
    export const $gtype: GObject.GType<StaticDeltaIndexFlags>;
}

export enum StaticDeltaIndexFlags {
    STATIC_DELTA_INDEX_FLAGS_NONE = 0,
}

export namespace ChecksumFlags {
    export const $gtype: GObject.GType<ChecksumFlags>;
}

export enum ChecksumFlags {
    NONE = 0,
    IGNORE_XATTRS = 1,
}

export namespace DiffFlags {
    export const $gtype: GObject.GType<DiffFlags>;
}

export enum DiffFlags {
    NONE = 0,
    IGNORE_XATTRS = 1,
}

export namespace GpgSignatureFormatFlags {
    export const $gtype: GObject.GType<GpgSignatureFormatFlags>;
}

export enum GpgSignatureFormatFlags {
    GPG_SIGNATURE_FORMAT_DEFAULT = 0,
}

export namespace RepoCommitModifierFlags {
    export const $gtype: GObject.GType<RepoCommitModifierFlags>;
}

export enum RepoCommitModifierFlags {
    NONE = 0,
    SKIP_XATTRS = 1,
    GENERATE_SIZES = 2,
    CANONICAL_PERMISSIONS = 4,
    ERROR_ON_UNLABELED = 8,
    CONSUME = 16,
    DEVINO_CANONICAL = 32,
}

export namespace RepoCommitState {
    export const $gtype: GObject.GType<RepoCommitState>;
}

export enum RepoCommitState {
    NORMAL = 0,
    PARTIAL = 1,
    FSCK_PARTIAL = 2,
}

export namespace RepoCommitTraverseFlags {
    export const $gtype: GObject.GType<RepoCommitTraverseFlags>;
}

export enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE = 1,
}

export namespace RepoListObjectsFlags {
    export const $gtype: GObject.GType<RepoListObjectsFlags>;
}

export enum RepoListObjectsFlags {
    LOOSE = 1,
    PACKED = 2,
    ALL = 4,
    NO_PARENTS = 8,
}

export namespace RepoListRefsExtFlags {
    export const $gtype: GObject.GType<RepoListRefsExtFlags>;
}

export enum RepoListRefsExtFlags {
    NONE = 0,
    ALIASES = 1,
    EXCLUDE_REMOTES = 2,
    EXCLUDE_MIRRORS = 4,
}

export namespace RepoPruneFlags {
    export const $gtype: GObject.GType<RepoPruneFlags>;
}

export enum RepoPruneFlags {
    NONE = 0,
    NO_PRUNE = 1,
    REFS_ONLY = 2,
}

export namespace RepoPullFlags {
    export const $gtype: GObject.GType<RepoPullFlags>;
}

export enum RepoPullFlags {
    NONE = 0,
    MIRROR = 1,
    COMMIT_ONLY = 2,
    UNTRUSTED = 4,
    BAREUSERONLY_FILES = 8,
    TRUSTED_HTTP = 16,
}

export namespace RepoResolveRevExtFlags {
    export const $gtype: GObject.GType<RepoResolveRevExtFlags>;
}

export enum RepoResolveRevExtFlags {
    NONE = 0,
    LOCAL_ONLY = 1,
}

export namespace SePolicyRestoreconFlags {
    export const $gtype: GObject.GType<SePolicyRestoreconFlags>;
}

export enum SePolicyRestoreconFlags {
    NONE = 0,
    ALLOW_NOLABEL = 1,
    KEEP_EXISTING = 2,
}

export namespace SysrootSimpleWriteDeploymentFlags {
    export const $gtype: GObject.GType<SysrootSimpleWriteDeploymentFlags>;
}

export enum SysrootSimpleWriteDeploymentFlags {
    NONE = 0,
    RETAIN = 1,
    NOT_DEFAULT = 2,
    NO_CLEAN = 4,
    RETAIN_PENDING = 8,
    RETAIN_ROLLBACK = 16,
}

export namespace SysrootUpgraderFlags {
    export const $gtype: GObject.GType<SysrootUpgraderFlags>;
}

export enum SysrootUpgraderFlags {
    IGNORE_UNCONFIGURED = 2,
}

export namespace SysrootUpgraderPullFlags {
    export const $gtype: GObject.GType<SysrootUpgraderPullFlags>;
}

export enum SysrootUpgraderPullFlags {
    NONE = 0,
    ALLOW_OLDER = 1,
    SYNTHETIC = 2,
}

export namespace AsyncProgress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AsyncProgress extends GObject.Object {
    static $gtype: GObject.GType<AsyncProgress>;

    constructor(properties?: Partial<AsyncProgress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AsyncProgress.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): AsyncProgress;

    static new_and_connect(changed?: any | null, user_data?: any | null): AsyncProgress;

    // Members

    copy_state(dest: AsyncProgress): void;

    finish(): void;

    get_status(): string | null;

    get_uint(key: string): number;

    get_uint64(key: string): number;

    get_variant(key: string): GLib.Variant | null;

    set_status(status?: string | null): void;

    set_uint(key: string, value: number): void;

    set_uint64(key: string, value: number): void;

    set_variant(key: string, value: GLib.Variant): void;

    vfunc_changed(): void;
}

export namespace BootconfigParser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BootconfigParser extends GObject.Object {
    static $gtype: GObject.GType<BootconfigParser>;

    constructor(properties?: Partial<BootconfigParser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BootconfigParser.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): BootconfigParser;

    // Members

    clone(): BootconfigParser;

    get(key: string): string;

    get_overlay_initrds(): string[] | null;

    parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    parse_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;

    set(key: string, value: string): void;
    set(...args: never[]): never;

    set_overlay_initrds(initrds?: string[] | null): void;

    write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    write_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;
}

export namespace ChecksumInputStream {
    export interface ConstructorProperties extends Gio.FilterInputStream.ConstructorProperties {
        [key: string]: any;

        checksum: any;
    }
}

export class ChecksumInputStream extends Gio.FilterInputStream {
    static $gtype: GObject.GType<ChecksumInputStream>;

    constructor(properties?: Partial<ChecksumInputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChecksumInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    checksum: any;

    // Constructors

    static ['new'](stream: Gio.InputStream, checksum: GLib.Checksum): ChecksumInputStream;
}

export namespace Deployment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Deployment extends GObject.Object {
    static $gtype: GObject.GType<Deployment>;

    constructor(properties?: Partial<Deployment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Deployment.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](
        index: number,
        osname: string,
        csum: string,
        deployserial: number,
        bootcsum: string | null,
        bootserial: number
    ): Deployment;

    // Members

    clone(): Deployment;

    equal(bp: Deployment): boolean;

    get_bootconfig(): BootconfigParser;

    get_bootcsum(): string;

    get_bootserial(): number;

    get_csum(): string;

    get_deployserial(): number;

    get_index(): number;

    get_origin(): GLib.KeyFile;

    get_origin_relpath(): string;

    get_osname(): string;

    get_unlocked(): DeploymentUnlockedState;

    hash(): number;

    is_pinned(): boolean;

    is_staged(): boolean;

    set_bootconfig(bootconfig?: BootconfigParser | null): void;

    set_bootserial(index: number): void;

    set_index(index: number): void;

    set_origin(origin?: GLib.KeyFile | null): void;

    static origin_remove_transient_state(origin: GLib.KeyFile): void;

    static unlocked_state_to_string(state: DeploymentUnlockedState): string;
}

export namespace GpgVerifyResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class GpgVerifyResult extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<GpgVerifyResult>;

    constructor(properties?: Partial<GpgVerifyResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GpgVerifyResult.ConstructorProperties>, ...args: any[]): void;

    // Members

    count_all(): number;

    count_valid(): number;

    describe(
        signature_index: number,
        output_buffer: GLib.String,
        line_prefix: string | null,
        flags: GpgSignatureFormatFlags
    ): void;

    get(signature_index: number, attrs: GpgSignatureAttr[]): GLib.Variant;

    get_all(signature_index: number): GLib.Variant;

    lookup(key_id: string): [boolean, number];

    require_valid_signature(): boolean;

    static describe_variant(
        variant: GLib.Variant,
        output_buffer: GLib.String,
        line_prefix: string | null,
        flags: GpgSignatureFormatFlags
    ): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace MutableTree {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MutableTree extends GObject.Object {
    static $gtype: GObject.GType<MutableTree>;

    constructor(properties?: Partial<MutableTree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MutableTree.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): MutableTree;

    static new_from_checksum(repo: Repo, contents_checksum: string, metadata_checksum: string): MutableTree;

    // Members

    check_error(): boolean;

    ensure_dir(name: string): [boolean, MutableTree];

    ensure_parent_dirs(split_path: string[], metadata_checksum: string): [boolean, MutableTree];

    fill_empty_from_dirtree(repo: Repo, contents_checksum: string, metadata_checksum: string): boolean;

    get_contents_checksum(): string;

    get_files(): GLib.HashTable<string, string>;

    get_metadata_checksum(): string;

    get_subdirs(): GLib.HashTable<string, MutableTree>;

    lookup(name: string): [boolean, string, MutableTree];

    remove(name: string, allow_noent: boolean): boolean;

    replace_file(name: string, checksum: string): boolean;

    set_contents_checksum(checksum: string): void;

    set_metadata_checksum(checksum: string): void;

    walk(split_path: string[], start: number): [boolean, MutableTree];
}

export namespace Repo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        path: Gio.File;
        remotes_config_dir: string;
        remotesConfigDir: string;
        sysroot_path: Gio.File;
        sysrootPath: Gio.File;
    }
}

export class Repo extends GObject.Object {
    static $gtype: GObject.GType<Repo>;

    constructor(properties?: Partial<Repo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Repo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: Gio.File;
    remotes_config_dir: string;
    remotesConfigDir: string;
    sysroot_path: Gio.File;
    sysrootPath: Gio.File;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'gpg-verify-result',
        callback: (_source: this, checksum: string, result: GpgVerifyResult) => void
    ): number;

    connect_after(
        signal: 'gpg-verify-result',
        callback: (_source: this, checksum: string, result: GpgVerifyResult) => void
    ): number;

    emit(signal: 'gpg-verify-result', checksum: string, result: GpgVerifyResult): void;

    // Constructors

    static ['new'](path: Gio.File): Repo;

    static new_default(): Repo;

    static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo;

    // Members

    abort_transaction(cancellable?: Gio.Cancellable | null): boolean;

    add_gpg_signature_summary(key_id: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    append_gpg_signature(
        commit_checksum: string,
        signature_bytes: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    checkout_at(
        options: RepoCheckoutAtOptions | null,
        destination_dfd: number,
        destination_path: string,
        commit: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    checkout_gc(cancellable?: Gio.Cancellable | null): boolean;

    checkout_tree(
        mode: RepoCheckoutMode,
        overwrite_mode: RepoCheckoutOverwriteMode,
        destination: Gio.File,
        source: RepoFile,
        source_info: Gio.FileInfo,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    commit_transaction(cancellable?: Gio.Cancellable | null): [boolean, RepoTransactionStats | null];

    copy_config(): GLib.KeyFile;

    create(mode: RepoMode, cancellable?: Gio.Cancellable | null): boolean;

    delete_object(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean;

    equal(b: Repo): boolean;

    find_remotes_async(
        refs: CollectionRef[],
        options: GLib.Variant | null,
        finders: RepoFinder[],
        progress?: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    find_remotes_finish(result: Gio.AsyncResult): RepoFinderResult[];

    fsck_object(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean;

    get_bootloader(): string;

    get_collection_id(): string | null;

    get_config(): GLib.KeyFile;

    get_default_repo_finders(): string[];

    get_dfd(): number;

    get_disable_fsync(): boolean;

    get_min_free_space_bytes(): [boolean, number];

    get_mode(): RepoMode;

    get_parent(): Repo;

    get_path(): Gio.File;

    get_remote_boolean_option(remote_name: string, option_name: string, default_value: boolean): [boolean, boolean];

    get_remote_list_option(remote_name: string, option_name: string): [boolean, string[]];

    get_remote_option(remote_name: string, option_name: string, default_value: string | null): [boolean, string];

    gpg_sign_data(
        data: GLib.Bytes | Uint8Array,
        old_signatures: GLib.Bytes | Uint8Array,
        key_id: string[],
        homedir: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Bytes];

    gpg_verify_data(
        remote_name: string | null,
        data: GLib.Bytes | Uint8Array,
        signatures: GLib.Bytes | Uint8Array,
        keyringdir?: Gio.File | null,
        extra_keyring?: Gio.File | null,
        cancellable?: Gio.Cancellable | null
    ): GpgVerifyResult;

    has_object(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [boolean, boolean];

    hash(): number;

    import_object_from(
        source: Repo,
        objtype: ObjectType,
        checksum: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    import_object_from_with_trust(
        source: Repo,
        objtype: ObjectType,
        checksum: string,
        trusted: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    is_system(): boolean;

    is_writable(): boolean;

    list_collection_refs(
        match_collection_id: string | null,
        flags: RepoListRefsExtFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<CollectionRef, string>];

    list_commit_objects_starting_with(
        start: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<GLib.Variant, GLib.Variant>];

    list_objects(
        flags: RepoListObjectsFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<GLib.Variant, GLib.Variant>];

    list_refs(
        refspec_prefix: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<string, string>];

    list_refs_ext(
        refspec_prefix: string | null,
        flags: RepoListRefsExtFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<string, string>];

    list_static_delta_indexes(cancellable?: Gio.Cancellable | null): [boolean, string[]];

    list_static_delta_names(cancellable?: Gio.Cancellable | null): [boolean, string[]];

    load_commit(checksum: string): [boolean, GLib.Variant | null, RepoCommitState | null];

    load_file(
        checksum: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Gio.InputStream | null, Gio.FileInfo | null, GLib.Variant | null];

    load_object_stream(
        objtype: ObjectType,
        checksum: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Gio.InputStream, number];

    load_variant(objtype: ObjectType, sha256: string): [boolean, GLib.Variant];

    load_variant_if_exists(objtype: ObjectType, sha256: string): [boolean, GLib.Variant];

    mark_commit_partial(checksum: string, is_partial: boolean): boolean;

    mark_commit_partial_reason(checksum: string, is_partial: boolean, in_state: RepoCommitState): boolean;

    open(cancellable?: Gio.Cancellable | null): boolean;

    prepare_transaction(cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    prune(
        flags: RepoPruneFlags,
        depth: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number, number, number];

    prune_from_reachable(
        options: RepoPruneOptions,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number, number, number];

    prune_static_deltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    pull(
        remote_name: string,
        refs_to_fetch: string[] | null,
        flags: RepoPullFlags,
        progress?: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    pull_from_remotes_async(
        results: RepoFinderResult[],
        options?: GLib.Variant | null,
        progress?: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    pull_from_remotes_finish(result: Gio.AsyncResult): boolean;

    pull_one_dir(
        remote_name: string,
        dir_to_pull: string,
        refs_to_fetch: string[] | null,
        flags: RepoPullFlags,
        progress?: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    pull_with_options(
        remote_name_or_baseurl: string,
        options: GLib.Variant,
        progress?: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    query_object_storage_size(
        objtype: ObjectType,
        sha256: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number];

    read_commit(ref: string, cancellable?: Gio.Cancellable | null): [boolean, Gio.File, string];

    read_commit_detached_metadata(checksum: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];

    regenerate_summary(additional_metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;

    reload_config(cancellable?: Gio.Cancellable | null): boolean;

    remote_add(name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;

    remote_change(
        sysroot: Gio.File | null,
        changeop: RepoRemoteChange,
        name: string,
        url: string,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remote_delete(name: string, cancellable?: Gio.Cancellable | null): boolean;

    remote_fetch_summary(
        name: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Bytes | null, GLib.Bytes | null];

    remote_fetch_summary_with_options(
        name: string,
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Bytes | null, GLib.Bytes | null];

    remote_get_gpg_verify(name: string): [boolean, boolean | null];

    remote_get_gpg_verify_summary(name: string): [boolean, boolean | null];

    remote_get_url(name: string): [boolean, string | null];

    remote_gpg_import(
        name: string,
        source_stream?: Gio.InputStream | null,
        key_ids?: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    remote_list(): string[];

    remote_list_collection_refs(
        remote_name: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<CollectionRef, string>];

    remote_list_refs(
        remote_name: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<string, string>];

    resolve_collection_ref(
        ref: CollectionRef,
        allow_noent: boolean,
        flags: RepoResolveRevExtFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    resolve_keyring_for_collection(collection_id: string, cancellable?: Gio.Cancellable | null): Remote;

    resolve_rev(refspec: string, allow_noent: boolean): [boolean, string];

    resolve_rev_ext(refspec: string, allow_noent: boolean, flags: RepoResolveRevExtFlags): [boolean, string];

    scan_hardlinks(cancellable?: Gio.Cancellable | null): boolean;

    set_alias_ref_immediate(
        remote: string | null,
        ref: string,
        target?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_cache_dir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;

    set_collection_id(collection_id?: string | null): boolean;

    set_collection_ref_immediate(
        ref: CollectionRef,
        checksum?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_disable_fsync(disable_fsync: boolean): void;

    set_ref_immediate(
        remote: string | null,
        ref: string,
        checksum?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    sign_commit(
        commit_checksum: string,
        key_id: string,
        homedir?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    sign_delta(
        from_commit: string,
        to_commit: string,
        key_id: string,
        homedir: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static_delta_execute_offline(
        dir_or_file: Gio.File,
        skip_validation: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static_delta_execute_offline_with_signature(
        dir_or_file: Gio.File,
        sign: Sign,
        skip_validation: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static_delta_generate(
        opt: StaticDeltaGenerateOpt,
        from: string | null,
        to: string,
        metadata?: GLib.Variant | null,
        params?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static_delta_reindex(
        flags: StaticDeltaIndexFlags,
        opt_to_commit: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static_delta_verify_signature(delta_id: string, sign: Sign): [boolean, string | null];

    transaction_set_collection_ref(ref: CollectionRef, checksum?: string | null): void;

    transaction_set_ref(remote: string | null, ref: string, checksum?: string | null): void;

    transaction_set_refspec(refspec: string, checksum?: string | null): void;

    traverse_commit(
        commit_checksum: string,
        maxdepth: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<GLib.Variant, GLib.Variant>];

    traverse_reachable_refs(
        depth: number,
        reachable: GLib.HashTable<GLib.Variant, GLib.Variant>,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    verify_commit(
        commit_checksum: string,
        keyringdir?: Gio.File | null,
        extra_keyring?: Gio.File | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    verify_commit_ext(
        commit_checksum: string,
        keyringdir?: Gio.File | null,
        extra_keyring?: Gio.File | null,
        cancellable?: Gio.Cancellable | null
    ): GpgVerifyResult;

    verify_commit_for_remote(
        commit_checksum: string,
        remote_name: string,
        cancellable?: Gio.Cancellable | null
    ): GpgVerifyResult;

    verify_summary(
        remote_name: string,
        summary: GLib.Bytes | Uint8Array,
        signatures: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null
    ): GpgVerifyResult;

    write_archive_to_mtree(
        archive: Gio.File,
        mtree: MutableTree,
        modifier: RepoCommitModifier | null,
        autocreate_parents: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_archive_to_mtree_from_fd(
        fd: number,
        mtree: MutableTree,
        modifier: RepoCommitModifier | null,
        autocreate_parents: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_commit(
        parent: string | null,
        subject: string | null,
        body: string | null,
        metadata: GLib.Variant | null,
        root: RepoFile,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string];

    write_commit_detached_metadata(
        checksum: string,
        metadata?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_commit_with_time(
        parent: string | null,
        subject: string | null,
        body: string | null,
        metadata: GLib.Variant | null,
        root: RepoFile,
        time: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string];

    write_config(new_config: GLib.KeyFile): boolean;

    write_content(
        expected_checksum: string | null,
        object_input: Gio.InputStream,
        length: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Uint8Array | null];

    write_content_async(
        expected_checksum: string | null,
        object: Gio.InputStream,
        length: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_content_finish(result: Gio.AsyncResult): [boolean, number];

    write_content_trusted(
        checksum: string,
        object_input: Gio.InputStream,
        length: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_dfd_to_mtree(
        dfd: number,
        path: string,
        mtree: MutableTree,
        modifier?: RepoCommitModifier | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_directory_to_mtree(
        dir: Gio.File,
        mtree: MutableTree,
        modifier?: RepoCommitModifier | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_metadata(
        objtype: ObjectType,
        expected_checksum: string | null,
        object: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Uint8Array | null];

    write_metadata_async(
        objtype: ObjectType,
        expected_checksum: string | null,
        object: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_metadata_finish(result: Gio.AsyncResult): [boolean, Uint8Array];

    write_metadata_stream_trusted(
        objtype: ObjectType,
        checksum: string,
        object_input: Gio.InputStream,
        length: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_metadata_trusted(
        objtype: ObjectType,
        checksum: string,
        variant: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_mtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): [boolean, Gio.File];

    static create_at(
        dfd: number,
        path: string,
        mode: RepoMode,
        options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Repo;

    static mode_from_string(mode: string): [boolean, RepoMode];

    static open_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): Repo;

    static pull_default_console_progress_changed(progress: AsyncProgress, user_data?: any | null): void;

    static traverse_new_parents(): GLib.HashTable<GLib.Variant, GLib.Variant>;

    static traverse_new_reachable(): GLib.HashTable<GLib.Variant, GLib.Variant>;

    static traverse_parents_get_commits(parents: GLib.HashTable<any, any>, object: GLib.Variant): string[];
}

export namespace RepoFile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RepoFile extends GObject.Object implements Gio.File {
    static $gtype: GObject.GType<RepoFile>;

    constructor(properties?: Partial<RepoFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoFile.ConstructorProperties>, ...args: any[]): void;

    // Members

    ensure_resolved(): boolean;

    get_checksum(): string;

    get_repo(): Repo;

    get_root(): RepoFile;

    get_xattrs(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    tree_find_child(name: string): [number, boolean, GLib.Variant];

    tree_get_contents(): GLib.Variant;

    tree_get_contents_checksum(): string;

    tree_get_metadata(): GLib.Variant;

    tree_get_metadata_checksum(): string;

    tree_query_child(
        n: number,
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Gio.FileInfo];

    tree_set_metadata(checksum: string, metadata: GLib.Variant): void;

    // Implemented Members

    append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;

    append_to_async(
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream;

    copy(
        destination: Gio.File,
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null
    ): boolean;

    copy_async(
        destination: Gio.File,
        flags: Gio.FileCopyFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): void;

    copy_attributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean;

    copy_finish(res: Gio.AsyncResult): boolean;

    create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;

    create_async(
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_finish(res: Gio.AsyncResult): Gio.FileOutputStream;

    create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream;

    create_readwrite_async(
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;

    ['delete'](cancellable?: Gio.Cancellable | null): boolean;

    delete_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_finish(result: Gio.AsyncResult): boolean;

    dup(): Gio.File;

    eject_mountable(
        flags: Gio.MountUnmountFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    eject_mountable_finish(result: Gio.AsyncResult): boolean;

    eject_mountable_with_operation(
        flags: Gio.MountUnmountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;

    enumerate_children(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileEnumerator;

    enumerate_children_async(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator;

    equal(file2: Gio.File): boolean;

    find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount;

    find_enclosing_mount_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount;

    get_basename(): string | null;

    get_child(name: string): Gio.File;

    get_child_for_display_name(display_name: string): Gio.File;

    get_parent(): Gio.File | null;

    get_parse_name(): string;

    get_path(): string | null;

    get_relative_path(descendant: Gio.File): string | null;

    get_uri(): string;

    get_uri_scheme(): string;

    has_parent(parent?: Gio.File | null): boolean;

    has_prefix(prefix: Gio.File): boolean;

    has_uri_scheme(uri_scheme: string): boolean;

    hash(): number;

    is_native(): boolean;

    load_bytes(cancellable?: Gio.Cancellable | null): [GLib.Bytes, string | null];

    load_bytes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    load_bytes_finish(result: Gio.AsyncResult): [GLib.Bytes, string | null];

    load_contents(cancellable: Gio.Cancellable | null): [boolean, Uint8Array, string | null];

    load_contents_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    load_contents_finish(res: Gio.AsyncResult): [boolean, Uint8Array, string | null];

    load_partial_contents_finish(res: Gio.AsyncResult): [boolean, Uint8Array, string | null];

    make_directory(cancellable?: Gio.Cancellable | null): boolean;

    make_directory_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    make_directory_finish(result: Gio.AsyncResult): boolean;

    make_directory_with_parents(cancellable?: Gio.Cancellable | null): boolean;

    make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean;

    measure_disk_usage_finish(result: Gio.AsyncResult): [boolean, number | null, number | null, number | null];

    monitor(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

    monitor_directory(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

    monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

    mount_enclosing_volume(
        flags: Gio.MountMountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean;

    mount_mountable(
        flags: Gio.MountMountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    mount_mountable_finish(result: Gio.AsyncResult): Gio.File;

    move(
        destination: Gio.File,
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null
    ): boolean;

    open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream;

    open_readwrite_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;

    peek_path(): string | null;

    poll_mountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    poll_mountable_finish(result: Gio.AsyncResult): boolean;

    query_default_handler(cancellable?: Gio.Cancellable | null): Gio.AppInfo;

    query_default_handler_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_default_handler_finish(result: Gio.AsyncResult): Gio.AppInfo;

    query_exists(cancellable?: Gio.Cancellable | null): boolean;

    query_file_type(flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileType;

    query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo;

    query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo;

    query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo;

    query_info_async(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_info_finish(res: Gio.AsyncResult): Gio.FileInfo;

    query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;

    query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;

    read(cancellable?: Gio.Cancellable | null): Gio.FileInputStream;

    read_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    read_finish(res: Gio.AsyncResult): Gio.FileInputStream;

    replace(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileOutputStream;

    replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    replace_contents(
        contents: Uint8Array | string,
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    replace_contents_async(
        contents: Uint8Array | string,
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    replace_contents_bytes_async(
        contents: GLib.Bytes | Uint8Array,
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    replace_contents_finish(res: Gio.AsyncResult): [boolean, string | null];

    replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream;

    replace_readwrite(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileIOStream;

    replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;

    resolve_relative_path(relative_path: string): Gio.File;

    set_attribute(
        attribute: string,
        type: Gio.FileAttributeType,
        value_p: any | null,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attribute_byte_string(
        attribute: string,
        value: string,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attribute_int32(
        attribute: string,
        value: number,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attribute_int64(
        attribute: string,
        value: number,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attribute_string(
        attribute: string,
        value: string,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attribute_uint32(
        attribute: string,
        value: number,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attribute_uint64(
        attribute: string,
        value: number,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_attributes_async(
        info: Gio.FileInfo,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_attributes_finish(result: Gio.AsyncResult): [boolean, Gio.FileInfo];

    set_attributes_from_info(
        info: Gio.FileInfo,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File;

    set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_display_name_finish(res: Gio.AsyncResult): Gio.File;

    start_mountable(
        flags: Gio.DriveStartFlags,
        start_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    start_mountable_finish(result: Gio.AsyncResult): boolean;

    stop_mountable(
        flags: Gio.MountUnmountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    stop_mountable_finish(result: Gio.AsyncResult): boolean;

    supports_thread_contexts(): boolean;

    trash(cancellable?: Gio.Cancellable | null): boolean;

    trash_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    trash_finish(result: Gio.AsyncResult): boolean;

    unmount_mountable(
        flags: Gio.MountUnmountFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    unmount_mountable_finish(result: Gio.AsyncResult): boolean;

    unmount_mountable_with_operation(
        flags: Gio.MountUnmountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;

    vfunc_append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;

    vfunc_append_to_async(
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream;

    vfunc_copy(
        destination: Gio.File,
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null
    ): boolean;

    vfunc_copy_async(
        destination: Gio.File,
        flags: Gio.FileCopyFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): void;

    vfunc_copy_finish(res: Gio.AsyncResult): boolean;

    vfunc_create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream;

    vfunc_create_async(
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_create_finish(res: Gio.AsyncResult): Gio.FileOutputStream;

    vfunc_create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream;

    vfunc_create_readwrite_async(
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;

    vfunc_delete_file(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_delete_file_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_delete_file_finish(result: Gio.AsyncResult): boolean;

    vfunc_dup(): Gio.File;

    vfunc_eject_mountable(
        flags: Gio.MountUnmountFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_eject_mountable_finish(result: Gio.AsyncResult): boolean;

    vfunc_eject_mountable_with_operation(
        flags: Gio.MountUnmountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;

    vfunc_enumerate_children(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileEnumerator;

    vfunc_enumerate_children_async(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator;

    vfunc_equal(file2: Gio.File): boolean;

    vfunc_find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount;

    vfunc_find_enclosing_mount_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount;

    vfunc_get_basename(): string;

    vfunc_get_child_for_display_name(display_name: string): Gio.File;

    vfunc_get_parent(): Gio.File | null;

    vfunc_get_parse_name(): string;

    vfunc_get_path(): string;

    vfunc_get_relative_path(descendant: Gio.File): string;

    vfunc_get_uri(): string;

    vfunc_get_uri_scheme(): string;

    vfunc_has_uri_scheme(uri_scheme: string): boolean;

    vfunc_hash(): number;

    vfunc_is_native(): boolean;

    vfunc_make_directory(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_make_directory_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_make_directory_finish(result: Gio.AsyncResult): boolean;

    vfunc_make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_measure_disk_usage_finish(result: Gio.AsyncResult): [boolean, number | null, number | null, number | null];

    vfunc_monitor_dir(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

    vfunc_monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

    vfunc_mount_enclosing_volume(
        flags: Gio.MountMountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean;

    vfunc_mount_mountable(
        flags: Gio.MountMountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_mount_mountable_finish(result: Gio.AsyncResult): Gio.File;

    vfunc_move(
        destination: Gio.File,
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null
    ): boolean;

    vfunc_open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream;

    vfunc_open_readwrite_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;

    vfunc_poll_mountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_poll_mountable_finish(result: Gio.AsyncResult): boolean;

    vfunc_prefix_matches(file: Gio.File): boolean;

    vfunc_query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo;

    vfunc_query_filesystem_info_async(
        attributes: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo;

    vfunc_query_info(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileInfo;

    vfunc_query_info_async(
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_query_info_finish(res: Gio.AsyncResult): Gio.FileInfo;

    vfunc_query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;

    vfunc_query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList;

    vfunc_read_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_read_finish(res: Gio.AsyncResult): Gio.FileInputStream;

    vfunc_read_fn(cancellable?: Gio.Cancellable | null): Gio.FileInputStream;

    vfunc_replace(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileOutputStream;

    vfunc_replace_async(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream;

    vfunc_replace_readwrite(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Gio.FileIOStream;

    vfunc_replace_readwrite_async(
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;

    vfunc_resolve_relative_path(relative_path: string): Gio.File;

    vfunc_set_attribute(
        attribute: string,
        type: Gio.FileAttributeType,
        value_p: any | null,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_set_attributes_async(
        info: Gio.FileInfo,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_set_attributes_finish(result: Gio.AsyncResult): [boolean, Gio.FileInfo];

    vfunc_set_attributes_from_info(
        info: Gio.FileInfo,
        flags: Gio.FileQueryInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File;

    vfunc_set_display_name_async(
        display_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_set_display_name_finish(res: Gio.AsyncResult): Gio.File;

    vfunc_start_mountable(
        flags: Gio.DriveStartFlags,
        start_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_start_mountable_finish(result: Gio.AsyncResult): boolean;

    vfunc_stop_mountable(
        flags: Gio.MountUnmountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_stop_mountable_finish(result: Gio.AsyncResult): boolean;

    vfunc_trash(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_trash_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_trash_finish(result: Gio.AsyncResult): boolean;

    vfunc_unmount_mountable(
        flags: Gio.MountUnmountFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_unmount_mountable_finish(result: Gio.AsyncResult): boolean;

    vfunc_unmount_mountable_with_operation(
        flags: Gio.MountUnmountFlags,
        mount_operation?: Gio.MountOperation | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
}

export namespace RepoFinderAvahi {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RepoFinderAvahi extends GObject.Object implements RepoFinder {
    static $gtype: GObject.GType<RepoFinderAvahi>;

    constructor(properties?: Partial<RepoFinderAvahi.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoFinderAvahi.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](context?: GLib.MainContext | null): RepoFinderAvahi;

    // Members

    start(): void;

    stop(): void;

    // Implemented Members

    resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];

    vfunc_resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
}

export namespace RepoFinderConfig {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RepoFinderConfig extends GObject.Object implements RepoFinder {
    static $gtype: GObject.GType<RepoFinderConfig>;

    constructor(properties?: Partial<RepoFinderConfig.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoFinderConfig.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RepoFinderConfig;

    // Implemented Members

    resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];

    vfunc_resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
}

export namespace RepoFinderMount {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        monitor: Gio.VolumeMonitor;
    }
}

export class RepoFinderMount extends GObject.Object implements RepoFinder {
    static $gtype: GObject.GType<RepoFinderMount>;

    constructor(properties?: Partial<RepoFinderMount.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoFinderMount.ConstructorProperties>, ...args: any[]): void;

    // Properties
    monitor: Gio.VolumeMonitor;

    // Constructors

    static ['new'](monitor?: Gio.VolumeMonitor | null): RepoFinderMount;

    // Implemented Members

    resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];

    vfunc_resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
}

export namespace RepoFinderOverride {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RepoFinderOverride extends GObject.Object implements RepoFinder {
    static $gtype: GObject.GType<RepoFinderOverride>;

    constructor(properties?: Partial<RepoFinderOverride.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoFinderOverride.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RepoFinderOverride;

    // Members

    add_uri(uri: string): void;

    // Implemented Members

    resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];

    vfunc_resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
}

export namespace SePolicy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        path: Gio.File;
        rootfs_dfd: number;
        rootfsDfd: number;
    }
}

export class SePolicy extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<SePolicy>;

    constructor(properties?: Partial<SePolicy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SePolicy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: Gio.File;
    rootfs_dfd: number;
    rootfsDfd: number;

    // Constructors

    static ['new'](path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy;

    static new_at(rootfs_dfd: number, cancellable?: Gio.Cancellable | null): SePolicy;

    // Members

    get_csum(): string;

    get_label(relpath: string, unix_mode: number, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    get_name(): string;

    get_path(): Gio.File;

    restorecon(
        path: string,
        info: Gio.FileInfo | null,
        target: Gio.File,
        flags: SePolicyRestoreconFlags,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    setfscreatecon(path: string, mode: number): boolean;

    static fscreatecon_cleanup(unused?: any | null): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Sysroot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        path: Gio.File;
    }
}

export class Sysroot extends GObject.Object {
    static $gtype: GObject.GType<Sysroot>;

    constructor(properties?: Partial<Sysroot.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Sysroot.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: Gio.File;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'journal-msg', callback: (_source: this, msg: string) => void): number;

    connect_after(signal: 'journal-msg', callback: (_source: this, msg: string) => void): number;

    emit(signal: 'journal-msg', msg: string): void;

    // Constructors

    static ['new'](path?: Gio.File | null): Sysroot;

    static new_default(): Sysroot;

    // Members

    cleanup(cancellable?: Gio.Cancellable | null): boolean;

    cleanup_prune_repo(
        options: RepoPruneOptions,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number, number, number];

    deploy_tree(
        osname: string | null,
        revision: string,
        origin: GLib.KeyFile | null,
        provided_merge_deployment: Deployment | null,
        override_kernel_argv: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Deployment];

    deploy_tree_with_options(
        osname: string | null,
        revision: string,
        origin: GLib.KeyFile | null,
        provided_merge_deployment: Deployment | null,
        opts: SysrootDeployTreeOpts | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Deployment];

    deployment_set_kargs(deployment: Deployment, new_kargs: string[], cancellable?: Gio.Cancellable | null): boolean;

    deployment_set_mutable(deployment: Deployment, is_mutable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    deployment_set_pinned(deployment: Deployment, is_pinned: boolean): boolean;

    deployment_unlock(
        deployment: Deployment,
        unlocked_state: DeploymentUnlockedState,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ensure_initialized(cancellable?: Gio.Cancellable | null): boolean;

    get_booted_deployment(): Deployment | null;

    get_bootversion(): number;

    get_deployment_directory(deployment: Deployment): Gio.File;

    get_deployment_dirpath(deployment: Deployment): string;

    get_deployments(): Deployment[];

    get_fd(): number;

    get_merge_deployment(osname?: string | null): Deployment | null;

    get_path(): Gio.File;

    get_repo(cancellable?: Gio.Cancellable | null): [boolean, Repo | null];

    get_staged_deployment(): Deployment | null;

    get_subbootversion(): number;

    init_osname(osname: string, cancellable?: Gio.Cancellable | null): boolean;

    initialize(): boolean;

    is_booted(): boolean;

    load(cancellable?: Gio.Cancellable | null): boolean;

    load_if_changed(cancellable?: Gio.Cancellable | null): [boolean, boolean];

    lock(): boolean;

    lock_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    lock_finish(result: Gio.AsyncResult): boolean;

    origin_new_from_refspec(refspec: string): GLib.KeyFile;

    prepare_cleanup(cancellable?: Gio.Cancellable | null): boolean;

    query_deployments_for(osname?: string | null): [Deployment | null, Deployment | null];

    repo(): Repo;

    set_mount_namespace_in_use(): void;

    simple_write_deployment(
        osname: string | null,
        new_deployment: Deployment,
        merge_deployment: Deployment | null,
        flags: SysrootSimpleWriteDeploymentFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    stage_overlay_initrd(fd: number, cancellable?: Gio.Cancellable | null): [boolean, string];

    stage_tree(
        osname: string | null,
        revision: string,
        origin: GLib.KeyFile | null,
        merge_deployment: Deployment | null,
        override_kernel_argv: string[] | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Deployment];

    stage_tree_with_options(
        osname: string | null,
        revision: string,
        origin: GLib.KeyFile | null,
        merge_deployment: Deployment | null,
        opts: SysrootDeployTreeOpts,
        cancellable?: Gio.Cancellable | null
    ): [boolean, Deployment];

    try_lock(): [boolean, boolean];

    unload(): void;

    unlock(): void;

    write_deployments(new_deployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean;

    write_deployments_with_options(
        new_deployments: Deployment[],
        opts: SysrootWriteDeploymentsOpts,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    write_origin_file(
        deployment: Deployment,
        new_origin?: GLib.KeyFile | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static get_deployment_origin_path(deployment_path: Gio.File): Gio.File;
}

export namespace SysrootUpgrader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: SysrootUpgraderFlags;
        osname: string;
        sysroot: Sysroot;
    }
}

export class SysrootUpgrader extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<SysrootUpgrader>;

    constructor(properties?: Partial<SysrootUpgrader.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SysrootUpgrader.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: SysrootUpgraderFlags;
    osname: string;
    sysroot: Sysroot;

    // Constructors

    static ['new'](sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader;

    static new_for_os(sysroot: Sysroot, osname?: string | null, cancellable?: Gio.Cancellable | null): SysrootUpgrader;

    static new_for_os_with_flags(
        sysroot: Sysroot,
        osname: string | null,
        flags: SysrootUpgraderFlags,
        cancellable?: Gio.Cancellable | null
    ): SysrootUpgrader;

    // Members

    deploy(cancellable?: Gio.Cancellable | null): boolean;

    dup_origin(): GLib.KeyFile;

    get_origin(): GLib.KeyFile;

    get_origin_description(): string;

    pull(
        flags: RepoPullFlags,
        upgrader_flags: SysrootUpgraderPullFlags,
        progress: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean];

    pull_one_dir(
        dir_to_pull: string,
        flags: RepoPullFlags,
        upgrader_flags: SysrootUpgraderPullFlags,
        progress: AsyncProgress | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean];

    set_origin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean;

    static check_timestamps(repo: Repo, from_rev: string, to_rev: string): boolean;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export class Bootloader {
    static $gtype: GObject.GType<Bootloader>;

    constructor(copy: Bootloader);
}

export class BootloaderGrub2 {
    static $gtype: GObject.GType<BootloaderGrub2>;

    constructor(copy: BootloaderGrub2);
}

export class BootloaderInterface {
    static $gtype: GObject.GType<BootloaderInterface>;

    constructor(copy: BootloaderInterface);

    // Fields
    g_iface: GObject.TypeInterface;
}

export class BootloaderSyslinux {
    static $gtype: GObject.GType<BootloaderSyslinux>;

    constructor(copy: BootloaderSyslinux);
}

export class BootloaderUboot {
    static $gtype: GObject.GType<BootloaderUboot>;

    constructor(copy: BootloaderUboot);
}

export class BootloaderZipl {
    static $gtype: GObject.GType<BootloaderZipl>;

    constructor(copy: BootloaderZipl);
}

export class ChecksumInputStreamPrivate {
    static $gtype: GObject.GType<ChecksumInputStreamPrivate>;

    constructor(copy: ChecksumInputStreamPrivate);
}

export class CmdPrivateVTable {
    static $gtype: GObject.GType<CmdPrivateVTable>;

    constructor(copy: CmdPrivateVTable);
}

export class CollectionRef {
    static $gtype: GObject.GType<CollectionRef>;

    constructor(collection_id: string | null, ref_name: string);
    constructor(
        properties?: Partial<{
            collection_id?: string;
            ref_name?: string;
        }>
    );

    constructor(copy: CollectionRef);

    // Fields
    collection_id: string;
    ref_name: string;

    // Constructors
    static ['new'](collection_id: string | null, ref_name: string): CollectionRef;

    // Members
    dup(): CollectionRef;

    free(): void;

    static dupv(refs: CollectionRef[]): CollectionRef[];

    static equal(ref1: any, ref2: any): boolean;

    static freev(refs: CollectionRef[]): void;

    static hash(ref: any): number;
}

export class CommitSizesEntry {
    static $gtype: GObject.GType<CommitSizesEntry>;

    constructor(checksum: string, objtype: ObjectType, unpacked: number, archived: number);
    constructor(copy: CommitSizesEntry);

    // Fields
    checksum: string;
    objtype: ObjectType;
    unpacked: number;
    archived: number;

    // Constructors
    static ['new'](checksum: string, objtype: ObjectType, unpacked: number, archived: number): CommitSizesEntry;

    // Members
    copy(): CommitSizesEntry | null;

    free(): void;
}

export class DiffDirsOptions {
    static $gtype: GObject.GType<DiffDirsOptions>;

    constructor(copy: DiffDirsOptions);

    // Fields
    owner_uid: number;
    owner_gid: number;
    devino_to_csum_cache: RepoDevInoCache;
    unused_bools: boolean[];
    unused_ints: number[];
    unused_ptrs: any[];
}

export class DiffItem {
    static $gtype: GObject.GType<DiffItem>;

    constructor(copy: DiffItem);

    // Fields
    refcount: number;
    src: Gio.File;
    target: Gio.File;
    src_info: Gio.FileInfo;
    target_info: Gio.FileInfo;
    src_checksum: string;
    target_checksum: string;

    // Members
    ref(): DiffItem;

    unref(): void;
}

export class GpgVerifier {
    static $gtype: GObject.GType<GpgVerifier>;

    constructor(copy: GpgVerifier);
}

export class KernelArgs {
    static $gtype: GObject.GType<KernelArgs>;

    constructor(copy: KernelArgs);

    // Members
    append(arg: string): void;

    append_argv(argv: string): void;

    append_argv_filtered(argv: string, prefixes: string): void;

    append_proc_cmdline(cancellable?: Gio.Cancellable | null): boolean;

    ['delete'](arg: string): boolean;

    delete_key_entry(key: string): boolean;

    free(): void;

    get_last_value(key: string): string;

    new_replace(arg: string): boolean;

    parse_append(options: string): void;

    replace(arg: string): void;

    replace_argv(argv: string): void;

    replace_take(arg: string): void;

    to_string(): string;

    to_strv(): string[];

    static cleanup(loc?: any | null): void;
}

export class KernelArgsEntry {
    static $gtype: GObject.GType<KernelArgsEntry>;

    constructor(copy: KernelArgsEntry);
}

export class LibarchiveInputStream {
    static $gtype: GObject.GType<LibarchiveInputStream>;

    constructor(copy: LibarchiveInputStream);

    // Fields
    priv: LibarchiveInputStreamPrivate;
}

export class LibarchiveInputStreamClass {
    static $gtype: GObject.GType<LibarchiveInputStreamClass>;

    constructor(copy: LibarchiveInputStreamClass);
}

export class LibarchiveInputStreamPrivate {
    static $gtype: GObject.GType<LibarchiveInputStreamPrivate>;

    constructor(copy: LibarchiveInputStreamPrivate);
}

export class LzmaCompressor {
    static $gtype: GObject.GType<LzmaCompressor>;

    constructor(copy: LzmaCompressor);
}

export class LzmaCompressorClass {
    static $gtype: GObject.GType<LzmaCompressorClass>;

    constructor(copy: LzmaCompressorClass);
}

export class LzmaDecompressor {
    static $gtype: GObject.GType<LzmaDecompressor>;

    constructor(copy: LzmaDecompressor);
}

export class LzmaDecompressorClass {
    static $gtype: GObject.GType<LzmaDecompressorClass>;

    constructor(copy: LzmaDecompressorClass);
}

export class MutableTreeIter {
    static $gtype: GObject.GType<MutableTreeIter>;

    constructor(
        properties?: Partial<{
            in_files?: boolean;
            iter?: GLib.HashTableIter;
        }>
    );

    constructor(copy: MutableTreeIter);

    // Fields
    in_files: boolean;
    iter: GLib.HashTableIter;
}

export class Remote {
    static $gtype: GObject.GType<Remote>;

    constructor(copy: Remote);

    // Members
    get_name(): string;

    get_url(): string;

    ref(): Remote;

    unref(): void;
}

export class RepoCheckoutAtOptions {
    static $gtype: GObject.GType<RepoCheckoutAtOptions>;

    constructor(copy: RepoCheckoutAtOptions);

    // Fields
    mode: RepoCheckoutMode;
    overwrite_mode: RepoCheckoutOverwriteMode;
    enable_uncompressed_cache: boolean;
    enable_fsync: boolean;
    process_whiteouts: boolean;
    no_copy_fallback: boolean;
    force_copy: boolean;
    bareuseronly_dirs: boolean;
    force_copy_zerosized: boolean;
    unused_bools: boolean[];
    subpath: string;
    devino_to_csum_cache: RepoDevInoCache;
    unused_ints: number[];
    unused_ptrs: any[];
    filter: RepoCheckoutFilter;
    filter_user_data: any;
    sepolicy: SePolicy;
    sepolicy_prefix: string;

    // Members
    set_devino(cache?: RepoDevInoCache | null): void;
}

export class RepoCommitModifier {
    static $gtype: GObject.GType<RepoCommitModifier>;

    constructor(flags: RepoCommitModifierFlags, commit_filter?: RepoCommitFilter | null);
    constructor(copy: RepoCommitModifier);

    // Constructors
    static ['new'](flags: RepoCommitModifierFlags, commit_filter?: RepoCommitFilter | null): RepoCommitModifier;

    // Members
    ref(): RepoCommitModifier;

    set_devino_cache(cache: RepoDevInoCache): void;

    set_sepolicy(sepolicy?: SePolicy | null): void;

    set_sepolicy_from_commit(repo: Repo, rev: string, cancellable?: Gio.Cancellable | null): boolean;

    set_xattr_callback(callback: RepoCommitModifierXattrCallback): void;

    unref(): void;
}

export class RepoCommitTraverseIter {
    static $gtype: GObject.GType<RepoCommitTraverseIter>;

    constructor(copy: RepoCommitTraverseIter);

    // Fields
    initialized: boolean;
    dummy: any[];
    dummy_checksum_data: number[];

    // Members
    clear(): void;

    get_dir(): [string, string, string];

    get_file(): [string, string];

    init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean;

    init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean;

    next(cancellable?: Gio.Cancellable | null): RepoCommitIterResult;

    static cleanup(p?: any | null): void;
}

export class RepoDevInoCache {
    static $gtype: GObject.GType<RepoDevInoCache>;

    constructor();
    constructor(copy: RepoDevInoCache);

    // Constructors
    static ['new'](): RepoDevInoCache;

    // Members
    ref(): RepoDevInoCache;

    unref(): void;
}

export class RepoFileEnumerator {
    static $gtype: GObject.GType<RepoFileEnumerator>;

    constructor(copy: RepoFileEnumerator);
}

export class RepoFileEnumeratorClass {
    static $gtype: GObject.GType<RepoFileEnumeratorClass>;

    constructor(copy: RepoFileEnumeratorClass);
}

export class RepoFinderResult {
    static $gtype: GObject.GType<RepoFinderResult>;

    constructor(
        remote: Remote,
        finder: RepoFinder,
        priority: number,
        ref_to_checksum: GLib.HashTable<CollectionRef, string>,
        ref_to_timestamp: GLib.HashTable<CollectionRef, number> | null,
        summary_last_modified: number
    );

    constructor(copy: RepoFinderResult);

    // Fields
    remote: Remote;
    finder: RepoFinder;
    priority: number;
    ref_to_checksum: GLib.HashTable<CollectionRef, string>;
    summary_last_modified: number;
    ref_to_timestamp: GLib.HashTable<CollectionRef, number>;
    padding: any[];

    // Constructors
    static ['new'](
        remote: Remote,
        finder: RepoFinder,
        priority: number,
        ref_to_checksum: GLib.HashTable<CollectionRef, string>,
        ref_to_timestamp: GLib.HashTable<CollectionRef, number> | null,
        summary_last_modified: number
    ): RepoFinderResult;

    // Members
    compare(b: RepoFinderResult): number;

    dup(): RepoFinderResult;

    free(): void;

    static freev(results: RepoFinderResult[]): void;
}

export class RepoPruneOptions {
    static $gtype: GObject.GType<RepoPruneOptions>;

    constructor(copy: RepoPruneOptions);

    // Fields
    flags: RepoPruneFlags;
    reachable: GLib.HashTable<any, any>;
    unused_bools: boolean[];
    unused_ints: number[];
    unused_ptrs: any[];
}

export class RepoTransactionStats {
    static $gtype: GObject.GType<RepoTransactionStats>;

    constructor(
        properties?: Partial<{
            metadata_objects_total?: number;
            metadata_objects_written?: number;
            content_objects_total?: number;
            content_objects_written?: number;
            content_bytes_written?: number;
            devino_cache_hits?: number;
            padding1?: number;
            padding2?: number;
            padding3?: number;
            padding4?: number;
        }>
    );

    constructor(copy: RepoTransactionStats);

    // Fields
    metadata_objects_total: number;
    metadata_objects_written: number;
    content_objects_total: number;
    content_objects_written: number;
    content_bytes_written: number;
    devino_cache_hits: number;
    padding1: number;
    padding2: number;
    padding3: number;
    padding4: number;
}

export class RollsumMatches {
    static $gtype: GObject.GType<RollsumMatches>;

    constructor(copy: RollsumMatches);

    // Fields
    from_rollsums: GLib.HashTable<any, any>;
    to_rollsums: GLib.HashTable<any, any>;
    crcmatches: number;
    bufmatches: number;
    total: number;
    match_size: number;
    matches: any[];
}

export class SignDummy {
    static $gtype: GObject.GType<SignDummy>;

    constructor(copy: SignDummy);
}

export class SignDummyClass {
    static $gtype: GObject.GType<SignDummyClass>;

    constructor(copy: SignDummyClass);
}

export class SignEd25519 {
    static $gtype: GObject.GType<SignEd25519>;

    constructor(copy: SignEd25519);
}

export class SignEd25519Class {
    static $gtype: GObject.GType<SignEd25519Class>;

    constructor(copy: SignEd25519Class);
}

export class SysrootDeployTreeOpts {
    static $gtype: GObject.GType<SysrootDeployTreeOpts>;

    constructor(copy: SysrootDeployTreeOpts);

    // Fields
    unused_bools: boolean[];
    unused_ints: number[];
    override_kernel_argv: string;
    overlay_initrds: string;
    unused_ptrs: any[];
}

export class SysrootWriteDeploymentsOpts {
    static $gtype: GObject.GType<SysrootWriteDeploymentsOpts>;

    constructor(copy: SysrootWriteDeploymentsOpts);

    // Fields
    do_postclean: boolean;
    unused_bools: boolean[];
    unused_ints: number[];
    unused_ptrs: any[];
}

export class TlsCertInteraction {
    static $gtype: GObject.GType<TlsCertInteraction>;

    constructor(copy: TlsCertInteraction);
}

export class TlsCertInteractionClass {
    static $gtype: GObject.GType<TlsCertInteractionClass>;

    constructor(copy: TlsCertInteractionClass);
}

export interface RepoFinderNamespace {
    $gtype: GObject.GType<RepoFinder>;
    prototype: RepoFinderPrototype;

    resolve_all_async(
        finders: RepoFinder[],
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<RepoFinder> | null
    ): void;

    resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];
}

export type RepoFinder = RepoFinderPrototype;

export interface RepoFinderPrototype extends GObject.Object {
    // Members

    resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];

    vfunc_resolve_async(
        refs: CollectionRef[],
        parent_repo: Repo,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
}

export const RepoFinder: RepoFinderNamespace;

export interface SignNamespace {
    $gtype: GObject.GType<Sign>;
    prototype: SignPrototype;

    get_all(): Sign[];

    get_by_name(name: string): Sign;
}

export type Sign = SignPrototype;

export interface SignPrototype extends GObject.Object {
    // Members

    add_pk(public_key: GLib.Variant): boolean;

    clear_keys(): boolean;

    commit(repo: Repo, commit_checksum: string, cancellable?: Gio.Cancellable | null): boolean;

    commit_verify(repo: Repo, commit_checksum: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    data(data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): [boolean, GLib.Bytes];

    data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant): [boolean, string | null];

    dummy_add_pk(key: GLib.Variant): boolean;

    dummy_data(
        data: GLib.Bytes | Uint8Array,
        signature: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    dummy_data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant, success_message: string): boolean;

    dummy_get_name(): string;

    dummy_metadata_format(): string;

    dummy_metadata_key(): string;

    dummy_set_pk(key: GLib.Variant): boolean;

    dummy_set_sk(key: GLib.Variant): boolean;

    ed25519_add_pk(public_key: GLib.Variant): boolean;

    ed25519_clear_keys(): boolean;

    ed25519_data(
        data: GLib.Bytes | Uint8Array,
        signature: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ed25519_data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant, out_success_message: string): boolean;

    ed25519_get_name(): string;

    ed25519_load_pk(options: GLib.Variant): boolean;

    ed25519_metadata_format(): string;

    ed25519_metadata_key(): string;

    ed25519_set_pk(public_key: GLib.Variant): boolean;

    ed25519_set_sk(secret_key: GLib.Variant): boolean;

    get_name(): string;

    load_pk(options: GLib.Variant): boolean;

    metadata_format(): string;

    metadata_key(): string;

    set_pk(public_key: GLib.Variant): boolean;

    set_sk(secret_key: GLib.Variant): boolean;

    summary(repo: Repo, keys: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_add_pk(public_key: GLib.Variant): boolean;

    vfunc_clear_keys(): boolean;

    vfunc_data(data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): [boolean, GLib.Bytes];

    vfunc_data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant): [boolean, string | null];

    vfunc_get_name(): string;

    vfunc_load_pk(options: GLib.Variant): boolean;

    vfunc_metadata_format(): string;

    vfunc_metadata_key(): string;

    vfunc_set_pk(public_key: GLib.Variant): boolean;

    vfunc_set_sk(secret_key: GLib.Variant): boolean;
}

export const Sign: SignNamespace;

export type CollectionRefv = CollectionRef;
export type RepoFinderResultv = RepoFinderResult;
