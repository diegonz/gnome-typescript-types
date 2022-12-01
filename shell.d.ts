import * as Clutter from 'clutter';
import * as St from 'st';

export enum ActionMode {
    NONE,
    NORMAL,
    OVERVIEW,
    LOCK_SCREEN,
    UNLOCK_SCREEN,
    LOGIN_SCREEN,
    SYSTEM_MODAL,
    LOOKING_GLASS,
    POPUP,

    ALL = -1,
}

export interface Dialog extends St.Widget {
    _dialog: St.Widget;
    contentLayout: St.Widget;
}

export interface ModalDialog extends St.Widget {
    contentLayout: St.Widget;
    dialogLayout: Dialog;

    addButton(action: string): void;

    close(timestamp: number): void;

    open(timestamp: number, on_primary: boolean): void;

    setInitialKeyFocus(actor: Clutter.Actor): void;
}
