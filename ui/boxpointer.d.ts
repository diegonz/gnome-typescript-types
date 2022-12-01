declare const Clutter: any;
declare const GObject: any;
declare const Meta: any;
declare const St: any;
declare const Main: any;
declare namespace PopupAnimation {
    const NONE: number;
    const SLIDE: number;
    const FADE: number;
    const FULL: number;
}
declare var POPUP_ANIMATION_TIME: number;
/**
 * BoxPointer:
 * @side: side to draw the arrow on
 * @binProperties: Properties to set on contained bin
 *
 * An actor which displays a triangle "arrow" pointing to a given
 * side.  The .bin property is a container in which content can be
 * placed.  The arrow position may be controlled via
 * setArrowOrigin(). The arrow side might be temporarily flipped
 * depending on the box size and source position to keep the box
 * totally inside the monitor workarea if possible.
 *
 */
declare var BoxPointer: any;
//# sourceMappingURL=boxpointer.d.ts.map