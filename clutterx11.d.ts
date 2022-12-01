/**
 * ClutterX11 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Clutter from './clutter';
import * as xlib from './xlib';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as Json from './json';

export function disable_event_retrieval(): void;

export function enable_xinput(): void;

export function event_get_key_group(event: Clutter.Event): number;

export function event_sequence_get_touch_detail(sequence: Clutter.EventSequence): number;

export function get_default_display(): xlib.Display;

export function get_default_screen(): number;

export function get_input_devices(): Clutter.InputDevice[];

export function get_stage_from_window(win: xlib.Window): Clutter.Stage;

export function get_use_argb_visual(): boolean;

export function get_use_stereo_stage(): boolean;

export function handle_event(xevent: xlib.XEvent): FilterReturn;

export function has_composite_extension(): boolean;

export function has_event_retrieval(): boolean;

export function has_xinput(): boolean;

export function set_display(xdpy: xlib.Display): void;

export function set_stage_foreign(stage: Clutter.Stage, xwindow: xlib.Window): boolean;

export function set_use_argb_visual(use_argb: boolean): void;

export function set_use_stereo_stage(use_stereo: boolean): void;

export function trap_x_errors(): void;

export function untrap_x_errors(): number;

export type FilterFunc = (xev: xlib.XEvent, cev: Clutter.Event) => FilterReturn;

export namespace FilterReturn {
    export const $gtype: GObject.GType<FilterReturn>;
}

export enum FilterReturn {
    CONTINUE = 0,
    TRANSLATE = 1,
    REMOVE = 2,
}

export namespace TexturePixmap {
    export interface ConstructorProperties extends Clutter.Texture.ConstructorProperties {
        [key: string]: any;

        automatic_updates: boolean;
        automaticUpdates: boolean;
        destroyed: boolean;
        pixmap: number;
        pixmap_depth: number;
        pixmapDepth: number;
        pixmap_height: number;
        pixmapHeight: number;
        pixmap_width: number;
        pixmapWidth: number;
        window: number;
        window_mapped: boolean;
        windowMapped: boolean;
        window_override_redirect: boolean;
        windowOverrideRedirect: boolean;
        window_redirect_automatic: boolean;
        windowRedirectAutomatic: boolean;
        window_x: number;
        windowX: number;
        window_y: number;
        windowY: number;
    }
}

export class TexturePixmap
    extends Clutter.Texture
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<TexturePixmap>;

    constructor(properties?: Partial<TexturePixmap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TexturePixmap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    automatic_updates: boolean;
    automaticUpdates: boolean;
    destroyed: boolean;
    pixmap: number;
    pixmap_depth: number;
    pixmapDepth: number;
    pixmap_height: number;
    pixmapHeight: number;
    pixmap_width: number;
    pixmapWidth: number;
    window: number;
    window_mapped: boolean;
    windowMapped: boolean;
    window_override_redirect: boolean;
    windowOverrideRedirect: boolean;
    window_redirect_automatic: boolean;
    windowRedirectAutomatic: boolean;
    window_x: number;
    windowX: number;
    window_y: number;
    windowY: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'queue-damage-redraw',
        callback: (_source: this, x: number, y: number, width: number, height: number) => void
    ): number;

    connect_after(
        signal: 'queue-damage-redraw',
        callback: (_source: this, x: number, y: number, width: number, height: number) => void
    ): number;

    emit(signal: 'queue-damage-redraw', x: number, y: number, width: number, height: number): void;

    connect(
        signal: 'update-area',
        callback: (_source: this, x: number, y: number, width: number, height: number) => void
    ): number;

    connect_after(
        signal: 'update-area',
        callback: (_source: this, x: number, y: number, width: number, height: number) => void
    ): number;

    emit(signal: 'update-area', x: number, y: number, width: number, height: number): void;

    // Constructors

    static ['new'](): TexturePixmap;

    static new_with_pixmap(pixmap: xlib.Pixmap): TexturePixmap;

    static new_with_window(window: xlib.Window): TexturePixmap;

    // Members

    set_automatic(setting: boolean): void;

    set_pixmap(pixmap: xlib.Pixmap): void;

    set_window(window: xlib.Window, automatic: boolean): void;

    sync_window(): void;

    update_area(x: number, y: number, width: number, height: number): void;

    vfunc_update_area(x: number, y: number, width: number, height: number): void;

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

export class TexturePixmapPrivate {
    static $gtype: GObject.GType<TexturePixmapPrivate>;

    constructor(copy: TexturePixmapPrivate);
}

export class XInputDevice {
    static $gtype: GObject.GType<XInputDevice>;

    constructor(copy: XInputDevice);
}
