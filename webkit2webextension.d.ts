/**
 * WebKit2WebExtension 5.0
 *
 * Generated from 5.0
 */


import * as GObject from "gobject";
import * as GLib from "glib";
import * as Gio from "gio";
import * as JavaScriptCore from "javascriptcore";
import * as Soup from "soup";


export const DOM_CSS_RULE_CHARSET_RULE: number;
export const DOM_CSS_RULE_FONT_FACE_RULE: number;
export const DOM_CSS_RULE_IMPORT_RULE: number;
export const DOM_CSS_RULE_MEDIA_RULE: number;
export const DOM_CSS_RULE_PAGE_RULE: number;
export const DOM_CSS_RULE_STYLE_RULE: number;
export const DOM_CSS_RULE_UNKNOWN_RULE: number;
export const DOM_CSS_VALUE_CSS_CUSTOM: number;
export const DOM_CSS_VALUE_CSS_INHERIT: number;
export const DOM_CSS_VALUE_CSS_PRIMITIVE_VALUE: number;
export const DOM_CSS_VALUE_CSS_VALUE_LIST: number;
export const DOM_ELEMENT_ALLOW_KEYBOARD_INPUT: number;
export const DOM_EVENT_AT_TARGET: number;
export const DOM_EVENT_BLUR: number;
export const DOM_EVENT_BUBBLING_PHASE: number;
export const DOM_EVENT_CAPTURING_PHASE: number;
export const DOM_EVENT_CHANGE: number;
export const DOM_EVENT_CLICK: number;
export const DOM_EVENT_DBLCLICK: number;
export const DOM_EVENT_DRAGDROP: number;
export const DOM_EVENT_FOCUS: number;
export const DOM_EVENT_KEYDOWN: number;
export const DOM_EVENT_KEYPRESS: number;
export const DOM_EVENT_KEYUP: number;
export const DOM_EVENT_MOUSEDOWN: number;
export const DOM_EVENT_MOUSEDRAG: number;
export const DOM_EVENT_MOUSEMOVE: number;
export const DOM_EVENT_MOUSEOUT: number;
export const DOM_EVENT_MOUSEOVER: number;
export const DOM_EVENT_MOUSEUP: number;
export const DOM_EVENT_NONE: number;
export const DOM_EVENT_SELECT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_LEFT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_NUMPAD: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_RIGHT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_STANDARD: number;
export const DOM_NODE_ATTRIBUTE_NODE: number;
export const DOM_NODE_CDATA_SECTION_NODE: number;
export const DOM_NODE_COMMENT_NODE: number;
export const DOM_NODE_DOCUMENT_FRAGMENT_NODE: number;
export const DOM_NODE_DOCUMENT_NODE: number;
export const DOM_NODE_DOCUMENT_POSITION_CONTAINED_BY: number;
export const DOM_NODE_DOCUMENT_POSITION_CONTAINS: number;
export const DOM_NODE_DOCUMENT_POSITION_DISCONNECTED: number;
export const DOM_NODE_DOCUMENT_POSITION_FOLLOWING: number;
export const DOM_NODE_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
export const DOM_NODE_DOCUMENT_POSITION_PRECEDING: number;
export const DOM_NODE_DOCUMENT_TYPE_NODE: number;
export const DOM_NODE_ELEMENT_NODE: number;
export const DOM_NODE_ENTITY_NODE: number;
export const DOM_NODE_ENTITY_REFERENCE_NODE: number;
export const DOM_NODE_FILTER_ACCEPT: number;
export const DOM_NODE_FILTER_REJECT: number;
export const DOM_NODE_FILTER_SHOW_ALL: number;
export const DOM_NODE_FILTER_SHOW_ATTRIBUTE: number;
export const DOM_NODE_FILTER_SHOW_CDATA_SECTION: number;
export const DOM_NODE_FILTER_SHOW_COMMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT_FRAGMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT_TYPE: number;
export const DOM_NODE_FILTER_SHOW_ELEMENT: number;
export const DOM_NODE_FILTER_SHOW_ENTITY: number;
export const DOM_NODE_FILTER_SHOW_ENTITY_REFERENCE: number;
export const DOM_NODE_FILTER_SHOW_NOTATION: number;
export const DOM_NODE_FILTER_SHOW_PROCESSING_INSTRUCTION: number;
export const DOM_NODE_FILTER_SHOW_TEXT: number;
export const DOM_NODE_FILTER_SKIP: number;
export const DOM_NODE_PROCESSING_INSTRUCTION_NODE: number;
export const DOM_NODE_TEXT_NODE: number;
export const DOM_RANGE_END_TO_END: number;
export const DOM_RANGE_END_TO_START: number;
export const DOM_RANGE_NODE_AFTER: number;
export const DOM_RANGE_NODE_BEFORE: number;
export const DOM_RANGE_NODE_BEFORE_AND_AFTER: number;
export const DOM_RANGE_NODE_INSIDE: number;
export const DOM_RANGE_START_TO_END: number;
export const DOM_RANGE_START_TO_START: number;
export const DOM_XPATH_RESULT_ANY_TYPE: number;
export const DOM_XPATH_RESULT_ANY_UNORDERED_NODE_TYPE: number;
export const DOM_XPATH_RESULT_BOOLEAN_TYPE: number;
export const DOM_XPATH_RESULT_FIRST_ORDERED_NODE_TYPE: number;
export const DOM_XPATH_RESULT_NUMBER_TYPE: number;
export const DOM_XPATH_RESULT_ORDERED_NODE_ITERATOR_TYPE: number;
export const DOM_XPATH_RESULT_ORDERED_NODE_SNAPSHOT_TYPE: number;
export const DOM_XPATH_RESULT_STRING_TYPE: number;
export const DOM_XPATH_RESULT_UNORDERED_NODE_ITERATOR_TYPE: number;
export const DOM_XPATH_RESULT_UNORDERED_NODE_SNAPSHOT_TYPE: number;
export type WebExtensionInitializeFunction = (extension: WebExtension) => void;
export type WebExtensionInitializeWithUserDataFunction = (extension: WebExtension, user_data: GLib.Variant) => void;

export namespace ConsoleMessageLevel {
    export const $gtype: GObject.GType<ConsoleMessageLevel>;
}

export enum ConsoleMessageLevel {
    INFO = 0,
    LOG = 1,
    WARNING = 2,
    ERROR = 3,
    DEBUG = 4,
}

export namespace ConsoleMessageSource {
    export const $gtype: GObject.GType<ConsoleMessageSource>;
}

export enum ConsoleMessageSource {
    JAVASCRIPT = 0,
    NETWORK = 1,
    CONSOLE_API = 2,
    SECURITY = 3,
    OTHER = 4,
}

export namespace ContextMenuAction {
    export const $gtype: GObject.GType<ContextMenuAction>;
}

export enum ContextMenuAction {
    NO_ACTION = 0,
    OPEN_LINK = 1,
    OPEN_LINK_IN_NEW_WINDOW = 2,
    DOWNLOAD_LINK_TO_DISK = 3,
    COPY_LINK_TO_CLIPBOARD = 4,
    OPEN_IMAGE_IN_NEW_WINDOW = 5,
    DOWNLOAD_IMAGE_TO_DISK = 6,
    COPY_IMAGE_TO_CLIPBOARD = 7,
    COPY_IMAGE_URL_TO_CLIPBOARD = 8,
    OPEN_FRAME_IN_NEW_WINDOW = 9,
    GO_BACK = 10,
    GO_FORWARD = 11,
    STOP = 12,
    RELOAD = 13,
    COPY = 14,
    CUT = 15,
    PASTE = 16,
    DELETE = 17,
    SELECT_ALL = 18,
    INPUT_METHODS = 19,
    UNICODE = 20,
    SPELLING_GUESS = 21,
    NO_GUESSES_FOUND = 22,
    IGNORE_SPELLING = 23,
    LEARN_SPELLING = 24,
    IGNORE_GRAMMAR = 25,
    FONT_MENU = 26,
    BOLD = 27,
    ITALIC = 28,
    UNDERLINE = 29,
    OUTLINE = 30,
    INSPECT_ELEMENT = 31,
    OPEN_VIDEO_IN_NEW_WINDOW = 32,
    OPEN_AUDIO_IN_NEW_WINDOW = 33,
    COPY_VIDEO_LINK_TO_CLIPBOARD = 34,
    COPY_AUDIO_LINK_TO_CLIPBOARD = 35,
    TOGGLE_MEDIA_CONTROLS = 36,
    TOGGLE_MEDIA_LOOP = 37,
    ENTER_VIDEO_FULLSCREEN = 38,
    MEDIA_PLAY = 39,
    MEDIA_PAUSE = 40,
    MEDIA_MUTE = 41,
    DOWNLOAD_VIDEO_TO_DISK = 42,
    DOWNLOAD_AUDIO_TO_DISK = 43,
    INSERT_EMOJI = 44,
    PASTE_AS_PLAIN_TEXT = 45,
    CUSTOM = 10000,
}

export namespace FormSubmissionStep {
    export const $gtype: GObject.GType<FormSubmissionStep>;
}

export enum FormSubmissionStep {
    SEND_DOM_EVENT = 0,
    COMPLETE = 1,
}

export namespace UserMessageError {
    export const $gtype: GObject.GType<UserMessageError>;
}

export enum UserMessageError {
    USER_MESSAGE_UNHANDLED_MESSAGE = 0,
}

export namespace HitTestResultContext {
    export const $gtype: GObject.GType<HitTestResultContext>;
}

export enum HitTestResultContext {
    DOCUMENT = 2,
    LINK = 4,
    IMAGE = 8,
    MEDIA = 16,
    EDITABLE = 32,
    SCROLLBAR = 64,
    SELECTION = 128,
}

export module ContextMenu {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class ContextMenu extends GObject.Object {
    static $gtype: GObject.GType<ContextMenu>;


    constructor(properties?: Partial<ContextMenu.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContextMenu.ConstructorProperties>, ...args: any[]): void;


    // Constructors

    static ["new"](): ContextMenu;

    static new_with_items(items: ContextMenuItem[]): ContextMenu;

    // Members

    append(item: ContextMenuItem): void;

    first(): ContextMenuItem;

    get_item_at_position(position: number): ContextMenuItem;

    get_items(): ContextMenuItem[];

    get_n_items(): number;

    get_user_data(): GLib.Variant;

    insert(item: ContextMenuItem, position: number): void;

    last(): ContextMenuItem;

    move_item(item: ContextMenuItem, position: number): void;

    prepend(item: ContextMenuItem): void;

    remove(item: ContextMenuItem): void;

    remove_all(): void;

    set_user_data(user_data: GLib.Variant): void;


}

export module ContextMenuItem {

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

    }
}

export class ContextMenuItem extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<ContextMenuItem>;


    constructor(properties?: Partial<ContextMenuItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContextMenuItem.ConstructorProperties>, ...args: any[]): void;


    // Constructors

    static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

    static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

    static new_separator(): ContextMenuItem;

    static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

    // Members

    get_gaction(): Gio.Action;

    get_stock_action(): ContextMenuAction;

    get_submenu(): ContextMenu;

    is_separator(): boolean;

    set_submenu(submenu?: ContextMenu | null): void;


}

export module DOMAttr {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

        local_name: string;
        localName: string;
        name: string;
        namespace_uri: string;
        namespaceUri: string;
        owner_element: DOMElement;
        ownerElement: DOMElement;
        prefix: string;
        specified: boolean;
        value: string;
    }
}

export class DOMAttr extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMAttr>;


    constructor(properties?: Partial<DOMAttr.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMAttr.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get local_name(): string;

    get localName(): string;

    get name(): string;

    get namespace_uri(): string;

    get namespaceUri(): string;

    get owner_element(): DOMElement;

    get ownerElement(): DOMElement;

    get prefix(): string;

    get specified(): boolean;

    get value(): string;
    set value(val: string);


    // Members

    get_local_name(): string;

    get_name(): string;

    get_namespace_uri(): string;

    get_owner_element(): DOMElement;

    get_prefix(): string;

    get_specified(): boolean;

    get_value(): string;

    set_value(value: string): void;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMBlob {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        size: number;
    }
}

export class DOMBlob extends DOMObject {
    static $gtype: GObject.GType<DOMBlob>;


    constructor(properties?: Partial<DOMBlob.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMBlob.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get size(): number;


    // Members

    get_size(): number;


}

export module DOMCDATASection {

    export interface ConstructorProperties extends DOMText.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMCDATASection extends DOMText implements DOMEventTarget {
    static $gtype: GObject.GType<DOMCDATASection>;


    constructor(properties?: Partial<DOMCDATASection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCDATASection.ConstructorProperties>, ...args: any[]): void;


}

export module DOMCSSRule {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        css_text: string;
        cssText: string;
        parent_rule: DOMCSSRule;
        parentRule: DOMCSSRule;
        parent_style_sheet: DOMCSSStyleSheet;
        parentStyleSheet: DOMCSSStyleSheet;
        type: number;
    }
}

export class DOMCSSRule extends DOMObject {
    static $gtype: GObject.GType<DOMCSSRule>;


    constructor(properties?: Partial<DOMCSSRule.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCSSRule.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get css_text(): string;
    set css_text(val: string);

    get cssText(): string;
    set cssText(val: string);

    get parent_rule(): DOMCSSRule;

    get parentRule(): DOMCSSRule;

    get parent_style_sheet(): DOMCSSStyleSheet;

    get parentStyleSheet(): DOMCSSStyleSheet;

    get type(): number;


    // Members

    get_css_text(): string;

    get_parent_rule(): DOMCSSRule;

    get_parent_style_sheet(): DOMCSSStyleSheet;

    get_rule_type(): number;

    set_css_text(value: string): void;


}

export module DOMCSSRuleList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMCSSRuleList extends DOMObject {
    static $gtype: GObject.GType<DOMCSSRuleList>;


    constructor(properties?: Partial<DOMCSSRuleList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCSSRuleList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    item(index: number): DOMCSSRule;


}

export module DOMCSSStyleDeclaration {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        css_text: string;
        cssText: string;
        length: number;
        parent_rule: DOMCSSRule;
        parentRule: DOMCSSRule;
    }
}

export class DOMCSSStyleDeclaration extends DOMObject {
    static $gtype: GObject.GType<DOMCSSStyleDeclaration>;


    constructor(properties?: Partial<DOMCSSStyleDeclaration.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCSSStyleDeclaration.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get css_text(): string;
    set css_text(val: string);

    get cssText(): string;
    set cssText(val: string);

    get length(): number;

    get parent_rule(): DOMCSSRule;

    get parentRule(): DOMCSSRule;


    // Members

    get_css_text(): string;

    get_length(): number;

    get_parent_rule(): DOMCSSRule;

    get_property_priority(propertyName: string): string;

    get_property_shorthand(propertyName: string): string;

    get_property_value(propertyName: string): string;

    is_property_implicit(propertyName: string): boolean;

    item(index: number): string;

    remove_property(propertyName: string): string;

    set_css_text(value: string): void;

    set_property(propertyName: string, value: string, priority: string): void;
    // Conflicted with GObject.Object.set_property
    set_property(...args: never[]): any;


}

export module DOMCSSStyleSheet {

    export interface ConstructorProperties extends DOMStyleSheet.ConstructorProperties {
        [key: string]: any;

        css_rules: DOMCSSRuleList;
        cssRules: DOMCSSRuleList;
        owner_rule: DOMCSSRule;
        ownerRule: DOMCSSRule;
        rules: DOMCSSRuleList;
    }
}

export class DOMCSSStyleSheet extends DOMStyleSheet {
    static $gtype: GObject.GType<DOMCSSStyleSheet>;


    constructor(properties?: Partial<DOMCSSStyleSheet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCSSStyleSheet.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get css_rules(): DOMCSSRuleList;

    get cssRules(): DOMCSSRuleList;

    get owner_rule(): DOMCSSRule;

    get ownerRule(): DOMCSSRule;

    get rules(): DOMCSSRuleList;


    // Members

    add_rule(selector: string, style: string, index: number): number;

    delete_rule(index: number): void;

    get_css_rules(): DOMCSSRuleList;

    get_owner_rule(): DOMCSSRule;

    get_rules(): DOMCSSRuleList;

    insert_rule(rule: string, index: number): number;

    remove_rule(index: number): void;


}

export module DOMCSSValue {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        css_text: string;
        cssText: string;
        css_value_type: number;
        cssValueType: number;
    }
}

export class DOMCSSValue extends DOMObject {
    static $gtype: GObject.GType<DOMCSSValue>;


    constructor(properties?: Partial<DOMCSSValue.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCSSValue.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get css_text(): string;
    set css_text(val: string);

    get cssText(): string;
    set cssText(val: string);

    get css_value_type(): number;

    get cssValueType(): number;


    // Members

    get_css_text(): string;

    get_css_value_type(): number;

    set_css_text(value: string): void;


}

export module DOMCharacterData {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

        data: string;
        length: number;
    }
}

export class DOMCharacterData extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMCharacterData>;


    constructor(properties?: Partial<DOMCharacterData.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMCharacterData.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get data(): string;
    set data(val: string);

    get length(): number;


    // Members

    append_data(data: string): void;

    delete_data(offset: number, length: number): void;

    get_data(): string;
    // Conflicted with GObject.Object.get_data
    get_data(...args: never[]): any;

    get_length(): number;

    insert_data(offset: number, data: string): void;

    replace_data(offset: number, length: number, data: string): void;

    set_data(value: string): void;

    substring_data(offset: number, length: number): string;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMClientRect {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    }
}

export class DOMClientRect extends DOMObject {
    static $gtype: GObject.GType<DOMClientRect>;


    constructor(properties?: Partial<DOMClientRect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMClientRect.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get bottom(): number;

    get height(): number;

    get left(): number;

    get right(): number;

    get top(): number;

    get width(): number;


    // Members

    get_bottom(): number;

    get_height(): number;

    get_left(): number;

    get_right(): number;

    get_top(): number;

    get_width(): number;


}

export module DOMClientRectList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMClientRectList extends DOMObject {
    static $gtype: GObject.GType<DOMClientRectList>;


    constructor(properties?: Partial<DOMClientRectList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMClientRectList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    item(index: number): DOMClientRect;


}

export module DOMComment {

    export interface ConstructorProperties extends DOMCharacterData.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMComment extends DOMCharacterData implements DOMEventTarget {
    static $gtype: GObject.GType<DOMComment>;


