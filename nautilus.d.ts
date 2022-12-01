/**
 * Nautilus 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as GObject from './gobject';

export function file_info_create(location: Gio.File): FileInfo;

export function file_info_create_for_uri(uri: string): FileInfo;

export function file_info_list_copy(files: FileInfo[]): FileInfo[];

export function file_info_list_free(files: FileInfo[]): void;

export function file_info_lookup(location: Gio.File): FileInfo;

export function file_info_lookup_for_uri(uri: string): FileInfo;

export function info_provider_update_complete_invoke(
    update_complete: GObject.Closure,
    provider: InfoProvider,
    handle: OperationHandle,
    result: OperationResult
): void;

export function module_initialize(module: GObject.TypeModule): void;

export function module_list_types(): GObject.GType[];

export function module_shutdown(): void;

export namespace OperationResult {
    export const $gtype: GObject.GType<OperationResult>;
}

export enum OperationResult {
    COMPLETE = 0,
    FAILED = 1,
    IN_PROGRESS = 2,
}

export namespace Column {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        attribute: string;
        attribute_q: number;
        attributeQ: number;
        default_sort_order: Gtk.SortType;
        defaultSortOrder: Gtk.SortType;
        description: string;
        label: string;
        name: string;
        xalign: number;
    }
}

export class Column extends GObject.Object {
    static $gtype: GObject.GType<Column>;

    constructor(properties?: Partial<Column.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Column.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attribute: string;
    attribute_q: number;
    attributeQ: number;
    default_sort_order: Gtk.SortType;
    defaultSortOrder: Gtk.SortType;
    description: string;
    label: string;
    name: string;
    xalign: number;

    // Constructors

    static ['new'](name: string, attribute: string, label: string, description: string): Column;
}

export namespace Menu {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Menu extends GObject.Object {
    static $gtype: GObject.GType<Menu>;

    constructor(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Menu;

    // Members

    append_item(item: MenuItem): void;

    get_items(): MenuItem[];
}

export namespace MenuItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        icon: string;
        label: string;
        menu: Menu;
        name: string;
        priority: boolean;
        sensitive: boolean;
        tip: string;
    }
}

export class MenuItem extends GObject.Object {
    static $gtype: GObject.GType<MenuItem>;

    constructor(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon: string;
    label: string;
    menu: Menu;
    name: string;
    priority: boolean;
    sensitive: boolean;
    tip: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this) => void): number;

    connect_after(signal: 'activate', callback: (_source: this) => void): number;

    emit(signal: 'activate'): void;

    // Constructors

    static ['new'](name: string, label: string, tip: string, icon: string): MenuItem;

    // Members

    activate(): void;

    set_submenu(menu: Menu): void;

    vfunc_activate(): void;

    static list_free(item_list: MenuItem[]): void;
}

export namespace PropertyPage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        label: Gtk.Widget;
        name: string;
        page: Gtk.Widget;
    }
}

export class PropertyPage extends GObject.Object {
    static $gtype: GObject.GType<PropertyPage>;

    constructor(properties?: Partial<PropertyPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PropertyPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: Gtk.Widget;
    name: string;
    page: Gtk.Widget;

    // Constructors

    static ['new'](name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage;
}

export class ColumnProviderInterface {
    static $gtype: GObject.GType<ColumnProviderInterface>;

    constructor(copy: ColumnProviderInterface);

    // Fields
    g_iface: GObject.TypeInterface;
}

export class File {
    static $gtype: GObject.GType<File>;

    constructor(copy: File);
}

export class InfoProviderInterface {
    static $gtype: GObject.GType<InfoProviderInterface>;

    constructor(copy: InfoProviderInterface);

    // Fields
    g_iface: GObject.TypeInterface;
}

export class LocationWidgetProviderInterface {
    static $gtype: GObject.GType<LocationWidgetProviderInterface>;

    constructor(copy: LocationWidgetProviderInterface);

    // Fields
    g_iface: GObject.TypeInterface;
}

export class MenuProviderInterface {
    static $gtype: GObject.GType<MenuProviderInterface>;

    constructor(copy: MenuProviderInterface);

    // Fields
    g_iface: GObject.TypeInterface;
}

export class OperationHandle {
    static $gtype: GObject.GType<OperationHandle>;

    constructor(copy: OperationHandle);
}

export class PropertyPageProviderInterface {
    static $gtype: GObject.GType<PropertyPageProviderInterface>;

    constructor(copy: PropertyPageProviderInterface);

    // Fields
    g_iface: GObject.TypeInterface;
}

export interface ColumnProviderNamespace {
    $gtype: GObject.GType<ColumnProvider>;
    prototype: ColumnProviderPrototype;
}

export type ColumnProvider = ColumnProviderPrototype;

export interface ColumnProviderPrototype extends GObject.Object {
    // Members

    get_columns(): Column[];
}

export const ColumnProvider: ColumnProviderNamespace;

export interface FileInfoNamespace {
    $gtype: GObject.GType<FileInfo>;
    prototype: FileInfoPrototype;

    create(location: Gio.File): FileInfo;

    create_for_uri(uri: string): FileInfo;

    list_copy(files: FileInfo[]): FileInfo[];

    list_free(files: FileInfo[]): void;

    lookup(location: Gio.File): FileInfo;

    lookup_for_uri(uri: string): FileInfo;
}

export type FileInfo = FileInfoPrototype;

export interface FileInfoPrototype extends GObject.Object {
    // Members

    add_emblem(emblem_name: string): void;

    add_string_attribute(attribute_name: string, value: string): void;

    can_write(): boolean;

    get_activation_uri(): string;

    get_file_type(): Gio.FileType;

    get_location(): Gio.File;

    get_mime_type(): string;

    get_mount(): Gio.Mount | null;

    get_name(): string;

    get_parent_info(): FileInfo | null;

    get_parent_location(): Gio.File | null;

    get_parent_uri(): string;

    get_string_attribute(attribute_name: string): string;

    get_uri(): string;

    get_uri_scheme(): string;

    invalidate_extension_info(): void;

    is_directory(): boolean;

    is_gone(): boolean;

    is_mime_type(mime_type: string): boolean;

    vfunc_add_emblem(emblem_name: string): void;

    vfunc_add_string_attribute(attribute_name: string, value: string): void;

    vfunc_can_write(): boolean;

    vfunc_get_activation_uri(): string;

    vfunc_get_file_type(): Gio.FileType;

    vfunc_get_location(): Gio.File;

    vfunc_get_mime_type(): string;

    vfunc_get_mount(): Gio.Mount | null;

    vfunc_get_name(): string;

    vfunc_get_parent_info(): FileInfo | null;

    vfunc_get_parent_location(): Gio.File | null;

    vfunc_get_parent_uri(): string;

    vfunc_get_string_attribute(attribute_name: string): string;

    vfunc_get_uri(): string;

    vfunc_get_uri_scheme(): string;

    vfunc_invalidate_extension_info(): void;

    vfunc_is_directory(): boolean;

    vfunc_is_gone(): boolean;

    vfunc_is_mime_type(mime_type: string): boolean;
}

export const FileInfo: FileInfoNamespace;

export interface InfoProviderNamespace {
    $gtype: GObject.GType<InfoProvider>;
    prototype: InfoProviderPrototype;

    update_complete_invoke(
        update_complete: GObject.Closure,
        provider: InfoProvider,
        handle: OperationHandle,
        result: OperationResult
    ): void;
}

export type InfoProvider = InfoProviderPrototype;

export interface InfoProviderPrototype extends GObject.Object {
    // Members

    cancel_update(handle: OperationHandle): void;

    update_file_info(file: FileInfo, update_complete: GObject.Closure, handle: OperationHandle): OperationResult;
}

export const InfoProvider: InfoProviderNamespace;

export interface LocationWidgetProviderNamespace {
    $gtype: GObject.GType<LocationWidgetProvider>;
    prototype: LocationWidgetProviderPrototype;
}

export type LocationWidgetProvider = LocationWidgetProviderPrototype;

export interface LocationWidgetProviderPrototype extends GObject.Object {
    // Members

    get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;
}

export const LocationWidgetProvider: LocationWidgetProviderNamespace;

export interface MenuProviderNamespace {
    $gtype: GObject.GType<MenuProvider>;
    prototype: MenuProviderPrototype;
}

export type MenuProvider = MenuProviderPrototype;

export interface MenuProviderPrototype extends GObject.Object {
    // Members

    emit_items_updated_signal(): void;

    get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null;

    get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null;
}

export const MenuProvider: MenuProviderNamespace;

export interface PropertyPageProviderNamespace {
    $gtype: GObject.GType<PropertyPageProvider>;
    prototype: PropertyPageProviderPrototype;
}

export type PropertyPageProvider = PropertyPageProviderPrototype;

export interface PropertyPageProviderPrototype extends GObject.Object {
    // Members

    get_pages(files: FileInfo[]): PropertyPage[];
}

export const PropertyPageProvider: PropertyPageProviderNamespace;

export type ColumnProviderIface = ColumnProviderInterface;
export type InfoProviderIface = InfoProviderInterface;
export type LocationWidgetProviderIface = LocationWidgetProviderInterface;
export type MenuProviderIface = MenuProviderInterface;
export type PropertyPageProviderIface = PropertyPageProviderInterface;
