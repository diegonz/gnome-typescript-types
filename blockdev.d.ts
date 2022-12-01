/**
 * BlockDev 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export const BTRFS_MAIN_VOLUME_ID: number;
export const BTRFS_MIN_MEMBER_SIZE: number;
export const CRYPTO_LUKS_METADATA_SIZE: number;
export const LVM_DEFAULT_CHUNK_SIZE: number;
export const LVM_DEFAULT_PE_SIZE: number;
export const LVM_DEFAULT_PE_START: number;
export const LVM_MAX_LV_SIZE: number;
export const LVM_MAX_PE_SIZE: number;
export const LVM_MAX_THPOOL_CHUNK_SIZE: number;
export const LVM_MAX_THPOOL_MD_SIZE: number;
export const LVM_MIN_CACHE_MD_SIZE: number;
export const LVM_MIN_PE_SIZE: number;
export const LVM_MIN_THPOOL_CHUNK_SIZE: number;
export const LVM_MIN_THPOOL_MD_SIZE: number;
export const MD_CHUNK_SIZE: number;
export const MD_SUPERBLOCK_SIZE: number;

export function btrfs_add_device(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_change_label(mountpoint: string, label: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_check(device: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_create_snapshot(source: string, dest: string, ro: boolean, extra?: ExtraArg[] | null): boolean;

export function btrfs_create_subvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_create_volume(
    devices: string[],
    label?: string | null,
    data_level?: string | null,
    md_level?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function btrfs_delete_subvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_error_quark(): GLib.Quark;

export function btrfs_filesystem_info(device: string): BtrfsFilesystemInfo;

export function btrfs_get_default_subvolume_id(mountpoint: string): number;

export function btrfs_is_tech_avail(tech: BtrfsTech, mode: number): boolean;

export function btrfs_list_devices(device: string): BtrfsDeviceInfo[];

export function btrfs_list_subvolumes(mountpoint: string, snapshots_only: boolean): BtrfsSubvolumeInfo[];

export function btrfs_mkfs(
    devices: string[],
    label?: string | null,
    data_level?: string | null,
    md_level?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function btrfs_remove_device(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_repair(device: string, extra?: ExtraArg[] | null): boolean;

export function btrfs_resize(mountpoint: string, size: number, extra?: ExtraArg[] | null): boolean;

export function btrfs_set_default_subvolume(mountpoint: string, subvol_id: number, extra?: ExtraArg[] | null): boolean;

export function crypto_bitlk_close(bitlk_device: string): boolean;

export function crypto_bitlk_open(
    device: string,
    name: string,
    pass_data: Uint8Array | string,
    read_only: boolean
): boolean;

export function crypto_device_is_luks(device: string): boolean;

export function crypto_device_seems_encrypted(device: string): boolean;

export function crypto_error_quark(): GLib.Quark;

export function crypto_escrow_device(
    device: string,
    passphrase: string,
    cert_data: number[],
    directory: string,
    backup_passphrase?: string | null
): boolean;

export function crypto_generate_backup_passphrase(): string;

export function crypto_integrity_info(device: string): CryptoIntegrityInfo;

export function crypto_is_tech_avail(tech: CryptoTech, mode: number): boolean;

export function crypto_luks_add_key(
    device: string,
    pass?: string | null,
    key_file?: string | null,
    npass?: string | null,
    nkey_file?: string | null
): boolean;

export function crypto_luks_add_key_blob(
    device: string,
    pass_data: Uint8Array | string,
    npass_data: Uint8Array | string
): boolean;

export function crypto_luks_change_key(device: string, pass: string, npass: string): boolean;

export function crypto_luks_change_key_blob(
    device: string,
    pass_data: Uint8Array | string,
    npass_data: Uint8Array | string
): boolean;

export function crypto_luks_close(luks_device: string): boolean;

export function crypto_luks_format(
    device: string,
    cipher: string | null,
    key_size: number,
    passphrase: string | null,
    key_file: string | null,
    min_entropy: number
): boolean;

export function crypto_luks_format_blob(
    device: string,
    cipher: string | null,
    key_size: number,
    pass_data: Uint8Array | string,
    min_entropy: number
): boolean;

export function crypto_luks_format_luks2(
    device: string,
    cipher: string | null,
    key_size: number,
    passphrase: string | null,
    key_file: string | null,
    min_entropy: number,
    luks_version: CryptoLUKSVersion,
    extra?: CryptoLUKSExtra | null
): boolean;

export function crypto_luks_format_luks2_blob(
    device: string,
    cipher: string | null,
    key_size: number,
    pass_data: Uint8Array | string,
    min_entropy: number,
    luks_version: CryptoLUKSVersion,
    extra?: CryptoLUKSExtra | null
): boolean;

export function crypto_luks_get_metadata_size(device: string): number;

export function crypto_luks_header_backup(device: string, backup_file: string): boolean;

export function crypto_luks_header_restore(device: string, backup_file: string): boolean;

export function crypto_luks_info(luks_device: string): CryptoLUKSInfo;

export function crypto_luks_kill_slot(device: string, slot: number): boolean;

export function crypto_luks_open(
    device: string,
    name: string,
    passphrase: string | null,
    key_file: string | null,
    read_only: boolean
): boolean;

export function crypto_luks_open_blob(
    device: string,
    name: string,
    pass_data: Uint8Array | string,
    read_only: boolean
): boolean;

export function crypto_luks_remove_key(device: string, pass?: string | null, key_file?: string | null): boolean;

export function crypto_luks_remove_key_blob(device: string, pass_data: Uint8Array | string): boolean;

export function crypto_luks_resize(luks_device: string, size: number): boolean;

export function crypto_luks_resize_luks2(
    luks_device: string,
    size: number,
    passphrase?: string | null,
    key_file?: string | null
): boolean;

export function crypto_luks_resize_luks2_blob(
    luks_device: string,
    size: number,
    pass_data: Uint8Array | string
): boolean;

export function crypto_luks_resume(luks_device: string, passphrase?: string | null, key_file?: string | null): boolean;

export function crypto_luks_resume_blob(luks_device: string, pass_data: Uint8Array | string): boolean;

export function crypto_luks_status(luks_device: string): string;

export function crypto_luks_suspend(luks_device: string): boolean;

export function crypto_luks_uuid(device: string): string;

export function crypto_tc_close(tc_device: string): boolean;

export function crypto_tc_open(
    device: string,
    name: string,
    pass_data: Uint8Array | string,
    read_only: boolean
): boolean;

export function crypto_tc_open_full(
    device: string,
    name: string,
    pass_data: Uint8Array | string,
    keyfiles: string[] | null,
    hidden: boolean,
    system: boolean,
    veracrypt: boolean,
    veracrypt_pim: number,
    read_only: boolean
): boolean;

export function dm_activate_raid_set(name: string): boolean;

export function dm_create_linear(map_name: string, device: string, length: number, uuid?: string | null): boolean;

export function dm_deactivate_raid_set(name: string): boolean;

export function dm_error_quark(): GLib.Quark;

export function dm_get_member_raid_sets(
    name: string | null,
    uuid: string | null,
    major: number,
    minor: number
): string[];

export function dm_get_raid_set_type(name: string): string;

export function dm_get_subsystem_from_name(device_name: string): string;

export function dm_is_tech_avail(tech: DMTech, mode: number): boolean;

export function dm_map_exists(map_name: string, live_only: boolean, active_only: boolean): boolean;

export function dm_name_from_node(dm_node: string): string;

export function dm_node_from_name(map_name: string): string;

export function dm_remove(map_name: string): boolean;

export function ensure_init(require_plugins?: PluginSpec[] | null, log_func?: UtilsLogFunc | null): boolean;

export function fs_can_check(type: string): [boolean, string];

export function fs_can_repair(type: string): [boolean, string];

export function fs_can_resize(type: string): [boolean, FsResizeFlags, string];

export function fs_can_set_label(type: string): [boolean, string];

export function fs_check(device: string): boolean;

export function fs_clean(device: string): boolean;

export function fs_error_quark(): GLib.Quark;

export function fs_ext2_check(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ext2_get_info(device: string): FSExt2Info;

export function fs_ext2_mkfs(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ext2_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;

export function fs_ext2_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;

export function fs_ext2_set_label(device: string, label: string): boolean;

export function fs_ext2_wipe(device: string): boolean;

export function fs_ext3_check(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ext3_get_info(device: string): FSExt3Info;

export function fs_ext3_mkfs(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ext3_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;

export function fs_ext3_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;

export function fs_ext3_set_label(device: string, label: string): boolean;

export function fs_ext3_wipe(device: string): boolean;

export function fs_ext4_check(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ext4_get_info(device: string): FSExt4Info;

export function fs_ext4_mkfs(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ext4_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;

export function fs_ext4_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;

export function fs_ext4_set_label(device: string, label: string): boolean;

export function fs_ext4_wipe(device: string): boolean;

export function fs_freeze(mountpoint: string): boolean;

export function fs_get_fstype(device: string): string;

export function fs_get_mountpoint(device: string): string;

export function fs_is_mountpoint(path: string): boolean;

export function fs_is_tech_avail(tech: FSTech, mode: number): boolean;

export function fs_mount(
    device?: string | null,
    mountpoint?: string | null,
    fstype?: string | null,
    options?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function fs_ntfs_check(device: string): boolean;

export function fs_ntfs_get_info(device: string): FSNtfsInfo;

export function fs_ntfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_ntfs_repair(device: string): boolean;

export function fs_ntfs_resize(device: string, new_size: number): boolean;

export function fs_ntfs_set_label(device: string, label: string): boolean;

export function fs_ntfs_wipe(device: string): boolean;

export function fs_repair(device: string): boolean;

export function fs_resize(device: string, new_size: number): boolean;

export function fs_set_label(device: string, label: string): boolean;

export function fs_unfreeze(mountpoint: string): boolean;

export function fs_unmount(spec: string, lazy: boolean, force: boolean, extra?: ExtraArg[] | null): boolean;

export function fs_vfat_check(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_vfat_get_info(device: string): FSVfatInfo;

export function fs_vfat_mkfs(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_vfat_repair(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_vfat_resize(device: string, new_size: number): boolean;

export function fs_vfat_set_label(device: string, label: string): boolean;

export function fs_vfat_wipe(device: string): boolean;

export function fs_wipe(device: string, all: boolean): boolean;

export function fs_wipe_force(device: string, all: boolean, force: boolean): boolean;

export function fs_xfs_check(device: string): boolean;

export function fs_xfs_get_info(device: string): FSXfsInfo;

export function fs_xfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_xfs_repair(device: string, extra?: ExtraArg[] | null): boolean;

export function fs_xfs_resize(mpoint: string, new_size: number, extra?: ExtraArg[] | null): boolean;

export function fs_xfs_set_label(device: string, label: string): boolean;

export function fs_xfs_wipe(device: string): boolean;

export function get_available_plugin_names(): string[];

export function get_plugin_name(plugin: Plugin): string;

export function get_plugin_soname(plugin: Plugin): string;

export function init(require_plugins?: PluginSpec[] | null, log_func?: UtilsLogFunc | null): boolean;

export function is_initialized(): boolean;

export function is_plugin_available(plugin: Plugin): boolean;

export function kbd_bcache_attach(c_set_uuid: string, bcache_device: string): boolean;

export function kbd_bcache_create(
    backing_device: string,
    cache_device: string,
    extra?: ExtraArg[] | null
): [boolean, string | null];

export function kbd_bcache_destroy(bcache_device: string): boolean;

export function kbd_bcache_detach(bcache_device: string): [boolean, string | null];

export function kbd_bcache_get_backing_device(bcache_device: string): string;

export function kbd_bcache_get_cache_device(bcache_device: string): string;

export function kbd_bcache_get_mode(bcache_device: string): KBDBcacheMode;

export function kbd_bcache_get_mode_from_str(mode_str: string): KBDBcacheMode;

export function kbd_bcache_get_mode_str(mode: KBDBcacheMode): string;

export function kbd_bcache_set_mode(bcache_device: string, mode: KBDBcacheMode): boolean;

export function kbd_bcache_status(bcache_device: string): KBDBcacheStats;

export function kbd_error_quark(): GLib.Quark;

export function kbd_is_tech_avail(tech: KBDTech, mode: number): boolean;

export function kbd_zram_add_device(size: number, nstreams: number): [boolean, string | null];

export function kbd_zram_create_devices(num_devices: number, sizes: number[], nstreams?: number[] | null): boolean;

export function kbd_zram_destroy_devices(): boolean;

export function kbd_zram_get_stats(device: string): KBDZramStats;

export function kbd_zram_remove_device(device: string): boolean;

export function loop_error_quark(): GLib.Quark;

export function loop_get_autoclear(loop: string): boolean;

export function loop_get_backing_file(dev_name: string): string;

export function loop_get_loop_name(file: string): string;

export function loop_is_tech_avail(tech: LoopTech, mode: number): boolean;

export function loop_set_autoclear(loop: string, autoclear: boolean): boolean;

export function loop_setup(
    file: string,
    offset: number,
    size: number,
    read_only: boolean,
    part_scan: boolean
): [boolean, string | null];

export function loop_setup_from_fd(
    fd: number,
    offset: number,
    size: number,
    read_only: boolean,
    part_scan: boolean
): [boolean, string | null];

export function loop_teardown(loop: string): boolean;

export function lvm_cache_attach(
    vg_name: string,
    data_lv: string,
    cache_pool_lv: string,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_cache_create_cached_lv(
    vg_name: string,
    lv_name: string,
    data_size: number,
    cache_size: number,
    md_size: number,
    mode: LVMCacheMode,
    flags: LVMCachePoolFlags,
    slow_pvs: string[],
    fast_pvs: string[]
): boolean;

export function lvm_cache_create_pool(
    vg_name: string,
    pool_name: string,
    pool_size: number,
    md_size: number,
    mode: LVMCacheMode,
    flags: LVMCachePoolFlags,
    fast_pvs: string[]
): boolean;

export function lvm_cache_detach(
    vg_name: string,
    cached_lv: string,
    destroy: boolean,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_cache_get_default_md_size(cache_size: number): number;

export function lvm_cache_get_mode_from_str(mode_str: string): LVMCacheMode;

export function lvm_cache_get_mode_str(mode: LVMCacheMode): string;

export function lvm_cache_pool_convert(
    vg_name: string,
    data_lv: string,
    metadata_lv: string,
    name?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_cache_pool_name(vg_name: string, cached_lv: string): string;

export function lvm_cache_stats(vg_name: string, cached_lv: string): LVMCacheStats;

export function lvm_data_lv_name(vg_name: string, lv_name: string): string;

export function lvm_error_quark(): GLib.Quark;

export function lvm_get_global_config(): string;

export function lvm_get_lv_physical_size(lv_size: number, pe_size: number): number;

export function lvm_get_max_lv_size(): number;

export function lvm_get_supported_pe_sizes(): number[];

export function lvm_get_thpool_meta_size(size: number, chunk_size: number, n_snapshots: number): number;

export function lvm_get_thpool_padding(size: number, pe_size: number, included: boolean): number;

export function lvm_get_vdo_compression_state_str(state: LVMVDOCompressionState): string;

export function lvm_get_vdo_index_state_str(state: LVMVDOIndexState): string;

export function lvm_get_vdo_operating_mode_str(mode: LVMVDOOperatingMode): string;

export function lvm_get_vdo_write_policy_from_str(policy_str: string): LVMVDOWritePolicy;

export function lvm_get_vdo_write_policy_str(policy: LVMVDOWritePolicy): string;

export function lvm_is_supported_pe_size(size: number): boolean;

export function lvm_is_tech_avail(tech: LVMTech, mode: number): boolean;

export function lvm_is_valid_thpool_chunk_size(size: number, discard: boolean): boolean;

export function lvm_is_valid_thpool_md_size(size: number): boolean;

export function lvm_lvactivate(
    vg_name: string,
    lv_name: string,
    ignore_skip: boolean,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_lvcreate(
    vg_name: string,
    lv_name: string,
    size: number,
    type?: string | null,
    pv_list?: string[] | null,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_lvdeactivate(vg_name: string, lv_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_lvinfo(vg_name: string, lv_name: string): LVMLVdata;

export function lvm_lvorigin(vg_name: string, lv_name: string): string;

export function lvm_lvremove(vg_name: string, lv_name: string, force: boolean, extra?: ExtraArg[] | null): boolean;

export function lvm_lvrename(vg_name: string, lv_name: string, new_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_lvresize(vg_name: string, lv_name: string, size: number, extra?: ExtraArg[] | null): boolean;

export function lvm_lvs(vg_name?: string | null): LVMLVdata[];

export function lvm_lvsnapshotcreate(
    vg_name: string,
    origin_name: string,
    snapshot_name: string,
    size: number,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_lvsnapshotmerge(vg_name: string, snapshot_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_metadata_lv_name(vg_name: string, lv_name: string): string;

export function lvm_pvcreate(
    device: string,
    data_alignment: number,
    metadata_size: number,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_pvinfo(device: string): LVMPVdata;

export function lvm_pvmove(src: string, dest?: string | null, extra?: ExtraArg[] | null): boolean;

export function lvm_pvremove(device: string, extra?: ExtraArg[] | null): boolean;

export function lvm_pvresize(device: string, size: number, extra?: ExtraArg[] | null): boolean;

export function lvm_pvs(): LVMPVdata[];

export function lvm_pvscan(device: string | null, update_cache: boolean, extra?: ExtraArg[] | null): boolean;

export function lvm_round_size_to_pe(size: number, pe_size: number, roundup: boolean): number;

export function lvm_set_global_config(new_config?: string | null): boolean;

export function lvm_thlvcreate(
    vg_name: string,
    pool_name: string,
    lv_name: string,
    size: number,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_thlvpoolname(vg_name: string, lv_name: string): string;

export function lvm_thpool_convert(
    vg_name: string,
    data_lv: string,
    metadata_lv: string,
    name?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_thpoolcreate(
    vg_name: string,
    lv_name: string,
    size: number,
    md_size: number,
    chunk_size: number,
    profile?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_thsnapshotcreate(
    vg_name: string,
    origin_name: string,
    snapshot_name: string,
    pool_name?: string | null,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_vdo_disable_compression(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vdo_disable_deduplication(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vdo_enable_compression(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vdo_enable_deduplication(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vdo_get_stats(vg_name: string, pool_name: string): LVMVDOStats;

export function lvm_vdo_get_stats_full(vg_name: string, pool_name: string): GLib.HashTable<string, string>;

export function lvm_vdo_info(vg_name: string, lv_name: string): LVMVDOPooldata;

export function lvm_vdo_pool_convert(
    vg_name: string,
    pool_lv: string,
    name: string | null,
    virtual_size: number,
    index_memory: number,
    compression: boolean,
    deduplication: boolean,
    write_policy: LVMVDOWritePolicy,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_vdo_pool_create(
    vg_name: string,
    lv_name: string,
    pool_name: string,
    data_size: number,
    virtual_size: number,
    index_memory: number,
    compression: boolean,
    deduplication: boolean,
    write_policy: LVMVDOWritePolicy,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_vdo_pool_resize(
    vg_name: string,
    pool_name: string,
    size: number,
    extra?: ExtraArg[] | null
): boolean;

export function lvm_vdo_resize(vg_name: string, lv_name: string, size: number, extra?: ExtraArg[] | null): boolean;

export function lvm_vdolvpoolname(vg_name: string, lv_name: string): string;

export function lvm_vgactivate(vg_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vgcreate(name: string, pv_list: string[], pe_size: number, extra?: ExtraArg[] | null): boolean;

export function lvm_vgdeactivate(vg_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vgextend(vg_name: string, device: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vginfo(vg_name: string): LVMVGdata;

export function lvm_vgreduce(vg_name: string, device?: string | null, extra?: ExtraArg[] | null): boolean;

export function lvm_vgremove(vg_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vgrename(old_vg_name: string, new_vg_name: string, extra?: ExtraArg[] | null): boolean;

export function lvm_vgs(): LVMVGdata[];

export function md_activate(
    raid_spec: string | null,
    members: string[] | null,
    uuid: string | null,
    start_degraded: boolean,
    extra?: ExtraArg[] | null
): boolean;

export function md_add(raid_spec: string, device: string, raid_devs: number, extra?: ExtraArg[] | null): boolean;

export function md_canonicalize_uuid(uuid: string): string;

export function md_create(
    device_name: string,
    level: string,
    disks: string[],
    spares: number,
    version: string | null,
    bitmap: boolean,
    chunk_size: number,
    extra?: ExtraArg[] | null
): boolean;

export function md_deactivate(raid_spec: string): boolean;

export function md_denominate(device: string): boolean;

export function md_destroy(device: string): boolean;

export function md_detail(raid_spec: string): MDDetailData;

export function md_error_quark(): GLib.Quark;

export function md_examine(device: string): MDExamineData;

export function md_get_bitmap_location(raid_spec: string): string;

export function md_get_md_uuid(uuid: string): string;

export function md_get_status(raid_spec: string): string;

export function md_get_superblock_size(member_size: number, version?: string | null): number;

export function md_is_tech_avail(tech: MDTech, mode: number): boolean;

export function md_name_from_node(node: string): string;

export function md_node_from_name(name: string): string;

export function md_nominate(device: string): boolean;

export function md_remove(raid_spec: string, device: string, fail: boolean, extra?: ExtraArg[] | null): boolean;

export function md_request_sync_action(raid_spec: string, action: string): boolean;

export function md_run(raid_spec: string): boolean;

export function md_set_bitmap_location(raid_spec: string, location: string): boolean;

export function mpath_error_quark(): GLib.Quark;

export function mpath_flush_mpaths(): boolean;

export function mpath_get_mpath_members(): string[];

export function mpath_is_mpath_member(device: string): boolean;

export function mpath_is_tech_avail(tech: MpathTech, mode: number): boolean;

export function mpath_set_friendly_names(enabled: boolean): boolean;

export function nvdimm_error_quark(): GLib.Quark;

export function nvdimm_is_tech_avail(tech: NVDIMMTech, mode: number): boolean;

export function nvdimm_list_namespaces(
    bus: string | null,
    region: string | null,
    idle: boolean,
    extra?: ExtraArg[] | null
): NVDIMMNamespaceInfo[];

export function nvdimm_namepace_get_supported_sector_sizes(mode: NVDIMMNamespaceMode): number[];

export function nvdimm_namespace_disable(namespace: string, extra?: ExtraArg[] | null): boolean;

export function nvdimm_namespace_enable(namespace: string, extra?: ExtraArg[] | null): boolean;

export function nvdimm_namespace_get_devname(device: string): string;

export function nvdimm_namespace_get_mode_from_str(mode_str: string): NVDIMMNamespaceMode;

export function nvdimm_namespace_get_mode_str(mode: NVDIMMNamespaceMode): string;

export function nvdimm_namespace_info(namespace: string, extra?: ExtraArg[] | null): NVDIMMNamespaceInfo;

export function nvdimm_namespace_reconfigure(
    namespace: string,
    mode: NVDIMMNamespaceMode,
    force: boolean,
    extra?: ExtraArg[] | null
): boolean;

export function part_create_part(
    disk: string,
    type: PartTypeReq,
    start: number,
    size: number,
    align: PartAlign
): PartSpec;

export function part_create_table(disk: string, type: PartTableType, ignore_existing: boolean): boolean;

export function part_delete_part(disk: string, part: string): boolean;

export function part_error_quark(): GLib.Quark;

export function part_get_best_free_region(disk: string, type: PartType, size: number): PartSpec;

export function part_get_disk_free_regions(disk: string): PartSpec[];

export function part_get_disk_parts(disk: string): PartSpec[];

export function part_get_disk_spec(disk: string): PartDiskSpec;

export function part_get_flag_str(flag: PartFlag): string;

export function part_get_part_by_pos(disk: string, position: number): PartSpec;

export function part_get_part_id(disk: string, part: string): string;

export function part_get_part_spec(disk: string, part: string): PartSpec;

export function part_get_part_table_type_str(type: PartTableType): string;

export function part_get_type_str(type: PartType): string;

export function part_is_tech_avail(tech: PartTech, mode: number): boolean;

export function part_resize_part(disk: string, part: string, size: number, align: PartAlign): boolean;

export function part_set_disk_flag(disk: string, flag: PartDiskFlag, state: boolean): boolean;

export function part_set_part_flag(disk: string, part: string, flag: PartFlag, state: boolean): boolean;

export function part_set_part_flags(disk: string, part: string, flags: number): boolean;

export function part_set_part_id(disk: string, part: string, part_id: string): boolean;

export function part_set_part_name(disk: string, part: string, name: string): boolean;

export function part_set_part_type(disk: string, part: string, type_guid: string): boolean;

export function reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func?: UtilsLogFunc | null): boolean;

export function swap_error_quark(): GLib.Quark;

export function swap_is_tech_avail(tech: SwapTech, mode: number): boolean;

export function swap_mkswap(device: string, label?: string | null, extra?: ExtraArg[] | null): boolean;

export function swap_set_label(device: string, label: string): boolean;

export function swap_swapoff(device: string): boolean;

export function swap_swapon(device: string, priority: number): boolean;

export function swap_swapstatus(device: string): boolean;

export function switch_init_checks(enable: boolean): boolean;

export function try_init(
    request_plugins?: PluginSpec[] | null,
    log_func?: UtilsLogFunc | null
): [boolean, string[] | null];

export function try_reinit(
    require_plugins: PluginSpec[] | null,
    reload: boolean,
    log_func?: UtilsLogFunc | null
): [boolean, string[] | null];

export function utils_check_linux_version(major: number, minor: number, micro: number): number;

export function utils_check_util_version(
    util: string,
    version?: string | null,
    version_arg?: string | null,
    version_regexp?: string | null
): boolean;

export function utils_dbus_service_available(
    connection: Gio.DBusConnection | null,
    bus_type: Gio.BusType,
    bus_name: string,
    obj_prefix: string
): boolean;

export function utils_echo_str_to_file(str: string, file_path: string): boolean;

export function utils_exec_and_capture_output(argv: string[], extra: ExtraArg[] | null): [boolean, string];

export function utils_exec_and_report_error(argv: string[], extra?: ExtraArg[] | null): boolean;

export function utils_exec_and_report_error_no_progress(argv: string[], extra?: ExtraArg[] | null): boolean;

export function utils_exec_and_report_progress(
    argv: string[],
    extra: ExtraArg[] | null,
    prog_extract: UtilsProgExtract | null
): [boolean, number];

export function utils_exec_and_report_status_error(argv: string[], extra: ExtraArg[] | null): [boolean, number];

export function utils_get_device_symlinks(dev_spec: string): string[];

export function utils_get_linux_version(): UtilsLinuxVersion;

export function utils_have_kernel_module(module_name: string): boolean;

export function utils_init_logging(new_log_func?: UtilsLogFunc | null): boolean;

export function utils_init_prog_reporting(new_prog_func?: UtilsProgFunc | null): boolean;

export function utils_init_prog_reporting_thread(new_prog_func?: UtilsProgFunc | null): boolean;

export function utils_load_kernel_module(module_name: string, options?: string | null): boolean;

export function utils_log(level: number, msg: string): void;

export function utils_mute_prog_reporting_thread(): boolean;

export function utils_prog_reporting_initialized(): boolean;

export function utils_report_finished(task_id: number, msg: string): void;

export function utils_report_progress(task_id: number, completion: number, msg: string): void;

export function utils_report_started(msg: string): number;

export function utils_resolve_device(dev_spec: string): string;

export function utils_unload_kernel_module(module_name: string): boolean;

export function utils_version_cmp(ver_string1: string, ver_string2: string): number;

export function vdo_activate(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_change_write_policy(name: string, write_policy: VDOWritePolicy, extra?: ExtraArg[] | null): boolean;

export function vdo_create(
    name: string,
    backing_device: string,
    logical_size: number,
    index_memory: number,
    compression: boolean,
    deduplication: boolean,
    write_policy: VDOWritePolicy,
    extra?: ExtraArg[] | null
): boolean;

export function vdo_deactivate(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_disable_compression(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_disable_deduplication(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_enable_compression(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_enable_deduplication(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_error_quark(): GLib.Quark;

export function vdo_get_stats(name: string): VDOStats;

export function vdo_get_stats_full(name: string): GLib.HashTable<string, string>;

export function vdo_get_write_policy_from_str(policy_str: string): VDOWritePolicy;

export function vdo_get_write_policy_str(policy: VDOWritePolicy): string;

export function vdo_grow_logical(name: string, size: number, extra?: ExtraArg[] | null): boolean;

export function vdo_grow_physical(name: string, extra?: ExtraArg[] | null): boolean;

export function vdo_info(name: string): VDOInfo;

export function vdo_is_tech_avail(tech: VDOTech, mode: number): boolean;

export function vdo_remove(name: string, force: boolean, extra?: ExtraArg[] | null): boolean;

export function vdo_start(name: string, rebuild: boolean, extra?: ExtraArg[] | null): boolean;

export function vdo_stop(name: string, force: boolean, extra?: ExtraArg[] | null): boolean;

export type UtilsLogFunc = (level: number, msg: string) => void;
export type UtilsProgExtract = (line: string) => boolean;
export type UtilsProgFunc = (task_id: number, status: UtilsProgStatus, completion: number, msg?: string | null) => void;

export class BtrfsError extends GLib.Error {
    static $gtype: GObject.GType<BtrfsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: BtrfsError);

    // Properties
    static DEVICE: number;
    static PARSE: number;
    static TECH_UNAVAIL: number;
}

export namespace BtrfsTech {
    export const $gtype: GObject.GType<BtrfsTech>;
}

export enum BtrfsTech {
    FS = 0,
    MULTI_DEV = 1,
    SUBVOL = 2,
    SNAPSHOT = 3,
}

export class CryptoError extends GLib.Error {
    static $gtype: GObject.GType<CryptoError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CryptoError);

    // Properties
    static DEVICE: number;
    static STATE: number;
    static INVALID_SPEC: number;
    static FORMAT_FAILED: number;
    static RESIZE_FAILED: number;
    static RESIZE_PERM: number;
    static ADD_KEY: number;
    static REMOVE_KEY: number;
    static NO_KEY: number;
    static KEY_SLOT: number;
    static NSS_INIT_FAILED: number;
    static CERT_DECODE: number;
    static ESCROW_FAILED: number;
    static INVALID_PARAMS: number;
    static TECH_UNAVAIL: number;
}

export namespace CryptoLUKSVersion {
    export const $gtype: GObject.GType<CryptoLUKSVersion>;
}

export enum CryptoLUKSVersion {
    LUKS1 = 0,
    LUKS2 = 1,
}

export namespace CryptoTech {
    export const $gtype: GObject.GType<CryptoTech>;
}

export enum CryptoTech {
    LUKS = 0,
    LUKS2 = 1,
    TRUECRYPT = 2,
    ESCROW = 3,
    INTEGRITY = 4,
    BITLK = 5,
}

export class DMError extends GLib.Error {
    static $gtype: GObject.GType<DMError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DMError);

    // Properties
    static SYS: number;
    static NOT_ROOT: number;
    static TASK: number;
    static RAID_FAIL: number;
    static RAID_NO_DEVS: number;
    static TECH_UNAVAIL: number;
}

export namespace DMTech {
    export const $gtype: GObject.GType<DMTech>;
}

export enum DMTech {
    MAP = 0,
    RAID = 1,
}

export namespace FSTech {
    export const $gtype: GObject.GType<FSTech>;
}

export enum FSTech {
    GENERIC = 0,
    MOUNT = 1,
    EXT2 = 2,
    EXT3 = 3,
    EXT4 = 4,
    XFS = 5,
    VFAT = 6,
    NTFS = 7,
}

export class FsError extends GLib.Error {
    static $gtype: GObject.GType<FsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FsError);

    // Properties
    static INVAL: number;
    static PARSE: number;
    static FAIL: number;
    static NOFS: number;
    static PIPE: number;
    static UNMOUNT_FAIL: number;
    static NOT_SUPPORTED: number;
    static NOT_MOUNTED: number;
    static AUTH: number;
    static TECH_UNAVAIL: number;
}

export class InitError extends GLib.Error {
    static $gtype: GObject.GType<InitError>;

    constructor(options: { message: string; code: number });
    constructor(copy: InitError);

    // Properties
    static PLUGINS_FAILED: number;
    static NOT_IMPLEMENTED: number;
    static FAILED: number;
}

export namespace KBDBcacheMode {
    export const $gtype: GObject.GType<KBDBcacheMode>;
}

export enum KBDBcacheMode {
    WRITETHROUGH = 0,
    WRITEBACK = 1,
    WRITEAROUND = 2,
    NONE = 3,
    UNKNOWN = 4,
}

export class KBDError extends GLib.Error {
    static $gtype: GObject.GType<KBDError>;

    constructor(options: { message: string; code: number });
    constructor(copy: KBDError);

    // Properties
    static INVAL: number;
    static KMOD_INIT_FAIL: number;
    static MODULE_FAIL: number;
    static MODULE_NOEXIST: number;
    static ZRAM_NOEXIST: number;
    static ZRAM_INVAL: number;
    static BCACHE_PARSE: number;
    static BCACHE_SETUP_FAIL: number;
    static BCACHE_DETACH_FAIL: number;
    static BCACHE_NOT_ATTACHED: number;
    static BCACHE_UUID: number;
    static BCACHE_MODE_FAIL: number;
    static BCACHE_MODE_INVAL: number;
    static BCACHE_NOEXIST: number;
    static BCACHE_INVAL: number;
    static TECH_UNAVAIL: number;
}

export namespace KBDTech {
    export const $gtype: GObject.GType<KBDTech>;
}

export enum KBDTech {
    ZRAM = 0,
    BCACHE = 1,
}

export namespace LVMCacheMode {
    export const $gtype: GObject.GType<LVMCacheMode>;
}

export enum LVMCacheMode {
    WRITETHROUGH = 0,
    WRITEBACK = 1,
    UNKNOWN = 2,
}

export class LVMError extends GLib.Error {
    static $gtype: GObject.GType<LVMError>;

    constructor(options: { message: string; code: number });
    constructor(copy: LVMError);

    // Properties
    static PARSE: number;
    static NOEXIST: number;
    static DM_ERROR: number;
    static NOT_ROOT: number;
    static CACHE_INVAL: number;
    static CACHE_NOCACHE: number;
    static TECH_UNAVAIL: number;
    static FAIL: number;
    static NOT_SUPPORTED: number;
    static VDO_POLICY_INVAL: number;
}

export namespace LVMTech {
    export const $gtype: GObject.GType<LVMTech>;
}

export enum LVMTech {
    BASIC = 0,
    BASIC_SNAP = 1,
    THIN = 2,
    CACHE = 3,
    CALCS = 4,
    THIN_CALCS = 5,
    CACHE_CALCS = 6,
    GLOB_CONF = 7,
    VDO = 8,
}

export namespace LVMVDOCompressionState {
    export const $gtype: GObject.GType<LVMVDOCompressionState>;
}

export enum LVMVDOCompressionState {
    ONLINE = 0,
    OFFLINE = 1,
    UNKNOWN = 255,
}

export namespace LVMVDOIndexState {
    export const $gtype: GObject.GType<LVMVDOIndexState>;
}

export enum LVMVDOIndexState {
    ERROR = 0,
    CLOSED = 1,
    OPENING = 2,
    CLOSING = 3,
    OFFLINE = 4,
    ONLINE = 5,
    UNKNOWN = 255,
}

export namespace LVMVDOOperatingMode {
    export const $gtype: GObject.GType<LVMVDOOperatingMode>;
}

export enum LVMVDOOperatingMode {
    RECOVERING = 0,
    READ_ONLY = 1,
    NORMAL = 2,
    UNKNOWN = 255,
}

export namespace LVMVDOWritePolicy {
    export const $gtype: GObject.GType<LVMVDOWritePolicy>;
}

export enum LVMVDOWritePolicy {
    AUTO = 0,
    SYNC = 1,
    ASYNC = 2,
    UNKNOWN = 255,
}

export class LoopError extends GLib.Error {
    static $gtype: GObject.GType<LoopError>;

    constructor(options: { message: string; code: number });
    constructor(copy: LoopError);

    // Properties
    static DEVICE: number;
    static FAIL: number;
    static TECH_UNAVAIL: number;
}

export namespace LoopTech {
    export const $gtype: GObject.GType<LoopTech>;
}

export enum LoopTech {
    LOOP_TECH_LOOP = 0,
}

export class MDError extends GLib.Error {
    static $gtype: GObject.GType<MDError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MDError);

    // Properties
    static PARSE: number;
    static BAD_FORMAT: number;
    static NO_MATCH: number;
    static INVAL: number;
    static FAIL: number;
    static TECH_UNAVAIL: number;
}

export namespace MDTech {
    export const $gtype: GObject.GType<MDTech>;
}

export enum MDTech {
    MD_TECH_MDRAID = 0,
}

export class MpathError extends GLib.Error {
    static $gtype: GObject.GType<MpathError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MpathError);

    // Properties
    static FLUSH: number;
    static NOT_ROOT: number;
    static DM_ERROR: number;
    static INVAL: number;
    static TECH_UNAVAIL: number;
}

export namespace MpathTech {
    export const $gtype: GObject.GType<MpathTech>;
}

export enum MpathTech {
    BASE = 0,
    FRIENDLY_NAMES = 1,
}

export class NVDIMMError extends GLib.Error {
    static $gtype: GObject.GType<NVDIMMError>;

    constructor(options: { message: string; code: number });
    constructor(copy: NVDIMMError);

    // Properties
    static PARSE: number;
    static FAIL: number;
    static NOEXIST: number;
    static MODE_INVAL: number;
}

export namespace NVDIMMNamespaceMode {
    export const $gtype: GObject.GType<NVDIMMNamespaceMode>;
}

export enum NVDIMMNamespaceMode {
    RAW = 0,
    SECTOR = 1,
    MEMORY = 2,
    DAX = 3,
    FSDAX = 4,
    DEVDAX = 5,
    UNKNOWN = 6,
}

export namespace NVDIMMTech {
    export const $gtype: GObject.GType<NVDIMMTech>;
}

export enum NVDIMMTech {
    NVDIMM_TECH_NAMESPACE = 0,
}

export namespace PartAlign {
    export const $gtype: GObject.GType<PartAlign>;
}

export enum PartAlign {
    MINIMAL = 0,
    OPTIMAL = 1,
    NONE = 2,
}

export namespace PartDiskFlag {
    export const $gtype: GObject.GType<PartDiskFlag>;
}

export enum PartDiskFlag {
    PART_DISK_FLAG_GPT_PMBR_BOOT = 1,
}

export class PartError extends GLib.Error {
    static $gtype: GObject.GType<PartError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PartError);

    // Properties
    static EXISTS: number;
    static INVAL: number;
    static FAIL: number;
    static TECH_UNAVAIL: number;
}

export namespace PartTableType {
    export const $gtype: GObject.GType<PartTableType>;
}

export enum PartTableType {
    MSDOS = 0,
    GPT = 1,
    UNDEF = 2,
}

export namespace PartTech {
    export const $gtype: GObject.GType<PartTech>;
}

export enum PartTech {
    MBR = 0,
    GPT = 1,
}

export namespace PartType {
    export const $gtype: GObject.GType<PartType>;
}

export enum PartType {
    NORMAL = 0,
    LOGICAL = 1,
    EXTENDED = 2,
    FREESPACE = 4,
    METADATA = 8,
    PROTECTED = 16,
}

export namespace PartTypeReq {
    export const $gtype: GObject.GType<PartTypeReq>;
}

export enum PartTypeReq {
    NORMAL = 0,
    LOGICAL = 1,
    EXTENDED = 2,
    NEXT = 4,
}

export namespace Plugin {
    export const $gtype: GObject.GType<Plugin>;
}

export enum Plugin {
    LVM = 0,
    BTRFS = 1,
    SWAP = 2,
    LOOP = 3,
    CRYPTO = 4,
    MPATH = 5,
    DM = 6,
    MDRAID = 7,
    KBD = 8,
    S390 = 9,
    PART = 10,
    FS = 11,
    NVDIMM = 12,
    VDO = 13,
    UNDEF = 14,
}

export class SwapError extends GLib.Error {
    static $gtype: GObject.GType<SwapError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SwapError);

    // Properties
    static UNKNOWN_STATE: number;
    static ACTIVATE: number;
    static TECH_UNAVAIL: number;
    static ACTIVATE_OLD: number;
    static ACTIVATE_SUSPEND: number;
    static ACTIVATE_UNKNOWN: number;
    static ACTIVATE_PAGESIZE: number;
}

export namespace SwapTech {
    export const $gtype: GObject.GType<SwapTech>;
}

export enum SwapTech {
    SWAP_TECH_SWAP = 0,
}

export class UtilsDBusError extends GLib.Error {
    static $gtype: GObject.GType<UtilsDBusError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UtilsDBusError);

    // Properties
    static FAIL: number;
    static NOEXIST: number;
}

export class UtilsDevUtilsError extends GLib.Error {
    static $gtype: GObject.GType<UtilsDevUtilsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UtilsDevUtilsError);

    // Properties
    static UTILS_DEV_UTILS_ERROR_FAILED: number;
}

export class UtilsExecError extends GLib.Error {
    static $gtype: GObject.GType<UtilsExecError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UtilsExecError);

    // Properties
    static FAILED: number;
    static NOOUT: number;
    static INVAL_VER: number;
    static UTIL_UNAVAILABLE: number;
    static UTIL_UNKNOWN_VER: number;
    static UTIL_LOW_VER: number;
    static UTIL_CHECK_ERROR: number;
    static UTIL_FEATURE_CHECK_ERROR: number;
    static UTIL_FEATURE_UNAVAILABLE: number;
}

export class UtilsModuleError extends GLib.Error {
    static $gtype: GObject.GType<UtilsModuleError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UtilsModuleError);

    // Properties
    static KMOD_INIT_FAIL: number;
    static FAIL: number;
    static NOEXIST: number;
    static MODULE_CHECK_ERROR: number;
    static INVALID_PLATFORM: number;
}

export namespace UtilsProgStatus {
    export const $gtype: GObject.GType<UtilsProgStatus>;
}

export enum UtilsProgStatus {
    STARTED = 0,
    PROGRESS = 1,
    FINISHED = 2,
}

export class VDOError extends GLib.Error {
    static $gtype: GObject.GType<VDOError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VDOError);

    // Properties
    static VDO_ERROR_FAIL: number;
}

export namespace VDOTech {
    export const $gtype: GObject.GType<VDOTech>;
}

export enum VDOTech {
    VDO_TECH_VDO = 0,
}

export namespace VDOWritePolicy {
    export const $gtype: GObject.GType<VDOWritePolicy>;
}

export enum VDOWritePolicy {
    SYNC = 0,
    ASYNC = 1,
    AUTO = 2,
    UNKNOWN = 3,
}

export namespace BtrfsTechMode {
    export const $gtype: GObject.GType<BtrfsTechMode>;
}

export enum BtrfsTechMode {
    CREATE = 1,
    DELETE = 2,
    MODIFY = 4,
    QUERY = 8,
}

export namespace CryptoTechMode {
    export const $gtype: GObject.GType<CryptoTechMode>;
}

export enum CryptoTechMode {
    CREATE = 1,
    OPEN_CLOSE = 2,
    QUERY = 4,
    ADD_KEY = 8,
    REMOVE_KEY = 16,
    RESIZE = 32,
    SUSPEND_RESUME = 64,
    BACKUP_RESTORE = 128,
}

export namespace DMTechMode {
    export const $gtype: GObject.GType<DMTechMode>;
}

export enum DMTechMode {
    CREATE_ACTIVATE = 1,
    REMOVE_DEACTIVATE = 2,
    QUERY = 4,
}

export namespace FSTechMode {
    export const $gtype: GObject.GType<FSTechMode>;
}

export enum FSTechMode {
    MKFS = 1,
    WIPE = 2,
    CHECK = 4,
    REPAIR = 8,
    SET_LABEL = 16,
    QUERY = 32,
    RESIZE = 64,
}

export namespace FsResizeFlags {
    export const $gtype: GObject.GType<FsResizeFlags>;
}

export enum FsResizeFlags {
    OFFLINE_SHRINK = 2,
    OFFLINE_GROW = 4,
    ONLINE_SHRINK = 8,
    ONLINE_GROW = 16,
}

export namespace KBDTechMode {
    export const $gtype: GObject.GType<KBDTechMode>;
}

export enum KBDTechMode {
    CREATE = 1,
    DESTROY = 2,
    MODIFY = 4,
    QUERY = 8,
}

export namespace LVMCachePoolFlags {
    export const $gtype: GObject.GType<LVMCachePoolFlags>;
}

export enum LVMCachePoolFlags {
    STRIPED = 1,
    RAID1 = 2,
    RAID5 = 4,
    RAID6 = 8,
    RAID10 = 16,
    META_STRIPED = 1024,
    META_RAID1 = 2048,
    META_RAID5 = 4096,
    META_RAID6 = 8192,
    META_RAID10 = 16384,
}

export namespace LVMTechMode {
    export const $gtype: GObject.GType<LVMTechMode>;
}

export enum LVMTechMode {
    CREATE = 1,
    REMOVE = 4,
    MODIFY = 8,
    QUERY = 16,
}

export namespace LoopTechMode {
    export const $gtype: GObject.GType<LoopTechMode>;
}

export enum LoopTechMode {
    CREATE = 1,
    DESTROY = 2,
    MODIFY = 4,
    QUERY = 8,
}

export namespace MDTechMode {
    export const $gtype: GObject.GType<MDTechMode>;
}

export enum MDTechMode {
    CREATE = 1,
    DELETE = 2,
    MODIFY = 4,
    QUERY = 8,
}

export namespace MpathTechMode {
    export const $gtype: GObject.GType<MpathTechMode>;
}

export enum MpathTechMode {
    QUERY = 1,
    MODIFY = 2,
}

export namespace NVDIMMTechMode {
    export const $gtype: GObject.GType<NVDIMMTechMode>;
}

export enum NVDIMMTechMode {
    CREATE = 1,
    REMOVE = 2,
    ACTIVATE_DEACTIVATE = 4,
    QUERY = 8,
    RECONFIGURE = 16,
}

export namespace PartFlag {
    export const $gtype: GObject.GType<PartFlag>;
}

export enum PartFlag {
    BOOT = 2,
    ROOT = 4,
    SWAP = 8,
    HIDDEN = 16,
    RAID = 32,
    LVM = 64,
    LBA = 128,
    HPSERVICE = 256,
    CPALO = 512,
    PREP = 1024,
    MSFT_RESERVED = 2048,
    BIOS_GRUB = 4096,
    APPLE_TV_RECOVERY = 8192,
    DIAG = 16384,
    LEGACY_BOOT = 32768,
    MSFT_DATA = 65536,
    IRST = 131072,
    ESP = 262144,
    GPT_SYSTEM_PART = 33554432,
    GPT_READ_ONLY = 67108864,
    GPT_HIDDEN = 134217728,
    GPT_NO_AUTOMOUNT = 268435456,
}

export namespace PartTechMode {
    export const $gtype: GObject.GType<PartTechMode>;
}

export enum PartTechMode {
    CREATE_TABLE = 1,
    MODIFY_TABLE = 2,
    QUERY_TABLE = 4,
    MODIFY_PART = 8,
    QUERY_PART = 16,
}

export namespace SwapTechMode {
    export const $gtype: GObject.GType<SwapTechMode>;
}

export enum SwapTechMode {
    CREATE = 1,
    ACTIVATE_DEACTIVATE = 2,
    QUERY = 4,
    SET_LABEL = 8,
}

export namespace VDOTechMode {
    export const $gtype: GObject.GType<VDOTechMode>;
}

export enum VDOTechMode {
    CREATE = 1,
    REMOVE = 2,
    MODIFY = 4,
    ACTIVATE_DEACTIVATE = 8,
    START_STOP = 16,
    QUERY = 32,
    GROW = 64,
}

export class BtrfsDeviceInfo {
    static $gtype: GObject.GType<BtrfsDeviceInfo>;

    constructor(
        properties?: Partial<{
            id?: number;
            path?: string;
            size?: number;
            used?: number;
        }>
    );

    constructor(copy: BtrfsDeviceInfo);

    // Fields
    id: number;
    path: string;
    size: number;
    used: number;
}

export class BtrfsFilesystemInfo {
    static $gtype: GObject.GType<BtrfsFilesystemInfo>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            num_devices?: number;
            used?: number;
        }>
    );

    constructor(copy: BtrfsFilesystemInfo);

    // Fields
    label: string;
    uuid: string;
    num_devices: number;
    used: number;
}

export class BtrfsSubvolumeInfo {
    static $gtype: GObject.GType<BtrfsSubvolumeInfo>;

    constructor(
        properties?: Partial<{
            id?: number;
            parent_id?: number;
            path?: string;
        }>
    );

    constructor(copy: BtrfsSubvolumeInfo);

    // Fields
    id: number;
    parent_id: number;
    path: string;
}

export class CryptoIntegrityInfo {
    static $gtype: GObject.GType<CryptoIntegrityInfo>;

    constructor(
        properties?: Partial<{
            algorithm?: string;
            key_size?: number;
            sector_size?: number;
            tag_size?: number;
            interleave_sectors?: number;
            journal_size?: number;
            journal_crypt?: string;
            journal_integrity?: string;
        }>
    );

    constructor(copy: CryptoIntegrityInfo);

    // Fields
    algorithm: string;
    key_size: number;
    sector_size: number;
    tag_size: number;
    interleave_sectors: number;
    journal_size: number;
    journal_crypt: string;
    journal_integrity: string;

    // Members
    copy(): CryptoIntegrityInfo;
}

export class CryptoLUKSExtra {
    static $gtype: GObject.GType<CryptoLUKSExtra>;

    constructor(
        data_alignment: number,
        data_device: string | null,
        integrity: string | null,
        sector_size: number,
        label?: string | null,
        subsystem?: string | null,
        pbkdf?: CryptoLUKSPBKDF | null
    );

    constructor(
        properties?: Partial<{
            data_alignment?: number;
            data_device?: string;
            integrity?: string;
            sector_size?: number;
            label?: string;
            subsystem?: string;
            pbkdf?: CryptoLUKSPBKDF;
        }>
    );

    constructor(copy: CryptoLUKSExtra);

    // Fields
    data_alignment: number;
    data_device: string;
    integrity: string;
    sector_size: number;
    label: string;
    subsystem: string;
    pbkdf: CryptoLUKSPBKDF;

    // Constructors
    static ['new'](
        data_alignment: number,
        data_device: string | null,
        integrity: string | null,
        sector_size: number,
        label?: string | null,
        subsystem?: string | null,
        pbkdf?: CryptoLUKSPBKDF | null
    ): CryptoLUKSExtra;
}

export class CryptoLUKSInfo {
    static $gtype: GObject.GType<CryptoLUKSInfo>;

    constructor(copy: CryptoLUKSInfo);

    // Fields
    version: CryptoLUKSVersion;
    cipher: string;
    mode: string;
    uuid: string;
    backing_device: string;
    sector_size: number;
}

export class CryptoLUKSPBKDF {
    static $gtype: GObject.GType<CryptoLUKSPBKDF>;

    constructor(
        type: string | null,
        hash: string | null,
        max_memory_kb: number,
        iterations: number,
        time_ms: number,
        parallel_threads: number
    );

    constructor(
        properties?: Partial<{
            type?: string;
            hash?: string;
            max_memory_kb?: number;
            iterations?: number;
            time_ms?: number;
            parallel_threads?: number;
        }>
    );

    constructor(copy: CryptoLUKSPBKDF);

    // Fields
    type: string;
    hash: string;
    max_memory_kb: number;
    iterations: number;
    time_ms: number;
    parallel_threads: number;

    // Constructors
    static ['new'](
        type: string | null,
        hash: string | null,
        max_memory_kb: number,
        iterations: number,
        time_ms: number,
        parallel_threads: number
    ): CryptoLUKSPBKDF;
}

export class ExtraArg {
    static $gtype: GObject.GType<ExtraArg>;

    constructor(opt: string, val: string);
    constructor(
        properties?: Partial<{
            opt?: string;
            val?: string;
        }>
    );

    constructor(copy: ExtraArg);

    // Fields
    opt: string;
    val: string;

    // Constructors
    static ['new'](opt: string, val: string): ExtraArg;

    // Members
    copy(): ExtraArg;

    free(): void;
}

export class FSExt2Info {
    static $gtype: GObject.GType<FSExt2Info>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            state?: string;
            block_size?: number;
            block_count?: number;
            free_blocks?: number;
        }>
    );

    constructor(copy: FSExt2Info);

    // Fields
    label: string;
    uuid: string;
    state: string;
    block_size: number;
    block_count: number;
    free_blocks: number;
}

export class FSExt3Info {
    static $gtype: GObject.GType<FSExt3Info>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            state?: string;
            block_size?: number;
            block_count?: number;
            free_blocks?: number;
        }>
    );

    constructor(copy: FSExt3Info);

    // Fields
    label: string;
    uuid: string;
    state: string;
    block_size: number;
    block_count: number;
    free_blocks: number;
}

export class FSExt4Info {
    static $gtype: GObject.GType<FSExt4Info>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            state?: string;
            block_size?: number;
            block_count?: number;
            free_blocks?: number;
        }>
    );

    constructor(copy: FSExt4Info);

    // Fields
    label: string;
    uuid: string;
    state: string;
    block_size: number;
    block_count: number;
    free_blocks: number;
}

export class FSExtInfo {
    static $gtype: GObject.GType<FSExtInfo>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            state?: string;
            block_size?: number;
            block_count?: number;
            free_blocks?: number;
        }>
    );

    constructor(copy: FSExtInfo);

    // Fields
    label: string;
    uuid: string;
    state: string;
    block_size: number;
    block_count: number;
    free_blocks: number;
}

export class FSNtfsInfo {
    static $gtype: GObject.GType<FSNtfsInfo>;

    constructor(
        properties?: Partial<{
            size?: number;
            free_space?: number;
        }>
    );

    constructor(copy: FSNtfsInfo);

    // Fields
    size: number;
    free_space: number;
}

export class FSVfatInfo {
    static $gtype: GObject.GType<FSVfatInfo>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            cluster_size?: number;
            cluster_count?: number;
            free_cluster_count?: number;
        }>
    );

    constructor(copy: FSVfatInfo);

    // Fields
    label: string;
    uuid: string;
    cluster_size: number;
    cluster_count: number;
    free_cluster_count: number;
}

export class FSXfsInfo {
    static $gtype: GObject.GType<FSXfsInfo>;

    constructor(
        properties?: Partial<{
            label?: string;
            uuid?: string;
            block_size?: number;
            block_count?: number;
        }>
    );

    constructor(copy: FSXfsInfo);

    // Fields
    label: string;
    uuid: string;
    block_size: number;
    block_count: number;
}

export class KBDBcacheStats {
    static $gtype: GObject.GType<KBDBcacheStats>;

    constructor(
        properties?: Partial<{
            state?: string;
            block_size?: number;
            cache_size?: number;
            cache_used?: number;
            hits?: number;
            misses?: number;
            bypass_hits?: number;
            bypass_misses?: number;
        }>
    );

    constructor(copy: KBDBcacheStats);

    // Fields
    state: string;
    block_size: number;
    cache_size: number;
    cache_used: number;
    hits: number;
    misses: number;
    bypass_hits: number;
    bypass_misses: number;
}

export class KBDZramStats {
    static $gtype: GObject.GType<KBDZramStats>;

    constructor(
        properties?: Partial<{
            disksize?: number;
            num_reads?: number;
            num_writes?: number;
            invalid_io?: number;
            zero_pages?: number;
            max_comp_streams?: number;
            comp_algorithm?: string;
            orig_data_size?: number;
            compr_data_size?: number;
            mem_used_total?: number;
        }>
    );

    constructor(copy: KBDZramStats);

    // Fields
    disksize: number;
    num_reads: number;
    num_writes: number;
    invalid_io: number;
    zero_pages: number;
    max_comp_streams: number;
    comp_algorithm: string;
    orig_data_size: number;
    compr_data_size: number;
    mem_used_total: number;
}

export class LVMCacheStats {
    static $gtype: GObject.GType<LVMCacheStats>;

    constructor(copy: LVMCacheStats);

    // Fields
    block_size: number;
    cache_size: number;
    cache_used: number;
    md_block_size: number;
    md_size: number;
    md_used: number;
    read_hits: number;
    read_misses: number;
    write_hits: number;
    write_misses: number;
    mode: LVMCacheMode;
}

export class LVMLVdata {
    static $gtype: GObject.GType<LVMLVdata>;

    constructor(
        properties?: Partial<{
            lv_name?: string;
            vg_name?: string;
            uuid?: string;
            size?: number;
            attr?: string;
            segtype?: string;
            origin?: string;
            pool_lv?: string;
            data_lv?: string;
            metadata_lv?: string;
            roles?: string;
            move_pv?: string;
            data_percent?: number;
            metadata_percent?: number;
            copy_percent?: number;
        }>
    );

    constructor(copy: LVMLVdata);

    // Fields
    lv_name: string;
    vg_name: string;
    uuid: string;
    size: number;
    attr: string;
    segtype: string;
    origin: string;
    pool_lv: string;
    data_lv: string;
    metadata_lv: string;
    roles: string;
    move_pv: string;
    data_percent: number;
    metadata_percent: number;
    copy_percent: number;
}

export class LVMPVdata {
    static $gtype: GObject.GType<LVMPVdata>;

    constructor(
        properties?: Partial<{
            pv_name?: string;
            pv_uuid?: string;
            pv_free?: number;
            pv_size?: number;
            pe_start?: number;
            vg_name?: string;
            vg_uuid?: string;
            vg_size?: number;
            vg_free?: number;
            vg_extent_size?: number;
            vg_extent_count?: number;
            vg_free_count?: number;
            vg_pv_count?: number;
        }>
    );

    constructor(copy: LVMPVdata);

    // Fields
    pv_name: string;
    pv_uuid: string;
    pv_free: number;
    pv_size: number;
    pe_start: number;
    vg_name: string;
    vg_uuid: string;
    vg_size: number;
    vg_free: number;
    vg_extent_size: number;
    vg_extent_count: number;
    vg_free_count: number;
    vg_pv_count: number;
}

export class LVMVDOPooldata {
    static $gtype: GObject.GType<LVMVDOPooldata>;

    constructor(copy: LVMVDOPooldata);

    // Fields
    operating_mode: LVMVDOOperatingMode;
    compression_state: LVMVDOCompressionState;
    index_state: LVMVDOIndexState;
    write_policy: LVMVDOWritePolicy;
    used_size: number;
    saving_percent: number;
    index_memory_size: number;
    deduplication: boolean;
    compression: boolean;
}

export class LVMVDOStats {
    static $gtype: GObject.GType<LVMVDOStats>;

    constructor(
        properties?: Partial<{
            block_size?: number;
            logical_block_size?: number;
            physical_blocks?: number;
            data_blocks_used?: number;
            overhead_blocks_used?: number;
            logical_blocks_used?: number;
            used_percent?: number;
            saving_percent?: number;
            write_amplification_ratio?: number;
        }>
    );

    constructor(copy: LVMVDOStats);

    // Fields
    block_size: number;
    logical_block_size: number;
    physical_blocks: number;
    data_blocks_used: number;
    overhead_blocks_used: number;
    logical_blocks_used: number;
    used_percent: number;
    saving_percent: number;
    write_amplification_ratio: number;
}

export class LVMVGdata {
    static $gtype: GObject.GType<LVMVGdata>;

    constructor(
        properties?: Partial<{
            name?: string;
            uuid?: string;
            size?: number;
            free?: number;
            extent_size?: number;
            extent_count?: number;
            free_count?: number;
            pv_count?: number;
        }>
    );

    constructor(copy: LVMVGdata);

    // Fields
    name: string;
    uuid: string;
    size: number;
    free: number;
    extent_size: number;
    extent_count: number;
    free_count: number;
    pv_count: number;
}

export class MDDetailData {
    static $gtype: GObject.GType<MDDetailData>;

    constructor(
        properties?: Partial<{
            device?: string;
            metadata?: string;
            creation_time?: string;
            level?: string;
            name?: string;
            array_size?: number;
            use_dev_size?: number;
            raid_devices?: number;
            total_devices?: number;
            active_devices?: number;
            working_devices?: number;
            failed_devices?: number;
            spare_devices?: number;
            clean?: boolean;
            uuid?: string;
        }>
    );

    constructor(copy: MDDetailData);

    // Fields
    device: string;
    metadata: string;
    creation_time: string;
    level: string;
    name: string;
    array_size: number;
    use_dev_size: number;
    raid_devices: number;
    total_devices: number;
    active_devices: number;
    working_devices: number;
    failed_devices: number;
    spare_devices: number;
    clean: boolean;
    uuid: string;
}

export class MDExamineData {
    static $gtype: GObject.GType<MDExamineData>;

    constructor(
        properties?: Partial<{
            device?: string;
            level?: string;
            num_devices?: number;
            name?: string;
            size?: number;
            uuid?: string;
            update_time?: number;
            dev_uuid?: string;
            events?: number;
            metadata?: string;
            chunk_size?: number;
        }>
    );

    constructor(copy: MDExamineData);

    // Fields
    device: string;
    level: string;
    num_devices: number;
    name: string;
    size: number;
    uuid: string;
    update_time: number;
    dev_uuid: string;
    events: number;
    metadata: string;
    chunk_size: number;
}

export class NVDIMMNamespaceInfo {
    static $gtype: GObject.GType<NVDIMMNamespaceInfo>;

    constructor(
        properties?: Partial<{
            dev?: string;
            mode?: number;
            size?: number;
            uuid?: string;
            sector_size?: number;
            blockdev?: string;
            enabled?: boolean;
        }>
    );

    constructor(copy: NVDIMMNamespaceInfo);

    // Fields
    dev: string;
    mode: number;
    size: number;
    uuid: string;
    sector_size: number;
    blockdev: string;
    enabled: boolean;
}

export class PartDiskSpec {
    static $gtype: GObject.GType<PartDiskSpec>;

    constructor(copy: PartDiskSpec);

    // Fields
    path: string;
    table_type: PartTableType;
    size: number;
    sector_size: number;
    flags: number;

    // Members
    copy(): PartDiskSpec;

    free(): void;
}

export class PartSpec {
    static $gtype: GObject.GType<PartSpec>;

    constructor(
        properties?: Partial<{
            path?: string;
            name?: string;
            type_guid?: string;
            type?: number;
            start?: number;
            size?: number;
            flags?: number;
        }>
    );

    constructor(copy: PartSpec);

    // Fields
    path: string;
    name: string;
    type_guid: string;
    type: number;
    start: number;
    size: number;
    flags: number;

    // Members
    copy(): PartSpec;

    free(): void;
}

export class PluginSpec {
    static $gtype: GObject.GType<PluginSpec>;

    constructor(copy: PluginSpec);

    // Fields
    name: Plugin;
    so_name: string;
}

export class UtilsLinuxVersion {
    static $gtype: GObject.GType<UtilsLinuxVersion>;

    constructor(
        properties?: Partial<{
            major?: number;
            minor?: number;
            micro?: number;
        }>
    );

    constructor(copy: UtilsLinuxVersion);

    // Fields
    major: number;
    minor: number;
    micro: number;
}

export class VDOInfo {
    static $gtype: GObject.GType<VDOInfo>;

    constructor(copy: VDOInfo);

    // Fields
    name: string;
    device: string;
    active: boolean;
    deduplication: boolean;
    compression: boolean;
    logical_size: number;
    physical_size: number;
    index_memory: number;
    write_policy: VDOWritePolicy;
}

export class VDOStats {
    static $gtype: GObject.GType<VDOStats>;

    constructor(
        properties?: Partial<{
            block_size?: number;
            logical_block_size?: number;
            physical_blocks?: number;
            data_blocks_used?: number;
            overhead_blocks_used?: number;
            logical_blocks_used?: number;
            used_percent?: number;
            saving_percent?: number;
            write_amplification_ratio?: number;
        }>
    );

    constructor(copy: VDOStats);

    // Fields
    block_size: number;
    logical_block_size: number;
    physical_blocks: number;
    data_blocks_used: number;
    overhead_blocks_used: number;
    logical_blocks_used: number;
    used_percent: number;
    saving_percent: number;
    write_amplification_ratio: number;
}
