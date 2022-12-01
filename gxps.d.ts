/**
 * GXPS 0.1
 *
 * Generated from 0.3.1
 */

import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as cairo from './cairo';

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_STRING: string;

export function error_quark(): GLib.Quark;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static SOURCE_NOT_FOUND: number;
    static FONT: number;
    static IMAGE: number;
}

export namespace FileError {
    export const $gtype: GObject.GType<FileError>;
}

export enum FileError {
    FILE_ERROR_INVALID = 0,
}

export namespace PageError {
    export const $gtype: GObject.GType<PageError>;
}

export enum PageError {
    INVALID = 0,
    RENDER = 1,
    INVALID_ANCHOR = 2,
}

export namespace CoreProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        source: string;
    }
}

export class CoreProperties extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<CoreProperties>;

    constructor(properties?: Partial<CoreProperties.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CoreProperties.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: string;

    // Members

    get_category(): string;

    get_content_status(): string;

    get_content_type(): string;

    get_created(): number;

    get_creator(): string;

    get_description(): string;

    get_identifier(): string;

    get_keywords(): string;

    get_language(): string;

    get_last_modified_by(): string;

    get_last_printed(): number;

    get_modified(): number;

    get_revision(): string;

    get_subject(): string;

    get_title(): string;

    get_version(): string;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Document {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        source: string;
    }
}

export class Document extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Document>;

    constructor(properties?: Partial<Document.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Document.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: string;

    // Members

    get_n_pages(): number;

    get_page(n_page: number): Page;

    get_page_for_anchor(anchor: string): number;

    get_page_size(n_page: number): [boolean, number | null, number | null];

    get_structure(): DocumentStructure;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DocumentStructure {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        source: string;
    }
}

export class DocumentStructure extends GObject.Object {
    static $gtype: GObject.GType<DocumentStructure>;

    constructor(properties?: Partial<DocumentStructure.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentStructure.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: string;

    // Members

    has_outline(): boolean;

    static outline_iter_init(iter: OutlineIter, structure: DocumentStructure): boolean;
}

export namespace File {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        file: Gio.File;
    }
}

export class File extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<File>;

    constructor(properties?: Partial<File.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<File.ConstructorProperties>, ...args: any[]): void;

    // Properties
    file: Gio.File;

    // Constructors

    static ['new'](filename: Gio.File): File;

    // Members

    get_core_properties(): CoreProperties;

    get_document(n_doc: number): Document;

    get_document_for_link_target(target: LinkTarget): number;

    get_n_documents(): number;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Page {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        source: string;
    }
}

export class Page extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Page>;

    constructor(properties?: Partial<Page.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Page.ConstructorProperties>, ...args: any[]): void;

    // Properties
    source: string;

    // Members

    get_anchor_destination(anchor: string): [boolean, cairo.Rectangle];

    get_links(): Link[];

    get_size(): [number | null, number | null];

    render(cr: cairo.Context): boolean;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export class CorePropertiesPrivate {
    static $gtype: GObject.GType<CorePropertiesPrivate>;

    constructor(copy: CorePropertiesPrivate);
}

export class DocumentPrivate {
    static $gtype: GObject.GType<DocumentPrivate>;

    constructor(copy: DocumentPrivate);
}

export class DocumentStructurePrivate {
    static $gtype: GObject.GType<DocumentStructurePrivate>;

    constructor(copy: DocumentStructurePrivate);
}

export class FilePrivate {
    static $gtype: GObject.GType<FilePrivate>;

    constructor(copy: FilePrivate);
}

export class Link {
    static $gtype: GObject.GType<Link>;

    constructor(copy: Link);

    // Members
    copy(): Link;

    free(): void;

    get_area(): cairo.Rectangle;

    get_target(): LinkTarget;
}

export class LinkTarget {
    static $gtype: GObject.GType<LinkTarget>;

    constructor(copy: LinkTarget);

    // Members
    copy(): LinkTarget;

    free(): void;

    get_anchor(): string;

    get_uri(): string;

    is_internal(): boolean;
}

export class OutlineIter {
    static $gtype: GObject.GType<OutlineIter>;

    constructor(
        properties?: Partial<{
            dummy1?: any;
            dummy2?: any;
        }>
    );

    constructor(copy: OutlineIter);

    // Fields
    dummy1: any;
    dummy2: any;

    // Members
    children(parent: OutlineIter): boolean;

    get_description(): string;

    get_target(): LinkTarget;

    next(): boolean;
}

export class PagePrivate {
    static $gtype: GObject.GType<PagePrivate>;

    constructor(copy: PagePrivate);
}
