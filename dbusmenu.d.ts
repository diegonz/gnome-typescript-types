/**
 * Dbusmenu 0.4
 *
 * Generated from 0.4
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GLib from './glib';

export const CLIENT_PROP_DBUS_NAME: string;
export const CLIENT_PROP_DBUS_OBJECT: string;
export const CLIENT_PROP_GROUP_EVENTS: string;
export const CLIENT_PROP_STATUS: string;
export const CLIENT_PROP_TEXT_DIRECTION: string;
export const CLIENT_SIGNAL_EVENT_RESULT: string;
export const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string;
export const CLIENT_SIGNAL_ITEM_ACTIVATE: string;
export const CLIENT_SIGNAL_LAYOUT_UPDATED: string;
export const CLIENT_SIGNAL_NEW_MENUITEM: string;
export const CLIENT_SIGNAL_ROOT_CHANGED: string;
export const CLIENT_TYPES_DEFAULT: string;
export const CLIENT_TYPES_IMAGE: string;
export const CLIENT_TYPES_SEPARATOR: string;
export const MENUITEM_CHILD_DISPLAY_SUBMENU: string;
export const MENUITEM_DISPOSITION_ALERT: string;
export const MENUITEM_DISPOSITION_INFORMATIVE: string;
export const MENUITEM_DISPOSITION_NORMAL: string;
export const MENUITEM_DISPOSITION_WARNING: string;
export const MENUITEM_EVENT_ACTIVATED: string;
export const MENUITEM_EVENT_CLOSED: string;
export const MENUITEM_EVENT_OPENED: string;
export const MENUITEM_ICON_NAME_BLANK: string;
export const MENUITEM_PROP_ACCESSIBLE_DESC: string;
export const MENUITEM_PROP_CHILD_DISPLAY: string;
export const MENUITEM_PROP_DISPOSITION: string;
export const MENUITEM_PROP_ENABLED: string;
export const MENUITEM_PROP_ICON_DATA: string;
export const MENUITEM_PROP_ICON_NAME: string;
export const MENUITEM_PROP_LABEL: string;
export const MENUITEM_PROP_SHORTCUT: string;
export const MENUITEM_PROP_TOGGLE_STATE: string;
export const MENUITEM_PROP_TOGGLE_TYPE: string;
export const MENUITEM_PROP_TYPE: string;
export const MENUITEM_PROP_VISIBLE: string;
export const MENUITEM_SHORTCUT_ALT: string;
export const MENUITEM_SHORTCUT_CONTROL: string;
export const MENUITEM_SHORTCUT_SHIFT: string;
export const MENUITEM_SHORTCUT_SUPER: string;
export const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string;
export const MENUITEM_SIGNAL_CHILD_ADDED: string;
export const MENUITEM_SIGNAL_CHILD_MOVED: string;
export const MENUITEM_SIGNAL_CHILD_REMOVED: string;
export const MENUITEM_SIGNAL_EVENT: string;
export const MENUITEM_SIGNAL_ITEM_ACTIVATED: string;
export const MENUITEM_SIGNAL_PROPERTY_CHANGED: string;
export const MENUITEM_SIGNAL_REALIZED: string;
export const MENUITEM_SIGNAL_SHOW_TO_USER: string;
export const MENUITEM_TOGGLE_CHECK: string;
export const MENUITEM_TOGGLE_RADIO: string;
export const MENUITEM_TOGGLE_STATE_CHECKED: number;
export const MENUITEM_TOGGLE_STATE_UNCHECKED: number;
export const MENUITEM_TOGGLE_STATE_UNKNOWN: number;
export const SERVER_PROP_DBUS_OBJECT: string;
export const SERVER_PROP_ROOT_NODE: string;
export const SERVER_PROP_STATUS: string;
export const SERVER_PROP_TEXT_DIRECTION: string;
export const SERVER_PROP_VERSION: string;
export const SERVER_SIGNAL_ID_PROP_UPDATE: string;
export const SERVER_SIGNAL_ID_UPDATE: string;
export const SERVER_SIGNAL_ITEM_ACTIVATION: string;
export const SERVER_SIGNAL_LAYOUT_UPDATED: string;
export type ClientTypeHandler = (newitem: Menuitem, parent: Menuitem, client: Client) => boolean;
export type menuitem_about_to_show_cb = (mi: Menuitem) => void;
export type menuitem_buildvariant_slot_t = (mi: Menuitem, properties?: string | null) => GLib.Variant;

export namespace Status {
    export const $gtype: GObject.GType<Status>;
}

export enum Status {
    NORMAL = 0,
    NOTICE = 1,
}

export namespace TextDirection {
    export const $gtype: GObject.GType<TextDirection>;
}

export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2,
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        dbus_name: string;
        dbusName: string;
        dbus_object: string;
        dbusObject: string;
        group_events: boolean;
        groupEvents: boolean;
    }
}

export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dbus_name: string;
    dbusName: string;
    dbus_object: string;
    dbusObject: string;
    group_events: boolean;
    groupEvents: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'event-result',
        callback: (
            _source: this,
            object: GObject.Object,
            p0: string,
            p1: GLib.Variant,
            p2: number,
            p3: any | null
        ) => void
    ): number;

    connect_after(
        signal: 'event-result',
        callback: (
            _source: this,
            object: GObject.Object,
            p0: string,
            p1: GLib.Variant,
            p2: number,
            p3: any | null
        ) => void
    ): number;

    emit(
        signal: 'event-result',
        object: GObject.Object,
        p0: string,
        p1: GLib.Variant,
        p2: number,
        p3: any | null
    ): void;

    connect(signal: 'icon-theme-dirs-changed', callback: (_source: this, arg1: any | null) => void): number;

    connect_after(signal: 'icon-theme-dirs-changed', callback: (_source: this, arg1: any | null) => void): number;

    emit(signal: 'icon-theme-dirs-changed', arg1: any | null): void;

    connect(signal: 'item-activate', callback: (_source: this, arg1: GObject.Object, arg2: number) => void): number;

    connect_after(
        signal: 'item-activate',
        callback: (_source: this, arg1: GObject.Object, arg2: number) => void
    ): number;

    emit(signal: 'item-activate', arg1: GObject.Object, arg2: number): void;

    connect(signal: 'layout-updated', callback: (_source: this) => void): number;

    connect_after(signal: 'layout-updated', callback: (_source: this) => void): number;

    emit(signal: 'layout-updated'): void;

    connect(signal: 'new-menuitem', callback: (_source: this, arg1: GObject.Object) => void): number;

    connect_after(signal: 'new-menuitem', callback: (_source: this, arg1: GObject.Object) => void): number;

    emit(signal: 'new-menuitem', arg1: GObject.Object): void;

    connect(signal: 'root-changed', callback: (_source: this, arg1: GObject.Object) => void): number;

    connect_after(signal: 'root-changed', callback: (_source: this, arg1: GObject.Object) => void): number;

    emit(signal: 'root-changed', arg1: GObject.Object): void;

    // Constructors

    static ['new'](name: string, object: string): Client;

    // Members

    add_type_handler(type: string, newfunc: ClientTypeHandler): boolean;

    add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean;

    get_icon_paths(): string[];

    get_root(): Menuitem;

    get_status(): Status;

    get_text_direction(): TextDirection;
}

export namespace Menuitem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        id: number;
    }
}

export class Menuitem extends GObject.Object {
    static $gtype: GObject.GType<Menuitem>;

    constructor(properties?: Partial<Menuitem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Menuitem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: number;

    // Fields
    priv: MenuitemPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'about-to-show', callback: (_source: this) => boolean): number;

    connect_after(signal: 'about-to-show', callback: (_source: this) => boolean): number;

    emit(signal: 'about-to-show'): void;

    connect(signal: 'child-added', callback: (_source: this, arg1: GObject.Object, arg2: number) => void): number;

    connect_after(signal: 'child-added', callback: (_source: this, arg1: GObject.Object, arg2: number) => void): number;

    emit(signal: 'child-added', arg1: GObject.Object, arg2: number): void;

    connect(
        signal: 'child-moved',
        callback: (_source: this, arg1: GObject.Object, arg2: number, arg3: number) => void
    ): number;

    connect_after(
        signal: 'child-moved',
        callback: (_source: this, arg1: GObject.Object, arg2: number, arg3: number) => void
    ): number;

    emit(signal: 'child-moved', arg1: GObject.Object, arg2: number, arg3: number): void;

    connect(signal: 'child-removed', callback: (_source: this, arg1: GObject.Object) => void): number;

    connect_after(signal: 'child-removed', callback: (_source: this, arg1: GObject.Object) => void): number;

    emit(signal: 'child-removed', arg1: GObject.Object): void;

    connect(
        signal: 'event',
        callback: (_source: this, arg1: string, arg2: GLib.Variant, arg3: number) => boolean
    ): number;

    connect_after(
        signal: 'event',
        callback: (_source: this, arg1: string, arg2: GLib.Variant, arg3: number) => boolean
    ): number;

    emit(signal: 'event', arg1: string, arg2: GLib.Variant, arg3: number): void;

    connect(signal: 'item-activated', callback: (_source: this, arg1: number) => void): number;

    connect_after(signal: 'item-activated', callback: (_source: this, arg1: number) => void): number;

    emit(signal: 'item-activated', arg1: number): void;

    connect(signal: 'property-changed', callback: (_source: this, arg1: string, arg2: GLib.Variant) => void): number;

    connect_after(
        signal: 'property-changed',
        callback: (_source: this, arg1: string, arg2: GLib.Variant) => void
    ): number;

    emit(signal: 'property-changed', arg1: string, arg2: GLib.Variant): void;

    connect(signal: 'realized', callback: (_source: this) => void): number;

    connect_after(signal: 'realized', callback: (_source: this) => void): number;

    emit(signal: 'realized'): void;

    connect(signal: 'show-to-user', callback: (_source: this, arg1: number) => void): number;

    connect_after(signal: 'show-to-user', callback: (_source: this, arg1: number) => void): number;

    emit(signal: 'show-to-user', arg1: number): void;

    // Constructors

    static ['new'](): Menuitem;

    static new_with_id(id: number): Menuitem;

    // Members

    child_add_position(child: Menuitem, position: number): boolean;

    child_append(child: Menuitem): boolean;

    child_delete(child: Menuitem): boolean;

    child_find(id: number): Menuitem;

    child_prepend(child: Menuitem): boolean;

    child_reorder(child: Menuitem, position: number): boolean;

    find_id(id: number): Menuitem;

    foreach(func?: any | null, data?: any | null): void;

    get_children(): Menuitem[];

    get_id(): number;

    get_parent(): Menuitem;

    get_position(parent: Menuitem): number;

    get_position_realized(parent: Menuitem): number;

    get_root(): boolean;

    handle_event(name: string, variant: GLib.Variant, timestamp: number): void;

    properties_copy(): GLib.HashTable<any, any>;

    properties_list(): string[];

    property_exist(property: string): boolean;

    property_get(property: string): string;

    property_get_bool(property: string): boolean;

    property_get_byte_array(property: string): Uint8Array;

    property_get_int(property: string): number;

    property_get_variant(property: string): GLib.Variant;

    property_remove(property: string): void;

    property_set(property: string, value: string): boolean;

    property_set_bool(property: string, value: boolean): boolean;

    property_set_byte_array(property: string, value: number, nelements: number): boolean;

    property_set_int(property: string, value: number): boolean;

    property_set_variant(property: string, value: GLib.Variant): boolean;

    send_about_to_show(cb?: any | null, cb_data?: any | null): void;

    set_parent(parent: Menuitem): boolean;

    set_root(root: boolean): void;

    show_to_user(timestamp: number): void;

    take_children(): Menuitem[];

    unparent(): boolean;

    vfunc_child_added(position: number): void;

    vfunc_child_moved(newpos: number, oldpos: number): void;

    vfunc_child_removed(): void;

    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void;

    vfunc_show_to_user(timestamp: number, cb_data?: any | null): void;
}

export namespace MenuitemProxy {
    export interface ConstructorProperties extends Menuitem.ConstructorProperties {
        [key: string]: any;

        menu_item: Menuitem;
        menuItem: Menuitem;
    }
}

export class MenuitemProxy extends Menuitem {
    static $gtype: GObject.GType<MenuitemProxy>;

    constructor(properties?: Partial<MenuitemProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MenuitemProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    menu_item: Menuitem;
    menuItem: Menuitem;

    // Constructors

    static ['new'](mi: Menuitem): MenuitemProxy;
    static ['new'](...args: never[]): never;

    // Members

    get_wrapped(): Menuitem;
}

export namespace Server {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        dbus_object: string;
        dbusObject: string;
        root_node: Menuitem;
        rootNode: Menuitem;
        version: number;
    }
}

export class Server extends GObject.Object {
    static $gtype: GObject.GType<Server>;

    constructor(properties?: Partial<Server.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Server.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dbus_object: string;
    dbusObject: string;
    root_node: Menuitem;
    rootNode: Menuitem;
    version: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'item-activation-requested', callback: (_source: this, arg1: number, arg2: number) => void): number;

    connect_after(
        signal: 'item-activation-requested',
        callback: (_source: this, arg1: number, arg2: number) => void
    ): number;

    emit(signal: 'item-activation-requested', arg1: number, arg2: number): void;

    connect(
        signal: 'item-property-updated',
        callback: (_source: this, object: number, p0: string, p1: GLib.Variant) => void
    ): number;

    connect_after(
        signal: 'item-property-updated',
        callback: (_source: this, object: number, p0: string, p1: GLib.Variant) => void
    ): number;

    emit(signal: 'item-property-updated', object: number, p0: string, p1: GLib.Variant): void;

    connect(signal: 'item-updated', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'item-updated', callback: (_source: this, object: number) => void): number;

    emit(signal: 'item-updated', object: number): void;

    connect(signal: 'layout-updated', callback: (_source: this, arg1: number, arg2: number) => void): number;

    connect_after(signal: 'layout-updated', callback: (_source: this, arg1: number, arg2: number) => void): number;

    emit(signal: 'layout-updated', arg1: number, arg2: number): void;

    // Constructors

    static ['new'](object: string): Server;

    // Members

    get_icon_paths(): string[];

    get_status(): Status;

    get_text_direction(): TextDirection;

    set_icon_paths(icon_paths: string[]): void;

    set_root(root: Menuitem): void;

    set_status(status: Status): void;

    set_text_direction(dir: TextDirection): void;
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class MenuitemPrivate {
    static $gtype: GObject.GType<MenuitemPrivate>;

    constructor(copy: MenuitemPrivate);
}

export class MenuitemProxyPrivate {
    static $gtype: GObject.GType<MenuitemProxyPrivate>;

    constructor(copy: MenuitemProxyPrivate);
}

export class ServerPrivate {
    static $gtype: GObject.GType<ServerPrivate>;

    constructor(copy: ServerPrivate);
}