    constructor(properties?: Partial<DOMComment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMComment.ConstructorProperties>, ...args: any[]): void;


}

export module DOMDOMImplementation {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMDOMImplementation extends DOMObject {
    static $gtype: GObject.GType<DOMDOMImplementation>;


    constructor(properties?: Partial<DOMDOMImplementation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDOMImplementation.ConstructorProperties>, ...args: any[]): void;


    // Members

    create_css_style_sheet(title: string, media: string): DOMCSSStyleSheet;

    create_document(namespaceURI: string | null, qualifiedName: string, doctype?: DOMDocumentType | null): DOMDocument;

    create_document_type(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;

    create_html_document(title: string): DOMHTMLDocument;

    has_feature(feature: string, version: string): boolean;


}

export module DOMDOMSelection {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        anchor_node: DOMNode;
        anchorNode: DOMNode;
        anchor_offset: number;
        anchorOffset: number;
        base_node: DOMNode;
        baseNode: DOMNode;
        base_offset: number;
        baseOffset: number;
        extent_node: DOMNode;
        extentNode: DOMNode;
        extent_offset: number;
        extentOffset: number;
        focus_node: DOMNode;
        focusNode: DOMNode;
        focus_offset: number;
        focusOffset: number;
        is_collapsed: boolean;
        isCollapsed: boolean;
        range_count: number;
        rangeCount: number;
        type: string;
    }
}

export class DOMDOMSelection extends DOMObject {
    static $gtype: GObject.GType<DOMDOMSelection>;


    constructor(properties?: Partial<DOMDOMSelection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDOMSelection.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get anchor_node(): DOMNode;

    get anchorNode(): DOMNode;

    get anchor_offset(): number;

    get anchorOffset(): number;

    get base_node(): DOMNode;

    get baseNode(): DOMNode;

    get base_offset(): number;

    get baseOffset(): number;

    get extent_node(): DOMNode;

    get extentNode(): DOMNode;

    get extent_offset(): number;

    get extentOffset(): number;

    get focus_node(): DOMNode;

    get focusNode(): DOMNode;

    get focus_offset(): number;

    get focusOffset(): number;

    get is_collapsed(): boolean;

    get isCollapsed(): boolean;

    get range_count(): number;

    get rangeCount(): number;

    get type(): string;


    // Members

    add_range(range: DOMRange): void;

    collapse(node: DOMNode, offset: number): void;

    collapse_to_end(): void;

    collapse_to_start(): void;

    contains_node(node: DOMNode, allowPartial: boolean): boolean;

    delete_from_document(): void;

    empty(): void;

    extend(node: DOMNode, offset: number): void;

    get_anchor_node(): DOMNode;

    get_anchor_offset(): number;

    get_base_node(): DOMNode;

    get_base_offset(): number;

    get_extent_node(): DOMNode;

    get_extent_offset(): number;

    get_focus_node(): DOMNode;

    get_focus_offset(): number;

    get_is_collapsed(): boolean;

    get_range_at(index: number): DOMRange;

    get_range_count(): number;

    get_selection_type(): string;

    modify(alter: string, direction: string, granularity: string): void;

    remove_all_ranges(): void;

    select_all_children(node: DOMNode): void;

    set_base_and_extent(baseNode: DOMNode, baseOffset: number, extentNode: DOMNode, extentOffset: number): void;

    set_position(node: DOMNode, offset: number): void;


}

export module DOMDOMTokenList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
        value: string;
    }
}

export class DOMDOMTokenList extends DOMObject {
    static $gtype: GObject.GType<DOMDOMTokenList>;


    constructor(properties?: Partial<DOMDOMTokenList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDOMTokenList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;

    get value(): string;
    set value(val: string);


    // Members

    contains(token: string): boolean;

    get_length(): number;

    get_value(): string;

    item(index: number): string;

    replace(token: string, newToken: string): void;

    set_value(value: string): void;

    toggle(token: string, force: boolean): boolean;


}

export module DOMDOMWindow {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        closed: boolean;
        default_status: string;
        defaultStatus: string;
        device_pixel_ratio: number;
        devicePixelRatio: number;
        document: DOMDocument;
        frame_element: DOMElement;
        frameElement: DOMElement;
        frames: DOMDOMWindow;
        inner_height: number;
        innerHeight: number;
        inner_width: number;
        innerWidth: number;
        length: number;
        name: string;
        offscreen_buffering: boolean;
        offscreenBuffering: boolean;
        opener: DOMDOMWindow;
        orientation: number;
        outer_height: number;
        outerHeight: number;
        outer_width: number;
        outerWidth: number;
        page_x_offset: number;
        pageXOffset: number;
        page_y_offset: number;
        pageYOffset: number;
        screen_left: number;
        screenLeft: number;
        screen_top: number;
        screenTop: number;
        screen_x: number;
        screenX: number;
        screen_y: number;
        screenY: number;
        scroll_x: number;
        scrollX: number;
        scroll_y: number;
        scrollY: number;
        self: DOMDOMWindow;
        status: string;
        top: DOMDOMWindow;
        window: DOMDOMWindow;
    }
}

export class DOMDOMWindow extends DOMObject implements DOMEventTarget {
    static $gtype: GObject.GType<DOMDOMWindow>;


    constructor(properties?: Partial<DOMDOMWindow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDOMWindow.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get closed(): boolean;

    get default_status(): string;
    set default_status(val: string);

    get defaultStatus(): string;
    set defaultStatus(val: string);

    get device_pixel_ratio(): number;

    get devicePixelRatio(): number;

    get document(): DOMDocument;

    get frame_element(): DOMElement;

    get frameElement(): DOMElement;

    get frames(): DOMDOMWindow;

    get inner_height(): number;

    get innerHeight(): number;

    get inner_width(): number;

    get innerWidth(): number;

    get length(): number;

    get name(): string;
    set name(val: string);

    get offscreen_buffering(): boolean;

    get offscreenBuffering(): boolean;

    get opener(): DOMDOMWindow;

    get orientation(): number;

    get outer_height(): number;

    get outerHeight(): number;

    get outer_width(): number;

    get outerWidth(): number;

    get page_x_offset(): number;

    get pageXOffset(): number;

    get page_y_offset(): number;

    get pageYOffset(): number;

    get screen_left(): number;

    get screenLeft(): number;

    get screen_top(): number;

    get screenTop(): number;

    get screen_x(): number;

    get screenX(): number;

    get screen_y(): number;

    get screenY(): number;

    get scroll_x(): number;

    get scrollX(): number;

    get scroll_y(): number;

    get scrollY(): number;

    get self(): DOMDOMWindow;

    get status(): string;
    set status(val: string);

    get top(): DOMDOMWindow;

    get window(): DOMDOMWindow;


    // Members

    alert(message: string): void;

    blur(): void;

    capture_events(): void;

    close(): void;

    confirm(message: string): boolean;

    find(string: string, caseSensitive: boolean, backwards: boolean, wrap: boolean, wholeWord: boolean, searchInFrames: boolean, showDialog: boolean): boolean;

    focus(): void;

    get_closed(): boolean;

    get_computed_style(element: DOMElement, pseudoElement?: string | null): DOMCSSStyleDeclaration;

    get_default_status(): string;

    get_device_pixel_ratio(): number;

    get_document(): DOMDocument;

    get_frame_element(): DOMElement;

    get_frames(): DOMDOMWindow;

    get_inner_height(): number;

    get_inner_width(): number;

    get_length(): number;

    get_name(): string;

    get_offscreen_buffering(): boolean;

    get_opener(): DOMDOMWindow;

    get_orientation(): number;

    get_outer_height(): number;

    get_outer_width(): number;

    get_page_x_offset(): number;

    get_page_y_offset(): number;

    get_parent(): DOMDOMWindow;

    get_screen_left(): number;

    get_screen_top(): number;

    get_screen_x(): number;

    get_screen_y(): number;

    get_scroll_x(): number;

    get_scroll_y(): number;

    get_selection(): DOMDOMSelection;

    get_self(): DOMDOMWindow;

    get_status(): string;

    get_top(): DOMDOMWindow;

    get_window(): DOMDOMWindow;

    move_by(x: number, y: number): void;

    move_to(x: number, y: number): void;

    print(): void;

    prompt(message: string, defaultValue: string): string;

    release_events(): void;

    resize_by(x: number, y: number): void;

    resize_to(width: number, height: number): void;

    scroll_by(x: number, y: number): void;

    scroll_to(x: number, y: number): void;

    set_default_status(value: string): void;

    set_name(value: string): void;

    set_status(value: string): void;

    stop(): void;

    webkit_message_handlers_post_message(handler: string, message: string): boolean;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMDocument {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

        active_element: DOMElement;
        activeElement: DOMElement;
        anchors: DOMHTMLCollection;
        applets: DOMHTMLCollection;
        body: DOMHTMLElement;
        character_set: string;
        characterSet: string;
        charset: string;
        child_element_count: number;
        childElementCount: number;
        children: DOMHTMLCollection;
        compat_mode: string;
        compatMode: string;
        content_type: string;
        contentType: string;
        cookie: string;
        current_script: DOMHTMLScriptElement;
        currentScript: DOMHTMLScriptElement;
        default_view: DOMDOMWindow;
        defaultView: DOMDOMWindow;
        design_mode: string;
        designMode: string;
        dir: string;
        doctype: DOMDocumentType;
        document_element: DOMElement;
        documentElement: DOMElement;
        document_uri: string;
        documentUri: string;
        domain: string;
        embeds: DOMHTMLCollection;
        first_element_child: DOMElement;
        firstElementChild: DOMElement;
        forms: DOMHTMLCollection;
        head: DOMHTMLHeadElement;
        hidden: boolean;
        images: DOMHTMLCollection;
        implementation: DOMDOMImplementation;
        input_encoding: string;
        inputEncoding: string;
        last_element_child: DOMElement;
        lastElementChild: DOMElement;
        last_modified: string;
        lastModified: string;
        links: DOMHTMLCollection;
        origin: string;
        plugins: DOMHTMLCollection;
        pointer_lock_element: DOMElement;
        pointerLockElement: DOMElement;
        preferred_stylesheet_set: string;
        preferredStylesheetSet: string;
        ready_state: string;
        readyState: string;
        referrer: string;
        scripts: DOMHTMLCollection;
        scrolling_element: DOMElement;
        scrollingElement: DOMElement;
        selected_stylesheet_set: string;
        selectedStylesheetSet: string;
        style_sheets: DOMStyleSheetList;
        styleSheets: DOMStyleSheetList;
        title: string;
        url: string;
        visibility_state: string;
        visibilityState: string;
        webkit_current_full_screen_element: DOMElement;
        webkitCurrentFullScreenElement: DOMElement;
        webkit_full_screen_keyboard_input_allowed: boolean;
        webkitFullScreenKeyboardInputAllowed: boolean;
        webkit_fullscreen_element: DOMElement;
        webkitFullscreenElement: DOMElement;
        webkit_fullscreen_enabled: boolean;
        webkitFullscreenEnabled: boolean;
        webkit_is_full_screen: boolean;
        webkitIsFullScreen: boolean;
        xml_encoding: string;
        xmlEncoding: string;
        xml_standalone: boolean;
        xmlStandalone: boolean;
        xml_version: string;
        xmlVersion: string;
    }
}

export class DOMDocument extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMDocument>;


    constructor(properties?: Partial<DOMDocument.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDocument.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get active_element(): DOMElement;

    get activeElement(): DOMElement;

    get anchors(): DOMHTMLCollection;

    get applets(): DOMHTMLCollection;

    get body(): DOMHTMLElement;

    get character_set(): string;

    get characterSet(): string;

    get charset(): string;
    set charset(val: string);

    get child_element_count(): number;

    get childElementCount(): number;

    get children(): DOMHTMLCollection;

    get compat_mode(): string;

    get compatMode(): string;

    get content_type(): string;

    get contentType(): string;

    get cookie(): string;
    set cookie(val: string);

    get current_script(): DOMHTMLScriptElement;

    get currentScript(): DOMHTMLScriptElement;

    get default_view(): DOMDOMWindow;

    get defaultView(): DOMDOMWindow;

    get design_mode(): string;
    set design_mode(val: string);

    get designMode(): string;
    set designMode(val: string);

    get dir(): string;
    set dir(val: string);

    get doctype(): DOMDocumentType;

    get document_element(): DOMElement;

    get documentElement(): DOMElement;

    get document_uri(): string;
    set document_uri(val: string);

    get documentUri(): string;
    set documentUri(val: string);

    get domain(): string;

    get embeds(): DOMHTMLCollection;

    get first_element_child(): DOMElement;

    get firstElementChild(): DOMElement;

    get forms(): DOMHTMLCollection;

    get head(): DOMHTMLHeadElement;

    get hidden(): boolean;

    get images(): DOMHTMLCollection;

    get implementation(): DOMDOMImplementation;

    get input_encoding(): string;

    get inputEncoding(): string;

    get last_element_child(): DOMElement;

    get lastElementChild(): DOMElement;

    get last_modified(): string;

    get lastModified(): string;

    get links(): DOMHTMLCollection;

    get origin(): string;

    get plugins(): DOMHTMLCollection;

    get pointer_lock_element(): DOMElement;

    get pointerLockElement(): DOMElement;

    get preferred_stylesheet_set(): string;

    get preferredStylesheetSet(): string;

    get ready_state(): string;

    get readyState(): string;

    get referrer(): string;

    get scripts(): DOMHTMLCollection;

    get scrolling_element(): DOMElement;

    get scrollingElement(): DOMElement;

    get selected_stylesheet_set(): string;
    set selected_stylesheet_set(val: string);

    get selectedStylesheetSet(): string;
    set selectedStylesheetSet(val: string);

    get style_sheets(): DOMStyleSheetList;

    get styleSheets(): DOMStyleSheetList;

    get title(): string;
    set title(val: string);

    get url(): string;

    get visibility_state(): string;

    get visibilityState(): string;

    get webkit_current_full_screen_element(): DOMElement;

    get webkitCurrentFullScreenElement(): DOMElement;

    get webkit_full_screen_keyboard_input_allowed(): boolean;

    get webkitFullScreenKeyboardInputAllowed(): boolean;

    get webkit_fullscreen_element(): DOMElement;

    get webkitFullscreenElement(): DOMElement;

    get webkit_fullscreen_enabled(): boolean;

    get webkitFullscreenEnabled(): boolean;

    get webkit_is_full_screen(): boolean;

    get webkitIsFullScreen(): boolean;

    get xml_encoding(): string;

    get xmlEncoding(): string;

    get xml_standalone(): boolean;
    set xml_standalone(val: boolean);

    get xmlStandalone(): boolean;
    set xmlStandalone(val: boolean);

    get xml_version(): string;
    set xml_version(val: string);

    get xmlVersion(): string;
    set xmlVersion(val: string);


    // Members

    adopt_node(source: DOMNode): DOMNode;

    caret_range_from_point(x: number, y: number): DOMRange;

    create_attribute(name: string): DOMAttr;

    create_attribute_ns(namespaceURI: string | null, qualifiedName: string): DOMAttr;

    create_cdata_section(data: string): DOMCDATASection;

    create_comment(data: string): DOMComment;

    create_css_style_declaration(): DOMCSSStyleDeclaration;

    create_document_fragment(): DOMDocumentFragment;

    create_element(tagName: string): DOMElement;

    create_element_ns(namespaceURI: string | null, qualifiedName: string): DOMElement;

    create_entity_reference(name?: string | null): DOMEntityReference;

    create_event(eventType: string): DOMEvent;

    create_expression(expression: string, resolver: DOMXPathNSResolver): DOMXPathExpression;

    create_node_iterator(root: DOMNode, whatToShow: number, filter: DOMNodeFilter | null, expandEntityReferences: boolean): DOMNodeIterator;

    create_ns_resolver(nodeResolver: DOMNode): DOMXPathNSResolver;

    create_processing_instruction(target: string, data: string): DOMProcessingInstruction;

    create_range(): DOMRange;

    create_text_node(data: string): DOMText;

    create_tree_walker(root: DOMNode, whatToShow: number, filter: DOMNodeFilter | null, expandEntityReferences: boolean): DOMTreeWalker;

    element_from_point(x: number, y: number): DOMElement;

    evaluate(expression: string, contextNode: DOMNode, resolver: DOMXPathNSResolver | null, type: number, inResult?: DOMXPathResult | null): DOMXPathResult;

    exec_command(command: string, userInterface: boolean, value: string): boolean;

    exit_pointer_lock(): void;

    get_active_element(): DOMElement;

    get_anchors(): DOMHTMLCollection;

    get_applets(): DOMHTMLCollection;

    get_body(): DOMHTMLElement;

    get_character_set(): string;

    get_charset(): string;

    get_child_element_count(): number;

    get_children(): DOMHTMLCollection;

    get_compat_mode(): string;

    get_content_type(): string;

    get_cookie(): string;

    get_current_script(): DOMHTMLScriptElement;

    get_default_charset(): string;

    get_default_view(): DOMDOMWindow;

    get_design_mode(): string;

    get_dir(): string;

    get_doctype(): DOMDocumentType;

    get_document_element(): DOMElement;

    get_document_uri(): string;

    get_domain(): string;

    get_element_by_id(elementId: string): DOMElement;

    get_elements_by_class_name(class_name: string): DOMNodeList;

    get_elements_by_class_name_as_html_collection(classNames: string): DOMHTMLCollection;

    get_elements_by_name(elementName: string): DOMNodeList;

    get_elements_by_tag_name(tag_name: string): DOMNodeList;

    get_elements_by_tag_name_as_html_collection(tagname: string): DOMHTMLCollection;

    get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;

    get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;

    get_embeds(): DOMHTMLCollection;

    get_first_element_child(): DOMElement;

    get_forms(): DOMHTMLCollection;

    get_head(): DOMHTMLHeadElement;

    get_hidden(): boolean;

    get_images(): DOMHTMLCollection;

    get_implementation(): DOMDOMImplementation;

    get_input_encoding(): string;

    get_last_element_child(): DOMElement;

    get_last_modified(): string;

    get_links(): DOMHTMLCollection;

    get_origin(): string;

    get_override_style(element: DOMElement, pseudoElement?: string | null): DOMCSSStyleDeclaration;

    get_plugins(): DOMHTMLCollection;

    get_pointer_lock_element(): DOMElement;

    get_preferred_stylesheet_set(): string;

    get_ready_state(): string;

    get_referrer(): string;

    get_scripts(): DOMHTMLCollection;

    get_scrolling_element(): DOMElement;

    get_selected_stylesheet_set(): string;

    get_style_sheets(): DOMStyleSheetList;

    get_title(): string;

    get_url(): string;

    get_visibility_state(): string;

    get_webkit_current_fullscreen_element(): DOMElement;

    get_webkit_fullscreen_element(): DOMElement;

    get_webkit_fullscreen_enabled(): boolean;

    get_webkit_fullscreen_keyboard_input_allowed(): boolean;

    get_webkit_is_fullscreen(): boolean;

    get_xml_encoding(): string;

    get_xml_standalone(): boolean;

    get_xml_version(): string;

    has_focus(): boolean;

    import_node(importedNode: DOMNode, deep: boolean): DOMNode;

    query_command_enabled(command: string): boolean;

    query_command_indeterm(command: string): boolean;

    query_command_state(command: string): boolean;

    query_command_supported(command: string): boolean;

    query_command_value(command: string): string;

    query_selector(selectors: string): DOMElement;

    query_selector_all(selectors: string): DOMNodeList;

    set_body(value: DOMHTMLElement): void;

    set_charset(value: string): void;

    set_cookie(value: string): void;

    set_design_mode(value: string): void;

    set_dir(value: string): void;

    set_document_uri(value: string): void;

    set_selected_stylesheet_set(value: string): void;

    set_title(value: string): void;

    set_xml_standalone(value: boolean): void;

    set_xml_version(value: string): void;

    webkit_cancel_fullscreen(): void;

    webkit_exit_fullscreen(): void;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMDocumentFragment {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

        child_element_count: number;
        childElementCount: number;
        children: DOMHTMLCollection;
        first_element_child: DOMElement;
        firstElementChild: DOMElement;
        last_element_child: DOMElement;
        lastElementChild: DOMElement;
    }
}

export class DOMDocumentFragment extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMDocumentFragment>;


