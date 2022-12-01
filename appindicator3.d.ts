/**
 * AppIndicator3 0.1
 *
 * Generated from 0.1
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gtk from './gtk';
import * as Gdk from './gdk';

export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string;
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string;
export const INDICATOR_SIGNAL_NEW_ICON: string;
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string;
export const INDICATOR_SIGNAL_NEW_LABEL: string;
export const INDICATOR_SIGNAL_NEW_STATUS: string;
export const INDICATOR_SIGNAL_SCROLL_EVENT: string;

export namespace IndicatorCategory {
    export const $gtype: GObject.GType<IndicatorCategory>;
}

export enum IndicatorCategory {
    APPLICATION_STATUS = 0,
    COMMUNICATIONS = 1,
    SYSTEM_SERVICES = 2,
    HARDWARE = 3,
    OTHER = 4,
}

export namespace IndicatorStatus {
    export const $gtype: GObject.GType<IndicatorStatus>;
}

export enum IndicatorStatus {
    PASSIVE = 0,
    ACTIVE = 1,
    ATTENTION = 2,
}

export namespace Indicator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        attention_icon_desc: string;
        attentionIconDesc: string;
        attention_icon_name: string;
        attentionIconName: string;
        category: string;
        connected: boolean;
        icon_desc: string;
        iconDesc: string;
        icon_name: string;
        iconName: string;
        icon_theme_path: string;
        iconThemePath: string;
        id: string;
        label: string;
        label_guide: string;
        labelGuide: string;
        ordering_index: number;
        orderingIndex: number;
        status: string;
        title: string;
    }
}

export class Indicator extends GObject.Object {
    static $gtype: GObject.GType<Indicator>;

    constructor(properties?: Partial<Indicator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Indicator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attention_icon_desc: string;
    attentionIconDesc: string;
    attention_icon_name: string;
    attentionIconName: string;
    category: string;
    connected: boolean;
    icon_desc: string;
    iconDesc: string;
    icon_name: string;
    iconName: string;
    icon_theme_path: string;
    iconThemePath: string;
    id: string;
    label: string;
    label_guide: string;
    labelGuide: string;
    ordering_index: number;
    orderingIndex: number;
    status: string;
    title: string;

    // Fields
    priv: IndicatorPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'connection-changed', callback: (_source: this, arg1: boolean) => void): number;

    connect_after(signal: 'connection-changed', callback: (_source: this, arg1: boolean) => void): number;

    emit(signal: 'connection-changed', arg1: boolean): void;

    connect(signal: 'new-attention-icon', callback: (_source: this) => void): number;

    connect_after(signal: 'new-attention-icon', callback: (_source: this) => void): number;

    emit(signal: 'new-attention-icon'): void;

    connect(signal: 'new-icon', callback: (_source: this) => void): number;

    connect_after(signal: 'new-icon', callback: (_source: this) => void): number;

    emit(signal: 'new-icon'): void;

    connect(signal: 'new-icon-theme-path', callback: (_source: this, object: string) => void): number;

    connect_after(signal: 'new-icon-theme-path', callback: (_source: this, object: string) => void): number;

    emit(signal: 'new-icon-theme-path', object: string): void;

    connect(signal: 'new-label', callback: (_source: this, object: string, p0: string) => void): number;

    connect_after(signal: 'new-label', callback: (_source: this, object: string, p0: string) => void): number;

    emit(signal: 'new-label', object: string, p0: string): void;

    connect(signal: 'new-status', callback: (_source: this, arg1: string) => void): number;

    connect_after(signal: 'new-status', callback: (_source: this, arg1: string) => void): number;

    emit(signal: 'new-status', arg1: string): void;

    connect(signal: 'scroll-event', callback: (_source: this, arg1: number, arg2: Gdk.ScrollDirection) => void): number;

    connect_after(
        signal: 'scroll-event',
        callback: (_source: this, arg1: number, arg2: Gdk.ScrollDirection) => void
    ): number;

    emit(signal: 'scroll-event', arg1: number, arg2: Gdk.ScrollDirection): void;

    // Constructors

    static ['new'](id: string, icon_name: string, category: IndicatorCategory): Indicator;

    static new_with_path(
        id: string,
        icon_name: string,
        category: IndicatorCategory,
        icon_theme_path: string
    ): Indicator;

    // Members

    build_menu_from_desktop(desktop_file: string, desktop_profile: string): void;

    get_attention_icon(): string;

    get_attention_icon_desc(): string;

    get_category(): IndicatorCategory;

    get_icon(): string;

    get_icon_desc(): string;

    get_icon_theme_path(): string;

    get_id(): string;

    get_label(): string;

    get_label_guide(): string;

    get_menu(): Gtk.Menu;

    get_ordering_index(): number;

    get_secondary_activate_target(): Gtk.Widget;

    get_status(): IndicatorStatus;

    get_title(): string;

    set_attention_icon(icon_name: string): void;

    set_attention_icon_full(icon_name: string, icon_desc: string): void;

    set_icon(icon_name: string): void;

    set_icon_full(icon_name: string, icon_desc: string): void;

    set_icon_theme_path(icon_theme_path: string): void;

    set_label(label: string, guide: string): void;

    set_menu(menu?: Gtk.Menu | null): void;

    set_ordering_index(ordering_index: number): void;

    set_secondary_activate_target(menuitem?: Gtk.Widget | null): void;

    set_status(status: IndicatorStatus): void;

    set_title(title?: string | null): void;

    vfunc_connection_changed(connected: boolean): void;

    vfunc_new_attention_icon(): void;

    vfunc_new_icon(): void;

    vfunc_new_icon_theme_path(icon_theme_path: string): void;

    vfunc_new_label(label: string, guide: string): void;

    vfunc_new_status(status: string): void;

    vfunc_scroll_event(delta: number, direction: Gdk.ScrollDirection): void;

    vfunc_unfallback(status_icon: Gtk.StatusIcon): void;
}

export class IndicatorPrivate {
    static $gtype: GObject.GType<IndicatorPrivate>;

    constructor(copy: IndicatorPrivate);
}
