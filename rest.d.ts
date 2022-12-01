/**
 * Rest 0.7
 *
 * Generated from 0.7
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Soup from './soup';
import * as GLib from './glib';

export function hmac_sha1(key: string, message: string): string;

export function proxy_call_error_quark(): GLib.Quark;

export function proxy_error_quark(): GLib.Quark;

export type OAuthProxyAuthCallback<A = GObject.Object> = (
    proxy: OAuthProxy,
    error: GLib.Error,
    weak_object: A,
    userdata?: any | null
) => void;
export type ProxyCallAsyncCallback<A = GObject.Object> = (
    call: ProxyCall,
    error: GLib.Error,
    weak_object: A,
    userdata?: any | null
) => void;
export type ProxyCallContinuousCallback<A = GObject.Object> = (
    call: ProxyCall,
    buf: string,
    len: number,
    error: GLib.Error,
    weak_object: A,
    userdata?: any | null
) => void;
export type ProxyCallUploadCallback<A = GObject.Object> = (
    call: ProxyCall,
    total: number,
    uploaded: number,
    error: GLib.Error,
    weak_object: A,
    userdata?: any | null
) => void;

export namespace MemoryUse {
    export const $gtype: GObject.GType<MemoryUse>;
}

export enum MemoryUse {
    STATIC = 0,
    TAKE = 1,
    COPY = 2,
}

export namespace OAuthSignatureMethod {
    export const $gtype: GObject.GType<OAuthSignatureMethod>;
}

export enum OAuthSignatureMethod {
    PLAINTEXT = 0,
    HMAC_SHA1 = 1,
}

export class ProxyCallError extends GLib.Error {
    static $gtype: GObject.GType<ProxyCallError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ProxyCallError);

    // Properties
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class ProxyError extends GLib.Error {
    static $gtype: GObject.GType<ProxyError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ProxyError);

    // Properties
    static CANCELLED: number;
    static RESOLUTION: number;
    static CONNECTION: number;
    static SSL: number;
    static IO: number;
    static FAILED: number;
    static HTTP_MULTIPLE_CHOICES: number;
    static HTTP_MOVED_PERMANENTLY: number;
    static HTTP_FOUND: number;
    static HTTP_SEE_OTHER: number;
    static HTTP_NOT_MODIFIED: number;
    static HTTP_USE_PROXY: number;
    static HTTP_THREEOHSIX: number;
    static HTTP_TEMPORARY_REDIRECT: number;
    static HTTP_BAD_REQUEST: number;
    static HTTP_UNAUTHORIZED: number;
    static HTTP_FOUROHTWO: number;
    static HTTP_FORBIDDEN: number;
    static HTTP_NOT_FOUND: number;
    static HTTP_METHOD_NOT_ALLOWED: number;
    static HTTP_NOT_ACCEPTABLE: number;
    static HTTP_PROXY_AUTHENTICATION_REQUIRED: number;
    static HTTP_REQUEST_TIMEOUT: number;
    static HTTP_CONFLICT: number;
    static HTTP_GONE: number;
    static HTTP_LENGTH_REQUIRED: number;
    static HTTP_PRECONDITION_FAILED: number;
    static HTTP_REQUEST_ENTITY_TOO_LARGE: number;
    static HTTP_REQUEST_URI_TOO_LONG: number;
    static HTTP_UNSUPPORTED_MEDIA_TYPE: number;
    static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE: number;
    static HTTP_EXPECTATION_FAILED: number;
    static HTTP_INTERNAL_SERVER_ERROR: number;
    static HTTP_NOT_IMPLEMENTED: number;
    static HTTP_BAD_GATEWAY: number;
    static HTTP_SERVICE_UNAVAILABLE: number;
    static HTTP_GATEWAY_TIMEOUT: number;
    static HTTP_HTTP_VERSION_NOT_SUPPORTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace OAuth2Proxy {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;

        access_token: string;
        accessToken: string;
        auth_endpoint: string;
        authEndpoint: string;
        client_id: string;
        clientId: string;
    }
}

export class OAuth2Proxy extends Proxy {
    static $gtype: GObject.GType<OAuth2Proxy>;

    constructor(properties?: Partial<OAuth2Proxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2Proxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    access_token: string;
    accessToken: string;
    auth_endpoint: string;
    authEndpoint: string;
    client_id: string;
    clientId: string;

    // Fields
    priv: OAuth2ProxyPrivate;

    // Constructors

    static ['new'](
        client_id: string,
        auth_endpoint: string,
        url_format: string,
        binding_required: boolean
    ): OAuth2Proxy;

    static ['new'](...args: never[]): never;

    static new_with_token(
        client_id: string,
        access_token: string,
        auth_endpoint: string,
        url_format: string,
        binding_required: boolean
    ): OAuth2Proxy;

    // Members

    build_login_url(redirect_uri: string): string;

    build_login_url_full(redirect_uri: string, extra_params: GLib.HashTable<any, any>): string;

    get_access_token(): string;

    set_access_token(access_token: string): void;

    static extract_access_token(url: string): string;
}

export namespace OAuth2ProxyCall {
    export interface ConstructorProperties extends ProxyCall.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuth2ProxyCall extends ProxyCall {
    static $gtype: GObject.GType<OAuth2ProxyCall>;

    constructor(properties?: Partial<OAuth2ProxyCall.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2ProxyCall.ConstructorProperties>, ...args: any[]): void;
}

export namespace OAuthProxy {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;

        consumer_key: string;
        consumerKey: string;
        consumer_secret: string;
        consumerSecret: string;
        signature_host: string;
        signatureHost: string;
        signature_method: OAuthSignatureMethod;
        signatureMethod: OAuthSignatureMethod;
        token: string;
        token_secret: string;
        tokenSecret: string;
    }
}

export class OAuthProxy extends Proxy {
    static $gtype: GObject.GType<OAuthProxy>;

    constructor(properties?: Partial<OAuthProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuthProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    consumer_key: string;
    consumerKey: string;
    consumer_secret: string;
    consumerSecret: string;
    signature_host: string;
    signatureHost: string;
    signature_method: OAuthSignatureMethod;
    signatureMethod: OAuthSignatureMethod;
    token: string;
    token_secret: string;
    tokenSecret: string;

    // Constructors

    static ['new'](
        consumer_key: string,
        consumer_secret: string,
        url_format: string,
        binding_required: boolean
    ): OAuthProxy;

    static ['new'](...args: never[]): never;

    static new_with_token(
        consumer_key: string,
        consumer_secret: string,
        token: string,
        token_secret: string,
        url_format: string,
        binding_required: boolean
    ): OAuthProxy;

    // Members

    access_token(_function: string, verifier: string): boolean;

    access_token_async(
        _function: string,
        verifier: string,
        callback: OAuthProxyAuthCallback,
        weak_object: GObject.Object
    ): boolean;

    auth_step(_function: string): boolean;

    auth_step_async(_function: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object): boolean;

    get_signature_host(): string;

    get_token(): string;

    get_token_secret(): string;

    is_oauth10a(): boolean;

    new_echo_proxy(service_url: string, url_format: string, binding_required: boolean): Proxy;

    request_token(_function: string, callback_uri: string): boolean;

    request_token_async(
        _function: string,
        callback_uri: string,
        callback: OAuthProxyAuthCallback,
        weak_object: GObject.Object
    ): boolean;

    set_signature_host(signature_host: string): void;

    set_token(token: string): void;

    set_token_secret(token_secret: string): void;
}

export namespace OAuthProxyCall {
    export interface ConstructorProperties extends ProxyCall.ConstructorProperties {
        [key: string]: any;
    }
}

export class OAuthProxyCall extends ProxyCall {
    static $gtype: GObject.GType<OAuthProxyCall>;

    constructor(properties?: Partial<OAuthProxyCall.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuthProxyCall.ConstructorProperties>, ...args: any[]): void;

    // Members

    parse_token_reponse(): void;

    parse_token_response(): void;
}

export namespace Proxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        binding_required: boolean;
        bindingRequired: boolean;
        disable_cookies: boolean;
        disableCookies: boolean;
        password: string;
        ssl_ca_file: string;
        sslCaFile: string;
        ssl_strict: boolean;
        sslStrict: boolean;
        url_format: string;
        urlFormat: string;
        user_agent: string;
        userAgent: string;
        username: string;
    }
}

export class Proxy extends GObject.Object {
    static $gtype: GObject.GType<Proxy>;

    constructor(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    binding_required: boolean;
    bindingRequired: boolean;
    disable_cookies: boolean;
    disableCookies: boolean;
    password: string;
    ssl_ca_file: string;
    sslCaFile: string;
    ssl_strict: boolean;
    sslStrict: boolean;
    url_format: string;
    urlFormat: string;
    user_agent: string;
    userAgent: string;
    username: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'authenticate', callback: (_source: this, auth: ProxyAuth, retrying: boolean) => boolean): number;

    connect_after(
        signal: 'authenticate',
        callback: (_source: this, auth: ProxyAuth, retrying: boolean) => boolean
    ): number;

    emit(signal: 'authenticate', auth: ProxyAuth, retrying: boolean): void;

    // Constructors

    static ['new'](url_format: string, binding_required: boolean): Proxy;

    static new_with_authentication(
        url_format: string,
        binding_required: boolean,
        username: string,
        password: string
    ): Proxy;

    // Members

    add_soup_feature(feature: Soup.SessionFeature): void;

    get_user_agent(): string;

    new_call(): ProxyCall;

    set_user_agent(user_agent: string): void;

    vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean;

    vfunc_new_call(): ProxyCall;
}

export namespace ProxyAuth {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ProxyAuth extends GObject.Object {
    static $gtype: GObject.GType<ProxyAuth>;

    constructor(properties?: Partial<ProxyAuth.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProxyAuth.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProxyAuthPrivate;

    // Members

    cancel(): void;

    pause(): void;

    unpause(): void;
}

export namespace ProxyCall {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        proxy: Proxy;
    }
}

export class ProxyCall extends GObject.Object {
    static $gtype: GObject.GType<ProxyCall>;

    constructor(properties?: Partial<ProxyCall.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProxyCall.ConstructorProperties>, ...args: any[]): void;

    // Properties
    proxy: Proxy;

    // Fields
    priv: ProxyCallPrivate;

    // Members

    add_header(header: string, value: string): void;

    add_param(name: string, value: string): void;

    add_param_full(param: Param): void;

    get_function(): string;

    get_method(): string;

    get_params(): Params;

    get_payload(): string;

    get_payload_length(): number;

    get_response_headers(): GLib.HashTable<any, any>;

    get_status_code(): number;

    get_status_message(): string;

    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    invoke_finish(result: Gio.AsyncResult): boolean;

    lookup_header(header: string): string;

    lookup_param(name: string): Param;

    lookup_response_header(header: string): string;

    remove_header(header: string): void;

    remove_param(name: string): void;

    run(loop: GLib.MainLoop): boolean;

    serialize_params(): [boolean, string, string, number];

    set_function(_function: string): void;

    set_method(method: string): void;

    sync(): boolean;

    upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object): boolean;

    vfunc_prepare(): boolean;

    vfunc_serialize_params(): [boolean, string, string, number];
}

export namespace XmlParser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class XmlParser extends GObject.Object {
    static $gtype: GObject.GType<XmlParser>;

    constructor(properties?: Partial<XmlParser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<XmlParser.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): XmlParser;

    // Members

    parse_from_data(data: string, len: number): XmlNode;
}

export class OAuth2ProxyPrivate {
    static $gtype: GObject.GType<OAuth2ProxyPrivate>;

    constructor(copy: OAuth2ProxyPrivate);
}

export class Param {
    static $gtype: GObject.GType<Param>;

    constructor(name: string, use: MemoryUse, data: Uint8Array | string, content_type: string, filename: string);
    constructor(copy: Param);

    // Constructors
    static new_full(
        name: string,
        use: MemoryUse,
        data: Uint8Array | string,
        content_type: string,
        filename: string
    ): Param;

    static new_string(name: string, use: MemoryUse, string: string): Param;

    static new_with_owner(
        name: string,
        data: Uint8Array | string,
        content_type: string,
        filename?: string | null,
        owner?: any | null,
        owner_dnotify?: GLib.DestroyNotify | null
    ): Param;

    // Members
    get_content(): any | null;

    get_content_length(): number;

    get_content_type(): string;

    get_file_name(): string;

    get_name(): string;

    is_string(): boolean;

    ref(): Param;

    unref(): void;
}

export class Params {
    static $gtype: GObject.GType<Params>;

    constructor(copy: Params);

    // Members
    add(param: Param): void;

    are_strings(): boolean;

    as_string_hash_table(): GLib.HashTable<string, Param>;

    free(): void;

    get(name: string): Param;

    remove(name: string): void;
}

export class ParamsIter {
    static $gtype: GObject.GType<ParamsIter>;

    constructor(copy: ParamsIter);

    // Members
    init(params: Params): void;

    next(name: string, param: Param): boolean;
}

export class ProxyAuthPrivate {
    static $gtype: GObject.GType<ProxyAuthPrivate>;

    constructor(copy: ProxyAuthPrivate);
}

export class ProxyCallPrivate {
    static $gtype: GObject.GType<ProxyCallPrivate>;

    constructor(copy: ProxyCallPrivate);
}

export class XmlNode {
    static $gtype: GObject.GType<XmlNode>;

    constructor(copy: XmlNode);

    // Fields
    ref_count: number;
    name: string;
    content: string;
    children: GLib.HashTable<any, any>;
    attrs: GLib.HashTable<any, any>;
    next: XmlNode;

    // Members
    add_attr(attribute: string, value: string): void;

    add_child(tag: string): XmlNode;

    find(tag: string): XmlNode;

    free(): void;

    get_attr(attr_name: string): string;

    print(): string;

    set_content(value: string): void;
}
