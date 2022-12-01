/**
 * MyPaint 1.5
 *
 * Generated from 1.5
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as GObject from './gobject';

export function brush_input_from_cname(cname: string): BrushInput;

export function brush_input_info(id: BrushInput): BrushInputInfo;

export function brush_setting_from_cname(cname: string): BrushSetting;

export function brush_setting_info(id: BrushSetting): BrushSettingInfo;

export type SurfaceBeginAtomicFunction = (self: Surface) => void;
export type SurfaceDestroyFunction = (self: Surface) => void;
export type SurfaceDrawDabFunction = (
    self: Surface,
    x: number,
    y: number,
    radius: number,
    color_r: number,
    color_g: number,
    color_b: number,
    opaque: number,
    hardness: number,
    alpha_eraser: number,
    aspect_ratio: number,
    angle: number,
    lock_alpha: number,
    colorize: number
) => number;
export type SurfaceEndAtomicFunction = (self: Surface, roi: Rectangle) => void;
export type SurfaceGetColorFunction = (
    self: Surface,
    x: number,
    y: number,
    radius: number,
    color_r: number,
    color_g: number,
    color_b: number,
    color_a: number
) => void;
export type SurfaceSavePngFunction = (
    self: Surface,
    path: string,
    x: number,
    y: number,
    width: number,
    height: number
) => void;
export type TileRequestEndFunction = (self: TiledSurface, request: TileRequest) => void;
export type TileRequestStartFunction = (self: TiledSurface, request: TileRequest) => void;

export namespace BrushInput {
    export const $gtype: GObject.GType<BrushInput>;
}

export enum BrushInput {
    INPUT_PRESSURE = 0,
    INPUT_SPEED1 = 1,
    INPUT_SPEED2 = 2,
    INPUT_RANDOM = 3,
    INPUT_STROKE = 4,
    INPUT_DIRECTION = 5,
    INPUT_TILT_DECLINATION = 6,
    INPUT_TILT_ASCENSION = 7,
    INPUT_CUSTOM = 8,
    INPUT_DIRECTION_ANGLE = 9,
    INPUT_ATTACK_ANGLE = 10,
    INPUT_TILT_DECLINATIONX = 11,
    INPUT_TILT_DECLINATIONY = 12,
    INPUT_GRIDMAP_X = 13,
    INPUT_GRIDMAP_Y = 14,
    INPUT_VIEWZOOM = 15,
    INPUT_BARREL_ROTATION = 16,
    INPUT_BRUSH_RADIUS = 17,
    INPUTS_COUNT = 18,
}

export namespace BrushSetting {
    export const $gtype: GObject.GType<BrushSetting>;
}

export enum BrushSetting {
    SETTING_OPAQUE = 0,
    SETTING_OPAQUE_MULTIPLY = 1,
    SETTING_OPAQUE_LINEARIZE = 2,
    SETTING_RADIUS_LOGARITHMIC = 3,
    SETTING_HARDNESS = 4,
    SETTING_ANTI_ALIASING = 5,
    SETTING_DABS_PER_BASIC_RADIUS = 6,
    SETTING_DABS_PER_ACTUAL_RADIUS = 7,
    SETTING_DABS_PER_SECOND = 8,
    SETTING_RADIUS_BY_RANDOM = 9,
    SETTING_SPEED1_SLOWNESS = 10,
    SETTING_SPEED2_SLOWNESS = 11,
    SETTING_SPEED1_GAMMA = 12,
    SETTING_SPEED2_GAMMA = 13,
    SETTING_OFFSET_BY_RANDOM = 14,
    SETTING_OFFSET_BY_SPEED = 15,
    SETTING_OFFSET_BY_SPEED_SLOWNESS = 16,
    SETTING_SLOW_TRACKING = 17,
    SETTING_SLOW_TRACKING_PER_DAB = 18,
    SETTING_TRACKING_NOISE = 19,
    SETTING_COLOR_H = 20,
    SETTING_COLOR_S = 21,
    SETTING_COLOR_V = 22,
    SETTING_RESTORE_COLOR = 23,
    SETTING_CHANGE_COLOR_H = 24,
    SETTING_CHANGE_COLOR_L = 25,
    SETTING_CHANGE_COLOR_HSL_S = 26,
    SETTING_CHANGE_COLOR_V = 27,
    SETTING_CHANGE_COLOR_HSV_S = 28,
    SETTING_SMUDGE = 29,
    SETTING_SMUDGE_LENGTH = 30,
    SETTING_SMUDGE_RADIUS_LOG = 31,
    SETTING_ERASER = 32,
    SETTING_STROKE_THRESHOLD = 33,
    SETTING_STROKE_DURATION_LOGARITHMIC = 34,
    SETTING_STROKE_HOLDTIME = 35,
    SETTING_CUSTOM_INPUT = 36,
    SETTING_CUSTOM_INPUT_SLOWNESS = 37,
    SETTING_ELLIPTICAL_DAB_RATIO = 38,
    SETTING_ELLIPTICAL_DAB_ANGLE = 39,
    SETTING_DIRECTION_FILTER = 40,
    SETTING_LOCK_ALPHA = 41,
    SETTING_COLORIZE = 42,
    SETTING_SNAP_TO_PIXEL = 43,
    SETTING_PRESSURE_GAIN_LOG = 44,
    SETTING_GRIDMAP_SCALE = 45,
    SETTING_GRIDMAP_SCALE_X = 46,
    SETTING_GRIDMAP_SCALE_Y = 47,
    SETTING_SMUDGE_LENGTH_LOG = 48,
    SETTING_SMUDGE_BUCKET = 49,
    SETTING_SMUDGE_TRANSPARENCY = 50,
    SETTING_OFFSET_Y = 51,
    SETTING_OFFSET_X = 52,
    SETTING_OFFSET_ANGLE = 53,
    SETTING_OFFSET_ANGLE_ASC = 54,
    SETTING_OFFSET_ANGLE_VIEW = 55,
    SETTING_OFFSET_ANGLE_2 = 56,
    SETTING_OFFSET_ANGLE_2_ASC = 57,
    SETTING_OFFSET_ANGLE_2_VIEW = 58,
    SETTING_OFFSET_ANGLE_ADJ = 59,
    SETTING_OFFSET_MULTIPLIER = 60,
    SETTING_POSTERIZE = 61,
    SETTING_POSTERIZE_NUM = 62,
    SETTING_PAINT_MODE = 63,
    SETTINGS_COUNT = 64,
}

export namespace BrushState {
    export const $gtype: GObject.GType<BrushState>;
}

export enum BrushState {
    STATE_X = 0,
    STATE_Y = 1,
    STATE_PRESSURE = 2,
    STATE_PARTIAL_DABS = 3,
    STATE_ACTUAL_RADIUS = 4,
    STATE_SMUDGE_RA = 5,
    STATE_SMUDGE_GA = 6,
    STATE_SMUDGE_BA = 7,
    STATE_SMUDGE_A = 8,
    STATE_LAST_GETCOLOR_R = 9,
    STATE_LAST_GETCOLOR_G = 10,
    STATE_LAST_GETCOLOR_B = 11,
    STATE_LAST_GETCOLOR_A = 12,
    STATE_LAST_GETCOLOR_RECENTNESS = 13,
    STATE_ACTUAL_X = 14,
    STATE_ACTUAL_Y = 15,
    STATE_NORM_DX_SLOW = 16,
    STATE_NORM_DY_SLOW = 17,
    STATE_NORM_SPEED1_SLOW = 18,
    STATE_NORM_SPEED2_SLOW = 19,
    STATE_STROKE = 20,
    STATE_STROKE_STARTED = 21,
    STATE_CUSTOM_INPUT = 22,
    STATE_RNG_SEED = 23,
    STATE_ACTUAL_ELLIPTICAL_DAB_RATIO = 24,
    STATE_ACTUAL_ELLIPTICAL_DAB_ANGLE = 25,
    STATE_DIRECTION_DX = 26,
    STATE_DIRECTION_DY = 27,
    STATE_DECLINATION = 28,
    STATE_ASCENSION = 29,
    STATE_VIEWZOOM = 30,
    STATE_VIEWROTATION = 31,
    STATE_DIRECTION_ANGLE_DX = 32,
    STATE_DIRECTION_ANGLE_DY = 33,
    STATE_ATTACK_ANGLE = 34,
    STATE_FLIP = 35,
    STATE_GRIDMAP_X = 36,
    STATE_GRIDMAP_Y = 37,
    STATE_DECLINATIONX = 38,
    STATE_DECLINATIONY = 39,
    STATE_DABS_PER_BASIC_RADIUS = 40,
    STATE_DABS_PER_ACTUAL_RADIUS = 41,
    STATE_DABS_PER_SECOND = 42,
    STATE_BARREL_ROTATION = 43,
    STATES_COUNT = 44,
}

export class Brush {
    static $gtype: GObject.GType<Brush>;

    constructor();
    constructor(copy: Brush);

    // Constructors
    static ['new'](): Brush;

    static new_with_buckets(num_smudge_buckets: number): Brush;

    // Members
    from_defaults(): void;

    from_string(string: string): boolean;

    get_base_value(id: BrushSetting): number;

    get_inputs_used_n(id: BrushSetting): number;

    get_mapping_n(id: BrushSetting, input: BrushInput): number;

    get_mapping_point(id: BrushSetting, input: BrushInput, index: number): [number, number];

    get_state(i: BrushState): number;

    get_total_stroke_painting_time(): number;

    is_constant(id: BrushSetting): boolean;

    new_stroke(): void;

    reset(): void;

    set_base_value(id: BrushSetting, value: number): void;

    set_mapping_n(id: BrushSetting, input: BrushInput, n: number): void;

    set_mapping_point(id: BrushSetting, input: BrushInput, index: number, x: number, y: number): void;

    set_print_inputs(enabled: boolean): void;

    set_state(i: BrushState, value: number): void;

    stroke_to(
        surface: Surface,
        x: number,
        y: number,
        pressure: number,
        xtilt: number,
        ytilt: number,
        dtime: number
    ): number;

    static input_from_cname(cname: string): BrushInput;

    static setting_from_cname(cname: string): BrushSetting;
}

export class BrushInputInfo {
    static $gtype: GObject.GType<BrushInputInfo>;

    constructor(
        properties?: Partial<{
            cname?: string;
            hard_min?: number;
            soft_min?: number;
            normal?: number;
            soft_max?: number;
            hard_max?: number;
            name?: string;
            tooltip?: string;
        }>
    );

    constructor(copy: BrushInputInfo);

    // Fields
    cname: string;
    hard_min: number;
    soft_min: number;
    normal: number;
    soft_max: number;
    hard_max: number;
    name: string;
    tooltip: string;

    // Members
    get_name(): string;

    get_tooltip(): string;
}

export class BrushSettingInfo {
    static $gtype: GObject.GType<BrushSettingInfo>;

    constructor(
        properties?: Partial<{
            cname?: string;
            name?: string;
            constant?: boolean;
            min?: number;
            def?: number;
            max?: number;
            tooltip?: string;
        }>
    );

    constructor(copy: BrushSettingInfo);

    // Fields
    cname: string;
    name: string;
    constant: boolean;
    min: number;
    def: number;
    max: number;
    tooltip: string;

    // Members
    get_name(): string;

    get_tooltip(): string;
}

export class FixedTiledSurface {
    static $gtype: GObject.GType<FixedTiledSurface>;

    constructor(width: number, height: number);
    constructor(copy: FixedTiledSurface);

    // Constructors
    static ['new'](width: number, height: number): FixedTiledSurface;

    // Members
    get_height(): number;

    get_width(): number;

    ['interface'](): Surface;
}

export class Rectangle {
    static $gtype: GObject.GType<Rectangle>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );

    constructor(copy: Rectangle);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;

    // Members
    copy(): Rectangle;

    expand_to_include_point(x: number, y: number): void;

    expand_to_include_rect(other: Rectangle): void;
}

export class Rectangles {
    static $gtype: GObject.GType<Rectangles>;

    constructor(
        properties?: Partial<{
            num_rectangles?: number;
            rectangles?: Rectangle;
        }>
    );

    constructor(copy: Rectangles);

    // Fields
    num_rectangles: number;
    rectangles: Rectangle;
}

export class Surface {
    static $gtype: GObject.GType<Surface>;

    constructor(copy: Surface);

    // Fields
    destroy: SurfaceDestroyFunction;
    refcount: number;

    // Members
    begin_atomic(): void;

    draw_dab(
        x: number,
        y: number,
        radius: number,
        color_r: number,
        color_g: number,
        color_b: number,
        opaque: number,
        hardness: number,
        alpha_eraser: number,
        aspect_ratio: number,
        angle: number,
        lock_alpha: number,
        colorize: number
    ): number;

    end_atomic(): Rectangle | null;

    get_alpha(x: number, y: number, radius: number): number;

    get_color(
        x: number,
        y: number,
        radius: number,
        color_r: number,
        color_g: number,
        color_b: number,
        color_a: number
    ): void;

    save_png(path: string, x: number, y: number, width: number, height: number): void;
}

export class TileRequest {
    static $gtype: GObject.GType<TileRequest>;

    constructor(
        properties?: Partial<{
            tx?: number;
            ty?: number;
            readonly?: boolean;
            buffer?: number;
            context?: any;
            thread_id?: number;
            mipmap_level?: number;
        }>
    );

    constructor(copy: TileRequest);

    // Fields
    tx: number;
    ty: number;
    readonly: boolean;
    buffer: number;
    context: any;
    thread_id: number;
    mipmap_level: number;

    // Members
    init(level: number, tx: number, ty: number, readonly: boolean): void;
}

export class TiledSurface {
    static $gtype: GObject.GType<TiledSurface>;

    constructor(
        properties?: Partial<{
            surface_do_symmetry?: boolean;
            surface_center_x?: number;
            operation_queue?: any;
            dirty_bbox?: Rectangle;
            threadsafe_tile_requests?: boolean;
            tile_size?: number;
        }>
    );

    constructor(copy: TiledSurface);

    // Fields
    surface_do_symmetry: boolean;
    surface_center_x: number;
    operation_queue: any;
    dirty_bbox: Rectangle;
    threadsafe_tile_requests: boolean;
    tile_size: number;

    // Members
    get_alpha(x: number, y: number, radius: number): number;

    set_symmetry_state(active: boolean, center_x: number): void;

    tile_request_end(request: TileRequest): void;

    tile_request_start(request: TileRequest): void;
}
