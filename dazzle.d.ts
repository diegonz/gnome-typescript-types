/**
 * Dazzle 1.0
 *
 * Generated from 3.38.0
 */

import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as cairo from './cairo';
import * as Gdk from './gdk';
import * as GLib from './glib';
import * as Pango from './pango';

export const COUNTER_REQUIRES_ATOMIC: number;
export const DOCK_BIN_STYLE_CLASS_PINNED: string;
export const ENABLE_TRACE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;

export function cairo_region_create_from_clip_extents(cr: cairo.Context): cairo.Region;

export function cairo_rounded_rectangle(
    cr: cairo.Context,
    rect: Gdk.Rectangle,
    x_radius: number,
    y_radius: number
): void;

export function cancellable_chain(
    self?: Gio.Cancellable | null,
    other?: Gio.Cancellable | null
): Gio.Cancellable | null;

export function counter_arena_get_default(): CounterArena;

export function dnd_get_uri_list(selection_data: Gtk.SelectionData): string[];

export function file_manager_show(file: Gio.File): boolean;

export function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc): number;

export function frame_source_add_full(priority: number, frames_per_sec: number, callback: GLib.SourceFunc): number;

export function fuzzy_highlight(str: string, query: string, case_sensitive: boolean): string;

export function g_date_time_format_for_display(self: GLib.DateTime): string;

export function g_time_span_to_label(span: GLib.TimeSpan): string;

export function g_time_span_to_label_mapping(
    binding: GObject.Binding,
    from_value: any,
    to_value: any,
    user_data?: any | null
): boolean;

export function g_variant_hash(data?: any | null): number;

export function get_current_cpu_call(): number;

export function gtk_list_store_insert_sorted(
    store: Gtk.ListStore,
    key: any | null,
    compare_column: number,
    compare_func: GLib.CompareDataFunc
): Gtk.TreeIter;

export function gtk_text_buffer_remove_tag(
    buffer: Gtk.TextBuffer,
    tag: Gtk.TextTag,
    start: Gtk.TextIter,
    end: Gtk.TextIter,
    minimal_damage: boolean
): void;

export function gtk_widget_action(widget: Gtk.Widget, group: string, name: string, param: GLib.Variant): boolean;

export function gtk_widget_action_with_string(widget: Gtk.Widget, group: string, name: string, param: string): boolean;

export function gtk_widget_add_style_class(widget: Gtk.Widget, class_name: string): void;

export function gtk_widget_find_child_typed(widget: Gtk.Widget, type: GObject.GType): Gtk.Widget | null;

export function gtk_widget_get_relative(widget: Gtk.Widget, relative_type: GObject.GType): Gtk.Widget | null;

export function gtk_widget_hide_with_fade(widget: Gtk.Widget): void;

export function gtk_widget_is_ancestor_or_relative(widget: Gtk.Widget, ancestor: Gtk.Widget): boolean;

export function gtk_widget_mux_action_groups(
    widget: Gtk.Widget,
    from_widget: Gtk.Widget,
    mux_key?: string | null
): void;

export function gtk_widget_remove_style_class(widget: Gtk.Widget, class_name: string): void;

export function gtk_widget_show_with_fade(widget: Gtk.Widget): void;

export function levenshtein(needle: string, haystack: string): number;

export function overlay_add_child(self: DockOverlay, child: Gtk.Widget, type: string): void;

export function pango_font_description_to_css(font_desc: Pango.FontDescription): string;

export function rgba_shade(rgba: Gdk.RGBA, k: number): Gdk.RGBA;

export function shortcut_chord_equal(data1?: any | null, data2?: any | null): boolean;

export function shortcut_chord_hash(data?: any | null): number;

export function shortcut_chord_table_get_type(): GObject.GType;

export type CounterForeachFunc = (counter: Counter) => void;
export type DirectoryModelVisibleFunc = (self: DirectoryModel, directory: Gio.File, file_info: Gio.FileInfo) => boolean;
export type ListModelFilterFunc<A = GObject.Object> = (object: A) => boolean;
export type RecursiveIgnoreFunc = (file: Gio.File) => boolean;
export type ShortcutChordTableForeach = (chord: ShortcutChord, chord_data?: any | null) => void;
export type StackListCreateWidgetFunc<A = GObject.Object> = (item: A) => Gtk.Widget;
export type SuggestionPositionFunc = (entry: SuggestionEntry, area: Gdk.Rectangle, is_absolute: boolean) => void;
export type TaskCacheCallback = (self: TaskCache, key: any | null, task: Gio.Task) => void;
export type TreeFilterFunc = (tree: Tree, node: TreeNode) => boolean;
export type TreeFindFunc = (tree: Tree, node: TreeNode, child: TreeNode) => boolean;
export type TreeNodeCompareFunc = (a: TreeNode, b: TreeNode) => number;
export type TrieTraverseFunc = (dzl_trie: Trie, key: string, value?: any | null) => boolean;

export namespace AnimationMode {
    export const $gtype: GObject.GType<AnimationMode>;
}

export enum AnimationMode {
    LINEAR = 0,
    EASE_IN_QUAD = 1,
    EASE_IN_OUT_QUAD = 3,
    EASE_OUT_QUAD = 2,
    EASE_IN_CUBIC = 4,
    EASE_OUT_CUBIC = 5,
    EASE_IN_OUT_CUBIC = 6,
}

export namespace DockRevealerTransitionType {
    export const $gtype: GObject.GType<DockRevealerTransitionType>;
}

export enum DockRevealerTransitionType {
    NONE = 0,
    SLIDE_RIGHT = 1,
    SLIDE_LEFT = 2,
    SLIDE_UP = 3,
    SLIDE_DOWN = 4,
}

export namespace ShortcutMatch {
    export const $gtype: GObject.GType<ShortcutMatch>;
}

export enum ShortcutMatch {
    NONE = 0,
    EQUAL = 1,
    PARTIAL = 2,
}

export namespace ShortcutType {
    export const $gtype: GObject.GType<ShortcutType>;
}

export enum ShortcutType {
    ACCELERATOR = 0,
    GESTURE_PINCH = 1,
    GESTURE_STRETCH = 2,
    GESTURE_ROTATE_CLOCKWISE = 3,
    GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
    GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
    GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
    GESTURE = 7,
}

export namespace SliderPosition {
    export const $gtype: GObject.GType<SliderPosition>;
}

export enum SliderPosition {
    NONE = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 3,
    LEFT = 4,
}

export namespace ThreeGridColumn {
    export const $gtype: GObject.GType<ThreeGridColumn>;
}

export enum ThreeGridColumn {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
}

export namespace TitlebarAnimation {
    export const $gtype: GObject.GType<TitlebarAnimation>;
}

export enum TitlebarAnimation {
    HIDDEN = 0,
    SHOWING = 1,
    SHOWN = 2,
    HIDING = 3,
}

export namespace TreeDropPosition {
    export const $gtype: GObject.GType<TreeDropPosition>;
}

export enum TreeDropPosition {
    INTO = 0,
    BEFORE = 1,
    AFTER = 2,
}

export namespace FileTransferFlags {
    export const $gtype: GObject.GType<FileTransferFlags>;
}

export enum FileTransferFlags {
    NONE = 0,
    MOVE = 1,
}

export namespace PropertiesFlags {
    export const $gtype: GObject.GType<PropertiesFlags>;
}

export enum PropertiesFlags {
    NONE = 0,
    STATEFUL_BOOLEANS = 1,
}

export namespace ShortcutPhase {
    export const $gtype: GObject.GType<ShortcutPhase>;
}

export enum ShortcutPhase {
    DISPATCH = 0,
    CAPTURE = 1,
    BUBBLE = 2,
    GLOBAL = 4,
}

export namespace TabStyle {
    export const $gtype: GObject.GType<TabStyle>;
}

export enum TabStyle {
    ICONS = 2,
    TEXT = 1,
    BOTH = 3,
}

export namespace Animation {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        duration: number;
        frame_clock: Gdk.FrameClock;
        frameClock: Gdk.FrameClock;
        mode: AnimationMode;
        target: GObject.Object;
    }
}

export class Animation extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Animation>;

    constructor(properties?: Partial<Animation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Animation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    duration: number;
    frame_clock: Gdk.FrameClock;
    frameClock: Gdk.FrameClock;
    mode: AnimationMode;
    target: GObject.Object;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'tick', callback: (_source: this) => void): number;

    connect_after(signal: 'tick', callback: (_source: this) => void): number;

    emit(signal: 'tick'): void;

    // Members

    add_property(pspec: GObject.ParamSpec, value: any): void;

    start(): void;

    stop(): void;

    static calculate_duration(monitor: Gdk.Monitor, from_value: number, to_value: number): number;
}

export namespace Application {
    export interface ConstructorProperties extends Gtk.Application.ConstructorProperties {
        [key: string]: any;

        menu_manager: MenuManager;
        menuManager: MenuManager;
        shortcut_manager: ShortcutManager;
        shortcutManager: ShortcutManager;
        theme_manager: ThemeManager;
        themeManager: ThemeManager;
    }
}

export class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
    static $gtype: GObject.GType<Application>;

    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

    // Properties
    menu_manager: MenuManager;
    menuManager: MenuManager;
    shortcut_manager: ShortcutManager;
    shortcutManager: ShortcutManager;
    theme_manager: ThemeManager;
    themeManager: ThemeManager;

    // Constructors

    static ['new'](application_id: string, flags: Gio.ApplicationFlags): Application;
    static ['new'](...args: never[]): never;

    // Members

    add_resources(resource_path: string): void;

    get_menu_by_id(menu_id: string): Gio.Menu;

    get_menu_manager(): MenuManager;

    get_shortcut_manager(): ShortcutManager;

    get_theme_manager(): ThemeManager;

    remove_resources(resource_path: string): void;

    vfunc_add_resources(resource_path: string): void;

    vfunc_remove_resources(resource_path: string): void;

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

export namespace ApplicationWindow {
    export interface ConstructorProperties extends Gtk.ApplicationWindow.ConstructorProperties {
        [key: string]: any;

        fullscreen: boolean | any;
        titlebar_animation: TitlebarAnimation;
        titlebarAnimation: TitlebarAnimation;
    }
}

export class ApplicationWindow
    extends Gtk.ApplicationWindow
    implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {
    static $gtype: GObject.GType<ApplicationWindow>;

    constructor(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fullscreen: boolean | any;
    titlebar_animation: TitlebarAnimation;
    titlebarAnimation: TitlebarAnimation;

    // Members

    get_fullscreen(): boolean;

    get_titlebar(): Gtk.Widget;
    get_titlebar(...args: never[]): never;

    get_titlebar_animation(): TitlebarAnimation;

    set_fullscreen(fullscreen: boolean): void;

    set_titlebar(titlebar: Gtk.Widget): void;
    set_titlebar(...args: never[]): never;

    vfunc_get_fullscreen(): boolean;

    vfunc_set_fullscreen(fullscreen: boolean): void;

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

export namespace Bin {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
    }
}

export class Bin extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Bin>;

    constructor(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Bin;

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

export namespace BindingGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        source: GObject.Object;
    }
}

export class BindingGroup extends GObject.Object {
    static $gtype: GObject.GType<BindingGroup>;

    constructor(properties?: Partial<BindingGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BindingGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: GObject.Object;

    // Constructors

    static ['new'](): BindingGroup;

    // Members

    bind(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): void;

    bind_full(
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags,
        transform_to?: GObject.BindingTransformFunc | null,
        transform_from?: GObject.BindingTransformFunc | null
    ): void;

    bind_full(
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags,
        transform_to?: GObject.Closure | null,
        transform_from?: GObject.Closure | null
    ): void;

    get_source<T = GObject.Object>(): T;

    set_source(source?: GObject.Object | null): void;
}

export namespace BoldingLabel {
    export interface ConstructorProperties extends Gtk.Label.ConstructorProperties {
        [key: string]: any;

        bold: boolean;
    }
}

export class BoldingLabel extends Gtk.Label implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<BoldingLabel>;

    constructor(properties?: Partial<BoldingLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BoldingLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bold: boolean;

    // Constructors

    static ['new'](str: string, bold: boolean): BoldingLabel;
    static ['new'](...args: never[]): never;

    static new_with_mnemonic(str: string, bold: boolean): BoldingLabel;
    static new_with_mnemonic(...args: never[]): never;

    // Members

    set_bold(bold: boolean): void;

    set_weight(weight: Pango.Weight): void;

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

export namespace Box {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        max_width_request: number;
        maxWidthRequest: number;
    }
}

export class Box extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Box>;

    constructor(properties?: Partial<Box.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Box.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_width_request: number;
    maxWidthRequest: number;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Box;
    static ['new'](...args: never[]): never;

    // Members

    get_max_width_request(): number;

    get_nth_child(nth: number): Gtk.Widget | null;

    set_max_width_request(max_width_request: number): void;

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

export namespace BoxTheatric {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        alpha: number;
        background: string;
        height: number;
        icon: Gio.Icon;
        surface: any;
        target: Gtk.Widget;
        width: number;
        x: number;
        y: number;
    }
}

export class BoxTheatric extends GObject.Object {
    static $gtype: GObject.GType<BoxTheatric>;

    constructor(properties?: Partial<BoxTheatric.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BoxTheatric.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alpha: number;
    background: string;
    height: number;
    icon: Gio.Icon;
    surface: any;
    target: Gtk.Widget;
    width: number;
    x: number;
    y: number;
}

export namespace CenteringBin {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        max_width_request: number;
        maxWidthRequest: number;
    }
}

export class CenteringBin extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<CenteringBin>;

    constructor(properties?: Partial<CenteringBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CenteringBin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_width_request: number;
    maxWidthRequest: number;

    // Constructors

    static ['new'](): CenteringBin;

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

export namespace ChildPropertyAction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        child: Gtk.Widget;
        child_property_name: string;
        childPropertyName: string;
        container: Gtk.Container;
    }
}

export class ChildPropertyAction extends GObject.Object implements Gio.Action {
    static $gtype: GObject.GType<ChildPropertyAction>;

    constructor(properties?: Partial<ChildPropertyAction.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChildPropertyAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    child: Gtk.Widget;
    child_property_name: string;
    childPropertyName: string;
    container: Gtk.Container;

    // Implemented Properties

    enabled: boolean;
    name: string;
    parameter_type: GLib.VariantType;
    parameterType: GLib.VariantType;
    state: GLib.Variant;
    state_type: GLib.VariantType;
    stateType: GLib.VariantType;

    // Members

    static new(name: string, container: Gtk.Container, child: Gtk.Widget, child_property_name: string): Gio.Action;

    // Implemented Members

    activate(parameter?: GLib.Variant | null): void;

    change_state(value: GLib.Variant): void;

    get_enabled(): boolean;

    get_name(): string;

    get_parameter_type(): GLib.VariantType | null;

    get_state(): GLib.Variant;

    get_state_hint(): GLib.Variant | null;

    get_state_type(): GLib.VariantType | null;

    vfunc_activate(parameter?: GLib.Variant | null): void;

    vfunc_change_state(value: GLib.Variant): void;

    vfunc_get_enabled(): boolean;

    vfunc_get_name(): string;

    vfunc_get_parameter_type(): GLib.VariantType | null;

    vfunc_get_state(): GLib.Variant;

    vfunc_get_state_hint(): GLib.Variant | null;

    vfunc_get_state_type(): GLib.VariantType | null;
}

export namespace ColumnLayout {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        column_spacing: number;
        columnSpacing: number;
        column_width: number;
        columnWidth: number;
        max_columns: number;
        maxColumns: number;
        row_spacing: number;
        rowSpacing: number;
    }
}

