/**
 * GnomeDesktop 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GDesktopEnums from './gdesktopenums';
import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as Gio from './gio';
import * as GdkPixbuf from './gdkpixbuf';
import * as GLib from './glib';
import * as Gdk from './gdk';
import * as cairo from './cairo';

export const RR_CONNECTOR_TYPE_PANEL: string;

export function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;

export function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string;

export function get_all_locales(): string[];

export function get_country_from_code(code: string, translation?: string | null): string;

export function get_country_from_locale(locale: string, translation?: string | null): string;

export function get_input_source_from_locale(locale: string): [boolean, string, string];

export function get_language_from_code(code: string, translation?: string | null): string;

export function get_language_from_locale(locale: string, translation?: string | null): string;

export function get_translated_modifier(modifier: string, translation?: string | null): string;

export function language_has_translations(code: string): boolean;

export function normalize_locale(locale: string): string;

export function parse_locale(locale: string): [boolean, string | null, string | null, string | null, string | null];

export function rr_error_quark(): GLib.Quark;

export function start_systemd_scope(
    name: string,
    pid: number,
    description?: string | null,
    connection?: Gio.DBusConnection | null,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<string> | null
): void;

export function start_systemd_scope_finish(res: Gio.AsyncResult): boolean;

export type IdleMonitorWatchFunc = (monitor: IdleMonitor, id: number) => void;

export namespace DesktopThumbnailSize {
    export const $gtype: GObject.GType<DesktopThumbnailSize>;
}

export enum DesktopThumbnailSize {
    NORMAL = 0,
    LARGE = 1,
}

export namespace RRDpmsMode {
    export const $gtype: GObject.GType<RRDpmsMode>;
}

export enum RRDpmsMode {
    ON = 0,
    STANDBY = 1,
    SUSPEND = 2,
    OFF = 3,
    UNKNOWN = 4,
}

export namespace RRDpmsModeType {
    export const $gtype: GObject.GType<RRDpmsModeType>;
}

export enum RRDpmsModeType {
    ON = 0,
    STANDBY = 1,
    SUSPEND = 2,
    OFF = 3,
    UNKNOWN = 4,
}

export class RRError extends GLib.Error {
    static $gtype: GObject.GType<RRError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RRError);

    // Properties
    static UNKNOWN: number;
    static NO_RANDR_EXTENSION: number;
    static RANDR_ERROR: number;
    static BOUNDS_ERROR: number;
    static CRTC_ASSIGNMENT: number;
    static NO_MATCHING_CONFIG: number;
    static NO_DPMS_EXTENSION: number;
}

export namespace RRRotation {
    export const $gtype: GObject.GType<RRRotation>;
}

export enum RRRotation {
    ROTATION_NEXT = 0,
    ROTATION_0 = 1,
    ROTATION_90 = 2,
    ROTATION_180 = 4,
    ROTATION_270 = 8,
    REFLECT_X = 16,
    REFLECT_Y = 32,
}

export namespace BG {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BG extends GObject.Object {
    static $gtype: GObject.GType<BG>;

    constructor(properties?: Partial<BG.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BG.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(signal: 'transitioned', callback: (_source: this) => void): number;

    connect_after(signal: 'transitioned', callback: (_source: this) => void): number;

    emit(signal: 'transitioned'): void;

    // Constructors

    static ['new'](): BG;

    // Members

    changes_with_time(): boolean;

    create_frame_thumbnail(
        factory: DesktopThumbnailFactory,
        screen: Gdk.Screen,
        dest_width: number,
        dest_height: number,
        frame_num: number
    ): GdkPixbuf.Pixbuf;

    create_surface(window: Gdk.Window, width: number, height: number): cairo.Surface;

    create_thumbnail(
        factory: DesktopThumbnailFactory,
        screen: Gdk.Screen,
        dest_width: number,
        dest_height: number
    ): GdkPixbuf.Pixbuf;

    draw(dest: GdkPixbuf.Pixbuf): void;

    get_filename(): string;

    get_image_size(
        factory: DesktopThumbnailFactory,
        best_width: number,
        best_height: number,
        width: number,
        height: number
    ): boolean;

    get_placement(): GDesktopEnums.BackgroundStyle;

    get_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;

    has_multiple_sizes(): boolean;

    is_dark(dest_width: number, dest_height: number): boolean;

    load_from_preferences(settings: Gio.Settings): void;

    save_to_preferences(settings: Gio.Settings): void;

    set_filename(filename: string): void;

    set_placement(placement: GDesktopEnums.BackgroundStyle): void;

    set_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
}

export namespace BGCrossfade {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        height: number;
        width: number;
    }
}

export class BGCrossfade extends GObject.Object {
    static $gtype: GObject.GType<BGCrossfade>;

    constructor(properties?: Partial<BGCrossfade.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BGCrossfade.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    width: number;

    // Fields
    parent_object: GObject.Object;
    priv: BGCrossfadePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'finished', callback: (_source: this, window: GObject.Object) => void): number;

    connect_after(signal: 'finished', callback: (_source: this, window: GObject.Object) => void): number;

    emit(signal: 'finished', window: GObject.Object): void;

    // Constructors

    static ['new'](width: number, height: number): BGCrossfade;

    // Members

    is_started(): boolean;

    set_end_surface(surface: cairo.Surface): boolean;

    set_start_surface(surface: cairo.Surface): boolean;

    start(window: Gdk.Window): void;

    stop(): void;

    vfunc_finished(window: Gdk.Window): void;
}

export namespace BGSlideShow {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        file: Gio.File;
        has_multiple_sizes: boolean;
        hasMultipleSizes: boolean;
        start_time: number;
        startTime: number;
        total_duration: number;
        totalDuration: number;
    }
}

export class BGSlideShow extends GObject.Object {
    static $gtype: GObject.GType<BGSlideShow>;

    constructor(properties?: Partial<BGSlideShow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BGSlideShow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file: Gio.File;
    has_multiple_sizes: boolean;
    hasMultipleSizes: boolean;
    start_time: number;
    startTime: number;
    total_duration: number;
    totalDuration: number;

    // Fields
    parent_object: GObject.Object;
    priv: BGSlideShowPrivate;

    // Constructors

    static ['new'](filename: string): BGSlideShow;

    // Members

    get_current_slide(
        width: number,
        height: number
    ): [number | null, number | null, boolean | null, string | null, string | null];

    get_has_multiple_sizes(): boolean;

    get_num_slides(): number;

    get_slide(
        frame_number: number,
        width: number,
        height: number
    ): [boolean, number | null, number | null, boolean | null, string | null, string | null];

    get_start_time(): number;

    get_total_duration(): number;

    load(): boolean;

    load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
}

export namespace DesktopThumbnailFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DesktopThumbnailFactory extends GObject.Object {
    static $gtype: GObject.GType<DesktopThumbnailFactory>;

    constructor(properties?: Partial<DesktopThumbnailFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DesktopThumbnailFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DesktopThumbnailFactoryPrivate;

    // Constructors

    static ['new'](size: DesktopThumbnailSize): DesktopThumbnailFactory;

    // Members

    can_thumbnail(uri: string, mime_type: string, mtime: number): boolean;

    create_failed_thumbnail(uri: string, mtime: number): void;

    generate_thumbnail(uri: string, mime_type: string): GdkPixbuf.Pixbuf;

    has_valid_failed_thumbnail(uri: string, mtime: number): boolean;

    lookup(uri: string, mtime: number): string;

    save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number): void;
}

export namespace IdleMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class IdleMonitor extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<IdleMonitor>;

    constructor(properties?: Partial<IdleMonitor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IdleMonitor.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: IdleMonitorPrivate;

    // Constructors

    static ['new'](): IdleMonitor;

    // Members

    add_idle_watch(interval_msec: number, callback?: IdleMonitorWatchFunc | null): number;

    add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;

    get_idletime(): number;

    remove_watch(id: number): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace PnpIds {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PnpIds extends GObject.Object {
    static $gtype: GObject.GType<PnpIds>;

    constructor(properties?: Partial<PnpIds.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PnpIds.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PnpIdsPrivate;

    // Constructors

    static ['new'](): PnpIds;

    // Members

    get_pnp_id(pnp_id: string): string;
}

export namespace RRConfig {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        screen: RRScreen;
    }
}

export class RRConfig extends GObject.Object {
    static $gtype: GObject.GType<RRConfig>;

    constructor(properties?: Partial<RRConfig.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RRConfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    screen: RRScreen;

    // Constructors

    static new_current(screen: RRScreen): RRConfig;

    // Members

    applicable(screen: RRScreen): boolean;

    apply(screen: RRScreen): boolean;

    apply_persistent(screen: RRScreen): boolean;

    ensure_primary(): boolean;

    equal(config2: RRConfig): boolean;

    get_clone(): boolean;

    get_outputs(): RROutputInfo[];

    load_current(): boolean;

    match(config2: RRConfig): boolean;

    sanitize(): void;

    set_clone(clone: boolean): void;
}

export namespace RROutputInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RROutputInfo extends GObject.Object {
    static $gtype: GObject.GType<RROutputInfo>;

    constructor(properties?: Partial<RROutputInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RROutputInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_aspect_ratio(): number;

    get_display_name(): string;

    get_geometry(): [number | null, number | null, number | null, number | null];

    get_name(): string;

    get_preferred_height(): number;

    get_preferred_width(): number;

    get_primary(): boolean;

    get_product(): string;

    get_refresh_rate(): number;

    get_rotation(): RRRotation;

    get_serial(): string;

    get_underscanning(): boolean;

    get_vendor(): string;

    is_active(): boolean;

    is_connected(): boolean;

    is_primary_tile(): boolean;

    set_active(active: boolean): void;

    set_geometry(x: number, y: number, width: number, height: number): void;

    set_primary(primary: boolean): void;

    set_refresh_rate(rate: number): void;

    set_rotation(rotation: RRRotation): void;

    set_underscanning(underscanning: boolean): void;

    supports_rotation(rotation: RRRotation): boolean;
}

export namespace RRScreen {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        dpms_mode: RRDpmsModeType;
        dpmsMode: RRDpmsModeType;
        gdk_screen: Gdk.Screen;
        gdkScreen: Gdk.Screen;
    }
}

export class RRScreen extends GObject.Object implements Gio.AsyncInitable<RRScreen>, Gio.Initable {
    static $gtype: GObject.GType<RRScreen>;

    constructor(properties?: Partial<RRScreen.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RRScreen.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dpms_mode: RRDpmsModeType;
    dpmsMode: RRDpmsModeType;
    gdk_screen: Gdk.Screen;
    gdkScreen: Gdk.Screen;

    // Fields
    priv: RRScreenPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(signal: 'output-connected', callback: (_source: this, output: any | null) => void): number;

    connect_after(signal: 'output-connected', callback: (_source: this, output: any | null) => void): number;

    emit(signal: 'output-connected', output: any | null): void;

    connect(signal: 'output-disconnected', callback: (_source: this, output: any | null) => void): number;

    connect_after(signal: 'output-disconnected', callback: (_source: this, output: any | null) => void): number;

    emit(signal: 'output-disconnected', output: any | null): void;

    // Constructors

    static ['new'](screen: Gdk.Screen): RRScreen;

    static new_finish(result: Gio.AsyncResult): RRScreen;
    static new_finish(...args: never[]): never;

    // Members

    get_crtc_by_id(id: number): RRCrtc;

    get_dpms_mode(): [boolean, RRDpmsMode];

    get_output_by_id(id: number): RROutput;

    get_output_by_name(name: string): RROutput;

    get_ranges(): [number, number, number, number];

    list_clone_modes(): RRMode[];

    list_crtcs(): RRCrtc[];

    list_modes(): RRMode[];

    list_outputs(): RROutput[];

    refresh(): boolean;

    set_dpms_mode(mode: RRDpmsMode): boolean;

    vfunc_changed(): void;

    vfunc_output_connected(output: RROutput): void;

    vfunc_output_disconnected(output: RROutput): void;

    static new_async(screen: Gdk.Screen, callback?: Gio.AsyncReadyCallback<RRScreen> | null): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): RRScreen;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace WallClock {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        clock: string;
        time_only: boolean;
        timeOnly: boolean;
        timezone: GLib.TimeZone;
    }
}

export class WallClock extends GObject.Object {
    static $gtype: GObject.GType<WallClock>;

    constructor(properties?: Partial<WallClock.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WallClock.ConstructorProperties>, ...args: any[]): void;

    // Properties
    clock: string;
    time_only: boolean;
    timeOnly: boolean;
    timezone: GLib.TimeZone;

    // Fields
    parent_object: GObject.Object;
    priv: WallClockPrivate;

    // Constructors

    static ['new'](): WallClock;

    // Members

    get_clock(): string;

    get_timezone(): GLib.TimeZone;

    string_for_datetime(
        now: GLib.DateTime,
        clock_format: GDesktopEnums.ClockFormat,
        show_weekday: boolean,
        show_full_date: boolean,
        show_seconds: boolean
    ): string;
}

export namespace XkbInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class XkbInfo extends GObject.Object {
    static $gtype: GObject.GType<XkbInfo>;

    constructor(properties?: Partial<XkbInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<XkbInfo.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    priv: XkbInfoPrivate;

    // Constructors

    static ['new'](): XkbInfo;

    // Members

    description_for_group(group_id: string): string;

    description_for_option(group_id: string, id: string): string;

    get_all_layouts(): string[];

    get_all_option_groups(): string[];

    get_languages_for_layout(layout_id: string): string[];

    get_layout_info(id: string): [boolean, string | null, string | null, string | null, string | null];

    get_layouts_for_country(country_code: string): string[];

    get_layouts_for_language(language_code: string): string[];

    get_options_for_group(group_id: string): string[];
}

export class BGCrossfadePrivate {
    static $gtype: GObject.GType<BGCrossfadePrivate>;

    constructor(copy: BGCrossfadePrivate);
}

export class BGSlideShowPrivate {
    static $gtype: GObject.GType<BGSlideShowPrivate>;

    constructor(copy: BGSlideShowPrivate);
}

export class DesktopThumbnailFactoryPrivate {
    static $gtype: GObject.GType<DesktopThumbnailFactoryPrivate>;

    constructor(copy: DesktopThumbnailFactoryPrivate);
}

export class IdleMonitorPrivate {
    static $gtype: GObject.GType<IdleMonitorPrivate>;

    constructor(copy: IdleMonitorPrivate);
}

export class PnpIdsPrivate {
    static $gtype: GObject.GType<PnpIdsPrivate>;

    constructor(copy: PnpIdsPrivate);
}

export class RRCTM {
    static $gtype: GObject.GType<RRCTM>;

    constructor(copy: RRCTM);

    // Fields
    matrix: number[];
}

export class RRConfigPrivate {
    static $gtype: GObject.GType<RRConfigPrivate>;

    constructor(copy: RRConfigPrivate);
}

export class RRCrtc {
    static $gtype: GObject.GType<RRCrtc>;

    constructor(copy: RRCrtc);

    // Members
    can_drive_output(output: RROutput): boolean;

    get_current_mode(): RRMode;

    get_current_rotation(): RRRotation;

    get_gamma(size: number): [boolean, number, number, number];

    get_id(): number;

    get_position(): [number | null, number | null];

    get_rotations(): RRRotation;

    set_gamma(size: number, red: number, green: number, blue: number): boolean;

    supports_rotation(rotation: RRRotation): boolean;
}

export class RRMode {
    static $gtype: GObject.GType<RRMode>;

    constructor(copy: RRMode);

    // Members
    get_freq(): number;

    get_freq_f(): number;

    get_height(): number;

    get_id(): number;

    get_is_interlaced(): boolean;

    get_is_tiled(): boolean;

    get_width(): number;
}

export class RROutput {
    static $gtype: GObject.GType<RROutput>;

    constructor(copy: RROutput);

    // Members
    can_clone(clone: RROutput): boolean;

    get_backlight(): number;

    get_crtc(): RRCrtc;

    get_current_mode(): RRMode;

    get_display_name(): string;

    get_edid_data(size: number): number;

    get_id(): number;

    get_ids_from_edid(): [string | null, string | null, string | null];

    get_is_primary(): boolean;

    get_is_underscanning(): boolean;

    get_min_backlight_step(): number;

    get_name(): string;

    get_physical_size(): [number | null, number | null];

    get_position(): [number | null, number | null];

    get_possible_crtcs(): RRCrtc[];

    get_preferred_mode(): RRMode;

    is_builtin_display(): boolean;

    list_modes(): RRMode[];

    set_backlight(value: number): boolean;

    set_color_transform(value: RRCTM): boolean;

    supports_color_transform(): boolean;

    supports_mode(mode: RRMode): boolean;

    supports_underscanning(): boolean;
}

export class RROutputInfoPrivate {
    static $gtype: GObject.GType<RROutputInfoPrivate>;

    constructor(copy: RROutputInfoPrivate);
}

export class RRScreenPrivate {
    static $gtype: GObject.GType<RRScreenPrivate>;

    constructor(copy: RRScreenPrivate);
}

export class WallClockPrivate {
    static $gtype: GObject.GType<WallClockPrivate>;

    constructor(copy: WallClockPrivate);
}

export class XkbInfoPrivate {
    static $gtype: GObject.GType<XkbInfoPrivate>;

    constructor(copy: XkbInfoPrivate);
}
