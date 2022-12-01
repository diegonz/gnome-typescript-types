/**
 * EvinceDocument 3.0
 *
 * Generated from 3.38.0
 */

import * as GLib from './glib';
import * as Gdk from './gdk';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as GObject from './gobject';
import * as cairo from './cairo';
import * as Pango from './pango';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function backends_manager_get_document(mime_type: string): Document;

export function backends_manager_get_document_module_name(document: Document): string;

export function document_error_quark(): GLib.Quark;

export function file_compress(uri: string, type: CompressionType): string;

export function file_copy_metadata(from: string, to: string): boolean;

export function file_get_mime_type(uri: string, fast: boolean): string;

export function file_is_temp(file: Gio.File): boolean;

export function file_uncompress(uri: string, type: CompressionType): string;

export function get_locale_dir(): string;

export function init(): boolean;

export function mkdtemp(tmpl: string): string;

export function mkstemp(tmpl: string, file_name: string): number;

export function mkstemp_file(tmpl: string): Gio.File;

export function rect_cmp(a: Rectangle, b: Rectangle): number;

export function shutdown(): void;

export function tmp_file_unlink(file: Gio.File): void;

export function tmp_filename_unlink(filename: string): void;

export function tmp_uri_unlink(uri: string): void;

export function xfer_uri_simple(from: string, to: string): boolean;

export namespace AnnotationTextIcon {
    export const $gtype: GObject.GType<AnnotationTextIcon>;
}

export enum AnnotationTextIcon {
    NOTE = 0,
    COMMENT = 1,
    KEY = 2,
    HELP = 3,
    NEW_PARAGRAPH = 4,
    PARAGRAPH = 5,
    INSERT = 6,
    CROSS = 7,
    CIRCLE = 8,
    UNKNOWN = 9,
}

export namespace AnnotationTextMarkupType {
    export const $gtype: GObject.GType<AnnotationTextMarkupType>;
}

export enum AnnotationTextMarkupType {
    HIGHLIGHT = 0,
    STRIKE_OUT = 1,
    UNDERLINE = 2,
    SQUIGGLY = 3,
}

export namespace AnnotationType {
    export const $gtype: GObject.GType<AnnotationType>;
}

export enum AnnotationType {
    UNKNOWN = 0,
    TEXT = 1,
    ATTACHMENT = 2,
    TEXT_MARKUP = 3,
}

export namespace AnnotationsOverMarkup {
    export const $gtype: GObject.GType<AnnotationsOverMarkup>;
}

export enum AnnotationsOverMarkup {
    NOT_IMPLEMENTED = 0,
    UNKNOWN = 1,
    YES = 2,
    NOT = 3,
}

export namespace CompressionType {
    export const $gtype: GObject.GType<CompressionType>;
}

export enum CompressionType {
    NONE = 0,
    BZIP2 = 1,
    GZIP = 2,
    LZMA = 3,
}

export class DocumentError extends GLib.Error {
    static $gtype: GObject.GType<DocumentError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DocumentError);

    // Properties
    static INVALID: number;
    static UNSUPPORTED_CONTENT: number;
    static ENCRYPTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace DocumentLayout {
    export const $gtype: GObject.GType<DocumentLayout>;
}

export enum DocumentLayout {
    SINGLE_PAGE = 0,
    ONE_COLUMN = 1,
    TWO_COLUMN_LEFT = 2,
    TWO_COLUMN_RIGHT = 3,
    TWO_PAGE_LEFT = 4,
    TWO_PAGE_RIGHT = 5,
}

export namespace DocumentMode {
    export const $gtype: GObject.GType<DocumentMode>;
}

export enum DocumentMode {
    NONE = 0,
    USE_OC = 1,
    USE_THUMBS = 2,
    FULL_SCREEN = 3,
    USE_ATTACHMENTS = 4,
    PRESENTATION = 3,
}

export namespace FileExporterFormat {
    export const $gtype: GObject.GType<FileExporterFormat>;
}

export enum FileExporterFormat {
    UNKNOWN = 0,
    PS = 1,
    PDF = 2,
}

export namespace FormFieldButtonType {
    export const $gtype: GObject.GType<FormFieldButtonType>;
}

export enum FormFieldButtonType {
    PUSH = 0,
    CHECK = 1,
    RADIO = 2,
}

export namespace FormFieldChoiceType {
    export const $gtype: GObject.GType<FormFieldChoiceType>;
}

export enum FormFieldChoiceType {
    COMBO = 0,
    LIST = 1,
}

export namespace FormFieldTextType {
    export const $gtype: GObject.GType<FormFieldTextType>;
}

export enum FormFieldTextType {
    NORMAL = 0,
    MULTILINE = 1,
    FILE_SELECT = 2,
}

export namespace LinkActionType {
    export const $gtype: GObject.GType<LinkActionType>;
}

export enum LinkActionType {
    GOTO_DEST = 0,
    GOTO_REMOTE = 1,
    EXTERNAL_URI = 2,
    LAUNCH = 3,
    NAMED = 4,
    LAYERS_STATE = 5,
}

export namespace LinkDestType {
    export const $gtype: GObject.GType<LinkDestType>;
}

export enum LinkDestType {
    PAGE = 0,
    XYZ = 1,
    FIT = 2,
    FITH = 3,
    FITV = 4,
    FITR = 5,
    NAMED = 6,
    PAGE_LABEL = 7,
    UNKNOWN = 8,
}

export namespace SelectionStyle {
    export const $gtype: GObject.GType<SelectionStyle>;
}

export enum SelectionStyle {
    GLYPH = 0,
    WORD = 1,
    LINE = 2,
}

export namespace TransitionEffectAlignment {
    export const $gtype: GObject.GType<TransitionEffectAlignment>;
}

export enum TransitionEffectAlignment {
    HORIZONTAL = 0,
    VERTICAL = 1,
}

export namespace TransitionEffectDirection {
    export const $gtype: GObject.GType<TransitionEffectDirection>;
}

