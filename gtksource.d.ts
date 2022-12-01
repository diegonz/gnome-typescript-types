/**
 * GtkSource 4
 *
 * Generated from 4.0
 */


import * as Atk from "atk";
import * as GObject from "gobject";
import * as Gtk from "gtk";
import * as GLib from "glib";
import * as Gio from "gio";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gdk from "gdk";
import * as cairo from "cairo";
import * as Pango from "pango";


export function completion_error_quark(): GLib.Quark;

export function encoding_get_all(): Encoding[];

export function encoding_get_current(): Encoding;

export function encoding_get_default_candidates(): Encoding[];

export function encoding_get_from_charset(charset: string): Encoding | null;

export function encoding_get_utf8(): Encoding;

export function file_loader_error_quark(): GLib.Quark;

export function file_saver_error_quark(): GLib.Quark;

export function finalize(): void;

export function init(): void;

export function utils_escape_search_text(text: string): string;

export function utils_unescape_search_text(text: string): string;

export namespace BackgroundPatternType {
    export const $gtype: GObject.GType<BackgroundPatternType>;
}

export enum BackgroundPatternType {
    NONE = 0,
    GRID = 1,
}

export namespace BracketMatchType {
    export const $gtype: GObject.GType<BracketMatchType>;
}

export enum BracketMatchType {
    NONE = 0,
    OUT_OF_RANGE = 1,
    NOT_FOUND = 2,
    FOUND = 3,
}

export namespace ChangeCaseType {
    export const $gtype: GObject.GType<ChangeCaseType>;
}

export enum ChangeCaseType {
    LOWER = 0,
    UPPER = 1,
    TOGGLE = 2,
    TITLE = 3,
}


export class CompletionError extends GLib.Error {
    static $gtype: GObject.GType<CompletionError>;

    constructor(options: { message: string, code: number });
    constructor(copy: CompletionError);


    // Fields
    static ALREADY_BOUND: number;
    static NOT_BOUND: number;


    // Members
    static quark(): GLib.Quark;
}

export namespace CompressionType {
    export const $gtype: GObject.GType<CompressionType>;
}

export enum CompressionType {
    NONE = 0,
    GZIP = 1,
}


export class FileLoaderError extends GLib.Error {
    static $gtype: GObject.GType<FileLoaderError>;

    constructor(options: { message: string, code: number });
    constructor(copy: FileLoaderError);


    // Fields
    static TOO_BIG: number;
    static ENCODING_AUTO_DETECTION_FAILED: number;
    static CONVERSION_FALLBACK: number;


    // Members
    static quark(): GLib.Quark;
}


export class FileSaverError extends GLib.Error {
    static $gtype: GObject.GType<FileSaverError>;

    constructor(options: { message: string, code: number });
    constructor(copy: FileSaverError);


    // Fields
    static INVALID_CHARS: number;
    static EXTERNALLY_MODIFIED: number;


    // Members
    static quark(): GLib.Quark;
}

export namespace GutterRendererAlignmentMode {
    export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
}

export enum GutterRendererAlignmentMode {
    CELL = 0,
    FIRST = 1,
    LAST = 2,
}

export namespace NewlineType {
    export const $gtype: GObject.GType<NewlineType>;
}

export enum NewlineType {
    LF = 0,
    CR = 1,
    CR_LF = 2,
}

export namespace SmartHomeEndType {
    export const $gtype: GObject.GType<SmartHomeEndType>;
}

export enum SmartHomeEndType {
    DISABLED = 0,
    BEFORE = 1,
    AFTER = 2,
    ALWAYS = 3,
}

export namespace ViewGutterPosition {
    export const $gtype: GObject.GType<ViewGutterPosition>;
}

export enum ViewGutterPosition {
    LINES = -30,
    MARKS = -20,
}

export namespace CompletionActivation {
    export const $gtype: GObject.GType<CompletionActivation>;
}

export enum CompletionActivation {
    NONE = 0,
    INTERACTIVE = 1,
    USER_REQUESTED = 2,
}

export namespace FileSaverFlags {
    export const $gtype: GObject.GType<FileSaverFlags>;
}

export enum FileSaverFlags {
    NONE = 0,
    IGNORE_INVALID_CHARS = 1,
    IGNORE_MODIFICATION_TIME = 2,
    CREATE_BACKUP = 4,
}

export namespace GutterRendererState {
    export const $gtype: GObject.GType<GutterRendererState>;
}

export enum GutterRendererState {
    NORMAL = 0,
    CURSOR = 1,
    PRELIT = 2,
    SELECTED = 4,
}

export namespace SortFlags {
    export const $gtype: GObject.GType<SortFlags>;
}

export enum SortFlags {
    NONE = 0,
    CASE_SENSITIVE = 1,
    REVERSE_ORDER = 2,
    REMOVE_DUPLICATES = 4,
}

export namespace SpaceLocationFlags {
    export const $gtype: GObject.GType<SpaceLocationFlags>;
}

export enum SpaceLocationFlags {
    NONE = 0,
    LEADING = 1,
    INSIDE_TEXT = 2,
    TRAILING = 4,
    ALL = 7,
}

export namespace SpaceTypeFlags {
    export const $gtype: GObject.GType<SpaceTypeFlags>;
}

export enum SpaceTypeFlags {
    NONE = 0,
    SPACE = 1,
    TAB = 2,
    NEWLINE = 4,
    NBSP = 8,
    ALL = 15,
}

export module Buffer {

    export interface ConstructorProperties extends Gtk.TextBuffer.ConstructorProperties {
        [key: string]: any;

        can_redo: boolean;
        canRedo: boolean;
        can_undo: boolean;
        canUndo: boolean;
        highlight_matching_brackets: boolean;
        highlightMatchingBrackets: boolean;
        highlight_syntax: boolean;
        highlightSyntax: boolean;
        implicit_trailing_newline: boolean;
        implicitTrailingNewline: boolean;
        language: Language;
        max_undo_levels: number;
        maxUndoLevels: number;
        style_scheme: StyleScheme;
        styleScheme: StyleScheme;
        undo_manager: UndoManager;
        undoManager: UndoManager;
    }
}

export class Buffer extends Gtk.TextBuffer {
    static $gtype: GObject.GType<Buffer>;


    constructor(properties?: Partial<Buffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Buffer.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get can_redo(): boolean;

    get canRedo(): boolean;

    get can_undo(): boolean;

    get canUndo(): boolean;

    get highlight_matching_brackets(): boolean;
    set highlight_matching_brackets(val: boolean);

    get highlightMatchingBrackets(): boolean;
    set highlightMatchingBrackets(val: boolean);

    get highlight_syntax(): boolean;
    set highlight_syntax(val: boolean);

    get highlightSyntax(): boolean;
    set highlightSyntax(val: boolean);

    get implicit_trailing_newline(): boolean;
    set implicit_trailing_newline(val: boolean);

    get implicitTrailingNewline(): boolean;
    set implicitTrailingNewline(val: boolean);

    get language(): Language;
    set language(val: Language);

    get max_undo_levels(): number;
    set max_undo_levels(val: number);

    get maxUndoLevels(): number;
    set maxUndoLevels(val: number);

    get style_scheme(): StyleScheme;
    set style_scheme(val: StyleScheme);

    get styleScheme(): StyleScheme;
    set styleScheme(val: StyleScheme);

    get undo_manager(): UndoManager;
    set undo_manager(val: UndoManager);

    get undoManager(): UndoManager;
    set undoManager(val: UndoManager);

    // Fields
    priv: BufferPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'bracket-matched', callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void): number;

    connect_after(signal: 'bracket-matched', callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void): number;

    emit(signal: 'bracket-matched', iter: Gtk.TextIter | null, state: BracketMatchType): void;

    connect(signal: 'highlight-updated', callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void): number;

    connect_after(signal: 'highlight-updated', callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void): number;

    emit(signal: 'highlight-updated', start: Gtk.TextIter, end: Gtk.TextIter): void;

    connect(signal: 'redo', callback: (_source: this) => void): number;

    connect_after(signal: 'redo', callback: (_source: this) => void): number;

    emit(signal: 'redo'): void;

    connect(signal: 'source-mark-updated', callback: (_source: this, mark: Gtk.TextMark) => void): number;

    connect_after(signal: 'source-mark-updated', callback: (_source: this, mark: Gtk.TextMark) => void): number;

    emit(signal: 'source-mark-updated', mark: Gtk.TextMark): void;

    connect(signal: 'undo', callback: (_source: this) => void): number;

