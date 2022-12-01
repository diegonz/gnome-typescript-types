/**
 * GMime 3.0
 *
 * Generated from 3.2.7
 */

import * as GObject from "./gobject";
import * as Gio from "./gio";
import * as GLib from "./glib";

export const BINARY_AGE: number;
export const DISPOSITION_ATTACHMENT: string;
export const DISPOSITION_INLINE: string;
export const FILTER_ENRICHED_IS_RICHTEXT: number;
export const FILTER_HTML_BLOCKQUOTE_CITATION: number;
export const FILTER_HTML_CITE: number;
export const FILTER_HTML_CONVERT_ADDRESSES: number;
export const FILTER_HTML_CONVERT_NL: number;
export const FILTER_HTML_CONVERT_SPACES: number;
export const FILTER_HTML_CONVERT_URLS: number;
export const FILTER_HTML_ESCAPE_8BIT: number;
export const FILTER_HTML_MARK_CITATION: number;
export const FILTER_HTML_PRE: number;
export const INTERFACE_AGE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const SIGNATURE_STATUS_ERROR_MASK: number;
export const UUDECODE_STATE_BEGIN: number;
export const UUDECODE_STATE_END: number;
export const UUDECODE_STATE_INIT: number;
export const UUDECODE_STATE_MASK: number;
export const YDECODE_STATE_BEGIN: number;
export const YDECODE_STATE_DECODE: number;
export const YDECODE_STATE_END: number;
export const YDECODE_STATE_EOLN: number;
export const YDECODE_STATE_ESCAPE: number;
export const YDECODE_STATE_INIT: number;
export const YDECODE_STATE_PART: number;
export const YENCODE_CRC_INIT: number;
export const YENCODE_STATE_INIT: number;

export function charset_best(inbuf: string, inlen: number): string | null;

export function charset_canon_name(charset: string): string;

export function charset_iconv_name(charset: string): string;

export function charset_iso_to_windows(isocharset: string): string;

export function charset_language(charset: string): string | null;

export function charset_locale_name(): string;

export function charset_map_init(): void;

export function charset_map_shutdown(): void;

export function charset_name(charset: string): string;

export function check_version(major: number, minor: number, micro: number): boolean;

export function content_encoding_from_string(str: string): ContentEncoding;

export function content_encoding_to_string(encoding: ContentEncoding): string;

export function encoding_base64_decode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_base64_encode_close(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_base64_encode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_quoted_decode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_quoted_encode_close(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_quoted_encode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_uudecode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    save: number
): number;

export function encoding_uuencode_close(
    inbuf: number,
    inlen: number,
    outbuf: number,
    uubuf: number,
    state: number,
    save: number
): number;

export function encoding_uuencode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    uubuf: number,
    state: number,
    save: number
): number;

export function format_options_get_default(): FormatOptions;

export function iconv_locale_to_utf8(str: string): string;

export function iconv_locale_to_utf8_length(str: string, n: number): string;

export function iconv_utf8_to_locale(str: string): string;

export function iconv_utf8_to_locale_length(str: string, n: number): string;

export function init(): void;

export function locale_charset(): string;

export function locale_language(): string | null;

export function parser_options_get_default(): ParserOptions;

export function references_parse(options: ParserOptions | null, text: string): References;

export function shutdown(): void;

export function utils_best_encoding(text: Uint8Array | string): ContentEncoding;

export function utils_decode_8bit(options: ParserOptions | null, text: Uint8Array | string): string;

export function utils_decode_message_id(message_id: string): string;

export function utils_generate_message_id(fqdn: string): string;

export function utils_header_decode_date(str: string): GLib.DateTime | null;

export function utils_header_decode_phrase(options: ParserOptions | null, phrase: string): string;

export function utils_header_decode_text(options: ParserOptions | null, text: string): string;

export function utils_header_encode_phrase(
    options: FormatOptions | null,
    phrase: string,
    charset?: string | null
): string;

export function utils_header_encode_text(options: FormatOptions | null, text: string, charset?: string | null): string;

export function utils_header_format_date(date: GLib.DateTime): string;

export function utils_header_unfold(value: string): string;

export function utils_quote_string(str: string): string;

export function utils_structured_header_fold(
    options: ParserOptions | null,
    format: FormatOptions | null,
    header: string
): string;

export function utils_text_is_8bit(text: Uint8Array | string): boolean;

export function utils_unquote_string(str: string): void;

export function utils_unstructured_header_fold(
    options: ParserOptions | null,
    format: FormatOptions | null,
    header: string
): string;

export function ydecode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    pcrc: number,
    crc: number
): number;

export function yencode_close(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    pcrc: number,
    crc: number
): number;

export function yencode_step(
    inbuf: number,
    inlen: number,
    outbuf: number,
    state: number,
    pcrc: number,
    crc: number
): number;

export type HeaderRawValueFormatter = (
    header: Header,
    options: FormatOptions,
    value: string,
    charset: string
) => string;
export type ObjectForeachFunc = (parent: Object, part: Object) => void;
export type ParserHeaderRegexFunc = (parser: Parser, header: string, value: string, offset: number) => void;
export type ParserWarningFunc = (offset: number, errcode: ParserWarning, item: string) => void;
export type PasswordRequestFunc = (
    ctx: CryptoContext,
    user_id: string,
    prompt: string,
    reprompt: boolean,
    response: Stream
) => boolean;

export namespace AddressType {
    export const $gtype: GObject.GType<AddressType>;
}

export enum AddressType {
    SENDER = 0,
    FROM = 1,
    REPLY_TO = 2,
    TO = 3,
    CC = 4,
    BCC = 5,
}

export namespace AutocryptPreferEncrypt {
    export const $gtype: GObject.GType<AutocryptPreferEncrypt>;
}

export enum AutocryptPreferEncrypt {
    NONE = 0,
    MUTUAL = 1,
}

export namespace CipherAlgo {
    export const $gtype: GObject.GType<CipherAlgo>;
}

export enum CipherAlgo {
    DEFAULT = 0,
    IDEA = 1,
    "3DES" = 2,
    CAST5 = 3,
    BLOWFISH = 4,
    AES = 7,
    AES192 = 8,
    AES256 = 9,
    TWOFISH = 10,
    CAMELLIA128 = 11,
    CAMELLIA192 = 12,
    CAMELLIA256 = 13,
}

export namespace ContentEncoding {
    export const $gtype: GObject.GType<ContentEncoding>;
}

export enum ContentEncoding {
    DEFAULT = 0,
    "7BIT" = 1,
    "8BIT" = 2,
    BINARY = 3,
    BASE64 = 4,
    QUOTEDPRINTABLE = 5,
    UUENCODE = 6,
}

export namespace DigestAlgo {
    export const $gtype: GObject.GType<DigestAlgo>;
}

export enum DigestAlgo {
    DEFAULT = 0,
    MD5 = 1,
    SHA1 = 2,
    RIPEMD160 = 3,
    MD2 = 5,
    TIGER192 = 6,
    HAVAL5160 = 7,
    SHA256 = 8,
    SHA384 = 9,
    SHA512 = 10,
    SHA224 = 11,
    MD4 = 301,
    CRC32 = 302,
    CRC32_RFC1510 = 303,
    CRC32_RFC2440 = 304,
}

