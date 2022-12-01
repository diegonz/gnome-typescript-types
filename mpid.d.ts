/**
 * MPID 3.0
 *
 * Generated from 3.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';

export const PROTOCOL_GENERIC: string;
export const PROTOCOL_IPOD: string;

export function enable_debug(debug: boolean): void;

export namespace Error {
    export const $gtype: GObject.GType<Error>;
}

export enum Error {
    OK = 0,
    NO_SUCH_DEVICE = 1,
    DEVICE_DB_FAILED = 2,
    NOT_MEDIA_PLAYER = 3,
    DEVICE_INFO_MISSING = 4,
}

export namespace Source {
    export const $gtype: GObject.GType<Source>;
}

export enum Source {
    NONE = 0,
    SYSTEM = 1,
    OVERRIDE = 2,
}

export namespace SourceType {
    export const $gtype: GObject.GType<SourceType>;
}

export enum SourceType {
    NO_DEVICE_INFO = 0,
    SYSTEM_DEVICE_INFO = 1,
    OVERRIDE_DEVICE_INFO = 2,
}

export namespace Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        access_protocols: string[];
        accessProtocols: string[];
        audio_folders: string[];
        audioFolders: string[];
        drive_type: string;
        driveType: string;
        error: Error;
        folder_depth: number;
        folderDepth: number;
        fs_uuid: string;
        fsUuid: string;
        input_formats: string[];
        inputFormats: string[];
        input_path: string;
        inputPath: string;
        model: string;
        mpi_file: string;
        mpiFile: string;
        output_formats: string[];
        outputFormats: string[];
        playlist_formats: string[];
        playlistFormats: string[];
        playlist_path: string;
        playlistPath: string;
        requires_eject: boolean;
        requiresEject: boolean;
        serial: string;
        source: SourceType;
        vendor: string;
    }
}

export class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    access_protocols: string[];
    accessProtocols: string[];
    audio_folders: string[];
    audioFolders: string[];
    drive_type: string;
    driveType: string;
    error: Error;
    folder_depth: number;
    folderDepth: number;
    fs_uuid: string;
    fsUuid: string;
    input_formats: string[];
    inputFormats: string[];
    input_path: string;
    inputPath: string;
    model: string;
    mpi_file: string;
    mpiFile: string;
    output_formats: string[];
    outputFormats: string[];
    playlist_formats: string[];
    playlistFormats: string[];
    playlist_path: string;
    playlistPath: string;
    requires_eject: boolean;
    requiresEject: boolean;
    serial: string;
    source: SourceType;
    vendor: string;

    // Constructors

    static ['new'](path: string): Device;

    static new_from_mpi_file(path: string): Device;
}
