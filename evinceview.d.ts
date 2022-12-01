/**
 * EvinceView 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as EvinceDocument from './evincedocument';
import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gdk from './gdk';
import * as GdkPixbuf from './gdkpixbuf';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Atk from './atk';
import * as cairo from './cairo';
import * as Pango from './pango';

export const STOCK_ANNOT_SQUIGGLY: string;
export const STOCK_ANNOT_TEXT: string;
export const STOCK_ATTACHMENT: string;
export const STOCK_CLOSE: string;
export const STOCK_FIND_UNSUPPORTED: string;
export const STOCK_INVERTED_COLORS: string;
export const STOCK_OUTLINE: string;
export const STOCK_RESIZE_SE: string;
export const STOCK_RESIZE_SW: string;
export const STOCK_ROTATE_LEFT: string;
export const STOCK_ROTATE_RIGHT: string;
export const STOCK_RUN_PRESENTATION: string;
export const STOCK_SEND_TO: string;
export const STOCK_VIEW_CONTINUOUS: string;
export const STOCK_VIEW_DUAL: string;
export const STOCK_VIEW_SIDEBAR: string;
export const STOCK_VISIBLE: string;
export const STOCK_ZOOM: string;
export const STOCK_ZOOM_PAGE: string;
export const STOCK_ZOOM_WIDTH: string;

export function stock_icons_init(): void;

export function stock_icons_set_screen(screen: Gdk.Screen): void;

export function stock_icons_shutdown(): void;

export namespace JobPriority {
    export const $gtype: GObject.GType<JobPriority>;
}

export enum JobPriority {
    PRIORITY_URGENT = 0,
    PRIORITY_HIGH = 1,
    PRIORITY_LOW = 2,
    PRIORITY_NONE = 3,
    N_PRIORITIES = 4,
}

export namespace JobRunMode {
    export const $gtype: GObject.GType<JobRunMode>;
}

export enum JobRunMode {
    THREAD = 0,
    MAIN_LOOP = 1,
}

export namespace JobThumbnailFormat {
    export const $gtype: GObject.GType<JobThumbnailFormat>;
}

export enum JobThumbnailFormat {
    PIXBUF = 0,
    SURFACE = 1,
}

export namespace PageLayout {
    export const $gtype: GObject.GType<PageLayout>;
}

export enum PageLayout {
    SINGLE = 0,
    DUAL = 1,
    AUTOMATIC = 2,
}

export namespace SizingMode {
    export const $gtype: GObject.GType<SizingMode>;
}

export enum SizingMode {
    FIT_PAGE = 0,
    BEST_FIT = 0,
    FIT_WIDTH = 1,
    FREE = 2,
    AUTOMATIC = 3,
}

export namespace JobPageDataFlags {
    export const $gtype: GObject.GType<JobPageDataFlags>;
}

export enum JobPageDataFlags {
    NONE = 0,
    LINKS = 1,
    TEXT = 2,
    TEXT_MAPPING = 4,
    TEXT_LAYOUT = 8,
    TEXT_ATTRS = 16,
    TEXT_LOG_ATTRS = 32,
    IMAGES = 64,
    FORMS = 128,
    ANNOTS = 256,
    MEDIA = 512,
    ALL = 1023,
}

export namespace DocumentModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        continuous: boolean;
        document: EvinceDocument.Document;
        dual_odd_left: boolean;
        dualOddLeft: boolean;
        dual_page: boolean;
        dualPage: boolean;
        fullscreen: boolean;
        inverted_colors: boolean;
        invertedColors: boolean;
        max_scale: number;
        maxScale: number;
        min_scale: number;
        minScale: number;
        page: number;
        page_layout: PageLayout;
        pageLayout: PageLayout;
        rotation: number;
        rtl: boolean;
        scale: number;
        sizing_mode: SizingMode;
        sizingMode: SizingMode;
    }
}

export class DocumentModel extends GObject.Object {
    static $gtype: GObject.GType<DocumentModel>;

    constructor(properties?: Partial<DocumentModel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    continuous: boolean;
    document: EvinceDocument.Document;
    dual_odd_left: boolean;
    dualOddLeft: boolean;
    dual_page: boolean;
    dualPage: boolean;
    fullscreen: boolean;
    inverted_colors: boolean;
    invertedColors: boolean;
    max_scale: number;
    maxScale: number;
    min_scale: number;
    minScale: number;
    page: number;
    page_layout: PageLayout;
    pageLayout: PageLayout;
    rotation: number;
    rtl: boolean;
    scale: number;
    sizing_mode: SizingMode;
    sizingMode: SizingMode;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'page-changed', callback: (_source: this, object: number, p0: number) => void): number;

    connect_after(signal: 'page-changed', callback: (_source: this, object: number, p0: number) => void): number;

    emit(signal: 'page-changed', object: number, p0: number): void;

    // Constructors

    static ['new'](): DocumentModel;

    static new_with_document(document: EvinceDocument.Document): DocumentModel;

    // Members

    get_continuous(): boolean;

    get_document(): EvinceDocument.Document;

    get_dual_page(): boolean;

    get_dual_page_odd_pages_left(): boolean;

    get_fullscreen(): boolean;

    get_inverted_colors(): boolean;

    get_max_scale(): number;

    get_min_scale(): number;

    get_page(): number;

    get_page_layout(): PageLayout;

    get_rotation(): number;

    get_rtl(): boolean;

    get_scale(): number;

    get_sizing_mode(): SizingMode;

    set_continuous(continuous: boolean): void;

    set_document(document: EvinceDocument.Document): void;

    set_dual_page(dual_page: boolean): void;

    set_dual_page_odd_pages_left(odd_left: boolean): void;

    set_fullscreen(fullscreen: boolean): void;

    set_inverted_colors(inverted_colors: boolean): void;

    set_max_scale(max_scale: number): void;

    set_min_scale(min_scale: number): void;

    set_page(page: number): void;

    set_page_by_label(page_label: string): void;

    set_page_layout(layout: PageLayout): void;

    set_rotation(rotation: number): void;

    set_rtl(rtl: boolean): void;

    set_scale(scale: number): void;

    set_sizing_mode(mode: SizingMode): void;
}

export namespace Job {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Job extends GObject.Object {
    static $gtype: GObject.GType<Job>;

    constructor(properties?: Partial<Job.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Job.ConstructorProperties>, ...args: any[]): void;

    // Fields
    document: EvinceDocument.Document;
    run_mode: JobRunMode;
    cancelled: number;
    finished: number;
    error: GLib.Error;
    cancellable: Gio.Cancellable;
    idle_finished_id: number;
    idle_cancelled_id: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'cancelled', callback: (_source: this) => void): number;

    connect_after(signal: 'cancelled', callback: (_source: this) => void): number;

    emit(signal: 'cancelled'): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    // Members

    cancel(): void;

    failed(error: GLib.Error): void;

    get_run_mode(): JobRunMode;

    is_failed(): boolean;

    is_finished(): boolean;

    run(): boolean;

    scheduler_push_job(priority: JobPriority): void;

    scheduler_update_job(priority: JobPriority): void;

    set_run_mode(run_mode: JobRunMode): void;

    succeeded(): void;

    vfunc_cancelled(): void;

    vfunc_finished(): void;

    vfunc_run(): boolean;

    static scheduler_get_running_thread_job(): Job;
}

export namespace JobAnnots {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobAnnots extends Job {
    static $gtype: GObject.GType<JobAnnots>;

    constructor(properties?: Partial<JobAnnots.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobAnnots.ConstructorProperties>, ...args: any[]): void;

    // Fields
    annots: any[];

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobAnnots;
}

export namespace JobAttachments {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobAttachments extends Job {
    static $gtype: GObject.GType<JobAttachments>;

    constructor(properties?: Partial<JobAttachments.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobAttachments.ConstructorProperties>, ...args: any[]): void;

    // Fields
    attachments: any[];

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobAttachments;
}

export namespace JobExport {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobExport extends Job {
    static $gtype: GObject.GType<JobExport>;

    constructor(properties?: Partial<JobExport.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobExport.ConstructorProperties>, ...args: any[]): void;

    // Fields
    page: number;
    rc: EvinceDocument.RenderContext;

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobExport;

    // Members

    set_page(page: number): void;
}

export namespace JobFind {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobFind extends Job {
    static $gtype: GObject.GType<JobFind>;

    constructor(properties?: Partial<JobFind.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobFind.ConstructorProperties>, ...args: any[]): void;

    // Fields
    start_page: number;
    current_page: number;
    n_pages: number;
    pages: any[];
    text: string;
    case_sensitive: boolean;
    options: EvinceDocument.FindOptions;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'updated', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'updated', callback: (_source: this, object: number) => void): number;

    emit(signal: 'updated', object: number): void;

    // Constructors

    static ['new'](
        document: EvinceDocument.Document,
        start_page: number,
        n_pages: number,
        text: string,
        case_sensitive: boolean
    ): JobFind;

    // Members

    get_n_results(pages: number): number;

    get_options(): EvinceDocument.FindOptions;

    get_progress(): number;

    has_results(): boolean;

    set_options(options: EvinceDocument.FindOptions): void;

    vfunc_updated(page: number): void;
}

export namespace JobFonts {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobFonts extends Job {
    static $gtype: GObject.GType<JobFonts>;

    constructor(properties?: Partial<JobFonts.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobFonts.ConstructorProperties>, ...args: any[]): void;

    // Fields
    scan_completed: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'updated', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'updated', callback: (_source: this, object: number) => void): number;

    emit(signal: 'updated', object: number): void;

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobFonts;

    // Members

    vfunc_updated(progress: number): void;
}

export namespace JobLayers {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobLayers extends Job {
    static $gtype: GObject.GType<JobLayers>;

    constructor(properties?: Partial<JobLayers.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobLayers.ConstructorProperties>, ...args: any[]): void;

    // Fields
    model: Gtk.TreeModel;

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobLayers;
}

export namespace JobLinks {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobLinks extends Job {
    static $gtype: GObject.GType<JobLinks>;

    constructor(properties?: Partial<JobLinks.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobLinks.ConstructorProperties>, ...args: any[]): void;

    // Fields
    model: Gtk.TreeModel;

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobLinks;

    // Members

    get_model(): Gtk.TreeModel;
}

export namespace JobLoad {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobLoad extends Job {
    static $gtype: GObject.GType<JobLoad>;

    constructor(properties?: Partial<JobLoad.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobLoad.ConstructorProperties>, ...args: any[]): void;

    // Fields
    uri: string;
    password: string;

    // Constructors

    static ['new'](uri: string): JobLoad;

    // Members

    set_password(password: string): void;

    set_uri(uri: string): void;
}

export namespace JobLoadGFile {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobLoadGFile extends Job {
    static $gtype: GObject.GType<JobLoadGFile>;

    constructor(properties?: Partial<JobLoadGFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobLoadGFile.ConstructorProperties>, ...args: any[]): void;

    // Fields
    password: string;
    gfile: Gio.File;
    flags: EvinceDocument.DocumentLoadFlags;

    // Constructors

    static ['new'](gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags): JobLoadGFile;

    // Members

    set_gfile(gfile: Gio.File): void;

    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;

    set_password(password: string): void;
}

export namespace JobLoadStream {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobLoadStream extends Job {
    static $gtype: GObject.GType<JobLoadStream>;

    constructor(properties?: Partial<JobLoadStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobLoadStream.ConstructorProperties>, ...args: any[]): void;

    // Fields
    password: string;
    stream: Gio.InputStream;
    flags: EvinceDocument.DocumentLoadFlags;

    // Constructors

    static ['new'](stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags): JobLoadStream;

    // Members

    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;

    set_password(password: string): void;

    set_stream(stream: Gio.InputStream): void;
}

export namespace JobPageData {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobPageData extends Job {
    static $gtype: GObject.GType<JobPageData>;

    constructor(properties?: Partial<JobPageData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobPageData.ConstructorProperties>, ...args: any[]): void;

    // Fields
    page: number;
    flags: JobPageDataFlags;
    link_mapping: EvinceDocument.MappingList;
    image_mapping: EvinceDocument.MappingList;
    form_field_mapping: EvinceDocument.MappingList;
    annot_mapping: EvinceDocument.MappingList;
    media_mapping: EvinceDocument.MappingList;
    text_mapping: cairo.Region;
    text: string;
    text_layout: EvinceDocument.Rectangle;
    text_layout_length: number;
    text_attrs: Pango.AttrList;
    text_log_attrs: Pango.LogAttr;
    text_log_attrs_length: number;

    // Constructors

    static ['new'](document: EvinceDocument.Document, page: number, flags: JobPageDataFlags): JobPageData;
}

export namespace JobPrint {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobPrint extends Job {
    static $gtype: GObject.GType<JobPrint>;

    constructor(properties?: Partial<JobPrint.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobPrint.ConstructorProperties>, ...args: any[]): void;

    // Fields
    page: number;
    cr: cairo.Context;

    // Constructors

    static ['new'](document: EvinceDocument.Document): JobPrint;

    // Members

    set_cairo(cr: cairo.Context): void;

    set_page(page: number): void;
}

export namespace JobRender {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobRender extends Job {
    static $gtype: GObject.GType<JobRender>;

    constructor(properties?: Partial<JobRender.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobRender.ConstructorProperties>, ...args: any[]): void;

    // Fields
    page: number;
    rotation: number;
    scale: number;
    page_ready: boolean;
    target_width: number;
    target_height: number;
    surface: cairo.Surface;
    include_selection: boolean;
    selection: cairo.Surface;
    selection_region: cairo.Region;
    selection_points: EvinceDocument.Rectangle;
    selection_style: EvinceDocument.SelectionStyle;
    base: Gdk.Color;
    text: Gdk.Color;

    // Constructors

    static ['new'](
        document: EvinceDocument.Document,
        page: number,
        rotation: number,
        scale: number,
        width: number,
        height: number
    ): JobRender;

    // Members

    set_selection_info(
        selection_points: EvinceDocument.Rectangle,
        selection_style: EvinceDocument.SelectionStyle,
        text: Gdk.Color,
        base: Gdk.Color
    ): void;
}

export namespace JobSave {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobSave extends Job {
    static $gtype: GObject.GType<JobSave>;

    constructor(properties?: Partial<JobSave.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobSave.ConstructorProperties>, ...args: any[]): void;

    // Fields
    uri: string;
    document_uri: string;

    // Constructors

    static ['new'](document: EvinceDocument.Document, uri: string, document_uri: string): JobSave;
}

export namespace JobThumbnail {
    export interface ConstructorProperties extends Job.ConstructorProperties {
        [key: string]: any;
    }
}

export class JobThumbnail extends Job {
    static $gtype: GObject.GType<JobThumbnail>;

    constructor(properties?: Partial<JobThumbnail.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<JobThumbnail.ConstructorProperties>, ...args: any[]): void;

    // Fields
    page: number;
    rotation: number;
    scale: number;
    target_width: number;
    target_height: number;
    thumbnail: GdkPixbuf.Pixbuf;
    has_frame: boolean;
    format: JobThumbnailFormat;
    thumbnail_surface: cairo.Surface;

    // Constructors

    static ['new'](document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail;

    static new_with_target_size(
        document: EvinceDocument.Document,
        page: number,
        rotation: number,
        target_width: number,
        target_height: number
    ): JobThumbnail;

    // Members

    set_has_frame(has_frame: boolean): void;

    set_output_format(format: JobThumbnailFormat): void;
}

export namespace PrintOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        document: EvinceDocument.Document;
    }
}

export abstract class PrintOperation extends GObject.Object {
    static $gtype: GObject.GType<PrintOperation>;

    constructor(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    document: EvinceDocument.Document;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'begin-print', callback: (_source: this) => void): number;

    connect_after(signal: 'begin-print', callback: (_source: this) => void): number;

    emit(signal: 'begin-print'): void;

    connect(signal: 'done', callback: (_source: this, object: Gtk.PrintOperationResult) => void): number;

    connect_after(signal: 'done', callback: (_source: this, object: Gtk.PrintOperationResult) => void): number;

    emit(signal: 'done', object: Gtk.PrintOperationResult): void;

    connect(signal: 'status-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'status-changed', callback: (_source: this) => void): number;

    emit(signal: 'status-changed'): void;

    // Constructors

    static ['new'](document: EvinceDocument.Document): PrintOperation;

    // Members

    cancel(): void;

    get_default_page_setup(): Gtk.PageSetup;

    get_embed_page_setup(): boolean;

    get_error(): void;

    get_job_name(): string;

    get_print_settings(): Gtk.PrintSettings;

    get_progress(): number;

    get_status(): string;

    run(parent: Gtk.Window): void;

    set_current_page(current_page: number): void;

    set_default_page_setup(page_setup: Gtk.PageSetup): void;

    set_embed_page_setup(embed: boolean): void;

    set_job_name(job_name: string): void;

    set_print_settings(print_settings: Gtk.PrintSettings): void;

    static exists_for_document(document: EvinceDocument.Document): boolean;
}

export namespace View {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;

        can_zoom_in: boolean;
        canZoomIn: boolean;
        can_zoom_out: boolean;
        canZoomOut: boolean;
        is_loading: boolean;
        isLoading: boolean;
    }
}

export class View extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
    static $gtype: GObject.GType<View>;

    constructor(properties?: Partial<View.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<View.ConstructorProperties>, ...args: any[]): void;

    // Properties
    can_zoom_in: boolean;
    canZoomIn: boolean;
    can_zoom_out: boolean;
    canZoomOut: boolean;
    is_loading: boolean;
    isLoading: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'activate', callback: (_source: this) => void): number;

    connect_after(signal: 'activate', callback: (_source: this) => void): number;

    emit(signal: 'activate'): void;

    connect(signal: 'annot-added', callback: (_source: this, object: EvinceDocument.Annotation) => void): number;

    connect_after(signal: 'annot-added', callback: (_source: this, object: EvinceDocument.Annotation) => void): number;

    emit(signal: 'annot-added', object: EvinceDocument.Annotation): void;

    connect(signal: 'annot-removed', callback: (_source: this, object: EvinceDocument.Annotation) => void): number;

    connect_after(
        signal: 'annot-removed',
        callback: (_source: this, object: EvinceDocument.Annotation) => void
    ): number;

    emit(signal: 'annot-removed', object: EvinceDocument.Annotation): void;

    connect(signal: 'cursor-moved', callback: (_source: this, object: number, p0: number) => void): number;

    connect_after(signal: 'cursor-moved', callback: (_source: this, object: number, p0: number) => void): number;

    emit(signal: 'cursor-moved', object: number, p0: number): void;

    connect(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;

    connect_after(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;

    emit(signal: 'external-link', object: GObject.Object): void;

    connect(signal: 'handle-link', callback: (_source: this, object: number, p0: GObject.Object) => void): number;

    connect_after(signal: 'handle-link', callback: (_source: this, object: number, p0: GObject.Object) => void): number;

    emit(signal: 'handle-link', object: number, p0: GObject.Object): void;

    connect(signal: 'layers-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'layers-changed', callback: (_source: this) => void): number;

    emit(signal: 'layers-changed'): void;

    connect(
        signal: 'move-cursor',
        callback: (_source: this, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean
    ): number;

    connect_after(
        signal: 'move-cursor',
        callback: (_source: this, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean
    ): number;

    emit(signal: 'move-cursor', object: Gtk.MovementStep, p0: number, p1: boolean): void;

    connect(signal: 'popup', callback: (_source: this, object: any | null) => void): number;

    connect_after(signal: 'popup', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'popup', object: any | null): void;

    connect(signal: 'scroll', callback: (_source: this, object: Gtk.ScrollType, p0: Gtk.Orientation) => void): number;

    connect_after(
        signal: 'scroll',
        callback: (_source: this, object: Gtk.ScrollType, p0: Gtk.Orientation) => void
    ): number;

    emit(signal: 'scroll', object: Gtk.ScrollType, p0: Gtk.Orientation): void;

    connect(signal: 'selection-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;

    emit(signal: 'selection-changed'): void;

    connect(signal: 'sync-source', callback: (_source: this, object: EvinceDocument.SourceLink) => void): number;

    connect_after(signal: 'sync-source', callback: (_source: this, object: EvinceDocument.SourceLink) => void): number;

    emit(signal: 'sync-source', object: EvinceDocument.SourceLink): void;

    // Implemented Properties

    hadjustment: Gtk.Adjustment;
    hscroll_policy: Gtk.ScrollablePolicy;
    hscrollPolicy: Gtk.ScrollablePolicy;
    vadjustment: Gtk.Adjustment;
    vscroll_policy: Gtk.ScrollablePolicy;
    vscrollPolicy: Gtk.ScrollablePolicy;

    // Constructors

    static ['new'](): View;

    // Members

    add_text_markup_annotation_for_selected_text(): boolean;

    autoscroll_start(): void;

    autoscroll_stop(): void;

    begin_add_annotation(annot_type: EvinceDocument.AnnotationType): void;

    cancel_add_annotation(): void;

    copy(): void;

    copy_link_address(action: EvinceDocument.LinkAction): void;

    find_cancel(): void;

    find_next(): void;

    find_previous(): void;

    find_restart(page: number): void;

    find_search_changed(): void;

    find_set_highlight_search(value: boolean): void;

    find_set_result(page: number, result: number): void;

    find_started(job: JobFind): void;

    focus_annotation(annot_mapping: EvinceDocument.Mapping): void;

    get_allow_links_change_zoom(): boolean;

    get_enable_spellchecking(): boolean;

    get_has_selection(): boolean;

    get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean;

    get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean;

    get_selected_text(): string;

    handle_link(link: EvinceDocument.Link): void;

    hide_cursor(): void;

    highlight_forward_search(link: EvinceDocument.SourceLink): void;

    is_caret_navigation_enabled(): boolean;

    next_page(): boolean;

    previous_page(): boolean;

    reload(): void;

    remove_annotation(annot: EvinceDocument.Annotation): void;

    scroll(scroll: Gtk.ScrollType, horizontal: boolean): void;

    select_all(): void;

    set_allow_links_change_zoom(allowed: boolean): void;

    set_caret_cursor_position(page: number, offset: number): void;

    set_caret_navigation_enabled(enabled: boolean): void;

    set_enable_spellchecking(spellcheck: boolean): void;

    set_loading(loading: boolean): void;

    set_model(model: DocumentModel): void;

    set_page_cache_size(cache_size: number): void;

    show_cursor(): void;

    supports_caret_navigation(): boolean;

    zoom_in(): void;

    zoom_out(): void;

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

export namespace ViewPresentation {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;

        current_page: number;
        currentPage: number;
        document: EvinceDocument.Document;
        inverted_colors: boolean;
        invertedColors: boolean;
        rotation: number;
    }
}

export class ViewPresentation extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewPresentation>;

    constructor(properties?: Partial<ViewPresentation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ViewPresentation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    current_page: number;
    currentPage: number;
    document: EvinceDocument.Document;
    inverted_colors: boolean;
    invertedColors: boolean;
    rotation: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'change-page', callback: (_source: this, object: Gtk.ScrollType) => void): number;

    connect_after(signal: 'change-page', callback: (_source: this, object: Gtk.ScrollType) => void): number;

    emit(signal: 'change-page', object: Gtk.ScrollType): void;

    connect(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;

    connect_after(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;

    emit(signal: 'external-link', object: GObject.Object): void;

    connect(signal: 'finished', callback: (_source: this) => void): number;

    connect_after(signal: 'finished', callback: (_source: this) => void): number;

    emit(signal: 'finished'): void;

    // Constructors

    static ['new'](
        document: EvinceDocument.Document,
        current_page: number,
        rotation: number,
        inverted_colors: boolean
    ): ViewPresentation;

    // Members

    get_current_page(): number;

    get_rotation(): number;

    next_page(): void;

    previous_page(): void;

    set_rotation(rotation: number): void;

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
