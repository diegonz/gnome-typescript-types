/**
 * ClutterGst 3.0
 *
 * Generated from 3.0.27
 */

import * as Clutter from './clutter';
import * as Cogl from './cogl';
import * as GObject from './gobject';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gst from './gst';
import * as GstAudio from './gstaudio';
import * as GstBase from './gstbase';
import * as GstPbutils from './gstpbutils';
import * as GstVideo from './gstvideo';
import * as GLib from './glib';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION: number;
export const VERSION_HEX: number;
export const VERSION_S: string;

export function create_video_sink(): Gst.Element;

export function init(argv?: string[] | null): [Clutter.InitError, string[] | null];

export function init_with_args(
    argv: string[] | null,
    parameter_string: string,
    entries: GLib.OptionEntry,
    translation_domain: string
): [Clutter.InitError, string[] | null];

export namespace BufferingMode {
    export const $gtype: GObject.GType<BufferingMode>;
}

export enum BufferingMode {
    STREAM = 0,
    DOWNLOAD = 1,
}

export namespace SeekFlags {
    export const $gtype: GObject.GType<SeekFlags>;
}

export enum SeekFlags {
    NONE = 0,
    ACCURATE = 1,
}

export namespace Aspectratio {
    export interface ConstructorProperties extends Content.ConstructorProperties {
        [key: string]: any;

        fill_allocation: boolean;
        fillAllocation: boolean;
        paint_borders: boolean;
        paintBorders: boolean;
    }
}

export class Aspectratio extends Content implements Clutter.Content {
    static $gtype: GObject.GType<Aspectratio>;

    constructor(properties?: Partial<Aspectratio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Aspectratio.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fill_allocation: boolean;
    fillAllocation: boolean;
    paint_borders: boolean;
    paintBorders: boolean;

    // Members

    static new(): Clutter.Content;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];

    invalidate(): void;

    vfunc_attached(actor: Clutter.Actor): void;

    vfunc_detached(actor: Clutter.Actor): void;

    vfunc_get_preferred_size(): [boolean, number, number];

    vfunc_invalidate(): void;

    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
}

export namespace Camera {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        device: CameraDevice;
    }
}

export class Camera extends GObject.Object implements Player {
    static $gtype: GObject.GType<Camera>;

    constructor(properties?: Partial<Camera.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Camera.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device: CameraDevice;

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

    connect(signal: 'ready-for-capture', callback: (_source: this, ready: boolean) => void): number;

    connect_after(signal: 'ready-for-capture', callback: (_source: this, ready: boolean) => void): number;

    emit(signal: 'ready-for-capture', ready: boolean): void;

    connect(signal: 'video-saved', callback: (_source: this) => void): number;

    connect_after(signal: 'video-saved', callback: (_source: this) => void): number;

    emit(signal: 'video-saved'): void;

    // Implemented Properties

    audio_volume: number;
    audioVolume: number;
    idle: boolean;
    playing: boolean;

    // Constructors

    static ['new'](): Camera;

    // Members

    get_brightness(cur_value: number): boolean;

    get_brightness_range(min_value: number, max_value: number, default_value: number): boolean;

    get_camera_device(): CameraDevice;

    get_color_balance_property(property: string, cur_value: number): boolean;

    get_color_balance_property_range(
        property: string,
        min_value: number,
        max_value: number,
        default_value: number
    ): boolean;

    get_contrast(cur_value: number): boolean;

    get_contrast_range(min_value: number, max_value: number, default_value: number): boolean;

    get_filter(): Gst.Element;

    get_gamma(cur_value: number): boolean;

    get_gamma_range(min_value: number, max_value: number, default_value: number): boolean;

    get_hue(cur_value: number): boolean;

    get_hue_range(min_value: number, max_value: number, default_value: number): boolean;

    get_saturation(cur_value: number): boolean;

    get_saturation_range(min_value: number, max_value: number, default_value: number): boolean;

    is_ready_for_capture(): boolean;

    is_recording_video(): boolean;

    remove_filter(): boolean;

    set_brightness(value: number): boolean;

    set_camera_device(device: CameraDevice): boolean;

    set_color_balance_property(property: string, value: number): boolean;

    set_contrast(value: number): boolean;

    set_filter(filter: Gst.Element): boolean;

    set_gamma(value: number): boolean;

    set_hue(value: number): boolean;

    set_photo_profile(profile: GstPbutils.EncodingProfile): void;

    set_saturation(value: number): boolean;

    set_video_profile(profile: GstPbutils.EncodingProfile): void;

    start_video_recording(filename: string): boolean;

    stop_video_recording(): void;

    supports_color_balance(): boolean;

    supports_gamma_correction(): boolean;

    take_photo(filename: string): boolean;

    take_photo_pixbuf(): boolean;

    vfunc_photo_saved(): void;

    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void;

    vfunc_ready_for_capture(ready: boolean): void;

    vfunc_video_saved(): void;

    // Implemented Members

    get_audio_volume(): number;

    get_frame(): Frame;

    get_idle(): boolean;

    get_pipeline(): Gst.Element;

    get_playing(): boolean;

    get_video_sink(): VideoSink;

    set_audio_volume(volume: number): void;

    set_playing(playing: boolean): void;

    vfunc_eos(): void;

    vfunc_error(error: GLib.Error): void;

    vfunc_get_audio_volume(): number;

    vfunc_get_frame(): Frame;

    vfunc_get_idle(): boolean;

    vfunc_get_pipeline(): Gst.Element;

    vfunc_get_playing(): boolean;

    vfunc_get_video_sink(): VideoSink;

    vfunc_new_frame(frame: Frame): void;

    vfunc_ready(): void;

    vfunc_set_audio_volume(volume: number): void;

    vfunc_set_playing(playing: boolean): void;

    vfunc_size_change(width: number, height: number): void;
}

export namespace CameraDevice {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        element_factory: Gst.ElementFactory;
        elementFactory: Gst.ElementFactory;
        name: string;
        node: string;
    }
}

