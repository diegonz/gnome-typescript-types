/**
 * Jsonrpc 1.0
 *
 * Generated from 3.38.0
 */

import * as Gio from './gio';
import * as Json from './json';
import * as GObject from './gobject';
import * as GLib from './glib';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;
export type ServerHandler = (
    self: Server,
    client: Client,
    method: string,
    id: GLib.Variant,
    params: GLib.Variant
) => void;

export namespace ClientError {
    export const $gtype: GObject.GType<ClientError>;
}

export enum ClientError {
    PARSE_ERROR = -32700,
    INVALID_REQUEST = -32600,
    METHOD_NOT_FOUND = -32601,
    INVALID_PARAMS = -32602,
    INTERNAL_ERROR = -32603,
}

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        io_stream: Gio.IOStream;
        ioStream: Gio.IOStream;
        use_gvariant: boolean;
        useGvariant: boolean;
    }
}

export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    io_stream: Gio.IOStream;
    ioStream: Gio.IOStream;
    use_gvariant: boolean;
    useGvariant: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'failed', callback: (_source: this) => void): number;

    connect_after(signal: 'failed', callback: (_source: this) => void): number;

    emit(signal: 'failed'): void;

    connect(
        signal: 'handle-call',
        callback: (_source: this, method: string, id: GLib.Variant, params: GLib.Variant | null) => boolean
    ): number;

    connect_after(
        signal: 'handle-call',
        callback: (_source: this, method: string, id: GLib.Variant, params: GLib.Variant | null) => boolean
    ): number;

    emit(signal: 'handle-call', method: string, id: GLib.Variant, params: GLib.Variant | null): void;

    connect(
        signal: 'notification',
        callback: (_source: this, method: string, params: GLib.Variant | null) => void
    ): number;

    connect_after(
        signal: 'notification',
        callback: (_source: this, method: string, params: GLib.Variant | null) => void
    ): number;

    emit(signal: 'notification', method: string, params: GLib.Variant | null): void;

    // Constructors

    static ['new'](io_stream: Gio.IOStream): Client;

    // Members

    call(
        method: string,
        params?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, GLib.Variant | null];

    call_async(
        method: string,
        params?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];

    call_with_id_async(
        method: string,
        params?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): GLib.Variant | null;

    close(cancellable?: Gio.Cancellable | null): boolean;

    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    close_finish(result: Gio.AsyncResult): boolean;

    get_use_gvariant(): boolean;

    reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;

    reply_async(
        id: GLib.Variant,
        result: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reply_error_async(
        id: GLib.Variant,
        code: number,
        message?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reply_error_finish(result: Gio.AsyncResult): boolean;

    reply_finish(result: Gio.AsyncResult): boolean;

    send_notification(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;

    send_notification_async(
        method: string,
        params?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_notification_finish(result: Gio.AsyncResult): boolean;

    set_use_gvariant(use_gvariant: boolean): void;

    start_listening(): void;

    vfunc_failed(): void;

    vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean;

    vfunc_notification(method_name: string, params: GLib.Variant): void;

    static error_quark(): GLib.Quark;
}

export namespace InputStream {
    export interface ConstructorProperties extends Gio.DataInputStream.ConstructorProperties {
        [key: string]: any;
    }
}

export class InputStream extends Gio.DataInputStream implements Gio.Seekable {
    static $gtype: GObject.GType<InputStream>;

    constructor(properties?: Partial<InputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputStream.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](base_stream: Gio.InputStream): InputStream;

    // Members

    read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean;

    read_message_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export namespace OutputStream {
    export interface ConstructorProperties extends Gio.DataOutputStream.ConstructorProperties {
        [key: string]: any;

        use_gvariant: boolean;
        useGvariant: boolean;
    }
}

export class OutputStream extends Gio.DataOutputStream implements Gio.Seekable {
    static $gtype: GObject.GType<OutputStream>;

    constructor(properties?: Partial<OutputStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    use_gvariant: boolean;
    useGvariant: boolean;

    // Constructors

    static ['new'](base_stream: Gio.OutputStream): OutputStream;

    // Members

    get_use_gvariant(): boolean;

    set_use_gvariant(use_gvariant: boolean): void;

    write_message(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;

    write_message_async(
        message: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_message_finish(result: Gio.AsyncResult): boolean;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Server {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Server extends GObject.Object {
    static $gtype: GObject.GType<Server>;

    constructor(properties?: Partial<Server.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Server.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'client-accepted', callback: (_source: this, client: Client) => void): number;

    connect_after(signal: 'client-accepted', callback: (_source: this, client: Client) => void): number;

    emit(signal: 'client-accepted', client: Client): void;

    connect(signal: 'client-closed', callback: (_source: this, client: Client) => void): number;

    connect_after(signal: 'client-closed', callback: (_source: this, client: Client) => void): number;

    emit(signal: 'client-closed', client: Client): void;

    connect(
        signal: 'handle-call',
        callback: (_source: this, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    ): number;

    connect_after(
        signal: 'handle-call',
        callback: (_source: this, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    ): number;

    emit(signal: 'handle-call', client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void;

    connect(
        signal: 'notification',
        callback: (_source: this, client: Client, method: string, id: GLib.Variant) => void
    ): number;

    connect_after(
        signal: 'notification',
        callback: (_source: this, client: Client, method: string, id: GLib.Variant) => void
    ): number;

    emit(signal: 'notification', client: Client, method: string, id: GLib.Variant): void;

    // Constructors

    static ['new'](): Server;

    // Members

    accept_io_stream(io_stream: Gio.IOStream): void;

    add_handler(method: string, handler: ServerHandler): number;

    foreach(foreach_func: GLib.Func): void;

    remove_handler(handler_id: number): void;

    vfunc_client_accepted(client: Client): void;

    vfunc_client_closed(client: Client): void;

    vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean;

    vfunc_notification(client: Client, method: string, params: GLib.Variant): void;
}

export class MessageAny {
    static $gtype: GObject.GType<MessageAny>;

    constructor(copy: MessageAny);

    // Fields
    magic: MessageMagic;
}

export class MessageGetBoolean {
    static $gtype: GObject.GType<MessageGetBoolean>;

    constructor(copy: MessageGetBoolean);

    // Fields
    magic: MessageMagic;
    valptr: boolean;
}

export class MessageGetDict {
    static $gtype: GObject.GType<MessageGetDict>;

    constructor(copy: MessageGetDict);

    // Fields
    magic: MessageMagic;
    dictptr: GLib.VariantDict;
}

export class MessageGetDouble {
    static $gtype: GObject.GType<MessageGetDouble>;

    constructor(copy: MessageGetDouble);

    // Fields
    magic: MessageMagic;
    valptr: number;
}

export class MessageGetInt32 {
    static $gtype: GObject.GType<MessageGetInt32>;

    constructor(copy: MessageGetInt32);

    // Fields
    magic: MessageMagic;
    valptr: number;
}

export class MessageGetInt64 {
    static $gtype: GObject.GType<MessageGetInt64>;

    constructor(copy: MessageGetInt64);

    // Fields
    magic: MessageMagic;
    valptr: number;
}

export class MessageGetIter {
    static $gtype: GObject.GType<MessageGetIter>;

    constructor(copy: MessageGetIter);

    // Fields
    magic: MessageMagic;
}

export class MessageGetString {
    static $gtype: GObject.GType<MessageGetString>;

    constructor(copy: MessageGetString);

    // Fields
    magic: MessageMagic;
    valptr: string;
}

export class MessageGetStrv {
    static $gtype: GObject.GType<MessageGetStrv>;

    constructor(copy: MessageGetStrv);

    // Fields
    magic: MessageMagic;
    valptr: string;
}

export class MessageGetVariant {
    static $gtype: GObject.GType<MessageGetVariant>;

    constructor(copy: MessageGetVariant);

    // Fields
    magic: MessageMagic;
    variantptr: GLib.Variant;
}

export class MessageMagic {
    static $gtype: GObject.GType<MessageMagic>;

    constructor(copy: MessageMagic);

    // Fields
    bytes: number[];
}

export class MessagePutBoolean {
    static $gtype: GObject.GType<MessagePutBoolean>;

    constructor(copy: MessagePutBoolean);

    // Fields
    magic: MessageMagic;
    val: boolean;
}

export class MessagePutDouble {
    static $gtype: GObject.GType<MessagePutDouble>;

    constructor(copy: MessagePutDouble);

    // Fields
    magic: MessageMagic;
    val: number;
}

export class MessagePutInt32 {
    static $gtype: GObject.GType<MessagePutInt32>;

    constructor(copy: MessagePutInt32);

    // Fields
    magic: MessageMagic;
    val: number;
}

export class MessagePutInt64 {
    static $gtype: GObject.GType<MessagePutInt64>;

    constructor(copy: MessagePutInt64);

    // Fields
    magic: MessageMagic;
    val: number;
}

export class MessagePutString {
    static $gtype: GObject.GType<MessagePutString>;

    constructor(copy: MessagePutString);

    // Fields
    magic: MessageMagic;
    val: string;
}

export class MessagePutStrv {
    static $gtype: GObject.GType<MessagePutStrv>;

    constructor(copy: MessagePutStrv);

    // Fields
    magic: MessageMagic;
    val: string;
}
