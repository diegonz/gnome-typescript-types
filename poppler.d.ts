/**
 * Poppler 0.18
 *
 * Generated from 21.1.0
 */

import * as GObject from "./gobject";
import * as Gio from "./gio";
import * as cairo from "./cairo";
import * as GLib from "./glib";

export const ANNOT_TEXT_ICON_CIRCLE: string;
export const ANNOT_TEXT_ICON_COMMENT: string;
export const ANNOT_TEXT_ICON_CROSS: string;
export const ANNOT_TEXT_ICON_HELP: string;
export const ANNOT_TEXT_ICON_INSERT: string;
export const ANNOT_TEXT_ICON_KEY: string;
export const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string;
export const ANNOT_TEXT_ICON_NOTE: string;
export const ANNOT_TEXT_ICON_PARAGRAPH: string;
export const HAS_CAIRO: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export function date_parse(date: string, timet: number): boolean;

export function error_quark(): GLib.Quark;

export function get_backend(): Backend;

export function get_version(): string;

export function named_dest_from_bytestring(data: Uint8Array | string): string;

export function named_dest_to_bytestring(name: string): Uint8Array | null;

export type AttachmentSaveFunc = (buf: Uint8Array | string) => boolean;
export type MediaSaveFunc = (buf: Uint8Array | string) => boolean;

export namespace ActionLayerAction {
    export const $gtype: GObject.GType<ActionLayerAction>;
}

export enum ActionLayerAction {
    ON = 0,
    OFF = 1,
    TOGGLE = 2,
}

export namespace ActionMovieOperation {
    export const $gtype: GObject.GType<ActionMovieOperation>;
}

export enum ActionMovieOperation {
    PLAY = 0,
    PAUSE = 1,
    RESUME = 2,
    STOP = 3,
}

export namespace ActionType {
    export const $gtype: GObject.GType<ActionType>;
}

export enum ActionType {
    UNKNOWN = 0,
    NONE = 1,
    GOTO_DEST = 2,
    GOTO_REMOTE = 3,
    LAUNCH = 4,
    URI = 5,
    NAMED = 6,
    MOVIE = 7,
    RENDITION = 8,
    OCG_STATE = 9,
    JAVASCRIPT = 10,
    RESET_FORM = 11,
}

export namespace AdditionalActionType {
    export const $gtype: GObject.GType<AdditionalActionType>;
}

export enum AdditionalActionType {
    FIELD_MODIFIED = 0,
    FORMAT_FIELD = 1,
    VALIDATE_FIELD = 2,
    CALCULATE_FIELD = 3,
}

export namespace AnnotExternalDataType {
    export const $gtype: GObject.GType<AnnotExternalDataType>;
}

export enum AnnotExternalDataType {
    "3D" = 0,
    UNKNOWN = 1,
}

export namespace AnnotFreeTextQuadding {
    export const $gtype: GObject.GType<AnnotFreeTextQuadding>;
}

export enum AnnotFreeTextQuadding {
    LEFT_JUSTIFIED = 0,
    CENTERED = 1,
    RIGHT_JUSTIFIED = 2,
}

export namespace AnnotMarkupReplyType {
    export const $gtype: GObject.GType<AnnotMarkupReplyType>;
}

export enum AnnotMarkupReplyType {
    R = 0,
    GROUP = 1,
}

export namespace AnnotTextState {
    export const $gtype: GObject.GType<AnnotTextState>;
}

export enum AnnotTextState {
    MARKED = 0,
    UNMARKED = 1,
    ACCEPTED = 2,
    REJECTED = 3,
    CANCELLED = 4,
    COMPLETED = 5,
    NONE = 6,
    UNKNOWN = 7,
}

export namespace AnnotType {
    export const $gtype: GObject.GType<AnnotType>;
}

export enum AnnotType {
    UNKNOWN = 0,
    TEXT = 1,
    LINK = 2,
    FREE_TEXT = 3,
    LINE = 4,
    SQUARE = 5,
    CIRCLE = 6,
    POLYGON = 7,
    POLY_LINE = 8,
    HIGHLIGHT = 9,
    UNDERLINE = 10,
    SQUIGGLY = 11,
    STRIKE_OUT = 12,
    STAMP = 13,
    CARET = 14,
    INK = 15,
    POPUP = 16,
    FILE_ATTACHMENT = 17,
    SOUND = 18,
    MOVIE = 19,
    WIDGET = 20,
    SCREEN = 21,
    PRINTER_MARK = 22,
    TRAP_NET = 23,
    WATERMARK = 24,
    "3D" = 25,
}

export namespace Backend {
    export const $gtype: GObject.GType<Backend>;
}

export enum Backend {
    UNKNOWN = 0,
    SPLASH = 1,
    CAIRO = 2,
}

export namespace DestType {
    export const $gtype: GObject.GType<DestType>;
}

