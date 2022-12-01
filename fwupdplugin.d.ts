/**
 * FwupdPlugin 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Fwupd from './fwupd';
import * as GObject from './gobject';
import * as GUsb from './gusb';
import * as Gio from './gio';
import * as GLib from './glib';

export const BUILD_HASH: string;
export const DEVICE_METADATA_TBT_IS_SAFE_MODE: string;
export const DEVICE_METADATA_UEFI_CAPSULE_FLAGS: string;
export const DEVICE_METADATA_UEFI_DEVICE_KIND: string;
export const DEVICE_METADATA_UEFI_FW_VERSION: string;
export const DEVICE_REMOVE_DELAY_RE_ENUMERATE: number;
export const DEVICE_REMOVE_DELAY_USER_REPLUG: number;
export const EFIVAR_ATTR_APPEND_WRITE: number;
export const EFIVAR_ATTR_AUTHENTICATED_WRITE_ACCESS: number;
export const EFIVAR_ATTR_BOOTSERVICE_ACCESS: number;
export const EFIVAR_ATTR_HARDWARE_ERROR_RECORD: number;
export const EFIVAR_ATTR_NON_VOLATILE: number;
export const EFIVAR_ATTR_RUNTIME_ACCESS: number;
export const EFIVAR_ATTR_TIME_BASED_AUTHENTICATED_WRITE_ACCESS: number;
export const EFIVAR_GUID_EFI_GLOBAL: string;
export const EFIVAR_GUID_FWUPDATE: string;
export const EFIVAR_GUID_SECURITY_DATABASE: string;
export const EFIVAR_GUID_UX_CAPSULE: string;
export const EFI_SIGNATURE_GUID_MICROSOFT: string;
export const EFI_SIGNATURE_GUID_OVMF: string;
export const EFI_SIGNATURE_GUID_OVMF_LEGACY: string;
export const EFI_SIGNATURE_GUID_ZERO: string;
export const FIRMWARE_FLAG_DEDUPE_ID: number;
export const FIRMWARE_FLAG_DEDUPE_IDX: number;
export const FIRMWARE_FLAG_NONE: number;
export const FIRMWARE_IMAGE_ID_HEADER: string;
export const FIRMWARE_IMAGE_ID_PAYLOAD: string;
export const FIRMWARE_IMAGE_ID_SIGNATURE: string;
export const FMAP_FIRMWARE_STRLEN: number;
export const HWIDS_KEY_BASEBOARD_MANUFACTURER: string;
export const HWIDS_KEY_BASEBOARD_PRODUCT: string;
export const HWIDS_KEY_BIOS_MAJOR_RELEASE: string;
export const HWIDS_KEY_BIOS_MINOR_RELEASE: string;
export const HWIDS_KEY_BIOS_VENDOR: string;
export const HWIDS_KEY_BIOS_VERSION: string;
export const HWIDS_KEY_ENCLOSURE_KIND: string;
export const HWIDS_KEY_FAMILY: string;
export const HWIDS_KEY_MANUFACTURER: string;
export const HWIDS_KEY_PRODUCT_NAME: string;
export const HWIDS_KEY_PRODUCT_SKU: string;
export const IHEX_FIRMWARE_RECORD_TYPE_DATA: number;
export const IHEX_FIRMWARE_RECORD_TYPE_EOF: number;
export const IHEX_FIRMWARE_RECORD_TYPE_EXTENDED_LINEAR: number;
export const IHEX_FIRMWARE_RECORD_TYPE_EXTENDED_SEGMENT: number;
export const IHEX_FIRMWARE_RECORD_TYPE_SIGNATURE: number;
export const IHEX_FIRMWARE_RECORD_TYPE_START_LINEAR: number;
export const IHEX_FIRMWARE_RECORD_TYPE_START_SEGMENT: number;
export const QUIRKS_BRANCH: string;
export const QUIRKS_CHILDREN: string;
export const QUIRKS_COUNTERPART_GUID: string;
export const QUIRKS_FIRMWARE_SIZE: string;
export const QUIRKS_FIRMWARE_SIZE_MAX: string;
export const QUIRKS_FIRMWARE_SIZE_MIN: string;
export const QUIRKS_FLAGS: string;
export const QUIRKS_GTYPE: string;
export const QUIRKS_GUID: string;
export const QUIRKS_ICON: string;
export const QUIRKS_INSTALL_DURATION: string;
export const QUIRKS_NAME: string;
export const QUIRKS_PARENT_GUID: string;
export const QUIRKS_PLUGIN: string;
export const QUIRKS_PRIORITY: string;
export const QUIRKS_PROTOCOL: string;
export const QUIRKS_PROXY_GUID: string;
export const QUIRKS_REMOVE_DELAY: string;
export const QUIRKS_SUMMARY: string;
export const QUIRKS_UPDATE_IMAGE: string;
export const QUIRKS_UPDATE_MESSAGE: string;
export const QUIRKS_VENDOR: string;
export const QUIRKS_VENDOR_ID: string;
export const QUIRKS_VERSION: string;
export const QUIRKS_VERSION_FORMAT: string;
export const SMBIOS_STRUCTURE_TYPE_BASEBOARD: number;
export const SMBIOS_STRUCTURE_TYPE_BIOS: number;
export const SMBIOS_STRUCTURE_TYPE_CHASSIS: number;
export const SMBIOS_STRUCTURE_TYPE_LAST: number;
export const SMBIOS_STRUCTURE_TYPE_SYSTEM: number;
export const VOLUME_KIND_BDP: string;
export const VOLUME_KIND_ESP: string;

export function byte_array_append_uint16(array: Uint8Array | string, data: number, endian: EndianType): void;

export function byte_array_append_uint32(array: Uint8Array | string, data: number, endian: EndianType): void;

export function byte_array_append_uint8(array: Uint8Array | string, data: number): void;

export function byte_array_set_size(array: Uint8Array | string, length: number): void;

export function chunk_array_to_string(chunks: Chunk[]): string;

export function common_bytes_align(bytes: GLib.Bytes | Uint8Array, blksz: number, padval: number): GLib.Bytes;

export function common_bytes_compare(bytes1: GLib.Bytes | Uint8Array, bytes2: GLib.Bytes | Uint8Array): boolean;

export function common_bytes_compare_raw(buf1: number, bufsz1: number, buf2: number, bufsz2: number): boolean;

export function common_bytes_is_empty(bytes: GLib.Bytes | Uint8Array): boolean;

export function common_bytes_new_offset(bytes: GLib.Bytes | Uint8Array, offset: number, length: number): GLib.Bytes;

export function common_bytes_pad(bytes: GLib.Bytes | Uint8Array, sz: number): GLib.Bytes;

export function common_cpuid(leaf: number): [boolean, number | null, number | null, number | null, number | null];

export function common_crc16(buf: number, bufsz: number): number;

export function common_crc32(buf: number, bufsz: number): number;

export function common_crc32_full(buf: number, bufsz: number, crc: number, polynomial: number): number;

export function common_crc8(buf: number, bufsz: number): number;

export function common_dump_bytes(log_domain: string, title: string, bytes: GLib.Bytes | Uint8Array): void;

export function common_dump_full(
    log_domain: string,
    title: string,
    data: number,
    len: number,
    columns: number,
    flags: DumpFlags
): void;

export function common_dump_raw(log_domain: string, title: string, data: number, len: number): void;

export function common_error_array_get_best(errors: GLib.Error[]): GLib.Error;

export function common_extract_archive(blob: GLib.Bytes | Uint8Array, dir: string): boolean;

export function common_filename_glob(directory: string, pattern: string): string[];

export function common_find_program_in_path(basename: string): string;

export function common_firmware_builder(
    bytes: GLib.Bytes | Uint8Array,
    script_fn: string,
    output_fn: string
): GLib.Bytes;

export function common_fnmatch(pattern: string, str: string): boolean;

export function common_get_contents_bytes(filename: string): GLib.Bytes;

export function common_get_contents_fd(fd: number, count: number): GLib.Bytes;

export function common_get_cpu_vendor(): CpuVendor;

export function common_get_esp_default(): Volume;

export function common_get_esp_for_path(esp_path: string): Volume;

export function common_get_files_recursive(path: string): string[];

export function common_get_path(path_kind: PathKind): string;

export function common_get_volume_by_device(device: string): Volume;

export function common_get_volume_by_devnum(devnum: number): Volume;

export function common_get_volumes_by_kind(kind: string): Volume[];

export function common_guid_is_plausible(buf: number): boolean;

export function common_is_cpu_intel(): boolean;

export function common_is_live_media(): boolean;

export function common_kernel_locked_down(): boolean;

export function common_mkdir_parent(filename: string): boolean;

export function common_read_uint16(buf: number, endian: EndianType): number;

export function common_read_uint16_safe(
    buf: number,
    bufsz: number,
    offset: number,
    endian: EndianType
): [boolean, number | null];

export function common_read_uint32(buf: number, endian: EndianType): number;

export function common_read_uint32_safe(
    buf: number,
    bufsz: number,
    offset: number,
    endian: EndianType
): [boolean, number | null];

export function common_read_uint8_safe(buf: number, bufsz: number, offset: number): [boolean, number | null];

export function common_realpath(filename: string): string;

export function common_rmtree(directory: string): boolean;

export function common_set_contents_bytes(filename: string, bytes: GLib.Bytes | Uint8Array): boolean;

export function common_spawn_sync(
    argv: string,
    handler_cb: OutputHandler,
    timeout_ms: number,
    cancellable?: Gio.Cancellable | null
): boolean;

export function common_string_append_kb(str: GLib.String, idt: number, key: string, value: boolean): void;

export function common_string_append_ku(str: GLib.String, idt: number, key: string, value: number): void;

export function common_string_append_kv(str: GLib.String, idt: number, key: string, value: string): void;

export function common_string_append_kx(str: GLib.String, idt: number, key: string, value: number): void;

export function common_string_replace(string: GLib.String, search: string, replace: string): number;

export function common_strnsplit(str: string, sz: number, delimiter: string, max_tokens: number): string[];

export function common_strsafe(str: string | null, maxsz: number): string;

export function common_strstrip(str: string): string;

export function common_strtoull(str: string): number;

export function common_strwidth(text: string): number;

export function common_vercmp(version_a: string, version_b: string): number;

export function common_vercmp_full(version_a: string, version_b: string, fmt: Fwupd.VersionFormat): number;

export function common_version_ensure_semver(version: string): string;

export function common_version_from_uint16(val: number, kind: Fwupd.VersionFormat): string;

export function common_version_from_uint32(val: number, kind: Fwupd.VersionFormat): string;

export function common_version_from_uint64(val: number, kind: Fwupd.VersionFormat): string;

export function common_version_guess_format(version: string): Fwupd.VersionFormat;

export function common_version_parse(version: string): string;

export function common_version_parse_from_format(version: string, fmt: Fwupd.VersionFormat): string;

export function common_version_verify_format(version: string, fmt: Fwupd.VersionFormat): boolean;

export function common_write_uint16(buf: number, val_native: number, endian: EndianType): void;

export function common_write_uint32(buf: number, val_native: number, endian: EndianType): void;

export function efivar_delete(guid: string, name: string): boolean;

export function efivar_delete_with_glob(guid: string, name_glob: string): boolean;

export function efivar_exists(guid: string, name: string): boolean;

export function efivar_get_data(guid: string, name: string, data: number, data_sz: number, attr: number): boolean;

export function efivar_get_data_bytes(guid: string, name: string, attr?: number | null): GLib.Bytes;

export function efivar_get_names(guid: string): string[];

export function efivar_secure_boot_enabled(): boolean;

export function efivar_secure_boot_enabled_full(): boolean;

export function efivar_set_data(guid: string, name: string, data: number, sz: number, attr: number): boolean;

export function efivar_set_data_bytes(
    guid: string,
    name: string,
    bytes: GLib.Bytes | Uint8Array,
    attr: number
): boolean;

export function efivar_space_used(): number;

export function efivar_supported(): boolean;

export function memcpy_safe(
    dst: number,
    dst_sz: number,
    dst_offset: number,
    src: number,
    src_sz: number,
    src_offset: number,
    n: number
): boolean;

export type ArchiveIterateFunc = (self: Archive, filename: string, bytes: GLib.Bytes | Uint8Array) => boolean;
export type DeviceLockerFunc<A = GObject.Object> = (device: A) => boolean;
export type DeviceRetryFunc = (device: Device) => boolean;
export type OutputHandler = (line: string) => void;
export type QuirksIter = (self: Quirks, key: string, value: string) => void;

export namespace CabinetParseFlags {
    export const $gtype: GObject.GType<CabinetParseFlags>;
}

export enum CabinetParseFlags {
    NONE = 0,
}

export namespace CpuVendor {
    export const $gtype: GObject.GType<CpuVendor>;
}

export enum CpuVendor {
    UNKNOWN = 0,
    INTEL = 1,
    AMD = 2,
}

export namespace EfiSignatureKind {
    export const $gtype: GObject.GType<EfiSignatureKind>;
}

export enum EfiSignatureKind {
    UNKNOWN = 0,
    SHA256 = 1,
    X509 = 2,
}

export namespace FirmareSrecRecordKind {
    export const $gtype: GObject.GType<FirmareSrecRecordKind>;
}

export enum FirmareSrecRecordKind {
    S0_HEADER = 0,
    S1_DATA_16 = 1,
    S2_DATA_24 = 2,
    S3_DATA_32 = 3,
    S4_RESERVED = 4,
    S5_COUNT_16 = 5,
    S6_COUNT_24 = 6,
    S7_COUNT_32 = 7,
    S8_TERMINATION_24 = 8,
    S9_TERMINATION_16 = 9,
    LAST = 10,
}

export namespace PathKind {
    export const $gtype: GObject.GType<PathKind>;
}

export enum PathKind {
    CACHEDIR_PKG = 0,
    DATADIR_PKG = 1,
    EFIAPPDIR = 2,
    LOCALSTATEDIR = 3,
    LOCALSTATEDIR_PKG = 4,
    PLUGINDIR_PKG = 5,
    SYSCONFDIR = 6,
    SYSCONFDIR_PKG = 7,
    SYSFSDIR_FW = 8,
    SYSFSDIR_DRIVERS = 9,
    SYSFSDIR_TPM = 10,
    PROCFS = 11,
    POLKIT_ACTIONS = 12,
    OFFLINE_TRIGGER = 13,
    SYSFSDIR_SECURITY = 14,
    ACPI_TABLES = 15,
}

export namespace PluginRule {
    export const $gtype: GObject.GType<PluginRule>;
}

export enum PluginRule {
    CONFLICTS = 0,
    RUN_AFTER = 1,
    RUN_BEFORE = 2,
    BETTER_THAN = 3,
    INHIBITS_IDLE = 4,
    METADATA_SOURCE = 5,
}

export namespace PluginVerifyFlags {
    export const $gtype: GObject.GType<PluginVerifyFlags>;
}

export enum PluginVerifyFlags {
    NONE = 0,
}

export namespace SmbiosChassisKind {
    export const $gtype: GObject.GType<SmbiosChassisKind>;
}

export enum SmbiosChassisKind {
    OTHER = 1,
    UNKNOWN = 2,
    DESKTOP = 3,
    LOW_PROFILE_DESKTOP = 4,
    PIZZA_BOX = 5,
    MINI_TOWER = 6,
    TOWER = 7,
    PORTABLE = 8,
    LAPTOP = 9,
    NOTEBOOK = 10,
    HAND_HELD = 11,
    DOCKING_STATION = 12,
    ALL_IN_ONE = 13,
    SUB_NOTEBOOK = 14,
    SPACE_SAVING = 15,
    LUNCH_BOX = 16,
    MAIN_SERVER = 17,
    EXPANSION = 18,
    SUBCHASSIS = 19,
    BUS_EXPANSION = 20,
    PERIPHERAL = 21,
    RAID = 22,
    RACK_MOUNT = 23,
    SEALED_CASE_PC = 24,
    MULTI_SYSTEM = 25,
    COMPACT_PCI = 26,
    ADVANCED_TCA = 27,
    BLADE = 28,
    TABLET = 30,
    CONVERTIBLE = 31,
    DETACHABLE = 32,
    IOT_GATEWAY = 33,
    EMBEDDED_PC = 34,
    MINI_PC = 35,
    STICK_PC = 36,
}

export namespace AppFlags {
    export const $gtype: GObject.GType<AppFlags>;
}

export enum AppFlags {
    NONE = 0,
    NO_IDLE_SOURCES = 1,
}

export namespace ArchiveFlags {
    export const $gtype: GObject.GType<ArchiveFlags>;
}

export enum ArchiveFlags {
    NONE = 0,
    IGNORE_PATH = 1,
}

export namespace DeviceInstanceFlags {
    export const $gtype: GObject.GType<DeviceInstanceFlags>;
}

export enum DeviceInstanceFlags {
    NONE = 0,
    ONLY_QUIRKS = 1,
}

export namespace DeviceInternalFlags {
    export const $gtype: GObject.GType<DeviceInternalFlags>;
}

export enum DeviceInternalFlags {
    NONE = 0,
    NO_AUTO_INSTANCE_IDS = 1,
    ENSURE_SEMVER = 2,
    ONLY_SUPPORTED = 4,
    MD_SET_NAME = 8,
    MD_SET_NAME_CATEGORY = 16,
    MD_SET_VERFMT = 32,
    MD_SET_ICON = 64,
    RETRY_OPEN = 128,
}

export namespace DumpFlags {
    export const $gtype: GObject.GType<DumpFlags>;
}

export enum DumpFlags {
    NONE = 0,
    SHOW_ASCII = 1,
    SHOW_ADDRESSES = 2,
}

export namespace HidDeviceFlags {
    export const $gtype: GObject.GType<HidDeviceFlags>;
}

export enum HidDeviceFlags {
    NONE = 0,
    ALLOW_TRUNC = 1,
    IS_FEATURE = 2,
    RETRY_FAILURE = 4,
    NO_KERNEL_UNBIND = 8,
    NO_KERNEL_REBIND = 16,
}

export namespace IOChannelFlags {
    export const $gtype: GObject.GType<IOChannelFlags>;
}

export enum IOChannelFlags {
    NONE = 0,
    SINGLE_SHOT = 1,
    FLUSH_INPUT = 2,
    USE_BLOCKING_IO = 4,
}

export namespace QuirksLoadFlags {
    export const $gtype: GObject.GType<QuirksLoadFlags>;
}

export enum QuirksLoadFlags {
    NONE = 0,
    READONLY_FS = 1,
}

export namespace SecurityAttrsFlags {
    export const $gtype: GObject.GType<SecurityAttrsFlags>;
}

export enum SecurityAttrsFlags {
    NONE = 0,
    ADD_VERSION = 1,
}

export namespace UdevDeviceFlags {
    export const $gtype: GObject.GType<UdevDeviceFlags>;
}

export enum UdevDeviceFlags {
    NONE = 0,
    OPEN_READ = 1,
    OPEN_WRITE = 2,
    VENDOR_FROM_PARENT = 4,
    USE_CONFIG = 8,
    OPEN_NONBLOCK = 16,
}

export namespace Archive {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Archive extends GObject.Object {
    static $gtype: GObject.GType<Archive>;

    constructor(properties?: Partial<Archive.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Archive.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](data: GLib.Bytes | Uint8Array, flags: ArchiveFlags): Archive;

    // Members

    iterate(callback: ArchiveIterateFunc): boolean;

    lookup_by_fn(fn: string): GLib.Bytes;
}

export namespace Cabinet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Cabinet extends GObject.Object {
    static $gtype: GObject.GType<Cabinet>;

    constructor(properties?: Partial<Cabinet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Cabinet.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Cabinet;

    // Members

    parse(data: GLib.Bytes | Uint8Array, flags: CabinetParseFlags): boolean;

    set_size_max(size_max: number): void;
}

export namespace Device {
    export interface ConstructorProperties extends Fwupd.Device.ConstructorProperties {
        [key: string]: any;

        logical_id: string;
        logicalId: string;
        physical_id: string;
        physicalId: string;
        progress: number;
        proxy: Device;
        quirks: Quirks;
    }
}

export class Device extends Fwupd.Device {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    logical_id: string;
    logicalId: string;
    physical_id: string;
    physicalId: string;
    progress: number;
    proxy: Device;
    quirks: Quirks;

    // Constructors

    static ['new'](): Device;

    // Members

    activate(): boolean;

    add_child(child: Device): void;

    add_counterpart_guid(guid: string): void;

    add_flag(flag: Fwupd.DeviceFlags): void;

    add_guid(guid: string): void;

    add_instance_id(instance_id: string): void;

    add_instance_id_full(instance_id: string, flags: DeviceInstanceFlags): void;

    add_internal_flag(flag: DeviceInternalFlags): void;

    add_parent_guid(guid: string): void;

    add_possible_plugin(plugin: string): void;

    attach(): boolean;

    bind_driver(subsystem: string, driver: string): boolean;

    cleanup(flags: Fwupd.InstallFlags): boolean;

    close(): boolean;

    convert_instance_ids(): void;

    detach(): boolean;

    dump_firmware(): GLib.Bytes;

    ensure_id(): boolean;

    get_alternate(): Device;

    get_alternate_id(): string;

    get_children(): Device[];
    get_children(...args: never[]): never;

    get_custom_flags(): string;

    get_equivalent_id(): string;

    get_firmware_size_max(): number;

    get_firmware_size_min(): number;

    get_guids_as_str(): string;

    get_logical_id(): string;

    get_metadata(key: string): string;

    get_metadata_boolean(key: string): boolean;

    get_metadata_integer(key: string): number;

    get_order(): number;

    get_parent(): Device;

    get_parent_guids(): string[];

    get_physical_id(): string;

    get_possible_plugins(): string[];

    get_priority(): number;

    get_progress(): number;

    get_protocol(): string;

    get_proxy(): Device;

    get_proxy_guid(): string;

    get_quirks(): Quirks;

    get_release_default(): Fwupd.Release;

    get_remove_delay(): number;

    get_root(): Device;

    get_specialized_gtype(): GObject.GType;

    get_status(): Fwupd.Status;

    has_custom_flag(hint: string): boolean;

    has_guid(guid: string): boolean;

    has_internal_flag(flag: DeviceInternalFlags): boolean;

    has_parent_guid(guid: string): boolean;

    incorporate(donor: Device): void;

    incorporate_flag(donor: Device, flag: Fwupd.DeviceFlags): void;

    open(): boolean;

    poll(): boolean;

    prepare(flags: Fwupd.InstallFlags): boolean;

    prepare_firmware(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): Firmware;

    probe(): boolean;

    probe_invalidate(): void;

    read_firmware(): Firmware;

    reload(): boolean;

    remove_internal_flag(flag: DeviceInternalFlags): void;

    remove_metadata(key: string): void;

    report_metadata_post(): GLib.HashTable<any, any> | null;

    report_metadata_pre(): GLib.HashTable<any, any> | null;

    rescan(): boolean;

    retry(func: DeviceRetryFunc, count: number): boolean;

    retry_add_recovery(domain: GLib.Quark, code: number, func?: DeviceRetryFunc | null): void;

    retry_full(func: DeviceRetryFunc, count: number, delay: number): boolean;

    retry_set_delay(delay: number): void;

    set_alternate(alternate: Device): void;

    set_alternate_id(alternate_id: string): void;

    set_custom_flags(custom_flags: string): void;

    set_equivalent_id(equivalent_id: string): void;

    set_firmware_size(size: number): void;

    set_firmware_size_max(size_max: number): void;

    set_firmware_size_min(size_min: number): void;

    set_id(id: string): void;

    set_logical_id(logical_id: string): void;

    set_metadata(key: string, value: string): void;

    set_metadata_boolean(key: string, value: boolean): void;

    set_metadata_integer(key: string, value: number): void;

    set_name(value: string): void;

    set_order(order: number): void;

    set_parent(parent: Device): void;

    set_physical_id(physical_id: string): void;

    set_poll_interval(interval: number): void;

    set_priority(priority: number): void;

    set_progress(progress: number): void;

    set_progress_full(progress_done: number, progress_total: number): void;

    set_protocol(protocol: string): void;

    set_proxy(proxy: Device): void;

    set_proxy_guid(proxy_guid: string): void;

    set_quirks(quirks: Quirks): void;

    set_remove_delay(remove_delay: number): void;

    set_status(status: Fwupd.Status): void;

    set_version(version?: string | null): void;
    set_version(...args: never[]): never;

    set_version_bootloader(version?: string | null): void;
    set_version_bootloader(...args: never[]): never;

    set_version_format(fmt: Fwupd.VersionFormat): void;

    set_version_lowest(version?: string | null): void;
    set_version_lowest(...args: never[]): never;

    setup(): boolean;

    sleep_with_progress(delay_secs: number): void;

    to_string(): string;

    unbind_driver(): boolean;

    write_firmware(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    vfunc_activate(): boolean;

    vfunc_attach(): boolean;

    vfunc_bind_driver(subsystem: string, driver: string): boolean;

    vfunc_cleanup(flags: Fwupd.InstallFlags): boolean;

    vfunc_close(): boolean;

    vfunc_detach(): boolean;

    vfunc_dump_firmware(): GLib.Bytes;

    vfunc_incorporate(donor: Device): void;

    vfunc_open(): boolean;

    vfunc_poll(): boolean;

    vfunc_prepare(flags: Fwupd.InstallFlags): boolean;

    vfunc_prepare_firmware(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): Firmware;

    vfunc_probe(): boolean;

    vfunc_read_firmware(): Firmware;

    vfunc_reload(): boolean;

    vfunc_report_metadata_post(metadata: GLib.HashTable<any, any>): void;

    vfunc_report_metadata_pre(metadata: GLib.HashTable<any, any>): void;

    vfunc_rescan(): boolean;

    vfunc_set_quirk_kv(key: string, value: string): boolean;

    vfunc_setup(): boolean;

    vfunc_to_string(indent: number, str: GLib.String): void;

    vfunc_unbind_driver(): boolean;

    vfunc_write_firmware(firmware: Firmware, flags: Fwupd.InstallFlags): boolean;

    static internal_flag_from_string(flag: string): DeviceInternalFlags;

    static internal_flag_to_string(flag: DeviceInternalFlags): string;
}

export namespace DeviceLocker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceLocker extends GObject.Object {
    static $gtype: GObject.GType<DeviceLocker>;

    constructor(properties?: Partial<DeviceLocker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceLocker.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](device?: any | null): DeviceLocker;

    static new_full(device: any | null, open_func: DeviceLockerFunc, close_func: DeviceLockerFunc): DeviceLocker;

    // Members

    close(): boolean;
}

export namespace DfuFirmware {
    export interface ConstructorProperties extends Firmware.ConstructorProperties {
        [key: string]: any;
    }
}

export class DfuFirmware extends Firmware {
    static $gtype: GObject.GType<DfuFirmware>;

    constructor(properties?: Partial<DfuFirmware.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DfuFirmware.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): DfuFirmware;

    // Members

    get_pid(): number;

    get_release(): number;

    get_version(): number;
    get_version(...args: never[]): never;

    get_vid(): number;

    set_pid(pid: number): void;

    set_release(release: number): void;

    set_version(version: number): void;
    set_version(...args: never[]): never;

    set_vid(vid: number): void;
}

export namespace EfiSignature {
    export interface ConstructorProperties extends FirmwareImage.ConstructorProperties {
        [key: string]: any;
    }
}

export class EfiSignature extends FirmwareImage {
    static $gtype: GObject.GType<EfiSignature>;

    constructor(properties?: Partial<EfiSignature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EfiSignature.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_kind(): EfiSignatureKind;

    get_owner(): string;

    static kind_to_string(kind: EfiSignatureKind): string;
}

export namespace EfiSignatureList {
    export interface ConstructorProperties extends Firmware.ConstructorProperties {
        [key: string]: any;
    }
}

export class EfiSignatureList extends Firmware {
    static $gtype: GObject.GType<EfiSignatureList>;

    constructor(properties?: Partial<EfiSignatureList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EfiSignatureList.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): EfiSignatureList;
}

export namespace Firmware {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Firmware extends GObject.Object {
    static $gtype: GObject.GType<Firmware>;

    constructor(properties?: Partial<Firmware.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Firmware.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Firmware;

    static new_from_bytes(fw: GLib.Bytes | Uint8Array): Firmware;

    // Members

    add_flag(flag: FirmwareFlags): void;

    add_image(img: FirmwareImage): void;

    get_image_by_checksum(checksum: string): FirmwareImage;

    get_image_by_id(id?: string | null): FirmwareImage;

    get_image_by_id_bytes(id?: string | null): GLib.Bytes;

    get_image_by_idx(idx: number): FirmwareImage;

    get_image_by_idx_bytes(idx: number): GLib.Bytes;

    get_image_default(): FirmwareImage;

    get_image_default_bytes(): GLib.Bytes;

    get_images(): FirmwareImage[];

    get_version(): string;

    has_flag(flag: FirmwareFlags): boolean;

    parse(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    parse_file(file: Gio.File, flags: Fwupd.InstallFlags): boolean;

    parse_full(fw: GLib.Bytes | Uint8Array, addr_start: number, addr_end: number, flags: Fwupd.InstallFlags): boolean;

    remove_image(img: FirmwareImage): boolean;

    remove_image_by_id(id?: string | null): boolean;

    remove_image_by_idx(idx: number): boolean;

    set_version(version: string): void;

    to_string(): string;

    tokenize(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    write(): GLib.Bytes;

    write_file(file: Gio.File): boolean;

    vfunc_parse(fw: GLib.Bytes | Uint8Array, addr_start: number, addr_end: number, flags: Fwupd.InstallFlags): boolean;

    vfunc_to_string(indent: number, str: GLib.String): void;

    vfunc_tokenize(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    vfunc_write(): GLib.Bytes;

    static flag_from_string(flag: string): FirmwareFlags;

    static flag_to_string(flag: FirmwareFlags): string;

    static strparse_uint16(data: string): number;

    static strparse_uint24(data: string): number;

    static strparse_uint32(data: string): number;

    static strparse_uint4(data: string): number;

    static strparse_uint8(data: string): number;
}

export namespace FirmwareImage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FirmwareImage extends GObject.Object {
    static $gtype: GObject.GType<FirmwareImage>;

    constructor(properties?: Partial<FirmwareImage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FirmwareImage.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](bytes: GLib.Bytes | Uint8Array): FirmwareImage;

    // Members

    get_addr(): number;

    get_bytes(): GLib.Bytes;

    get_checksum(csum_kind: GLib.ChecksumType): string;

    get_filename(): string;

    get_id(): string;

    get_idx(): number;

    get_offset(): number;

    get_version(): string;

    parse(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    set_addr(addr: number): void;

    set_bytes(bytes: GLib.Bytes | Uint8Array): void;

    set_filename(filename?: string | null): void;

    set_id(id?: string | null): void;

    set_idx(idx: number): void;

    set_offset(offset: number): void;

    set_version(version?: string | null): void;

    to_string(): string;

    write(): GLib.Bytes;

    write_chunk(address: number, chunk_sz_max: number): GLib.Bytes;

    vfunc_get_checksum(csum_kind: GLib.ChecksumType): string;

    vfunc_parse(fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    vfunc_to_string(idt: number, str: GLib.String): void;

    vfunc_write(): GLib.Bytes;
}

export namespace FmapFirmware {
    export interface ConstructorProperties extends Firmware.ConstructorProperties {
        [key: string]: any;
    }
}

export class FmapFirmware extends Firmware {
    static $gtype: GObject.GType<FmapFirmware>;

    constructor(properties?: Partial<FmapFirmware.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FmapFirmware.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FmapFirmware;
}

export namespace HidDevice {
    export interface ConstructorProperties extends UsbDevice.ConstructorProperties {
        [key: string]: any;

        interface: number;
    }
}

export class HidDevice extends UsbDevice {
    static $gtype: GObject.GType<HidDevice>;

    constructor(properties?: Partial<HidDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HidDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    'interface': number;

    // Constructors

    static ['new'](usb_device: GUsb.Device): HidDevice;
    static ['new'](...args: never[]): never;

    // Members

    add_flag(flag: HidDeviceFlags): void;
    add_flag(...args: never[]): never;

    get_interface(): number;

    get_report(value: number, buf: number | null, bufsz: number, timeout: number, flags: HidDeviceFlags): boolean;

    set_interface(_interface: number): void;

    set_report(value: number, buf: number | null, bufsz: number, timeout: number, flags: HidDeviceFlags): boolean;

    vfunc_close(): boolean;

    vfunc_open(): boolean;
}

export namespace Hwids {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Hwids extends GObject.Object {
    static $gtype: GObject.GType<Hwids>;

    constructor(properties?: Partial<Hwids.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Hwids.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Hwids;

    // Members

    get_guid(keys: string): string;

    get_guids(): string[];

    get_replace_keys(key: string): string;

    get_replace_values(keys: string): string;

    get_value(key: string): string;

    has_guid(guid: string): boolean;

    setup(smbios: Smbios): boolean;
}

export namespace IOChannel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class IOChannel extends GObject.Object {
    static $gtype: GObject.GType<IOChannel>;

    constructor(properties?: Partial<IOChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IOChannel.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_file(filename: string): IOChannel;

    static unix_new(fd: number): IOChannel;

    // Members

    read_byte_array(max_size: number, timeout_ms: number, flags: IOChannelFlags): Uint8Array;

    read_bytes(max_size: number, timeout_ms: number, flags: IOChannelFlags): GLib.Bytes;

    read_raw(buf: number, bufsz: number, timeout_ms: number, flags: IOChannelFlags): [boolean, number];

    shutdown(): boolean;

    unix_get_fd(): number;

    write_byte_array(buf: Uint8Array | string, timeout_ms: number, flags: IOChannelFlags): boolean;

    write_bytes(bytes: GLib.Bytes | Uint8Array, timeout_ms: number, flags: IOChannelFlags): boolean;

    write_raw(data: number, datasz: number, timeout_ms: number, flags: IOChannelFlags): boolean;
}

export namespace IhexFirmware {
    export interface ConstructorProperties extends Firmware.ConstructorProperties {
        [key: string]: any;
    }
}

export class IhexFirmware extends Firmware {
    static $gtype: GObject.GType<IhexFirmware>;

    constructor(properties?: Partial<IhexFirmware.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IhexFirmware.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): IhexFirmware;

    // Members

    get_records(): IhexFirmwareRecord[];
}

export namespace Plugin {
    export interface ConstructorProperties extends Fwupd.Plugin.ConstructorProperties {
        [key: string]: any;
    }
}

export class Plugin extends Fwupd.Plugin {
    static $gtype: GObject.GType<Plugin>;

    constructor(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'add-firmware-gtype', callback: (_source: this, object: string, p0: GObject.GType) => void): number;

    connect_after(
        signal: 'add-firmware-gtype',
        callback: (_source: this, object: string, p0: GObject.GType) => void
    ): number;

    emit(signal: 'add-firmware-gtype', object: string, p0: GObject.GType): void;

    connect(signal: 'check-supported', callback: (_source: this, object: string) => boolean): number;

    connect_after(signal: 'check-supported', callback: (_source: this, object: string) => boolean): number;

    emit(signal: 'check-supported', object: string): void;

    connect(signal: 'device-added', callback: (_source: this, object: Device) => void): number;

    connect_after(signal: 'device-added', callback: (_source: this, object: Device) => void): number;

    emit(signal: 'device-added', object: Device): void;

    connect(signal: 'device-register', callback: (_source: this, object: Device) => void): number;

    connect_after(signal: 'device-register', callback: (_source: this, object: Device) => void): number;

    emit(signal: 'device-register', object: Device): void;

    connect(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;

    connect_after(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;

    emit(signal: 'device-removed', object: Device): void;

    connect(signal: 'recoldplug', callback: (_source: this) => void): number;

    connect_after(signal: 'recoldplug', callback: (_source: this) => void): number;

    emit(signal: 'recoldplug'): void;

    connect(signal: 'rules-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'rules-changed', callback: (_source: this) => void): number;

    emit(signal: 'rules-changed'): void;

    connect(signal: 'security-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'security-changed', callback: (_source: this) => void): number;

    emit(signal: 'security-changed'): void;

    connect(signal: 'set-coldplug-delay', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'set-coldplug-delay', callback: (_source: this, object: number) => void): number;

    emit(signal: 'set-coldplug-delay', object: number): void;

    // Constructors

    static ['new'](): Plugin;

    // Members

    add_compile_version(component_id: string, version: string): void;

    add_firmware_gtype(id: string | null, gtype: GObject.GType): void;

    add_report_metadata(key: string, value: string): void;

    add_rule(rule: PluginRule, name: string): void;

    add_runtime_version(component_id: string, version: string): void;

    add_udev_subsystem(subsystem: string): void;

    cache_add(id: string, dev?: any | null): void;

    cache_lookup(id: string): any | null;

    cache_remove(id: string): void;

    check_hwid(hwid: string): boolean;

    device_add(device: Device): void;

    device_register(device: Device): void;

    device_remove(device: Device): void;

    get_build_hash(): string;

    get_config_value(key: string): string;

    get_config_value_boolean(key: string): boolean;

    get_data(): PluginData;
    get_data(...args: never[]): never;

    get_dmi_value(dmi_id: string): string;

    get_enabled(): boolean;

    get_hwid_replace_value(keys: string): string;

    get_hwids(): string[];

    get_name(): string;

    get_order(): number;

    get_priority(): number;

    get_quirks(): Quirks;

    get_report_metadata(): GLib.HashTable<any, any> | null;

    get_rules(rule: PluginRule): string[] | null;

    get_smbios_data(structure_type: number): GLib.Bytes;

    get_smbios_string(structure_type: number, offset: number): string;

    get_usb_context(): GUsb.Context;

    has_custom_flag(flag: string): boolean;

    has_rule(rule: PluginRule, name: string): boolean;

    is_open(): boolean;

    lookup_quirk_by_id(group: string, key: string): string;

    lookup_quirk_by_id_as_uint64(group: string, key: string): number;

    name_compare(plugin2: Plugin): number;

    open(filename: string): boolean;

    order_compare(plugin2: Plugin): number;

    request_recoldplug(): void;

    runner_activate(device: Device): boolean;

    runner_add_security_attrs(attrs: SecurityAttrs): void;

    runner_clear_results(device: Device): boolean;

    runner_coldplug(): boolean;

    runner_coldplug_cleanup(): boolean;

    runner_coldplug_prepare(): boolean;

    runner_composite_cleanup(devices: Device[]): boolean;

    runner_composite_prepare(devices: Device[]): boolean;

    runner_device_added(device: Device): void;

    runner_device_created(device: Device): boolean;

    runner_device_register(device: Device): void;

    runner_device_removed(device: Device): void;

    runner_get_results(device: Device): boolean;

    runner_recoldplug(): boolean;

    runner_startup(): boolean;

    runner_udev_device_added(device: UdevDevice): boolean;

    runner_udev_device_changed(device: UdevDevice): boolean;

    runner_unlock(device: Device): boolean;

    runner_update(device: Device, blob_fw: GLib.Bytes | Uint8Array, flags: Fwupd.InstallFlags): boolean;

    runner_update_attach(device: Device): boolean;

    runner_update_cleanup(flags: Fwupd.InstallFlags, device: Device): boolean;

    runner_update_detach(device: Device): boolean;

    runner_update_prepare(flags: Fwupd.InstallFlags, device: Device): boolean;

    runner_update_reload(device: Device): boolean;

    runner_usb_device_added(device: UsbDevice): boolean;

    runner_verify(device: Device, flags: PluginVerifyFlags): boolean;

    security_changed(): void;

    set_build_hash(build_hash: string): void;

    set_coldplug_delay(duration: number): void;

    set_compile_versions(compile_versions: GLib.HashTable<any, any>): void;

    set_device_gtype(device_gtype: GObject.GType): void;

    set_enabled(enabled: boolean): void;

    set_hwids(hwids: Hwids): void;

    set_name(name: string): void;

    set_order(order: number): void;

    set_priority(priority: number): void;

    set_quirks(quirks: Quirks): void;

    set_runtime_versions(runtime_versions: GLib.HashTable<any, any>): void;

    set_smbios(smbios: Smbios): void;

    set_udev_subsystems(udev_subsystems: string[]): void;

    set_usb_context(usb_ctx: GUsb.Context): void;

    vfunc_add_firmware_gtype(id: string, gtype: GObject.GType): boolean;

    vfunc_check_supported(guid: string): boolean;

    vfunc_device_added(device: Device): void;

    vfunc_device_register(device: Device): void;

    vfunc_device_removed(device: Device): void;

    vfunc_percentage_changed(percentage: number): void;

    vfunc_recoldplug(): void;

    vfunc_rules_changed(): void;

    vfunc_security_changed(): void;

    vfunc_set_coldplug_delay(duration: number): void;

    vfunc_status_changed(status: Fwupd.Status): void;

    static guess_name_from_fn(filename: string): string;
}

export namespace Quirks {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Quirks extends GObject.Object {
    static $gtype: GObject.GType<Quirks>;

    constructor(properties?: Partial<Quirks.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Quirks.ConstructorProperties>, ...args: any[]): void;

    // Members

    lookup_by_id(group: string, key: string): string;

    lookup_by_id_iter(group: string, iter_cb: QuirksIter): boolean;
}

export namespace SecurityAttrs {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SecurityAttrs extends GObject.Object {
    static $gtype: GObject.GType<SecurityAttrs>;

    constructor(properties?: Partial<SecurityAttrs.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SecurityAttrs.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): SecurityAttrs;

    // Members

    append(attr: Fwupd.SecurityAttr): void;

    calculate_hsi(flags: SecurityAttrsFlags): string;

    depsolve(): void;

    get_all(): Fwupd.SecurityAttr[];

    remove_all(): void;

    to_variant(): GLib.Variant;
}

export namespace Smbios {
    export interface ConstructorProperties extends Firmware.ConstructorProperties {
        [key: string]: any;
    }
}

export class Smbios extends Firmware {
    static $gtype: GObject.GType<Smbios>;

    constructor(properties?: Partial<Smbios.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Smbios.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Smbios;

    // Members

    get_data(type: number): GLib.Bytes;
    get_data(...args: never[]): never;

    get_integer(type: number, offset: number): number;

    get_string(type: number, offset: number): string;

    setup(): boolean;

    setup_from_file(filename: string): boolean;

    setup_from_path(path: string): boolean;

    to_string(): string;
}

export namespace SrecFirmware {
    export interface ConstructorProperties extends Firmware.ConstructorProperties {
        [key: string]: any;
    }
}

export class SrecFirmware extends Firmware {
    static $gtype: GObject.GType<SrecFirmware>;

    constructor(properties?: Partial<SrecFirmware.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SrecFirmware.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): SrecFirmware;
}

export namespace UdevDevice {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;

        device_file: string;
        deviceFile: string;
        driver: string;
        subsystem: string;
    }
}

export class UdevDevice extends Device {
    static $gtype: GObject.GType<UdevDevice>;

    constructor(properties?: Partial<UdevDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UdevDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device_file: string;
    deviceFile: string;
    driver: string;
    subsystem: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](udev_device: GObject.Object): UdevDevice;
    static ['new'](...args: never[]): never;

    // Members

    emit_changed(): void;

    get_dev<T = GObject.Object>(): T;

    get_device_file(): string;

    get_devtype(): string;

    get_driver(): string;

    get_fd(): number;

    get_model(): number;

    get_number(): number;

    get_parent_name(): string;

    get_revision(): number;

    get_slot_depth(subsystem: string): number;

    get_subsystem(): string;

    get_subsystem_model(): number;

    get_subsystem_vendor(): number;

    get_sysfs_attr(attr: string): string;

    get_sysfs_path(): string;

    get_vendor(): number;
    get_vendor(...args: never[]): never;

    ioctl(request: number, buf: number): [boolean, number | null];

    pread(port: number): [boolean, number];

    pread_full(port: number, buf: number, bufsz: number): boolean;

    pwrite(port: number, data: number): boolean;

    pwrite_full(port: number, bufsz: number): [boolean, number];

    set_fd(fd: number): void;

    set_flags(flags: UdevDeviceFlags): void;
    set_flags(...args: never[]): never;

    set_physical_id(subsystems: string): boolean;
    set_physical_id(...args: never[]): never;

    set_readonly(readonly: boolean): void;

    write_sysfs(attribute: string, val: string): boolean;

    vfunc_close(): boolean;

    vfunc_open(): boolean;

    vfunc_probe(): boolean;

    vfunc_to_string(indent: number, str: GLib.String): void;
}

export namespace UsbDevice {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;

        usb_device: GUsb.Device;
        usbDevice: GUsb.Device;
    }
}

export class UsbDevice extends Device {
    static $gtype: GObject.GType<UsbDevice>;

    constructor(properties?: Partial<UsbDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UsbDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    usb_device: GUsb.Device;
    usbDevice: GUsb.Device;

    // Constructors

    static ['new'](usb_device: GUsb.Device): UsbDevice;
    static ['new'](...args: never[]): never;

    // Members

    find_udev_device<T = GObject.Object>(): T;

    get_dev(): GUsb.Device;

    get_pid(): number;

    get_platform_id(): string;

    get_spec(): number;

    get_vid(): number;

    is_open(): boolean;

    set_dev(usb_device: GUsb.Device): void;

    vfunc_close(): boolean;

    vfunc_open(): boolean;

    vfunc_probe(): boolean;
}

export namespace Volume {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        mount_path: string;
        mountPath: string;
        proxy_block: Gio.DBusProxy;
        proxyBlock: Gio.DBusProxy;
        proxy_filesystem: Gio.DBusProxy;
        proxyFilesystem: Gio.DBusProxy;
    }
}

export class Volume extends GObject.Object {
    static $gtype: GObject.GType<Volume>;

    constructor(properties?: Partial<Volume.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Volume.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mount_path: string;
    mountPath: string;
    proxy_block: Gio.DBusProxy;
    proxyBlock: Gio.DBusProxy;
    proxy_filesystem: Gio.DBusProxy;
    proxyFilesystem: Gio.DBusProxy;

    // Members

    check_free_space(required: number): boolean;

    get_id(): string;

    get_id_type(): string;

    get_mount_point(): string;

    is_encrypted(): boolean;

    is_internal(): boolean;

    is_mounted(): boolean;

    locker(): DeviceLocker;

    mount(): boolean;

    unmount(): boolean;
}

export class Chunk {
    static $gtype: GObject.GType<Chunk>;

    constructor(
        properties?: Partial<{
            idx?: number;
            page?: number;
            address?: number;
            data?: number;
            data_sz?: number;
        }>
    );

    constructor(copy: Chunk);

    // Fields
    idx: number;
    page: number;
    address: number;
    data: number;
    data_sz: number;

    // Members
    to_string(): string;

    static array_to_string(chunks: Chunk[]): string;
}

export class Fmap {
    static $gtype: GObject.GType<Fmap>;

    constructor(copy: Fmap);

    // Fields
    signature: Uint8Array;
    ver_major: number;
    ver_minor: number;
    base: number;
    size: number;
    name: Uint8Array;
    nareas: number;
    areas: FmapArea[];
}

export class FmapArea {
    static $gtype: GObject.GType<FmapArea>;

    constructor(copy: FmapArea);

    // Fields
    offset: number;
    size: number;
    name: Uint8Array;
    flags: number;
}

export class IhexFirmwareRecord {
    static $gtype: GObject.GType<IhexFirmwareRecord>;

    constructor(copy: IhexFirmwareRecord);

    // Fields
    ln: number;
    buf: GLib.String;
    byte_cnt: number;
    addr: number;
    record_type: number;
    data: Uint8Array;
}

export class PluginData {
    static $gtype: GObject.GType<PluginData>;

    constructor(copy: PluginData);
}

export type EndianType = number;
export type FirmwareFlags = number;
