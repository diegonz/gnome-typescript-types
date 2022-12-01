/**
 * Libosinfo 1.0
 *
 * Generated from 1.8.0
 */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export const ARCHITECTURE_ALL: string;
export const AVATAR_FORMAT_PROP_ALPHA: string;
export const AVATAR_FORMAT_PROP_HEIGHT: string;
export const AVATAR_FORMAT_PROP_MIME_TYPE: string;
export const AVATAR_FORMAT_PROP_WIDTH: string;
export const DEVICELINK_PROP_DRIVER: string;
export const DEVICELINK_PROP_SUPPORTED: string;
export const DEVICE_DRIVER_DEFAULT_PRIORITY: number;
export const DEVICE_DRIVER_PROP_ARCHITECTURE: string;
export const DEVICE_DRIVER_PROP_DEVICE: string;
export const DEVICE_DRIVER_PROP_FILE: string;
export const DEVICE_DRIVER_PROP_LOCATION: string;
export const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string;
export const DEVICE_DRIVER_PROP_PRIORITY: string;
export const DEVICE_DRIVER_PROP_SIGNED: string;
export const DEVICE_PROP_BUS_TYPE: string;
export const DEVICE_PROP_CLASS: string;
export const DEVICE_PROP_NAME: string;
export const DEVICE_PROP_PRODUCT: string;
export const DEVICE_PROP_PRODUCT_ID: string;
export const DEVICE_PROP_SUBSYSTEM: string;
export const DEVICE_PROP_VENDOR: string;
export const DEVICE_PROP_VENDOR_ID: string;
export const ENTITY_PROP_ID: string;
export const FIRMWARE_PROP_ARCHITECTURE: string;
export const FIRMWARE_PROP_SUPPORTED: string;
export const FIRMWARE_PROP_TYPE: string;
export const GIBIBYTES: number;
export const IMAGE_PROP_ARCHITECTURE: string;
export const IMAGE_PROP_CLOUD_INIT: string;
export const IMAGE_PROP_FORMAT: string;
export const IMAGE_PROP_URL: string;
export const IMAGE_PROP_VARIANT: string;
export const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string;
export const INSTALL_CONFIG_PARAM_PROP_NAME: string;
export const INSTALL_CONFIG_PARAM_PROP_POLICY: string;
export const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string;
export const INSTALL_CONFIG_PROP_AVATAR_DISK: string;
export const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string;
export const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string;
export const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string;
export const INSTALL_CONFIG_PROP_HOSTNAME: string;
export const INSTALL_CONFIG_PROP_INSTALLATION_URL: string;
export const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string;
export const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string;
export const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string;
export const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string;
export const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string;
export const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string;
export const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string;
export const INSTALL_CONFIG_PROP_REG_LOGIN: string;
export const INSTALL_CONFIG_PROP_REG_PASSWORD: string;
export const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string;
export const INSTALL_CONFIG_PROP_SCRIPT_DISK: string;
export const INSTALL_CONFIG_PROP_TARGET_DISK: string;
export const INSTALL_CONFIG_PROP_USER_ADMIN: string;
export const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string;
export const INSTALL_CONFIG_PROP_USER_LOGIN: string;
export const INSTALL_CONFIG_PROP_USER_PASSWORD: string;
export const INSTALL_CONFIG_PROP_USER_REALNAME: string;
export const INSTALL_SCRIPT_PROFILE_DESKTOP: string;
export const INSTALL_SCRIPT_PROFILE_JEOS: string;
export const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string;
export const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string;
export const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string;
export const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string;
export const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string;
export const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string;
export const INSTALL_SCRIPT_PROP_PATH_FORMAT: string;
export const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string;
export const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string;
export const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string;
export const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string;
export const INSTALL_SCRIPT_PROP_PROFILE: string;
export const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string;
export const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string;
export const KIBIBYTES: number;
export const MAJOR_VERSION: number;
export const MEBIBYTES: number;
export const MEDIA_PROP_APPLICATION_ID: string;
export const MEDIA_PROP_ARCHITECTURE: string;
export const MEDIA_PROP_BOOTABLE: string;
export const MEDIA_PROP_EJECT_AFTER_INSTALL: string;
export const MEDIA_PROP_INITRD: string;
export const MEDIA_PROP_INSTALLER: string;
export const MEDIA_PROP_INSTALLER_REBOOTS: string;
export const MEDIA_PROP_INSTALLER_SCRIPT: string;
export const MEDIA_PROP_KERNEL: string;
export const MEDIA_PROP_LANG: string;
export const MEDIA_PROP_LANG_MAP: string;
export const MEDIA_PROP_LANG_REGEX: string;
export const MEDIA_PROP_LIVE: string;
export const MEDIA_PROP_PUBLISHER_ID: string;
export const MEDIA_PROP_SYSTEM_ID: string;
export const MEDIA_PROP_URL: string;
export const MEDIA_PROP_VARIANT: string;
export const MEDIA_PROP_VOLUME_ID: string;
export const MEDIA_PROP_VOLUME_SIZE: string;
export const MEGAHERTZ: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OS_PROP_CLOUD_IMAGE_USERNAME: string;
export const OS_PROP_DISTRO: string;
export const OS_PROP_FAMILY: string;
export const OS_PROP_KERNEL_URL_ARGUMENT: string;
export const OS_PROP_RELEASE_STATUS: string;
export const OS_VARIANT_PROP_NAME: string;
export const PRODUCT_PROP_CODENAME: string;
export const PRODUCT_PROP_EOL_DATE: string;
export const PRODUCT_PROP_LOGO: string;
export const PRODUCT_PROP_NAME: string;
export const PRODUCT_PROP_RELEASE_DATE: string;
export const PRODUCT_PROP_SHORT_ID: string;
export const PRODUCT_PROP_VENDOR: string;
export const PRODUCT_PROP_VERSION: string;
export const RESOURCES_PROP_ARCHITECTURE: string;
export const RESOURCES_PROP_CPU: string;
export const RESOURCES_PROP_N_CPUS: string;
export const RESOURCES_PROP_RAM: string;
export const RESOURCES_PROP_STORAGE: string;
export const TREE_PROP_ARCHITECTURE: string;
export const TREE_PROP_BOOT_ISO: string;
export const TREE_PROP_HAS_TREEINFO: string;
export const TREE_PROP_INITRD: string;
export const TREE_PROP_KERNEL: string;
export const TREE_PROP_TREEINFO_ARCH: string;
export const TREE_PROP_TREEINFO_FAMILY: string;
export const TREE_PROP_TREEINFO_VARIANT: string;
export const TREE_PROP_TREEINFO_VERSION: string;
export const TREE_PROP_URL: string;
export const TREE_PROP_VARIANT: string;

