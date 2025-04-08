import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from "@mui/material";

export interface PokemonCardProps {
  name: string;
  image?: string;
  types?: string[];
  onClick?: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  image,
  types = [],
  onClick,
}) => {
  return (
    <MuiCard
      sx={{
        maxWidth: 300,
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 3,
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height={200}
        image={image || `/api/placeholder/200/200?text=${name}`}
        alt={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        {types.length > 0 && (
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
            {types.map((type) => (
              <Chip
                key={type}
                label={type}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        )}
      </CardContent>
    </MuiCard>
  );
};