export enum TransitionEffectDirection {
    INWARD = 0,
    OUTWARD = 1,
}

export namespace TransitionEffectType {
    export const $gtype: GObject.GType<TransitionEffectType>;
}

export enum TransitionEffectType {
    REPLACE = 0,
    SPLIT = 1,
    BLINDS = 2,
    BOX = 3,
    WIPE = 4,
    DISSOLVE = 5,
    GLITTER = 6,
    FLY = 7,
    PUSH = 8,
    COVER = 9,
    UNCOVER = 10,
    FADE = 11,
}

export namespace AnnotationsSaveMask {
    export const $gtype: GObject.GType<AnnotationsSaveMask>;
}

export enum AnnotationsSaveMask {
    NONE = 0,
    CONTENTS = 1,
    COLOR = 2,
    AREA = 4,
    LABEL = 8,
    OPACITY = 16,
    POPUP_RECT = 32,
    POPUP_IS_OPEN = 64,
    TEXT_IS_OPEN = 128,
    TEXT_ICON = 256,
    ATTACHMENT = 512,
    TEXT_MARKUP_TYPE = 1024,
    ALL = 2047,
}

export namespace DocumentInfoFields {
    export const $gtype: GObject.GType<DocumentInfoFields>;
}

export enum DocumentInfoFields {
    TITLE = 1,
    FORMAT = 2,
    AUTHOR = 4,
    SUBJECT = 8,
    KEYWORDS = 16,
    LAYOUT = 32,
    CREATOR = 64,
    PRODUCER = 128,
    CREATION_DATE = 256,
    MOD_DATE = 512,
    LINEARIZED = 1024,
    START_MODE = 2048,
    UI_HINTS = 4096,
    PERMISSIONS = 8192,
    N_PAGES = 16384,
    SECURITY = 32768,
    PAPER_SIZE = 65536,
    LICENSE = 131072,
}

export namespace DocumentLoadFlags {
    export const $gtype: GObject.GType<DocumentLoadFlags>;
}

export enum DocumentLoadFlags {
    NONE = 0,
    NO_CACHE = 1,
}

export namespace DocumentPermissions {
    export const $gtype: GObject.GType<DocumentPermissions>;
}

export enum DocumentPermissions {
    OK_TO_PRINT = 1,
    OK_TO_MODIFY = 2,
    OK_TO_COPY = 4,
    OK_TO_ADD_NOTES = 8,
    FULL = 15,
}

export namespace DocumentUIHints {
    export const $gtype: GObject.GType<DocumentUIHints>;
}

export enum DocumentUIHints {
    HIDE_TOOLBAR = 1,
    HIDE_MENUBAR = 2,
    HIDE_WINDOWUI = 4,
    FIT_WINDOW = 8,
    CENTER_WINDOW = 16,
    DISPLAY_DOC_TITLE = 32,
    DIRECTION_RTL = 64,
}

export namespace FileExporterCapabilities {
    export const $gtype: GObject.GType<FileExporterCapabilities>;
}

export enum FileExporterCapabilities {
    PAGE_SET = 1,
    COPIES = 2,
    COLLATE = 4,
    REVERSE = 8,
    SCALE = 16,
    GENERATE_PDF = 32,
    GENERATE_PS = 64,
    PREVIEW = 128,
    NUMBER_UP = 256,
}

export namespace FindOptions {
    export const $gtype: GObject.GType<FindOptions>;
}

export enum FindOptions {
    DEFAULT = 0,
    CASE_SENSITIVE = 1,
    WHOLE_WORDS_ONLY = 2,
}

export namespace Annotation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        area: Rectangle;
        color: any;
        contents: string;
        modified: string;
        name: string;
        page: Page;
        rgba: Gdk.RGBA;
    }
}

export abstract class Annotation extends GObject.Object {
    static $gtype: GObject.GType<Annotation>;

    constructor(properties?: Partial<Annotation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Annotation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    area: Rectangle;
    color: any;
    contents: string;
    modified: string;
    name: string;
    page: Page;
    rgba: Gdk.RGBA;

    // Members

    equal(other: Annotation): boolean;

    get_annotation_type(): AnnotationType;

    get_area(area: Rectangle): void;

    get_color(): Gdk.Color;

    get_contents(): string;

    get_modified(): string;

    get_name(): string;

    get_page(): Page;

    get_page_index(): number;

    get_rgba(): Gdk.RGBA;

    set_area(area: Rectangle): boolean;

    set_color(color: Gdk.Color): boolean;

    set_contents(contents: string): boolean;

    set_modified(modified: string): boolean;

    set_modified_from_time(utime: GLib.Time): boolean;

    set_name(name: string): boolean;

    set_rgba(rgba: Gdk.RGBA): boolean;
}

export namespace AnnotationAttachment {
    export interface ConstructorProperties extends Annotation.ConstructorProperties {
        [key: string]: any;

        attachment: Attachment;
    }
}

export class AnnotationAttachment extends Annotation implements AnnotationMarkup {
    static $gtype: GObject.GType<AnnotationAttachment>;

    constructor(properties?: Partial<AnnotationAttachment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotationAttachment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attachment: Attachment;

    // Implemented Properties

    can_have_popup: boolean;
    canHavePopup: boolean;
    has_popup: boolean;
    hasPopup: boolean;
    label: string;
    opacity: number;
    popup_is_open: boolean;
    popupIsOpen: boolean;
    rectangle: Rectangle;

    // Constructors

    static ['new'](page: Page, attachment: Attachment): AnnotationAttachment;

    // Members

    get_attachment(): Attachment;

    set_attachment(attachment: Attachment): boolean;

    // Implemented Members

    get_label(): string;

    get_opacity(): number;

    get_popup_is_open(): boolean;

    get_rectangle(ev_rect: Rectangle): void;

    set_has_popup(has_popup: boolean): boolean;

    set_label(label: string): boolean;

    set_opacity(opacity: number): boolean;

    set_popup_is_open(is_open: boolean): boolean;

    set_rectangle(ev_rect: Rectangle): boolean;
}

export namespace AnnotationText {
    export interface ConstructorProperties extends Annotation.ConstructorProperties {
        [key: string]: any;