    connect_after(signal: 'undo', callback: (_source: this) => void): number;

    emit(signal: 'undo'): void;


    // Constructors

    static ["new"](table?: Gtk.TextTagTable | null): Buffer;

    static new_with_language(language: Language): Buffer;

    // Members

    backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];

    begin_not_undoable_action(): void;

    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;

    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;

    end_not_undoable_action(): void;

    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;

    forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];

    get_context_classes_at_iter(iter: Gtk.TextIter): string[];

    get_highlight_matching_brackets(): boolean;

    get_highlight_syntax(): boolean;

    get_implicit_trailing_newline(): boolean;

    get_language(): Language | null;

    get_max_undo_levels(): number;

    get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];

    get_source_marks_at_line(line: number, category?: string | null): Mark[];

    get_style_scheme(): StyleScheme | null;

    get_undo_manager(): UndoManager | null;

    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];

    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];

    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;

    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

    redo(): void;

    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;

    set_highlight_matching_brackets(highlight: boolean): void;

    set_highlight_syntax(highlight: boolean): void;

    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;

    set_language(language?: Language | null): void;

    set_max_undo_levels(max_undo_levels: number): void;

    set_style_scheme(scheme?: StyleScheme | null): void;

    set_undo_manager(manager?: UndoManager | null): void;

    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;

    undo(): void;

    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;

    vfunc_redo(): void;

    vfunc_undo(): void;


}

export module Completion {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        accelerators: number;
        auto_complete_delay: number;
        autoCompleteDelay: number;
        proposal_page_size: number;
        proposalPageSize: number;
        provider_page_size: number;
        providerPageSize: number;
        remember_info_visibility: boolean;
        rememberInfoVisibility: boolean;
        select_on_show: boolean;
        selectOnShow: boolean;
        show_headers: boolean;
        showHeaders: boolean;
        show_icons: boolean;
        showIcons: boolean;
        view: View;
    }
}

export class Completion extends GObject.Object implements Gtk.Buildable {
    static $gtype: GObject.GType<Completion>;


    constructor(properties?: Partial<Completion.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Completion.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get accelerators(): number;
    set accelerators(val: number);

    get auto_complete_delay(): number;
    set auto_complete_delay(val: number);

    get autoCompleteDelay(): number;
    set autoCompleteDelay(val: number);

    get proposal_page_size(): number;
    set proposal_page_size(val: number);

    get proposalPageSize(): number;
    set proposalPageSize(val: number);

    get provider_page_size(): number;
    set provider_page_size(val: number);

    get providerPageSize(): number;
    set providerPageSize(val: number);

    get remember_info_visibility(): boolean;
    set remember_info_visibility(val: boolean);

    get rememberInfoVisibility(): boolean;
    set rememberInfoVisibility(val: boolean);

    get select_on_show(): boolean;
    set select_on_show(val: boolean);

    get selectOnShow(): boolean;
    set selectOnShow(val: boolean);

    get show_headers(): boolean;
    set show_headers(val: boolean);

    get showHeaders(): boolean;
    set showHeaders(val: boolean);

    get show_icons(): boolean;
    set show_icons(val: boolean);

    get showIcons(): boolean;
    set showIcons(val: boolean);

    get view(): View;

    // Fields
    priv: CompletionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate-proposal', callback: (_source: this) => void): number;

    connect_after(signal: 'activate-proposal', callback: (_source: this) => void): number;

    emit(signal: 'activate-proposal'): void;

    connect(signal: 'hide', callback: (_source: this) => void): number;

    connect_after(signal: 'hide', callback: (_source: this) => void): number;

    emit(signal: 'hide'): void;

    connect(signal: 'move-cursor', callback: (_source: this, step: Gtk.ScrollStep, num: number) => void): number;

    connect_after(signal: 'move-cursor', callback: (_source: this, step: Gtk.ScrollStep, num: number) => void): number;

    emit(signal: 'move-cursor', step: Gtk.ScrollStep, num: number): void;

    connect(signal: 'move-page', callback: (_source: this, step: Gtk.ScrollStep, num: number) => void): number;

    connect_after(signal: 'move-page', callback: (_source: this, step: Gtk.ScrollStep, num: number) => void): number;

    emit(signal: 'move-page', step: Gtk.ScrollStep, num: number): void;

    connect(signal: 'populate-context', callback: (_source: this, context: CompletionContext) => void): number;

    connect_after(signal: 'populate-context', callback: (_source: this, context: CompletionContext) => void): number;

    emit(signal: 'populate-context', context: CompletionContext): void;

    connect(signal: 'show', callback: (_source: this) => void): number;

    connect_after(signal: 'show', callback: (_source: this) => void): number;

    emit(signal: 'show'): void;


    // Members

    add_provider(provider: CompletionProvider): boolean;

    block_interactive(): void;

    create_context(position?: Gtk.TextIter | null): CompletionContext;

    get_info_window(): CompletionInfo;

    get_providers(): CompletionProvider[];

    get_view(): View | null;

    hide(): void;

    remove_provider(provider: CompletionProvider): boolean;

    start(providers: CompletionProvider[] | null, context: CompletionContext): boolean;

    unblock_interactive(): void;

    vfunc_activate_proposal(): void;

    vfunc_hide(): void;

    vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void;

    vfunc_move_page(step: Gtk.ScrollStep, num: number): void;

    vfunc_populate_context(context: CompletionContext): void;

    vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean;

    vfunc_show(): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any];

    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    get_name(): string;

    parser_finished(builder: Gtk.Builder): void;

    set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;

    set_name(name: string): void;

    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;

    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;

    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any];

    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

    vfunc_get_name(): string;

    vfunc_parser_finished(builder: Gtk.Builder): void;

    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;

    vfunc_set_name(name: string): void;
}

export module CompletionContext {

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        activation: CompletionActivation;
        completion: Completion;
        iter: Gtk.TextIter;
    }
}

export class CompletionContext extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<CompletionContext>;


    constructor(properties?: Partial<CompletionContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CompletionContext.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get activation(): CompletionActivation;
    set activation(val: CompletionActivation);

    get completion(): Completion;

    get iter(): Gtk.TextIter;
    set iter(val: Gtk.TextIter);

    // Fields
    priv: CompletionContextPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'cancelled', callback: (_source: this) => void): number;

    connect_after(signal: 'cancelled', callback: (_source: this) => void): number;

    emit(signal: 'cancelled'): void;


    // Members

    add_proposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void;

    get_activation(): CompletionActivation;

    get_iter(): [boolean, Gtk.TextIter];

    vfunc_cancelled(): void;


}

export module CompletionInfo {

    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;

    }
}

export class CompletionInfo extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<CompletionInfo>;


    constructor(properties?: Partial<CompletionInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CompletionInfo.ConstructorProperties>, ...args: any[]): void;


    // Fields
    priv: CompletionInfoPrivate | any;


    // Constructors

    static ["new"](): CompletionInfo;

    // Members

    move_to_iter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void;


}

export module CompletionItem {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        gicon: Gio.Icon;
        icon: GdkPixbuf.Pixbuf;
        icon_name: string;
        iconName: string;
        info: string;
        label: string;
        markup: string;
        text: string;
    }
}

export class CompletionItem extends GObject.Object implements CompletionProposal {
    static $gtype: GObject.GType<CompletionItem>;


    constructor(properties?: Partial<CompletionItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CompletionItem.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);

    get icon(): GdkPixbuf.Pixbuf;
    set icon(val: GdkPixbuf.Pixbuf);

    get icon_name(): string;
    set icon_name(val: string);

    get iconName(): string;
    set iconName(val: string);

    get info(): string;
    set info(val: string);

    get label(): string;
    set label(val: string);

    get markup(): string;
    set markup(val: string);

    get text(): string;
    set text(val: string);

    // Fields
    priv: CompletionItemPrivate;


    // Constructors

    static ["new"](): CompletionItem;

    // Members

    set_gicon(gicon?: Gio.Icon | null): void;

    set_icon(icon?: GdkPixbuf.Pixbuf | null): void;

    set_icon_name(icon_name?: string | null): void;

    set_info(info?: string | null): void;

    set_label(label?: string | null): void;

    set_markup(markup?: string | null): void;

    set_text(text?: string | null): void;

    // Implemented Members

    changed(): void;

    equal(other: CompletionProposal): boolean;

    get_gicon(): Gio.Icon | null;

    get_icon(): GdkPixbuf.Pixbuf | null;

    get_icon_name(): string | null;