export class ColumnLayout extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ColumnLayout>;

    constructor(properties?: Partial<ColumnLayout.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ColumnLayout.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column_spacing: number;
    columnSpacing: number;
    column_width: number;
    columnWidth: number;
    max_columns: number;
    maxColumns: number;
    row_spacing: number;
    rowSpacing: number;

    // Constructors

    static ['new'](): ColumnLayout;

    // Members

    get_column_spacing(): number;

    get_column_width(): number;

    get_max_columns(): number;

    get_row_spacing(): number;

    set_column_spacing(column_spacing: number): void;

    set_column_width(column_width: number): void;

    set_max_columns(max_columns: number): void;

    set_row_spacing(row_spacing: number): void;

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

export namespace CountersWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}

export class CountersWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<CountersWindow>;

    constructor(properties?: Partial<CountersWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CountersWindow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): CountersWindow;
    static ['new'](...args: never[]): never;

    // Members

    get_arena(): CounterArena | null;

    set_arena(arena: CounterArena): void;

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

export namespace CpuGraph {
    export interface ConstructorProperties extends GraphView.ConstructorProperties {
        [key: string]: any;

        max_samples: number;
        maxSamples: number;
        timespan: number;
    }
}

export class CpuGraph extends GraphView implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<CpuGraph>;

    constructor(properties?: Partial<CpuGraph.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CpuGraph.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_samples: number;
    maxSamples: number;
    timespan: number;

    // Constructors

    static new_full(timespan: number, max_samples: number): CpuGraph;

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

export namespace CpuModel {
    export interface ConstructorProperties extends GraphModel.ConstructorProperties {
        [key: string]: any;
    }
}

export class CpuModel extends GraphModel {
    static $gtype: GObject.GType<CpuModel>;

    constructor(properties?: Partial<CpuModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CpuModel.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): CpuModel;
}

export namespace CssProvider {
    export interface ConstructorProperties extends Gtk.CssProvider.ConstructorProperties {
        [key: string]: any;

        base_path: string;
        basePath: string;
    }
}

export class CssProvider extends Gtk.CssProvider implements Gtk.StyleProvider {
    static $gtype: GObject.GType<CssProvider>;

    constructor(properties?: Partial<CssProvider.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CssProvider.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_path: string;
    basePath: string;

    // Constructors

    static ['new'](base_path: string): CssProvider;
    static ['new'](...args: never[]): never;

    // Implemented Members

    get_icon_factory(path: Gtk.WidgetPath): Gtk.IconFactory | null;

    get_style(path: Gtk.WidgetPath): Gtk.StyleProperties | null;

    get_style_property(path: Gtk.WidgetPath, state: Gtk.StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];

    vfunc_get_icon_factory(path: Gtk.WidgetPath): Gtk.IconFactory | null;

    vfunc_get_style(path: Gtk.WidgetPath): Gtk.StyleProperties | null;

    vfunc_get_style_property(path: Gtk.WidgetPath, state: Gtk.StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
}

export namespace DirectoryModel {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        directory: Gio.File;
    }
}

export class DirectoryModel<A extends GObject.Object = GObject.Object>
    extends GObject.Object
    implements Gio.ListModel<A> {
    static $gtype: GObject.GType<DirectoryModel>;

    constructor(properties?: Partial<DirectoryModel.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<DirectoryModel.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    directory: Gio.File;

    // Members

    get_directory(): Gio.File;

    set_directory(directory: Gio.File): void;

    set_visible_func(visible_func: DirectoryModelVisibleFunc): void;

    static new(directory: Gio.File): Gio.ListModel;

    // Implemented Members

    get_item_type(): GObject.GType;

    get_n_items(): number;

    get_item(position: number): A | null;

    items_changed(position: number, removed: number, added: number): void;

    vfunc_get_item(position: number): A | null;

    vfunc_get_item_type(): GObject.GType;

    vfunc_get_n_items(): number;
}

export namespace DirectoryReaper {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DirectoryReaper extends GObject.Object {
    static $gtype: GObject.GType<DirectoryReaper>;

    constructor(properties?: Partial<DirectoryReaper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DirectoryReaper.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'remove-file', callback: (_source: this, file: Gio.File) => void): number;

    connect_after(signal: 'remove-file', callback: (_source: this, file: Gio.File) => void): number;

    emit(signal: 'remove-file', file: Gio.File): void;

    // Constructors

    static ['new'](): DirectoryReaper;

    // Members

    add_directory(directory: Gio.File, min_age: GLib.TimeSpan): void;

    add_file(file: Gio.File, min_age: GLib.TimeSpan): void;

    add_glob(directory: Gio.File, glob: string, min_age: GLib.TimeSpan): void;

    execute(cancellable?: Gio.Cancellable | null): boolean;

    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    execute_finish(result: Gio.AsyncResult): boolean;
}

export namespace DockBin {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        bottom_visible: boolean;
        bottomVisible: boolean;
        left_visible: boolean;
        leftVisible: boolean;
        right_visible: boolean;
        rightVisible: boolean;
        top_visible: boolean;
        topVisible: boolean;
    }
}

export class DockBin extends Gtk.Container implements Atk.ImplementorIface, Dock, DockItem, Gtk.Buildable {
    static $gtype: GObject.GType<DockBin>;

    constructor(properties?: Partial<DockBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockBin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bottom_visible: boolean;
    bottomVisible: boolean;
    left_visible: boolean;
    leftVisible: boolean;
    right_visible: boolean;
    rightVisible: boolean;
    top_visible: boolean;
    topVisible: boolean;

    // Implemented Properties

    manager: DockManager;

    // Constructors

    static ['new'](): DockBin;

    // Members

    get_bottom_edge(): Gtk.Widget;

    get_center_widget(): Gtk.Widget | null;

    get_left_edge(): Gtk.Widget;

    get_right_edge(): Gtk.Widget;

    get_top_edge(): Gtk.Widget;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockBinEdge {
    export interface ConstructorProperties extends DockRevealer.ConstructorProperties {
        [key: string]: any;

        edge: Gtk.PositionType;
    }
}

export class DockBinEdge extends DockRevealer implements Atk.ImplementorIface, DockItem, Gtk.Buildable {
    static $gtype: GObject.GType<DockBinEdge>;

    constructor(properties?: Partial<DockBinEdge.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockBinEdge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    edge: Gtk.PositionType;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'move-to-bin-child', callback: (_source: this) => void): number;

    connect_after(signal: 'move-to-bin-child', callback: (_source: this) => void): number;

    emit(signal: 'move-to-bin-child'): void;

    // Members

    get_edge(): Gtk.PositionType;

    vfunc_move_to_bin_child(): void;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DockManager extends GObject.Object {
    static $gtype: GObject.GType<DockManager>;

    constructor(properties?: Partial<DockManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockManager.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'register-dock', callback: (_source: this, object: Dock) => void): number;

    connect_after(signal: 'register-dock', callback: (_source: this, object: Dock) => void): number;

    emit(signal: 'register-dock', object: Dock): void;

    connect(signal: 'unregister-dock', callback: (_source: this, object: Dock) => void): number;

    connect_after(signal: 'unregister-dock', callback: (_source: this, object: Dock) => void): number;

    emit(signal: 'unregister-dock', object: Dock): void;

    // Constructors

    static ['new'](): DockManager;

    // Members

    pause_grabs(): void;

    register_dock(dock: Dock): void;

    release_transient_grab(): void;

    unpause_grabs(): void;

    unregister_dock(dock: Dock): void;

    vfunc_register_dock(dock: Dock): void;

    vfunc_unregister_dock(dock: Dock): void;
}

export namespace DockOverlay {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;
    }
}

export class DockOverlay extends Gtk.EventBox implements Atk.ImplementorIface, Dock, DockItem, Gtk.Buildable {
    static $gtype: GObject.GType<DockOverlay>;

    constructor(properties?: Partial<DockOverlay.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockOverlay.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'hide-edges', callback: (_source: this) => void): number;

    connect_after(signal: 'hide-edges', callback: (_source: this) => void): number;

    emit(signal: 'hide-edges'): void;

    // Implemented Properties

    manager: DockManager;

    // Constructors

    static ['new'](): DockOverlay;

    // Members

    get_edge(position: Gtk.PositionType): DockOverlayEdge;

    get_edge_adjustment(position: Gtk.PositionType): Gtk.Adjustment;

    vfunc_hide_edges(): void;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockOverlayEdge {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;

        edge: Gtk.PositionType;
        position: number;
    }
}

export class DockOverlayEdge extends Bin implements Atk.ImplementorIface, DockItem, Gtk.Buildable {
    static $gtype: GObject.GType<DockOverlayEdge>;

    constructor(properties?: Partial<DockOverlayEdge.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockOverlayEdge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    edge: Gtk.PositionType;
    position: number;

    // Members

    get_edge(): Gtk.PositionType;

    get_position(): number;

    set_edge(edge: Gtk.PositionType): void;

    set_position(position: number): void;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockPaned {
    export interface ConstructorProperties extends MultiPaned.ConstructorProperties {
        [key: string]: any;
    }
}

export class DockPaned extends MultiPaned implements Atk.ImplementorIface, DockItem, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DockPaned>;

    constructor(properties?: Partial<DockPaned.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockPaned.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): DockPaned;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockRevealer {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;

        child_revealed: boolean;
        childRevealed: boolean;
        position: number;
        position_set: boolean;
        positionSet: boolean;
        reveal_child: boolean;
        revealChild: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_type: DockRevealerTransitionType;
        transitionType: DockRevealerTransitionType;
    }
}

export class DockRevealer extends Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<DockRevealer>;

    constructor(properties?: Partial<DockRevealer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockRevealer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    child_revealed: boolean;
    childRevealed: boolean;
    position: number;
    position_set: boolean;
    positionSet: boolean;
    reveal_child: boolean;
    revealChild: boolean;
    transition_duration: number;
    transitionDuration: number;
    transition_type: DockRevealerTransitionType;
    transitionType: DockRevealerTransitionType;

    // Constructors

    static ['new'](): DockRevealer;

    // Members

    animate_to_position(position: number, transition_duration: number): void;

    get_child_revealed(): boolean;

    get_position(): number;

    get_position_set(): boolean;

    get_reveal_child(): boolean;

    get_transition_duration(): number;

    get_transition_type(): DockRevealerTransitionType;

    is_animating(): boolean;

    set_position(position: number): void;

    set_position_set(position_set: boolean): void;

    set_reveal_child(reveal_child: boolean): void;

    set_transition_duration(transition_duration: number): void;

    set_transition_type(transition_type: DockRevealerTransitionType): void;

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

export namespace DockStack {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        edge: Gtk.PositionType;
        show_pinned_button: boolean;
        showPinnedButton: boolean;
        style: TabStyle | any;
    }
}

export class DockStack extends Gtk.Box implements Atk.ImplementorIface, DockItem, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DockStack>;

    constructor(properties?: Partial<DockStack.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockStack.ConstructorProperties>, ...args: any[]): void;

    // Properties
    edge: Gtk.PositionType;
    show_pinned_button: boolean;
    showPinnedButton: boolean;
    style: TabStyle | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): DockStack;
    static ['new'](...args: never[]): never;

    // Members

    get_edge(): Gtk.PositionType;

    get_show_pinned_button(): boolean;

    get_style(): TabStyle;
    get_style(...args: never[]): never;

    set_edge(edge: Gtk.PositionType): void;

    set_show_pinned_button(show_pinned_button: boolean): void;

    set_style(style: TabStyle): void;
    set_style(...args: never[]): never;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockTransientGrab {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        timeout: number;
    }
}

export class DockTransientGrab extends GObject.Object {
    static $gtype: GObject.GType<DockTransientGrab>;

    constructor(properties?: Partial<DockTransientGrab.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockTransientGrab.ConstructorProperties>, ...args: any[]): void;

    // Properties
    timeout: number;

    // Constructors

    static ['new'](): DockTransientGrab;

    // Members

    acquire(): void;

    add_item(item: DockItem): void;

    cancel(): void;

    contains(item: DockItem): boolean;

    get_timeout(): number;

    is_descendant(widget: Gtk.Widget): boolean;

    release(): void;

    remove_item(item: DockItem): void;

    set_timeout(timeout: number): void;

    steal_common_ancestors(other: DockTransientGrab): void;
}

export namespace DockWidget {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;

        can_close: boolean;
        canClose: boolean;
        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        manager: DockManager;
        title: string;
    }
}

export class DockWidget extends Bin implements Atk.ImplementorIface, DockItem, Gtk.Buildable {
    static $gtype: GObject.GType<DockWidget>;

    constructor(properties?: Partial<DockWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    can_close: boolean;
    canClose: boolean;
    gicon: Gio.Icon;
    icon_name: string;
    iconName: string;
    manager: DockManager;
    title: string;

    // Constructors

    static ['new'](): DockWidget;

    // Members

    set_gicon(gicon: Gio.Icon): void;

    set_icon_name(icon_name: string): void;

    set_title(title: string): void;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace DockWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}

export class DockWindow extends Gtk.Window implements Atk.ImplementorIface, Dock, DockItem, Gtk.Buildable {
    static $gtype: GObject.GType<DockWindow>;

    constructor(properties?: Partial<DockWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DockWindow.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    manager: DockManager;

    // Constructors

    static ['new'](): DockWindow;
    static ['new'](...args: never[]): never;

    // Implemented Members

    adopt(child: DockItem): boolean;

    close(): boolean;
    close(...args: never[]): never;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;
    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;

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

export namespace ElasticBin {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
    }
}

export class ElasticBin extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ElasticBin>;

    constructor(properties?: Partial<ElasticBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ElasticBin.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ElasticBin;

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

export namespace EmptyState {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        icon_name: string;
        iconName: string;
        pixel_size: number;
        pixelSize: number;
        resource: string;
        subtitle: string;
        title: string;
    }
}

export class EmptyState extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<EmptyState>;

    constructor(properties?: Partial<EmptyState.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EmptyState.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon_name: string;
    iconName: string;
    pixel_size: number;
    pixelSize: number;
    resource: string;
    subtitle: string;
    title: string;

    // Constructors

    static ['new'](): EmptyState;

    // Members

    get_icon_name(): string;

    get_subtitle(): string;

    get_title(): string;

    set_icon_name(icon_name: string): void;

    set_resource(resource: string): void;

    set_subtitle(title: string): void;

    set_title(title: string): void;

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

export namespace EntryBox {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        max_width_chars: number;
        maxWidthChars: number;
    }
}

export class EntryBox extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<EntryBox>;

    constructor(properties?: Partial<EntryBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_width_chars: number;
    maxWidthChars: number;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): EntryBox;
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

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace FileChooserEntry {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        action: Gtk.FileChooserAction;
        create_folders: boolean;
        createFolders: boolean;
        do_overwrite_confirmation: boolean;
        doOverwriteConfirmation: boolean;
        file: Gio.File;
        filter: Gtk.FileFilter;
        local_only: boolean;
        localOnly: boolean;
        max_width_chars: number;
        maxWidthChars: number;
        show_hidden: boolean;
        showHidden: boolean;
        title: string;
    }
}

export class FileChooserEntry extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<FileChooserEntry>;

    constructor(properties?: Partial<FileChooserEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileChooserEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action: Gtk.FileChooserAction;
    create_folders: boolean;
    createFolders: boolean;
    do_overwrite_confirmation: boolean;
    doOverwriteConfirmation: boolean;
    file: Gio.File;
    filter: Gtk.FileFilter;
    local_only: boolean;
    localOnly: boolean;
    max_width_chars: number;
    maxWidthChars: number;
    show_hidden: boolean;
    showHidden: boolean;
    title: string;

    // Constructors

    static ['new'](title: string, action: Gtk.FileChooserAction): FileChooserEntry;

    // Members

    get_entry(): Gtk.Entry;

    get_file(): Gio.File | null;

    set_file(file: Gio.File): void;

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

export namespace FileTransfer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: FileTransferFlags;
        progress: number;
    }
}

export class FileTransfer extends GObject.Object {
    static $gtype: GObject.GType<FileTransfer>;

    constructor(properties?: Partial<FileTransfer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileTransfer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: FileTransferFlags;
    progress: number;

    // Constructors

    static ['new'](): FileTransfer;

    // Members

    add(src: Gio.File, dest: Gio.File): void;

    execute(io_priority: number, cancellable?: Gio.Cancellable | null): boolean;

    execute_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    execute_finish(result: Gio.AsyncResult): boolean;

    get_flags(): FileTransferFlags;

    get_progress(): number;

    set_flags(flags: FileTransferFlags): void;

    stat(): FileTransferStat;
}

export namespace FuzzyIndex {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FuzzyIndex extends GObject.Object {
    static $gtype: GObject.GType<FuzzyIndex>;

    constructor(properties?: Partial<FuzzyIndex.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FuzzyIndex.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FuzzyIndex;

    // Members

    get_metadata(key: string): GLib.Variant | null;

    get_metadata_string(key: string): string;

    get_metadata_uint32(key: string): number;

    get_metadata_uint64(key: string): number;

    load_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    load_file_async(
        file: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    load_file_finish(result: Gio.AsyncResult): boolean;

    query_async(
        query: string,
        max_matches: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_finish(result: Gio.AsyncResult): Gio.ListModel;
}

export namespace FuzzyIndexBuilder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        case_sensitive: boolean;
        caseSensitive: boolean;
    }
}

export class FuzzyIndexBuilder extends GObject.Object {
    static $gtype: GObject.GType<FuzzyIndexBuilder>;

    constructor(properties?: Partial<FuzzyIndexBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FuzzyIndexBuilder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    case_sensitive: boolean;
    caseSensitive: boolean;

    // Constructors

    static ['new'](): FuzzyIndexBuilder;

    // Members

    get_case_sensitive(): boolean;

    get_document(document_id: number): GLib.Variant;

    insert(key: string, document: GLib.Variant, priority: number): number;

    set_case_sensitive(case_sensitive: boolean): void;

    set_metadata(key: string, value: GLib.Variant): void;

    set_metadata_string(key: string, value: string): void;

    set_metadata_uint32(key: string, value: number): void;

    set_metadata_uint64(key: string, value: number): void;

    write(file: Gio.File, io_priority: number, cancellable?: Gio.Cancellable | null): boolean;

    write_async(
        file: Gio.File,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_finish(result: Gio.AsyncResult): boolean;
}

export namespace FuzzyIndexCursor {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        case_sensitive: boolean;
        caseSensitive: boolean;
        index: FuzzyIndex;
        max_matches: number;
        maxMatches: number;
        query: string;
        tables: GLib.VariantDict;
    }
}

export class FuzzyIndexCursor<A extends GObject.Object = GObject.Object>
    extends GObject.Object
    implements Gio.AsyncInitable<FuzzyIndexCursor>, Gio.ListModel<A> {
    static $gtype: GObject.GType<FuzzyIndexCursor>;

    constructor(properties?: Partial<FuzzyIndexCursor.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<FuzzyIndexCursor.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    case_sensitive: boolean;
    caseSensitive: boolean;
    index: FuzzyIndex;
    max_matches: number;
    maxMatches: number;
    query: string;
    tables: GLib.VariantDict;

    // Members

    get_index(): FuzzyIndex;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): FuzzyIndexCursor;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_item_type(): GObject.GType;

    get_n_items(): number;

    get_item(position: number): A | null;

    items_changed(position: number, removed: number, added: number): void;

    vfunc_get_item(position: number): A | null;

    vfunc_get_item_type(): GObject.GType;

    vfunc_get_n_items(): number;
}

export namespace FuzzyIndexMatch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        document: GLib.Variant;
        key: string;
        priority: number;
        score: number;
    }
}

export class FuzzyIndexMatch extends GObject.Object {
    static $gtype: GObject.GType<FuzzyIndexMatch>;

    constructor(properties?: Partial<FuzzyIndexMatch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FuzzyIndexMatch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    document: GLib.Variant;
    key: string;
    priority: number;
    score: number;

    // Members

    get_document(): GLib.Variant;

    get_key(): string;

    get_priority(): number;

    get_score(): number;
}

export namespace GraphColumn {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
        value_type: GObject.GType;
        valueType: GObject.GType;
    }
}

export class GraphColumn extends GObject.Object {
    static $gtype: GObject.GType<GraphColumn>;

    constructor(properties?: Partial<GraphColumn.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GraphColumn.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    value_type: GObject.GType;
    valueType: GObject.GType;

    // Constructors

    static ['new'](name: string, value_type: GObject.GType): GraphColumn;

    // Members

    get_name(): string;

    set_name(name: string): void;
}

export namespace GraphLineRenderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        column: number;
        line_width: number;
        lineWidth: number;
        stroke_color: string;
        strokeColor: string;
        stroke_color_rgba: Gdk.RGBA;
        strokeColorRgba: Gdk.RGBA;
    }
}

export class GraphLineRenderer extends GObject.Object implements GraphRenderer {
    static $gtype: GObject.GType<GraphLineRenderer>;

    constructor(properties?: Partial<GraphLineRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GraphLineRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column: number;
    line_width: number;
    lineWidth: number;
    stroke_color: string;
    strokeColor: string;
    stroke_color_rgba: Gdk.RGBA;
    strokeColorRgba: Gdk.RGBA;

    // Constructors

    static ['new'](): GraphLineRenderer;

    // Members

    get_stroke_color_rgba(): Gdk.RGBA;

    set_stroke_color(stroke_color: string): void;

    set_stroke_color_rgba(stroke_color_rgba: Gdk.RGBA): void;

    // Implemented Members

    render(
        table: GraphModel,
        x_begin: number,
        x_end: number,
        y_begin: number,
        y_end: number,
        cr: cairo.Context,
        area: cairo.RectangleInt
    ): void;

    vfunc_render(
        table: GraphModel,
        x_begin: number,
        x_end: number,
        y_begin: number,
        y_end: number,
        cr: cairo.Context,
        area: cairo.RectangleInt
    ): void;
}

export namespace GraphModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        max_samples: number;
        maxSamples: number;
        timespan: number;
        value_max: number;
        valueMax: number;
        value_min: number;
        valueMin: number;
    }
}

export class GraphModel extends GObject.Object {
    static $gtype: GObject.GType<GraphModel>;

    constructor(properties?: Partial<GraphModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GraphModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_samples: number;
    maxSamples: number;
    timespan: number;
    value_max: number;
    valueMax: number;
    value_min: number;
    valueMin: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): GraphModel;

    // Members

    add_column(column: GraphColumn): number;

    get_end_time(): number;

    get_iter_first(iter: GraphModelIter): boolean;

    get_iter_last(iter: GraphModelIter): boolean;

    get_max_samples(): number;

    get_n_columns(): number;

    get_timespan(): GLib.TimeSpan;

    push(timestamp: number): GraphModelIter;

    set_max_samples(n_rows: number): void;

    set_timespan(timespan: GLib.TimeSpan): void;

    static iter_get_timestamp(iter: GraphModelIter): number;

    static iter_get_value(iter: GraphModelIter, column: number, value: any): void;

    static iter_next(iter: GraphModelIter): boolean;

    static iter_set(iter: GraphModelIter, column: number, value: any): void;
}

export namespace GraphView {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        model: GraphModel;
    }
}

export class GraphView extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<GraphView>;

    constructor(properties?: Partial<GraphView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GraphView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: GraphModel;

    // Constructors

    static ['new'](): GraphView;

    // Members

    add_renderer(renderer: GraphRenderer): void;

    get_model(): GraphModel | null;

    set_model(model: GraphModel): void;

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

export namespace JoinedMenu {
    export interface ConstructorProperties extends Gio.MenuModel.ConstructorProperties {
        [key: string]: any;
    }
}

export class JoinedMenu extends Gio.MenuModel {
    static $gtype: GObject.GType<JoinedMenu>;

    constructor(properties?: Partial<JoinedMenu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JoinedMenu.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): JoinedMenu;

    // Members

    append_menu(model: Gio.MenuModel): void;

    get_n_joined(): number;

    prepend_menu(model: Gio.MenuModel): void;

    remove_index(index: number): void;

    remove_menu(model: Gio.MenuModel): void;
}

export namespace ListBox {
    export interface ConstructorProperties extends Gtk.ListBox.ConstructorProperties {
        [key: string]: any;

        property_name: string;
        propertyName: string;
        row_type: GObject.GType;
        rowType: GObject.GType;
        row_type_name: string;
        rowTypeName: string;
    }
}

export class ListBox extends Gtk.ListBox implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ListBox>;

    constructor(properties?: Partial<ListBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ListBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    property_name: string;
    propertyName: string;
    row_type: GObject.GType;
    rowType: GObject.GType;
    row_type_name: string;
    rowTypeName: string;

    // Constructors

    static ['new'](row_type: GObject.GType, property_name: string): ListBox;
    static ['new'](...args: never[]): never;

    // Members

    get_model(): Gio.ListModel | null;

    get_property_name(): string;

    get_row_type(): GObject.GType;

    set_model(model: Gio.ListModel): void;

    set_recycle_max(recycle_max: number): void;

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

export namespace ListBoxRow {
    export interface ConstructorProperties extends Gtk.ListBoxRow.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class ListBoxRow extends Gtk.ListBoxRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ListBoxRow>;

    constructor(properties?: Partial<ListBoxRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ListBoxRow.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

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

export namespace ListModelFilter {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        child_model: Gio.ListModel;
        childModel: Gio.ListModel;
    }
}

export class ListModelFilter<A extends GObject.Object = GObject.Object>
    extends GObject.Object
    implements Gio.ListModel<A> {
    static $gtype: GObject.GType<ListModelFilter>;

    constructor(properties?: Partial<ListModelFilter.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<ListModelFilter.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    child_model: Gio.ListModel;
    childModel: Gio.ListModel;

    // Constructors

    static ['new'](child_model: Gio.ListModel): ListModelFilter;

    // Members

    get_child_model(): Gio.ListModel;

    invalidate(): void;

    set_filter_func(filter_func: ListModelFilterFunc): void;

    // Implemented Members

    get_item_type(): GObject.GType;

    get_n_items(): number;

    get_item(position: number): A | null;

    items_changed(position: number, removed: number, added: number): void;

    vfunc_get_item(position: number): A | null;

    vfunc_get_item_type(): GObject.GType;

    vfunc_get_n_items(): number;
}

export namespace ListStoreAdapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        model: Gio.ListModel;
    }
}

export class ListStoreAdapter extends GObject.Object implements Gtk.TreeModel {
    static $gtype: GObject.GType<ListStoreAdapter>;

    constructor(properties?: Partial<ListStoreAdapter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ListStoreAdapter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: Gio.ListModel;

    // Constructors

    static ['new'](model: Gio.ListModel): ListStoreAdapter;

    // Members

    get_model(): Gio.ListModel;

    set_model(model: Gio.ListModel): void;

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

export namespace MenuButton {
    export interface ConstructorProperties extends Gtk.MenuButton.ConstructorProperties {
        [key: string]: any;

        icon_name: string;
        iconName: string;
        menu_id: string;
        menuId: string;
        model: Gio.MenuModel;
        show_accels: boolean;
        showAccels: boolean;
        show_arrow: boolean;
        showArrow: boolean;
        show_icons: boolean;
        showIcons: boolean;
        transitions_enabled: boolean;
        transitionsEnabled: boolean;
    }
}

export class MenuButton
    extends Gtk.MenuButton
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
    static $gtype: GObject.GType<MenuButton>;

    constructor(properties?: Partial<MenuButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MenuButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon_name: string;
    iconName: string;
    menu_id: string;
    menuId: string;
    model: Gio.MenuModel;
    show_accels: boolean;
    showAccels: boolean;
    show_arrow: boolean;
    showArrow: boolean;
    show_icons: boolean;
    showIcons: boolean;
    transitions_enabled: boolean;
    transitionsEnabled: boolean;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;
    related_action: Gtk.Action;
    relatedAction: Gtk.Action;
    use_action_appearance: boolean;
    useActionAppearance: boolean;

    // Constructors

    static new_with_model(icon_name: string, model?: Gio.MenuModel | null): MenuButton;

    // Members

    get_model(): Gio.MenuModel | null;

    get_show_accels(): boolean;

    get_show_arrow(): boolean;

    get_show_icons(): boolean;

    set_model(model: Gio.MenuModel): void;

    set_show_accels(show_accels: boolean): void;

    set_show_arrow(show_arrow: boolean): void;

    set_show_icons(show_icons: boolean): void;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

    do_set_related_action(action: Gtk.Action): void;

    get_related_action(): Gtk.Action;

    get_use_action_appearance(): boolean;

    set_related_action(action: Gtk.Action): void;

    set_use_action_appearance(use_appearance: boolean): void;

    sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_update(action: Gtk.Action, property_name: string): void;

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

export namespace MenuManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MenuManager extends GObject.Object {
    static $gtype: GObject.GType<MenuManager>;

    constructor(properties?: Partial<MenuManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MenuManager.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): MenuManager;

    // Members

    add_filename(filename: string): number;

    add_resource(resource: string): number;

    get_menu_by_id(menu_id: string): Gio.Menu;

    merge(menu_id: string, model: Gio.MenuModel): number;

    remove(merge_id: number): void;
}

export namespace MultiPaned {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        orientation: Gtk.Orientation;
    }
}

export class MultiPaned extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<MultiPaned>;

    constructor(properties?: Partial<MultiPaned.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MultiPaned.ConstructorProperties>, ...args: any[]): void;

    // Properties
    orientation: Gtk.Orientation;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'resize-drag-begin', callback: (_source: this, object: Gtk.Widget) => void): number;

    connect_after(signal: 'resize-drag-begin', callback: (_source: this, object: Gtk.Widget) => void): number;

    emit(signal: 'resize-drag-begin', object: Gtk.Widget): void;

    connect(signal: 'resize-drag-end', callback: (_source: this, object: Gtk.Widget) => void): number;

    connect_after(signal: 'resize-drag-end', callback: (_source: this, object: Gtk.Widget) => void): number;

    emit(signal: 'resize-drag-end', object: Gtk.Widget): void;

    // Constructors

    static ['new'](): MultiPaned;

    // Members

    get_at_point(x: number, y: number): Gtk.Widget | null;

    get_n_children(): number;

    get_nth_child(nth: number): Gtk.Widget;

    vfunc_resize_drag_begin(child: Gtk.Widget): void;

    vfunc_resize_drag_end(child: Gtk.Widget): void;

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

export namespace Path {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Path extends GObject.Object {
    static $gtype: GObject.GType<Path>;

    constructor(properties?: Partial<Path.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Path.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Path;

    // Members

    append(element: PathElement): void;

    get_element(index: number): PathElement | null;

    get_elements(): PathElement[];

    get_length(): number;

    has_prefix(prefix: Path): boolean;

    is_empty(): boolean;

    prepend(element: PathElement): void;

    printf(): string;
}

export namespace PathBar {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        path: Path | any;
    }
}

export class PathBar extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<PathBar>;

    constructor(properties?: Partial<PathBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PathBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: Path | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'element-selected', callback: (_source: this, object: Path, p0: PathElement) => void): number;

    connect_after(signal: 'element-selected', callback: (_source: this, object: Path, p0: PathElement) => void): number;

    emit(signal: 'element-selected', object: Path, p0: PathElement): void;

    connect(
        signal: 'populate-menu',
        callback: (_source: this, object: Path, p0: PathElement, p1: Gio.Menu) => void
    ): number;

    connect_after(
        signal: 'populate-menu',
        callback: (_source: this, object: Path, p0: PathElement, p1: Gio.Menu) => void
    ): number;

    emit(signal: 'populate-menu', object: Path, p0: PathElement, p1: Gio.Menu): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): PathBar;
    static ['new'](...args: never[]): never;

    // Members

    get_path(): Path;
    get_path(...args: never[]): never;

    set_path(path: Path): void;

    set_selected_index(index: number): void;

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

export namespace PathElement {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        icon_name: string;
        iconName: string;
        id: string;
        title: string;
    }
}

export class PathElement extends GObject.Object {
    static $gtype: GObject.GType<PathElement>;

    constructor(properties?: Partial<PathElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PathElement.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon_name: string;
    iconName: string;
    id: string;
    title: string;

    // Constructors

    static ['new'](id: string | null, icon_name: string | null, title: string): PathElement;

    // Members

    get_icon_name(): string | null;

    get_id(): string;

    get_title(): string | null;
}

export namespace PillBox {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        label: string;
    }
}

export class PillBox extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PillBox>;

    constructor(properties?: Partial<PillBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PillBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;

    // Constructors

    static ['new'](label: string): PillBox;
    static ['new'](...args: never[]): never;

    // Members

    get_label(): string;

    set_label(label: string): void;

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

export namespace PreferencesBin {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        keywords: string;
        path: string | any;
        priority: number;
        schema_id: string;
        schemaId: string;
    }
}

export class PreferencesBin extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesBin>;

    constructor(properties?: Partial<PreferencesBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesBin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    keywords: string;
    path: string | any;
    priority: number;
    schema_id: string;
    schemaId: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'preference-activated', callback: (_source: this) => void): number;

    connect_after(signal: 'preference-activated', callback: (_source: this) => void): number;

    emit(signal: 'preference-activated'): void;

    // Members

    vfunc_connect(settings: Gio.Settings): void;

    vfunc_disconnect(settings: Gio.Settings): void;

    vfunc_matches(spec: PatternSpec): boolean;

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

export namespace PreferencesEntry {
    export interface ConstructorProperties extends PreferencesBin.ConstructorProperties {
        [key: string]: any;

        text: string;
        title: string;
    }
}

export class PreferencesEntry extends PreferencesBin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesEntry>;

    constructor(properties?: Partial<PreferencesEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    text: string;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this) => void): number;

    connect_after(signal: 'activate', callback: (_source: this) => void): number;

    emit(signal: 'activate'): void;

    connect(signal: 'changed', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: string) => void): number;

    emit(signal: 'changed', object: string): void;

    // Members

    get_entry_widget(): Gtk.Widget;

    get_title_widget(): Gtk.Widget;

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

export namespace PreferencesFileChooserButton {
    export interface ConstructorProperties extends PreferencesBin.ConstructorProperties {
        [key: string]: any;

        action: Gtk.FileChooserAction;
        key: string;
        subtitle: string;
        title: string;
    }
}

export class PreferencesFileChooserButton extends PreferencesBin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesFileChooserButton>;

    constructor(properties?: Partial<PreferencesFileChooserButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesFileChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action: Gtk.FileChooserAction;
    key: string;
    subtitle: string;
    title: string;

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

export namespace PreferencesFlowBox {
    export interface ConstructorProperties extends ColumnLayout.ConstructorProperties {
        [key: string]: any;
    }
}

export class PreferencesFlowBox extends ColumnLayout implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesFlowBox>;

    constructor(properties?: Partial<PreferencesFlowBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesFlowBox.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): PreferencesFlowBox;

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

export namespace PreferencesFontButton {
    export interface ConstructorProperties extends PreferencesBin.ConstructorProperties {
        [key: string]: any;

        key: string;
        title: string;
    }
}

export class PreferencesFontButton extends PreferencesBin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesFontButton>;

    constructor(properties?: Partial<PreferencesFontButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesFontButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key: string;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this) => void): number;

    connect_after(signal: 'activate', callback: (_source: this) => void): number;

    emit(signal: 'activate'): void;

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

export namespace PreferencesGroup {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        is_list: boolean;
        isList: boolean;
        mode: Gtk.SelectionMode;
        priority: number;
        title: string;
    }
}

export class PreferencesGroup extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesGroup>;

    constructor(properties?: Partial<PreferencesGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_list: boolean;
    isList: boolean;
    mode: Gtk.SelectionMode;
    priority: number;
    title: string;

    // Members

    add(widget: Gtk.Widget): void;

    get_priority(): number;

    get_size_group(column: number): Gtk.SizeGroup;

    get_title(): string;

    refilter(spec: PatternSpec): number;

    set_map(map: GLib.HashTable<any, any>): void;

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

export namespace PreferencesPage {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        priority: number;
    }
}

export class PreferencesPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesPage>;

    constructor(properties?: Partial<PreferencesPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    priority: number;

    // Members

    add_group(group: PreferencesGroup): void;

    get_group(group_name: string): PreferencesGroup | null;

    refilter(spec: PatternSpec): void;

    set_map(map: GLib.HashTable<any, any>): void;

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

export namespace PreferencesSpinButton {
    export interface ConstructorProperties extends PreferencesBin.ConstructorProperties {
        [key: string]: any;

        key: string;
        subtitle: string;
        title: string;
    }
}

export class PreferencesSpinButton extends PreferencesBin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesSpinButton>;

    constructor(properties?: Partial<PreferencesSpinButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesSpinButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key: string;
    subtitle: string;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this) => void): number;

    connect_after(signal: 'activate', callback: (_source: this) => void): number;

    emit(signal: 'activate'): void;

    // Members

    get_spin_button(): Gtk.Widget;

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

export namespace PreferencesSwitch {
    export interface ConstructorProperties extends PreferencesBin.ConstructorProperties {
        [key: string]: any;

        is_radio: boolean;
        isRadio: boolean;
        key: string;
        subtitle: string;
        target: GLib.Variant;
        title: string;
    }
}

export class PreferencesSwitch extends PreferencesBin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesSwitch>;

    constructor(properties?: Partial<PreferencesSwitch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesSwitch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_radio: boolean;
    isRadio: boolean;
    key: string;
    subtitle: string;
    target: GLib.Variant;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activated', callback: (_source: this) => void): number;

    connect_after(signal: 'activated', callback: (_source: this) => void): number;

    emit(signal: 'activated'): void;

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

export namespace PreferencesView {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        show_search_entry: boolean;
        showSearchEntry: boolean;
        use_sidebar: boolean;
        useSidebar: boolean;
    }
}

export class PreferencesView extends Gtk.Bin implements Atk.ImplementorIface, Preferences, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesView>;

    constructor(properties?: Partial<PreferencesView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    show_search_entry: boolean;
    showSearchEntry: boolean;
    use_sidebar: boolean;
    useSidebar: boolean;

    // Constructors

    static ['new'](): PreferencesView;

    // Members

    get_show_search_entry(): boolean;

    get_use_sidebar(): boolean;

    reapply_filter(): void;

    set_show_search_entry(show_search_entry: boolean): void;

    set_use_sidebar(use_sidebar: boolean): void;

    // Implemented Members

    add_custom(
        page_name: string,
        group_name: string,
        widget: Gtk.Widget,
        keywords: string | null,
        priority: number
    ): number;

    add_file_chooser(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        action: Gtk.FileChooserAction,
        keywords: string,
        priority: number
    ): number;

    add_font_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        title: string,
        keywords: string,
        priority: number
    ): number;

    add_group(page_name: string, group_name: string, title: string, priority: number): void;

    add_list_group(
        page_name: string,
        group_name: string,
        title: string,
        mode: Gtk.SelectionMode,
        priority: number
    ): void;

    add_page(page_name: string, title: string, priority: number): void;

    add_radio(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    add_spin_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        keywords: string,
        priority: number
    ): number;

    add_switch(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    get_widget(widget_id: number): Gtk.Widget | null;

    remove_id(widget_id: number): boolean;

    set_page(page_name: string, map: GLib.HashTable<any, any>): void;

    vfunc_add_custom(
        page_name: string,
        group_name: string,
        widget: Gtk.Widget,
        keywords: string | null,
        priority: number
    ): number;

    vfunc_add_file_chooser(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        action: Gtk.FileChooserAction,
        keywords: string,
        priority: number
    ): number;

    vfunc_add_font_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        title: string,
        keywords: string,
        priority: number
    ): number;

    vfunc_add_group(page_name: string, group_name: string, title: string, priority: number): void;

    vfunc_add_list_group(
        page_name: string,
        group_name: string,
        title: string,
        mode: Gtk.SelectionMode,
        priority: number
    ): void;

    vfunc_add_page(page_name: string, title: string, priority: number): void;

    vfunc_add_radio(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    vfunc_add_spin_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        keywords: string,
        priority: number
    ): number;

    vfunc_add_switch(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    vfunc_get_widget(widget_id: number): Gtk.Widget | null;

    vfunc_remove_id(widget_id: number): boolean;

    vfunc_set_page(page_name: string, map: GLib.HashTable<any, any>): void;

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

export namespace PriorityBox {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
    }
}

export class PriorityBox extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<PriorityBox>;

    constructor(properties?: Partial<PriorityBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PriorityBox.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): PriorityBox;
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

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace ProgressButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;

        progress: number;
        show_progress: boolean;
        showProgress: boolean;
    }
}

