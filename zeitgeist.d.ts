/**
 * Zeitgeist 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */
import * as GLib from './glib';
import * as Gio from './gio';
import * as GObject from './gobject';

export const SIG_DATASOURCES: string;

export const SECOND: number;

export const MINUTE: number;

export const HOUR: number;

export const DAY: number;

export const WEEK: number;

export const YEAR: number;

export const ALARM: string;

export const ATTACHMENT: string;

export const CALENDAR: string;

export const CALENDAR_DATA_OBJECT: string;

export const EVENT: string;

export const FREEBUSY: string;

export const JOURNAL: string;

export const TIMEZONE: string;

export const TODO: string;

export const CONTACT: string;

export const CONTACT_GROUP: string;

export const CONTACT_LIST: string;

export const CONTACT_LIST_DATA_OBJECT: string;

export const ORGANIZATION_CONTACT: string;

export const PERSON_CONTACT: string;

export const APPLICATION: string;

export const ARCHIVE: string;

export const ARCHIVE_ITEM: string;

export const AUDIO: string;

export const BOOKMARK: string;

export const BOOKMARK_FOLDER: string;

export const CURSOR: string;

export const DATA_CONTAINER: string;

export const DELETED_RESOURCE: string;

export const DOCUMENT: string;

export const EMBEDDED_FILE_DATA_OBJECT: string;

export const EXECUTABLE: string;

export const FILESYSTEM: string;

export const FILESYSTEM_IMAGE: string;

export const FILE_DATA_OBJECT: string;

export const FOLDER: string;

export const FONT: string;

export const HARD_DISK_PARTITION: string;

export const HTML_DOCUMENT: string;

export const ICON: string;

export const IMAGE: string;

export const MEDIA: string;

export const MEDIA_LIST: string;

export const MEDIA_STREAM: string;

export const MIND_MAP: string;

export const OPERATING_SYSTEM: string;

export const PAGINATED_TEXT_DOCUMENT: string;

export const PLAIN_TEXT_DOCUMENT: string;

export const PRESENTATION: string;

export const RASTER_IMAGE: string;

export const REMOTE_DATA_OBJECT: string;

export const REMOTE_PORT_ADDRESS: string;

export const SOFTWARE: string;

export const SOFTWARE_ITEM: string;

export const SOFTWARE_SERVICE: string;

export const SOURCE_CODE: string;

export const SPREADSHEET: string;

export const TEXT_DOCUMENT: string;

export const TRASH: string;

export const VECTOR_IMAGE: string;

export const VIDEO: string;

export const VISUAL: string;

export const WEBSITE: string;

export const WEB_DATA_OBJECT: string;

export const DATA_OBJECT: string;

export const INFORMATION_ELEMENT: string;

export const MOVIE: string;

export const MUSIC_ALBUM: string;

export const MUSIC_PIECE: string;

export const TVSERIES: string;

export const TVSHOW: string;

export const EMAIL: string;

export const IMMESSAGE: string;

export const MAILBOX: string;

export const MAILBOX_DATA_OBJECT: string;

export const MESSAGE: string;

export const MIME_ENTITY: string;

export const ACCEPT_EVENT: string;

export const ACCESS_EVENT: string;

export const APPLICATION_ACTION: string;

export const CREATE_EVENT: string;

export const DELETE_EVENT: string;

export const DENY_EVENT: string;

export const EVENT_INTERPRETATION: string;

export const EVENT_MANIFESTATION: string;

export const EXPIRE_EVENT: string;

export const HEURISTIC_ACTIVITY: string;

export const LEAVE_EVENT: string;

export const MODIFY_EVENT: string;

export const MOVE_EVENT: string;

export const RECEIVE_EVENT: string;

export const SCHEDULED_ACTIVITY: string;

export const SEND_EVENT: string;

export const SYSTEM_NOTIFICATION: string;

export const USER_ACTIVITY: string;

export const WORLD_ACTIVITY: string;

export const ENGINE_DBUS_NAME: string;

export const ENGINE_DBUS_PATH: string;

export const SIG_EVENT: string;

export const MAX_DBUS_RESULT_SIZE: number;

export const CACHE_SIZE: number;