        icon: AnnotationTextIcon;
        is_open: boolean;
        isOpen: boolean;
    }
}

export class AnnotationText extends Annotation implements AnnotationMarkup {
    static $gtype: GObject.GType<AnnotationText>;

    constructor(properties?: Partial<AnnotationText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotationText.ConstructorProperties>, ...args: any[]): void;

    // Properties
    icon: AnnotationTextIcon;
    is_open: boolean;
    isOpen: boolean;

    // Implemented Properties

    can_have_popup: boolean;
    canHavePopup: boolean;
    has_popup: boolean;
    hasPopup: boolean;
    label: string;
    opacity: number;
    popup_is_open: boolean;
    popupIsOpen: boolean;
    rectangle: Rectangle;

    // Constructors

    static ['new'](page: Page): AnnotationText;

    // Members

    get_icon(): AnnotationTextIcon;

    get_is_open(): boolean;

    set_icon(icon: AnnotationTextIcon): boolean;

    set_is_open(is_open: boolean): boolean;

    // Implemented Members

    get_label(): string;

    get_opacity(): number;

    get_popup_is_open(): boolean;

    get_rectangle(ev_rect: Rectangle): void;

    set_has_popup(has_popup: boolean): boolean;

    set_label(label: string): boolean;

    set_opacity(opacity: number): boolean;

    set_popup_is_open(is_open: boolean): boolean;

    set_rectangle(ev_rect: Rectangle): boolean;
}

export namespace AnnotationTextMarkup {
    export interface ConstructorProperties extends Annotation.ConstructorProperties {
        [key: string]: any;

        type: AnnotationTextMarkupType;
    }
}

export class AnnotationTextMarkup extends Annotation implements AnnotationMarkup {
    static $gtype: GObject.GType<AnnotationTextMarkup>;

    constructor(properties?: Partial<AnnotationTextMarkup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotationTextMarkup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    type: AnnotationTextMarkupType;

    // Implemented Properties

    can_have_popup: boolean;
    canHavePopup: boolean;
    has_popup: boolean;
    hasPopup: boolean;
    label: string;
    opacity: number;
    popup_is_open: boolean;
    popupIsOpen: boolean;
    rectangle: Rectangle;

    // Constructors

    static highlight_new(page: Page): AnnotationTextMarkup;

    static squiggly_new(page: Page): AnnotationTextMarkup;

    static strike_out_new(page: Page): AnnotationTextMarkup;

    static underline_new(page: Page): AnnotationTextMarkup;

    // Members

    get_markup_type(): AnnotationTextMarkupType;

    set_markup_type(markup_type: AnnotationTextMarkupType): boolean;

    // Implemented Members

    get_label(): string;

    get_opacity(): number;

    get_popup_is_open(): boolean;

    get_rectangle(ev_rect: Rectangle): void;

    set_has_popup(has_popup: boolean): boolean;

    set_label(label: string): boolean;

    set_opacity(opacity: number): boolean;

    set_popup_is_open(is_open: boolean): boolean;

    set_rectangle(ev_rect: Rectangle): boolean;
}

export namespace Attachment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        ctime: number;
        data: any;
        description: string;
        mtime: number;
        name: string;
        size: number;
    }
}

export class Attachment extends GObject.Object {
    static $gtype: GObject.GType<Attachment>;

    constructor(properties?: Partial<Attachment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Attachment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    ctime: number;
    data: any;
    description: string;
    mtime: number;
    name: string;
    size: number;

    // Fields
    base_instance: GObject.Object;

    // Constructors

    static ['new'](
        name: string,
        description: string,
        mtime: GLib.Time,
        ctime: GLib.Time,
        size: number,
        data?: any | null
    ): Attachment;

    // Members

    get_creation_date(): GLib.Time;

    get_description(): string;

    get_mime_type(): string;

    get_modification_date(): GLib.Time;

    get_name(): string;

    open(screen: Gdk.Screen, timestamp: number): boolean;

    save(file: Gio.File): boolean;

    static error_quark(): GLib.Quark;
}

export namespace Document {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        modified: boolean;
    }
}

export abstract class Document extends GObject.Object {
    static $gtype: GObject.GType<Document>;

    constructor(properties?: Partial<Document.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Document.ConstructorProperties>, ...args: any[]): void;

    // Properties
    modified: boolean;

    // Fields
    base: GObject.Object;
    priv: DocumentPrivate;

    // Members

    check_dimensions(): boolean;

    find_page_by_label(page_label: string, page_index: number): boolean;

    get_backend_info(info: DocumentBackendInfo): boolean;

    get_info(): DocumentInfo;

    get_max_label_len(): number;

    get_max_page_size(width: number, height: number): void;

    get_min_page_size(width: number, height: number): void;

    get_modified(): boolean;

    get_n_pages(): number;

    get_page(index: number): Page;

    get_page_label(page_index: number): string;

    get_page_size(page_index: number): [number | null, number | null];

    get_size(): number;

    get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;

    get_thumbnail_surface(rc: RenderContext): cairo.Surface;

    get_title(): string;

    get_uri(): string;

    has_synctex(): boolean;

    has_text_page_labels(): boolean;

    is_page_size_uniform(): boolean;

    load(uri: string): boolean;

    load_full(uri: string, flags: DocumentLoadFlags): boolean;

    load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;

    load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;

    render(rc: RenderContext): cairo.Surface;

    save(uri: string): boolean;

    set_modified(modified: boolean): void;

    synctex_backward_search(page_index: number, x: number, y: number): SourceLink;

    vfunc_get_backend_info(info: DocumentBackendInfo): boolean;

    vfunc_get_info(): DocumentInfo;

    vfunc_get_n_pages(): number;

    vfunc_get_page(index: number): Page;

    vfunc_get_page_label(page: Page): string;

    vfunc_get_page_size(page: Page): [number | null, number | null];

    vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;

    vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface;

    vfunc_load(uri: string): boolean;

