/**
 * Avahi 0.6
 *
 * Generated from 0.6
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as AvahiCore from './avahicore';
import * as GObject from './gobject';
import * as GLib from './glib';

export function error_quark(): GLib.Quark;

export namespace BrowserEvent {
    export const $gtype: GObject.GType<BrowserEvent>;
}

export enum BrowserEvent {
    GA_BROWSER_NEW = 0,
    GA_BROWSER_REMOVE = 1,
    GA_BROWSER_CACHE_EXHAUSTED = 2,
    GA_BROWSER_ALL_FOR_NOW = 3,
    GA_BROWSER_FAILURE = 4,
}

export namespace ClientFlags {
    export const $gtype: GObject.GType<ClientFlags>;
}

export enum ClientFlags {
    GA_CLIENT_FLAG_NO_FLAGS = 0,
    GA_CLIENT_FLAG_IGNORE_USER_CONFIG = 1,
    GA_CLIENT_FLAG_NO_FAIL = 2,
}

export namespace ClientState {
    export const $gtype: GObject.GType<ClientState>;
}

export enum ClientState {
    GA_CLIENT_STATE_NOT_STARTED = -1,
    GA_CLIENT_STATE_S_REGISTERING = 1,
    GA_CLIENT_STATE_S_RUNNING = 2,
    GA_CLIENT_STATE_S_COLLISION = 3,
    GA_CLIENT_STATE_FAILURE = 100,
    GA_CLIENT_STATE_CONNECTING = 101,
}

export namespace EntryGroupState {
    export const $gtype: GObject.GType<EntryGroupState>;
}

export enum EntryGroupState {
    GA_ENTRY_GROUP_STATE_UNCOMMITED = 0,
    GA_ENTRY_GROUP_STATE_REGISTERING = 1,
    GA_ENTRY_GROUP_STATE_ESTABLISHED = 2,
    GA_ENTRY_GROUP_STATE_COLLISTION = 3,
    GA_ENTRY_GROUP_STATE_FAILURE = 4,
}

export namespace LookupFlags {
    export const $gtype: GObject.GType<LookupFlags>;
}

export enum LookupFlags {
    GA_LOOKUP_NO_FLAGS = 0,
    GA_LOOKUP_USE_WIDE_AREA = 1,
    GA_LOOKUP_USE_MULTICAST = 2,
    GA_LOOKUP_NO_TXT = 4,
    GA_LOOKUP_NO_ADDRESS = 8,
}

export namespace LookupResultFlags {
    export const $gtype: GObject.GType<LookupResultFlags>;
}

export enum LookupResultFlags {
    GA_LOOKUP_RESULT_CACHED = 1,
    GA_LOOKUP_RESULT_WIDE_AREA = 2,
    GA_LOOKUP_RESULT_MULTICAST = 4,
    GA_LOOKUP_RESULT_LOCAL = 8,
    GA_LOOKUP_RESULT_OUR_OWN = 16,
    GA_LOOKUP_RESULT_STATIC = 32,
}

export namespace Protocol {
    export const $gtype: GObject.GType<Protocol>;
}

export enum Protocol {
    GA_PROTOCOL_INET = 0,
    GA_PROTOCOL_INET6 = 1,
    GA_PROTOCOL_UNSPEC = -1,
}

export namespace ResolverEvent {
    export const $gtype: GObject.GType<ResolverEvent>;
}

export enum ResolverEvent {
    GA_RESOLVER_FOUND = 0,
    GA_RESOLVER_FAILURE = 1,
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        flags: ClientFlags;
        state: ClientState;
    }
}

export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: ClientFlags;
    state: ClientState;

    // Fields
    avahi_client: AvahiCore.Client;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'state-changed', callback: (_source: this, object: ClientState) => void): number;

    connect_after(signal: 'state-changed', callback: (_source: this, object: ClientState) => void): number;

    emit(signal: 'state-changed', object: ClientState): void;

    // Constructors

    static ['new'](flags: ClientFlags): Client;

    // Members

    start(): boolean;

    start_in_context(context: GLib.MainContext): boolean;
}

export namespace EntryGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        state: EntryGroupState;
    }
}

export class EntryGroup extends GObject.Object {
    static $gtype: GObject.GType<EntryGroup>;

    constructor(properties?: Partial<EntryGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    state: EntryGroupState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'state-changed', callback: (_source: this, object: EntryGroupState) => void): number;

    connect_after(signal: 'state-changed', callback: (_source: this, object: EntryGroupState) => void): number;

    emit(signal: 'state-changed', object: EntryGroupState): void;

    // Constructors

    static ['new'](): EntryGroup;

    // Members

    add_record(
        flags: AvahiCore.PublishFlags,
        name: string,
        type: number,
        ttl: number,
        rdata: any | null,
        size: number
    ): boolean;

    add_record_full(
        _interface: AvahiCore.IfIndex,
        protocol: AvahiCore.Protocol,
        flags: AvahiCore.PublishFlags,
        name: string,
        clazz: number,
        type: number,
        ttl: number,
        rdata: any | null,
        size: number
    ): boolean;

    attach(client: Client): boolean;

    commit(): boolean;

    reset(): boolean;
}

export namespace RecordBrowser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        class: number;
        flags: LookupFlags;
        interface: number;
        name: string;
        protocol: Protocol;
        type: number;
    }
}

export class RecordBrowser extends GObject.Object {
    static $gtype: GObject.GType<RecordBrowser>;

    constructor(properties?: Partial<RecordBrowser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RecordBrowser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    'class': number;
    flags: LookupFlags;
    'interface': number;
    name: string;
    protocol: Protocol;
    type: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'all-for-now', callback: (_source: this) => void): number;

    connect_after(signal: 'all-for-now', callback: (_source: this) => void): number;

    emit(signal: 'all-for-now'): void;

    connect(signal: 'cache-exhausted', callback: (_source: this) => void): number;

    connect_after(signal: 'cache-exhausted', callback: (_source: this) => void): number;

    emit(signal: 'cache-exhausted'): void;

    connect(signal: 'failure', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'failure', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'failure', object: any | null): void;

    connect(
        signal: 'new-record',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: number,
            p3: number,
            p4: any | null,
            p5: number,
            p6: LookupResultFlags
        ) => void
    ): number;

    connect_after(
        signal: 'new-record',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: number,
            p3: number,
            p4: any | null,
            p5: number,
            p6: LookupResultFlags
        ) => void
    ): number;

    emit(
        signal: 'new-record',
        object: number,
        p0: Protocol,
        p1: string,
        p2: number,
        p3: number,
        p4: any | null,
        p5: number,
        p6: LookupResultFlags
    ): void;

    connect(
        signal: 'removed-record',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: number,
            p3: number,
            p4: any | null,
            p5: number,
            p6: LookupResultFlags
        ) => void
    ): number;

    connect_after(
        signal: 'removed-record',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: number,
            p3: number,
            p4: any | null,
            p5: number,
            p6: LookupResultFlags
        ) => void
    ): number;

    emit(
        signal: 'removed-record',
        object: number,
        p0: Protocol,
        p1: string,
        p2: number,
        p3: number,
        p4: any | null,
        p5: number,
        p6: LookupResultFlags
    ): void;

    // Constructors

    static ['new'](name: string, type: number): RecordBrowser;

    static new_full(
        _interface: AvahiCore.IfIndex,
        protocol: AvahiCore.Protocol,
        name: string,
        clazz: number,
        type: number,
        flags: LookupFlags
    ): RecordBrowser;

    // Members

    attach(client: Client): boolean;
}

export namespace ServiceBrowser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        domain: string;
        flags: LookupFlags;
        interface: number;
        protocol: Protocol;
        type: string;
    }
}

export class ServiceBrowser extends GObject.Object {
    static $gtype: GObject.GType<ServiceBrowser>;

    constructor(properties?: Partial<ServiceBrowser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServiceBrowser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    domain: string;
    flags: LookupFlags;
    'interface': number;
    protocol: Protocol;
    type: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'all-for-now', callback: (_source: this) => void): number;

    connect_after(signal: 'all-for-now', callback: (_source: this) => void): number;

    emit(signal: 'all-for-now'): void;

    connect(signal: 'cache-exhausted', callback: (_source: this) => void): number;

    connect_after(signal: 'cache-exhausted', callback: (_source: this) => void): number;

    emit(signal: 'cache-exhausted'): void;

    connect(signal: 'failure', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'failure', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'failure', object: any | null): void;

    connect(
        signal: 'new-service',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: LookupResultFlags
        ) => void
    ): number;

    connect_after(
        signal: 'new-service',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: LookupResultFlags
        ) => void
    ): number;

    emit(
        signal: 'new-service',
        object: number,
        p0: Protocol,
        p1: string,
        p2: string,
        p3: string,
        p4: LookupResultFlags
    ): void;

    connect(
        signal: 'removed-service',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: LookupResultFlags
        ) => void
    ): number;

    connect_after(
        signal: 'removed-service',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: LookupResultFlags
        ) => void
    ): number;

    emit(
        signal: 'removed-service',
        object: number,
        p0: Protocol,
        p1: string,
        p2: string,
        p3: string,
        p4: LookupResultFlags
    ): void;

    // Constructors

    static ['new'](type: string): ServiceBrowser;

    static new_full(
        _interface: AvahiCore.IfIndex,
        protocol: AvahiCore.Protocol,
        type: string,
        domain: string,
        flags: LookupFlags
    ): ServiceBrowser;

    // Members

    attach(client: Client): boolean;
}

export namespace ServiceResolver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        aprotocol: Protocol;
        domain: string;
        flags: LookupFlags;
        interface: number;
        name: string;
        protocol: Protocol;
        type: string;
    }
}

export class ServiceResolver extends GObject.Object {
    static $gtype: GObject.GType<ServiceResolver>;

    constructor(properties?: Partial<ServiceResolver.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServiceResolver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    aprotocol: Protocol;
    domain: string;
    flags: LookupFlags;
    'interface': number;
    name: string;
    protocol: Protocol;
    type: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'failure', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'failure', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'failure', object: any | null): void;

    connect(
        signal: 'found',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: string,
            p5: any | null,
            p6: number,
            p7: any | null,
            p8: LookupResultFlags
        ) => void
    ): number;

    connect_after(
        signal: 'found',
        callback: (
            _source: this,
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: string,
            p5: any | null,
            p6: number,
            p7: any | null,
            p8: LookupResultFlags
        ) => void
    ): number;

    emit(
        signal: 'found',
        object: number,
        p0: Protocol,
        p1: string,
        p2: string,
        p3: string,
        p4: string,
        p5: any | null,
        p6: number,
        p7: any | null,
        p8: LookupResultFlags
    ): void;

    // Constructors

    static ['new'](
        _interface: AvahiCore.IfIndex,
        protocol: AvahiCore.Protocol,
        name: string,
        type: string,
        domain: string,
        address_protocol: AvahiCore.Protocol,
        flags: LookupFlags
    ): ServiceResolver;

    // Members

    attach(client: Client): boolean;

    get_address(address: AvahiCore.Address, port: number): boolean;
}

export class EntryGroupService {
    static $gtype: GObject.GType<EntryGroupService>;

    constructor(copy: EntryGroupService);

    // Fields
    'interface': AvahiCore.IfIndex;
    protocol: AvahiCore.Protocol;
    flags: AvahiCore.PublishFlags;
    name: string;
    type: string;
    domain: string;
    host: string;
    port: number;

    // Members
    freeze(): void;

    remove_key(key: string): boolean;

    set(key: string, value: string): boolean;

    set_arbitrary(key: string, value: number, size: number): boolean;

    thaw(): boolean;
}