export class ProgressButton
    extends Gtk.Button
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
    static $gtype: GObject.GType<ProgressButton>;

    constructor(properties?: Partial<ProgressButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProgressButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    progress: number;
    show_progress: boolean;
    showProgress: boolean;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;
    related_action: Gtk.Action;
    relatedAction: Gtk.Action;
    use_action_appearance: boolean;
    useActionAppearance: boolean;

    // Constructors

    static ['new'](): ProgressButton;

    // Members

    get_progress(): number;

    get_show_progress(): boolean;

    set_progress(percentage: number): void;

    set_show_progress(show_progress: boolean): void;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

    do_set_related_action(action: Gtk.Action): void;

    get_related_action(): Gtk.Action;

    get_use_action_appearance(): boolean;

    set_related_action(action: Gtk.Action): void;

    set_use_action_appearance(use_appearance: boolean): void;

    sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_update(action: Gtk.Action, property_name: string): void;

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

export namespace ProgressIcon {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        progress: number;
    }
}

export class ProgressIcon extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ProgressIcon>;

    constructor(properties?: Partial<ProgressIcon.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProgressIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    progress: number;

    // Constructors

    static ['new'](): ProgressIcon;

    // Members

    get_progress(): number;

    set_progress(progress: number): void;

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

export namespace ProgressMenuButton {
    export interface ConstructorProperties extends Gtk.MenuButton.ConstructorProperties {
        [key: string]: any;

        progress: number;
        show_progress: boolean;
        showProgress: boolean;
        show_theatric: boolean;
        showTheatric: boolean;
        theatric_icon_name: string;
        theatricIconName: string;
        transition_duration: number;
        transitionDuration: number;
    }
}

export class ProgressMenuButton
    extends Gtk.MenuButton
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
    static $gtype: GObject.GType<ProgressMenuButton>;

    constructor(properties?: Partial<ProgressMenuButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProgressMenuButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    progress: number;
    show_progress: boolean;
    showProgress: boolean;
    show_theatric: boolean;
    showTheatric: boolean;
    theatric_icon_name: string;
    theatricIconName: string;
    transition_duration: number;
    transitionDuration: number;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;
    related_action: Gtk.Action;
    relatedAction: Gtk.Action;
    use_action_appearance: boolean;
    useActionAppearance: boolean;

    // Constructors

    static ['new'](): ProgressMenuButton;

    // Members

    get_progress(): number;

    get_show_progress(): boolean;

    get_show_theatric(): boolean;

    reset_theatrics(): void;

    set_progress(progress: number): void;

    set_show_progress(show_progress: boolean): void;

    set_show_theatric(show_theatic: boolean): void;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

    do_set_related_action(action: Gtk.Action): void;

    get_related_action(): Gtk.Action;

    get_use_action_appearance(): boolean;

    set_related_action(action: Gtk.Action): void;

    set_use_action_appearance(use_appearance: boolean): void;

    sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_update(action: Gtk.Action, property_name: string): void;

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

export namespace PropertiesGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        object: GObject.Object;
        object_type: GObject.GType;
        objectType: GObject.GType;
    }
}

