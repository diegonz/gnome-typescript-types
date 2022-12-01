/**
 * EDataServer 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as Soup from './soup';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export const CLIENT_BACKEND_PROPERTY_CACHE_DIR: string;
export const CLIENT_BACKEND_PROPERTY_CAPABILITIES: string;
export const CLIENT_BACKEND_PROPERTY_ONLINE: string;
export const CLIENT_BACKEND_PROPERTY_OPENED: string;
export const CLIENT_BACKEND_PROPERTY_OPENING: string;
export const CLIENT_BACKEND_PROPERTY_READONLY: string;
export const CLIENT_BACKEND_PROPERTY_REVISION: string;
export const DEBUG_LOG_DOMAIN_CAL_QUERIES: string;
export const DEBUG_LOG_DOMAIN_GLOG: string;
export const DEBUG_LOG_DOMAIN_USER: string;
export const EDS_MAJOR_VERSION: number;
export const EDS_MICRO_VERSION: number;
export const EDS_MINOR_VERSION: number;
export const NETWORK_MONITOR_ALWAYS_ONLINE_NAME: string;
export const OAUTH2_SECRET_ACCESS_TOKEN: string;
export const OAUTH2_SECRET_EXPIRES_AFTER: string;
export const OAUTH2_SECRET_REFRESH_TOKEN: string;
export const SOURCE_CREDENTIAL_PASSWORD: string;
export const SOURCE_CREDENTIAL_SSL_TRUST: string;
export const SOURCE_CREDENTIAL_USERNAME: string;
export const SOURCE_EXTENSION_ADDRESS_BOOK: string;
export const SOURCE_EXTENSION_ALARMS: string;
export const SOURCE_EXTENSION_AUTHENTICATION: string;
export const SOURCE_EXTENSION_AUTOCOMPLETE: string;
export const SOURCE_EXTENSION_AUTOCONFIG: string;
export const SOURCE_EXTENSION_CALENDAR: string;
export const SOURCE_EXTENSION_COLLECTION: string;
export const SOURCE_EXTENSION_CONTACTS_BACKEND: string;
export const SOURCE_EXTENSION_GOA: string;
export const SOURCE_EXTENSION_LDAP_BACKEND: string;
export const SOURCE_EXTENSION_LOCAL_BACKEND: string;
export const SOURCE_EXTENSION_MAIL_ACCOUNT: string;
export const SOURCE_EXTENSION_MAIL_COMPOSITION: string;
export const SOURCE_EXTENSION_MAIL_IDENTITY: string;
export const SOURCE_EXTENSION_MAIL_SIGNATURE: string;
export const SOURCE_EXTENSION_MAIL_SUBMISSION: string;
export const SOURCE_EXTENSION_MAIL_TRANSPORT: string;
export const SOURCE_EXTENSION_MDN: string;
export const SOURCE_EXTENSION_MEMO_LIST: string;
export const SOURCE_EXTENSION_OFFLINE: string;
export const SOURCE_EXTENSION_OPENPGP: string;
export const SOURCE_EXTENSION_PROXY: string;
export const SOURCE_EXTENSION_REFRESH: string;
export const SOURCE_EXTENSION_RESOURCE: string;
export const SOURCE_EXTENSION_REVISION_GUARDS: string;
export const SOURCE_EXTENSION_SECURITY: string;
export const SOURCE_EXTENSION_SMIME: string;
export const SOURCE_EXTENSION_TASK_LIST: string;
export const SOURCE_EXTENSION_UOA: string;
export const SOURCE_EXTENSION_WEATHER_BACKEND: string;
export const SOURCE_EXTENSION_WEBDAV_BACKEND: string;
export const SOURCE_PARAM_SETTING: number;
export const WEBDAV_CAPABILITY_ACCESS_CONTROL: string;
export const WEBDAV_CAPABILITY_ADDRESSBOOK: string;
export const WEBDAV_CAPABILITY_BIND: string;
export const WEBDAV_CAPABILITY_CALENDAR_ACCESS: string;
export const WEBDAV_CAPABILITY_CALENDAR_AUTO_SCHEDULE: string;
export const WEBDAV_CAPABILITY_CALENDAR_PROXY: string;
export const WEBDAV_CAPABILITY_CALENDAR_SCHEDULE: string;
export const WEBDAV_CAPABILITY_CLASS_1: string;
export const WEBDAV_CAPABILITY_CLASS_2: string;
export const WEBDAV_CAPABILITY_CLASS_3: string;
export const WEBDAV_CAPABILITY_EXTENDED_MKCOL: string;
export const WEBDAV_COLLATION_ASCII_CASEMAP: string;
export const WEBDAV_COLLATION_ASCII_CASEMAP_SUFFIX: string;
export const WEBDAV_COLLATION_ASCII_NUMERIC: string;
export const WEBDAV_COLLATION_ASCII_NUMERIC_SUFFIX: string;
export const WEBDAV_COLLATION_OCTET: string;
export const WEBDAV_COLLATION_OCTET_SUFFIX: string;
export const WEBDAV_COLLATION_UNICODE_CASEMAP: string;
export const WEBDAV_COLLATION_UNICODE_CASEMAP_SUFFIX: string;
export const WEBDAV_CONTENT_TYPE_CALENDAR: string;
export const WEBDAV_CONTENT_TYPE_VCARD: string;
export const WEBDAV_CONTENT_TYPE_XML: string;
export const WEBDAV_DEPTH_INFINITY: string;
export const WEBDAV_DEPTH_THIS: string;
export const WEBDAV_DEPTH_THIS_AND_CHILDREN: string;
export const WEBDAV_NS_CALDAV: string;
export const WEBDAV_NS_CALENDARSERVER: string;
export const WEBDAV_NS_CARDDAV: string;
export const WEBDAV_NS_DAV: string;
export const WEBDAV_NS_ICAL: string;

export function binding_bind_property(
    source: GObject.Object,
    source_property: string,
    target: GObject.Object,
    target_property: string,
    flags: GObject.BindingFlags
): GObject.Binding;

export function binding_bind_property_full(
    source: GObject.Object,
    source_property: string,
    target: GObject.Object,
    target_property: string,
    flags: GObject.BindingFlags,
    transform_to: GObject.Closure,
    transform_from: GObject.Closure
): GObject.Binding;

export function binding_transform_enum_nick_to_value(
    binding: GObject.Binding,
    source_value: any,
    target_value: any,
    not_used?: any | null
): boolean;

export function binding_transform_enum_value_to_nick(
    binding: GObject.Binding,
    source_value: any,
    target_value: any,
    not_used?: any | null
): boolean;

export function categories_add(category: string, unused: string, icon_file: string, searchable: boolean): void;

export function categories_dup_icon_file_for(category: string): string;

export function categories_dup_list(): string[];

export function categories_exist(category: string): boolean;

export function categories_get_icon_file_for(category: string): string;

export function categories_get_list(): string[];

export function categories_is_searchable(category: string): boolean;

export function categories_register_change_listener(listener: GObject.Callback): void;

export function categories_remove(category: string): void;

export function categories_set_icon_file_for(category: string, icon_file: string): void;

export function categories_unregister_change_listener(listener: GObject.Callback): void;

export function collator_error_quark(): GLib.Quark;

export function data_server_util_get_dbus_call_timeout(): number;

export function data_server_util_set_dbus_call_timeout(timeout_msec: number): void;

export function debug_log_clear(): void;

export function debug_log_disable_domains(domains: string[]): void;

export function debug_log_dump(filename: string): boolean;

export function debug_log_dump_to_dated_file(): boolean;

export function debug_log_enable_domains(domains: string[]): void;

export function debug_log_get_max_lines(): number;

export function debug_log_is_domain_enabled(domain: string): boolean;

export function debug_log_load_configuration(filename: string): boolean;

export function debug_log_set_max_lines(num_lines: number): void;

export function eds_check_version(required_major: number, required_minor: number, required_micro: number): string;

export function enum_from_string(enum_type: GObject.GType, string: string, enum_value: number): boolean;

export function enum_to_string(enum_type: GObject.GType, enum_value: number): string;

export function file_recursive_delete(
    file: Gio.File,
    io_priority: number,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gio.File> | null
): void;

export function file_recursive_delete_finish(file: Gio.File, result: Gio.AsyncResult): boolean;

export function file_recursive_delete_sync(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

export function filename_make_safe(string: string): void;

export function filename_mkdir_encoded(
    basepath: string,
    fileprefix: string,
    filename: string,
    fileindex: number
): string;

export function free_form_exp_to_sexp(free_form_exp: string, symbols: FreeFormExpSymbol): string;

export function get_user_cache_dir(): string;

export function get_user_config_dir(): string;

export function get_user_data_dir(): string;

export function localtime_with_offset(tt: number, tm: any | null, offset: number): void;

export function mktime_utc(tm?: any | null): number;

export function oauth2_service_util_set_to_form(
    form: GLib.HashTable<string, string>,
    name: string,
    value?: string | null
): void;

export function oauth2_service_util_take_to_form(
    form: GLib.HashTable<string, string>,
    name: string,
    value?: string | null
): void;

export function queue_transfer(src_queue: GLib.Queue, dst_queue: GLib.Queue): void;

export function secret_store_delete_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean;

export function secret_store_lookup_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string];

export function secret_store_store_sync(
    uid: string,
    secret: string,
    label: string,
    permanently: boolean,
    cancellable?: Gio.Cancellable | null
): boolean;

export function soup_logger_attach(message: Soup.Message, input_stream: Gio.InputStream): Gio.InputStream;

export function soup_ssl_trust_connect(soup_message: Soup.Message, source: Source): void;

export function strftime(string: string, max: number, fmt: string, tm?: any | null): number;

export function time_format_date_and_time(
    date_tm: any | null,
    use_24_hour_format: boolean,
    show_midnight: boolean,
    show_zero_seconds: boolean,
    buffer: string,
    buffer_size: number
): void;

export function time_format_time(
    date_tm: any | null,
    use_24_hour_format: boolean,
    show_zero_seconds: boolean,
    buffer: string,
    buffer_size: number
): void;

export function time_get_d_fmt_with_4digit_year(): string;

export function time_parse_date(value: string, result?: any | null): TimeParseStatus;

export function time_parse_date_and_time(value: string, result?: any | null): TimeParseStatus;

export function time_parse_date_and_time_ex(
    value: string,
    result: any | null,
    two_digit_year: boolean
): TimeParseStatus;

export function time_parse_date_ex(value: string, result: any | null, two_digit_year: boolean): TimeParseStatus;

export function time_parse_time(value: string, result?: any | null): TimeParseStatus;

export function timeout_add_seconds_with_name(
    priority: number,
    interval: number,
    name: string | null,
    _function: GLib.SourceFunc,
    notify?: GLib.DestroyNotify | null
): number;

export function timeout_add_with_name(
    priority: number,
    interval: number,
    name: string | null,
    _function: GLib.SourceFunc,
    notify?: GLib.DestroyNotify | null
): number;

export function type_traverse(parent_type: GObject.GType, func: TypeFunc): void;

export function uid_new(): string;

export function utf8_strftime(string: string, max: number, fmt: string, tm?: any | null): number;

export function util_can_use_collection_as_credential_source(
    collection_source?: any | null,
    child_source?: any | null
): boolean;

export function util_copy_object_slist(copy_to: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[];

export function util_copy_string_slist(copy_to: string[] | null, strings: string[]): string[];

export function util_ensure_gdbus_string(str: string, gdbus_str: string): string;

export function util_free_nullable_object_slist(objects: GObject.Object[]): void;

export function util_free_object_slist(objects: GObject.Object[]): void;

export function util_free_string_slist(strings: string[]): void;

export function util_generate_uid(): string;

export function util_get_source_full_name(registry?: any | null, source?: any | null): string;

export function util_gthread_id(thread: GLib.Thread): number;

export function util_identity_can_send(registry?: any | null, identity_source?: any | null): boolean;

export function util_safe_free_string(str: string): void;

export function util_slist_to_strv(strings: string[]): string[];

export function util_strcmp0(str1: string, str2: string): number;

export function util_strdup_strip(string?: string | null): string;

export function util_strstrcase(haystack: string, needle: string): string;

export function util_strv_equal(v1?: any | null, v2?: any | null): boolean;

export function util_strv_to_slist(strv: string): string[];

export function util_unicode_get_utf8(text: string, out: number): string;

export function util_unref_in_thread(object?: any | null): void;

export function util_utf8_data_make_valid(data: string, data_bytes: number): string;

export function util_utf8_decompose(text: string): string;

export function util_utf8_make_valid(str: string): string;

export function util_utf8_normalize(str: string): string;

export function util_utf8_remove_accents(str: string): string;

export function util_utf8_strcasecmp(s1: string, s2: string): number;

export function util_utf8_strstrcase(haystack: string, needle: string): string;

export function util_utf8_strstrcasedecomp(haystack: string, needle: string): string;

export function webdav_access_control_entry_free(ptr?: any | null): void;

export function webdav_discover_free_discovered_sources(discovered_sources: WebDAVDiscoveredSource[]): void;

export function webdav_discover_sources(
    source: Source,
    url_use_path: string | null,
    only_supports: number,
    credentials?: NamedParameters | null,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Source> | null
): void;

export function webdav_discover_sources_finish(
    source: Source,
    result: Gio.AsyncResult
): [boolean, string | null, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[], string[] | null];

export function webdav_discover_sources_full(
    source: Source,
    url_use_path: string | null,
    only_supports: number,
    credentials?: NamedParameters | null,
    ref_source_func?: WebDAVDiscoverRefSourceFunc | null,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Source> | null
): void;

export function webdav_discover_sources_full_sync(
    source: Source,
    url_use_path: string | null,
    only_supports: number,
    credentials: NamedParameters | null,
    ref_source_func: WebDAVDiscoverRefSourceFunc | null,
    cancellable?: Gio.Cancellable | null
): [boolean, string | null, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[], string[] | null];

export function webdav_discover_sources_sync(
    source: Source,
    url_use_path: string | null,
    only_supports: number,
    credentials: NamedParameters | null,
    cancellable?: Gio.Cancellable | null
): [boolean, string | null, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[], string[] | null];

export function webdav_privilege_free(ptr?: any | null): void;

export function webdav_property_change_free(ptr?: any | null): void;

export function webdav_resource_free(ptr?: any | null): void;

export function xml_destroy_hash(hash: GLib.HashTable<string, string>): void;

export function xml_save_file(filename: string, doc: libxml2.Doc): number;

export function xml_to_hash(doc: libxml2.Doc, type: XmlHashType): GLib.HashTable<string, string>;

export function xmlhash_add(hash: XmlHash, key: string, data: string): void;

export function xmlhash_compare(hash: XmlHash, key: string, compare_data: string): XmlHashStatus;

export function xmlhash_destroy(hash: XmlHash): void;

export function xmlhash_foreach_key(hash: XmlHash, func: XmlHashFunc): void;

export function xmlhash_foreach_key_remove(hash: XmlHash, func: XmlHashRemoveFunc): void;

export function xmlhash_remove(hash: XmlHash, key: string): void;

export function xmlhash_write(hash: XmlHash): void;

export type FreeFormExpBuildSexpFunc = (word: string, options: string, hint: string) => string;
export type OAuth2ServiceRefSourceFunc = (uid: string) => Source | null;
export type SourceRefreshFunc = (source: Source) => void;
export type TypeFunc = (type: GObject.GType) => void;
export type WebDAVDiscoverRefSourceFunc = (uid: string) => Source | null;
export type WebDAVPropstatTraverseFunc = (
    webdav: WebDAVSession,
    prop_node: libxml2.Node,
    request_uri: Soup.URI,
    href: string | null,
    status_code: number
) => boolean;
export type XmlHashFunc = (key: string, value: string) => void;
export type XmlHashRemoveFunc = (key: string, value: string) => boolean;

export namespace ClientError {
    export const $gtype: GObject.GType<ClientError>;
}

export enum ClientError {
    INVALID_ARG = 0,
    BUSY = 1,
    SOURCE_NOT_LOADED = 2,
    SOURCE_ALREADY_LOADED = 3,
    AUTHENTICATION_FAILED = 4,
    AUTHENTICATION_REQUIRED = 5,
    REPOSITORY_OFFLINE = 6,
    OFFLINE_UNAVAILABLE = 7,
    PERMISSION_DENIED = 8,
    CANCELLED = 9,
    COULD_NOT_CANCEL = 10,
    NOT_SUPPORTED = 11,
    TLS_NOT_AVAILABLE = 12,
    UNSUPPORTED_AUTHENTICATION_METHOD = 13,
    SEARCH_SIZE_LIMIT_EXCEEDED = 14,
    SEARCH_TIME_LIMIT_EXCEEDED = 15,
    INVALID_QUERY = 16,
    QUERY_REFUSED = 17,
    DBUS_ERROR = 18,
    OTHER_ERROR = 19,
    NOT_OPENED = 20,
    OUT_OF_SYNC = 21,
}

export class CollatorError extends GLib.Error {
    static $gtype: GObject.GType<CollatorError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CollatorError);

    // Properties
    static OPEN: number;
    static CONVERSION: number;
    static INVALID_LOCALE: number;
}

export namespace ConflictResolution {
    export const $gtype: GObject.GType<ConflictResolution>;
}

export enum ConflictResolution {
    FAIL = 0,
    USE_NEWER = 1,
    KEEP_SERVER = 2,
    KEEP_LOCAL = 3,
    WRITE_COPY = 4,
}

export namespace MdnResponsePolicy {
    export const $gtype: GObject.GType<MdnResponsePolicy>;
}

export enum MdnResponsePolicy {
    NEVER = 0,
    ALWAYS = 1,
    ASK = 2,
}

export namespace OAuth2ServiceNavigationPolicy {
    export const $gtype: GObject.GType<OAuth2ServiceNavigationPolicy>;
}

export enum OAuth2ServiceNavigationPolicy {
    DENY = 0,
    ALLOW = 1,
    ABORT = 2,
}

export namespace ProxyMethod {
    export const $gtype: GObject.GType<ProxyMethod>;
}

export enum ProxyMethod {
    DEFAULT = 0,
    MANUAL = 1,
    AUTO = 2,
    NONE = 3,
}

export namespace SourceAuthenticationResult {
    export const $gtype: GObject.GType<SourceAuthenticationResult>;
}

export enum SourceAuthenticationResult {
    UNKNOWN = -1,
    ERROR = 0,
    ERROR_SSL_FAILED = 1,
    ACCEPTED = 2,
    REJECTED = 3,
    REQUIRED = 4,
}

export namespace SourceConnectionStatus {
    export const $gtype: GObject.GType<SourceConnectionStatus>;
}

export enum SourceConnectionStatus {
    DISCONNECTED = 0,
    AWAITING_CREDENTIALS = 1,
    SSL_FAILED = 2,
    CONNECTING = 3,
    CONNECTED = 4,
}

export namespace SourceCredentialsReason {
    export const $gtype: GObject.GType<SourceCredentialsReason>;
}

export enum SourceCredentialsReason {
    UNKNOWN = 0,
    REQUIRED = 1,
    REJECTED = 2,
    SSL_FAILED = 3,
    ERROR = 4,
}

export namespace SourceLDAPAuthentication {
    export const $gtype: GObject.GType<SourceLDAPAuthentication>;
}

export enum SourceLDAPAuthentication {
    NONE = 0,
    EMAIL = 1,
    BINDDN = 2,
}

export namespace SourceLDAPScope {
    export const $gtype: GObject.GType<SourceLDAPScope>;
}

export enum SourceLDAPScope {
    ONELEVEL = 0,
    SUBTREE = 1,
}

export namespace SourceLDAPSecurity {
    export const $gtype: GObject.GType<SourceLDAPSecurity>;
}

export enum SourceLDAPSecurity {
    NONE = 0,
    LDAPS = 1,
    STARTTLS = 2,
}

export namespace SourceMailCompositionReplyStyle {
    export const $gtype: GObject.GType<SourceMailCompositionReplyStyle>;
}

export enum SourceMailCompositionReplyStyle {
    DEFAULT = 0,
    QUOTED = 1,
    DO_NOT_QUOTE = 2,
    ATTACH = 3,
    OUTLOOK = 4,
}

export namespace SourceWeatherUnits {
    export const $gtype: GObject.GType<SourceWeatherUnits>;
}

export enum SourceWeatherUnits {
    FAHRENHEIT = 0,
    CENTIGRADE = 1,
    KELVIN = 2,
}

export namespace ThreeState {
    export const $gtype: GObject.GType<ThreeState>;
}

export enum ThreeState {
    OFF = 0,
    ON = 1,
    INCONSISTENT = 2,
}

export namespace TimeParseStatus {
    export const $gtype: GObject.GType<TimeParseStatus>;
}

export enum TimeParseStatus {
    OK = 0,
    NONE = 1,
    INVALID = 2,
}

export namespace TrustPromptResponse {
    export const $gtype: GObject.GType<TrustPromptResponse>;
}

export enum TrustPromptResponse {
    UNKNOWN = -1,
    REJECT = 0,
    ACCEPT = 1,
    ACCEPT_TEMPORARILY = 2,
    REJECT_TEMPORARILY = 3,
}

export namespace WebDAVACEPrincipalKind {
    export const $gtype: GObject.GType<WebDAVACEPrincipalKind>;
}

export enum WebDAVACEPrincipalKind {
    UNKNOWN = 0,
    HREF = 1,
    ALL = 2,
    AUTHENTICATED = 3,
    UNAUTHENTICATED = 4,
    PROPERTY = 5,
    SELF = 6,
    OWNER = 7,
}

export namespace WebDAVLockScope {
    export const $gtype: GObject.GType<WebDAVLockScope>;
}

export enum WebDAVLockScope {
    EXCLUSIVE = 0,
    SHARED = 1,
}

export namespace WebDAVPrivilegeHint {
    export const $gtype: GObject.GType<WebDAVPrivilegeHint>;
}

export enum WebDAVPrivilegeHint {
    UNKNOWN = 0,
    READ = 1,
    WRITE = 2,
    WRITE_PROPERTIES = 3,
    WRITE_CONTENT = 4,
    UNLOCK = 5,
    READ_ACL = 6,
    WRITE_ACL = 7,
    READ_CURRENT_USER_PRIVILEGE_SET = 8,
    BIND = 9,
    UNBIND = 10,
    ALL = 11,
    CALDAV_READ_FREE_BUSY = 12,
}

export namespace WebDAVPrivilegeKind {
    export const $gtype: GObject.GType<WebDAVPrivilegeKind>;
}

export enum WebDAVPrivilegeKind {
    UNKNOWN = 0,
    ABSTRACT = 1,
    AGGREGATE = 2,
    COMMON = 3,
}

export namespace WebDAVPropertyChangeKind {
    export const $gtype: GObject.GType<WebDAVPropertyChangeKind>;
}

export enum WebDAVPropertyChangeKind {
    SET = 0,
    REMOVE = 1,
}

export namespace WebDAVResourceKind {
    export const $gtype: GObject.GType<WebDAVResourceKind>;
}

export enum WebDAVResourceKind {
    UNKNOWN = 0,
    ADDRESSBOOK = 1,
    CALENDAR = 2,
    PRINCIPAL = 3,
    COLLECTION = 4,
    RESOURCE = 5,
    SUBSCRIBED_ICALENDAR = 6,
    WEBDAV_NOTES = 7,
}

export namespace XmlHashStatus {
    export const $gtype: GObject.GType<XmlHashStatus>;
}

export enum XmlHashStatus {
    SAME = 0,
    DIFFERENT = 1,
    NOT_FOUND = 2,
}

export namespace XmlHashType {
    export const $gtype: GObject.GType<XmlHashType>;
}

export enum XmlHashType {
    OBJECT_UID = 0,
    PROPERTY = 1,
}

export namespace OAuth2ServiceFlags {
    export const $gtype: GObject.GType<OAuth2ServiceFlags>;
}

export enum OAuth2ServiceFlags {
    NONE = 0,
    EXTRACT_REQUIRES_PAGE_CONTENT = 2,
}

export namespace WebDAVACEFlag {
    export const $gtype: GObject.GType<WebDAVACEFlag>;
}

export enum WebDAVACEFlag {
    UNKNOWN = 0,
    GRANT = 1,
    DENY = 2,
    INVERT = 4,
    PROTECTED = 8,
    INHERITED = 16,
}

export namespace WebDAVACLRestrictions {
    export const $gtype: GObject.GType<WebDAVACLRestrictions>;
}

export enum WebDAVACLRestrictions {
    NONE = 0,
    GRANT_ONLY = 1,
    NO_INVERT = 2,
    DENY_BEFORE_GRANT = 4,
    REQUIRED_PRINCIPAL = 8,
}

export namespace WebDAVDiscoverSupports {
    export const $gtype: GObject.GType<WebDAVDiscoverSupports>;
}

export enum WebDAVDiscoverSupports {
    NONE = 0,
    CONTACTS = 1,
    EVENTS = 2,
    MEMOS = 4,
    TASKS = 8,
    WEBDAV_NOTES = 64,
    CALENDAR_AUTO_SCHEDULE = 128,
    SUBSCRIBED_ICALENDAR = 256,
}

export namespace WebDAVListFlags {
    export const $gtype: GObject.GType<WebDAVListFlags>;
}

export enum WebDAVListFlags {
    ALL = 4294967295,
    NONE = 0,
    SUPPORTS = 1,
    ETAG = 2,
    DISPLAY_NAME = 4,
    CONTENT_TYPE = 8,
    CONTENT_LENGTH = 16,
    CREATION_DATE = 32,
    LAST_MODIFIED = 64,
    DESCRIPTION = 128,
    COLOR = 256,
    ONLY_CALENDAR = 512,
    ONLY_ADDRESSBOOK = 1024,
}

export namespace WebDAVResourceSupports {
    export const $gtype: GObject.GType<WebDAVResourceSupports>;
}

export enum WebDAVResourceSupports {
    NONE = 0,
    CONTACTS = 1,
    EVENTS = 2,
    MEMOS = 4,
    TASKS = 8,
    FREEBUSY = 16,
    TIMEZONE = 32,
    WEBDAV_NOTES = 64,
    LAST = 64,
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        capabilities: any;
        main_context: GLib.MainContext;
        mainContext: GLib.MainContext;
        online: boolean;
        opened: boolean;
        readonly: boolean;
        source: Source;
    }
}

export abstract class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    capabilities: any;
    main_context: GLib.MainContext;
    mainContext: GLib.MainContext;
    online: boolean;
    opened: boolean;
    readonly: boolean;
    source: Source;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'backend-died', callback: (_source: this) => void): number;

    connect_after(signal: 'backend-died', callback: (_source: this) => void): number;

    emit(signal: 'backend-died'): void;

    connect(signal: 'backend-error', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'backend-error', callback: (_source: this, object: string) => void): number;

    emit(signal: 'backend-error', object: string): void;

    connect(signal: 'backend-property-changed', callback: (_source: this, object: string, p0: string) => void): number;

    connect_after(
        signal: 'backend-property-changed',
        callback: (_source: this, object: string, p0: string) => void
    ): number;

    emit(signal: 'backend-property-changed', object: string, p0: string): void;

    connect(signal: 'opened', callback: (_source: this, object: GLib.Error) => void): number;

    connect_after(signal: 'opened', callback: (_source: this, object: GLib.Error) => void): number;

    emit(signal: 'opened', object: GLib.Error): void;

    // Members

    cancel_all(): void;

    check_capability(capability: string): boolean;

    check_refresh_supported(): boolean;

    dup_bus_name(): string;

    get_backend_property(
        prop_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_backend_property_finish(result: Gio.AsyncResult): [boolean, string];

    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [boolean, string];

    get_capabilities(): string[];

    get_source(): Source;

    is_online(): boolean;

    is_opened(): boolean;

    is_readonly(): boolean;

    open(
        only_if_exists: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    open_finish(result: Gio.AsyncResult): boolean;

    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean;

    ref_main_context(): GLib.MainContext;

    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    refresh_finish(result: Gio.AsyncResult): boolean;

    refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    remove_finish(result: Gio.AsyncResult): boolean;

    remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    retrieve_capabilities_finish(result: Gio.AsyncResult): [boolean, string];

    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [boolean, string];

    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    retrieve_properties_finish(result: Gio.AsyncResult): boolean;

    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean;

    set_backend_property(
        prop_name: string,
        prop_value: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_backend_property_finish(result: Gio.AsyncResult): boolean;

    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean;

    set_bus_name(bus_name: string): void;

    unwrap_dbus_error(dbus_error: GLib.Error): void;

    wait_for_connected(
        timeout_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    wait_for_connected_finish(result: Gio.AsyncResult): boolean;

    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_backend_died(): void;

    vfunc_backend_error(error_msg: string): void;

    vfunc_backend_property_changed(prop_name: string, prop_value: string): void;

    vfunc_get_backend_property(
        prop_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [boolean, string];

    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [boolean, string];

    vfunc_open(
        only_if_exists: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_open_finish(result: Gio.AsyncResult): boolean;

    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_opened(error: GLib.Error): void;

    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_refresh_finish(result: Gio.AsyncResult): boolean;

    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remove_finish(result: Gio.AsyncResult): boolean;

    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_retrieve_capabilities(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [boolean, string];

    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [boolean, string];

    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_set_backend_property(
        prop_name: string,
        prop_value: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean;

    vfunc_set_backend_property_sync(
        prop_name: string,
        prop_value: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void;

    static error_create(code: ClientError, custom_msg?: string | null): GLib.Error;

    static error_quark(): GLib.Quark;

    static error_to_string(code: ClientError): string;

    static util_copy_object_slist(copy_to: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[];

    static util_copy_string_slist(copy_to: string[] | null, strings: string[]): string[];

    static util_free_object_slist(objects: GObject.Object[]): void;

    static util_free_string_slist(strings: string[]): void;

    static util_parse_comma_strings(strings: string): string[];

    static util_slist_to_strv(strings: string[]): string[];

    static util_strv_to_slist(strv: string): string[];

    static util_unwrap_dbus_error(
        dbus_error: GLib.Error,
        known_errors: ClientErrorsList,
        known_errors_count: number,
        known_errors_domain: GLib.Quark,
        fail_when_none_matched: boolean
    ): [boolean, GLib.Error];
}

export namespace Extension {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        extensible: Extensible;
    }
}

export abstract class Extension extends GObject.Object {
    static $gtype: GObject.GType<Extension>;

    constructor(properties?: Partial<Extension.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Extension.ConstructorProperties>, ...args: any[]): void;

    // Properties
    extensible: Extensible;

    // Members

    get_extensible(): Extensible;
}

export namespace GDataOAuth2Authorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        service_type: GObject.GType;
        serviceType: GObject.GType;
        source: Source;
    }
}

export class GDataOAuth2Authorizer extends GObject.Object {
    static $gtype: GObject.GType<GDataOAuth2Authorizer>;

    constructor(properties?: Partial<GDataOAuth2Authorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDataOAuth2Authorizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    service_type: GObject.GType;
    serviceType: GObject.GType;
    source: Source;

    // Fields
    priv: GDataOAuth2AuthorizerPrivate;

    // Constructors

    static ['new'](source: Source, service_type: GObject.GType): GDataOAuth2Authorizer;

    // Members

    clone_credentials(): NamedParameters | null;

    get_service_type(): GObject.GType;

    is_expired(): boolean;

    ref_source(): Source;

    set_credentials(credentials?: NamedParameters | null): void;

    static supported(): boolean;
}

export namespace Module {
    export interface ConstructorProperties extends GObject.TypeModule.ConstructorProperties {
        [key: string]: any;

        filename: string;
    }
}

export class Module extends GObject.TypeModule implements GObject.TypePlugin {
    static $gtype: GObject.GType<Module>;

    constructor(properties?: Partial<Module.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Module.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;

    // Constructors

    static ['new'](filename: string): Module;

    // Members

    get_filename(): string;

    static load_all_in_directory(dirname: string): Module[];

    static load_file(filename: string): Module;

    // Implemented Members

    complete_interface_info(
        instance_type: GObject.GType,
        interface_type: GObject.GType,
        info: GObject.InterfaceInfo
    ): void;

    complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;

    unuse(): void;

    use(): void;
    use(...args: never[]): never;
}

export namespace NetworkMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        gio_name: string;
        gioName: string;
    }
}

export class NetworkMonitor extends GObject.Object implements Gio.Initable, Gio.NetworkMonitor {
    static $gtype: GObject.GType<NetworkMonitor>;

    constructor(properties?: Partial<NetworkMonitor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NetworkMonitor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    gio_name: string;
    gioName: string;

    // Implemented Properties

    connectivity: Gio.NetworkConnectivity;
    network_available: boolean;
    networkAvailable: boolean;
    network_metered: boolean;
    networkMetered: boolean;

    // Members

    dup_gio_name(): string;

    list_gio_names(): string[];

    set_gio_name(gio_name?: string | null): void;

    static get_default(): Gio.NetworkMonitor;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    can_reach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean;

    can_reach_async(
        connectable: Gio.SocketConnectable,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    can_reach_finish(result: Gio.AsyncResult): boolean;

    get_connectivity(): Gio.NetworkConnectivity;

    get_network_available(): boolean;

    get_network_metered(): boolean;

    vfunc_can_reach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_reach_async(
        connectable: Gio.SocketConnectable,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_can_reach_finish(result: Gio.AsyncResult): boolean;

    vfunc_network_changed(network_available: boolean): void;
}

export namespace OAuth2ServiceBase {
    export interface ConstructorProperties extends Extension.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class OAuth2ServiceBase extends Extension {
    static $gtype: GObject.GType<OAuth2ServiceBase>;

    constructor(properties?: Partial<OAuth2ServiceBase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2ServiceBase.ConstructorProperties>, ...args: any[]): void;
}

export namespace OAuth2ServiceGoogle {
    export interface ConstructorProperties extends OAuth2ServiceBase.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuth2ServiceGoogle extends OAuth2ServiceBase implements OAuth2Service {
    static $gtype: GObject.GType<OAuth2ServiceGoogle>;

    constructor(properties?: Partial<OAuth2ServiceGoogle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2ServiceGoogle.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    can_process(source: Source): boolean;

    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    extract_authorization_code(
        source: Source,
        page_title: string,
        page_uri: string,
        page_content: string | null
    ): [boolean, string];

    get_access_token_sync(
        source: Source,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, number];

    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;

    get_authentication_uri(source: Source): string;

    get_client_id(source: Source): string;

    get_client_secret(source: Source): string | null;

    get_display_name(): string;

    get_flags(): number;

    get_name(): string;

    get_redirect_uri(source: Source): string | null;

    get_refresh_uri(source: Source): string;

    guess_can_process(protocol?: string | null, hostname?: string | null): boolean;

    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable<string, string>): void;

    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable<string, string>): void;

    prepare_get_token_message(source: Source, message: Soup.Message): void;

    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable<string, string>): void;

    prepare_refresh_token_message(source: Source, message: Soup.Message): void;

    receive_and_store_token_sync(
        source: Source,
        authorization_code: string,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    refresh_and_store_token_sync(
        source: Source,
        refresh_token: string,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_can_process(source: Source): boolean;

    vfunc_extract_authorization_code(
        source: Source,
        page_title: string,
        page_uri: string,
        page_content: string | null
    ): [boolean, string];

    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;

    vfunc_get_authentication_uri(source: Source): string;

    vfunc_get_client_id(source: Source): string;

    vfunc_get_client_secret(source: Source): string | null;

    vfunc_get_display_name(): string;

    vfunc_get_flags(): number;

    vfunc_get_name(): string;

    vfunc_get_redirect_uri(source: Source): string | null;

    vfunc_get_refresh_uri(source: Source): string;

    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;

    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable<string, string>): void;

    vfunc_prepare_get_token_form(
        source: Source,
        authorization_code: string,
        form: GLib.HashTable<string, string>
    ): void;

    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;

    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable<string, string>): void;

    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
}

export namespace OAuth2ServiceOutlook {
    export interface ConstructorProperties extends OAuth2ServiceBase.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuth2ServiceOutlook extends OAuth2ServiceBase implements OAuth2Service {
    static $gtype: GObject.GType<OAuth2ServiceOutlook>;

    constructor(properties?: Partial<OAuth2ServiceOutlook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2ServiceOutlook.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    can_process(source: Source): boolean;

    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    extract_authorization_code(
        source: Source,
        page_title: string,
        page_uri: string,
        page_content: string | null
    ): [boolean, string];

    get_access_token_sync(
        source: Source,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, number];

    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;

    get_authentication_uri(source: Source): string;

    get_client_id(source: Source): string;

    get_client_secret(source: Source): string | null;

    get_display_name(): string;

    get_flags(): number;

    get_name(): string;

    get_redirect_uri(source: Source): string | null;

    get_refresh_uri(source: Source): string;

    guess_can_process(protocol?: string | null, hostname?: string | null): boolean;

    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable<string, string>): void;

    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable<string, string>): void;

    prepare_get_token_message(source: Source, message: Soup.Message): void;

    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable<string, string>): void;

    prepare_refresh_token_message(source: Source, message: Soup.Message): void;

    receive_and_store_token_sync(
        source: Source,
        authorization_code: string,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    refresh_and_store_token_sync(
        source: Source,
        refresh_token: string,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_can_process(source: Source): boolean;

    vfunc_extract_authorization_code(
        source: Source,
        page_title: string,
        page_uri: string,
        page_content: string | null
    ): [boolean, string];

    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;

    vfunc_get_authentication_uri(source: Source): string;

    vfunc_get_client_id(source: Source): string;

    vfunc_get_client_secret(source: Source): string | null;

    vfunc_get_display_name(): string;

    vfunc_get_flags(): number;

    vfunc_get_name(): string;

    vfunc_get_redirect_uri(source: Source): string | null;

    vfunc_get_refresh_uri(source: Source): string;

    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;

    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable<string, string>): void;

    vfunc_prepare_get_token_form(
        source: Source,
        authorization_code: string,
        form: GLib.HashTable<string, string>
    ): void;

    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;

    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable<string, string>): void;

    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
}

export namespace OAuth2Services {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuth2Services extends GObject.Object implements Extensible {
    static $gtype: GObject.GType<OAuth2Services>;

    constructor(properties?: Partial<OAuth2Services.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2Services.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): OAuth2Services;

    // Members

    add(service: OAuth2Service): void;

    find(source: Source): OAuth2Service | null;

    guess(protocol?: string | null, hostname?: string | null): OAuth2Service | null;

    is_oauth2_alias(auth_method?: string | null): boolean;

    list(): OAuth2Service[];

    remove(service: OAuth2Service): void;

    static is_oauth2_alias_static(auth_method?: string | null): boolean;

    static is_supported(): boolean;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): Extension[];

    load_extensions(): void;
}

export namespace SoupAuthBearer {
    export interface ConstructorProperties extends Soup.Auth.ConstructorProperties {
        [key: string]: any;
    }
}

export class SoupAuthBearer extends Soup.Auth {
    static $gtype: GObject.GType<SoupAuthBearer>;

    constructor(properties?: Partial<SoupAuthBearer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SoupAuthBearer.ConstructorProperties>, ...args: any[]): void;

    // Members

    is_expired(): boolean;

    set_access_token(access_token: string, expires_in_seconds: number): void;
}

export namespace SoupSession {
    export interface ConstructorProperties extends Soup.Session.ConstructorProperties {
        [key: string]: any;

        credentials: NamedParameters;
        source: Source;
    }
}

export class SoupSession extends Soup.Session {
    static $gtype: GObject.GType<SoupSession>;

    constructor(properties?: Partial<SoupSession.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SoupSession.ConstructorProperties>, ...args: any[]): void;

    // Properties
    credentials: NamedParameters;
    source: Source;

    // Constructors

    static ['new'](source: Source): SoupSession;
    static ['new'](...args: never[]): never;

    // Members

    check_result(request: Soup.RequestHTTP, read_bytes: any | null, bytes_length: number): boolean;

    dup_credentials(): NamedParameters | null;

    get_authentication_requires_credentials(): boolean;

    get_log_level(): Soup.LoggerLogLevel;

    get_source(): Source;

    get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];

    new_request(method: string, uri_string: string): Soup.RequestHTTP;

    new_request_uri(method: string, uri: Soup.URI): Soup.RequestHTTP;

    send_request_simple_sync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Uint8Array;

    send_request_sync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Gio.InputStream;

    set_credentials(credentials?: NamedParameters | null): void;

    setup_logging(logging_level?: string | null): void;

    static util_normalize_uri_path(suri: Soup.URI): boolean;

    static util_status_to_string(status_code: number, reason_phrase?: string | null): string;
}

export namespace Source {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connection_status: SourceConnectionStatus;
        connectionStatus: SourceConnectionStatus;
        display_name: string;
        displayName: string;
        enabled: boolean;
        main_context: GLib.MainContext;
        mainContext: GLib.MainContext;
        remote_creatable: boolean;
        remoteCreatable: boolean;
        remote_deletable: boolean;
        remoteDeletable: boolean;
        removable: boolean;
        uid: string;
        writable: boolean;
    }
}

export class Source extends GObject.Object implements Gio.Initable, Gio.ProxyResolver {
    static $gtype: GObject.GType<Source>;

    constructor(properties?: Partial<Source.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Source.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection_status: SourceConnectionStatus;
    connectionStatus: SourceConnectionStatus;
    display_name: string;
    displayName: string;
    enabled: boolean;
    main_context: GLib.MainContext;
    mainContext: GLib.MainContext;
    remote_creatable: boolean;
    remoteCreatable: boolean;
    remote_deletable: boolean;
    remoteDeletable: boolean;
    removable: boolean;
    uid: string;
    writable: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'authenticate', callback: (_source: this, credentials: NamedParameters) => void): number;

    connect_after(signal: 'authenticate', callback: (_source: this, credentials: NamedParameters) => void): number;

    emit(signal: 'authenticate', credentials: NamedParameters): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(
        signal: 'credentials-required',
        callback: (
            _source: this,
            reason: SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            error: GLib.Error
        ) => void
    ): number;

    connect_after(
        signal: 'credentials-required',
        callback: (
            _source: this,
            reason: SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            error: GLib.Error
        ) => void
    ): number;

    emit(
        signal: 'credentials-required',
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        error: GLib.Error
    ): void;

    // Constructors

    static ['new'](dbus_object?: Gio.DBusObject | null, main_context?: GLib.MainContext | null): Source;

    static new_with_uid(uid: string, main_context?: GLib.MainContext | null): Source;

    // Members

    camel_configure_service(service: Camel.Service): void;

    changed(): void;

    compare_by_display_name(source2: Source): number;

    delete_password(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    delete_password_finish(result: Gio.AsyncResult): boolean;

    delete_password_sync(cancellable?: Gio.Cancellable | null): boolean;

    dup_display_name(): string;

    dup_parent(): string;

    dup_secret_label(): string;

    dup_uid(): string;

    emit_credentials_required(
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error?: GLib.Error | null
    ): void;

    equal(source2: Source): boolean;

    get_connection_status(): SourceConnectionStatus;

    get_display_name(): string;

    get_enabled(): boolean;

    get_extension(extension_name: string): SourceExtension;

    get_last_credentials_required_arguments(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_last_credentials_required_arguments_finish(
        result: Gio.AsyncResult
    ): [boolean, SourceCredentialsReason, string, Gio.TlsCertificateFlags, GLib.Error];

    get_last_credentials_required_arguments_sync(
        cancellable?: Gio.Cancellable | null
    ): [boolean, SourceCredentialsReason, string, Gio.TlsCertificateFlags, GLib.Error];

    get_oauth2_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_oauth2_access_token_finish(result: Gio.AsyncResult): [boolean, string | null, number | null];

    get_oauth2_access_token_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, number | null];

    get_parent(): string;

    get_remote_creatable(): boolean;

    get_remote_deletable(): boolean;

    get_removable(): boolean;

    get_uid(): string;

    get_writable(): boolean;

    has_extension(extension_name: string): boolean;

    hash(): number;

    invoke_authenticate(
        credentials?: NamedParameters | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    invoke_authenticate_finish(result: Gio.AsyncResult): boolean;

    invoke_authenticate_sync(credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null): boolean;

    invoke_credentials_required(
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error?: GLib.Error | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    invoke_credentials_required_finish(result: Gio.AsyncResult): boolean;

    invoke_credentials_required_sync(
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error?: GLib.Error | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    lookup_password(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    lookup_password_finish(result: Gio.AsyncResult): [boolean, string];

    lookup_password_sync(cancellable: Gio.Cancellable | null): [boolean, string];

    mail_signature_load(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    mail_signature_load_finish(result: Gio.AsyncResult): [boolean, string, number | null];

    mail_signature_load_sync(cancellable?: Gio.Cancellable | null): [boolean, string, number | null];

    mail_signature_replace(
        contents: string,
        length: number,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    mail_signature_replace_finish(result: Gio.AsyncResult): boolean;

    mail_signature_replace_sync(contents: string, length: number, cancellable?: Gio.Cancellable | null): boolean;

    mail_signature_symlink(
        symlink_target: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    mail_signature_symlink_finish(result: Gio.AsyncResult): boolean;

    mail_signature_symlink_sync(symlink_target: string, cancellable?: Gio.Cancellable | null): boolean;

    proxy_lookup(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    proxy_lookup_finish(result: Gio.AsyncResult): string[];

    proxy_lookup_sync(uri: string, cancellable?: Gio.Cancellable | null): string[];

    ref_dbus_object(): Gio.DBusObject;

    ref_main_context(): GLib.MainContext;

    refresh_add_timeout(
        context: GLib.MainContext | null,
        callback: SourceRefreshFunc,
        notify?: GLib.DestroyNotify | null
    ): number;

    refresh_force_timeout(): void;

    refresh_remove_timeout(refresh_timeout_id: number): boolean;

    refresh_remove_timeouts_by_data(user_data?: any | null): number;

    remote_create(
        scratch_source: Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remote_create_finish(result: Gio.AsyncResult): boolean;

    remote_create_sync(scratch_source: Source, cancellable?: Gio.Cancellable | null): boolean;

    remote_delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    remote_delete_finish(result: Gio.AsyncResult): boolean;

    remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean;

    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    remove_finish(result: Gio.AsyncResult): boolean;

    remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    set_connection_status(connection_status: SourceConnectionStatus): void;

    set_display_name(display_name: string): void;

    set_enabled(enabled: boolean): void;

    set_parent(parent?: string | null): void;

    store_password(
        password: string,
        permanently: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    store_password_finish(result: Gio.AsyncResult): boolean;

    store_password_sync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean;

    to_string(length?: number | null): string;

    unset_last_credentials_required_arguments(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    unset_last_credentials_required_arguments_finish(result: Gio.AsyncResult): boolean;

    unset_last_credentials_required_arguments_sync(cancellable?: Gio.Cancellable | null): boolean;

    write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    write_finish(result: Gio.AsyncResult): boolean;

    write_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_authenticate(credentials: NamedParameters): void;

    vfunc_changed(): void;

    vfunc_credentials_required(
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error: GLib.Error
    ): void;

    vfunc_get_oauth2_access_token(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_oauth2_access_token_finish(result: Gio.AsyncResult): [boolean, string | null, number | null];

    vfunc_get_oauth2_access_token_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, number | null];

    vfunc_invoke_authenticate_impl(
        dbus_source: any | null,
        arg_credentials: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_invoke_credentials_required_impl(
        dbus_source: any | null,
        arg_reason: string,
        arg_certificate_pem: string,
        arg_certificate_errors: string,
        arg_dbus_error_name: string,
        arg_dbus_error_message: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_remote_create(
        scratch_source: Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_remote_create_finish(result: Gio.AsyncResult): boolean;

    vfunc_remote_create_sync(scratch_source: Source, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_remote_delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remote_delete_finish(result: Gio.AsyncResult): boolean;

    vfunc_remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remove_finish(result: Gio.AsyncResult): boolean;

    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_unset_last_credentials_required_arguments_impl(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_write_finish(result: Gio.AsyncResult): boolean;

    vfunc_write_sync(cancellable?: Gio.Cancellable | null): boolean;

    static parameter_to_key(param_name: string): string;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    is_supported(): boolean;

    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];

    lookup_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    lookup_finish(result: Gio.AsyncResult): string[];

    vfunc_is_supported(): boolean;

    vfunc_lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];

    vfunc_lookup_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_lookup_finish(result: Gio.AsyncResult): string[];
}

export namespace SourceAddressBook {
    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceAddressBook extends SourceBackend {
    static $gtype: GObject.GType<SourceAddressBook>;

    constructor(properties?: Partial<SourceAddressBook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceAddressBook.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceAlarms {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        include_me: boolean;
        includeMe: boolean;
        last_notified: string;
        lastNotified: string;
    }
}

export class SourceAlarms extends SourceExtension {
    static $gtype: GObject.GType<SourceAlarms>;

    constructor(properties?: Partial<SourceAlarms.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceAlarms.ConstructorProperties>, ...args: any[]): void;

    // Properties
    include_me: boolean;
    includeMe: boolean;
    last_notified: string;
    lastNotified: string;

    // Members

    dup_last_notified(): string | null;

    get_include_me(): boolean;

    get_last_notified(): string | null;

    set_include_me(include_me: boolean): void;

    set_last_notified(last_notified?: string | null): void;
}

export namespace SourceAuthentication {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        connectable: Gio.SocketConnectable;
        credential_name: string;
        credentialName: string;
        host: string;
        is_external: boolean;
        isExternal: boolean;
        method: string;
        port: number;
        proxy_uid: string;
        proxyUid: string;
        remember_password: boolean;
        rememberPassword: boolean;
        user: string;
    }
}

export class SourceAuthentication extends SourceExtension {
    static $gtype: GObject.GType<SourceAuthentication>;

    constructor(properties?: Partial<SourceAuthentication.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceAuthentication.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connectable: Gio.SocketConnectable;
    credential_name: string;
    credentialName: string;
    host: string;
    is_external: boolean;
    isExternal: boolean;
    method: string;
    port: number;
    proxy_uid: string;
    proxyUid: string;
    remember_password: boolean;
    rememberPassword: boolean;
    user: string;

    // Members

    dup_credential_name(): string;

    dup_host(): string;

    dup_method(): string;

    dup_proxy_uid(): string;

    dup_user(): string;

    get_credential_name(): string;

    get_host(): string;

    get_is_external(): boolean;

    get_method(): string;

    get_port(): number;

    get_proxy_uid(): string;

    get_remember_password(): boolean;

    get_user(): string;

    ref_connectable(): Gio.SocketConnectable;

    required(): boolean;

    set_credential_name(credential_name?: string | null): void;

    set_host(host?: string | null): void;

    set_is_external(is_external: boolean): void;

    set_method(method?: string | null): void;

    set_port(port: number): void;

    set_proxy_uid(proxy_uid: string): void;

    set_remember_password(remember_password: boolean): void;

    set_user(user?: string | null): void;
}

export namespace SourceAutocomplete {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        include_me: boolean;
        includeMe: boolean;
    }
}

export class SourceAutocomplete extends SourceExtension {
    static $gtype: GObject.GType<SourceAutocomplete>;

    constructor(properties?: Partial<SourceAutocomplete.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceAutocomplete.ConstructorProperties>, ...args: any[]): void;

    // Properties
    include_me: boolean;
    includeMe: boolean;

    // Members

    get_include_me(): boolean;

    set_include_me(include_me: boolean): void;
}

export namespace SourceAutoconfig {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        revision: string;
    }
}

export class SourceAutoconfig extends SourceExtension {
    static $gtype: GObject.GType<SourceAutoconfig>;

    constructor(properties?: Partial<SourceAutoconfig.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceAutoconfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    revision: string;

    // Members

    dup_revision(): string;

    get_revision(): string;

    set_revision(revision: string): void;
}

export namespace SourceBackend {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        backend_name: string;
        backendName: string;
    }
}

export abstract class SourceBackend extends SourceExtension {
    static $gtype: GObject.GType<SourceBackend>;

    constructor(properties?: Partial<SourceBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend_name: string;
    backendName: string;

    // Members

    dup_backend_name(): string;

    get_backend_name(): string;

    set_backend_name(backend_name?: string | null): void;
}

export namespace SourceCalendar {
    export interface ConstructorProperties extends SourceSelectable.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceCalendar extends SourceSelectable {
    static $gtype: GObject.GType<SourceCalendar>;

    constructor(properties?: Partial<SourceCalendar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCalendar.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceCamel {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        settings: Camel.Settings;
    }
}

export abstract class SourceCamel extends SourceExtension {
    static $gtype: GObject.GType<SourceCamel>;

    constructor(properties?: Partial<SourceCamel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCamel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    settings: Camel.Settings;

    // Members

    get_settings(): Camel.Settings;

    static generate_subtype(protocol: string, settings_type: GObject.GType): GObject.GType;

    static get_extension_name(protocol: string): string;

    static get_type_name(protocol: string): string;

    static register_types(): void;
}

export namespace SourceCollection {
    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {
        [key: string]: any;

        allow_sources_rename: boolean;
        allowSourcesRename: boolean;
        calendar_enabled: boolean;
        calendarEnabled: boolean;
        calendar_url: string;
        calendarUrl: string;
        contacts_enabled: boolean;
        contactsEnabled: boolean;
        contacts_url: string;
        contactsUrl: string;
        identity: string;
        mail_enabled: boolean;
        mailEnabled: boolean;
    }
}

export class SourceCollection extends SourceBackend {
    static $gtype: GObject.GType<SourceCollection>;

    constructor(properties?: Partial<SourceCollection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCollection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_sources_rename: boolean;
    allowSourcesRename: boolean;
    calendar_enabled: boolean;
    calendarEnabled: boolean;
    calendar_url: string;
    calendarUrl: string;
    contacts_enabled: boolean;
    contactsEnabled: boolean;
    contacts_url: string;
    contactsUrl: string;
    identity: string;
    mail_enabled: boolean;
    mailEnabled: boolean;

    // Members

    dup_calendar_url(): string;

    dup_contacts_url(): string;

    dup_identity(): string;

    get_allow_sources_rename(): boolean;

    get_calendar_enabled(): boolean;

    get_calendar_url(): string | null;

    get_contacts_enabled(): boolean;

    get_contacts_url(): string | null;

    get_identity(): string;

    get_mail_enabled(): boolean;

    set_allow_sources_rename(allow_sources_rename: boolean): void;

    set_calendar_enabled(calendar_enabled: boolean): void;

    set_calendar_url(calendar_url?: string | null): void;

    set_contacts_enabled(contacts_enabled: boolean): void;

    set_contacts_url(contacts_url?: string | null): void;

    set_identity(identity?: string | null): void;

    set_mail_enabled(mail_enabled: boolean): void;
}

export namespace SourceContacts {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        include_me: boolean;
        includeMe: boolean;
    }
}

export class SourceContacts extends SourceExtension {
    static $gtype: GObject.GType<SourceContacts>;

    constructor(properties?: Partial<SourceContacts.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceContacts.ConstructorProperties>, ...args: any[]): void;

    // Properties
    include_me: boolean;
    includeMe: boolean;

    // Members

    get_include_me(): boolean;

    set_include_me(include_me: boolean): void;
}

export namespace SourceCredentialsProvider {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        registry: GObject.Object;
    }
}

export class SourceCredentialsProvider extends GObject.Object implements Extensible {
    static $gtype: GObject.GType<SourceCredentialsProvider>;

    constructor(properties?: Partial<SourceCredentialsProvider.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCredentialsProvider.ConstructorProperties>, ...args: any[]): void;

    // Properties
    registry: GObject.Object;

    // Constructors

    static ['new'](registry: SourceRegistry): SourceCredentialsProvider;

    // Members

    can_prompt(source: Source): boolean;

    can_store(source: Source): boolean;

    ['delete'](
        source: Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_finish(result: Gio.AsyncResult): boolean;

    delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    lookup(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    lookup_finish(result: Gio.AsyncResult): [boolean, NamedParameters];

    lookup_sync(source: Source, cancellable: Gio.Cancellable | null): [boolean, NamedParameters];

    ref_credentials_source(source: Source): Source;

    ref_registry<T = GObject.Object>(): T;

    ref_source(uid: string): Source;

    register_impl(provider_impl: SourceCredentialsProviderImpl): boolean;

    store(
        source: Source,
        credentials: NamedParameters,
        permanently: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    store_finish(result: Gio.AsyncResult): boolean;

    store_sync(
        source: Source,
        credentials: NamedParameters,
        permanently: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    unregister_impl(provider_impl: SourceCredentialsProviderImpl): void;

    vfunc_ref_source(uid: string): Source;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): Extension[];

    load_extensions(): void;
}

export namespace SourceCredentialsProviderImpl {
    export interface ConstructorProperties extends Extension.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class SourceCredentialsProviderImpl extends Extension {
    static $gtype: GObject.GType<SourceCredentialsProviderImpl>;

    constructor(properties?: Partial<SourceCredentialsProviderImpl.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCredentialsProviderImpl.ConstructorProperties>, ...args: any[]): void;

    // Members

    can_process(source: Source): boolean;

    can_prompt(): boolean;

    can_store(): boolean;

    delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    get_provider(): any | null;

    lookup_sync(source: Source, cancellable: Gio.Cancellable | null): [boolean, NamedParameters];

    store_sync(
        source: Source,
        credentials: NamedParameters,
        permanently: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_can_process(source: Source): boolean;

    vfunc_can_prompt(): boolean;

    vfunc_can_store(): boolean;

    vfunc_delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_lookup_sync(source: Source, cancellable: Gio.Cancellable | null): [boolean, NamedParameters];

    vfunc_store_sync(
        source: Source,
        credentials: NamedParameters,
        permanently: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
}

export namespace SourceCredentialsProviderImplOAuth2 {
    export interface ConstructorProperties extends SourceCredentialsProviderImpl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceCredentialsProviderImplOAuth2 extends SourceCredentialsProviderImpl {
    static $gtype: GObject.GType<SourceCredentialsProviderImplOAuth2>;

    constructor(properties?: Partial<SourceCredentialsProviderImplOAuth2.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCredentialsProviderImplOAuth2.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceCredentialsProviderImplPassword {
    export interface ConstructorProperties extends SourceCredentialsProviderImpl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceCredentialsProviderImplPassword extends SourceCredentialsProviderImpl {
    static $gtype: GObject.GType<SourceCredentialsProviderImplPassword>;

    constructor(properties?: Partial<SourceCredentialsProviderImplPassword.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceCredentialsProviderImplPassword.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceExtension {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        source: Source;
    }
}

export abstract class SourceExtension extends GObject.Object {
    static $gtype: GObject.GType<SourceExtension>;

    constructor(properties?: Partial<SourceExtension.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceExtension.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: Source;

    // Members

    get_source(): Source;

    property_lock(): void;

    property_unlock(): void;

    ref_source(): Source;
}

export namespace SourceGoa {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        account_id: string;
        accountId: string;
        address: string;
        calendar_url: string;
        calendarUrl: string;
        contacts_url: string;
        contactsUrl: string;
        name: string;
    }
}

export class SourceGoa extends SourceExtension {
    static $gtype: GObject.GType<SourceGoa>;

    constructor(properties?: Partial<SourceGoa.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceGoa.ConstructorProperties>, ...args: any[]): void;

    // Properties
    account_id: string;
    accountId: string;
    address: string;
    calendar_url: string;
    calendarUrl: string;
    contacts_url: string;
    contactsUrl: string;
    name: string;

    // Members

    dup_account_id(): string;

    dup_address(): string;

    dup_calendar_url(): string;

    dup_contacts_url(): string;

    dup_name(): string;

    get_account_id(): string;

    get_address(): string;

    get_calendar_url(): string;

    get_contacts_url(): string;

    get_name(): string;

    set_account_id(account_id?: string | null): void;

    set_address(address?: string | null): void;

    set_calendar_url(calendar_url?: string | null): void;

    set_contacts_url(contacts_url?: string | null): void;

    set_name(name?: string | null): void;
}

export namespace SourceLDAP {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        authentication: SourceLDAPAuthentication;
        can_browse: boolean;
        canBrowse: boolean;
        filter: string;
        limit: number;
        root_dn: string;
        rootDn: string;
        scope: SourceLDAPScope;
        security: SourceLDAPSecurity;
    }
}

export class SourceLDAP extends SourceExtension {
    static $gtype: GObject.GType<SourceLDAP>;

    constructor(properties?: Partial<SourceLDAP.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceLDAP.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authentication: SourceLDAPAuthentication;
    can_browse: boolean;
    canBrowse: boolean;
    filter: string;
    limit: number;
    root_dn: string;
    rootDn: string;
    scope: SourceLDAPScope;
    security: SourceLDAPSecurity;

    // Members

    dup_filter(): string;

    dup_root_dn(): string;

    get_authentication(): SourceLDAPAuthentication;

    get_can_browse(): boolean;

    get_filter(): string;

    get_limit(): number;

    get_root_dn(): string;

    get_scope(): SourceLDAPScope;

    get_security(): SourceLDAPSecurity;

    set_authentication(authentication: SourceLDAPAuthentication): void;

    set_can_browse(can_browse: boolean): void;

    set_filter(filter: string): void;

    set_limit(limit: number): void;

    set_root_dn(root_dn: string): void;

    set_scope(scope: SourceLDAPScope): void;

    set_security(security: SourceLDAPSecurity): void;
}

export namespace SourceLocal {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        custom_file: Gio.File;
        customFile: Gio.File;
        writable: boolean;
    }
}

export class SourceLocal extends SourceExtension {
    static $gtype: GObject.GType<SourceLocal>;

    constructor(properties?: Partial<SourceLocal.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceLocal.ConstructorProperties>, ...args: any[]): void;

    // Properties
    custom_file: Gio.File;
    customFile: Gio.File;
    writable: boolean;

    // Members

    dup_custom_file(): Gio.File | null;

    get_custom_file(): Gio.File | null;

    get_writable(): boolean;

    set_custom_file(custom_file?: Gio.File | null): void;

    set_writable(writable: boolean): void;
}

export namespace SourceMDN {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        response_policy: MdnResponsePolicy;
        responsePolicy: MdnResponsePolicy;
    }
}

export class SourceMDN extends SourceExtension {
    static $gtype: GObject.GType<SourceMDN>;

    constructor(properties?: Partial<SourceMDN.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMDN.ConstructorProperties>, ...args: any[]): void;

    // Properties
    response_policy: MdnResponsePolicy;
    responsePolicy: MdnResponsePolicy;

    // Members

    get_response_policy(): MdnResponsePolicy;

    set_response_policy(response_policy: MdnResponsePolicy): void;
}

export namespace SourceMailAccount {
    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {
        [key: string]: any;

        archive_folder: string;
        archiveFolder: string;
        identity_uid: string;
        identityUid: string;
        mark_seen: ThreeState;
        markSeen: ThreeState;
        mark_seen_timeout: number;
        markSeenTimeout: number;
        needs_initial_setup: boolean;
        needsInitialSetup: boolean;
    }
}

export class SourceMailAccount extends SourceBackend {
    static $gtype: GObject.GType<SourceMailAccount>;

    constructor(properties?: Partial<SourceMailAccount.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMailAccount.ConstructorProperties>, ...args: any[]): void;

    // Properties
    archive_folder: string;
    archiveFolder: string;
    identity_uid: string;
    identityUid: string;
    mark_seen: ThreeState;
    markSeen: ThreeState;
    mark_seen_timeout: number;
    markSeenTimeout: number;
    needs_initial_setup: boolean;
    needsInitialSetup: boolean;

    // Members

    dup_archive_folder(): string;

    dup_identity_uid(): string;

    get_archive_folder(): string;

    get_identity_uid(): string;

    get_mark_seen(): ThreeState;

    get_mark_seen_timeout(): number;

    get_needs_initial_setup(): boolean;

    set_archive_folder(archive_folder?: string | null): void;

    set_identity_uid(identity_uid?: string | null): void;

    set_mark_seen(mark_seen: ThreeState): void;

    set_mark_seen_timeout(timeout: number): void;

    set_needs_initial_setup(needs_initial_setup: boolean): void;
}

export namespace SourceMailComposition {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        bcc: string[];
        cc: string[];
        drafts_folder: string;
        draftsFolder: string;
        language: string;
        reply_style: SourceMailCompositionReplyStyle;
        replyStyle: SourceMailCompositionReplyStyle;
        sign_imip: boolean;
        signImip: boolean;
        start_bottom: ThreeState;
        startBottom: ThreeState;
        templates_folder: string;
        templatesFolder: string;
        top_signature: ThreeState;
        topSignature: ThreeState;
    }
}

export class SourceMailComposition extends SourceExtension {
    static $gtype: GObject.GType<SourceMailComposition>;

    constructor(properties?: Partial<SourceMailComposition.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMailComposition.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bcc: string[];
    cc: string[];
    drafts_folder: string;
    draftsFolder: string;
    language: string;
    reply_style: SourceMailCompositionReplyStyle;
    replyStyle: SourceMailCompositionReplyStyle;
    sign_imip: boolean;
    signImip: boolean;
    start_bottom: ThreeState;
    startBottom: ThreeState;
    templates_folder: string;
    templatesFolder: string;
    top_signature: ThreeState;
    topSignature: ThreeState;

    // Members

    dup_bcc(): string[];

    dup_cc(): string[];

    dup_drafts_folder(): string;

    dup_language(): string;

    dup_templates_folder(): string;

    get_bcc(): string[];

    get_cc(): string[];

    get_drafts_folder(): string;

    get_language(): string | null;

    get_reply_style(): SourceMailCompositionReplyStyle;

    get_sign_imip(): boolean;

    get_start_bottom(): ThreeState;

    get_templates_folder(): string;

    get_top_signature(): ThreeState;

    set_bcc(bcc: string[]): void;

    set_cc(cc: string[]): void;

    set_drafts_folder(drafts_folder?: string | null): void;

    set_language(language?: string | null): void;

    set_reply_style(reply_style: SourceMailCompositionReplyStyle): void;

    set_sign_imip(sign_imip: boolean): void;

    set_start_bottom(start_bottom: ThreeState): void;

    set_templates_folder(templates_folder?: string | null): void;

    set_top_signature(top_signature: ThreeState): void;
}

export namespace SourceMailIdentity {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        address: string;
        aliases: string;
        name: string;
        organization: string;
        reply_to: string;
        replyTo: string;
        signature_uid: string;
        signatureUid: string;
    }
}

export class SourceMailIdentity extends SourceExtension {
    static $gtype: GObject.GType<SourceMailIdentity>;

    constructor(properties?: Partial<SourceMailIdentity.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMailIdentity.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: string;
    aliases: string;
    name: string;
    organization: string;
    reply_to: string;
    replyTo: string;
    signature_uid: string;
    signatureUid: string;

    // Members

    dup_address(): string;

    dup_aliases(): string;

    dup_name(): string;

    dup_organization(): string;

    dup_reply_to(): string;

    dup_signature_uid(): string;

    get_address(): string;

    get_aliases(): string;

    get_aliases_as_hash_table(): GLib.HashTable<string, string> | null;

    get_name(): string;

    get_organization(): string;

    get_reply_to(): string;

    get_signature_uid(): string;

    set_address(address?: string | null): void;

    set_aliases(aliases?: string | null): void;

    set_name(name?: string | null): void;

    set_organization(organization?: string | null): void;

    set_reply_to(reply_to?: string | null): void;

    set_signature_uid(signature_uid?: string | null): void;
}

export namespace SourceMailSignature {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        file: Gio.File;
        mime_type: string;
        mimeType: string;
    }
}

export class SourceMailSignature extends SourceExtension {
    static $gtype: GObject.GType<SourceMailSignature>;

    constructor(properties?: Partial<SourceMailSignature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMailSignature.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file: Gio.File;
    mime_type: string;
    mimeType: string;

    // Members

    dup_mime_type(): string | null;

    get_file(): Gio.File;

    get_mime_type(): string | null;

    set_mime_type(mime_type?: string | null): void;
}

export namespace SourceMailSubmission {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        replies_to_origin_folder: boolean;
        repliesToOriginFolder: boolean;
        sent_folder: string;
        sentFolder: string;
        transport_uid: string;
        transportUid: string;
        use_sent_folder: boolean;
        useSentFolder: boolean;
    }
}

export class SourceMailSubmission extends SourceExtension {
    static $gtype: GObject.GType<SourceMailSubmission>;

    constructor(properties?: Partial<SourceMailSubmission.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMailSubmission.ConstructorProperties>, ...args: any[]): void;

    // Properties
    replies_to_origin_folder: boolean;
    repliesToOriginFolder: boolean;
    sent_folder: string;
    sentFolder: string;
    transport_uid: string;
    transportUid: string;
    use_sent_folder: boolean;
    useSentFolder: boolean;

    // Members

    dup_sent_folder(): string;

    dup_transport_uid(): string;

    get_replies_to_origin_folder(): boolean;

    get_sent_folder(): string;

    get_transport_uid(): string;

    get_use_sent_folder(): boolean;

    set_replies_to_origin_folder(replies_to_origin_folder: boolean): void;

    set_sent_folder(sent_folder?: string | null): void;

    set_transport_uid(transport_uid?: string | null): void;

    set_use_sent_folder(use_sent_folder: boolean): void;
}

export namespace SourceMailTransport {
    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceMailTransport extends SourceBackend {
    static $gtype: GObject.GType<SourceMailTransport>;

    constructor(properties?: Partial<SourceMailTransport.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMailTransport.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceMemoList {
    export interface ConstructorProperties extends SourceSelectable.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceMemoList extends SourceSelectable {
    static $gtype: GObject.GType<SourceMemoList>;

    constructor(properties?: Partial<SourceMemoList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceMemoList.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceOffline {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        stay_synchronized: boolean;
        staySynchronized: boolean;
    }
}

export class SourceOffline extends SourceExtension {
    static $gtype: GObject.GType<SourceOffline>;

    constructor(properties?: Partial<SourceOffline.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceOffline.ConstructorProperties>, ...args: any[]): void;

    // Properties
    stay_synchronized: boolean;
    staySynchronized: boolean;

    // Members

    get_stay_synchronized(): boolean;

    set_stay_synchronized(stay_synchronized: boolean): void;
}

export namespace SourceOpenPGP {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        always_trust: boolean;
        alwaysTrust: boolean;
        encrypt_by_default: boolean;
        encryptByDefault: boolean;
        encrypt_to_self: boolean;
        encryptToSelf: boolean;
        key_id: string;
        keyId: string;
        prefer_inline: boolean;
        preferInline: boolean;
        sign_by_default: boolean;
        signByDefault: boolean;
        signing_algorithm: string;
        signingAlgorithm: string;
    }
}

export class SourceOpenPGP extends SourceExtension {
    static $gtype: GObject.GType<SourceOpenPGP>;

    constructor(properties?: Partial<SourceOpenPGP.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceOpenPGP.ConstructorProperties>, ...args: any[]): void;

    // Properties
    always_trust: boolean;
    alwaysTrust: boolean;
    encrypt_by_default: boolean;
    encryptByDefault: boolean;
    encrypt_to_self: boolean;
    encryptToSelf: boolean;
    key_id: string;
    keyId: string;
    prefer_inline: boolean;
    preferInline: boolean;
    sign_by_default: boolean;
    signByDefault: boolean;
    signing_algorithm: string;
    signingAlgorithm: string;

    // Members

    dup_key_id(): string;

    dup_signing_algorithm(): string;

    get_always_trust(): boolean;

    get_encrypt_by_default(): boolean;

    get_encrypt_to_self(): boolean;

    get_key_id(): string;

    get_prefer_inline(): boolean;

    get_sign_by_default(): boolean;

    get_signing_algorithm(): string;

    set_always_trust(always_trust: boolean): void;

    set_encrypt_by_default(encrypt_by_default: boolean): void;

    set_encrypt_to_self(encrypt_to_self: boolean): void;

    set_key_id(key_id: string): void;

    set_prefer_inline(prefer_inline: boolean): void;

    set_sign_by_default(sign_by_default: boolean): void;

    set_signing_algorithm(signing_algorithm: string): void;
}

export namespace SourceProxy {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        autoconfig_url: string;
        autoconfigUrl: string;
        ftp_host: string;
        ftpHost: string;
        ftp_port: number;
        ftpPort: number;
        http_auth_password: string;
        httpAuthPassword: string;
        http_auth_user: string;
        httpAuthUser: string;
        http_host: string;
        httpHost: string;
        http_port: number;
        httpPort: number;
        http_use_auth: boolean;
        httpUseAuth: boolean;
        https_host: string;
        httpsHost: string;
        https_port: number;
        httpsPort: number;
        ignore_hosts: string[];
        ignoreHosts: string[];
        method: ProxyMethod;
        socks_host: string;
        socksHost: string;
        socks_port: number;
        socksPort: number;
    }
}

export class SourceProxy extends SourceExtension {
    static $gtype: GObject.GType<SourceProxy>;

    constructor(properties?: Partial<SourceProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    autoconfig_url: string;
    autoconfigUrl: string;
    ftp_host: string;
    ftpHost: string;
    ftp_port: number;
    ftpPort: number;
    http_auth_password: string;
    httpAuthPassword: string;
    http_auth_user: string;
    httpAuthUser: string;
    http_host: string;
    httpHost: string;
    http_port: number;
    httpPort: number;
    http_use_auth: boolean;
    httpUseAuth: boolean;
    https_host: string;
    httpsHost: string;
    https_port: number;
    httpsPort: number;
    ignore_hosts: string[];
    ignoreHosts: string[];
    method: ProxyMethod;
    socks_host: string;
    socksHost: string;
    socks_port: number;
    socksPort: number;

    // Members

    dup_autoconfig_url(): string;

    dup_ftp_host(): string;

    dup_http_auth_password(): string;

    dup_http_auth_user(): string;

    dup_http_host(): string;

    dup_https_host(): string;

    dup_ignore_hosts(): string[];

    dup_socks_host(): string;

    get_autoconfig_url(): string;

    get_ftp_host(): string;

    get_ftp_port(): number;

    get_http_auth_password(): string;

    get_http_auth_user(): string;

    get_http_host(): string;

    get_http_port(): number;

    get_http_use_auth(): boolean;

    get_https_host(): string;

    get_https_port(): number;

    get_ignore_hosts(): string[];

    get_method(): ProxyMethod;

    get_socks_host(): string;

    get_socks_port(): number;

    set_autoconfig_url(autoconfig_url: string): void;

    set_ftp_host(ftp_host: string): void;

    set_ftp_port(ftp_port: number): void;

    set_http_auth_password(http_auth_password: string): void;

    set_http_auth_user(http_auth_user: string): void;

    set_http_host(http_host: string): void;

    set_http_port(http_port: number): void;

    set_http_use_auth(http_use_auth: boolean): void;

    set_https_host(https_host: string): void;

    set_https_port(https_port: number): void;

    set_ignore_hosts(ignore_hosts: string): void;

    set_method(method: ProxyMethod): void;

    set_socks_host(socks_host: string): void;

    set_socks_port(socks_port: number): void;
}

export namespace SourceRefresh {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        enabled: boolean;
        interval_minutes: number;
        intervalMinutes: number;
    }
}

export class SourceRefresh extends SourceExtension {
    static $gtype: GObject.GType<SourceRefresh>;

    constructor(properties?: Partial<SourceRefresh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceRefresh.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enabled: boolean;
    interval_minutes: number;
    intervalMinutes: number;

    // Members

    get_enabled(): boolean;

    get_interval_minutes(): number;

    set_enabled(enabled: boolean): void;

    set_interval_minutes(interval_minutes: number): void;
}

export namespace SourceRegistry {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        default_address_book: Source;
        defaultAddressBook: Source;
        default_calendar: Source;
        defaultCalendar: Source;
        default_mail_account: Source;
        defaultMailAccount: Source;
        default_mail_identity: Source;
        defaultMailIdentity: Source;
        default_memo_list: Source;
        defaultMemoList: Source;
        default_task_list: Source;
        defaultTaskList: Source;
    }
}

export class SourceRegistry extends GObject.Object implements Gio.AsyncInitable<SourceRegistry>, Gio.Initable {
    static $gtype: GObject.GType<SourceRegistry>;

    constructor(properties?: Partial<SourceRegistry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceRegistry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_address_book: Source;
    defaultAddressBook: Source;
    default_calendar: Source;
    defaultCalendar: Source;
    default_mail_account: Source;
    defaultMailAccount: Source;
    default_mail_identity: Source;
    defaultMailIdentity: Source;
    default_memo_list: Source;
    defaultMemoList: Source;
    default_task_list: Source;
    defaultTaskList: Source;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'credentials-required',
        callback: (
            _source: this,
            source: Source,
            reason: SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            op_error: GLib.Error
        ) => void
    ): number;

    connect_after(
        signal: 'credentials-required',
        callback: (
            _source: this,
            source: Source,
            reason: SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            op_error: GLib.Error
        ) => void
    ): number;

    emit(
        signal: 'credentials-required',
        source: Source,
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error: GLib.Error
    ): void;

    connect(signal: 'source-added', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-added', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-added', source: Source): void;

    connect(signal: 'source-changed', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-changed', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-changed', source: Source): void;

    connect(signal: 'source-disabled', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-disabled', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-disabled', source: Source): void;

    connect(signal: 'source-enabled', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-enabled', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-enabled', source: Source): void;

    connect(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-removed', source: Source): void;

    // Constructors

    static new_finish(result: Gio.AsyncResult): SourceRegistry;
    static new_finish(...args: never[]): never;

    static new_sync(cancellable?: Gio.Cancellable | null): SourceRegistry;

    // Members

    check_enabled(source: Source): boolean;

    commit_source(
        source: Source,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    commit_source_finish(result: Gio.AsyncResult): boolean;

    commit_source_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    create_sources(
        list_of_sources: Source[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_sources_finish(result: Gio.AsyncResult): boolean;

    create_sources_sync(list_of_sources: Source[], cancellable?: Gio.Cancellable | null): boolean;

    debug_dump(extension_name?: string | null): void;

    dup_unique_display_name(source: Source, extension_name?: string | null): string;

    find_extension(source: Source, extension_name: string): Source;

    get_oauth2_services(): OAuth2Services;

    list_enabled(extension_name?: string | null): Source[];

    list_sources(extension_name?: string | null): Source[];

    ref_builtin_address_book(): Source;

    ref_builtin_calendar(): Source;

    ref_builtin_mail_account(): Source;

    ref_builtin_memo_list(): Source;

    ref_builtin_proxy(): Source;

    ref_builtin_task_list(): Source;

    ref_default_address_book(): Source;

    ref_default_calendar(): Source;

    ref_default_for_extension_name(extension_name: string): Source;

    ref_default_mail_account(): Source;

    ref_default_mail_identity(): Source;

    ref_default_memo_list(): Source;

    ref_default_task_list(): Source;

    ref_source(uid: string): Source;

    refresh_backend(
        source_uid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_backend_finish(result: Gio.AsyncResult): boolean;

    refresh_backend_sync(source_uid: string, cancellable?: Gio.Cancellable | null): boolean;

    set_default_address_book(default_source?: Source | null): void;

    set_default_calendar(default_source?: Source | null): void;

    set_default_for_extension_name(extension_name: string, default_source?: Source | null): void;

    set_default_mail_account(default_source?: Source | null): void;

    set_default_mail_identity(default_source?: Source | null): void;

    set_default_memo_list(default_source?: Source | null): void;

    set_default_task_list(default_source?: Source | null): void;

    vfunc_credentials_required(
        source: Source,
        reason: SourceCredentialsReason,
        certificate_pem: string,
        certificate_errors: Gio.TlsCertificateFlags,
        op_error: GLib.Error
    ): void;

    vfunc_source_added(source: Source): void;

    vfunc_source_changed(source: Source): void;

    vfunc_source_disabled(source: Source): void;

    vfunc_source_enabled(source: Source): void;

    vfunc_source_removed(source: Source): void;

    static debug_enabled(): boolean;

    static free_display_tree(display_tree: GLib.Node): void;

    static new(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<SourceRegistry> | null): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): SourceRegistry;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace SourceRegistryWatcher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        extension_name: string;
        extensionName: string;
        registry: SourceRegistry;
    }
}

export class SourceRegistryWatcher extends GObject.Object {
    static $gtype: GObject.GType<SourceRegistryWatcher>;

    constructor(properties?: Partial<SourceRegistryWatcher.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceRegistryWatcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    extension_name: string;
    extensionName: string;
    registry: SourceRegistry;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'appeared', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'appeared', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'appeared', source: Source): void;

    connect(signal: 'disappeared', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'disappeared', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'disappeared', source: Source): void;

    connect(signal: 'filter', callback: (_source: this, source: Source) => boolean): number;

    connect_after(signal: 'filter', callback: (_source: this, source: Source) => boolean): number;

    emit(signal: 'filter', source: Source): void;

    // Constructors

    static ['new'](registry: SourceRegistry, extension_name?: string | null): SourceRegistryWatcher;

    // Members

    get_extension_name(): string | null;

    get_registry(): SourceRegistry;

    reclaim(): void;

    vfunc_appeared(source: Source): void;

    vfunc_disappeared(source: Source): void;

    vfunc_filter(source: Source): boolean;
}

export namespace SourceResource {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        identity: string;
    }
}

export class SourceResource extends SourceExtension {
    static $gtype: GObject.GType<SourceResource>;

    constructor(properties?: Partial<SourceResource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceResource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    identity: string;

    // Members

    dup_identity(): string;

    get_identity(): string;

    set_identity(identity?: string | null): void;
}

export namespace SourceRevisionGuards {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        enabled: boolean;
    }
}

export class SourceRevisionGuards extends SourceExtension {
    static $gtype: GObject.GType<SourceRevisionGuards>;

    constructor(properties?: Partial<SourceRevisionGuards.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceRevisionGuards.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enabled: boolean;

    // Members

    get_enabled(): boolean;

    set_enabled(enabled: boolean): void;
}

export namespace SourceSMIME {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        encrypt_by_default: boolean;
        encryptByDefault: boolean;
        encrypt_to_self: boolean;
        encryptToSelf: boolean;
        encryption_certificate: string;
        encryptionCertificate: string;
        sign_by_default: boolean;
        signByDefault: boolean;
        signing_algorithm: string;
        signingAlgorithm: string;
        signing_certificate: string;
        signingCertificate: string;
    }
}

export class SourceSMIME extends SourceExtension {
    static $gtype: GObject.GType<SourceSMIME>;

    constructor(properties?: Partial<SourceSMIME.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceSMIME.ConstructorProperties>, ...args: any[]): void;

    // Properties
    encrypt_by_default: boolean;
    encryptByDefault: boolean;
    encrypt_to_self: boolean;
    encryptToSelf: boolean;
    encryption_certificate: string;
    encryptionCertificate: string;
    sign_by_default: boolean;
    signByDefault: boolean;
    signing_algorithm: string;
    signingAlgorithm: string;
    signing_certificate: string;
    signingCertificate: string;

    // Members

    dup_encryption_certificate(): string;

    dup_signing_algorithm(): string;

    dup_signing_certificate(): string;

    get_encrypt_by_default(): boolean;

    get_encrypt_to_self(): boolean;

    get_encryption_certificate(): string;

    get_sign_by_default(): boolean;

    get_signing_algorithm(): string;

    get_signing_certificate(): string;

    set_encrypt_by_default(encrypt_by_default: boolean): void;

    set_encrypt_to_self(encrypt_to_self: boolean): void;

    set_encryption_certificate(encryption_certificate?: string | null): void;

    set_sign_by_default(sign_by_default: boolean): void;

    set_signing_algorithm(signing_algorithm?: string | null): void;

    set_signing_certificate(signing_certificate?: string | null): void;
}

export namespace SourceSecurity {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        method: string;
        secure: boolean;
    }
}

export class SourceSecurity extends SourceExtension {
    static $gtype: GObject.GType<SourceSecurity>;

    constructor(properties?: Partial<SourceSecurity.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceSecurity.ConstructorProperties>, ...args: any[]): void;

    // Properties
    method: string;
    secure: boolean;

    // Members

    dup_method(): string;

    get_method(): string;

    get_secure(): boolean;

    set_method(method?: string | null): void;

    set_secure(secure: boolean): void;
}

export namespace SourceSelectable {
    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {
        [key: string]: any;

        color: string;
        selected: boolean;
    }
}

export abstract class SourceSelectable extends SourceBackend {
    static $gtype: GObject.GType<SourceSelectable>;

    constructor(properties?: Partial<SourceSelectable.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceSelectable.ConstructorProperties>, ...args: any[]): void;

    // Properties
    color: string;
    selected: boolean;

    // Members

    dup_color(): string | null;

    get_color(): string | null;

    get_selected(): boolean;

    set_color(color?: string | null): void;

    set_selected(selected: boolean): void;
}

export namespace SourceTaskList {
    export interface ConstructorProperties extends SourceSelectable.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceTaskList extends SourceSelectable {
    static $gtype: GObject.GType<SourceTaskList>;

    constructor(properties?: Partial<SourceTaskList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceTaskList.ConstructorProperties>, ...args: any[]): void;
}

export namespace SourceUoa {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        account_id: number;
        accountId: number;
    }
}

export class SourceUoa extends SourceExtension {
    static $gtype: GObject.GType<SourceUoa>;

    constructor(properties?: Partial<SourceUoa.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceUoa.ConstructorProperties>, ...args: any[]): void;

    // Properties
    account_id: number;
    accountId: number;

    // Members

    get_account_id(): number;

    set_account_id(account_id: number): void;
}

export namespace SourceWeather {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        location: string;
        units: SourceWeatherUnits;
    }
}

export class SourceWeather extends SourceExtension {
    static $gtype: GObject.GType<SourceWeather>;

    constructor(properties?: Partial<SourceWeather.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceWeather.ConstructorProperties>, ...args: any[]): void;

    // Properties
    location: string;
    units: SourceWeatherUnits;

    // Members

    dup_location(): string;

    get_location(): string;

    get_units(): SourceWeatherUnits;

    set_location(location: string): void;

    set_units(units: SourceWeatherUnits): void;
}

export namespace SourceWebdav {
    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
        [key: string]: any;

        avoid_ifmatch: boolean;
        avoidIfmatch: boolean;
        calendar_auto_schedule: boolean;
        calendarAutoSchedule: boolean;
        color: string;
        display_name: string;
        displayName: string;
        email_address: string;
        emailAddress: string;
        resource_path: string;
        resourcePath: string;
        resource_query: string;
        resourceQuery: string;
        soup_uri: Soup.URI;
        soupUri: Soup.URI;
        ssl_trust: string;
        sslTrust: string;
    }
}

export class SourceWebdav extends SourceExtension {
    static $gtype: GObject.GType<SourceWebdav>;

    constructor(properties?: Partial<SourceWebdav.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceWebdav.ConstructorProperties>, ...args: any[]): void;

    // Properties
    avoid_ifmatch: boolean;
    avoidIfmatch: boolean;
    calendar_auto_schedule: boolean;
    calendarAutoSchedule: boolean;
    color: string;
    display_name: string;
    displayName: string;
    email_address: string;
    emailAddress: string;
    resource_path: string;
    resourcePath: string;
    resource_query: string;
    resourceQuery: string;
    soup_uri: Soup.URI;
    soupUri: Soup.URI;
    ssl_trust: string;
    sslTrust: string;

    // Members

    dup_color(): string;

    dup_display_name(): string;

    dup_email_address(): string;

    dup_resource_path(): string;

    dup_resource_query(): string;

    dup_soup_uri(): Soup.URI;

    dup_ssl_trust(): string;

    get_avoid_ifmatch(): boolean;

    get_calendar_auto_schedule(): boolean;

    get_color(): string;

    get_display_name(): string;

    get_email_address(): string;

    get_resource_path(): string;

    get_resource_query(): string;

    get_ssl_trust(): string;

    get_ssl_trust_response(): TrustPromptResponse;

    set_avoid_ifmatch(avoid_ifmatch: boolean): void;

    set_calendar_auto_schedule(calendar_auto_schedule: boolean): void;

    set_color(color?: string | null): void;

    set_display_name(display_name?: string | null): void;

    set_email_address(email_address?: string | null): void;

    set_resource_path(resource_path?: string | null): void;

    set_resource_query(resource_query?: string | null): void;

    set_soup_uri(soup_uri: Soup.URI): void;

    set_ssl_trust(ssl_trust?: string | null): void;

    set_ssl_trust_response(response: TrustPromptResponse): void;

    unset_temporary_ssl_trust(): void;

    update_ssl_trust(host: string, cert: Gio.TlsCertificate, response: TrustPromptResponse): void;

    verify_ssl_trust(host: string, cert: Gio.TlsCertificate, cert_errors: Gio.TlsCertificateFlags): TrustPromptResponse;
}

export namespace WebDAVSession {
    export interface ConstructorProperties extends SoupSession.ConstructorProperties {
        [key: string]: any;
    }
}

export class WebDAVSession extends SoupSession {
    static $gtype: GObject.GType<WebDAVSession>;

    constructor(properties?: Partial<WebDAVSession.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebDAVSession.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](source: Source): WebDAVSession;
    static ['new'](...args: never[]): never;

    // Members

    acl_sync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean;

    copy_sync(
        source_uri: string,
        destination_uri: string,
        depth: string,
        can_overwrite: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    delete_sync(
        uri: string,
        depth?: string | null,
        etag?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ensure_full_uri(request_uri: Soup.URI | null, href: string): string;

    get_acl_restrictions_sync(
        uri: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number, WebDAVACEPrincipalKind, string[]];

    get_acl_sync(uri: string | null, cancellable?: Gio.Cancellable | null): [boolean, WebDAVAccessControlEntry[]];

    get_current_user_privilege_set_sync(
        uri: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, WebDAVPrivilege[]];

    get_data_sync(
        uri: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null, string, number | null];

    get_last_dav_error_code(): string;

    get_last_dav_error_is_permission(): boolean;

    get_principal_collection_set_sync(uri: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    get_supported_privilege_set_sync(uri: string | null, cancellable?: Gio.Cancellable | null): [boolean, GLib.Node];

    get_sync(
        uri: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null, Gio.OutputStream];

    getctag_sync(uri: string | null, cancellable?: Gio.Cancellable | null): [boolean, string];

    list_sync(
        uri: string | null,
        depth: string,
        flags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, WebDAVResource[]];

    lock_resource_sync(
        uri: string | null,
        lock_scope: WebDAVLockScope,
        lock_timeout: number,
        owner: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string];

    lock_sync(
        uri: string | null,
        depth: string,
        lock_timeout: number,
        xml: XmlDocument,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, libxml2.Doc | null];

    mkcalendar_sync(
        uri: string,
        display_name: string | null,
        description: string | null,
        color: string | null,
        supports: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    mkcol_addressbook_sync(
        uri: string,
        display_name?: string | null,
        description?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    mkcol_sync(uri: string, cancellable?: Gio.Cancellable | null): boolean;

    move_sync(
        source_uri: string,
        destination_uri: string,
        can_overwrite: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    new_request(method: string, uri?: string | null): Soup.RequestHTTP;
    new_request(...args: never[]): never;

    options_sync(
        uri: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.HashTable<any, any>, GLib.HashTable<any, any>];

    post_sync(
        uri: string | null,
        data: string,
        data_length: number,
        out_content_type?: string | null,
        out_content?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    post_with_content_type_sync(
        uri: string | null,
        data: string,
        data_length: number,
        in_content_type?: string | null,
        out_content_type?: string | null,
        out_content?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    principal_property_search_sync(
        uri: string | null,
        apply_to_principal_collection_set: boolean,
        match_ns_uri: string | null,
        match_property: string,
        match_value: string,
        cancellable?: Gio.Cancellable | null
    ): [boolean, WebDAVResource[]];

    propfind_sync(
        uri: string | null,
        depth: string,
        xml?: XmlDocument | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    proppatch_sync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean;

    put_data_sync(
        uri: string,
        etag: string | null,
        content_type: string,
        bytes: string,
        length: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null];

    put_sync(
        uri: string,
        etag: string | null,
        content_type: string,
        stream: Gio.InputStream,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, string | null];

    refresh_lock_sync(
        uri: string | null,
        lock_token: string,
        lock_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    replace_with_detailed_error(
        request: Soup.RequestHTTP,
        response_data: Uint8Array | null,
        ignore_multistatus: boolean,
        prefix?: string | null
    ): boolean;

    report_sync(
        uri: string | null,
        depth: string | null,
        xml: XmlDocument,
        out_content_type?: string | null,
        out_content?: Uint8Array | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_acl_sync(
        uri: string | null,
        entries: WebDAVAccessControlEntry[],
        cancellable?: Gio.Cancellable | null
    ): boolean;

    traverse_mkcalendar_response(message: Soup.Message | null, xml_data: Uint8Array | string): boolean;

    traverse_mkcol_response(message: Soup.Message | null, xml_data: Uint8Array | string): boolean;

    traverse_multistatus_response(message: Soup.Message | null, xml_data: Uint8Array | string): boolean;

    unlock_sync(uri: string | null, lock_token: string, cancellable?: Gio.Cancellable | null): boolean;

    update_properties_sync(
        uri: string | null,
        changes: WebDAVPropertyChange[],
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static util_free_privileges(privileges?: GLib.Node | null): void;

    static util_item_href_equal(href1: string, href2: string): boolean;

    static util_maybe_dequote(text?: string | null): [string, string | null];
}

export namespace XmlDocument {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class XmlDocument extends GObject.Object {
    static $gtype: GObject.GType<XmlDocument>;

    constructor(properties?: Partial<XmlDocument.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<XmlDocument.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](ns_href: string | null, root_element: string): XmlDocument;

    // Members

    add_attribute(ns_href: string | null, name: string, value: string): void;

    add_attribute_double(ns_href: string | null, name: string, value: number): void;

    add_attribute_int(ns_href: string | null, name: string, value: number): void;

    add_attribute_time(ns_href: string | null, name: string, value: number): void;

    add_attribute_time_ical(ns_href: string | null, name: string, value: number): void;

    add_empty_element(ns_href: string | null, name: string): void;

    end_element(): void;

    get_content(): [string, number | null];

    get_xmldoc(): libxml2.Doc;

    start_element(ns_href: string | null, name: string): void;

    start_text_element(ns_href: string | null, name: string): void;

    write_base64(value: string, len: number): void;

    write_buffer(value: string, len: number): void;

    write_double(value: number): void;

    write_int(value: number): void;

    write_string(value: string): void;

    write_time(value: number): void;
}

export class AsyncClosure {
    static $gtype: GObject.GType<AsyncClosure>;

    constructor(copy: AsyncClosure);
}

export class ClientErrorsList {
    static $gtype: GObject.GType<ClientErrorsList>;

    constructor(
        properties?: Partial<{
            name?: string;
            err_code?: number;
        }>
    );

    constructor(copy: ClientErrorsList);

    // Fields
    name: string;
    err_code: number;
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class Collator {
    static $gtype: GObject.GType<Collator>;

    constructor(locale: string);
    constructor(copy: Collator);

    // Constructors
    static ['new'](locale: string): Collator;

    static new_interpret_country(locale: string): Collator;

    // Members
    collate(str_a: string | null, str_b: string | null): [boolean, number];

    generate_key(str: string): string;

    generate_key_for_index(index: number): string;

    get_index(str: string): number;

    get_index_labels(): [string[], number, number | null, number | null, number | null];

    ref(): Collator;

    unref(): void;

    static error_quark(): GLib.Quark;
}

export class ExtensionPrivate {
    static $gtype: GObject.GType<ExtensionPrivate>;

    constructor(copy: ExtensionPrivate);
}

export class Flag {
    static $gtype: GObject.GType<Flag>;

    constructor(copy: Flag);
}

export class FreeFormExpSymbol {
    static $gtype: GObject.GType<FreeFormExpSymbol>;

    constructor(copy: FreeFormExpSymbol);

    // Fields
    names: string;
    hint: string;
    build_sexp: FreeFormExpBuildSexpFunc;
}

export class GDataOAuth2AuthorizerPrivate {
    static $gtype: GObject.GType<GDataOAuth2AuthorizerPrivate>;

    constructor(copy: GDataOAuth2AuthorizerPrivate);
}

export class MemChunk {
    static $gtype: GObject.GType<MemChunk>;

    constructor(copy: MemChunk);
}

export class ModulePrivate {
    static $gtype: GObject.GType<ModulePrivate>;

    constructor(copy: ModulePrivate);
}

export class NamedParameters {
    static $gtype: GObject.GType<NamedParameters>;

    constructor();
    constructor(copy: NamedParameters);

    // Constructors
    static ['new'](): NamedParameters;

    static new_string(str: string): NamedParameters;

    static new_strv(strv: string): NamedParameters;

    // Members
    assign(from?: NamedParameters | null): void;

    clear(): void;

    count(): number;

    exists(name: string): boolean;

    free(): void;

    get(name: string): string;

    get_name(index: number): string;

    new_clone(): NamedParameters;

    set(name: string, value?: string | null): void;

    test(name: string, value: string, case_sensitively: boolean): boolean;

    to_string(): string;

    to_strv(): string[];
}

export class NetworkMonitorPrivate {
    static $gtype: GObject.GType<NetworkMonitorPrivate>;

    constructor(copy: NetworkMonitorPrivate);
}

export class OAuth2ServicesPrivate {
    static $gtype: GObject.GType<OAuth2ServicesPrivate>;

    constructor(copy: OAuth2ServicesPrivate);
}

export class OperationPool {
    static $gtype: GObject.GType<OperationPool>;

    constructor(copy: OperationPool);

    // Members
    free(): void;

    push(opdata?: any | null): void;

    release_opid(opid: number): void;

    reserve_opid(): number;
}

export class SoupAuthBearerPrivate {
    static $gtype: GObject.GType<SoupAuthBearerPrivate>;

    constructor(copy: SoupAuthBearerPrivate);
}

export class SoupSessionPrivate {
    static $gtype: GObject.GType<SoupSessionPrivate>;

    constructor(copy: SoupSessionPrivate);
}

export class SourceAddressBookPrivate {
    static $gtype: GObject.GType<SourceAddressBookPrivate>;

    constructor(copy: SourceAddressBookPrivate);
}

export class SourceAlarmsPrivate {
    static $gtype: GObject.GType<SourceAlarmsPrivate>;

    constructor(copy: SourceAlarmsPrivate);
}

export class SourceAuthenticationPrivate {
    static $gtype: GObject.GType<SourceAuthenticationPrivate>;

    constructor(copy: SourceAuthenticationPrivate);
}

export class SourceAutocompletePrivate {
    static $gtype: GObject.GType<SourceAutocompletePrivate>;

    constructor(copy: SourceAutocompletePrivate);
}

export class SourceAutoconfigPrivate {
    static $gtype: GObject.GType<SourceAutoconfigPrivate>;

    constructor(copy: SourceAutoconfigPrivate);
}

export class SourceBackendPrivate {
    static $gtype: GObject.GType<SourceBackendPrivate>;

    constructor(copy: SourceBackendPrivate);
}

export class SourceCalendarPrivate {
    static $gtype: GObject.GType<SourceCalendarPrivate>;

    constructor(copy: SourceCalendarPrivate);
}

export class SourceCamelPrivate {
    static $gtype: GObject.GType<SourceCamelPrivate>;

    constructor(copy: SourceCamelPrivate);
}

export class SourceCollectionPrivate {
    static $gtype: GObject.GType<SourceCollectionPrivate>;

    constructor(copy: SourceCollectionPrivate);
}

export class SourceContactsPrivate {
    static $gtype: GObject.GType<SourceContactsPrivate>;

    constructor(copy: SourceContactsPrivate);
}

export class SourceCredentialsProviderImplOAuth2Private {
    static $gtype: GObject.GType<SourceCredentialsProviderImplOAuth2Private>;

    constructor(copy: SourceCredentialsProviderImplOAuth2Private);
}

export class SourceCredentialsProviderImplPasswordPrivate {
    static $gtype: GObject.GType<SourceCredentialsProviderImplPasswordPrivate>;

    constructor(copy: SourceCredentialsProviderImplPasswordPrivate);
}

export class SourceCredentialsProviderImplPrivate {
    static $gtype: GObject.GType<SourceCredentialsProviderImplPrivate>;

    constructor(copy: SourceCredentialsProviderImplPrivate);
}

export class SourceCredentialsProviderPrivate {
    static $gtype: GObject.GType<SourceCredentialsProviderPrivate>;

    constructor(copy: SourceCredentialsProviderPrivate);
}

export class SourceExtensionPrivate {
    static $gtype: GObject.GType<SourceExtensionPrivate>;

    constructor(copy: SourceExtensionPrivate);
}

export class SourceGoaPrivate {
    static $gtype: GObject.GType<SourceGoaPrivate>;

    constructor(copy: SourceGoaPrivate);
}

export class SourceLDAPPrivate {
    static $gtype: GObject.GType<SourceLDAPPrivate>;

    constructor(copy: SourceLDAPPrivate);
}

export class SourceLocalPrivate {
    static $gtype: GObject.GType<SourceLocalPrivate>;

    constructor(copy: SourceLocalPrivate);
}

export class SourceMDNPrivate {
    static $gtype: GObject.GType<SourceMDNPrivate>;

    constructor(copy: SourceMDNPrivate);
}

export class SourceMailAccountPrivate {
    static $gtype: GObject.GType<SourceMailAccountPrivate>;

    constructor(copy: SourceMailAccountPrivate);
}

export class SourceMailCompositionPrivate {
    static $gtype: GObject.GType<SourceMailCompositionPrivate>;

    constructor(copy: SourceMailCompositionPrivate);
}

export class SourceMailIdentityPrivate {
    static $gtype: GObject.GType<SourceMailIdentityPrivate>;

    constructor(copy: SourceMailIdentityPrivate);
}

export class SourceMailSignaturePrivate {
    static $gtype: GObject.GType<SourceMailSignaturePrivate>;

    constructor(copy: SourceMailSignaturePrivate);
}

export class SourceMailSubmissionPrivate {
    static $gtype: GObject.GType<SourceMailSubmissionPrivate>;

    constructor(copy: SourceMailSubmissionPrivate);
}

export class SourceMailTransportPrivate {
    static $gtype: GObject.GType<SourceMailTransportPrivate>;

    constructor(copy: SourceMailTransportPrivate);
}

export class SourceMemoListPrivate {
    static $gtype: GObject.GType<SourceMemoListPrivate>;

    constructor(copy: SourceMemoListPrivate);
}

export class SourceOfflinePrivate {
    static $gtype: GObject.GType<SourceOfflinePrivate>;

    constructor(copy: SourceOfflinePrivate);
}

export class SourceOpenPGPPrivate {
    static $gtype: GObject.GType<SourceOpenPGPPrivate>;

    constructor(copy: SourceOpenPGPPrivate);
}

export class SourcePrivate {
    static $gtype: GObject.GType<SourcePrivate>;

    constructor(copy: SourcePrivate);
}

export class SourceProxyPrivate {
    static $gtype: GObject.GType<SourceProxyPrivate>;

    constructor(copy: SourceProxyPrivate);
}

export class SourceRefreshPrivate {
    static $gtype: GObject.GType<SourceRefreshPrivate>;

    constructor(copy: SourceRefreshPrivate);
}

export class SourceRegistryPrivate {
    static $gtype: GObject.GType<SourceRegistryPrivate>;

    constructor(copy: SourceRegistryPrivate);
}

export class SourceRegistryWatcherPrivate {
    static $gtype: GObject.GType<SourceRegistryWatcherPrivate>;

    constructor(copy: SourceRegistryWatcherPrivate);
}

export class SourceResourcePrivate {
    static $gtype: GObject.GType<SourceResourcePrivate>;

    constructor(copy: SourceResourcePrivate);
}

export class SourceRevisionGuardsPrivate {
    static $gtype: GObject.GType<SourceRevisionGuardsPrivate>;

    constructor(copy: SourceRevisionGuardsPrivate);
}

export class SourceSMIMEPrivate {
    static $gtype: GObject.GType<SourceSMIMEPrivate>;

    constructor(copy: SourceSMIMEPrivate);
}

export class SourceSecurityPrivate {
    static $gtype: GObject.GType<SourceSecurityPrivate>;

    constructor(copy: SourceSecurityPrivate);
}

export class SourceSelectablePrivate {
    static $gtype: GObject.GType<SourceSelectablePrivate>;

    constructor(copy: SourceSelectablePrivate);
}

export class SourceTaskListPrivate {
    static $gtype: GObject.GType<SourceTaskListPrivate>;

    constructor(copy: SourceTaskListPrivate);
}

export class SourceUoaPrivate {
    static $gtype: GObject.GType<SourceUoaPrivate>;

    constructor(copy: SourceUoaPrivate);
}

export class SourceWeatherPrivate {
    static $gtype: GObject.GType<SourceWeatherPrivate>;

    constructor(copy: SourceWeatherPrivate);
}

export class SourceWebdavPrivate {
    static $gtype: GObject.GType<SourceWebdavPrivate>;

    constructor(copy: SourceWebdavPrivate);
}

export class WebDAVAccessControlEntry {
    static $gtype: GObject.GType<WebDAVAccessControlEntry>;

    constructor(
        principal_kind: WebDAVACEPrincipalKind,
        principal_href: string | null,
        flags: number,
        inherited_href?: string | null
    );

    constructor(copy: WebDAVAccessControlEntry);

    // Fields
    principal_kind: WebDAVACEPrincipalKind;
    principal_href: string;
    flags: number;
    inherited_href: string;
    privileges: any[];

    // Constructors
    static ['new'](
        principal_kind: WebDAVACEPrincipalKind,
        principal_href: string | null,
        flags: number,
        inherited_href?: string | null
    ): WebDAVAccessControlEntry;

    // Members
    append_privilege(privilege: WebDAVPrivilege): void;

    copy(): WebDAVAccessControlEntry;

    get_privileges(): WebDAVPrivilege[];

    static free(ptr?: any | null): void;
}

export class WebDAVDiscoveredSource {
    static $gtype: GObject.GType<WebDAVDiscoveredSource>;

    constructor(
        properties?: Partial<{
            href?: string;
            supports?: number;
            display_name?: string;
            description?: string;
            color?: string;
        }>
    );

    constructor(copy: WebDAVDiscoveredSource);

    // Fields
    href: string;
    supports: number;
    display_name: string;
    description: string;
    color: string;
}

export class WebDAVPrivilege {
    static $gtype: GObject.GType<WebDAVPrivilege>;

    constructor(
        ns_uri: string | null,
        name: string | null,
        description: string | null,
        kind: WebDAVPrivilegeKind,
        hint: WebDAVPrivilegeHint
    );

    constructor(copy: WebDAVPrivilege);

    // Fields
    ns_uri: string;
    name: string;
    description: string;
    kind: WebDAVPrivilegeKind;
    hint: WebDAVPrivilegeHint;

    // Constructors
    static ['new'](
        ns_uri: string | null,
        name: string | null,
        description: string | null,
        kind: WebDAVPrivilegeKind,
        hint: WebDAVPrivilegeHint
    ): WebDAVPrivilege;

    // Members
    copy(): WebDAVPrivilege;

    static free(ptr?: any | null): void;
}

export class WebDAVPropertyChange {
    static $gtype: GObject.GType<WebDAVPropertyChange>;

    constructor(ns_uri: string, name: string);
    constructor(copy: WebDAVPropertyChange);

    // Fields
    kind: WebDAVPropertyChangeKind;
    ns_uri: string;
    name: string;
    value: string;

    // Constructors
    static new_remove(ns_uri: string, name: string): WebDAVPropertyChange;

    static new_set(ns_uri: string, name: string, value?: string | null): WebDAVPropertyChange;

    // Members
    copy(): WebDAVPropertyChange;

    static free(ptr?: any | null): void;
}

export class WebDAVResource {
    static $gtype: GObject.GType<WebDAVResource>;

    constructor(
        kind: WebDAVResourceKind,
        supports: number,
        href: string,
        etag: string | null,
        display_name: string | null,
        content_type: string | null,
        content_length: number,
        creation_date: number,
        last_modified: number,
        description?: string | null,
        color?: string | null
    );

    constructor(copy: WebDAVResource);

    // Fields
    kind: WebDAVResourceKind;
    supports: number;
    href: string;
    etag: string;
    display_name: string;
    content_type: string;
    content_length: number;
    creation_date: number;
    last_modified: number;
    description: string;
    color: string;

    // Constructors
    static ['new'](
        kind: WebDAVResourceKind,
        supports: number,
        href: string,
        etag: string | null,
        display_name: string | null,
        content_type: string | null,
        content_length: number,
        creation_date: number,
        last_modified: number,
        description?: string | null,
        color?: string | null
    ): WebDAVResource;

    // Members
    copy(): WebDAVResource;

    static free(ptr?: any | null): void;
}

export class WebDAVSessionPrivate {
    static $gtype: GObject.GType<WebDAVSessionPrivate>;

    constructor(copy: WebDAVSessionPrivate);
}

export class XmlDocumentPrivate {
    static $gtype: GObject.GType<XmlDocumentPrivate>;

    constructor(copy: XmlDocumentPrivate);
}

export class XmlHash {
    static $gtype: GObject.GType<XmlHash>;

    constructor(copy: XmlHash);
}

export interface ExtensibleNamespace {
    $gtype: GObject.GType<Extensible>;
    prototype: ExtensiblePrototype;
}

export type Extensible = ExtensiblePrototype;

export interface ExtensiblePrototype extends GObject.Object {
    // Members

    list_extensions(extension_type: GObject.GType): Extension[];

    load_extensions(): void;
}

export const Extensible: ExtensibleNamespace;

export interface OAuth2ServiceNamespace {
    $gtype: GObject.GType<OAuth2Service>;
    prototype: OAuth2ServicePrototype;

    util_set_to_form(form: GLib.HashTable<string, string>, name: string, value?: string | null): void;

    util_take_to_form(form: GLib.HashTable<string, string>, name: string, value?: string | null): void;
}

export type OAuth2Service = OAuth2ServicePrototype;

export interface OAuth2ServicePrototype extends GObject.Object {
    // Members

    can_process(source: Source): boolean;

    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;

    extract_authorization_code(
        source: Source,
        page_title: string,
        page_uri: string,
        page_content: string | null
    ): [boolean, string];

    get_access_token_sync(
        source: Source,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, number];

    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;

    get_authentication_uri(source: Source): string;

    get_client_id(source: Source): string;

    get_client_secret(source: Source): string | null;

    get_display_name(): string;

    get_flags(): number;

    get_name(): string;

    get_redirect_uri(source: Source): string | null;

    get_refresh_uri(source: Source): string;

    guess_can_process(protocol?: string | null, hostname?: string | null): boolean;

    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable<string, string>): void;

    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable<string, string>): void;

    prepare_get_token_message(source: Source, message: Soup.Message): void;

    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable<string, string>): void;

    prepare_refresh_token_message(source: Source, message: Soup.Message): void;

    receive_and_store_token_sync(
        source: Source,
        authorization_code: string,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    refresh_and_store_token_sync(
        source: Source,
        refresh_token: string,
        ref_source: OAuth2ServiceRefSourceFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_can_process(source: Source): boolean;

    vfunc_extract_authorization_code(
        source: Source,
        page_title: string,
        page_uri: string,
        page_content: string | null
    ): [boolean, string];

    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;

    vfunc_get_authentication_uri(source: Source): string;

    vfunc_get_client_id(source: Source): string;

    vfunc_get_client_secret(source: Source): string | null;

    vfunc_get_display_name(): string;

    vfunc_get_flags(): number;

    vfunc_get_name(): string;

    vfunc_get_redirect_uri(source: Source): string | null;

    vfunc_get_refresh_uri(source: Source): string;

    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;

    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable<string, string>): void;

    vfunc_prepare_get_token_form(
        source: Source,
        authorization_code: string,
        form: GLib.HashTable<string, string>
    ): void;

    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;

    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable<string, string>): void;

    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
}

export const OAuth2Service: OAuth2ServiceNamespace;