    constructor(properties?: Partial<DOMDocumentFragment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDocumentFragment.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get child_element_count(): number;

    get childElementCount(): number;

    get children(): DOMHTMLCollection;

    get first_element_child(): DOMElement;

    get firstElementChild(): DOMElement;

    get last_element_child(): DOMElement;

    get lastElementChild(): DOMElement;


    // Members

    get_child_element_count(): number;

    get_children(): DOMHTMLCollection;

    get_element_by_id(elementId: string): DOMElement;

    get_first_element_child(): DOMElement;

    get_last_element_child(): DOMElement;

    query_selector(selectors: string): DOMElement;

    query_selector_all(selectors: string): DOMNodeList;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMDocumentType {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

        entities: DOMNamedNodeMap;
        internal_subset: string;
        internalSubset: string;
        name: string;
        notations: DOMNamedNodeMap;
        public_id: string;
        publicId: string;
        system_id: string;
        systemId: string;
    }
}

export class DOMDocumentType extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMDocumentType>;


    constructor(properties?: Partial<DOMDocumentType.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMDocumentType.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get entities(): DOMNamedNodeMap;

    get internal_subset(): string;

    get internalSubset(): string;

    get name(): string;

    get notations(): DOMNamedNodeMap;

    get public_id(): string;

    get publicId(): string;

    get system_id(): string;

    get systemId(): string;


    // Members

    get_entities(): DOMNamedNodeMap;

    get_internal_subset(): string;

    get_name(): string;

    get_notations(): DOMNamedNodeMap;

    get_public_id(): string;

    get_system_id(): string;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMElement {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

        attributes: DOMNamedNodeMap;
        child_element_count: number;
        childElementCount: number;
        children: DOMHTMLCollection;
        class_list: DOMDOMTokenList;
        classList: DOMDOMTokenList;
        class_name: string;
        className: string;
        client_height: number;
        clientHeight: number;
        client_left: number;
        clientLeft: number;
        client_top: number;
        clientTop: number;
        client_width: number;
        clientWidth: number;
        first_element_child: DOMElement;
        firstElementChild: DOMElement;
        id: string;
        inner_html: string;
        innerHtml: string;
        last_element_child: DOMElement;
        lastElementChild: DOMElement;
        local_name: string;
        localName: string;
        namespace_uri: string;
        namespaceUri: string;
        next_element_sibling: DOMElement;
        nextElementSibling: DOMElement;
        offset_height: number;
        offsetHeight: number;
        offset_left: number;
        offsetLeft: number;
        offset_parent: DOMElement;
        offsetParent: DOMElement;
        offset_top: number;
        offsetTop: number;
        offset_width: number;
        offsetWidth: number;
        outer_html: string;
        outerHtml: string;
        prefix: string;
        previous_element_sibling: DOMElement;
        previousElementSibling: DOMElement;
        scroll_height: number;
        scrollHeight: number;
        scroll_left: number;
        scrollLeft: number;
        scroll_top: number;
        scrollTop: number;
        scroll_width: number;
        scrollWidth: number;
        style: DOMCSSStyleDeclaration;
        tag_name: string;
        tagName: string;
        webkit_region_overset: string;
        webkitRegionOverset: string;
    }
}

export class DOMElement extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMElement>;


    constructor(properties?: Partial<DOMElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get attributes(): DOMNamedNodeMap;

    get child_element_count(): number;

    get childElementCount(): number;

    get children(): DOMHTMLCollection;

    get class_list(): DOMDOMTokenList;

    get classList(): DOMDOMTokenList;

    get class_name(): string;
    set class_name(val: string);

    get className(): string;
    set className(val: string);

    get client_height(): number;

    get clientHeight(): number;

    get client_left(): number;

    get clientLeft(): number;

    get client_top(): number;

    get clientTop(): number;

    get client_width(): number;

    get clientWidth(): number;

    get first_element_child(): DOMElement;

    get firstElementChild(): DOMElement;

    get id(): string;
    set id(val: string);

    get inner_html(): string;
    set inner_html(val: string);

    get innerHtml(): string;
    set innerHtml(val: string);

    get last_element_child(): DOMElement;

    get lastElementChild(): DOMElement;

    get local_name(): string;

    get localName(): string;

    get namespace_uri(): string;

    get namespaceUri(): string;

    get next_element_sibling(): DOMElement;

    get nextElementSibling(): DOMElement;

    get offset_height(): number;

    get offsetHeight(): number;

    get offset_left(): number;

    get offsetLeft(): number;

    get offset_parent(): DOMElement;

    get offsetParent(): DOMElement;

    get offset_top(): number;

    get offsetTop(): number;

    get offset_width(): number;

    get offsetWidth(): number;

    get outer_html(): string;
    set outer_html(val: string);

    get outerHtml(): string;
    set outerHtml(val: string);

    get prefix(): string;

    get previous_element_sibling(): DOMElement;

    get previousElementSibling(): DOMElement;

    get scroll_height(): number;

    get scrollHeight(): number;

    get scroll_left(): number;
    set scroll_left(val: number);

    get scrollLeft(): number;
    set scrollLeft(val: number);

    get scroll_top(): number;
    set scroll_top(val: number);

    get scrollTop(): number;
    set scrollTop(val: number);

    get scroll_width(): number;

    get scrollWidth(): number;

    get style(): DOMCSSStyleDeclaration;

    get tag_name(): string;

    get tagName(): string;

    get webkit_region_overset(): string;

    get webkitRegionOverset(): string;


    // Members

    blur(): void;

    closest(selectors: string): DOMElement;

    focus(): void;

    get_attribute(name: string): string;

    get_attribute_node(name: string): DOMAttr;

    get_attribute_node_ns(namespaceURI: string, localName: string): DOMAttr;

    get_attribute_ns(namespaceURI: string, localName: string): string;

    get_attributes(): DOMNamedNodeMap;

    get_bounding_client_rect(): DOMClientRect;

    get_child_element_count(): number;

    get_children(): DOMHTMLCollection;

    get_class_list(): DOMDOMTokenList;

    get_class_name(): string;

    get_client_height(): number;

    get_client_left(): number;

    get_client_rects(): DOMClientRectList;

    get_client_top(): number;

    get_client_width(): number;

    get_elements_by_class_name(class_name: string): DOMNodeList;

    get_elements_by_class_name_as_html_collection(name: string): DOMHTMLCollection;

    get_elements_by_tag_name(tag_name: string): DOMNodeList;

    get_elements_by_tag_name_as_html_collection(name: string): DOMHTMLCollection;

    get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;

    get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;

    get_first_element_child(): DOMElement;

    get_id(): string;

    get_inner_html(): string;

    get_last_element_child(): DOMElement;

    get_local_name(): string;

    get_namespace_uri(): string;

    get_next_element_sibling(): DOMElement;

    get_offset_height(): number;

    get_offset_left(): number;

    get_offset_parent(): DOMElement;

    get_offset_top(): number;

    get_offset_width(): number;

    get_outer_html(): string;

    get_prefix(): string;

    get_previous_element_sibling(): DOMElement;

    get_scroll_height(): number;

    get_scroll_left(): number;

    get_scroll_top(): number;

    get_scroll_width(): number;

    get_style(): DOMCSSStyleDeclaration;

    get_tag_name(): string;

    get_webkit_region_overset(): string;

    has_attribute(name: string): boolean;

    has_attribute_ns(namespaceURI: string, localName: string): boolean;

    has_attributes(): boolean;

    html_input_element_get_auto_filled(): boolean;

    html_input_element_is_user_edited(): boolean;

    html_input_element_set_auto_filled(auto_filled: boolean): void;

    html_input_element_set_editing_value(value: string): void;

    insert_adjacent_element(where: string, element: DOMElement): DOMElement;

    insert_adjacent_html(where: string, html: string): void;

    insert_adjacent_text(where: string, text: string): void;

    matches(selectors: string): boolean;

    query_selector(selectors: string): DOMElement;

    query_selector_all(selectors: string): DOMNodeList;

    remove(): void;

    remove_attribute(name: string): void;

    remove_attribute_node(oldAttr: DOMAttr): DOMAttr;

    remove_attribute_ns(namespaceURI: string, localName: string): void;

    request_pointer_lock(): void;

    scroll_by_lines(lines: number): void;

    scroll_by_pages(pages: number): void;

    scroll_into_view(alignWithTop: boolean): void;

    scroll_into_view_if_needed(centerIfNeeded: boolean): void;

    set_attribute(name: string, value: string): void;

    set_attribute_node(newAttr: DOMAttr): DOMAttr;

    set_attribute_node_ns(newAttr: DOMAttr): DOMAttr;

    set_attribute_ns(namespaceURI: string | null, qualifiedName: string, value: string): void;

    set_class_name(value: string): void;

    set_id(value: string): void;

    set_inner_html(value: string): void;

    set_outer_html(value: string): void;

    set_scroll_left(value: number): void;

    set_scroll_top(value: number): void;

    webkit_matches_selector(selectors: string): boolean;

    webkit_request_fullscreen(): void;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMEntityReference {

    export interface ConstructorProperties extends DOMNode.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMEntityReference extends DOMNode implements DOMEventTarget {
    static $gtype: GObject.GType<DOMEntityReference>;


    constructor(properties?: Partial<DOMEntityReference.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMEntityReference.ConstructorProperties>, ...args: any[]): void;


    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMEvent {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        bubbles: boolean;
        cancel_bubble: boolean;
        cancelBubble: boolean;
        cancelable: boolean;
        current_target: DOMEventTarget;
        currentTarget: DOMEventTarget;
        event_phase: number;
        eventPhase: number;
        return_value: boolean;
        returnValue: boolean;
        src_element: DOMEventTarget;
        srcElement: DOMEventTarget;
        target: DOMEventTarget;
        time_stamp: number;
        timeStamp: number;
        type: string;
    }
}

export class DOMEvent extends DOMObject {
    static $gtype: GObject.GType<DOMEvent>;


    constructor(properties?: Partial<DOMEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMEvent.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get bubbles(): boolean;

    get cancel_bubble(): boolean;
    set cancel_bubble(val: boolean);

    get cancelBubble(): boolean;
    set cancelBubble(val: boolean);

    get cancelable(): boolean;

    get current_target(): DOMEventTarget;

    get currentTarget(): DOMEventTarget;

    get event_phase(): number;

    get eventPhase(): number;

    get return_value(): boolean;
    set return_value(val: boolean);

    get returnValue(): boolean;
    set returnValue(val: boolean);

    get src_element(): DOMEventTarget;

    get srcElement(): DOMEventTarget;

    get target(): DOMEventTarget;

    get time_stamp(): number;

    get timeStamp(): number;

    get type(): string;


    // Members

    get_bubbles(): boolean;

    get_cancel_bubble(): boolean;

    get_cancelable(): boolean;

    get_current_target(): DOMEventTarget;

    get_event_phase(): number;

    get_event_type(): string;

    get_return_value(): boolean;

    get_src_element(): DOMEventTarget;

    get_target(): DOMEventTarget;

    get_time_stamp(): number;

    init_event(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;

    prevent_default(): void;

    set_cancel_bubble(value: boolean): void;

    set_return_value(value: boolean): void;

    stop_propagation(): void;


}

export module DOMFile {

    export interface ConstructorProperties extends DOMBlob.ConstructorProperties {
        [key: string]: any;

        name: string;
    }
}

export class DOMFile extends DOMBlob {
    static $gtype: GObject.GType<DOMFile>;


    constructor(properties?: Partial<DOMFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMFile.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get name(): string;


    // Members

    get_name(): string;


}

export module DOMFileList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMFileList extends DOMObject {
    static $gtype: GObject.GType<DOMFileList>;


    constructor(properties?: Partial<DOMFileList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMFileList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    item(index: number): DOMFile;


}

export module DOMHTMLAnchorElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        charset: string;
        coords: string;
        hash: string;
        host: string;
        hostname: string;
        href: string;
        hreflang: string;
        name: string;
        pathname: string;
        port: string;
        protocol: string;
        rel: string;
        rev: string;
        search: string;
        shape: string;
        target: string;
        text: string;
        type: string;
    }
}

export class DOMHTMLAnchorElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLAnchorElement>;


    constructor(properties?: Partial<DOMHTMLAnchorElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLAnchorElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get charset(): string;
    set charset(val: string);

    get coords(): string;
    set coords(val: string);

    get hash(): string;
    set hash(val: string);

    get host(): string;
    set host(val: string);

    get hostname(): string;
    set hostname(val: string);

    get href(): string;
    set href(val: string);

    get hreflang(): string;
    set hreflang(val: string);

    get name(): string;
    set name(val: string);

    get pathname(): string;
    set pathname(val: string);

    get port(): string;
    set port(val: string);

    get protocol(): string;
    set protocol(val: string);

    get rel(): string;
    set rel(val: string);

    get rev(): string;
    set rev(val: string);

    get search(): string;
    set search(val: string);

    get shape(): string;
    set shape(val: string);

    get target(): string;
    set target(val: string);

    get text(): string;
    set text(val: string);

    get type(): string;
    set type(val: string);


    // Members

    get_charset(): string;

    get_coords(): string;

    get_hash(): string;

    get_host(): string;

    get_hostname(): string;

    get_href(): string;

    get_hreflang(): string;

    get_name(): string;

    get_pathname(): string;

    get_port(): string;

    get_protocol(): string;

    get_rel(): string;

    get_rev(): string;

    get_search(): string;

    get_shape(): string;

    get_target(): string;

    get_text(): string;

    get_type_attr(): string;

    set_charset(value: string): void;

    set_coords(value: string): void;

    set_hash(value: string): void;

    set_host(value: string): void;

    set_hostname(value: string): void;

    set_href(value: string): void;

    set_hreflang(value: string): void;

    set_name(value: string): void;

    set_pathname(value: string): void;

    set_port(value: string): void;

    set_protocol(value: string): void;

    set_rel(value: string): void;

    set_rev(value: string): void;

    set_search(value: string): void;

    set_shape(value: string): void;

    set_target(value: string): void;

    set_text(value: string): void;

    set_type_attr(value: string): void;


}

export module DOMHTMLAppletElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        alt: string;
        archive: string;
        code: string;
        code_base: string;
        codeBase: string;
        height: string;
        hspace: number;
        name: string;
        object: string;
        vspace: number;
        width: string;
    }
}

export class DOMHTMLAppletElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLAppletElement>;


    constructor(properties?: Partial<DOMHTMLAppletElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLAppletElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get alt(): string;
    set alt(val: string);

    get archive(): string;
    set archive(val: string);

    get code(): string;
    set code(val: string);

    get code_base(): string;
    set code_base(val: string);

    get codeBase(): string;
    set codeBase(val: string);

    get height(): string;
    set height(val: string);

    get hspace(): number;
    set hspace(val: number);

    get name(): string;
    set name(val: string);

    get object(): string;
    set object(val: string);

    get vspace(): number;
    set vspace(val: number);

    get width(): string;
    set width(val: string);


    // Members

    get_align(): string;

    get_alt(): string;

    get_archive(): string;

    get_code(): string;

    get_code_base(): string;

    get_height(): string;

    get_hspace(): number;

    get_name(): string;

    get_object(): string;

    get_vspace(): number;

    get_width(): string;

    set_align(value: string): void;

    set_alt(value: string): void;

    set_archive(value: string): void;

    set_code(value: string): void;

    set_code_base(value: string): void;

    set_height(value: string): void;

    set_hspace(value: number): void;

    set_name(value: string): void;

    set_object(value: string): void;

    set_vspace(value: number): void;

    set_width(value: string): void;


}

export module DOMHTMLAreaElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        alt: string;
        coords: string;
        hash: string;
        host: string;
        hostname: string;
        href: string;
        no_href: boolean;
        noHref: boolean;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        shape: string;
        target: string;
    }
}

export class DOMHTMLAreaElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLAreaElement>;