export enum DestType {
    UNKNOWN = 0,
    XYZ = 1,
    FIT = 2,
    FITH = 3,
    FITV = 4,
    FITR = 5,
    FITB = 6,
    FITBH = 7,
    FITBV = 8,
    NAMED = 9,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static INVALID: number;
    static ENCRYPTED: number;
    static OPEN_FILE: number;
    static BAD_CATALOG: number;
    static DAMAGED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace FontType {
    export const $gtype: GObject.GType<FontType>;
}

export enum FontType {
    UNKNOWN = 0,
    TYPE1 = 1,
    TYPE1C = 2,
    TYPE1COT = 3,
    TYPE3 = 4,
    TRUETYPE = 5,
    TRUETYPEOT = 6,
    CID_TYPE0 = 7,
    CID_TYPE0C = 8,
    CID_TYPE0COT = 9,
    CID_TYPE2 = 10,
    CID_TYPE2OT = 11,
}

export namespace FormButtonType {
    export const $gtype: GObject.GType<FormButtonType>;
}

export enum FormButtonType {
    PUSH = 0,
    CHECK = 1,
    RADIO = 2,
}

export namespace FormChoiceType {
    export const $gtype: GObject.GType<FormChoiceType>;
}

export enum FormChoiceType {
    COMBO = 0,
    LIST = 1,
}

export namespace FormFieldType {
    export const $gtype: GObject.GType<FormFieldType>;
}

export enum FormFieldType {
    UNKNOWN = 0,
    BUTTON = 1,
    TEXT = 2,
    CHOICE = 3,
    SIGNATURE = 4,
}

export namespace FormTextType {
    export const $gtype: GObject.GType<FormTextType>;
}

export enum FormTextType {
    NORMAL = 0,
    MULTILINE = 1,
    FILE_SELECT = 2,
}

export namespace MoviePlayMode {
    export const $gtype: GObject.GType<MoviePlayMode>;
}

export enum MoviePlayMode {
    ONCE = 0,
    OPEN = 1,
    REPEAT = 2,
    PALINDROME = 3,
}

export namespace PDFConformance {
    export const $gtype: GObject.GType<PDFConformance>;
}

export enum PDFConformance {
    UNSET = 0,
    A = 1,
    B = 2,
    G = 3,
    N = 4,
    P = 5,
    PG = 6,
    U = 7,
    NONE = 8,
}

export class PDFPart {
    static $gtype: GObject.GType<PDFPart>;

    constructor(copy: PDFPart);

    // Properties
    static UNSET: number;
    static "1": number;
    static "2": number;
    static "3": number;
    static "4": number;
    static "5": number;
    static "6": number;
    static "7": number;
    static "8": number;
    static NONE: number;
}

export namespace PDFSubtype {
    export const $gtype: GObject.GType<PDFSubtype>;
}

export enum PDFSubtype {
    UNSET = 0,
    PDF_A = 1,
    PDF_E = 2,
    PDF_UA = 3,
    PDF_VT = 4,
    PDF_X = 5,
    NONE = 6,
}

export namespace PageLayout {
    export const $gtype: GObject.GType<PageLayout>;
}

export enum PageLayout {
    UNSET = 0,
    SINGLE_PAGE = 1,
    ONE_COLUMN = 2,
    TWO_COLUMN_LEFT = 3,
    TWO_COLUMN_RIGHT = 4,
    TWO_PAGE_LEFT = 5,
    TWO_PAGE_RIGHT = 6,
}

export namespace PageMode {
    export const $gtype: GObject.GType<PageMode>;
}

export enum PageMode {
    UNSET = 0,
    NONE = 1,
    USE_OUTLINES = 2,
    USE_THUMBS = 3,
    FULL_SCREEN = 4,
    USE_OC = 5,
    USE_ATTACHMENTS = 6,
}

export namespace PageTransitionAlignment {
    export const $gtype: GObject.GType<PageTransitionAlignment>;
}

export enum PageTransitionAlignment {
    HORIZONTAL = 0,
    VERTICAL = 1,
}

export namespace PageTransitionDirection {
    export const $gtype: GObject.GType<PageTransitionDirection>;
}

export enum PageTransitionDirection {
    INWARD = 0,
    OUTWARD = 1,
}

export namespace PageTransitionType {
    export const $gtype: GObject.GType<PageTransitionType>;
}

export enum PageTransitionType {
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

export namespace PrintDuplex {
    export const $gtype: GObject.GType<PrintDuplex>;
}

export enum PrintDuplex {
    NONE = 0,
    SIMPLEX = 1,
    DUPLEX_FLIP_SHORT_EDGE = 2,
    DUPLEX_FLIP_LONG_EDGE = 3,
}

export namespace PrintScaling {
    export const $gtype: GObject.GType<PrintScaling>;
}

export enum PrintScaling {
    APP_DEFAULT = 0,
    NONE = 1,
}

export namespace SelectionStyle {
    export const $gtype: GObject.GType<SelectionStyle>;
}

export enum SelectionStyle {
    GLYPH = 0,
    WORD = 1,
    LINE = 2,
}

export namespace StructureBlockAlign {
    export const $gtype: GObject.GType<StructureBlockAlign>;
}

export enum StructureBlockAlign {
    BEFORE = 0,
    MIDDLE = 1,
    AFTER = 2,
    JUSTIFY = 3,
}

export namespace StructureBorderStyle {
    export const $gtype: GObject.GType<StructureBorderStyle>;
}

export enum StructureBorderStyle {
    NONE = 0,
    HIDDEN = 1,
    DOTTED = 2,
    DASHED = 3,
    SOLID = 4,
    DOUBLE = 5,
    GROOVE = 6,
    INSET = 7,
    OUTSET = 8,
}

export namespace StructureElementKind {
    export const $gtype: GObject.GType<StructureElementKind>;
}

export enum StructureElementKind {
    CONTENT = 0,
    OBJECT_REFERENCE = 1,
    DOCUMENT = 2,
    PART = 3,
    ARTICLE = 4,
    SECTION = 5,
    DIV = 6,
    SPAN = 7,
    QUOTE = 8,
    NOTE = 9,
    REFERENCE = 10,
    BIBENTRY = 11,
    CODE = 12,
    LINK = 13,
    ANNOT = 14,
    BLOCKQUOTE = 15,
    CAPTION = 16,
    NONSTRUCT = 17,
    TOC = 18,
    TOC_ITEM = 19,
    INDEX = 20,
    PRIVATE = 21,
    PARAGRAPH = 22,
    HEADING = 23,
    HEADING_1 = 24,
    HEADING_2 = 25,
    HEADING_3 = 26,
    HEADING_4 = 27,
    HEADING_5 = 28,
    HEADING_6 = 29,
    LIST = 30,
    LIST_ITEM = 31,
    LIST_LABEL = 32,
    LIST_BODY = 33,
    TABLE = 34,
    TABLE_ROW = 35,
    TABLE_HEADING = 36,
    TABLE_DATA = 37,
    TABLE_HEADER = 38,
    TABLE_FOOTER = 39,
    TABLE_BODY = 40,
    RUBY = 41,
    RUBY_BASE_TEXT = 42,
    RUBY_ANNOT_TEXT = 43,
    RUBY_PUNCTUATION = 44,
    WARICHU = 45,
    WARICHU_TEXT = 46,
    WARICHU_PUNCTUATION = 47,
    FIGURE = 48,
    FORMULA = 49,
    FORM = 50,
}

export namespace StructureFormRole {
    export const $gtype: GObject.GType<StructureFormRole>;
}

export enum StructureFormRole {
    UNDEFINED = 0,
    RADIO_BUTTON = 1,
    PUSH_BUTTON = 2,
    TEXT_VALUE = 3,
    CHECKBOX = 4,
}

export namespace StructureFormState {
    export const $gtype: GObject.GType<StructureFormState>;
}

export enum StructureFormState {
    ON = 0,
    OFF = 1,
    NEUTRAL = 2,
}

export class StructureGlyphOrientation {
    static $gtype: GObject.GType<StructureGlyphOrientation>;

