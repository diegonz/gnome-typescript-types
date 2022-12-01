/**
 * UDisks 2.0
 *
 * Generated from 2.9.1
 */

import * as Gio from './gio';
import * as GObject from './gobject';
import * as GLib from './glib';

export const ERROR_NUM_ENTRIES: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function block_bcache_interface_info(): Gio.DBusInterfaceInfo;

export function block_bcache_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function block_interface_info(): Gio.DBusInterfaceInfo;

export function block_lvm2_interface_info(): Gio.DBusInterfaceInfo;

export function block_lvm2_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function block_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function block_zram_interface_info(): Gio.DBusInterfaceInfo;

export function block_zram_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function drive_ata_interface_info(): Gio.DBusInterfaceInfo;

export function drive_ata_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function drive_interface_info(): Gio.DBusInterfaceInfo;

export function drive_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function encrypted_interface_info(): Gio.DBusInterfaceInfo;

export function encrypted_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function error_quark(): GLib.Quark;

export function filesystem_btrfs_interface_info(): Gio.DBusInterfaceInfo;

export function filesystem_btrfs_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function filesystem_interface_info(): Gio.DBusInterfaceInfo;

export function filesystem_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function job_interface_info(): Gio.DBusInterfaceInfo;

export function job_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function logical_volume_interface_info(): Gio.DBusInterfaceInfo;

export function logical_volume_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function loop_interface_info(): Gio.DBusInterfaceInfo;

export function loop_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function manager_bcache_interface_info(): Gio.DBusInterfaceInfo;

export function manager_bcache_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function manager_btrfs_interface_info(): Gio.DBusInterfaceInfo;

export function manager_btrfs_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function manager_interface_info(): Gio.DBusInterfaceInfo;

export function manager_lvm2_interface_info(): Gio.DBusInterfaceInfo;

export function manager_lvm2_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function manager_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function manager_zram_interface_info(): Gio.DBusInterfaceInfo;

export function manager_zram_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function mdraid_interface_info(): Gio.DBusInterfaceInfo;

export function mdraid_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function partition_interface_info(): Gio.DBusInterfaceInfo;

export function partition_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function partition_table_interface_info(): Gio.DBusInterfaceInfo;

export function partition_table_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function physical_volume_interface_info(): Gio.DBusInterfaceInfo;

export function physical_volume_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function swapspace_interface_info(): Gio.DBusInterfaceInfo;

export function swapspace_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function vdo_volume_interface_info(): Gio.DBusInterfaceInfo;

export function vdo_volume_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function volume_group_interface_info(): Gio.DBusInterfaceInfo;

export function volume_group_override_properties(klass: GObject.Object, property_id_begin: number): number;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static FAILED: number;
    static CANCELLED: number;
    static ALREADY_CANCELLED: number;
    static NOT_AUTHORIZED: number;
    static NOT_AUTHORIZED_CAN_OBTAIN: number;
    static NOT_AUTHORIZED_DISMISSED: number;
    static ALREADY_MOUNTED: number;
    static NOT_MOUNTED: number;
    static OPTION_NOT_PERMITTED: number;
    static MOUNTED_BY_OTHER_USER: number;
    static ALREADY_UNMOUNTING: number;
    static NOT_SUPPORTED: number;
    static TIMED_OUT: number;
    static WOULD_WAKEUP: number;
    static DEVICE_BUSY: number;
    static ISCSI_DAEMON_TRANSPORT_FAILED: number;
    static ISCSI_HOST_NOT_FOUND: number;
    static ISCSI_IDMB: number;
    static ISCSI_LOGIN_FAILED: number;
    static ISCSI_LOGIN_AUTH_FAILED: number;
    static ISCSI_LOGIN_FATAL: number;
    static ISCSI_LOGOUT_FAILED: number;
    static ISCSI_NO_FIRMWARE: number;
    static ISCSI_NO_OBJECTS_FOUND: number;
    static ISCSI_NOT_CONNECTED: number;
    static ISCSI_TRANSPORT_FAILED: number;
    static ISCSI_UNKNOWN_DISCOVERY_TYPE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PartitionTypeInfoFlags {
    export const $gtype: GObject.GType<PartitionTypeInfoFlags>;
}

export enum PartitionTypeInfoFlags {
    NONE = 0,
    SWAP = 1,
    RAID = 2,
    HIDDEN = 4,
    CREATE_ONLY = 8,
    SYSTEM = 16,
}

export namespace BlockBcacheProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockBcacheProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<BlockBcacheProxy>, Gio.DBusInterface, Gio.Initable, BlockBcache {
    static $gtype: GObject.GType<BlockBcacheProxy>;