export namespace EncodingConstraint {
    export const $gtype: GObject.GType<EncodingConstraint>;
}

export enum EncodingConstraint {
    "7BIT" = 0,
    "8BIT" = 1,
    BINARY = 2,
}

export namespace EncryptFlags {
    export const $gtype: GObject.GType<EncryptFlags>;
}

export enum EncryptFlags {
    NONE = 0,
    ALWAYS_TRUST = 1,
    NO_COMPRESS = 16,
    SYMMETRIC = 32,
    THROW_KEYIDS = 64,
}

export namespace FilterFromMode {
    export const $gtype: GObject.GType<FilterFromMode>;
}

export enum FilterFromMode {
    DEFAULT = 0,
    ESCAPE = 0,
    ARMOR = 1,
}

export namespace FilterGZipMode {
    export const $gtype: GObject.GType<FilterGZipMode>;
}

export enum FilterGZipMode {
    ZIP = 0,
    UNZIP = 1,
}

export namespace Format {
    export const $gtype: GObject.GType<Format>;
}

export enum Format {
    MESSAGE = 0,
    MBOX = 1,
    MMDF = 2,
}

export namespace NewLineFormat {
    export const $gtype: GObject.GType<NewLineFormat>;
}

export enum NewLineFormat {
    UNIX = 0,
    DOS = 1,
}

export namespace OpenPGPData {
    export const $gtype: GObject.GType<OpenPGPData>;
}

export enum OpenPGPData {
    NONE = 0,
    ENCRYPTED = 1,
    SIGNED = 2,
    PUBLIC_KEY = 3,
    PRIVATE_KEY = 4,
}

export namespace ParamEncodingMethod {
    export const $gtype: GObject.GType<ParamEncodingMethod>;
}

export enum ParamEncodingMethod {
    DEFAULT = 0,
    RFC2231 = 1,
    RFC2047 = 2,
}

export namespace ParserWarning {
    export const $gtype: GObject.GType<ParserWarning>;
}

export enum ParserWarning {
    WARN_DUPLICATED_HEADER = 1,
    WARN_DUPLICATED_PARAMETER = 2,
    WARN_UNENCODED_8BIT_HEADER = 3,
    WARN_INVALID_CONTENT_TYPE = 4,
    WARN_INVALID_RFC2047_HEADER_VALUE = 5,
    WARN_MALFORMED_MULTIPART = 6,
    WARN_TRUNCATED_MESSAGE = 7,
    WARN_MALFORMED_MESSAGE = 8,
    CRIT_INVALID_HEADER_NAME = 9,
    CRIT_CONFLICTING_HEADER = 10,
    CRIT_CONFLICTING_PARAMETER = 11,
    CRIT_MULTIPART_WITHOUT_BOUNDARY = 12,
    WARN_INVALID_PARAMETER = 13,
    WARN_INVALID_ADDRESS_LIST = 14,
    CRIT_NESTING_OVERFLOW = 15,
}

export namespace PubKeyAlgo {
    export const $gtype: GObject.GType<PubKeyAlgo>;
}

export enum PubKeyAlgo {
    DEFAULT = 0,
    RSA = 1,
    RSA_E = 2,
    RSA_S = 3,
    ELG_E = 16,
    DSA = 17,
    ECC = 18,
    ELG = 20,
    ECDSA = 301,
    ECDH = 302,
    EDDSA = 303,
}

export namespace RfcComplianceMode {
    export const $gtype: GObject.GType<RfcComplianceMode>;
}

export enum RfcComplianceMode {
    LOOSE = 0,
    STRICT = 1,
}

export namespace SecureMimeType {
    export const $gtype: GObject.GType<SecureMimeType>;
}

export enum SecureMimeType {
    COMPRESSED_DATA = 0,
    ENVELOPED_DATA = 1,
    SIGNED_DATA = 2,
    CERTS_ONLY = 3,
    UNKNOWN = 4,
}

export namespace SeekWhence {
    export const $gtype: GObject.GType<SeekWhence>;
}

export enum SeekWhence {
    SET = 0,
    CUR = 1,
    END = 2,
}

export namespace SignatureStatus {
    export const $gtype: GObject.GType<SignatureStatus>;
}

export enum SignatureStatus {
    VALID = 1,
    GREEN = 2,
    RED = 4,
    KEY_REVOKED = 16,
    KEY_EXPIRED = 32,
    SIG_EXPIRED = 64,
    KEY_MISSING = 128,
    CRL_MISSING = 256,
    CRL_TOO_OLD = 512,
    BAD_POLICY = 1024,
    SYS_ERROR = 2048,
    TOFU_CONFLICT = 4096,
}

export namespace StreamBufferMode {
    export const $gtype: GObject.GType<StreamBufferMode>;
}

export enum StreamBufferMode {
    READ = 0,
    WRITE = 1,
}

export namespace Trust {
    export const $gtype: GObject.GType<Trust>;
}

export enum Trust {
    UNKNOWN = 0,
    UNDEFINED = 1,
    NEVER = 2,
    MARGINAL = 3,
    FULL = 4,
    ULTIMATE = 5,
}

export namespace Validity {
    export const $gtype: GObject.GType<Validity>;
}

export enum Validity {
    UNKNOWN = 0,
    UNDEFINED = 1,
    NEVER = 2,
    MARGINAL = 3,
    FULL = 4,
    ULTIMATE = 5,
}

export namespace DecryptFlags {
    export const $gtype: GObject.GType<DecryptFlags>;
}

export enum DecryptFlags {
    NONE = 0,
    EXPORT_SESSION_KEY = 1,
    NO_VERIFY = 2,
    ENABLE_KEYSERVER_LOOKUPS = 32768,
    ENABLE_ONLINE_CERTIFICATE_CHECKS = 32768,
}

export namespace FilterBestFlags {
    export const $gtype: GObject.GType<FilterBestFlags>;
}

export enum FilterBestFlags {
    CHARSET = 1,
    ENCODING = 2,
}

export namespace OpenPGPState {
    export const $gtype: GObject.GType<OpenPGPState>;
}

export enum OpenPGPState {
    NONE = 0,
    BEGIN_PGP_MESSAGE = 1,
    END_PGP_MESSAGE = 3,
    BEGIN_PGP_SIGNED_MESSAGE = 4,
    BEGIN_PGP_SIGNATURE = 12,
    END_PGP_SIGNATURE = 28,
    BEGIN_PGP_PUBLIC_KEY_BLOCK = 32,
    END_PGP_PUBLIC_KEY_BLOCK = 96,
    BEGIN_PGP_PRIVATE_KEY_BLOCK = 128,
    END_PGP_PRIVATE_KEY_BLOCK = 384,
}

export namespace VerifyFlags {
    export const $gtype: GObject.GType<VerifyFlags>;
}

export enum VerifyFlags {
    NONE = 0,
    ENABLE_KEYSERVER_LOOKUPS = 32768,
    ENABLE_ONLINE_CERTIFICATE_CHECKS = 32768,
}

export module ApplicationPkcs7Mime {
    export interface ConstructorProperties extends Part.ConstructorProperties {
        [key: string]: any;
    }
}

