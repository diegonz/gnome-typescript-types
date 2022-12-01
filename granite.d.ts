/**
 * Granite 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as GObject from './gobject';
import * as cairo from './cairo';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gdk from './gdk';
import * as Gtk from './gtk';
import * as Gio from './gio';
import * as Gee from './gee';
import * as Pango from './pango';
import * as Atk from './atk';

export const BADGE: string;
export const CATEGORY_EXPANDER: string;
export const CONTENT_VIEW: string;
export const CONTENT_VIEW_WINDOW: string;
export const COMPOSITED: string;
export const DECORATED_WINDOW: string;
export const H1_TEXT: string;
export const H2_TEXT: string;
export const H3_TEXT: string;
export const HELP_BUTTON: string;
export const OVERLAY_BAR: string;
export const POPOVER: string;
export const POPOVER_BG: string;
export const SOURCE_LIST: string;
export const THIN_PANE_SEPARATOR: string;
export const TITLE_TEXT: string;
export const STYLE_CLASS_ACCENT: string;
export const STYLE_CLASS_AVATAR: string;
export const STYLE_CLASS_BACK_BUTTON: string;
export const STYLE_CLASS_BADGE: string;
export const STYLE_CLASS_CARD: string;
export const STYLE_CLASS_CATEGORY_EXPANDER: string;
export const STYLE_CLASS_CHECKERBOARD: string;
export const STYLE_CLASS_COLOR_BUTTON: string;
export const STYLE_CLASS_H1_LABEL: string;
export const STYLE_CLASS_H2_LABEL: string;
export const STYLE_CLASS_H3_LABEL: string;
export const STYLE_CLASS_H4_LABEL: string;
export const STYLE_CLASS_KEYCAP: string;
export const STYLE_CLASS_MODE_SWITCH: string;
export const STYLE_CLASS_OVERLAY_BAR: string;
export const STYLE_CLASS_PRIMARY_LABEL: string;
export const STYLE_CLASS_ROUNDED: string;
export const STYLE_CLASS_SEEKBAR: string;
export const STYLE_CLASS_SOURCE_LIST: string;
export const STYLE_CLASS_STORAGEBAR: string;
export const STYLE_CLASS_TERMINAL: string;
export const STYLE_CLASS_WELCOME: string;

export function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string;

export function date_time_get_relative_datetime(date_time: GLib.DateTime): string;

export function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean;

export function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string;

export function date_time_seconds_to_time(seconds: number): string;

export function services_application_set_badge(count: number, _callback_?: Gio.AsyncReadyCallback<number> | null): void;

export function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;

export function services_application_set_badge_visible(
    visible: boolean,
    _callback_?: Gio.AsyncReadyCallback<boolean> | null
): void;

export function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;

export function services_application_set_progress(
    progress: number,
    _callback_?: Gio.AsyncReadyCallback<number> | null
): void;

export function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;

export function services_application_set_progress_visible(
    visible: boolean,
    _callback_?: Gio.AsyncReadyCallback<boolean> | null
): void;

export function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean;

export function widgets_utils_set_color_primary(
    window: Gtk.Widget,
    color: Gdk.RGBA,
    priority: number
): Gtk.CssProvider | null;

export function widgets_utils_set_theming(
    widget: Gtk.Widget,
    stylesheet: string,
    class_name: string | null,
    priority: number
): Gtk.CssProvider | null;

export function widgets_utils_set_theming_for_screen(
    screen: Gdk.Screen,
    stylesheet: string,
    priority: number
): Gtk.CssProvider | null;

export function widgets_utils_get_css_provider(stylesheet: string): Gtk.CssProvider | null;

export function widgets_utils_apply_text_style_to_label(text_style: TextStyle, label: Gtk.Label): void;

export function widgets_utils_get_default_close_button_position(): [boolean, CloseButtonPosition];

export function widgets_utils_get_button_layout_schema(): string | null;

export function widgets_storage_bar_item_description_get_class(
    description: WidgetsStorageBarItemDescription
): string | null;

export function widgets_storage_bar_item_description_get_name(description: WidgetsStorageBarItemDescription): string;

export function text_style_get_stylesheet(): [string, string];

export function accel_to_string(accel?: string | null): string;

export function markup_accel_tooltip(accels?: string[] | null, description?: string | null): string;

export function contrasting_foreground_color(bg_color: Gdk.RGBA): Gdk.RGBA;

export type WidgetsDroppedDelegate = () => void;

export namespace ServicesLogLevel {
    export const $gtype: GObject.GType<ServicesLogLevel>;
}

export enum ServicesLogLevel {
    DEBUG = 0,
    INFO = 1,
    NOTIFY = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
}

export class ContractorError extends GLib.Error {
    static $gtype: GObject.GType<ContractorError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ContractorError);

    // Properties
    static SERVICE_NOT_AVAILABLE: number;
}

export namespace WidgetsDynamicNotebookTabBarBehavior {
    export const $gtype: GObject.GType<WidgetsDynamicNotebookTabBarBehavior>;
}

export enum WidgetsDynamicNotebookTabBarBehavior {
    ALWAYS = 0,
    SINGLE = 1,
    NEVER = 2,
}

export namespace WidgetsStorageBarItemDescription {
    export const $gtype: GObject.GType<WidgetsStorageBarItemDescription>;
}

export enum WidgetsStorageBarItemDescription {
    OTHER = 0,
    AUDIO = 1,
    VIDEO = 2,
    PHOTO = 3,
    APP = 4,
    FILES,
}

export namespace CollapseMode {
    export const $gtype: GObject.GType<CollapseMode>;
}

export enum CollapseMode {
    NONE = 0,
    LEFT = 1,
    TOP = 1,
    FIRST = 1,
    RIGHT = 2,
    BOTTOM = 2,
    LAST = 2,
}

export namespace TextStyle {
    export const $gtype: GObject.GType<TextStyle>;
}

export enum TextStyle {
    TITLE = 0,
    H1 = 1,
    H2 = 2,
    H3 = 3,
}

export namespace CloseButtonPosition {
    export const $gtype: GObject.GType<CloseButtonPosition>;
}

export enum CloseButtonPosition {
    LEFT = 0,
    RIGHT = 1,
}

export namespace SettingsPageStatusType {
    export const $gtype: GObject.GType<SettingsPageStatusType>;
}

export enum SettingsPageStatusType {
    ERROR = 0,
    OFFLINE = 1,
    SUCCESS = 2,
    WARNING = 3,
    NONE = 4,
}

export namespace SettingsColorScheme {
    export const $gtype: GObject.GType<SettingsColorScheme>;
}

export enum SettingsColorScheme {
    NO_PREFERENCE = 0,
    DARK = 1,
    LIGHT = 2,
}

export namespace DrawingBufferSurface {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        surface: cairo.Surface;
        width: number;
        height: number;
        context: cairo.Context;
    }
}

export class DrawingBufferSurface extends GObject.Object {
    static $gtype: GObject.GType<DrawingBufferSurface>;

    constructor(properties?: Partial<DrawingBufferSurface.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DrawingBufferSurface.ConstructorProperties>, ...args: any[]): void;

    // Properties
    surface: cairo.Surface;
    width: number;
    height: number;
    context: cairo.Context;

    // Constructors

    static ['new'](width: number, height: number): DrawingBufferSurface;

    static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface;

    static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface;

    // Members

    get_surface(): cairo.Surface;

    get_width(): number;

    get_height(): number;

    get_context(): cairo.Context;

    clear(): void;

    load_to_pixbuf(): GdkPixbuf.Pixbuf;

    average_color(): DrawingColor;

    fast_blur(radius: number, process_count: number): void;

    exponential_blur(radius: number): void;

    gaussian_blur(radius: number): void;
}

export namespace DrawingColor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DrawingColor extends GObject.Object implements ServicesSettingsSerializable {
    static $gtype: GObject.GType<DrawingColor>;

    constructor(properties?: Partial<DrawingColor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DrawingColor.ConstructorProperties>, ...args: any[]): void;

    // Fields
    R: number;
    G: number;
    B: number;
    A: number;

    // Constructors

    static ['new'](R: number, G: number, B: number, A: number): DrawingColor;

    static from_gdk(color: Gdk.Color): DrawingColor;

    static from_rgba(color: Gdk.RGBA): DrawingColor;

    static from_string(color: string): DrawingColor;

    static from_int(color: number): DrawingColor;

    // Members

    set_hue(hue: number): DrawingColor;

    set_sat(sat: number): DrawingColor;

    set_val(val: number): DrawingColor;

    set_alpha(alpha: number): DrawingColor;

    get_hue(): number;

    get_sat(): number;

    get_val(): number;

    add_hue(val: number): DrawingColor;

    set_min_sat(sat: number): DrawingColor;

    set_min_value(val: number): DrawingColor;

    set_max_sat(sat: number): DrawingColor;

    set_max_val(val: number): DrawingColor;

    multiply_sat(amount: number): DrawingColor;

    brighten_val(amount: number): DrawingColor;

    darken_val(amount: number): DrawingColor;

    darken_by_sat(amount: number): DrawingColor;

    to_string(): string;

    to_int(): number;

    static alpha_from_int(color: number): number;

    static red_from_int(color: number): number;

    static green_from_int(color: number): number;

    static blue_from_int(color: number): number;

    // Implemented Members

    settings_serialize(): string;

    settings_deserialize(s: string): void;

    vfunc_settings_serialize(): string;

    vfunc_settings_deserialize(s: string): void;
}

export namespace DrawingUtilities {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DrawingUtilities extends GObject.Object {
    static $gtype: GObject.GType<DrawingUtilities>;

    constructor(properties?: Partial<DrawingUtilities.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DrawingUtilities.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): DrawingUtilities;

    // Members

    static cairo_rounded_rectangle(
        cr: cairo.Context,
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number
    ): void;

    static average_color(source: GdkPixbuf.Pixbuf): DrawingColor;
}

export namespace GtkPatchAboutDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        artists: string[];
        authors: string[];
        comments: string;
        copyright: string;
        documenters: string[];
        license: string;
        license_type: Gtk.License;
        licenseType: Gtk.License;
        logo: GdkPixbuf.Pixbuf;
        logo_icon_name: string;
        logoIconName: string;
        program_name: string;
        programName: string;
        translator_credits: string;
        translatorCredits: string;
        version: string;
        website: string;
        website_label: string;
        websiteLabel: string;
    }
}

export class GtkPatchAboutDialog extends Gtk.Dialog {
    static $gtype: GObject.GType<GtkPatchAboutDialog>;

    constructor(properties?: Partial<GtkPatchAboutDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GtkPatchAboutDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    artists: string[];
    authors: string[];
    comments: string;
    copyright: string;
    documenters: string[];
    license: string;
    license_type: Gtk.License;
    licenseType: Gtk.License;
    logo: GdkPixbuf.Pixbuf;
    logo_icon_name: string;
    logoIconName: string;
    program_name: string;
    programName: string;
    translator_credits: string;
    translatorCredits: string;
    version: string;
    website: string;
    website_label: string;
    websiteLabel: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate-link', callback: (_source: this, uri: string) => boolean): number;

    connect_after(signal: 'activate-link', callback: (_source: this, uri: string) => boolean): number;

    emit(signal: 'activate-link', uri: string): void;

    // Constructors

    static ['new'](): GtkPatchAboutDialog;
    static ['new'](...args: never[]): never;

    // Members

    get_artists(): string[];

    set_artists(value: string[]): void;

    get_authors(): string[];

    set_authors(value: string[]): void;

    get_comments(): string;

    set_comments(value: string): void;

    get_copyright(): string;

    set_copyright(value: string): void;

    get_documenters(): string[];

    set_documenters(value: string[]): void;

    get_license(): string;

    set_license(value: string): void;

    get_license_type(): Gtk.License;

    set_license_type(value: Gtk.License): void;

    get_logo(): GdkPixbuf.Pixbuf;

    set_logo(value: GdkPixbuf.Pixbuf): void;

    get_logo_icon_name(): string;

    set_logo_icon_name(value: string): void;

    get_program_name(): string;

    set_program_name(value: string): void;

    get_translator_credits(): string;

    set_translator_credits(value: string): void;

    get_version(): string;

    set_version(value: string): void;

    get_website(): string;

    set_website(value: string): void;

    get_website_label(): string;

    set_website_label(value: string): void;
}

export namespace ServicesContractorProxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServicesContractorProxy extends GObject.Object {
    static $gtype: GObject.GType<ServicesContractorProxy>;

    constructor(properties?: Partial<ServicesContractorProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesContractorProxy.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'contracts-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'contracts-changed', callback: (_source: this) => void): number;

    emit(signal: 'contracts-changed'): void;

    // Members

    static get_instance(): ServicesContractorProxy;

    static get_all_contracts(): Gee.List;

    static get_contracts_by_mime(mime_type: string): Gee.List;

    static get_contracts_by_mimelist(mime_types: string[]): Gee.List;

    static get_contracts_for_file(file: Gio.File): Gee.List;

    static get_contracts_for_files(files: Gio.File[]): Gee.List;
}

export namespace ServicesIconFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServicesIconFactory extends GObject.Object {
    static $gtype: GObject.GType<ServicesIconFactory>;

    constructor(properties?: Partial<ServicesIconFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesIconFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ServicesIconFactory;

    // Members

    load_symbolic_icon_from_gicon(style: Gtk.StyleContext, gicon: Gio.Icon, size: number): GdkPixbuf.Pixbuf | null;

    load_symbolic_icon(style: Gtk.StyleContext, iconname: string, size: number): GdkPixbuf.Pixbuf | null;

    static get_default(): ServicesIconFactory;
}

export namespace ServicesLogger {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServicesLogger extends GObject.Object {
    static $gtype: GObject.GType<ServicesLogger>;

    constructor(properties?: Partial<ServicesLogger.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesLogger.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ServicesLogger;

    // Members

    static get_DisplayLevel(): ServicesLogLevel;

    static set_DisplayLevel(value: ServicesLogLevel): void;

    static initialize(app_name: string): void;

    static notification(msg: string): void;
}

export namespace ServicesPaths {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServicesPaths extends GObject.Object {
    static $gtype: GObject.GType<ServicesPaths>;

    constructor(properties?: Partial<ServicesPaths.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesPaths.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ServicesPaths;

    // Members

    static get_home_folder(): Gio.File;

    static set_home_folder(value: Gio.File): void;

    static get_data_folder(): Gio.File;

    static set_data_folder(value: Gio.File): void;

    static get_xdg_config_home_folder(): Gio.File;

    static set_xdg_config_home_folder(value: Gio.File): void;

    static get_xdg_data_home_folder(): Gio.File;

    static set_xdg_data_home_folder(value: Gio.File): void;

    static get_xdg_cache_home_folder(): Gio.File;

    static set_xdg_cache_home_folder(value: Gio.File): void;

    static get_xdg_data_dir_folders(): Gio.File[];

    static set_xdg_data_dir_folders(value: Gio.File[]): void;

    static get_user_config_folder(): Gio.File;

    static set_user_config_folder(value: Gio.File): void;

    static get_user_data_folder(): Gio.File;

    static set_user_data_folder(value: Gio.File): void;

    static get_user_cache_folder(): Gio.File;

    static set_user_cache_folder(value: Gio.File): void;

    static initialize(app_name: string, data_folder_path: string): void;

    static ensure_directory_exists(dir: Gio.File): boolean;
}

export namespace ServicesSettings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        schema: Gio.Settings;
    }
}

export abstract class ServicesSettings extends GObject.Object {
    static $gtype: GObject.GType<ServicesSettings>;

    constructor(properties?: Partial<ServicesSettings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesSettings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    schema: Gio.Settings;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Members

    get_schema(): Gio.Settings;

    verify(key: string): void;

    vfunc_verify(key: string): void;
}

export namespace ServicesSimpleCommand {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServicesSimpleCommand extends GObject.Object {
    static $gtype: GObject.GType<ServicesSimpleCommand>;

    constructor(properties?: Partial<ServicesSimpleCommand.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesSimpleCommand.ConstructorProperties>, ...args: any[]): void;

    // Fields
    standard_output_str: string;
    error_output_str: string;
    output_str: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'done', callback: (_source: this, exit: number) => void): number;

    connect_after(signal: 'done', callback: (_source: this, exit: number) => void): number;

    emit(signal: 'done', exit: number): void;

    connect(signal: 'output-changed', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'output-changed', callback: (_source: this, text: string) => void): number;

    emit(signal: 'output-changed', text: string): void;

    connect(signal: 'standard-changed', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'standard-changed', callback: (_source: this, text: string) => void): number;

    emit(signal: 'standard-changed', text: string): void;

    connect(signal: 'error-changed', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'error-changed', callback: (_source: this, text: string) => void): number;

    emit(signal: 'error-changed', text: string): void;

    // Constructors

    static ['new'](dir: string, command: string): ServicesSimpleCommand;

    // Members

    run(): void;
}

export namespace ServicesSystem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ServicesSystem extends GObject.Object {
    static $gtype: GObject.GType<ServicesSystem>;

    constructor(properties?: Partial<ServicesSystem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServicesSystem.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ServicesSystem;

    // Members

    static open_uri(uri: string): void;

    static open(file: Gio.File): void;

    static open_files(files: Gio.File[]): void;

    static launch(app: Gio.File): void;

    static execute_command(command: string): boolean;

    static launch_with_files(app: Gio.File | null, files: Gio.File[]): void;

    static history_is_enabled(): boolean;
}

export namespace WidgetsAboutDialog {
    export interface ConstructorProperties extends GtkPatchAboutDialog.ConstructorProperties {
        [key: string]: any;

        help: string;
        translate: string;
        bug: string;
    }
}

export class WidgetsAboutDialog extends GtkPatchAboutDialog {
    static $gtype: GObject.GType<WidgetsAboutDialog>;

    constructor(properties?: Partial<WidgetsAboutDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsAboutDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    help: string;
    translate: string;
    bug: string;

    // Constructors

    static ['new'](): WidgetsAboutDialog;
    static ['new'](...args: never[]): never;

    // Members

    get_help(): string;

    set_help(value: string): void;

    get_translate(): string;

    set_translate(value: string): void;

    get_bug(): string;

    set_bug(value: string): void;
}

export namespace WidgetsAlertView {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        title: string;
        description: string;
        icon_name: string;
        iconName: string;
    }
}

export class WidgetsAlertView extends Gtk.Grid {
    static $gtype: GObject.GType<WidgetsAlertView>;

    constructor(properties?: Partial<WidgetsAlertView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsAlertView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;
    description: string;
    icon_name: string;
    iconName: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'action-activated', callback: (_source: this) => void): number;

    connect_after(signal: 'action-activated', callback: (_source: this) => void): number;

    emit(signal: 'action-activated'): void;

    // Constructors

    static ['new'](title: string, description: string, icon_name: string): WidgetsAlertView;
    static ['new'](...args: never[]): never;

    // Members

    get_title(): string;

    set_title(value: string): void;

    get_description(): string;

    set_description(value: string): void;

    get_icon_name(): string;

    set_icon_name(value: string): void;

    show_action(label?: string | null): void;

    hide_action(): void;
}

export namespace WidgetsAppMenu {
    export interface ConstructorProperties extends Gtk.MenuButton.ConstructorProperties {
        [key: string]: any;
    }
}

export class WidgetsAppMenu extends Gtk.MenuButton {
    static $gtype: GObject.GType<WidgetsAppMenu>;

    constructor(properties?: Partial<WidgetsAppMenu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsAppMenu.ConstructorProperties>, ...args: any[]): void;

    // Fields
    about_item: Gtk.MenuItem;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'show-about', callback: (_source: this, w: Gtk.Widget) => void): number;

    connect_after(signal: 'show-about', callback: (_source: this, w: Gtk.Widget) => void): number;

    emit(signal: 'show-about', w: Gtk.Widget): void;

    // Constructors

    static ['new'](menu: Gtk.Menu): WidgetsAppMenu;
    static ['new'](...args: never[]): never;

    static with_app(application: Application | null, menu: Gtk.Menu): WidgetsAppMenu;

    // Members

    add_items(menu: Gtk.Menu): void;
}

export namespace WidgetsAvatar {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        pixbuf: GdkPixbuf.Pixbuf;
    }
}

export class WidgetsAvatar extends Gtk.EventBox {
    static $gtype: GObject.GType<WidgetsAvatar>;

    constructor(properties?: Partial<WidgetsAvatar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsAvatar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    pixbuf: GdkPixbuf.Pixbuf;

    // Constructors

    static ['new'](): WidgetsAvatar;

    static from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): WidgetsAvatar;

    static from_file(filepath: string, pixel_size: number): WidgetsAvatar;

    static with_default_icon(pixel_size: number): WidgetsAvatar;

    // Members

    get_pixbuf(): GdkPixbuf.Pixbuf | null;

    set_pixbuf(value?: GdkPixbuf.Pixbuf | null): void;

    show_default(pixel_size: number): void;
}

export namespace WidgetsCellRendererBadge {
    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {
        [key: string]: any;

        text: string;
    }
}

export class WidgetsCellRendererBadge extends Gtk.CellRenderer {
    static $gtype: GObject.GType<WidgetsCellRendererBadge>;

    constructor(properties?: Partial<WidgetsCellRendererBadge.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsCellRendererBadge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    text: string;

    // Constructors

    static ['new'](): WidgetsCellRendererBadge;

    // Members

    get_text(): string;

    set_text(value: string): void;
}

export namespace WidgetsCellRendererExpander {
    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {
        [key: string]: any;

        is_category_expander: boolean;
        isCategoryExpander: boolean;
    }
}

export class WidgetsCellRendererExpander extends Gtk.CellRenderer {
    static $gtype: GObject.GType<WidgetsCellRendererExpander>;

    constructor(properties?: Partial<WidgetsCellRendererExpander.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsCellRendererExpander.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_category_expander: boolean;
    isCategoryExpander: boolean;

    // Constructors

    static ['new'](): WidgetsCellRendererExpander;

    // Members

    get_is_category_expander(): boolean;

    set_is_category_expander(value: boolean): void;

    get_arrow_size(widget: Gtk.Widget): number;

    vfunc_get_arrow_size(widget: Gtk.Widget): number;
}

export namespace WidgetsCollapsiblePaned {
    export interface ConstructorProperties extends Gtk.Paned.ConstructorProperties {
        [key: string]: any;

        collapse_mode: CollapseMode;
        collapseMode: CollapseMode;
    }
}

export class WidgetsCollapsiblePaned extends Gtk.Paned {
    static $gtype: GObject.GType<WidgetsCollapsiblePaned>;

    constructor(properties?: Partial<WidgetsCollapsiblePaned.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsCollapsiblePaned.ConstructorProperties>, ...args: any[]): void;

    // Properties
    collapse_mode: CollapseMode;
    collapseMode: CollapseMode;

    // Constructors

    static ['new'](orientation: Gtk.Orientation): WidgetsCollapsiblePaned;

    // Members

    get_collapse_mode(): CollapseMode;

    set_collapse_mode(value: CollapseMode): void;
}

export namespace WidgetsCompositedWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}

export class WidgetsCompositedWindow extends Gtk.Window implements Gtk.Buildable {
    static $gtype: GObject.GType<WidgetsCompositedWindow>;

    constructor(properties?: Partial<WidgetsCompositedWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsCompositedWindow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): WidgetsCompositedWindow;
    static ['new'](...args: never[]): never;

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

export namespace WidgetsDatePicker {
    export interface ConstructorProperties extends Gtk.Entry.ConstructorProperties {
        [key: string]: any;

        format: string;
        date: GLib.DateTime;
    }
}

export class WidgetsDatePicker extends Gtk.Entry implements Gtk.Buildable {
    static $gtype: GObject.GType<WidgetsDatePicker>;

    constructor(properties?: Partial<WidgetsDatePicker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsDatePicker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    format: string;
    date: GLib.DateTime;

    // Fields
    dropdown: Gtk.EventBox;
    calendar: Gtk.Calendar;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'date-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'date-changed', callback: (_source: this) => void): number;

    emit(signal: 'date-changed'): void;

    // Constructors

    static with_format(format: string): WidgetsDatePicker;

    static ['new'](): WidgetsDatePicker;

    // Members

    get_format(): string;

    get_date(): GLib.DateTime;

    set_date(value: GLib.DateTime): void;

    position_dropdown(): Gdk.Rectangle;

    vfunc_position_dropdown(): Gdk.Rectangle;

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

export namespace WidgetsTab {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        label: string;
        pinned: boolean;
        pinnable: boolean;
        restore_data: string;
        restoreData: string;
        page: Gtk.Widget;
        icon: Gio.Icon;
        working: boolean;
        ellipsize_mode: Pango.EllipsizeMode;
        ellipsizeMode: Pango.EllipsizeMode;
        fixed: boolean;
        menu: Gtk.Menu;
    }
}

export class WidgetsTab extends Gtk.EventBox {
    static $gtype: GObject.GType<WidgetsTab>;

    constructor(properties?: Partial<WidgetsTab.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsTab.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;
    pinned: boolean;
    pinnable: boolean;
    restore_data: string;
    restoreData: string;
    page: Gtk.Widget;
    icon: Gio.Icon;
    working: boolean;
    ellipsize_mode: Pango.EllipsizeMode;
    ellipsizeMode: Pango.EllipsizeMode;
    fixed: boolean;
    menu: Gtk.Menu;

    // Fields
    dropped_callback: WidgetsDroppedDelegate;
    dropped_callback_target: any;
    dropped_callback_target_destroy_notify: GLib.DestroyNotify;

    // Constructors

    static ['new'](label?: string | null, icon?: Gio.Icon | null, page?: Gtk.Widget | null): WidgetsTab;
    static ['new'](...args: never[]): never;

    // Members

    get_label(): string;

    set_label(value: string): void;

    get_pinned(): boolean;

    set_pinned(value: boolean): void;

    get_pinnable(): boolean;

    set_pinnable(value: boolean): void;

    get_restore_data(): string;

    set_restore_data(value: string): void;

    get_page(): Gtk.Widget;

    set_page(value: Gtk.Widget): void;

    get_icon(): Gio.Icon | null;

    set_icon(value?: Gio.Icon | null): void;

    get_working(): boolean;

    set_working(value: boolean): void;

    get_ellipsize_mode(): Pango.EllipsizeMode;

    set_ellipsize_mode(value: Pango.EllipsizeMode): void;

    get_fixed(): boolean;

    set_fixed(value: boolean): void;

    get_menu(): Gtk.Menu;

    set_menu(value: Gtk.Menu): void;

    close(): void;
}

export namespace WidgetsDynamicNotebook {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        n_tabs: number;
        nTabs: number;
        show_tabs: boolean;
        showTabs: boolean;
        show_icons: boolean;
        showIcons: boolean;
        tabs_closable: boolean;
        tabsClosable: boolean;
        allow_drag: boolean;
        allowDrag: boolean;
        allow_new_window: boolean;
        allowNewWindow: boolean;
        allow_duplication: boolean;
        allowDuplication: boolean;
        allow_restoring: boolean;
        allowRestoring: boolean;
        max_restorable_tabs: number;
        maxRestorableTabs: number;
        add_button_visible: boolean;
        addButtonVisible: boolean;
        allow_pinning: boolean;
        allowPinning: boolean;
        force_left: boolean;
        forceLeft: boolean;
        add_button_tooltip: string;
        addButtonTooltip: string;
        current: WidgetsTab;
        tabs: WidgetsTab[];
        group_name: string;
        groupName: string;
        tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior;
        tabBarBehavior: WidgetsDynamicNotebookTabBarBehavior;
        menu: Gtk.Menu;
    }
}

export class WidgetsDynamicNotebook extends Gtk.EventBox {
    static $gtype: GObject.GType<WidgetsDynamicNotebook>;

    constructor(properties?: Partial<WidgetsDynamicNotebook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsDynamicNotebook.ConstructorProperties>, ...args: any[]): void;

    // Properties
    n_tabs: number;
    nTabs: number;
    show_tabs: boolean;
    showTabs: boolean;
    show_icons: boolean;
    showIcons: boolean;
    tabs_closable: boolean;
    tabsClosable: boolean;
    allow_drag: boolean;
    allowDrag: boolean;
    allow_new_window: boolean;
    allowNewWindow: boolean;
    allow_duplication: boolean;
    allowDuplication: boolean;
    allow_restoring: boolean;
    allowRestoring: boolean;
    max_restorable_tabs: number;
    maxRestorableTabs: number;
    add_button_visible: boolean;
    addButtonVisible: boolean;
    allow_pinning: boolean;
    allowPinning: boolean;
    force_left: boolean;
    forceLeft: boolean;
    add_button_tooltip: string;
    addButtonTooltip: string;
    current: WidgetsTab;
    tabs: WidgetsTab[];
    group_name: string;
    groupName: string;
    tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior;
    tabBarBehavior: WidgetsDynamicNotebookTabBarBehavior;
    menu: Gtk.Menu;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'tab-added', callback: (_source: this, tab: WidgetsTab) => void): number;

    connect_after(signal: 'tab-added', callback: (_source: this, tab: WidgetsTab) => void): number;

    emit(signal: 'tab-added', tab: WidgetsTab): void;

    connect(signal: 'tab-removed', callback: (_source: this, tab: WidgetsTab) => void): number;

    connect_after(signal: 'tab-removed', callback: (_source: this, tab: WidgetsTab) => void): number;

    emit(signal: 'tab-removed', tab: WidgetsTab): void;

    connect(
        signal: 'tab-switched',
        callback: (_source: this, old_tab: WidgetsTab | null, new_tab: WidgetsTab) => void
    ): number;

    connect_after(
        signal: 'tab-switched',
        callback: (_source: this, old_tab: WidgetsTab | null, new_tab: WidgetsTab) => void
    ): number;

    emit(signal: 'tab-switched', old_tab: WidgetsTab | null, new_tab: WidgetsTab): void;

    connect(signal: 'tab-reordered', callback: (_source: this, tab: WidgetsTab, new_pos: number) => void): number;

    connect_after(signal: 'tab-reordered', callback: (_source: this, tab: WidgetsTab, new_pos: number) => void): number;

    emit(signal: 'tab-reordered', tab: WidgetsTab, new_pos: number): void;

    connect(signal: 'tab-moved', callback: (_source: this, tab: WidgetsTab, x: number, y: number) => void): number;

    connect_after(
        signal: 'tab-moved',
        callback: (_source: this, tab: WidgetsTab, x: number, y: number) => void
    ): number;

    emit(signal: 'tab-moved', tab: WidgetsTab, x: number, y: number): void;

    connect(signal: 'tab-duplicated', callback: (_source: this, duplicated_tab: WidgetsTab) => void): number;

    connect_after(signal: 'tab-duplicated', callback: (_source: this, duplicated_tab: WidgetsTab) => void): number;

    emit(signal: 'tab-duplicated', duplicated_tab: WidgetsTab): void;

    connect(
        signal: 'tab-restored',
        callback: (_source: this, label: string, data: string, icon: Gio.Icon | null) => void
    ): number;

    connect_after(
        signal: 'tab-restored',
        callback: (_source: this, label: string, data: string, icon: Gio.Icon | null) => void
    ): number;

    emit(signal: 'tab-restored', label: string, data: string, icon: Gio.Icon | null): void;

    connect(signal: 'new-tab-requested', callback: (_source: this) => void): number;

    connect_after(signal: 'new-tab-requested', callback: (_source: this) => void): number;

    emit(signal: 'new-tab-requested'): void;

    connect(signal: 'close-tab-requested', callback: (_source: this, tab: WidgetsTab) => boolean): number;

    connect_after(signal: 'close-tab-requested', callback: (_source: this, tab: WidgetsTab) => boolean): number;

    emit(signal: 'close-tab-requested', tab: WidgetsTab): void;

    // Constructors

    static ['new'](): WidgetsDynamicNotebook;

    // Members

    get_n_tabs(): number;

    get_show_tabs(): boolean;

    set_show_tabs(value: boolean): void;

    get_show_icons(): boolean;

    set_show_icons(value: boolean): void;

    get_tabs_closable(): boolean;

    set_tabs_closable(value: boolean): void;

    get_allow_drag(): boolean;

    set_allow_drag(value: boolean): void;

    get_allow_new_window(): boolean;

    set_allow_new_window(value: boolean): void;

    get_allow_duplication(): boolean;

    set_allow_duplication(value: boolean): void;

    get_allow_restoring(): boolean;

    set_allow_restoring(value: boolean): void;

    get_max_restorable_tabs(): number;

    set_max_restorable_tabs(value: number): void;

    get_add_button_visible(): boolean;

    set_add_button_visible(value: boolean): void;

    get_allow_pinning(): boolean;

    set_allow_pinning(value: boolean): void;

    get_force_left(): boolean;

    set_force_left(value: boolean): void;

    get_add_button_tooltip(): string;

    set_add_button_tooltip(value: string): void;

    get_current(): WidgetsTab;

    set_current(value: WidgetsTab): void;

    get_tabs(): WidgetsTab[];

    get_group_name(): string;

    set_group_name(value: string): void;

    get_tab_bar_behavior(): WidgetsDynamicNotebookTabBarBehavior;

    set_tab_bar_behavior(value: WidgetsDynamicNotebookTabBarBehavior): void;

    get_menu(): Gtk.Menu;

    remove_tab(tab: WidgetsTab): void;

    next_page(): void;

    previous_page(): void;

    get_children(): Gtk.Widget[];

    get_tab_position(tab: WidgetsTab): number;

    set_tab_position(tab: WidgetsTab, position: number): void;

    get_tab_by_index(index: number): WidgetsTab | null;

    get_tab_by_widget(widget: Gtk.Widget): WidgetsTab | null;

    get_nth_page(index: number): Gtk.Widget;

    insert_tab(tab: WidgetsTab, index: number): number;
}

export namespace WidgetsModeButton {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        selected: number;
        n_items: number;
        nItems: number;
    }
}

export class WidgetsModeButton extends Gtk.Box {
    static $gtype: GObject.GType<WidgetsModeButton>;

    constructor(properties?: Partial<WidgetsModeButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsModeButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    selected: number;
    n_items: number;
    nItems: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'mode-added', callback: (_source: this, index: number, widget: Gtk.Widget) => void): number;

    connect_after(signal: 'mode-added', callback: (_source: this, index: number, widget: Gtk.Widget) => void): number;

    emit(signal: 'mode-added', index: number, widget: Gtk.Widget): void;

    connect(signal: 'mode-removed', callback: (_source: this, index: number, widget: Gtk.Widget) => void): number;

    connect_after(signal: 'mode-removed', callback: (_source: this, index: number, widget: Gtk.Widget) => void): number;

    emit(signal: 'mode-removed', index: number, widget: Gtk.Widget): void;

    connect(signal: 'mode-changed', callback: (_source: this, widget: Gtk.Widget) => void): number;

    connect_after(signal: 'mode-changed', callback: (_source: this, widget: Gtk.Widget) => void): number;

    emit(signal: 'mode-changed', widget: Gtk.Widget): void;

    // Constructors

    static ['new'](): WidgetsModeButton;
    static ['new'](...args: never[]): never;

    // Members

    get_selected(): number;

    set_selected(value: number): void;

    get_n_items(): number;

    append_pixbuf(pixbuf: GdkPixbuf.Pixbuf): number;

    append_text(text: string): number;

    append_icon(icon_name: string, size: Gtk.IconSize): number;

    append(w: Gtk.Widget): number;

    set_active(new_active_index: number): void;

    set_item_visible(index: number, val: boolean): void;

    remove(index: number): void;
    remove(...args: never[]): never;

    clear_children(): void;
}

export namespace WidgetsOverlayBar {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        overlay: Gtk.Overlay;
        status: string;
        label: string;
        active: boolean;
    }
}

export class WidgetsOverlayBar extends Gtk.EventBox {
    static $gtype: GObject.GType<WidgetsOverlayBar>;

    constructor(properties?: Partial<WidgetsOverlayBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsOverlayBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    overlay: Gtk.Overlay;
    status: string;
    label: string;
    active: boolean;

    // Constructors

    static ['new'](overlay?: Gtk.Overlay | null): WidgetsOverlayBar;
    static ['new'](...args: never[]): never;

    // Members

    get_overlay(): Gtk.Overlay | null;

    get_status(): string;

    set_status(value: string): void;

    get_label(): string;

    set_label(value: string): void;

    get_active(): boolean;

    set_active(value: boolean): void;
}

export namespace WidgetsSourceList {
    export type VisibleFunc = (item: WidgetsSourceListItem) => boolean;

    export interface ConstructorProperties extends Gtk.ScrolledWindow.ConstructorProperties {
        [key: string]: any;

        root: WidgetsSourceListExpandableItem;
        selected: WidgetsSourceListItem;
        ellipsize_mode: Pango.EllipsizeMode;
        ellipsizeMode: Pango.EllipsizeMode;
        editing: boolean;
    }
}

export class WidgetsSourceList extends Gtk.ScrolledWindow {
    static $gtype: GObject.GType<WidgetsSourceList>;

    constructor(properties?: Partial<WidgetsSourceList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsSourceList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    root: WidgetsSourceListExpandableItem;
    selected: WidgetsSourceListItem;
    ellipsize_mode: Pango.EllipsizeMode;
    ellipsizeMode: Pango.EllipsizeMode;
    editing: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'item-selected', callback: (_source: this, item: WidgetsSourceListItem | null) => void): number;

    connect_after(
        signal: 'item-selected',
        callback: (_source: this, item: WidgetsSourceListItem | null) => void
    ): number;

    emit(signal: 'item-selected', item: WidgetsSourceListItem | null): void;

    // Constructors

    static ['new'](root: WidgetsSourceListExpandableItem): WidgetsSourceList;
    static ['new'](...args: never[]): never;

    // Members

    get_root(): WidgetsSourceListExpandableItem;

    set_root(value: WidgetsSourceListExpandableItem): void;

    get_selected(): WidgetsSourceListItem | null;

    set_selected(value?: WidgetsSourceListItem | null): void;

    get_ellipsize_mode(): Pango.EllipsizeMode;

    set_ellipsize_mode(value: Pango.EllipsizeMode): void;

    get_editing(): boolean;

    has_item(item: WidgetsSourceListItem): boolean;

    set_filter_func(visible_func: WidgetsSourceList.VisibleFunc | null, refilter: boolean): void;

    refilter(): void;

    is_item_expanded(item: WidgetsSourceListItem): boolean;

    start_editing_item(item: WidgetsSourceListItem): boolean;

    stop_editing(): void;

    enable_drag_source(src_entries: Gtk.TargetEntry[]): void;

    disable_drag_source(): void;

    enable_drag_dest(dest_entries: Gtk.TargetEntry[], actions: Gdk.DragAction): void;

    disable_drag_dest(): void;

    scroll_to_item(
        item: WidgetsSourceListItem,
        expand_parents: boolean,
        use_align: boolean,
        row_align: number
    ): boolean;

    get_previous_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null;

    get_next_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null;

    get_first_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null;

    get_last_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null;

    get_n_visible_children(parent: WidgetsSourceListExpandableItem): number;
}

export namespace WidgetsSourceListItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
        tooltip: string;
        markup: string;
        badge: string;
        editable: boolean;
        visible: boolean;
        selectable: boolean;
        icon: Gio.Icon;
        activatable: Gio.Icon;
        activatable_tooltip: string;
        activatableTooltip: string;
    }
}

export class WidgetsSourceListItem extends GObject.Object {
    static $gtype: GObject.GType<WidgetsSourceListItem>;

    constructor(properties?: Partial<WidgetsSourceListItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsSourceListItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    tooltip: string;
    markup: string;
    badge: string;
    editable: boolean;
    visible: boolean;
    selectable: boolean;
    icon: Gio.Icon;
    activatable: Gio.Icon;
    activatable_tooltip: string;
    activatableTooltip: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'edited', callback: (_source: this, new_name: string) => void): number;

    connect_after(signal: 'edited', callback: (_source: this, new_name: string) => void): number;

    emit(signal: 'edited', new_name: string): void;

    connect(signal: 'action-activated', callback: (_source: this) => void): number;

    connect_after(signal: 'action-activated', callback: (_source: this) => void): number;

    emit(signal: 'action-activated'): void;

    connect(signal: 'activated', callback: (_source: this) => void): number;

    connect_after(signal: 'activated', callback: (_source: this) => void): number;

    emit(signal: 'activated'): void;

    // Constructors

    static ['new'](name: string): WidgetsSourceListItem;

    // Members

    get_parent(): WidgetsSourceListExpandableItem;

    get_name(): string;

    set_name(value: string): void;

    get_tooltip(): string | null;

    set_tooltip(value?: string | null): void;

    get_markup(): string | null;

    set_markup(value?: string | null): void;

    get_badge(): string;

    set_badge(value: string): void;

    get_editable(): boolean;

    set_editable(value: boolean): void;

    get_visible(): boolean;

    set_visible(value: boolean): void;

    get_selectable(): boolean;

    set_selectable(value: boolean): void;

    get_icon(): Gio.Icon;

    set_icon(value: Gio.Icon): void;

    get_activatable(): Gio.Icon;

    set_activatable(value: Gio.Icon): void;

    get_activatable_tooltip(): string;

    set_activatable_tooltip(value: string): void;

    get_context_menu(): Gtk.Menu | null;

    vfunc_get_context_menu(): Gtk.Menu | null;
}

export namespace WidgetsSourceListExpandableItem {
    export interface ConstructorProperties extends WidgetsSourceListItem.ConstructorProperties {
        [key: string]: any;

        collapsible: boolean;
        expanded: boolean;
        n_children: number;
        nChildren: number;
        children: Gee.Collection;
    }
}

export class WidgetsSourceListExpandableItem extends WidgetsSourceListItem {
    static $gtype: GObject.GType<WidgetsSourceListExpandableItem>;

    constructor(properties?: Partial<WidgetsSourceListExpandableItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsSourceListExpandableItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    collapsible: boolean;
    expanded: boolean;
    n_children: number;
    nChildren: number;
    children: Gee.Collection;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'child-added', callback: (_source: this, item: WidgetsSourceListItem) => void): number;

    connect_after(signal: 'child-added', callback: (_source: this, item: WidgetsSourceListItem) => void): number;

    emit(signal: 'child-added', item: WidgetsSourceListItem): void;

    connect(signal: 'child-removed', callback: (_source: this, item: WidgetsSourceListItem) => void): number;

    connect_after(signal: 'child-removed', callback: (_source: this, item: WidgetsSourceListItem) => void): number;

    emit(signal: 'child-removed', item: WidgetsSourceListItem): void;

    connect(signal: 'toggled', callback: (_source: this) => void): number;

    connect_after(signal: 'toggled', callback: (_source: this) => void): number;

    emit(signal: 'toggled'): void;

    // Constructors

    static ['new'](name: string): WidgetsSourceListExpandableItem;

    // Members

    get_collapsible(): boolean;

    set_collapsible(value: boolean): void;

    get_expanded(): boolean;

    set_expanded(value: boolean): void;

    get_n_children(): number;

    get_children(): Gee.Collection;

    contains(item: WidgetsSourceListItem): boolean;

    add(item: WidgetsSourceListItem): void;

    remove(item: WidgetsSourceListItem): void;

    clear(): void;

    expand_all(inclusive: boolean, recursive: boolean): void;

    collapse_all(inclusive: boolean, recursive: boolean): void;

    expand_with_parents(): void;

    collapse_with_parents(): void;
}

export namespace WidgetsStorageBar {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        storage: number;
        total_usage: number;
        totalUsage: number;
        inner_margin_sides: number;
        innerMarginSides: number;
    }
}

export class WidgetsStorageBar extends Gtk.Box {
    static $gtype: GObject.GType<WidgetsStorageBar>;

    constructor(properties?: Partial<WidgetsStorageBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsStorageBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    storage: number;
    total_usage: number;
    totalUsage: number;
    inner_margin_sides: number;
    innerMarginSides: number;

    // Constructors

    static ['new'](storage: number): WidgetsStorageBar;
    static ['new'](...args: never[]): never;

    static with_total_usage(storage: number, total_usage: number): WidgetsStorageBar;

    // Members

    get_storage(): number;

    set_storage(value: number): void;

    get_total_usage(): number;

    set_total_usage(value: number): void;

    get_inner_margin_sides(): number;

    set_inner_margin_sides(value: number): void;

    update_block_size(description: WidgetsStorageBarItemDescription, size: number): void;
}

export namespace WidgetsTimePicker {
    export interface ConstructorProperties extends Gtk.Entry.ConstructorProperties {
        [key: string]: any;

        format_12: string;
        format12: string;
        format_24: string;
        format24: string;
        time: GLib.DateTime;
    }
}

export class WidgetsTimePicker extends Gtk.Entry {
    static $gtype: GObject.GType<WidgetsTimePicker>;

    constructor(properties?: Partial<WidgetsTimePicker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsTimePicker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    format_12: string;
    format12: string;
    format_24: string;
    format24: string;
    time: GLib.DateTime;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'time-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'time-changed', callback: (_source: this) => void): number;

    emit(signal: 'time-changed'): void;

    // Constructors

    static with_format(format_12: string, format_24: string): WidgetsTimePicker;

    static ['new'](): WidgetsTimePicker;

    // Members

    get_format_12(): string;

    get_format_24(): string;

    get_time(): GLib.DateTime;

    set_time(value: GLib.DateTime): void;

    position_dropdown(): [number, number];

    vfunc_position_dropdown(): [number, number];
}

export namespace WidgetsToast {
    export interface ConstructorProperties extends Gtk.Revealer.ConstructorProperties {
        [key: string]: any;

        title: string;
    }
}

export class WidgetsToast extends Gtk.Revealer {
    static $gtype: GObject.GType<WidgetsToast>;

    constructor(properties?: Partial<WidgetsToast.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsToast.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'closed', callback: (_source: this) => void): number;

    connect_after(signal: 'closed', callback: (_source: this) => void): number;

    emit(signal: 'closed'): void;

    connect(signal: 'default-action', callback: (_source: this) => void): number;

    connect_after(signal: 'default-action', callback: (_source: this) => void): number;

    emit(signal: 'default-action'): void;

    // Constructors

    static ['new'](title: string): WidgetsToast;
    static ['new'](...args: never[]): never;

    // Members

    get_title(): string;

    set_title(value: string): void;

    set_default_action(label?: string | null): void;

    send_notification(): void;
}

export namespace WidgetsWelcomeButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;

        title: string;
        description: string;
        icon: Gtk.Image;
    }
}

export class WidgetsWelcomeButton extends Gtk.Button {
    static $gtype: GObject.GType<WidgetsWelcomeButton>;

    constructor(properties?: Partial<WidgetsWelcomeButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsWelcomeButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;
    description: string;
    icon: Gtk.Image;

    // Constructors

    static ['new'](image: Gtk.Image | null, option_text: string, description_text: string): WidgetsWelcomeButton;
    static ['new'](...args: never[]): never;

    // Members

    get_title(): string;

    set_title(value: string): void;

    get_description(): string;

    set_description(value: string): void;

    get_icon(): Gtk.Image | null;

    set_icon(value?: Gtk.Image | null): void;
}

export namespace WidgetsWelcome {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        title: string;
        subtitle: string;
    }
}

export class WidgetsWelcome extends Gtk.EventBox {
    static $gtype: GObject.GType<WidgetsWelcome>;

    constructor(properties?: Partial<WidgetsWelcome.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetsWelcome.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;
    subtitle: string;

    // Fields
    children: Gtk.Button[];
    options: Gtk.Grid;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activated', callback: (_source: this, index: number) => void): number;

    connect_after(signal: 'activated', callback: (_source: this, index: number) => void): number;

    emit(signal: 'activated', index: number): void;

    // Constructors

    static ['new'](title_text: string, subtitle_text: string): WidgetsWelcome;
    static ['new'](...args: never[]): never;

    // Members

    get_title(): string;

    set_title(value: string): void;

    get_subtitle(): string;

    set_subtitle(value: string): void;

    set_item_visible(index: number, val: boolean): void;

    remove_item(index: number): void;

    set_item_sensitivity(index: number, val: boolean): void;

    append(icon_name: string, option_text: string, description_text: string): number;

    append_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null, option_text: string, description_text: string): number;

    append_with_image(image: Gtk.Image | null, option_text: string, description_text: string): number;

    get_button_from_index(index: number): WidgetsWelcomeButton | null;
}

export namespace Application {
    export interface ConstructorProperties extends Gtk.Application.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Application extends Gtk.Application {
    static $gtype: GObject.GType<Application>;

    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

    // Fields
    build_data_dir: string;
    build_pkg_data_dir: string;
    build_release_name: string;
    build_version: string;
    build_version_info: string;
    program_name: string;
    exec_name: string;
    app_copyright: string;
    app_years: string;
    app_icon: string;
    app_launcher: string;
    main_url: string;
    bug_url: string;
    help_url: string;
    translate_url: string;
    about_authors: string[];
    about_authors_length1: number;
    about_documenters: string[];
    about_documenters_length1: number;
    about_artists: string[];
    about_artists_length1: number;
    about_comments: string;
    about_translators: string;
    about_license: string;
    about_license_type: Gtk.License;
    granite_application_DEBUG: boolean;
    about_dlg: WidgetsAboutDialog;

    // Members

    run(args: string[]): number;
    run(...args: never[]): never;

    set_options(): void;

    create_appmenu(menu: Gtk.Menu): WidgetsAppMenu;

    show_about(parent: Gtk.Widget): void;

    vfunc_set_options(): void;

    vfunc_show_about(parent: Gtk.Widget): void;
}

export namespace SettingsPage {
    export interface ConstructorProperties extends Gtk.ScrolledWindow.ConstructorProperties {
        [key: string]: any;

        status_type: SettingsPageStatusType;
        statusType: SettingsPageStatusType;
        display_widget: Gtk.Widget;
        displayWidget: Gtk.Widget;
        header: string;
        status: string;
        icon_name: string;
        iconName: string;
        title: string;
    }
}

export abstract class SettingsPage extends Gtk.ScrolledWindow {
    static $gtype: GObject.GType<SettingsPage>;

    constructor(properties?: Partial<SettingsPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SettingsPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    status_type: SettingsPageStatusType;
    statusType: SettingsPageStatusType;
    display_widget: Gtk.Widget;
    displayWidget: Gtk.Widget;
    header: string;
    status: string;
    icon_name: string;
    iconName: string;
    title: string;

    // Members

    get_status_type(): SettingsPageStatusType;

    set_status_type(value: SettingsPageStatusType): void;

    get_display_widget(): Gtk.Widget | null;

    get_header(): string | null;

    get_status(): string;

    set_status(value: string): void;

    get_icon_name(): string | null;

    set_icon_name(value?: string | null): void;

    get_title(): string;

    set_title(value: string): void;
}

export namespace SimpleSettingsPage {
    export interface ConstructorProperties extends SettingsPage.ConstructorProperties {
        [key: string]: any;

        action_area: Gtk.ButtonBox;
        actionArea: Gtk.ButtonBox;
        content_area: Gtk.Grid;
        contentArea: Gtk.Grid;
        status_switch: Gtk.Switch;
        statusSwitch: Gtk.Switch;
        activatable: boolean;
        description: string;
        icon_name: string;
        iconName: string;
        title: string;
    }
}

export abstract class SimpleSettingsPage extends SettingsPage {
    static $gtype: GObject.GType<SimpleSettingsPage>;

    constructor(properties?: Partial<SimpleSettingsPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleSettingsPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action_area: Gtk.ButtonBox;
    actionArea: Gtk.ButtonBox;
    content_area: Gtk.Grid;
    contentArea: Gtk.Grid;
    status_switch: Gtk.Switch;
    statusSwitch: Gtk.Switch;
    activatable: boolean;
    description: string;
    icon_name: string;
    iconName: string;
    title: string;

    // Members

    get_action_area(): Gtk.ButtonBox;

    get_content_area(): Gtk.Grid;

    get_status_switch(): Gtk.Switch | null;

    get_activatable(): boolean;

    get_description(): string;

    set_description(value: string): void;

    get_icon_name(): string;
    get_icon_name(...args: never[]): never;

    set_icon_name(value: string): void;
    set_icon_name(...args: never[]): never;

    get_title(): string;

    set_title(value: string): void;
}

export namespace AccelLabel {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        action_name: string;
        actionName: string;
        accel_string: string;
        accelString: string;
        label: string;
    }
}

export class AccelLabel extends Gtk.Grid {
    static $gtype: GObject.GType<AccelLabel>;

    constructor(properties?: Partial<AccelLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AccelLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action_name: string;
    actionName: string;
    accel_string: string;
    accelString: string;
    label: string;

    // Constructors

    static ['new'](label: string, accel_string?: string | null): AccelLabel;
    static ['new'](...args: never[]): never;

    static from_action_name(label: string, action_name: string): AccelLabel;

    // Members

    get_action_name(): string;

    set_action_name(value: string): void;

    get_accel_string(): string | null;

    set_accel_string(value?: string | null): void;

    get_label(): string;

    set_label(value: string): void;
}

export namespace AsyncImage {
    export interface ConstructorProperties extends Gtk.Image.ConstructorProperties {
        [key: string]: any;

        load_on_realize: boolean;
        loadOnRealize: boolean;
        auto_size_request: boolean;
        autoSizeRequest: boolean;
        gicon_async: Gio.Icon;
        giconAsync: Gio.Icon;
        size_async: number;
        sizeAsync: number;
    }
}

export class AsyncImage extends Gtk.Image {
    static $gtype: GObject.GType<AsyncImage>;

    constructor(properties?: Partial<AsyncImage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AsyncImage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    load_on_realize: boolean;
    loadOnRealize: boolean;
    auto_size_request: boolean;
    autoSizeRequest: boolean;
    gicon_async: Gio.Icon;
    giconAsync: Gio.Icon;
    size_async: number;
    sizeAsync: number;

    // Constructors

    static ['new'](load_on_realize: boolean, auto_size_request: boolean): AsyncImage;
    static ['new'](...args: never[]): never;

    static from_gicon_async(
        icon: Gio.Icon,
        size: number,
        load_on_realize: boolean,
        auto_size_request: boolean
    ): AsyncImage;

    static from_icon_name_async(
        icon_name: string,
        icon_size: Gtk.IconSize,
        load_on_realize: boolean,
        auto_size_request: boolean
    ): AsyncImage;

    // Members

    get_gicon_async(): Gio.Icon | null;

    get_size_async(): number;

    set_from_gicon_async(
        icon: Gio.Icon,
        size: number,
        cancellable?: Gio.Cancellable | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_from_gicon_finish(_res_: Gio.AsyncResult): void;

    set_from_icon_name_async(
        icon_name: string,
        icon_size: Gtk.IconSize,
        cancellable?: Gio.Cancellable | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_from_icon_name_finish(_res_: Gio.AsyncResult): void;

    set_from_file_async(
        file: Gio.File,
        width: number,
        height: number,
        preserve_aspect_ratio: boolean,
        cancellable?: Gio.Cancellable | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_from_file_finish(_res_: Gio.AsyncResult): void;
}

export namespace HeaderLabel {
    export interface ConstructorProperties extends Gtk.Label.ConstructorProperties {
        [key: string]: any;
    }
}

export class HeaderLabel extends Gtk.Label {
    static $gtype: GObject.GType<HeaderLabel>;

    constructor(properties?: Partial<HeaderLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HeaderLabel.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](label: string): HeaderLabel;
    static ['new'](...args: never[]): never;
}

export namespace MessageDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        primary_text: string;
        primaryText: string;
        secondary_text: string;
        secondaryText: string;
        image_icon: Gio.Icon;
        imageIcon: Gio.Icon;
        badge_icon: Gio.Icon;
        badgeIcon: Gio.Icon;
        primary_label: Gtk.Label;
        primaryLabel: Gtk.Label;
        secondary_label: Gtk.Label;
        secondaryLabel: Gtk.Label;
        buttons: Gtk.ButtonsType;
        custom_bin: Gtk.Bin;
        customBin: Gtk.Bin;
    }
}

export class MessageDialog extends Gtk.Dialog {
    static $gtype: GObject.GType<MessageDialog>;

    constructor(properties?: Partial<MessageDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessageDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    primary_text: string;
    primaryText: string;
    secondary_text: string;
    secondaryText: string;
    image_icon: Gio.Icon;
    imageIcon: Gio.Icon;
    badge_icon: Gio.Icon;
    badgeIcon: Gio.Icon;
    primary_label: Gtk.Label;
    primaryLabel: Gtk.Label;
    secondary_label: Gtk.Label;
    secondaryLabel: Gtk.Label;
    buttons: Gtk.ButtonsType;
    custom_bin: Gtk.Bin;
    customBin: Gtk.Bin;

    // Constructors

    static ['new'](
        primary_text: string,
        secondary_text: string,
        image_icon: Gio.Icon,
        buttons: Gtk.ButtonsType
    ): MessageDialog;

    static ['new'](...args: never[]): never;

    static with_image_from_icon_name(
        primary_text: string,
        secondary_text: string,
        image_icon_name: string,
        buttons: Gtk.ButtonsType
    ): MessageDialog;

    // Members

    get_primary_text(): string;

    set_primary_text(value: string): void;

    get_secondary_text(): string;

    set_secondary_text(value: string): void;

    get_image_icon(): Gio.Icon;

    set_image_icon(value: Gio.Icon): void;

    get_badge_icon(): Gio.Icon;

    set_badge_icon(value: Gio.Icon): void;

    get_primary_label(): Gtk.Label;

    get_secondary_label(): Gtk.Label;

    get_custom_bin(): Gtk.Bin;

    show_error_details(error_message: string): void;
}

export namespace ModeSwitch {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        active: boolean;
        primary_icon_gicon: Gio.Icon;
        primaryIconGicon: Gio.Icon;
        primary_icon_name: string;
        primaryIconName: string;
        primary_icon_tooltip_text: string;
        primaryIconTooltipText: string;
        secondary_icon_gicon: Gio.Icon;
        secondaryIconGicon: Gio.Icon;
        secondary_icon_name: string;
        secondaryIconName: string;
        secondary_icon_tooltip_text: string;
        secondaryIconTooltipText: string;
    }
}

export class ModeSwitch extends Gtk.Grid {
    static $gtype: GObject.GType<ModeSwitch>;

    constructor(properties?: Partial<ModeSwitch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ModeSwitch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active: boolean;
    primary_icon_gicon: Gio.Icon;
    primaryIconGicon: Gio.Icon;
    primary_icon_name: string;
    primaryIconName: string;
    primary_icon_tooltip_text: string;
    primaryIconTooltipText: string;
    secondary_icon_gicon: Gio.Icon;
    secondaryIconGicon: Gio.Icon;
    secondary_icon_name: string;
    secondaryIconName: string;
    secondary_icon_tooltip_text: string;
    secondaryIconTooltipText: string;

    // Constructors

    static ['new'](primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch;
    static ['new'](...args: never[]): never;

    static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;

    // Members

    get_active(): boolean;

    set_active(value: boolean): void;

    get_primary_icon_gicon(): Gio.Icon;

    set_primary_icon_gicon(value: Gio.Icon): void;

    get_primary_icon_name(): string;

    set_primary_icon_name(value: string): void;

    get_primary_icon_tooltip_text(): string;

    set_primary_icon_tooltip_text(value: string): void;

    get_secondary_icon_gicon(): Gio.Icon;

    set_secondary_icon_gicon(value: Gio.Icon): void;

    get_secondary_icon_name(): string;

    set_secondary_icon_name(value: string): void;

    get_secondary_icon_tooltip_text(): string;

    set_secondary_icon_tooltip_text(value: string): void;
}

export namespace SeekBar {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        playback_duration: number;
        playbackDuration: number;
        playback_progress: number;
        playbackProgress: number;
        is_grabbing: boolean;
        isGrabbing: boolean;
        is_hovering: boolean;
        isHovering: boolean;
        progression_label: Gtk.Label;
        progressionLabel: Gtk.Label;
        duration_label: Gtk.Label;
        durationLabel: Gtk.Label;
        scale: Gtk.Scale;
    }
}

export class SeekBar extends Gtk.Grid {
    static $gtype: GObject.GType<SeekBar>;

    constructor(properties?: Partial<SeekBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SeekBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    playback_duration: number;
    playbackDuration: number;
    playback_progress: number;
    playbackProgress: number;
    is_grabbing: boolean;
    isGrabbing: boolean;
    is_hovering: boolean;
    isHovering: boolean;
    progression_label: Gtk.Label;
    progressionLabel: Gtk.Label;
    duration_label: Gtk.Label;
    durationLabel: Gtk.Label;
    scale: Gtk.Scale;

    // Constructors

    static ['new'](playback_duration: number): SeekBar;
    static ['new'](...args: never[]): never;

    // Members

    get_playback_duration(): number;

    set_playback_duration(value: number): void;

    get_playback_progress(): number;

    set_playback_progress(value: number): void;

    get_is_grabbing(): boolean;

    get_is_hovering(): boolean;

    get_progression_label(): Gtk.Label;

    set_progression_label(value: Gtk.Label): void;

    get_duration_label(): Gtk.Label;

    set_duration_label(value: Gtk.Label): void;

    get_scale(): Gtk.Scale;

    set_scale(value: Gtk.Scale): void;
}

export namespace Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        prefers_color_scheme: SettingsColorScheme;
        prefersColorScheme: SettingsColorScheme;
    }
}

export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    prefers_color_scheme: SettingsColorScheme;
    prefersColorScheme: SettingsColorScheme;

    // Members

    get_prefers_color_scheme(): SettingsColorScheme;

    static get_default(): Settings;
}

export namespace SettingsSidebar {
    export interface ConstructorProperties extends Gtk.ScrolledWindow.ConstructorProperties {
        [key: string]: any;

        stack: Gtk.Stack;
        visible_child_name: string;
        visibleChildName: string;
    }
}

export class SettingsSidebar extends Gtk.ScrolledWindow {
    static $gtype: GObject.GType<SettingsSidebar>;

    constructor(properties?: Partial<SettingsSidebar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SettingsSidebar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    stack: Gtk.Stack;
    visible_child_name: string;
    visibleChildName: string;

    // Constructors

    static ['new'](stack: Gtk.Stack): SettingsSidebar;
    static ['new'](...args: never[]): never;

    // Members

    get_stack(): Gtk.Stack;

    get_visible_child_name(): string | null;

    set_visible_child_name(value?: string | null): void;
}

export class DrawingBufferSurfacePrivate {
    static $gtype: GObject.GType<DrawingBufferSurfacePrivate>;

    constructor(copy: DrawingBufferSurfacePrivate);
}

export class DrawingColorPrivate {
    static $gtype: GObject.GType<DrawingColorPrivate>;

    constructor(copy: DrawingColorPrivate);
}

export class DrawingUtilitiesPrivate {
    static $gtype: GObject.GType<DrawingUtilitiesPrivate>;

    constructor(copy: DrawingUtilitiesPrivate);
}

export class GtkPatchAboutDialogPrivate {
    static $gtype: GObject.GType<GtkPatchAboutDialogPrivate>;

    constructor(copy: GtkPatchAboutDialogPrivate);
}

export class ServicesContractorProxyPrivate {
    static $gtype: GObject.GType<ServicesContractorProxyPrivate>;

    constructor(copy: ServicesContractorProxyPrivate);
}

export class ServicesIconFactoryPrivate {
    static $gtype: GObject.GType<ServicesIconFactoryPrivate>;

    constructor(copy: ServicesIconFactoryPrivate);
}

export class ServicesLoggerPrivate {
    static $gtype: GObject.GType<ServicesLoggerPrivate>;

    constructor(copy: ServicesLoggerPrivate);
}

export class ServicesPathsPrivate {
    static $gtype: GObject.GType<ServicesPathsPrivate>;

    constructor(copy: ServicesPathsPrivate);
}

export class ServicesSettingsPrivate {
    static $gtype: GObject.GType<ServicesSettingsPrivate>;

    constructor(copy: ServicesSettingsPrivate);
}

export class ServicesSimpleCommandPrivate {
    static $gtype: GObject.GType<ServicesSimpleCommandPrivate>;

    constructor(copy: ServicesSimpleCommandPrivate);
}

export class ServicesSystemPrivate {
    static $gtype: GObject.GType<ServicesSystemPrivate>;

    constructor(copy: ServicesSystemPrivate);
}

export class WidgetsAboutDialogPrivate {
    static $gtype: GObject.GType<WidgetsAboutDialogPrivate>;

    constructor(copy: WidgetsAboutDialogPrivate);
}

export class WidgetsAlertViewPrivate {
    static $gtype: GObject.GType<WidgetsAlertViewPrivate>;

    constructor(copy: WidgetsAlertViewPrivate);
}

export class WidgetsAppMenuPrivate {
    static $gtype: GObject.GType<WidgetsAppMenuPrivate>;

    constructor(copy: WidgetsAppMenuPrivate);
}

export class WidgetsAvatarPrivate {
    static $gtype: GObject.GType<WidgetsAvatarPrivate>;

    constructor(copy: WidgetsAvatarPrivate);
}

export class WidgetsCellRendererBadgePrivate {
    static $gtype: GObject.GType<WidgetsCellRendererBadgePrivate>;

    constructor(copy: WidgetsCellRendererBadgePrivate);
}

export class WidgetsCellRendererExpanderPrivate {
    static $gtype: GObject.GType<WidgetsCellRendererExpanderPrivate>;

    constructor(copy: WidgetsCellRendererExpanderPrivate);
}

export class WidgetsCollapsiblePanedPrivate {
    static $gtype: GObject.GType<WidgetsCollapsiblePanedPrivate>;

    constructor(copy: WidgetsCollapsiblePanedPrivate);
}

export class WidgetsCompositedWindowPrivate {
    static $gtype: GObject.GType<WidgetsCompositedWindowPrivate>;

    constructor(copy: WidgetsCompositedWindowPrivate);
}

export class WidgetsDatePickerPrivate {
    static $gtype: GObject.GType<WidgetsDatePickerPrivate>;

    constructor(copy: WidgetsDatePickerPrivate);
}

export class WidgetsTabPrivate {
    static $gtype: GObject.GType<WidgetsTabPrivate>;

    constructor(copy: WidgetsTabPrivate);
}

export class WidgetsDynamicNotebookPrivate {
    static $gtype: GObject.GType<WidgetsDynamicNotebookPrivate>;

    constructor(copy: WidgetsDynamicNotebookPrivate);
}

export class WidgetsModeButtonPrivate {
    static $gtype: GObject.GType<WidgetsModeButtonPrivate>;

    constructor(copy: WidgetsModeButtonPrivate);
}

export class WidgetsOverlayBarPrivate {
    static $gtype: GObject.GType<WidgetsOverlayBarPrivate>;

    constructor(copy: WidgetsOverlayBarPrivate);
}

export class WidgetsSourceListPrivate {
    static $gtype: GObject.GType<WidgetsSourceListPrivate>;

    constructor(copy: WidgetsSourceListPrivate);
}

export class WidgetsSourceListItemPrivate {
    static $gtype: GObject.GType<WidgetsSourceListItemPrivate>;

    constructor(copy: WidgetsSourceListItemPrivate);
}

export class WidgetsSourceListExpandableItemPrivate {
    static $gtype: GObject.GType<WidgetsSourceListExpandableItemPrivate>;

    constructor(copy: WidgetsSourceListExpandableItemPrivate);
}

export class WidgetsStorageBarPrivate {
    static $gtype: GObject.GType<WidgetsStorageBarPrivate>;

    constructor(copy: WidgetsStorageBarPrivate);
}

export class WidgetsTimePickerPrivate {
    static $gtype: GObject.GType<WidgetsTimePickerPrivate>;

    constructor(copy: WidgetsTimePickerPrivate);
}

export class WidgetsToastPrivate {
    static $gtype: GObject.GType<WidgetsToastPrivate>;

    constructor(copy: WidgetsToastPrivate);
}

export class WidgetsWelcomeButtonPrivate {
    static $gtype: GObject.GType<WidgetsWelcomeButtonPrivate>;

    constructor(copy: WidgetsWelcomeButtonPrivate);
}

export class WidgetsWelcomePrivate {
    static $gtype: GObject.GType<WidgetsWelcomePrivate>;

    constructor(copy: WidgetsWelcomePrivate);
}

export class ApplicationPrivate {
    static $gtype: GObject.GType<ApplicationPrivate>;

    constructor(copy: ApplicationPrivate);
}

export class SettingsPagePrivate {
    static $gtype: GObject.GType<SettingsPagePrivate>;

    constructor(copy: SettingsPagePrivate);
}

export class SimpleSettingsPagePrivate {
    static $gtype: GObject.GType<SimpleSettingsPagePrivate>;

    constructor(copy: SimpleSettingsPagePrivate);
}

export class AccelLabelPrivate {
    static $gtype: GObject.GType<AccelLabelPrivate>;

    constructor(copy: AccelLabelPrivate);
}

export class AsyncImagePrivate {
    static $gtype: GObject.GType<AsyncImagePrivate>;

    constructor(copy: AsyncImagePrivate);
}

export class HeaderLabelPrivate {
    static $gtype: GObject.GType<HeaderLabelPrivate>;

    constructor(copy: HeaderLabelPrivate);
}

export class MessageDialogPrivate {
    static $gtype: GObject.GType<MessageDialogPrivate>;

    constructor(copy: MessageDialogPrivate);
}

export class ModeSwitchPrivate {
    static $gtype: GObject.GType<ModeSwitchPrivate>;

    constructor(copy: ModeSwitchPrivate);
}

export class SeekBarPrivate {
    static $gtype: GObject.GType<SeekBarPrivate>;

    constructor(copy: SeekBarPrivate);
}

export class SettingsPrivate {
    static $gtype: GObject.GType<SettingsPrivate>;

    constructor(copy: SettingsPrivate);
}

export class SettingsSidebarPrivate {
    static $gtype: GObject.GType<SettingsSidebarPrivate>;

    constructor(copy: SettingsSidebarPrivate);
}

export interface ServicesContractNamespace {
    $gtype: GObject.GType<ServicesContract>;
    prototype: ServicesContractPrototype;
}

export type ServicesContract = ServicesContractPrototype;

export interface ServicesContractPrototype extends GObject.Object {
    // Members

    get_display_name(): string;

    get_description(): string;

    get_icon(): Gio.Icon;

    execute_with_file(file: Gio.File): void;

    execute_with_files(files: Gio.File[]): void;

    vfunc_get_display_name(): string;

    vfunc_get_description(): string;

    vfunc_get_icon(): Gio.Icon;

    vfunc_execute_with_file(file: Gio.File): void;

    vfunc_execute_with_files(files: Gio.File[]): void;
}

export const ServicesContract: ServicesContractNamespace;

export interface ServicesSettingsSerializableNamespace {
    $gtype: GObject.GType<ServicesSettingsSerializable>;
    prototype: ServicesSettingsSerializablePrototype;
}

export type ServicesSettingsSerializable = ServicesSettingsSerializablePrototype;

export interface ServicesSettingsSerializablePrototype extends GObject.Object {
    // Members

    settings_serialize(): string;

    settings_deserialize(s: string): void;

    vfunc_settings_serialize(): string;

    vfunc_settings_deserialize(s: string): void;
}

export const ServicesSettingsSerializable: ServicesSettingsSerializableNamespace;

export interface WidgetsSourceListSortableNamespace {
    $gtype: GObject.GType<WidgetsSourceListSortable>;
    prototype: WidgetsSourceListSortablePrototype;
}

export type WidgetsSourceListSortable = WidgetsSourceListSortablePrototype;

export interface WidgetsSourceListSortablePrototype extends WidgetsSourceListExpandableItem {
    // Members

    allow_dnd_sorting(): boolean;

    compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;

    vfunc_allow_dnd_sorting(): boolean;

    vfunc_compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;
}

export const WidgetsSourceListSortable: WidgetsSourceListSortableNamespace;

export interface WidgetsSourceListDragSourceNamespace {
    $gtype: GObject.GType<WidgetsSourceListDragSource>;
    prototype: WidgetsSourceListDragSourcePrototype;
}

export type WidgetsSourceListDragSource = WidgetsSourceListDragSourcePrototype;

export interface WidgetsSourceListDragSourcePrototype extends WidgetsSourceListItem {
    // Members

    draggable(): boolean;

    prepare_selection_data(selection_data: Gtk.SelectionData): void;

    vfunc_draggable(): boolean;

    vfunc_prepare_selection_data(selection_data: Gtk.SelectionData): void;
}

export const WidgetsSourceListDragSource: WidgetsSourceListDragSourceNamespace;

export interface WidgetsSourceListDragDestNamespace {
    $gtype: GObject.GType<WidgetsSourceListDragDest>;
    prototype: WidgetsSourceListDragDestPrototype;
}

export type WidgetsSourceListDragDest = WidgetsSourceListDragDestPrototype;

export interface WidgetsSourceListDragDestPrototype extends WidgetsSourceListItem {
    // Members

    data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;

    data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;

    vfunc_data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;

    vfunc_data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;
}

export const WidgetsSourceListDragDest: WidgetsSourceListDragDestNamespace;
