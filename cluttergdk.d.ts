/**
 * ClutterGdk 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Clutter from './clutter';
import * as Gdk from './gdk';

export function disable_event_retrieval(): void;

export function get_default_display(): Gdk.Display;

export function get_stage_from_window(window: Gdk.Window): Clutter.Stage;

export function get_stage_window(stage: Clutter.Stage): Gdk.Window;

export function get_visual(): Gdk.Visual;

export function handle_event(event: Gdk.Event): Gdk.FilterReturn;

export function set_display(display: Gdk.Display): void;

export function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean;