export class ApplicationPkcs7Mime extends Part {
    static $gtype: GObject.GType<ApplicationPkcs7Mime>;

    constructor(properties?: Partial<ApplicationPkcs7Mime.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ApplicationPkcs7Mime.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Part | any;
    smime_type: SecureMimeType;

    // Constructors

    static ["new"](type: SecureMimeType): ApplicationPkcs7Mime;
    static ["new"](...args: never[]): never;

    // Members

    decrypt(flags: DecryptFlags, session_key: string, result: DecryptResult): Object | null;

    get_smime_type(): SecureMimeType;

    verify(flags: VerifyFlags): [SignatureList | null, Object];

    static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null;

    static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null;
}

export module AutocryptHeader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AutocryptHeader extends GObject.Object {
    static $gtype: GObject.GType<AutocryptHeader>;

    constructor(properties?: Partial<AutocryptHeader.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AutocryptHeader.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    address: InternetAddressMailbox;
    prefer_encrypt: AutocryptPreferEncrypt;
    keydata: GLib.Bytes;
    effective_date: GLib.DateTime;

    // Constructors

    static ["new"](): AutocryptHeader;

    static new_from_string(string: string): AutocryptHeader;

    // Members

    clone(src: AutocryptHeader): void;

    compare(ah2: AutocryptHeader): number;

    get_address(): InternetAddressMailbox;

    get_address_as_string(): string;

    get_effective_date(): GLib.DateTime;

    get_keydata(): GLib.Bytes;

    get_prefer_encrypt(): AutocryptPreferEncrypt;

    is_complete(): boolean;

    set_address(address: InternetAddressMailbox): void;

    set_address_from_string(address: string): void;

    set_effective_date(effective_date: GLib.DateTime): void;

    set_keydata(data: GLib.Bytes | Uint8Array): void;

    set_prefer_encrypt(pref: AutocryptPreferEncrypt): void;

    to_string(gossip: boolean): string;
}

export module AutocryptHeaderList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AutocryptHeaderList extends GObject.Object {
    static $gtype: GObject.GType<AutocryptHeaderList>;

    constructor(properties?: Partial<AutocryptHeaderList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AutocryptHeaderList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;

    // Constructors

    static ["new"](): AutocryptHeaderList;

    // Members

    add(header: AutocryptHeader): void;

    add_missing_addresses(addresses: InternetAddressList): number;

    get_count(): number;

    get_header_at(index: number): AutocryptHeader;

    get_header_for_address(mailbox: InternetAddressMailbox): AutocryptHeader;

    remove_incomplete(): void;
}

export module Certificate {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Certificate extends GObject.Object {
    static $gtype: GObject.GType<Certificate>;

    constructor(properties?: Partial<Certificate.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Certificate.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    pubkey_algo: PubKeyAlgo;
    digest_algo: DigestAlgo;
    trust: Trust;
    issuer_serial: string;
    issuer_name: string;
    fingerprint: string;
    created: number;
    expires: number;
    keyid: string;
    email: string;
    name: string;
    user_id: string;
    id_validity: Validity;

    // Constructors

    static ["new"](): Certificate;

    // Members

    get_created(): number;

    get_created64(): number;

    get_digest_algo(): DigestAlgo;

    get_email(): string;

    get_expires(): number;

    get_expires64(): number;

    get_fingerprint(): string;

    get_id_validity(): Validity;

    get_issuer_name(): string;

    get_issuer_serial(): string;

    get_key_id(): string;

    get_name(): string;

    get_pubkey_algo(): PubKeyAlgo;

    get_trust(): Trust;

    get_user_id(): string;

    set_created(created: number): void;

    set_digest_algo(algo: DigestAlgo): void;

    set_email(email: string): void;

    set_expires(expires: number): void;

    set_fingerprint(fingerprint: string): void;

    set_id_validity(validity: Validity): void;

    set_issuer_name(issuer_name: string): void;

    set_issuer_serial(issuer_serial: string): void;

    set_key_id(key_id: string): void;

    set_name(name: string): void;

    set_pubkey_algo(algo: PubKeyAlgo): void;

    set_trust(trust: Trust): void;

    set_user_id(user_id: string): void;
}

export module CertificateList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CertificateList extends GObject.Object {
    static $gtype: GObject.GType<CertificateList>;

    constructor(properties?: Partial<CertificateList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CertificateList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    array: any[];

    // Constructors

    static ["new"](): CertificateList;

    // Members

    add(cert: Certificate): number;

    clear(): void;

    contains(cert: Certificate): boolean;

    get_certificate(index: number): Certificate;

    index_of(cert: Certificate): number;

    insert(index: number, cert: Certificate): void;

    length(): number;

    remove(cert: Certificate): boolean;

    remove_at(index: number): boolean;

    set_certificate(index: number, cert: Certificate): void;
}

export module ContentDisposition {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContentDisposition extends GObject.Object {
    static $gtype: GObject.GType<ContentDisposition>;

    constructor(properties?: Partial<ContentDisposition.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContentDisposition.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    disposition: string;
    params: ParamList;

    // Constructors

    static ["new"](): ContentDisposition;

    // Members

    encode(options?: FormatOptions | null): string;

    get_disposition(): string;

    get_parameter(name: string): string;

    get_parameters(): ParamList;

    is_attachment(): boolean;

    set_disposition(value: string): void;

    set_parameter(name: string, value: string): void;

    static parse(options: ParserOptions | null, str: string): ContentDisposition;
}

export module ContentType {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContentType extends GObject.Object {
    static $gtype: GObject.GType<ContentType>;

    constructor(properties?: Partial<ContentType.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContentType.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    type: string;
    subtype: string;
    params: ParamList;

    // Constructors

    static ["new"](type: string, subtype: string): ContentType;

    // Members

    encode(options?: FormatOptions | null): string;

    get_media_subtype(): string;

    get_media_type(): string;

    get_mime_type(): string;

    get_parameter(name: string): string;

    get_parameters(): ParamList;

    is_type(type: string, subtype: string): boolean;

    set_media_subtype(subtype: string): void;

    set_media_type(type: string): void;

    set_parameter(name: string, value: string): void;

    static parse(options: ParserOptions | null, str: string): ContentType;
}

export module CryptoContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CryptoContext extends GObject.Object {
    static $gtype: GObject.GType<CryptoContext>;

