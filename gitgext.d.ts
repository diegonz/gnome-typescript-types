/**
 * GitgExt 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GLib from './glib';
import * as Gee from './gee';
import * as Gtk from './gtk';
import * as Ggit from './ggit';
import * as Gio from './gio';
import * as Gitg from './gitg';

export type ForeachCommitSelectionFunc = (object: Ggit.Commit) => boolean;
export type MessageCallback = (message: Message) => void;
export type RefNameEditingDone = (new_name: string, cancelled: boolean) => void;

export namespace SelectionMode {
    export const $gtype: GObject.GType<SelectionMode>;
}

export enum SelectionMode {
    NORMAL = 0,
    SELECTION = 1,
}

export namespace ExternalChangeHint {
    export const $gtype: GObject.GType<ExternalChangeHint>;
}

export enum ExternalChangeHint {
    NONE = 0,
    REFS,
    INDEX,
}

export namespace CommandLines {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CommandLines extends GObject.Object {
    static $gtype: GObject.GType<CommandLines>;

    constructor(properties?: Partial<CommandLines.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CommandLines.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](command_lines: CommandLine[]): CommandLines;

    // Members

    get_for(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): any | null;

    parse_finished(): void;

    apply(application: Application): void;
}

export namespace MessageBus {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MessageBus extends GObject.Object {
    static $gtype: GObject.GType<MessageBus>;

    constructor(properties?: Partial<MessageBus.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessageBus.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'registered', callback: (_source: this, id: MessageId) => void): number;

    emit(signal: 'registered', id: MessageId): void;

    connect_after(signal: 'unregistered', callback: (_source: this, id: MessageId) => void): number;

    emit(signal: 'unregistered', id: MessageId): void;

    connect_after(signal: 'dispatch', callback: (_source: this, message: Message) => void): number;

    emit(signal: 'dispatch', message: Message): void;

    // Constructors

    static ['new'](): MessageBus;

    // Members

    lookup(id: MessageId): GObject.GType;

    register(message_type: GObject.GType, id: MessageId): void;

    unregister(id: MessageId): void;

    unregister_all(object_path: string): void;

    is_registered(id: MessageId): boolean;

    connect(id: MessageId, callback: MessageCallback): number;
    connect(...args: never[]): never;

    disconnect(id: number): void;

    block(id: number): void;

    unblock(id: number): void;

    send_message(message: Message): Message;

    static get_default(): MessageBus;
}

export namespace MessageId {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        object_path: string;
        objectPath: string;
        method: string;
        id: string;
    }
}

export class MessageId extends GObject.Object {
    static $gtype: GObject.GType<MessageId>;

    constructor(properties?: Partial<MessageId.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MessageId.ConstructorProperties>, ...args: any[]): void;

    // Properties
    object_path: string;
    objectPath: string;
    method: string;
    id: string;

    // Constructors

    static ['new'](object_path: string, method: string): MessageId;

    // Members

    hash(): number;

    equal(other: MessageId): boolean;

    copy(): MessageId;

    get_object_path(): string;

    set_object_path(value: string): void;

    get_method(): string;

    set_method(value: string): void;

    get_id(): string;

    static valid_object_path(path: string): boolean;
}

export namespace Message {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        id: MessageId;
    }
}

export abstract class Message extends GObject.Object {
    static $gtype: GObject.GType<Message>;

    constructor(properties?: Partial<Message.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Message.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: MessageId;

    // Members

    has(propname: string): boolean;

    get_id(): MessageId;

    set_id(value: MessageId): void;

    static type_has(type: GObject.GType, propname: string): boolean;

    static type_check(type: GObject.GType, propname: string, value_type: GObject.GType): boolean;
}

export namespace UI {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class UI {
    static $gtype: GObject.GType<UI>;

    constructor(properties?: Partial<UI.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UI.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ['new'](): UI;
}

export namespace UserQueryResponse {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class UserQueryResponse extends GObject.Object {
    static $gtype: GObject.GType<UserQueryResponse>;

    constructor(properties?: Partial<UserQueryResponse.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserQueryResponse.ConstructorProperties>, ...args: any[]): void;

    // Fields
    text: string;
    response_type: Gtk.ResponseType;

    // Constructors

    static ['new'](text: string, response_type: Gtk.ResponseType): UserQueryResponse;
}

export namespace UserQuery {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        title: string;
        message: string;
        message_type: Gtk.MessageType;
        messageType: Gtk.MessageType;
        default_response: Gtk.ResponseType;
        defaultResponse: Gtk.ResponseType;
        default_is_destructive: boolean;
        defaultIsDestructive: boolean;
        message_use_markup: boolean;
        messageUseMarkup: boolean;
    }
}

export class UserQuery extends GObject.Object {
    static $gtype: GObject.GType<UserQuery>;

    constructor(properties?: Partial<UserQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    title: string;
    message: string;
    message_type: Gtk.MessageType;
    messageType: Gtk.MessageType;
    default_response: Gtk.ResponseType;
    defaultResponse: Gtk.ResponseType;
    default_is_destructive: boolean;
    defaultIsDestructive: boolean;
    message_use_markup: boolean;
    messageUseMarkup: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'quit', callback: (_source: this) => void): number;

    connect_after(signal: 'quit', callback: (_source: this) => void): number;

    emit(signal: 'quit'): void;

    connect(signal: 'response', callback: (_source: this, response_type: Gtk.ResponseType) => boolean): number;

    connect_after(signal: 'response', callback: (_source: this, response_type: Gtk.ResponseType) => boolean): number;

    emit(signal: 'response', response_type: Gtk.ResponseType): void;

    // Constructors

    static ['new'](): UserQuery;

    // Members

    get_responses(): UserQueryResponse[];

    set_responses(value: UserQueryResponse[]): void;

    get_title(): string;

    set_title(value: string): void;

    get_message(): string;

    set_message(value: string): void;

    get_message_type(): Gtk.MessageType;

    set_message_type(value: Gtk.MessageType): void;

    get_default_response(): Gtk.ResponseType;

    set_default_response(value: Gtk.ResponseType): void;

    get_default_is_destructive(): boolean;

    set_default_is_destructive(value: boolean): void;

    get_message_use_markup(): boolean;

    set_message_use_markup(value: boolean): void;
}

export class CommandLinesPrivate {
    static $gtype: GObject.GType<CommandLinesPrivate>;

    constructor(copy: CommandLinesPrivate);
}

export class MessageBusPrivate {
    static $gtype: GObject.GType<MessageBusPrivate>;

    constructor(copy: MessageBusPrivate);
}

export class MessageIdPrivate {
    static $gtype: GObject.GType<MessageIdPrivate>;

    constructor(copy: MessageIdPrivate);
}

export class MessagePrivate {
    static $gtype: GObject.GType<MessagePrivate>;

    constructor(copy: MessagePrivate);
}

export class UIPrivate {
    static $gtype: GObject.GType<UIPrivate>;

    constructor(copy: UIPrivate);
}

export class UserQueryResponsePrivate {
    static $gtype: GObject.GType<UserQueryResponsePrivate>;

    constructor(copy: UserQueryResponsePrivate);
}

export class UserQueryPrivate {
    static $gtype: GObject.GType<UserQueryPrivate>;

    constructor(copy: UserQueryPrivate);
}

export interface ActionNamespace {
    $gtype: GObject.GType<Action>;
    prototype: ActionPrototype;
}

export type Action = ActionPrototype;

export interface ActionPrototype extends UIElement {
    // Members

    populate_menu(menu: Gtk.Menu): void;

    vfunc_populate_menu(menu: Gtk.Menu): void;
}

export const Action: ActionNamespace;

export interface ActivityNamespace {
    $gtype: GObject.GType<Activity>;
    prototype: ActivityPrototype;
}

export type Activity = ActivityPrototype;

export interface ActivityPrototype extends GObject.Object {
    // Members

    is_default_for(action: string): boolean;

    vfunc_is_default_for(action: string): boolean;
}

export const Activity: ActivityNamespace;

export interface ApplicationNamespace {
    $gtype: GObject.GType<Application>;
    prototype: ApplicationPrototype;
}

export type Application = ApplicationPrototype;

export interface ApplicationPrototype extends GObject.Object {
    // Properties
    repository: Gitg.Repository;
    message_bus: MessageBus;
    messageBus: MessageBus;
    current_activity: Activity;
    currentActivity: Activity;
    environment: Gee.Map;
    notifications: Notifications;
    busy: boolean;
    remote_lookup: RemoteLookup;
    remoteLookup: RemoteLookup;

    // Members

    get_verified_committer(): Ggit.Signature | null;

    get_activity_by_id(id: string): Activity | null;

    set_activity_by_id(id: string): Activity | null;

    user_query(query: UserQuery): void;

    user_query_async(query: UserQuery, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType;

    show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void;

    open_new(repository: Ggit.Repository, hint?: string | null): Application;

    open_repository(path: Gio.File): void;

    get_repository(): Gitg.Repository | null;

    set_repository(value?: Gitg.Repository | null): void;

    get_message_bus(): MessageBus;

    get_current_activity(): Activity | null;

    get_environment(): Gee.Map;

    get_notifications(): Notifications;

    get_busy(): boolean;

    set_busy(value: boolean): void;

    get_remote_lookup(): RemoteLookup;

    vfunc_get_verified_committer(): Ggit.Signature | null;

    vfunc_get_activity_by_id(id: string): Activity | null;

    vfunc_set_activity_by_id(id: string): Activity | null;

    vfunc_user_query(query: UserQuery): void;

    vfunc_user_query_async(query: UserQuery, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType;

    vfunc_show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void;

    vfunc_open_new(repository: Ggit.Repository, hint?: string | null): Application;

    vfunc_open_repository(path: Gio.File): void;

    vfunc_get_repository(): Gitg.Repository | null;

    vfunc_set_repository(value?: Gitg.Repository | null): void;

    vfunc_get_message_bus(): MessageBus;

    vfunc_get_current_activity(): Activity | null;

    vfunc_get_environment(): Gee.Map;

    vfunc_get_notifications(): Notifications;

    vfunc_get_busy(): boolean;

    vfunc_set_busy(value: boolean): void;

    vfunc_get_remote_lookup(): RemoteLookup;
}

export const Application: ApplicationNamespace;

export interface CommandLineNamespace {
    $gtype: GObject.GType<CommandLine>;
    prototype: CommandLinePrototype;
}

export type CommandLine = CommandLinePrototype;

export interface CommandLinePrototype extends GObject.Object {
    // Members

    get_option_group(): GLib.OptionGroup;

    parse_finished(): void;

    apply(application: Application): void;

    vfunc_get_option_group(): GLib.OptionGroup;

    vfunc_parse_finished(): void;

    vfunc_apply(application: Application): void;
}

export const CommandLine: CommandLineNamespace;

export interface CommitActionNamespace {
    $gtype: GObject.GType<CommitAction>;
    prototype: CommitActionPrototype;
}

export type CommitAction = CommitActionPrototype;

export interface CommitActionPrototype extends Action {
    // Properties
    action_interface: RefActionInterface;
    actionInterface: RefActionInterface;
    commit: Gitg.Commit;

    // Members

    get_action_interface(): RefActionInterface;

    set_action_interface(value: RefActionInterface): void;

    get_commit(): Gitg.Commit;

    set_commit(value: Gitg.Commit): void;

    vfunc_get_action_interface(): RefActionInterface;

    vfunc_set_action_interface(value: RefActionInterface): void;

    vfunc_get_commit(): Gitg.Commit;

    vfunc_set_commit(value: Gitg.Commit): void;
}

export const CommitAction: CommitActionNamespace;

export interface HistoryPanelNamespace {
    $gtype: GObject.GType<HistoryPanel>;
    prototype: HistoryPanelPrototype;
}

export type HistoryPanel = HistoryPanelPrototype;

export interface HistoryPanelPrototype extends GObject.Object {
    // Properties
    history: History;

    // Members

    get_history(): History | null;

    set_history(value?: History | null): void;

    vfunc_get_history(): History | null;

    vfunc_set_history(value?: History | null): void;
}

export const HistoryPanel: HistoryPanelNamespace;

export interface HistoryNamespace {
    $gtype: GObject.GType<History>;
    prototype: HistoryPrototype;
}

export type History = HistoryPrototype;

export interface HistoryPrototype extends GObject.Object {
    // Members

    foreach_selected(func: ForeachCommitSelectionFunc): void;

    select(commit: Gitg.Commit): void;

    vfunc_foreach_selected(func: ForeachCommitSelectionFunc): void;

    vfunc_select(commit: Gitg.Commit): void;
}

export const History: HistoryNamespace;

export interface NotificationNamespace {
    $gtype: GObject.GType<Notification>;
    prototype: NotificationPrototype;
}

export type Notification = NotificationPrototype;

export interface NotificationPrototype extends GObject.Object {
    // Properties
    widget: Gtk.Widget;

    // Members

    get_widget(): Gtk.Widget | null;

    vfunc_get_widget(): Gtk.Widget | null;
}

export const Notification: NotificationNamespace;

export interface NotificationsNamespace {
    $gtype: GObject.GType<Notifications>;
    prototype: NotificationsPrototype;
}

export type Notifications = NotificationsPrototype;

export interface NotificationsPrototype extends GObject.Object {
    // Members

    add(notification: Notification): void;

    remove(notification: Notification, delay: number): void;

    vfunc_add(notification: Notification): void;

    vfunc_remove(notification: Notification, delay: number): void;
}

export const Notifications: NotificationsNamespace;

export interface PreferencesNamespace {
    $gtype: GObject.GType<Preferences>;
    prototype: PreferencesPrototype;
}

export type Preferences = PreferencesPrototype;

export interface PreferencesPrototype extends GObject.Object {
    // Properties
    id: string;
    display_name: string;
    displayName: string;
    widget: Gtk.Widget;

    // Members

    get_id(): string;

    get_display_name(): string;

    get_widget(): Gtk.Widget;

    vfunc_get_id(): string;

    vfunc_get_display_name(): string;

    vfunc_get_widget(): Gtk.Widget;
}

export const Preferences: PreferencesNamespace;

export interface RefActionInterfaceNamespace {
    $gtype: GObject.GType<RefActionInterface>;
    prototype: RefActionInterfacePrototype;
}

export type RefActionInterface = RefActionInterfacePrototype;

export interface RefActionInterfacePrototype extends GObject.Object {
    // Properties
    application: Application;
    references: Gee.List;

    // Members

    add_ref(reference: Gitg.Ref): void;

    remove_ref(reference: Gitg.Ref): void;

    replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void;

    set_busy(reference: Gitg.Ref, busy: boolean): void;

    edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void;

    refresh(): void;

    get_application(): Application;

    set_application(value: Application): void;

    get_references(): Gee.List;

    vfunc_add_ref(reference: Gitg.Ref): void;

    vfunc_remove_ref(reference: Gitg.Ref): void;

    vfunc_replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void;

    vfunc_set_busy(reference: Gitg.Ref, busy: boolean): void;

    vfunc_edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void;

    vfunc_refresh(): void;

    vfunc_get_application(): Application;

    vfunc_set_application(value: Application): void;

    vfunc_get_references(): Gee.List;
}

export const RefActionInterface: RefActionInterfaceNamespace;

export interface RefActionNamespace {
    $gtype: GObject.GType<RefAction>;
    prototype: RefActionPrototype;
}

export type RefAction = RefActionPrototype;

export interface RefActionPrototype extends Action {
    // Properties
    action_interface: RefActionInterface;
    actionInterface: RefActionInterface;
    reference: Gitg.Ref;

    // Members

    get_action_interface(): RefActionInterface;

    set_action_interface(value: RefActionInterface): void;

    get_reference(): Gitg.Ref;

    set_reference(value: Gitg.Ref): void;

    vfunc_get_action_interface(): RefActionInterface;

    vfunc_set_action_interface(value: RefActionInterface): void;

    vfunc_get_reference(): Gitg.Ref;

    vfunc_set_reference(value: Gitg.Ref): void;
}

export const RefAction: RefActionNamespace;

export interface RemoteLookupNamespace {
    $gtype: GObject.GType<RemoteLookup>;
    prototype: RemoteLookupPrototype;
}

export type RemoteLookup = RemoteLookupPrototype;

export interface RemoteLookupPrototype extends GObject.Object {
    // Members

    lookup(name: string): Gitg.Remote | null;

    vfunc_lookup(name: string): Gitg.Remote | null;
}

export const RemoteLookup: RemoteLookupNamespace;

export interface SearchableNamespace {
    $gtype: GObject.GType<Searchable>;
    prototype: SearchablePrototype;
}

export type Searchable = SearchablePrototype;

export interface SearchablePrototype extends GObject.Object {
    // Properties
    search_text: string;
    searchText: string;
    search_visible: boolean;
    searchVisible: boolean;
    search_available: boolean;
    searchAvailable: boolean;
    search_entry: Gtk.Entry;
    searchEntry: Gtk.Entry;

    // Members

    get_search_text(): string;

    set_search_text(value: string): void;

    get_search_visible(): boolean;

    set_search_visible(value: boolean): void;

    get_search_available(): boolean;

    set_search_entry(value?: Gtk.Entry | null): void;

    vfunc_get_search_text(): string;

    vfunc_set_search_text(value: string): void;

    vfunc_get_search_visible(): boolean;

    vfunc_set_search_visible(value: boolean): void;

    vfunc_get_search_available(): boolean;

    vfunc_set_search_entry(value?: Gtk.Entry | null): void;
}

export const Searchable: SearchableNamespace;

export interface SelectableNamespace {
    $gtype: GObject.GType<Selectable>;
    prototype: SelectablePrototype;
}

export type Selectable = SelectablePrototype;

export interface SelectablePrototype extends GObject.Object {
    // Properties
    selectable_mode: SelectionMode;
    selectableMode: SelectionMode;
    selectable_available: boolean;
    selectableAvailable: boolean;
    selectable_mode_tooltip: string;
    selectableModeTooltip: string;
    action_widget: Gtk.Widget;
    actionWidget: Gtk.Widget;

    // Members

    get_selectable_mode(): SelectionMode;

    set_selectable_mode(value: SelectionMode): void;

    get_selectable_available(): boolean;

    get_selectable_mode_tooltip(): string;

    get_action_widget(): Gtk.Widget | null;

    vfunc_get_selectable_mode(): SelectionMode;

    vfunc_set_selectable_mode(value: SelectionMode): void;

    vfunc_get_selectable_available(): boolean;

    vfunc_get_selectable_mode_tooltip(): string;

    vfunc_get_action_widget(): Gtk.Widget | null;
}

export const Selectable: SelectableNamespace;

export interface UIElementNamespace {
    $gtype: GObject.GType<UIElement>;
    prototype: UIElementPrototype;
}

export type UIElement = UIElementPrototype;

export interface UIElementPrototype extends GObject.Object {
    // Properties
    application: Application;
    id: string;
    display_name: string;
    displayName: string;
    description: string;

    // Members

    negotiate_order(other: UIElement): number;

    get_application(): Application | null;

    set_application(value?: Application | null): void;

    get_id(): string;

    get_display_name(): string;

    get_description(): string;

    get_icon(): string | null;

    get_widget(): Gtk.Widget | null;

    get_available(): boolean;

    get_enabled(): boolean;

    vfunc_negotiate_order(other: UIElement): number;

    vfunc_get_application(): Application | null;

    vfunc_set_application(value?: Application | null): void;

    vfunc_get_id(): string;

    vfunc_get_display_name(): string;

    vfunc_get_description(): string;

    vfunc_get_icon(): string | null;

    vfunc_get_widget(): Gtk.Widget | null;

    vfunc_get_available(): boolean;

    vfunc_get_enabled(): boolean;
}

export const UIElement: UIElementNamespace;
