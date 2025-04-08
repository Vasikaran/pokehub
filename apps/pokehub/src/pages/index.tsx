import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPokemons, setPagination } from "../store/slices/pokemonSlice";
import Layout from "../components/layout";
import { Paper, Typography } from "@mui/material";
import { Button } from "@pokehub/components";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    flex: 1,
    renderCell: (params) => (
      <Typography sx={{ textTransform: "capitalize" }}>
        {params.value}
      </Typography>
    ),
  },
];

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pokemons, loading, count, currentPage, pageSize } = useAppSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    const offset = currentPage * pageSize;
    dispatch(fetchPokemons({ limit: pageSize, offset }));
  }, [dispatch, currentPage, pageSize]);

  const rows = pokemons.map((pokemon, index) => {
    const id =
      pokemon.url.split("/").filter(Boolean).pop() ||
      currentPage * pageSize + index + 1;
    return {
      id,
      name: pokemon.name,
      url: pokemon.url,
    };
  });

  const handleRowClick = (params: GridRowParams) => {
    router.push(`/pokemon/${params.row.name}`);
  };

  const handlePaginationModelChange = (newModel: GridPaginationModel) => {
    dispatch(
      setPagination({ page: newModel.page, pageSize: newModel.pageSize })
    );
  };

  return (
    <Layout title="Pokémon Explorer">
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1">
          Welcome to the Pokédex! Browse through the collection of Pokémon and
          click on any row to see detailed information.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationMode="server"
          rowCount={count}
          pageSizeOptions={[5, 10, 20, 50]}
          paginationModel={{ page: currentPage, pageSize }}
          onPaginationModelChange={handlePaginationModelChange}
          loading={loading}
          onRowClick={handleRowClick}
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </Paper>
    </Layout>
  );
}
