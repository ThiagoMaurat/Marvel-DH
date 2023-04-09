import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { useCartContext } from "contexts/cart";
import { getCharacterIdFromUrl } from "helper/getCharacterId";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const { push } = useRouter();

  const { setCart } = useCartContext();

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
            <List sx={{ gap: "10px", width: "fit-content" }}>
              {characters.items.map((character) => {
                const characterId = character.resourceURI
                  ? encodeURIComponent(
                      getCharacterIdFromUrl(character.resourceURI)!
                    )
                  : "";
                return (
                  <Link href={`/character/${characterId}`}>
                    <ListItem
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "#1976d2" },
                      }}
                    >{`${character.name}`}</ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>

          <Box>
            <Typography component={"h3"}>Preços</Typography>
            <Typography>{prices[0].price}</Typography>
          </Box>

          <Button
            onClick={() => {
              setCart({
                prices: comic.prices[0].price,
                stock: comic.stock,
                thumbnail: thumb,
                title: comic.title,
                description: comic.description,
              });
              push("/checkout/checkout");
            }}
            disabled={stock <= 0}
          >
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
