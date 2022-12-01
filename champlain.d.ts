/**
 * Champlain 0.12
 *
 * Generated from 0.12.20
 */

import * as Clutter from './clutter';
import * as GObject from './gobject';
import * as Atk from './atk';
import * as Json from './json';
import * as Pango from './pango';
import * as cairo from './cairo';
import * as GLib from './glib';

export const MAJOR_VERSION: number;
export const MAP_SOURCE_MEMPHIS_LOCAL: string;
export const MAP_SOURCE_MEMPHIS_NETWORK: string;
export const MAP_SOURCE_MFF_RELIEF: string;
export const MAP_SOURCE_OAM: string;
export const MAP_SOURCE_OSM_AERIAL_MAP: string;
export const MAP_SOURCE_OSM_CYCLE_MAP: string;
export const MAP_SOURCE_OSM_MAPNIK: string;
export const MAP_SOURCE_OSM_MAPQUEST: string;
export const MAP_SOURCE_OSM_OSMARENDER: string;
export const MAP_SOURCE_OSM_TRANSPORT_MAP: string;
export const MAP_SOURCE_OWM_CLOUDS: string;
export const MAP_SOURCE_OWM_PRECIPITATION: string;
export const MAP_SOURCE_OWM_PRESSURE: string;
export const MAP_SOURCE_OWM_TEMPERATURE: string;
export const MAP_SOURCE_OWM_WIND: string;
export const MAX_LATITUDE: number;
export const MAX_LONGITUDE: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const MIN_LATITUDE: number;
export const MIN_LONGITUDE: number;
export const VERSION: number;
export const VERSION_HEX: number;
export const VERSION_S: string;

export namespace MapProjection {
    export const $gtype: GObject.GType<MapProjection>;
}

export enum MapProjection {
    MERCATOR = 0,
}

export namespace SelectionMode {
    export const $gtype: GObject.GType<SelectionMode>;
}

export enum SelectionMode {
    NONE = 0,
    SINGLE = 1,
    MULTIPLE = 2,
}

export namespace State {
    export const $gtype: GObject.GType<State>;
}

export enum State {
    NONE = 0,
    LOADING = 1,
    LOADED = 2,
    DONE = 3,
}

export namespace Unit {
    export const $gtype: GObject.GType<Unit>;
}

export enum Unit {
    KM = 0,
    MILES = 1,
}

export namespace Adjustment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        lower: number;
        step_increment: number;
        stepIncrement: number;
        upper: number;
        value: number;
    }
}

export class Adjustment extends GObject.Object {
    static $gtype: GObject.GType<Adjustment>;

    constructor(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    lower: number;
    step_increment: number;
    stepIncrement: number;
    upper: number;
    value: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](value: number, lower: number, upper: number, step_increment: number): Adjustment;

    // Members

    clamp(interpolate: boolean, n_frames: number, fps: number): boolean;

    get_value(): number;

    get_values(value: number, lower: number, upper: number, step_increment: number): void;

    interpolate(value: number, n_frames: number, fps: number): void;

    interpolate_stop(): void;

    set_value(value: number): void;

    set_values(value: number, lower: number, upper: number, step_increment: number): void;

    vfunc_changed(): void;
}

export namespace Coordinate {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}

export class Coordinate extends GObject.InitiallyUnowned implements Location {
    static $gtype: GObject.GType<Coordinate>;

    constructor(properties?: Partial<Coordinate.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Coordinate.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CoordinatePrivate;

    // Implemented Properties

    latitude: number;
    longitude: number;

    // Constructors

    static ['new'](): Coordinate;

    static new_full(latitude: number, longitude: number): Coordinate;

    // Implemented Members

    get_latitude(): number;

    get_longitude(): number;

    set_location(latitude: number, longitude: number): void;

    vfunc_get_latitude(): number;

    vfunc_get_longitude(): number;

    vfunc_set_location(latitude: number, longitude: number): void;
}

export namespace CustomMarker {
    export interface ConstructorProperties extends Marker.ConstructorProperties {
        [key: string]: any;
    }
}

export class CustomMarker
    extends Marker
    implements Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<CustomMarker>;

    constructor(properties?: Partial<CustomMarker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CustomMarker.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CustomMarkerPrivate | any;

    // Implemented Properties

    latitude: number;
    longitude: number;

    // Constructors

    static ['new'](): CustomMarker;

    // Implemented Members

    get_latitude(): number;

    get_longitude(): number;

    set_location(latitude: number, longitude: number): void;

    vfunc_get_latitude(): number;

    vfunc_get_longitude(): number;

    vfunc_set_location(latitude: number, longitude: number): void;

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

export namespace ErrorTileRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;

        tile_size: number;
        tileSize: number;
    }
}

export class ErrorTileRenderer extends Renderer {
    static $gtype: GObject.GType<ErrorTileRenderer>;

    constructor(properties?: Partial<ErrorTileRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ErrorTileRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    tile_size: number;
    tileSize: number;

    // Fields
    priv: ErrorTileRendererPrivate;

    // Constructors

    static ['new'](tile_size: number): ErrorTileRenderer;

    // Members

    get_tile_size(): number;

    set_tile_size(size: number): void;
}

export namespace FileCache {
    export interface ConstructorProperties extends TileCache.ConstructorProperties {
        [key: string]: any;

        cache_dir: string;
        cacheDir: string;
        size_limit: number;
        sizeLimit: number;
    }
}

export class FileCache extends TileCache {
    static $gtype: GObject.GType<FileCache>;

