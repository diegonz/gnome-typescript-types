/**
 * RestExtras 0.7
 *
 * Generated from 0.7
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Rest from './rest';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export type YoutubeProxyUploadCallback<A = GObject.Object> = (
    proxy: YoutubeProxy,
    payload: string,
    total: number,
    uploaded: number,
    error: GLib.Error,
    weak_object: A
) => void;
export namespace FlickrProxy {
    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {
        [key: string]: any;

        api_key: string;
        apiKey: string;
        shared_secret: string;
        sharedSecret: string;
        token: string;
    }
}

export class FlickrProxy extends Rest.Proxy {
    static $gtype: GObject.GType<FlickrProxy>;

    constructor(properties?: Partial<FlickrProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FlickrProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    api_key: string;
    apiKey: string;
    shared_secret: string;
    sharedSecret: string;
    token: string;

    // Fields
    priv: FlickrProxyPrivate;

    // Constructors

    static ['new'](api_key: string, shared_secret: string): FlickrProxy;
    static ['new'](...args: never[]): never;

    static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy;

    // Members

    build_login_url(frob: string, perms: string): string;

    get_api_key(): string;

    get_shared_secret(): string;

    get_token(): string;

    new_upload(): FlickrProxyCall;

    new_upload_for_file(filename: string): FlickrProxyCall;

    set_token(token: string): void;

    sign(params: GLib.HashTable<any, any>): string;

    static is_successful(root: Rest.XmlNode): boolean;
}

export namespace FlickrProxyCall {
    export interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {
        [key: string]: any;

        upload: boolean | any;
    }
}

export class FlickrProxyCall extends Rest.ProxyCall {
    static $gtype: GObject.GType<FlickrProxyCall>;

    constructor(properties?: Partial<FlickrProxyCall.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FlickrProxyCall.ConstructorProperties>, ...args: any[]): void;

    // Properties
    upload: boolean | any;
}

export namespace LastfmProxy {
    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {
        [key: string]: any;

        api_key: string;
        apiKey: string;
        secret: string;
        session_key: string;
        sessionKey: string;
    }
}

export class LastfmProxy extends Rest.Proxy {
    static $gtype: GObject.GType<LastfmProxy>;

    constructor(properties?: Partial<LastfmProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LastfmProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    api_key: string;
    apiKey: string;
    secret: string;
    session_key: string;
    sessionKey: string;

    // Fields
    priv: LastfmProxyPrivate;

    // Constructors

    static ['new'](api_key: string, secret: string): LastfmProxy;
    static ['new'](...args: never[]): never;

    static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy;

    // Members

    build_login_url(token: string): string;

    get_api_key(): string;

    get_secret(): string;

    get_session_key(): string;

    set_session_key(session_key: string): void;

    sign(params: GLib.HashTable<any, any>): string;

    static is_successful(root: Rest.XmlNode): boolean;
}

export namespace LastfmProxyCall {
    export interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {
        [key: string]: any;
    }
}

export class LastfmProxyCall extends Rest.ProxyCall {
    static $gtype: GObject.GType<LastfmProxyCall>;

    constructor(properties?: Partial<LastfmProxyCall.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LastfmProxyCall.ConstructorProperties>, ...args: any[]): void;
}

export namespace YoutubeProxy {
    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {
        [key: string]: any;

        developer_key: string;
        developerKey: string;
        user_auth: string;
        userAuth: string;
    }
}

export class YoutubeProxy extends Rest.Proxy {
    static $gtype: GObject.GType<YoutubeProxy>;

    constructor(properties?: Partial<YoutubeProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YoutubeProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    developer_key: string;
    developerKey: string;
    user_auth: string;
    userAuth: string;

    // Fields
    priv: YoutubeProxyPrivate;

    // Constructors

    static ['new'](developer_key: string): YoutubeProxy;
    static ['new'](...args: never[]): never;

    static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy;

    // Members

    set_user_auth(user_auth: string): void;

    upload_async(
        filename: string,
        fields: GLib.HashTable<any, any>,
        incomplete: boolean,
        callback: YoutubeProxyUploadCallback,
        weak_object: GObject.Object
    ): boolean;
}

export class FlickrProxyPrivate {
    static $gtype: GObject.GType<FlickrProxyPrivate>;

    constructor(copy: FlickrProxyPrivate);
}

export class LastfmProxyPrivate {
    static $gtype: GObject.GType<LastfmProxyPrivate>;

    constructor(copy: LastfmProxyPrivate);
}

export class YoutubeProxyPrivate {
    static $gtype: GObject.GType<YoutubeProxyPrivate>;

    constructor(copy: YoutubeProxyPrivate);
}
