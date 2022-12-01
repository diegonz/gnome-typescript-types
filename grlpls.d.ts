/**
 * GrlPls 0.3
 *
 * Generated from 0.3
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Grl from './grl';

export function browse(
    source: Grl.Source,
    playlist: Grl.Media,
    keys: Grl.KeyID[],
    options: Grl.OperationOptions,
    filter_func: FilterFunc | null,
    callback: Grl.SourceResultCb
): number;

export function browse_by_spec(source: Grl.Source, filter_func: FilterFunc | null, bs: Grl.SourceBrowseSpec): void;

export function browse_sync(
    source: Grl.Source,
    playlist: Grl.Media,
    keys: Grl.KeyID[],
    options: Grl.OperationOptions,
    filter_func?: FilterFunc | null
): Grl.Media[];

export function file_to_media(
    content: Grl.Media,
    file: Gio.File,
    info: Gio.FileInfo,
    handle_pls: boolean,
    options: Grl.OperationOptions
): Grl.Media;

export function get_file_attributes(): string;

export function media_is_playlist(media: Grl.Media): boolean;

export type FilterFunc = (source: Grl.Source, media: Grl.Media) => Grl.Media;