export function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[];

export function data_sources_to_variant(sources: GLib.HashTable): GLib.Variant;

export function events_from_variant(vevents: GLib.Variant): Event[];

export function events_to_variant(events: Event[]): GLib.Variant;

export function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant;

export function timestamp_from_timeval(timeval: GLib.TimeVal): number;

export function timestamp_to_timeval(timestamp: number): GLib.TimeVal;

export function timestamp_from_now(): number;

export function timestamp_from_iso8601(datetime: string): number;

export function timestamp_to_iso8601(timestamp: number): string;

export function timestamp_from_date(date: GLib.Date): number;

export function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number;

export function timestamp_to_date(timestamp: number): GLib.Date;

export function timestamp_next_midnight(timestamp: number): number;

export function timestamp_prev_midnight(timestamp: number): number;

export function symbol_get_display_name(symbol_uri: string): string;

export function symbol_get_description(symbol_uri: string): string;

export function symbol_get_all_parents(symbol_uri: string): string[];

export function symbol_get_all_children(symbol_uri: string): string[];

export function symbol_get_children(symbol_uri: string): string[];

export function symbol_get_parents(symbol_uri: string): string[];

export function symbol_is_a(symbol_uri?: string | null, parent_uri?: string | null): boolean;

export function utils_get_data_path(): string;

export function utils_get_default_data_path(): string;

export function utils_get_database_file_path(): string;

export function utils_set_database_file_path(path: string): void;

export function utils_get_database_file_backup_path(): string;

export function utils_get_database_file_retire_name(): string;

export function utils_get_local_extensions_path(): string;

export function utils_using_in_memory_database(): boolean;

export function utils_backup_database(): void;

export function utils_parse_negation(val: string): [boolean, string];

export function utils_parse_noexpand(val: string): [boolean, string];

export function utils_parse_wildcard(val: string): [boolean, string];

export function utils_is_empty_string(s?: string | null): boolean;

export function utils_log_may_read_directly(): boolean;

export function result_type_is_sort_order_asc(result_type: ResultType): boolean;

export function register_mimetype(mimetype: string, interpretation_uri: string): void;

export function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void;

export function interpretation_for_mimetype(mimetype?: string | null): string | null;

export function register_uri_scheme(uri_scheme: string, manifestation_type: string): void;

export function manifestation_for_uri(uri: string): string | null;

export namespace ResultType {
    export const $gtype: GObject.GType<ResultType>;
}

export enum ResultType {
    MOST_RECENT_EVENTS = 0,
    LEAST_RECENT_EVENTS = 1,
    MOST_RECENT_SUBJECTS = 2,
    LEAST_RECENT_SUBJECTS = 3,
    MOST_POPULAR_SUBJECTS = 4,
    LEAST_POPULAR_SUBJECTS = 5,
    MOST_POPULAR_ACTOR = 6,
    LEAST_POPULAR_ACTOR = 7,
    MOST_RECENT_ACTOR = 8,
    LEAST_RECENT_ACTOR = 9,
    MOST_RECENT_ORIGIN = 10,
    LEAST_RECENT_ORIGIN = 11,
    MOST_POPULAR_ORIGIN = 12,
    LEAST_POPULAR_ORIGIN = 13,
    OLDEST_ACTOR = 14,
    MOST_RECENT_SUBJECT_INTERPRETATION = 15,
    LEAST_RECENT_SUBJECT_INTERPRETATION = 16,
    MOST_POPULAR_SUBJECT_INTERPRETATION = 17,
    LEAST_POPULAR_SUBJECT_INTERPRETATION = 18,
    MOST_RECENT_MIMETYPE = 19,
    LEAST_RECENT_MIMETYPE = 20,
    MOST_POPULAR_MIMETYPE = 21,
    LEAST_POPULAR_MIMETYPE = 22,
    MOST_RECENT_CURRENT_URI = 23,
    LEAST_RECENT_CURRENT_URI = 24,
    MOST_POPULAR_CURRENT_URI = 25,
    LEAST_POPULAR_CURRENT_URI = 26,
    MOST_RECENT_EVENT_ORIGIN = 27,
    LEAST_RECENT_EVENT_ORIGIN = 28,
    MOST_POPULAR_EVENT_ORIGIN = 29,
    LEAST_POPULAR_EVENT_ORIGIN = 30,
    MOST_RECENT_CURRENT_ORIGIN = 31,
    LEAST_RECENT_CURRENT_ORIGIN = 32,
    MOST_POPULAR_CURRENT_ORIGIN = 33,
    LEAST_POPULAR_CURRENT_ORIGIN = 34,
    RELEVANCY = 100,
}