export function error_quark(): GLib.Quark;

export function media_error_quark(): GLib.Quark;

export function tree_error_quark(): GLib.Quark;

export namespace DeviceDriverSigningReq {
    export const $gtype: GObject.GType<DeviceDriverSigningReq>;
}

export enum DeviceDriverSigningReq {
    NONE = 0,
    STRICT = 1,
    WARN = 2,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static GENERIC: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace InstallConfigParamPolicy {
    export const $gtype: GObject.GType<InstallConfigParamPolicy>;
}

export enum InstallConfigParamPolicy {
    NONE = 0,
    REQUIRED = 1,
    OPTIONAL = 2,
}

export namespace InstallScriptInstallationSource {
    export const $gtype: GObject.GType<InstallScriptInstallationSource>;
}

export enum InstallScriptInstallationSource {
    MEDIA = 0,
    NETWORK = 1,
}

export class MediaError extends GLib.Error {
    static $gtype: GObject.GType<MediaError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MediaError);

    // Properties
    static NO_DESCRIPTORS: number;
    static NO_PVD: number;
    static NO_SVD: number;
    static INSUFFICIENT_METADATA: number;
    static NOT_BOOTABLE: number;
    static NO_DIRECTORY_RECORD_EXTENT: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PathFormat {
    export const $gtype: GObject.GType<PathFormat>;
}

export enum PathFormat {
    UNIX = 0,
    DOS = 1,
}

export namespace ProductRelationship {
    export const $gtype: GObject.GType<ProductRelationship>;
}

export enum ProductRelationship {
    DERIVES_FROM = 0,
    UPGRADES = 1,
    CLONES = 2,
}

export namespace ReleaseStatus {
    export const $gtype: GObject.GType<ReleaseStatus>;
}

export enum ReleaseStatus {
    RELEASED = 0,
    SNAPSHOT = 1,
    PRERELEASE = 2,
    ROLLING = 3,
}

export class TreeError extends GLib.Error {
    static $gtype: GObject.GType<TreeError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TreeError);

    // Properties
    static NO_TREEINFO: number;
    static NOT_SUPPORTED_PROTOCOL: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace InstallScriptInjectionMethod {
    export const $gtype: GObject.GType<InstallScriptInjectionMethod>;
}

export enum InstallScriptInjectionMethod {
    CDROM = 1,
    DISK = 2,
    FLOPPY = 4,
    INITRD = 8,
    WEB = 16,
}

export namespace MediaDetectFlags {
    export const $gtype: GObject.GType<MediaDetectFlags>;
}

export enum MediaDetectFlags {
    BOOTABLE = 1,
}

export namespace AvatarFormat {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        alpha: boolean;
        height: number;
        mime_types: string[];
        mimeTypes: string[];
        width: number;
    }
}

export class AvatarFormat extends Entity {
    static $gtype: GObject.GType<AvatarFormat>;

    constructor(properties?: Partial<AvatarFormat.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AvatarFormat.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alpha: boolean;
    height: number;
    mime_types: string[];
    mimeTypes: string[];
    width: number;

    // Fields
    priv: AvatarFormatPrivate | any;

    // Constructors

    static ['new'](): AvatarFormat;

    // Members

    get_alpha(): boolean;

    get_height(): number;

    get_mime_types(): string[];

    get_width(): number;
}

export namespace Datamap {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;
    }
}

export class Datamap extends Entity {
    static $gtype: GObject.GType<Datamap>;

    constructor(properties?: Partial<Datamap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Datamap.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DatamapPrivate | any;

    // Constructors

    static ['new'](id: string): Datamap;

    // Members

    insert(inval: string, outval: string): void;

    lookup(inval: string): string;

    reverse_lookup(outval: string): string;
}

export namespace DatamapList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class DatamapList extends List {
    static $gtype: GObject.GType<DatamapList>;

    constructor(properties?: Partial<DatamapList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DatamapList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DatamapListPrivate | any;

    // Constructors

    static ['new'](): DatamapList;
}

export namespace Db {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Db extends GObject.Object {
    static $gtype: GObject.GType<Db>;

    constructor(properties?: Partial<Db.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Db.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DbPrivate;

    // Constructors

    static ['new'](): Db;

    // Members

    add_datamap(datamap: Datamap): void;

    add_deployment(deployment: Deployment): void;

    add_device(device: Device): void;

    add_install_script(script: InstallScript): void;

    add_os(os: Os): void;

    add_platform(platform: Platform): void;

    find_deployment(os: Os, platform: Platform): Deployment;

    get_datamap(id: string): Datamap;

    get_datamap_list(): DatamapList;

    get_deployment(id: string): Deployment;

    get_deployment_list(): DeploymentList;

    get_device(id: string): Device;

    get_device_list(): DeviceList;

    get_install_script(id: string): InstallScript;

    get_install_script_list(): InstallScriptList;

    get_os(id: string): Os;

    get_os_list(): OsList;

    get_platform(id: string): Platform;

    get_platform_list(): PlatformList;

    guess_os_from_media(media: Media): [Os, Media | null];

    guess_os_from_tree(tree: Tree): [Os, Tree | null];

    identify_media(media: Media): boolean;

    identify_tree(tree: Tree): boolean;

    unique_values_for_os_relationship(relshp: ProductRelationship): OsList;

    unique_values_for_platform_relationship(relshp: ProductRelationship): PlatformList;

    unique_values_for_property_in_deployment(propName: string): string[];

    unique_values_for_property_in_device(propName: string): string[];

    unique_values_for_property_in_os(propName: string): string[];

    unique_values_for_property_in_platform(propName: string): string[];
}

export namespace Deployment {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        os: Os;
        platform: Platform;
    }
}

export class Deployment extends Entity {
    static $gtype: GObject.GType<Deployment>;

