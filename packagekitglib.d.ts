/**
 * PackageKitGlib 1.0
 *
 * Generated from 1.1.13
 */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_OFFLINE: string;
export const DBUS_INTERFACE_TRANSACTION: string;
export const DBUS_PATH: string;
export const DBUS_SERVICE: string;
export const DESKTOP_DEFAULT_APPLICATION_DIR: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OFFLINE_DESTDIR: string;
export const OFFLINE_RESULTS_GROUP: string;
export const PACKAGE_IDS_DELIM: string;
export const PACKAGE_ID_ARCH: number;
export const PACKAGE_ID_DATA: number;
export const PACKAGE_ID_NAME: number;
export const PACKAGE_ID_VERSION: number;
export const SYSTEM_PACKAGE_CACHE_FILENAME: string;
export const SYSTEM_PACKAGE_LIST_FILENAME: string;

export function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum;

export function authorize_type_enum_to_string(authorize_type: AuthorizeEnum): string;

export function client_error_quark(): GLib.Quark;

export function control_error_quark(): GLib.Quark;

export function debug_add_log_domain(log_domain: string): void;

export function debug_is_verbose(): boolean;

export function debug_set_verbose(verbose: boolean): void;

export function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum;

export function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum): string;

export function enum_find_string(table: EnumMatch, value: number): string;

export function enum_find_value(table: EnumMatch, string: string): number;

export function error_enum_from_string(code: string): ErrorEnum;

export function error_enum_to_string(code: ErrorEnum): string;

export function exit_enum_from_string(exit: string): ExitEnum;

export function exit_enum_to_string(exit: ExitEnum): string;

export function filter_bitfield_from_string(filters: string): Bitfield;

export function filter_bitfield_to_string(filters: Bitfield): string;

export function filter_enum_from_string(filter: string): FilterEnum;

export function filter_enum_to_string(filter: FilterEnum): string;

export function get_distro_id(): string;

export function group_bitfield_from_string(groups: string): Bitfield;

export function group_bitfield_to_string(groups: Bitfield): string;

export function group_enum_from_string(group: string): GroupEnum;

export function group_enum_to_string(group: GroupEnum): string;

export function info_enum_from_string(info: string): InfoEnum;

export function info_enum_to_localised_past(info: InfoEnum): string;

export function info_enum_to_localised_present(info: InfoEnum): string;

export function info_enum_to_string(info: InfoEnum): string;

export function iso8601_from_date(date: GLib.Date): string;

export function iso8601_present(): string;

export function media_type_enum_from_string(media_type: string): MediaTypeEnum;

export function media_type_enum_to_string(media_type: MediaTypeEnum): string;

export function network_enum_from_string(network: string): NetworkEnum;

export function network_enum_to_string(network: NetworkEnum): string;

export function offline_action_from_string(action: string): OfflineAction;

export function offline_action_to_string(action: OfflineAction): string;

export function offline_auth_cancel(): boolean;

export function offline_auth_clear_results(): boolean;

export function offline_auth_invalidate(): boolean;

export function offline_auth_set_action(action: OfflineAction): boolean;

export function offline_auth_set_prepared_ids(package_ids: string): boolean;

export function offline_auth_set_prepared_upgrade(name: string, release_ver: string): boolean;

export function offline_auth_set_results(results: Results): boolean;

export function offline_auth_trigger(action: OfflineAction): boolean;

export function offline_auth_trigger_upgrade(action: OfflineAction): boolean;

export function offline_cancel(cancellable?: Gio.Cancellable | null): boolean;

export function offline_clear_results(cancellable?: Gio.Cancellable | null): boolean;

export function offline_error_quark(): GLib.Quark;

export function offline_get_action(): OfflineAction;

export function offline_get_action_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

export function offline_get_prepared_ids(): string[];

export function offline_get_prepared_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

export function offline_get_prepared_sack(): PackageSack;

export function offline_get_prepared_upgrade(name: string, release_ver: string): boolean;

export function offline_get_prepared_upgrade_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;

export function offline_get_prepared_upgrade_name(): string;

export function offline_get_prepared_upgrade_version(): string;

export function offline_get_results(): Results;

export function offline_get_results_mtime(): number;

export function offline_trigger(action: OfflineAction, cancellable?: Gio.Cancellable | null): boolean;

export function offline_trigger_upgrade(action: OfflineAction, cancellable?: Gio.Cancellable | null): boolean;

export function polkit_agent_close(): void;

export function polkit_agent_open(): number;

export function ptr_array_to_strv(array: string[]): string[];

export function restart_enum_from_string(restart: string): RestartEnum;

export function restart_enum_to_string(restart: RestartEnum): string;

export function role_bitfield_from_string(roles: string): Bitfield;

export function role_bitfield_to_string(roles: Bitfield): string;

export function role_enum_from_string(role: string): RoleEnum;

export function role_enum_to_localised_present(role: RoleEnum): string;

export function role_enum_to_string(role: RoleEnum): string;

export function sig_type_enum_from_string(sig_type: string): SigTypeEnum;

export function sig_type_enum_to_string(sig_type: SigTypeEnum): string;

export function status_enum_from_string(status: string): StatusEnum;

export function status_enum_to_localised_text(status: StatusEnum): string;

export function status_enum_to_string(status: StatusEnum): string;

export function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield;

export function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string;

export function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum;

export function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum): string;

export function update_state_enum_from_string(update_state: string): UpdateStateEnum;

export function update_state_enum_to_string(update_state: UpdateStateEnum): string;

export function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum;

export function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum): string;

export type PackageSackFilterFunc = (_package: Package) => boolean;
export type ProgressCallback = (progress: Progress, type: ProgressType) => void;

export namespace AuthorizeEnum {
    export const $gtype: GObject.GType<AuthorizeEnum>;
}

export enum AuthorizeEnum {
    UNKNOWN = 0,
    YES = 1,
    NO = 2,
    INTERACTIVE = 3,
    LAST = 4,
}

export class ClientError extends GLib.Error {
    static $gtype: GObject.GType<ClientError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ClientError);

    // Properties
    static FAILED: number;
    static FAILED_AUTH: number;
    static NO_TID: number;
    static ALREADY_TID: number;
    static ROLE_UNKNOWN: number;
    static CANNOT_START_DAEMON: number;
    static INVALID_INPUT: number;
    static INVALID_FILE: number;
    static NOT_SUPPORTED: number;
    static DECLINED_SIMULATION: number;
    static LAST: number;

    // Members
    static quark(): GLib.Quark;
}

export class ControlError extends GLib.Error {
    static $gtype: GObject.GType<ControlError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ControlError);

    // Properties
    static FAILED: number;
    static CANNOT_START_DAEMON: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace DistroUpgradeEnum {
    export const $gtype: GObject.GType<DistroUpgradeEnum>;
}

export enum DistroUpgradeEnum {
    UNKNOWN = 0,
    STABLE = 1,
    UNSTABLE = 2,
    LAST = 3,
}

export namespace ErrorEnum {
    export const $gtype: GObject.GType<ErrorEnum>;
}