export namespace RelevantResultType {
    export const $gtype: GObject.GType<RelevantResultType>;
}

export enum RelevantResultType {
    RECENT = 0,
    RELATED = 1,
}

export namespace StorageState {
    export const $gtype: GObject.GType<StorageState>;
}

export enum StorageState {
    NOT_AVAILABLE = 0,
    AVAILABLE = 1,
    ANY = 2,
}

export class EngineError extends GLib.Error {
    static $gtype: GObject.GType<EngineError>;

    constructor(options: { message: string, code: number });
    constructor(copy: EngineError);

    // Properties
    static BACKUP_FAILED: number;
    static DATABASE_BUSY: number;
    static DATABASE_CANTOPEN: number;
    static DATABASE_CORRUPT: number;
    static DATABASE_ERROR: number;
    static DATABASE_RETIRE_FAILED: number;
    static EXISTING_INSTANCE: number;
    static INVALID_ARGUMENT: number;
    static INVALID_EVENT: number;
    static INVALID_KEY: number;
}

export class DataModelError extends GLib.Error {
    static $gtype: GObject.GType<DataModelError>;

    constructor(options: { message: string, code: number });
    constructor(copy: DataModelError);

    // Properties
    static INVALID_SIGNATURE: number;
    static NULL_EVENT: number;
    static TOO_MANY_RESULTS: number;
}

export namespace DataSourceRegistry {
    export interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class DataSourceRegistry extends QueuedProxyWrapper {
    static $gtype: GObject.GType<DataSourceRegistry>;

    constructor(properties?: Partial<DataSourceRegistry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataSourceRegistry.ConstructorProperties>, ...args: any[]): void;

    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'source-disconnected', callback: (_source: this, data_source: DataSource) => void): number;

    connect_after(signal: 'source-disconnected', callback: (_source: this, data_source: DataSource) => void): number;

    emit(signal: 'source-disconnected', data_source: DataSource): void;

    connect(signal: 'source-enabled', callback: (_source: this, unique_id: string, enabled: boolean) => void): number;

    connect_after(signal: 'source-enabled', callback: (_source: this, unique_id: string, enabled: boolean) => void): number;

    emit(signal: 'source-enabled', unique_id: string, enabled: boolean): void;

    connect(signal: 'source-registered', callback: (_source: this, data_source: DataSource) => void): number;

    connect_after(signal: 'source-registered', callback: (_source: this, data_source: DataSource) => void): number;

    emit(signal: 'source-registered', data_source: DataSource): void;

    // Constructors
    static ['new'](): DataSourceRegistry;

    // Members
    get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[];

    get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource;

