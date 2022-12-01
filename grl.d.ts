/**
 * Grl 0.3
 *
 * Generated from 0.3
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GModule from './gmodule';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const CONFIG_KEY_APIKEY: string;
export const CONFIG_KEY_APIKEY_BLOB: string;
export const CONFIG_KEY_APISECRET: string;
export const CONFIG_KEY_APITOKEN: string;
export const CONFIG_KEY_APITOKEN_SECRET: string;
export const CONFIG_KEY_PASSWORD: string;
export const CONFIG_KEY_PLUGIN: string;
export const CONFIG_KEY_SOURCE: string;
export const CONFIG_KEY_USERNAME: string;
export const COUNT_INFINITY: number;
export const KEYID_FORMAT: string;
export const METADATA_KEY_ALBUM: number;
export const METADATA_KEY_ALBUM_ARTIST: number;
export const METADATA_KEY_ALBUM_DISC_NUMBER: number;
export const METADATA_KEY_ARTIST: number;
export const METADATA_KEY_AUDIO_TRACK: number;
export const METADATA_KEY_AUTHOR: number;
export const METADATA_KEY_BITRATE: number;
export const METADATA_KEY_CAMERA_MODEL: number;
export const METADATA_KEY_CERTIFICATE: number;
export const METADATA_KEY_CHILDCOUNT: number;
export const METADATA_KEY_CHILDCOUNT_UNKNOWN: number;
export const METADATA_KEY_COMPOSER: number;
export const METADATA_KEY_CREATION_DATE: number;
export const METADATA_KEY_DESCRIPTION: number;
export const METADATA_KEY_DIRECTOR: number;
export const METADATA_KEY_DURATION: number;
export const METADATA_KEY_EPISODE: number;
export const METADATA_KEY_EPISODE_TITLE: number;
export const METADATA_KEY_EXPOSURE_TIME: number;
export const METADATA_KEY_EXTERNAL_PLAYER: number;
export const METADATA_KEY_EXTERNAL_URL: number;
export const METADATA_KEY_FAVOURITE: number;
export const METADATA_KEY_FLASH_USED: number;
export const METADATA_KEY_FRAMERATE: number;
export const METADATA_KEY_GENRE: number;
export const METADATA_KEY_HEIGHT: number;
export const METADATA_KEY_ID: number;
export const METADATA_KEY_INVALID: number;
export const METADATA_KEY_ISO_SPEED: number;
export const METADATA_KEY_KEYWORD: number;
export const METADATA_KEY_LAST_PLAYED: number;
export const METADATA_KEY_LAST_POSITION: number;
export const METADATA_KEY_LICENSE: number;
export const METADATA_KEY_LYRICS: number;
export const METADATA_KEY_MB_ALBUM_ID: number;
export const METADATA_KEY_MB_ARTIST_ID: number;
export const METADATA_KEY_MB_RECORDING_ID: number;
export const METADATA_KEY_MB_RELEASE_GROUP_ID: number;
export const METADATA_KEY_MB_RELEASE_ID: number;
export const METADATA_KEY_MB_TRACK_ID: number;
export const METADATA_KEY_MIME: number;
export const METADATA_KEY_MODIFICATION_DATE: number;
export const METADATA_KEY_ORIENTATION: number;
export const METADATA_KEY_ORIGINAL_TITLE: number;
export const METADATA_KEY_PERFORMER: number;
export const METADATA_KEY_PLAY_COUNT: number;
export const METADATA_KEY_PRODUCER: number;
export const METADATA_KEY_PUBLICATION_DATE: number;
export const METADATA_KEY_RATING: number;
export const METADATA_KEY_REGION: number;
export const METADATA_KEY_SEASON: number;
export const METADATA_KEY_SHOW: number;
export const METADATA_KEY_SITE: number;
export const METADATA_KEY_SIZE: number;
export const METADATA_KEY_SOURCE: number;
export const METADATA_KEY_START_TIME: number;
export const METADATA_KEY_STUDIO: number;
export const METADATA_KEY_THUMBNAIL: number;
export const METADATA_KEY_THUMBNAIL_BINARY: number;
export const METADATA_KEY_TITLE: number;
export const METADATA_KEY_TITLE_FROM_FILENAME: number;
export const METADATA_KEY_TRACK_NUMBER: number;
export const METADATA_KEY_URL: number;
export const METADATA_KEY_WIDTH: number;
export const PADDING: number;
export const PADDING_SMALL: number;
export const PLUGIN_AUTHOR: string;
export const PLUGIN_DESCRIPTION: string;
export const PLUGIN_LICENSE: string;
export const PLUGIN_LIST_VAR: string;
export const PLUGIN_NAME: string;
export const PLUGIN_PATH_VAR: string;
export const PLUGIN_RANKS_VAR: string;
export const PLUGIN_SITE: string;
export const PLUGIN_VERSION: string;
export const SOURCE_REMAINING_UNKNOWN: number;

export function date_time_from_iso8601(date: string): GLib.DateTime;

export function deinit(): void;

export function g_value_dup(value: any): unknown;

export function g_value_free(value: any): void;

export function g_value_hashtable_new(): GLib.HashTable<string, GObject.Value>;

export function g_value_hashtable_new_direct(): GLib.HashTable<any, GObject.Value>;

export function g_value_new(g_type: GObject.GType): unknown;

export function init(argv?: string[] | null): string[] | null;

export function init_get_option_group(): GLib.OptionGroup;

export function log_configure(config: string): void;

export function metadata_key_get_desc(key: KeyID): string;

export function metadata_key_get_name(key: KeyID): string;

export function metadata_key_get_type(key: KeyID): GObject.GType;

export function multiple_get_media_from_uri(
    uri: string,
    keys: KeyID[],
    options: OperationOptions,
    callback: SourceResolveCb
): void;

export function multiple_search(
    sources: Source[] | null,
    text: string,
    keys: KeyID[],
    options: OperationOptions,
    callback: SourceResultCb
): number;

export function multiple_search_sync(
    sources: Source[] | null,
    text: string,
    keys: KeyID[],
    options: OperationOptions
): Media[];

export function operation_cancel(operation_id: number): void;

export function operation_get_data(operation_id: number): any | null;

export function operation_set_data(operation_id: number, user_data?: any | null): void;

export function operation_set_data_full(
    operation_id: number,
    user_data?: any | null,
    destroy_func?: GLib.DestroyNotify | null
): void;

export function paging_translate(
    skip: number,
    count: number,
    max_page_size: number,
    page_size: number,
    page_number: number,
    internal_offset: number
): void;

export function range_value_hashtable_insert(
    hash_table: GLib.HashTable<any, any>,
    key: any | null,
    min: any,
    max: any
): void;

export function range_value_hashtable_new(): GLib.HashTable<any, RangeValue>;

export type PluginDeinitFunc = (plugin: Plugin) => void;
export type PluginRegisterKeysFunc = (registry: Registry, plugin: Plugin) => void;
export type SourceRemoveCb = (source: Source, media: Media, error?: GLib.Error | null) => void;
export type SourceResolveCb = (source: Source, operation_id: number, media: Media, error?: GLib.Error | null) => void;
export type SourceResultCb = (
    source: Source,
    operation_id: number,
    media: Media | null,
    remaining: number,
    error?: GLib.Error | null
) => void;
export type SourceStoreCb = (source: Source, media: Media, failed_keys: KeyID[], error?: GLib.Error | null) => void;

export namespace CoreError {
    export const $gtype: GObject.GType<CoreError>;
}

export enum CoreError {
    BROWSE_FAILED = 1,
    SEARCH_FAILED = 2,
    SEARCH_NULL_UNSUPPORTED = 3,
    QUERY_FAILED = 4,
    RESOLVE_FAILED = 5,
    MEDIA_NOT_FOUND = 6,
    STORE_FAILED = 7,
    STORE_METADATA_FAILED = 8,
    REMOVE_FAILED = 9,
    MEDIA_FROM_URI_FAILED = 10,
    CONFIG_LOAD_FAILED = 11,
    CONFIG_FAILED = 12,
    UNREGISTER_SOURCE_FAILED = 13,
    LOAD_PLUGIN_FAILED = 14,
    UNLOAD_PLUGIN_FAILED = 15,
    REGISTER_METADATA_KEY_FAILED = 16,
    NOTIFY_CHANGED_FAILED = 17,
    OPERATION_CANCELLED = 18,
    AUTHENTICATION_TOKEN = 19,
}

export namespace LogLevel {
    export const $gtype: GObject.GType<LogLevel>;
}

export enum LogLevel {
    NONE = 0,
    ERROR = 1,
    WARNING = 2,
    MESSAGE = 3,
    INFO = 4,
    DEBUG = 5,
    LAST = 6,
}

export namespace MediaSerializeType {
    export const $gtype: GObject.GType<MediaSerializeType>;
}

export enum MediaSerializeType {
    BASIC = 0,
    PARTIAL = 1,
    FULL = 2,
}

export namespace MediaType {
    export const $gtype: GObject.GType<MediaType>;
}

export enum MediaType {
    UNKNOWN = 0,
    AUDIO = 1,
    VIDEO = 2,
    IMAGE = 3,
    CONTAINER = 4,
}

export namespace Rank {
    export const $gtype: GObject.GType<Rank>;
}

export enum Rank {
    LOWEST = -64,
    LOW = -32,
    DEFAULT = 0,
    HIGH = 32,
    HIGHEST = 64,
}

export namespace SourceChangeType {
    export const $gtype: GObject.GType<SourceChangeType>;
}

export enum SourceChangeType {
    CHANGED = 0,
    ADDED = 1,
    REMOVED = 2,
}

export namespace ResolutionFlags {
    export const $gtype: GObject.GType<ResolutionFlags>;
}

export enum ResolutionFlags {
    NORMAL = 0,
    FULL = 1,
    IDLE_RELAY = 2,
    FAST_ONLY = 4,
}

export namespace SupportedMedia {
    export const $gtype: GObject.GType<SupportedMedia>;
}

export enum SupportedMedia {
    NONE = 0,
    AUDIO = 1,
    VIDEO = 2,
    IMAGE = 4,
    ALL = 7,
}

export namespace SupportedOps {
    export const $gtype: GObject.GType<SupportedOps>;
}

export enum SupportedOps {
    NONE = 0,
    RESOLVE = 1,
    BROWSE = 2,
    SEARCH = 4,
    QUERY = 8,
    STORE = 16,
    STORE_PARENT = 32,
    STORE_METADATA = 64,
    REMOVE = 128,
    MEDIA_FROM_URI = 256,
    NOTIFY_CHANGE = 512,
}

export namespace TypeFilter {
    export const $gtype: GObject.GType<TypeFilter>;
}

export enum TypeFilter {
    NONE = 0,
    AUDIO = 1,
    VIDEO = 2,
    IMAGE = 4,
    ALL = 7,
}

export namespace WriteFlags {
    export const $gtype: GObject.GType<WriteFlags>;
}

export enum WriteFlags {
    NORMAL = 0,
    FULL = 1,
}

export namespace Caps {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Caps extends GObject.Object {
    static $gtype: GObject.GType<Caps>;

    constructor(properties?: Partial<Caps.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Caps.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Caps;

    // Members

    get_key_filter(): KeyID[];

    get_key_range_filter(): KeyID[];

    get_type_filter(): TypeFilter;

    is_key_filter(key: KeyID): boolean;

    is_key_range_filter(key: KeyID): boolean;

    set_key_filter(keys: KeyID[]): void;

    set_key_range_filter(keys: KeyID[]): void;

    set_type_filter(filter: TypeFilter): void;

    test_option(key: string, value: any): boolean;
}

export namespace Config {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Config extends GObject.Object {
    static $gtype: GObject.GType<Config>;

    constructor(properties?: Partial<Config.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Config.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ConfigPrivate;

    // Constructors

    static ['new'](plugin: string, source?: string | null): Config;

    // Members

    get_api_key(): string;

    get_api_key_blob(size: number): number;

    get_api_secret(): string;

    get_api_token(): string;

    get_api_token_secret(): string;

    get_binary(param: string, size?: number | null): number;

    get_boolean(param: string): boolean;

    get_float(param: string): number;

    get_int(param: string): number;

    get_password(): string;

    get_plugin(): string;

    get_source(): string;

    get_string(param: string): string;

    get_username(): string;

    has_param(param: string): boolean;

    set(param: string, value: any): void;
    set(...args: never[]): never;

    set_api_key(key: string): void;

    set_api_key_blob(blob: number, size: number): void;

    set_api_secret(secret: string): void;

    set_api_token(token: string): void;

    set_api_token_secret(secret: string): void;

    set_binary(param: string, blob: number, size: number): void;

    set_boolean(param: string, value: boolean): void;

    set_float(param: string, value: number): void;

    set_int(param: string, value: number): void;

    set_password(password: string): void;

    set_plugin(plugin: string): void;

    set_source(source: string): void;

    set_string(param: string, value: string): void;

    set_username(username: string): void;
}

export namespace Data {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Data extends GObject.Object {
    static $gtype: GObject.GType<Data>;

    constructor(properties?: Partial<Data.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Data.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DataPrivate;

    // Constructors

    static ['new'](): Data;

    // Members

    add_binary(key: KeyID, buf: number, size: number): void;

    add_boxed(key: KeyID, boxed?: any | null): void;

    add_float(key: KeyID, floatvalue: number): void;

    add_for_id(key_name: string, value: any): boolean;

    add_int(key: KeyID, intvalue: number): void;

    add_int64(key: KeyID, intvalue: number): void;

    add_related_keys(relkeys: RelatedKeys): void;

    add_string(key: KeyID, strvalue: string): void;

    dup(): Data;

    get(key: KeyID): unknown;

    get_binary(key: KeyID): [number, number];

    get_boolean(key: KeyID): boolean;

    get_boxed(key: KeyID): any | null;

    get_float(key: KeyID): number;

    get_int(key: KeyID): number;

    get_int64(key: KeyID): number;

    get_keys(): KeyID[];

    get_related_keys(key: KeyID, index: number): RelatedKeys;

    get_single_values_for_key(key: KeyID): GObject.Value[];

    get_single_values_for_key_string(key: KeyID): string[];

    get_string(key: KeyID): string;

    has_key(key: KeyID): boolean;

    length(key: KeyID): number;

    remove(key: KeyID): void;

    remove_nth(key: KeyID, index: number): void;

    set(key: KeyID, value: any): void;
    set(...args: never[]): never;

    set_binary(key: KeyID, buf: number, size: number): void;

    set_boolean(key: KeyID, boolvalue: boolean): void;

    set_boxed(key: KeyID, boxed?: any | null): void;

    set_float(key: KeyID, floatvalue: number): void;

    set_for_id(key_name: string, value: any): boolean;

    set_int(key: KeyID, intvalue: number): void;

    set_int64(key: KeyID, intvalue: number): void;

    set_related_keys(relkeys: RelatedKeys, index: number): void;

    set_string(key: KeyID, strvalue: string): void;
}

export namespace Media {
    export interface ConstructorProperties extends Data.ConstructorProperties {
        [key: string]: any;

        media_type: MediaType;
        mediaType: MediaType;
    }
}

export class Media extends Data {
    static $gtype: GObject.GType<Media>;

    constructor(properties?: Partial<Media.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Media.ConstructorProperties>, ...args: any[]): void;

    // Properties
    media_type: MediaType;
    mediaType: MediaType;

    // Constructors

    static audio_new(): Media;

    static container_new(): Media;

    static image_new(): Media;

    static ['new'](): Media;

    static video_new(): Media;

    // Members

    add_artist(artist: string): void;

    add_author(author: string): void;

    add_director(director: string): void;

    add_external_player(player: string): void;

    add_external_url(url: string): void;

    add_genre(genre: string): void;

    add_keyword(keyword: string): void;

    add_lyrics(lyrics: string): void;

    add_mb_artist_id(mb_artist_id: string): void;

    add_performer(performer: string): void;

    add_producer(producer: string): void;

    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void;

    add_thumbnail(thumbnail: string): void;

    add_thumbnail_binary(thumbnail: number, size: number): void;

    add_url_data(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void;

    get_album(): string;

    get_album_artist(): string;

    get_album_disc_number(): number;

    get_artist(): string;

    get_artist_nth(index: number): string;

    get_author(): string;

    get_author_nth(index: number): string;

    get_bitrate(): number;

    get_camera_model(): string;

    get_certificate(): string;

    get_childcount(): number;

    get_composer(): string;

    get_composer_nth(index: number): string;

    get_creation_date(): GLib.DateTime;

    get_description(): string;

    get_director(): string;

    get_director_nth(index: number): string;

    get_duration(): number;

    get_episode(): number;

    get_episode_title(): string;

    get_exposure_time(): number;

    get_external_url(): string;

    get_external_url_nth(index: number): string;

    get_favourite(): boolean;

    get_flash_used(): string;

    get_framerate(): number;

    get_genre(): string;

    get_genre_nth(index: number): string;

    get_height(): number;

    get_id(): string;

    get_iso_speed(): number;

    get_keyword(): string;

    get_keyword_nth(index: number): string;

    get_last_played(): GLib.DateTime;

    get_last_position(): number;

    get_license(): string;

    get_lyrics(): string;

    get_lyrics_nth(index: number): string;

    get_mb_album_id(): string;

    get_mb_artist_id(): string;

    get_mb_artist_id_nth(index: number): string;

    get_mb_recording_id(): string;

    get_mb_release_group_id(): string;

    get_mb_release_id(): string;

    get_mb_track_id(): string;

    get_media_type(): MediaType;

    get_mime(): string;

    get_modification_date(): GLib.DateTime;

    get_orientation(): number;

    get_original_title(): string;

    get_performer(): string;

    get_performer_nth(index: number): string;

    get_play_count(): number;

    get_player(): string;

    get_player_nth(index: number): string;

    get_producer(): string;

    get_producer_nth(index: number): string;

    get_publication_date(): GLib.DateTime;

    get_rating(): number;

    get_region(): string;

    get_region_data(): [string, GLib.DateTime, string];

    get_region_data_nth(index: number): [string, GLib.DateTime, string];

    get_season(): number;

    get_show(): string;

    get_site(): string;

    get_size(): number;

    get_source(): string;

    get_start_time(): number;

    get_studio(): string;

    get_thumbnail(): string;

    get_thumbnail_binary(size: number): number;

    get_thumbnail_binary_nth(size: number, index: number): number;

    get_thumbnail_nth(index: number): string;

    get_title(): string;

    get_track_number(): number;

    get_url(): string;

    get_url_data(framerate: number, width: number, height: number): [string, string, number];

    get_url_data_nth(index: number, framerate: number, width: number, height: number): [string, string, number];

    get_width(): number;

    is_audio(): boolean;

    is_container(): boolean;

    is_image(): boolean;

    is_video(): boolean;

    serialize(): string;

    set_album(album: string): void;

    set_album_artist(album_artist: string): void;

    set_album_disc_number(disc_number: number): void;

    set_artist(artist: string): void;

    set_author(author: string): void;

    set_bitrate(bitrate: number): void;

    set_camera_model(camera_model: string): void;

    set_certificate(certificate: string): void;

    set_childcount(childcount: number): void;

    set_composer(composer: string): void;

    set_creation_date(creation_date: GLib.DateTime): void;

    set_description(description: string): void;

    set_director(director: string): void;

    set_duration(duration: number): void;

    set_episode(episode: number): void;

    set_episode_title(episode_title: string): void;

    set_exposure_time(exposure_time: number): void;

    set_external_player(player: string): void;

    set_external_url(url: string): void;

    set_favourite(favourite: boolean): void;

    set_flash_used(flash_used: string): void;

    set_framerate(framerate: number): void;

    set_genre(genre: string): void;

    set_height(height: number): void;

    set_id(id: string): void;

    set_iso_speed(iso_speed: number): void;

    set_keyword(keyword: string): void;

    set_last_played(last_played: GLib.DateTime): void;

    set_last_position(last_position: number): void;

    set_license(license: string): void;

    set_lyrics(lyrics: string): void;

    set_mb_album_id(mb_album_id: string): void;

    set_mb_artist_id(mb_artist_id: string): void;

    set_mb_recording_id(mb_recording_id: string): void;

    set_mb_release_group_id(mb_release_group_id: string): void;

    set_mb_release_id(mb_release_id: string): void;

    set_mb_track_id(mb_track_id: string): void;

    set_mime(mime: string): void;

    set_modification_date(modification_date: GLib.DateTime): void;

    set_orientation(orientation: number): void;

    set_original_title(original_title: string): void;

    set_performer(performer: string): void;

    set_play_count(play_count: number): void;

    set_producer(producer: string): void;

    set_publication_date(date: GLib.DateTime): void;

    set_rating(rating: number, max: number): void;

    set_region(region: string): void;

    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void;

    set_season(season: number): void;

    set_show(show: string): void;

    set_site(site: string): void;

    set_size(size: number): void;

    set_source(source: string): void;

    set_studio(studio: string): void;

    set_thumbnail(thumbnail: string): void;

    set_thumbnail_binary(thumbnail: number, size: number): void;

    set_title(title: string): void;

    set_track_number(track_number: number): void;

    set_url(url: string): void;

    set_url_data(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void;

    set_width(width: number): void;

    static unserialize(serial: string): Media;
}

export namespace OperationOptions {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class OperationOptions extends GObject.Object {
    static $gtype: GObject.GType<OperationOptions>;

    constructor(properties?: Partial<OperationOptions.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OperationOptions.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](caps?: Caps | null): OperationOptions;

    // Members

    copy(): OperationOptions;

    get_count(): number;

    get_key_filter(key: KeyID): unknown;

    get_key_filter_list(): KeyID[];

    get_key_range_filter(key: KeyID): [GObject.Value | null, GObject.Value | null];

    get_key_range_filter_list(): KeyID[];

    get_resolution_flags(): ResolutionFlags;

    get_skip(): number;

    get_type_filter(): TypeFilter;

    obey_caps(caps: Caps): [boolean, OperationOptions, OperationOptions];

    set_count(count: number): boolean;

    set_key_filters(filters: GLib.HashTable<KeyID, GObject.Value>): boolean;

    set_key_filter_value(key: KeyID, value: any): boolean;

    set_key_range_filter_value(key: KeyID, min_value?: GObject.Value | null, max_value?: GObject.Value | null): boolean;

    set_resolution_flags(flags: ResolutionFlags): boolean;

    set_skip(skip: number): boolean;

    set_type_filter(filter: TypeFilter): boolean;
}

export namespace Plugin {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        loaded: boolean;
    }
}

export class Plugin extends GObject.Object {
    static $gtype: GObject.GType<Plugin>;

    constructor(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    loaded: boolean;

    // Members

    get_author(): string;

    get_description(): string;

    get_filename(): string;

    get_id(): string;

    get_license(): string;

    get_module_name(): string;

    get_name(): string;

    get_site(): string;

    get_sources(): Source[];

    get_version(): string;
}

export namespace Registry {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Registry extends GObject.Object {
    static $gtype: GObject.GType<Registry>;

    constructor(properties?: Partial<Registry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Registry.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'metadata-key-added', callback: (_source: this, key: string) => void): number;

    connect_after(signal: 'metadata-key-added', callback: (_source: this, key: string) => void): number;

    emit(signal: 'metadata-key-added', key: string): void;

    connect(signal: 'source-added', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-added', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-added', source: Source): void;

    connect(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'source-removed', source: Source): void;

    // Members

    activate_all_plugins(): boolean;

    activate_plugin_by_id(plugin_id: string): boolean;

    add_config(config: Config): boolean;

    add_config_from_file(config_file: string): boolean;

    add_config_from_resource(resource_path: string): boolean;

    add_directory(path: string): void;

    get_metadata_keys(): KeyID[];

    get_plugins(only_loaded: boolean): Plugin[];

    get_sources(ranked: boolean): Source[];

    get_sources_by_operations(ops: SupportedOps, ranked: boolean): Source[];

    load_all_plugins(activate: boolean): boolean;

    load_plugin(library_filename: string): boolean;

    load_plugin_directory(path: string): boolean;

    lookup_metadata_key(key_name: string): KeyID;

    lookup_metadata_key_desc(key: KeyID): string;

    lookup_metadata_key_name(key: KeyID): string;

    lookup_metadata_key_relation(key: KeyID): KeyID[];

    lookup_metadata_key_type(key: KeyID): GObject.GType;

    lookup_plugin(plugin_id: string): Plugin;

    lookup_source(source_id: string): Source;

    metadata_key_validate(key: KeyID, value: any): boolean;

    register_metadata_key(param_spec: GObject.ParamSpec, bind_key: KeyID): KeyID;

    register_source(plugin: Plugin, source: Source): boolean;

    unload_plugin(plugin_id: string): boolean;

    unregister_source(source: Source): boolean;

    static get_default(): Registry;
}

export namespace RelatedKeys {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RelatedKeys extends GObject.Object {
    static $gtype: GObject.GType<RelatedKeys>;

    constructor(properties?: Partial<RelatedKeys.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RelatedKeys.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RelatedKeys;

    // Members

    dup(): RelatedKeys;

    get(key: KeyID): unknown;

    get_binary(key: KeyID): [number, number];

    get_boolean(key: KeyID): boolean;

    get_boxed(key: KeyID): any | null;

    get_float(key: KeyID): number;

    get_int(key: KeyID): number;

    get_int64(key: KeyID): number;

    get_keys(): KeyID[];

    get_string(key: KeyID): string;

    has_key(key: KeyID): boolean;

    remove(key: KeyID): void;

    set(key: KeyID, value: any): void;
    set(...args: never[]): never;

    set_binary(key: KeyID, buf: number, size: number): void;

    set_boolean(key: KeyID, booleanvalue: boolean): void;

    set_boxed(key: KeyID, boxed?: any | null): void;

    set_float(key: KeyID, floatvalue: number): void;

    set_for_id(key_name: string, value: any): boolean;

    set_int(key: KeyID, intvalue: number): void;

    set_int64(key: KeyID, intvalue: number): void;

    set_string(key: KeyID, strvalue: string): void;
}

export namespace Source {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auto_split_threshold: number;
        autoSplitThreshold: number;
        plugin: Plugin;
        rank: number;
        source_desc: string;
        sourceDesc: string;
        source_icon: Gio.Icon;
        sourceIcon: Gio.Icon;
        source_id: string;
        sourceId: string;
        source_name: string;
        sourceName: string;
        source_tags: string[];
        sourceTags: string[];
        supported_media: SupportedMedia;
        supportedMedia: SupportedMedia;
    }
}

export abstract class Source extends GObject.Object {
    static $gtype: GObject.GType<Source>;

    constructor(properties?: Partial<Source.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Source.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_split_threshold: number;
    autoSplitThreshold: number;
    plugin: Plugin;
    rank: number;
    source_desc: string;
    sourceDesc: string;
    source_icon: Gio.Icon;
    sourceIcon: Gio.Icon;
    source_id: string;
    sourceId: string;
    source_name: string;
    sourceName: string;
    source_tags: string[];
    sourceTags: string[];
    supported_media: SupportedMedia;
    supportedMedia: SupportedMedia;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'content-changed',
        callback: (
            _source: this,
            changed_medias: Media[],
            change_type: SourceChangeType,
            location_unknown: boolean
        ) => void
    ): number;

    connect_after(
        signal: 'content-changed',
        callback: (
            _source: this,
            changed_medias: Media[],
            change_type: SourceChangeType,
            location_unknown: boolean
        ) => void
    ): number;

    emit(
        signal: 'content-changed',
        changed_medias: Media[],
        change_type: SourceChangeType,
        location_unknown: boolean
    ): void;

    // Members

    browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number;

    browse_sync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[];

    get_auto_split_threshold(): number;

    get_caps(operation: SupportedOps): Caps;

    get_description(): string;

    get_icon(): Gio.Icon;

    get_id(): string;

    get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number;

    get_media_from_uri_sync(uri: string, keys: KeyID[], options: OperationOptions): Media;

    get_name(): string;

    get_plugin(): Plugin;

    get_rank(): number;

    get_supported_media(): SupportedMedia;

    get_tags(): string[];

    may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean;

    notify_change(media: Media | null, change_type: SourceChangeType, location_unknown: boolean): void;

    notify_change_list(changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void;

    notify_change_start(): boolean;

    notify_change_stop(): boolean;

    query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number;

    query_sync(query: string, keys: KeyID[], options: OperationOptions): Media[];

    remove(media: Media, callback: SourceRemoveCb): void;

    remove_sync(media: Media): void;

    resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number;

    resolve_sync(media: Media | null, keys: KeyID[], options: OperationOptions): Media;

    search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number;

    search_sync(text: string, keys: KeyID[], options: OperationOptions): Media[];

    set_auto_split_threshold(threshold: number): void;

    slow_keys(): KeyID[];

    store(parent: Media | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void;

    store_metadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void;

    store_metadata_sync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[];

    store_sync(parent: Media | null, media: Media, flags: WriteFlags): void;

    supported_keys(): KeyID[];

    supported_operations(): number;

    test_media_from_uri(uri: string): boolean;

    writable_keys(): KeyID[];

    vfunc_browse(bs: SourceBrowseSpec): void;

    vfunc_cancel(operation_id: number): void;

    vfunc_get_caps(operation: SupportedOps): Caps;

    vfunc_may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean;

    vfunc_media_from_uri(mfus: SourceMediaFromUriSpec): void;

    vfunc_notify_change_start(): boolean;

    vfunc_notify_change_stop(): boolean;

    vfunc_query(qs: SourceQuerySpec): void;

    vfunc_remove(rs: SourceRemoveSpec): void;

    vfunc_resolve(ms: SourceResolveSpec): void;

    vfunc_search(ss: SourceSearchSpec): void;

    vfunc_slow_keys(): KeyID[];

    vfunc_store(ss: SourceStoreSpec): void;

    vfunc_store_metadata(sms: SourceStoreMetadataSpec): void;

    vfunc_supported_keys(): KeyID[];

    vfunc_supported_operations(): SupportedOps;

    vfunc_test_media_from_uri(uri: string): boolean;

    vfunc_writable_keys(): KeyID[];
}

export class CapsPrivate {
    static $gtype: GObject.GType<CapsPrivate>;

    constructor(copy: CapsPrivate);
}

export class ConfigPrivate {
    static $gtype: GObject.GType<ConfigPrivate>;

    constructor(copy: ConfigPrivate);
}

export class DataPrivate {
    static $gtype: GObject.GType<DataPrivate>;

    constructor(copy: DataPrivate);
}

export class LogDomain {
    static $gtype: GObject.GType<LogDomain>;

    constructor(copy: LogDomain);

    // Members
    free(): void;
}

export class MediaPrivate {
    static $gtype: GObject.GType<MediaPrivate>;

    constructor(copy: MediaPrivate);
}

export class OperationOptionsPrivate {
    static $gtype: GObject.GType<OperationOptionsPrivate>;

    constructor(copy: OperationOptionsPrivate);
}

export class PluginDescriptor {
    static $gtype: GObject.GType<PluginDescriptor>;

    constructor(copy: PluginDescriptor);

    // Fields
    major_version: number;
    minor_version: number;
    id: string;
    name: string;
    description: string;
    author: string;
    version: string;
    license: string;
    site: string;
    deinit: PluginDeinitFunc;
    register_keys: PluginRegisterKeysFunc;
}

export class PluginPrivate {
    static $gtype: GObject.GType<PluginPrivate>;

    constructor(copy: PluginPrivate);
}

export class RangeValue {
    static $gtype: GObject.GType<RangeValue>;

    constructor(min: any, max: any);
    constructor(copy: RangeValue);

    // Fields
    min: GObject.Value;
    max: GObject.Value;

    // Constructors
    static ['new'](min: any, max: any): RangeValue;

    // Members
    dup(): RangeValue;

    free(): void;

    static hashtable_insert(hash_table: GLib.HashTable<any, any>, key: any | null, min: any, max: any): void;

    static hashtable_new(): GLib.HashTable<any, RangeValue>;
}

export class RegistryPrivate {
    static $gtype: GObject.GType<RegistryPrivate>;

    constructor(copy: RegistryPrivate);
}

export class RelatedKeysPrivate {
    static $gtype: GObject.GType<RelatedKeysPrivate>;

    constructor(copy: RelatedKeysPrivate);
}

export class SourceBrowseSpec {
    static $gtype: GObject.GType<SourceBrowseSpec>;

    constructor(copy: SourceBrowseSpec);

    // Fields
    source: Source;
    operation_id: number;
    container: Media;
    keys: any[];
    options: OperationOptions;
    callback: SourceResultCb;
    user_data: any;
}

export class SourceMediaFromUriSpec {
    static $gtype: GObject.GType<SourceMediaFromUriSpec>;

    constructor(copy: SourceMediaFromUriSpec);

    // Fields
    source: Source;
    operation_id: number;
    uri: string;
    keys: any[];
    options: OperationOptions;
    callback: SourceResolveCb;
    user_data: any;
}

export class SourcePrivate {
    static $gtype: GObject.GType<SourcePrivate>;

    constructor(copy: SourcePrivate);
}

export class SourceQuerySpec {
    static $gtype: GObject.GType<SourceQuerySpec>;

    constructor(copy: SourceQuerySpec);

    // Fields
    source: Source;
    operation_id: number;
    query: string;
    keys: any[];
    options: OperationOptions;
    callback: SourceResultCb;
    user_data: any;
}

export class SourceRemoveSpec {
    static $gtype: GObject.GType<SourceRemoveSpec>;

    constructor(copy: SourceRemoveSpec);

    // Fields
    source: Source;
    media_id: string;
    media: Media;
    callback: SourceRemoveCb;
    user_data: any;
}

export class SourceResolveSpec {
    static $gtype: GObject.GType<SourceResolveSpec>;

    constructor(copy: SourceResolveSpec);

    // Fields
    source: Source;
    operation_id: number;
    media: Media;
    keys: any[];
    options: OperationOptions;
    callback: SourceResolveCb;
    user_data: any;
}

export class SourceSearchSpec {
    static $gtype: GObject.GType<SourceSearchSpec>;

    constructor(copy: SourceSearchSpec);

    // Fields
    source: Source;
    operation_id: number;
    text: string;
    keys: any[];
    options: OperationOptions;
    callback: SourceResultCb;
    user_data: any;
}

export class SourceStoreMetadataSpec {
    static $gtype: GObject.GType<SourceStoreMetadataSpec>;

    constructor(copy: SourceStoreMetadataSpec);

    // Fields
    source: Source;
    media: Media;
    keys: any[];
    flags: WriteFlags;
    callback: SourceStoreCb;
    user_data: any;
    failed_keys: any[];
}

export class SourceStoreSpec {
    static $gtype: GObject.GType<SourceStoreSpec>;

    constructor(copy: SourceStoreSpec);

    // Fields
    source: Source;
    media: Media;
    callback: SourceStoreCb;
    user_data: any;
}

export type KeyID = number;
