/**
 * Colorhug 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Colord from './colord';
import * as GObject from './gobject';
import * as GUsb from './gusb';
import * as Gio from './gio';
import * as GLib from './glib';

export const BUFFER_INPUT_CMD: number;
export const BUFFER_INPUT_DATA: number;
export const BUFFER_OUTPUT_CMD: number;
export const BUFFER_OUTPUT_DATA: number;
export const BUFFER_OUTPUT_RETVAL: number;
export const CALIBRATION_DESCRIPTION_LEN: number;
export const CALIBRATION_INDEX_CRT: number;
export const CALIBRATION_INDEX_FACTORY_ONLY: number;
export const CALIBRATION_INDEX_LCD: number;
export const CALIBRATION_INDEX_LED: number;
export const CALIBRATION_INDEX_MAX: number;
export const CALIBRATION_INDEX_PROJECTOR: number;
export const CALIBRATION_MAX: number;
export const CALIBRATION_SPECTRAL: number;
export const CALIBRATION_TYPE_ALL: number;
export const CALIBRATION_TYPE_CRT: number;
export const CALIBRATION_TYPE_LCD: number;
export const CALIBRATION_TYPE_LED: number;
export const CALIBRATION_TYPE_PROJECTOR: number;
export const CCD_SPECTRAL_RESOLUTION: number;
export const CMD_BOOT_FLASH: number;
export const CMD_CLEAR_ERROR: number;
export const CMD_ERASE_FLASH: number;
export const CMD_GET_ADC_CALIBRATION_NEG: number;
export const CMD_GET_ADC_CALIBRATION_POS: number;
export const CMD_GET_CALIBRATION: number;
export const CMD_GET_CALIBRATION_MAP: number;
export const CMD_GET_CCD_CALIBRATION: number;
export const CMD_GET_COLOR_SELECT: number;
export const CMD_GET_DAC_VALUE: number;
export const CMD_GET_DARK_OFFSETS: number;
export const CMD_GET_ERROR: number;
export const CMD_GET_FIRMWARE_VERSION: number;
export const CMD_GET_HARDWARE_VERSION: number;
export const CMD_GET_ILLUMINANTS: number;
export const CMD_GET_INTEGRAL_TIME: number;
export const CMD_GET_LEDS: number;
export const CMD_GET_MEASURE_MODE: number;
export const CMD_GET_MULTIPLIER: number;
export const CMD_GET_OWNER_EMAIL: number;
export const CMD_GET_OWNER_NAME: number;
export const CMD_GET_PCB_ERRATA: number;
export const CMD_GET_POST_SCALE: number;
export const CMD_GET_PRE_SCALE: number;
export const CMD_GET_REMOTE_HASH: number;
export const CMD_GET_SERIAL_NUMBER: number;
export const CMD_GET_TEMPERATURE: number;
export const CMD_LOAD_SRAM: number;
export const CMD_READ_FLASH: number;
export const CMD_READ_SRAM: number;
export const CMD_RESET: number;
export const CMD_SAVE_SRAM: number;
export const CMD_SELF_TEST: number;
export const CMD_SET_CALIBRATION: number;
export const CMD_SET_CALIBRATION_MAP: number;
export const CMD_SET_CCD_CALIBRATION: number;
export const CMD_SET_COLOR_SELECT: number;
export const CMD_SET_CRYPTO_KEY: number;
export const CMD_SET_DAC_VALUE: number;
export const CMD_SET_DARK_OFFSETS: number;
export const CMD_SET_FLASH_SUCCESS: number;
export const CMD_SET_ILLUMINANTS: number;
export const CMD_SET_INTEGRAL_TIME: number;
export const CMD_SET_LEDS: number;
export const CMD_SET_MEASURE_MODE: number;
export const CMD_SET_MULTIPLIER: number;
export const CMD_SET_OWNER_EMAIL: number;
export const CMD_SET_OWNER_NAME: number;
export const CMD_SET_PCB_ERRATA: number;
export const CMD_SET_POST_SCALE: number;
export const CMD_SET_PRE_SCALE: number;
export const CMD_SET_REMOTE_HASH: number;
export const CMD_SET_SERIAL_NUMBER: number;
export const CMD_TAKE_READINGS: number;
export const CMD_TAKE_READING_ARRAY: number;
export const CMD_TAKE_READING_RAW: number;
export const CMD_TAKE_READING_SPECTRAL: number;
export const CMD_TAKE_READING_XYZ: number;
export const CMD_WRITE_EEPROM: number;
export const CMD_WRITE_FLASH: number;
export const CMD_WRITE_SRAM: number;
export const DEVICE_GUID_COLORHUG: string;
export const DEVICE_GUID_COLORHUG2: string;
export const DEVICE_GUID_COLORHUG_ALS: string;
export const DEVICE_GUID_COLORHUG_PLUS: string;
export const DEVICE_USB_TIMEOUT: number;
export const EEPROM_ADDR_RUNCODE: number;
export const EEPROM_ADDR_RUNCODE_ALS: number;
export const EP0_TRANSFER_SIZE: number;
export const EP0_TRANSFER_SIZE_V2: number;
export const FIRMWARE_ID_TOKEN1: string;
export const FIRMWARE_ID_TOKEN2: string;
export const FIRMWARE_ID_TOKEN_ALS: string;
export const FIRMWARE_ID_TOKEN_PLUS: string;
export const FLASH_ERASE_BLOCK_SIZE: number;
export const FLASH_RECONNECT_TIMEOUT: number;
export const FLASH_TRANSFER_BLOCK_SIZE: number;
export const FLASH_WRITE_BLOCK_SIZE: number;
export const INTEGRAL_TIME_VALUE_100MS: number;
export const INTEGRAL_TIME_VALUE_200MS: number;
export const INTEGRAL_TIME_VALUE_50MS: number;
export const INTEGRAL_TIME_VALUE_5MS: number;
export const INTEGRAL_TIME_VALUE_MAX: number;
export const OWNER_LENGTH_MAX: number;
export const USB_CONFIG: number;
export const USB_HID_EP: number;
export const USB_HID_EP_IN: number;
export const USB_HID_EP_OUT: number;
export const USB_HID_EP_SIZE: number;
export const USB_INTERFACE: number;
export const USB_PID_BOOTLOADER: number;
export const USB_PID_BOOTLOADER2: number;
export const USB_PID_BOOTLOADER_ALS: number;
export const USB_PID_BOOTLOADER_DFU: number;
export const USB_PID_BOOTLOADER_PLUS: number;
export const USB_PID_FIRMWARE: number;
export const USB_PID_FIRMWARE2: number;
export const USB_PID_FIRMWARE_ALS: number;
export const USB_PID_FIRMWARE_ALS_SENSOR_HID: number;
export const USB_PID_FIRMWARE_DFU: number;
export const USB_PID_FIRMWARE_PLUS: number;
export const USB_PID_LEGACY: number;
export const USB_VID: number;
export const USB_VID_LEGACY: number;
export const WRITE_EEPROM_MAGIC: string;

export function color_select_to_string(color_select: ColorSelect): string;

export function command_to_string(cmd: Cmd): string;

export function device_check_firmware(device: GUsb.Device, data: Uint8Array | string): boolean;

export function device_close(device: GUsb.Device): boolean;

export function device_error_quark(): GLib.Quark;

export function device_get_adc_calibration_neg(
    device: GUsb.Device,
    cancellable?: Gio.Cancellable | null
): [boolean, number];

export function device_get_adc_calibration_pos(
    device: GUsb.Device,
    cancellable?: Gio.Cancellable | null
): [boolean, number];

export function device_get_ccd_calibration(
    device: GUsb.Device,
    nm_start: number,
    c0: number,
    c1: number,
    c2: number,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_get_error(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [boolean, Error, Cmd];

export function device_get_guid(device: GUsb.Device): string;

export function device_get_illuminants(
    device: GUsb.Device,
    cancellable?: Gio.Cancellable | null
): [boolean, Illuminant];

export function device_get_integral_time(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [boolean, number];

export function device_get_leds(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [boolean, StatusLed];

export function device_get_mode(device: GUsb.Device): DeviceMode;

export function device_get_pcb_errata(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [boolean, PcbErrata];

export function device_get_runcode_address(device: GUsb.Device): number;

export function device_get_serial_number(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [boolean, number];

export function device_get_spectrum(device: GUsb.Device, cancellable?: Gio.Cancellable | null): Colord.Spectrum;

export function device_get_spectrum_full(
    device: GUsb.Device,
    kind: SpectrumKind,
    cancellable?: Gio.Cancellable | null
): Colord.Spectrum;

export function device_get_temperature(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [boolean, number];

export function device_is_colorhug(device: GUsb.Device): boolean;

export function device_load_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean;

export function device_mode_from_firmware(data: Uint8Array | string): DeviceMode;

export function device_mode_to_string(device_mode: DeviceMode): string;

export function device_open(device: GUsb.Device): boolean;

export function device_open_full(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean;

export function device_read_sram(
    device: GUsb.Device,
    addr: number,
    len: number,
    cancellable?: Gio.Cancellable | null
): GLib.Bytes;

export function device_save_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean;

export function device_self_test(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean;

export function device_set_ccd_calibration(
    device: GUsb.Device,
    nm_start: number,
    c0: number,
    c1: number,
    c2: number,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_set_crypto_key(device: GUsb.Device, keys: number, cancellable?: Gio.Cancellable | null): boolean;

export function device_set_illuminants(
    device: GUsb.Device,
    value: Illuminant,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_set_integral_time(
    device: GUsb.Device,
    value: number,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_set_leds(device: GUsb.Device, value: StatusLed, cancellable?: Gio.Cancellable | null): boolean;

export function device_set_pcb_errata(
    device: GUsb.Device,
    value: PcbErrata,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_set_serial_number(
    device: GUsb.Device,
    value: number,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_set_spectrum_full(
    device: GUsb.Device,
    kind: SpectrumKind,
    sp: Colord.Spectrum,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_take_reading_spectral(
    device: GUsb.Device,
    value: SpectrumKind,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_take_reading_xyz(
    device: GUsb.Device,
    calibration_idx: number,
    cancellable?: Gio.Cancellable | null
): Colord.ColorXYZ;

export function device_write_command(
    device: GUsb.Device,
    cmd: number,
    buffer_in: number,
    buffer_in_len: number,
    buffer_out: number,
    buffer_out_len: number,
    cancellable?: Gio.Cancellable | null
): boolean;

export function device_write_command_async(
    device: GUsb.Device,
    cmd: number,
    buffer_in: number,
    buffer_in_len: number,
    buffer_out: number,
    buffer_out_len: number,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<GUsb.Device> | null
): void;

export function device_write_command_finish(device: GUsb.Device, res: Gio.AsyncResult): boolean;

export function device_write_sram(
    device: GUsb.Device,
    addr: number,
    data: GLib.Bytes | Uint8Array,
    cancellable?: Gio.Cancellable | null
): boolean;

export function measure_mode_to_string(measure_mode: MeasureMode): string;

export function multiplier_to_string(multiplier: FreqScale): string;

export function sha1_parse(value: string, sha1: Sha1): boolean;

export function strerror(error_enum: Error): string;

export namespace ColorSelect {
    export const $gtype: GObject.GType<ColorSelect>;
}

export enum ColorSelect {
    RED = 0,
    WHITE = 1,
    BLUE = 2,
    GREEN = 3,
}

export namespace DeviceMode {
    export const $gtype: GObject.GType<DeviceMode>;
}

export enum DeviceMode {
    UNKNOWN = 0,
    LEGACY = 1,
    BOOTLOADER = 2,
    FIRMWARE = 3,
    BOOTLOADER_PLUS = 4,
    FIRMWARE_PLUS = 5,
    FIRMWARE2 = 6,
    BOOTLOADER2 = 7,
    BOOTLOADER_ALS = 8,
    FIRMWARE_ALS = 9,
}

export namespace Error {
    export const $gtype: GObject.GType<Error>;
}

export enum Error {
    NONE = 0,
    UNKNOWN_CMD = 1,
    WRONG_UNLOCK_CODE = 2,
    NOT_IMPLEMENTED = 3,
    UNDERFLOW_SENSOR = 4,
    NO_SERIAL = 5,
    WATCHDOG = 6,
    INVALID_ADDRESS = 7,
    INVALID_LENGTH = 8,
    INVALID_CHECKSUM = 9,
    INVALID_VALUE = 10,
    UNKNOWN_CMD_FOR_BOOTLOADER = 11,
    NO_CALIBRATION = 12,
    OVERFLOW_MULTIPLY = 13,
    OVERFLOW_ADDITION = 14,
    OVERFLOW_SENSOR = 15,
    OVERFLOW_STACK = 16,
    DEVICE_DEACTIVATED = 17,
    INCOMPLETE_REQUEST = 18,
    SELF_TEST_SENSOR = 19,
    SELF_TEST_RED = 20,
    SELF_TEST_GREEN = 21,
    SELF_TEST_BLUE = 22,
    SELF_TEST_COLOR_SELECT = 23,
    SELF_TEST_MULTIPLIER = 24,
    INVALID_CALIBRATION = 25,
    SRAM_FAILED = 26,
    OUT_OF_MEMORY = 27,
    SELF_TEST_TEMPERATURE = 28,
    SELF_TEST_I2C = 29,
    SELF_TEST_ADC_VDD = 30,
    SELF_TEST_ADC_VSS = 31,
    SELF_TEST_ADC_VREF = 32,
    I2C_SLAVE_ADDRESS = 33,
    I2C_SLAVE_CONFIG = 34,
    SELF_TEST_EEPROM = 35,
}

export class FreqScale {
    static $gtype: GObject.GType<FreqScale>;

    constructor(copy: FreqScale);

    // Properties
    static '0': number;
    static '20': number;
    static '2': number;
    static '100': number;
}

export namespace MeasureMode {
    export const $gtype: GObject.GType<MeasureMode>;
}

export enum MeasureMode {
    FREQUENCY = 0,
    DURATION = 1,
}

export namespace SpectrumKind {
    export const $gtype: GObject.GType<SpectrumKind>;
}

export enum SpectrumKind {
    RAW = 0,
    DARK_CAL = 1,
    TEMP_CAL = 2,
    IRRADIANCE_CAL = 3,
    LAST = 4,
}

export namespace DeviceQueueProcessFlags {
    export const $gtype: GObject.GType<DeviceQueueProcessFlags>;
}

export enum DeviceQueueProcessFlags {
    NONE = 0,
    CONTINUE_ERRORS = 1,
    NONFATAL_ERRORS = 2,
}

export namespace Illuminant {
    export const $gtype: GObject.GType<Illuminant>;
}

export enum Illuminant {
    NONE = 0,
    A = 1,
    UV = 2,
}

export namespace PcbErrata {
    export const $gtype: GObject.GType<PcbErrata>;
}

export enum PcbErrata {
    NONE = 0,
    SWAPPED_LEDS = 1,
    NO_WELCOME = 2,
}

export namespace StatusLed {
    export const $gtype: GObject.GType<StatusLed>;
}

export enum StatusLed {
    GREEN = 1,
    RED = 2,
    BLUE = 4,
}

export namespace DeviceQueue {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class DeviceQueue extends GObject.Object {
    static $gtype: GObject.GType<DeviceQueue>;

    constructor(properties?: Partial<DeviceQueue.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DeviceQueue.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'device-failed', callback: (_source: this, object: GObject.Object, p0: string) => void): number;

    connect_after(
        signal: 'device-failed',
        callback: (_source: this, object: GObject.Object, p0: string) => void
    ): number;

    emit(signal: 'device-failed', object: GObject.Object, p0: string): void;

    connect(signal: 'progress-changed', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'progress-changed', callback: (_source: this, object: number) => void): number;

    emit(signal: 'progress-changed', object: number): void;

    // Constructors

    static ['new'](): DeviceQueue;

    // Members

    add(
        device: GUsb.Device,
        cmd: number,
        buffer_in: number,
        buffer_in_len: number,
        buffer_out: number,
        buffer_out_len: number
    ): void;

    boot_flash(device: GUsb.Device): void;

    clear_calibration(device: GUsb.Device, calibration_index: number): void;

    erase_flash(device: GUsb.Device, address: number[]): void;

    get_adc_vref_neg(device: GUsb.Device, vref: number): void;

    get_adc_vref_pos(device: GUsb.Device, vref: number): void;

    get_calibration(
        device: GUsb.Device,
        calibration_index: number,
        calibration: Colord.Mat3x3,
        types: number,
        description: string
    ): void;

    get_calibration_map(device: GUsb.Device, calibration_map: number): void;

    get_ccd_calibration(device: GUsb.Device, indexes: number): void;

    get_color_select(device: GUsb.Device, color_select: ColorSelect): void;

    get_dac_value(device: GUsb.Device, dac_value: number): void;

    get_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void;

    get_firmware_ver(device: GUsb.Device, major: number, minor: number, micro: number): void;

    get_hardware_version(device: GUsb.Device, hw_version: number): void;

    get_integral_time(device: GUsb.Device, integral_time: number): void;

    get_leds(device: GUsb.Device, leds: number): void;

    get_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void;

    get_multiplier(device: GUsb.Device, multiplier: FreqScale): void;

    get_owner_email(device: GUsb.Device, email: string): void;

    get_owner_name(device: GUsb.Device, name: string): void;

    get_pcb_errata(device: GUsb.Device, pcb_errata: number): void;

    get_post_scale(device: GUsb.Device, post_scale: number): void;

    get_pre_scale(device: GUsb.Device, pre_scale: number): void;

    get_remote_hash(device: GUsb.Device, remote_hash: Sha1): void;

    get_serial_number(device: GUsb.Device, serial_number: number): void;

    get_temperature(device: GUsb.Device, temperature: number): void;

    process(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null): boolean;

    process_async(
        process_flags: DeviceQueueProcessFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    process_finish(res: Gio.AsyncResult): boolean;

    read_firmware(device: GUsb.Device, data: Uint8Array | string): void;

    read_flash(device: GUsb.Device, address: number, data: Uint8Array | string): void;

    read_sram(device: GUsb.Device, address: number, data: Uint8Array | string): void;

    reset(device: GUsb.Device): void;

    self_test(device: GUsb.Device): void;

    set_calibration(
        device: GUsb.Device,
        calibration_index: number,
        calibration: Colord.Mat3x3,
        types: number,
        description: string
    ): void;

    set_calibration_ccmx(device: GUsb.Device, calibration_index: number, ccmx: Colord.It8): boolean;

    set_calibration_map(device: GUsb.Device, calibration_map: number): void;

    set_ccd_calibration(device: GUsb.Device, indexes: number): void;

    set_color_select(device: GUsb.Device, color_select: ColorSelect): void;

    set_dac_value(device: GUsb.Device, dac_value: number): void;

    set_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void;

    set_flash_success(device: GUsb.Device, value: number): void;

    set_integral_time(device: GUsb.Device, integral_time: number): void;

    set_leds(device: GUsb.Device, leds: number, repeat: number, on_time: number, off_time: number): void;

    set_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void;

    set_multiplier(device: GUsb.Device, multiplier: FreqScale): void;

    set_owner_email(device: GUsb.Device, email: string): void;

    set_owner_name(device: GUsb.Device, name: string): void;

    set_pcb_errata(device: GUsb.Device, pcb_errata: number): void;

    set_post_scale(device: GUsb.Device, post_scale: number): void;

    set_pre_scale(device: GUsb.Device, pre_scale: number): void;

    set_remote_hash(device: GUsb.Device, remote_hash: Sha1): void;

    set_serial_number(device: GUsb.Device, serial_number: number): void;

    take_reading_array(device: GUsb.Device, reading_array: number): void;

    take_reading_raw(device: GUsb.Device, take_reading: number): void;

    take_reading_spectral(device: GUsb.Device, sram_addr: number): void;

    take_readings(device: GUsb.Device, value: Colord.ColorRGB): void;

    take_readings_xyz(device: GUsb.Device, calibration_index: number, value: Colord.ColorXYZ): void;

    verify_firmware(device: GUsb.Device, data: Uint8Array | string): void;

    verify_flash(device: GUsb.Device, address: number, data: Uint8Array | string): void;

    write_eeprom(device: GUsb.Device, magic: string): void;

    write_firmware(device: GUsb.Device, data: Uint8Array | string): void;

    write_flash(device: GUsb.Device, address: number, data: Uint8Array | string): void;

    write_sram(device: GUsb.Device, address: number, data: Uint8Array | string): void;

    vfunc_device_failed(device: GUsb.Device, error_message: string): void;

    vfunc_progress_changed(percentage: number): void;
}

export class Sha1 {
    static $gtype: GObject.GType<Sha1>;

    constructor(copy: Sha1);

    // Fields
    bytes: Uint8Array;

    // Members
    to_string(): string;

    static parse(value: string, sha1: Sha1): boolean;
}

export type Cmd = number;
