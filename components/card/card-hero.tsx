import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Comic } from "types/getComics";
import { letterCounter } from "helper/letterCounter";

export default function CardHero({ thumbnail, title, description, id }: Comic) {
  const { push } = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 350,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt="card-hero-image"
        height="250"
        image={`${thumbnail.path}.${thumbnail.extension}`}
        sx={{ objectFit: "cover", objectPosition: "35% 25%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {letterCounter(description, 120)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => push(`/comic/${id}`)} size="small">
          Comprar
        </Button>
        <Button size="small">Ver Detalhes</Button>
      </CardActions>
    </Card>
  );
}