    constructor(copy: StructureGlyphOrientation);

    // Properties
    static AUTO: number;
    static "0": number;
    static "90": number;
    static "180": number;
    static "270": number;
}

export namespace StructureInlineAlign {
    export const $gtype: GObject.GType<StructureInlineAlign>;
}

export enum StructureInlineAlign {
    START = 0,
    CENTER = 1,
    END = 2,
}

export namespace StructureListNumbering {
    export const $gtype: GObject.GType<StructureListNumbering>;
}

export enum StructureListNumbering {
    NONE = 0,
    DISC = 1,
    CIRCLE = 2,
    SQUARE = 3,
    DECIMAL = 4,
    UPPER_ROMAN = 5,
    LOWER_ROMAN = 6,
    UPPER_ALPHA = 7,
    LOWER_ALPHA = 8,
}

export namespace StructurePlacement {
    export const $gtype: GObject.GType<StructurePlacement>;
}

export enum StructurePlacement {
    BLOCK = 0,
    INLINE = 1,
    BEFORE = 2,
    START = 3,
    END = 4,
}

export namespace StructureRubyAlign {
    export const $gtype: GObject.GType<StructureRubyAlign>;
}

export enum StructureRubyAlign {
    START = 0,
    CENTER = 1,
    END = 2,
    JUSTIFY = 3,
    DISTRIBUTE = 4,
}

export namespace StructureRubyPosition {
    export const $gtype: GObject.GType<StructureRubyPosition>;
}

export enum StructureRubyPosition {
    BEFORE = 0,
    AFTER = 1,
    WARICHU = 2,
    INLINE = 3,
}

export namespace StructureTableScope {
    export const $gtype: GObject.GType<StructureTableScope>;
}

export enum StructureTableScope {
    ROW = 0,
    COLUMN = 1,
    BOTH = 2,
}

export namespace StructureTextAlign {
    export const $gtype: GObject.GType<StructureTextAlign>;
}

export enum StructureTextAlign {
    START = 0,
    CENTER = 1,
    END = 2,
    JUSTIFY = 3,
}

export namespace StructureTextDecoration {
    export const $gtype: GObject.GType<StructureTextDecoration>;
}

export enum StructureTextDecoration {
    NONE = 0,
    UNDERLINE = 1,
    OVERLINE = 2,
    LINETHROUGH = 3,
}

export namespace StructureWritingMode {
    export const $gtype: GObject.GType<StructureWritingMode>;
}

export enum StructureWritingMode {
    LR_TB = 0,
    RL_TB = 1,
    TB_RL = 2,
}

export namespace AnnotFlag {
    export const $gtype: GObject.GType<AnnotFlag>;
}

export enum AnnotFlag {
    UNKNOWN = 0,
    INVISIBLE = 1,
    HIDDEN = 2,
    PRINT = 4,
    NO_ZOOM = 8,
    NO_ROTATE = 16,
    NO_VIEW = 32,
    READ_ONLY = 64,
    LOCKED = 128,
    TOGGLE_NO_VIEW = 256,
    LOCKED_CONTENTS = 512,
}

export namespace FindFlags {
    export const $gtype: GObject.GType<FindFlags>;
}

export enum FindFlags {
    DEFAULT = 0,
    CASE_SENSITIVE = 1,
    BACKWARDS = 2,
    WHOLE_WORDS_ONLY = 4,
    IGNORE_DIACRITICS = 8,
}

export namespace Permissions {
    export const $gtype: GObject.GType<Permissions>;
}

export enum Permissions {
    OK_TO_PRINT = 1,
    OK_TO_MODIFY = 2,
    OK_TO_COPY = 4,
    OK_TO_ADD_NOTES = 8,
    OK_TO_FILL_FORM = 16,
    OK_TO_EXTRACT_CONTENTS = 32,
    OK_TO_ASSEMBLE = 64,
    OK_TO_PRINT_HIGH_RESOLUTION = 128,
    FULL = 255,
}

export namespace PrintFlags {
    export const $gtype: GObject.GType<PrintFlags>;
}

export enum PrintFlags {
    DOCUMENT = 0,
    MARKUP_ANNOTS = 1,
    STAMP_ANNOTS_ONLY = 2,
    ALL = 1,
}

export namespace StructureGetTextFlags {
    export const $gtype: GObject.GType<StructureGetTextFlags>;
}

export enum StructureGetTextFlags {
    NONE = 0,
    RECURSIVE = 1,
}

export namespace ViewerPreferences {
    export const $gtype: GObject.GType<ViewerPreferences>;
}

export enum ViewerPreferences {
    UNSET = 0,
    HIDE_TOOLBAR = 1,
    HIDE_MENUBAR = 2,
    HIDE_WINDOWUI = 4,
    FIT_WINDOW = 8,
    CENTER_WINDOW = 16,
    DISPLAY_DOC_TITLE = 32,
    DIRECTION_RTL = 64,
}

export module Annot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Annot extends GObject.Object {
    static $gtype: GObject.GType<Annot>;

