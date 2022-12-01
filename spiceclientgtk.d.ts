/**
 * SpiceClientGtk 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as SpiceClientGLib from './spiceclientglib';
import * as Atk from './atk';
import * as GdkPixbuf from './gdkpixbuf';
import * as GLib from './glib';

export namespace DisplayKeyEvent {
    export const $gtype: GObject.GType<DisplayKeyEvent>;
}

export enum DisplayKeyEvent {
    PRESS = 1,
    RELEASE = 2,
    CLICK = 3,
}

export namespace Display {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;

        channel_id: number;
        channelId: number;
        disable_inputs: boolean;
        disableInputs: boolean;
        grab_keyboard: boolean;
        grabKeyboard: boolean;
        grab_mouse: boolean;
        grabMouse: boolean;
        keypress_delay: number;
        keypressDelay: number;
        monitor_id: number;
        monitorId: number;
        only_downscale: boolean;
        onlyDownscale: boolean;
        ready: boolean;
        resize_guest: boolean;
        resizeGuest: boolean;
        scaling: boolean;
        session: SpiceClientGLib.Session;
        zoom_level: number;
        zoomLevel: number;
    }
}

export class Display extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Display>;

    constructor(properties?: Partial<Display.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Display.ConstructorProperties>, ...args: any[]): void;

    // Properties
    channel_id: number;
    channelId: number;
    disable_inputs: boolean;
    disableInputs: boolean;
    grab_keyboard: boolean;
    grabKeyboard: boolean;
    grab_mouse: boolean;
    grabMouse: boolean;
    keypress_delay: number;
    keypressDelay: number;
    monitor_id: number;
    monitorId: number;
    only_downscale: boolean;
    onlyDownscale: boolean;
    ready: boolean;
    resize_guest: boolean;
    resizeGuest: boolean;
    scaling: boolean;
    session: SpiceClientGLib.Session;
    zoom_level: number;
    zoomLevel: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'grab-keys-pressed', callback: (_source: this) => void): number;

    connect_after(signal: 'grab-keys-pressed', callback: (_source: this) => void): number;

    emit(signal: 'grab-keys-pressed'): void;

    connect(signal: 'keyboard-grab', callback: (_source: this, status: number) => void): number;

    connect_after(signal: 'keyboard-grab', callback: (_source: this, status: number) => void): number;

    emit(signal: 'keyboard-grab', status: number): void;

    connect(signal: 'mouse-grab', callback: (_source: this, status: number) => void): number;

    connect_after(signal: 'mouse-grab', callback: (_source: this, status: number) => void): number;

    emit(signal: 'mouse-grab', status: number): void;

    // Constructors

    static ['new'](session: SpiceClientGLib.Session, channel_id: number): Display;
    static ['new'](...args: never[]): never;

    static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display;

    // Members

    get_grab_keys(): GrabSequence;

    get_pixbuf(): GdkPixbuf.Pixbuf;

    mouse_ungrab(): void;

    send_keys(keyvals: number[], kind: DisplayKeyEvent): void;

    set_grab_keys(seq: GrabSequence): void;

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

    get_name(): string;

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

export namespace GtkSession {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auto_clipboard: boolean;
        autoClipboard: boolean;
        auto_usbredir: boolean;
        autoUsbredir: boolean;
        pointer_grabbed: boolean;
        pointerGrabbed: boolean;
        session: SpiceClientGLib.Session;
        sync_modifiers: boolean;
        syncModifiers: boolean;
    }
}

export class GtkSession extends GObject.Object {
    static $gtype: GObject.GType<GtkSession>;

    constructor(properties?: Partial<GtkSession.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GtkSession.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_clipboard: boolean;
    autoClipboard: boolean;
    auto_usbredir: boolean;
    autoUsbredir: boolean;
    pointer_grabbed: boolean;
    pointerGrabbed: boolean;
    session: SpiceClientGLib.Session;
    sync_modifiers: boolean;
    syncModifiers: boolean;

    // Members

    copy_to_guest(): void;

    paste_from_guest(): void;

    static get(session: SpiceClientGLib.Session): GtkSession;
}

export namespace UsbDeviceWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        device_format_string: string;
        deviceFormatString: string;
        session: SpiceClientGLib.Session;
    }
}

export class UsbDeviceWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<UsbDeviceWidget>;

    constructor(properties?: Partial<UsbDeviceWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UsbDeviceWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device_format_string: string;
    deviceFormatString: string;
    session: SpiceClientGLib.Session;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'connect-failed',
        callback: (_source: this, device: SpiceClientGLib.UsbDevice, error: GLib.Error) => void
    ): number;

    connect_after(
        signal: 'connect-failed',
        callback: (_source: this, device: SpiceClientGLib.UsbDevice, error: GLib.Error) => void
    ): number;

    emit(signal: 'connect-failed', device: SpiceClientGLib.UsbDevice, error: GLib.Error): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](session: SpiceClientGLib.Session, device_format_string?: string | null): UsbDeviceWidget;
    static ['new'](...args: never[]): never;

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

    get_name(): string;

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

    get_orientation(): Gtk.Orientation;

    set_orientation(orientation: Gtk.Orientation): void;
}

export class GrabSequence {
    static $gtype: GObject.GType<GrabSequence>;

    constructor(keysyms: number[]);
    constructor(copy: GrabSequence);

    // Constructors
    static ['new'](keysyms: number[]): GrabSequence;

    static new_from_string(str: string): GrabSequence;

    // Members
    as_string(): string;

    copy(): GrabSequence;

    free(): void;
}

export class UsbDeviceWidgetPrivate {
    static $gtype: GObject.GType<UsbDeviceWidgetPrivate>;

    constructor(copy: UsbDeviceWidgetPrivate);
}
