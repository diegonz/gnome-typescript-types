/**
 * Gkbd 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as Xkl from './xkl';
import * as xlib from './xlib';
import * as Atk from './atk';
import * as Gdk from './gdk';
import * as GdkPixbuf from './gdkpixbuf';
import * as GLib from './glib';
import * as cairo from './cairo';
import * as Pango from './pango';
import * as Gio from './gio';

export const DESKTOP_SCHEMA: string;
export const KEYBOARD_DRAWING_H: number;
export const KEYBOARD_SCHEMA: string;

export function install_glib_log_appender(): void;

export function keyboard_config_add_default_switch_option_if_necessary(
    layouts_list: string,
    options_list: string,
    was_appended: boolean
): string[];

export function keyboard_config_format_full_description(layout_descr: string, variant_descr: string): string;

export function keyboard_config_get_descriptions(
    config_registry: Xkl.ConfigRegistry,
    name: string,
    layout_short_descr: string,
    layout_descr: string,
    variant_short_descr: string,
    variant_descr: string
): boolean;

export function keyboard_config_merge_items(parent: string, child: string): string;

export function keyboard_config_split_items(merged: string, parent: string, child: string): boolean;

export function preview_load_position(): Gdk.Rectangle;

export function preview_save_position(rect: Gdk.Rectangle): void;

export function strv_append(arr: string, element: string): string[];

export function strv_behead(arr: string): void;

export function strv_remove(arr: string, element: string): boolean;

export namespace KeyboardDrawingGroupLevelPosition {
    export const $gtype: GObject.GType<KeyboardDrawingGroupLevelPosition>;
}

export enum KeyboardDrawingGroupLevelPosition {
    TOPLEFT = 0,
    TOPRIGHT = 1,
    BOTTOMLEFT = 2,
    BOTTOMRIGHT = 3,
    TOTAL = 4,
    FIRST = 0,
    LAST = 3,
}

export namespace KeyboardDrawingItemType {
    export const $gtype: GObject.GType<KeyboardDrawingItemType>;
}

export enum KeyboardDrawingItemType {
    INVALID = 0,
    KEY = 1,
    KEY_EXTRA = 2,
    DOODAD = 3,
}

export namespace Configuration {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Configuration extends GObject.Object {
    static $gtype: GObject.GType<Configuration>;

    constructor(properties?: Partial<Configuration.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Configuration.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ConfigurationPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(signal: 'group-changed', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'group-changed', callback: (_source: this, object: number) => void): number;

    emit(signal: 'group-changed', object: number): void;

    connect(signal: 'indicators-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'indicators-changed', callback: (_source: this) => void): number;

    emit(signal: 'indicators-changed'): void;

    // Members

    append_object(obj: GObject.Object): void;

    extract_layout_name(group: number): string;

    free_images(images: GdkPixbuf.Pixbuf[]): void;

    get_all_objects(): GObject.Object[];

    get_caps_lock_state(): boolean;

    get_current_group(): number;

    get_current_tooltip(): string;

    get_group_name(group: number): string;

    get_group_names(): string[];

    get_image_filename(group: number): string;

    get_indicator_config(): IndicatorConfig;

    get_keyboard_config(): KeyboardConfig;

    get_num_lock_state(): boolean;

    get_scroll_lock_state(): boolean;

    get_short_group_names(): string[];

    get_xkl_engine(): Xkl.Engine;

    if_any_object_exists(): boolean;

    if_flags_shown(): boolean;

    load_images(): GdkPixbuf.Pixbuf[];

    lock_group(group: number): void;

    lock_next_group(): void;

    remove_object(obj: GObject.Object): void;

    start_listen(): void;

    stop_listen(): void;

    static create_label_title(group: number, ln2cnt_map: GLib.HashTable<any, any>, layout_name: string): string;

    static get(): Configuration;
}

export namespace Indicator {
    export interface ConstructorProperties extends Gtk.Notebook.ConstructorProperties {
        [key: string]: any;
    }
}

export class Indicator extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Indicator>;

    constructor(properties?: Partial<Indicator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Indicator.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: IndicatorPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'reinit-ui', callback: (_source: this) => void): number;

    connect_after(signal: 'reinit-ui', callback: (_source: this) => void): number;

    emit(signal: 'reinit-ui'): void;

    // Constructors

    static ['new'](): Indicator;

    // Members

    reinit_ui(): void;

    set_angle(angle: number): void;

    set_parent_tooltips(ifset: boolean): void;

    vfunc_reinit_ui(): void;

    static get_group_names(): string[];

    static get_image_filename(group: number): string;

    static get_max_width_height_ratio(): number;

    static get_xkl_engine(): Xkl.Engine;

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

export namespace KeyboardDrawing {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;
    }
}

export class KeyboardDrawing extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<KeyboardDrawing>;

    constructor(properties?: Partial<KeyboardDrawing.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KeyboardDrawing.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'bad-keycode', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'bad-keycode', callback: (_source: this, object: number) => void): number;

    emit(signal: 'bad-keycode', object: number): void;

    // Constructors

    static dialog_new(): KeyboardDrawing;

    static ['new'](): KeyboardDrawing;

    // Members

    get_compat(): string;

    get_geometry(): string;

    get_keycodes(): string;

    get_symbols(): string;

    get_types(): string;

    print(parent_window: Gtk.Window, description: string): void;

    render(
        cr: cairo.Context,
        layout: Pango.Layout,
        x: number,
        y: number,
        width: number,
        height: number,
        dpi_x: number,
        dpi_y: number
    ): boolean;

    set_groups_levels(groupLevels: KeyboardDrawingGroupLevel): void;

    set_layout(id: string): void;

    set_track_config(enable: boolean): void;

    set_track_modifiers(enable: boolean): void;

    vfunc_bad_keycode(keycode: number): void;

    static dialog_set_group(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, group: number): void;

    static dialog_set_layout(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, layout: string): void;

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

export namespace Status {
    export interface ConstructorProperties extends Gtk.StatusIcon.ConstructorProperties {
        [key: string]: any;
    }
}

export class Status extends Gtk.StatusIcon {
    static $gtype: GObject.GType<Status>;

    constructor(properties?: Partial<Status.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Status.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StatusPrivate | any;

    // Constructors

    static ['new'](): Status;

    // Members

    reinit_ui(): void;

    static get_group_names(): string[];

    static get_image_filename(group: number): string;

    static get_xkl_engine(): Xkl.Engine;
}

export class ConfigurationPrivate {
    static $gtype: GObject.GType<ConfigurationPrivate>;

    constructor(copy: ConfigurationPrivate);
}

export class DesktopConfig {
    static $gtype: GObject.GType<DesktopConfig>;

    constructor(copy: DesktopConfig);

    // Fields
    default_group: number;
    group_per_app: boolean;
    handle_indicators: boolean;
    layout_names_as_group_names: boolean;
    load_extra_items: boolean;
    settings: Gio.Settings;
    config_listener_id: number;
    engine: Xkl.Engine;

    // Members
    activate(): boolean;

    init(engine: Xkl.Engine): void;

    load(): void;

    load_group_descriptions(
        registry: Xkl.ConfigRegistry,
        layout_ids: string,
        variant_ids: string,
        short_group_names: string,
        full_group_names: string
    ): boolean;

    lock_next_group(): void;

    lock_prev_group(): void;

    restore_group(): void;

    save(): void;

    start_listen(func: GObject.Callback): void;

    stop_listen(): void;

    term(): void;
}

export class IndicatorConfig {
    static $gtype: GObject.GType<IndicatorConfig>;

    constructor(copy: IndicatorConfig);

    // Fields
    secondary_groups_mask: number;
    show_flags: boolean;
    font_family: string;
    font_size: number;
    foreground_color: string;
    background_color: string;
    settings: Gio.Settings;
    image_filenames: any[];
    icon_theme: Gtk.IconTheme;
    config_listener_id: number;
    engine: Xkl.Engine;

    // Members
    activate(): void;

    free_image_filenames(): void;

    get_fg_color_for_widget(widget: Gtk.Widget): string;

    get_font_for_widget(widget: Gtk.Widget, font_family: string, font_size: number): void;

    get_images_file(kbd_config: KeyboardConfig, group: number): string;

    init(engine: Xkl.Engine): void;

    load(): void;

    load_image_filenames(kbd_config: KeyboardConfig): void;

    refresh_style(): void;

    save(): void;

    start_listen(func: GObject.Callback): void;

    stop_listen(): void;

    term(): void;
}

export class IndicatorPrivate {
    static $gtype: GObject.GType<IndicatorPrivate>;

    constructor(copy: IndicatorPrivate);
}

export class KeyboardConfig {
    static $gtype: GObject.GType<KeyboardConfig>;

    constructor(copy: KeyboardConfig);

    // Fields
    model: string;
    layouts_variants: string;
    options: string;
    settings: Gio.Settings;
    config_listener_id: number;
    engine: Xkl.Engine;

    // Members
    activate(): boolean;

    equals(kbd_config2: KeyboardConfig): boolean;

    init(engine: Xkl.Engine): void;

    load(kbd_config_default: KeyboardConfig): void;

    load_from_x_current(buf: Xkl.ConfigRec): void;

    load_from_x_initial(buf: Xkl.ConfigRec): void;

    save(): void;

    start_listen(func: GObject.Callback): void;

    stop_listen(): void;

    term(): void;

    to_string(): string;

    static add_default_switch_option_if_necessary(
        layouts_list: string,
        options_list: string,
        was_appended: boolean
    ): string[];

    static format_full_description(layout_descr: string, variant_descr: string): string;

    static get_descriptions(
        config_registry: Xkl.ConfigRegistry,
        name: string,
        layout_short_descr: string,
        layout_descr: string,
        variant_short_descr: string,
        variant_descr: string
    ): boolean;

    static merge_items(parent: string, child: string): string;

    static split_items(merged: string, parent: string, child: string): boolean;
}

export class KeyboardDrawingDoodad {
    static $gtype: GObject.GType<KeyboardDrawingDoodad>;

    constructor(copy: KeyboardDrawingDoodad);

    // Fields
    type: KeyboardDrawingItemType;
    origin_x: number;
    origin_y: number;
    angle: number;
    priority: number;
    on: boolean;
}

export class KeyboardDrawingGroupLevel {
    static $gtype: GObject.GType<KeyboardDrawingGroupLevel>;

    constructor(
        properties?: Partial<{
            group?: number;
            level?: number;
        }>
    );

    constructor(copy: KeyboardDrawingGroupLevel);

    // Fields
    group: number;
    level: number;
}

export class KeyboardDrawingItem {
    static $gtype: GObject.GType<KeyboardDrawingItem>;

    constructor(copy: KeyboardDrawingItem);

    // Fields
    type: KeyboardDrawingItemType;
    origin_x: number;
    origin_y: number;
    angle: number;
    priority: number;
}

export class KeyboardDrawingKey {
    static $gtype: GObject.GType<KeyboardDrawingKey>;

    constructor(copy: KeyboardDrawingKey);

    // Fields
    type: KeyboardDrawingItemType;
    origin_x: number;
    origin_y: number;
    angle: number;
    priority: number;
    pressed: boolean;
    keycode: number;
}

export class KeyboardDrawingRenderContext {
    static $gtype: GObject.GType<KeyboardDrawingRenderContext>;

    constructor(copy: KeyboardDrawingRenderContext);

    // Fields
    cr: cairo.Context;
    angle: number;
    layout: Pango.Layout;
    font_desc: Pango.FontDescription;
    scale_numerator: number;
    scale_denominator: number;
    dark_color: Gdk.RGBA;
}

export class StatusPrivate {
    static $gtype: GObject.GType<StatusPrivate>;

    constructor(copy: StatusPrivate);
}