export enum ErrorEnum {
    UNKNOWN = 0,
    OOM = 1,
    NO_NETWORK = 2,
    NOT_SUPPORTED = 3,
    INTERNAL_ERROR = 4,
    GPG_FAILURE = 5,
    PACKAGE_ID_INVALID = 6,
    PACKAGE_NOT_INSTALLED = 7,
    PACKAGE_NOT_FOUND = 8,
    PACKAGE_ALREADY_INSTALLED = 9,
    PACKAGE_DOWNLOAD_FAILED = 10,
    GROUP_NOT_FOUND = 11,
    GROUP_LIST_INVALID = 12,
    DEP_RESOLUTION_FAILED = 13,
    FILTER_INVALID = 14,
    CREATE_THREAD_FAILED = 15,
    TRANSACTION_ERROR = 16,
    TRANSACTION_CANCELLED = 17,
    NO_CACHE = 18,
    REPO_NOT_FOUND = 19,
    CANNOT_REMOVE_SYSTEM_PACKAGE = 20,
    PROCESS_KILL = 21,
    FAILED_INITIALIZATION = 22,
    FAILED_FINALISE = 23,
    FAILED_CONFIG_PARSING = 24,
    CANNOT_CANCEL = 25,
    CANNOT_GET_LOCK = 26,
    NO_PACKAGES_TO_UPDATE = 27,
    CANNOT_WRITE_REPO_CONFIG = 28,
    LOCAL_INSTALL_FAILED = 29,
    BAD_GPG_SIGNATURE = 30,
    MISSING_GPG_SIGNATURE = 31,
    CANNOT_INSTALL_SOURCE_PACKAGE = 32,
    REPO_CONFIGURATION_ERROR = 33,
    NO_LICENSE_AGREEMENT = 34,
    FILE_CONFLICTS = 35,
    PACKAGE_CONFLICTS = 36,
    REPO_NOT_AVAILABLE = 37,
    INVALID_PACKAGE_FILE = 38,
    PACKAGE_INSTALL_BLOCKED = 39,
    PACKAGE_CORRUPT = 40,
    ALL_PACKAGES_ALREADY_INSTALLED = 41,
    FILE_NOT_FOUND = 42,
    NO_MORE_MIRRORS_TO_TRY = 43,
    NO_DISTRO_UPGRADE_DATA = 44,
    INCOMPATIBLE_ARCHITECTURE = 45,
    NO_SPACE_ON_DEVICE = 46,
    MEDIA_CHANGE_REQUIRED = 47,
    NOT_AUTHORIZED = 48,
    UPDATE_NOT_FOUND = 49,
    CANNOT_INSTALL_REPO_UNSIGNED = 50,
    CANNOT_UPDATE_REPO_UNSIGNED = 51,
    CANNOT_GET_FILELIST = 52,
    CANNOT_GET_REQUIRES = 53,
    CANNOT_DISABLE_REPOSITORY = 54,
    RESTRICTED_DOWNLOAD = 55,
    PACKAGE_FAILED_TO_CONFIGURE = 56,
    PACKAGE_FAILED_TO_BUILD = 57,
    PACKAGE_FAILED_TO_INSTALL = 58,
    PACKAGE_FAILED_TO_REMOVE = 59,
    UPDATE_FAILED_DUE_TO_RUNNING_PROCESS = 60,
    PACKAGE_DATABASE_CHANGED = 61,
    PROVIDE_TYPE_NOT_SUPPORTED = 62,
    INSTALL_ROOT_INVALID = 63,
    CANNOT_FETCH_SOURCES = 64,
    CANCELLED_PRIORITY = 65,
    UNFINISHED_TRANSACTION = 66,
    LOCK_REQUIRED = 67,
    REPO_ALREADY_SET = 68,
    LAST = 69,
}

export namespace ExitEnum {
    export const $gtype: GObject.GType<ExitEnum>;
}

export enum ExitEnum {
    UNKNOWN = 0,
    SUCCESS = 1,
    FAILED = 2,
    CANCELLED = 3,
    KEY_REQUIRED = 4,
    EULA_REQUIRED = 5,
    KILLED = 6,
    MEDIA_CHANGE_REQUIRED = 7,
    NEED_UNTRUSTED = 8,
    CANCELLED_PRIORITY = 9,
    SKIP_TRANSACTION = 10,
    REPAIR_REQUIRED = 11,
    LAST = 12,
}

export namespace FilterEnum {
    export const $gtype: GObject.GType<FilterEnum>;
}

export enum FilterEnum {
    UNKNOWN = 0,
    NONE = 1,
    INSTALLED = 2,
    NOT_INSTALLED = 3,
    DEVELOPMENT = 4,
    NOT_DEVELOPMENT = 5,
    GUI = 6,
    NOT_GUI = 7,
    FREE = 8,
    NOT_FREE = 9,
    VISIBLE = 10,
    NOT_VISIBLE = 11,
    SUPPORTED = 12,
    NOT_SUPPORTED = 13,
    BASENAME = 14,
    NOT_BASENAME = 15,
    NEWEST = 16,
    NOT_NEWEST = 17,
    ARCH = 18,
    NOT_ARCH = 19,
    SOURCE = 20,
    NOT_SOURCE = 21,
    COLLECTIONS = 22,
    NOT_COLLECTIONS = 23,
    APPLICATION = 24,
    NOT_APPLICATION = 25,
    DOWNLOADED = 26,
    NOT_DOWNLOADED = 27,
    LAST = 28,
}

export namespace GroupEnum {
    export const $gtype: GObject.GType<GroupEnum>;
}

export enum GroupEnum {
    UNKNOWN = 0,
    ACCESSIBILITY = 1,
    ACCESSORIES = 2,
    ADMIN_TOOLS = 3,
    COMMUNICATION = 4,
    DESKTOP_GNOME = 5,
    DESKTOP_KDE = 6,
    DESKTOP_OTHER = 7,
    DESKTOP_XFCE = 8,
    EDUCATION = 9,
    FONTS = 10,
    GAMES = 11,
    GRAPHICS = 12,
    INTERNET = 13,
    LEGACY = 14,
    LOCALIZATION = 15,
    MAPS = 16,
    MULTIMEDIA = 17,
    NETWORK = 18,
    OFFICE = 19,
    OTHER = 20,
    POWER_MANAGEMENT = 21,
    PROGRAMMING = 22,
    PUBLISHING = 23,
    REPOS = 24,
    SECURITY = 25,
    SERVERS = 26,
    SYSTEM = 27,
    VIRTUALIZATION = 28,
    SCIENCE = 29,
    DOCUMENTATION = 30,
    ELECTRONICS = 31,
    COLLECTIONS = 32,
    VENDOR = 33,
    NEWEST = 34,
    LAST = 35,
}

export namespace InfoEnum {
    export const $gtype: GObject.GType<InfoEnum>;
}

export enum InfoEnum {
    UNKNOWN = 0,
    INSTALLED = 1,
    AVAILABLE = 2,
    LOW = 3,
    ENHANCEMENT = 4,
    NORMAL = 5,
    BUGFIX = 6,
    IMPORTANT = 7,
    SECURITY = 8,
    BLOCKED = 9,
    DOWNLOADING = 10,
    UPDATING = 11,
    INSTALLING = 12,
    REMOVING = 13,
    CLEANUP = 14,
    OBSOLETING = 15,
    COLLECTION_INSTALLED = 16,
    COLLECTION_AVAILABLE = 17,
    FINISHED = 18,
    REINSTALLING = 19,
    DOWNGRADING = 20,
    PREPARING = 21,
    DECOMPRESSING = 22,
    UNTRUSTED = 23,
    TRUSTED = 24,
    UNAVAILABLE = 25,
    LAST = 26,
}

