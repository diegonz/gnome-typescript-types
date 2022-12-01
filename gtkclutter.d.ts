/**
 * GtkClutter 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Clutter from './clutter';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GLib from './glib';
import * as GObject from './gobject';
import * as Json from './json';
import * as GdkPixbuf from './gdkpixbuf';

export function init(argv?: string[] | null): [Clutter.InitError, string[] | null];

export function init_with_args(
    argv?: string[] | null,
    parameter_string?: string | null,
    entries?: GLib.OptionEntry[] | null,
    translation_domain?: string | null
): [Clutter.InitError, string[] | null];

export namespace TextureError {
    export const $gtype: GObject.GType<TextureError>;
}

export enum TextureError {
    TEXTURE_ERROR_INVALID_STOCK_ID = 0,
}

export namespace Actor {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        contents: Gtk.Widget;
    }
}

export class Actor
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Actor>;

    constructor(properties?: Partial<Actor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Actor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    contents: Gtk.Widget;

    // Constructors

    static ['new'](): Actor;

    static new_with_contents(contents: Gtk.Widget): Actor;

    // Members

    get_contents(): Gtk.Widget;

    get_widget(): Gtk.Widget;

    // Implemented Members

    animate_property(
        animation: Clutter.Animation,
        property_name: string,
        initial_value: any,
        final_value: any,
        progress: number,
        value: any
    ): boolean;

    find_property(property_name: string): GObject.ParamSpec;

    get_initial_state(property_name: string, value: any): void;

    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];

    set_final_state(property_name: string, value: any): void;

    vfunc_animate_property(
        animation: Clutter.Animation,
        property_name: string,
        initial_value: any,
        final_value: any,
        progress: number,
        value: any
    ): boolean;

    vfunc_find_property(property_name: string): GObject.ParamSpec;

    vfunc_get_initial_state(property_name: string, value: any): void;

    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];

    vfunc_set_final_state(property_name: string, value: any): void;

    add_actor(actor: Clutter.Actor): void;

    child_get_property(child: Clutter.Actor, property: string, value: any): void;

    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;

    child_set_property(child: Clutter.Actor, property: string, value: any): void;

    create_child_meta(actor: Clutter.Actor): void;

    destroy_child_meta(actor: Clutter.Actor): void;

    find_child_by_name(child_name: string): Clutter.Actor;

    foreach(callback: Clutter.Callback): void;

    foreach_with_internals(callback: Clutter.Callback): void;

    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;

    get_children(): Clutter.Actor[];

    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    remove_actor(actor: Clutter.Actor): void;

    sort_depth_order(): void;

    vfunc_actor_added(actor: Clutter.Actor): void;

    vfunc_actor_removed(actor: Clutter.Actor): void;

    vfunc_add(actor: Clutter.Actor): void;

    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;

    vfunc_create_child_meta(actor: Clutter.Actor): void;

    vfunc_destroy_child_meta(actor: Clutter.Actor): void;

    vfunc_foreach(callback: Clutter.Callback): void;

    vfunc_foreach_with_internals(callback: Clutter.Callback): void;

    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;

    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    vfunc_remove(actor: Clutter.Actor): void;

    vfunc_sort_depth_order(): void;

    get_id(): string;

    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean;

    set_custom_property(script: Clutter.Script, name: string, value: any): void;

    set_id(id_: string): void;

    vfunc_get_id(): string;

    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean;

    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void;

    vfunc_set_id(id_: string): void;
}

export namespace Embed {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        use_layout_size: boolean;
        useLayoutSize: boolean;
    }
}

export class Embed extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Embed>;

    constructor(properties?: Partial<Embed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Embed.ConstructorProperties>, ...args: any[]): void;

    // Properties
    use_layout_size: boolean;
    useLayoutSize: boolean;

    // Constructors

    static ['new'](): Embed;

    // Members

    get_stage(): Clutter.Actor;

    get_use_layout_size(): boolean;

    set_use_layout_size(use_layout_size: boolean): void;

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

export namespace Texture {
    export interface ConstructorProperties extends Clutter.Texture.ConstructorProperties {
        [key: string]: any;
    }
}

export class Texture
    extends Clutter.Texture
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Texture>;

    constructor(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Texture;

    // Members

    set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize): boolean;

    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;

    set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize): boolean;

    static error_quark(): GLib.Quark;

    // Implemented Members

    animate_property(
        animation: Clutter.Animation,
        property_name: string,
        initial_value: any,
        final_value: any,
        progress: number,
        value: any
    ): boolean;

    find_property(property_name: string): GObject.ParamSpec;

    get_initial_state(property_name: string, value: any): void;

    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];

    set_final_state(property_name: string, value: any): void;

    vfunc_animate_property(
        animation: Clutter.Animation,
        property_name: string,
        initial_value: any,
        final_value: any,
        progress: number,
        value: any
    ): boolean;

    vfunc_find_property(property_name: string): GObject.ParamSpec;

    vfunc_get_initial_state(property_name: string, value: any): void;

    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];

    vfunc_set_final_state(property_name: string, value: any): void;

    add_actor(actor: Clutter.Actor): void;

    child_get_property(child: Clutter.Actor, property: string, value: any): void;

    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;

    child_set_property(child: Clutter.Actor, property: string, value: any): void;

    create_child_meta(actor: Clutter.Actor): void;

    destroy_child_meta(actor: Clutter.Actor): void;

    find_child_by_name(child_name: string): Clutter.Actor;

    foreach(callback: Clutter.Callback): void;

    foreach_with_internals(callback: Clutter.Callback): void;

    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;

    get_children(): Clutter.Actor[];

    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    remove_actor(actor: Clutter.Actor): void;

    sort_depth_order(): void;

    vfunc_actor_added(actor: Clutter.Actor): void;

    vfunc_actor_removed(actor: Clutter.Actor): void;

    vfunc_add(actor: Clutter.Actor): void;

    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;

    vfunc_create_child_meta(actor: Clutter.Actor): void;

    vfunc_destroy_child_meta(actor: Clutter.Actor): void;

    vfunc_foreach(callback: Clutter.Callback): void;

    vfunc_foreach_with_internals(callback: Clutter.Callback): void;

    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;

    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;

    vfunc_remove(actor: Clutter.Actor): void;

    vfunc_sort_depth_order(): void;

    get_id(): string;

    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean;

    set_custom_property(script: Clutter.Script, name: string, value: any): void;

    set_id(id_: string): void;

    vfunc_get_id(): string;

    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean;

    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void;

    vfunc_set_id(id_: string): void;
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

    // Members

    get_stage(): Clutter.Actor;

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

export class ActorPrivate {
    static $gtype: GObject.GType<ActorPrivate>;

    constructor(copy: ActorPrivate);
}

export class EmbedPrivate {
    static $gtype: GObject.GType<EmbedPrivate>;

    constructor(copy: EmbedPrivate);
}

export class WindowPrivate {
    static $gtype: GObject.GType<WindowPrivate>;

    constructor(copy: WindowPrivate);
}
