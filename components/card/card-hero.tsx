import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardHeroProps {
  cardImage: string;
  titleText: string;
  descriptionText: string;
  onClick: () => void;
}

export default function CardHero(props: CardHeroProps) {
  const { cardImage, onClick, titleText, descriptionText } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="card-hero-image"
        height="140"
        image={cardImage}
      />
      <CardContent sx={{ background: "#181A1B" }}>
        <Typography gutterBottom variant="h5" component="div">
          {titleText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descriptionText}
        </Typography>
      </CardContent>
      <CardActions sx={{ background: "#181A1B" }}>
        <Button onClick={onClick} size="small">
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
}
