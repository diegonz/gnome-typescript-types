/**
 * RB 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Gst from './gst';
import * as GstPbutils from './gstpbutils';
import * as Gtk from './gtk';
import * as MPID from './mpid';
import * as libxml2 from './libxml2';
import * as Atk from './atk';
import * as GLib from './glib';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gdk from './gdk';

export const ENABLE_PROFILING: number;
export const ENCODER_DEST_TEMPFILE: string;
export const ENCODING_STYLE_CBR: string;
export const ENCODING_STYLE_VBR: string;
export const FFWD_OFFSET: number;
export const GST_MEDIA_TYPE_AAC: string;
export const GST_MEDIA_TYPE_FLAC: string;
export const GST_MEDIA_TYPE_MP3: string;
export const GST_MEDIA_TYPE_OGG_VORBIS: string;
export const PLAYER_SECOND: number;
export const PLAYLIST_AUTOMATIC: string;
export const PLAYLIST_BROWSER_POSITION: string;
export const PLAYLIST_LIMIT: string;
export const PLAYLIST_LIMIT_COUNT: string;
export const PLAYLIST_LIMIT_SIZE: string;
export const PLAYLIST_LIMIT_TIME: string;
export const PLAYLIST_LOCATION: string;
export const PLAYLIST_NAME: string;
export const PLAYLIST_PLAYLIST: string;
export const PLAYLIST_QUEUE: string;
export const PLAYLIST_SEARCH_TYPE: string;
export const PLAYLIST_SHOW_BROWSER: string;
export const PLAYLIST_SORT_DIRECTION: string;
export const PLAYLIST_SORT_KEY: string;
export const PLAYLIST_STATIC: string;
export const PLAYLIST_TYPE: string;
export const PLAYLIST_XML_VERSION: string;
export const PROFILE_INDENTATION: number;
export const RHYTHMDB_PROP_COVER_ART: string;
export const RHYTHMDB_PROP_COVER_ART_URI: string;
export const RHYTHMDB_PROP_STREAM_SONG_ALBUM: string;
export const RHYTHMDB_PROP_STREAM_SONG_ARTIST: string;
export const RHYTHMDB_PROP_STREAM_SONG_TITLE: string;
export const RHYTHMDB_QUERY_MODEL_SUGGESTED_UPDATE_CHUNK: number;
export const RWD_OFFSET: number;

export function builder_boldify_label(builder: Gtk.Builder, name: string): void;

export function builder_load(file: string, user_data?: any | null): Gtk.Builder;

export function builder_load_plugin_file(plugin: GObject.Object, file: string, user_data?: any | null): Gtk.Builder;

export function canonicalise_uri(uri: string): string;

export function check_dir_has_space(dir: Gio.File, bytes_needed: number): boolean;

export function check_dir_has_space_uri(uri: string, bytes_needed: number): boolean;

export function combo_box_hyphen_separator_func(model: Gtk.TreeModel, iter: Gtk.TreeIter, data?: any | null): boolean;

export function compare_gtimeval(a: GLib.TimeVal, b: GLib.TimeVal): number;

export function debug_get_args(): string[];

export function debug_init(debug: boolean): void;

export function debug_init_match(match: string): void;

export function debug_matches(func: string, file: string): boolean;

export function debug_real(func: string, file: string, line: number, newline: boolean, message: string): void;

export function debug_stop_in_debugger(): void;

export function device_source_uri_is_source(source: Source, uri: string): boolean;

export function device_source_want_uri(source: Source, uri: string): number;

export function encoder_error_quark(): GLib.Quark;

export function encoder_new(): Encoder;

export function ext_db_key_create_lookup(field: string, value: string): ExtDBKey;

export function ext_db_key_create_storage(field: string, value: string): ExtDBKey;

export function file(filename: string): string;

export function file_chooser_new(
    title: string,
    parent: Gtk.Window,
    action: Gtk.FileChooserAction,
    local_only: boolean
): Gtk.Widget;

export function file_find_extant_parent(file: Gio.File): Gio.File;

export function file_helpers_init(uninstalled: boolean): void;

export function file_helpers_shutdown(): void;

export function file_resolve_symlink(file: Gio.File): Gio.File;

export function find_plugin_data_file(plugin: GObject.Object, name: string): string;

export function find_plugin_resource(plugin: GObject.Object, name: string): string;

export function find_user_cache_file(name: string): string;

export function find_user_data_file(name: string): string;

export function gst_add_filter(
    player: Player,
    filterbin: Gst.Element,
    element: Gst.Element,
    use_pad_block: boolean
): boolean;

export function gst_add_tee(player: Player, tee: Gst.Element, element: Gst.Element, use_pad_block: boolean): boolean;

export function gst_caps_to_media_type(caps: Gst.Caps): string;

export function gst_create_filter_bin(): Gst.Element;

export function gst_encoder_set_encoding_style(element: Gst.Element, style: string): boolean;

export function gst_encoding_profile_get_encoder(profile: GstPbutils.EncodingProfile): Gst.Element;

export function gst_encoding_profile_get_encoder_caps(profile: GstPbutils.EncodingProfile): Gst.Caps;

export function gst_encoding_profile_get_media_type(profile: GstPbutils.EncodingProfile): string;

export function gst_encoding_profile_get_presets(profile: GstPbutils.EncodingProfile): number[];

export function gst_encoding_profile_get_settings(profile: GstPbutils.EncodingProfile, style: string): string[];

export function gst_encoding_profile_set_preset(profile: GstPbutils.EncodingProfile, preset: string): void;

export function gst_error_get_error_code(error: GLib.Error): number;

export function gst_get_default_encoding_target(): GstPbutils.EncodingTarget;

export function gst_get_encoding_profile(media_type: string): GstPbutils.EncodingProfile;

export function gst_get_missing_plugin_type(structure: Gst.Structure): GstMediaType;

export function gst_media_type_is_lossless(media_type: string): boolean;

export function gst_media_type_matches_profile(profile: GstPbutils.EncodingProfile, media_type: string): boolean;

export function gst_media_type_to_caps(media_type: string): Gst.Caps;

export function gst_media_type_to_extension(media_type: string): string;

export function gst_media_type_to_mime_type(media_type: string): string;

export function gst_mime_type_to_media_type(mime_type: string): string;

export function gst_process_embedded_image(taglist: Gst.TagList, tag: string): GdkPixbuf.Pixbuf;

export function gst_process_tag_string(taglist: Gst.TagList, tag: string, field: MetaDataField, value: any): boolean;

export function gst_remove_filter(
    player: Player,
    filterbin: Gst.Element,
    element: Gst.Element,
    use_pad_block: boolean
): boolean;

export function gst_remove_tee(player: Player, tee: Gst.Element, element: Gst.Element, use_pad_block: boolean): boolean;

export function is_main_thread(): boolean;

export function locale_dir(): string;

export function make_duration_string(duration: number): string;

export function make_elapsed_time_string(elapsed: number, duration: number, show_remaining: boolean): string;

export function make_time_string(seconds: number): string;

export function menu_update_link(menu: Gio.Menu, link_attr: string, target: Gio.MenuModel): void;

export function metadata_error_quark(): GLib.Quark;

export function music_dir(): string;

export function player_error_quark(): GLib.Quark;

export function player_gst_find_element_with_property(element: Gst.Element, property: string): Gst.Element;

export function player_gst_try_audio_sink(plugin_name: string, name: string): Gst.Element;

export function player_new(want_crossfade: boolean): Player;

export function podcast_parse_channel_copy(data: PodcastChannel): PodcastChannel;

export function podcast_parse_channel_free(data: PodcastChannel): void;

export function podcast_parse_error_quark(): GLib.Quark;

export function podcast_parse_item_copy(data: PodcastItem): PodcastItem;

export function podcast_parse_item_free(data: PodcastItem): void;

export function podcast_parse_load_feed(data: PodcastChannel, url: string, existing_feed: boolean): boolean;

export function refstring_equal(ap?: any | null, bp?: any | null): boolean;

export function refstring_find(init: string): RefString;

export function refstring_hash(p?: any | null): number;

export function refstring_system_init(): void;

export function refstring_system_shutdown(): void;

export function rhythmdb_query_get_type(): GObject.GType;

export function safe_strcmp(a: string, b: string): number;

export function sanitize_path_for_msdos_filesystem(path: string): void;

export function sanitize_uri_for_filesystem(uri: string, filesystem?: string | null): string;

export function scale_pixbuf_to_size(pixbuf: GdkPixbuf.Pixbuf, size: Gtk.IconSize): GdkPixbuf.Pixbuf;

export function search_fold(original: string): string;

export function set_tree_view_column_fixed_width(
    treeview: Gtk.Widget,
    column: Gtk.TreeViewColumn,
    renderer: Gtk.CellRenderer,
    strings: string[],
    padding: number
): void;

export function settings_delayed_sync(
    settings: Gio.Settings,
    sync_func?: DelayedSyncFunc | null,
    destroy?: GLib.DestroyNotify | null
): void;

export function shell_error_quark(): GLib.Quark;

export function shell_player_error_quark(): GLib.Quark;

export function stock_icons_init(): void;

export function stock_icons_shutdown(): void;

export function string_split_words(string: string): string[];

export function uri_append_path(uri: string, path: string): string;

export function uri_append_uri(uri: string, fragment: string): string;

export function uri_could_be_podcast(uri: string, is_opml: boolean): boolean;

export function uri_create_parent_dirs(uri: string): boolean;

export function uri_exists(uri: string): boolean;

export function uri_get_dir_name(uri: string): string;

export function uri_get_filesystem_type(uri: string, mount_point: string): string;

export function uri_get_mount_point(uri: string): string;

export function uri_get_short_path_name(uri: string): string;

export function uri_handle_recursively(uri: string, cancel: Gio.Cancellable | null, func: UriRecurseFunc): void;

export function uri_handle_recursively_async(uri: string, cancel: Gio.Cancellable | null, func: UriRecurseFunc): void;

export function uri_is_directory(uri: string): boolean;

export function uri_is_hidden(uri: string): boolean;

export function uri_is_local(uri: string): boolean;

export function uri_is_readable(uri: string): boolean;

export function uri_is_writable(uri: string): boolean;

export function uri_list_parse(uri_list: string): string[];

export function uri_make_hidden(uri: string): string;

export function uri_mkstemp(prefix: string, uri_ret: string, stream: Gio.OutputStream): boolean;

export function uri_resolve_symlink(uri: string): string;

export function user_cache_dir(): string;

export function user_data_dir(): string;

export type AsyncCopyCallback = (copy: AsyncCopy, success: boolean, data?: any | null) => void;
export type AsyncCopyProgressCallback = (copy: AsyncCopy, position: number, total: number, data?: any | null) => void;
export type BrowserSourceFeatureFunc = (source: BrowserSource) => boolean;
export type BrowserSourceStringFunc = (source: BrowserSource) => string;
export type ChunkLoaderCallback = (loader: ChunkLoader, data: GLib.Bytes | Uint8Array, total: number) => void;
export type DelayedSyncFunc = (settings: Gio.Settings, data?: any | null) => void;
export type ExtDBRequestCallback = (key: ExtDBKey, store_key: ExtDBKey, filename: string, data: any) => void;
export type PlayOrderQueryFunc = (porder: PlayOrder) => boolean;
export type PlayerFeatureFunc = (player: Player) => boolean;
export type RhythmDBEntryForeachFunc = (entry: RhythmDBEntry, data?: any | null) => void;
export type RhythmDBEntryTypeBooleanFunc = (entry_type: RhythmDBEntryType, entry: RhythmDBEntry) => boolean;
export type RhythmDBEntryTypeStringFunc = (entry_type: RhythmDBEntryType, entry: RhythmDBEntry) => string;
export type SegmentedBarValueFormatter = (percent: number, data?: any | null) => string;
export type SourceAddCallback = (source: Source, uri: string, data?: any | null) => void;
export type SourceFeatureFunc = (source: Source) => boolean;
export type SourceStringFunc = (source: Source) => string;
export type UriRecurseFunc = (file: Gio.File, info: Gio.FileInfo, data?: any | null) => boolean;

export namespace DisplayPageGroupCategory {
    export const $gtype: GObject.GType<DisplayPageGroupCategory>;
}

export enum DisplayPageGroupCategory {
    FIXED = 0,
    REMOVABLE = 1,
    PERSISTENT = 2,
    TRANSIENT = 3,
    TOOLS = 4,
    LAST = 5,
}

export namespace DisplayPageGroupType {
    export const $gtype: GObject.GType<DisplayPageGroupType>;
}

export enum DisplayPageGroupType {
    FIXED = 0,
    PERSISTENT = 2,
    REMOVABLE = 1,
    TRANSIENT = 3,
    TOOLS = 4,
}

export namespace DisplayPageModelColumn {
    export const $gtype: GObject.GType<DisplayPageModelColumn>;
}

export enum DisplayPageModelColumn {
    PLAYING = 0,
    PAGE = 1,
}

export class EncoderError extends GLib.Error {
    static $gtype: GObject.GType<EncoderError>;

    constructor(options: { message: string; code: number });
    constructor(copy: EncoderError);

    // Properties
    static FORMAT_UNSUPPORTED: number;
    static INTERNAL_ERROR: number;
    static FILE_ACCESS_ERROR: number;
    static OUT_OF_SPACE: number;
    static DESTINATION_READ_ONLY: number;
    static DESTINATION_EXISTS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace EntryViewColumn {
    export const $gtype: GObject.GType<EntryViewColumn>;
}

export enum EntryViewColumn {
    TRACK_NUMBER = 0,
    TITLE = 1,
    ARTIST = 2,
    ALBUM = 3,
    GENRE = 4,
    COMMENT = 5,
    DURATION = 6,
    QUALITY = 7,
    RATING = 8,
    PLAY_COUNT = 9,
    YEAR = 10,
    LAST_PLAYED = 11,
    FIRST_SEEN = 12,
    LAST_SEEN = 13,
    LOCATION = 14,
    BPM = 15,
    ERROR = 16,
    COMPOSER = 17,
}

export namespace EntryViewState {
    export const $gtype: GObject.GType<EntryViewState>;
}

export enum EntryViewState {
    NOT_PLAYING = 0,
    PLAYING = 1,
    PAUSED = 2,
}

export namespace ExtDBSourceType {
    export const $gtype: GObject.GType<ExtDBSourceType>;
}

export enum ExtDBSourceType {
    NONE = 0,
    SEARCH = 1,
    EMBEDDED = 2,
    USER = 3,
    USER_EXPLICIT = 4,
}

export namespace GstMediaType {
    export const $gtype: GObject.GType<GstMediaType>;
}

export enum GstMediaType {
    NONE = 0,
    CONTAINER = 1,
    AUDIO = 2,
    VIDEO = 3,
    OTHER = 4,
}

export namespace MetaDataError {
    export const $gtype: GObject.GType<MetaDataError>;
}

export enum MetaDataError {
    IO = 0,
    MISSING_PLUGIN = 1,
    UNRECOGNIZED = 2,
    UNSUPPORTED = 3,
    GENERAL = 4,
    INTERNAL = 5,
    EMPTY_FILE = 6,
}

export namespace MetaDataField {
    export const $gtype: GObject.GType<MetaDataField>;
}

export enum MetaDataField {
    TITLE = 0,
    ARTIST = 1,
    ALBUM = 2,
    DATE = 3,
    GENRE = 4,
    COMMENT = 5,
    TRACK_NUMBER = 6,
    MAX_TRACK_NUMBER = 7,
    DISC_NUMBER = 8,
    MAX_DISC_NUMBER = 9,
    DESCRIPTION = 10,
    VERSION = 11,
    ISRC = 12,
    ORGANIZATION = 13,
    COPYRIGHT = 14,
    CONTACT = 15,
    LICENSE = 16,
    PERFORMER = 17,
    DURATION = 18,
    CODEC = 19,
    BITRATE = 20,
    TRACK_GAIN = 21,
    TRACK_PEAK = 22,
    ALBUM_GAIN = 23,
    ALBUM_PEAK = 24,
    LANGUAGE_CODE = 25,
    BPM = 26,
    MUSICBRAINZ_TRACKID = 27,
    MUSICBRAINZ_ARTISTID = 28,
    MUSICBRAINZ_ALBUMID = 29,
    MUSICBRAINZ_ALBUMARTISTID = 30,
    ARTIST_SORTNAME = 31,
    ALBUM_SORTNAME = 32,
    ALBUM_ARTIST = 33,
    ALBUM_ARTIST_SORTNAME = 34,
    COMPOSER = 35,
    COMPOSER_SORTNAME = 36,
    LAST = 37,
}

export class MetadataErrorType extends GLib.Error {
    static $gtype: GObject.GType<MetadataErrorType>;

    constructor(options: { message: string; code: number });
    constructor(copy: MetadataErrorType);

    // Properties
    static IO_ERROR: number;
    static MISSING_PLUGINS: number;
    static IDENTIFY_FAILED: number;
    static UNSUPPORTED_FILETYPE: number;
    static GENERAL_ERROR: number;
    static INTERNAL_ERROR: number;
    static EMPTY_FILE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace MetadataFieldType {
    export const $gtype: GObject.GType<MetadataFieldType>;
}

export enum MetadataFieldType {
    TITLE = 0,
    ARTIST = 1,
    ALBUM = 2,
    DATE = 3,
    GENRE = 4,
    COMMENT = 5,
    TRACK_NUMBER = 6,
    TRACK_COUNT = 7,
    ALBUM_DISC_NUMBER = 8,
    ALBUM_DISC_COUNT = 9,
    DESCRIPTION = 10,
    VERSION = 11,
    ISRC = 12,
    ORGANIZATION = 13,
    COPYRIGHT = 14,
    CONTACT = 15,
    LICENSE = 16,
    PERFORMER = 17,
    DURATION = 18,
    CODEC = 19,
    BITRATE = 20,
    REPLAYGAIN_TRACK_GAIN = 21,
    REPLAYGAIN_TRACK_PEAK = 22,
    REPLAYGAIN_ALBUM_GAIN = 23,
    REPLAYGAIN_ALBUM_PEAK = 24,
    BEATS_PER_MINUTE = 26,
    LANGUAGE_CODE = 25,
    MUSICBRAINZ_TRACKID = 27,
    MUSICBRAINZ_ARTISTID = 28,
    MUSICBRAINZ_ALBUMID = 29,
    MUSICBRAINZ_ALBUMARTISTID = 30,
    MUSICBRAINZ_SORTNAME = 31,
    ALBUM_SORTNAME = 32,
    ALBUM_ARTIST = 33,
    ALBUM_ARTIST_SORTNAME = 34,
    COMPOSER = 35,
    COMPOSER_SORTNAME = 36,
}

export class PlayerError extends GLib.Error {
    static $gtype: GObject.GType<PlayerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PlayerError);

    // Properties
    static NO_AUDIO: number;
    static GENERAL_ERROR: number;
    static INTERNAL_ERROR: number;
    static NOT_FOUND: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PlayerPlayType {
    export const $gtype: GObject.GType<PlayerPlayType>;
}

export enum PlayerPlayType {
    REPLACE = 0,
    START_AFTER_EOS = 1,
    CROSSFADE = 2,
}

export namespace PlaylistExportType {
    export const $gtype: GObject.GType<PlaylistExportType>;
}

export enum PlaylistExportType {
    UNKNOWN = 0,
    M3U = 1,
    PLS = 2,
    XSPF = 3,
}

export namespace PlaylistManagerError {
    export const $gtype: GObject.GType<PlaylistManagerError>;
}

export enum PlaylistManagerError {
    PARSE = 0,
    PLAYLIST_EXISTS = 1,
    PLAYLIST_NOT_FOUND = 2,
}

export class PodcastParseError extends GLib.Error {
    static $gtype: GObject.GType<PodcastParseError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PodcastParseError);

    // Properties
    static FILE_INFO: number;
    static MIME_TYPE: number;
    static XML_PARSE: number;
    static NO_ITEMS: number;
}

export namespace RhythmDBEntryAvailability {
    export const $gtype: GObject.GType<RhythmDBEntryAvailability>;
}

export enum RhythmDBEntryAvailability {
    CHECKED = 0,
    MOUNTED = 1,
    UNMOUNTED = 2,
    NOT_FOUND = 3,
}

export namespace RhythmDBEntryCategory {
    export const $gtype: GObject.GType<RhythmDBEntryCategory>;
}

export enum RhythmDBEntryCategory {
    NORMAL = 0,
    STREAM = 1,
    CONTAINER = 2,
    VIRTUAL = 3,
}

export namespace RhythmDBError {
    export const $gtype: GObject.GType<RhythmDBError>;
}

export enum RhythmDBError {
    RHYTHMDB_ERROR_ACCESS_FAILED = 0,
}

export namespace RhythmDBPropType {
    export const $gtype: GObject.GType<RhythmDBPropType>;
}

export enum RhythmDBPropType {
    TYPE = 0,
    ENTRY_ID = 1,
    TITLE = 2,
    GENRE = 3,
    ARTIST = 4,
    ALBUM = 5,
    TRACK_NUMBER = 6,
    TRACK_TOTAL = 7,
    DISC_NUMBER = 8,
    DISC_TOTAL = 9,
    DURATION = 10,
    FILE_SIZE = 11,
    LOCATION = 12,
    MOUNTPOINT = 13,
    MTIME = 14,
    FIRST_SEEN = 15,
    LAST_SEEN = 16,
    RATING = 17,
    PLAY_COUNT = 18,
    LAST_PLAYED = 19,
    BITRATE = 20,
    DATE = 21,
    REPLAYGAIN_TRACK_GAIN = 22,
    REPLAYGAIN_TRACK_PEAK = 23,
    REPLAYGAIN_ALBUM_GAIN = 24,
    REPLAYGAIN_ALBUM_PEAK = 25,
    MEDIA_TYPE = 26,
    TITLE_SORT_KEY = 27,
    GENRE_SORT_KEY = 28,
    ARTIST_SORT_KEY = 29,
    ALBUM_SORT_KEY = 30,
    TITLE_FOLDED = 31,
    GENRE_FOLDED = 32,
    ARTIST_FOLDED = 33,
    ALBUM_FOLDED = 34,
    LAST_PLAYED_STR = 35,
    HIDDEN = 36,
    PLAYBACK_ERROR = 37,
    FIRST_SEEN_STR = 38,
    LAST_SEEN_STR = 39,
    SEARCH_MATCH = 40,
    YEAR = 41,
    KEYWORD = 42,
    STATUS = 43,
    DESCRIPTION = 44,
    SUBTITLE = 45,
    SUMMARY = 46,
    LANG = 47,
    COPYRIGHT = 48,
    IMAGE = 49,
    POST_TIME = 50,
    MB_TRACKID = 51,
    MB_ARTISTID = 52,
    MB_ALBUMID = 53,
    MB_ALBUMARTISTID = 54,
    MB_ARTISTSORTNAME = 55,
    ALBUM_SORTNAME = 56,
    ARTIST_SORTNAME_SORT_KEY = 57,
    ARTIST_SORTNAME_FOLDED = 58,
    ALBUM_SORTNAME_SORT_KEY = 59,
    ALBUM_SORTNAME_FOLDED = 60,
    COMMENT = 61,
    ALBUM_ARTIST = 62,
    ALBUM_ARTIST_SORT_KEY = 63,
    ALBUM_ARTIST_FOLDED = 64,
    ALBUM_ARTIST_SORTNAME = 65,
    ALBUM_ARTIST_SORTNAME_SORT_KEY = 66,
    ALBUM_ARTIST_SORTNAME_FOLDED = 67,
    BEATS_PER_MINUTE = 68,
    COMPOSER = 69,
    COMPOSER_SORT_KEY = 70,
    COMPOSER_FOLDED = 71,
    COMPOSER_SORTNAME = 72,
    COMPOSER_SORTNAME_SORT_KEY = 73,
    COMPOSER_SORTNAME_FOLDED = 74,
}

export namespace RhythmDBPropertyModelColumn {
    export const $gtype: GObject.GType<RhythmDBPropertyModelColumn>;
}

export enum RhythmDBPropertyModelColumn {
    PROPERTY_TITLE = 0,
    VALUE_PRIORITY = 1,
    TRACK_COUNT = 2,
}

export namespace RhythmDBQueryModelLimitType {
    export const $gtype: GObject.GType<RhythmDBQueryModelLimitType>;
}

export enum RhythmDBQueryModelLimitType {
    NO_LIMIT = 0,
    LIMIT_COUNT = 1,
    LIMIT_SIZE = 2,
    LIMIT_DURATION = 3,
}

export namespace RhythmDBQueryType {
    export const $gtype: GObject.GType<RhythmDBQueryType>;
}

export enum RhythmDBQueryType {
    QUERY_END = 0,
    DISJUNCTIVE_MARKER = 1,
    SUBQUERY = 2,
    EQUALS = 3,
    NOT_EQUAL = 4,
    FUZZY_MATCH = 5,
    INVERTED_FUZZY_MATCH = 6,
    STARTS_WITH = 7,
    ENDS_WITH = 8,
    GREATER_THAN = 9,
    LESS_THAN = 10,
    WITHIN_CURRENT_TIME = 11,
    NOT_WITHIN_CURRENT_TIME = 12,
    YEAR_EQUALS = 13,
    YEAR_NOT_EQUALS = 14,
    YEAR_GREATER_THAN = 15,
    YEAR_LESS_THAN = 16,
}

export namespace ShellActivationType {
    export const $gtype: GObject.GType<ShellActivationType>;
}

export enum ShellActivationType {
    SELECT = 0,
    PLAY = 1,
    ALWAYS_PLAY = 2,
}

export namespace ShellError {
    export const $gtype: GObject.GType<ShellError>;
}

export enum ShellError {
    NO_SUCH_URI = 0,
    NO_SUCH_PROPERTY = 1,
    IMMUTABLE_PROPERTY = 2,
    INVALID_PROPERTY_TYPE = 3,
    NO_SOURCE_FOR_URI = 4,
}

export class ShellErrorType extends GLib.Error {
    static $gtype: GObject.GType<ShellErrorType>;

    constructor(options: { message: string; code: number });
    constructor(copy: ShellErrorType);

    // Properties
    static NO_SUCH_URI: number;
    static NO_SUCH_PROPERTY: number;
    static IMMUTABLE_PROPERTY: number;
    static INVALID_PROPERTY_TYPE: number;
    static NO_SOURCE_FOR_URI: number;

    // Members
    static quark(): GLib.Quark;
}

export class ShellPlayerError extends GLib.Error {
    static $gtype: GObject.GType<ShellPlayerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ShellPlayerError);

    // Properties
    static PLAYLIST_PARSE_FAILED: number;
    static END_OF_PLAYLIST: number;
    static NOT_PLAYING: number;
    static NOT_SEEKABLE: number;
    static POSITION_NOT_AVAILABLE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ShellPrefsUILocation {
    export const $gtype: GObject.GType<ShellPrefsUILocation>;
}

export enum ShellPrefsUILocation {
    GENERAL = 0,
    PLAYBACK = 1,
}

export namespace ShellUILocation {
    export const $gtype: GObject.GType<ShellUILocation>;
}

export enum ShellUILocation {
    SIDEBAR = 0,
    RIGHT_SIDEBAR = 1,
    MAIN_TOP = 2,
    MAIN_BOTTOM = 3,
}

export namespace SourceEOFType {
    export const $gtype: GObject.GType<SourceEOFType>;
}

export enum SourceEOFType {
    ERROR = 0,
    STOP = 1,
    RETRY = 2,
    NEXT = 3,
}

export namespace SourceLoadStatus {
    export const $gtype: GObject.GType<SourceLoadStatus>;
}

export enum SourceLoadStatus {
    NOT_LOADED = 0,
    WAITING = 1,
    LOADING = 2,
    LOADED = 3,
}

export namespace TaskOutcome {
    export const $gtype: GObject.GType<TaskOutcome>;
}

export enum TaskOutcome {
    NONE = 0,
    COMPLETE = 1,
    CANCELLED = 2,
}

export namespace Application {
    export interface ConstructorProperties extends Gtk.Application.ConstructorProperties {
        [key: string]: any;

        shell: Shell;
    }
}

export class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
    static $gtype: GObject.GType<Application>;

    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

    // Properties
    shell: Shell;

    // Fields
    priv: ApplicationPrivate;

    // Constructors

    static ['new'](): Application;
    static ['new'](...args: never[]): never;

    // Members

    activate_key(event: Gdk.EventKey): boolean;

    add_accelerator(accel: string, action: string, parameter?: GLib.Variant | null): void;

    add_plugin_menu_item(menu: string, id: string, item: Gio.MenuItem): void;

    add_shared_menu(name: string, menu: Gio.MenuModel): void;

    get_plugin_menu(menu: string): Gio.MenuModel;

    get_shared_menu(name: string): Gio.MenuModel;

    link_shared_menus(menu: Gio.Menu): void;

    remove_plugin_menu_item(menu: string, id: string): void;

    run(argc: number, argv: string): number;
    run(...args: never[]): never;

    set_menu_accelerators(menu: Gio.MenuModel, enable: boolean): void;

    // Implemented Members

    action_added(action_name: string): void;

    action_enabled_changed(action_name: string, enabled: boolean): void;

    action_removed(action_name: string): void;

    action_state_changed(action_name: string, state: GLib.Variant): void;

    activate_action(action_name: string, parameter?: GLib.Variant | null): void;

    change_action_state(action_name: string, value: GLib.Variant): void;

    get_action_enabled(action_name: string): boolean;

    get_action_parameter_type(action_name: string): GLib.VariantType | null;

    get_action_state(action_name: string): GLib.Variant | null;

    get_action_state_hint(action_name: string): GLib.Variant | null;

    get_action_state_type(action_name: string): GLib.VariantType | null;

    has_action(action_name: string): boolean;

    list_actions(): string[];

    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

    vfunc_action_added(action_name: string): void;

    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;

    vfunc_action_removed(action_name: string): void;

    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;

    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;

    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;

    vfunc_get_action_enabled(action_name: string): boolean;

    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;

    vfunc_get_action_state(action_name: string): GLib.Variant | null;

    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;

    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;

    vfunc_has_action(action_name: string): boolean;

    vfunc_list_actions(): string[];

    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

    add_action(action: Gio.Action): void;

    add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;

    lookup_action(action_name: string): Gio.Action;

    remove_action(action_name: string): void;

    vfunc_add_action(action: Gio.Action): void;

    vfunc_lookup_action(action_name: string): Gio.Action;

    vfunc_remove_action(action_name: string): void;
}

export namespace AsyncCopy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AsyncCopy extends GObject.Object {
    static $gtype: GObject.GType<AsyncCopy>;

    constructor(properties?: Partial<AsyncCopy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AsyncCopy.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: AsyncCopyPrivate;

    // Constructors

    static ['new'](): AsyncCopy;

    // Members

    cancel(): void;

    get_error(): GLib.Error;

    set_progress(callback: AsyncCopyProgressCallback): void;

    start(src: string, dest: string, callback: AsyncCopyCallback): void;
}

export namespace AutoPlaylistSource {
    export interface ConstructorProperties extends PlaylistSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class AutoPlaylistSource extends PlaylistSource implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<AutoPlaylistSource>;

    constructor(properties?: Partial<AutoPlaylistSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AutoPlaylistSource.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](shell: Shell, name: string, local: boolean): AutoPlaylistSource;
    static ['new'](...args: never[]): never;

    static new_from_xml(shell: Shell, name: string, node: libxml2.NodePtr): AutoPlaylistSource;
    static new_from_xml(...args: never[]): never;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace BrowserSource {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        populate: boolean;
    }
}

export abstract class BrowserSource extends Source implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<BrowserSource>;

    constructor(properties?: Partial<BrowserSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BrowserSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    populate: boolean;

    // Fields
    priv: BrowserSourcePrivate | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Members

    has_drop_support(): boolean;

    vfunc_has_drop_support(): boolean;

    vfunc_pack_content(content: Gtk.Widget): void;

    vfunc_show_entry_popup(): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace ButtonBar {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        model: Gio.MenuModel;
        target: GObject.Object;
    }
}

export class ButtonBar extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ButtonBar>;

    constructor(properties?: Partial<ButtonBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ButtonBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: Gio.MenuModel;
    target: GObject.Object;

    // Fields
    priv: ButtonBarPrivate;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](model: Gio.MenuModel, target: GObject.Object): ButtonBar;
    static ['new'](...args: never[]): never;

    // Members

    add_accelerators(group: Gtk.AccelGroup): void;

    remove_accelerators(group: Gtk.AccelGroup): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace CellRendererPixbuf {
    export interface ConstructorProperties extends Gtk.CellRendererPixbuf.ConstructorProperties {
        [key: string]: any;
    }
}

export class CellRendererPixbuf extends Gtk.CellRendererPixbuf {
    static $gtype: GObject.GType<CellRendererPixbuf>;

    constructor(properties?: Partial<CellRendererPixbuf.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CellRendererPixbuf.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'pixbuf-clicked', callback: (_source: this, path: string) => void): number;

    connect_after(signal: 'pixbuf-clicked', callback: (_source: this, path: string) => void): number;

    emit(signal: 'pixbuf-clicked', path: string): void;

    // Constructors

    static ['new'](): CellRendererPixbuf;

    // Members

    vfunc_pixbuf_clicked(path: Gtk.TreePath): void;
}

export namespace CellRendererRating {
    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {
        [key: string]: any;

        rating: number;
    }
}

export class CellRendererRating extends Gtk.CellRenderer {
    static $gtype: GObject.GType<CellRendererRating>;

    constructor(properties?: Partial<CellRendererRating.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CellRendererRating.ConstructorProperties>, ...args: any[]): void;

    // Properties
    rating: number;

    // Fields
    priv: CellRendererRatingPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'rated', callback: (_source: this, score: string, path: number) => void): number;

    connect_after(signal: 'rated', callback: (_source: this, score: string, path: number) => void): number;

    emit(signal: 'rated', score: string, path: number): void;

    // Constructors

    static ['new'](): CellRendererRating;

    // Members

    vfunc_rated(path: string, rating: number): void;
}

export namespace ChunkLoader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ChunkLoader extends GObject.Object {
    static $gtype: GObject.GType<ChunkLoader>;

    constructor(properties?: Partial<ChunkLoader.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChunkLoader.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ChunkLoaderPrivate;

    // Constructors

    static ['new'](): ChunkLoader;

    // Members

    cancel(): void;

    get_error(): GLib.Error;

    set_callback(callback: ChunkLoaderCallback): void;

    start(uri: string, chunk_size: number): void;
}

export namespace DisplayPage {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        icon: Gio.Icon;
        name: string;
        plugin: GObject.Object;
        selected: boolean;
        shell: Shell;
        visibility: boolean;
    }
}

export abstract class DisplayPage extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DisplayPage>;

    constructor(properties?: Partial<DisplayPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DisplayPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon: Gio.Icon;
    name: string;
    plugin: GObject.Object;
    selected: boolean;
    shell: Shell;
    visibility: boolean;

    // Fields
    priv: DisplayPagePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'deleted', callback: (_source: this) => void): number;

    connect_after(signal: 'deleted', callback: (_source: this) => void): number;

    emit(signal: 'deleted'): void;

    connect(signal: 'status-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'status-changed', callback: (_source: this) => void): number;

    emit(signal: 'status-changed'): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Members

    activate(): void;
    activate(...args: never[]): never;

    can_remove(): boolean;

    delete_thyself(): void;

    deselected(): void;

    get_config_widget(prefs: ShellPreferences): Gtk.Widget;

    get_status(text?: string | null, busy?: boolean | null): [string | null, boolean | null];

    notify_status_changed(): void;

    receive_drag(data: Gtk.SelectionData): boolean;

    remove(): void;
    remove(...args: never[]): never;

    selectable(): boolean;

    set_icon_name(icon_name: string): void;

    vfunc_activate(): void;

    vfunc_can_remove(): boolean;

    vfunc_delete_thyself(): void;

    vfunc_deleted(): void;

    vfunc_deselected(): void;

    vfunc_get_config_widget(prefs: ShellPreferences): Gtk.Widget;

    vfunc_get_status(text?: string | null, busy?: boolean | null): [string | null, boolean | null];

    vfunc_receive_drag(data: Gtk.SelectionData): boolean;

    vfunc_remove(): void;
    vfunc_remove(...args: never[]): never;

    vfunc_selectable(): boolean;

    vfunc_selected(): void;

    vfunc_status_changed(): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace DisplayPageGroup {
    export interface ConstructorProperties extends DisplayPage.ConstructorProperties {
        [key: string]: any;

        category: DisplayPageGroupType;
        id: string;
        loaded: boolean;
    }
}

export class DisplayPageGroup extends DisplayPage implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DisplayPageGroup>;

    constructor(properties?: Partial<DisplayPageGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DisplayPageGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    category: DisplayPageGroupType;
    id: string;
    loaded: boolean;

    // Fields
    priv: DisplayPageGroupPrivate | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](
        shell: GObject.Object,
        id: string,
        name: string,
        category: DisplayPageGroupCategory
    ): DisplayPageGroup;

    static ['new'](...args: never[]): never;

    // Members

    static add_core_groups(shell: GObject.Object, page_model: DisplayPageModel): void;

    static get_by_id(id: string): DisplayPageGroup;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace DisplayPageModel {
    export interface ConstructorProperties extends Gtk.TreeModelFilter.ConstructorProperties {
        [key: string]: any;
    }
}

export class DisplayPageModel extends Gtk.TreeModelFilter implements Gtk.TreeDragSource, Gtk.TreeModel {
    static $gtype: GObject.GType<DisplayPageModel>;

    constructor(properties?: Partial<DisplayPageModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DisplayPageModel.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'drop-received',
        callback: (_source: this, target: DisplayPage, pos: number, data: any | null) => void
    ): number;

    connect_after(
        signal: 'drop-received',
        callback: (_source: this, target: DisplayPage, pos: number, data: any | null) => void
    ): number;

    emit(signal: 'drop-received', target: DisplayPage, pos: number, data: any | null): void;

    connect(signal: 'page-inserted', callback: (_source: this, page: DisplayPage, iter: Gtk.TreeIter) => void): number;

    connect_after(
        signal: 'page-inserted',
        callback: (_source: this, page: DisplayPage, iter: Gtk.TreeIter) => void
    ): number;

    emit(signal: 'page-inserted', page: DisplayPage, iter: Gtk.TreeIter): void;

    // Constructors

    static ['new'](): DisplayPageModel;

    // Members

    add_page(page: DisplayPage, parent: DisplayPage): void;

    find_page(page: DisplayPage, iter: Gtk.TreeIter): boolean;

    find_page_full(page: DisplayPage, iter: Gtk.TreeIter): boolean;

    remove_page(page: DisplayPage): void;

    set_dnd_targets(treeview: Gtk.TreeView): void;

    set_playing_source(source: DisplayPage): void;

    vfunc_drop_received(target: DisplayPage, pos: Gtk.TreeViewDropPosition, data: Gtk.SelectionData): void;

    vfunc_page_inserted(page: DisplayPage, iter: Gtk.TreeIter): void;

    // Implemented Members

    drag_data_delete(path: Gtk.TreePath): boolean;

    drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    row_draggable(path: Gtk.TreePath): boolean;

    vfunc_drag_data_delete(path: Gtk.TreePath): boolean;

    vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    vfunc_row_draggable(path: Gtk.TreePath): boolean;

    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;

    foreach(func: Gtk.TreeModelForeachFunc): void;

    get_column_type(index_: number): GObject.GType;

    get_flags(): Gtk.TreeModelFlags;

    get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    get_iter_first(): [boolean, Gtk.TreeIter];

    get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

    get_n_columns(): number;

    get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    get_string_from_iter(iter: Gtk.TreeIter): string;

    get_value(iter: Gtk.TreeIter, column: number): unknown;

    iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    iter_has_child(iter: Gtk.TreeIter): boolean;

    iter_n_children(iter?: Gtk.TreeIter | null): number;

    iter_next(iter: Gtk.TreeIter): boolean;

    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    iter_previous(iter: Gtk.TreeIter): boolean;

    ref_node(iter: Gtk.TreeIter): void;

    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_deleted(path: Gtk.TreePath): void;

    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

    unref_node(iter: Gtk.TreeIter): void;

    vfunc_get_column_type(index_: number): GObject.GType;

    vfunc_get_flags(): Gtk.TreeModelFlags;

    vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    vfunc_get_n_columns(): number;

    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;

    vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;

    vfunc_iter_next(iter: Gtk.TreeIter): boolean;

    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

    vfunc_ref_node(iter: Gtk.TreeIter): void;

    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_deleted(path: Gtk.TreePath): void;

    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_unref_node(iter: Gtk.TreeIter): void;
}

export namespace DisplayPageTree {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        model: Gtk.TreeModel;
        shell: Shell;
    }
}

export class DisplayPageTree extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DisplayPageTree>;

    constructor(properties?: Partial<DisplayPageTree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DisplayPageTree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: Gtk.TreeModel;
    shell: Shell;

    // Fields
    priv: DisplayPageTreePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'drop-received', callback: (_source: this, page: any | null, data: any | null) => void): number;

    connect_after(
        signal: 'drop-received',
        callback: (_source: this, page: any | null, data: any | null) => void
    ): number;

    emit(signal: 'drop-received', page: any | null, data: any | null): void;

    connect(signal: 'selected', callback: (_source: this, page: GObject.Object) => void): number;

    connect_after(signal: 'selected', callback: (_source: this, page: GObject.Object) => void): number;

    emit(signal: 'selected', page: GObject.Object): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](shell: Shell): DisplayPageTree;
    static ['new'](...args: never[]): never;

    // Members

    edit_source_name(source: Source): void;

    select(page: DisplayPage): void;

    toggle_expanded(page: DisplayPage): void;

    vfunc_drop_received(page: DisplayPage, data: Gtk.SelectionData): void;

    vfunc_selected(page: DisplayPage): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace EncoderFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class EncoderFactory extends GObject.Object {
    static $gtype: GObject.GType<EncoderFactory>;

    constructor(properties?: Partial<EncoderFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EncoderFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    obj: GObject.Object;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'prepare-sink', callback: (_source: this, uri: string, sink: GObject.Object) => void): number;

    connect_after(signal: 'prepare-sink', callback: (_source: this, uri: string, sink: GObject.Object) => void): number;

    emit(signal: 'prepare-sink', uri: string, sink: GObject.Object): void;

    connect(signal: 'prepare-source', callback: (_source: this, uri: string, source: GObject.Object) => void): number;

    connect_after(
        signal: 'prepare-source',
        callback: (_source: this, uri: string, source: GObject.Object) => void
    ): number;

    emit(signal: 'prepare-source', uri: string, source: GObject.Object): void;

    // Members

    vfunc_prepare_sink(uri: string, sink: GObject.Object): void;

    vfunc_prepare_source(uri: string, source: GObject.Object): void;

    static get(): EncoderFactory;
}

export namespace EntryView {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        is_drag_dest: boolean;
        isDragDest: boolean;
        is_drag_source: boolean;
        isDragSource: boolean;
        model: RhythmDBQueryModel;
        playing_state: number;
        playingState: number;
        shell_player: ShellPlayer;
        shellPlayer: ShellPlayer;
        sort_order: string;
        sortOrder: string;
        visible_columns: string[];
        visibleColumns: string[];
    }
}

export class EntryView extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<EntryView>;

    constructor(properties?: Partial<EntryView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    is_drag_dest: boolean;
    isDragDest: boolean;
    is_drag_source: boolean;
    isDragSource: boolean;
    model: RhythmDBQueryModel;
    playing_state: number;
    playingState: number;
    shell_player: ShellPlayer;
    shellPlayer: ShellPlayer;
    sort_order: string;
    sortOrder: string;
    visible_columns: string[];
    visibleColumns: string[];

    // Fields
    priv: EntryViewPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'entries-replaced', callback: (_source: this) => void): number;

    connect_after(signal: 'entries-replaced', callback: (_source: this) => void): number;

    emit(signal: 'entries-replaced'): void;

    connect(signal: 'entry-activated', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-activated', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-activated', entry: RhythmDBEntry): void;

    connect(signal: 'entry-added', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-added', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-added', entry: RhythmDBEntry): void;

    connect(signal: 'entry-deleted', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-deleted', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-deleted', entry: RhythmDBEntry): void;

    connect(signal: 'have-selection-changed', callback: (_source: this, have_selection: boolean) => void): number;

    connect_after(signal: 'have-selection-changed', callback: (_source: this, have_selection: boolean) => void): number;

    emit(signal: 'have-selection-changed', have_selection: boolean): void;

    connect(signal: 'selection-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;

    emit(signal: 'selection-changed'): void;

    connect(signal: 'show-popup', callback: (_source: this, over_entry: boolean) => void): number;

    connect_after(signal: 'show-popup', callback: (_source: this, over_entry: boolean) => void): number;

    emit(signal: 'show-popup', over_entry: boolean): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](
        db: RhythmDB,
        shell_player: GObject.Object,
        is_drag_source: boolean,
        is_drag_dest: boolean
    ): EntryView;

    static ['new'](...args: never[]): never;

    // Members

    append_column(coltype: EntryViewColumn, always_visible: boolean): void;

    append_column_custom(column: Gtk.TreeViewColumn, title: string, key: string, sort_func: GLib.CompareDataFunc): void;

    enable_drag_source(targets: Gtk.TargetEntry, n_targets: number): void;

    get_column(coltype: EntryViewColumn): Gtk.TreeViewColumn;

    get_entry_contained(entry: RhythmDBEntry): boolean;

    get_entry_visible(entry: RhythmDBEntry): boolean;

    get_selected_entries(): RhythmDBEntry[];

    get_sorting_order(): [string | null, number | null];

    get_sorting_type(): string;

    have_complete_selection(): boolean;

    have_selection(): boolean;

    insert_column_custom(
        column: Gtk.TreeViewColumn,
        title: string,
        key: string,
        sort_func: GLib.CompareDataFunc,
        position: number
    ): void;

    resort_model(): void;

    scroll_to_entry(entry: RhythmDBEntry): void;

    select_all(): void;

    select_entry(entry: RhythmDBEntry): void;

    select_none(): void;

    set_column_editable(column: EntryViewColumn, editable: boolean): void;

    set_columns_clickable(clickable: boolean): void;

    set_fixed_column_width(column: Gtk.TreeViewColumn, renderer: Gtk.CellRenderer, strings: string[]): void;

    set_model(model: RhythmDBQueryModel): void;

    set_sorting_order(column_name: string, sort_order: number): void;

    set_sorting_type(sorttype: string): void;

    set_state(state: EntryViewState): void;
    set_state(...args: never[]): never;

    set_status(status: string, busy: boolean): void;

    vfunc_entries_replaced(): void;

    vfunc_entry_activated(entry: RhythmDBEntry): void;

    vfunc_entry_added(entry: RhythmDBEntry): void;

    vfunc_entry_deleted(entry: RhythmDBEntry): void;

    vfunc_have_selection_changed(have_selection: boolean): void;

    vfunc_selection_changed(): void;

    vfunc_show_popup(over_entry: boolean): void;

    static get_time_date_column_sample(): string;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace ExtDB {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
    }
}

export class ExtDB extends GObject.Object {
    static $gtype: GObject.GType<ExtDB>;

    constructor(properties?: Partial<ExtDB.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExtDB.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Fields
    priv: ExtDBPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'added',
        callback: (_source: this, key: ExtDBKey, filename: string, data: GObject.Value) => void
    ): number;

    connect_after(
        signal: 'added',
        callback: (_source: this, key: ExtDBKey, filename: string, data: GObject.Value) => void
    ): number;

    emit(signal: 'added', key: ExtDBKey, filename: string, data: any): void;

    connect(signal: 'load', callback: (_source: this, data: GObject.Value) => any | null): number;

    connect_after(signal: 'load', callback: (_source: this, data: GObject.Value) => any | null): number;

    emit(signal: 'load', data: any): void;

    connect(signal: 'request', callback: (_source: this, key: ExtDBKey, last_time: number) => boolean): number;

    connect_after(signal: 'request', callback: (_source: this, key: ExtDBKey, last_time: number) => boolean): number;

    emit(signal: 'request', key: ExtDBKey, last_time: number): void;

    connect(signal: 'store', callback: (_source: this, data: GObject.Value) => any | null): number;

    connect_after(signal: 'store', callback: (_source: this, data: GObject.Value) => any | null): number;

    emit(signal: 'store', data: any): void;

    // Constructors

    static ['new'](name: string): ExtDB;

    // Members

    ['delete'](key: ExtDBKey): void;

    lookup(key: ExtDBKey): [string, ExtDBKey | null];

    request(key: ExtDBKey, callback: ExtDBRequestCallback): boolean;

    store(key: ExtDBKey, source_type: ExtDBSourceType, data?: GObject.Value | null): void;

    store_raw(key: ExtDBKey, source_type: ExtDBSourceType, data?: GObject.Value | null): void;

    store_uri(key: ExtDBKey, source_type: ExtDBSourceType, uri?: string | null): void;

    vfunc_added(key: ExtDBKey, filename: string, data: any): void;

    vfunc_load(data: any): unknown;

    vfunc_request(key: ExtDBKey, last_time: number): boolean;

    vfunc_store(data: any): unknown;
}

export namespace FadingImage {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;

        fallback: string;
        use_tooltip: boolean;
        useTooltip: boolean;
    }
}

export class FadingImage extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<FadingImage>;

    constructor(properties?: Partial<FadingImage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FadingImage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fallback: string;
    use_tooltip: boolean;
    useTooltip: boolean;

    // Fields
    priv: FadingImagePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'pixbuf-dropped', callback: (_source: this, pixbuf: GdkPixbuf.Pixbuf) => void): number;

    connect_after(signal: 'pixbuf-dropped', callback: (_source: this, pixbuf: GdkPixbuf.Pixbuf) => void): number;

    emit(signal: 'pixbuf-dropped', pixbuf: GdkPixbuf.Pixbuf): void;

    connect(signal: 'uri-dropped', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'uri-dropped', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'uri-dropped', uri: string): void;

    // Members

    set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;

    start(duration: number): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace History {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        maximum_size: number;
        maximumSize: number;
        truncate_on_play: boolean;
        truncateOnPlay: boolean;
    }
}

export class History extends GObject.Object {
    static $gtype: GObject.GType<History>;

    constructor(properties?: Partial<History.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<History.ConstructorProperties>, ...args: any[]): void;

    // Properties
    maximum_size: number;
    maximumSize: number;
    truncate_on_play: boolean;
    truncateOnPlay: boolean;

    // Fields
    priv: HistoryPrivate;

    // Constructors

    static ['new'](truncate_on_play: boolean, destroyer: GLib.Func): History;

    // Members

    append(entry: RhythmDBEntry): void;

    clear(): void;

    contains_entry(entry: RhythmDBEntry): boolean;

    current(): RhythmDBEntry;

    dump(): RhythmDBEntry[];

    first(): RhythmDBEntry;

    get_current_index(): number;

    go_first(): void;

    go_last(): void;

    go_next(): void;

    go_previous(): void;

    insert_at_index(entry: RhythmDBEntry, index: number): void;

    last(): RhythmDBEntry;

    length(): number;

    next(): RhythmDBEntry;

    previous(): RhythmDBEntry;

    remove_entry(entry: RhythmDBEntry): void;

    set_destroy_notify(destroyer: GLib.Func): void;

    set_maximum_size(maximum_size: number): void;

    set_playing(entry: RhythmDBEntry): void;

    set_truncate_on_play(truncate_on_play: boolean): void;
}

export namespace LibraryBrowser {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        browser_views: string;
        browserViews: string;
        db: RhythmDB;
        entry_type: RhythmDBEntryType;
        entryType: RhythmDBEntryType;
        input_model: RhythmDBQueryModel;
        inputModel: RhythmDBQueryModel;
        output_model: RhythmDBQueryModel;
        outputModel: RhythmDBQueryModel;
    }
}

export class LibraryBrowser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<LibraryBrowser>;

    constructor(properties?: Partial<LibraryBrowser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LibraryBrowser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    browser_views: string;
    browserViews: string;
    db: RhythmDB;
    entry_type: RhythmDBEntryType;
    entryType: RhythmDBEntryType;
    input_model: RhythmDBQueryModel;
    inputModel: RhythmDBQueryModel;
    output_model: RhythmDBQueryModel;
    outputModel: RhythmDBQueryModel;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](db: RhythmDB, entry_type: RhythmDBEntryType): LibraryBrowser;
    static ['new'](...args: never[]): never;

    // Members

    construct_query(): RhythmDBQuery;

    get_property_view(type: RhythmDBPropType): PropertyView;

    get_property_views(): PropertyView[];

    has_selection(): boolean;

    reset(): boolean;

    set_model(model: RhythmDBQueryModel, query_pending: boolean): void;

    set_selection(type: RhythmDBPropType, selection: string[]): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace ListModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ListModel extends GObject.Object {
    static $gtype: GObject.GType<ListModel>;

    constructor(properties?: Partial<ListModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ListModel.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'items-changed', callback: (_source: this, object: number, p0: number, p1: number) => void): number;

    connect_after(
        signal: 'items-changed',
        callback: (_source: this, object: number, p0: number, p1: number) => void
    ): number;

    emit(signal: 'items-changed', object: number, p0: number, p1: number): void;

    // Constructors

    static ['new'](item_type: GObject.GType): ListModel;

    // Members

    append(item?: any | null): void;

    find(item?: any | null): number;

    get(index: number): any | null;

    get_item_type(): GObject.GType;

    insert(index: number, item?: any | null): void;

    n_items(): number;

    prepend(item?: any | null): void;

    remove(index: number): void;

    remove_item(item?: any | null): void;
}

export namespace MediaPlayerEntryType {
    export interface ConstructorProperties extends RhythmDBEntryType.ConstructorProperties {
        [key: string]: any;

        key_prefix: string;
        keyPrefix: string;
        uri_prefix: string;
        uriPrefix: string;
    }
}

export class MediaPlayerEntryType extends RhythmDBEntryType {
    static $gtype: GObject.GType<MediaPlayerEntryType>;

    constructor(properties?: Partial<MediaPlayerEntryType.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaPlayerEntryType.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key_prefix: string;
    keyPrefix: string;
    uri_prefix: string;
    uriPrefix: string;

    // Fields
    priv: RhythmDBEntryTypePrivate;
}

export namespace MediaPlayerSource {
    export interface ConstructorProperties extends BrowserSource.ConstructorProperties {
        [key: string]: any;

        encoding_settings: Gio.Settings;
        encodingSettings: Gio.Settings;
        encoding_target: GstPbutils.EncodingTarget;
        encodingTarget: GstPbutils.EncodingTarget;
        serial: string;
    }
}

export class MediaPlayerSource extends BrowserSource implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<MediaPlayerSource>;

    constructor(properties?: Partial<MediaPlayerSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaPlayerSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    encoding_settings: Gio.Settings;
    encodingSettings: Gio.Settings;
    encoding_target: GstPbutils.EncodingTarget;
    encodingTarget: GstPbutils.EncodingTarget;
    serial: string;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Members

    delete_entries(entries: RhythmDBEntry[], callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_capacity(): number;

    get_entries(category: string, map: GLib.HashTable<string, RhythmDBEntry>): void;

    get_free_space(): number;

    load(): void;

    purge_metadata_cache(): void;

    show_properties(): void;

    sync(): void;

    vfunc_delete_entries(entries: RhythmDBEntry[], callback?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_get_capacity(): number;

    vfunc_get_entries(category: string, map: GLib.HashTable<string, RhythmDBEntry>): void;

    vfunc_get_free_space(): number;

    vfunc_remove_playlists(): void;

    vfunc_show_properties(info_box: Gtk.Widget, notebook: Gtk.Widget): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace MetaData {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MetaData extends GObject.Object {
    static $gtype: GObject.GType<MetaData>;

    constructor(properties?: Partial<MetaData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MetaData.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MetaDataPrivate;

    // Constructors

    static ['new'](): MetaData;

    // Members

    can_save(media_type: string): boolean;

    get(field: MetaDataField): [boolean, unknown];

    get_media_type(): string;

    get_missing_plugins(): [boolean, string[], string[]];

    get_saveable_types(): string[];

    has_audio(): boolean;

    has_missing_plugins(): boolean;

    has_other_data(): boolean;

    has_video(): boolean;

    load(uri: string): void;

    reset(): void;

    save(uri: string): void;

    set(field: MetaDataField, val: any): boolean;
    set(...args: never[]): never;

    static get_field_name(field: MetaDataField): string;

    static get_field_type(field: MetaDataField): GObject.GType;
}

export namespace PlayOrder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        player: ShellPlayer;
        playing_entry: RhythmDBEntry;
        playingEntry: RhythmDBEntry;
    }
}

export class PlayOrder extends GObject.Object {
    static $gtype: GObject.GType<PlayOrder>;

    constructor(properties?: Partial<PlayOrder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PlayOrder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    player: ShellPlayer;
    playing_entry: RhythmDBEntry;
    playingEntry: RhythmDBEntry;

    // Fields
    priv: PlayOrderPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'have-next-previous-changed',
        callback: (_source: this, have_next: boolean, have_previous: boolean) => void
    ): number;

    connect_after(
        signal: 'have-next-previous-changed',
        callback: (_source: this, have_next: boolean, have_previous: boolean) => void
    ): number;

    emit(signal: 'have-next-previous-changed', have_next: boolean, have_previous: boolean): void;

    // Members

    get_db(): RhythmDB;

    get_next(): RhythmDBEntry;

    get_player(): ShellPlayer;

    get_playing_entry(): RhythmDBEntry;

    get_previous(): RhythmDBEntry;

    get_query_model(): RhythmDBQueryModel;

    get_source(): Source;

    go_next(): void;

    go_previous(): void;

    has_next(): boolean;

    has_previous(): boolean;

    model_not_empty(): boolean;

    player_is_playing(): boolean;

    playing_source_changed(source: Source): void;

    query_model_changed(): void;

    set_playing_entry(entry?: RhythmDBEntry | null): void;

    vfunc_db_changed(new_db: RhythmDB): void;

    vfunc_db_entry_deleted(entry: RhythmDBEntry): void;

    vfunc_entry_added(entry: RhythmDBEntry): void;

    vfunc_entry_removed(entry: RhythmDBEntry): void;

    vfunc_get_next(): RhythmDBEntry;

    vfunc_get_previous(): RhythmDBEntry;

    vfunc_go_next(): void;

    vfunc_go_previous(): void;

    vfunc_has_next(): boolean;

    vfunc_has_previous(): boolean;

    vfunc_have_next_previous_changed(have_next: boolean, have_previous: boolean): void;

    vfunc_playing_entry_changed(old_entry: RhythmDBEntry, new_entry: RhythmDBEntry): void;

    vfunc_playing_entry_removed(entry: RhythmDBEntry): void;

    vfunc_playing_source_changed(): void;

    vfunc_query_model_changed(): void;
}

export namespace PlaylistManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        playlists_file: string;
        playlistsFile: string;
        shell: Shell;
        source: Source;
    }
}

export class PlaylistManager extends GObject.Object {
    static $gtype: GObject.GType<PlaylistManager>;

    constructor(properties?: Partial<PlaylistManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PlaylistManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    playlists_file: string;
    playlistsFile: string;
    shell: Shell;
    source: Source;

    // Fields
    priv: PlaylistManagerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'load-finish', callback: (_source: this) => void): number;

    connect_after(signal: 'load-finish', callback: (_source: this) => void): number;

    emit(signal: 'load-finish'): void;

    connect(signal: 'load-start', callback: (_source: this) => void): number;

    connect_after(signal: 'load-start', callback: (_source: this) => void): number;

    emit(signal: 'load-start'): void;

    connect(signal: 'playlist-added', callback: (_source: this, source: GObject.Object) => void): number;

    connect_after(signal: 'playlist-added', callback: (_source: this, source: GObject.Object) => void): number;

    emit(signal: 'playlist-added', source: GObject.Object): void;

    connect(signal: 'playlist-created', callback: (_source: this, source: GObject.Object) => void): number;

    connect_after(signal: 'playlist-created', callback: (_source: this, source: GObject.Object) => void): number;

    emit(signal: 'playlist-created', source: GObject.Object): void;

    // Constructors

    static ['new'](shell: Shell, playlists_file: string): PlaylistManager;

    // Members

    add_to_playlist(name: string, uri: string): boolean;

    create_static_playlist(name: string): boolean;

    delete_playlist(name: string): boolean;

    export_playlist(name: string, uri: string, m3u_format: boolean): boolean;

    get_playlist_names(): [boolean, string];

    get_playlists(): Source[];

    load_playlists(): void;

    new_playlist(suggested_name: string, automatic: boolean): Source;

    new_playlist_from_selection_data(data: Gtk.SelectionData): Source;

    parse_file(uri: string): boolean;

    remove_from_playlist(name: string, uri: string): boolean;

    save_playlist_file(source: Source): void;

    save_playlists(force: boolean): boolean;

    shutdown(): void;

    vfunc_load_finish(): void;

    vfunc_load_start(): void;

    vfunc_playlist_added(source: Source): void;

    vfunc_playlist_created(source: Source): void;

    static error_quark(): GLib.Quark;
}

export namespace PlaylistSource {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        dirty: boolean;
        is_local: boolean;
        isLocal: boolean;
    }
}

export abstract class PlaylistSource extends Source implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<PlaylistSource>;

    constructor(properties?: Partial<PlaylistSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PlaylistSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    dirty: boolean;
    is_local: boolean;
    isLocal: boolean;

    // Fields
    priv: PlaylistSourcePrivate | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static new_from_xml(shell: Shell, node: libxml2.NodePtr): PlaylistSource;

    // Members

    add_to_map(location: string): boolean;

    get_db(): RhythmDB;

    get_query_model(): RhythmDBQueryModel;

    location_in_map(location: string): boolean;

    mark_dirty(): void;

    save_playlist(uri: string, export_type: PlaylistExportType): void;

    save_to_xml(parent_node: libxml2.NodePtr): void;

    set_query_model(model: RhythmDBQueryModel): void;

    setup_entry_view(entry_view: EntryView): void;

    vfunc_mark_dirty(): void;

    vfunc_save_contents_to_xml(node: libxml2.NodePtr): void;

    vfunc_show_entry_view_popup(view: EntryView, over_entry: boolean): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace PodcastManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        updating: boolean;
    }
}

export class PodcastManager extends GObject.Object {
    static $gtype: GObject.GType<PodcastManager>;

    constructor(properties?: Partial<PodcastManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PodcastManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    updating: boolean;

    // Fields
    priv: PodcastManagerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'feed-updates-available', callback: (_source: this, object: RhythmDBEntry) => void): number;

    connect_after(signal: 'feed-updates-available', callback: (_source: this, object: RhythmDBEntry) => void): number;

    emit(signal: 'feed-updates-available', object: RhythmDBEntry): void;

    connect(signal: 'finish-download', callback: (_source: this, object: RhythmDBEntry) => void): number;

    connect_after(signal: 'finish-download', callback: (_source: this, object: RhythmDBEntry) => void): number;

    emit(signal: 'finish-download', object: RhythmDBEntry): void;

    connect(
        signal: 'process-error',
        callback: (_source: this, object: string, p0: string, p1: boolean) => void
    ): number;

    connect_after(
        signal: 'process-error',
        callback: (_source: this, object: string, p0: string, p1: boolean) => void
    ): number;

    emit(signal: 'process-error', object: string, p0: string, p1: boolean): void;

    connect(signal: 'start-download', callback: (_source: this, object: RhythmDBEntry) => void): number;

    connect_after(signal: 'start-download', callback: (_source: this, object: RhythmDBEntry) => void): number;

    emit(signal: 'start-download', object: RhythmDBEntry): void;

    // Constructors

    static ['new'](db: RhythmDB): PodcastManager;

    // Members

    add_parsed_feed(feed: PodcastChannel): void;

    add_search(search_type: GObject.GType): void;

    cancel_download(entry: RhythmDBEntry): void;

    delete_download(entry: RhythmDBEntry): void;

    download_entry(entry: RhythmDBEntry): void;

    entry_in_download_queue(entry: RhythmDBEntry): boolean;

    get_podcast_dir(): string;

    get_searches(): PodcastSearch[];

    insert_feed_url(url: string): void;

    remove_feed(url: string, remove_files: boolean): boolean;

    shutdown(): void;

    start_sync(): void;

    subscribe_feed(url: string, automatic: boolean): boolean;

    update_feeds(): void;

    vfunc_feed_updates_available(entry: RhythmDBEntry): void;

    vfunc_finish_download(entry: RhythmDBEntry): void;

    vfunc_process_error(url: string, error: string, existing: boolean): void;

    vfunc_start_download(entry: RhythmDBEntry): void;

    static add_post(
        db: RhythmDB,
        search_result: boolean,
        name: string,
        title: string,
        subtitle: string,
        generator: string,
        uri: string,
        description: string,
        date: number,
        duration: number,
        filesize: number
    ): RhythmDBEntry;

    static entry_downloaded(entry: RhythmDBEntry): boolean;

    static unsubscribe_feed(db: RhythmDB, url: string): void;
}

export namespace PodcastSearch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PodcastSearch extends GObject.Object {
    static $gtype: GObject.GType<PodcastSearch>;

    constructor(properties?: Partial<PodcastSearch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PodcastSearch.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'finished', callback: (_source: this, object: boolean) => void): number;

    connect_after(signal: 'finished', callback: (_source: this, object: boolean) => void): number;

    emit(signal: 'finished', object: boolean): void;

    connect(signal: 'result', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'result', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'result', object: any | null): void;

    // Members

    cancel(): void;

    finished(successful: boolean): void;

    result(data: PodcastChannel): void;

    start(text: string, max_results: number): void;

    vfunc_cancel(): void;

    vfunc_start(text: string, max_results: number): void;
}

export namespace PodcastSearchITunes {
    export interface ConstructorProperties extends PodcastSearch.ConstructorProperties {
        [key: string]: any;
    }
}

export class PodcastSearchITunes extends PodcastSearch {
    static $gtype: GObject.GType<PodcastSearchITunes>;

    constructor(properties?: Partial<PodcastSearchITunes.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PodcastSearchITunes.ConstructorProperties>, ...args: any[]): void;
}

export namespace PropertyView {
    export interface ConstructorProperties extends Gtk.ScrolledWindow.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        draggable: boolean;
        prop: RhythmDBPropType;
        property_model: RhythmDBPropertyModel;
        propertyModel: RhythmDBPropertyModel;
        title: string;
    }
}

export class PropertyView extends Gtk.ScrolledWindow implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PropertyView>;

    constructor(properties?: Partial<PropertyView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PropertyView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    draggable: boolean;
    prop: RhythmDBPropType;
    property_model: RhythmDBPropertyModel;
    propertyModel: RhythmDBPropertyModel;
    title: string;

    // Fields
    priv: PropertyViewPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'properties-selected', callback: (_source: this, properties: any | null) => void): number;

    connect_after(signal: 'properties-selected', callback: (_source: this, properties: any | null) => void): number;

    emit(signal: 'properties-selected', properties: any | null): void;

    connect(signal: 'property-activated', callback: (_source: this, name: string) => void): number;

    connect_after(signal: 'property-activated', callback: (_source: this, name: string) => void): number;

    emit(signal: 'property-activated', name: string): void;

    connect(signal: 'property-selected', callback: (_source: this, name: string) => void): number;

    connect_after(signal: 'property-selected', callback: (_source: this, name: string) => void): number;

    emit(signal: 'property-selected', name: string): void;

    connect(signal: 'property-selection-reset', callback: (_source: this) => void): number;

    connect_after(signal: 'property-selection-reset', callback: (_source: this) => void): number;

    emit(signal: 'property-selection-reset'): void;

    connect(signal: 'show-popup', callback: (_source: this) => void): number;

    connect_after(signal: 'show-popup', callback: (_source: this) => void): number;

    emit(signal: 'show-popup'): void;

    // Constructors

    static ['new'](db: RhythmDB, propid: number, title: string): PropertyView;
    static ['new'](...args: never[]): never;

    // Members

    append_column_custom(column: Gtk.TreeViewColumn): void;

    get_model(): RhythmDBPropertyModel;

    get_num_properties(): number;

    get_selection(): string[];

    reset(): void;

    set_column_visible(visible: boolean): void;

    set_model(model: RhythmDBPropertyModel): void;

    set_search_func(func: Gtk.TreeViewSearchEqualFunc): void;

    set_selection(vals: string[]): void;

    set_selection_mode(mode: Gtk.SelectionMode): void;

    vfunc_property_activated(name: string): void;

    vfunc_property_selected(name: string): void;

    vfunc_selection_reset(): void;

    vfunc_show_popup(): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace Rating {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;

        rating: number;
    }
}

export class Rating extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Rating>;

    constructor(properties?: Partial<Rating.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Rating.ConstructorProperties>, ...args: any[]): void;

    // Properties
    rating: number;

    // Fields
    priv: RatingPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'adjust-rating', callback: (_source: this, adjust: number) => void): number;

    connect_after(signal: 'adjust-rating', callback: (_source: this, adjust: number) => void): number;

    emit(signal: 'adjust-rating', adjust: number): void;

    connect(signal: 'rated', callback: (_source: this, score: number) => void): number;

    connect_after(signal: 'rated', callback: (_source: this, score: number) => void): number;

    emit(signal: 'rated', score: number): void;

    connect(signal: 'set-rating', callback: (_source: this, score: number) => void): number;

    connect_after(signal: 'set-rating', callback: (_source: this, score: number) => void): number;

    emit(signal: 'set-rating', score: number): void;

    // Constructors

    static ['new'](): Rating;

    // Members

    vfunc_adjust_rating(adjust: number): boolean;

    vfunc_rated(score: number): void;

    vfunc_set_rating(score: number): boolean;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace RemovableMediaManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        scanned: boolean;
        shell: Shell;
    }
}

export class RemovableMediaManager extends GObject.Object {
    static $gtype: GObject.GType<RemovableMediaManager>;

    constructor(properties?: Partial<RemovableMediaManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RemovableMediaManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    scanned: boolean;
    shell: Shell;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'create-source-device', callback: (_source: this, device: GObject.Object) => Source): number;

    connect_after(signal: 'create-source-device', callback: (_source: this, device: GObject.Object) => Source): number;

    emit(signal: 'create-source-device', device: GObject.Object): void;

    connect(
        signal: 'create-source-mount',
        callback: (_source: this, device_info: Gio.Mount, mount: MPID.Device) => Source
    ): number;

    connect_after(
        signal: 'create-source-mount',
        callback: (_source: this, device_info: Gio.Mount, mount: MPID.Device) => Source
    ): number;

    emit(signal: 'create-source-mount', device_info: Gio.Mount, mount: MPID.Device): void;

    connect(signal: 'create-source-volume', callback: (_source: this, volume: Gio.Volume) => Source): number;

    connect_after(signal: 'create-source-volume', callback: (_source: this, volume: Gio.Volume) => Source): number;

    emit(signal: 'create-source-volume', volume: Gio.Volume): void;

    connect(signal: 'medium-added', callback: (_source: this, source: GObject.Object) => void): number;

    connect_after(signal: 'medium-added', callback: (_source: this, source: GObject.Object) => void): number;

    emit(signal: 'medium-added', source: GObject.Object): void;

    // Constructors

    static ['new'](shell: Shell): RemovableMediaManager;

    // Members

    device_is_android(device: GObject.Object): boolean;

    get_gudev_device<T = GObject.Object>(volume: Gio.Volume): T;

    scan(): void;

    vfunc_medium_added(source: Source): void;
}

export namespace RhythmDB {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        dry_run: boolean;
        dryRun: boolean;
        name: string;
        no_update: boolean;
        noUpdate: boolean;
    }
}

export abstract class RhythmDB extends GObject.Object {
    static $gtype: GObject.GType<RhythmDB>;

    constructor(properties?: Partial<RhythmDB.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RhythmDB.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dry_run: boolean;
    dryRun: boolean;
    name: string;
    no_update: boolean;
    noUpdate: boolean;

    // Fields
    priv: RhythmDBPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'create-mount-op', callback: (_source: this) => Gio.MountOperation): number;

    connect_after(signal: 'create-mount-op', callback: (_source: this) => Gio.MountOperation): number;

    emit(signal: 'create-mount-op'): void;

    connect(signal: 'entry-added', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-added', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-added', entry: RhythmDBEntry): void;

    connect(
        signal: 'entry-changed',
        callback: (_source: this, entry: RhythmDBEntry, changes: RhythmDBEntryChange[]) => void
    ): number;

    connect_after(
        signal: 'entry-changed',
        callback: (_source: this, entry: RhythmDBEntry, changes: RhythmDBEntryChange[]) => void
    ): number;

    emit(signal: 'entry-changed', entry: RhythmDBEntry, changes: RhythmDBEntryChange[]): void;

    connect(signal: 'entry-deleted', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-deleted', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-deleted', entry: RhythmDBEntry): void;

    connect(
        signal: 'entry-extra-metadata-gather',
        callback: (_source: this, entry: RhythmDBEntry, data: StringValueMap) => void
    ): number;

    connect_after(
        signal: 'entry-extra-metadata-gather',
        callback: (_source: this, entry: RhythmDBEntry, data: StringValueMap) => void
    ): number;

    emit(signal: 'entry-extra-metadata-gather', entry: RhythmDBEntry, data: StringValueMap): void;

    connect(
        signal: 'entry-extra-metadata-notify',
        callback: (_source: this, entry: RhythmDBEntry, field: string, metadata: GObject.Value) => void
    ): number;

    connect_after(
        signal: 'entry-extra-metadata-notify',
        callback: (_source: this, entry: RhythmDBEntry, field: string, metadata: GObject.Value) => void
    ): number;

    emit(signal: 'entry-extra-metadata-notify', entry: RhythmDBEntry, field: string, metadata: any): void;

    connect(
        signal: 'entry-extra-metadata-request',
        callback: (_source: this, entry: RhythmDBEntry) => GObject.Value
    ): number;

    connect_after(
        signal: 'entry-extra-metadata-request',
        callback: (_source: this, entry: RhythmDBEntry) => GObject.Value
    ): number;

    emit(signal: 'entry-extra-metadata-request', entry: RhythmDBEntry): void;

    connect(
        signal: 'entry-keyword-added',
        callback: (_source: this, entry: RhythmDBEntry, keyword: RefString) => void
    ): number;

    connect_after(
        signal: 'entry-keyword-added',
        callback: (_source: this, entry: RhythmDBEntry, keyword: RefString) => void
    ): number;

    emit(signal: 'entry-keyword-added', entry: RhythmDBEntry, keyword: RefString): void;

    connect(
        signal: 'entry-keyword-removed',
        callback: (_source: this, entry: RhythmDBEntry, keyword: RefString) => void
    ): number;

    connect_after(
        signal: 'entry-keyword-removed',
        callback: (_source: this, entry: RhythmDBEntry, keyword: RefString) => void
    ): number;

    emit(signal: 'entry-keyword-removed', entry: RhythmDBEntry, keyword: RefString): void;

    connect(signal: 'load-complete', callback: (_source: this) => void): number;

    connect_after(signal: 'load-complete', callback: (_source: this) => void): number;

    emit(signal: 'load-complete'): void;

    connect(signal: 'read-only', callback: (_source: this, readonly: boolean) => void): number;

    connect_after(signal: 'read-only', callback: (_source: this, readonly: boolean) => void): number;

    emit(signal: 'read-only', readonly: boolean): void;

    connect(signal: 'save-complete', callback: (_source: this) => void): number;

    connect_after(signal: 'save-complete', callback: (_source: this) => void): number;

    emit(signal: 'save-complete'): void;

    connect(signal: 'save-error', callback: (_source: this, uri: string, error: any | null) => void): number;

    connect_after(signal: 'save-error', callback: (_source: this, uri: string, error: any | null) => void): number;

    emit(signal: 'save-error', uri: string, error: any | null): void;

    // Members

    add_uri(uri: string): void;

    add_uri_with_types(
        uri: string,
        type: RhythmDBEntryType,
        ignore_type: RhythmDBEntryType,
        error_type: RhythmDBEntryType
    ): void;

    commit(): void;

    do_full_query_async_parsed(results: RhythmDBQueryResults, query: RhythmDBQuery): void;

    do_full_query_parsed(results: RhythmDBQueryResults, query: RhythmDBQuery): void;

    emit_entry_added(entry: RhythmDBEntry): void;

    emit_entry_deleted(entry: RhythmDBEntry): void;

    emit_entry_extra_metadata_notify(entry: RhythmDBEntry, property_name: string, metadata: any): void;

    entry_count(): number;

    entry_count_by_type(entry_type: RhythmDBEntryType): number;

    entry_delete(entry: RhythmDBEntry): void;

    entry_delete_by_type(type: RhythmDBEntryType): void;

    entry_foreach(func: RhythmDBEntryForeachFunc): void;

    entry_foreach_by_type(entry_type: RhythmDBEntryType, func: RhythmDBEntryForeachFunc): void;

    entry_gather_metadata(entry: RhythmDBEntry): StringValueMap;

    entry_get(entry: RhythmDBEntry, propid: RhythmDBPropType, val: any): void;

    entry_keyword_add(entry: RhythmDBEntry, keyword: RefString): boolean;

    entry_keyword_has(entry: RhythmDBEntry, keyword: RefString): boolean;

    entry_keyword_remove(entry: RhythmDBEntry, keyword: RefString): boolean;

    entry_keywords_get(entry: RhythmDBEntry): RefString[];

    entry_lookup_by_id(id: number): RhythmDBEntry;

    entry_lookup_by_location(uri: string): RhythmDBEntry;

    entry_lookup_from_string(str: string, is_id: boolean): RhythmDBEntry;

    entry_matches_ext_db_key(entry: RhythmDBEntry, key: ExtDBKey): boolean;

    entry_move_to_trash(entry: RhythmDBEntry): void;

    entry_request_extra_metadata(entry: RhythmDBEntry, property_name: string): unknown;

    entry_set(entry: RhythmDBEntry, propid: number, value: any): void;

    entry_type_get_by_name(name: string): RhythmDBEntryType;

    entry_write_metadata_changes(entry: RhythmDBEntry, changes: RhythmDBEntryChange[]): void;

    evaluate_query(query: RhythmDBQuery, entry: RhythmDBEntry): boolean;

    get_property_type(property_id: number): GObject.GType;

    load(): void;

    nice_elt_name_from_propid(propid: RhythmDBPropType): libxml2.Char;

    propid_from_nice_elt_name(name: libxml2.Char): number;

    query_append_params(query: RhythmDBQuery, type: RhythmDBQueryType, prop: RhythmDBPropType, value: any): void;

    query_append_prop_multiple(query: RhythmDBQuery, propid: RhythmDBPropType, items: GObject.Value[]): void;

    query_deserialize(parent: libxml2.NodePtr): RhythmDBQuery;

    query_is_time_relative(query: RhythmDBQuery): boolean;

    query_preprocess(query: RhythmDBQuery): void;

    query_serialize(query: RhythmDBQuery, parent: libxml2.NodePtr): void;

    query_to_string(query: RhythmDBQuery): string;

    register_entry_type(entry_type: RhythmDBEntryType): void;

    save(): void;

    save_async(): void;

    shutdown(): void;

    start_action_thread(): void;

    vfunc_entry_added(entry: RhythmDBEntry): void;

    vfunc_entry_deleted(entry: RhythmDBEntry): void;

    vfunc_entry_extra_metadata_gather(entry: RhythmDBEntry, data: StringValueMap): void;

    vfunc_entry_extra_metadata_notify(entry: RhythmDBEntry, field: string, metadata: any): void;

    vfunc_entry_extra_metadata_request(entry: RhythmDBEntry): unknown;

    vfunc_entry_keyword_added(entry: RhythmDBEntry, keyword: RefString): void;

    vfunc_entry_keyword_removed(entry: RhythmDBEntry, keyword: RefString): void;

    vfunc_impl_do_full_query(query: RhythmDBQuery, results: RhythmDBQueryResults, cancel: boolean): void;

    vfunc_impl_entry_count(): number;

    vfunc_impl_entry_count_by_type(type: RhythmDBEntryType): number;

    vfunc_impl_entry_delete(entry: RhythmDBEntry): void;

    vfunc_impl_entry_delete_by_type(type: RhythmDBEntryType): void;

    vfunc_impl_entry_get(entry: RhythmDBEntry, propid: number, value: any): void;

    vfunc_impl_entry_keyword_add(entry: RhythmDBEntry, keyword: RefString): boolean;

    vfunc_impl_entry_keyword_has(entry: RhythmDBEntry, keyword: RefString): boolean;

    vfunc_impl_entry_keyword_remove(entry: RhythmDBEntry, keyword: RefString): boolean;

    vfunc_impl_entry_new(entry: RhythmDBEntry): void;

    vfunc_impl_entry_set(entry: RhythmDBEntry, propid: number, value: any): boolean;

    vfunc_impl_entry_type_registered(type: RhythmDBEntryType): void;

    vfunc_impl_evaluate_query(query: RhythmDBQuery, entry: RhythmDBEntry): boolean;

    vfunc_impl_load(cancel?: Gio.Cancellable | null): boolean;

    vfunc_impl_lookup_by_id(id: number): RhythmDBEntry;

    vfunc_impl_lookup_by_location(uri: RefString): RhythmDBEntry;

    vfunc_impl_save(): void;

    vfunc_load_complete(): void;

    vfunc_load_error(uri: string, msg: string): void;

    vfunc_read_only(readonly: boolean): void;

    vfunc_save_complete(): void;

    vfunc_save_error(uri: string, error: GLib.Error): void;

    static compute_status_normal(
        n_songs: number,
        duration: number,
        size: number,
        singular: string,
        plural: string
    ): string;

    static error_quark(): GLib.Quark;

    static get_error_entry_type(): RhythmDBEntryType;

    static get_ignore_entry_type(): RhythmDBEntryType;

    static get_song_entry_type(): RhythmDBEntryType;

    static query_concatenate(query1: RhythmDBQuery, query2: RhythmDBQuery): void;

    static query_copy(array: RhythmDBQuery): RhythmDBQuery;

    static query_free(query: RhythmDBQuery): void;
}

export namespace RhythmDBEntryType {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        cache_name: string;
        cacheName: string;
        category: RhythmDBEntryCategory;
        db: RhythmDB;
        name: string;
        save_to_disk: boolean;
        saveToDisk: boolean;
        type_data_size: number;
        typeDataSize: number;
    }
}

export class RhythmDBEntryType extends GObject.Object {
    static $gtype: GObject.GType<RhythmDBEntryType>;

    constructor(properties?: Partial<RhythmDBEntryType.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RhythmDBEntryType.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_name: string;
    cacheName: string;
    category: RhythmDBEntryCategory;
    db: RhythmDB;
    name: string;
    save_to_disk: boolean;
    saveToDisk: boolean;
    type_data_size: number;
    typeDataSize: number;

    // Fields
    priv: RhythmDBEntryTypePrivate;

    // Members

    fetch_metadata(uri: string, metadata: RhythmDBEntryChange[]): boolean;

    get_name(): string;

    purge_metadata_cache(prefix: string, max_age: number): void;

    vfunc_cache_key_to_uri(key: string): string;

    vfunc_can_sync_metadata(entry: RhythmDBEntry): boolean;

    vfunc_destroy_entry(entry: RhythmDBEntry): void;

    vfunc_entry_created(entry: RhythmDBEntry): void;

    vfunc_get_playback_uri(entry: RhythmDBEntry): string;

    vfunc_update_availability(entry: RhythmDBEntry, avail: RhythmDBEntryAvailability): void;

    vfunc_uri_to_cache_key(uri: string): string;
}

export namespace RhythmDBImportJob {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        entry_type: RhythmDBEntryType;
        entryType: RhythmDBEntryType;
        error_type: RhythmDBEntryType;
        errorType: RhythmDBEntryType;
        ignore_type: RhythmDBEntryType;
        ignoreType: RhythmDBEntryType;
    }
}

export class RhythmDBImportJob extends GObject.Object implements TaskProgress {
    static $gtype: GObject.GType<RhythmDBImportJob>;

    constructor(properties?: Partial<RhythmDBImportJob.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RhythmDBImportJob.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    entry_type: RhythmDBEntryType;
    entryType: RhythmDBEntryType;
    error_type: RhythmDBEntryType;
    errorType: RhythmDBEntryType;
    ignore_type: RhythmDBEntryType;
    ignoreType: RhythmDBEntryType;

    // Fields
    priv: RhythmDBImportJobPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'complete', callback: (_source: this, total: number) => void): number;

    connect_after(signal: 'complete', callback: (_source: this, total: number) => void): number;

    emit(signal: 'complete', total: number): void;

    connect(signal: 'entry-added', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-added', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-added', entry: RhythmDBEntry): void;

    connect(signal: 'scan-complete', callback: (_source: this, total: number) => void): number;

    connect_after(signal: 'scan-complete', callback: (_source: this, total: number) => void): number;

    emit(signal: 'scan-complete', total: number): void;

    connect(signal: 'status-changed', callback: (_source: this, total: number, imported: number) => void): number;

    connect_after(signal: 'status-changed', callback: (_source: this, total: number, imported: number) => void): number;

    emit(signal: 'status-changed', total: number, imported: number): void;

    // Implemented Properties

    task_cancellable: boolean;
    taskCancellable: boolean;
    task_detail: string;
    taskDetail: string;
    task_label: string;
    taskLabel: string;
    task_notify: boolean;
    taskNotify: boolean;
    task_outcome: TaskOutcome;
    taskOutcome: TaskOutcome;
    task_progress: number;
    taskProgress: number;

    // Constructors

    static ['new'](
        db: RhythmDB,
        entry_type: RhythmDBEntryType,
        ignore_type: RhythmDBEntryType,
        error_type: RhythmDBEntryType
    ): RhythmDBImportJob;

    // Members

    add_uri(uri: string): void;

    cancel(): void;

    complete(): boolean;

    get_imported(): number;

    get_processed(): number;

    get_total(): number;

    scan_complete(): boolean;

    start(): void;

    vfunc_complete(total: number): void;

    vfunc_entry_added(entry: RhythmDBEntry): void;

    vfunc_scan_complete(total: number): void;

    vfunc_status_changed(total: number, imported: number): void;

    // Implemented Members

    vfunc_cancel(): void;
}

export namespace RhythmDBPropertyModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        prop: number;
        query_model: RhythmDBQueryModel;
        queryModel: RhythmDBQueryModel;
    }
}

export class RhythmDBPropertyModel extends GObject.Object implements Gtk.TreeModel {
    static $gtype: GObject.GType<RhythmDBPropertyModel>;

    constructor(properties?: Partial<RhythmDBPropertyModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RhythmDBPropertyModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    prop: number;
    query_model: RhythmDBQueryModel;
    queryModel: RhythmDBQueryModel;

    // Fields
    priv: RhythmDBPropertyModelPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'pre-row-deletion', callback: (_source: this) => void): number;

    connect_after(signal: 'pre-row-deletion', callback: (_source: this) => void): number;

    emit(signal: 'pre-row-deletion'): void;

    // Constructors

    static ['new'](db: RhythmDB, propid: RhythmDBPropType): RhythmDBPropertyModel;

    // Members

    enable_drag(view: Gtk.TreeView): void;

    iter_from_string(name: string, iter: Gtk.TreeIter): boolean;

    vfunc_pre_row_deletion(): void;

    // Implemented Members

    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;

    foreach(func: Gtk.TreeModelForeachFunc): void;

    get_column_type(index_: number): GObject.GType;

    get_flags(): Gtk.TreeModelFlags;

    get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    get_iter_first(): [boolean, Gtk.TreeIter];

    get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

    get_n_columns(): number;

    get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    get_string_from_iter(iter: Gtk.TreeIter): string;

    get_value(iter: Gtk.TreeIter, column: number): unknown;

    iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    iter_has_child(iter: Gtk.TreeIter): boolean;

    iter_n_children(iter?: Gtk.TreeIter | null): number;

    iter_next(iter: Gtk.TreeIter): boolean;

    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    iter_previous(iter: Gtk.TreeIter): boolean;

    ref_node(iter: Gtk.TreeIter): void;

    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_deleted(path: Gtk.TreePath): void;

    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

    unref_node(iter: Gtk.TreeIter): void;

    vfunc_get_column_type(index_: number): GObject.GType;

    vfunc_get_flags(): Gtk.TreeModelFlags;

    vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    vfunc_get_n_columns(): number;

    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;

    vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;

    vfunc_iter_next(iter: Gtk.TreeIter): boolean;

    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

    vfunc_ref_node(iter: Gtk.TreeIter): void;

    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_deleted(path: Gtk.TreePath): void;

    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_unref_node(iter: Gtk.TreeIter): void;
}

export namespace RhythmDBQueryModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        base_model: RhythmDBQueryModel;
        baseModel: RhythmDBQueryModel;
        db: RhythmDB;
        limit_type: RhythmDBQueryModelLimitType;
        limitType: RhythmDBQueryModelLimitType;
        limit_value: GLib.Variant;
        limitValue: GLib.Variant;
        query: any;
        show_hidden: boolean;
        showHidden: boolean;
        sort_data: any;
        sortData: any;
        sort_data_destroy: any;
        sortDataDestroy: any;
        sort_func: any;
        sortFunc: any;
        sort_reverse: boolean;
        sortReverse: boolean;
    }
}

export class RhythmDBQueryModel extends GObject.Object implements Gtk.TreeModel, RhythmDBQueryResults {
    static $gtype: GObject.GType<RhythmDBQueryModel>;

    constructor(properties?: Partial<RhythmDBQueryModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RhythmDBQueryModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_model: RhythmDBQueryModel;
    baseModel: RhythmDBQueryModel;
    db: RhythmDB;
    limit_type: RhythmDBQueryModelLimitType;
    limitType: RhythmDBQueryModelLimitType;
    limit_value: GLib.Variant;
    limitValue: GLib.Variant;
    query: any;
    show_hidden: boolean;
    showHidden: boolean;
    sort_data: any;
    sortData: any;
    sort_data_destroy: any;
    sortDataDestroy: any;
    sort_func: any;
    sortFunc: any;
    sort_reverse: boolean;
    sortReverse: boolean;

    // Fields
    priv: RhythmDBQueryModelPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'complete', callback: (_source: this) => void): number;

    connect_after(signal: 'complete', callback: (_source: this) => void): number;

    emit(signal: 'complete'): void;

    connect(
        signal: 'entry-prop-changed',
        callback: (_source: this, entry: RhythmDBEntry, prop: number, old: any | null, new_value: any | null) => void
    ): number;

    connect_after(
        signal: 'entry-prop-changed',
        callback: (_source: this, entry: RhythmDBEntry, prop: number, old: any | null, new_value: any | null) => void
    ): number;

    emit(
        signal: 'entry-prop-changed',
        entry: RhythmDBEntry,
        prop: number,
        old: any | null,
        new_value: any | null
    ): void;

    connect(signal: 'entry-removed', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'entry-removed', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'entry-removed', entry: RhythmDBEntry): void;

    connect(signal: 'filter-entry-drop', callback: (_source: this, entry: RhythmDBEntry) => boolean): number;

    connect_after(signal: 'filter-entry-drop', callback: (_source: this, entry: RhythmDBEntry) => boolean): number;

    emit(signal: 'filter-entry-drop', entry: RhythmDBEntry): void;

    connect(signal: 'non-entry-dropped', callback: (_source: this, uri: string, position: number) => void): number;

    connect_after(
        signal: 'non-entry-dropped',
        callback: (_source: this, uri: string, position: number) => void
    ): number;

    emit(signal: 'non-entry-dropped', uri: string, position: number): void;

    connect(signal: 'post-entry-delete', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'post-entry-delete', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'post-entry-delete', entry: RhythmDBEntry): void;

    // Constructors

    static new_empty(db: RhythmDB): RhythmDBQueryModel;

    static new_for_entry_type(db: RhythmDB, entry_type: RhythmDBEntryType, show_hidden: boolean): RhythmDBQueryModel;

    // Members

    add_entry(entry: RhythmDBEntry, index: number): void;

    chain(base: RhythmDBQueryModel, import_entries: boolean): void;

    compute_status_normal(singular: string, plural: string): string;

    copy_contents(src: RhythmDBQueryModel): void;

    entry_to_iter(entry: RhythmDBEntry, iter: Gtk.TreeIter): boolean;

    get_duration(): number;

    get_next_from_entry(entry: RhythmDBEntry): RhythmDBEntry;

    get_previous_from_entry(entry: RhythmDBEntry): RhythmDBEntry;

    get_size(): number;

    has_pending_changes(): boolean;

    iter_to_entry(entry_iter: Gtk.TreeIter): RhythmDBEntry;

    move_entry(entry: RhythmDBEntry, index: number): void;

    reapply_query(filter: boolean): void;

    remove_entry(entry: RhythmDBEntry): boolean;

    set_sort_order(sort_func: GLib.CompareDataFunc, sort_reverse: boolean): void;

    shuffle_entries(): void;

    tree_path_to_entry(path: Gtk.TreePath): RhythmDBEntry;

    vfunc_complete(): void;

    vfunc_entry_prop_changed(entry: RhythmDBEntry, prop: RhythmDBPropType, old: any, new_value: any): void;

    vfunc_entry_removed(entry: RhythmDBEntry): void;

    vfunc_filter_entry_drop(entry: RhythmDBEntry): boolean;

    vfunc_non_entry_dropped(uri: string, position: number): void;

    vfunc_post_entry_delete(entry: RhythmDBEntry): void;

    static album_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static artist_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static bitrate_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static composer_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static date_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static double_ceiling_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static genre_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static location_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static string_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static title_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static track_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    static ulong_sort_func(a: RhythmDBEntry, b: RhythmDBEntry, data?: any | null): number;

    // Implemented Members

    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;

    foreach(func: Gtk.TreeModelForeachFunc): void;

    get_column_type(index_: number): GObject.GType;

    get_flags(): Gtk.TreeModelFlags;

    get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    get_iter_first(): [boolean, Gtk.TreeIter];

    get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

    get_n_columns(): number;

    get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    get_string_from_iter(iter: Gtk.TreeIter): string;

    get_value(iter: Gtk.TreeIter, column: number): unknown;

    iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    iter_has_child(iter: Gtk.TreeIter): boolean;

    iter_n_children(iter?: Gtk.TreeIter | null): number;

    iter_next(iter: Gtk.TreeIter): boolean;

    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    iter_previous(iter: Gtk.TreeIter): boolean;

    ref_node(iter: Gtk.TreeIter): void;

    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_deleted(path: Gtk.TreePath): void;

    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

    unref_node(iter: Gtk.TreeIter): void;

    vfunc_get_column_type(index_: number): GObject.GType;

    vfunc_get_flags(): Gtk.TreeModelFlags;

    vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    vfunc_get_n_columns(): number;

    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;

    vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;

    vfunc_iter_next(iter: Gtk.TreeIter): boolean;

    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

    vfunc_ref_node(iter: Gtk.TreeIter): void;

    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_deleted(path: Gtk.TreePath): void;

    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_unref_node(iter: Gtk.TreeIter): void;

    add_results(entries: RhythmDBEntry[]): void;

    query_complete(): void;

    vfunc_add_results(entries: RhythmDBEntry[]): void;

    vfunc_query_complete(): void;
}

export namespace RhythmDBQueryResultList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RhythmDBQueryResultList extends GObject.Object implements RhythmDBQueryResults {
    static $gtype: GObject.GType<RhythmDBQueryResultList>;

    constructor(properties?: Partial<RhythmDBQueryResultList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RhythmDBQueryResultList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RhythmDBQueryResultListPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'complete', callback: (_source: this) => void): number;

    connect_after(signal: 'complete', callback: (_source: this) => void): number;

    emit(signal: 'complete'): void;

    // Constructors

    static ['new'](): RhythmDBQueryResultList;

    // Members

    get_results(): RhythmDBEntry[];

    vfunc_complete(): void;

    // Implemented Members

    add_results(entries: RhythmDBEntry[]): void;

    query_complete(): void;

    vfunc_add_results(entries: RhythmDBEntry[]): void;

    vfunc_query_complete(): void;
}

export namespace SearchEntry {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        explicit_mode: boolean;
        explicitMode: boolean;
        has_popup: boolean;
        hasPopup: boolean;
    }
}

export class SearchEntry extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<SearchEntry>;

    constructor(properties?: Partial<SearchEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SearchEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    explicit_mode: boolean;
    explicitMode: boolean;
    has_popup: boolean;
    hasPopup: boolean;

    // Fields
    priv: SearchEntryPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'activate', callback: (_source: this, text: string) => void): number;

    emit(signal: 'activate', text: string): void;

    connect(signal: 'search', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'search', callback: (_source: this, text: string) => void): number;

    emit(signal: 'search', text: string): void;

    connect(signal: 'show-popup', callback: (_source: this) => void): number;

    connect_after(signal: 'show-popup', callback: (_source: this) => void): number;

    emit(signal: 'show-popup'): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](has_popup: boolean): SearchEntry;
    static ['new'](...args: never[]): never;

    // Members

    clear(): void;

    grab_focus(): void;

    searching(): boolean;

    set_mnemonic(enable: boolean): void;

    set_placeholder(text: string): void;

    set_text(text: string): void;

    vfunc_activate(text: string): void;

    vfunc_search(text: string): void;

    vfunc_show_popup(): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace SegmentedBar {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;

        bar_height: number;
        barHeight: number;
        show_labels: boolean;
        showLabels: boolean;
        show_reflection: boolean;
        showReflection: boolean;
    }
}

export class SegmentedBar extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SegmentedBar>;

    constructor(properties?: Partial<SegmentedBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SegmentedBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bar_height: number;
    barHeight: number;
    show_labels: boolean;
    showLabels: boolean;
    show_reflection: boolean;
    showReflection: boolean;

    // Fields
    priv: SegmentedBarPrivate;

    // Constructors

    static ['new'](): SegmentedBar;

    // Members

    add_segment(title: string, percent: number, red: number, green: number, blue: number, alpha: number): number;

    add_segment_default_color(title: string, percent: number): number;

    set_value_formatter(formatter: SegmentedBarValueFormatter): void;

    update_segment(segment_index: number, percent: number): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace Shell {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        accel_group: Gtk.AccelGroup;
        accelGroup: Gtk.AccelGroup;
        application: Application;
        autostarted: boolean;
        db: RhythmDB;
        disable_plugins: boolean;
        disablePlugins: boolean;
        display_page_model: DisplayPageModel;
        displayPageModel: DisplayPageModel;
        display_page_tree: DisplayPageTree;
        displayPageTree: DisplayPageTree;
        dry_run: boolean;
        dryRun: boolean;
        no_registration: boolean;
        noRegistration: boolean;
        no_update: boolean;
        noUpdate: boolean;
        playlist_manager: PlaylistManager;
        playlistManager: PlaylistManager;
        playlists_file: string;
        playlistsFile: string;
        prefs: ShellPreferences;
        removable_media_manager: RemovableMediaManager;
        removableMediaManager: RemovableMediaManager;
        rhythmdb_file: string;
        rhythmdbFile: string;
        selected_page: DisplayPage;
        selectedPage: DisplayPage;
        shell_player: ShellPlayer;
        shellPlayer: ShellPlayer;
        task_list: TaskList;
        taskList: TaskList;
        track_transfer_queue: TrackTransferQueue;
        trackTransferQueue: TrackTransferQueue;
        visibility: boolean;
        window: Gtk.Window;
    }
}

export class Shell extends GObject.Object {
    static $gtype: GObject.GType<Shell>;

    constructor(properties?: Partial<Shell.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Shell.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accel_group: Gtk.AccelGroup;
    accelGroup: Gtk.AccelGroup;
    application: Application;
    autostarted: boolean;
    db: RhythmDB;
    disable_plugins: boolean;
    disablePlugins: boolean;
    display_page_model: DisplayPageModel;
    displayPageModel: DisplayPageModel;
    display_page_tree: DisplayPageTree;
    displayPageTree: DisplayPageTree;
    dry_run: boolean;
    dryRun: boolean;
    no_registration: boolean;
    noRegistration: boolean;
    no_update: boolean;
    noUpdate: boolean;
    playlist_manager: PlaylistManager;
    playlistManager: PlaylistManager;
    playlists_file: string;
    playlistsFile: string;
    prefs: ShellPreferences;
    removable_media_manager: RemovableMediaManager;
    removableMediaManager: RemovableMediaManager;
    rhythmdb_file: string;
    rhythmdbFile: string;
    selected_page: DisplayPage;
    selectedPage: DisplayPage;
    shell_player: ShellPlayer;
    shellPlayer: ShellPlayer;
    task_list: TaskList;
    taskList: TaskList;
    track_transfer_queue: TrackTransferQueue;
    trackTransferQueue: TrackTransferQueue;
    visibility: boolean;
    window: Gtk.Window;

    // Fields
    priv: ShellPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'create-song-info', callback: (_source: this, song_info: SongInfo, multi: boolean) => void): number;

    connect_after(
        signal: 'create-song-info',
        callback: (_source: this, song_info: SongInfo, multi: boolean) => void
    ): number;

    emit(signal: 'create-song-info', song_info: SongInfo, multi: boolean): void;

    connect(
        signal: 'notify-custom',
        callback: (
            _source: this,
            timeout: number,
            primary: string,
            secondary: string,
            image_uri: string,
            requested: boolean
        ) => void
    ): number;

    connect_after(
        signal: 'notify-custom',
        callback: (
            _source: this,
            timeout: number,
            primary: string,
            secondary: string,
            image_uri: string,
            requested: boolean
        ) => void
    ): number;

    emit(
        signal: 'notify-custom',
        timeout: number,
        primary: string,
        secondary: string,
        image_uri: string,
        requested: boolean
    ): void;

    connect(signal: 'notify-playing-entry', callback: (_source: this, requested: boolean) => void): number;

    connect_after(signal: 'notify-playing-entry', callback: (_source: this, requested: boolean) => void): number;

    emit(signal: 'notify-playing-entry', requested: boolean): void;

    connect(signal: 'visibility-changed', callback: (_source: this, visibile: boolean) => void): number;

    connect_after(signal: 'visibility-changed', callback: (_source: this, visibile: boolean) => void): number;

    emit(signal: 'visibility-changed', visibile: boolean): void;

    connect(
        signal: 'visibility-changing',
        callback: (_source: this, initial: boolean, visible: boolean) => boolean
    ): number;

    connect_after(
        signal: 'visibility-changing',
        callback: (_source: this, initial: boolean, visible: boolean) => boolean
    ): number;

    emit(signal: 'visibility-changing', initial: boolean, visible: boolean): void;

    // Members

    activate_source(source: Source, play: number): boolean;

    activate_source_by_uri(source_uri: string, play: number): boolean;

    add_uri(uri: string, title: string, genre: string): boolean;

    add_widget(widget: Gtk.Widget, location: ShellUILocation, expand: boolean, fill: boolean): void;

    append_display_page(page: DisplayPage, parent?: DisplayPage | null): void;

    do_notify(requested: boolean): boolean;

    get_party_mode(): boolean;

    get_song_properties(uri: string): [boolean, GLib.HashTable<string, GObject.Value>];

    get_source_by_entry_type(type: RhythmDBEntryType): Source;

    guess_source_for_uri(uri: string): Source;

    load_uri(uri: string, play: boolean): boolean;

    notify_custom(timeout: number, primary: string, secondary: string, image_uri: string, requested: boolean): void;

    present(timestamp: number): boolean;

    quit(): boolean;

    register_entry_type_for_source(source: Source, type: RhythmDBEntryType): void;

    remove_widget(widget: Gtk.Widget, location: ShellUILocation): void;

    set_song_property(uri: string, propname: string, value: any): boolean;

    toggle_visibility(): void;

    vfunc_create_song_info(song_info: SongInfo, multi: boolean): void;

    vfunc_database_load_complete(): void;

    vfunc_removable_media_scan_finished(): void;

    vfunc_visibility_changed(visible: boolean): void;

    vfunc_visibility_changing(initial: boolean, visible: boolean): boolean;
}

export namespace ShellPlayer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        db: RhythmDB;
        has_next: boolean;
        hasNext: boolean;
        has_prev: boolean;
        hasPrev: boolean;
        mute: boolean;
        play_order: string;
        playOrder: string;
        player: GObject.Object;
        playing: boolean;
        playing_from_queue: boolean;
        playingFromQueue: boolean;
        queue_only: boolean;
        queueOnly: boolean;
        queue_source: PlaylistSource;
        queueSource: PlaylistSource;
        source: Source;
        volume: number;
    }
}

export class ShellPlayer extends GObject.Object {
    static $gtype: GObject.GType<ShellPlayer>;

    constructor(properties?: Partial<ShellPlayer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShellPlayer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db: RhythmDB;
    has_next: boolean;
    hasNext: boolean;
    has_prev: boolean;
    hasPrev: boolean;
    mute: boolean;
    play_order: string;
    playOrder: string;
    player: GObject.Object;
    playing: boolean;
    playing_from_queue: boolean;
    playingFromQueue: boolean;
    queue_only: boolean;
    queueOnly: boolean;
    queue_source: PlaylistSource;
    queueSource: PlaylistSource;
    source: Source;
    volume: number;

    // Fields
    priv: ShellPlayerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'elapsed-changed', callback: (_source: this, elapsed: number) => void): number;

    connect_after(signal: 'elapsed-changed', callback: (_source: this, elapsed: number) => void): number;

    emit(signal: 'elapsed-changed', elapsed: number): void;

    connect(signal: 'elapsed-nano-changed', callback: (_source: this, elapsed: number) => void): number;

    connect_after(signal: 'elapsed-nano-changed', callback: (_source: this, elapsed: number) => void): number;

    emit(signal: 'elapsed-nano-changed', elapsed: number): void;

    connect(signal: 'playing-changed', callback: (_source: this, playing: boolean) => void): number;

    connect_after(signal: 'playing-changed', callback: (_source: this, playing: boolean) => void): number;

    emit(signal: 'playing-changed', playing: boolean): void;

    connect(signal: 'playing-song-changed', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'playing-song-changed', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'playing-song-changed', entry: RhythmDBEntry): void;

    connect(
        signal: 'playing-song-property-changed',
        callback: (_source: this, uri: string, property: string, old: GObject.Value, newvalue: GObject.Value) => void
    ): number;

    connect_after(
        signal: 'playing-song-property-changed',
        callback: (_source: this, uri: string, property: string, old: GObject.Value, newvalue: GObject.Value) => void
    ): number;

    emit(signal: 'playing-song-property-changed', uri: string, property: string, old: any, newvalue: any): void;

    connect(signal: 'playing-source-changed', callback: (_source: this, source: Source) => void): number;

    connect_after(signal: 'playing-source-changed', callback: (_source: this, source: Source) => void): number;

    emit(signal: 'playing-source-changed', source: Source): void;

    connect(signal: 'playing-uri-changed', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'playing-uri-changed', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'playing-uri-changed', uri: string): void;

    connect(signal: 'window-title-changed', callback: (_source: this, title: string) => void): number;

    connect_after(signal: 'window-title-changed', callback: (_source: this, title: string) => void): number;

    emit(signal: 'window-title-changed', title: string): void;

    // Constructors

    static ['new'](db: RhythmDB): ShellPlayer;

    // Members

    add_play_order(name: string, description: string, order_type: GObject.GType, hidden: boolean): void;

    do_next(): boolean;

    do_previous(): boolean;

    get_active_source(): Source;

    get_mute(): [boolean, boolean];

    get_playback_state(): [boolean, boolean, boolean];

    get_playing(): [boolean, boolean];

    get_playing_entry(): RhythmDBEntry | null;

    get_playing_path(): [boolean, string];

    get_playing_song_duration(): number;

    get_playing_source(): Source;

    get_playing_time(): [boolean, number];

    get_playing_time_string(): string;

    get_volume(): [boolean, number];

    jump_to_current(): void;

    pause(): boolean;

    play(): boolean;

    play_entry(entry: RhythmDBEntry, source: Source): void;

    playpause(): boolean;

    remove_play_order(name: string): void;

    seek(offset: number): boolean;

    set_mute(mute: boolean): boolean;

    set_playback_state(shuffle: boolean, repeat: boolean): void;

    set_playing_source(source: Source): void;

    set_playing_time(time: number): boolean;

    set_selected_source(source: Source): void;

    set_volume(volume: number): boolean;

    set_volume_relative(delta: number): boolean;

    stop(): void;

    vfunc_elapsed_changed(elapsed: number): void;

    vfunc_elapsed_nano_changed(elapsed: number): void;

    vfunc_playing_changed(playing: boolean): void;

    vfunc_playing_song_changed(entry: RhythmDBEntry): void;

    vfunc_playing_song_property_changed(uri: string, property: string, old: any, newValue: any): void;

    vfunc_playing_source_changed(source: Source): void;

    vfunc_playing_uri_changed(uri: string): void;

    vfunc_window_title_changed(window_title: string): void;
}

export namespace ShellPreferences {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;
    }
}

export class ShellPreferences extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ShellPreferences>;

    constructor(properties?: Partial<ShellPreferences.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShellPreferences.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ShellPreferencesPrivate | any;

    // Constructors

    static ['new'](views: Source[]): ShellPreferences;
    static ['new'](...args: never[]): never;

    // Members

    add_widget(widget: Gtk.Widget, location: ShellPrefsUILocation, expand: boolean, fill: boolean): void;

    append_page(name: string, widget: Gtk.Widget): void;

    remove_widget(widget: Gtk.Widget, location: ShellPrefsUILocation): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace SongInfo {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        current_entry: RhythmDBEntry;
        currentEntry: RhythmDBEntry;
        entry_view: EntryView;
        entryView: EntryView;
        selected_entries: any[];
        selectedEntries: any[];
        source: Source;
    }
}

export class SongInfo extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SongInfo>;

    constructor(properties?: Partial<SongInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SongInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    current_entry: RhythmDBEntry;
    currentEntry: RhythmDBEntry;
    entry_view: EntryView;
    entryView: EntryView;
    selected_entries: any[];
    selectedEntries: any[];
    source: Source;

    // Fields
    priv: SongInfoPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'post-metadata-change', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'post-metadata-change', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'post-metadata-change', entry: RhythmDBEntry): void;

    connect(signal: 'pre-metadata-change', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    connect_after(signal: 'pre-metadata-change', callback: (_source: this, entry: RhythmDBEntry) => void): number;

    emit(signal: 'pre-metadata-change', entry: RhythmDBEntry): void;

    // Constructors

    static ['new'](source: Source, entry_view: EntryView): SongInfo;
    static ['new'](...args: never[]): never;

    // Members

    append_page(title: string, page: Gtk.Widget): number;

    vfunc_post_metadata_change(entry: RhythmDBEntry): void;

    vfunc_pre_metadata_change(entry: RhythmDBEntry): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace Source {
    export interface ConstructorProperties extends DisplayPage.ConstructorProperties {
        [key: string]: any;

        base_query_model: RhythmDBQueryModel;
        baseQueryModel: RhythmDBQueryModel;
        entry_type: RhythmDBEntryType;
        entryType: RhythmDBEntryType;
        hidden_when_empty: boolean;
        hiddenWhenEmpty: boolean;
        load_status: SourceLoadStatus;
        loadStatus: SourceLoadStatus;
        play_order: PlayOrder;
        playOrder: PlayOrder;
        playlist_menu: Gio.MenuModel;
        playlistMenu: Gio.MenuModel;
        query_model: RhythmDBQueryModel;
        queryModel: RhythmDBQueryModel;
        settings: Gio.Settings;
        show_browser: boolean;
        showBrowser: boolean;
        toolbar_menu: Gio.MenuModel;
        toolbarMenu: Gio.MenuModel;
    }
}

export abstract class Source extends DisplayPage implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Source>;

    constructor(properties?: Partial<Source.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Source.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_query_model: RhythmDBQueryModel;
    baseQueryModel: RhythmDBQueryModel;
    entry_type: RhythmDBEntryType;
    entryType: RhythmDBEntryType;
    hidden_when_empty: boolean;
    hiddenWhenEmpty: boolean;
    load_status: SourceLoadStatus;
    loadStatus: SourceLoadStatus;
    play_order: PlayOrder;
    playOrder: PlayOrder;
    playlist_menu: Gio.MenuModel;
    playlistMenu: Gio.MenuModel;
    query_model: RhythmDBQueryModel;
    queryModel: RhythmDBQueryModel;
    settings: Gio.Settings;
    show_browser: boolean;
    showBrowser: boolean;
    toolbar_menu: Gio.MenuModel;
    toolbarMenu: Gio.MenuModel;

    // Fields
    priv: SourcePrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'filter-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'filter-changed', callback: (_source: this) => void): number;

    emit(signal: 'filter-changed'): void;

    connect(signal: 'playback-status-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'playback-status-changed', callback: (_source: this) => void): number;

    emit(signal: 'playback-status-changed'): void;

    connect(signal: 'reset-filters', callback: (_source: this) => void): number;

    connect_after(signal: 'reset-filters', callback: (_source: this) => void): number;

    emit(signal: 'reset-filters'): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Members

    add_to_queue(queue: Source): void;

    add_uri(uri: string, title: string, genre: string, callback: SourceAddCallback): void;

    bind_settings(
        entry_view: Gtk.Widget | null,
        paned: Gtk.Widget | null,
        browser: Gtk.Widget | null,
        sort_order: boolean
    ): void;

    can_add_to_queue(): boolean;

    can_copy(): boolean;

    can_cut(): boolean;

    can_delete(): boolean;

    can_move_to_trash(): boolean;

    can_paste(): boolean;

    can_pause(): boolean;

    can_rename(): boolean;

    can_show_properties(): boolean;

    copy(): RhythmDBEntry[];

    create_search_action(): Gio.Action;

    cut(): RhythmDBEntry[];

    delete_selected(): void;

    gather_selected_properties(prop: RhythmDBPropType): string[];

    get_delete_label(): string;

    get_entry_view(): EntryView;

    get_playback_status(text?: string | null, progress?: number | null): [string | null, number | null];

    get_property_views(): PropertyView[];

    handle_eos(): SourceEOFType;

    move_to_trash(): void;

    notify_filter_changed(): void;

    notify_playback_status_changed(): void;

    paste(entries: RhythmDBEntry[]): TrackTransferBatch;

    search(search: SourceSearch | null, cur_text: string | null, new_text: string): void;

    set_hidden_when_empty(hidden: boolean): void;

    song_properties(): void;

    try_playlist(): boolean;

    update_play_statistics(db: RhythmDB, entry: RhythmDBEntry): void;

    uri_is_source(uri: string): boolean;

    want_uri(uri: string): number;

    vfunc_add_to_queue(queue: Source): void;

    vfunc_add_uri(uri: string, title: string, genre: string, callback: SourceAddCallback): void;

    vfunc_can_add_to_queue(): boolean;

    vfunc_can_copy(): boolean;

    vfunc_can_cut(): boolean;

    vfunc_can_delete(): boolean;

    vfunc_can_move_to_trash(): boolean;

    vfunc_can_paste(): boolean;

    vfunc_can_pause(): boolean;

    vfunc_can_rename(): boolean;

    vfunc_copy(): RhythmDBEntry[];

    vfunc_cut(): RhythmDBEntry[];

    vfunc_delete_selected(): void;

    vfunc_filter_changed(): void;

    vfunc_get_delete_label(): string;

    vfunc_get_entry_view(): EntryView;

    vfunc_get_playback_status(text?: string | null, progress?: number | null): [string | null, number | null];

    vfunc_get_property_views(): PropertyView[];

    vfunc_handle_eos(): SourceEOFType;

    vfunc_move_to_trash(): void;

    vfunc_paste(entries: RhythmDBEntry[]): TrackTransferBatch;

    vfunc_reset_filters(): void;

    vfunc_search(search: SourceSearch | null, cur_text: string | null, new_text: string): void;

    vfunc_song_properties(): void;

    vfunc_try_playlist(): boolean;

    vfunc_uri_is_source(uri: string): boolean;

    vfunc_want_uri(uri: string): number;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace SourceSearch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SourceSearch extends GObject.Object {
    static $gtype: GObject.GType<SourceSearch>;

    constructor(properties?: Partial<SourceSearch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceSearch.ConstructorProperties>, ...args: any[]): void;

    // Members

    create_query(db: RhythmDB, search_text: string): RhythmDBQuery;

    get_description(): string;

    is_subset(current: string, next: string): boolean;

    register(name: string): void;

    vfunc_create_query(db: RhythmDB, search_text: string): RhythmDBQuery;

    vfunc_get_description(): string;

    vfunc_is_subset(current: string, next: string): boolean;

    static add_to_menu(menu: Gio.Menu, action_namespace: string, action: Gio.Action, name: string): void;

    static get_by_name(name: string): SourceSearch;
}

export namespace SourceSearchBasic {
    export interface ConstructorProperties extends SourceSearch.ConstructorProperties {
        [key: string]: any;

        description: string;
        prop: number;
    }
}

export class SourceSearchBasic extends SourceSearch {
    static $gtype: GObject.GType<SourceSearchBasic>;

    constructor(properties?: Partial<SourceSearchBasic.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceSearchBasic.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    prop: number;

    // Fields
    search_prop: RhythmDBPropType;

    // Constructors

    static ['new'](prop: RhythmDBPropType, description: string): SourceSearchBasic;

    // Members

    static add_to_menu(
        menu: Gio.Menu,
        action_namespace: string,
        search_action: Gio.Action,
        prop: RhythmDBPropType,
        name: string,
        label: string
    ): void;

    static add_to_menu(...args: never[]): never;

    static register(prop: RhythmDBPropType, name: string, description: string): void;
    static register(...args: never[]): never;
}

export namespace SourceToolbar {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        accel_group: Gtk.AccelGroup;
        accelGroup: Gtk.AccelGroup;
        page: DisplayPage;
    }
}

export class SourceToolbar extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<SourceToolbar>;

    constructor(properties?: Partial<SourceToolbar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceToolbar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accel_group: Gtk.AccelGroup;
    accelGroup: Gtk.AccelGroup;
    page: DisplayPage;

    // Fields
    priv: SourceToolbarPrivate;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](page: DisplayPage, accel_group: Gtk.AccelGroup): SourceToolbar;
    static ['new'](...args: never[]): never;

    // Members

    add_search_entry(placeholder: string): void;

    add_search_entry_menu(search_menu: Gio.MenuModel, search_action: Gio.Action): void;

    clear_search_entry(): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace StaticPlaylistSource {
    export interface ConstructorProperties extends PlaylistSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class StaticPlaylistSource
    extends PlaylistSource
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<StaticPlaylistSource>;

    constructor(properties?: Partial<StaticPlaylistSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StaticPlaylistSource.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](
        shell: Shell,
        name: string,
        settings: Gio.Settings,
        local: boolean,
        entry_type: RhythmDBEntryType
    ): StaticPlaylistSource;

    static ['new'](...args: never[]): never;

    static new_from_xml(shell: Shell, name: string, node: libxml2.NodePtr): StaticPlaylistSource;
    static new_from_xml(...args: never[]): never;

    // Members

    add_entry(entry: RhythmDBEntry, index: number): void;

    add_location(location: string, index: number): void;

    add_locations(locations: string[]): void;

    load_from_xml(node: libxml2.NodePtr): void;

    move_entry(entry: RhythmDBEntry, index: number): void;

    remove_entry(entry: RhythmDBEntry): void;

    remove_location(location: string): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace StreamingSource {
    export interface ConstructorProperties extends Source.ConstructorProperties {
        [key: string]: any;
    }
}

export class StreamingSource extends Source implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<StreamingSource>;

    constructor(properties?: Partial<StreamingSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamingSource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StreamingSourcePrivate | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Members

    get_progress(): [string, number];

    set_streaming_album(album: string): void;

    set_streaming_artist(artist: string): void;

    set_streaming_title(title: string): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace StringValueMap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StringValueMap extends GObject.Object {
    static $gtype: GObject.GType<StringValueMap>;

    constructor(properties?: Partial<StringValueMap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StringValueMap.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StringValueMapPrivate;

    // Constructors

    static ['new'](): StringValueMap;

    // Members

    get(key: string, out: any): boolean;

    peek(key: string): unknown;

    remove(key: string): boolean;

    set(key: string, value: any): void;
    set(...args: never[]): never;

    size(): number;

    steal_hashtable(): GLib.HashTable<any, any>;
}

export namespace TaskList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        model: ListModel;
    }
}

export class TaskList extends GObject.Object {
    static $gtype: GObject.GType<TaskList>;

    constructor(properties?: Partial<TaskList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TaskList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: ListModel;

    // Constructors

    static ['new'](): TaskList;

    // Members

    add_task(task: TaskProgress): void;

    get_model(): ListModel;

    remove_task(task: TaskProgress): void;
}

export namespace TaskProgressSimple {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TaskProgressSimple extends GObject.Object implements TaskProgress {
    static $gtype: GObject.GType<TaskProgressSimple>;

    constructor(properties?: Partial<TaskProgressSimple.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TaskProgressSimple.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TaskProgressSimplePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'cancel-task', callback: (_source: this) => void): number;

    connect_after(signal: 'cancel-task', callback: (_source: this) => void): number;

    emit(signal: 'cancel-task'): void;

    // Implemented Properties

    task_cancellable: boolean;
    taskCancellable: boolean;
    task_detail: string;
    taskDetail: string;
    task_label: string;
    taskLabel: string;
    task_notify: boolean;
    taskNotify: boolean;
    task_outcome: TaskOutcome;
    taskOutcome: TaskOutcome;
    task_progress: number;
    taskProgress: number;

    // Members

    static new(): TaskProgress;

    // Implemented Members

    cancel(): void;

    vfunc_cancel(): void;
}

export namespace TrackTransferBatch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        destination: Source;
        done_entries: number;
        doneEntries: number;
        encoding_target: GstPbutils.EncodingTarget;
        encodingTarget: GstPbutils.EncodingTarget;
        entry_list: any;
        entryList: any;
        progress: number;
        queue: TrackTransferQueue;
        settings: Gio.Settings;
        source: Source;
        total_entries: number;
        totalEntries: number;
    }
}

export class TrackTransferBatch extends GObject.Object implements TaskProgress {
    static $gtype: GObject.GType<TrackTransferBatch>;

    constructor(properties?: Partial<TrackTransferBatch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TrackTransferBatch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    destination: Source;
    done_entries: number;
    doneEntries: number;
    encoding_target: GstPbutils.EncodingTarget;
    encodingTarget: GstPbutils.EncodingTarget;
    entry_list: any;
    entryList: any;
    progress: number;
    queue: TrackTransferQueue;
    settings: Gio.Settings;
    source: Source;
    total_entries: number;
    totalEntries: number;

    // Fields
    priv: TrackTransferBatchPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'cancelled', callback: (_source: this) => void): number;

    connect_after(signal: 'cancelled', callback: (_source: this) => void): number;

    emit(signal: 'cancelled'): void;

    connect(signal: 'complete', callback: (_source: this) => void): number;

    connect_after(signal: 'complete', callback: (_source: this) => void): number;

    emit(signal: 'complete'): void;

    connect(
        signal: 'get-dest-uri',
        callback: (_source: this, entry: RhythmDBEntry, mediatype: string, extension: string) => string
    ): number;

    connect_after(
        signal: 'get-dest-uri',
        callback: (_source: this, entry: RhythmDBEntry, mediatype: string, extension: string) => string
    ): number;

    emit(signal: 'get-dest-uri', entry: RhythmDBEntry, mediatype: string, extension: string): void;

    connect(signal: 'overwrite-prompt', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'overwrite-prompt', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'overwrite-prompt', uri: string): void;

    connect(signal: 'started', callback: (_source: this) => void): number;

    connect_after(signal: 'started', callback: (_source: this) => void): number;

    emit(signal: 'started'): void;

    connect(
        signal: 'track-done',
        callback: (
            _source: this,
            entry: RhythmDBEntry,
            dest: string,
            dest_size: number,
            dest_mediatype: string,
            error: any | null
        ) => void
    ): number;

    connect_after(
        signal: 'track-done',
        callback: (
            _source: this,
            entry: RhythmDBEntry,
            dest: string,
            dest_size: number,
            dest_mediatype: string,
            error: any | null
        ) => void
    ): number;

    emit(
        signal: 'track-done',
        entry: RhythmDBEntry,
        dest: string,
        dest_size: number,
        dest_mediatype: string,
        error: any | null
    ): void;

    connect(
        signal: 'track-progress',
        callback: (
            _source: this,
            entry: RhythmDBEntry,
            dest: string,
            done: number,
            total: number,
            fraction: number
        ) => void
    ): number;

    connect_after(
        signal: 'track-progress',
        callback: (
            _source: this,
            entry: RhythmDBEntry,
            dest: string,
            done: number,
            total: number,
            fraction: number
        ) => void
    ): number;

    emit(
        signal: 'track-progress',
        entry: RhythmDBEntry,
        dest: string,
        done: number,
        total: number,
        fraction: number
    ): void;

    connect(signal: 'track-started', callback: (_source: this, entry: RhythmDBEntry, dest: string) => void): number;

    connect_after(
        signal: 'track-started',
        callback: (_source: this, entry: RhythmDBEntry, dest: string) => void
    ): number;

    emit(signal: 'track-started', entry: RhythmDBEntry, dest: string): void;

    // Implemented Properties

    task_cancellable: boolean;
    taskCancellable: boolean;
    task_detail: string;
    taskDetail: string;
    task_label: string;
    taskLabel: string;
    task_notify: boolean;
    taskNotify: boolean;
    task_outcome: TaskOutcome;
    taskOutcome: TaskOutcome;
    task_progress: number;
    taskProgress: number;

    // Constructors

    static ['new'](
        target: GstPbutils.EncodingTarget,
        settings: Gio.Settings,
        source: GObject.Object,
        destination: GObject.Object,
        queue: GObject.Object
    ): TrackTransferBatch;

    // Members

    add(entry: RhythmDBEntry): void;

    cancel(): void;

    check_profiles(error_count: number): [boolean, GstPbutils.EncodingProfile[]];

    vfunc_cancelled(): void;

    vfunc_complete(): void;

    vfunc_get_dest_uri(entry: RhythmDBEntry, mediatype: string, extension: string): string;

    vfunc_overwrite_prompt(dest_file: Gio.File): boolean;

    vfunc_started(): void;

    vfunc_track_done(entry: RhythmDBEntry, dest: string, dest_size: number, mediatype: string, error: GLib.Error): void;

    vfunc_track_progress(entry: RhythmDBEntry, dest: string, done: number, total: number, fraction: number): void;

    vfunc_track_started(entry: RhythmDBEntry, dest: string): void;

    // Implemented Members

    vfunc_cancel(): void;
}

export namespace TrackTransferQueue {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        batch: TrackTransferBatch;
        shell: Shell;
    }
}

export class TrackTransferQueue extends GObject.Object {
    static $gtype: GObject.GType<TrackTransferQueue>;

    constructor(properties?: Partial<TrackTransferQueue.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TrackTransferQueue.ConstructorProperties>, ...args: any[]): void;

    // Properties
    batch: TrackTransferBatch;
    shell: Shell;

    // Fields
    priv: TrackTransferQueuePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'missing-plugins',
        callback: (_source: this, details: string[], descriptions: string[], closure: GObject.Closure) => boolean
    ): number;

    connect_after(
        signal: 'missing-plugins',
        callback: (_source: this, details: string[], descriptions: string[], closure: GObject.Closure) => boolean
    ): number;

    emit(signal: 'missing-plugins', details: string[], descriptions: string[], closure: GObject.Closure): void;

    connect(
        signal: 'transfer-progress',
        callback: (_source: this, done: number, total: number, fraction: number, time_left: number) => void
    ): number;

    connect_after(
        signal: 'transfer-progress',
        callback: (_source: this, done: number, total: number, fraction: number, time_left: number) => void
    ): number;

    emit(signal: 'transfer-progress', done: number, total: number, fraction: number, time_left: number): void;

    // Constructors

    static ['new'](shell: Shell): TrackTransferQueue;

    // Members

    cancel_batch(batch: TrackTransferBatch): void;

    cancel_for_source(source: Source): void;

    find_batch_by_source(source: Source): TrackTransferBatch[];

    start_batch(batch: TrackTransferBatch): void;

    vfunc_transfer_progress(done: number, total: number, fraction: number, time_left: number): void;
}

export namespace URIDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        label: string;
    }
}

export class URIDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<URIDialog>;

    constructor(properties?: Partial<URIDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URIDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;

    // Fields
    priv: URIDialogPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'location-added', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'location-added', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'location-added', uri: string): void;

    // Constructors

    static ['new'](title: string, label: string): URIDialog;
    static ['new'](...args: never[]): never;

    // Members

    vfunc_location_added(uri: string): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export class ApplicationPrivate {
    static $gtype: GObject.GType<ApplicationPrivate>;

    constructor(copy: ApplicationPrivate);
}

export class AsyncCopyPrivate {
    static $gtype: GObject.GType<AsyncCopyPrivate>;

    constructor(copy: AsyncCopyPrivate);
}

export class BrowserSourcePrivate {
    static $gtype: GObject.GType<BrowserSourcePrivate>;

    constructor(copy: BrowserSourcePrivate);
}

export class ButtonBarPrivate {
    static $gtype: GObject.GType<ButtonBarPrivate>;

    constructor(copy: ButtonBarPrivate);
}

export class CellRendererRatingClassPrivate {
    static $gtype: GObject.GType<CellRendererRatingClassPrivate>;

    constructor(copy: CellRendererRatingClassPrivate);
}

export class CellRendererRatingPrivate {
    static $gtype: GObject.GType<CellRendererRatingPrivate>;

    constructor(copy: CellRendererRatingPrivate);
}

export class ChunkLoaderPrivate {
    static $gtype: GObject.GType<ChunkLoaderPrivate>;

    constructor(copy: ChunkLoaderPrivate);
}

export class DisplayPageGroupPrivate {
    static $gtype: GObject.GType<DisplayPageGroupPrivate>;

    constructor(copy: DisplayPageGroupPrivate);
}

export class DisplayPagePrivate {
    static $gtype: GObject.GType<DisplayPagePrivate>;

    constructor(copy: DisplayPagePrivate);
}

export class DisplayPageTreePrivate {
    static $gtype: GObject.GType<DisplayPageTreePrivate>;

    constructor(copy: DisplayPageTreePrivate);
}

export class EntryViewPrivate {
    static $gtype: GObject.GType<EntryViewPrivate>;

    constructor(copy: EntryViewPrivate);
}

export class ExtDBKey {
    static $gtype: GObject.GType<ExtDBKey>;

    constructor(copy: ExtDBKey);

    // Members
    add_field(field: string, value: string): void;

    add_info(name: string, value: string): void;

    copy(): ExtDBKey;

    field_matches(field: string, value: string): boolean;

    free(): void;

    get_field(field: string): string;

    get_field_names(): string[];

    get_field_values(field: string): string[];

    get_info(name: string): string;

    get_info_names(): string[];

    is_lookup(): boolean;

    matches(b: ExtDBKey): boolean;

    to_string(): string;

    static create_lookup(field: string, value: string): ExtDBKey;

    static create_storage(field: string, value: string): ExtDBKey;
}

export class ExtDBPrivate {
    static $gtype: GObject.GType<ExtDBPrivate>;

    constructor(copy: ExtDBPrivate);
}

export class FadingImagePrivate {
    static $gtype: GObject.GType<FadingImagePrivate>;

    constructor(copy: FadingImagePrivate);
}

export class HistoryPrivate {
    static $gtype: GObject.GType<HistoryPrivate>;

    constructor(copy: HistoryPrivate);
}

export class ListModelPrivate {
    static $gtype: GObject.GType<ListModelPrivate>;

    constructor(copy: ListModelPrivate);
}

export class MetaDataPrivate {
    static $gtype: GObject.GType<MetaDataPrivate>;

    constructor(copy: MetaDataPrivate);
}

export class PlayOrderPrivate {
    static $gtype: GObject.GType<PlayOrderPrivate>;

    constructor(copy: PlayOrderPrivate);
}

export class PlaylistManagerPrivate {
    static $gtype: GObject.GType<PlaylistManagerPrivate>;

    constructor(copy: PlaylistManagerPrivate);
}

export class PlaylistSourcePrivate {
    static $gtype: GObject.GType<PlaylistSourcePrivate>;

    constructor(copy: PlaylistSourcePrivate);
}

export class PodcastChannel {
    static $gtype: GObject.GType<PodcastChannel>;

    constructor(copy: PodcastChannel);

    // Fields
    url: string;
    title: string;
    lang: string;
    description: string;
    author: string;
    contact: string;
    img: string;
    pub_date: number;
    copyright: string;
    is_opml: boolean;
    posts: any[];
    num_posts: number;
}

export class PodcastItem {
    static $gtype: GObject.GType<PodcastItem>;

    constructor(
        properties?: Partial<{
            title?: string;
            url?: string;
            description?: string;
            author?: string;
            pub_date?: number;
            duration?: number;
            filesize?: number;
        }>
    );

    constructor(copy: PodcastItem);

    // Fields
    title: string;
    url: string;
    description: string;
    author: string;
    pub_date: number;
    duration: number;
    filesize: number;
}

export class PodcastManagerPrivate {
    static $gtype: GObject.GType<PodcastManagerPrivate>;

    constructor(copy: PodcastManagerPrivate);
}

export class Profiler {
    static $gtype: GObject.GType<Profiler>;

    constructor(copy: Profiler);
}

export class PropertyViewPrivate {
    static $gtype: GObject.GType<PropertyViewPrivate>;

    constructor(copy: PropertyViewPrivate);
}

export class RatingPrivate {
    static $gtype: GObject.GType<RatingPrivate>;

    constructor(copy: RatingPrivate);
}

export class RefString {
    static $gtype: GObject.GType<RefString>;

    constructor(init: string);
    constructor(copy: RefString);

    // Constructors
    static ['new'](init: string): RefString;

    // Members
    get(): string;

    get_folded(): string;

    get_sort_key(): string;

    ref(): RefString;

    unref(): void;

    static equal(ap?: any | null, bp?: any | null): boolean;

    static find(init: string): RefString;

    static hash(p?: any | null): number;

    static system_init(): void;

    static system_shutdown(): void;
}

export class RhythmDBEntry {
    static $gtype: GObject.GType<RhythmDBEntry>;

    constructor(db: RhythmDB, type: RhythmDBEntryType, uri: string);
    constructor(copy: RhythmDBEntry);

    // Constructors
    static example_new(db: RhythmDB, type: RhythmDBEntryType, uri: string): RhythmDBEntry;

    static ['new'](db: RhythmDB, type: RhythmDBEntryType, uri: string): RhythmDBEntry;

    // Members
    apply_cached_metadata(metadata: RhythmDBEntryChange[]): void;

    cache_metadata(): void;

    can_sync_metadata(): boolean;

    create_ext_db_key(prop: RhythmDBPropType): ExtDBKey;

    created(): void;

    dup_string(propid: RhythmDBPropType): string;

    get_boolean(propid: RhythmDBPropType): boolean;

    get_double(propid: RhythmDBPropType): number;

    get_entry_type(): RhythmDBEntryType;

    get_object<T = GObject.Object>(propid: RhythmDBPropType): T;

    get_playback_uri(): string;

    get_refstring(propid: RhythmDBPropType): RefString;

    get_string(propid: RhythmDBPropType): string;

    get_type_data(expected_size: number): any | null;

    get_uint64(propid: RhythmDBPropType): number;

    get_ulong(propid: RhythmDBPropType): number;

    is_lossless(): boolean;

    pre_destroy(): void;

    ref(): RhythmDBEntry;

    sync_metadata(changes: RhythmDBEntryChange[]): void;

    unref(): void;

    update_availability(avail: RhythmDBEntryAvailability): void;
}

export class RhythmDBEntryChange {
    static $gtype: GObject.GType<RhythmDBEntryChange>;

    constructor(copy: RhythmDBEntryChange);

    // Fields
    prop: RhythmDBPropType;
    old: GObject.Value;
    'new': GObject.Value;
}

export class RhythmDBEntryTypePrivate {
    static $gtype: GObject.GType<RhythmDBEntryTypePrivate>;

    constructor(copy: RhythmDBEntryTypePrivate);
}

export class RhythmDBImportJobPrivate {
    static $gtype: GObject.GType<RhythmDBImportJobPrivate>;

    constructor(copy: RhythmDBImportJobPrivate);
}

export class RhythmDBPrivate {
    static $gtype: GObject.GType<RhythmDBPrivate>;

    constructor(copy: RhythmDBPrivate);
}

export class RhythmDBPropertyModelPrivate {
    static $gtype: GObject.GType<RhythmDBPropertyModelPrivate>;

    constructor(copy: RhythmDBPropertyModelPrivate);
}

export class RhythmDBQueryData {
    static $gtype: GObject.GType<RhythmDBQueryData>;

    constructor(copy: RhythmDBQueryData);

    // Fields
    type: number;
    propid: number;
    val: GObject.Value;
    subquery: RhythmDBQuery;
}

export class RhythmDBQueryModelPrivate {
    static $gtype: GObject.GType<RhythmDBQueryModelPrivate>;

    constructor(copy: RhythmDBQueryModelPrivate);
}

export class RhythmDBQueryResultListPrivate {
    static $gtype: GObject.GType<RhythmDBQueryResultListPrivate>;

    constructor(copy: RhythmDBQueryResultListPrivate);
}

export class SearchEntryPrivate {
    static $gtype: GObject.GType<SearchEntryPrivate>;

    constructor(copy: SearchEntryPrivate);
}

export class SegmentedBarPrivate {
    static $gtype: GObject.GType<SegmentedBarPrivate>;

    constructor(copy: SegmentedBarPrivate);
}

export class ShellPlayerPrivate {
    static $gtype: GObject.GType<ShellPlayerPrivate>;

    constructor(copy: ShellPlayerPrivate);
}

export class ShellPreferencesPrivate {
    static $gtype: GObject.GType<ShellPreferencesPrivate>;

    constructor(copy: ShellPreferencesPrivate);
}

export class ShellPrivate {
    static $gtype: GObject.GType<ShellPrivate>;

    constructor(copy: ShellPrivate);
}

export class SongInfoPrivate {
    static $gtype: GObject.GType<SongInfoPrivate>;

    constructor(copy: SongInfoPrivate);
}

export class SourcePrivate {
    static $gtype: GObject.GType<SourcePrivate>;

    constructor(copy: SourcePrivate);
}

export class SourceToolbarPrivate {
    static $gtype: GObject.GType<SourceToolbarPrivate>;

    constructor(copy: SourceToolbarPrivate);
}

export class StreamingSourcePrivate {
    static $gtype: GObject.GType<StreamingSourcePrivate>;

    constructor(copy: StreamingSourcePrivate);
}

export class StringValueMapPrivate {
    static $gtype: GObject.GType<StringValueMapPrivate>;

    constructor(copy: StringValueMapPrivate);
}

export class TaskListPrivate {
    static $gtype: GObject.GType<TaskListPrivate>;

    constructor(copy: TaskListPrivate);
}

export class TaskProgressSimplePrivate {
    static $gtype: GObject.GType<TaskProgressSimplePrivate>;

    constructor(copy: TaskProgressSimplePrivate);
}

export class TrackTransferBatchPrivate {
    static $gtype: GObject.GType<TrackTransferBatchPrivate>;

    constructor(copy: TrackTransferBatchPrivate);
}

export class TrackTransferQueuePrivate {
    static $gtype: GObject.GType<TrackTransferQueuePrivate>;

    constructor(copy: TrackTransferQueuePrivate);
}

export class URIDialogPrivate {
    static $gtype: GObject.GType<URIDialogPrivate>;

    constructor(copy: URIDialogPrivate);
}

export interface DeviceSourceNamespace {
    $gtype: GObject.GType<DeviceSource>;
    prototype: DeviceSourcePrototype;

    uri_is_source(source: Source, uri: string): boolean;

    want_uri(source: Source, uri: string): number;
}

export type DeviceSource = DeviceSourcePrototype;

export interface DeviceSourcePrototype extends GObject.Object {
    // Members

    can_eject(): boolean;

    default_eject(): void;

    eject(): void;

    set_display_details(): void;

    vfunc_can_eject(): boolean;

    vfunc_eject(): void;
}

export const DeviceSource: DeviceSourceNamespace;

export interface EncoderNamespace {
    $gtype: GObject.GType<Encoder>;
    prototype: EncoderPrototype;

    ['new'](): Encoder;
}

export type Encoder = EncoderPrototype;

export interface EncoderPrototype extends GObject.Object {
    // Members

    cancel(): void;

    encode(entry: RhythmDBEntry, dest: string, overwrite: boolean, profile: GstPbutils.EncodingProfile): void;

    get_missing_plugins(profile: GstPbutils.EncodingProfile): [boolean, string, string];

    vfunc_cancel(): void;

    vfunc_completed(dest_size: number, mediatype: string, error: GLib.Error): void;

    vfunc_encode(entry: RhythmDBEntry, dest: string, overwrite: boolean, profile: GstPbutils.EncodingProfile): void;

    vfunc_get_missing_plugins(profile: GstPbutils.EncodingProfile): [boolean, string, string];

    vfunc_progress(fraction: number): void;
}

export const Encoder: EncoderNamespace;

export interface PlayerNamespace {
    $gtype: GObject.GType<Player>;
    prototype: PlayerPrototype;

    gst_find_element_with_property(element: Gst.Element, property: string): Gst.Element;

    gst_try_audio_sink(plugin_name: string, name: string): Gst.Element;

    ['new'](want_crossfade: boolean): Player;
}

export type Player = PlayerPrototype;

export interface PlayerPrototype extends GObject.Object {
    // Members

    close(uri: string): boolean;

    get_time(): number;

    get_volume(): number;

    multiple_open(): boolean;

    open(uri: string, stream_data?: any | null): boolean;

    opened(): boolean;

    pause(): void;

    play(play_type: PlayerPlayType, crossfade: number): boolean;

    playing(): boolean;

    seekable(): boolean;

    set_time(newtime: number): void;

    set_volume(volume: number): void;

    vfunc_buffering(stream_data: any | null, progress: number): void;

    vfunc_close(uri: string): boolean;

    vfunc_eos(stream_data: any | null, early: boolean): void;

    vfunc_error(stream_data: any | null, error: GLib.Error): void;

    vfunc_event(stream_data?: any | null, data?: any | null): void;

    vfunc_get_time(): number;

    vfunc_get_volume(): number;

    vfunc_image(stream_data: any | null, image: GdkPixbuf.Pixbuf): void;

    vfunc_info(stream_data: any | null, field: MetaDataField, value: any): void;

    vfunc_multiple_open(): boolean;

    vfunc_open(uri: string, stream_data?: any | null): boolean;

    vfunc_opened(): boolean;

    vfunc_pause(): void;

    vfunc_play(play_type: PlayerPlayType, crossfade: number): boolean;

    vfunc_playing(): boolean;

    vfunc_playing_stream(stream_data?: any | null): void;

    vfunc_redirect(stream_data: any | null, uri: string): void;

    vfunc_seekable(): boolean;

    vfunc_set_time(newtime: number): void;

    vfunc_set_volume(volume: number): void;

    vfunc_tick(stream_data: any | null, elapsed: number, duration: number): void;

    vfunc_volume_changed(volume: number): void;
}

export const Player: PlayerNamespace;

export interface PlayerGstFilterNamespace {
    $gtype: GObject.GType<PlayerGstFilter>;
    prototype: PlayerGstFilterPrototype;
}

export type PlayerGstFilter = PlayerGstFilterPrototype;

export interface PlayerGstFilterPrototype extends GObject.Object {
    // Members

    add_filter(element: Gst.Element): boolean;

    remove_filter(element: Gst.Element): boolean;

    vfunc_add_filter(element: Gst.Element): boolean;

    vfunc_filter_inserted(filter: Gst.Element): void;

    vfunc_filter_pre_remove(filter: Gst.Element): void;

    vfunc_remove_filter(element: Gst.Element): boolean;
}

export const PlayerGstFilter: PlayerGstFilterNamespace;

export interface PlayerGstTeeNamespace {
    $gtype: GObject.GType<PlayerGstTee>;
    prototype: PlayerGstTeePrototype;
}

export type PlayerGstTee = PlayerGstTeePrototype;

export interface PlayerGstTeePrototype extends GObject.Object {
    // Members

    add_tee(element: Gst.Element): boolean;

    remove_tee(element: Gst.Element): boolean;

    vfunc_add_tee(element: Gst.Element): boolean;

    vfunc_remove_tee(element: Gst.Element): boolean;

    vfunc_tee_inserted(tee: Gst.Element): void;

    vfunc_tee_pre_remove(tee: Gst.Element): void;
}

export const PlayerGstTee: PlayerGstTeeNamespace;

export interface RhythmDBQueryResultsNamespace {
    $gtype: GObject.GType<RhythmDBQueryResults>;
    prototype: RhythmDBQueryResultsPrototype;
}

export type RhythmDBQueryResults = RhythmDBQueryResultsPrototype;

export interface RhythmDBQueryResultsPrototype extends GObject.Object {
    // Members

    add_results(entries: RhythmDBEntry[]): void;

    query_complete(): void;

    vfunc_add_results(entries: RhythmDBEntry[]): void;

    vfunc_query_complete(): void;
}

export const RhythmDBQueryResults: RhythmDBQueryResultsNamespace;

export interface TaskProgressNamespace {
    $gtype: GObject.GType<TaskProgress>;
    prototype: TaskProgressPrototype;
}

export type TaskProgress = TaskProgressPrototype;

export interface TaskProgressPrototype extends GObject.Object {
    // Properties
    task_cancellable: boolean;
    taskCancellable: boolean;
    task_detail: string;
    taskDetail: string;
    task_label: string;
    taskLabel: string;
    task_notify: boolean;
    taskNotify: boolean;
    task_outcome: TaskOutcome;
    taskOutcome: TaskOutcome;
    task_progress: number;
    taskProgress: number;

    // Members

    cancel(): void;

    vfunc_cancel(): void;
}

export const TaskProgress: TaskProgressNamespace;

export interface TransferTargetNamespace {
    $gtype: GObject.GType<TransferTarget>;
    prototype: TransferTargetPrototype;
}

export type TransferTarget = TransferTargetPrototype;

export interface TransferTargetPrototype extends GObject.Object {
    // Properties
    encoding_target: GstPbutils.EncodingTarget;
    encodingTarget: GstPbutils.EncodingTarget;

    // Members

    build_dest_uri(entry: RhythmDBEntry, media_type: string, extension: string): string;

    check_category(entry: RhythmDBEntry): boolean;

    check_duplicate(entry: RhythmDBEntry): boolean;

    get_format_descriptions(): string[];

    should_transfer(entry: RhythmDBEntry): boolean;

    track_add_error(entry: RhythmDBEntry, uri: string, error: GLib.Error): void;

    track_added(entry: RhythmDBEntry, uri: string, filesize: number, media_type: string): void;

    transfer(settings: Gio.Settings, entries: RhythmDBEntry[], defer: boolean): TrackTransferBatch;

    vfunc_build_dest_uri(entry: RhythmDBEntry, media_type: string, extension: string): string;

    vfunc_should_transfer(entry: RhythmDBEntry): boolean;

    vfunc_track_add_error(entry: RhythmDBEntry, uri: string, error: GLib.Error): boolean;

    vfunc_track_added(entry: RhythmDBEntry, uri: string, dest_size: number, media_type: string): boolean;
}

export const TransferTarget: TransferTargetNamespace;

export type RhythmDBQuery = GLib.PtrArray;
