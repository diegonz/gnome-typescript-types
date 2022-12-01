/**
 * GFBGraph 0.2
 *
 * Generated from 0.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as Json from './json';
import * as Rest from './rest';
import * as Soup from './soup';

export function new_rest_call(authorizer: Authorizer): Rest.ProxyCall;

export namespace NodeError {
    export const $gtype: GObject.GType<NodeError>;
}

export enum NodeError {
    CONNECTIONABLE = 1,
    CONNECTABLE = 2,
}

export namespace Album {
    export interface ConstructorProperties extends Node.ConstructorProperties {
        [key: string]: any;

        count: number;
        cover_photo: string;
        coverPhoto: string;
        description: string;
        name: string;
    }
}

export class Album extends Node implements Connectable {
    static $gtype: GObject.GType<Album>;

    constructor(properties?: Partial<Album.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Album.ConstructorProperties>, ...args: any[]): void;

    // Properties
    count: number;
    cover_photo: string;
    coverPhoto: string;
    description: string;
    name: string;

    // Constructors

    static ['new'](): Album;

    static new_from_id(authorizer: Authorizer, id: string): Album;
    static new_from_id(...args: never[]): never;

    // Members

    get_count(): number;

    get_cover_photo_id(): string;

    get_description(): string;

    get_name(): string;

    set_description(description: string): void;

    set_name(name: string): void;

    // Implemented Members

    default_parse_connected_data(payload: string): Node[];

    get_connection_path(node_type: GObject.GType): string;

    get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

    is_connectable_to(node_type: GObject.GType): boolean;

    parse_connected_data(payload: string): Node[];

    vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

    vfunc_parse_connected_data(payload: string): Node[];
}

export namespace GoaAuthorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class GoaAuthorizer extends GObject.Object implements Authorizer {
    static $gtype: GObject.GType<GoaAuthorizer>;

    constructor(properties?: Partial<GoaAuthorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GoaAuthorizer.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    process_call(call: Rest.ProxyCall): void;

    process_message(message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_process_call(call: Rest.ProxyCall): void;

    vfunc_process_message(message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Node {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        created_time: string;
        createdTime: string;
        id: string;
        link: string;
        updated_time: string;
        updatedTime: string;
    }
}

export class Node extends GObject.Object {
    static $gtype: GObject.GType<Node>;

    constructor(properties?: Partial<Node.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Node.ConstructorProperties>, ...args: any[]): void;

    // Properties
    created_time: string;
    createdTime: string;
    id: string;
    link: string;
    updated_time: string;
    updatedTime: string;

    // Constructors

    static ['new'](): Node;

    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node;

    // Members

    append_connection(connect_node: Node, authorizer: Authorizer): boolean;

    get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[];

    get_connection_nodes_async(
        node_type: GObject.GType,
        authorizer: Authorizer,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[];

    get_created_time(): string;

    get_id(): string;

    get_link(): string;

    get_updated_time(): string;

    set_id(id: string): void;

    static error_quark(): GLib.Quark;
}

export namespace Photo {
    export interface ConstructorProperties extends Node.ConstructorProperties {
        [key: string]: any;

        height: number;
        images: any;
        name: string;
        source: string;
        width: number;
    }
}

export class Photo extends Node implements Connectable, Json.Serializable {
    static $gtype: GObject.GType<Photo>;

    constructor(properties?: Partial<Photo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Photo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    images: any;
    name: string;
    source: string;
    width: number;

    // Constructors

    static ['new'](): Photo;

    static new_from_id(authorizer: Authorizer, id: string): Photo;
    static new_from_id(...args: never[]): never;

    // Members

    download_default_size(authorizer: Authorizer): Gio.InputStream;

    get_default_height(): number;

    get_default_source_uri(): string;

    get_default_width(): number;

    get_image_hires(): PhotoImage;

    get_image_near_height(height: number): PhotoImage;

    get_image_near_width(width: number): PhotoImage;

    get_images(): PhotoImage[];

    get_name(): string;

    // Implemented Members

    default_parse_connected_data(payload: string): Node[];

    get_connection_path(node_type: GObject.GType): string;

    get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

    is_connectable_to(node_type: GObject.GType): boolean;

    parse_connected_data(payload: string): Node[];

    vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

    vfunc_parse_connected_data(payload: string): Node[];

    default_deserialize_property(
        property_name: string,
        value: any,
        pspec: GObject.ParamSpec,
        property_node: Json.Node
    ): boolean;

    default_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Json.Node | null;

    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Json.Node): [boolean, unknown];

    find_property(name: string): GObject.ParamSpec | null;

    get_property(pspec: GObject.ParamSpec): unknown;
    get_property(...args: never[]): never;

    list_properties(): GObject.ParamSpec[];

    serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Json.Node;

    set_property(pspec: GObject.ParamSpec, value: any): void;
    set_property(...args: never[]): never;

    vfunc_deserialize_property(
        property_name: string,
        pspec: GObject.ParamSpec,
        property_node: Json.Node
    ): [boolean, unknown];

    vfunc_find_property(name: string): GObject.ParamSpec | null;

    vfunc_get_property(pspec: GObject.ParamSpec): unknown;
    vfunc_get_property(...args: never[]): never;

    vfunc_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Json.Node;

    vfunc_set_property(pspec: GObject.ParamSpec, value: any): void;
    vfunc_set_property(...args: never[]): never;
}

export namespace SimpleAuthorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        access_token: string;
        accessToken: string;
    }
}

export class SimpleAuthorizer extends GObject.Object implements Authorizer {
    static $gtype: GObject.GType<SimpleAuthorizer>;

    constructor(properties?: Partial<SimpleAuthorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleAuthorizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    access_token: string;
    accessToken: string;

    // Constructors

    static ['new'](access_token: string): SimpleAuthorizer;

    // Implemented Members

    process_call(call: Rest.ProxyCall): void;

    process_message(message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_process_call(call: Rest.ProxyCall): void;

    vfunc_process_message(message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace User {
    export interface ConstructorProperties extends Node.ConstructorProperties {
        [key: string]: any;

        email: string;
        name: string;
    }
}

export class User extends Node {
    static $gtype: GObject.GType<User>;

    constructor(properties?: Partial<User.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<User.ConstructorProperties>, ...args: any[]): void;

    // Properties
    email: string;
    name: string;

    // Constructors

    static ['new'](): User;

    static new_from_id(authorizer: Authorizer, id: string): User;
    static new_from_id(...args: never[]): never;

    // Members

    get_albums(authorizer: Authorizer): Album[];

    get_albums_async(
        authorizer: Authorizer,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_albums_async_finish(result: Gio.AsyncResult): Album[];

    get_email(): string;

    get_name(): string;

    static get_me(authorizer: Authorizer): User;

    static get_me_async(
        authorizer: Authorizer,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<User> | null
    ): void;

    static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User;
}

export class AlbumPrivate {
    static $gtype: GObject.GType<AlbumPrivate>;

    constructor(copy: AlbumPrivate);
}

export class GoaAuthorizerPrivate {
    static $gtype: GObject.GType<GoaAuthorizerPrivate>;

    constructor(copy: GoaAuthorizerPrivate);
}

export class NodePrivate {
    static $gtype: GObject.GType<NodePrivate>;

    constructor(copy: NodePrivate);
}

export class PhotoImage {
    static $gtype: GObject.GType<PhotoImage>;

    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
            source?: string;
        }>
    );

    constructor(copy: PhotoImage);

    // Fields
    width: number;
    height: number;
    source: string;
}

export class PhotoPrivate {
    static $gtype: GObject.GType<PhotoPrivate>;

    constructor(copy: PhotoPrivate);
}

export class SimpleAuthorizerPrivate {
    static $gtype: GObject.GType<SimpleAuthorizerPrivate>;

    constructor(copy: SimpleAuthorizerPrivate);
}

export class UserPrivate {
    static $gtype: GObject.GType<UserPrivate>;

    constructor(copy: UserPrivate);
}

export interface AuthorizerNamespace {
    $gtype: GObject.GType<Authorizer>;
    prototype: AuthorizerPrototype;
}

export type Authorizer = AuthorizerPrototype;

export interface AuthorizerPrototype extends GObject.Object {
    // Members

    process_call(call: Rest.ProxyCall): void;

    process_message(message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_process_call(call: Rest.ProxyCall): void;

    vfunc_process_message(message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
}

export const Authorizer: AuthorizerNamespace;

export interface ConnectableNamespace {
    $gtype: GObject.GType<Connectable>;
    prototype: ConnectablePrototype;
}

export type Connectable = ConnectablePrototype;

export interface ConnectablePrototype extends Node {
    // Members

    default_parse_connected_data(payload: string): Node[];

    get_connection_path(node_type: GObject.GType): string;

    get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

    is_connectable_to(node_type: GObject.GType): boolean;

    parse_connected_data(payload: string): Node[];

    vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

    vfunc_parse_connected_data(payload: string): Node[];
}

export const Connectable: ConnectableNamespace;
