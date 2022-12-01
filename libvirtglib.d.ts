/**
 * LibvirtGLib 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';

export function error_new_literal(domain: GLib.Quark, code: number, message: string): GLib.Error;

export function event_register(): void;

export function init(argv?: string[] | null): string[] | null;

export function init_check(argv?: string[] | null): [boolean, string[] | null];

export function set_error_literal(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void;