    vfunc_load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_render(rc: RenderContext): cairo.Surface;

    vfunc_save(uri: string): boolean;

    vfunc_support_synctex(): boolean;

    static doc_mutex_lock(): void;

    static doc_mutex_trylock(): boolean;

    static doc_mutex_unlock(): void;

    static factory_add_filters(chooser: Gtk.Widget, document: Document): void;

    static factory_get_document(uri: string): Document;

    static factory_get_document_for_gfile(
        file: Gio.File,
        flags: DocumentLoadFlags,
        cancellable?: Gio.Cancellable | null
    ): Document;

    static factory_get_document_for_stream(
        stream: Gio.InputStream,
        mime_type: string | null,
        flags: DocumentLoadFlags,
        cancellable?: Gio.Cancellable | null
    ): Document;

    static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document;

    static fc_mutex_lock(): void;

    static fc_mutex_trylock(): boolean;

    static fc_mutex_unlock(): void;

    static misc_format_date(utime: GLib.Time): string;

    static misc_format_datetime(dt: GLib.DateTime): string;

    static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf;

    static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void;

    static misc_get_pointer_position(widget: Gtk.Widget): [number, number];

    static misc_get_screen_dpi(screen: Gdk.Screen): number;

    static misc_get_thumbnail_frame(width: number, height: number, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;

    static misc_get_widget_dpi(widget: Gtk.Widget): number;

    static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;

    static misc_invert_surface(surface: cairo.Surface): void;

    static misc_paint_one_page(
        cr: cairo.Context,
        widget: Gtk.Widget,
        area: Gdk.Rectangle,
        border: Gtk.Border,
        highlight: boolean,
        inverted_colors: boolean
    ): void;

    static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf;

    static misc_render_loading_thumbnail(
        widget: Gtk.Widget,
        width: number,
        height: number,
        inverted_colors: boolean
    ): GdkPixbuf.Pixbuf;

    static misc_render_loading_thumbnail_surface(
        widget: Gtk.Widget,
        width: number,
        height: number,
        inverted_colors: boolean
    ): cairo.Surface;

    static misc_render_thumbnail_surface_with_frame(
        widget: Gtk.Widget,
        source_surface: cairo.Surface,
        width: number,
        height: number
    ): cairo.Surface;

    static misc_render_thumbnail_with_frame(widget: Gtk.Widget, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;

    static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;

    static misc_surface_rotate_and_scale(
        surface: cairo.Surface,
        dest_width: number,
        dest_height: number,
        dest_rotation: number
    ): cairo.Surface;
}

export namespace FormField {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class FormField extends GObject.Object {
    static $gtype: GObject.GType<FormField>;

    constructor(properties?: Partial<FormField.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormField.ConstructorProperties>, ...args: any[]): void;

    // Fields
    id: number;
    is_read_only: boolean;
    font_size: number;
    activation_link: Link;
    page: Page;
    changed: boolean;

    // Members

    get_alternate_name(): string;

    set_alternate_name(alternative_text: string): void;
}

export namespace FormFieldButton {
    export interface ConstructorProperties extends FormField.ConstructorProperties {
        [key: string]: any;
    }
}

export class FormFieldButton extends FormField {
    static $gtype: GObject.GType<FormFieldButton>;

    constructor(properties?: Partial<FormFieldButton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormFieldButton.ConstructorProperties>, ...args: any[]): void;

    // Fields
    type: FormFieldButtonType;
    state: boolean;

    // Constructors

    static ['new'](id: number, type: FormFieldButtonType): FormFieldButton;
}

export namespace FormFieldChoice {
    export interface ConstructorProperties extends FormField.ConstructorProperties {
        [key: string]: any;
    }
}

export class FormFieldChoice extends FormField {
    static $gtype: GObject.GType<FormFieldChoice>;

    constructor(properties?: Partial<FormFieldChoice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormFieldChoice.ConstructorProperties>, ...args: any[]): void;

    // Fields
    type: FormFieldChoiceType;
    multi_select: boolean;
    is_editable: boolean;
    do_spell_check: boolean;
    commit_on_sel_change: boolean;
    selected_items: any[];
    text: string;

    // Constructors

    static ['new'](id: number, type: FormFieldChoiceType): FormFieldChoice;
}

export namespace FormFieldSignature {
    export interface ConstructorProperties extends FormField.ConstructorProperties {
        [key: string]: any;
    }
}

export class FormFieldSignature extends FormField {
    static $gtype: GObject.GType<FormFieldSignature>;

    constructor(properties?: Partial<FormFieldSignature.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormFieldSignature.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](id: number): FormFieldSignature;
}

export namespace FormFieldText {
    export interface ConstructorProperties extends FormField.ConstructorProperties {
        [key: string]: any;
    }
}

export class FormFieldText extends FormField {
    static $gtype: GObject.GType<FormFieldText>;

    constructor(properties?: Partial<FormFieldText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormFieldText.ConstructorProperties>, ...args: any[]): void;

    // Fields
    type: FormFieldTextType;
    do_spell_check: boolean;
    do_scroll: boolean;
    comb: boolean;
    is_rich_text: boolean;
    is_password: boolean;
    max_len: number;
    text: string;

    // Constructors

    static ['new'](id: number, type: FormFieldTextType): FormFieldText;
}

export namespace Image {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Image extends GObject.Object {
    static $gtype: GObject.GType<Image>;

    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;

    // Fields
    base_instance: GObject.Object;
    priv: ImagePrivate;

    // Constructors

    static ['new'](page: number, img_id: number): Image;

    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

    // Members

    get_id(): number;

    get_page(): number;

    get_pixbuf(): GdkPixbuf.Pixbuf;

    get_tmp_uri(): string;

    save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
}

export namespace Layer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Layer extends GObject.Object {
    static $gtype: GObject.GType<Layer>;

    constructor(properties?: Partial<Layer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Layer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    base_instance: GObject.Object;
    priv: LayerPrivate;

    // Constructors

    static ['new'](is_parent: boolean, rb_group: number): Layer;

    // Members

    get_rb_group(): number;

    is_parent(): boolean;
}

export namespace Link {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        action: LinkAction;
        title: string;
    }
}

export class Link extends GObject.Object {
    static $gtype: GObject.GType<Link>;

    constructor(properties?: Partial<Link.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Link.ConstructorProperties>, ...args: any[]): void;

    // Properties
    action: LinkAction;
    title: string;

    // Constructors

    static ['new'](title: string, action: LinkAction): Link;

    // Members

    get_action(): LinkAction;

    get_title(): string;
}

export namespace LinkAction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        dest: LinkDest;
        filename: string;
        hide_list: any;
        hideList: any;
        name: string;
        params: string;
        show_list: any;
        showList: any;
        toggle_list: any;
        toggleList: any;
        type: LinkActionType;
        uri: string;
    }
}

export class LinkAction extends GObject.Object {
    static $gtype: GObject.GType<LinkAction>;

    constructor(properties?: Partial<LinkAction.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LinkAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dest: LinkDest;
    filename: string;
    hide_list: any;
    hideList: any;
    name: string;
    params: string;
    show_list: any;
    showList: any;
    toggle_list: any;
    toggleList: any;
    type: LinkActionType;
    uri: string;

    // Constructors

    static new_dest(dest: LinkDest): LinkAction;

    static new_external_uri(uri: string): LinkAction;

    static new_launch(filename: string, params: string): LinkAction;

    static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction;

    static new_named(name: string): LinkAction;

    static new_remote(dest: LinkDest, filename: string): LinkAction;

    // Members

    equal(b: LinkAction): boolean;

    get_action_type(): LinkActionType;

    get_dest(): LinkDest;

    get_filename(): string;

    get_hide_list(): Layer[];

    get_name(): string;

    get_params(): string;

    get_show_list(): Layer[];

    get_toggle_list(): Layer[];

    get_uri(): string;
}

export namespace LinkDest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        bottom: number;
        change: number;
        left: number;
        named: string;
        page: number;
        page_label: string;
        pageLabel: string;
        right: number;
        top: number;
        type: LinkDestType;
        zoom: number;
    }
}

export class LinkDest extends GObject.Object {
    static $gtype: GObject.GType<LinkDest>;