    constructor(properties?: Partial<DOMHTMLAreaElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLAreaElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get alt(): string;
    set alt(val: string);

    get coords(): string;
    set coords(val: string);

    get hash(): string;
    set hash(val: string);

    get host(): string;
    set host(val: string);

    get hostname(): string;
    set hostname(val: string);

    get href(): string;
    set href(val: string);

    get no_href(): boolean;
    set no_href(val: boolean);

    get noHref(): boolean;
    set noHref(val: boolean);

    get pathname(): string;
    set pathname(val: string);

    get port(): string;
    set port(val: string);

    get protocol(): string;
    set protocol(val: string);

    get search(): string;
    set search(val: string);

    get shape(): string;
    set shape(val: string);

    get target(): string;
    set target(val: string);


    // Members

    get_alt(): string;

    get_coords(): string;

    get_hash(): string;

    get_host(): string;

    get_hostname(): string;

    get_href(): string;

    get_no_href(): boolean;

    get_pathname(): string;

    get_port(): string;

    get_protocol(): string;

    get_search(): string;

    get_shape(): string;

    get_target(): string;

    set_alt(value: string): void;

    set_coords(value: string): void;

    set_hash(value: string): void;

    set_host(value: string): void;

    set_hostname(value: string): void;

    set_href(value: string): void;

    set_no_href(value: boolean): void;

    set_pathname(value: string): void;

    set_port(value: string): void;

    set_protocol(value: string): void;

    set_search(value: string): void;

    set_shape(value: string): void;

    set_target(value: string): void;


}

export module DOMHTMLBRElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        clear: string;
    }
}

export class DOMHTMLBRElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLBRElement>;


    constructor(properties?: Partial<DOMHTMLBRElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLBRElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get clear(): string;
    set clear(val: string);


    // Members

    get_clear(): string;

    set_clear(value: string): void;


}

export module DOMHTMLBaseElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        href: string;
        target: string;
    }
}

export class DOMHTMLBaseElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLBaseElement>;


    constructor(properties?: Partial<DOMHTMLBaseElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLBaseElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get href(): string;
    set href(val: string);

    get target(): string;
    set target(val: string);


    // Members

    get_href(): string;

    get_target(): string;

    set_href(value: string): void;

    set_target(value: string): void;


}

export module DOMHTMLBaseFontElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMHTMLBaseFontElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLBaseFontElement>;


    constructor(properties?: Partial<DOMHTMLBaseFontElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLBaseFontElement.ConstructorProperties>, ...args: any[]): void;


    // Members

    get_color(): string;

    get_face(): string;

    get_size(): number;

    set_color(value: string): void;

    set_face(value: string): void;

    set_size(value: number): void;


}

export module DOMHTMLBodyElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        a_link: string;
        aLink: string;
        background: string;
        bg_color: string;
        bgColor: string;
        link: string;
        text: string;
        v_link: string;
        vLink: string;
    }
}

export class DOMHTMLBodyElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLBodyElement>;


    constructor(properties?: Partial<DOMHTMLBodyElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLBodyElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get a_link(): string;
    set a_link(val: string);

    get aLink(): string;
    set aLink(val: string);

    get background(): string;
    set background(val: string);

    get bg_color(): string;
    set bg_color(val: string);

    get bgColor(): string;
    set bgColor(val: string);

    get link(): string;
    set link(val: string);

    get text(): string;
    set text(val: string);

    get v_link(): string;
    set v_link(val: string);

    get vLink(): string;
    set vLink(val: string);


    // Members

    get_a_link(): string;

    get_background(): string;

    get_bg_color(): string;

    get_link(): string;

    get_text(): string;

    get_v_link(): string;

    set_a_link(value: string): void;

    set_background(value: string): void;

    set_bg_color(value: string): void;

    set_link(value: string): void;

    set_text(value: string): void;

    set_v_link(value: string): void;


}

export module DOMHTMLButtonElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        autofocus: boolean;
        disabled: boolean;
        form: DOMHTMLFormElement;
        name: string;
        type: string;
        value: string;
        will_validate: boolean;
        willValidate: boolean;
    }
}

export class DOMHTMLButtonElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLButtonElement>;


    constructor(properties?: Partial<DOMHTMLButtonElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLButtonElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get autofocus(): boolean;
    set autofocus(val: boolean);

    get disabled(): boolean;
    set disabled(val: boolean);

    get form(): DOMHTMLFormElement;

    get name(): string;
    set name(val: string);

    get type(): string;
    set type(val: string);

    get value(): string;
    set value(val: string);

    get will_validate(): boolean;

    get willValidate(): boolean;


    // Members

    get_autofocus(): boolean;

    get_button_type(): string;

    get_disabled(): boolean;

    get_form(): DOMHTMLFormElement;

    get_name(): string;

    get_value(): string;

    get_will_validate(): boolean;

    set_autofocus(value: boolean): void;

    set_button_type(value: string): void;

    set_disabled(value: boolean): void;

    set_name(value: string): void;

    set_value(value: string): void;


}

export module DOMHTMLCanvasElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        height: number;
        width: number;
    }
}

export class DOMHTMLCanvasElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLCanvasElement>;


    constructor(properties?: Partial<DOMHTMLCanvasElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLCanvasElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get height(): number;
    set height(val: number);

    get width(): number;
    set width(val: number);


    // Members

    get_height(): number;

    get_width(): number;

    set_height(value: number): void;

    set_width(value: number): void;


}

export module DOMHTMLCollection {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMHTMLCollection extends DOMObject {
    static $gtype: GObject.GType<DOMHTMLCollection>;


    constructor(properties?: Partial<DOMHTMLCollection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLCollection.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    item(index: number): DOMNode;

    named_item(name: string): DOMNode;


}

export module DOMHTMLDListElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        compact: boolean;
    }
}

export class DOMHTMLDListElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLDListElement>;


    constructor(properties?: Partial<DOMHTMLDListElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLDListElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get compact(): boolean;
    set compact(val: boolean);


    // Members

    get_compact(): boolean;

    set_compact(value: boolean): void;


}

export module DOMHTMLDirectoryElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        compact: boolean;
    }
}

export class DOMHTMLDirectoryElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLDirectoryElement>;


    constructor(properties?: Partial<DOMHTMLDirectoryElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLDirectoryElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get compact(): boolean;
    set compact(val: boolean);


    // Members

    get_compact(): boolean;

    set_compact(value: boolean): void;


}

export module DOMHTMLDivElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
    }
}

export class DOMHTMLDivElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLDivElement>;


    constructor(properties?: Partial<DOMHTMLDivElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLDivElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);


    // Members

    get_align(): string;

    set_align(value: string): void;


}

export module DOMHTMLDocument {

    export interface ConstructorProperties extends DOMDocument.ConstructorProperties {
        [key: string]: any;

        alink_color: string;
        alinkColor: string;
        bg_color: string;
        bgColor: string;
        dir: string;
        fg_color: string;
        fgColor: string;
        height: number;
        link_color: string;
        linkColor: string;
        vlink_color: string;
        vlinkColor: string;
        width: number;
    }
}

export class DOMHTMLDocument extends DOMDocument implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLDocument>;


    constructor(properties?: Partial<DOMHTMLDocument.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLDocument.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get alink_color(): string;
    set alink_color(val: string);

    get alinkColor(): string;
    set alinkColor(val: string);

    get bg_color(): string;
    set bg_color(val: string);

    get bgColor(): string;
    set bgColor(val: string);

    get dir(): string;
    set dir(val: string);

    get fg_color(): string;
    set fg_color(val: string);

    get fgColor(): string;
    set fgColor(val: string);

    get height(): number;

    get link_color(): string;
    set link_color(val: string);

    get linkColor(): string;
    set linkColor(val: string);

    get vlink_color(): string;
    set vlink_color(val: string);

    get vlinkColor(): string;
    set vlinkColor(val: string);

    get width(): number;


    // Members

    capture_events(): void;

    clear(): void;

    close(): void;

    get_alink_color(): string;

    get_bg_color(): string;

    get_compat_mode(): string;

    get_design_mode(): string;

    get_dir(): string;

    get_embeds(): DOMHTMLCollection;

    get_fg_color(): string;

    get_height(): number;

    get_link_color(): string;

    get_plugins(): DOMHTMLCollection;

    get_scripts(): DOMHTMLCollection;

    get_vlink_color(): string;

    get_width(): number;

    release_events(): void;

    set_alink_color(value: string): void;

    set_bg_color(value: string): void;

    set_design_mode(value: string): void;

    set_dir(value: string): void;

    set_fg_color(value: string): void;

    set_link_color(value: string): void;

    set_vlink_color(value: string): void;


}

export module DOMHTMLElement {

    export interface ConstructorProperties extends DOMElement.ConstructorProperties {
        [key: string]: any;

        access_key: string;
        accessKey: string;
        content_editable: string;
        contentEditable: string;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        inner_text: string;
        innerText: string;
        is_content_editable: boolean;
        isContentEditable: boolean;
        lang: string;
        outer_text: string;
        outerText: string;
        spellcheck: boolean;
        tab_index: number;
        tabIndex: number;
        title: string;
        translate: boolean;
        webkitdropzone: string;
    }
}

export class DOMHTMLElement extends DOMElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLElement>;


    constructor(properties?: Partial<DOMHTMLElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get access_key(): string;
    set access_key(val: string);

    get accessKey(): string;
    set accessKey(val: string);

    get content_editable(): string;
    set content_editable(val: string);

    get contentEditable(): string;
    set contentEditable(val: string);

    get dir(): string;
    set dir(val: string);

    get draggable(): boolean;
    set draggable(val: boolean);

    get hidden(): boolean;
    set hidden(val: boolean);

    get inner_text(): string;
    set inner_text(val: string);

    get innerText(): string;
    set innerText(val: string);

    get is_content_editable(): boolean;

    get isContentEditable(): boolean;

    get lang(): string;
    set lang(val: string);

    get outer_text(): string;
    set outer_text(val: string);

    get outerText(): string;
    set outerText(val: string);

    get spellcheck(): boolean;
    set spellcheck(val: boolean);

    get tab_index(): number;
    set tab_index(val: number);

    get tabIndex(): number;
    set tabIndex(val: number);

    get title(): string;
    set title(val: string);

    get translate(): boolean;
    set translate(val: boolean);

    get webkitdropzone(): string;
    set webkitdropzone(val: string);


    // Members

    click(): void;

    get_access_key(): string;

    get_children(): DOMHTMLCollection;

    get_content_editable(): string;

    get_dir(): string;

    get_draggable(): boolean;

    get_hidden(): boolean;

    get_inner_html(): string;

    get_inner_text(): string;

    get_is_content_editable(): boolean;

    get_lang(): string;

    get_outer_html(): string;

    get_outer_text(): string;

    get_spellcheck(): boolean;

    get_tab_index(): number;

    get_title(): string;

    get_translate(): boolean;

    get_webkitdropzone(): string;

    set_access_key(value: string): void;

    set_content_editable(value: string): void;

    set_dir(value: string): void;

    set_draggable(value: boolean): void;

    set_hidden(value: boolean): void;

    set_inner_html(contents: string): void;

    set_inner_text(value: string): void;

    set_lang(value: string): void;

    set_outer_html(contents: string): void;

    set_outer_text(value: string): void;

    set_spellcheck(value: boolean): void;

    set_tab_index(value: number): void;

    set_title(value: string): void;

    set_translate(value: boolean): void;

    set_webkitdropzone(value: string): void;


}

export module DOMHTMLEmbedElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        height: number;
        name: string;
        src: string;
        type: string;
        width: number;
    }
}

export class DOMHTMLEmbedElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLEmbedElement>;


    constructor(properties?: Partial<DOMHTMLEmbedElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLEmbedElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get height(): number;
    set height(val: number);

    get name(): string;
    set name(val: string);

    get src(): string;
    set src(val: string);

    get type(): string;
    set type(val: string);

    get width(): number;
    set width(val: number);


    // Members

    get_align(): string;

    get_height(): number;

    get_name(): string;

    get_src(): string;

    get_type_attr(): string;

    get_width(): number;

    set_align(value: string): void;

    set_height(value: number): void;

    set_name(value: string): void;

    set_src(value: string): void;

    set_type_attr(value: string): void;

    set_width(value: number): void;


}

export module DOMHTMLFieldSetElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        form: DOMHTMLFormElement;
    }
}

export class DOMHTMLFieldSetElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLFieldSetElement>;


    constructor(properties?: Partial<DOMHTMLFieldSetElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLFieldSetElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get form(): DOMHTMLFormElement;


    // Members

    get_form(): DOMHTMLFormElement;


}

export module DOMHTMLFontElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        color: string;
        face: string;
        size: string;
    }
}

export class DOMHTMLFontElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLFontElement>;


    constructor(properties?: Partial<DOMHTMLFontElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLFontElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get color(): string;
    set color(val: string);

    get face(): string;
    set face(val: string);

    get size(): string;
    set size(val: string);


    // Members

    get_color(): string;

    get_face(): string;

    get_size(): string;

    set_color(value: string): void;

    set_face(value: string): void;

    set_size(value: string): void;


}

export module DOMHTMLFormElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        accept_charset: string;
        acceptCharset: string;
        action: string;
        elements: DOMHTMLCollection;
        encoding: string;
        enctype: string;
        length: number;
        method: string;
        name: string;
        target: string;
    }
}

export class DOMHTMLFormElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLFormElement>;


    constructor(properties?: Partial<DOMHTMLFormElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLFormElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get accept_charset(): string;
    set accept_charset(val: string);

    get acceptCharset(): string;
    set acceptCharset(val: string);

    get action(): string;
    set action(val: string);

    get elements(): DOMHTMLCollection;

    get encoding(): string;
    set encoding(val: string);

    get enctype(): string;
    set enctype(val: string);

    get length(): number;

    get method(): string;
    set method(val: string);

    get name(): string;
    set name(val: string);

    get target(): string;
    set target(val: string);


    // Members

    get_accept_charset(): string;

    get_action(): string;

    get_elements(): DOMHTMLCollection;

    get_encoding(): string;

    get_enctype(): string;

    get_length(): number;

    get_method(): string;

    get_name(): string;

    get_target(): string;

    reset(): void;

    set_accept_charset(value: string): void;

    set_action(value: string): void;

    set_encoding(value: string): void;

    set_enctype(value: string): void;

    set_method(value: string): void;

    set_name(value: string): void;

    set_target(value: string): void;

    submit(): void;


}

export module DOMHTMLFrameElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        content_document: DOMDocument;
        contentDocument: DOMDocument;
        content_window: DOMDOMWindow;
        contentWindow: DOMDOMWindow;
        frame_border: string;
        frameBorder: string;
        height: number;
        long_desc: string;
        longDesc: string;
        margin_height: string;
        marginHeight: string;
        margin_width: string;
        marginWidth: string;
        name: string;
        no_resize: boolean;
        noResize: boolean;
        scrolling: string;
        src: string;
        width: number;
    }
}

export class DOMHTMLFrameElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLFrameElement>;


    constructor(properties?: Partial<DOMHTMLFrameElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLFrameElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get content_document(): DOMDocument;

    get contentDocument(): DOMDocument;

    get content_window(): DOMDOMWindow;

    get contentWindow(): DOMDOMWindow;

    get frame_border(): string;
    set frame_border(val: string);

    get frameBorder(): string;
    set frameBorder(val: string);

    get height(): number;

    get long_desc(): string;
    set long_desc(val: string);

    get longDesc(): string;
    set longDesc(val: string);

    get margin_height(): string;
    set margin_height(val: string);

    get marginHeight(): string;
    set marginHeight(val: string);

    get margin_width(): string;
    set margin_width(val: string);

    get marginWidth(): string;
    set marginWidth(val: string);

    get name(): string;
    set name(val: string);

    get no_resize(): boolean;
    set no_resize(val: boolean);

    get noResize(): boolean;
    set noResize(val: boolean);

    get scrolling(): string;
    set scrolling(val: string);

    get src(): string;
    set src(val: string);

    get width(): number;


    // Members

    get_content_document(): DOMDocument;

    get_content_window(): DOMDOMWindow;

    get_frame_border(): string;

    get_height(): number;

    get_long_desc(): string;

    get_margin_height(): string;

    get_margin_width(): string;

    get_name(): string;

    get_no_resize(): boolean;

    get_scrolling(): string;

    get_src(): string;

    get_width(): number;

    set_frame_border(value: string): void;

    set_long_desc(value: string): void;

    set_margin_height(value: string): void;

    set_margin_width(value: string): void;

    set_name(value: string): void;

    set_no_resize(value: boolean): void;

    set_scrolling(value: string): void;

    set_src(value: string): void;


}

export module DOMHTMLFrameSetElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        cols: string;
        rows: string;
    }
}

export class DOMHTMLFrameSetElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLFrameSetElement>;


    constructor(properties?: Partial<DOMHTMLFrameSetElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLFrameSetElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get cols(): string;
    set cols(val: string);

    get rows(): string;
    set rows(val: string);


    // Members

    get_cols(): string;

    get_rows(): string;

    set_cols(value: string): void;

    set_rows(value: string): void;


}

export module DOMHTMLHRElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        no_shade: boolean;
        noShade: boolean;
        size: string;
        width: string;
    }
}

export class DOMHTMLHRElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLHRElement>;


    constructor(properties?: Partial<DOMHTMLHRElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLHRElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get no_shade(): boolean;
    set no_shade(val: boolean);

    get noShade(): boolean;
    set noShade(val: boolean);

    get size(): string;
    set size(val: string);

    get width(): string;
    set width(val: string);


    // Members

    get_align(): string;

    get_no_shade(): boolean;

    get_size(): string;

    get_width(): string;

    set_align(value: string): void;

    set_no_shade(value: boolean): void;

    set_size(value: string): void;

    set_width(value: string): void;


}

export module DOMHTMLHeadElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        profile: string;
    }
}

export class DOMHTMLHeadElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLHeadElement>;


    constructor(properties?: Partial<DOMHTMLHeadElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLHeadElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get profile(): string;
    set profile(val: string);


    // Members

    get_profile(): string;

    set_profile(value: string): void;


}

export module DOMHTMLHeadingElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
    }
}

export class DOMHTMLHeadingElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLHeadingElement>;


    constructor(properties?: Partial<DOMHTMLHeadingElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLHeadingElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);


    // Members

    get_align(): string;

    set_align(value: string): void;


}

export module DOMHTMLHtmlElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        version: string;
    }
}

export class DOMHTMLHtmlElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLHtmlElement>;


    constructor(properties?: Partial<DOMHTMLHtmlElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLHtmlElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get version(): string;
    set version(val: string);


    // Members

    get_version(): string;

    set_version(value: string): void;


}

