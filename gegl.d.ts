/**
 * Gegl 0.4
 *
 * Generated from 0.4.26
 */

import * as Babl from './babl';
import * as GLib from './glib';
import * as GObject from './gobject';

export const AUTO_ROWSTRIDE: number;
export const CH_BACK_CENTER: number;
export const CH_BACK_LEFT: number;
export const CH_BACK_RIGHT: number;
export const CH_FRONT_CENTER: number;
export const CH_FRONT_LEFT: number;
export const CH_FRONT_LEFT_OF_CENTER: number;
export const CH_FRONT_RIGHT: number;
export const CH_FRONT_RIGHT_OF_CENTER: number;
export const CH_LAYOUT_2POINT1: number;
export const CH_LAYOUT_2_1: number;
export const CH_LAYOUT_2_2: number;
export const CH_LAYOUT_3POINT1: number;
export const CH_LAYOUT_4POINT0: number;
export const CH_LAYOUT_4POINT1: number;
export const CH_LAYOUT_5POINT0: number;
export const CH_LAYOUT_5POINT0_BACK: number;
export const CH_LAYOUT_5POINT1: number;
export const CH_LAYOUT_5POINT1_BACK: number;
export const CH_LAYOUT_6POINT0: number;
export const CH_LAYOUT_6POINT0_FRONT: number;
export const CH_LAYOUT_6POINT1: number;
export const CH_LAYOUT_6POINT1_BACK: number;
export const CH_LAYOUT_6POINT1_FRONT: number;
export const CH_LAYOUT_7POINT0: number;
export const CH_LAYOUT_7POINT0_FRONT: number;
export const CH_LAYOUT_7POINT1: number;
export const CH_LAYOUT_7POINT1_WIDE: number;
export const CH_LAYOUT_7POINT1_WIDE_BACK: number;
export const CH_LAYOUT_HEXADECAGONAL: number;
export const CH_LAYOUT_HEXAGONAL: number;
export const CH_LAYOUT_NATIVE: number;
export const CH_LAYOUT_OCTAGONAL: number;
export const CH_LAYOUT_QUAD: number;
export const CH_LAYOUT_STEREO: number;
export const CH_LAYOUT_STEREO_DOWNMIX: number;
export const CH_LAYOUT_SURROUND: number;
export const CH_LOW_FREQUENCY: number;
export const CH_LOW_FREQUENCY_2: number;
export const CH_SIDE_LEFT: number;
export const CH_SIDE_RIGHT: number;
export const CH_STEREO_LEFT: number;
export const CH_STEREO_RIGHT: number;
export const CH_SURROUND_DIRECT_LEFT: number;
export const CH_SURROUND_DIRECT_RIGHT: number;
export const CH_TOP_BACK_CENTER: number;
export const CH_TOP_BACK_LEFT: number;
export const CH_TOP_BACK_RIGHT: number;
export const CH_TOP_CENTER: number;
export const CH_TOP_FRONT_CENTER: number;
export const CH_TOP_FRONT_LEFT: number;
export const CH_TOP_FRONT_RIGHT: number;
export const CH_WIDE_LEFT: number;
export const CH_WIDE_RIGHT: number;
export const FLOAT_EPSILON: number;
export const LOOKUP_MAX_ENTRIES: number;
export const MAJOR_VERSION: number;
export const MAX_AUDIO_CHANNELS: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PARAM_NO_VALIDATE: number;

export function babl_variant(format: Babl.Object, variant: BablVariant): Babl.Object;

export function cl_disable(): void;

export function cl_init(): boolean;

export function cl_is_accelerated(): boolean;

export function config(): Config;

export function create_chain(
    ops: string,
    op_start: Node,
    op_end: Node,
    time: number,
    rel_dim: number,
    path_root: string
): void;

export function create_chain_argv(
    ops: string,
    op_start: Node,
    op_end: Node,
    time: number,
    rel_dim: number,
    path_root: string
): void;

export function exit(): void;

export function format(format_name: string): GObject.Value | null;

export function format_get_name(format: any): string | null;

export function get_version(): [number, number, number];

export function graph_dump_outputs(node: Node): void;

export function graph_dump_request(node: Node, roi: Rectangle): void;

export function has_operation(operation_type: string): boolean;

export function init(argv?: string[] | null): string[] | null;

export function is_main_thread(): boolean;

export function list_operations(): string[];

export function load_module_directory(path: string): void;

export function parallel_distribute(max_n: number, func: ParallelDistributeFunc): void;

export function parallel_distribute_area(
    area: Rectangle,
    thread_cost: number,
    split_strategy: SplitStrategy,
    func: ParallelDistributeAreaFunc
): void;

export function parallel_distribute_range(size: number, thread_cost: number, func: ParallelDistributeRangeFunc): void;

