import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Comic } from "types/getComics";

export default function CardHero({ thumbnail, title, description, id }: Comic) {
  const { push } = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="card-hero-image"
        height="140"
        image={`${thumbnail.path}.${thumbnail.extension}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => push(`/comics/${id}`)} size="small">
          Comprar
        </Button>
        <Button size="small">Ver Detalhes</Button>
      </CardActions>
    </Card>
  );
}
