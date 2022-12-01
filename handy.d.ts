/**
 * Handy 1
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as GdkPixbuf from './gdkpixbuf';
import * as GLib from './glib';
import * as Gdk from './gdk';
import * as Pango from './pango';

export function ease_out_cubic(t: number): number;

export function enum_value_row_name(value: EnumValueObject, user_data?: any | null): string;

export function get_enable_animations(widget: Gtk.Widget): boolean;

export function init(): void;

export type AvatarImageLoadFunc = (size: number) => GdkPixbuf.Pixbuf | null;
export type ComboRowGetEnumValueNameFunc = (value: EnumValueObject) => string;
export type ComboRowGetNameFunc<A = GObject.Object> = (item: A) => string;

export namespace CenteringPolicy {
    export const $gtype: GObject.GType<CenteringPolicy>;
}

export enum CenteringPolicy {
    LOOSE = 0,
    STRICT = 1,
}

export namespace DeckTransitionType {
    export const $gtype: GObject.GType<DeckTransitionType>;
}

export enum DeckTransitionType {
    OVER = 0,
    UNDER = 1,
    SLIDE = 2,
}

export namespace HeaderGroupChildType {
    export const $gtype: GObject.GType<HeaderGroupChildType>;
}

export enum HeaderGroupChildType {
    HEADER_BAR = 0,
    GTK_HEADER_BAR = 1,
    HEADER_GROUP = 2,
}

export namespace LeafletTransitionType {
    export const $gtype: GObject.GType<LeafletTransitionType>;
}

export enum LeafletTransitionType {
    OVER = 0,
    UNDER = 1,
    SLIDE = 2,
}

export namespace NavigationDirection {
    export const $gtype: GObject.GType<NavigationDirection>;
}

export enum NavigationDirection {
    BACK = 0,
    FORWARD = 1,
}

export namespace SqueezerTransitionType {
    export const $gtype: GObject.GType<SqueezerTransitionType>;
}

export enum SqueezerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
}

export namespace ViewSwitcherPolicy {
    export const $gtype: GObject.GType<ViewSwitcherPolicy>;
}

export enum ViewSwitcherPolicy {
    AUTO = 0,
    NARROW = 1,
    WIDE = 2,
}

export namespace ActionRow {
    export interface ConstructorProperties extends PreferencesRow.ConstructorProperties {
        [key: string]: any;

        activatable_widget: Gtk.Widget;
        activatableWidget: Gtk.Widget;
        icon_name: string;
        iconName: string;
        subtitle: string;
        use_underline: boolean;
        useUnderline: boolean;
    }
}

export class ActionRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ActionRow>;

    constructor(properties?: Partial<ActionRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ActionRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    activatable_widget: Gtk.Widget;
    activatableWidget: Gtk.Widget;
    icon_name: string;
    iconName: string;
    subtitle: string;
    use_underline: boolean;
    useUnderline: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activated', callback: (_source: this) => void): number;

    connect_after(signal: 'activated', callback: (_source: this) => void): number;

    emit(signal: 'activated'): void;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Constructors

    static ['new'](): ActionRow;

    // Members

    activate(): void;
    activate(...args: never[]): never;

    add_prefix(widget: Gtk.Widget): void;

    get_activatable_widget(): Gtk.Widget | null;

    get_icon_name(): string;

    get_subtitle(): string | null;

    get_use_underline(): boolean;

    set_activatable_widget(widget?: Gtk.Widget | null): void;

    set_icon_name(icon_name: string): void;

    set_subtitle(subtitle?: string | null): void;

    set_use_underline(use_underline: boolean): void;

    vfunc_activate(): void;

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

export namespace ApplicationWindow {
    export interface ConstructorProperties extends Gtk.ApplicationWindow.ConstructorProperties {
        [key: string]: any;
    }
}

export class ApplicationWindow
    extends Gtk.ApplicationWindow
    implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {
    static $gtype: GObject.GType<ApplicationWindow>;

    constructor(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ApplicationWindow;
    static ['new'](...args: never[]): never;

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

export namespace Avatar {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        icon_name: string;
        iconName: string;
        show_initials: boolean;
        showInitials: boolean;
        size: number;
        text: string;
    }
}

export class Avatar extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Avatar>;

    constructor(properties?: Partial<Avatar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Avatar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon_name: string;
    iconName: string;
    show_initials: boolean;
    showInitials: boolean;
    size: number;
    text: string;

    // Constructors

    static ['new'](size: number, text: string | null, show_initials: boolean): Avatar;
    static ['new'](...args: never[]): never;

    // Members

    get_icon_name(): string | null;

    get_show_initials(): boolean;

    get_size(): number;

    get_text(): string | null;

    set_icon_name(icon_name?: string | null): void;

    set_image_load_func(load_image?: AvatarImageLoadFunc | null, destroy?: GLib.DestroyNotify | null): void;

    set_show_initials(show_initials: boolean): void;

    set_size(size: number): void;

    set_text(text?: string | null): void;

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

export namespace Carousel {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        allow_mouse_drag: boolean;
        allowMouseDrag: boolean;
        animation_duration: number;
        animationDuration: number;
        interactive: boolean;
        n_pages: number;
        nPages: number;
        position: number;
        reveal_duration: number;
        revealDuration: number;
        spacing: number;
    }
}

export class Carousel extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Carousel>;

    constructor(properties?: Partial<Carousel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Carousel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_mouse_drag: boolean;
    allowMouseDrag: boolean;
    animation_duration: number;
    animationDuration: number;
    interactive: boolean;
    n_pages: number;
    nPages: number;
    position: number;
    reveal_duration: number;
    revealDuration: number;
    spacing: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'page-changed', callback: (_source: this, index: number) => void): number;

    connect_after(signal: 'page-changed', callback: (_source: this, index: number) => void): number;

    emit(signal: 'page-changed', index: number): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Carousel;

    // Members

    get_allow_mouse_drag(): boolean;

    get_animation_duration(): number;

    get_interactive(): boolean;

    get_n_pages(): number;

    get_position(): number;

    get_reveal_duration(): number;

    get_spacing(): number;

    insert(child: Gtk.Widget, position: number): void;

    prepend(child: Gtk.Widget): void;

    reorder(child: Gtk.Widget, position: number): void;

    scroll_to(widget: Gtk.Widget): void;

    scroll_to_full(widget: Gtk.Widget, duration: number): void;

    set_allow_mouse_drag(allow_mouse_drag: boolean): void;

    set_animation_duration(duration: number): void;

    set_interactive(interactive: boolean): void;

    set_reveal_duration(reveal_duration: number): void;

    set_spacing(spacing: number): void;

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

    emit_child_switched(index: number, duration: number): void;

    get_cancel_progress(): number;

    get_distance(): number;

    get_progress(): number;

    get_snap_points(): number[];

    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    get_swipe_tracker(): SwipeTracker;

    switch_child(index: number, duration: number): void;

    vfunc_get_cancel_progress(): number;

    vfunc_get_distance(): number;

    vfunc_get_progress(): number;

    vfunc_get_snap_points(): number[];

    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    vfunc_get_swipe_tracker(): SwipeTracker;

    vfunc_switch_child(index: number, duration: number): void;
}

export namespace CarouselIndicatorDots {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        carousel: Carousel;
    }
}

export class CarouselIndicatorDots
    extends Gtk.DrawingArea
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<CarouselIndicatorDots>;

    constructor(properties?: Partial<CarouselIndicatorDots.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CarouselIndicatorDots.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carousel: Carousel;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): CarouselIndicatorDots;

    // Members

    get_carousel(): Carousel | null;

    set_carousel(carousel?: Carousel | null): void;

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

export namespace CarouselIndicatorLines {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        carousel: Carousel;
    }
}

export class CarouselIndicatorLines
    extends Gtk.DrawingArea
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<CarouselIndicatorLines>;

    constructor(properties?: Partial<CarouselIndicatorLines.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CarouselIndicatorLines.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carousel: Carousel;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): CarouselIndicatorLines;

    // Members

    get_carousel(): Carousel | null;

    set_carousel(carousel?: Carousel | null): void;

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

export namespace Clamp {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        maximum_size: number;
        maximumSize: number;
        tightening_threshold: number;
        tighteningThreshold: number;
    }
}

export class Clamp extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Clamp>;

    constructor(properties?: Partial<Clamp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Clamp.ConstructorProperties>, ...args: any[]): void;

    // Properties
    maximum_size: number;
    maximumSize: number;
    tightening_threshold: number;
    tighteningThreshold: number;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Clamp;

    // Members

    get_maximum_size(): number;

    get_tightening_threshold(): number;

    set_maximum_size(maximum_size: number): void;

    set_tightening_threshold(tightening_threshold: number): void;

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

export namespace ComboRow {
    export interface ConstructorProperties extends ActionRow.ConstructorProperties {
        [key: string]: any;

        selected_index: number;
        selectedIndex: number;
        use_subtitle: boolean;
        useSubtitle: boolean;
    }
}

export class ComboRow extends ActionRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ComboRow>;

    constructor(properties?: Partial<ComboRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ComboRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    selected_index: number;
    selectedIndex: number;
    use_subtitle: boolean;
    useSubtitle: boolean;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Constructors

    static ['new'](): ComboRow;

    // Members

    bind_model(
        model?: Gio.ListModel | null,
        create_list_widget_func?: Gtk.ListBoxCreateWidgetFunc | null,
        create_current_widget_func?: Gtk.ListBoxCreateWidgetFunc | null
    ): void;

    bind_name_model(model?: Gio.ListModel | null, get_name_func?: ComboRowGetNameFunc | null): void;

    get_model(): Gio.ListModel | null;

    get_selected_index(): number;

    get_use_subtitle(): boolean;

    set_for_enum(enum_type: GObject.GType, get_name_func?: ComboRowGetEnumValueNameFunc | null): void;

    set_get_name_func(get_name_func?: ComboRowGetNameFunc | null): void;

    set_selected_index(selected_index: number): void;

    set_use_subtitle(use_subtitle: boolean): void;

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

export namespace Deck {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        can_swipe_back: boolean;
        canSwipeBack: boolean;
        can_swipe_forward: boolean;
        canSwipeForward: boolean;
        hhomogeneous: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_running: boolean;
        transitionRunning: boolean;
        transition_type: DeckTransitionType;
        transitionType: DeckTransitionType;
        vhomogeneous: boolean;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        visible_child_name: string;
        visibleChildName: string;
    }
}

export class Deck extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Deck>;

    constructor(properties?: Partial<Deck.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Deck.ConstructorProperties>, ...args: any[]): void;

    // Properties
    can_swipe_back: boolean;
    canSwipeBack: boolean;
    can_swipe_forward: boolean;
    canSwipeForward: boolean;
    hhomogeneous: boolean;
    interpolate_size: boolean;
    interpolateSize: boolean;
    transition_duration: number;
    transitionDuration: number;
    transition_running: boolean;
    transitionRunning: boolean;
    transition_type: DeckTransitionType;
    transitionType: DeckTransitionType;
    vhomogeneous: boolean;
    visible_child: Gtk.Widget;
    visibleChild: Gtk.Widget;
    visible_child_name: string;
    visibleChildName: string;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Deck;

    // Members

    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null;

    get_can_swipe_back(): boolean;

    get_can_swipe_forward(): boolean;

    get_child_by_name(name: string): Gtk.Widget | null;

    get_homogeneous(orientation: Gtk.Orientation): boolean;

    get_interpolate_size(): boolean;

    get_transition_duration(): number;

    get_transition_running(): boolean;

    get_transition_type(): DeckTransitionType;

    get_visible_child(): Gtk.Widget;

    get_visible_child_name(): string;

    navigate(direction: NavigationDirection): boolean;

    set_can_swipe_back(can_swipe_back: boolean): void;

    set_can_swipe_forward(can_swipe_forward: boolean): void;

    set_homogeneous(orientation: Gtk.Orientation, homogeneous: boolean): void;

    set_interpolate_size(interpolate_size: boolean): void;

    set_transition_duration(duration: number): void;

    set_transition_type(transition: DeckTransitionType): void;

    set_visible_child(visible_child: Gtk.Widget): void;

    set_visible_child_name(name: string): void;

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

    emit_child_switched(index: number, duration: number): void;

    get_cancel_progress(): number;

    get_distance(): number;

    get_progress(): number;

    get_snap_points(): number[];

    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    get_swipe_tracker(): SwipeTracker;

    switch_child(index: number, duration: number): void;

    vfunc_get_cancel_progress(): number;

    vfunc_get_distance(): number;

    vfunc_get_progress(): number;

    vfunc_get_snap_points(): number[];

    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    vfunc_get_swipe_tracker(): SwipeTracker;

    vfunc_switch_child(index: number, duration: number): void;
}

export namespace EnumValueObject {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class EnumValueObject extends GObject.Object {
    static $gtype: GObject.GType<EnumValueObject>;

    constructor(properties?: Partial<EnumValueObject.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EnumValueObject.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](enum_value: GObject.EnumValue): EnumValueObject;

    // Members

    get_name(): string;

    get_nick(): string;

    get_value(): number;
}

export namespace ExpanderRow {
    export interface ConstructorProperties extends PreferencesRow.ConstructorProperties {
        [key: string]: any;

        enable_expansion: boolean;
        enableExpansion: boolean;
        expanded: boolean;
        icon_name: string;
        iconName: string;
        show_enable_switch: boolean;
        showEnableSwitch: boolean;
        subtitle: string;
        use_underline: boolean;
        useUnderline: boolean;
    }
}

export class ExpanderRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ExpanderRow>;

    constructor(properties?: Partial<ExpanderRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExpanderRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enable_expansion: boolean;
    enableExpansion: boolean;
    expanded: boolean;
    icon_name: string;
    iconName: string;
    show_enable_switch: boolean;
    showEnableSwitch: boolean;
    subtitle: string;
    use_underline: boolean;
    useUnderline: boolean;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Constructors

    static ['new'](): ExpanderRow;

    // Members

    add_action(widget: Gtk.Widget): void;

    add_prefix(widget: Gtk.Widget): void;

    get_enable_expansion(): boolean;

    get_expanded(): boolean;

    get_icon_name(): string;

    get_show_enable_switch(): boolean;

    get_subtitle(): string | null;

    get_use_underline(): boolean;

    set_enable_expansion(enable_expansion: boolean): void;

    set_expanded(expanded: boolean): void;

    set_icon_name(icon_name: string): void;

    set_show_enable_switch(show_enable_switch: boolean): void;

    set_subtitle(subtitle?: string | null): void;

    set_use_underline(use_underline: boolean): void;

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

export namespace HeaderBar {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        centering_policy: CenteringPolicy;
        centeringPolicy: CenteringPolicy;
        custom_title: Gtk.Widget;
        customTitle: Gtk.Widget;
        decoration_layout: string;
        decorationLayout: string;
        decoration_layout_set: boolean;
        decorationLayoutSet: boolean;
        has_subtitle: boolean;
        hasSubtitle: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        show_close_button: boolean;
        showCloseButton: boolean;
        spacing: number;
        subtitle: string;
        title: string;
        transition_duration: number;
        transitionDuration: number;
        transition_running: boolean;
        transitionRunning: boolean;
    }
}

export class HeaderBar extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<HeaderBar>;

    constructor(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    centering_policy: CenteringPolicy;
    centeringPolicy: CenteringPolicy;
    custom_title: Gtk.Widget;
    customTitle: Gtk.Widget;
    decoration_layout: string;
    decorationLayout: string;
    decoration_layout_set: boolean;
    decorationLayoutSet: boolean;
    has_subtitle: boolean;
    hasSubtitle: boolean;
    interpolate_size: boolean;
    interpolateSize: boolean;
    show_close_button: boolean;
    showCloseButton: boolean;
    spacing: number;
    subtitle: string;
    title: string;
    transition_duration: number;
    transitionDuration: number;
    transition_running: boolean;
    transitionRunning: boolean;

    // Constructors

    static ['new'](): HeaderBar;

    // Members

    get_centering_policy(): CenteringPolicy;

    get_custom_title(): Gtk.Widget | null;

    get_decoration_layout(): string;

    get_has_subtitle(): boolean;

    get_interpolate_size(): boolean;

    get_show_close_button(): boolean;

    get_subtitle(): string | null;

    get_title(): string | null;

    get_transition_duration(): number;

    get_transition_running(): boolean;

    pack_end(child: Gtk.Widget): void;

    pack_start(child: Gtk.Widget): void;

    set_centering_policy(centering_policy: CenteringPolicy): void;

    set_custom_title(title_widget?: Gtk.Widget | null): void;

    set_decoration_layout(layout?: string | null): void;

    set_has_subtitle(setting: boolean): void;

    set_interpolate_size(interpolate_size: boolean): void;

    set_show_close_button(setting: boolean): void;

    set_subtitle(subtitle?: string | null): void;

    set_title(title?: string | null): void;

    set_transition_duration(duration: number): void;

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

export namespace HeaderGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        decorate_all: boolean;
        decorateAll: boolean;
    }
}

export class HeaderGroup extends GObject.Object implements Gtk.Buildable {
    static $gtype: GObject.GType<HeaderGroup>;

    constructor(properties?: Partial<HeaderGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HeaderGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    decorate_all: boolean;
    decorateAll: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'update-decoration-layouts', callback: (_source: this) => void): number;

    connect_after(signal: 'update-decoration-layouts', callback: (_source: this) => void): number;

    emit(signal: 'update-decoration-layouts'): void;

    // Constructors

    static ['new'](): HeaderGroup;

    // Members

    add_gtk_header_bar(header_bar: Gtk.HeaderBar): void;

    add_header_bar(header_bar: HeaderBar): void;

    add_header_group(header_group: HeaderGroup): void;

    get_children(): HeaderGroupChild[];

    get_decorate_all(): boolean;

    remove_child(child: HeaderGroupChild): void;

    remove_gtk_header_bar(header_bar: Gtk.HeaderBar): void;

    remove_header_bar(header_bar: HeaderBar): void;

    remove_header_group(header_group: HeaderGroup): void;

    set_decorate_all(decorate_all: boolean): void;

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

export namespace HeaderGroupChild {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HeaderGroupChild extends GObject.Object {
    static $gtype: GObject.GType<HeaderGroupChild>;

    constructor(properties?: Partial<HeaderGroupChild.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HeaderGroupChild.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_child_type(): HeaderGroupChildType;

    get_gtk_header_bar(): Gtk.HeaderBar;

    get_header_bar(): HeaderBar;

    get_header_group(): HeaderGroup;
}

export namespace Keypad {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        column_spacing: number;
        columnSpacing: number;
        end_action: Gtk.Widget;
        endAction: Gtk.Widget;
        entry: Gtk.Entry;
        letters_visible: boolean;
        lettersVisible: boolean;
        row_spacing: number;
        rowSpacing: number;
        start_action: Gtk.Widget;
        startAction: Gtk.Widget;
        symbols_visible: boolean;
        symbolsVisible: boolean;
    }
}

export class Keypad extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Keypad>;

    constructor(properties?: Partial<Keypad.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Keypad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column_spacing: number;
    columnSpacing: number;
    end_action: Gtk.Widget;
    endAction: Gtk.Widget;
    entry: Gtk.Entry;
    letters_visible: boolean;
    lettersVisible: boolean;
    row_spacing: number;
    rowSpacing: number;
    start_action: Gtk.Widget;
    startAction: Gtk.Widget;
    symbols_visible: boolean;
    symbolsVisible: boolean;

    // Constructors

    static ['new'](symbols_visible: boolean, letters_visible: boolean): Keypad;

    // Members

    get_column_spacing(): number;

    get_end_action(): Gtk.Widget | null;

    get_entry(): Gtk.Entry;

    get_letters_visible(): boolean;

    get_row_spacing(): number;

    get_start_action(): Gtk.Widget | null;

    get_symbols_visible(): boolean;

    set_column_spacing(spacing: number): void;

    set_end_action(end_action?: Gtk.Widget | null): void;

    set_entry(entry?: Gtk.Entry | null): void;

    set_letters_visible(letters_visible: boolean): void;

    set_row_spacing(spacing: number): void;

    set_start_action(start_action?: Gtk.Widget | null): void;

    set_symbols_visible(symbols_visible: boolean): void;

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

export namespace Leaflet {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        can_swipe_back: boolean;
        canSwipeBack: boolean;
        can_swipe_forward: boolean;
        canSwipeForward: boolean;
        child_transition_duration: number;
        childTransitionDuration: number;
        child_transition_running: boolean;
        childTransitionRunning: boolean;
        folded: boolean;
        hhomogeneous_folded: boolean;
        hhomogeneousFolded: boolean;
        hhomogeneous_unfolded: boolean;
        hhomogeneousUnfolded: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        mode_transition_duration: number;
        modeTransitionDuration: number;
        transition_type: LeafletTransitionType;
        transitionType: LeafletTransitionType;
        vhomogeneous_folded: boolean;
        vhomogeneousFolded: boolean;
        vhomogeneous_unfolded: boolean;
        vhomogeneousUnfolded: boolean;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        visible_child_name: string;
        visibleChildName: string;
    }
}

export class Leaflet extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Leaflet>;

    constructor(properties?: Partial<Leaflet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Leaflet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    can_swipe_back: boolean;
    canSwipeBack: boolean;
    can_swipe_forward: boolean;
    canSwipeForward: boolean;
    child_transition_duration: number;
    childTransitionDuration: number;
    child_transition_running: boolean;
    childTransitionRunning: boolean;
    folded: boolean;
    hhomogeneous_folded: boolean;
    hhomogeneousFolded: boolean;
    hhomogeneous_unfolded: boolean;
    hhomogeneousUnfolded: boolean;
    interpolate_size: boolean;
    interpolateSize: boolean;
    mode_transition_duration: number;
    modeTransitionDuration: number;
    transition_type: LeafletTransitionType;
    transitionType: LeafletTransitionType;
    vhomogeneous_folded: boolean;
    vhomogeneousFolded: boolean;
    vhomogeneous_unfolded: boolean;
    vhomogeneousUnfolded: boolean;
    visible_child: Gtk.Widget;
    visibleChild: Gtk.Widget;
    visible_child_name: string;
    visibleChildName: string;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Leaflet;

    // Members

    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null;

    get_can_swipe_back(): boolean;

    get_can_swipe_forward(): boolean;

    get_child_by_name(name: string): Gtk.Widget | null;

    get_child_transition_duration(): number;

    get_child_transition_running(): boolean;

    get_folded(): boolean;

    get_homogeneous(folded: boolean, orientation: Gtk.Orientation): boolean;

    get_interpolate_size(): boolean;

    get_mode_transition_duration(): number;

    get_transition_type(): LeafletTransitionType;

    get_visible_child(): Gtk.Widget;

    get_visible_child_name(): string;

    navigate(direction: NavigationDirection): boolean;

    set_can_swipe_back(can_swipe_back: boolean): void;

    set_can_swipe_forward(can_swipe_forward: boolean): void;

    set_child_transition_duration(duration: number): void;

    set_homogeneous(folded: boolean, orientation: Gtk.Orientation, homogeneous: boolean): void;

    set_interpolate_size(interpolate_size: boolean): void;

    set_mode_transition_duration(duration: number): void;

    set_transition_type(transition: LeafletTransitionType): void;

    set_visible_child(visible_child: Gtk.Widget): void;

    set_visible_child_name(name: string): void;

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

    emit_child_switched(index: number, duration: number): void;

    get_cancel_progress(): number;

    get_distance(): number;

    get_progress(): number;

    get_snap_points(): number[];

    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    get_swipe_tracker(): SwipeTracker;

    switch_child(index: number, duration: number): void;

    vfunc_get_cancel_progress(): number;

    vfunc_get_distance(): number;

    vfunc_get_progress(): number;

    vfunc_get_snap_points(): number[];

    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    vfunc_get_swipe_tracker(): SwipeTracker;

    vfunc_switch_child(index: number, duration: number): void;
}

export namespace PreferencesGroup {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        description: string;
        title: string;
    }
}

export class PreferencesGroup extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesGroup>;

    constructor(properties?: Partial<PreferencesGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    title: string;

    // Constructors

    static ['new'](): PreferencesGroup;

    // Members

    get_description(): string;

    get_title(): string;

    set_description(description: string): void;

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

export namespace PreferencesPage {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        icon_name: string;
        iconName: string;
        title: string;
    }
}

export class PreferencesPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesPage>;

    constructor(properties?: Partial<PreferencesPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon_name: string;
    iconName: string;
    title: string;

    // Constructors

    static ['new'](): PreferencesPage;

    // Members

    get_icon_name(): string | null;

    get_title(): string | null;

    set_icon_name(icon_name?: string | null): void;

    set_title(title?: string | null): void;

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

export namespace PreferencesRow {
    export interface ConstructorProperties extends Gtk.ListBoxRow.ConstructorProperties {
        [key: string]: any;

        title: string;
        use_underline: boolean;
        useUnderline: boolean;
    }
}

export class PreferencesRow extends Gtk.ListBoxRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesRow>;

    constructor(properties?: Partial<PreferencesRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;
    use_underline: boolean;
    useUnderline: boolean;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;

    // Constructors

    static ['new'](): PreferencesRow;

    // Members

    get_title(): string | null;

    get_use_underline(): boolean;

    set_title(title?: string | null): void;

    set_use_underline(use_underline: boolean): void;

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

export namespace PreferencesWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;

        can_swipe_back: boolean;
        canSwipeBack: boolean;
        search_enabled: boolean;
        searchEnabled: boolean;
    }
}

export class PreferencesWindow extends Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesWindow>;

    constructor(properties?: Partial<PreferencesWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PreferencesWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    can_swipe_back: boolean;
    canSwipeBack: boolean;
    search_enabled: boolean;
    searchEnabled: boolean;

    // Constructors

    static ['new'](): PreferencesWindow;
    static ['new'](...args: never[]): never;

    // Members

    close_subpage(): void;

    get_can_swipe_back(): boolean;

    get_search_enabled(): boolean;

    present_subpage(subpage: Gtk.Widget): void;

    set_can_swipe_back(can_swipe_back: boolean): void;

    set_search_enabled(search_enabled: boolean): void;

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

    // Constructors

    static ['new'](): SearchBar;

    // Members

    connect_entry(entry: Gtk.Entry): void;

    get_search_mode(): boolean;

    get_show_close_button(): boolean;

    handle_event(event: Gdk.Event): boolean;

    set_search_mode(search_mode: boolean): void;

    set_show_close_button(visible: boolean): void;

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

export namespace Squeezer {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        homogeneous: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_running: boolean;
        transitionRunning: boolean;
        transition_type: SqueezerTransitionType;
        transitionType: SqueezerTransitionType;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        xalign: number;
        yalign: number;
    }
}

export class Squeezer extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Squeezer>;

    constructor(properties?: Partial<Squeezer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Squeezer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    homogeneous: boolean;
    interpolate_size: boolean;
    interpolateSize: boolean;
    transition_duration: number;
    transitionDuration: number;
    transition_running: boolean;
    transitionRunning: boolean;
    transition_type: SqueezerTransitionType;
    transitionType: SqueezerTransitionType;
    visible_child: Gtk.Widget;
    visibleChild: Gtk.Widget;
    xalign: number;
    yalign: number;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Squeezer;

    // Members

    get_child_enabled(child: Gtk.Widget): boolean;

    get_homogeneous(): boolean;

    get_interpolate_size(): boolean;

    get_transition_duration(): number;

    get_transition_running(): boolean;

    get_transition_type(): SqueezerTransitionType;

    get_visible_child(): Gtk.Widget | null;

    get_xalign(): number;

    get_yalign(): number;

    set_child_enabled(child: Gtk.Widget, enabled: boolean): void;

    set_homogeneous(homogeneous: boolean): void;

    set_interpolate_size(interpolate_size: boolean): void;

    set_transition_duration(duration: number): void;

    set_transition_type(transition: SqueezerTransitionType): void;

    set_xalign(xalign: number): void;

    set_yalign(yalign: number): void;

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

export namespace SwipeGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SwipeGroup extends GObject.Object implements Gtk.Buildable {
    static $gtype: GObject.GType<SwipeGroup>;

    constructor(properties?: Partial<SwipeGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SwipeGroup.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): SwipeGroup;

    // Members

    add_swipeable(swipeable: Swipeable): void;

    get_swipeables(): Swipeable[];

    remove_swipeable(swipeable: Swipeable): void;

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

export namespace SwipeTracker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        allow_mouse_drag: boolean;
        allowMouseDrag: boolean;
        enabled: boolean;
        reversed: boolean;
        swipeable: Swipeable;
    }
}

export class SwipeTracker extends GObject.Object implements Gtk.Orientable {
    static $gtype: GObject.GType<SwipeTracker>;

    constructor(properties?: Partial<SwipeTracker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SwipeTracker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_mouse_drag: boolean;
    allowMouseDrag: boolean;
    enabled: boolean;
    reversed: boolean;
    swipeable: Swipeable;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'begin-swipe',
        callback: (_source: this, direction: NavigationDirection, direct: boolean) => void
    ): number;

    connect_after(
        signal: 'begin-swipe',
        callback: (_source: this, direction: NavigationDirection, direct: boolean) => void
    ): number;

    emit(signal: 'begin-swipe', direction: NavigationDirection, direct: boolean): void;

    connect(signal: 'end-swipe', callback: (_source: this, duration: number, to: number) => void): number;

    connect_after(signal: 'end-swipe', callback: (_source: this, duration: number, to: number) => void): number;

    emit(signal: 'end-swipe', duration: number, to: number): void;

    connect(signal: 'update-swipe', callback: (_source: this, progress: number) => void): number;

    connect_after(signal: 'update-swipe', callback: (_source: this, progress: number) => void): number;

    emit(signal: 'update-swipe', progress: number): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](swipeable: Swipeable): SwipeTracker;

    // Members

    get_allow_mouse_drag(): boolean;

    get_enabled(): boolean;

    get_reversed(): boolean;

    get_swipeable(): Swipeable;

    set_allow_mouse_drag(allow_mouse_drag: boolean): void;

    set_enabled(enabled: boolean): void;

    set_reversed(reversed: boolean): void;

    shift_position(delta: number): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace TitleBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        selection_mode: boolean;
        selectionMode: boolean;
    }
}

export class TitleBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<TitleBar>;

    constructor(properties?: Partial<TitleBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TitleBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    selection_mode: boolean;
    selectionMode: boolean;

    // Constructors

    static ['new'](): TitleBar;

    // Members

    get_selection_mode(): boolean;

    set_selection_mode(selection_mode: boolean): void;

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

export namespace ValueObject {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        value: GObject.Value;
    }
}

export class ValueObject extends GObject.Object {
    static $gtype: GObject.GType<ValueObject>;

    constructor(properties?: Partial<ValueObject.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ValueObject.ConstructorProperties>, ...args: any[]): void;

    // Properties
    value: GObject.Value;

    // Constructors

    static ['new'](value: any): ValueObject;

    // Members

    copy_value(dest: any): void;

    dup_string(): string;

    get_string(): string;

    get_value(): unknown;
}

export namespace ViewSwitcher {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        narrow_ellipsize: Pango.EllipsizeMode;
        narrowEllipsize: Pango.EllipsizeMode;
        policy: ViewSwitcherPolicy;
        stack: Gtk.Stack;
    }
}

export class ViewSwitcher extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewSwitcher>;

    constructor(properties?: Partial<ViewSwitcher.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ViewSwitcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    narrow_ellipsize: Pango.EllipsizeMode;
    narrowEllipsize: Pango.EllipsizeMode;
    policy: ViewSwitcherPolicy;
    stack: Gtk.Stack;

    // Constructors

    static ['new'](): ViewSwitcher;

    // Members

    get_narrow_ellipsize(): Pango.EllipsizeMode;

    get_policy(): ViewSwitcherPolicy;

    get_stack(): Gtk.Stack | null;

    set_narrow_ellipsize(mode: Pango.EllipsizeMode): void;

    set_policy(policy: ViewSwitcherPolicy): void;

    set_stack(stack?: Gtk.Stack | null): void;

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

export namespace ViewSwitcherBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        policy: ViewSwitcherPolicy;
        reveal: boolean;
        stack: Gtk.Stack;
    }
}

export class ViewSwitcherBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewSwitcherBar>;

    constructor(properties?: Partial<ViewSwitcherBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ViewSwitcherBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    policy: ViewSwitcherPolicy;
    reveal: boolean;
    stack: Gtk.Stack;

    // Constructors

    static ['new'](): ViewSwitcherBar;

    // Members

    get_policy(): ViewSwitcherPolicy;

    get_reveal(): boolean;

    get_stack(): Gtk.Stack | null;

    set_policy(policy: ViewSwitcherPolicy): void;

    set_reveal(reveal: boolean): void;

    set_stack(stack?: Gtk.Stack | null): void;

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

export namespace ViewSwitcherTitle {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        policy: ViewSwitcherPolicy;
        stack: Gtk.Stack;
        subtitle: string;
        title: string;
        title_visible: boolean;
        titleVisible: boolean;
        view_switcher_enabled: boolean;
        viewSwitcherEnabled: boolean;
    }
}

export class ViewSwitcherTitle extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewSwitcherTitle>;

    constructor(properties?: Partial<ViewSwitcherTitle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ViewSwitcherTitle.ConstructorProperties>, ...args: any[]): void;

    // Properties
    policy: ViewSwitcherPolicy;
    stack: Gtk.Stack;
    subtitle: string;
    title: string;
    title_visible: boolean;
    titleVisible: boolean;
    view_switcher_enabled: boolean;
    viewSwitcherEnabled: boolean;

    // Constructors

    static ['new'](): ViewSwitcherTitle;

    // Members

    get_policy(): ViewSwitcherPolicy;

    get_stack(): Gtk.Stack | null;

    get_subtitle(): string | null;

    get_title(): string | null;

    get_title_visible(): boolean;

    get_view_switcher_enabled(): boolean;

    set_policy(policy: ViewSwitcherPolicy): void;

    set_stack(stack?: Gtk.Stack | null): void;

    set_subtitle(subtitle?: string | null): void;

    set_title(title?: string | null): void;

    set_view_switcher_enabled(enabled: boolean): void;

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

export namespace Window {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}

export class Window extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Window>;

    constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Window;
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

export namespace WindowHandle {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;
    }
}

export class WindowHandle extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WindowHandle>;

    constructor(properties?: Partial<WindowHandle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WindowHandle.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): WindowHandle;

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

export interface SwipeableNamespace {
    $gtype: GObject.GType<Swipeable>;
    prototype: SwipeablePrototype;
}

export type Swipeable = SwipeablePrototype;

export interface SwipeablePrototype extends Gtk.Widget {
    // Members

    emit_child_switched(index: number, duration: number): void;

    get_cancel_progress(): number;

    get_distance(): number;

    get_progress(): number;

    get_snap_points(): number[];

    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    get_swipe_tracker(): SwipeTracker;

    switch_child(index: number, duration: number): void;

    vfunc_get_cancel_progress(): number;

    vfunc_get_distance(): number;

    vfunc_get_progress(): number;

    vfunc_get_snap_points(): number[];

    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

    vfunc_get_swipe_tracker(): SwipeTracker;

    vfunc_switch_child(index: number, duration: number): void;
}

export const Swipeable: SwipeableNamespace;
