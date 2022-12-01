/**
 * NMA 1.0
 *
 * Generated from 1.8.30
 */

import * as Gtk from "./gtk";
import * as NM from "./nm";
import * as Atk from "./atk";
import * as Gio from "./gio";
import * as GObject from "./gobject";
import * as cairo from "./cairo";
import * as GLib from "./glib";

export const BAR_CODE_SIZE: string;
export const BAR_CODE_TEXT: string;
export const BAR_CODE_WIDGET_CONNECTION: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): [boolean, string, string];

export function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NM.SettingSecretFlags;

export function utils_setup_password_storage(
    passwd_entry: Gtk.Widget,
    initial_flags: NM.SettingSecretFlags,
    setting: NM.Setting,
    password_flags_name: string,
    with_not_required: boolean,
    ask_mode: boolean
): void;

export function utils_update_password_storage(
    passwd_entry: Gtk.Widget,
    secret_flags: NM.SettingSecretFlags,
    setting: NM.Setting,
    password_flags_name: string
): void;

export type MobileWizardCallback = (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod) => void;

export namespace CertChooserFlags {
    export const $gtype: GObject.GType<CertChooserFlags>;
}

export enum CertChooserFlags {
    NONE = 0,
    CERT = 1,
    PASSWORDS = 2,
    PEM = 4,
}

export namespace MobileFamily {
    export const $gtype: GObject.GType<MobileFamily>;
}

export enum MobileFamily {
    UNKNOWN = 0,
    "3GPP" = 1,
    CDMA = 2,
}

export module BarCode {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        size: number;
        text: string;
    }
}

export class BarCode extends GObject.Object {
    static $gtype: GObject.GType<BarCode>;

    constructor(properties?: Partial<BarCode.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BarCode.ConstructorProperties>, ...args: any[]): void;

    // Properties
    size: number;
    text: string;

    // Constructors

    static ["new"](text: string): BarCode;

    // Members

    draw(cr: cairo.Context): void;

    get_size(): number;

    set_text(text: string): void;
}

export module BarCodeWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        connection: NM.Connection;
    }
}

export class BarCodeWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<BarCodeWidget>;

    constructor(properties?: Partial<BarCodeWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BarCodeWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: NM.Connection;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ["new"](connection: NM.Connection): BarCodeWidget;
    static ["new"](...args: never[]): never;

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

export module CertChooser {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        flags: number;
        title: string;
    }
}

export class CertChooser extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<CertChooser>;

    constructor(properties?: Partial<CertChooser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CertChooser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: number;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "cert-password-validate", callback: (_source: this) => GLib.Error): number;

    connect_after(signal: "cert-password-validate", callback: (_source: this) => GLib.Error): number;

    emit(signal: "cert-password-validate"): void;

    connect(signal: "cert-validate", callback: (_source: this) => GLib.Error): number;

    connect_after(signal: "cert-validate", callback: (_source: this) => GLib.Error): number;

    emit(signal: "cert-validate"): void;

    connect(signal: "changed", callback: (_source: this) => void): number;

    connect_after(signal: "changed", callback: (_source: this) => void): number;

    emit(signal: "changed"): void;

    connect(signal: "key-password-validate", callback: (_source: this) => GLib.Error): number;

    connect_after(signal: "key-password-validate", callback: (_source: this) => GLib.Error): number;

    emit(signal: "key-password-validate"): void;

    connect(signal: "key-validate", callback: (_source: this) => GLib.Error): number;

    connect_after(signal: "key-validate", callback: (_source: this) => GLib.Error): number;

    emit(signal: "key-validate"): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ["new"](title: string, flags: CertChooserFlags): CertChooser;
    static ["new"](...args: never[]): never;

    // Members

    add_to_size_group(group: Gtk.SizeGroup): void;

    get_cert(): [string | null, NM.Setting8021xCKScheme];

    get_cert_password(): string;

    get_cert_password_flags(): NM.SettingSecretFlags;

    get_cert_uri(): string | null;

    get_key(): [string | null, NM.Setting8021xCKScheme];

    get_key_password(): string;

    get_key_password_flags(): NM.SettingSecretFlags;

    get_key_uri(): string | null;

    set_cert(value: string, scheme: NM.Setting8021xCKScheme): void;

    set_cert_password(password: string): void;

    set_cert_uri(uri: string): void;

    set_key(value: string, scheme: NM.Setting8021xCKScheme): void;

    set_key_password(password: string): void;

    set_key_uri(uri: string): void;

    setup_cert_password_storage(
        initial_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string,
        with_not_required: boolean,
        ask_mode: boolean
    ): void;

    setup_key_password_storage(
        initial_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string,
        with_not_required: boolean,
        ask_mode: boolean
    ): void;

    update_cert_password_storage(
        secret_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string
    ): void;

    update_key_password_storage(
        secret_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string
    ): void;

    validate(): boolean;

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