export module DOMHTMLIFrameElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        content_document: DOMDocument;
        contentDocument: DOMDocument;
        content_window: DOMDOMWindow;
        contentWindow: DOMDOMWindow;
        frame_border: string;
        frameBorder: string;
        height: string;
        long_desc: string;
        longDesc: string;
        margin_height: string;
        marginHeight: string;
        margin_width: string;
        marginWidth: string;
        name: string;
        scrolling: string;
        src: string;
        width: string;
    }
}

export class DOMHTMLIFrameElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLIFrameElement>;


    constructor(properties?: Partial<DOMHTMLIFrameElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLIFrameElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get content_document(): DOMDocument;

    get contentDocument(): DOMDocument;

    get content_window(): DOMDOMWindow;

    get contentWindow(): DOMDOMWindow;

    get frame_border(): string;
    set frame_border(val: string);

    get frameBorder(): string;
    set frameBorder(val: string);

    get height(): string;
    set height(val: string);

    get long_desc(): string;
    set long_desc(val: string);

    get longDesc(): string;
    set longDesc(val: string);

    get margin_height(): string;
    set margin_height(val: string);

    get marginHeight(): string;
    set marginHeight(val: string);

    get margin_width(): string;
    set margin_width(val: string);

    get marginWidth(): string;
    set marginWidth(val: string);

    get name(): string;
    set name(val: string);

    get scrolling(): string;
    set scrolling(val: string);

    get src(): string;
    set src(val: string);

    get width(): string;
    set width(val: string);


    // Members

    get_align(): string;

    get_content_document(): DOMDocument;

    get_content_window(): DOMDOMWindow;

    get_frame_border(): string;

    get_height(): string;

    get_long_desc(): string;

    get_margin_height(): string;

    get_margin_width(): string;

    get_name(): string;

    get_scrolling(): string;

    get_src(): string;

    get_width(): string;

    set_align(value: string): void;

    set_frame_border(value: string): void;

    set_height(value: string): void;

    set_long_desc(value: string): void;

    set_margin_height(value: string): void;

    set_margin_width(value: string): void;

    set_name(value: string): void;

    set_scrolling(value: string): void;

    set_src(value: string): void;

    set_width(value: string): void;


}

export module DOMHTMLImageElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        alt: string;
        border: string;
        complete: boolean;
        height: number;
        hspace: number;
        is_map: boolean;
        isMap: boolean;
        long_desc: string;
        longDesc: string;
        lowsrc: string;
        name: string;
        natural_height: number;
        naturalHeight: number;
        natural_width: number;
        naturalWidth: number;
        src: string;
        use_map: string;
        useMap: string;
        vspace: number;
        width: number;
        x: number;
        y: number;
    }
}

export class DOMHTMLImageElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLImageElement>;


    constructor(properties?: Partial<DOMHTMLImageElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLImageElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get alt(): string;
    set alt(val: string);

    get border(): string;
    set border(val: string);

    get complete(): boolean;

    get height(): number;
    set height(val: number);

    get hspace(): number;
    set hspace(val: number);

    get is_map(): boolean;
    set is_map(val: boolean);

    get isMap(): boolean;
    set isMap(val: boolean);

    get long_desc(): string;
    set long_desc(val: string);

    get longDesc(): string;
    set longDesc(val: string);

    get lowsrc(): string;
    set lowsrc(val: string);

    get name(): string;
    set name(val: string);

    get natural_height(): number;

    get naturalHeight(): number;

    get natural_width(): number;

    get naturalWidth(): number;

    get src(): string;
    set src(val: string);

    get use_map(): string;
    set use_map(val: string);

    get useMap(): string;
    set useMap(val: string);

    get vspace(): number;
    set vspace(val: number);

    get width(): number;
    set width(val: number);

    get x(): number;

    get y(): number;


    // Members

    get_align(): string;

    get_alt(): string;

    get_border(): string;

    get_complete(): boolean;

    get_height(): number;

    get_hspace(): number;

    get_is_map(): boolean;

    get_long_desc(): string;

    get_lowsrc(): string;

    get_name(): string;

    get_natural_height(): number;

    get_natural_width(): number;

    get_src(): string;

    get_use_map(): string;

    get_vspace(): number;

    get_width(): number;

    get_x(): number;

    get_y(): number;

    set_align(value: string): void;

    set_alt(value: string): void;

    set_border(value: string): void;

    set_height(value: number): void;

    set_hspace(value: number): void;

    set_is_map(value: boolean): void;

    set_long_desc(value: string): void;

    set_lowsrc(value: string): void;

    set_name(value: string): void;

    set_src(value: string): void;

    set_use_map(value: string): void;

    set_vspace(value: number): void;

    set_width(value: number): void;


}

export module DOMHTMLInputElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        accept: string;
        align: string;
        alt: string;
        autofocus: boolean;
        capture: string;
        checked: boolean;
        default_checked: boolean;
        defaultChecked: boolean;
        default_value: string;
        defaultValue: string;
        disabled: boolean;
        files: DOMFileList;
        form: DOMHTMLFormElement;
        height: number;
        indeterminate: boolean;
        max_length: number;
        maxLength: number;
        multiple: boolean;
        name: string;
        read_only: boolean;
        readOnly: boolean;
        size: number;
        src: string;
        type: string;
        use_map: string;
        useMap: string;
        value: string;
        width: number;
        will_validate: boolean;
        willValidate: boolean;
    }
}

export class DOMHTMLInputElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLInputElement>;


    constructor(properties?: Partial<DOMHTMLInputElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLInputElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get accept(): string;
    set accept(val: string);

    get align(): string;
    set align(val: string);

    get alt(): string;
    set alt(val: string);

    get autofocus(): boolean;
    set autofocus(val: boolean);

    get capture(): string;
    set capture(val: string);

    get checked(): boolean;
    set checked(val: boolean);

    get default_checked(): boolean;
    set default_checked(val: boolean);

    get defaultChecked(): boolean;
    set defaultChecked(val: boolean);

    get default_value(): string;
    set default_value(val: string);

    get defaultValue(): string;
    set defaultValue(val: string);

    get disabled(): boolean;
    set disabled(val: boolean);

    get files(): DOMFileList;

    get form(): DOMHTMLFormElement;

    get height(): number;
    set height(val: number);

    get indeterminate(): boolean;
    set indeterminate(val: boolean);

    get max_length(): number;
    set max_length(val: number);

    get maxLength(): number;
    set maxLength(val: number);

    get multiple(): boolean;
    set multiple(val: boolean);

    get name(): string;
    set name(val: string);

    get read_only(): boolean;
    set read_only(val: boolean);

    get readOnly(): boolean;
    set readOnly(val: boolean);

    get size(): number;
    set size(val: number);

    get src(): string;
    set src(val: string);

    get type(): string;
    set type(val: string);

    get use_map(): string;
    set use_map(val: string);

    get useMap(): string;
    set useMap(val: string);

    get value(): string;
    set value(val: string);

    get width(): number;
    set width(val: number);

    get will_validate(): boolean;

    get willValidate(): boolean;


    // Members

    get_accept(): string;

    get_align(): string;

    get_alt(): string;

    get_auto_filled(): boolean;

    get_autofocus(): boolean;

    get_capture(): boolean;

    get_capture_type(): string;

    get_checked(): boolean;

    get_default_checked(): boolean;

    get_default_value(): string;

    get_disabled(): boolean;

    get_files(): DOMFileList;

    get_form(): DOMHTMLFormElement;

    get_height(): number;

    get_indeterminate(): boolean;

    get_input_type(): string;

    get_max_length(): number;

    get_multiple(): boolean;

    get_name(): string;

    get_read_only(): boolean;

    get_size(): number;

    get_src(): string;

    get_use_map(): string;

    get_value(): string;

    get_width(): number;

    get_will_validate(): boolean;

    is_edited(): boolean;

    select(): void;

    set_accept(value: string): void;

    set_align(value: string): void;

    set_alt(value: string): void;

    set_auto_filled(value: boolean): void;

    set_autofocus(value: boolean): void;

    set_capture_type(value: string): void;

    set_checked(value: boolean): void;

    set_default_checked(value: boolean): void;

    set_default_value(value: string): void;

    set_disabled(value: boolean): void;

    set_editing_value(value: string): void;

    set_files(value: DOMFileList): void;

    set_height(value: number): void;

    set_indeterminate(value: boolean): void;

    set_input_type(value: string): void;

    set_max_length(value: number): void;

    set_multiple(value: boolean): void;

    set_name(value: string): void;

    set_read_only(value: boolean): void;

    set_size(value: number): void;

    set_src(value: string): void;

    set_use_map(value: string): void;

    set_value(value: string): void;

    set_width(value: number): void;


}

export module DOMHTMLLIElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        type: string;
        value: number;
    }
}

export class DOMHTMLLIElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLLIElement>;


    constructor(properties?: Partial<DOMHTMLLIElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLLIElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get type(): string;
    set type(val: string);

    get value(): number;
    set value(val: number);


    // Members

    get_type_attr(): string;

    get_value(): number;

    set_type_attr(value: string): void;

    set_value(value: number): void;


}

export module DOMHTMLLabelElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        form: DOMHTMLFormElement;
        html_for: string;
        htmlFor: string;
    }
}

export class DOMHTMLLabelElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLLabelElement>;


    constructor(properties?: Partial<DOMHTMLLabelElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLLabelElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get form(): DOMHTMLFormElement;

    get html_for(): string;
    set html_for(val: string);

    get htmlFor(): string;
    set htmlFor(val: string);


    // Members

    get_form(): DOMHTMLFormElement;

    get_html_for(): string;

    set_html_for(value: string): void;


}

export module DOMHTMLLegendElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        form: DOMHTMLFormElement;
    }
}

export class DOMHTMLLegendElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLLegendElement>;


    constructor(properties?: Partial<DOMHTMLLegendElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLLegendElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get form(): DOMHTMLFormElement;


    // Members

    get_align(): string;

    get_form(): DOMHTMLFormElement;

    set_align(value: string): void;


}

export module DOMHTMLLinkElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        charset: string;
        disabled: boolean;
        href: string;
        hreflang: string;
        media: string;
        rel: string;
        rev: string;
        sheet: DOMStyleSheet;
        sizes: DOMDOMTokenList;
        target: string;
        type: string;
    }
}

export class DOMHTMLLinkElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLLinkElement>;


    constructor(properties?: Partial<DOMHTMLLinkElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLLinkElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get charset(): string;
    set charset(val: string);

    get disabled(): boolean;
    set disabled(val: boolean);

    get href(): string;
    set href(val: string);

    get hreflang(): string;
    set hreflang(val: string);

    get media(): string;
    set media(val: string);

    get rel(): string;
    set rel(val: string);

    get rev(): string;
    set rev(val: string);

    get sheet(): DOMStyleSheet;

    get sizes(): DOMDOMTokenList;

    get target(): string;
    set target(val: string);

    get type(): string;
    set type(val: string);


    // Members

    get_charset(): string;

    get_disabled(): boolean;

    get_href(): string;

    get_hreflang(): string;

    get_media(): string;

    get_rel(): string;

    get_rev(): string;

    get_sheet(): DOMStyleSheet;

    get_sizes(): DOMDOMTokenList;

    get_target(): string;

    get_type_attr(): string;

    set_charset(value: string): void;

    set_disabled(value: boolean): void;

    set_href(value: string): void;

    set_hreflang(value: string): void;

    set_media(value: string): void;

    set_rel(value: string): void;

    set_rev(value: string): void;

    set_sizes(value: string): void;

    set_target(value: string): void;

    set_type_attr(value: string): void;


}

export module DOMHTMLMapElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        areas: DOMHTMLCollection;
        name: string;
    }
}

export class DOMHTMLMapElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLMapElement>;


    constructor(properties?: Partial<DOMHTMLMapElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLMapElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get areas(): DOMHTMLCollection;

    get name(): string;
    set name(val: string);


    // Members

    get_areas(): DOMHTMLCollection;

    get_name(): string;

    set_name(value: string): void;


}

export module DOMHTMLMarqueeElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMHTMLMarqueeElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLMarqueeElement>;


    constructor(properties?: Partial<DOMHTMLMarqueeElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLMarqueeElement.ConstructorProperties>, ...args: any[]): void;


    // Members

    start(): void;

    stop(): void;


}

export module DOMHTMLMenuElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        compact: boolean;
    }
}

export class DOMHTMLMenuElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLMenuElement>;


    constructor(properties?: Partial<DOMHTMLMenuElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLMenuElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get compact(): boolean;
    set compact(val: boolean);


    // Members

    get_compact(): boolean;

    set_compact(value: boolean): void;


}

export module DOMHTMLMetaElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        content: string;
        http_equiv: string;
        httpEquiv: string;
        name: string;
        scheme: string;
    }
}

export class DOMHTMLMetaElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLMetaElement>;


    constructor(properties?: Partial<DOMHTMLMetaElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLMetaElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get content(): string;
    set content(val: string);

    get http_equiv(): string;
    set http_equiv(val: string);

    get httpEquiv(): string;
    set httpEquiv(val: string);

    get name(): string;
    set name(val: string);

    get scheme(): string;
    set scheme(val: string);


    // Members

    get_content(): string;

    get_http_equiv(): string;

    get_name(): string;

    get_scheme(): string;

    set_content(value: string): void;

    set_http_equiv(value: string): void;

    set_name(value: string): void;

    set_scheme(value: string): void;


}

export module DOMHTMLModElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        cite: string;
        date_time: string;
        dateTime: string;
    }
}

export class DOMHTMLModElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLModElement>;


    constructor(properties?: Partial<DOMHTMLModElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLModElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get cite(): string;
    set cite(val: string);

    get date_time(): string;
    set date_time(val: string);

    get dateTime(): string;
    set dateTime(val: string);


    // Members

    get_cite(): string;

    get_date_time(): string;

    set_cite(value: string): void;

    set_date_time(value: string): void;


}

export module DOMHTMLOListElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        compact: boolean;
        start: number;
        type: string;
    }
}

export class DOMHTMLOListElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLOListElement>;


    constructor(properties?: Partial<DOMHTMLOListElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLOListElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get compact(): boolean;
    set compact(val: boolean);

    get start(): number;
    set start(val: number);

    get type(): string;
    set type(val: string);


    // Members

    get_compact(): boolean;

    get_start(): number;

    get_type_attr(): string;

    set_compact(value: boolean): void;

    set_start(value: number): void;

    set_type_attr(value: string): void;


}

export module DOMHTMLObjectElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        archive: string;
        border: string;
        code: string;
        code_base: string;
        codeBase: string;
        code_type: string;
        codeType: string;
        content_document: DOMDocument;
        contentDocument: DOMDocument;
        data: string;
        declare: boolean;
        form: DOMHTMLFormElement;
        height: string;
        hspace: number;
        name: string;
        standby: string;
        type: string;
        use_map: string;
        useMap: string;
        vspace: number;
        width: string;
    }
}

export class DOMHTMLObjectElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLObjectElement>;


    constructor(properties?: Partial<DOMHTMLObjectElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLObjectElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get archive(): string;
    set archive(val: string);

    get border(): string;
    set border(val: string);

    get code(): string;
    set code(val: string);

    get code_base(): string;
    set code_base(val: string);

    get codeBase(): string;
    set codeBase(val: string);

    get code_type(): string;
    set code_type(val: string);

    get codeType(): string;
    set codeType(val: string);

    get content_document(): DOMDocument;

    get contentDocument(): DOMDocument;

    get data(): string;
    set data(val: string);

    get declare(): boolean;
    set declare(val: boolean);

    get form(): DOMHTMLFormElement;

    get height(): string;
    set height(val: string);

    get hspace(): number;
    set hspace(val: number);

    get name(): string;
    set name(val: string);

    get standby(): string;
    set standby(val: string);

    get type(): string;
    set type(val: string);

    get use_map(): string;
    set use_map(val: string);

    get useMap(): string;
    set useMap(val: string);

    get vspace(): number;
    set vspace(val: number);

    get width(): string;
    set width(val: string);


    // Members

    get_align(): string;

    get_archive(): string;

    get_border(): string;

    get_code(): string;

    get_code_base(): string;

    get_code_type(): string;

    get_content_document(): DOMDocument;

    get_data(): string;
    // Conflicted with GObject.Object.get_data
    get_data(...args: never[]): any;

    get_declare(): boolean;

    get_form(): DOMHTMLFormElement;

    get_height(): string;

    get_hspace(): number;

    get_name(): string;

    get_standby(): string;

    get_type_attr(): string;

    get_use_map(): string;

    get_vspace(): number;

    get_width(): string;

    set_align(value: string): void;

    set_archive(value: string): void;

    set_border(value: string): void;

    set_code(value: string): void;

    set_code_base(value: string): void;

    set_code_type(value: string): void;

    set_data(value: string): void;

    set_declare(value: boolean): void;

    set_height(value: string): void;

    set_hspace(value: number): void;

    set_name(value: string): void;

    set_standby(value: string): void;

    set_type_attr(value: string): void;

    set_use_map(value: string): void;

    set_vspace(value: number): void;

    set_width(value: string): void;


}

export module DOMHTMLOptGroupElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        disabled: boolean;
        label: string;
    }
}

export class DOMHTMLOptGroupElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLOptGroupElement>;


    constructor(properties?: Partial<DOMHTMLOptGroupElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLOptGroupElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get disabled(): boolean;
    set disabled(val: boolean);

    get label(): string;
    set label(val: string);


    // Members

    get_disabled(): boolean;

    get_label(): string;

    set_disabled(value: boolean): void;

    set_label(value: string): void;


}

export module DOMHTMLOptionElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        default_selected: boolean;
        defaultSelected: boolean;
        disabled: boolean;
        form: DOMHTMLFormElement;
        index: number;
        label: string;
        selected: boolean;
        text: string;
        value: string;
    }
}

