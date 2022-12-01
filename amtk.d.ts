/**
 * Amtk 5
 *
 * Generated from 5.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gtk from './gtk';
import * as GObject from './gobject';
import * as Gio from './gio';

export function action_map_add_action_entries_check_dups(
    action_map: Gio.ActionMap,
    entries: Gio.ActionEntry[],
    user_data?: any | null
): void;

export function finalize(): void;

export function gmenu_append_item(menu: Gio.Menu, item: Gio.MenuItem): void;

export function gmenu_append_section(menu: Gio.Menu, label: string | null, section: Gio.Menu): void;

export function init(): void;

export function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null;

export function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void;

export function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void;

export function shortcuts_group_new(title: string): Gtk.Container;

export function shortcuts_section_new(title: string): Gtk.Container;

export function shortcuts_window_new(parent: Gtk.Window): Gtk.ShortcutsWindow;

export function utils_bind_g_action_to_gtk_action(
    g_action_map: Gio.ActionMap,
    detailed_g_action_name_without_prefix: string,
    gtk_action_group: Gtk.ActionGroup,
    gtk_action_name: string
): void;

export function utils_create_gtk_action(
    g_action_map: Gio.ActionMap,
    detailed_g_action_name_with_prefix: string,
    gtk_action_group: Gtk.ActionGroup,
    gtk_action_name: string
): void;

export function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string;

export function utils_remove_mnemonic(str: string): string;

export namespace FactoryFlags {
    export const $gtype: GObject.GType<FactoryFlags>;
}

export enum FactoryFlags {
    FLAGS_NONE = 0,
    IGNORE_GACTION = 1,
    IGNORE_ICON = 2,
    IGNORE_LABEL = 4,
    IGNORE_TOOLTIP = 8,
    IGNORE_ACCELS = 16,
    IGNORE_ACCELS_FOR_DOC = 32,
    IGNORE_ACCELS_FOR_APP = 64,
}

export namespace ActionInfoCentralStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ActionInfoCentralStore extends GObject.Object {
    static $gtype: GObject.GType<ActionInfoCentralStore>;

    constructor(properties?: Partial<ActionInfoCentralStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ActionInfoCentralStore.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ActionInfoCentralStorePrivate;

    // Members

    lookup(action_name: string): ActionInfo;

    static get_singleton(): ActionInfoCentralStore;
}

export namespace ActionInfoStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ActionInfoStore extends GObject.Object {
    static $gtype: GObject.GType<ActionInfoStore>;

    constructor(properties?: Partial<ActionInfoStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ActionInfoStore.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ActionInfoStorePrivate;

    // Constructors

    static ['new'](): ActionInfoStore;

    // Members

    add(info: ActionInfo): void;

    add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void;

    check_all_used(): void;

    lookup(action_name: string): ActionInfo;

    set_all_accels_to_app(application: Gtk.Application): void;
}

export namespace ApplicationWindow {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        application_window: Gtk.ApplicationWindow;
        applicationWindow: Gtk.ApplicationWindow;
        statusbar: Gtk.Statusbar;
    }
}

export class ApplicationWindow extends GObject.Object {
    static $gtype: GObject.GType<ApplicationWindow>;

    constructor(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    application_window: Gtk.ApplicationWindow;
    applicationWindow: Gtk.ApplicationWindow;
    statusbar: Gtk.Statusbar;

    // Fields
    priv: ApplicationWindowPrivate;

    // Members

    connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void;

    connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void;

    create_open_recent_menu(): Gtk.Widget;

    create_open_recent_menu_item(): Gtk.Widget;

    get_application_window(): Gtk.ApplicationWindow;

    get_statusbar(): Gtk.Statusbar | null;

    set_statusbar(statusbar?: Gtk.Statusbar | null): void;

    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;
}

export namespace Factory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        application: Gtk.Application;
        default_flags: FactoryFlags;
        defaultFlags: FactoryFlags;
    }
}

export class Factory extends GObject.Object {
    static $gtype: GObject.GType<Factory>;

    constructor(properties?: Partial<Factory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Factory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    application: Gtk.Application;
    default_flags: FactoryFlags;
    defaultFlags: FactoryFlags;

    // Fields
    priv: FactoryPrivate;

    // Constructors

    static ['new'](application?: Gtk.Application | null): Factory;

    static new_with_default_application(): Factory;

    // Members

    create_check_menu_item(action_name: string): Gtk.Widget;

    create_check_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget;

    create_gmenu_item(action_name: string): Gio.MenuItem;

    create_gmenu_item_full(action_name: string, flags: FactoryFlags): Gio.MenuItem;

    create_menu_item(action_name: string): Gtk.Widget;

    create_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget;

    create_menu_tool_button(action_name: string): Gtk.MenuToolButton;

    create_menu_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.MenuToolButton;

    create_shortcut(action_name: string): Gtk.Widget;

    create_shortcut_full(action_name: string, flags: FactoryFlags): Gtk.Widget;

    create_simple_menu(entries: ActionInfoEntry[]): Gtk.Widget;

    create_simple_menu_full(entries: ActionInfoEntry[], flags: FactoryFlags): Gtk.Widget;

    create_tool_button(action_name: string): Gtk.ToolItem;

    create_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.ToolItem;

    get_application(): Gtk.Application | null;

    get_default_flags(): FactoryFlags;

    set_default_flags(default_flags: FactoryFlags): void;
}

export namespace MenuShell {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        menu_shell: Gtk.MenuShell;
        menuShell: Gtk.MenuShell;
    }
}

export class MenuShell extends GObject.Object {
    static $gtype: GObject.GType<MenuShell>;

    constructor(properties?: Partial<MenuShell.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MenuShell.ConstructorProperties>, ...args: any[]): void;

    // Properties
    menu_shell: Gtk.MenuShell;
    menuShell: Gtk.MenuShell;

    // Fields
    priv: MenuShellPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'menu-item-deselected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;

    connect_after(signal: 'menu-item-deselected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;

    emit(signal: 'menu-item-deselected', menu_item: Gtk.MenuItem): void;

    connect(signal: 'menu-item-selected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;

    connect_after(signal: 'menu-item-selected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;

    emit(signal: 'menu-item-selected', menu_item: Gtk.MenuItem): void;

    // Members

    get_menu_shell(): Gtk.MenuShell;

    vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void;

    vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void;

    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;
}

export class ActionInfo {
    static $gtype: GObject.GType<ActionInfo>;

    constructor();
    constructor(copy: ActionInfo);

    // Constructors
    static ['new'](): ActionInfo;

    static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo;

    // Members
    copy(): ActionInfo;

    get_accels(): string[];

    get_action_name(): string | null;

    get_icon_name(): string | null;

    get_label(): string | null;

    get_tooltip(): string | null;

    has_been_used(): boolean;

    mark_as_used(): void;

    ref(): ActionInfo;

    set_accels(accels: string[]): void;

    set_action_name(action_name: string): void;

    set_icon_name(icon_name?: string | null): void;

    set_label(label?: string | null): void;

    set_tooltip(tooltip?: string | null): void;

    unref(): void;
}

export class ActionInfoCentralStorePrivate {
    static $gtype: GObject.GType<ActionInfoCentralStorePrivate>;

    constructor(copy: ActionInfoCentralStorePrivate);
}

export class ActionInfoEntry {
    static $gtype: GObject.GType<ActionInfoEntry>;

    constructor(copy: ActionInfoEntry);

    // Fields
    action_name: string;
    icon_name: string;
    label: string;
    accel: string;
    tooltip: string;
    padding: any[];
}

export class ActionInfoStorePrivate {
    static $gtype: GObject.GType<ActionInfoStorePrivate>;

    constructor(copy: ActionInfoStorePrivate);
}

export class ApplicationWindowPrivate {
    static $gtype: GObject.GType<ApplicationWindowPrivate>;

    constructor(copy: ApplicationWindowPrivate);
}

export class FactoryPrivate {
    static $gtype: GObject.GType<FactoryPrivate>;

    constructor(copy: FactoryPrivate);
}

export class MenuShellPrivate {
    static $gtype: GObject.GType<MenuShellPrivate>;

    constructor(copy: MenuShellPrivate);
}