export module MobileProvidersDatabase {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        country_codes: string;
        countryCodes: string;
        service_providers: string;
        serviceProviders: string;
    }
}

export class MobileProvidersDatabase
    extends GObject.Object
    implements Gio.AsyncInitable<MobileProvidersDatabase>, Gio.Initable {
    static $gtype: GObject.GType<MobileProvidersDatabase>;

    constructor(properties?: Partial<MobileProvidersDatabase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MobileProvidersDatabase.ConstructorProperties>, ...args: any[]): void;

    // Properties
    country_codes: string;
    countryCodes: string;
    service_providers: string;
    serviceProviders: string;

    // Fields
    priv: MobileProvidersDatabasePrivate;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
    static new_finish(...args: never[]): never;

    static new_sync(
        country_codes?: string | null,
        service_providers?: string | null,
        cancellable?: Gio.Cancellable | null
    ): MobileProvidersDatabase;

    // Members

    dump(): void;

    get_countries(): GLib.HashTable<string, CountryInfo>;

    lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;

    lookup_cdma_sid(sid: number): MobileProvider;

    lookup_country(country_code: string): CountryInfo;

    static new(
        country_codes?: string | null,
        service_providers?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null
    ): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export module MobileWizard {
    export interface ConstructorProperties extends Gtk.Assistant.ConstructorProperties {
        [key: string]: any;
    }
}

export class MobileWizard extends Gtk.Assistant implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<MobileWizard>;

    constructor(properties?: Partial<MobileWizard.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MobileWizard.ConstructorProperties>, ...args: any[]): void;

    // Members

    destroy(): void;

    present(): void;

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

export module VpnPasswordDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;
    }
}

export class VpnPasswordDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<VpnPasswordDialog>;

    constructor(properties?: Partial<VpnPasswordDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VpnPasswordDialog.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](title: string, message: string, password: string): VpnPasswordDialog;
    static ["new"](...args: never[]): never;

    // Members

    focus_password(): void;

    focus_password_secondary(): void;

    focus_password_ternary(): void;

    get_password(): string;

    get_password_secondary(): string;

    get_password_ternary(): string;

    run_and_block(): boolean;

    set_password(password: string): void;

    set_password_label(label: string): void;

    set_password_secondary(password_secondary: string): void;

    set_password_secondary_label(label: string): void;

    set_password_ternary(password_ternary: string): void;

    set_password_ternary_label(label: string): void;

    set_show_password(show: boolean): void;

    set_show_password_secondary(show: boolean): void;

    set_show_password_ternary(show: boolean): void;

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

export module WifiDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;
    }
}

export class WifiDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WifiDialog>;

    constructor(properties?: Partial<WifiDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WifiDialog.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        client: NM.Client,
        connection: NM.Connection,
        device: NM.Device,
        ap: NM.AccessPoint,
        secrets_only: boolean
    ): WifiDialog;
    static ["new"](...args: never[]): never;

    static new_for_create(client: NM.Client): WifiDialog;

    static new_for_hidden(client: NM.Client): WifiDialog;

    static new_for_other(client: NM.Client): WifiDialog;

    static new_for_secrets(
        client: NM.Client,
        connection: NM.Connection,
        secrets_setting_name: string,
        secrets_hints: string
    ): WifiDialog;

    // Members

    get_connection(): [NM.Connection, NM.Device, NM.AccessPoint];

    get_nag_ignored(): boolean;

    nag_user(): Gtk.Widget;

    set_nag_ignored(ignored: boolean): void;

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

export module Ws8021x {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        is_editor: boolean;
        isEditor: boolean;
        secrets_hints: string[];
        secretsHints: string[];
    }
}

export class Ws8021x extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<Ws8021x>;

    constructor(properties?: Partial<Ws8021x.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Ws8021x.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_editor: boolean;
    isEditor: boolean;
    secrets_hints: string[];
    secretsHints: string[];

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](connection: NM.Connection, is_editor: boolean, secrets_only: boolean): Ws8021x;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export module WsDynamicWep {
    export interface ConstructorProperties extends Ws8021x.ConstructorProperties {
        [key: string]: any;
    }
}

