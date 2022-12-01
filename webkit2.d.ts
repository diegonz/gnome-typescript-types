/**
 * WebKit2 4.0
 *
 * Generated from 2.30.4
 */

import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as JavaScriptCore from './javascriptcore';
import * as Soup from './soup';
import * as Atk from './atk';
import * as GLib from './glib';
import * as Gdk from './gdk';
import * as Gio from './gio';
import * as cairo from './cairo';

export const EDITING_COMMAND_COPY: string;
export const EDITING_COMMAND_CREATE_LINK: string;
export const EDITING_COMMAND_CUT: string;
export const EDITING_COMMAND_INSERT_IMAGE: string;
export const EDITING_COMMAND_PASTE: string;
export const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string;
export const EDITING_COMMAND_REDO: string;
export const EDITING_COMMAND_SELECT_ALL: string;
export const EDITING_COMMAND_UNDO: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function download_error_quark(): GLib.Quark;

export function favicon_database_error_quark(): GLib.Quark;

export function get_major_version(): number;

export function get_micro_version(): number;

export function get_minor_version(): number;

export function javascript_error_quark(): GLib.Quark;

export function network_error_quark(): GLib.Quark;

export function plugin_error_quark(): GLib.Quark;

export function policy_error_quark(): GLib.Quark;

export function print_error_quark(): GLib.Quark;

export function snapshot_error_quark(): GLib.Quark;

export function uri_for_display(uri: string): string | null;

export function user_content_filter_error_quark(): GLib.Quark;

export function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean;

export function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean;

export function user_message_error_quark(): GLib.Quark;

export type URISchemeRequestCallback = (request: URISchemeRequest) => void;

export namespace AuthenticationScheme {
    export const $gtype: GObject.GType<AuthenticationScheme>;
}

export enum AuthenticationScheme {
    DEFAULT = 1,
    HTTP_BASIC = 2,
    HTTP_DIGEST = 3,
    HTML_FORM = 4,
    NTLM = 5,
    NEGOTIATE = 6,
    CLIENT_CERTIFICATE_REQUESTED = 7,
    SERVER_TRUST_EVALUATION_REQUESTED = 8,
    UNKNOWN = 100,
}

export namespace AutomationBrowsingContextPresentation {
    export const $gtype: GObject.GType<AutomationBrowsingContextPresentation>;
}

export enum AutomationBrowsingContextPresentation {
    WINDOW = 0,
    TAB = 1,
}

export namespace AutoplayPolicy {
    export const $gtype: GObject.GType<AutoplayPolicy>;
}

export enum AutoplayPolicy {
    ALLOW = 0,
    ALLOW_WITHOUT_SOUND = 1,
    DENY = 2,
}

export namespace CacheModel {
    export const $gtype: GObject.GType<CacheModel>;
}

export enum CacheModel {
    DOCUMENT_VIEWER = 0,
    WEB_BROWSER = 1,
    DOCUMENT_BROWSER = 2,
}

export namespace ContextMenuAction {
    export const $gtype: GObject.GType<ContextMenuAction>;
}

export enum ContextMenuAction {
    NO_ACTION = 0,
    OPEN_LINK = 1,
    OPEN_LINK_IN_NEW_WINDOW = 2,
    DOWNLOAD_LINK_TO_DISK = 3,
    COPY_LINK_TO_CLIPBOARD = 4,
    OPEN_IMAGE_IN_NEW_WINDOW = 5,
    DOWNLOAD_IMAGE_TO_DISK = 6,
    COPY_IMAGE_TO_CLIPBOARD = 7,
    COPY_IMAGE_URL_TO_CLIPBOARD = 8,
    OPEN_FRAME_IN_NEW_WINDOW = 9,
    GO_BACK = 10,
    GO_FORWARD = 11,
    STOP = 12,
    RELOAD = 13,
    COPY = 14,
    CUT = 15,
    PASTE = 16,
    DELETE = 17,
    SELECT_ALL = 18,
    INPUT_METHODS = 19,
    UNICODE = 20,
    SPELLING_GUESS = 21,
    NO_GUESSES_FOUND = 22,
    IGNORE_SPELLING = 23,
    LEARN_SPELLING = 24,
    IGNORE_GRAMMAR = 25,
    FONT_MENU = 26,
    BOLD = 27,
    ITALIC = 28,
    UNDERLINE = 29,
    OUTLINE = 30,
    INSPECT_ELEMENT = 31,
    OPEN_VIDEO_IN_NEW_WINDOW = 32,
    OPEN_AUDIO_IN_NEW_WINDOW = 33,
    COPY_VIDEO_LINK_TO_CLIPBOARD = 34,
    COPY_AUDIO_LINK_TO_CLIPBOARD = 35,
    TOGGLE_MEDIA_CONTROLS = 36,
    TOGGLE_MEDIA_LOOP = 37,
    ENTER_VIDEO_FULLSCREEN = 38,
    MEDIA_PLAY = 39,
    MEDIA_PAUSE = 40,
    MEDIA_MUTE = 41,
    DOWNLOAD_VIDEO_TO_DISK = 42,
    DOWNLOAD_AUDIO_TO_DISK = 43,
    INSERT_EMOJI = 44,
    PASTE_AS_PLAIN_TEXT = 45,
    CUSTOM = 10000,
}

export namespace CookieAcceptPolicy {
    export const $gtype: GObject.GType<CookieAcceptPolicy>;
}

export enum CookieAcceptPolicy {
    ALWAYS = 0,
    NEVER = 1,
    NO_THIRD_PARTY = 2,
}

export namespace CookiePersistentStorage {
    export const $gtype: GObject.GType<CookiePersistentStorage>;
}

export enum CookiePersistentStorage {
    TEXT = 0,
    SQLITE = 1,
}

export namespace CredentialPersistence {
    export const $gtype: GObject.GType<CredentialPersistence>;
}

export enum CredentialPersistence {
    NONE = 0,
    FOR_SESSION = 1,
    PERMANENT = 2,
}

export class DownloadError extends GLib.Error {
    static $gtype: GObject.GType<DownloadError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DownloadError);

    // Properties
    static NETWORK: number;
    static CANCELLED_BY_USER: number;
    static DESTINATION: number;

    // Members
    static quark(): GLib.Quark;
}

export class FaviconDatabaseError extends GLib.Error {
    static $gtype: GObject.GType<FaviconDatabaseError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FaviconDatabaseError);

    // Properties
    static NOT_INITIALIZED: number;
    static FAVICON_NOT_FOUND: number;
    static FAVICON_UNKNOWN: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace HardwareAccelerationPolicy {
    export const $gtype: GObject.GType<HardwareAccelerationPolicy>;
}

export enum HardwareAccelerationPolicy {
    ON_DEMAND = 0,
    ALWAYS = 1,
    NEVER = 2,
}

export namespace InputPurpose {
    export const $gtype: GObject.GType<InputPurpose>;
}

export enum InputPurpose {
    FREE_FORM = 0,
    DIGITS = 1,
    NUMBER = 2,
    PHONE = 3,
    URL = 4,
    EMAIL = 5,
    PASSWORD = 6,
}

export namespace InsecureContentEvent {
    export const $gtype: GObject.GType<InsecureContentEvent>;
}

export enum InsecureContentEvent {
    RUN = 0,
    DISPLAYED = 1,
}

export class JavascriptError extends GLib.Error {
    static $gtype: GObject.GType<JavascriptError>;

    constructor(options: { message: string; code: number });
    constructor(copy: JavascriptError);

    // Properties
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace LoadEvent {
    export const $gtype: GObject.GType<LoadEvent>;
}

export enum LoadEvent {
    STARTED = 0,
    REDIRECTED = 1,
    COMMITTED = 2,
    FINISHED = 3,
}

export namespace NavigationType {
    export const $gtype: GObject.GType<NavigationType>;
}

export enum NavigationType {
    LINK_CLICKED = 0,
    FORM_SUBMITTED = 1,
    BACK_FORWARD = 2,
    RELOAD = 3,
    FORM_RESUBMITTED = 4,
    OTHER = 5,
}

export class NetworkError extends GLib.Error {
    static $gtype: GObject.GType<NetworkError>;

    constructor(options: { message: string; code: number });
    constructor(copy: NetworkError);

    // Properties
    static FAILED: number;
    static TRANSPORT: number;
    static UNKNOWN_PROTOCOL: number;
    static CANCELLED: number;
    static FILE_DOES_NOT_EXIST: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace NetworkProxyMode {
    export const $gtype: GObject.GType<NetworkProxyMode>;
}

export enum NetworkProxyMode {
    DEFAULT = 0,
    NO_PROXY = 1,
    CUSTOM = 2,
}

export class PluginError extends GLib.Error {
    static $gtype: GObject.GType<PluginError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PluginError);

    // Properties
    static FAILED: number;
    static CANNOT_FIND_PLUGIN: number;
    static CANNOT_LOAD_PLUGIN: number;
    static JAVA_UNAVAILABLE: number;
    static CONNECTION_CANCELLED: number;
    static WILL_HANDLE_LOAD: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PolicyDecisionType {
    export const $gtype: GObject.GType<PolicyDecisionType>;
}

export enum PolicyDecisionType {
    NAVIGATION_ACTION = 0,
    NEW_WINDOW_ACTION = 1,
    RESPONSE = 2,
}

export class PolicyError extends GLib.Error {
    static $gtype: GObject.GType<PolicyError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PolicyError);

    // Properties
    static FAILED: number;
    static CANNOT_SHOW_MIME_TYPE: number;
    static CANNOT_SHOW_URI: number;
    static FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE: number;
    static CANNOT_USE_RESTRICTED_PORT: number;

    // Members
    static quark(): GLib.Quark;
}

export class PrintError extends GLib.Error {
    static $gtype: GObject.GType<PrintError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PrintError);

    // Properties
    static GENERAL: number;
    static PRINTER_NOT_FOUND: number;
    static INVALID_PAGE_RANGE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PrintOperationResponse {
    export const $gtype: GObject.GType<PrintOperationResponse>;
}

export enum PrintOperationResponse {
    PRINT = 0,
    CANCEL = 1,
}

export namespace ProcessModel {
    export const $gtype: GObject.GType<ProcessModel>;
}

export enum ProcessModel {
    SHARED_SECONDARY_PROCESS = 0,
    MULTIPLE_SECONDARY_PROCESSES = 1,
}

export namespace SaveMode {
    export const $gtype: GObject.GType<SaveMode>;
}

export enum SaveMode {
    MHTML = 0,
}

export namespace ScriptDialogType {
    export const $gtype: GObject.GType<ScriptDialogType>;
}

export enum ScriptDialogType {
    ALERT = 0,
    CONFIRM = 1,
    PROMPT = 2,
    BEFORE_UNLOAD_CONFIRM = 3,
}

export class SnapshotError extends GLib.Error {
    static $gtype: GObject.GType<SnapshotError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SnapshotError);

    // Properties
    static CREATE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SnapshotRegion {
    export const $gtype: GObject.GType<SnapshotRegion>;
}

export enum SnapshotRegion {
    VISIBLE = 0,
    FULL_DOCUMENT = 1,
}

export namespace TLSErrorsPolicy {
    export const $gtype: GObject.GType<TLSErrorsPolicy>;
}

export enum TLSErrorsPolicy {
    IGNORE = 0,
    FAIL = 1,
}

export class UserContentFilterError extends GLib.Error {
    static $gtype: GObject.GType<UserContentFilterError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UserContentFilterError);

    // Properties
    static INVALID_SOURCE: number;
    static NOT_FOUND: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace UserContentInjectedFrames {
    export const $gtype: GObject.GType<UserContentInjectedFrames>;
}

export enum UserContentInjectedFrames {
    ALL_FRAMES = 0,
    TOP_FRAME = 1,
}

export class UserMessageError extends GLib.Error {
    static $gtype: GObject.GType<UserMessageError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UserMessageError);

