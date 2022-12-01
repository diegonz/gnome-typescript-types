/**
 * DbusmenuGtk3 0.4
 *
 * Generated from 0.4
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Dbusmenu from './dbusmenu';
import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gdk from './gdk';
import * as GLib from './glib';

export const GTK_MENUITEM_H__: number;

export function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem;

export function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem;

export function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf;

export function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): [number, Gdk.ModifierType];

export function menuitem_property_set_image(
    menuitem: Dbusmenu.Menuitem,
    property: string,
    data: GdkPixbuf.Pixbuf
): boolean;

export function menuitem_property_set_shortcut(
    menuitem: Dbusmenu.Menuitem,
    key: number,
    modifier: Gdk.ModifierType
): boolean;

export function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean;

export function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean;

export namespace Client {
    export interface ConstructorProperties extends Dbusmenu.Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class Client extends Dbusmenu.Client {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](dbus_name: string, dbus_object: string): Client;

    // Members

    get_accel_group(): Gtk.AccelGroup;

    menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem;

    menuitem_get_submenu(item: Dbusmenu.Menuitem): Gtk.Menu;

    newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void;

    set_accel_group(agroup: Gtk.AccelGroup): void;
}

export namespace Menu {
    export interface ConstructorProperties extends Gtk.Menu.ConstructorProperties {
        [key: string]: any;

        dbus_name: string;
        dbusName: string;
        dbus_object: string;
        dbusObject: string;
    }
}

export class Menu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Menu>;

    constructor(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dbus_name: string;
    dbusName: string;
    dbus_object: string;
    dbusObject: string;

    // Fields
    priv: MenuPrivate;

    // Constructors

    static ['new'](dbus_name: string, dbus_object: string): Menu;
    static ['new'](...args: never[]): never;

    // Members

    get_client(): Client;

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

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class MenuPrivate {
    static $gtype: GObject.GType<MenuPrivate>;

    constructor(copy: MenuPrivate);
}
