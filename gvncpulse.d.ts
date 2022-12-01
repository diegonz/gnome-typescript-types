/**
 * GVncPulse 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GVnc from './gvnc';

export namespace AudioPulse {
    export interface ConstructorProperties extends GVnc.BaseAudio.ConstructorProperties {
        [key: string]: any;
    }
}

export class AudioPulse extends GVnc.BaseAudio implements GVnc.Audio {
    static $gtype: GObject.GType<AudioPulse>;

    constructor(properties?: Partial<AudioPulse.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AudioPulse.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: AudioPulsePrivate | any;

    // Constructors

    static ['new'](): AudioPulse;

    // Implemented Members

    playback_data(sample: GVnc.AudioSample): void;

    playback_start(format: GVnc.AudioFormat): void;

    playback_stop(): void;

    vfunc_playback_data(sample: GVnc.AudioSample): boolean;

    vfunc_playback_start(format: GVnc.AudioFormat): boolean;

    vfunc_playback_stop(): boolean;
}

export class AudioPulsePrivate {
    static $gtype: GObject.GType<AudioPulsePrivate>;

    constructor(copy: AudioPulsePrivate);
}