    get_info(): string | null;

    get_label(): string;

    get_markup(): string;

    get_text(): string;

    hash(): number;

    vfunc_changed(): void;

    vfunc_equal(other: CompletionProposal): boolean;

    vfunc_get_gicon(): Gio.Icon | null;

    vfunc_get_icon(): GdkPixbuf.Pixbuf | null;

    vfunc_get_icon_name(): string | null;

    vfunc_get_info(): string | null;

    vfunc_get_label(): string;

    vfunc_get_markup(): string;

    vfunc_get_text(): string;

    vfunc_hash(): number;
}

export module CompletionWords {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        activation: CompletionActivation;
        icon: GdkPixbuf.Pixbuf;
        interactive_delay: number;
        interactiveDelay: number;
        minimum_word_size: number;
        minimumWordSize: number;
        name: string;
        priority: number;
        proposals_batch_size: number;
        proposalsBatchSize: number;
        scan_batch_size: number;
        scanBatchSize: number;
    }
}

export class CompletionWords extends GObject.Object implements CompletionProvider {
    static $gtype: GObject.GType<CompletionWords>;


    constructor(properties?: Partial<CompletionWords.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CompletionWords.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get activation(): CompletionActivation;
    set activation(val: CompletionActivation);

    get icon(): GdkPixbuf.Pixbuf;
    set icon(val: GdkPixbuf.Pixbuf);

    get interactive_delay(): number;
    set interactive_delay(val: number);

    get interactiveDelay(): number;
    set interactiveDelay(val: number);

    get minimum_word_size(): number;
    set minimum_word_size(val: number);

    get minimumWordSize(): number;
    set minimumWordSize(val: number);

    get name(): string;
    set name(val: string);

    get priority(): number;
    set priority(val: number);

    get proposals_batch_size(): number;
    set proposals_batch_size(val: number);

    get proposalsBatchSize(): number;
    set proposalsBatchSize(val: number);

    get scan_batch_size(): number;
    set scan_batch_size(val: number);

    get scanBatchSize(): number;
    set scanBatchSize(val: number);

    // Fields
    priv: CompletionWordsPrivate;


    // Constructors

    static ["new"](name?: string | null, icon?: GdkPixbuf.Pixbuf | null): CompletionWords;

    // Members

    register(buffer: Gtk.TextBuffer): void;

    unregister(buffer: Gtk.TextBuffer): void;

    // Implemented Members

    activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;

    get_activation(): CompletionActivation;

    get_gicon(): Gio.Icon | null;

    get_icon(): GdkPixbuf.Pixbuf | null;

    get_icon_name(): string | null;

    get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;

    get_interactive_delay(): number;

    get_name(): string;

    get_priority(): number;

    get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];

    match(context: CompletionContext): boolean;

    populate(context: CompletionContext): void;

    update_info(proposal: CompletionProposal, info: CompletionInfo): void;

    vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;

    vfunc_get_activation(): CompletionActivation;

    vfunc_get_gicon(): Gio.Icon | null;

    vfunc_get_icon(): GdkPixbuf.Pixbuf | null;

    vfunc_get_icon_name(): string | null;

    vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;

    vfunc_get_interactive_delay(): number;

    vfunc_get_name(): string;

    vfunc_get_priority(): number;

    vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];

    vfunc_match(context: CompletionContext): boolean;

    vfunc_populate(context: CompletionContext): void;

    vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
}

export module File {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        compression_type: CompressionType;
        compressionType: CompressionType;
        encoding: Encoding;
        location: Gio.File;
        newline_type: NewlineType;
        newlineType: NewlineType;
        read_only: boolean;
        readOnly: boolean;
    }
}

export class File extends GObject.Object {
    static $gtype: GObject.GType<File>;


    constructor(properties?: Partial<File.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<File.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get compression_type(): CompressionType;

    get compressionType(): CompressionType;

    get encoding(): Encoding;

    get location(): Gio.File;
    set location(val: Gio.File);

    get newline_type(): NewlineType;

    get newlineType(): NewlineType;

    get read_only(): boolean;

    get readOnly(): boolean;

    // Fields
    priv: FilePrivate;


    // Constructors

    static ["new"](): File;

    // Members

    check_file_on_disk(): void;

    get_compression_type(): CompressionType;

    get_encoding(): Encoding;

    get_location(): Gio.File;

    get_newline_type(): NewlineType;

    is_deleted(): boolean;

    is_externally_modified(): boolean;

    is_local(): boolean;

    is_readonly(): boolean;

    set_location(location?: Gio.File | null): void;


}

export module FileLoader {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: Buffer;
        file: File;
        input_stream: Gio.InputStream;
        inputStream: Gio.InputStream;
        location: Gio.File;
    }
}

export class FileLoader extends GObject.Object {
    static $gtype: GObject.GType<FileLoader>;


    constructor(properties?: Partial<FileLoader.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileLoader.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get buffer(): Buffer;

    get file(): File;

    get input_stream(): Gio.InputStream;

    get inputStream(): Gio.InputStream;

    get location(): Gio.File;

    // Fields
    priv: FileLoaderPrivate;


    // Constructors

    static ["new"](buffer: Buffer, file: File): FileLoader;

    static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

    // Members

    get_buffer(): Buffer;

    get_compression_type(): CompressionType;

    get_encoding(): Encoding;

    get_file(): File;

    get_input_stream(): Gio.InputStream | null;

    get_location(): Gio.File | null;

    get_newline_type(): NewlineType;

    load_async(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, progress_callback_notify?: GLib.DestroyNotify | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    load_finish(result: Gio.AsyncResult): boolean;

    set_candidate_encodings(candidate_encodings: Encoding[]): void;


}

export module FileSaver {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: Buffer;
        compression_type: CompressionType;
        compressionType: CompressionType;
        encoding: Encoding;
        file: File;
        flags: FileSaverFlags;
        location: Gio.File;
        newline_type: NewlineType;
        newlineType: NewlineType;
    }
}

export class FileSaver extends GObject.Object {
    static $gtype: GObject.GType<FileSaver>;


    constructor(properties?: Partial<FileSaver.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileSaver.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get buffer(): Buffer;

    get compression_type(): CompressionType;
    set compression_type(val: CompressionType);

    get compressionType(): CompressionType;
    set compressionType(val: CompressionType);

    get encoding(): Encoding;
    set encoding(val: Encoding);

    get file(): File;

    get flags(): FileSaverFlags;
    set flags(val: FileSaverFlags);

    get location(): Gio.File;

    get newline_type(): NewlineType;
    set newline_type(val: NewlineType);

    get newlineType(): NewlineType;
    set newlineType(val: NewlineType);

    // Fields
    object: GObject.Object;
    priv: FileSaverPrivate;


    // Constructors

    static ["new"](buffer: Buffer, file: File): FileSaver;

    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

    // Members

    get_buffer(): Buffer;

    get_compression_type(): CompressionType;

    get_encoding(): Encoding;

    get_file(): File;

    get_flags(): FileSaverFlags;

    get_location(): Gio.File;

    get_newline_type(): NewlineType;

    save_async(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, progress_callback_notify?: GLib.DestroyNotify | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    save_finish(result: Gio.AsyncResult): boolean;

    set_compression_type(compression_type: CompressionType): void;

    set_encoding(encoding?: Encoding | null): void;

    set_flags(flags: FileSaverFlags): void;

    set_newline_type(newline_type: NewlineType): void;


}

export module Gutter {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        view: View;
        window_type: Gtk.TextWindowType;
        windowType: Gtk.TextWindowType;
    }
}

export class Gutter extends GObject.Object {
    static $gtype: GObject.GType<Gutter>;


    constructor(properties?: Partial<Gutter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Gutter.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get view(): View;

    get window_type(): Gtk.TextWindowType;

    get windowType(): Gtk.TextWindowType;

    // Fields
    priv: GutterPrivate;


    // Members

    get_renderer_at_pos(x: number, y: number): GutterRenderer | null;

    get_view(): View;

    get_window_type(): Gtk.TextWindowType;

    insert(renderer: GutterRenderer, position: number): boolean;

    queue_draw(): void;

    remove(renderer: GutterRenderer): void;

    reorder(renderer: GutterRenderer, position: number): void;


}

export module GutterRenderer {

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        alignment_mode: GutterRendererAlignmentMode;
        alignmentMode: GutterRendererAlignmentMode;
        background_rgba: Gdk.RGBA;
        backgroundRgba: Gdk.RGBA;
        background_set: boolean;
        backgroundSet: boolean;
        size: number;
        view: Gtk.TextView;
        visible: boolean;
        window_type: Gtk.TextWindowType;
        windowType: Gtk.TextWindowType;
        xalign: number;
        xpad: number;
        yalign: number;
        ypad: number;
    }
}

export abstract class GutterRenderer extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<GutterRenderer>;