    constructor(properties?: Partial<FileCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_dir: string;
    cacheDir: string;
    size_limit: number;
    sizeLimit: number;

    // Fields
    priv: FileCachePrivate | any;

    // Constructors

    static new_full(size_limit: number, cache_dir: string | null, renderer: Renderer): FileCache;

    // Members

    get_cache_dir(): string;

    get_size_limit(): number;

    purge(): void;

    purge_on_idle(): void;

    set_size_limit(size_limit: number): void;
}

export namespace FileTileSource {
    export interface ConstructorProperties extends TileSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class FileTileSource extends TileSource {
    static $gtype: GObject.GType<FileTileSource>;

    constructor(properties?: Partial<FileTileSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileTileSource.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_full(
        id: string,
        name: string,
        license: string,
        license_uri: string,
        min_zoom: number,
        max_zoom: number,
        tile_size: number,
        projection: MapProjection,
        renderer: Renderer
    ): FileTileSource;

    // Members

    load_map_data(map_path: string): void;
}

export namespace ImageRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;
    }
}

export class ImageRenderer extends Renderer {
    static $gtype: GObject.GType<ImageRenderer>;

    constructor(properties?: Partial<ImageRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ImageRenderer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ImageRendererPrivate;

    // Constructors

    static ['new'](): ImageRenderer;
}

export namespace KineticScrollView {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        decel_rate: number;
        decelRate: number;
        mode: boolean;
        motion_buffer: number;
        motionBuffer: number;
    }
}

export class KineticScrollView
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<KineticScrollView>;

    constructor(properties?: Partial<KineticScrollView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KineticScrollView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    decel_rate: number;
    decelRate: number;
    mode: boolean;
    motion_buffer: number;
    motionBuffer: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'panning-completed', callback: (_source: this) => void): number;

    connect_after(signal: 'panning-completed', callback: (_source: this) => void): number;

    emit(signal: 'panning-completed'): void;

    // Constructors

    static ['new'](kinetic: boolean, viewport: Viewport): KineticScrollView;
    static ['new'](...args: never[]): never;

    // Members

    stop(): void;

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

export namespace Label {
    export interface ConstructorProperties extends Marker.ConstructorProperties {
        [key: string]: any;

        alignment: Pango.Alignment;
        color: Clutter.Color;
        draw_background: boolean;
        drawBackground: boolean;
        draw_shadow: boolean;
        drawShadow: boolean;
        ellipsize: Pango.EllipsizeMode;
        font_name: string;
        fontName: string;
        image: Clutter.Actor;
        single_line_mode: boolean;
        singleLineMode: boolean;
        text: string;
        text_color: Clutter.Color;
        textColor: Clutter.Color;
        use_markup: boolean;
        useMarkup: boolean;
        wrap: boolean;
        wrap_mode: Pango.WrapMode;
        wrapMode: Pango.WrapMode;
    }
}

export class Label
    extends Marker
    implements Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Label>;

