/**
 * GUsb 1.0
 *
 * Generated from 0.3.5
 */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function source_error_quark(): GLib.Quark;

export function strerror(error_code: number): string;

export function version_string(): string;

export namespace ContextError {
    export const $gtype: GObject.GType<ContextError>;
}

export enum ContextError {
    CONTEXT_ERROR_INTERNAL = 0,
}

export namespace DeviceClassCode {
    export const $gtype: GObject.GType<DeviceClassCode>;
}

export enum DeviceClassCode {
    INTERFACE_DESC = 0,
    AUDIO = 1,
    COMMUNICATIONS = 2,
    HID = 3,
    PHYSICAL = 5,
    IMAGE = 6,
    PRINTER = 7,
    MASS_STORAGE = 8,
    HUB = 9,
    CDC_DATA = 10,
    SMART_CARD = 11,
    CONTENT_SECURITY = 13,
    VIDEO = 14,
    PERSONAL_HEALTHCARE = 15,
    AUDIO_VIDEO = 16,
    BILLBOARD = 17,
    DIAGNOSTIC = 220,
    WIRELESS_CONTROLLER = 224,
    MISCELLANEOUS = 239,
    APPLICATION_SPECIFIC = 254,
    VENDOR_SPECIFIC = 255,
}

export namespace DeviceDirection {
    export const $gtype: GObject.GType<DeviceDirection>;
}

export enum DeviceDirection {
    DEVICE_TO_HOST = 0,
    HOST_TO_DEVICE = 1,
}

export namespace DeviceError {
    export const $gtype: GObject.GType<DeviceError>;
}

export enum DeviceError {
    INTERNAL = 0,
    IO = 1,
    TIMED_OUT = 2,
    NOT_SUPPORTED = 3,
    NO_DEVICE = 4,
    NOT_OPEN = 5,
    ALREADY_OPEN = 6,
    CANCELLED = 7,
    FAILED = 8,
    PERMISSION_DENIED = 9,
    LAST = 10,
}

export namespace DeviceRecipient {
    export const $gtype: GObject.GType<DeviceRecipient>;
}

export enum DeviceRecipient {
    DEVICE = 0,
    INTERFACE = 1,
    ENDPOINT = 2,
    OTHER = 3,
}

export namespace DeviceRequestType {
    export const $gtype: GObject.GType<DeviceRequestType>;
}

export enum DeviceRequestType {
    STANDARD = 0,
    CLASS = 1,
    VENDOR = 2,
    RESERVED = 3,
}

export class SourceError extends GLib.Error {
    static $gtype: GObject.GType<SourceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SourceError);

    // Properties
    static SOURCE_ERROR_INTERNAL: number;
}

export namespace ContextFlags {
    export const $gtype: GObject.GType<ContextFlags>;
}

export enum ContextFlags {
    NONE = 0,
    AUTO_OPEN_DEVICES = 1,
}

export namespace DeviceClaimInterfaceFlags {
    export const $gtype: GObject.GType<DeviceClaimInterfaceFlags>;
}

export enum DeviceClaimInterfaceFlags {
    NONE = 0,
    BIND_KERNEL_DRIVER = 1,
}

export namespace Context {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        debug_level: number;
        debugLevel: number;
        libusb_context: any;
        libusbContext: any;
    }
}

export class Context extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Context>;

    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;

    // Properties
    debug_level: number;
    debugLevel: number;
    libusb_context: any;
    libusbContext: any;

    // Fields
    priv: ContextPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;

    connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;

    emit(signal: 'device-added', device: Device): void;

    connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;

    connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;

    emit(signal: 'device-removed', device: Device): void;

    // Constructors

    static ['new'](): Context;

    // Members

    enumerate(): void;

    find_by_bus_address(bus: number, address: number): Device;

    find_by_platform_id(platform_id: string): Device;

    find_by_vid_pid(vid: number, pid: number): Device;

    get_devices(): Device[];

    get_flags(): ContextFlags;

    get_main_context(): GLib.MainContext;

    get_source(main_ctx: GLib.MainContext): Source;

    set_debug(flags: GLib.LogLevelFlags): void;

    set_flags(flags: ContextFlags): void;

    set_main_context(main_ctx: GLib.MainContext): void;

    wait_for_replug(device: Device, timeout_ms: number): Device;

    vfunc_device_added(device: Device): void;

    vfunc_device_removed(device: Device): void;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: Context;
        libusb_device: any;
        libusbDevice: any;
        platform_id: string;
        platformId: string;
    }
}

