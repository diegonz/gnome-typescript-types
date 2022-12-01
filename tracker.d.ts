/**
 * Tracker 3.0
 *
 * Generated from 3.0
 */


import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";


export const PREFIX_DC: string;
export const PREFIX_MFO: string;
export const PREFIX_NAO: string;
export const PREFIX_NCO: string;
export const PREFIX_NFO: string;
export const PREFIX_NIE: string;
export const PREFIX_NMM: string;
export const PREFIX_NRL: string;
export const PREFIX_OSINFO: string;
export const PREFIX_RDF: string;
export const PREFIX_RDFS: string;
export const PREFIX_SLO: string;
export const PREFIX_TRACKER: string;
export const PREFIX_XSD: string;

export function check_version(required_major: number, required_minor: number, required_micro: number): string;

export function sparql_error_quark(): GLib.Quark;

export function sparql_escape_string(literal: string): string;

export function sparql_escape_uri(uri: string): string;

export function sparql_get_ontology_nepomuk(): Gio.File;

export function sparql_get_uuid_urn(): string;

export namespace DeserializeFlags {
    export const $gtype: GObject.GType<DeserializeFlags>;
}

export enum DeserializeFlags {
    DESERIALIZE_FLAGS_NONE = 0,
}

export namespace NotifierEventType {
    export const $gtype: GObject.GType<NotifierEventType>;
}

export enum NotifierEventType {
    CREATE = 0,
    DELETE = 1,
    UPDATE = 2,
}

export namespace RdfFormat {
    export const $gtype: GObject.GType<RdfFormat>;
}

export enum RdfFormat {
    RDF_FORMAT_TURTLE = 0,
    RDF_FORMAT_TRIG = 1,
    N_RDF_FORMATS = 2,
}

export namespace SerializeFlags {
    export const $gtype: GObject.GType<SerializeFlags>;
}

export enum SerializeFlags {
    SERIALIZE_FLAGS_NONE = 0,
}


export class SparqlError extends GLib.Error {
    static $gtype: GObject.GType<SparqlError>;

    constructor(options: { message: string, code: number });
    constructor(copy: SparqlError);


    // Fields
    static ERROR_CONSTRAINT: number;
    static ERROR_INTERNAL: number;
    static ERROR_NO_SPACE: number;
    static ERROR_ONTOLOGY_NOT_FOUND: number;
    static ERROR_OPEN_ERROR: number;
    static ERROR_PARSE: number;
    static ERROR_QUERY_FAILED: number;
    static ERROR_TYPE: number;
    static ERROR_UNKNOWN_CLASS: number;
    static ERROR_UNKNOWN_GRAPH: number;
    static ERROR_UNKNOWN_PROPERTY: number;
    static ERROR_UNSUPPORTED: number;
    static ERROR_MISSING_LAST_MODIFIED_HEADER: number;
    static ERROR_INCOMPLETE_PROPERTY_DEFINITION: number;
    static N_ERRORS: number;


}

export namespace SparqlValueType {
    export const $gtype: GObject.GType<SparqlValueType>;
}

export enum SparqlValueType {
    UNBOUND = 0,
    URI = 1,
    STRING = 2,
    INTEGER = 3,
    DOUBLE = 4,
    DATETIME = 5,
    BLANK_NODE = 6,
    BOOLEAN = 7,
}

export namespace SparqlConnectionFlags {
    export const $gtype: GObject.GType<SparqlConnectionFlags>;
}

export enum SparqlConnectionFlags {
    NONE = 0,
    READONLY = 1,
    FTS_ENABLE_STEMMER = 2,
    FTS_ENABLE_UNACCENT = 4,
    FTS_ENABLE_STOP_WORDS = 8,
    FTS_IGNORE_NUMBERS = 16,
    ANONYMOUS_BNODES = 32,
}

export module Batch {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connection: SparqlConnection;
    }
}

export abstract class Batch extends GObject.Object {
    static $gtype: GObject.GType<Batch>;


    constructor(properties?: Partial<Batch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Batch.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get connection(): SparqlConnection;


    // Members

    add_resource(graph: string | null, resource: Resource): void;

    add_sparql(sparql: string): void;

    execute(cancellable?: Gio.Cancellable | null): boolean;

    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    execute_finish(res: Gio.AsyncResult): boolean;

    get_connection(): SparqlConnection;


}

export module Endpoint {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        sparql_connection: SparqlConnection;
        sparqlConnection: SparqlConnection;
    }
}

export abstract class Endpoint extends GObject.Object {
    static $gtype: GObject.GType<Endpoint>;


    constructor(properties?: Partial<Endpoint.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Endpoint.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get sparql_connection(): SparqlConnection;

    get sparqlConnection(): SparqlConnection;


    // Members

    get_sparql_connection(): SparqlConnection;


}

export module EndpointDBus {

    export interface ConstructorProperties extends Endpoint.ConstructorProperties {
        [key: string]: any;