    constructor(properties?: Partial<LinkDest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<LinkDest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bottom: number;
    change: number;
    left: number;
    named: string;
    page: number;
    page_label: string;
    pageLabel: string;
    right: number;
    top: number;
    type: LinkDestType;
    zoom: number;

    // Constructors

    static new_fit(page: number): LinkDest;

    static new_fith(page: number, top: number, change_top: boolean): LinkDest;

    static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest;

    static new_fitv(page: number, left: number, change_left: boolean): LinkDest;

    static new_named(named_dest: string): LinkDest;

    static new_page(page: number): LinkDest;

    static new_page_label(page_label: string): LinkDest;

    static new_xyz(
        page: number,
        left: number,
        top: number,
        zoom: number,
        change_left: boolean,
        change_top: boolean,
        change_zoom: boolean
    ): LinkDest;

    // Members

    equal(b: LinkDest): boolean;

    get_bottom(): number;

    get_dest_type(): LinkDestType;

    get_left(change_left: boolean): number;

    get_named_dest(): string;

    get_page(): number;

    get_page_label(): string;

    get_right(): number;

    get_top(change_top: boolean): number;

    get_zoom(change_zoom: boolean): number;
}

export namespace Media {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Media extends GObject.Object {
    static $gtype: GObject.GType<Media>;

    constructor(properties?: Partial<Media.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Media.ConstructorProperties>, ...args: any[]): void;

    // Fields
    base_instance: GObject.Object;
    priv: MediaPrivate;

    // Constructors

    static new_for_uri(page: Page, uri: string): Media;

    // Members

    get_page_index(): number;

    get_show_controls(): boolean;

    get_uri(): string;

    set_show_controls(show_controls: boolean): void;
}

export namespace Page {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Page extends GObject.Object {
    static $gtype: GObject.GType<Page>;

    constructor(properties?: Partial<Page.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Page.ConstructorProperties>, ...args: any[]): void;

    // Fields
    base_instance: GObject.Object;
    index: number;
    backend_page: BackendPage;
    backend_destroy_func: BackendPageDestroyFunc;

    // Constructors

    static ['new'](index: number): Page;
}

export namespace RenderContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RenderContext extends GObject.Object {
    static $gtype: GObject.GType<RenderContext>;

    constructor(properties?: Partial<RenderContext.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RenderContext.ConstructorProperties>, ...args: any[]): void;

    // Fields
    page: Page;
    rotation: number;
    scale: number;
    target_width: number;
    target_height: number;

    // Constructors

    static ['new'](page: Page, rotation: number, scale: number): RenderContext;

    // Members

    compute_scaled_size(width_points: number, height_points: number, scaled_width: number, scaled_height: number): void;

    compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void;

    compute_transformed_size(
        width_points: number,
        height_points: number,
        transformed_width: number,
        transformed_height: number
    ): void;

    set_page(page: Page): void;

    set_rotation(rotation: number): void;

    set_scale(scale: number): void;

    set_target_size(target_width: number, target_height: number): void;
}

export namespace TransitionEffect {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        alignment: TransitionEffectAlignment;
        angle: number;
        direction: TransitionEffectDirection;
        duration: number;
        rectangular: boolean;
        scale: number;
        type: TransitionEffectType;
    }
}

export class TransitionEffect extends GObject.Object {
    static $gtype: GObject.GType<TransitionEffect>;

    constructor(properties?: Partial<TransitionEffect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TransitionEffect.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alignment: TransitionEffectAlignment;
    angle: number;
    direction: TransitionEffectDirection;
    duration: number;
    rectangular: boolean;
    scale: number;
    type: TransitionEffectType;
}

export class DocumentBackendInfo {
    static $gtype: GObject.GType<DocumentBackendInfo>;

