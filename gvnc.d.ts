/**
 * GVnc 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const LEDSTATE_CAPS_LOCK: number;
export const LEDSTATE_NUM_LOCK: number;
export const LEDSTATE_SCROLL_LOCK: number;
export const PADDING: number;
export const PADDING_LARGE: number;

export function util_check_version(major: number, minor: number, micro: number): boolean;

export function util_get_debug(): boolean;

export function util_get_version(): number;

export function util_get_version_string(): string;

export function util_set_debug(enabled: boolean): void;

export namespace AudioFormatType {
    export const $gtype: GObject.GType<AudioFormatType>;
}

export enum AudioFormatType {
    U8 = 0,
    S8 = 1,
    U16 = 2,
    S16 = 3,
    U32 = 4,
    S32 = 5,
}

export namespace ConnectionAuth {
    export const $gtype: GObject.GType<ConnectionAuth>;
}

export enum ConnectionAuth {
    INVALID = 0,
    NONE = 1,
    VNC = 2,
    RA2 = 5,
    RA2NE = 6,
    TIGHT = 16,
    ULTRA = 17,
    TLS = 18,
    VENCRYPT = 19,
    SASL = 20,
    ARD = 30,
    MSLOGONII = 113,
    MSLOGON = 4294967290,
}

export namespace ConnectionAuthVencrypt {
    export const $gtype: GObject.GType<ConnectionAuthVencrypt>;
}

export enum ConnectionAuthVencrypt {
    PLAIN = 256,
    TLSNONE = 257,
    TLSVNC = 258,
    TLSPLAIN = 259,
    X509NONE = 260,
    X509VNC = 261,
    X509PLAIN = 262,
    X509SASL = 263,
    TLSSASL = 264,
}

export namespace ConnectionCredential {
    export const $gtype: GObject.GType<ConnectionCredential>;
}

export enum ConnectionCredential {
    PASSWORD = 0,
    USERNAME = 1,
    CLIENTNAME = 2,
}

export namespace ConnectionEncoding {
    export const $gtype: GObject.GType<ConnectionEncoding>;
}

export enum ConnectionEncoding {
    RAW = 0,
    COPY_RECT = 1,
    RRE = 2,
    CORRE = 4,
    HEXTILE = 5,
    TIGHT = 7,
    ZRLE = 16,
    TIGHT_JPEG0 = -32,
    TIGHT_JPEG1 = -31,
    TIGHT_JPEG2 = -30,
    TIGHT_JPEG3 = -29,
    TIGHT_JPEG4 = -28,
    TIGHT_JPEG5 = -27,
    TIGHT_JPEG6 = -26,
    TIGHT_JPEG7 = -25,
    TIGHT_JPEG8 = -24,
    TIGHT_JPEG9 = -23,
    DESKTOP_RESIZE = -223,
    WMVI = 1464686185,
    CURSOR_POS = -232,
    RICH_CURSOR = -239,
    XCURSOR = -240,
    POINTER_CHANGE = -257,
    EXT_KEY_EVENT = -258,
    AUDIO = -259,
    LED_STATE = -261,
}

export namespace BaseAudio {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class BaseAudio extends GObject.Object implements Audio {
    static $gtype: GObject.GType<BaseAudio>;

    constructor(properties?: Partial<BaseAudio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BaseAudio.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BaseAudioPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'vnc-audio-playback-data', callback: (_source: this, object: AudioSample) => void): number;

    connect_after(signal: 'vnc-audio-playback-data', callback: (_source: this, object: AudioSample) => void): number;

    emit(signal: 'vnc-audio-playback-data', object: AudioSample): void;

    connect(signal: 'vnc-audio-playback-start', callback: (_source: this, object: AudioFormat) => void): number;

    connect_after(signal: 'vnc-audio-playback-start', callback: (_source: this, object: AudioFormat) => void): number;

    emit(signal: 'vnc-audio-playback-start', object: AudioFormat): void;

    connect(signal: 'vnc-audio-playback-stop', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-audio-playback-stop', callback: (_source: this) => void): number;

    emit(signal: 'vnc-audio-playback-stop'): void;

    // Constructors

    static ['new'](): BaseAudio;

    // Members

    vfunc_playback_data(sample: AudioSample): boolean;

    vfunc_playback_start(format: AudioFormat): boolean;

    vfunc_playback_stop(): boolean;

    // Implemented Members

    playback_data(sample: AudioSample): void;

    playback_start(format: AudioFormat): void;

    playback_stop(): void;
}

export namespace BaseFramebuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        buffer: any;
        color_map: ColorMap;
        colorMap: ColorMap;
        height: number;
        local_format: PixelFormat;
        localFormat: PixelFormat;
        remote_format: PixelFormat;
        remoteFormat: PixelFormat;
        rowstride: number;
        width: number;
    }
}

export class BaseFramebuffer extends GObject.Object implements Framebuffer {
    static $gtype: GObject.GType<BaseFramebuffer>;

    constructor(properties?: Partial<BaseFramebuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BaseFramebuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    buffer: any;
    color_map: ColorMap;
    colorMap: ColorMap;
    height: number;
    local_format: PixelFormat;
    localFormat: PixelFormat;
    remote_format: PixelFormat;
    remoteFormat: PixelFormat;
    rowstride: number;
    width: number;

    // Fields
    priv: BaseFramebufferPrivate;

    // Constructors

    static ['new'](
        buffer: Uint8Array | string,
        width: number,
        height: number,
        rowstride: number,
        localFormat: PixelFormat,
        remoteFormat: PixelFormat
    ): BaseFramebuffer;

    // Implemented Members

    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

    fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

    get_buffer(): Uint8Array;

    get_height(): number;

    get_local_format(): PixelFormat;

    get_remote_format(): PixelFormat;

    get_rowstride(): number;

    get_width(): number;

    perfect_format_match(): boolean;

    rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;

    set_color_map(map: ColorMap): void;

    set_pixel_at(src: Uint8Array | string, x: number, y: number): void;

    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

    vfunc_fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

    vfunc_get_buffer(): number;

    vfunc_get_height(): number;

    vfunc_get_local_format(): PixelFormat;

    vfunc_get_remote_format(): PixelFormat;

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

    vfunc_set_color_map(map: ColorMap): void;

    vfunc_set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
}

export namespace Connection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        framebuffer: Framebuffer;
    }
}

export class Connection extends GObject.Object {
    static $gtype: GObject.GType<Connection>;

    constructor(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    framebuffer: Framebuffer;

    // Fields
    priv: ConnectionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'vnc-auth-choose-subtype',
        callback: (_source: this, object: number, p0: GObject.ValueArray) => void
    ): number;

    connect_after(
        signal: 'vnc-auth-choose-subtype',
        callback: (_source: this, object: number, p0: GObject.ValueArray) => void
    ): number;

    emit(signal: 'vnc-auth-choose-subtype', object: number, p0: GObject.ValueArray): void;

    connect(signal: 'vnc-auth-choose-type', callback: (_source: this, object: GObject.ValueArray) => void): number;

    connect_after(
        signal: 'vnc-auth-choose-type',
        callback: (_source: this, object: GObject.ValueArray) => void
    ): number;

    emit(signal: 'vnc-auth-choose-type', object: GObject.ValueArray): void;

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

    connect(signal: 'vnc-cursor-changed', callback: (_source: this, object: Cursor) => void): number;

    connect_after(signal: 'vnc-cursor-changed', callback: (_source: this, object: Cursor) => void): number;

    emit(signal: 'vnc-cursor-changed', object: Cursor): void;

    connect(signal: 'vnc-desktop-resize', callback: (_source: this, object: number, p0: number) => void): number;

    connect_after(signal: 'vnc-desktop-resize', callback: (_source: this, object: number, p0: number) => void): number;

    emit(signal: 'vnc-desktop-resize', object: number, p0: number): void;

    connect(signal: 'vnc-disconnected', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-disconnected', callback: (_source: this) => void): number;

    emit(signal: 'vnc-disconnected'): void;

    connect(signal: 'vnc-error', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'vnc-error', callback: (_source: this, object: string) => void): number;

    emit(signal: 'vnc-error', object: string): void;

    connect(
        signal: 'vnc-framebuffer-update',
        callback: (_source: this, object: number, p0: number, p1: number, p2: number) => void
    ): number;

    connect_after(
        signal: 'vnc-framebuffer-update',
        callback: (_source: this, object: number, p0: number, p1: number, p2: number) => void
    ): number;

    emit(signal: 'vnc-framebuffer-update', object: number, p0: number, p1: number, p2: number): void;

    connect(signal: 'vnc-initialized', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-initialized', callback: (_source: this) => void): number;

    emit(signal: 'vnc-initialized'): void;

    connect(signal: 'vnc-led-state', callback: (_source: this) => void): number;

    connect_after(signal: 'vnc-led-state', callback: (_source: this) => void): number;

    emit(signal: 'vnc-led-state'): void;

    connect(signal: 'vnc-pixel-format-changed', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'vnc-pixel-format-changed', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'vnc-pixel-format-changed', object: any | null): void;

    connect(signal: 'vnc-pointer-mode-changed', callback: (_source: this, object: boolean) => void): number;

    connect_after(signal: 'vnc-pointer-mode-changed', callback: (_source: this, object: boolean) => void): number;

    emit(signal: 'vnc-pointer-mode-changed', object: boolean): void;

    connect(signal: 'vnc-server-cut-text', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'vnc-server-cut-text', callback: (_source: this, object: string) => void): number;

    emit(signal: 'vnc-server-cut-text', object: string): void;

    // Constructors

    static ['new'](): Connection;

    // Members

    audio_disable(): boolean;

    audio_enable(): boolean;

    client_cut_text(data: any | null, length: number): boolean;

    framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean;

    get_abs_pointer(): boolean;

    get_audio_format(): AudioFormat;

    get_cursor(): Cursor;

    get_ext_key_event(): boolean;

    get_height(): number;

    get_ledstate(): number;

    get_name(): string;

    get_pixel_format(): PixelFormat;

    get_shared(): boolean;

    get_width(): number;

    has_error(): boolean;

    is_initialized(): boolean;

    is_open(): boolean;

    key_event(down_flag: boolean, key: number, scancode: number): boolean;

    open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean;

    open_fd(fd: number): boolean;

    open_fd_with_hostname(fd: number, hostname?: string | null): boolean;

    open_host(host: string, port: string): boolean;

    pointer_event(button_mask: number, x: number, y: number): boolean;

    set_audio(audio: Audio): boolean;

    set_audio_format(fmt: AudioFormat): boolean;

    set_auth_subtype(type: number): boolean;

    set_auth_type(type: number): boolean;

    set_credential(type: number, data: string): boolean;

    set_encodings(encoding: number[]): boolean;

    set_framebuffer(fb: Framebuffer): boolean;

    set_pixel_format(fmt: PixelFormat): boolean;

    set_shared(sharedFlag: boolean): boolean;

    shutdown(): void;

    vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void;

    vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void;

    vfunc_vnc_auth_credential(creds: GObject.ValueArray): void;

    vfunc_vnc_auth_failure(reason: string): void;

    vfunc_vnc_auth_unsupported(authType: number): void;

    vfunc_vnc_bell(): void;

    vfunc_vnc_connected(): void;

    vfunc_vnc_cursor_changed(cursor: Cursor): void;

    vfunc_vnc_desktop_resize(width: number, height: number): void;

    vfunc_vnc_disconnected(): void;

    vfunc_vnc_error(message: string): void;

    vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void;

    vfunc_vnc_initialized(): void;

    vfunc_vnc_led_state(): void;

    vfunc_vnc_pixel_format_changed(format: PixelFormat): void;

    vfunc_vnc_pointer_mode_changed(absPointer: boolean): void;

    vfunc_vnc_server_cut_text(text: GLib.String): void;
}

export namespace Cursor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        data: any;
        height: number;
        hotx: number;
        hoty: number;
        width: number;
    }
}

export class Cursor extends GObject.Object {
    static $gtype: GObject.GType<Cursor>;

    constructor(properties?: Partial<Cursor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Cursor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data: any;
    height: number;
    hotx: number;
    hoty: number;
    width: number;

    // Fields
    priv: CursorPrivate;

    // Constructors

    static ['new'](data: Uint8Array | string, hotx: number, hoty: number, width: number, height: number): Cursor;

    // Members

    get_data(): Uint8Array;
    get_data(...args: never[]): never;

    get_height(): number;

    get_hotx(): number;

    get_hoty(): number;

    get_width(): number;
}

export class AudioFormat {
    static $gtype: GObject.GType<AudioFormat>;

    constructor();
    constructor(
        properties?: Partial<{
            format?: number;
            nchannels?: number;
            frequency?: number;
        }>
    );

    constructor(copy: AudioFormat);

    // Fields
    format: number;
    nchannels: number;
    frequency: number;

    // Constructors
    static ['new'](): AudioFormat;

    // Members
    copy(): AudioFormat;

    free(): void;
}

export class AudioSample {
    static $gtype: GObject.GType<AudioSample>;

    constructor(capacity: number);
    constructor(
        properties?: Partial<{
            data?: number;
            length?: number;
            capacity?: number;
        }>
    );

    constructor(copy: AudioSample);

    // Fields
    data: number;
    length: number;
    capacity: number;

    // Constructors
    static ['new'](capacity: number): AudioSample;

    // Members
    copy(): AudioSample;

    free(): void;
}

export class BaseAudioPrivate {
    static $gtype: GObject.GType<BaseAudioPrivate>;

    constructor(copy: BaseAudioPrivate);
}

export class BaseFramebufferPrivate {
    static $gtype: GObject.GType<BaseFramebufferPrivate>;

    constructor(copy: BaseFramebufferPrivate);
}

export class ColorMap {
    static $gtype: GObject.GType<ColorMap>;

    constructor(offset: number, size: number);
    constructor(
        properties?: Partial<{
            offset?: number;
            size?: number;
            colors?: ColorMapEntry;
        }>
    );

    constructor(copy: ColorMap);

    // Fields
    offset: number;
    size: number;
    colors: ColorMapEntry;

    // Constructors
    static ['new'](offset: number, size: number): ColorMap;

    // Members
    copy(): ColorMap;

    free(): void;

    lookup(idx: number, red: number, green: number, blue: number): boolean;

    set(idx: number, red: number, green: number, blue: number): boolean;
}

export class ColorMapEntry {
    static $gtype: GObject.GType<ColorMapEntry>;

    constructor(
        properties?: Partial<{
            red?: number;
            green?: number;
            blue?: number;
        }>
    );

    constructor(copy: ColorMapEntry);

    // Fields
    red: number;
    green: number;
    blue: number;
}

export class ConnectionPrivate {
    static $gtype: GObject.GType<ConnectionPrivate>;

    constructor(copy: ConnectionPrivate);
}

export class CursorPrivate {
    static $gtype: GObject.GType<CursorPrivate>;

    constructor(copy: CursorPrivate);
}

export class PixelFormat {
    static $gtype: GObject.GType<PixelFormat>;

    constructor();
    constructor(
        properties?: Partial<{
            bits_per_pixel?: number;
            depth?: number;
            byte_order?: number;
            true_color_flag?: number;
            red_max?: number;
            green_max?: number;
            blue_max?: number;
            red_shift?: number;
            green_shift?: number;
            blue_shift?: number;
        }>
    );

    constructor(copy: PixelFormat);

    // Fields
    bits_per_pixel: number;
    depth: number;
    byte_order: number;
    true_color_flag: number;
    red_max: number;
    green_max: number;
    blue_max: number;
    red_shift: number;
    green_shift: number;
    blue_shift: number;

    // Constructors
    static ['new'](): PixelFormat;

    // Members
    copy(): PixelFormat;

    free(): void;
}

export interface AudioNamespace {
    $gtype: GObject.GType<Audio>;
    prototype: AudioPrototype;
}

export type Audio = AudioPrototype;

export interface AudioPrototype extends GObject.Object {
    // Members

    playback_data(sample: AudioSample): void;

    playback_start(format: AudioFormat): void;

    playback_stop(): void;

    vfunc_playback_data(sample: AudioSample): boolean;

    vfunc_playback_start(format: AudioFormat): boolean;

    vfunc_playback_stop(): boolean;
}

export const Audio: AudioNamespace;

export interface FramebufferNamespace {
    $gtype: GObject.GType<Framebuffer>;
    prototype: FramebufferPrototype;
}

export type Framebuffer = FramebufferPrototype;

export interface FramebufferPrototype extends GObject.Object {
    // Members

    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

    fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

    get_buffer(): Uint8Array;

    get_height(): number;

    get_local_format(): PixelFormat;

    get_remote_format(): PixelFormat;

    get_rowstride(): number;

    get_width(): number;

    perfect_format_match(): boolean;

    rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;

    set_color_map(map: ColorMap): void;

    set_pixel_at(src: Uint8Array | string, x: number, y: number): void;

    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

    vfunc_fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

    vfunc_get_buffer(): number;

    vfunc_get_height(): number;

    vfunc_get_local_format(): PixelFormat;

    vfunc_get_remote_format(): PixelFormat;

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

    vfunc_set_color_map(map: ColorMap): void;

    vfunc_set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
}

export const Framebuffer: FramebufferNamespace;
