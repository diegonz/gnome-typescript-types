/**
 * Vte 2.91
 *
 * Generated from 0.62.2
 */

import * as Gdk from './gdk';
import * as Gtk from './gtk';
import * as Pango from './pango';
import * as Gio from './gio';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as GLib from './glib';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const REGEX_FLAGS_DEFAULT: number;
export const SPAWN_NO_PARENT_ENVV: number;
export const SPAWN_NO_SYSTEMD_SCOPE: number;
export const SPAWN_REQUIRE_SYSTEMD_SCOPE: number;
export const TEST_FLAGS_ALL: number;
export const TEST_FLAGS_NONE: number;

export function get_encoding_supported(encoding: string): boolean;

export function get_encodings(include_aliases: boolean): string[];

export function get_feature_flags(): FeatureFlags;

export function get_features(): string;

export function get_major_version(): number;

export function get_micro_version(): number;

export function get_minor_version(): number;

export function get_user_shell(): string;

export function pty_error_quark(): GLib.Quark;

export function regex_error_quark(): GLib.Quark;

export type SelectionFunc = (terminal: Terminal, column: number, row: number) => boolean;
export type TerminalSpawnAsyncCallback = (terminal: Terminal, pid: GLib.Pid, error: GLib.Error) => void;

export namespace CursorBlinkMode {
    export const $gtype: GObject.GType<CursorBlinkMode>;
}

export enum CursorBlinkMode {
    SYSTEM = 0,
    ON = 1,
    OFF = 2,
}

export namespace CursorShape {
    export const $gtype: GObject.GType<CursorShape>;
}

export enum CursorShape {
    BLOCK = 0,
    IBEAM = 1,
    UNDERLINE = 2,
}

export namespace EraseBinding {
    export const $gtype: GObject.GType<EraseBinding>;
}

export enum EraseBinding {
    AUTO = 0,
    ASCII_BACKSPACE = 1,
    ASCII_DELETE = 2,
    DELETE_SEQUENCE = 3,
    TTY = 4,
}

export namespace Format {
    export const $gtype: GObject.GType<Format>;
}

export enum Format {
    TEXT = 1,
    HTML = 2,
}

export class PtyError extends GLib.Error {
    static $gtype: GObject.GType<PtyError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PtyError);

    // Properties
    static PTY_HELPER_FAILED: number;
    static PTY98_FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class RegexError extends GLib.Error {
    static $gtype: GObject.GType<RegexError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RegexError);

    // Properties
    static INCOMPATIBLE: number;
    static NOT_SUPPORTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace TextBlinkMode {
    export const $gtype: GObject.GType<TextBlinkMode>;
}

export enum TextBlinkMode {
    NEVER = 0,
    FOCUSED = 1,
    UNFOCUSED = 2,
    ALWAYS = 3,
}

export namespace WriteFlags {
    export const $gtype: GObject.GType<WriteFlags>;
}

export enum WriteFlags {
    DEFAULT = 0,
}

export namespace FeatureFlags {
    export const $gtype: GObject.GType<FeatureFlags>;
}

export enum FeatureFlags {
    FLAG_BIDI = 1,
    FLAG_ICU = 2,
    FLAG_SYSTEMD = 4,
    FLAG_SIXEL = 8,
    FLAGS_MASK = -1,
}

export namespace PtyFlags {
    export const $gtype: GObject.GType<PtyFlags>;
}

export enum PtyFlags {
    NO_LASTLOG = 1,
    NO_UTMP = 2,
    NO_WTMP = 4,
    NO_HELPER = 8,
    NO_FALLBACK = 16,
    NO_SESSION = 32,
    NO_CTTY = 64,
    DEFAULT = 0,
}

export namespace Pty {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        fd: number;
        flags: PtyFlags;
    }
}

