/**
 * GnomeBluetooth 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GModule from './gmodule';
import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GLib from './glib';
import * as Gio from './gio';

export const CHOOSER_COMBO_FIRST_DEVICE: string;
export const TYPE_AUDIO: number;
export const TYPE_INPUT: number;
export const UUID_A2DP: number;
export const UUID_A2DP_SINK: number;
export const UUID_A2DP_SOURCE: number;
export const UUID_AVRCP_CONTROL: number;
export const UUID_AVRCP_TARGET: number;
export const UUID_DUN: number;
export const UUID_FTP: number;
export const UUID_GENERIC_AUDIO: number;
export const UUID_GENERIC_NET: number;
export const UUID_HFP_AG: number;
export const UUID_HFP_HF: number;
export const UUID_HID: number;
export const UUID_HSP: number;
export const UUID_HSP_AG: number;
export const UUID_IRMC: number;
export const UUID_OPP: number;
export const UUID_PAN_GN: number;
export const UUID_PAN_NAP: number;
export const UUID_PAN_PANU: number;
export const UUID_PBAP: number;
export const UUID_PNP: number;
export const UUID_SAP: number;
export const UUID_SDP: number;
export const UUID_SPP: number;
export const UUID_VDP_SOURCE: number;

export function appearance_to_type(appearance: number): Type;

export function class_to_type(_class: number): Type;

export function send_to_address(address: string, alias: string): void;

export function type_to_filter_string(type: number): string;

export function type_to_string(type: number): string;

export function uuid_to_string(uuid: string): string;

export function verify_address(bdaddr: string): boolean;

export namespace Category {
    export const $gtype: GObject.GType<Category>;
}

export enum Category {
    ALL = 0,
    PAIRED = 1,
    TRUSTED = 2,
    NOT_PAIRED_OR_TRUSTED = 3,
    PAIRED_OR_TRUSTED = 4,
}

export namespace Column {
    export const $gtype: GObject.GType<Column>;
}

export enum Column {
    PROXY = 0,
    PROPERTIES = 1,
    ADDRESS = 2,
    ALIAS = 3,
    NAME = 4,
    TYPE = 5,
    ICON = 6,
    DEFAULT = 7,
    PAIRED = 8,
    TRUSTED = 9,
    CONNECTED = 10,
    DISCOVERABLE = 11,
    DISCOVERING = 12,
    LEGACYPAIRING = 13,
    POWERED = 14,
    SERVICES = 15,
    UUIDS = 16,
}

export namespace Status {
    export const $gtype: GObject.GType<Status>;
}

export enum Status {
    INVALID = 0,
    DISCONNECTED = 1,
    CONNECTED = 2,
    CONNECTING = 3,
    PLAYING = 4,
}

export namespace Type {
    export const $gtype: GObject.GType<Type>;
}

export enum Type {
    ANY = 1,
    PHONE = 2,
    MODEM = 4,
    COMPUTER = 8,
    NETWORK = 16,
    HEADSET = 32,
    HEADPHONES = 64,
    OTHER_AUDIO = 128,
    KEYBOARD = 256,
    MOUSE = 512,
    CAMERA = 1024,
    PRINTER = 2048,
    JOYPAD = 4096,
    TABLET = 8192,
    VIDEO = 16384,
    REMOTE_CONTROL = 32768,
    SCANNER = 65536,
    DISPLAY = 131072,
    WEARABLE = 262144,
    TOY = 524288,
}

export namespace Chooser {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        device_selected: string;
        deviceSelected: string;
        device_service_filter: string;
        deviceServiceFilter: string;
        device_type_filter: number;
        deviceTypeFilter: number;
        has_internal_device_filter: boolean;
        hasInternalDeviceFilter: boolean;
        show_connected: boolean;
        showConnected: boolean;
        show_device_category: boolean;
        showDeviceCategory: boolean;
        show_device_type: boolean;
        showDeviceType: boolean;
        show_device_type_column: boolean;
        showDeviceTypeColumn: boolean;
        show_pairing: boolean;
        showPairing: boolean;
        show_searching: boolean;
        showSearching: boolean;
    }
}

export class Chooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Chooser>;

    constructor(properties?: Partial<Chooser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Chooser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device_selected: string;
    deviceSelected: string;
    device_service_filter: string;
    deviceServiceFilter: string;
    device_type_filter: number;
    deviceTypeFilter: number;
    has_internal_device_filter: boolean;
    hasInternalDeviceFilter: boolean;
    show_connected: boolean;
    showConnected: boolean;
    show_device_category: boolean;
    showDeviceCategory: boolean;
    show_device_type: boolean;
    showDeviceType: boolean;
    show_device_type_column: boolean;
    showDeviceTypeColumn: boolean;
    show_pairing: boolean;
    showPairing: boolean;
    show_searching: boolean;
    showSearching: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'selected-device-activated', callback: (_source: this, address: string) => void): number;

    connect_after(signal: 'selected-device-activated', callback: (_source: this, address: string) => void): number;

    emit(signal: 'selected-device-activated', address: string): void;

    connect(signal: 'selected-device-changed', callback: (_source: this, address: string) => void): number;

    connect_after(signal: 'selected-device-changed', callback: (_source: this, address: string) => void): number;

    emit(signal: 'selected-device-changed', address: string): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): Chooser;
    static ['new'](...args: never[]): never;

    // Members

    dump_selected_device(): void;

    get_scrolled_window(): Gtk.Widget;

    get_selected_device(): string;

    get_selected_device_icon(): string;

    get_selected_device_info(field: string, value: any): boolean;

    get_selected_device_is_connected(): boolean;

    get_selected_device_name(): string;

    get_selected_device_type(): Type;

    start_discovery(): void;

    stop_discovery(): void;

    vfunc_selected_device_activated(address: string): void;

    vfunc_selected_device_changed(address: string): void;

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

export namespace ChooserButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;

        device: string;
        is_available: boolean;
        isAvailable: boolean;
    }
}

export class ChooserButton
    extends Gtk.Button
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
    static $gtype: GObject.GType<ChooserButton>;

    constructor(properties?: Partial<ChooserButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device: string;
    is_available: boolean;
    isAvailable: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'chooser-created', callback: (_source: this, chooser: GObject.Object) => void): number;

    connect_after(signal: 'chooser-created', callback: (_source: this, chooser: GObject.Object) => void): number;

    emit(signal: 'chooser-created', chooser: GObject.Object): void;

    // Implemented Properties

    action_name: string;
    actionName: string;
    action_target: GLib.Variant;
    actionTarget: GLib.Variant;
    related_action: Gtk.Action;
    relatedAction: Gtk.Action;
    use_action_appearance: boolean;
    useActionAppearance: boolean;

    // Constructors

    static ['new'](): ChooserButton;

    // Members

    available(): boolean;

    vfunc_chooser_created(chooser: Gtk.Widget): void;

    // Implemented Members

    get_action_name(): string | null;

    get_action_target_value(): GLib.Variant;

    set_action_name(action_name?: string | null): void;

    set_action_target_value(target_value?: GLib.Variant | null): void;

    set_detailed_action_name(detailed_action_name: string): void;

    vfunc_get_action_name(): string | null;

    vfunc_get_action_target_value(): GLib.Variant;

    vfunc_set_action_name(action_name?: string | null): void;

    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;

    do_set_related_action(action: Gtk.Action): void;

    get_related_action(): Gtk.Action;

    get_use_action_appearance(): boolean;

    set_related_action(action: Gtk.Action): void;

    set_use_action_appearance(use_appearance: boolean): void;

    sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_sync_action_properties(action?: Gtk.Action | null): void;

    vfunc_update(action: Gtk.Action, property_name: string): void;

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

export namespace ChooserCombo {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        chooser: Chooser;
        device: string;
    }
}

export class ChooserCombo extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ChooserCombo>;

    constructor(properties?: Partial<ChooserCombo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ChooserCombo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    chooser: Chooser;
    device: string;

    // Fields
    priv: ChooserComboPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'chooser-created', callback: (_source: this, chooser: GObject.Object) => void): number;

    connect_after(signal: 'chooser-created', callback: (_source: this, chooser: GObject.Object) => void): number;

    emit(signal: 'chooser-created', chooser: GObject.Object): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): ChooserCombo;
    static ['new'](...args: never[]): never;

    // Members

    vfunc_chooser_created(chooser: Gtk.Widget): void;

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

export namespace Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        default_adapter: string;
        defaultAdapter: string;
        default_adapter_discoverable: boolean;
        defaultAdapterDiscoverable: boolean;
        default_adapter_discovering: boolean;
        defaultAdapterDiscovering: boolean;
        default_adapter_name: string;
        defaultAdapterName: string;
        default_adapter_powered: boolean;
        defaultAdapterPowered: boolean;
    }
}

export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_adapter: string;
    defaultAdapter: string;
    default_adapter_discoverable: boolean;
    defaultAdapterDiscoverable: boolean;
    default_adapter_discovering: boolean;
    defaultAdapterDiscovering: boolean;
    default_adapter_name: string;
    defaultAdapterName: string;
    default_adapter_powered: boolean;
    defaultAdapterPowered: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'device-removed', callback: (_source: this, device: string) => void): number;

    connect_after(signal: 'device-removed', callback: (_source: this, device: string) => void): number;

    emit(signal: 'device-removed', device: string): void;

    // Constructors

    static ['new'](): Client;

    // Members

    connect_service(
        path: string,
        connect: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    connect_service_finish(res: Gio.AsyncResult): boolean;

    get_adapter_model(): Gtk.TreeModel;

    get_device_model(): Gtk.TreeModel;

    get_filter_model(func: Gtk.TreeModelFilterVisibleFunc): Gtk.TreeModel;

    get_model(): Gtk.TreeModel;
}

export namespace FilterWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        device_service_filter: string;
        deviceServiceFilter: string;
        device_type_filter: number;
        deviceTypeFilter: number;
        show_device_category: boolean;
        showDeviceCategory: boolean;
        show_device_type: boolean;
        showDeviceType: boolean;
    }
}

export class FilterWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<FilterWidget>;

    constructor(properties?: Partial<FilterWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FilterWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device_service_filter: string;
    deviceServiceFilter: string;
    device_type_filter: number;
    deviceTypeFilter: number;
    show_device_category: boolean;
    showDeviceCategory: boolean;
    show_device_type: boolean;
    showDeviceType: boolean;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): FilterWidget;
    static ['new'](...args: never[]): never;

    // Members

    bind_filter(chooser: Chooser): void;

    set_title(title: string): void;

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

export namespace SettingsWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
    }
}

export class SettingsWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<SettingsWidget>;

    constructor(properties?: Partial<SettingsWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SettingsWidget.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'adapter-status-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'adapter-status-changed', callback: (_source: this) => void): number;

    emit(signal: 'adapter-status-changed'): void;

    connect(signal: 'panel-changed', callback: (_source: this, panel: string) => void): number;

    connect_after(signal: 'panel-changed', callback: (_source: this, panel: string) => void): number;

    emit(signal: 'panel-changed', panel: string): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): SettingsWidget;
    static ['new'](...args: never[]): never;

    // Members

    get_default_adapter_powered(): boolean;

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

export class ChooserComboPrivate {
    static $gtype: GObject.GType<ChooserComboPrivate>;

    constructor(copy: ChooserComboPrivate);
}
