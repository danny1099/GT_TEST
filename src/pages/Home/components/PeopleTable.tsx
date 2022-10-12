import { IPerson } from "@/models";
import { addFavorite } from "@/redux/states";
import { IStore } from "@/redux/store";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

export default function PeopleTable() {
  const dispatch = useDispatch()
  const stateDataGrid = useSelector((store: IStore) => store.people);
  const favoritePeople = useSelector((store: IStore) => store.favorites);
 
  const findPerson = (person: IPerson) => !!favoritePeople.find(p => p.id === person.id);
  const filterPerson = (person: IPerson) => favoritePeople.filter(p => p.id !== person.id);
  
  const handleChange = (person: IPerson) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...favoritePeople, person]
 
    dispatch(addFavorite(filteredPeople)) 
  }

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
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
  },
  {
    field: 'levelOfHappiness',
    headerName: 'Nivel de Felicidad',
    flex: 1,
    renderCell: (params: GridRenderCellParams ) => <> {params.value} </>
  }]


  return <DataGrid
          disableColumnSelector
          disableSelectionOnClick
          pageSize={5}
          autoHeight
          rowsPerPageOptions={[5]}
          rows={stateDataGrid} 
          columns={columns}
          getRowId = {(row: any) => row.id} 
        />
}
