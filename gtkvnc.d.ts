/**
 * GtkVnc 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GVnc from './gvnc';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as cairo from './cairo';
import * as Gio from './gio';
import * as GLib from './glib';
import * as GdkPixbuf from './gdkpixbuf';

export namespace DisplayCredential {
    export const $gtype: GObject.GType<DisplayCredential>;
}

export enum DisplayCredential {
    PASSWORD = 0,
    USERNAME = 1,
    CLIENTNAME = 2,
}

export namespace DisplayDepthColor {
    export const $gtype: GObject.GType<DisplayDepthColor>;
}

export enum DisplayDepthColor {
    DEFAULT = 0,
    FULL = 1,
    MEDIUM = 2,
    LOW = 3,
    ULTRA_LOW = 4,
}

export namespace DisplayKeyEvent {
    export const $gtype: GObject.GType<DisplayKeyEvent>;
}

export enum DisplayKeyEvent {
    PRESS = 1,
    RELEASE = 2,
    CLICK = 3,
}

export namespace CairoFramebuffer {
    export interface ConstructorProperties extends GVnc.BaseFramebuffer.ConstructorProperties {
        [key: string]: any;

        surface: any;
    }
}

export class CairoFramebuffer extends GVnc.BaseFramebuffer implements GVnc.Framebuffer {
    static $gtype: GObject.GType<CairoFramebuffer>;

    constructor(properties?: Partial<CairoFramebuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CairoFramebuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    surface: any;

    // Fields
    priv: CairoFramebufferPrivate | any;

    // Constructors

    static ['new'](width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer;
    static ['new'](...args: never[]): never;

    // Members

    get_surface(): cairo.Surface;

    // Implemented Members

    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

    fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

    get_buffer(): Uint8Array;

    get_height(): number;

    get_local_format(): GVnc.PixelFormat;

    get_remote_format(): GVnc.PixelFormat;

    get_rowstride(): number;

    get_width(): number;

    perfect_format_match(): boolean;

    rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;

    set_color_map(map: GVnc.ColorMap): void;

    set_pixel_at(src: Uint8Array | string, x: number, y: number): void;

    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

    vfunc_fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

    vfunc_get_buffer(): number;

    vfunc_get_height(): number;

    vfunc_get_local_format(): GVnc.PixelFormat;

    vfunc_get_remote_format(): GVnc.PixelFormat;

    vfunc_get_rowstride(): number;

    vfunc_get_width(): number;

    vfunc_perfect_format_match(): boolean;

    vfunc_rgb24_blt(
        src: Uint8Array | string,
        rowstride: number,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;

    vfunc_set_color_map(map: GVnc.ColorMap): void;

    vfunc_set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
}

export namespace Display {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;

        connection: GVnc.Connection;
        depth: DisplayDepthColor;
        force_size: boolean;
        forceSize: boolean;
        grab_keyboard: boolean;
        grabKeyboard: boolean;
        grab_keys: GrabSequence;
        grabKeys: GrabSequence;
        grab_pointer: boolean;
        grabPointer: boolean;
        height: number;
        local_pointer: boolean;
        localPointer: boolean;
        lossy_encoding: boolean;
        lossyEncoding: boolean;
        name: string;
        read_only: boolean;
        readOnly: boolean;
        scaling: boolean;
        shared_flag: boolean;
        sharedFlag: boolean;
        smoothing: boolean;
        width: number;
    }
}

export class Display extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Display>;

    constructor(properties?: Partial<Display.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Display.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: GVnc.Connection;
    depth: DisplayDepthColor;
    force_size: boolean;
    forceSize: boolean;
    grab_keyboard: boolean;
    grabKeyboard: boolean;
    grab_keys: GrabSequence;
    grabKeys: GrabSequence;
    grab_pointer: boolean;
    grabPointer: boolean;
    height: number;
    local_pointer: boolean;
    localPointer: boolean;
    lossy_encoding: boolean;
    lossyEncoding: boolean;
    name: string;
    read_only: boolean;
    readOnly: boolean;
    scaling: boolean;
    shared_flag: boolean;
    sharedFlag: boolean;
    smoothing: boolean;
    width: number;

    // Fields
    priv: DisplayPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'vnc-auth-credential', callback: (_source: this, object: GObject.ValueArray) => void): number;

    connect_after(signal: 'vnc-auth-credential', callback: (_source: this, object: GObject.ValueArray) => void): number;

    emit(signal: 'vnc-auth-credential', object: GObject.ValueArray): void;

    connect(signal: 'vnc-auth-failure', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'vnc-auth-failure', callback: (_source: this, object: string) => void): number;

    emit(signal: 'vnc-auth-failure', object: string): void;

    connect(signal: 'vnc-auth-unsupported', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'vnc-auth-unsupported', callback: (_source: this, object: number) => void): number;

    emit(signal: 'vnc-auth-unsupported', object: number): void;

    connect(signal: 'vnc-bell', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-bell', callback: (_source: this) => void): number;

    emit(signal: 'vnc-bell'): void;

    connect(signal: 'vnc-connected', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-connected', callback: (_source: this) => void): number;

    emit(signal: 'vnc-connected'): void;

    connect(signal: 'vnc-desktop-resize', callback: (_source: this, object: number, p0: number) => void): number;

    connect_after(signal: 'vnc-desktop-resize', callback: (_source: this, object: number, p0: number) => void): number;

    emit(signal: 'vnc-desktop-resize', object: number, p0: number): void;

    connect(signal: 'vnc-disconnected', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-disconnected', callback: (_source: this) => void): number;

    emit(signal: 'vnc-disconnected'): void;

    connect(signal: 'vnc-error', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'vnc-error', callback: (_source: this, object: string) => void): number;

    emit(signal: 'vnc-error', object: string): void;

    connect(signal: 'vnc-initialized', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-initialized', callback: (_source: this) => void): number;

    emit(signal: 'vnc-initialized'): void;

    connect(signal: 'vnc-keyboard-grab', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-keyboard-grab', callback: (_source: this) => void): number;

    emit(signal: 'vnc-keyboard-grab'): void;

    connect(signal: 'vnc-keyboard-ungrab', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-keyboard-ungrab', callback: (_source: this) => void): number;

    emit(signal: 'vnc-keyboard-ungrab'): void;

    connect(signal: 'vnc-pointer-grab', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-pointer-grab', callback: (_source: this) => void): number;

    emit(signal: 'vnc-pointer-grab'): void;

    connect(signal: 'vnc-pointer-ungrab', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-pointer-ungrab', callback: (_source: this) => void): number;

    emit(signal: 'vnc-pointer-ungrab'): void;

    connect(signal: 'vnc-server-cut-text', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'vnc-server-cut-text', callback: (_source: this, object: string) => void): number;

    emit(signal: 'vnc-server-cut-text', object: string): void;

    // Constructors

    static ['new'](): Display;

    // Members

    client_cut_text(text: string): void;

    close(): void;

    force_grab(enable: boolean): void;

    get_connection(): GVnc.Connection;

    get_depth(): DisplayDepthColor;

    get_force_size(): boolean;

    get_grab_keys(): GrabSequence;

    get_height(): number;

    get_keyboard_grab(): boolean;

    get_lossy_encoding(): boolean;

    get_name(): string;

    get_pixbuf(): GdkPixbuf.Pixbuf;

    get_pointer_grab(): boolean;

    get_pointer_local(): boolean;

    get_read_only(): boolean;

    get_scaling(): boolean;

    get_shared_flag(): boolean;

    get_smoothing(): boolean;

    get_width(): number;

    is_open(): boolean;

    is_pointer_absolute(): boolean;

    open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean;

    open_fd(fd: number): boolean;

    open_fd_with_hostname(fd: number, hostname?: string | null): boolean;

    open_host(host: string, port: string): boolean;

    request_update(): boolean;

    send_keys(keyvals: number[]): void;

    send_keys_ex(keyvals: number[], kind: DisplayKeyEvent): void;

    send_pointer(x: number, y: number, button_mask: number): void;

    set_credential(type: number, data: string): boolean;

    set_depth(depth: DisplayDepthColor): void;

    set_force_size(enable: boolean): void;

    set_grab_keys(seq: GrabSequence): void;

    set_keyboard_grab(enable: boolean): void;

    set_lossy_encoding(enable: boolean): void;

    set_pointer_grab(enable: boolean): void;

    set_pointer_local(enable: boolean): void;

    set_read_only(enable: boolean): void;

    set_scaling(enable: boolean): boolean;

    set_shared_flag(shared: boolean): void;

    set_smoothing(enable: boolean): void;

    vfunc_vnc_auth_credential(credList: GObject.ValueArray): void;

    vfunc_vnc_connected(): void;

    vfunc_vnc_disconnected(): void;

    vfunc_vnc_initialized(): void;

    static get_option_entries(): GLib.OptionEntry[];

    static get_option_group(): GLib.OptionGroup;

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

export class CairoFramebufferPrivate {
    static $gtype: GObject.GType<CairoFramebufferPrivate>;

    constructor(copy: CairoFramebufferPrivate);
}

export class DisplayPrivate {
    static $gtype: GObject.GType<DisplayPrivate>;

    constructor(copy: DisplayPrivate);
}

export class GrabSequence {
    static $gtype: GObject.GType<GrabSequence>;

    constructor(keysyms: number[]);
    constructor(
        properties?: Partial<{
            nkeysyms?: number;
            keysyms?: number;
        }>
    );

    constructor(copy: GrabSequence);

    // Fields
    nkeysyms: number;
    keysyms: number;

    // Constructors
    static ['new'](keysyms: number[]): GrabSequence;

    static new_from_string(str: string): GrabSequence;

    // Members
    as_string(): string;

    copy(): GrabSequence;

    free(): void;

    get_nth(n: number): number;
}
