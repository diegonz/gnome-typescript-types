/**
 * Cogl 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GL from "./gl";
import * as GObject from "./gobject";
import * as GLib from "./glib";

export const AFIRST_BIT: number;
export const A_BIT: number;
export const BGR_BIT: number;
export const DEPTH_BIT: number;
export const FIXED_0_5: number;
export const FIXED_1: number;
export const FIXED_2_PI: number;
export const FIXED_BITS: number;
export const FIXED_EPSILON: number;
export const FIXED_MAX: number;
export const FIXED_MIN: number;
export const FIXED_PI: number;
export const FIXED_PI_2: number;
export const FIXED_PI_4: number;
export const FIXED_Q: number;
export const PREMULT_BIT: number;
export const RADIANS_TO_DEGREES: number;
export const SQRTI_ARG_10_PERCENT: number;
export const SQRTI_ARG_5_PERCENT: number;
export const SQRTI_ARG_MAX: number;
export const STENCIL_BIT: number;
export const TEXTURE_MAX_WASTE: number;

export function begin_gl(): void;

export function bitmap_error_quark(): number;

export function blend_string_error_quark(): number;

export function check_extension(name: string, ext: string): Bool;

export function clear(color: Color, buffers: number): void;

export function clip_ensure(): void;

export function clip_pop(): void;

export function clip_push(x_offset: number, y_offset: number, width: number, height: number): void;

export function clip_push_rectangle(x0: number, y0: number, x1: number, y1: number): void;

export function clip_push_window_rect(x_offset: number, y_offset: number, width: number, height: number): void;

export function clip_push_window_rectangle(x_offset: number, y_offset: number, width: number, height: number): void;

export function clip_stack_restore(): void;

export function clip_stack_save(): void;

export function clutter_check_extension_CLUTTER(name: string, ext: string): Bool;

export function clutter_winsys_has_feature_CLUTTER(feature: WinsysFeature): Bool;

export function color_equal(v1?: any | null, v2?: any | null): Bool;

export function color_init_from_hsl(hue: number, saturation: number, luminance: number): Color;

export function create_program(): Handle;

export function create_shader(shader_type: ShaderType): Handle;

export function debug_matrix_print(matrix: Matrix): void;

export function disable_fog(): void;

export function double_to_int(value: number): number;

export function double_to_uint(value: number): number;

export function end_gl(): void;

export function features_available(features: FeatureFlags): Bool;

export function flush(): void;

export function frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;

export function get_backface_culling_enabled(): Bool;

export function get_bitmasks(): [number, number, number, number];

export function get_depth_test_enabled(): Bool;

export function get_features(): FeatureFlags;

export function get_modelview_matrix(): Matrix;

export function get_option_group(): GLib.OptionGroup;

export function get_projection_matrix(): Matrix;

export function get_source(): any | null;

export function get_viewport(): number[];

export function gtype_matrix_get_type(): GObject.GType;

export function handle_get_type(): GObject.GType;

export function handle_ref(handle: Handle): Handle;

export function handle_unref(handle: Handle): void;

export function is_bitmap(object?: any | null): Bool;

export function is_material(handle: Handle): Bool;

export function is_offscreen(object?: any | null): Bool;

export function is_program(handle: Handle): Bool;

export function is_shader(handle: Handle): Bool;

export function is_texture(object?: any | null): Bool;

export function is_vertex_buffer(handle: Handle): Bool;

export function is_vertex_buffer_indices(handle: Handle): Bool;

export function material_ref(material: Handle): Handle;

export function material_unref(material: Handle): void;

export function matrix_equal(v1?: any | null, v2?: any | null): Bool;

export function onscreen_clutter_backend_set_size_CLUTTER(width: number, height: number): void;

export function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;

export function perspective(fovy: number, aspect: number, z_near: number, z_far: number): void;

export function polygon(vertices: TextureVertex, n_vertices: number, use_color: Bool): void;

export function pop_draw_buffer(): void;

export function pop_framebuffer(): void;

export function pop_matrix(): void;

export function pop_source(): void;

export function program_attach_shader(program_handle: Handle, shader_handle: Handle): void;

export function program_get_uniform_location(handle: Handle, uniform_name: string): number;

export function program_link(handle: Handle): void;

export function program_ref(handle: Handle): Handle;

export function program_set_uniform_1f(program: Handle, uniform_location: number, value: number): void;

export function program_set_uniform_1i(program: Handle, uniform_location: number, value: number): void;

export function program_set_uniform_float(
    program: Handle,
    uniform_location: number,
    n_components: number,
    value: number[]
): void;

export function program_set_uniform_int(
    program: Handle,
    uniform_location: number,
    n_components: number,
    value: number[]
): void;

export function program_set_uniform_matrix(
    program: Handle,
    uniform_location: number,
    dimensions: number,
    transpose: Bool,
    value: number[]
): void;

export function program_uniform_1f(uniform_no: number, value: number): void;

export function program_uniform_1i(uniform_no: number, value: number): void;

export function program_uniform_float(uniform_no: number, size: number, value: number[]): void;

export function program_uniform_int(uniform_no: number, size: number, value: number[]): void;

export function program_uniform_matrix(uniform_no: number, size: number, transpose: Bool, value: number[]): void;

export function program_unref(handle: Handle): void;

export function program_use(handle: Handle): void;

export function push_draw_buffer(): void;

export function push_matrix(): void;

export function push_source(material?: any | null): void;

export function read_pixels(
    x: number,
    y: number,
    width: number,
    height: number,
    source: ReadPixelsFlags,
    format: PixelFormat,
    pixels: number
): void;

export function rectangle(x_1: number, y_1: number, x_2: number, y_2: number): void;

export function rectangle_with_multitexture_coords(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    tex_coords: number[],
    tex_coords_len: number
): void;

export function rectangle_with_texture_coords(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    tx1: number,
    ty1: number,
    tx2: number,
    ty2: number
): void;

export function rectangles(verts: number[], n_rects: number): void;

export function rectangles_with_texture_coords(verts: number[], n_rects: number): void;

export function rotate(angle: number, x: number, y: number, z: number): void;

export function scale(x: number, y: number, z: number): void;

export function set_backface_culling_enabled(setting: Bool): void;

export function set_depth_test_enabled(setting: Bool): void;

export function set_draw_buffer(target: BufferTarget, offscreen: Handle): void;

export function set_fog(fog_color: Color, mode: FogMode, density: number, z_near: number, z_far: number): void;

export function set_modelview_matrix(matrix: Matrix): void;

export function set_projection_matrix(matrix: Matrix): void;

export function set_source(material?: any | null): void;

export function set_source_color(color: Color): void;

export function set_source_color4f(red: number, green: number, blue: number, alpha: number): void;

export function set_source_color4ub(red: number, green: number, blue: number, alpha: number): void;

export function set_source_texture(texture: Texture): void;

export function set_viewport(x: number, y: number, width: number, height: number): void;

export function shader_compile(handle: Handle): void;

export function shader_get_info_log(handle: Handle): string;

export function shader_get_type(handle: Handle): ShaderType;

export function shader_is_compiled(handle: Handle): Bool;

export function shader_ref(handle: Handle): Handle;

export function shader_source(shader: Handle, source: string): void;

export function shader_unref(handle: Handle): void;

export function sqrti(x: number): number;

export function texture_error_quark(): number;

export function transform(matrix: Matrix): void;

export function translate(x: number, y: number, z: number): void;

export function vertex_buffer_add(
    handle: Handle,
    attribute_name: string,
    n_components: number,
    type: AttributeType,
    normalized: Bool,
    stride: number,
    pointer?: any | null
): void;

export function vertex_buffer_delete(handle: Handle, attribute_name: string): void;

export function vertex_buffer_disable(handle: Handle, attribute_name: string): void;

export function vertex_buffer_draw(handle: Handle, mode: VerticesMode, first: number, count: number): void;

export function vertex_buffer_draw_elements(
    handle: Handle,
    mode: VerticesMode,
    indices: Handle,
    min_index: number,
    max_index: number,
    indices_offset: number,
    count: number
): void;

export function vertex_buffer_enable(handle: Handle, attribute_name: string): void;

export function vertex_buffer_get_n_vertices(handle: Handle): number;

export function vertex_buffer_indices_get_for_quads(n_indices: number): Handle;

export function vertex_buffer_indices_get_type(indices: Handle): IndicesType;

export function vertex_buffer_new(n_vertices: number): Handle;

export function vertex_buffer_ref(handle: Handle): Handle;

export function vertex_buffer_submit(handle: Handle): void;

export function vertex_buffer_unref(handle: Handle): void;

export function viewport(width: number, height: number): void;

export type FuncPtr = () => void;

export namespace AttributeType {
    export const $gtype: GObject.GType<AttributeType>;
}

export enum AttributeType {
    BYTE = 5120,
    UNSIGNED_BYTE = 5121,
    SHORT = 5122,
    UNSIGNED_SHORT = 5123,
    FLOAT = 5126,
}

export namespace BitmapError {
    export const $gtype: GObject.GType<BitmapError>;
}

export enum BitmapError {
    FAILED = 0,
    UNKNOWN_TYPE = 1,
    CORRUPT_IMAGE = 2,
}

export namespace BlendStringError {
    export const $gtype: GObject.GType<BlendStringError>;
}

export enum BlendStringError {
    PARSE_ERROR = 0,
    ARGUMENT_PARSE_ERROR = 1,
    INVALID_ERROR = 2,
    GPU_UNSUPPORTED_ERROR = 3,
}

export namespace DepthTestFunction {
    export const $gtype: GObject.GType<DepthTestFunction>;
}

export enum DepthTestFunction {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}

export namespace FilterReturn {
    export const $gtype: GObject.GType<FilterReturn>;
}

export enum FilterReturn {
    CONTINUE = 0,
    REMOVE = 1,
}

export namespace FogMode {
    export const $gtype: GObject.GType<FogMode>;
}

export enum FogMode {
    LINEAR = 0,
    EXPONENTIAL = 1,
    EXPONENTIAL_SQUARED = 2,
}

export namespace IndicesType {
    export const $gtype: GObject.GType<IndicesType>;
}

export enum IndicesType {
    BYTE = 0,
    SHORT = 1,
    INT = 2,
}

export namespace MaterialAlphaFunc {
    export const $gtype: GObject.GType<MaterialAlphaFunc>;
}

export enum MaterialAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}

export namespace MaterialFilter {
    export const $gtype: GObject.GType<MaterialFilter>;
}

export enum MaterialFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}

export namespace MaterialLayerType {
    export const $gtype: GObject.GType<MaterialLayerType>;
}

export enum MaterialLayerType {
    TEXTURE = 0,
}

export namespace MaterialWrapMode {
    export const $gtype: GObject.GType<MaterialWrapMode>;
}

export enum MaterialWrapMode {
    REPEAT = 10497,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}

export namespace PixelFormat {
    export const $gtype: GObject.GType<PixelFormat>;
}

export enum PixelFormat {
    ANY = 0,
    A_8 = 17,
    RGB_565 = 4,
    RGBA_4444 = 21,
    RGBA_5551 = 22,
    YUV = 7,
    G_8 = 8,
    RG_88 = 9,
    RGB_888 = 2,
    BGR_888 = 34,
    RGBA_8888 = 19,
    BGRA_8888 = 51,
    ARGB_8888 = 83,
    ABGR_8888 = 115,
    RGBA_1010102 = 29,
    BGRA_1010102 = 61,
    ARGB_2101010 = 93,
    ABGR_2101010 = 125,
    RGBA_8888_PRE = 147,
    BGRA_8888_PRE = 179,
    ARGB_8888_PRE = 211,
    ABGR_8888_PRE = 243,
    RGBA_4444_PRE = 149,
    RGBA_5551_PRE = 150,
    RGBA_1010102_PRE = 157,
    BGRA_1010102_PRE = 189,
    ARGB_2101010_PRE = 221,
    ABGR_2101010_PRE = 253,
    DEPTH_16 = 265,
    DEPTH_32 = 259,
    DEPTH_24_STENCIL_8 = 771,
}

export namespace RendererError {
    export const $gtype: GObject.GType<RendererError>;
}

export enum RendererError {
    XLIB_DISPLAY_OPEN = 0,
    BAD_CONSTRAINT = 1,
}

export namespace ShaderType {
    export const $gtype: GObject.GType<ShaderType>;
}

export enum ShaderType {
    VERTEX = 0,
    FRAGMENT = 1,
}

export namespace StereoMode {
    export const $gtype: GObject.GType<StereoMode>;
}

export enum StereoMode {
    BOTH = 0,
    LEFT = 1,
    RIGHT = 2,
}

export namespace SystemError {
    export const $gtype: GObject.GType<SystemError>;
}

export enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED = 0,
    COGL_SYSTEM_ERROR_NO_MEMORY = 1,
}

export namespace TextureComponents {
    export const $gtype: GObject.GType<TextureComponents>;
}

export enum TextureComponents {
    A = 1,
    RG = 2,
    RGB = 3,
    RGBA = 4,
    DEPTH = 5,
}

export namespace TextureError {
    export const $gtype: GObject.GType<TextureError>;
}

export enum TextureError {
    SIZE = 0,
    FORMAT = 1,
    BAD_PARAMETER = 2,
    TYPE = 3,
}

export namespace TextureType {
    export const $gtype: GObject.GType<TextureType>;
}

export enum TextureType {
    "2D" = 0,
    "3D" = 1,
    RECTANGLE = 2,
}

export namespace VerticesMode {
    export const $gtype: GObject.GType<VerticesMode>;
}

export enum VerticesMode {
    POINTS = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6,
}

export namespace Winding {
    export const $gtype: GObject.GType<Winding>;
}

export enum Winding {
    CLOCKWISE = 0,
    COUNTER_CLOCKWISE = 1,
}

export namespace WinsysFeature {
    export const $gtype: GObject.GType<WinsysFeature>;
}

export enum WinsysFeature {
    MULTIPLE_ONSCREEN = 0,
    SWAP_THROTTLE = 1,
    VBLANK_COUNTER = 2,
    VBLANK_WAIT = 3,
    TEXTURE_FROM_PIXMAP = 4,
    SWAP_BUFFERS_EVENT = 5,
    SWAP_REGION = 6,
    SWAP_REGION_THROTTLE = 7,
    SWAP_REGION_SYNCHRONIZED = 8,
    BUFFER_AGE = 9,
    SYNC_AND_COMPLETE_EVENT = 10,
    N_FEATURES = 11,
}

export namespace BufferBit {
    export const $gtype: GObject.GType<BufferBit>;
}

export enum BufferBit {
    COLOR = 1,
    DEPTH = 2,
    STENCIL = 4,
}

export namespace BufferTarget {
    export const $gtype: GObject.GType<BufferTarget>;
}

export enum BufferTarget {
    WINDOW_BUFFER = 2,
    OFFSCREEN_BUFFER = 4,
}

export namespace ColorMask {
    export const $gtype: GObject.GType<ColorMask>;
}

export enum ColorMask {
    NONE = 0,
    RED = 1,
    GREEN = 2,
    BLUE = 4,
    ALPHA = 8,
    ALL = 15,
}

export namespace FeatureFlags {
    export const $gtype: GObject.GType<FeatureFlags>;
}

export enum FeatureFlags {
    TEXTURE_RECTANGLE = 2,
    TEXTURE_NPOT = 4,
    TEXTURE_YUV = 8,
    TEXTURE_READ_PIXELS = 16,
    SHADERS_GLSL = 32,
    OFFSCREEN = 64,
    OFFSCREEN_MULTISAMPLE = 128,
    OFFSCREEN_BLIT = 256,
    FOUR_CLIP_PLANES = 512,
    STENCIL_BUFFER = 1024,
    VBOS = 2048,
    PBOS = 4096,
    UNSIGNED_INT_INDICES = 8192,
    DEPTH_RANGE = 16384,
    TEXTURE_NPOT_BASIC = 32768,
    TEXTURE_NPOT_MIPMAP = 65536,
    TEXTURE_NPOT_REPEAT = 131072,
    POINT_SPRITE = 262144,
    TEXTURE_3D = 524288,
    SHADERS_ARBFP = 1048576,
    MAP_BUFFER_FOR_READ = 2097152,
    MAP_BUFFER_FOR_WRITE = 4194304,
    ONSCREEN_MULTIPLE = 8388608,
    DEPTH_TEXTURE = 16777216,
}

export namespace ReadPixelsFlags {
    export const $gtype: GObject.GType<ReadPixelsFlags>;
}

export enum ReadPixelsFlags {
    COLOR_BUFFER = 1,
}

export namespace TextureFlags {
    export const $gtype: GObject.GType<TextureFlags>;
}

export enum TextureFlags {
    NONE = 0,
    NO_AUTO_MIPMAP = 1,
    NO_SLICING = 2,
    NO_ATLAS = 4,
}

export module Bitmap {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Bitmap {
    static $gtype: GObject.GType<Bitmap>;

    constructor(properties?: Partial<Bitmap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Bitmap.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_from_file(filename: string): Bitmap;

    // Members

    static get_size_from_file(filename: string): [Bool, number, number];
}

export module Fixed {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Fixed {
    static $gtype: GObject.GType<Fixed>;

    constructor(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]): void;

    // Members

    pow2(): number;

    static pow(x: number, y: Fixed): number;
}

export module Offscreen {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Offscreen {
    static $gtype: GObject.GType<Offscreen>;

    constructor(properties?: Partial<Offscreen.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Offscreen.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_to_texture(texture: Texture): Offscreen;

    static new_with_texture(texture: Texture): Offscreen;

    // Members

    static ref(offscreen?: any | null): any | null;

    static unref(offscreen?: any | null): void;
}

export class Color {
    static $gtype: GObject.GType<Color>;

    constructor();
    constructor(
        properties?: Partial<{
            private_member_red?: number;
            private_member_green?: number;
            private_member_blue?: number;
            private_member_alpha?: number;
            private_member_padding0?: number;
            private_member_padding1?: number;
            private_member_padding2?: number;
        }>
    );
    constructor(copy: Color);

    // Fields
    private_member_red: number;
    private_member_green: number;
    private_member_blue: number;
    private_member_alpha: number;
    private_member_padding0: number;
    private_member_padding1: number;
    private_member_padding2: number;

    // Constructors
    static ["new"](): Color;

    // Members
    copy(): Color;

    free(): void;

    get_alpha(): number;

    get_alpha_byte(): number;

    get_alpha_float(): number;

    get_blue(): number;

    get_blue_byte(): number;

    get_blue_float(): number;

    get_green(): number;

    get_green_byte(): number;

    get_green_float(): number;

    get_red(): number;

    get_red_byte(): number;

    get_red_float(): number;

    init_from_4f(red: number, green: number, blue: number, alpha: number): void;

    init_from_4fv(color_array: number): void;

    init_from_4ub(red: number, green: number, blue: number, alpha: number): void;

    premultiply(): void;

    set_alpha(alpha: number): void;

    set_alpha_byte(alpha: number): void;

    set_alpha_float(alpha: number): void;

    set_blue(blue: number): void;

    set_blue_byte(blue: number): void;

    set_blue_float(blue: number): void;

    set_from_4f(red: number, green: number, blue: number, alpha: number): void;

    set_from_4ub(red: number, green: number, blue: number, alpha: number): void;

    set_green(green: number): void;

    set_green_byte(green: number): void;

    set_green_float(green: number): void;

    set_red(red: number): void;

    set_red_byte(red: number): void;

    set_red_float(red: number): void;

    to_hsl(): [number, number, number];

    unpremultiply(): void;

    static equal(v1?: any | null, v2?: any | null): Bool;

    static init_from_hsl(hue: number, saturation: number, luminance: number): Color;
}

export class Euler {
    static $gtype: GObject.GType<Euler>;

    constructor(copy: Euler);
}

export class Material {
    static $gtype: GObject.GType<Material>;

    constructor(copy: Material);

    // Members
    get_ambient(ambient: Color): void;

    get_color(): Color;

    get_diffuse(diffuse: Color): void;

    get_emission(emission: Color): void;

    get_layer_point_sprite_coords_enabled(layer_index: number): Bool;

    get_layer_wrap_mode_p(layer_index: number): MaterialWrapMode;

    get_layer_wrap_mode_s(layer_index: number): MaterialWrapMode;

    get_layer_wrap_mode_t(layer_index: number): MaterialWrapMode;

    get_layers(): MaterialLayer[];

    get_n_layers(): number;

    get_point_size(): number;

    get_shininess(): number;

    get_specular(specular: Color): void;

    get_user_program(): Handle;

    remove_layer(layer_index: number): void;

    set_alpha_test_function(alpha_func: MaterialAlphaFunc, alpha_reference: number): void;

    set_ambient(ambient: Color): void;

    set_ambient_and_diffuse(color: Color): void;

    set_blend(blend_string: string): Bool;

    set_blend_constant(constant_color: Color): void;

    set_color(color: Color): void;

    set_color4f(red: number, green: number, blue: number, alpha: number): void;

    set_color4ub(red: number, green: number, blue: number, alpha: number): void;

    set_diffuse(diffuse: Color): void;

    set_emission(emission: Color): void;

    set_layer(layer_index: number, texture: Handle): void;

    set_layer_combine(layer_index: number, blend_string: string): Bool;

    set_layer_combine_constant(layer_index: number, constant: Color): void;

    set_layer_filters(layer_index: number, min_filter: MaterialFilter, mag_filter: MaterialFilter): void;

    set_layer_matrix(layer_index: number, matrix: Matrix): void;

    set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool;

    set_layer_wrap_mode(layer_index: number, mode: MaterialWrapMode): void;

    set_layer_wrap_mode_p(layer_index: number, mode: MaterialWrapMode): void;

    set_layer_wrap_mode_s(layer_index: number, mode: MaterialWrapMode): void;

    set_layer_wrap_mode_t(layer_index: number, mode: MaterialWrapMode): void;

    set_point_size(point_size: number): void;

    set_shininess(shininess: number): void;

    set_specular(specular: Color): void;

    set_user_program(program: Handle): void;

    static ref(material: Handle): Handle;

    static unref(material: Handle): void;
}

export class MaterialLayer {
    static $gtype: GObject.GType<MaterialLayer>;

    constructor(copy: MaterialLayer);

    // Members
    get_mag_filter(): MaterialFilter;

    get_min_filter(): MaterialFilter;

    get_texture(): Handle;

    get_type(): MaterialLayerType;

    get_wrap_mode_p(): MaterialWrapMode;

    get_wrap_mode_s(): MaterialWrapMode;

    get_wrap_mode_t(): MaterialWrapMode;
}

export class Matrix {
    static $gtype: GObject.GType<Matrix>;

    constructor(copy: Matrix);

    // Fields
    xx: number;
    yx: number;
    zx: number;
    wx: number;
    xy: number;
    yy: number;
    zy: number;
    wy: number;
    xz: number;
    yz: number;
    zz: number;
    wz: number;
    xw: number;
    yw: number;
    zw: number;
    ww: number;
    private_member_inv: number[];
    private_member_type: number;
    private_member_flags: number;
    private_member__padding3: number;

    // Members
    copy(): Matrix;

    free(): void;

    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;

    get_array(): number;

    get_inverse(): [Bool, Matrix];

    init_from_array(array: number): void;

    init_identity(): void;

    init_translation(tx: number, ty: number, tz: number): void;

    is_identity(): Bool;

    look_at(
        eye_position_x: number,
        eye_position_y: number,
        eye_position_z: number,
        object_x: number,
        object_y: number,
        object_z: number,
        world_up_x: number,
        world_up_y: number,
        world_up_z: number
    ): void;

    multiply(a: Matrix, b: Matrix): void;

    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;

    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;

    rotate(angle: number, x: number, y: number, z: number): void;

    scale(sx: number, sy: number, sz: number): void;

    transform_point(x: number, y: number, z: number, w: number): [number, number, number, number];

    translate(x: number, y: number, z: number): void;

    transpose(): void;

    static equal(v1?: any | null, v2?: any | null): Bool;
}

export class Quaternion {
    static $gtype: GObject.GType<Quaternion>;

    constructor(copy: Quaternion);
}

export class TextureVertex {
    static $gtype: GObject.GType<TextureVertex>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            z?: number;
            tx?: number;
            ty?: number;
            color?: Color;
        }>
    );
    constructor(copy: TextureVertex);

    // Fields
    x: number;
    y: number;
    z: number;
    tx: number;
    ty: number;
    color: Color;
}

export interface TextureNamespace {
    $gtype: GObject.GType<Texture>;
    prototype: TexturePrototype;
}

export type Texture = TexturePrototype;

export interface TexturePrototype extends GObject.Object {
    // Members

    allocate(): Bool;

    get_components(): TextureComponents;

    get_data(format: PixelFormat, rowstride: number, data: number): number;

    get_data(...args: never[]): never;

    get_gl_texture(): [Bool, number | null, number | null];

    get_height(): number;

    get_max_waste(): number;

    get_premultiplied(): Bool;

    get_width(): number;

    is_sliced(): Bool;

    set_components(components: TextureComponents): void;

    set_premultiplied(premultiplied: Bool): void;

    set_region(
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        dst_width: number,
        dst_height: number,
        width: number,
        height: number,
        format: PixelFormat,
        rowstride: number,
        data: number
    ): Bool;
}

export const Texture: TextureNamespace;

export type Angle = number;
export type Bool = number;
export type Handle = any;
