/**
 * EDataServerUI 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as ECal from './ecal';
import * as EDataServer from './edataserver';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Soup from './soup';
import * as Atk from './atk';
import * as GLib from './glib';
import * as Gdk from './gdk';

export function buffer_tagger_connect(textview: Gtk.TextView): void;

export function buffer_tagger_disconnect(textview: Gtk.TextView): void;

export function buffer_tagger_update_tags(textview: Gtk.TextView): void;

export function trust_prompt_describe_certificate_errors(flags: Gio.TlsCertificateFlags): string;

export function trust_prompt_run_for_source(
    parent: Gtk.Window,
    source: EDataServer.Source,
    certificate_pem: string,
    certificate_errors: Gio.TlsCertificateFlags,
    error_text: string | null,
    allow_source_save: boolean,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gtk.Window> | null
): void;

export function trust_prompt_run_for_source_finish(
    source: EDataServer.Source,
    result: Gio.AsyncResult,
    response: EDataServer.TrustPromptResponse
): boolean;

export function trust_prompt_run_modal(
    parent: Gtk.Window,
    source_extension: string | null,
    source_display_name: string | null,
    host: string,
    certificate_pem: string,
    certificate_errors: Gio.TlsCertificateFlags,
    error_text?: string | null
): EDataServer.TrustPromptResponse;

export function webdav_discover_content_get_base_url(content: Gtk.Widget): string;

export function webdav_discover_content_get_multiselect(content: Gtk.Widget): boolean;

export function webdav_discover_content_get_selected(
    content: Gtk.Widget,
    index: number
): [boolean, string, number, string, string];

export function webdav_discover_content_get_tree_selection(content: Gtk.Widget): Gtk.TreeSelection;

export function webdav_discover_content_get_user_address(content: Gtk.Widget): string;

export function webdav_discover_content_new(
    credentials_prompter: CredentialsPrompter,
    source: EDataServer.Source | null,
    base_url: string | null,
    supports_filter: number
): Gtk.Widget;

export function webdav_discover_content_refresh(
    content: Gtk.Widget,
    display_name?: string | null,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Gtk.Widget> | null
): void;

export function webdav_discover_content_refresh_finish(content: Gtk.Widget, result: Gio.AsyncResult): boolean;

export function webdav_discover_content_set_base_url(content: Gtk.Widget, base_url: string): void;

export function webdav_discover_content_set_multiselect(content: Gtk.Widget, multiselect: boolean): void;

export function webdav_discover_content_show_error(content: Gtk.Widget, error?: GLib.Error | null): void;

export function webdav_discover_dialog_get_content(dialog: Gtk.Dialog): Gtk.Widget;

export function webdav_discover_dialog_new(
    parent: Gtk.Window,
    title: string,
    credentials_prompter: CredentialsPrompter,
    source: EDataServer.Source,
    base_url: string | null,
    supports_filter: number
): Gtk.Dialog;

export function webdav_discover_dialog_refresh(dialog: Gtk.Dialog): void;

export type CredentialsPrompterLoopPromptFunc = (
    prompter: CredentialsPrompter,
    source: EDataServer.Source,
    credentials: EDataServer.NamedParameters,
    cancellable?: Gio.Cancellable | null
) => boolean;

export namespace CredentialsPrompterPromptFlags {
    export const $gtype: GObject.GType<CredentialsPrompterPromptFlags>;
}

export enum CredentialsPrompterPromptFlags {
    NONE = 0,
    ALLOW_SOURCE_SAVE = 1,
    ALLOW_STORED_CREDENTIALS = 2,
}

export namespace CellRendererColor {
    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {
        [key: string]: any;

        rgba: Gdk.RGBA;
    }
}

export class CellRendererColor extends Gtk.CellRenderer {
    static $gtype: GObject.GType<CellRendererColor>;

    constructor(properties?: Partial<CellRendererColor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CellRendererColor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    rgba: Gdk.RGBA;

    // Fields
    priv: CellRendererColorPrivate;

    // Constructors

    static ['new'](): CellRendererColor;
}

export namespace CredentialsPrompter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auto_prompt: boolean;
        autoPrompt: boolean;
        provider: EDataServer.SourceCredentialsProvider;
        registry: EDataServer.SourceRegistry;
    }
}

export class CredentialsPrompter extends GObject.Object implements EDataServer.Extensible {
    static $gtype: GObject.GType<CredentialsPrompter>;

    constructor(properties?: Partial<CredentialsPrompter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CredentialsPrompter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_prompt: boolean;
    autoPrompt: boolean;
    provider: EDataServer.SourceCredentialsProvider;
    registry: EDataServer.SourceRegistry;

    // Fields
    priv: CredentialsPrompterPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'get-dialog-parent', callback: (_source: this) => Gtk.Window): number;

    connect_after(signal: 'get-dialog-parent', callback: (_source: this) => Gtk.Window): number;

    emit(signal: 'get-dialog-parent'): void;

    // Constructors

    static ['new'](registry: EDataServer.SourceRegistry): CredentialsPrompter;

    // Members

    complete_prompt_call(
        async_result: Gio.SimpleAsyncResult,
        source: EDataServer.Source,
        credentials?: EDataServer.NamedParameters | null,
        error?: GLib.Error | null
    ): void;

    get_auto_prompt(): boolean;

    get_auto_prompt_disabled_for(source: EDataServer.Source): boolean;

    get_dialog_parent(): Gtk.Window;

    get_provider(): EDataServer.SourceCredentialsProvider;

    get_registry(): EDataServer.SourceRegistry;

    loop_prompt_sync(
        source: EDataServer.Source,
        flags: CredentialsPrompterPromptFlags,
        func: CredentialsPrompterLoopPromptFunc,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    process_awaiting_credentials(): void;

    process_source(source: EDataServer.Source): boolean;

    prompt(
        source: EDataServer.Source,
        error_text: string | null,
        flags: CredentialsPrompterPromptFlags,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    prompt_finish(
        result: Gio.AsyncResult,
        out_source: EDataServer.Source | null,
        out_credentials: EDataServer.NamedParameters
    ): boolean;

    register_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): boolean;

    set_auto_prompt(auto_prompt: boolean): void;

    set_auto_prompt_disabled_for(source: EDataServer.Source, is_disabled: boolean): void;

    unregister_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): void;

    vfunc_get_dialog_parent(): Gtk.Window;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace CredentialsPrompterImpl {
    export interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class CredentialsPrompterImpl extends EDataServer.Extension {
    static $gtype: GObject.GType<CredentialsPrompterImpl>;

    constructor(properties?: Partial<CredentialsPrompterImpl.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CredentialsPrompterImpl.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CredentialsPrompterImplPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'prompt-finished',
        callback: (_source: this, prompt_id: any | null, credentials: EDataServer.NamedParameters | null) => void
    ): number;

    connect_after(
        signal: 'prompt-finished',
        callback: (_source: this, prompt_id: any | null, credentials: EDataServer.NamedParameters | null) => void
    ): number;

    emit(signal: 'prompt-finished', prompt_id: any | null, credentials: EDataServer.NamedParameters | null): void;

    // Members

    cancel_prompt(prompt_id?: any | null): void;

    get_credentials_prompter(): any | null;

    prompt(
        prompt_id: any | null,
        auth_source: EDataServer.Source,
        cred_source: EDataServer.Source,
        error_text: string | null,
        credentials: EDataServer.NamedParameters
    ): void;

    prompt_finish(prompt_id?: any | null, credentials?: EDataServer.NamedParameters | null): void;

    vfunc_cancel_prompt(prompt_id?: any | null): void;

    vfunc_process_prompt(
        prompt_id: any | null,
        auth_source: EDataServer.Source,
        cred_source: EDataServer.Source,
        error_text: string,
        credentials: EDataServer.NamedParameters
    ): void;

    vfunc_prompt_finished(prompt_id: any | null, credentials: EDataServer.NamedParameters): void;
}

export namespace CredentialsPrompterImplOAuth2 {
    export interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
        [key: string]: any;
    }
}

export class CredentialsPrompterImplOAuth2 extends CredentialsPrompterImpl {
    static $gtype: GObject.GType<CredentialsPrompterImplOAuth2>;

    constructor(properties?: Partial<CredentialsPrompterImplOAuth2.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CredentialsPrompterImplOAuth2.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CredentialsPrompterImplOAuth2Private | any;

    // Constructors

    static ['new'](): CredentialsPrompterImplOAuth2;
}

export namespace CredentialsPrompterImplPassword {
    export interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
        [key: string]: any;
    }
}

export class CredentialsPrompterImplPassword extends CredentialsPrompterImpl {
    static $gtype: GObject.GType<CredentialsPrompterImplPassword>;

    constructor(properties?: Partial<CredentialsPrompterImplPassword.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CredentialsPrompterImplPassword.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CredentialsPrompterImplPasswordPrivate | any;

    // Constructors

    static ['new'](): CredentialsPrompterImplPassword;
}

export namespace RemindersWidget {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;

        empty: boolean;
        watcher: ECal.ReminderWatcher;
    }
}

export class RemindersWidget
    extends Gtk.Grid
    implements Atk.ImplementorIface, EDataServer.Extensible, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<RemindersWidget>;

    constructor(properties?: Partial<RemindersWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RemindersWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    empty: boolean;
    watcher: ECal.ReminderWatcher;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activated', callback: (_source: this, object: ECal.ReminderData) => boolean): number;

    connect_after(signal: 'activated', callback: (_source: this, object: ECal.ReminderData) => boolean): number;

    emit(signal: 'activated', object: ECal.ReminderData): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](watcher: ECal.ReminderWatcher): RemindersWidget;
    static ['new'](...args: never[]): never;

    // Members

    get_paned(): Gtk.Paned;

    get_settings(): Gio.Settings;
    get_settings(...args: never[]): never;

    get_tree_view(): Gtk.TreeView;

    get_watcher(): ECal.ReminderWatcher;

    is_empty(): boolean;

    report_error(prefix?: string | null, error?: GLib.Error | null): void;

    vfunc_activated(rd: ECal.ReminderData): boolean;

    vfunc_changed(): void;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;

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

export class CellRendererColorPrivate {
    static $gtype: GObject.GType<CellRendererColorPrivate>;

    constructor(copy: CellRendererColorPrivate);
}

export class CredentialsPrompterImplOAuth2Private {
    static $gtype: GObject.GType<CredentialsPrompterImplOAuth2Private>;

    constructor(copy: CredentialsPrompterImplOAuth2Private);
}

export class CredentialsPrompterImplPasswordPrivate {
    static $gtype: GObject.GType<CredentialsPrompterImplPasswordPrivate>;

    constructor(copy: CredentialsPrompterImplPasswordPrivate);
}

export class CredentialsPrompterImplPrivate {
    static $gtype: GObject.GType<CredentialsPrompterImplPrivate>;

    constructor(copy: CredentialsPrompterImplPrivate);
}

export class CredentialsPrompterPrivate {
    static $gtype: GObject.GType<CredentialsPrompterPrivate>;

    constructor(copy: CredentialsPrompterPrivate);
}

export class RemindersWidgetPrivate {
    static $gtype: GObject.GType<RemindersWidgetPrivate>;

    constructor(copy: RemindersWidgetPrivate);
}
