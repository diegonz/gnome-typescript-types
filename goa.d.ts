/**
 * Goa 1.0
 *
 * Generated from 3.38.0
 */

import * as Gio from './gio';
import * as GObject from './gobject';
import * as GLib from './glib';

export const ERROR_NUM_ENTRIES: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function account_interface_info(): Gio.DBusInterfaceInfo;

export function account_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function calendar_interface_info(): Gio.DBusInterfaceInfo;

export function calendar_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function chat_interface_info(): Gio.DBusInterfaceInfo;

export function chat_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function check_version(required_major: number, required_minor: number, required_micro: number): string;

export function contacts_interface_info(): Gio.DBusInterfaceInfo;

export function contacts_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function documents_interface_info(): Gio.DBusInterfaceInfo;

export function documents_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function error_quark(): GLib.Quark;

export function exchange_interface_info(): Gio.DBusInterfaceInfo;

export function exchange_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function files_interface_info(): Gio.DBusInterfaceInfo;

export function files_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function mail_interface_info(): Gio.DBusInterfaceInfo;

export function mail_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function manager_interface_info(): Gio.DBusInterfaceInfo;

export function manager_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function maps_interface_info(): Gio.DBusInterfaceInfo;

export function maps_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function media_server_interface_info(): Gio.DBusInterfaceInfo;

export function media_server_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function music_interface_info(): Gio.DBusInterfaceInfo;

export function music_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function oauth2_based_interface_info(): Gio.DBusInterfaceInfo;

export function oauth2_based_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function oauth_based_interface_info(): Gio.DBusInterfaceInfo;

export function oauth_based_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function password_based_interface_info(): Gio.DBusInterfaceInfo;

export function password_based_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function photos_interface_info(): Gio.DBusInterfaceInfo;

export function photos_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function printers_interface_info(): Gio.DBusInterfaceInfo;

export function printers_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function read_later_interface_info(): Gio.DBusInterfaceInfo;

export function read_later_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function ticketing_interface_info(): Gio.DBusInterfaceInfo;

export function ticketing_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function todo_interface_info(): Gio.DBusInterfaceInfo;

export function todo_override_properties(klass: GObject.Object, property_id_begin: number): number;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static FAILED: number;
    static NOT_SUPPORTED: number;
    static DIALOG_DISMISSED: number;
    static ACCOUNT_EXISTS: number;
    static NOT_AUTHORIZED: number;
    static SSL: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace AccountProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class AccountProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<AccountProxy>, Gio.DBusInterface, Gio.Initable, Account {
    static $gtype: GObject.GType<AccountProxy>;

    constructor(properties?: Partial<AccountProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AccountProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    attention_needed: boolean;
    attentionNeeded: boolean;
    calendar_disabled: boolean;
    calendarDisabled: boolean;
    chat_disabled: boolean;
    chatDisabled: boolean;
    contacts_disabled: boolean;
    contactsDisabled: boolean;
    documents_disabled: boolean;
    documentsDisabled: boolean;
    files_disabled: boolean;
    filesDisabled: boolean;
    id: string;
    identity: string;
    is_locked: boolean;
    isLocked: boolean;
    is_temporary: boolean;
    isTemporary: boolean;
    mail_disabled: boolean;
    mailDisabled: boolean;
    maps_disabled: boolean;
    mapsDisabled: boolean;
    music_disabled: boolean;
    musicDisabled: boolean;
    photos_disabled: boolean;
    photosDisabled: boolean;
    presentation_identity: string;
    presentationIdentity: string;
    printers_disabled: boolean;
    printersDisabled: boolean;
    provider_icon: string;
    providerIcon: string;
    provider_name: string;
    providerName: string;
    provider_type: string;
    providerType: string;
    read_later_disabled: boolean;
    readLaterDisabled: boolean;
    ticketing_disabled: boolean;
    ticketingDisabled: boolean;
    todo_disabled: boolean;
    todoDisabled: boolean;

    // Constructors

    static new_finish(res: Gio.AsyncResult): AccountProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): AccountProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): AccountProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): AccountProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<AccountProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<AccountProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): AccountProxy;
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

    call_ensure_credentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_ensure_credentials_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): [boolean, number | null];

    call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_remove_finish(res: Gio.AsyncResult): boolean;

    call_remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void;

    complete_remove(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean;

    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace AccountSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class AccountSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Account {
    static $gtype: GObject.GType<AccountSkeleton>;

    constructor(properties?: Partial<AccountSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AccountSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    attention_needed: boolean;
    attentionNeeded: boolean;
    calendar_disabled: boolean;
    calendarDisabled: boolean;
    chat_disabled: boolean;
    chatDisabled: boolean;
    contacts_disabled: boolean;
    contactsDisabled: boolean;
    documents_disabled: boolean;
    documentsDisabled: boolean;
    files_disabled: boolean;
    filesDisabled: boolean;
    id: string;
    identity: string;
    is_locked: boolean;
    isLocked: boolean;
    is_temporary: boolean;
    isTemporary: boolean;
    mail_disabled: boolean;
    mailDisabled: boolean;
    maps_disabled: boolean;
    mapsDisabled: boolean;
    music_disabled: boolean;
    musicDisabled: boolean;
    photos_disabled: boolean;
    photosDisabled: boolean;
    presentation_identity: string;
    presentationIdentity: string;
    printers_disabled: boolean;
    printersDisabled: boolean;
    provider_icon: string;
    providerIcon: string;
    provider_name: string;
    providerName: string;
    provider_type: string;
    providerType: string;
    read_later_disabled: boolean;
    readLaterDisabled: boolean;
    ticketing_disabled: boolean;
    ticketingDisabled: boolean;
    todo_disabled: boolean;
    todoDisabled: boolean;

    // Constructors

    static ['new'](): AccountSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_ensure_credentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_ensure_credentials_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): [boolean, number | null];

    call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_remove_finish(res: Gio.AsyncResult): boolean;

    call_remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void;

    complete_remove(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean;

    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace CalendarProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalendarProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<CalendarProxy>, Gio.DBusInterface, Gio.Initable, Calendar {
    static $gtype: GObject.GType<CalendarProxy>;

    constructor(properties?: Partial<CalendarProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): CalendarProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): CalendarProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): CalendarProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): CalendarProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<CalendarProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<CalendarProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): CalendarProxy;
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

