/**
 * GooCanvas 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as cairo from './cairo';
import * as Gdk from './gdk';
import * as GLib from './glib';
import * as GdkPixbuf from './gdkpixbuf';
import * as Pango from './pango';

export const CANVAS_POLYLINE_NUM_ARROW_POINTS: number;

export function cairo_matrix_copy(matrix: cairo.Matrix): cairo.Matrix;

export function cairo_matrix_free(matrix: cairo.Matrix): void;

export function canvas_item_class_find_child_property(iclass: GObject.Object, property_name: string): GObject.ParamSpec;

export function canvas_item_class_install_child_property(
    iclass: GObject.Object,
    property_id: number,
    pspec: GObject.ParamSpec
): void;

export function canvas_item_class_list_child_properties(iclass: GObject.Object): GObject.ParamSpec[];

export function canvas_item_model_class_find_child_property(
    mclass: GObject.Object,
    property_name: string
): GObject.ParamSpec;

export function canvas_item_model_class_install_child_property(
    mclass: GObject.Object,
    property_id: number,
    pspec: GObject.ParamSpec
): void;

export function canvas_item_model_class_list_child_properties(mclass: GObject.Object): GObject.ParamSpec[];

export type CairoMatrix = object | null;
export type CairoPattern = object | null;

export namespace CairoAntialias {
    export const $gtype: GObject.GType<CairoAntialias>;
}

export enum CairoAntialias {
    DEFAULT = 0,
    NONE = 1,
    GRAY = 2,
    SUBPIXEL = 3,
}

export namespace CairoFillRule {
    export const $gtype: GObject.GType<CairoFillRule>;
}

export enum CairoFillRule {
    WINDING = 0,
    EVEN_ODD = 1,
}

export namespace CairoHintMetrics {
    export const $gtype: GObject.GType<CairoHintMetrics>;
}

export enum CairoHintMetrics {
    DEFAULT = 0,
    OFF = 1,
    ON = 2,
}

export namespace CairoLineCap {
    export const $gtype: GObject.GType<CairoLineCap>;
}

export enum CairoLineCap {
    BUTT = 0,
    ROUND = 1,
    SQUARE = 2,
}

export namespace CairoLineJoin {
    export const $gtype: GObject.GType<CairoLineJoin>;
}

export enum CairoLineJoin {
    MITER = 0,
    ROUND = 1,
    BEVEL = 2,
}

export namespace CairoOperator {
    export const $gtype: GObject.GType<CairoOperator>;
}

export enum CairoOperator {
    CLEAR = 0,
    SOURCE = 1,
    OVER = 2,
    IN = 3,
    OUT = 4,
    ATOP = 5,
    DEST = 6,
    DEST_OVER = 7,
    DEST_IN = 8,
    DEST_OUT = 9,
    DEST_ATOP = 10,
    XOR = 11,
    ADD = 12,
    SATURATE = 13,
}

export namespace CanvasAnchorType {
    export const $gtype: GObject.GType<CanvasAnchorType>;
}

export enum CanvasAnchorType {
    CENTER = 0,
    NORTH = 1,
    NORTH_WEST = 2,
    NORTH_EAST = 3,
    SOUTH = 4,
    SOUTH_WEST = 5,
    SOUTH_EAST = 6,
    WEST = 7,
    EAST = 8,
    N = 1,
    NW = 2,
    NE = 3,
    S = 4,
    SW = 5,
    SE = 6,
    W = 7,
    E = 8,
}

export namespace CanvasAnimateType {
    export const $gtype: GObject.GType<CanvasAnimateType>;
}

export enum CanvasAnimateType {
    FREEZE = 0,
    RESET = 1,
    RESTART = 2,
    BOUNCE = 3,
}

export namespace CanvasItemVisibility {
    export const $gtype: GObject.GType<CanvasItemVisibility>;
}

export enum CanvasItemVisibility {
    HIDDEN = 0,
    INVISIBLE = 1,
    VISIBLE = 2,
    VISIBLE_ABOVE_THRESHOLD = 3,
}

export namespace CanvasPathCommandType {
    export const $gtype: GObject.GType<CanvasPathCommandType>;
}

export enum CanvasPathCommandType {
    MOVE_TO = 0,
    CLOSE_PATH = 1,
    LINE_TO = 2,
    HORIZONTAL_LINE_TO = 3,
    VERTICAL_LINE_TO = 4,
    CURVE_TO = 5,
    SMOOTH_CURVE_TO = 6,
    QUADRATIC_CURVE_TO = 7,
    SMOOTH_QUADRATIC_CURVE_TO = 8,
    ELLIPTICAL_ARC = 9,
}

export namespace CanvasPointerEvents {
    export const $gtype: GObject.GType<CanvasPointerEvents>;
}

export enum CanvasPointerEvents {
    VISIBLE_MASK = 1,
    PAINTED_MASK = 2,
    FILL_MASK = 4,
    STROKE_MASK = 8,
    NONE = 0,
    VISIBLE_PAINTED = 15,
    VISIBLE_FILL = 5,
    VISIBLE_STROKE = 9,
    VISIBLE = 13,
    PAINTED = 14,
    FILL = 4,
    STROKE = 8,
    ALL = 12,
}

export namespace Canvas {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        anchor: CanvasAnchorType;
        automatic_bounds: boolean;
        automaticBounds: boolean;
        background_color: string;
        backgroundColor: string;
        background_color_gdk_rgba: Gdk.RGBA;
        backgroundColorGdkRgba: Gdk.RGBA;
        background_color_rgb: number;
        backgroundColorRgb: number;
        bounds_from_origin: boolean;
        boundsFromOrigin: boolean;
        bounds_padding: number;
        boundsPadding: number;
        clear_background: boolean;
        clearBackground: boolean;
        integer_layout: boolean;
        integerLayout: boolean;
        redraw_when_scrolled: boolean;
        redrawWhenScrolled: boolean;
        resolution_x: number;
        resolutionX: number;
        resolution_y: number;
        resolutionY: number;
        scale: number;
        scale_x: number;
        scaleX: number;
        scale_y: number;
        scaleY: number;
        units: Gtk.Unit;
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }
}

export class Canvas extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<Canvas>;

    constructor(properties?: Partial<Canvas.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Canvas.ConstructorProperties>, ...args: any[]): void;

    // Properties
    anchor: CanvasAnchorType;
    automatic_bounds: boolean;
    automaticBounds: boolean;
    background_color: string;
    backgroundColor: string;
    background_color_gdk_rgba: Gdk.RGBA;
    backgroundColorGdkRgba: Gdk.RGBA;
    background_color_rgb: number;
    backgroundColorRgb: number;
    bounds_from_origin: boolean;
    boundsFromOrigin: boolean;
    bounds_padding: number;
    boundsPadding: number;
    clear_background: boolean;
    clearBackground: boolean;
    integer_layout: boolean;
    integerLayout: boolean;
    redraw_when_scrolled: boolean;
    redrawWhenScrolled: boolean;
    resolution_x: number;
    resolutionX: number;
    resolution_y: number;
    resolutionY: number;
    scale: number;
    scale_x: number;
    scaleX: number;
    scale_y: number;
    scaleY: number;
    units: Gtk.Unit;
    x1: number;
    x2: number;
    y1: number;
    y2: number;

    // Fields
    container: Gtk.Container;
    root_item_model: CanvasItemModel;
    root_item: CanvasItem;
    bounds: CanvasBounds;
    idle_id: number;
    need_update: number;
    need_entire_subtree_update: number;
    before_initial_draw: number;
    hscroll_policy: number | any;
    vscroll_policy: number | any;
    pointer_item: CanvasItem;
    pointer_grab_item: CanvasItem;
    pointer_grab_initial_item: CanvasItem;
    pointer_grab_button: number;
    focused_item: CanvasItem;
    keyboard_grab_item: CanvasItem;
    crossing_event: Gdk.EventCrossing;
    canvas_window: Gdk.Window;
    canvas_x_offset: number;
    canvas_y_offset: number;
    hadjustment: Gtk.Adjustment;
    vadjustment: Gtk.Adjustment;
    freeze_count: number;
    tmp_window: Gdk.Window;
    model_to_item: GLib.HashTable<any, any>;
    device_to_pixels_x: number;
    device_to_pixels_y: number;
    widget_items: any[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'item-created',
        callback: (_source: this, item: CanvasItem, model: CanvasItemModel) => void
    ): number;

    connect_after(
        signal: 'item-created',
        callback: (_source: this, item: CanvasItem, model: CanvasItemModel) => void
    ): number;

    emit(signal: 'item-created', item: CanvasItem, model: CanvasItemModel): void;

    // Implemented Properties

    hscrollPolicy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](): Canvas;

    // Members

    convert_bounds_to_item_space(item: CanvasItem, bounds: CanvasBounds): void;

    convert_from_item_space(item: CanvasItem, x: number, y: number): [number, number];

    convert_from_pixels(x: number, y: number): [number, number];

    convert_to_item_space(item: CanvasItem, x: number, y: number): [number, number];

    convert_to_pixels(x: number, y: number): [number, number];

    convert_units_from_pixels(x: number, y: number): [number, number];

    convert_units_to_pixels(x: number, y: number): [number, number];

    create_cairo_context(): cairo.Context;

    create_item(model: CanvasItemModel): CanvasItem;

    get_bounds(): [number | null, number | null, number | null, number | null];

    get_default_line_width(): number;

    get_item(model: CanvasItemModel): CanvasItem;

    get_item_at(x: number, y: number, is_pointer_event: boolean): CanvasItem;

    get_items_at(x: number, y: number, is_pointer_event: boolean): CanvasItem[];

    get_items_in_area(
        area: CanvasBounds,
        inside_area: boolean,
        allow_overlaps: boolean,
        include_containers: boolean
    ): CanvasItem[];

    get_root_item(): CanvasItem;

    get_root_item_model(): CanvasItemModel;

    get_scale(): number;

    get_static_root_item(): CanvasItem;

    get_static_root_item_model(): CanvasItemModel;

    grab_focus(item: CanvasItem): void;
    grab_focus(...args: never[]): never;

    keyboard_grab(item: CanvasItem, owner_events: boolean, time: number): Gdk.GrabStatus;

    keyboard_ungrab(item: CanvasItem, time: number): void;

    pointer_grab(item: CanvasItem, event_mask: Gdk.EventMask, cursor: Gdk.Cursor, time: number): Gdk.GrabStatus;

    pointer_ungrab(item: CanvasItem, time: number): void;

    register_widget_item(witem: CanvasWidget): void;

    render(cr: cairo.Context, bounds: CanvasBounds | null, scale: number): void;

    request_item_redraw(bounds: CanvasBounds, is_static: boolean): void;

    request_redraw(bounds: CanvasBounds): void;

    request_update(): void;

    scroll_to(left: number, top: number): void;

    set_bounds(left: number, top: number, right: number, bottom: number): void;

    set_root_item(item: CanvasItem): void;

    set_root_item_model(model: CanvasItemModel): void;

    set_scale(scale: number): void;

    set_static_root_item(item: CanvasItem): void;

    set_static_root_item_model(model: CanvasItemModel): void;

    unregister_item(model: CanvasItemModel): void;

    unregister_widget_item(witem: CanvasWidget): void;

    update(): void;

    vfunc_create_item(model: CanvasItemModel): CanvasItem;

    vfunc_item_created(item: CanvasItem, model: CanvasItemModel): void;

    static create_path(commands: CanvasPathCommand[], cr: cairo.Context): void;

    static marshal_BOOLEAN__BOXED(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static marshal_BOOLEAN__DOUBLE_DOUBLE_BOOLEAN_OBJECT(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static marshal_BOOLEAN__OBJECT_BOXED(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static marshal_VOID__INT_INT(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static marshal_VOID__OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static parse_path_data(path_data: string): CanvasPathCommand[];

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

export namespace CanvasAccessibleFactory {
    export interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class CanvasAccessibleFactory extends Atk.ObjectFactory {
    static $gtype: GObject.GType<CanvasAccessibleFactory>;

    constructor(properties?: Partial<CanvasAccessibleFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasAccessibleFactory.ConstructorProperties>, ...args: any[]): void;
}

export namespace CanvasEllipse {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        center_x: number;
        centerX: number;
        center_y: number;
        centerY: number;
        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasEllipse extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasEllipse>;

    constructor(properties?: Partial<CanvasEllipse.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasEllipse.ConstructorProperties>, ...args: any[]): void;

    // Properties
    center_x: number;
    centerX: number;
    center_y: number;
    centerY: number;
    height: number;
    radius_x: number;
    radiusX: number;
    radius_y: number;
    radiusY: number;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemSimple;
    ellipse_data: CanvasEllipseData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasEllipseModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        center_x: number;
        centerX: number;
        center_y: number;
        centerY: number;
        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasEllipseModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasEllipseModel>;

    constructor(properties?: Partial<CanvasEllipseModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasEllipseModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    center_x: number;
    centerX: number;
    center_y: number;
    centerY: number;
    height: number;
    radius_x: number;
    radiusX: number;
    radius_y: number;
    radiusY: number;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    ellipse_data: CanvasEllipseData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasGrid {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        border_color: string;
        borderColor: string;
        border_color_gdk_rgba: Gdk.RGBA;
        borderColorGdkRgba: Gdk.RGBA;
        border_color_rgba: number;
        borderColorRgba: number;
        border_pattern: CairoPattern;
        borderPattern: CairoPattern;
        border_pixbuf: GdkPixbuf.Pixbuf;
        borderPixbuf: GdkPixbuf.Pixbuf;
        border_width: number;
        borderWidth: number;
        height: number;
        horz_grid_line_color: string;
        horzGridLineColor: string;
        horz_grid_line_color_gdk_rgba: Gdk.RGBA;
        horzGridLineColorGdkRgba: Gdk.RGBA;
        horz_grid_line_color_rgba: number;
        horzGridLineColorRgba: number;
        horz_grid_line_pattern: CairoPattern;
        horzGridLinePattern: CairoPattern;
        horz_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        horzGridLinePixbuf: GdkPixbuf.Pixbuf;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        show_horz_grid_lines: boolean;
        showHorzGridLines: boolean;
        show_vert_grid_lines: boolean;
        showVertGridLines: boolean;
        vert_grid_line_color: string;
        vertGridLineColor: string;
        vert_grid_line_color_gdk_rgba: Gdk.RGBA;
        vertGridLineColorGdkRgba: Gdk.RGBA;
        vert_grid_line_color_rgba: number;
        vertGridLineColorRgba: number;
        vert_grid_line_pattern: CairoPattern;
        vertGridLinePattern: CairoPattern;
        vert_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        vertGridLinePixbuf: GdkPixbuf.Pixbuf;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        vert_grid_lines_on_top: boolean;
        vertGridLinesOnTop: boolean;
        width: number;
        x: number;
        x_offset: number;
        xOffset: number;
        x_step: number;
        xStep: number;
        y: number;
        y_offset: number;
        yOffset: number;
        y_step: number;
        yStep: number;
    }
}

export class CanvasGrid extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasGrid>;

    constructor(properties?: Partial<CanvasGrid.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasGrid.ConstructorProperties>, ...args: any[]): void;

    // Properties
    border_color: string;
    borderColor: string;
    border_color_gdk_rgba: Gdk.RGBA;
    borderColorGdkRgba: Gdk.RGBA;
    border_color_rgba: number;
    borderColorRgba: number;
    border_pattern: CairoPattern;
    borderPattern: CairoPattern;
    border_pixbuf: GdkPixbuf.Pixbuf;
    borderPixbuf: GdkPixbuf.Pixbuf;
    border_width: number;
    borderWidth: number;
    height: number;
    horz_grid_line_color: string;
    horzGridLineColor: string;
    horz_grid_line_color_gdk_rgba: Gdk.RGBA;
    horzGridLineColorGdkRgba: Gdk.RGBA;
    horz_grid_line_color_rgba: number;
    horzGridLineColorRgba: number;
    horz_grid_line_pattern: CairoPattern;
    horzGridLinePattern: CairoPattern;
    horz_grid_line_pixbuf: GdkPixbuf.Pixbuf;
    horzGridLinePixbuf: GdkPixbuf.Pixbuf;
    horz_grid_line_width: number;
    horzGridLineWidth: number;
    show_horz_grid_lines: boolean;
    showHorzGridLines: boolean;
    show_vert_grid_lines: boolean;
    showVertGridLines: boolean;
    vert_grid_line_color: string;
    vertGridLineColor: string;
    vert_grid_line_color_gdk_rgba: Gdk.RGBA;
    vertGridLineColorGdkRgba: Gdk.RGBA;
    vert_grid_line_color_rgba: number;
    vertGridLineColorRgba: number;
    vert_grid_line_pattern: CairoPattern;
    vertGridLinePattern: CairoPattern;
    vert_grid_line_pixbuf: GdkPixbuf.Pixbuf;
    vertGridLinePixbuf: GdkPixbuf.Pixbuf;
    vert_grid_line_width: number;
    vertGridLineWidth: number;
    vert_grid_lines_on_top: boolean;
    vertGridLinesOnTop: boolean;
    width: number;
    x: number;
    x_offset: number;
    xOffset: number;
    x_step: number;
    xStep: number;
    y: number;
    y_offset: number;
    yOffset: number;
    y_step: number;
    yStep: number;

    // Fields
    parent_object: CanvasItemSimple;
    grid_data: CanvasGridData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasGridModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        border_color: string;
        borderColor: string;
        border_color_gdk_rgba: Gdk.RGBA;
        borderColorGdkRgba: Gdk.RGBA;
        border_color_rgba: number;
        borderColorRgba: number;
        border_pattern: CairoPattern;
        borderPattern: CairoPattern;
        border_pixbuf: GdkPixbuf.Pixbuf;
        borderPixbuf: GdkPixbuf.Pixbuf;
        border_width: number;
        borderWidth: number;
        height: number;
        horz_grid_line_color: string;
        horzGridLineColor: string;
        horz_grid_line_color_gdk_rgba: Gdk.RGBA;
        horzGridLineColorGdkRgba: Gdk.RGBA;
        horz_grid_line_color_rgba: number;
        horzGridLineColorRgba: number;
        horz_grid_line_pattern: CairoPattern;
        horzGridLinePattern: CairoPattern;
        horz_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        horzGridLinePixbuf: GdkPixbuf.Pixbuf;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        show_horz_grid_lines: boolean;
        showHorzGridLines: boolean;
        show_vert_grid_lines: boolean;
        showVertGridLines: boolean;
        vert_grid_line_color: string;
        vertGridLineColor: string;
        vert_grid_line_color_gdk_rgba: Gdk.RGBA;
        vertGridLineColorGdkRgba: Gdk.RGBA;
        vert_grid_line_color_rgba: number;
        vertGridLineColorRgba: number;
        vert_grid_line_pattern: CairoPattern;
        vertGridLinePattern: CairoPattern;
        vert_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        vertGridLinePixbuf: GdkPixbuf.Pixbuf;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        vert_grid_lines_on_top: boolean;
        vertGridLinesOnTop: boolean;
        width: number;
        x: number;
        x_offset: number;
        xOffset: number;
        x_step: number;
        xStep: number;
        y: number;
        y_offset: number;
        yOffset: number;
        y_step: number;
        yStep: number;
    }
}

export class CanvasGridModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasGridModel>;

    constructor(properties?: Partial<CanvasGridModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasGridModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    border_color: string;
    borderColor: string;
    border_color_gdk_rgba: Gdk.RGBA;
    borderColorGdkRgba: Gdk.RGBA;
    border_color_rgba: number;
    borderColorRgba: number;
    border_pattern: CairoPattern;
    borderPattern: CairoPattern;
    border_pixbuf: GdkPixbuf.Pixbuf;
    borderPixbuf: GdkPixbuf.Pixbuf;
    border_width: number;
    borderWidth: number;
    height: number;
    horz_grid_line_color: string;
    horzGridLineColor: string;
    horz_grid_line_color_gdk_rgba: Gdk.RGBA;
    horzGridLineColorGdkRgba: Gdk.RGBA;
    horz_grid_line_color_rgba: number;
    horzGridLineColorRgba: number;
    horz_grid_line_pattern: CairoPattern;
    horzGridLinePattern: CairoPattern;
    horz_grid_line_pixbuf: GdkPixbuf.Pixbuf;
    horzGridLinePixbuf: GdkPixbuf.Pixbuf;
    horz_grid_line_width: number;
    horzGridLineWidth: number;
    show_horz_grid_lines: boolean;
    showHorzGridLines: boolean;
    show_vert_grid_lines: boolean;
    showVertGridLines: boolean;
    vert_grid_line_color: string;
    vertGridLineColor: string;
    vert_grid_line_color_gdk_rgba: Gdk.RGBA;
    vertGridLineColorGdkRgba: Gdk.RGBA;
    vert_grid_line_color_rgba: number;
    vertGridLineColorRgba: number;
    vert_grid_line_pattern: CairoPattern;
    vertGridLinePattern: CairoPattern;
    vert_grid_line_pixbuf: GdkPixbuf.Pixbuf;
    vertGridLinePixbuf: GdkPixbuf.Pixbuf;
    vert_grid_line_width: number;
    vertGridLineWidth: number;
    vert_grid_lines_on_top: boolean;
    vertGridLinesOnTop: boolean;
    width: number;
    x: number;
    x_offset: number;
    xOffset: number;
    x_step: number;
    xStep: number;
    y: number;
    y_offset: number;
    yOffset: number;
    y_step: number;
    yStep: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    grid_data: CanvasGridData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasGroup {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        height: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasGroup extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasGroup>;

    constructor(properties?: Partial<CanvasGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemSimple;
    items: any[];

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasGroupModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        height: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasGroupModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasGroupModel>;

    constructor(properties?: Partial<CanvasGroupModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasGroupModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    children: any[];

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasImage {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        alpha: number;
        height: number;
        pattern: CairoPattern;
        pixbuf: GdkPixbuf.Pixbuf;
        scale_to_fit: boolean;
        scaleToFit: boolean;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasImage extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasImage>;

    constructor(properties?: Partial<CanvasImage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasImage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alpha: number;
    height: number;
    pattern: CairoPattern;
    pixbuf: GdkPixbuf.Pixbuf;
    scale_to_fit: boolean;
    scaleToFit: boolean;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemSimple;
    image_data: CanvasImageData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasImageModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        alpha: number;
        height: number;
        pattern: CairoPattern;
        pixbuf: GdkPixbuf.Pixbuf;
        scale_to_fit: boolean;
        scaleToFit: boolean;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasImageModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasImageModel>;

    constructor(properties?: Partial<CanvasImageModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasImageModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alpha: number;
    height: number;
    pattern: CairoPattern;
    pixbuf: GdkPixbuf.Pixbuf;
    scale_to_fit: boolean;
    scaleToFit: boolean;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    image_data: CanvasImageData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasItemAccessibleFactory {
    export interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class CanvasItemAccessibleFactory extends Atk.ObjectFactory {
    static $gtype: GObject.GType<CanvasItemAccessibleFactory>;

    constructor(properties?: Partial<CanvasItemAccessibleFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasItemAccessibleFactory.ConstructorProperties>, ...args: any[]): void;
}

export namespace CanvasItemModelSimple {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        antialias: CairoAntialias;
        clip_fill_rule: CairoFillRule;
        clipFillRule: CairoFillRule;
        clip_path: string;
        clipPath: string;
        fill_color: string;
        fillColor: string;
        fill_color_gdk_rgba: Gdk.RGBA;
        fillColorGdkRgba: Gdk.RGBA;
        fill_color_rgba: number;
        fillColorRgba: number;
        fill_pattern: CairoPattern;
        fillPattern: CairoPattern;
        fill_pixbuf: GdkPixbuf.Pixbuf;
        fillPixbuf: GdkPixbuf.Pixbuf;
        fill_rule: CairoFillRule;
        fillRule: CairoFillRule;
        font: string;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        hint_metrics: CairoHintMetrics;
        hintMetrics: CairoHintMetrics;
        line_cap: CairoLineCap;
        lineCap: CairoLineCap;
        line_dash: CanvasLineDash;
        lineDash: CanvasLineDash;
        line_join: CairoLineJoin;
        lineJoin: CairoLineJoin;
        line_join_miter_limit: number;
        lineJoinMiterLimit: number;
        line_width: number;
        lineWidth: number;
        operator: CairoOperator;
        stroke_color: string;
        strokeColor: string;
        stroke_color_gdk_rgba: Gdk.RGBA;
        strokeColorGdkRgba: Gdk.RGBA;
        stroke_color_rgba: number;
        strokeColorRgba: number;
        stroke_pattern: CairoPattern;
        strokePattern: CairoPattern;
        stroke_pixbuf: GdkPixbuf.Pixbuf;
        strokePixbuf: GdkPixbuf.Pixbuf;
    }
}

export class CanvasItemModelSimple extends GObject.Object implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasItemModelSimple>;

    constructor(properties?: Partial<CanvasItemModelSimple.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasItemModelSimple.ConstructorProperties>, ...args: any[]): void;

    // Properties
    antialias: CairoAntialias;
    clip_fill_rule: CairoFillRule;
    clipFillRule: CairoFillRule;
    clip_path: string;
    clipPath: string;
    fill_color: string;
    fillColor: string;
    fill_color_gdk_rgba: Gdk.RGBA;
    fillColorGdkRgba: Gdk.RGBA;
    fill_color_rgba: number;
    fillColorRgba: number;
    fill_pattern: CairoPattern;
    fillPattern: CairoPattern;
    fill_pixbuf: GdkPixbuf.Pixbuf;
    fillPixbuf: GdkPixbuf.Pixbuf;
    fill_rule: CairoFillRule;
    fillRule: CairoFillRule;
    font: string;
    font_desc: Pango.FontDescription;
    fontDesc: Pango.FontDescription;
    hint_metrics: CairoHintMetrics;
    hintMetrics: CairoHintMetrics;
    line_cap: CairoLineCap;
    lineCap: CairoLineCap;
    line_dash: CanvasLineDash;
    lineDash: CanvasLineDash;
    line_join: CairoLineJoin;
    lineJoin: CairoLineJoin;
    line_join_miter_limit: number;
    lineJoinMiterLimit: number;
    line_width: number;
    lineWidth: number;
    operator: CairoOperator;
    stroke_color: string;
    strokeColor: string;
    stroke_color_gdk_rgba: Gdk.RGBA;
    strokeColorGdkRgba: Gdk.RGBA;
    stroke_color_rgba: number;
    strokeColorRgba: number;
    stroke_pattern: CairoPattern;
    strokePattern: CairoPattern;
    stroke_pixbuf: GdkPixbuf.Pixbuf;
    strokePixbuf: GdkPixbuf.Pixbuf;

    // Fields
    parent_object: GObject.Object;
    simple_data: CanvasItemSimpleData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasItemSimple {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        antialias: CairoAntialias;
        clip_fill_rule: CairoFillRule;
        clipFillRule: CairoFillRule;
        clip_path: string;
        clipPath: string;
        fill_color: string;
        fillColor: string;
        fill_color_gdk_rgba: Gdk.RGBA;
        fillColorGdkRgba: Gdk.RGBA;
        fill_color_rgba: number;
        fillColorRgba: number;
        fill_pattern: CairoPattern;
        fillPattern: CairoPattern;
        fill_pixbuf: GdkPixbuf.Pixbuf;
        fillPixbuf: GdkPixbuf.Pixbuf;
        fill_rule: CairoFillRule;
        fillRule: CairoFillRule;
        font: string;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        hint_metrics: CairoHintMetrics;
        hintMetrics: CairoHintMetrics;
        line_cap: CairoLineCap;
        lineCap: CairoLineCap;
        line_dash: CanvasLineDash;
        lineDash: CanvasLineDash;
        line_join: CairoLineJoin;
        lineJoin: CairoLineJoin;
        line_join_miter_limit: number;
        lineJoinMiterLimit: number;
        line_width: number;
        lineWidth: number;
        operator: CairoOperator;
        stroke_color: string;
        strokeColor: string;
        stroke_color_gdk_rgba: Gdk.RGBA;
        strokeColorGdkRgba: Gdk.RGBA;
        stroke_color_rgba: number;
        strokeColorRgba: number;
        stroke_pattern: CairoPattern;
        strokePattern: CairoPattern;
        stroke_pixbuf: GdkPixbuf.Pixbuf;
        strokePixbuf: GdkPixbuf.Pixbuf;
    }
}

export class CanvasItemSimple extends GObject.Object implements CanvasItem {
    static $gtype: GObject.GType<CanvasItemSimple>;

    constructor(properties?: Partial<CanvasItemSimple.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasItemSimple.ConstructorProperties>, ...args: any[]): void;

    // Properties
    antialias: CairoAntialias;
    clip_fill_rule: CairoFillRule;
    clipFillRule: CairoFillRule;
    clip_path: string;
    clipPath: string;
    fill_color: string;
    fillColor: string;
    fill_color_gdk_rgba: Gdk.RGBA;
    fillColorGdkRgba: Gdk.RGBA;
    fill_color_rgba: number;
    fillColorRgba: number;
    fill_pattern: CairoPattern;
    fillPattern: CairoPattern;
    fill_pixbuf: GdkPixbuf.Pixbuf;
    fillPixbuf: GdkPixbuf.Pixbuf;
    fill_rule: CairoFillRule;
    fillRule: CairoFillRule;
    font: string;
    font_desc: Pango.FontDescription;
    fontDesc: Pango.FontDescription;
    hint_metrics: CairoHintMetrics;
    hintMetrics: CairoHintMetrics;
    line_cap: CairoLineCap;
    lineCap: CairoLineCap;
    line_dash: CanvasLineDash;
    lineDash: CanvasLineDash;
    line_join: CairoLineJoin;
    lineJoin: CairoLineJoin;
    line_join_miter_limit: number;
    lineJoinMiterLimit: number;
    line_width: number;
    lineWidth: number;
    operator: CairoOperator;
    stroke_color: string;
    strokeColor: string;
    stroke_color_gdk_rgba: Gdk.RGBA;
    strokeColorGdkRgba: Gdk.RGBA;
    stroke_color_rgba: number;
    strokeColorRgba: number;
    stroke_pattern: CairoPattern;
    strokePattern: CairoPattern;
    stroke_pixbuf: GdkPixbuf.Pixbuf;
    strokePixbuf: GdkPixbuf.Pixbuf;

    // Fields
    canvas: Canvas;
    model: CanvasItemModelSimple;
    simple_data: CanvasItemSimpleData;
    bounds: CanvasBounds;
    need_update: number;
    need_entire_subtree_update: number;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Members

    changed(recompute_bounds: boolean): void;

    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean;

    check_style(): void;

    get_line_width(): number;

    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void;

    paint_path(cr: cairo.Context): void;

    set_model(model: CanvasItemModel): void;

    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void;

    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_simple_create_path(cr: cairo.Context): void;

    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean;

    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_simple_update(cr: cairo.Context): void;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasPath {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        data: string;
        height: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasPath extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasPath>;

    constructor(properties?: Partial<CanvasPath.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasPath.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data: string;
    height: number;
    width: number;
    x: number;
    y: number;

    // Fields
    path_data: CanvasPathData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasPathModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        data: string;
        height: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasPathModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasPathModel>;

    constructor(properties?: Partial<CanvasPathModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasPathModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data: string;
    height: number;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    path_data: CanvasPathData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasPolyline {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        arrow_length: number;
        arrowLength: number;
        arrow_tip_length: number;
        arrowTipLength: number;
        arrow_width: number;
        arrowWidth: number;
        close_path: boolean;
        closePath: boolean;
        end_arrow: boolean;
        endArrow: boolean;
        height: number;
        points: CanvasPoints;
        start_arrow: boolean;
        startArrow: boolean;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasPolyline extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasPolyline>;

    constructor(properties?: Partial<CanvasPolyline.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasPolyline.ConstructorProperties>, ...args: any[]): void;

    // Properties
    arrow_length: number;
    arrowLength: number;
    arrow_tip_length: number;
    arrowTipLength: number;
    arrow_width: number;
    arrowWidth: number;
    close_path: boolean;
    closePath: boolean;
    end_arrow: boolean;
    endArrow: boolean;
    height: number;
    points: CanvasPoints;
    start_arrow: boolean;
    startArrow: boolean;
    width: number;
    x: number;
    y: number;

    // Fields
    polyline_data: CanvasPolylineData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasPolylineModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        arrow_length: number;
        arrowLength: number;
        arrow_tip_length: number;
        arrowTipLength: number;
        arrow_width: number;
        arrowWidth: number;
        close_path: boolean;
        closePath: boolean;
        end_arrow: boolean;
        endArrow: boolean;
        height: number;
        points: CanvasPoints;
        start_arrow: boolean;
        startArrow: boolean;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasPolylineModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasPolylineModel>;

    constructor(properties?: Partial<CanvasPolylineModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasPolylineModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    arrow_length: number;
    arrowLength: number;
    arrow_tip_length: number;
    arrowTipLength: number;
    arrow_width: number;
    arrowWidth: number;
    close_path: boolean;
    closePath: boolean;
    end_arrow: boolean;
    endArrow: boolean;
    height: number;
    points: CanvasPoints;
    start_arrow: boolean;
    startArrow: boolean;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    polyline_data: CanvasPolylineData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasRect {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasRect extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasRect>;

    constructor(properties?: Partial<CanvasRect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasRect.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    radius_x: number;
    radiusX: number;
    radius_y: number;
    radiusY: number;
    width: number;
    x: number;
    y: number;

    // Fields
    rect_data: CanvasRectData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasRectModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasRectModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasRectModel>;

    constructor(properties?: Partial<CanvasRectModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasRectModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    radius_x: number;
    radiusX: number;
    radius_y: number;
    radiusY: number;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    rect_data: CanvasRectData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasStyle {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CanvasStyle extends GObject.Object {
    static $gtype: GObject.GType<CanvasStyle>;

    constructor(properties?: Partial<CanvasStyle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasStyle.ConstructorProperties>, ...args: any[]): void;

    // Fields
    properties: any[];

    // Constructors

    static ['new'](): CanvasStyle;

    // Members

    copy(): CanvasStyle;

    get_parent(): CanvasStyle;

    get_property(property_id: GLib.Quark): unknown;
    get_property(...args: never[]): never;

    set_fill_options(cr: cairo.Context): boolean;

    set_parent(parent: CanvasStyle): void;

    set_property(property_id: GLib.Quark, value: any): void;
    set_property(...args: never[]): never;

    set_stroke_options(cr: cairo.Context): boolean;
}

export namespace CanvasTable {
    export interface ConstructorProperties extends CanvasGroup.ConstructorProperties {
        [key: string]: any;

        column_spacing: number;
        columnSpacing: number;
        homogeneous_columns: boolean;
        homogeneousColumns: boolean;
        homogeneous_rows: boolean;
        homogeneousRows: boolean;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        row_spacing: number;
        rowSpacing: number;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        x_border_spacing: number;
        xBorderSpacing: number;
        y_border_spacing: number;
        yBorderSpacing: number;
    }
}

export class CanvasTable extends CanvasGroup implements CanvasItem {
    static $gtype: GObject.GType<CanvasTable>;

    constructor(properties?: Partial<CanvasTable.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasTable.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column_spacing: number;
    columnSpacing: number;
    homogeneous_columns: boolean;
    homogeneousColumns: boolean;
    homogeneous_rows: boolean;
    homogeneousRows: boolean;
    horz_grid_line_width: number;
    horzGridLineWidth: number;
    row_spacing: number;
    rowSpacing: number;
    vert_grid_line_width: number;
    vertGridLineWidth: number;
    x_border_spacing: number;
    xBorderSpacing: number;
    y_border_spacing: number;
    yBorderSpacing: number;

    // Fields
    table_data: CanvasTableData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasTableModel {
    export interface ConstructorProperties extends CanvasGroupModel.ConstructorProperties {
        [key: string]: any;

        column_spacing: number;
        columnSpacing: number;
        homogeneous_columns: boolean;
        homogeneousColumns: boolean;
        homogeneous_rows: boolean;
        homogeneousRows: boolean;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        row_spacing: number;
        rowSpacing: number;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        x_border_spacing: number;
        xBorderSpacing: number;
        y_border_spacing: number;
        yBorderSpacing: number;
    }
}

export class CanvasTableModel extends CanvasGroupModel implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasTableModel>;

    constructor(properties?: Partial<CanvasTableModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasTableModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column_spacing: number;
    columnSpacing: number;
    homogeneous_columns: boolean;
    homogeneousColumns: boolean;
    homogeneous_rows: boolean;
    homogeneousRows: boolean;
    horz_grid_line_width: number;
    horzGridLineWidth: number;
    row_spacing: number;
    rowSpacing: number;
    vert_grid_line_width: number;
    vertGridLineWidth: number;
    x_border_spacing: number;
    xBorderSpacing: number;
    y_border_spacing: number;
    yBorderSpacing: number;

    // Fields
    parent_object: CanvasGroupModel | any;
    table_data: CanvasTableData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasText {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        alignment: Pango.Alignment;
        anchor: CanvasAnchorType;
        ellipsize: Pango.EllipsizeMode;
        height: number;
        text: string;
        use_markup: boolean;
        useMarkup: boolean;
        width: number;
        wrap: Pango.WrapMode;
        x: number;
        y: number;
    }
}

export class CanvasText extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasText>;

    constructor(properties?: Partial<CanvasText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasText.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alignment: Pango.Alignment;
    anchor: CanvasAnchorType;
    ellipsize: Pango.EllipsizeMode;
    height: number;
    text: string;
    use_markup: boolean;
    useMarkup: boolean;
    width: number;
    wrap: Pango.WrapMode;
    x: number;
    y: number;

    // Fields
    text_data: CanvasTextData;
    layout_width: number;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Members

    get_natural_extents(): [Pango.Rectangle | null, Pango.Rectangle | null];

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasTextModel {
    export interface ConstructorProperties extends CanvasItemModelSimple.ConstructorProperties {
        [key: string]: any;

        alignment: Pango.Alignment;
        anchor: CanvasAnchorType;
        ellipsize: Pango.EllipsizeMode;
        height: number;
        text: string;
        use_markup: boolean;
        useMarkup: boolean;
        width: number;
        wrap: Pango.WrapMode;
        x: number;
        y: number;
    }
}

export class CanvasTextModel extends CanvasItemModelSimple implements CanvasItemModel {
    static $gtype: GObject.GType<CanvasTextModel>;

    constructor(properties?: Partial<CanvasTextModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasTextModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alignment: Pango.Alignment;
    anchor: CanvasAnchorType;
    ellipsize: Pango.EllipsizeMode;
    height: number;
    text: string;
    use_markup: boolean;
    useMarkup: boolean;
    width: number;
    wrap: Pango.WrapMode;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemModelSimple | any;
    text_data: CanvasTextData;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export namespace CanvasWidget {
    export interface ConstructorProperties extends CanvasItemSimple.ConstructorProperties {
        [key: string]: any;

        anchor: CanvasAnchorType;
        height: number;
        widget: Gtk.Widget;
        width: number;
        x: number;
        y: number;
    }
}

export class CanvasWidget extends CanvasItemSimple implements CanvasItem {
    static $gtype: GObject.GType<CanvasWidget>;

    constructor(properties?: Partial<CanvasWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    anchor: CanvasAnchorType;
    height: number;
    widget: Gtk.Widget;
    width: number;
    x: number;
    y: number;

    // Fields
    parent_object: CanvasItemSimple;

    // Implemented Properties

    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Implemented Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export namespace CanvasWidgetAccessibleFactory {
    export interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class CanvasWidgetAccessibleFactory extends Atk.ObjectFactory {
    static $gtype: GObject.GType<CanvasWidgetAccessibleFactory>;

    constructor(properties?: Partial<CanvasWidgetAccessibleFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CanvasWidgetAccessibleFactory.ConstructorProperties>, ...args: any[]): void;
}

export class CanvasBounds {
    static $gtype: GObject.GType<CanvasBounds>;

    constructor(
        properties?: Partial<{
            x1?: number;
            y1?: number;
            x2?: number;
            y2?: number;
        }>
    );

    constructor(copy: CanvasBounds);

    // Fields
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export class CanvasEllipseData {
    static $gtype: GObject.GType<CanvasEllipseData>;

    constructor(
        properties?: Partial<{
            center_x?: number;
            center_y?: number;
            radius_x?: number;
            radius_y?: number;
        }>
    );

    constructor(copy: CanvasEllipseData);

    // Fields
    center_x: number;
    center_y: number;
    radius_x: number;
    radius_y: number;
}

export class CanvasGridData {
    static $gtype: GObject.GType<CanvasGridData>;

    constructor(copy: CanvasGridData);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
    x_step: number;
    y_step: number;
    x_offset: number;
    y_offset: number;
    horz_grid_line_width: number;
    vert_grid_line_width: number;
    horz_grid_line_pattern: cairo.Pattern;
    vert_grid_line_pattern: cairo.Pattern;
    border_width: number;
    border_pattern: cairo.Pattern;
    show_horz_grid_lines: number;
    show_vert_grid_lines: number;
    vert_grid_lines_on_top: number;
}

export class CanvasImageData {
    static $gtype: GObject.GType<CanvasImageData>;

    constructor(copy: CanvasImageData);

    // Fields
    pattern: cairo.Pattern;
    x: number;
    y: number;
    width: number;
    height: number;
}

export class CanvasItemSimpleData {
    static $gtype: GObject.GType<CanvasItemSimpleData>;

    constructor(copy: CanvasItemSimpleData);

    // Fields
    style: CanvasStyle;
    transform: cairo.Matrix;
    clip_path_commands: any[];
    tooltip: string;
    visibility_threshold: number;
    visibility: number;
    pointer_events: number;
    can_focus: number;
    own_style: number;
    clip_fill_rule: number;
    is_static: number;
    cache_setting: number;
    has_tooltip: number;
}

export class CanvasLineDash {
    static $gtype: GObject.GType<CanvasLineDash>;

    constructor(dashes: number[]);
    constructor(
        properties?: Partial<{
            ref_count?: number;
            num_dashes?: number;
            dashes?: number;
            dash_offset?: number;
        }>
    );

    constructor(copy: CanvasLineDash);

    // Fields
    ref_count: number;
    num_dashes: number;
    dashes: number;
    dash_offset: number;

    // Constructors
    static newv(dashes: number[]): CanvasLineDash;

    // Members
    ref(): CanvasLineDash;

    set_offset(dash_offset: number): void;

    unref(): void;
}

export class CanvasPathData {
    static $gtype: GObject.GType<CanvasPathData>;

    constructor(copy: CanvasPathData);

    // Fields
    path_commands: any[];
}

export class CanvasPoints {
    static $gtype: GObject.GType<CanvasPoints>;

    constructor(num_points: number);
    constructor(
        properties?: Partial<{
            coords?: number;
            num_points?: number;
            ref_count?: number;
        }>
    );

    constructor(copy: CanvasPoints);

    // Fields
    coords: number;
    num_points: number;
    ref_count: number;

    // Constructors
    static ['new'](num_points: number): CanvasPoints;

    // Members
    get_point(idx: number): [number, number];

    ref(): CanvasPoints;

    set_point(idx: number, x: number, y: number): void;

    unref(): void;
}

export class CanvasPolylineArrowData {
    static $gtype: GObject.GType<CanvasPolylineArrowData>;

    constructor(copy: CanvasPolylineArrowData);

    // Fields
    arrow_width: number;
    arrow_length: number;
    arrow_tip_length: number;
    line_start: number[];
    line_end: number[];
    start_arrow_coords: number[];
    end_arrow_coords: number[];
}

export class CanvasPolylineData {
    static $gtype: GObject.GType<CanvasPolylineData>;

    constructor(copy: CanvasPolylineData);

    // Fields
    coords: number;
    arrow_data: CanvasPolylineArrowData;
    num_points: number;
    close_path: number;
    start_arrow: number;
    end_arrow: number;
    reconfigure_arrows: number;
}

export class CanvasRectData {
    static $gtype: GObject.GType<CanvasRectData>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            radius_x?: number;
            radius_y?: number;
        }>
    );

    constructor(copy: CanvasRectData);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
    radius_x: number;
    radius_y: number;
}

export class CanvasStyleProperty {
    static $gtype: GObject.GType<CanvasStyleProperty>;

    constructor(copy: CanvasStyleProperty);

    // Fields
    id: GLib.Quark;
    value: GObject.Value;
}

export class CanvasTableData {
    static $gtype: GObject.GType<CanvasTableData>;

    constructor(copy: CanvasTableData);

    // Fields
    width: number;
    height: number;
    dimensions: CanvasTableDimension[];
    border_width: number;
    children: any[];
    layout_data: CanvasTableLayoutData;
}

export class CanvasTableDimension {
    static $gtype: GObject.GType<CanvasTableDimension>;

    constructor(
        properties?: Partial<{
            size?: number;
            default_spacing?: number;
            spacings?: number;
            homogeneous?: number;
        }>
    );

    constructor(copy: CanvasTableDimension);

    // Fields
    size: number;
    default_spacing: number;
    spacings: number;
    homogeneous: number;
}

export class CanvasTableLayoutData {
    static $gtype: GObject.GType<CanvasTableLayoutData>;

    constructor(copy: CanvasTableLayoutData);
}

export class CanvasTextData {
    static $gtype: GObject.GType<CanvasTextData>;

    constructor(
        properties?: Partial<{
            text?: string;
            x?: number;
            y?: number;
            width?: number;
            use_markup?: number;
            anchor?: number;
            alignment?: number;
            ellipsize?: number;
            wrap?: number;
        }>
    );

    constructor(copy: CanvasTextData);

    // Fields
    text: string;
    x: number;
    y: number;
    width: number;
    use_markup: number;
    anchor: number;
    alignment: number;
    ellipsize: number;
    wrap: number;
}

export class CanvasPathCommand {
    static $gtype: GObject.GType<CanvasPathCommand>;

    constructor(copy: CanvasPathCommand);
}

export interface CanvasItemNamespace {
    $gtype: GObject.GType<CanvasItem>;
    prototype: CanvasItemPrototype;

    class_find_child_property(iclass: GObject.Object, property_name: string): GObject.ParamSpec;

    class_install_child_property(iclass: GObject.Object, property_id: number, pspec: GObject.ParamSpec): void;

    class_list_child_properties(iclass: GObject.Object): GObject.ParamSpec[];
}

export type CanvasItem = CanvasItemPrototype;

export interface CanvasItemPrototype extends GObject.Object {
    // Properties
    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Members

    add_child(child: CanvasItem, position: number): void;

    allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    ensure_updated(): void;

    find_child(child: CanvasItem): number;

    get_bounds(): CanvasBounds;

    get_canvas(): Canvas;

    get_child(child_num: number): CanvasItem;

    get_child_property(child: CanvasItem, property_name: string, value: any): void;

    get_is_static(): boolean;

    get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    get_model(): CanvasItemModel;

    get_n_children(): number;

    get_parent(): CanvasItem;

    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    get_requested_height(cr: cairo.Context, width: number): number;

    get_simple_transform(): [boolean, number, number, number, number];

    get_style(): CanvasStyle;

    get_transform(): [boolean, cairo.Matrix];

    get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    is_container(): boolean;

    is_visible(): boolean;

    lower(below?: CanvasItem | null): void;

    move_child(old_position: number, new_position: number): void;

    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    raise(above?: CanvasItem | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    request_update(): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_canvas(canvas: Canvas): void;

    set_child_property(child: CanvasItem, property_name: string, value: any): void;

    set_is_static(is_static: boolean): void;

    set_model(model: CanvasItemModel): void;

    set_parent(parent: CanvasItem): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

    vfunc_add_child(child: CanvasItem, position: number): void;

    vfunc_allocate_area(
        cr: cairo.Context,
        requested_area: CanvasBounds,
        allocated_area: CanvasBounds,
        x_offset: number,
        y_offset: number
    ): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;

    vfunc_get_bounds(): CanvasBounds;

    vfunc_get_canvas(): Canvas;

    vfunc_get_child(child_num: number): CanvasItem;

    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_is_static(): boolean;

    vfunc_get_items_at(
        x: number,
        y: number,
        cr: cairo.Context,
        is_pointer_event: boolean,
        parent_is_visible: boolean,
        found_items: CanvasItem[]
    ): CanvasItem[];

    vfunc_get_model(): CanvasItemModel;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItem;

    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;

    vfunc_get_requested_height(cr: cairo.Context, width: number): number;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(): [boolean, cairo.Matrix];

    vfunc_get_transform_for_child(child: CanvasItem): [boolean, cairo.Matrix];

    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;

    vfunc_is_visible(): boolean;

    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;

    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;

    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;

    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;

    vfunc_remove_child(child_num: number): void;

    vfunc_request_update(): void;

    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;

    vfunc_set_canvas(canvas: Canvas): void;

    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_is_static(is_static: boolean): void;

    vfunc_set_model(model: CanvasItemModel): void;

    vfunc_set_parent(parent: CanvasItem): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;

    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
}

export const CanvasItem: CanvasItemNamespace;

export interface CanvasItemModelNamespace {
    $gtype: GObject.GType<CanvasItemModel>;
    prototype: CanvasItemModelPrototype;

    class_find_child_property(mclass: GObject.Object, property_name: string): GObject.ParamSpec;

    class_install_child_property(mclass: GObject.Object, property_id: number, pspec: GObject.ParamSpec): void;

    class_list_child_properties(mclass: GObject.Object): GObject.ParamSpec[];
}

export type CanvasItemModel = CanvasItemModelPrototype;

export interface CanvasItemModelPrototype extends GObject.Object {
    // Properties
    can_focus: boolean;
    canFocus: boolean;
    description: string;
    pointer_events: CanvasPointerEvents;
    pointerEvents: CanvasPointerEvents;
    title: string;
    tooltip: string;
    transform: CairoMatrix;
    visibility: CanvasItemVisibility;
    visibility_threshold: number;
    visibilityThreshold: number;

    // Members

    add_child(child: CanvasItemModel, position: number): void;

    animate(
        x: number,
        y: number,
        scale: number,
        degrees: number,
        absolute: boolean,
        duration: number,
        step_time: number,
        type: CanvasAnimateType
    ): void;

    find_child(child: CanvasItemModel): number;

    get_child(child_num: number): CanvasItemModel;

    get_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    get_n_children(): number;

    get_parent(): CanvasItemModel;

    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;

    get_style(): CanvasStyle;

    get_transform(transform: cairo.Matrix): boolean;

    is_container(): boolean;

    lower(below?: CanvasItemModel | null): void;

    move_child(old_position: number, new_position: number): void;

    raise(above?: CanvasItemModel | null): void;

    remove(): void;

    remove_child(child_num: number): void;

    rotate(degrees: number, cx: number, cy: number): void;

    scale(sx: number, sy: number): void;

    set_child_property(child: CanvasItemModel, property_name: string, value: any): void;

    set_parent(parent: CanvasItemModel): void;

    set_simple_transform(x: number, y: number, scale: number, rotation: number): void;

    set_style(style: CanvasStyle): void;

    set_transform(transform?: cairo.Matrix | null): void;

    skew_x(degrees: number, cx: number, cy: number): void;

    skew_y(degrees: number, cx: number, cy: number): void;

    stop_animation(): void;

    translate(tx: number, ty: number): void;

    vfunc_add_child(child: CanvasItemModel, position: number): void;

    vfunc_animation_finished(stopped: boolean): void;

    vfunc_changed(recompute_bounds: boolean): void;

    vfunc_child_added(child_num: number): void;

    vfunc_child_moved(old_child_num: number, new_child_num: number): void;

    vfunc_child_notify(pspec: GObject.ParamSpec): void;

    vfunc_child_removed(child_num: number): void;

    vfunc_get_child(child_num: number): CanvasItemModel;

    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_get_n_children(): number;

    vfunc_get_parent(): CanvasItemModel;

    vfunc_get_style(): CanvasStyle;

    vfunc_get_transform(transform: cairo.Matrix): boolean;

    vfunc_move_child(old_position: number, new_position: number): void;

    vfunc_remove_child(child_num: number): void;

    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void;

    vfunc_set_parent(parent: CanvasItemModel): void;

    vfunc_set_style(style: CanvasStyle): void;

    vfunc_set_transform(transform?: cairo.Matrix | null): void;
}

export const CanvasItemModel: CanvasItemModelNamespace;
