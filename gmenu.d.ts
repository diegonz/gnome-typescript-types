/**
 * GMenu 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gio from './gio';
import * as GObject from './gobject';

export namespace TreeItemType {
    export const $gtype: GObject.GType<TreeItemType>;
}

export enum TreeItemType {
    INVALID = 0,
    DIRECTORY = 1,
    ENTRY = 2,
    SEPARATOR = 3,
    HEADER = 4,
    ALIAS = 5,
}

export namespace TreeFlags {
    export const $gtype: GObject.GType<TreeFlags>;
}

export enum TreeFlags {
    NONE = 0,
    INCLUDE_EXCLUDED = 1,
    SHOW_EMPTY = 256,
    INCLUDE_NODISPLAY = 2,
    SHOW_ALL_SEPARATORS = 512,
    SORT_DISPLAY_NAME = 65536,
    INCLUDE_UNALLOCATED = 4,
}

export namespace Tree {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: TreeFlags;
        menu_basename: string;
        menuBasename: string;
        menu_path: string;
        menuPath: string;
    }
}

export class Tree extends GObject.Object {
    static $gtype: GObject.GType<Tree>;

    constructor(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: TreeFlags;
    menu_basename: string;
    menuBasename: string;
    menu_path: string;
    menuPath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Constructors

    static ['new'](menu_basename: string, flags: TreeFlags): Tree;

    static new_for_path(menu_path: string, flags: TreeFlags): Tree;

    // Members

    get_canonical_menu_path(): string;

    get_directory_from_path(path: string): TreeDirectory;

    get_entry_by_id(id: string): TreeEntry;

    get_root_directory(): TreeDirectory;

    load_sync(): boolean;

    static item_ref(item?: any | null): any | null;

    static item_unref(item?: any | null): void;
}

export class TreeAlias {
    static $gtype: GObject.GType<TreeAlias>;

    constructor(copy: TreeAlias);

    // Members
    get_aliased_directory(): TreeDirectory;

    get_aliased_entry(): TreeEntry;

    get_aliased_item_type(): TreeItemType;

    get_directory(): TreeDirectory;

    get_parent(): TreeDirectory;

    get_tree(): Tree;
}

export class TreeDirectory {
    static $gtype: GObject.GType<TreeDirectory>;

    constructor(copy: TreeDirectory);

    // Members
    get_comment(): string;

    get_desktop_file_path(): string;

    get_generic_name(): string;

    get_icon(): Gio.Icon;

    get_is_nodisplay(): boolean;

    get_menu_id(): string;

    get_name(): string;

    get_parent(): TreeDirectory;

    get_tree(): Tree;

    iter(): TreeIter;

    make_path(entry: TreeEntry): string;
}

export class TreeEntry {
    static $gtype: GObject.GType<TreeEntry>;

    constructor(copy: TreeEntry);

    // Members
    get_app_info(): Gio.DesktopAppInfo;

    get_desktop_file_id(): string;

    get_desktop_file_path(): string;

    get_is_excluded(): boolean;

    get_is_nodisplay_recurse(): boolean;

    get_is_unallocated(): boolean;

    get_parent(): TreeDirectory;

    get_tree(): Tree;
}

export class TreeHeader {
    static $gtype: GObject.GType<TreeHeader>;

    constructor(copy: TreeHeader);

    // Members
    get_directory(): TreeDirectory;

    get_parent(): TreeDirectory;

    get_tree(): Tree;
}

export class TreeIter {
    static $gtype: GObject.GType<TreeIter>;

    constructor(copy: TreeIter);

    // Members
    get_alias(): TreeAlias;

    get_directory(): TreeDirectory;

    get_entry(): TreeEntry;

    get_header(): TreeHeader;

    get_separator(): TreeSeparator;

    next(): TreeItemType;
}

export class TreeSeparator {
    static $gtype: GObject.GType<TreeSeparator>;

    constructor(copy: TreeSeparator);

    // Members
    get_parent(): TreeDirectory;

    get_tree(): Tree;
}