    constructor(properties?: Partial<Annot.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Annot.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_annot_type(): AnnotType;

    get_color(): Color;

    get_contents(): string;

    get_flags(): AnnotFlag;

    get_modified(): string;

    get_name(): string;

    get_page_index(): number;

    get_rectangle(): Rectangle;

    set_color(poppler_color?: Color | null): void;

    set_contents(contents: string): void;

    set_flags(flags: AnnotFlag): void;

    set_rectangle(poppler_rect: Rectangle): void;
}

export module AnnotCircle {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotCircle extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotCircle>;

    constructor(properties?: Partial<AnnotCircle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotCircle.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](doc: Document, rect: Rectangle): AnnotCircle;

    // Members

    get_interior_color(): Color;

    set_interior_color(poppler_color?: Color | null): void;
}

export module AnnotFileAttachment {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotFileAttachment extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotFileAttachment>;

    constructor(properties?: Partial<AnnotFileAttachment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotFileAttachment.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_attachment(): Attachment;

    get_name(): string;
}

export module AnnotFreeText {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotFreeText extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotFreeText>;

    constructor(properties?: Partial<AnnotFreeText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotFreeText.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_callout_line(): AnnotCalloutLine;

    get_quadding(): AnnotFreeTextQuadding;
}

export module AnnotLine {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotLine extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotLine>;

    constructor(properties?: Partial<AnnotLine.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotLine.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine;

    // Members

    set_vertices(start: Point, end: Point): void;
}

export module AnnotMarkup {
    export interface ConstructorProperties extends Annot.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotMarkup extends Annot {
    static $gtype: GObject.GType<AnnotMarkup>;

    constructor(properties?: Partial<AnnotMarkup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotMarkup.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_date(): GLib.Date;

    get_external_data(): AnnotExternalDataType;

    get_label(): string;

    get_opacity(): number;

    get_popup_is_open(): boolean;

    get_popup_rectangle(): [boolean, Rectangle];

    get_reply_to(): AnnotMarkupReplyType;

    get_subject(): string;

    has_popup(): boolean;

    set_label(label?: string | null): void;

    set_opacity(opacity: number): void;

    set_popup(popup_rect: Rectangle): void;

    set_popup_is_open(is_open: boolean): void;

    set_popup_rectangle(poppler_rect: Rectangle): void;
}

export module AnnotMovie {
    export interface ConstructorProperties extends Annot.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotMovie extends Annot {
    static $gtype: GObject.GType<AnnotMovie>;

    constructor(properties?: Partial<AnnotMovie.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotMovie.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_movie(): Movie;

    get_title(): string;
}

export module AnnotScreen {
    export interface ConstructorProperties extends Annot.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotScreen extends Annot {
    static $gtype: GObject.GType<AnnotScreen>;

    constructor(properties?: Partial<AnnotScreen.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotScreen.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_action(): Action;
}

export module AnnotSquare {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotSquare extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotSquare>;

    constructor(properties?: Partial<AnnotSquare.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotSquare.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](doc: Document, rect: Rectangle): AnnotSquare;

    // Members

    get_interior_color(): Color;

    set_interior_color(poppler_color?: Color | null): void;
}

export module AnnotText {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotText extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotText>;

    constructor(properties?: Partial<AnnotText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotText.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](doc: Document, rect: Rectangle): AnnotText;

    // Members

    get_icon(): string;

    get_is_open(): boolean;

    get_state(): AnnotTextState;

    set_icon(icon: string): void;

    set_is_open(is_open: boolean): void;
}

export module AnnotTextMarkup {
    export interface ConstructorProperties extends AnnotMarkup.ConstructorProperties {
        [key: string]: any;
    }
}

export class AnnotTextMarkup extends AnnotMarkup {
    static $gtype: GObject.GType<AnnotTextMarkup>;

    constructor(properties?: Partial<AnnotTextMarkup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AnnotTextMarkup.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

    static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

    static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

    static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

    // Members

    get_quadrilaterals(): Quadrilateral[];

    set_quadrilaterals(quadrilaterals: Quadrilateral[]): void;
}

export module Attachment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Attachment extends GObject.Object {
    static $gtype: GObject.GType<Attachment>;

    constructor(properties?: Partial<Attachment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Attachment.ConstructorProperties>, ...args: any[]): void;

    // Fields
    name: string;
    description: string;
    size: number;
    mtime: GLib.Time;
    ctime: GLib.Time;
    checksum: GLib.String;

    // Members

    get_checksum(): GLib.String;

    get_ctime(): GLib.DateTime | null;

    get_description(): string;

    get_mtime(): GLib.DateTime | null;

    get_name(): string;

    get_size(): number;

    save(filename: string): boolean;