export class Pty extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Pty>;

    constructor(properties?: Partial<Pty.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Pty.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fd: number;
    flags: PtyFlags;

    // Constructors

    static new_foreign_sync(fd: number, cancellable?: Gio.Cancellable | null): Pty;

    static new_sync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty;

    // Members

    child_setup(): void;

    close(): void;

    get_fd(): number;

    get_size(): [boolean, number | null, number | null];

    set_size(rows: number, columns: number): boolean;

    set_utf8(utf8: boolean): boolean;

    spawn_async(
        working_directory: string | null,
        argv: string[],
        envv: string[] | null,
        spawn_flags: GLib.SpawnFlags,
        child_setup_data_destroy: GLib.DestroyNotify | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): void;

    spawn_finish(result: Gio.AsyncResult): [boolean, GLib.Pid | null];

    spawn_with_fds_async(
        working_directory: string | null,
        argv: string[],
        envv: string[] | null,
        fds: number[] | null,
        map_fds: number[] | null,
        spawn_flags: GLib.SpawnFlags,
        child_setup_data_destroy: GLib.DestroyNotify | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Terminal {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;

        allow_bold: boolean;
        allowBold: boolean;
        allow_hyperlink: boolean;
        allowHyperlink: boolean;
        audible_bell: boolean;
        audibleBell: boolean;
        backspace_binding: EraseBinding;
        backspaceBinding: EraseBinding;
        bold_is_bright: boolean;
        boldIsBright: boolean;
        cell_height_scale: number;
        cellHeightScale: number;
        cell_width_scale: number;
        cellWidthScale: number;
        cjk_ambiguous_width: number;
        cjkAmbiguousWidth: number;
        current_directory_uri: string;
        currentDirectoryUri: string;
        current_file_uri: string;
        currentFileUri: string;
        cursor_blink_mode: CursorBlinkMode;
        cursorBlinkMode: CursorBlinkMode;
        cursor_shape: CursorShape;
        cursorShape: CursorShape;
        delete_binding: EraseBinding;
        deleteBinding: EraseBinding;
        enable_bidi: boolean;
        enableBidi: boolean;
        enable_shaping: boolean;
        enableShaping: boolean;
        enable_sixel: boolean;
        enableSixel: boolean;
        encoding: string;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        font_scale: number;
        fontScale: number;
        hyperlink_hover_uri: string;
        hyperlinkHoverUri: string;
        icon_title: string;
        iconTitle: string;
        input_enabled: boolean;
        inputEnabled: boolean;
        pointer_autohide: boolean;
        pointerAutohide: boolean;
        pty: Pty;
        rewrap_on_resize: boolean;
        rewrapOnResize: boolean;
        scroll_on_keystroke: boolean;
        scrollOnKeystroke: boolean;
        scroll_on_output: boolean;
        scrollOnOutput: boolean;
        scrollback_lines: number;
        scrollbackLines: number;
        text_blink_mode: TextBlinkMode;
        textBlinkMode: TextBlinkMode;
        window_title: string;
        windowTitle: string;
        word_char_exceptions: string;
        wordCharExceptions: string;
    }
}

export class Terminal extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<Terminal>;

    constructor(properties?: Partial<Terminal.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Terminal.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allow_bold: boolean;
    allowBold: boolean;
    allow_hyperlink: boolean;
    allowHyperlink: boolean;
    audible_bell: boolean;
    audibleBell: boolean;
    backspace_binding: EraseBinding;
    backspaceBinding: EraseBinding;
    bold_is_bright: boolean;
    boldIsBright: boolean;
    cell_height_scale: number;
    cellHeightScale: number;
    cell_width_scale: number;
    cellWidthScale: number;
    cjk_ambiguous_width: number;
    cjkAmbiguousWidth: number;
    current_directory_uri: string;
    currentDirectoryUri: string;
    current_file_uri: string;
    currentFileUri: string;
    cursor_blink_mode: CursorBlinkMode;
    cursorBlinkMode: CursorBlinkMode;
    cursor_shape: CursorShape;
    cursorShape: CursorShape;
    delete_binding: EraseBinding;
    deleteBinding: EraseBinding;
    enable_bidi: boolean;
    enableBidi: boolean;
    enable_shaping: boolean;
    enableShaping: boolean;
    enable_sixel: boolean;
    enableSixel: boolean;
    encoding: string;
    font_desc: Pango.FontDescription;
    fontDesc: Pango.FontDescription;
    font_scale: number;
    fontScale: number;
    hyperlink_hover_uri: string;
    hyperlinkHoverUri: string;
    icon_title: string;
    iconTitle: string;
    input_enabled: boolean;
    inputEnabled: boolean;
    pointer_autohide: boolean;
    pointerAutohide: boolean;
    pty: Pty;
    rewrap_on_resize: boolean;
    rewrapOnResize: boolean;
    scroll_on_keystroke: boolean;
    scrollOnKeystroke: boolean;
    scroll_on_output: boolean;
    scrollOnOutput: boolean;
    scrollback_lines: number;
    scrollbackLines: number;
    text_blink_mode: TextBlinkMode;
    textBlinkMode: TextBlinkMode;
    window_title: string;
    windowTitle: string;
    word_char_exceptions: string;
    wordCharExceptions: string;

    // Fields
    widget: Gtk.Widget;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'bell', callback: (_source: this) => void): number;

    connect_after(signal: 'bell', callback: (_source: this) => void): number;

    emit(signal: 'bell'): void;

    connect(signal: 'char-size-changed', callback: (_source: this, width: number, height: number) => void): number;

    connect_after(
        signal: 'char-size-changed',
        callback: (_source: this, width: number, height: number) => void
    ): number;

    emit(signal: 'char-size-changed', width: number, height: number): void;

    connect(signal: 'child-exited', callback: (_source: this, status: number) => void): number;

    connect_after(signal: 'child-exited', callback: (_source: this, status: number) => void): number;

    emit(signal: 'child-exited', status: number): void;

    connect(signal: 'commit', callback: (_source: this, text: string, size: number) => void): number;

    connect_after(signal: 'commit', callback: (_source: this, text: string, size: number) => void): number;

    emit(signal: 'commit', text: string, size: number): void;

    connect(signal: 'contents-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'contents-changed', callback: (_source: this) => void): number;

    emit(signal: 'contents-changed'): void;

    connect(signal: 'copy-clipboard', callback: (_source: this) => void): number;

    connect_after(signal: 'copy-clipboard', callback: (_source: this) => void): number;

    emit(signal: 'copy-clipboard'): void;

    connect(signal: 'current-directory-uri-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'current-directory-uri-changed', callback: (_source: this) => void): number;

    emit(signal: 'current-directory-uri-changed'): void;

    connect(signal: 'current-file-uri-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'current-file-uri-changed', callback: (_source: this) => void): number;

    emit(signal: 'current-file-uri-changed'): void;

    connect(signal: 'cursor-moved', callback: (_source: this) => void): number;

    connect_after(signal: 'cursor-moved', callback: (_source: this) => void): number;

    emit(signal: 'cursor-moved'): void;

    connect(signal: 'decrease-font-size', callback: (_source: this) => void): number;

    connect_after(signal: 'decrease-font-size', callback: (_source: this) => void): number;

    emit(signal: 'decrease-font-size'): void;

    connect(signal: 'deiconify-window', callback: (_source: this) => void): number;

    connect_after(signal: 'deiconify-window', callback: (_source: this) => void): number;

    emit(signal: 'deiconify-window'): void;

    connect(signal: 'encoding-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'encoding-changed', callback: (_source: this) => void): number;

    emit(signal: 'encoding-changed'): void;

    connect(signal: 'eof', callback: (_source: this) => void): number;

    connect_after(signal: 'eof', callback: (_source: this) => void): number;

    emit(signal: 'eof'): void;

    connect(
        signal: 'hyperlink-hover-uri-changed',
        callback: (_source: this, uri: string, bbox: Gdk.Rectangle) => void
    ): number;

    connect_after(
        signal: 'hyperlink-hover-uri-changed',
        callback: (_source: this, uri: string, bbox: Gdk.Rectangle) => void
    ): number;

    emit(signal: 'hyperlink-hover-uri-changed', uri: string, bbox: Gdk.Rectangle): void;

    connect(signal: 'icon-title-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'icon-title-changed', callback: (_source: this) => void): number;

    emit(signal: 'icon-title-changed'): void;

    connect(signal: 'iconify-window', callback: (_source: this) => void): number;

    connect_after(signal: 'iconify-window', callback: (_source: this) => void): number;

    emit(signal: 'iconify-window'): void;

    connect(signal: 'increase-font-size', callback: (_source: this) => void): number;

    connect_after(signal: 'increase-font-size', callback: (_source: this) => void): number;

    emit(signal: 'increase-font-size'): void;

    connect(signal: 'lower-window', callback: (_source: this) => void): number;

    connect_after(signal: 'lower-window', callback: (_source: this) => void): number;

    emit(signal: 'lower-window'): void;

    connect(signal: 'maximize-window', callback: (_source: this) => void): number;

    connect_after(signal: 'maximize-window', callback: (_source: this) => void): number;

    emit(signal: 'maximize-window'): void;

    connect(signal: 'move-window', callback: (_source: this, x: number, y: number) => void): number;

    connect_after(signal: 'move-window', callback: (_source: this, x: number, y: number) => void): number;

    emit(signal: 'move-window', x: number, y: number): void;

    connect(signal: 'paste-clipboard', callback: (_source: this) => void): number;

    connect_after(signal: 'paste-clipboard', callback: (_source: this) => void): number;

    emit(signal: 'paste-clipboard'): void;

    connect(signal: 'raise-window', callback: (_source: this) => void): number;

    connect_after(signal: 'raise-window', callback: (_source: this) => void): number;

    emit(signal: 'raise-window'): void;

    connect(signal: 'refresh-window', callback: (_source: this) => void): number;

    connect_after(signal: 'refresh-window', callback: (_source: this) => void): number;

    emit(signal: 'refresh-window'): void;

    connect(signal: 'resize-window', callback: (_source: this, width: number, height: number) => void): number;

    connect_after(signal: 'resize-window', callback: (_source: this, width: number, height: number) => void): number;

    emit(signal: 'resize-window', width: number, height: number): void;

    connect(signal: 'restore-window', callback: (_source: this) => void): number;

    connect_after(signal: 'restore-window', callback: (_source: this) => void): number;

    emit(signal: 'restore-window'): void;

    connect(signal: 'selection-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;

    emit(signal: 'selection-changed'): void;

    connect(signal: 'text-deleted', callback: (_source: this) => void): number;

    connect_after(signal: 'text-deleted', callback: (_source: this) => void): number;

    emit(signal: 'text-deleted'): void;

    connect(signal: 'text-inserted', callback: (_source: this) => void): number;

    connect_after(signal: 'text-inserted', callback: (_source: this) => void): number;

    emit(signal: 'text-inserted'): void;

    connect(signal: 'text-modified', callback: (_source: this) => void): number;

    connect_after(signal: 'text-modified', callback: (_source: this) => void): number;

    emit(signal: 'text-modified'): void;

    connect(signal: 'text-scrolled', callback: (_source: this, delta: number) => void): number;

    connect_after(signal: 'text-scrolled', callback: (_source: this, delta: number) => void): number;

    emit(signal: 'text-scrolled', delta: number): void;

    connect(signal: 'window-title-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'window-title-changed', callback: (_source: this) => void): number;

    emit(signal: 'window-title-changed'): void;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](): Terminal;

    // Members

    copy_clipboard(): void;

    copy_clipboard_format(format: Format): void;

    copy_primary(): void;

    event_check_gregex_simple(
        event: Gdk.Event,
        regexes: GLib.Regex[],
        match_flags: GLib.RegexMatchFlags
    ): [boolean, string[]];

    event_check_regex_simple(event: Gdk.Event, regexes: Regex[], match_flags: number): string[] | null;

    feed(data?: Uint8Array | null): void;

    feed_child(text?: Uint8Array | null): void;

    feed_child_binary(data?: Uint8Array | null): void;

    get_allow_bold(): boolean;

    get_allow_hyperlink(): boolean;

    get_audible_bell(): boolean;

    get_bold_is_bright(): boolean;

    get_cell_height_scale(): number;

    get_cell_width_scale(): number;

    get_char_height(): number;

    get_char_width(): number;

    get_cjk_ambiguous_width(): number;

    get_color_background_for_draw(): Gdk.RGBA;

    get_column_count(): number;

    get_current_directory_uri(): string | null;

    get_current_file_uri(): string | null;

    get_cursor_blink_mode(): CursorBlinkMode;

    get_cursor_position(): [number | null, number | null];

    get_cursor_shape(): CursorShape;

    get_enable_bidi(): boolean;

    get_enable_shaping(): boolean;

    get_enable_sixel(): boolean;

    get_encoding(): string | null;

    get_font(): Pango.FontDescription;

    get_font_scale(): number;

    get_geometry_hints(min_rows: number, min_columns: number): Gdk.Geometry;

    get_has_selection(): boolean;

    get_icon_title(): string | null;

    get_input_enabled(): boolean;

    get_mouse_autohide(): boolean;

    get_pty(): Pty;

    get_rewrap_on_resize(): boolean;

    get_row_count(): number;

    get_scroll_on_keystroke(): boolean;

    get_scroll_on_output(): boolean;

    get_scrollback_lines(): number;

    get_text(is_selected: SelectionFunc | null): [string, CharAttributes[]];

    get_text_blink_mode(): TextBlinkMode;

    get_text_include_trailing_spaces(is_selected: SelectionFunc | null): [string, CharAttributes[]];

    get_text_range(
        start_row: number,
        start_col: number,
        end_row: number,
        end_col: number,
        is_selected: SelectionFunc | null
    ): [string, CharAttributes[]];

    get_window_title(): string | null;

    get_word_char_exceptions(): string | null;

    hyperlink_check_event(event: Gdk.Event): string | null;

    match_add_gregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number;

    match_add_regex(regex: Regex, flags: number): number;

    match_check(column: number, row: number): [string | null, number | null];

    match_check_event(event: Gdk.Event): [string | null, number | null];

    match_remove(tag: number): void;

    match_remove_all(): void;

    match_set_cursor(tag: number, cursor?: Gdk.Cursor | null): void;

    match_set_cursor_name(tag: number, cursor_name: string): void;

    match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType): void;

    paste_clipboard(): void;

    paste_primary(): void;

    pty_new_sync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty;

    reset(clear_tabstops: boolean, clear_history: boolean): void;

    search_find_next(): boolean;

    search_find_previous(): boolean;

    search_get_gregex(): GLib.Regex;

    search_get_regex(): Regex;

    search_get_wrap_around(): boolean;

    search_set_gregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void;

    search_set_regex(regex: Regex | null, flags: number): void;

    search_set_wrap_around(wrap_around: boolean): void;

    select_all(): void;

    set_allow_bold(allow_bold: boolean): void;

    set_allow_hyperlink(allow_hyperlink: boolean): void;

    set_audible_bell(is_audible: boolean): void;

    set_backspace_binding(binding: EraseBinding): void;

    set_bold_is_bright(bold_is_bright: boolean): void;

    set_cell_height_scale(scale: number): void;

    set_cell_width_scale(scale: number): void;

    set_cjk_ambiguous_width(width: number): void;

    set_clear_background(setting: boolean): void;

    set_color_background(background: Gdk.RGBA): void;

    set_color_bold(bold?: Gdk.RGBA | null): void;

    set_color_cursor(cursor_background?: Gdk.RGBA | null): void;

    set_color_cursor_foreground(cursor_foreground?: Gdk.RGBA | null): void;

    set_color_foreground(foreground: Gdk.RGBA): void;

    set_color_highlight(highlight_background?: Gdk.RGBA | null): void;

    set_color_highlight_foreground(highlight_foreground?: Gdk.RGBA | null): void;

    set_colors(foreground?: Gdk.RGBA | null, background?: Gdk.RGBA | null, palette?: Gdk.RGBA[] | null): void;

    set_cursor_blink_mode(mode: CursorBlinkMode): void;

    set_cursor_shape(shape: CursorShape): void;

    set_default_colors(): void;

    set_delete_binding(binding: EraseBinding): void;

    set_enable_bidi(enable_bidi: boolean): void;

    set_enable_shaping(enable_shaping: boolean): void;

    set_enable_sixel(enabled: boolean): void;

    set_encoding(codeset?: string | null): boolean;

    set_font(font_desc?: Pango.FontDescription | null): void;

    set_font_scale(scale: number): void;

    set_geometry_hints_for_window(window: Gtk.Window): void;

    set_input_enabled(enabled: boolean): void;

    set_mouse_autohide(setting: boolean): void;

    set_pty(pty?: Pty | null): void;

    set_rewrap_on_resize(rewrap: boolean): void;

    set_scroll_on_keystroke(scroll: boolean): void;

    set_scroll_on_output(scroll: boolean): void;

    set_scrollback_lines(lines: number): void;

    set_size(columns: number, rows: number): void;

    set_text_blink_mode(text_blink_mode: TextBlinkMode): void;

    set_word_char_exceptions(exceptions: string): void;

    spawn_async(
        pty_flags: PtyFlags,
        working_directory: string | null,
        argv: string[],
        envv: string[] | null,
        spawn_flags: GLib.SpawnFlags,
        child_setup_data_destroy: GLib.DestroyNotify | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): void;

    spawn_sync(
        pty_flags: PtyFlags,
        working_directory: string | null,
        argv: string[],
        envv: string[] | null,
        spawn_flags: GLib.SpawnFlags,
        child_setup?: GLib.SpawnChildSetupFunc | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Pid | null];

    spawn_with_fds_async(
        pty_flags: PtyFlags,
        working_directory: string | null,
        argv: string[],
        envv: string[] | null,
        fds: number[] | null,
        map_fds: number[] | null,
        spawn_flags: GLib.SpawnFlags,
        child_setup_data_destroy: GLib.DestroyNotify | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null
    ): void;

    unselect_all(): void;

    watch_child(child_pid: GLib.Pid): void;

    write_contents_sync(stream: Gio.OutputStream, flags: WriteFlags, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_bell(): void;

    vfunc_char_size_changed(char_width: number, char_height: number): void;

    vfunc_child_exited(status: number): void;

    vfunc_commit(text: string, size: number): void;

    vfunc_contents_changed(): void;

    vfunc_copy_clipboard(): void;

    vfunc_cursor_moved(): void;

    vfunc_decrease_font_size(): void;

    vfunc_deiconify_window(): void;

    vfunc_encoding_changed(): void;

    vfunc_eof(): void;

    vfunc_icon_title_changed(): void;

    vfunc_iconify_window(): void;

    vfunc_increase_font_size(): void;

    vfunc_lower_window(): void;

    vfunc_maximize_window(): void;

    vfunc_move_window(x: number, y: number): void;

    vfunc_paste_clipboard(): void;

    vfunc_raise_window(): void;

    vfunc_refresh_window(): void;

    vfunc_resize_window(width: number, height: number): void;

    vfunc_restore_window(): void;

    vfunc_selection_changed(): void;

    vfunc_text_deleted(): void;

    vfunc_text_inserted(): void;

    vfunc_text_modified(): void;

    vfunc_text_scrolled(delta: number): void;

    vfunc_window_title_changed(): void;

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

export class CharAttributes {
    static $gtype: GObject.GType<CharAttributes>;

    constructor(
        properties?: Partial<{
            row?: number;
            column?: number;
            fore?: Pango.Color;
            back?: Pango.Color;
            underline?: number;
            strikethrough?: number;
            columns?: number;
        }>
    );

    constructor(copy: CharAttributes);

    // Fields
    row: number;
    column: number;
    fore: Pango.Color;
    back: Pango.Color;
    underline: number;
    strikethrough: number;
    columns: number;
}

export class Regex {
    static $gtype: GObject.GType<Regex>;

    constructor(pattern: string, pattern_length: number, flags: number);
    constructor(copy: Regex);

    // Constructors
    static new_for_match(pattern: string, pattern_length: number, flags: number): Regex;

    static new_for_search(pattern: string, pattern_length: number, flags: number): Regex;

    // Members
    jit(flags: number): boolean;

    ref(): Regex;

    substitute(subject: string, replacement: string, flags: number): string;

    unref(): Regex;
}

export class TerminalClassPrivate {
    static $gtype: GObject.GType<TerminalClassPrivate>;

    constructor(copy: TerminalClassPrivate);
}
