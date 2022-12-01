/**
 * Accounts 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const MANAGER_INTERFACE: string;
export const MANAGER_OBJECT_PATH: string;
export const MANAGER_SERVICE_NAME: string;

export function accounts_error_quark(): GLib.Quark;

export function errors_quark(): GLib.Quark;

export function provider_list_free(list: Provider[]): void;

export function service_list_free(list: Service[]): void;

export function service_type_list_free(list: ServiceType[]): void;

export type AccountNotifyCb = (account: Account, key: string) => void;
export type AccountStoreCb = (account: Account, error: GLib.Error) => void;

export class AccountsError extends GLib.Error {
    static $gtype: GObject.GType<AccountsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: AccountsError);

    // Properties
    static DB: number;
    static DISPOSED: number;
    static DELETED: number;
    static DB_LOCKED: number;
    static ACCOUNT_NOT_FOUND: number;
    static STORE_IN_PROGRESS: number;
    static READONLY: number;
}

export namespace Error {
    export const $gtype: GObject.GType<Error>;
}

export enum Error {
    DB = 0,
    DISPOSED = 1,
    DELETED = 2,
    DB_LOCKED = 3,
    ACCOUNT_NOT_FOUND = 4,
}

export namespace SettingSource {
    export const $gtype: GObject.GType<SettingSource>;
}

export enum SettingSource {
    NONE = 0,
    ACCOUNT = 1,
    PROFILE = 2,
}

export namespace Account {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        display_name: string;
        displayName: string;
        enabled: boolean;
        foreign: boolean;
        id: number;
        manager: Manager;
        provider: string;
    }
}

export class Account extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Account>;

    constructor(properties?: Partial<Account.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Account.ConstructorProperties>, ...args: any[]): void;

    // Properties
    display_name: string;
    displayName: string;
    enabled: boolean;
    foreign: boolean;
    id: number;
    manager: Manager;
    provider: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'deleted', callback: (_source: this) => void): number;

    connect_after(signal: 'deleted', callback: (_source: this) => void): number;

    emit(signal: 'deleted'): void;

    connect(signal: 'display-name-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'display-name-changed', callback: (_source: this) => void): number;

    emit(signal: 'display-name-changed'): void;

    connect(signal: 'enabled', callback: (_source: this, service: string, enabled: boolean) => void): number;

    connect_after(signal: 'enabled', callback: (_source: this, service: string, enabled: boolean) => void): number;

    emit(signal: 'enabled', service: string, enabled: boolean): void;

    // Members

    ['delete'](): void;

    get_display_name(): string;

    get_enabled(): boolean;

    get_manager(): Manager;

    get_provider_name(): string;

    get_selected_service(): Service;

    get_settings_iter(key_prefix?: string | null): AccountSettingIter;

    get_value(key: string, value: any): [SettingSource, unknown];

    get_variant(key: string): [GLib.Variant, SettingSource | null];

    list_enabled_services(): Service[];

    list_services(): Service[];

    list_services_by_type(service_type: string): Service[];

    remove_watch(watch: AccountWatch): void;

    select_service(service?: Service | null): void;

    set_display_name(display_name: string): void;

    set_enabled(enabled: boolean): void;

    set_value(key: string, value?: GObject.Value | null): void;

    set_variant(key: string, value?: GLib.Variant | null): void;

    settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void;

    sign(key: string, token: string): void;

    store(callback: AccountStoreCb): void;

    store_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    store_blocking(): boolean;

    store_finish(res: Gio.AsyncResult): boolean;

    supports_service(service_type: string): boolean;

    verify(key: string, token: string): boolean;

    verify_with_tokens(key: string, tokens: string): boolean;

    watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch;

    watch_key(key: string, callback: AccountNotifyCb): AccountWatch;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace AccountService {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        account: Account;
        enabled: boolean;
        service: Service;
    }
}

export class AccountService extends GObject.Object {
    static $gtype: GObject.GType<AccountService>;

    constructor(properties?: Partial<AccountService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AccountService.ConstructorProperties>, ...args: any[]): void;

    // Properties
    account: Account;
    enabled: boolean;
    service: Service;

    // Fields
    priv: AccountServicePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(signal: 'enabled', callback: (_source: this, enabled: boolean) => void): number;

    connect_after(signal: 'enabled', callback: (_source: this, enabled: boolean) => void): number;

    emit(signal: 'enabled', enabled: boolean): void;

    // Constructors

    static ['new'](account: Account, service?: Service | null): AccountService;

    // Members

    get_account(): Account;

    get_auth_data(): AuthData;

    get_changed_fields(): string[];

    get_enabled(): boolean;

    get_service(): Service;

    get_settings_iter(key_prefix?: string | null): AccountSettingIter;

    get_value(key: string, value: any): [SettingSource, unknown];

    get_variant(key: string): [GLib.Variant, SettingSource | null];

    set_value(key: string, value?: GObject.Value | null): void;

    set_variant(key: string, value?: GLib.Variant | null): void;

    settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void;

    static settings_iter_next(iter: AccountSettingIter): [boolean, string, unknown];
}

export namespace Manager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        abort_on_db_timeout: boolean;
        abortOnDbTimeout: boolean;
        db_timeout: number;
        dbTimeout: number;
        service_type: string;
        serviceType: string;
        use_dbus: boolean;
        useDbus: boolean;
    }
}

export class Manager extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Manager>;

    constructor(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    abort_on_db_timeout: boolean;
    abortOnDbTimeout: boolean;
    db_timeout: number;
    dbTimeout: number;
    service_type: string;
    serviceType: string;
    use_dbus: boolean;
    useDbus: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'account-created', callback: (_source: this, account_id: number) => void): number;

    connect_after(signal: 'account-created', callback: (_source: this, account_id: number) => void): number;

    emit(signal: 'account-created', account_id: number): void;

    connect(signal: 'account-deleted', callback: (_source: this, account_id: number) => void): number;

    connect_after(signal: 'account-deleted', callback: (_source: this, account_id: number) => void): number;

    emit(signal: 'account-deleted', account_id: number): void;

    connect(signal: 'account-updated', callback: (_source: this, account_id: number) => void): number;

    connect_after(signal: 'account-updated', callback: (_source: this, account_id: number) => void): number;

    emit(signal: 'account-updated', account_id: number): void;

    connect(signal: 'enabled-event', callback: (_source: this, account_id: number) => void): number;

    connect_after(signal: 'enabled-event', callback: (_source: this, account_id: number) => void): number;

    emit(signal: 'enabled-event', account_id: number): void;

    // Constructors

    static ['new'](): Manager;

    static new_for_service_type(service_type: string): Manager;

    // Members

    create_account(provider_name: string): Account;

    get_abort_on_db_timeout(): boolean;

    get_account(account_id: AccountId): Account;

    get_account_services(): AccountService[];

    get_application(application_name: string): Application;

    get_db_timeout(): number;

    get_enabled_account_services(): AccountService[];

    get_provider(provider_name: string): Provider;

    get_service(service_name: string): Service;

    get_service_type(): string;

    list(): AccountId[];

    list_applications_by_service(service: Service): Application[];

    list_by_service_type(service_type: string): AccountId[];

    list_enabled(): AccountId[];

    list_enabled_by_service_type(service_type: string): AccountId[];

    list_providers(): Provider[];

    list_service_types(): ServiceType[];

    list_services(): Service[];

    list_services_by_application(application: Application): Service[];

    list_services_by_type(service_type: string): Service[];

    load_account(account_id: AccountId): Account;

    load_service_type(service_type: string): ServiceType;

    set_abort_on_db_timeout(abort: boolean): void;

    set_db_timeout(timeout_ms: number): void;

    vfunc_account_deleted(id: AccountId): void;

    static list_free(list: AccountId[]): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export class AccountPrivate {
    static $gtype: GObject.GType<AccountPrivate>;

    constructor(copy: AccountPrivate);
}

export class AccountServicePrivate {
    static $gtype: GObject.GType<AccountServicePrivate>;

    constructor(copy: AccountServicePrivate);
}

export class AccountSettingIter {
    static $gtype: GObject.GType<AccountSettingIter>;

    constructor(copy: AccountSettingIter);

    // Fields
    account: Account;
    iter1: GLib.HashTableIter;
    ptr1: any;
    ptr2: any;
    idx1: number;
    idx2: number;

    // Members
    free(): void;

    get_next(): [boolean, string, GLib.Variant];

    next(): [boolean, string, unknown];
}

export class AccountWatch {
    static $gtype: GObject.GType<AccountWatch>;

    constructor(copy: AccountWatch);
}

export class Application {
    static $gtype: GObject.GType<Application>;

    constructor(copy: Application);

    // Members
    get_description(): string;

    get_desktop_app_info(): Gio.DesktopAppInfo;

    get_i18n_domain(): string;

    get_name(): string;

    get_service_usage(service: Service): string;

    ref(): Application;

    supports_service(service: Service): boolean;

    unref(): void;
}

export class AuthData {
    static $gtype: GObject.GType<AuthData>;

    constructor(copy: AuthData);

    // Members
    get_credentials_id(): number;

    get_login_parameters(extra_parameters?: GLib.Variant | null): GLib.Variant;

    get_mechanism(): string;

    get_method(): string;

    get_parameters(): GLib.HashTable<string, GObject.Value>;

    insert_parameters(parameters: GLib.HashTable<string, GObject.Value>): void;

    ref(): AuthData;

    unref(): void;
}

export class ManagerPrivate {
    static $gtype: GObject.GType<ManagerPrivate>;

    constructor(copy: ManagerPrivate);
}

export class Provider {
    static $gtype: GObject.GType<Provider>;

    constructor(copy: Provider);

    // Members
    get_description(): string;

    get_display_name(): string;

    get_domains_regex(): string;

    get_file_contents(contents: string): void;

    get_i18n_domain(): string;

    get_icon_name(): string;

    get_name(): string;

    get_plugin_name(): string;

    get_single_account(): boolean;

    get_tags(): string[];

    match_domain(domain: string): boolean;

    ref(): Provider;

    unref(): void;

    static list_free(list: Provider[]): void;
}

export class Service {
    static $gtype: GObject.GType<Service>;

    constructor(copy: Service);

    // Members
    get_description(): string;

    get_display_name(): string;

    get_file_contents(contents: string, data_offset: number): void;

    get_i18n_domain(): string;

    get_icon_name(): string;

    get_name(): string;

    get_provider(): string;

    get_service_type(): string;

    get_tags(): string[];

    has_tag(tag: string): boolean;

    ref(): Service;

    unref(): void;

    static list_free(list: Service[]): void;
}

export class ServiceType {
    static $gtype: GObject.GType<ServiceType>;

    constructor(copy: ServiceType);

    // Members
    get_description(): string;

    get_display_name(): string;

    get_file_contents(contents: string, len: number): void;

    get_i18n_domain(): string;

    get_icon_name(): string;

    get_name(): string;

    get_tags(): string[];

    has_tag(tag: string): boolean;

    ref(): ServiceType;

    unref(): void;

    static list_free(list: ServiceType[]): void;
}

export type AccountId = number;