    constructor(
        properties?: Partial<{
            name?: string;
            version?: string;
        }>
    );

    constructor(copy: DocumentBackendInfo);

    // Fields
    name: string;
    version: string;
}

export class DocumentInfo {
    static $gtype: GObject.GType<DocumentInfo>;

    constructor(copy: DocumentInfo);

    // Fields
    title: string;
    format: string;
    author: string;
    subject: string;
    keywords: string;
    creator: string;
    producer: string;
    linearized: string;
    security: string;
    creation_date: GLib.Time;
    modified_date: GLib.Time;
    layout: DocumentLayout;
    mode: DocumentMode;
    ui_hints: number;
    permissions: number;
    n_pages: number;
    paper_height: number;
    paper_width: number;
    license: DocumentLicense;
    fields_mask: number;

    // Members
    copy(): DocumentInfo;

    free(): void;
}

export class DocumentLicense {
    static $gtype: GObject.GType<DocumentLicense>;

    constructor();
    constructor(
        properties?: Partial<{
            text?: string;
            uri?: string;
            web_statement?: string;
        }>
    );

    constructor(copy: DocumentLicense);

    // Fields
    text: string;
    uri: string;
    web_statement: string;

    // Constructors
    static ['new'](): DocumentLicense;

    // Members
    copy(): DocumentLicense;

    free(): void;

    get_text(): string;

    get_uri(): string;

    get_web_statement(): string;
}

export class DocumentPrivate {
    static $gtype: GObject.GType<DocumentPrivate>;

    constructor(copy: DocumentPrivate);
}

export class FileExporterContext {
    static $gtype: GObject.GType<FileExporterContext>;

    constructor(copy: FileExporterContext);

    // Fields
    format: FileExporterFormat;
    filename: string;
    first_page: number;
    last_page: number;
    paper_width: number;
    paper_height: number;
    duplex: boolean;
    pages_per_sheet: number;
}

export class ImagePrivate {
    static $gtype: GObject.GType<ImagePrivate>;

    constructor(copy: ImagePrivate);
}

export class LayerPrivate {
    static $gtype: GObject.GType<LayerPrivate>;

    constructor(copy: LayerPrivate);
}

export class LinkActionPrivate {
    static $gtype: GObject.GType<LinkActionPrivate>;

    constructor(copy: LinkActionPrivate);
}

export class LinkDestPrivate {
    static $gtype: GObject.GType<LinkDestPrivate>;

    constructor(copy: LinkDestPrivate);
}

export class LinkPrivate {
    static $gtype: GObject.GType<LinkPrivate>;

    constructor(copy: LinkPrivate);
}

export class Mapping {
    static $gtype: GObject.GType<Mapping>;

    constructor(
        properties?: Partial<{
            area?: Rectangle;
            data?: any;
        }>
    );

    constructor(copy: Mapping);

    // Fields
    area: Rectangle;
    data: any;
}

export class MappingList {
    static $gtype: GObject.GType<MappingList>;

    constructor(page: number, list: Mapping[]);
    constructor(copy: MappingList);

    // Constructors
    static ['new'](page: number, list: Mapping[]): MappingList;

    // Members
    find(data?: any | null): Mapping;

    find_custom(data: any | null, func: GLib.CompareFunc): Mapping;

    get(x: number, y: number): Mapping;

    get_data(x: number, y: number): any | null;

    get_list(): Mapping[];

    get_page(): number;

    length(): number;

    nth(n: number): Mapping;

    ref(): MappingList;

    remove(mapping: Mapping): void;

    unref(): void;
}

export class MediaPrivate {
    static $gtype: GObject.GType<MediaPrivate>;

    constructor(copy: MediaPrivate);
}

export class Point {
    static $gtype: GObject.GType<Point>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );

    constructor(copy: Point);

    // Fields
    x: number;
    y: number;
}

export class Rectangle {
    static $gtype: GObject.GType<Rectangle>;

    constructor();
    constructor(
        properties?: Partial<{
            x1?: number;
            y1?: number;
            x2?: number;
            y2?: number;
        }>
    );

    constructor(copy: Rectangle);

    // Fields
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    // Constructors
    static ['new'](): Rectangle;

    // Members
    copy(): Rectangle;

    free(): void;
}

export class SourceLink {
    static $gtype: GObject.GType<SourceLink>;

    constructor(filename: string, line: number, col: number);
    constructor(
        properties?: Partial<{
            filename?: string;
            line?: number;
            col?: number;
        }>
    );

    constructor(copy: SourceLink);

    // Fields
    filename: string;
    line: number;
    col: number;

    // Constructors
    static ['new'](filename: string, line: number, col: number): SourceLink;

    // Members
    copy(): SourceLink;

    free(): void;
}

export class TypeInfo {
    static $gtype: GObject.GType<TypeInfo>;

    constructor(
        properties?: Partial<{
            desc?: string;
            mime_types?: string;
        }>
    );

    constructor(copy: TypeInfo);

    // Fields
    desc: string;
    mime_types: string;
}

export interface AnnotationMarkupNamespace {
    $gtype: GObject.GType<AnnotationMarkup>;
    prototype: AnnotationMarkupPrototype;
}

export type AnnotationMarkup = AnnotationMarkupPrototype;

export interface AnnotationMarkupPrototype extends Annotation {
    // Properties
    can_have_popup: boolean;
    canHavePopup: boolean;
    has_popup: boolean;
    hasPopup: boolean;
    label: string;
    opacity: number;
    popup_is_open: boolean;
    popupIsOpen: boolean;
    rectangle: Rectangle;

    // Members

    get_label(): string;

    get_opacity(): number;

    get_popup_is_open(): boolean;

    get_rectangle(ev_rect: Rectangle): void;

    set_has_popup(has_popup: boolean): boolean;

    set_label(label: string): boolean;

    set_opacity(opacity: number): boolean;

    set_popup_is_open(is_open: boolean): boolean;

