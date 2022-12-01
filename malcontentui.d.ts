/**
 * MalcontentUi 0
 *
 * Generated from 0.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as AccountsService from './accountsservice';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Malcontent from './malcontent';
import * as Atk from './atk';
import * as GLib from './glib';

export namespace RestrictApplicationsDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        app_filter: Malcontent.AppFilter;
        appFilter: Malcontent.AppFilter;
        user_display_name: string;
        userDisplayName: string;
    }
}

export class RestrictApplicationsDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<RestrictApplicationsDialog>;

    constructor(properties?: Partial<RestrictApplicationsDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RestrictApplicationsDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    app_filter: Malcontent.AppFilter;
    appFilter: Malcontent.AppFilter;
    user_display_name: string;
    userDisplayName: string;

    // Constructors

    static ['new'](app_filter: Malcontent.AppFilter, user_display_name?: string | null): RestrictApplicationsDialog;
    static ['new'](...args: never[]): never;

    // Members

    build_app_filter(builder: Malcontent.AppFilterBuilder): void;

    get_app_filter(): Malcontent.AppFilter;

    get_user_display_name(): string | null;

    set_app_filter(app_filter?: Malcontent.AppFilter | null): void;

    set_user_display_name(user_display_name?: string | null): void;

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

export namespace RestrictApplicationsSelector {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        app_filter: Malcontent.AppFilter;
        appFilter: Malcontent.AppFilter;
    }
}

export class RestrictApplicationsSelector
    extends Gtk.Box
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<RestrictApplicationsSelector>;

    constructor(properties?: Partial<RestrictApplicationsSelector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RestrictApplicationsSelector.ConstructorProperties>, ...args: any[]): void;

    // Properties
    app_filter: Malcontent.AppFilter;
    appFilter: Malcontent.AppFilter;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](app_filter: Malcontent.AppFilter): RestrictApplicationsSelector;
    static ['new'](...args: never[]): never;

    // Members

    build_app_filter(builder: Malcontent.AppFilterBuilder): void;

    get_app_filter(): Malcontent.AppFilter;

    set_app_filter(app_filter?: Malcontent.AppFilter | null): void;

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

export namespace UserControls {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        app_filter: Malcontent.AppFilter;
        appFilter: Malcontent.AppFilter;
        dbus_connection: Gio.DBusConnection;
        dbusConnection: Gio.DBusConnection;
        permission: Gio.Permission;
        user: AccountsService.User;
        user_account_type: AccountsService.UserAccountType;
        userAccountType: AccountsService.UserAccountType;
        user_display_name: string;
        userDisplayName: string;
        user_locale: string;
        userLocale: string;
    }
}

export class UserControls extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<UserControls>;

    constructor(properties?: Partial<UserControls.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserControls.ConstructorProperties>, ...args: any[]): void;

    // Properties
    app_filter: Malcontent.AppFilter;
    appFilter: Malcontent.AppFilter;
    dbus_connection: Gio.DBusConnection;
    dbusConnection: Gio.DBusConnection;
    permission: Gio.Permission;
    user: AccountsService.User;
    user_account_type: AccountsService.UserAccountType;
    userAccountType: AccountsService.UserAccountType;
    user_display_name: string;
    userDisplayName: string;
    user_locale: string;
    userLocale: string;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Members

    build_app_filter(builder: Malcontent.AppFilterBuilder): void;

    get_app_filter(): Malcontent.AppFilter | null;

    get_permission(): Gio.Permission | null;

    get_user(): AccountsService.User | null;

    get_user_account_type(): AccountsService.UserAccountType;

    get_user_display_name(): string | null;

    get_user_locale(): string | null;

    set_app_filter(app_filter?: Malcontent.AppFilter | null): void;

    set_permission(permission?: Gio.Permission | null): void;

    set_user(user?: AccountsService.User | null): void;

    set_user_account_type(user_account_type: AccountsService.UserAccountType): void;

    set_user_display_name(user_display_name?: string | null): void;

    set_user_locale(user_locale?: string | null): void;

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
