/**
 * GnomeAutoarGtk 0.1
 *
 * Generated from 0.1
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GnomeAutoar from './gnomeautoar';
import * as Gtk from './gtk';

export function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean;

export function chooser_advanced_new(
    default_format: GnomeAutoar.Format,
    default_filter: GnomeAutoar.Filter
): Gtk.Widget;

export function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean;

export function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget;
