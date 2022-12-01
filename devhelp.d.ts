/**
 * Devhelp 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gtk from './gtk';
import * as WebKit2 from './webkit2';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as GLib from './glib';
import * as Gio from './gio';

export function application_window_bind_sidebar_and_notebook(sidebar: Sidebar, notebook: Notebook): void;

export function finalize(): void;

export function init(): void;

export function link_type_to_string(link_type: LinkType): string;

export namespace LinkType {
    export const $gtype: GObject.GType<LinkType>;
}

export enum LinkType {
    BOOK = 0,
    PAGE = 1,
    KEYWORD = 2,
    FUNCTION = 3,
    STRUCT = 4,
    MACRO = 5,
    ENUM = 6,
    TYPEDEF = 7,
    PROPERTY = 8,
    SIGNAL = 9,
}

export namespace LinkFlags {
    export const $gtype: GObject.GType<LinkFlags>;
}

export enum LinkFlags {
    NONE = 0,
    DEPRECATED = 1,
}

export namespace AssistantView {
    export interface ConstructorProperties extends WebKit2.WebView.ConstructorProperties {
        [key: string]: any;
    }
}

export class AssistantView extends WebKit2.WebView implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<AssistantView>;

    constructor(properties?: Partial<AssistantView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AssistantView.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'open-uri', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'open-uri', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'open-uri', uri: string): void;

    // Constructors

    static ['new'](): AssistantView;

    // Members

    search(str: string): boolean;

    set_link(link?: Link | null): boolean;

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

export namespace Book {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Book extends GObject.Object {
    static $gtype: GObject.GType<Book>;

    constructor(properties?: Partial<Book.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Book.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'deleted', callback: (_source: this) => void): number;

    connect_after(signal: 'deleted', callback: (_source: this) => void): number;

    emit(signal: 'deleted'): void;

    connect(signal: 'updated', callback: (_source: this) => void): number;

    connect_after(signal: 'updated', callback: (_source: this) => void): number;

    emit(signal: 'updated'): void;

    // Constructors

    static ['new'](index_file: Gio.File): Book;

    // Members

    cmp_by_id(b: Book): number;

    cmp_by_title(b: Book): number;

    get_completion(): Completion;

    get_id(): string;

    get_index_file(): Gio.File;

    get_language(): string;

    get_links(): Link[];

    get_title(): string;

    get_tree(): GLib.Node;
}

export namespace BookList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BookList extends GObject.Object {
    static $gtype: GObject.GType<BookList>;

    constructor(properties?: Partial<BookList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookList.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BookListPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'add-book', callback: (_source: this, book: Book) => void): number;

    connect_after(signal: 'add-book', callback: (_source: this, book: Book) => void): number;

    emit(signal: 'add-book', book: Book): void;

    connect(signal: 'remove-book', callback: (_source: this, book: Book) => void): number;

    connect_after(signal: 'remove-book', callback: (_source: this, book: Book) => void): number;

    emit(signal: 'remove-book', book: Book): void;

    // Constructors

    static ['new'](): BookList;

    // Members

    add_book(book: Book): void;

    get_books(): Book[];

    remove_book(book: Book): void;

    vfunc_add_book(book: Book): void;

    vfunc_get_books(): Book[];

    vfunc_remove_book(book: Book): void;

    static get_default(): BookList;
}

export namespace BookListBuilder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BookListBuilder extends GObject.Object {
    static $gtype: GObject.GType<BookListBuilder>;

    constructor(properties?: Partial<BookListBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookListBuilder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BookListBuilderPrivate;

    // Constructors

    static ['new'](): BookListBuilder;

    // Members

    add_default_sub_book_lists(): void;

    add_sub_book_list(sub_book_list: BookList): void;

    create_object(): BookList;

    read_books_disabled_setting(settings?: Settings | null): void;
}

export namespace BookListDirectory {
    export interface ConstructorProperties extends BookList.ConstructorProperties {
        [key: string]: any;

        directory: Gio.File;
    }
}

export class BookListDirectory extends BookList {
    static $gtype: GObject.GType<BookListDirectory>;

    constructor(properties?: Partial<BookListDirectory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookListDirectory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    directory: Gio.File;

    // Fields
    priv: BookListDirectoryPrivate | any;

    // Constructors

    static ['new'](directory: Gio.File): BookListDirectory;
    static ['new'](...args: never[]): never;

    // Members

    get_directory(): Gio.File;
}

export namespace BookManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BookManager extends GObject.Object {
    static $gtype: GObject.GType<BookManager>;

    constructor(properties?: Partial<BookManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookManager.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): BookManager;

    // Members

    populate(): void;
}

export namespace BookTree {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        profile: Profile;
    }
}

export class BookTree extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<BookTree>;

    constructor(properties?: Partial<BookTree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BookTree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    profile: Profile;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'link-selected', callback: (_source: this, link: Link) => void): number;

    connect_after(signal: 'link-selected', callback: (_source: this, link: Link) => void): number;

    emit(signal: 'link-selected', link: Link): void;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](profile?: Profile | null): BookTree;
    static ['new'](...args: never[]): never;

    // Members

    get_profile(): Profile;

    get_selected_link(): Link | null;

    select_uri(uri: string): void;

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

export namespace Completion {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Completion extends GObject.Object {
    static $gtype: GObject.GType<Completion>;

    constructor(properties?: Partial<Completion.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Completion.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CompletionPrivate;

    // Constructors

    static ['new'](): Completion;

    // Members

    add_string(str: string): void;

    complete(prefix: string): string | null;

    sort(): void;

    static aggregate_complete(completion_objects: Completion[] | null, prefix: string): string | null;
}

export namespace KeywordModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class KeywordModel extends GObject.Object implements Gtk.TreeModel {
    static $gtype: GObject.GType<KeywordModel>;

    constructor(properties?: Partial<KeywordModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KeywordModel.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): KeywordModel;

    // Members

    filter(search_string: string, current_book_id?: string | null, profile?: Profile | null): Link | null;

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

export namespace Notebook {
    export interface ConstructorProperties extends Gtk.Notebook.ConstructorProperties {
        [key: string]: any;

        profile: Profile;
    }
}

export class Notebook extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Notebook>;

    constructor(properties?: Partial<Notebook.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Notebook.ConstructorProperties>, ...args: any[]): void;

    // Properties
    profile: Profile;

    // Fields
    priv: NotebookPrivate;

    // Constructors

    static ['new'](profile?: Profile | null): Notebook;
    static ['new'](...args: never[]): never;

    // Members

    get_active_tab(): Tab | null;

    get_active_web_view(): WebView | null;

    get_all_web_views(): WebView[];

    get_profile(): Profile;

    open_new_tab(uri: string | null, switch_focus: boolean): void;

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

export namespace Profile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Profile extends GObject.Object {
    static $gtype: GObject.GType<Profile>;

    constructor(properties?: Partial<Profile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Profile.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProfilePrivate;

    // Members

    get_book_list(): BookList;

    get_settings(): Settings;

    static get_default(): Profile;
}

export namespace ProfileBuilder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ProfileBuilder extends GObject.Object {
    static $gtype: GObject.GType<ProfileBuilder>;

    constructor(properties?: Partial<ProfileBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProfileBuilder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProfileBuilderPrivate;

    // Constructors

    static ['new'](): ProfileBuilder;

    // Members

    create_object(): Profile;

    set_book_list(book_list: BookList): void;

    set_settings(settings: Settings): void;
}

export namespace SearchBar {
    export interface ConstructorProperties extends Gtk.SearchBar.ConstructorProperties {
        [key: string]: any;

        notebook: Notebook;
    }
}

export class SearchBar extends Gtk.SearchBar implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SearchBar>;

    constructor(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    notebook: Notebook;

    // Fields
    priv: SearchBarPrivate;

    // Constructors

    static ['new'](notebook: Notebook): SearchBar;
    static ['new'](...args: never[]): never;

    // Members

    get_notebook(): Notebook;

    grab_focus_to_search_entry(): void;

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

export namespace Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        fixed_font: string;
        fixedFont: string;
        group_books_by_language: boolean;
        groupBooksByLanguage: boolean;
        use_system_fonts: boolean;
        useSystemFonts: boolean;
        variable_font: string;
        variableFont: string;
    }
}

export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fixed_font: string;
    fixedFont: string;
    group_books_by_language: boolean;
    groupBooksByLanguage: boolean;
    use_system_fonts: boolean;
    useSystemFonts: boolean;
    variable_font: string;
    variableFont: string;

    // Fields
    priv: SettingsPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'books-disabled-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'books-disabled-changed', callback: (_source: this) => void): number;

    emit(signal: 'books-disabled-changed'): void;

    connect(signal: 'fonts-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'fonts-changed', callback: (_source: this) => void): number;

    emit(signal: 'fonts-changed'): void;

    // Members

    bind_all(): void;

    bind_fonts(): void;

    bind_group_books_by_language(): void;

    freeze_books_disabled_changed(): void;

    get_fixed_font(): string;

    get_group_books_by_language(): boolean;

    get_selected_fonts(): [string, string];

    get_use_system_fonts(): boolean;

    get_variable_font(): string;

    is_book_enabled(book: Book): boolean;

    set_book_enabled(book: Book, enabled: boolean): void;

    set_fixed_font(fixed_font: string): void;

    set_group_books_by_language(group_books_by_language: boolean): void;

    set_use_system_fonts(use_system_fonts: boolean): void;

    set_variable_font(variable_font: string): void;

    thaw_books_disabled_changed(): void;

    vfunc_books_disabled_changed(): void;

    vfunc_fonts_changed(): void;

    static get_default(): Settings;
}

export namespace SettingsBuilder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SettingsBuilder extends GObject.Object {
    static $gtype: GObject.GType<SettingsBuilder>;

    constructor(properties?: Partial<SettingsBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SettingsBuilder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SettingsBuilderPrivate;

    // Constructors

    static ['new'](): SettingsBuilder;

    // Members

    create_object(): Settings;

    set_contents_path(contents_path: string): void;

    set_fonts_path(fonts_path: string): void;
}

export namespace Sidebar {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        profile: Profile;
    }
}

export class Sidebar extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Sidebar>;

    constructor(properties?: Partial<Sidebar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Sidebar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    profile: Profile;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'link-selected', callback: (_source: this, link: Link) => void): number;

    connect_after(signal: 'link-selected', callback: (_source: this, link: Link) => void): number;

    emit(signal: 'link-selected', link: Link): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](book_manager?: BookManager | null): Sidebar;
    static ['new'](...args: never[]): never;

    // Members

    get_profile(): Profile;

    get_selected_link(): Link | null;

    select_uri(uri: string): void;

    set_search_focus(): void;

    set_search_string(str: string): void;

    vfunc_link_selected(link: Link): void;

    static new2(profile?: Profile | null): Sidebar;

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

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace Tab {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        web_view: WebView;
        webView: WebView;
    }
}

export class Tab extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Tab>;

    constructor(properties?: Partial<Tab.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tab.ConstructorProperties>, ...args: any[]): void;

    // Properties
    web_view: WebView;
    webView: WebView;

    // Fields
    priv: TabPrivate;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](web_view?: WebView | null): Tab;
    static ['new'](...args: never[]): never;

    // Members

    get_web_view(): WebView;

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

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace TabLabel {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        tab: Tab;
    }
}

export class TabLabel extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<TabLabel>;

    constructor(properties?: Partial<TabLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TabLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    tab: Tab;

    // Fields
    priv: TabLabelPrivate;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](tab: Tab): TabLabel;
    static ['new'](...args: never[]): never;

    // Members

    get_tab(): Tab | null;

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

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export namespace WebView {
    export interface ConstructorProperties extends WebKit2.WebView.ConstructorProperties {
        [key: string]: any;

        profile: Profile;
    }
}

export class WebView extends WebKit2.WebView implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WebView>;

    constructor(properties?: Partial<WebView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    profile: Profile;

    // Fields
    priv: WebViewPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'open-new-tab', callback: (_source: this, uri: string) => void): number;

    connect_after(signal: 'open-new-tab', callback: (_source: this, uri: string) => void): number;

    emit(signal: 'open-new-tab', uri: string): void;

    // Constructors

    static ['new'](profile?: Profile | null): WebView;
    static ['new'](...args: never[]): never;

    // Members

    can_reset_zoom(): boolean;

    can_zoom_in(): boolean;

    can_zoom_out(): boolean;

    get_devhelp_title(): string;

    get_profile(): Profile;

    reset_zoom(): void;

    search_next(): void;

    search_previous(): void;

    set_search_text(search_text?: string | null): void;

    zoom_in(): void;

    zoom_out(): void;

    vfunc_open_new_tab(uri: string): void;

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

export class BookListBuilderPrivate {
    static $gtype: GObject.GType<BookListBuilderPrivate>;

    constructor(copy: BookListBuilderPrivate);
}

export class BookListDirectoryPrivate {
    static $gtype: GObject.GType<BookListDirectoryPrivate>;

    constructor(copy: BookListDirectoryPrivate);
}

export class BookListPrivate {
    static $gtype: GObject.GType<BookListPrivate>;

    constructor(copy: BookListPrivate);
}

export class CompletionPrivate {
    static $gtype: GObject.GType<CompletionPrivate>;

    constructor(copy: CompletionPrivate);
}

export class Link {
    static $gtype: GObject.GType<Link>;

    constructor(type: LinkType, book_link: Link, name: string, relative_url: string);
    constructor(copy: Link);

    // Constructors
    static ['new'](type: LinkType, book_link: Link, name: string, relative_url: string): Link;

    static new_book(base_path: string, book_id: string, book_title: string, relative_url: string): Link;

    // Members
    belongs_to_page(page_id: string): boolean;

    compare(b: Link): number;

    get_book_id(): string;

    get_book_title(): string;

    get_flags(): LinkFlags;

    get_link_type(): LinkType;

    get_name(): string;

    get_uri(): string | null;

    match_relative_url(relative_url: string): boolean;

    ref(): Link;

    set_flags(flags: LinkFlags): void;

    unref(): void;
}

export class NotebookPrivate {
    static $gtype: GObject.GType<NotebookPrivate>;

    constructor(copy: NotebookPrivate);
}

export class ProfileBuilderPrivate {
    static $gtype: GObject.GType<ProfileBuilderPrivate>;

    constructor(copy: ProfileBuilderPrivate);
}

export class ProfilePrivate {
    static $gtype: GObject.GType<ProfilePrivate>;

    constructor(copy: ProfilePrivate);
}

export class SearchBarPrivate {
    static $gtype: GObject.GType<SearchBarPrivate>;

    constructor(copy: SearchBarPrivate);
}

export class SettingsBuilderPrivate {
    static $gtype: GObject.GType<SettingsBuilderPrivate>;

    constructor(copy: SettingsBuilderPrivate);
}

export class SettingsPrivate {
    static $gtype: GObject.GType<SettingsPrivate>;

    constructor(copy: SettingsPrivate);
}

export class TabLabelPrivate {
    static $gtype: GObject.GType<TabLabelPrivate>;

    constructor(copy: TabLabelPrivate);
}

export class TabPrivate {
    static $gtype: GObject.GType<TabPrivate>;

    constructor(copy: TabPrivate);
}

export class WebViewPrivate {
    static $gtype: GObject.GType<WebViewPrivate>;

    constructor(copy: WebViewPrivate);
}