export class CameraDevice extends GObject.Object {
    static $gtype: GObject.GType<CameraDevice>;

    constructor(properties?: Partial<CameraDevice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CameraDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    element_factory: Gst.ElementFactory;
    elementFactory: Gst.ElementFactory;
    name: string;
    node: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'capture-resolution-changed',
        callback: (_source: this, width: number, height: number) => void
    ): number;

    connect_after(
        signal: 'capture-resolution-changed',
        callback: (_source: this, width: number, height: number) => void
    ): number;

    emit(signal: 'capture-resolution-changed', width: number, height: number): void;

    // Members

    get_capture_resolution(): [number, number];

    get_name(): string;

    get_node(): string;

    get_supported_resolutions(): VideoResolution[];

    set_capture_resolution(width: number, height: number): void;

    vfunc_capture_resolution_changed(width: number, height: number): void;
}

export namespace CameraManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CameraManager extends GObject.Object {
    static $gtype: GObject.GType<CameraManager>;

    constructor(properties?: Partial<CameraManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CameraManager.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'camera-added', callback: (_source: this, camera_device: CameraDevice) => void): number;

    connect_after(signal: 'camera-added', callback: (_source: this, camera_device: CameraDevice) => void): number;

    emit(signal: 'camera-added', camera_device: CameraDevice): void;

    connect(signal: 'camera-removed', callback: (_source: this, camera_device: CameraDevice) => void): number;

    connect_after(signal: 'camera-removed', callback: (_source: this, camera_device: CameraDevice) => void): number;

    emit(signal: 'camera-removed', camera_device: CameraDevice): void;

    // Members

    get_camera_devices(): CameraDevice[];

    static get_default(): CameraManager;
}

export namespace Content {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        frame: Frame;
        paint_frame: boolean;
        paintFrame: boolean;
        paint_overlays: boolean;
        paintOverlays: boolean;
        player: GObject.Object;
        sink: VideoSink;
    }
}

export class Content extends GObject.Object implements Clutter.Content {
    static $gtype: GObject.GType<Content>;

    constructor(properties?: Partial<Content.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Content.ConstructorProperties>, ...args: any[]): void;