    save_to_callback(save_func: AttachmentSaveFunc): boolean;
}

export module Document {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        author: string;
        creation_date: number;
        creationDate: number;
        creation_datetime: GLib.DateTime;
        creationDatetime: GLib.DateTime;
        creator: string;
        format: string;
        format_major: number;
        formatMajor: number;
        format_minor: number;
        formatMinor: number;
        keywords: string;
        linearized: boolean;
        metadata: string;
        mod_date: number;
        modDate: number;
        mod_datetime: GLib.DateTime;
        modDatetime: GLib.DateTime;
        page_layout: PageLayout;
        pageLayout: PageLayout;
        page_mode: PageMode;
        pageMode: PageMode;
        permissions: Permissions;
        print_duplex: PrintDuplex;
        printDuplex: PrintDuplex;
        print_n_copies: number;
        printNCopies: number;
        print_scaling: PrintScaling;
        printScaling: PrintScaling;
        producer: string;
        subject: string;
        subtype: PDFSubtype;
        subtype_conformance: PDFConformance;
        subtypeConformance: PDFConformance;
        subtype_part: PDFPart;
        subtypePart: PDFPart;
        subtype_string: string;
        subtypeString: string;
        title: string;
        viewer_preferences: ViewerPreferences;
        viewerPreferences: ViewerPreferences;
    }
}

export class Document extends GObject.Object {
    static $gtype: GObject.GType<Document>;

    constructor(properties?: Partial<Document.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Document.ConstructorProperties>, ...args: any[]): void;

    // Properties
    author: string;
    creation_date: number;
    creationDate: number;
    creation_datetime: GLib.DateTime;
    creationDatetime: GLib.DateTime;
    creator: string;
    format: string;
    format_major: number;
    formatMajor: number;
    format_minor: number;
    formatMinor: number;
    keywords: string;
    linearized: boolean;
    metadata: string;
    mod_date: number;
    modDate: number;
    mod_datetime: GLib.DateTime;
    modDatetime: GLib.DateTime;
    page_layout: PageLayout;
    pageLayout: PageLayout;
    page_mode: PageMode;
    pageMode: PageMode;
    permissions: Permissions;
    print_duplex: PrintDuplex;
    printDuplex: PrintDuplex;
    print_n_copies: number;
    printNCopies: number;
    print_scaling: PrintScaling;
    printScaling: PrintScaling;
    producer: string;
    subject: string;
    subtype: PDFSubtype;
    subtype_conformance: PDFConformance;
    subtypeConformance: PDFConformance;
    subtype_part: PDFPart;
    subtypePart: PDFPart;
    subtype_string: string;
    subtypeString: string;
    title: string;
    viewer_preferences: ViewerPreferences;
    viewerPreferences: ViewerPreferences;

    // Constructors

    static new_from_bytes(bytes: GLib.Bytes | Uint8Array, password?: string | null): Document;

    static new_from_data(data: Uint8Array | string, password?: string | null): Document;

    static new_from_file(uri: string, password?: string | null): Document;

    static new_from_gfile(file: Gio.File, password?: string | null, cancellable?: Gio.Cancellable | null): Document;

    static new_from_stream(
        stream: Gio.InputStream,
        length: number,
        password?: string | null,
        cancellable?: Gio.Cancellable | null
    ): Document;

    // Members

    find_dest(link_name: string): Dest;

    get_attachments(): Attachment[];

    get_author(): string;

    get_creation_date(): number;

    get_creation_date_time(): GLib.DateTime | null;

    get_creator(): string;

    get_form_field(id: number): FormField;

    get_id(): [boolean, string | null, string | null];

    get_keywords(): string;

    get_metadata(): string;

    get_modification_date(): number;

    get_modification_date_time(): GLib.DateTime | null;

    get_n_attachments(): number;

    get_n_pages(): number;

    get_page(index: number): Page;

    get_page_by_label(label: string): Page;

    get_page_layout(): PageLayout;

    get_page_mode(): PageMode;

    get_pdf_conformance(): PDFConformance;

    get_pdf_part(): PDFPart;

    get_pdf_subtype(): PDFSubtype;

    get_pdf_subtype_string(): string | null;

    get_pdf_version(): [number | null, number | null];

    get_pdf_version_string(): string;

    get_permissions(): Permissions;

    get_print_duplex(): PrintDuplex;

    get_print_n_copies(): number;

    get_print_page_ranges(): PageRange[];

    get_print_scaling(): PrintScaling;

    get_producer(): string;

    get_subject(): string;

    get_title(): string;

    has_attachments(): boolean;

    has_javascript(): boolean;

    is_linearized(): boolean;

    save(uri: string): boolean;

    save_a_copy(uri: string): boolean;

    set_author(author: string): void;

    set_creation_date(creation_date: number): void;

    set_creation_date_time(creation_datetime?: GLib.DateTime | null): void;

    set_creator(creator: string): void;

    set_keywords(keywords: string): void;

    set_modification_date(modification_date: number): void;

    set_modification_date_time(modification_datetime?: GLib.DateTime | null): void;

    set_producer(producer: string): void;

    set_subject(subject: string): void;

    set_title(title: string): void;
}

export module FontInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FontInfo extends GObject.Object {
    static $gtype: GObject.GType<FontInfo>;

    constructor(properties?: Partial<FontInfo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FontInfo.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](document: Document): FontInfo;

    // Members

    free(): void;

    scan(n_pages: number): [boolean, FontsIter];
}

export module FormField {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FormField extends GObject.Object {
    static $gtype: GObject.GType<FormField>;

    constructor(properties?: Partial<FormField.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FormField.ConstructorProperties>, ...args: any[]): void;

    // Members

    button_get_button_type(): FormButtonType;

    button_get_state(): boolean;

    button_set_state(state: boolean): void;

    choice_can_select_multiple(): boolean;

    choice_commit_on_change(): boolean;