export class PropertiesGroup extends GObject.Object implements Gio.ActionGroup {
    static $gtype: GObject.GType<PropertiesGroup>;

    constructor(properties?: Partial<PropertiesGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PropertiesGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    object: GObject.Object;
    object_type: GObject.GType;
    objectType: GObject.GType;

    // Constructors

    static ['new'](object: GObject.Object): PropertiesGroup;

    static new_for_type(object_type: GObject.GType): PropertiesGroup;

    // Members

    add_all_properties(): void;

    add_property(name: string, property_name: string): void;

    add_property_full(name: string, property_name: string, flags: PropertiesFlags): void;

    remove(name: string): void;

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
}

export namespace RadioBox {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        active_id: string;
        activeId: string;
        has_more: boolean;
        hasMore: boolean;
        show_more: boolean;
        showMore: boolean;
    }
}

export class RadioBox extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<RadioBox>;

    constructor(properties?: Partial<RadioBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RadioBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active_id: string;
    activeId: string;
    has_more: boolean;
    hasMore: boolean;
    show_more: boolean;
    showMore: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): RadioBox;

    // Members

    add_item(id: string, text: string): void;

    get_active_id(): string;

    remove_item(id: string): void;

    set_active_id(id: string): void;

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

export namespace ReadOnlyListModel {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        base_model: Gio.ListModel;
        baseModel: Gio.ListModel;
    }
}

export class ReadOnlyListModel<A extends GObject.Object = GObject.Object>
    extends GObject.Object
    implements Gio.ListModel<A> {
    static $gtype: GObject.GType<ReadOnlyListModel>;

    constructor(properties?: Partial<ReadOnlyListModel.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<ReadOnlyListModel.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    base_model: Gio.ListModel;
    baseModel: Gio.ListModel;

    // Members

    static new(base_model: Gio.ListModel): Gio.ListModel;

    // Implemented Members

    get_item_type(): GObject.GType;

    get_n_items(): number;

    get_item(position: number): A | null;

    items_changed(position: number, removed: number, added: number): void;

    vfunc_get_item(position: number): A | null;

    vfunc_get_item_type(): GObject.GType;

    vfunc_get_n_items(): number;
}

export namespace RecursiveFileMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        root: Gio.File;
    }
}

export class RecursiveFileMonitor extends GObject.Object {
    static $gtype: GObject.GType<RecursiveFileMonitor>;

    constructor(properties?: Partial<RecursiveFileMonitor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RecursiveFileMonitor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    root: Gio.File;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'changed',
        callback: (_source: this, file: Gio.File, other_file: Gio.File | null, event: Gio.FileMonitorEvent) => void
    ): number;

    connect_after(
        signal: 'changed',
        callback: (_source: this, file: Gio.File, other_file: Gio.File | null, event: Gio.FileMonitorEvent) => void
    ): number;

    emit(signal: 'changed', file: Gio.File, other_file: Gio.File | null, event: Gio.FileMonitorEvent): void;

    // Constructors

    static ['new'](root: Gio.File): RecursiveFileMonitor;

    // Members

    cancel(): void;

    get_root(): Gio.File;

    set_ignore_func(ignore_func: RecursiveIgnoreFunc): void;

    start_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    start_finish(result: Gio.AsyncResult): boolean;
}

export namespace ScrolledWindow {
    export interface ConstructorProperties extends Gtk.ScrolledWindow.ConstructorProperties {
        [key: string]: any;
    }
}

export class ScrolledWindow extends Gtk.ScrolledWindow implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ScrolledWindow>;

    constructor(properties?: Partial<ScrolledWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ScrolledWindow.ConstructorProperties>, ...args: any[]): void;

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

export namespace SearchBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        search_mode_enabled: boolean;
        searchModeEnabled: boolean;
        show_close_button: boolean;
        showCloseButton: boolean;
    }
}

