/**
 * Gdaui 5.0
 *
 * Generated from 5.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gda from './gda';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GObject from './gobject';
import * as GLib from './glib';
import * as Gdk from './gdk';

export const ATTRIBUTE_PLUGIN: string;
export const COLOR_NORMAL_DEFAULT: string;
export const COLOR_NORMAL_INVALID: string;
export const COLOR_NORMAL_MODIF: string;
export const COLOR_NORMAL_NULL: string;
export const COLOR_PRELIGHT_DEFAULT: string;
export const COLOR_PRELIGHT_INVALID: string;
export const COLOR_PRELIGHT_MODIF: string;
export const COLOR_PRELIGHT_NULL: string;
export const COLOR_UNKNOWN_MASK: number;

export function data_entry_error_quark(): GLib.Quark;

export function new_data_entry(type: GObject.GType, plugin_name?: string | null): DataEntry;

export type CloudWeightFunc = (model: Gda.DataModel, row: number, data?: any | null) => number;
export type FormattedEntryInsertFunc = (
    entry: FormattedEntry,
    insert_char: number,
    virt_pos: number,
    data?: any | null
) => void;
export type RawGridFormatFunc = (
    cell: Gtk.CellRenderer,
    column: Gtk.TreeViewColumn,
    column_pos: number,
    model: Gda.DataModel,
    row: number,
    data?: any | null
) => void;

export namespace Action {
    export const $gtype: GObject.GType<Action>;
}

export enum Action {
    NEW_DATA = 0,
    WRITE_MODIFIED_DATA = 1,
    DELETE_SELECTED_DATA = 2,
    UNDELETE_SELECTED_DATA = 3,
    RESET_DATA = 4,
    MOVE_FIRST_RECORD = 5,
    MOVE_PREV_RECORD = 6,
    MOVE_NEXT_RECORD = 7,
    MOVE_LAST_RECORD = 8,
    MOVE_FIRST_CHUNCK = 9,
    MOVE_PREV_CHUNCK = 10,
    MOVE_NEXT_CHUNCK = 11,
    MOVE_LAST_CHUNCK = 12,
}

export namespace BasicFormPart {
    export const $gtype: GObject.GType<BasicFormPart>;
}

export enum BasicFormPart {
    LABELS = 0,
    ENTRIES = 1,
}

export class DataEntryError extends GLib.Error {
    static $gtype: GObject.GType<DataEntryError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DataEntryError);

    // Properties
    static FILE_NOT_FOUND_ERROR: number;
    static INVALID_DATA_ERROR: number;
}

export namespace DataProxyWriteMode {
    export const $gtype: GObject.GType<DataProxyWriteMode>;
}

export enum DataProxyWriteMode {
    DEMAND = 0,
    ROW_CHANGE = 1,
    VALUE_ACTIVATED = 2,
    VALUE_CHANGE = 3,
}

export namespace ActionMode {
    export const $gtype: GObject.GType<ActionMode>;
}

export enum ActionMode {
    NAVIGATION_ARROWS = 1,
    NAVIGATION_SCROLL = 2,
    MODIF_AUTO_COMMIT = 4,
    MODIF_COMMIT_IMMEDIATE = 8,
    ASK_CONFIRM_UPDATE = 16,
    ASK_CONFIRM_DELETE = 32,
    ASK_CONFIRM_INSERT = 64,
    REPORT_ERROR = 128,
}

export namespace DataProxyInfoFlag {
    export const $gtype: GObject.GType<DataProxyInfoFlag>;
}

export enum DataProxyInfoFlag {
    NONE = 0,
    CURRENT_ROW = 1,
    ROW_MODIFY_BUTTONS = 4,
    ROW_MOVE_BUTTONS = 8,
    CHUNCK_CHANGE_BUTTONS = 16,
    NO_FILTER = 32,
}

export namespace LoginMode {
    export const $gtype: GObject.GType<LoginMode>;
}

export enum LoginMode {
    ENABLE_CONTROL_CENTRE_MODE = 1,
    HIDE_DSN_SELECTION_MODE = 2,
    HIDE_DIRECT_CONNECTION_MODE = 4,
}

export namespace BasicForm {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        can_expand_v: boolean;
        canExpandV: boolean;
        entries_auto_default: boolean;
        entriesAutoDefault: boolean;
        headers_sensitive: boolean;
        headersSensitive: boolean;
        paramlist: any;
        show_actions: boolean;
        showActions: boolean;
        xml_layout: any;
        xmlLayout: any;
    }
}

export class BasicForm extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<BasicForm>;

    constructor(properties?: Partial<BasicForm.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BasicForm.ConstructorProperties>, ...args: any[]): void;

    // Properties
    can_expand_v: boolean;
    canExpandV: boolean;
    entries_auto_default: boolean;
    entriesAutoDefault: boolean;
    headers_sensitive: boolean;
    headersSensitive: boolean;
    paramlist: any;
    show_actions: boolean;
    showActions: boolean;
    xml_layout: any;
    xmlLayout: any;

    // Fields
    object: Gtk.Box;
    priv: BasicFormPriv;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activated', callback: (_source: this) => void): number;

    connect_after(signal: 'activated', callback: (_source: this) => void): number;

    emit(signal: 'activated'): void;

    connect(
        signal: 'holder-changed',
        callback: (_source: this, param: Gda.Holder, is_user_modif: boolean) => void
    ): number;

    connect_after(
        signal: 'holder-changed',
        callback: (_source: this, param: Gda.Holder, is_user_modif: boolean) => void
    ): number;

    emit(signal: 'holder-changed', param: Gda.Holder, is_user_modif: boolean): void;

    connect(signal: 'layout-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'layout-changed', callback: (_source: this) => void): number;

    emit(signal: 'layout-changed'): void;

    connect(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    connect_after(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    emit(signal: 'populate-popup', menu: Gtk.Menu): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](data_set: Gda.Set): BasicForm;
    static ['new'](...args: never[]): never;

    static new_in_dialog(
        data_set: Gda.Set,
        parent?: Gtk.Window | null,
        title?: string | null,
        header?: string | null
    ): BasicForm;

    // Members

    add_to_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void;

    entry_grab_focus(holder?: Gda.Holder | null): void;

    entry_set_editable(holder: Gda.Holder | null, editable: boolean): void;

    entry_set_visible(holder: Gda.Holder, show: boolean): void;

    get_data_set(): Gda.Set;

    get_entry_widget(holder: Gda.Holder): Gtk.Widget;

    get_label_widget(holder: Gda.Holder): Gtk.Widget;

    get_place_holder(placeholder_id: string): Gtk.Widget;

    has_changed(): boolean;

    is_valid(): boolean;

    remove_from_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void;

    reset(): void;

    set_as_reference(): void;

    set_entries_to_default(): void;

    set_layout_from_file(file_name: string, form_name: string): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_activated(): void;

    vfunc_holder_changed(holder: Gda.Holder, is_user_action: boolean): void;

    vfunc_layout_changed(): void;

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

export namespace Cloud {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        label_column: number;
        labelColumn: number;
        max_scale: number;
        maxScale: number;
        min_scale: number;
        minScale: number;
        model: Gda.DataModel;
        weight_column: number;
        weightColumn: number;
    }
}

export class Cloud extends Gtk.Box implements Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Cloud>;

    constructor(properties?: Partial<Cloud.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Cloud.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label_column: number;
    labelColumn: number;
    max_scale: number;
    maxScale: number;
    min_scale: number;
    minScale: number;
    model: Gda.DataModel;
    weight_column: number;
    weightColumn: number;

    // Fields
    object: Gtk.Box;
    priv: CloudPriv;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'activate', callback: (_source: this, object: number) => void): number;

    emit(signal: 'activate', object: number): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](model: Gda.DataModel, label_column: number, weight_column: number): Cloud;
    static ['new'](...args: never[]): never;

    // Members

    create_filter_widget(): Gtk.Widget;

    filter(filter?: string | null): void;

    set_selection_mode(mode: Gtk.SelectionMode): void;

    set_weight_func(func?: CloudWeightFunc | null): void;

    vfunc_activate(row: number): void;

    // Implemented Members

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

export namespace Combo {
    export interface ConstructorProperties extends Gtk.ComboBox.ConstructorProperties {
        [key: string]: any;

        as_list: boolean;
        asList: boolean;
        model: Gda.DataModel | any;
    }
}

export class Combo
    extends Gtk.ComboBox
    implements Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
    static $gtype: GObject.GType<Combo>;

    constructor(properties?: Partial<Combo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Combo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    as_list: boolean;
    asList: boolean;
    model: Gda.DataModel | any;

    // Fields
    object: Gtk.ComboBox;
    priv: ComboPrivate;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](): Combo;

    static new_with_model(model: Gda.DataModel, n_cols: number, cols_index: number): Combo;
    static new_with_model(...args: never[]): never;

    // Members

    add_null(add_null: boolean): void;

    is_null_selected(): boolean;

    set_data(model: Gda.DataModel, cols_index: number[]): void;
    set_data(...args: never[]): never;

    // Implemented Members

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;
    get_model(...args: never[]): never;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;
    set_model(...args: never[]): never;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

    clear(): void;

    clear_attributes(cell: Gtk.CellRenderer): void;

    get_area(): Gtk.CellArea | null;

    get_cells(): Gtk.CellRenderer[];

    pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

    pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

    reorder(cell: Gtk.CellRenderer, position: number): void;

    set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;

    vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

    vfunc_clear(): void;

    vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

    vfunc_get_area(): Gtk.CellArea | null;

    vfunc_get_cells(): Gtk.CellRenderer[];

    vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

    vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

    vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

    vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;
}

export namespace DataCellRendererBin {
    export interface ConstructorProperties extends Gtk.CellRendererPixbuf.ConstructorProperties {
        [key: string]: any;

        data_handler: Gda.DataHandler;
        dataHandler: Gda.DataHandler;
        editable: boolean;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        type: GObject.GType;
        value: GObject.Value;
    }
}

export class DataCellRendererBin extends Gtk.CellRendererPixbuf {
    static $gtype: GObject.GType<DataCellRendererBin>;

    constructor(properties?: Partial<DataCellRendererBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCellRendererBin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_handler: Gda.DataHandler;
    dataHandler: Gda.DataHandler;
    editable: boolean;
    to_be_deleted: boolean;
    toBeDeleted: boolean;
    type: GObject.GType;
    value: GObject.Value;

    // Fields
    priv: DataCellRendererBinPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: string, p0: GObject.Value) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: string, p0: GObject.Value) => void): number;

    emit(signal: 'changed', object: string, p0: any): void;

    // Constructors

    static ['new'](dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBin;
    static ['new'](...args: never[]): never;

    // Members

    vfunc_changed(path: string, new_value: any): void;
}

export namespace DataCellRendererBoolean {
    export interface ConstructorProperties extends Gtk.CellRendererToggle.ConstructorProperties {
        [key: string]: any;

        data_handler: Gda.DataHandler;
        dataHandler: Gda.DataHandler;
        editable: boolean;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        type: GObject.GType;
        value: GObject.Value;
    }
}

export class DataCellRendererBoolean extends Gtk.CellRendererToggle {
    static $gtype: GObject.GType<DataCellRendererBoolean>;

    constructor(properties?: Partial<DataCellRendererBoolean.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCellRendererBoolean.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_handler: Gda.DataHandler;
    dataHandler: Gda.DataHandler;
    editable: boolean;
    to_be_deleted: boolean;
    toBeDeleted: boolean;
    type: GObject.GType;
    value: GObject.Value;

    // Fields
    priv: DataCellRendererBooleanPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: string, p0: GObject.Value) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: string, p0: GObject.Value) => void): number;

    emit(signal: 'changed', object: string, p0: any): void;

    // Constructors

    static ['new'](dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBoolean;
    static ['new'](...args: never[]): never;

    // Members

    vfunc_changed(path: string, new_value: any): void;
}

export namespace DataCellRendererCombo {
    export interface ConstructorProperties extends Gtk.CellRendererText.ConstructorProperties {
        [key: string]: any;

        data_set: Set;
        dataSet: Set;
        data_set_source: any;
        dataSetSource: any;
        set_default_if_invalid: boolean;
        setDefaultIfInvalid: boolean;
        show_expander: boolean;
        showExpander: boolean;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        values: any;
        values_display: any;
        valuesDisplay: any;
    }
}

export class DataCellRendererCombo extends Gtk.CellRendererText {
    static $gtype: GObject.GType<DataCellRendererCombo>;

    constructor(properties?: Partial<DataCellRendererCombo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCellRendererCombo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_set: Set;
    dataSet: Set;
    data_set_source: any;
    dataSetSource: any;
    set_default_if_invalid: boolean;
    setDefaultIfInvalid: boolean;
    show_expander: boolean;
    showExpander: boolean;
    to_be_deleted: boolean;
    toBeDeleted: boolean;
    values: any;
    values_display: any;
    valuesDisplay: any;

    // Fields
    priv: DataCellRendererComboPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'changed',
        callback: (_source: this, object: string, p0: any | null, p1: any | null) => void
    ): number;

    connect_after(
        signal: 'changed',
        callback: (_source: this, object: string, p0: any | null, p1: any | null) => void
    ): number;

    emit(signal: 'changed', object: string, p0: any | null, p1: any | null): void;

    // Constructors

    static ['new'](paramlist: Set, source: SetSource): DataCellRendererCombo;
    static ['new'](...args: never[]): never;
}

export namespace DataCellRendererInfo {
    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {
        [key: string]: any;

        editable: boolean;
        group: any;
        iter: Gda.DataModelIter;
        store: DataStore;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
    }
}

export class DataCellRendererInfo extends Gtk.CellRenderer {
    static $gtype: GObject.GType<DataCellRendererInfo>;

    constructor(properties?: Partial<DataCellRendererInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCellRendererInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    editable: boolean;
    group: any;
    iter: Gda.DataModelIter;
    store: DataStore;
    to_be_deleted: boolean;
    toBeDeleted: boolean;

    // Fields
    priv: DataCellRendererInfoPriv;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'status-changed', callback: (_source: this, object: string, p0: unknown) => void): number;

    connect_after(signal: 'status-changed', callback: (_source: this, object: string, p0: unknown) => void): number;

    emit(signal: 'status-changed', object: string, p0: unknown): void;

    // Constructors

    static ['new'](store: DataStore, iter: Gda.DataModelIter, group: SetGroup): DataCellRendererInfo;

    // Members

    vfunc_status_changed(path: string, requested_action: Gda.ValueAttribute): void;
}

export namespace DataCellRendererTextual {
    export interface ConstructorProperties extends Gtk.CellRendererText.ConstructorProperties {
        [key: string]: any;

        data_handler: Gda.DataHandler;
        dataHandler: Gda.DataHandler;
        options: string;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        type: GObject.GType;
        value: any;
    }
}

export class DataCellRendererTextual extends Gtk.CellRendererText {
    static $gtype: GObject.GType<DataCellRendererTextual>;

    constructor(properties?: Partial<DataCellRendererTextual.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCellRendererTextual.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_handler: Gda.DataHandler;
    dataHandler: Gda.DataHandler;
    options: string;
    to_be_deleted: boolean;
    toBeDeleted: boolean;
    type: GObject.GType;
    value: any;

    // Fields
    priv: DataCellRendererTextualPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: string, p0: GObject.Value) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: string, p0: GObject.Value) => void): number;

    emit(signal: 'changed', object: string, p0: any): void;

    // Constructors

    static ['new'](dh: Gda.DataHandler | null, type: GObject.GType, options: string): DataCellRendererTextual;
    static ['new'](...args: never[]): never;

    // Members

    vfunc_changed(path: string, new_value: any): void;
}

export namespace DataFilter {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        data_widget: DataProxy;
        dataWidget: DataProxy;
    }
}

export class DataFilter extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DataFilter>;

    constructor(properties?: Partial<DataFilter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataFilter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_widget: DataProxy;
    dataWidget: DataProxy;

    // Fields
    object: Gtk.Box;
    priv: DataFilterPriv;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](data_widget: DataProxy): DataFilter;
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

export namespace DataProxyInfo {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        data_proxy: DataProxy;
        dataProxy: DataProxy;
        ui_manager: Gtk.UIManager;
        uiManager: Gtk.UIManager;
    }
}

export class DataProxyInfo extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<DataProxyInfo>;

    constructor(properties?: Partial<DataProxyInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataProxyInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_proxy: DataProxy;
    dataProxy: DataProxy;
    ui_manager: Gtk.UIManager;
    uiManager: Gtk.UIManager;

    // Fields
    object: Gtk.Box;
    priv: DataProxyInfoPriv;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](data_proxy: DataProxy, flags: DataProxyInfoFlag): DataProxyInfo;
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

export namespace DataStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        model: any;
        prepend_null_entry: boolean;
        prependNullEntry: boolean;
        proxy: any;
    }
}

export class DataStore extends GObject.Object implements Gtk.TreeModel {
    static $gtype: GObject.GType<DataStore>;

    constructor(properties?: Partial<DataStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: any;
    prepend_null_entry: boolean;
    prependNullEntry: boolean;
    proxy: any;

    // Fields
    object: GObject.Object;
    priv: DataStorePriv;

    // Members

    append(iter: Gtk.TreeIter): boolean;

    ['delete'](iter: Gtk.TreeIter): void;

    get_iter_from_values(values: GObject.Value[], cols_index: number): [boolean, Gtk.TreeIter];

    get_proxy(): Gda.DataProxy;

    get_row_from_iter(iter: Gtk.TreeIter): number;

    set_value(iter: Gtk.TreeIter, col: number, value: any): boolean;

    undelete(iter: Gtk.TreeIter): void;

    static new(model: Gda.DataModel): Gtk.TreeModel;

    // Implemented Members

    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;

    foreach(func: Gtk.TreeModelForeachFunc): void;

    get_column_type(index_: number): GObject.GType;

    get_flags(): Gtk.TreeModelFlags;

    get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    get_iter_first(): [boolean, Gtk.TreeIter];

    get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

    get_n_columns(): number;

    get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    get_string_from_iter(iter: Gtk.TreeIter): string;

    get_value(iter: Gtk.TreeIter, column: number): unknown;

    iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    iter_has_child(iter: Gtk.TreeIter): boolean;

    iter_n_children(iter?: Gtk.TreeIter | null): number;

    iter_next(iter: Gtk.TreeIter): boolean;

    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    iter_previous(iter: Gtk.TreeIter): boolean;

    ref_node(iter: Gtk.TreeIter): void;

    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_deleted(path: Gtk.TreePath): void;

    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

    unref_node(iter: Gtk.TreeIter): void;

    vfunc_get_column_type(index_: number): GObject.GType;

    vfunc_get_flags(): Gtk.TreeModelFlags;

    vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    vfunc_get_n_columns(): number;

    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;

    vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;

    vfunc_iter_next(iter: Gtk.TreeIter): boolean;

    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

    vfunc_ref_node(iter: Gtk.TreeIter): void;

    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_deleted(path: Gtk.TreePath): void;

    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_unref_node(iter: Gtk.TreeIter): void;
}

export namespace Entry {
    export interface ConstructorProperties extends Gtk.Entry.ConstructorProperties {
        [key: string]: any;

        prefix: string;
        suffix: string;
    }
}

export class Entry extends Gtk.Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
    static $gtype: GObject.GType<Entry>;

    constructor(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    prefix: string;
    suffix: string;

    // Fields
    entry: Gtk.Entry;
    priv: EntryPrivate;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](prefix?: string | null, suffix?: string | null): Entry;
    static ['new'](...args: never[]): never;

    // Members

    get_text(): string;

    set_max_length(max: number): void;

    set_prefix(prefix: string): void;

    set_suffix(suffix: string): void;

    set_text(text?: string | null): void;
    set_text(...args: never[]): never;

    set_width_chars(max_width: number): void;

    vfunc_assume_delete(virt_start_pos: number, virt_end_pos: number, offset: number): void;

    vfunc_assume_insert(text: string, text_length: number, virt_pos: number, offset: number): void;

    vfunc_get_empty_text(): string;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    copy_clipboard(): void;

    cut_clipboard(): void;

    delete_selection(): void;

    delete_text(start_pos: number, end_pos: number): void;

    get_chars(start_pos: number, end_pos: number): string;

    get_editable(): boolean;

    get_position(): number;

    get_selection_bounds(): [boolean, number | null, number | null];

    insert_text(new_text: string, new_text_length: number, position: number): number;

    paste_clipboard(): void;

    select_region(start_pos: number, end_pos: number): void;

    set_editable(is_editable: boolean): void;

    set_position(position: number): void;

    vfunc_changed(): void;

    vfunc_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_get_chars(start_pos: number, end_pos: number): string;

    vfunc_get_position(): number;

    vfunc_get_selection_bounds(): [boolean, number | null, number | null];

    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_set_position(position: number): void;

    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export namespace EntryBin {
    export interface ConstructorProperties extends EntryWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class EntryBin extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryBin>;

    constructor(properties?: Partial<EntryBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryBin.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: EntryWrapper | any;
    priv: EntryBinPrivate | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler, type: GObject.GType): EntryBin;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryBoolean {
    export interface ConstructorProperties extends EntryWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class EntryBoolean
    extends EntryWrapper
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryBoolean>;

    constructor(properties?: Partial<EntryBoolean.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryBoolean.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: EntryWrapper | any;
    priv: EntryBooleanPrivate | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler, type: GObject.GType): EntryBoolean;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryCombo {
    export interface ConstructorProperties extends EntryShell.ConstructorProperties {
        [key: string]: any;

        set_default_if_invalid: boolean;
        setDefaultIfInvalid: boolean;
    }
}

export class EntryCombo extends EntryShell implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryCombo>;

    constructor(properties?: Partial<EntryCombo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryCombo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set_default_if_invalid: boolean;
    setDefaultIfInvalid: boolean;

    // Fields
    object: EntryShell | any;
    priv: EntryComboPriv | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](paramlist: Set, source: SetSource): EntryCombo;
    static ['new'](...args: never[]): never;

    // Members

    get_all_values(): GObject.Value[];

    get_reference_values(): GObject.Value[];

    get_values(): GObject.Value[];

    set_default_values(values: GObject.Value[]): void;

    set_reference_values(values: GObject.Value[]): void;

    set_values(values?: GObject.Value[] | null): boolean;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryCommonTime {
    export interface ConstructorProperties extends EntryWrapper.ConstructorProperties {
        [key: string]: any;

        editing_canceled: boolean;
        editingCanceled: boolean;
        type: number;
    }
}

export class EntryCommonTime
    extends EntryWrapper
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryCommonTime>;

    constructor(properties?: Partial<EntryCommonTime.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryCommonTime.ConstructorProperties>, ...args: any[]): void;

    // Properties
    editing_canceled: boolean;
    editingCanceled: boolean;
    type: number;

    // Fields
    object: EntryWrapper | any;
    priv: EntryCommonTimePrivate | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryDate {
    export interface ConstructorProperties extends EntryCommonTime.ConstructorProperties {
        [key: string]: any;
    }
}

export class EntryDate
    extends EntryCommonTime
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryDate>;

    constructor(properties?: Partial<EntryDate.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryDate.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: EntryCommonTime | any;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;
    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler): EntryDate;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryNone {
    export interface ConstructorProperties extends EntryWrapper.ConstructorProperties {
        [key: string]: any;
    }
}

export class EntryNone extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryNone>;

    constructor(properties?: Partial<EntryNone.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryNone.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: EntryWrapper | any;
    priv: EntryNonePrivate | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](type: GObject.GType): EntryNone;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryNumber {
    export interface ConstructorProperties extends EntryWrapper.ConstructorProperties {
        [key: string]: any;

        editing_canceled: boolean;
        editingCanceled: boolean;
        options: string;
    }
}

export class EntryNumber
    extends EntryWrapper
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryNumber>;

    constructor(properties?: Partial<EntryNumber.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryNumber.ConstructorProperties>, ...args: any[]): void;

    // Properties
    editing_canceled: boolean;
    editingCanceled: boolean;
    options: string;

    // Fields
    object: EntryWrapper | any;
    priv: EntryNumberPrivate | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler, type: GObject.GType, options: string): EntryNumber;
    static ['new'](...args: never[]): never;

    // Members

    static is_type_numeric(type: GObject.GType): boolean;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryShell {
    export interface ConstructorProperties extends Gtk.Viewport.ConstructorProperties {
        [key: string]: any;

        actions: boolean;
        handler: Gda.DataHandler;
        is_cell_renderer: boolean;
        isCellRenderer: boolean;
    }
}

export class EntryShell extends Gtk.Viewport implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryShell>;

    constructor(properties?: Partial<EntryShell.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryShell.ConstructorProperties>, ...args: any[]): void;

    // Properties
    actions: boolean;
    handler: Gda.DataHandler;
    is_cell_renderer: boolean;
    isCellRenderer: boolean;

    // Fields
    object: Gtk.Viewport;
    priv: EntryShellPriv;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Members

    pack_entry(main_widget: Gtk.Widget): void;

    refresh(): void;

    set_ucolor(red: number, green: number, blue: number, alpha: number): void;

    set_unknown(unknown: boolean): void;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryString {
    export interface ConstructorProperties extends EntryWrapper.ConstructorProperties {
        [key: string]: any;

        editing_canceled: boolean;
        editingCanceled: boolean;
        multiline: boolean;
        options: string;
    }
}

export class EntryString
    extends EntryWrapper
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryString>;

    constructor(properties?: Partial<EntryString.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryString.ConstructorProperties>, ...args: any[]): void;

    // Properties
    editing_canceled: boolean;
    editingCanceled: boolean;
    multiline: boolean;
    options: string;

    // Fields
    object: EntryWrapper | any;
    priv: EntryStringPrivate | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler, type: GObject.GType, options: string): EntryString;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryTime {
    export interface ConstructorProperties extends EntryCommonTime.ConstructorProperties {
        [key: string]: any;
    }
}

export class EntryTime
    extends EntryCommonTime
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryTime>;

    constructor(properties?: Partial<EntryTime.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryTime.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: EntryCommonTime | any;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;
    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler): EntryTime;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryTimestamp {
    export interface ConstructorProperties extends EntryCommonTime.ConstructorProperties {
        [key: string]: any;
    }
}

export class EntryTimestamp
    extends EntryCommonTime
    implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryTimestamp>;

    constructor(properties?: Partial<EntryTimestamp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryTimestamp.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: EntryCommonTime | any;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;
    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](dh: Gda.DataHandler): EntryTimestamp;
    static ['new'](...args: never[]): never;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace EntryWrapper {
    export interface ConstructorProperties extends EntryShell.ConstructorProperties {
        [key: string]: any;

        set_default_if_invalid: boolean;
        setDefaultIfInvalid: boolean;
    }
}

export class EntryWrapper extends EntryShell implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<EntryWrapper>;

    constructor(properties?: Partial<EntryWrapper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryWrapper.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set_default_if_invalid: boolean;
    setDefaultIfInvalid: boolean;

    // Fields
    object: EntryShell | any;
    priv: EntryWrapperPriv | any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Members

    contents_activated(): void;

    contents_changed(): void;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_grab_focus(): void;

    vfunc_is_valid(): boolean;

    vfunc_real_get_value(): unknown;

    vfunc_real_set_value(value: any): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_value_is_equal_to(value: any): boolean;

    vfunc_value_is_null(): boolean;

    // Implemented Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace Form {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        info: DataProxyInfo;
        model: Gda.DataModel;
        raw_form: RawForm;
        rawForm: RawForm;
    }
}

export class Form
    extends Gtk.Box
    implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Form>;

    constructor(properties?: Partial<Form.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Form.ConstructorProperties>, ...args: any[]): void;

    // Properties
    info: DataProxyInfo;
    model: Gda.DataModel;
    raw_form: RawForm;
    rawForm: RawForm;

    // Fields
    object: Gtk.Box;
    priv: FormPriv;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](model: Gda.DataModel): Form;
    static ['new'](...args: never[]): never;

    // Implemented Members

    column_set_editable(column: number, editable: boolean): void;

    column_show_actions(column: number, show_actions: boolean): void;

    get_actions_group(): Gtk.ActionGroup;

    get_proxy(): Gda.DataProxy;

    get_write_mode(): DataProxyWriteMode;

    perform_action(action: Action): void;

    set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_get_actions_group(): Gtk.ActionGroup;

    vfunc_get_proxy(): Gda.DataProxy;

    vfunc_get_write_mode(): DataProxyWriteMode;

    vfunc_proxy_changed(proxy: Gda.DataProxy): void;

    vfunc_set_column_editable(column: number, editable: boolean): void;

    vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_show_column_actions(column: number, show_actions: boolean): void;

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

export namespace FormattedEntry {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        format: string;
        mask: string;
    }
}

export class FormattedEntry
    extends Entry
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
    static $gtype: GObject.GType<FormattedEntry>;

    constructor(properties?: Partial<FormattedEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormattedEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    format: string;
    mask: string;

    // Fields
    entry: Entry | any;
    priv: FormattedEntryPrivate | any;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](format: string, mask?: string | null): FormattedEntry;
    static ['new'](...args: never[]): never;

    // Members

    get_text(): string;

    set_insert_func(insert_func?: FormattedEntryInsertFunc | null): void;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    copy_clipboard(): void;

    cut_clipboard(): void;

    delete_selection(): void;

    delete_text(start_pos: number, end_pos: number): void;

    get_chars(start_pos: number, end_pos: number): string;

    get_editable(): boolean;

    get_position(): number;

    get_selection_bounds(): [boolean, number | null, number | null];

    insert_text(new_text: string, new_text_length: number, position: number): number;

    paste_clipboard(): void;

    select_region(start_pos: number, end_pos: number): void;

    set_editable(is_editable: boolean): void;

    set_position(position: number): void;

    vfunc_changed(): void;

    vfunc_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_get_chars(start_pos: number, end_pos: number): string;

    vfunc_get_position(): number;

    vfunc_get_selection_bounds(): [boolean, number | null, number | null];

    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_set_position(position: number): void;

    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export namespace Grid {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        info: DataProxyInfo;
        model: Gda.DataModel;
        raw_grid: RawGrid;
        rawGrid: RawGrid;
    }
}

export class Grid
    extends Gtk.Box
    implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Grid>;

    constructor(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]): void;

    // Properties
    info: DataProxyInfo;
    model: Gda.DataModel;
    raw_grid: RawGrid;
    rawGrid: RawGrid;

    // Fields
    object: Gtk.Box;
    priv: GridPriv;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](model?: Gda.DataModel | null): Grid;
    static ['new'](...args: never[]): never;

    // Members

    set_sample_size(sample_size: number): void;

    // Implemented Members

    column_set_editable(column: number, editable: boolean): void;

    column_show_actions(column: number, show_actions: boolean): void;

    get_actions_group(): Gtk.ActionGroup;

    get_proxy(): Gda.DataProxy;

    get_write_mode(): DataProxyWriteMode;

    perform_action(action: Action): void;

    set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_get_actions_group(): Gtk.ActionGroup;

    vfunc_get_proxy(): Gda.DataProxy;

    vfunc_get_write_mode(): DataProxyWriteMode;

    vfunc_proxy_changed(proxy: Gda.DataProxy): void;

    vfunc_set_column_editable(column: number, editable: boolean): void;

    vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_show_column_actions(column: number, show_actions: boolean): void;

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

export namespace Login {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        dsn: string;
        valid: boolean;
    }
}

export class Login extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Login>;

    constructor(properties?: Partial<Login.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Login.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dsn: string;
    valid: boolean;

    // Fields
    priv: LoginPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, object: boolean) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, object: boolean) => void): number;

    emit(signal: 'changed', object: boolean): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](dsn?: string | null): Login;
    static ['new'](...args: never[]): never;

    // Members

    get_connection_information(): Gda.DsnInfo;

    set_connection_information(cinfo: Gda.DsnInfo): void;

    set_dsn(dsn?: string | null): void;

    set_mode(mode: LoginMode): void;

    vfunc_changed(is_valid: boolean): void;

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

export namespace NumericEntry {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        decimal_sep: number;
        decimalSep: number;
        n_decimals: number;
        nDecimals: number;
        thousands_sep: number;
        thousandsSep: number;
        type: GObject.GType;
    }
}

export class NumericEntry extends Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
    static $gtype: GObject.GType<NumericEntry>;

    constructor(properties?: Partial<NumericEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NumericEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    decimal_sep: number;
    decimalSep: number;
    n_decimals: number;
    nDecimals: number;
    thousands_sep: number;
    thousandsSep: number;
    type: GObject.GType;

    // Fields
    entry: Entry | any;
    priv: NumericEntryPrivate | any;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](type: GObject.GType): NumericEntry;
    static ['new'](...args: never[]): never;

    // Members

    get_value(): unknown;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    copy_clipboard(): void;

    cut_clipboard(): void;

    delete_selection(): void;

    delete_text(start_pos: number, end_pos: number): void;

    get_chars(start_pos: number, end_pos: number): string;

    get_editable(): boolean;

    get_position(): number;

    get_selection_bounds(): [boolean, number | null, number | null];

    insert_text(new_text: string, new_text_length: number, position: number): number;

    paste_clipboard(): void;

    select_region(start_pos: number, end_pos: number): void;

    set_editable(is_editable: boolean): void;

    set_position(position: number): void;

    vfunc_changed(): void;

    vfunc_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_delete_text(start_pos: number, end_pos: number): void;

    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_get_chars(start_pos: number, end_pos: number): string;

    vfunc_get_position(): number;

    vfunc_get_selection_bounds(): [boolean, number | null, number | null];

    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

    vfunc_set_position(position: number): void;

    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export namespace ProviderSelector {
    export interface ConstructorProperties extends Combo.ConstructorProperties {
        [key: string]: any;
    }
}

export class ProviderSelector
    extends Combo
    implements Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
    static $gtype: GObject.GType<ProviderSelector>;

    constructor(properties?: Partial<ProviderSelector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProviderSelector.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProviderSelectorPrivate | any;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](): ProviderSelector;

    // Members

    get_provider(): string;

    get_provider_obj(): Gda.ServerProvider;

    set_provider(provider?: string | null): boolean;

    // Implemented Members

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;
    get_model(...args: never[]): never;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;
    set_model(...args: never[]): never;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

    editing_done(): void;

    remove_widget(): void;

    start_editing(event?: Gdk.Event | null): void;

    vfunc_editing_done(): void;

    vfunc_remove_widget(): void;

    vfunc_start_editing(event?: Gdk.Event | null): void;

    add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

    clear(): void;

    clear_attributes(cell: Gtk.CellRenderer): void;

    get_area(): Gtk.CellArea | null;

    get_cells(): Gtk.CellRenderer[];

    pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

    pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

    reorder(cell: Gtk.CellRenderer, position: number): void;

    set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;

    vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

    vfunc_clear(): void;

    vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

    vfunc_get_area(): Gtk.CellArea | null;

    vfunc_get_cells(): Gtk.CellRenderer[];

    vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

    vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

    vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

    vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;
}

export namespace RawForm {
    export interface ConstructorProperties extends BasicForm.ConstructorProperties {
        [key: string]: any;

        model: Gda.DataModel;
    }
}

export class RawForm
    extends BasicForm
    implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<RawForm>;

    constructor(properties?: Partial<RawForm.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RawForm.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: Gda.DataModel;

    // Fields
    object: BasicForm | any;
    priv: RawFormPriv | any;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](model?: Gda.DataModel | null): RawForm;
    static ['new'](...args: never[]): never;

    // Implemented Members

    column_set_editable(column: number, editable: boolean): void;

    column_show_actions(column: number, show_actions: boolean): void;

    get_actions_group(): Gtk.ActionGroup;

    get_proxy(): Gda.DataProxy;

    get_write_mode(): DataProxyWriteMode;

    perform_action(action: Action): void;

    set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_get_actions_group(): Gtk.ActionGroup;

    vfunc_get_proxy(): Gda.DataProxy;

    vfunc_get_write_mode(): DataProxyWriteMode;

    vfunc_proxy_changed(proxy: Gda.DataProxy): void;

    vfunc_set_column_editable(column: number, editable: boolean): void;

    vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_show_column_actions(column: number, show_actions: boolean): void;

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

export namespace RawGrid {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        global_actions_visible: boolean;
        globalActionsVisible: boolean;
        info_cell_visible: boolean;
        infoCellVisible: boolean;
        model: Gda.DataModel | any;
        xml_layout: any;
        xmlLayout: any;
    }
}

export class RawGrid
    extends Gtk.TreeView
    implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<RawGrid>;

    constructor(properties?: Partial<RawGrid.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RawGrid.ConstructorProperties>, ...args: any[]): void;

    // Properties
    global_actions_visible: boolean;
    globalActionsVisible: boolean;
    info_cell_visible: boolean;
    infoCellVisible: boolean;
    model: Gda.DataModel | any;
    xml_layout: any;
    xmlLayout: any;

    // Fields
    object: Gtk.TreeView;
    priv: RawGridPriv;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'double-clicked', callback: (_source: this, row: number) => void): number;

    connect_after(signal: 'double-clicked', callback: (_source: this, row: number) => void): number;

    emit(signal: 'double-clicked', row: number): void;

    connect(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    connect_after(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;

    emit(signal: 'populate-popup', menu: Gtk.Menu): void;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](model: Gda.DataModel): RawGrid;
    static ['new'](...args: never[]): never;

    // Members

    add_formatting_function(func: RawGridFormatFunc, dnotify?: GLib.DestroyNotify | null): void;

    remove_formatting_function(func: RawGridFormatFunc): void;

    set_layout_from_file(file_name: string, grid_name: string): void;

    set_sample_size(sample_size: number): void;

    set_sample_start(sample_start: number): void;

    vfunc_double_clicked(row: number): void;

    vfunc_populate_popup(menu: Gtk.Menu): void;

    // Implemented Members

    column_set_editable(column: number, editable: boolean): void;

    column_show_actions(column: number, show_actions: boolean): void;

    get_actions_group(): Gtk.ActionGroup;

    get_proxy(): Gda.DataProxy;

    get_write_mode(): DataProxyWriteMode;

    perform_action(action: Action): void;

    set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_get_actions_group(): Gtk.ActionGroup;

    vfunc_get_proxy(): Gda.DataProxy;

    vfunc_get_write_mode(): DataProxyWriteMode;

    vfunc_proxy_changed(proxy: Gda.DataProxy): void;

    vfunc_set_column_editable(column: number, editable: boolean): void;

    vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_show_column_actions(column: number, show_actions: boolean): void;

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;
    get_model(...args: never[]): never;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;
    set_model(...args: never[]): never;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;

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

    get_border(): [boolean, Gtk.Border];

    get_hadjustment(): Gtk.Adjustment;

    get_hscroll_policy(): Gtk.ScrollablePolicy;

    get_vadjustment(): Gtk.Adjustment;

    get_vscroll_policy(): Gtk.ScrollablePolicy;

    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;

    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;

    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

    vfunc_get_border(): [boolean, Gtk.Border];
}

export namespace RtEditor {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        buffer: Gtk.TextBuffer;
        in_scrolled_window: boolean;
        inScrolledWindow: boolean;
        no_background: boolean;
        noBackground: boolean;
        show_markup: boolean;
        showMarkup: boolean;
    }
}

export class RtEditor extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<RtEditor>;

    constructor(properties?: Partial<RtEditor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RtEditor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    buffer: Gtk.TextBuffer;
    in_scrolled_window: boolean;
    inScrolledWindow: boolean;
    no_background: boolean;
    noBackground: boolean;
    show_markup: boolean;
    showMarkup: boolean;

    // Fields
    object: Gtk.Box;
    priv: RtEditorPriv;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): RtEditor;
    static ['new'](...args: never[]): never;

    // Members

    get_contents(): string;

    set_contents(markup: string, length: number): void;

    set_editable(editable: boolean): void;

    vfunc_changed(): void;

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

export namespace ServerOperation {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        hide_single_header: boolean;
        hideSingleHeader: boolean;
        server_operation: Gda.ServerOperation;
        serverOperation: Gda.ServerOperation;
    }
}

export class ServerOperation extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ServerOperation>;

    constructor(properties?: Partial<ServerOperation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServerOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    hide_single_header: boolean;
    hideSingleHeader: boolean;
    server_operation: Gda.ServerOperation;
    serverOperation: Gda.ServerOperation;

    // Fields
    object: Gtk.Box;
    priv: ServerOperationPriv;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](op: Gda.ServerOperation): ServerOperation;
    static ['new'](...args: never[]): never;

    static new_in_dialog(
        op: Gda.ServerOperation,
        parent?: Gtk.Window | null,
        title?: string | null,
        header?: string | null
    ): ServerOperation;

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

export namespace Set {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        set: Gda.Set | any;
    }
}

export class Set extends GObject.Object {
    static $gtype: GObject.GType<Set>;

    constructor(properties?: Partial<Set.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Set.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set: Gda.Set | any;

    // Fields
    object: GObject.Object;
    priv: SetPriv;
    sources_list: SetSource[];
    groups_list: SetGroup[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'public-data-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'public-data-changed', callback: (_source: this) => void): number;

    emit(signal: 'public-data-changed'): void;

    connect(signal: 'source-model-changed', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'source-model-changed', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'source-model-changed', object: any | null): void;

    // Constructors

    static ['new'](set: Gda.Set): Set;

    // Members

    get_group(holder: Gda.Holder): SetGroup;

    vfunc_public_data_changed(): void;

    vfunc_source_model_changed(source: SetSource): void;
}

export namespace TreeStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        tree: Gda.Tree;
    }
}

export class TreeStore extends GObject.Object implements Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel {
    static $gtype: GObject.GType<TreeStore>;

    constructor(properties?: Partial<TreeStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    tree: Gda.Tree;

    // Fields
    object: GObject.Object;
    priv: TreeStorePriv;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'drag-can-drag', callback: (_source: this, object: string) => boolean): number;

    connect_after(signal: 'drag-can-drag', callback: (_source: this, object: string) => boolean): number;

    emit(signal: 'drag-can-drag', object: string): void;

    connect(signal: 'drag-can-drop', callback: (_source: this, object: string, p0: any | null) => boolean): number;

    connect_after(
        signal: 'drag-can-drop',
        callback: (_source: this, object: string, p0: any | null) => boolean
    ): number;

    emit(signal: 'drag-can-drop', object: string, p0: any | null): void;

    connect(signal: 'drag-delete', callback: (_source: this, object: string) => boolean): number;

    connect_after(signal: 'drag-delete', callback: (_source: this, object: string) => boolean): number;

    emit(signal: 'drag-delete', object: string): void;

    connect(signal: 'drag-drop', callback: (_source: this, object: string, p0: any | null) => boolean): number;

    connect_after(signal: 'drag-drop', callback: (_source: this, object: string, p0: any | null) => boolean): number;

    emit(signal: 'drag-drop', object: string, p0: any | null): void;

    connect(signal: 'drag-get', callback: (_source: this, object: string, p0: any | null) => boolean): number;

    connect_after(signal: 'drag-get', callback: (_source: this, object: string, p0: any | null) => boolean): number;

    emit(signal: 'drag-get', object: string, p0: any | null): void;

    // Members

    get_iter_from_node(iter: Gtk.TreeIter, node: Gda.TreeNode): boolean;

    get_node(iter: Gtk.TreeIter): Gda.TreeNode;

    vfunc_drag_can_drag(path: string): boolean;

    vfunc_drag_can_drop(path: string, selection_data: Gtk.SelectionData): boolean;

    vfunc_drag_delete(path: string): boolean;

    vfunc_drag_drop(path: string, selection_data: Gtk.SelectionData): boolean;

    vfunc_drag_get(path: string, selection_data: Gtk.SelectionData): boolean;

    static newv(tree: Gda.Tree, n_columns: number, types: GObject.GType, attribute_names: string): Gtk.TreeModel;
    static newv(...args: never[]): never;

    // Implemented Members

    drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    drag_data_delete(path: Gtk.TreePath): boolean;

    drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    row_draggable(path: Gtk.TreePath): boolean;

    vfunc_drag_data_delete(path: Gtk.TreePath): boolean;

    vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

    vfunc_row_draggable(path: Gtk.TreePath): boolean;

    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;

    foreach(func: Gtk.TreeModelForeachFunc): void;

    get_column_type(index_: number): GObject.GType;

    get_flags(): Gtk.TreeModelFlags;

    get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    get_iter_first(): [boolean, Gtk.TreeIter];

    get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

    get_n_columns(): number;

    get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    get_string_from_iter(iter: Gtk.TreeIter): string;

    get_value(iter: Gtk.TreeIter, column: number): unknown;

    iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    iter_has_child(iter: Gtk.TreeIter): boolean;

    iter_n_children(iter?: Gtk.TreeIter | null): number;

    iter_next(iter: Gtk.TreeIter): boolean;

    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    iter_previous(iter: Gtk.TreeIter): boolean;

    ref_node(iter: Gtk.TreeIter): void;

    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_deleted(path: Gtk.TreePath): void;

    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

    unref_node(iter: Gtk.TreeIter): void;

    vfunc_get_column_type(index_: number): GObject.GType;

    vfunc_get_flags(): Gtk.TreeModelFlags;

    vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

    vfunc_get_n_columns(): number;

    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

    vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;

    vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;

    vfunc_iter_next(iter: Gtk.TreeIter): boolean;

    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

    vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

    vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

    vfunc_ref_node(iter: Gtk.TreeIter): void;

    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_deleted(path: Gtk.TreePath): void;

    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

    vfunc_unref_node(iter: Gtk.TreeIter): void;
}

export class BasicFormPriv {
    static $gtype: GObject.GType<BasicFormPriv>;

    constructor(copy: BasicFormPriv);
}

export class CloudPriv {
    static $gtype: GObject.GType<CloudPriv>;

    constructor(copy: CloudPriv);
}

export class ComboPrivate {
    static $gtype: GObject.GType<ComboPrivate>;

    constructor(copy: ComboPrivate);
}

export class DataCellRendererBinPrivate {
    static $gtype: GObject.GType<DataCellRendererBinPrivate>;

    constructor(copy: DataCellRendererBinPrivate);
}

export class DataCellRendererBooleanPrivate {
    static $gtype: GObject.GType<DataCellRendererBooleanPrivate>;

    constructor(copy: DataCellRendererBooleanPrivate);
}

export class DataCellRendererComboPrivate {
    static $gtype: GObject.GType<DataCellRendererComboPrivate>;

    constructor(copy: DataCellRendererComboPrivate);
}

export class DataCellRendererInfoPriv {
    static $gtype: GObject.GType<DataCellRendererInfoPriv>;

    constructor(copy: DataCellRendererInfoPriv);
}

export class DataCellRendererTextualPrivate {
    static $gtype: GObject.GType<DataCellRendererTextualPrivate>;

    constructor(copy: DataCellRendererTextualPrivate);
}

export class DataFilterPriv {
    static $gtype: GObject.GType<DataFilterPriv>;

    constructor(copy: DataFilterPriv);
}

export class DataProxyInfoPriv {
    static $gtype: GObject.GType<DataProxyInfoPriv>;

    constructor(copy: DataProxyInfoPriv);
}

export class DataStorePriv {
    static $gtype: GObject.GType<DataStorePriv>;

    constructor(copy: DataStorePriv);
}

export class EntryBinPrivate {
    static $gtype: GObject.GType<EntryBinPrivate>;

    constructor(copy: EntryBinPrivate);
}

export class EntryBooleanPrivate {
    static $gtype: GObject.GType<EntryBooleanPrivate>;

    constructor(copy: EntryBooleanPrivate);
}

export class EntryComboPriv {
    static $gtype: GObject.GType<EntryComboPriv>;

    constructor(copy: EntryComboPriv);
}

export class EntryCommonTimePrivate {
    static $gtype: GObject.GType<EntryCommonTimePrivate>;

    constructor(copy: EntryCommonTimePrivate);
}

export class EntryDatePrivate {
    static $gtype: GObject.GType<EntryDatePrivate>;

    constructor(copy: EntryDatePrivate);
}

export class EntryNonePrivate {
    static $gtype: GObject.GType<EntryNonePrivate>;

    constructor(copy: EntryNonePrivate);
}

export class EntryNumberPrivate {
    static $gtype: GObject.GType<EntryNumberPrivate>;

    constructor(copy: EntryNumberPrivate);
}

export class EntryPrivate {
    static $gtype: GObject.GType<EntryPrivate>;

    constructor(copy: EntryPrivate);
}

export class EntryShellPriv {
    static $gtype: GObject.GType<EntryShellPriv>;

    constructor(copy: EntryShellPriv);
}

export class EntryStringPrivate {
    static $gtype: GObject.GType<EntryStringPrivate>;

    constructor(copy: EntryStringPrivate);
}

export class EntryTimePrivate {
    static $gtype: GObject.GType<EntryTimePrivate>;

    constructor(copy: EntryTimePrivate);
}

export class EntryTimestampPrivate {
    static $gtype: GObject.GType<EntryTimestampPrivate>;

    constructor(copy: EntryTimestampPrivate);
}

export class EntryWrapperPriv {
    static $gtype: GObject.GType<EntryWrapperPriv>;

    constructor(copy: EntryWrapperPriv);
}

export class FormPriv {
    static $gtype: GObject.GType<FormPriv>;

    constructor(copy: FormPriv);
}

export class FormattedEntryPrivate {
    static $gtype: GObject.GType<FormattedEntryPrivate>;

    constructor(copy: FormattedEntryPrivate);
}

export class GridPriv {
    static $gtype: GObject.GType<GridPriv>;

    constructor(copy: GridPriv);
}

export class LoginPrivate {
    static $gtype: GObject.GType<LoginPrivate>;

    constructor(copy: LoginPrivate);
}

export class NumericEntryPrivate {
    static $gtype: GObject.GType<NumericEntryPrivate>;

    constructor(copy: NumericEntryPrivate);
}

export class Plugin {
    static $gtype: GObject.GType<Plugin>;

    constructor(copy: Plugin);

    // Fields
    plugin_name: string;
    plugin_descr: string;
    plugin_file: string;
    nb_g_types: number;
    valid_g_types: GObject.GType;
    options_xml_spec: string;

    // Members
    declare(): void;
}

export class ProviderSelectorPrivate {
    static $gtype: GObject.GType<ProviderSelectorPrivate>;

    constructor(copy: ProviderSelectorPrivate);
}

export class RawFormPriv {
    static $gtype: GObject.GType<RawFormPriv>;

    constructor(copy: RawFormPriv);
}

export class RawGridPriv {
    static $gtype: GObject.GType<RawGridPriv>;

    constructor(copy: RawGridPriv);
}

export class RtEditorPriv {
    static $gtype: GObject.GType<RtEditorPriv>;

    constructor(copy: RtEditorPriv);
}

export class ServerOperationPriv {
    static $gtype: GObject.GType<ServerOperationPriv>;

    constructor(copy: ServerOperationPriv);
}

export class SetGroup {
    static $gtype: GObject.GType<SetGroup>;

    constructor(group: Gda.SetGroup);
    constructor(copy: SetGroup);

    // Fields
    group: Gda.SetGroup;
    source: SetSource;

    // Constructors
    static ['new'](group: Gda.SetGroup): SetGroup;

    // Members
    copy(): SetGroup;

    free(): void;

    get_group(): Gda.SetGroup;

    get_source(): SetSource;

    set_group(group: Gda.SetGroup): void;

    set_source(source: SetSource): void;
}

export class SetPriv {
    static $gtype: GObject.GType<SetPriv>;

    constructor(copy: SetPriv);
}

export class SetSource {
    static $gtype: GObject.GType<SetSource>;

    constructor(source: Gda.SetSource);
    constructor(copy: SetSource);

    // Fields
    source: Gda.SetSource;
    shown_n_cols: number;
    shown_cols_index: number[];
    ref_n_cols: number;
    ref_cols_index: number[];

    // Constructors
    static ['new'](source: Gda.SetSource): SetSource;

    // Members
    copy(): SetSource;

    free(): void;

    get_ref_columns(): number[];

    get_ref_n_cols(): number;

    get_shown_columns(): number[];

    get_shown_n_cols(): number;

    get_source(): Gda.SetSource;

    set_ref_columns(columns: number[]): void;

    set_shown_columns(columns: number[]): void;

    set_source(source: Gda.SetSource): void;
}

export class TreeStorePriv {
    static $gtype: GObject.GType<TreeStorePriv>;

    constructor(copy: TreeStorePriv);
}

export interface DataEntryNamespace {
    $gtype: GObject.GType<DataEntry>;
    prototype: DataEntryPrototype;

    error_quark(): GLib.Quark;
}

export type DataEntry = DataEntryPrototype;

export interface DataEntryPrototype extends Gtk.Widget {
    // Members

    can_expand(horiz: boolean): boolean;

    get_attributes(): Gda.ValueAttribute;

    get_editable(): boolean;

    get_handler(): Gda.DataHandler;

    get_reference_value(): unknown;

    get_value(): unknown;

    get_value_type(): GObject.GType;

    grab_focus(): void;

    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    set_default_value(value?: GObject.Value | null): void;

    set_editable(editable: boolean): void;

    set_reference_current(): void;

    set_reference_value(value?: GObject.Value | null): void;

    set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    set_value(value?: GObject.Value | null): void;

    set_value_type(type: GObject.GType): void;

    validate(): boolean;

    vfunc_can_expand(horiz: boolean): boolean;

    vfunc_contents_activated(): void;

    vfunc_contents_modified(): void;

    vfunc_contents_valid(): boolean;

    vfunc_expand_changed(): void;

    vfunc_get_attributes(): Gda.ValueAttribute;

    vfunc_get_editable(): boolean;

    vfunc_get_handler(): Gda.DataHandler;

    vfunc_get_ref_value(): unknown;

    vfunc_get_value(): unknown;

    vfunc_get_value_type(): GObject.GType;

    vfunc_grab_focus(): void;

    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

    vfunc_set_editable(editable: boolean): void;

    vfunc_set_ref_value(value: any): void;

    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

    vfunc_set_value(value?: GObject.Value | null): void;

    vfunc_set_value_default(value: any): void;

    vfunc_set_value_type(type: GObject.GType): void;

    vfunc_status_changed(): void;

    vfunc_validate(): boolean;
}

export const DataEntry: DataEntryNamespace;

export interface DataProxyNamespace {
    $gtype: GObject.GType<DataProxy>;
    prototype: DataProxyPrototype;
}

export type DataProxy = DataProxyPrototype;

export interface DataProxyPrototype extends GObject.Object {
    // Members

    column_set_editable(column: number, editable: boolean): void;

    column_show_actions(column: number, show_actions: boolean): void;

    get_actions_group(): Gtk.ActionGroup;

    get_proxy(): Gda.DataProxy;

    get_write_mode(): DataProxyWriteMode;

    perform_action(action: Action): void;

    set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_get_actions_group(): Gtk.ActionGroup;

    vfunc_get_proxy(): Gda.DataProxy;

    vfunc_get_write_mode(): DataProxyWriteMode;

    vfunc_proxy_changed(proxy: Gda.DataProxy): void;

    vfunc_set_column_editable(column: number, editable: boolean): void;

    vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

    vfunc_show_column_actions(column: number, show_actions: boolean): void;
}

export const DataProxy: DataProxyNamespace;

export interface DataSelectorNamespace {
    $gtype: GObject.GType<DataSelector>;
    prototype: DataSelectorPrototype;
}

export type DataSelector = DataSelectorPrototype;

export interface DataSelectorPrototype extends GObject.Object {
    // Members

    get_data_set(): Gda.DataModelIter;

    get_model(): Gda.DataModel;

    get_selected_rows(): number[];

    select_row(row: number): boolean;

    set_column_visible(column: number, visible: boolean): void;

    set_model(model: Gda.DataModel): void;

    unselect_row(row: number): void;

    vfunc_get_data_set(): Gda.DataModelIter;

    vfunc_get_model(): Gda.DataModel;

    vfunc_get_selected_rows(): number[];

    vfunc_select_row(row: number): boolean;

    vfunc_selection_changed(): void;

    vfunc_set_column_visible(column: number, visible: boolean): void;

    vfunc_set_model(model: Gda.DataModel): void;

    vfunc_unselect_row(row: number): void;
}

export const DataSelector: DataSelectorNamespace;