export namespace CalendarSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalendarSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Calendar {
    static $gtype: GObject.GType<CalendarSkeleton>;

    constructor(properties?: Partial<CalendarSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;

    // Constructors

    static ['new'](): CalendarSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace ChatProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ChatProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ChatProxy>, Gio.DBusInterface, Gio.Initable, Chat {
    static $gtype: GObject.GType<ChatProxy>;

    constructor(properties?: Partial<ChatProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChatProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ChatProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ChatProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ChatProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ChatProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ChatProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ChatProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ChatProxy;
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

export namespace ChatSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ChatSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Chat {
    static $gtype: GObject.GType<ChatSkeleton>;

    constructor(properties?: Partial<ChatSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChatSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ChatSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        object_manager: Gio.DBusObjectManager;
        objectManager: Gio.DBusObjectManager;
    }
}

export class Client extends GObject.Object implements Gio.AsyncInitable<Client>, Gio.Initable {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    object_manager: Gio.DBusObjectManager;
    objectManager: Gio.DBusObjectManager;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'account-added', callback: (_source: this, object: Object) => void): number;

    connect_after(signal: 'account-added', callback: (_source: this, object: Object) => void): number;

    emit(signal: 'account-added', object: Object): void;

    connect(signal: 'account-changed', callback: (_source: this, object: Object) => void): number;

    connect_after(signal: 'account-changed', callback: (_source: this, object: Object) => void): number;

    emit(signal: 'account-changed', object: Object): void;

    connect(signal: 'account-removed', callback: (_source: this, object: Object) => void): number;

    connect_after(signal: 'account-removed', callback: (_source: this, object: Object) => void): number;

    emit(signal: 'account-removed', object: Object): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): Client;
    static new_finish(...args: never[]): never;

    static new_sync(cancellable?: Gio.Cancellable | null): Client;

    // Members

    get_accounts(): Object[];

    get_manager(): Manager;

    get_object_manager(): Gio.DBusObjectManager;

    lookup_by_id(id: string): Object;

    static new(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

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

export namespace ContactsProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContactsProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ContactsProxy>, Gio.DBusInterface, Gio.Initable, Contacts {
    static $gtype: GObject.GType<ContactsProxy>;

    constructor(properties?: Partial<ContactsProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContactsProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ContactsProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ContactsProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ContactsProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ContactsProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ContactsProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ContactsProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ContactsProxy;
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

export namespace ContactsSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContactsSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Contacts {
    static $gtype: GObject.GType<ContactsSkeleton>;

    constructor(properties?: Partial<ContactsSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContactsSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;

    // Constructors

    static ['new'](): ContactsSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace DocumentsProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<DocumentsProxy>, Gio.DBusInterface, Gio.Initable, Documents {
    static $gtype: GObject.GType<DocumentsProxy>;

    constructor(properties?: Partial<DocumentsProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): DocumentsProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): DocumentsProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DocumentsProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): DocumentsProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DocumentsProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<DocumentsProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): DocumentsProxy;
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

export namespace DocumentsSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Documents {
    static $gtype: GObject.GType<DocumentsSkeleton>;

    constructor(properties?: Partial<DocumentsSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): DocumentsSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace ExchangeProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ExchangeProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ExchangeProxy>, Gio.DBusInterface, Gio.Initable, Exchange {
    static $gtype: GObject.GType<ExchangeProxy>;

    constructor(properties?: Partial<ExchangeProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExchangeProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    host: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ExchangeProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ExchangeProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ExchangeProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ExchangeProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ExchangeProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ExchangeProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ExchangeProxy;
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

export namespace ExchangeSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ExchangeSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Exchange {
    static $gtype: GObject.GType<ExchangeSkeleton>;

    constructor(properties?: Partial<ExchangeSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExchangeSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    host: string;

    // Constructors

    static ['new'](): ExchangeSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace FilesProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilesProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<FilesProxy>, Gio.DBusInterface, Gio.Initable, Files {
    static $gtype: GObject.GType<FilesProxy>;

    constructor(properties?: Partial<FilesProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilesProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): FilesProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): FilesProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): FilesProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): FilesProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<FilesProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<FilesProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): FilesProxy;
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

export namespace FilesSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilesSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Files {
    static $gtype: GObject.GType<FilesSkeleton>;

    constructor(properties?: Partial<FilesSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilesSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;

    // Constructors

    static ['new'](): FilesSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace MailProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class MailProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<MailProxy>, Gio.DBusInterface, Gio.Initable, Mail {
    static $gtype: GObject.GType<MailProxy>;

    constructor(properties?: Partial<MailProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MailProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    email_address: string;
    emailAddress: string;
    imap_accept_ssl_errors: boolean;
    imapAcceptSslErrors: boolean;
    imap_host: string;
    imapHost: string;
    imap_supported: boolean;
    imapSupported: boolean;
    imap_use_ssl: boolean;
    imapUseSsl: boolean;
    imap_use_tls: boolean;
    imapUseTls: boolean;
    imap_user_name: string;
    imapUserName: string;
    name: string;
    smtp_accept_ssl_errors: boolean;
    smtpAcceptSslErrors: boolean;
    smtp_auth_login: boolean;
    smtpAuthLogin: boolean;
    smtp_auth_plain: boolean;
    smtpAuthPlain: boolean;
    smtp_auth_xoauth2: boolean;
    smtpAuthXoauth2: boolean;
    smtp_host: string;
    smtpHost: string;
    smtp_supported: boolean;
    smtpSupported: boolean;
    smtp_use_auth: boolean;
    smtpUseAuth: boolean;
    smtp_use_ssl: boolean;
    smtpUseSsl: boolean;
    smtp_use_tls: boolean;
    smtpUseTls: boolean;
    smtp_user_name: string;
    smtpUserName: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MailProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): MailProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MailProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MailProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MailProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MailProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): MailProxy;
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

export namespace MailSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class MailSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Mail {
    static $gtype: GObject.GType<MailSkeleton>;

    constructor(properties?: Partial<MailSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MailSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    email_address: string;
    emailAddress: string;
    imap_accept_ssl_errors: boolean;
    imapAcceptSslErrors: boolean;
    imap_host: string;
    imapHost: string;
    imap_supported: boolean;
    imapSupported: boolean;
    imap_use_ssl: boolean;
    imapUseSsl: boolean;
    imap_use_tls: boolean;
    imapUseTls: boolean;
    imap_user_name: string;
    imapUserName: string;
    name: string;
    smtp_accept_ssl_errors: boolean;
    smtpAcceptSslErrors: boolean;
    smtp_auth_login: boolean;
    smtpAuthLogin: boolean;
    smtp_auth_plain: boolean;
    smtpAuthPlain: boolean;
    smtp_auth_xoauth2: boolean;
    smtpAuthXoauth2: boolean;
    smtp_host: string;
    smtpHost: string;
    smtp_supported: boolean;
    smtpSupported: boolean;
    smtp_use_auth: boolean;
    smtpUseAuth: boolean;
    smtp_use_ssl: boolean;
    smtpUseSsl: boolean;
    smtp_use_tls: boolean;
    smtpUseTls: boolean;
    smtp_user_name: string;
    smtpUserName: string;

    // Constructors

    static ['new'](): MailSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
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

    call_add_account(
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_account_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_add_account_sync(
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_is_supported_provider(
        arg_provider_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_is_supported_provider_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_is_supported_provider_sync(
        arg_provider_type: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean | null];

    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void;

    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void;

    vfunc_handle_add_account(
        invocation: Gio.DBusMethodInvocation,
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant
    ): boolean;

    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean;
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

    // Constructors

    static ['new'](): ManagerSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_add_account(
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_account_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_add_account_sync(
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_is_supported_provider(
        arg_provider_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_is_supported_provider_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_is_supported_provider_sync(
        arg_provider_type: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean | null];

    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void;

    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void;

    vfunc_handle_add_account(
        invocation: Gio.DBusMethodInvocation,
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant
    ): boolean;

    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean;
}

export namespace MapsProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class MapsProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<MapsProxy>, Gio.DBusInterface, Gio.Initable, Maps {
    static $gtype: GObject.GType<MapsProxy>;

    constructor(properties?: Partial<MapsProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MapsProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MapsProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): MapsProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MapsProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MapsProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MapsProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MapsProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): MapsProxy;
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

export namespace MapsSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class MapsSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Maps {
    static $gtype: GObject.GType<MapsSkeleton>;

    constructor(properties?: Partial<MapsSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MapsSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): MapsSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace MediaServerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class MediaServerProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<MediaServerProxy>, Gio.DBusInterface, Gio.Initable, MediaServer {
    static $gtype: GObject.GType<MediaServerProxy>;

    constructor(properties?: Partial<MediaServerProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaServerProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    dlna_supported: boolean;
    dlnaSupported: boolean;
    udn: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MediaServerProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): MediaServerProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MediaServerProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MediaServerProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MediaServerProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MediaServerProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): MediaServerProxy;
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

export namespace MediaServerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class MediaServerSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, MediaServer {
    static $gtype: GObject.GType<MediaServerSkeleton>;

    constructor(properties?: Partial<MediaServerSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaServerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    dlna_supported: boolean;
    dlnaSupported: boolean;
    udn: string;

    // Constructors

    static ['new'](): MediaServerSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace MusicProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class MusicProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<MusicProxy>, Gio.DBusInterface, Gio.Initable, Music {
    static $gtype: GObject.GType<MusicProxy>;

    constructor(properties?: Partial<MusicProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MusicProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MusicProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): MusicProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MusicProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): MusicProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MusicProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MusicProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): MusicProxy;
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

export namespace MusicSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class MusicSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Music {
    static $gtype: GObject.GType<MusicSkeleton>;

    constructor(properties?: Partial<MusicSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MusicSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): MusicSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace OAuth2BasedProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuth2BasedProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<OAuth2BasedProxy>, Gio.DBusInterface, Gio.Initable, OAuth2Based {
    static $gtype: GObject.GType<OAuth2BasedProxy>;

    constructor(properties?: Partial<OAuth2BasedProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2BasedProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    client_id: string;
    clientId: string;
    client_secret: string;
    clientSecret: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): OAuth2BasedProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): OAuth2BasedProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): OAuth2BasedProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): OAuth2BasedProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<OAuth2BasedProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<OAuth2BasedProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): OAuth2BasedProxy;
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

    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null, number | null];

    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, number | null];

    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void;

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace OAuth2BasedSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuth2BasedSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, OAuth2Based {
    static $gtype: GObject.GType<OAuth2BasedSkeleton>;

    constructor(properties?: Partial<OAuth2BasedSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2BasedSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    client_id: string;
    clientId: string;
    client_secret: string;
    clientSecret: string;

    // Constructors

    static ['new'](): OAuth2BasedSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null, number | null];

    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, number | null];

    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void;

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace OAuthBasedProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuthBasedProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<OAuthBasedProxy>, Gio.DBusInterface, Gio.Initable, OAuthBased {
    static $gtype: GObject.GType<OAuthBasedProxy>;

    constructor(properties?: Partial<OAuthBasedProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuthBasedProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    consumer_key: string;
    consumerKey: string;
    consumer_secret: string;
    consumerSecret: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): OAuthBasedProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): OAuthBasedProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): OAuthBasedProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): OAuthBasedProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<OAuthBasedProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<OAuthBasedProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): OAuthBasedProxy;
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

    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null, string | null, number | null];

    call_get_access_token_sync(
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null, number | null];

    complete_get_access_token(
        invocation: Gio.DBusMethodInvocation,
        access_token: string,
        access_token_secret: string,
        expires_in: number
    ): void;

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace OAuthBasedSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuthBasedSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, OAuthBased {
    static $gtype: GObject.GType<OAuthBasedSkeleton>;

    constructor(properties?: Partial<OAuthBasedSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuthBasedSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    consumer_key: string;
    consumerKey: string;
    consumer_secret: string;
    consumerSecret: string;

    // Constructors

    static ['new'](): OAuthBasedSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null, string | null, number | null];

    call_get_access_token_sync(
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null, number | null];

    complete_get_access_token(
        invocation: Gio.DBusMethodInvocation,
        access_token: string,
        access_token_secret: string,
        expires_in: number
    ): void;

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
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

    account: Account;
    calendar: Calendar;
    chat: Chat;
    contacts: Contacts;
    documents: Documents;
    exchange: Exchange;
    files: Files;
    mail: Mail;
    manager: Manager;
    maps: Maps;
    media_server: MediaServer;
    mediaServer: MediaServer;
    music: Music;
    oauth_based: OAuthBased;
    oauthBased: OAuthBased;
    oauth2_based: OAuth2Based;
    oauth2Based: OAuth2Based;
    password_based: PasswordBased;
    passwordBased: PasswordBased;
    photos: Photos;
    printers: Printers;
    read_later: ReadLater;
    readLater: ReadLater;
    ticketing: Ticketing;
    todo: Todo;

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

    get_account(): Account | null;

    get_calendar(): Calendar | null;

    get_chat(): Chat | null;

    get_contacts(): Contacts | null;

    get_documents(): Documents | null;

    get_exchange(): Exchange | null;

    get_files(): Files | null;

    get_mail(): Mail | null;

    get_manager(): Manager | null;

    get_maps(): Maps | null;

    get_media_server(): MediaServer | null;

    get_music(): Music | null;

    get_oauth2_based(): OAuth2Based | null;

    get_oauth_based(): OAuthBased | null;

    get_password_based(): PasswordBased | null;

    get_photos(): Photos | null;

    get_printers(): Printers | null;

    get_read_later(): ReadLater | null;

    get_ticketing(): Ticketing | null;

    get_todo(): Todo | null;
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

    account: Account;
    calendar: Calendar;
    chat: Chat;
    contacts: Contacts;
    documents: Documents;
    exchange: Exchange;
    files: Files;
    mail: Mail;
    manager: Manager;
    maps: Maps;
    media_server: MediaServer;
    mediaServer: MediaServer;
    music: Music;
    oauth_based: OAuthBased;
    oauthBased: OAuthBased;
    oauth2_based: OAuth2Based;
    oauth2Based: OAuth2Based;
    password_based: PasswordBased;
    passwordBased: PasswordBased;
    photos: Photos;
    printers: Printers;
    read_later: ReadLater;
    readLater: ReadLater;
    ticketing: Ticketing;
    todo: Todo;

    // Constructors

    static ['new'](object_path: string): ObjectSkeleton;

    // Members

    set_account(interface_?: Account | null): void;

    set_calendar(interface_?: Calendar | null): void;

    set_chat(interface_?: Chat | null): void;

    set_contacts(interface_?: Contacts | null): void;

    set_documents(interface_?: Documents | null): void;

    set_exchange(interface_?: Exchange | null): void;

    set_files(interface_?: Files | null): void;

    set_mail(interface_?: Mail | null): void;

    set_manager(interface_?: Manager | null): void;

    set_maps(interface_?: Maps | null): void;

    set_media_server(interface_?: MediaServer | null): void;

    set_music(interface_?: Music | null): void;

    set_oauth2_based(interface_?: OAuth2Based | null): void;

    set_oauth_based(interface_?: OAuthBased | null): void;

    set_password_based(interface_?: PasswordBased | null): void;

    set_photos(interface_?: Photos | null): void;

    set_printers(interface_?: Printers | null): void;

    set_read_later(interface_?: ReadLater | null): void;

    set_ticketing(interface_?: Ticketing | null): void;

    set_todo(interface_?: Todo | null): void;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface;

    get_interfaces(): Gio.DBusInterface[];

    get_object_path(): string;

    vfunc_get_interface(interface_name: string): Gio.DBusInterface;

    vfunc_get_interfaces(): Gio.DBusInterface[];

    vfunc_get_object_path(): string;

    vfunc_interface_added(interface_: Gio.DBusInterface): void;

    vfunc_interface_removed(interface_: Gio.DBusInterface): void;

    get_account(): Account | null;

    get_calendar(): Calendar | null;

    get_chat(): Chat | null;

    get_contacts(): Contacts | null;

    get_documents(): Documents | null;

    get_exchange(): Exchange | null;

    get_files(): Files | null;

    get_mail(): Mail | null;

    get_manager(): Manager | null;

    get_maps(): Maps | null;

    get_media_server(): MediaServer | null;

    get_music(): Music | null;

    get_oauth2_based(): OAuth2Based | null;

    get_oauth_based(): OAuthBased | null;

    get_password_based(): PasswordBased | null;

    get_photos(): Photos | null;

    get_printers(): Printers | null;

    get_read_later(): ReadLater | null;

    get_ticketing(): Ticketing | null;

    get_todo(): Todo | null;
}

export namespace PasswordBasedProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class PasswordBasedProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<PasswordBasedProxy>, Gio.DBusInterface, Gio.Initable, PasswordBased {
    static $gtype: GObject.GType<PasswordBasedProxy>;

    constructor(properties?: Partial<PasswordBasedProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PasswordBasedProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): PasswordBasedProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): PasswordBasedProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PasswordBasedProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PasswordBasedProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PasswordBasedProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PasswordBasedProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): PasswordBasedProxy;
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

    call_get_password(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_password_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void;

    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
}

export namespace PasswordBasedSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class PasswordBasedSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, PasswordBased {
    static $gtype: GObject.GType<PasswordBasedSkeleton>;

    constructor(properties?: Partial<PasswordBasedSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PasswordBasedSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): PasswordBasedSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_get_password(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_password_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void;

    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
}

export namespace PhotosProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class PhotosProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<PhotosProxy>, Gio.DBusInterface, Gio.Initable, Photos {
    static $gtype: GObject.GType<PhotosProxy>;

    constructor(properties?: Partial<PhotosProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PhotosProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): PhotosProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): PhotosProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PhotosProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PhotosProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PhotosProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PhotosProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): PhotosProxy;
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

export namespace PhotosSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class PhotosSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Photos {
    static $gtype: GObject.GType<PhotosSkeleton>;

    constructor(properties?: Partial<PhotosSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PhotosSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): PhotosSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace PrintersProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class PrintersProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<PrintersProxy>, Gio.DBusInterface, Gio.Initable, Printers {
    static $gtype: GObject.GType<PrintersProxy>;

    constructor(properties?: Partial<PrintersProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PrintersProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): PrintersProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): PrintersProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PrintersProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): PrintersProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PrintersProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PrintersProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): PrintersProxy;
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

export namespace PrintersSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class PrintersSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Printers {
    static $gtype: GObject.GType<PrintersSkeleton>;

    constructor(properties?: Partial<PrintersSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PrintersSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): PrintersSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace ReadLaterProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class ReadLaterProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<ReadLaterProxy>, Gio.DBusInterface, Gio.Initable, ReadLater {
    static $gtype: GObject.GType<ReadLaterProxy>;

    constructor(properties?: Partial<ReadLaterProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ReadLaterProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ReadLaterProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): ReadLaterProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ReadLaterProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ReadLaterProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ReadLaterProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ReadLaterProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): ReadLaterProxy;
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

export namespace ReadLaterSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class ReadLaterSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, ReadLater {
    static $gtype: GObject.GType<ReadLaterSkeleton>;

    constructor(properties?: Partial<ReadLaterSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ReadLaterSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ReadLaterSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export namespace TicketingProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class TicketingProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<TicketingProxy>, Gio.DBusInterface, Gio.Initable, Ticketing {
    static $gtype: GObject.GType<TicketingProxy>;

    constructor(properties?: Partial<TicketingProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TicketingProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    details: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): TicketingProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): TicketingProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): TicketingProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): TicketingProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<TicketingProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<TicketingProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): TicketingProxy;
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

    call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_ticket_finish(res: Gio.AsyncResult): boolean;

    call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean;

    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace TicketingSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class TicketingSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Ticketing {
    static $gtype: GObject.GType<TicketingSkeleton>;

    constructor(properties?: Partial<TicketingSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TicketingSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    details: GLib.Variant;

    // Constructors

    static ['new'](): TicketingSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_ticket_finish(res: Gio.AsyncResult): boolean;

    call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean;

    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean;
}

export namespace TodoProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class TodoProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<TodoProxy>, Gio.DBusInterface, Gio.Initable, Todo {
    static $gtype: GObject.GType<TodoProxy>;

    constructor(properties?: Partial<TodoProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TodoProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): TodoProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): TodoProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): TodoProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): TodoProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<TodoProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<TodoProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): TodoProxy;
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

export namespace TodoSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class TodoSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, Todo {
    static $gtype: GObject.GType<TodoSkeleton>;

    constructor(properties?: Partial<TodoSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TodoSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): TodoSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export class AccountProxyPrivate {
    static $gtype: GObject.GType<AccountProxyPrivate>;

    constructor(copy: AccountProxyPrivate);
}

export class AccountSkeletonPrivate {
    static $gtype: GObject.GType<AccountSkeletonPrivate>;

    constructor(copy: AccountSkeletonPrivate);
}

export class CalendarProxyPrivate {
    static $gtype: GObject.GType<CalendarProxyPrivate>;

    constructor(copy: CalendarProxyPrivate);
}

export class CalendarSkeletonPrivate {
    static $gtype: GObject.GType<CalendarSkeletonPrivate>;

    constructor(copy: CalendarSkeletonPrivate);
}

export class ChatProxyPrivate {
    static $gtype: GObject.GType<ChatProxyPrivate>;

    constructor(copy: ChatProxyPrivate);
}

export class ChatSkeletonPrivate {
    static $gtype: GObject.GType<ChatSkeletonPrivate>;

    constructor(copy: ChatSkeletonPrivate);
}

export class ContactsProxyPrivate {
    static $gtype: GObject.GType<ContactsProxyPrivate>;

    constructor(copy: ContactsProxyPrivate);
}

export class ContactsSkeletonPrivate {
    static $gtype: GObject.GType<ContactsSkeletonPrivate>;

    constructor(copy: ContactsSkeletonPrivate);
}

export class DocumentsProxyPrivate {
    static $gtype: GObject.GType<DocumentsProxyPrivate>;

    constructor(copy: DocumentsProxyPrivate);
}

export class DocumentsSkeletonPrivate {
    static $gtype: GObject.GType<DocumentsSkeletonPrivate>;

    constructor(copy: DocumentsSkeletonPrivate);
}

export class ExchangeProxyPrivate {
    static $gtype: GObject.GType<ExchangeProxyPrivate>;

    constructor(copy: ExchangeProxyPrivate);
}

export class ExchangeSkeletonPrivate {
    static $gtype: GObject.GType<ExchangeSkeletonPrivate>;

    constructor(copy: ExchangeSkeletonPrivate);
}

export class FilesProxyPrivate {
    static $gtype: GObject.GType<FilesProxyPrivate>;

    constructor(copy: FilesProxyPrivate);
}

export class FilesSkeletonPrivate {
    static $gtype: GObject.GType<FilesSkeletonPrivate>;

    constructor(copy: FilesSkeletonPrivate);
}

export class MailProxyPrivate {
    static $gtype: GObject.GType<MailProxyPrivate>;

    constructor(copy: MailProxyPrivate);
}

export class MailSkeletonPrivate {
    static $gtype: GObject.GType<MailSkeletonPrivate>;

    constructor(copy: MailSkeletonPrivate);
}

export class ManagerProxyPrivate {
    static $gtype: GObject.GType<ManagerProxyPrivate>;

    constructor(copy: ManagerProxyPrivate);
}

export class ManagerSkeletonPrivate {
    static $gtype: GObject.GType<ManagerSkeletonPrivate>;

    constructor(copy: ManagerSkeletonPrivate);
}

export class MapsProxyPrivate {
    static $gtype: GObject.GType<MapsProxyPrivate>;

    constructor(copy: MapsProxyPrivate);
}

export class MapsSkeletonPrivate {
    static $gtype: GObject.GType<MapsSkeletonPrivate>;

    constructor(copy: MapsSkeletonPrivate);
}

export class MediaServerProxyPrivate {
    static $gtype: GObject.GType<MediaServerProxyPrivate>;

    constructor(copy: MediaServerProxyPrivate);
}

export class MediaServerSkeletonPrivate {
    static $gtype: GObject.GType<MediaServerSkeletonPrivate>;

    constructor(copy: MediaServerSkeletonPrivate);
}

export class MusicProxyPrivate {
    static $gtype: GObject.GType<MusicProxyPrivate>;

    constructor(copy: MusicProxyPrivate);
}

export class MusicSkeletonPrivate {
    static $gtype: GObject.GType<MusicSkeletonPrivate>;

    constructor(copy: MusicSkeletonPrivate);
}

export class OAuth2BasedProxyPrivate {
    static $gtype: GObject.GType<OAuth2BasedProxyPrivate>;

    constructor(copy: OAuth2BasedProxyPrivate);
}

export class OAuth2BasedSkeletonPrivate {
    static $gtype: GObject.GType<OAuth2BasedSkeletonPrivate>;

    constructor(copy: OAuth2BasedSkeletonPrivate);
}

export class OAuthBasedProxyPrivate {
    static $gtype: GObject.GType<OAuthBasedProxyPrivate>;

    constructor(copy: OAuthBasedProxyPrivate);
}

export class OAuthBasedSkeletonPrivate {
    static $gtype: GObject.GType<OAuthBasedSkeletonPrivate>;

    constructor(copy: OAuthBasedSkeletonPrivate);
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

export class PasswordBasedProxyPrivate {
    static $gtype: GObject.GType<PasswordBasedProxyPrivate>;

    constructor(copy: PasswordBasedProxyPrivate);
}

export class PasswordBasedSkeletonPrivate {
    static $gtype: GObject.GType<PasswordBasedSkeletonPrivate>;

    constructor(copy: PasswordBasedSkeletonPrivate);
}

export class PhotosProxyPrivate {
    static $gtype: GObject.GType<PhotosProxyPrivate>;

    constructor(copy: PhotosProxyPrivate);
}

export class PhotosSkeletonPrivate {
    static $gtype: GObject.GType<PhotosSkeletonPrivate>;

    constructor(copy: PhotosSkeletonPrivate);
}

export class PrintersProxyPrivate {
    static $gtype: GObject.GType<PrintersProxyPrivate>;

    constructor(copy: PrintersProxyPrivate);
}

export class PrintersSkeletonPrivate {
    static $gtype: GObject.GType<PrintersSkeletonPrivate>;

    constructor(copy: PrintersSkeletonPrivate);
}

export class ReadLaterProxyPrivate {
    static $gtype: GObject.GType<ReadLaterProxyPrivate>;

    constructor(copy: ReadLaterProxyPrivate);
}

export class ReadLaterSkeletonPrivate {
    static $gtype: GObject.GType<ReadLaterSkeletonPrivate>;

    constructor(copy: ReadLaterSkeletonPrivate);
}

export class TicketingProxyPrivate {
    static $gtype: GObject.GType<TicketingProxyPrivate>;

    constructor(copy: TicketingProxyPrivate);
}

export class TicketingSkeletonPrivate {
    static $gtype: GObject.GType<TicketingSkeletonPrivate>;

    constructor(copy: TicketingSkeletonPrivate);
}

export class TodoProxyPrivate {
    static $gtype: GObject.GType<TodoProxyPrivate>;

    constructor(copy: TodoProxyPrivate);
}

export class TodoSkeletonPrivate {
    static $gtype: GObject.GType<TodoSkeletonPrivate>;

    constructor(copy: TodoSkeletonPrivate);
}

export interface AccountNamespace {
    $gtype: GObject.GType<Account>;
    prototype: AccountPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Account = AccountPrototype;

export interface AccountPrototype extends GObject.Object {
    // Properties
    attention_needed: boolean;
    attentionNeeded: boolean;
    calendar_disabled: boolean;
    calendarDisabled: boolean;
    chat_disabled: boolean;
    chatDisabled: boolean;
    contacts_disabled: boolean;
    contactsDisabled: boolean;
    documents_disabled: boolean;
    documentsDisabled: boolean;
    files_disabled: boolean;
    filesDisabled: boolean;
    id: string;
    identity: string;
    is_locked: boolean;
    isLocked: boolean;
    is_temporary: boolean;
    isTemporary: boolean;
    mail_disabled: boolean;
    mailDisabled: boolean;
    maps_disabled: boolean;
    mapsDisabled: boolean;
    music_disabled: boolean;
    musicDisabled: boolean;
    photos_disabled: boolean;
    photosDisabled: boolean;
    presentation_identity: string;
    presentationIdentity: string;
    printers_disabled: boolean;
    printersDisabled: boolean;
    provider_icon: string;
    providerIcon: string;
    provider_name: string;
    providerName: string;
    provider_type: string;
    providerType: string;
    read_later_disabled: boolean;
    readLaterDisabled: boolean;
    ticketing_disabled: boolean;
    ticketingDisabled: boolean;
    todo_disabled: boolean;
    todoDisabled: boolean;

    // Members

    call_ensure_credentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_ensure_credentials_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): [boolean, number | null];

    call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_remove_finish(res: Gio.AsyncResult): boolean;

    call_remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void;

    complete_remove(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean;

    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean;
}

export const Account: AccountNamespace;

export interface CalendarNamespace {
    $gtype: GObject.GType<Calendar>;
    prototype: CalendarPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Calendar = CalendarPrototype;

export interface CalendarPrototype extends GObject.Object {
    // Properties
    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;
}

export const Calendar: CalendarNamespace;

export interface ChatNamespace {
    $gtype: GObject.GType<Chat>;
    prototype: ChatPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Chat = ChatPrototype;
export type ChatPrototype = GObject.Object

export const Chat: ChatNamespace;

export interface ContactsNamespace {
    $gtype: GObject.GType<Contacts>;
    prototype: ContactsPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Contacts = ContactsPrototype;

export interface ContactsPrototype extends GObject.Object {
    // Properties
    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;
}

export const Contacts: ContactsNamespace;

export interface DocumentsNamespace {
    $gtype: GObject.GType<Documents>;
    prototype: DocumentsPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Documents = DocumentsPrototype;
export type DocumentsPrototype = GObject.Object

export const Documents: DocumentsNamespace;

export interface ExchangeNamespace {
    $gtype: GObject.GType<Exchange>;
    prototype: ExchangePrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Exchange = ExchangePrototype;

export interface ExchangePrototype extends GObject.Object {
    // Properties
    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    host: string;
}

export const Exchange: ExchangeNamespace;

export interface FilesNamespace {
    $gtype: GObject.GType<Files>;
    prototype: FilesPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Files = FilesPrototype;

export interface FilesPrototype extends GObject.Object {
    // Properties
    accept_ssl_errors: boolean;
    acceptSslErrors: boolean;
    uri: string;
}

export const Files: FilesNamespace;

export interface MailNamespace {
    $gtype: GObject.GType<Mail>;
    prototype: MailPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Mail = MailPrototype;

export interface MailPrototype extends GObject.Object {
    // Properties
    email_address: string;
    emailAddress: string;
    imap_accept_ssl_errors: boolean;
    imapAcceptSslErrors: boolean;
    imap_host: string;
    imapHost: string;
    imap_supported: boolean;
    imapSupported: boolean;
    imap_use_ssl: boolean;
    imapUseSsl: boolean;
    imap_use_tls: boolean;
    imapUseTls: boolean;
    imap_user_name: string;
    imapUserName: string;
    name: string;
    smtp_accept_ssl_errors: boolean;
    smtpAcceptSslErrors: boolean;
    smtp_auth_login: boolean;
    smtpAuthLogin: boolean;
    smtp_auth_plain: boolean;
    smtpAuthPlain: boolean;
    smtp_auth_xoauth2: boolean;
    smtpAuthXoauth2: boolean;
    smtp_host: string;
    smtpHost: string;
    smtp_supported: boolean;
    smtpSupported: boolean;
    smtp_use_auth: boolean;
    smtpUseAuth: boolean;
    smtp_use_ssl: boolean;
    smtpUseSsl: boolean;
    smtp_use_tls: boolean;
    smtpUseTls: boolean;
    smtp_user_name: string;
    smtpUserName: string;
}

export const Mail: MailNamespace;

export interface ManagerNamespace {
    $gtype: GObject.GType<Manager>;
    prototype: ManagerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Manager = ManagerPrototype;

export interface ManagerPrototype extends GObject.Object {
    // Members

    call_add_account(
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_add_account_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_add_account_sync(
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    call_is_supported_provider(
        arg_provider_type: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_is_supported_provider_finish(res: Gio.AsyncResult): [boolean, boolean | null];

    call_is_supported_provider_sync(
        arg_provider_type: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean | null];

    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void;

    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void;

    vfunc_handle_add_account(
        invocation: Gio.DBusMethodInvocation,
        arg_provider: string,
        arg_identity: string,
        arg_presentation_identity: string,
        arg_credentials: GLib.Variant,
        arg_details: GLib.Variant
    ): boolean;

    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean;
}

export const Manager: ManagerNamespace;

export interface MapsNamespace {
    $gtype: GObject.GType<Maps>;
    prototype: MapsPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Maps = MapsPrototype;
export type MapsPrototype = GObject.Object

export const Maps: MapsNamespace;

export interface MediaServerNamespace {
    $gtype: GObject.GType<MediaServer>;
    prototype: MediaServerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type MediaServer = MediaServerPrototype;

export interface MediaServerPrototype extends GObject.Object {
    // Properties
    dlna_supported: boolean;
    dlnaSupported: boolean;
    udn: string;
}

export const MediaServer: MediaServerNamespace;

export interface MusicNamespace {
    $gtype: GObject.GType<Music>;
    prototype: MusicPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Music = MusicPrototype;
export type MusicPrototype = GObject.Object

export const Music: MusicNamespace;

export interface OAuth2BasedNamespace {
    $gtype: GObject.GType<OAuth2Based>;
    prototype: OAuth2BasedPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type OAuth2Based = OAuth2BasedPrototype;

export interface OAuth2BasedPrototype extends GObject.Object {
    // Properties
    client_id: string;
    clientId: string;
    client_secret: string;
    clientSecret: string;

    // Members

    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null, number | null];

    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, number | null];

    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void;

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
}

export const OAuth2Based: OAuth2BasedNamespace;

export interface OAuthBasedNamespace {
    $gtype: GObject.GType<OAuthBased>;
    prototype: OAuthBasedPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type OAuthBased = OAuthBasedPrototype;

export interface OAuthBasedPrototype extends GObject.Object {
    // Properties
    consumer_key: string;
    consumerKey: string;
    consumer_secret: string;
    consumerSecret: string;

    // Members

    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null, string | null, number | null];

    call_get_access_token_sync(
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null, number | null];

    complete_get_access_token(
        invocation: Gio.DBusMethodInvocation,
        access_token: string,
        access_token_secret: string,
        expires_in: number
    ): void;

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
}

export const OAuthBased: OAuthBasedNamespace;

export interface ObjectNamespace {
    $gtype: GObject.GType<Object>;
    prototype: ObjectPrototype;
}

export type Object = ObjectPrototype;

export interface ObjectPrototype extends Gio.DBusObject {
    // Properties
    account: Account;
    calendar: Calendar;
    chat: Chat;
    contacts: Contacts;
    documents: Documents;
    exchange: Exchange;
    files: Files;
    mail: Mail;
    manager: Manager;
    maps: Maps;
    media_server: MediaServer;
    mediaServer: MediaServer;
    music: Music;
    oauth_based: OAuthBased;
    oauthBased: OAuthBased;
    oauth2_based: OAuth2Based;
    oauth2Based: OAuth2Based;
    password_based: PasswordBased;
    passwordBased: PasswordBased;
    photos: Photos;
    printers: Printers;
    read_later: ReadLater;
    readLater: ReadLater;
    ticketing: Ticketing;
    todo: Todo;

    // Members

    get_account(): Account | null;

    get_calendar(): Calendar | null;

    get_chat(): Chat | null;

    get_contacts(): Contacts | null;

    get_documents(): Documents | null;

    get_exchange(): Exchange | null;

    get_files(): Files | null;

    get_mail(): Mail | null;

    get_manager(): Manager | null;

    get_maps(): Maps | null;

    get_media_server(): MediaServer | null;

    get_music(): Music | null;

    get_oauth2_based(): OAuth2Based | null;

    get_oauth_based(): OAuthBased | null;

    get_password_based(): PasswordBased | null;

    get_photos(): Photos | null;

    get_printers(): Printers | null;

    get_read_later(): ReadLater | null;

    get_ticketing(): Ticketing | null;

    get_todo(): Todo | null;
}

export const Object: ObjectNamespace;

export interface PasswordBasedNamespace {
    $gtype: GObject.GType<PasswordBased>;
    prototype: PasswordBasedPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type PasswordBased = PasswordBasedPrototype;

export interface PasswordBasedPrototype extends GObject.Object {
    // Members

    call_get_password(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_get_password_finish(res: Gio.AsyncResult): [boolean, string | null];

    call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];

    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void;

    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
}

export const PasswordBased: PasswordBasedNamespace;

export interface PhotosNamespace {
    $gtype: GObject.GType<Photos>;
    prototype: PhotosPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Photos = PhotosPrototype;
export type PhotosPrototype = GObject.Object

export const Photos: PhotosNamespace;

export interface PrintersNamespace {
    $gtype: GObject.GType<Printers>;
    prototype: PrintersPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Printers = PrintersPrototype;
export type PrintersPrototype = GObject.Object

export const Printers: PrintersNamespace;

export interface ReadLaterNamespace {
    $gtype: GObject.GType<ReadLater>;
    prototype: ReadLaterPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type ReadLater = ReadLaterPrototype;
export type ReadLaterPrototype = GObject.Object

export const ReadLater: ReadLaterNamespace;

export interface TicketingNamespace {
    $gtype: GObject.GType<Ticketing>;
    prototype: TicketingPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Ticketing = TicketingPrototype;

export interface TicketingPrototype extends GObject.Object {
    // Properties
    details: GLib.Variant;

    // Members

    call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    call_get_ticket_finish(res: Gio.AsyncResult): boolean;

    call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean;

    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void;

    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean;
}

export const Ticketing: TicketingNamespace;

export interface TodoNamespace {
    $gtype: GObject.GType<Todo>;
    prototype: TodoPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type Todo = TodoPrototype;
export type TodoPrototype = GObject.Object

export const Todo: TodoNamespace;