    constructor(properties?: Partial<GutterRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GutterRenderer.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get alignment_mode(): GutterRendererAlignmentMode;
    set alignment_mode(val: GutterRendererAlignmentMode);

    get alignmentMode(): GutterRendererAlignmentMode;
    set alignmentMode(val: GutterRendererAlignmentMode);

    get background_rgba(): Gdk.RGBA;
    set background_rgba(val: Gdk.RGBA);

    get backgroundRgba(): Gdk.RGBA;
    set backgroundRgba(val: Gdk.RGBA);

    get background_set(): boolean;
    set background_set(val: boolean);

    get backgroundSet(): boolean;
    set backgroundSet(val: boolean);

    get size(): number;
    set size(val: number);

    get view(): Gtk.TextView;

    get visible(): boolean;
    set visible(val: boolean);

    get window_type(): Gtk.TextWindowType;

    get windowType(): Gtk.TextWindowType;

    get xalign(): number;
    set xalign(val: number);

    get xpad(): number;
    set xpad(val: number);

    get yalign(): number;
    set yalign(val: number);

    get ypad(): number;
    set ypad(val: number);


    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): number;

    connect_after(signal: 'activate', callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): number;

    emit(signal: 'activate', iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;

    connect(signal: 'query-activatable', callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean): number;

    connect_after(signal: 'query-activatable', callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean): number;

    emit(signal: 'query-activatable', iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;

    connect(signal: 'query-data', callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void): number;

    connect_after(signal: 'query-data', callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void): number;

    emit(signal: 'query-data', start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;

    connect(signal: 'query-tooltip', callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean): number;

    connect_after(signal: 'query-tooltip', callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean): number;

    emit(signal: 'query-tooltip', iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void;

    connect(signal: 'queue-draw', callback: (_source: this) => void): number;

    connect_after(signal: 'queue-draw', callback: (_source: this) => void): number;

    emit(signal: 'queue-draw'): void;


    // Members

    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;

    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void;

    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;

    end(): void;

    get_alignment(): [number, number];

    get_alignment_mode(): GutterRendererAlignmentMode;

    get_background(): [boolean, Gdk.RGBA | null];

    get_padding(): [number, number];

    get_size(): number;

    get_view(): Gtk.TextView;

    get_visible(): boolean;

    get_window_type(): Gtk.TextWindowType;

    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;

    query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;

    query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;

    queue_draw(): void;

    set_alignment(xalign: number, yalign: number): void;

    set_alignment_mode(mode: GutterRendererAlignmentMode): void;

    set_background(color?: Gdk.RGBA | null): void;

    set_padding(xpad: number, ypad: number): void;

    set_size(size: number): void;

    set_visible(visible: boolean): void;

    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;

    vfunc_begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void;

    vfunc_change_buffer(old_buffer?: Gtk.TextBuffer | null): void;

    vfunc_change_view(old_view?: Gtk.TextView | null): void;

    vfunc_draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;

    vfunc_end(): void;

    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;

    vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;

    vfunc_query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;

    vfunc_queue_draw(): void;


}

export module GutterRendererPixbuf {

    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {
        [key: string]: any;

        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        pixbuf: GdkPixbuf.Pixbuf;
    }
}

export class GutterRendererPixbuf extends GutterRenderer {
    static $gtype: GObject.GType<GutterRendererPixbuf>;


    constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GutterRendererPixbuf.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);

    get icon_name(): string;
    set icon_name(val: string);

    get iconName(): string;
    set iconName(val: string);

    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);


    // Constructors

    static ["new"](): GutterRendererPixbuf;

    // Members

    get_gicon(): Gio.Icon;

    get_icon_name(): string;

    get_pixbuf(): GdkPixbuf.Pixbuf;

    set_gicon(icon?: Gio.Icon | null): void;

    set_icon_name(icon_name?: string | null): void;

    set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;


}

export module GutterRendererText {

    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {
        [key: string]: any;

        markup: string;
        text: string;
    }
}

export class GutterRendererText extends GutterRenderer {
    static $gtype: GObject.GType<GutterRendererText>;


    constructor(properties?: Partial<GutterRendererText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GutterRendererText.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get markup(): string;
    set markup(val: string);

    get text(): string;
    set text(val: string);


    // Constructors

    static ["new"](): GutterRendererText;

    // Members

    measure(text: string): [number, number];

    measure_markup(markup: string): [number, number];

    set_markup(markup: string, length: number): void;

    set_text(text: string, length: number): void;


}

export module Language {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        hidden: boolean;
        id: string;
        name: string;
        section: string;
    }
}

export class Language extends GObject.Object {
    static $gtype: GObject.GType<Language>;


    constructor(properties?: Partial<Language.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Language.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get hidden(): boolean;

    get id(): string;

    get name(): string;

    get section(): string;

    // Fields
    priv: LanguagePrivate;


    // Members

    get_globs(): string[] | null;

    get_hidden(): boolean;

    get_id(): string;

    get_metadata(name: string): string | null;

    get_mime_types(): string[] | null;

    get_name(): string;

    get_section(): string;

    get_style_fallback(style_id: string): string | null;

    get_style_ids(): string[] | null;

    get_style_name(style_id: string): string | null;


}

export module LanguageManager {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        language_ids: string[];
        languageIds: string[];
        search_path: string[];
        searchPath: string[];
    }
}

export class LanguageManager extends GObject.Object {
    static $gtype: GObject.GType<LanguageManager>;


    constructor(properties?: Partial<LanguageManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LanguageManager.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get language_ids(): string[];

    get languageIds(): string[];

    get search_path(): string[];
    set search_path(val: string[]);

    get searchPath(): string[];
    set searchPath(val: string[]);

    // Fields
    priv: LanguageManagerPrivate;


    // Constructors

    static ["new"](): LanguageManager;

    // Members

    get_language(id: string): Language | null;

    get_language_ids(): string[] | null;

    get_search_path(): string[];

    guess_language(filename?: string | null, content_type?: string | null): Language | null;

    set_search_path(dirs?: string[] | null): void;

    static get_default(): LanguageManager;


}

export module Map {

    export interface ConstructorProperties extends View.ConstructorProperties {
        [key: string]: any;

        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        view: View;
    }
}

export class Map extends View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<Map>;


    constructor(properties?: Partial<Map.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Map.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get font_desc(): Pango.FontDescription;
    set font_desc(val: Pango.FontDescription);

    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);

    get view(): View;
    set view(val: View);


    // Constructors

    static ["new"](): Map;

    // Members

    get_view(): View | null;

    set_view(view: View): void;


}

export module Mark {

    export interface ConstructorProperties extends Gtk.TextMark.ConstructorProperties {
        [key: string]: any;

        category: string;
    }
}

export class Mark extends Gtk.TextMark {
    static $gtype: GObject.GType<Mark>;


    constructor(properties?: Partial<Mark.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Mark.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get category(): string;

    // Fields
    priv: MarkPrivate;


    // Constructors

    static ["new"](name: string | null, category: string): Mark;
    // Conflicted with Gtk.TextMark.new
    static ["new"](...args: never[]): any;

    // Members

    get_category(): string;

    next(category?: string | null): Mark | null;

    prev(category: string): Mark | null;


}

export module MarkAttributes {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        background: Gdk.RGBA;
        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        pixbuf: GdkPixbuf.Pixbuf;
    }
}

export class MarkAttributes extends GObject.Object {
    static $gtype: GObject.GType<MarkAttributes>;


    constructor(properties?: Partial<MarkAttributes.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MarkAttributes.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get background(): Gdk.RGBA;
    set background(val: Gdk.RGBA);

    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);

    get icon_name(): string;
    set icon_name(val: string);

    get iconName(): string;
    set iconName(val: string);

    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);


    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'query-tooltip-markup', callback: (_source: this, mark: Mark) => string): number;

    connect_after(signal: 'query-tooltip-markup', callback: (_source: this, mark: Mark) => string): number;

    emit(signal: 'query-tooltip-markup', mark: Mark): void;

    connect(signal: 'query-tooltip-text', callback: (_source: this, mark: Mark) => string): number;