export class SearchBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SearchBar>;

    constructor(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    search_mode_enabled: boolean;
    searchModeEnabled: boolean;
    show_close_button: boolean;
    showCloseButton: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this) => void): number;

    connect_after(signal: 'activate', callback: (_source: this) => void): number;

    emit(signal: 'activate'): void;

    connect(signal: 'reveal', callback: (_source: this) => void): number;

    connect_after(signal: 'reveal', callback: (_source: this) => void): number;

    emit(signal: 'reveal'): void;

    // Constructors

    static ['new'](): SearchBar;

    // Members

    get_entry(): Gtk.SearchEntry;

    get_search_mode_enabled(): boolean;

    get_show_close_button(): boolean;

    set_search_mode_enabled(search_mode_enabled: boolean): void;

    set_show_close_button(show_close_button: boolean): void;

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

export namespace SettingsFlagAction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flag_nick: string;
        flagNick: string;
        schema_id: string;
        schemaId: string;
        schema_key: string;
        schemaKey: string;
    }
}

export class SettingsFlagAction extends GObject.Object implements Gio.Action {
    static $gtype: GObject.GType<SettingsFlagAction>;

    constructor(properties?: Partial<SettingsFlagAction.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SettingsFlagAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flag_nick: string;
    flagNick: string;
    schema_id: string;
    schemaId: string;
    schema_key: string;
    schemaKey: string;

    // Implemented Properties

    enabled: boolean;
    name: string;
    parameter_type: GLib.VariantType;
    parameterType: GLib.VariantType;
    state: GLib.Variant;
    state_type: GLib.VariantType;
    stateType: GLib.VariantType;

    // Members

    static new(schema_id: string, schema_key: string, flag_nick: string): Gio.Action;

    // Implemented Members

    activate(parameter?: GLib.Variant | null): void;

    change_state(value: GLib.Variant): void;

    get_enabled(): boolean;

    get_name(): string;

    get_parameter_type(): GLib.VariantType | null;

    get_state(): GLib.Variant;

    get_state_hint(): GLib.Variant | null;

    get_state_type(): GLib.VariantType | null;

    vfunc_activate(parameter?: GLib.Variant | null): void;

    vfunc_change_state(value: GLib.Variant): void;

    vfunc_get_enabled(): boolean;

    vfunc_get_name(): string;

    vfunc_get_parameter_type(): GLib.VariantType | null;

    vfunc_get_state(): GLib.Variant;

    vfunc_get_state_hint(): GLib.Variant | null;

    vfunc_get_state_type(): GLib.VariantType | null;
}

export namespace SettingsSandwich {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        path: string;
        schema_id: string;
        schemaId: string;
    }
}

export class SettingsSandwich extends GObject.Object {
    static $gtype: GObject.GType<SettingsSandwich>;

    constructor(properties?: Partial<SettingsSandwich.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SettingsSandwich.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: string;
    schema_id: string;
    schemaId: string;

    // Constructors

    static ['new'](schema_id: string, path: string): SettingsSandwich;

    // Members

    append(settings: Gio.Settings): void;

    bind(key: string, object: any | null, property: string, flags: Gio.SettingsBindFlags): void;

    bind_with_mapping(
        key: string,
        object: any | null,
        property: string,
        flags: Gio.SettingsBindFlags,
        get_mapping: Gio.SettingsBindGetMapping,
        set_mapping: Gio.SettingsBindSetMapping
    ): void;

    get_boolean(key: string): boolean;

    get_default_value(key: string): GLib.Variant;

    get_double(key: string): number;

    get_int(key: string): number;

    get_string(key: string): string;

    get_uint(key: string): number;

    get_user_value(key: string): GLib.Variant;

    get_value(key: string): GLib.Variant;

    set_boolean(key: string, val: boolean): void;

    set_double(key: string, val: number): void;

    set_int(key: string, val: number): void;

    set_string(key: string, val: string): void;

    set_uint(key: string, val: number): void;

    set_value(key: string, value: GLib.Variant): void;

    unbind(property: string): void;
}

export namespace ShortcutAccelDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        accelerator: string;
        shortcut_title: string;
        shortcutTitle: string;
    }
}

export class ShortcutAccelDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ShortcutAccelDialog>;

    constructor(properties?: Partial<ShortcutAccelDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutAccelDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accelerator: string;
    shortcut_title: string;
    shortcutTitle: string;

    // Constructors

    static ['new'](): ShortcutAccelDialog;
    static ['new'](...args: never[]): never;

    // Members

    get_accelerator(): string;

    get_chord(): ShortcutChord;

    get_shortcut_title(): string;

    set_accelerator(accelerator: string): void;

    set_shortcut_title(title: string): void;

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

export namespace ShortcutContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
        use_binding_sets: boolean;
        useBindingSets: boolean;
    }
}

export class ShortcutContext extends GObject.Object {
    static $gtype: GObject.GType<ShortcutContext>;

    constructor(properties?: Partial<ShortcutContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    use_binding_sets: boolean;
    useBindingSets: boolean;

    // Constructors

    static ['new'](name: string): ShortcutContext;

    // Members

    activate(widget: Gtk.Widget, chord: ShortcutChord): ShortcutMatch;

    add_action(accel: string, detailed_action_name: string): void;

    add_command(accel: string, command: string): void;

    add_signalv(accel: string, signal_name: string, values?: GObject.Value[] | null): void;

    get_name(): string;

    load_from_data(data: string, len: number): boolean;

    load_from_resource(resource_path: string): boolean;

    remove(accel: string): boolean;
}

export namespace ShortcutController {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: ShortcutContext;
        current_chord: ShortcutChord;
        currentChord: ShortcutChord;
        manager: ShortcutManager;
        widget: Gtk.Widget;
    }
}

export class ShortcutController extends GObject.Object {
    static $gtype: GObject.GType<ShortcutController>;

    constructor(properties?: Partial<ShortcutController.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutController.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: ShortcutContext;
    current_chord: ShortcutChord;
    currentChord: ShortcutChord;
    manager: ShortcutManager;
    widget: Gtk.Widget;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'reset', callback: (_source: this) => void): number;

    connect_after(signal: 'reset', callback: (_source: this) => void): number;

    emit(signal: 'reset'): void;

    connect(signal: 'set-context-named', callback: (_source: this, name: string) => void): number;

    connect_after(signal: 'set-context-named', callback: (_source: this, name: string) => void): number;

    emit(signal: 'set-context-named', name: string): void;

    // Constructors

    static ['new'](widget: Gtk.Widget): ShortcutController;

    // Members

    add_command_action(command_id: string, default_accel: string, phase: ShortcutPhase, action: string): void;

    add_command_callback(command_id: string, default_accel: string, phase: ShortcutPhase, callback: Gtk.Callback): void;

    execute_command(command: string): boolean;

    get_context(): ShortcutContext | null;

    get_context_for_phase(phase: ShortcutPhase): ShortcutContext | null;

    get_current_chord(): ShortcutChord | null;

    get_manager(): ShortcutManager;

    get_widget(): Gtk.Widget;

    remove_accel(accel: string, phase: ShortcutPhase): void;

    set_context_by_name(name?: string | null): void;

    set_manager(manager?: ShortcutManager | null): void;

    static find(widget: Gtk.Widget): ShortcutController;

    static try_find(widget: Gtk.Widget): ShortcutController | null;
}

export namespace ShortcutLabel {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        accelerator: string;
        chord: ShortcutChord;
    }
}

export class ShortcutLabel extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ShortcutLabel>;

    constructor(properties?: Partial<ShortcutLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accelerator: string;
    chord: ShortcutChord;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): ShortcutLabel;
    static ['new'](...args: never[]): never;

    // Members

    get_accelerator(): string;

    get_chord(): ShortcutChord | null;

    set_accelerator(accelerator: string): void;

    set_chord(chord: ShortcutChord): void;

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

export namespace ShortcutManager {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        theme: ShortcutTheme;
        theme_name: string;
        themeName: string;
        user_dir: string;
        userDir: string;
    }
}

export class ShortcutManager<A extends GObject.Object = GObject.Object>
    extends GObject.Object
    implements Gio.Initable, Gio.ListModel<A> {
    static $gtype: GObject.GType<ShortcutManager>;

    constructor(properties?: Partial<ShortcutManager.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<ShortcutManager.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    theme: ShortcutTheme;
    theme_name: string;
    themeName: string;
    user_dir: string;
    userDir: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Members

    add_action(detailed_action_name: string, section: string, group: string, title: string, subtitle: string): void;

    add_command(command: string, section: string, group: string, title: string, subtitle: string): void;

    add_shortcut_entries(shortcuts: ShortcutEntry[], translation_domain?: string | null): void;

    add_shortcuts_to_window(window: ShortcutsWindow): void;

    append_search_path(directory: string): void;

    get_theme(): ShortcutTheme;

    get_theme_by_name(theme_name?: string | null): ShortcutTheme | null;

    get_theme_name(): string;

    get_user_dir(): string;

    handle_event(event: Gdk.EventKey, toplevel: Gtk.Widget): boolean;

    prepend_search_path(directory: string): void;

    queue_reload(): void;

    reload(cancellable?: Gio.Cancellable | null): void;

    remove_search_path(directory: string): void;

    set_theme(theme: ShortcutTheme): void;

    set_theme_name(theme_name: string): void;

    set_user_dir(user_dir: string): void;

    static get_default(): ShortcutManager;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    get_item_type(): GObject.GType;

    get_n_items(): number;

    get_item(position: number): A | null;

    items_changed(position: number, removed: number, added: number): void;

    vfunc_get_item(position: number): A | null;

    vfunc_get_item_type(): GObject.GType;

    vfunc_get_n_items(): number;
}

export namespace ShortcutModel {
    export interface ConstructorProperties extends Gtk.TreeStore.ConstructorProperties {
        [key: string]: any;

        manager: ShortcutManager;
        theme: ShortcutTheme;
    }
}

export class ShortcutModel
    extends Gtk.TreeStore
    implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {
    static $gtype: GObject.GType<ShortcutModel>;

    constructor(properties?: Partial<ShortcutModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    manager: ShortcutManager;
    theme: ShortcutTheme;

    // Members

    get_manager(): ShortcutManager;

    get_theme(): ShortcutTheme;

    rebuild(): void;

    set_chord(iter: Gtk.TreeIter, chord: ShortcutChord): void;

    set_manager(manager: ShortcutManager): void;

    set_theme(theme: ShortcutTheme): void;

    static new(): Gtk.TreeModel;
    static new(...args: never[]): never;

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

    drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

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

    get_sort_column_id(): [boolean, number, Gtk.SortType];

    has_default_sort_func(): boolean;

    set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;

    set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

    set_sort_func(
        sort_column_id: number,
        sort_func: Gtk.TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;

    sort_column_changed(): void;

    vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];

    vfunc_has_default_sort_func(): boolean;

    vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;

    vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

    vfunc_set_sort_func(
        sort_column_id: number,
        sort_func: Gtk.TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;

    vfunc_sort_column_changed(): void;
}

export namespace ShortcutSimpleLabel {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        accel: string;
        action: string;
        command: string;
        show_accel: boolean;
        showAccel: boolean;
        title: string;
    }
}

export class ShortcutSimpleLabel extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ShortcutSimpleLabel>;

    constructor(properties?: Partial<ShortcutSimpleLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutSimpleLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accel: string;
    action: string;
    command: string;
    show_accel: boolean;
    showAccel: boolean;
    title: string;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): ShortcutSimpleLabel;
    static ['new'](...args: never[]): never;

    // Members

    get_accel(): string;

    get_action(): string;

    get_command(): string;

    get_title(): string;

    set_accel(accel: string): void;

    set_action(action: string): void;

    set_command(command: string): void;

    set_title(title: string): void;

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

export namespace ShortcutTheme {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
        parent_name: string;
        parentName: string;
        subtitle: string;
        title: string;
    }
}

export class ShortcutTheme extends GObject.Object {
    static $gtype: GObject.GType<ShortcutTheme>;

    constructor(properties?: Partial<ShortcutTheme.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutTheme.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    parent_name: string;
    parentName: string;
    subtitle: string;
    title: string;

    // Constructors

    static ['new'](name: string): ShortcutTheme;

    // Members

    add_command(accelerator: string, command: string): void;

    add_context(context: ShortcutContext): void;

    add_css_resource(path: string): void;

    find_context_by_name(name: string): ShortcutContext;

    find_default_context(widget: Gtk.Widget): ShortcutContext | null;

    get_chord_for_action(detailed_action_name: string): ShortcutChord;

    get_chord_for_command(command: string): ShortcutChord;

    get_name(): string;

    get_parent(): ShortcutTheme | null;

    get_parent_name(): string | null;

    get_subtitle(): string;

    get_title(): string;

    load_from_data(data: string, len: number): boolean;

    load_from_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    load_from_path(path: string, cancellable?: Gio.Cancellable | null): boolean;

    remove_css_resource(path: string): void;

    save_to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    save_to_path(path: string, cancellable?: Gio.Cancellable | null): boolean;

    save_to_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean;

    set_accel_for_action(detailed_action_name: string, accel: string, phase: ShortcutPhase): void;

    set_accel_for_command(command: string | null, accel: string | null, phase: ShortcutPhase): void;

    set_chord_for_action(detailed_action_name: string, chord: ShortcutChord, phase: ShortcutPhase): void;

    set_chord_for_command(command: string | null, chord: ShortcutChord | null, phase: ShortcutPhase): void;

    set_parent_name(parent_name: string): void;
}

export namespace ShortcutThemeEditor {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        theme: ShortcutTheme;
    }
}

export class ShortcutThemeEditor extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ShortcutThemeEditor>;

    constructor(properties?: Partial<ShortcutThemeEditor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutThemeEditor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    theme: ShortcutTheme;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](): ShortcutThemeEditor;

    // Members

    get_theme(): ShortcutTheme | null;

    set_theme(theme: ShortcutTheme): void;

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

export namespace ShortcutTooltip {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        accel: string;
        command_id: string;
        commandId: string;
        title: string;
        widget: Gtk.Widget;
    }
}

export class ShortcutTooltip extends GObject.Object {
    static $gtype: GObject.GType<ShortcutTooltip>;

    constructor(properties?: Partial<ShortcutTooltip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutTooltip.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accel: string;
    command_id: string;
    commandId: string;
    title: string;
    widget: Gtk.Widget;

    // Constructors

    static ['new'](): ShortcutTooltip;

    // Members

    get_accel(): string | null;

    get_command_id(): string | null;

    get_title(): string | null;

    get_widget(): Gtk.Widget | null;

    set_accel(accel?: string | null): void;

    set_command_id(command_id: string): void;

    set_title(title?: string | null): void;

    set_widget(widget?: Gtk.Widget | null): void;
}

export namespace ShortcutsGroup {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        accel_size_group: Gtk.SizeGroup;
        accelSizeGroup: Gtk.SizeGroup;
        height: number;
        title: string;
        title_size_group: Gtk.SizeGroup;
        titleSizeGroup: Gtk.SizeGroup;
        view: string;
    }
}

export class ShortcutsGroup extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ShortcutsGroup>;

    constructor(properties?: Partial<ShortcutsGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutsGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accel_size_group: Gtk.SizeGroup;
    accelSizeGroup: Gtk.SizeGroup;
    height: number;
    title: string;
    title_size_group: Gtk.SizeGroup;
    titleSizeGroup: Gtk.SizeGroup;
    view: string;

    // Implemented Properties

    orientation: Gtk.Orientation;

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

export namespace ShortcutsSection {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        max_height: number;
        maxHeight: number;
        section_name: string;
        sectionName: string;
        title: string;
        view_name: string;
        viewName: string;
    }
}

export class ShortcutsSection extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ShortcutsSection>;

    constructor(properties?: Partial<ShortcutsSection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutsSection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_height: number;
    maxHeight: number;
    section_name: string;
    sectionName: string;
    title: string;
    view_name: string;
    viewName: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'change-current-page', callback: (_source: this, object: number) => boolean): number;

    connect_after(signal: 'change-current-page', callback: (_source: this, object: number) => boolean): number;

    emit(signal: 'change-current-page', object: number): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

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