    // Properties
    static MESSAGE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace UserScriptInjectionTime {
    export const $gtype: GObject.GType<UserScriptInjectionTime>;
}

export enum UserScriptInjectionTime {
    START = 0,
    END = 1,
}

export namespace UserStyleLevel {
    export const $gtype: GObject.GType<UserStyleLevel>;
}

export enum UserStyleLevel {
    USER = 0,
    AUTHOR = 1,
}

export namespace WebProcessTerminationReason {
    export const $gtype: GObject.GType<WebProcessTerminationReason>;
}

export enum WebProcessTerminationReason {
    CRASHED = 0,
    EXCEEDED_MEMORY_LIMIT = 1,
}

export namespace EditorTypingAttributes {
    export const $gtype: GObject.GType<EditorTypingAttributes>;
}

export enum EditorTypingAttributes {
    NONE = 2,
    BOLD = 4,
    ITALIC = 8,
    UNDERLINE = 16,
    STRIKETHROUGH = 32,
}

export namespace FindOptions {
    export const $gtype: GObject.GType<FindOptions>;
}

export enum FindOptions {
    NONE = 0,
    CASE_INSENSITIVE = 1,
    AT_WORD_STARTS = 2,
    TREAT_MEDIAL_CAPITAL_AS_WORD_START = 4,
    BACKWARDS = 8,
    WRAP_AROUND = 16,
}

export namespace HitTestResultContext {
    export const $gtype: GObject.GType<HitTestResultContext>;
}

export enum HitTestResultContext {
    DOCUMENT = 2,
    LINK = 4,
    IMAGE = 8,
    MEDIA = 16,
    EDITABLE = 32,
    SCROLLBAR = 64,
    SELECTION = 128,
}

export namespace InputHints {
    export const $gtype: GObject.GType<InputHints>;
}

export enum InputHints {
    NONE = 0,
    SPELLCHECK = 1,
    LOWERCASE = 2,
    UPPERCASE_CHARS = 4,
    UPPERCASE_WORDS = 8,
    UPPERCASE_SENTENCES = 16,
    INHIBIT_OSK = 32,
}

export namespace SnapshotOptions {
    export const $gtype: GObject.GType<SnapshotOptions>;
}

export enum SnapshotOptions {
    NONE = 0,
    INCLUDE_SELECTION_HIGHLIGHTING = 1,
    TRANSPARENT_BACKGROUND = 2,
}

export namespace WebsiteDataTypes {
    export const $gtype: GObject.GType<WebsiteDataTypes>;
}

export enum WebsiteDataTypes {
    MEMORY_CACHE = 1,
    DISK_CACHE = 2,
    OFFLINE_APPLICATION_CACHE = 4,
    SESSION_STORAGE = 8,
    LOCAL_STORAGE = 16,
    WEBSQL_DATABASES = 32,
    INDEXEDDB_DATABASES = 64,
    PLUGIN_DATA = 128,
    COOKIES = 256,
    DEVICE_ID_HASH_SALT = 512,
    HSTS_CACHE = 1024,
    ITP = 2048,
    SERVICE_WORKER_REGISTRATIONS = 4096,
    DOM_CACHE = 8192,
    ALL = 16383,
}

export namespace AuthenticationRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AuthenticationRequest extends GObject.Object {
    static $gtype: GObject.GType<AuthenticationRequest>;

    constructor(properties?: Partial<AuthenticationRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AuthenticationRequest.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'authenticated', callback: (_source: this, credential: Credential) => void): number;

    connect_after(signal: 'authenticated', callback: (_source: this, credential: Credential) => void): number;

    emit(signal: 'authenticated', credential: Credential): void;

    connect(signal: 'cancelled', callback: (_source: this) => void): number;

    connect_after(signal: 'cancelled', callback: (_source: this) => void): number;

    emit(signal: 'cancelled'): void;

    // Members

    authenticate(credential?: Credential | null): void;

    can_save_credentials(): boolean;

    cancel(): void;

    get_host(): string;

    get_port(): number;

    get_proposed_credential(): Credential;

    get_realm(): string;

    get_scheme(): AuthenticationScheme;

    get_security_origin(): SecurityOrigin;

    is_for_proxy(): boolean;

    is_retry(): boolean;

    set_can_save_credentials(enabled: boolean): void;

    set_proposed_credential(credential: Credential): void;
}

export namespace AutomationSession {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        id: string;
    }
}

export class AutomationSession extends GObject.Object {
    static $gtype: GObject.GType<AutomationSession>;

    constructor(properties?: Partial<AutomationSession.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AutomationSession.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: string;

    // Fields
    priv: AutomationSessionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'create-web-view', callback: (_source: this) => WebView): number;

    connect_after(signal: 'create-web-view', callback: (_source: this) => WebView): number;

    emit(signal: 'create-web-view'): void;

    // Members

    get_application_info(): ApplicationInfo;

    get_id(): string;

    set_application_info(info: ApplicationInfo): void;
}

export namespace BackForwardList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BackForwardList extends GObject.Object {
    static $gtype: GObject.GType<BackForwardList>;

    constructor(properties?: Partial<BackForwardList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BackForwardList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BackForwardListPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'changed',
        callback: (_source: this, item_added: BackForwardListItem | null, items_removed: any | null) => void
    ): number;

    connect_after(
        signal: 'changed',
        callback: (_source: this, item_added: BackForwardListItem | null, items_removed: any | null) => void
    ): number;

    emit(signal: 'changed', item_added: BackForwardListItem | null, items_removed: any | null): void;

    // Members

    get_back_item(): BackForwardListItem | null;

    get_back_list(): BackForwardListItem[];

    get_back_list_with_limit(limit: number): BackForwardListItem[];

    get_current_item(): BackForwardListItem | null;

    get_forward_item(): BackForwardListItem | null;

    get_forward_list(): BackForwardListItem[];

    get_forward_list_with_limit(limit: number): BackForwardListItem[];

    get_length(): number;

    get_nth_item(index: number): BackForwardListItem | null;
}

export namespace BackForwardListItem {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}

export class BackForwardListItem extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<BackForwardListItem>;

    constructor(properties?: Partial<BackForwardListItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BackForwardListItem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BackForwardListItemPrivate;

    // Members

    get_original_uri(): string;

    get_title(): string;

    get_uri(): string;
}

export namespace ColorChooserRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        rgba: Gdk.RGBA;
    }
}

export class ColorChooserRequest extends GObject.Object {
    static $gtype: GObject.GType<ColorChooserRequest>;

    constructor(properties?: Partial<ColorChooserRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ColorChooserRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    rgba: Gdk.RGBA;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    // Members

    cancel(): void;

    finish(): void;

    get_element_rectangle(): Gdk.Rectangle;

    get_rgba(): Gdk.RGBA;

    set_rgba(rgba: Gdk.RGBA): void;
}

export namespace ContextMenu {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContextMenu extends GObject.Object {
    static $gtype: GObject.GType<ContextMenu>;

    constructor(properties?: Partial<ContextMenu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContextMenu.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContextMenuPrivate;

    // Constructors

    static ['new'](): ContextMenu;

    static new_with_items(items: ContextMenuItem[]): ContextMenu;

    // Members

    append(item: ContextMenuItem): void;

    first(): ContextMenuItem;

    get_item_at_position(position: number): ContextMenuItem;

    get_items(): ContextMenuItem[];

    get_n_items(): number;

    get_user_data(): GLib.Variant;

    insert(item: ContextMenuItem, position: number): void;

    last(): ContextMenuItem;

    move_item(item: ContextMenuItem, position: number): void;

    prepend(item: ContextMenuItem): void;

    remove(item: ContextMenuItem): void;

    remove_all(): void;

    set_user_data(user_data: GLib.Variant): void;
}

export namespace ContextMenuItem {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContextMenuItem extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<ContextMenuItem>;

    constructor(properties?: Partial<ContextMenuItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContextMenuItem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContextMenuItemPrivate;

    // Constructors

    static ['new'](action: Gtk.Action): ContextMenuItem;

    static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

    static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

    static new_separator(): ContextMenuItem;

    static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

    // Members

    get_action(): Gtk.Action;

    get_gaction(): Gio.Action;

    get_stock_action(): ContextMenuAction;

    get_submenu(): ContextMenu;

    is_separator(): boolean;

    set_submenu(submenu?: ContextMenu | null): void;
}

export namespace CookieManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CookieManager extends GObject.Object {
    static $gtype: GObject.GType<CookieManager>;

    constructor(properties?: Partial<CookieManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CookieManager.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CookieManagerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Members

    add_cookie(
        cookie: Soup.Cookie,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_cookie_finish(result: Gio.AsyncResult): boolean;

    delete_all_cookies(): void;

    delete_cookie(
        cookie: Soup.Cookie,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_cookie_finish(result: Gio.AsyncResult): boolean;

    delete_cookies_for_domain(domain: string): void;

    get_accept_policy(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;

    get_cookies(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[];

    get_domains_with_cookies(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];

    set_accept_policy(policy: CookieAcceptPolicy): void;

    set_persistent_storage(filename: string, storage: CookiePersistentStorage): void;
}

export namespace DeviceInfoPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceInfoPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<DeviceInfoPermissionRequest>;

    constructor(properties?: Partial<DeviceInfoPermissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceInfoPermissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace Download {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        allow_overwrite: boolean;
        allowOverwrite: boolean;
        destination: string;
        estimated_progress: number;
        estimatedProgress: number;
        response: URIResponse;
    }
}

export class Download extends GObject.Object {
    static $gtype: GObject.GType<Download>;

    constructor(properties?: Partial<Download.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Download.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_overwrite: boolean;
    allowOverwrite: boolean;
    destination: string;
    estimated_progress: number;
    estimatedProgress: number;
    response: URIResponse;

    // Fields
    priv: DownloadPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'created-destination', callback: (_source: this, destination: string) => void): number;

    connect_after(signal: 'created-destination', callback: (_source: this, destination: string) => void): number;

    emit(signal: 'created-destination', destination: string): void;

    connect(signal: 'decide-destination', callback: (_source: this, suggested_filename: string) => boolean): number;

    connect_after(
        signal: 'decide-destination',
        callback: (_source: this, suggested_filename: string) => boolean
    ): number;

    emit(signal: 'decide-destination', suggested_filename: string): void;

    connect(signal: 'failed', callback: (_source: this, error: GLib.Error) => void): number;

    connect_after(signal: 'failed', callback: (_source: this, error: GLib.Error) => void): number;

    emit(signal: 'failed', error: GLib.Error): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    connect(signal: 'received-data', callback: (_source: this, data_length: number) => void): number;

    connect_after(signal: 'received-data', callback: (_source: this, data_length: number) => void): number;

    emit(signal: 'received-data', data_length: number): void;

    // Members

    cancel(): void;

    get_allow_overwrite(): boolean;

    get_destination(): string;

    get_elapsed_time(): number;

    get_estimated_progress(): number;

    get_received_data_length(): number;

    get_request(): URIRequest;

    get_response(): URIResponse;

    get_web_view(): WebView;

    set_allow_overwrite(allowed: boolean): void;

    set_destination(uri: string): void;

    vfunc_decide_destination(suggested_filename: string): boolean;
}

export namespace EditorState {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        typing_attributes: number;
        typingAttributes: number;
    }
}

export class EditorState extends GObject.Object {
    static $gtype: GObject.GType<EditorState>;

    constructor(properties?: Partial<EditorState.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EditorState.ConstructorProperties>, ...args: any[]): void;

    // Properties
    typing_attributes: number;
    typingAttributes: number;

    // Fields
    priv: EditorStatePrivate;

    // Members

    get_typing_attributes(): number;

    is_copy_available(): boolean;

    is_cut_available(): boolean;

    is_paste_available(): boolean;

    is_redo_available(): boolean;

    is_undo_available(): boolean;
}

export namespace FaviconDatabase {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FaviconDatabase extends GObject.Object {
    static $gtype: GObject.GType<FaviconDatabase>;

    constructor(properties?: Partial<FaviconDatabase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FaviconDatabase.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FaviconDatabasePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'favicon-changed',
        callback: (_source: this, page_uri: string, favicon_uri: string) => void
    ): number;

    connect_after(
        signal: 'favicon-changed',
        callback: (_source: this, page_uri: string, favicon_uri: string) => void
    ): number;

    emit(signal: 'favicon-changed', page_uri: string, favicon_uri: string): void;

    // Members

    clear(): void;

    get_favicon(
        page_uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;

    get_favicon_uri(page_uri: string): string;
}

export namespace FileChooserRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        filter: Gtk.FileFilter;
        mime_types: string[];
        mimeTypes: string[];
        select_multiple: boolean;
        selectMultiple: boolean;
        selected_files: string[];
        selectedFiles: string[];
    }
}

export class FileChooserRequest extends GObject.Object {
    static $gtype: GObject.GType<FileChooserRequest>;

    constructor(properties?: Partial<FileChooserRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileChooserRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter: Gtk.FileFilter;
    mime_types: string[];
    mimeTypes: string[];
    select_multiple: boolean;
    selectMultiple: boolean;
    selected_files: string[];
    selectedFiles: string[];

    // Members

    cancel(): void;

    get_mime_types(): string[];

    get_mime_types_filter(): Gtk.FileFilter;

    get_select_multiple(): boolean;

    get_selected_files(): string[];

    select_files(files: string[]): void;
}

export namespace FindController {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        max_match_count: number;
        maxMatchCount: number;
        options: FindOptions;
        text: string;
        web_view: WebView;
        webView: WebView;
    }
}

export class FindController extends GObject.Object {
    static $gtype: GObject.GType<FindController>;

    constructor(properties?: Partial<FindController.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FindController.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_match_count: number;
    maxMatchCount: number;
    options: FindOptions;
    text: string;
    web_view: WebView;
    webView: WebView;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'counted-matches', callback: (_source: this, match_count: number) => void): number;

    connect_after(signal: 'counted-matches', callback: (_source: this, match_count: number) => void): number;

    emit(signal: 'counted-matches', match_count: number): void;

    connect(signal: 'failed-to-find-text', callback: (_source: this) => void): number;

    connect_after(signal: 'failed-to-find-text', callback: (_source: this) => void): number;

    emit(signal: 'failed-to-find-text'): void;

    connect(signal: 'found-text', callback: (_source: this, match_count: number) => void): number;

    connect_after(signal: 'found-text', callback: (_source: this, match_count: number) => void): number;

    emit(signal: 'found-text', match_count: number): void;

    // Members

    count_matches(search_text: string, find_options: number, max_match_count: number): void;

    get_max_match_count(): number;

    get_options(): number;

    get_search_text(): string;

    get_web_view(): WebView;

    search(search_text: string, find_options: number, max_match_count: number): void;

    search_finish(): void;

    search_next(): void;

    search_previous(): void;
}

export namespace FormSubmissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FormSubmissionRequest extends GObject.Object {
    static $gtype: GObject.GType<FormSubmissionRequest>;

    constructor(properties?: Partial<FormSubmissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormSubmissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_text_fields(): GLib.HashTable<any, any> | null;

    list_text_fields(): [boolean, string[] | null, string[] | null];

    submit(): void;
}

export namespace GeolocationManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        enable_high_accuracy: boolean;
        enableHighAccuracy: boolean;
    }
}

export class GeolocationManager extends GObject.Object {
    static $gtype: GObject.GType<GeolocationManager>;

    constructor(properties?: Partial<GeolocationManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GeolocationManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enable_high_accuracy: boolean;
    enableHighAccuracy: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'start', callback: (_source: this) => boolean): number;

    connect_after(signal: 'start', callback: (_source: this) => boolean): number;

    emit(signal: 'start'): void;

    connect(signal: 'stop', callback: (_source: this) => void): number;

    connect_after(signal: 'stop', callback: (_source: this) => void): number;

    emit(signal: 'stop'): void;

    // Members

    failed(error_message: string): void;

    get_enable_high_accuracy(): boolean;

    update_position(position: GeolocationPosition): void;
}

export namespace GeolocationPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class GeolocationPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<GeolocationPermissionRequest>;

    constructor(properties?: Partial<GeolocationPermissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GeolocationPermissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace HitTestResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: number;
        image_uri: string;
        imageUri: string;
        link_label: string;
        linkLabel: string;
        link_title: string;
        linkTitle: string;
        link_uri: string;
        linkUri: string;
        media_uri: string;
        mediaUri: string;
    }
}

export class HitTestResult extends GObject.Object {
    static $gtype: GObject.GType<HitTestResult>;

    constructor(properties?: Partial<HitTestResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HitTestResult.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: number;
    image_uri: string;
    imageUri: string;
    link_label: string;
    linkLabel: string;
    link_title: string;
    linkTitle: string;
    link_uri: string;
    linkUri: string;
    media_uri: string;
    mediaUri: string;

    // Fields
    priv: HitTestResultPrivate;

    // Members

    context_is_editable(): boolean;

    context_is_image(): boolean;

    context_is_link(): boolean;

    context_is_media(): boolean;

    context_is_scrollbar(): boolean;

    context_is_selection(): boolean;

    get_context(): number;

    get_image_uri(): string;

    get_link_label(): string;

    get_link_title(): string;

    get_link_uri(): string;

    get_media_uri(): string;
}

export namespace InputMethodContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        input_hints: InputHints;
        inputHints: InputHints;
        input_purpose: InputPurpose;
        inputPurpose: InputPurpose;
    }
}

export abstract class InputMethodContext extends GObject.Object {
    static $gtype: GObject.GType<InputMethodContext>;

