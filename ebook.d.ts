/**
 * EBook 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as EBookContacts from './ebookcontacts';
import * as EDataServer from './edataserver';
import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as libxml2 from './libxml2';

export function book_error_quark(): GLib.Quark;

export function book_utils_get_recipient_certificates_sync(
    registry: EDataServer.SourceRegistry,
    only_clients: BookClient[] | null,
    flags: number,
    recipients: string[],
    cancellable?: Gio.Cancellable | null
): [boolean, string[]];

export namespace BookStatus {
    export const $gtype: GObject.GType<BookStatus>;
}

export enum BookStatus {
    OK = 0,
    INVALID_ARG = 1,
    BUSY = 2,
    REPOSITORY_OFFLINE = 3,
    NO_SUCH_BOOK = 4,
    NO_SELF_CONTACT = 5,
    SOURCE_NOT_LOADED = 6,
    SOURCE_ALREADY_LOADED = 7,
    PERMISSION_DENIED = 8,
    CONTACT_NOT_FOUND = 9,
    CONTACT_ID_ALREADY_EXISTS = 10,
    PROTOCOL_NOT_SUPPORTED = 11,
    CANCELLED = 12,
    COULD_NOT_CANCEL = 13,
    AUTHENTICATION_FAILED = 14,
    AUTHENTICATION_REQUIRED = 15,
    TLS_NOT_AVAILABLE = 16,
    DBUS_EXCEPTION = 17,
    NO_SUCH_SOURCE = 18,
    OFFLINE_UNAVAILABLE = 19,
    OTHER_ERROR = 20,
    INVALID_SERVER_VERSION = 21,
    UNSUPPORTED_AUTHENTICATION_METHOD = 22,
    NO_SPACE = 23,
    NOT_SUPPORTED = 24,
}

export namespace BookClient {
    export interface ConstructorProperties extends EDataServer.Client.ConstructorProperties {
        [key: string]: any;

        locale: string;
    }
}

export class BookClient extends EDataServer.Client implements Gio.AsyncInitable<BookClient>, Gio.Initable {
    static $gtype: GObject.GType<BookClient>;

    constructor(properties?: Partial<BookClient.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookClient.ConstructorProperties>, ...args: any[]): void;

    // Properties
    locale: string;

    // Constructors

    static ['new'](source: EDataServer.Source): BookClient;

    // Members

    add_contact(
        contact: EBookContacts.Contact,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_contact_finish(result: Gio.AsyncResult): [boolean, string];

    add_contact_sync(
        contact: EBookContacts.Contact,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string];

    add_contacts(
        contacts: EBookContacts.Contact[],
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_contacts_finish(result: Gio.AsyncResult): [boolean, string[] | null];

    add_contacts_sync(
        contacts: EBookContacts.Contact[],
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    get_contact(
        uid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_contact_finish(result: Gio.AsyncResult): [boolean, EBookContacts.Contact];

    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact];

    get_contacts(
        sexp: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_contacts_finish(result: Gio.AsyncResult): [boolean, EBookContacts.Contact[]];

    get_contacts_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact[]];

    get_contacts_uids(
        sexp: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_contacts_uids_finish(result: Gio.AsyncResult): [boolean, string[]];

    get_contacts_uids_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    get_cursor(
        sexp: string,
        sort_fields: EBookContacts.ContactField,
        sort_types: EBookContacts.BookCursorSortType,
        n_fields: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_cursor_finish(result: Gio.AsyncResult): [boolean, BookClientCursor];

    get_cursor_sync(
        sexp: string,
        sort_fields: EBookContacts.ContactField,
        sort_types: EBookContacts.BookCursorSortType,
        n_fields: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, BookClientCursor];

    get_locale(): string;

    get_view(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_view_finish(result: Gio.AsyncResult): [boolean, BookClientView];

    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, BookClientView];

    modify_contact(
        contact: EBookContacts.Contact,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_contact_finish(result: Gio.AsyncResult): boolean;

    modify_contact_sync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    modify_contacts(
        contacts: EBookContacts.Contact[],
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_contacts_finish(result: Gio.AsyncResult): boolean;

    modify_contacts_sync(
        contacts: EBookContacts.Contact[],
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove_contact(
        contact: EBookContacts.Contact,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_contact_by_uid(
        uid: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_contact_by_uid_finish(result: Gio.AsyncResult): boolean;

    remove_contact_by_uid_sync(uid: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    remove_contact_finish(result: Gio.AsyncResult): boolean;

    remove_contact_sync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    remove_contacts(
        uids: string[],
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_contacts_finish(result: Gio.AsyncResult): boolean;

    remove_contacts_sync(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    set_self(contact: EBookContacts.Contact): boolean;

    static connect(
        source: EDataServer.Source,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BookClient> | null
    ): void;

    static connect(...args: never[]): never;

    static connect_direct(
        source: EDataServer.Source,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<BookClient> | null
    ): void;

    static connect_direct_finish(result: Gio.AsyncResult): BookClient;

    static connect_direct_sync(
        registry: EDataServer.SourceRegistry,
        source: EDataServer.Source,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null
    ): BookClient;

    static connect_finish(result: Gio.AsyncResult): BookClient;

    static connect_sync(
        source: EDataServer.Source,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null
    ): BookClient;

    static get_self(registry: EDataServer.SourceRegistry): [boolean, EBookContacts.Contact, BookClient];

    static is_self(contact: EBookContacts.Contact): boolean;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): BookClient;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace BookClientCursor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        alphabet: string[];
        client: BookClient;
        connection: Gio.DBusConnection;
        context: GLib.MainContext;
        object_path: string;
        objectPath: string;
        position: number;
        sort_fields: string[];
        sortFields: string[];
        total: number;
    }
}

export class BookClientCursor extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<BookClientCursor>;

    constructor(properties?: Partial<BookClientCursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookClientCursor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alphabet: string[];
    client: BookClient;
    connection: Gio.DBusConnection;
    context: GLib.MainContext;
    object_path: string;
    objectPath: string;
    position: number;
    sort_fields: string[];
    sortFields: string[];
    total: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'refresh', callback: (_source: this) => void): number;

    connect_after(signal: 'refresh', callback: (_source: this) => void): number;

    emit(signal: 'refresh'): void;

    // Members

    get_alphabet(): [string[], number | null, number | null, number | null, number | null];

    get_contact_alphabetic_index(contact: EBookContacts.Contact): number;

    get_position(): number;

    get_total(): number;

    ref_client(): any | null;

    set_alphabetic_index(
        index: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_alphabetic_index_finish(result: Gio.AsyncResult): boolean;

    set_alphabetic_index_sync(index: number, cancellable?: Gio.Cancellable | null): boolean;

    set_sexp(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    set_sexp_finish(result: Gio.AsyncResult): boolean;

    set_sexp_sync(sexp: string, cancellable?: Gio.Cancellable | null): boolean;

    step(
        flags: EBookContacts.BookCursorStepFlags,
        origin: EBookContacts.BookCursorOrigin,
        count: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    step_finish(result: Gio.AsyncResult): [number, EBookContacts.Contact[] | null];

    step_sync(
        flags: EBookContacts.BookCursorStepFlags,
        origin: EBookContacts.BookCursorOrigin,
        count: number,
        cancellable?: Gio.Cancellable | null
    ): [number, EBookContacts.Contact[] | null];

    vfunc_refresh(): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace BookClientView {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        client: BookClient;
        connection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
    }
}

export class BookClientView extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<BookClientView>;

    constructor(properties?: Partial<BookClientView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookClientView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    client: BookClient;
    connection: Gio.DBusConnection;
    object_path: string;
    objectPath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;

    connect_after(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;

    emit(signal: 'complete', object: GLib.Error): void;

    connect(signal: 'objects-added', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'objects-added', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'objects-added', object: any | null): void;

    connect(signal: 'objects-modified', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'objects-modified', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'objects-modified', object: any | null): void;

    connect(signal: 'objects-removed', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'objects-removed', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'objects-removed', object: any | null): void;

    connect(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;

    connect_after(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;

    emit(signal: 'progress', object: number, p0: string): void;

    // Members

    get_client(): any | null;

    get_connection(): Gio.DBusConnection;

    get_object_path(): string;

    is_running(): boolean;

    ref_client(): any | null;

    set_fields_of_interest(fields_of_interest: string[]): void;

    set_flags(flags: EBookContacts.BookClientViewFlags): void;

    start(): void;

    stop(): void;

    vfunc_complete(error: GLib.Error): void;

    vfunc_progress(percent: number, message: string): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Destination {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Destination extends GObject.Object {
    static $gtype: GObject.GType<Destination>;

    constructor(properties?: Partial<Destination.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Destination.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: DestinationPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): Destination;

    // Members

    copy(): Destination;

    empty(): boolean;

    equal(b: Destination): boolean;

    ['export'](): string;

    export_to_vcard_attribute(attr: EBookContacts.VCardAttribute): void;

    get_address(): string | null;

    get_contact(): EBookContacts.Contact | null;

    get_contact_uid(): string | null;

    get_email(): string;

    get_email_num(): number;

    get_html_mail_pref(): boolean;

    get_name(): string | null;

    get_source_uid(): string | null;

    get_textrep(include_email: boolean): string;

    is_auto_recipient(): boolean;

    is_evolution_list(): boolean;

    is_ignored(): boolean;

    list_get_dests(): Destination[];

    list_get_root_dests(): Destination[];

    list_show_addresses(): boolean;

    set_auto_recipient(value: boolean): void;

    set_client(client: BookClient): void;

    set_contact(contact: EBookContacts.Contact, email_num: number): void;

    set_contact_uid(uid: string, email_num: number): void;

    set_email(email: string): void;

    set_html_mail_pref(flag: boolean): void;

    set_ignored(ignored: boolean): void;

    set_name(name: string): void;

    set_raw(raw: string): void;

    vfunc_changed(): void;

    static exportv(destv: Destination[]): string;

    static freev(destv: Destination[]): void;

    static get_textrepv(destv: Destination[]): string;

    static import(str: string): Destination | null;

    static importv(str: string): Destination[];
}

export class BookClientCursorPrivate {
    static $gtype: GObject.GType<BookClientCursorPrivate>;

    constructor(copy: BookClientCursorPrivate);
}

export class BookClientPrivate {
    static $gtype: GObject.GType<BookClientPrivate>;

    constructor(copy: BookClientPrivate);
}

export class BookClientViewPrivate {
    static $gtype: GObject.GType<BookClientViewPrivate>;

    constructor(copy: BookClientViewPrivate);
}

export class DestinationPrivate {
    static $gtype: GObject.GType<DestinationPrivate>;

    constructor(copy: DestinationPrivate);
}
