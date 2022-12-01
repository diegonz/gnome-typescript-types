/**
 * Grss 0.7
 *
 * Generated from 0.7
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Soup from './soup';
import * as libxml2 from './libxml2';

export namespace FeedAtomFormatter {
    export interface ConstructorProperties extends FeedFormatter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedAtomFormatter extends FeedFormatter {
    static $gtype: GObject.GType<FeedAtomFormatter>;

    constructor(properties?: Partial<FeedAtomFormatter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedAtomFormatter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FeedAtomFormatter;
}

export namespace FeedChannel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedChannel extends GObject.Object {
    static $gtype: GObject.GType<FeedChannel>;

    constructor(properties?: Partial<FeedChannel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedChannel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedChannelPrivate;

    // Constructors

    static ['new'](): FeedChannel;

    static new_from_file(path: string): FeedChannel;

    static new_from_memory(data: string): FeedChannel;

    static new_from_xml(doc: libxml2.DocPtr): FeedChannel;

    static new_with_source(source: string): FeedChannel;

    // Members

    add_contributor(contributor: Person): void;

    add_cookie(cookie: Soup.Cookie): void;

    fetch(): boolean;

    fetch_all(): FeedItem[];

    fetch_all_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_all_finish(res: Gio.AsyncResult): FeedItem[];

    fetch_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_cancel(): boolean;

    fetch_finish(res: Gio.AsyncResult): boolean;

    get_category(): string;

    get_contributors(): Person[];

    get_cookies(): Soup.Cookie[];

    get_copyright(): string;

    get_description(): string;

    get_editor(): Person;

    get_format(): string;

    get_generator(): string;

    get_gzip_compression(): boolean;

    get_homepage(): string;

    get_icon(): string;

    get_image(): string;

    get_language(): string;

    get_publish_time(): number;

    get_pubsubhub(hub: string): boolean;

    get_rsscloud(path: string, protocol: string): boolean;

    get_source(): string;

    get_title(): string;

    get_update_interval(): number;

    get_update_time(): number;

    get_webmaster(): string;

    set_category(category: string): void;

    set_copyright(copyright: string): void;

    set_description(description: string): void;

    set_editor(editor: Person): void;

    set_format(format: string): void;

    set_generator(generator: string): void;

    set_gzip_compression(value: boolean): void;

    set_homepage(homepage: string): boolean;

    set_icon(icon: string): boolean;

    set_image(image: string): boolean;

    set_language(language: string): void;

    set_publish_time(publish: number): void;

    set_pubsubhub(hub: string): boolean;

    set_rsscloud(path: string, protocol: string): void;

    set_source(source: string): boolean;

    set_title(title: string): void;

    set_update_interval(minutes: number): void;

    set_update_time(update: number): void;

    set_webmaster(webmaster: string): void;
}

export namespace FeedEnclosure {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedEnclosure extends GObject.Object {
    static $gtype: GObject.GType<FeedEnclosure>;

    constructor(properties?: Partial<FeedEnclosure.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedEnclosure.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedEnclosurePrivate;

    // Constructors

    static ['new'](url: string): FeedEnclosure;

    // Members

    fetch(): Gio.File;

    fetch_async(callback?: Gio.AsyncReadyCallback<this> | null): void;

    fetch_finish(res: Gio.AsyncResult): Gio.File;

    get_format(): string;

    get_length(): number;

    get_url(): string;

    set_format(type: string): void;

    set_length(length: number): void;
}

export namespace FeedFormatter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class FeedFormatter extends GObject.Object {
    static $gtype: GObject.GType<FeedFormatter>;

    constructor(properties?: Partial<FeedFormatter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedFormatter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedFormatterPrivate;

    // Members

    add_item(item: FeedItem): void;

    add_items(items: FeedItem[]): void;

    format(): string;

    get_channel(): FeedChannel;

    get_items(): FeedItem[];

    reset(): void;

    set_channel(channel: FeedChannel): void;

    vfunc_format(): string;
}

export namespace FeedItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedItem extends GObject.Object {
    static $gtype: GObject.GType<FeedItem>;

    constructor(properties?: Partial<FeedItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedItem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedItemPrivate;

    // Constructors

    static ['new'](parent: FeedChannel): FeedItem;

    // Members

    add_category(category: string): void;

    add_contributor(contributor: Person): void;

    add_enclosure(enclosure: FeedEnclosure): void;

    get_author(): Person;

    get_categories(): string[];

    get_comments_url(): string;

    get_contributors(): Person[];

    get_copyright(): string;

    get_description(): string;

    get_enclosures(): FeedEnclosure[];

    get_geo_point(latitude: number, longitude: number): boolean;

    get_id(): string;

    get_parent(): FeedChannel;

    get_publish_time(): number;

    get_real_source(realsource: string, title: string): void;

    get_related(): string;

    get_source(): string;

    get_title(): string;

    set_author(author: Person): void;

    set_comments_url(url: string): boolean;

    set_copyright(copyright: string): void;

    set_description(description: string): void;

    set_geo_point(latitude: number, longitude: number): void;

    set_id(id: string): void;

    set_publish_time(publish: number): void;

    set_real_source(realsource: string, title: string): boolean;

    set_related(related: string): void;

    set_source(source: string): boolean;

    set_title(title: string): void;
}

export namespace FeedParser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedParser extends GObject.Object {
    static $gtype: GObject.GType<FeedParser>;

    constructor(properties?: Partial<FeedParser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedParser.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedParserPrivate;

    // Constructors

    static ['new'](): FeedParser;

    // Members

    parse(feed: FeedChannel, doc: libxml2.DocPtr): FeedItem[];

    parse_channel(feed: FeedChannel, doc: libxml2.DocPtr): void;
}

export namespace FeedRssFormatter {
    export interface ConstructorProperties extends FeedFormatter.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedRssFormatter extends FeedFormatter {
    static $gtype: GObject.GType<FeedRssFormatter>;

    constructor(properties?: Partial<FeedRssFormatter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedRssFormatter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FeedRssFormatter;
}

export namespace FeedsGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedsGroup extends GObject.Object {
    static $gtype: GObject.GType<FeedsGroup>;

    constructor(properties?: Partial<FeedsGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedsGroup.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedsGroupPrivate;

    // Constructors

    static ['new'](): FeedsGroup;

    // Members

    export_file(channels: FeedChannel[], format: string, uri: string): boolean;

    get_formats(): string[];

    parse_file(path: string): FeedChannel[];
}

export namespace FeedsPool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedsPool extends GObject.Object {
    static $gtype: GObject.GType<FeedsPool>;

    constructor(properties?: Partial<FeedsPool.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedsPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedsPoolPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'feed-fail', callback: (_source: this, feed: GObject.Object) => void): number;

    connect_after(signal: 'feed-fail', callback: (_source: this, feed: GObject.Object) => void): number;

    emit(signal: 'feed-fail', feed: GObject.Object): void;

    connect(signal: 'feed-fetching', callback: (_source: this, feed: GObject.Object) => void): number;

    connect_after(signal: 'feed-fetching', callback: (_source: this, feed: GObject.Object) => void): number;

    emit(signal: 'feed-fetching', feed: GObject.Object): void;

    connect(signal: 'feed-ready', callback: (_source: this, feed: GObject.Object, items: FeedItem[]) => void): number;

    connect_after(
        signal: 'feed-ready',
        callback: (_source: this, feed: GObject.Object, items: FeedItem[]) => void
    ): number;

    emit(signal: 'feed-ready', feed: GObject.Object, items: FeedItem[]): void;

    // Constructors

    static ['new'](): FeedsPool;

    // Members

    get_listened(): FeedChannel[];

    get_listened_num(): number;

    get_session(): Soup.Session;

    listen(feeds: FeedChannel[]): void;

    ['switch'](run: boolean): void;

    vfunc_feed_fetching(feed: FeedChannel): void;
}

export namespace FeedsPublisher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedsPublisher extends GObject.Object {
    static $gtype: GObject.GType<FeedsPublisher>;

    constructor(properties?: Partial<FeedsPublisher.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedsPublisher.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedsPublisherPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'delete-subscription', callback: (_source: this, object: FeedChannel, p0: string) => void): number;

    connect_after(
        signal: 'delete-subscription',
        callback: (_source: this, object: FeedChannel, p0: string) => void
    ): number;

    emit(signal: 'delete-subscription', object: FeedChannel, p0: string): void;

    connect(signal: 'new-subscription', callback: (_source: this, object: FeedChannel, p0: string) => void): number;

    connect_after(
        signal: 'new-subscription',
        callback: (_source: this, object: FeedChannel, p0: string) => void
    ): number;

    emit(signal: 'new-subscription', object: FeedChannel, p0: string): void;

    // Constructors

    static ['new'](): FeedsPublisher;

    // Members

    format_content(channel: FeedChannel, items: FeedItem[]): string;

    hub_set_port(port: number): void;

    hub_set_topics(topics: FeedChannel[]): void;

    hub_switch(run: boolean): void;

    publish_file(channel: FeedChannel, items: FeedItem[], uri: string): boolean;

    publish_web(channel: FeedChannel, items: FeedItem[], id: string): boolean;

    vfunc_delete_subscription(topic: FeedChannel, callback: string): void;

    vfunc_new_subscription(topic: FeedChannel, callback: string): void;
}

export namespace FeedsStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class FeedsStore extends GObject.Object {
    static $gtype: GObject.GType<FeedsStore>;

    constructor(properties?: Partial<FeedsStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedsStore.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedsStorePrivate;

    // Members

    add_item_in_channel(channel: FeedChannel, item: FeedItem): void;

    get_channels(): FeedChannel[];

    get_items_by_channel(channel: FeedChannel): FeedItem[];

    has_item(channel: FeedChannel, id: string): boolean;

    ['switch'](run: boolean): void;

    vfunc_add_item_in_channel(channel: FeedChannel, item: FeedItem): void;

    vfunc_get_channels(): FeedChannel[];

    vfunc_get_items_by_channel(channel: FeedChannel): FeedItem[];

    vfunc_has_item(channel: FeedChannel, id: string): boolean;
}

export namespace FeedsSubscriber {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class FeedsSubscriber extends GObject.Object {
    static $gtype: GObject.GType<FeedsSubscriber>;

    constructor(properties?: Partial<FeedsSubscriber.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FeedsSubscriber.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FeedsSubscriberPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'notification-received',
        callback: (_source: this, feed: GObject.Object, item: GObject.Object) => void
    ): number;

    connect_after(
        signal: 'notification-received',
        callback: (_source: this, feed: GObject.Object, item: GObject.Object) => void
    ): number;

    emit(signal: 'notification-received', feed: GObject.Object, item: GObject.Object): void;

    // Constructors

    static ['new'](): FeedsSubscriber;

    // Members

    get_address(): Gio.InetAddress;

    get_listened(): FeedChannel[];

    get_port(): number;

    get_session(): Soup.Session;

    listen(feeds: FeedChannel[]): boolean;

    set_port(port: number): void;

    ['switch'](run: boolean): void;

    vfunc_notification_received(feed: FeedChannel, item: FeedItem): void;
}

export class FeedAtomFormatterPrivate {
    static $gtype: GObject.GType<FeedAtomFormatterPrivate>;

    constructor(copy: FeedAtomFormatterPrivate);
}

export class FeedChannelPrivate {
    static $gtype: GObject.GType<FeedChannelPrivate>;

    constructor(copy: FeedChannelPrivate);
}

export class FeedEnclosurePrivate {
    static $gtype: GObject.GType<FeedEnclosurePrivate>;

    constructor(copy: FeedEnclosurePrivate);
}

export class FeedFormatterPrivate {
    static $gtype: GObject.GType<FeedFormatterPrivate>;

    constructor(copy: FeedFormatterPrivate);
}

export class FeedItemPrivate {
    static $gtype: GObject.GType<FeedItemPrivate>;

    constructor(copy: FeedItemPrivate);
}

export class FeedParserPrivate {
    static $gtype: GObject.GType<FeedParserPrivate>;

    constructor(copy: FeedParserPrivate);
}

export class FeedRssFormatterPrivate {
    static $gtype: GObject.GType<FeedRssFormatterPrivate>;

    constructor(copy: FeedRssFormatterPrivate);
}

export class FeedsGroupPrivate {
    static $gtype: GObject.GType<FeedsGroupPrivate>;

    constructor(copy: FeedsGroupPrivate);
}

export class FeedsPoolPrivate {
    static $gtype: GObject.GType<FeedsPoolPrivate>;

    constructor(copy: FeedsPoolPrivate);
}

export class FeedsPublisherPrivate {
    static $gtype: GObject.GType<FeedsPublisherPrivate>;

    constructor(copy: FeedsPublisherPrivate);
}

export class FeedsStorePrivate {
    static $gtype: GObject.GType<FeedsStorePrivate>;

    constructor(copy: FeedsStorePrivate);
}

export class FeedsSubscriberPrivate {
    static $gtype: GObject.GType<FeedsSubscriberPrivate>;

    constructor(copy: FeedsSubscriberPrivate);
}

export class Person {
    static $gtype: GObject.GType<Person>;

    constructor(name: string, email?: string | null, uri?: string | null);
    constructor(copy: Person);

    // Constructors
    static ['new'](name: string, email?: string | null, uri?: string | null): Person;

    // Members
    get_email(): string;

    get_name(): string;

    get_uri(): string;

    ref(): Person;

    unref(): void;
}
