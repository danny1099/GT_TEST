import { People } from '@/data/people';
import { IPerson } from '@/models';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { FC, useState} from "react";
import { Checkbox } from '@mui/material'
import { FavoriteBorder, Favorite} from '@mui/icons-material';

const Home = () => {
  const [favoritePeople, setFavoritePeople] = useState<IPerson[]> ([]);
  const pageSize: number = 5;
  const findPerson = (person: IPerson) => !!favoritePeople.find(p => p.id === person.id);
  const filterPerson = (person: IPerson) => favoritePeople.filter(p => p.id !== person.id);

  const handleChange = (person: IPerson) => {
    setFavoritePeople(findPerson(person) ? filterPerson(person) : [...favoritePeople, person]);   
  }

  const columns = [
    {
      field: 'actions',
      headerName: '',
      width: 30,
      renderCell: (params: GridRenderCellParams ) => <> {
        <Checkbox size='small'
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />} 
                  checked={findPerson(params.row)}
                  onChange={() => handleChange(params.row)} />
      } </>
  },  
  {
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

  return <DataGrid
          disableColumnSelector
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