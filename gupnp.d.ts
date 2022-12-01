/**
 * GUPnP 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GSSDP from './gssdp';
import * as Gio from './gio';
import * as Soup from './soup';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export function control_error_quark(): GLib.Quark;

export function eventing_error_quark(): GLib.Quark;

export function get_uuid(): string;

export function rootdevice_error_quark(): GLib.Quark;

export function server_error_quark(): GLib.Quark;

export function xml_error_quark(): GLib.Quark;

export type ServiceIntrospectionCallback = (
    info: ServiceInfo,
    introspection?: ServiceIntrospection | null,
    error?: GLib.Error | null
) => void;
export type ServiceProxyActionCallback = (proxy: ServiceProxy, action: ServiceProxyAction) => void;
export type ServiceProxyNotifyCallback = (proxy: ServiceProxy, variable: string, value: any) => void;
export type BinBase64 = object | null;
export type BinHex = object | null;
export type Date = object | null;
export type DateTime = object | null;
export type DateTimeTZ = object | null;
export type Time = object | null;
export type TimeTZ = object | null;
export type URI = object | null;
export type UUID = object | null;

export class ControlError extends GLib.Error {
    static $gtype: GObject.GType<ControlError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ControlError);

    // Properties
    static INVALID_ACTION: number;
    static INVALID_ARGS: number;
    static OUT_OF_SYNC: number;
    static ACTION_FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class EventingError extends GLib.Error {
    static $gtype: GObject.GType<EventingError>;

    constructor(options: { message: string; code: number });
    constructor(copy: EventingError);

    // Properties
    static SUBSCRIPTION_FAILED: number;
    static SUBSCRIPTION_LOST: number;
    static NOTIFY_FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class RootdeviceError extends GLib.Error {
    static $gtype: GObject.GType<RootdeviceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RootdeviceError);

    // Properties
    static NO_CONTEXT: number;
    static NO_DESCRIPTION_PATH: number;
    static NO_DESCRIPTION_FOLDER: number;
    static NO_NETWORK: number;
    static FAIL: number;

    // Members
    static quark(): GLib.Quark;
}

export class ServerError extends GLib.Error {
    static $gtype: GObject.GType<ServerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ServerError);

    // Properties
    static INTERNAL_SERVER_ERROR: number;
    static NOT_FOUND: number;
    static NOT_IMPLEMENTED: number;
    static INVALID_RESPONSE: number;
    static INVALID_URL: number;
    static OTHER: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ServiceActionArgDirection {
    export const $gtype: GObject.GType<ServiceActionArgDirection>;
}

export enum ServiceActionArgDirection {
    IN = 0,
    OUT = 1,
}

export class XMLError extends GLib.Error {
    static $gtype: GObject.GType<XMLError>;

    constructor(options: { message: string; code: number });
    constructor(copy: XMLError);

    // Properties
    static PARSE: number;
    static NO_NODE: number;
    static EMPTY_NODE: number;
    static INVALID_ATTRIBUTE: number;
    static OTHER: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Context {
    export interface ConstructorProperties extends GSSDP.Client.ConstructorProperties {
        [key: string]: any;

        acl: Acl;
        default_language: string;
        defaultLanguage: string;
        port: number;
        server: Soup.Server;
        session: Soup.Session;
        subscription_timeout: number;
        subscriptionTimeout: number;
    }
}

export class Context extends GSSDP.Client implements Gio.Initable {
    static $gtype: GObject.GType<Context>;

    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;

    // Properties
    acl: Acl;
    default_language: string;
    defaultLanguage: string;
    port: number;
    server: Soup.Server;
    session: Soup.Session;
    subscription_timeout: number;
    subscriptionTimeout: number;

    // Constructors

    static ['new'](iface: string | null, port: number): Context;
    static ['new'](...args: never[]): never;

    // Members

    add_server_handler(
        use_acl: boolean,
        path: string,
        callback: Soup.ServerCallback,
        destroy?: GLib.DestroyNotify | null
    ): void;

    get_acl(): Acl;

    get_default_language(): string;

    get_port(): number;

    get_server(): Soup.Server;

    get_session(): Soup.Session;

    get_subscription_timeout(): number;

    host_path(local_path: string, server_path: string): void;

    host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;

    remove_server_handler(path: string): void;

    rewrite_uri(uri: string): string;

    set_acl(acl?: Acl | null): void;

    set_default_language(language: string): void;

    set_subscription_timeout(timeout: number): void;

    unhost_path(server_path: string): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace ContextManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        family: Gio.SocketFamily;
        port: number;
        uda_version: GSSDP.UDAVersion;
        udaVersion: GSSDP.UDAVersion;
        white_list: WhiteList;
        whiteList: WhiteList;
    }
}

export abstract class ContextManager extends GObject.Object {
    static $gtype: GObject.GType<ContextManager>;

    constructor(properties?: Partial<ContextManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContextManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    family: Gio.SocketFamily;
    port: number;
    uda_version: GSSDP.UDAVersion;
    udaVersion: GSSDP.UDAVersion;
    white_list: WhiteList;
    whiteList: WhiteList;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'context-available', callback: (_source: this, context: Context) => void): number;

    connect_after(signal: 'context-available', callback: (_source: this, context: Context) => void): number;

    emit(signal: 'context-available', context: Context): void;

    connect(signal: 'context-unavailable', callback: (_source: this, context: Context) => void): number;

    connect_after(signal: 'context-unavailable', callback: (_source: this, context: Context) => void): number;

    emit(signal: 'context-unavailable', context: Context): void;

    // Members

    get_port(): number;

    get_socket_family(): Gio.SocketFamily;

    get_uda_version(): GSSDP.UDAVersion;

    get_white_list(): WhiteList;

    manage_control_point(control_point: ControlPoint): void;

    manage_root_device(root_device: RootDevice): void;

    rescan_control_points(): void;

    static create(port: number): ContextManager;

    static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager;
}

export namespace ControlPoint {
    export interface ConstructorProperties extends GSSDP.ResourceBrowser.ConstructorProperties {
        [key: string]: any;

        resource_factory: ResourceFactory;
        resourceFactory: ResourceFactory;
    }
}

export class ControlPoint extends GSSDP.ResourceBrowser {
    static $gtype: GObject.GType<ControlPoint>;

    constructor(properties?: Partial<ControlPoint.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ControlPoint.ConstructorProperties>, ...args: any[]): void;

    // Properties
    resource_factory: ResourceFactory;
    resourceFactory: ResourceFactory;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'device-proxy-available', callback: (_source: this, proxy: DeviceProxy) => void): number;

    connect_after(signal: 'device-proxy-available', callback: (_source: this, proxy: DeviceProxy) => void): number;

    emit(signal: 'device-proxy-available', proxy: DeviceProxy): void;

    connect(signal: 'device-proxy-unavailable', callback: (_source: this, proxy: DeviceProxy) => void): number;

    connect_after(signal: 'device-proxy-unavailable', callback: (_source: this, proxy: DeviceProxy) => void): number;

    emit(signal: 'device-proxy-unavailable', proxy: DeviceProxy): void;

    connect(signal: 'service-proxy-available', callback: (_source: this, proxy: ServiceProxy) => void): number;

    connect_after(signal: 'service-proxy-available', callback: (_source: this, proxy: ServiceProxy) => void): number;

    emit(signal: 'service-proxy-available', proxy: ServiceProxy): void;

    connect(signal: 'service-proxy-unavailable', callback: (_source: this, proxy: ServiceProxy) => void): number;

    connect_after(signal: 'service-proxy-unavailable', callback: (_source: this, proxy: ServiceProxy) => void): number;

    emit(signal: 'service-proxy-unavailable', proxy: ServiceProxy): void;

    // Constructors

    static ['new'](context: Context, target: string): ControlPoint;

    static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;

    // Members

    get_context(): Context;

    get_resource_factory(): ResourceFactory;

    list_device_proxies(): DeviceProxy[];

    list_service_proxies(): ServiceProxy[];

    vfunc_device_proxy_available(proxy: DeviceProxy): void;

    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void;

    vfunc_service_proxy_available(proxy: ServiceProxy): void;

    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void;
}

export namespace Device {
    export interface ConstructorProperties extends DeviceInfo.ConstructorProperties {
        [key: string]: any;

        root_device: RootDevice;
        rootDevice: RootDevice;
    }
}

export class Device extends DeviceInfo {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    root_device: RootDevice;
    rootDevice: RootDevice;
}

export namespace DeviceInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: Context;
        device_type: string;
        deviceType: string;
        document: XMLDoc;
        element: any;
        location: string;
        resource_factory: ResourceFactory;
        resourceFactory: ResourceFactory;
        udn: string;
        url_base: Soup.URI;
        urlBase: Soup.URI;
    }
}

export abstract class DeviceInfo extends GObject.Object {
    static $gtype: GObject.GType<DeviceInfo>;

    constructor(properties?: Partial<DeviceInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: Context;
    device_type: string;
    deviceType: string;
    document: XMLDoc;
    element: any;
    location: string;
    resource_factory: ResourceFactory;
    resourceFactory: ResourceFactory;
    udn: string;
    url_base: Soup.URI;
    urlBase: Soup.URI;

    // Members

    get_context(): Context;

    get_description_value(element: string): string;

    get_device(type: string): DeviceInfo | null;

    get_device_type(): string;

    get_friendly_name(): string;

    get_icon_url(
        requested_mime_type: string | null,
        requested_depth: number,
        requested_width: number,
        requested_height: number,
        prefer_bigger: boolean
    ): [string, string | null, number | null, number | null, number | null];

    get_location(): string;

    get_manufacturer(): string;

    get_manufacturer_url(): string;

    get_model_description(): string;

    get_model_name(): string;

    get_model_number(): string;

    get_model_url(): string;

    get_presentation_url(): string;

    get_resource_factory(): ResourceFactory;

    get_serial_number(): string;

    get_service(type: string): ServiceInfo;

    get_udn(): string;

    get_upc(): string;

    get_url_base(): Soup.URI;

    list_device_types(): string[];

    list_devices(): DeviceInfo[];

    list_dlna_capabilities(): string[];

    list_dlna_device_class_identifier(): string[];

    list_service_types(): string[];

    list_services(): ServiceInfo[];
}

export namespace DeviceProxy {
    export interface ConstructorProperties extends DeviceInfo.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceProxy extends DeviceInfo {
    static $gtype: GObject.GType<DeviceProxy>;

    constructor(properties?: Partial<DeviceProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceProxy.ConstructorProperties>, ...args: any[]): void;
}

export namespace ResourceFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ResourceFactory extends GObject.Object {
    static $gtype: GObject.GType<ResourceFactory>;

    constructor(properties?: Partial<ResourceFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ResourceFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ResourceFactory;

    // Members

    register_resource_proxy_type(upnp_type: string, type: GObject.GType): void;

    register_resource_type(upnp_type: string, type: GObject.GType): void;

    unregister_resource_proxy_type(upnp_type: string): boolean;

    unregister_resource_type(upnp_type: string): boolean;

    static get_default(): ResourceFactory;
}

export namespace RootDevice {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;

        available: boolean;
        description_dir: string;
        descriptionDir: string;
        description_doc: XMLDoc;
        descriptionDoc: XMLDoc;
        description_path: string;
        descriptionPath: string;
    }
}

export class RootDevice extends Device implements Gio.Initable {
    static $gtype: GObject.GType<RootDevice>;

    constructor(properties?: Partial<RootDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RootDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    available: boolean;
    description_dir: string;
    descriptionDir: string;
    description_doc: XMLDoc;
    descriptionDoc: XMLDoc;
    description_path: string;
    descriptionPath: string;

    // Constructors

    static ['new'](context: Context, description_path: string, description_dir: string): RootDevice;

    static new_full(
        context: Context,
        factory: ResourceFactory,
        description_doc: XMLDoc,
        description_path: string,
        description_dir: string
    ): RootDevice;

    // Members

    get_available(): boolean;

    get_description_dir(): string;

    get_description_path(): string;

    get_relative_location(): string;

    get_ssdp_resource_group(): GSSDP.ResourceGroup;

    set_available(available: boolean): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Service {
    export interface ConstructorProperties extends ServiceInfo.ConstructorProperties {
        [key: string]: any;

        root_device: RootDevice;
        rootDevice: RootDevice;
    }
}

export class Service extends ServiceInfo {
    static $gtype: GObject.GType<Service>;

    constructor(properties?: Partial<Service.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Service.ConstructorProperties>, ...args: any[]): void;

    // Properties
    root_device: RootDevice;
    rootDevice: RootDevice;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'action-invoked', callback: (_source: this, action: ServiceAction) => void): number;

    connect_after(signal: 'action-invoked', callback: (_source: this, action: ServiceAction) => void): number;

    emit(signal: 'action-invoked', action: ServiceAction): void;

    connect(
        signal: 'notify-failed',
        callback: (_source: this, callback_url: Soup.URI[], reason: GLib.Error) => void
    ): number;

    connect_after(
        signal: 'notify-failed',
        callback: (_source: this, callback_url: Soup.URI[], reason: GLib.Error) => void
    ): number;

    emit(signal: 'notify-failed', callback_url: Soup.URI[], reason: GLib.Error): void;

    connect(
        signal: 'query-variable',
        callback: (_source: this, variable: string, value: GObject.Value) => void
    ): number;

    connect_after(
        signal: 'query-variable',
        callback: (_source: this, variable: string, value: GObject.Value) => void
    ): number;

    emit(signal: 'query-variable', variable: string, value: any): void;

    // Members

    freeze_notify(): void;

    notify_value(variable: string, value: any): void;

    signals_autoconnect(user_data?: any | null): void;

    thaw_notify(): void;

    vfunc_action_invoked(action: ServiceAction): void;

    vfunc_query_variable(variable: string, value: any): void;
}

export namespace ServiceInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: Context;
        document: XMLDoc;
        element: any;
        location: string;
        service_type: string;
        serviceType: string;
        udn: string;
        url_base: Soup.URI;
        urlBase: Soup.URI;
    }
}

export abstract class ServiceInfo extends GObject.Object {
    static $gtype: GObject.GType<ServiceInfo>;

    constructor(properties?: Partial<ServiceInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServiceInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: Context;
    document: XMLDoc;
    element: any;
    location: string;
    service_type: string;
    serviceType: string;
    udn: string;
    url_base: Soup.URI;
    urlBase: Soup.URI;

    // Members

    get_context(): Context;

    get_control_url(): string;

    get_event_subscription_url(): string;

    get_id(): string;

    get_introspection_async(callback: ServiceIntrospectionCallback): void;

    get_introspection_async_full(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void;

    get_location(): string;

    get_scpd_url(): string;

    get_service_type(): string;

    get_udn(): string;

    get_url_base(): Soup.URI;

    introspect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    introspect_finish(res: Gio.AsyncResult): ServiceIntrospection;
}

export namespace ServiceIntrospection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        scpd: any;
    }
}

export class ServiceIntrospection extends GObject.Object {
    static $gtype: GObject.GType<ServiceIntrospection>;

    constructor(properties?: Partial<ServiceIntrospection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServiceIntrospection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    scpd: any;

    // Members

    get_action(action_name: string): ServiceActionInfo;

    get_state_variable(variable_name: string): ServiceStateVariableInfo;

    list_action_names(): string[];

    list_actions(): ServiceActionInfo[];

    list_state_variable_names(): string[];

    list_state_variables(): ServiceStateVariableInfo[];
}

export namespace ServiceProxy {
    export interface ConstructorProperties extends ServiceInfo.ConstructorProperties {
        [key: string]: any;

        subscribed: boolean;
    }
}

export class ServiceProxy extends ServiceInfo {
    static $gtype: GObject.GType<ServiceProxy>;

    constructor(properties?: Partial<ServiceProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServiceProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    subscribed: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'subscription-lost', callback: (_source: this, error: GLib.Error) => void): number;

    connect_after(signal: 'subscription-lost', callback: (_source: this, error: GLib.Error) => void): number;

    emit(signal: 'subscription-lost', error: GLib.Error): void;

    // Members

    add_notify(
        variable: string,
        type: GObject.GType,
        callback: ServiceProxyNotifyCallback,
        notify?: GLib.DestroyNotify | null
    ): boolean;

    add_raw_notify(callback: ServiceProxyNotifyCallback, notify?: GLib.DestroyNotify | null): boolean;

    begin_action_list(
        action: string,
        in_names: string[],
        in_values: GObject.Value[],
        callback: ServiceProxyActionCallback
    ): ServiceProxyAction;

    call_action(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null): ServiceProxyAction;

    call_action_async(
        action: ServiceProxyAction,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_action_finish(result: Gio.AsyncResult): ServiceProxyAction;

    cancel_action(action: ServiceProxyAction): void;

    end_action_hash(
        action: ServiceProxyAction,
        hash: GLib.HashTable<string, GObject.Value>
    ): [boolean, GLib.HashTable<string, GObject.Value>];

    end_action_list(
        action: ServiceProxyAction,
        out_names: string[],
        out_types: GObject.GType[]
    ): [boolean, GObject.Value[]];

    get_subscribed(): boolean;

    remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean;

    remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean;

    send_action_list(
        action: string,
        in_names: string[],
        in_values: GObject.Value[],
        out_names: string[],
        out_types: GObject.GType[]
    ): [boolean, GObject.Value[]];

    set_subscribed(subscribed: boolean): void;

    vfunc_subscription_lost(reason: GLib.Error): void;
}

export namespace WhiteList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        enabled: boolean;
        entries: string[];
    }
}

export class WhiteList extends GObject.Object {
    static $gtype: GObject.GType<WhiteList>;

    constructor(properties?: Partial<WhiteList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WhiteList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enabled: boolean;
    entries: string[];

    // Constructors

    static ['new'](): WhiteList;

    // Members

    add_entry(entry: string): boolean;

    add_entryv(entries: string[]): void;

    check_context(context: Context): boolean;

    clear(): void;

    get_enabled(): boolean;

    get_entries(): string[];

    is_empty(): boolean;

    remove_entry(entry: string): boolean;

    set_enabled(enable: boolean): void;
}

export namespace XMLDoc {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class XMLDoc extends GObject.Object {
    static $gtype: GObject.GType<XMLDoc>;

    constructor(properties?: Partial<XMLDoc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<XMLDoc.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](xml_doc: libxml2.Doc): XMLDoc;

    static new_from_path(path: string): XMLDoc;

    // Members

    get_doc(): libxml2.Doc;
}

export class ServiceAction {
    static $gtype: GObject.GType<ServiceAction>;

    constructor(copy: ServiceAction);

    // Members
    get_argument_count(): number;

    get_value(argument: string, type: GObject.GType): unknown;

    get_locales(): string[];

    get_message(): Soup.Message;

    get_name(): string;

    get_values(arg_names: string[], arg_types: GObject.GType[]): GObject.Value[];

    ['return'](): void;

    return_error(error_code: number, error_description: string): void;

    set_value(argument: string, value: any): void;

    set_values(arg_names: string[], arg_values: GObject.Value[]): void;
}

export class ServiceActionArgInfo {
    static $gtype: GObject.GType<ServiceActionArgInfo>;

    constructor(copy: ServiceActionArgInfo);

    // Fields
    name: string;
    direction: ServiceActionArgDirection;
    related_state_variable: string;
    retval: boolean;
}

export class ServiceActionInfo {
    static $gtype: GObject.GType<ServiceActionInfo>;

    constructor(copy: ServiceActionInfo);

    // Fields
    name: string;
    'arguments': ServiceActionArgInfo[];
}

export class ServiceProxyAction {
    static $gtype: GObject.GType<ServiceProxyAction>;

    constructor(action: string, in_names: string[], in_values: GObject.Value[]);
    constructor(copy: ServiceProxyAction);

    // Constructors
    static new_from_list(action: string, in_names: string[], in_values: GObject.Value[]): ServiceProxyAction;

    // Members
    get_result_hash(out_hash: GLib.HashTable<string, GObject.Value>): [boolean, GLib.HashTable<string, GObject.Value>];

    get_result_list(out_names: string[], out_types: GObject.GType[]): [boolean, GObject.Value[]];

    ref(): ServiceProxyAction;

    unref(): void;
}

export class ServiceStateVariableInfo {
    static $gtype: GObject.GType<ServiceStateVariableInfo>;

    constructor(copy: ServiceStateVariableInfo);

    // Fields
    name: string;
    send_events: boolean;
    is_numeric: boolean;
    type: GObject.GType;
    default_value: GObject.Value;
    minimum: GObject.Value;
    maximum: GObject.Value;
    step: GObject.Value;
    allowed_values: string[];
}

export interface AclNamespace {
    $gtype: GObject.GType<Acl>;
    prototype: AclPrototype;
}

export type Acl = AclPrototype;

export interface AclPrototype extends GObject.Object {
    // Members

    can_sync(): boolean;

    is_allowed(device: any | null, service: any | null, path: string, address: string, agent?: string | null): boolean;

    is_allowed_async(
        device: any | null,
        service: any | null,
        path: string,
        address: string,
        agent?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    is_allowed_finish(res: Gio.AsyncResult): boolean;

    vfunc_can_sync(): boolean;

    vfunc_is_allowed(
        device: any | null,
        service: any | null,
        path: string,
        address: string,
        agent?: string | null
    ): boolean;

    vfunc_is_allowed_async(
        device: any | null,
        service: any | null,
        path: string,
        address: string,
        agent?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean;
}

export const Acl: AclNamespace;