export namespace MediaTypeEnum {
    export const $gtype: GObject.GType<MediaTypeEnum>;
}

export enum MediaTypeEnum {
    UNKNOWN = 0,
    CD = 1,
    DVD = 2,
    DISC = 3,
    LAST = 4,
}

export namespace NetworkEnum {
    export const $gtype: GObject.GType<NetworkEnum>;
}

export enum NetworkEnum {
    UNKNOWN = 0,
    OFFLINE = 1,
    ONLINE = 2,
    WIRED = 3,
    WIFI = 4,
    MOBILE = 5,
    LAST = 6,
}

export namespace OfflineAction {
    export const $gtype: GObject.GType<OfflineAction>;
}

export enum OfflineAction {
    UNKNOWN = 0,
    REBOOT = 1,
    POWER_OFF = 2,
    UNSET = 3,
    LAST = 4,
}

export class OfflineError extends GLib.Error {
    static $gtype: GObject.GType<OfflineError>;

    constructor(options: { message: string; code: number });
    constructor(copy: OfflineError);

    // Properties
    static FAILED: number;
    static INVALID_VALUE: number;
    static NO_DATA: number;
    static LAST: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PackageSackSortType {
    export const $gtype: GObject.GType<PackageSackSortType>;
}

export enum PackageSackSortType {
    NAME = 0,
    INFO = 1,
    PACKAGE_ID = 2,
    SUMMARY = 3,
    LAST = 4,
}

export namespace ProgressType {
    export const $gtype: GObject.GType<ProgressType>;
}

export enum ProgressType {
    PACKAGE_ID = 0,
    TRANSACTION_ID = 1,
    PERCENTAGE = 2,
    ALLOW_CANCEL = 3,
    STATUS = 4,
    ROLE = 5,
    CALLER_ACTIVE = 6,
    ELAPSED_TIME = 7,
    REMAINING_TIME = 8,
    SPEED = 9,
    DOWNLOAD_SIZE_REMAINING = 10,
    UID = 11,
    PACKAGE = 12,
    ITEM_PROGRESS = 13,
    TRANSACTION_FLAGS = 14,
    INVALID = 15,
}

export namespace RestartEnum {
    export const $gtype: GObject.GType<RestartEnum>;
}

export enum RestartEnum {
    UNKNOWN = 0,
    NONE = 1,
    APPLICATION = 2,
    SESSION = 3,
    SYSTEM = 4,
    SECURITY_SESSION = 5,
    SECURITY_SYSTEM = 6,
    LAST = 7,
}

export namespace RoleEnum {
    export const $gtype: GObject.GType<RoleEnum>;
}

export enum RoleEnum {
    UNKNOWN = 0,
    CANCEL = 1,
    DEPENDS_ON = 2,
    GET_DETAILS = 3,
    GET_FILES = 4,
    GET_PACKAGES = 5,
    GET_REPO_LIST = 6,
    REQUIRED_BY = 7,
    GET_UPDATE_DETAIL = 8,
    GET_UPDATES = 9,
    INSTALL_FILES = 10,
    INSTALL_PACKAGES = 11,
    INSTALL_SIGNATURE = 12,
    REFRESH_CACHE = 13,
    REMOVE_PACKAGES = 14,
    REPO_ENABLE = 15,
    REPO_SET_DATA = 16,
    RESOLVE = 17,
    SEARCH_DETAILS = 18,
    SEARCH_FILE = 19,
    SEARCH_GROUP = 20,
    SEARCH_NAME = 21,
    UPDATE_PACKAGES = 22,
    WHAT_PROVIDES = 23,
    ACCEPT_EULA = 24,
    DOWNLOAD_PACKAGES = 25,
    GET_DISTRO_UPGRADES = 26,
    GET_CATEGORIES = 27,
    GET_OLD_TRANSACTIONS = 28,
    REPAIR_SYSTEM = 29,
    GET_DETAILS_LOCAL = 30,
    GET_FILES_LOCAL = 31,
    REPO_REMOVE = 32,
    UPGRADE_SYSTEM = 33,
    LAST = 34,
}

export namespace SigTypeEnum {
    export const $gtype: GObject.GType<SigTypeEnum>;
}

export enum SigTypeEnum {
    UNKNOWN = 0,
    GPG = 1,
    LAST = 2,
}

export namespace StatusEnum {
    export const $gtype: GObject.GType<StatusEnum>;
}

export enum StatusEnum {
    UNKNOWN = 0,
    WAIT = 1,
    SETUP = 2,
    RUNNING = 3,
    QUERY = 4,
    INFO = 5,
    REMOVE = 6,
    REFRESH_CACHE = 7,
    DOWNLOAD = 8,
    INSTALL = 9,
    UPDATE = 10,
    CLEANUP = 11,
    OBSOLETE = 12,
    DEP_RESOLVE = 13,
    SIG_CHECK = 14,
    TEST_COMMIT = 15,
    COMMIT = 16,
    REQUEST = 17,
    FINISHED = 18,
    CANCEL = 19,
    DOWNLOAD_REPOSITORY = 20,
    DOWNLOAD_PACKAGELIST = 21,
    DOWNLOAD_FILELIST = 22,
    DOWNLOAD_CHANGELOG = 23,
    DOWNLOAD_GROUP = 24,
    DOWNLOAD_UPDATEINFO = 25,
    REPACKAGING = 26,
    LOADING_CACHE = 27,
    SCAN_APPLICATIONS = 28,
    GENERATE_PACKAGE_LIST = 29,
    WAITING_FOR_LOCK = 30,
    WAITING_FOR_AUTH = 31,
    SCAN_PROCESS_LIST = 32,
    CHECK_EXECUTABLE_FILES = 33,
    CHECK_LIBRARIES = 34,
    COPY_FILES = 35,
    RUN_HOOK = 36,
    LAST = 37,
}

export namespace TransactionFlagEnum {
    export const $gtype: GObject.GType<TransactionFlagEnum>;
}

export enum TransactionFlagEnum {
    NONE = 0,
    ONLY_TRUSTED = 1,
    SIMULATE = 2,
    ONLY_DOWNLOAD = 3,
    ALLOW_REINSTALL = 4,
    JUST_REINSTALL = 5,
    ALLOW_DOWNGRADE = 6,
    LAST = 7,
}

export namespace UpdateStateEnum {
    export const $gtype: GObject.GType<UpdateStateEnum>;
}

export enum UpdateStateEnum {
    UNKNOWN = 0,
    STABLE = 1,
    UNSTABLE = 2,
    TESTING = 3,
    LAST = 4,
}

export namespace UpgradeKindEnum {
    export const $gtype: GObject.GType<UpgradeKindEnum>;
}

export enum UpgradeKindEnum {
    UNKNOWN = 0,
    MINIMAL = 1,
    DEFAULT = 2,
    COMPLETE = 3,
    LAST = 4,
}

export namespace Category {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        cat_id: string;
        catId: string;
        icon: string;
        name: string;
        parent_id: string;
        parentId: string;
        summary: string;
    }
}

export class Category extends Source {
    static $gtype: GObject.GType<Category>;