    constructor(properties?: Partial<BlockBcacheProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockBcacheProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    block_size: number;
    blockSize: number;
    bypass_hits: number;
    bypassHits: number;
    bypass_misses: number;
    bypassMisses: number;
    cache_size: number;
    cacheSize: number;
    cache_used: number;
    cacheUsed: number;
    hits: number;
    misses: number;
    mode: string;
    state: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): BlockBcacheProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): BlockBcacheProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockBcacheProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockBcacheProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockBcacheProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockBcacheProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): BlockBcacheProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_bcache_destroy(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_bcache_destroy_finish(res: Gio.AsyncResult): boolean;

    call_bcache_destroy_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_mode(
        arg_mode: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_mode_finish(res: Gio.AsyncResult): boolean;

    call_set_mode_sync(arg_mode: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_bcache_destroy(invocation: Gio.DBusMethodInvocation): void;

    complete_set_mode(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_bcache_destroy(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_mode(invocation: Gio.DBusMethodInvocation, arg_mode: string, arg_options: GLib.Variant): boolean;
}

export namespace BlockBcacheSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockBcacheSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, BlockBcache {
    static $gtype: GObject.GType<BlockBcacheSkeleton>;

    constructor(properties?: Partial<BlockBcacheSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockBcacheSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    block_size: number;
    blockSize: number;
    bypass_hits: number;
    bypassHits: number;
    bypass_misses: number;
    bypassMisses: number;
    cache_size: number;
    cacheSize: number;
    cache_used: number;
    cacheUsed: number;
    hits: number;
    misses: number;
    mode: string;
    state: string;

    // Constructors

    static ['new'](): BlockBcacheSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_bcache_destroy(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_bcache_destroy_finish(res: Gio.AsyncResult): boolean;

    call_bcache_destroy_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_mode(
        arg_mode: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_mode_finish(res: Gio.AsyncResult): boolean;

    call_set_mode_sync(arg_mode: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_bcache_destroy(invocation: Gio.DBusMethodInvocation): void;

    complete_set_mode(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_bcache_destroy(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_mode(invocation: Gio.DBusMethodInvocation, arg_mode: string, arg_options: GLib.Variant): boolean;
}

export namespace BlockLVM2Proxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockLVM2Proxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<BlockLVM2Proxy>, Gio.DBusInterface, Gio.Initable, BlockLVM2 {
    static $gtype: GObject.GType<BlockLVM2Proxy>;

    constructor(properties?: Partial<BlockLVM2Proxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockLVM2Proxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    logical_volume: string;
    logicalVolume: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): BlockLVM2Proxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): BlockLVM2Proxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockLVM2Proxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockLVM2Proxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockLVM2Proxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockLVM2Proxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): BlockLVM2Proxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace BlockLVM2Skeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockLVM2Skeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, BlockLVM2 {
    static $gtype: GObject.GType<BlockLVM2Skeleton>;

    constructor(properties?: Partial<BlockLVM2Skeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockLVM2Skeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    logical_volume: string;
    logicalVolume: string;

    // Constructors

    static ['new'](): BlockLVM2Skeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace BlockProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<BlockProxy>, Gio.DBusInterface, Gio.Initable, Block {
    static $gtype: GObject.GType<BlockProxy>;

    constructor(properties?: Partial<BlockProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    configuration: GLib.Variant;
    crypto_backing_device: string;
    cryptoBackingDevice: string;
    device: string;
    device_number: number;
    deviceNumber: number;
    drive: string;
    hint_auto: boolean;
    hintAuto: boolean;
    hint_icon_name: string;
    hintIconName: string;
    hint_ignore: boolean;
    hintIgnore: boolean;
    hint_name: string;
    hintName: string;
    hint_partitionable: boolean;
    hintPartitionable: boolean;
    hint_symbolic_icon_name: string;
    hintSymbolicIconName: string;
    hint_system: boolean;
    hintSystem: boolean;
    id: string;
    id_label: string;
    idLabel: string;
    id_type: string;
    idType: string;
    id_usage: string;
    idUsage: string;
    id_uuid: string;
    idUuid: string;
    id_version: string;
    idVersion: string;
    mdraid: string;
    mdraid_member: string;
    mdraidMember: string;
    preferred_device: string;
    preferredDevice: string;
    read_only: boolean;
    readOnly: boolean;
    size: number;
    symlinks: string[];
    userspace_mount_options: string[];
    userspaceMountOptions: string[];

    // Constructors

    static new_finish(res: Gio.AsyncResult): BlockProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): BlockProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): BlockProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_add_configuration_item(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_add_configuration_item_sync(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_format(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_format_finish(res: Gio.AsyncResult): boolean;

    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_get_secret_configuration(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_secret_configuration_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_get_secret_configuration_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_open_device(
        arg_mode: string,
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_device_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_device_sync(
        arg_mode: string,
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_backup(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_backup_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_backup_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_benchmark(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_benchmark_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_benchmark_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_restore(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_restore_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_restore_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_remove_configuration_item(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_remove_configuration_item_sync(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_rescan(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rescan_finish(res: Gio.AsyncResult): boolean;

    call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_update_configuration_item(
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_update_configuration_item_sync(
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    complete_format(invocation: Gio.DBusMethodInvocation): void;

    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void;

    complete_open_device(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;

    complete_open_for_backup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_open_for_benchmark(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_open_for_restore(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    complete_rescan(invocation: Gio.DBusMethodInvocation): void;

    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_open_device(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_mode: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_backup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_benchmark(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_restore(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_update_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace BlockSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Block {
    static $gtype: GObject.GType<BlockSkeleton>;

    constructor(properties?: Partial<BlockSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    configuration: GLib.Variant;
    crypto_backing_device: string;
    cryptoBackingDevice: string;
    device: string;
    device_number: number;
    deviceNumber: number;
    drive: string;
    hint_auto: boolean;
    hintAuto: boolean;
    hint_icon_name: string;
    hintIconName: string;
    hint_ignore: boolean;
    hintIgnore: boolean;
    hint_name: string;
    hintName: string;
    hint_partitionable: boolean;
    hintPartitionable: boolean;
    hint_symbolic_icon_name: string;
    hintSymbolicIconName: string;
    hint_system: boolean;
    hintSystem: boolean;
    id: string;
    id_label: string;
    idLabel: string;
    id_type: string;
    idType: string;
    id_usage: string;
    idUsage: string;
    id_uuid: string;
    idUuid: string;
    id_version: string;
    idVersion: string;
    mdraid: string;
    mdraid_member: string;
    mdraidMember: string;
    preferred_device: string;
    preferredDevice: string;
    read_only: boolean;
    readOnly: boolean;
    size: number;
    symlinks: string[];
    userspace_mount_options: string[];
    userspaceMountOptions: string[];

    // Constructors

    static ['new'](): BlockSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_add_configuration_item(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_add_configuration_item_sync(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_format(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_format_finish(res: Gio.AsyncResult): boolean;

    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_get_secret_configuration(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_secret_configuration_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_get_secret_configuration_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_open_device(
        arg_mode: string,
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_device_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_device_sync(
        arg_mode: string,
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_backup(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_backup_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_backup_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_benchmark(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_benchmark_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_benchmark_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_restore(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_restore_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_restore_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_remove_configuration_item(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_remove_configuration_item_sync(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_rescan(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rescan_finish(res: Gio.AsyncResult): boolean;

    call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_update_configuration_item(
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_update_configuration_item_sync(
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    complete_format(invocation: Gio.DBusMethodInvocation): void;

    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void;

    complete_open_device(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;

    complete_open_for_backup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_open_for_benchmark(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_open_for_restore(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    complete_rescan(invocation: Gio.DBusMethodInvocation): void;

    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_open_device(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_mode: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_backup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_benchmark(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_restore(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_update_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace BlockZRAMProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockZRAMProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<BlockZRAMProxy>, Gio.DBusInterface, Gio.Initable, BlockZRAM {
    static $gtype: GObject.GType<BlockZRAMProxy>;

    constructor(properties?: Partial<BlockZRAMProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockZRAMProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;
    comp_algorithm: string;
    compAlgorithm: string;
    compr_data_size: number;
    comprDataSize: number;
    disksize: number;
    invalid_io: number;
    invalidIo: number;
    max_comp_streams: number;
    maxCompStreams: number;
    mem_used_total: number;
    memUsedTotal: number;
    num_reads: number;
    numReads: number;
    num_writes: number;
    numWrites: number;
    orig_data_size: number;
    origDataSize: number;
    zero_pages: number;
    zeroPages: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): BlockZRAMProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): BlockZRAMProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockZRAMProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): BlockZRAMProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockZRAMProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BlockZRAMProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): BlockZRAMProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_activate(
        arg_priority: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_finish(res: Gio.AsyncResult): boolean;

    call_activate_labeled(
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_labeled_finish(res: Gio.AsyncResult): boolean;

    call_activate_labeled_sync(
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_activate_sync(arg_priority: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_deactivate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_deactivate_finish(res: Gio.AsyncResult): boolean;

    call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_refresh(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_refresh_finish(res: Gio.AsyncResult): boolean;

    call_refresh_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_activate(invocation: Gio.DBusMethodInvocation): void;

    complete_activate_labeled(invocation: Gio.DBusMethodInvocation): void;

    complete_deactivate(invocation: Gio.DBusMethodInvocation): void;

    complete_refresh(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_activate(
        invocation: Gio.DBusMethodInvocation,
        arg_priority: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_activate_labeled(
        invocation: Gio.DBusMethodInvocation,
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace BlockZRAMSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockZRAMSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, BlockZRAM {
    static $gtype: GObject.GType<BlockZRAMSkeleton>;

    constructor(properties?: Partial<BlockZRAMSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockZRAMSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;
    comp_algorithm: string;
    compAlgorithm: string;
    compr_data_size: number;
    comprDataSize: number;
    disksize: number;
    invalid_io: number;
    invalidIo: number;
    max_comp_streams: number;
    maxCompStreams: number;
    mem_used_total: number;
    memUsedTotal: number;
    num_reads: number;
    numReads: number;
    num_writes: number;
    numWrites: number;
    orig_data_size: number;
    origDataSize: number;
    zero_pages: number;
    zeroPages: number;

    // Constructors

    static ['new'](): BlockZRAMSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_activate(
        arg_priority: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_finish(res: Gio.AsyncResult): boolean;

    call_activate_labeled(
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_labeled_finish(res: Gio.AsyncResult): boolean;

    call_activate_labeled_sync(
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_activate_sync(arg_priority: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_deactivate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_deactivate_finish(res: Gio.AsyncResult): boolean;

    call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_refresh(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_refresh_finish(res: Gio.AsyncResult): boolean;

    call_refresh_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_activate(invocation: Gio.DBusMethodInvocation): void;

    complete_activate_labeled(invocation: Gio.DBusMethodInvocation): void;

    complete_deactivate(invocation: Gio.DBusMethodInvocation): void;

    complete_refresh(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_activate(
        invocation: Gio.DBusMethodInvocation,
        arg_priority: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_activate_labeled(
        invocation: Gio.DBusMethodInvocation,
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        bus_connection: Gio.DBusConnection;
        busConnection: Gio.DBusConnection;
        manager: Manager;
        object_manager: Gio.DBusObjectManager;
        objectManager: Gio.DBusObjectManager;
    }
}

export class Client extends GObject.Object implements Gio.AsyncInitable<Client>, Gio.Initable {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bus_connection: Gio.DBusConnection;
    busConnection: Gio.DBusConnection;
    manager: Manager;
    object_manager: Gio.DBusObjectManager;
    objectManager: Gio.DBusObjectManager;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): Client;
    static new_finish(...args: never[]): never;

    static new_for_connection_finish(res: Gio.AsyncResult): Client;

    static new_sync(cancellable?: Gio.Cancellable | null): Client;

    // Members

    get_all_blocks_for_mdraid(raid: MDRaid): Block[];

    get_block_for_dev(block_device_number: number): Block;

    get_block_for_drive(drive: Drive, get_physical: boolean): Block;

    get_block_for_label(label: string): Block[];

    get_block_for_mdraid(raid: MDRaid): Block;

    get_block_for_uuid(uuid: string): Block[];

    get_cleartext_block(block: Block): Block;

    get_drive_for_block(block: Block): Drive;

    get_drive_info(drive: Drive): [string | null, string | null, Gio.Icon | null, string | null, Gio.Icon | null];

    get_drive_siblings(drive: Drive): Drive[];

    get_id_for_display(usage: string, type: string, version: string, long_string: boolean): string;

    get_job_description(job: Job): string;

    get_jobs_for_object(object: Object): Job[];

    get_loop_for_block(block: Block): Loop;

    get_manager(): Manager;

    get_mdraid_for_block(block: Block): MDRaid;

    get_media_compat_for_display(media_compat: string): string;

    get_members_for_mdraid(raid: MDRaid): Block[];

    get_object(object_path: string): Object;

    get_object_info(object: Object): ObjectInfo;

    get_object_manager(): Gio.DBusObjectManager;

    get_partition_info(partition: Partition): string;

    get_partition_table(partition: Partition): PartitionTable;

    get_partition_table_subtype_for_display(partition_table_type: string, partition_table_subtype: string): string;

    get_partition_table_subtypes(partition_table_type: string): string[];

    get_partition_table_type_for_display(partition_table_type: string): string;

    get_partition_type_and_subtype_for_display(
        partition_table_type: string,
        partition_table_subtype: string,
        partition_type: string
    ): string;

    get_partition_type_for_display(partition_table_type: string, partition_type: string): string;

    get_partition_type_infos(
        partition_table_type: string,
        partition_table_subtype?: string | null
    ): PartitionTypeInfo[];

    get_partitions(table: PartitionTable): Partition[];

    get_size_for_display(size: number, use_pow2: boolean, long_string: boolean): string;

    peek_object(object_path: string): Object;

    queue_changed(): void;

    settle(): void;

    static get_job_description_from_operation(operation: string): string;

    static new(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

    static new_for_connection(
        connection?: Gio.DBusConnection | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Client> | null
    ): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): Client;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DriveAtaProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class DriveAtaProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<DriveAtaProxy>, Gio.DBusInterface, Gio.Initable, DriveAta {
    static $gtype: GObject.GType<DriveAtaProxy>;

    constructor(properties?: Partial<DriveAtaProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DriveAtaProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    aam_enabled: boolean;
    aamEnabled: boolean;
    aam_supported: boolean;
    aamSupported: boolean;
    aam_vendor_recommended_value: number;
    aamVendorRecommendedValue: number;
    apm_enabled: boolean;
    apmEnabled: boolean;
    apm_supported: boolean;
    apmSupported: boolean;
    pm_enabled: boolean;
    pmEnabled: boolean;
    pm_supported: boolean;
    pmSupported: boolean;
    read_lookahead_enabled: boolean;
    readLookaheadEnabled: boolean;
    read_lookahead_supported: boolean;
    readLookaheadSupported: boolean;
    security_enhanced_erase_unit_minutes: number;
    securityEnhancedEraseUnitMinutes: number;
    security_erase_unit_minutes: number;
    securityEraseUnitMinutes: number;
    security_frozen: boolean;
    securityFrozen: boolean;
    smart_enabled: boolean;
    smartEnabled: boolean;
    smart_failing: boolean;
    smartFailing: boolean;
    smart_num_attributes_failed_in_the_past: number;
    smartNumAttributesFailedInThePast: number;
    smart_num_attributes_failing: number;
    smartNumAttributesFailing: number;
    smart_num_bad_sectors: number;
    smartNumBadSectors: number;
    smart_power_on_seconds: number;
    smartPowerOnSeconds: number;
    smart_selftest_percent_remaining: number;
    smartSelftestPercentRemaining: number;
    smart_selftest_status: string;
    smartSelftestStatus: string;
    smart_supported: boolean;
    smartSupported: boolean;
    smart_temperature: number;
    smartTemperature: number;
    smart_updated: number;
    smartUpdated: number;
    write_cache_enabled: boolean;
    writeCacheEnabled: boolean;
    write_cache_supported: boolean;
    writeCacheSupported: boolean;

    // Constructors

    static new_finish(res: Gio.AsyncResult): DriveAtaProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): DriveAtaProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DriveAtaProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DriveAtaProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DriveAtaProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DriveAtaProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): DriveAtaProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_pm_get_state(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_get_state_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, number | null];

    call_pm_standby(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_standby_finish(res: Gio.AsyncResult): boolean;

    call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_pm_wakeup(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean;

    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_security_erase_unit(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean;

    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_smart_get_attributes(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_get_attributes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_smart_get_attributes_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_smart_selftest_abort(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;

    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_smart_selftest_start(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;

    call_smart_selftest_start_sync(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_smart_set_enabled(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean;

    call_smart_set_enabled_sync(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_smart_update(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_update_finish(res: Gio.AsyncResult): boolean;

    call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void;

    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void;

    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void;

    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;

    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_update(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_selftest_start(
        invocation: Gio.DBusMethodInvocation,
        arg_type: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_smart_set_enabled(
        invocation: Gio.DBusMethodInvocation,
        arg_value: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace DriveAtaSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class DriveAtaSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, DriveAta {
    static $gtype: GObject.GType<DriveAtaSkeleton>;

    constructor(properties?: Partial<DriveAtaSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DriveAtaSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    aam_enabled: boolean;
    aamEnabled: boolean;
    aam_supported: boolean;
    aamSupported: boolean;
    aam_vendor_recommended_value: number;
    aamVendorRecommendedValue: number;
    apm_enabled: boolean;
    apmEnabled: boolean;
    apm_supported: boolean;
    apmSupported: boolean;
    pm_enabled: boolean;
    pmEnabled: boolean;
    pm_supported: boolean;
    pmSupported: boolean;
    read_lookahead_enabled: boolean;
    readLookaheadEnabled: boolean;
    read_lookahead_supported: boolean;
    readLookaheadSupported: boolean;
    security_enhanced_erase_unit_minutes: number;
    securityEnhancedEraseUnitMinutes: number;
    security_erase_unit_minutes: number;
    securityEraseUnitMinutes: number;
    security_frozen: boolean;
    securityFrozen: boolean;
    smart_enabled: boolean;
    smartEnabled: boolean;
    smart_failing: boolean;
    smartFailing: boolean;
    smart_num_attributes_failed_in_the_past: number;
    smartNumAttributesFailedInThePast: number;
    smart_num_attributes_failing: number;
    smartNumAttributesFailing: number;
    smart_num_bad_sectors: number;
    smartNumBadSectors: number;
    smart_power_on_seconds: number;
    smartPowerOnSeconds: number;
    smart_selftest_percent_remaining: number;
    smartSelftestPercentRemaining: number;
    smart_selftest_status: string;
    smartSelftestStatus: string;
    smart_supported: boolean;
    smartSupported: boolean;
    smart_temperature: number;
    smartTemperature: number;
    smart_updated: number;
    smartUpdated: number;
    write_cache_enabled: boolean;
    writeCacheEnabled: boolean;
    write_cache_supported: boolean;
    writeCacheSupported: boolean;

    // Constructors

    static ['new'](): DriveAtaSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_pm_get_state(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_get_state_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, number | null];

    call_pm_standby(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_standby_finish(res: Gio.AsyncResult): boolean;

    call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_pm_wakeup(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean;

    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_security_erase_unit(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean;

    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_smart_get_attributes(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_get_attributes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_smart_get_attributes_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_smart_selftest_abort(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;

    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_smart_selftest_start(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;

    call_smart_selftest_start_sync(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_smart_set_enabled(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean;

    call_smart_set_enabled_sync(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_smart_update(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_update_finish(res: Gio.AsyncResult): boolean;

    call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void;

    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void;

    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void;

    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;

    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_update(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_selftest_start(
        invocation: Gio.DBusMethodInvocation,
        arg_type: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_smart_set_enabled(
        invocation: Gio.DBusMethodInvocation,
        arg_value: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace DriveProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class DriveProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<DriveProxy>, Gio.DBusInterface, Gio.Initable, Drive {
    static $gtype: GObject.GType<DriveProxy>;

    constructor(properties?: Partial<DriveProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DriveProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    can_power_off: boolean;
    canPowerOff: boolean;
    configuration: GLib.Variant;
    connection_bus: string;
    connectionBus: string;
    ejectable: boolean;
    id: string;
    media: string;
    media_available: boolean;
    mediaAvailable: boolean;
    media_change_detected: boolean;
    mediaChangeDetected: boolean;
    media_compatibility: string[];
    mediaCompatibility: string[];
    media_removable: boolean;
    mediaRemovable: boolean;
    model: string;
    optical: boolean;
    optical_blank: boolean;
    opticalBlank: boolean;
    optical_num_audio_tracks: number;
    opticalNumAudioTracks: number;
    optical_num_data_tracks: number;
    opticalNumDataTracks: number;
    optical_num_sessions: number;
    opticalNumSessions: number;
    optical_num_tracks: number;
    opticalNumTracks: number;
    removable: boolean;
    revision: string;
    rotation_rate: number;
    rotationRate: number;
    seat: string;
    serial: string;
    sibling_id: string;
    siblingId: string;
    size: number;
    sort_key: string;
    sortKey: string;
    time_detected: number;
    timeDetected: number;
    time_media_detected: number;
    timeMediaDetected: number;
    vendor: string;
    wwn: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): DriveProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): DriveProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DriveProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DriveProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DriveProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DriveProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): DriveProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_eject(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_eject_finish(res: Gio.AsyncResult): boolean;

    call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_power_off(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_power_off_finish(res: Gio.AsyncResult): boolean;

    call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_configuration(
        arg_value: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_configuration_finish(res: Gio.AsyncResult): boolean;

    call_set_configuration_sync(
        arg_value: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_eject(invocation: Gio.DBusMethodInvocation): void;

    complete_power_off(invocation: Gio.DBusMethodInvocation): void;

    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_configuration(
        invocation: Gio.DBusMethodInvocation,
        arg_value: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace DriveSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class DriveSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Drive {
    static $gtype: GObject.GType<DriveSkeleton>;

    constructor(properties?: Partial<DriveSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DriveSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    can_power_off: boolean;
    canPowerOff: boolean;
    configuration: GLib.Variant;
    connection_bus: string;
    connectionBus: string;
    ejectable: boolean;
    id: string;
    media: string;
    media_available: boolean;
    mediaAvailable: boolean;
    media_change_detected: boolean;
    mediaChangeDetected: boolean;
    media_compatibility: string[];
    mediaCompatibility: string[];
    media_removable: boolean;
    mediaRemovable: boolean;
    model: string;
    optical: boolean;
    optical_blank: boolean;
    opticalBlank: boolean;
    optical_num_audio_tracks: number;
    opticalNumAudioTracks: number;
    optical_num_data_tracks: number;
    opticalNumDataTracks: number;
    optical_num_sessions: number;
    opticalNumSessions: number;
    optical_num_tracks: number;
    opticalNumTracks: number;
    removable: boolean;
    revision: string;
    rotation_rate: number;
    rotationRate: number;
    seat: string;
    serial: string;
    sibling_id: string;
    siblingId: string;
    size: number;
    sort_key: string;
    sortKey: string;
    time_detected: number;
    timeDetected: number;
    time_media_detected: number;
    timeMediaDetected: number;
    vendor: string;
    wwn: string;

    // Constructors

    static ['new'](): DriveSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_eject(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_eject_finish(res: Gio.AsyncResult): boolean;

    call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_power_off(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_power_off_finish(res: Gio.AsyncResult): boolean;

    call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_configuration(
        arg_value: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_configuration_finish(res: Gio.AsyncResult): boolean;

    call_set_configuration_sync(
        arg_value: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_eject(invocation: Gio.DBusMethodInvocation): void;

    complete_power_off(invocation: Gio.DBusMethodInvocation): void;

    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_configuration(
        invocation: Gio.DBusMethodInvocation,
        arg_value: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace EncryptedProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class EncryptedProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<EncryptedProxy>, Gio.DBusInterface, Gio.Initable, Encrypted {
    static $gtype: GObject.GType<EncryptedProxy>;

    constructor(properties?: Partial<EncryptedProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EncryptedProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    cleartext_device: string;
    cleartextDevice: string;
    hint_encryption_type: string;
    hintEncryptionType: string;
    metadata_size: number;
    metadataSize: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): EncryptedProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): EncryptedProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): EncryptedProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): EncryptedProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<EncryptedProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<EncryptedProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): EncryptedProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_change_passphrase(
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_change_passphrase_finish(res: Gio.AsyncResult): boolean;

    call_change_passphrase_sync(
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_lock(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_lock_finish(res: Gio.AsyncResult): boolean;

    call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_unlock(
        arg_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_unlock_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_unlock_sync(
        arg_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void;

    complete_lock(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void;

    vfunc_handle_change_passphrase(
        invocation: Gio.DBusMethodInvocation,
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_unlock(
        invocation: Gio.DBusMethodInvocation,
        arg_passphrase: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace EncryptedSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class EncryptedSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Encrypted {
    static $gtype: GObject.GType<EncryptedSkeleton>;

    constructor(properties?: Partial<EncryptedSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EncryptedSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    cleartext_device: string;
    cleartextDevice: string;
    hint_encryption_type: string;
    hintEncryptionType: string;
    metadata_size: number;
    metadataSize: number;

    // Constructors

    static ['new'](): EncryptedSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_change_passphrase(
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_change_passphrase_finish(res: Gio.AsyncResult): boolean;

    call_change_passphrase_sync(
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_lock(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_lock_finish(res: Gio.AsyncResult): boolean;

    call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_unlock(
        arg_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_unlock_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_unlock_sync(
        arg_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void;

    complete_lock(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void;

    vfunc_handle_change_passphrase(
        invocation: Gio.DBusMethodInvocation,
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_unlock(
        invocation: Gio.DBusMethodInvocation,
        arg_passphrase: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace FilesystemBTRFSProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilesystemBTRFSProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<FilesystemBTRFSProxy>, Gio.DBusInterface, Gio.Initable, FilesystemBTRFS {
    static $gtype: GObject.GType<FilesystemBTRFSProxy>;

    constructor(properties?: Partial<FilesystemBTRFSProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilesystemBTRFSProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    label: string;
    num_devices: number;
    numDevices: number;
    used: number;
    uuid: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): FilesystemBTRFSProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): FilesystemBTRFSProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): FilesystemBTRFSProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): FilesystemBTRFSProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<FilesystemBTRFSProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<FilesystemBTRFSProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): FilesystemBTRFSProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_add_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_snapshot(
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_snapshot_finish(res: Gio.AsyncResult): boolean;

    call_create_snapshot_sync(
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_create_subvolume(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_subvolume_finish(res: Gio.AsyncResult): boolean;

    call_create_subvolume_sync(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_get_subvolumes(
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_subvolumes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, number | null];

    call_get_subvolumes_sync(
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, number | null];

    call_remove_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_remove_subvolume(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_subvolume_finish(res: Gio.AsyncResult): boolean;

    call_remove_subvolume_sync(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_repair(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_repair_finish(res: Gio.AsyncResult): boolean;

    call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_create_snapshot(invocation: Gio.DBusMethodInvocation): void;

    complete_create_subvolume(invocation: Gio.DBusMethodInvocation): void;

    complete_get_subvolumes(
        invocation: Gio.DBusMethodInvocation,
        subvolumes: GLib.Variant,
        subvolumes_cnt: number
    ): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_subvolume(invocation: Gio.DBusMethodInvocation): void;

    complete_repair(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_snapshot(
        invocation: Gio.DBusMethodInvocation,
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_subvolume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_get_subvolumes(
        invocation: Gio.DBusMethodInvocation,
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_subvolume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;
}

export namespace FilesystemBTRFSSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilesystemBTRFSSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, FilesystemBTRFS {
    static $gtype: GObject.GType<FilesystemBTRFSSkeleton>;

    constructor(properties?: Partial<FilesystemBTRFSSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilesystemBTRFSSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    label: string;
    num_devices: number;
    numDevices: number;
    used: number;
    uuid: string;

    // Constructors

    static ['new'](): FilesystemBTRFSSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_add_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_snapshot(
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_snapshot_finish(res: Gio.AsyncResult): boolean;

    call_create_snapshot_sync(
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_create_subvolume(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_subvolume_finish(res: Gio.AsyncResult): boolean;

    call_create_subvolume_sync(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_get_subvolumes(
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_subvolumes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, number | null];

    call_get_subvolumes_sync(
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, number | null];

    call_remove_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_remove_subvolume(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_subvolume_finish(res: Gio.AsyncResult): boolean;

    call_remove_subvolume_sync(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_repair(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_repair_finish(res: Gio.AsyncResult): boolean;

    call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_create_snapshot(invocation: Gio.DBusMethodInvocation): void;

    complete_create_subvolume(invocation: Gio.DBusMethodInvocation): void;

    complete_get_subvolumes(
        invocation: Gio.DBusMethodInvocation,
        subvolumes: GLib.Variant,
        subvolumes_cnt: number
    ): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_subvolume(invocation: Gio.DBusMethodInvocation): void;

    complete_repair(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_snapshot(
        invocation: Gio.DBusMethodInvocation,
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_subvolume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_get_subvolumes(
        invocation: Gio.DBusMethodInvocation,
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_subvolume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;
}

export namespace FilesystemProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilesystemProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<FilesystemProxy>, Gio.DBusInterface, Gio.Initable, Filesystem {
    static $gtype: GObject.GType<FilesystemProxy>;

    constructor(properties?: Partial<FilesystemProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilesystemProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    mount_points: string[];
    mountPoints: string[];
    size: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): FilesystemProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): FilesystemProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): FilesystemProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): FilesystemProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<FilesystemProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<FilesystemProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): FilesystemProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_check(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_check_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_check_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    call_mount(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_mount_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    call_repair(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_repair_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_take_ownership(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_take_ownership_finish(res: Gio.AsyncResult): boolean;

    call_take_ownership_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_unmount(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_unmount_finish(res: Gio.AsyncResult): boolean;

    call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_check(invocation: Gio.DBusMethodInvocation, consistent: boolean): void;

    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void;

    complete_repair(invocation: Gio.DBusMethodInvocation, repaired: boolean): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    complete_take_ownership(invocation: Gio.DBusMethodInvocation): void;

    complete_unmount(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_check(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_take_ownership(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace FilesystemSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilesystemSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Filesystem {
    static $gtype: GObject.GType<FilesystemSkeleton>;

    constructor(properties?: Partial<FilesystemSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilesystemSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    mount_points: string[];
    mountPoints: string[];
    size: number;

    // Constructors

    static ['new'](): FilesystemSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_check(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_check_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_check_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    call_mount(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_mount_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    call_repair(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_repair_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_take_ownership(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_take_ownership_finish(res: Gio.AsyncResult): boolean;

    call_take_ownership_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_unmount(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_unmount_finish(res: Gio.AsyncResult): boolean;

    call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_check(invocation: Gio.DBusMethodInvocation, consistent: boolean): void;

    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void;

    complete_repair(invocation: Gio.DBusMethodInvocation, repaired: boolean): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    complete_take_ownership(invocation: Gio.DBusMethodInvocation): void;

    complete_unmount(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_check(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_take_ownership(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace JobProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<JobProxy>, Gio.DBusInterface, Gio.Initable, Job {
    static $gtype: GObject.GType<JobProxy>;

    constructor(properties?: Partial<JobProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    bytes: number;
    cancelable: boolean;
    expected_end_time: number;
    expectedEndTime: number;
    objects: string[];
    operation: string;
    progress: number;
    progress_valid: boolean;
    progressValid: boolean;
    rate: number;
    start_time: number;
    startTime: number;
    started_by_uid: number;
    startedByUid: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): JobProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): JobProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): JobProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): JobProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<JobProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<JobProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): JobProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_cancel(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cancel_finish(res: Gio.AsyncResult): boolean;

    call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_cancel(invocation: Gio.DBusMethodInvocation): void;

    emit_completed(arg_success: boolean, arg_message: string): void;

    vfunc_completed(arg_success: boolean, arg_message: string): void;

    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace JobSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Job {
    static $gtype: GObject.GType<JobSkeleton>;

    constructor(properties?: Partial<JobSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    bytes: number;
    cancelable: boolean;
    expected_end_time: number;
    expectedEndTime: number;
    objects: string[];
    operation: string;
    progress: number;
    progress_valid: boolean;
    progressValid: boolean;
    rate: number;
    start_time: number;
    startTime: number;
    started_by_uid: number;
    startedByUid: number;

    // Constructors

    static ['new'](): JobSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_cancel(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cancel_finish(res: Gio.AsyncResult): boolean;

    call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_cancel(invocation: Gio.DBusMethodInvocation): void;

    emit_completed(arg_success: boolean, arg_message: string): void;

    vfunc_completed(arg_success: boolean, arg_message: string): void;

    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace LogicalVolumeProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class LogicalVolumeProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<LogicalVolumeProxy>, Gio.DBusInterface, Gio.Initable, LogicalVolume {
    static $gtype: GObject.GType<LogicalVolumeProxy>;

    constructor(properties?: Partial<LogicalVolumeProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LogicalVolumeProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;
    block_device: string;
    blockDevice: string;
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    data_allocated_ratio: number;
    dataAllocatedRatio: number;
    metadata_allocated_ratio: number;
    metadataAllocatedRatio: number;
    name: string;
    origin: string;
    size: number;
    thin_pool: string;
    thinPool: string;
    type: string;
    uuid: string;
    volume_group: string;
    volumeGroup: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): LogicalVolumeProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): LogicalVolumeProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LogicalVolumeProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LogicalVolumeProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LogicalVolumeProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LogicalVolumeProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): LogicalVolumeProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_activate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_activate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    call_cache_attach(
        arg_cache_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_attach_finish(res: Gio.AsyncResult): boolean;

    call_cache_attach_sync(
        arg_cache_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_cache_detach(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_detach_finish(res: Gio.AsyncResult): boolean;

    call_cache_detach_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_cache_split(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_split_finish(res: Gio.AsyncResult): boolean;

    call_cache_split_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_snapshot(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_snapshot_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_snapshot_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_deactivate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_deactivate_finish(res: Gio.AsyncResult): boolean;

    call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_rename(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rename_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_rename_sync(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_resize(
        arg_new_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_new_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_activate(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_cache_attach(invocation: Gio.DBusMethodInvocation): void;

    complete_cache_detach(invocation: Gio.DBusMethodInvocation): void;

    complete_cache_split(invocation: Gio.DBusMethodInvocation): void;

    complete_create_snapshot(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_deactivate(invocation: Gio.DBusMethodInvocation): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_cache_attach(
        invocation: Gio.DBusMethodInvocation,
        arg_cache_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_cache_detach(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_cache_split(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_create_snapshot(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_rename(invocation: Gio.DBusMethodInvocation, arg_new_name: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_new_size: number, arg_options: GLib.Variant): boolean;
}

export namespace LogicalVolumeSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class LogicalVolumeSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, LogicalVolume {
    static $gtype: GObject.GType<LogicalVolumeSkeleton>;

    constructor(properties?: Partial<LogicalVolumeSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LogicalVolumeSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;
    block_device: string;
    blockDevice: string;
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    data_allocated_ratio: number;
    dataAllocatedRatio: number;
    metadata_allocated_ratio: number;
    metadataAllocatedRatio: number;
    name: string;
    origin: string;
    size: number;
    thin_pool: string;
    thinPool: string;
    type: string;
    uuid: string;
    volume_group: string;
    volumeGroup: string;

    // Constructors

    static ['new'](): LogicalVolumeSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_activate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_activate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    call_cache_attach(
        arg_cache_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_attach_finish(res: Gio.AsyncResult): boolean;

    call_cache_attach_sync(
        arg_cache_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_cache_detach(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_detach_finish(res: Gio.AsyncResult): boolean;

    call_cache_detach_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_cache_split(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_split_finish(res: Gio.AsyncResult): boolean;

    call_cache_split_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_snapshot(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_snapshot_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_snapshot_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_deactivate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_deactivate_finish(res: Gio.AsyncResult): boolean;

    call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_rename(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rename_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_rename_sync(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_resize(
        arg_new_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_new_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_activate(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_cache_attach(invocation: Gio.DBusMethodInvocation): void;

    complete_cache_detach(invocation: Gio.DBusMethodInvocation): void;

    complete_cache_split(invocation: Gio.DBusMethodInvocation): void;

    complete_create_snapshot(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_deactivate(invocation: Gio.DBusMethodInvocation): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_cache_attach(
        invocation: Gio.DBusMethodInvocation,
        arg_cache_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_cache_detach(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_cache_split(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_create_snapshot(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_rename(invocation: Gio.DBusMethodInvocation, arg_new_name: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_new_size: number, arg_options: GLib.Variant): boolean;
}

export namespace LoopProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class LoopProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<LoopProxy>, Gio.DBusInterface, Gio.Initable, Loop {
    static $gtype: GObject.GType<LoopProxy>;

    constructor(properties?: Partial<LoopProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LoopProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    autoclear: boolean;
    backing_file: string;
    backingFile: string;
    setup_by_uid: number;
    setupByUid: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): LoopProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): LoopProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LoopProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LoopProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LoopProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LoopProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): LoopProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_autoclear(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_autoclear_finish(res: Gio.AsyncResult): boolean;

    call_set_autoclear_sync(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_autoclear(
        invocation: Gio.DBusMethodInvocation,
        arg_value: boolean,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace LoopSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class LoopSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Loop {
    static $gtype: GObject.GType<LoopSkeleton>;

    constructor(properties?: Partial<LoopSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LoopSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    autoclear: boolean;
    backing_file: string;
    backingFile: string;
    setup_by_uid: number;
    setupByUid: number;

    // Constructors

    static ['new'](): LoopSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_autoclear(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_autoclear_finish(res: Gio.AsyncResult): boolean;

    call_set_autoclear_sync(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_autoclear(
        invocation: Gio.DBusMethodInvocation,
        arg_value: boolean,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace MDRaidProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class MDRaidProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<MDRaidProxy>, Gio.DBusInterface, Gio.Initable, MDRaid {
    static $gtype: GObject.GType<MDRaidProxy>;

    constructor(properties?: Partial<MDRaidProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MDRaidProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active_devices: GLib.Variant;
    activeDevices: GLib.Variant;
    bitmap_location: string;
    bitmapLocation: string;
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    chunk_size: number;
    chunkSize: number;
    degraded: number;
    level: string;
    name: string;
    num_devices: number;
    numDevices: number;
    running: boolean;
    size: number;
    sync_action: string;
    syncAction: string;
    sync_completed: number;
    syncCompleted: number;
    sync_rate: number;
    syncRate: number;
    sync_remaining_time: number;
    syncRemainingTime: number;
    uuid: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MDRaidProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): MDRaidProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MDRaidProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MDRaidProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MDRaidProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MDRaidProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): MDRaidProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_add_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_remove_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_request_sync_action(
        arg_sync_action: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_request_sync_action_finish(res: Gio.AsyncResult): boolean;

    call_request_sync_action_sync(
        arg_sync_action: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_set_bitmap_location(
        arg_value: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean;

    call_set_bitmap_location_sync(
        arg_value: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_start(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_start_finish(res: Gio.AsyncResult): boolean;

    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_stop(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_stop_finish(res: Gio.AsyncResult): boolean;

    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void;

    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void;

    complete_start(invocation: Gio.DBusMethodInvocation): void;

    complete_stop(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_request_sync_action(
        invocation: Gio.DBusMethodInvocation,
        arg_sync_action: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_set_bitmap_location(
        invocation: Gio.DBusMethodInvocation,
        arg_value: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace MDRaidSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class MDRaidSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, MDRaid {
    static $gtype: GObject.GType<MDRaidSkeleton>;

    constructor(properties?: Partial<MDRaidSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MDRaidSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active_devices: GLib.Variant;
    activeDevices: GLib.Variant;
    bitmap_location: string;
    bitmapLocation: string;
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    chunk_size: number;
    chunkSize: number;
    degraded: number;
    level: string;
    name: string;
    num_devices: number;
    numDevices: number;
    running: boolean;
    size: number;
    sync_action: string;
    syncAction: string;
    sync_completed: number;
    syncCompleted: number;
    sync_rate: number;
    syncRate: number;
    sync_remaining_time: number;
    syncRemainingTime: number;
    uuid: string;

    // Constructors

    static ['new'](): MDRaidSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_add_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_remove_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_request_sync_action(
        arg_sync_action: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_request_sync_action_finish(res: Gio.AsyncResult): boolean;

    call_request_sync_action_sync(
        arg_sync_action: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_set_bitmap_location(
        arg_value: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean;

    call_set_bitmap_location_sync(
        arg_value: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_start(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_start_finish(res: Gio.AsyncResult): boolean;

    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_stop(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_stop_finish(res: Gio.AsyncResult): boolean;

    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void;

    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void;

    complete_start(invocation: Gio.DBusMethodInvocation): void;

    complete_stop(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_request_sync_action(
        invocation: Gio.DBusMethodInvocation,
        arg_sync_action: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_set_bitmap_location(
        invocation: Gio.DBusMethodInvocation,
        arg_value: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace ManagerBTRFSProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerBTRFSProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ManagerBTRFSProxy>, Gio.DBusInterface, Gio.Initable, ManagerBTRFS {
    static $gtype: GObject.GType<ManagerBTRFSProxy>;

    constructor(properties?: Partial<ManagerBTRFSProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerBTRFSProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerBTRFSProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ManagerBTRFSProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerBTRFSProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerBTRFSProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerBTRFSProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerBTRFSProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ManagerBTRFSProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_create_volume(
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_volume_finish(res: Gio.AsyncResult): boolean;

    call_create_volume_sync(
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_create_volume(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_create_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerBTRFSSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerBTRFSSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, ManagerBTRFS {
    static $gtype: GObject.GType<ManagerBTRFSSkeleton>;

    constructor(properties?: Partial<ManagerBTRFSSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerBTRFSSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ManagerBTRFSSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_create_volume(
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_volume_finish(res: Gio.AsyncResult): boolean;

    call_create_volume_sync(
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_create_volume(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_create_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerBcacheProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerBcacheProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ManagerBcacheProxy>, Gio.DBusInterface, Gio.Initable, ManagerBcache {
    static $gtype: GObject.GType<ManagerBcacheProxy>;

    constructor(properties?: Partial<ManagerBcacheProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerBcacheProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerBcacheProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ManagerBcacheProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerBcacheProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerBcacheProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerBcacheProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerBcacheProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ManagerBcacheProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_bcache_create(
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_bcache_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_bcache_create_sync(
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_bcache_create(invocation: Gio.DBusMethodInvocation, bcache: string): void;

    vfunc_handle_bcache_create(
        invocation: Gio.DBusMethodInvocation,
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerBcacheSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerBcacheSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, ManagerBcache {
    static $gtype: GObject.GType<ManagerBcacheSkeleton>;

    constructor(properties?: Partial<ManagerBcacheSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerBcacheSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ManagerBcacheSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_bcache_create(
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_bcache_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_bcache_create_sync(
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_bcache_create(invocation: Gio.DBusMethodInvocation, bcache: string): void;

    vfunc_handle_bcache_create(
        invocation: Gio.DBusMethodInvocation,
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerLVM2Proxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerLVM2Proxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ManagerLVM2Proxy>, Gio.DBusInterface, Gio.Initable, ManagerLVM2 {
    static $gtype: GObject.GType<ManagerLVM2Proxy>;

    constructor(properties?: Partial<ManagerLVM2Proxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerLVM2Proxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerLVM2Proxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ManagerLVM2Proxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerLVM2Proxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerLVM2Proxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerLVM2Proxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerLVM2Proxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ManagerLVM2Proxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_volume_group_create(
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_volume_group_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_volume_group_create_sync(
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_volume_group_create(invocation: Gio.DBusMethodInvocation, result: string): void;

    vfunc_handle_volume_group_create(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerLVM2Skeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerLVM2Skeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, ManagerLVM2 {
    static $gtype: GObject.GType<ManagerLVM2Skeleton>;

    constructor(properties?: Partial<ManagerLVM2Skeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerLVM2Skeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ManagerLVM2Skeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_volume_group_create(
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_volume_group_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_volume_group_create_sync(
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_volume_group_create(invocation: Gio.DBusMethodInvocation, result: string): void;

    vfunc_handle_volume_group_create(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ManagerProxy>, Gio.DBusInterface, Gio.Initable, Manager {
    static $gtype: GObject.GType<ManagerProxy>;

    constructor(properties?: Partial<ManagerProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    default_encryption_type: string;
    defaultEncryptionType: string;
    supported_encryption_types: string[];
    supportedEncryptionTypes: string[];
    supported_filesystems: string[];
    supportedFilesystems: string[];
    version: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ManagerProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_can_check(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_check_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_check_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_format(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_format_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_format_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_repair(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_repair_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_repair_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_resize(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_resize_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_resize_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_enable_module(
        arg_name: string,
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_module_finish(res: Gio.AsyncResult): boolean;

    call_enable_module_sync(arg_name: string, arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    call_enable_modules(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_modules_finish(res: Gio.AsyncResult): boolean;

    call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    call_get_block_devices(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_block_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_get_block_devices_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    call_loop_setup(
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_loop_setup_finish(res: Gio.AsyncResult): [boolean, string | null, Gio.UnixFDList | null];

    call_loop_setup_sync(
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, Gio.UnixFDList];

    call_mdraid_create(
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_mdraid_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_mdraid_create_sync(
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_resolve_device(
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resolve_device_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_resolve_device_sync(
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    complete_can_check(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_format(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_repair(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_resize(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_enable_module(invocation: Gio.DBusMethodInvocation): void;

    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void;

    complete_get_block_devices(invocation: Gio.DBusMethodInvocation, block_objects: string): void;

    complete_loop_setup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        resulting_device: string
    ): void;

    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void;

    complete_resolve_device(invocation: Gio.DBusMethodInvocation, devices: string): void;

    vfunc_handle_can_check(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_format(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_repair(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_resize(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_enable_module(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_enable: boolean): boolean;

    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;

    vfunc_handle_get_block_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_loop_setup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_mdraid_create(
        invocation: Gio.DBusMethodInvocation,
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_resolve_device(
        invocation: Gio.DBusMethodInvocation,
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Manager {
    static $gtype: GObject.GType<ManagerSkeleton>;

    constructor(properties?: Partial<ManagerSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    default_encryption_type: string;
    defaultEncryptionType: string;
    supported_encryption_types: string[];
    supportedEncryptionTypes: string[];
    supported_filesystems: string[];
    supportedFilesystems: string[];
    version: string;

    // Constructors

    static ['new'](): ManagerSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_can_check(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_check_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_check_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_format(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_format_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_format_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_repair(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_repair_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_repair_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_resize(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_resize_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_resize_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_enable_module(
        arg_name: string,
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_module_finish(res: Gio.AsyncResult): boolean;

    call_enable_module_sync(arg_name: string, arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    call_enable_modules(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_modules_finish(res: Gio.AsyncResult): boolean;

    call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    call_get_block_devices(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_block_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_get_block_devices_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    call_loop_setup(
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_loop_setup_finish(res: Gio.AsyncResult): [boolean, string | null, Gio.UnixFDList | null];

    call_loop_setup_sync(
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, Gio.UnixFDList];

    call_mdraid_create(
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_mdraid_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_mdraid_create_sync(
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_resolve_device(
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resolve_device_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_resolve_device_sync(
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    complete_can_check(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_format(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_repair(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_resize(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_enable_module(invocation: Gio.DBusMethodInvocation): void;

    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void;

    complete_get_block_devices(invocation: Gio.DBusMethodInvocation, block_objects: string): void;

    complete_loop_setup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        resulting_device: string
    ): void;

    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void;

    complete_resolve_device(invocation: Gio.DBusMethodInvocation, devices: string): void;

    vfunc_handle_can_check(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_format(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_repair(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_resize(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_enable_module(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_enable: boolean): boolean;

    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;

    vfunc_handle_get_block_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_loop_setup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_mdraid_create(
        invocation: Gio.DBusMethodInvocation,
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_resolve_device(
        invocation: Gio.DBusMethodInvocation,
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace ManagerZRAMProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerZRAMProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ManagerZRAMProxy>, Gio.DBusInterface, Gio.Initable, ManagerZRAM {
    static $gtype: GObject.GType<ManagerZRAMProxy>;

    constructor(properties?: Partial<ManagerZRAMProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerZRAMProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerZRAMProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ManagerZRAMProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerZRAMProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerZRAMProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerZRAMProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerZRAMProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ManagerZRAMProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_create_devices(
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_create_devices_sync(
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    call_destroy_devices(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_destroy_devices_finish(res: Gio.AsyncResult): boolean;

    call_destroy_devices_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_create_devices(invocation: Gio.DBusMethodInvocation, zrams: string): void;

    complete_destroy_devices(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_create_devices(
        invocation: Gio.DBusMethodInvocation,
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_destroy_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace ManagerZRAMSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ManagerZRAMSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, ManagerZRAM {
    static $gtype: GObject.GType<ManagerZRAMSkeleton>;

    constructor(properties?: Partial<ManagerZRAMSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ManagerZRAMSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ManagerZRAMSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_create_devices(
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_create_devices_sync(
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    call_destroy_devices(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_destroy_devices_finish(res: Gio.AsyncResult): boolean;

    call_destroy_devices_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_create_devices(invocation: Gio.DBusMethodInvocation, zrams: string): void;

    complete_destroy_devices(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_create_devices(
        invocation: Gio.DBusMethodInvocation,
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_destroy_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace ObjectInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ObjectInfo extends GObject.Object {
    static $gtype: GObject.GType<ObjectInfo>;

    constructor(properties?: Partial<ObjectInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ObjectInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_description(): string;

    get_icon(): Gio.Icon;

    get_icon_symbolic(): Gio.Icon;

    get_media_description(): string;

    get_media_icon(): Gio.Icon;

    get_media_icon_symbolic(): Gio.Icon;

    get_name(): string;

    get_object(): Object;

    get_one_liner(): string;

    get_sort_key(): string;
}

export namespace ObjectManagerClient {
    export interface ConstructorProperties extends Gio.DBusObjectManagerClient.ConstructorProperties {
        [key: string]: any;
    }
}

export class ObjectManagerClient
    extends Gio.DBusObjectManagerClient
    implements Gio.AsyncInitable<ObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
    static $gtype: GObject.GType<ObjectManagerClient>;

    constructor(properties?: Partial<ObjectManagerClient.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ObjectManagerClient.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ObjectManagerClient;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ObjectManagerClient;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ObjectManagerClient;

    static new_sync(...args: never[]): never;

    // Members

    static get_proxy_type(
        manager: Gio.DBusObjectManagerClient,
        object_path: string,
        interface_name?: string | null,
        user_data?: any | null
    ): GObject.GType;

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ObjectManagerClient;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_interface(object_path: string, interface_name: string): Gio.DBusInterface;

    get_object(object_path: string): Gio.DBusObject;

    get_object_path(): string;

    get_objects(): Gio.DBusObject[];

    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface;

    vfunc_get_object(object_path: string): Gio.DBusObject;

    vfunc_get_object_path(): string;

    vfunc_get_objects(): Gio.DBusObject[];

    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;

    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;

    vfunc_object_added(object: Gio.DBusObject): void;

    vfunc_object_removed(object: Gio.DBusObject): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace ObjectProxy {
    export interface ConstructorProperties extends Gio.DBusObjectProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ObjectProxy extends Gio.DBusObjectProxy implements Gio.DBusObject, Object {
    static $gtype: GObject.GType<ObjectProxy>;

    constructor(properties?: Partial<ObjectProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ObjectProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    block: Block;
    block_bcache: BlockBcache;
    blockBcache: BlockBcache;
    block_lvm2: BlockLVM2;
    blockLvm2: BlockLVM2;
    block_zram: BlockZRAM;
    blockZram: BlockZRAM;
    drive: Drive;
    drive_ata: DriveAta;
    driveAta: DriveAta;
    encrypted: Encrypted;
    filesystem: Filesystem;
    filesystem_btrfs: FilesystemBTRFS;
    filesystemBtrfs: FilesystemBTRFS;
    job: Job;
    logical_volume: LogicalVolume;
    logicalVolume: LogicalVolume;
    loop: Loop;
    manager: Manager;
    manager_bcache: ManagerBcache;
    managerBcache: ManagerBcache;
    manager_btrfs: ManagerBTRFS;
    managerBtrfs: ManagerBTRFS;
    manager_lvm2: ManagerLVM2;
    managerLvm2: ManagerLVM2;
    manager_zram: ManagerZRAM;
    managerZram: ManagerZRAM;
    mdraid: MDRaid;
    partition: Partition;
    partition_table: PartitionTable;
    partitionTable: PartitionTable;
    physical_volume: PhysicalVolume;
    physicalVolume: PhysicalVolume;
    swapspace: Swapspace;
    vdo_volume: VDOVolume;
    vdoVolume: VDOVolume;
    volume_group: VolumeGroup;
    volumeGroup: VolumeGroup;

    // Constructors

    static ['new'](connection: Gio.DBusConnection, object_path: string): ObjectProxy;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface;

    get_interfaces(): Gio.DBusInterface[];

    get_object_path(): string;

    vfunc_get_interface(interface_name: string): Gio.DBusInterface;

    vfunc_get_interfaces(): Gio.DBusInterface[];

    vfunc_get_object_path(): string;

    vfunc_interface_added(interface_: Gio.DBusInterface): void;

    vfunc_interface_removed(interface_: Gio.DBusInterface): void;

    get_block(): Block | null;

    get_block_bcache(): BlockBcache | null;

    get_block_lvm2(): BlockLVM2 | null;

    get_block_zram(): BlockZRAM | null;

    get_drive(): Drive | null;

    get_drive_ata(): DriveAta | null;

    get_encrypted(): Encrypted | null;

    get_filesystem(): Filesystem | null;

    get_filesystem_btrfs(): FilesystemBTRFS | null;

    get_job(): Job | null;

    get_logical_volume(): LogicalVolume | null;

    get_loop(): Loop | null;

    get_manager(): Manager | null;

    get_manager_bcache(): ManagerBcache | null;

    get_manager_btrfs(): ManagerBTRFS | null;

    get_manager_lvm2(): ManagerLVM2 | null;

    get_manager_zram(): ManagerZRAM | null;

    get_mdraid(): MDRaid | null;

    get_partition(): Partition | null;

    get_partition_table(): PartitionTable | null;

    get_physical_volume(): PhysicalVolume | null;

    get_swapspace(): Swapspace | null;

    get_vdo_volume(): VDOVolume | null;

    get_volume_group(): VolumeGroup | null;
}

export namespace ObjectSkeleton {
    export interface ConstructorProperties extends Gio.DBusObjectSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ObjectSkeleton extends Gio.DBusObjectSkeleton implements Gio.DBusObject, Object {
    static $gtype: GObject.GType<ObjectSkeleton>;

    constructor(properties?: Partial<ObjectSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ObjectSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    block: Block;
    block_bcache: BlockBcache;
    blockBcache: BlockBcache;
    block_lvm2: BlockLVM2;
    blockLvm2: BlockLVM2;
    block_zram: BlockZRAM;
    blockZram: BlockZRAM;
    drive: Drive;
    drive_ata: DriveAta;
    driveAta: DriveAta;
    encrypted: Encrypted;
    filesystem: Filesystem;
    filesystem_btrfs: FilesystemBTRFS;
    filesystemBtrfs: FilesystemBTRFS;
    job: Job;
    logical_volume: LogicalVolume;
    logicalVolume: LogicalVolume;
    loop: Loop;
    manager: Manager;
    manager_bcache: ManagerBcache;
    managerBcache: ManagerBcache;
    manager_btrfs: ManagerBTRFS;
    managerBtrfs: ManagerBTRFS;
    manager_lvm2: ManagerLVM2;
    managerLvm2: ManagerLVM2;
    manager_zram: ManagerZRAM;
    managerZram: ManagerZRAM;
    mdraid: MDRaid;
    partition: Partition;
    partition_table: PartitionTable;
    partitionTable: PartitionTable;
    physical_volume: PhysicalVolume;
    physicalVolume: PhysicalVolume;
    swapspace: Swapspace;
    vdo_volume: VDOVolume;
    vdoVolume: VDOVolume;
    volume_group: VolumeGroup;
    volumeGroup: VolumeGroup;

    // Constructors

    static ['new'](object_path: string): ObjectSkeleton;

    // Members

    set_block(interface_?: Block | null): void;

    set_block_bcache(interface_?: BlockBcache | null): void;

    set_block_lvm2(interface_?: BlockLVM2 | null): void;

    set_block_zram(interface_?: BlockZRAM | null): void;

    set_drive(interface_?: Drive | null): void;

    set_drive_ata(interface_?: DriveAta | null): void;

    set_encrypted(interface_?: Encrypted | null): void;

    set_filesystem(interface_?: Filesystem | null): void;

    set_filesystem_btrfs(interface_?: FilesystemBTRFS | null): void;

    set_job(interface_?: Job | null): void;

    set_logical_volume(interface_?: LogicalVolume | null): void;

    set_loop(interface_?: Loop | null): void;

    set_manager(interface_?: Manager | null): void;

    set_manager_bcache(interface_?: ManagerBcache | null): void;

    set_manager_btrfs(interface_?: ManagerBTRFS | null): void;

    set_manager_lvm2(interface_?: ManagerLVM2 | null): void;

    set_manager_zram(interface_?: ManagerZRAM | null): void;

    set_mdraid(interface_?: MDRaid | null): void;

    set_partition(interface_?: Partition | null): void;

    set_partition_table(interface_?: PartitionTable | null): void;

    set_physical_volume(interface_?: PhysicalVolume | null): void;

    set_swapspace(interface_?: Swapspace | null): void;

    set_vdo_volume(interface_?: VDOVolume | null): void;

    set_volume_group(interface_?: VolumeGroup | null): void;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface;

    get_interfaces(): Gio.DBusInterface[];

    get_object_path(): string;

    vfunc_get_interface(interface_name: string): Gio.DBusInterface;

    vfunc_get_interfaces(): Gio.DBusInterface[];

    vfunc_get_object_path(): string;

    vfunc_interface_added(interface_: Gio.DBusInterface): void;

    vfunc_interface_removed(interface_: Gio.DBusInterface): void;

    get_block(): Block | null;

    get_block_bcache(): BlockBcache | null;

    get_block_lvm2(): BlockLVM2 | null;

    get_block_zram(): BlockZRAM | null;

    get_drive(): Drive | null;

    get_drive_ata(): DriveAta | null;

    get_encrypted(): Encrypted | null;

    get_filesystem(): Filesystem | null;

    get_filesystem_btrfs(): FilesystemBTRFS | null;

    get_job(): Job | null;

    get_logical_volume(): LogicalVolume | null;

    get_loop(): Loop | null;

    get_manager(): Manager | null;

    get_manager_bcache(): ManagerBcache | null;

    get_manager_btrfs(): ManagerBTRFS | null;

    get_manager_lvm2(): ManagerLVM2 | null;

    get_manager_zram(): ManagerZRAM | null;

    get_mdraid(): MDRaid | null;

    get_partition(): Partition | null;

    get_partition_table(): PartitionTable | null;

    get_physical_volume(): PhysicalVolume | null;

    get_swapspace(): Swapspace | null;

    get_vdo_volume(): VDOVolume | null;

    get_volume_group(): VolumeGroup | null;
}

export namespace PartitionProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class PartitionProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<PartitionProxy>, Gio.DBusInterface, Gio.Initable, Partition {
    static $gtype: GObject.GType<PartitionProxy>;

    constructor(properties?: Partial<PartitionProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PartitionProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    flags: number;
    is_contained: boolean;
    isContained: boolean;
    is_container: boolean;
    isContainer: boolean;
    name: string;
    number: number;
    offset: number;
    size: number;
    table: string;
    type: string;
    uuid: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): PartitionProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): PartitionProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PartitionProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PartitionProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PartitionProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PartitionProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): PartitionProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_flags(
        arg_flags: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_flags_finish(res: Gio.AsyncResult): boolean;

    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_name(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_name_finish(res: Gio.AsyncResult): boolean;

    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_type(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_type_finish(res: Gio.AsyncResult): boolean;

    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_flags(invocation: Gio.DBusMethodInvocation): void;

    complete_set_name(invocation: Gio.DBusMethodInvocation): void;

    complete_set_type(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;
}

export namespace PartitionSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class PartitionSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Partition {
    static $gtype: GObject.GType<PartitionSkeleton>;

    constructor(properties?: Partial<PartitionSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PartitionSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    flags: number;
    is_contained: boolean;
    isContained: boolean;
    is_container: boolean;
    isContainer: boolean;
    name: string;
    number: number;
    offset: number;
    size: number;
    table: string;
    type: string;
    uuid: string;

    // Constructors

    static ['new'](): PartitionSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_flags(
        arg_flags: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_flags_finish(res: Gio.AsyncResult): boolean;

    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_name(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_name_finish(res: Gio.AsyncResult): boolean;

    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_type(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_type_finish(res: Gio.AsyncResult): boolean;

    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_flags(invocation: Gio.DBusMethodInvocation): void;

    complete_set_name(invocation: Gio.DBusMethodInvocation): void;

    complete_set_type(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;
}

export namespace PartitionTableProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class PartitionTableProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<PartitionTableProxy>, Gio.DBusInterface, Gio.Initable, PartitionTable {
    static $gtype: GObject.GType<PartitionTableProxy>;

    constructor(properties?: Partial<PartitionTableProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PartitionTableProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    partitions: string[];
    type: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): PartitionTableProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): PartitionTableProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PartitionTableProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PartitionTableProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PartitionTableProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PartitionTableProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): PartitionTableProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_create_partition(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_partition_and_format(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_partition_and_format_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_partition_and_format_sync(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_partition_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_partition_sync(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

    vfunc_handle_create_partition(
        invocation: Gio.DBusMethodInvocation,
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_partition_and_format(
        invocation: Gio.DBusMethodInvocation,
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant
    ): boolean;
}

export namespace PartitionTableSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class PartitionTableSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, PartitionTable {
    static $gtype: GObject.GType<PartitionTableSkeleton>;

    constructor(properties?: Partial<PartitionTableSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PartitionTableSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    partitions: string[];
    type: string;

    // Constructors

    static ['new'](): PartitionTableSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_create_partition(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_partition_and_format(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_partition_and_format_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_partition_and_format_sync(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_partition_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_partition_sync(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

    vfunc_handle_create_partition(
        invocation: Gio.DBusMethodInvocation,
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_partition_and_format(
        invocation: Gio.DBusMethodInvocation,
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant
    ): boolean;
}

export namespace PhysicalVolumeProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class PhysicalVolumeProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<PhysicalVolumeProxy>, Gio.DBusInterface, Gio.Initable, PhysicalVolume {
    static $gtype: GObject.GType<PhysicalVolumeProxy>;

    constructor(properties?: Partial<PhysicalVolumeProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PhysicalVolumeProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    free_size: number;
    freeSize: number;
    size: number;
    volume_group: string;
    volumeGroup: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): PhysicalVolumeProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): PhysicalVolumeProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PhysicalVolumeProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PhysicalVolumeProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PhysicalVolumeProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PhysicalVolumeProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): PhysicalVolumeProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace PhysicalVolumeSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class PhysicalVolumeSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, PhysicalVolume {
    static $gtype: GObject.GType<PhysicalVolumeSkeleton>;

    constructor(properties?: Partial<PhysicalVolumeSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PhysicalVolumeSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    free_size: number;
    freeSize: number;
    size: number;
    volume_group: string;
    volumeGroup: string;

    // Constructors

    static ['new'](): PhysicalVolumeSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace SwapspaceProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class SwapspaceProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<SwapspaceProxy>, Gio.DBusInterface, Gio.Initable, Swapspace {
    static $gtype: GObject.GType<SwapspaceProxy>;

    constructor(properties?: Partial<SwapspaceProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SwapspaceProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;

    // Constructors

    static new_finish(res: Gio.AsyncResult): SwapspaceProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): SwapspaceProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): SwapspaceProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): SwapspaceProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<SwapspaceProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<SwapspaceProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): SwapspaceProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_start(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_start_finish(res: Gio.AsyncResult): boolean;

    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_stop(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_stop_finish(res: Gio.AsyncResult): boolean;

    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    complete_start(invocation: Gio.DBusMethodInvocation): void;

    complete_stop(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace SwapspaceSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class SwapspaceSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Swapspace {
    static $gtype: GObject.GType<SwapspaceSkeleton>;

    constructor(properties?: Partial<SwapspaceSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SwapspaceSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;

    // Constructors

    static ['new'](): SwapspaceSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_start(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_start_finish(res: Gio.AsyncResult): boolean;

    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_stop(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_stop_finish(res: Gio.AsyncResult): boolean;

    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    complete_start(invocation: Gio.DBusMethodInvocation): void;

    complete_stop(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export namespace VDOVolumeProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class VDOVolumeProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<VDOVolumeProxy>, Gio.DBusInterface, Gio.Initable, VDOVolume {
    static $gtype: GObject.GType<VDOVolumeProxy>;

    constructor(properties?: Partial<VDOVolumeProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VDOVolumeProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    compression: boolean;
    compression_state: string;
    compressionState: string;
    deduplication: boolean;
    index_state: string;
    indexState: string;
    operating_mode: string;
    operatingMode: string;
    used_size: number;
    usedSize: number;
    vdo_pool: string;
    vdoPool: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): VDOVolumeProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): VDOVolumeProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): VDOVolumeProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): VDOVolumeProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<VDOVolumeProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<VDOVolumeProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): VDOVolumeProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_enable_compression(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_compression_finish(res: Gio.AsyncResult): boolean;

    call_enable_compression_sync(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_enable_deduplication(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_deduplication_finish(res: Gio.AsyncResult): boolean;

    call_enable_deduplication_sync(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_get_statistics(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_statistics_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_get_statistics_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_resize_logical(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_logical_finish(res: Gio.AsyncResult): boolean;

    call_resize_logical_sync(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_resize_physical(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_physical_finish(res: Gio.AsyncResult): boolean;

    call_resize_physical_sync(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_enable_compression(invocation: Gio.DBusMethodInvocation): void;

    complete_enable_deduplication(invocation: Gio.DBusMethodInvocation): void;

    complete_get_statistics(invocation: Gio.DBusMethodInvocation, stats: GLib.Variant): void;

    complete_resize_logical(invocation: Gio.DBusMethodInvocation): void;

    complete_resize_physical(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_enable_compression(
        invocation: Gio.DBusMethodInvocation,
        arg_enable: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_enable_deduplication(
        invocation: Gio.DBusMethodInvocation,
        arg_enable: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize_logical(
        invocation: Gio.DBusMethodInvocation,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_resize_physical(
        invocation: Gio.DBusMethodInvocation,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace VDOVolumeSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class VDOVolumeSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, VDOVolume {
    static $gtype: GObject.GType<VDOVolumeSkeleton>;

    constructor(properties?: Partial<VDOVolumeSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VDOVolumeSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    compression: boolean;
    compression_state: string;
    compressionState: string;
    deduplication: boolean;
    index_state: string;
    indexState: string;
    operating_mode: string;
    operatingMode: string;
    used_size: number;
    usedSize: number;
    vdo_pool: string;
    vdoPool: string;

    // Constructors

    static ['new'](): VDOVolumeSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_enable_compression(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_compression_finish(res: Gio.AsyncResult): boolean;

    call_enable_compression_sync(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_enable_deduplication(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_deduplication_finish(res: Gio.AsyncResult): boolean;

    call_enable_deduplication_sync(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_get_statistics(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_statistics_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_get_statistics_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_resize_logical(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_logical_finish(res: Gio.AsyncResult): boolean;

    call_resize_logical_sync(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_resize_physical(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_physical_finish(res: Gio.AsyncResult): boolean;

    call_resize_physical_sync(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_enable_compression(invocation: Gio.DBusMethodInvocation): void;

    complete_enable_deduplication(invocation: Gio.DBusMethodInvocation): void;

    complete_get_statistics(invocation: Gio.DBusMethodInvocation, stats: GLib.Variant): void;

    complete_resize_logical(invocation: Gio.DBusMethodInvocation): void;

    complete_resize_physical(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_enable_compression(
        invocation: Gio.DBusMethodInvocation,
        arg_enable: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_enable_deduplication(
        invocation: Gio.DBusMethodInvocation,
        arg_enable: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize_logical(
        invocation: Gio.DBusMethodInvocation,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_resize_physical(
        invocation: Gio.DBusMethodInvocation,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;
}

export namespace VolumeGroupProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class VolumeGroupProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<VolumeGroupProxy>, Gio.DBusInterface, Gio.Initable, VolumeGroup {
    static $gtype: GObject.GType<VolumeGroupProxy>;

    constructor(properties?: Partial<VolumeGroupProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VolumeGroupProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    extent_size: number;
    extentSize: number;
    free_size: number;
    freeSize: number;
    name: string;
    needs_polling: boolean;
    needsPolling: boolean;
    size: number;
    uuid: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): VolumeGroupProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): VolumeGroupProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): VolumeGroupProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): VolumeGroupProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<VolumeGroupProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<VolumeGroupProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): VolumeGroupProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_add_device(
        arg_block: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_block: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_plain_volume(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_plain_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_plain_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_thin_pool_volume(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_thin_pool_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_thin_pool_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_thin_volume(
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_thin_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_thin_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_vdo_volume(
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_vdo_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_vdo_volume_sync(
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_delete(
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_wipe: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_empty_device(
        arg_block: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_empty_device_finish(res: Gio.AsyncResult): boolean;

    call_empty_device_sync(arg_block: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_poll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_poll_finish(res: Gio.AsyncResult): boolean;

    call_poll_sync(cancellable?: Gio.Cancellable | null): boolean;

    call_remove_device(
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_rename(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rename_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_rename_sync(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_create_plain_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_thin_pool_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_thin_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_vdo_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_empty_device(invocation: Gio.DBusMethodInvocation): void;

    complete_poll(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_plain_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_thin_pool_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_thin_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_vdo_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_wipe: boolean, arg_options: GLib.Variant): boolean;

    vfunc_handle_empty_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_poll(invocation: Gio.DBusMethodInvocation): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_rename(invocation: Gio.DBusMethodInvocation, arg_new_name: string, arg_options: GLib.Variant): boolean;
}

export namespace VolumeGroupSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class VolumeGroupSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, VolumeGroup {
    static $gtype: GObject.GType<VolumeGroupSkeleton>;

    constructor(properties?: Partial<VolumeGroupSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VolumeGroupSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    extent_size: number;
    extentSize: number;
    free_size: number;
    freeSize: number;
    name: string;
    needs_polling: boolean;
    needsPolling: boolean;
    size: number;
    uuid: string;

    // Constructors

    static ['new'](): VolumeGroupSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_add_device(
        arg_block: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_block: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_plain_volume(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_plain_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_plain_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_thin_pool_volume(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_thin_pool_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_thin_pool_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_thin_volume(
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_thin_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_thin_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_vdo_volume(
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_vdo_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_vdo_volume_sync(
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_delete(
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_wipe: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_empty_device(
        arg_block: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_empty_device_finish(res: Gio.AsyncResult): boolean;

    call_empty_device_sync(arg_block: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_poll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_poll_finish(res: Gio.AsyncResult): boolean;

    call_poll_sync(cancellable?: Gio.Cancellable | null): boolean;

    call_remove_device(
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_rename(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rename_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_rename_sync(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_create_plain_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_thin_pool_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_thin_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_vdo_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_empty_device(invocation: Gio.DBusMethodInvocation): void;

    complete_poll(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_plain_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_thin_pool_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_thin_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_vdo_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_wipe: boolean, arg_options: GLib.Variant): boolean;

    vfunc_handle_empty_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_poll(invocation: Gio.DBusMethodInvocation): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_rename(invocation: Gio.DBusMethodInvocation, arg_new_name: string, arg_options: GLib.Variant): boolean;
}

export class BlockBcacheProxyPrivate {
    static $gtype: GObject.GType<BlockBcacheProxyPrivate>;

    constructor(copy: BlockBcacheProxyPrivate);
}

export class BlockBcacheSkeletonPrivate {
    static $gtype: GObject.GType<BlockBcacheSkeletonPrivate>;

    constructor(copy: BlockBcacheSkeletonPrivate);
}

export class BlockLVM2ProxyPrivate {
    static $gtype: GObject.GType<BlockLVM2ProxyPrivate>;

    constructor(copy: BlockLVM2ProxyPrivate);
}

export class BlockLVM2SkeletonPrivate {
    static $gtype: GObject.GType<BlockLVM2SkeletonPrivate>;

    constructor(copy: BlockLVM2SkeletonPrivate);
}

export class BlockProxyPrivate {
    static $gtype: GObject.GType<BlockProxyPrivate>;

    constructor(copy: BlockProxyPrivate);
}

export class BlockSkeletonPrivate {
    static $gtype: GObject.GType<BlockSkeletonPrivate>;

    constructor(copy: BlockSkeletonPrivate);
}

export class BlockZRAMProxyPrivate {
    static $gtype: GObject.GType<BlockZRAMProxyPrivate>;

    constructor(copy: BlockZRAMProxyPrivate);
}

export class BlockZRAMSkeletonPrivate {
    static $gtype: GObject.GType<BlockZRAMSkeletonPrivate>;

    constructor(copy: BlockZRAMSkeletonPrivate);
}

export class DriveAtaProxyPrivate {
    static $gtype: GObject.GType<DriveAtaProxyPrivate>;

    constructor(copy: DriveAtaProxyPrivate);
}

export class DriveAtaSkeletonPrivate {
    static $gtype: GObject.GType<DriveAtaSkeletonPrivate>;

    constructor(copy: DriveAtaSkeletonPrivate);
}

export class DriveProxyPrivate {
    static $gtype: GObject.GType<DriveProxyPrivate>;

    constructor(copy: DriveProxyPrivate);
}

export class DriveSkeletonPrivate {
    static $gtype: GObject.GType<DriveSkeletonPrivate>;

    constructor(copy: DriveSkeletonPrivate);
}

export class EncryptedProxyPrivate {
    static $gtype: GObject.GType<EncryptedProxyPrivate>;

    constructor(copy: EncryptedProxyPrivate);
}

export class EncryptedSkeletonPrivate {
    static $gtype: GObject.GType<EncryptedSkeletonPrivate>;

    constructor(copy: EncryptedSkeletonPrivate);
}

export class FilesystemBTRFSProxyPrivate {
    static $gtype: GObject.GType<FilesystemBTRFSProxyPrivate>;

    constructor(copy: FilesystemBTRFSProxyPrivate);
}

export class FilesystemBTRFSSkeletonPrivate {
    static $gtype: GObject.GType<FilesystemBTRFSSkeletonPrivate>;

    constructor(copy: FilesystemBTRFSSkeletonPrivate);
}

export class FilesystemProxyPrivate {
    static $gtype: GObject.GType<FilesystemProxyPrivate>;

    constructor(copy: FilesystemProxyPrivate);
}

export class FilesystemSkeletonPrivate {
    static $gtype: GObject.GType<FilesystemSkeletonPrivate>;

    constructor(copy: FilesystemSkeletonPrivate);
}

export class JobProxyPrivate {
    static $gtype: GObject.GType<JobProxyPrivate>;

    constructor(copy: JobProxyPrivate);
}

export class JobSkeletonPrivate {
    static $gtype: GObject.GType<JobSkeletonPrivate>;

    constructor(copy: JobSkeletonPrivate);
}

export class LogicalVolumeProxyPrivate {
    static $gtype: GObject.GType<LogicalVolumeProxyPrivate>;

    constructor(copy: LogicalVolumeProxyPrivate);
}

export class LogicalVolumeSkeletonPrivate {
    static $gtype: GObject.GType<LogicalVolumeSkeletonPrivate>;

    constructor(copy: LogicalVolumeSkeletonPrivate);
}

export class LoopProxyPrivate {
    static $gtype: GObject.GType<LoopProxyPrivate>;

    constructor(copy: LoopProxyPrivate);
}

export class LoopSkeletonPrivate {
    static $gtype: GObject.GType<LoopSkeletonPrivate>;

    constructor(copy: LoopSkeletonPrivate);
}

export class MDRaidProxyPrivate {
    static $gtype: GObject.GType<MDRaidProxyPrivate>;

    constructor(copy: MDRaidProxyPrivate);
}

export class MDRaidSkeletonPrivate {
    static $gtype: GObject.GType<MDRaidSkeletonPrivate>;

    constructor(copy: MDRaidSkeletonPrivate);
}

export class ManagerBTRFSProxyPrivate {
    static $gtype: GObject.GType<ManagerBTRFSProxyPrivate>;

    constructor(copy: ManagerBTRFSProxyPrivate);
}

export class ManagerBTRFSSkeletonPrivate {
    static $gtype: GObject.GType<ManagerBTRFSSkeletonPrivate>;

    constructor(copy: ManagerBTRFSSkeletonPrivate);
}

export class ManagerBcacheProxyPrivate {
    static $gtype: GObject.GType<ManagerBcacheProxyPrivate>;

    constructor(copy: ManagerBcacheProxyPrivate);
}

export class ManagerBcacheSkeletonPrivate {
    static $gtype: GObject.GType<ManagerBcacheSkeletonPrivate>;

    constructor(copy: ManagerBcacheSkeletonPrivate);
}

export class ManagerLVM2ProxyPrivate {
    static $gtype: GObject.GType<ManagerLVM2ProxyPrivate>;

    constructor(copy: ManagerLVM2ProxyPrivate);
}

export class ManagerLVM2SkeletonPrivate {
    static $gtype: GObject.GType<ManagerLVM2SkeletonPrivate>;

    constructor(copy: ManagerLVM2SkeletonPrivate);
}

export class ManagerProxyPrivate {
    static $gtype: GObject.GType<ManagerProxyPrivate>;

    constructor(copy: ManagerProxyPrivate);
}

export class ManagerSkeletonPrivate {
    static $gtype: GObject.GType<ManagerSkeletonPrivate>;

    constructor(copy: ManagerSkeletonPrivate);
}

export class ManagerZRAMProxyPrivate {
    static $gtype: GObject.GType<ManagerZRAMProxyPrivate>;

    constructor(copy: ManagerZRAMProxyPrivate);
}

export class ManagerZRAMSkeletonPrivate {
    static $gtype: GObject.GType<ManagerZRAMSkeletonPrivate>;

    constructor(copy: ManagerZRAMSkeletonPrivate);
}

export class ObjectManagerClientPrivate {
    static $gtype: GObject.GType<ObjectManagerClientPrivate>;

    constructor(copy: ObjectManagerClientPrivate);
}

export class ObjectProxyPrivate {
    static $gtype: GObject.GType<ObjectProxyPrivate>;

    constructor(copy: ObjectProxyPrivate);
}

export class ObjectSkeletonPrivate {
    static $gtype: GObject.GType<ObjectSkeletonPrivate>;

    constructor(copy: ObjectSkeletonPrivate);
}

export class PartitionProxyPrivate {
    static $gtype: GObject.GType<PartitionProxyPrivate>;

    constructor(copy: PartitionProxyPrivate);
}

export class PartitionSkeletonPrivate {
    static $gtype: GObject.GType<PartitionSkeletonPrivate>;

    constructor(copy: PartitionSkeletonPrivate);
}

export class PartitionTableProxyPrivate {
    static $gtype: GObject.GType<PartitionTableProxyPrivate>;

    constructor(copy: PartitionTableProxyPrivate);
}

export class PartitionTableSkeletonPrivate {
    static $gtype: GObject.GType<PartitionTableSkeletonPrivate>;

    constructor(copy: PartitionTableSkeletonPrivate);
}

export class PartitionTypeInfo {
    static $gtype: GObject.GType<PartitionTypeInfo>;

    constructor(copy: PartitionTypeInfo);

    // Fields
    table_type: string;
    table_subtype: string;
    type: string;
    flags: PartitionTypeInfoFlags;

    // Members
    free(): void;
}

export class PhysicalVolumeProxyPrivate {
    static $gtype: GObject.GType<PhysicalVolumeProxyPrivate>;

    constructor(copy: PhysicalVolumeProxyPrivate);
}

export class PhysicalVolumeSkeletonPrivate {
    static $gtype: GObject.GType<PhysicalVolumeSkeletonPrivate>;

    constructor(copy: PhysicalVolumeSkeletonPrivate);
}

export class SwapspaceProxyPrivate {
    static $gtype: GObject.GType<SwapspaceProxyPrivate>;

    constructor(copy: SwapspaceProxyPrivate);
}

export class SwapspaceSkeletonPrivate {
    static $gtype: GObject.GType<SwapspaceSkeletonPrivate>;

    constructor(copy: SwapspaceSkeletonPrivate);
}

export class VDOVolumeProxyPrivate {
    static $gtype: GObject.GType<VDOVolumeProxyPrivate>;

    constructor(copy: VDOVolumeProxyPrivate);
}

export class VDOVolumeSkeletonPrivate {
    static $gtype: GObject.GType<VDOVolumeSkeletonPrivate>;

    constructor(copy: VDOVolumeSkeletonPrivate);
}

export class VolumeGroupProxyPrivate {
    static $gtype: GObject.GType<VolumeGroupProxyPrivate>;

    constructor(copy: VolumeGroupProxyPrivate);
}

export class VolumeGroupSkeletonPrivate {
    static $gtype: GObject.GType<VolumeGroupSkeletonPrivate>;

    constructor(copy: VolumeGroupSkeletonPrivate);
}

export interface BlockNamespace {
    $gtype: GObject.GType<Block>;
    prototype: BlockPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Block = BlockPrototype;

export interface BlockPrototype extends GObject.Object {
    // Properties
    configuration: GLib.Variant;
    crypto_backing_device: string;
    cryptoBackingDevice: string;
    device: string;
    device_number: number;
    deviceNumber: number;
    drive: string;
    hint_auto: boolean;
    hintAuto: boolean;
    hint_icon_name: string;
    hintIconName: string;
    hint_ignore: boolean;
    hintIgnore: boolean;
    hint_name: string;
    hintName: string;
    hint_partitionable: boolean;
    hintPartitionable: boolean;
    hint_symbolic_icon_name: string;
    hintSymbolicIconName: string;
    hint_system: boolean;
    hintSystem: boolean;
    id: string;
    id_label: string;
    idLabel: string;
    id_type: string;
    idType: string;
    id_usage: string;
    idUsage: string;
    id_uuid: string;
    idUuid: string;
    id_version: string;
    idVersion: string;
    mdraid: string;
    mdraid_member: string;
    mdraidMember: string;
    preferred_device: string;
    preferredDevice: string;
    read_only: boolean;
    readOnly: boolean;
    size: number;
    symlinks: string[];
    userspace_mount_options: string[];
    userspaceMountOptions: string[];

    // Members

    call_add_configuration_item(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_add_configuration_item_sync(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_format(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_format_finish(res: Gio.AsyncResult): boolean;

    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_get_secret_configuration(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_secret_configuration_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_get_secret_configuration_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_open_device(
        arg_mode: string,
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_device_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_device_sync(
        arg_mode: string,
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_backup(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_backup_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_backup_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_benchmark(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_benchmark_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_benchmark_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_open_for_restore(
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_open_for_restore_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, Gio.UnixFDList | null];

    call_open_for_restore_sync(
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, Gio.UnixFDList];

    call_remove_configuration_item(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_remove_configuration_item_sync(
        arg_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_rescan(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rescan_finish(res: Gio.AsyncResult): boolean;

    call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_update_configuration_item(
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean;

    call_update_configuration_item_sync(
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    complete_format(invocation: Gio.DBusMethodInvocation): void;

    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void;

    complete_open_device(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;

    complete_open_for_backup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_open_for_benchmark(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_open_for_restore(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        fd: GLib.Variant
    ): void;

    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    complete_rescan(invocation: Gio.DBusMethodInvocation): void;

    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_open_device(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_mode: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_backup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_benchmark(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_open_for_restore(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_update_configuration_item(
        invocation: Gio.DBusMethodInvocation,
        arg_old_item: GLib.Variant,
        arg_new_item: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export const Block: BlockNamespace;

export interface BlockBcacheNamespace {
    $gtype: GObject.GType<BlockBcache>;
    prototype: BlockBcachePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type BlockBcache = BlockBcachePrototype;

export interface BlockBcachePrototype extends GObject.Object {
    // Properties
    block_size: number;
    blockSize: number;
    bypass_hits: number;
    bypassHits: number;
    bypass_misses: number;
    bypassMisses: number;
    cache_size: number;
    cacheSize: number;
    cache_used: number;
    cacheUsed: number;
    hits: number;
    misses: number;
    mode: string;
    state: string;

    // Members

    call_bcache_destroy(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_bcache_destroy_finish(res: Gio.AsyncResult): boolean;

    call_bcache_destroy_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_mode(
        arg_mode: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_mode_finish(res: Gio.AsyncResult): boolean;

    call_set_mode_sync(arg_mode: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_bcache_destroy(invocation: Gio.DBusMethodInvocation): void;

    complete_set_mode(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_bcache_destroy(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_mode(invocation: Gio.DBusMethodInvocation, arg_mode: string, arg_options: GLib.Variant): boolean;
}

export const BlockBcache: BlockBcacheNamespace;

export interface BlockLVM2Namespace {
    $gtype: GObject.GType<BlockLVM2>;
    prototype: BlockLVM2Prototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type BlockLVM2 = BlockLVM2Prototype;

export interface BlockLVM2Prototype extends GObject.Object {
    // Properties
    logical_volume: string;
    logicalVolume: string;
}

export const BlockLVM2: BlockLVM2Namespace;

export interface BlockZRAMNamespace {
    $gtype: GObject.GType<BlockZRAM>;
    prototype: BlockZRAMPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type BlockZRAM = BlockZRAMPrototype;

export interface BlockZRAMPrototype extends GObject.Object {
    // Properties
    active: boolean;
    comp_algorithm: string;
    compAlgorithm: string;
    compr_data_size: number;
    comprDataSize: number;
    disksize: number;
    invalid_io: number;
    invalidIo: number;
    max_comp_streams: number;
    maxCompStreams: number;
    mem_used_total: number;
    memUsedTotal: number;
    num_reads: number;
    numReads: number;
    num_writes: number;
    numWrites: number;
    orig_data_size: number;
    origDataSize: number;
    zero_pages: number;
    zeroPages: number;

    // Members

    call_activate(
        arg_priority: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_finish(res: Gio.AsyncResult): boolean;

    call_activate_labeled(
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_labeled_finish(res: Gio.AsyncResult): boolean;

    call_activate_labeled_sync(
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_activate_sync(arg_priority: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_deactivate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_deactivate_finish(res: Gio.AsyncResult): boolean;

    call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_refresh(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_refresh_finish(res: Gio.AsyncResult): boolean;

    call_refresh_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_activate(invocation: Gio.DBusMethodInvocation): void;

    complete_activate_labeled(invocation: Gio.DBusMethodInvocation): void;

    complete_deactivate(invocation: Gio.DBusMethodInvocation): void;

    complete_refresh(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_activate(
        invocation: Gio.DBusMethodInvocation,
        arg_priority: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_activate_labeled(
        invocation: Gio.DBusMethodInvocation,
        arg_priority: number,
        arg_label: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const BlockZRAM: BlockZRAMNamespace;

export interface DriveNamespace {
    $gtype: GObject.GType<Drive>;
    prototype: DrivePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Drive = DrivePrototype;

export interface DrivePrototype extends GObject.Object {
    // Properties
    can_power_off: boolean;
    canPowerOff: boolean;
    configuration: GLib.Variant;
    connection_bus: string;
    connectionBus: string;
    ejectable: boolean;
    id: string;
    media: string;
    media_available: boolean;
    mediaAvailable: boolean;
    media_change_detected: boolean;
    mediaChangeDetected: boolean;
    media_compatibility: string[];
    mediaCompatibility: string[];
    media_removable: boolean;
    mediaRemovable: boolean;
    model: string;
    optical: boolean;
    optical_blank: boolean;
    opticalBlank: boolean;
    optical_num_audio_tracks: number;
    opticalNumAudioTracks: number;
    optical_num_data_tracks: number;
    opticalNumDataTracks: number;
    optical_num_sessions: number;
    opticalNumSessions: number;
    optical_num_tracks: number;
    opticalNumTracks: number;
    removable: boolean;
    revision: string;
    rotation_rate: number;
    rotationRate: number;
    seat: string;
    serial: string;
    sibling_id: string;
    siblingId: string;
    size: number;
    sort_key: string;
    sortKey: string;
    time_detected: number;
    timeDetected: number;
    time_media_detected: number;
    timeMediaDetected: number;
    vendor: string;
    wwn: string;

    // Members

    call_eject(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_eject_finish(res: Gio.AsyncResult): boolean;

    call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_power_off(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_power_off_finish(res: Gio.AsyncResult): boolean;

    call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_configuration(
        arg_value: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_configuration_finish(res: Gio.AsyncResult): boolean;

    call_set_configuration_sync(
        arg_value: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_eject(invocation: Gio.DBusMethodInvocation): void;

    complete_power_off(invocation: Gio.DBusMethodInvocation): void;

    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_configuration(
        invocation: Gio.DBusMethodInvocation,
        arg_value: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export const Drive: DriveNamespace;

export interface DriveAtaNamespace {
    $gtype: GObject.GType<DriveAta>;
    prototype: DriveAtaPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type DriveAta = DriveAtaPrototype;

export interface DriveAtaPrototype extends GObject.Object {
    // Properties
    aam_enabled: boolean;
    aamEnabled: boolean;
    aam_supported: boolean;
    aamSupported: boolean;
    aam_vendor_recommended_value: number;
    aamVendorRecommendedValue: number;
    apm_enabled: boolean;
    apmEnabled: boolean;
    apm_supported: boolean;
    apmSupported: boolean;
    pm_enabled: boolean;
    pmEnabled: boolean;
    pm_supported: boolean;
    pmSupported: boolean;
    read_lookahead_enabled: boolean;
    readLookaheadEnabled: boolean;
    read_lookahead_supported: boolean;
    readLookaheadSupported: boolean;
    security_enhanced_erase_unit_minutes: number;
    securityEnhancedEraseUnitMinutes: number;
    security_erase_unit_minutes: number;
    securityEraseUnitMinutes: number;
    security_frozen: boolean;
    securityFrozen: boolean;
    smart_enabled: boolean;
    smartEnabled: boolean;
    smart_failing: boolean;
    smartFailing: boolean;
    smart_num_attributes_failed_in_the_past: number;
    smartNumAttributesFailedInThePast: number;
    smart_num_attributes_failing: number;
    smartNumAttributesFailing: number;
    smart_num_bad_sectors: number;
    smartNumBadSectors: number;
    smart_power_on_seconds: number;
    smartPowerOnSeconds: number;
    smart_selftest_percent_remaining: number;
    smartSelftestPercentRemaining: number;
    smart_selftest_status: string;
    smartSelftestStatus: string;
    smart_supported: boolean;
    smartSupported: boolean;
    smart_temperature: number;
    smartTemperature: number;
    smart_updated: number;
    smartUpdated: number;
    write_cache_enabled: boolean;
    writeCacheEnabled: boolean;
    write_cache_supported: boolean;
    writeCacheSupported: boolean;

    // Members

    call_pm_get_state(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_get_state_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, number | null];

    call_pm_standby(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_standby_finish(res: Gio.AsyncResult): boolean;

    call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_pm_wakeup(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean;

    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_security_erase_unit(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean;

    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_smart_get_attributes(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_get_attributes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_smart_get_attributes_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_smart_selftest_abort(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;

    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_smart_selftest_start(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;

    call_smart_selftest_start_sync(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_smart_set_enabled(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean;

    call_smart_set_enabled_sync(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_smart_update(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_smart_update_finish(res: Gio.AsyncResult): boolean;

    call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void;

    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void;

    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void;

    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;

    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void;

    complete_smart_update(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_smart_selftest_start(
        invocation: Gio.DBusMethodInvocation,
        arg_type: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_smart_set_enabled(
        invocation: Gio.DBusMethodInvocation,
        arg_value: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const DriveAta: DriveAtaNamespace;

export interface EncryptedNamespace {
    $gtype: GObject.GType<Encrypted>;
    prototype: EncryptedPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Encrypted = EncryptedPrototype;

export interface EncryptedPrototype extends GObject.Object {
    // Properties
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    cleartext_device: string;
    cleartextDevice: string;
    hint_encryption_type: string;
    hintEncryptionType: string;
    metadata_size: number;
    metadataSize: number;

    // Members

    call_change_passphrase(
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_change_passphrase_finish(res: Gio.AsyncResult): boolean;

    call_change_passphrase_sync(
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_lock(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_lock_finish(res: Gio.AsyncResult): boolean;

    call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_unlock(
        arg_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_unlock_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_unlock_sync(
        arg_passphrase: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void;

    complete_lock(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void;

    vfunc_handle_change_passphrase(
        invocation: Gio.DBusMethodInvocation,
        arg_passphrase: string,
        arg_new_passphrase: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_unlock(
        invocation: Gio.DBusMethodInvocation,
        arg_passphrase: string,
        arg_options: GLib.Variant
    ): boolean;
}

export const Encrypted: EncryptedNamespace;

export interface FilesystemNamespace {
    $gtype: GObject.GType<Filesystem>;
    prototype: FilesystemPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Filesystem = FilesystemPrototype;

export interface FilesystemPrototype extends GObject.Object {
    // Properties
    mount_points: string[];
    mountPoints: string[];
    size: number;

    // Members

    call_check(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_check_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_check_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    call_mount(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_mount_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    call_repair(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_repair_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, boolean | null];

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_take_ownership(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_take_ownership_finish(res: Gio.AsyncResult): boolean;

    call_take_ownership_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_unmount(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_unmount_finish(res: Gio.AsyncResult): boolean;

    call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_check(invocation: Gio.DBusMethodInvocation, consistent: boolean): void;

    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void;

    complete_repair(invocation: Gio.DBusMethodInvocation, repaired: boolean): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    complete_take_ownership(invocation: Gio.DBusMethodInvocation): void;

    complete_unmount(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_check(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_take_ownership(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const Filesystem: FilesystemNamespace;

export interface FilesystemBTRFSNamespace {
    $gtype: GObject.GType<FilesystemBTRFS>;
    prototype: FilesystemBTRFSPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type FilesystemBTRFS = FilesystemBTRFSPrototype;

export interface FilesystemBTRFSPrototype extends GObject.Object {
    // Properties
    label: string;
    num_devices: number;
    numDevices: number;
    used: number;
    uuid: string;

    // Members

    call_add_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_snapshot(
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_snapshot_finish(res: Gio.AsyncResult): boolean;

    call_create_snapshot_sync(
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_create_subvolume(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_subvolume_finish(res: Gio.AsyncResult): boolean;

    call_create_subvolume_sync(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_get_subvolumes(
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_subvolumes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null, number | null];

    call_get_subvolumes_sync(
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null, number | null];

    call_remove_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_remove_subvolume(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_subvolume_finish(res: Gio.AsyncResult): boolean;

    call_remove_subvolume_sync(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_repair(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_repair_finish(res: Gio.AsyncResult): boolean;

    call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_create_snapshot(invocation: Gio.DBusMethodInvocation): void;

    complete_create_subvolume(invocation: Gio.DBusMethodInvocation): void;

    complete_get_subvolumes(
        invocation: Gio.DBusMethodInvocation,
        subvolumes: GLib.Variant,
        subvolumes_cnt: number
    ): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_subvolume(invocation: Gio.DBusMethodInvocation): void;

    complete_repair(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_snapshot(
        invocation: Gio.DBusMethodInvocation,
        arg_source: string,
        arg_dest: string,
        arg_ro: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_subvolume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_get_subvolumes(
        invocation: Gio.DBusMethodInvocation,
        arg_snapshots_only: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_remove_subvolume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;
}

export const FilesystemBTRFS: FilesystemBTRFSNamespace;

export interface JobNamespace {
    $gtype: GObject.GType<Job>;
    prototype: JobPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Job = JobPrototype;

export interface JobPrototype extends GObject.Object {
    // Properties
    bytes: number;
    cancelable: boolean;
    expected_end_time: number;
    expectedEndTime: number;
    objects: string[];
    operation: string;
    progress: number;
    progress_valid: boolean;
    progressValid: boolean;
    rate: number;
    start_time: number;
    startTime: number;
    started_by_uid: number;
    startedByUid: number;

    // Members

    call_cancel(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cancel_finish(res: Gio.AsyncResult): boolean;

    call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_cancel(invocation: Gio.DBusMethodInvocation): void;

    emit_completed(arg_success: boolean, arg_message: string): void;

    vfunc_completed(arg_success: boolean, arg_message: string): void;

    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const Job: JobNamespace;

export interface LogicalVolumeNamespace {
    $gtype: GObject.GType<LogicalVolume>;
    prototype: LogicalVolumePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type LogicalVolume = LogicalVolumePrototype;

export interface LogicalVolumePrototype extends GObject.Object {
    // Properties
    active: boolean;
    block_device: string;
    blockDevice: string;
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    data_allocated_ratio: number;
    dataAllocatedRatio: number;
    metadata_allocated_ratio: number;
    metadataAllocatedRatio: number;
    name: string;
    origin: string;
    size: number;
    thin_pool: string;
    thinPool: string;
    type: string;
    uuid: string;
    volume_group: string;
    volumeGroup: string;

    // Members

    call_activate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_activate_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_activate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    call_cache_attach(
        arg_cache_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_attach_finish(res: Gio.AsyncResult): boolean;

    call_cache_attach_sync(
        arg_cache_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_cache_detach(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_detach_finish(res: Gio.AsyncResult): boolean;

    call_cache_detach_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_cache_split(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_cache_split_finish(res: Gio.AsyncResult): boolean;

    call_cache_split_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_snapshot(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_snapshot_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_snapshot_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_deactivate(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_deactivate_finish(res: Gio.AsyncResult): boolean;

    call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_rename(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rename_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_rename_sync(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_resize(
        arg_new_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_new_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_activate(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_cache_attach(invocation: Gio.DBusMethodInvocation): void;

    complete_cache_detach(invocation: Gio.DBusMethodInvocation): void;

    complete_cache_split(invocation: Gio.DBusMethodInvocation): void;

    complete_create_snapshot(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_deactivate(invocation: Gio.DBusMethodInvocation): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_cache_attach(
        invocation: Gio.DBusMethodInvocation,
        arg_cache_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_cache_detach(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_cache_split(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_create_snapshot(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_rename(invocation: Gio.DBusMethodInvocation, arg_new_name: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_new_size: number, arg_options: GLib.Variant): boolean;
}

export const LogicalVolume: LogicalVolumeNamespace;

export interface LoopNamespace {
    $gtype: GObject.GType<Loop>;
    prototype: LoopPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Loop = LoopPrototype;

export interface LoopPrototype extends GObject.Object {
    // Properties
    autoclear: boolean;
    backing_file: string;
    backingFile: string;
    setup_by_uid: number;
    setupByUid: number;

    // Members

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_autoclear(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_autoclear_finish(res: Gio.AsyncResult): boolean;

    call_set_autoclear_sync(
        arg_value: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_autoclear(
        invocation: Gio.DBusMethodInvocation,
        arg_value: boolean,
        arg_options: GLib.Variant
    ): boolean;
}

export const Loop: LoopNamespace;

export interface MDRaidNamespace {
    $gtype: GObject.GType<MDRaid>;
    prototype: MDRaidPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type MDRaid = MDRaidPrototype;

export interface MDRaidPrototype extends GObject.Object {
    // Properties
    active_devices: GLib.Variant;
    activeDevices: GLib.Variant;
    bitmap_location: string;
    bitmapLocation: string;
    child_configuration: GLib.Variant;
    childConfiguration: GLib.Variant;
    chunk_size: number;
    chunkSize: number;
    degraded: number;
    level: string;
    name: string;
    num_devices: number;
    numDevices: number;
    running: boolean;
    size: number;
    sync_action: string;
    syncAction: string;
    sync_completed: number;
    syncCompleted: number;
    sync_rate: number;
    syncRate: number;
    sync_remaining_time: number;
    syncRemainingTime: number;
    uuid: string;

    // Members

    call_add_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_remove_device(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_device: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_request_sync_action(
        arg_sync_action: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_request_sync_action_finish(res: Gio.AsyncResult): boolean;

    call_request_sync_action_sync(
        arg_sync_action: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_set_bitmap_location(
        arg_value: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean;

    call_set_bitmap_location_sync(
        arg_value: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_start(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_start_finish(res: Gio.AsyncResult): boolean;

    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_stop(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_stop_finish(res: Gio.AsyncResult): boolean;

    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void;

    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void;

    complete_start(invocation: Gio.DBusMethodInvocation): void;

    complete_stop(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_device: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_request_sync_action(
        invocation: Gio.DBusMethodInvocation,
        arg_sync_action: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_set_bitmap_location(
        invocation: Gio.DBusMethodInvocation,
        arg_value: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const MDRaid: MDRaidNamespace;

export interface ManagerNamespace {
    $gtype: GObject.GType<Manager>;
    prototype: ManagerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Manager = ManagerPrototype;

export interface ManagerPrototype extends GObject.Object {
    // Properties
    default_encryption_type: string;
    defaultEncryptionType: string;
    supported_encryption_types: string[];
    supportedEncryptionTypes: string[];
    supported_filesystems: string[];
    supportedFilesystems: string[];
    version: string;

    // Members

    call_can_check(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_check_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_check_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_format(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_format_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_format_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_repair(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_repair_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_repair_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_can_resize(
        arg_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_can_resize_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_can_resize_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];

    call_enable_module(
        arg_name: string,
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_module_finish(res: Gio.AsyncResult): boolean;

    call_enable_module_sync(arg_name: string, arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    call_enable_modules(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_modules_finish(res: Gio.AsyncResult): boolean;

    call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;

    call_get_block_devices(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_block_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_get_block_devices_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    call_loop_setup(
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant,
        fd_list?: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_loop_setup_finish(res: Gio.AsyncResult): [boolean, string | null, Gio.UnixFDList | null];

    call_loop_setup_sync(
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant,
        fd_list: Gio.UnixFDList | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, Gio.UnixFDList];

    call_mdraid_create(
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_mdraid_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_mdraid_create_sync(
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_resolve_device(
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resolve_device_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_resolve_device_sync(
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    complete_can_check(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_format(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_repair(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_can_resize(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;

    complete_enable_module(invocation: Gio.DBusMethodInvocation): void;

    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void;

    complete_get_block_devices(invocation: Gio.DBusMethodInvocation, block_objects: string): void;

    complete_loop_setup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList | null,
        resulting_device: string
    ): void;

    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void;

    complete_resolve_device(invocation: Gio.DBusMethodInvocation, devices: string): void;

    vfunc_handle_can_check(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_format(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_repair(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_can_resize(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;

    vfunc_handle_enable_module(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_enable: boolean): boolean;

    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;

    vfunc_handle_get_block_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_loop_setup(
        invocation: Gio.DBusMethodInvocation,
        fd_list: Gio.UnixFDList,
        arg_fd: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_mdraid_create(
        invocation: Gio.DBusMethodInvocation,
        arg_blocks: string,
        arg_level: string,
        arg_name: string,
        arg_chunk: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_resolve_device(
        invocation: Gio.DBusMethodInvocation,
        arg_devspec: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;
}

export const Manager: ManagerNamespace;

export interface ManagerBTRFSNamespace {
    $gtype: GObject.GType<ManagerBTRFS>;
    prototype: ManagerBTRFSPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type ManagerBTRFS = ManagerBTRFSPrototype;

export interface ManagerBTRFSPrototype extends GObject.Object {
    // Members

    call_create_volume(
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_volume_finish(res: Gio.AsyncResult): boolean;

    call_create_volume_sync(
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_create_volume(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_create_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_devices: string,
        arg_label: string,
        arg_data_level: string,
        arg_md_level: string,
        arg_options: GLib.Variant
    ): boolean;
}

export const ManagerBTRFS: ManagerBTRFSNamespace;

export interface ManagerBcacheNamespace {
    $gtype: GObject.GType<ManagerBcache>;
    prototype: ManagerBcachePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type ManagerBcache = ManagerBcachePrototype;

export interface ManagerBcachePrototype extends GObject.Object {
    // Members

    call_bcache_create(
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_bcache_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_bcache_create_sync(
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_bcache_create(invocation: Gio.DBusMethodInvocation, bcache: string): void;

    vfunc_handle_bcache_create(
        invocation: Gio.DBusMethodInvocation,
        arg_backing_dev: string,
        arg_cache_dev: string,
        arg_options: GLib.Variant
    ): boolean;
}

export const ManagerBcache: ManagerBcacheNamespace;

export interface ManagerLVM2Namespace {
    $gtype: GObject.GType<ManagerLVM2>;
    prototype: ManagerLVM2Prototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type ManagerLVM2 = ManagerLVM2Prototype;

export interface ManagerLVM2Prototype extends GObject.Object {
    // Members

    call_volume_group_create(
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_volume_group_create_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_volume_group_create_sync(
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_volume_group_create(invocation: Gio.DBusMethodInvocation, result: string): void;

    vfunc_handle_volume_group_create(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_blocks: string,
        arg_options: GLib.Variant
    ): boolean;
}

export const ManagerLVM2: ManagerLVM2Namespace;

export interface ManagerZRAMNamespace {
    $gtype: GObject.GType<ManagerZRAM>;
    prototype: ManagerZRAMPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type ManagerZRAM = ManagerZRAMPrototype;

export interface ManagerZRAMPrototype extends GObject.Object {
    // Members

    call_create_devices(
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];

    call_create_devices_sync(
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    call_destroy_devices(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_destroy_devices_finish(res: Gio.AsyncResult): boolean;

    call_destroy_devices_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_create_devices(invocation: Gio.DBusMethodInvocation, zrams: string): void;

    complete_destroy_devices(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_create_devices(
        invocation: Gio.DBusMethodInvocation,
        arg_sizes: GLib.Variant,
        arg_num_streams: GLib.Variant,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_destroy_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const ManagerZRAM: ManagerZRAMNamespace;

export interface ObjectNamespace {
    $gtype: GObject.GType<Object>;
    prototype: ObjectPrototype;
}

export type Object = ObjectPrototype;

export interface ObjectPrototype extends Gio.DBusObject {
    // Properties
    block: Block;
    block_bcache: BlockBcache;
    blockBcache: BlockBcache;
    block_lvm2: BlockLVM2;
    blockLvm2: BlockLVM2;
    block_zram: BlockZRAM;
    blockZram: BlockZRAM;
    drive: Drive;
    drive_ata: DriveAta;
    driveAta: DriveAta;
    encrypted: Encrypted;
    filesystem: Filesystem;
    filesystem_btrfs: FilesystemBTRFS;
    filesystemBtrfs: FilesystemBTRFS;
    job: Job;
    logical_volume: LogicalVolume;
    logicalVolume: LogicalVolume;
    loop: Loop;
    manager: Manager;
    manager_bcache: ManagerBcache;
    managerBcache: ManagerBcache;
    manager_btrfs: ManagerBTRFS;
    managerBtrfs: ManagerBTRFS;
    manager_lvm2: ManagerLVM2;
    managerLvm2: ManagerLVM2;
    manager_zram: ManagerZRAM;
    managerZram: ManagerZRAM;
    mdraid: MDRaid;
    partition: Partition;
    partition_table: PartitionTable;
    partitionTable: PartitionTable;
    physical_volume: PhysicalVolume;
    physicalVolume: PhysicalVolume;
    swapspace: Swapspace;
    vdo_volume: VDOVolume;
    vdoVolume: VDOVolume;
    volume_group: VolumeGroup;
    volumeGroup: VolumeGroup;

    // Members

    get_block(): Block | null;

    get_block_bcache(): BlockBcache | null;

    get_block_lvm2(): BlockLVM2 | null;

    get_block_zram(): BlockZRAM | null;

    get_drive(): Drive | null;

    get_drive_ata(): DriveAta | null;

    get_encrypted(): Encrypted | null;

    get_filesystem(): Filesystem | null;

    get_filesystem_btrfs(): FilesystemBTRFS | null;

    get_job(): Job | null;

    get_logical_volume(): LogicalVolume | null;

    get_loop(): Loop | null;

    get_manager(): Manager | null;

    get_manager_bcache(): ManagerBcache | null;

    get_manager_btrfs(): ManagerBTRFS | null;

    get_manager_lvm2(): ManagerLVM2 | null;

    get_manager_zram(): ManagerZRAM | null;

    get_mdraid(): MDRaid | null;

    get_partition(): Partition | null;

    get_partition_table(): PartitionTable | null;

    get_physical_volume(): PhysicalVolume | null;

    get_swapspace(): Swapspace | null;

    get_vdo_volume(): VDOVolume | null;

    get_volume_group(): VolumeGroup | null;
}

export const Object: ObjectNamespace;

export interface PartitionNamespace {
    $gtype: GObject.GType<Partition>;
    prototype: PartitionPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Partition = PartitionPrototype;

export interface PartitionPrototype extends GObject.Object {
    // Properties
    flags: number;
    is_contained: boolean;
    isContained: boolean;
    is_container: boolean;
    isContainer: boolean;
    name: string;
    number: number;
    offset: number;
    size: number;
    table: string;
    type: string;
    uuid: string;

    // Members

    call_delete(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_resize(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_finish(res: Gio.AsyncResult): boolean;

    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_flags(
        arg_flags: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_flags_finish(res: Gio.AsyncResult): boolean;

    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_name(
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_name_finish(res: Gio.AsyncResult): boolean;

    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_set_type(
        arg_type: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_type_finish(res: Gio.AsyncResult): boolean;

    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_resize(invocation: Gio.DBusMethodInvocation): void;

    complete_set_flags(invocation: Gio.DBusMethodInvocation): void;

    complete_set_name(invocation: Gio.DBusMethodInvocation): void;

    complete_set_type(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;
}

export const Partition: PartitionNamespace;

export interface PartitionTableNamespace {
    $gtype: GObject.GType<PartitionTable>;
    prototype: PartitionTablePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type PartitionTable = PartitionTablePrototype;

export interface PartitionTablePrototype extends GObject.Object {
    // Properties
    partitions: string[];
    type: string;

    // Members

    call_create_partition(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_partition_and_format(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_partition_and_format_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_partition_and_format_sync(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_partition_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_partition_sync(
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

    vfunc_handle_create_partition(
        invocation: Gio.DBusMethodInvocation,
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_partition_and_format(
        invocation: Gio.DBusMethodInvocation,
        arg_offset: number,
        arg_size: number,
        arg_type: string,
        arg_name: string,
        arg_options: GLib.Variant,
        arg_format_type: string,
        arg_format_options: GLib.Variant
    ): boolean;
}

export const PartitionTable: PartitionTableNamespace;

export interface PhysicalVolumeNamespace {
    $gtype: GObject.GType<PhysicalVolume>;
    prototype: PhysicalVolumePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type PhysicalVolume = PhysicalVolumePrototype;

export interface PhysicalVolumePrototype extends GObject.Object {
    // Properties
    free_size: number;
    freeSize: number;
    size: number;
    volume_group: string;
    volumeGroup: string;
}

export const PhysicalVolume: PhysicalVolumeNamespace;

export interface SwapspaceNamespace {
    $gtype: GObject.GType<Swapspace>;
    prototype: SwapspacePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Swapspace = SwapspacePrototype;

export interface SwapspacePrototype extends GObject.Object {
    // Properties
    active: boolean;

    // Members

    call_set_label(
        arg_label: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_set_label_finish(res: Gio.AsyncResult): boolean;

    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_start(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_start_finish(res: Gio.AsyncResult): boolean;

    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_stop(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_stop_finish(res: Gio.AsyncResult): boolean;

    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    complete_set_label(invocation: Gio.DBusMethodInvocation): void;

    complete_start(invocation: Gio.DBusMethodInvocation): void;

    complete_stop(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean;

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
}

export const Swapspace: SwapspaceNamespace;

export interface VDOVolumeNamespace {
    $gtype: GObject.GType<VDOVolume>;
    prototype: VDOVolumePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type VDOVolume = VDOVolumePrototype;

export interface VDOVolumePrototype extends GObject.Object {
    // Properties
    compression: boolean;
    compression_state: string;
    compressionState: string;
    deduplication: boolean;
    index_state: string;
    indexState: string;
    operating_mode: string;
    operatingMode: string;
    used_size: number;
    usedSize: number;
    vdo_pool: string;
    vdoPool: string;

    // Members

    call_enable_compression(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_compression_finish(res: Gio.AsyncResult): boolean;

    call_enable_compression_sync(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_enable_deduplication(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_enable_deduplication_finish(res: Gio.AsyncResult): boolean;

    call_enable_deduplication_sync(
        arg_enable: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_get_statistics(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_statistics_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_get_statistics_sync(
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_resize_logical(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_logical_finish(res: Gio.AsyncResult): boolean;

    call_resize_logical_sync(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_resize_physical(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_resize_physical_finish(res: Gio.AsyncResult): boolean;

    call_resize_physical_sync(
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    complete_enable_compression(invocation: Gio.DBusMethodInvocation): void;

    complete_enable_deduplication(invocation: Gio.DBusMethodInvocation): void;

    complete_get_statistics(invocation: Gio.DBusMethodInvocation, stats: GLib.Variant): void;

    complete_resize_logical(invocation: Gio.DBusMethodInvocation): void;

    complete_resize_physical(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_enable_compression(
        invocation: Gio.DBusMethodInvocation,
        arg_enable: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_enable_deduplication(
        invocation: Gio.DBusMethodInvocation,
        arg_enable: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;

    vfunc_handle_resize_logical(
        invocation: Gio.DBusMethodInvocation,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_resize_physical(
        invocation: Gio.DBusMethodInvocation,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;
}

export const VDOVolume: VDOVolumeNamespace;

export interface VolumeGroupNamespace {
    $gtype: GObject.GType<VolumeGroup>;
    prototype: VolumeGroupPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type VolumeGroup = VolumeGroupPrototype;

export interface VolumeGroupPrototype extends GObject.Object {
    // Properties
    extent_size: number;
    extentSize: number;
    free_size: number;
    freeSize: number;
    name: string;
    needs_polling: boolean;
    needsPolling: boolean;
    size: number;
    uuid: string;

    // Members

    call_add_device(
        arg_block: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_device_finish(res: Gio.AsyncResult): boolean;

    call_add_device_sync(arg_block: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_create_plain_volume(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_plain_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_plain_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_thin_pool_volume(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_thin_pool_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_thin_pool_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_thin_volume(
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_thin_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_thin_volume_sync(
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_create_vdo_volume(
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_create_vdo_volume_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_create_vdo_volume_sync(
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_delete(
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_delete_finish(res: Gio.AsyncResult): boolean;

    call_delete_sync(arg_wipe: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_empty_device(
        arg_block: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_empty_device_finish(res: Gio.AsyncResult): boolean;

    call_empty_device_sync(arg_block: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    call_poll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_poll_finish(res: Gio.AsyncResult): boolean;

    call_poll_sync(cancellable?: Gio.Cancellable | null): boolean;

    call_remove_device(
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_remove_device_finish(res: Gio.AsyncResult): boolean;

    call_remove_device_sync(
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    call_rename(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_rename_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_rename_sync(
        arg_new_name: string,
        arg_options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    complete_add_device(invocation: Gio.DBusMethodInvocation): void;

    complete_create_plain_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_thin_pool_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_thin_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_create_vdo_volume(invocation: Gio.DBusMethodInvocation, result: string): void;

    complete_delete(invocation: Gio.DBusMethodInvocation): void;

    complete_empty_device(invocation: Gio.DBusMethodInvocation): void;

    complete_poll(invocation: Gio.DBusMethodInvocation): void;

    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;

    complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

    vfunc_handle_add_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_plain_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_thin_pool_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_thin_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_name: string,
        arg_size: number,
        arg_pool: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_create_vdo_volume(
        invocation: Gio.DBusMethodInvocation,
        arg_lv_name: string,
        arg_pool_name: string,
        arg_data_size: number,
        arg_virtual_size: number,
        arg_index_memory: number,
        arg_compression: boolean,
        arg_deduplication: boolean,
        arg_write_policy: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_wipe: boolean, arg_options: GLib.Variant): boolean;

    vfunc_handle_empty_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_poll(invocation: Gio.DBusMethodInvocation): boolean;

    vfunc_handle_remove_device(
        invocation: Gio.DBusMethodInvocation,
        arg_block: string,
        arg_wipe: boolean,
        arg_options: GLib.Variant
    ): boolean;

    vfunc_handle_rename(invocation: Gio.DBusMethodInvocation, arg_new_name: string, arg_options: GLib.Variant): boolean;
}

export const VolumeGroup: VolumeGroupNamespace;
