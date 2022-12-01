/**
 * PangoXft 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Pango from './pango';
import * as PangoFT2 from './pangoft2';
import * as PangoOT from './pangoot';
import * as xft from './xft';
import * as xlib from './xlib';
import * as PangoFc from './pangofc';

export function get_font_map(display: xlib.Display, screen: number): Pango.FontMap;

export function picture_render(
    display: xlib.Display,
    src_picture: xlib.Picture,
    dest_picture: xlib.Picture,
    font: Pango.Font,
    glyphs: Pango.GlyphString,
    x: number,
    y: number
): void;

export function render(
    draw: xft.Draw,
    color: xft.Color,
    font: Pango.Font,
    glyphs: Pango.GlyphString,
    x: number,
    y: number
): void;

export function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void;

export function render_layout_line(
    draw: xft.Draw,
    color: xft.Color,
    line: Pango.LayoutLine,
    x: number,
    y: number
): void;

export function render_transformed(
    draw: xft.Draw,
    color: xft.Color,
    matrix: Pango.Matrix | null,
    font: Pango.Font,
    glyphs: Pango.GlyphString,
    x: number,
    y: number
): void;

export function set_default_substitute(
    display: xlib.Display,
    screen: number,
    func: SubstituteFunc,
    data?: any | null
): void;

export function shutdown_display(display: xlib.Display, screen: number): void;

export function substitute_changed(display: xlib.Display, screen: number): void;

export namespace Font {
    export interface ConstructorProperties extends PangoFc.Font.ConstructorProperties {
        [key: string]: any;
    }
}

export class Font extends PangoFc.Font {
    static $gtype: GObject.GType<Font>;

    constructor(properties?: Partial<Font.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Font.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_glyph(wc: number): number;

    get_unknown_glyph(wc: number): Pango.Glyph;

    has_char(wc: number): boolean;
}

export namespace FontMap {
    export interface ConstructorProperties extends PangoFc.FontMap.ConstructorProperties {
        [key: string]: any;
    }
}

export class FontMap extends PangoFc.FontMap {
    static $gtype: GObject.GType<FontMap>;

    constructor(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]): void;
}

export namespace Renderer {
    export interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {
        [key: string]: any;

        display: any;
        screen: number;
    }
}

export class Renderer extends Pango.Renderer {
    static $gtype: GObject.GType<Renderer>;

    constructor(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    display: any;
    screen: number;

    // Constructors

    static ['new'](display: xlib.Display, screen: number): Renderer;

    // Members

    set_default_color(default_color: Pango.Color): void;

    set_draw(draw: xft.Draw): void;

    vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void;

    vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void;
}

export class RendererPrivate {
    static $gtype: GObject.GType<RendererPrivate>;

    constructor(copy: RendererPrivate);
}

export type SubstituteFunc = PangoFc.SubstituteFunc;
