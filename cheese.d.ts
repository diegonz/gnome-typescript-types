/**
 * Cheese 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Clutter from './clutter';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gst from './gst';
import * as Gio from './gio';
import * as GObject from './gobject';

export const PHOTO_NAME_SUFFIX: string;
export const VIDEO_NAME_SUFFIX: string;

export namespace CameraError {
    export const $gtype: GObject.GType<CameraError>;
}

export enum CameraError {
    UNKNOWN = 0,
    ELEMENT_NOT_FOUND = 1,
    NO_DEVICE = 2,
}

export namespace MediaMode {
    export const $gtype: GObject.GType<MediaMode>;
}

export enum MediaMode {
    PHOTO = 0,
    VIDEO = 1,
    BURST = 2,
}

export namespace Camera {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        device: CameraDevice;
        format: VideoFormat;
        num_camera_devices: number;
        numCameraDevices: number;
        video_texture: any;
        videoTexture: any;
    }
}

export class Camera extends GObject.Object {
    static $gtype: GObject.GType<Camera>;

    constructor(properties?: Partial<Camera.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Camera.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device: CameraDevice;
    format: VideoFormat;
    num_camera_devices: number;
    numCameraDevices: number;
    video_texture: any;
    videoTexture: any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'photo-saved', callback: (_source: this) => void): number;

    connect_after(signal: 'photo-saved', callback: (_source: this) => void): number;

    emit(signal: 'photo-saved'): void;

    connect(signal: 'photo-taken', callback: (_source: this, pixbuf: GdkPixbuf.Pixbuf) => void): number;

    connect_after(signal: 'photo-taken', callback: (_source: this, pixbuf: GdkPixbuf.Pixbuf) => void): number;

    emit(signal: 'photo-taken', pixbuf: GdkPixbuf.Pixbuf): void;

    connect(signal: 'state-flags-changed', callback: (_source: this, state: number) => void): number;

    connect_after(signal: 'state-flags-changed', callback: (_source: this, state: number) => void): number;

    emit(signal: 'state-flags-changed', state: number): void;

    connect(signal: 'video-saved', callback: (_source: this) => void): number;

    connect_after(signal: 'video-saved', callback: (_source: this) => void): number;

    emit(signal: 'video-saved'): void;

    // Constructors

    static ['new'](
        video_texture: Clutter.Actor,
        name: string | null,
        x_resolution: number,
        y_resolution: number
    ): Camera;

    // Members

    connect_effect_texture(effect: Effect, texture: Clutter.Actor): void;

    get_balance_property_range(property: string): [boolean, number, number, number];

    get_camera_devices(): CameraDevice[];

    get_current_video_format(): VideoFormat;

    get_recorded_time(): string;

    get_selected_device(): CameraDevice;

    get_video_formats(): VideoFormat[];

    play(): void;

    set_balance_property(property: string, value: number): void;

    set_device(device: CameraDevice): void;

    set_effect(effect: Effect): void;

    set_video_format(format: VideoFormat): void;

    setup(device?: CameraDevice | null): void;

    start_video_recording(filename: string): void;

    stop(): void;

    stop_video_recording(): void;

    switch_camera_device(): void;

    take_photo(filename: string): boolean;

    take_photo_pixbuf(): boolean;

    toggle_effects_pipeline(active: boolean): void;

    vfunc_photo_saved(): void;

    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void;

    vfunc_state_flags_changed(new_state: Gst.State): void;

    vfunc_video_saved(): void;
}

export namespace CameraDevice {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        device: Gst.Device;
        name: string;
    }
}

export class CameraDevice extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<CameraDevice>;

    constructor(properties?: Partial<CameraDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CameraDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device: Gst.Device;
    name: string;

    // Constructors

    static ['new'](device: Gst.Device): CameraDevice;

    // Members

    get_best_format(): VideoFormat;

    get_caps_for_format(format: VideoFormat): Gst.Caps;

    get_format_list(): VideoFormat[];

    get_name(): string;

    get_src(): Gst.Element;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace CameraDeviceMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CameraDeviceMonitor
    extends GObject.Object
    implements Gio.AsyncInitable<CameraDeviceMonitor>, Gio.Initable {
    static $gtype: GObject.GType<CameraDeviceMonitor>;

    constructor(properties?: Partial<CameraDeviceMonitor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CameraDeviceMonitor.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'added', callback: (_source: this, device: CameraDevice) => void): number;

    connect_after(signal: 'added', callback: (_source: this, device: CameraDevice) => void): number;

    emit(signal: 'added', device: CameraDevice): void;

    connect(signal: 'removed', callback: (_source: this, device: CameraDevice) => void): number;

    connect_after(signal: 'removed', callback: (_source: this, device: CameraDevice) => void): number;

    emit(signal: 'removed', device: CameraDevice): void;

    // Constructors

    static ['new'](): CameraDeviceMonitor;

    static new_finish(result: Gio.AsyncResult): CameraDeviceMonitor;
    static new_finish(...args: never[]): never;

    // Members

    coldplug(): void;

    vfunc_added(device: CameraDevice): void;

    vfunc_removed(device: CameraDevice): void;

    static new_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<CameraDeviceMonitor> | null
    ): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): CameraDeviceMonitor;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Effect {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        control_valve: Gst.Element;
        controlValve: Gst.Element;
        name: string;
        pipeline_desc: string;
        pipelineDesc: string;
    }
}

export class Effect extends GObject.Object {
    static $gtype: GObject.GType<Effect>;

    constructor(properties?: Partial<Effect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Effect.ConstructorProperties>, ...args: any[]): void;

    // Properties
    control_valve: Gst.Element;
    controlValve: Gst.Element;
    name: string;
    pipeline_desc: string;
    pipelineDesc: string;

    // Constructors

    static ['new'](name: string, pipeline_desc: string): Effect;

    // Members

    disable_preview(): void;

    enable_preview(): void;

    get_name(): string;

    get_pipeline_desc(): string;

    is_preview_connected(): boolean;

    static load_effects(): Effect[];

    static load_from_file(filename: string): Effect;
}

export namespace FileUtil {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FileUtil extends GObject.Object {
    static $gtype: GObject.GType<FileUtil>;

    constructor(properties?: Partial<FileUtil.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FileUtil.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FileUtil;

    // Members

    get_new_media_filename(mode: MediaMode): string;

    get_photo_path(): string;

    get_video_path(): string;

    reset_burst(): void;
}

export class CameraDeviceMonitorPrivate {
    static $gtype: GObject.GType<CameraDeviceMonitorPrivate>;

    constructor(copy: CameraDeviceMonitorPrivate);
}

export class CameraPrivate {
    static $gtype: GObject.GType<CameraPrivate>;

    constructor(copy: CameraPrivate);
}

export class VideoFormat {
    static $gtype: GObject.GType<VideoFormat>;

    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
        }>
    );

    constructor(copy: VideoFormat);

    // Fields
    width: number;
    height: number;
}