    choice_do_spell_check(): boolean;

    choice_get_choice_type(): FormChoiceType;

    choice_get_item(index: number): string;

    choice_get_n_items(): number;

    choice_get_text(): string;

    choice_is_editable(): boolean;

    choice_is_item_selected(index: number): boolean;

    choice_select_item(index: number): void;

    choice_set_text(text: string): void;

    choice_toggle_item(index: number): void;

    choice_unselect_all(): void;

    get_action(): Action;

    get_additional_action(type: AdditionalActionType): Action;

    get_alternate_ui_name(): string;

    get_field_type(): FormFieldType;

    get_font_size(): number;

    get_id(): number;

    get_mapping_name(): string;

    get_name(): string;

    get_partial_name(): string;

    is_read_only(): boolean;

    text_do_scroll(): boolean;

    text_do_spell_check(): boolean;

    text_get_max_len(): number;

    text_get_text(): string;

    text_get_text_type(): FormTextType;

    text_is_password(): boolean;

    text_is_rich_text(): boolean;

    text_set_text(text: string): void;
}

export module Layer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Layer extends GObject.Object {
    static $gtype: GObject.GType<Layer>;

    constructor(properties?: Partial<Layer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Layer.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_radio_button_group_id(): number;

    get_title(): string;

    hide(): void;

    is_parent(): boolean;

    is_visible(): boolean;

    show(): void;
}

export module Media {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Media extends GObject.Object {
    static $gtype: GObject.GType<Media>;

    constructor(properties?: Partial<Media.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Media.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_filename(): string;

    get_mime_type(): string;

    is_embedded(): boolean;

    save(filename: string): boolean;

    save_to_callback(save_func: MediaSaveFunc): boolean;
}

export module Movie {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Movie extends GObject.Object {
    static $gtype: GObject.GType<Movie>;

    constructor(properties?: Partial<Movie.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Movie.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_aspect(width: number, height: number): void;

    get_duration(): number;

    get_filename(): string;

    get_play_mode(): MoviePlayMode;

    get_rate(): number;

    get_rotation_angle(): number;

    get_start(): number;

    get_volume(): number;

    is_synchronous(): boolean;

    need_poster(): boolean;

    show_controls(): boolean;
}

export module PSFile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PSFile extends GObject.Object {
    static $gtype: GObject.GType<PSFile>;

    constructor(properties?: Partial<PSFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PSFile.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](document: Document, filename: string, first_page: number, n_pages: number): PSFile;

    // Members

    free(): void;

    set_duplex(duplex: boolean): void;

    set_paper_size(width: number, height: number): void;
}

export module Page {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        label: string;
    }
}

export class Page extends GObject.Object {
    static $gtype: GObject.GType<Page>;

