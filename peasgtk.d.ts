/**
 * PeasGtk 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as Peas from './peas';
import * as Atk from './atk';
import * as GLib from './glib';

export namespace PluginManager {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        engine: Peas.Engine;
        view: PluginManagerView;
    }
}

export class PluginManager extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<PluginManager>;

    constructor(properties?: Partial<PluginManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PluginManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    engine: Peas.Engine;
    view: PluginManagerView;

    // Fields
    box: Gtk.Box;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](engine?: Peas.Engine | null): PluginManager;
    static ['new'](...args: never[]): never;

    // Members

    get_view(): Gtk.Widget;

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

export namespace PluginManagerView {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        engine: Peas.Engine;
        show_builtin: boolean;
        showBuiltin: boolean;
    }
}

export class PluginManagerView extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<PluginManagerView>;

    constructor(properties?: Partial<PluginManagerView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PluginManagerView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    engine: Peas.Engine;
    show_builtin: boolean;
    showBuiltin: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    connect_after(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    emit(signal: 'populate-popup', menu: Gtk.Menu): void;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](engine?: Peas.Engine | null): PluginManagerView;
    static ['new'](...args: never[]): never;

    // Members

    get_selected_plugin(): Peas.PluginInfo;

    get_show_builtin(): boolean;

    set_selected_plugin(info: Peas.PluginInfo): void;

    set_show_builtin(show_builtin: boolean): void;

    vfunc_populate_popup(menu: Gtk.Menu): void;

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

export class PluginManagerPrivate {
    static $gtype: GObject.GType<PluginManagerPrivate>;

    constructor(copy: PluginManagerPrivate);
}

export class PluginManagerViewPrivate {
    static $gtype: GObject.GType<PluginManagerViewPrivate>;

    constructor(copy: PluginManagerViewPrivate);
}

export interface ConfigurableNamespace {
    $gtype: GObject.GType<Configurable>;
    prototype: ConfigurablePrototype;
}

export type Configurable = ConfigurablePrototype;

export interface ConfigurablePrototype extends GObject.Object {
    // Members

    create_configure_widget(): Gtk.Widget;

    vfunc_create_configure_widget(): Gtk.Widget;
}

export const Configurable: ConfigurableNamespace;