    connect_after(signal: 'query-tooltip-text', callback: (_source: this, mark: Mark) => string): number;

    emit(signal: 'query-tooltip-text', mark: Mark): void;


    // Constructors

    static ["new"](): MarkAttributes;

    // Members

    get_background(): [boolean, Gdk.RGBA];

    get_gicon(): Gio.Icon;

    get_icon_name(): string;

    get_pixbuf(): GdkPixbuf.Pixbuf;

    get_tooltip_markup(mark: Mark): string;

    get_tooltip_text(mark: Mark): string;

    render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;

    set_background(background: Gdk.RGBA): void;

    set_gicon(gicon: Gio.Icon): void;

    set_icon_name(icon_name: string): void;

    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;


}

export module PrintCompositor {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        body_font_name: string;
        bodyFontName: string;
        buffer: Buffer;
        footer_font_name: string;
        footerFontName: string;
        header_font_name: string;
        headerFontName: string;
        highlight_syntax: boolean;
        highlightSyntax: boolean;
        line_numbers_font_name: string;
        lineNumbersFontName: string;
        n_pages: number;
        nPages: number;
        print_footer: boolean;
        printFooter: boolean;
        print_header: boolean;
        printHeader: boolean;
        print_line_numbers: number;
        printLineNumbers: number;
        tab_width: number;
        tabWidth: number;
        wrap_mode: Gtk.WrapMode;
        wrapMode: Gtk.WrapMode;
    }
}

export class PrintCompositor extends GObject.Object {
    static $gtype: GObject.GType<PrintCompositor>;


    constructor(properties?: Partial<PrintCompositor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PrintCompositor.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get body_font_name(): string;
    set body_font_name(val: string);

    get bodyFontName(): string;
    set bodyFontName(val: string);

    get buffer(): Buffer;

    get footer_font_name(): string;
    set footer_font_name(val: string);

    get footerFontName(): string;
    set footerFontName(val: string);

    get header_font_name(): string;
    set header_font_name(val: string);

    get headerFontName(): string;
    set headerFontName(val: string);

    get highlight_syntax(): boolean;
    set highlight_syntax(val: boolean);

    get highlightSyntax(): boolean;
    set highlightSyntax(val: boolean);

    get line_numbers_font_name(): string;
    set line_numbers_font_name(val: string);

    get lineNumbersFontName(): string;
    set lineNumbersFontName(val: string);

    get n_pages(): number;

    get nPages(): number;

    get print_footer(): boolean;
    set print_footer(val: boolean);

    get printFooter(): boolean;
    set printFooter(val: boolean);

    get print_header(): boolean;
    set print_header(val: boolean);

    get printHeader(): boolean;
    set printHeader(val: boolean);

    get print_line_numbers(): number;
    set print_line_numbers(val: number);

    get printLineNumbers(): number;
    set printLineNumbers(val: number);

    get tab_width(): number;
    set tab_width(val: number);

    get tabWidth(): number;
    set tabWidth(val: number);

    get wrap_mode(): Gtk.WrapMode;
    set wrap_mode(val: Gtk.WrapMode);

    get wrapMode(): Gtk.WrapMode;
    set wrapMode(val: Gtk.WrapMode);

    // Fields
    priv: PrintCompositorPrivate;


    // Constructors

    static ["new"](buffer: Buffer): PrintCompositor;

    static new_from_view(view: View): PrintCompositor;

    // Members

    draw_page(context: Gtk.PrintContext, page_nr: number): void;

    get_body_font_name(): string;

    get_bottom_margin(unit: Gtk.Unit): number;

    get_buffer(): Buffer;

    get_footer_font_name(): string;

    get_header_font_name(): string;

    get_highlight_syntax(): boolean;

    get_left_margin(unit: Gtk.Unit): number;

    get_line_numbers_font_name(): string;

    get_n_pages(): number;

    get_pagination_progress(): number;

    get_print_footer(): boolean;

    get_print_header(): boolean;

    get_print_line_numbers(): number;

    get_right_margin(unit: Gtk.Unit): number;

    get_tab_width(): number;

    get_top_margin(unit: Gtk.Unit): number;

    get_wrap_mode(): Gtk.WrapMode;

    paginate(context: Gtk.PrintContext): boolean;

    set_body_font_name(font_name: string): void;

    set_bottom_margin(margin: number, unit: Gtk.Unit): void;

    set_footer_font_name(font_name?: string | null): void;

    set_footer_format(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void;

    set_header_font_name(font_name?: string | null): void;

    set_header_format(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void;

    set_highlight_syntax(highlight: boolean): void;

    set_left_margin(margin: number, unit: Gtk.Unit): void;

    set_line_numbers_font_name(font_name?: string | null): void;

    set_print_footer(print: boolean): void;

    set_print_header(print: boolean): void;

    set_print_line_numbers(interval: number): void;

    set_right_margin(margin: number, unit: Gtk.Unit): void;

    set_tab_width(width: number): void;

    set_top_margin(margin: number, unit: Gtk.Unit): void;

    set_wrap_mode(wrap_mode: Gtk.WrapMode): void;


}

export module Region {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: Gtk.TextBuffer;
    }
}

export class Region extends GObject.Object {
    static $gtype: GObject.GType<Region>;


    constructor(properties?: Partial<Region.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Region.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get buffer(): Gtk.TextBuffer;


    // Constructors

    static ["new"](buffer: Gtk.TextBuffer): Region;

    // Members

    add_region(region_to_add?: Region | null): void;

    add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;

    get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];

    get_buffer(): Gtk.TextBuffer | null;

    get_start_region_iter(): RegionIter;

    intersect_region(region2?: Region | null): Region | null;

    intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;

    is_empty(): boolean;

    subtract_region(region_to_subtract?: Region | null): void;

    subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;

    to_string(): string | null;


}

export module SearchContext {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: Buffer;
        highlight: boolean;
        match_style: Style;
        matchStyle: Style;
        occurrences_count: number;
        occurrencesCount: number;
        regex_error: any;
        regexError: any;
        settings: SearchSettings;
    }
}

export class SearchContext extends GObject.Object {
    static $gtype: GObject.GType<SearchContext>;