    constructor(properties?: Partial<InputMethodContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputMethodContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    input_hints: InputHints;
    inputHints: InputHints;
    input_purpose: InputPurpose;
    inputPurpose: InputPurpose;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'committed', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'committed', callback: (_source: this, text: string) => void): number;

    emit(signal: 'committed', text: string): void;

    connect(signal: 'delete-surrounding', callback: (_source: this, offset: number, n_chars: number) => void): number;

    connect_after(
        signal: 'delete-surrounding',
        callback: (_source: this, offset: number, n_chars: number) => void
    ): number;

    emit(signal: 'delete-surrounding', offset: number, n_chars: number): void;

    connect(signal: 'preedit-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'preedit-changed', callback: (_source: this) => void): number;

    emit(signal: 'preedit-changed'): void;

    connect(signal: 'preedit-finished', callback: (_source: this) => void): number;

    connect_after(signal: 'preedit-finished', callback: (_source: this) => void): number;

    emit(signal: 'preedit-finished'): void;

    connect(signal: 'preedit-started', callback: (_source: this) => void): number;

    connect_after(signal: 'preedit-started', callback: (_source: this) => void): number;

    emit(signal: 'preedit-started'): void;

    // Members

    filter_key_event(key_event: Gdk.EventKey): boolean;

    get_input_hints(): InputHints;

    get_input_purpose(): InputPurpose;

    get_preedit(): [string | null, InputMethodUnderline[] | null, number | null];

    notify_cursor_area(x: number, y: number, width: number, height: number): void;

    notify_focus_in(): void;

    notify_focus_out(): void;

    notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;

    reset(): void;

    set_enable_preedit(enabled: boolean): void;

    set_input_hints(hints: InputHints): void;

    set_input_purpose(purpose: InputPurpose): void;

    vfunc_committed(text: string): void;

    vfunc_delete_surrounding(offset: number, n_chars: number): void;

    vfunc_filter_key_event(key_event: Gdk.EventKey): boolean;

    vfunc_get_preedit(): [string | null, InputMethodUnderline[] | null, number | null];

    vfunc_notify_cursor_area(x: number, y: number, width: number, height: number): void;

    vfunc_notify_focus_in(): void;

    vfunc_notify_focus_out(): void;

    vfunc_notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;

    vfunc_preedit_changed(): void;

    vfunc_preedit_finished(): void;

    vfunc_preedit_started(): void;

    vfunc_reset(): void;

    vfunc_set_enable_preedit(enabled: boolean): void;
}

export namespace InstallMissingMediaPluginsPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class InstallMissingMediaPluginsPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequest>;

    constructor(
        properties?: Partial<InstallMissingMediaPluginsPermissionRequest.ConstructorProperties>,
        ...args: any[]
    );

    _init(
        properties?: Partial<InstallMissingMediaPluginsPermissionRequest.ConstructorProperties>,
        ...args: any[]
    ): void;

    // Fields
    priv: InstallMissingMediaPluginsPermissionRequestPrivate;

    // Members

    get_description(): string;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace NavigationPolicyDecision {
    export interface ConstructorProperties extends PolicyDecision.ConstructorProperties {
        [key: string]: any;

        frame_name: string;
        frameName: string;
        modifiers: number;
        mouse_button: number;
        mouseButton: number;
        navigation_action: NavigationAction;
        navigationAction: NavigationAction;
        navigation_type: NavigationType;
        navigationType: NavigationType;
        request: URIRequest;
    }
}

export class NavigationPolicyDecision extends PolicyDecision {
    static $gtype: GObject.GType<NavigationPolicyDecision>;

    constructor(properties?: Partial<NavigationPolicyDecision.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NavigationPolicyDecision.ConstructorProperties>, ...args: any[]): void;

    // Properties
    frame_name: string;
    frameName: string;
    modifiers: number;
    mouse_button: number;
    mouseButton: number;
    navigation_action: NavigationAction;
    navigationAction: NavigationAction;
    navigation_type: NavigationType;
    navigationType: NavigationType;
    request: URIRequest;

    // Members

    get_frame_name(): string;

    get_modifiers(): number;

    get_mouse_button(): number;

    get_navigation_action(): NavigationAction;

    get_navigation_type(): NavigationType;

    get_request(): URIRequest;
}

export namespace Notification {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        body: string;
        id: number;
        tag: string;
        title: string;
    }
}

export class Notification extends GObject.Object {
    static $gtype: GObject.GType<Notification>;

    constructor(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]): void;

    // Properties
    body: string;
    id: number;
    tag: string;
    title: string;

    // Fields
    priv: NotificationPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'clicked', callback: (_source: this) => void): number;

    connect_after(signal: 'clicked', callback: (_source: this) => void): number;

    emit(signal: 'clicked'): void;

    connect(signal: 'closed', callback: (_source: this) => void): number;

    connect_after(signal: 'closed', callback: (_source: this) => void): number;

    emit(signal: 'closed'): void;

    // Members

    clicked(): void;

    close(): void;

    get_body(): string;

    get_id(): number;

    get_tag(): string | null;

    get_title(): string;
}

export namespace NotificationPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class NotificationPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<NotificationPermissionRequest>;

