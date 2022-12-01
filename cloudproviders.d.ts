/**
 * CloudProviders 0.3
 *
 * Generated from 0.3
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as Gio from './gio';
import * as GObject from './gobject';

export const ACCOUNT_DBUS_IFACE: string;
export const PROVIDER_DBUS_IFACE: string;

export function dbus_account_interface_info(): Gio.DBusInterfaceInfo;

export function dbus_account_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function dbus_provider_interface_info(): Gio.DBusInterfaceInfo;

export function dbus_provider_override_properties(klass: GObject.Object, property_id_begin: number): number;

export namespace AccountStatus {
    export const $gtype: GObject.GType<AccountStatus>;
}

export enum AccountStatus {
    INVALID = 0,
    IDLE = 1,
    SYNCING = 2,
    ERROR = 3,
}

export namespace Account {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        action_group: Gio.ActionGroup;
        actionGroup: Gio.ActionGroup;
        icon: Gio.Icon;
        menu_model: Gio.MenuModel;
        menuModel: Gio.MenuModel;
        name: string;
        path: string;
        status_details: string;
        statusDetails: string;
    }
}

export class Account extends GObject.Object {
    static $gtype: GObject.GType<Account>;

    constructor(properties?: Partial<Account.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Account.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action_group: Gio.ActionGroup;
    actionGroup: Gio.ActionGroup;
    icon: Gio.Icon;
    menu_model: Gio.MenuModel;
    menuModel: Gio.MenuModel;
    name: string;
    path: string;
    status_details: string;
    statusDetails: string;

    // Constructors

    static ['new'](proxy: Gio.DBusProxy): Account;

    // Members

    get_action_group(): Gio.ActionGroup;

    get_icon(): Gio.Icon;

    get_menu_model(): Gio.MenuModel;

    get_name(): string;

    get_path(): string;

    get_status(): AccountStatus;

    get_status_details(): string;
}

export namespace AccountExporter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        action_group: Gio.ActionGroup;
        actionGroup: Gio.ActionGroup;
        bus_name: string;
        busName: string;
        icon: Gio.Icon;
        menu_model: Gio.MenuModel;
        menuModel: Gio.MenuModel;
        name: string;
        path: string;
        provider: ProviderExporter;
        status_details: string;
        statusDetails: string;
    }
}

export class AccountExporter extends GObject.Object {
    static $gtype: GObject.GType<AccountExporter>;

    constructor(properties?: Partial<AccountExporter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AccountExporter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action_group: Gio.ActionGroup;
    actionGroup: Gio.ActionGroup;
    bus_name: string;
    busName: string;
    icon: Gio.Icon;
    menu_model: Gio.MenuModel;
    menuModel: Gio.MenuModel;
    name: string;
    path: string;
    provider: ProviderExporter;
    status_details: string;
    statusDetails: string;

    // Constructors

    static ['new'](provider: ProviderExporter, bus_name: string): AccountExporter;

    // Members

    set_action_group(action_group: Gio.ActionGroup): void;

    set_icon(icon: Gio.Icon): void;

    set_menu_model(menu_model: Gio.MenuModel): void;

    set_name(name: string): void;

    set_path(path: string): void;

    set_status(status: AccountStatus): void;

    set_status_details(status_details: string): void;
}

export namespace Collector {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Collector extends GObject.Object {
    static $gtype: GObject.GType<Collector>;

    constructor(properties?: Partial<Collector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Collector.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'providers-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'providers-changed', callback: (_source: this) => void): number;

    emit(signal: 'providers-changed'): void;

    // Members

    get_providers(): Provider[];

    update(): void;

    static dup_singleton(): Collector;
}

export namespace DbusAccountProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusAccountProxy
    extends Gio.DBusProxy
    implements DbusAccount, Gio.AsyncInitable<DbusAccountProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<DbusAccountProxy>;

    constructor(properties?: Partial<DbusAccountProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusAccountProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    icon: string;
    name: string;
    path: string;
    status: number;
    status_details: string;
    statusDetails: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): DbusAccountProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): DbusAccountProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DbusAccountProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DbusAccountProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DbusAccountProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DbusAccountProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): DbusAccountProxy;
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

export namespace DbusAccountSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusAccountSkeleton extends Gio.DBusInterfaceSkeleton implements DbusAccount, Gio.DBusInterface {
    static $gtype: GObject.GType<DbusAccountSkeleton>;

    constructor(properties?: Partial<DbusAccountSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusAccountSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    icon: string;
    name: string;
    path: string;
    status: number;
    status_details: string;
    statusDetails: string;

    // Constructors

    static ['new'](): DbusAccountSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace DbusObjectManagerClient {
    export interface ConstructorProperties extends Gio.DBusObjectManagerClient.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusObjectManagerClient
    extends Gio.DBusObjectManagerClient
    implements Gio.AsyncInitable<DbusObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
    static $gtype: GObject.GType<DbusObjectManagerClient>;

    constructor(properties?: Partial<DbusObjectManagerClient.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusObjectManagerClient.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): DbusObjectManagerClient;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DbusObjectManagerClient;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DbusObjectManagerClient;

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
        callback?: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;
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

export namespace DbusObjectProxy {
    export interface ConstructorProperties extends Gio.DBusObjectProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusObjectProxy extends Gio.DBusObjectProxy implements DbusObject, Gio.DBusObject {
    static $gtype: GObject.GType<DbusObjectProxy>;

    constructor(properties?: Partial<DbusObjectProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusObjectProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    account: DbusAccount;
    provider: DbusProvider;

    // Constructors

    static ['new'](connection: Gio.DBusConnection, object_path: string): DbusObjectProxy;

    // Implemented Members

    get_account(): DbusAccount | null;

    get_provider(): DbusProvider | null;

    get_interface(interface_name: string): Gio.DBusInterface;

    get_interfaces(): Gio.DBusInterface[];

    get_object_path(): string;

    vfunc_get_interface(interface_name: string): Gio.DBusInterface;

    vfunc_get_interfaces(): Gio.DBusInterface[];

    vfunc_get_object_path(): string;

    vfunc_interface_added(interface_: Gio.DBusInterface): void;

    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
}

export namespace DbusObjectSkeleton {
    export interface ConstructorProperties extends Gio.DBusObjectSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusObjectSkeleton extends Gio.DBusObjectSkeleton implements DbusObject, Gio.DBusObject {
    static $gtype: GObject.GType<DbusObjectSkeleton>;

    constructor(properties?: Partial<DbusObjectSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusObjectSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    account: DbusAccount;
    provider: DbusProvider;

    // Constructors

    static ['new'](object_path: string): DbusObjectSkeleton;

    // Members

    set_account(interface_?: DbusAccount | null): void;

    set_provider(interface_?: DbusProvider | null): void;

    // Implemented Members

    get_account(): DbusAccount | null;

    get_provider(): DbusProvider | null;

    get_interface(interface_name: string): Gio.DBusInterface;

    get_interfaces(): Gio.DBusInterface[];

    get_object_path(): string;

    vfunc_get_interface(interface_name: string): Gio.DBusInterface;

    vfunc_get_interfaces(): Gio.DBusInterface[];

    vfunc_get_object_path(): string;

    vfunc_interface_added(interface_: Gio.DBusInterface): void;

    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
}

export namespace DbusProviderProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusProviderProxy
    extends Gio.DBusProxy
    implements DbusProvider, Gio.AsyncInitable<DbusProviderProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<DbusProviderProxy>;

    constructor(properties?: Partial<DbusProviderProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusProviderProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    name: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): DbusProviderProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): DbusProviderProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DbusProviderProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DbusProviderProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DbusProviderProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DbusProviderProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): DbusProviderProxy;
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

export namespace DbusProviderSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class DbusProviderSkeleton extends Gio.DBusInterfaceSkeleton implements DbusProvider, Gio.DBusInterface {
    static $gtype: GObject.GType<DbusProviderSkeleton>;

    constructor(properties?: Partial<DbusProviderSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DbusProviderSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    name: string;

    // Constructors

    static ['new'](): DbusProviderSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace Provider {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
    }
}

export class Provider extends GObject.Object {
    static $gtype: GObject.GType<Provider>;

    constructor(properties?: Partial<Provider.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Provider.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'accounts-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'accounts-changed', callback: (_source: this) => void): number;

    emit(signal: 'accounts-changed'): void;

    connect(signal: 'removed', callback: (_source: this) => void): number;

    connect_after(signal: 'removed', callback: (_source: this) => void): number;

    emit(signal: 'removed'): void;

    // Constructors

    static ['new'](bus_name: string, object_path: string): Provider;

    // Members

    get_accounts(): Account[];

    get_name(): string;
}

export namespace ProviderExporter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        bus: Gio.DBusConnection;
        bus_name: string;
        busName: string;
        bus_path: string;
        busPath: string;
        name: string;
    }
}

export class ProviderExporter extends GObject.Object {
    static $gtype: GObject.GType<ProviderExporter>;

    constructor(properties?: Partial<ProviderExporter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProviderExporter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bus: Gio.DBusConnection;
    bus_name: string;
    busName: string;
    bus_path: string;
    busPath: string;
    name: string;

    // Constructors

    static ['new'](bus: Gio.DBusConnection, bus_name: string, bus_path: string): ProviderExporter;

    // Members

    get_name(): string;

    remove_account(account: AccountExporter): void;

    set_name(name: string): void;
}

export class DbusAccountProxyPrivate {
    static $gtype: GObject.GType<DbusAccountProxyPrivate>;

    constructor(copy: DbusAccountProxyPrivate);
}

export class DbusAccountSkeletonPrivate {
    static $gtype: GObject.GType<DbusAccountSkeletonPrivate>;

    constructor(copy: DbusAccountSkeletonPrivate);
}

export class DbusObjectManagerClientPrivate {
    static $gtype: GObject.GType<DbusObjectManagerClientPrivate>;

    constructor(copy: DbusObjectManagerClientPrivate);
}

export class DbusObjectProxyPrivate {
    static $gtype: GObject.GType<DbusObjectProxyPrivate>;

    constructor(copy: DbusObjectProxyPrivate);
}

export class DbusObjectSkeletonPrivate {
    static $gtype: GObject.GType<DbusObjectSkeletonPrivate>;

    constructor(copy: DbusObjectSkeletonPrivate);
}

export class DbusProviderProxyPrivate {
    static $gtype: GObject.GType<DbusProviderProxyPrivate>;

    constructor(copy: DbusProviderProxyPrivate);
}

export class DbusProviderSkeletonPrivate {
    static $gtype: GObject.GType<DbusProviderSkeletonPrivate>;

    constructor(copy: DbusProviderSkeletonPrivate);
}

export interface DbusAccountNamespace {
    $gtype: GObject.GType<DbusAccount>;
    prototype: DbusAccountPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type DbusAccount = DbusAccountPrototype;

export interface DbusAccountPrototype extends GObject.Object {
    // Properties
    icon: string;
    name: string;
    path: string;
    status: number;
    status_details: string;
    statusDetails: string;
}

export const DbusAccount: DbusAccountNamespace;

export interface DbusObjectNamespace {
    $gtype: GObject.GType<DbusObject>;
    prototype: DbusObjectPrototype;
}

export type DbusObject = DbusObjectPrototype;

export interface DbusObjectPrototype extends Gio.DBusObject {
    // Properties
    account: DbusAccount;
    provider: DbusProvider;

    // Members

    get_account(): DbusAccount | null;

    get_provider(): DbusProvider | null;
}

export const DbusObject: DbusObjectNamespace;

export interface DbusProviderNamespace {
    $gtype: GObject.GType<DbusProvider>;
    prototype: DbusProviderPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type DbusProvider = DbusProviderPrototype;

export interface DbusProviderPrototype extends GObject.Object {
    // Properties
    name: string;
}

export const DbusProvider: DbusProviderNamespace;
