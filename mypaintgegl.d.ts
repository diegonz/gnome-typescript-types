/**
 * MyPaintGegl 1.5
 *
 * Generated from 1.5
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gegl from './gegl';
import * as MyPaint from './mypaint';

export class TiledSurface {
    static $gtype: GObject.GType<TiledSurface>;

    constructor();
    constructor(copy: TiledSurface);

    // Constructors
    static ['new'](): TiledSurface;

    // Members
    get_buffer(): Gegl.Buffer;

    ['interface'](): MyPaint.Surface;

    set_buffer(buffer: Gegl.Buffer): void;
}
