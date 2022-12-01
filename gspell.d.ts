/**
 * Gspell 1
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as GLib from './glib';

export function checker_error_quark(): GLib.Quark;

export function language_get_available(): Language[];

export function language_get_default(): Language | null;

export function language_lookup(language_code: string): Language | null;

export class CheckerError extends GLib.Error {
    static $gtype: GObject.GType<CheckerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CheckerError);

    // Properties
    static DICTIONARY: number;
    static NO_LANGUAGE_SET: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Checker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        language: Language;
    }
}

export class Checker extends GObject.Object {
    static $gtype: GObject.GType<Checker>;

    constructor(properties?: Partial<Checker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Checker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    language: Language;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'session-cleared', callback: (_source: this) => void): number;

    connect_after(signal: 'session-cleared', callback: (_source: this) => void): number;

    emit(signal: 'session-cleared'): void;

    connect(signal: 'word-added-to-personal', callback: (_source: this, word: string) => void): number;

    connect_after(signal: 'word-added-to-personal', callback: (_source: this, word: string) => void): number;

    emit(signal: 'word-added-to-personal', word: string): void;

    connect(signal: 'word-added-to-session', callback: (_source: this, word: string) => void): number;

    connect_after(signal: 'word-added-to-session', callback: (_source: this, word: string) => void): number;

    emit(signal: 'word-added-to-session', word: string): void;

    // Constructors

    static ['new'](language?: Language | null): Checker;

    // Members

    add_word_to_personal(word: string, word_length: number): void;

    add_word_to_session(word: string, word_length: number): void;

    check_word(word: string, word_length: number): boolean;

    clear_session(): void;

    get_language(): Language | null;

    get_suggestions(word: string, word_length: number): string[];

    set_correction(word: string, word_length: number, replacement: string, replacement_length: number): void;

    set_language(language?: Language | null): void;

    vfunc_session_cleared(): void;

    vfunc_word_added_to_personal(word: string): void;

    vfunc_word_added_to_session(word: string): void;
}

export namespace CheckerDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        spell_navigator: Navigator;
        spellNavigator: Navigator;
    }
}

export class CheckerDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<CheckerDialog>;

    constructor(properties?: Partial<CheckerDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CheckerDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    spell_navigator: Navigator;
    spellNavigator: Navigator;

    // Constructors

    static ['new'](parent: Gtk.Window, navigator: Navigator): CheckerDialog;
    static ['new'](...args: never[]): never;

    // Members

    get_spell_navigator(): Navigator;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace Entry {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        entry: Gtk.Entry;
        inline_spell_checking: boolean;
        inlineSpellChecking: boolean;
    }
}

export class Entry extends GObject.Object {
    static $gtype: GObject.GType<Entry>;

    constructor(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    entry: Gtk.Entry;
    inline_spell_checking: boolean;
    inlineSpellChecking: boolean;

    // Members

    basic_setup(): void;

    get_entry(): Gtk.Entry;

    get_inline_spell_checking(): boolean;

    set_inline_spell_checking(enable: boolean): void;

    static get_from_gtk_entry(gtk_entry: Gtk.Entry): Entry;
}

export namespace EntryBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: Gtk.EntryBuffer;
        spell_checker: Checker;
        spellChecker: Checker;
    }
}

export class EntryBuffer extends GObject.Object {
    static $gtype: GObject.GType<EntryBuffer>;

    constructor(properties?: Partial<EntryBuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryBuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    buffer: Gtk.EntryBuffer;
    spell_checker: Checker;
    spellChecker: Checker;

    // Members

    get_buffer(): Gtk.EntryBuffer;

    get_spell_checker(): Checker | null;

    set_spell_checker(spell_checker?: Checker | null): void;

    static get_from_gtk_entry_buffer(gtk_buffer: Gtk.EntryBuffer): EntryBuffer;
}

export namespace LanguageChooserButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;
    }
}

export class LanguageChooserButton
    extends Gtk.Button
    implements Atk.ImplementorIface, LanguageChooser, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
    static $gtype: GObject.GType<LanguageChooserButton>;

    constructor(properties?: Partial<LanguageChooserButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LanguageChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    language: Language;
    language_code: string;
    languageCode: string;
    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;
    related_action: Gtk.Action;
    relatedAction: Gtk.Action;
    use_action_appearance: boolean;
    useActionAppearance: boolean;

    // Constructors

    static ['new'](current_language?: Language | null): LanguageChooserButton;
    static ['new'](...args: never[]): never;

    // Implemented Members

    get_language(): Language | null;

    get_language_code(): string;

    set_language(language?: Language | null): void;

    set_language_code(language_code?: string | null): void;

    vfunc_get_language_full(default_language: boolean): Language;

    vfunc_set_language(language?: Language | null): void;

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

    do_set_related_action(action: Gtk.Action): void;

    get_related_action(): Gtk.Action;

    get_use_action_appearance(): boolean;

    set_related_action(action: Gtk.Action): void;

    set_use_action_appearance(use_appearance: boolean): void;

    sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_update(action: Gtk.Action, property_name: string): void;

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace LanguageChooserDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;
    }
}

export class LanguageChooserDialog extends Gtk.Dialog implements Atk.ImplementorIface, LanguageChooser, Gtk.Buildable {
    static $gtype: GObject.GType<LanguageChooserDialog>;

    constructor(properties?: Partial<LanguageChooserDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LanguageChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    language: Language;
    language_code: string;
    languageCode: string;

    // Constructors

    static ['new'](
        parent: Gtk.Window,
        current_language: Language | null,
        flags: Gtk.DialogFlags
    ): LanguageChooserDialog;

    static ['new'](...args: never[]): never;

    // Implemented Members

    get_language(): Language | null;

    get_language_code(): string;

    set_language(language?: Language | null): void;

    set_language_code(language_code?: string | null): void;

    vfunc_get_language_full(default_language: boolean): Language;

    vfunc_set_language(language?: Language | null): void;

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any | null];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void;

    vfunc_set_name(name: string): void;
}

export namespace NavigatorTextView {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        view: Gtk.TextView;
    }
}

export class NavigatorTextView extends GObject.InitiallyUnowned implements Navigator {
    static $gtype: GObject.GType<NavigatorTextView>;

    constructor(properties?: Partial<NavigatorTextView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NavigatorTextView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    view: Gtk.TextView;

    // Members

    get_view(): Gtk.TextView;

    static new(view: Gtk.TextView): Navigator;

    // Implemented Members

    change(word: string, change_to: string): void;

    change_all(word: string, change_to: string): void;

    goto_next(): [boolean, string | null, Checker | null];

    vfunc_change(word: string, change_to: string): void;

    vfunc_change_all(word: string, change_to: string): void;

    vfunc_goto_next(): [boolean, string | null, Checker | null];
}

export namespace TextBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: Gtk.TextBuffer;
        spell_checker: Checker;
        spellChecker: Checker;
    }
}

export class TextBuffer extends GObject.Object {
    static $gtype: GObject.GType<TextBuffer>;

    constructor(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    buffer: Gtk.TextBuffer;
    spell_checker: Checker;
    spellChecker: Checker;

    // Members

    get_buffer(): Gtk.TextBuffer;

    get_spell_checker(): Checker | null;

    set_spell_checker(spell_checker?: Checker | null): void;

    static get_from_gtk_text_buffer(gtk_buffer: Gtk.TextBuffer): TextBuffer;
}

export namespace TextView {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        enable_language_menu: boolean;
        enableLanguageMenu: boolean;
        inline_spell_checking: boolean;
        inlineSpellChecking: boolean;
        view: Gtk.TextView;
    }
}

export class TextView extends GObject.Object {
    static $gtype: GObject.GType<TextView>;

    constructor(properties?: Partial<TextView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TextView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enable_language_menu: boolean;
    enableLanguageMenu: boolean;
    inline_spell_checking: boolean;
    inlineSpellChecking: boolean;
    view: Gtk.TextView;

    // Members

    basic_setup(): void;

    get_enable_language_menu(): boolean;

    get_inline_spell_checking(): boolean;

    get_view(): Gtk.TextView;

    set_enable_language_menu(enable_language_menu: boolean): void;

    set_inline_spell_checking(enable: boolean): void;

    static get_from_gtk_text_view(gtk_view: Gtk.TextView): TextView;
}

export class Language {
    static $gtype: GObject.GType<Language>;

    constructor(copy: Language);

    // Members
    compare(language_b: Language): number;

    copy(): Language;

    free(): void;

    get_code(): string;

    get_name(): string;

    static get_available(): Language[];

    static get_default(): Language | null;

    static lookup(language_code: string): Language | null;
}

export interface LanguageChooserNamespace {
    $gtype: GObject.GType<LanguageChooser>;
    prototype: LanguageChooserPrototype;
}

export type LanguageChooser = LanguageChooserPrototype;

export interface LanguageChooserPrototype extends GObject.Object {
    // Properties
    language: Language;
    language_code: string;
    languageCode: string;

    // Members

    get_language(): Language | null;

    get_language_code(): string;

    set_language(language?: Language | null): void;

    set_language_code(language_code?: string | null): void;

    vfunc_get_language_full(default_language: boolean): Language;

    vfunc_set_language(language?: Language | null): void;
}

export const LanguageChooser: LanguageChooserNamespace;

export interface NavigatorNamespace {
    $gtype: GObject.GType<Navigator>;
    prototype: NavigatorPrototype;
}

export type Navigator = NavigatorPrototype;

export interface NavigatorPrototype extends GObject.InitiallyUnowned {
    // Members

    change(word: string, change_to: string): void;

    change_all(word: string, change_to: string): void;

    goto_next(): [boolean, string | null, Checker | null];

    vfunc_change(word: string, change_to: string): void;

    vfunc_change_all(word: string, change_to: string): void;

    vfunc_goto_next(): [boolean, string | null, Checker | null];
}

export const Navigator: NavigatorNamespace;