export class Device extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: Context;
    libusb_device: any;
    libusbDevice: any;
    platform_id: string;
    platformId: string;

    // Fields
    priv: DevicePrivate;

    // Members

    bulk_transfer(
        endpoint: number,
        data: Uint8Array | string,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    bulk_transfer_async(
        endpoint: number,
        data: Uint8Array | string,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    bulk_transfer_finish(res: Gio.AsyncResult): number;

    claim_interface(_interface: number, flags: DeviceClaimInterfaceFlags): boolean;

    close(): boolean;

    control_transfer(
        direction: DeviceDirection,
        request_type: DeviceRequestType,
        recipient: DeviceRecipient,
        request: number,
        value: number,
        idx: number,
        data: Uint8Array | string,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    control_transfer_async(
        direction: DeviceDirection,
        request_type: DeviceRequestType,
        recipient: DeviceRecipient,
        request: number,
        value: number,
        idx: number,
        data: Uint8Array | string,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    control_transfer_finish(res: Gio.AsyncResult): number;

    get_address(): number;

    get_bus(): number;

    get_children(): Device[];

    get_configuration(): number;

    get_configuration_index(): number;

    get_custom_index(class_id: number, subclass_id: number, protocol_id: number): number;

    get_device_class(): number;

    get_device_protocol(): number;

    get_device_subclass(): number;

    get_interface(class_id: number, subclass_id: number, protocol_id: number): Interface;

    get_interfaces(): Interface[];

    get_manufacturer_index(): number;

    get_parent(): Device;

    get_pid(): number;

    get_pid_as_str(): string;

    get_platform_id(): string;

    get_port_number(): number;

    get_product_index(): number;

    get_release(): number;

    get_serial_number_index(): number;

    get_spec(): number;

    get_string_descriptor(desc_index: number): string;

    get_vid(): number;

    get_vid_as_str(): string;

    interrupt_transfer(
        endpoint: number,
        data: Uint8Array | string,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    interrupt_transfer_async(
        endpoint: number,
        data: Uint8Array | string,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    interrupt_transfer_finish(res: Gio.AsyncResult): number;

    open(): boolean;

    release_interface(_interface: number, flags: DeviceClaimInterfaceFlags): boolean;

    reset(): boolean;

    set_configuration(configuration: number): boolean;

    set_interface_alt(_interface: number, alt: number): boolean;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DeviceList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: Context;
    }
}

export class DeviceList extends GObject.Object {
    static $gtype: GObject.GType<DeviceList>;

    constructor(properties?: Partial<DeviceList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: Context;

    // Fields
    priv: DeviceListPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;

    connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;

    emit(signal: 'device-added', device: Device): void;

    connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;

    connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;

    emit(signal: 'device-removed', device: Device): void;

    // Constructors

    static ['new'](context: Context): DeviceList;

    // Members

    coldplug(): void;

    find_by_bus_address(bus: number, address: number): Device;

    find_by_vid_pid(vid: number, pid: number): Device;

    get_devices(): Device[];

    vfunc_device_added(device: Device): void;

    vfunc_device_removed(device: Device): void;
}

export namespace Endpoint {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Endpoint extends GObject.Object {
    static $gtype: GObject.GType<Endpoint>;

    constructor(properties?: Partial<Endpoint.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Endpoint.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_address(): number;

    get_direction(): DeviceDirection;

    get_extra(): GLib.Bytes;

    get_kind(): number;

    get_maximum_packet_size(): number;

    get_number(): number;

    get_polling_interval(): number;

    get_refresh(): number;

    get_synch_address(): number;
}

export namespace Interface {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Interface extends GObject.Object {
    static $gtype: GObject.GType<Interface>;

    constructor(properties?: Partial<Interface.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Interface.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_alternate(): number;

    get_class(): number;

    get_endpoints(): Endpoint[];

    get_extra(): GLib.Bytes;

    get_index(): number;

    get_kind(): number;

    get_length(): number;

    get_number(): number;

    get_protocol(): number;

    get_subclass(): number;
}

export class ContextPrivate {
    static $gtype: GObject.GType<ContextPrivate>;

    constructor(copy: ContextPrivate);
}

export class DeviceListPrivate {
    static $gtype: GObject.GType<DeviceListPrivate>;

    constructor(copy: DeviceListPrivate);
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class Source {
    static $gtype: GObject.GType<Source>;

    constructor(copy: Source);

    // Members
    set_callback(func: GLib.SourceFunc): void;

    static error_quark(): GLib.Quark;
}
