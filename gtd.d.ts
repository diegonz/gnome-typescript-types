/**
 * Gtd 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GLib from './glib';
import * as Gdk from './gdk';

export type ErrorActionFunc = (notification: Notification) => void;
export type NotificationActionFunc = (notification: Notification) => void;
export type TaskListViewHeaderFunc = (
    row: Gtk.ListBoxRow,
    row_task: Task,
    before: Gtk.ListBoxRow,
    before_task: Task
) => void;
export type TaskListViewSortFunc = (
    row1: Gtk.ListBoxRow,
    row1_task: Task,
    row2: Gtk.ListBoxRow,
    row2_task: Task
) => number;

export namespace ListSelectorViewType {
    export const $gtype: GObject.GType<ListSelectorViewType>;
}

export enum ListSelectorViewType {
    GRID = 0,
    LIST = 1,
}

export namespace WindowMode {
    export const $gtype: GObject.GType<WindowMode>;
}

export enum WindowMode {
    NORMAL = 0,
    SELECTION = 1,
}

export namespace Manager {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        default_provider: Provider;
        defaultProvider: Provider;
        default_task_list: TaskList;
        defaultTaskList: TaskList;
        timer: Timer;
    }
}

export class Manager extends Object {
    static $gtype: GObject.GType<Manager>;

    constructor(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_provider: Provider;
    defaultProvider: Provider;
    default_task_list: TaskList;
    defaultTaskList: TaskList;
    timer: Timer;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'list-added', callback: (_source: this, list: TaskList) => void): number;

    connect_after(signal: 'list-added', callback: (_source: this, list: TaskList) => void): number;

    emit(signal: 'list-added', list: TaskList): void;

    connect(signal: 'list-changed', callback: (_source: this, list: TaskList) => void): number;

    connect_after(signal: 'list-changed', callback: (_source: this, list: TaskList) => void): number;

    emit(signal: 'list-changed', list: TaskList): void;

    connect(signal: 'list-removed', callback: (_source: this, list: TaskList) => void): number;

    connect_after(signal: 'list-removed', callback: (_source: this, list: TaskList) => void): number;

    emit(signal: 'list-removed', list: TaskList): void;

    connect(signal: 'panel-added', callback: (_source: this, panel: Panel) => void): number;

    connect_after(signal: 'panel-added', callback: (_source: this, panel: Panel) => void): number;

    emit(signal: 'panel-added', panel: Panel): void;

    connect(signal: 'panel-removed', callback: (_source: this, panel: Panel) => void): number;

    connect_after(signal: 'panel-removed', callback: (_source: this, panel: Panel) => void): number;

    emit(signal: 'panel-removed', panel: Panel): void;

    connect(signal: 'provider-added', callback: (_source: this, provider: Provider) => void): number;

    connect_after(signal: 'provider-added', callback: (_source: this, provider: Provider) => void): number;

    emit(signal: 'provider-added', provider: Provider): void;

    connect(signal: 'provider-removed', callback: (_source: this, provider: Provider) => void): number;

    connect_after(signal: 'provider-removed', callback: (_source: this, provider: Provider) => void): number;

    emit(signal: 'provider-removed', provider: Provider): void;

    connect(
        signal: 'show-error-message',
        callback: (
            _source: this,
            primary_text: string,
            secondary_text: string,
            action: any | null,
            user_data: any | null
        ) => void
    ): number;

    connect_after(
        signal: 'show-error-message',
        callback: (
            _source: this,
            primary_text: string,
            secondary_text: string,
            action: any | null,
            user_data: any | null
        ) => void
    ): number;

    emit(
        signal: 'show-error-message',
        primary_text: string,
        secondary_text: string,
        action: any | null,
        user_data: any | null
    ): void;

    // Constructors

    static ['new'](): Manager;
    static ['new'](...args: never[]): never;

    // Members

    get_default_provider(): Provider;

    get_default_task_list(): TaskList | null;

    get_is_first_run(): boolean;

    get_panels(): Panel[];

    get_providers(): Provider[];

    get_settings(): Gio.Settings;

    get_task_lists(): TaskList[];

    get_timer(): Timer;

    set_default_provider(provider?: Provider | null): void;

    set_default_task_list(list?: TaskList | null): void;

    set_is_first_run(is_first_run: boolean): void;

    static get_default(): Manager;
}

export namespace Notification {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        has_primary_action: boolean;
        hasPrimaryAction: boolean;
        has_secondary_action: boolean;
        hasSecondaryAction: boolean;
        secondary_action_name: string;
        secondaryActionName: string;
        text: string;
        timeout: number;
    }
}

export class Notification extends Object {
    static $gtype: GObject.GType<Notification>;

    constructor(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]): void;

    // Properties
    has_primary_action: boolean;
    hasPrimaryAction: boolean;
    has_secondary_action: boolean;
    hasSecondaryAction: boolean;
    secondary_action_name: string;
    secondaryActionName: string;
    text: string;
    timeout: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'executed', callback: (_source: this) => void): number;

    connect_after(signal: 'executed', callback: (_source: this) => void): number;

    emit(signal: 'executed'): void;

    // Constructors

    static ['new'](text: string | null, timeout: number): Notification;
    static ['new'](...args: never[]): never;

    // Members

    execute_primary_action(): void;

    execute_secondary_action(): void;

    get_text(): string;

    get_timeout(): number;

    set_primary_action(func?: NotificationActionFunc | null): void;

    set_secondary_action(name: string, func?: NotificationActionFunc | null): void;

    set_text(text: string): void;

    set_timeout(timeout: number): void;

    start(): void;

    stop(): void;
}

export namespace Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        loading: boolean;
        uid: string;
    }
}

export class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    loading: boolean;
    uid: string;

    // Constructors

    static ['new'](uid: string): Object;

    // Members

    get_loading(): boolean;

    get_uid(): string;

    pop_loading(): void;

    push_loading(): void;

    set_uid(uid: string): void;

    vfunc_get_uid(): string;

    vfunc_set_uid(uid: string): void;
}

export namespace Task {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        complete: boolean;
        creation_date: GLib.DateTime;
        creationDate: GLib.DateTime;
        depth: number;
        description: string;
        due_date: GLib.DateTime;
        dueDate: GLib.DateTime;
        list: TaskList;
        position: number;
        priority: number;
        title: string;
    }
}

export class Task extends Object {
    static $gtype: GObject.GType<Task>;

    constructor(properties?: Partial<Task.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Task.ConstructorProperties>, ...args: any[]): void;

    // Properties
    complete: boolean;
    creation_date: GLib.DateTime;
    creationDate: GLib.DateTime;
    depth: number;
    description: string;
    due_date: GLib.DateTime;
    dueDate: GLib.DateTime;
    list: TaskList;
    position: number;
    priority: number;
    title: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'subtask-added', callback: (_source: this, object: Task) => void): number;

    connect_after(signal: 'subtask-added', callback: (_source: this, object: Task) => void): number;

    emit(signal: 'subtask-added', object: Task): void;

    connect(signal: 'subtask-removed', callback: (_source: this, object: Task) => void): number;

    connect_after(signal: 'subtask-removed', callback: (_source: this, object: Task) => void): number;

    emit(signal: 'subtask-removed', object: Task): void;

    // Constructors

    static ['new'](): Task;
    static ['new'](...args: never[]): never;

    // Members

    add_subtask(subtask: Task): void;

    compare(t2?: Task | null): number;

    get_complete(): boolean;

    get_creation_date(): GLib.DateTime;

    get_depth(): number;

    get_description(): string;

    get_due_date(): GLib.DateTime;

    get_list(): TaskList;

    get_parent(): Task | null;

    get_position(): number;

    get_priority(): number;

    get_provider(): Provider | null;

    get_subtasks(): Task[] | null;

    get_title(): string;

    is_subtask(subtask: Task): boolean;

    remove_subtask(subtask: Task): void;

    set_complete(complete: boolean): void;

    set_creation_date(dt: GLib.DateTime): void;

    set_description(description?: string | null): void;

    set_due_date(dt?: GLib.DateTime | null): void;

    set_list(list?: TaskList | null): void;

    set_position(position: number): void;

    set_priority(priority: number): void;

    set_title(title?: string | null): void;

    vfunc_get_complete(): boolean;

    vfunc_get_creation_date(): GLib.DateTime;

    vfunc_get_description(): string;

    vfunc_get_due_date(): GLib.DateTime;

    vfunc_get_position(): number;

    vfunc_get_priority(): number;

    vfunc_get_title(): string;

    vfunc_set_complete(complete: boolean): void;

    vfunc_set_creation_date(dt: GLib.DateTime): void;

    vfunc_set_description(description?: string | null): void;

    vfunc_set_due_date(due_date: GLib.DateTime): void;

    vfunc_set_position(position: number): void;

    vfunc_set_priority(priority: number): void;

    vfunc_set_title(title?: string | null): void;

    vfunc_subtask_added(subtask: Task): void;

    vfunc_subtask_removed(subtask: Task): void;
}

export namespace TaskList {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;

        color: Gdk.RGBA;
        is_removable: boolean;
        isRemovable: boolean;
        name: string;
        provider: Provider;
    }
}

export class TaskList extends Object {
    static $gtype: GObject.GType<TaskList>;

    constructor(properties?: Partial<TaskList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TaskList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    color: Gdk.RGBA;
    is_removable: boolean;
    isRemovable: boolean;
    name: string;
    provider: Provider;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'task-added', callback: (_source: this, task: Task) => void): number;

    connect_after(signal: 'task-added', callback: (_source: this, task: Task) => void): number;

    emit(signal: 'task-added', task: Task): void;

    connect(signal: 'task-removed', callback: (_source: this, task: Task) => void): number;

    connect_after(signal: 'task-removed', callback: (_source: this, task: Task) => void): number;

    emit(signal: 'task-removed', task: Task): void;

    connect(signal: 'task-updated', callback: (_source: this, task: Task) => void): number;

    connect_after(signal: 'task-updated', callback: (_source: this, task: Task) => void): number;

    emit(signal: 'task-updated', task: Task): void;

    // Constructors

    static ['new'](provider?: Provider | null): TaskList;
    static ['new'](...args: never[]): never;

    // Members

    contains(task: Task): boolean;

    get_color(): Gdk.RGBA;

    get_name(): string;

    get_provider(): Provider;

    get_task_by_id(id: string): Task | null;

    get_tasks(): Task[];

    remove_task(task: Task): void;

    save_task(task: Task): void;

    set_color(color: Gdk.RGBA): void;

    set_is_removable(is_removable: boolean): void;

    set_name(name?: string | null): void;

    set_provider(provider?: Provider | null): void;

    vfunc_task_added(task: Task): void;

    vfunc_task_removed(task: Task): void;

    vfunc_task_updated(task: Task): void;
}

export namespace TaskListView {
    export interface ConstructorProperties extends Gtk.Overlay.ConstructorProperties {
        [key: string]: any;

        color: Gdk.RGBA;
        handle_subtasks: boolean;
        handleSubtasks: boolean;
        show_completed: boolean;
        showCompleted: boolean;
        show_due_date: boolean;
        showDueDate: boolean;
        show_list_name: boolean;
        showListName: boolean;
        show_new_task_row: boolean;
        showNewTaskRow: boolean;
    }
}

export class TaskListView extends Gtk.Overlay implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<TaskListView>;

    constructor(properties?: Partial<TaskListView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TaskListView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    color: Gdk.RGBA;
    handle_subtasks: boolean;
    handleSubtasks: boolean;
    show_completed: boolean;
    showCompleted: boolean;
    show_due_date: boolean;
    showDueDate: boolean;
    show_list_name: boolean;
    showListName: boolean;
    show_new_task_row: boolean;
    showNewTaskRow: boolean;

    // Constructors

    static ['new'](): TaskListView;

    // Members

    get_color(): Gdk.RGBA | null;

    get_default_date(): GLib.DateTime | null;

    get_handle_subtasks(): boolean;

    get_list(): TaskList[];

    get_show_completed(): boolean;

    get_show_due_date(): boolean;

    get_show_list_name(): boolean;

    get_show_new_task_row(): boolean;

    get_task_list(): TaskList;

    invalidate(): void;

    set_color(color?: Gdk.RGBA | null): void;

    set_default_date(default_date?: GLib.DateTime | null): void;

    set_handle_subtasks(handle_subtasks: boolean): void;

    set_header_func(func?: TaskListViewHeaderFunc | null): void;

    set_list(list?: Task[] | null): void;

    set_show_completed(show_completed: boolean): void;

    set_show_due_date(show_due_date: boolean): void;

    set_show_list_name(show_list_name: boolean): void;

    set_show_new_task_row(show_new_task_row: boolean): void;

    set_sort_func(func?: TaskListViewSortFunc | null): void;

    set_task_list(list: TaskList): void;

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

export namespace Timer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Timer extends Object {
    static $gtype: GObject.GType<Timer>;

    constructor(properties?: Partial<Timer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Timer.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'update', callback: (_source: this) => void): number;

    connect_after(signal: 'update', callback: (_source: this) => void): number;

    emit(signal: 'update'): void;

    // Constructors

    static ['new'](): Timer;
    static ['new'](...args: never[]): never;
}

export namespace Window {
    export interface ConstructorProperties extends Gtk.ApplicationWindow.ConstructorProperties {
        [key: string]: any;
    }
}

export class Window
    extends Gtk.ApplicationWindow
    implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {
    static $gtype: GObject.GType<Window>;

    constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](application: Application): Window;
    static ['new'](...args: never[]): never;

    // Members

    cancel_notification(notification: Notification): void;

    get_mode(): WindowMode;

    notify(notification: Notification): void;
    notify(...args: never[]): never;

    set_custom_title(title?: string | null, subtitle?: string | null): void;

    set_mode(mode: WindowMode): void;

    // Implemented Members

    action_added(action_name: string): void;

    action_enabled_changed(action_name: string, enabled: boolean): void;

    action_removed(action_name: string): void;

    action_state_changed(action_name: string, state: GLib.Variant): void;

    activate_action(action_name: string, parameter?: GLib.Variant | null): void;

    change_action_state(action_name: string, value: GLib.Variant): void;

    get_action_enabled(action_name: string): boolean;

    get_action_parameter_type(action_name: string): GLib.VariantType | null;

    get_action_state(action_name: string): GLib.Variant | null;

    get_action_state_hint(action_name: string): GLib.Variant | null;

    get_action_state_type(action_name: string): GLib.VariantType | null;

    has_action(action_name: string): boolean;

    list_actions(): string[];

    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

    vfunc_action_added(action_name: string): void;

    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;

    vfunc_action_removed(action_name: string): void;

    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;

    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;

    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;

    vfunc_get_action_enabled(action_name: string): boolean;

    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;

    vfunc_get_action_state(action_name: string): GLib.Variant | null;

    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;

    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;

    vfunc_has_action(action_name: string): boolean;

    vfunc_list_actions(): string[];

    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

    add_action(action: Gio.Action): void;

    add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;

    lookup_action(action_name: string): Gio.Action;

    remove_action(action_name: string): void;

    vfunc_add_action(action: Gio.Action): void;

    vfunc_lookup_action(action_name: string): Gio.Action;

    vfunc_remove_action(action_name: string): void;

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

export class Application {
    static $gtype: GObject.GType<Application>;

    constructor(copy: Application);
}

export class DoneButton {
    static $gtype: GObject.GType<DoneButton>;

    constructor(copy: DoneButton);
}

export class InitialSetupWindow {
    static $gtype: GObject.GType<InitialSetupWindow>;

    constructor(copy: InitialSetupWindow);
}

export class ListView {
    static $gtype: GObject.GType<ListView>;

    constructor(copy: ListView);
}

export class NotificationWidget {
    static $gtype: GObject.GType<NotificationWidget>;

    constructor(copy: NotificationWidget);
}

export class PluginManager {
    static $gtype: GObject.GType<PluginManager>;

    constructor(copy: PluginManager);
}

export class Storage {
    static $gtype: GObject.GType<Storage>;

    constructor(copy: Storage);
}

export class StoragePopover {
    static $gtype: GObject.GType<StoragePopover>;

    constructor(copy: StoragePopover);
}

export class StorageRow {
    static $gtype: GObject.GType<StorageRow>;

    constructor(copy: StorageRow);
}

export class StorageSelector {
    static $gtype: GObject.GType<StorageSelector>;

    constructor(copy: StorageSelector);
}

export class TaskListItem {
    static $gtype: GObject.GType<TaskListItem>;

    constructor(copy: TaskListItem);
}

export class TaskRow {
    static $gtype: GObject.GType<TaskRow>;

    constructor(copy: TaskRow);
}

export interface ActivatableNamespace {
    $gtype: GObject.GType<Activatable>;
    prototype: ActivatablePrototype;
}

export type Activatable = ActivatablePrototype;

export interface ActivatablePrototype extends GObject.Object {
    // Properties
    preferences_panel: Gtk.Widget;
    preferencesPanel: Gtk.Widget;

    // Members

    activate(): void;

    deactivate(): void;

    get_header_widgets(): Gtk.Widget[];

    get_panels(): Panel[];

    get_preferences_panel(): Gtk.Widget;

    get_providers(): Provider[];

    vfunc_activate(): void;

    vfunc_deactivate(): void;

    vfunc_get_header_widgets(): Gtk.Widget[];

    vfunc_get_panels(): Panel[];

    vfunc_get_preferences_panel(): Gtk.Widget;

    vfunc_get_providers(): Provider[];
}

export const Activatable: ActivatableNamespace;

export interface PanelNamespace {
    $gtype: GObject.GType<Panel>;
    prototype: PanelPrototype;
}

export type Panel = PanelPrototype;

export interface PanelPrototype extends Gtk.Widget {
    // Properties
    menu: Gio.Menu;
    name: string;
    title: string;

    // Members

    get_header_widgets(): Gtk.Widget[];

    get_menu(): Gio.Menu;

    get_panel_name(): string;

    get_panel_title(): string;

    vfunc_get_header_widgets(): Gtk.Widget[];

    vfunc_get_menu(): Gio.Menu;

    vfunc_get_panel_name(): string;

    vfunc_get_panel_title(): string;
}

export const Panel: PanelNamespace;

export interface ProviderNamespace {
    $gtype: GObject.GType<Provider>;
    prototype: ProviderPrototype;
}

export type Provider = ProviderPrototype;

export interface ProviderPrototype extends Object {
    // Properties
    default_task_list: TaskList;
    defaultTaskList: TaskList;
    description: string;
    enabled: boolean;
    icon: Gio.Icon;
    id: string;
    name: string;

    // Members

    create_task(list: TaskList, title: string, due_date: GLib.DateTime): void;

    create_task_list(name?: string | null): void;

    get_default_task_list(): TaskList | null;

    get_description(): string;

    get_enabled(): boolean;

    get_icon(): Gio.Icon;

    get_id(): string;

    get_name(): string;

    get_task_lists(): TaskList[];

    remove_task(task: Task): void;

    remove_task_list(list: TaskList): void;

    set_default_task_list(list: TaskList): void;

    update_task(task: Task): void;

    update_task_list(list: TaskList): void;

    vfunc_create_task(list: TaskList, title: string, due_date: GLib.DateTime): void;

    vfunc_create_task_list(name?: string | null): void;

    vfunc_get_default_task_list(): TaskList | null;

    vfunc_get_description(): string;

    vfunc_get_enabled(): boolean;

    vfunc_get_icon(): Gio.Icon;

    vfunc_get_id(): string;

    vfunc_get_name(): string;

    vfunc_get_task_lists(): TaskList[];

    vfunc_remove_task(task: Task): void;

    vfunc_remove_task_list(list: TaskList): void;

    vfunc_set_default_task_list(list: TaskList): void;

    vfunc_update_task(task: Task): void;

    vfunc_update_task_list(list: TaskList): void;
}

export const Provider: ProviderNamespace;