    set_rectangle(ev_rect: Rectangle): boolean;
}

export const AnnotationMarkup: AnnotationMarkupNamespace;

export interface AsyncRendererNamespace {
    $gtype: GObject.GType<AsyncRenderer>;
    prototype: AsyncRendererPrototype;
}

export type AsyncRenderer = AsyncRendererPrototype;

export interface AsyncRendererPrototype extends GObject.Object {
    // Members

    render_pixbuf(page: number, scale: number, rotation: number): void;

    vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void;

    vfunc_render_pixbuf(page: number, scale: number, rotation: number): void;
}

export const AsyncRenderer: AsyncRendererNamespace;

export interface DocumentAnnotationsNamespace {
    $gtype: GObject.GType<DocumentAnnotations>;
    prototype: DocumentAnnotationsPrototype;
}

export type DocumentAnnotations = DocumentAnnotationsPrototype;

export interface DocumentAnnotationsPrototype extends GObject.Object {
    // Members

    add_annotation(annot: Annotation, rect: Rectangle): void;

    can_add_annotation(): boolean;

    can_remove_annotation(): boolean;

    document_is_modified(): boolean;

    get_annotations(page: Page): MappingList;

    over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;

    remove_annotation(annot: Annotation): void;

    save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;

    vfunc_add_annotation(annot: Annotation, rect: Rectangle): void;

    vfunc_document_is_modified(): boolean;

    vfunc_get_annotations(page: Page): MappingList;

    vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;

    vfunc_remove_annotation(annot: Annotation): void;

    vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
}

export const DocumentAnnotations: DocumentAnnotationsNamespace;

export interface DocumentAttachmentsNamespace {
    $gtype: GObject.GType<DocumentAttachments>;
    prototype: DocumentAttachmentsPrototype;
}

export type DocumentAttachments = DocumentAttachmentsPrototype;

export interface DocumentAttachmentsPrototype extends GObject.Object {
    // Members

    get_attachments(): Attachment[];

    has_attachments(): boolean;

    vfunc_get_attachments(): Attachment[];

    vfunc_has_attachments(): boolean;
}

export const DocumentAttachments: DocumentAttachmentsNamespace;

export interface DocumentFindNamespace {
    $gtype: GObject.GType<DocumentFind>;
    prototype: DocumentFindPrototype;
}

export type DocumentFind = DocumentFindPrototype;

export interface DocumentFindPrototype extends GObject.Object {
    // Members

    find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];

    find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];

    get_supported_options(): FindOptions;

    vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];

    vfunc_find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];

    vfunc_get_supported_options(): FindOptions;
}

export const DocumentFind: DocumentFindNamespace;

export interface DocumentFontsNamespace {
    $gtype: GObject.GType<DocumentFonts>;
    prototype: DocumentFontsPrototype;
}

export type DocumentFonts = DocumentFontsPrototype;

export interface DocumentFontsPrototype extends GObject.Object {
    // Members

    fill_model(model: Gtk.TreeModel): void;

    get_fonts_summary(): string;

    get_progress(): number;

    scan(n_pages: number): boolean;

    vfunc_fill_model(model: Gtk.TreeModel): void;

    vfunc_get_fonts_summary(): string;

    vfunc_get_progress(): number;

    vfunc_scan(n_pages: number): boolean;
}

export const DocumentFonts: DocumentFontsNamespace;

export interface DocumentFormsNamespace {
    $gtype: GObject.GType<DocumentForms>;
    prototype: DocumentFormsPrototype;
}

export type DocumentForms = DocumentFormsPrototype;

export interface DocumentFormsPrototype extends GObject.Object {
    // Members

    document_is_modified(): boolean;

    form_field_button_get_state(field: FormField): boolean;

    form_field_button_set_state(field: FormField, state: boolean): void;

    form_field_choice_get_item(field: FormField, index: number): string;

    form_field_choice_get_n_items(field: FormField): number;

    form_field_choice_get_text(field: FormField): string;

    form_field_choice_is_item_selected(field: FormField, index: number): boolean;

    form_field_choice_select_item(field: FormField, index: number): void;

    form_field_choice_set_text(field: FormField, text: string): void;

    form_field_choice_toggle_item(field: FormField, index: number): void;

    form_field_choice_unselect_all(field: FormField): void;

    form_field_text_get_text(field: FormField): string;

    form_field_text_set_text(field: FormField, text: string): void;

    get_form_fields(page: Page): MappingList;

    vfunc_document_is_modified(): boolean;

    vfunc_form_field_button_get_state(field: FormField): boolean;

    vfunc_form_field_button_set_state(field: FormField, state: boolean): void;

    vfunc_form_field_choice_get_item(field: FormField, index: number): string;

    vfunc_form_field_choice_get_n_items(field: FormField): number;

    vfunc_form_field_choice_get_text(field: FormField): string;

    vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean;

    vfunc_form_field_choice_select_item(field: FormField, index: number): void;

    vfunc_form_field_choice_set_text(field: FormField, text: string): void;

    vfunc_form_field_choice_toggle_item(field: FormField, index: number): void;

    vfunc_form_field_choice_unselect_all(field: FormField): void;

    vfunc_form_field_text_get_text(field: FormField): string;

    vfunc_form_field_text_set_text(field: FormField, text: string): void;

    vfunc_get_form_fields(page: Page): MappingList;
}

export const DocumentForms: DocumentFormsNamespace;

export interface DocumentImagesNamespace {
    $gtype: GObject.GType<DocumentImages>;
    prototype: DocumentImagesPrototype;
}

export type DocumentImages = DocumentImagesPrototype;

export interface DocumentImagesPrototype extends GObject.Object {
    // Members

    get_image(image: Image): GdkPixbuf.Pixbuf;

    get_image_mapping(page: Page): MappingList;

    vfunc_get_image(image: Image): GdkPixbuf.Pixbuf;

    vfunc_get_image_mapping(page: Page): MappingList;
}

export const DocumentImages: DocumentImagesNamespace;

export interface DocumentLayersNamespace {
    $gtype: GObject.GType<DocumentLayers>;
    prototype: DocumentLayersPrototype;
}