    constructor(properties?: Partial<Page.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Page.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;

    // Members

    add_annot(annot: Annot): void;

    find_text(text: string): Rectangle[];

    find_text_with_options(text: string, options: FindFlags): Rectangle[];

    get_annot_mapping(): AnnotMapping[];

    get_bounding_box(rect: Rectangle): boolean;

    get_crop_box(): Rectangle;

    get_duration(): number;

    get_form_field_mapping(): FormFieldMapping[];

    get_image(image_id: number): cairo.Surface;

    get_image_mapping(): ImageMapping[];

    get_index(): number;

    get_label(): string;

    get_link_mapping(): LinkMapping[];

    get_selected_region(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region;

    get_selected_text(style: SelectionStyle, selection: Rectangle): string;

    get_selection_region(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[];

    get_size(): [number | null, number | null];

    get_text(): string;

    get_text_attributes(): TextAttributes[];

    get_text_attributes_for_area(area: Rectangle): TextAttributes[];

    get_text_for_area(area: Rectangle): string;

    get_text_layout(): [boolean, Rectangle[]];

    get_text_layout_for_area(area: Rectangle): [boolean, Rectangle[]];

    get_thumbnail(): cairo.Surface;

    get_thumbnail_size(): [boolean, number, number];

    get_transition(): PageTransition;

    remove_annot(annot: Annot): void;

    render(cairo: cairo.Context): void;

    render_for_printing(cairo: cairo.Context): void;

    render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags): void;

    render_selection(
        cairo: cairo.Context,
        selection: Rectangle,
        old_selection: Rectangle,
        style: SelectionStyle,
        glyph_color: Color,
        background_color: Color
    ): void;

    render_to_ps(ps_file: PSFile): void;

    static free_annot_mapping(list: AnnotMapping[]): void;

    static free_form_field_mapping(list: FormFieldMapping[]): void;

    static free_image_mapping(list: ImageMapping[]): void;

    static free_link_mapping(list: LinkMapping[]): void;

    static free_text_attributes(list: TextAttributes[]): void;

    static selection_region_free(region: Rectangle[]): void;
}

export module StructureElement {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class StructureElement extends GObject.Object {
    static $gtype: GObject.GType<StructureElement>;

    constructor(properties?: Partial<StructureElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StructureElement.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_abbreviation(): string;

    get_actual_text(): string;

    get_alt_text(): string;

    get_background_color(): [boolean, Color];

    get_baseline_shift(): number;

    get_block_align(): StructureBlockAlign;

    get_border_color(): [boolean, Color[]];

    get_border_style(): StructureBorderStyle[];

    get_border_thickness(): [boolean, number[]];

    get_bounding_box(): [boolean, Rectangle];

    get_color(): [boolean, Color];

    get_column_count(): number;

    get_column_gaps(): number[];

    get_column_widths(): number[];

    get_end_indent(): number;

    get_form_description(): string;

    get_form_role(): StructureFormRole;

    get_form_state(): StructureFormState;

    get_glyph_orientation(): StructureGlyphOrientation;

    get_height(): number;

    get_id(): string;

    get_inline_align(): StructureInlineAlign;

    get_kind(): StructureElementKind;

    get_language(): string;

    get_line_height(): number;

    get_list_numbering(): StructureListNumbering;

    get_padding(): number[];

    get_page(): number;

    get_placement(): StructurePlacement;

    get_ruby_align(): StructureRubyAlign;

    get_ruby_position(): StructureRubyPosition;

    get_space_after(): number;

    get_space_before(): number;

    get_start_indent(): number;

    get_table_border_style(): StructureBorderStyle[];

    get_table_column_span(): number;

    get_table_headers(): string[];

    get_table_padding(): number[];

    get_table_row_span(): number;

    get_table_scope(): StructureTableScope;

    get_table_summary(): string;

    get_text(flags: StructureGetTextFlags): string;

    get_text_align(): StructureTextAlign;

    get_text_decoration_color(): [boolean, Color];

    get_text_decoration_thickness(): number;

    get_text_decoration_type(): StructureTextDecoration;

    get_text_indent(): number;

    get_text_spans(): TextSpan[];

    get_title(): string;

    get_width(): number;

    get_writing_mode(): StructureWritingMode;

    is_block(): boolean;

    is_content(): boolean;

    is_grouping(): boolean;

    is_inline(): boolean;
}

export class ActionAny {
    static $gtype: GObject.GType<ActionAny>;

    constructor(copy: ActionAny);

    // Fields
    type: ActionType;
    title: string;
}

export class ActionGotoDest {
    static $gtype: GObject.GType<ActionGotoDest>;

    constructor(copy: ActionGotoDest);

    // Fields
    type: ActionType;
    title: string;
    dest: Dest;
}

export class ActionGotoRemote {
    static $gtype: GObject.GType<ActionGotoRemote>;

    constructor(copy: ActionGotoRemote);

    // Fields
    type: ActionType;
    title: string;
    file_name: string;
    dest: Dest;
}

export class ActionJavascript {
    static $gtype: GObject.GType<ActionJavascript>;

    constructor(copy: ActionJavascript);

    // Fields
    type: ActionType;
    title: string;
    script: string;
}

export class ActionLaunch {
    static $gtype: GObject.GType<ActionLaunch>;

    constructor(copy: ActionLaunch);

    // Fields
    type: ActionType;
    title: string;
    file_name: string;
    params: string;
}

export class ActionLayer {
    static $gtype: GObject.GType<ActionLayer>;

    constructor(copy: ActionLayer);

    // Fields
    action: ActionLayerAction;
    layers: any[];
}

export class ActionMovie {
    static $gtype: GObject.GType<ActionMovie>;

    constructor(copy: ActionMovie);

    // Fields
    type: ActionType;
    title: string;
    operation: ActionMovieOperation;
    movie: Movie;
}

export class ActionNamed {
    static $gtype: GObject.GType<ActionNamed>;

    constructor(copy: ActionNamed);

    // Fields
    type: ActionType;
    title: string;
    named_dest: string;
}

export class ActionOCGState {
    static $gtype: GObject.GType<ActionOCGState>;

    constructor(copy: ActionOCGState);

    // Fields
    type: ActionType;
    title: string;
    state_list: any[];
}

export class ActionRendition {
    static $gtype: GObject.GType<ActionRendition>;

    constructor(copy: ActionRendition);

    // Fields
    type: ActionType;
    title: string;
    op: number;
    media: Media;
}

export class ActionResetForm {
    static $gtype: GObject.GType<ActionResetForm>;

    constructor(copy: ActionResetForm);

    // Fields
    type: ActionType;
    title: string;
    fields: any[];
    exclude: boolean;
}

export class ActionUri {
    static $gtype: GObject.GType<ActionUri>;

    constructor(copy: ActionUri);

    // Fields
    type: ActionType;
    title: string;
    uri: string;
}

export class AnnotCalloutLine {
    static $gtype: GObject.GType<AnnotCalloutLine>;

    constructor();
    constructor(
        properties?: Partial<{
            multiline?: boolean;
            x1?: number;
            y1?: number;
            x2?: number;
            y2?: number;
            x3?: number;
            y3?: number;
        }>
    );
    constructor(copy: AnnotCalloutLine);

    // Fields
    multiline: boolean;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;

    // Constructors
    static ["new"](): AnnotCalloutLine;

    // Members
    copy(): AnnotCalloutLine;

    free(): void;
}

export class AnnotMapping {
    static $gtype: GObject.GType<AnnotMapping>;

    constructor();
    constructor(copy: AnnotMapping);

    // Fields
    area: Rectangle;
    annot: Annot;

    // Constructors
    static ["new"](): AnnotMapping;

    // Members
    copy(): AnnotMapping;

    free(): void;
}

export class Color {
    static $gtype: GObject.GType<Color>;

    constructor();
    constructor(
        properties?: Partial<{
            red?: number;
            green?: number;
            blue?: number;
        }>
    );
    constructor(copy: Color);

    // Fields
    red: number;
    green: number;
    blue: number;

    // Constructors
    static ["new"](): Color;

    // Members
    copy(): Color;

    free(): void;
}

export class Dest {
    static $gtype: GObject.GType<Dest>;

    constructor(copy: Dest);

    // Fields
    type: DestType;
    page_num: number;
    left: number;
    bottom: number;
    right: number;
    top: number;
    zoom: number;
    named_dest: string;
    change_left: number;
    change_top: number;
    change_zoom: number;

    // Members
    copy(): Dest;

    free(): void;
}

export class FontsIter {
    static $gtype: GObject.GType<FontsIter>;

    constructor(copy: FontsIter);

    // Members
    copy(): FontsIter;

    free(): void;

    get_encoding(): string;

    get_file_name(): string;

    get_font_type(): FontType;

    get_full_name(): string;

    get_name(): string;

    get_substitute_name(): string;

    is_embedded(): boolean;

    is_subset(): boolean;

    next(): boolean;
}

export class FormFieldMapping {
    static $gtype: GObject.GType<FormFieldMapping>;

    constructor();
    constructor(copy: FormFieldMapping);

    // Fields
    area: Rectangle;
    field: FormField;

    // Constructors
    static ["new"](): FormFieldMapping;

    // Members
    copy(): FormFieldMapping;

    free(): void;
}

export class ImageMapping {
    static $gtype: GObject.GType<ImageMapping>;

    constructor();
    constructor(
        properties?: Partial<{
            area?: Rectangle;
            image_id?: number;
        }>
    );
    constructor(copy: ImageMapping);

    // Fields
    area: Rectangle;
    image_id: number;

    // Constructors
    static ["new"](): ImageMapping;

    // Members
    copy(): ImageMapping;

    free(): void;
}

export class IndexIter {
    static $gtype: GObject.GType<IndexIter>;

    constructor(document: Document);
    constructor(copy: IndexIter);

    // Constructors
    static ["new"](document: Document): IndexIter;

    // Members
    copy(): IndexIter;

    free(): void;

    get_action(): Action;

    get_child(): IndexIter;

    is_open(): boolean;

    next(): boolean;
}

export class LayersIter {
    static $gtype: GObject.GType<LayersIter>;

    constructor(document: Document);
    constructor(copy: LayersIter);

    // Constructors
    static ["new"](document: Document): LayersIter;

    // Members
    copy(): LayersIter;

    free(): void;

    get_child(): LayersIter;

    get_layer(): Layer;

    get_title(): string;

    next(): boolean;
}

export class LinkMapping {
    static $gtype: GObject.GType<LinkMapping>;

    constructor();
    constructor(copy: LinkMapping);

    // Fields
    area: Rectangle;
    action: Action;

    // Constructors
    static ["new"](): LinkMapping;

    // Members
    copy(): LinkMapping;

    free(): void;
}

export class PageRange {
    static $gtype: GObject.GType<PageRange>;

    constructor(
        properties?: Partial<{
            start_page?: number;
            end_page?: number;
        }>
    );
    constructor(copy: PageRange);

    // Fields
    start_page: number;
    end_page: number;
}

export class PageTransition {
    static $gtype: GObject.GType<PageTransition>;

    constructor();
    constructor(copy: PageTransition);

    // Fields
    type: PageTransitionType;
    alignment: PageTransitionAlignment;
    direction: PageTransitionDirection;
    duration: number;
    angle: number;
    scale: number;
    rectangular: boolean;
    duration_real: number;

    // Constructors
    static ["new"](): PageTransition;

    // Members
    copy(): PageTransition;

    free(): void;
}

export class Point {
    static $gtype: GObject.GType<Point>;

    constructor();
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

    // Constructors
    static ["new"](): Point;

    // Members
    copy(): Point;

    free(): void;
}

export class Quadrilateral {
    static $gtype: GObject.GType<Quadrilateral>;

    constructor();
    constructor(
        properties?: Partial<{
            p1?: Point;
            p2?: Point;
            p3?: Point;
            p4?: Point;
        }>
    );
    constructor(copy: Quadrilateral);

    // Fields
    p1: Point;
    p2: Point;
    p3: Point;
    p4: Point;

    // Constructors
    static ["new"](): Quadrilateral;

    // Members
    copy(): Quadrilateral;

    free(): void;
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
    static ["new"](): Rectangle;

    // Members
    copy(): Rectangle;

    free(): void;
}

export class StructureElementIter {
    static $gtype: GObject.GType<StructureElementIter>;

    constructor(poppler_document: Document);
    constructor(copy: StructureElementIter);

    // Constructors
    static ["new"](poppler_document: Document): StructureElementIter;

    // Members
    copy(): StructureElementIter;

    free(): void;

    get_child(): StructureElementIter;

    get_element(): StructureElement;

    next(): boolean;
}

export class TextAttributes {
    static $gtype: GObject.GType<TextAttributes>;

    constructor();
    constructor(
        properties?: Partial<{
            font_name?: string;
            font_size?: number;
            is_underlined?: boolean;
            color?: Color;
            start_index?: number;
            end_index?: number;
        }>
    );
    constructor(copy: TextAttributes);

    // Fields
    font_name: string;
    font_size: number;
    is_underlined: boolean;
    color: Color;
    start_index: number;
    end_index: number;

    // Constructors
    static ["new"](): TextAttributes;

    // Members
    copy(): TextAttributes;

    free(): void;
}

export class TextSpan {
    static $gtype: GObject.GType<TextSpan>;

    constructor(copy: TextSpan);

    // Members
    copy(): TextSpan;

    free(): void;

    get_color(): Color;

    get_font_name(): string;

    get_text(): string;

    is_bold_font(): boolean;

    is_fixed_width_font(): boolean;

    is_serif_font(): boolean;
}

export class Action {
    static $gtype: GObject.GType<Action>;

    constructor(copy: Action);

    // Fields
    type: ActionType;
    any: ActionAny;
    goto_dest: ActionGotoDest;
    goto_remote: ActionGotoRemote;
    launch: ActionLaunch;
    uri: ActionUri;
    named: ActionNamed;
    movie: ActionMovie;
    rendition: ActionRendition;
    ocg_state: ActionOCGState;
    javascript: ActionJavascript;
    reset_form: ActionResetForm;

    // Members
    copy(): Action;

    free(): void;
}
