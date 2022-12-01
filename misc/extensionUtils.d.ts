/* eslint-disable jsdoc/check-param-names,jsdoc/require-param-description,jsdoc/require-param-type,jsdoc/check-tag-names,@typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any */
// noinspection JSUnusedGlobalSymbols,ES6UnusedImports,SpellCheckingInspection

import * as Gio from '../../@types/gio';
import * as GLib from '../../@types/glib';
import * as GObject from '../../@types/gobject';
import * as Meta from '../../@types/meta';
import * as Shell from '../../@types/shell';
import * as St from '../../@types/st';
import {Me} from '../../src/main';


/**
 * @param {object} extension the extension object to use in utilities like `initTranslations()`
 */
export function setCurrentExtension(extension: object): void;

/**
 * getCurrentExtension:
 *
 * @returns {?object} - The current extension, or null if not called from
 * an extension.
 */
export function getCurrentExtension(): Me;

/**
 * initTranslations:
 *
 * @param {string=} domain - the gettext domain to use
 *
 * Initialize Gettext to load translations from extensionsdir/locale.
 * If @domain is not provided, it will be taken from metadata['gettext-domain']
 */
export function initTranslations(domain?: string | undefined): void;

/**
 * gettext:
 *
 * @param {string} str - the string to translate
 *
 * Translate @str using the extension's gettext domain
 *
 * @returns {string} - the translated string
 *
 */
export function gettext(str: string): string;

/**
 * ngettext:
 *
 * @param {string} str - the string to translate
 * @param {string} strPlural - the plural form of the string
 * @param {number} n - the quantity for which translation is needed
 *
 * Translate @str and choose plural form using the extension's
 * gettext domain
 *
 * @returns {string} - the translated string
 *
 */
export function ngettext(str: string, strPlural: string, n: number): string;

/**
 * pgettext:
 *
 * @param {string} context - context to disambiguate @str
 * @param {string} str - the string to translate
 *
 * Translate @str in the context of @context using the extension's
 * gettext domain
 *
 * @returns {string} - the translated string
 *
 */
export function pgettext(context: string, str: string): string;

export function callExtensionGettextFunc(func: any, ...args: any[]): any;

/**
 * getSettings:
 *
 * @param {string=} schema - the GSettings schema id
 * @returns {Gio.Settings} - a new settings object for @schema
 *
 * Builds and returns a GSettings schema for @schema, using schema files
 * in extensionsdir/schemas. If @schema is omitted, it is taken from
 * metadata['settings-schema'].
 */
export function getSettings(schema?: string | undefined): Gio.Settings;

/**
 * openPrefs:
 *
 * Open the preference dialog of the current extension
 */
export function openPrefs(): void;

export function isOutOfDate(extension: any): boolean;

export function serializeExtension(extension: any): SerializedExtension;

export function deserializeExtension(variant: any): DeserializedExtension;

export function installImporter(extension: any): void;

// declare const Gio: any;
// declare const GLib: any;
declare const Gettext: any;
declare const Config: any;
declare let Main: any;
declare let _extension: any;

export enum ExtensionType {
    SYSTEM = 1,   // 1,
    PER_USER = 2, // 2,
}

export enum ExtensionState {
    ENABLED = 1,     // 1,
    DISABLED = 2,    // 2,
    ERROR = 3,       // 3,
    OUT_OF_DATE = 4, // 4,
    DOWNLOADING = 5, // 5,
    INITIALIZED = 6, // 6,
    UNINSTALLED = 99, // 99, Used as an error state for operations on unknown extensions, should never be in a real extensionMeta object.
}

export enum SERIALIZED_PROPERTIES {
    'type' = 'type',
    'state' = 'state',
    'path' = 'path',
    'error' = 'error',
    'hasPrefs' = 'hasPrefs',
    'hasUpdate' = 'hasUpdate',
    'canChange' = 'canChange',
}

export interface SerializedExtension {
    [key: string]: GLib.Variant;
}

export interface DeserializedExtension {
    metadata: {
        [key: string]: never;
    }
}

// # sourceMappingURL=extensionUtils.d.ts.map