    constructor(properties?: Partial<Deployment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Deployment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    os: Os;
    platform: Platform;

    // Fields
    priv: DeploymentPrivate | any;

    // Constructors

    static ['new'](id: string, os: Os, platform: Platform): Deployment;

    // Members

    add_device(dev: Device): DeviceLink;

    get_device_links(filter?: Filter | null): DeviceLinkList;

    get_devices(filter?: Filter | null): DeviceList;

    get_os(): Os;

    get_platform(): Platform;

    get_preferred_device(filter?: Filter | null): Device;

    get_preferred_device_link(filter?: Filter | null): DeviceLink;
}

export namespace DeploymentList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeploymentList extends List {
    static $gtype: GObject.GType<DeploymentList>;

    constructor(properties?: Partial<DeploymentList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeploymentList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DeploymentListPrivate | any;

    // Constructors

    static ['new'](): DeploymentList;

    // Members

    new_copy(): DeploymentList;

    new_filtered(filter: Filter): DeploymentList;

    new_intersection(sourceTwo: DeploymentList): DeploymentList;

    new_union(sourceTwo: DeploymentList): DeploymentList;
}

export namespace Device {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;
    }
}

export class Device extends Entity {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DevicePrivate | any;

    // Constructors

    static ['new'](id: string): Device;

    // Members

    get_bus_type(): string;

    get_class(): string;

    get_name(): string;

    get_product(): string;

    get_product_id(): string;

    get_subsystem(): string;

    get_vendor(): string;

    get_vendor_id(): string;
}

export namespace DeviceDriver {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceDriver extends Entity {
    static $gtype: GObject.GType<DeviceDriver>;

    constructor(properties?: Partial<DeviceDriver.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceDriver.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DeviceDriverPrivate | any;

    // Members

    get_architecture(): string;

    get_devices(): DeviceList;

    get_files(): string[];

    get_location(): string;

    get_pre_installable(): boolean;

    get_priority(): number;

    get_signed(): boolean;
}

export namespace DeviceDriverList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceDriverList extends List {
    static $gtype: GObject.GType<DeviceDriverList>;

    constructor(properties?: Partial<DeviceDriverList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceDriverList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DeviceDriverListPrivate | any;

    // Constructors

    static ['new'](): DeviceDriverList;
}

export namespace DeviceLink {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        target: Device;
    }
}

export class DeviceLink extends Entity {
    static $gtype: GObject.GType<DeviceLink>;

    constructor(properties?: Partial<DeviceLink.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceLink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    target: Device;

    // Fields
    priv: DeviceLinkPrivate | any;

    // Constructors

    static ['new'](target: Device): DeviceLink;

    // Members

    get_driver(): string;

    get_target(): Device;
}

export namespace DeviceLinkFilter {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;

        target_filter: Filter;
        targetFilter: Filter;
    }
}

export class DeviceLinkFilter extends Filter {
    static $gtype: GObject.GType<DeviceLinkFilter>;

    constructor(properties?: Partial<DeviceLinkFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceLinkFilter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    target_filter: Filter;
    targetFilter: Filter;

    // Fields
    priv: DeviceLinkFilterPrivate | any;

    // Constructors

    static ['new'](filter: Filter): DeviceLinkFilter;
    static ['new'](...args: never[]): never;

    // Members

    get_target_filter(): Filter;
}

export namespace DeviceLinkList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceLinkList extends List {
    static $gtype: GObject.GType<DeviceLinkList>;

    constructor(properties?: Partial<DeviceLinkList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceLinkList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DeviceLinkListPrivate | any;

    // Constructors

    static ['new'](): DeviceLinkList;

    // Members

    get_devices(filter?: Filter | null): DeviceList;

    new_copy(): DeviceLinkList;

    new_filtered(filter: Filter): DeviceLinkList;

    new_intersection(sourceTwo: DeviceLinkList): DeviceLinkList;

    new_union(sourceTwo: DeviceLinkList): DeviceLinkList;
}

export namespace DeviceList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceList extends List {
    static $gtype: GObject.GType<DeviceList>;

    constructor(properties?: Partial<DeviceList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DeviceListPrivate | any;

    // Constructors

    static ['new'](): DeviceList;

    // Members

    new_copy(): DeviceList;

    new_filtered(filter: Filter): DeviceList;

    new_intersection(sourceTwo: DeviceList): DeviceList;

    new_union(sourceTwo: DeviceList): DeviceList;
}

export namespace Entity {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        id: string;
    }
}

export abstract class Entity extends GObject.Object {
    static $gtype: GObject.GType<Entity>;

    constructor(properties?: Partial<Entity.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Entity.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: string;

    // Fields
    priv: EntityPrivate;

    // Members

    add_param(key: string, value: string): void;

    clear_param(key: string): void;

    get_id(): string;

    get_param_keys(): string[];

    get_param_value(key: string): string;

    get_param_value_boolean(key: string): boolean;

    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean;

    get_param_value_enum(key: string, enum_type: GObject.GType, default_value: number): number;

    get_param_value_int64(key: string): number;

    get_param_value_int64_with_default(key: string, default_value: number): number;

    get_param_value_list(key: string): string[];

    set_param(key: string, value: string): void;

    set_param_boolean(key: string, value: boolean): void;

    set_param_enum(key: string, value: number, enum_type: GObject.GType): void;

    set_param_int64(key: string, value: number): void;
}

export namespace Filter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Filter extends GObject.Object {
    static $gtype: GObject.GType<Filter>;

    constructor(properties?: Partial<Filter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Filter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FilterPrivate;

    // Constructors

    static ['new'](): Filter;

    // Members

    add_constraint(propName: string, propVal: string): void;

    clear_constraint(propName: string): void;

    clear_constraints(): void;

    get_constraint_keys(): string[];

    get_constraint_values(propName: string): string[];

    matches(entity: Entity): boolean;

    vfunc_matches(entity: Entity): boolean;
}

export namespace Firmware {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        architecture: string;
        type: string;
    }
}

export class Firmware extends Entity {
    static $gtype: GObject.GType<Firmware>;

    constructor(properties?: Partial<Firmware.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Firmware.ConstructorProperties>, ...args: any[]): void;

    // Properties
    architecture: string;
    type: string;

    // Fields
    priv: FirmwarePrivate | any;

    // Constructors

    static ['new'](id: string, architecture: string, type: string): Firmware;

    // Members

