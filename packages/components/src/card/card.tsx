import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  CardProps as MuiCardProps,
  CardActions,
} from "@mui/material";

export interface CardProps extends MuiCardProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  imageHeight?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt,
  description,
  children,
  imageHeight = 200,
  ...props
}) => {
  return (
    <MuiCard {...props}>
      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={imageAlt || title || "Card image"}
        />
      )}
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
        {children}
      </CardContent>
    </MuiCard>
  );
};
