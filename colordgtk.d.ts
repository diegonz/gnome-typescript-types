/**
 * ColordGtk 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Colord from './colord';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GLib from './glib';

export const GTK_MAJOR_VERSION: number;
export const GTK_MICRO_VERSION: number;
export const GTK_MINOR_VERSION: number;

export namespace WindowError {
    export const $gtype: GObject.GType<WindowError>;
}

export enum WindowError {
    FAILED = 0,
    LAST = 1,
}

export namespace SampleWidget {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        color: Colord.ColorRGB;
    }
}

export class SampleWidget extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SampleWidget>;

    constructor(properties?: Partial<SampleWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SampleWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    color: Colord.ColorRGB;

    // Fields
    priv: SampleWidgetPrivate;

    // Constructors

    static ['new'](): SampleWidget;

    // Members

    set_color(color: Colord.ColorRGB): void;

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

export namespace SampleWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}

export class SampleWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SampleWindow>;

    constructor(properties?: Partial<SampleWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SampleWindow.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SampleWindowPrivate | any;

    // Constructors

    static ['new'](): SampleWindow;
    static ['new'](...args: never[]): never;

    // Members

    set_color(color: Colord.ColorRGB): void;

    set_fraction(fraction: number): void;

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

export namespace Window {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        Profile: string;
    }
}

export class Window extends GObject.Object {
    static $gtype: GObject.GType<Window>;

    constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;

    // Properties
    Profile: string;

    // Fields
    priv: WindowPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: Colord.Profile) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: Colord.Profile) => void): number;

    emit(signal: 'changed', object: Colord.Profile): void;

    // Constructors

    static ['new'](): Window;

    // Members

    get_last_profile(): Colord.Profile;

    get_profile(
        widget: Gtk.Widget,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_profile_finish(res: Gio.AsyncResult): Colord.Profile;

    get_profile_sync(widget: Gtk.Widget, cancellable?: Gio.Cancellable | null): Colord.Profile;

    vfunc_changed(profile: Colord.Profile): void;

    static error_quark(): GLib.Quark;
}

export class SampleWidgetPrivate {
    static $gtype: GObject.GType<SampleWidgetPrivate>;

    constructor(copy: SampleWidgetPrivate);
}

export class SampleWindowPrivate {
    static $gtype: GObject.GType<SampleWindowPrivate>;

    constructor(copy: SampleWindowPrivate);
}

export class WindowPrivate {
    static $gtype: GObject.GType<WindowPrivate>;

    constructor(copy: WindowPrivate);
}
