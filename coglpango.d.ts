/**
 * CoglPango 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Cogl from './cogl';
import * as Pango from './pango';
import * as PangoCairo from './pangocairo';
import * as GObject from './gobject';

export function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;

export function font_map_clear_glyph_cache(font_map: FontMap): void;

export function font_map_create_context(font_map: FontMap): Pango.Context;

export function font_map_get_renderer(font_map: FontMap): Pango.Renderer;

export function font_map_get_use_mipmapping(font_map: FontMap): Cogl.Bool;

export function font_map_new(): Pango.FontMap;

export function font_map_set_resolution(font_map: FontMap, dpi: number): void;

export function font_map_set_use_mipmapping(font_map: FontMap, value: Cogl.Bool): void;

export function render_layout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void;

export function render_layout_line(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void;

export function render_layout_subpixel(
    layout: Pango.Layout,
    x: number,
    y: number,
    color: Cogl.Color,
    flags: number
): void;

export namespace Renderer {
    export interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {
        [key: string]: any;

        context: any;
    }
}

export class Renderer extends Pango.Renderer {
    static $gtype: GObject.GType<Renderer>;

    constructor(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context: any;
}

export type FontMap = PangoCairo.FontMap;