    get_architecture(): string;

    get_firmware_type(): string;

    is_supported(): boolean;
}

export namespace FirmwareList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class FirmwareList extends List {
    static $gtype: GObject.GType<FirmwareList>;

    constructor(properties?: Partial<FirmwareList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FirmwareList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FirmwareListPrivate | any;

    // Constructors

    static ['new'](): FirmwareList;
}

export namespace Image {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        architecture: string;
        cloud_init: string;
        cloudInit: string;
        format: string;
        url: string;
    }
}

export class Image extends Entity {
    static $gtype: GObject.GType<Image>;

    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;

    // Properties
    architecture: string;
    cloud_init: string;
    cloudInit: string;
    format: string;
    url: string;

    // Fields
    priv: ImagePrivate | any;

    // Constructors

    static ['new'](id: string, architecture: string, format: string): Image;

    // Members

    get_architecture(): string;

    get_cloud_init(): boolean;

    get_format(): string;

    get_os(): Os;

    get_os_variants(): OsVariantList;

    get_url(): string;

    set_os(os: Os): void;
}

export namespace ImageList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class ImageList extends List {
    static $gtype: GObject.GType<ImageList>;

    constructor(properties?: Partial<ImageList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ImageList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ImageListPrivate | any;

    // Constructors

    static ['new'](): ImageList;
}

export namespace InstallConfig {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;
    }
}

export class InstallConfig extends Entity {
    static $gtype: GObject.GType<InstallConfig>;

    constructor(properties?: Partial<InstallConfig.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InstallConfig.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: InstallConfigPrivate | any;

    // Constructors

    static ['new'](id: string): InstallConfig;

    // Members

    get_admin_password(): string;

    get_avatar_disk(): string;

    get_avatar_location(): string;

    get_driver_signing(): boolean;

    get_hardware_arch(): string;

    get_hostname(): string;

    get_installation_url(): string;

    get_l10n_keyboard(): string;

    get_l10n_language(): string;

    get_l10n_timezone(): string;

    get_post_install_drivers_disk(): string;

    get_post_install_drivers_location(): string;

    get_pre_install_drivers_disk(): string;

    get_pre_install_drivers_location(): string;

    get_reg_login(): string;

    get_reg_password(): string;

    get_reg_product_key(): string;

    get_script_disk(): string;

    get_target_disk(): string;

    get_user_administrator(): boolean;

    get_user_autologin(): boolean;

    get_user_login(): string;

    get_user_password(): string;

    get_user_realname(): string;

    set_admin_password(password: string): void;

    set_avatar_disk(disk: string): void;

    set_avatar_location(location: string): void;

    set_driver_signing(signing: boolean): void;

    set_hardware_arch(arch: string): void;

    set_hostname(hostname: string): void;

    set_installation_url(url: string): void;

    set_l10n_keyboard(keyboard: string): void;

    set_l10n_language(language: string): void;

    set_l10n_timezone(timezone: string): void;

    set_post_install_drivers_disk(disk: string): void;

    set_post_install_drivers_location(location: string): void;

    set_pre_install_drivers_disk(disk: string): void;

    set_pre_install_drivers_location(location: string): void;

    set_reg_login(name: string): void;

    set_reg_password(password: string): void;

    set_reg_product_key(key: string): void;

    set_script_disk(disk: string): void;

    set_target_disk(disk: string): void;

    set_user_administrator(admin: boolean): void;

    set_user_autologin(autologin: boolean): void;

    set_user_login(username: string): void;

    set_user_password(password: string): void;

    set_user_realname(name: string): void;
}

export namespace InstallConfigParam {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        name: string;
        policy: InstallConfigParamPolicy;
        value_map: Datamap;
        valueMap: Datamap;
    }
}

export class InstallConfigParam extends Entity {
    static $gtype: GObject.GType<InstallConfigParam>;

    constructor(properties?: Partial<InstallConfigParam.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InstallConfigParam.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    policy: InstallConfigParamPolicy;
    value_map: Datamap;
    valueMap: Datamap;

    // Fields
    priv: InstallConfigParamPrivate | any;

    // Constructors

    static ['new'](name: string): InstallConfigParam;

    // Members

    get_name(): string;

    get_policy(): InstallConfigParamPolicy;

    get_value_map(): Datamap;

    is_optional(): boolean;

    is_required(): boolean;

    set_value_map(datamap: Datamap): void;
}

export namespace InstallConfigParamList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class InstallConfigParamList extends List {
    static $gtype: GObject.GType<InstallConfigParamList>;

    constructor(properties?: Partial<InstallConfigParamList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InstallConfigParamList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: InstallConfigParamListPrivate | any;

    // Constructors

    static ['new'](): InstallConfigParamList;
}

export namespace InstallScript {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        avatar_format: AvatarFormat;
        avatarFormat: AvatarFormat;
        installation_source: InstallScriptInstallationSource;
        installationSource: InstallScriptInstallationSource;
        path_format: PathFormat;
        pathFormat: PathFormat;
        preferred_injection_method: InstallScriptInjectionMethod;
        preferredInjectionMethod: InstallScriptInjectionMethod;
        product_key_format: string;
        productKeyFormat: string;
        profile: string;
        template_data: string;
        templateData: string;
        template_uri: string;
        templateUri: string;
    }
}

export class InstallScript extends Entity {
    static $gtype: GObject.GType<InstallScript>;

    constructor(properties?: Partial<InstallScript.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InstallScript.ConstructorProperties>, ...args: any[]): void;

    // Properties
    avatar_format: AvatarFormat;
    avatarFormat: AvatarFormat;
    installation_source: InstallScriptInstallationSource;
    installationSource: InstallScriptInstallationSource;
    path_format: PathFormat;
    pathFormat: PathFormat;
    preferred_injection_method: InstallScriptInjectionMethod;
    preferredInjectionMethod: InstallScriptInjectionMethod;
    product_key_format: string;
    productKeyFormat: string;
    profile: string;
    template_data: string;
    templateData: string;
    template_uri: string;
    templateUri: string;

    // Fields
    priv: InstallScriptPrivate | any;

    // Constructors

    static ['new'](id: string): InstallScript;

    static new_data(id: string, profile: string, templateData: string): InstallScript;

    static new_uri(id: string, profile: string, templateUri: string): InstallScript;

    // Members

