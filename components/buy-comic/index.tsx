import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { getCharacterIdFromUrl } from "helper/getCharacterId";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Comic } from "types/getComic";

// Nome do quadrinho
// Imagem principal
// Preço
// Botão de compra conforme a disponibilidade (Se houver estoque, habilite o
// botão, caso contrário, desabilite com uma mensagem: “Sem estoque”)
// Lista de personagem associados ao quadrinho, com links para a página de
// cada personagem

export default function ComicInfo(comic: Comic) {
  const { title, thumbnail, prices, stock, characters } = comic;

  const thumb = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Grid container padding={"3rem"}>
      <Grid item xs={12} md={6}>
        <Box display={"flex"} gap={"3rem"} flexDirection={"column"}>
          <Typography variant="h4" component="h4">
            {title}
          </Typography>

          <Box>
            <Typography component={"h3"}>Personagens</Typography>
            <List sx={{ gap: "10px" }}>
              {characters.items.map((character) => (
                <Link
                  href={`/character/${getCharacterIdFromUrl(
                    character.resourceURI
                  )}`}
                >
                  <ListItem
                    sx={{ cursor: "pointer" }}
                  >{`${character.name}`}</ListItem>
                </Link>
              ))}
            </List>
          </Box>

          <Box>
            <Typography component={"h3"}>Preços</Typography>
            <List>
              {prices.map((price) => {
                return (
                  <ListItem>
                    <Typography>{`R$${price.price}`}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Button disabled={stock <= 0}>
            {stock > 0 ? "Comprar" : "Sem estoque"}
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p="1rem">
          <Image src={thumb} width={826} height={826} />
        </Box>
      </Grid>
    </Grid>
  );
}
