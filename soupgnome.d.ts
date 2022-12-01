/**
 * SoupGNOME 2.4
 *
 * Generated from 2.4
 */


import * as Soup from "soup";
import * as GObject from "gobject";
import * as GLib from "glib";
import * as Gio from "gio";


export const COOKIE_JAR_SQLITE_FILENAME: string;

export function gnome_features_2_26_get_type(): GObject.GType;

export module CookieJarSqlite {

    export interface ConstructorProperties extends Soup.CookieJarDB.ConstructorProperties {
        [key: string]: any;

    }
}

export class CookieJarSqlite extends Soup.CookieJarDB implements Soup.SessionFeature {
    static $gtype: GObject.GType<CookieJarSqlite>;


    constructor(properties?: Partial<CookieJarSqlite.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CookieJarSqlite.ConstructorProperties>, ...args: any[]): void;


    // Constructors

    static ["new"](filename: string, read_only: boolean): CookieJarSqlite;
    // Conflicted with Soup.CookieJar.new
    static ["new"](...args: never[]): any;


}

export module PasswordManagerGNOME {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class PasswordManagerGNOME extends GObject.Object implements Soup.SessionFeature {
    static $gtype: GObject.GType<PasswordManagerGNOME>;


    constructor(properties?: Partial<PasswordManagerGNOME.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PasswordManagerGNOME.ConstructorProperties>, ...args: any[]): void;


    // Implemented Members

    add_feature(type: GObject.GType): boolean;

    attach(session: Soup.Session): void;

    detach(session: Soup.Session): void;

    has_feature(type: GObject.GType): boolean;

    remove_feature(type: GObject.GType): boolean;

    vfunc_add_feature(type: GObject.GType): boolean;

    vfunc_attach(session: Soup.Session): void;

    vfunc_detach(session: Soup.Session): void;

    vfunc_has_feature(type: GObject.GType): boolean;

    vfunc_remove_feature(type: GObject.GType): boolean;

    vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void;

    vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void;

    vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void;
}

export module ProxyResolverGNOME {

    export interface ConstructorProperties extends Soup.ProxyResolverDefault.ConstructorProperties {
        [key: string]: any;

    }
}

export class ProxyResolverGNOME extends Soup.ProxyResolverDefault implements Soup.ProxyURIResolver, Soup.SessionFeature {
    static $gtype: GObject.GType<ProxyResolverGNOME>;


    constructor(properties?: Partial<ProxyResolverGNOME.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProxyResolverGNOME.ConstructorProperties>, ...args: any[]): void;


    // Implemented Members

    get_proxy_uri_async(uri: Soup.URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void;

    get_proxy_uri_sync(uri: Soup.URI, cancellable: Gio.Cancellable | null): [number, Soup.URI];

    vfunc_get_proxy_uri_async(uri: Soup.URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void;

    vfunc_get_proxy_uri_sync(uri: Soup.URI, cancellable: Gio.Cancellable | null): [number, Soup.URI];

    add_feature(type: GObject.GType): boolean;

    attach(session: Soup.Session): void;

    detach(session: Soup.Session): void;

    has_feature(type: GObject.GType): boolean;

    remove_feature(type: GObject.GType): boolean;

    vfunc_add_feature(type: GObject.GType): boolean;

    vfunc_attach(session: Soup.Session): void;

    vfunc_detach(session: Soup.Session): void;

    vfunc_has_feature(type: GObject.GType): boolean;

    vfunc_remove_feature(type: GObject.GType): boolean;

    vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void;

    vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void;

    vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void;
}