export namespace ShortcutsShortcut {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        accel_size_group: Gtk.SizeGroup;
        accelSizeGroup: Gtk.SizeGroup;
        accelerator: string;
        action_name: string;
        actionName: string;
        direction: Gtk.TextDirection;
        icon: Gio.Icon;
        icon_set: boolean;
        iconSet: boolean;
        shortcut_type: Gtk.ShortcutType;
        shortcutType: Gtk.ShortcutType;
        subtitle: string;
        subtitle_set: boolean;
        subtitleSet: boolean;
        title: string;
        title_size_group: Gtk.SizeGroup;
        titleSizeGroup: Gtk.SizeGroup;
    }
}

export class ShortcutsShortcut extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ShortcutsShortcut>;

    constructor(properties?: Partial<ShortcutsShortcut.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutsShortcut.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accel_size_group: Gtk.SizeGroup;
    accelSizeGroup: Gtk.SizeGroup;
    accelerator: string;
    action_name: string;
    actionName: string;
    direction: Gtk.TextDirection;
    icon: Gio.Icon;
    icon_set: boolean;
    iconSet: boolean;
    shortcut_type: Gtk.ShortcutType;
    shortcutType: Gtk.ShortcutType;
    subtitle: string;
    subtitle_set: boolean;
    subtitleSet: boolean;
    title: string;
    title_size_group: Gtk.SizeGroup;
    titleSizeGroup: Gtk.SizeGroup;

    // Implemented Properties

    orientation: Gtk.Orientation;

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

export namespace ShortcutsWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;

        section_name: string;
        sectionName: string;
        view_name: string;
        viewName: string;
    }
}

export class ShortcutsWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ShortcutsWindow>;

    constructor(properties?: Partial<ShortcutsWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ShortcutsWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    section_name: string;
    sectionName: string;
    view_name: string;
    viewName: string;

    // Fields
    window: Gtk.Window | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'close', callback: (_source: this) => void): number;

    connect_after(signal: 'close', callback: (_source: this) => void): number;

    emit(signal: 'close'): void;

    connect(signal: 'search', callback: (_source: this) => void): number;

    connect_after(signal: 'search', callback: (_source: this) => void): number;

    emit(signal: 'search'): void;

    // Members

    vfunc_close(): void;

    vfunc_search(): void;

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

export namespace SignalGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        target: GObject.Object;
        target_type: GObject.GType;
        targetType: GObject.GType;
    }
}

export class SignalGroup extends GObject.Object {
    static $gtype: GObject.GType<SignalGroup>;

    constructor(properties?: Partial<SignalGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SignalGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    target: GObject.Object;
    target_type: GObject.GType;
    targetType: GObject.GType;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'bind', callback: (_source: this, instance: GObject.Object) => void): number;

    connect_after(signal: 'bind', callback: (_source: this, instance: GObject.Object) => void): number;

    emit(signal: 'bind', instance: GObject.Object): void;

    connect(signal: 'unbind', callback: (_source: this) => void): number;

    connect_after(signal: 'unbind', callback: (_source: this) => void): number;

    emit(signal: 'unbind'): void;

    // Constructors

    static ['new'](target_type: GObject.GType): SignalGroup;

    // Members

    block(): void;

    connect_data(
        detailed_signal: string,
        c_handler: GObject.Callback,
        notify: GObject.ClosureNotify,
        flags: GObject.ConnectFlags
    ): void;

    connect_swapped(detailed_signal: string, c_handler: GObject.Callback): void;

    get_target<T = GObject.Object>(): T;

    set_target(target?: GObject.Object | null): void;

    unblock(): void;
}

export namespace SimpleLabel {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;

        label: string;
        width_chars: number;
        widthChars: number;
        xalign: number;
    }
}

export class SimpleLabel extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SimpleLabel>;

    constructor(properties?: Partial<SimpleLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;
    width_chars: number;
    widthChars: number;
    xalign: number;

    // Constructors

    static ['new'](label: string): SimpleLabel;

    // Members

    get_label(): string;

    get_width_chars(): number;

    get_xalign(): number;

    set_label(label: string): void;

    set_width_chars(width_chars: number): void;

    set_xalign(xalign: number): void;

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

export namespace SimplePopover {
    export interface ConstructorProperties extends Gtk.Popover.ConstructorProperties {
        [key: string]: any;

        button_text: string;
        buttonText: string;
        message: string;
        ready: boolean;
        text: string;
        title: string;
    }
}

export class SimplePopover extends Gtk.Popover implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SimplePopover>;

    constructor(properties?: Partial<SimplePopover.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimplePopover.ConstructorProperties>, ...args: any[]): void;

    // Properties
    button_text: string;
    buttonText: string;
    message: string;
    ready: boolean;
    text: string;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this, text: string) => void): number;

    connect_after(signal: 'activate', callback: (_source: this, text: string) => void): number;

    emit(signal: 'activate', text: string): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(
        signal: 'insert-text',
        callback: (_source: this, position: number, chars: string, n_chars: number) => boolean
    ): number;

    connect_after(
        signal: 'insert-text',
        callback: (_source: this, position: number, chars: string, n_chars: number) => boolean
    ): number;

    emit(signal: 'insert-text', position: number, chars: string, n_chars: number): void;

    // Constructors

    static ['new'](): SimplePopover;
    static ['new'](...args: never[]): never;

    // Members

    get_button_text(): string;

    get_message(): string;

    get_ready(): boolean;

    get_text(): string;

    get_title(): string;

    set_button_text(button_text: string): void;

    set_message(message: string): void;

    set_ready(ready: boolean): void;

    set_text(text: string): void;

    set_title(title: string): void;

    vfunc_activate(text: string): void;

    vfunc_changed(): void;

    vfunc_insert_text(position: number, chars: string, n_chars: number): boolean;

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

export namespace Slider {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        position: SliderPosition;
    }
}

export class Slider extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Slider>;

    constructor(properties?: Partial<Slider.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Slider.ConstructorProperties>, ...args: any[]): void;

    // Properties
    position: SliderPosition;

    // Constructors

    static ['new'](): Slider;

    // Members

    add_slider(widget: Gtk.Widget, position: SliderPosition): void;

    get_position(): SliderPosition;

    set_position(position: SliderPosition): void;

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

export namespace StackList {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        model: Gio.ListModel;
    }
}

export class StackList extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<StackList>;

    constructor(properties?: Partial<StackList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StackList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: Gio.ListModel;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'header-activated', callback: (_source: this, object: Gtk.ListBoxRow) => void): number;

    connect_after(signal: 'header-activated', callback: (_source: this, object: Gtk.ListBoxRow) => void): number;

    emit(signal: 'header-activated', object: Gtk.ListBoxRow): void;

    connect(signal: 'row-activated', callback: (_source: this, object: Gtk.ListBoxRow) => void): number;

    connect_after(signal: 'row-activated', callback: (_source: this, object: Gtk.ListBoxRow) => void): number;

    emit(signal: 'row-activated', object: Gtk.ListBoxRow): void;

    // Constructors

    static ['new'](): StackList;

    // Members

    clear(): void;

    get_depth(): number;

    get_model(): Gio.ListModel;

    pop(): void;

    push(header: Gtk.Widget, model: Gio.ListModel, create_widget_func: StackListCreateWidgetFunc): void;

    vfunc_header_activated(row: Gtk.ListBoxRow): void;

    vfunc_row_activated(row: Gtk.ListBoxRow): void;

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

export namespace StateMachine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        state: string;
    }
}

export class StateMachine extends GObject.Object implements Gtk.Buildable {
    static $gtype: GObject.GType<StateMachine>;

    constructor(properties?: Partial<StateMachine.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StateMachine.ConstructorProperties>, ...args: any[]): void;

    // Properties
    state: string;

    // Constructors

    static ['new'](): StateMachine;

    // Members

    add_binding(
        state: string,
        source_object: any | null,
        source_property: string,
        target_object: any | null,
        target_property: string,
        flags: GObject.BindingFlags
    ): void;

    add_propertyv(state: string, object: any | null, property: string, value: any): void;

    add_style(state: string, widget: Gtk.Widget, style: string): void;

    create_action(name: string): Gio.Action;

    get_state(): string;

    is_state(state?: string | null): boolean;

    set_state(state: string): void;

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

export namespace Suggestion {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        icon: Gio.Icon;
        icon_name: string;
        iconName: string;
        id: string;
        secondary_icon: Gio.Icon;
        secondaryIcon: Gio.Icon;
        secondary_icon_name: string;
        secondaryIconName: string;
        subtitle: string;
        title: string;
    }
}

export class Suggestion extends GObject.Object {
    static $gtype: GObject.GType<Suggestion>;

    constructor(properties?: Partial<Suggestion.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Suggestion.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon: Gio.Icon;
    icon_name: string;
    iconName: string;
    id: string;
    secondary_icon: Gio.Icon;
    secondaryIcon: Gio.Icon;
    secondary_icon_name: string;
    secondaryIconName: string;
    subtitle: string;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'replace-typed-text', callback: (_source: this, object: string) => string): number;

    connect_after(signal: 'replace-typed-text', callback: (_source: this, object: string) => string): number;

    emit(signal: 'replace-typed-text', object: string): void;

    connect(signal: 'suggest-suffix', callback: (_source: this, object: string) => string): number;

    connect_after(signal: 'suggest-suffix', callback: (_source: this, object: string) => string): number;

    emit(signal: 'suggest-suffix', object: string): void;

    // Constructors

    static ['new'](): Suggestion;

    // Members

    get_icon(): Gio.Icon | null;

    get_icon_name(): string;

    get_icon_surface(widget: Gtk.Widget): cairo.Surface | null;

    get_id(): string;

    get_secondary_icon(): Gio.Icon | null;

    get_secondary_icon_name(): string;

    get_secondary_icon_surface(widget: Gtk.Widget): cairo.Surface | null;

    get_subtitle(): string;

    get_title(): string;

    replace_typed_text(typed_text: string): string | null;

    set_icon_name(icon_name: string): void;

    set_id(id: string): void;

    set_secondary_icon_name(icon_name: string): void;

    set_subtitle(subtitle: string): void;

    set_title(title: string): void;

    suggest_suffix(typed_text: string): string | null;

    vfunc_get_icon(): Gio.Icon | null;

    vfunc_get_icon_surface(widget: Gtk.Widget): cairo.Surface | null;

    vfunc_get_secondary_icon(): Gio.Icon | null;

    vfunc_get_secondary_icon_surface(widget: Gtk.Widget): cairo.Surface | null;

    vfunc_replace_typed_text(typed_text: string): string | null;

    vfunc_suggest_suffix(typed_text: string): string | null;
}

export namespace SuggestionButton {
    export interface ConstructorProperties extends Gtk.Stack.ConstructorProperties {
        [key: string]: any;

        button: Gtk.Button;
        entry: SuggestionEntry;
    }
}

export class SuggestionButton extends Gtk.Stack implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SuggestionButton>;

    constructor(properties?: Partial<SuggestionButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SuggestionButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    button: Gtk.Button;
    entry: SuggestionEntry;

    // Constructors

    static ['new'](): SuggestionButton;

    // Members

    get_button(): Gtk.Button;

    get_entry(): SuggestionEntry;

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

export namespace SuggestionEntry {
    export interface ConstructorProperties extends Gtk.Entry.ConstructorProperties {
        [key: string]: any;

        activate_on_single_click: boolean;
        activateOnSingleClick: boolean;
        compact: boolean;
        model: Gio.ListModel;
        suggestion: Suggestion;
        typed_text: string;
        typedText: string;
    }
}

export class SuggestionEntry
    extends Gtk.Entry
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
    static $gtype: GObject.GType<SuggestionEntry>;

    constructor(properties?: Partial<SuggestionEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SuggestionEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    activate_on_single_click: boolean;
    activateOnSingleClick: boolean;
    compact: boolean;
    model: Gio.ListModel;
    suggestion: Suggestion;
    typed_text: string;
    typedText: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'action', callback: (_source: this, object: string, p0: string, p1: string) => void): number;

    connect_after(signal: 'action', callback: (_source: this, object: string, p0: string, p1: string) => void): number;

    emit(signal: 'action', object: string, p0: string, p1: string): void;

    connect(signal: 'activate-suggestion', callback: (_source: this) => void): number;

    connect_after(signal: 'activate-suggestion', callback: (_source: this) => void): number;

    emit(signal: 'activate-suggestion'): void;

    connect(signal: 'hide-suggestions', callback: (_source: this) => void): number;

    connect_after(signal: 'hide-suggestions', callback: (_source: this) => void): number;

    emit(signal: 'hide-suggestions'): void;

    connect(signal: 'move-suggestion', callback: (_source: this, amount: number) => void): number;

    connect_after(signal: 'move-suggestion', callback: (_source: this, amount: number) => void): number;

    emit(signal: 'move-suggestion', amount: number): void;

    connect(signal: 'show-suggestions', callback: (_source: this) => void): number;

    connect_after(signal: 'show-suggestions', callback: (_source: this) => void): number;

    emit(signal: 'show-suggestions'): void;

    connect(signal: 'suggestion-activated', callback: (_source: this, object: Suggestion) => void): number;

    connect_after(signal: 'suggestion-activated', callback: (_source: this, object: Suggestion) => void): number;

    emit(signal: 'suggestion-activated', object: Suggestion): void;

    connect(signal: 'suggestion-selected', callback: (_source: this, suggestion: Suggestion) => void): number;

    connect_after(signal: 'suggestion-selected', callback: (_source: this, suggestion: Suggestion) => void): number;

    emit(signal: 'suggestion-selected', suggestion: Suggestion): void;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](): SuggestionEntry;

    // Members

    default_position_func(area: Gdk.Rectangle, is_absolute: boolean, user_data?: any | null): void;

    get_activate_on_single_click(): boolean;

    get_compact(): boolean;

    get_model(): Gio.ListModel | null;

    get_popover(): Gtk.Widget;

    get_suggestion(): Suggestion | null;

    get_typed_text(): string;

    hide_suggestions(): void;

    set_activate_on_single_click(activate_on_single_click: boolean): void;

    set_compact(compact: boolean): void;

    set_model(model: Gio.ListModel): void;

    set_position_func(func?: SuggestionPositionFunc | null, func_data_destroy?: GLib.DestroyNotify | null): void;

    set_suggestion(suggestion: Suggestion): void;

    window_position_func(area: Gdk.Rectangle, is_absolute: boolean, user_data?: any | null): void;

    vfunc_hide_suggestions(): void;

    vfunc_move_suggestion(amount: number): void;

    vfunc_show_suggestions(): void;

    vfunc_suggestion_activated(suggestion: Suggestion): void;

    vfunc_suggestion_selected(suggestion: Suggestion): void;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    copy_clipboard(): void;

    cut_clipboard(): void;

    delete_selection(): void;

    delete_text(start_pos: number, end_pos: number): void;

    get_chars(start_pos: number, end_pos: number): string;

    get_editable(): boolean;

    get_position(): number;

    get_selection_bounds(): [boolean, number | null, number | null];

    insert_text(new_text: string, new_text_length: number, position: number): number;

    paste_clipboard(): void;

    select_region(start_pos: number, end_pos: number): void;

    set_editable(is_editable: boolean): void;

    set_position(position: number): void;

    vfunc_changed(): void;

    vfunc_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_get_chars(start_pos: number, end_pos: number): string;

    vfunc_get_position(): number;

    vfunc_get_selection_bounds(): [boolean, number | null, number | null];

    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_set_position(position: number): void;

    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export namespace SuggestionEntryBuffer {
    export interface ConstructorProperties extends Gtk.EntryBuffer.ConstructorProperties {
        [key: string]: any;

        suggestion: Suggestion;
    }
}