    // Properties
    frame: Frame;
    paint_frame: boolean;
    paintFrame: boolean;
    paint_overlays: boolean;
    paintOverlays: boolean;
    player: GObject.Object;
    sink: VideoSink;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'size-change', callback: (_source: this, width: number, height: number) => void): number;

    connect_after(signal: 'size-change', callback: (_source: this, width: number, height: number) => void): number;

    emit(signal: 'size-change', width: number, height: number): void;

    // Members

    get_frame(): Frame;

    get_overlays(): Overlays;

    get_player(): Player;

    get_sink(): VideoSink;

    set_frame(frame: Frame): void;

    set_player(player: Player): void;

    set_sink(sink: VideoSink): void;

    vfunc_has_painting_content(): boolean;

    static new(): Clutter.Content;

    static new_with_sink(sink: VideoSink): Clutter.Content;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];

    invalidate(): void;

    vfunc_attached(actor: Clutter.Actor): void;

    vfunc_detached(actor: Clutter.Actor): void;

    vfunc_get_preferred_size(): [boolean, number, number];

    vfunc_invalidate(): void;

    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
}

export namespace Crop {
    export interface ConstructorProperties extends Content.ConstructorProperties {
        [key: string]: any;

        cull_backface: boolean;
        cullBackface: boolean;
        input_region: Box;
        inputRegion: Box;
        output_region: Box;
        outputRegion: Box;
        paint_borders: boolean;
        paintBorders: boolean;
    }
}

export class Crop extends Content implements Clutter.Content {
    static $gtype: GObject.GType<Crop>;

    constructor(properties?: Partial<Crop.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Crop.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cull_backface: boolean;
    cullBackface: boolean;
    input_region: Box;
    inputRegion: Box;
    output_region: Box;
    outputRegion: Box;
    paint_borders: boolean;
    paintBorders: boolean;

    // Constructors

    static ['new'](): Crop;
    static ['new'](...args: never[]): never;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];

    invalidate(): void;

    vfunc_attached(actor: Clutter.Actor): void;

    vfunc_detached(actor: Clutter.Actor): void;

    vfunc_get_preferred_size(): [boolean, number, number];

    vfunc_invalidate(): void;

    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
}

export namespace Playback {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        audio_stream: number;
        audioStream: number;
        audio_streams: any;
        audioStreams: any;
        buffer_fill: number;
        bufferFill: number;
        can_seek: boolean;
        canSeek: boolean;
        duration: number;
        in_seek: boolean;
        inSeek: boolean;
        progress: number;
        seek_flags: SeekFlags;
        seekFlags: SeekFlags;
        subtitle_font_name: string;
        subtitleFontName: string;
        subtitle_track: number;
        subtitleTrack: number;
        subtitle_tracks: any;
        subtitleTracks: any;
        subtitle_uri: string;
        subtitleUri: string;
        uri: string;
        user_agent: string;
        userAgent: string;
    }
}

export class Playback extends GObject.Object implements Player {
    static $gtype: GObject.GType<Playback>;

    constructor(properties?: Partial<Playback.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Playback.ConstructorProperties>, ...args: any[]): void;

    // Properties
    audio_stream: number;
    audioStream: number;
    audio_streams: any;
    audioStreams: any;
    buffer_fill: number;
    bufferFill: number;
    can_seek: boolean;
    canSeek: boolean;
    duration: number;
    in_seek: boolean;
    inSeek: boolean;
    progress: number;
    seek_flags: SeekFlags;
    seekFlags: SeekFlags;
    subtitle_font_name: string;
    subtitleFontName: string;
    subtitle_track: number;
    subtitleTrack: number;
    subtitle_tracks: any;
    subtitleTracks: any;
    subtitle_uri: string;
    subtitleUri: string;
    uri: string;
    user_agent: string;
    userAgent: string;