    register_data_source(data_source: DataSource, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    register_data_source_finish(_res_: Gio.AsyncResult): boolean;

    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
}

export namespace Index {
    export interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class Index extends QueuedProxyWrapper {
    static $gtype: GObject.GType<Index>;

    constructor(properties?: Partial<Index.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Index.ConstructorProperties>, ...args: any[]): void;

    // Constructors
    static ['new'](): Index;

    // Members
    search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    search_finish(_res_: Gio.AsyncResult): ResultSet;

    search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ResultSet, number[]];
}

export namespace Log {
    export interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class Log extends QueuedProxyWrapper {
    static $gtype: GObject.GType<Log>;

    constructor(properties?: Partial<Log.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Log.ConstructorProperties>, ...args: any[]): void;

    // Constructors
    static ['new'](): Log;

    // Members
    insert_event(event: Event, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    insert_event_finish(_res_: Gio.AsyncResult): number[];

    insert_events(events: Event[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    insert_events_finish(_res_: Gio.AsyncResult): number[];

    insert_event_no_reply(event: Event): void;

    insert_events_no_reply(events: Event[]): void;

    find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    find_events_finish(_res_: Gio.AsyncResult): ResultSet;

    find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    find_event_ids_finish(_res_: Gio.AsyncResult): number[];

    get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_events_finish(_res_: Gio.AsyncResult): ResultSet;

    find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    find_related_uris_finish(_res_: Gio.AsyncResult): string[];

    delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    delete_events_finish(_res_: Gio.AsyncResult): TimeRange;

    quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    quit_finish(_res_: Gio.AsyncResult): void;

    install_monitor(monitor: Monitor): void;

    remove_monitor(monitor: Monitor): void;

    get_version(): [number, number, number];

    get_extensions(): string[];

    datapath(): string;

    static get_default(): Log;
}

export namespace Monitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        time_range: TimeRange;
        timeRange: TimeRange;
        event_templates: Event[];
        eventTemplates: Event[];
    }
}

export class Monitor extends GObject.Object implements RemoteMonitor {
    static $gtype: GObject.GType<Monitor>;

    constructor(properties?: Partial<Monitor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Monitor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    time_range: TimeRange;
    timeRange: TimeRange;
    event_templates: Event[];
    eventTemplates: Event[];

    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'events-inserted', callback: (_source: this, time_range: TimeRange, events: ResultSet) => void): number;

    connect_after(signal: 'events-inserted', callback: (_source: this, time_range: TimeRange, events: ResultSet) => void): number;

    emit(signal: 'events-inserted', time_range: TimeRange, events: ResultSet): void;

    connect(signal: 'events-deleted', callback: (_source: this, time_range: TimeRange, event_ids: number[], event_ids_length1: number) => void): number;

    connect_after(signal: 'events-deleted', callback: (_source: this, time_range: TimeRange, event_ids: number[], event_ids_length1: number) => void): number;

    emit(signal: 'events-deleted', time_range: TimeRange, event_ids: number[], event_ids_length1: number): void;

    // Constructors
    static ['new'](time_range: TimeRange, event_templates: Event[]): Monitor;

    // Members
    get_templates(): Event[];

    get_path(): any;

    get_time_range(): TimeRange;

    set_time_range(value: TimeRange): void;

    get_event_templates(): Event[];

    set_event_templates(value: Event[]): void;

    // Implemented Members
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    notify_insert_finish(_res_: Gio.AsyncResult): void;

    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    notify_delete_finish(_res_: Gio.AsyncResult): void;

    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void;

    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void;
}

export namespace QueuedProxyWrapper {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        proxy_created: boolean;
        proxyCreated: boolean;
        is_connected: boolean;
        isConnected: boolean;
    }
}

export abstract class QueuedProxyWrapper extends GObject.Object {
    static $gtype: GObject.GType<QueuedProxyWrapper>;

    constructor(properties?: Partial<QueuedProxyWrapper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<QueuedProxyWrapper.ConstructorProperties>, ...args: any[]): void;

    // Properties
    proxy_created: boolean;
    proxyCreated: boolean;
    is_connected: boolean;
    isConnected: boolean;

    // Members
    proxy_acquired(proxy: GObject.Object): void;

    proxy_unavailable(err: Gio.IOErrorEnum): void;

    process_queued_methods(): void;

    name_owner_changed(pspec: GObject.ParamSpec): void;

    on_connection_established(): void;

    on_connection_lost(): void;

    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    wait_for_proxy_finish(_res_: Gio.AsyncResult): void;

    get_proxy_created(): boolean;

    get_is_connected(): boolean;

    vfunc_on_connection_established(): void;

    vfunc_on_connection_lost(): void;
}

export namespace QueuedProxyWrapperQueuedMethod {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class QueuedProxyWrapperQueuedMethod {
    static $gtype: GObject.GType<QueuedProxyWrapperQueuedMethod>;

    constructor(properties?: Partial<QueuedProxyWrapperQueuedMethod.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<QueuedProxyWrapperQueuedMethod.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors
    static ['new'](callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod;

    // Members
    get_queued_method(): [GLib.SourceFunc, any | null];
}

export namespace DataSource {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        unique_id: string;
        uniqueId: string;
        name: string;
        description: string;
        event_templates: Event[];
        eventTemplates: Event[];
        enabled: boolean;
        running: boolean;
        timestamp: number;
    }
}

export class DataSource extends GObject.Object {
    static $gtype: GObject.GType<DataSource>;

