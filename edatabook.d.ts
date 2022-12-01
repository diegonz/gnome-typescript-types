/**
 * EDataBook 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as EBackend from './ebackend';
import * as EBookContacts from './ebookcontacts';
import * as EDataServer from './edataserver';
import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as libxml2 from './libxml2';

export const BOOK_SQL_IS_POPULATED_KEY: string;
export const BOOK_SQL_SYNC_DATA_KEY: string;
export const EDS_ADDRESS_BOOK_MODULES: string;
export const EDS_SUBPROCESS_BOOK_PATH: string;
export const XIMIAN_VCARD: string;

export function book_cache_search_data_free(data?: any | null): void;

export function book_meta_backend_info_free(ptr?: any | null): void;

export function ebsql_get_contact_extra_unlocked(ebsql: BookSqlite, uid: string): [boolean, string];

export function ebsql_get_contact_unlocked(
    ebsql: BookSqlite,
    uid: string,
    meta_contact: boolean
): [boolean, EBookContacts.Contact];

export function ebsql_get_vcard_unlocked(ebsql: BookSqlite, uid: string, meta_contact: boolean): [boolean, string];

export type BookBackendCustomOpFunc = (book_backend: BookBackend, cancellable?: Gio.Cancellable | null) => void;
export type BookBackendForeachViewFunc = (backend: BookBackend, view: DataBookView) => boolean;
export type BookCacheSearchFunc = (
    book_cache: BookCache,
    uid: string,
    revision: string,
    object: string,
    extra: string,
    custom_flags: number,
    offline_state: EBackend.OfflineState
) => boolean;
export type DataBookCursorCompareContactFunc = (cursor: DataBookCursor, contact: EBookContacts.Contact) => number;
export type DataBookCursorGetPositionFunc = (cursor: DataBookCursor, cancellable?: Gio.Cancellable | null) => boolean;
export type DataBookCursorLoadLocaleFunc = (cursor: DataBookCursor) => boolean;
export type DataBookCursorSetAlphabetIndexFunc = (cursor: DataBookCursor, index: number, locale: string) => boolean;
export type DataBookCursorSetSexpFunc = (cursor: DataBookCursor, sexp?: string | null) => boolean;
export type DataBookCursorStepFunc = (
    cursor: DataBookCursor,
    revision_guard: string | null,
    flags: EBookContacts.BookCursorStepFlags,
    origin: EBookContacts.BookCursorOrigin,
    count: number,
    cancellable?: Gio.Cancellable | null
) => number;
export type bSqlChangeCallback = (change_type: bSqlChangeType, uid: string, extra: string, vcard: string) => void;
export type bSqlVCardCallback = (uid: string, extra: string) => string;

export namespace BookCacheCursorOrigin {
    export const $gtype: GObject.GType<BookCacheCursorOrigin>;
}

export enum BookCacheCursorOrigin {
    CURRENT = 0,
    BEGIN = 1,
    END = 2,
}

export namespace BookSqliteError {
    export const $gtype: GObject.GType<BookSqliteError>;
}

export enum BookSqliteError {
    ENGINE = 0,
    CONSTRAINT = 1,
    CONTACT_NOT_FOUND = 2,
    INVALID_QUERY = 3,
    UNSUPPORTED_QUERY = 4,
    UNSUPPORTED_FIELD = 5,
    END_OF_LIST = 6,
    LOAD = 7,
}

export namespace bSqlChangeType {
    export const $gtype: GObject.GType<bSqlChangeType>;
}

export enum bSqlChangeType {
    CONTACT_ADDED = 0,
    LOCALE_CHANGED = 1,
    LAST = 2,
}

export namespace bSqlCursorOrigin {
    export const $gtype: GObject.GType<bSqlCursorOrigin>;
}

export enum bSqlCursorOrigin {
    CURRENT = 0,
    BEGIN = 1,
    END = 2,
}

export namespace bSqlLockType {
    export const $gtype: GObject.GType<bSqlLockType>;
}

export enum bSqlLockType {
    READ = 0,
    WRITE = 1,
}

export namespace bSqlUnlockAction {
    export const $gtype: GObject.GType<bSqlUnlockAction>;
}

export enum bSqlUnlockAction {
    NONE = 0,
    COMMIT = 1,
    ROLLBACK = 2,
}

export namespace BookCacheCursorStepFlags {
    export const $gtype: GObject.GType<BookCacheCursorStepFlags>;
}

export enum BookCacheCursorStepFlags {
    MOVE = 1,
    FETCH = 2,
}

export namespace bSqlCursorStepFlags {
    export const $gtype: GObject.GType<bSqlCursorStepFlags>;
}

export enum bSqlCursorStepFlags {
    MOVE = 1,
    FETCH = 2,
}

export namespace BookBackend {
    export interface ConstructorProperties extends EBackend.Backend.ConstructorProperties {
        [key: string]: any;

        cache_dir: string;
        cacheDir: string;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        registry: EDataServer.SourceRegistry;
        writable: boolean;
    }
}

export class BookBackend extends EBackend.Backend {
    static $gtype: GObject.GType<BookBackend>;

    constructor(properties?: Partial<BookBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_dir: string;
    cacheDir: string;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    registry: EDataServer.SourceRegistry;
    writable: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'closed', callback: (_source: this, sender: string) => void): number;

    connect_after(signal: 'closed', callback: (_source: this, sender: string) => void): number;

    emit(signal: 'closed', sender: string): void;

    connect(signal: 'shutdown', callback: (_source: this) => void): number;

    connect_after(signal: 'shutdown', callback: (_source: this) => void): number;

    emit(signal: 'shutdown'): void;

    // Members

    add_view(view: DataBookView): void;

    configure_direct(config: string): void;

    create_contacts(
        vcards: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_contacts_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean;

    create_contacts_sync(
        vcards: string,
        opflags: number,
        out_contacts: GLib.Queue,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    create_cursor(
        sort_fields: EBookContacts.ContactField,
        sort_types: EBookContacts.BookCursorSortType,
        n_fields: number
    ): DataBookCursor;

    delete_cursor(cursor: DataBookCursor): boolean;

    dup_cache_dir(): string;

    dup_locale(): string;

    foreach_view(): boolean;

    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void;

    get_backend_property(prop_name: string): string;

    get_cache_dir(): string;

    get_contact(
        uid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_contact_finish(result: Gio.AsyncResult): EBookContacts.Contact;

    get_contact_list(
        query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_contact_list_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean;

    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean;

    get_contact_list_uids(
        query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_contact_list_uids_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean;

    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean;

    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact;

    get_direct_book(): DataBookDirect | null;

    get_registry(): EDataServer.SourceRegistry;

    get_writable(): boolean;

    is_opened(): boolean;

    is_readonly(): boolean;

    list_views(): DataBookView[];

    modify_contacts(
        vcards: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_contacts_finish(result: Gio.AsyncResult): boolean;

    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    notify_complete(): void;

    notify_error(message: string): void;

    notify_property_changed(prop_name: string, prop_value?: string | null): void;

    notify_remove(id: string): void;

    notify_update(contact: EBookContacts.Contact): void;

    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    open_finish(result: Gio.AsyncResult): boolean;

    open_sync(cancellable?: Gio.Cancellable | null): boolean;

    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult;

    ref_data_book(): DataBook | null;

    ref_proxy_resolver(): Gio.ProxyResolver | null;

    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    refresh_finish(result: Gio.AsyncResult): boolean;

    refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

    remove_contacts(
        uids: string[],
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_contacts_finish(result: Gio.AsyncResult): boolean;

    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    remove_view(view: DataBookView): void;

    schedule_custom_operation(
        use_cancellable: Gio.Cancellable | null,
        func: BookBackendCustomOpFunc,
        user_data_free?: GLib.DestroyNotify | null
    ): void;

    set_cache_dir(cache_dir: string): void;

    set_data_book(data_book: DataBook): void;

    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean;

    set_writable(writable: boolean): void;

    start_view(view: DataBookView): void;

    stop_view(view: DataBookView): void;

    sync(): void;

    vfunc_closed(sender: string): void;

    vfunc_impl_configure_direct(config: string): void;

    vfunc_impl_create_contacts(
        book: DataBook,
        opid: number,
        cancellable: Gio.Cancellable | null,
        vcards: string,
        opflags: number
    ): void;

    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean;

    vfunc_impl_dup_locale(): string;

    vfunc_impl_get_backend_property(prop_name: string): string;

    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void;

    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void;

    vfunc_impl_get_contact_list_uids(
        book: DataBook,
        opid: number,
        cancellable: Gio.Cancellable | null,
        query: string
    ): void;

    vfunc_impl_modify_contacts(
        book: DataBook,
        opid: number,
        cancellable: Gio.Cancellable | null,
        vcards: string,
        opflags: number
    ): void;

    vfunc_impl_notify_update(contact: EBookContacts.Contact): void;

    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void;

    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void;

    vfunc_impl_remove_contacts(
        book: DataBook,
        opid: number,
        cancellable: Gio.Cancellable | null,
        uids: string,
        opflags: number
    ): void;

    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_impl_start_view(view: DataBookView): void;

    vfunc_impl_stop_view(view: DataBookView): void;

    vfunc_shutdown(): void;
}

export namespace BookBackendFactory {
    export interface ConstructorProperties extends EBackend.BackendFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class BookBackendFactory extends EBackend.BackendFactory {
    static $gtype: GObject.GType<BookBackendFactory>;

    constructor(properties?: Partial<BookBackendFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookBackendFactory.ConstructorProperties>, ...args: any[]): void;
}

export namespace BookBackendSExp {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BookBackendSExp extends GObject.Object {
    static $gtype: GObject.GType<BookBackendSExp>;

    constructor(properties?: Partial<BookBackendSExp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookBackendSExp.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](text: string): BookBackendSExp;

    // Members

    lock(): void;

    match_contact(contact: EBookContacts.Contact): boolean;

    match_vcard(vcard: string): boolean;

    text(): string;

    unlock(): void;
}

export namespace BookBackendSync {
    export interface ConstructorProperties extends BookBackend.ConstructorProperties {
        [key: string]: any;
    }
}

export class BookBackendSync extends BookBackend {
    static $gtype: GObject.GType<BookBackendSync>;

    constructor(properties?: Partial<BookBackendSync.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookBackendSync.ConstructorProperties>, ...args: any[]): void;

    // Members

    create_contacts(
        vcards: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact[]];

    create_contacts(...args: never[]): never;

    get_contact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact;
    get_contact(...args: never[]): never;

    get_contact_list(query: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact[]];
    get_contact_list(...args: never[]): never;

    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
    get_contact_list_uids(...args: never[]): never;

    modify_contacts(
        vcards: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact[]];

    modify_contacts(...args: never[]): never;

    open(cancellable?: Gio.Cancellable | null): boolean;
    open(...args: never[]): never;

    refresh(cancellable?: Gio.Cancellable | null): boolean;
    refresh(...args: never[]): never;

    remove_contacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [boolean, string[]];
    remove_contacts(...args: never[]): never;

    vfunc_open_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace BookCache {
    export interface ConstructorProperties extends EBackend.Cache.ConstructorProperties {
        [key: string]: any;

        locale: string;
    }
}

export class BookCache extends EBackend.Cache implements EDataServer.Extensible {
    static $gtype: GObject.GType<BookCache>;

    constructor(properties?: Partial<BookCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    locale: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'dup-contact-revision', callback: (_source: this, object: EBookContacts.Contact) => string): number;

    connect_after(
        signal: 'dup-contact-revision',
        callback: (_source: this, object: EBookContacts.Contact) => string
    ): number;

    emit(signal: 'dup-contact-revision', object: EBookContacts.Contact): void;

    connect(
        signal: 'e164-changed',
        callback: (_source: this, object: EBookContacts.Contact, p0: boolean) => void
    ): number;

    connect_after(
        signal: 'e164-changed',
        callback: (_source: this, object: EBookContacts.Contact, p0: boolean) => void
    ): number;

    emit(signal: 'e164-changed', object: EBookContacts.Contact, p0: boolean): void;

    // Constructors

    static ['new'](
        filename: string,
        source?: EDataServer.Source | null,
        cancellable?: Gio.Cancellable | null
    ): BookCache;

    static new_full(
        filename: string,
        source?: EDataServer.Source | null,
        setup?: EBookContacts.SourceBackendSummarySetup | null,
        cancellable?: Gio.Cancellable | null
    ): BookCache;

    // Members

    cursor_calculate(
        cursor: BookCacheCursor,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null, number | null];

    cursor_compare_contact(cursor: BookCacheCursor, contact: EBookContacts.Contact): [number, boolean | null];

    cursor_free(cursor: BookCacheCursor): void;

    cursor_set_sexp(cursor: BookCacheCursor, sexp: string): boolean;

    cursor_set_target_alphabetic_index(cursor: BookCacheCursor, idx: number): void;

    cursor_step(
        cursor: BookCacheCursor,
        flags: BookCacheCursorStepFlags,
        origin: BookCacheCursorOrigin,
        count: number,
        cancellable?: Gio.Cancellable | null
    ): [number, BookCacheSearchData[] | null];

    dup_contact_revision(contact: EBookContacts.Contact): string;

    dup_locale(): string;

    get_contact(
        uid: string,
        meta_contact: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact];

    get_contact_custom_flags(uid: string, cancellable?: Gio.Cancellable | null): [boolean, number];

    get_contact_extra(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string];

    get_uids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    get_vcard(uid: string, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [boolean, string];

    put_contact(
        contact: EBookContacts.Contact,
        extra: string | null,
        custom_flags: number,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    put_contacts(
        contacts: EBookContacts.Contact[],
        extras: string[] | null,
        custom_flags: number[] | null,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ref_collator(): EDataServer.Collator;

    ref_source(): EDataServer.Source;

    remove_contact(
        uid: string,
        custom_flags: number,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove_contacts(
        uids: string[],
        custom_flags: number[] | null,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    search(
        sexp: string | null,
        meta_contacts: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, BookCacheSearchData[]];

    search_uids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    search_with_callback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    set_contact_custom_flags(uid: string, custom_flags: number, cancellable?: Gio.Cancellable | null): boolean;

    set_contact_extra(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_dup_contact_revision(contact: EBookContacts.Contact): string;

    vfunc_e164_changed(contact: EBookContacts.Contact, is_replace: boolean): void;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace BookMetaBackend {
    export interface ConstructorProperties extends BookBackendSync.ConstructorProperties {
        [key: string]: any;

        cache: BookCache;
    }
}

export abstract class BookMetaBackend extends BookBackendSync {
    static $gtype: GObject.GType<BookMetaBackend>;

    constructor(properties?: Partial<BookMetaBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookMetaBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache: BookCache;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'refresh-completed', callback: (_source: this) => void): number;

    connect_after(signal: 'refresh-completed', callback: (_source: this) => void): number;

    emit(signal: 'refresh-completed'): void;

    connect(signal: 'source-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'source-changed', callback: (_source: this) => void): number;

    emit(signal: 'source-changed'): void;

    // Members

    connect_sync(
        credentials: EDataServer.NamedParameters | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];

    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;

    dup_sync_tag(): string | null;

    empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean;

    ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean;

    get_capabilities(): string;

    get_changes_sync(
        last_sync_tag: string | null,
        is_repeat: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, boolean, BookMetaBackendInfo[], BookMetaBackendInfo[], BookMetaBackendInfo[]];

    get_connected_writable(): boolean;

    get_ever_connected(): boolean;

    get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];

    inline_local_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean;

    list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, BookMetaBackendInfo[]];

    load_contact_sync(
        uid: string,
        extra: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact, string];

    process_changes_sync(
        created_objects?: BookMetaBackendInfo[] | null,
        modified_objects?: BookMetaBackendInfo[] | null,
        removed_objects?: BookMetaBackendInfo[] | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ref_cache(): BookCache;

    refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

    remove_contact_sync(
        conflict_resolution: EDataServer.ConflictResolution,
        uid: string,
        extra: string | null,
        object: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    requires_reconnect(): boolean;

    save_contact_sync(
        overwrite_existing: boolean,
        conflict_resolution: EDataServer.ConflictResolution,
        contact: EBookContacts.Contact,
        extra: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, string];

    schedule_refresh(): void;

    search_sync(
        expr: string | null,
        meta_contact: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact[]];

    search_uids_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    set_cache(cache: BookCache): void;

    set_connected_writable(value: boolean): void;

    set_ever_connected(value: boolean): void;

    split_changes_sync(
        objects: BookMetaBackendInfo[],
        cancellable?: Gio.Cancellable | null
    ): [boolean, BookMetaBackendInfo[], BookMetaBackendInfo[], BookMetaBackendInfo[], BookMetaBackendInfo[] | null];

    store_inline_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_connect_sync(
        credentials: EDataServer.NamedParameters | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];

    vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_get_changes_sync(
        last_sync_tag: string | null,
        is_repeat: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, boolean, BookMetaBackendInfo[], BookMetaBackendInfo[], BookMetaBackendInfo[]];

    vfunc_get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];

    vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, BookMetaBackendInfo[]];

    vfunc_load_contact_sync(
        uid: string,
        extra: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact, string];

    vfunc_remove_contact_sync(
        conflict_resolution: EDataServer.ConflictResolution,
        uid: string,
        extra: string | null,
        object: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_requires_reconnect(): boolean;

    vfunc_save_contact_sync(
        overwrite_existing: boolean,
        conflict_resolution: EDataServer.ConflictResolution,
        contact: EBookContacts.Contact,
        extra: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, string];

    vfunc_search_sync(
        expr: string | null,
        meta_contact: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EBookContacts.Contact[]];

    vfunc_search_uids_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    vfunc_source_changed(): void;
}

export namespace BookSqlite {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BookSqlite extends GObject.Object implements EDataServer.Extensible {
    static $gtype: GObject.GType<BookSqlite>;

    constructor(properties?: Partial<BookSqlite.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookSqlite.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'before-insert-contact',
        callback: (
            _source: this,
            object: any | null,
            p0: EBookContacts.Contact,
            p1: string,
            p2: boolean,
            p3: GObject.Object,
            p4: any | null
        ) => boolean
    ): number;

    connect_after(
        signal: 'before-insert-contact',
        callback: (
            _source: this,
            object: any | null,
            p0: EBookContacts.Contact,
            p1: string,
            p2: boolean,
            p3: GObject.Object,
            p4: any | null
        ) => boolean
    ): number;

    emit(
        signal: 'before-insert-contact',
        object: any | null,
        p0: EBookContacts.Contact,
        p1: string,
        p2: boolean,
        p3: GObject.Object,
        p4: any | null
    ): void;

    connect(
        signal: 'before-remove-contact',
        callback: (_source: this, object: any | null, p0: string, p1: Gio.Cancellable | null, p2: any | null) => boolean
    ): number;

    connect_after(
        signal: 'before-remove-contact',
        callback: (_source: this, object: any | null, p0: string, p1: Gio.Cancellable | null, p2: any | null) => boolean
    ): number;

    emit(
        signal: 'before-remove-contact',
        object: any | null,
        p0: string,
        p1: Gio.Cancellable | null,
        p2: any | null
    ): void;

    // Constructors

    static ['new'](path: string, source: EDataServer.Source, cancellable?: Gio.Cancellable | null): BookSqlite;

    static new_full(
        path: string,
        source: EDataServer.Source,
        setup?: EBookContacts.SourceBackendSummarySetup | null,
        vcard_callback?: bSqlVCardCallback | null,
        change_callback?: bSqlChangeCallback | null,
        user_data_destroy?: GLib.DestroyNotify | null,
        cancellable?: Gio.Cancellable | null
    ): BookSqlite;

    // Members

    add_contact(
        contact: EBookContacts.Contact,
        extra: string,
        replace: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    add_contacts(
        contacts: EBookContacts.Contact[],
        extra: string[] | null,
        replace: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_contact(uid: string, meta_contact: boolean): [boolean, EBookContacts.Contact];

    get_contact_extra(uid: string): [boolean, string];

    get_key_value(key: string): [boolean, string];

    get_key_value_int(key: string): [boolean, number];

    get_locale(): [boolean, string];

    get_vcard(uid: string, meta_contact: boolean): [boolean, string];

    has_contact(uid: string): [boolean, boolean];

    lock(lock_type: bSqlLockType, cancellable?: Gio.Cancellable | null): boolean;

    ref_collator(): EDataServer.Collator;

    ref_source(): EDataServer.Source;

    remove_contact(uid: string, cancellable?: Gio.Cancellable | null): boolean;

    remove_contacts(uids: string[], cancellable?: Gio.Cancellable | null): boolean;

    search(
        sexp: string | null,
        meta_contacts: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, bSqlSearchData[]];

    search_uids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    set_contact_extra(uid: string, extra?: string | null): boolean;

    set_key_value(key: string, value: string): boolean;

    set_key_value_int(key: string, value: number): boolean;

    set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean;

    unlock(action: bSqlUnlockAction): boolean;

    vfunc_before_insert_contact(
        db: any | null,
        contact: EBookContacts.Contact,
        extra: string,
        replace: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_before_remove_contact(db: any | null, contact_uid: string, cancellable?: Gio.Cancellable | null): boolean;

    static error_quark(): GLib.Quark;

    static search_data_free(data: bSqlSearchData): void;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace DataBook {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backend: BookBackend;
        connection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
    }
}

export class DataBook extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<DataBook>;

    constructor(properties?: Partial<DataBook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBook.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend: BookBackend;
    connection: Gio.DBusConnection;
    object_path: string;
    objectPath: string;

    // Constructors

    static ['new'](backend: BookBackend, connection: Gio.DBusConnection, object_path: string): DataBook;

    // Members

    get_connection(): Gio.DBusConnection;

    get_object_path(): string;

    ref_backend(): BookBackend;

    report_backend_property_changed(prop_name: string, prop_value: string): void;

    report_error(message: string): void;

    respond_create_contacts(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void;

    respond_get_contact(opid: number, error?: GLib.Error | null, contact?: EBookContacts.Contact | null): void;

    respond_get_contact_list(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void;

    respond_get_contact_list_uids(opid: number, error: GLib.Error, uids?: string[] | null): void;

    respond_modify_contacts(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void;

    respond_open(opid: number, error: GLib.Error): void;

    respond_refresh(opid: number, error: GLib.Error): void;

    respond_remove_contacts(opid: number, error: GLib.Error, ids?: string[] | null): void;

    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean;

    static string_slist_to_comma_string(strings: string[]): string;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DataBookCursor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backend: BookBackend;
        position: number;
        total: number;
    }
}

export abstract class DataBookCursor extends GObject.Object {
    static $gtype: GObject.GType<DataBookCursor>;

    constructor(properties?: Partial<DataBookCursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBookCursor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend: BookBackend;
    position: number;
    total: number;

    // Members

    contact_added(contact: EBookContacts.Contact): void;

    contact_removed(contact: EBookContacts.Contact): void;

    get_backend(): BookBackend;

    get_position(): number;

    get_total(): number;

    load_locale(cancellable?: Gio.Cancellable | null): [boolean, string | null];

    recalculate(cancellable?: Gio.Cancellable | null): boolean;

    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean;

    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean;

    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    step(
        revision_guard: string,
        flags: EBookContacts.BookCursorStepFlags,
        origin: EBookContacts.BookCursorOrigin,
        count: number,
        cancellable?: Gio.Cancellable | null
    ): [number, string[] | null];

    vfunc_compare_contact(contact: EBookContacts.Contact): [number, boolean | null];

    vfunc_get_position(cancellable?: Gio.Cancellable | null): [boolean, number, number];

    vfunc_load_locale(): [boolean, string];

    vfunc_set_alphabetic_index(index: number, locale: string): boolean;

    vfunc_set_sexp(sexp?: string | null): boolean;

    vfunc_step(
        revision_guard: string | null,
        flags: EBookContacts.BookCursorStepFlags,
        origin: EBookContacts.BookCursorOrigin,
        count: number,
        cancellable?: Gio.Cancellable | null
    ): [number, string[] | null];
}

export namespace DataBookCursorCache {
    export interface ConstructorProperties extends DataBookCursor.ConstructorProperties {
        [key: string]: any;

        book_cache: BookCache;
        bookCache: BookCache;
        cursor: any;
    }
}

export class DataBookCursorCache extends DataBookCursor {
    static $gtype: GObject.GType<DataBookCursorCache>;

    constructor(properties?: Partial<DataBookCursorCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBookCursorCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    book_cache: BookCache;
    bookCache: BookCache;
    cursor: any;

    // Constructors

    static ['new'](
        book_backend: BookBackend,
        book_cache: BookCache,
        sort_fields: EBookContacts.ContactField[],
        sort_types: EBookContacts.BookCursorSortType[]
    ): DataBookCursorCache;
}

export namespace DataBookCursorSqlite {
    export interface ConstructorProperties extends DataBookCursor.ConstructorProperties {
        [key: string]: any;

        cursor: any;
        ebsql: BookSqlite;
        revision_key: string;
        revisionKey: string;
    }
}

export class DataBookCursorSqlite extends DataBookCursor {
    static $gtype: GObject.GType<DataBookCursorSqlite>;

    constructor(properties?: Partial<DataBookCursorSqlite.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBookCursorSqlite.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cursor: any;
    ebsql: BookSqlite;
    revision_key: string;
    revisionKey: string;

    // Constructors

    static ['new'](
        backend: BookBackend,
        ebsql: BookSqlite,
        revision_key: string,
        sort_fields: EBookContacts.ContactField[],
        sort_types: EBookContacts.BookCursorSortType[]
    ): DataBookCursorSqlite;
}

export namespace DataBookDirect {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DataBookDirect extends GObject.Object {
    static $gtype: GObject.GType<DataBookDirect>;

    constructor(properties?: Partial<DataBookDirect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBookDirect.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DataBookDirectPrivate;

    // Constructors

    static ['new'](backend_path: string, backend_factory_name: string, config: string): DataBookDirect;

    // Members

    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean;
}

export namespace DataBookFactory {
    export interface ConstructorProperties extends EBackend.DataFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class DataBookFactory extends EBackend.DataFactory implements EDataServer.Extensible, Gio.Initable {
    static $gtype: GObject.GType<DataBookFactory>;

    constructor(properties?: Partial<DataBookFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBookFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DataBookFactoryPrivate;

    // Constructors

    static ['new'](backend_per_process: number, cancellable?: Gio.Cancellable | null): DataBookFactory;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DataBookView {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backend: BookBackend;
        connection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
        sexp: BookBackendSExp;
    }
}

export class DataBookView extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<DataBookView>;

    constructor(properties?: Partial<DataBookView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataBookView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend: BookBackend;
    connection: Gio.DBusConnection;
    object_path: string;
    objectPath: string;
    sexp: BookBackendSExp;

    // Fields
    priv: DataBookViewPrivate;

    // Constructors

    static ['new'](
        backend: BookBackend,
        sexp: BookBackendSExp,
        connection: Gio.DBusConnection,
        object_path: string
    ): DataBookView;

    // Members

    get_connection(): Gio.DBusConnection;

    get_fields_of_interest(): GLib.HashTable<string, number> | null;

    get_flags(): EBookContacts.BookClientViewFlags;

    get_object_path(): string;

    get_sexp(): BookBackendSExp;

    is_completed(): boolean;

    notify_complete(error: GLib.Error): void;

    notify_progress(percent: number, message: string): void;

    notify_remove(id: string): void;

    notify_update(contact: EBookContacts.Contact): void;

    notify_update_prefiltered_vcard(id: string, vcard: string): void;

    notify_update_vcard(id: string, vcard: string): void;

    ref_backend(): BookBackend | null;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace SubprocessBookFactory {
    export interface ConstructorProperties extends EBackend.SubprocessFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class SubprocessBookFactory extends EBackend.SubprocessFactory implements Gio.Initable {
    static $gtype: GObject.GType<SubprocessBookFactory>;

    constructor(properties?: Partial<SubprocessBookFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SubprocessBookFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SubprocessBookFactoryPrivate;

    // Constructors

    static ['new'](cancellable?: Gio.Cancellable | null): SubprocessBookFactory;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace SystemLocaleWatcher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        locale: string;
    }
}

export class SystemLocaleWatcher extends GObject.Object {
    static $gtype: GObject.GType<SystemLocaleWatcher>;

    constructor(properties?: Partial<SystemLocaleWatcher.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SystemLocaleWatcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    locale: string;

    // Constructors

    static ['new'](): SystemLocaleWatcher;

    // Members

    dup_locale(): string | null;
}

export class BookBackendFactoryPrivate {
    static $gtype: GObject.GType<BookBackendFactoryPrivate>;

    constructor(copy: BookBackendFactoryPrivate);
}

export class BookBackendPrivate {
    static $gtype: GObject.GType<BookBackendPrivate>;

    constructor(copy: BookBackendPrivate);
}

export class BookBackendSExpPrivate {
    static $gtype: GObject.GType<BookBackendSExpPrivate>;

    constructor(copy: BookBackendSExpPrivate);
}

export class BookBackendSyncPrivate {
    static $gtype: GObject.GType<BookBackendSyncPrivate>;

    constructor(copy: BookBackendSyncPrivate);
}

export class BookCacheCursor {
    static $gtype: GObject.GType<BookCacheCursor>;

    constructor(
        book_cache: BookCache,
        sexp: string,
        sort_fields: EBookContacts.ContactField[],
        sort_types: EBookContacts.BookCursorSortType[]
    );

    constructor(copy: BookCacheCursor);

    // Constructors
    static ['new'](
        book_cache: BookCache,
        sexp: string,
        sort_fields: EBookContacts.ContactField[],
        sort_types: EBookContacts.BookCursorSortType[]
    ): BookCacheCursor;
}

export class BookCachePrivate {
    static $gtype: GObject.GType<BookCachePrivate>;

    constructor(copy: BookCachePrivate);
}

export class BookCacheSearchData {
    static $gtype: GObject.GType<BookCacheSearchData>;

    constructor(uid: string, vcard: string, extra?: string | null);
    constructor(
        properties?: Partial<{
            uid?: string;
            vcard?: string;
            extra?: string;
        }>
    );

    constructor(copy: BookCacheSearchData);

    // Fields
    uid: string;
    vcard: string;
    extra: string;

    // Constructors
    static ['new'](uid: string, vcard: string, extra?: string | null): BookCacheSearchData;

    // Members
    copy(): BookCacheSearchData;

    static free(data?: any | null): void;
}

export class BookMetaBackendInfo {
    static $gtype: GObject.GType<BookMetaBackendInfo>;

    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null);
    constructor(
        properties?: Partial<{
            uid?: string;
            revision?: string;
            object?: string;
            extra?: string;
        }>
    );

    constructor(copy: BookMetaBackendInfo);

    // Fields
    uid: string;
    revision: string;
    object: string;
    extra: string;

    // Constructors
    static ['new'](
        uid: string,
        revision?: string | null,
        object?: string | null,
        extra?: string | null
    ): BookMetaBackendInfo;

    // Members
    copy(): BookMetaBackendInfo;

    static free(ptr?: any | null): void;
}

export class BookMetaBackendPrivate {
    static $gtype: GObject.GType<BookMetaBackendPrivate>;

    constructor(copy: BookMetaBackendPrivate);
}

export class BookSqlitePrivate {
    static $gtype: GObject.GType<BookSqlitePrivate>;

    constructor(copy: BookSqlitePrivate);
}

export class DataBookCursorCachePrivate {
    static $gtype: GObject.GType<DataBookCursorCachePrivate>;

    constructor(copy: DataBookCursorCachePrivate);
}

export class DataBookCursorPrivate {
    static $gtype: GObject.GType<DataBookCursorPrivate>;

    constructor(copy: DataBookCursorPrivate);
}

export class DataBookCursorSqlitePrivate {
    static $gtype: GObject.GType<DataBookCursorSqlitePrivate>;

    constructor(copy: DataBookCursorSqlitePrivate);
}

export class DataBookDirectPrivate {
    static $gtype: GObject.GType<DataBookDirectPrivate>;

    constructor(copy: DataBookDirectPrivate);
}

export class DataBookFactoryPrivate {
    static $gtype: GObject.GType<DataBookFactoryPrivate>;

    constructor(copy: DataBookFactoryPrivate);
}

export class DataBookPrivate {
    static $gtype: GObject.GType<DataBookPrivate>;

    constructor(copy: DataBookPrivate);
}

export class DataBookViewPrivate {
    static $gtype: GObject.GType<DataBookViewPrivate>;

    constructor(copy: DataBookViewPrivate);
}

export class SubprocessBookFactoryPrivate {
    static $gtype: GObject.GType<SubprocessBookFactoryPrivate>;

    constructor(copy: SubprocessBookFactoryPrivate);
}

export class SystemLocaleWatcherPrivate {
    static $gtype: GObject.GType<SystemLocaleWatcherPrivate>;

    constructor(copy: SystemLocaleWatcherPrivate);
}

export class bSqlCursor {
    static $gtype: GObject.GType<bSqlCursor>;

    constructor(copy: bSqlCursor);
}

export class bSqlSearchData {
    static $gtype: GObject.GType<bSqlSearchData>;

    constructor(
        properties?: Partial<{
            uid?: string;
            vcard?: string;
            extra?: string;
        }>
    );

    constructor(copy: bSqlSearchData);

    // Fields
    uid: string;
    vcard: string;
    extra: string;
}
