/**
 * GtkChamplain 0.12
 *
 * Generated from 0.12
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Champlain from './champlain';
import * as Clutter from './clutter';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as GLib from './glib';

export namespace Embed {
    export interface ConstructorProperties extends Gtk.Alignment.ConstructorProperties {
        [key: string]: any;

        champlain_view: Champlain.View;
        champlainView: Champlain.View;
    }
}

export class Embed extends Gtk.Alignment implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Embed>;

    constructor(properties?: Partial<Embed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Embed.ConstructorProperties>, ...args: any[]): void;

    // Properties
    champlain_view: Champlain.View;
    champlainView: Champlain.View;

    // Fields
    bin: Gtk.Alignment | any;
    priv: EmbedPrivate;

    // Constructors

    static ['new'](): Embed;
    static ['new'](...args: never[]): never;

    // Members

    get_view(): Champlain.View;

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

export class EmbedPrivate {
    static $gtype: GObject.GType<EmbedPrivate>;

    constructor(copy: EmbedPrivate);
}
