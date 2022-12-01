/**
 * LibvirtGConfig 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GLib from './glib';

export function init(argv?: string[] | null): string[] | null;

export function init_check(argv?: string[] | null): [boolean, string[] | null];

export namespace DomainChannelTargetType {
    export const $gtype: GObject.GType<DomainChannelTargetType>;
}

export enum DomainChannelTargetType {
    GUESTFWD = 0,
    VIRTIO = 1,
    SPICEPORT = 2,
}

export namespace DomainClockOffset {
    export const $gtype: GObject.GType<DomainClockOffset>;
}

export enum DomainClockOffset {
    UTC = 0,
    LOCALTIME = 1,
    TIMEZONE = 2,
    VARIABLE = 3,
}

export namespace DomainConsoleTargetType {
    export const $gtype: GObject.GType<DomainConsoleTargetType>;
}

export enum DomainConsoleTargetType {
    XEN = 0,
    SERIAL = 1,
    UML = 2,
    VIRTIO = 3,
    LXC = 4,
    OPENVZ = 5,
}

export namespace DomainControllerUsbModel {
    export const $gtype: GObject.GType<DomainControllerUsbModel>;
}

export enum DomainControllerUsbModel {
    PIIX3_UHCI = 0,
    PIIX4_UHCI = 1,
    EHCI = 2,
    ICH9_EHCI1 = 3,
    ICH9_UHCI1 = 4,
    ICH9_UHCI2 = 5,
    ICH9_UHCI3 = 6,
    VT82C686B_UHCI = 7,
    PCI_OHCI = 8,
}

export namespace DomainCpuFeaturePolicy {
    export const $gtype: GObject.GType<DomainCpuFeaturePolicy>;
}

export enum DomainCpuFeaturePolicy {
    FORCE = 0,
    REQUIRE = 1,
    OPTIONAL = 2,
    DISABLE = 3,
    FORBID = 4,
}

export namespace DomainCpuMatchPolicy {
    export const $gtype: GObject.GType<DomainCpuMatchPolicy>;
}

export enum DomainCpuMatchPolicy {
    MINIMUM = 0,
    EXACT = 1,
    STRICT = 2,
}

export namespace DomainCpuMode {
    export const $gtype: GObject.GType<DomainCpuMode>;
}

export enum DomainCpuMode {
    CUSTOM = 0,
    HOST_MODEL = 1,
    HOST_PASSTHROUGH = 2,
}

export namespace DomainDiskBus {
    export const $gtype: GObject.GType<DomainDiskBus>;
}

export enum DomainDiskBus {
    IDE = 0,
    FDC = 1,
    SCSI = 2,
    VIRTIO = 3,
    XEN = 4,
    USB = 5,
    UML = 6,
    SATA = 7,
}

export namespace DomainDiskCacheType {
    export const $gtype: GObject.GType<DomainDiskCacheType>;
}

export enum DomainDiskCacheType {
    DEFAULT = 0,
    NONE = 1,
    WRITETHROUGH = 2,
    WRITEBACK = 3,
    DIRECTSYNC = 4,
    UNSAFE = 5,
}

export namespace DomainDiskDriverDiscard {
    export const $gtype: GObject.GType<DomainDiskDriverDiscard>;
}

export enum DomainDiskDriverDiscard {
    UNMAP = 0,
    IGNORE = 1,
}

export namespace DomainDiskDriverErrorPolicy {
    export const $gtype: GObject.GType<DomainDiskDriverErrorPolicy>;
}

export enum DomainDiskDriverErrorPolicy {
    STOP = 0,
    REPORT = 1,
    IGNORE = 2,
    ENOSPACE = 3,
}

export namespace DomainDiskDriverIoPolicy {
    export const $gtype: GObject.GType<DomainDiskDriverIoPolicy>;
}

export enum DomainDiskDriverIoPolicy {
    THREADS = 0,
    NATIVE = 1,
}

export namespace DomainDiskFormat {
    export const $gtype: GObject.GType<DomainDiskFormat>;
}

export enum DomainDiskFormat {
    RAW = 0,
    DIR = 1,
    BOCHS = 2,
    CLOOP = 3,
    COW = 4,
    DMG = 5,
    ISO = 6,
    QCOW = 7,
    QCOW2 = 8,
    QED = 9,
    VMDK = 10,
    VPC = 11,
    FAT = 12,
    VHD = 13,
}

export namespace DomainDiskGuestDeviceType {
    export const $gtype: GObject.GType<DomainDiskGuestDeviceType>;
}

export enum DomainDiskGuestDeviceType {
    DISK = 0,
    FLOPPY = 1,
    CDROM = 2,
}

export namespace DomainDiskSnapshotType {
    export const $gtype: GObject.GType<DomainDiskSnapshotType>;
}

export enum DomainDiskSnapshotType {
    NO = 0,
    INTERNAL = 1,
    EXTERNAL = 2,
}

export namespace DomainDiskStartupPolicy {
    export const $gtype: GObject.GType<DomainDiskStartupPolicy>;
}

export enum DomainDiskStartupPolicy {
    MANDATORY = 0,
    REQUISITE = 1,
    OPTIONAL = 2,
}

export namespace DomainDiskType {
    export const $gtype: GObject.GType<DomainDiskType>;
}

export enum DomainDiskType {
    FILE = 0,
    BLOCK = 1,
    DIR = 2,
    NETWORK = 3,
}

export namespace DomainFilesysAccessType {
    export const $gtype: GObject.GType<DomainFilesysAccessType>;
}

export enum DomainFilesysAccessType {
    PASSTHROUGH = 0,
    MAPPED = 1,
    SQUASH = 2,
}

export namespace DomainFilesysDriverType {
    export const $gtype: GObject.GType<DomainFilesysDriverType>;
}

export enum DomainFilesysDriverType {
    DEFAULT = 0,
    PATH = 1,
    HANDLE = 2,
    LOOP = 3,
    NBD = 4,
    PLOOP = 5,
}

export namespace DomainFilesysType {
    export const $gtype: GObject.GType<DomainFilesysType>;
}

export enum DomainFilesysType {
    MOUNT = 0,
    BLOCK = 1,
    FILE = 2,
    TEMPLATE = 3,
    RAM = 4,
    BIND = 5,
}

export namespace DomainGraphicsSpiceImageCompression {
    export const $gtype: GObject.GType<DomainGraphicsSpiceImageCompression>;
}

export enum DomainGraphicsSpiceImageCompression {
    AUTO_GLZ = 0,
    AUTO_LZ = 1,
    QUIC = 2,
    GLZ = 3,
    LZ = 4,
    OFF = 5,
}

export namespace DomainInputBus {
    export const $gtype: GObject.GType<DomainInputBus>;
}

export enum DomainInputBus {
    PS2 = 0,
    USB = 1,
    XEN = 2,
}

export namespace DomainInputDeviceType {
    export const $gtype: GObject.GType<DomainInputDeviceType>;
}

export enum DomainInputDeviceType {
    MOUSE = 0,
    TABLET = 1,
    KEYBOARD = 2,
}

export namespace DomainInterfaceLinkState {
    export const $gtype: GObject.GType<DomainInterfaceLinkState>;
}

export enum DomainInterfaceLinkState {
    DEFAULT = 0,
    UP = 1,
    DOWN = 2,
}

export namespace DomainLifecycleAction {
    export const $gtype: GObject.GType<DomainLifecycleAction>;
}

export enum DomainLifecycleAction {
    DESTROY = 0,
    RESTART = 1,
    PRESERVE = 2,
    RENAME_RESTART = 3,
    COREDUMP_DESTROY = 4,
    COREDUMP_RESTART = 5,
}

export namespace DomainLifecycleEvent {
    export const $gtype: GObject.GType<DomainLifecycleEvent>;
}

export enum DomainLifecycleEvent {
    ON_POWEROFF = 0,
    ON_REBOOT = 1,
    ON_CRASH = 2,
}

export namespace DomainMemballoonModel {
    export const $gtype: GObject.GType<DomainMemballoonModel>;
}

export enum DomainMemballoonModel {
    NONE = 0,
    VIRTIO = 1,
}

export namespace DomainOsBootDevice {
    export const $gtype: GObject.GType<DomainOsBootDevice>;
}

export enum DomainOsBootDevice {
    FD = 0,
    HD = 1,
    CDROM = 2,
    NETWORK = 3,
}

export namespace DomainOsFirmware {
    export const $gtype: GObject.GType<DomainOsFirmware>;
}

export enum DomainOsFirmware {
    BIOS = 0,
    EFI = 1,
}

export namespace DomainOsSmBiosMode {
    export const $gtype: GObject.GType<DomainOsSmBiosMode>;
}

export enum DomainOsSmBiosMode {
    EMULATE = 0,
    HOST = 1,
    SYSINFO = 2,
}

export namespace DomainOsType {
    export const $gtype: GObject.GType<DomainOsType>;
}

export enum DomainOsType {
    HVM = 0,
    LINUX = 1,
    EXE = 2,
    XEN = 3,
    UML = 4,
}

export namespace DomainRedirdevBus {
    export const $gtype: GObject.GType<DomainRedirdevBus>;
}

export enum DomainRedirdevBus {
    USB = 0,
}

export namespace DomainSeclabelType {
    export const $gtype: GObject.GType<DomainSeclabelType>;
}

export enum DomainSeclabelType {
    DYNAMIC = 0,
    STATIC = 1,
}

export namespace DomainSnapshotDomainState {
    export const $gtype: GObject.GType<DomainSnapshotDomainState>;
}

export enum DomainSnapshotDomainState {
    NOSTATE = 0,
    RUNNING = 1,
    BLOCKED = 2,
    PAUSED = 3,
    SHUTDOWN = 4,
    SHUTOFF = 5,
    CRASHED = 6,
    PMSUSPENDED = 7,
    DISK_SNAPSHOT = 100,
}

export namespace DomainSnapshotMemoryState {
    export const $gtype: GObject.GType<DomainSnapshotMemoryState>;
}

export enum DomainSnapshotMemoryState {
    NONE = 0,
    INTERNAL = 1,
    EXTERNAL = 2,
}

export namespace DomainSoundModel {
    export const $gtype: GObject.GType<DomainSoundModel>;
}

export enum DomainSoundModel {
    SB16 = 0,
    ES1370 = 1,
    PCSPK = 2,
    AC97 = 3,
    ICH6 = 4,
    ICH9 = 5,
}

export namespace DomainTimerTickPolicy {
    export const $gtype: GObject.GType<DomainTimerTickPolicy>;
}

export enum DomainTimerTickPolicy {
    DELAY = 0,
    CATCHUP = 1,
    MERGE = 2,
    DISCARD = 3,
}

export namespace DomainVideoModel {
    export const $gtype: GObject.GType<DomainVideoModel>;
}

export enum DomainVideoModel {
    VGA = 0,
    CIRRUS = 1,
    VMVGA = 2,
    XEN = 3,
    VBOX = 4,
    QXL = 5,
    VIRTIO = 6,
    BOCHS = 7,
}

export namespace DomainVirtType {
    export const $gtype: GObject.GType<DomainVirtType>;
}

export enum DomainVirtType {
    QEMU = 0,
    KQEMU = 1,
    KVM = 2,
    XEN = 3,
    LXC = 4,
    UML = 5,
    OPENVZ = 6,
    VSERVER = 7,
    LDOM = 8,
    TEST = 9,
    VMWARE = 10,
    HYPERV = 11,
    VBOX = 12,
    ONE = 13,
    PHYP = 14,
}

export namespace StoragePoolType {
    export const $gtype: GObject.GType<StoragePoolType>;
}

export enum StoragePoolType {
    DIR = 0,
    FS = 1,
    NETFS = 2,
    LOGICAL = 3,
    DISK = 4,
    ISCSI = 5,
    SCSI = 6,
    MPATH = 7,
}

export namespace StorageVolTargetFeatures {
    export const $gtype: GObject.GType<StorageVolTargetFeatures>;
}

export enum StorageVolTargetFeatures {
    REFCOUNT = 1,
}

export namespace Capabilities {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Capabilities extends Object {
    static $gtype: GObject.GType<Capabilities>;

    constructor(properties?: Partial<Capabilities.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Capabilities.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesPrivate | any;

    // Constructors

    static ['new'](): Capabilities;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): Capabilities;
    static new_from_xml(...args: never[]): never;

    // Members

    get_guests(): CapabilitiesGuest[];

    get_host(): CapabilitiesHost;
}

export namespace CapabilitiesCpu {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesCpu extends Object {
    static $gtype: GObject.GType<CapabilitiesCpu>;

    constructor(properties?: Partial<CapabilitiesCpu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesCpu.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesCpuPrivate | any;

    // Members

    add_feature(feature: CapabilitiesCpuFeature): void;

    get_arch(): string;

    get_features(): CapabilitiesCpuFeature[];

    get_model(): CapabilitiesCpuModel;

    get_topology(): CapabilitiesCpuTopology;

    set_topology(topology: CapabilitiesCpuTopology): void;

    vfunc_get_features(): CapabilitiesCpuFeature[];
}

export namespace CapabilitiesCpuFeature {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesCpuFeature extends Object {
    static $gtype: GObject.GType<CapabilitiesCpuFeature>;

    constructor(properties?: Partial<CapabilitiesCpuFeature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesCpuFeature.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesCpuFeaturePrivate | any;

    // Members

    get_name(): string;

    set_name(name: string): void;
}

export namespace CapabilitiesCpuModel {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesCpuModel extends Object {
    static $gtype: GObject.GType<CapabilitiesCpuModel>;

    constructor(properties?: Partial<CapabilitiesCpuModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesCpuModel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesCpuModelPrivate | any;

    // Constructors

    static ['new'](): CapabilitiesCpuModel;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): CapabilitiesCpuModel;
    static new_from_xml(...args: never[]): never;

    // Members

    get_name(): string;

    set_name(name: string): void;
}

export namespace CapabilitiesCpuTopology {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesCpuTopology extends Object {
    static $gtype: GObject.GType<CapabilitiesCpuTopology>;

    constructor(properties?: Partial<CapabilitiesCpuTopology.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesCpuTopology.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesCpuTopologyPrivate | any;

    // Constructors

    static ['new'](): CapabilitiesCpuTopology;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): CapabilitiesCpuTopology;
    static new_from_xml(...args: never[]): never;

    // Members

    get_cores(): number;

    get_sockets(): number;

    get_threads(): number;

    set_cores(cores: number): void;

    set_sockets(sockets: number): void;

    set_threads(threads: number): void;
}

export namespace CapabilitiesGuest {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesGuest extends Object {
    static $gtype: GObject.GType<CapabilitiesGuest>;

    constructor(properties?: Partial<CapabilitiesGuest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesGuest.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesGuestPrivate | any;

    // Members

    get_arch(): CapabilitiesGuestArch;

    get_features(): CapabilitiesGuestFeature[];

    get_os_type(): DomainOsType;
}

export namespace CapabilitiesGuestArch {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesGuestArch extends Object {
    static $gtype: GObject.GType<CapabilitiesGuestArch>;

    constructor(properties?: Partial<CapabilitiesGuestArch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesGuestArch.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesGuestArchPrivate | any;

    // Members

    get_domains(): CapabilitiesGuestDomain[];

    get_emulator(): string;

    get_name(): string;
}

export namespace CapabilitiesGuestDomain {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesGuestDomain extends Object {
    static $gtype: GObject.GType<CapabilitiesGuestDomain>;

    constructor(properties?: Partial<CapabilitiesGuestDomain.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesGuestDomain.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesGuestDomainPrivate | any;

    // Members

    get_emulator(): string;

    get_virt_type(): DomainVirtType;
}

export namespace CapabilitiesGuestFeature {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesGuestFeature extends Object {
    static $gtype: GObject.GType<CapabilitiesGuestFeature>;

    constructor(properties?: Partial<CapabilitiesGuestFeature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesGuestFeature.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesGuestFeaturePrivate | any;

    // Members

    get_name(): string;
}

export namespace CapabilitiesHost {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesHost extends Object {
    static $gtype: GObject.GType<CapabilitiesHost>;

    constructor(properties?: Partial<CapabilitiesHost.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesHost.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesHostPrivate | any;

    // Members

    get_cpu(): CapabilitiesCpu;

    get_secmodels(): CapabilitiesHostSecModel[];

    get_uuid(): string;
}

export namespace CapabilitiesHostSecModel {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CapabilitiesHostSecModel extends Object {
    static $gtype: GObject.GType<CapabilitiesHostSecModel>;

    constructor(properties?: Partial<CapabilitiesHostSecModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CapabilitiesHostSecModel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CapabilitiesHostSecModelPrivate | any;

    // Members

    get_doi(): string;

    get_model(): string;
}

export namespace Domain {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        current_memory: number;
        currentMemory: number;
        description: string;
        features: string[];
        memory: number;
        name: string;
        title: string;
        uuid: string;
        vcpu: number;
    }
}

export class Domain extends Object {
    static $gtype: GObject.GType<Domain>;

    constructor(properties?: Partial<Domain.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Domain.ConstructorProperties>, ...args: any[]): void;

    // Properties
    current_memory: number;
    currentMemory: number;
    description: string;
    features: string[];
    memory: number;
    name: string;
    title: string;
    uuid: string;
    vcpu: number;

    // Fields
    priv: DomainPrivate | any;

    // Constructors

    static ['new'](): Domain;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): Domain;
    static new_from_xml(...args: never[]): never;

    // Members

    add_device(device: DomainDevice): void;

    get_clock(): DomainClock;

    get_cpu(): DomainCpu;

    get_current_memory(): number;

    get_custom_xml(ns_uri: string): string;

    get_description(): string;

    get_devices(): DomainDevice[];

    get_features(): string[];

    get_memory(): number;

    get_name(): string;

    get_os(): DomainOs;

    get_title(): string;

    get_uuid(): string;

    get_vcpus(): number;

    get_virt_type(): DomainVirtType;

    set_clock(klock?: DomainClock | null): void;

    set_cpu(cpu?: DomainCpu | null): void;

    set_current_memory(memory: number): void;

    set_custom_xml(xml: string, ns: string, ns_uri: string): boolean;

    set_custom_xml_ns_children(xml: string, ns: string, ns_uri: string): boolean;

    set_description(description?: string | null): void;

    set_devices(devices: DomainDevice[]): void;

    set_features(features: string[]): void;

    set_lifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void;

    set_memory(memory: number): void;

    set_name(name?: string | null): void;

    set_os(os?: DomainOs | null): void;

    set_power_management(pm?: DomainPowerManagement | null): void;

    set_seclabel(seclabel?: DomainSeclabel | null): void;

    set_title(title?: string | null): void;

    set_uuid(uuid?: string | null): void;

    set_vcpus(vcpu_count: number): void;

    set_virt_type(type: DomainVirtType): void;
}

export namespace DomainAddress {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainAddress extends Object {
    static $gtype: GObject.GType<DomainAddress>;

    constructor(properties?: Partial<DomainAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainAddress.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainAddressPrivate | any;
}

export namespace DomainAddressPci {
    export interface ConstructorProperties extends DomainAddress.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainAddressPci extends DomainAddress {
    static $gtype: GObject.GType<DomainAddressPci>;

    constructor(properties?: Partial<DomainAddressPci.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainAddressPci.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainAddressPciPrivate | any;

    // Constructors

    static ['new'](): DomainAddressPci;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainAddressPci;
    static new_from_xml(...args: never[]): never;

    // Members

    get_bus(): number;

    get_domain(): number;

    get_function(): number;

    get_multifunction(): boolean;

    get_slot(): number;

    set_bus(bus: number): void;

    set_domain(pci_domain: number): void;

    set_function(_function: number): void;

    set_multifunction(multifunction: boolean): void;

    set_slot(slot: number): void;
}

export namespace DomainAddressUsb {
    export interface ConstructorProperties extends DomainAddress.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainAddressUsb extends DomainAddress {
    static $gtype: GObject.GType<DomainAddressUsb>;

    constructor(properties?: Partial<DomainAddressUsb.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainAddressUsb.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainAddressUsbPrivate | any;

    // Constructors

    static ['new'](): DomainAddressUsb;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainAddressUsb;
    static new_from_xml(...args: never[]): never;

    // Members

    set_bus(bus: number): void;

    set_port(port: string): void;
}

export namespace DomainCapabilities {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainCapabilities extends Object {
    static $gtype: GObject.GType<DomainCapabilities>;

    constructor(properties?: Partial<DomainCapabilities.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainCapabilities.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainCapabilitiesPrivate | any;

    // Constructors

    static ['new'](): DomainCapabilities;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainCapabilities;
    static new_from_xml(...args: never[]): never;

    // Members

    get_os(): DomainCapabilitiesOs;
}

export namespace DomainCapabilitiesOs {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainCapabilitiesOs extends Object {
    static $gtype: GObject.GType<DomainCapabilitiesOs>;

    constructor(properties?: Partial<DomainCapabilitiesOs.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainCapabilitiesOs.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainCapabilitiesOsPrivate | any;

    // Members

    get_firmwares(): DomainOsFirmware[];

    vfunc_get_firmwares(): DomainOsFirmware[];
}

export namespace DomainChannel {
    export interface ConstructorProperties extends DomainChardev.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainChannel extends DomainChardev {
    static $gtype: GObject.GType<DomainChannel>;

    constructor(properties?: Partial<DomainChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChannel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChannelPrivate | any;

    // Constructors

    static ['new'](): DomainChannel;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainChannel;
    static new_from_xml(...args: never[]): never;

    // Members

    get_target_name(): string;

    get_target_type(): DomainChannelTargetType;

    set_target_name(name: string): void;

    set_target_type(type: DomainChannelTargetType): void;
}

export namespace DomainChardev {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainChardev extends DomainDevice {
    static $gtype: GObject.GType<DomainChardev>;

    constructor(properties?: Partial<DomainChardev.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChardev.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChardevPrivate | any;

    // Members

    get_source(): DomainChardevSource;

    set_source(source: DomainChardevSource): void;
}

export namespace DomainChardevSource {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainChardevSource extends Object {
    static $gtype: GObject.GType<DomainChardevSource>;

    constructor(properties?: Partial<DomainChardevSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChardevSource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChardevSourcePrivate | any;
}

export namespace DomainChardevSourcePty {
    export interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainChardevSourcePty extends DomainChardevSource {
    static $gtype: GObject.GType<DomainChardevSourcePty>;

    constructor(properties?: Partial<DomainChardevSourcePty.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChardevSourcePty.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChardevSourcePtyPrivate | any;

    // Constructors

    static ['new'](): DomainChardevSourcePty;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainChardevSourcePty;
    static new_from_xml(...args: never[]): never;

    // Members

    get_path(): string;

    set_path(path: string): void;
}

export namespace DomainChardevSourceSpicePort {
    export interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainChardevSourceSpicePort extends DomainChardevSource {
    static $gtype: GObject.GType<DomainChardevSourceSpicePort>;

    constructor(properties?: Partial<DomainChardevSourceSpicePort.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChardevSourceSpicePort.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChardevSourceSpicePortPrivate | any;

    // Constructors

    static ['new'](): DomainChardevSourceSpicePort;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainChardevSourceSpicePort;
    static new_from_xml(...args: never[]): never;

    // Members

    get_channel(): string;

    set_channel(channel: string): void;
}

export namespace DomainChardevSourceSpiceVmc {
    export interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainChardevSourceSpiceVmc extends DomainChardevSource {
    static $gtype: GObject.GType<DomainChardevSourceSpiceVmc>;

    constructor(properties?: Partial<DomainChardevSourceSpiceVmc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChardevSourceSpiceVmc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChardevSourceSpiceVmcPrivate | any;

    // Constructors

    static ['new'](): DomainChardevSourceSpiceVmc;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainChardevSourceSpiceVmc;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainChardevSourceUnix {
    export interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainChardevSourceUnix extends DomainChardevSource {
    static $gtype: GObject.GType<DomainChardevSourceUnix>;

    constructor(properties?: Partial<DomainChardevSourceUnix.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainChardevSourceUnix.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainChardevSourceUnixPrivate | any;

    // Constructors

    static ['new'](): DomainChardevSourceUnix;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainChardevSourceUnix;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainClock {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainClock extends Object {
    static $gtype: GObject.GType<DomainClock>;

    constructor(properties?: Partial<DomainClock.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainClock.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainClockPrivate | any;

    // Constructors

    static ['new'](): DomainClock;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainClock;
    static new_from_xml(...args: never[]): never;

    // Members

    add_timer(timer: DomainTimer): void;

    get_offset(): DomainClockOffset;

    get_timezone(): string;

    get_variable_offset(): number;

    set_offset(offset: DomainClockOffset): void;

    set_timezone(tz: string): void;

    set_variable_offset(seconds: number): void;
}

export namespace DomainConsole {
    export interface ConstructorProperties extends DomainChardev.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainConsole extends DomainChardev {
    static $gtype: GObject.GType<DomainConsole>;

    constructor(properties?: Partial<DomainConsole.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainConsole.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainConsolePrivate | any;

    // Constructors

    static ['new'](): DomainConsole;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainConsole;
    static new_from_xml(...args: never[]): never;

    // Members

    set_target_type(type: DomainConsoleTargetType): void;
}

export namespace DomainController {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainController extends DomainDevice {
    static $gtype: GObject.GType<DomainController>;

    constructor(properties?: Partial<DomainController.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainController.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainControllerPrivate | any;

    // Members

    get_index(): number;

    set_address(address?: DomainAddress | null): void;

    set_index(index: number): void;
}

export namespace DomainControllerUsb {
    export interface ConstructorProperties extends DomainController.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainControllerUsb extends DomainController {
    static $gtype: GObject.GType<DomainControllerUsb>;

    constructor(properties?: Partial<DomainControllerUsb.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainControllerUsb.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainControllerUsbPrivate | any;

    // Constructors

    static ['new'](): DomainControllerUsb;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainControllerUsb;
    static new_from_xml(...args: never[]): never;

    // Members

    set_master(master: DomainControllerUsb, startport: number): void;

    set_model(model: DomainControllerUsbModel): void;
}

export namespace DomainCpu {
    export interface ConstructorProperties extends CapabilitiesCpu.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainCpu extends CapabilitiesCpu {
    static $gtype: GObject.GType<DomainCpu>;

    constructor(properties?: Partial<DomainCpu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainCpu.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainCpuPrivate | any;

    // Constructors

    static ['new'](): DomainCpu;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainCpu;
    static new_from_xml(...args: never[]): never;

    // Members

    get_match_policy(): DomainCpuMatchPolicy;

    get_mode(): DomainCpuMode;

    set_match_policy(policy: DomainCpuMatchPolicy): void;

    set_mode(mode: DomainCpuMode): void;

    set_model(model: DomainCpuModel): void;
}

export namespace DomainCpuFeature {
    export interface ConstructorProperties extends CapabilitiesCpuFeature.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainCpuFeature extends CapabilitiesCpuFeature {
    static $gtype: GObject.GType<DomainCpuFeature>;

    constructor(properties?: Partial<DomainCpuFeature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainCpuFeature.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainCpuFeaturePrivate | any;

    // Constructors

    static ['new'](): DomainCpuFeature;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainCpuFeature;
    static new_from_xml(...args: never[]): never;

    // Members

    get_policy(): DomainCpuFeaturePolicy;

    set_policy(policy: DomainCpuFeaturePolicy): void;
}

export namespace DomainCpuModel {
    export interface ConstructorProperties extends CapabilitiesCpuModel.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainCpuModel extends CapabilitiesCpuModel {
    static $gtype: GObject.GType<DomainCpuModel>;

    constructor(properties?: Partial<DomainCpuModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainCpuModel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainCpuModelPrivate | any;

    // Constructors

    static ['new'](): DomainCpuModel;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainCpuModel;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainDevice {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainDevice extends Object {
    static $gtype: GObject.GType<DomainDevice>;

    constructor(properties?: Partial<DomainDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainDevice.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainDevicePrivate | any;

    // Members

    get_alias(): string;
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

    // Constructors

    static ['new'](): DomainDisk;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainDisk;
    static new_from_xml(...args: never[]): never;

    // Members

    get_disk_type(): DomainDiskType;

    get_driver(): DomainDiskDriver;

    get_driver_cache(): DomainDiskCacheType;

    get_driver_format(): DomainDiskFormat;

    get_driver_name(): string;

    get_driver_type(): string;

    get_guest_device_type(): DomainDiskGuestDeviceType;

    get_snapshot_type(): DomainDiskSnapshotType;

    get_source(): string;

    get_startup_policy(): DomainDiskStartupPolicy;

    get_target_bus(): DomainDiskBus;

    get_target_dev(): string;

    set_driver(driver?: DomainDiskDriver | null): void;

    set_driver_cache(cache_type: DomainDiskCacheType): void;

    set_driver_format(format: DomainDiskFormat): void;

    set_driver_name(driver_name: string): void;

    set_driver_type(driver_type: string): void;

    set_guest_device_type(type: DomainDiskGuestDeviceType): void;

    set_readonly(readonly: boolean): void;

    set_snapshot_type(type: DomainDiskSnapshotType): void;

    set_source(source: string): void;

    set_startup_policy(policy: DomainDiskStartupPolicy): void;

    set_target_bus(bus: DomainDiskBus): void;

    set_target_dev(dev: string): void;

    set_type(type: DomainDiskType): void;
}

export namespace DomainDiskDriver {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainDiskDriver extends Object {
    static $gtype: GObject.GType<DomainDiskDriver>;

    constructor(properties?: Partial<DomainDiskDriver.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainDiskDriver.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainDiskDriverPrivate | any;

    // Constructors

    static ['new'](): DomainDiskDriver;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainDiskDriver;
    static new_from_xml(...args: never[]): never;

    // Members

    get_cache(): DomainDiskCacheType;

    get_copy_on_read(): boolean;

    get_discard(): DomainDiskDriverDiscard;

    get_error_policy(): DomainDiskDriverErrorPolicy;

    get_format(): DomainDiskFormat;

    get_io_policy(): DomainDiskDriverIoPolicy;

    get_name(): string;

    set_cache(cache_type: DomainDiskCacheType): void;

    set_copy_on_read(copy_on_read: boolean): void;

    set_discard(discard: DomainDiskDriverDiscard): void;

    set_error_policy(policy: DomainDiskDriverErrorPolicy): void;

    set_format(format: DomainDiskFormat): void;

    set_io_policy(policy: DomainDiskDriverIoPolicy): void;

    set_name(name: string): void;
}

export namespace DomainFilesys {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainFilesys extends DomainDevice {
    static $gtype: GObject.GType<DomainFilesys>;

    constructor(properties?: Partial<DomainFilesys.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainFilesys.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainFilesysPrivate | any;

    // Constructors

    static ['new'](): DomainFilesys;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainFilesys;
    static new_from_xml(...args: never[]): never;

    // Members

    set_access_type(type: DomainFilesysAccessType): void;

    set_driver_format(format: DomainDiskFormat): void;

    set_driver_type(type: DomainFilesysDriverType): void;

    set_ram_usage(bytes: number): void;

    set_readonly(readonly: boolean): void;

    set_source(source: string): void;

    set_target(target: string): void;

    set_type(type: DomainFilesysType): void;
}

export namespace DomainGraphics {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainGraphics extends DomainDevice {
    static $gtype: GObject.GType<DomainGraphics>;

    constructor(properties?: Partial<DomainGraphics.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainGraphics.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainGraphicsPrivate | any;
}

export namespace DomainGraphicsDesktop {
    export interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainGraphicsDesktop extends DomainGraphics {
    static $gtype: GObject.GType<DomainGraphicsDesktop>;

    constructor(properties?: Partial<DomainGraphicsDesktop.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainGraphicsDesktop.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainGraphicsDesktopPrivate | any;

    // Constructors

    static ['new'](): DomainGraphicsDesktop;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainGraphicsDesktop;
    static new_from_xml(...args: never[]): never;

    // Members

    get_display(): string;

    get_fullscreen(): boolean;

    set_display(disp: string): void;

    set_fullscreen(fullscreen: boolean): void;
}

export namespace DomainGraphicsRdp {
    export interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainGraphicsRdp extends DomainGraphics {
    static $gtype: GObject.GType<DomainGraphicsRdp>;

    constructor(properties?: Partial<DomainGraphicsRdp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainGraphicsRdp.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainGraphicsRdpPrivate | any;

    // Constructors

    static ['new'](): DomainGraphicsRdp;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainGraphicsRdp;
    static new_from_xml(...args: never[]): never;

    // Members

    get_multi_user(): boolean;

    get_port(): number;

    get_replace_user(): boolean;

    set_autoport(autoport: boolean): void;

    set_multi_user(multi_user: boolean): void;

    set_port(port: number): void;

    set_replace_user(replace_user: boolean): void;
}

export namespace DomainGraphicsSdl {
    export interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainGraphicsSdl extends DomainGraphics {
    static $gtype: GObject.GType<DomainGraphicsSdl>;

    constructor(properties?: Partial<DomainGraphicsSdl.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainGraphicsSdl.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainGraphicsSdlPrivate | any;

    // Constructors

    static ['new'](): DomainGraphicsSdl;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainGraphicsSdl;
    static new_from_xml(...args: never[]): never;

    // Members

    set_display(disp: string): void;

    set_fullscreen(fullscreen: boolean): void;

    set_xauthority(path: string): void;
}

export namespace DomainGraphicsSpice {
    export interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainGraphicsSpice extends DomainGraphics {
    static $gtype: GObject.GType<DomainGraphicsSpice>;

    constructor(properties?: Partial<DomainGraphicsSpice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainGraphicsSpice.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainGraphicsSpicePrivate | any;

    // Constructors

    static ['new'](): DomainGraphicsSpice;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainGraphicsSpice;
    static new_from_xml(...args: never[]): never;

    // Members

    get_image_compression(): DomainGraphicsSpiceImageCompression;

    get_port(): number;

    set_autoport(autoport: boolean): void;

    set_gl(gl: boolean): void;

    set_image_compression(compression: DomainGraphicsSpiceImageCompression): void;

    set_password(password: string): void;

    set_port(port: number): void;

    set_tls_port(port: number): void;
}

export namespace DomainGraphicsVnc {
    export interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainGraphicsVnc extends DomainGraphics {
    static $gtype: GObject.GType<DomainGraphicsVnc>;

    constructor(properties?: Partial<DomainGraphicsVnc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainGraphicsVnc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainGraphicsVncPrivate | any;

    // Constructors

    static ['new'](): DomainGraphicsVnc;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainGraphicsVnc;
    static new_from_xml(...args: never[]): never;

    // Members

    get_port(): number;

    get_socket(): string;

    set_autoport(autoport: boolean): void;

    set_password(password: string): void;

    set_port(port: number): void;

    set_socket(socket: string): void;
}

export namespace DomainHostdev {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainHostdev extends DomainDevice {
    static $gtype: GObject.GType<DomainHostdev>;

    constructor(properties?: Partial<DomainHostdev.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainHostdev.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainHostdevPrivate | any;

    // Members

    get_boot_order(): number;

    get_readonly(): boolean;

    get_shareable(): boolean;

    set_boot_order(order: number): void;

    set_readonly(readonly: boolean): void;

    set_shareable(shareable: boolean): void;
}

export namespace DomainHostdevPci {
    export interface ConstructorProperties extends DomainHostdev.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainHostdevPci extends DomainHostdev {
    static $gtype: GObject.GType<DomainHostdevPci>;

    constructor(properties?: Partial<DomainHostdevPci.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainHostdevPci.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainHostdevPciPrivate | any;

    // Constructors

    static ['new'](): DomainHostdevPci;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainHostdevPci;
    static new_from_xml(...args: never[]): never;

    // Members

    get_address(): DomainAddressPci;

    get_managed(): boolean;

    get_rom_bar(): boolean;

    get_rom_file(): string;

    set_address(address: DomainAddressPci): void;

    set_managed(managed: boolean): void;

    set_rom_bar(bar: boolean): void;

    set_rom_file(file: string): void;
}

export namespace DomainInput {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInput extends DomainDevice {
    static $gtype: GObject.GType<DomainInput>;

    constructor(properties?: Partial<DomainInput.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInput.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInputPrivate | any;

    // Constructors

    static ['new'](): DomainInput;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainInput;
    static new_from_xml(...args: never[]): never;

    // Members

    get_bus(): DomainInputBus;

    get_device_type(): DomainInputDeviceType;

    set_bus(bus: DomainInputBus): void;

    set_device_type(type: DomainInputDeviceType): void;
}

export namespace DomainInterface {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainInterface extends DomainDevice {
    static $gtype: GObject.GType<DomainInterface>;

    constructor(properties?: Partial<DomainInterface.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterface.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfacePrivate | any;

    // Members

    get_filterref(): DomainInterfaceFilterref;

    get_ifname(): string;

    get_link_state(): DomainInterfaceLinkState;

    get_mac(): string;

    get_model(): string;

    set_filterref(filterref?: DomainInterfaceFilterref | null): void;

    set_ifname(ifname: string): void;

    set_link_state(state: DomainInterfaceLinkState): void;

    set_mac(mac_address: string): void;

    set_model(model: string): void;
}

export namespace DomainInterfaceBridge {
    export interface ConstructorProperties extends DomainInterface.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInterfaceBridge extends DomainInterface {
    static $gtype: GObject.GType<DomainInterfaceBridge>;

    constructor(properties?: Partial<DomainInterfaceBridge.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterfaceBridge.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfaceBridgePrivate | any;

    // Constructors

    static ['new'](): DomainInterfaceBridge;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainInterfaceBridge;
    static new_from_xml(...args: never[]): never;

    // Members

    set_source(brname: string): void;
}

export namespace DomainInterfaceFilterref {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInterfaceFilterref extends Object {
    static $gtype: GObject.GType<DomainInterfaceFilterref>;

    constructor(properties?: Partial<DomainInterfaceFilterref.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterfaceFilterref.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfaceFilterrefPrivate | any;

    // Constructors

    static ['new'](): DomainInterfaceFilterref;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainInterfaceFilterref;
    static new_from_xml(...args: never[]): never;

    // Members

    add_parameter(parameter: DomainInterfaceFilterrefParameter): void;

    get_name(): string;

    get_parameters(): DomainInterfaceFilterrefParameter[];

    set_name(filter: string): void;
}

export namespace DomainInterfaceFilterrefParameter {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInterfaceFilterrefParameter extends Object {
    static $gtype: GObject.GType<DomainInterfaceFilterrefParameter>;

    constructor(properties?: Partial<DomainInterfaceFilterrefParameter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterfaceFilterrefParameter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfaceFilterrefParameterPrivate | any;

    // Constructors

    static ['new'](): DomainInterfaceFilterrefParameter;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;
    static new_from_xml(...args: never[]): never;

    // Members

    get_name(): string;

    get_value(): string;

    set_name(name: string): void;

    set_value(value: string): void;
}

export namespace DomainInterfaceNetwork {
    export interface ConstructorProperties extends DomainInterface.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInterfaceNetwork extends DomainInterface {
    static $gtype: GObject.GType<DomainInterfaceNetwork>;

    constructor(properties?: Partial<DomainInterfaceNetwork.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterfaceNetwork.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfaceNetworkPrivate | any;

    // Constructors

    static ['new'](): DomainInterfaceNetwork;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainInterfaceNetwork;
    static new_from_xml(...args: never[]): never;

    // Members

    set_source(source: string): void;
}

export namespace DomainInterfaceUser {
    export interface ConstructorProperties extends DomainInterface.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainInterfaceUser extends DomainInterface {
    static $gtype: GObject.GType<DomainInterfaceUser>;

    constructor(properties?: Partial<DomainInterfaceUser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainInterfaceUser.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainInterfaceUserPrivate | any;

    // Constructors

    static ['new'](): DomainInterfaceUser;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainInterfaceUser;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainMemballoon {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainMemballoon extends DomainDevice {
    static $gtype: GObject.GType<DomainMemballoon>;

    constructor(properties?: Partial<DomainMemballoon.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainMemballoon.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainMemballoonPrivate | any;

    // Constructors

    static ['new'](): DomainMemballoon;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainMemballoon;
    static new_from_xml(...args: never[]): never;

    // Members

    set_model(model: DomainMemballoonModel): void;
}

export namespace DomainOs {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainOs extends Object {
    static $gtype: GObject.GType<DomainOs>;

    constructor(properties?: Partial<DomainOs.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainOs.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainOsPrivate | any;

    // Constructors

    static ['new'](): DomainOs;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainOs;
    static new_from_xml(...args: never[]): never;

    // Members

    bios_enable_serial(enable: boolean): void;

    enable_boot_menu(enable: boolean): void;

    get_arch(): string;

    get_boot_devices(): DomainOsBootDevice[];

    get_firmware(): DomainOsFirmware;

    get_machine(): string;

    get_os_type(): DomainOsType;

    set_arch(arch: string): void;

    set_boot_devices(boot_devices: DomainOsBootDevice[]): void;

    set_cmdline(cmdline?: string | null): void;

    set_firmware(firmware: DomainOsFirmware): void;

    set_init(init?: string | null): void;

    set_kernel(kernel?: string | null): void;

    set_loader(loader?: string | null): void;

    set_machine(machine: string): void;

    set_os_type(type: DomainOsType): void;

    set_ramdisk(ramdisk?: string | null): void;

    set_smbios_mode(mode: DomainOsSmBiosMode): void;
}

export namespace DomainParallel {
    export interface ConstructorProperties extends DomainChardev.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainParallel extends DomainChardev {
    static $gtype: GObject.GType<DomainParallel>;

    constructor(properties?: Partial<DomainParallel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainParallel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainParallelPrivate | any;

    // Constructors

    static ['new'](): DomainParallel;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainParallel;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainPowerManagement {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainPowerManagement extends Object {
    static $gtype: GObject.GType<DomainPowerManagement>;

    constructor(properties?: Partial<DomainPowerManagement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainPowerManagement.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainPowerManagementPrivate | any;

    // Constructors

    static ['new'](): DomainPowerManagement;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainPowerManagement;
    static new_from_xml(...args: never[]): never;

    // Members

    set_disk_suspend_enabled(enabled: boolean): void;

    set_mem_suspend_enabled(enabled: boolean): void;
}

export namespace DomainRedirdev {
    export interface ConstructorProperties extends DomainChardev.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainRedirdev extends DomainChardev {
    static $gtype: GObject.GType<DomainRedirdev>;

    constructor(properties?: Partial<DomainRedirdev.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainRedirdev.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainRedirdevPrivate | any;

    // Constructors

    static ['new'](): DomainRedirdev;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainRedirdev;
    static new_from_xml(...args: never[]): never;

    // Members

    set_address(address?: DomainAddress | null): void;

    set_bus(bus: DomainRedirdevBus): void;
}

export namespace DomainSeclabel {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSeclabel extends Object {
    static $gtype: GObject.GType<DomainSeclabel>;

    constructor(properties?: Partial<DomainSeclabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSeclabel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSeclabelPrivate | any;

    // Constructors

    static ['new'](): DomainSeclabel;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSeclabel;
    static new_from_xml(...args: never[]): never;

    // Members

    set_baselabel(label?: string | null): void;

    set_label(label?: string | null): void;

    set_model(model: string): void;

    set_type(type: DomainSeclabelType): void;
}

export namespace DomainSerial {
    export interface ConstructorProperties extends DomainChardev.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSerial extends DomainChardev {
    static $gtype: GObject.GType<DomainSerial>;

    constructor(properties?: Partial<DomainSerial.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSerial.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSerialPrivate | any;

    // Constructors

    static ['new'](): DomainSerial;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSerial;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainSmartcard {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainSmartcard extends DomainDevice {
    static $gtype: GObject.GType<DomainSmartcard>;

    constructor(properties?: Partial<DomainSmartcard.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSmartcard.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSmartcardPrivate | any;

    // Members

    static set_address(redirdev: DomainRedirdev, address?: DomainAddress | null): void;
}

export namespace DomainSmartcardHost {
    export interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSmartcardHost extends DomainSmartcard {
    static $gtype: GObject.GType<DomainSmartcardHost>;

    constructor(properties?: Partial<DomainSmartcardHost.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSmartcardHost.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSmartcardHostPrivate | any;

    // Constructors

    static ['new'](): DomainSmartcardHost;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSmartcardHost;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainSmartcardHostCertificates {
    export interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSmartcardHostCertificates extends DomainSmartcard {
    static $gtype: GObject.GType<DomainSmartcardHostCertificates>;

    constructor(properties?: Partial<DomainSmartcardHostCertificates.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSmartcardHostCertificates.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSmartcardHostCertificatesPrivate | any;

    // Constructors

    static ['new'](): DomainSmartcardHostCertificates;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSmartcardHostCertificates;
    static new_from_xml(...args: never[]): never;

    // Members

    set_certificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void;

    set_database(path?: string | null): void;
}

export namespace DomainSmartcardPassthrough {
    export interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSmartcardPassthrough extends DomainSmartcard {
    static $gtype: GObject.GType<DomainSmartcardPassthrough>;

    constructor(properties?: Partial<DomainSmartcardPassthrough.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSmartcardPassthrough.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSmartcardPassthroughPrivate | any;

    // Constructors

    static ['new'](): DomainSmartcardPassthrough;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSmartcardPassthrough;
    static new_from_xml(...args: never[]): never;

    // Members

    set_source(source: DomainChardevSource): void;
}

export namespace DomainSnapshot {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSnapshot extends Object {
    static $gtype: GObject.GType<DomainSnapshot>;

    constructor(properties?: Partial<DomainSnapshot.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSnapshot.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSnapshotPrivate | any;

    // Constructors

    static ['new'](): DomainSnapshot;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSnapshot;
    static new_from_xml(...args: never[]): never;

    // Members

    add_disk(disk: DomainSnapshotDisk): void;

    get_creation_time(): number;

    get_description(): string;

    get_disks(): DomainSnapshotDisk[];

    get_domain(): Domain;

    get_memory_file(): string;

    get_memory_state(): DomainSnapshotMemoryState;

    get_name(): string;

    get_parent(): string;

    get_state(): DomainSnapshotDomainState;

    set_description(description: string): void;

    set_disks(disks: DomainSnapshotDisk[]): void;

    set_memory_file(filename: string): void;

    set_memory_state(state: DomainSnapshotMemoryState): void;

    set_name(name: string): void;
}

export namespace DomainSnapshotDisk {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSnapshotDisk extends Object {
    static $gtype: GObject.GType<DomainSnapshotDisk>;

    constructor(properties?: Partial<DomainSnapshotDisk.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSnapshotDisk.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSnapshotDiskPrivate | any;

    // Constructors

    static ['new'](): DomainSnapshotDisk;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSnapshotDisk;
    static new_from_xml(...args: never[]): never;

    // Members

    get_driver_format(): DomainDiskFormat;

    get_name(): string;

    get_snapshot_type(): DomainDiskSnapshotType;

    get_source_file(): string;

    set_driver_format(format: DomainDiskFormat): void;

    set_name(name: string): void;

    set_snapshot_type(type: DomainDiskSnapshotType): void;

    set_source_file(filename: string): void;
}

export namespace DomainSound {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainSound extends DomainDevice {
    static $gtype: GObject.GType<DomainSound>;

    constructor(properties?: Partial<DomainSound.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainSound.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainSoundPrivate | any;

    // Constructors

    static ['new'](): DomainSound;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainSound;
    static new_from_xml(...args: never[]): never;

    // Members

    set_model(model: DomainSoundModel): void;
}

export namespace DomainTimer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class DomainTimer extends Object {
    static $gtype: GObject.GType<DomainTimer>;

    constructor(properties?: Partial<DomainTimer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainTimer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainTimerPrivate | any;

    // Members

    get_present(): boolean;

    get_tick_policy(): DomainTimerTickPolicy;

    set_present(present: boolean): void;

    set_tick_policy(policy: DomainTimerTickPolicy): void;
}

export namespace DomainTimerHpet {
    export interface ConstructorProperties extends DomainTimer.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainTimerHpet extends DomainTimer {
    static $gtype: GObject.GType<DomainTimerHpet>;

    constructor(properties?: Partial<DomainTimerHpet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainTimerHpet.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainTimerHpetPrivate | any;

    // Constructors

    static ['new'](): DomainTimerHpet;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainTimerHpet;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainTimerPit {
    export interface ConstructorProperties extends DomainTimer.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainTimerPit extends DomainTimer {
    static $gtype: GObject.GType<DomainTimerPit>;

    constructor(properties?: Partial<DomainTimerPit.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainTimerPit.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainTimerPitPrivate | any;

    // Constructors

    static ['new'](): DomainTimerPit;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainTimerPit;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainTimerRtc {
    export interface ConstructorProperties extends DomainTimer.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainTimerRtc extends DomainTimer {
    static $gtype: GObject.GType<DomainTimerRtc>;

    constructor(properties?: Partial<DomainTimerRtc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainTimerRtc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainTimerRtcPrivate | any;

    // Constructors

    static ['new'](): DomainTimerRtc;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainTimerRtc;
    static new_from_xml(...args: never[]): never;
}

export namespace DomainVideo {
    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
        [key: string]: any;
    }
}

export class DomainVideo extends DomainDevice {
    static $gtype: GObject.GType<DomainVideo>;

    constructor(properties?: Partial<DomainVideo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DomainVideo.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DomainVideoPrivate | any;

    // Constructors

    static ['new'](): DomainVideo;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): DomainVideo;
    static new_from_xml(...args: never[]): never;

    // Members

    get_model(): DomainVideoModel;

    set_accel3d(accel3d: boolean): void;

    set_heads(head_count: number): void;

    set_model(model: DomainVideoModel): void;

    set_ram(kbytes: number): void;

    set_vgamem(kbytes: number): void;

    set_vram(kbytes: number): void;
}

export namespace Interface {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Interface extends Object {
    static $gtype: GObject.GType<Interface>;

    constructor(properties?: Partial<Interface.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Interface.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: InterfacePrivate | any;

    // Constructors

    static ['new'](): Interface;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): Interface;
    static new_from_xml(...args: never[]): never;
}

export namespace Network {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Network extends Object {
    static $gtype: GObject.GType<Network>;

    constructor(properties?: Partial<Network.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Network.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NetworkPrivate | any;

    // Constructors

    static ['new'](): Network;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): Network;
    static new_from_xml(...args: never[]): never;
}

export namespace NetworkFilter {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class NetworkFilter extends Object {
    static $gtype: GObject.GType<NetworkFilter>;

    constructor(properties?: Partial<NetworkFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NetworkFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NetworkFilterPrivate | any;

    // Constructors

    static ['new'](): NetworkFilter;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): NetworkFilter;
    static new_from_xml(...args: never[]): never;
}

export namespace NodeDevice {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class NodeDevice extends Object {
    static $gtype: GObject.GType<NodeDevice>;

    constructor(properties?: Partial<NodeDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NodeDevice.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NodeDevicePrivate | any;

    // Constructors

    static ['new'](): NodeDevice;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): NodeDevice;
    static new_from_xml(...args: never[]): never;
}

export namespace Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        node: any;
        schema: string;
    }
}

export class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    node: any;
    schema: string;

    // Fields
    priv: ObjectPrivate;

    // Constructors

    static ['new'](type: GObject.GType, root_name: string, schema: string): Object;

    static new_from_xml(type: GObject.GType, root_name: string, schema: string, xml: string): Object;

    // Members

    get_schema(): string;

    to_xml(): string;

    validate(): void;

    static error_quark(): GLib.Quark;
}

export namespace Secret {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Secret extends Object {
    static $gtype: GObject.GType<Secret>;

    constructor(properties?: Partial<Secret.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Secret.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SecretPrivate | any;

    // Constructors

    static ['new'](): Secret;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): Secret;
    static new_from_xml(...args: never[]): never;
}

export namespace StoragePermissions {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StoragePermissions extends Object {
    static $gtype: GObject.GType<StoragePermissions>;

    constructor(properties?: Partial<StoragePermissions.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoragePermissions.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StoragePermissionsPrivate | any;

    // Constructors

    static ['new'](): StoragePermissions;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StoragePermissions;
    static new_from_xml(...args: never[]): never;

    // Members

    get_group(): number;

    get_label(): string;

    get_mode(): number;

    get_owner(): number;

    set_group(group: number): void;

    set_label(label?: string | null): void;

    set_mode(mode: number): void;

    set_owner(owner: number): void;
}

export namespace StoragePool {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StoragePool extends Object {
    static $gtype: GObject.GType<StoragePool>;

    constructor(properties?: Partial<StoragePool.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoragePool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StoragePoolPrivate | any;

    // Constructors

    static ['new'](): StoragePool;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StoragePool;
    static new_from_xml(...args: never[]): never;

    // Members

    get_allocation(): number;

    get_available(): number;

    get_capacity(): number;

    get_name(): string;

    get_pool_type(): StoragePoolType;

    get_source(): StoragePoolSource;

    get_target(): StoragePoolTarget;

    get_uuid(): string;

    set_allocation(allocation: number): void;

    set_available(available: number): void;

    set_capacity(capacity: number): void;

    set_name(name?: string | null): void;

    set_pool_type(type: StoragePoolType): void;

    set_source(source?: StoragePoolSource | null): void;

    set_target(target?: StoragePoolTarget | null): void;

    set_uuid(uuid?: string | null): void;
}

export namespace StoragePoolSource {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StoragePoolSource extends Object {
    static $gtype: GObject.GType<StoragePoolSource>;

    constructor(properties?: Partial<StoragePoolSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoragePoolSource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StoragePoolSourcePrivate | any;

    // Constructors

    static ['new'](): StoragePoolSource;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StoragePoolSource;
    static new_from_xml(...args: never[]): never;

    // Members

    get_adapter(): string;

    get_device_path(): string;

    get_directory(): string;

    get_format(): string;

    get_host(): string;

    get_name(): string;

    get_product(): string;

    get_vendor(): string;

    set_adapter(adapter: string): void;

    set_device_path(device_path: string): void;

    set_directory(directory: string): void;

    set_format(format: string): void;

    set_host(host: string): void;

    set_name(name?: string | null): void;

    set_product(product: string): void;

    set_vendor(vendor: string): void;
}

export namespace StoragePoolTarget {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StoragePoolTarget extends Object {
    static $gtype: GObject.GType<StoragePoolTarget>;

    constructor(properties?: Partial<StoragePoolTarget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoragePoolTarget.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StoragePoolTargetPrivate | any;

    // Constructors

    static ['new'](): StoragePoolTarget;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StoragePoolTarget;
    static new_from_xml(...args: never[]): never;

    // Members

    get_path(): string;

    get_permissions(): StoragePermissions;

    set_path(path?: string | null): void;

    set_permissions(perms: StoragePermissions): void;
}

export namespace StorageVol {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StorageVol extends Object {
    static $gtype: GObject.GType<StorageVol>;

    constructor(properties?: Partial<StorageVol.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StorageVol.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StorageVolPrivate | any;

    // Constructors

    static ['new'](): StorageVol;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StorageVol;
    static new_from_xml(...args: never[]): never;

    // Members

    set_allocation(allocation: number): void;

    set_backing_store(backing_store?: StorageVolBackingStore | null): void;

    set_capacity(capacity: number): void;

    set_name(name?: string | null): void;

    set_target(target?: StorageVolTarget | null): void;
}

export namespace StorageVolBackingStore {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StorageVolBackingStore extends Object {
    static $gtype: GObject.GType<StorageVolBackingStore>;

    constructor(properties?: Partial<StorageVolBackingStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StorageVolBackingStore.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StorageVolBackingStorePrivate | any;

    // Constructors

    static ['new'](): StorageVolBackingStore;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StorageVolBackingStore;
    static new_from_xml(...args: never[]): never;

    // Members

    set_format(format: string): void;

    set_path(path?: string | null): void;
}

export namespace StorageVolTarget {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StorageVolTarget extends Object {
    static $gtype: GObject.GType<StorageVolTarget>;

    constructor(properties?: Partial<StorageVolTarget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StorageVolTarget.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StorageVolTargetPrivate | any;

    // Constructors

    static ['new'](): StorageVolTarget;
    static ['new'](...args: never[]): never;

    static new_from_xml(xml: string): StorageVolTarget;
    static new_from_xml(...args: never[]): never;

    // Members

    set_compat(compat?: string | null): void;

    set_features(features: number): void;

    set_format(format: string): void;

    set_permissions(perms?: StoragePermissions | null): void;
}

export class CapabilitiesCpuFeaturePrivate {
    static $gtype: GObject.GType<CapabilitiesCpuFeaturePrivate>;

    constructor(copy: CapabilitiesCpuFeaturePrivate);
}

export class CapabilitiesCpuModelPrivate {
    static $gtype: GObject.GType<CapabilitiesCpuModelPrivate>;

    constructor(copy: CapabilitiesCpuModelPrivate);
}

export class CapabilitiesCpuPrivate {
    static $gtype: GObject.GType<CapabilitiesCpuPrivate>;

    constructor(copy: CapabilitiesCpuPrivate);
}

export class CapabilitiesCpuTopologyPrivate {
    static $gtype: GObject.GType<CapabilitiesCpuTopologyPrivate>;

    constructor(copy: CapabilitiesCpuTopologyPrivate);
}

export class CapabilitiesGuestArchPrivate {
    static $gtype: GObject.GType<CapabilitiesGuestArchPrivate>;

    constructor(copy: CapabilitiesGuestArchPrivate);
}

export class CapabilitiesGuestDomainPrivate {
    static $gtype: GObject.GType<CapabilitiesGuestDomainPrivate>;

    constructor(copy: CapabilitiesGuestDomainPrivate);
}

export class CapabilitiesGuestFeaturePrivate {
    static $gtype: GObject.GType<CapabilitiesGuestFeaturePrivate>;

    constructor(copy: CapabilitiesGuestFeaturePrivate);
}

export class CapabilitiesGuestPrivate {
    static $gtype: GObject.GType<CapabilitiesGuestPrivate>;

    constructor(copy: CapabilitiesGuestPrivate);
}

export class CapabilitiesHostPrivate {
    static $gtype: GObject.GType<CapabilitiesHostPrivate>;

    constructor(copy: CapabilitiesHostPrivate);
}

export class CapabilitiesHostSecModelPrivate {
    static $gtype: GObject.GType<CapabilitiesHostSecModelPrivate>;

    constructor(copy: CapabilitiesHostSecModelPrivate);
}

export class CapabilitiesPrivate {
    static $gtype: GObject.GType<CapabilitiesPrivate>;

    constructor(copy: CapabilitiesPrivate);
}

export class DomainAddressPciPrivate {
    static $gtype: GObject.GType<DomainAddressPciPrivate>;

    constructor(copy: DomainAddressPciPrivate);
}

export class DomainAddressPrivate {
    static $gtype: GObject.GType<DomainAddressPrivate>;

    constructor(copy: DomainAddressPrivate);
}

export class DomainAddressUsbPrivate {
    static $gtype: GObject.GType<DomainAddressUsbPrivate>;

    constructor(copy: DomainAddressUsbPrivate);
}

export class DomainCapabilitiesOsPrivate {
    static $gtype: GObject.GType<DomainCapabilitiesOsPrivate>;

    constructor(copy: DomainCapabilitiesOsPrivate);
}

export class DomainCapabilitiesPrivate {
    static $gtype: GObject.GType<DomainCapabilitiesPrivate>;

    constructor(copy: DomainCapabilitiesPrivate);
}

export class DomainChannelPrivate {
    static $gtype: GObject.GType<DomainChannelPrivate>;

    constructor(copy: DomainChannelPrivate);
}

export class DomainChardevPrivate {
    static $gtype: GObject.GType<DomainChardevPrivate>;

    constructor(copy: DomainChardevPrivate);
}

export class DomainChardevSourcePrivate {
    static $gtype: GObject.GType<DomainChardevSourcePrivate>;

    constructor(copy: DomainChardevSourcePrivate);
}

export class DomainChardevSourcePtyPrivate {
    static $gtype: GObject.GType<DomainChardevSourcePtyPrivate>;

    constructor(copy: DomainChardevSourcePtyPrivate);
}

export class DomainChardevSourceSpicePortPrivate {
    static $gtype: GObject.GType<DomainChardevSourceSpicePortPrivate>;

    constructor(copy: DomainChardevSourceSpicePortPrivate);
}

export class DomainChardevSourceSpiceVmcPrivate {
    static $gtype: GObject.GType<DomainChardevSourceSpiceVmcPrivate>;

    constructor(copy: DomainChardevSourceSpiceVmcPrivate);
}

export class DomainChardevSourceUnixPrivate {
    static $gtype: GObject.GType<DomainChardevSourceUnixPrivate>;

    constructor(copy: DomainChardevSourceUnixPrivate);
}

export class DomainClockPrivate {
    static $gtype: GObject.GType<DomainClockPrivate>;

    constructor(copy: DomainClockPrivate);
}

export class DomainConsolePrivate {
    static $gtype: GObject.GType<DomainConsolePrivate>;

    constructor(copy: DomainConsolePrivate);
}

export class DomainControllerPrivate {
    static $gtype: GObject.GType<DomainControllerPrivate>;

    constructor(copy: DomainControllerPrivate);
}

export class DomainControllerUsbPrivate {
    static $gtype: GObject.GType<DomainControllerUsbPrivate>;

    constructor(copy: DomainControllerUsbPrivate);
}

export class DomainCpuFeaturePrivate {
    static $gtype: GObject.GType<DomainCpuFeaturePrivate>;

    constructor(copy: DomainCpuFeaturePrivate);
}

export class DomainCpuModelPrivate {
    static $gtype: GObject.GType<DomainCpuModelPrivate>;

    constructor(copy: DomainCpuModelPrivate);
}

export class DomainCpuPrivate {
    static $gtype: GObject.GType<DomainCpuPrivate>;

    constructor(copy: DomainCpuPrivate);
}

export class DomainDevicePrivate {
    static $gtype: GObject.GType<DomainDevicePrivate>;

    constructor(copy: DomainDevicePrivate);
}

export class DomainDiskDriverPrivate {
    static $gtype: GObject.GType<DomainDiskDriverPrivate>;

    constructor(copy: DomainDiskDriverPrivate);
}

export class DomainDiskPrivate {
    static $gtype: GObject.GType<DomainDiskPrivate>;

    constructor(copy: DomainDiskPrivate);
}

export class DomainFilesysPrivate {
    static $gtype: GObject.GType<DomainFilesysPrivate>;

    constructor(copy: DomainFilesysPrivate);
}

export class DomainGraphicsDesktopPrivate {
    static $gtype: GObject.GType<DomainGraphicsDesktopPrivate>;

    constructor(copy: DomainGraphicsDesktopPrivate);
}

export class DomainGraphicsPrivate {
    static $gtype: GObject.GType<DomainGraphicsPrivate>;

    constructor(copy: DomainGraphicsPrivate);
}

export class DomainGraphicsRdpPrivate {
    static $gtype: GObject.GType<DomainGraphicsRdpPrivate>;

    constructor(copy: DomainGraphicsRdpPrivate);
}

export class DomainGraphicsSdlPrivate {
    static $gtype: GObject.GType<DomainGraphicsSdlPrivate>;

    constructor(copy: DomainGraphicsSdlPrivate);
}

export class DomainGraphicsSpicePrivate {
    static $gtype: GObject.GType<DomainGraphicsSpicePrivate>;

    constructor(copy: DomainGraphicsSpicePrivate);
}

export class DomainGraphicsVncPrivate {
    static $gtype: GObject.GType<DomainGraphicsVncPrivate>;

    constructor(copy: DomainGraphicsVncPrivate);
}

export class DomainHostdevPciPrivate {
    static $gtype: GObject.GType<DomainHostdevPciPrivate>;

    constructor(copy: DomainHostdevPciPrivate);
}

export class DomainHostdevPrivate {
    static $gtype: GObject.GType<DomainHostdevPrivate>;

    constructor(copy: DomainHostdevPrivate);
}

export class DomainInputPrivate {
    static $gtype: GObject.GType<DomainInputPrivate>;

    constructor(copy: DomainInputPrivate);
}

export class DomainInterfaceBridgePrivate {
    static $gtype: GObject.GType<DomainInterfaceBridgePrivate>;

    constructor(copy: DomainInterfaceBridgePrivate);
}

export class DomainInterfaceFilterrefParameterPrivate {
    static $gtype: GObject.GType<DomainInterfaceFilterrefParameterPrivate>;

    constructor(copy: DomainInterfaceFilterrefParameterPrivate);
}

export class DomainInterfaceFilterrefPrivate {
    static $gtype: GObject.GType<DomainInterfaceFilterrefPrivate>;

    constructor(copy: DomainInterfaceFilterrefPrivate);
}

export class DomainInterfaceNetworkPrivate {
    static $gtype: GObject.GType<DomainInterfaceNetworkPrivate>;

    constructor(copy: DomainInterfaceNetworkPrivate);
}

export class DomainInterfacePrivate {
    static $gtype: GObject.GType<DomainInterfacePrivate>;

    constructor(copy: DomainInterfacePrivate);
}

export class DomainInterfaceUserPrivate {
    static $gtype: GObject.GType<DomainInterfaceUserPrivate>;

    constructor(copy: DomainInterfaceUserPrivate);
}

export class DomainMemballoonPrivate {
    static $gtype: GObject.GType<DomainMemballoonPrivate>;

    constructor(copy: DomainMemballoonPrivate);
}

export class DomainOsPrivate {
    static $gtype: GObject.GType<DomainOsPrivate>;

    constructor(copy: DomainOsPrivate);
}

export class DomainParallelPrivate {
    static $gtype: GObject.GType<DomainParallelPrivate>;

    constructor(copy: DomainParallelPrivate);
}

export class DomainPowerManagementPrivate {
    static $gtype: GObject.GType<DomainPowerManagementPrivate>;

    constructor(copy: DomainPowerManagementPrivate);
}

export class DomainPrivate {
    static $gtype: GObject.GType<DomainPrivate>;

    constructor(copy: DomainPrivate);
}

export class DomainRedirdevPrivate {
    static $gtype: GObject.GType<DomainRedirdevPrivate>;

    constructor(copy: DomainRedirdevPrivate);
}

export class DomainSeclabelPrivate {
    static $gtype: GObject.GType<DomainSeclabelPrivate>;

    constructor(copy: DomainSeclabelPrivate);
}

export class DomainSerialPrivate {
    static $gtype: GObject.GType<DomainSerialPrivate>;

    constructor(copy: DomainSerialPrivate);
}

export class DomainSmartcardHostCertificatesPrivate {
    static $gtype: GObject.GType<DomainSmartcardHostCertificatesPrivate>;

    constructor(copy: DomainSmartcardHostCertificatesPrivate);
}

export class DomainSmartcardHostPrivate {
    static $gtype: GObject.GType<DomainSmartcardHostPrivate>;

    constructor(copy: DomainSmartcardHostPrivate);
}

export class DomainSmartcardPassthroughPrivate {
    static $gtype: GObject.GType<DomainSmartcardPassthroughPrivate>;

    constructor(copy: DomainSmartcardPassthroughPrivate);
}

export class DomainSmartcardPrivate {
    static $gtype: GObject.GType<DomainSmartcardPrivate>;

    constructor(copy: DomainSmartcardPrivate);
}

export class DomainSnapshotDiskPrivate {
    static $gtype: GObject.GType<DomainSnapshotDiskPrivate>;

    constructor(copy: DomainSnapshotDiskPrivate);
}

export class DomainSnapshotPrivate {
    static $gtype: GObject.GType<DomainSnapshotPrivate>;

    constructor(copy: DomainSnapshotPrivate);
}

export class DomainSoundPrivate {
    static $gtype: GObject.GType<DomainSoundPrivate>;

    constructor(copy: DomainSoundPrivate);
}

export class DomainTimerHpetPrivate {
    static $gtype: GObject.GType<DomainTimerHpetPrivate>;

    constructor(copy: DomainTimerHpetPrivate);
}

export class DomainTimerPitPrivate {
    static $gtype: GObject.GType<DomainTimerPitPrivate>;

    constructor(copy: DomainTimerPitPrivate);
}

export class DomainTimerPrivate {
    static $gtype: GObject.GType<DomainTimerPrivate>;

    constructor(copy: DomainTimerPrivate);
}

export class DomainTimerRtcPrivate {
    static $gtype: GObject.GType<DomainTimerRtcPrivate>;

    constructor(copy: DomainTimerRtcPrivate);
}

export class DomainVideoPrivate {
    static $gtype: GObject.GType<DomainVideoPrivate>;

    constructor(copy: DomainVideoPrivate);
}

export class InterfacePrivate {
    static $gtype: GObject.GType<InterfacePrivate>;

    constructor(copy: InterfacePrivate);
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

export class ObjectPrivate {
    static $gtype: GObject.GType<ObjectPrivate>;

    constructor(copy: ObjectPrivate);
}

export class SecretPrivate {
    static $gtype: GObject.GType<SecretPrivate>;

    constructor(copy: SecretPrivate);
}

export class StoragePermissionsPrivate {
    static $gtype: GObject.GType<StoragePermissionsPrivate>;

    constructor(copy: StoragePermissionsPrivate);
}

export class StoragePoolPrivate {
    static $gtype: GObject.GType<StoragePoolPrivate>;

    constructor(copy: StoragePoolPrivate);
}

export class StoragePoolSourcePrivate {
    static $gtype: GObject.GType<StoragePoolSourcePrivate>;

    constructor(copy: StoragePoolSourcePrivate);
}

export class StoragePoolTargetPrivate {
    static $gtype: GObject.GType<StoragePoolTargetPrivate>;

    constructor(copy: StoragePoolTargetPrivate);
}

export class StorageVolBackingStorePrivate {
    static $gtype: GObject.GType<StorageVolBackingStorePrivate>;

    constructor(copy: StorageVolBackingStorePrivate);
}

export class StorageVolPrivate {
    static $gtype: GObject.GType<StorageVolPrivate>;

    constructor(copy: StorageVolPrivate);
}

export class StorageVolTargetPrivate {
    static $gtype: GObject.GType<StorageVolTargetPrivate>;

    constructor(copy: StorageVolTargetPrivate);
}
