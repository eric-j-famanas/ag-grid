// Type definitions for ag-grid v4.0.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { MasterSlaveService } from "./masterSlaveService";
import { CsvExportParams } from "./csvCreator";
import { ColDef } from "./entities/colDef";
import { RowNode } from "./entities/rowNode";
import { Column } from "./entities/column";
import { IRowModel } from "./interfaces/iRowModel";
import { RangeSelection } from "./interfaces/iRangeController";
import { GridCell } from "./entities/gridCell";
import { AddRangeSelectionParams } from "./interfaces/iRangeController";
export declare class GridApi {
    private csvCreator;
    private gridCore;
    private rowRenderer;
    private headerRenderer;
    private filterManager;
    private columnController;
    private selectionController;
    private gridOptionsWrapper;
    private gridPanel;
    private valueService;
    private masterSlaveService;
    private eventService;
    private floatingRowModel;
    private context;
    private rowModel;
    private sortController;
    private paginationController;
    private focusedCellController;
    private rangeController;
    private clipboardService;
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __getMasterSlaveService(): MasterSlaveService;
    getFirstRenderedRow(): number;
    getLastRenderedRow(): number;
    getDataAsCsv(params?: CsvExportParams): string;
    exportDataAsCsv(params?: CsvExportParams): void;
    setDatasource(datasource: any): void;
    setRowData(rowData: any[]): void;
    setFloatingTopRowData(rows: any[]): void;
    setFloatingBottomRowData(rows: any[]): void;
    setColumnDefs(colDefs: ColDef[]): void;
    refreshRows(rowNodes: RowNode[]): void;
    refreshCells(rowNodes: RowNode[], colIds: string[]): void;
    rowDataChanged(rows: any): void;
    refreshView(): void;
    softRefreshView(): void;
    refreshGroupRows(): void;
    refreshHeader(): void;
    isAnyFilterPresent(): boolean;
    isAdvancedFilterPresent(): boolean;
    isQuickFilterPresent(): boolean;
    getModel(): IRowModel;
    onGroupExpandedOrCollapsed(refreshFromIndex: any): void;
    expandAll(): void;
    collapseAll(): void;
    addVirtualRowListener(eventName: string, rowIndex: number, callback: Function): void;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    setQuickFilter(newFilter: any): void;
    selectIndex(index: any, tryMulti: any, suppressEvents: any): void;
    deselectIndex(index: number, suppressEvents?: boolean): void;
    selectNode(node: RowNode, tryMulti?: boolean, suppressEvents?: boolean): void;
    deselectNode(node: any, suppressEvents?: boolean): void;
    selectAll(): void;
    deselectAll(): void;
    recomputeAggregates(): void;
    sizeColumnsToFit(): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    isNodeSelected(node: any): any;
    getSelectedNodesById(): {
        [nodeId: number]: RowNode;
    };
    getSelectedNodes(): RowNode[];
    getSelectedRows(): any[];
    getBestCostNodeSelection(): any;
    getRenderedNodes(): any[];
    ensureColIndexVisible(index: any): void;
    ensureColumnVisible(key: string | Column | ColDef): void;
    ensureIndexVisible(index: any): void;
    ensureNodeVisible(comparator: any): void;
    forEachNode(callback: (rowNode: RowNode) => void): void;
    forEachNodeAfterFilter(callback: (rowNode: RowNode) => void): void;
    forEachNodeAfterFilterAndSort(callback: (rowNode: RowNode) => void): void;
    getFilterApiForColDef(colDef: any): any;
    getFilterApi(key: string | Column | ColDef): any;
    getColumnDef(key: string | Column | ColDef): ColDef;
    onFilterChanged(): void;
    setSortModel(sortModel: any): void;
    getSortModel(): {
        colId: string;
        sort: string;
    }[];
    setFilterModel(model: any): void;
    getFilterModel(): any;
    getFocusedCell(): GridCell;
    setFocusedCell(rowIndex: number, colKey: Column | ColDef | string, floating?: string): void;
    setHeaderHeight(headerHeight: number): void;
    showToolPanel(show: any): void;
    isToolPanelShowing(): boolean;
    doLayout(): void;
    getValue(colKey: string | ColDef | Column, rowNode: RowNode): any;
    addEventListener(eventType: string, listener: Function): void;
    addGlobalListener(listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    removeGlobalListener(listener: Function): void;
    dispatchEvent(eventType: string, event?: any): void;
    destroy(): void;
    resetQuickFilter(): void;
    getRangeSelections(): RangeSelection[];
    addRangeSelection(rangeSelection: AddRangeSelectionParams): void;
    clearRangeSelection(): void;
    copySelectedRowsToClipboard(): void;
    copySelectedRangeToClipboard(): void;
}