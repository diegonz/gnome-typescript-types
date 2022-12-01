/**
 * LibvirtGObject 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as LibvirtGConfig from './libvirtgconfig';
import * as LibvirtGLib from './libvirtglib';
import * as GLib from './glib';

export function init_object(argv?: string[] | null): string[] | null;

export function init_object_check(argv?: string[] | null): [boolean, string[] | null];

export type StreamIOFunc = (stream: Stream, cond: StreamIOCondition, opaque?: any | null) => boolean;
export type StreamSinkFunc = (stream: Stream) => number;
export type StreamSourceFunc = (stream: Stream) => number;
export type ConnectionHandle = object | null;
export type DomainHandle = object | null;
export type DomainSnapshotHandle = object | null;
export type InterfaceHandle = object | null;
export type NetworkFilterHandle = object | null;
export type NetworkHandle = object | null;
export type NodeDeviceHandle = object | null;
export type SecretHandle = object | null;
export type StoragePoolHandle = object | null;
export type StorageVolHandle = object | null;
export type StreamHandle = object | null;

export namespace DomainDeleteFlags {
    export const $gtype: GObject.GType<DomainDeleteFlags>;
}

export enum DomainDeleteFlags {
    NONE = 0,
    SAVED_STATE = 1,
    SNAPSHOTS_METADATA = 2,
}

export namespace DomainRebootFlags {
    export const $gtype: GObject.GType<DomainRebootFlags>;
}

export enum DomainRebootFlags {
    NONE = 0,
    ACPI_POWER_BTN = 1,
    GUEST_AGENT = 2,
}

export namespace DomainShutdownFlags {
    export const $gtype: GObject.GType<DomainShutdownFlags>;
}

export enum DomainShutdownFlags {
    NONE = 0,
    ACPI_POWER_BTN = 1,
    GUEST_AGENT = 2,
}

export namespace DomainSnapshotCreateFlags {
    export const $gtype: GObject.GType<DomainSnapshotCreateFlags>;
}

export enum DomainSnapshotCreateFlags {
    NONE = 0,
    REDEFINE = 1,
    CURRENT = 2,
    NO_METADATA = 4,
    HALT = 8,
    DISK_ONLY = 16,
    REUSE_EXT = 32,
    QUIESCE = 64,
    ATOMIC = 128,
}

export namespace DomainSnapshotDeleteFlags {
    export const $gtype: GObject.GType<DomainSnapshotDeleteFlags>;
}

export enum DomainSnapshotDeleteFlags {
    CHILDREN = 1,
    METADATA_ONLY = 2,
    CHILDREN_ONLY = 4,
}

export namespace DomainSnapshotListFlags {
    export const $gtype: GObject.GType<DomainSnapshotListFlags>;
}

export enum DomainSnapshotListFlags {
    ALL = 0,
    DESCENDANTS = 1,
    ROOTS = 1,
    METADATA = 2,
    LEAVES = 4,
    NO_LEAVES = 8,
    NO_METADATA = 16,
    INACTIVE = 32,
    ACTIVE = 64,
    DISK_ONLY = 128,
    INTERNAL = 256,
    EXTERNAL = 512,
}

export namespace DomainSnapshotRevertFlags {
    export const $gtype: GObject.GType<DomainSnapshotRevertFlags>;
}

export enum DomainSnapshotRevertFlags {
    RUNNING = 1,
    PAUSED = 2,
    FORCE = 4,
}

export namespace DomainState {
    export const $gtype: GObject.GType<DomainState>;
}

export enum DomainState {
    NONE = 0,
    RUNNING = 1,
    BLOCKED = 2,
    PAUSED = 3,
    SHUTDOWN = 4,
    SHUTOFF = 5,
    CRASHED = 6,
    PMSUSPENDED = 7,
}

export namespace DomainUpdateDeviceFlags {
    export const $gtype: GObject.GType<DomainUpdateDeviceFlags>;
}

export enum DomainUpdateDeviceFlags {
    CURRENT = 0,
    LIVE = 1,
    CONFIG = 2,
}

export namespace DomainXMLFlags {
    export const $gtype: GObject.GType<DomainXMLFlags>;
}

export enum DomainXMLFlags {
    NONE = 0,
    SECURE = 1,
    INACTIVE = 2,
    UPDATE_CPU = 4,
}

export namespace IPAddrType {
    export const $gtype: GObject.GType<IPAddrType>;
}

export enum IPAddrType {
    IPV4 = 0,
    IPV6 = 1,
}

export namespace StoragePoolState {
    export const $gtype: GObject.GType<StoragePoolState>;
}

export enum StoragePoolState {
    INACTIVE = 0,
    BUILDING = 1,
    RUNNING = 2,
    DEGRADED = 3,
    INACCESSIBLE = 4,
}

export namespace StorageVolResizeFlags {
    export const $gtype: GObject.GType<StorageVolResizeFlags>;
}

export enum StorageVolResizeFlags {
    NONE = 0,
    ALLOCATE = 1,
    DELTA = 2,
    SHRINK = 4,
}

export namespace StorageVolType {
    export const $gtype: GObject.GType<StorageVolType>;
}

export enum StorageVolType {
    FILE = 0,
    BLOCK = 1,
    DIR = 2,
}

export namespace DomainStartFlags {
    export const $gtype: GObject.GType<DomainStartFlags>;
}

export enum DomainStartFlags {
    NONE = 0,
    PAUSED = 1,
    AUTODESTROY = 2,
    BYPASS_CACHE = 4,
    FORCE_BOOT = 8,
}

export namespace StreamIOCondition {
    export const $gtype: GObject.GType<StreamIOCondition>;
}

export enum StreamIOCondition {
    READABLE = 1,
    WRITABLE = 2,
    HANGUP = 4,
    ERROR = 8,
}

export namespace Connection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: ConnectionHandle;
        uri: string;
    }
}

export class Connection extends GObject.Object {
    static $gtype: GObject.GType<Connection>;

    constructor(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: ConnectionHandle;
    uri: string;

    // Fields
    priv: ConnectionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'connection-closed', callback: (_source: this) => void): number;

    connect_after(signal: 'connection-closed', callback: (_source: this) => void): number;

    emit(signal: 'connection-closed'): void;

    connect(signal: 'connection-opened', callback: (_source: this) => void): number;

    connect_after(signal: 'connection-opened', callback: (_source: this) => void): number;

    emit(signal: 'connection-opened'): void;

    connect(signal: 'domain-added', callback: (_source: this, object: Domain) => void): number;

    connect_after(signal: 'domain-added', callback: (_source: this, object: Domain) => void): number;

    emit(signal: 'domain-added', object: Domain): void;

    connect(signal: 'domain-removed', callback: (_source: this, object: Domain) => void): number;

    connect_after(signal: 'domain-removed', callback: (_source: this, object: Domain) => void): number;

    emit(signal: 'domain-removed', object: Domain): void;

    // Constructors

    static ['new'](uri: string): Connection;

    // Members

    close(): void;

    create_domain(conf: LibvirtGConfig.Domain): Domain;

    create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool;

    fetch_domains(cancellable?: Gio.Cancellable | null): boolean;

    fetch_domains_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_domains_finish(result: Gio.AsyncResult): boolean;

    fetch_interfaces(cancellable?: Gio.Cancellable | null): boolean;

    fetch_interfaces_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_interfaces_finish(result: Gio.AsyncResult): boolean;

    fetch_networks(cancellable?: Gio.Cancellable | null): boolean;

    fetch_networks_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_networks_finish(result: Gio.AsyncResult): boolean;

    fetch_storage_pools(cancellable?: Gio.Cancellable | null): boolean;

    fetch_storage_pools_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    fetch_storage_pools_finish(result: Gio.AsyncResult): boolean;

    find_domain_by_id(id: number): Domain;

    find_domain_by_name(name: string): Domain;

    find_interface_by_mac(macaddr: string): Interface;

    find_network_by_name(name: string): Network;

    find_storage_pool_by_name(name: string): StoragePool;

    get_capabilities(): LibvirtGConfig.Capabilities;

    get_capabilities_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities;

    get_domain(uuid: string): Domain;

    get_domain_capabilities(
        emulatorbin: string | null,
        arch: string | null,
        machine: string | null,
        virttype: string | null,
        flags: number
    ): LibvirtGConfig.DomainCapabilities;

    get_domain_capabilities_async(
        emulatorbin: string | null,
        arch: string | null,
        machine: string | null,
        virttype: string | null,
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_domain_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities;

    get_domains(): Domain[];

    get_hypervisor_name(): string;

    get_interface(name: string): Interface;

    get_interfaces(): Interface[];

    get_network(uuid: string): Network;

    get_networks(): Network[];

    get_node_info(): NodeInfo;

    get_storage_pool(uuid: string): StoragePool;

    get_storage_pools(): StoragePool[];

    get_stream(flags: number): Stream;

    get_uri(): string;

    get_version(): number;

    is_open(): boolean;

    is_read_only(): boolean;

    open(cancellable?: Gio.Cancellable | null): boolean;

    open_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    open_finish(result: Gio.AsyncResult): boolean;

    open_read_only(cancellable?: Gio.Cancellable | null): boolean;

    open_read_only_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    open_read_only_finish(result: Gio.AsyncResult): boolean;

    restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;

    restore_domain_from_file_async(
        filename: string,
        custom_conf: LibvirtGConfig.Domain | null,
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    restore_domain_from_file_finish(result: Gio.AsyncResult): boolean;

    start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain;

    vfunc_connection_closed(): void;

    vfunc_connection_opened(): void;

    vfunc_domain_added(dom: Domain): void;

    vfunc_domain_removed(dom: Domain): void;
}

export namespace Domain {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: DomainHandle;
        persistent: boolean;
    }
}

export class Domain extends GObject.Object {
    static $gtype: GObject.GType<Domain>;

    constructor(properties?: Partial<Domain.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Domain.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: DomainHandle;
    persistent: boolean;

    // Fields
    priv: DomainPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'pmsuspended', callback: (_source: this) => void): number;

    connect_after(signal: 'pmsuspended', callback: (_source: this) => void): number;

    emit(signal: 'pmsuspended'): void;

    connect(signal: 'resumed', callback: (_source: this) => void): number;

    connect_after(signal: 'resumed', callback: (_source: this) => void): number;

    emit(signal: 'resumed'): void;

    connect(signal: 'started', callback: (_source: this) => void): number;

    connect_after(signal: 'started', callback: (_source: this) => void): number;

    emit(signal: 'started'): void;

    connect(signal: 'stopped', callback: (_source: this) => void): number;

    connect_after(signal: 'stopped', callback: (_source: this) => void): number;

    emit(signal: 'stopped'): void;

    connect(signal: 'suspended', callback: (_source: this) => void): number;

    connect_after(signal: 'suspended', callback: (_source: this) => void): number;

    emit(signal: 'suspended'): void;

    connect(signal: 'updated', callback: (_source: this) => void): number;

    connect_after(signal: 'updated', callback: (_source: this) => void): number;

    emit(signal: 'updated'): void;

    // Members

    create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot;

    create_snapshot_async(
        custom_conf: LibvirtGConfig.DomainSnapshot | null,
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot;

    ['delete'](flags: number): boolean;

    fetch_snapshots(list_flags: number, cancellable?: Gio.Cancellable | null): boolean;

    fetch_snapshots_async(
        list_flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    fetch_snapshots_finish(res: Gio.AsyncResult): boolean;

    get_config(flags: number): LibvirtGConfig.Domain;

    get_devices(): DomainDevice[];

    get_has_current_snapshot(flags: number): [boolean, boolean];

    get_id(): number;

    get_info(): DomainInfo;

    get_info_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_info_finish(result: Gio.AsyncResult): DomainInfo;

    get_name(): string;

    get_persistent(): boolean;

    get_saved(): boolean;

    get_snapshots(): DomainSnapshot[];

    get_uuid(): string;

    open_console(stream: Stream, devname: string | null, flags: number): boolean;

    open_graphics(idx: number, fd: number, flags: number): boolean;

    open_graphics_fd(idx: number, flags: number): number;

    reboot(flags: number): boolean;

    resume(): boolean;

    resume_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    resume_finish(result: Gio.AsyncResult): boolean;

    save(flags: number): boolean;

    save_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_finish(result: Gio.AsyncResult): boolean;

    save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;

    save_to_file_async(
        filename: string,
        custom_conf: LibvirtGConfig.Domain | null,
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_to_file_finish(result: Gio.AsyncResult): boolean;

    screenshot(stream: Stream, monitor_id: number, flags: number): string;

    set_config(conf: LibvirtGConfig.Domain): boolean;

    set_time(date_time: GLib.DateTime | null, flags: number): boolean;

    set_time_async(
        date_time: GLib.DateTime | null,
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_time_finish(result: Gio.AsyncResult): boolean;

    shutdown(flags: number): boolean;

    start(flags: number): boolean;

    start_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    start_finish(result: Gio.AsyncResult): boolean;

    stop(flags: number): boolean;

    suspend(): boolean;

    update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean;

    wakeup(flags: number): boolean;

    wakeup_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    wakeup_finish(result: Gio.AsyncResult): boolean;

    vfunc_pmsuspended(): void;

    vfunc_resumed(): void;

    vfunc_started(): void;

    vfunc_stopped(): void;

    vfunc_suspended(): void;

    vfunc_updated(): void;
}

export namespace DomainDevice {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        config: LibvirtGConfig.DomainDevice;
        domain: Domain;
    }
}

export abstract class DomainDevice extends GObject.Object {
    static $gtype: GObject.GType<DomainDevice>;

    constructor(properties?: Partial<DomainDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    config: LibvirtGConfig.DomainDevice;
    domain: Domain;

    // Fields
    priv: DomainDevicePrivate;

    // Members

    get_config(): LibvirtGConfig.DomainDevice;

    get_domain(): Domain;
}

export namespace DomainDisk {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainDisk extends DomainDevice {
    static $gtype: GObject.GType<DomainDisk>;

    constructor(properties?: Partial<DomainDisk.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainDisk.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainDiskPrivate | any;

    // Members

    get_stats(): DomainDiskStats;

    resize(size: number, flags: number): boolean;
}

export namespace DomainInterface {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInterface extends DomainDevice {
    static $gtype: GObject.GType<DomainInterface>;

    constructor(properties?: Partial<DomainInterface.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterface.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfacePrivate | any;

    // Members

    get_stats(): DomainInterfaceStats;
}

export namespace DomainSnapshot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: DomainSnapshotHandle;
    }
}

export class DomainSnapshot extends GObject.Object {
    static $gtype: GObject.GType<DomainSnapshot>;

    constructor(properties?: Partial<DomainSnapshot.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSnapshot.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: DomainSnapshotHandle;

    // Fields
    priv: DomainSnapshotPrivate;

    // Members

    ['delete'](flags: number): boolean;

    delete_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_finish(res: Gio.AsyncResult): boolean;

    get_config(flags: number): LibvirtGConfig.DomainSnapshot;

    get_is_current(flags: number): [boolean, boolean];

    get_name(): string;

    revert_to(flags: number): boolean;

    revert_to_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    revert_to_finish(result: Gio.AsyncResult): boolean;

    set_config(conf: LibvirtGConfig.DomainSnapshot): boolean;
}

export namespace Interface {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: InterfaceHandle;
    }
}

export class Interface extends GObject.Object {
    static $gtype: GObject.GType<Interface>;

    constructor(properties?: Partial<Interface.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Interface.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: InterfaceHandle;

    // Fields
    priv: InterfacePrivate;

    // Members

    get_config(flags: number): LibvirtGConfig.Interface;

    get_mac(): string;

    get_name(): string;
}

export namespace Manager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Manager extends GObject.Object {
    static $gtype: GObject.GType<Manager>;

    constructor(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ManagerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'connection-added', callback: (_source: this, object: Connection) => void): number;

    connect_after(signal: 'connection-added', callback: (_source: this, object: Connection) => void): number;

    emit(signal: 'connection-added', object: Connection): void;

    connect(signal: 'connection-removed', callback: (_source: this, object: Connection) => void): number;

    connect_after(signal: 'connection-removed', callback: (_source: this, object: Connection) => void): number;

    emit(signal: 'connection-removed', object: Connection): void;

    // Constructors

    static ['new'](): Manager;

    // Members

    add_connection(conn: Connection): void;

    find_connection_by_uri(uri: string): Connection | null;

    get_connections(): Connection[];

    remove_connection(conn: Connection): void;

    vfunc_connection_added(conn: Connection): void;

    vfunc_connection_removed(conn: Connection): void;
}

export namespace Network {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: NetworkHandle;
    }
}

export class Network extends GObject.Object {
    static $gtype: GObject.GType<Network>;

    constructor(properties?: Partial<Network.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Network.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: NetworkHandle;

    // Fields
    priv: NetworkPrivate;

    // Members

    get_config(flags: number): LibvirtGConfig.Network;

    get_dhcp_leases(mac: string | null, flags: number): NetworkDHCPLease[];

    get_name(): string;

    get_uuid(): string;

    vfunc_started(): void;

    vfunc_stopped(): void;
}

export namespace NetworkDHCPLease {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: any;
    }
}

export class NetworkDHCPLease extends GObject.Object {
    static $gtype: GObject.GType<NetworkDHCPLease>;

    constructor(properties?: Partial<NetworkDHCPLease.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NetworkDHCPLease.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: any;

    // Fields
    priv: NetworkDHCPLeasePrivate;

    // Members

    get_client_id(): string;

    get_expiry_time(): number;

    get_hostname(): string;

    get_iaid(): string;

    get_iface(): string;

    get_ip(): string;

    get_ip_type(): number;

    get_mac(): string;

    get_prefix(): number;
}

export namespace NetworkFilter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: NetworkFilterHandle;
    }
}

export class NetworkFilter extends GObject.Object {
    static $gtype: GObject.GType<NetworkFilter>;

    constructor(properties?: Partial<NetworkFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NetworkFilter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: NetworkFilterHandle;

    // Fields
    priv: NetworkFilterPrivate;

    // Members

    get_config(flags: number): LibvirtGConfig.NetworkFilter;

    get_name(): string;

    get_uuid(): string;
}

export namespace NodeDevice {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: NodeDeviceHandle;
    }
}

export class NodeDevice extends GObject.Object {
    static $gtype: GObject.GType<NodeDevice>;

    constructor(properties?: Partial<NodeDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NodeDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: NodeDeviceHandle;

    // Fields
    priv: NodeDevicePrivate;

    // Members

    get_config(flags: number): LibvirtGConfig.NodeDevice;

    get_name(): string;
}

export namespace Secret {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: SecretHandle;
    }
}

export class Secret extends GObject.Object {
    static $gtype: GObject.GType<Secret>;

    constructor(properties?: Partial<Secret.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Secret.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: SecretHandle;

    // Fields
    priv: SecretPrivate;

    // Members

    get_config(flags: number): LibvirtGConfig.Secret;

    get_name(): string;

    get_uuid(): string;
}

export namespace StoragePool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: StoragePoolHandle;
    }
}

export class StoragePool extends GObject.Object {
    static $gtype: GObject.GType<StoragePool>;

    constructor(properties?: Partial<StoragePool.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoragePool.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: StoragePoolHandle;

    // Fields
    priv: StoragePoolPrivate;

    // Members

    build(flags: number): boolean;

    build_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    build_finish(result: Gio.AsyncResult): boolean;

    create_volume(conf: LibvirtGConfig.StorageVol): StorageVol;

    ['delete'](flags: number): boolean;

    delete_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_finish(result: Gio.AsyncResult): boolean;

    get_active(): boolean;

    get_autostart(): boolean;

    get_config(flags: number): LibvirtGConfig.StoragePool;

    get_info(): StoragePoolInfo;

    get_name(): string;

    get_persistent(): boolean;

    get_uuid(): string;

    get_volume(name: string): StorageVol;

    get_volumes(): StorageVol[];

    refresh(cancellable?: Gio.Cancellable | null): boolean;

    refresh_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    refresh_finish(result: Gio.AsyncResult): boolean;

    set_autostart(autostart: boolean): boolean;

    start(flags: number): boolean;

    start_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    start_finish(result: Gio.AsyncResult): boolean;

    stop(): boolean;

    stop_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    stop_finish(result: Gio.AsyncResult): boolean;

    undefine(): boolean;

    undefine_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    undefine_finish(result: Gio.AsyncResult): boolean;
}

export namespace StorageVol {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        handle: StorageVolHandle;
        pool: StoragePool;
    }
}

export class StorageVol extends GObject.Object {
    static $gtype: GObject.GType<StorageVol>;

    constructor(properties?: Partial<StorageVol.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StorageVol.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: StorageVolHandle;
    pool: StoragePool;

    // Fields
    priv: StorageVolPrivate;

    // Members

    ['delete'](flags: number): boolean;

    download(stream: Stream, offset: number, length: number, flags: number): boolean;

    get_config(flags: number): LibvirtGConfig.StorageVol;

    get_info(): StorageVolInfo;

    get_name(): string;

    get_path(): string;

    resize(capacity: number, flags: StorageVolResizeFlags): boolean;

    upload(stream: Stream, offset: number, length: number, flags: number): boolean;
}

export namespace Stream {
    export interface ConstructorProperties extends Gio.IOStream.ConstructorProperties {
        [key: string]: any;

        handle: StreamHandle;
    }
}

export class Stream extends Gio.IOStream {
    static $gtype: GObject.GType<Stream>;

    constructor(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    handle: StreamHandle;

    // Fields
    priv: StreamPrivate;

    // Members

    add_watch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number;

    receive(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): number;

    receive_all(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number;

    send(buffer: string, size: number, cancellable?: Gio.Cancellable | null): number;

    send_all(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number;
}

export class ConnectionPrivate {
    static $gtype: GObject.GType<ConnectionPrivate>;

    constructor(copy: ConnectionPrivate);
}

export class DomainDevicePrivate {
    static $gtype: GObject.GType<DomainDevicePrivate>;

    constructor(copy: DomainDevicePrivate);
}

export class DomainDiskPrivate {
    static $gtype: GObject.GType<DomainDiskPrivate>;

    constructor(copy: DomainDiskPrivate);
}

export class DomainDiskStats {
    static $gtype: GObject.GType<DomainDiskStats>;

    constructor(
        properties?: Partial<{
            rd_req?: number;
            rd_bytes?: number;
            wr_req?: number;
            wr_bytes?: number;
            errs?: number;
        }>
    );

    constructor(copy: DomainDiskStats);

    // Fields
    rd_req: number;
    rd_bytes: number;
    wr_req: number;
    wr_bytes: number;
    errs: number;
}

export class DomainInfo {
    static $gtype: GObject.GType<DomainInfo>;

    constructor(copy: DomainInfo);

    // Fields
    state: DomainState;
    maxMem: number;
    memory: number;
    nrVirtCpu: number;
    cpuTime: number;
}

export class DomainInterfacePrivate {
    static $gtype: GObject.GType<DomainInterfacePrivate>;

    constructor(copy: DomainInterfacePrivate);
}

export class DomainInterfaceStats {
    static $gtype: GObject.GType<DomainInterfaceStats>;

    constructor(
        properties?: Partial<{
            rx_bytes?: number;
            rx_packets?: number;
            rx_errs?: number;
            rx_drop?: number;
            tx_bytes?: number;
            tx_packets?: number;
            tx_errs?: number;
            tx_drop?: number;
        }>
    );

    constructor(copy: DomainInterfaceStats);

    // Fields
    rx_bytes: number;
    rx_packets: number;
    rx_errs: number;
    rx_drop: number;
    tx_bytes: number;
    tx_packets: number;
    tx_errs: number;
    tx_drop: number;
}

export class DomainPrivate {
    static $gtype: GObject.GType<DomainPrivate>;

    constructor(copy: DomainPrivate);
}

export class DomainSnapshotPrivate {
    static $gtype: GObject.GType<DomainSnapshotPrivate>;

    constructor(copy: DomainSnapshotPrivate);
}

export class InterfacePrivate {
    static $gtype: GObject.GType<InterfacePrivate>;

    constructor(copy: InterfacePrivate);
}

export class ManagerPrivate {
    static $gtype: GObject.GType<ManagerPrivate>;

    constructor(copy: ManagerPrivate);
}

export class NetworkDHCPLeasePrivate {
    static $gtype: GObject.GType<NetworkDHCPLeasePrivate>;

    constructor(copy: NetworkDHCPLeasePrivate);
}

export class NetworkFilterPrivate {
    static $gtype: GObject.GType<NetworkFilterPrivate>;

    constructor(copy: NetworkFilterPrivate);
}

export class NetworkPrivate {
    static $gtype: GObject.GType<NetworkPrivate>;

    constructor(copy: NetworkPrivate);
}

export class NodeDevicePrivate {
    static $gtype: GObject.GType<NodeDevicePrivate>;

    constructor(copy: NodeDevicePrivate);
}

export class NodeInfo {
    static $gtype: GObject.GType<NodeInfo>;

    constructor(copy: NodeInfo);

    // Fields
    model: number[];
    memory: number;
    cpus: number;
    mhz: number;
    nodes: number;
    sockets: number;
    cores: number;
    threads: number;
}

export class SecretPrivate {
    static $gtype: GObject.GType<SecretPrivate>;

    constructor(copy: SecretPrivate);
}

export class StoragePoolInfo {
    static $gtype: GObject.GType<StoragePoolInfo>;

    constructor(copy: StoragePoolInfo);

    // Fields
    state: StoragePoolState;
    capacity: number;
    allocation: number;
    available: number;
}

export class StoragePoolPrivate {
    static $gtype: GObject.GType<StoragePoolPrivate>;

    constructor(copy: StoragePoolPrivate);
}

export class StorageVolInfo {
    static $gtype: GObject.GType<StorageVolInfo>;

    constructor(copy: StorageVolInfo);

    // Fields
    type: StorageVolType;
    capacity: number;
    allocation: number;
}

export class StorageVolPrivate {
    static $gtype: GObject.GType<StorageVolPrivate>;

    constructor(copy: StorageVolPrivate);
}

export class StreamPrivate {
    static $gtype: GObject.GType<StreamPrivate>;

    constructor(copy: StreamPrivate);
}
