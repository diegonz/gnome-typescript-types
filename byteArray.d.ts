/* eslint-disable @typescript-eslint/no-explicit-any */
// noinspection JSUnusedGlobalSymbols

import * as GLib from '../@types/glib';

/**
 * @param {Iterable<number>} array an iterable to convert into a ByteArray
 *   wrapper
 * @returns {ByteArray}
 */
export function fromArray(array: Iterable<number>): ByteArray;
/**
 * @param {Uint8Array} array the Uint8Array to convert to GLib.Bytes
 * @returns {GLib.Bytes}
 */
export function toGBytes(array: Uint8Array): GLib.Bytes;
export const fromGBytes: ByteArray;
export const fromString: ByteArray;
export function toString(array: Uint8Array): string;
// declare const GLib: any;

export class ByteArray {
    new (arg?: number): {
        _array: Uint8Array;
        length: number;
        toString(encoding?: string): string;
        toGBytes(): GLib.Bytes;
    };

    get(target: any, prop: any, receiver: any): any;
    set(target: any, prop: any, val: any, receiver: any): boolean;
}

// export const ByteArray: {
//     new (arg?: number): {
//         _array: Uint8Array;
//         length: number;
//         toString(encoding?: string): any;
//         toGBytes(): GLib.Bytes;
//     };
//     get(target: any, prop: any, receiver: any): any;
//     set(target: any, prop: any, val: any, receiver: any): boolean;
// };
// # sourceMappingURL=byteArray.d.ts.map