    constructor(properties?: Partial<CryptoContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CryptoContext.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    request_passwd: PasswordRequestFunc;

    // Constructors

    static ["new"](protocol: string): CryptoContext;

    // Members

    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult;

    digest_id(name: string): DigestAlgo;

    digest_name(digest: DigestAlgo): string | null;

    encrypt(
        sign: boolean,
        userid: string | null,
        flags: EncryptFlags,
        recipients: string[],
        istream: Stream,
        ostream: Stream
    ): number;

    export_keys(keys: string, ostream: Stream): number;

    get_encryption_protocol(): string | null;

    get_key_exchange_protocol(): string | null;

    get_signature_protocol(): string | null;

    import_keys(istream: Stream): number;

    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number;

    verify(
        flags: VerifyFlags,
        istream: Stream,
        sigstream?: Stream | null,
        ostream?: Stream | null
    ): SignatureList | null;

    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult;

    vfunc_digest_id(name: string): DigestAlgo;

    vfunc_digest_name(digest: DigestAlgo): string | null;

    vfunc_encrypt(
        sign: boolean,
        userid: string | null,
        flags: EncryptFlags,
        recipients: string[],
        istream: Stream,
        ostream: Stream
    ): number;

    vfunc_export_keys(keys: string, ostream: Stream): number;

    vfunc_get_encryption_protocol(): string | null;

    vfunc_get_key_exchange_protocol(): string | null;

    vfunc_get_signature_protocol(): string | null;

    vfunc_import_keys(istream: Stream): number;

    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number;

    vfunc_verify(
        flags: VerifyFlags,
        istream: Stream,
        sigstream?: Stream | null,
        ostream?: Stream | null
    ): SignatureList | null;
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
    parent_object: GObject.Object;
    encoding: ContentEncoding;
    stream: Stream;

    // Constructors

    static ["new"](): DataWrapper;

    static new_with_stream(stream: Stream, encoding: ContentEncoding): DataWrapper;

    // Members

    get_encoding(): ContentEncoding;

    get_stream(): Stream;

    set_encoding(encoding: ContentEncoding): void;

    set_stream(stream: Stream): void;

    write_to_stream(stream: Stream): number;

    vfunc_write_to_stream(stream: Stream): number;
}

export module DecryptResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DecryptResult extends GObject.Object {
    static $gtype: GObject.GType<DecryptResult>;

    constructor(properties?: Partial<DecryptResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DecryptResult.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    recipients: CertificateList;
    signatures: SignatureList;
    cipher: CipherAlgo;
    mdc: DigestAlgo;
    session_key: string;

    // Constructors

    static ["new"](): DecryptResult;

    // Members

    get_cipher(): CipherAlgo;

    get_mdc(): DigestAlgo;

    get_recipients(): CertificateList;

    get_session_key(): string | null;

    get_signatures(): SignatureList | null;

    set_cipher(cipher: CipherAlgo): void;

    set_mdc(mdc: DigestAlgo): void;

    set_recipients(recipients: CertificateList): void;

    set_session_key(session_key?: string | null): void;

    set_signatures(signatures: SignatureList): void;
}

export module Filter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Filter extends GObject.Object {
    static $gtype: GObject.GType<Filter>;

    constructor(properties?: Partial<Filter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Filter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    priv: any;
    outreal: string;
    outbuf: string;
    outptr: string;
    outsize: number;
    outpre: number;
    backbuf: string;
    backsize: number;
    backlen: number;

    // Members

    backup(data: Uint8Array | string): void;

    complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];

    copy(): Filter;

    filter(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];

    reset(): void;

    set_size(size: number, keep: boolean): void;

    vfunc_complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];

    vfunc_copy(): Filter;

    vfunc_filter(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];

    vfunc_reset(): void;
}

export module FilterBasic {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterBasic extends Filter {
    static $gtype: GObject.GType<FilterBasic>;

    constructor(properties?: Partial<FilterBasic.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterBasic.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    encoder: Encoding;

    // Constructors

    static ["new"](encoding: ContentEncoding, encode: boolean): FilterBasic;
}

export module FilterBest {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterBest extends Filter {
    static $gtype: GObject.GType<FilterBest>;

    constructor(properties?: Partial<FilterBest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterBest.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    flags: FilterBestFlags;
    count0: number;
    count8: number;
    total: number;
    maxline: number;
    linelen: number;
    frombuf: Uint8Array;
    fromlen: number;
    hadfrom: number;
    startline: number;
    midline: number;

    // Constructors

    static ["new"](flags: FilterBestFlags): FilterBest;

    // Members

    charset(): string;

    encoding(constraint: EncodingConstraint): ContentEncoding;
}

export module FilterCharset {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterCharset extends Filter {
    static $gtype: GObject.GType<FilterCharset>;

    constructor(properties?: Partial<FilterCharset.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterCharset.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    from_charset: string;
    to_charset: string;

    // Constructors

    static ["new"](from_charset: string, to_charset: string): FilterCharset;
}

export module FilterChecksum {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterChecksum extends Filter {
    static $gtype: GObject.GType<FilterChecksum>;

    constructor(properties?: Partial<FilterChecksum.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterChecksum.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    checksum: GLib.Checksum;

    // Constructors

    static ["new"](type: GLib.ChecksumType): FilterChecksum;

    // Members

    get_digest(digest: number, len: number): number;

    get_string(): string;
}

export module FilterDos2Unix {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterDos2Unix extends Filter {
    static $gtype: GObject.GType<FilterDos2Unix>;

    constructor(properties?: Partial<FilterDos2Unix.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterDos2Unix.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    ensure_newline: boolean;
    pc: number;

    // Constructors

    static ["new"](ensure_newline: boolean): FilterDos2Unix;
}

export module FilterEnriched {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterEnriched extends Filter {
    static $gtype: GObject.GType<FilterEnriched>;

    constructor(properties?: Partial<FilterEnriched.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterEnriched.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    flags: number;
    nofill: number;

    // Constructors

    static ["new"](flags: number): FilterEnriched;
}

export module FilterFrom {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterFrom extends Filter {
    static $gtype: GObject.GType<FilterFrom>;

    constructor(properties?: Partial<FilterFrom.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterFrom.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    mode: FilterFromMode;
    midline: boolean;

    // Constructors

    static ["new"](mode: FilterFromMode): FilterFrom;
}

export module FilterGZip {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterGZip extends Filter {
    static $gtype: GObject.GType<FilterGZip>;

    constructor(properties?: Partial<FilterGZip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterGZip.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    priv: any;
    mode: FilterGZipMode;
    level: number;

    // Constructors

    static ["new"](mode: FilterGZipMode, level: number): FilterGZip;

    // Members

    get_comment(): string;

    get_filename(): string;

    set_comment(comment: string): void;

    set_filename(filename: string): void;
}

export module FilterHTML {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterHTML extends Filter {
    static $gtype: GObject.GType<FilterHTML>;

    constructor(properties?: Partial<FilterHTML.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterHTML.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    scanner: any;
    flags: number;
    colour: number;
    column: number;
    pre_open: number;
    citation_depth: number;

    // Constructors

    static ["new"](flags: number, colour: number): FilterHTML;
}

export module FilterOpenPGP {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterOpenPGP extends Filter {
    static $gtype: GObject.GType<FilterOpenPGP>;

    constructor(properties?: Partial<FilterOpenPGP.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterOpenPGP.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;

    // Constructors

    static ["new"](): FilterOpenPGP;

    // Members

    get_begin_offset(): number;

    get_data_type(): OpenPGPData;

    get_end_offset(): number;
}

export module FilterSmtpData {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterSmtpData extends Filter {
    static $gtype: GObject.GType<FilterSmtpData>;

    constructor(properties?: Partial<FilterSmtpData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterSmtpData.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    bol: boolean;

    // Constructors

    static ["new"](): FilterSmtpData;
}

export module FilterStrip {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterStrip extends Filter {
    static $gtype: GObject.GType<FilterStrip>;

    constructor(properties?: Partial<FilterStrip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterStrip.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;

    // Constructors

    static ["new"](): FilterStrip;
}

export module FilterUnix2Dos {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterUnix2Dos extends Filter {
    static $gtype: GObject.GType<FilterUnix2Dos>;

