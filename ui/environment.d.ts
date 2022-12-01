declare function _patchContainerClass(containerClass: any): void;
declare function _patchLayoutClass(layoutClass: any, styleProps: any): void;
/**
 * Mimick the Soup 3 APIs we use when falling back to Soup 2.4
 *
 * @param {object} Soup 2.4 namespace
 * @returns {void}
 */
declare function _injectSoup3Compat(Soup: object): void;
declare function _makeEaseCallback(params: any, cleanup: any): (isFinished: any) => void;
declare function _getPropertyTarget(actor: any, propName: any): any[];
declare function _easeActor(actor: any, params: any): void;
declare function _easeActorProperty(actor: any, propName: any, target: any, params: any): void;
declare function init(): void;
declare function init(): void;
declare function init(): void;
declare function adjustAnimationTime(msecs: any): number;
declare const Config: any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const Polkit: any;
declare const Shell: any;
declare const St: any;
declare const Gettext: any;
declare const System: any;
declare const SignalTracker: any;
declare let _localTimeZone: any;
//# sourceMappingURL=environment.d.ts.map