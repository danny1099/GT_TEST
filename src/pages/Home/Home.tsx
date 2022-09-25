import { People } from '@/data/people';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import {FC} from "react";

export interface HomeInterface {}

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 4, col1: 'Danny', col2: 'Mosquera' },
  { id: 5, col1: 'Developer', col2: 'is Amazing' },
  { id: 6, col1: 'Laura Sofia', col2: 'Mosquera' },
  { id: 7, col1: 'Otra', col2: 'vaina ahí' },
];

const columns = [{
    field: 'name',
    headerName: 'Nombre',
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams ) => <> {params.value} </>
},
{
  field: 'category',
  headerName: 'Categoria',
  flex: 1,
  minWidth: 120,
  renderCell: (params: GridRenderCellParams ) => <> {params.value} </>
},
{
  field: 'company',
  headerName: 'Compañia',
  flex: 1,
  renderCell: (params: GridRenderCellParams ) => <> {params.value} </>
}]

const Home: FC<HomeInterface> = () => {
  const pageSize: number = 5;

  return <DataGrid
          disableColumnSelector
          checkboxSelection
          disableSelectionOnClick
          pageSize={pageSize}
          autoHeight
          rowsPerPageOptions={[pageSize]}
          rows={People} 
          columns={columns}
          getRowId = {(row: any) => row.id} 
        />
}

export default Home;