/**
 * Camel 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from "./gobject";
import * as Gio from "./gio";
import * as libxml2 from "./libxml2";
import * as GLib from "./glib";

export const AI_CANONNAME: number;
export const AI_NUMERICHOST: number;
export const BLOCK_SIZE: number;
export const BLOCK_SIZE_BITS: number;
export const CIPHER_CERT_INFO_PROPERTY_PHOTO_FILENAME: string;
export const CIPHER_CERT_INFO_PROPERTY_SIGNERS_ALT_EMAILS: string;
export const DB_FILE: string;
export const DB_FREE_CACHE_SIZE: number;
export const DB_IN_MEMORY_DB: string;
export const DB_IN_MEMORY_TABLE: string;
export const DB_IN_MEMORY_TABLE_LIMIT: number;
export const DB_SLEEP_INTERVAL: number;
export const DEBUG_IMAP: string;
export const DEBUG_IMAP_FOLDER: string;
export const DOT_LOCK_REFRESH: number;
export const EAI_ADDRFAMILY: number;
export const EAI_AGAIN: number;
export const EAI_BADFLAGS: number;
export const EAI_FAIL: number;
export const EAI_FAMILY: number;
export const EAI_MEMORY: number;
export const EAI_NODATA: number;
export const EAI_NONAME: number;
export const EAI_OVERFLOW: number;
export const EAI_SERVICE: number;
export const EAI_SOCKTYPE: number;
export const EAI_SYSTEM: number;
export const EDS_CAMEL_PROVIDER_DIR: string;
export const FOLDER_TYPE_BIT: number;
export const FOLDER_TYPE_MASK: number;
export const FOLD_MAX_SIZE: number;
export const FOLD_SIZE: number;
export const INDEX_DELETED: number;
export const KEY_TABLE_MAX_KEY: number;
export const LOCK_DELAY: number;
export const LOCK_DOT_DELAY: number;
export const LOCK_DOT_RETRY: number;
export const LOCK_DOT_STALE: number;
export const LOCK_RETRY: number;
export const MESSAGE_DATE_CURRENT: number;
export const MESSAGE_SYSTEM_MASK: number;
export const MIME_FILTER_ENRICHED_IS_RICHTEXT: number;
export const MIME_YDECODE_STATE_BEGIN: number;
export const MIME_YDECODE_STATE_DECODE: number;
export const MIME_YDECODE_STATE_END: number;
export const MIME_YDECODE_STATE_EOLN: number;
export const MIME_YDECODE_STATE_ESCAPE: number;
export const MIME_YDECODE_STATE_INIT: number;
export const MIME_YDECODE_STATE_PART: number;
export const MIME_YENCODE_CRC_INIT: number;
export const MIME_YENCODE_STATE_INIT: number;
export const NI_DGRAM: number;
export const NI_NAMEREQD: number;
export const NI_NOFQDN: number;
export const NI_NUMERICHOST: number;
export const NI_NUMERICSERV: number;
export const O_BINARY: number;
export const RECIPIENT_TYPE_BCC: string;
export const RECIPIENT_TYPE_CC: string;
export const RECIPIENT_TYPE_RESENT_BCC: string;
export const RECIPIENT_TYPE_RESENT_CC: string;
export const RECIPIENT_TYPE_RESENT_TO: string;
export const RECIPIENT_TYPE_TO: string;
export const STORE_INFO_FOLDER_TYPE_BIT: number;
export const STORE_INFO_FOLDER_TYPE_MASK: number;
export const STORE_INFO_FOLDER_UNKNOWN: number;
export const STORE_SETUP_ARCHIVE_FOLDER: string;
export const STORE_SETUP_DRAFTS_FOLDER: string;
export const STORE_SETUP_SENT_FOLDER: string;
export const STORE_SETUP_TEMPLATES_FOLDER: string;
export const UNMATCHED_NAME: string;
export const URL_HIDE_ALL: number;
export const URL_PART_AUTH: number;
export const URL_PART_HIDDEN: number;
export const URL_PART_HOST: number;
export const URL_PART_NEED: number;
export const URL_PART_PASSWORD: number;
export const URL_PART_PATH: number;
export const URL_PART_PATH_DIR: number;
export const URL_PART_PORT: number;
export const URL_PART_USER: number;
export const UUDECODE_STATE_MASK: number;
export const VJUNK_NAME: string;
export const VTRASH_NAME: string;

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

export function charset_best(_in: number[]): string | null;

export function charset_iso_to_windows(isocharset: string): string;

export function cipher_can_load_photos(): boolean;

export function cipher_canonical_to_stream(
    part: MimePart,
    flags: number,
    ostream: Stream,
    cancellable?: Gio.Cancellable | null
): number;

export function cipher_certinfo_get_property(cert_info: CipherCertInfo, name: string): any | null;

export function cipher_certinfo_set_property(
    cert_info: CipherCertInfo,
    name: string,
    value?: any | null,
    value_free?: GLib.DestroyNotify | null,
    value_clone?: CipherCloneFunc | null
): void;

export function content_disposition_decode(_in: string): ContentDisposition;

export function content_transfer_encoding_decode(_in: string): string;

export function content_type_decode(_in: string): ContentType;

export function debug(mode: string): boolean;

export function debug_demangle_backtrace(bt?: GLib.String | null): GLib.String | null;

export function debug_end(): void;

export function debug_get_backtrace(): GLib.String;

export function debug_get_raw_backtrace(): GLib.String;

export function debug_init(): void;

export function debug_ref_unref_dump_backtraces(): void;

export function debug_ref_unref_push_backtrace(backtrace: GLib.String, object_ref_count: number): void;

export function debug_ref_unref_push_backtrace_for_object(_object?: any | null): void;

export function debug_start(mode: string): boolean;

export function enriched_to_html(_in: string, flags: number): string;

export function error_quark(): GLib.Quark;

export function file_util_decode_fixed_int32(_in: any | null, dest: number): number;

export function file_util_decode_fixed_string(_in: any | null, str: string, len: number): number;

export function file_util_decode_gsize(_in: any | null, dest: number): number;

export function file_util_decode_off_t(_in: any | null, dest: number): number;

export function file_util_decode_string(_in: any | null, str: string): number;

export function file_util_decode_time_t(_in: any | null, dest: number): number;

export function file_util_decode_uint32(_in: any | null, dest: number): number;

export function file_util_encode_fixed_int32(out: any | null, value: number): number;

export function file_util_encode_fixed_string(out: any | null, str: string, len: number): number;

export function file_util_encode_gsize(out: any | null, value: number): number;

export function file_util_encode_off_t(out: any | null, value: number): number;

export function file_util_encode_string(out: any | null, str: string): number;

export function file_util_encode_time_t(out: any | null, value: number): number;

export function file_util_encode_uint32(out: any | null, value: number): number;

export function file_util_safe_filename(name: string): string;

export function file_util_savename(filename: string): string;

export function folder_info_build(
    folders: FolderInfo[],
    namespace_: string,
    separator: number,
    short_names: boolean
): FolderInfo;

export function freeaddrinfo(host?: any | null): void;

export function getaddrinfo(
    name: string,
    service: string,
    hints?: any | null,
    cancellable?: Gio.Cancellable | null
): any | null;

export function header_address_decode(_in: string, charset: string): HeaderAddress;

export function header_address_fold(_in: string, headerlen: number): string;

export function header_address_list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void;

export function header_address_list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void;

export function header_address_list_clear(addrlistp: HeaderAddress[]): void;

export function header_address_list_encode(addrlist: HeaderAddress[]): string;

export function header_address_list_format(addrlist: HeaderAddress[]): string;

export function header_contentid_decode(_in: string): string;

export function header_decode_date(str: string, tz_offset: number): number;

export function header_decode_int(_in: string): number;

export function header_decode_string(_in: string, default_charset: string): string;

export function header_encode_phrase(_in: number): string;

export function header_encode_string(_in: number): string;

export function header_fold(_in: string, headerlen: number): string;

export function header_format_ctext(_in: string, default_charset: string): string;

export function header_format_date(date: number, tz_offset: number): string;

export function header_location_decode(_in: string): string;

export function header_mailbox_decode(_in: string, charset: string): HeaderAddress;

export function header_mime_decode(_in: string, maj: number, min: number): void;

export function header_msgid_decode(_in: string): string;

export function header_msgid_generate(domain: string): string;

export function header_newsgroups_decode(_in: string): string[];

export function header_param(params: any | null, name: string): string;

export function header_param_list_decode(_in?: string | null): any | null;

export function header_param_list_format(params?: any | null): string;

export function header_param_list_format_append(out: GLib.String, params?: any | null): void;

export function header_param_list_free(params?: any | null): void;

export function header_references_decode(_in: string): string[];

export function header_set_param(paramsp: any | null, name: string, value: string): any | null;

export function header_token_decode(_in: string): string;

export function header_unfold(_in: string): string;

export function headers_dup_mailing_list(headers: NameValueArray): string | null;

export function host_idna_to_ascii(host: string): string;

export function iconv_charset_language(charset: string): string;

export function iconv_charset_name(charset: string): string;

export function iconv_locale_charset(): string;

export function iconv_locale_language(): string;

export function init(certdb_dir: string, nss_init: boolean): number;

export function localtime_with_offset(tt: number, tm: any | null, offset: number): void;

export function lock_dot(path: string): number;

export function lock_fcntl(fd: number, type: LockType): number;

export function lock_flock(fd: number, type: LockType): number;

export function lock_folder(path: string, fd: number, type: LockType): number;

export function lock_helper_lock(path: string): number;

export function lock_helper_unlock(lockid: number): number;

export function mktime_utc(tm?: any | null): number;

export function movemail(source: string, dest: string): number;

export function pointer_tracker_dump(): void;

export function pointer_tracker_track_with_info(ptr: any | null, info: string): void;

export function pointer_tracker_untrack(ptr?: any | null): void;

export function provider_get(protocol: string): Provider;

export function provider_init(): void;

export function provider_list(load: boolean): Provider[];

export function provider_load(path: string): boolean;

export function provider_module_init(): void;

export function pstring_add(string: string, own: boolean): string;

export function pstring_contains(string: string): boolean;

export function pstring_dump_stat(): void;

export function pstring_free(string: string): void;

export function pstring_peek(string: string): string;

export function pstring_strdup(string: string): string;

export function quoted_decode_step(
    _in: Uint8Array | string,
    out: Uint8Array | string,
    saveme: number[]
): [number, Uint8Array, number[]];

export function quoted_encode_close(
    _in: Uint8Array | string,
    out: Uint8Array | string,
    save: number[]
): [number, Uint8Array, number[]];

export function quoted_encode_step(
    _in: Uint8Array | string,
    out: Uint8Array | string,
    save: number[]
): [number, Uint8Array, number[]];

export function read(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number;

export function search_camel_header_soundex(header: string, match: string): boolean;

export function search_get_all_headers_decoded(message: MimeMessage): string;

export function search_get_default_charset_from_headers(headers: NameValueArray): string;

export function search_get_default_charset_from_message(message: MimeMessage): string;

export function search_get_header_decoded(
    header_name: string,
    header_value: string,
    default_charset?: string | null
): string;

export function search_get_headers_decoded(headers: NameValueArray, default_charset?: string | null): string;

export function search_header_is_address(header_name: string): boolean;

export function search_header_match(
    value: string,
    match: string,
    how: _search_match_t,
    type: _search_t,
    default_charset: string
): boolean;

export function search_words_free(words?: any | null): void;

export function search_words_simple(words?: any | null): any | null;

export function search_words_split(_in: number): any | null;

export function shutdown(): void;

export function store_info_name(summary: StoreSummary, info: StoreInfo): string;

export function store_info_path(summary: StoreSummary, info: StoreInfo): string;

export function store_info_set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void;

export function strcase_equal(a?: any | null, b?: any | null): number;

export function strcase_hash(v?: any | null): number;

export function strdown(str: string): string;

export function strstrcase(haystack: string, needle: string): string;

export function system_flag(name: string): MessageFlags;

export function system_flag_get(flags: MessageFlags, name: string): boolean;

export function text_to_html(_in: string, flags: MimeFilterToHTMLFlags, color: number): string;

export function time_value_apply(src_time: number, unit: TimeUnit, value: number): number;

export function transfer_encoding_from_string(string: string): TransferEncoding;

export function transfer_encoding_to_string(encoding: TransferEncoding): string;

export function ucs2_utf8(ptr: string): string;

export function uid_cache_free_uids(uids: string[]): void;

export function unlock_dot(path: string): void;

export function unlock_fcntl(fd: number): void;

export function unlock_flock(fd: number): void;

export function unlock_folder(path: string, fd: number): void;

export function url_addrspec_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

export function url_addrspec_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

export function url_decode(part: string): void;

export function url_decode_path(path: string): string;

export function url_encode(part: string, escape_extra: string): string;

export function url_file_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

export function url_file_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

export function url_web_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

export function url_web_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

export function ustrstrcase(haystack: string, needle: string): string;

export function utf7_utf8(ptr: string): string;

export function utf8_getc(ptr: number): [number, number];

export function utf8_getc_limit(ptr: number, end: number): [number, number];

export function utf8_make_valid(text: string): string;

export function utf8_make_valid_len(text: string, text_len: number): string;

export function utf8_putc(ptr: number, c: number): number;

export function utf8_ucs2(ptr: string): string;

export function utf8_utf7(ptr: string): string;

export function util_bdata_get_number(bdata_ptr: string, default_value: number): number;

export function util_bdata_get_string(bdata_ptr: string, default_value: string): string;

export function util_bdata_put_number(bdata_str: GLib.String, value: number): void;

export function util_bdata_put_string(bdata_str: GLib.String, value: string): void;

export function uudecode_step(
    _in: Uint8Array | string,
    out: Uint8Array | string,
    save: number[]
): [number, Uint8Array, number[]];

export function uuencode_close(
    _in: Uint8Array | string,
    out: Uint8Array | string,
    uubuf: Uint8Array | string,
    save: number[]
): [number, Uint8Array, Uint8Array, number[]];

export function uuencode_step(
    _in: Uint8Array | string,
    out: Uint8Array | string,
    uubuf: Uint8Array | string,
    save: number[]
): [number, Uint8Array, Uint8Array, number[]];

export function write(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number;

export function ydecode_step(_in: Uint8Array | string): [number, Uint8Array, number, number, number];

export function yencode_close(_in: Uint8Array | string): [number, Uint8Array, number, number, number];

export function yencode_step(_in: Uint8Array | string): [number, Uint8Array, number, number, number];

export type CipherCloneFunc = (value?: any | null) => any | null;
export type CopyFunc = (object?: any | null) => any | null;
export type DBCollate = (
    enc: any | null,
    length1: number,
    data1: any | null,
    length2: number,
    data2?: any | null
) => number;
export type DBSelectCB = (colvalues: string[], colnames: string[]) => number;
export type DataCacheRemoveFunc = (cdc: DataCache, filename: string) => boolean;
export type FilterPlaySoundFunc = (driver: FilterDriver, filename: string) => void;
export type FilterShellFunc = (driver: FilterDriver, argc: number, argv: string) => void;
export type FilterStatusFunc = (driver: FilterDriver, status: any | null, pc: number, desc: string) => void;
export type FilterSystemBeepFunc = (driver: FilterDriver) => void;
export type ForeachInfoData = (mi_data: VeeMessageInfoData, subfolder: Folder) => void;
export type ForeachPartFunc = (message: MimeMessage, part: MimePart, parent_part?: MimePart | null) => boolean;
export type IndexNorm = (index: Index, word: string) => string;
export type MessageContentInfoTraverseCallback = (ci: MessageContentInfo, depth: number) => boolean;
export type ProviderAutoDetectFunc = (url: URL) => number;
export type SessionCallback = (session: Session, cancellable?: Gio.Cancellable | null) => void;
export type TextIndexFunc = (idx: TextIndex, word: string, buffer: string) => void;
export type UrlScanFunc = (_in: string, pos: string, inend: string, match: UrlMatch) => boolean;

export namespace AuthenticationResult {
    export const $gtype: GObject.GType<AuthenticationResult>;
}

export enum AuthenticationResult {
    ERROR = 0,
    ACCEPTED = 1,
    REJECTED = 2,
}

export namespace CertTrust {
    export const $gtype: GObject.GType<CertTrust>;
}

export enum CertTrust {
    UNKNOWN = 0,
    NEVER = 1,
    MARGINAL = 2,
    FULLY = 3,
    ULTIMATE = 4,
    TEMPORARY = 5,
}

export namespace CipherHash {
    export const $gtype: GObject.GType<CipherHash>;
}

export enum CipherHash {
    DEFAULT = 0,
    MD2 = 1,
    MD5 = 2,
    SHA1 = 3,
    SHA256 = 4,
    SHA384 = 5,
    SHA512 = 6,
    RIPEMD160 = 7,
    TIGER192 = 8,
    HAVAL5160 = 9,
}

export namespace CipherValidityEncrypt {
    export const $gtype: GObject.GType<CipherValidityEncrypt>;
}

export enum CipherValidityEncrypt {
    NONE = 0,
    WEAK = 1,
    ENCRYPTED = 2,
    STRONG = 3,
}

export namespace CipherValidityMode {
    export const $gtype: GObject.GType<CipherValidityMode>;
}

export enum CipherValidityMode {
    SIGN = 0,
    ENCRYPT = 1,
}

export namespace CipherValiditySign {
    export const $gtype: GObject.GType<CipherValiditySign>;
}

export enum CipherValiditySign {
    NONE = 0,
    GOOD = 1,
    BAD = 2,
    UNKNOWN = 3,
    NEED_PUBLIC_KEY = 4,
}

export namespace CompareType {
    export const $gtype: GObject.GType<CompareType>;
}

export enum CompareType {
    INSENSITIVE = 0,
    SENSITIVE = 1,
}

export namespace DBKnownColumnNames {
    export const $gtype: GObject.GType<DBKnownColumnNames>;
}

export enum DBKnownColumnNames {
    UNKNOWN = -1,
    ATTACHMENT = 0,
    BDATA = 1,
    CINFO = 2,
    DELETED = 3,
    DELETED_COUNT = 4,
    DRECEIVED = 5,
    DSENT = 6,
    FLAGS = 7,
    FOLDER_NAME = 8,
    FOLLOWUP_COMPLETED_ON = 9,
    FOLLOWUP_DUE_BY = 10,
    FOLLOWUP_FLAG = 11,
    IMPORTANT = 12,
    JND_COUNT = 13,
    JUNK = 14,
    JUNK_COUNT = 15,
    LABELS = 16,
    MAIL_CC = 17,
    MAIL_FROM = 18,
    MAIL_TO = 19,
    MLIST = 20,
    NEXTUID = 21,
    PART = 22,
    READ = 23,
    REPLIED = 24,
    SAVED_COUNT = 25,
    SIZE = 26,
    SUBJECT = 27,
    TIME = 28,
    UID = 29,
    UNREAD_COUNT = 30,
    USERTAGS = 31,
    VERSION = 32,
    VISIBLE_COUNT = 33,
    VUID = 34,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static ERROR_GENERIC: number;
}

export namespace FetchHeadersType {
    export const $gtype: GObject.GType<FetchHeadersType>;
}

export enum FetchHeadersType {
    BASIC = 0,
    BASIC_AND_MAILING_LIST = 1,
    ALL = 2,
}

export namespace FetchType {
    export const $gtype: GObject.GType<FetchType>;
}

export enum FetchType {
    OLD_MESSAGES = 0,
    NEW_MESSAGES = 1,
}

export namespace FolderError {
    export const $gtype: GObject.GType<FolderError>;
}

export enum FolderError {
    INVALID = 0,
    INVALID_STATE = 1,
    NON_EMPTY = 2,
    NON_UID = 3,
    INSUFFICIENT_PERMISSION = 4,
    INVALID_PATH = 5,
    INVALID_UID = 6,
    SUMMARY_INVALID = 7,
}

export namespace HTMLParserState {
    export const $gtype: GObject.GType<HTMLParserState>;
}

export enum HTMLParserState {
    DATA = 0,
    ENT = 1,
    ELEMENT = 2,
    TAG = 3,
    DTDENT = 4,
    COMMENT0 = 5,
    COMMENT = 6,
    ATTR0 = 7,
    ATTR = 8,
    VAL0 = 9,
    VAL = 10,
    VAL_ENT = 11,
    EOD = 12,
    EOF = 13,
}

export namespace HeaderAddressType {
    export const $gtype: GObject.GType<HeaderAddressType>;
}

export enum HeaderAddressType {
    NONE = 0,
    NAME = 1,
    GROUP = 2,
}

export namespace JunkStatus {
    export const $gtype: GObject.GType<JunkStatus>;
}

export enum JunkStatus {
    ERROR = 0,
    INCONCLUSIVE = 1,
    MESSAGE_IS_JUNK = 2,
    MESSAGE_IS_NOT_JUNK = 3,
}

export namespace LockType {
    export const $gtype: GObject.GType<LockType>;
}

export enum LockType {
    READ = 0,
    WRITE = 1,
}

export namespace MemPoolFlags {
    export const $gtype: GObject.GType<MemPoolFlags>;
}

export enum MemPoolFlags {
    STRUCT = 0,
    WORD = 1,
    BYTE = 2,
    MASK = 3,
}

export namespace MimeFilterBasicType {
    export const $gtype: GObject.GType<MimeFilterBasicType>;
}

export enum MimeFilterBasicType {
    INVALID = 0,
    BASE64_ENC = 1,
    BASE64_DEC = 2,
    QP_ENC = 3,
    QP_DEC = 4,
    UU_ENC = 5,
    UU_DEC = 6,
}

export namespace MimeFilterCRLFDirection {
    export const $gtype: GObject.GType<MimeFilterCRLFDirection>;
}

export enum MimeFilterCRLFDirection {
    ENCODE = 0,
    DECODE = 1,
}

export namespace MimeFilterCRLFMode {
    export const $gtype: GObject.GType<MimeFilterCRLFMode>;
}

export enum MimeFilterCRLFMode {
    DOTS = 0,
    ONLY = 1,
}

export namespace MimeFilterGZipMode {
    export const $gtype: GObject.GType<MimeFilterGZipMode>;
}

export enum MimeFilterGZipMode {
    ZIP = 0,
    UNZIP = 1,
}

export namespace MimeFilterYencDirection {
    export const $gtype: GObject.GType<MimeFilterYencDirection>;
}

export enum MimeFilterYencDirection {
    ENCODE = 0,
    DECODE = 1,
}

export namespace MimeParserState {
    export const $gtype: GObject.GType<MimeParserState>;
}

export enum MimeParserState {
    INITIAL = 0,
    PRE_FROM = 1,
    FROM = 2,
    HEADER = 3,
    BODY = 4,
    MULTIPART = 5,
    MESSAGE = 6,
    PART = 7,
    END = 8,
    EOF = 8,
    PRE_FROM_END = 9,
    FROM_END = 10,
    HEADER_END = 11,
    BODY_END = 12,
    MULTIPART_END = 13,
    MESSAGE_END = 14,
}

export namespace NetworkSecurityMethod {
    export const $gtype: GObject.GType<NetworkSecurityMethod>;
}

export enum NetworkSecurityMethod {
    NONE = 0,
    SSL_ON_ALTERNATE_PORT = 1,
    STARTTLS_ON_STANDARD_PORT = 2,
}

export namespace ProviderConfType {
    export const $gtype: GObject.GType<ProviderConfType>;
}

export enum ProviderConfType {
    END = 0,
    SECTION_START = 1,
    SECTION_END = 2,
    CHECKBOX = 3,
    CHECKSPIN = 4,
    ENTRY = 5,
    LABEL = 6,
    HIDDEN = 7,
    OPTIONS = 8,
    PLACEHOLDER = 9,
}

export namespace ProviderType {
    export const $gtype: GObject.GType<ProviderType>;
}

export enum ProviderType {
    STORE = 0,
    TRANSPORT = 1,
}

export namespace SExpResultType {
    export const $gtype: GObject.GType<SExpResultType>;
}

export enum SExpResultType {
    ARRAY_PTR = 0,
    INT = 1,
    STRING = 2,
    BOOL = 3,
    TIME = 4,
    UNDEFINED = 5,
}

export namespace SExpTermType {
    export const $gtype: GObject.GType<SExpTermType>;
}

export enum SExpTermType {
    INT = 0,
    BOOL = 1,
    STRING = 2,
    TIME = 3,
    FUNC = 4,
    IFUNC = 5,
    VAR = 6,
}

export namespace SMIMESign {
    export const $gtype: GObject.GType<SMIMESign>;
}

export enum SMIMESign {
    CLEARSIGN = 0,
    ENVELOPED = 1,
}

export namespace SaslAnonTraceType {
    export const $gtype: GObject.GType<SaslAnonTraceType>;
}

export enum SaslAnonTraceType {
    EMAIL = 0,
    OPAQUE = 1,
    EMPTY = 2,
}

export namespace ServiceConnectionStatus {
    export const $gtype: GObject.GType<ServiceConnectionStatus>;
}

export enum ServiceConnectionStatus {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    DISCONNECTING = 3,
}

export namespace ServiceError {
    export const $gtype: GObject.GType<ServiceError>;
}

export enum ServiceError {
    INVALID = 0,
    URL_INVALID = 1,
    UNAVAILABLE = 2,
    CANT_AUTHENTICATE = 3,
    NOT_CONNECTED = 4,
}

export namespace SessionAlertType {
    export const $gtype: GObject.GType<SessionAlertType>;
}

export enum SessionAlertType {
    INFO = 0,
    WARNING = 1,
    ERROR = 2,
}

export namespace SortType {
    export const $gtype: GObject.GType<SortType>;
}

export enum SortType {
    ASCENDING = 0,
    DESCENDING = 1,
}

export namespace StoreError {
    export const $gtype: GObject.GType<StoreError>;
}

export enum StoreError {
    INVALID = 0,
    NO_FOLDER = 1,
}

export namespace StreamBufferMode {
    export const $gtype: GObject.GType<StreamBufferMode>;
}

export enum StreamBufferMode {
    BUFFER = 0,
    NONE = 1,
    READ = 0,
    WRITE = 128,
    MODE = 128,
}

export namespace ThreeState {
    export const $gtype: GObject.GType<ThreeState>;
}

export enum ThreeState {
    OFF = 0,
    ON = 1,
    INCONSISTENT = 2,
}

export namespace TimeUnit {
    export const $gtype: GObject.GType<TimeUnit>;
}

export enum TimeUnit {
    DAYS = 1,
    WEEKS = 2,
    MONTHS = 3,
    YEARS = 4,
}

export namespace TransferEncoding {
    export const $gtype: GObject.GType<TransferEncoding>;
}

export enum TransferEncoding {
    ENCODING_DEFAULT = 0,
    ENCODING_7BIT = 1,
    ENCODING_8BIT = 2,
    ENCODING_BASE64 = 3,
    ENCODING_QUOTEDPRINTABLE = 4,
    ENCODING_BINARY = 5,
    ENCODING_UUENCODE = 6,
    NUM_ENCODINGS = 7,
}

export namespace VTrashFolderType {
    export const $gtype: GObject.GType<VTrashFolderType>;
}

export enum VTrashFolderType {
    TRASH = 0,
    JUNK = 1,
    LAST = 2,
}

export namespace _search_match_t {
    export const $gtype: GObject.GType<_search_match_t>;
}

export enum _search_match_t {
    EXACT = 0,
    CONTAINS = 1,
    WORD = 2,
    STARTS = 3,
    ENDS = 4,
    SOUNDEX = 5,
}

export namespace _search_t {
    export const $gtype: GObject.GType<_search_t>;
}

export enum _search_t {
    ASIS = 0,
    ENCODED = 1,
    ADDRESS = 2,
    ADDRESS_ENCODED = 3,
    MLIST = 4,
}

export namespace _search_word_t {
    export const $gtype: GObject.GType<_search_word_t>;
}

export enum _search_word_t {
    SIMPLE = 1,
    COMPLEX = 2,
    "8BIT" = 4,
}

export namespace BestencEncoding {
    export const $gtype: GObject.GType<BestencEncoding>;
}

export enum BestencEncoding {
    "7BIT" = 0,
    "8BIT" = 1,
    BINARY = 2,
    TEXT = 256,
}

export namespace BestencRequired {
    export const $gtype: GObject.GType<BestencRequired>;
}

export enum BestencRequired {
    GET_ENCODING = 1,
    GET_CHARSET = 2,
    LF_IS_CRLF = 256,
    NO_FROM = 512,
}

export namespace BlockFileFlags {
    export const $gtype: GObject.GType<BlockFileFlags>;
}

export enum BlockFileFlags {
    BLOCK_FILE_SYNC = 1,
}

export namespace BlockFlags {
    export const $gtype: GObject.GType<BlockFlags>;
}

export enum BlockFlags {
    DIRTY = 1,
    DETACHED = 2,
}

export namespace FolderFlags {
    export const $gtype: GObject.GType<FolderFlags>;
}

export enum FolderFlags {
    HAS_SUMMARY_CAPABILITY = 1,
    FILTER_RECENT = 4,
    HAS_BEEN_DELETED = 8,
    IS_TRASH = 16,
    IS_JUNK = 32,
    FILTER_JUNK = 64,
}

export namespace FolderInfoFlags {
    export const $gtype: GObject.GType<FolderInfoFlags>;
}

export enum FolderInfoFlags {
    NOSELECT = 1,
    NOINFERIORS = 2,
    CHILDREN = 4,
    NOCHILDREN = 8,
    SUBSCRIBED = 16,
    VIRTUAL = 32,
    SYSTEM = 64,
    VTRASH = 128,
    SHARED_TO_ME = 256,
    SHARED_BY_ME = 512,
    TYPE_NORMAL = 0,
    TYPE_INBOX = 1024,
    TYPE_OUTBOX = 2048,
    TYPE_TRASH = 3072,
    TYPE_JUNK = 4096,
    TYPE_SENT = 5120,
    TYPE_CONTACTS = 6144,
    TYPE_EVENTS = 7168,
    TYPE_MEMOS = 8192,
    TYPE_TASKS = 9216,
    TYPE_ALL = 10240,
    TYPE_ARCHIVE = 11264,
    TYPE_DRAFTS = 12288,
    READONLY = 65536,
    WRITEONLY = 131072,
    FLAGGED = 262144,
    FLAGS_LAST = 16777216,
}

export namespace FolderSummaryFlags {
    export const $gtype: GObject.GType<FolderSummaryFlags>;
}

export enum FolderSummaryFlags {
    DIRTY = 1,
    IN_MEMORY_ONLY = 2,
}

export namespace MessageFlags {
    export const $gtype: GObject.GType<MessageFlags>;
}

export enum MessageFlags {
    ANSWERED = 1,
    DELETED = 2,
    DRAFT = 4,
    FLAGGED = 8,
    SEEN = 16,
    ATTACHMENTS = 32,
    ANSWERED_ALL = 64,
    JUNK = 128,
    SECURE = 256,
    NOTJUNK = 512,
    FORWARDED = 1024,
    FOLDER_FLAGGED = 65536,
    JUNK_LEARN = 1073741824,
    USER = 2147483648,
}

export namespace MimeFilterToHTMLFlags {
    export const $gtype: GObject.GType<MimeFilterToHTMLFlags>;
}

export enum MimeFilterToHTMLFlags {
    PRE = 1,
    CONVERT_NL = 2,
    CONVERT_SPACES = 4,
    CONVERT_URLS = 8,
    MARK_CITATION = 16,
    CONVERT_ADDRESSES = 32,
    ESCAPE_8BIT = 64,
    CITE = 128,
    PRESERVE_8BIT = 256,
    FORMAT_FLOWED = 512,
    QUOTE_CITATION = 1024,
    DIV = 2048,
    PRESERVE_TABS = 4096,
}

export namespace ParamFlags {
    export const $gtype: GObject.GType<ParamFlags>;
}

export enum ParamFlags {
    PARAM_PERSISTENT = 256,
}

export namespace ProviderFlags {
    export const $gtype: GObject.GType<ProviderFlags>;
}

export enum ProviderFlags {
    IS_REMOTE = 1,
    IS_LOCAL = 2,
    IS_EXTERNAL = 4,
    IS_SOURCE = 8,
    IS_STORAGE = 16,
    SUPPORTS_SSL = 32,
    HAS_LICENSE = 64,
    DISABLE_SENT_FOLDER = 128,
    ALLOW_REAL_TRASH_FOLDER = 256,
    ALLOW_REAL_JUNK_FOLDER = 512,
    SUPPORTS_MOBILE_DEVICES = 1024,
    SUPPORTS_BATCH_FETCH = 2048,
    SUPPORTS_PURGE_MESSAGE_CACHE = 4096,
}

export namespace ProviderURLFlags {
    export const $gtype: GObject.GType<ProviderURLFlags>;
}

export enum ProviderURLFlags {
    ALLOW_USER = 1,
    ALLOW_AUTH = 2,
    ALLOW_PASSWORD = 4,
    ALLOW_HOST = 8,
    ALLOW_PORT = 16,
    ALLOW_PATH = 32,
    NEED_USER = 256,
    NEED_AUTH = 512,
    NEED_PASSWORD = 1024,
    NEED_HOST = 2048,
    NEED_PORT = 4096,
    NEED_PATH = 8192,
    NEED_PATH_DIR = 16384,
    HIDDEN_USER = 65536,
    HIDDEN_AUTH = 131072,
    HIDDEN_PASSWORD = 262144,
    HIDDEN_HOST = 524288,
    HIDDEN_PORT = 1048576,
    HIDDEN_PATH = 2097152,
    FRAGMENT_IS_PATH = 1073741824,
    PATH_IS_ABSOLUTE = 2147483648,
}

export namespace RecipientCertificateFlags {
    export const $gtype: GObject.GType<RecipientCertificateFlags>;
}

export enum RecipientCertificateFlags {
    SMIME = 1,
    PGP = 2,
}

export namespace SMIMEDescribe {
    export const $gtype: GObject.GType<SMIMEDescribe>;
}

export enum SMIMEDescribe {
    SIGNED = 1,
    ENCRYPTED = 2,
    CERTS = 4,
    CRLS = 8,
}

export namespace StoreFlags {
    export const $gtype: GObject.GType<StoreFlags>;
}

export enum StoreFlags {
    VTRASH = 1,
    VJUNK = 2,
    PROXY = 4,
    IS_MIGRATING = 8,
    REAL_JUNK_FOLDER = 16,
    CAN_EDIT_FOLDERS = 32,
    USE_CACHE_DIR = 64,
    CAN_DELETE_FOLDERS_AT_ONCE = 128,
    SUPPORTS_INITIAL_SETUP = 256,
}

export namespace StoreGetFolderFlags {
    export const $gtype: GObject.GType<StoreGetFolderFlags>;
}

export enum StoreGetFolderFlags {
    NONE = 0,
    CREATE = 1,
    EXCL = 2,
    BODY_INDEX = 4,
    PRIVATE = 8,
}

export namespace StoreGetFolderInfoFlags {
    export const $gtype: GObject.GType<StoreGetFolderInfoFlags>;
}

export enum StoreGetFolderInfoFlags {
    FAST = 1,
    RECURSIVE = 2,
    SUBSCRIBED = 4,
    NO_VIRTUAL = 8,
    SUBSCRIPTION_LIST = 16,
    REFRESH = 32,
}

export namespace StoreInfoFlags {
    export const $gtype: GObject.GType<StoreInfoFlags>;
}

export enum StoreInfoFlags {
    NOSELECT = 1,
    NOINFERIORS = 2,
    CHILDREN = 4,
    NOCHILDREN = 8,
    SUBSCRIBED = 16,
    VIRTUAL = 32,
    SYSTEM = 64,
    VTRASH = 128,
    SHARED_TO_ME = 256,
    SHARED_BY_ME = 512,
    TYPE_NORMAL = 0,
    TYPE_INBOX = 1024,
    TYPE_OUTBOX = 2048,
    TYPE_TRASH = 3072,
    TYPE_JUNK = 4096,
    TYPE_SENT = 5120,
    TYPE_CONTACTS = 6144,
    TYPE_EVENTS = 7168,
    TYPE_MEMOS = 8192,
    TYPE_TASKS = 9216,
    TYPE_ALL = 10240,
    TYPE_ARCHIVE = 11264,
    TYPE_DRAFTS = 12288,
    READONLY = 65536,
    WRITEONLY = 131072,
    FLAGGED = 262144,
}

export namespace StorePermissionFlags {
    export const $gtype: GObject.GType<StorePermissionFlags>;
}

export enum StorePermissionFlags {
    READ = 1,
    WRITE = 2,
}

export namespace URLFlags {
    export const $gtype: GObject.GType<URLFlags>;
}

export enum URLFlags {
    PARAMS = 1,
    AUTH = 2,
}

export namespace UUDecodeState {
    export const $gtype: GObject.GType<UUDecodeState>;
}

export enum UUDecodeState {
    INIT = 0,
    BEGIN = 65536,
    END = 131072,
}

export namespace _search_flags_t {
    export const $gtype: GObject.GType<_search_flags_t>;
}

export enum _search_flags_t {
    START = 1,
    END = 2,
    REGEX = 4,
    ICASE = 8,
    NEWLINE = 16,
}

export module Address {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Address extends GObject.Object {
    static $gtype: GObject.GType<Address>;

    constructor(properties?: Partial<Address.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Address.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: AddressPrivate;

    // Constructors

    static ["new"](): Address;

    // Members

    cat(source: Address): number;

    copy(source: Address): number;

    decode(raw: string): number;

    encode(): string;

    format(): string;

    length(): number;

    new_clone(): Address;

    remove(index: number): void;

    unformat(raw: string): number;

    vfunc_cat(source: Address): number;

    vfunc_decode(raw: string): number;

    vfunc_encode(): string;

    vfunc_format(): string;

    vfunc_length(): number;

    vfunc_remove(index: number): void;

    vfunc_unformat(raw: string): number;
}

export module BlockFile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BlockFile extends GObject.Object {
    static $gtype: GObject.GType<BlockFile>;

    constructor(properties?: Partial<BlockFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlockFile.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BlockFilePrivate;

    // Constructors

    static ["new"](path: string, flags: number, version: string, block_size: number): BlockFile;

    // Members

    attach_block(bl: Block): void;

    ["delete"](): number;

    detach_block(bl: Block): void;

    free_block(id: _block_t): number;

    get_cache_limit(): number;

    get_root(): BlockRoot;

    get_root_block(): Block;

    rename(path: string): number;

    set_cache_limit(block_cache_limit: number): void;

    sync(): number;

    sync_block(bl: Block): number;

    touch_block(bl: Block): void;

    unref_block(bl: Block): void;

    vfunc_init_root(): number;

    vfunc_validate_root(): number;
}

export module CertDB {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CertDB extends GObject.Object {
    static $gtype: GObject.GType<CertDB>;

    constructor(properties?: Partial<CertDB.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CertDB.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CertDBPrivate;

    // Constructors

    static ["new"](): CertDB;

    // Members

    clear(): void;

    get_host(hostname: string, fingerprint: string): Cert | null;

    list_certs(): Cert[];

    load(): number;

    put(cert: Cert): void;

    remove_host(hostname: string, fingerprint: string): void;

    save(): number;

    set_default(): void;

    set_filename(filename: string): void;

    touch(): void;

    vfunc_cert_load(istream?: any | null): Cert;

    vfunc_cert_save(cert: Cert, ostream?: any | null): number;

    vfunc_header_load(istream?: any | null): number;

    vfunc_header_save(ostream?: any | null): number;

    static get_default(): CertDB;
}

export module CipherContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        session: Session;
    }
}

export class CipherContext extends GObject.Object {
    static $gtype: GObject.GType<CipherContext>;

    constructor(properties?: Partial<CipherContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CipherContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    session: Session;

    // Fields
    priv: CipherContextPrivate;

    // Constructors

    static ["new"](session: Session): CipherContext;

    // Members

    decrypt(
        ipart: MimePart,
        opart: MimePart,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    decrypt_finish(result: Gio.AsyncResult): CipherValidity;

    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;

    encrypt(
        userid: string,
        recipients: string[],
        ipart: MimePart,
        opart: MimePart,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    encrypt_finish(result: Gio.AsyncResult): boolean;

    encrypt_sync(
        userid: string,
        recipients: string[],
        ipart: MimePart,
        opart: MimePart,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_session(): Session;

    hash_to_id(hash: CipherHash): string;

    id_to_hash(id: string): CipherHash;

    sign(
        userid: string,
        hash: CipherHash,
        ipart: MimePart,
        opart: MimePart,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    sign_finish(result: Gio.AsyncResult): boolean;

    sign_sync(
        userid: string,
        hash: CipherHash,
        ipart: MimePart,
        opart: MimePart,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    verify(
        ipart: MimePart,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    verify_finish(result: Gio.AsyncResult): CipherValidity;

    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;

    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;

    vfunc_encrypt_sync(
        userid: string,
        recipients: string[],
        ipart: MimePart,
        opart: MimePart,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_hash_to_id(hash: CipherHash): string;

    vfunc_id_to_hash(id: string): CipherHash;

    vfunc_sign_sync(
        userid: string,
        hash: CipherHash,
        ipart: MimePart,
        opart: MimePart,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;
}

export module DB {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DB extends GObject.Object {
    static $gtype: GObject.GType<DB>;

    constructor(properties?: Partial<DB.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DB.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](filename: string): DB;

    // Members

    abort_transaction(): number;

    add_to_transaction(query: string): number;

    begin_transaction(): number;

    clear_folder_summary(folder_name: string): number;

    command(stmt: string): number;

    count_deleted_message_info(table_name: string): [number, number];

    count_junk_message_info(table_name: string): [number, number];

    count_junk_not_deleted_message_info(table_name: string, count: number): number;

    count_message_info(query: string): [number, number];

    count_total_message_info(table_name: string): [number, number];

    count_unread_message_info(table_name: string): [number, number];

    count_visible_message_info(table_name: string): [number, number];

    count_visible_unread_message_info(table_name: string): [number, number];

    create_folders_table(): number;

    delete_folder(folder_name: string): number;

    delete_uid(folder_name: string, uid: string): number;

    delete_uids(folder_name: string, uids: string[]): number;

    end_transaction(): number;

    flush_in_memory_transactions(folder_name: string): number;

    get_filename(): string;

    get_folder_deleted_uids(folder_name: string): string[] | null;

    get_folder_junk_uids(folder_name: string): string[] | null;

    get_folder_uids(
        folder_name: string,
        sort_by: string | null,
        collate: string | null,
        hash: GLib.HashTable<string, number>
    ): number;

    maybe_run_maintenance(): boolean;

    prepare_message_info_table(folder_name: string): number;

    read_folder_info_record(folder_name: string): [number, FIRecord];

    read_message_info_record_with_uid(folder_name: string, uid: string, callback: DBSelectCB): number;

    read_message_info_records(folder_name: string, callback: DBSelectCB): number;

    rename_folder(old_folder_name: string, new_folder_name: string): number;

    reset_folder_version(folder_name: string, reset_version: number): number;

    select(stmt: string, callback: DBSelectCB): number;

    set_collate(col: string, collate: string, func: DBCollate): number;

    start_in_memory_transactions(): number;

    transaction_command(qry_list: string[]): number;

    write_folder_info_record(record: FIRecord): number;

    write_message_info_record(folder_name: string, record: MIRecord): number;

    static camel_mir_free(record?: MIRecord | null): void;

    static free_sqlized_string(string?: string | null): void;

    static get_column_ident(
        hash: GLib.HashTable<any, any>,
        index: number,
        col_names: string[]
    ): [DBKnownColumnNames, GLib.HashTable<any, any>];

    static get_column_name(raw_name: string): string | null;

    static release_cache_memory(): void;

    static sqlize_string(string: string): string;
}

export module DataCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        expire_enabled: boolean;
        expireEnabled: boolean;
        path: string;
    }
}

export class DataCache extends GObject.Object {
    static $gtype: GObject.GType<DataCache>;

    constructor(properties?: Partial<DataCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    expire_enabled: boolean;
    expireEnabled: boolean;
    path: string;

    // Fields
    priv: DataCachePrivate;

    // Constructors

    static ["new"](path: string): DataCache;

    // Members

    add(path: string, key: string): Gio.IOStream;

    clear(path: string): void;

    foreach_remove(path: string, func: DataCacheRemoveFunc): void;

    get(path: string, key: string): Gio.IOStream;

    get_expire_enabled(): boolean;

    get_filename(path: string, key: string): string;

    get_path(): string;

    remove(path: string, key: string): number;

    set_expire_access(when: number): void;

    set_expire_age(when: number): void;

    set_expire_enabled(expire_enabled: boolean): void;

    set_path(path: string): void;
}

export module DataWrapper {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DataWrapper extends GObject.Object {
    static $gtype: GObject.GType<DataWrapper>;

    constructor(properties?: Partial<DataWrapper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataWrapper.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DataWrapperPrivate;

    // Constructors

    static ["new"](): DataWrapper;

    // Members

    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number;

    calculate_size_sync(cancellable?: Gio.Cancellable | null): number;

    construct_from_input_stream(
        input_stream: Gio.InputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean;

    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;

    construct_from_stream(
        stream: Stream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    construct_from_stream_finish(result: Gio.AsyncResult): boolean;

    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean;

    decode_to_output_stream(
        output_stream: Gio.OutputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    decode_to_output_stream_finish(result: Gio.AsyncResult): number;

    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number;

    decode_to_stream(
        stream: Stream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    decode_to_stream_finish(result: Gio.AsyncResult): number;

    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;

    get_byte_array(): Uint8Array;

    get_encoding(): TransferEncoding;

    get_mime_type(): string;

    get_mime_type_field(): ContentType;

    is_offline(): boolean;

    set_encoding(encoding: TransferEncoding): void;

    set_mime_type(mime_type: string): void;

    set_mime_type_field(mime_type?: ContentType | null): void;

    set_offline(offline: boolean): void;

    take_mime_type_field(mime_type?: ContentType | null): void;

    write_to_output_stream(
        output_stream: Gio.OutputStream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_to_output_stream_finish(result: Gio.AsyncResult): number;

    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number;

    write_to_stream(
        stream: Stream,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_to_stream_finish(result: Gio.AsyncResult): number;

    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;

    vfunc_construct_from_input_stream_sync(
        input_stream: Gio.InputStream,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number;

    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;

    vfunc_get_mime_type(): string;

    vfunc_get_mime_type_field(): ContentType;

    vfunc_is_offline(): boolean;

    vfunc_set_mime_type(mime_type: string): void;

    vfunc_set_mime_type_field(mime_type?: ContentType | null): void;

    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number;

    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;
}

export module FilterDriver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterDriver extends GObject.Object {
    static $gtype: GObject.GType<FilterDriver>;

    constructor(properties?: Partial<FilterDriver.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterDriver.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FilterDriverPrivate;

    // Constructors

    static ["new"](session: Session): FilterDriver;

    // Members

    add_rule(name: string, match: string, action: string): void;

    filter_folder(
        folder: Folder,
        cache: UIDCache,
        uids: string[],
        remove: boolean,
        cancellable?: Gio.Cancellable | null
    ): number;

    filter_mbox(mbox: string, original_source_url?: string | null, cancellable?: Gio.Cancellable | null): number;

    filter_message(
        message: MimeMessage,
        info: MessageInfo,
        uid: string,
        source: Folder,
        store_uid: string,
        original_store_uid: string,
        cancellable?: Gio.Cancellable | null
    ): number;

    flush(): void;

    remove_rule_by_name(name: string): boolean;

    set_default_folder(def?: Folder | null): void;

    set_logfile(logfile?: any | null): void;

    set_play_sound_func(func: FilterPlaySoundFunc): void;

    set_shell_func(func: FilterShellFunc): void;

    set_status_func(func: FilterStatusFunc): void;

    set_system_beep_func(func: FilterSystemBeepFunc): void;
}

export module FilterInputStream {
    export interface ConstructorProperties extends Gio.FilterInputStream.ConstructorProperties {
        [key: string]: any;

        filter: MimeFilter;
    }
}

export class FilterInputStream extends Gio.FilterInputStream {
    static $gtype: GObject.GType<FilterInputStream>;

    constructor(properties?: Partial<FilterInputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter: MimeFilter;

    // Fields
    priv: FilterInputStreamPrivate;

    // Constructors

    static ["new"](base_stream: Gio.InputStream, filter: MimeFilter): FilterInputStream;

    // Members

    get_filter(): MimeFilter;
}

export module FilterOutputStream {
    export interface ConstructorProperties extends Gio.FilterOutputStream.ConstructorProperties {
        [key: string]: any;

        filter: MimeFilter;
    }
}

export class FilterOutputStream extends Gio.FilterOutputStream {
    static $gtype: GObject.GType<FilterOutputStream>;

    constructor(properties?: Partial<FilterOutputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter: MimeFilter;

    // Fields
    priv: FilterOutputStreamPrivate;

    // Constructors

    static ["new"](base_stream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream;

    // Members

    get_filter(): MimeFilter;
}

export module Folder {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        description: string;
        display_name: string;
        displayName: string;
        full_name: string;
        fullName: string;
        mark_seen: ThreeState;
        markSeen: ThreeState;
        mark_seen_timeout: number;
        markSeenTimeout: number;
        parent_store: Store;
        parentStore: Store;
    }
}

export abstract class Folder extends Object {
    static $gtype: GObject.GType<Folder>;

    constructor(properties?: Partial<Folder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Folder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    display_name: string;
    displayName: string;
    full_name: string;
    fullName: string;
    mark_seen: ThreeState;
    markSeen: ThreeState;
    mark_seen_timeout: number;
    markSeenTimeout: number;
    parent_store: Store;
    parentStore: Store;

    // Fields
    priv: FolderPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "changed", callback: (_source: this, changes: FolderChangeInfo) => void): number;

    connect_after(signal: "changed", callback: (_source: this, changes: FolderChangeInfo) => void): number;

    emit(signal: "changed", changes: FolderChangeInfo): void;

    connect(signal: "deleted", callback: (_source: this) => void): number;

    connect_after(signal: "deleted", callback: (_source: this) => void): number;

    emit(signal: "deleted"): void;

    connect(signal: "renamed", callback: (_source: this, old_name: string) => void): number;

    connect_after(signal: "renamed", callback: (_source: this, old_name: string) => void): number;

    emit(signal: "renamed", old_name: string): void;

    // Members

    append_message(
        message: MimeMessage,
        info: MessageInfo,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    append_message_finish(result: Gio.AsyncResult, appended_uid: string): boolean;

    append_message_sync(
        message: MimeMessage,
        info: MessageInfo,
        appended_uid: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    changed(changes: FolderChangeInfo): void;

    cmp_uids(uid1: string, uid2: string): number;

    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number;

    ["delete"](): void;

    dup_description(): string;

    dup_display_name(): string;

    dup_full_name(): string;

    expunge(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    expunge_finish(result: Gio.AsyncResult): boolean;

    expunge_sync(cancellable?: Gio.Cancellable | null): boolean;

    free_deep(array: string[]): void;

    free_shallow(array: string[]): void;

    free_summary(array: MessageInfo[]): void;

    free_uids(array: string[]): void;

    freeze(): void;

    get_deleted_message_count(): number;

    get_description(): string;

    get_display_name(): string;

    get_filename(uid: string): string;

    get_flags(): number;

    get_folder_summary(): FolderSummary;

    get_frozen_count(): number;

    get_full_name(): string;

    get_mark_seen(): ThreeState;

    get_mark_seen_timeout(): number;

    get_message(
        message_uid: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null;

    get_message_count(): number;

    get_message_finish(result: Gio.AsyncResult): MimeMessage;

    get_message_flags(uid: string): number;

    get_message_info(uid: string): MessageInfo;

    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage;

    get_message_user_flag(uid: string, name: string): boolean;

    get_message_user_tag(uid: string, name: string): string;

    get_parent_store(): any | null;

    get_permanent_flags(): number;

    get_quota_info(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo;

    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo;

    get_summary(): string[];

    get_uids(): string[];

    get_uncached_uids(uids: string[]): string[];

    get_unread_message_count(): number;

    has_summary_capability(): boolean;

    is_frozen(): boolean;

    lock(): void;

    prepare_content_refresh(): void;

    purge_message_cache(
        start_uid: string,
        end_uid: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    purge_message_cache_finish(result: Gio.AsyncResult): boolean;

    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean;

    refresh_info(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_info_finish(result: Gio.AsyncResult): boolean;

    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean;

    rename(new_name: string): void;

    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[];

    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[];

    search_free(result: string[]): void;

    set_description(description: string): void;

    set_display_name(display_name: string): void;

    set_flags(folder_flags: number): void;

    set_full_name(full_name: string): void;

    set_lock_async(skip_folder_lock: boolean): void;

    set_mark_seen(mark_seen: ThreeState): void;

    set_mark_seen_timeout(timeout: number): void;

    set_message_flags(uid: string, mask: number, set: number): boolean;

    set_message_user_flag(uid: string, name: string, value: boolean): void;

    set_message_user_tag(uid: string, name: string, value: string): void;

    sort_uids(uids: string[]): void;

    synchronize(
        expunge: boolean,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    synchronize_finish(result: Gio.AsyncResult): boolean;

    synchronize_message(
        message_uid: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    synchronize_message_finish(result: Gio.AsyncResult): boolean;

    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean;

    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;

    take_folder_summary(summary: FolderSummary): void;

    thaw(): void;

    transfer_messages_to(
        message_uids: string[],
        destination: Folder,
        delete_originals: boolean,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    transfer_messages_to_finish(result: Gio.AsyncResult): [boolean, string[]];

    transfer_messages_to_sync(
        message_uids: string[],
        destination: Folder,
        delete_originals: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[]];

    unlock(): void;

    vfunc_append_message_sync(
        message: MimeMessage,
        info: MessageInfo,
        appended_uid: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_changed(changes: FolderChangeInfo): void;

    vfunc_cmp_uids(uid1: string, uid2: string): number;

    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number;

    vfunc_delete_(): void;

    vfunc_deleted(): void;

    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_free_summary(array: MessageInfo[]): void;

    vfunc_free_uids(array: string[]): void;

    vfunc_freeze(): void;

    vfunc_get_filename(uid: string): string;

    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null;

    vfunc_get_message_count(): number;

    vfunc_get_message_flags(uid: string): number;

    vfunc_get_message_info(uid: string): MessageInfo;

    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage;

    vfunc_get_message_user_flag(uid: string, name: string): boolean;

    vfunc_get_message_user_tag(uid: string, name: string): string;

    vfunc_get_permanent_flags(): number;

    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo;

    vfunc_get_summary(): string[];

    vfunc_get_uids(): string[];

    vfunc_get_uncached_uids(uids: string[]): string[];

    vfunc_has_search_capability(): boolean;

    vfunc_is_frozen(): boolean;

    vfunc_prepare_content_refresh(): void;

    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_rename(new_name: string): void;

    vfunc_renamed(old_name: string): void;

    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[];

    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[];

    vfunc_search_free(result: string[]): void;

    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean;

    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void;

    vfunc_set_message_user_tag(uid: string, name: string, value: string): void;

    vfunc_sort_uids(uids: string[]): void;

    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_thaw(): void;

    vfunc_transfer_messages_to_sync(
        message_uids: string[],
        destination: Folder,
        delete_originals: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[]];

    static error_quark(): GLib.Quark;

    static threaded_messages_dump(c: FolderThreadNode): number;
}

export module FolderSearch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FolderSearch extends GObject.Object {
    static $gtype: GObject.GType<FolderSearch>;

    constructor(properties?: Partial<FolderSearch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FolderSearch.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FolderSearchPrivate;

    // Constructors

    static ["new"](): FolderSearch;

    // Members

    count(expr: string, cancellable?: Gio.Cancellable | null): number;

    free_result(result?: string[] | null): void;

    get_current_message_info(): MessageInfo | null;

    get_current_summary(): string[];

    get_folder(): Folder;

    get_only_cached_messages(): boolean;

    get_summary(): string[];

    get_summary_empty(): boolean;

    search(expr: string, uids: string[], cancellable?: Gio.Cancellable | null): string[];

    set_body_index(body_index?: Index | null): void;

    set_current_message_info(info?: MessageInfo | null): void;

    set_folder(folder: Folder): void;

    set_only_cached_messages(only_cached_messages: boolean): void;

    set_summary(summary: string[]): void;

    take_current_message_info(info?: MessageInfo | null): void;

    static util_add_months(t: number, months: number): number;

    static util_compare_date(datetime1: number, datetime2: number): number;

    static util_make_time(argc: number, argv: SExpResult): number;
}

export module FolderSummary {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        deleted_count: number;
        deletedCount: number;
        folder: Folder;
        junk_count: number;
        junkCount: number;
        junk_not_deleted_count: number;
        junkNotDeletedCount: number;
        saved_count: number;
        savedCount: number;
        unread_count: number;
        unreadCount: number;
        visible_count: number;
        visibleCount: number;
    }
}

export class FolderSummary extends GObject.Object {
    static $gtype: GObject.GType<FolderSummary>;

    constructor(properties?: Partial<FolderSummary.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FolderSummary.ConstructorProperties>, ...args: any[]): void;

    // Properties
    deleted_count: number;
    deletedCount: number;
    folder: Folder;
    junk_count: number;
    junkCount: number;
    junk_not_deleted_count: number;
    junkNotDeletedCount: number;
    saved_count: number;
    savedCount: number;
    unread_count: number;
    unreadCount: number;
    visible_count: number;
    visibleCount: number;

    // Fields
    priv: FolderSummaryPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "changed", callback: (_source: this) => void): number;

    connect_after(signal: "changed", callback: (_source: this) => void): number;

    emit(signal: "changed"): void;

    // Constructors

    static ["new"](folder: Folder): FolderSummary;

    // Members

    add(info: MessageInfo, force_keep_uid: boolean): void;

    check_uid(uid: string): boolean;

    clear(): boolean;

    count(): number;

    get(uid: string): MessageInfo | null;

    get_array(): string[];

    get_changed(): string[];

    get_deleted_count(): number;

    get_flags(): number;

    get_folder(): any | null;

    get_hash(): GLib.HashTable<string, number>;

    get_index(): Index;

    get_info_flags(uid: string): number;

    get_junk_count(): number;

    get_junk_not_deleted_count(): number;

    get_next_uid(): number;

    get_saved_count(): number;

    get_timestamp(): number;

    get_unread_count(): number;

    get_version(): number;

    get_visible_count(): number;

    header_load(store: any | null, folder_name: string): boolean;

    header_save(): boolean;

    info_new_from_headers(headers: NameValueArray): MessageInfo;

    info_new_from_message(message: MimeMessage): MessageInfo;

    info_new_from_parser(parser: MimeParser): MessageInfo;

    load(): boolean;

    lock(): void;

    next_uid(): number;

    next_uid_string(): string;

    peek_loaded(uid: string): MessageInfo | null;

    prepare_fetch_all(): void;

    remove(info: MessageInfo): boolean;

    remove_uid(uid: string): boolean;

    remove_uids(uids: string[]): boolean;

    replace_flags(info: MessageInfo): boolean;

    save(): boolean;

    set_flags(flags: number): void;

    set_index(index: Index): void;

    set_next_uid(uid: number): void;

    set_timestamp(timestamp: number): void;

    set_version(version: number): void;

    touch(): void;

    unlock(): void;

    vfunc_message_info_from_uid(uid: string): MessageInfo | null;

    vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo;

    vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo;

    vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo;

    vfunc_next_uid_string(): string;

    vfunc_prepare_fetch_all(): void;

    vfunc_summary_header_load(fir?: any | null): boolean;

    vfunc_summary_header_save(): any | null;

    static free_array(array: string[]): void;
}

export module GpgContext {
    export interface ConstructorProperties extends CipherContext.ConstructorProperties {
        [key: string]: any;

        always_trust: boolean;
        alwaysTrust: boolean;
        prefer_inline: boolean;
        preferInline: boolean;
    }
}

export class GpgContext extends CipherContext {
    static $gtype: GObject.GType<GpgContext>;

    constructor(properties?: Partial<GpgContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GpgContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    always_trust: boolean;
    alwaysTrust: boolean;
    prefer_inline: boolean;
    preferInline: boolean;

    // Fields
    priv: GpgContextPrivate | any;

    // Constructors

    static ["new"](session: Session): GpgContext;

    // Members

    get_always_trust(): boolean;

    get_prefer_inline(): boolean;

    set_always_trust(always_trust: boolean): void;

    set_prefer_inline(prefer_inline: boolean): void;
}

export module HTMLParser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HTMLParser extends GObject.Object {
    static $gtype: GObject.GType<HTMLParser>;

    constructor(properties?: Partial<HTMLParser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HTMLParser.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: HTMLParserPrivate;

    // Constructors

    static ["new"](): HTMLParser;

    // Members

    attr(name: string): string;

    attr_list(values?: string[] | null): [string[], string[] | null];

    left(lenp: number): string;

    set_data(start: string, len: number, last: number): void;
    set_data(...args: never[]): never;

    step(datap: string, lenp: number): HTMLParserState;

    tag(): string;
}

export module Index {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Index extends GObject.Object {
    static $gtype: GObject.GType<Index>;

    constructor(properties?: Partial<Index.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Index.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: IndexPrivate;
    path: string;
    version: number;
    flags: number;
    state: number;
    normalize: IndexNorm;
    normalize_data: any;

    // Members

    add_name(name: string): IndexName | null;

    compress(): number;

    construct(path: string, flags: number): void;

    ["delete"](): number;

    delete_name(name: string): void;

    find(word: string): IndexCursor | null;

    find_name(name: string): IndexCursor | null;

    has_name(name: string): number;

    rename(path: string): number;

    set_normalize(func: IndexNorm): void;

    sync(): number;

    words(): IndexCursor | null;

    write_name(idn: IndexName): number;

    vfunc_add_name(name: string): IndexName | null;

    vfunc_compress(): number;

    vfunc_delete_(): number;

    vfunc_delete_name(name: string): void;

    vfunc_find(word: string): IndexCursor | null;

    vfunc_find_name(name: string): IndexCursor | null;

    vfunc_has_name(name: string): number;

    vfunc_rename(path: string): number;

    vfunc_sync(): number;

    vfunc_words(): IndexCursor | null;

    vfunc_write_name(idn: IndexName): number;
}

export module IndexCursor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class IndexCursor extends GObject.Object {
    static $gtype: GObject.GType<IndexCursor>;

    constructor(properties?: Partial<IndexCursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IndexCursor.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: IndexCursorPrivate;
    index: Index;

    // Members

    next(): string;

    vfunc_next(): string;
}

export module IndexName {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class IndexName extends GObject.Object {
    static $gtype: GObject.GType<IndexName>;

    constructor(properties?: Partial<IndexName.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IndexName.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: IndexNamePrivate;
    index: Index;
    name: string;
    buffer: Uint8Array;
    words: GLib.HashTable<any, any>;

    // Members

    add_buffer(buffer: string, len: number): number;

    add_word(word: string): void;

    vfunc_add_buffer(buffer: string, len: number): number;

    vfunc_add_word(word: string): void;
}

export module InternetAddress {
    export interface ConstructorProperties extends Address.ConstructorProperties {
        [key: string]: any;
    }
}

export class InternetAddress extends Address {
    static $gtype: GObject.GType<InternetAddress>;

    constructor(properties?: Partial<InternetAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InternetAddress.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: InternetAddressPrivate | any;

    // Constructors

    static ["new"](): InternetAddress;

    // Members

    add(name: string, address: string): number;

    ensure_ascii_domains(): void;

    find_address(address: string): [number, string | null];

    find_name(name: string): [number, string | null];

    get(index: number): [boolean, string | null, string | null];

    static encode_address(len: number, name: string, addr: string): string;

    static format_address(name: string, addr: string): string;
}

export module KeyFile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class KeyFile extends GObject.Object {
    static $gtype: GObject.GType<KeyFile>;

    constructor(properties?: Partial<KeyFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KeyFile.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: KeyFilePrivate;

    // Constructors

    static ["new"](path: string, flags: number, version: string): KeyFile;

    // Members

    ["delete"](): number;

    read(start: _block_t, records?: _key_t[] | null): number;

    rename(path: string): number;

    write(parent: _block_t, records: _key_t[]): number;
}

export module KeyTable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class KeyTable extends GObject.Object {
    static $gtype: GObject.GType<KeyTable>;

    constructor(properties?: Partial<KeyTable.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KeyTable.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: KeyTablePrivate;

    // Constructors

    static ["new"](bs: BlockFile, root: _block_t): KeyTable;

    // Members

    add(key: string, data: _block_t, flags: number): _key_t;

    lookup(keyid: _key_t, key: string, flags: number): _block_t;

    next(next: _key_t, keyp: string, flagsp: number, datap: _block_t): _key_t;

    set_data(keyid: _key_t, data: _block_t): boolean;
    set_data(...args: never[]): never;

    set_flags(keyid: _key_t, flags: number, set: number): boolean;

    sync(): number;
}

export module LocalSettings {
    export interface ConstructorProperties extends StoreSettings.ConstructorProperties {
        [key: string]: any;

        filter_all: boolean;
        filterAll: boolean;
        filter_junk: boolean;
        filterJunk: boolean;
        path: string;
    }
}

export class LocalSettings extends StoreSettings {
    static $gtype: GObject.GType<LocalSettings>;

    constructor(properties?: Partial<LocalSettings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LocalSettings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter_all: boolean;
    filterAll: boolean;
    filter_junk: boolean;
    filterJunk: boolean;
    path: string;

    // Members

    dup_path(): string;

    get_filter_all(): boolean;

    get_filter_junk(): boolean;

    get_path(): string;

    set_filter_all(filter_all: boolean): void;

    set_filter_junk(filter_junk: boolean): void;

    set_path(path: string): void;
}

export module Medium {
    export interface ConstructorProperties extends DataWrapper.ConstructorProperties {
        [key: string]: any;

        content: DataWrapper;
    }
}

export abstract class Medium extends DataWrapper {
    static $gtype: GObject.GType<Medium>;

    constructor(properties?: Partial<Medium.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Medium.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content: DataWrapper;

    // Fields
    priv: MediumPrivate | any;

    // Members

    add_header(name: string, value: string): void;

    dup_headers(): NameValueArray;

    get_content(): DataWrapper | null;

    get_header(name: string): string | null;

    get_headers(): NameValueArray;

    remove_header(name: string): void;

    set_content(content: DataWrapper): void;

    set_header(name: string, value: string): void;

    vfunc_add_header(name: string, value: string): void;

    vfunc_dup_headers(): NameValueArray;

    vfunc_get_content(): DataWrapper | null;

    vfunc_get_header(name: string): string | null;

    vfunc_get_headers(): NameValueArray;

    vfunc_remove_header(name: string): void;

    vfunc_set_content(content: DataWrapper): void;

    vfunc_set_header(name: string, value: string): void;
}

export module MessageInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        abort_notifications: boolean;
        abortNotifications: boolean;
        cc: string;
        date_received: number;
        dateReceived: number;
        date_sent: number;
        dateSent: number;
        dirty: boolean;
        flags: number;
        folder_flagged: boolean;
        folderFlagged: boolean;
        folder_flagged_stamp: number;
        folderFlaggedStamp: number;
        from: string;
        headers: NameValueArray;
        message_id: number;
        messageId: number;
        mlist: string;
        references: any[];
        size: number;
        subject: string;
        summary: FolderSummary;
        to: string;
        uid: string;
        user_flags: NamedFlags;
        userFlags: NamedFlags;
        user_tags: NameValueArray;
        userTags: NameValueArray;
    }
}

export abstract class MessageInfo extends GObject.Object {
    static $gtype: GObject.GType<MessageInfo>;

    constructor(properties?: Partial<MessageInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessageInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    abort_notifications: boolean;
    abortNotifications: boolean;
    cc: string;
    date_received: number;
    dateReceived: number;
    date_sent: number;
    dateSent: number;
    dirty: boolean;
    flags: number;
    folder_flagged: boolean;
    folderFlagged: boolean;
    folder_flagged_stamp: number;
    folderFlaggedStamp: number;
    from: string;
    headers: NameValueArray;
    message_id: number;
    messageId: number;
    mlist: string;
    references: any[];
    size: number;
    subject: string;
    summary: FolderSummary;
    to: string;
    uid: string;
    user_flags: NamedFlags;
    userFlags: NamedFlags;
    user_tags: NameValueArray;
    userTags: NameValueArray;

    // Fields
    priv: MessageInfoPrivate;

    // Constructors

    static ["new"](summary?: FolderSummary | null): MessageInfo;

    static new_from_headers(summary: FolderSummary, headers: NameValueArray): MessageInfo;

    // Members

    clone(assign_summary?: FolderSummary | null): MessageInfo;

    dump(): void;

    dup_headers(): NameValueArray | null;

    dup_references(): number[] | null;

    dup_user_flags(): NamedFlags;

    dup_user_tag(name: string): string | null;

    dup_user_tags(): NameValueArray | null;

    freeze_notifications(): void;

    get_abort_notifications(): boolean;

    get_cc(): string;

    get_date_received(): number;

    get_date_sent(): number;

    get_dirty(): boolean;

    get_flags(): number;

    get_folder_flagged(): boolean;

    get_folder_flagged_stamp(): number;

    get_from(): string;

    get_headers(): NameValueArray | null;

    get_message_id(): number;

    get_mlist(): string;

    get_notifications_frozen(): boolean;

    get_references(): number[] | null;

    get_size(): number;

    get_subject(): string;

    get_to(): string;

    get_uid(): string;

    get_user_flag(name: string): boolean;

    get_user_flags(): NamedFlags | null;

    get_user_tag(name: string): string | null;

    get_user_tags(): NameValueArray | null;

    load(record: MIRecord, bdata_ptr: string): boolean;

    pooldup_uid(): string;

    property_lock(): void;

    property_unlock(): void;

    ref_summary(): any | null;

    save(record: MIRecord, bdata_str: GLib.String): boolean;

    set_abort_notifications(abort_notifications: boolean): void;

    set_cc(cc?: string | null): boolean;

    set_date_received(date_received: number): boolean;

    set_date_sent(date_sent: number): boolean;

    set_dirty(dirty: boolean): void;

    set_flags(mask: number, set: number): boolean;

    set_folder_flagged(folder_flagged: boolean): boolean;

    set_from(from?: string | null): boolean;

    set_message_id(message_id: number): boolean;

    set_mlist(mlist?: string | null): boolean;

    set_size(size: number): boolean;

    set_subject(subject?: string | null): boolean;

    set_to(to?: string | null): boolean;

    set_uid(uid: string): boolean;

    set_user_flag(name: string, state: boolean): boolean;

    set_user_tag(name: string, value?: string | null): boolean;

    take_headers(headers?: NameValueArray | null): boolean;

    take_references(references?: number[] | null): boolean;

    take_user_flags(user_flags?: NamedFlags | null): boolean;

    take_user_tags(user_tags?: NameValueArray | null): boolean;

    thaw_notifications(): void;

    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo;

    vfunc_dup_user_flags(): NamedFlags;

    vfunc_dup_user_tags(): NameValueArray | null;

    vfunc_get_cc(): string;

    vfunc_get_date_received(): number;

    vfunc_get_date_sent(): number;

    vfunc_get_flags(): number;

    vfunc_get_from(): string;

    vfunc_get_headers(): NameValueArray | null;

    vfunc_get_message_id(): number;

    vfunc_get_mlist(): string;

    vfunc_get_references(): number[] | null;

    vfunc_get_size(): number;

    vfunc_get_subject(): string;

    vfunc_get_to(): string;

    vfunc_get_user_flag(name: string): boolean;

    vfunc_get_user_flags(): NamedFlags | null;

    vfunc_get_user_tag(name: string): string | null;

    vfunc_get_user_tags(): NameValueArray | null;

    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean;

    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean;

    vfunc_set_cc(cc?: string | null): boolean;

    vfunc_set_date_received(date_received: number): boolean;

    vfunc_set_date_sent(date_sent: number): boolean;

    vfunc_set_flags(mask: number, set: number): boolean;

    vfunc_set_from(from?: string | null): boolean;

    vfunc_set_message_id(message_id: number): boolean;

    vfunc_set_mlist(mlist?: string | null): boolean;

    vfunc_set_size(size: number): boolean;

    vfunc_set_subject(subject?: string | null): boolean;

    vfunc_set_to(to?: string | null): boolean;

    vfunc_set_user_flag(name: string, state: boolean): boolean;

    vfunc_set_user_tag(name: string, value?: string | null): boolean;

    vfunc_take_headers(headers?: NameValueArray | null): boolean;

    vfunc_take_references(references?: number[] | null): boolean;

    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean;

    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean;
}

export module MessageInfoBase {
    export interface ConstructorProperties extends MessageInfo.ConstructorProperties {
        [key: string]: any;
    }
}

export class MessageInfoBase extends MessageInfo {
    static $gtype: GObject.GType<MessageInfoBase>;

    constructor(properties?: Partial<MessageInfoBase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessageInfoBase.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MessageInfoBasePrivate | any;
}

export module MimeFilter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class MimeFilter extends GObject.Object {
    static $gtype: GObject.GType<MimeFilter>;

    constructor(properties?: Partial<MimeFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterPrivate;
    outreal: string;
    outbuf: string;
    outptr: string;
    outsize: number;
    outpre: number;
    backbuf: string;
    backsize: number;
    backlen: number;

    // Constructors

    static ["new"](): MimeFilter;

    // Members

    backup(data: string[]): void;

    complete(_in: string[], prespace: number): [string[], number];

    filter(_in: string[], prespace: number): [string[], number];

    reset(): void;

    set_size(size: number, keep: number): void;

    vfunc_complete(_in: string[], prespace: number): [string[], number];

    vfunc_filter(_in: string[], prespace: number): [string[], number];

    vfunc_reset(): void;
}

export module MimeFilterBasic {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterBasic extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterBasic>;

    constructor(properties?: Partial<MimeFilterBasic.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterBasic.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterBasicPrivate | any;

    // Constructors

    static ["new"](type: MimeFilterBasicType): MimeFilterBasic;
    static ["new"](...args: never[]): never;
}

export module MimeFilterBestenc {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterBestenc extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterBestenc>;

    constructor(properties?: Partial<MimeFilterBestenc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterBestenc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterBestencPrivate | any;

    // Constructors

    static ["new"](flags: number): MimeFilterBestenc;
    static ["new"](...args: never[]): never;

    // Members

    get_best_charset(): string;

    get_best_encoding(required: BestencEncoding): TransferEncoding;

    set_flags(flags: number): void;
}

export module MimeFilterCRLF {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterCRLF extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterCRLF>;

    constructor(properties?: Partial<MimeFilterCRLF.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterCRLF.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterCRLFPrivate | any;

    // Constructors

    static ["new"](direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode): MimeFilterCRLF;
    static ["new"](...args: never[]): never;
}

export module MimeFilterCanon {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterCanon extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterCanon>;

    constructor(properties?: Partial<MimeFilterCanon.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterCanon.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterCanonPrivate | any;

    // Constructors

    static ["new"](flags: number): MimeFilterCanon;
    static ["new"](...args: never[]): never;
}

export module MimeFilterCharset {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterCharset extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterCharset>;

    constructor(properties?: Partial<MimeFilterCharset.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterCharset.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterCharsetPrivate | any;

    // Constructors

    static ["new"](from_charset: string, to_charset: string): MimeFilterCharset;
    static ["new"](...args: never[]): never;
}

export module MimeFilterEnriched {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterEnriched extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterEnriched>;

    constructor(properties?: Partial<MimeFilterEnriched.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterEnriched.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterEnrichedPrivate | any;

    // Constructors

    static ["new"](flags: number): MimeFilterEnriched;
    static ["new"](...args: never[]): never;
}

export module MimeFilterFrom {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterFrom extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterFrom>;

    constructor(properties?: Partial<MimeFilterFrom.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterFrom.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterFromPrivate | any;

    // Constructors

    static ["new"](): MimeFilterFrom;
}

export module MimeFilterGZip {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterGZip extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterGZip>;

    constructor(properties?: Partial<MimeFilterGZip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterGZip.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterGZipPrivate | any;

    // Constructors

    static ["new"](mode: MimeFilterGZipMode, level: number): MimeFilterGZip;
    static ["new"](...args: never[]): never;
}

export module MimeFilterHTML {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterHTML extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterHTML>;

    constructor(properties?: Partial<MimeFilterHTML.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterHTML.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterHTMLPrivate | any;

    // Constructors

    static ["new"](): MimeFilterHTML;
}

export module MimeFilterIndex {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterIndex extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterIndex>;

    constructor(properties?: Partial<MimeFilterIndex.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterIndex.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterIndexPrivate | any;

    // Constructors

    static ["new"](index: Index): MimeFilterIndex;
    static ["new"](...args: never[]): never;

    // Members

    set_index(index: Index): void;

    set_name(name: IndexName): void;
}

export module MimeFilterLinewrap {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterLinewrap extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterLinewrap>;

    constructor(properties?: Partial<MimeFilterLinewrap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterLinewrap.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterLinewrapPrivate | any;

    // Constructors

    static ["new"](preferred_len: number, max_len: number, indent_char: number, flags: number): MimeFilterLinewrap;
    static ["new"](...args: never[]): never;
}

export module MimeFilterPgp {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterPgp extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterPgp>;

    constructor(properties?: Partial<MimeFilterPgp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterPgp.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterPgpPrivate | any;

    // Constructors

    static ["new"](): MimeFilterPgp;
}

export module MimeFilterProgress {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterProgress extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterProgress>;

    constructor(properties?: Partial<MimeFilterProgress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterProgress.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](cancellable: Gio.Cancellable | null, total: number): MimeFilterProgress;
    static ["new"](...args: never[]): never;
}

export module MimeFilterToHTML {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterToHTML extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterToHTML>;

    constructor(properties?: Partial<MimeFilterToHTML.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterToHTML.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterToHTMLPrivate | any;

    // Constructors

    static ["new"](flags: MimeFilterToHTMLFlags, color: number): MimeFilterToHTML;
    static ["new"](...args: never[]): never;
}

export module MimeFilterWindows {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterWindows extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterWindows>;

    constructor(properties?: Partial<MimeFilterWindows.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterWindows.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterWindowsPrivate | any;

    // Constructors

    static ["new"](claimed_charset: string): MimeFilterWindows;
    static ["new"](...args: never[]): never;

    // Members

    is_windows_charset(): boolean;

    real_charset(): string;
}

export module MimeFilterYenc {
    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeFilterYenc extends MimeFilter {
    static $gtype: GObject.GType<MimeFilterYenc>;

    constructor(properties?: Partial<MimeFilterYenc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeFilterYenc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeFilterYencPrivate | any;

    // Constructors

    static ["new"](direction: MimeFilterYencDirection): MimeFilterYenc;
    static ["new"](...args: never[]): never;

    // Members

    get_crc(): number;

    get_pcrc(): number;

    set_crc(crc: number): void;

    set_state(state: number): void;
}

export module MimeMessage {
    export interface ConstructorProperties extends MimePart.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeMessage extends MimePart {
    static $gtype: GObject.GType<MimeMessage>;

    constructor(properties?: Partial<MimeMessage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeMessage.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeMessagePrivate | any;

    // Constructors

    static ["new"](): MimeMessage;

    // Members

    build_mbox_from(): string;

    dump(body: number): void;

    encode_8bit_parts(): void;

    foreach_part(): void;

    get_date(): [number, number];

    get_date_received(): [number, number];

    get_from(): InternetAddress | null;

    get_message_id(): string | null;

    get_part_by_content_id(content_id: string): MimePart | null;

    get_recipients(type: string): InternetAddress | null;

    get_reply_to(): InternetAddress | null;

    get_source(): string | null;

    get_subject(): string | null;

    has_8bit_parts(): boolean;

    has_attachment(): boolean;

    set_best_encoding(required: BestencRequired, enctype: BestencEncoding): void;

    set_date(date: number, offset: number): void;

    set_from(from?: InternetAddress | null): void;

    set_message_id(message_id?: string | null): void;

    set_recipients(type: string, recipients?: InternetAddress | null): void;

    set_reply_to(reply_to?: InternetAddress | null): void;

    set_source(source_uid?: string | null): void;

    set_subject(subject?: string | null): void;
}

export module MimeParser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MimeParser extends GObject.Object {
    static $gtype: GObject.GType<MimeParser>;

    constructor(properties?: Partial<MimeParser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimeParser.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MimeParserPrivate;

    // Constructors

    static ["new"](): MimeParser;

    // Members

    content_type(): ContentType;

    drop_step(): void;

    dup_headers(): NameValueArray;

    errno(): number;

    filter_add(mf: MimeFilter): number;

    filter_remove(id: number): void;

    from_line(): string;

    header(name: string, offset: number): string;

    init_with_bytes(bytes: GLib.Bytes | Uint8Array): void;

    init_with_fd(fd: number): number;

    init_with_input_stream(input_stream: Gio.InputStream): void;

    init_with_stream(stream: Stream): number;

    postface(): string;

    preface(): string;

    push_state(newstate: MimeParserState, boundary: string): void;

    read(len: number): [number, Uint8Array];

    scan_from(scan_from: boolean): void;

    scan_pre_from(scan_pre_from: boolean): void;

    seek(offset: number, whence: number): number;

    set_header_regex(matchstr: string): number;

    state(): MimeParserState;

    step(databuffer?: string[] | null): [MimeParserState, string[] | null];

    stream(): Stream | null;

    tell(): number;

    tell_start_boundary(): number;

    tell_start_from(): number;

    tell_start_headers(): number;

    unstep(): void;

    vfunc_content(): void;

    vfunc_message(headers?: any | null): void;

    vfunc_part(): void;
}

export module MimePart {
    export interface ConstructorProperties extends Medium.ConstructorProperties {
        [key: string]: any;

        content_id: string;
        contentId: string;
        content_md5: string;
        contentMd5: string;
        description: string;
        disposition: string;
    }
}

export class MimePart extends Medium {
    static $gtype: GObject.GType<MimePart>;

    constructor(properties?: Partial<MimePart.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MimePart.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content_id: string;
    contentId: string;
    content_md5: string;
    contentMd5: string;
    description: string;
    disposition: string;

    // Fields
    priv: MimePartPrivate | any;

    // Constructors

    static ["new"](): MimePart;

    // Members

    construct_content_from_parser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean;

    construct_from_parser(
        parser: MimeParser,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    construct_from_parser_finish(result: Gio.AsyncResult): boolean;

    construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean;

    get_content_disposition(): ContentDisposition;

    get_content_id(): string;

    get_content_languages(): string[];

    get_content_location(): string;

    get_content_md5(): string;

    get_content_type(): ContentType;

    get_description(): string;

    get_disposition(): string;

    get_encoding(): TransferEncoding;

    get_filename(): string;

    set_content(data?: string[] | null, type?: string | null): void;
    set_content(...args: never[]): never;

    set_content_id(contentid: string): void;

    set_content_languages(content_languages: string[]): void;

    set_content_location(location: string): void;

    set_content_md5(md5sum: string): void;

    set_content_type(content_type: string): void;

    set_description(description: string): void;

    set_disposition(disposition: string): void;

    set_encoding(encoding: TransferEncoding): void;

    set_filename(filename: string): void;

    vfunc_construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean;
}

export module Multipart {
    export interface ConstructorProperties extends DataWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class Multipart extends DataWrapper {
    static $gtype: GObject.GType<Multipart>;

    constructor(properties?: Partial<Multipart.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Multipart.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MultipartPrivate | any;

    // Constructors

    static ["new"](): Multipart;

    // Members

    add_part(part: MimePart): void;

    construct_from_parser(parser: MimeParser): number;

    get_boundary(): string;

    get_number(): number;

    get_part(index: number): MimePart;

    get_postface(): string;

    get_preface(): string;

    set_boundary(boundary?: string | null): void;

    set_postface(postface: string): void;

    set_preface(preface: string): void;

    vfunc_add_part(part: MimePart): void;

    vfunc_construct_from_parser(parser: MimeParser): number;

    vfunc_get_boundary(): string;

    vfunc_get_number(): number;

    vfunc_get_part(index: number): MimePart;

    vfunc_set_boundary(boundary?: string | null): void;
}

export module MultipartEncrypted {
    export interface ConstructorProperties extends Multipart.ConstructorProperties {
        [key: string]: any;
    }
}

export class MultipartEncrypted extends Multipart {
    static $gtype: GObject.GType<MultipartEncrypted>;

    constructor(properties?: Partial<MultipartEncrypted.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MultipartEncrypted.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MultipartEncryptedPrivate | any;

    // Constructors

    static ["new"](): MultipartEncrypted;
}

export module MultipartSigned {
    export interface ConstructorProperties extends Multipart.ConstructorProperties {
        [key: string]: any;
    }
}

export class MultipartSigned extends Multipart {
    static $gtype: GObject.GType<MultipartSigned>;

    constructor(properties?: Partial<MultipartSigned.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MultipartSigned.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MultipartSignedPrivate | any;

    // Constructors

    static ["new"](): MultipartSigned;

    // Members

    get_content_stream(): Stream;

    set_content_stream(content_stream: Stream): void;

    set_signature(signature: MimePart): void;
}

export module NNTPAddress {
    export interface ConstructorProperties extends Address.ConstructorProperties {
        [key: string]: any;
    }
}

export class NNTPAddress extends Address {
    static $gtype: GObject.GType<NNTPAddress>;

    constructor(properties?: Partial<NNTPAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NNTPAddress.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NNTPAddressPrivate | any;

    // Constructors

    static ["new"](): NNTPAddress;

    // Members

    add(name: string): number;

    get(index: number, namep: string): boolean;
}

export module NullOutputStream {
    export interface ConstructorProperties extends Gio.OutputStream.ConstructorProperties {
        [key: string]: any;
    }
}

export class NullOutputStream extends Gio.OutputStream {
    static $gtype: GObject.GType<NullOutputStream>;

    constructor(properties?: Partial<NullOutputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NullOutputStream.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NullOutputStreamPrivate;

    // Constructors

    static ["new"](): NullOutputStream;

    // Members

    get_bytes_written(): number;

    get_ends_with_crlf(): boolean;
}

export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        state_filename: string;
        stateFilename: string;
    }
}

export abstract class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    state_filename: string;
    stateFilename: string;

    // Fields
    priv: ObjectPrivate;

    // Members

    get_state_filename(): string;

    set_state_filename(state_filename: string): void;

    state_read(): number;

    state_write(): number;

    vfunc_state_read(fp?: any | null): number;

    vfunc_state_write(fp?: any | null): number;
}

export module OfflineFolder {
    export interface ConstructorProperties extends Folder.ConstructorProperties {
        [key: string]: any;

        offline_sync: ThreeState;
        offlineSync: ThreeState;
    }
}

export class OfflineFolder extends Folder {
    static $gtype: GObject.GType<OfflineFolder>;

    constructor(properties?: Partial<OfflineFolder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OfflineFolder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    offline_sync: ThreeState;
    offlineSync: ThreeState;

    // Fields
    priv: OfflineFolderPrivate | any;

    // Members

    can_downsync(): boolean;

    downsync(
        expression: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    downsync_finish(result: Gio.AsyncResult): boolean;

    downsync_sync(expression: string, cancellable?: Gio.Cancellable | null): boolean;

    get_offline_sync(): ThreeState;

    set_offline_sync(offline_sync: ThreeState): void;

    vfunc_downsync_sync(expression: string, cancellable?: Gio.Cancellable | null): boolean;
}

export module OfflineSettings {
    export interface ConstructorProperties extends StoreSettings.ConstructorProperties {
        [key: string]: any;

        limit_by_age: boolean;
        limitByAge: boolean;
        limit_unit: TimeUnit;
        limitUnit: TimeUnit;
        limit_value: number;
        limitValue: number;
        stay_synchronized: boolean;
        staySynchronized: boolean;
    }
}

export class OfflineSettings extends StoreSettings {
    static $gtype: GObject.GType<OfflineSettings>;

    constructor(properties?: Partial<OfflineSettings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OfflineSettings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    limit_by_age: boolean;
    limitByAge: boolean;
    limit_unit: TimeUnit;
    limitUnit: TimeUnit;
    limit_value: number;
    limitValue: number;
    stay_synchronized: boolean;
    staySynchronized: boolean;

    // Members

    get_limit_by_age(): boolean;

    get_limit_unit(): TimeUnit;

    get_limit_value(): number;

    get_stay_synchronized(): boolean;

    get_store_changes_interval(): number;

    set_limit_by_age(limit_by_age: boolean): void;

    set_limit_unit(limit_unit: TimeUnit): void;

    set_limit_value(limit_value: boolean): void;

    set_stay_synchronized(stay_synchronized: boolean): void;

    set_store_changes_interval(interval: number): void;
}

export module OfflineStore {
    export interface ConstructorProperties extends Store.ConstructorProperties {
        [key: string]: any;

        online: boolean;
    }
}

export class OfflineStore extends Store implements Gio.Initable {
    static $gtype: GObject.GType<OfflineStore>;

    constructor(properties?: Partial<OfflineStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OfflineStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    online: boolean;

    // Fields
    priv: OfflineStorePrivate | any;

    // Members

    dup_downsync_folders(): Folder[];

    get_online(): boolean;

    prepare_for_offline_sync(cancellable?: Gio.Cancellable | null): boolean;

    requires_downsync(): boolean;

    set_online(
        online: boolean,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_online_finish(result: Gio.AsyncResult): boolean;

    set_online_sync(online: boolean, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_dup_downsync_folders(): Folder[];

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module Operation {
    export interface ConstructorProperties extends Gio.Cancellable.ConstructorProperties {
        [key: string]: any;
    }
}

export class Operation extends Gio.Cancellable {
    static $gtype: GObject.GType<Operation>;

    constructor(properties?: Partial<Operation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Operation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: OperationPrivate;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: "pop-message", callback: (_source: this) => void): number;

    emit(signal: "pop-message"): void;

    connect_after(signal: "progress", callback: (_source: this, object: number) => void): number;

    emit(signal: "progress", object: number): void;

    connect_after(signal: "push-message", callback: (_source: this, object: string) => void): number;

    emit(signal: "push-message", object: string): void;

    connect_after(signal: "status", callback: (_source: this, object: string, p0: number) => void): number;

    emit(signal: "status", object: string, p0: number): void;

    // Constructors

    static ["new"](): Operation;

    static new_proxy(cancellable?: Gio.Cancellable | null): Operation;

    // Members

    vfunc_status(what: string, pc: number): void;

    static cancel_all(): void;

    static pop_message(cancellable?: Gio.Cancellable | null): void;

    static progress(cancellable: Gio.Cancellable | null, percent: number): void;
}

export module PartitionTable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PartitionTable extends GObject.Object {
    static $gtype: GObject.GType<PartitionTable>;

    constructor(properties?: Partial<PartitionTable.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PartitionTable.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PartitionTablePrivate;

    // Constructors

    static ["new"](bs: BlockFile, root: _block_t): PartitionTable;

    // Members

    add(key: string, keyid: _key_t): number;

    lookup(key: string): _key_t;

    remove(key: string): boolean;

    sync(): number;
}

export module SExp {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SExp extends GObject.Object {
    static $gtype: GObject.GType<SExp>;

    constructor(properties?: Partial<SExp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SExp.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SExp;

    // Members

    add_variable(scope: number, name: string, value: SExpTerm): void;

    error(): string | null;

    evaluate_occur_times(start: number, end: number): boolean;

    input_file(fd: number): void;

    input_text(text: string, len: number): void;

    parse(): number;

    remove_symbol(scope: number, name: string): void;

    result_free(result?: SExpResult | null): void;

    resultv_free(argv: SExpResult[]): void;

    set_scope(scope: number): number;

    static encode_bool(string: GLib.String, v_bool: boolean): void;

    static encode_string(string: GLib.String, v_string: string): void;

    static to_sql_sexp(sexp: string): string;
}

export module SMIMEContext {
    export interface ConstructorProperties extends CipherContext.ConstructorProperties {
        [key: string]: any;
    }
}

export class SMIMEContext extends CipherContext {
    static $gtype: GObject.GType<SMIMEContext>;

    constructor(properties?: Partial<SMIMEContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SMIMEContext.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SMIMEContextPrivate | any;

    // Constructors

    static ["new"](session: Session): SMIMEContext;

    // Members

    describe_part(part?: any | null): number;

    set_encrypt_key(use: boolean, key: string): void;

    set_sign_mode(type: SMIMESign): void;
}

export module Sasl {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        authenticated: boolean;
        mechanism: string;
        service: Service;
        service_name: string;
        serviceName: string;
    }
}

export abstract class Sasl extends GObject.Object {
    static $gtype: GObject.GType<Sasl>;

    constructor(properties?: Partial<Sasl.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Sasl.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authenticated: boolean;
    mechanism: string;
    service: Service;
    service_name: string;
    serviceName: string;

    // Fields
    priv: SaslPrivate;

    // Constructors

    static ["new"](service_name: string, mechanism: string, service: Service): Sasl;

    // Members

    challenge(
        token: Uint8Array | string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    challenge_base64(
        token: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    challenge_base64_finish(result: Gio.AsyncResult): string;

    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string;

    challenge_finish(result: Gio.AsyncResult): Uint8Array;

    challenge_sync(token: Uint8Array | string, cancellable?: Gio.Cancellable | null): Uint8Array;

    get_authenticated(): boolean;

    get_mechanism(): string;

    get_service(): Service;

    get_service_name(): string;

    set_authenticated(authenticated: boolean): void;

    try_empty_password(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    try_empty_password_finish(result: Gio.AsyncResult): boolean;

    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_challenge_sync(token: Uint8Array | string, cancellable?: Gio.Cancellable | null): Uint8Array;

    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean;

    static authtype(mechanism: string): ServiceAuthType;

    static authtype_list(include_plain: boolean): ServiceAuthType[];

    static is_xoauth2_alias(mechanism?: string | null): boolean;
}

export module SaslAnonymous {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslAnonymous extends Sasl {
    static $gtype: GObject.GType<SaslAnonymous>;

    constructor(properties?: Partial<SaslAnonymous.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslAnonymous.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslAnonymousPrivate | any;

    // Constructors

    static ["new"](type: SaslAnonTraceType, trace_info: string): SaslAnonymous;
    static ["new"](...args: never[]): never;
}

export module SaslCramMd5 {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslCramMd5 extends Sasl {
    static $gtype: GObject.GType<SaslCramMd5>;

    constructor(properties?: Partial<SaslCramMd5.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslCramMd5.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslCramMd5Private | any;
}

export module SaslDigestMd5 {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslDigestMd5 extends Sasl {
    static $gtype: GObject.GType<SaslDigestMd5>;

    constructor(properties?: Partial<SaslDigestMd5.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslDigestMd5.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslDigestMd5Private | any;
}

export module SaslGssapi {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslGssapi extends Sasl {
    static $gtype: GObject.GType<SaslGssapi>;

    constructor(properties?: Partial<SaslGssapi.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslGssapi.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslGssapiPrivate | any;

    // Members

    override_host_and_user(override_host?: string | null, override_user?: string | null): void;

    static is_available(): boolean;
}

export module SaslLogin {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslLogin extends Sasl {
    static $gtype: GObject.GType<SaslLogin>;

    constructor(properties?: Partial<SaslLogin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslLogin.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslLoginPrivate | any;
}

export module SaslNTLM {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslNTLM extends Sasl {
    static $gtype: GObject.GType<SaslNTLM>;

    constructor(properties?: Partial<SaslNTLM.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslNTLM.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslNTLMPrivate | any;
}

export module SaslPOPB4SMTP {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslPOPB4SMTP extends Sasl {
    static $gtype: GObject.GType<SaslPOPB4SMTP>;

    constructor(properties?: Partial<SaslPOPB4SMTP.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslPOPB4SMTP.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslPOPB4SMTPPrivate | any;
}

export module SaslPlain {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslPlain extends Sasl {
    static $gtype: GObject.GType<SaslPlain>;

    constructor(properties?: Partial<SaslPlain.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslPlain.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslPlainPrivate | any;
}

export module SaslXOAuth2 {
    export interface ConstructorProperties extends Sasl.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslXOAuth2 extends Sasl {
    static $gtype: GObject.GType<SaslXOAuth2>;

    constructor(properties?: Partial<SaslXOAuth2.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslXOAuth2.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslXOAuth2Private | any;
}

export module SaslXOAuth2Google {
    export interface ConstructorProperties extends SaslXOAuth2.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslXOAuth2Google extends SaslXOAuth2 {
    static $gtype: GObject.GType<SaslXOAuth2Google>;

    constructor(properties?: Partial<SaslXOAuth2Google.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslXOAuth2Google.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslXOAuth2GooglePrivate | any;
}

export module SaslXOAuth2Outlook {
    export interface ConstructorProperties extends SaslXOAuth2.ConstructorProperties {
        [key: string]: any;
    }
}

export class SaslXOAuth2Outlook extends SaslXOAuth2 {
    static $gtype: GObject.GType<SaslXOAuth2Outlook>;

    constructor(properties?: Partial<SaslXOAuth2Outlook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SaslXOAuth2Outlook.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SaslXOAuth2OutlookPrivate | any;
}

export module Service {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        connection_status: ServiceConnectionStatus;
        connectionStatus: ServiceConnectionStatus;
        display_name: string;
        displayName: string;
        password: string;
        provider: Provider;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        session: Session;
        settings: Settings;
        uid: string;
    }
}

export abstract class Service extends Object implements Gio.Initable {
    static $gtype: GObject.GType<Service>;

    constructor(properties?: Partial<Service.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Service.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection_status: ServiceConnectionStatus;
    connectionStatus: ServiceConnectionStatus;
    display_name: string;
    displayName: string;
    password: string;
    provider: Provider;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    session: Session;
    settings: Settings;
    uid: string;

    // Fields
    priv: ServicePrivate | any;

    // Members

    authenticate(
        mechanism: string | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult;

    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult;

    connect(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    connect(...args: never[]): never;

    connect_finish(result: Gio.AsyncResult): boolean;

    connect_sync(cancellable?: Gio.Cancellable | null): boolean;

    disconnect(
        clean: boolean,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    disconnect(...args: never[]): never;

    disconnect_finish(result: Gio.AsyncResult): boolean;

    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean;

    dup_display_name(): string;

    dup_password(): string;

    get_connection_status(): ServiceConnectionStatus;

    get_display_name(): string;

    get_name(brief: boolean): string;

    get_password(): string;

    get_provider(): Provider;

    get_uid(): string;

    get_user_cache_dir(): string;

    get_user_data_dir(): string;

    migrate_files(): void;

    new_camel_url(): URL;

    query_auth_types(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[];

    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[];

    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void;

    ref_proxy_resolver(): Gio.ProxyResolver;

    ref_session(): Session;

    ref_settings(): Settings;

    set_display_name(display_name: string): void;

    set_password(password: string): void;

    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void;

    set_settings(settings: Settings): void;

    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult;

    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_get_name(brief: boolean): string;

    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[];

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        junk_filter: JunkFilter;
        junkFilter: JunkFilter;
        main_context: GLib.MainContext;
        mainContext: GLib.MainContext;
        network_monitor: Gio.NetworkMonitor;
        networkMonitor: Gio.NetworkMonitor;
        online: boolean;
        user_cache_dir: string;
        userCacheDir: string;
        user_data_dir: string;
        userDataDir: string;
    }
}

export class Session extends GObject.Object {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    junk_filter: JunkFilter;
    junkFilter: JunkFilter;
    main_context: GLib.MainContext;
    mainContext: GLib.MainContext;
    network_monitor: Gio.NetworkMonitor;
    networkMonitor: Gio.NetworkMonitor;
    online: boolean;
    user_cache_dir: string;
    userCacheDir: string;
    user_data_dir: string;
    userDataDir: string;

    // Fields
    priv: SessionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: "job-finished",
        callback: (_source: this, object: Gio.Cancellable | null, p0: GLib.Error) => void
    ): number;

    connect_after(
        signal: "job-finished",
        callback: (_source: this, object: Gio.Cancellable | null, p0: GLib.Error) => void
    ): number;

    emit(signal: "job-finished", object: Gio.Cancellable | null, p0: GLib.Error): void;

    connect(signal: "job-started", callback: (_source: this, object: Gio.Cancellable | null) => void): number;

    connect_after(signal: "job-started", callback: (_source: this, object: Gio.Cancellable | null) => void): number;

    emit(signal: "job-started", object: Gio.Cancellable | null): void;

    connect(
        signal: "user-alert",
        callback: (_source: this, service: Service, type: SessionAlertType, message: string) => void
    ): number;

    connect_after(
        signal: "user-alert",
        callback: (_source: this, service: Service, type: SessionAlertType, message: string) => void
    ): number;

    emit(signal: "user-alert", service: Service, type: SessionAlertType, message: string): void;

    // Members

    add_service(uid: string, protocol: string, type: ProviderType): Service;

    authenticate(
        service: Service,
        mechanism: string | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    authenticate_finish(result: Gio.AsyncResult): boolean;

    authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    forget_password(service: Service, item: string): boolean;

    forward_to(
        folder: Folder,
        message: MimeMessage,
        address: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    forward_to_finish(result: Gio.AsyncResult): boolean;

    forward_to_sync(
        folder: Folder,
        message: MimeMessage,
        address: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver;

    get_junk_filter(): JunkFilter;

    get_junk_headers(): GLib.HashTable<string, string>;

    get_oauth2_access_token_sync(
        service: Service,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, number | null];

    get_online(): boolean;

    get_password(service: Service, prompt: string, item: string, flags: number): string;

    get_recipient_certificates_sync(
        flags: number,
        recipients: string[],
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[]];

    get_user_cache_dir(): string;

    get_user_data_dir(): string;

    idle_add(priority: number, _function: GLib.SourceFunc): number;

    list_services(): Service[];

    lookup_addressbook(name: string): boolean;

    ref_main_context(): GLib.MainContext;

    ref_network_monitor(): Gio.NetworkMonitor;

    ref_service(uid: string): Service;

    ref_service_by_url(url: URL, type: ProviderType): Service;

    remove_service(service: Service): void;

    remove_services(): void;

    set_junk_filter(junk_filter: JunkFilter): void;

    set_junk_headers(headers: string[], values: string[]): void;

    set_network_monitor(network_monitor?: Gio.NetworkMonitor | null): void;

    set_online(online: boolean): void;

    submit_job(description: string, callback: SessionCallback): void;

    trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust;

    user_alert(service: Service, type: SessionAlertType, message: string): void;

    vfunc_add_service(uid: string, protocol: string, type: ProviderType): Service;

    vfunc_authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_forget_password(service: Service, item: string): boolean;

    vfunc_forward_to_sync(
        folder: Folder,
        message: MimeMessage,
        address: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver;

    vfunc_get_oauth2_access_token_sync(
        service: Service,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null, number | null];

    vfunc_get_password(service: Service, prompt: string, item: string, flags: number): string;

    vfunc_get_recipient_certificates_sync(
        flags: number,
        recipients: string[],
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[]];

    vfunc_job_finished(cancellable: Gio.Cancellable | null, error: GLib.Error): void;

    vfunc_job_started(cancellable?: Gio.Cancellable | null): void;

    vfunc_lookup_addressbook(name: string): boolean;

    vfunc_remove_service(service: Service): void;

    vfunc_trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust;

    vfunc_user_alert(service: Service, type: SessionAlertType, message: string): void;
}

export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Members

    clone(): Settings;

    equal(settings_b: Settings): boolean;

    vfunc_clone(): Settings;

    vfunc_equal(settings_b: Settings): boolean;
}

export module Store {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Store extends Service implements Gio.Initable {
    static $gtype: GObject.GType<Store>;

    constructor(properties?: Partial<Store.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Store.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StorePrivate | any;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: "folder-created", callback: (_source: this, object: FolderInfo) => void): number;

    emit(signal: "folder-created", object: FolderInfo): void;

    connect_after(signal: "folder-deleted", callback: (_source: this, object: FolderInfo) => void): number;

    emit(signal: "folder-deleted", object: FolderInfo): void;

    connect_after(signal: "folder-info-stale", callback: (_source: this) => void): number;

    emit(signal: "folder-info-stale"): void;

    connect_after(signal: "folder-opened", callback: (_source: this, object: Folder) => void): number;

    emit(signal: "folder-opened", object: Folder): void;

    connect_after(signal: "folder-renamed", callback: (_source: this, object: string, p0: FolderInfo) => void): number;

    emit(signal: "folder-renamed", object: string, p0: FolderInfo): void;

    // Members

    can_refresh_folder(info: FolderInfo): boolean;

    create_folder(
        parent_name: string | null,
        folder_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null;

    create_folder_sync(
        parent_name: string | null,
        folder_name: string,
        cancellable?: Gio.Cancellable | null
    ): FolderInfo | null;

    delete_cached_folder(folder_name: string): void;

    delete_folder(
        folder_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_folder_finish(result: Gio.AsyncResult): boolean;

    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;

    dup_opened_folders(): Folder[];

    folder_created(folder_info: FolderInfo): void;

    folder_deleted(folder_info: FolderInfo): void;

    folder_info_stale(): void;

    folder_opened(folder: Folder): void;

    folder_renamed(old_name: string, folder_info: FolderInfo): void;

    get_can_auto_save_changes(): boolean;

    get_db(): DB;

    get_flags(): number;

    get_folder(
        folder_name: string,
        flags: StoreGetFolderFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_folder_finish(result: Gio.AsyncResult): Folder | null;

    get_folder_info(
        top: string | null,
        flags: StoreGetFolderInfoFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null;

    get_folder_info_sync(
        top: string | null,
        flags: StoreGetFolderInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): FolderInfo | null;

    get_folder_sync(
        folder_name: string,
        flags: StoreGetFolderFlags,
        cancellable?: Gio.Cancellable | null
    ): Folder | null;

    get_folders_bag(): ObjectBag;

    get_inbox_folder(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null;

    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;

    get_junk_folder(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null;

    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;

    get_permissions(): number;

    get_trash_folder(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null;

    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;

    initial_setup(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    initial_setup_finish(result: Gio.AsyncResult): [boolean, GLib.HashTable<string, string>];

    initial_setup_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.HashTable<string, string>];

    maybe_run_db_maintenance(): boolean;

    rename_folder(
        old_name: string,
        new_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    rename_folder_finish(result: Gio.AsyncResult): boolean;

    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean;

    set_flags(flags: number): void;

    set_permissions(permissions: number): void;

    synchronize(
        expunge: boolean,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    synchronize_finish(result: Gio.AsyncResult): boolean;

    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_refresh_folder(info: FolderInfo): boolean;

    vfunc_create_folder_sync(
        parent_name: string | null,
        folder_name: string,
        cancellable?: Gio.Cancellable | null
    ): FolderInfo | null;

    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_folder_created(folder_info: FolderInfo): void;

    vfunc_folder_deleted(folder_info: FolderInfo): void;

    vfunc_folder_info_stale(): void;

    vfunc_folder_opened(folder: Folder): void;

    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void;

    vfunc_get_can_auto_save_changes(): boolean;

    vfunc_get_folder_info_sync(
        top: string | null,
        flags: StoreGetFolderInfoFlags,
        cancellable?: Gio.Cancellable | null
    ): FolderInfo | null;

    vfunc_get_folder_sync(
        folder_name: string,
        flags: StoreGetFolderFlags,
        cancellable?: Gio.Cancellable | null
    ): Folder | null;

    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;

    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;

    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;

    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.HashTable<string, string>];

    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module StoreSettings {
    export interface ConstructorProperties extends Settings.ConstructorProperties {
        [key: string]: any;

        filter_inbox: boolean;
        filterInbox: boolean;
        store_changes_interval: number;
        storeChangesInterval: number;
    }
}

export class StoreSettings extends Settings {
    static $gtype: GObject.GType<StoreSettings>;

    constructor(properties?: Partial<StoreSettings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoreSettings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter_inbox: boolean;
    filterInbox: boolean;
    store_changes_interval: number;
    storeChangesInterval: number;

    // Members

    get_filter_inbox(): boolean;

    get_store_changes_interval(): number;

    set_filter_inbox(filter_inbox: boolean): void;

    set_store_changes_interval(interval: number): void;
}

export module StoreSummary {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StoreSummary extends GObject.Object {
    static $gtype: GObject.GType<StoreSummary>;

    constructor(properties?: Partial<StoreSummary.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StoreSummary.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StoreSummaryPrivate;

    // Constructors

    static ["new"](): StoreSummary;

    // Members

    add(info: StoreInfo): void;

    array(): StoreInfo[];

    array_free(array: StoreInfo[]): void;

    connect_folder_summary(path: string, folder_summary: FolderSummary): boolean;

    count(): number;

    disconnect_folder_summary(folder_summary: FolderSummary): boolean;

    info_unref(info: StoreInfo): void;

    load(): number;

    remove(info: StoreInfo): void;

    remove_path(path: string): void;

    save(): number;

    set_filename(filename: string): void;

    sort(compare_func: GLib.CompareDataFunc): void;

    touch(): void;

    vfunc_store_info_free(info: StoreInfo): void;

    vfunc_store_info_save(file: any | null, info: StoreInfo): number;

    vfunc_store_info_set_string(info: StoreInfo, type: number, value: string): void;

    vfunc_summary_header_load(file?: any | null): number;

    vfunc_summary_header_save(file?: any | null): number;
}

export module Stream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        base_stream: Gio.IOStream;
        baseStream: Gio.IOStream;
    }
}

export class Stream extends GObject.Object implements Gio.Seekable {
    static $gtype: GObject.GType<Stream>;

    constructor(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_stream: Gio.IOStream;
    baseStream: Gio.IOStream;

    // Fields
    priv: StreamPrivate;

    // Constructors

    static ["new"](base_stream: Gio.IOStream): Stream;

    // Members

    close(cancellable?: Gio.Cancellable | null): number;

    eos(): boolean;

    flush(cancellable?: Gio.Cancellable | null): number;

    read(buffer: number[], cancellable?: Gio.Cancellable | null): number;

    ref_base_stream(): Gio.IOStream | null;

    set_base_stream(base_stream: Gio.IOStream): void;

    write(buffer: number[], cancellable?: Gio.Cancellable | null): number;

    write_string(string: string, cancellable?: Gio.Cancellable | null): number;

    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number;

    vfunc_close(cancellable?: Gio.Cancellable | null): number;

    vfunc_eos(): boolean;

    vfunc_flush(cancellable?: Gio.Cancellable | null): number;

    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number;

    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module StreamBuffer {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamBuffer extends Stream implements Gio.Seekable {
    static $gtype: GObject.GType<StreamBuffer>;

    constructor(properties?: Partial<StreamBuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamBuffer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamBufferPrivate | any;

    // Constructors

    static ["new"](stream: Stream, mode: StreamBufferMode): StreamBuffer;
    static ["new"](...args: never[]): never;

    // Members

    discard_cache(): void;

    gets(buf: number[], cancellable?: Gio.Cancellable | null): number;

    read_line(cancellable?: Gio.Cancellable | null): string | null;

    vfunc_init(stream: Stream, mode: StreamBufferMode): void;

    vfunc_init_vbuf(stream: Stream, mode: StreamBufferMode, buf: string, size: number): void;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module StreamFilter {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamFilter extends Stream implements Gio.Seekable {
    static $gtype: GObject.GType<StreamFilter>;

    constructor(properties?: Partial<StreamFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamFilterPrivate | any;

    // Constructors

    static ["new"](source: Stream): StreamFilter;
    static ["new"](...args: never[]): never;

    // Members

    add(filter: MimeFilter): number;

    get_source(): Stream;

    remove(id: number): void;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module StreamFs {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamFs extends Stream implements Gio.Seekable {
    static $gtype: GObject.GType<StreamFs>;

    constructor(properties?: Partial<StreamFs.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamFs.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamFsPrivate | any;

    // Constructors

    static new_with_fd(fd: number): StreamFs;

    static new_with_name(name: string, flags: number, mode: number): StreamFs;

    // Members

    get_fd(): number;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module StreamMem {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamMem extends Stream implements Gio.Seekable {
    static $gtype: GObject.GType<StreamMem>;

    constructor(properties?: Partial<StreamMem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamMem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamMemPrivate | any;

    // Constructors

    static ["new"](): StreamMem;
    static ["new"](...args: never[]): never;

    static new_with_buffer(buffer: Uint8Array | string): StreamMem;

    static new_with_byte_array(buffer: Uint8Array | string): StreamMem;

    // Members

    get_byte_array(): Uint8Array;

    set_buffer(buffer: Uint8Array | string): void;

    set_byte_array(buffer: Uint8Array | string): void;

    set_secure(): void;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module StreamNull {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamNull extends Stream implements Gio.Seekable {
    static $gtype: GObject.GType<StreamNull>;

    constructor(properties?: Partial<StreamNull.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamNull.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamNullPrivate | any;

    // Constructors

    static ["new"](): StreamNull;
    static ["new"](...args: never[]): never;

    // Members

    get_bytes_written(): number;

    get_ends_with_crlf(): boolean;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module StreamProcess {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamProcess extends Stream implements Gio.Seekable {
    static $gtype: GObject.GType<StreamProcess>;

    constructor(properties?: Partial<StreamProcess.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamProcess.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamProcessPrivate | any;

    // Constructors

    static ["new"](): StreamProcess;
    static ["new"](...args: never[]): never;

    // Members

    connect(command: string, env: string): number;
    connect(...args: never[]): never;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export module TextIndex {
    export interface ConstructorProperties extends Index.ConstructorProperties {
        [key: string]: any;
    }
}

export class TextIndex extends Index {
    static $gtype: GObject.GType<TextIndex>;

    constructor(properties?: Partial<TextIndex.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextIndex.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextIndexPrivate | any;

    // Constructors

    static ["new"](path: string, flags: number): TextIndex;

    // Members

    dump(): void;

    info(): void;

    validate(): void;

    static check(path: string): number;

    static remove(old: string): number;

    static rename(old: string, new_: string): number;
    static rename(...args: never[]): never;
}

export module TextIndexCursor {
    export interface ConstructorProperties extends IndexCursor.ConstructorProperties {
        [key: string]: any;
    }
}

export class TextIndexCursor extends IndexCursor {
    static $gtype: GObject.GType<TextIndexCursor>;

    constructor(properties?: Partial<TextIndexCursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextIndexCursor.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextIndexCursorPrivate | any;
}

export module TextIndexKeyCursor {
    export interface ConstructorProperties extends IndexCursor.ConstructorProperties {
        [key: string]: any;
    }
}

export class TextIndexKeyCursor extends IndexCursor {
    static $gtype: GObject.GType<TextIndexKeyCursor>;

    constructor(properties?: Partial<TextIndexKeyCursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextIndexKeyCursor.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextIndexKeyCursorPrivate | any;
}

export module TextIndexName {
    export interface ConstructorProperties extends IndexName.ConstructorProperties {
        [key: string]: any;
    }
}

export class TextIndexName extends IndexName {
    static $gtype: GObject.GType<TextIndexName>;

    constructor(properties?: Partial<TextIndexName.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextIndexName.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextIndexNamePrivate | any;
}

export module Transport {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Transport extends Service implements Gio.Initable {
    static $gtype: GObject.GType<Transport>;

    constructor(properties?: Partial<Transport.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Transport.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TransportPrivate | any;

    // Members

    send_to(
        message: MimeMessage,
        from: Address,
        recipients: Address,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_to_finish(result: Gio.AsyncResult): [boolean, boolean];

    send_to_sync(
        message: MimeMessage,
        from: Address,
        recipients: Address,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean];

    vfunc_send_to_sync(
        message: MimeMessage,
        from: Address,
        recipients: Address,
        cancellable?: Gio.Cancellable | null
    ): [boolean, boolean];

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module VTrashFolder {
    export interface ConstructorProperties extends VeeFolder.ConstructorProperties {
        [key: string]: any;
    }
}

export class VTrashFolder extends VeeFolder {
    static $gtype: GObject.GType<VTrashFolder>;

    constructor(properties?: Partial<VTrashFolder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VTrashFolder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: VTrashFolderPrivate | any;

    // Constructors

    static ["new"](parent_store: Store, type: VTrashFolderType): VTrashFolder;
    static ["new"](...args: never[]): never;

    // Members

    get_folder_type(): VTrashFolderType;
}

export module VeeDataCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class VeeDataCache extends GObject.Object {
    static $gtype: GObject.GType<VeeDataCache>;

    constructor(properties?: Partial<VeeDataCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeDataCache.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): VeeDataCache;

    // Members

    add_subfolder(subfolder: Folder): void;

    contains_message_info_data(folder: Folder, orig_message_uid: string): boolean;

    foreach_message_info_data(fromfolder: Folder, func: ForeachInfoData): void;

    get_message_info_data(folder: Folder, orig_message_uid: string): VeeMessageInfoData;

    get_message_info_data_by_vuid(vee_message_uid: string): VeeMessageInfoData | null;

    get_subfolder_data(folder: Folder): VeeSubfolderData;

    remove_message_info_data(mi_data: VeeMessageInfoData): void;

    remove_subfolder(subfolder: Folder): void;
}

export module VeeFolder {
    export interface ConstructorProperties extends Folder.ConstructorProperties {
        [key: string]: any;

        auto_update: boolean;
        autoUpdate: boolean;
    }
}

export class VeeFolder extends Folder {
    static $gtype: GObject.GType<VeeFolder>;

    constructor(properties?: Partial<VeeFolder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeFolder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_update: boolean;
    autoUpdate: boolean;

    // Fields
    priv: VeeFolderPrivate | any;

    // Constructors

    static ["new"](parent_store: Store, full: string, flags: number): VeeFolder;

    // Members

    add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;

    add_vuid(mi_data?: any | null, changes?: FolderChangeInfo | null): void;

    construct(flags: number): void;

    get_auto_update(): boolean;

    get_expression(): string;

    get_flags(): number;

    get_location(vinfo: VeeMessageInfo): [Folder, string | null];

    get_vee_uid_folder(vee_message_uid: string): Folder | null;

    ignore_next_changed_event(subfolder: Folder): void;

    propagate_skipped_changes(): void;

    rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;

    ref_folders(): Folder[];

    remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;

    remove_from_ignore_changed_event(subfolder: Folder): void;

    remove_vuid(mi_data?: any | null, changes?: FolderChangeInfo | null): void;

    set_auto_update(auto_update: boolean): void;

    set_expression(expression: string): void;

    set_folders(folders: Folder[], cancellable?: Gio.Cancellable | null): void;

    vfunc_add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;

    vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void;

    vfunc_rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;

    vfunc_remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;

    vfunc_set_expression(expression: string): void;
}

export module VeeMessageInfo {
    export interface ConstructorProperties extends MessageInfo.ConstructorProperties {
        [key: string]: any;
    }
}

export class VeeMessageInfo extends MessageInfo {
    static $gtype: GObject.GType<VeeMessageInfo>;

    constructor(properties?: Partial<VeeMessageInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeMessageInfo.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: VeeMessageInfoPrivate | any;

    // Constructors

    static ["new"](summary: FolderSummary, original_summary: FolderSummary, vuid: string): VeeMessageInfo;
    static ["new"](...args: never[]): never;

    // Members

    get_original_folder(): Folder;

    get_original_summary(): FolderSummary;
}

export module VeeMessageInfoData {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class VeeMessageInfoData extends GObject.Object {
    static $gtype: GObject.GType<VeeMessageInfoData>;

    constructor(properties?: Partial<VeeMessageInfoData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeMessageInfoData.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](subfolder_data: VeeSubfolderData, orig_message_uid: string): VeeMessageInfoData;

    // Members

    get_orig_message_uid(): string;

    get_subfolder_data(): VeeSubfolderData;

    get_vee_message_uid(): string;
}

export module VeeStore {
    export interface ConstructorProperties extends Store.ConstructorProperties {
        [key: string]: any;

        unmatched_enabled: boolean;
        unmatchedEnabled: boolean;
    }
}

export class VeeStore extends Store implements Gio.Initable {
    static $gtype: GObject.GType<VeeStore>;

    constructor(properties?: Partial<VeeStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    unmatched_enabled: boolean;
    unmatchedEnabled: boolean;

    // Fields
    priv: VeeStorePrivate | any;

    // Constructors

    static ["new"](): VeeStore;

    // Members

    get_unmatched_enabled(): boolean;

    get_unmatched_folder(): any | null;

    get_vee_data_cache(): VeeFolder;

    note_subfolder_unused(subfolder: Folder, unused_by: VeeFolder): void;

    note_subfolder_used(subfolder: Folder, used_by: VeeFolder): void;

    note_vuid_unused(mi_data: VeeMessageInfoData, unused_by: VeeFolder): void;

    note_vuid_used(mi_data: VeeMessageInfoData, used_by: VeeFolder): void;

    rebuild_unmatched_folder(cancellable?: Gio.Cancellable | null): void;

    set_unmatched_enabled(is_enabled: boolean): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module VeeSubfolderData {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class VeeSubfolderData extends GObject.Object {
    static $gtype: GObject.GType<VeeSubfolderData>;

    constructor(properties?: Partial<VeeSubfolderData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeSubfolderData.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](folder: Folder): VeeSubfolderData;

    // Members

    get_folder(): Folder;

    get_folder_id(): string;
}

export module VeeSummary {
    export interface ConstructorProperties extends FolderSummary.ConstructorProperties {
        [key: string]: any;
    }
}

export class VeeSummary extends FolderSummary {
    static $gtype: GObject.GType<VeeSummary>;

    constructor(properties?: Partial<VeeSummary.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VeeSummary.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: VeeSummaryPrivate | any;

    // Constructors

    static ["new"](parent: Folder): VeeSummary;

    // Members

    add(mi_data: VeeMessageInfoData): VeeMessageInfo;
    add(...args: never[]): never;

    get_uids_for_subfolder(subfolder: Folder): GLib.HashTable<string, number>;

    remove(vuid: string, subfolder: Folder): void;
    remove(...args: never[]): never;

    replace_flags(uid: string): void;
    replace_flags(...args: never[]): never;
}

export class AddressPrivate {
    static $gtype: GObject.GType<AddressPrivate>;

    constructor(copy: AddressPrivate);
}

export class AsyncClosure {
    static $gtype: GObject.GType<AsyncClosure>;

    constructor(copy: AsyncClosure);
}

export class Block {
    static $gtype: GObject.GType<Block>;

    constructor(copy: Block);

    // Fields
    id: _block_t;
    flags: BlockFlags;
    refcount: number;
    align00: number;
    data: Uint8Array;
}

export class BlockFilePrivate {
    static $gtype: GObject.GType<BlockFilePrivate>;

    constructor(copy: BlockFilePrivate);
}

export class BlockRoot {
    static $gtype: GObject.GType<BlockRoot>;

    constructor(copy: BlockRoot);

    // Fields
    version: number[];
    flags: number;
    block_size: number;
    free: _block_t;
    last: _block_t;
}

export class Cert {
    static $gtype: GObject.GType<Cert>;

    constructor();
    constructor(copy: Cert);

    // Fields
    refcount: number;
    issuer: string;
    subject: string;
    hostname: string;
    fingerprint: string;
    trust: CertTrust;
    rawcert: GLib.Bytes;

    // Constructors
    static ["new"](): Cert;

    // Members
    load_cert_file(): boolean;

    ref(): Cert;

    save_cert_file(der_data: Uint8Array | string): boolean;

    unref(): void;
}

export class CertDBPrivate {
    static $gtype: GObject.GType<CertDBPrivate>;

    constructor(copy: CertDBPrivate);
}

export class Charset {
    static $gtype: GObject.GType<Charset>;

    constructor(
        properties?: Partial<{
            mask?: number;
            level?: number;
        }>
    );
    constructor(copy: Charset);

    // Fields
    mask: number;
    level: number;

    // Members
    best_name(): string;

    init(): void;

    step(_in: number[]): void;

    static best(_in: number[]): string | null;

    static iso_to_windows(isocharset: string): string;
}

export class CipherCertInfo {
    static $gtype: GObject.GType<CipherCertInfo>;

    constructor(copy: CipherCertInfo);

    // Fields
    name: string;
    email: string;
    cert_data: any;
    cert_data_free: GLib.DestroyNotify;
    cert_data_clone: CipherCloneFunc;
    properties: any[];
}

export class CipherCertInfoProperty {
    static $gtype: GObject.GType<CipherCertInfoProperty>;

    constructor(copy: CipherCertInfoProperty);

    // Fields
    name: string;
    value: any;
    value_free: GLib.DestroyNotify;
    value_clone: CipherCloneFunc;
}

export class CipherContextPrivate {
    static $gtype: GObject.GType<CipherContextPrivate>;

    constructor(copy: CipherContextPrivate);
}

export class CipherValidity {
    static $gtype: GObject.GType<CipherValidity>;

    constructor();
    constructor(copy: CipherValidity);

    // Fields
    children: GLib.Queue;
    sign: any;
    encrypt: any;

    // Constructors
    static ["new"](): CipherValidity;

    // Members
    add_certinfo(mode: CipherValidityMode, name: string, email: string): number;

    add_certinfo_ex(
        mode: CipherValidityMode,
        name: string,
        email: string,
        cert_data?: any | null,
        cert_data_free?: GLib.DestroyNotify | null,
        cert_data_clone?: CipherCloneFunc | null
    ): number;

    clear(): void;

    clone(): CipherValidity;

    envelope(valid: CipherValidity): void;

    free(): void;

    get_certinfo_property(mode: CipherValidityMode, info_index: number, name: string): any | null;

    get_description(): string;

    get_valid(): boolean;

    init(): void;

    set_certinfo_property(
        mode: CipherValidityMode,
        info_index: number,
        name: string,
        value?: any | null,
        value_free?: GLib.DestroyNotify | null,
        value_clone?: CipherCloneFunc | null
    ): void;

    set_description(description: string): void;

    set_valid(valid: boolean): void;
}

export class ContentDisposition {
    static $gtype: GObject.GType<ContentDisposition>;

    constructor();
    constructor(
        properties?: Partial<{
            disposition?: string;
            params?: any;
            refcount?: number;
        }>
    );
    constructor(copy: ContentDisposition);

    // Fields
    disposition: string;
    params: any;
    refcount: number;

    // Constructors
    static ["new"](): ContentDisposition;

    // Members
    format(): string;

    is_attachment(content_type: ContentType): boolean;

    is_attachment_ex(content_type: ContentType, parent_content_type: ContentType): boolean;

    ref(): ContentDisposition;

    unref(): void;

    static decode(_in: string): ContentDisposition;
}

export class ContentType {
    static $gtype: GObject.GType<ContentType>;

    constructor(type: string, subtype: string);
    constructor(
        properties?: Partial<{
            type?: string;
            subtype?: string;
            params?: any;
            refcount?: number;
        }>
    );
    constructor(copy: ContentType);

    // Fields
    type: string;
    subtype: string;
    params: any;
    refcount: number;

    // Constructors
    static ["new"](type: string, subtype: string): ContentType;

    // Members
    dump(): void;

    format(): string;

    is(type: string, subtype: string): boolean;

    param(name: string): string;

    ref(): ContentType;

    set_param(name: string, value: string): void;

    simple(): string;

    unref(): void;

    static decode(_in: string): ContentType;
}

export class DBPrivate {
    static $gtype: GObject.GType<DBPrivate>;

    constructor(copy: DBPrivate);
}

export class DataCachePrivate {
    static $gtype: GObject.GType<DataCachePrivate>;

    constructor(copy: DataCachePrivate);
}

export class DataWrapperPrivate {
    static $gtype: GObject.GType<DataWrapperPrivate>;

    constructor(copy: DataWrapperPrivate);
}

export class FIRecord {
    static $gtype: GObject.GType<FIRecord>;

    constructor(
        properties?: Partial<{
            folder_name?: string;
            version?: number;
            flags?: number;
            nextuid?: number;
            timestamp?: number;
            saved_count?: number;
            unread_count?: number;
            deleted_count?: number;
            junk_count?: number;
            visible_count?: number;
            jnd_count?: number;
            bdata?: string;
        }>
    );
    constructor(copy: FIRecord);

    // Fields
    folder_name: string;
    version: number;
    flags: number;
    nextuid: number;
    timestamp: number;
    saved_count: number;
    unread_count: number;
    deleted_count: number;
    junk_count: number;
    visible_count: number;
    jnd_count: number;
    bdata: string;
}

export class FilterDriverPrivate {
    static $gtype: GObject.GType<FilterDriverPrivate>;

    constructor(copy: FilterDriverPrivate);
}

export class FilterInputStreamPrivate {
    static $gtype: GObject.GType<FilterInputStreamPrivate>;

    constructor(copy: FilterInputStreamPrivate);
}

export class FilterOutputStreamPrivate {
    static $gtype: GObject.GType<FilterOutputStreamPrivate>;

    constructor(copy: FilterOutputStreamPrivate);
}

export class FolderChangeInfo {
    static $gtype: GObject.GType<FolderChangeInfo>;

    constructor();
    constructor(copy: FolderChangeInfo);

    // Fields
    uid_added: any[];
    uid_removed: any[];
    uid_changed: any[];
    uid_recent: any[];
    priv: FolderChangeInfoPrivate;

    // Constructors
    static ["new"](): FolderChangeInfo;

    // Members
    add_source(uid: string): void;

    add_source_list(list: string[]): void;

    add_uid(uid: string): void;

    add_update(uid: string): void;

    add_update_list(list: string[]): void;

    build_diff(): void;

    cat(src: FolderChangeInfo): void;

    change_uid(uid: string): void;

    changed(): boolean;

    clear(): void;

    copy(): FolderChangeInfo;

    free(): void;

    get_added_uids(): string[];

    get_changed_uids(): string[];

    get_recent_uids(): string[];

    get_removed_uids(): string[];

    recent_uid(uid: string): void;

    remove_uid(uid: string): void;
}

export class FolderChangeInfoPrivate {
    static $gtype: GObject.GType<FolderChangeInfoPrivate>;

    constructor(copy: FolderChangeInfoPrivate);
}

export class FolderInfo {
    static $gtype: GObject.GType<FolderInfo>;

    constructor();
    constructor(copy: FolderInfo);

    // Fields
    next: any;
    child: any;
    full_name: string;
    display_name: string;
    flags: FolderInfoFlags;
    unread: number;
    total: number;

    // Constructors
    static ["new"](): FolderInfo;

    // Members
    clone(): FolderInfo;

    free(): void;

    static build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo;
}

export class FolderPrivate {
    static $gtype: GObject.GType<FolderPrivate>;

    constructor(copy: FolderPrivate);
}

export class FolderQuotaInfo {
    static $gtype: GObject.GType<FolderQuotaInfo>;

    constructor(name: string, used: number, total: number);
    constructor(
        properties?: Partial<{
            name?: string;
            used?: number;
            total?: number;
            next?: any;
        }>
    );
    constructor(copy: FolderQuotaInfo);

    // Fields
    name: string;
    used: number;
    total: number;
    next: any;

    // Constructors
    static ["new"](name: string, used: number, total: number): FolderQuotaInfo;

    // Members
    clone(): FolderQuotaInfo;

    free(): void;
}

export class FolderSearchPrivate {
    static $gtype: GObject.GType<FolderSearchPrivate>;

    constructor(copy: FolderSearchPrivate);
}

export class FolderSummaryPrivate {
    static $gtype: GObject.GType<FolderSummaryPrivate>;

    constructor(copy: FolderSummaryPrivate);
}

export class FolderThread {
    static $gtype: GObject.GType<FolderThread>;

    constructor(folder: Folder, uids: string[], thread_subject: boolean);
    constructor(copy: FolderThread);

    // Fields
    refcount: number;
    subject: number;
    tree: any;
    node_chunks: MemChunk;
    folder: Folder;
    summary: any[];

    // Constructors
    static ["new"](folder: Folder, uids: string[], thread_subject: boolean): FolderThread;

    // Members
    apply(uids: string[]): void;

    ref(): FolderThread;

    unref(): void;
}

export class FolderThreadNode {
    static $gtype: GObject.GType<FolderThreadNode>;

    constructor(copy: FolderThreadNode);

    // Fields
    next: any;
    child: any;
    message: MessageInfo;
    root_subject: string;
    order: number;
    re: number;
}

export class GpgContextPrivate {
    static $gtype: GObject.GType<GpgContextPrivate>;

    constructor(copy: GpgContextPrivate);
}

export class HTMLParserPrivate {
    static $gtype: GObject.GType<HTMLParserPrivate>;

    constructor(copy: HTMLParserPrivate);
}

export class HeaderAddress {
    static $gtype: GObject.GType<HeaderAddress>;

    constructor();
    constructor(copy: HeaderAddress);

    // Fields
    next: any;
    type: HeaderAddressType;
    name: string;
    refcount: number;

    // Constructors
    static ["new"](): HeaderAddress;

    static new_group(name: string): HeaderAddress;

    static new_name(name: string, addr: string): HeaderAddress;

    // Members
    add_member(member: HeaderAddress): void;

    ref(): HeaderAddress;

    set_addr(addr: string): void;

    set_members(group: HeaderAddress[]): void;

    set_name(name: string): void;

    unref(): void;

    static decode(_in: string, charset: string): HeaderAddress;

    static fold(_in: string, headerlen: number): string;

    static list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void;

    static list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void;

    static list_clear(addrlistp: HeaderAddress[]): void;

    static list_encode(addrlist: HeaderAddress[]): string;

    static list_format(addrlist: HeaderAddress[]): string;
}

export class HeaderParam {
    static $gtype: GObject.GType<HeaderParam>;

    constructor(
        properties?: Partial<{
            next?: any;
            name?: string;
            value?: string;
        }>
    );
    constructor(copy: HeaderParam);

    // Fields
    next: any;
    name: string;
    value: string;

    // Members
    static list_decode(_in?: string | null): any | null;

    static list_format(params?: any | null): string;

    static list_format_append(out: GLib.String, params?: any | null): void;

    static list_free(params?: any | null): void;
}

export class IndexCursorPrivate {
    static $gtype: GObject.GType<IndexCursorPrivate>;

    constructor(copy: IndexCursorPrivate);
}

export class IndexNamePrivate {
    static $gtype: GObject.GType<IndexNamePrivate>;

    constructor(copy: IndexNamePrivate);
}

export class IndexPrivate {
    static $gtype: GObject.GType<IndexPrivate>;

    constructor(copy: IndexPrivate);
}

export class InternetAddressPrivate {
    static $gtype: GObject.GType<InternetAddressPrivate>;

    constructor(copy: InternetAddressPrivate);
}

export class KeyBlock {
    static $gtype: GObject.GType<KeyBlock>;

    constructor(copy: KeyBlock);

    // Fields
    next: _block_t;
    used: number;
}

export class KeyFilePrivate {
    static $gtype: GObject.GType<KeyFilePrivate>;

    constructor(copy: KeyFilePrivate);
}

export class KeyRootBlock {
    static $gtype: GObject.GType<KeyRootBlock>;

    constructor(copy: KeyRootBlock);

    // Fields
    first: _block_t;
    last: _block_t;
    free: _key_t;
}

export class KeyTablePrivate {
    static $gtype: GObject.GType<KeyTablePrivate>;

    constructor(copy: KeyTablePrivate);
}

export class LocalSettingsPrivate {
    static $gtype: GObject.GType<LocalSettingsPrivate>;

    constructor(copy: LocalSettingsPrivate);
}

export class MIRecord {
    static $gtype: GObject.GType<MIRecord>;

    constructor(
        properties?: Partial<{
            uid?: string;
            flags?: number;
            msg_type?: number;
            dirty?: number;
            read?: boolean;
            deleted?: boolean;
            replied?: boolean;
            important?: boolean;
            junk?: boolean;
            attachment?: boolean;
            size?: number;
            dsent?: number;
            dreceived?: number;
            subject?: string;
            from?: string;
            to?: string;
            cc?: string;
            mlist?: string;
            followup_flag?: string;
            followup_completed_on?: string;
            followup_due_by?: string;
            part?: string;
            labels?: string;
            usertags?: string;
            cinfo?: string;
            bdata?: string;
        }>
    );
    constructor(copy: MIRecord);

    // Fields
    uid: string;
    flags: number;
    msg_type: number;
    dirty: number;
    read: boolean;
    deleted: boolean;
    replied: boolean;
    important: boolean;
    junk: boolean;
    attachment: boolean;
    size: number;
    dsent: number;
    dreceived: number;
    subject: string;
    from: string;
    to: string;
    cc: string;
    mlist: string;
    followup_flag: string;
    followup_completed_on: string;
    followup_due_by: string;
    part: string;
    labels: string;
    usertags: string;
    cinfo: string;
    bdata: string;
}

export class MediumPrivate {
    static $gtype: GObject.GType<MediumPrivate>;

    constructor(copy: MediumPrivate);
}

export class MemChunk {
    static $gtype: GObject.GType<MemChunk>;

    constructor(copy: MemChunk);
}

export class MemPool {
    static $gtype: GObject.GType<MemPool>;

    constructor(copy: MemPool);
}

export class MessageContentInfo {
    static $gtype: GObject.GType<MessageContentInfo>;

    constructor();
    constructor(copy: MessageContentInfo);

    // Fields
    next: MessageContentInfo;
    childs: MessageContentInfo;
    type: ContentType;
    disposition: ContentDisposition;
    id: string;
    description: string;
    encoding: string;
    size: number;

    // Constructors
    static ["new"](): MessageContentInfo;

    static new_from_headers(headers: NameValueArray): MessageContentInfo;

    static new_from_message(mime_part: MimePart): MessageContentInfo;

    static new_from_parser(parser: MimeParser): MessageContentInfo;

    // Members
    copy(): MessageContentInfo;

    dump(depth: number): void;

    free(): void;

    traverse(func: MessageContentInfoTraverseCallback): boolean;
}

export class MessageInfoBasePrivate {
    static $gtype: GObject.GType<MessageInfoBasePrivate>;

    constructor(copy: MessageInfoBasePrivate);
}

export class MessageInfoPrivate {
    static $gtype: GObject.GType<MessageInfoPrivate>;

    constructor(copy: MessageInfoPrivate);
}

export class MimeFilterBasicPrivate {
    static $gtype: GObject.GType<MimeFilterBasicPrivate>;

    constructor(copy: MimeFilterBasicPrivate);
}

export class MimeFilterBestencPrivate {
    static $gtype: GObject.GType<MimeFilterBestencPrivate>;

    constructor(copy: MimeFilterBestencPrivate);
}

export class MimeFilterCRLFPrivate {
    static $gtype: GObject.GType<MimeFilterCRLFPrivate>;

    constructor(copy: MimeFilterCRLFPrivate);
}

export class MimeFilterCanonPrivate {
    static $gtype: GObject.GType<MimeFilterCanonPrivate>;

    constructor(copy: MimeFilterCanonPrivate);
}

export class MimeFilterCharsetPrivate {
    static $gtype: GObject.GType<MimeFilterCharsetPrivate>;

    constructor(copy: MimeFilterCharsetPrivate);
}

export class MimeFilterEnrichedPrivate {
    static $gtype: GObject.GType<MimeFilterEnrichedPrivate>;

    constructor(copy: MimeFilterEnrichedPrivate);
}

export class MimeFilterFromPrivate {
    static $gtype: GObject.GType<MimeFilterFromPrivate>;

    constructor(copy: MimeFilterFromPrivate);
}

export class MimeFilterGZipPrivate {
    static $gtype: GObject.GType<MimeFilterGZipPrivate>;

    constructor(copy: MimeFilterGZipPrivate);
}

export class MimeFilterHTMLPrivate {
    static $gtype: GObject.GType<MimeFilterHTMLPrivate>;

    constructor(copy: MimeFilterHTMLPrivate);
}

export class MimeFilterIndexPrivate {
    static $gtype: GObject.GType<MimeFilterIndexPrivate>;

    constructor(copy: MimeFilterIndexPrivate);
}

export class MimeFilterLinewrapPrivate {
    static $gtype: GObject.GType<MimeFilterLinewrapPrivate>;

    constructor(copy: MimeFilterLinewrapPrivate);
}

export class MimeFilterPgpPrivate {
    static $gtype: GObject.GType<MimeFilterPgpPrivate>;

    constructor(copy: MimeFilterPgpPrivate);
}

export class MimeFilterPrivate {
    static $gtype: GObject.GType<MimeFilterPrivate>;

    constructor(copy: MimeFilterPrivate);
}

export class MimeFilterProgressPrivate {
    static $gtype: GObject.GType<MimeFilterProgressPrivate>;

    constructor(copy: MimeFilterProgressPrivate);
}

export class MimeFilterToHTMLPrivate {
    static $gtype: GObject.GType<MimeFilterToHTMLPrivate>;

    constructor(copy: MimeFilterToHTMLPrivate);
}

export class MimeFilterWindowsPrivate {
    static $gtype: GObject.GType<MimeFilterWindowsPrivate>;

    constructor(copy: MimeFilterWindowsPrivate);
}

export class MimeFilterYencPrivate {
    static $gtype: GObject.GType<MimeFilterYencPrivate>;

    constructor(copy: MimeFilterYencPrivate);
}

export class MimeMessagePrivate {
    static $gtype: GObject.GType<MimeMessagePrivate>;

    constructor(copy: MimeMessagePrivate);
}

export class MimeParserPrivate {
    static $gtype: GObject.GType<MimeParserPrivate>;

    constructor(copy: MimeParserPrivate);
}

export class MimePartPrivate {
    static $gtype: GObject.GType<MimePartPrivate>;

    constructor(copy: MimePartPrivate);
}

export class Msg {
    static $gtype: GObject.GType<Msg>;

    constructor(copy: Msg);

    // Fields
    reply_port: MsgPort;
    flags: number;
}

export class MsgPort {
    static $gtype: GObject.GType<MsgPort>;

    constructor(copy: MsgPort);
}

export class MultipartEncryptedPrivate {
    static $gtype: GObject.GType<MultipartEncryptedPrivate>;

    constructor(copy: MultipartEncryptedPrivate);
}

export class MultipartPrivate {
    static $gtype: GObject.GType<MultipartPrivate>;

    constructor(copy: MultipartPrivate);
}

export class MultipartSignedPrivate {
    static $gtype: GObject.GType<MultipartSignedPrivate>;

    constructor(copy: MultipartSignedPrivate);
}

export class NNTPAddressPrivate {
    static $gtype: GObject.GType<NNTPAddressPrivate>;

    constructor(copy: NNTPAddressPrivate);
}

export class NameValueArray {
    static $gtype: GObject.GType<NameValueArray>;

    constructor();
    constructor(copy: NameValueArray);

    // Constructors
    static ["new"](): NameValueArray;

    static new_sized(reserve_size: number): NameValueArray;

    // Members
    append(name: string, value: string): void;

    clear(): void;

    copy(): NameValueArray;

    equal(array_b: NameValueArray | null, compare_type: CompareType): boolean;

    free(): void;

    get(index: number): [boolean, string | null, string | null];

    get_length(): number;

    get_name(index: number): string | null;

    get_named(compare_type: CompareType, name: string): string | null;

    get_value(index: number): string | null;

    remove(index: number): boolean;

    remove_named(compare_type: CompareType, name: string, all_occurrences: boolean): number;

    set(index: number, name: string, value: string): boolean;

    set_name(index: number, name: string): boolean;

    set_named(compare_type: CompareType, name: string, value: string): boolean;

    set_value(index: number, value: string): boolean;
}

export class NamedFlags {
    static $gtype: GObject.GType<NamedFlags>;

    constructor();
    constructor(copy: NamedFlags);

    // Constructors
    static ["new"](): NamedFlags;

    static new_sized(reserve_size: number): NamedFlags;

    // Members
    clear(): void;

    contains(name: string): boolean;

    copy(): NamedFlags;

    equal(named_flags_b?: NamedFlags | null): boolean;

    free(): void;

    get(index: number): string | null;

    get_length(): number;

    insert(name: string): boolean;

    remove(name: string): boolean;
}

export class NullOutputStreamPrivate {
    static $gtype: GObject.GType<NullOutputStreamPrivate>;

    constructor(copy: NullOutputStreamPrivate);
}

export class ObjectBag {
    static $gtype: GObject.GType<ObjectBag>;

    constructor(copy: ObjectBag);

    // Members
    abort(key?: any | null): void;

    add(key?: any | null, object?: any | null): void;

    destroy(): void;

    get(key?: any | null): any | null;

    list(): GObject.Object[];

    peek(key?: any | null): any | null;

    rekey(object?: any | null, new_key?: any | null): void;

    remove(object?: any | null): void;

    reserve(key?: any | null): any | null;
}

export class ObjectPrivate {
    static $gtype: GObject.GType<ObjectPrivate>;

    constructor(copy: ObjectPrivate);
}

export class OfflineFolderPrivate {
    static $gtype: GObject.GType<OfflineFolderPrivate>;

    constructor(copy: OfflineFolderPrivate);
}

export class OfflineSettingsPrivate {
    static $gtype: GObject.GType<OfflineSettingsPrivate>;

    constructor(copy: OfflineSettingsPrivate);
}

export class OfflineStorePrivate {
    static $gtype: GObject.GType<OfflineStorePrivate>;

    constructor(copy: OfflineStorePrivate);
}

export class OperationPrivate {
    static $gtype: GObject.GType<OperationPrivate>;

    constructor(copy: OperationPrivate);
}

export class PartitionKey {
    static $gtype: GObject.GType<PartitionKey>;

    constructor(copy: PartitionKey);

    // Fields
    hashid: _hash_t;
    keyid: _key_t;
}

export class PartitionKeyBlock {
    static $gtype: GObject.GType<PartitionKeyBlock>;

    constructor(copy: PartitionKeyBlock);

    // Fields
    used: number;
    keys: any[];
}

export class PartitionMap {
    static $gtype: GObject.GType<PartitionMap>;

    constructor(copy: PartitionMap);

    // Fields
    hashid: _hash_t;
    blockid: _block_t;
}

export class PartitionMapBlock {
    static $gtype: GObject.GType<PartitionMapBlock>;

    constructor(copy: PartitionMapBlock);

    // Fields
    next: _block_t;
    used: number;
    partition: any[];
}

export class PartitionTablePrivate {
    static $gtype: GObject.GType<PartitionTablePrivate>;

    constructor(copy: PartitionTablePrivate);
}

export class Provider {
    static $gtype: GObject.GType<Provider>;

    constructor(copy: Provider);

    // Fields
    protocol: string;
    name: string;
    description: string;
    domain: string;
    flags: ProviderFlags;
    url_flags: ProviderURLFlags;
    extra_conf: ProviderConfEntry;
    port_entries: ProviderPortEntry;
    object_types: GObject.GType[];
    authtypes: any[];
    url_hash: GLib.HashFunc;
    url_equal: GLib.EqualFunc;
    translation_domain: string;
    priv: any;

    // Members
    auto_detect(url: URL): [number, GLib.HashTable<string, string> | null];

    register(): void;

    static get(protocol: string): Provider;

    static init(): void;

    static list(load: boolean): Provider[];

    static load(path: string): boolean;
}

export class ProviderConfEntry {
    static $gtype: GObject.GType<ProviderConfEntry>;

    constructor(copy: ProviderConfEntry);

    // Fields
    type: ProviderConfType;
    name: string;
    depname: string;
    text: string;
    value: string;
}

export class ProviderModule {
    static $gtype: GObject.GType<ProviderModule>;

    constructor(copy: ProviderModule);

    // Fields
    path: string;
    types: any[];
    loaded: number;

    // Members
    static init(): void;
}

export class ProviderPortEntry {
    static $gtype: GObject.GType<ProviderPortEntry>;

    constructor(
        properties?: Partial<{
            port?: number;
            desc?: string;
            is_ssl?: boolean;
        }>
    );
    constructor(copy: ProviderPortEntry);

    // Fields
    port: number;
    desc: string;
    is_ssl: boolean;
}

export class SExpPrivate {
    static $gtype: GObject.GType<SExpPrivate>;

    constructor(copy: SExpPrivate);
}

export class SExpResult {
    static $gtype: GObject.GType<SExpResult>;

    constructor(copy: SExpResult);

    // Fields
    type: SExpResultType;
    time_generator: boolean;
    occuring_start: number;
    occuring_end: number;
}

export class SExpSymbol {
    static $gtype: GObject.GType<SExpSymbol>;

    constructor(
        properties?: Partial<{
            type?: number;
            name?: string;
            data?: any;
        }>
    );
    constructor(copy: SExpSymbol);

    // Fields
    type: number;
    name: string;
    data: any;
}

export class SExpTerm {
    static $gtype: GObject.GType<SExpTerm>;

    constructor(copy: SExpTerm);

    // Fields
    type: SExpTermType;
}

export class SMIMEContextPrivate {
    static $gtype: GObject.GType<SMIMEContextPrivate>;

    constructor(copy: SMIMEContextPrivate);
}

export class SaslAnonymousPrivate {
    static $gtype: GObject.GType<SaslAnonymousPrivate>;

    constructor(copy: SaslAnonymousPrivate);
}

export class SaslCramMd5Private {
    static $gtype: GObject.GType<SaslCramMd5Private>;

    constructor(copy: SaslCramMd5Private);
}

export class SaslDigestMd5Private {
    static $gtype: GObject.GType<SaslDigestMd5Private>;

    constructor(copy: SaslDigestMd5Private);
}

export class SaslGssapiPrivate {
    static $gtype: GObject.GType<SaslGssapiPrivate>;

    constructor(copy: SaslGssapiPrivate);
}

export class SaslLoginPrivate {
    static $gtype: GObject.GType<SaslLoginPrivate>;

    constructor(copy: SaslLoginPrivate);
}

export class SaslNTLMPrivate {
    static $gtype: GObject.GType<SaslNTLMPrivate>;

    constructor(copy: SaslNTLMPrivate);
}

export class SaslPOPB4SMTPPrivate {
    static $gtype: GObject.GType<SaslPOPB4SMTPPrivate>;

    constructor(copy: SaslPOPB4SMTPPrivate);
}

export class SaslPlainPrivate {
    static $gtype: GObject.GType<SaslPlainPrivate>;

    constructor(copy: SaslPlainPrivate);
}

export class SaslPrivate {
    static $gtype: GObject.GType<SaslPrivate>;

    constructor(copy: SaslPrivate);
}

export class SaslXOAuth2GooglePrivate {
    static $gtype: GObject.GType<SaslXOAuth2GooglePrivate>;

    constructor(copy: SaslXOAuth2GooglePrivate);
}

export class SaslXOAuth2OutlookPrivate {
    static $gtype: GObject.GType<SaslXOAuth2OutlookPrivate>;

    constructor(copy: SaslXOAuth2OutlookPrivate);
}

export class SaslXOAuth2Private {
    static $gtype: GObject.GType<SaslXOAuth2Private>;

    constructor(copy: SaslXOAuth2Private);
}

export class ServiceAuthType {
    static $gtype: GObject.GType<ServiceAuthType>;

    constructor(
        properties?: Partial<{
            name?: string;
            description?: string;
            authproto?: string;
            need_password?: boolean;
        }>
    );
    constructor(copy: ServiceAuthType);

    // Fields
    name: string;
    description: string;
    authproto: string;
    need_password: boolean;

    // Members
    copy(): ServiceAuthType;

    free(): void;
}

export class ServicePrivate {
    static $gtype: GObject.GType<ServicePrivate>;

    constructor(copy: ServicePrivate);
}

export class SessionPrivate {
    static $gtype: GObject.GType<SessionPrivate>;

    constructor(copy: SessionPrivate);
}

export class SettingsPrivate {
    static $gtype: GObject.GType<SettingsPrivate>;

    constructor(copy: SettingsPrivate);
}

export class StoreInfo {
    static $gtype: GObject.GType<StoreInfo>;

    constructor(
        properties?: Partial<{
            refcount?: number;
            flags?: number;
            unread?: number;
            total?: number;
        }>
    );
    constructor(copy: StoreInfo);

    // Fields
    refcount: number;
    flags: number;
    unread: number;
    total: number;

    // Members
    static name(summary: StoreSummary, info: StoreInfo): string;

    static path(summary: StoreSummary, info: StoreInfo): string;

    static set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void;
}

export class StorePrivate {
    static $gtype: GObject.GType<StorePrivate>;

    constructor(copy: StorePrivate);
}

export class StoreSettingsPrivate {
    static $gtype: GObject.GType<StoreSettingsPrivate>;

    constructor(copy: StoreSettingsPrivate);
}

export class StoreSummaryPrivate {
    static $gtype: GObject.GType<StoreSummaryPrivate>;

    constructor(copy: StoreSummaryPrivate);
}

export class StreamBufferPrivate {
    static $gtype: GObject.GType<StreamBufferPrivate>;

    constructor(copy: StreamBufferPrivate);
}

export class StreamFilterPrivate {
    static $gtype: GObject.GType<StreamFilterPrivate>;

    constructor(copy: StreamFilterPrivate);
}

export class StreamFsPrivate {
    static $gtype: GObject.GType<StreamFsPrivate>;

    constructor(copy: StreamFsPrivate);
}

export class StreamMemPrivate {
    static $gtype: GObject.GType<StreamMemPrivate>;

    constructor(copy: StreamMemPrivate);
}

export class StreamNullPrivate {
    static $gtype: GObject.GType<StreamNullPrivate>;

    constructor(copy: StreamNullPrivate);
}

export class StreamPrivate {
    static $gtype: GObject.GType<StreamPrivate>;

    constructor(copy: StreamPrivate);
}

export class StreamProcessPrivate {
    static $gtype: GObject.GType<StreamProcessPrivate>;

    constructor(copy: StreamProcessPrivate);
}

export class SummaryMessageID {
    static $gtype: GObject.GType<SummaryMessageID>;

    constructor(copy: SummaryMessageID);
}

export class TextIndexCursorPrivate {
    static $gtype: GObject.GType<TextIndexCursorPrivate>;

    constructor(copy: TextIndexCursorPrivate);
}

export class TextIndexKeyCursorPrivate {
    static $gtype: GObject.GType<TextIndexKeyCursorPrivate>;

    constructor(copy: TextIndexKeyCursorPrivate);
}

export class TextIndexNamePrivate {
    static $gtype: GObject.GType<TextIndexNamePrivate>;

    constructor(copy: TextIndexNamePrivate);
}

export class TextIndexPrivate {
    static $gtype: GObject.GType<TextIndexPrivate>;

    constructor(copy: TextIndexPrivate);
}

export class TransportPrivate {
    static $gtype: GObject.GType<TransportPrivate>;

    constructor(copy: TransportPrivate);
}

export class Trie {
    static $gtype: GObject.GType<Trie>;

    constructor(copy: Trie);
}

export class UIDCache {
    static $gtype: GObject.GType<UIDCache>;

    constructor(copy: UIDCache);

    // Fields
    filename: string;
    uids: GLib.HashTable<any, any>;
    level: number;
    expired: number;
    size: number;
    fd: number;

    // Members
    destroy(): void;

    get_new_uids(uids: string[]): string[];

    save(): boolean;

    save_uid(uid: string): void;

    static free_uids(uids: string[]): void;
}

export class URL {
    static $gtype: GObject.GType<URL>;

    constructor(url_string: string);
    constructor(copy: URL);

    // Fields
    protocol: string;
    user: string;
    authmech: string;
    host: string;
    port: number;
    path: string;
    params: GLib.Data;
    query: string;
    fragment: string;

    // Constructors
    static ["new"](url_string: string): URL;

    // Members
    copy(): URL;

    equal(u2: URL): boolean;

    free(): void;

    get_param(name: string): string;

    hash(): number;

    new_with_base(url_string: string): URL;

    set_authmech(authmech: string): void;

    set_fragment(fragment: string): void;

    set_host(host: string): void;

    set_param(name: string, value: string): void;

    set_path(path: string): void;

    set_port(port: number): void;

    set_protocol(protocol: string): void;

    set_query(query: string): void;

    set_user(user: string): void;

    to_string(flags: URLFlags): string;

    static addrspec_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

    static addrspec_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

    static decode(part: string): void;

    static decode_path(path: string): string;

    static encode(part: string, escape_extra: string): string;

    static file_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

    static file_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

    static web_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

    static web_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
}

export class UrlMatch {
    static $gtype: GObject.GType<UrlMatch>;

    constructor(
        properties?: Partial<{
            pattern?: string;
            prefix?: string;
            um_so?: number;
            um_eo?: number;
        }>
    );
    constructor(copy: UrlMatch);

    // Fields
    pattern: string;
    prefix: string;
    um_so: number;
    um_eo: number;
}

export class UrlPattern {
    static $gtype: GObject.GType<UrlPattern>;

    constructor(copy: UrlPattern);

    // Fields
    pattern: string;
    prefix: string;
    start: UrlScanFunc;
    end: UrlScanFunc;
}

export class UrlScanner {
    static $gtype: GObject.GType<UrlScanner>;

    constructor(copy: UrlScanner);
}

export class VTrashFolderPrivate {
    static $gtype: GObject.GType<VTrashFolderPrivate>;

    constructor(copy: VTrashFolderPrivate);
}

export class VeeDataCachePrivate {
    static $gtype: GObject.GType<VeeDataCachePrivate>;

    constructor(copy: VeeDataCachePrivate);
}

export class VeeFolderPrivate {
    static $gtype: GObject.GType<VeeFolderPrivate>;

    constructor(copy: VeeFolderPrivate);
}

export class VeeMessageInfoDataPrivate {
    static $gtype: GObject.GType<VeeMessageInfoDataPrivate>;

    constructor(copy: VeeMessageInfoDataPrivate);
}

export class VeeMessageInfoPrivate {
    static $gtype: GObject.GType<VeeMessageInfoPrivate>;

    constructor(copy: VeeMessageInfoPrivate);
}

export class VeeStorePrivate {
    static $gtype: GObject.GType<VeeStorePrivate>;

    constructor(copy: VeeStorePrivate);
}

export class VeeSubfolderDataPrivate {
    static $gtype: GObject.GType<VeeSubfolderDataPrivate>;

    constructor(copy: VeeSubfolderDataPrivate);
}

export class VeeSummaryPrivate {
    static $gtype: GObject.GType<VeeSummaryPrivate>;

    constructor(copy: VeeSummaryPrivate);
}

export class WeakRefGroup {
    static $gtype: GObject.GType<WeakRefGroup>;

    constructor();
    constructor(copy: WeakRefGroup);

    // Constructors
    static ["new"](): WeakRefGroup;

    // Members
    get(): any | null;

    ref(): WeakRefGroup;

    set(object?: any | null): void;

    unref(): void;
}

export interface JunkFilterNamespace {
    $gtype: GObject.GType<JunkFilter>;
    prototype: JunkFilterPrototype;
}

export type JunkFilter = JunkFilterPrototype;

export interface JunkFilterPrototype extends GObject.Object {
    // Members

    classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus;

    learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;

    learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;

    synchronize(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus;

    vfunc_learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_synchronize(cancellable?: Gio.Cancellable | null): boolean;
}

export const JunkFilter: JunkFilterNamespace;

export interface NetworkServiceNamespace {
    $gtype: GObject.GType<NetworkService>;
    prototype: NetworkServicePrototype;
}

export type NetworkService = NetworkServicePrototype;

export interface NetworkServicePrototype extends Service {
    // Properties
    connectable: Gio.SocketConnectable;
    host_reachable: boolean;
    hostReachable: boolean;

    // Members

    can_reach(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    can_reach_finish(result: Gio.AsyncResult): boolean;

    can_reach_sync(cancellable?: Gio.Cancellable | null): boolean;

    connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream;

    connect_sync(...args: never[]): never;

    get_default_port(method: NetworkSecurityMethod): number;

    get_host_reachable(): boolean;

    get_service_name(method: NetworkSecurityMethod): string;

    ref_connectable(): Gio.SocketConnectable;

    set_connectable(connectable: Gio.SocketConnectable): void;

    starttls(base_stream: Gio.IOStream): Gio.IOStream;

    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream;

    vfunc_connect_sync(...args: never[]): never;

    vfunc_get_default_port(method: NetworkSecurityMethod): number;

    vfunc_get_service_name(method: NetworkSecurityMethod): string;
}

export const NetworkService: NetworkServiceNamespace;

export interface NetworkSettingsNamespace {
    $gtype: GObject.GType<NetworkSettings>;
    prototype: NetworkSettingsPrototype;
}

export type NetworkSettings = NetworkSettingsPrototype;

export interface NetworkSettingsPrototype extends Settings {
    // Properties
    auth_mechanism: string;
    authMechanism: string;
    host: string;
    port: number;
    security_method: NetworkSecurityMethod;
    securityMethod: NetworkSecurityMethod;
    user: string;

    // Members

    dup_auth_mechanism(): string;

    dup_host(): string;

    dup_host_ensure_ascii(): string;

    dup_user(): string;

    get_auth_mechanism(): string;

    get_host(): string;

    get_port(): number;

    get_security_method(): NetworkSecurityMethod;

    get_user(): string;

    set_auth_mechanism(auth_mechanism: string): void;

    set_host(host: string): void;

    set_port(port: number): void;

    set_security_method(method: NetworkSecurityMethod): void;

    set_user(user: string): void;
}

export const NetworkSettings: NetworkSettingsNamespace;

export interface SubscribableNamespace {
    $gtype: GObject.GType<Subscribable>;
    prototype: SubscribablePrototype;
}

export type Subscribable = SubscribablePrototype;

export interface SubscribablePrototype extends Store {
    // Members

    folder_is_subscribed(folder_name: string): boolean;

    folder_subscribed(folder_info: FolderInfo): void;

    folder_unsubscribed(folder_info: FolderInfo): void;

    subscribe_folder(
        folder_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    subscribe_folder_finish(result: Gio.AsyncResult): boolean;

    subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;

    unsubscribe_folder(
        folder_name: string,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    unsubscribe_folder_finish(result: Gio.AsyncResult): boolean;

    unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_folder_is_subscribed(folder_name: string): boolean;

    vfunc_folder_subscribed(folder_info: FolderInfo): void;

    vfunc_folder_unsubscribed(folder_info: FolderInfo): void;

    vfunc_subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;
}

export const Subscribable: SubscribableNamespace;

export type _block_t = number;
export type _hash_t = number;
export type _key_t = number;