export function param_spec_audio_fragment(
    name: string,
    nick: string,
    blurb: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_color(
    name: string,
    nick: string,
    blurb: string,
    default_color: Color,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_color_from_string(
    name: string,
    nick: string,
    blurb: string,
    default_color_string: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_color_get_default(self: GObject.ParamSpec): Color;

export function param_spec_curve(
    name: string,
    nick: string,
    blurb: string,
    default_curve: Curve,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_double(
    name: string,
    nick: string,
    blurb: string,
    minimum: number,
    maximum: number,
    default_value: number,
    ui_minimum: number,
    ui_maximum: number,
    ui_gamma: number,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_enum(
    name: string,
    nick: string,
    blurb: string,
    enum_type: GObject.GType,
    default_value: number,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_file_path(
    name: string,
    nick: string,
    blurb: string,
    no_validate: boolean,
    null_ok: boolean,
    default_value: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_format(
    name: string,
    nick: string,
    blurb: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string;

export function param_spec_int(
    name: string,
    nick: string,
    blurb: string,
    minimum: number,
    maximum: number,
    default_value: number,
    ui_minimum: number,
    ui_maximum: number,
    ui_gamma: number,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_path(
    name: string,
    nick: string,
    blurb: string,
    default_path: Path,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_seed(
    name: string,
    nick: string,
    blurb: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void;

export function param_spec_string(
    name: string,
    nick: string,
    blurb: string,
    no_validate: boolean,
    null_ok: boolean,
    default_value: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function param_spec_uri(
    name: string,
    nick: string,
    blurb: string,
    no_validate: boolean,
    null_ok: boolean,
    default_value: string,
    flags: GObject.ParamFlags
): GObject.ParamSpec;

export function rectangle_infinite_plane(): Rectangle;

export function reset_stats(): void;

export function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag): string;

export function stats(): Stats;

export type LookupFunction = (value: number, data?: any | null) => number;
export type NodeFunction = (node: PathItem) => void;
export type ParallelDistributeAreaFunc = (area: Rectangle) => void;
export type ParallelDistributeFunc = (i: number, n: number) => void;
export type ParallelDistributeRangeFunc = (offset: number, size: number) => void;
export type SamplerGetFun = (
    self: Sampler,
    x: number,
    y: number,
    scale: BufferMatrix2,
    output: any | null,
    repeat_mode: AbyssPolicy
) => void;
export type TileCallback = (tile: Tile) => void;
export type TileSourceCommand = (
    gegl_tile_source: TileSource,
    command: TileCommand,
    x: number,
    y: number,
    z: number,
    data?: any | null
) => any | null;

export namespace AbyssPolicy {
    export const $gtype: GObject.GType<AbyssPolicy>;
}

export enum AbyssPolicy {
    NONE = 0,
    CLAMP = 1,
    LOOP = 2,
    BLACK = 3,
    WHITE = 4,
}

export namespace BablVariant {
    export const $gtype: GObject.GType<BablVariant>;
}

export enum BablVariant {
    FLOAT = 0,
    LINEAR = 1,
    NON_LINEAR = 2,
    PERCEPTUAL = 3,
    LINEAR_PREMULTIPLIED = 4,
    PERCEPTUAL_PREMULTIPLIED = 5,
    LINEAR_PREMULTIPLIED_IF_ALPHA = 6,
    PERCEPTUAL_PREMULTIPLIED_IF_ALPHA = 7,
    ADD_ALPHA = 8,
}

export namespace CachePolicy {
    export const $gtype: GObject.GType<CachePolicy>;
}

export enum CachePolicy {
    AUTO = 0,
    NEVER = 1,
    ALWAYS = 2,
}

export namespace DistanceMetric {
    export const $gtype: GObject.GType<DistanceMetric>;
}

export enum DistanceMetric {
    EUCLIDEAN = 0,
    MANHATTAN = 1,
    CHEBYSHEV = 2,
}

export namespace DitherMethod {
    export const $gtype: GObject.GType<DitherMethod>;
}

export enum DitherMethod {
    NONE = 0,
    FLOYD_STEINBERG = 1,
    BAYER = 2,
    RANDOM = 3,
    RANDOM_COVARIANT = 4,
    ADD = 5,
    ADD_COVARIANT = 6,
    XOR = 7,
    XOR_COVARIANT = 8,
}

export namespace MapFlags {
    export const $gtype: GObject.GType<MapFlags>;
}

export enum MapFlags {
    MAP_EXCLUDE_UNMAPPED = 1,
}

export namespace Orientation {
    export const $gtype: GObject.GType<Orientation>;
}

export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}

export namespace RectangleAlignment {
    export const $gtype: GObject.GType<RectangleAlignment>;
}

export enum RectangleAlignment {
    SUBSET = 0,
    SUPERSET = 1,
    NEAREST = 2,
}

export namespace ResolutionUnit {
    export const $gtype: GObject.GType<ResolutionUnit>;
}

export enum ResolutionUnit {
    NONE = 0,
    DPI = 1,
    DPM = 2,
}

export namespace SamplerType {
    export const $gtype: GObject.GType<SamplerType>;
}

export enum SamplerType {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    NOHALO = 3,
    LOHALO = 4,
}

export namespace SplitStrategy {
    export const $gtype: GObject.GType<SplitStrategy>;
}

export enum SplitStrategy {
    AUTO = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}

export namespace TileCommand {
    export const $gtype: GObject.GType<TileCommand>;
}

export enum TileCommand {
    EGL_TILE_IDLE = 0,
    EGL_TILE_SET = 1,
    EGL_TILE_GET = 2,
    EGL_TILE_IS_CACHED = 3,
    EGL_TILE_EXIST = 4,
    EGL_TILE_VOID = 5,
    EGL_TILE_FLUSH = 6,
    EGL_TILE_REFETCH = 7,
    EGL_TILE_REINIT = 8,
    GEGL_TILE_LAST_0_4_8_COMMAND = 9,
    EGL_TILE_COPY = 9,
    EGL_TILE_LAST_COMMAND = 10,
}

export namespace AccessMode {
    export const $gtype: GObject.GType<AccessMode>;
}

export enum AccessMode {
    READ = 1,
    WRITE = 2,
    READWRITE = 3,
}

export namespace BlitFlags {
    export const $gtype: GObject.GType<BlitFlags>;
}

export enum BlitFlags {
    DEFAULT = 0,
    CACHE = 1,
    DIRTY = 2,
}

export namespace PadType {
    export const $gtype: GObject.GType<PadType>;
}

export enum PadType {
    OUTPUT = 256,
    INPUT = 512,
}

export namespace SerializeFlag {
    export const $gtype: GObject.GType<SerializeFlag>;
}

export enum SerializeFlag {
    TRIM_DEFAULTS = 1,
    VERSION = 2,
    INDENT = 4,
    BAKE_ANIM = 8,
}

export namespace AudioFragment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        string: string;
    }
}

export class AudioFragment extends GObject.Object {
    static $gtype: GObject.GType<AudioFragment>;

    constructor(properties?: Partial<AudioFragment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AudioFragment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    string: string;

    // Fields
    data: number[];
    priv: AudioFragmentPrivate;

    // Constructors

    static ['new'](sample_rate: number, channels: number, channel_layout: number, max_samples: number): AudioFragment;

    // Members

    get_channel_layout(): number;

    get_channels(): number;

    get_max_samples(): number;

    get_pos(): number;

    get_sample_count(): number;

    get_sample_rate(): number;

    set_channel_layout(channel_layout: number): void;

    set_channels(channels: number): void;

    set_max_samples(max_samples: number): void;

    set_pos(pos: number): void;

    set_sample_count(sample_count: number): void;

    set_sample_rate(sample_rate: number): void;
}

export namespace Buffer {
    export interface ConstructorProperties extends TileHandler.ConstructorProperties {
        [key: string]: any;

        abyss_height: number;
        abyssHeight: number;
        abyss_width: number;
        abyssWidth: number;
        abyss_x: number;
        abyssX: number;
        abyss_y: number;
        abyssY: number;
        backend: TileBackend;
        format: any;
        height: number;
        initialized: boolean;
        path: string;
        pixels: number;
        px_size: number;
        pxSize: number;
        shift_x: number;
        shiftX: number;
        shift_y: number;
        shiftY: number;
        tile_height: number;
        tileHeight: number;
        tile_width: number;
        tileWidth: number;
        width: number;
        x: number;
        y: number;
    }
}

export class Buffer extends TileHandler {
    static $gtype: GObject.GType<Buffer>;

    constructor(properties?: Partial<Buffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Buffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    abyss_height: number;
    abyssHeight: number;
    abyss_width: number;
    abyssWidth: number;
    abyss_x: number;
    abyssX: number;
    abyss_y: number;
    abyssY: number;
    backend: TileBackend;
    format: any;
    height: number;
    initialized: boolean;
    path: string;
    pixels: number;
    px_size: number;
    pxSize: number;
    shift_x: number;
    shiftX: number;
    shift_y: number;
    shiftY: number;
    tile_height: number;
    tileHeight: number;
    tile_width: number;
    tileWidth: number;
    width: number;
    x: number;
    y: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: Rectangle) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: Rectangle) => void): number;

    emit(signal: 'changed', object: Rectangle): void;

    // Constructors

    static ['new'](format_name: string, x: number, y: number, width: number, height: number): Buffer;

    static new_for_backend(extent: Rectangle, backend: TileBackend): Buffer;

    // Members

    add_handler(handler?: any | null): void;

    clear(roi: Rectangle): void;

    copy(src_rect: Rectangle, repeat_mode: AbyssPolicy, dst: Buffer, dst_rect: Rectangle): void;

    create_sub_buffer(extent: Rectangle): Buffer;

    dup(): Buffer;

    flush(): void;

    flush_ext(rect: Rectangle): void;

    freeze_changed(): void;

    get_abyss(): Rectangle;

    get_extent(): Rectangle;

    get(rect: Rectangle, scale: number, format_name: string | null, repeat_mode: AbyssPolicy): Uint8Array;

    set(rect: Rectangle, format_name: string, src: Uint8Array | string): void;
    set(...args: never[]): never;

    linear_close(linear?: any | null): void;

    remove_handler(handler?: any | null): void;

    sample_cleanup(): void;

    save(path: string, roi: Rectangle): void;

    set_abyss(abyss: Rectangle): boolean;

    set_color(rect: Rectangle, color: Color): void;

    set_color_from_pixel(rect: Rectangle, pixel: any | null, pixel_format: Babl.Object): void;

    set_extent(extent: Rectangle): boolean;

    set_pattern(rect: Rectangle, pattern: Buffer, x_offset: number, y_offset: number): void;

    share_storage(buffer2: Buffer): boolean;

    signal_connect(detailed_signal: string, c_handler: GObject.Callback): number;

    thaw_changed(): void;

    static load(path: string): Buffer;

    static open(path: string): Buffer;

    static swap_create_file(suffix?: string | null): string | null;

    static swap_has_file(path: string): boolean;

    static swap_remove_file(path: string): void;
}

export namespace Color {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        string: string;
    }
}

export class Color extends GObject.Object {
    static $gtype: GObject.GType<Color>;

    constructor(properties?: Partial<Color.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Color.ConstructorProperties>, ...args: any[]): void;

    // Properties
    string: string;

    // Fields
    priv: ColorPrivate;

    // Constructors

    static ['new'](string: string): Color;

    // Members

    duplicate(): Color;

    get_components(format: any): number[];

    get_format(): Babl.Object;

    get_rgba(): [number, number, number, number];

    set_components(format: any, components: number[]): void;

    set_rgba(red: number, green: number, blue: number, alpha: number): void;
}

export namespace Config {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        application_license: string;
        applicationLicense: string;
        chunk_size: number;
        chunkSize: number;
        mipmap_rendering: boolean;
        mipmapRendering: boolean;
        quality: number;
        queue_size: number;
        queueSize: number;
        swap: string;
        swap_compression: string;
        swapCompression: string;
        threads: number;
        tile_cache_size: number;
        tileCacheSize: number;
        tile_height: number;
        tileHeight: number;
        tile_width: number;
        tileWidth: number;
        use_opencl: boolean;
        useOpencl: boolean;
    }
}

export class Config extends GObject.Object {
    static $gtype: GObject.GType<Config>;

    constructor(properties?: Partial<Config.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Config.ConstructorProperties>, ...args: any[]): void;

    // Properties
    application_license: string;
    applicationLicense: string;
    chunk_size: number;
    chunkSize: number;
    mipmap_rendering: boolean;
    mipmapRendering: boolean;
    quality: number;
    queue_size: number;
    queueSize: number;
    swap: string;
    swap_compression: string;
    swapCompression: string;
    threads: number;
    tile_cache_size: number;
    tileCacheSize: number;
    tile_height: number;
    tileHeight: number;
    tile_width: number;
    tileWidth: number;
    use_opencl: boolean;
    useOpencl: boolean;
}

export namespace Curve {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Curve extends GObject.Object {
    static $gtype: GObject.GType<Curve>;

    constructor(properties?: Partial<Curve.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Curve.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](y_min: number, y_max: number): Curve;

    static new_default(): Curve;

    // Members

    add_point(x: number, y: number): number;

    calc_value(x: number): number;

    duplicate(): Curve;

    get_point(index: number): [number, number];

    get_y_bounds(): [number, number];

    num_points(): number;

    set_point(index: number, x: number, y: number): void;
}

export namespace MetadataHash {
    export interface ConstructorProperties extends MetadataStore.ConstructorProperties {
        [key: string]: any;
    }
}

export class MetadataHash extends MetadataStore implements Metadata {
    static $gtype: GObject.GType<MetadataHash>;

    constructor(properties?: Partial<MetadataHash.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MetadataHash.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): MetadataHash;

    // Implemented Members

    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    iter_get_value(iter: MetadataIter, value: any): boolean;

    iter_init(iter: MetadataIter): void;

    iter_lookup(iter: MetadataIter, key: string): boolean;

    iter_next(iter: MetadataIter): string;

    iter_set_value(iter: MetadataIter, value: any): boolean;

    register_map(file_module: string, flags: number, map: MetadataMap[]): void;

    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    unregister_map(): void;

    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean;

    vfunc_iter_init(iter: MetadataIter): void;

    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean;

    vfunc_iter_next(iter: MetadataIter): string;

    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean;

    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void;

    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
}

export namespace MetadataStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        artist: string;
        comment: string;
        copyright: string;
        description: string;
        disclaimer: string;
        file_module_name: string;
        fileModuleName: string;
        resolution_unit: ResolutionUnit;
        resolutionUnit: ResolutionUnit;
        resolution_x: number;
        resolutionX: number;
        resolution_y: number;
        resolutionY: number;
        software: string;
        source: string;
        timestamp: GLib.DateTime;
        title: string;
        warning: string;
    }
}

export abstract class MetadataStore extends GObject.Object implements Metadata {
    static $gtype: GObject.GType<MetadataStore>;

    constructor(properties?: Partial<MetadataStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MetadataStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    artist: string;
    comment: string;
    copyright: string;
    description: string;
    disclaimer: string;
    file_module_name: string;
    fileModuleName: string;
    resolution_unit: ResolutionUnit;
    resolutionUnit: ResolutionUnit;
    resolution_x: number;
    resolutionX: number;
    resolution_y: number;
    resolutionY: number;
    software: string;
    source: string;
    timestamp: GLib.DateTime;
    title: string;
    warning: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, pspec: GObject.ParamSpec) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, pspec: GObject.ParamSpec) => void): number;

    emit(signal: 'changed', pspec: GObject.ParamSpec): void;

    connect(
        signal: 'generate-value',
        callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean
    ): number;

    connect_after(
        signal: 'generate-value',
        callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean
    ): number;

    emit(signal: 'generate-value', pspec: GObject.ParamSpec, value: any): void;

    connect(
        signal: 'mapped',
        callback: (_source: this, file_module: string, exclude_unmapped: boolean) => void
    ): number;

    connect_after(
        signal: 'mapped',
        callback: (_source: this, file_module: string, exclude_unmapped: boolean) => void
    ): number;

    emit(signal: 'mapped', file_module: string, exclude_unmapped: boolean): void;

    connect(
        signal: 'parse-value',
        callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean
    ): number;

    connect_after(
        signal: 'parse-value',
        callback: (_source: this, pspec: GObject.ParamSpec, value: GObject.Value) => boolean
    ): number;

    emit(signal: 'parse-value', pspec: GObject.ParamSpec, value: any): void;

    connect(signal: 'unmapped', callback: (_source: this, file_module: string, local_name: string) => void): number;

    connect_after(
        signal: 'unmapped',
        callback: (_source: this, file_module: string, local_name: string) => void
    ): number;

    emit(signal: 'unmapped', file_module: string, local_name: string): void;

    // Members

    declare(pspec: GObject.ParamSpec): void;

    get_artist(): string;

    get_comment(): string;

    get_copyright(): string;

    get_description(): string;

    get_disclaimer(): string;

    get_file_module_name(): string;

    get_resolution_unit(): ResolutionUnit;

    get_resolution_x(): number;

    get_resolution_y(): number;

    get_software(): string;

    get_source(): string;

    get_string(name: string): string;

    get_timestamp(): GLib.DateTime;

    get_title(): string;

    get_value(name: string, value: any): unknown;

    get_warning(): string;

    has_value(name: string): boolean;

    notify(pspec: GObject.ParamSpec, shadow: boolean): void;
    notify(...args: never[]): never;

    register(local_name: string, name: string, transform: GObject.ValueTransform): void;

    set_artist(artist: string): void;

    set_comment(comment: string): void;

    set_copyright(copyright: string): void;

    set_description(description: string): void;

    set_disclaimer(disclaimer: string): void;

    set_resolution_unit(unit: ResolutionUnit): void;

    set_resolution_x(resolution_x: number): void;

    set_resolution_y(resolution_y: number): void;

    set_software(software: string): void;

    set_source(source: string): void;

    set_string(name: string, string: string): void;

    set_timestamp(timestamp: GLib.DateTime): void;

    set_title(title: string): void;

    set_value(name: string, value: any): void;

    set_warning(warning: string): void;

    typeof_value(name: string): GObject.GType;

    vfunc__declare(pspec: GObject.ParamSpec, shadow: boolean): void;

    vfunc__get_value(name: string): unknown;

    vfunc_has_value(name: string): boolean;

    vfunc_register_hook(file_module_name: string, flags: number): void;

    vfunc_set_value(name: string, value: any): void;

    // Implemented Members

    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    iter_get_value(iter: MetadataIter, value: any): boolean;

    iter_init(iter: MetadataIter): void;

    iter_lookup(iter: MetadataIter, key: string): boolean;

    iter_next(iter: MetadataIter): string;

    iter_set_value(iter: MetadataIter, value: any): boolean;

    register_map(file_module: string, flags: number, map: MetadataMap[]): void;

    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    unregister_map(): void;

    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean;

    vfunc_iter_init(iter: MetadataIter): void;

    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean;

    vfunc_iter_next(iter: MetadataIter): string;

    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean;

    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void;

    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
}

export namespace Node {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        cache_policy: CachePolicy;
        cachePolicy: CachePolicy;
        dont_cache: boolean;
        dontCache: boolean;
        gegl_operation: Operation;
        geglOperation: Operation;
        name: string;
        operation: string;
        passthrough: boolean;
        use_opencl: boolean;
        useOpencl: boolean;
    }
}

export class Node extends GObject.Object {
    static $gtype: GObject.GType<Node>;

    constructor(properties?: Partial<Node.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Node.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_policy: CachePolicy;
    cachePolicy: CachePolicy;
    dont_cache: boolean;
    dontCache: boolean;
    gegl_operation: Operation;
    geglOperation: Operation;
    name: string;
    operation: string;
    passthrough: boolean;
    use_opencl: boolean;
    useOpencl: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'computed', callback: (_source: this, object: Rectangle) => void): number;

    connect_after(signal: 'computed', callback: (_source: this, object: Rectangle) => void): number;

    emit(signal: 'computed', object: Rectangle): void;

    connect(signal: 'invalidated', callback: (_source: this, object: Rectangle) => void): number;

    connect_after(signal: 'invalidated', callback: (_source: this, object: Rectangle) => void): number;

    emit(signal: 'invalidated', object: Rectangle): void;

    connect(signal: 'progress', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'progress', callback: (_source: this, object: number) => void): number;

    emit(signal: 'progress', object: number): void;

    // Constructors

    static ['new'](): Node;

    static new_from_file(path: string): Node;

    static new_from_serialized(chaindata: string, path_root: string): Node;

    static new_from_xml(xmldata: string, path_root: string): Node;

    // Members

    add_child(child: Node): Node;

    blit_buffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyss_policy: AbyssPolicy): void;

    connect_from(input_pad_name: string, source: Node, output_pad_name: string): boolean;

    connect_to(output_pad_name: string, sink: Node, input_pad_name: string): boolean;

    create_child(operation: string): Node;

    detect(x: number, y: number): Node;

    disconnect(input_pad: string): boolean;
    disconnect(...args: never[]): never;

    find_property(property_name: string): GObject.ParamSpec;

    get_children(): Node[];

    get_consumers(output_pad: string): [number, Node[] | null, string[] | null];

    get_gegl_operation(): Operation | null;

    get_input_proxy(pad_name: string): Node;

    get_operation(): string;

    get_output_proxy(pad_name: string): Node;

    get_parent(): Node;

    get_passthrough(): boolean;

    get_producer(input_pad_name: string, output_pad_name?: string | null): Node;

    has_pad(pad_name: string): boolean;

    get_bounding_box(): Rectangle;

    get_property(property_name: string): unknown;
    get_property(...args: never[]): never;

    is_graph(): boolean;

    link(sink: Node): void;

    list_input_pads(): string[];

    list_output_pads(): string[];

    new_processor(rectangle: Rectangle): Processor;

    process(): void;

    progress(progress: number, message: string): void;

    remove_child(child: Node): Node;

    set_passthrough(passthrough: boolean): void;

    set_property(property_name: string, value: any): void;
    set_property(...args: never[]): never;

    set_time(time: number): void;

    to_xml(path_root: string): string;

    to_xml_full(tail: Node | null, path_root: string): string;
}

