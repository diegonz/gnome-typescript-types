/**
 * Gitg 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as GdkPixbuf from './gdkpixbuf';
import * as Ggit from './ggit';
import * as GLib from './glib';
import * as Gdk from './gdk';
import * as Gee from './gee';
import * as Pango from './pango';
import * as cairo from './cairo';
import * as Atk from './atk';

export function commit_model_columns_type(): GObject.GType;

export function init(): void;

export namespace AuthenticationLifeTime {
    export const $gtype: GObject.GType<AuthenticationLifeTime>;
}

export enum AuthenticationLifeTime {
    FORGET = 0,
    SESSION = 1,
    FOREVER = 2,
}

export namespace CommitModelColumns {
    export const $gtype: GObject.GType<CommitModelColumns>;
}

export enum CommitModelColumns {
    SHA1 = 0,
    SUBJECT = 1,
    MESSAGE = 2,
    AUTHOR = 3,
    AUTHOR_NAME = 4,
    AUTHOR_EMAIL = 5,
    AUTHOR_DATE = 6,
    COMMITTER = 7,
    COMMITTER_NAME = 8,
    COMMITTER_EMAIL = 9,
    COMMITTER_DATE = 10,
    COMMIT = 11,
    NUM = 12,
}

export namespace RefType {
    export const $gtype: GObject.GType<RefType>;
}

export enum RefType {
    NONE = 0,
    BRANCH = 1,
    REMOTE = 2,
    TAG = 3,
    STASH = 4,
}

export namespace RefState {
    export const $gtype: GObject.GType<RefState>;
}

export enum RefState {
    NONE = 0,
    SELECTED = 1,
    PRELIGHT = 2,
}

export namespace RemoteState {
    export const $gtype: GObject.GType<RemoteState>;
}

export enum RemoteState {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    TRANSFERRING = 3,
}

export namespace SelectionMode {
    export const $gtype: GObject.GType<SelectionMode>;
}

export enum SelectionMode {
    NORMAL = 0,
    SELECTION = 1,
}

export namespace SidebarHint {
    export const $gtype: GObject.GType<SidebarHint>;
}

export enum SidebarHint {
    NONE = 0,
    HEADER = 1,
    SEPARATOR = 2,
    DUMMY = 3,
}

export namespace SidebarColumn {
    export const $gtype: GObject.GType<SidebarColumn>;
}

export enum SidebarColumn {
    HINT = 0,
    SECTION = 1,
    ITEM = 2,
}

export class CredentialsError extends GLib.Error {
    static $gtype: GObject.GType<CredentialsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CredentialsError);

    // Properties
    static CANCELLED: number;
}

export class DateError extends GLib.Error {
    static $gtype: GObject.GType<DateError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DateError);

    // Properties
    static INVALID_FORMAT: number;
}

export class InitError extends GLib.Error {
    static $gtype: GObject.GType<InitError>;

    constructor(options: { message: string; code: number });
    constructor(copy: InitError);

    // Properties
    static THREADS_UNSAFE: number;
}

export class RemoteError extends GLib.Error {
    static $gtype: GObject.GType<RemoteError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RemoteError);

    // Properties
    static ALREADY_CONNECTED: number;
    static ALREADY_CONNECTING: number;
    static ALREADY_DISCONNECTED: number;
    static STILL_CONNECTING: number;
}

export class StageError extends GLib.Error {
    static $gtype: GObject.GType<StageError>;

    constructor(options: { message: string; code: number });
    constructor(copy: StageError);

    // Properties
    static PRE_COMMIT_HOOK_FAILED: number;
    static COMMIT_MSG_HOOK_FAILED: number;
    static NOTHING_TO_COMMIT: number;
    static INDEX_ENTRY_NOT_FOUND: number;
}

export namespace PatchSetType {
    export const $gtype: GObject.GType<PatchSetType>;
}

export enum PatchSetType {
    ADD,
    REMOVE,
}

export namespace LaneTag {
    export const $gtype: GObject.GType<LaneTag>;
}

export enum LaneTag {
    NONE = 0,
    START,
    END,
    SIGN_STASH,
    SIGN_STAGED,
    SIGN_UNSTAGED,
    HIDDEN,
}

export namespace StageCommitOptions {
    export const $gtype: GObject.GType<StageCommitOptions>;
}

export enum StageCommitOptions {
    NONE = 0,
    SIGN_OFF,
    AMEND,
    SKIP_HOOKS,
}

export namespace Async {
    export type ThreadFunc = () => void;

    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Async {
    static $gtype: GObject.GType<Async>;

    constructor(properties?: Partial<Async.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Async.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](): Async;

    // Members

    static thread(func: Async.ThreadFunc, _callback_?: Gio.AsyncReadyCallback<Async> | null): void;

    static thread_finish(_res_: Gio.AsyncResult): void;

    static thread_try(func: Async.ThreadFunc, _callback_?: Gio.AsyncReadyCallback<Async> | null): void;

    static thread_try_finish(_res_: Gio.AsyncResult): void;
}

export namespace AuthenticationDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        username: string;
        password: string;
        life_time: AuthenticationLifeTime;
        lifeTime: AuthenticationLifeTime;
    }
}

export class AuthenticationDialog extends Gtk.Dialog {
    static $gtype: GObject.GType<AuthenticationDialog>;

    constructor(properties?: Partial<AuthenticationDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AuthenticationDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    username: string;
    password: string;
    life_time: AuthenticationLifeTime;
    lifeTime: AuthenticationLifeTime;

    // Constructors

    static ['new'](url: string, username: string | null, failed: boolean): AuthenticationDialog;
    static ['new'](...args: never[]): never;

    // Members

    get_username(): string;

    get_password(): string;

    get_life_time(): AuthenticationLifeTime;
}

export namespace AvatarCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AvatarCache extends GObject.Object {
    static $gtype: GObject.GType<AvatarCache>;

    constructor(properties?: Partial<AvatarCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AvatarCache.ConstructorProperties>, ...args: any[]): void;

    // Members

    load(
        email: string,
        size: number,
        cancellable?: Gio.Cancellable | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    load_finish(_res_: Gio.AsyncResult): GdkPixbuf.Pixbuf | null;

    static default(): AvatarCache;
}

export namespace BranchBase {
    export interface ConstructorProperties extends Ggit.Branch.ConstructorProperties {
        [key: string]: any;
    }
}

export class BranchBase extends Ggit.Branch implements Ref, Branch {
    static $gtype: GObject.GType<BranchBase>;

    constructor(properties?: Partial<BranchBase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BranchBase.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    d_parsed_name: ParsedRefName;
    dParsedName: ParsedRefName;
    d_pushes: Ref[];
    dPushes: Ref[];
    state: RefState;
    working: boolean;

    // Constructors

    static ['new'](): BranchBase;

    // Implemented Members

    get_owner(): Repository;
    get_owner(...args: never[]): never;

    get_d_parsed_name(): ParsedRefName;

    set_d_parsed_name(value: ParsedRefName): void;

    get_d_pushes(): Ref[] | null;

    set_d_pushes(value?: Ref[] | null): void;

    get_state(): RefState;

    set_state(value: RefState): void;

    get_working(): boolean;

    set_working(value: boolean): void;

    get_parsed_name(): ParsedRefName;

    get_pushes(): Ref[];

    vfunc_get_owner(): Repository;

    vfunc_get_d_parsed_name(): ParsedRefName;

    vfunc_set_d_parsed_name(value: ParsedRefName): void;

    vfunc_get_d_pushes(): Ref[] | null;

    vfunc_set_d_pushes(value?: Ref[] | null): void;

    vfunc_get_state(): RefState;

    vfunc_set_state(value: RefState): void;

    vfunc_get_working(): boolean;

    vfunc_set_working(value: boolean): void;

    get_upstream(): Ref;
    get_upstream(...args: never[]): never;

    vfunc_get_upstream(): Ref;
}

export namespace CellRendererLanes {
    export interface ConstructorProperties extends Gtk.CellRendererText.ConstructorProperties {
        [key: string]: any;

        commit: Commit;
        next_commit: Commit;
        nextCommit: Commit;
        lane_width: number;
        laneWidth: number;
        dot_width: number;
        dotWidth: number;
        labels: Ref[];
    }
}

export class CellRendererLanes extends Gtk.CellRendererText {
    static $gtype: GObject.GType<CellRendererLanes>;

    constructor(properties?: Partial<CellRendererLanes.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CellRendererLanes.ConstructorProperties>, ...args: any[]): void;

    // Properties
    commit: Commit;
    next_commit: Commit;
    nextCommit: Commit;
    lane_width: number;
    laneWidth: number;
    dot_width: number;
    dotWidth: number;
    labels: Ref[];

    // Constructors

    static ['new'](): CellRendererLanes;

    // Members

    get_ref_at_pos(widget: Gtk.Widget, x: number, cell_w: number): [Ref | null, number];

    get_commit(): Commit | null;

    set_commit(value?: Commit | null): void;

    get_next_commit(): Commit | null;

    set_next_commit(value?: Commit | null): void;

    get_lane_width(): number;

    set_lane_width(value: number): void;

    get_dot_width(): number;

    set_dot_width(value: number): void;

    get_labels(): Ref[];

    set_labels(value: Ref[]): void;
}

export namespace Color {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        r: number;
        g: number;
        b: number;
    }
}

export class Color extends GObject.Object {
    static $gtype: GObject.GType<Color>;

    constructor(properties?: Partial<Color.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Color.ConstructorProperties>, ...args: any[]): void;

    // Properties
    r: number;
    g: number;
    b: number;

    // Fields
    idx: number;

    // Constructors

    static ['new'](): Color;

    // Members

    components(): [number, number, number];

    next_index(): Color;

    copy(): Color;

    get_r(): number;

    get_g(): number;

    get_b(): number;

    static reset(): void;

    static next(): Color;
}

export namespace CommitListView {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;
    }
}

export class CommitListView extends Gtk.TreeView implements Gtk.Buildable {
    static $gtype: GObject.GType<CommitListView>;

    constructor(properties?: Partial<CommitListView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CommitListView.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](model: CommitModel): CommitListView;
    static ['new'](...args: never[]): never;

    static for_repository(repository: Repository): CommitListView;

    // Members

    find_cell_at_pos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [Gtk.CellRenderer | null, number];

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

export namespace CommitModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        limit: number;
        sort_mode: Ggit.SortMode;
        sortMode: Ggit.SortMode;
        repository: Repository;
    }
}

export class CommitModel extends GObject.Object implements Gtk.TreeModel {
    static $gtype: GObject.GType<CommitModel>;

    constructor(properties?: Partial<CommitModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CommitModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    limit: number;
    sort_mode: Ggit.SortMode;
    sortMode: Ggit.SortMode;
    repository: Repository;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'started', callback: (_source: this) => void): number;

    connect_after(signal: 'started', callback: (_source: this) => void): number;

    emit(signal: 'started'): void;

    connect(signal: 'update', callback: (_source: this, added: number) => void): number;

    connect_after(signal: 'update', callback: (_source: this, added: number) => void): number;

    emit(signal: 'update', added: number): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    connect(signal: 'begin-clear', callback: (_source: this) => void): number;

    connect_after(signal: 'begin-clear', callback: (_source: this) => void): number;

    emit(signal: 'begin-clear'): void;

    connect(signal: 'end-clear', callback: (_source: this) => void): number;

    connect_after(signal: 'end-clear', callback: (_source: this) => void): number;

    emit(signal: 'end-clear'): void;

    // Constructors

    static ['new'](repository?: Repository | null): CommitModel;

    // Members

    get_permanent_lanes(): Ggit.OId[];

    set_permanent_lanes(value: Ggit.OId[]): void;

    reload(): void;

    size(): number;

    get(idx: number): Commit | null;

    set_include(ids: Ggit.OId[]): void;

    get_include(): Ggit.OId[];

    set_exclude(ids: Ggit.OId[]): void;

    commit_from_iter(iter: Gtk.TreeIter): Commit | null;

    path_from_commit(commit: Commit): Gtk.TreePath | null;

    commit_from_path(path: Gtk.TreePath): Commit | null;

    get_limit(): number;

    set_limit(value: number): void;

    get_sort_mode(): Ggit.SortMode;

    set_sort_mode(value: Ggit.SortMode): void;

    get_repository(): Repository;

    set_repository(value: Repository): void;

    // Implemented Members

    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;

    foreach(func: Gtk.TreeModelForeachFunc): void;

    get_column_type(index_: number): GObject.GType;

    get_flags(): Gtk.TreeModelFlags;

    get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    get_iter_first(): [boolean, Gtk.TreeIter];

    get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

    get_n_columns(): number;

    get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    get_string_from_iter(iter: Gtk.TreeIter): string;

    get_value(iter: Gtk.TreeIter, column: number): unknown;

    iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    iter_has_child(iter: Gtk.TreeIter): boolean;

    iter_n_children(iter?: Gtk.TreeIter | null): number;

    iter_next(iter: Gtk.TreeIter): boolean;

    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    iter_previous(iter: Gtk.TreeIter): boolean;

    ref_node(iter: Gtk.TreeIter): void;

    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_deleted(path: Gtk.TreePath): void;

    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

    unref_node(iter: Gtk.TreeIter): void;

    vfunc_get_column_type(index_: number): GObject.GType;

    vfunc_get_flags(): Gtk.TreeModelFlags;

    vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    vfunc_get_n_columns(): number;

    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;

    vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;

    vfunc_iter_next(iter: Gtk.TreeIter): boolean;

    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

    vfunc_ref_node(iter: Gtk.TreeIter): void;

    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_deleted(path: Gtk.TreePath): void;

    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_unref_node(iter: Gtk.TreeIter): void;
}

export namespace Commit {
    export interface ConstructorProperties extends Ggit.Commit.ConstructorProperties {
        [key: string]: any;

        tag: LaneTag;
        mylane: number;
        lane: Lane;
        format_patch_name: string;
        formatPatchName: string;
        committer_date_for_display: string;
        committerDateForDisplay: string;
        author_date_for_display: string;
        authorDateForDisplay: string;
    }
}

export class Commit extends Ggit.Commit {
    static $gtype: GObject.GType<Commit>;

    constructor(properties?: Partial<Commit.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Commit.ConstructorProperties>, ...args: any[]): void;

    // Properties
    tag: LaneTag;
    mylane: number;
    lane: Lane;
    format_patch_name: string;
    formatPatchName: string;
    committer_date_for_display: string;
    committerDateForDisplay: string;
    author_date_for_display: string;
    authorDateForDisplay: string;

    // Constructors

    static ['new'](): Commit;

    // Members

    get_lanes(): Lane[];

    insert_lane(lane: Lane, idx: number): Lane[];

    remove_lane(lane: Lane): Lane[];

    update_lanes(lanes: Lane[], mylane: number): void;

    get_diff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff;

    get_note(): Ggit.Note;

    get_tag(): LaneTag;

    set_tag(value: LaneTag): void;

    get_mylane(): number;

    set_mylane(value: number): void;

    get_lane(): Lane;

    get_format_patch_name(): string;

    get_committer_date_for_display(): string;

    get_author_date_for_display(): string;
}

export namespace CredentialsManager {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class CredentialsManager {
    static $gtype: GObject.GType<CredentialsManager>;

    constructor(properties?: Partial<CredentialsManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CredentialsManager.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](config: Ggit.Config | null, window: Gtk.Window, save_user_in_config: boolean): CredentialsManager;

    // Members

    credentials(url: string, username: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;
}

export namespace Date {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        date_string: string;
        dateString: string;
        date: GLib.DateTime;
    }
}

export class Date extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Date>;

    constructor(properties?: Partial<Date.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Date.ConstructorProperties>, ...args: any[]): void;

    // Properties
    date_string: string;
    dateString: string;
    date: GLib.DateTime;

    // Constructors

    static ['new'](date: string): Date;

    static for_date_time(dt: GLib.DateTime): Date;

    // Members

    for_display(): string;

    get_date_string(): string;

    set_date_string(value: string): void;

    get_date(): GLib.DateTime;

    static parse(date: string): GLib.DateTime;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DiffStat {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        added: number;
        removed: number;
    }
}

export class DiffStat extends Gtk.DrawingArea {
    static $gtype: GObject.GType<DiffStat>;

    constructor(properties?: Partial<DiffStat.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DiffStat.ConstructorProperties>, ...args: any[]): void;

    // Properties
    added: number;
    removed: number;

    // Constructors

    static ['new'](): DiffStat;

    // Members

    get_added(): number;

    set_added(value: number): void;

    get_removed(): number;

    set_removed(value: number): void;
}

export namespace DiffViewOptions {
    export interface ConstructorProperties extends Gtk.Toolbar.ConstructorProperties {
        [key: string]: any;

        context_lines: number;
        contextLines: number;
        view: DiffView;
    }
}

export class DiffViewOptions extends Gtk.Toolbar {
    static $gtype: GObject.GType<DiffViewOptions>;

    constructor(properties?: Partial<DiffViewOptions.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DiffViewOptions.ConstructorProperties>, ...args: any[]): void;

    // Properties
    context_lines: number;
    contextLines: number;
    view: DiffView;

    // Constructors

    static ['new'](view?: DiffView | null): DiffViewOptions;
    static ['new'](...args: never[]): never;

    // Members

    get_context_lines(): number;

    set_context_lines(value: number): void;

    get_view(): DiffView | null;

    set_view(value?: DiffView | null): void;
}

export namespace DiffView {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        options: Ggit.DiffOptions;
        has_selection: boolean;
        hasSelection: boolean;
        diff: Ggit.Diff;
        commit: Commit;
        wrap_lines: boolean;
        wrapLines: boolean;
        staged: boolean;
        unstaged: boolean;
        show_parents: boolean;
        showParents: boolean;
        default_collapse_all: boolean;
        defaultCollapseAll: boolean;
        use_gravatar: boolean;
        useGravatar: boolean;
        tab_width: number;
        tabWidth: number;
        handle_selection: boolean;
        handleSelection: boolean;
        highlight: boolean;
        repository: Repository;
        new_is_workdir: boolean;
        newIsWorkdir: boolean;
        ignore_whitespace: boolean;
        ignoreWhitespace: boolean;
        changes_inline: boolean;
        changesInline: boolean;
        context_lines: number;
        contextLines: number;
    }
}

export class DiffView extends Gtk.Grid {
    static $gtype: GObject.GType<DiffView>;

    constructor(properties?: Partial<DiffView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DiffView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    options: Ggit.DiffOptions;
    has_selection: boolean;
    hasSelection: boolean;
    diff: Ggit.Diff;
    commit: Commit;
    wrap_lines: boolean;
    wrapLines: boolean;
    staged: boolean;
    unstaged: boolean;
    show_parents: boolean;
    showParents: boolean;
    default_collapse_all: boolean;
    defaultCollapseAll: boolean;
    use_gravatar: boolean;
    useGravatar: boolean;
    tab_width: number;
    tabWidth: number;
    handle_selection: boolean;
    handleSelection: boolean;
    highlight: boolean;
    repository: Repository;
    new_is_workdir: boolean;
    newIsWorkdir: boolean;
    ignore_whitespace: boolean;
    ignoreWhitespace: boolean;
    changes_inline: boolean;
    changesInline: boolean;
    context_lines: number;
    contextLines: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'options-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'options-changed', callback: (_source: this) => void): number;

    emit(signal: 'options-changed'): void;

    // Constructors

    static ['new'](): DiffView;

    // Members

    apply_link_tags(
        buffer: Gtk.TextBuffer,
        regex: GLib.Regex,
        replacement: string | null,
        custom_color_link: Gdk.RGBA,
        is_custom_color: boolean,
        is_custom_link: boolean
    ): void;

    follow_if_link(texview: Gtk.Widget, iter: Gtk.TextIter): void;

    get_selection(): PatchSet[];

    get_options(): Ggit.DiffOptions;

    get_has_selection(): boolean;

    get_diff(): Ggit.Diff | null;

    set_diff(value?: Ggit.Diff | null): void;

    get_commit(): Commit | null;

    set_commit(value?: Commit | null): void;

    get_wrap_lines(): boolean;

    set_wrap_lines(value: boolean): void;

    get_staged(): boolean;

    set_staged(value: boolean): void;

    get_unstaged(): boolean;

    set_unstaged(value: boolean): void;

    get_show_parents(): boolean;

    set_show_parents(value: boolean): void;

    get_default_collapse_all(): boolean;

    set_default_collapse_all(value: boolean): void;

    get_use_gravatar(): boolean;

    set_use_gravatar(value: boolean): void;

    get_tab_width(): number;

    set_tab_width(value: number): void;

    get_handle_selection(): boolean;

    set_handle_selection(value: boolean): void;

    get_highlight(): boolean;

    set_highlight(value: boolean): void;

    get_repository(): Repository | null;

    set_repository(value?: Repository | null): void;

    get_new_is_workdir(): boolean;

    set_new_is_workdir(value: boolean): void;

    get_ignore_whitespace(): boolean;

    set_ignore_whitespace(value: boolean): void;

    get_changes_inline(): boolean;

    set_changes_inline(value: boolean): void;

    get_context_lines(): number;

    set_context_lines(value: number): void;
}

export namespace Hook {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        environment: Gee.HashMap;
        name: string;
        working_directory: Gio.File;
        workingDirectory: Gio.File;
        output: string[];
    }
}

export class Hook extends GObject.Object {
    static $gtype: GObject.GType<Hook>;

    constructor(properties?: Partial<Hook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Hook.ConstructorProperties>, ...args: any[]): void;

    // Properties
    environment: Gee.HashMap;
    name: string;
    working_directory: Gio.File;
    workingDirectory: Gio.File;
    output: string[];

    // Constructors

    static ['new'](name: string): Hook;

    // Members

    add_argument(arg: string): void;

    exists_in(repository: Ggit.Repository): boolean;

    run_sync(repository: Ggit.Repository): number;

    run(repository: Ggit.Repository, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    run_finish(_res_: Gio.AsyncResult): number;

    get_environment(): Gee.HashMap;

    set_environment(value: Gee.HashMap): void;

    get_name(): string;

    set_name(value: string): void;

    get_working_directory(): Gio.File | null;

    set_working_directory(value?: Gio.File | null): void;

    get_output(): string[];
}

export namespace LabelRenderer {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class LabelRenderer {
    static $gtype: GObject.GType<LabelRenderer>;

    constructor(properties?: Partial<LabelRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LabelRenderer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](): LabelRenderer;

    // Members

    static width(widget: Gtk.Widget, font: any | null, labels: Ref[]): number;

    static draw(
        widget: Gtk.Widget,
        font: Pango.FontDescription,
        context: cairo.Context,
        labels: Ref[],
        area: Gdk.Rectangle
    ): void;

    static get_ref_at_pos(
        widget: Gtk.Widget,
        font: Pango.FontDescription,
        labels: Ref[],
        x: number
    ): [Ref | null, number];

    static render_ref(
        widget: Gtk.Widget,
        font: Pango.FontDescription,
        r: Ref,
        height: number,
        minwidth: number
    ): GdkPixbuf.Pixbuf;
}

export namespace Lanes {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        inactive_max: number;
        inactiveMax: number;
        inactive_collapse: number;
        inactiveCollapse: number;
        inactive_gap: number;
        inactiveGap: number;
        inactive_enabled: boolean;
        inactiveEnabled: boolean;
        miss_commits: Gee.LinkedList;
        missCommits: Gee.LinkedList;
    }
}

export class Lanes extends GObject.Object {
    static $gtype: GObject.GType<Lanes>;

    constructor(properties?: Partial<Lanes.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Lanes.ConstructorProperties>, ...args: any[]): void;

    // Properties
    inactive_max: number;
    inactiveMax: number;
    inactive_collapse: number;
    inactiveCollapse: number;
    inactive_gap: number;
    inactiveGap: number;
    inactive_enabled: boolean;
    inactiveEnabled: boolean;
    miss_commits: Gee.LinkedList;
    missCommits: Gee.LinkedList;

    // Constructors

    static ['new'](): Lanes;

    // Members

    reset(reserved?: Ggit.OId[] | null, roots?: Gee.HashSet | null): void;

    next(next: Commit, save_miss: boolean): [boolean, Lane[], number];

    get_inactive_max(): number;

    set_inactive_max(value: number): void;

    get_inactive_collapse(): number;

    set_inactive_collapse(value: number): void;

    get_inactive_gap(): number;

    set_inactive_gap(value: number): void;

    get_inactive_enabled(): boolean;

    set_inactive_enabled(value: boolean): void;

    get_miss_commits(): Gee.LinkedList;

    set_miss_commits(value: Gee.LinkedList): void;
}

export namespace Lane {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Lane extends GObject.Object {
    static $gtype: GObject.GType<Lane>;

    constructor(properties?: Partial<Lane.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Lane.ConstructorProperties>, ...args: any[]): void;

    // Fields
    color: Color;
    from: number[];
    tag: LaneTag;
    boundary_id: Ggit.OId | null;

    // Constructors

    static ['new'](): Lane;

    static with_color(color?: Color | null): Lane;

    // Members

    copy(): Lane;

    dup(): Lane;
}

export namespace ProgressBin {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        fraction: number;
    }
}

export class ProgressBin extends Gtk.Bin {
    static $gtype: GObject.GType<ProgressBin>;

    constructor(properties?: Partial<ProgressBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProgressBin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fraction: number;

    // Constructors

    static ['new'](): ProgressBin;

    // Members

    get_fraction(): number;

    set_fraction(value: number): void;
}

export namespace RefBase {
    export interface ConstructorProperties extends Ggit.Ref.ConstructorProperties {
        [key: string]: any;
    }
}

export class RefBase extends Ggit.Ref implements Ref {
    static $gtype: GObject.GType<RefBase>;

    constructor(properties?: Partial<RefBase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RefBase.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    d_parsed_name: ParsedRefName;
    dParsedName: ParsedRefName;
    d_pushes: Ref[];
    dPushes: Ref[];
    state: RefState;
    working: boolean;

    // Constructors

    static ['new'](): RefBase;

    // Implemented Members

    get_owner(): Repository;
    get_owner(...args: never[]): never;

    get_d_parsed_name(): ParsedRefName;

    set_d_parsed_name(value: ParsedRefName): void;

    get_d_pushes(): Ref[] | null;

    set_d_pushes(value?: Ref[] | null): void;

    get_state(): RefState;

    set_state(value: RefState): void;

    get_working(): boolean;

    set_working(value: boolean): void;

    get_parsed_name(): ParsedRefName;

    get_pushes(): Ref[];

    vfunc_get_owner(): Repository;

    vfunc_get_d_parsed_name(): ParsedRefName;

    vfunc_set_d_parsed_name(value: ParsedRefName): void;

    vfunc_get_d_pushes(): Ref[] | null;

    vfunc_set_d_pushes(value?: Ref[] | null): void;

    vfunc_get_state(): RefState;

    vfunc_set_state(value: RefState): void;

    vfunc_get_working(): boolean;

    vfunc_set_working(value: boolean): void;
}

export namespace ParsedRefName {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        rtype: RefType;
        name: string;
        shortname: string;
        remote_name: string;
        remoteName: string;
        remote_branch: string;
        remoteBranch: string;
        prefix: string;
    }
}

export class ParsedRefName extends GObject.Object {
    static $gtype: GObject.GType<ParsedRefName>;

    constructor(properties?: Partial<ParsedRefName.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ParsedRefName.ConstructorProperties>, ...args: any[]): void;

    // Properties
    rtype: RefType;
    name: string;
    shortname: string;
    remote_name: string;
    remoteName: string;
    remote_branch: string;
    remoteBranch: string;
    prefix: string;

    // Constructors

    static ['new'](name: string): ParsedRefName;

    // Members

    get_rtype(): RefType;

    get_name(): string;

    get_shortname(): string;

    get_remote_name(): string | null;

    get_remote_branch(): string | null;

    get_prefix(): string | null;
}

export namespace Remote {
    export interface ConstructorProperties extends Ggit.Remote.ConstructorProperties {
        [key: string]: any;

        transfer_progress: number;
        transferProgress: number;
        state: RemoteState;
        fetch_specs: string[];
        fetchSpecs: string[];
        push_specs: string[];
        pushSpecs: string[];
        credentials_provider: CredentialsProvider;
        credentialsProvider: CredentialsProvider;
    }
}

export class Remote extends Ggit.Remote {
    static $gtype: GObject.GType<Remote>;

    constructor(properties?: Partial<Remote.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Remote.ConstructorProperties>, ...args: any[]): void;

    // Properties
    transfer_progress: number;
    transferProgress: number;
    state: RemoteState;
    fetch_specs: string[];
    fetchSpecs: string[];
    push_specs: string[];
    pushSpecs: string[];
    credentials_provider: CredentialsProvider;
    credentialsProvider: CredentialsProvider;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(
        signal: 'tip-updated',
        callback: (_source: this, refname: string, a: Ggit.OId, b: Ggit.OId) => void
    ): number;

    emit(signal: 'tip-updated', refname: string, a: Ggit.OId, b: Ggit.OId): void;

    // Constructors

    static ['new'](): Remote;
    static ['new'](...args: never[]): never;

    // Members

    connect(
        direction: Ggit.Direction,
        callbacks?: Ggit.RemoteCallbacks | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    connect(...args: never[]): never;

    connect_finish(_res_: Gio.AsyncResult): void;

    disconnect(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
    disconnect(...args: never[]): never;

    disconnect_finish(_res_: Gio.AsyncResult): void;

    download(callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
    download(...args: never[]): never;

    download_finish(_res_: Gio.AsyncResult): void;

    push(
        branch: string,
        callbacks?: Ggit.RemoteCallbacks | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    push(...args: never[]): never;

    push_finish(_res_: Gio.AsyncResult): void;

    fetch(
        message?: string | null,
        callbacks?: Ggit.RemoteCallbacks | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    fetch_finish(_res_: Gio.AsyncResult): void;

    get_transfer_progress(): number;

    get_state(): RemoteState;

    get_fetch_specs(): string[] | null;

    set_fetch_specs(value?: string[] | null): void;

    get_push_specs(): string[] | null;

    set_push_specs(value?: string[] | null): void;

    get_credentials_provider(): CredentialsProvider | null;

    set_credentials_provider(value?: CredentialsProvider | null): void;
}

export namespace RepositoryListBox {
    export interface ConstructorProperties extends Gtk.ListBox.ConstructorProperties {
        [key: string]: any;

        mode: SelectionMode;
        bookmarks_from_recent_files: boolean;
        bookmarksFromRecentFiles: boolean;
        location: Gio.File;
        has_selection: boolean;
        hasSelection: boolean;
    }
}

export class RepositoryListBox extends Gtk.ListBox {
    static $gtype: GObject.GType<RepositoryListBox>;

    constructor(properties?: Partial<RepositoryListBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepositoryListBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mode: SelectionMode;
    bookmarks_from_recent_files: boolean;
    bookmarksFromRecentFiles: boolean;
    location: Gio.File;
    has_selection: boolean;
    hasSelection: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'repository-activated', callback: (_source: this, repository: Repository) => void): number;

    connect_after(signal: 'repository-activated', callback: (_source: this, repository: Repository) => void): number;

    emit(signal: 'repository-activated', repository: Repository): void;

    connect(
        signal: 'show-error',
        callback: (_source: this, primary_message: string, secondary_message: string) => void
    ): number;

    connect_after(
        signal: 'show-error',
        callback: (_source: this, primary_message: string, secondary_message: string) => void
    ): number;

    emit(signal: 'show-error', primary_message: string, secondary_message: string): void;

    // Constructors

    static ['new'](): RepositoryListBox;

    // Members

    populate_bookmarks(): void;

    end_cloning(row: RepositoryListBoxRow, repository?: Repository | null): void;

    begin_cloning(location: Gio.File): RepositoryListBoxRow | null;

    add_repository(repository: Repository, visited?: GLib.DateTime | null): RepositoryListBoxRow | null;

    get_selection(): RepositoryListBoxRow[];

    filter_text(text?: string | null): void;

    get_mode(): SelectionMode;

    set_mode(value: SelectionMode): void;

    get_bookmarks_from_recent_files(): boolean;

    set_bookmarks_from_recent_files(value: boolean): void;

    get_location(): Gio.File | null;

    set_location(value?: Gio.File | null): void;

    get_has_selection(): boolean;
}

export namespace RepositoryListBoxRow {
    export interface ConstructorProperties extends Gtk.ListBoxRow.ConstructorProperties {
        [key: string]: any;

        mode: SelectionMode;
        selected: boolean;
        repository: Repository;
        can_remove: boolean;
        canRemove: boolean;
        time: GLib.DateTime;
        fraction: number;
        repository_name: string;
        repositoryName: string;
        dirname: string;
        branch_name: string;
        branchName: string;
        loading: boolean;
    }
}

export class RepositoryListBoxRow extends Gtk.ListBoxRow {
    static $gtype: GObject.GType<RepositoryListBoxRow>;

    constructor(properties?: Partial<RepositoryListBoxRow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepositoryListBoxRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mode: SelectionMode;
    selected: boolean;
    repository: Repository;
    can_remove: boolean;
    canRemove: boolean;
    time: GLib.DateTime;
    fraction: number;
    repository_name: string;
    repositoryName: string;
    dirname: string;
    branch_name: string;
    branchName: string;
    loading: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'request-remove', callback: (_source: this) => void): number;

    connect_after(signal: 'request-remove', callback: (_source: this) => void): number;

    emit(signal: 'request-remove'): void;

    // Constructors

    static ['new'](repository: Repository | null, dirname: string): RepositoryListBoxRow;
    static ['new'](...args: never[]): never;

    // Members

    get_mode(): SelectionMode;

    set_mode(value: SelectionMode): void;

    get_selected(): boolean;

    set_selected(value: boolean): void;

    get_repository(): Repository | null;

    set_repository(value?: Repository | null): void;

    get_can_remove(): boolean;

    set_can_remove(value: boolean): void;

    get_time(): GLib.DateTime;

    set_time(value: GLib.DateTime): void;

    set_fraction(value: number): void;

    get_repository_name(): string | null;

    set_repository_name(value?: string | null): void;

    get_dirname(): string | null;

    set_dirname(value?: string | null): void;

    get_branch_name(): string | null;

    set_branch_name(value?: string | null): void;

    get_loading(): boolean;

    set_loading(value: boolean): void;
}

export namespace Repository {
    export interface ConstructorProperties extends Ggit.Repository.ConstructorProperties {
        [key: string]: any;

        name: string;
        stage: Stage;
    }
}

export class Repository extends Ggit.Repository {
    static $gtype: GObject.GType<Repository>;

    constructor(properties?: Partial<Repository.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Repository.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    stage: Stage;

    // Constructors

    static ['new'](location: Gio.File, workdir?: Gio.File | null): Repository;

    // Members

    clear_refs_cache(): void;

    refs_for_id(id: Ggit.OId): Ref[];

    lookup(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, id: Ggit.OId): any | null;
    lookup(...args: never[]): never;

    lookup_reference(name: string): Ref;
    lookup_reference(...args: never[]): never;

    lookup_reference_dwim(short_name: string): Ref;
    lookup_reference_dwim(...args: never[]): never;

    create_branch(name: string, obj: Ggit.Object, flags: Ggit.CreateFlags): Branch;
    create_branch(...args: never[]): never;

    create_reference(name: string, oid: Ggit.OId, message: string): Ref;
    create_reference(...args: never[]): never;

    create_symbolic_reference(name: string, target: string, message: string): Ref;
    create_symbolic_reference(...args: never[]): never;

    get_head(): Ref;
    get_head(...args: never[]): never;

    get_signature_with_environment(env: Gee.Map, envname: string): Ggit.Signature;

    get_name(): string | null;

    get_stage(): Stage;

    static init_repository(location: Gio.File, is_bare: boolean): Repository;
    static init_repository(...args: never[]): never;
}

export namespace Resource {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Resource {
    static $gtype: GObject.GType<Resource>;

    constructor(properties?: Partial<Resource.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Resource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](): Resource;

    // Members

    static load_css(id: string): Gtk.CssProvider | null;
}

export namespace SidebarStore {
    export interface ConstructorProperties extends Gtk.TreeStore.ConstructorProperties {
        [key: string]: any;

        clearing: boolean;
    }
}

export class SidebarStore extends Gtk.TreeStore {
    static $gtype: GObject.GType<SidebarStore>;

    constructor(properties?: Partial<SidebarStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SidebarStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    clearing: boolean;

    // Constructors

    static ['new'](): SidebarStore;
    static ['new'](...args: never[]): never;

    // Members

    append_dummy(text: string): SidebarStore;

    append(item: SidebarItem): SidebarStore;
    append(...args: never[]): never;

    begin_header(text: string, id: number): SidebarStoreSidebarHeader;

    end_header(): SidebarStore;

    begin_section(): number;

    end_section(): void;

    clear(): void;

    item_for_iter(iter: Gtk.TreeIter): SidebarItem;

    activate(iter: Gtk.TreeIter, numclick: number): void;

    get_clearing(): boolean;
}

export namespace SidebarStoreSidebarText {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SidebarStoreSidebarText extends GObject.Object implements SidebarItem {
    static $gtype: GObject.GType<SidebarStoreSidebarText>;

    constructor(properties?: Partial<SidebarStoreSidebarText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SidebarStoreSidebarText.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    text: string;
    icon_name: string;
    iconName: string;

    // Constructors

    static ['new'](text: string): SidebarStoreSidebarText;

    // Implemented Members

    activate(numclick: number): void;

    get_text(): string;

    get_icon_name(): string | null;

    vfunc_activate(numclick: number): void;

    vfunc_get_text(): string;

    vfunc_get_icon_name(): string | null;
}

export namespace SidebarStoreSidebarHeader {
    export interface ConstructorProperties extends SidebarStoreSidebarText.ConstructorProperties {
        [key: string]: any;

        id: number;
    }
}

export class SidebarStoreSidebarHeader extends SidebarStoreSidebarText {
    static $gtype: GObject.GType<SidebarStoreSidebarHeader>;

    constructor(properties?: Partial<SidebarStoreSidebarHeader.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SidebarStoreSidebarHeader.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: number;

    // Constructors

    static ['new'](text: string, id: number): SidebarStoreSidebarHeader;
    static ['new'](...args: never[]): never;

    // Members

    get_id(): number;
}

export namespace Sidebar {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        model: SidebarStore | any;
    }
}

export class Sidebar extends Gtk.TreeView {
    static $gtype: GObject.GType<Sidebar>;

    constructor(properties?: Partial<Sidebar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Sidebar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: SidebarStore | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'deselected', callback: (_source: this) => void): number;

    connect_after(signal: 'deselected', callback: (_source: this) => void): number;

    emit(signal: 'deselected'): void;

    connect(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    connect_after(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    emit(signal: 'populate-popup', menu: Gtk.Menu): void;

    // Constructors

    static ['new'](): Sidebar;

    // Members

    select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean;

    selection_changed(sel: Gtk.TreeSelection): void;

    get_selected_iter(): [boolean, Gtk.TreeIter];

    get_selected_item(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): any | null;

    get_selected_items(t_dup_func: GObject.BoxedCopyFunc): [any[], number];

    select(item: SidebarItem): void;

    is_selected(item: SidebarItem): boolean;

    get_model(): SidebarStore;

    set_model(value: SidebarStore): void;

    vfunc_select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean;

    vfunc_selection_changed(sel: Gtk.TreeSelection): void;
}

export namespace StageStatusFile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: Ggit.StatusFlags;
    }
}

export class StageStatusFile extends GObject.Object implements StageStatusItem {
    static $gtype: GObject.GType<StageStatusFile>;

    constructor(properties?: Partial<StageStatusFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StageStatusFile.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: Ggit.StatusFlags;

    // Implemented Properties

    path: string;
    is_staged: boolean;
    isStaged: boolean;
    is_unstaged: boolean;
    isUnstaged: boolean;
    is_untracked: boolean;
    isUntracked: boolean;
    icon_name: string;
    iconName: string;

    // Constructors

    static ['new'](path: string, flags: Ggit.StatusFlags): StageStatusFile;

    // Members

    get_flags(): Ggit.StatusFlags;

    // Implemented Members

    get_path(): string;

    get_is_staged(): boolean;

    get_is_unstaged(): boolean;

    get_is_untracked(): boolean;

    get_icon_name(): string | null;

    vfunc_get_path(): string;

    vfunc_get_is_staged(): boolean;

    vfunc_get_is_unstaged(): boolean;

    vfunc_get_is_untracked(): boolean;

    vfunc_get_icon_name(): string | null;
}

export namespace StageStatusSubmodule {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        submodule: Ggit.Submodule;
        is_dirty: boolean;
        isDirty: boolean;
        flags: Ggit.SubmoduleStatus;
    }
}

export class StageStatusSubmodule extends GObject.Object implements StageStatusItem {
    static $gtype: GObject.GType<StageStatusSubmodule>;

    constructor(properties?: Partial<StageStatusSubmodule.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StageStatusSubmodule.ConstructorProperties>, ...args: any[]): void;

    // Properties
    submodule: Ggit.Submodule;
    is_dirty: boolean;
    isDirty: boolean;
    flags: Ggit.SubmoduleStatus;

    // Implemented Properties

    path: string;
    is_staged: boolean;
    isStaged: boolean;
    is_unstaged: boolean;
    isUnstaged: boolean;
    is_untracked: boolean;
    isUntracked: boolean;
    icon_name: string;
    iconName: string;

    // Constructors

    static ['new'](submodule: Ggit.Submodule): StageStatusSubmodule;

    // Members

    get_submodule(): Ggit.Submodule;

    get_is_dirty(): boolean;

    get_flags(): Ggit.SubmoduleStatus;

    // Implemented Members

    get_path(): string;

    get_is_staged(): boolean;

    get_is_unstaged(): boolean;

    get_is_untracked(): boolean;

    get_icon_name(): string | null;

    vfunc_get_path(): string;

    vfunc_get_is_staged(): boolean;

    vfunc_get_is_unstaged(): boolean;

    vfunc_get_is_untracked(): boolean;

    vfunc_get_icon_name(): string | null;
}

export namespace StageStatusEnumerator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StageStatusEnumerator extends GObject.Object {
    static $gtype: GObject.GType<StageStatusEnumerator>;

    constructor(properties?: Partial<StageStatusEnumerator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StageStatusEnumerator.ConstructorProperties>, ...args: any[]): void;

    // Members

    cancel(): void;

    next_items(num: number, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    next_items_finish(_res_: Gio.AsyncResult): StageStatusItem[];
}

export namespace PatchSet {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class PatchSet {
    static $gtype: GObject.GType<PatchSet>;

    constructor(properties?: Partial<PatchSet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PatchSet.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;
    filename: string;
    patches: PatchSetPatch[];
    patches_length1: number;

    // Constructors

    static ['new'](): PatchSet;

    // Members

    reversed(): PatchSet;
}

export namespace Stage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Stage extends GObject.Object {
    static $gtype: GObject.GType<Stage>;

    constructor(properties?: Partial<Stage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Stage.ConstructorProperties>, ...args: any[]): void;

    // Members

    refresh(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    refresh_finish(_res_: Gio.AsyncResult): void;

    get_head_tree(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    get_head_tree_finish(_res_: Gio.AsyncResult): Ggit.Tree | null;

    file_status(options?: Ggit.StatusOptions | null): StageStatusEnumerator;

    pre_commit_hook(author: Ggit.Signature, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    pre_commit_hook_finish(_res_: Gio.AsyncResult): void;

    commit_index(
        index: Ggit.Index,
        reference: Ggit.Ref,
        message: string,
        author: Ggit.Signature,
        committer: Ggit.Signature,
        parents: Ggit.OId[] | null,
        options: StageCommitOptions,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    commit_index_finish(_res_: Gio.AsyncResult): Ggit.OId | null;

    commit_tree(
        treeoid: Ggit.OId,
        reference: Ggit.Ref,
        message: string,
        author: Ggit.Signature,
        committer: Ggit.Signature,
        parents: Ggit.OId[] | null,
        options: StageCommitOptions,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    commit_tree_finish(_res_: Gio.AsyncResult): Ggit.OId | null;

    commit(
        message: string,
        author: Ggit.Signature,
        committer: Ggit.Signature,
        options: StageCommitOptions,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    commit_finish(_res_: Gio.AsyncResult): Ggit.OId | null;

    revert(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    revert_finish(_res_: Gio.AsyncResult): void;

    revert_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    revert_path_finish(_res_: Gio.AsyncResult): void;

    revert_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    revert_patch_finish(_res_: Gio.AsyncResult): void;

    ['delete'](file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    delete_finish(_res_: Gio.AsyncResult): void;

    delete_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    delete_path_finish(_res_: Gio.AsyncResult): void;

    stage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    stage_finish(_res_: Gio.AsyncResult): void;

    stage_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    stage_path_finish(_res_: Gio.AsyncResult): void;

    stage_commit(path: string, commit: Ggit.Commit, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    stage_commit_finish(_res_: Gio.AsyncResult): void;

    stage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    stage_patch_finish(_res_: Gio.AsyncResult): void;

    unstage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unstage_finish(_res_: Gio.AsyncResult): void;

    unstage_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unstage_path_finish(_res_: Gio.AsyncResult): void;

    unstage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unstage_patch_finish(_res_: Gio.AsyncResult): void;

    diff_index_all(
        files?: StageStatusItem[] | null,
        defopts?: Ggit.DiffOptions | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    diff_index_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;

    diff_index(
        f: StageStatusItem,
        defopts?: Ggit.DiffOptions | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    diff_index_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;

    diff_workdir_all(
        files: StageStatusItem[],
        defopts?: Ggit.DiffOptions | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    diff_workdir_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;

    diff_workdir(
        f: StageStatusItem,
        defopts?: Ggit.DiffOptions | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    diff_workdir_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
}

export namespace Theme {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
    }
}

export class Theme extends Gtk.Widget {
    static $gtype: GObject.GType<Theme>;

    constructor(properties?: Partial<Theme.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Theme.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Theme;

    // Members

    is_theme_dark(): boolean;

    static instance(): Theme;
}

export namespace Utils {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Utils {
    static $gtype: GObject.GType<Utils>;

    constructor(properties?: Partial<Utils.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Utils.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](): Utils;

    // Members

    static replace_home_dir_with_tilde(file: Gio.File): string;

    static expand_home_dir(path: string): string;
}

export namespace WhenMapped {
    export type OnMapped = () => void;

    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class WhenMapped {
    static $gtype: GObject.GType<WhenMapped>;

    constructor(properties?: Partial<WhenMapped.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WhenMapped.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](widget: Gtk.Widget): WhenMapped;

    // Members

    update(mapped: WhenMapped.OnMapped, lifetime?: GObject.Object | null): void;
}

export class AsyncPrivate {
    static $gtype: GObject.GType<AsyncPrivate>;

    constructor(copy: AsyncPrivate);
}

export class AuthenticationDialogPrivate {
    static $gtype: GObject.GType<AuthenticationDialogPrivate>;

    constructor(copy: AuthenticationDialogPrivate);
}

export class AvatarCachePrivate {
    static $gtype: GObject.GType<AvatarCachePrivate>;

    constructor(copy: AvatarCachePrivate);
}

export class BranchBasePrivate {
    static $gtype: GObject.GType<BranchBasePrivate>;

    constructor(copy: BranchBasePrivate);
}

export class CellRendererLanesPrivate {
    static $gtype: GObject.GType<CellRendererLanesPrivate>;

    constructor(copy: CellRendererLanesPrivate);
}

export class ColorPrivate {
    static $gtype: GObject.GType<ColorPrivate>;

    constructor(copy: ColorPrivate);
}

export class CommitListViewPrivate {
    static $gtype: GObject.GType<CommitListViewPrivate>;

    constructor(copy: CommitListViewPrivate);
}

export class CommitModelPrivate {
    static $gtype: GObject.GType<CommitModelPrivate>;

    constructor(copy: CommitModelPrivate);
}

export class CommitPrivate {
    static $gtype: GObject.GType<CommitPrivate>;

    constructor(copy: CommitPrivate);
}

export class CredentialsManagerPrivate {
    static $gtype: GObject.GType<CredentialsManagerPrivate>;

    constructor(copy: CredentialsManagerPrivate);
}

export class DatePrivate {
    static $gtype: GObject.GType<DatePrivate>;

    constructor(copy: DatePrivate);
}

export class DiffStatPrivate {
    static $gtype: GObject.GType<DiffStatPrivate>;

    constructor(copy: DiffStatPrivate);
}

export class DiffViewOptionsPrivate {
    static $gtype: GObject.GType<DiffViewOptionsPrivate>;

    constructor(copy: DiffViewOptionsPrivate);
}

export class DiffViewPrivate {
    static $gtype: GObject.GType<DiffViewPrivate>;

    constructor(copy: DiffViewPrivate);
}

export class HookPrivate {
    static $gtype: GObject.GType<HookPrivate>;

    constructor(copy: HookPrivate);
}

export class LabelRendererPrivate {
    static $gtype: GObject.GType<LabelRendererPrivate>;

    constructor(copy: LabelRendererPrivate);
}

export class LanesPrivate {
    static $gtype: GObject.GType<LanesPrivate>;

    constructor(copy: LanesPrivate);
}

export class LanePrivate {
    static $gtype: GObject.GType<LanePrivate>;

    constructor(copy: LanePrivate);
}

export class ProgressBinPrivate {
    static $gtype: GObject.GType<ProgressBinPrivate>;

    constructor(copy: ProgressBinPrivate);
}

export class RefBasePrivate {
    static $gtype: GObject.GType<RefBasePrivate>;

    constructor(copy: RefBasePrivate);
}

export class ParsedRefNamePrivate {
    static $gtype: GObject.GType<ParsedRefNamePrivate>;

    constructor(copy: ParsedRefNamePrivate);
}

export class RemotePrivate {
    static $gtype: GObject.GType<RemotePrivate>;

    constructor(copy: RemotePrivate);
}

export class RepositoryListBoxPrivate {
    static $gtype: GObject.GType<RepositoryListBoxPrivate>;

    constructor(copy: RepositoryListBoxPrivate);
}

export class RepositoryListBoxRowPrivate {
    static $gtype: GObject.GType<RepositoryListBoxRowPrivate>;

    constructor(copy: RepositoryListBoxRowPrivate);
}

export class RepositoryPrivate {
    static $gtype: GObject.GType<RepositoryPrivate>;

    constructor(copy: RepositoryPrivate);
}

export class ResourcePrivate {
    static $gtype: GObject.GType<ResourcePrivate>;

    constructor(copy: ResourcePrivate);
}

export class SidebarStorePrivate {
    static $gtype: GObject.GType<SidebarStorePrivate>;

    constructor(copy: SidebarStorePrivate);
}

export class SidebarStoreSidebarTextPrivate {
    static $gtype: GObject.GType<SidebarStoreSidebarTextPrivate>;

    constructor(copy: SidebarStoreSidebarTextPrivate);
}

export class SidebarStoreSidebarHeaderPrivate {
    static $gtype: GObject.GType<SidebarStoreSidebarHeaderPrivate>;

    constructor(copy: SidebarStoreSidebarHeaderPrivate);
}

export class SidebarPrivate {
    static $gtype: GObject.GType<SidebarPrivate>;

    constructor(copy: SidebarPrivate);
}

export class StageStatusFilePrivate {
    static $gtype: GObject.GType<StageStatusFilePrivate>;

    constructor(copy: StageStatusFilePrivate);
}

export class StageStatusSubmodulePrivate {
    static $gtype: GObject.GType<StageStatusSubmodulePrivate>;

    constructor(copy: StageStatusSubmodulePrivate);
}

export class StageStatusEnumeratorPrivate {
    static $gtype: GObject.GType<StageStatusEnumeratorPrivate>;

    constructor(copy: StageStatusEnumeratorPrivate);
}

export class PatchSetPrivate {
    static $gtype: GObject.GType<PatchSetPrivate>;

    constructor(copy: PatchSetPrivate);
}

export class PatchSetPatch {
    static $gtype: GObject.GType<PatchSetPatch>;

    constructor(copy: PatchSetPatch);

    // Fields
    type: PatchSetType;
    old_offset: number;
    new_offset: number;
    length: number;
}

export class StagePrivate {
    static $gtype: GObject.GType<StagePrivate>;

    constructor(copy: StagePrivate);
}

export class ThemePrivate {
    static $gtype: GObject.GType<ThemePrivate>;

    constructor(copy: ThemePrivate);
}

export class UtilsPrivate {
    static $gtype: GObject.GType<UtilsPrivate>;

    constructor(copy: UtilsPrivate);
}

export class WhenMappedPrivate {
    static $gtype: GObject.GType<WhenMappedPrivate>;

    constructor(copy: WhenMappedPrivate);
}

export interface BranchNamespace {
    $gtype: GObject.GType<Branch>;
    prototype: BranchPrototype;
}

export type Branch = BranchPrototype;

export interface BranchPrototype extends Ggit.Branch {
    // Members

    get_upstream(): Ref;

    get_upstream(...args: never[]): never;

    vfunc_get_upstream(): Ref;
}

export const Branch: BranchNamespace;

export interface RefNamespace {
    $gtype: GObject.GType<Ref>;
    prototype: RefPrototype;
}

export type Ref = RefPrototype;

export interface RefPrototype extends Ggit.Ref {
    // Properties
    d_parsed_name: ParsedRefName;
    dParsedName: ParsedRefName;
    d_pushes: Ref[];
    dPushes: Ref[];
    state: RefState;
    working: boolean;

    // Members

    get_owner(): Repository;

    get_owner(...args: never[]): never;

    get_d_parsed_name(): ParsedRefName;

    set_d_parsed_name(value: ParsedRefName): void;

    get_d_pushes(): Ref[] | null;

    set_d_pushes(value?: Ref[] | null): void;

    get_state(): RefState;

    set_state(value: RefState): void;

    get_working(): boolean;

    set_working(value: boolean): void;

    get_parsed_name(): ParsedRefName;

    get_pushes(): Ref[];

    vfunc_get_owner(): Repository;

    vfunc_get_d_parsed_name(): ParsedRefName;

    vfunc_set_d_parsed_name(value: ParsedRefName): void;

    vfunc_get_d_pushes(): Ref[] | null;

    vfunc_set_d_pushes(value?: Ref[] | null): void;

    vfunc_get_state(): RefState;

    vfunc_set_state(value: RefState): void;

    vfunc_get_working(): boolean;

    vfunc_set_working(value: boolean): void;
}

export const Ref: RefNamespace;

export interface CredentialsProviderNamespace {
    $gtype: GObject.GType<CredentialsProvider>;
    prototype: CredentialsProviderPrototype;
}

export type CredentialsProvider = CredentialsProviderPrototype;

export interface CredentialsProviderPrototype extends GObject.Object {
    // Members

    credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;

    vfunc_credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;
}

export const CredentialsProvider: CredentialsProviderNamespace;

export interface SidebarItemNamespace {
    $gtype: GObject.GType<SidebarItem>;
    prototype: SidebarItemPrototype;
}

export type SidebarItem = SidebarItemPrototype;

export interface SidebarItemPrototype extends GObject.Object {
    // Properties
    text: string;
    icon_name: string;
    iconName: string;

    // Members

    activate(numclick: number): void;

    get_text(): string;

    get_icon_name(): string | null;

    vfunc_activate(numclick: number): void;

    vfunc_get_text(): string;

    vfunc_get_icon_name(): string | null;
}

export const SidebarItem: SidebarItemNamespace;

export interface StageStatusItemNamespace {
    $gtype: GObject.GType<StageStatusItem>;
    prototype: StageStatusItemPrototype;
}

export type StageStatusItem = StageStatusItemPrototype;

export interface StageStatusItemPrototype extends GObject.Object {
    // Properties
    path: string;
    is_staged: boolean;
    isStaged: boolean;
    is_unstaged: boolean;
    isUnstaged: boolean;
    is_untracked: boolean;
    isUntracked: boolean;
    icon_name: string;
    iconName: string;

    // Members

    get_path(): string;

    get_is_staged(): boolean;

    get_is_unstaged(): boolean;

    get_is_untracked(): boolean;

    get_icon_name(): string | null;

    vfunc_get_path(): string;

    vfunc_get_is_staged(): boolean;

    vfunc_get_is_unstaged(): boolean;

    vfunc_get_is_untracked(): boolean;

    vfunc_get_icon_name(): string | null;
}

export const StageStatusItem: StageStatusItemNamespace;