    constructor(properties?: Partial<DataSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    unique_id: string;
    uniqueId: string;
    name: string;
    description: string;
    event_templates: Event[];
    eventTemplates: Event[];
    enabled: boolean;
    running: boolean;
    timestamp: number;

    // Constructors
    static ['new'](): DataSource;

    static full(unique_id: string, name: string, description: string, templates?: Event[] | null): DataSource;

    static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource;

    // Members
    to_variant(): GLib.Variant;

    get_unique_id(): string;

    set_unique_id(value: string): void;

    get_name(): string;

    set_name(value: string): void;

    get_description(): string;

    set_description(value: string): void;

    get_event_templates(): Event[] | null;

    set_event_templates(value?: Event[] | null): void;

    get_enabled(): boolean;

    set_enabled(value: boolean): void;

    get_running(): boolean;

    set_running(value: boolean): void;

    get_timestamp(): number;

    set_timestamp(value: number): void;
}

export namespace Event {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        id: number;
        timestamp: number;
        origin: string;
        actor: string;
        interpretation: string;
        manifestation: string;
        subjects: Subject[];
        payload: GLib.ByteArray;
    }
}

export class Event extends GObject.Object {
    static $gtype: GObject.GType<Event>;

    constructor(properties?: Partial<Event.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Event.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: number;
    timestamp: number;
    origin: string;
    actor: string;
    interpretation: string;
    manifestation: string;
    subjects: Subject[];
    payload: GLib.ByteArray;

    // Constructors
    static from_variant(event_variant: GLib.Variant): Event;

    static ['new'](): Event;

    // Members
    get_subject(index: number): Subject;

    num_subjects(): number;

    add_subject(subject: Subject): void;

    take_subject(subject: Subject): void;

    set_actor_from_app_info(info: Gio.AppInfo): void;

    to_variant(): GLib.Variant;

    debug_print(): void;

    matches_template(template_event: Event): boolean;

    get_id(): number;

    set_id(value: number): void;

    get_timestamp(): number;

    set_timestamp(value: number): void;

    get_origin(): string | null;

    set_origin(value?: string | null): void;

    get_actor(): string | null;

    set_actor(value?: string | null): void;

    get_interpretation(): string | null;

    set_interpretation(value?: string | null): void;

    get_manifestation(): string | null;

    set_manifestation(value?: string | null): void;

    get_subjects(): Subject[];

    set_subjects(value: Subject[]): void;

    get_payload(): GLib.ByteArray | null;

    set_payload(value?: GLib.ByteArray | null): void;
}

export namespace Subject {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        uri: string;
        origin: string;
        text: string;
        storage: string;
        current_uri: string;
        currentUri: string;
        current_origin: string;
        currentOrigin: string;
        mimetype: string;
        interpretation: string;
        manifestation: string;
    }
}

export class Subject extends GObject.Object {
    static $gtype: GObject.GType<Subject>;

    constructor(properties?: Partial<Subject.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Subject.ConstructorProperties>, ...args: any[]): void;

    // Properties
    uri: string;
    origin: string;
    text: string;
    storage: string;
    current_uri: string;
    currentUri: string;
    current_origin: string;
    currentOrigin: string;
    mimetype: string;
    interpretation: string;
    manifestation: string;

    // Constructors
    static full(uri?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, origin?: string | null, text?: string | null, storage?: string | null): Subject;

    static move_event(source_uri?: string | null, source_origin?: string | null, destination_uri?: string | null, destination_origin?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, text?: string | null, storage?: string | null): Subject;

    static from_variant(subject_variant: GLib.Variant): Subject;

    static ['new'](): Subject;

    // Members
    to_variant(): GLib.Variant;

    matches_template(template_subject: Subject): boolean;

    get_uri(): string | null;

    set_uri(value?: string | null): void;

    get_origin(): string | null;

    set_origin(value?: string | null): void;

    get_text(): string | null;

    set_text(value?: string | null): void;