    constructor(properties?: Partial<SearchContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SearchContext.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get buffer(): Buffer;

    get highlight(): boolean;
    set highlight(val: boolean);

    get match_style(): Style;
    set match_style(val: Style);

    get matchStyle(): Style;
    set matchStyle(val: Style);

    get occurrences_count(): number;

    get occurrencesCount(): number;

    get regex_error(): any;

    get regexError(): any;

    get settings(): SearchSettings;

    // Fields
    priv: SearchContextPrivate;


    // Constructors

    static ["new"](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

    // Members

    backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

    backward_async(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

    forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

    forward_async(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

    get_buffer(): Buffer;

    get_highlight(): boolean;

    get_match_style(): Style;

    get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;

    get_occurrences_count(): number;

    get_regex_error(): GLib.Error | null;

    get_settings(): SearchSettings;

    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;

    replace_all(replace: string, replace_length: number): number;

    set_highlight(highlight: boolean): void;

    set_match_style(match_style?: Style | null): void;


}

export module SearchSettings {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        at_word_boundaries: boolean;
        atWordBoundaries: boolean;
        case_sensitive: boolean;
        caseSensitive: boolean;
        regex_enabled: boolean;
        regexEnabled: boolean;
        search_text: string;
        searchText: string;
        wrap_around: boolean;
        wrapAround: boolean;
    }
}

export class SearchSettings extends GObject.Object {
    static $gtype: GObject.GType<SearchSettings>;


    constructor(properties?: Partial<SearchSettings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SearchSettings.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get at_word_boundaries(): boolean;
    set at_word_boundaries(val: boolean);

    get atWordBoundaries(): boolean;
    set atWordBoundaries(val: boolean);

    get case_sensitive(): boolean;
    set case_sensitive(val: boolean);

    get caseSensitive(): boolean;
    set caseSensitive(val: boolean);

    get regex_enabled(): boolean;
    set regex_enabled(val: boolean);

    get regexEnabled(): boolean;
    set regexEnabled(val: boolean);

    get search_text(): string;
    set search_text(val: string);

    get searchText(): string;
    set searchText(val: string);

    get wrap_around(): boolean;
    set wrap_around(val: boolean);

    get wrapAround(): boolean;
    set wrapAround(val: boolean);

    // Fields
    priv: SearchSettingsPrivate;


    // Constructors

    static ["new"](): SearchSettings;

    // Members

    get_at_word_boundaries(): boolean;

    get_case_sensitive(): boolean;

    get_regex_enabled(): boolean;

    get_search_text(): string | null;

    get_wrap_around(): boolean;

    set_at_word_boundaries(at_word_boundaries: boolean): void;

    set_case_sensitive(case_sensitive: boolean): void;

    set_regex_enabled(regex_enabled: boolean): void;

    set_search_text(search_text?: string | null): void;

    set_wrap_around(wrap_around: boolean): void;


}

export module SpaceDrawer {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        enable_matrix: boolean;
        enableMatrix: boolean;
        matrix: GLib.Variant;
    }
}

export class SpaceDrawer extends GObject.Object {
    static $gtype: GObject.GType<SpaceDrawer>;


    constructor(properties?: Partial<SpaceDrawer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SpaceDrawer.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get enable_matrix(): boolean;
    set enable_matrix(val: boolean);

    get enableMatrix(): boolean;
    set enableMatrix(val: boolean);

    get matrix(): GLib.Variant;
    set matrix(val: GLib.Variant);

    // Fields
    priv: SpaceDrawerPrivate;


    // Constructors

    static ["new"](): SpaceDrawer;

    // Members

    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;

    get_enable_matrix(): boolean;

    get_matrix(): GLib.Variant;

    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;

    set_enable_matrix(enable_matrix: boolean): void;

    set_matrix(matrix?: GLib.Variant | null): void;

    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;


}

export module Style {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        background: string;
        background_set: boolean;
        backgroundSet: boolean;
        bold: boolean;
        bold_set: boolean;
        boldSet: boolean;
        foreground: string;
        foreground_set: boolean;
        foregroundSet: boolean;
        italic: boolean;
        italic_set: boolean;
        italicSet: boolean;
        line_background: string;
        lineBackground: string;
        line_background_set: boolean;
        lineBackgroundSet: boolean;
        pango_underline: Pango.Underline;
        pangoUnderline: Pango.Underline;
        scale: string;
        scale_set: boolean;
        scaleSet: boolean;
        strikethrough: boolean;
        strikethrough_set: boolean;
        strikethroughSet: boolean;
        underline_color: string;
        underlineColor: string;
        underline_color_set: boolean;
        underlineColorSet: boolean;
        underline_set: boolean;
        underlineSet: boolean;
    }
}

export class Style extends GObject.Object {
    static $gtype: GObject.GType<Style>;


    constructor(properties?: Partial<Style.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Style.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get background(): string;

    get background_set(): boolean;

    get backgroundSet(): boolean;

    get bold(): boolean;

    get bold_set(): boolean;

    get boldSet(): boolean;

    get foreground(): string;

    get foreground_set(): boolean;

    get foregroundSet(): boolean;

    get italic(): boolean;

    get italic_set(): boolean;

    get italicSet(): boolean;

    get line_background(): string;

    get lineBackground(): string;

    get line_background_set(): boolean;

    get lineBackgroundSet(): boolean;

    get pango_underline(): Pango.Underline;

    get pangoUnderline(): Pango.Underline;

    get scale(): string;

    get scale_set(): boolean;

    get scaleSet(): boolean;

    get strikethrough(): boolean;

    get strikethrough_set(): boolean;

    get strikethroughSet(): boolean;

    get underline_color(): string;

    get underlineColor(): string;

    get underline_color_set(): boolean;

    get underlineColorSet(): boolean;

    get underline_set(): boolean;

    get underlineSet(): boolean;


    // Members

    apply(tag: Gtk.TextTag): void;

    copy(): Style;


}

export module StyleScheme {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        description: string;
        filename: string;
        id: string;
        name: string;
    }
}

export class StyleScheme extends GObject.Object {
    static $gtype: GObject.GType<StyleScheme>;


    constructor(properties?: Partial<StyleScheme.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StyleScheme.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get description(): string;

    get filename(): string;

    get id(): string;

    get name(): string;

    // Fields
    base: GObject.Object;
    priv: StyleSchemePrivate;


    // Members

    get_authors(): string[] | null;

    get_description(): string | null;

    get_filename(): string | null;

    get_id(): string;

    get_name(): string;

    get_style(style_id: string): Style | null;


}

export module StyleSchemeChooserButton {

    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;

    }
}

export class StyleSchemeChooserButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, StyleSchemeChooser {
    static $gtype: GObject.GType<StyleSchemeChooserButton>;


    constructor(properties?: Partial<StyleSchemeChooserButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StyleSchemeChooserButton.ConstructorProperties>, ...args: any[]): void;


    // Implemented Properties

    get action_name(): string;
    set action_name(val: string);

    get actionName(): string;
    set actionName(val: string);

    get action_target(): GLib.Variant;
    set action_target(val: GLib.Variant);

    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);

    get related_action(): Gtk.Action;
    set related_action(val: Gtk.Action);

    get relatedAction(): Gtk.Action;
    set relatedAction(val: Gtk.Action);

    get use_action_appearance(): boolean;
    set use_action_appearance(val: boolean);

    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    get style_scheme(): StyleScheme;
    set style_scheme(val: StyleScheme);

    get styleScheme(): StyleScheme;
    set styleScheme(val: StyleScheme);

    // Constructors

    static ["new"](): StyleSchemeChooserButton;


    // Implemented Members

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

    get_style_scheme(): StyleScheme;

    set_style_scheme(scheme: StyleScheme): void;

    vfunc_get_style_scheme(): StyleScheme;

    vfunc_set_style_scheme(scheme: StyleScheme): void;
}

export module StyleSchemeChooserWidget {

    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

    }
}

export class StyleSchemeChooserWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, StyleSchemeChooser {
    static $gtype: GObject.GType<StyleSchemeChooserWidget>;


    constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StyleSchemeChooserWidget.ConstructorProperties>, ...args: any[]): void;


    // Implemented Properties

    get style_scheme(): StyleScheme;
    set style_scheme(val: StyleScheme);

    get styleScheme(): StyleScheme;
    set styleScheme(val: StyleScheme);

    // Constructors

    static ["new"](): StyleSchemeChooserWidget;


    // Implemented Members

    get_style_scheme(): StyleScheme;

    set_style_scheme(scheme: StyleScheme): void;

    vfunc_get_style_scheme(): StyleScheme;

    vfunc_set_style_scheme(scheme: StyleScheme): void;
}

export module StyleSchemeManager {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        scheme_ids: string[];
        schemeIds: string[];
        search_path: string[];
        searchPath: string[];
    }
}

export class StyleSchemeManager extends GObject.Object {
    static $gtype: GObject.GType<StyleSchemeManager>;


    constructor(properties?: Partial<StyleSchemeManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StyleSchemeManager.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get scheme_ids(): string[];

    get schemeIds(): string[];

    get search_path(): string[];
    set search_path(val: string[]);

    get searchPath(): string[];
    set searchPath(val: string[]);

    // Fields
    priv: StyleSchemeManagerPrivate;


    // Constructors

    static ["new"](): StyleSchemeManager;

    // Members

    append_search_path(path: string): void;

    force_rescan(): void;

    get_scheme(scheme_id: string): StyleScheme | null;

    get_scheme_ids(): string[] | null;

    get_search_path(): string[];

    prepend_search_path(path: string): void;

    set_search_path(path?: string[] | null): void;

    static get_default(): StyleSchemeManager;


}

export module Tag {

    export interface ConstructorProperties extends Gtk.TextTag.ConstructorProperties {
        [key: string]: any;

        draw_spaces: boolean;
        drawSpaces: boolean;
        draw_spaces_set: boolean;
        drawSpacesSet: boolean;
    }
}

export class Tag extends Gtk.TextTag {
    static $gtype: GObject.GType<Tag>;


    constructor(properties?: Partial<Tag.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tag.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get draw_spaces(): boolean;
    set draw_spaces(val: boolean);

    get drawSpaces(): boolean;
    set drawSpaces(val: boolean);

    get draw_spaces_set(): boolean;
    set draw_spaces_set(val: boolean);

    get drawSpacesSet(): boolean;
    set drawSpacesSet(val: boolean);


    // Constructors

    static ["new"](name?: string | null): Tag;


}

export module View {

    export interface ConstructorProperties extends Gtk.TextView.ConstructorProperties {
        [key: string]: any;