    constructor(properties?: Partial<FilterUnix2Dos.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterUnix2Dos.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    ensure_newline: boolean;
    pc: number;

    // Constructors

    static ["new"](ensure_newline: boolean): FilterUnix2Dos;
}

export module FilterWindows {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterWindows extends Filter {
    static $gtype: GObject.GType<FilterWindows>;

    constructor(properties?: Partial<FilterWindows.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterWindows.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    is_windows: boolean;
    claimed_charset: string;

    // Constructors

    static ["new"](claimed_charset: string): FilterWindows;

    // Members

    is_windows_charset(): boolean;

    real_charset(): string;
}

export module FilterYenc {
    export interface ConstructorProperties extends Filter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FilterYenc extends Filter {
    static $gtype: GObject.GType<FilterYenc>;

    constructor(properties?: Partial<FilterYenc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterYenc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Filter | any;
    encode: boolean;
    part: number;
    state: number;
    pcrc: number;
    crc: number;

    // Constructors

    static ["new"](encode: boolean): FilterYenc;

    // Members

    get_crc(): number;

    get_pcrc(): number;

    set_crc(crc: number): void;

    set_state(state: number): void;
}

export module GpgContext {
    export interface ConstructorProperties extends CryptoContext.ConstructorProperties {
        [key: string]: any;
    }
}

export class GpgContext extends CryptoContext {
    static $gtype: GObject.GType<GpgContext>;

    constructor(properties?: Partial<GpgContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GpgContext.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): GpgContext;
    static ["new"](...args: never[]): never;
}

export module Header {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Header extends GObject.Object {
    static $gtype: GObject.GType<Header>;

    constructor(properties?: Partial<Header.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Header.ConstructorProperties>, ...args: any[]): void;

    // Members

    format_addrlist(options: FormatOptions | null, value: string, charset: string): string;

    format_content_disposition(options: FormatOptions | null, value: string, charset: string): string;

    format_content_type(options: FormatOptions | null, value: string, charset: string): string;

    format_default(options: FormatOptions | null, value: string, charset: string): string;

    format_message_id(options: FormatOptions | null, value: string, charset: string): string;

    format_received(options: FormatOptions | null, value: string, charset: string): string;

    format_references(options: FormatOptions | null, value: string, charset: string): string;

    get_name(): string;

    get_offset(): number;

    get_raw_name(): string;

    get_raw_value(): string;

    get_value(): string;

    set_raw_value(raw_value: string): void;

    set_value(options: FormatOptions | null, value: string, charset: string): void;

    write_to_stream(options: FormatOptions | null, stream: Stream): number;
}

export module HeaderList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HeaderList extends GObject.Object {
    static $gtype: GObject.GType<HeaderList>;

    constructor(properties?: Partial<HeaderList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HeaderList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;

    // Constructors

    static ["new"](options?: ParserOptions | null): HeaderList;

    // Members

    append(name: string, value: string, charset: string): void;

    clear(): void;

    contains(name: string): boolean;

    get_count(): number;

    get_header(name: string): Header;

    get_header_at(index: number): Header;

    prepend(name: string, value: string, charset: string): void;

    remove(name: string): boolean;

    remove_at(index: number): void;

    set(name: string, value: string, charset: string): void;
    set(...args: never[]): never;

    to_string(options?: FormatOptions | null): string;

    write_to_stream(options: FormatOptions | null, stream: Stream): number;
}

export module InternetAddress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class InternetAddress extends GObject.Object {
    static $gtype: GObject.GType<InternetAddress>;

    constructor(properties?: Partial<InternetAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InternetAddress.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    charset: string;
    name: string;

    // Members

    get_charset(): string | null;

    get_name(): string | null;

    set_charset(charset?: string | null): void;

    set_name(name: string): void;

    to_string(options: FormatOptions | null, encode: boolean): string;

    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void;
}

export module InternetAddressGroup {
    export interface ConstructorProperties extends InternetAddress.ConstructorProperties {
        [key: string]: any;
    }
}

export class InternetAddressGroup extends InternetAddress {
    static $gtype: GObject.GType<InternetAddressGroup>;

    constructor(properties?: Partial<InternetAddressGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InternetAddressGroup.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: InternetAddress | any;
    members: InternetAddressList;

    // Constructors

    static ["new"](name: string): InternetAddressGroup;

    // Members

    add_member(member: InternetAddress): number;

    get_members(): InternetAddressList;

    set_members(members: InternetAddressList): void;
}

export module InternetAddressList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class InternetAddressList extends GObject.Object {
    static $gtype: GObject.GType<InternetAddressList>;

    constructor(properties?: Partial<InternetAddressList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InternetAddressList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    array: any[];

    // Constructors

    static ["new"](): InternetAddressList;

    // Members

    add(ia: InternetAddress): number;

    append(append: InternetAddressList): void;

    clear(): void;

    contains(ia: InternetAddress): boolean;

    encode(options: FormatOptions | null, str: GLib.String): void;

    get_address(index: number): InternetAddress;

    index_of(ia: InternetAddress): number;

    insert(index: number, ia: InternetAddress): void;

    length(): number;

    prepend(prepend: InternetAddressList): void;

    remove(ia: InternetAddress): boolean;

    remove_at(index: number): boolean;

    set_address(index: number, ia: InternetAddress): void;

    to_string(options: FormatOptions | null, encode: boolean): string | null;

    static parse(options: ParserOptions | null, str: string): InternetAddressList | null;
}

export module InternetAddressMailbox {
    export interface ConstructorProperties extends InternetAddress.ConstructorProperties {
        [key: string]: any;
    }
}

export class InternetAddressMailbox extends InternetAddress {
    static $gtype: GObject.GType<InternetAddressMailbox>;

    constructor(properties?: Partial<InternetAddressMailbox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InternetAddressMailbox.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: InternetAddress | any;
    idn_addr: string;
    addr: string;
    at: number;

    // Constructors

    static ["new"](name: string, addr: string): InternetAddressMailbox;

    // Members

    get_addr(): string;

    get_idn_addr(): string;

    set_addr(addr: string): void;
}

export module Message {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Message extends Object {
    static $gtype: GObject.GType<Message>;

    constructor(properties?: Partial<Message.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Message.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Object | any;
    addrlists: InternetAddressList;
    mime_part: Object;
    message_id: string;
    date: GLib.DateTime;
    subject: string;

    // Constructors

    static ["new"](pretty_headers: boolean): Message;
    static ["new"](...args: never[]): never;

    // Members

    add_mailbox(type: AddressType, name: string, addr: string): void;

    foreach(callback: ObjectForeachFunc): void;

    get_addresses(type: AddressType): InternetAddressList;

    get_all_recipients(): InternetAddressList;

    get_autocrypt_gossip_headers(now: GLib.DateTime, flags: DecryptFlags, session_key: string): AutocryptHeaderList;

    get_autocrypt_gossip_headers_from_inner_part(now: GLib.DateTime, inner_part: Object): AutocryptHeaderList;

    get_autocrypt_header(now: GLib.DateTime): AutocryptHeader;

    get_bcc(): InternetAddressList;

    get_body(): Object;

    get_cc(): InternetAddressList;

    get_date(): GLib.DateTime;

    get_from(): InternetAddressList;

    get_message_id(): string;

    get_mime_part(): Object;

    get_reply_to(): InternetAddressList;

    get_sender(): InternetAddressList;

    get_subject(): string;

    get_to(): InternetAddressList;

    partial_split_message(max_size: number): [Message | null, number];

    set_date(date: GLib.DateTime): void;

    set_message_id(message_id: string): void;

    set_mime_part(mime_part: Object): void;

    set_subject(subject: string, charset: string): void;
}

export module MessagePart {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MessagePart extends Object {
    static $gtype: GObject.GType<MessagePart>;