    get_storage(): string | null;

    set_storage(value?: string | null): void;

    get_current_uri(): string | null;

    set_current_uri(value?: string | null): void;

    get_current_origin(): string | null;

    set_current_origin(value?: string | null): void;

    get_mimetype(): string | null;

    set_mimetype(value?: string | null): void;

    get_interpretation(): string | null;

    set_interpretation(value?: string | null): void;

    get_manifestation(): string | null;

    set_manifestation(value?: string | null): void;
}

export namespace TimeRange {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        start: number;
        end: number;
    }
}

export class TimeRange extends GObject.Object {
    static $gtype: GObject.GType<TimeRange>;

    constructor(properties?: Partial<TimeRange.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TimeRange.ConstructorProperties>, ...args: any[]): void;

    // Properties
    start: number;
    end: number;

    // Constructors
    static ['new'](start_msec: number, end_msec: number): TimeRange;

    static anytime(): TimeRange;

    static to_now(): TimeRange;

    static from_now(): TimeRange;

    static from_variant(variant: GLib.Variant): TimeRange;

    // Members
    to_variant(): GLib.Variant;

    intersect(time_range: TimeRange): TimeRange | null;

    get_start(): number;

    get_end(): number;
}

export namespace SimpleResultSet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SimpleResultSet extends GObject.Object implements ResultSet {
    static $gtype: GObject.GType<SimpleResultSet>;

    constructor(properties?: Partial<SimpleResultSet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleResultSet.ConstructorProperties>, ...args: any[]): void;

    // Constructors
    static ['new'](events: Event[]): SimpleResultSet;

    static with_num_matches(events: Event[], matches: number): SimpleResultSet;

    // Implemented Members
    size(): number;

    estimated_matches(): number;

    next_value(): Event | null;

    has_next(): boolean;

    tell(): number;

    reset(): void;

    iterator(): ResultSet;

    vfunc_size(): number;

    vfunc_estimated_matches(): number;

    vfunc_next_value(): Event | null;

    vfunc_has_next(): boolean;

    vfunc_tell(): number;

    vfunc_reset(): void;
}

export class DataSourceRegistryPrivate {
    static $gtype: GObject.GType<DataSourceRegistryPrivate>;

    constructor(copy: DataSourceRegistryPrivate);
}

export class IndexPrivate {
    static $gtype: GObject.GType<IndexPrivate>;

    constructor(copy: IndexPrivate);
}

export class LogPrivate {
    static $gtype: GObject.GType<LogPrivate>;

    constructor(copy: LogPrivate);
}

export class MonitorPrivate {
    static $gtype: GObject.GType<MonitorPrivate>;

    constructor(copy: MonitorPrivate);
}

export class QueuedProxyWrapperPrivate {
    static $gtype: GObject.GType<QueuedProxyWrapperPrivate>;

    constructor(copy: QueuedProxyWrapperPrivate);
}

export class QueuedProxyWrapperQueuedMethodPrivate {
    static $gtype: GObject.GType<QueuedProxyWrapperQueuedMethodPrivate>;

    constructor(copy: QueuedProxyWrapperQueuedMethodPrivate);
}

export class DataSourcePrivate {
    static $gtype: GObject.GType<DataSourcePrivate>;

    constructor(copy: DataSourcePrivate);
}

export class EventPrivate {
    static $gtype: GObject.GType<EventPrivate>;

    constructor(copy: EventPrivate);
}

export class SubjectPrivate {
    static $gtype: GObject.GType<SubjectPrivate>;

    constructor(copy: SubjectPrivate);
}

export class TimeRangePrivate {
    static $gtype: GObject.GType<TimeRangePrivate>;

    constructor(copy: TimeRangePrivate);
}

export class SimpleResultSetPrivate {
    static $gtype: GObject.GType<SimpleResultSetPrivate>;

    constructor(copy: SimpleResultSetPrivate);
}

export class VersionStruct {
    static $gtype: GObject.GType<VersionStruct>;

    constructor(properties?: Partial<{
        major?: number;
        minor?: number;
        micro?: number;
    }>);

    constructor(copy: VersionStruct);