        auto_indent: boolean;
        autoIndent: boolean;
        background_pattern: BackgroundPatternType;
        backgroundPattern: BackgroundPatternType;
        completion: Completion;
        highlight_current_line: boolean;
        highlightCurrentLine: boolean;
        indent_on_tab: boolean;
        indentOnTab: boolean;
        indent_width: number;
        indentWidth: number;
        insert_spaces_instead_of_tabs: boolean;
        insertSpacesInsteadOfTabs: boolean;
        right_margin_position: number;
        rightMarginPosition: number;
        show_line_marks: boolean;
        showLineMarks: boolean;
        show_line_numbers: boolean;
        showLineNumbers: boolean;
        show_right_margin: boolean;
        showRightMargin: boolean;
        smart_backspace: boolean;
        smartBackspace: boolean;
        smart_home_end: SmartHomeEndType;
        smartHomeEnd: SmartHomeEndType;
        space_drawer: SpaceDrawer;
        spaceDrawer: SpaceDrawer;
        tab_width: number;
        tabWidth: number;
    }
}

export class View extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<View>;


    constructor(properties?: Partial<View.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<View.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get auto_indent(): boolean;
    set auto_indent(val: boolean);

    get autoIndent(): boolean;
    set autoIndent(val: boolean);

    get background_pattern(): BackgroundPatternType;
    set background_pattern(val: BackgroundPatternType);

    get backgroundPattern(): BackgroundPatternType;
    set backgroundPattern(val: BackgroundPatternType);

    get completion(): Completion;

    get highlight_current_line(): boolean;
    set highlight_current_line(val: boolean);

    get highlightCurrentLine(): boolean;
    set highlightCurrentLine(val: boolean);

    get indent_on_tab(): boolean;
    set indent_on_tab(val: boolean);

    get indentOnTab(): boolean;
    set indentOnTab(val: boolean);

    get indent_width(): number;
    set indent_width(val: number);

    get indentWidth(): number;
    set indentWidth(val: number);

    get insert_spaces_instead_of_tabs(): boolean;
    set insert_spaces_instead_of_tabs(val: boolean);

    get insertSpacesInsteadOfTabs(): boolean;
    set insertSpacesInsteadOfTabs(val: boolean);

    get right_margin_position(): number;
    set right_margin_position(val: number);

    get rightMarginPosition(): number;
    set rightMarginPosition(val: number);

    get show_line_marks(): boolean;
    set show_line_marks(val: boolean);

    get showLineMarks(): boolean;
    set showLineMarks(val: boolean);

    get show_line_numbers(): boolean;
    set show_line_numbers(val: boolean);

    get showLineNumbers(): boolean;
    set showLineNumbers(val: boolean);

    get show_right_margin(): boolean;
    set show_right_margin(val: boolean);

    get showRightMargin(): boolean;
    set showRightMargin(val: boolean);

    get smart_backspace(): boolean;
    set smart_backspace(val: boolean);

    get smartBackspace(): boolean;
    set smartBackspace(val: boolean);

    get smart_home_end(): SmartHomeEndType;
    set smart_home_end(val: SmartHomeEndType);

    get smartHomeEnd(): SmartHomeEndType;
    set smartHomeEnd(val: SmartHomeEndType);

    get space_drawer(): SpaceDrawer;

    get spaceDrawer(): SpaceDrawer;

    get tab_width(): number;
    set tab_width(val: number);

    get tabWidth(): number;
    set tabWidth(val: number);

    // Fields
    priv: ViewPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'change-case', callback: (_source: this, case_type: ChangeCaseType) => void): number;

    connect_after(signal: 'change-case', callback: (_source: this, case_type: ChangeCaseType) => void): number;

    emit(signal: 'change-case', case_type: ChangeCaseType): void;

    connect(signal: 'change-number', callback: (_source: this, count: number) => void): number;

    connect_after(signal: 'change-number', callback: (_source: this, count: number) => void): number;

    emit(signal: 'change-number', count: number): void;

    connect(signal: 'join-lines', callback: (_source: this) => void): number;

    connect_after(signal: 'join-lines', callback: (_source: this) => void): number;

    emit(signal: 'join-lines'): void;

    connect(signal: 'line-mark-activated', callback: (_source: this, iter: Gtk.TextIter, event: Gdk.Event) => void): number;

    connect_after(signal: 'line-mark-activated', callback: (_source: this, iter: Gtk.TextIter, event: Gdk.Event) => void): number;

    emit(signal: 'line-mark-activated', iter: Gtk.TextIter, event: Gdk.Event): void;

    connect(signal: 'move-lines', callback: (_source: this, down: boolean) => void): number;

    connect_after(signal: 'move-lines', callback: (_source: this, down: boolean) => void): number;

    emit(signal: 'move-lines', down: boolean): void;

    connect(signal: 'move-to-matching-bracket', callback: (_source: this, extend_selection: boolean) => void): number;

    connect_after(signal: 'move-to-matching-bracket', callback: (_source: this, extend_selection: boolean) => void): number;

    emit(signal: 'move-to-matching-bracket', extend_selection: boolean): void;

    connect(signal: 'move-words', callback: (_source: this, count: number) => void): number;

    connect_after(signal: 'move-words', callback: (_source: this, count: number) => void): number;

    emit(signal: 'move-words', count: number): void;

    connect(signal: 'redo', callback: (_source: this) => void): number;

    connect_after(signal: 'redo', callback: (_source: this) => void): number;

    emit(signal: 'redo'): void;

    connect(signal: 'show-completion', callback: (_source: this) => void): number;

    connect_after(signal: 'show-completion', callback: (_source: this) => void): number;

    emit(signal: 'show-completion'): void;

    connect(signal: 'smart-home-end', callback: (_source: this, iter: Gtk.TextIter, count: number) => void): number;

    connect_after(signal: 'smart-home-end', callback: (_source: this, iter: Gtk.TextIter, count: number) => void): number;

    emit(signal: 'smart-home-end', iter: Gtk.TextIter, count: number): void;

    connect(signal: 'undo', callback: (_source: this) => void): number;

    connect_after(signal: 'undo', callback: (_source: this) => void): number;

    emit(signal: 'undo'): void;

    // Implemented Properties

    get hadjustment(): Gtk.Adjustment;
    set hadjustment(val: Gtk.Adjustment);

    get hscroll_policy(): Gtk.ScrollablePolicy;
    set hscroll_policy(val: Gtk.ScrollablePolicy);

    get hscrollPolicy(): Gtk.ScrollablePolicy;
    set hscrollPolicy(val: Gtk.ScrollablePolicy);

    get vadjustment(): Gtk.Adjustment;
    set vadjustment(val: Gtk.Adjustment);

    get vscroll_policy(): Gtk.ScrollablePolicy;
    set vscroll_policy(val: Gtk.ScrollablePolicy);

    get vscrollPolicy(): Gtk.ScrollablePolicy;
    set vscrollPolicy(val: Gtk.ScrollablePolicy);

    // Constructors

    static ["new"](): View;

    static new_with_buffer(buffer: Buffer): View;

    // Members

    get_auto_indent(): boolean;

    get_background_pattern(): BackgroundPatternType;

    get_completion(): Completion;

    get_gutter(window_type: Gtk.TextWindowType): Gutter;

    get_highlight_current_line(): boolean;

    get_indent_on_tab(): boolean;

    get_indent_width(): number;

    get_insert_spaces_instead_of_tabs(): boolean;

    get_mark_attributes(category: string, priority: number): MarkAttributes;

    get_right_margin_position(): number;

    get_show_line_marks(): boolean;

    get_show_line_numbers(): boolean;

    get_show_right_margin(): boolean;

    get_smart_backspace(): boolean;

    get_smart_home_end(): SmartHomeEndType;

    get_space_drawer(): SpaceDrawer;

    get_tab_width(): number;

    get_visual_column(iter: Gtk.TextIter): number;

    indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

    set_auto_indent(enable: boolean): void;

    set_background_pattern(background_pattern: BackgroundPatternType): void;

    set_highlight_current_line(highlight: boolean): void;

    set_indent_on_tab(enable: boolean): void;

    set_indent_width(width: number): void;

    set_insert_spaces_instead_of_tabs(enable: boolean): void;

    set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;

    set_right_margin_position(pos: number): void;

    set_show_line_marks(show: boolean): void;

    set_show_line_numbers(show: boolean): void;

    set_show_right_margin(show: boolean): void;

    set_smart_backspace(smart_backspace: boolean): void;

    set_smart_home_end(smart_home_end: SmartHomeEndType): void;

    set_tab_width(width: number): void;

    unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;

    vfunc_move_lines(down: boolean): void;

    vfunc_move_words(step: number): void;

    vfunc_redo(): void;

