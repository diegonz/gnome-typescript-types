/**
 * SpiceClientGLib 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GstBase from './gstbase';
import * as GLib from './glib';
import * as Gst from './gst';

export const GTK_MAJOR_VERSION: number;
export const GTK_MICRO_VERSION: number;
export const GTK_MINOR_VERSION: number;

export function client_error_quark(): GLib.Quark;

export function display_change_preferred_compression(channel: Channel, compression: number): void;

export function display_change_preferred_video_codec_type(channel: Channel, codec_type: number): void;

export function display_get_gl_scanout(channel: DisplayChannel): GlScanout;

export function display_get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean;

export function display_gl_draw_done(channel: DisplayChannel): void;

export function get_option_group(): GLib.OptionGroup;

export function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void;

export function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void;

export function inputs_key_press(channel: InputsChannel, scancode: number): void;

export function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void;

export function inputs_key_release(channel: InputsChannel, scancode: number): void;

export function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void;

export function inputs_position(
    channel: InputsChannel,
    x: number,
    y: number,
    display: number,
    button_state: number
): void;

export function inputs_set_key_locks(channel: InputsChannel, locks: number): void;

export function main_agent_test_capability(channel: MainChannel, cap: number): boolean;

export function main_clipboard_grab(channel: MainChannel, types: number, ntypes: number): void;

export function main_clipboard_notify(channel: MainChannel, type: number, data: number, size: number): void;

export function main_clipboard_release(channel: MainChannel): void;

export function main_clipboard_request(channel: MainChannel, type: number): void;

export function main_clipboard_selection_grab(
    channel: MainChannel,
    selection: number,
    types: number,
    ntypes: number
): void;

export function main_clipboard_selection_notify(
    channel: MainChannel,
    selection: number,
    type: number,
    data: number,
    size: number
): void;

export function main_clipboard_selection_release(channel: MainChannel, selection: number): void;

export function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void;

export function main_file_copy_async(
    channel: MainChannel,
    sources: Gio.File[],
    flags: Gio.FileCopyFlags,
    cancellable?: Gio.Cancellable | null,
    progress_callback?: Gio.FileProgressCallback | null,
    callback?: Gio.AsyncReadyCallback<MainChannel> | null
): void;

export function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean;

export function main_request_mouse_mode(channel: MainChannel, mode: number): void;

export function main_send_monitor_config(channel: MainChannel): boolean;

export function main_set_display(
    channel: MainChannel,
    id: number,
    x: number,
    y: number,
    width: number,
    height: number
): void;

export function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void;

export function main_update_display(
    channel: MainChannel,
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    update: boolean
): void;

export function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void;

export function port_event(port: PortChannel, event: number): void;

export function port_write_async(
    port: PortChannel,
    buffer: Uint8Array | string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<PortChannel> | null
): void;

export function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number;

export function record_send_data(channel: RecordChannel, data: any | null, bytes: number, time: number): void;

export function set_session_option(session: Session): void;

export function util_get_debug(): boolean;

export function util_get_version_string(): string;

export function util_set_debug(enabled: boolean): void;

export function uuid_to_string(uuid: number): string;

export type msg_handler = (channel: Channel, _in: MsgIn) => void;
export type VReader = object | null;

export namespace ChannelEvent {
    export const $gtype: GObject.GType<ChannelEvent>;
}

export enum ChannelEvent {
    NONE = 0,
    OPENED = 10,
    SWITCHING = 11,
    CLOSED = 12,
    ERROR_CONNECT = 20,
    ERROR_TLS = 21,
    ERROR_LINK = 22,
    ERROR_AUTH = 23,
    ERROR_IO = 24,
}

export class ClientError extends GLib.Error {
    static $gtype: GObject.GType<ClientError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ClientError);

    // Properties
    static FAILED: number;
    static USB_DEVICE_REJECTED: number;
    static USB_DEVICE_LOST: number;
    static AUTH_NEEDS_PASSWORD: number;
    static AUTH_NEEDS_USERNAME: number;
    static AUTH_NEEDS_PASSWORD_AND_USERNAME: number;
    static USB_SERVICE: number;
}

export namespace QmpPortVmAction {
    export const $gtype: GObject.GType<QmpPortVmAction>;
}

export enum QmpPortVmAction {
    QUIT = 0,
    RESET = 1,
    POWER_DOWN = 2,
    PAUSE = 3,
    CONTINUE = 4,
    LAST = 5,
}

export namespace SessionMigration {
    export const $gtype: GObject.GType<SessionMigration>;
}

export enum SessionMigration {
    NONE = 0,
    SWITCHING = 1,
    MIGRATING = 2,
    CONNECTING = 3,
}

export namespace InputsLock {
    export const $gtype: GObject.GType<InputsLock>;
}

export enum InputsLock {
    SCROLL_LOCK = 1,
    NUM_LOCK = 2,
    CAPS_LOCK = 4,
}

export namespace SessionVerify {
    export const $gtype: GObject.GType<SessionVerify>;
}

export enum SessionVerify {
    PUBKEY = 1,
    HOSTNAME = 2,
    SUBJECT = 4,
}

export namespace Audio {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        main_context: GLib.MainContext;
        mainContext: GLib.MainContext;
        session: Session;
    }
}

export abstract class Audio extends GObject.Object {
    static $gtype: GObject.GType<Audio>;

    constructor(properties?: Partial<Audio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Audio.ConstructorProperties>, ...args: any[]): void;

    // Properties
    main_context: GLib.MainContext;
    mainContext: GLib.MainContext;
    session: Session;

    // Fields
    priv: AudioPrivate;

    // Constructors

    static ['new'](session: Session, context?: GLib.MainContext | null, name?: string | null): Audio;

    // Members

    vfunc_connect_channel(channel: Channel): boolean;

    vfunc_get_playback_volume_info_async(
        cancellable: Gio.Cancellable | null,
        main_channel: MainChannel,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_playback_volume_info_finish(
        res: Gio.AsyncResult,
        mute: boolean,
        nchannels: number,
        volume: number
    ): boolean;

    vfunc_get_record_volume_info_async(
        cancellable: Gio.Cancellable | null,
        main_channel: MainChannel,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_record_volume_info_finish(
        res: Gio.AsyncResult,
        mute: boolean,
        nchannels: number,
        volume: number
    ): boolean;

    static get(session: Session, context?: GLib.MainContext | null): Audio;
}

export namespace Channel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        channel_id: number;
        channelId: number;
        channel_type: number;
        channelType: number;
        socket: Gio.Socket;
        spice_session: Session;
        spiceSession: Session;
        total_read_bytes: number;
        totalReadBytes: number;
    }
}

export class Channel extends GObject.Object {
    static $gtype: GObject.GType<Channel>;

    constructor(properties?: Partial<Channel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Channel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    channel_id: number;
    channelId: number;
    channel_type: number;
    channelType: number;
    socket: Gio.Socket;
    spice_session: Session;
    spiceSession: Session;
    total_read_bytes: number;
    totalReadBytes: number;

    // Fields
    priv: ChannelPrivate;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'channel-event', callback: (_source: this, event: ChannelEvent) => void): number;

    emit(signal: 'channel-event', event: ChannelEvent): void;

    connect_after(signal: 'open-fd', callback: (_source: this, with_tls: number) => void): number;

    emit(signal: 'open-fd', with_tls: number): void;

    // Constructors

    static ['new'](s: Session, type: number, id: number): Channel;

    // Members

    connect(): boolean;
    connect(...args: never[]): never;

    destroy(): void;

    disconnect(reason: ChannelEvent): void;
    disconnect(...args: never[]): never;

    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    flush_finish(result: Gio.AsyncResult): boolean;

    get_error(): GLib.Error;

    open_fd(fd: number): boolean;

    set_capability(cap: number): void;

    test_capability(cap: number): boolean;

    test_common_capability(cap: number): boolean;

    vfunc_channel_event(event: ChannelEvent): void;

    vfunc_channel_reset(migrating: boolean): void;

    vfunc_channel_send_migration_handshake(): void;

    vfunc_channel_up(): void;

    vfunc_handle_msg(msg: MsgIn): void;

    vfunc_iterate_read(): void;

    vfunc_iterate_write(): void;

    vfunc_open_fd(with_tls: number): void;

    static string_to_type(str: string): number;

    static type_to_string(type: number): string;
}

export namespace CursorChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        cursor: CursorShape;
    }
}

export class CursorChannel extends Channel {
    static $gtype: GObject.GType<CursorChannel>;

    constructor(properties?: Partial<CursorChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CursorChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cursor: CursorShape;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'cursor-hide', callback: (_source: this) => void): number;

    emit(signal: 'cursor-hide'): void;

    connect_after(signal: 'cursor-move', callback: (_source: this, x: number, y: number) => void): number;

    emit(signal: 'cursor-move', x: number, y: number): void;

    connect_after(signal: 'cursor-reset', callback: (_source: this) => void): number;

    emit(signal: 'cursor-reset'): void;

    connect_after(
        signal: 'cursor-set',
        callback: (_source: this, width: number, height: number, hot_x: number, hot_y: number, rgba: any | null) => void
    ): number;

    emit(signal: 'cursor-set', width: number, height: number, hot_x: number, hot_y: number, rgba: any | null): void;

    // Members

    vfunc_cursor_hide(): void;

    vfunc_cursor_move(x: number, y: number): void;

    vfunc_cursor_reset(): void;

    vfunc_cursor_set(width: number, height: number, hot_x: number, hot_y: number, rgba?: any | null): void;
}

export namespace DisplayChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        gl_scanout: GlScanout;
        glScanout: GlScanout;
        height: number;
        monitors: any[];
        monitors_max: number;
        monitorsMax: number;
        width: number;
    }
}

export class DisplayChannel extends Channel {
    static $gtype: GObject.GType<DisplayChannel>;

    constructor(properties?: Partial<DisplayChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DisplayChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    gl_scanout: GlScanout;
    glScanout: GlScanout;
    height: number;
    monitors: any[];
    monitors_max: number;
    monitorsMax: number;
    width: number;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(
        signal: 'display-invalidate',
        callback: (_source: this, x: number, y: number, width: number, height: number) => void
    ): number;

    emit(signal: 'display-invalidate', x: number, y: number, width: number, height: number): void;

    connect_after(signal: 'display-mark', callback: (_source: this, mark: number) => void): number;

    emit(signal: 'display-mark', mark: number): void;

    connect_after(
        signal: 'display-primary-create',
        callback: (
            _source: this,
            format: number,
            width: number,
            height: number,
            stride: number,
            shmid: number,
            imgdata: any | null
        ) => void
    ): number;

    emit(
        signal: 'display-primary-create',
        format: number,
        width: number,
        height: number,
        stride: number,
        shmid: number,
        imgdata: any | null
    ): void;

    connect_after(signal: 'display-primary-destroy', callback: (_source: this) => void): number;

    emit(signal: 'display-primary-destroy'): void;

    connect_after(
        signal: 'gl-draw',
        callback: (_source: this, x: number, y: number, width: number, height: number) => void
    ): number;

    emit(signal: 'gl-draw', x: number, y: number, width: number, height: number): void;

    connect_after(signal: 'gst-video-overlay', callback: (_source: this, pipeline: Gst.Pipeline) => boolean): number;

    emit(signal: 'gst-video-overlay', pipeline: Gst.Pipeline): void;

    connect_after(signal: 'streaming-mode', callback: (_source: this, streaming_mode: boolean) => any | null): number;

    emit(signal: 'streaming-mode', streaming_mode: boolean): void;

    // Members

    get_gl_scanout(): GlScanout;

    gl_draw_done(): void;

    static change_preferred_compression(channel: Channel, compression: number): void;

    static change_preferred_video_codec_type(channel: Channel, codec_type: number): void;

    static change_preferred_video_codec_types(channel: Channel, codecs: number, ncodecs: number): boolean;

    static get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean;
}

export namespace FileTransferTask {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        cancellable: Gio.Cancellable;
        channel: MainChannel;
        file: Gio.File;
        id: number;
        progress: number;
        total_bytes: number;
        totalBytes: number;
        transferred_bytes: number;
        transferredBytes: number;
    }
}

export class FileTransferTask extends GObject.Object {
    static $gtype: GObject.GType<FileTransferTask>;

    constructor(properties?: Partial<FileTransferTask.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileTransferTask.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cancellable: Gio.Cancellable;
    channel: MainChannel;
    file: Gio.File;
    id: number;
    progress: number;
    total_bytes: number;
    totalBytes: number;
    transferred_bytes: number;
    transferredBytes: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'finished', callback: (_source: this, object: GLib.Error) => void): number;

    connect_after(signal: 'finished', callback: (_source: this, object: GLib.Error) => void): number;

    emit(signal: 'finished', object: GLib.Error): void;

    // Members

    cancel(): void;

    get_filename(): string;

    get_progress(): number;

    get_total_bytes(): number;

    get_transferred_bytes(): number;
}

export namespace InputsChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        key_modifiers: number;
        keyModifiers: number;
    }
}

export class InputsChannel extends Channel {
    static $gtype: GObject.GType<InputsChannel>;

    constructor(properties?: Partial<InputsChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputsChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    key_modifiers: number;
    keyModifiers: number;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'inputs-modifiers', callback: (_source: this) => void): number;

    emit(signal: 'inputs-modifiers'): void;

    // Members

    button_press(button: number, button_state: number): void;

    button_release(button: number, button_state: number): void;

    key_press(scancode: number): void;

    key_press_and_release(scancode: number): void;

    key_release(scancode: number): void;

    motion(dx: number, dy: number, button_state: number): void;

    position(x: number, y: number, display: number, button_state: number): void;

    set_key_locks(locks: number): void;
}

export namespace MainChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        agent_caps_0: number;
        agentCaps0: number;
        agent_connected: boolean;
        agentConnected: boolean;
        color_depth: number;
        colorDepth: number;
        disable_animation: boolean;
        disableAnimation: boolean;
        disable_display_align: boolean;
        disableDisplayAlign: boolean;
        disable_display_position: boolean;
        disableDisplayPosition: boolean;
        disable_font_smooth: boolean;
        disableFontSmooth: boolean;
        disable_wallpaper: boolean;
        disableWallpaper: boolean;
        max_clipboard: number;
        maxClipboard: number;
        mouse_mode: number;
        mouseMode: number;
    }
}

export class MainChannel extends Channel {
    static $gtype: GObject.GType<MainChannel>;

    constructor(properties?: Partial<MainChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MainChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    agent_caps_0: number;
    agentCaps0: number;
    agent_connected: boolean;
    agentConnected: boolean;
    color_depth: number;
    colorDepth: number;
    disable_animation: boolean;
    disableAnimation: boolean;
    disable_display_align: boolean;
    disableDisplayAlign: boolean;
    disable_display_position: boolean;
    disableDisplayPosition: boolean;
    disable_font_smooth: boolean;
    disableFontSmooth: boolean;
    disable_wallpaper: boolean;
    disableWallpaper: boolean;
    max_clipboard: number;
    maxClipboard: number;
    mouse_mode: number;
    mouseMode: number;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'main-agent-update', callback: (_source: this) => void): number;

    emit(signal: 'main-agent-update'): void;

    connect_after(
        signal: 'main-clipboard',
        callback: (_source: this, type: number, data: any | null, size: number) => void
    ): number;

    emit(signal: 'main-clipboard', type: number, data: any | null, size: number): void;

    connect_after(
        signal: 'main-clipboard-grab',
        callback: (_source: this, types: any | null, ntypes: number) => boolean
    ): number;

    emit(signal: 'main-clipboard-grab', types: any | null, ntypes: number): void;

    connect_after(signal: 'main-clipboard-release', callback: (_source: this) => void): number;

    emit(signal: 'main-clipboard-release'): void;

    connect_after(signal: 'main-clipboard-request', callback: (_source: this, types: number) => boolean): number;

    emit(signal: 'main-clipboard-request', types: number): void;

    connect_after(
        signal: 'main-clipboard-selection',
        callback: (_source: this, selection: number, type: number, data: any | null, size: number) => void
    ): number;

    emit(signal: 'main-clipboard-selection', selection: number, type: number, data: any | null, size: number): void;

    connect_after(
        signal: 'main-clipboard-selection-grab',
        callback: (_source: this, selection: number, types: any | null, ntypes: number) => boolean
    ): number;

    emit(signal: 'main-clipboard-selection-grab', selection: number, types: any | null, ntypes: number): void;

    connect_after(
        signal: 'main-clipboard-selection-release',
        callback: (_source: this, selection: number) => void
    ): number;

    emit(signal: 'main-clipboard-selection-release', selection: number): void;

    connect_after(
        signal: 'main-clipboard-selection-request',
        callback: (_source: this, selection: number, types: number) => boolean
    ): number;

    emit(signal: 'main-clipboard-selection-request', selection: number, types: number): void;

    connect_after(signal: 'main-mouse-update', callback: (_source: this) => void): number;

    emit(signal: 'main-mouse-update'): void;

    connect_after(signal: 'migration-started', callback: (_source: this, session: GObject.Object) => void): number;

    emit(signal: 'migration-started', session: GObject.Object): void;

    connect_after(signal: 'new-file-transfer', callback: (_source: this, task: GObject.Object) => void): number;

    emit(signal: 'new-file-transfer', task: GObject.Object): void;

    // Members

    agent_test_capability(cap: number): boolean;

    clipboard_selection_grab(selection: number, types: number, ntypes: number): void;

    clipboard_selection_notify(selection: number, type: number, data: number, size: number): void;

    clipboard_selection_release(selection: number): void;

    clipboard_selection_request(selection: number, type: number): void;

    file_copy_async(
        sources: Gio.File[],
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    file_copy_finish(result: Gio.AsyncResult): boolean;

    request_mouse_mode(mode: number): void;

    send_monitor_config(): boolean;

    update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void;

    update_display_enabled(id: number, enabled: boolean, update: boolean): void;
}

export namespace PlaybackChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        min_latency: number;
        minLatency: number;
        mute: boolean;
        nchannels: number;
        volume: any;
    }
}

export class PlaybackChannel extends Channel {
    static $gtype: GObject.GType<PlaybackChannel>;

    constructor(properties?: Partial<PlaybackChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PlaybackChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    min_latency: number;
    minLatency: number;
    mute: boolean;
    nchannels: number;
    volume: any;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(
        signal: 'playback-data',
        callback: (_source: this, data: any | null, data_size: number) => void
    ): number;

    emit(signal: 'playback-data', data: any | null, data_size: number): void;

    connect_after(signal: 'playback-get-delay', callback: (_source: this) => void): number;

    emit(signal: 'playback-get-delay'): void;

    connect_after(
        signal: 'playback-start',
        callback: (_source: this, format: number, channels: number, rate: number) => void
    ): number;

    emit(signal: 'playback-start', format: number, channels: number, rate: number): void;

    connect_after(signal: 'playback-stop', callback: (_source: this) => void): number;

    emit(signal: 'playback-stop'): void;

    // Members

    set_delay(delay_ms: number): void;

    vfunc_playback_data(data: any | null, size: number): void;

    vfunc_playback_start(format: number, channels: number, freq: number): void;

    vfunc_playback_stop(): void;
}

export namespace PortChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        port_name: string;
        portName: string;
        port_opened: boolean;
        portOpened: boolean;
    }
}

export class PortChannel extends Channel {
    static $gtype: GObject.GType<PortChannel>;

    constructor(properties?: Partial<PortChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PortChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    port_name: string;
    portName: string;
    port_opened: boolean;
    portOpened: boolean;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'port-data', callback: (_source: this, data: any | null, size: number) => void): number;

    emit(signal: 'port-data', data: any | null, size: number): void;

    connect_after(signal: 'port-event', callback: (_source: this, event: number) => void): number;

    emit(signal: 'port-event', event: number): void;

    // Members

    event(event: number): void;

    write_async(
        buffer: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_finish(result: Gio.AsyncResult): number;
}

export namespace QmpPort {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        channel: PortChannel;
        ready: boolean;
    }
}

export class QmpPort extends GObject.Object {
    static $gtype: GObject.GType<QmpPort>;

    constructor(properties?: Partial<QmpPort.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<QmpPort.ConstructorProperties>, ...args: any[]): void;

    // Properties
    channel: PortChannel;
    ready: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'event', callback: (_source: this, name: string, node: any | null) => void): number;

    connect_after(signal: 'event', callback: (_source: this, name: string, node: any | null) => void): number;

    emit(signal: 'event', name: string, node: any | null): void;

    // Members

    query_status_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    query_status_finish(result: Gio.AsyncResult): QmpStatus;

    vm_action_async(
        action: QmpPortVmAction,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vm_action_finish(result: Gio.AsyncResult): boolean;

    static get(channel: PortChannel): QmpPort;
}

export namespace RecordChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;

        mute: boolean;
        nchannels: number;
        volume: any;
    }
}

export class RecordChannel extends Channel {
    static $gtype: GObject.GType<RecordChannel>;

    constructor(properties?: Partial<RecordChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RecordChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mute: boolean;
    nchannels: number;
    volume: any;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(
        signal: 'record-start',
        callback: (_source: this, format: number, channels: number, rate: number) => void
    ): number;

    emit(signal: 'record-start', format: number, channels: number, rate: number): void;

    connect_after(signal: 'record-stop', callback: (_source: this) => void): number;

    emit(signal: 'record-stop'): void;

    // Members

    send_data(data: any | null, bytes: number, time: number): void;

    vfunc_record_data(data: any | null, size: number): void;

    vfunc_record_start(format: number, channels: number, freq: number): void;

    vfunc_record_stop(): void;
}

export namespace Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        ca: Uint8Array;
        ca_file: string;
        caFile: string;
        cache_size: number;
        cacheSize: number;
        cert_subject: string;
        certSubject: string;
        ciphers: string;
        client_sockets: boolean;
        clientSockets: boolean;
        color_depth: number;
        colorDepth: number;
        disable_effects: string[];
        disableEffects: string[];
        enable_audio: boolean;
        enableAudio: boolean;
        enable_smartcard: boolean;
        enableSmartcard: boolean;
        enable_usbredir: boolean;
        enableUsbredir: boolean;
        gl_scanout: boolean;
        glScanout: boolean;
        glz_window_size: number;
        glzWindowSize: number;
        host: string;
        inhibit_keyboard_grab: boolean;
        inhibitKeyboardGrab: boolean;
        migration_state: SessionMigration;
        migrationState: SessionMigration;
        name: string;
        password: string;
        port: string;
        protocol: number;
        proxy: string;
        pubkey: Uint8Array;
        read_only: boolean;
        readOnly: boolean;
        secure_channels: string[];
        secureChannels: string[];
        share_dir_ro: boolean;
        shareDirRo: boolean;
        shared_dir: string;
        sharedDir: string;
        smartcard_certificates: string[];
        smartcardCertificates: string[];
        smartcard_db: string;
        smartcardDb: string;
        tls_port: string;
        tlsPort: string;
        unix_path: string;
        unixPath: string;
        uri: string;
        username: string;
        uuid: any;
        verify: SessionVerify;
    }
}

export class Session extends GObject.Object {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    ca: Uint8Array;
    ca_file: string;
    caFile: string;
    cache_size: number;
    cacheSize: number;
    cert_subject: string;
    certSubject: string;
    ciphers: string;
    client_sockets: boolean;
    clientSockets: boolean;
    color_depth: number;
    colorDepth: number;
    disable_effects: string[];
    disableEffects: string[];
    enable_audio: boolean;
    enableAudio: boolean;
    enable_smartcard: boolean;
    enableSmartcard: boolean;
    enable_usbredir: boolean;
    enableUsbredir: boolean;
    gl_scanout: boolean;
    glScanout: boolean;
    glz_window_size: number;
    glzWindowSize: number;
    host: string;
    inhibit_keyboard_grab: boolean;
    inhibitKeyboardGrab: boolean;
    migration_state: SessionMigration;
    migrationState: SessionMigration;
    name: string;
    password: string;
    port: string;
    protocol: number;
    proxy: string;
    pubkey: Uint8Array;
    read_only: boolean;
    readOnly: boolean;
    secure_channels: string[];
    secureChannels: string[];
    share_dir_ro: boolean;
    shareDirRo: boolean;
    shared_dir: string;
    sharedDir: string;
    smartcard_certificates: string[];
    smartcardCertificates: string[];
    smartcard_db: string;
    smartcardDb: string;
    tls_port: string;
    tlsPort: string;
    unix_path: string;
    unixPath: string;
    uri: string;
    username: string;
    uuid: any;
    verify: SessionVerify;

    // Fields
    priv: SessionPrivate;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'channel-destroy', callback: (_source: this, channel: Channel) => void): number;

    emit(signal: 'channel-destroy', channel: Channel): void;

    connect_after(signal: 'channel-new', callback: (_source: this, channel: Channel) => void): number;

    emit(signal: 'channel-new', channel: Channel): void;

    connect_after(signal: 'disconnected', callback: (_source: this) => void): number;

    emit(signal: 'disconnected'): void;

    connect_after(signal: 'mm-time-reset', callback: (_source: this) => void): number;

    emit(signal: 'mm-time-reset'): void;

    // Constructors

    static ['new'](): Session;

    // Members

    connect(): boolean;
    connect(...args: never[]): never;

    disconnect(): void;
    disconnect(...args: never[]): never;

    get_channels(): Channel[];

    get_proxy_uri(): URI;

    get_read_only(): boolean;

    has_channel_type(type: number): boolean;

    is_for_migration(): boolean;

    open_fd(fd: number): boolean;

    vfunc_channel_destroy(channel: Channel): void;

    vfunc_channel_new(channel: Channel): void;
}

export namespace SmartcardChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
    }
}

export class SmartcardChannel extends Channel {
    static $gtype: GObject.GType<SmartcardChannel>;

    constructor(properties?: Partial<SmartcardChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SmartcardChannel.ConstructorProperties>, ...args: any[]): void;
}

export namespace SmartcardManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SmartcardManager extends GObject.Object {
    static $gtype: GObject.GType<SmartcardManager>;

    constructor(properties?: Partial<SmartcardManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SmartcardManager.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'card-inserted', callback: (_source: this, vreader: VReader) => void): number;

    connect_after(signal: 'card-inserted', callback: (_source: this, vreader: VReader) => void): number;

    emit(signal: 'card-inserted', vreader: VReader): void;

    connect(signal: 'card-removed', callback: (_source: this, vreader: VReader) => void): number;

    connect_after(signal: 'card-removed', callback: (_source: this, vreader: VReader) => void): number;

    emit(signal: 'card-removed', vreader: VReader): void;

    connect(signal: 'reader-added', callback: (_source: this, vreader: VReader) => void): number;

    connect_after(signal: 'reader-added', callback: (_source: this, vreader: VReader) => void): number;

    emit(signal: 'reader-added', vreader: VReader): void;

    connect(signal: 'reader-removed', callback: (_source: this, vreader: VReader) => void): number;

    connect_after(signal: 'reader-removed', callback: (_source: this, vreader: VReader) => void): number;

    emit(signal: 'reader-removed', vreader: VReader): void;

    // Members

    get_readers(): SmartcardReader[];

    insert_card(): boolean;

    remove_card(): boolean;

    vfunc_card_inserted(reader: SmartcardReader): void;

    vfunc_card_removed(reader: SmartcardReader): void;

    vfunc_reader_added(reader: SmartcardReader): void;

    vfunc_reader_removed(reader: SmartcardReader): void;

    static get(): SmartcardManager;
}

export namespace URI {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        hostname: string;
        password: string;
        port: number;
        scheme: string;
        user: string;
    }
}

export class URI extends GObject.Object {
    static $gtype: GObject.GType<URI>;

    constructor(properties?: Partial<URI.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URI.ConstructorProperties>, ...args: any[]): void;

    // Properties
    hostname: string;
    password: string;
    port: number;
    scheme: string;
    user: string;

    // Members

    get_hostname(): string;

    get_password(): string;

    get_port(): number;

    get_scheme(): string;

    get_user(): string;

    set_hostname(hostname: string): void;

    set_password(password: string): void;

    set_port(port: number): void;

    set_scheme(scheme: string): void;

    set_user(user: string): void;

    to_string(): string;
}

export namespace UsbDeviceManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auto_connect: boolean;
        autoConnect: boolean;
        auto_connect_filter: string;
        autoConnectFilter: string;
        free_channels: number;
        freeChannels: number;
        redirect_on_connect: string;
        redirectOnConnect: string;
        session: Session;
    }
}

export class UsbDeviceManager extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<UsbDeviceManager>;

    constructor(properties?: Partial<UsbDeviceManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UsbDeviceManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_connect: boolean;
    autoConnect: boolean;
    auto_connect_filter: string;
    autoConnectFilter: string;
    free_channels: number;
    freeChannels: number;
    redirect_on_connect: string;
    redirectOnConnect: string;
    session: Session;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'auto-connect-failed',
        callback: (_source: this, device: UsbDevice, error: GLib.Error) => void
    ): number;

    connect_after(
        signal: 'auto-connect-failed',
        callback: (_source: this, device: UsbDevice, error: GLib.Error) => void
    ): number;

    emit(signal: 'auto-connect-failed', device: UsbDevice, error: GLib.Error): void;

    connect(signal: 'device-added', callback: (_source: this, device: UsbDevice) => void): number;

    connect_after(signal: 'device-added', callback: (_source: this, device: UsbDevice) => void): number;

    emit(signal: 'device-added', device: UsbDevice): void;

    connect(signal: 'device-error', callback: (_source: this, device: UsbDevice, error: GLib.Error) => void): number;

    connect_after(
        signal: 'device-error',
        callback: (_source: this, device: UsbDevice, error: GLib.Error) => void
    ): number;

    emit(signal: 'device-error', device: UsbDevice, error: GLib.Error): void;

    connect(signal: 'device-removed', callback: (_source: this, device: UsbDevice) => void): number;

    connect_after(signal: 'device-removed', callback: (_source: this, device: UsbDevice) => void): number;

    emit(signal: 'device-removed', device: UsbDevice): void;

    // Members

    can_redirect_device(device: UsbDevice): boolean;

    connect_device_async(
        device: UsbDevice,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    connect_device_finish(res: Gio.AsyncResult): boolean;

    create_shared_cd_device(filename: string): boolean;

    disconnect_device(device: UsbDevice): void;

    disconnect_device_async(
        device: UsbDevice,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    disconnect_device_finish(res: Gio.AsyncResult): boolean;

    get_devices(): UsbDevice[];

    get_devices_with_filter(filter?: string | null): UsbDevice[];

    is_device_connected(device: UsbDevice): boolean;

    is_device_shared_cd(device: UsbDevice): boolean;

    is_redirecting(): boolean;

    vfunc_auto_connect_failed(device: UsbDevice, error: GLib.Error): void;

    vfunc_device_added(device: UsbDevice): void;

    vfunc_device_error(device: UsbDevice, error: GLib.Error): void;

    vfunc_device_removed(device: UsbDevice): void;

    static get(session: Session): UsbDeviceManager;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace UsbredirChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
    }
}

export class UsbredirChannel extends Channel {
    static $gtype: GObject.GType<UsbredirChannel>;

    constructor(properties?: Partial<UsbredirChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UsbredirChannel.ConstructorProperties>, ...args: any[]): void;
}

export namespace WebdavChannel {
    export interface ConstructorProperties extends PortChannel.ConstructorProperties {
        [key: string]: any;
    }
}

export class WebdavChannel extends PortChannel {
    static $gtype: GObject.GType<WebdavChannel>;

    constructor(properties?: Partial<WebdavChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebdavChannel.ConstructorProperties>, ...args: any[]): void;
}

export class AudioPrivate {
    static $gtype: GObject.GType<AudioPrivate>;

    constructor(copy: AudioPrivate);
}

export class ChannelClassPrivate {
    static $gtype: GObject.GType<ChannelClassPrivate>;

    constructor(copy: ChannelClassPrivate);
}

export class ChannelPrivate {
    static $gtype: GObject.GType<ChannelPrivate>;

    constructor(copy: ChannelPrivate);
}

export class CursorChannelPrivate {
    static $gtype: GObject.GType<CursorChannelPrivate>;

    constructor(copy: CursorChannelPrivate);
}

export class CursorShape {
    static $gtype: GObject.GType<CursorShape>;

    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
            hot_spot_x?: number;
            hot_spot_y?: number;
            data?: any;
        }>
    );

    constructor(copy: CursorShape);

    // Fields
    width: number;
    height: number;
    hot_spot_x: number;
    hot_spot_y: number;
    data: any;
}

export class DisplayChannelPrivate {
    static $gtype: GObject.GType<DisplayChannelPrivate>;

    constructor(copy: DisplayChannelPrivate);
}

export class DisplayMonitorConfig {
    static $gtype: GObject.GType<DisplayMonitorConfig>;

    constructor(
        properties?: Partial<{
            id?: number;
            surface_id?: number;
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );

    constructor(copy: DisplayMonitorConfig);

    // Fields
    id: number;
    surface_id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

export class DisplayPrimary {
    static $gtype: GObject.GType<DisplayPrimary>;

    constructor(
        properties?: Partial<{
            format?: any;
            width?: number;
            height?: number;
            stride?: number;
            shmid?: number;
            data?: number;
            marked?: boolean;
        }>
    );

    constructor(copy: DisplayPrimary);

    // Fields
    format: any;
    width: number;
    height: number;
    stride: number;
    shmid: number;
    data: number;
    marked: boolean;
}

export class GlScanout {
    static $gtype: GObject.GType<GlScanout>;

    constructor(
        properties?: Partial<{
            fd?: number;
            width?: number;
            height?: number;
            stride?: number;
            format?: number;
            y0top?: boolean;
        }>
    );

    constructor(copy: GlScanout);

    // Fields
    fd: number;
    width: number;
    height: number;
    stride: number;
    format: number;
    y0top: boolean;

    // Members
    free(): void;
}

export class InputsChannelPrivate {
    static $gtype: GObject.GType<InputsChannelPrivate>;

    constructor(copy: InputsChannelPrivate);
}

export class MainChannelPrivate {
    static $gtype: GObject.GType<MainChannelPrivate>;

    constructor(copy: MainChannelPrivate);
}

export class MsgIn {
    static $gtype: GObject.GType<MsgIn>;

    constructor(copy: MsgIn);
}

export class MsgOut {
    static $gtype: GObject.GType<MsgOut>;

    constructor(copy: MsgOut);
}

export class PlaybackChannelPrivate {
    static $gtype: GObject.GType<PlaybackChannelPrivate>;

    constructor(copy: PlaybackChannelPrivate);
}

export class PortChannelPrivate {
    static $gtype: GObject.GType<PortChannelPrivate>;

    constructor(copy: PortChannelPrivate);
}

export class QmpStatus {
    static $gtype: GObject.GType<QmpStatus>;

    constructor(
        properties?: Partial<{
            version?: number;
            running?: boolean;
            singlestep?: boolean;
            status?: string;
        }>
    );

    constructor(copy: QmpStatus);

    // Fields
    version: number;
    running: boolean;
    singlestep: boolean;
    status: string;

    // Members
    ref(): QmpStatus;

    unref(): void;
}

export class RecordChannelPrivate {
    static $gtype: GObject.GType<RecordChannelPrivate>;

    constructor(copy: RecordChannelPrivate);
}

export class SessionPrivate {
    static $gtype: GObject.GType<SessionPrivate>;

    constructor(copy: SessionPrivate);
}

export class SmartcardChannelPrivate {
    static $gtype: GObject.GType<SmartcardChannelPrivate>;

    constructor(copy: SmartcardChannelPrivate);
}

export class SmartcardManagerPrivate {
    static $gtype: GObject.GType<SmartcardManagerPrivate>;

    constructor(copy: SmartcardManagerPrivate);
}

export class SmartcardReader {
    static $gtype: GObject.GType<SmartcardReader>;

    constructor(copy: SmartcardReader);

    // Members
    insert_card(): boolean;

    is_software(): boolean;

    remove_card(): boolean;
}

export class URIPrivate {
    static $gtype: GObject.GType<URIPrivate>;

    constructor(copy: URIPrivate);
}

export class UsbDevice {
    static $gtype: GObject.GType<UsbDevice>;

    constructor(copy: UsbDevice);

    // Members
    get_description(format?: string | null): string;

    get_libusb_device(): any | null;
}

export class UsbDeviceManagerPrivate {
    static $gtype: GObject.GType<UsbDeviceManagerPrivate>;

    constructor(copy: UsbDeviceManagerPrivate);
}

export class UsbredirChannelPrivate {
    static $gtype: GObject.GType<UsbredirChannelPrivate>;

    constructor(copy: UsbredirChannelPrivate);
}

export class WebdavChannelPrivate {
    static $gtype: GObject.GType<WebdavChannelPrivate>;

    constructor(copy: WebdavChannelPrivate);
}