    generate(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null): string;

    generate_async(
        os: Os,
        config: InstallConfig,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generate_command_line(os: Os, config: InstallConfig): string;

    generate_command_line_for_media(media: Media, config: InstallConfig): string;

    generate_command_line_for_tree(tree: Tree, config: InstallConfig): string;

    generate_finish(res: Gio.AsyncResult): string;

    generate_for_media(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null): string;

    generate_for_media_async(
        media: Media,
        config: InstallConfig,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generate_for_media_finish(res: Gio.AsyncResult): string;

    generate_for_tree(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null): string;

    generate_for_tree_async(
        tree: Tree,
        config: InstallConfig,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generate_for_tree_finish(res: Gio.AsyncResult): string;

    generate_output(
        os: Os,
        config: InstallConfig,
        output_dir: Gio.File,
        cancellable?: Gio.Cancellable | null
    ): Gio.File;

    generate_output_async(
        os: Os,
        config: InstallConfig,
        output_dir: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generate_output_finish(res: Gio.AsyncResult): Gio.File;

    generate_output_for_media(
        media: Media,
        config: InstallConfig,
        output_dir: Gio.File,
        cancellable?: Gio.Cancellable | null
    ): Gio.File;

    generate_output_for_media_async(
        media: Media,
        config: InstallConfig,
        output_dir: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generate_output_for_media_finish(res: Gio.AsyncResult): Gio.File;

    generate_output_for_tree(
        tree: Tree,
        config: InstallConfig,
        output_dir: Gio.File,
        cancellable?: Gio.Cancellable | null
    ): Gio.File;

    generate_output_for_tree_async(
        tree: Tree,
        config: InstallConfig,
        output_dir: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    generate_output_for_tree_finish(res: Gio.AsyncResult): Gio.File;

    get_avatar_format(): AvatarFormat;

    get_can_post_install_drivers(): boolean;

    get_can_pre_install_drivers(): boolean;

    get_config_param(name: string): InstallConfigParam;

    get_config_param_list(): InstallScript[];

    get_config_params(): InstallConfigParamList;

    get_expected_filename(): string;

    get_injection_methods(): InstallScriptInjectionMethod;

    get_installation_source(): InstallScriptInstallationSource;

    get_needs_internet(): boolean;

    get_output_filename(): string;

    get_output_prefix(): string;

    get_path_format(): PathFormat;

    get_post_install_drivers_signing_req(): DeviceDriverSigningReq;

    get_pre_install_drivers_signing_req(): DeviceDriverSigningReq;

    get_preferred_injection_method(): InstallScriptInjectionMethod;

    get_product_key_format(): string;

    get_profile(): string;

    get_template_data(): string;

    get_template_uri(): string;

    has_config_param(config_param: InstallConfigParam): boolean;

    has_config_param_name(name: string): boolean;

    set_installation_source(source: InstallScriptInstallationSource): void;

    set_output_prefix(prefix: string): void;

    set_preferred_injection_method(method: InstallScriptInjectionMethod): void;
}

export namespace InstallScriptList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class InstallScriptList extends List {
    static $gtype: GObject.GType<InstallScriptList>;

    constructor(properties?: Partial<InstallScriptList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InstallScriptList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: InstallScriptListPrivate | any;

    // Constructors

    static ['new'](): InstallScriptList;

    // Members

    new_copy(): InstallScriptList;

    new_filtered(filter: Filter): InstallScriptList;

    new_intersection(sourceTwo: InstallScriptList): InstallScriptList;

    new_union(sourceTwo: InstallScriptList): InstallScriptList;
}

export namespace List {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        element_type: GObject.GType;
        elementType: GObject.GType;
    }
}

export abstract class List extends GObject.Object {
    static $gtype: GObject.GType<List>;

    constructor(properties?: Partial<List.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<List.ConstructorProperties>, ...args: any[]): void;

    // Properties
    element_type: GObject.GType;
    elementType: GObject.GType;

    // Fields
    priv: ListPrivate;

    // Members

    add(entity: Entity): void;

    add_all(source: List): void;

    add_filtered(source: List, filter: Filter): void;

    add_intersection(sourceOne: List, sourceTwo: List): void;

    add_union(sourceOne: List, sourceTwo: List): void;

    find_by_id(id: string): Entity;

    get_element_type(): GObject.GType;

    get_elements(): Entity[];

    get_length(): number;

    get_nth(idx: number): Entity;

    new_copy(): List;

    new_filtered(filter: Filter): List;

    new_intersection(sourceTwo: List): List;

    new_union(sourceTwo: List): List;
}

export namespace Loader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Loader extends GObject.Object {
    static $gtype: GObject.GType<Loader>;

    constructor(properties?: Partial<Loader.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Loader.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: LoaderPrivate;

    // Constructors

    static ['new'](): Loader;

    // Members

    get_db(): Db;

    process_default_path(): void;

    process_local_path(): void;

    process_path(path: string): void;

    process_system_path(): void;

    process_uri(uri: string): void;

    process_user_path(): void;
}

export namespace Media {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        application_id: string;
        applicationId: string;
        architecture: string;
        eject_after_install: boolean;
        ejectAfterInstall: boolean;
        initrd_path: string;
        initrdPath: string;
        installer: boolean;
        installer_reboots: number;
        installerReboots: number;
        installer_script: boolean;
        installerScript: boolean;
        kernel_path: string;
        kernelPath: string;
        languages: string[];
        live: boolean;
        os: Os;
        publisher_id: string;
        publisherId: string;
        system_id: string;
        systemId: string;
        url: string;
        volume_id: string;
        volumeId: string;
        volume_size: number;
        volumeSize: number;
    }
}

export class Media extends Entity {
    static $gtype: GObject.GType<Media>;

    constructor(properties?: Partial<Media.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Media.ConstructorProperties>, ...args: any[]): void;

    // Properties
    application_id: string;
    applicationId: string;
    architecture: string;
    eject_after_install: boolean;
    ejectAfterInstall: boolean;
    initrd_path: string;
    initrdPath: string;
    installer: boolean;
    installer_reboots: number;
    installerReboots: number;
    installer_script: boolean;
    installerScript: boolean;
    kernel_path: string;
    kernelPath: string;
    languages: string[];
    live: boolean;
    os: Os;
    publisher_id: string;
    publisherId: string;
    system_id: string;
    systemId: string;
    url: string;
    volume_id: string;
    volumeId: string;
    volume_size: number;
    volumeSize: number;

    // Fields
    priv: MediaPrivate | any;

    // Constructors

    static ['new'](id: string, architecture: string): Media;

    // Members

    add_install_script(script: InstallScript): void;

    get_application_id(): string;

    get_architecture(): string;

    get_eject_after_install(): boolean;

    get_initrd_path(): string;

    get_install_script_list(): InstallScriptList;

    get_installer(): boolean;

    get_installer_reboots(): number;

    get_kernel_path(): string;

    get_languages(): string[];

    get_live(): boolean;

    get_os(): Os;

    get_os_variants(): OsVariantList;

    get_publisher_id(): string;

    get_system_id(): string;

    get_url(): string;

    get_volume_id(): string;

    get_volume_size(): number;

    is_bootable(): boolean;

    supports_installer_script(): boolean;

    static create_from_location(location: string, cancellable?: Gio.Cancellable | null): Media;

    static create_from_location_async(
        location: string,
        priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Media> | null
    ): void;

    static create_from_location_finish(res: Gio.AsyncResult): Media;

    static create_from_location_with_flags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media;

    static create_from_location_with_flags_async(
        location: string,
        priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Media> | null,
        flags: number
    ): void;

    static create_from_location_with_flags_finish(res: Gio.AsyncResult): Media;
}

export namespace MediaList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class MediaList extends List {
    static $gtype: GObject.GType<MediaList>;

    constructor(properties?: Partial<MediaList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MediaListPrivate | any;

    // Constructors

    static ['new'](): MediaList;

    // Members

    new_copy(): MediaList;

    new_filtered(filter: Filter): MediaList;

    new_intersection(sourceTwo: MediaList): MediaList;

    new_union(sourceTwo: MediaList): MediaList;
}

export namespace Os {
    export interface ConstructorProperties extends Product.ConstructorProperties {
        [key: string]: any;

        cloud_image_username: string;
        cloudImageUsername: string;
        distro: string;
        family: string;
        kernel_url_argument: string;
        kernelUrlArgument: string;
    }
}

export class Os extends Product {
    static $gtype: GObject.GType<Os>;

    constructor(properties?: Partial<Os.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Os.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cloud_image_username: string;
    cloudImageUsername: string;
    distro: string;
    family: string;
    kernel_url_argument: string;
    kernelUrlArgument: string;

    // Fields
    priv: OsPrivate | any;

    // Constructors

    static ['new'](id: string): Os;

    // Members

    add_device(dev: Device): DeviceLink;

    add_device_driver(driver: DeviceDriver): void;

    add_firmware(firmware: Firmware): void;

    add_image(image: Image): void;

    add_install_script(script: InstallScript): void;

    add_maximum_resources(resources: Resources): void;

    add_media(media: Media): void;

    add_minimum_resources(resources: Resources): void;

    add_network_install_resources(resources: Resources): void;

    add_recommended_resources(resources: Resources): void;

    add_tree(tree: Tree): void;

    add_variant(variant: OsVariant): void;

    find_install_script(profile: string): InstallScript;

    get_all_device_links(filter?: Filter | null): DeviceLinkList;

    get_all_devices(filter?: Filter | null): DeviceList;

    get_cloud_image_username(): string;

    get_device_drivers(): DeviceDriverList;

    get_device_drivers_prioritized(): DeviceDriverList;

    get_device_links(filter?: Filter | null): DeviceLinkList;

    get_devices(filter?: Filter | null): DeviceList;

    get_devices_by_property(property: string, value: string, inherited: boolean): DeviceList;

    get_distro(): string;

    get_family(): string;

    get_firmware_list(filter?: Filter | null): FirmwareList;

    get_image_list(): ImageList;

    get_install_script_list(): InstallScriptList;

    get_kernel_url_argument(): string;

    get_maximum_resources(): ResourcesList;

    get_media_list(): MediaList;

    get_minimum_resources(): ResourcesList;

    get_network_install_resources(): ResourcesList;

    get_recommended_resources(): ResourcesList;

    get_release_status(): ReleaseStatus;

    get_tree_list(): TreeList;

    get_variant_list(): OsVariantList;
}

export namespace OsList {
    export interface ConstructorProperties extends ProductList.ConstructorProperties {
        [key: string]: any;
    }
}

export class OsList extends ProductList {
    static $gtype: GObject.GType<OsList>;

    constructor(properties?: Partial<OsList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OsList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: OsListPrivate | any;

    // Constructors

    static ['new'](): OsList;

    // Members

    new_copy(): OsList;

    new_filtered(filter: Filter): OsList;

    new_intersection(sourceTwo: OsList): OsList;

    new_union(sourceTwo: OsList): OsList;
}

export namespace OsVariant {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        name: string;
    }
}

export class OsVariant extends Entity {
    static $gtype: GObject.GType<OsVariant>;

    constructor(properties?: Partial<OsVariant.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OsVariant.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Fields
    priv: OsVariantPrivate | any;

    // Constructors

    static ['new'](id: string): OsVariant;

    // Members

    get_name(): string;
}

export namespace OsVariantList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class OsVariantList extends List {
    static $gtype: GObject.GType<OsVariantList>;

    constructor(properties?: Partial<OsVariantList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OsVariantList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: OsVariantListPrivate | any;

    // Constructors

    static ['new'](): OsVariantList;
}

export namespace Platform {
    export interface ConstructorProperties extends Product.ConstructorProperties {
        [key: string]: any;
    }
}

export class Platform extends Product {
    static $gtype: GObject.GType<Platform>;

    constructor(properties?: Partial<Platform.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Platform.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PlatformPrivate | any;

    // Constructors

    static ['new'](id: string): Platform;

    // Members

    add_device(dev: Device): DeviceLink;

    get_all_devices(filter?: Filter | null): DeviceList;

    get_device_links(filter?: Filter | null): DeviceLinkList;

    get_devices(filter?: Filter | null): DeviceList;
}

export namespace PlatformList {
    export interface ConstructorProperties extends ProductList.ConstructorProperties {
        [key: string]: any;
    }
}

export class PlatformList extends ProductList {
    static $gtype: GObject.GType<PlatformList>;

    constructor(properties?: Partial<PlatformList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PlatformList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PlatformListPrivate | any;

    // Constructors

    static ['new'](): PlatformList;

    // Members

    new_copy(): PlatformList;

    new_filtered(filter: Filter): PlatformList;

    new_intersection(sourceTwo: PlatformList): PlatformList;

    new_union(sourceTwo: PlatformList): PlatformList;
}

export namespace Product {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        codename: string;
        logo: string;
        name: string;
        short_id: string;
        shortId: string;
        vendor: string;
        version: string;
    }
}

export abstract class Product extends Entity {
    static $gtype: GObject.GType<Product>;

    constructor(properties?: Partial<Product.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Product.ConstructorProperties>, ...args: any[]): void;

    // Properties
    codename: string;
    logo: string;
    name: string;
    short_id: string;
    shortId: string;
    vendor: string;
    version: string;

    // Fields
    priv: ProductPrivate | any;

    // Members

    add_related(relshp: ProductRelationship, otherproduct: Product): void;

    get_codename(): string;

    get_eol_date(): GLib.Date;

    get_eol_date_string(): string;

    get_logo(): string;

    get_name(): string;

    get_related(relshp: ProductRelationship): ProductList;

    get_release_date(): GLib.Date;

    get_release_date_string(): string;

    get_short_id(): string;

    get_short_id_list(): string[];

    get_vendor(): string;

    get_version(): string;
}

export namespace ProductFilter {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class ProductFilter extends Filter {
    static $gtype: GObject.GType<ProductFilter>;

    constructor(properties?: Partial<ProductFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProductFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProductFilterPrivate | any;

    // Constructors

    static ['new'](): ProductFilter;

    // Members

    add_product_constraint(relshp: ProductRelationship, product: Product): number;

    add_support_date_constraint(when: GLib.Date): void;

    clear_product_constraint(relshp: ProductRelationship): void;

    clear_product_constraints(): void;

    get_product_constraint_values(relshp: ProductRelationship): Product[];
}

export namespace ProductList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class ProductList extends List {
    static $gtype: GObject.GType<ProductList>;

    constructor(properties?: Partial<ProductList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProductList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProductListPrivate | any;

    // Constructors

    static ['new'](): ProductList;

    // Members

    new_copy(): ProductList;

    new_filtered(filter: Filter): ProductList;

    new_intersection(sourceTwo: ProductList): ProductList;

    new_union(sourceTwo: ProductList): ProductList;
}

export namespace Resources {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        architecture: string;
        cpu: number;
        n_cpus: number;
        nCpus: number;
        ram: number;
        storage: number;
    }
}

export class Resources extends Entity {
    static $gtype: GObject.GType<Resources>;

    constructor(properties?: Partial<Resources.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Resources.ConstructorProperties>, ...args: any[]): void;

    // Properties
    architecture: string;
    cpu: number;
    n_cpus: number;
    nCpus: number;
    ram: number;
    storage: number;

    // Fields
    priv: ResourcesPrivate | any;

    // Constructors

    static ['new'](id: string, architecture: string): Resources;

    // Members

    get_architecture(): string;

    get_cpu(): number;

    get_n_cpus(): number;

    get_ram(): number;

    get_storage(): number;

    set_cpu(cpu: number): void;

    set_n_cpus(n_cpus: number): void;

    set_ram(ram: number): void;

    set_storage(storage: number): void;
}

export namespace ResourcesList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class ResourcesList extends List {
    static $gtype: GObject.GType<ResourcesList>;

    constructor(properties?: Partial<ResourcesList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ResourcesList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ResourcesListPrivate | any;

    // Constructors

    static ['new'](): ResourcesList;

    // Members

    new_copy(): ResourcesList;

    new_filtered(filter: Filter): ResourcesList;

    new_intersection(sourceTwo: ResourcesList): ResourcesList;

    new_union(sourceTwo: ResourcesList): ResourcesList;
}

export namespace Tree {
    export interface ConstructorProperties extends Entity.ConstructorProperties {
        [key: string]: any;

        architecture: string;
        boot_iso_path: string;
        bootIsoPath: string;
        has_treeinfo: boolean;
        hasTreeinfo: boolean;
        initrd_path: string;
        initrdPath: string;
        kernel_path: string;
        kernelPath: string;
        os: Os;
        treeinfo_arch: string;
        treeinfoArch: string;
        treeinfo_family: string;
        treeinfoFamily: string;
        treeinfo_variant: string;
        treeinfoVariant: string;
        treeinfo_version: string;
        treeinfoVersion: string;
        url: string;
    }
}

export class Tree extends Entity {
    static $gtype: GObject.GType<Tree>;

    constructor(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    architecture: string;
    boot_iso_path: string;
    bootIsoPath: string;
    has_treeinfo: boolean;
    hasTreeinfo: boolean;
    initrd_path: string;
    initrdPath: string;
    kernel_path: string;
    kernelPath: string;
    os: Os;
    treeinfo_arch: string;
    treeinfoArch: string;
    treeinfo_family: string;
    treeinfoFamily: string;
    treeinfo_variant: string;
    treeinfoVariant: string;
    treeinfo_version: string;
    treeinfoVersion: string;
    url: string;

    // Fields
    priv: TreePrivate | any;

    // Constructors

    static ['new'](id: string, architecture: string): Tree;

    // Members

    get_architecture(): string;

    get_boot_iso_path(): string;

    get_initrd_path(): string;

    get_kernel_path(): string;

    get_os(): Os;

    get_os_variants(): OsVariantList;

    get_treeinfo_arch(): string;

    get_treeinfo_family(): string;

    get_treeinfo_variant(): string;

    get_treeinfo_version(): string;

    get_url(): string;

    set_os(os: Os): void;

    static create_from_location(location: string, cancellable?: Gio.Cancellable | null): Tree;

    static create_from_location_async(
        location: string,
        priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Tree> | null
    ): void;

    static create_from_location_finish(res: Gio.AsyncResult): Tree;

    static create_from_treeinfo(treeinfo: string, location: string): Tree;
}

export namespace TreeList {
    export interface ConstructorProperties extends List.ConstructorProperties {
        [key: string]: any;
    }
}

export class TreeList extends List {
    static $gtype: GObject.GType<TreeList>;

    constructor(properties?: Partial<TreeList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TreeListPrivate | any;

    // Constructors

    static ['new'](): TreeList;

    // Members

    new_copy(): TreeList;

    new_filtered(filter: Filter): TreeList;

    new_intersection(sourceTwo: TreeList): TreeList;

    new_union(sourceTwo: TreeList): TreeList;
}

export class AvatarFormatPrivate {
    static $gtype: GObject.GType<AvatarFormatPrivate>;

    constructor(copy: AvatarFormatPrivate);
}

export class DatamapListPrivate {
    static $gtype: GObject.GType<DatamapListPrivate>;

    constructor(copy: DatamapListPrivate);
}

export class DatamapPrivate {
    static $gtype: GObject.GType<DatamapPrivate>;

    constructor(copy: DatamapPrivate);
}

export class DbPrivate {
    static $gtype: GObject.GType<DbPrivate>;

    constructor(copy: DbPrivate);
}

export class DeploymentListPrivate {
    static $gtype: GObject.GType<DeploymentListPrivate>;

    constructor(copy: DeploymentListPrivate);
}

export class DeploymentPrivate {
    static $gtype: GObject.GType<DeploymentPrivate>;

    constructor(copy: DeploymentPrivate);
}

export class DeviceDriverListPrivate {
    static $gtype: GObject.GType<DeviceDriverListPrivate>;

    constructor(copy: DeviceDriverListPrivate);
}

export class DeviceDriverPrivate {
    static $gtype: GObject.GType<DeviceDriverPrivate>;

    constructor(copy: DeviceDriverPrivate);
}

export class DeviceLinkFilterPrivate {
    static $gtype: GObject.GType<DeviceLinkFilterPrivate>;

    constructor(copy: DeviceLinkFilterPrivate);
}

export class DeviceLinkListPrivate {
    static $gtype: GObject.GType<DeviceLinkListPrivate>;

    constructor(copy: DeviceLinkListPrivate);
}

export class DeviceLinkPrivate {
    static $gtype: GObject.GType<DeviceLinkPrivate>;

    constructor(copy: DeviceLinkPrivate);
}

export class DeviceListPrivate {
    static $gtype: GObject.GType<DeviceListPrivate>;

    constructor(copy: DeviceListPrivate);
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class EntityPrivate {
    static $gtype: GObject.GType<EntityPrivate>;

    constructor(copy: EntityPrivate);
}

export class FilterPrivate {
    static $gtype: GObject.GType<FilterPrivate>;

    constructor(copy: FilterPrivate);
}

export class FirmwareListPrivate {
    static $gtype: GObject.GType<FirmwareListPrivate>;

    constructor(copy: FirmwareListPrivate);
}

export class FirmwarePrivate {
    static $gtype: GObject.GType<FirmwarePrivate>;

    constructor(copy: FirmwarePrivate);
}

export class ImageListPrivate {
    static $gtype: GObject.GType<ImageListPrivate>;

    constructor(copy: ImageListPrivate);
}

export class ImagePrivate {
    static $gtype: GObject.GType<ImagePrivate>;

    constructor(copy: ImagePrivate);
}

export class InstallConfigParamListPrivate {
    static $gtype: GObject.GType<InstallConfigParamListPrivate>;

    constructor(copy: InstallConfigParamListPrivate);
}

export class InstallConfigParamPrivate {
    static $gtype: GObject.GType<InstallConfigParamPrivate>;

    constructor(copy: InstallConfigParamPrivate);
}

export class InstallConfigPrivate {
    static $gtype: GObject.GType<InstallConfigPrivate>;

    constructor(copy: InstallConfigPrivate);
}

export class InstallScriptListPrivate {
    static $gtype: GObject.GType<InstallScriptListPrivate>;

    constructor(copy: InstallScriptListPrivate);
}

export class InstallScriptPrivate {
    static $gtype: GObject.GType<InstallScriptPrivate>;

    constructor(copy: InstallScriptPrivate);
}

export class ListPrivate {
    static $gtype: GObject.GType<ListPrivate>;

    constructor(copy: ListPrivate);
}

export class LoaderPrivate {
    static $gtype: GObject.GType<LoaderPrivate>;

    constructor(copy: LoaderPrivate);
}

export class MediaListPrivate {
    static $gtype: GObject.GType<MediaListPrivate>;

    constructor(copy: MediaListPrivate);
}

export class MediaPrivate {
    static $gtype: GObject.GType<MediaPrivate>;

    constructor(copy: MediaPrivate);
}

export class OsListPrivate {
    static $gtype: GObject.GType<OsListPrivate>;

    constructor(copy: OsListPrivate);
}

export class OsPrivate {
    static $gtype: GObject.GType<OsPrivate>;

    constructor(copy: OsPrivate);
}

export class OsVariantListPrivate {
    static $gtype: GObject.GType<OsVariantListPrivate>;

    constructor(copy: OsVariantListPrivate);
}

export class OsVariantPrivate {
    static $gtype: GObject.GType<OsVariantPrivate>;

    constructor(copy: OsVariantPrivate);
}

export class PlatformListPrivate {
    static $gtype: GObject.GType<PlatformListPrivate>;

    constructor(copy: PlatformListPrivate);
}

export class PlatformPrivate {
    static $gtype: GObject.GType<PlatformPrivate>;

    constructor(copy: PlatformPrivate);
}

export class ProductFilterPrivate {
    static $gtype: GObject.GType<ProductFilterPrivate>;

    constructor(copy: ProductFilterPrivate);
}

export class ProductListPrivate {
    static $gtype: GObject.GType<ProductListPrivate>;

    constructor(copy: ProductListPrivate);
}

export class ProductPrivate {
    static $gtype: GObject.GType<ProductPrivate>;

    constructor(copy: ProductPrivate);
}

export class ResourcesListPrivate {
    static $gtype: GObject.GType<ResourcesListPrivate>;

    constructor(copy: ResourcesListPrivate);
}

export class ResourcesPrivate {
    static $gtype: GObject.GType<ResourcesPrivate>;

    constructor(copy: ResourcesPrivate);
}

export class TreeListPrivate {
    static $gtype: GObject.GType<TreeListPrivate>;

    constructor(copy: TreeListPrivate);
}

export class TreePrivate {
    static $gtype: GObject.GType<TreePrivate>;

    constructor(copy: TreePrivate);
}