    constructor(properties?: Partial<MessagePart.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessagePart.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Object | any;
    message: Message;

    // Constructors

    static ["new"](subtype: string): MessagePart;
    static ["new"](...args: never[]): never;

    static new_with_message(subtype: string, message: Message): MessagePart;

    // Members

    get_message(): Message;

    set_message(message: Message): void;
}

export module MessagePartial {
    export interface ConstructorProperties extends Part.ConstructorProperties {
        [key: string]: any;
    }
}

export class MessagePartial extends Part {
    static $gtype: GObject.GType<MessagePartial>;

    constructor(properties?: Partial<MessagePartial.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessagePartial.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Part | any;
    number: number;
    total: number;
    id: string;

    // Constructors

    static ["new"](id: string, number: number, total: number): MessagePartial;
    static ["new"](...args: never[]): never;

    // Members

    get_id(): string;

    get_number(): number;

    get_total(): number;

    static reconstruct_message(partials: MessagePartial, num: number): Message;
}

export module Multipart {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Multipart extends Object {
    static $gtype: GObject.GType<Multipart>;

    constructor(properties?: Partial<Multipart.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Multipart.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Object | any;
    children: any[];
    boundary: string;
    prologue: string;
    epilogue: string;

    // Constructors

    static ["new"](): Multipart;
    static ["new"](...args: never[]): never;

    static new_with_subtype(subtype: string): Multipart;

    // Members

    add(part: Object): void;

    clear(): void;

    contains(part: Object): boolean;

    foreach(callback: ObjectForeachFunc): void;

    get_boundary(): string;

    get_count(): number;

    get_epilogue(): string;

    get_part(index: number): Object;

    get_prologue(): string;

    get_subpart_from_content_id(content_id: string): Object;

    index_of(part: Object): number;

    insert(index: number, part: Object): void;

    remove(part: Object): boolean;

    remove_at(index: number): Object;

    replace(index: number, replacement: Object): Object;

    set_boundary(boundary: string): void;

    set_epilogue(epilogue: string): void;

    set_prologue(prologue: string): void;

    vfunc_add(part: Object): void;

    vfunc_clear(): void;

    vfunc_contains(part: Object): boolean;

    vfunc_get_boundary(): string;

    vfunc_get_count(): number;

    vfunc_get_part(index: number): Object;

    vfunc_index_of(part: Object): number;

    vfunc_insert(index: number, part: Object): void;

    vfunc_remove(part: Object): boolean;

    vfunc_remove_at(index: number): Object;

    vfunc_set_boundary(boundary: string): void;
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
    parent_object: Multipart | any;

    // Constructors

    static ["new"](): MultipartEncrypted;
    static ["new"](...args: never[]): never;

    // Members

    decrypt(flags: DecryptFlags, session_key: string): [Object | null, DecryptResult];

    static encrypt(
        ctx: CryptoContext,
        entity: Object,
        sign: boolean,
        userid: string | null,
        flags: EncryptFlags,
        recipients: string[]
    ): MultipartEncrypted | null;
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
    parent_object: Multipart | any;

    // Constructors

    static ["new"](): MultipartSigned;
    static ["new"](...args: never[]): never;

    // Members

    verify(flags: VerifyFlags): SignatureList | null;

    static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null;
}

export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    disposition: ContentDisposition;
    content_type: ContentType;
    headers: HeaderList;
    content_id: string;

    // Constructors

    static ["new"](options: ParserOptions | null, content_type: ContentType): Object;

    static new_type(options: ParserOptions | null, type: string, subtype: string): Object;

    // Members

    append_header(header: string, value: string, charset: string): void;

    encode(constraint: EncodingConstraint): void;

    get_content_disposition(): ContentDisposition;

    get_content_disposition_parameter(name: string): string;

    get_content_id(): string;

    get_content_type(): ContentType;

    get_content_type_parameter(name: string): string;

    get_disposition(): string;

    get_header(header: string): string;

    get_header_list(): HeaderList;

    get_headers(options?: FormatOptions | null): string;

    prepend_header(header: string, value: string, charset: string): void;

    remove_header(header: string): boolean;

    set_content_disposition(disposition: ContentDisposition): void;

    set_content_disposition_parameter(name: string, value: string): void;

    set_content_id(content_id: string): void;

    set_content_type(content_type: ContentType): void;

    set_content_type_parameter(name: string, value: string): void;

    set_disposition(disposition: string): void;

    set_header(header: string, value: string, charset: string): void;

    to_string(options?: FormatOptions | null): string;

    write_to_stream(options: FormatOptions | null, stream: Stream): number;

    vfunc_encode(constraint: EncodingConstraint): void;

    vfunc_get_headers(options?: FormatOptions | null): string;

    vfunc_header_added(header: Header): void;

    vfunc_header_changed(header: Header): void;

    vfunc_header_removed(header: Header): void;

    vfunc_headers_cleared(): void;

    vfunc_set_content_type(content_type: ContentType): void;

    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number;

    static register_type(type: string, subtype: string, object_type: GObject.GType): void;

    static type_registry_init(): void;

    static type_registry_shutdown(): void;
}

export module Param {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Param extends GObject.Object {
    static $gtype: GObject.GType<Param>;

    constructor(properties?: Partial<Param.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Param.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    method: ParamEncodingMethod;
    charset: string;
    lang: string;
    name: string;
    value: string;

    // Members

    get_charset(): string;

    get_encoding_method(): ParamEncodingMethod;

    get_lang(): string;

    get_name(): string;

    get_value(): string;

    set_charset(charset: string): void;

    set_encoding_method(method: ParamEncodingMethod): void;

    set_lang(lang: string): void;

    set_value(value: string): void;
}

export module ParamList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamList extends GObject.Object {
    static $gtype: GObject.GType<ParamList>;

    constructor(properties?: Partial<ParamList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamList.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ParamList;

    // Members

    clear(): void;

    encode(options: FormatOptions, fold: boolean, str: GLib.String): void;

    get_parameter(name: string): Param;

    get_parameter_at(index: number): Param;

    length(): number;

    remove(name: string): boolean;

    remove_at(index: number): boolean;

    set_parameter(name: string, value: string): void;

    static parse(options: ParserOptions, str: string): ParamList;
}

export module Parser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Parser extends GObject.Object {
    static $gtype: GObject.GType<Parser>;

    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    priv: any;

    // Constructors

    static ["new"](): Parser;

    static new_with_stream(stream: Stream): Parser;

    // Members

    construct_message(options?: ParserOptions | null): Message | null;

    construct_part(options?: ParserOptions | null): Object | null;