    vfunc_show_completion(): void;

    vfunc_undo(): void;

    // Implemented Members

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}


export class BufferPrivate {
    static $gtype: GObject.GType<BufferPrivate>;


    constructor(copy: BufferPrivate);


}


export class CompletionContextPrivate {
    static $gtype: GObject.GType<CompletionContextPrivate>;


    constructor(copy: CompletionContextPrivate);


}


export class CompletionInfoPrivate {
    static $gtype: GObject.GType<CompletionInfoPrivate>;


    constructor(copy: CompletionInfoPrivate);


}


export class CompletionItemPrivate {
    static $gtype: GObject.GType<CompletionItemPrivate>;


    constructor(copy: CompletionItemPrivate);


}


export class CompletionPrivate {
    static $gtype: GObject.GType<CompletionPrivate>;


    constructor(copy: CompletionPrivate);


}


export class CompletionWordsPrivate {
    static $gtype: GObject.GType<CompletionWordsPrivate>;


    constructor(copy: CompletionWordsPrivate);


}


export class Encoding {
    static $gtype: GObject.GType<Encoding>;


    constructor(copy: Encoding);


    // Members
    copy(): Encoding;

    free(): void;

    get_charset(): string;

    get_name(): string;

    to_string(): string;

    static get_all(): Encoding[];

    static get_current(): Encoding;

    static get_default_candidates(): Encoding[];

    static get_from_charset(charset: string): Encoding | null;

    static get_utf8(): Encoding;
}


export class FileLoaderPrivate {
    static $gtype: GObject.GType<FileLoaderPrivate>;


    constructor(copy: FileLoaderPrivate);


}


export class FilePrivate {
    static $gtype: GObject.GType<FilePrivate>;


    constructor(copy: FilePrivate);


}


export class FileSaverPrivate {
    static $gtype: GObject.GType<FileSaverPrivate>;


    constructor(copy: FileSaverPrivate);


}


export class GutterPrivate {
    static $gtype: GObject.GType<GutterPrivate>;


    constructor(copy: GutterPrivate);


}


export class GutterRendererPixbufPrivate {
    static $gtype: GObject.GType<GutterRendererPixbufPrivate>;


    constructor(copy: GutterRendererPixbufPrivate);


}


export class GutterRendererPrivate {
    static $gtype: GObject.GType<GutterRendererPrivate>;


    constructor(copy: GutterRendererPrivate);


}


export class GutterRendererTextPrivate {
    static $gtype: GObject.GType<GutterRendererTextPrivate>;


    constructor(copy: GutterRendererTextPrivate);


}


export class LanguageManagerPrivate {
    static $gtype: GObject.GType<LanguageManagerPrivate>;


    constructor(copy: LanguageManagerPrivate);


}


export class LanguagePrivate {
    static $gtype: GObject.GType<LanguagePrivate>;


    constructor(copy: LanguagePrivate);


}


export class MarkAttributesPrivate {
    static $gtype: GObject.GType<MarkAttributesPrivate>;


    constructor(copy: MarkAttributesPrivate);


}


export class MarkPrivate {
    static $gtype: GObject.GType<MarkPrivate>;


    constructor(copy: MarkPrivate);


}


export class PrintCompositorPrivate {
    static $gtype: GObject.GType<PrintCompositorPrivate>;


    constructor(copy: PrintCompositorPrivate);


}


export class RegionIter {
    static $gtype: GObject.GType<RegionIter>;


    constructor(copy: RegionIter);


    // Members
    get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];

    is_end(): boolean;

    next(): boolean;
}


export class SearchContextPrivate {
    static $gtype: GObject.GType<SearchContextPrivate>;


    constructor(copy: SearchContextPrivate);


}


export class SearchSettingsPrivate {
    static $gtype: GObject.GType<SearchSettingsPrivate>;


    constructor(copy: SearchSettingsPrivate);


}


export class SpaceDrawerPrivate {
    static $gtype: GObject.GType<SpaceDrawerPrivate>;


    constructor(copy: SpaceDrawerPrivate);


}


export class StyleSchemeManagerPrivate {
    static $gtype: GObject.GType<StyleSchemeManagerPrivate>;


    constructor(copy: StyleSchemeManagerPrivate);


}


export class StyleSchemePrivate {
    static $gtype: GObject.GType<StyleSchemePrivate>;


    constructor(copy: StyleSchemePrivate);


}


export class ViewPrivate {
    static $gtype: GObject.GType<ViewPrivate>;


    constructor(copy: ViewPrivate);


}


export interface CompletionProposalNamespace {
    $gtype: GObject.GType<CompletionProposal>;
    prototype: CompletionProposalPrototype;


}

export type CompletionProposal = CompletionProposalPrototype;

export interface CompletionProposalPrototype extends GObject.Object {


    // Members

    changed(): void;

    equal(other: CompletionProposal): boolean;

    get_gicon(): Gio.Icon | null;

    get_icon(): GdkPixbuf.Pixbuf | null;

    get_icon_name(): string | null;

    get_info(): string | null;

    get_label(): string;

    get_markup(): string;

    get_text(): string;

    hash(): number;

    vfunc_changed(): void;

    vfunc_equal(other: CompletionProposal): boolean;

    vfunc_get_gicon(): Gio.Icon | null;

    vfunc_get_icon(): GdkPixbuf.Pixbuf | null;

    vfunc_get_icon_name(): string | null;

    vfunc_get_info(): string | null;

    vfunc_get_label(): string;

    vfunc_get_markup(): string;

    vfunc_get_text(): string;

    vfunc_hash(): number;
}

export const CompletionProposal: CompletionProposalNamespace;


export interface CompletionProviderNamespace {
    $gtype: GObject.GType<CompletionProvider>;
    prototype: CompletionProviderPrototype;


}

export type CompletionProvider = CompletionProviderPrototype;

export interface CompletionProviderPrototype extends GObject.Object {


    // Members

    activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;

    get_activation(): CompletionActivation;

    get_gicon(): Gio.Icon | null;

    get_icon(): GdkPixbuf.Pixbuf | null;

    get_icon_name(): string | null;

    get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;

    get_interactive_delay(): number;

    get_name(): string;

    get_priority(): number;

    get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];

    match(context: CompletionContext): boolean;

    populate(context: CompletionContext): void;

    update_info(proposal: CompletionProposal, info: CompletionInfo): void;

    vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;

    vfunc_get_activation(): CompletionActivation;

    vfunc_get_gicon(): Gio.Icon | null;

    vfunc_get_icon(): GdkPixbuf.Pixbuf | null;

    vfunc_get_icon_name(): string | null;

    vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;

    vfunc_get_interactive_delay(): number;

    vfunc_get_name(): string;

    vfunc_get_priority(): number;

    vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];

    vfunc_match(context: CompletionContext): boolean;

    vfunc_populate(context: CompletionContext): void;

    vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
}

export const CompletionProvider: CompletionProviderNamespace;


export interface StyleSchemeChooserNamespace {
    $gtype: GObject.GType<StyleSchemeChooser>;
    prototype: StyleSchemeChooserPrototype;


}

export type StyleSchemeChooser = StyleSchemeChooserPrototype;

export interface StyleSchemeChooserPrototype extends GObject.Object {
    // Properties
    style_scheme: StyleScheme;
    styleScheme: StyleScheme;


    // Members

    get_style_scheme(): StyleScheme;

    set_style_scheme(scheme: StyleScheme): void;

    vfunc_get_style_scheme(): StyleScheme;

    vfunc_set_style_scheme(scheme: StyleScheme): void;
}

export const StyleSchemeChooser: StyleSchemeChooserNamespace;


export interface UndoManagerNamespace {
    $gtype: GObject.GType<UndoManager>;
    prototype: UndoManagerPrototype;


}

export type UndoManager = UndoManagerPrototype;

export interface UndoManagerPrototype extends GObject.Object {


    // Members

    begin_not_undoable_action(): void;

    can_redo(): boolean;

    can_redo_changed(): void;

    can_undo(): boolean;

    can_undo_changed(): void;

    end_not_undoable_action(): void;

    redo(): void;

    undo(): void;

    vfunc_begin_not_undoable_action(): void;

    vfunc_can_redo(): boolean;

    vfunc_can_redo_changed(): void;

    vfunc_can_undo(): boolean;

    vfunc_can_undo_changed(): void;

    vfunc_end_not_undoable_action(): void;

    vfunc_redo(): void;

    vfunc_undo(): void;
}

export const UndoManager: UndoManagerNamespace;