    // Fields
    priv: PlaybackPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'should-buffer', callback: (_source: this, query: Gst.Query) => boolean): number;

    connect_after(signal: 'should-buffer', callback: (_source: this, query: Gst.Query) => boolean): number;

    emit(signal: 'should-buffer', query: Gst.Query): void;

    // Implemented Properties

    audio_volume: number;
    audioVolume: number;
    idle: boolean;
    playing: boolean;

    // Constructors

    static ['new'](): Playback;

    // Members

    get_audio_stream(): number;

    get_audio_streams(): string[];

    get_buffer_duration(): number;

    get_buffer_fill(): number;

    get_buffer_size(): number;

    get_buffering_mode(): BufferingMode;

    get_duration(): number;

    get_in_seek(): boolean;

    get_position(): number;

    get_progress(): number;

    get_seek_flags(): SeekFlags;

    get_subtitle_font_name(): string;

    get_subtitle_track(): number;

    get_subtitle_tracks(): string[];

    get_subtitle_uri(): string;

    get_uri(): string;

    get_user_agent(): string;

    is_live_media(): boolean;

    set_audio_stream(index_: number): void;

    set_buffer_duration(duration: number): void;

    set_buffer_size(size: number): void;

    set_buffering_mode(mode: BufferingMode): void;

    set_filename(filename: string): void;

    set_progress(progress: number): void;

    set_seek_flags(flags: SeekFlags): void;

    set_subtitle_font_name(font_name: string): void;

    set_subtitle_track(index_: number): void;

    set_subtitle_uri(uri: string): void;

    set_uri(uri: string): void;

    set_user_agent(user_agent: string): void;

    vfunc_should_buffer(query: Gst.Query): boolean;

    // Implemented Members

    get_audio_volume(): number;

    get_frame(): Frame;

    get_idle(): boolean;

    get_pipeline(): Gst.Element;

    get_playing(): boolean;

    get_video_sink(): VideoSink;

    set_audio_volume(volume: number): void;

    set_playing(playing: boolean): void;

    vfunc_eos(): void;

    vfunc_error(error: GLib.Error): void;

    vfunc_get_audio_volume(): number;

    vfunc_get_frame(): Frame;

    vfunc_get_idle(): boolean;

    vfunc_get_pipeline(): Gst.Element;

    vfunc_get_playing(): boolean;

    vfunc_get_video_sink(): VideoSink;

    vfunc_new_frame(frame: Frame): void;

    vfunc_ready(): void;

    vfunc_set_audio_volume(volume: number): void;

    vfunc_set_playing(playing: boolean): void;

    vfunc_size_change(width: number, height: number): void;
}

export namespace VideoSink {
    export interface ConstructorProperties extends GstVideo.VideoSink.ConstructorProperties {
        [key: string]: any;

        update_priority: number;
        updatePriority: number;
    }
}

export class VideoSink extends GstVideo.VideoSink implements GstVideo.ColorBalance, GstVideo.Navigation {
    static $gtype: GObject.GType<VideoSink>;

    constructor(properties?: Partial<VideoSink.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VideoSink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    update_priority: number;
    updatePriority: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'new-frame', callback: (_source: this) => void): number;

    connect_after(signal: 'new-frame', callback: (_source: this) => void): number;

    emit(signal: 'new-frame'): void;

    connect(signal: 'new-overlays', callback: (_source: this) => void): number;

    connect_after(signal: 'new-overlays', callback: (_source: this) => void): number;

    emit(signal: 'new-overlays'): void;

    connect(signal: 'pipeline-ready', callback: (_source: this) => void): number;

    connect_after(signal: 'pipeline-ready', callback: (_source: this) => void): number;

    emit(signal: 'pipeline-ready'): void;

    // Constructors

    static ['new'](): VideoSink;

    // Members

    get_frame(): Frame;

    get_overlays(): Overlays;

    is_ready(): boolean;

    vfunc_new_frame(): void;

    vfunc_new_overlays(): void;

    vfunc_pipeline_ready(): void;

    // Implemented Members

    get_balance_type(): GstVideo.ColorBalanceType;

    get_value(channel: GstVideo.ColorBalanceChannel): number;
    get_value(...args: never[]): never;

    list_channels(): GstVideo.ColorBalanceChannel[];

    set_value(channel: GstVideo.ColorBalanceChannel, value: number): void;

    value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void;

    vfunc_get_balance_type(): GstVideo.ColorBalanceType;

    vfunc_get_value(channel: GstVideo.ColorBalanceChannel): number;

    vfunc_list_channels(): GstVideo.ColorBalanceChannel[];

    vfunc_set_value(channel: GstVideo.ColorBalanceChannel, value: number): void;

    vfunc_value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void;

    send_command(command: GstVideo.NavigationCommand): void;