export class SuggestionEntryBuffer extends Gtk.EntryBuffer {
    static $gtype: GObject.GType<SuggestionEntryBuffer>;

    constructor(properties?: Partial<SuggestionEntryBuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SuggestionEntryBuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    suggestion: Suggestion;

    // Constructors

    static ['new'](): SuggestionEntryBuffer;
    static ['new'](...args: never[]): never;

    // Members

    clear(): void;

    commit(): void;

    get_suggestion(): Suggestion | null;

    get_typed_length(): number;

    get_typed_text(): string;

    set_suggestion(suggestion?: Suggestion | null): void;
}

export namespace SuggestionPopover {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;

        model: Suggestion;
        relative_to: Gtk.Widget;
        relativeTo: Gtk.Widget;
        selected: Suggestion;
        subtitle_ellipsize: Pango.EllipsizeMode;
        subtitleEllipsize: Pango.EllipsizeMode;
        title_ellipsize: Pango.EllipsizeMode;
        titleEllipsize: Pango.EllipsizeMode;
    }
}

export class SuggestionPopover extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SuggestionPopover>;

    constructor(properties?: Partial<SuggestionPopover.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SuggestionPopover.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: Suggestion;
    relative_to: Gtk.Widget;
    relativeTo: Gtk.Widget;
    selected: Suggestion;
    subtitle_ellipsize: Pango.EllipsizeMode;
    subtitleEllipsize: Pango.EllipsizeMode;
    title_ellipsize: Pango.EllipsizeMode;
    titleEllipsize: Pango.EllipsizeMode;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'suggestion-activated', callback: (_source: this, object: Suggestion) => void): number;

    connect_after(signal: 'suggestion-activated', callback: (_source: this, object: Suggestion) => void): number;

    emit(signal: 'suggestion-activated', object: Suggestion): void;

    // Constructors

    static ['new'](): SuggestionPopover;
    static ['new'](...args: never[]): never;

    // Members

    activate_selected(): void;

    get_model(): Gio.ListModel | null;

    get_relative_to(): Gtk.Widget | null;

    get_selected(): Suggestion | null;

    move_by(amount: number): void;

    popdown(): void;

    popup(): void;

    set_model(model: Gio.ListModel): void;

    set_relative_to(widget: Gtk.Widget): void;

    set_selected(suggestion: Suggestion): void;

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

export namespace SuggestionRow {
    export interface ConstructorProperties extends ListBoxRow.ConstructorProperties {
        [key: string]: any;

        orientation: Gtk.Orientation;
        suggestion: Suggestion;
    }
}

export class SuggestionRow
    extends ListBoxRow
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<SuggestionRow>;

    constructor(properties?: Partial<SuggestionRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SuggestionRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    orientation: Gtk.Orientation;
    suggestion: Suggestion;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Constructors

    static ['new'](): SuggestionRow;

    // Members

    get_suggestion(): Suggestion;

    set_suggestion(suggestion: Suggestion): void;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

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

export namespace Tab {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;

        active: boolean;
        can_close: boolean;
        canClose: boolean;
        edge: Gtk.PositionType;
        style: TabStyle | any;
        title: string;
        widget: Gtk.Widget;
    }
}

export class Tab extends Bin implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<Tab>;

    constructor(properties?: Partial<Tab.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tab.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active: boolean;
    can_close: boolean;
    canClose: boolean;
    edge: Gtk.PositionType;
    style: TabStyle | any;
    title: string;
    widget: Gtk.Widget;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'clicked', callback: (_source: this) => void): number;

    connect_after(signal: 'clicked', callback: (_source: this) => void): number;

    emit(signal: 'clicked'): void;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Members

    get_active(): boolean;

    get_can_close(): boolean;

    get_edge(): Gtk.PositionType;

    get_icon_name(): string;

    get_style(): TabStyle;
    get_style(...args: never[]): never;

    get_title(): string;

    get_widget(): Gtk.Widget | null;

    set_active(active: boolean): void;

    set_can_close(can_close: boolean): void;

    set_edge(edge: Gtk.PositionType): void;

    set_gicon(gicon: Gio.Icon): void;

    set_icon_name(icon_name: string): void;

    set_style(style: TabStyle): void;
    set_style(...args: never[]): never;

    set_title(title: string): void;

    set_widget(widget: Gtk.Widget): void;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

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

export namespace TabStrip {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        edge: Gtk.PositionType;
        stack: Gtk.Stack;
        style: TabStyle | any;
    }
}

export class TabStrip extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<TabStrip>;

    constructor(properties?: Partial<TabStrip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TabStrip.ConstructorProperties>, ...args: any[]): void;

    // Properties
    edge: Gtk.PositionType;
    stack: Gtk.Stack;
    style: TabStyle | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): TabStrip;
    static ['new'](...args: never[]): never;

    // Members

    add_control(widget: Gtk.Widget): void;

    get_edge(): Gtk.PositionType;

    get_stack(): Gtk.Stack | null;

    get_style(): TabStyle;
    get_style(...args: never[]): never;

    set_edge(edge: Gtk.PositionType): void;

    set_stack(stack: Gtk.Stack): void;

    set_style(style: TabStyle): void;
    set_style(...args: never[]): never;

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

export namespace TaskCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        key_copy_func: any;
        keyCopyFunc: any;
        key_destroy_func: any;
        keyDestroyFunc: any;
        key_equal_func: any;
        keyEqualFunc: any;
        key_hash_func: any;
        keyHashFunc: any;
        populate_callback: any;
        populateCallback: any;
        populate_callback_data: any;
        populateCallbackData: any;
        populate_callback_data_destroy: any;
        populateCallbackDataDestroy: any;
        time_to_live: number;
        timeToLive: number;
        value_copy_func: any;
        valueCopyFunc: any;
        value_destroy_func: any;
        valueDestroyFunc: any;
    }
}

export class TaskCache extends GObject.Object {
    static $gtype: GObject.GType<TaskCache>;

    constructor(properties?: Partial<TaskCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TaskCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key_copy_func: any;
    keyCopyFunc: any;
    key_destroy_func: any;
    keyDestroyFunc: any;
    key_equal_func: any;
    keyEqualFunc: any;
    key_hash_func: any;
    keyHashFunc: any;
    populate_callback: any;
    populateCallback: any;
    populate_callback_data: any;
    populateCallbackData: any;
    populate_callback_data_destroy: any;
    populateCallbackDataDestroy: any;
    time_to_live: number;
    timeToLive: number;
    value_copy_func: any;
    valueCopyFunc: any;
    value_destroy_func: any;
    valueDestroyFunc: any;

    // Members

    evict(key?: any | null): boolean;

    evict_all(): void;

    get_async(
        key: any | null,
        force_update: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_finish(result: Gio.AsyncResult): any | null;

    peek<T = GObject.Object>(key?: any | null): T;

    set_name(name: string): void;
}

export namespace ThemeManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ThemeManager extends GObject.Object {
    static $gtype: GObject.GType<ThemeManager>;

    constructor(properties?: Partial<ThemeManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ThemeManager.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ThemeManager;

    // Members

    add_resources(resource_path: string): void;

    remove_resources(resource_path: string): void;
}

export namespace ThreeGrid {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        column_spacing: number;
        columnSpacing: number;
        row_spacing: number;
        rowSpacing: number;
    }
}

export class ThreeGrid extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ThreeGrid>;

    constructor(properties?: Partial<ThreeGrid.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ThreeGrid.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column_spacing: number;
    columnSpacing: number;
    row_spacing: number;
    rowSpacing: number;

    // Constructors

    static ['new'](): ThreeGrid;

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

export namespace Tree {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        always_expand: boolean;
        alwaysExpand: boolean;
        context_menu: Gio.MenuModel;
        contextMenu: Gio.MenuModel;
        root: TreeNode;
        selection: TreeNode;
        show_icons: boolean;
        showIcons: boolean;
    }
}

export class Tree extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<Tree>;

    constructor(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    always_expand: boolean;
    alwaysExpand: boolean;
    context_menu: Gio.MenuModel;
    contextMenu: Gio.MenuModel;
    root: TreeNode;
    selection: TreeNode;
    show_icons: boolean;
    showIcons: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'action', callback: (_source: this, object: string, p0: string, p1: string) => void): number;

    connect_after(signal: 'action', callback: (_source: this, object: string, p0: string, p1: string) => void): number;

    emit(signal: 'action', object: string, p0: string, p1: string): void;

    connect(signal: 'populate-popup', callback: (_source: this, object: Gtk.Widget) => void): number;

    connect_after(signal: 'populate-popup', callback: (_source: this, object: Gtk.Widget) => void): number;

    emit(signal: 'populate-popup', object: Gtk.Widget): void;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Members

    add_builder(builder: TreeBuilder): void;

    expand_to_node(node: TreeNode): void;

    find_child_node(node: TreeNode, find_func: TreeFindFunc): TreeNode | null;

    find_custom(equal_func: GLib.EqualFunc, key?: any | null): TreeNode | null;

    find_item(item?: GObject.Object | null): TreeNode | null;

    get_context_menu(): Gio.MenuModel | null;

    get_root(): TreeNode | null;

    get_selected(): TreeNode;

    get_show_icons(): boolean;

    rebuild(): void;

    remove_builder(builder: TreeBuilder): void;

    scroll_to_node(node: TreeNode): void;

    set_context_menu(context_menu: Gio.MenuModel): void;

    set_filter(filter_func: TreeFilterFunc): void;

    set_root(node: TreeNode): void;

    set_show_icons(show_icons: boolean): void;

    unselect_all(): void;

    vfunc_action(action_group: string, action_name: string, param: string): void;

    vfunc_populate_popup(widget: Gtk.Widget): void;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace TreeBuilder {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        tree: Tree;
    }
}

export class TreeBuilder extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<TreeBuilder>;

    constructor(properties?: Partial<TreeBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeBuilder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    tree: Tree;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'added', callback: (_source: this, object: Tree) => void): number;

    connect_after(signal: 'added', callback: (_source: this, object: Tree) => void): number;

    emit(signal: 'added', object: Tree): void;

    connect(signal: 'build-children', callback: (_source: this, object: TreeNode) => void): number;

    connect_after(signal: 'build-children', callback: (_source: this, object: TreeNode) => void): number;

    emit(signal: 'build-children', object: TreeNode): void;

    connect(signal: 'build-node', callback: (_source: this, object: TreeNode) => void): number;

    connect_after(signal: 'build-node', callback: (_source: this, object: TreeNode) => void): number;

    emit(signal: 'build-node', object: TreeNode): void;

    connect(
        signal: 'drag-data-get',
        callback: (_source: this, object: TreeNode, p0: Gtk.SelectionData) => boolean
    ): number;

    connect_after(
        signal: 'drag-data-get',
        callback: (_source: this, object: TreeNode, p0: Gtk.SelectionData) => boolean
    ): number;

    emit(signal: 'drag-data-get', object: TreeNode, p0: Gtk.SelectionData): void;

    connect(
        signal: 'drag-data-received',
        callback: (
            _source: this,
            object: TreeNode,
            p0: TreeDropPosition,
            p1: Gdk.DragAction,
            p2: Gtk.SelectionData
        ) => boolean
    ): number;

    connect_after(
        signal: 'drag-data-received',
        callback: (
            _source: this,
            object: TreeNode,
            p0: TreeDropPosition,
            p1: Gdk.DragAction,
            p2: Gtk.SelectionData
        ) => boolean
    ): number;

    emit(
        signal: 'drag-data-received',
        object: TreeNode,
        p0: TreeDropPosition,
        p1: Gdk.DragAction,
        p2: Gtk.SelectionData
    ): void;

    connect(signal: 'drag-node-delete', callback: (_source: this, object: TreeNode) => boolean): number;

    connect_after(signal: 'drag-node-delete', callback: (_source: this, object: TreeNode) => boolean): number;

    emit(signal: 'drag-node-delete', object: TreeNode): void;

    connect(
        signal: 'drag-node-received',
        callback: (
            _source: this,
            object: TreeNode,
            p0: TreeNode,
            p1: TreeDropPosition,
            p2: Gdk.DragAction,
            p3: Gtk.SelectionData
        ) => boolean
    ): number;

    connect_after(
        signal: 'drag-node-received',
        callback: (
            _source: this,
            object: TreeNode,
            p0: TreeNode,
            p1: TreeDropPosition,
            p2: Gdk.DragAction,
            p3: Gtk.SelectionData
        ) => boolean
    ): number;

    emit(
        signal: 'drag-node-received',
        object: TreeNode,
        p0: TreeNode,
        p1: TreeDropPosition,
        p2: Gdk.DragAction,
        p3: Gtk.SelectionData
    ): void;

    connect(signal: 'node-activated', callback: (_source: this, object: TreeNode) => boolean): number;

    connect_after(signal: 'node-activated', callback: (_source: this, object: TreeNode) => boolean): number;

    emit(signal: 'node-activated', object: TreeNode): void;

    connect(signal: 'node-collapsed', callback: (_source: this, object: TreeNode) => void): number;

    connect_after(signal: 'node-collapsed', callback: (_source: this, object: TreeNode) => void): number;

    emit(signal: 'node-collapsed', object: TreeNode): void;

    connect(signal: 'node-draggable', callback: (_source: this, object: TreeNode) => boolean): number;

    connect_after(signal: 'node-draggable', callback: (_source: this, object: TreeNode) => boolean): number;

    emit(signal: 'node-draggable', object: TreeNode): void;

    connect(
        signal: 'node-droppable',
        callback: (_source: this, object: TreeNode, p0: Gtk.SelectionData) => boolean
    ): number;

    connect_after(
        signal: 'node-droppable',
        callback: (_source: this, object: TreeNode, p0: Gtk.SelectionData) => boolean
    ): number;

    emit(signal: 'node-droppable', object: TreeNode, p0: Gtk.SelectionData): void;

    connect(signal: 'node-expanded', callback: (_source: this, object: TreeNode) => void): number;

    connect_after(signal: 'node-expanded', callback: (_source: this, object: TreeNode) => void): number;

    emit(signal: 'node-expanded', object: TreeNode): void;

    connect(signal: 'node-popup', callback: (_source: this, object: TreeNode, p0: Gio.Menu) => void): number;

    connect_after(signal: 'node-popup', callback: (_source: this, object: TreeNode, p0: Gio.Menu) => void): number;

    emit(signal: 'node-popup', object: TreeNode, p0: Gio.Menu): void;

    connect(signal: 'node-selected', callback: (_source: this, object: TreeNode) => void): number;

    connect_after(signal: 'node-selected', callback: (_source: this, object: TreeNode) => void): number;

    emit(signal: 'node-selected', object: TreeNode): void;

    connect(signal: 'node-unselected', callback: (_source: this, object: TreeNode) => void): number;

    connect_after(signal: 'node-unselected', callback: (_source: this, object: TreeNode) => void): number;

    emit(signal: 'node-unselected', object: TreeNode): void;

    connect(signal: 'removed', callback: (_source: this, object: Tree) => void): number;

    connect_after(signal: 'removed', callback: (_source: this, object: Tree) => void): number;

    emit(signal: 'removed', object: Tree): void;

    // Constructors

    static ['new'](): TreeBuilder;

    // Members

    get_tree(): Tree | null;

    vfunc_added(tree: Gtk.Widget): void;

    vfunc_build_children(parent: TreeNode): void;

    vfunc_build_node(node: TreeNode): void;

    vfunc_cell_data_func(node: TreeNode, cell: Gtk.CellRenderer): void;

    vfunc_drag_data_get(node: TreeNode, data: Gtk.SelectionData): boolean;

    vfunc_drag_data_received(
        drop_node: TreeNode,
        position: TreeDropPosition,
        action: Gdk.DragAction,
        data: Gtk.SelectionData
    ): boolean;

    vfunc_drag_node_delete(node: TreeNode): boolean;