export class DOMHTMLOptionElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLOptionElement>;


    constructor(properties?: Partial<DOMHTMLOptionElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLOptionElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get default_selected(): boolean;
    set default_selected(val: boolean);

    get defaultSelected(): boolean;
    set defaultSelected(val: boolean);

    get disabled(): boolean;
    set disabled(val: boolean);

    get form(): DOMHTMLFormElement;

    get index(): number;

    get label(): string;
    set label(val: string);

    get selected(): boolean;
    set selected(val: boolean);

    get text(): string;

    get value(): string;
    set value(val: string);


    // Members

    get_default_selected(): boolean;

    get_disabled(): boolean;

    get_form(): DOMHTMLFormElement;

    get_index(): number;

    get_label(): string;

    get_selected(): boolean;

    get_text(): string;

    get_value(): string;

    set_default_selected(value: boolean): void;

    set_disabled(value: boolean): void;

    set_label(value: string): void;

    set_selected(value: boolean): void;

    set_value(value: string): void;


}

export module DOMHTMLOptionsCollection {

    export interface ConstructorProperties extends DOMHTMLCollection.ConstructorProperties {
        [key: string]: any;

        length: number;
        selected_index: number;
        selectedIndex: number;
    }
}

export class DOMHTMLOptionsCollection extends DOMHTMLCollection {
    static $gtype: GObject.GType<DOMHTMLOptionsCollection>;


    constructor(properties?: Partial<DOMHTMLOptionsCollection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLOptionsCollection.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;

    get selected_index(): number;
    set selected_index(val: number);

    get selectedIndex(): number;
    set selectedIndex(val: number);


    // Members

    get_length(): number;

    get_selected_index(): number;

    named_item(name: string): DOMNode;

    set_selected_index(value: number): void;


}

export module DOMHTMLParagraphElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
    }
}

export class DOMHTMLParagraphElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLParagraphElement>;


    constructor(properties?: Partial<DOMHTMLParagraphElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLParagraphElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);


    // Members

    get_align(): string;

    set_align(value: string): void;


}

export module DOMHTMLParamElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        name: string;
        type: string;
        value: string;
        value_type: string;
        valueType: string;
    }
}

export class DOMHTMLParamElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLParamElement>;


    constructor(properties?: Partial<DOMHTMLParamElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLParamElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get name(): string;
    set name(val: string);

    get type(): string;
    set type(val: string);

    get value(): string;
    set value(val: string);

    get value_type(): string;
    set value_type(val: string);

    get valueType(): string;
    set valueType(val: string);


    // Members

    get_name(): string;

    get_type_attr(): string;

    get_value(): string;

    get_value_type(): string;

    set_name(value: string): void;

    set_type_attr(value: string): void;

    set_value(value: string): void;

    set_value_type(value: string): void;


}

export module DOMHTMLPreElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        width: number;
        wrap: boolean;
    }
}

export class DOMHTMLPreElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLPreElement>;


    constructor(properties?: Partial<DOMHTMLPreElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLPreElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get width(): number;
    set width(val: number);

    get wrap(): boolean;
    set wrap(val: boolean);


    // Members

    get_width(): number;

    get_wrap(): boolean;

    set_width(value: number): void;

    set_wrap(value: boolean): void;


}

export module DOMHTMLQuoteElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        cite: string;
    }
}

export class DOMHTMLQuoteElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLQuoteElement>;


    constructor(properties?: Partial<DOMHTMLQuoteElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLQuoteElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get cite(): string;
    set cite(val: string);


    // Members

    get_cite(): string;

    set_cite(value: string): void;


}

export module DOMHTMLScriptElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        charset: string;
        defer: boolean;
        event: string;
        html_for: string;
        htmlFor: string;
        src: string;
        text: string;
        type: string;
    }
}

export class DOMHTMLScriptElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLScriptElement>;


    constructor(properties?: Partial<DOMHTMLScriptElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLScriptElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get charset(): string;
    set charset(val: string);

    get defer(): boolean;
    set defer(val: boolean);

    get event(): string;
    set event(val: string);

    get html_for(): string;
    set html_for(val: string);

    get htmlFor(): string;
    set htmlFor(val: string);

    get src(): string;
    set src(val: string);

    get text(): string;
    set text(val: string);

    get type(): string;
    set type(val: string);


    // Members

    get_charset(): string;

    get_defer(): boolean;

    get_event(): string;

    get_html_for(): string;

    get_src(): string;

    get_text(): string;

    get_type_attr(): string;

    set_charset(value: string): void;

    set_defer(value: boolean): void;

    set_event(value: string): void;

    set_html_for(value: string): void;

    set_src(value: string): void;

    set_text(value: string): void;

    set_type_attr(value: string): void;


}

export module DOMHTMLSelectElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        autofocus: boolean;
        disabled: boolean;
        form: DOMHTMLFormElement;
        length: number;
        multiple: boolean;
        name: string;
        options: DOMHTMLOptionsCollection;
        selected_index: number;
        selectedIndex: number;
        size: number;
        type: string;
        value: string;
        will_validate: boolean;
        willValidate: boolean;
    }
}

export class DOMHTMLSelectElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLSelectElement>;


    constructor(properties?: Partial<DOMHTMLSelectElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLSelectElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get autofocus(): boolean;
    set autofocus(val: boolean);

    get disabled(): boolean;
    set disabled(val: boolean);

    get form(): DOMHTMLFormElement;

    get length(): number;
    set length(val: number);

    get multiple(): boolean;
    set multiple(val: boolean);

    get name(): string;
    set name(val: string);

    get options(): DOMHTMLOptionsCollection;

    get selected_index(): number;
    set selected_index(val: number);

    get selectedIndex(): number;
    set selectedIndex(val: number);

    get size(): number;
    set size(val: number);

    get type(): string;

    get value(): string;
    set value(val: string);

    get will_validate(): boolean;

    get willValidate(): boolean;


    // Members

    add(element: DOMHTMLElement, before: DOMHTMLElement): void;

    get_autofocus(): boolean;

    get_disabled(): boolean;

    get_form(): DOMHTMLFormElement;

    get_length(): number;

    get_multiple(): boolean;

    get_name(): string;

    get_options(): DOMHTMLOptionsCollection;

    get_select_type(): string;

    get_selected_index(): number;

    get_size(): number;

    get_value(): string;

    get_will_validate(): boolean;

    item(index: number): DOMNode;

    named_item(name: string): DOMNode;

    remove(index: number): void;
    // Conflicted with WebKit2WebExtension.DOMElement.remove
    remove(...args: never[]): any;

    set_autofocus(value: boolean): void;

    set_disabled(value: boolean): void;

    set_length(value: number): void;

    set_multiple(value: boolean): void;

    set_name(value: string): void;

    set_selected_index(value: number): void;

    set_size(value: number): void;

    set_value(value: string): void;


}

export module DOMHTMLStyleElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        disabled: boolean;
        media: string;
        sheet: DOMStyleSheet;
        type: string;
    }
}

export class DOMHTMLStyleElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLStyleElement>;


    constructor(properties?: Partial<DOMHTMLStyleElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLStyleElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get disabled(): boolean;
    set disabled(val: boolean);

    get media(): string;
    set media(val: string);

    get sheet(): DOMStyleSheet;

    get type(): string;
    set type(val: string);


    // Members

    get_disabled(): boolean;

    get_media(): string;

    get_sheet(): DOMStyleSheet;

    get_type_attr(): string;

    set_disabled(value: boolean): void;

    set_media(value: string): void;

    set_type_attr(value: string): void;


}

export module DOMHTMLTableCaptionElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
    }
}

export class DOMHTMLTableCaptionElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTableCaptionElement>;


    constructor(properties?: Partial<DOMHTMLTableCaptionElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTableCaptionElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);


    // Members

    get_align(): string;

    set_align(value: string): void;


}

export module DOMHTMLTableCellElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        abbr: string;
        align: string;
        axis: string;
        bg_color: string;
        bgColor: string;
        cell_index: number;
        cellIndex: number;
        ch: string;
        ch_off: string;
        chOff: string;
        col_span: number;
        colSpan: number;
        headers: string;
        height: string;
        no_wrap: boolean;
        noWrap: boolean;
        row_span: number;
        rowSpan: number;
        scope: string;
        v_align: string;
        vAlign: string;
        width: string;
    }
}

export class DOMHTMLTableCellElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTableCellElement>;


    constructor(properties?: Partial<DOMHTMLTableCellElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTableCellElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get abbr(): string;
    set abbr(val: string);

    get align(): string;
    set align(val: string);

    get axis(): string;
    set axis(val: string);

    get bg_color(): string;
    set bg_color(val: string);

    get bgColor(): string;
    set bgColor(val: string);

    get cell_index(): number;

    get cellIndex(): number;

    get ch(): string;
    set ch(val: string);

    get ch_off(): string;
    set ch_off(val: string);

    get chOff(): string;
    set chOff(val: string);

    get col_span(): number;
    set col_span(val: number);

    get colSpan(): number;
    set colSpan(val: number);

    get headers(): string;
    set headers(val: string);

    get height(): string;
    set height(val: string);

    get no_wrap(): boolean;
    set no_wrap(val: boolean);

    get noWrap(): boolean;
    set noWrap(val: boolean);

    get row_span(): number;
    set row_span(val: number);

    get rowSpan(): number;
    set rowSpan(val: number);

    get scope(): string;
    set scope(val: string);

    get v_align(): string;
    set v_align(val: string);

    get vAlign(): string;
    set vAlign(val: string);

    get width(): string;
    set width(val: string);


    // Members

    get_abbr(): string;

    get_align(): string;

    get_axis(): string;

    get_bg_color(): string;

    get_cell_index(): number;

    get_ch(): string;

    get_ch_off(): string;

    get_col_span(): number;

    get_headers(): string;

    get_height(): string;

    get_no_wrap(): boolean;

    get_row_span(): number;

    get_scope(): string;

    get_v_align(): string;

    get_width(): string;

    set_abbr(value: string): void;

    set_align(value: string): void;

    set_axis(value: string): void;

    set_bg_color(value: string): void;

    set_ch(value: string): void;

    set_ch_off(value: string): void;

    set_col_span(value: number): void;

    set_headers(value: string): void;

    set_height(value: string): void;

    set_no_wrap(value: boolean): void;

    set_row_span(value: number): void;

    set_scope(value: string): void;

    set_v_align(value: string): void;

    set_width(value: string): void;


}

export module DOMHTMLTableColElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        ch: string;
        ch_off: string;
        chOff: string;
        span: number;
        v_align: string;
        vAlign: string;
        width: string;
    }
}

export class DOMHTMLTableColElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTableColElement>;


    constructor(properties?: Partial<DOMHTMLTableColElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTableColElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get ch(): string;
    set ch(val: string);

    get ch_off(): string;
    set ch_off(val: string);

    get chOff(): string;
    set chOff(val: string);

    get span(): number;
    set span(val: number);

    get v_align(): string;
    set v_align(val: string);

    get vAlign(): string;
    set vAlign(val: string);

    get width(): string;
    set width(val: string);


    // Members

    get_align(): string;

    get_ch(): string;

    get_ch_off(): string;

    get_span(): number;

    get_v_align(): string;

    get_width(): string;

    set_align(value: string): void;

    set_ch(value: string): void;

    set_ch_off(value: string): void;

    set_span(value: number): void;

    set_v_align(value: string): void;

    set_width(value: string): void;


}

export module DOMHTMLTableElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        bg_color: string;
        bgColor: string;
        border: string;
        caption: DOMHTMLTableCaptionElement;
        cell_padding: string;
        cellPadding: string;
        cell_spacing: string;
        cellSpacing: string;
        rows: DOMHTMLCollection;
        rules: string;
        summary: string;
        t_bodies: DOMHTMLCollection;
        tBodies: DOMHTMLCollection;
        t_foot: DOMHTMLTableSectionElement;
        tFoot: DOMHTMLTableSectionElement;
        t_head: DOMHTMLTableSectionElement;
        tHead: DOMHTMLTableSectionElement;
        width: string;
    }
}

export class DOMHTMLTableElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTableElement>;


    constructor(properties?: Partial<DOMHTMLTableElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTableElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get bg_color(): string;
    set bg_color(val: string);

    get bgColor(): string;
    set bgColor(val: string);

    get border(): string;
    set border(val: string);

    get caption(): DOMHTMLTableCaptionElement;

    get cell_padding(): string;
    set cell_padding(val: string);

    get cellPadding(): string;
    set cellPadding(val: string);

    get cell_spacing(): string;
    set cell_spacing(val: string);

    get cellSpacing(): string;
    set cellSpacing(val: string);

    get rows(): DOMHTMLCollection;

    get rules(): string;
    set rules(val: string);

    get summary(): string;
    set summary(val: string);

    get t_bodies(): DOMHTMLCollection;

    get tBodies(): DOMHTMLCollection;

    get t_foot(): DOMHTMLTableSectionElement;

    get tFoot(): DOMHTMLTableSectionElement;

    get t_head(): DOMHTMLTableSectionElement;

    get tHead(): DOMHTMLTableSectionElement;

    get width(): string;
    set width(val: string);


    // Members

    create_caption(): DOMHTMLElement;

    create_t_foot(): DOMHTMLElement;

    create_t_head(): DOMHTMLElement;

    delete_caption(): void;

    delete_row(index: number): void;

    delete_t_foot(): void;

    delete_t_head(): void;

    get_align(): string;

    get_bg_color(): string;

    get_border(): string;

    get_caption(): DOMHTMLTableCaptionElement;

    get_cell_padding(): string;

    get_cell_spacing(): string;

    get_rows(): DOMHTMLCollection;

    get_rules(): string;

    get_summary(): string;

    get_t_bodies(): DOMHTMLCollection;

    get_t_foot(): DOMHTMLTableSectionElement;

    get_t_head(): DOMHTMLTableSectionElement;

    get_width(): string;

    insert_row(index: number): DOMHTMLElement;

    set_align(value: string): void;

    set_bg_color(value: string): void;

    set_border(value: string): void;

    set_caption(value: DOMHTMLTableCaptionElement): void;

    set_cell_padding(value: string): void;

    set_cell_spacing(value: string): void;

    set_rules(value: string): void;

    set_summary(value: string): void;

    set_t_foot(value: DOMHTMLTableSectionElement): void;

    set_t_head(value: DOMHTMLTableSectionElement): void;

    set_width(value: string): void;


}

export module DOMHTMLTableRowElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        bg_color: string;
        bgColor: string;
        cells: DOMHTMLCollection;
        ch: string;
        ch_off: string;
        chOff: string;
        row_index: number;
        rowIndex: number;
        section_row_index: number;
        sectionRowIndex: number;
        v_align: string;
        vAlign: string;
    }
}

export class DOMHTMLTableRowElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTableRowElement>;


    constructor(properties?: Partial<DOMHTMLTableRowElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTableRowElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get bg_color(): string;
    set bg_color(val: string);

    get bgColor(): string;
    set bgColor(val: string);

    get cells(): DOMHTMLCollection;

    get ch(): string;
    set ch(val: string);

    get ch_off(): string;
    set ch_off(val: string);

    get chOff(): string;
    set chOff(val: string);

    get row_index(): number;

    get rowIndex(): number;

    get section_row_index(): number;

    get sectionRowIndex(): number;

    get v_align(): string;
    set v_align(val: string);

    get vAlign(): string;
    set vAlign(val: string);


    // Members

    delete_cell(index: number): void;

    get_align(): string;

    get_bg_color(): string;

    get_cells(): DOMHTMLCollection;

    get_ch(): string;

    get_ch_off(): string;

    get_row_index(): number;

    get_section_row_index(): number;

    get_v_align(): string;

    insert_cell(index: number): DOMHTMLElement;

    set_align(value: string): void;

    set_bg_color(value: string): void;

    set_ch(value: string): void;

    set_ch_off(value: string): void;

    set_v_align(value: string): void;


}

export module DOMHTMLTableSectionElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        align: string;
        ch: string;
        ch_off: string;
        chOff: string;
        rows: DOMHTMLCollection;
        v_align: string;
        vAlign: string;
    }
}

export class DOMHTMLTableSectionElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTableSectionElement>;


    constructor(properties?: Partial<DOMHTMLTableSectionElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTableSectionElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get align(): string;
    set align(val: string);

    get ch(): string;
    set ch(val: string);

    get ch_off(): string;
    set ch_off(val: string);

    get chOff(): string;
    set chOff(val: string);

    get rows(): DOMHTMLCollection;

    get v_align(): string;
    set v_align(val: string);

    get vAlign(): string;
    set vAlign(val: string);


    // Members

    delete_row(index: number): void;

    get_align(): string;

    get_ch(): string;

    get_ch_off(): string;

    get_rows(): DOMHTMLCollection;

    get_v_align(): string;

    insert_row(index: number): DOMHTMLElement;

    set_align(value: string): void;

    set_ch(value: string): void;

    set_ch_off(value: string): void;

    set_v_align(value: string): void;


}

export module DOMHTMLTextAreaElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        autofocus: boolean;
        cols: number;
        default_value: string;
        defaultValue: string;
        disabled: boolean;
        form: DOMHTMLFormElement;
        name: string;
        read_only: boolean;
        readOnly: boolean;
        rows: number;
        selection_end: number;
        selectionEnd: number;
        selection_start: number;
        selectionStart: number;
        type: string;
        value: string;
        will_validate: boolean;
        willValidate: boolean;
    }
}

export class DOMHTMLTextAreaElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTextAreaElement>;


    constructor(properties?: Partial<DOMHTMLTextAreaElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTextAreaElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get autofocus(): boolean;
    set autofocus(val: boolean);

    get cols(): number;
    set cols(val: number);

    get default_value(): string;
    set default_value(val: string);

    get defaultValue(): string;
    set defaultValue(val: string);

    get disabled(): boolean;
    set disabled(val: boolean);

    get form(): DOMHTMLFormElement;

    get name(): string;
    set name(val: string);

    get read_only(): boolean;
    set read_only(val: boolean);

    get readOnly(): boolean;
    set readOnly(val: boolean);

    get rows(): number;
    set rows(val: number);

    get selection_end(): number;
    set selection_end(val: number);

    get selectionEnd(): number;
    set selectionEnd(val: number);

    get selection_start(): number;
    set selection_start(val: number);

    get selectionStart(): number;
    set selectionStart(val: number);

    get type(): string;

    get value(): string;
    set value(val: string);

    get will_validate(): boolean;

    get willValidate(): boolean;


    // Members

    get_area_type(): string;

    get_autofocus(): boolean;

    get_cols(): number;

    get_default_value(): string;

    get_disabled(): boolean;

    get_form(): DOMHTMLFormElement;

    get_name(): string;

    get_read_only(): boolean;

    get_rows(): number;

    get_selection_end(): number;

    get_selection_start(): number;

    get_value(): string;

    get_will_validate(): boolean;

    is_edited(): boolean;

    select(): void;

    set_autofocus(value: boolean): void;

    set_cols(value: number): void;

    set_default_value(value: string): void;

    set_disabled(value: boolean): void;

    set_name(value: string): void;

    set_read_only(value: boolean): void;

    set_rows(value: number): void;

    set_selection_end(value: number): void;

    set_selection_range(start: number, end: number, direction: string): void;

    set_selection_start(value: number): void;

    set_value(value: string): void;


}