export namespace Operation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Operation extends GObject.Object {
    static $gtype: GObject.GType<Operation>;

    constructor(properties?: Partial<Operation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Operation.ConstructorProperties>, ...args: any[]): void;

    // Members

    static find_property(operation_type: string, property_name: string): GObject.ParamSpec;

    static get_key(operation_type: string, key_name: string): string;

    static get_op_version(op_name: string): string;

    static get_property_key(operation_type: string, property_name: string, property_key_name: string): string;

    static list_keys(operation_type: string): string[];

    static list_properties(operation_type: string): GObject.ParamSpec[];

    static list_property_keys(operation_type: string, property_name: string): string[];
}

export namespace ParamAudioFragment {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamAudioFragment extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamAudioFragment>;

    constructor(properties?: Partial<ParamAudioFragment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamAudioFragment.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamColor {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamColor extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamColor>;

    constructor(properties?: Partial<ParamColor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamColor.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamCurve {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamCurve extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamCurve>;

    constructor(properties?: Partial<ParamCurve.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamCurve.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamDouble {
    export interface ConstructorProperties extends GObject.ParamSpecDouble.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamDouble extends GObject.ParamSpecDouble {
    static $gtype: GObject.GType<ParamDouble>;

    constructor(properties?: Partial<ParamDouble.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamDouble.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamEnum {
    export interface ConstructorProperties<A = unknown> extends GObject.ParamSpecEnum.ConstructorProperties<A> {
        [key: string]: any;
    }
}

export class ParamEnum<A = unknown> extends GObject.ParamSpecEnum<A> {
    static $gtype: GObject.GType<ParamEnum>;

    constructor(properties?: Partial<ParamEnum.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<ParamEnum.ConstructorProperties<A>>, ...args: any[]): void;
}

export namespace ParamFilePath {
    export interface ConstructorProperties extends GObject.ParamSpecString.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamFilePath extends GObject.ParamSpecString {
    static $gtype: GObject.GType<ParamFilePath>;

    constructor(properties?: Partial<ParamFilePath.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamFilePath.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamFormat {
    export interface ConstructorProperties extends GObject.ParamSpecPointer.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamFormat extends GObject.ParamSpecPointer {
    static $gtype: GObject.GType<ParamFormat>;

    constructor(properties?: Partial<ParamFormat.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamFormat.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamInt {
    export interface ConstructorProperties extends GObject.ParamSpecInt.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamInt extends GObject.ParamSpecInt {
    static $gtype: GObject.GType<ParamInt>;

    constructor(properties?: Partial<ParamInt.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamInt.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamPath {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamPath extends GObject.ParamSpec {
    static $gtype: GObject.GType<ParamPath>;

    constructor(properties?: Partial<ParamPath.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamPath.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamSeed {
    export interface ConstructorProperties extends GObject.ParamSpecUInt.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamSeed extends GObject.ParamSpecUInt {
    static $gtype: GObject.GType<ParamSeed>;

    constructor(properties?: Partial<ParamSeed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamSeed.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamString {
    export interface ConstructorProperties extends GObject.ParamSpecString.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamString extends GObject.ParamSpecString {
    static $gtype: GObject.GType<ParamString>;

    constructor(properties?: Partial<ParamString.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamString.ConstructorProperties>, ...args: any[]): void;
}

export namespace ParamUri {
    export interface ConstructorProperties extends GObject.ParamSpecString.ConstructorProperties {
        [key: string]: any;
    }
}

export class ParamUri extends GObject.ParamSpecString {
    static $gtype: GObject.GType<ParamUri>;

    constructor(properties?: Partial<ParamUri.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParamUri.ConstructorProperties>, ...args: any[]): void;
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

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'changed', object: any | null): void;

    // Constructors

    static ['new'](): Path;

    static new_from_string(instructions: string): Path;

    // Members

    calc(pos: number): [boolean, number, number];

    calc_y_for_x(x: number): [number, number];

    clear(): void;

    closest_point(x: number, y: number): [number, number, number, number];

    dirty(): void;

    foreach(each_item: NodeFunction): void;

    foreach_flat(each_item: NodeFunction): void;

    freeze(): void;

    get_bounds(): [number, number, number, number];

    get_length(): number;

    get_matrix(): Matrix3;

    get_n_nodes(): number;

    get_node(index: number): [boolean, PathItem];

    insert_node(pos: number, node: PathItem): void;

    is_empty(): boolean;

    parse_string(instructions: string): void;

    remove_node(pos: number): void;

    replace_node(pos: number, node: PathItem): void;

    set_matrix(matrix: Matrix3): void;

    thaw(): void;

    to_string(): string;

    static add_type(type: number, items: number, description: string): void;
}

export namespace Processor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        chunksize: number;
        node: Node;
        progress: number;
        rectangle: any;
    }
}

export class Processor extends GObject.Object {
    static $gtype: GObject.GType<Processor>;

    constructor(properties?: Partial<Processor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Processor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    chunksize: number;
    node: Node;
    progress: number;
    rectangle: any;

    // Members

    get_buffer(): Buffer;

    set_level(level: number): void;

    set_rectangle(rectangle: Rectangle): void;

    set_scale(scale: number): void;

    work(): [boolean, number];
}

export namespace Stats {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        active_threads: number;
        activeThreads: number;
        assigned_threads: number;
        assignedThreads: number;
        scratch_total: number;
        scratchTotal: number;
        swap_busy: boolean;
        swapBusy: boolean;
        swap_file_size: number;
        swapFileSize: number;
        swap_queue_full: boolean;
        swapQueueFull: boolean;
        swap_queue_stalls: number;
        swapQueueStalls: number;
        swap_queued_total: number;
        swapQueuedTotal: number;
        swap_read_total: number;
        swapReadTotal: number;
        swap_reading: boolean;
        swapReading: boolean;
        swap_total: number;
        swapTotal: number;
        swap_total_uncompressed: number;
        swapTotalUncompressed: number;
        swap_write_total: number;
        swapWriteTotal: number;
        swap_writing: boolean;
        swapWriting: boolean;
        tile_alloc_total: number;
        tileAllocTotal: number;
        tile_cache_hits: number;
        tileCacheHits: number;
        tile_cache_misses: number;
        tileCacheMisses: number;
        tile_cache_total: number;
        tileCacheTotal: number;
        tile_cache_total_max: number;
        tileCacheTotalMax: number;
        tile_cache_total_uncompressed: number;
        tileCacheTotalUncompressed: number;
        zoom_total: number;
        zoomTotal: number;
    }
}

export class Stats extends GObject.Object {
    static $gtype: GObject.GType<Stats>;

    constructor(properties?: Partial<Stats.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Stats.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active_threads: number;
    activeThreads: number;
    assigned_threads: number;
    assignedThreads: number;
    scratch_total: number;
    scratchTotal: number;
    swap_busy: boolean;
    swapBusy: boolean;
    swap_file_size: number;
    swapFileSize: number;
    swap_queue_full: boolean;
    swapQueueFull: boolean;
    swap_queue_stalls: number;
    swapQueueStalls: number;
    swap_queued_total: number;
    swapQueuedTotal: number;
    swap_read_total: number;
    swapReadTotal: number;
    swap_reading: boolean;
    swapReading: boolean;
    swap_total: number;
    swapTotal: number;
    swap_total_uncompressed: number;
    swapTotalUncompressed: number;
    swap_write_total: number;
    swapWriteTotal: number;
    swap_writing: boolean;
    swapWriting: boolean;
    tile_alloc_total: number;
    tileAllocTotal: number;
    tile_cache_hits: number;
    tileCacheHits: number;
    tile_cache_misses: number;
    tileCacheMisses: number;
    tile_cache_total: number;
    tileCacheTotal: number;
    tile_cache_total_max: number;
    tileCacheTotalMax: number;
    tile_cache_total_uncompressed: number;
    tileCacheTotalUncompressed: number;
    zoom_total: number;
    zoomTotal: number;
}

export namespace TileBackend {
    export interface ConstructorProperties extends TileSource.ConstructorProperties {
        [key: string]: any;

        flush_on_destroy: boolean;
        flushOnDestroy: boolean;
        format: any;
        px_size: number;
        pxSize: number;
        tile_height: number;
        tileHeight: number;
        tile_size: number;
        tileSize: number;
        tile_width: number;
        tileWidth: number;
    }
}

export class TileBackend extends TileSource {
    static $gtype: GObject.GType<TileBackend>;

    constructor(properties?: Partial<TileBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TileBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flush_on_destroy: boolean;
    flushOnDestroy: boolean;
    format: any;
    px_size: number;
    pxSize: number;
    tile_height: number;
    tileHeight: number;
    tile_size: number;
    tileSize: number;
    tile_width: number;
    tileWidth: number;

    // Fields
    priv: TileBackendPrivate;

    // Members

    command: ((command: TileCommand, x: number, y: number, z: number, data?: any | null) => any | null) | any;

    get_flush_on_destroy(): boolean;

    get_tile_height(): number;

    get_tile_size(): number;

    get_tile_width(): number;

    peek_storage(): TileSource;

    set_extent(rectangle: Rectangle): void;

    set_flush_on_destroy(flush_on_destroy: boolean): void;

    static unlink_swap(path: string): void;
}

export namespace TileHandler {
    export interface ConstructorProperties extends TileSource.ConstructorProperties {
        [key: string]: any;

        source: GObject.Object;
    }
}

export class TileHandler extends TileSource {
    static $gtype: GObject.GType<TileHandler>;

    constructor(properties?: Partial<TileHandler.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TileHandler.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: GObject.Object;

    // Fields
    priv: TileHandlerPrivate;

    // Members

    damage_rect(rect: Rectangle): void;

    damage_tile(x: number, y: number, z: number, damage: number): void;

    lock(): void;

    set_source(source: TileSource): void;

    unlock(): void;
}

export namespace TileSource {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TileSource extends GObject.Object {
    static $gtype: GObject.GType<TileSource>;

    constructor(properties?: Partial<TileSource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TileSource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    command: TileSourceCommand;
    padding: any[];
}

export class AudioFragmentPrivate {
    static $gtype: GObject.GType<AudioFragmentPrivate>;

    constructor(copy: AudioFragmentPrivate);
}

export class BufferIterator {
    static $gtype: GObject.GType<BufferIterator>;

    constructor(copy: BufferIterator);

    // Fields
    length: number;
    priv: BufferIteratorPriv;
    items: BufferIteratorItem[];
}

export class BufferIteratorItem {
    static $gtype: GObject.GType<BufferIteratorItem>;

    constructor(
        properties?: Partial<{
            data?: any;
            roi?: Rectangle;
        }>
    );

    constructor(copy: BufferIteratorItem);

    // Fields
    data: any;
    roi: Rectangle;
}

export class BufferIteratorPriv {
    static $gtype: GObject.GType<BufferIteratorPriv>;

    constructor(copy: BufferIteratorPriv);
}

export class BufferMatrix2 {
    static $gtype: GObject.GType<BufferMatrix2>;

    constructor(copy: BufferMatrix2);

    // Fields
    coeff: number[];

    // Members
    determinant(): number;

    is_identity(): boolean;

    is_scale(): boolean;
}

export class ColorPrivate {
    static $gtype: GObject.GType<ColorPrivate>;

    constructor(copy: ColorPrivate);
}

export class Lookup {
    static $gtype: GObject.GType<Lookup>;

    constructor(copy: Lookup);

    // Fields
    'function': LookupFunction;
    data: any;
    shift: number;
    positive_min: number;
    positive_max: number;
    negative_min: number;
    negative_max: number;
    bitmask: number[];
    table: number[];
}

export class Matrix3 {
    static $gtype: GObject.GType<Matrix3>;

    constructor();
    constructor(copy: Matrix3);

    // Fields
    coeff: number[];

    // Constructors
    static ['new'](): Matrix3;

    // Members
    copy(): Matrix3;

    copy_into(src: Matrix3): void;

    determinant(): number;

    equal(matrix2: Matrix3): boolean;

    identity(): void;

    invert(): void;

    is_affine(): boolean;

    is_identity(): boolean;

    is_scale(): boolean;

    is_translate(): boolean;

    multiply(right: Matrix3, product: Matrix3): void;

    originate(x: number, y: number): void;

    parse_string(string: string): void;

    round_error(): void;

    to_string(): string;

    transform_point(x: number, y: number): void;
}

export class MetadataIter {
    static $gtype: GObject.GType<MetadataIter>;

    constructor(
        properties?: Partial<{
            stamp?: number;
            user_data?: any;
            user_data2?: any;
            user_data3?: any;
        }>
    );

    constructor(copy: MetadataIter);

    // Fields
    stamp: number;
    user_data: any;
    user_data2: any;
    user_data3: any;
}

export class MetadataMap {
    static $gtype: GObject.GType<MetadataMap>;

    constructor(copy: MetadataMap);

    // Fields
    local_name: string;
    name: string;
    transform: GObject.ValueTransform;
}

export class OperationContext {
    static $gtype: GObject.GType<OperationContext>;

    constructor(copy: OperationContext);
}

export class ParamSpecDouble {
    static $gtype: GObject.GType<ParamSpecDouble>;

    constructor(
        properties?: Partial<{
            ui_minimum?: number;
            ui_maximum?: number;
            ui_gamma?: number;
            ui_step_small?: number;
            ui_step_big?: number;
            ui_digits?: number;
        }>
    );

    constructor(copy: ParamSpecDouble);

    // Fields
    ui_minimum: number;
    ui_maximum: number;
    ui_gamma: number;
    ui_step_small: number;
    ui_step_big: number;
    ui_digits: number;

    // Members
    set_digits(digits: number): void;

    set_steps(small_step: number, big_step: number): void;
}

export class ParamSpecEnum {
    static $gtype: GObject.GType<ParamSpecEnum>;

    constructor(copy: ParamSpecEnum);

    // Fields
    excluded_values: any[];

    // Members
    exclude_value(value: number): void;
}

export class ParamSpecFilePath {
    static $gtype: GObject.GType<ParamSpecFilePath>;

    constructor(
        properties?: Partial<{
            no_validate?: number;
            null_ok?: number;
        }>
    );

    constructor(copy: ParamSpecFilePath);

    // Fields
    no_validate: number;
    null_ok: number;
}

export class ParamSpecFormat {
    static $gtype: GObject.GType<ParamSpecFormat>;

    constructor(copy: ParamSpecFormat);
}

export class ParamSpecInt {
    static $gtype: GObject.GType<ParamSpecInt>;

    constructor(
        properties?: Partial<{
            ui_minimum?: number;
            ui_maximum?: number;
            ui_gamma?: number;
            ui_step_small?: number;
            ui_step_big?: number;
        }>
    );

    constructor(copy: ParamSpecInt);

    // Fields
    ui_minimum: number;
    ui_maximum: number;
    ui_gamma: number;
    ui_step_small: number;
    ui_step_big: number;

    // Members
    set_steps(small_step: number, big_step: number): void;
}

export class ParamSpecSeed {
    static $gtype: GObject.GType<ParamSpecSeed>;

    constructor(
        properties?: Partial<{
            ui_minimum?: number;
            ui_maximum?: number;
        }>
    );

    constructor(copy: ParamSpecSeed);

    // Fields
    ui_minimum: number;
    ui_maximum: number;
}

export class ParamSpecString {
    static $gtype: GObject.GType<ParamSpecString>;

    constructor(
        properties?: Partial<{
            no_validate?: number;
            null_ok?: number;
        }>
    );

    constructor(copy: ParamSpecString);

    // Fields
    no_validate: number;
    null_ok: number;
}

export class ParamSpecUri {
    static $gtype: GObject.GType<ParamSpecUri>;

    constructor(
        properties?: Partial<{
            no_validate?: number;
            null_ok?: number;
        }>
    );

    constructor(copy: ParamSpecUri);

    // Fields
    no_validate: number;
    null_ok: number;
}

export class PathItem {
    static $gtype: GObject.GType<PathItem>;

    constructor(copy: PathItem);

    // Fields
    type: number;
    point: PathPoint[];
}

export class PathList {
    static $gtype: GObject.GType<PathList>;

    constructor(copy: PathList);

    // Fields
    next: any;
    d: PathItem;
}

export class PathPoint {
    static $gtype: GObject.GType<PathPoint>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );

    constructor(copy: PathPoint);

    // Fields
    x: number;
    y: number;
}

export class Random {
    static $gtype: GObject.GType<Random>;

    constructor();
    constructor(copy: Random);

    // Constructors
    static ['new'](): Random;

    static new_with_seed(seed: number): Random;

    // Members
    duplicate(): Random;

    float(x: number, y: number, z: number, n: number): number;

    float_range(x: number, y: number, z: number, n: number, min: number, max: number): number;

    free(): void;

    int(x: number, y: number, z: number, n: number): number;

    int_range(x: number, y: number, z: number, n: number, min: number, max: number): number;

    set_seed(seed: number): void;
}

export class Rectangle {
    static $gtype: GObject.GType<Rectangle>;

    constructor(x: number, y: number, width: number, height: number);
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

    // Constructors
    static ['new'](x: number, y: number, width: number, height: number): Rectangle;

    // Members
    align(rectangle: Rectangle, tile: Rectangle, alignment: RectangleAlignment): boolean;

    align_to_buffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment): boolean;

    bounding_box(source1: Rectangle, source2: Rectangle): void;

    contains(child: Rectangle): boolean;

    copy(source: Rectangle): void;

    dump(): void;

    dup(): Rectangle;

    equal(rectangle2: Rectangle): boolean;

    equal_coords(x: number, y: number, width: number, height: number): boolean;

    intersect(src1: Rectangle, src2: Rectangle): boolean;

    is_empty(): boolean;

    is_infinite_plane(): boolean;

    set(x: number, y: number, width: number, height: number): void;

    subtract(minuend: Rectangle, subtrahend: Rectangle): number;

    subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean;

    xor(source1: Rectangle, source2: Rectangle): number;

    static infinite_plane(): Rectangle;
}

export class Sampler {
    static $gtype: GObject.GType<Sampler>;

    constructor(copy: Sampler);

    // Members
    get(x: number, y: number, scale: BufferMatrix2, output: any | null, repeat_mode: AbyssPolicy): void;

    get_context_rect(): Rectangle;
}

export class Tile {
    static $gtype: GObject.GType<Tile>;

    constructor(copy: Tile);
}

export class TileBackendPrivate {
    static $gtype: GObject.GType<TileBackendPrivate>;

    constructor(copy: TileBackendPrivate);
}

export class TileCopyParams {
    static $gtype: GObject.GType<TileCopyParams>;

    constructor(copy: TileCopyParams);

    // Fields
    dst_buffer: Buffer;
    dst_x: number;
    dst_y: number;
    dst_z: number;
}

export class TileHandlerPrivate {
    static $gtype: GObject.GType<TileHandlerPrivate>;

    constructor(copy: TileHandlerPrivate);
}

export interface MetadataNamespace {
    $gtype: GObject.GType<Metadata>;
    prototype: MetadataPrototype;
}

export type Metadata = MetadataPrototype;

export interface MetadataPrototype extends GObject.Object {
    // Members

    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    iter_get_value(iter: MetadataIter, value: any): boolean;

    iter_init(iter: MetadataIter): void;

    iter_lookup(iter: MetadataIter, key: string): boolean;

    iter_next(iter: MetadataIter): string;

    iter_set_value(iter: MetadataIter, value: any): boolean;

    register_map(file_module: string, flags: number, map: MetadataMap[]): void;

    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    unregister_map(): void;

    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean;

    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean;

    vfunc_iter_init(iter: MetadataIter): void;

    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean;

    vfunc_iter_next(iter: MetadataIter): string;

    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean;

    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void;

    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean;
}

export const Metadata: MetadataNamespace;