    // Fields
    major: number;
    minor: number;
    micro: number;
}

export interface RemoteRegistryNamespace {
    $gtype: GObject.GType<RemoteRegistry>;
}

export interface RemoteRegistry extends GObject.Object {
    // Members
    get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;

    register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    register_data_source_finish(_res_: Gio.AsyncResult): boolean;

    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;

    get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;

    vfunc_get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;

    vfunc_register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_register_data_source_finish(_res_: Gio.AsyncResult): boolean;

    vfunc_set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;
}

export const RemoteRegistry: RemoteRegistryNamespace;

export interface RemoteLogNamespace {
    $gtype: GObject.GType<RemoteLog>;
}

export interface RemoteLog extends GObject.Object {
    // Members
    delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

    find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    find_event_ids_finish(_res_: Gio.AsyncResult): number[];

    find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

    find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    find_related_uris_finish(_res_: Gio.AsyncResult): string[];

    get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

    insert_events(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    insert_events_finish(_res_: Gio.AsyncResult): number[];

    install_monitor(monitor_path: any, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    install_monitor_finish(_res_: Gio.AsyncResult): void;

    remove_monitor(monitor_path: any, owner?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_monitor_finish(_res_: Gio.AsyncResult): void;

    quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    quit_finish(_res_: Gio.AsyncResult): void;

    get_extensions(): string[];

    get_version(): VersionStruct;

    get_datapath(): string;

    vfunc_delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

    vfunc_find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_find_event_ids_finish(_res_: Gio.AsyncResult): number[];

    vfunc_find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

    vfunc_find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[];

    vfunc_get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

    vfunc_insert_events(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[];

    vfunc_install_monitor(monitor_path: any, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void;

    vfunc_remove_monitor(monitor_path: any, owner?: any | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void;

    vfunc_quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_quit_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_extensions(): string[];

    vfunc_get_version(): VersionStruct;

    vfunc_get_datapath(): string;
}

export const RemoteLog: RemoteLogNamespace;

export interface RemoteMonitorNamespace {
    $gtype: GObject.GType<RemoteMonitor>;
}

export interface RemoteMonitor extends GObject.Object {
    // Members
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    notify_insert_finish(_res_: Gio.AsyncResult): void;

    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    notify_delete_finish(_res_: Gio.AsyncResult): void;

    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void;

    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void;
}

export const RemoteMonitor: RemoteMonitorNamespace;

export interface RemoteSimpleIndexerNamespace {
    $gtype: GObject.GType<RemoteSimpleIndexer>;
}

export interface RemoteSimpleIndexer extends GObject.Object {
    // Members
    search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    search_finish(_res_: Gio.AsyncResult): [GLib.Variant, number];

    search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant, number[], number];

    vfunc_search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_search_finish(_res_: Gio.AsyncResult): [GLib.Variant, number];

    vfunc_search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant, number[], number];
}

export const RemoteSimpleIndexer: RemoteSimpleIndexerNamespace;

export interface NetworkManagerDBusNamespace {
    $gtype: GObject.GType<NetworkManagerDBus>;
}

export interface NetworkManagerDBus extends GObject.Object {
    // Members
    state(): number;

    vfunc_state(): number;
}

export const NetworkManagerDBus: NetworkManagerDBusNamespace;

export interface ConnmanManagerDBusNamespace {
    $gtype: GObject.GType<ConnmanManagerDBus>;
}

export interface ConnmanManagerDBus extends GObject.Object {
    // Members
    get_state(): string;

    vfunc_get_state(): string;
}

export const ConnmanManagerDBus: ConnmanManagerDBusNamespace;

export interface ResultSetNamespace {
    $gtype: GObject.GType<ResultSet>;
}

export interface ResultSet extends GObject.Object {
    // Members
    size(): number;

    estimated_matches(): number;

    next_value(): Event | null;

    has_next(): boolean;

    tell(): number;

    reset(): void;

    iterator(): ResultSet;

    vfunc_size(): number;

    vfunc_estimated_matches(): number;

    vfunc_next_value(): Event | null;

    vfunc_has_next(): boolean;

    vfunc_tell(): number;

    vfunc_reset(): void;
}

export const ResultSet: ResultSetNamespace;