    vfunc_drag_node_received(
        drag_node: TreeNode,
        drop_node: TreeNode,
        position: TreeDropPosition,
        action: Gdk.DragAction,
        data: Gtk.SelectionData
    ): boolean;

    vfunc_node_activated(node: TreeNode): boolean;

    vfunc_node_collapsed(node: TreeNode): void;

    vfunc_node_draggable(node: TreeNode): boolean;

    vfunc_node_droppable(node: TreeNode, data: Gtk.SelectionData): boolean;

    vfunc_node_expanded(node: TreeNode): void;

    vfunc_node_popup(node: TreeNode, menu: Gio.Menu): void;

    vfunc_node_selected(node: TreeNode): void;

    vfunc_node_unselected(node: TreeNode): void;

    vfunc_removed(tree: Gtk.Widget): void;
}

export namespace TreeNode {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        children_possible: boolean;
        childrenPossible: boolean;
        expanded_icon_name: string;
        expandedIconName: string;
        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        item: GObject.Object;
        reset_on_collapse: boolean;
        resetOnCollapse: boolean;
        text: string;
        tree: Tree;
        use_dim_label: boolean;
        useDimLabel: boolean;
        use_markup: boolean;
        useMarkup: boolean;
    }
}

export class TreeNode extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<TreeNode>;

    constructor(properties?: Partial<TreeNode.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeNode.ConstructorProperties>, ...args: any[]): void;

    // Properties
    children_possible: boolean;
    childrenPossible: boolean;
    expanded_icon_name: string;
    expandedIconName: string;
    gicon: Gio.Icon;
    icon_name: string;
    iconName: string;
    item: GObject.Object;
    reset_on_collapse: boolean;
    resetOnCollapse: boolean;
    text: string;
    tree: Tree;
    use_dim_label: boolean;
    useDimLabel: boolean;
    use_markup: boolean;
    useMarkup: boolean;

    // Constructors

    static ['new'](): TreeNode;

    // Members

    add_emblem(emblem_name: string): void;

    append(child: TreeNode): void;

    clear_emblems(): void;

    collapse(): void;

    expand(expand_ancestors: boolean): boolean;

    get_area(area: Gdk.Rectangle): void;

    get_children_possible(): boolean;

    get_expanded(): boolean;

    get_foreground_rgba(): Gdk.RGBA | null;

    get_gicon(): Gio.Icon;

    get_icon_name(): string;

    get_item<T = GObject.Object>(): T;

    get_iter(iter: Gtk.TreeIter): boolean;

    get_parent(): TreeNode;

    get_path(): Gtk.TreePath | null;

    get_reset_on_collapse(): boolean;

    get_text(): string;

    get_tree(): Tree;

    get_use_dim_label(): boolean;

    get_use_markup(): boolean;

    has_emblem(emblem_name: string): boolean;

    insert(child: TreeNode, position: number): void;

    insert_sorted(child: TreeNode, compare_func: TreeNodeCompareFunc): void;

    invalidate(): void;

    is_root(): boolean;

    n_children(): number;

    nth_child(nth: number): TreeNode | null;

    prepend(child: TreeNode): void;

    rebuild(): void;

    remove(child: TreeNode): void;

    remove_emblem(emblem_name: string): void;

    select(): void;

    set_children_possible(children_possible: boolean): void;

    set_emblems(emblems: string): void;

    set_foreground_rgba(foreground_rgba?: Gdk.RGBA | null): void;

    set_gicon(icon: Gio.Icon): void;

    set_icon_name(icon_name?: string | null): void;

    set_item(item: GObject.Object): void;

    set_reset_on_collapse(reset_on_collapse: boolean): void;

    set_text(text?: string | null): void;

    set_use_dim_label(use_dim_label: boolean): void;

    set_use_markup(use_markup: boolean): void;

    show_popover(popover: Gtk.Popover): void;
}

export namespace WidgetActionGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        widget: Gtk.Widget;
    }
}

export class WidgetActionGroup extends GObject.Object implements Gio.ActionGroup {
    static $gtype: GObject.GType<WidgetActionGroup>;

    constructor(properties?: Partial<WidgetActionGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WidgetActionGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    widget: Gtk.Widget;

    // Members

    set_action_enabled(action_name: string, enabled: boolean): void;

    static attach(widget: Gtk.Widget, group_name: string): void;

    static new(widget: Gtk.Widget): Gio.ActionGroup;

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
}

export class Counter {
    static $gtype: GObject.GType<Counter>;

    constructor(copy: Counter);

    // Fields
    values: CounterValue;
    category: string;
    name: string;
    description: string;

    // Members
    get(): number;

    reset(): void;
}

export class CounterArena {
    static $gtype: GObject.GType<CounterArena>;

    constructor(pid: GLib.Pid);
    constructor(copy: CounterArena);

    // Constructors
    static new_for_pid(pid: GLib.Pid): CounterArena;

    // Members
    foreach(func: CounterForeachFunc): void;

    ref(): CounterArena;

    register(counter: Counter): void;

    unref(): void;

    static get_default(): CounterArena;
}

export class CounterValue {
    static $gtype: GObject.GType<CounterValue>;

    constructor(copy: CounterValue);

    // Fields
    value: number;
    padding: number[];
}

export class FileTransferStat {
    static $gtype: GObject.GType<FileTransferStat>;

    constructor(
        properties?: Partial<{
            n_files_total?: number;
            n_files?: number;
            n_dirs_total?: number;
            n_dirs?: number;
            n_bytes_total?: number;
            n_bytes?: number;
        }>
    );

    constructor(copy: FileTransferStat);

    // Fields
    n_files_total: number;
    n_files: number;
    n_dirs_total: number;
    n_dirs: number;
    n_bytes_total: number;
    n_bytes: number;
}

export class FuzzyMutableIndex {
    static $gtype: GObject.GType<FuzzyMutableIndex>;

    constructor(case_sensitive: boolean);
    constructor(copy: FuzzyMutableIndex);

    // Constructors
    static ['new'](case_sensitive: boolean): FuzzyMutableIndex;

    static new_with_free_func(case_sensitive: boolean): FuzzyMutableIndex;

    // Members
    begin_bulk_insert(): void;

    contains(key: string): boolean;

    end_bulk_insert(): void;

    insert(key: string, value?: any | null): void;

    match(needle: string, max_matches: number): FuzzyMutableIndexMatch[];

    ref(): FuzzyMutableIndex;

    remove(key: string): void;

    set_free_func(): void;

    unref(): void;
}

export class FuzzyMutableIndexMatch {
    static $gtype: GObject.GType<FuzzyMutableIndexMatch>;

    constructor(
        properties?: Partial<{
            key?: string;
            value?: any;
            score?: number;
            id?: number;
        }>
    );

    constructor(copy: FuzzyMutableIndexMatch);

    // Fields
    key: string;
    value: any;
    score: number;
    id: number;
}

export class GraphModelIter {
    static $gtype: GObject.GType<GraphModelIter>;

    constructor(copy: GraphModelIter);

    // Fields
    data: any[];
}

export class Heap {
    static $gtype: GObject.GType<Heap>;

    constructor(element_size: number, compare_func: GLib.CompareFunc);
    constructor(
        properties?: Partial<{
            data?: string;
            len?: number;
        }>
    );

    constructor(copy: Heap);

    // Fields
    data: string;
    len: number;

    // Constructors
    static ['new'](element_size: number, compare_func: GLib.CompareFunc): Heap;

    // Members
    extract(result?: any | null): boolean;

    extract_index(index_: number, result?: any | null): boolean;

    insert_vals(data: any | null, len: number): void;

    ref(): Heap;

    unref(): void;
}

export class PatternSpec {
    static $gtype: GObject.GType<PatternSpec>;

    constructor(keywords: string);
    constructor(copy: PatternSpec);

    // Constructors
    static ['new'](keywords: string): PatternSpec;

    // Members
    get_text(): string;

    match(haystack: string): boolean;

    ref(): PatternSpec;

    unref(): void;
}

export class Ring {
    static $gtype: GObject.GType<Ring>;

    constructor(element_size: number, reserved_size: number);
    constructor(
        properties?: Partial<{
            data?: number;
            len?: number;
            pos?: number;
        }>
    );

    constructor(copy: Ring);

    // Fields
    data: number;
    len: number;
    pos: number;

    // Constructors
    static sized_new(element_size: number, reserved_size: number): Ring;

    // Members
    append_vals(data: any | null, len: number): number;

    foreach(func: GLib.Func): void;

    ref(): Ring;

    unref(): void;
}

export class ShortcutChord {
    static $gtype: GObject.GType<ShortcutChord>;

    constructor(event: Gdk.EventKey);
    constructor(copy: ShortcutChord);

    // Constructors
    static new_from_event(event: Gdk.EventKey): ShortcutChord;

    static new_from_string(accelerator: string): ShortcutChord;

    // Members
    append_event(event: Gdk.EventKey): boolean;

    copy(): ShortcutChord;

    free(): void;

    get_label(): string;

    get_length(): number;

    get_nth_key(nth: number, keyval: number, modifier: Gdk.ModifierType): void;

    has_modifier(): boolean;

    match(other: ShortcutChord): ShortcutMatch;

    to_string(): string;

    static equal(data1?: any | null, data2?: any | null): boolean;

    static hash(data?: any | null): number;
}

export class ShortcutChordTable {
    static $gtype: GObject.GType<ShortcutChordTable>;

    constructor(copy: ShortcutChordTable);

    // Members
    add(chord: ShortcutChord, data?: any | null): void;

    foreach(foreach_func: ShortcutChordTableForeach): void;

    free(): void;

    lookup(chord: ShortcutChord, data?: any | null): ShortcutMatch;

    lookup_data(data?: any | null): ShortcutChord;

    printf(): void;

    remove(chord: ShortcutChord): boolean;

    remove_data(data?: any | null): boolean;

    set_free_func(): void;

    size(): number;
}

export class ShortcutEntry {
    static $gtype: GObject.GType<ShortcutEntry>;

    constructor(copy: ShortcutEntry);

    // Fields
    command: string;
    phase: ShortcutPhase;
    default_accel: string;
    section: string;
    group: string;
    title: string;
    subtitle: string;
}

export class Trie {
    static $gtype: GObject.GType<Trie>;

    constructor();
    constructor(copy: Trie);

    // Constructors
    static ['new'](): Trie;

    // Members
    destroy(): void;

    insert(key: string, value?: any | null): void;

    lookup(key: string): any | null;

    ref(): Trie;

    remove(key: string): boolean;

    traverse(
        key: string,
        order: GLib.TraverseType,
        flags: GLib.TraverseFlags,
        max_depth: number,
        func: TrieTraverseFunc
    ): void;

    unref(): void;
}

export interface DockNamespace {
    $gtype: GObject.GType<Dock>;
    prototype: DockPrototype;
}

export type Dock = DockPrototype;

export interface DockPrototype extends Gtk.Container {
    // Properties
    manager: DockManager;
}

export const Dock: DockNamespace;

export interface DockItemNamespace {
    $gtype: GObject.GType<DockItem>;
    prototype: DockItemPrototype;
}

export type DockItem = DockItemPrototype;

export interface DockItemPrototype extends Gtk.Widget {
    // Members

    adopt(child: DockItem): boolean;

    close(): boolean;

    emit_presented(): void;

    get_can_close(): boolean;

    get_can_minimize(): boolean;

    get_child_visible(child: DockItem): boolean;

    get_child_visible(...args: never[]): never;

    get_icon_name(): string | null;

    get_manager(): DockManager | null;

    get_parent(): DockItem | null;

    get_title(): string | null;

    has_widgets(): boolean;

    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    needs_attention(): void;

    present(): void;

    present_child(child: DockItem): void;

    ref_gicon(): Gio.Icon | null;

    release(child: DockItem): void;

    set_child_visible(child: DockItem, child_visible: boolean): void;

    set_child_visible(...args: never[]): never;

    set_manager(manager?: DockManager | null): void;

    update_visibility(): void;

    vfunc_can_minimize(descendant: DockItem): boolean;

    vfunc_close(): boolean;

    vfunc_get_can_close(): boolean;

    vfunc_get_child_visible(child: DockItem): boolean;

    vfunc_get_icon_name(): string | null;

    vfunc_get_manager(): DockManager | null;

    vfunc_get_title(): string | null;

    vfunc_manager_set(old_manager: DockManager): void;

    vfunc_minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];

    vfunc_needs_attention(): void;

    vfunc_present_child(child: DockItem): void;

    vfunc_presented(): void;

    vfunc_ref_gicon(): Gio.Icon | null;

    vfunc_release(child: DockItem): void;

    vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

    vfunc_set_manager(manager?: DockManager | null): void;

    vfunc_update_visibility(): void;
}

export const DockItem: DockItemNamespace;

export interface GraphRendererNamespace {
    $gtype: GObject.GType<GraphRenderer>;
    prototype: GraphRendererPrototype;
}

export type GraphRenderer = GraphRendererPrototype;

export interface GraphRendererPrototype extends GObject.Object {
    // Members

    render(
        table: GraphModel,
        x_begin: number,
        x_end: number,
        y_begin: number,
        y_end: number,
        cr: cairo.Context,
        area: cairo.RectangleInt
    ): void;

    vfunc_render(
        table: GraphModel,
        x_begin: number,
        x_end: number,
        y_begin: number,
        y_end: number,
        cr: cairo.Context,
        area: cairo.RectangleInt
    ): void;
}

export const GraphRenderer: GraphRendererNamespace;

export interface PreferencesNamespace {
    $gtype: GObject.GType<Preferences>;
    prototype: PreferencesPrototype;
}

export type Preferences = PreferencesPrototype;

export interface PreferencesPrototype extends GObject.Object {
    // Members

    add_custom(
        page_name: string,
        group_name: string,
        widget: Gtk.Widget,
        keywords: string | null,
        priority: number
    ): number;

    add_file_chooser(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        action: Gtk.FileChooserAction,
        keywords: string,
        priority: number
    ): number;

    add_font_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        title: string,
        keywords: string,
        priority: number
    ): number;

    add_group(page_name: string, group_name: string, title: string, priority: number): void;

    add_list_group(
        page_name: string,
        group_name: string,
        title: string,
        mode: Gtk.SelectionMode,
        priority: number
    ): void;

    add_page(page_name: string, title: string, priority: number): void;

    add_radio(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    add_spin_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        keywords: string,
        priority: number
    ): number;

    add_switch(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    get_widget(widget_id: number): Gtk.Widget | null;

    remove_id(widget_id: number): boolean;

    set_page(page_name: string, map: GLib.HashTable<any, any>): void;

    vfunc_add_custom(
        page_name: string,
        group_name: string,
        widget: Gtk.Widget,
        keywords: string | null,
        priority: number
    ): number;

    vfunc_add_file_chooser(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        action: Gtk.FileChooserAction,
        keywords: string,
        priority: number
    ): number;

    vfunc_add_font_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        title: string,
        keywords: string,
        priority: number
    ): number;

    vfunc_add_group(page_name: string, group_name: string, title: string, priority: number): void;

    vfunc_add_list_group(
        page_name: string,
        group_name: string,
        title: string,
        mode: Gtk.SelectionMode,
        priority: number
    ): void;

    vfunc_add_page(page_name: string, title: string, priority: number): void;

    vfunc_add_radio(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    vfunc_add_spin_button(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string,
        title: string,
        subtitle: string,
        keywords: string,
        priority: number
    ): number;

    vfunc_add_switch(
        page_name: string,
        group_name: string,
        schema_id: string,
        key: string,
        path: string | null,
        variant_string: string | null,
        title: string | null,
        subtitle: string | null,
        keywords: string | null,
        priority: number
    ): number;

    vfunc_get_widget(widget_id: number): Gtk.Widget | null;

    vfunc_remove_id(widget_id: number): boolean;

    vfunc_set_page(page_name: string, map: GLib.HashTable<any, any>): void;
}

export const Preferences: PreferencesNamespace;
