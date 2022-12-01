declare const Clutter: any;
declare const St: any;
declare const Main: any;
declare const Params: any;
declare var GrabHelper: {
    new (owner: any, params: any): {
        _owner: any;
        _modalParams: any;
        _grabStack: any[];
        _ignoreUntilRelease: boolean;
        _modalCount: number;
        _isWithinGrabbedActor(actor: any): boolean;
        readonly currentGrab: any;
        readonly grabbed: boolean;
        readonly grabStack: any[];
        _findStackIndex(actor: any): number;
        _actorInGrabStack(actor: any): number;
        isActorGrabbed(actor: any): boolean;
        grab(params: any): boolean;
        grabAsync(params: any): Promise<any>;
        _takeModalGrab(): boolean;
        _grab: any;
        _capturedEventId: any;
        _releaseModalGrab(): void;
        ignoreRelease(): void;
        ungrab(params: any): void;
        onCapturedEvent(event: any): any;
    };
};
//# sourceMappingURL=grabHelper.d.ts.map