    constructor(properties?: Partial<Category.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Category.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cat_id: string;
    catId: string;
    icon: string;
    name: string;
    parent_id: string;
    parentId: string;
    summary: string;

    // Fields
    priv: CategoryPrivate | any;

    // Constructors

    static ['new'](): Category;

    // Members

    get_icon(): string;

    get_id(): string;

    get_name(): string;

    get_parent_id(): string;

    get_summary(): string;

    set_icon(icon: string): void;

    set_id(cat_id: string): void;

    set_name(name: string): void;

    set_parent_id(parent_id: string): void;

    set_summary(summary: string): void;
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        background: boolean;
        cache_age: number;
        cacheAge: number;
        idle: boolean;
        interactive: boolean;
        locale: string;
    }
}

export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    background: boolean;
    cache_age: number;
    cacheAge: number;
    idle: boolean;
    interactive: boolean;
    locale: string;

    // Fields
    priv: ClientPrivate;

    // Constructors

    static ['new'](): Client;

    // Members

    accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    accept_eula_async(
        eula_id: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    adopt(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    adopt_async(
        transaction_id: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    depends_on(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    depends_on_async(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    download_packages(
        package_ids: string[],
        directory: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    download_packages_async(
        package_ids: string[],
        directory: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generic_finish(res: Gio.AsyncResult): Results;

    get_background(): boolean;

    get_cache_age(): number;

    get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_categories_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_details(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_details_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_details_local(
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_details_local_async(
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_distro_upgrades_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_files(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_files_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_files_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_files_local_async(
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_idle(): boolean;

    get_interactive(): boolean;

    get_locale(): string;

    get_old_transactions(
        number: number,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_old_transactions_async(
        number: number,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_packages(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_packages_async(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_progress(transaction_id: string, cancellable?: Gio.Cancellable | null): Progress;

    get_progress_async(
        transaction_id: string,
        cancellable?: Gio.Cancellable | null,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_progress_finish(res: Gio.AsyncResult): Progress;

    get_repo_list(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_repo_list_async(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_update_detail(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_update_detail_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_updates(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_updates_async(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_files(
        transaction_flags: Bitfield,
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    install_files_async(
        transaction_flags: Bitfield,
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_packages(
        transaction_flags: Bitfield,
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    install_packages_async(
        transaction_flags: Bitfield,
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_signature(
        type: SigTypeEnum,
        key_id: string,
        package_id: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    install_signature_async(
        type: SigTypeEnum,
        key_id: string,
        package_id: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_cache(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    refresh_cache_async(
        force: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_packages(
        transaction_flags: Bitfield,
        package_ids: string[],
        allow_deps: boolean,
        autoremove: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    remove_packages_async(
        transaction_flags: Bitfield,
        package_ids: string[],
        allow_deps: boolean,
        autoremove: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    repair_system(
        transaction_flags: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    repair_system_async(
        transaction_flags: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    repo_enable(
        repo_id: string,
        enabled: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    repo_enable_async(
        repo_id: string,
        enabled: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    repo_remove(
        transaction_flags: Bitfield,
        repo_id: string,
        autoremove: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    repo_remove_async(
        transaction_flags: Bitfield,
        repo_id: string,
        autoremove: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    repo_set_data(
        repo_id: string,
        parameter: string,
        value: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    repo_set_data_async(
        repo_id: string,
        parameter: string,
        value: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    required_by(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    required_by_async(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve(
        filters: Bitfield,
        packages: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    resolve_async(
        filters: Bitfield,
        packages: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_details(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_details_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_files(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_files_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_groups(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_groups_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_names(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_names_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_background(background: boolean): void;

    set_cache_age(cache_age: number): void;

    set_interactive(interactive: boolean): void;

    set_locale(locale: string): void;

    update_packages(
        transaction_flags: Bitfield,
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    update_packages_async(
        transaction_flags: Bitfield,
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    upgrade_system(
        transaction_flags: Bitfield,
        distro_id: string,
        upgrade_kind: UpgradeKindEnum,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    upgrade_system_async(
        transaction_flags: Bitfield,
        distro_id: string,
        upgrade_kind: UpgradeKindEnum,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    what_provides(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    what_provides_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_changed(): void;

    static create_helper_argv_envp(argv: string, envp_out: string): boolean;
}

export namespace ClientHelper {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientHelper extends GObject.Object {
    static $gtype: GObject.GType<ClientHelper>;

    constructor(properties?: Partial<ClientHelper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientHelper.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ClientHelperPrivate;

    // Constructors

    static ['new'](): ClientHelper;

    // Members

    is_active(): boolean;

    start(socket_filename: string, argv: string, envp: string): boolean;

    start_with_socket(socket: Gio.Socket, argv: string, envp: string): boolean;

    stop(): boolean;
}

export namespace Control {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backend_author: string;
        backendAuthor: string;
        backend_description: string;
        backendDescription: string;
        backend_name: string;
        backendName: string;
        connected: boolean;
        distro_id: string;
        distroId: string;
        filters: number;
        groups: number;
        locked: boolean;
        mime_types: string[];
        mimeTypes: string[];
        network_state: NetworkEnum;
        networkState: NetworkEnum;
        provides: number;
        roles: number;
        version_major: number;
        versionMajor: number;
        version_micro: number;
        versionMicro: number;
        version_minor: number;
        versionMinor: number;
    }
}

export class Control extends GObject.Object {
    static $gtype: GObject.GType<Control>;

    constructor(properties?: Partial<Control.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Control.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend_author: string;
    backendAuthor: string;
    backend_description: string;
    backendDescription: string;
    backend_name: string;
    backendName: string;
    connected: boolean;
    distro_id: string;
    distroId: string;
    filters: number;
    groups: number;
    locked: boolean;
    mime_types: string[];
    mimeTypes: string[];
    network_state: NetworkEnum;
    networkState: NetworkEnum;
    provides: number;
    roles: number;
    version_major: number;
    versionMajor: number;
    version_micro: number;
    versionMicro: number;
    version_minor: number;
    versionMinor: number;

    // Fields
    priv: ControlPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'repo-list-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'repo-list-changed', callback: (_source: this) => void): number;

    emit(signal: 'repo-list-changed'): void;

    connect(signal: 'restart-schedule', callback: (_source: this) => void): number;

    connect_after(signal: 'restart-schedule', callback: (_source: this) => void): number;

    emit(signal: 'restart-schedule'): void;

    connect(signal: 'transaction-list-changed', callback: (_source: this, transaction_ids: string[]) => void): number;

    connect_after(
        signal: 'transaction-list-changed',
        callback: (_source: this, transaction_ids: string[]) => void
    ): number;

    emit(signal: 'transaction-list-changed', transaction_ids: string[]): void;

    connect(signal: 'updates-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'updates-changed', callback: (_source: this) => void): number;

    emit(signal: 'updates-changed'): void;

    // Constructors

    static ['new'](): Control;

    // Members

    can_authorize_async(
        action_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum;

    get_daemon_state_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_daemon_state_finish(res: Gio.AsyncResult): string;

    get_properties(cancellable?: Gio.Cancellable | null): boolean;

    get_properties_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_properties_finish(res: Gio.AsyncResult): boolean;

    get_tid_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_tid_finish(res: Gio.AsyncResult): string;

    get_time_since_action_async(
        role: RoleEnum,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_time_since_action_finish(res: Gio.AsyncResult): number;

    get_transaction_list(cancellable?: Gio.Cancellable | null): string[];

    get_transaction_list_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_transaction_list_finish(res: Gio.AsyncResult): string[];

    set_proxy(proxy_http: string, proxy_ftp: string, cancellable?: Gio.Cancellable | null): boolean;

    set_proxy2(
        proxy_http: string,
        proxy_https: string,
        proxy_ftp: string,
        proxy_socks: string,
        no_proxy: string,
        pac: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_proxy2_async(
        proxy_http: string,
        proxy_https: string,
        proxy_ftp: string,
        proxy_socks: string,
        no_proxy: string,
        pac: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_proxy_async(
        proxy_http: string,
        proxy_ftp: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_proxy_finish(res: Gio.AsyncResult): boolean;

    suggest_daemon_quit(cancellable?: Gio.Cancellable | null): boolean;

    suggest_daemon_quit_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean;

    vfunc_connection_changed(connected: boolean): void;

    vfunc_locked(is_locked: boolean): void;

    vfunc_network_state_changed(): void;

    vfunc_repo_list_changed(): void;

    vfunc_restart_schedule(): void;

    vfunc_transaction_list_changed(transaction_ids: string): void;

    vfunc_updates_changed(): void;
}

export namespace Desktop {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Desktop extends GObject.Object {
    static $gtype: GObject.GType<Desktop>;

    constructor(properties?: Partial<Desktop.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Desktop.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DesktopPrivate;

    // Constructors

    static ['new'](): Desktop;

    // Members

    get_files_for_package(_package: string): string[];

    get_package_for_file(filename: string): string;

    get_shown_for_package(_package: string): string[];

    open_database(): boolean;
}

export namespace Details {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        description: string;
        group: GroupEnum;
        license: string;
        package_id: string;
        packageId: string;
        size: number;
        summary: string;
        url: string;
    }
}

export class Details extends Source {
    static $gtype: GObject.GType<Details>;

    constructor(properties?: Partial<Details.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Details.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    group: GroupEnum;
    license: string;
    package_id: string;
    packageId: string;
    size: number;
    summary: string;
    url: string;

    // Fields
    priv: DetailsPrivate | any;

    // Constructors

    static ['new'](): Details;

    // Members

    get_description(): string;

    get_group(): GroupEnum;

    get_license(): string;

    get_package_id(): string;

    get_size(): number;

    get_summary(): string;

    get_url(): string;
}

export namespace DistroUpgrade {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        name: string;
        state: DistroUpgradeEnum;
        summary: string;
    }
}

export class DistroUpgrade extends Source {
    static $gtype: GObject.GType<DistroUpgrade>;

    constructor(properties?: Partial<DistroUpgrade.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DistroUpgrade.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    state: DistroUpgradeEnum;
    summary: string;

    // Fields
    priv: DistroUpgradePrivate | any;

    // Constructors

    static ['new'](): DistroUpgrade;

    // Members

    get_id(): string;

    get_state(): DistroUpgradeEnum;

    get_summary(): string;
}

export namespace Error {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        code: ErrorEnum;
        details: string;
    }
}

export class Error extends Source {
    static $gtype: GObject.GType<Error>;

    constructor(properties?: Partial<Error.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Error.ConstructorProperties>, ...args: any[]): void;

    // Properties
    code: ErrorEnum;
    details: string;

    // Fields
    priv: ErrorPrivate | any;

    // Constructors

    static ['new'](): Error;

    // Members

    get_code(): ErrorEnum;

    get_details(): string;
}

export namespace EulaRequired {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        eula_id: string;
        eulaId: string;
        license_agreement: string;
        licenseAgreement: string;
        package_id: string;
        packageId: string;
        vendor_name: string;
        vendorName: string;
    }
}

export class EulaRequired extends Source {
    static $gtype: GObject.GType<EulaRequired>;

    constructor(properties?: Partial<EulaRequired.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EulaRequired.ConstructorProperties>, ...args: any[]): void;

    // Properties
    eula_id: string;
    eulaId: string;
    license_agreement: string;
    licenseAgreement: string;
    package_id: string;
    packageId: string;
    vendor_name: string;
    vendorName: string;

    // Fields
    priv: EulaRequiredPrivate | any;

    // Constructors

    static ['new'](): EulaRequired;

    // Members

    get_eula_id(): string;

    get_license_agreement(): string;

    get_package_id(): string;

    get_vendor_name(): string;
}

export namespace Files {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        files: string[];
        package_id: string;
        packageId: string;
    }
}

export class Files extends Source {
    static $gtype: GObject.GType<Files>;

    constructor(properties?: Partial<Files.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Files.ConstructorProperties>, ...args: any[]): void;

    // Properties
    files: string[];
    package_id: string;
    packageId: string;

    // Fields
    priv: FilesPrivate | any;

    // Constructors

    static ['new'](): Files;

    // Members

    get_files(): string[];

    get_package_id(): string;
}

export namespace ItemProgress {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        package_id: string;
        packageId: string;
        percentage: number;
        status: number;
    }
}

export class ItemProgress extends Source {
    static $gtype: GObject.GType<ItemProgress>;

    constructor(properties?: Partial<ItemProgress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ItemProgress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    package_id: string;
    packageId: string;
    percentage: number;
    status: number;

    // Fields
    priv: ItemProgressPrivate | any;

    // Constructors

    static ['new'](): ItemProgress;

    // Members

    get_package_id(): string;

    get_percentage(): number;

    get_status(): StatusEnum;
}

export namespace MediaChangeRequired {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        media_id: string;
        mediaId: string;
        media_text: string;
        mediaText: string;
        media_type: MediaTypeEnum;
        mediaType: MediaTypeEnum;
    }
}

export class MediaChangeRequired extends Source {
    static $gtype: GObject.GType<MediaChangeRequired>;

    constructor(properties?: Partial<MediaChangeRequired.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaChangeRequired.ConstructorProperties>, ...args: any[]): void;

    // Properties
    media_id: string;
    mediaId: string;
    media_text: string;
    mediaText: string;
    media_type: MediaTypeEnum;
    mediaType: MediaTypeEnum;

    // Fields
    priv: MediaChangeRequiredPrivate | any;

    // Constructors

    static ['new'](): MediaChangeRequired;
}

export namespace Package {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        description: string;
        group: GroupEnum;
        info: InfoEnum;
        license: string;
        package_id: string;
        packageId: string;
        size: number;
        summary: string;
        update_bugzilla_urls: string[];
        updateBugzillaUrls: string[];
        update_changelog: string;
        updateChangelog: string;
        update_cve_urls: string[];
        updateCveUrls: string[];
        update_issued: string;
        updateIssued: string;
        update_obsoletes: string;
        updateObsoletes: string;
        update_restart: RestartEnum;
        updateRestart: RestartEnum;
        update_state: UpdateStateEnum;
        updateState: UpdateStateEnum;
        update_text: string;
        updateText: string;
        update_updated: string;
        updateUpdated: string;
        update_updates: string;
        updateUpdates: string;
        update_vendor_urls: string[];
        updateVendorUrls: string[];
        url: string;
    }
}

export class Package extends Source {
    static $gtype: GObject.GType<Package>;

    constructor(properties?: Partial<Package.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Package.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    group: GroupEnum;
    info: InfoEnum;
    license: string;
    package_id: string;
    packageId: string;
    size: number;
    summary: string;
    update_bugzilla_urls: string[];
    updateBugzillaUrls: string[];
    update_changelog: string;
    updateChangelog: string;
    update_cve_urls: string[];
    updateCveUrls: string[];
    update_issued: string;
    updateIssued: string;
    update_obsoletes: string;
    updateObsoletes: string;
    update_restart: RestartEnum;
    updateRestart: RestartEnum;
    update_state: UpdateStateEnum;
    updateState: UpdateStateEnum;
    update_text: string;
    updateText: string;
    update_updated: string;
    updateUpdated: string;
    update_updates: string;
    updateUpdates: string;
    update_vendor_urls: string[];
    updateVendorUrls: string[];
    url: string;

    // Fields
    priv: PackagePrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): Package;

    // Members

    equal(package2: Package): boolean;

    equal_id(package2: Package): boolean;

    get_arch(): string;

    get_data(): string;
    get_data(...args: never[]): never;

    get_id(): string;

    get_info(): InfoEnum;

    get_name(): string;

    get_summary(): string;

    get_version(): string;

    parse(data: string): boolean;

    print(): void;

    set_id(package_id: string): boolean;

    set_info(info: InfoEnum): void;

    set_summary(summary: string): void;

    vfunc_changed(): void;

    static id_build(name: string, version: string, arch: string, data: string): string;

    static id_check(package_id: string): boolean;

    static id_equal_fuzzy_arch(package_id1: string, package_id2: string): boolean;

    static id_split(package_id: string): string[];

    static id_to_printable(package_id: string): string;

    static ids_add_id(package_ids: string, package_id: string): string[];

    static ids_add_ids(package_ids: string, package_ids_new: string): string[];

    static ids_check(package_ids: string): boolean;

    static ids_from_id(package_id: string): string[];

    static ids_from_string(package_id: string): string[];

    static ids_present_id(package_ids: string, package_id: string): boolean;

    static ids_remove_id(package_ids: string, package_id: string): string[];

    static ids_to_string(package_ids: string): string;
}

export namespace PackageSack {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PackageSack extends GObject.Object {
    static $gtype: GObject.GType<PackageSack>;

    constructor(properties?: Partial<PackageSack.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PackageSack.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PackageSackPrivate;

    // Constructors

    static ['new'](): PackageSack;

    // Members

    add_package(_package: Package): boolean;

    add_package_by_id(package_id: string): boolean;

    add_packages_from_file(file: Gio.File): boolean;

    clear(): void;

    filter(filter_cb: PackageSackFilterFunc): PackageSack;

    filter_by_info(info: InfoEnum): PackageSack;

    find_by_id(package_id: string): Package;

    find_by_id_name_arch(package_id: string): Package;

    get_array(): Package[];

    get_details(cancellable?: Gio.Cancellable | null): boolean;

    get_details_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_ids(): string[];

    get_size(): number;

    get_total_bytes(): number;

    get_update_detail(cancellable?: Gio.Cancellable | null): boolean;

    get_update_detail_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    merge_generic_finish(res: Gio.AsyncResult): boolean;

    remove_by_filter(filter_cb: PackageSackFilterFunc): boolean;

    remove_package(_package: Package): boolean;

    remove_package_by_id(package_id: string): boolean;

    resolve(cancellable?: Gio.Cancellable | null): boolean;

    resolve_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    sort(type: PackageSackSortType): void;

    to_file(file: Gio.File): boolean;

    vfunc_changed(): void;
}

export namespace Progress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        allow_cancel: boolean;
        allowCancel: boolean;
        caller_active: boolean;
        callerActive: boolean;
        download_size_remaining: number;
        downloadSizeRemaining: number;
        elapsed_time: number;
        elapsedTime: number;
        item_progress: ItemProgress;
        itemProgress: ItemProgress;
        package: Package;
        package_id: string;
        packageId: string;
        percentage: number;
        remaining_time: number;
        remainingTime: number;
        role: number;
        speed: number;
        status: number;
        transaction_flags: number;
        transactionFlags: number;
        transaction_id: string;
        transactionId: string;
        uid: number;
    }
}

export class Progress extends GObject.Object {
    static $gtype: GObject.GType<Progress>;

    constructor(properties?: Partial<Progress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Progress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_cancel: boolean;
    allowCancel: boolean;
    caller_active: boolean;
    callerActive: boolean;
    download_size_remaining: number;
    downloadSizeRemaining: number;
    elapsed_time: number;
    elapsedTime: number;
    item_progress: ItemProgress;
    itemProgress: ItemProgress;
    'package': Package;
    package_id: string;
    packageId: string;
    percentage: number;
    remaining_time: number;
    remainingTime: number;
    role: number;
    speed: number;
    status: number;
    transaction_flags: number;
    transactionFlags: number;
    transaction_id: string;
    transactionId: string;
    uid: number;

    // Fields
    priv: ProgressPrivate;

    // Constructors

    static ['new'](): Progress;

    // Members

    get_allow_cancel(): boolean;

    get_caller_active(): boolean;

    get_download_size_remaining(): number;

    get_elapsed_time(): number;

    get_item_progress(): ItemProgress;

    get_package(): Package;

    get_package_id(): string;

    get_percentage(): number;

    get_remaining_time(): number;

    get_role(): RoleEnum;

    get_speed(): number;

    get_status(): StatusEnum;

    get_transaction_flags(): number;

    get_transaction_id(): string;

    get_uid(): number;

    set_allow_cancel(allow_cancel: boolean): boolean;

    set_caller_active(caller_active: boolean): boolean;

    set_download_size_remaining(download_size_remaining: number): boolean;

    set_elapsed_time(elapsed_time: number): boolean;

    set_item_progress(item_progress: ItemProgress): boolean;

    set_package(_package: Package): boolean;

    set_package_id(package_id: string): boolean;

    set_percentage(percentage: number): boolean;

    set_remaining_time(remaining_time: number): boolean;

    set_role(role: RoleEnum): boolean;

    set_speed(speed: number): boolean;

    set_status(status: StatusEnum): boolean;

    set_transaction_flags(transaction_flags: number): boolean;

    set_transaction_id(transaction_id: string): boolean;

    set_uid(uid: number): boolean;
}

export namespace RepoDetail {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        description: string;
        enabled: boolean;
        repo_id: string;
        repoId: string;
    }
}

export class RepoDetail extends Source {
    static $gtype: GObject.GType<RepoDetail>;

    constructor(properties?: Partial<RepoDetail.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoDetail.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    enabled: boolean;
    repo_id: string;
    repoId: string;

    // Fields
    priv: RepoDetailPrivate | any;

    // Constructors

    static ['new'](): RepoDetail;

    // Members

    get_description(): string;

    get_enabled(): boolean;

    get_id(): string;
}

export namespace RepoSignatureRequired {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        key_fingerprint: string;
        keyFingerprint: string;
        key_id: string;
        keyId: string;
        key_timestamp: string;
        keyTimestamp: string;
        key_url: string;
        keyUrl: string;
        key_userid: string;
        keyUserid: string;
        package_id: string;
        packageId: string;
        repository_name: string;
        repositoryName: string;
        type: SigTypeEnum;
    }
}

export class RepoSignatureRequired extends Source {
    static $gtype: GObject.GType<RepoSignatureRequired>;

    constructor(properties?: Partial<RepoSignatureRequired.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepoSignatureRequired.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key_fingerprint: string;
    keyFingerprint: string;
    key_id: string;
    keyId: string;
    key_timestamp: string;
    keyTimestamp: string;
    key_url: string;
    keyUrl: string;
    key_userid: string;
    keyUserid: string;
    package_id: string;
    packageId: string;
    repository_name: string;
    repositoryName: string;
    type: SigTypeEnum;

    // Fields
    priv: RepoSignatureRequiredPrivate | any;

    // Constructors

    static ['new'](): RepoSignatureRequired;
}

export namespace RequireRestart {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        package_id: string;
        packageId: string;
        restart: RestartEnum;
    }
}

export class RequireRestart extends Source {
    static $gtype: GObject.GType<RequireRestart>;

    constructor(properties?: Partial<RequireRestart.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RequireRestart.ConstructorProperties>, ...args: any[]): void;

    // Properties
    package_id: string;
    packageId: string;
    restart: RestartEnum;

    // Fields
    priv: RequireRestartPrivate | any;

    // Constructors

    static ['new'](): RequireRestart;
}

export namespace Results {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        inputs: number;
        progress: Progress;
        role: RoleEnum;
        transaction_flags: number;
        transactionFlags: number;
    }
}

export class Results extends GObject.Object {
    static $gtype: GObject.GType<Results>;

    constructor(properties?: Partial<Results.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Results.ConstructorProperties>, ...args: any[]): void;

    // Properties
    inputs: number;
    progress: Progress;
    role: RoleEnum;
    transaction_flags: number;
    transactionFlags: number;

    // Fields
    priv: ResultsPrivate;

    // Constructors

    static ['new'](): Results;

    // Members

    add_category(item: Category): boolean;

    add_details(item: Details): boolean;

    add_distro_upgrade(item: DistroUpgrade): boolean;

    add_eula_required(item: EulaRequired): boolean;

    add_files(item: Files): boolean;

    add_media_change_required(item: MediaChangeRequired): boolean;

    add_package(item: Package): boolean;

    add_repo_detail(item: RepoDetail): boolean;

    add_repo_signature_required(item: RepoSignatureRequired): boolean;

    add_require_restart(item: RequireRestart): boolean;

    add_transaction(item: TransactionPast): boolean;

    add_update_detail(item: UpdateDetail): boolean;

    get_category_array(): Category[];

    get_details_array(): Details[];

    get_distro_upgrade_array(): DistroUpgrade[];

    get_error_code(): Error;

    get_eula_required_array(): EulaRequired[];

    get_exit_code(): ExitEnum;

    get_files_array(): Files[];

    get_media_change_required_array(): MediaChangeRequired[];

    get_package_array(): Package[];

    get_package_sack(): PackageSack;

    get_repo_detail_array(): RepoDetail[];

    get_repo_signature_required_array(): RepoSignatureRequired[];

    get_require_restart_array(): RequireRestart[];

    get_require_restart_worst(): RestartEnum;

    get_role(): RoleEnum;

    get_transaction_array(): TransactionPast[];

    get_transaction_flags(): Bitfield;

    get_update_detail_array(): UpdateDetail[];

    set_error_code(item: Error): boolean;

    set_exit_code(exit_enum: ExitEnum): boolean;

    set_role(role: RoleEnum): boolean;
}

export namespace Source {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        role: RoleEnum;
        transaction_id: string;
        transactionId: string;
    }
}

export class Source extends GObject.Object {
    static $gtype: GObject.GType<Source>;

    constructor(properties?: Partial<Source.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Source.ConstructorProperties>, ...args: any[]): void;

    // Properties
    role: RoleEnum;
    transaction_id: string;
    transactionId: string;

    // Fields
    priv: SourcePrivate;

    // Constructors

    static ['new'](): Source;
}

export namespace Task {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;

        allow_downgrade: boolean;
        allowDowngrade: boolean;
        allow_reinstall: boolean;
        allowReinstall: boolean;
        only_download: boolean;
        onlyDownload: boolean;
        only_trusted: boolean;
        onlyTrusted: boolean;
        simulate: boolean;
    }
}

export class Task extends Client {
    static $gtype: GObject.GType<Task>;

    constructor(properties?: Partial<Task.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Task.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_downgrade: boolean;
    allowDowngrade: boolean;
    allow_reinstall: boolean;
    allowReinstall: boolean;
    only_download: boolean;
    onlyDownload: boolean;
    only_trusted: boolean;
    onlyTrusted: boolean;
    simulate: boolean;

    // Fields
    priv: TaskPrivate | any;

    // Constructors

    static ['new'](): Task;

    // Members

    depends_on_async(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    depends_on_sync(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    download_packages_async(
        package_ids: string[],
        directory: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    download_packages_sync(
        package_ids: string[],
        directory: string,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    generic_finish(res: Gio.AsyncResult): Results;

    get_allow_downgrade(): boolean;

    get_allow_reinstall(): boolean;

    get_categories_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    get_details_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_details_sync(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_files_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_files_sync(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_only_download(): boolean;

    get_only_trusted(): boolean;

    get_packages_async(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_packages_sync(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_repo_list_async(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_repo_list_sync(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_simulate(): boolean;

    get_update_detail_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_update_detail_sync(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    get_updates_async(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_updates_sync(
        filters: Bitfield,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    install_files_async(
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_files_async(...args: never[]): never;

    install_files_sync(
        files: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    install_packages_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_packages_async(...args: never[]): never;

    install_packages_sync(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    refresh_cache_async(
        force: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_cache_sync(
        force: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    remove_packages_async(
        package_ids: string[],
        allow_deps: boolean,
        autoremove: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_packages_async(...args: never[]): never;

    remove_packages_sync(
        package_ids: string[],
        allow_deps: boolean,
        autoremove: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    repair_system_async(
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    repair_system_async(...args: never[]): never;

    repair_system_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results;

    repo_enable_async(
        repo_id: string,
        enabled: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    repo_enable_sync(
        repo_id: string,
        enabled: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    required_by_async(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    required_by_sync(
        filters: Bitfield,
        package_ids: string[],
        recursive: boolean,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    resolve_async(
        filters: Bitfield,
        packages: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    resolve_sync(
        filters: Bitfield,
        packages: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_details_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_details_sync(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_files_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_files_sync(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_groups_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_groups_sync(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    search_names_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    search_names_sync(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    set_allow_downgrade(allow_downgrade: boolean): void;

    set_allow_reinstall(allow_reinstall: boolean): void;

    set_only_download(only_download: boolean): void;

    set_only_trusted(only_trusted: boolean): void;

    set_simulate(simulate: boolean): void;

    update_packages_async(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    update_packages_async(...args: never[]): never;

    update_packages_sync(
        package_ids: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    upgrade_system_async(
        distro_id: string,
        upgrade_kind: UpgradeKindEnum,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    upgrade_system_async(...args: never[]): never;

    upgrade_system_sync(
        distro_id: string,
        upgrade_kind: UpgradeKindEnum,
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    user_accepted(request: number): boolean;

    user_declined(request: number): boolean;

    what_provides_async(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback,
        callback_ready?: Gio.AsyncReadyCallback<this> | null
    ): void;

    what_provides_sync(
        filters: Bitfield,
        values: string[],
        cancellable: Gio.Cancellable | null,
        progress_callback: ProgressCallback
    ): Results;

    vfunc_eula_question(request: number, results: Results): void;

    vfunc_key_question(request: number, results: Results): void;

    vfunc_media_change_question(request: number, results: Results): void;

    vfunc_repair_question(request: number, results: Results): void;

    vfunc_simulate_question(request: number, results: Results): void;

    vfunc_untrusted_question(request: number, results: Results): void;
}

export namespace TransactionList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TransactionList extends GObject.Object {
    static $gtype: GObject.GType<TransactionList>;

    constructor(properties?: Partial<TransactionList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TransactionList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TransactionListPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'added', callback: (_source: this, tid: string) => void): number;

    connect_after(signal: 'added', callback: (_source: this, tid: string) => void): number;

    emit(signal: 'added', tid: string): void;

    connect(signal: 'removed', callback: (_source: this, tid: string) => void): number;

    connect_after(signal: 'removed', callback: (_source: this, tid: string) => void): number;

    emit(signal: 'removed', tid: string): void;

    // Constructors

    static ['new'](): TransactionList;

    // Members

    get_ids(): string[];

    vfunc_added(tid: string): void;

    vfunc_removed(tid: string): void;
}

export namespace TransactionPast {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        cmdline: string;
        data: string;
        duration: number;
        role: RoleEnum;
        succeeded: boolean;
        tid: string;
        timespec: string;
        uid: number;
    }
}

export class TransactionPast extends Source {
    static $gtype: GObject.GType<TransactionPast>;

    constructor(properties?: Partial<TransactionPast.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TransactionPast.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cmdline: string;
    data: string;
    duration: number;
    role: RoleEnum;
    succeeded: boolean;
    tid: string;
    timespec: string;
    uid: number;

    // Fields
    priv: TransactionPastPrivate | any;

    // Constructors

    static ['new'](): TransactionPast;

    // Members

    get_cmdline(): string;

    get_data(): string;
    get_data(...args: never[]): never;

    get_datetime(): GLib.DateTime;

    get_duration(): number;

    get_id(): string;

    get_role(): RoleEnum;

    get_succeeded(): boolean;

    get_timespec(): string;

    get_timestamp(): number;

    get_uid(): number;
}

export namespace UpdateDetail {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        bugzilla_urls: string[];
        bugzillaUrls: string[];
        changelog: string;
        cve_urls: string[];
        cveUrls: string[];
        issued: string;
        obsoletes: string[];
        package_id: string;
        packageId: string;
        restart: RestartEnum;
        state: UpdateStateEnum;
        update_text: string;
        updateText: string;
        updated: string;
        updates: string[];
        vendor_urls: string[];
        vendorUrls: string[];
    }
}

export class UpdateDetail extends Source {
    static $gtype: GObject.GType<UpdateDetail>;

    constructor(properties?: Partial<UpdateDetail.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UpdateDetail.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bugzilla_urls: string[];
    bugzillaUrls: string[];
    changelog: string;
    cve_urls: string[];
    cveUrls: string[];
    issued: string;
    obsoletes: string[];
    package_id: string;
    packageId: string;
    restart: RestartEnum;
    state: UpdateStateEnum;
    update_text: string;
    updateText: string;
    updated: string;
    updates: string[];
    vendor_urls: string[];
    vendorUrls: string[];

    // Fields
    priv: UpdateDetailPrivate | any;

    // Constructors

    static ['new'](): UpdateDetail;

    // Members

    get_bugzilla_urls(): string[];

    get_changelog(): string;

    get_cve_urls(): string[];

    get_issued(): string;

    get_obsoletes(): string[];

    get_package_id(): string;

    get_restart(): RestartEnum;

    get_state(): UpdateStateEnum;

    get_update_text(): string;

    get_updated(): string;

    get_updates(): string[];

    get_vendor_urls(): string[];
}

export class CategoryPrivate {
    static $gtype: GObject.GType<CategoryPrivate>;

    constructor(copy: CategoryPrivate);
}

export class ClientHelperPrivate {
    static $gtype: GObject.GType<ClientHelperPrivate>;

    constructor(copy: ClientHelperPrivate);
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class ControlPrivate {
    static $gtype: GObject.GType<ControlPrivate>;

    constructor(copy: ControlPrivate);
}

export class DesktopPrivate {
    static $gtype: GObject.GType<DesktopPrivate>;

    constructor(copy: DesktopPrivate);
}

export class DetailsPrivate {
    static $gtype: GObject.GType<DetailsPrivate>;

    constructor(copy: DetailsPrivate);
}

export class DistroUpgradePrivate {
    static $gtype: GObject.GType<DistroUpgradePrivate>;

    constructor(copy: DistroUpgradePrivate);
}

export class EnumMatch {
    static $gtype: GObject.GType<EnumMatch>;

    constructor(
        properties?: Partial<{
            value?: number;
            string?: string;
        }>
    );

    constructor(copy: EnumMatch);

    // Fields
    value: number;
    string: string;
}

export class ErrorPrivate {
    static $gtype: GObject.GType<ErrorPrivate>;

    constructor(copy: ErrorPrivate);
}

export class EulaRequiredPrivate {
    static $gtype: GObject.GType<EulaRequiredPrivate>;

    constructor(copy: EulaRequiredPrivate);
}

export class FilesPrivate {
    static $gtype: GObject.GType<FilesPrivate>;

    constructor(copy: FilesPrivate);
}

export class ItemProgressPrivate {
    static $gtype: GObject.GType<ItemProgressPrivate>;

    constructor(copy: ItemProgressPrivate);
}

export class MediaChangeRequiredPrivate {
    static $gtype: GObject.GType<MediaChangeRequiredPrivate>;

    constructor(copy: MediaChangeRequiredPrivate);
}

export class PackagePrivate {
    static $gtype: GObject.GType<PackagePrivate>;

    constructor(copy: PackagePrivate);
}

export class PackageSackPrivate {
    static $gtype: GObject.GType<PackageSackPrivate>;

    constructor(copy: PackageSackPrivate);
}

export class PackageSackResults {
    static $gtype: GObject.GType<PackageSackResults>;

    constructor(copy: PackageSackResults);
}

export class ProgressPrivate {
    static $gtype: GObject.GType<ProgressPrivate>;

    constructor(copy: ProgressPrivate);
}

export class RepoDetailPrivate {
    static $gtype: GObject.GType<RepoDetailPrivate>;

    constructor(copy: RepoDetailPrivate);
}

export class RepoSignatureRequiredPrivate {
    static $gtype: GObject.GType<RepoSignatureRequiredPrivate>;

    constructor(copy: RepoSignatureRequiredPrivate);
}

export class RequireRestartPrivate {
    static $gtype: GObject.GType<RequireRestartPrivate>;

    constructor(copy: RequireRestartPrivate);
}

export class ResultsPrivate {
    static $gtype: GObject.GType<ResultsPrivate>;

    constructor(copy: ResultsPrivate);
}

export class SourcePrivate {
    static $gtype: GObject.GType<SourcePrivate>;

    constructor(copy: SourcePrivate);
}

export class TaskPrivate {
    static $gtype: GObject.GType<TaskPrivate>;

    constructor(copy: TaskPrivate);
}

export class TransactionListPrivate {
    static $gtype: GObject.GType<TransactionListPrivate>;

    constructor(copy: TransactionListPrivate);
}

export class TransactionPastPrivate {
    static $gtype: GObject.GType<TransactionPastPrivate>;

    constructor(copy: TransactionPastPrivate);
}

export class UpdateDetailPrivate {
    static $gtype: GObject.GType<UpdateDetailPrivate>;

    constructor(copy: UpdateDetailPrivate);
}

export type Bitfield = number;