    eos(): boolean;

    get_format(): Format;

    get_headers_begin(): number;

    get_headers_end(): number;

    get_mbox_marker(): string | null;

    get_mbox_marker_offset(): number;

    get_persist_stream(): boolean;

    get_respect_content_length(): boolean;

    init_with_stream(stream: Stream): void;

    set_format(format: Format): void;

    set_persist_stream(persist: boolean): void;

    set_respect_content_length(respect_content_length: boolean): void;

    tell(): number;
}

export module Part {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Part extends Object {
    static $gtype: GObject.GType<Part>;

    constructor(properties?: Partial<Part.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Part.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Object | any;
    encoding: ContentEncoding;
    openpgp: OpenPGPData;
    content_description: string;
    content_location: string;
    content_md5: string;
    content: DataWrapper;

    // Constructors

    static ["new"](): Part;
    static ["new"](...args: never[]): never;

    static new_with_type(type: string, subtype: string): Part;

    // Members

    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding;

    get_content(): DataWrapper;

    get_content_description(): string;

    get_content_encoding(): ContentEncoding;

    get_content_id(): string;

    get_content_location(): string;

    get_content_md5(): string;

    get_filename(): string;

    get_openpgp_data(): OpenPGPData;

    is_attachment(): boolean;

    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null;

    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean;

    openpgp_sign(userid: string): boolean;

    openpgp_verify(flags: VerifyFlags): SignatureList | null;

    set_content(content: DataWrapper): void;

    set_content_description(description: string): void;

    set_content_encoding(encoding: ContentEncoding): void;

    set_content_id(content_id: string): void;

    set_content_location(content_location: string): void;

    set_content_md5(content_md5: string): void;

    set_filename(filename: string): void;

    set_openpgp_data(data: OpenPGPData): void;

    verify_content_md5(): boolean;

    vfunc_set_content(content: DataWrapper): void;
}

export module Pkcs7Context {
    export interface ConstructorProperties extends CryptoContext.ConstructorProperties {
        [key: string]: any;
    }
}

export class Pkcs7Context extends CryptoContext {
    static $gtype: GObject.GType<Pkcs7Context>;

    constructor(properties?: Partial<Pkcs7Context.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Pkcs7Context.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Pkcs7Context;
    static ["new"](...args: never[]): never;
}

export module Signature {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Signature extends GObject.Object {
    static $gtype: GObject.GType<Signature>;

    constructor(properties?: Partial<Signature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Signature.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    status: SignatureStatus;
    cert: Certificate;
    created: number;
    expires: number;

    // Constructors

    static ["new"](): Signature;

    // Members

    get_certificate(): Certificate;

    get_created(): number;

    get_created64(): number;

    get_expires(): number;

    get_expires64(): number;

    get_status(): SignatureStatus;

    set_certificate(cert: Certificate): void;

    set_created(created: number): void;

    set_expires(expires: number): void;

    set_status(status: SignatureStatus): void;
}

export module SignatureList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SignatureList extends GObject.Object {
    static $gtype: GObject.GType<SignatureList>;

    constructor(properties?: Partial<SignatureList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SignatureList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;

    // Constructors

    static ["new"](): SignatureList;

    // Members

    add(sig: Signature): number;

    clear(): void;

    contains(sig: Signature): boolean;

    get_signature(index: number): Signature;

    index_of(sig: Signature): number;

    insert(index: number, sig: Signature): void;

    length(): number;

    remove(sig: Signature): boolean;

    remove_at(index: number): boolean;

    set_signature(index: number, sig: Signature): void;
}

export module Stream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Stream extends GObject.Object {
    static $gtype: GObject.GType<Stream>;

    constructor(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]): void;

    // Members

    buffer_gets(buf: string, max: number): number;

    buffer_readln(buffer: Uint8Array | string): void;

    close(): number;

    construct(start: number, end: number): void;

    eos(): boolean;

    flush(): number;

    length(): number;

    read(buf: Uint8Array | string): number;

    reset(): number;

    seek(offset: number, whence: SeekWhence): number;

    set_bounds(start: number, end: number): void;

    substream(start: number, end: number): Stream;

    tell(): number;

    write(buf: string, len: number): number;

    write_string(str: string): number;

    write_to_stream(dest: Stream): number;

    writev(vector: StreamIOVector, count: number): number;

    vfunc_close(): number;

    vfunc_eos(): boolean;

    vfunc_flush(): number;

    vfunc_length(): number;

    vfunc_read(buf: Uint8Array | string): number;

    vfunc_reset(): number;

    vfunc_seek(offset: number, whence: SeekWhence): number;

    vfunc_substream(start: number, end: number): Stream;

    vfunc_tell(): number;

    vfunc_write(buf: string, len: number): number;
}

export module StreamBuffer {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamBuffer extends Stream {
    static $gtype: GObject.GType<StreamBuffer>;

    constructor(properties?: Partial<StreamBuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamBuffer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    mode: StreamBufferMode;
    source: Stream;
    buffer: string;
    bufptr: string;
    bufend: string;
    buflen: number;

    // Constructors

    static ["new"](source: Stream, mode: StreamBufferMode): StreamBuffer;
}

export module StreamCat {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamCat extends Stream {
    static $gtype: GObject.GType<StreamCat>;

    constructor(properties?: Partial<StreamCat.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamCat.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    sources: any;
    current: any;

    // Constructors

    static ["new"](): StreamCat;

    // Members

    add_source(source: Stream): number;
}

export module StreamFile {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamFile extends Stream {
    static $gtype: GObject.GType<StreamFile>;

    constructor(properties?: Partial<StreamFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamFile.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    owner: boolean;
    fp: any;

    // Constructors

    static ["new"](fp?: any | null): StreamFile;

    static new_with_bounds(fp: any | null, start: number, end: number): StreamFile;

    // Members

    get_owner(): boolean;

    set_owner(owner: boolean): void;

    static open(path: string, mode: string): Stream;
}

export module StreamFilter {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamFilter extends Stream {
    static $gtype: GObject.GType<StreamFilter>;

    constructor(properties?: Partial<StreamFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    priv: any;
    source: Stream;
    owner: boolean;

    // Constructors

    static ["new"](stream: Stream): StreamFilter;

    // Members

    add(filter: Filter): number;

    get_owner(): boolean;

    remove(id: number): void;

    set_owner(owner: boolean): void;
}

export module StreamFs {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamFs extends Stream {
    static $gtype: GObject.GType<StreamFs>;

    constructor(properties?: Partial<StreamFs.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamFs.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    owner: boolean;
    eos: boolean | any;
    fd: number;

    // Constructors

    static ["new"](fd: number): StreamFs;

    static new_with_bounds(fd: number, start: number, end: number): StreamFs;

    // Members

    get_owner(): boolean;

    set_owner(owner: boolean): void;

    static open(path: string, flags: number, mode: number): Stream;
}

export module StreamGIO {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamGIO extends Stream {
    static $gtype: GObject.GType<StreamGIO>;

