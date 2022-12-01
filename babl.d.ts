/**
 * Babl 0.1
 *
 * Generated from 0.1.82
 */

import * as GObject from './gobject';

export const ALPHA_FLOOR: number;
export const ALPHA_FLOOR_F: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function component(name: string): Object;

export function conversion_get_destination_space(conversion: Object): Object;

export function conversion_get_source_space(conversion: Object): Object;

export function exit(): void;

export function fast_fish(source_format: any | null, destination_format: any | null, performance: string): Object;

export function fish(source_format?: any | null, destination_format?: any | null): Object;

export function format(encoding: string): Object;

export function format_exists(name: string): number;

export function format_get_bytes_per_pixel(format: Object): number;

export function format_get_encoding(babl: Object): string;

export function format_get_model(format: Object): Object;

export function format_get_n_components(format: Object): number;

export function format_get_space(format: Object): Object;

export function format_get_type(format: Object, component_index: number): Object;

export function format_has_alpha(format: Object): number;

export function format_is_format_n(format: Object): number;

export function format_is_palette(format: Object): number;

export function format_n(type: Object, components: number): Object;

export function format_with_space(encoding: string, space: Object): Object;

export function get_model_flags(model: Object): ModelFlag;

export function get_name(babl: Object): string;

export function get_version(): [number, number, number];

export function icc_get_key(
    icc_data: string,
    icc_length: number,
    key: string,
    language: string,
    country: string
): string;

export function icc_make_space(icc_data: string, icc_length: number, intent: IccIntent, error: string): Object;

export function init(): void;

export function introspect(babl: Object): void;

export function model(name: string): Object;

export function model_is(babl: Object, model_name: string): number;

export function model_with_space(name: string, space: Object): Object;

export function new_palette(name: string, format_u8: Object, format_u8_with_alpha: Object): Object;

export function new_palette_with_space(
    name: string,
    space: Object,
    format_u8: Object,
    format_u8_with_alpha: Object
): Object;

export function palette_reset(babl: Object): void;

export function palette_set_palette(babl: Object, format: Object, data: Uint8Array | string, count: number): void;

export function process(babl_fish: Object, source: any | null, destination: any | null, n: number): number;

export function process_rows(
    babl_fish: Object,
    source: any | null,
    source_stride: number,
    dest: any | null,
    dest_stride: number,
    n: number,
    rows: number
): number;

export function sampling(horizontal: number, vertical: number): Object;

export function space(name: string): Object;

export function space_from_chromaticities(
    name: string | null,
    wx: number,
    wy: number,
    rx: number,
    ry: number,
    gx: number,
    gy: number,
    bx: number,
    by: number,
    trc_red: Object,
    trc_green: Object | null,
    trc_blue: Object | null,
    flags: SpaceFlags
): Object;

export function space_from_icc(icc_data: string, icc_length: number, intent: IccIntent): [Object, string];

export function space_from_rgbxyz_matrix(
    name: string | null,
    wx: number,
    wy: number,
    wz: number,
    rx: number,
    gx: number,
    bx: number,
    ry: number,
    gy: number,
    by: number,
    rz: number,
    gz: number,
    bz: number,
    trc_red: Object,
    trc_green?: Object | null,
    trc_blue?: Object | null
): Object;

export function space_get(
    space: Object
): [
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        Object | null,
        Object | null,
        Object | null
];

export function space_get_gamma(space: Object): number;

export function space_get_icc(babl: Object): [string, number | null];

export function space_get_rgb_luminance(space: Object): [number | null, number | null, number | null];

export function space_is_cmyk(space: Object): number;

export function space_is_gray(space: Object): number;

export function space_with_trc(space: Object, trc: Object): Object;

export function trc(name: string): Object;

export function trc_gamma(gamma: number): Object;

export function type(name: string): Object;

export type FuncLinear = (conversion: Object, src: string, dst: string, n: number) => void;
export type FuncPlanar = (
    conversion: Object,
    src_bands: number,
    src: string,
    src_pitch: number,
    dst_bands: number,
    dst: string,
    dst_pitch: number,
    n: number
) => void;

export namespace IccIntent {
    export const $gtype: GObject.GType<IccIntent>;
}

export enum IccIntent {
    PERCEPTUAL = 0,
    RELATIVE_COLORIMETRIC = 1,
    SATURATION = 2,
    ABSOLUTE_COLORIMETRIC = 3,
    PERFORMANCE = 32,
}

export namespace SpaceFlags {
    export const $gtype: GObject.GType<SpaceFlags>;
}

export enum SpaceFlags {
    NONE = 0,
    EQUALIZE = 1,
}

export namespace ModelFlag {
    export const $gtype: GObject.GType<ModelFlag>;
}

export enum ModelFlag {
    ALPHA = 2,
    ASSOCIATED = 4,
    INVERTED = 8,
    LINEAR = 1024,
    NONLINEAR = 2048,
    PERCEPTUAL = 4096,
    GRAY = 1048576,
    RGB = 2097152,
    CIE = 8388608,
    CMYK = 16777216,
}

export class Object {
    static $gtype: GObject.GType<Object>;

    constructor(copy: Object);
}
