/**
 * GtkSpell 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gtk from './gtk';

export function error_quark(): GLib.Quark;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static BACKEND: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Checker {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        decode_language_codes: boolean;
        decodeLanguageCodes: boolean;
    }
}

export class Checker extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Checker>;

    constructor(properties?: Partial<Checker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Checker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    decode_language_codes: boolean;
    decodeLanguageCodes: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'language-changed', callback: (_source: this, lang: string) => void): number;

    connect_after(signal: 'language-changed', callback: (_source: this, lang: string) => void): number;

    emit(signal: 'language-changed', lang: string): void;

    // Constructors

    static ['new'](): Checker;

    // Members

    add_to_dictionary(word: string): void;

    attach(view: Gtk.TextView): boolean;

    check_word(word: string): boolean;

    detach(): void;

    get_language(): string;

    get_suggestions(word: string): string[];

    get_suggestions_menu(iter: Gtk.TextIter): Gtk.Widget;

    ignore_word(word: string): void;

    recheck_all(): void;

    set_language(lang?: string | null): boolean;

    vfunc_language_changed(new_lang: string): void;

    static decode_language_code(lang: string): string;

    static get_from_text_view(view: Gtk.TextView): Checker;

    static get_language_list(): string[];
}

export class CheckerPrivate {
    static $gtype: GObject.GType<CheckerPrivate>;

    constructor(copy: CheckerPrivate);
}