    constructor(properties?: Partial<StreamGIO.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamGIO.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    ostream: Gio.OutputStream;
    istream: Gio.InputStream;
    file: Gio.File;
    owner: boolean;
    eos: boolean | any;

    // Constructors

    static ["new"](file: Gio.File): StreamGIO;

    static new_with_bounds(file: Gio.File, start: number, end: number): StreamGIO;

    // Members

    get_owner(): boolean;

    set_owner(owner: boolean): void;
}

export module StreamMem {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamMem extends Stream {
    static $gtype: GObject.GType<StreamMem>;

    constructor(properties?: Partial<StreamMem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamMem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    buffer: Uint8Array;
    owner: boolean;

    // Constructors

    static ["new"](): StreamMem;

    static new_with_buffer(buffer: Uint8Array | string): StreamMem;

    static new_with_byte_array(array: Uint8Array | string): StreamMem;

    // Members

    get_byte_array(): Uint8Array;

    get_owner(): boolean;

    set_byte_array(array: Uint8Array | string): void;

    set_owner(owner: boolean): void;
}

export module StreamMmap {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamMmap extends Stream {
    static $gtype: GObject.GType<StreamMmap>;

    constructor(properties?: Partial<StreamMmap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamMmap.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    owner: boolean;
    eos: boolean | any;
    fd: number;
    map: string;
    maplen: number;

    // Constructors

    static ["new"](fd: number, prot: number, flags: number): StreamMmap;

    static new_with_bounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap;

    // Members

    get_owner(): boolean;

    set_owner(owner: boolean): void;
}

export module StreamNull {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamNull extends Stream {
    static $gtype: GObject.GType<StreamNull>;

    constructor(properties?: Partial<StreamNull.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamNull.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    written: number;
    newlines: number;
    count_newlines: boolean;

    // Constructors

    static ["new"](): StreamNull;

    // Members

    get_count_newlines(): boolean;

    set_count_newlines(count: boolean): void;
}

export module StreamPipe {
    export interface ConstructorProperties extends Stream.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamPipe extends Stream {
    static $gtype: GObject.GType<StreamPipe>;

    constructor(properties?: Partial<StreamPipe.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamPipe.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Stream;
    owner: boolean;
    eos: boolean | any;
    fd: number;

    // Constructors

    static ["new"](fd: number): StreamPipe;

    // Members

    get_owner(): boolean;

    set_owner(owner: boolean): void;
}

export module TextPart {
    export interface ConstructorProperties extends Part.ConstructorProperties {
        [key: string]: any;
    }
}

export class TextPart extends Part {
    static $gtype: GObject.GType<TextPart>;

    constructor(properties?: Partial<TextPart.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextPart.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Part | any;

    // Constructors

    static ["new"](): TextPart;
    static ["new"](...args: never[]): never;

    static new_with_subtype(subtype: string): TextPart;

    // Members

    get_charset(): string;

    get_text(): string;

    set_charset(charset: string): void;

    set_text(text: string): void;
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
    best_name(): string | null;

    can_encode(charset: string, text: string, len: number): boolean;

    init(): void;

    step(inbuf: string, inlen: number): void;

    static best(inbuf: string, inlen: number): string | null;

    static canon_name(charset: string): string;

    static iconv_name(charset: string): string;

    static iso_to_windows(isocharset: string): string;

    static language(charset: string): string | null;

    static locale_name(): string;

    static map_init(): void;

    static map_shutdown(): void;

    static name(charset: string): string;
}

export class Encoding {
    static $gtype: GObject.GType<Encoding>;

    constructor(copy: Encoding);

    // Fields
    encoding: ContentEncoding;
    uubuf: Uint8Array;
    encode: boolean;
    save: number;
    state: number;

    // Members
    flush(inbuf: string, inlen: number, outbuf: string): number;

    init_decode(encoding: ContentEncoding): void;

    init_encode(encoding: ContentEncoding): void;

    outlen(inlen: number): number;

    reset(): void;

    step(inbuf: string, inlen: number, outbuf: string): number;

    static base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;

    static uuencode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        uubuf: number,
        state: number,
        save: number
    ): number;

    static uuencode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        uubuf: number,
        state: number,
        save: number
    ): number;
}

export class FormatOptions {
    static $gtype: GObject.GType<FormatOptions>;

    constructor();
    constructor(copy: FormatOptions);

    // Constructors
    static ["new"](): FormatOptions;

    // Members
    add_hidden_header(header: string): void;

    clear_hidden_headers(): void;

    clone(): FormatOptions;

    create_newline_filter(ensure_newline: boolean): Filter;

    free(): void;

    get_newline(): string;

    get_newline_format(): NewLineFormat;

    get_param_encoding_method(): ParamEncodingMethod;

    is_hidden_header(header: string): boolean;

    remove_hidden_header(header: string): void;

    set_newline_format(newline: NewLineFormat): void;

    set_param_encoding_method(method: ParamEncodingMethod): void;

    static get_default(): FormatOptions;
}

export class OpenPGPMarker {
    static $gtype: GObject.GType<OpenPGPMarker>;

    constructor(copy: OpenPGPMarker);

    // Fields
    marker: string;
    len: number;
    before: OpenPGPState;
    after: OpenPGPState;
    is_end_marker: boolean;
}

export class ParserOptions {
    static $gtype: GObject.GType<ParserOptions>;

    constructor();
    constructor(copy: ParserOptions);

    // Constructors
    static ["new"](): ParserOptions;

    // Members
    clone(): ParserOptions;

    free(): void;

    get_address_compliance_mode(): RfcComplianceMode;

    get_allow_addresses_without_domain(): boolean;

    get_fallback_charsets(): string[];

    get_parameter_compliance_mode(): RfcComplianceMode;

    get_rfc2047_compliance_mode(): RfcComplianceMode;

    set_address_compliance_mode(mode: RfcComplianceMode): void;

    set_allow_addresses_without_domain(allow: boolean): void;

    set_fallback_charsets(charsets: string): void;

    set_parameter_compliance_mode(mode: RfcComplianceMode): void;

    set_rfc2047_compliance_mode(mode: RfcComplianceMode): void;

    static get_default(): ParserOptions;
}

export class PartIter {
    static $gtype: GObject.GType<PartIter>;

    constructor(toplevel: Object);
    constructor(copy: PartIter);

    // Constructors
    static ["new"](toplevel: Object): PartIter;

    // Members
    clone(): PartIter;

    free(): void;

    get_current(): Object;

    get_parent(): Object;

    get_path(): string;

    get_toplevel(): Object;

    is_valid(): boolean;

    jump_to(path: string): boolean;

    next(): boolean;

    prev(): boolean;

    remove(): boolean;

    replace(replacement: Object): boolean;

    reset(): void;
}

export class References {
    static $gtype: GObject.GType<References>;

    constructor();
    constructor(copy: References);

    // Fields
    array: any[];

    // Constructors
    static ["new"](): References;

    // Members
    append(msgid: string): void;

    clear(): void;

    copy(): References;

    free(): void;

    get_message_id(index: number): string;

    length(): number;

    set_message_id(index: number, msgid: string): void;

    static parse(options: ParserOptions | null, text: string): References;
}

export class StreamIOVector {
    static $gtype: GObject.GType<StreamIOVector>;

    constructor(
        properties?: Partial<{
            data?: any;
            len?: number;
        }>
    );
    constructor(copy: StreamIOVector);

    // Fields
    data: any;
    len: number;
}