export class WsDynamicWep extends Ws8021x implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<WsDynamicWep>;

    constructor(properties?: Partial<WsDynamicWep.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WsDynamicWep.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](connection: NM.Connection, is_editor: boolean, secrets_only: boolean): WsDynamicWep;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export module WsLeap {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;
    }
}

export class WsLeap extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<WsLeap>;

    constructor(properties?: Partial<WsLeap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WsLeap.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](connection: NM.Connection, secrets_only: boolean): WsLeap;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export module WsSae {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;
    }
}

export class WsSae extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<WsSae>;

    constructor(properties?: Partial<WsSae.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WsSae.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](connection: NM.Connection, secrets_only: boolean): WsSae;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export module WsWepKey {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        adhoc_create: boolean;
        adhocCreate: boolean;
        key_type: number;
        keyType: number;
    }
}

export class WsWepKey extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<WsWepKey>;

    constructor(properties?: Partial<WsWepKey.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WsWepKey.ConstructorProperties>, ...args: any[]): void;

    // Properties
    adhoc_create: boolean;
    adhocCreate: boolean;
    key_type: number;
    keyType: number;

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](
        connection: NM.Connection,
        type: NM.WepKeyType,
        adhoc_create: boolean,
        secrets_only: boolean
    ): WsWepKey;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export module WsWpaEap {
    export interface ConstructorProperties extends Ws8021x.ConstructorProperties {
        [key: string]: any;
    }
}

export class WsWpaEap extends Ws8021x implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<WsWpaEap>;

    constructor(properties?: Partial<WsWpaEap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WsWpaEap.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](
        connection: NM.Connection,
        is_editor: boolean,
        secrets_only: boolean,
        secrets_hints: string
    ): WsWpaEap;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export module WsWpaPsk {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;
    }
}

export class WsWpaPsk extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Ws {
    static $gtype: GObject.GType<WsWpaPsk>;

    constructor(properties?: Partial<WsWpaPsk.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WsWpaPsk.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    orientation: Gtk.Orientation;
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Constructors

    static ["new"](connection: NM.Connection, secrets_only: boolean): WsWpaPsk;
    static ["new"](...args: never[]): never;

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

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export class CountryInfo {
    static $gtype: GObject.GType<CountryInfo>;

    constructor(copy: CountryInfo);

    // Members
    get_country_code(): string;

    get_country_name(): string;

    get_providers(): MobileProvider[];

    ref(): CountryInfo;

    unref(): void;
}

export class MobileAccessMethod {
    static $gtype: GObject.GType<MobileAccessMethod>;

    constructor(copy: MobileAccessMethod);

    // Members
    get_3gpp_apn(): string;

    get_dns(): string[];

    get_family(): MobileFamily;

    get_gateway(): string;

    get_name(): string;

    get_password(): string;

    get_username(): string;

    ref(): MobileAccessMethod;

    unref(): void;
}

export class MobileProvider {
    static $gtype: GObject.GType<MobileProvider>;

    constructor(copy: MobileProvider);

    // Members
    get_3gpp_mcc_mnc(): string[];

    get_cdma_sid(): number[];

    get_methods(): MobileAccessMethod[];

    get_name(): string;

    ref(): MobileProvider;

    unref(): void;
}

export class MobileProvidersDatabasePrivate {
    static $gtype: GObject.GType<MobileProvidersDatabasePrivate>;

    constructor(copy: MobileProvidersDatabasePrivate);
}

export class MobileWizardAccessMethod {
    static $gtype: GObject.GType<MobileWizardAccessMethod>;

    constructor(copy: MobileWizardAccessMethod);

    // Fields
    provider_name: string;
    plan_name: string;
    devtype: NM.DeviceModemCapabilities;
    username: string;
    password: string;
    gsm_apn: string;
}

export interface WsNamespace {
    $gtype: GObject.GType<Ws>;
    prototype: WsPrototype;
}

export type Ws = WsPrototype;

export interface WsPrototype extends GObject.Object {
    // Properties
    connection: NM.Connection;
    secrets_only: boolean;
    secretsOnly: boolean;

    // Members

    add_to_size_group(group: Gtk.SizeGroup): void;

    adhoc_compatible(): boolean;

    fill_connection(connection: NM.Connection): void;

    hotspot_compatible(): boolean;

    update_secrets(connection: NM.Connection): void;

    validate(): boolean;
}

export const Ws: WsNamespace;
