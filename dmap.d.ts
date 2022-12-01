/**
 * DMAP 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Soup from './soup';
import * as Gio from './gio';
import * as GLib from './glib';

export const HASH_SIZE: number;
export const STATUS_OK: number;

export function content_code_dmap_type(code: ContentCode): Type;

export function content_code_name(code: ContentCode): string;

export function content_code_read_from_buffer(buf: string): ContentCode;

export function content_code_string(code: ContentCode): string;

export function content_code_string_as_int32(str: string): number;

export function content_codes(number: number): ContentCodeDefinition;

export function hash_generate(
    version_major: number,
    url: number,
    hash_select: number,
    out: number,
    request_id: number
): void;

export function hash_progressive_final(context: HashContext, digest: number): void;

export function hash_progressive_init(context: HashContext): void;

export function hash_progressive_to_string(digest: number, string: string): void;

export function hash_progressive_update(context: HashContext, buffer: number, length: number): void;

export function mdns_browser_error_quark(): GLib.Quark;

export function mdns_publisher_error_quark(): GLib.Quark;

export function mime_to_format(transcode_mimetype: string): string;

export function structure_destroy(structure: GLib.Node): void;

export function structure_get_size(structure: GLib.Node): number;

export function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void;

export function structure_print(structure: GLib.Node): void;

export function structure_serialize(structure: GLib.Node, length: number): string;

export type ConnectionCallback = (connection: Connection, result: boolean, reason: string) => boolean;
export type ResponseHandler = (connection: Connection, status: number, structure: GLib.Node) => void;

export namespace ConnectionState {
    export const $gtype: GObject.GType<ConnectionState>;
}

export enum ConnectionState {
    GET_INFO = 0,
    LOGIN = 1,
    GET_REVISION_NUMBER = 2,
    GET_DB_INFO = 3,
    GET_SONGS = 4,
    GET_PLAYLISTS = 5,
    GET_PLAYLIST_ENTRIES = 6,
    LOGOUT = 7,
    DONE = 8,
}

export namespace ContentCode {
    export const $gtype: GObject.GType<ContentCode>;
}

export enum ContentCode {
    CC_INVALID = 0,
    RAW = 1,
    CC_MDCL = 2,
    CC_MSTT = 3,
    CC_MIID = 4,
    CC_MINM = 5,
    CC_MIKD = 6,
    CC_MPER = 7,
    CC_MCON = 8,
    CC_MCTI = 9,
    CC_MPCO = 10,
    CC_MSTS = 11,
    CC_MIMC = 12,
    CC_MCTC = 13,
    CC_MRCO = 14,
    CC_MTCO = 15,
    CC_MLCL = 16,
    CC_MLIT = 17,
    CC_MBCL = 18,
    CC_MSRV = 19,
    CC_MSAU = 20,
    CC_MSLR = 21,
    CC_MPRO = 22,
    CC_MSAL = 23,
    CC_MSUP = 24,
    CC_MSPI = 25,
    CC_MSEX = 26,
    CC_MSBR = 27,
    CC_MSQY = 28,
    CC_MSIX = 29,
    CC_MSRS = 30,
    CC_MSTM = 31,
    CC_MSDC = 32,
    CC_MCCR = 33,
    CC_MCNM = 34,
    CC_MCNA = 35,
    CC_MCTY = 36,
    CC_MLOG = 37,
    CC_MLID = 38,
    CC_MUPD = 39,
    CC_MUSR = 40,
    CC_MUTY = 41,
    CC_MUDL = 42,
    CC_MSMA = 43,
    CC_FQUESCH = 44,
    CC_APRO = 45,
    CC_AVDB = 46,
    CC_ABRO = 47,
    CC_ABAL = 48,
    CC_ABAR = 49,
    CC_ABCP = 50,
    CC_ABGN = 51,
    CC_ADBS = 52,
    CC_ASAL = 53,
    CC_ASAI = 54,
    CC_ASAA = 55,
    CC_ASAR = 56,
    CC_ASBT = 57,
    CC_ASBR = 58,
    CC_ASCM = 59,
    CC_ASCO = 60,
    CC_ASDA = 61,
    CC_ASDM = 62,
    CC_ASDC = 63,
    CC_ASDN = 64,
    CC_ASDB = 65,
    CC_ASEQ = 66,
    CC_ASFM = 67,
    CC_ASGN = 68,
    CC_ASDT = 69,
    CC_ASRV = 70,
    CC_ASSR = 71,
    CC_ASSZ = 72,
    CC_ASST = 73,
    CC_ASSP = 74,
    CC_ASTM = 75,
    CC_ASTC = 76,
    CC_ASTN = 77,
    CC_ASUR = 78,
    CC_ASYR = 79,
    CC_ASDK = 80,
    CC_ASUL = 81,
    CC_ASSU = 82,
    CC_ASSA = 83,
    CC_APLY = 84,
    CC_ABPL = 85,
    CC_APSO = 86,
    CC_PRSV = 87,
    CC_ARIF = 88,
    CC_MSAS = 89,
    CC_AGRP = 90,
    CC_AGAL = 91,
    CC_ASCP = 92,
    CC_PPRO = 93,
    CC_PASP = 94,
    CC_PFDT = 95,
    CC_PICD = 96,
    CC_PIMF = 97,
    CC_PFMT = 98,
    CC_PIFS = 99,
    CC_PLSZ = 100,
    CC_PHGT = 101,
    CC_PWTH = 102,
    CC_PRAT = 103,
    CC_PCMT = 104,
    CC_PRET = 105,
    CC_AESV = 106,
    CC_AEHV = 107,
    CC_AESP = 108,
    CC_AEPP = 109,
    CC_AEPS = 110,
    CC_AESG = 111,
    CC_AEMK = 112,
    CC_AEFP = 113,
    CC_CMPA = 114,
    CC_CMNM = 115,
    CC_CMTY = 116,
    CC_CMPG = 117,
    CC_CACI = 118,
    CC_CAPS = 119,
    CC_CASH = 120,
    CC_CARP = 121,
    CC_CAAS = 122,
    CC_CAAR = 123,
    CC_CAIA = 124,
    CC_CANP = 125,
    CC_CANN = 126,
    CC_CANA = 127,
    CC_CANL = 128,
    CC_CANG = 129,
    CC_CANT = 130,
    CC_CASP = 131,
    CC_CASS = 132,
    CC_CAST = 133,
    CC_CASU = 134,
    CC_CASG = 135,
    CC_CACR = 136,
    CC_CMCP = 137,
    CC_CMGT = 138,
    CC_CMIK = 139,
    CC_CMSP = 140,
    CC_CMST = 141,
    CC_CMSV = 142,
    CC_CMSR = 143,
    CC_CMMK = 144,
    CC_CMVO = 145,
    CC_CMPR = 146,
    CC_CAPR = 147,
    CC_AEFR = 148,
    CC_CAOV = 149,
    CC_CMRL = 150,
    CC_CAHP = 151,
    CC_CAIV = 152,
    CC_CAVC = 153,
}

export class MdnsBrowserError extends GLib.Error {
    static $gtype: GObject.GType<MdnsBrowserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MdnsBrowserError);

    // Properties
    static NOT_RUNNING: number;
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace MdnsBrowserServiceType {
    export const $gtype: GObject.GType<MdnsBrowserServiceType>;
}

export enum MdnsBrowserServiceType {
    INVALID = 0,
    DAAP = 1,
    DPAP = 2,
    DACP = 3,
    RAOP = 4,
    LAST = 4,
}

export namespace MdnsBrowserTransportProtocol {
    export const $gtype: GObject.GType<MdnsBrowserTransportProtocol>;
}

export enum MdnsBrowserTransportProtocol {
    TCP = 0,
    UDP = 1,
    LAST = 1,
}

export class MdnsPublisherError extends GLib.Error {
    static $gtype: GObject.GType<MdnsPublisherError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MdnsPublisherError);

    // Properties
    static NOT_RUNNING: number;
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace MediaKind {
    export const $gtype: GObject.GType<MediaKind>;
}

export enum MediaKind {
    MUSIC = 1,
    MOVIE = 2,
    PODCAST = 32,
    TV_SHOW = 64,
}

export namespace Type {
    export const $gtype: GObject.GType<Type>;
}

export enum Type {
    BYTE = 1,
    SIGNED_INT = 2,
    SHORT = 3,
    INT = 5,
    INT64 = 7,
    STRING = 9,
    DATE = 10,
    VERSION = 11,
    CONTAINER = 12,
    POINTER = 42,
}

export namespace Connection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        base_uri: any;
        baseUri: any;
        database_id: number;
        databaseId: number;
        db: any;
        dmap_version: number;
        dmapVersion: number;
        factory: any;
        host: string;
        name: string;
        password: string;
        port: number;
        revision_number: number;
        revisionNumber: number;
        session_id: number;
        sessionId: number;
        username: string;
    }
}

export class Connection extends GObject.Object {
    static $gtype: GObject.GType<Connection>;

    constructor(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_uri: any;
    baseUri: any;
    database_id: number;
    databaseId: number;
    db: any;
    dmap_version: number;
    dmapVersion: number;
    factory: any;
    host: string;
    name: string;
    password: string;
    port: number;
    revision_number: number;
    revisionNumber: number;
    session_id: number;
    sessionId: number;
    username: string;

    // Fields
    priv: ConnectionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'authenticate',
        callback: (
            _source: this,
            object: string,
            p0: Soup.Session,
            p1: Soup.Message,
            p2: Soup.Auth,
            p3: boolean
        ) => void
    ): number;

    connect_after(
        signal: 'authenticate',
        callback: (
            _source: this,
            object: string,
            p0: Soup.Session,
            p1: Soup.Message,
            p2: Soup.Auth,
            p3: boolean
        ) => void
    ): number;

    emit(signal: 'authenticate', object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void;

    connect(signal: 'connected', callback: (_source: this) => void): number;

    connect_after(signal: 'connected', callback: (_source: this) => void): number;

    emit(signal: 'connected'): void;

    connect(signal: 'connecting', callback: (_source: this, object: number, p0: number) => void): number;

    connect_after(signal: 'connecting', callback: (_source: this, object: number, p0: number) => void): number;

    emit(signal: 'connecting', object: number, p0: number): void;

    connect(signal: 'disconnected', callback: (_source: this) => void): number;

    connect_after(signal: 'disconnected', callback: (_source: this) => void): number;

    emit(signal: 'disconnected'): void;

    connect(signal: 'operation-done', callback: (_source: this) => void): number;

    connect_after(signal: 'operation-done', callback: (_source: this) => void): number;

    emit(signal: 'operation-done'): void;

    // Members

    authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;

    get_headers(uri: string): Soup.MessageHeaders;

    is_connected(): boolean;

    setup(): void;

    vfunc_authenticate(name: string): string;

    vfunc_connected(): void;

    vfunc_connecting(state: ConnectionState, progress: number): void;

    vfunc_disconnected(): void;

    vfunc_get_protocol_version_cc(): ContentCode;

    vfunc_get_query_metadata(): string;

    vfunc_operation_done(): void;
}

export namespace GstInputStream {
    export interface ConstructorProperties extends Gio.InputStream.ConstructorProperties {
        [key: string]: any;
    }
}

export class GstInputStream extends Gio.InputStream implements Gio.Seekable {
    static $gtype: GObject.GType<GstInputStream>;

    constructor(properties?: Partial<GstInputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GstInputStream.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: GstInputStreamPrivate;

    // Constructors

    static ['new'](transcode_mimetype: string, src_stream: Gio.InputStream): GstInputStream;

    // Members

    vfunc_kill_pipeline(): void;

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

export namespace MdnsBrowser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MdnsBrowser extends GObject.Object {
    static $gtype: GObject.GType<MdnsBrowser>;

    constructor(properties?: Partial<MdnsBrowser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MdnsBrowser.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: MdnsBrowserPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'service-added', callback: (_source: this, service: any | null) => void): number;

    connect_after(signal: 'service-added', callback: (_source: this, service: any | null) => void): number;

    emit(signal: 'service-added', service: any | null): void;

    connect(signal: 'service-removed', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'service-removed', callback: (_source: this, object: string) => void): number;

    emit(signal: 'service-removed', object: string): void;

    // Constructors

    static ['new'](type: MdnsBrowserServiceType): MdnsBrowser;

    // Members

    get_service_type(): MdnsBrowserServiceType;

    start(): boolean;

    stop(): boolean;

    vfunc_service_added(service: MdnsBrowserService): void;

    vfunc_service_removed(service: MdnsBrowserService): void;
}

export namespace MdnsPublisher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MdnsPublisher extends GObject.Object {
    static $gtype: GObject.GType<MdnsPublisher>;

    constructor(properties?: Partial<MdnsPublisher.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MdnsPublisher.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: MdnsPublisherPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'name-collision', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'name-collision', callback: (_source: this, object: string) => void): number;

    emit(signal: 'name-collision', object: string): void;

    connect(signal: 'published', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'published', callback: (_source: this, object: string) => void): number;

    emit(signal: 'published', object: string): void;

    // Constructors

    static ['new'](): MdnsPublisher;

    // Members

    publish(
        name: string,
        port: number,
        type_of_service: string,
        password_required: boolean,
        txt_records: string
    ): boolean;

    rename_at_port(port: number, name: string): boolean;

    withdraw(port: number): boolean;

    vfunc_name_collision(name: string): void;

    vfunc_published(name: string): void;
}

export namespace Share {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auth_method: number;
        authMethod: number;
        container_db: any;
        containerDb: any;
        db: any;
        name: string;
        password: string;
        revision_number: number;
        revisionNumber: number;
        server: Soup.Server;
        transcode_mimetype: string;
        transcodeMimetype: string;
        txt_records: string[];
        txtRecords: string[];
    }
}

export abstract class Share extends GObject.Object {
    static $gtype: GObject.GType<Share>;

    constructor(properties?: Partial<Share.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Share.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auth_method: number;
    authMethod: number;
    container_db: any;
    containerDb: any;
    db: any;
    name: string;
    password: string;
    revision_number: number;
    revisionNumber: number;
    server: Soup.Server;
    transcode_mimetype: string;
    transcodeMimetype: string;
    txt_records: string[];
    txtRecords: string[];

    // Fields
    priv: SharePrivate;

    // Members

    vfunc_content_codes(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        ctx: Soup.ClientContext
    ): void;

    vfunc_ctrl_int(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        ctx: Soup.ClientContext
    ): void;

    vfunc_databases(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        context: Soup.ClientContext
    ): void;

    vfunc_databases_browse_xxx(
        server: Soup.Server,
        msg: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        context: Soup.ClientContext
    ): void;

    vfunc_databases_items_xxx(
        server: Soup.Server,
        msg: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        context: Soup.ClientContext
    ): void;

    vfunc_get_desired_port(): number;

    vfunc_get_meta_data_map(): any | null;

    vfunc_get_type_of_service(): string;

    vfunc_login(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        ctx: Soup.ClientContext
    ): void;

    vfunc_logout(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        ctx: Soup.ClientContext
    ): void;

    vfunc_message_add_standard_headers(msg: Soup.Message): void;

    vfunc_name_collision(publisher: MdnsPublisher, name: string): void;

    vfunc_published(publisher: MdnsPublisher, name: string): void;

    vfunc_server_info(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        ctx: Soup.ClientContext
    ): void;

    vfunc_update(
        server: Soup.Server,
        message: Soup.Message,
        path: string,
        query: GLib.HashTable<any, any>,
        ctx: Soup.ClientContext
    ): void;
}

export class ConnectionPrivate {
    static $gtype: GObject.GType<ConnectionPrivate>;

    constructor(copy: ConnectionPrivate);
}

export class ContentCodeDefinition {
    static $gtype: GObject.GType<ContentCodeDefinition>;

    constructor(copy: ContentCodeDefinition);

    // Fields
    code: ContentCode;
    int_code: number;
    name: string;
    string: string;
    type: Type;
}

export class DbFilterDefinition {
    static $gtype: GObject.GType<DbFilterDefinition>;

    constructor(
        properties?: Partial<{
            key?: string;
            value?: string;
            negate?: boolean;
        }>
    );

    constructor(copy: DbFilterDefinition);

    // Fields
    key: string;
    value: string;
    negate: boolean;
}

export class GstInputStreamPrivate {
    static $gtype: GObject.GType<GstInputStreamPrivate>;

    constructor(copy: GstInputStreamPrivate);
}

export class HashContext {
    static $gtype: GObject.GType<HashContext>;

    constructor(copy: HashContext);

    // Fields
    buf: number[];
    bits: number[];
    'in': Uint8Array;
    version: number;
}

export class MdnsBrowserPrivate {
    static $gtype: GObject.GType<MdnsBrowserPrivate>;

    constructor(copy: MdnsBrowserPrivate);
}

export class MdnsBrowserService {
    static $gtype: GObject.GType<MdnsBrowserService>;

    constructor(copy: MdnsBrowserService);

    // Fields
    service_name: string;
    name: string;
    host: string;
    port: number;
    password_protected: boolean;
    pair: string;
    transport_protocol: MdnsBrowserTransportProtocol;
}

export class MdnsPublisherPrivate {
    static $gtype: GObject.GType<MdnsPublisherPrivate>;

    constructor(copy: MdnsPublisherPrivate);
}

export class MetaDataMap {
    static $gtype: GObject.GType<MetaDataMap>;

    constructor(
        properties?: Partial<{
            tag?: string;
            md?: number;
        }>
    );

    constructor(copy: MetaDataMap);

    // Fields
    tag: string;
    md: number;
}

export class Playlist {
    static $gtype: GObject.GType<Playlist>;

    constructor(copy: Playlist);

    // Fields
    name: string;
    id: number;
    uris: any[];
}

export class SharePrivate {
    static $gtype: GObject.GType<SharePrivate>;

    constructor(copy: SharePrivate);
}

export class StructureItem {
    static $gtype: GObject.GType<StructureItem>;

    constructor(copy: StructureItem);

    // Fields
    content_code: ContentCode;
    content: GObject.Value;
    size: number;
}

export interface ContainerDbNamespace {
    $gtype: GObject.GType<ContainerDb>;
    prototype: ContainerDbPrototype;
}

export type ContainerDb = ContainerDbPrototype;

export interface ContainerDbPrototype extends GObject.Object {
    // Members

    add(record: ContainerRecord): void;

    count(): number;

    vfunc_add(record: ContainerRecord): void;

    vfunc_count(): number;
}

export const ContainerDb: ContainerDbNamespace;

export interface ContainerRecordNamespace {
    $gtype: GObject.GType<ContainerRecord>;
    prototype: ContainerRecordPrototype;
}

export type ContainerRecord = ContainerRecordPrototype;

export interface ContainerRecordPrototype extends GObject.Object {
    // Properties
    name: string;

    // Members

    add_entry(record: Record, id: number): void;

    get_entry_count(): number;

    get_id(): number;

    vfunc_add_entry(record: Record, id: number): void;

    vfunc_get_entry_count(): number;

    vfunc_get_id(): number;
}

export const ContainerRecord: ContainerRecordNamespace;

export interface DbNamespace {
    $gtype: GObject.GType<Db>;
    prototype: DbPrototype;
}

export type Db = DbPrototype;

export interface DbPrototype extends GObject.Object {
    // Members

    add(record: Record): number;

    add_path(path: string): number;

    add_with_id(record: Record, id: number): number;

    count(): number;

    lookup_id_by_location(location: string): number;

    vfunc_add(record: Record): number;

    vfunc_add_path(path: string): number;

    vfunc_add_with_id(record: Record, id: number): number;

    vfunc_count(): number;

    vfunc_lookup_id_by_location(location: string): number;
}

export const Db: DbNamespace;

export interface RecordNamespace {
    $gtype: GObject.GType<Record>;
    prototype: RecordPrototype;
}

export type Record = RecordPrototype;

export interface RecordPrototype extends GObject.Object {
    // Members

    set_from_blob(blob: Uint8Array | string): boolean;

    vfunc_set_from_blob(blob: Uint8Array | string): boolean;
}

export const Record: RecordNamespace;

export interface RecordFactoryNamespace {
    $gtype: GObject.GType<RecordFactory>;
    prototype: RecordFactoryPrototype;
}

export type RecordFactory = RecordFactoryPrototype;
export type RecordFactoryPrototype = GObject.Object

export const RecordFactory: RecordFactoryNamespace;
