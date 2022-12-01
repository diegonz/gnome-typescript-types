/**
 * GcrUi 3
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gck from './gck';
import * as Gcr from './gcr';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as GLib from './glib';
import * as Gdk from './gdk';

export function renderer_create(label: string | null, attrs: Gck.Attributes): Renderer | null;

export function renderer_register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;

export function renderer_register_well_known(): void;

export function viewer_new(): Viewer;

export function viewer_new_scrolled(): Viewer;

export namespace CollectionModelMode {
    export const $gtype: GObject.GType<CollectionModelMode>;
}

export enum CollectionModelMode {
    LIST = 0,
    TREE = 1,
}

export namespace CertificateRenderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        attributes: Gck.Attributes;
        certificate: Gcr.Certificate;
        label: string;
    }
}

export class CertificateRenderer extends GObject.Object implements Gcr.Certificate, Gcr.Comparable, Renderer {
    static $gtype: GObject.GType<CertificateRenderer>;

    constructor(properties?: Partial<CertificateRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CertificateRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attributes: Gck.Attributes;
    certificate: Gcr.Certificate;
    label: string;

    // Implemented Properties

    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    markup: string;
    subject: string;

    // Constructors

    static ['new'](certificate: Gcr.Certificate): CertificateRenderer;

    static new_for_attributes(label?: string | null, attrs?: any | null): CertificateRenderer;

    // Members

    get_certificate(): Gcr.Certificate;

    set_certificate(certificate?: Gcr.Certificate | null): void;

    // Implemented Members

    get_basic_constraints(): [boolean, boolean | null, number | null];

    get_der_data(): Uint8Array;

    get_expiry_date(): GLib.Date;

    get_fingerprint(type: GLib.ChecksumType): Uint8Array;

    get_fingerprint_hex(type: GLib.ChecksumType): string;

    get_issued_date(): GLib.Date;

    get_issuer_cn(): string;

    get_issuer_dn(): string;

    get_issuer_name(): string;

    get_issuer_part(part: string): string | null;

    get_issuer_raw(): Uint8Array;

    get_key_size(): number;

    get_markup_text(): string;

    get_serial_number(): Uint8Array;

    get_serial_number_hex(): string;

    get_subject_cn(): string;

    get_subject_dn(): string;

    get_subject_name(): string;

    get_subject_part(part: string): string | null;

    get_subject_raw(): Uint8Array;

    is_issuer(issuer: Gcr.Certificate): boolean;

    mixin_emit_notify(): void;

    vfunc_get_der_data(): Uint8Array;

    compare(other?: Gcr.Comparable | null): number;
    compare(...args: never[]): never;

    vfunc_compare(other?: Gcr.Comparable | null): number;

    emit_data_changed(): void;

    get_attributes(): Gck.Attributes | null;

    popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    render_view(viewer: Viewer): void;

    set_attributes(attrs?: Gck.Attributes | null): void;

    vfunc_data_changed(): void;

    vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    vfunc_render_view(viewer: Viewer): void;
}

export namespace CertificateWidget {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        attributes: Gck.Attributes;
        certificate: Gcr.Certificate;
    }
}

export class CertificateWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<CertificateWidget>;

    constructor(properties?: Partial<CertificateWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CertificateWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attributes: Gck.Attributes;
    certificate: Gcr.Certificate;

    // Constructors

    static ['new'](certificate?: Gcr.Certificate | null): CertificateWidget;

    // Members

    get_attributes(): Gck.Attributes | null;

    get_certificate(): Gcr.Certificate | null;

    set_attributes(attrs?: Gck.Attributes | null): void;

    set_certificate(certificate?: Gcr.Certificate | null): void;

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

export namespace CollectionModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        collection: Gcr.Collection;
        columns: any;
    }
}

export class CollectionModel extends GObject.Object implements Gtk.TreeModel, Gtk.TreeSortable {
    static $gtype: GObject.GType<CollectionModel>;

    constructor(properties?: Partial<CollectionModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CollectionModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    collection: Gcr.Collection;
    columns: any;

    // Members

    change_selected(iter: Gtk.TreeIter, selected: boolean): void;

    column_for_selected(): number;

    get_collection(): Gcr.Collection;

    get_selected_objects(): GObject.Object[];

    is_selected(iter: Gtk.TreeIter): boolean;

    iter_for_object(object: GObject.Object, iter: Gtk.TreeIter): boolean;

    object_for_iter<T = GObject.Object>(iter: Gtk.TreeIter): T;

    set_collection(collection?: Gcr.Collection | null): void;

    set_selected_objects(selected: GObject.Object[]): void;

    toggle_selected(iter: Gtk.TreeIter): void;

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

    get_sort_column_id(): [boolean, number, Gtk.SortType];

    has_default_sort_func(): boolean;

    set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;

    set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

    set_sort_func(
        sort_column_id: number,
        sort_func: Gtk.TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;

    sort_column_changed(): void;

    vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];

    vfunc_has_default_sort_func(): boolean;

    vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;

    vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

    vfunc_set_sort_func(
        sort_column_id: number,
        sort_func: Gtk.TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;

    vfunc_sort_column_changed(): void;
}

export namespace ComboSelector {
    export interface ConstructorProperties extends Gtk.ComboBox.ConstructorProperties {
        [key: string]: any;

        collection: Gcr.Collection;
    }
}

export class ComboSelector
    extends Gtk.ComboBox
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
    static $gtype: GObject.GType<ComboSelector>;

    constructor(properties?: Partial<ComboSelector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ComboSelector.ConstructorProperties>, ...args: any[]): void;

    // Properties
    collection: Gcr.Collection;

    // Implemented Properties

    editing_canceled: boolean;
    editingCanceled: boolean;

    // Constructors

    static ['new'](collection: Gcr.Collection): ComboSelector;
    static ['new'](...args: never[]): never;

    // Members

    get_collection(): Gcr.Collection;

    get_selected<T = GObject.Object>(): T;

    set_selected(selected?: GObject.Object | null): void;

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

export namespace FailureRenderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        attributes: Gck.Attributes;
        label: string;
    }
}

export class FailureRenderer extends GObject.Object implements Renderer {
    static $gtype: GObject.GType<FailureRenderer>;

    constructor(properties?: Partial<FailureRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FailureRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attributes: Gck.Attributes;
    label: string;

    // Constructors

    static ['new'](label: string | null, error: GLib.Error): FailureRenderer;

    // Members

    static new_unsupported(label: string): Renderer;

    // Implemented Members

    emit_data_changed(): void;

    get_attributes(): Gck.Attributes | null;

    popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    render_view(viewer: Viewer): void;

    set_attributes(attrs?: Gck.Attributes | null): void;

    vfunc_data_changed(): void;

    vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    vfunc_render_view(viewer: Viewer): void;
}

export namespace ImportButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;
    }
}

export class ImportButton
    extends Gtk.Button
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
    static $gtype: GObject.GType<ImportButton>;

    constructor(properties?: Partial<ImportButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ImportButton.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'imported', callback: (_source: this, importer: GObject.Object, error: GLib.Error) => void): number;

    connect_after(
        signal: 'imported',
        callback: (_source: this, importer: GObject.Object, error: GLib.Error) => void
    ): number;

    emit(signal: 'imported', importer: GObject.Object, error: GLib.Error): void;

    connect(signal: 'importing', callback: (_source: this, importer: GObject.Object) => void): number;

    connect_after(signal: 'importing', callback: (_source: this, importer: GObject.Object) => void): number;

    emit(signal: 'importing', importer: GObject.Object): void;

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

    static ['new'](label?: string | null): ImportButton;
    static ['new'](...args: never[]): never;

    // Members

    add_parsed(parsed: Gcr.Parsed): void;

    vfunc_imported(importer: Gcr.Importer, error: GLib.Error): void;

    vfunc_importing(importer: Gcr.Importer): void;

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

export namespace KeyRenderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        object: Gck.Object;
    }
}

export class KeyRenderer extends GObject.Object implements Renderer {
    static $gtype: GObject.GType<KeyRenderer>;

    constructor(properties?: Partial<KeyRenderer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KeyRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    object: Gck.Object;

    // Implemented Properties

    attributes: Gck.Attributes;
    label: string;

    // Constructors

    static ['new'](label?: string | null, attrs?: Gck.Attributes | null): KeyRenderer;

    // Members

    get_attributes(): Gck.Attributes | null;

    set_attributes(attrs?: Gck.Attributes | null): void;

    // Implemented Members

    emit_data_changed(): void;

    popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    render_view(viewer: Viewer): void;

    vfunc_data_changed(): void;

    vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    vfunc_render_view(viewer: Viewer): void;
}

export namespace KeyWidget {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        attributes: Gck.Attributes;
    }
}

export class KeyWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<KeyWidget>;

    constructor(properties?: Partial<KeyWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<KeyWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attributes: Gck.Attributes;

    // Constructors

    static ['new'](attrs?: Gck.Attributes | null): KeyWidget;

    // Members

    get_attributes(): Gck.Attributes | null;

    set_attributes(attrs?: Gck.Attributes | null): void;

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

export namespace ListSelector {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        collection: Gcr.Collection;
    }
}

export class ListSelector extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<ListSelector>;

    constructor(properties?: Partial<ListSelector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ListSelector.ConstructorProperties>, ...args: any[]): void;

    // Properties
    collection: Gcr.Collection;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](collection: Gcr.Collection): ListSelector;
    static ['new'](...args: never[]): never;

    // Members

    get_collection(): Gcr.Collection;

    get_selected(): GObject.Object[];

    set_selected(selected: GObject.Object[]): void;

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

export namespace PromptDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;

        choice_visible: boolean;
        choiceVisible: boolean;
        confirm_visible: boolean;
        confirmVisible: boolean;
        password_visible: boolean;
        passwordVisible: boolean;
        warning_visible: boolean;
        warningVisible: boolean;
    }
}

export class PromptDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gcr.Prompt, Gtk.Buildable {
    static $gtype: GObject.GType<PromptDialog>;

    constructor(properties?: Partial<PromptDialog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PromptDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    choice_visible: boolean;
    choiceVisible: boolean;
    confirm_visible: boolean;
    confirmVisible: boolean;
    password_visible: boolean;
    passwordVisible: boolean;
    warning_visible: boolean;
    warningVisible: boolean;

    // Implemented Properties

    caller_window: string;
    callerWindow: string;
    cancel_label: string;
    cancelLabel: string;
    choice_chosen: boolean;
    choiceChosen: boolean;
    choice_label: string;
    choiceLabel: string;
    continue_label: string;
    continueLabel: string;
    description: string;
    message: string;
    password_new: boolean;
    passwordNew: boolean;
    password_strength: number;
    passwordStrength: number;
    title: string;
    warning: string;

    // Implemented Members

    close(): void;

    confirm(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;

    confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;

    confirm_run(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;

    get_caller_window(): string;

    get_cancel_label(): string;

    get_choice_chosen(): boolean;

    get_choice_label(): string;

    get_continue_label(): string;

    get_description(): string;

    get_message(): string;

    get_password_new(): boolean;

    get_password_strength(): number;

    get_title(): string;
    get_title(...args: never[]): never;

    get_warning(): string;

    password(cancellable?: Gio.Cancellable | null): string;

    password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    password_finish(result: Gio.AsyncResult): string;

    password_run(cancellable?: Gio.Cancellable | null): string;

    reset(): void;

    set_caller_window(window_id: string): void;

    set_cancel_label(cancel_label: string): void;

    set_choice_chosen(chosen: boolean): void;

    set_choice_label(choice_label?: string | null): void;

    set_continue_label(continue_label: string): void;

    set_description(description: string): void;

    set_message(message: string): void;

    set_password_new(new_password: boolean): void;

    set_title(title: string): void;

    set_warning(warning?: string | null): void;

    vfunc_prompt_close(): void;

    vfunc_prompt_confirm_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;

    vfunc_prompt_password_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_prompt_password_finish(result: Gio.AsyncResult): string;

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

export namespace SecureEntryBuffer {
    export interface ConstructorProperties extends Gtk.EntryBuffer.ConstructorProperties {
        [key: string]: any;
    }
}

export class SecureEntryBuffer extends Gtk.EntryBuffer {
    static $gtype: GObject.GType<SecureEntryBuffer>;

    constructor(properties?: Partial<SecureEntryBuffer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SecureEntryBuffer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): SecureEntryBuffer;
    static ['new'](...args: never[]): never;
}

export namespace TreeSelector {
    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {
        [key: string]: any;

        collection: Gcr.Collection;
        columns: any;
    }
}

export class TreeSelector extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<TreeSelector>;

    constructor(properties?: Partial<TreeSelector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeSelector.ConstructorProperties>, ...args: any[]): void;

    // Properties
    collection: Gcr.Collection;
    columns: any;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Members

    get_collection(): Gcr.Collection;

    get_selected(): GObject.Object[];

    set_selected(selected: GObject.Object[]): void;

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

export namespace UnlockOptionsWidget {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;

        choice: string;
        ttl: number;
    }
}

export class UnlockOptionsWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<UnlockOptionsWidget>;

    constructor(properties?: Partial<UnlockOptionsWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UnlockOptionsWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    choice: string;
    ttl: number;

    // Constructors

    static ['new'](): UnlockOptionsWidget;

    // Members

    get_choice(): string;

    get_label(option: string): string;

    get_sensitive(option: string): boolean;
    get_sensitive(...args: never[]): never;

    get_ttl(): number;

    set_choice(option: string): void;

    set_label(option: string, text: string): void;

    set_sensitive(option: string, sensitive: boolean, reason: string): void;
    set_sensitive(...args: never[]): never;

    set_ttl(ttl: number): void;

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

export namespace ViewerWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;

        display_name: string;
        displayName: string;
        parser: Gcr.Parser;
    }
}

export class ViewerWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ViewerWidget>;

    constructor(properties?: Partial<ViewerWidget.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ViewerWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    display_name: string;
    displayName: string;
    parser: Gcr.Parser;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'added', callback: (_source: this, renderer: Renderer, parsed: Gcr.Parsed) => void): number;

    connect_after(signal: 'added', callback: (_source: this, renderer: Renderer, parsed: Gcr.Parsed) => void): number;

    emit(signal: 'added', renderer: Renderer, parsed: Gcr.Parsed): void;

    // Implemented Properties

    orientation: Gtk.Orientation;

    // Constructors

    static ['new'](): ViewerWidget;
    static ['new'](...args: never[]): never;

    // Members

    clear_error(): void;

    get_display_name(): string;

    get_parser(): Gcr.Parser;

    get_viewer(): Viewer;

    load_bytes(display_name: string | null, data: GLib.Bytes | Uint8Array): void;

    load_data(display_name: string | null, data: Uint8Array | string): void;

    load_file(file: Gio.File): void;

    set_display_name(display_name: string): void;

    show_error(message: string, error?: GLib.Error | null): void;

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

export class CertificateRendererPrivate {
    static $gtype: GObject.GType<CertificateRendererPrivate>;

    constructor(copy: CertificateRendererPrivate);
}

export class CertificateWidgetPrivate {
    static $gtype: GObject.GType<CertificateWidgetPrivate>;

    constructor(copy: CertificateWidgetPrivate);
}

export class CollectionModelPrivate {
    static $gtype: GObject.GType<CollectionModelPrivate>;

    constructor(copy: CollectionModelPrivate);
}

export class ComboSelectorPrivate {
    static $gtype: GObject.GType<ComboSelectorPrivate>;

    constructor(copy: ComboSelectorPrivate);
}

export class FailureRendererPrivate {
    static $gtype: GObject.GType<FailureRendererPrivate>;

    constructor(copy: FailureRendererPrivate);
}

export class ImportButtonPrivate {
    static $gtype: GObject.GType<ImportButtonPrivate>;

    constructor(copy: ImportButtonPrivate);
}

export class KeyRendererPrivate {
    static $gtype: GObject.GType<KeyRendererPrivate>;

    constructor(copy: KeyRendererPrivate);
}

export class KeyWidgetPrivate {
    static $gtype: GObject.GType<KeyWidgetPrivate>;

    constructor(copy: KeyWidgetPrivate);
}

export class ListSelectorPrivate {
    static $gtype: GObject.GType<ListSelectorPrivate>;

    constructor(copy: ListSelectorPrivate);
}

export class PromptDialogPrivate {
    static $gtype: GObject.GType<PromptDialogPrivate>;

    constructor(copy: PromptDialogPrivate);
}

export class SecureEntryBufferPrivate {
    static $gtype: GObject.GType<SecureEntryBufferPrivate>;

    constructor(copy: SecureEntryBufferPrivate);
}

export class TreeSelectorPrivate {
    static $gtype: GObject.GType<TreeSelectorPrivate>;

    constructor(copy: TreeSelectorPrivate);
}

export class UnlockOptionsWidgetPrivate {
    static $gtype: GObject.GType<UnlockOptionsWidgetPrivate>;

    constructor(copy: UnlockOptionsWidgetPrivate);
}

export interface RendererNamespace {
    $gtype: GObject.GType<Renderer>;
    prototype: RendererPrototype;

    create(label: string | null, attrs: Gck.Attributes): Renderer | null;

    register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;

    register_well_known(): void;
}

export type Renderer = RendererPrototype;

export interface RendererPrototype extends GObject.Object {
    // Properties
    attributes: Gck.Attributes;
    label: string;

    // Members

    emit_data_changed(): void;

    get_attributes(): Gck.Attributes | null;

    popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    render_view(viewer: Viewer): void;

    set_attributes(attrs?: Gck.Attributes | null): void;

    vfunc_data_changed(): void;

    vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

    vfunc_render_view(viewer: Viewer): void;
}

export const Renderer: RendererNamespace;

export interface ViewerNamespace {
    $gtype: GObject.GType<Viewer>;
    prototype: ViewerPrototype;

    ['new'](): Viewer;

    new_scrolled(): Viewer;
}

export type Viewer = ViewerPrototype;

export interface ViewerPrototype extends Gtk.Widget {
    // Members

    add_renderer(renderer: Renderer): void;

    count_renderers(): number;

    get_renderer(index_: number): Renderer;

    insert_renderer(renderer: Renderer, before?: Renderer | null): void;

    remove_renderer(renderer: Renderer): void;

    vfunc_add_renderer(renderer: Renderer): void;

    vfunc_count_renderers(): number;

    vfunc_get_renderer(index_: number): Renderer;

    vfunc_insert_renderer(renderer: Renderer, before?: Renderer | null): void;

    vfunc_remove_renderer(renderer: Renderer): void;
}

export const Viewer: ViewerNamespace;
