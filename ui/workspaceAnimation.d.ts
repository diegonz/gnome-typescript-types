declare const Clutter: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Background: any;
declare const Layout: any;
declare const Main: any;
declare const SwipeTracker: any;
declare const WINDOW_ANIMATION_TIME: 250;
declare const WORKSPACE_SPACING: 100;
declare var WorkspaceGroup: any;
declare const MonitorGroup: any;
declare var WorkspaceAnimationController: {
    new (): {
        _movingWindow: any;
        _switchData: {
            monitors: any[];
            gestureActivated: boolean;
            inProgress: boolean;
        };
        _swipeTracker: any;
        _prepareWorkspaceSwitch(workspaceIndices: any): void;
        _finishWorkspaceSwitch(switchData: any): void;
        movingWindow: any;
        animateSwitch(from: any, to: any, direction: any, onComplete: any): void;
        canHandleScrollEvent(event: any): any;
        _findMonitorGroup(monitorIndex: any): any;
        _switchWorkspaceBegin(tracker: any, monitor: any): void;
        _switchWorkspaceUpdate(tracker: any, progress: any): void;
        _switchWorkspaceEnd(tracker: any, duration: any, endProgress: any): void;
        readonly gestureActive: boolean;
        cancelSwitchAnimation(): void;
    };
};
//# sourceMappingURL=workspaceAnimation.d.ts.map