    constructor(properties?: Partial<NotificationPermissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NotificationPermissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace OptionMenu {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class OptionMenu extends GObject.Object {
    static $gtype: GObject.GType<OptionMenu>;

    constructor(properties?: Partial<OptionMenu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OptionMenu.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: OptionMenuPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'close', callback: (_source: this) => void): number;

    connect_after(signal: 'close', callback: (_source: this) => void): number;

    emit(signal: 'close'): void;

    // Members

    activate_item(index: number): void;

    close(): void;

    get_item(index: number): OptionMenuItem;

    get_n_items(): number;

    select_item(index: number): void;
}

export namespace Plugin {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Plugin extends GObject.Object {
    static $gtype: GObject.GType<Plugin>;

    constructor(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PluginPrivate;

    // Members

    get_description(): string;

    get_mime_info_list(): MimeInfo[];

    get_name(): string;

    get_path(): string;
}

export namespace PointerLockPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PointerLockPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<PointerLockPermissionRequest>;

    constructor(properties?: Partial<PointerLockPermissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PointerLockPermissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace PolicyDecision {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class PolicyDecision extends GObject.Object {
    static $gtype: GObject.GType<PolicyDecision>;

    constructor(properties?: Partial<PolicyDecision.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PolicyDecision.ConstructorProperties>, ...args: any[]): void;

    // Members

    download(): void;

    ignore(): void;

    use(): void;

    use_with_policies(policies: WebsitePolicies): void;
}

export namespace PrintCustomWidget {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        title: string;
        widget: Gtk.Widget;
    }
}

export class PrintCustomWidget extends GObject.Object {
    static $gtype: GObject.GType<PrintCustomWidget>;

    constructor(properties?: Partial<PrintCustomWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PrintCustomWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;
    widget: Gtk.Widget;

    // Fields
    priv: PrintCustomWidgetPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'apply', callback: (_source: this) => void): number;

    connect_after(signal: 'apply', callback: (_source: this) => void): number;

    emit(signal: 'apply'): void;

    connect(
        signal: 'update',
        callback: (_source: this, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void
    ): number;

    connect_after(
        signal: 'update',
        callback: (_source: this, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void
    ): number;

    emit(signal: 'update', page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;

    // Constructors

    static ['new'](widget: Gtk.Widget, title: string): PrintCustomWidget;

    // Members

    get_title(): string;

    get_widget(): Gtk.Widget;

    vfunc_apply(widget: Gtk.Widget): void;

    vfunc_update(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;
}

export namespace PrintOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        page_setup: Gtk.PageSetup;
        pageSetup: Gtk.PageSetup;
        print_settings: Gtk.PrintSettings;
        printSettings: Gtk.PrintSettings;
        web_view: WebView;
        webView: WebView;
    }
}

export class PrintOperation extends GObject.Object {
    static $gtype: GObject.GType<PrintOperation>;

    constructor(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    page_setup: Gtk.PageSetup;
    pageSetup: Gtk.PageSetup;
    print_settings: Gtk.PrintSettings;
    printSettings: Gtk.PrintSettings;
    web_view: WebView;
    webView: WebView;

    // Fields
    priv: PrintOperationPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'create-custom-widget', callback: (_source: this) => PrintCustomWidget): number;

    connect_after(signal: 'create-custom-widget', callback: (_source: this) => PrintCustomWidget): number;

    emit(signal: 'create-custom-widget'): void;

    connect(signal: 'failed', callback: (_source: this, error: GLib.Error) => void): number;

    connect_after(signal: 'failed', callback: (_source: this, error: GLib.Error) => void): number;

    emit(signal: 'failed', error: GLib.Error): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    // Constructors

    static ['new'](web_view: WebView): PrintOperation;

    // Members

    get_page_setup(): Gtk.PageSetup;

    get_print_settings(): Gtk.PrintSettings;

    print(): void;

    run_dialog(parent?: Gtk.Window | null): PrintOperationResponse;

    set_page_setup(page_setup: Gtk.PageSetup): void;

    set_print_settings(print_settings: Gtk.PrintSettings): void;
}

export namespace ResponsePolicyDecision {
    export interface ConstructorProperties extends PolicyDecision.ConstructorProperties {
        [key: string]: any;

        request: URIRequest;
        response: URIResponse;
    }
}

export class ResponsePolicyDecision extends PolicyDecision {
    static $gtype: GObject.GType<ResponsePolicyDecision>;

    constructor(properties?: Partial<ResponsePolicyDecision.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ResponsePolicyDecision.ConstructorProperties>, ...args: any[]): void;

    // Properties
    request: URIRequest;
    response: URIResponse;

    // Members

    get_request(): URIRequest;

    get_response(): URIResponse;

    is_mime_type_supported(): boolean;
}

export namespace SecurityManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SecurityManager extends GObject.Object {
    static $gtype: GObject.GType<SecurityManager>;

    constructor(properties?: Partial<SecurityManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SecurityManager.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SecurityManagerPrivate;

    // Members

    register_uri_scheme_as_cors_enabled(scheme: string): void;

    register_uri_scheme_as_display_isolated(scheme: string): void;

    register_uri_scheme_as_empty_document(scheme: string): void;

    register_uri_scheme_as_local(scheme: string): void;

    register_uri_scheme_as_no_access(scheme: string): void;

    register_uri_scheme_as_secure(scheme: string): void;

    uri_scheme_is_cors_enabled(scheme: string): boolean;

    uri_scheme_is_display_isolated(scheme: string): boolean;

    uri_scheme_is_empty_document(scheme: string): boolean;

    uri_scheme_is_local(scheme: string): boolean;

    uri_scheme_is_no_access(scheme: string): boolean;

    uri_scheme_is_secure(scheme: string): boolean;
}

export namespace Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        allow_file_access_from_file_urls: boolean;
        allowFileAccessFromFileUrls: boolean;
        allow_modal_dialogs: boolean;
        allowModalDialogs: boolean;
        allow_top_navigation_to_data_urls: boolean;
        allowTopNavigationToDataUrls: boolean;
        allow_universal_access_from_file_urls: boolean;
        allowUniversalAccessFromFileUrls: boolean;
        auto_load_images: boolean;
        autoLoadImages: boolean;
        cursive_font_family: string;
        cursiveFontFamily: string;
        default_charset: string;
        defaultCharset: string;
        default_font_family: string;
        defaultFontFamily: string;
        default_font_size: number;
        defaultFontSize: number;
        default_monospace_font_size: number;
        defaultMonospaceFontSize: number;
        draw_compositing_indicators: boolean;
        drawCompositingIndicators: boolean;
        enable_accelerated_2d_canvas: boolean;
        enableAccelerated2dCanvas: boolean;
        enable_back_forward_navigation_gestures: boolean;
        enableBackForwardNavigationGestures: boolean;
        enable_caret_browsing: boolean;
        enableCaretBrowsing: boolean;
        enable_developer_extras: boolean;
        enableDeveloperExtras: boolean;
        enable_dns_prefetching: boolean;
        enableDnsPrefetching: boolean;
        enable_encrypted_media: boolean;
        enableEncryptedMedia: boolean;
        enable_frame_flattening: boolean;
        enableFrameFlattening: boolean;
        enable_fullscreen: boolean;
        enableFullscreen: boolean;
        enable_html5_database: boolean;
        enableHtml5Database: boolean;
        enable_html5_local_storage: boolean;
        enableHtml5LocalStorage: boolean;
        enable_hyperlink_auditing: boolean;
        enableHyperlinkAuditing: boolean;
        enable_java: boolean;
        enableJava: boolean;
        enable_javascript: boolean;
        enableJavascript: boolean;
        enable_javascript_markup: boolean;
        enableJavascriptMarkup: boolean;
        enable_media: boolean;
        enableMedia: boolean;
        enable_media_capabilities: boolean;
        enableMediaCapabilities: boolean;
        enable_media_stream: boolean;
        enableMediaStream: boolean;
        enable_mediasource: boolean;
        enableMediasource: boolean;
        enable_mock_capture_devices: boolean;
        enableMockCaptureDevices: boolean;
        enable_offline_web_application_cache: boolean;
        enableOfflineWebApplicationCache: boolean;
        enable_page_cache: boolean;
        enablePageCache: boolean;
        enable_plugins: boolean;
        enablePlugins: boolean;
        enable_private_browsing: boolean;
        enablePrivateBrowsing: boolean;
        enable_resizable_text_areas: boolean;
        enableResizableTextAreas: boolean;
        enable_site_specific_quirks: boolean;
        enableSiteSpecificQuirks: boolean;
        enable_smooth_scrolling: boolean;
        enableSmoothScrolling: boolean;
        enable_spatial_navigation: boolean;
        enableSpatialNavigation: boolean;
        enable_tabs_to_links: boolean;
        enableTabsToLinks: boolean;
        enable_webaudio: boolean;
        enableWebaudio: boolean;
        enable_webgl: boolean;
        enableWebgl: boolean;
        enable_write_console_messages_to_stdout: boolean;
        enableWriteConsoleMessagesToStdout: boolean;
        enable_xss_auditor: boolean;
        enableXssAuditor: boolean;
        fantasy_font_family: string;
        fantasyFontFamily: string;
        hardware_acceleration_policy: HardwareAccelerationPolicy;
        hardwareAccelerationPolicy: HardwareAccelerationPolicy;
        javascript_can_access_clipboard: boolean;
        javascriptCanAccessClipboard: boolean;
        javascript_can_open_windows_automatically: boolean;
        javascriptCanOpenWindowsAutomatically: boolean;
        load_icons_ignoring_image_load_setting: boolean;
        loadIconsIgnoringImageLoadSetting: boolean;
        media_content_types_requiring_hardware_support: string;
        mediaContentTypesRequiringHardwareSupport: string;
        media_playback_allows_inline: boolean;
        mediaPlaybackAllowsInline: boolean;
        media_playback_requires_user_gesture: boolean;
        mediaPlaybackRequiresUserGesture: boolean;
        minimum_font_size: number;
        minimumFontSize: number;
        monospace_font_family: string;
        monospaceFontFamily: string;
        pictograph_font_family: string;
        pictographFontFamily: string;
        print_backgrounds: boolean;
        printBackgrounds: boolean;
        sans_serif_font_family: string;
        sansSerifFontFamily: string;
        serif_font_family: string;
        serifFontFamily: string;
        user_agent: string;
        userAgent: string;
        zoom_text_only: boolean;
        zoomTextOnly: boolean;
    }
}

export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_file_access_from_file_urls: boolean;
    allowFileAccessFromFileUrls: boolean;
    allow_modal_dialogs: boolean;
    allowModalDialogs: boolean;
    allow_top_navigation_to_data_urls: boolean;
    allowTopNavigationToDataUrls: boolean;
    allow_universal_access_from_file_urls: boolean;
    allowUniversalAccessFromFileUrls: boolean;
    auto_load_images: boolean;
    autoLoadImages: boolean;
    cursive_font_family: string;
    cursiveFontFamily: string;
    default_charset: string;
    defaultCharset: string;
    default_font_family: string;
    defaultFontFamily: string;
    default_font_size: number;
    defaultFontSize: number;
    default_monospace_font_size: number;
    defaultMonospaceFontSize: number;
    draw_compositing_indicators: boolean;
    drawCompositingIndicators: boolean;
    enable_accelerated_2d_canvas: boolean;
    enableAccelerated2dCanvas: boolean;
    enable_back_forward_navigation_gestures: boolean;
    enableBackForwardNavigationGestures: boolean;
    enable_caret_browsing: boolean;
    enableCaretBrowsing: boolean;
    enable_developer_extras: boolean;
    enableDeveloperExtras: boolean;
    enable_dns_prefetching: boolean;
    enableDnsPrefetching: boolean;
    enable_encrypted_media: boolean;
    enableEncryptedMedia: boolean;
    enable_frame_flattening: boolean;
    enableFrameFlattening: boolean;
    enable_fullscreen: boolean;
    enableFullscreen: boolean;
    enable_html5_database: boolean;
    enableHtml5Database: boolean;
    enable_html5_local_storage: boolean;
    enableHtml5LocalStorage: boolean;
    enable_hyperlink_auditing: boolean;
    enableHyperlinkAuditing: boolean;
    enable_java: boolean;
    enableJava: boolean;
    enable_javascript: boolean;
    enableJavascript: boolean;
    enable_javascript_markup: boolean;
    enableJavascriptMarkup: boolean;
    enable_media: boolean;
    enableMedia: boolean;
    enable_media_capabilities: boolean;
    enableMediaCapabilities: boolean;
    enable_media_stream: boolean;
    enableMediaStream: boolean;
    enable_mediasource: boolean;
    enableMediasource: boolean;
    enable_mock_capture_devices: boolean;
    enableMockCaptureDevices: boolean;
    enable_offline_web_application_cache: boolean;
    enableOfflineWebApplicationCache: boolean;
    enable_page_cache: boolean;
    enablePageCache: boolean;
    enable_plugins: boolean;
    enablePlugins: boolean;
    enable_private_browsing: boolean;
    enablePrivateBrowsing: boolean;
    enable_resizable_text_areas: boolean;
    enableResizableTextAreas: boolean;
    enable_site_specific_quirks: boolean;
    enableSiteSpecificQuirks: boolean;
    enable_smooth_scrolling: boolean;
    enableSmoothScrolling: boolean;
    enable_spatial_navigation: boolean;
    enableSpatialNavigation: boolean;
    enable_tabs_to_links: boolean;
    enableTabsToLinks: boolean;
    enable_webaudio: boolean;
    enableWebaudio: boolean;
    enable_webgl: boolean;
    enableWebgl: boolean;
    enable_write_console_messages_to_stdout: boolean;
    enableWriteConsoleMessagesToStdout: boolean;
    enable_xss_auditor: boolean;
    enableXssAuditor: boolean;
    fantasy_font_family: string;
    fantasyFontFamily: string;
    hardware_acceleration_policy: HardwareAccelerationPolicy;
    hardwareAccelerationPolicy: HardwareAccelerationPolicy;
    javascript_can_access_clipboard: boolean;
    javascriptCanAccessClipboard: boolean;
    javascript_can_open_windows_automatically: boolean;
    javascriptCanOpenWindowsAutomatically: boolean;
    load_icons_ignoring_image_load_setting: boolean;
    loadIconsIgnoringImageLoadSetting: boolean;
    media_content_types_requiring_hardware_support: string;
    mediaContentTypesRequiringHardwareSupport: string;
    media_playback_allows_inline: boolean;
    mediaPlaybackAllowsInline: boolean;
    media_playback_requires_user_gesture: boolean;
    mediaPlaybackRequiresUserGesture: boolean;
    minimum_font_size: number;
    minimumFontSize: number;
    monospace_font_family: string;
    monospaceFontFamily: string;
    pictograph_font_family: string;
    pictographFontFamily: string;
    print_backgrounds: boolean;
    printBackgrounds: boolean;
    sans_serif_font_family: string;
    sansSerifFontFamily: string;
    serif_font_family: string;
    serifFontFamily: string;
    user_agent: string;
    userAgent: string;
    zoom_text_only: boolean;
    zoomTextOnly: boolean;

    // Fields
    priv: SettingsPrivate;

    // Constructors

    static ['new'](): Settings;

    // Members

    get_allow_file_access_from_file_urls(): boolean;

    get_allow_modal_dialogs(): boolean;

    get_allow_top_navigation_to_data_urls(): boolean;

    get_allow_universal_access_from_file_urls(): boolean;

    get_auto_load_images(): boolean;

    get_cursive_font_family(): string;

    get_default_charset(): string;

    get_default_font_family(): string;

    get_default_font_size(): number;

    get_default_monospace_font_size(): number;

    get_draw_compositing_indicators(): boolean;

    get_enable_accelerated_2d_canvas(): boolean;

    get_enable_back_forward_navigation_gestures(): boolean;

    get_enable_caret_browsing(): boolean;

    get_enable_developer_extras(): boolean;

    get_enable_dns_prefetching(): boolean;

    get_enable_encrypted_media(): boolean;

    get_enable_frame_flattening(): boolean;

    get_enable_fullscreen(): boolean;

    get_enable_html5_database(): boolean;

    get_enable_html5_local_storage(): boolean;

    get_enable_hyperlink_auditing(): boolean;

    get_enable_java(): boolean;

    get_enable_javascript(): boolean;

    get_enable_javascript_markup(): boolean;

    get_enable_media(): boolean;

    get_enable_media_capabilities(): boolean;

    get_enable_media_stream(): boolean;

    get_enable_mediasource(): boolean;

    get_enable_mock_capture_devices(): boolean;

    get_enable_offline_web_application_cache(): boolean;

    get_enable_page_cache(): boolean;

    get_enable_plugins(): boolean;

    get_enable_private_browsing(): boolean;

    get_enable_resizable_text_areas(): boolean;

    get_enable_site_specific_quirks(): boolean;

    get_enable_smooth_scrolling(): boolean;

    get_enable_spatial_navigation(): boolean;

    get_enable_tabs_to_links(): boolean;

    get_enable_webaudio(): boolean;

    get_enable_webgl(): boolean;

    get_enable_write_console_messages_to_stdout(): boolean;

    get_enable_xss_auditor(): boolean;

    get_fantasy_font_family(): string;

    get_hardware_acceleration_policy(): HardwareAccelerationPolicy;

    get_javascript_can_access_clipboard(): boolean;

    get_javascript_can_open_windows_automatically(): boolean;

    get_load_icons_ignoring_image_load_setting(): boolean;

    get_media_content_types_requiring_hardware_support(): string;

    get_media_playback_allows_inline(): boolean;

    get_media_playback_requires_user_gesture(): boolean;

    get_minimum_font_size(): number;

    get_monospace_font_family(): string;

    get_pictograph_font_family(): string;

    get_print_backgrounds(): boolean;

    get_sans_serif_font_family(): string;

    get_serif_font_family(): string;

    get_user_agent(): string;

    get_zoom_text_only(): boolean;

    set_allow_file_access_from_file_urls(allowed: boolean): void;

    set_allow_modal_dialogs(allowed: boolean): void;

    set_allow_top_navigation_to_data_urls(allowed: boolean): void;

    set_allow_universal_access_from_file_urls(allowed: boolean): void;

    set_auto_load_images(enabled: boolean): void;

    set_cursive_font_family(cursive_font_family: string): void;

    set_default_charset(default_charset: string): void;

    set_default_font_family(default_font_family: string): void;

    set_default_font_size(font_size: number): void;

    set_default_monospace_font_size(font_size: number): void;

    set_draw_compositing_indicators(enabled: boolean): void;

    set_enable_accelerated_2d_canvas(enabled: boolean): void;

    set_enable_back_forward_navigation_gestures(enabled: boolean): void;

    set_enable_caret_browsing(enabled: boolean): void;

    set_enable_developer_extras(enabled: boolean): void;

    set_enable_dns_prefetching(enabled: boolean): void;

    set_enable_encrypted_media(enabled: boolean): void;

    set_enable_frame_flattening(enabled: boolean): void;

    set_enable_fullscreen(enabled: boolean): void;

    set_enable_html5_database(enabled: boolean): void;

    set_enable_html5_local_storage(enabled: boolean): void;

    set_enable_hyperlink_auditing(enabled: boolean): void;

    set_enable_java(enabled: boolean): void;

    set_enable_javascript(enabled: boolean): void;

    set_enable_javascript_markup(enabled: boolean): void;

    set_enable_media(enabled: boolean): void;

    set_enable_media_capabilities(enabled: boolean): void;

    set_enable_media_stream(enabled: boolean): void;

    set_enable_mediasource(enabled: boolean): void;

    set_enable_mock_capture_devices(enabled: boolean): void;

    set_enable_offline_web_application_cache(enabled: boolean): void;

    set_enable_page_cache(enabled: boolean): void;

    set_enable_plugins(enabled: boolean): void;

    set_enable_private_browsing(enabled: boolean): void;

    set_enable_resizable_text_areas(enabled: boolean): void;

    set_enable_site_specific_quirks(enabled: boolean): void;

    set_enable_smooth_scrolling(enabled: boolean): void;

    set_enable_spatial_navigation(enabled: boolean): void;

    set_enable_tabs_to_links(enabled: boolean): void;

    set_enable_webaudio(enabled: boolean): void;

    set_enable_webgl(enabled: boolean): void;

    set_enable_write_console_messages_to_stdout(enabled: boolean): void;

    set_enable_xss_auditor(enabled: boolean): void;

    set_fantasy_font_family(fantasy_font_family: string): void;

    set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void;

    set_javascript_can_access_clipboard(enabled: boolean): void;

    set_javascript_can_open_windows_automatically(enabled: boolean): void;

    set_load_icons_ignoring_image_load_setting(enabled: boolean): void;

    set_media_content_types_requiring_hardware_support(content_types?: string | null): void;

    set_media_playback_allows_inline(enabled: boolean): void;

    set_media_playback_requires_user_gesture(enabled: boolean): void;

    set_minimum_font_size(font_size: number): void;

    set_monospace_font_family(monospace_font_family: string): void;

    set_pictograph_font_family(pictograph_font_family: string): void;

    set_print_backgrounds(print_backgrounds: boolean): void;

    set_sans_serif_font_family(sans_serif_font_family: string): void;

    set_serif_font_family(serif_font_family: string): void;

    set_user_agent(user_agent?: string | null): void;

    set_user_agent_with_application_details(
        application_name?: string | null,
        application_version?: string | null
    ): void;

    set_zoom_text_only(zoom_text_only: boolean): void;

    static font_size_to_pixels(points: number): number;

    static font_size_to_points(pixels: number): number;
}

export namespace URIRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        uri: string;
    }
}

export class URIRequest extends GObject.Object {
    static $gtype: GObject.GType<URIRequest>;

    constructor(properties?: Partial<URIRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URIRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    uri: string;

    // Constructors

    static ['new'](uri: string): URIRequest;

    // Members

    get_http_headers(): Soup.MessageHeaders;

    get_http_method(): string;

    get_uri(): string;

    set_uri(uri: string): void;
}

export namespace URIResponse {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        content_length: number;
        contentLength: number;
        http_headers: Soup.MessageHeaders;
        httpHeaders: Soup.MessageHeaders;
        mime_type: string;
        mimeType: string;
        status_code: number;
        statusCode: number;
        suggested_filename: string;
        suggestedFilename: string;
        uri: string;
    }
}

export class URIResponse extends GObject.Object {
    static $gtype: GObject.GType<URIResponse>;

    constructor(properties?: Partial<URIResponse.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URIResponse.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content_length: number;
    contentLength: number;
    http_headers: Soup.MessageHeaders;
    httpHeaders: Soup.MessageHeaders;
    mime_type: string;
    mimeType: string;
    status_code: number;
    statusCode: number;
    suggested_filename: string;
    suggestedFilename: string;
    uri: string;

    // Members

    get_content_length(): number;

    get_http_headers(): Soup.MessageHeaders;

    get_mime_type(): string;

    get_status_code(): number;

    get_suggested_filename(): string;

    get_uri(): string;
}

export namespace URISchemeRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class URISchemeRequest extends GObject.Object {
    static $gtype: GObject.GType<URISchemeRequest>;

    constructor(properties?: Partial<URISchemeRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URISchemeRequest.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: URISchemeRequestPrivate;

    // Members

    finish(stream: Gio.InputStream, stream_length: number, content_type?: string | null): void;

    finish_error(error: GLib.Error): void;

    get_path(): string;

    get_scheme(): string;

    get_uri(): string;

    get_web_view(): WebView;
}

export namespace UserContentFilterStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        path: string;
    }
}

export class UserContentFilterStore extends GObject.Object {
    static $gtype: GObject.GType<UserContentFilterStore>;

    constructor(properties?: Partial<UserContentFilterStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserContentFilterStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: string;

    // Constructors

    static ['new'](storage_path: string): UserContentFilterStore;

    // Members

    fetch_identifiers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_identifiers_finish(result: Gio.AsyncResult): string[];

    get_path(): string;

    load(
        identifier: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    load_finish(result: Gio.AsyncResult): UserContentFilter;

    remove(
        identifier: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_finish(result: Gio.AsyncResult): boolean;

    save(
        identifier: string,
        source: GLib.Bytes | Uint8Array,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_finish(result: Gio.AsyncResult): UserContentFilter;

    save_from_file(
        identifier: string,
        file: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
}

export namespace UserContentManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class UserContentManager extends GObject.Object {
    static $gtype: GObject.GType<UserContentManager>;

    constructor(properties?: Partial<UserContentManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserContentManager.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'script-message-received', callback: (_source: this, js_result: JavascriptResult) => void): number;

    connect_after(
        signal: 'script-message-received',
        callback: (_source: this, js_result: JavascriptResult) => void
    ): number;

    emit(signal: 'script-message-received', js_result: JavascriptResult): void;

    // Constructors

    static ['new'](): UserContentManager;

    // Members

    add_filter(filter: UserContentFilter): void;

    add_script(script: UserScript): void;

    add_style_sheet(stylesheet: UserStyleSheet): void;

    register_script_message_handler(name: string): boolean;

    register_script_message_handler_in_world(name: string, world_name: string): boolean;

    remove_all_filters(): void;

    remove_all_scripts(): void;

    remove_all_style_sheets(): void;

    remove_filter(filter: UserContentFilter): void;

    remove_filter_by_id(filter_id: string): void;

    unregister_script_message_handler(name: string): void;

    unregister_script_message_handler_in_world(name: string, world_name: string): void;
}

export namespace UserMediaPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        is_for_audio_device: boolean;
        isForAudioDevice: boolean;
        is_for_video_device: boolean;
        isForVideoDevice: boolean;
    }
}

export class UserMediaPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<UserMediaPermissionRequest>;

    constructor(properties?: Partial<UserMediaPermissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserMediaPermissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_for_audio_device: boolean;
    isForAudioDevice: boolean;
    is_for_video_device: boolean;
    isForVideoDevice: boolean;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace UserMessage {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        fd_list: Gio.UnixFDList;
        fdList: Gio.UnixFDList;
        name: string;
        parameters: GLib.Variant;
    }
}

export class UserMessage extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<UserMessage>;

    constructor(properties?: Partial<UserMessage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fd_list: Gio.UnixFDList;
    fdList: Gio.UnixFDList;
    name: string;
    parameters: GLib.Variant;

    // Fields
    priv: UserMessagePrivate;

    // Constructors

    static ['new'](name: string, parameters?: GLib.Variant | null): UserMessage;

    static new_with_fd_list(
        name: string,
        parameters?: GLib.Variant | null,
        fd_list?: Gio.UnixFDList | null
    ): UserMessage;

    // Members

    get_fd_list(): Gio.UnixFDList;

    get_name(): string;

    get_parameters(): GLib.Variant;

    send_reply(reply: UserMessage): void;
}

export namespace WebContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        local_storage_directory: string;
        localStorageDirectory: string;
        process_swap_on_cross_site_navigation_enabled: boolean;
        processSwapOnCrossSiteNavigationEnabled: boolean;
        use_system_appearance_for_scrollbars: boolean;
        useSystemAppearanceForScrollbars: boolean;
        website_data_manager: WebsiteDataManager;
        websiteDataManager: WebsiteDataManager;
    }
}

export class WebContext extends GObject.Object {
    static $gtype: GObject.GType<WebContext>;

    constructor(properties?: Partial<WebContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    local_storage_directory: string;
    localStorageDirectory: string;
    process_swap_on_cross_site_navigation_enabled: boolean;
    processSwapOnCrossSiteNavigationEnabled: boolean;
    use_system_appearance_for_scrollbars: boolean;
    useSystemAppearanceForScrollbars: boolean;
    website_data_manager: WebsiteDataManager;
    websiteDataManager: WebsiteDataManager;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'automation-started', callback: (_source: this, session: AutomationSession) => void): number;

    connect_after(signal: 'automation-started', callback: (_source: this, session: AutomationSession) => void): number;

    emit(signal: 'automation-started', session: AutomationSession): void;

    connect(signal: 'download-started', callback: (_source: this, download: Download) => void): number;

    connect_after(signal: 'download-started', callback: (_source: this, download: Download) => void): number;

    emit(signal: 'download-started', download: Download): void;

    connect(signal: 'initialize-notification-permissions', callback: (_source: this) => void): number;

    connect_after(signal: 'initialize-notification-permissions', callback: (_source: this) => void): number;

    emit(signal: 'initialize-notification-permissions'): void;

    connect(signal: 'initialize-web-extensions', callback: (_source: this) => void): number;

    connect_after(signal: 'initialize-web-extensions', callback: (_source: this) => void): number;

    emit(signal: 'initialize-web-extensions'): void;

    connect(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => boolean): number;

    connect_after(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => boolean): number;

    emit(signal: 'user-message-received', message: UserMessage): void;

    // Constructors

    static ['new'](): WebContext;

    static new_ephemeral(): WebContext;

    static new_with_website_data_manager(manager: WebsiteDataManager): WebContext;

    // Members

    add_path_to_sandbox(path: string, read_only: boolean): void;

    allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void;

    clear_cache(): void;

    download_uri(uri: string): Download;

    get_cache_model(): CacheModel;

    get_cookie_manager(): CookieManager;

    get_favicon_database(): FaviconDatabase;

    get_favicon_database_directory(): string;

    get_geolocation_manager(): GeolocationManager;

    get_plugins(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_plugins_finish(result: Gio.AsyncResult): Plugin[];

    get_process_model(): ProcessModel;

    get_sandbox_enabled(): boolean;

    get_security_manager(): SecurityManager;

    get_spell_checking_enabled(): boolean;

    get_spell_checking_languages(): string[];

    get_tls_errors_policy(): TLSErrorsPolicy;

    get_use_system_appearance_for_scrollbars(): boolean;

    get_web_process_count_limit(): number;

    get_website_data_manager(): WebsiteDataManager;

    initialize_notification_permissions(allowed_origins: SecurityOrigin[], disallowed_origins: SecurityOrigin[]): void;

    is_automation_allowed(): boolean;

    is_ephemeral(): boolean;

    prefetch_dns(hostname: string): void;

    register_uri_scheme(scheme: string, callback: URISchemeRequestCallback): void;

    send_message_to_all_extensions(message: UserMessage): void;

    set_additional_plugins_directory(directory: string): void;

    set_automation_allowed(allowed: boolean): void;

    set_cache_model(cache_model: CacheModel): void;

    set_disk_cache_directory(directory: string): void;

    set_favicon_database_directory(path?: string | null): void;

    set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings?: NetworkProxySettings | null): void;

    set_preferred_languages(languages?: string[] | null): void;

    set_process_model(process_model: ProcessModel): void;

    set_sandbox_enabled(enabled: boolean): void;

    set_spell_checking_enabled(enabled: boolean): void;

    set_spell_checking_languages(languages: string[]): void;

    set_tls_errors_policy(policy: TLSErrorsPolicy): void;

    set_use_system_appearance_for_scrollbars(enabled: boolean): void;

    set_web_extensions_directory(directory: string): void;

    set_web_extensions_initialization_user_data(user_data: GLib.Variant): void;

    set_web_process_count_limit(limit: number): void;

    vfunc_automation_started(session: AutomationSession): void;

    vfunc_download_started(download: Download): void;

    vfunc_initialize_notification_permissions(): void;

    vfunc_initialize_web_extensions(): void;

    vfunc_user_message_received(message: UserMessage): boolean;

    static get_default(): WebContext;
}

export namespace WebInspector {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        attached_height: number;
        attachedHeight: number;
        can_attach: boolean;
        canAttach: boolean;
        inspected_uri: string;
        inspectedUri: string;
    }
}

export class WebInspector extends GObject.Object {
    static $gtype: GObject.GType<WebInspector>;

    constructor(properties?: Partial<WebInspector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebInspector.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attached_height: number;
    attachedHeight: number;
    can_attach: boolean;
    canAttach: boolean;
    inspected_uri: string;
    inspectedUri: string;

    // Fields
    priv: WebInspectorPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'attach', callback: (_source: this) => boolean): number;

    connect_after(signal: 'attach', callback: (_source: this) => boolean): number;

    emit(signal: 'attach'): void;

    connect(signal: 'bring-to-front', callback: (_source: this) => boolean): number;

    connect_after(signal: 'bring-to-front', callback: (_source: this) => boolean): number;

    emit(signal: 'bring-to-front'): void;

    connect(signal: 'closed', callback: (_source: this) => void): number;

    connect_after(signal: 'closed', callback: (_source: this) => void): number;

    emit(signal: 'closed'): void;

    connect(signal: 'detach', callback: (_source: this) => boolean): number;

    connect_after(signal: 'detach', callback: (_source: this) => boolean): number;

    emit(signal: 'detach'): void;

    connect(signal: 'open-window', callback: (_source: this) => boolean): number;

    connect_after(signal: 'open-window', callback: (_source: this) => boolean): number;

    emit(signal: 'open-window'): void;

    // Members

    attach(): void;

    close(): void;

    detach(): void;

    get_attached_height(): number;

    get_can_attach(): boolean;

    get_inspected_uri(): string;

    get_web_view(): WebViewBase;

    is_attached(): boolean;

    show(): void;
}

export namespace WebResource {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        response: URIResponse;
        uri: string;
    }
}

export class WebResource extends GObject.Object {
    static $gtype: GObject.GType<WebResource>;

    constructor(properties?: Partial<WebResource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebResource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    response: URIResponse;
    uri: string;

    // Fields
    priv: WebResourcePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'failed', callback: (_source: this, error: GLib.Error) => void): number;

    connect_after(signal: 'failed', callback: (_source: this, error: GLib.Error) => void): number;

    emit(signal: 'failed', error: GLib.Error): void;

    connect(
        signal: 'failed-with-tls-errors',
        callback: (_source: this, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void
    ): number;

    connect_after(
        signal: 'failed-with-tls-errors',
        callback: (_source: this, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void
    ): number;

    emit(signal: 'failed-with-tls-errors', certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    connect(signal: 'received-data', callback: (_source: this, data_length: number) => void): number;

    connect_after(signal: 'received-data', callback: (_source: this, data_length: number) => void): number;

    emit(signal: 'received-data', data_length: number): void;

    connect(
        signal: 'sent-request',
        callback: (_source: this, request: URIRequest, redirected_response: URIResponse) => void
    ): number;

    connect_after(
        signal: 'sent-request',
        callback: (_source: this, request: URIRequest, redirected_response: URIResponse) => void
    ): number;

    emit(signal: 'sent-request', request: URIRequest, redirected_response: URIResponse): void;

    // Members

    get_data(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
    get_data(...args: never[]): never;

    get_data_finish(result: Gio.AsyncResult): Uint8Array;

    get_response(): URIResponse;

    get_uri(): string;
}

export namespace WebView {
    export interface ConstructorProperties extends WebViewBase.ConstructorProperties {
        [key: string]: any;

        automation_presentation_type: AutomationBrowsingContextPresentation;
        automationPresentationType: AutomationBrowsingContextPresentation;
        editable: boolean;
        estimated_load_progress: number;
        estimatedLoadProgress: number;
        favicon: any;
        is_controlled_by_automation: boolean;
        isControlledByAutomation: boolean;
        is_ephemeral: boolean;
        isEphemeral: boolean;
        is_loading: boolean;
        isLoading: boolean;
        is_muted: boolean;
        isMuted: boolean;
        is_playing_audio: boolean;
        isPlayingAudio: boolean;
        page_id: number;
        pageId: number;
        related_view: WebView;
        relatedView: WebView;
        settings: Settings;
        title: string;
        uri: string;
        user_content_manager: UserContentManager;
        userContentManager: UserContentManager;
        web_context: WebContext;
        webContext: WebContext;
        website_policies: WebsitePolicies;
        websitePolicies: WebsitePolicies;
        zoom_level: number;
        zoomLevel: number;
    }
}

export class WebView extends WebViewBase implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WebView>;

    constructor(properties?: Partial<WebView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    automation_presentation_type: AutomationBrowsingContextPresentation;
    automationPresentationType: AutomationBrowsingContextPresentation;
    editable: boolean;
    estimated_load_progress: number;
    estimatedLoadProgress: number;
    favicon: any;
    is_controlled_by_automation: boolean;
    isControlledByAutomation: boolean;
    is_ephemeral: boolean;
    isEphemeral: boolean;
    is_loading: boolean;
    isLoading: boolean;
    is_muted: boolean;
    isMuted: boolean;
    is_playing_audio: boolean;
    isPlayingAudio: boolean;
    page_id: number;
    pageId: number;
    related_view: WebView;
    relatedView: WebView;
    settings: Settings;
    title: string;
    uri: string;
    user_content_manager: UserContentManager;
    userContentManager: UserContentManager;
    web_context: WebContext;
    webContext: WebContext;
    website_policies: WebsitePolicies;
    websitePolicies: WebsitePolicies;
    zoom_level: number;
    zoomLevel: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'authenticate', callback: (_source: this, request: AuthenticationRequest) => boolean): number;

    connect_after(signal: 'authenticate', callback: (_source: this, request: AuthenticationRequest) => boolean): number;

    emit(signal: 'authenticate', request: AuthenticationRequest): void;

    connect(signal: 'close', callback: (_source: this) => void): number;

    connect_after(signal: 'close', callback: (_source: this) => void): number;

    emit(signal: 'close'): void;

    connect(
        signal: 'context-menu',
        callback: (
            _source: this,
            context_menu: ContextMenu,
            event: Gdk.Event,
            hit_test_result: HitTestResult
        ) => boolean
    ): number;

    connect_after(
        signal: 'context-menu',
        callback: (
            _source: this,
            context_menu: ContextMenu,
            event: Gdk.Event,
            hit_test_result: HitTestResult
        ) => boolean
    ): number;

    emit(signal: 'context-menu', context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): void;

    connect(signal: 'context-menu-dismissed', callback: (_source: this) => void): number;

    connect_after(signal: 'context-menu-dismissed', callback: (_source: this) => void): number;

    emit(signal: 'context-menu-dismissed'): void;

    connect(signal: 'create', callback: (_source: this, navigation_action: NavigationAction) => Gtk.Widget): number;

    connect_after(
        signal: 'create',
        callback: (_source: this, navigation_action: NavigationAction) => Gtk.Widget
    ): number;

    emit(signal: 'create', navigation_action: NavigationAction): void;

    connect(
        signal: 'decide-policy',
        callback: (_source: this, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean
    ): number;

    connect_after(
        signal: 'decide-policy',
        callback: (_source: this, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean
    ): number;

    emit(signal: 'decide-policy', decision: PolicyDecision, decision_type: PolicyDecisionType): void;

    connect(signal: 'enter-fullscreen', callback: (_source: this) => boolean): number;

    connect_after(signal: 'enter-fullscreen', callback: (_source: this) => boolean): number;

    emit(signal: 'enter-fullscreen'): void;

    connect(
        signal: 'insecure-content-detected',
        callback: (_source: this, event: InsecureContentEvent) => void
    ): number;

    connect_after(
        signal: 'insecure-content-detected',
        callback: (_source: this, event: InsecureContentEvent) => void
    ): number;

    emit(signal: 'insecure-content-detected', event: InsecureContentEvent): void;

    connect(signal: 'leave-fullscreen', callback: (_source: this) => boolean): number;

    connect_after(signal: 'leave-fullscreen', callback: (_source: this) => boolean): number;

    emit(signal: 'leave-fullscreen'): void;

    connect(signal: 'load-changed', callback: (_source: this, load_event: LoadEvent) => void): number;

    connect_after(signal: 'load-changed', callback: (_source: this, load_event: LoadEvent) => void): number;

    emit(signal: 'load-changed', load_event: LoadEvent): void;

    connect(
        signal: 'load-failed',
        callback: (_source: this, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean
    ): number;

    connect_after(
        signal: 'load-failed',
        callback: (_source: this, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean
    ): number;

    emit(signal: 'load-failed', load_event: LoadEvent, failing_uri: string, error: GLib.Error): void;

    connect(
        signal: 'load-failed-with-tls-errors',
        callback: (
            _source: this,
            failing_uri: string,
            certificate: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;

    connect_after(
        signal: 'load-failed-with-tls-errors',
        callback: (
            _source: this,
            failing_uri: string,
            certificate: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;

    emit(
        signal: 'load-failed-with-tls-errors',
        failing_uri: string,
        certificate: Gio.TlsCertificate,
        errors: Gio.TlsCertificateFlags
    ): void;

    connect(
        signal: 'mouse-target-changed',
        callback: (_source: this, hit_test_result: HitTestResult, modifiers: number) => void
    ): number;

    connect_after(
        signal: 'mouse-target-changed',
        callback: (_source: this, hit_test_result: HitTestResult, modifiers: number) => void
    ): number;

    emit(signal: 'mouse-target-changed', hit_test_result: HitTestResult, modifiers: number): void;

    connect(signal: 'permission-request', callback: (_source: this, request: PermissionRequest) => boolean): number;

    connect_after(
        signal: 'permission-request',
        callback: (_source: this, request: PermissionRequest) => boolean
    ): number;

    emit(signal: 'permission-request', request: PermissionRequest): void;

    connect(signal: 'print', callback: (_source: this, print_operation: PrintOperation) => boolean): number;

    connect_after(signal: 'print', callback: (_source: this, print_operation: PrintOperation) => boolean): number;

    emit(signal: 'print', print_operation: PrintOperation): void;

    connect(signal: 'ready-to-show', callback: (_source: this) => void): number;

    connect_after(signal: 'ready-to-show', callback: (_source: this) => void): number;

    emit(signal: 'ready-to-show'): void;

    connect(
        signal: 'resource-load-started',
        callback: (_source: this, resource: WebResource, request: URIRequest) => void
    ): number;

    connect_after(
        signal: 'resource-load-started',
        callback: (_source: this, resource: WebResource, request: URIRequest) => void
    ): number;

    emit(signal: 'resource-load-started', resource: WebResource, request: URIRequest): void;

    connect(signal: 'run-as-modal', callback: (_source: this) => void): number;

    connect_after(signal: 'run-as-modal', callback: (_source: this) => void): number;

    emit(signal: 'run-as-modal'): void;

    connect(signal: 'run-color-chooser', callback: (_source: this, request: ColorChooserRequest) => boolean): number;

    connect_after(
        signal: 'run-color-chooser',
        callback: (_source: this, request: ColorChooserRequest) => boolean
    ): number;

    emit(signal: 'run-color-chooser', request: ColorChooserRequest): void;

    connect(signal: 'run-file-chooser', callback: (_source: this, request: FileChooserRequest) => boolean): number;

    connect_after(
        signal: 'run-file-chooser',
        callback: (_source: this, request: FileChooserRequest) => boolean
    ): number;

    emit(signal: 'run-file-chooser', request: FileChooserRequest): void;

    connect(signal: 'script-dialog', callback: (_source: this, dialog: ScriptDialog) => boolean): number;

    connect_after(signal: 'script-dialog', callback: (_source: this, dialog: ScriptDialog) => boolean): number;

    emit(signal: 'script-dialog', dialog: ScriptDialog): void;

    connect(signal: 'show-notification', callback: (_source: this, notification: Notification) => boolean): number;

    connect_after(
        signal: 'show-notification',
        callback: (_source: this, notification: Notification) => boolean
    ): number;

    emit(signal: 'show-notification', notification: Notification): void;

    connect(
        signal: 'show-option-menu',
        callback: (_source: this, object: OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean
    ): number;

    connect_after(
        signal: 'show-option-menu',
        callback: (_source: this, object: OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean
    ): number;

    emit(signal: 'show-option-menu', object: OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle): void;

    connect(signal: 'submit-form', callback: (_source: this, request: FormSubmissionRequest) => void): number;

    connect_after(signal: 'submit-form', callback: (_source: this, request: FormSubmissionRequest) => void): number;

    emit(signal: 'submit-form', request: FormSubmissionRequest): void;

    connect(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => boolean): number;

    connect_after(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => boolean): number;

    emit(signal: 'user-message-received', message: UserMessage): void;

    connect(signal: 'web-process-crashed', callback: (_source: this) => boolean): number;

    connect_after(signal: 'web-process-crashed', callback: (_source: this) => boolean): number;

    emit(signal: 'web-process-crashed'): void;

    connect(
        signal: 'web-process-terminated',
        callback: (_source: this, reason: WebProcessTerminationReason) => void
    ): number;

    connect_after(
        signal: 'web-process-terminated',
        callback: (_source: this, reason: WebProcessTerminationReason) => void
    ): number;

    emit(signal: 'web-process-terminated', reason: WebProcessTerminationReason): void;

    // Constructors

    static ['new'](): WebView;

    static new_with_context(context: WebContext): WebView;

    static new_with_related_view(web_view: WebView): WebView;

    static new_with_settings(settings: Settings): WebView;

    static new_with_user_content_manager(user_content_manager: UserContentManager): WebView;

    // Members

    can_execute_editing_command(
        command: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;

    can_go_back(): boolean;

    can_go_forward(): boolean;

    can_show_mime_type(mime_type: string): boolean;

    download_uri(uri: string): Download;

    execute_editing_command(command: string): void;

    execute_editing_command_with_argument(command: string, argument: string): void;

    get_automation_presentation_type(): AutomationBrowsingContextPresentation;

    get_back_forward_list(): BackForwardList;

    get_background_color(): Gdk.RGBA;

    get_context(): WebContext;

    get_custom_charset(): string;

    get_editor_state(): EditorState;

    get_estimated_load_progress(): number;

    get_favicon(): cairo.Surface;

    get_find_controller(): FindController;

    get_input_method_context(): InputMethodContext | null;

    get_inspector(): WebInspector;

    get_is_muted(): boolean;

    get_main_resource(): WebResource;

    get_page_id(): number;

    get_session_state(): WebViewSessionState;

    get_settings(): Settings;
    get_settings(...args: never[]): never;

    get_snapshot(
        region: SnapshotRegion,
        options: SnapshotOptions,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;

    get_title(): string;

    get_tls_info(): [boolean, Gio.TlsCertificate, Gio.TlsCertificateFlags];

    get_uri(): string;

    get_user_content_manager(): UserContentManager;

    get_website_data_manager(): WebsiteDataManager;

    get_website_policies(): WebsitePolicies;

    get_window_properties(): WindowProperties;

    get_zoom_level(): number;

    go_back(): void;

    go_forward(): void;

    go_to_back_forward_list_item(list_item: BackForwardListItem): void;

    is_editable(): boolean;

    load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void;

    load_bytes(
        bytes: GLib.Bytes | Uint8Array,
        mime_type?: string | null,
        encoding?: string | null,
        base_uri?: string | null
    ): void;

    load_html(content: string, base_uri?: string | null): void;

    load_plain_text(plain_text: string): void;

    load_request(request: URIRequest): void;

    load_uri(uri: string): void;

    reload(): void;

    reload_bypass_cache(): void;

    restore_session_state(state: WebViewSessionState): void;

    run_javascript(
        script: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;

    run_javascript_from_gresource(
        resource: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult;

    run_javascript_in_world(
        script: string,
        world_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;

    save(
        save_mode: SaveMode,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_finish(result: Gio.AsyncResult): Gio.InputStream;

    save_to_file(
        file: Gio.File,
        save_mode: SaveMode,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    save_to_file_finish(result: Gio.AsyncResult): boolean;

    send_message_to_page(
        message: UserMessage,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_message_to_page_finish(result: Gio.AsyncResult): UserMessage;

    set_background_color(rgba: Gdk.RGBA): void;

    set_custom_charset(charset?: string | null): void;

    set_editable(editable: boolean): void;

    set_input_method_context(context?: InputMethodContext | null): void;

    set_is_muted(muted: boolean): void;

    set_settings(settings: Settings): void;

    set_zoom_level(zoom_level: number): void;

    stop_loading(): void;

    try_close(): void;

    vfunc_authenticate(request: AuthenticationRequest): boolean;

    vfunc_close(): void;

    vfunc_context_menu(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean;

    vfunc_context_menu_dismissed(): void;

    vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean;

    vfunc_enter_fullscreen(): boolean;

    vfunc_insecure_content_detected(event: InsecureContentEvent): void;

    vfunc_leave_fullscreen(): boolean;

    vfunc_load_changed(load_event: LoadEvent): void;

    vfunc_load_failed(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean;

    vfunc_load_failed_with_tls_errors(
        failing_uri: string,
        certificate: Gio.TlsCertificate,
        errors: Gio.TlsCertificateFlags
    ): boolean;

    vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void;

    vfunc_permission_request(permission_request: PermissionRequest): boolean;

    vfunc_print(print_operation: PrintOperation): boolean;

    vfunc_ready_to_show(): void;

    vfunc_resource_load_started(resource: WebResource, request: URIRequest): void;

    vfunc_run_as_modal(): void;

    vfunc_run_color_chooser(request: ColorChooserRequest): boolean;

    vfunc_run_file_chooser(request: FileChooserRequest): boolean;

    vfunc_script_dialog(dialog: ScriptDialog): boolean;

    vfunc_show_notification(notification: Notification): boolean;

    vfunc_show_option_menu(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean;

    vfunc_submit_form(request: FormSubmissionRequest): void;

    vfunc_user_message_received(message: UserMessage): boolean;

    vfunc_web_process_crashed(): boolean;

    vfunc_web_process_terminated(reason: WebProcessTerminationReason): void;

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

export namespace WebViewBase {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;
    }
}

export class WebViewBase extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WebViewBase>;

    constructor(properties?: Partial<WebViewBase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebViewBase.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parentInstance: Gtk.Container;

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

export namespace WebsiteDataAccessPermissionRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class WebsiteDataAccessPermissionRequest extends GObject.Object implements PermissionRequest {
    static $gtype: GObject.GType<WebsiteDataAccessPermissionRequest>;

    constructor(properties?: Partial<WebsiteDataAccessPermissionRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebsiteDataAccessPermissionRequest.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_current_domain(): string;

    get_requesting_domain(): string;

    // Implemented Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export namespace WebsiteDataManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        base_cache_directory: string;
        baseCacheDirectory: string;
        base_data_directory: string;
        baseDataDirectory: string;
        disk_cache_directory: string;
        diskCacheDirectory: string;
        dom_cache_directory: string;
        domCacheDirectory: string;
        hsts_cache_directory: string;
        hstsCacheDirectory: string;
        indexeddb_directory: string;
        indexeddbDirectory: string;
        is_ephemeral: boolean;
        isEphemeral: boolean;
        itp_directory: string;
        itpDirectory: string;
        local_storage_directory: string;
        localStorageDirectory: string;
        offline_application_cache_directory: string;
        offlineApplicationCacheDirectory: string;
        service_worker_registrations_directory: string;
        serviceWorkerRegistrationsDirectory: string;
        websql_directory: string;
        websqlDirectory: string;
    }
}

export class WebsiteDataManager extends GObject.Object {
    static $gtype: GObject.GType<WebsiteDataManager>;

    constructor(properties?: Partial<WebsiteDataManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebsiteDataManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_cache_directory: string;
    baseCacheDirectory: string;
    base_data_directory: string;
    baseDataDirectory: string;
    disk_cache_directory: string;
    diskCacheDirectory: string;
    dom_cache_directory: string;
    domCacheDirectory: string;
    hsts_cache_directory: string;
    hstsCacheDirectory: string;
    indexeddb_directory: string;
    indexeddbDirectory: string;
    is_ephemeral: boolean;
    isEphemeral: boolean;
    itp_directory: string;
    itpDirectory: string;
    local_storage_directory: string;
    localStorageDirectory: string;
    offline_application_cache_directory: string;
    offlineApplicationCacheDirectory: string;
    service_worker_registrations_directory: string;
    serviceWorkerRegistrationsDirectory: string;
    websql_directory: string;
    websqlDirectory: string;

    // Fields
    priv: WebsiteDataManagerPrivate;

    // Constructors

    static new_ephemeral(): WebsiteDataManager;

    // Members

    clear(
        types: WebsiteDataTypes,
        timespan: GLib.TimeSpan,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    clear_finish(result: Gio.AsyncResult): boolean;

    fetch(
        types: WebsiteDataTypes,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    fetch_finish(result: Gio.AsyncResult): WebsiteData[];

    get_base_cache_directory(): string | null;

    get_base_data_directory(): string | null;

    get_cookie_manager(): CookieManager;

    get_disk_cache_directory(): string | null;

    get_dom_cache_directory(): string | null;

    get_hsts_cache_directory(): string | null;

    get_indexeddb_directory(): string | null;

    get_itp_directory(): string | null;

    get_itp_enabled(): boolean;

    get_itp_summary(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[];

    get_local_storage_directory(): string | null;

    get_offline_application_cache_directory(): string | null;

    get_persistent_credential_storage_enabled(): boolean;

    get_service_worker_registrations_directory(): string | null;

    get_websql_directory(): string | null;

    remove(
        types: WebsiteDataTypes,
        website_data: WebsiteData[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_finish(result: Gio.AsyncResult): boolean;

    set_itp_enabled(enabled: boolean): void;

    set_persistent_credential_storage_enabled(enabled: boolean): void;
}

export namespace WebsitePolicies {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        autoplay: AutoplayPolicy;
    }
}

export class WebsitePolicies extends GObject.Object {
    static $gtype: GObject.GType<WebsitePolicies>;

    constructor(properties?: Partial<WebsitePolicies.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebsitePolicies.ConstructorProperties>, ...args: any[]): void;

    // Properties
    autoplay: AutoplayPolicy;

    // Fields
    priv: WebsitePoliciesPrivate;

    // Constructors

    static ['new'](): WebsitePolicies;

    // Members

    get_autoplay_policy(): AutoplayPolicy;
}

export namespace WindowProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        fullscreen: boolean;
        geometry: Gdk.Rectangle;
        locationbar_visible: boolean;
        locationbarVisible: boolean;
        menubar_visible: boolean;
        menubarVisible: boolean;
        resizable: boolean;
        scrollbars_visible: boolean;
        scrollbarsVisible: boolean;
        statusbar_visible: boolean;
        statusbarVisible: boolean;
        toolbar_visible: boolean;
        toolbarVisible: boolean;
    }
}

export class WindowProperties extends GObject.Object {
    static $gtype: GObject.GType<WindowProperties>;

    constructor(properties?: Partial<WindowProperties.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WindowProperties.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fullscreen: boolean;
    geometry: Gdk.Rectangle;
    locationbar_visible: boolean;
    locationbarVisible: boolean;
    menubar_visible: boolean;
    menubarVisible: boolean;
    resizable: boolean;
    scrollbars_visible: boolean;
    scrollbarsVisible: boolean;
    statusbar_visible: boolean;
    statusbarVisible: boolean;
    toolbar_visible: boolean;
    toolbarVisible: boolean;

    // Members

    get_fullscreen(): boolean;

    get_geometry(): Gdk.Rectangle;

    get_locationbar_visible(): boolean;

    get_menubar_visible(): boolean;

    get_resizable(): boolean;

    get_scrollbars_visible(): boolean;

    get_statusbar_visible(): boolean;

    get_toolbar_visible(): boolean;
}

export class ApplicationInfo {
    static $gtype: GObject.GType<ApplicationInfo>;

    constructor();
    constructor(copy: ApplicationInfo);

    // Constructors
    static ['new'](): ApplicationInfo;

    // Members
    get_name(): string;

    get_version(): [number, number | null, number | null];

    ref(): ApplicationInfo;

    set_name(name: string): void;

    set_version(major: number, minor: number, micro: number): void;

    unref(): void;
}

export class AuthenticationRequestPrivate {
    static $gtype: GObject.GType<AuthenticationRequestPrivate>;

    constructor(copy: AuthenticationRequestPrivate);
}

export class AutomationSessionPrivate {
    static $gtype: GObject.GType<AutomationSessionPrivate>;

    constructor(copy: AutomationSessionPrivate);
}

export class BackForwardListItemPrivate {
    static $gtype: GObject.GType<BackForwardListItemPrivate>;

    constructor(copy: BackForwardListItemPrivate);
}

export class BackForwardListPrivate {
    static $gtype: GObject.GType<BackForwardListPrivate>;

    constructor(copy: BackForwardListPrivate);
}

export class ColorChooserRequestPrivate {
    static $gtype: GObject.GType<ColorChooserRequestPrivate>;

    constructor(copy: ColorChooserRequestPrivate);
}

export class ContextMenuItemPrivate {
    static $gtype: GObject.GType<ContextMenuItemPrivate>;

    constructor(copy: ContextMenuItemPrivate);
}

export class ContextMenuPrivate {
    static $gtype: GObject.GType<ContextMenuPrivate>;

    constructor(copy: ContextMenuPrivate);
}

export class CookieManagerPrivate {
    static $gtype: GObject.GType<CookieManagerPrivate>;

    constructor(copy: CookieManagerPrivate);
}

export class Credential {
    static $gtype: GObject.GType<Credential>;

    constructor(username: string, password: string, persistence: CredentialPersistence);
    constructor(copy: Credential);

    // Constructors
    static ['new'](username: string, password: string, persistence: CredentialPersistence): Credential;

    // Members
    copy(): Credential;

    free(): void;

    get_password(): string;

    get_persistence(): CredentialPersistence;

    get_username(): string;

    has_password(): boolean;
}

export class DeviceInfoPermissionRequestPrivate {
    static $gtype: GObject.GType<DeviceInfoPermissionRequestPrivate>;

    constructor(copy: DeviceInfoPermissionRequestPrivate);
}

export class DownloadPrivate {
    static $gtype: GObject.GType<DownloadPrivate>;

    constructor(copy: DownloadPrivate);
}

export class EditorStatePrivate {
    static $gtype: GObject.GType<EditorStatePrivate>;

    constructor(copy: EditorStatePrivate);
}

export class FaviconDatabasePrivate {
    static $gtype: GObject.GType<FaviconDatabasePrivate>;

    constructor(copy: FaviconDatabasePrivate);
}

export class FileChooserRequestPrivate {
    static $gtype: GObject.GType<FileChooserRequestPrivate>;

    constructor(copy: FileChooserRequestPrivate);
}

export class FindControllerPrivate {
    static $gtype: GObject.GType<FindControllerPrivate>;

    constructor(copy: FindControllerPrivate);
}

export class FormSubmissionRequestPrivate {
    static $gtype: GObject.GType<FormSubmissionRequestPrivate>;

    constructor(copy: FormSubmissionRequestPrivate);
}

export class GeolocationManagerPrivate {
    static $gtype: GObject.GType<GeolocationManagerPrivate>;

    constructor(copy: GeolocationManagerPrivate);
}

export class GeolocationPermissionRequestPrivate {
    static $gtype: GObject.GType<GeolocationPermissionRequestPrivate>;

    constructor(copy: GeolocationPermissionRequestPrivate);
}

export class GeolocationPosition {
    static $gtype: GObject.GType<GeolocationPosition>;

    constructor(latitude: number, longitude: number, accuracy: number);
    constructor(copy: GeolocationPosition);

    // Constructors
    static ['new'](latitude: number, longitude: number, accuracy: number): GeolocationPosition;

    // Members
    copy(): GeolocationPosition;

    free(): void;

    set_altitude(altitude: number): void;

    set_altitude_accuracy(altitude_accuracy: number): void;

    set_heading(heading: number): void;

    set_speed(speed: number): void;

    set_timestamp(timestamp: number): void;
}

export class HitTestResultPrivate {
    static $gtype: GObject.GType<HitTestResultPrivate>;

    constructor(copy: HitTestResultPrivate);
}

export class ITPFirstParty {
    static $gtype: GObject.GType<ITPFirstParty>;

    constructor(copy: ITPFirstParty);

    // Members
    get_domain(): string;

    get_last_update_time(): GLib.DateTime;

    get_website_data_access_allowed(): boolean;

    ref(): ITPFirstParty;

    unref(): void;
}

export class ITPThirdParty {
    static $gtype: GObject.GType<ITPThirdParty>;

    constructor(copy: ITPThirdParty);

    // Members
    get_domain(): string;

    get_first_parties(): ITPFirstParty[];

    ref(): ITPThirdParty;

    unref(): void;
}

export class InputMethodContextPrivate {
    static $gtype: GObject.GType<InputMethodContextPrivate>;

    constructor(copy: InputMethodContextPrivate);
}

export class InputMethodUnderline {
    static $gtype: GObject.GType<InputMethodUnderline>;

    constructor(start_offset: number, end_offset: number);
    constructor(copy: InputMethodUnderline);

    // Constructors
    static ['new'](start_offset: number, end_offset: number): InputMethodUnderline;

    // Members
    copy(): InputMethodUnderline;

    free(): void;

    set_color(rgba?: Gdk.RGBA | null): void;
}

export class InstallMissingMediaPluginsPermissionRequestPrivate {
    static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequestPrivate>;

    constructor(copy: InstallMissingMediaPluginsPermissionRequestPrivate);
}

export class JavascriptResult {
    static $gtype: GObject.GType<JavascriptResult>;

    constructor(copy: JavascriptResult);

    // Members
    get_js_value(): JavaScriptCore.Value;

    ref(): JavascriptResult;

    unref(): void;
}

export class MimeInfo {
    static $gtype: GObject.GType<MimeInfo>;

    constructor(copy: MimeInfo);

    // Members
    get_description(): string;

    get_extensions(): string[];

    get_mime_type(): string;

    ref(): MimeInfo;

    unref(): void;
}

export class NavigationAction {
    static $gtype: GObject.GType<NavigationAction>;

    constructor(copy: NavigationAction);

    // Members
    copy(): NavigationAction;

    free(): void;

    get_modifiers(): number;

    get_mouse_button(): number;

    get_navigation_type(): NavigationType;

    get_request(): URIRequest;

    is_redirect(): boolean;

    is_user_gesture(): boolean;
}

export class NavigationPolicyDecisionPrivate {
    static $gtype: GObject.GType<NavigationPolicyDecisionPrivate>;

    constructor(copy: NavigationPolicyDecisionPrivate);
}

export class NetworkProxySettings {
    static $gtype: GObject.GType<NetworkProxySettings>;

    constructor(default_proxy_uri?: string | null, ignore_hosts?: string[] | null);
    constructor(copy: NetworkProxySettings);

    // Constructors
    static ['new'](default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings;

    // Members
    add_proxy_for_scheme(scheme: string, proxy_uri: string): void;

    copy(): NetworkProxySettings;

    free(): void;
}

export class NotificationPermissionRequestPrivate {
    static $gtype: GObject.GType<NotificationPermissionRequestPrivate>;

    constructor(copy: NotificationPermissionRequestPrivate);
}

export class NotificationPrivate {
    static $gtype: GObject.GType<NotificationPrivate>;

    constructor(copy: NotificationPrivate);
}

export class OptionMenuItem {
    static $gtype: GObject.GType<OptionMenuItem>;

    constructor(copy: OptionMenuItem);

    // Members
    copy(): OptionMenuItem;

    free(): void;

    get_label(): string;

    get_tooltip(): string;

    is_enabled(): boolean;

    is_group_child(): boolean;

    is_group_label(): boolean;

    is_selected(): boolean;
}

export class OptionMenuPrivate {
    static $gtype: GObject.GType<OptionMenuPrivate>;

    constructor(copy: OptionMenuPrivate);
}

export class PluginPrivate {
    static $gtype: GObject.GType<PluginPrivate>;

    constructor(copy: PluginPrivate);
}

export class PointerLockPermissionRequestPrivate {
    static $gtype: GObject.GType<PointerLockPermissionRequestPrivate>;

    constructor(copy: PointerLockPermissionRequestPrivate);
}

export class PolicyDecisionPrivate {
    static $gtype: GObject.GType<PolicyDecisionPrivate>;

    constructor(copy: PolicyDecisionPrivate);
}

export class PrintCustomWidgetPrivate {
    static $gtype: GObject.GType<PrintCustomWidgetPrivate>;

    constructor(copy: PrintCustomWidgetPrivate);
}

export class PrintOperationPrivate {
    static $gtype: GObject.GType<PrintOperationPrivate>;

    constructor(copy: PrintOperationPrivate);
}

export class ResponsePolicyDecisionPrivate {
    static $gtype: GObject.GType<ResponsePolicyDecisionPrivate>;

    constructor(copy: ResponsePolicyDecisionPrivate);
}

export class ScriptDialog {
    static $gtype: GObject.GType<ScriptDialog>;

    constructor(copy: ScriptDialog);

    // Members
    close(): void;

    confirm_set_confirmed(confirmed: boolean): void;

    get_dialog_type(): ScriptDialogType;

    get_message(): string;

    prompt_get_default_text(): string;

    prompt_set_text(text: string): void;

    ref(): ScriptDialog;

    unref(): void;
}

export class SecurityManagerPrivate {
    static $gtype: GObject.GType<SecurityManagerPrivate>;

    constructor(copy: SecurityManagerPrivate);
}

export class SecurityOrigin {
    static $gtype: GObject.GType<SecurityOrigin>;

    constructor(protocol: string, host: string, port: number);
    constructor(copy: SecurityOrigin);

    // Constructors
    static ['new'](protocol: string, host: string, port: number): SecurityOrigin;

    static new_for_uri(uri: string): SecurityOrigin;

    // Members
    get_host(): string | null;

    get_port(): number;

    get_protocol(): string | null;

    is_opaque(): boolean;

    ref(): SecurityOrigin;

    to_string(): string | null;

    unref(): void;
}

export class SettingsPrivate {
    static $gtype: GObject.GType<SettingsPrivate>;

    constructor(copy: SettingsPrivate);
}

export class URIRequestPrivate {
    static $gtype: GObject.GType<URIRequestPrivate>;

    constructor(copy: URIRequestPrivate);
}

export class URIResponsePrivate {
    static $gtype: GObject.GType<URIResponsePrivate>;

    constructor(copy: URIResponsePrivate);
}

export class URISchemeRequestPrivate {
    static $gtype: GObject.GType<URISchemeRequestPrivate>;

    constructor(copy: URISchemeRequestPrivate);
}

export class UserContentFilter {
    static $gtype: GObject.GType<UserContentFilter>;

    constructor(copy: UserContentFilter);

    // Members
    get_identifier(): string;

    ref(): UserContentFilter;

    unref(): void;
}

export class UserContentFilterStorePrivate {
    static $gtype: GObject.GType<UserContentFilterStorePrivate>;

    constructor(copy: UserContentFilterStorePrivate);
}

export class UserContentManagerPrivate {
    static $gtype: GObject.GType<UserContentManagerPrivate>;

    constructor(copy: UserContentManagerPrivate);
}

export class UserMediaPermissionRequestPrivate {
    static $gtype: GObject.GType<UserMediaPermissionRequestPrivate>;

    constructor(copy: UserMediaPermissionRequestPrivate);
}

export class UserMessagePrivate {
    static $gtype: GObject.GType<UserMessagePrivate>;

    constructor(copy: UserMessagePrivate);
}

export class UserScript {
    static $gtype: GObject.GType<UserScript>;

    constructor(
        source: string,
        injected_frames: UserContentInjectedFrames,
        injection_time: UserScriptInjectionTime,
        allow_list?: string[] | null,
        block_list?: string[] | null
    );

    constructor(copy: UserScript);

    // Constructors
    static ['new'](
        source: string,
        injected_frames: UserContentInjectedFrames,
        injection_time: UserScriptInjectionTime,
        allow_list?: string[] | null,
        block_list?: string[] | null
    ): UserScript;

    static new_for_world(
        source: string,
        injected_frames: UserContentInjectedFrames,
        injection_time: UserScriptInjectionTime,
        world_name: string,
        allow_list?: string[] | null,
        block_list?: string[] | null
    ): UserScript;

    // Members
    ref(): UserScript;

    unref(): void;
}

export class UserStyleSheet {
    static $gtype: GObject.GType<UserStyleSheet>;

    constructor(
        source: string,
        injected_frames: UserContentInjectedFrames,
        level: UserStyleLevel,
        allow_list?: string[] | null,
        block_list?: string[] | null
    );

    constructor(copy: UserStyleSheet);

    // Constructors
    static ['new'](
        source: string,
        injected_frames: UserContentInjectedFrames,
        level: UserStyleLevel,
        allow_list?: string[] | null,
        block_list?: string[] | null
    ): UserStyleSheet;

    static new_for_world(
        source: string,
        injected_frames: UserContentInjectedFrames,
        level: UserStyleLevel,
        world_name: string,
        allow_list?: string[] | null,
        block_list?: string[] | null
    ): UserStyleSheet;

    // Members
    ref(): UserStyleSheet;

    unref(): void;
}

export class WebContextPrivate {
    static $gtype: GObject.GType<WebContextPrivate>;

    constructor(copy: WebContextPrivate);
}

export class WebInspectorPrivate {
    static $gtype: GObject.GType<WebInspectorPrivate>;

    constructor(copy: WebInspectorPrivate);
}

export class WebResourcePrivate {
    static $gtype: GObject.GType<WebResourcePrivate>;

    constructor(copy: WebResourcePrivate);
}

export class WebViewBasePrivate {
    static $gtype: GObject.GType<WebViewBasePrivate>;

    constructor(copy: WebViewBasePrivate);
}

export class WebViewPrivate {
    static $gtype: GObject.GType<WebViewPrivate>;

    constructor(copy: WebViewPrivate);
}

export class WebViewSessionState {
    static $gtype: GObject.GType<WebViewSessionState>;

    constructor(data: GLib.Bytes | Uint8Array);
    constructor(copy: WebViewSessionState);

    // Constructors
    static ['new'](data: GLib.Bytes | Uint8Array): WebViewSessionState;

    // Members
    ref(): WebViewSessionState;

    serialize(): GLib.Bytes;

    unref(): void;
}

export class WebsiteData {
    static $gtype: GObject.GType<WebsiteData>;

    constructor(copy: WebsiteData);

    // Members
    get_name(): string;

    get_size(types: WebsiteDataTypes): number;

    get_types(): WebsiteDataTypes;

    ref(): WebsiteData;

    unref(): void;
}

export class WebsiteDataAccessPermissionRequestPrivate {
    static $gtype: GObject.GType<WebsiteDataAccessPermissionRequestPrivate>;

    constructor(copy: WebsiteDataAccessPermissionRequestPrivate);
}

export class WebsiteDataManagerPrivate {
    static $gtype: GObject.GType<WebsiteDataManagerPrivate>;

    constructor(copy: WebsiteDataManagerPrivate);
}

export class WebsitePoliciesPrivate {
    static $gtype: GObject.GType<WebsitePoliciesPrivate>;

    constructor(copy: WebsitePoliciesPrivate);
}

export class WindowPropertiesPrivate {
    static $gtype: GObject.GType<WindowPropertiesPrivate>;

    constructor(copy: WindowPropertiesPrivate);
}

export interface PermissionRequestNamespace {
    $gtype: GObject.GType<PermissionRequest>;
    prototype: PermissionRequestPrototype;
}

export type PermissionRequest = PermissionRequestPrototype;

export interface PermissionRequestPrototype extends GObject.Object {
    // Members

    allow(): void;

    deny(): void;

    vfunc_allow(): void;

    vfunc_deny(): void;
}

export const PermissionRequest: PermissionRequestNamespace;
