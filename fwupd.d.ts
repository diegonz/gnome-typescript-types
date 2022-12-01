/**
 * Fwupd 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const DBUS_INTERFACE: string;
export const DBUS_PATH: string;
export const DBUS_SERVICE: string;
export const DEVICE_FLAG_ADD_COUNTERPART_GUIDS: number;
export const DEVICE_FLAG_ANOTHER_WRITE_REQUIRED: number;
export const DEVICE_FLAG_BACKUP_BEFORE_INSTALL: number;
export const DEVICE_FLAG_CAN_VERIFY: number;
export const DEVICE_FLAG_CAN_VERIFY_IMAGE: number;
export const DEVICE_FLAG_DUAL_IMAGE: number;
export const DEVICE_FLAG_ENSURE_SEMVER: number;
export const DEVICE_FLAG_HAS_MULTIPLE_BRANCHES: number;
export const DEVICE_FLAG_HISTORICAL: number;
export const DEVICE_FLAG_IGNORE_VALIDATION: number;
export const DEVICE_FLAG_INSTALL_ALL_RELEASES: number;
export const DEVICE_FLAG_INSTALL_PARENT_FIRST: number;
export const DEVICE_FLAG_INTERNAL: number;
export const DEVICE_FLAG_IS_BOOTLOADER: number;
export const DEVICE_FLAG_LOCKED: number;
export const DEVICE_FLAG_MD_SET_ICON: number;
export const DEVICE_FLAG_MD_SET_NAME: number;
export const DEVICE_FLAG_MD_SET_NAME_CATEGORY: number;
export const DEVICE_FLAG_MD_SET_VERFMT: number;
export const DEVICE_FLAG_NEEDS_ACTIVATION: number;
export const DEVICE_FLAG_NEEDS_BOOTLOADER: number;
export const DEVICE_FLAG_NEEDS_REBOOT: number;
export const DEVICE_FLAG_NEEDS_SHUTDOWN: number;
export const DEVICE_FLAG_NONE: number;
export const DEVICE_FLAG_NOTIFIED: number;
export const DEVICE_FLAG_NO_AUTO_INSTANCE_IDS: number;
export const DEVICE_FLAG_NO_GUID_MATCHING: number;
export const DEVICE_FLAG_ONLY_OFFLINE: number;
export const DEVICE_FLAG_ONLY_SUPPORTED: number;
export const DEVICE_FLAG_REGISTERED: number;
export const DEVICE_FLAG_REPORTED: number;
export const DEVICE_FLAG_REQUIRE_AC: number;
export const DEVICE_FLAG_SELF_RECOVERY: number;
export const DEVICE_FLAG_SKIPS_RESTART: number;
export const DEVICE_FLAG_SUPPORTED: number;
export const DEVICE_FLAG_TRUSTED: number;
export const DEVICE_FLAG_UPDATABLE: number;
export const DEVICE_FLAG_UPDATABLE_HIDDEN: number;
export const DEVICE_FLAG_USABLE_DURING_UPDATE: number;
export const DEVICE_FLAG_USE_RUNTIME_VERSION: number;
export const DEVICE_FLAG_VERSION_CHECK_REQUIRED: number;
export const DEVICE_FLAG_WAIT_FOR_REPLUG: number;
export const DEVICE_FLAG_WILL_DISAPPEAR: number;
export const DEVICE_ID_ANY: string;
export const PLUGIN_FLAG_CAPSULES_UNSUPPORTED: number;
export const PLUGIN_FLAG_CLEAR_UPDATABLE: number;
export const PLUGIN_FLAG_DISABLED: number;
export const PLUGIN_FLAG_EFIVAR_NOT_MOUNTED: number;
export const PLUGIN_FLAG_ESP_NOT_FOUND: number;
export const PLUGIN_FLAG_FAILED_OPEN: number;
export const PLUGIN_FLAG_LEGACY_BIOS: number;
export const PLUGIN_FLAG_NONE: number;
export const PLUGIN_FLAG_NO_HARDWARE: number;
export const PLUGIN_FLAG_UNLOCK_REQUIRED: number;
export const PLUGIN_FLAG_USER_WARNING: number;
export const RELEASE_FLAG_BLOCKED_APPROVAL: number;
export const RELEASE_FLAG_BLOCKED_VERSION: number;
export const RELEASE_FLAG_IS_ALTERNATE_BRANCH: number;
export const RELEASE_FLAG_IS_DOWNGRADE: number;
export const RELEASE_FLAG_IS_UPGRADE: number;
export const RELEASE_FLAG_NONE: number;
export const RELEASE_FLAG_TRUSTED_METADATA: number;
export const RELEASE_FLAG_TRUSTED_PAYLOAD: number;
export const RESULT_KEY_APPSTREAM_ID: string;
export const RESULT_KEY_BRANCH: string;
export const RESULT_KEY_CATEGORIES: string;
export const RESULT_KEY_CHECKSUM: string;
export const RESULT_KEY_CREATED: string;
export const RESULT_KEY_DESCRIPTION: string;
export const RESULT_KEY_DETACH_CAPTION: string;
export const RESULT_KEY_DETACH_IMAGE: string;
export const RESULT_KEY_DETAILS_URL: string;
export const RESULT_KEY_DEVICE_ID: string;
export const RESULT_KEY_FILENAME: string;
export const RESULT_KEY_FLAGS: string;
export const RESULT_KEY_FLASHES_LEFT: string;
export const RESULT_KEY_GUID: string;
export const RESULT_KEY_HOMEPAGE: string;
export const RESULT_KEY_HSI_LEVEL: string;
export const RESULT_KEY_HSI_RESULT: string;
export const RESULT_KEY_ICON: string;
export const RESULT_KEY_INSTALL_DURATION: string;
export const RESULT_KEY_INSTANCE_IDS: string;
export const RESULT_KEY_ISSUES: string;
export const RESULT_KEY_LICENSE: string;
export const RESULT_KEY_METADATA: string;
export const RESULT_KEY_MODIFIED: string;
export const RESULT_KEY_NAME: string;
export const RESULT_KEY_NAME_VARIANT_SUFFIX: string;
export const RESULT_KEY_PARENT_DEVICE_ID: string;
export const RESULT_KEY_PLUGIN: string;
export const RESULT_KEY_PROTOCOL: string;
export const RESULT_KEY_RELEASE: string;
export const RESULT_KEY_REMOTE_ID: string;
export const RESULT_KEY_SERIAL: string;
export const RESULT_KEY_SIZE: string;
export const RESULT_KEY_SOURCE_URL: string;
export const RESULT_KEY_STATUS: string;
export const RESULT_KEY_SUMMARY: string;
export const RESULT_KEY_TRUST_FLAGS: string;
export const RESULT_KEY_UPDATE_ERROR: string;
export const RESULT_KEY_UPDATE_IMAGE: string;
export const RESULT_KEY_UPDATE_MESSAGE: string;
export const RESULT_KEY_UPDATE_STATE: string;
export const RESULT_KEY_URGENCY: string;
export const RESULT_KEY_URI: string;
export const RESULT_KEY_VENDOR: string;
export const RESULT_KEY_VENDOR_ID: string;
export const RESULT_KEY_VERSION: string;
export const RESULT_KEY_VERSION_BOOTLOADER: string;
export const RESULT_KEY_VERSION_BOOTLOADER_RAW: string;
export const RESULT_KEY_VERSION_FORMAT: string;
export const RESULT_KEY_VERSION_LOWEST: string;
export const RESULT_KEY_VERSION_LOWEST_RAW: string;
export const RESULT_KEY_VERSION_RAW: string;
export const SECURITY_ATTR_ID_ACPI_DMAR: string;
export const SECURITY_ATTR_ID_ENCRYPTED_RAM: string;
export const SECURITY_ATTR_ID_FWUPD_ATTESTATION: string;
export const SECURITY_ATTR_ID_FWUPD_PLUGINS: string;
export const SECURITY_ATTR_ID_FWUPD_UPDATES: string;
export const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ACM: string;
export const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ENABLED: string;
export const SECURITY_ATTR_ID_INTEL_BOOTGUARD_OTP: string;
export const SECURITY_ATTR_ID_INTEL_BOOTGUARD_POLICY: string;
export const SECURITY_ATTR_ID_INTEL_BOOTGUARD_VERIFIED: string;
export const SECURITY_ATTR_ID_INTEL_CET_ACTIVE: string;
export const SECURITY_ATTR_ID_INTEL_CET_ENABLED: string;
export const SECURITY_ATTR_ID_INTEL_DCI_ENABLED: string;
export const SECURITY_ATTR_ID_INTEL_DCI_LOCKED: string;
export const SECURITY_ATTR_ID_INTEL_SMAP: string;
export const SECURITY_ATTR_ID_IOMMU: string;
export const SECURITY_ATTR_ID_KERNEL_LOCKDOWN: string;
export const SECURITY_ATTR_ID_KERNEL_SWAP: string;
export const SECURITY_ATTR_ID_KERNEL_TAINTED: string;
export const SECURITY_ATTR_ID_MEI_MANUFACTURING_MODE: string;
export const SECURITY_ATTR_ID_MEI_OVERRIDE_STRAP: string;
export const SECURITY_ATTR_ID_MEI_VERSION: string;
export const SECURITY_ATTR_ID_SPI_BIOSWE: string;
export const SECURITY_ATTR_ID_SPI_BLE: string;
export const SECURITY_ATTR_ID_SPI_SMM_BWP: string;
export const SECURITY_ATTR_ID_SUSPEND_TO_IDLE: string;
export const SECURITY_ATTR_ID_SUSPEND_TO_RAM: string;
export const SECURITY_ATTR_ID_TPM_RECONSTRUCTION_PCR0: string;
export const SECURITY_ATTR_ID_TPM_VERSION_20: string;
export const SECURITY_ATTR_ID_UEFI_PK: string;
export const SECURITY_ATTR_ID_UEFI_SECUREBOOT: string;

export function build_history_report_json(devices: Device[]): string;

export function build_machine_id(salt: string): string;

export function build_user_agent(package_name: string, package_version: string): string;

export function checksum_format_for_display(checksum: string): string;

export function checksum_get_best(checksums: string[]): string;

export function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType): string;

export function checksum_guess_kind(checksum: string): GLib.ChecksumType;

export function error_from_string(error: string): Error;

export function error_quark(): GLib.Quark;

export function error_to_string(error: Error): string;

export function feature_flag_from_string(feature_flag: string): FeatureFlags;

export function feature_flag_to_string(feature_flag: FeatureFlags): string;

export function get_os_release(): GLib.HashTable<string, string>;

export function guid_from_string(guidstr: string | null, guid: number, flags: GuidFlags): boolean;

export function guid_hash_data(data: number, datasz: number, flags: GuidFlags): string;

export function guid_hash_string(str: string): string;

export function guid_is_valid(guid: string): boolean;

export function guid_to_string(guid: number, flags: GuidFlags): string;

export function keyring_kind_from_string(keyring_kind: string): KeyringKind;

export function keyring_kind_to_string(keyring_kind: KeyringKind): string;

export function status_from_string(status: string): Status;

export function status_to_string(status: Status): string;

export function trust_flag_from_string(trust_flag: string): TrustFlags;

export function trust_flag_to_string(trust_flag: TrustFlags): string;

export function update_state_from_string(update_state: string): UpdateState;

export function update_state_to_string(update_state: UpdateState): string;

export function version_format_from_string(str: string): VersionFormat;

export function version_format_to_string(kind: VersionFormat): string;

export namespace ClientDownloadFlags {
    export const $gtype: GObject.GType<ClientDownloadFlags>;
}

export enum ClientDownloadFlags {
    NONE = 0,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static INTERNAL: number;
    static VERSION_NEWER: number;
    static VERSION_SAME: number;
    static ALREADY_PENDING: number;
    static AUTH_FAILED: number;
    static READ: number;
    static WRITE: number;
    static INVALID_FILE: number;
    static NOT_FOUND: number;
    static NOTHING_TO_DO: number;
    static NOT_SUPPORTED: number;
    static SIGNATURE_INVALID: number;
    static AC_POWER_REQUIRED: number;
    static PERMISSION_DENIED: number;
    static BROKEN_SYSTEM: number;
    static BATTERY_LEVEL_TOO_LOW: number;
    static NEEDS_USER_ACTION: number;
}

export namespace KeyringKind {
    export const $gtype: GObject.GType<KeyringKind>;
}

export enum KeyringKind {
    UNKNOWN = 0,
    NONE = 1,
    GPG = 2,
    PKCS7 = 3,
    JCAT = 4,
}

export namespace ReleaseUrgency {
    export const $gtype: GObject.GType<ReleaseUrgency>;
}

export enum ReleaseUrgency {
    UNKNOWN = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    CRITICAL = 4,
}

export namespace RemoteKind {
    export const $gtype: GObject.GType<RemoteKind>;
}

export enum RemoteKind {
    UNKNOWN = 0,
    DOWNLOAD = 1,
    LOCAL = 2,
    DIRECTORY = 3,
}

export namespace SecurityAttrLevel {
    export const $gtype: GObject.GType<SecurityAttrLevel>;
}

export enum SecurityAttrLevel {
    NONE = 0,
    CRITICAL = 1,
    IMPORTANT = 2,
    THEORETICAL = 3,
    SYSTEM_PROTECTION = 4,
    SYSTEM_ATTESTATION = 5,
}

export namespace SecurityAttrResult {
    export const $gtype: GObject.GType<SecurityAttrResult>;
}

export enum SecurityAttrResult {
    UNKNOWN = 0,
    ENABLED = 1,
    NOT_ENABLED = 2,
    VALID = 3,
    NOT_VALID = 4,
    LOCKED = 5,
    NOT_LOCKED = 6,
    ENCRYPTED = 7,
    NOT_ENCRYPTED = 8,
    TAINTED = 9,
    NOT_TAINTED = 10,
    FOUND = 11,
    NOT_FOUND = 12,
    SUPPORTED = 13,
    NOT_SUPPORTED = 14,
}

export namespace Status {
    export const $gtype: GObject.GType<Status>;
}

export enum Status {
    UNKNOWN = 0,
    IDLE = 1,
    LOADING = 2,
    DECOMPRESSING = 3,
    DEVICE_RESTART = 4,
    DEVICE_WRITE = 5,
    DEVICE_VERIFY = 6,
    SCHEDULING = 7,
    DOWNLOADING = 8,
    DEVICE_READ = 9,
    DEVICE_ERASE = 10,
    WAITING_FOR_AUTH = 11,
    DEVICE_BUSY = 12,
    SHUTDOWN = 13,
}

export namespace UpdateState {
    export const $gtype: GObject.GType<UpdateState>;
}

export enum UpdateState {
    UNKNOWN = 0,
    PENDING = 1,
    SUCCESS = 2,
    FAILED = 3,
    NEEDS_REBOOT = 4,
    FAILED_TRANSIENT = 5,
}

export namespace VersionFormat {
    export const $gtype: GObject.GType<VersionFormat>;
}

export enum VersionFormat {
    UNKNOWN = 0,
    PLAIN = 1,
    NUMBER = 2,
    PAIR = 3,
    TRIPLET = 4,
    QUAD = 5,
    BCD = 6,
    INTEL_ME = 7,
    INTEL_ME2 = 8,
    SURFACE_LEGACY = 9,
    SURFACE = 10,
    DELL_BIOS = 11,
    HEX = 12,
}

export namespace ClientUploadFlags {
    export const $gtype: GObject.GType<ClientUploadFlags>;
}

export enum ClientUploadFlags {
    NONE = 0,
    ALWAYS_MULTIPART = 1,
}

export namespace FeatureFlags {
    export const $gtype: GObject.GType<FeatureFlags>;
}

export enum FeatureFlags {
    NONE = 0,
    CAN_REPORT = 1,
    DETACH_ACTION = 2,
    UPDATE_ACTION = 4,
    SWITCH_BRANCH = 8,
}

export namespace GuidFlags {
    export const $gtype: GObject.GType<GuidFlags>;
}

export enum GuidFlags {
    NONE = 0,
    NAMESPACE_MICROSOFT = 1,
    MIXED_ENDIAN = 2,
}

export namespace InstallFlags {
    export const $gtype: GObject.GType<InstallFlags>;
}

export enum InstallFlags {
    NONE = 0,
    OFFLINE = 1,
    ALLOW_REINSTALL = 2,
    ALLOW_OLDER = 4,
    FORCE = 8,
    NO_HISTORY = 16,
    ALLOW_BRANCH_SWITCH = 32,
    IGNORE_CHECKSUM = 64,
    IGNORE_VID_PID = 128,
    IGNORE_POWER = 256,
    NO_SEARCH = 512,
}

export namespace SecurityAttrFlags {
    export const $gtype: GObject.GType<SecurityAttrFlags>;
}

export enum SecurityAttrFlags {
    NONE = 0,
    SUCCESS = 1,
    OBSOLETED = 2,
    RUNTIME_UPDATES = 256,
    RUNTIME_ATTESTATION = 512,
    RUNTIME_ISSUE = 1024,
}

export namespace SelfSignFlags {
    export const $gtype: GObject.GType<SelfSignFlags>;
}

export enum SelfSignFlags {
    NONE = 0,
    ADD_TIMESTAMP = 1,
    ADD_CERT = 2,
}

export namespace TrustFlags {
    export const $gtype: GObject.GType<TrustFlags>;
}

export enum TrustFlags {
    NONE = 0,
    PAYLOAD = 1,
    METADATA = 2,
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        daemon_version: string;
        daemonVersion: string;
        host_machine_id: string;
        hostMachineId: string;
        host_product: string;
        hostProduct: string;
        host_security_id: string;
        hostSecurityId: string;
        interactive: boolean;
        percentage: number;
        soup_session: GObject.Object;
        soupSession: GObject.Object;
        status: number;
        tainted: boolean;
    }
}

export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    daemon_version: string;
    daemonVersion: string;
    host_machine_id: string;
    hostMachineId: string;
    host_product: string;
    hostProduct: string;
    host_security_id: string;
    hostSecurityId: string;
    interactive: boolean;
    percentage: number;
    soup_session: GObject.Object;
    soupSession: GObject.Object;
    status: number;
    tainted: boolean;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect_after(signal: 'device-added', callback: (_source: this, result: Device) => void): number;

    emit(signal: 'device-added', result: Device): void;

    connect_after(signal: 'device-changed', callback: (_source: this, result: Device) => void): number;

    emit(signal: 'device-changed', result: Device): void;

    connect_after(signal: 'device-removed', callback: (_source: this, result: Device) => void): number;

    emit(signal: 'device-removed', result: Device): void;

    connect_after(signal: 'status-changed', callback: (_source: this, object: number) => void): number;

    emit(signal: 'status-changed', object: number): void;

    // Constructors

    static ['new'](): Client;

    // Members

    activate(cancellable: Gio.Cancellable | null, device_id: string): boolean;

    activate_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    activate_finish(res: Gio.AsyncResult): boolean;

    clear_results(device_id: string, cancellable?: Gio.Cancellable | null): boolean;

    clear_results_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    clear_results_finish(res: Gio.AsyncResult): boolean;

    connect(cancellable?: Gio.Cancellable | null): boolean;
    connect(...args: never[]): never;

    connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    connect_finish(res: Gio.AsyncResult): boolean;

    download_bytes(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): GLib.Bytes;

    download_bytes_async(
        url: string,
        flags: ClientDownloadFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    download_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;

    download_file(
        url: string,
        file: Gio.File,
        flags: ClientDownloadFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ensure_networking(): boolean;

    get_approved_firmware(cancellable?: Gio.Cancellable | null): string[];

    get_approved_firmware_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_approved_firmware_finish(res: Gio.AsyncResult): string[];

    get_blocked_firmware(cancellable?: Gio.Cancellable | null): string[];

    get_blocked_firmware_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_blocked_firmware_finish(res: Gio.AsyncResult): string[];

    get_daemon_interactive(): boolean;

    get_daemon_version(): string;

    get_details(filename: string, cancellable?: Gio.Cancellable | null): Device[];

    get_details_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): Device[];

    get_details_bytes_async(
        bytes: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_details_bytes_finish(res: Gio.AsyncResult): Device[];

    get_device_by_id(device_id: string, cancellable?: Gio.Cancellable | null): Device;

    get_device_by_id_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_device_by_id_finish(res: Gio.AsyncResult): Device;

    get_devices(cancellable?: Gio.Cancellable | null): Device[];

    get_devices_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_devices_by_guid(guid: string, cancellable?: Gio.Cancellable | null): Device[];

    get_devices_by_guid_async(
        guid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_devices_by_guid_finish(res: Gio.AsyncResult): Release[];

    get_devices_finish(res: Gio.AsyncResult): Device[];

    get_downgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[];

    get_downgrades_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_downgrades_finish(res: Gio.AsyncResult): Release[];

    get_history(cancellable?: Gio.Cancellable | null): Device[];

    get_history_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_history_finish(res: Gio.AsyncResult): Device[];

    get_host_machine_id(): string;

    get_host_product(): string;

    get_host_security_attrs(cancellable?: Gio.Cancellable | null): SecurityAttr[];

    get_host_security_attrs_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_host_security_attrs_finish(res: Gio.AsyncResult): SecurityAttr[];

    get_host_security_id(): string;

    get_main_context(): GLib.MainContext;

    get_percentage(): number;

    get_plugins(cancellable?: Gio.Cancellable | null): Plugin[];

    get_plugins_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_plugins_finish(res: Gio.AsyncResult): Device[];

    get_releases(device_id: string, cancellable?: Gio.Cancellable | null): Release[];

    get_releases_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_releases_finish(res: Gio.AsyncResult): Release[];

    get_remote_by_id(remote_id: string, cancellable?: Gio.Cancellable | null): Remote;

    get_remote_by_id_async(
        remote_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_remote_by_id_finish(res: Gio.AsyncResult): Remote;

    get_remotes(cancellable?: Gio.Cancellable | null): Remote[];

    get_remotes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_remotes_finish(res: Gio.AsyncResult): Remote[];

    get_report_metadata(cancellable?: Gio.Cancellable | null): GLib.HashTable<any, any>;

    get_report_metadata_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_report_metadata_finish(res: Gio.AsyncResult): GLib.HashTable<any, any>;

    get_results(device_id: string, cancellable?: Gio.Cancellable | null): Device;

    get_results_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_results_finish(res: Gio.AsyncResult): Device;

    get_status(): Status;

    get_tainted(): boolean;

    get_upgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[];

    get_upgrades_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_upgrades_finish(res: Gio.AsyncResult): Release[];

    get_user_agent(): string;

    install(
        device_id: string,
        filename: string,
        install_flags: InstallFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    install_async(
        device_id: string,
        filename: string,
        install_flags: InstallFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_bytes(
        device_id: string,
        bytes: GLib.Bytes | Uint8Array,
        install_flags: InstallFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    install_bytes_async(
        device_id: string,
        bytes: GLib.Bytes | Uint8Array,
        install_flags: InstallFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_bytes_finish(res: Gio.AsyncResult): boolean;

    install_finish(res: Gio.AsyncResult): boolean;

    install_release(
        device: Device,
        release: Release,
        install_flags: InstallFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    install_release_async(
        device: Device,
        release: Release,
        install_flags: InstallFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    install_release_finish(res: Gio.AsyncResult): boolean;

    modify_config(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;

    modify_config_async(
        key: string,
        value: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_config_finish(res: Gio.AsyncResult): boolean;

    modify_device(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;

    modify_device_async(
        device_id: string,
        key: string,
        value: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_device_finish(res: Gio.AsyncResult): boolean;

    modify_remote(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;

    modify_remote_async(
        remote_id: string,
        key: string,
        value: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_remote_finish(res: Gio.AsyncResult): boolean;

    refresh_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean;

    refresh_remote_async(
        remote: Remote,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_remote_finish(res: Gio.AsyncResult): boolean;

    self_sign(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null): string;

    self_sign_async(
        value: string,
        flags: SelfSignFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    self_sign_finish(res: Gio.AsyncResult): string;

    set_approved_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean;

    set_approved_firmware_async(
        checksums: string[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_approved_firmware_finish(res: Gio.AsyncResult): boolean;

    set_blocked_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean;

    set_blocked_firmware_async(
        checksums: string[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_blocked_firmware_finish(res: Gio.AsyncResult): boolean;

    set_feature_flags(feature_flags: FeatureFlags, cancellable?: Gio.Cancellable | null): boolean;

    set_feature_flags_async(
        feature_flags: FeatureFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_feature_flags_finish(res: Gio.AsyncResult): boolean;

    set_main_context(main_ctx?: GLib.MainContext | null): void;

    set_user_agent(user_agent: string): void;

    set_user_agent_for_package(package_name: string, package_version: string): void;

    unlock(device_id: string, cancellable?: Gio.Cancellable | null): boolean;

    unlock_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    unlock_finish(res: Gio.AsyncResult): boolean;

    update_metadata(
        remote_id: string,
        metadata_fn: string,
        signature_fn: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    update_metadata_bytes(
        remote_id: string,
        metadata: GLib.Bytes | Uint8Array,
        signature: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    update_metadata_bytes_async(
        remote_id: string,
        metadata: GLib.Bytes | Uint8Array,
        signature: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    update_metadata_bytes_finish(res: Gio.AsyncResult): boolean;

    upload_bytes(
        url: string,
        payload: string,
        signature: string | null,
        flags: ClientUploadFlags,
        cancellable?: Gio.Cancellable | null
    ): GLib.Bytes;

    upload_bytes_async(
        url: string,
        payload: string,
        signature: string | null,
        flags: ClientUploadFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    upload_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;

    verify(device_id: string, cancellable?: Gio.Cancellable | null): boolean;

    verify_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    verify_finish(res: Gio.AsyncResult): boolean;

    verify_update(device_id: string, cancellable?: Gio.Cancellable | null): boolean;

    verify_update_async(
        device_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    verify_update_finish(res: Gio.AsyncResult): boolean;

    vfunc_changed(): void;

    vfunc_device_added(result: Device): void;

    vfunc_device_changed(result: Device): void;

    vfunc_device_removed(result: Device): void;

    vfunc_status_changed(status: Status): void;
}

export namespace Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: number;
        protocol: string;
        status: number;
        version_format: number;
        versionFormat: number;
    }
}

export class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: number;
    protocol: string;
    status: number;
    version_format: number;
    versionFormat: number;

    // Constructors

    static ['new'](): Device;

    // Members

    add_checksum(checksum: string): void;

    add_child(child: Device): void;

    add_flag(flag: DeviceFlags): void;

    add_guid(guid: string): void;

    add_icon(icon: string): void;

    add_instance_id(instance_id: string): void;

    add_release(release: Release): void;

    add_vendor_id(vendor_id: string): void;

    compare(device2: Device): number;

    get_branch(): string;

    get_checksums(): string[];

    get_children(): Device[];

    get_created(): number;

    get_description(): string;

    get_flags(): number;

    get_flashes_left(): number;

    get_guid_default(): string;

    get_guids(): string[];

    get_icons(): string[];

    get_id(): string;

    get_install_duration(): number;

    get_instance_ids(): string[];

    get_modified(): number;

    get_name(): string;

    get_parent(): Device;

    get_parent_id(): string;

    get_plugin(): string;

    get_protocol(): string;

    get_release_default(): Release;

    get_releases(): Release[];

    get_serial(): string;

    get_status(): Status;

    get_summary(): string;

    get_update_error(): string;

    get_update_image(): string;

    get_update_message(): string;

    get_update_state(): UpdateState;

    get_vendor(): string;

    get_vendor_id(): string;

    get_vendor_ids(): string[];

    get_version(): string;

    get_version_bootloader(): string;

    get_version_bootloader_raw(): number;

    get_version_format(): VersionFormat;

    get_version_lowest(): string;

    get_version_lowest_raw(): number;

    get_version_raw(): number;

    has_flag(flag: DeviceFlags): boolean;

    has_guid(guid: string): boolean;

    has_instance_id(instance_id: string): boolean;

    has_vendor_id(vendor_id: string): boolean;

    incorporate(donor: Device): void;

    remove_flag(flag: DeviceFlags): void;

    set_branch(branch: string): void;

    set_created(created: number): void;

    set_description(description: string): void;

    set_flags(flags: number): void;

    set_flashes_left(flashes_left: number): void;

    set_id(id: string): void;

    set_install_duration(duration: number): void;

    set_modified(modified: number): void;

    set_name(name: string): void;

    set_parent(parent: Device): void;

    set_parent_id(parent_id: string): void;

    set_plugin(plugin: string): void;

    set_protocol(protocol: string): void;

    set_serial(serial: string): void;

    set_status(status: Status): void;

    set_summary(summary: string): void;

    set_update_error(update_error: string): void;

    set_update_image(update_image: string): void;

    set_update_message(update_message: string): void;

    set_update_state(update_state: UpdateState): void;

    set_vendor(vendor: string): void;

    set_vendor_id(vendor_id: string): void;

    set_version(version: string): void;

    set_version_bootloader(version_bootloader: string): void;

    set_version_bootloader_raw(version_bootloader_raw: number): void;

    set_version_format(version_format: VersionFormat): void;

    set_version_lowest(version_lowest: string): void;

    set_version_lowest_raw(version_lowest_raw: number): void;

    set_version_raw(version_raw: number): void;

    to_string(): string;

    to_variant(): GLib.Variant;

    to_variant_full(flags: DeviceFlags): GLib.Variant;

    static array_ensure_parents(devices: Device[]): void;

    static array_from_variant(value: GLib.Variant): Device[];

    static flag_from_string(device_flag: string): DeviceFlags;

    static flag_to_string(device_flag: DeviceFlags): string;

    static from_variant(value: GLib.Variant): Device;

    static id_is_valid(device_id: string): boolean;
}

export namespace Plugin {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: number;
        name: string;
    }
}

export class Plugin extends GObject.Object {
    static $gtype: GObject.GType<Plugin>;

    constructor(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: number;
    name: string;

    // Constructors

    static ['new'](): Plugin;

    // Members

    add_flag(flag: PluginFlags): void;

    get_flags(): number;

    get_name(): string;

    has_flag(flag: PluginFlags): boolean;

    remove_flag(flag: PluginFlags): void;

    set_flags(flags: number): void;

    set_name(name: string): void;

    to_string(): string;

    to_variant(): GLib.Variant;

    static array_from_variant(value: GLib.Variant): Plugin[];

    static flag_from_string(plugin_flag: string): PluginFlags;

    static flag_to_string(plugin_flag: PluginFlags): string;

    static from_variant(value: GLib.Variant): Plugin;
}

export namespace Release {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Release extends GObject.Object {
    static $gtype: GObject.GType<Release>;

    constructor(properties?: Partial<Release.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Release.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Release;

    // Members

    add_category(category: string): void;

    add_checksum(checksum: string): void;

    add_flag(flag: ReleaseFlags): void;

    add_issue(issue: string): void;

    add_metadata(hash: GLib.HashTable<any, any>): void;

    add_metadata_item(key: string, value: string): void;

    get_appstream_id(): string;

    get_branch(): string;

    get_categories(): string[];

    get_checksums(): string[];

    get_created(): number;

    get_description(): string;

    get_detach_caption(): string;

    get_detach_image(): string;

    get_details_url(): string;

    get_filename(): string;

    get_flags(): ReleaseFlags;

    get_homepage(): string;

    get_install_duration(): number;

    get_issues(): string[];

    get_license(): string;

    get_metadata(): GLib.HashTable<any, any>;

    get_metadata_item(key: string): string;

    get_name(): string;

    get_name_variant_suffix(): string;

    get_protocol(): string;

    get_remote_id(): string;

    get_size(): number;

    get_source_url(): string;

    get_summary(): string;

    get_trust_flags(): TrustFlags;

    get_update_image(): string;

    get_update_message(): string;

    get_urgency(): ReleaseUrgency;

    get_uri(): string;

    get_vendor(): string;

    get_version(): string;

    has_category(category: string): boolean;

    has_checksum(checksum: string): boolean;

    has_flag(flag: ReleaseFlags): boolean;

    remove_flag(flag: ReleaseFlags): void;

    set_appstream_id(appstream_id: string): void;

    set_branch(branch: string): void;

    set_created(created: number): void;

    set_description(description: string): void;

    set_detach_caption(detach_caption: string): void;

    set_detach_image(detach_image: string): void;

    set_details_url(details_url: string): void;

    set_filename(filename: string): void;

    set_flags(flags: ReleaseFlags): void;

    set_homepage(homepage: string): void;

    set_install_duration(duration: number): void;

    set_license(license: string): void;

    set_name(name: string): void;

    set_name_variant_suffix(name_variant_suffix: string): void;

    set_protocol(protocol: string): void;

    set_remote_id(remote_id: string): void;

    set_size(size: number): void;

    set_source_url(source_url: string): void;

    set_summary(summary: string): void;

    set_trust_flags(trust_flags: TrustFlags): void;

    set_update_image(update_image: string): void;

    set_update_message(update_message: string): void;

    set_urgency(urgency: ReleaseUrgency): void;

    set_uri(uri: string): void;

    set_vendor(vendor: string): void;

    set_version(version: string): void;

    to_string(): string;

    to_variant(): GLib.Variant;

    static array_from_variant(value: GLib.Variant): Release[];

    static flag_from_string(release_flag: string): ReleaseFlags;

    static flag_to_string(release_flag: ReleaseFlags): string;

    static from_variant(value: GLib.Variant): Release;

    static urgency_from_string(release_urgency: string): ReleaseUrgency;

    static urgency_to_string(release_urgency: ReleaseUrgency): string;
}

export namespace Remote {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        approval_required: boolean;
        approvalRequired: boolean;
        automatic_reports: boolean;
        automaticReports: boolean;
        automatic_security_reports: boolean;
        automaticSecurityReports: boolean;
        enabled: boolean;
        id: string;
    }
}

export class Remote extends GObject.Object {
    static $gtype: GObject.GType<Remote>;

    constructor(properties?: Partial<Remote.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Remote.ConstructorProperties>, ...args: any[]): void;

    // Properties
    approval_required: boolean;
    approvalRequired: boolean;
    automatic_reports: boolean;
    automaticReports: boolean;
    automatic_security_reports: boolean;
    automaticSecurityReports: boolean;
    enabled: boolean;
    id: string;

    // Constructors

    static ['new'](): Remote;

    // Members

    build_firmware_uri(url: string): string;

    get_age(): number;

    get_agreement(): string;

    get_approval_required(): boolean;

    get_automatic_reports(): boolean;

    get_automatic_security_reports(): boolean;

    get_checksum(): string;

    get_enabled(): boolean;

    get_filename_cache(): string;

    get_filename_cache_sig(): string;

    get_filename_source(): string;

    get_firmware_base_uri(): string;

    get_id(): string;

    get_keyring_kind(): KeyringKind;

    get_kind(): RemoteKind;

    get_metadata_uri(): string;

    get_metadata_uri_sig(): string;

    get_order_after(): string[];

    get_order_before(): string[];

    get_password(): string;

    get_priority(): number;

    get_remotes_dir(): string;

    get_report_uri(): string;

    get_security_report_uri(): string;

    get_title(): string;

    get_username(): string;

    load_from_filename(filename: string, cancellable?: Gio.Cancellable | null): boolean;

    load_signature(filename: string): boolean;

    load_signature_bytes(bytes: GLib.Bytes | Uint8Array): boolean;

    set_agreement(agreement: string): void;

    set_keyring_kind(keyring_kind: KeyringKind): void;

    set_mtime(mtime: number): void;

    set_priority(priority: number): void;

    set_remotes_dir(directory: string): void;

    to_variant(): GLib.Variant;

    static array_from_variant(value: GLib.Variant): Remote[];

    static from_variant(value: GLib.Variant): Remote;

    static kind_from_string(kind: string): RemoteKind;

    static kind_to_string(kind: RemoteKind): string;
}

export namespace SecurityAttr {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SecurityAttr extends GObject.Object {
    static $gtype: GObject.GType<SecurityAttr>;

    constructor(properties?: Partial<SecurityAttr.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SecurityAttr.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](appstream_id?: string | null): SecurityAttr;

    // Members

    add_flag(flag: SecurityAttrFlags): void;

    add_metadata(key: string, value?: string | null): void;

    add_obsolete(appstream_id: string): void;

    get_appstream_id(): string;

    get_flags(): SecurityAttrFlags;

    get_level(): SecurityAttrLevel;

    get_metadata(key: string): string | null;

    get_name(): string;

    get_obsoletes(): string[];

    get_plugin(): string;

    get_result(): SecurityAttrResult;

    get_url(): string;

    has_flag(flag: SecurityAttrFlags): boolean;

    has_obsolete(appstream_id: string): boolean;

    set_appstream_id(appstream_id: string): void;

    set_flags(flags: SecurityAttrFlags): void;

    set_level(level: SecurityAttrLevel): void;

    set_name(name: string): void;

    set_plugin(plugin: string): void;

    set_result(result: SecurityAttrResult): void;

    set_url(url: string): void;

    to_string(): string;

    to_variant(): GLib.Variant;

    static array_from_variant(value: GLib.Variant): SecurityAttr[];

    static flag_to_string(flag: SecurityAttrFlags): string;

    static flag_to_suffix(flag: SecurityAttrFlags): string;

    static from_variant(value: GLib.Variant): SecurityAttr;

    static result_to_string(result: SecurityAttrResult): string;
}

export type DeviceFlags = number;
export type PluginFlags = number;
export type ReleaseFlags = number;