    send_event(structure: Gst.Structure): void;
    send_event(...args: never[]): never;

    send_key_event(event: string, key: string): void;

    send_mouse_event(event: string, button: number, x: number, y: number): void;

    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void;

    vfunc_send_event(structure: Gst.Structure): void;
    vfunc_send_event(...args: never[]): never;
}

export class AspectratioPrivate {
    static $gtype: GObject.GType<AspectratioPrivate>;

    constructor(copy: AspectratioPrivate);
}

export class Box {
    static $gtype: GObject.GType<Box>;

    constructor(
        properties?: Partial<{
            x1?: number;
            y1?: number;
            x2?: number;
            y2?: number;
        }>
    );

    constructor(copy: Box);

    // Fields
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    // Members
    get_height(): number;

    get_width(): number;
}

export class CameraDevicePrivate {
    static $gtype: GObject.GType<CameraDevicePrivate>;

    constructor(copy: CameraDevicePrivate);
}

export class CameraManagerPrivate {
    static $gtype: GObject.GType<CameraManagerPrivate>;

    constructor(copy: CameraManagerPrivate);
}

export class CameraPrivate {
    static $gtype: GObject.GType<CameraPrivate>;

    constructor(copy: CameraPrivate);
}

export class ContentPrivate {
    static $gtype: GObject.GType<ContentPrivate>;

    constructor(copy: ContentPrivate);
}

export class CropPrivate {
    static $gtype: GObject.GType<CropPrivate>;

    constructor(copy: CropPrivate);
}

export class Frame {
    static $gtype: GObject.GType<Frame>;

    constructor(
        properties?: Partial<{
            resolution?: VideoResolution;
        }>
    );

    constructor(copy: Frame);

    // Fields
    resolution: VideoResolution;
}

export class Overlay {
    static $gtype: GObject.GType<Overlay>;

    constructor(
        properties?: Partial<{
            position?: Box;
        }>
    );

    constructor(copy: Overlay);

    // Fields
    position: Box;
}

export class Overlays {
    static $gtype: GObject.GType<Overlays>;

    constructor(copy: Overlays);

    // Fields
    overlays: any[];
}

export class PlaybackPrivate {
    static $gtype: GObject.GType<PlaybackPrivate>;

    constructor(copy: PlaybackPrivate);
}

export class PlayerIfacePrivate {
    static $gtype: GObject.GType<PlayerIfacePrivate>;

    constructor(copy: PlayerIfacePrivate);
}

export class VideoResolution {
    static $gtype: GObject.GType<VideoResolution>;

    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
            par_n?: number;
            par_d?: number;
        }>
    );

    constructor(copy: VideoResolution);

    // Fields
    width: number;
    height: number;
    par_n: number;
    par_d: number;
}

export class VideoSinkPrivate {
    static $gtype: GObject.GType<VideoSinkPrivate>;

    constructor(copy: VideoSinkPrivate);
}

export interface PlayerNamespace {
    $gtype: GObject.GType<Player>;
    prototype: PlayerPrototype;
}

export type Player = PlayerPrototype;

export interface PlayerPrototype extends GObject.Object {
    // Properties
    audio_volume: number;
    audioVolume: number;
    idle: boolean;
    playing: boolean;

    // Members

    get_audio_volume(): number;

    get_frame(): Frame;

    get_idle(): boolean;

    get_pipeline(): Gst.Element;

    get_playing(): boolean;

    get_video_sink(): VideoSink;

    set_audio_volume(volume: number): void;

    set_playing(playing: boolean): void;

    vfunc_eos(): void;

    vfunc_error(error: GLib.Error): void;

    vfunc_get_audio_volume(): number;

    vfunc_get_frame(): Frame;

    vfunc_get_idle(): boolean;

    vfunc_get_pipeline(): Gst.Element;

    vfunc_get_playing(): boolean;

    vfunc_get_video_sink(): VideoSink;

    vfunc_new_frame(frame: Frame): void;

    vfunc_ready(): void;

    vfunc_set_audio_volume(volume: number): void;

    vfunc_set_playing(playing: boolean): void;

    vfunc_size_change(width: number, height: number): void;
}

export const Player: PlayerNamespace;