export module DOMHTMLTitleElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        text: string;
    }
}

export class DOMHTMLTitleElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLTitleElement>;


    constructor(properties?: Partial<DOMHTMLTitleElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLTitleElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get text(): string;
    set text(val: string);


    // Members

    get_text(): string;

    set_text(value: string): void;


}

export module DOMHTMLUListElement {

    export interface ConstructorProperties extends DOMHTMLElement.ConstructorProperties {
        [key: string]: any;

        compact: boolean;
        type: string;
    }
}

export class DOMHTMLUListElement extends DOMHTMLElement implements DOMEventTarget {
    static $gtype: GObject.GType<DOMHTMLUListElement>;


    constructor(properties?: Partial<DOMHTMLUListElement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMHTMLUListElement.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get compact(): boolean;
    set compact(val: boolean);

    get type(): string;
    set type(val: string);


    // Members

    get_compact(): boolean;

    get_type_attr(): string;

    set_compact(value: boolean): void;

    set_type_attr(value: string): void;


}

export module DOMKeyboardEvent {

    export interface ConstructorProperties extends DOMUIEvent.ConstructorProperties {
        [key: string]: any;

        alt_graph_key: boolean;
        altGraphKey: boolean;
        alt_key: boolean;
        altKey: boolean;
        ctrl_key: boolean;
        ctrlKey: boolean;
        key_identifier: string;
        keyIdentifier: string;
        key_location: number;
        keyLocation: number;
        meta_key: boolean;
        metaKey: boolean;
        shift_key: boolean;
        shiftKey: boolean;
    }
}

export class DOMKeyboardEvent extends DOMUIEvent {
    static $gtype: GObject.GType<DOMKeyboardEvent>;


    constructor(properties?: Partial<DOMKeyboardEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMKeyboardEvent.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get alt_graph_key(): boolean;

    get altGraphKey(): boolean;

    get alt_key(): boolean;

    get altKey(): boolean;

    get ctrl_key(): boolean;

    get ctrlKey(): boolean;

    get key_identifier(): string;

    get keyIdentifier(): string;

    get key_location(): number;

    get keyLocation(): number;

    get meta_key(): boolean;

    get metaKey(): boolean;

    get shift_key(): boolean;

    get shiftKey(): boolean;


    // Members

    get_alt_graph_key(): boolean;

    get_alt_key(): boolean;

    get_ctrl_key(): boolean;

    get_key_identifier(): string;

    get_key_location(): number;

    get_meta_key(): boolean;

    get_modifier_state(keyIdentifierArg: string): boolean;

    get_shift_key(): boolean;

    init_keyboard_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, keyIdentifier: string, location: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean): void;


}

export module DOMMediaList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
        media_text: string;
        mediaText: string;
    }
}

export class DOMMediaList extends DOMObject {
    static $gtype: GObject.GType<DOMMediaList>;


    constructor(properties?: Partial<DOMMediaList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMMediaList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;

    get media_text(): string;
    set media_text(val: string);

    get mediaText(): string;
    set mediaText(val: string);


    // Members

    append_medium(newMedium: string): void;

    delete_medium(oldMedium: string): void;

    get_length(): number;

    get_media_text(): string;

    item(index: number): string;

    set_media_text(value: string): void;


}

export module DOMMouseEvent {

    export interface ConstructorProperties extends DOMUIEvent.ConstructorProperties {
        [key: string]: any;

        alt_key: boolean;
        altKey: boolean;
        button: number;
        client_x: number;
        clientX: number;
        client_y: number;
        clientY: number;
        ctrl_key: boolean;
        ctrlKey: boolean;
        from_element: DOMNode;
        fromElement: DOMNode;
        meta_key: boolean;
        metaKey: boolean;
        offset_x: number;
        offsetX: number;
        offset_y: number;
        offsetY: number;
        related_target: DOMEventTarget;
        relatedTarget: DOMEventTarget;
        screen_x: number;
        screenX: number;
        screen_y: number;
        screenY: number;
        shift_key: boolean;
        shiftKey: boolean;
        to_element: DOMNode;
        toElement: DOMNode;
        x: number;
        y: number;
    }
}

export class DOMMouseEvent extends DOMUIEvent {
    static $gtype: GObject.GType<DOMMouseEvent>;


    constructor(properties?: Partial<DOMMouseEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMMouseEvent.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get alt_key(): boolean;

    get altKey(): boolean;

    get button(): number;

    get client_x(): number;

    get clientX(): number;

    get client_y(): number;

    get clientY(): number;

    get ctrl_key(): boolean;

    get ctrlKey(): boolean;

    get from_element(): DOMNode;

    get fromElement(): DOMNode;

    get meta_key(): boolean;

    get metaKey(): boolean;

    get offset_x(): number;

    get offsetX(): number;

    get offset_y(): number;

    get offsetY(): number;

    get related_target(): DOMEventTarget;

    get relatedTarget(): DOMEventTarget;

    get screen_x(): number;

    get screenX(): number;

    get screen_y(): number;

    get screenY(): number;

    get shift_key(): boolean;

    get shiftKey(): boolean;

    get to_element(): DOMNode;

    get toElement(): DOMNode;

    get x(): number;

    get y(): number;


    // Members

    get_alt_key(): boolean;

    get_button(): number;

    get_client_x(): number;

    get_client_y(): number;

    get_ctrl_key(): boolean;

    get_from_element(): DOMNode;

    get_meta_key(): boolean;

    get_offset_x(): number;

    get_offset_y(): number;

    get_related_target(): DOMEventTarget;

    get_screen_x(): number;

    get_screen_y(): number;

    get_shift_key(): boolean;

    get_to_element(): DOMNode;

    get_x(): number;

    get_y(): number;

    init_mouse_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: DOMEventTarget): void;


}

export module DOMNamedNodeMap {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMNamedNodeMap extends DOMObject {
    static $gtype: GObject.GType<DOMNamedNodeMap>;


    constructor(properties?: Partial<DOMNamedNodeMap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMNamedNodeMap.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    get_named_item(name: string): DOMNode;

    get_named_item_ns(namespaceURI: string, localName: string): DOMNode;

    item(index: number): DOMNode;

    remove_named_item(name: string): DOMNode;

    remove_named_item_ns(namespaceURI: string, localName: string): DOMNode;

    set_named_item(node: DOMNode): DOMNode;

    set_named_item_ns(node: DOMNode): DOMNode;


}

export module DOMNode {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        base_uri: string;
        baseUri: string;
        child_nodes: DOMNodeList;
        childNodes: DOMNodeList;
        first_child: DOMNode;
        firstChild: DOMNode;
        last_child: DOMNode;
        lastChild: DOMNode;
        next_sibling: DOMNode;
        nextSibling: DOMNode;
        node_name: string;
        nodeName: string;
        node_type: number;
        nodeType: number;
        node_value: string;
        nodeValue: string;
        owner_document: DOMDocument;
        ownerDocument: DOMDocument;
        parent_element: DOMElement;
        parentElement: DOMElement;
        parent_node: DOMNode;
        parentNode: DOMNode;
        previous_sibling: DOMNode;
        previousSibling: DOMNode;
        text_content: string;
        textContent: string;
    }
}

export class DOMNode extends DOMObject implements DOMEventTarget {
    static $gtype: GObject.GType<DOMNode>;


    constructor(properties?: Partial<DOMNode.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMNode.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get base_uri(): string;

    get baseUri(): string;

    get child_nodes(): DOMNodeList;

    get childNodes(): DOMNodeList;

    get first_child(): DOMNode;

    get firstChild(): DOMNode;

    get last_child(): DOMNode;

    get lastChild(): DOMNode;

    get next_sibling(): DOMNode;

    get nextSibling(): DOMNode;

    get node_name(): string;

    get nodeName(): string;

    get node_type(): number;

    get nodeType(): number;

    get node_value(): string;
    set node_value(val: string);

    get nodeValue(): string;
    set nodeValue(val: string);

    get owner_document(): DOMDocument;

    get ownerDocument(): DOMDocument;

    get parent_element(): DOMElement;

    get parentElement(): DOMElement;

    get parent_node(): DOMNode;

    get parentNode(): DOMNode;

    get previous_sibling(): DOMNode;

    get previousSibling(): DOMNode;

    get text_content(): string;
    set text_content(val: string);

    get textContent(): string;
    set textContent(val: string);


    // Members

    append_child(newChild: DOMNode): DOMNode;

    clone_node(deep: boolean): DOMNode;

    clone_node_with_error(deep: boolean): DOMNode;

    compare_document_position(other: DOMNode): number;

    contains(other: DOMNode): boolean;

    get_base_uri(): string;

    get_child_nodes(): DOMNodeList;

    get_first_child(): DOMNode;

    get_last_child(): DOMNode;

    get_local_name(): string;

    get_namespace_uri(): string;

    get_next_sibling(): DOMNode;

    get_node_name(): string;

    get_node_type(): number;

    get_node_value(): string;

    get_owner_document(): DOMDocument;

    get_parent_element(): DOMElement;

    get_parent_node(): DOMNode;

    get_prefix(): string;

    get_previous_sibling(): DOMNode;

    get_text_content(): string;

    has_child_nodes(): boolean;

    insert_before(newChild: DOMNode, refChild?: DOMNode | null): DOMNode;

    is_default_namespace(namespaceURI: string): boolean;

    is_equal_node(other: DOMNode): boolean;

    is_same_node(other: DOMNode): boolean;

    is_supported(feature: string, version: string): boolean;

    lookup_namespace_uri(prefix: string): string;

    lookup_prefix(namespaceURI: string): string;

    normalize(): void;

    remove_child(oldChild: DOMNode): DOMNode;

    replace_child(newChild: DOMNode, oldChild: DOMNode): DOMNode;

    set_node_value(value: string): void;

    set_prefix(value: string): void;

    set_text_content(value: string): void;

    static for_js_value(value: JavaScriptCore.Value): DOMNode;

    // Implemented Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.add_event_listener
    add_event_listener(...args: never[]): any;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    // Conflicted with WebKit2WebExtension.DOMEventTarget.remove_event_listener
    remove_event_listener(...args: never[]): any;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export module DOMNodeIterator {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        filter: DOMNodeFilter;
        pointer_before_reference_node: boolean;
        pointerBeforeReferenceNode: boolean;
        reference_node: DOMNode;
        referenceNode: DOMNode;
        root: DOMNode;
        what_to_show: number;
        whatToShow: number;
    }
}

export class DOMNodeIterator extends DOMObject {
    static $gtype: GObject.GType<DOMNodeIterator>;


    constructor(properties?: Partial<DOMNodeIterator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMNodeIterator.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get filter(): DOMNodeFilter;

    get pointer_before_reference_node(): boolean;

    get pointerBeforeReferenceNode(): boolean;

    get reference_node(): DOMNode;

    get referenceNode(): DOMNode;

    get root(): DOMNode;

    get what_to_show(): number;

    get whatToShow(): number;


    // Members

    detach(): void;

    get_expand_entity_references(): boolean;

    get_filter(): DOMNodeFilter;

    get_pointer_before_reference_node(): boolean;

    get_reference_node(): DOMNode;

    get_root(): DOMNode;

    get_what_to_show(): number;

    next_node(): DOMNode;

    previous_node(): DOMNode;


}

export module DOMNodeList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMNodeList extends DOMObject {
    static $gtype: GObject.GType<DOMNodeList>;


    constructor(properties?: Partial<DOMNodeList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMNodeList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    item(index: number): DOMNode;


}

export module DOMObject {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        core_object: any;
        coreObject: any;
    }
}

export class DOMObject extends GObject.Object {
    static $gtype: GObject.GType<DOMObject>;


    constructor(properties?: Partial<DOMObject.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMObject.ConstructorProperties>, ...args: any[]): void;


    // Properties
    set core_object(val: any);

    set coreObject(val: any);

    // Fields
    parentInstance: GObject.Object;


}

export module DOMProcessingInstruction {

    export interface ConstructorProperties extends DOMCharacterData.ConstructorProperties {
        [key: string]: any;

        sheet: DOMStyleSheet;
        target: string;
    }
}

export class DOMProcessingInstruction extends DOMCharacterData implements DOMEventTarget {
    static $gtype: GObject.GType<DOMProcessingInstruction>;


    constructor(properties?: Partial<DOMProcessingInstruction.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMProcessingInstruction.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get sheet(): DOMStyleSheet;

    get target(): string;


    // Members

    get_sheet(): DOMStyleSheet;

    get_target(): string;


}

export module DOMRange {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        collapsed: boolean;
        common_ancestor_container: DOMNode;
        commonAncestorContainer: DOMNode;
        end_container: DOMNode;
        endContainer: DOMNode;
        end_offset: number;
        endOffset: number;
        start_container: DOMNode;
        startContainer: DOMNode;
        start_offset: number;
        startOffset: number;
        text: string;
    }
}

export class DOMRange extends DOMObject {
    static $gtype: GObject.GType<DOMRange>;


    constructor(properties?: Partial<DOMRange.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMRange.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get collapsed(): boolean;

    get common_ancestor_container(): DOMNode;

    get commonAncestorContainer(): DOMNode;

    get end_container(): DOMNode;

    get endContainer(): DOMNode;

    get end_offset(): number;

    get endOffset(): number;

    get start_container(): DOMNode;

    get startContainer(): DOMNode;

    get start_offset(): number;

    get startOffset(): number;

    get text(): string;


    // Members

    clone_contents(): DOMDocumentFragment;

    clone_range(): DOMRange;

    collapse(toStart: boolean): void;

    compare_boundary_points(how: number, sourceRange: DOMRange): number;

    compare_node(refNode: DOMNode): number;

    compare_point(refNode: DOMNode, offset: number): number;

    create_contextual_fragment(html: string): DOMDocumentFragment;

    delete_contents(): void;

    detach(): void;

    expand(unit: string): void;

    extract_contents(): DOMDocumentFragment;

    get_collapsed(): boolean;

    get_common_ancestor_container(): DOMNode;

    get_end_container(): DOMNode;

    get_end_offset(): number;

    get_start_container(): DOMNode;

    get_start_offset(): number;

    get_text(): string;

    insert_node(newNode: DOMNode): void;

    intersects_node(refNode: DOMNode): boolean;

    is_point_in_range(refNode: DOMNode, offset: number): boolean;

    select_node(refNode: DOMNode): void;

    select_node_contents(refNode: DOMNode): void;

    set_end(refNode: DOMNode, offset: number): void;

    set_end_after(refNode: DOMNode): void;

    set_end_before(refNode: DOMNode): void;

    set_start(refNode: DOMNode, offset: number): void;

    set_start_after(refNode: DOMNode): void;

    set_start_before(refNode: DOMNode): void;

    surround_contents(newParent: DOMNode): void;

    to_string(): string;


}

export module DOMStyleSheet {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        disabled: boolean;
        href: string;
        media: DOMMediaList;
        owner_node: DOMNode;
        ownerNode: DOMNode;
        parent_style_sheet: DOMStyleSheet;
        parentStyleSheet: DOMStyleSheet;
        title: string;
        type: string;
    }
}

export class DOMStyleSheet extends DOMObject {
    static $gtype: GObject.GType<DOMStyleSheet>;


    constructor(properties?: Partial<DOMStyleSheet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMStyleSheet.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get disabled(): boolean;
    set disabled(val: boolean);

    get href(): string;

    get media(): DOMMediaList;

    get owner_node(): DOMNode;

    get ownerNode(): DOMNode;

    get parent_style_sheet(): DOMStyleSheet;

    get parentStyleSheet(): DOMStyleSheet;

    get title(): string;

    get type(): string;


    // Members

    get_content_type(): string;

    get_disabled(): boolean;

    get_href(): string;

    get_media(): DOMMediaList;

    get_owner_node(): DOMNode;

    get_parent_style_sheet(): DOMStyleSheet;

    get_title(): string;

    set_disabled(value: boolean): void;


}

export module DOMStyleSheetList {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        length: number;
    }
}

export class DOMStyleSheetList extends DOMObject {
    static $gtype: GObject.GType<DOMStyleSheetList>;


    constructor(properties?: Partial<DOMStyleSheetList.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMStyleSheetList.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get length(): number;


    // Members

    get_length(): number;

    item(index: number): DOMStyleSheet;


}

export module DOMText {

    export interface ConstructorProperties extends DOMCharacterData.ConstructorProperties {
        [key: string]: any;

        whole_text: string;
        wholeText: string;
    }
}

export class DOMText extends DOMCharacterData implements DOMEventTarget {
    static $gtype: GObject.GType<DOMText>;


    constructor(properties?: Partial<DOMText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMText.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get whole_text(): string;

    get wholeText(): string;


    // Members

    get_whole_text(): string;

    replace_whole_text(content: string): DOMText;

    split_text(offset: number): DOMText;


}

export module DOMTreeWalker {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        current_node: DOMNode;
        currentNode: DOMNode;
        filter: DOMNodeFilter;
        root: DOMNode;
        what_to_show: number;
        whatToShow: number;
    }
}

export class DOMTreeWalker extends DOMObject {
    static $gtype: GObject.GType<DOMTreeWalker>;


    constructor(properties?: Partial<DOMTreeWalker.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMTreeWalker.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get current_node(): DOMNode;

    get currentNode(): DOMNode;

    get filter(): DOMNodeFilter;

    get root(): DOMNode;

    get what_to_show(): number;

    get whatToShow(): number;


    // Members

    first_child(): DOMNode;

    get_current_node(): DOMNode;

    get_expand_entity_references(): boolean;

    get_filter(): DOMNodeFilter;

    get_root(): DOMNode;

    get_what_to_show(): number;

    last_child(): DOMNode;

    next_node(): DOMNode;

    next_sibling(): DOMNode;

    parent_node(): DOMNode;

    previous_node(): DOMNode;

    previous_sibling(): DOMNode;

    set_current_node(value: DOMNode): void;


}

export module DOMUIEvent {