export type DocumentLayers = DocumentLayersPrototype;

export interface DocumentLayersPrototype extends GObject.Object {
    // Members

    get_layers(): Gtk.TreeModel;

    has_layers(): boolean;

    hide_layer(layer: Layer): void;

    layer_is_visible(layer: Layer): boolean;

    show_layer(layer: Layer): void;

    vfunc_get_layers(): Gtk.TreeModel;

    vfunc_has_layers(): boolean;

    vfunc_hide_layer(layer: Layer): void;

    vfunc_layer_is_visible(layer: Layer): boolean;

    vfunc_show_layer(layer: Layer): void;
}

export const DocumentLayers: DocumentLayersNamespace;

export interface DocumentLinksNamespace {
    $gtype: GObject.GType<DocumentLinks>;
    prototype: DocumentLinksPrototype;
}

export type DocumentLinks = DocumentLinksPrototype;

export interface DocumentLinksPrototype extends GObject.Object {
    // Members

    find_link_dest(link_name: string): LinkDest;

    find_link_page(link_name: string): number;

    get_dest_page(dest: LinkDest): number;

    get_dest_page_label(dest: LinkDest): string;

    get_link_page(link: Link): number;

    get_link_page_label(link: Link): string;

    get_links(page: Page): MappingList;

    get_links_model(): Gtk.TreeModel;

    has_document_links(): boolean;

    vfunc_find_link_dest(link_name: string): LinkDest;

    vfunc_find_link_page(link_name: string): number;

    vfunc_get_links(page: Page): MappingList;

    vfunc_get_links_model(): Gtk.TreeModel;

    vfunc_has_document_links(): boolean;
}

export const DocumentLinks: DocumentLinksNamespace;

export interface DocumentMediaNamespace {
    $gtype: GObject.GType<DocumentMedia>;
    prototype: DocumentMediaPrototype;
}

export type DocumentMedia = DocumentMediaPrototype;

export interface DocumentMediaPrototype extends GObject.Object {
    // Members

    get_media_mapping(page: Page): MappingList;

    vfunc_get_media_mapping(page: Page): MappingList;
}

export const DocumentMedia: DocumentMediaNamespace;

export interface DocumentPrintNamespace {
    $gtype: GObject.GType<DocumentPrint>;
    prototype: DocumentPrintPrototype;
}

export type DocumentPrint = DocumentPrintPrototype;

export interface DocumentPrintPrototype extends GObject.Object {
    // Members

    print_page(page: Page, cr: cairo.Context): void;

    vfunc_print_page(page: Page, cr: cairo.Context): void;
}

export const DocumentPrint: DocumentPrintNamespace;

export interface DocumentSecurityNamespace {
    $gtype: GObject.GType<DocumentSecurity>;
    prototype: DocumentSecurityPrototype;
}

export type DocumentSecurity = DocumentSecurityPrototype;

export interface DocumentSecurityPrototype extends GObject.Object {
    // Members

    has_document_security(): boolean;

    set_password(password: string): void;

    vfunc_has_document_security(): boolean;

    vfunc_set_password(password: string): void;
}

export const DocumentSecurity: DocumentSecurityNamespace;

export interface DocumentTextNamespace {
    $gtype: GObject.GType<DocumentText>;
    prototype: DocumentTextPrototype;
}

export type DocumentText = DocumentTextPrototype;

export interface DocumentTextPrototype extends GObject.Object {
    // Members

    get_text(page: Page): string;

    get_text_attrs(page: Page): Pango.AttrList;

    get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;

    get_text_mapping(page: Page): cairo.Region;

    vfunc_get_text(page: Page): string;

    vfunc_get_text_attrs(page: Page): Pango.AttrList;

    vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;

    vfunc_get_text_mapping(page: Page): cairo.Region;
}

export const DocumentText: DocumentTextNamespace;

export interface DocumentTransitionNamespace {
    $gtype: GObject.GType<DocumentTransition>;
    prototype: DocumentTransitionPrototype;
}

export type DocumentTransition = DocumentTransitionPrototype;

export interface DocumentTransitionPrototype extends GObject.Object {
    // Members

    get_effect(page: number): TransitionEffect;

    get_page_duration(page: number): number;

    vfunc_get_effect(page: number): TransitionEffect;

    vfunc_get_page_duration(page: number): number;
}

export const DocumentTransition: DocumentTransitionNamespace;

export interface FileExporterNamespace {
    $gtype: GObject.GType<FileExporter>;
    prototype: FileExporterPrototype;
}

export type FileExporter = FileExporterPrototype;

export interface FileExporterPrototype extends GObject.Object {
    // Members

    begin(fc: FileExporterContext): void;

    begin_page(): void;

    do_page(rc: RenderContext): void;

    end(): void;

    end_page(): void;

    get_capabilities(): FileExporterCapabilities;

    vfunc_begin(fc: FileExporterContext): void;

    vfunc_begin_page(): void;

    vfunc_do_page(rc: RenderContext): void;

    vfunc_end(): void;

    vfunc_end_page(): void;

    vfunc_get_capabilities(): FileExporterCapabilities;
}

export const FileExporter: FileExporterNamespace;

export interface SelectionNamespace {
    $gtype: GObject.GType<Selection>;
    prototype: SelectionPrototype;
}

export type Selection = SelectionPrototype;

export interface SelectionPrototype extends GObject.Object {
    // Members

    get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;

    get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;

    render_selection(
        rc: RenderContext,
        surface: cairo.Surface,
        points: Rectangle,
        old_points: Rectangle,
        style: SelectionStyle,
        text: Gdk.Color,
        base: Gdk.Color
    ): void;

    vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;

    vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;

    vfunc_render_selection(
        rc: RenderContext,
        surface: cairo.Surface,
        points: Rectangle,
        old_points: Rectangle,
        style: SelectionStyle,
        text: Gdk.Color,
        base: Gdk.Color
    ): void;
}

export const Selection: SelectionNamespace;

export type BackendPage = any;
export type BackendPageDestroyFunc = GLib.DestroyNotify;
