/**
 * Gsf 1
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from "./gobject";
import * as Gio from "./gio";
import * as libxml2 from "./libxml2";
import * as GLib from "./glib";

export const META_NAME_BYTE_COUNT: string;
export const META_NAME_CASE_SENSITIVE: string;
export const META_NAME_CATEGORY: string;
export const META_NAME_CELL_COUNT: string;
export const META_NAME_CHARACTER_COUNT: string;
export const META_NAME_CODEPAGE: string;
export const META_NAME_COMPANY: string;
export const META_NAME_CREATOR: string;
export const META_NAME_DATE_CREATED: string;
export const META_NAME_DATE_MODIFIED: string;
export const META_NAME_DESCRIPTION: string;
export const META_NAME_DICTIONARY: string;
export const META_NAME_DOCUMENT_PARTS: string;
export const META_NAME_EDITING_DURATION: string;
export const META_NAME_GENERATOR: string;
export const META_NAME_HEADING_PAIRS: string;
export const META_NAME_HIDDEN_SLIDE_COUNT: string;
export const META_NAME_IMAGE_COUNT: string;
export const META_NAME_INITIAL_CREATOR: string;
export const META_NAME_KEYWORD: string;
export const META_NAME_KEYWORDS: string;
export const META_NAME_LANGUAGE: string;
export const META_NAME_LAST_PRINTED: string;
export const META_NAME_LAST_SAVED_BY: string;
export const META_NAME_LINE_COUNT: string;
export const META_NAME_LINKS_DIRTY: string;
export const META_NAME_LOCALE_SYSTEM_DEFAULT: string;
export const META_NAME_MANAGER: string;
export const META_NAME_MM_CLIP_COUNT: string;
export const META_NAME_MSOLE_UNKNOWN_17: string;
export const META_NAME_MSOLE_UNKNOWN_18: string;
export const META_NAME_MSOLE_UNKNOWN_19: string;
export const META_NAME_MSOLE_UNKNOWN_20: string;
export const META_NAME_MSOLE_UNKNOWN_21: string;
export const META_NAME_MSOLE_UNKNOWN_22: string;
export const META_NAME_MSOLE_UNKNOWN_23: string;
export const META_NAME_NOTE_COUNT: string;
export const META_NAME_OBJECT_COUNT: string;
export const META_NAME_PAGE_COUNT: string;
export const META_NAME_PARAGRAPH_COUNT: string;
export const META_NAME_PRESENTATION_FORMAT: string;
export const META_NAME_PRINTED_BY: string;
export const META_NAME_PRINT_DATE: string;
export const META_NAME_REVISION_COUNT: string;
export const META_NAME_SCALE: string;
export const META_NAME_SECURITY: string;
export const META_NAME_SLIDE_COUNT: string;
export const META_NAME_SPREADSHEET_COUNT: string;
export const META_NAME_SUBJECT: string;
export const META_NAME_TABLE_COUNT: string;
export const META_NAME_TEMPLATE: string;
export const META_NAME_THUMBNAIL: string;
export const META_NAME_TITLE: string;
export const META_NAME_WORD_COUNT: string;

export function base64_decode_simple(data: Uint8Array | string, len: number): number;

export function base64_decode_step(
    _in: Uint8Array | string,
    len: number,
    out: Uint8Array | string,
    state: number,
    save: number
): [number, number, number];

export function base64_encode_close(
    _in: Uint8Array | string,
    break_lines: boolean,
    out: Uint8Array | string,
    state: number,
    save: number
): [number, number, number];

export function base64_encode_simple(data: Uint8Array | string, len: number): number;

export function base64_encode_step(
    _in: Uint8Array | string,
    len: number,
    break_lines: boolean,
    out: Uint8Array | string,
    state: number,
    save: number
): [number, number, number];

export function debug_flag(flag: string): boolean;

export function doc_meta_dump(meta: DocMetaData): void;

export function error_quark(): GLib.Quark;

export function extension_pointer(path: string): string;

export function filename_to_utf8(filename: string, quoted: boolean): string;

export function init(): void;

export function init_dynamic(module: GObject.TypeModule): void;

export function le_get_double(p?: any | null): number;

export function le_get_float(p?: any | null): number;

export function le_get_guint64(p?: any | null): number;

export function le_set_double(p: any | null, d: number): void;

export function le_set_float(p: any | null, f: number): void;

export function mem_dump(ptr: number, len: number): void;

export function msole_codepage_to_lid(codepage: number): number;

export function msole_iconv_win_codepage(): number;

export function msole_inflate(input: Input, offset: gsf_off_t): Uint8Array;

export function msole_language_for_lid(lid: number): string;

export function msole_lid_for_language(lang?: string | null): number;

export function msole_lid_to_codepage(lid: number): number;

export function msole_lid_to_codepage_str(lid: number): string;

export function odf_get_ns(): XMLInNS;

export function odf_get_version(): number;

export function odf_get_version_string(): string;

export function open_pkg_error_id(): number;

export function open_pkg_foreach_rel(opkg: Input, func: OpenPkgIter): void;

export function open_pkg_open_rel(opkg: Input, rel: OpenPkgRel): Input;

export function open_pkg_open_rel_by_id(opkg: Input, id: string): Input;

export function open_pkg_open_rel_by_type(opkg: Input, type: string): Input;

export function open_pkg_parse_rel_by_id(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error;

export function property_settings_find(name: string, params: GObject.Parameter[]): GObject.Parameter;

export function property_settings_free(params: GObject.Parameter[]): void;

export function shutdown(): void;

export function shutdown_dynamic(module: GObject.TypeModule): void;

export function value_get_docprop_array(value: any): GObject.Value[] | null;

export function value_get_docprop_varray(value: any): GObject.ValueArray;

export function value_get_docprop_vector(value: any): DocPropVector;

export function vba_inflate(input: Input, offset: gsf_off_t, size: number, add_null_terminator: boolean): number;

export function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number;

export function xml_gvalue_from_str(res: any, t: GObject.GType, str: string): boolean;

export function xml_probe(input: Input, func: XMLProbeFunc): boolean;

export type OpenPkgIter = (opkg: Input, rel: OpenPkgRel) => void;
export type XMLInExtDtor = (xin: XMLIn, old_state?: any | null) => void;
export type XMLInUnknownFunc = (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char) => boolean;
export type XMLProbeFunc = (
    name: libxml2.Char,
    prefix: libxml2.Char,
    URI: libxml2.Char,
    nb_namespaces: number,
    namespaces: libxml2.Char,
    nb_attributes: number,
    nb_defaulted: number,
    attributes: libxml2.Char
) => boolean;

export namespace ClipFormat {
    export const $gtype: GObject.GType<ClipFormat>;
}

export enum ClipFormat {
    WINDOWS_CLIPBOARD = -1,
    MACINTOSH_CLIPBOARD = -2,
    GUID = -3,
    NO_DATA = 0,
    CLIPBOARD_FORMAT_NAME = 1,
    UNKNOWN = 2,
}

export namespace ClipFormatWindows {
    export const $gtype: GObject.GType<ClipFormatWindows>;
}

export enum ClipFormatWindows {
    ERROR = -1,
    UNKNOWN = -2,
    METAFILE = 3,
    DIB = 8,
    ENHANCED_METAFILE = 14,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static OUT_OF_MEMORY: number;
    static INVALID_DATA: number;
}

export namespace OutputCsvQuotingMode {
    export const $gtype: GObject.GType<OutputCsvQuotingMode>;
}

export enum OutputCsvQuotingMode {
    NEVER = 0,
    AUTO = 1,
    ALWAYS = 2,
}

export namespace XMLContent {
    export const $gtype: GObject.GType<XMLContent>;
}

export enum XMLContent {
    NO_CONTENT = 0,
    CONTENT = 1,
    SHARED_CONTENT = 2,
    "2ND" = 3,
}

export namespace ZipCompressionMethod {
    export const $gtype: GObject.GType<ZipCompressionMethod>;
}

export enum ZipCompressionMethod {
    STORED = 0,
    SHRUNK = 1,
    REDUCEDX1 = 2,
    REDUCEDX2 = 3,
    REDUCEDX3 = 4,
    REDUCEDX4 = 5,
    IMPLODED = 6,
    TOKENIZED = 7,
    DEFLATED = 8,
    DEFLATED_BETTER = 9,
    IMPLODED_BETTER = 10,
}

export module Blob {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Blob extends GObject.Object {
    static $gtype: GObject.GType<Blob>;

    constructor(properties?: Partial<Blob.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Blob.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: BlobPrivate;

    // Constructors

    static ["new"](data_to_copy: Uint8Array | string): Blob;

    // Members

    get_size(): number;

    peek_data(): any | null;
}

export module ClipData {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClipData extends GObject.Object {
    static $gtype: GObject.GType<ClipData>;

    constructor(properties?: Partial<ClipData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClipData.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: ClipDataPrivate;

    // Constructors

    static ["new"](format: ClipFormat, data_blob: Blob): ClipData;

    // Members

    get_data_blob(): Blob;

    get_format(): ClipFormat;

    get_windows_clipboard_format(): ClipFormatWindows;

    peek_real_data(ret_size: number): any | null;
}

export module DocMetaData {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocMetaData extends GObject.Object {
    static $gtype: GObject.GType<DocMetaData>;

    constructor(properties?: Partial<DocMetaData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocMetaData.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): DocMetaData;

    // Members

    foreach(func: GLib.HFunc): void;

    insert(name: string, value: any): void;

    lookup(name: string): DocProp | null;

    odf_subtree(doc: XMLIn): void;

    read_from_msole(_in: Input): GLib.Error;

    read_from_odf(input: Input): GLib.Error;

    remove(name: string): void;

    size(): number;

    steal(name: string): DocProp | null;

    store(prop: DocProp): void;

    write_to_msole(out: Output, doc_not_component: boolean): boolean;

    write_to_odf(output: XMLOut): boolean;
}

export module DocPropVector {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocPropVector extends GObject.Object {
    static $gtype: GObject.GType<DocPropVector>;

    constructor(properties?: Partial<DocPropVector.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocPropVector.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): DocPropVector;

    // Members

    append(value: any): void;

    as_string(): string;
}

export module Infile {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Infile extends Input {
    static $gtype: GObject.GType<Infile>;

    constructor(properties?: Partial<Infile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Infile.ConstructorProperties>, ...args: any[]): void;

    // Members

    child_by_aname(names: string[]): Input;

    child_by_index(i: number): Input;

    child_by_name(name: string): Input;

    name_by_index(i: number): string | null;

    num_children(): number;

    vfunc_name_by_index(i: number): string | null;

    vfunc_num_children(): number;
}

export module InfileMSOle {
    export interface ConstructorProperties extends Infile.ConstructorProperties {
        [key: string]: any;
    }
}

export class InfileMSOle extends Infile {
    static $gtype: GObject.GType<InfileMSOle>;

    constructor(properties?: Partial<InfileMSOle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InfileMSOle.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](source: Input): InfileMSOle;

    // Members

    get_class_id(res: number): boolean;
}

export module InfileMSVBA {
    export interface ConstructorProperties extends Infile.ConstructorProperties {
        [key: string]: any;
    }
}

export class InfileMSVBA extends Infile {
    static $gtype: GObject.GType<InfileMSVBA>;

    constructor(properties?: Partial<InfileMSVBA.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InfileMSVBA.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](source: Infile): InfileMSVBA;

    // Members

    get_modules(): GLib.HashTable<string, any> | null;

    steal_modules(): GLib.HashTable<string, any> | null;
}

export module InfileStdio {
    export interface ConstructorProperties extends Infile.ConstructorProperties {
        [key: string]: any;
    }
}

export class InfileStdio extends Infile {
    static $gtype: GObject.GType<InfileStdio>;

    constructor(properties?: Partial<InfileStdio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InfileStdio.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](root: string): InfileStdio;
}

export module InfileTar {
    export interface ConstructorProperties extends Infile.ConstructorProperties {
        [key: string]: any;

        source: Input;
    }
}

export class InfileTar extends Infile {
    static $gtype: GObject.GType<InfileTar>;

    constructor(properties?: Partial<InfileTar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InfileTar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: Input;

    // Constructors

    static ["new"](source: Input): InfileTar;
}

export module InfileZip {
    export interface ConstructorProperties extends Infile.ConstructorProperties {
        [key: string]: any;

        compression_level: number;
        compressionLevel: number;
        internal_parent: InfileZip;
        internalParent: InfileZip;
        source: Input;
    }
}

export class InfileZip extends Infile {
    static $gtype: GObject.GType<InfileZip>;

    constructor(properties?: Partial<InfileZip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InfileZip.ConstructorProperties>, ...args: any[]): void;

    // Properties
    compression_level: number;
    compressionLevel: number;
    internal_parent: InfileZip;
    internalParent: InfileZip;
    source: Input;

    // Constructors

    static ["new"](source: Input): InfileZip;
}

export module Input {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        container: Infile;
        eof: boolean;
        modtime: GLib.DateTime;
        name: string;
        position: number;
        remaining: number;
        size: number;
    }
}

export abstract class Input extends GObject.Object {
    static $gtype: GObject.GType<Input>;

    constructor(properties?: Partial<Input.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Input.ConstructorProperties>, ...args: any[]): void;

    // Properties
    container: Infile;
    eof: boolean;
    modtime: GLib.DateTime;
    name: string;
    position: number;
    remaining: number;
    size: number;

    // Fields
    g_object: GObject.Object;
    cur_offset: gsf_off_t;

    // Constructors

    static mmap_new(filename: string): Input;

    // Members

    copy(output: Output): boolean;

    dump(dump_as_hex: boolean): void;

    dup(): Input | null;

    find_vba(): InfileMSVBA | null;

    get_modtime(): GLib.DateTime;

    read(num_bytes: number): Uint8Array;

    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;

    seek_emulate(pos: gsf_off_t): boolean;

    set_container(container?: Infile | null): boolean;

    set_modtime(modtime?: GLib.DateTime | null): boolean;

    set_modtime_from_stat(st?: any | null): boolean;

    set_name(name?: string | null): boolean;

    set_name_from_filename(filename: string): boolean;

    set_size(size: gsf_off_t): boolean;

    sibling(name: string): Input;

    tell(): gsf_off_t;

    uncompress(): Input;

    vfunc_Dup(): Input | null;

    vfunc_OpenSibling(name: string): Input;

    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;

    static error_id(): GLib.Quark;
}

export module InputGZip {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;

        raw: boolean;
        source: Input;
        uncompressed_size: number;
        uncompressedSize: number;
    }
}

export class InputGZip extends Input {
    static $gtype: GObject.GType<InputGZip>;

    constructor(properties?: Partial<InputGZip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputGZip.ConstructorProperties>, ...args: any[]): void;

    // Properties
    raw: boolean;
    source: Input;
    uncompressed_size: number;
    uncompressedSize: number;

    // Constructors

    static ["new"](source: Input): InputGZip;
}

export module InputGio {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;
    }
}

export class InputGio extends Input {
    static $gtype: GObject.GType<InputGio>;

    constructor(properties?: Partial<InputGio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputGio.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](file: Gio.File): InputGio;

    static new_for_path(path: string): InputGio;

    static new_for_uri(uri: string): InputGio;
}

export module InputHTTP {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;

        content_type: string;
        contentType: string;
        url: string;
    }
}

export class InputHTTP extends Input {
    static $gtype: GObject.GType<InputHTTP>;

    constructor(properties?: Partial<InputHTTP.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputHTTP.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content_type: string;
    contentType: string;
    url: string;

    // Constructors

    static ["new"](url: string): InputHTTP;

    // Members

    get_content_type(): string;

    get_url(): string;
}

export module InputMemory {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;
    }
}

export class InputMemory extends Input {
    static $gtype: GObject.GType<InputMemory>;

    constructor(properties?: Partial<InputMemory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputMemory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](buf: Uint8Array | string, needs_free: boolean): InputMemory;

    static new_clone(buf: Uint8Array | string): InputMemory;

    static new_from_bzip(source: Input): InputMemory;

    static new_from_iochannel(channel: GLib.IOChannel): InputMemory;
}

export module InputProxy {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;
    }
}

export class InputProxy extends Input {
    static $gtype: GObject.GType<InputProxy>;

    constructor(properties?: Partial<InputProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](source: Input): InputProxy;

    static new_section(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy;
}

export module InputStdio {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;
    }
}

export class InputStdio extends Input {
    static $gtype: GObject.GType<InputStdio>;

    constructor(properties?: Partial<InputStdio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputStdio.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](filename: string): InputStdio;

    static new_FILE(filename: string, file: any | null, keep_open: boolean): InputStdio;
}

export module InputTextline {
    export interface ConstructorProperties extends Input.ConstructorProperties {
        [key: string]: any;
    }
}

export class InputTextline extends Input {
    static $gtype: GObject.GType<InputTextline>;

    constructor(properties?: Partial<InputTextline.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<InputTextline.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](source: Input): InputTextline;

    // Members

    ascii_gets(): Uint8Array | null;

    utf8_gets(): Uint8Array | null;
}

export module ODFOut {
    export interface ConstructorProperties extends XMLOut.ConstructorProperties {
        [key: string]: any;

        odf_version: number;
        odfVersion: number;
    }
}

export class ODFOut extends XMLOut {
    static $gtype: GObject.GType<ODFOut>;

    constructor(properties?: Partial<ODFOut.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ODFOut.ConstructorProperties>, ...args: any[]): void;

    // Properties
    odf_version: number;
    odfVersion: number;

    // Fields
    base: XMLOut | any;
    priv: any;

    // Members

    get_version(): number;

    get_version_string(): string;
}

export module Outfile {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Outfile extends Output {
    static $gtype: GObject.GType<Outfile>;

    constructor(properties?: Partial<Outfile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Outfile.ConstructorProperties>, ...args: any[]): void;

    // Members

    new_child(name: string, is_dir: boolean): Output;

    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output;
}

export module OutfileMSOle {
    export interface ConstructorProperties extends Outfile.ConstructorProperties {
        [key: string]: any;

        big_block_size: number;
        bigBlockSize: number;
        sink: Output;
        small_block_size: number;
        smallBlockSize: number;
    }
}

export class OutfileMSOle extends Outfile {
    static $gtype: GObject.GType<OutfileMSOle>;

    constructor(properties?: Partial<OutfileMSOle.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutfileMSOle.ConstructorProperties>, ...args: any[]): void;

    // Properties
    big_block_size: number;
    bigBlockSize: number;
    sink: Output;
    small_block_size: number;
    smallBlockSize: number;

    // Constructors

    static ["new"](sink: Output): OutfileMSOle;

    static new_full(sink: Output, bb_size: number, sb_size: number): OutfileMSOle;

    // Members

    set_class_id(clsid: Uint8Array | string): boolean;
}

export module OutfileOpenPkg {
    export interface ConstructorProperties extends Outfile.ConstructorProperties {
        [key: string]: any;

        content_type: string;
        contentType: string;
        is_dir: boolean;
        isDir: boolean;
        sink: Outfile;
    }
}

export class OutfileOpenPkg extends Outfile {
    static $gtype: GObject.GType<OutfileOpenPkg>;

    constructor(properties?: Partial<OutfileOpenPkg.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutfileOpenPkg.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content_type: string;
    contentType: string;
    is_dir: boolean;
    isDir: boolean;
    sink: Outfile;

    // Constructors

    static ["new"](sink: Outfile): OutfileOpenPkg;

    // Members

    add_extern_rel(target: string, content_type: string): string;

    relate(parent: OutfileOpenPkg, type: string): string;

    set_content_type(content_type: string): void;

    set_sink(sink: Output): void;
}

export module OutfileStdio {
    export interface ConstructorProperties extends Outfile.ConstructorProperties {
        [key: string]: any;
    }
}

export class OutfileStdio extends Outfile {
    static $gtype: GObject.GType<OutfileStdio>;

    constructor(properties?: Partial<OutfileStdio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutfileStdio.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](root: string): OutfileStdio;
}

export module OutfileZip {
    export interface ConstructorProperties extends Outfile.ConstructorProperties {
        [key: string]: any;

        compression_level: number;
        compressionLevel: number;
        deflate_level: number;
        deflateLevel: number;
        entry_name: string;
        entryName: string;
        sink: Output;
        zip64: number;
    }
}

export class OutfileZip extends Outfile {
    static $gtype: GObject.GType<OutfileZip>;

    constructor(properties?: Partial<OutfileZip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutfileZip.ConstructorProperties>, ...args: any[]): void;

    // Properties
    compression_level: number;
    compressionLevel: number;
    deflate_level: number;
    deflateLevel: number;
    entry_name: string;
    entryName: string;
    sink: Output;
    zip64: number;

    // Constructors

    static ["new"](sink: Output): OutfileZip;

    // Members

    set_compression_method(method: ZipCompressionMethod): boolean;
}

export module Output {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        container: Outfile;
        is_closed: boolean;
        isClosed: boolean;
        modtime: GLib.DateTime;
        name: string;
        position: number;
        size: number;
    }
}

export abstract class Output extends GObject.Object {
    static $gtype: GObject.GType<Output>;

    constructor(properties?: Partial<Output.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Output.ConstructorProperties>, ...args: any[]): void;

    // Properties
    container: Outfile;
    is_closed: boolean;
    isClosed: boolean;
    modtime: GLib.DateTime;
    name: string;
    position: number;
    size: number;

    // Fields
    g_object: GObject.Object;
    cur_size: gsf_off_t;
    cur_offset: gsf_off_t;
    wrapped_by: GObject.Object;
    err: GLib.Error;
    printf_buf: string;
    printf_buf_size: number;

    // Members

    close(): boolean;

    error(): GLib.Error | null;

    get_modtime(): GLib.DateTime | null;

    puts(line: string): boolean;

    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;

    set_container(container?: Outfile | null): boolean;

    set_modtime(modtime?: GLib.DateTime | null): boolean;

    set_name(name?: string | null): boolean;

    set_name_from_filename(filename?: string | null): boolean;

    tell(): gsf_off_t;

    write(data: Uint8Array | string): boolean;

    vfunc_Close(): boolean;

    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;

    vfunc_Write(data: Uint8Array | string): boolean;

    static error_id(): GLib.Quark;

    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean;

    static wrap(wrapper: GObject.Object, wrapee: Output): boolean;
}

export module OutputBzip {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;
    }
}

export class OutputBzip extends Output {
    static $gtype: GObject.GType<OutputBzip>;

    constructor(properties?: Partial<OutputBzip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputBzip.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](sink: Output): OutputBzip;
}

export module OutputCsv {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;

        eol: string;
        quote: string;
        quoting_mode: OutputCsvQuotingMode;
        quotingMode: OutputCsvQuotingMode;
        quoting_on_whitespace: boolean;
        quotingOnWhitespace: boolean;
        quoting_triggers: string;
        quotingTriggers: string;
        separator: string;
        sink: Output;
    }
}

export class OutputCsv extends Output {
    static $gtype: GObject.GType<OutputCsv>;

    constructor(properties?: Partial<OutputCsv.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputCsv.ConstructorProperties>, ...args: any[]): void;

    // Properties
    eol: string;
    quote: string;
    quoting_mode: OutputCsvQuotingMode;
    quotingMode: OutputCsvQuotingMode;
    quoting_on_whitespace: boolean;
    quotingOnWhitespace: boolean;
    quoting_triggers: string;
    quotingTriggers: string;
    separator: string;
    sink: Output;

    // Fields
    output: Output;
    quote_len: number;
    eol_len: number;
    separator_len: number;
    fields_on_line: boolean;
    buf: GLib.String;

    // Members

    write_eol(): boolean;

    write_field(field: string, len: number): boolean;
}

export module OutputGZip {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;

        deflate_level: number;
        deflateLevel: number;
        raw: boolean;
        sink: Output;
    }
}

export class OutputGZip extends Output {
    static $gtype: GObject.GType<OutputGZip>;

    constructor(properties?: Partial<OutputGZip.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputGZip.ConstructorProperties>, ...args: any[]): void;

    // Properties
    deflate_level: number;
    deflateLevel: number;
    raw: boolean;
    sink: Output;

    // Constructors

    static ["new"](sink: Output): OutputGZip;
}

export module OutputGio {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;
    }
}

export class OutputGio extends Output {
    static $gtype: GObject.GType<OutputGio>;

    constructor(properties?: Partial<OutputGio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputGio.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](file: Gio.File): OutputGio;

    static new_for_path(path: string): OutputGio;

    static new_for_uri(uri: string): OutputGio;
}

export module OutputIOChannel {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;
    }
}

export class OutputIOChannel extends Output {
    static $gtype: GObject.GType<OutputIOChannel>;

    constructor(properties?: Partial<OutputIOChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputIOChannel.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](channel: GLib.IOChannel): OutputIOChannel;
}

export module OutputIconv {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;

        fallback: string;
        input_charset: string;
        inputCharset: string;
        output_charset: string;
        outputCharset: string;
        sink: Output;
    }
}

export class OutputIconv extends Output {
    static $gtype: GObject.GType<OutputIconv>;

    constructor(properties?: Partial<OutputIconv.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputIconv.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fallback: string;
    input_charset: string;
    inputCharset: string;
    output_charset: string;
    outputCharset: string;
    sink: Output;

    // Constructors

    static ["new"](sink: Output, dst: string, src: string): OutputIconv;
}

export module OutputMemory {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;
    }
}

export class OutputMemory extends Output {
    static $gtype: GObject.GType<OutputMemory>;

    constructor(properties?: Partial<OutputMemory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputMemory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): OutputMemory;

    // Members

    get_bytes(): Uint8Array | null;

    steal_bytes(): Uint8Array | null;
}

export module OutputStdio {
    export interface ConstructorProperties extends Output.ConstructorProperties {
        [key: string]: any;
    }
}

export class OutputStdio extends Output {
    static $gtype: GObject.GType<OutputStdio>;

    constructor(properties?: Partial<OutputStdio.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OutputStdio.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](filename: string): OutputStdio;
}

export module SharedMemory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SharedMemory extends GObject.Object {
    static $gtype: GObject.GType<SharedMemory>;

    constructor(properties?: Partial<SharedMemory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SharedMemory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    g_object: GObject.Object;
    buf: any;
    size: gsf_off_t;
    needs_free: boolean;
    needs_unmap: boolean;

    // Constructors

    static mmapped_new(buf: any | null, size: gsf_off_t): SharedMemory;

    static ["new"](buf: any | null, size: gsf_off_t, needs_free: boolean): SharedMemory;
}

export module StructuredBlob {
    export interface ConstructorProperties extends Infile.ConstructorProperties {
        [key: string]: any;
    }
}

export class StructuredBlob extends Infile {
    static $gtype: GObject.GType<StructuredBlob>;

    constructor(properties?: Partial<StructuredBlob.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StructuredBlob.ConstructorProperties>, ...args: any[]): void;

    // Members

    write(container: Outfile): boolean;

    static read(input: Input): StructuredBlob;
    static read(...args: never[]): never;
}

export module XMLOut {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        pretty_print: boolean;
        prettyPrint: boolean;
        sink: Output;
    }
}

export class XMLOut extends GObject.Object {
    static $gtype: GObject.GType<XMLOut>;

    constructor(properties?: Partial<XMLOut.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<XMLOut.ConstructorProperties>, ...args: any[]): void;

    // Properties
    pretty_print: boolean;
    prettyPrint: boolean;
    sink: Output;

    // Fields
    base: GObject.Object;
    output: Output;
    priv: any;

    // Constructors

    static ["new"](output: Output): XMLOut;

    // Members

    add_base64(id: string | null, data: Uint8Array | string): void;

    add_bool(id: string | null, val: boolean): void;

    add_color(id: string | null, r: number, g: number, b: number): void;

    add_cstr(id?: string | null, val_utf8?: string | null): void;

    add_cstr_unchecked(id?: string | null, val_utf8?: string | null): void;

    add_enum(id: string | null, etype: GObject.GType, val: number): void;

    add_float(id: string | null, val: number, precision: number): void;

    add_gvalue(id: string | null, val: any): void;

    add_int(id: string | null, val: number): void;

    add_uint(id: string | null, val: number): void;

    end_element(): string;

    get_output(): Output | null;

    get_pretty_print(): boolean;

    set_doc_type(type: string): void;

    set_pretty_print(pp: boolean): boolean;

    simple_element(id: string, content: string): void;

    simple_float_element(id: string, val: number, precision: number): void;

    simple_int_element(id: string, val: number): void;

    start_element(id: string): void;
}

export class BlobPrivate {
    static $gtype: GObject.GType<BlobPrivate>;

    constructor(copy: BlobPrivate);
}

export class ClipDataPrivate {
    static $gtype: GObject.GType<ClipDataPrivate>;

    constructor(copy: ClipDataPrivate);
}

export class DocProp {
    static $gtype: GObject.GType<DocProp>;

    constructor(name: string);
    constructor(copy: DocProp);

    // Constructors
    static ["new"](name: string): DocProp;

    // Members
    dump(): void;

    free(): void;

    get_link(): string | null;

    get_name(): string;

    get_val(): unknown;

    set_link(link?: string | null): void;

    set_val(val: any): void;

    swap_val(val: any): unknown;
}

export class MSOleSortingKey {
    static $gtype: GObject.GType<MSOleSortingKey>;

    constructor(name: string);
    constructor(copy: MSOleSortingKey);

    // Constructors
    static ["new"](name: string): MSOleSortingKey;

    // Members
    cmp(b: MSOleSortingKey): number;

    free(): void;
}

export class OpenPkgRel {
    static $gtype: GObject.GType<OpenPkgRel>;

    constructor(copy: OpenPkgRel);

    // Members
    get_target(): string;

    get_type(): string;

    is_extern(): boolean;
}

export class OpenPkgRels {
    static $gtype: GObject.GType<OpenPkgRels>;

    constructor(copy: OpenPkgRels);
}

export class Timestamp {
    static $gtype: GObject.GType<Timestamp>;

    constructor();
    constructor(
        properties?: Partial<{
            date?: GLib.Date;
            seconds?: number;
            time_zone?: GLib.String;
            timet?: number;
        }>
    );
    constructor(copy: Timestamp);

    // Fields
    date: GLib.Date;
    seconds: number;
    time_zone: GLib.String;
    timet: number;

    // Constructors
    static ["new"](): Timestamp;

    // Members
    as_string(): string;

    copy(): Timestamp;

    equal(b: Timestamp): boolean;

    free(): void;

    hash(): number;

    load_from_string(spec: string): number;

    set_time(t: number): void;

    to_value(value: any): void;
}

export class XMLBlob {
    static $gtype: GObject.GType<XMLBlob>;

    constructor(copy: XMLBlob);
}

export class XMLIn {
    static $gtype: GObject.GType<XMLIn>;

    constructor(copy: XMLIn);

    // Fields
    user_state: any;
    content: GLib.String;
    doc: XMLInDoc;
    node: XMLInNode;
    node_stack: any[];

    // Members
    check_ns(str: string, ns_id: number): string | null;

    get_input(): Input;

    namecmp(str: string, ns_id: number, name: string): boolean;

    push_state(doc: XMLInDoc, new_state: any | null, dtor: XMLInExtDtor, attrs: string[]): void;

    set_silent_unknowns(silent: boolean): void;
}

export class XMLInDoc {
    static $gtype: GObject.GType<XMLInDoc>;

    constructor(nodes: XMLInNode[], ns: XMLInNS[]);
    constructor(copy: XMLInDoc);

    // Constructors
    static ["new"](nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc;

    // Members
    add_nodes(nodes: XMLInNode[]): void;

    free(): void;

    parse(input: Input, user_state?: any | null): boolean;

    set_unknown_handler(handler: XMLInUnknownFunc): void;
}

export class XMLInNS {
    static $gtype: GObject.GType<XMLInNS>;

    constructor(
        properties?: Partial<{
            uri?: string;
            ns_id?: number;
        }>
    );
    constructor(copy: XMLInNS);

    // Fields
    uri: string;
    ns_id: number;
}

export class XMLInNode {
    static $gtype: GObject.GType<XMLInNode>;

    constructor(copy: XMLInNode);

    // Fields
    id: string;
    ns_id: number;
    name: string;
    parent_id: string;
    has_content: XMLContent;
    check_children_for_ns: number;
    share_children_with_parent: number;
}

export type gsf_off_t = number;