    constructor(properties?: Partial<Label.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Label.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alignment: Pango.Alignment;
    color: Clutter.Color;
    draw_background: boolean;
    drawBackground: boolean;
    draw_shadow: boolean;
    drawShadow: boolean;
    ellipsize: Pango.EllipsizeMode;
    font_name: string;
    fontName: string;
    image: Clutter.Actor;
    single_line_mode: boolean;
    singleLineMode: boolean;
    text: string;
    text_color: Clutter.Color;
    textColor: Clutter.Color;
    use_markup: boolean;
    useMarkup: boolean;
    wrap: boolean;
    wrap_mode: Pango.WrapMode;
    wrapMode: Pango.WrapMode;

    // Fields
    priv: LabelPrivate | any;

    // Implemented Properties

    latitude: number;
    longitude: number;

    // Constructors

    static ['new'](): Label;

    static new_from_file(filename: string): Label;

    static new_full(text: string, actor: Clutter.Actor): Label;

    static new_with_image(actor: Clutter.Actor): Label;

    static new_with_text(
        text: string,
        font?: string | null,
        text_color?: Clutter.Color | null,
        label_color?: Clutter.Color | null
    ): Label;

    // Members

    get_alignment(): Pango.Alignment;

    get_attributes(): Pango.AttrList;

    get_color(): Clutter.Color;

    get_draw_background(): boolean;

    get_draw_shadow(): boolean;

    get_ellipsize(): Pango.EllipsizeMode;

    get_font_name(): string;

    get_image(): Clutter.Actor;

    get_single_line_mode(): boolean;

    get_text(): string;

    get_text_color(): Clutter.Color;

    get_use_markup(): boolean;

    get_wrap(): boolean;

    get_wrap_mode(): Pango.WrapMode;

    set_alignment(alignment: Pango.Alignment): void;

    set_attributes(list: Pango.AttrList): void;

    set_color(color?: Clutter.Color | null): void;

    set_draw_background(background: boolean): void;

    set_draw_shadow(shadow: boolean): void;

    set_ellipsize(mode: Pango.EllipsizeMode): void;

    set_font_name(font_name?: string | null): void;

    set_image(image?: Clutter.Actor | null): void;

    set_single_line_mode(mode: boolean): void;

    set_text(text: string): void;

    set_text_color(color?: Clutter.Color | null): void;

    set_use_markup(use_markup: boolean): void;

    set_wrap(wrap: boolean): void;

    set_wrap_mode(wrap_mode: Pango.WrapMode): void;

    // Implemented Members

    get_latitude(): number;

    get_longitude(): number;

    set_location(latitude: number, longitude: number): void;

    vfunc_get_latitude(): number;

    vfunc_get_longitude(): number;

    vfunc_set_location(latitude: number, longitude: number): void;

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

export namespace Layer {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Layer
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Layer>;

    constructor(properties?: Partial<Layer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Layer.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bounding_box(): BoundingBox;

    set_view(view: View): void;

    vfunc_get_bounding_box(): BoundingBox;

    vfunc_set_view(view: View): void;

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

export namespace License {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        alignment: Pango.Alignment;
        extra_text: string;
        extraText: string;
    }
}

export class License
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<License>;

    constructor(properties?: Partial<License.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<License.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alignment: Pango.Alignment;
    extra_text: string;
    extraText: string;

    // Fields
    priv: LicensePrivate;

    // Constructors

    static ['new'](): License;

    // Members

    connect_view(view: View): void;

    disconnect_view(): void;

    get_alignment(): Pango.Alignment;

    get_extra_text(): string;

    set_alignment(alignment: Pango.Alignment): void;

    set_extra_text(text: string): void;

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

export namespace MapSource {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        next_source: MapSource;
        nextSource: MapSource;
        renderer: Renderer;
    }
}

export abstract class MapSource extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<MapSource>;

    constructor(properties?: Partial<MapSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MapSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    next_source: MapSource;
    nextSource: MapSource;
    renderer: Renderer;

    // Fields
    priv: MapSourcePrivate;

    // Members

    fill_tile(tile: Tile): void;

    get_column_count(zoom_level: number): number;

    get_id(): string;

    get_latitude(zoom_level: number, y: number): number;

    get_license(): string;

    get_license_uri(): string;

    get_longitude(zoom_level: number, x: number): number;

    get_max_zoom_level(): number;

    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number;

    get_min_zoom_level(): number;

    get_name(): string;

    get_next_source(): MapSource;

    get_projection(): MapProjection;

    get_renderer(): Renderer;

    get_row_count(zoom_level: number): number;

    get_tile_size(): number;

    get_x(zoom_level: number, longitude: number): number;

    get_y(zoom_level: number, latitude: number): number;

    set_next_source(next_source: MapSource): void;

    set_renderer(renderer: Renderer): void;

    vfunc_fill_tile(tile: Tile): void;

    vfunc_get_id(): string;

    vfunc_get_license(): string;

    vfunc_get_license_uri(): string;

    vfunc_get_max_zoom_level(): number;

    vfunc_get_min_zoom_level(): number;

    vfunc_get_name(): string;

    vfunc_get_projection(): MapProjection;

    vfunc_get_tile_size(): number;
}

export namespace MapSourceChain {
    export interface ConstructorProperties extends MapSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class MapSourceChain extends MapSource {
    static $gtype: GObject.GType<MapSourceChain>;

    constructor(properties?: Partial<MapSourceChain.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MapSourceChain.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MapSourceChainPrivate | any;

    // Constructors

    static ['new'](): MapSourceChain;

    // Members

    pop(): void;

    push(map_source: MapSource): void;
}

export namespace MapSourceDesc {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        constructor: any;
        data: any;
        id: string;
        license: string;
        license_uri: string;
        licenseUri: string;
        max_zoom_level: number;
        maxZoomLevel: number;
        min_zoom_level: number;
        minZoomLevel: number;
        name: string;
        projection: MapProjection;
        tile_size: number;
        tileSize: number;
        uri_format: string;
        uriFormat: string;
    }
}

export class MapSourceDesc extends GObject.Object {
    static $gtype: GObject.GType<MapSourceDesc>;

    constructor(properties?: Partial<MapSourceDesc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MapSourceDesc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    'constructor': any;
    data: any;
    id: string;
    license: string;
    license_uri: string;
    licenseUri: string;
    max_zoom_level: number;
    maxZoomLevel: number;
    min_zoom_level: number;
    minZoomLevel: number;
    name: string;
    projection: MapProjection;
    tile_size: number;
    tileSize: number;
    uri_format: string;
    uriFormat: string;

    // Fields
    priv: MapSourceDescPrivate;

    // Members

    get_data(): any | null;
    get_data(...args: never[]): never;

    get_id(): string;

    get_license(): string;

    get_license_uri(): string;

    get_max_zoom_level(): number;

    get_min_zoom_level(): number;

    get_name(): string;

    get_projection(): MapProjection;

    get_tile_size(): number;

    get_uri_format(): string;
}

export namespace MapSourceFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MapSourceFactory extends GObject.Object {
    static $gtype: GObject.GType<MapSourceFactory>;

    constructor(properties?: Partial<MapSourceFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MapSourceFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MapSourceFactoryPrivate;

    // Members

    create(id: string): MapSource;

    create_cached_source(id: string): MapSource;

    create_error_source(tile_size: number): MapSource;

    create_memcached_source(id: string): MapSource;

    get_registered(): MapSourceDesc[];

    register(desc: MapSourceDesc): boolean;

    static dup_default(): MapSourceFactory;
}

export namespace Marker {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        draggable: boolean;
        selectable: boolean;
        selected: boolean;
    }
}

export class Marker
    extends Clutter.Actor
    implements Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Marker>;

    constructor(properties?: Partial<Marker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Marker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    draggable: boolean;
    selectable: boolean;
    selected: boolean;

    // Fields
    priv: MarkerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'button-press', callback: (_source: this, event: Clutter.Event) => void): number;

    connect_after(signal: 'button-press', callback: (_source: this, event: Clutter.Event) => void): number;

    emit(signal: 'button-press', event: Clutter.Event): void;

    connect(signal: 'button-release', callback: (_source: this, event: Clutter.Event) => void): number;

    connect_after(signal: 'button-release', callback: (_source: this, event: Clutter.Event) => void): number;

    emit(signal: 'button-release', event: Clutter.Event): void;

    connect(signal: 'drag-finish', callback: (_source: this, event: Clutter.Event) => void): number;

    connect_after(signal: 'drag-finish', callback: (_source: this, event: Clutter.Event) => void): number;

    emit(signal: 'drag-finish', event: Clutter.Event): void;

    connect(
        signal: 'drag-motion',
        callback: (_source: this, dx: number, dy: number, event: Clutter.Event) => void
    ): number;

    connect_after(
        signal: 'drag-motion',
        callback: (_source: this, dx: number, dy: number, event: Clutter.Event) => void
    ): number;

    emit(signal: 'drag-motion', dx: number, dy: number, event: Clutter.Event): void;

    // Implemented Properties

    latitude: number;
    longitude: number;

    // Constructors

    static ['new'](): Marker;

    // Members

    animate_in(): void;

    animate_in_with_delay(delay: number): void;

    animate_out(): void;

    animate_out_with_delay(delay: number): void;

    get_draggable(): boolean;

    get_selectable(): boolean;

    get_selected(): boolean;

    set_draggable(value: boolean): void;

    set_selectable(value: boolean): void;

    set_selected(value: boolean): void;

    static get_selection_color(): Clutter.Color;

    static get_selection_text_color(): Clutter.Color;

    static set_selection_color(color: Clutter.Color): void;

    static set_selection_text_color(color: Clutter.Color): void;

    // Implemented Members

    get_latitude(): number;

    get_longitude(): number;

    set_location(latitude: number, longitude: number): void;

    vfunc_get_latitude(): number;

    vfunc_get_longitude(): number;

    vfunc_set_location(latitude: number, longitude: number): void;

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

export namespace MarkerLayer {
    export interface ConstructorProperties extends Layer.ConstructorProperties {
        [key: string]: any;

        selection_mode: SelectionMode;
        selectionMode: SelectionMode;
    }
}

export class MarkerLayer
    extends Layer
    implements Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<MarkerLayer>;

    constructor(properties?: Partial<MarkerLayer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MarkerLayer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    selection_mode: SelectionMode;
    selectionMode: SelectionMode;

    // Fields
    priv: MarkerLayerPrivate;

    // Implemented Properties

    surface: cairo.Surface;

    // Constructors

    static ['new'](): MarkerLayer;

    static new_full(mode: SelectionMode): MarkerLayer;

    // Members

    add_marker(marker: Marker): void;

    animate_in_all_markers(): void;

    animate_out_all_markers(): void;

    get_markers(): Marker[];

    get_selected(): Marker[];

    get_selection_mode(): SelectionMode;

    hide_all_markers(): void;

    remove_all(): void;

    remove_marker(marker: Marker): void;

    select_all_markers(): void;

    set_all_markers_draggable(): void;

    set_all_markers_undraggable(): void;

    set_selection_mode(mode: SelectionMode): void;

    show_all_markers(): void;

    unselect_all_markers(): void;

    // Implemented Members

    get_surface(): cairo.Surface;

    set_surface(surface: cairo.Surface): void;

    vfunc_get_surface(): cairo.Surface;

    vfunc_set_surface(surface: cairo.Surface): void;

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

export namespace MemoryCache {
    export interface ConstructorProperties extends TileCache.ConstructorProperties {
        [key: string]: any;

        size_limit: number;
        sizeLimit: number;
    }
}

export class MemoryCache extends TileCache {
    static $gtype: GObject.GType<MemoryCache>;

    constructor(properties?: Partial<MemoryCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MemoryCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    size_limit: number;
    sizeLimit: number;

    // Fields
    priv: MemoryCachePrivate | any;

    // Constructors

    static new_full(size_limit: number, renderer: Renderer): MemoryCache;

    // Members

    clean(): void;

    get_size_limit(): number;

    set_size_limit(size_limit: number): void;
}

export namespace NetworkBboxTileSource {
    export interface ConstructorProperties extends TileSource.ConstructorProperties {
        [key: string]: any;

        api_uri: string;
        apiUri: string;
        proxy_uri: string;
        proxyUri: string;
        state: State;
        user_agent: string;
        userAgent: string;
    }
}

export class NetworkBboxTileSource extends TileSource {
    static $gtype: GObject.GType<NetworkBboxTileSource>;

    constructor(properties?: Partial<NetworkBboxTileSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NetworkBboxTileSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    api_uri: string;
    apiUri: string;
    proxy_uri: string;
    proxyUri: string;
    state: State;
    user_agent: string;
    userAgent: string;

    // Fields
    priv: NetworkBboxTileSourcePrivate | any;

    // Constructors

    static new_full(
        id: string,
        name: string,
        license: string,
        license_uri: string,
        min_zoom: number,
        max_zoom: number,
        tile_size: number,
        projection: MapProjection,
        renderer: Renderer
    ): NetworkBboxTileSource;

    // Members

    get_api_uri(): string;

    load_map_data(bbox: BoundingBox): void;

    set_api_uri(api_uri: string): void;

    set_user_agent(user_agent: string): void;
}

export namespace NetworkTileSource {
    export interface ConstructorProperties extends TileSource.ConstructorProperties {
        [key: string]: any;

        max_conns: number;
        maxConns: number;
        offline: boolean;
        proxy_uri: string;
        proxyUri: string;
        uri_format: string;
        uriFormat: string;
        user_agent: string;
        userAgent: string;
    }
}

export class NetworkTileSource extends TileSource {
    static $gtype: GObject.GType<NetworkTileSource>;

    constructor(properties?: Partial<NetworkTileSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NetworkTileSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_conns: number;
    maxConns: number;
    offline: boolean;
    proxy_uri: string;
    proxyUri: string;
    uri_format: string;
    uriFormat: string;
    user_agent: string;
    userAgent: string;

    // Fields
    priv: NetworkTileSourcePrivate | any;

    // Constructors

    static new_full(
        id: string,
        name: string,
        license: string,
        license_uri: string,
        min_zoom: number,
        max_zoom: number,
        tile_size: number,
        projection: MapProjection,
        uri_format: string,
        renderer: Renderer
    ): NetworkTileSource;

    // Members

    get_max_conns(): number;

    get_offline(): boolean;

    get_proxy_uri(): string;

    get_uri_format(): string;

    set_max_conns(max_conns: number): void;

    set_offline(offline: boolean): void;

    set_proxy_uri(proxy_uri: string): void;

    set_uri_format(uri_format: string): void;

    set_user_agent(user_agent: string): void;
}

export namespace NullTileSource {
    export interface ConstructorProperties extends TileSource.ConstructorProperties {
        [key: string]: any;
    }
}

export class NullTileSource extends TileSource {
    static $gtype: GObject.GType<NullTileSource>;

    constructor(properties?: Partial<NullTileSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NullTileSource.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_full(renderer: Renderer): NullTileSource;
}

export namespace PathLayer {
    export interface ConstructorProperties extends Layer.ConstructorProperties {
        [key: string]: any;

        closed: boolean;
        fill: boolean;
        fill_color: Clutter.Color;
        fillColor: Clutter.Color;
        stroke: boolean;
        stroke_color: Clutter.Color;
        strokeColor: Clutter.Color;
        stroke_width: number;
        strokeWidth: number;
        visible: boolean;
    }
}

export class PathLayer
    extends Layer
    implements Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<PathLayer>;

    constructor(properties?: Partial<PathLayer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PathLayer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    closed: boolean;
    fill: boolean;
    fill_color: Clutter.Color;
    fillColor: Clutter.Color;
    stroke: boolean;
    stroke_color: Clutter.Color;
    strokeColor: Clutter.Color;
    stroke_width: number;
    strokeWidth: number;
    visible: boolean;

    // Fields
    priv: PathLayerPrivate;

    // Implemented Properties

    surface: cairo.Surface;

    // Constructors

    static ['new'](): PathLayer;

    // Members

    add_node(location: Location): void;

    get_closed(): boolean;

    get_dash(): number[];

    get_fill(): boolean;

    get_fill_color(): Clutter.Color;

    get_nodes(): Location[];

    get_stroke(): boolean;

    get_stroke_color(): Clutter.Color;

    get_stroke_width(): number;

    get_visible(): boolean;

    insert_node(location: Location, position: number): void;

    remove_all(): void;

    remove_node(location: Location): void;

    set_closed(value: boolean): void;

    set_dash(dash_pattern: number[]): void;

    set_fill(value: boolean): void;

    set_fill_color(color?: Clutter.Color | null): void;

    set_stroke(value: boolean): void;

    set_stroke_color(color?: Clutter.Color | null): void;

    set_stroke_width(value: number): void;

    set_visible(value: boolean): void;

    // Implemented Members

    get_surface(): cairo.Surface;

    set_surface(surface: cairo.Surface): void;

    vfunc_get_surface(): cairo.Surface;

    vfunc_set_surface(surface: cairo.Surface): void;

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

export namespace Point {
    export interface ConstructorProperties extends Marker.ConstructorProperties {
        [key: string]: any;

        color: Clutter.Color;
        size: number | any;
    }
}

export class Point
    extends Marker
    implements Atk.ImplementorIface, Exportable, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Point>;

    constructor(properties?: Partial<Point.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Point.ConstructorProperties>, ...args: any[]): void;

    // Properties
    color: Clutter.Color;
    size: number | any;

    // Fields
    priv: PointPrivate | any;

    // Implemented Properties

    surface: cairo.Surface;
    latitude: number;
    longitude: number;

    // Constructors

    static ['new'](): Point;

    static new_full(size: number, color: Clutter.Color): Point;

    // Members

    get_color(): Clutter.Color;

    get_size(): number;
    get_size(...args: never[]): never;

    set_color(color?: Clutter.Color | null): void;

    set_size(size: number): void;
    set_size(...args: never[]): never;

    // Implemented Members

    get_surface(): cairo.Surface;

    set_surface(surface: cairo.Surface): void;

    vfunc_get_surface(): cairo.Surface;

    vfunc_set_surface(surface: cairo.Surface): void;

    get_latitude(): number;

    get_longitude(): number;

    set_location(latitude: number, longitude: number): void;

    vfunc_get_latitude(): number;

    vfunc_get_longitude(): number;

    vfunc_set_location(latitude: number, longitude: number): void;

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

export namespace Renderer {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}

export class Renderer extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Renderer>;

    constructor(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]): void;

    // Members

    render(tile: Tile): void;

    set_data(data: Uint8Array | string): void;
    set_data(...args: never[]): never;

    vfunc_render(tile: Tile): void;

    vfunc_set_data(data: Uint8Array | string): void;
}

export namespace Scale {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        max_width: number;
        maxWidth: number;
        unit: Unit;
    }
}

export class Scale
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Scale>;

    constructor(properties?: Partial<Scale.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Scale.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_width: number;
    maxWidth: number;
    unit: Unit;

    // Fields
    priv: ScalePrivate;

    // Constructors

    static ['new'](): Scale;

    // Members

    connect_view(view: View): void;

    disconnect_view(): void;

    get_max_width(): number;

    get_unit(): Unit;

    set_max_width(value: number): void;

    set_unit(unit: Unit): void;

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

export namespace Tile {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        content: Clutter.Actor | any;
        etag: string;
        fade_in: boolean;
        fadeIn: boolean;
        size: number | any;
        state: State;
        x: number;
        y: number;
        zoom_level: number;
        zoomLevel: number;
    }
}

export class Tile
    extends Clutter.Actor
    implements Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Tile>;

    constructor(properties?: Partial<Tile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tile.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content: Clutter.Actor | any;
    etag: string;
    fade_in: boolean;
    fadeIn: boolean;
    size: number | any;
    state: State;
    x: number;
    y: number;
    zoom_level: number;
    zoomLevel: number;

    // Fields
    priv: TilePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'render-complete',
        callback: (_source: this, data: any | null, size: number, error: boolean) => void
    ): number;

    connect_after(
        signal: 'render-complete',
        callback: (_source: this, data: any | null, size: number, error: boolean) => void
    ): number;

    emit(signal: 'render-complete', data: any | null, size: number, error: boolean): void;

    // Implemented Properties

    surface: cairo.Surface;

    // Constructors

    static ['new'](): Tile;

    static new_full(x: number, y: number, size: number, zoom_level: number): Tile;

    // Members

    display_content(): void;

    get_content(): Clutter.Actor;

    get_etag(): string;

    get_fade_in(): boolean;

    get_modified_time(): GLib.TimeVal;

    get_size(): number;
    get_size(...args: never[]): never;

    get_state(): State;

    get_x(): number;

    get_y(): number;

    get_zoom_level(): number;

    set_content(actor: Clutter.Actor): void;

    set_etag(etag: string): void;

    set_fade_in(fade_in: boolean): void;

    set_modified_time(time: GLib.TimeVal): void;

    set_size(size: number): void;
    set_size(...args: never[]): never;

    set_state(state: State): void;

    set_x(x: number): void;

    set_y(y: number): void;

    set_zoom_level(zoom_level: number): void;

    // Implemented Members

    get_surface(): cairo.Surface;

    set_surface(surface: cairo.Surface): void;

    vfunc_get_surface(): cairo.Surface;

    vfunc_set_surface(surface: cairo.Surface): void;

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

export namespace TileCache {
    export interface ConstructorProperties extends MapSource.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class TileCache extends MapSource {
    static $gtype: GObject.GType<TileCache>;

    constructor(properties?: Partial<TileCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TileCache.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TileCachePrivate | any;

    // Members

    on_tile_filled(tile: Tile): void;

    refresh_tile_time(tile: Tile): void;

    store_tile(tile: Tile, contents: string, size: number): void;

    vfunc_on_tile_filled(tile: Tile): void;

    vfunc_refresh_tile_time(tile: Tile): void;

    vfunc_store_tile(tile: Tile, contents: string, size: number): void;
}

export namespace TileSource {
    export interface ConstructorProperties extends MapSource.ConstructorProperties {
        [key: string]: any;

        cache: TileCache;
        id: string;
        license: string;
        license_uri: string;
        licenseUri: string;
        max_zoom_level: number;
        maxZoomLevel: number;
        min_zoom_level: number;
        minZoomLevel: number;
        name: string;
        projection: MapProjection;
        tile_size: number;
        tileSize: number;
    }
}

export abstract class TileSource extends MapSource {
    static $gtype: GObject.GType<TileSource>;

    constructor(properties?: Partial<TileSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TileSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache: TileCache;
    id: string;
    license: string;
    license_uri: string;
    licenseUri: string;
    max_zoom_level: number;
    maxZoomLevel: number;
    min_zoom_level: number;
    minZoomLevel: number;
    name: string;
    projection: MapProjection;
    tile_size: number;
    tileSize: number;

    // Fields
    priv: TileSourcePrivate | any;

    // Members

    get_cache(): TileCache;

    set_cache(cache: TileCache): void;

    set_id(id: string): void;

    set_license(license: string): void;

    set_license_uri(license_uri: string): void;

    set_max_zoom_level(zoom_level: number): void;

    set_min_zoom_level(zoom_level: number): void;

    set_name(name: string): void;

    set_projection(projection: MapProjection): void;

    set_tile_size(tile_size: number): void;
}

export namespace View {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        animate_zoom: boolean;
        animateZoom: boolean;
        background_pattern: Clutter.Actor;
        backgroundPattern: Clutter.Actor;
        deceleration: number;
        goto_animation_duration: number;
        gotoAnimationDuration: number;
        goto_animation_mode: Clutter.AnimationMode;
        gotoAnimationMode: Clutter.AnimationMode;
        horizontal_wrap: boolean;
        horizontalWrap: boolean;
        keep_center_on_resize: boolean;
        keepCenterOnResize: boolean;
        kinetic_mode: boolean;
        kineticMode: boolean;
        latitude: number;
        longitude: number;
        map_source: MapSource;
        mapSource: MapSource;
        max_zoom_level: number;
        maxZoomLevel: number;
        min_zoom_level: number;
        minZoomLevel: number;
        state: State;
        world: BoundingBox;
        zoom_level: number;
        zoomLevel: number;
        zoom_on_double_click: boolean;
        zoomOnDoubleClick: boolean;
    }
}

export class View
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<View>;

    constructor(properties?: Partial<View.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<View.ConstructorProperties>, ...args: any[]): void;

    // Properties
    animate_zoom: boolean;
    animateZoom: boolean;
    background_pattern: Clutter.Actor;
    backgroundPattern: Clutter.Actor;
    deceleration: number;
    goto_animation_duration: number;
    gotoAnimationDuration: number;
    goto_animation_mode: Clutter.AnimationMode;
    gotoAnimationMode: Clutter.AnimationMode;
    horizontal_wrap: boolean;
    horizontalWrap: boolean;
    keep_center_on_resize: boolean;
    keepCenterOnResize: boolean;
    kinetic_mode: boolean;
    kineticMode: boolean;
    latitude: number;
    longitude: number;
    map_source: MapSource;
    mapSource: MapSource;
    max_zoom_level: number;
    maxZoomLevel: number;
    min_zoom_level: number;
    minZoomLevel: number;
    state: State;
    world: BoundingBox;
    zoom_level: number;
    zoomLevel: number;
    zoom_on_double_click: boolean;
    zoomOnDoubleClick: boolean;

    // Fields
    priv: ViewPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'animation-completed', callback: (_source: this) => void): number;

    connect_after(signal: 'animation-completed', callback: (_source: this) => void): number;

    emit(signal: 'animation-completed'): void;

    connect(signal: 'layer-relocated', callback: (_source: this) => void): number;

    connect_after(signal: 'layer-relocated', callback: (_source: this) => void): number;

    emit(signal: 'layer-relocated'): void;

    // Constructors

    static ['new'](): View;

    // Members

    add_layer(layer: Layer): void;

    add_overlay_source(map_source: MapSource, opacity: number): void;

    bin_layout_add(child: Clutter.Actor, x_align: Clutter.BinAlignment, y_align: Clutter.BinAlignment): void;

    center_on(latitude: number, longitude: number): void;

    ensure_layers_visible(animate: boolean): void;

    ensure_visible(bbox: BoundingBox, animate: boolean): void;

    get_animate_zoom(): boolean;

    get_background_pattern(): Clutter.Content;

    get_bounding_box(): BoundingBox;

    get_bounding_box_for_zoom_level(zoom_level: number): BoundingBox;

    get_center_latitude(): number;

    get_center_longitude(): number;

    get_deceleration(): number;

    get_horizontal_wrap(): boolean;

    get_keep_center_on_resize(): boolean;

    get_kinetic_mode(): boolean;

    get_license_actor(): License;

    get_map_source(): MapSource;

    get_max_zoom_level(): number;

    get_min_zoom_level(): number;

    get_overlay_sources(): MapSource[];

    get_state(): State;

    get_viewport_anchor(): [number, number];

    get_viewport_origin(): [number, number];

    get_world(): BoundingBox;

    get_zoom_level(): number;

    get_zoom_on_double_click(): boolean;

    go_to(latitude: number, longitude: number): void;

    latitude_to_y(latitude: number): number;

    longitude_to_x(longitude: number): number;

    reload_tiles(): void;

    remove_layer(layer: Layer): void;

    remove_overlay_source(map_source: MapSource): void;

    set_animate_zoom(value: boolean): void;

    set_background_pattern(background: Clutter.Content): void;

    set_deceleration(rate: number): void;

    set_horizontal_wrap(wrap: boolean): void;

    set_keep_center_on_resize(value: boolean): void;

    set_kinetic_mode(kinetic: boolean): void;

    set_map_source(map_source: MapSource): void;

    set_max_zoom_level(zoom_level: number): void;

    set_min_zoom_level(zoom_level: number): void;

    set_world(bbox: BoundingBox): void;

    set_zoom_level(zoom_level: number): void;

    set_zoom_on_double_click(value: boolean): void;

    stop_go_to(): void;

    to_surface(include_layers: boolean): cairo.Surface;

    x_to_longitude(x: number): number;

    y_to_latitude(y: number): number;

    zoom_in(): void;

    zoom_out(): void;

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

export namespace Viewport {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;

        hadjustment: Adjustment;
        vadjustment: Adjustment;
        x_origin: number;
        xOrigin: number;
        y_origin: number;
        yOrigin: number;
    }
}

export class Viewport
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    static $gtype: GObject.GType<Viewport>;

    constructor(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]): void;

    // Properties
    hadjustment: Adjustment;
    vadjustment: Adjustment;
    x_origin: number;
    xOrigin: number;
    y_origin: number;
    yOrigin: number;

    // Fields
    priv: ViewportPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'relocated', callback: (_source: this) => void): number;

    connect_after(signal: 'relocated', callback: (_source: this) => void): number;

    emit(signal: 'relocated'): void;

    // Constructors

    static ['new'](): Viewport;

    // Members

    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;

    get_anchor(x: number, y: number): void;

    get_origin(x: number, y: number): void;

    set_actor_position(actor: Clutter.Actor, x: number, y: number): void;

    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;

    set_child(child: Clutter.Actor): void;

    set_origin(x: number, y: number): void;

    stop(): void;

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

export class AdjustmentPrivate {
    static $gtype: GObject.GType<AdjustmentPrivate>;

    constructor(copy: AdjustmentPrivate);
}

export class BoundingBox {
    static $gtype: GObject.GType<BoundingBox>;

    constructor();
    constructor(
        properties?: Partial<{
            left?: number;
            top?: number;
            right?: number;
            bottom?: number;
        }>
    );

    constructor(copy: BoundingBox);

    // Fields
    left: number;
    top: number;
    right: number;
    bottom: number;

    // Constructors
    static ['new'](): BoundingBox;

    // Members
    compose(other: BoundingBox): void;

    copy(): BoundingBox;

    covers(latitude: number, longitude: number): boolean;

    extend(latitude: number, longitude: number): void;

    free(): void;

    get_center(): [number, number];

    is_valid(): boolean;
}

export class CoordinatePrivate {
    static $gtype: GObject.GType<CoordinatePrivate>;

    constructor(copy: CoordinatePrivate);
}

export class CustomMarkerPrivate {
    static $gtype: GObject.GType<CustomMarkerPrivate>;

    constructor(copy: CustomMarkerPrivate);
}

export class ErrorTileRendererPrivate {
    static $gtype: GObject.GType<ErrorTileRendererPrivate>;

    constructor(copy: ErrorTileRendererPrivate);
}

export class FileCachePrivate {
    static $gtype: GObject.GType<FileCachePrivate>;

    constructor(copy: FileCachePrivate);
}

export class FileTileSourcePrivate {
    static $gtype: GObject.GType<FileTileSourcePrivate>;

    constructor(copy: FileTileSourcePrivate);
}

export class ImageRendererPrivate {
    static $gtype: GObject.GType<ImageRendererPrivate>;

    constructor(copy: ImageRendererPrivate);
}

export class KineticScrollViewPrivate {
    static $gtype: GObject.GType<KineticScrollViewPrivate>;

    constructor(copy: KineticScrollViewPrivate);
}

export class LabelPrivate {
    static $gtype: GObject.GType<LabelPrivate>;

    constructor(copy: LabelPrivate);
}

export class LicensePrivate {
    static $gtype: GObject.GType<LicensePrivate>;

    constructor(copy: LicensePrivate);
}

export class MapSourceChainPrivate {
    static $gtype: GObject.GType<MapSourceChainPrivate>;

    constructor(copy: MapSourceChainPrivate);
}

export class MapSourceDescPrivate {
    static $gtype: GObject.GType<MapSourceDescPrivate>;

    constructor(copy: MapSourceDescPrivate);
}

export class MapSourceFactoryPrivate {
    static $gtype: GObject.GType<MapSourceFactoryPrivate>;

    constructor(copy: MapSourceFactoryPrivate);
}

export class MapSourcePrivate {
    static $gtype: GObject.GType<MapSourcePrivate>;

    constructor(copy: MapSourcePrivate);
}

export class MarkerLayerPrivate {
    static $gtype: GObject.GType<MarkerLayerPrivate>;

    constructor(copy: MarkerLayerPrivate);
}

export class MarkerPrivate {
    static $gtype: GObject.GType<MarkerPrivate>;

    constructor(copy: MarkerPrivate);
}

export class MemoryCachePrivate {
    static $gtype: GObject.GType<MemoryCachePrivate>;

    constructor(copy: MemoryCachePrivate);
}

export class NetworkBboxTileSourcePrivate {
    static $gtype: GObject.GType<NetworkBboxTileSourcePrivate>;

    constructor(copy: NetworkBboxTileSourcePrivate);
}

export class NetworkTileSourcePrivate {
    static $gtype: GObject.GType<NetworkTileSourcePrivate>;

    constructor(copy: NetworkTileSourcePrivate);
}

export class NullTileSourcePrivate {
    static $gtype: GObject.GType<NullTileSourcePrivate>;

    constructor(copy: NullTileSourcePrivate);
}

export class PathLayerPrivate {
    static $gtype: GObject.GType<PathLayerPrivate>;

    constructor(copy: PathLayerPrivate);
}

export class PointPrivate {
    static $gtype: GObject.GType<PointPrivate>;

    constructor(copy: PointPrivate);
}

export class ScalePrivate {
    static $gtype: GObject.GType<ScalePrivate>;

    constructor(copy: ScalePrivate);
}

export class TileCachePrivate {
    static $gtype: GObject.GType<TileCachePrivate>;

    constructor(copy: TileCachePrivate);
}

export class TilePrivate {
    static $gtype: GObject.GType<TilePrivate>;

    constructor(copy: TilePrivate);
}

export class TileSourcePrivate {
    static $gtype: GObject.GType<TileSourcePrivate>;

    constructor(copy: TileSourcePrivate);
}

export class ViewPrivate {
    static $gtype: GObject.GType<ViewPrivate>;

    constructor(copy: ViewPrivate);
}

export class ViewportPrivate {
    static $gtype: GObject.GType<ViewportPrivate>;

    constructor(copy: ViewportPrivate);
}

export interface ExportableNamespace {
    $gtype: GObject.GType<Exportable>;
    prototype: ExportablePrototype;
}

export type Exportable = ExportablePrototype;

export interface ExportablePrototype extends GObject.Object {
    // Properties
    surface: cairo.Surface;

    // Members

    get_surface(): cairo.Surface;

    set_surface(surface: cairo.Surface): void;

    vfunc_get_surface(): cairo.Surface;

    vfunc_set_surface(surface: cairo.Surface): void;
}

export const Exportable: ExportableNamespace;

export interface LocationNamespace {
    $gtype: GObject.GType<Location>;
    prototype: LocationPrototype;
}

export type Location = LocationPrototype;

export interface LocationPrototype extends GObject.Object {
    // Properties
    latitude: number;
    longitude: number;

    // Members

    get_latitude(): number;

    get_longitude(): number;

    set_location(latitude: number, longitude: number): void;

    vfunc_get_latitude(): number;

    vfunc_get_longitude(): number;

    vfunc_set_location(latitude: number, longitude: number): void;
}

export const Location: LocationNamespace;