    export interface ConstructorProperties extends DOMEvent.ConstructorProperties {
        [key: string]: any;

        char_code: number;
        charCode: number;
        detail: number;
        key_code: number;
        keyCode: number;
        layer_x: number;
        layerX: number;
        layer_y: number;
        layerY: number;
        page_x: number;
        pageX: number;
        page_y: number;
        pageY: number;
        view: DOMDOMWindow;
    }
}

export class DOMUIEvent extends DOMEvent {
    static $gtype: GObject.GType<DOMUIEvent>;


    constructor(properties?: Partial<DOMUIEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMUIEvent.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get char_code(): number;

    get charCode(): number;

    get detail(): number;

    get key_code(): number;

    get keyCode(): number;

    get layer_x(): number;

    get layerX(): number;

    get layer_y(): number;

    get layerY(): number;

    get page_x(): number;

    get pageX(): number;

    get page_y(): number;

    get pageY(): number;

    get view(): DOMDOMWindow;


    // Members

    get_char_code(): number;

    get_detail(): number;

    get_key_code(): number;

    get_layer_x(): number;

    get_layer_y(): number;

    get_page_x(): number;

    get_page_y(): number;

    get_view(): DOMDOMWindow;

    init_ui_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number): void;


}

export module DOMWheelEvent {

    export interface ConstructorProperties extends DOMMouseEvent.ConstructorProperties {
        [key: string]: any;

        wheel_delta: number;
        wheelDelta: number;
        wheel_delta_x: number;
        wheelDeltaX: number;
        wheel_delta_y: number;
        wheelDeltaY: number;
    }
}

export class DOMWheelEvent extends DOMMouseEvent {
    static $gtype: GObject.GType<DOMWheelEvent>;


    constructor(properties?: Partial<DOMWheelEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMWheelEvent.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get wheel_delta(): number;

    get wheelDelta(): number;

    get wheel_delta_x(): number;

    get wheelDeltaX(): number;

    get wheel_delta_y(): number;

    get wheelDeltaY(): number;


    // Members

    get_wheel_delta(): number;

    get_wheel_delta_x(): number;

    get_wheel_delta_y(): number;

    init_wheel_event(wheelDeltaX: number, wheelDeltaY: number, view: DOMDOMWindow, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): void;


}

export module DOMXPathExpression {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

    }
}

export class DOMXPathExpression extends DOMObject {
    static $gtype: GObject.GType<DOMXPathExpression>;


    constructor(properties?: Partial<DOMXPathExpression.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMXPathExpression.ConstructorProperties>, ...args: any[]): void;


    // Members

    evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;


}

export module DOMXPathResult {

    export interface ConstructorProperties extends DOMObject.ConstructorProperties {
        [key: string]: any;

        boolean_value: boolean;
        booleanValue: boolean;
        invalid_iterator_state: boolean;
        invalidIteratorState: boolean;
        number_value: number;
        numberValue: number;
        result_type: number;
        resultType: number;
        single_node_value: DOMNode;
        singleNodeValue: DOMNode;
        snapshot_length: number;
        snapshotLength: number;
        string_value: string;
        stringValue: string;
    }
}

export class DOMXPathResult extends DOMObject {
    static $gtype: GObject.GType<DOMXPathResult>;


    constructor(properties?: Partial<DOMXPathResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DOMXPathResult.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get boolean_value(): boolean;

    get booleanValue(): boolean;

    get invalid_iterator_state(): boolean;

    get invalidIteratorState(): boolean;

    get number_value(): number;

    get numberValue(): number;

    get result_type(): number;

    get resultType(): number;

    get single_node_value(): DOMNode;

    get singleNodeValue(): DOMNode;

    get snapshot_length(): number;

    get snapshotLength(): number;

    get string_value(): string;

    get stringValue(): string;


    // Members

    get_boolean_value(): boolean;

    get_invalid_iterator_state(): boolean;

    get_number_value(): number;

    get_result_type(): number;

    get_single_node_value(): DOMNode;

    get_snapshot_length(): number;

    get_string_value(): string;

    iterate_next(): DOMNode;

    snapshot_item(index: number): DOMNode;


}

export module Frame {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class Frame extends GObject.Object {
    static $gtype: GObject.GType<Frame>;


    constructor(properties?: Partial<Frame.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Frame.ConstructorProperties>, ...args: any[]): void;


    // Members

    get_id(): number;

    get_js_context(): JavaScriptCore.Context;

    get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;

    get_js_value_for_dom_object(dom_object: DOMObject): JavaScriptCore.Value;

    get_js_value_for_dom_object_in_script_world(dom_object: DOMObject, world: ScriptWorld): JavaScriptCore.Value;

    get_uri(): string;

    is_main_frame(): boolean;


}

export module HitTestResult {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        context: number;
        image_uri: string;
        imageUri: string;
        link_label: string;
        linkLabel: string;
        link_title: string;
        linkTitle: string;
        link_uri: string;
        linkUri: string;
        media_uri: string;
        mediaUri: string;
    }
}

export class HitTestResult extends GObject.Object {
    static $gtype: GObject.GType<HitTestResult>;


    constructor(properties?: Partial<HitTestResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HitTestResult.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get context(): number;

    get image_uri(): string;

    get imageUri(): string;

    get link_label(): string;

    get linkLabel(): string;

    get link_title(): string;

    get linkTitle(): string;

    get link_uri(): string;

    get linkUri(): string;

    get media_uri(): string;

    get mediaUri(): string;


    // Members

    context_is_editable(): boolean;

    context_is_image(): boolean;

    context_is_link(): boolean;

    context_is_media(): boolean;

    context_is_scrollbar(): boolean;

    context_is_selection(): boolean;

    get_context(): number;

    get_image_uri(): string;

    get_link_label(): string;

    get_link_title(): string;

    get_link_uri(): string;

    get_media_uri(): string;


}

export module ScriptWorld {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class ScriptWorld extends GObject.Object {
    static $gtype: GObject.GType<ScriptWorld>;


    constructor(properties?: Partial<ScriptWorld.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ScriptWorld.ConstructorProperties>, ...args: any[]): void;


    // Fields
    priv: ScriptWorldPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'window-object-cleared', callback: (_source: this, page: WebPage, frame: Frame) => void): number;

    connect_after(signal: 'window-object-cleared', callback: (_source: this, page: WebPage, frame: Frame) => void): number;

    emit(signal: 'window-object-cleared', page: WebPage, frame: Frame): void;


    // Constructors

    static ["new"](): ScriptWorld;

    static new_with_name(name: string): ScriptWorld;

    // Members

    get_name(): string;

    static get_default(): ScriptWorld;


}

export module URIRequest {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        uri: string;
    }
}

export class URIRequest extends GObject.Object {
    static $gtype: GObject.GType<URIRequest>;


    constructor(properties?: Partial<URIRequest.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URIRequest.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get uri(): string;
    set uri(val: string);


    // Constructors

    static ["new"](uri: string): URIRequest;

    // Members

    get_http_headers(): Soup.MessageHeaders;

    get_http_method(): string;

    get_uri(): string;

    set_uri(uri: string): void;


}

export module URIResponse {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        content_length: number;
        contentLength: number;
        http_headers: Soup.MessageHeaders;
        httpHeaders: Soup.MessageHeaders;
        mime_type: string;
        mimeType: string;
        status_code: number;
        statusCode: number;
        suggested_filename: string;
        suggestedFilename: string;
        uri: string;
    }
}

export class URIResponse extends GObject.Object {
    static $gtype: GObject.GType<URIResponse>;


    constructor(properties?: Partial<URIResponse.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<URIResponse.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get content_length(): number;

    get contentLength(): number;

    get http_headers(): Soup.MessageHeaders;

    get httpHeaders(): Soup.MessageHeaders;

    get mime_type(): string;

    get mimeType(): string;

    get status_code(): number;

    get statusCode(): number;

    get suggested_filename(): string;

    get suggestedFilename(): string;

    get uri(): string;


    // Members

    get_content_length(): number;

    get_http_headers(): Soup.MessageHeaders;

    get_mime_type(): string;

    get_status_code(): number;

    get_suggested_filename(): string;

    get_uri(): string;


}

export module UserMessage {

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;

        fd_list: Gio.UnixFDList;
        fdList: Gio.UnixFDList;
        name: string;
        parameters: GLib.Variant;
    }
}

export class UserMessage extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<UserMessage>;


    constructor(properties?: Partial<UserMessage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UserMessage.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get fd_list(): Gio.UnixFDList;

    get fdList(): Gio.UnixFDList;

    get name(): string;

    get parameters(): GLib.Variant;


    // Constructors

    static ["new"](name: string, parameters?: GLib.Variant | null): UserMessage;

    static new_with_fd_list(name: string, parameters?: GLib.Variant | null, fd_list?: Gio.UnixFDList | null): UserMessage;

    // Members

    get_fd_list(): Gio.UnixFDList | null;

    get_name(): string;

    get_parameters(): GLib.Variant | null;

    send_reply(reply: UserMessage): void;

    static error_quark(): GLib.Quark;


}

export module WebEditor {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class WebEditor extends GObject.Object {
    static $gtype: GObject.GType<WebEditor>;


    constructor(properties?: Partial<WebEditor.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebEditor.ConstructorProperties>, ...args: any[]): void;


    // Fields
    priv: WebEditorPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'selection-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;

    emit(signal: 'selection-changed'): void;


    // Members

    get_page(): WebPage;


}

export module WebExtension {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

    }
}

export class WebExtension extends GObject.Object {
    static $gtype: GObject.GType<WebExtension>;


    constructor(properties?: Partial<WebExtension.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebExtension.ConstructorProperties>, ...args: any[]): void;


    // Fields
    priv: WebExtensionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'page-created', callback: (_source: this, web_page: WebPage) => void): number;

    connect_after(signal: 'page-created', callback: (_source: this, web_page: WebPage) => void): number;

    emit(signal: 'page-created', web_page: WebPage): void;

    connect(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => void): number;

    connect_after(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => void): number;

    emit(signal: 'user-message-received', message: UserMessage): void;


    // Members

    get_page(page_id: number): WebPage;

    send_message_to_context(message: UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    send_message_to_context_finish(result: Gio.AsyncResult): UserMessage;


}

export module WebHitTestResult {

    export interface ConstructorProperties extends HitTestResult.ConstructorProperties {
        [key: string]: any;

        node: DOMNode;
    }
}

export class WebHitTestResult extends HitTestResult {
    static $gtype: GObject.GType<WebHitTestResult>;


    constructor(properties?: Partial<WebHitTestResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebHitTestResult.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get node(): DOMNode;

    // Fields
    priv: WebHitTestResultPrivate;


    // Members

    get_node(): DOMNode;


}

export module WebPage {

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        uri: string;
    }
}

export class WebPage extends GObject.Object {
    static $gtype: GObject.GType<WebPage>;


    constructor(properties?: Partial<WebPage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebPage.ConstructorProperties>, ...args: any[]): void;


    // Properties
    get uri(): string;


    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'console-message-sent', callback: (_source: this, console_message: ConsoleMessage) => void): number;

    connect_after(signal: 'console-message-sent', callback: (_source: this, console_message: ConsoleMessage) => void): number;

    emit(signal: 'console-message-sent', console_message: ConsoleMessage): void;

    connect(signal: 'context-menu', callback: (_source: this, context_menu: ContextMenu, hit_test_result: WebHitTestResult) => boolean): number;

    connect_after(signal: 'context-menu', callback: (_source: this, context_menu: ContextMenu, hit_test_result: WebHitTestResult) => boolean): number;

    emit(signal: 'context-menu', context_menu: ContextMenu, hit_test_result: WebHitTestResult): void;

    connect(signal: 'document-loaded', callback: (_source: this) => void): number;

    connect_after(signal: 'document-loaded', callback: (_source: this) => void): number;

    emit(signal: 'document-loaded'): void;

    connect(signal: 'form-controls-associated', callback: (_source: this, elements: DOMElement[]) => void): number;

    connect_after(signal: 'form-controls-associated', callback: (_source: this, elements: DOMElement[]) => void): number;

    emit(signal: 'form-controls-associated', elements: DOMElement[]): void;

    connect(signal: 'form-controls-associated-for-frame', callback: (_source: this, elements: DOMElement[], frame: Frame) => void): number;

    connect_after(signal: 'form-controls-associated-for-frame', callback: (_source: this, elements: DOMElement[], frame: Frame) => void): number;

    emit(signal: 'form-controls-associated-for-frame', elements: DOMElement[], frame: Frame): void;

    connect(signal: 'send-request', callback: (_source: this, request: URIRequest, redirected_response: URIResponse) => boolean): number;

    connect_after(signal: 'send-request', callback: (_source: this, request: URIRequest, redirected_response: URIResponse) => boolean): number;

    emit(signal: 'send-request', request: URIRequest, redirected_response: URIResponse): void;

    connect(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => boolean): number;

    connect_after(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => boolean): number;

    emit(signal: 'user-message-received', message: UserMessage): void;

    connect(signal: 'will-submit-form', callback: (_source: this, form: DOMElement, step: FormSubmissionStep, source_frame: Frame, target_frame: Frame, text_field_names: string[], text_field_values: string[]) => void): number;

    connect_after(signal: 'will-submit-form', callback: (_source: this, form: DOMElement, step: FormSubmissionStep, source_frame: Frame, target_frame: Frame, text_field_names: string[], text_field_values: string[]) => void): number;

    emit(signal: 'will-submit-form', form: DOMElement, step: FormSubmissionStep, source_frame: Frame, target_frame: Frame, text_field_names: string[], text_field_values: string[]): void;


    // Members

    get_dom_document(): DOMDocument;

    get_editor(): WebEditor;

    get_id(): number;

    get_main_frame(): Frame;

    get_uri(): string;

    send_message_to_view(message: UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    send_message_to_view_finish(result: Gio.AsyncResult): UserMessage;


}


export class ConsoleMessage {
    static $gtype: GObject.GType<ConsoleMessage>;


    constructor(copy: ConsoleMessage);


    // Members
    copy(): ConsoleMessage;

    free(): void;

    get_level(): ConsoleMessageLevel;

    get_line(): number;

    get_source(): ConsoleMessageSource;

    get_source_id(): string;

    get_text(): string;
}


export class ContextMenuItemPrivate {
    static $gtype: GObject.GType<ContextMenuItemPrivate>;


    constructor(copy: ContextMenuItemPrivate);


}


export class ContextMenuPrivate {
    static $gtype: GObject.GType<ContextMenuPrivate>;


    constructor(copy: ContextMenuPrivate);


}


export class FramePrivate {
    static $gtype: GObject.GType<FramePrivate>;


    constructor(copy: FramePrivate);


}


export class HitTestResultPrivate {
    static $gtype: GObject.GType<HitTestResultPrivate>;


    constructor(copy: HitTestResultPrivate);


}


export class ScriptWorldPrivate {
    static $gtype: GObject.GType<ScriptWorldPrivate>;


    constructor(copy: ScriptWorldPrivate);


}


export class URIRequestPrivate {
    static $gtype: GObject.GType<URIRequestPrivate>;


    constructor(copy: URIRequestPrivate);


}


export class URIResponsePrivate {
    static $gtype: GObject.GType<URIResponsePrivate>;


    constructor(copy: URIResponsePrivate);


}


export class UserMessagePrivate {
    static $gtype: GObject.GType<UserMessagePrivate>;


    constructor(copy: UserMessagePrivate);


}


export class WebEditorPrivate {
    static $gtype: GObject.GType<WebEditorPrivate>;


    constructor(copy: WebEditorPrivate);


}


export class WebExtensionPrivate {
    static $gtype: GObject.GType<WebExtensionPrivate>;


    constructor(copy: WebExtensionPrivate);


}


export class WebHitTestResultPrivate {
    static $gtype: GObject.GType<WebHitTestResultPrivate>;


    constructor(copy: WebHitTestResultPrivate);


}


export class WebPagePrivate {
    static $gtype: GObject.GType<WebPagePrivate>;


    constructor(copy: WebPagePrivate);


}


export class _ContextMenu {
    static $gtype: GObject.GType<_ContextMenu>;


    constructor(copy: _ContextMenu);


    // Fields
    parent: GObject.Object;


}


export class _ContextMenuItem {
    static $gtype: GObject.GType<_ContextMenuItem>;


    constructor(copy: _ContextMenuItem);


    // Fields
    parent: GObject.InitiallyUnowned;
    priv: ContextMenuItemPrivate;


}


export interface DOMEventTargetNamespace {
    $gtype: GObject.GType<DOMEventTarget>;
    prototype: DOMEventTargetPrototype;


}

export type DOMEventTarget = DOMEventTargetPrototype;

export interface DOMEventTargetPrototype extends GObject.Object {


    // Members

    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;

    add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    dispatch_event(event: DOMEvent): boolean;

    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;

    remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

    vfunc_dispatch_event(event: DOMEvent): boolean;

    vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}

export const DOMEventTarget: DOMEventTargetNamespace;


export interface DOMNodeFilterNamespace {
    $gtype: GObject.GType<DOMNodeFilter>;
    prototype: DOMNodeFilterPrototype;


}

export type DOMNodeFilter = DOMNodeFilterPrototype;

export interface DOMNodeFilterPrototype extends GObject.Object {


    // Members

    accept_node(node: DOMNode): number;

    vfunc_accept_node(node: DOMNode): number;
}

export const DOMNodeFilter: DOMNodeFilterNamespace;


export interface DOMXPathNSResolverNamespace {
    $gtype: GObject.GType<DOMXPathNSResolver>;
    prototype: DOMXPathNSResolverPrototype;


}

export type DOMXPathNSResolver = DOMXPathNSResolverPrototype;

export interface DOMXPathNSResolverPrototype extends GObject.Object {


    // Members

    lookup_namespace_uri(prefix: string): string;

    vfunc_lookup_namespace_uri(prefix: string): string;
}

export const DOMXPathNSResolver: DOMXPathNSResolverNamespace;
