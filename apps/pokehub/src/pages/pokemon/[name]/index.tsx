import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPokemonDetails } from "@/store/slices/pokemonSlice";
import Layout from "@/components/layout";
import {
  Box,
  Typography,
  Paper,
  Chip,
  LinearProgress,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button } from "@pokehub/components";
import { typeColors } from "@pokehub/utils";
import Image from "next/image";
import { PokemonAbility, PokemonStat, PokemonType } from "@/types/types";

export default function PokemonDetail() {
  const router = useRouter();
  const { name } = router.query as { name?: string };
  const dispatch = useAppDispatch();
  const { pokemonDetails, loading, error } = useAppSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    if (name && typeof name === "string") {
      dispatch(fetchPokemonDetails(name));
    }
  }, [dispatch, name]);

  if (loading)
    return (
      <Layout>
        <Box sx={{ width: "100%", mt: 4 }}>
          <LinearProgress />
        </Box>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography color="error" variant="h6">
            Error: {error}
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.back()}
            sx={{ mt: 2 }}
          >
            Go Back
          </Button>
        </Paper>
      </Layout>
    );

  if (!pokemonDetails)
    return (
      <Layout>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6">No Pokémon details found</Typography>
          <Button
            variant="contained"
            onClick={() => router.back()}
            sx={{ mt: 2 }}
          >
            Go Back
          </Button>
        </Paper>
      </Layout>
    );

  return (
    <Layout title={`Pokémon: ${pokemonDetails.name}`}>
      <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 3 }}>
        Back to List
      </Button>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Pokemon Image */}
          <Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Image
                src={
                  pokemonDetails.sprites?.front_default ||
                  `/api/placeholder/200/200?text=${pokemonDetails.name}`
                }
                alt={pokemonDetails.name}
                style={{
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                }}
                width={300}
                height={300}
              />
            </Box>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {pokemonDetails.types?.map((type: PokemonType) => (
                <Chip
                  key={type.type.name}
                  label={type.type.name}
                  sx={{
                    textTransform: "capitalize",
                    bgcolor:
                      typeColors[type.type.name as keyof typeof typeColors] ||
                      "primary.main",
                    color: "#fff",
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid>
            <Typography
              variant="h4"
              sx={{ textTransform: "capitalize", mb: 2 }}
            >
              {pokemonDetails.name}{" "}
              <Typography component="span" variant="h6">
                #{pokemonDetails.id}
              </Typography>
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Base Stats
              </Typography>
              {pokemonDetails.stats?.map((stat: PokemonStat) => (
                <Box key={stat.stat.name} sx={{ mb: 1 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {stat.stat.name}
                    </Typography>
                    <Typography>{stat.base_stat}</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(stat.base_stat / 255) * 100}
                    sx={{ height: 8, borderRadius: 1 }}
                  />
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid>
                <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
                  <Typography variant="subtitle2">Height</Typography>
                  <Typography>
                    {(pokemonDetails.height / 10).toFixed(1)} m
                  </Typography>
                </Paper>
              </Grid>
              <Grid>
                <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
                  <Typography variant="subtitle2">Weight</Typography>
                  <Typography>
                    {(pokemonDetails.weight / 10).toFixed(1)} kg
                  </Typography>
                </Paper>
              </Grid>
              <Grid>
                <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
                  <Typography variant="subtitle2">Abilities</Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                  >
                    {pokemonDetails.abilities?.map(
                      (ability: PokemonAbility) => (
                        <Chip
                          key={ability.ability.name}
                          label={ability.ability.name}
                          size="small"
                          sx={{ textTransform: "capitalize" }}
                          variant={ability.is_hidden ? "outlined" : "filled"}
                        />
                      )
                    )}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
}