        dbus_connection: Gio.DBusConnection;
        dbusConnection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
    }
}

export class EndpointDBus extends Endpoint implements Gio.Initable {
    static $gtype: GObject.GType<EndpointDBus>;


    constructor(properties?: Partial<EndpointDBus.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EndpointDBus.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get dbus_connection(): Gio.DBusConnection;

    get dbusConnection(): Gio.DBusConnection;

    get object_path(): string;

    get objectPath(): string;


    // Constructors

    static ["new"](sparql_connection: SparqlConnection, dbus_connection: Gio.DBusConnection, object_path?: string | null, cancellable?: Gio.Cancellable | null): EndpointDBus;


    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module EndpointHttp {

    export interface ConstructorProperties extends Endpoint.ConstructorProperties {
        [key: string]: any;

        http_certificate: Gio.TlsCertificate;
        httpCertificate: Gio.TlsCertificate;
        http_port: number;
        httpPort: number;
    }
}

export class EndpointHttp extends Endpoint implements Gio.Initable {
    static $gtype: GObject.GType<EndpointHttp>;


    constructor(properties?: Partial<EndpointHttp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EndpointHttp.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get http_certificate(): Gio.TlsCertificate;

    get httpCertificate(): Gio.TlsCertificate;

    get http_port(): number;

    get httpPort(): number;


    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'block-remote-address', callback: (_source: this, address: Gio.SocketAddress) => boolean): number;

    connect_after(signal: 'block-remote-address', callback: (_source: this, address: Gio.SocketAddress) => boolean): number;

    emit(signal: 'block-remote-address', address: Gio.SocketAddress): void;


    // Constructors

    static ["new"](sparql_connection: SparqlConnection, port: number, certificate?: Gio.TlsCertificate | null, cancellable?: Gio.Cancellable | null): EndpointHttp;


    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module NamespaceManager {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class NamespaceManager extends GObject.Object {
    static $gtype: GObject.GType<NamespaceManager>;


    constructor(properties?: Partial<NamespaceManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NamespaceManager.ConstructorProperties>, ...args: any[]): void;


    // Constructors

    static ["new"](): NamespaceManager;

    // Members

    add_prefix(prefix: string, ns: string): void;

    compress_uri(uri: string): string;

    expand_uri(compact_uri: string): string;

    foreach(func: GLib.HFunc): void;

    has_prefix(prefix: string): boolean;

    lookup_prefix(prefix: string): string | null;

    print_turtle(): string;

    static get_default(): NamespaceManager;


}

export module Notifier {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connection: SparqlConnection;
    }
}

export class Notifier extends GObject.Object {
    static $gtype: GObject.GType<Notifier>;


    constructor(properties?: Partial<Notifier.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Notifier.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get connection(): SparqlConnection;


    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'events', callback: (_source: this, service: string, graph: string, events: NotifierEvent[]) => void): number;

    connect_after(signal: 'events', callback: (_source: this, service: string, graph: string, events: NotifierEvent[]) => void): number;

    emit(signal: 'events', service: string, graph: string, events: NotifierEvent[]): void;


    // Members

    signal_subscribe(connection: Gio.DBusConnection, service: string, object_path?: string | null, graph?: string | null): number;

    signal_unsubscribe(handler_id: number): void;


}

export module Resource {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        identifier: string;
    }
}

export class Resource extends GObject.Object {
    static $gtype: GObject.GType<Resource>;


    constructor(properties?: Partial<Resource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Resource.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get identifier(): string;
    set identifier(val: string);


    // Constructors

    static ["new"](identifier?: string | null): Resource;

    // Members

    add_boolean(property_uri: string, value: boolean): void;

    add_datetime(property_uri: string, value: GLib.DateTime): void;

    add_double(property_uri: string, value: number): void;

    add_gvalue(property_uri: string, value: GObject.Value | any): void;

    add_int(property_uri: string, value: number): void;

    add_int64(property_uri: string, value: number): void;

    add_relation(property_uri: string, resource: Resource): void;

    add_string(property_uri: string, value: string): void;

    add_uri(property_uri: string, value: string): void;

    get_first_boolean(property_uri: string): boolean;

    get_first_datetime(property_uri: string): GLib.DateTime;

    get_first_double(property_uri: string): number;

    get_first_int(property_uri: string): number;

    get_first_int64(property_uri: string): number;

    get_first_relation(property_uri: string): Resource;

    get_first_string(property_uri: string): string;

    get_first_uri(property_uri: string): string;

    get_identifier(): string;

    get_properties(): string[];

    get_property_overwrite(property_uri: string): boolean;

    get_values(property_uri: string): GObject.Value[];

    identifier_compare_func(identifier: string): number;

    print_jsonld(namespaces?: NamespaceManager | null): string;

    print_rdf(namespaces: NamespaceManager, format: RdfFormat, graph: string): string;

    print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string;

    print_turtle(namespaces?: NamespaceManager | null): string;

    serialize(): GLib.Variant;

    set_boolean(property_uri: string, value: boolean): void;

    set_datetime(property_uri: string, value: GLib.DateTime): void;

    set_double(property_uri: string, value: number): void;

    set_gvalue(property_uri: string, value: GObject.Value | any): void;

    set_identifier(identifier?: string | null): void;

    set_int(property_uri: string, value: number): void;

    set_int64(property_uri: string, value: number): void;

    set_relation(property_uri: string, resource: Resource): void;

    set_string(property_uri: string, value: string): void;

    set_uri(property_uri: string, value: string): void;

    static deserialize(variant: GLib.Variant): Resource;


}

export module SparqlConnection {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export abstract class SparqlConnection extends GObject.Object {
    static $gtype: GObject.GType<SparqlConnection>;


    constructor(properties?: Partial<SparqlConnection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SparqlConnection.ConstructorProperties>, ...args: any[]): void;


    // Constructors

    static bus_new(service_name: string, object_path?: string | null, dbus_connection?: Gio.DBusConnection | null): SparqlConnection;

    static bus_new_finish(result: Gio.AsyncResult): SparqlConnection;

    static ["new"](flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): SparqlConnection;

    static new_finish(result: Gio.AsyncResult): SparqlConnection;

    static remote_new(uri_base: string): SparqlConnection;

    // Members

    close(): void;

    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    close_finish(res: Gio.AsyncResult): boolean;

    create_batch(): Batch;

    create_notifier(): Notifier;

    deserialize_async(flags: DeserializeFlags, format: RdfFormat, default_graph: string, stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    deserialize_finish(result: Gio.AsyncResult): boolean;

    get_namespace_manager(): NamespaceManager;

    load_statement_from_gresource(resource_path: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null;

    map_connection(handle_name: string, service_connection: SparqlConnection): void;

    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor;

    query_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    query_finish(res: Gio.AsyncResult): SparqlCursor;

    query_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null;

    serialize_async(flags: SerializeFlags, format: RdfFormat, query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    serialize_finish(result: Gio.AsyncResult): Gio.InputStream;

    update(sparql: string, cancellable?: Gio.Cancellable | null): void;

    update_array_async(sparql: string, sparql_length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    update_array_finish(res: Gio.AsyncResult): boolean;

    update_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    update_blank(sparql: string, cancellable?: Gio.Cancellable | null): GLib.Variant;

    update_blank_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    update_blank_finish(res: Gio.AsyncResult): GLib.Variant;

    update_finish(res: Gio.AsyncResult): void;

    update_resource(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null): boolean;

    update_resource_async(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    update_resource_finish(res: Gio.AsyncResult): boolean;

    static bus_new_async(service_name: string, object_path?: string | null, dbus_connection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<SparqlConnection> | null): void;

    static new_async(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<SparqlConnection> | null): void;


}

export module SparqlCursor {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connection: SparqlConnection;
        n_columns: number;
        nColumns: number;
    }
}

export abstract class SparqlCursor extends GObject.Object {
    static $gtype: GObject.GType<SparqlCursor>;


    constructor(properties?: Partial<SparqlCursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SparqlCursor.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get connection(): SparqlConnection;

    get n_columns(): number;

    get nColumns(): number;


    // Members

    close(): void;

    get_boolean(column: number): boolean;

    get_connection(): SparqlConnection;

    get_datetime(column: number): GLib.DateTime | null;

    get_double(column: number): number;

    get_integer(column: number): number;

    get_n_columns(): number;

    get_string(column: number): [string | null, number];

    get_value_type(column: number): SparqlValueType;

    get_variable_name(column: number): string;

    is_bound(column: number): boolean;

    next(cancellable?: Gio.Cancellable | null): boolean;

    next_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    next_finish(res: Gio.AsyncResult): boolean;

    rewind(): void;


}

export module SparqlStatement {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connection: SparqlConnection;
        sparql: string;
    }
}

export abstract class SparqlStatement extends GObject.Object {
    static $gtype: GObject.GType<SparqlStatement>;


    constructor(properties?: Partial<SparqlStatement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SparqlStatement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get connection(): SparqlConnection;

    get sparql(): string;


    // Members

    bind_boolean(name: string, value: boolean): void;

    bind_datetime(name: string, value: GLib.DateTime): void;

    bind_double(name: string, value: number): void;

    bind_int(name: string, value: number): void;

    bind_string(name: string, value: string): void;

    clear_bindings(): void;

    execute(cancellable?: Gio.Cancellable | null): SparqlCursor;

    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    execute_finish(res: Gio.AsyncResult): SparqlCursor;

    get_connection(): SparqlConnection;

    get_sparql(): string;

    serialize_async(flags: SerializeFlags, format: RdfFormat, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    serialize_finish(result: Gio.AsyncResult): Gio.InputStream;


}


export class NotifierEvent {
    static $gtype: GObject.GType<NotifierEvent>;


    constructor(copy: NotifierEvent);


    // Members
    get_event_type(): NotifierEventType;

    get_id(): number;

    get_urn(): string;
}
