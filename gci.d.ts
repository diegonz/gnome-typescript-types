/**
 * GCi 1
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gtk from './gtk';

export namespace EntryController {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        entry: Gtk.Entry;
    }
}

export class EntryController extends GObject.Object {
    static $gtype: GObject.GType<EntryController>;

    constructor(properties?: Partial<EntryController.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EntryController.ConstructorProperties>, ...args: any[]): void;

    // Properties
    entry: Gtk.Entry;

    // Constructors

    static for_entry(entry: Gtk.Entry): EntryController;

    static ['new'](): EntryController;

    // Members

    get_entry(): Gtk.Entry;

    set_entry(value: Gtk.Entry): void;
}

export class EntryControllerPrivate {
    static $gtype: GObject.GType<EntryControllerPrivate>;

    constructor(copy: EntryControllerPrivate);
}
