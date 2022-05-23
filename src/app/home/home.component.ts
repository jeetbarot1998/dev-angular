import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { ColDef } from 'ag-grid-community';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { HomeService } from '@app/home-grid/home.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    // resultFromApi :any = 'No-Result';

    columnDefs: { headerName: string; field: string; filter: boolean; sortable: boolean; resizable: boolean; minWidth: number; }[];
    gridApi: any;
    gridColumnApi: any;
    rowData: any;
  
    constructor(private homeService: HomeService) { 
      this.columnDefs = [
        {headerName:'Name', field: 'Name', filter: true, sortable: true, resizable: true, minWidth:300},
        {headerName:'Address', field: 'Address', filter: true, sortable: true, resizable: true, minWidth:300},
        {headerName:'EmailId', field: 'EmailId', filter: true, sortable: true, resizable: true, minWidth:300},
        {headerName:'Size', field: 'Size', filter: true, sortable: true, resizable: true, minWidth:300},
        {headerName:'TransactionId', field: 'TransactionId', filter: true, sortable: true, resizable: true, minWidth:300},
		{headerName:'TimeStamp', field: 'TimeStamp', filter: true, sortable: true, resizable: true, minWidth:300},

      ]
    }
  
    ngOnInit() {
    }
  
    onGridReady(params: any){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.homeService.getGridData().subscribe((response) => {
        params.api.setRowData(response)
        this.rowData = response
      })
    }
  
    onModelUpdated(params){
      this.gridApi = params.api;
      if (params.api && this.columnDefs.length != 0){
        this.onGridSizeChanged(params);
        this.gridApi.setDomLayout('autoHeight');
      }
      
    }
    onGridSizeChanged(params: any) {
      const gridWidth = document.getElementById('Home-Grid').offsetWidth;
      const columnstoShow = [];
      const columnstohide = [];
      let totalcolsWidth = 0 ;
      const allColumns = params.columnApi.getAllColumns();
      for(let i = 0; i< allColumns.length; i++){
        const column = allColumns[i];
        totalcolsWidth += column.getMinWidht();
        if (totalcolsWidth > gridWidth){
          columnstohide.push(column.colId)
        }
        else{
          columnstoShow.push(column.colId)
        }
      }
      params.columnApi.SetColumnsVisible(columnstoShow, true);
      params.columnApi.SetColumnsVisible(columnstohide, true);
      params.api.sizeColumnsToFit();
    }
  
    onCellClicked(event){
      console.log(event.colDef.field)
      console.log(event.node.data);
    }
}