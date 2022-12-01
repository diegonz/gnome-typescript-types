declare function animateAllocation(actor: any, box: any): any;
declare const Clutter: any;
declare const GLib: any;
declare const GObject: any;
declare const Graphene: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Background: any;
declare const DND: any;
declare const Main: any;
declare const OverviewControls: any;
declare const Params: any;
declare const Util: any;
declare const WindowPreview: any;
declare var WINDOW_PREVIEW_MAXIMUM_SCALE: number;
declare var WINDOW_REPOSITIONING_DELAY: number;
declare var LAYOUT_SCALE_WEIGHT: number;
declare var LAYOUT_SPACE_WEIGHT: number;
declare const BACKGROUND_CORNER_RADIUS_PIXELS: 30;
declare var LayoutStrategy: {
    new (params: any): {
        _monitor: any;
        _rowSpacing: any;
        _columnSpacing: any;
        computeLayout(_windows: any, _layoutParams: any): void;
        computeScaleAndSpace(_layout: any, _area: any): void;
        computeWindowSlots(_layout: any, _area: any): void;
    };
};
declare var UnalignedLayoutStrategy: {
    new (params: any): {
        _newRow(): {
            x: number;
            y: number;
            width: number;
            height: number;
            fullWidth: number;
            fullHeight: number;
            windows: any[];
        };
        _computeWindowScale(window: any): any;
        _computeRowSizes(layout: any): void;
        _keepSameRow(row: any, window: any, width: any, idealRowWidth: any): boolean;
        _sortRow(row: any): void;
        computeLayout(windows: any, layoutParams: any): {
            numRows: any;
            rows: {
                x: number;
                y: number;
                width: number;
                height: number;
                fullWidth: number;
                fullHeight: number;
                windows: any[];
            }[];
            maxColumns: number;
            gridWidth: number;
            gridHeight: number;
        };
        computeScaleAndSpace(layout: any, area: any): number[];
        computeWindowSlots(layout: any, area: any): any[][];
        _monitor: any;
        _rowSpacing: any;
        _columnSpacing: any;
    };
};
declare var WorkspaceLayout: any;
declare var WorkspaceBackground: any;
/**
 * @metaWorkspace: a #Meta.Workspace, or null
 */
declare var Workspace: any;
//# sourceMappingURL=workspace.d.ts.map