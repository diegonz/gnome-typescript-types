/**
 * GSSDP 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Soup from './soup';
import * as GLib from './glib';

export const ALL_RESOURCES: string;

export function error_quark(): GLib.Quark;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static NO_IP_ADDRESS: number;
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace UDAVersion {
    export const $gtype: GObject.GType<UDAVersion>;
}

export enum UDAVersion {
    VERSION_UNSPECIFIED = 0,
    VERSION_1_0 = 1,
    VERSION_1_1 = 2,
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        active: boolean;
        address_family: Gio.SocketFamily;
        addressFamily: Gio.SocketFamily;
        boot_id: number;
        bootId: number;
        config_id: number;
        configId: number;
        host_ip: string;
        hostIp: string;
        host_mask: Gio.InetAddressMask;
        hostMask: Gio.InetAddressMask;
        interface: string;
        msearch_port: number;
        msearchPort: number;
        network: string;
        server_id: string;
        serverId: string;
        socket_ttl: number;
        socketTtl: number;
        uda_version: UDAVersion;
        udaVersion: UDAVersion;
    }
}

export class Client extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active: boolean;
    address_family: Gio.SocketFamily;
    addressFamily: Gio.SocketFamily;
    boot_id: number;
    bootId: number;
    config_id: number;
    configId: number;
    host_ip: string;
    hostIp: string;
    host_mask: Gio.InetAddressMask;
    hostMask: Gio.InetAddressMask;
    'interface': string;
    msearch_port: number;
    msearchPort: number;
    network: string;
    server_id: string;
    serverId: string;
    socket_ttl: number;
    socketTtl: number;
    uda_version: UDAVersion;
    udaVersion: UDAVersion;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'message-received',
        callback: (
            _source: this,
            from_ip: string,
            from_port: number,
            type: number,
            headers: Soup.MessageHeaders
        ) => void
    ): number;

    connect_after(
        signal: 'message-received',
        callback: (
            _source: this,
            from_ip: string,
            from_port: number,
            type: number,
            headers: Soup.MessageHeaders
        ) => void
    ): number;

    emit(
        signal: 'message-received',
        from_ip: string,
        from_port: number,
        type: number,
        headers: Soup.MessageHeaders
    ): void;

    // Constructors

    static ['new'](iface?: string | null): Client;

    static new_with_port(iface: string | null, msearch_port: number): Client;

    // Members

    add_cache_entry(ip_address: string, user_agent: string): void;

    append_header(name: string, value: string): void;

    clear_headers(): void;

    get_active(): boolean;

    get_address(): Gio.InetAddress;

    get_address_mask(): Gio.InetAddressMask;

    get_family(): Gio.SocketFamily;

    get_host_ip(): string;

    get_index(): number;

    get_interface(): string;

    get_network(): string;

    get_server_id(): string;

    get_uda_version(): UDAVersion;

    guess_user_agent(ip_address: string): string;

    remove_header(name: string): void;

    set_boot_id(boot_id: number): void;

    set_config_id(config_id: number): void;

    set_network(network: string): void;

    set_server_id(server_id: string): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace ResourceBrowser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        active: boolean;
        client: Client;
        mx: number;
        target: string;
    }
}

export class ResourceBrowser extends GObject.Object {
    static $gtype: GObject.GType<ResourceBrowser>;

    constructor(properties?: Partial<ResourceBrowser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ResourceBrowser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active: boolean;
    client: Client;
    mx: number;
    target: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'resource-available', callback: (_source: this, usn: string, locations: string[]) => void): number;

    connect_after(
        signal: 'resource-available',
        callback: (_source: this, usn: string, locations: string[]) => void
    ): number;

    emit(signal: 'resource-available', usn: string, locations: string[]): void;

    connect(signal: 'resource-unavailable', callback: (_source: this, usn: string) => void): number;

    connect_after(signal: 'resource-unavailable', callback: (_source: this, usn: string) => void): number;

    emit(signal: 'resource-unavailable', usn: string): void;

    connect(
        signal: 'resource-update',
        callback: (_source: this, usn: string, boot_id: number, next_boot_id: number) => void
    ): number;

    connect_after(
        signal: 'resource-update',
        callback: (_source: this, usn: string, boot_id: number, next_boot_id: number) => void
    ): number;

    emit(signal: 'resource-update', usn: string, boot_id: number, next_boot_id: number): void;

    // Constructors

    static ['new'](client: Client, target: string): ResourceBrowser;

    // Members

    get_active(): boolean;

    get_client(): Client;

    get_mx(): number;

    get_target(): string;

    rescan(): boolean;

    set_active(active: boolean): void;

    set_mx(mx: number): void;

    set_target(target: string): void;

    vfunc_resource_unavailable(usn: string): void;

    vfunc_resource_update(usn: string, boot_id: number, next_boot_id: number): void;
}

export namespace ResourceGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        available: boolean;
        client: Client;
        max_age: number;
        maxAge: number;
        message_delay: number;
        messageDelay: number;
    }
}

export class ResourceGroup extends GObject.Object {
    static $gtype: GObject.GType<ResourceGroup>;

    constructor(properties?: Partial<ResourceGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ResourceGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    available: boolean;
    client: Client;
    max_age: number;
    maxAge: number;
    message_delay: number;
    messageDelay: number;

    // Constructors

    static ['new'](client: Client): ResourceGroup;

    // Members

    add_resource(target: string, usn: string, locations: string[]): number;

    add_resource_simple(target: string, usn: string, location: string): number;

    get_available(): boolean;

    get_client(): Client;

    get_max_age(): number;

    get_message_delay(): number;

    remove_resource(resource_id: number): void;

    set_available(available: boolean): void;

    set_max_age(max_age: number): void;

    set_message_delay(message_delay: number): void;

    update(new_boot_id: number): void;
}
